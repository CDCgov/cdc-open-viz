import { _ as Pi, a as Ja, b as Vi, d as Wt, t as Kt, e as Wc, f as Sa, g as Gc, h as K, l as ll, m as Yc, i as wr } from "./storybook-c84489b0.es.js";
import * as M from "react";
import a, { useLayoutEffect as zi, forwardRef as Ct, useContext as Se, lazy as Zt, useState as U, useCallback as ae, Suspense as jr, useEffect as ie, useRef as ce, useMemo as vn, Children as Ht, memo as qi, Fragment as At, createElement as Kc, Component as ct, createContext as En, cloneElement as me } from "react";
import { g as xn, c as Yn } from "./storybook-92157f1b.es.js";
import { R as Jc, r as Xc, q as Ui, s as Qc, t as Wi, v as e0, i as An, w as t0, x as r0, y as n0, c as Gi, z as Yi, A as a0, B as Ki, C as o0, D as l0, E as i0, F as s0, G as u0, H as c0, I as Ji, J as d0, K as p0, L as Xi, _ as f0, M as m0, N as g0, O as Xa, d as Qi, P as es, Q as ts, U as h0, V as b0, W as y0, e as v0, S as il, X as Ca, k as Kn } from "./storybook-86ede3a4.es.js";
import { L as rs, v as E0 } from "./storybook-d79fba58.es.js";
import { d as _e } from "./storybook-398c73a4.es.js";
var Ue = (e) => `control-${e.replace(/\s+/g, "-")}`, wn = (e) => `set-${e.replace(/\s+/g, "-")}`, x0 = function(t) {
  return t();
}, ns = M["useInsertionEffect"] ? M["useInsertionEffect"] : !1, Qa = ns || x0, sl = ns || zi;
function Wr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var as = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, o, l) {
      function i(c, d) {
        if (!o[c]) {
          if (!n[c]) {
            var g = typeof Wr == "function" && Wr;
            if (!d && g)
              return g(c, !0);
            if (u)
              return u(c, !0);
            var h = new Error("Cannot find module '" + c + "'");
            throw h.code = "MODULE_NOT_FOUND", h;
          }
          var p = o[c] = { exports: {} };
          n[c][0].call(p.exports, function(m) {
            var f = n[c][1][m];
            return i(f || m);
          }, p, p.exports, r, n, o, l);
        }
        return o[c].exports;
      }
      for (var u = typeof Wr == "function" && Wr, s = 0; s < l.length; s++)
        i(l[s]);
      return i;
    }({ 1: [function(r, n, o) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var i = r("./similar");
          return new i();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(r, n, o) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      l.prototype.get = function(i) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, i))
          return this.lastItem.val;
        if (u = this.indexOf(i), u >= 0)
          return this.lastItem = this.list[u], this.list[u].val;
      }, l.prototype.set = function(i, u) {
        var s;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? (this.lastItem.val = u, this) : (s = this.indexOf(i), s >= 0 ? (this.lastItem = this.list[s], this.list[s].val = u, this) : (this.lastItem = { key: i, val: u }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(i) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0), u = this.indexOf(i), u >= 0)
          return this.size--, this.list.splice(u, 1)[0];
      }, l.prototype.has = function(i) {
        var u;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? !0 : (u = this.indexOf(i), u >= 0 ? (this.lastItem = this.list[u], !0) : !1);
      }, l.prototype.forEach = function(i, u) {
        var s;
        for (s = 0; s < this.size; s++)
          i.call(u || this, this.list[s].val, this.list[s].key, this);
      }, l.prototype.indexOf = function(i) {
        var u;
        for (u = 0; u < this.size; u++)
          if (this.isEqual(this.list[u].key, i))
            return u;
        return -1;
      }, l.prototype.isEqual = function(i, u) {
        return i === u || i !== i && u !== u;
      }, n.exports = l;
    }, {}], 3: [function(r, n, o) {
      var l = r("map-or-similar");
      n.exports = function(c) {
        var d = new l(!1), g = [];
        return function(h) {
          var p = function() {
            var m = d, f, E, y = arguments.length - 1, x = Array(y + 1), b = !0, v;
            if ((p.numArgs || p.numArgs === 0) && p.numArgs !== y + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (v = 0; v < y; v++) {
              if (x[v] = {
                cacheItem: m,
                arg: arguments[v]
              }, m.has(arguments[v])) {
                m = m.get(arguments[v]);
                continue;
              }
              b = !1, f = new l(!1), m.set(arguments[v], f), m = f;
            }
            return b && (m.has(arguments[y]) ? E = m.get(arguments[y]) : b = !1), b || (E = h.apply(null, arguments), m.set(arguments[y], E)), c > 0 && (x[y] = {
              cacheItem: m,
              arg: arguments[y]
            }, b ? i(g, x) : g.push(x), g.length > c && u(g.shift())), p.wasMemoized = b, p.numArgs = y + 1, E;
          };
          return p.limit = c, p.wasMemoized = !1, p.cache = d, p.lru = g, p;
        };
      };
      function i(c, d) {
        var g = c.length, h = d.length, p, m, f;
        for (m = 0; m < g; m++) {
          for (p = !0, f = 0; f < h; f++)
            if (!s(c[m][f].arg, d[f].arg)) {
              p = !1;
              break;
            }
          if (p)
            break;
        }
        c.push(c.splice(m, 1)[0]);
      }
      function u(c) {
        var d = c.length, g = c[d - 1], h, p;
        for (g.cacheItem.delete(g.arg), p = d - 2; p >= 0 && (g = c[p], h = g.cacheItem.get(g.arg), !h || !h.size); p--)
          g.cacheItem.delete(g.arg);
      }
      function s(c, d) {
        return c === d || c !== c && d !== d;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(as);
var A0 = as.exports;
const Pt = /* @__PURE__ */ xn(A0), { logger: w0 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var S0 = Ja({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, o = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, f = t ? Symbol.for("react.lazy") : 60116, E = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, x = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
    function v(B) {
      return typeof B == "string" || typeof B == "function" || B === o || B === d || B === i || B === l || B === h || B === p || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === m || B.$$typeof === u || B.$$typeof === s || B.$$typeof === g || B.$$typeof === y || B.$$typeof === x || B.$$typeof === b || B.$$typeof === E);
    }
    function A(B) {
      if (typeof B == "object" && B !== null) {
        var Ve = B.$$typeof;
        switch (Ve) {
          case r:
            var Ge = B.type;
            switch (Ge) {
              case c:
              case d:
              case o:
              case i:
              case l:
              case h:
                return Ge;
              default:
                var _t = Ge && Ge.$$typeof;
                switch (_t) {
                  case s:
                  case g:
                  case f:
                  case m:
                  case u:
                    return _t;
                  default:
                    return Ve;
                }
            }
          case n:
            return Ve;
        }
      }
    }
    var w = c, C = d, S = s, _ = u, O = r, T = g, R = o, F = f, j = m, D = n, L = i, H = l, P = h, I = !1;
    function N(B) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(B) || A(B) === c;
    }
    function J(B) {
      return A(B) === d;
    }
    function ne(B) {
      return A(B) === s;
    }
    function Y(B) {
      return A(B) === u;
    }
    function X(B) {
      return typeof B == "object" && B !== null && B.$$typeof === r;
    }
    function $(B) {
      return A(B) === g;
    }
    function V(B) {
      return A(B) === o;
    }
    function q(B) {
      return A(B) === f;
    }
    function de(B) {
      return A(B) === m;
    }
    function xe(B) {
      return A(B) === n;
    }
    function dt(B) {
      return A(B) === i;
    }
    function Ie(B) {
      return A(B) === l;
    }
    function We(B) {
      return A(B) === h;
    }
    e.AsyncMode = w, e.ConcurrentMode = C, e.ContextConsumer = S, e.ContextProvider = _, e.Element = O, e.ForwardRef = T, e.Fragment = R, e.Lazy = F, e.Memo = j, e.Portal = D, e.Profiler = L, e.StrictMode = H, e.Suspense = P, e.isAsyncMode = N, e.isConcurrentMode = J, e.isContextConsumer = ne, e.isContextProvider = Y, e.isElement = X, e.isForwardRef = $, e.isFragment = V, e.isLazy = q, e.isMemo = de, e.isPortal = xe, e.isProfiler = dt, e.isStrictMode = Ie, e.isSuspense = We, e.isValidElementType = v, e.typeOf = A;
  })();
} }), C0 = Ja({ "../../node_modules/react-is/index.js"(e, t) {
  t.exports = S0();
} }), os = Ja({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
  var r = C0(), n = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, u = {};
  u[r.ForwardRef] = l, u[r.Memo] = i;
  function s(E) {
    return r.isMemo(E) ? i : u[E.$$typeof] || n;
  }
  var c = Object.defineProperty, d = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
  function f(E, y, x) {
    if (typeof y != "string") {
      if (m) {
        var b = p(y);
        b && b !== m && f(E, b, x);
      }
      var v = d(y);
      g && (v = v.concat(g(y)));
      for (var A = s(E), w = s(y), C = 0; C < v.length; ++C) {
        var S = v[C];
        if (!o[S] && !(x && x[S]) && !(w && w[S]) && !(A && A[S])) {
          var _ = h(y, S);
          try {
            c(E, S, _);
          } catch {
          }
        }
      }
    }
    return E;
  }
  t.exports = f;
} });
function ls(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var k0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eo = ls(function(e) {
  return k0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function _0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function O0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var T0 = function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var l;
      n.tags.length === 0 ? n.insertionPoint ? l = n.insertionPoint.nextSibling : n.prepend ? l = n.container.firstChild : l = n.before : l = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, l), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(O0(this));
    var n = this.tags[this.tags.length - 1], o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
    if (o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o, this.isSpeedy) {
      var l = _0(n);
      try {
        l.insertRule(r, l.cssRules.length);
      } catch (i) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) || console.error('There was a problem inserting the following rule: "' + r + '"', i);
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, e;
}(), Ee = "-ms-", fn = "-moz-", W = "-webkit-", to = "comm", ro = "rule", no = "decl", F0 = "@import", is = "@keyframes", R0 = "@layer", D0 = Math.abs, Sn = String.fromCharCode, L0 = Object.assign;
function M0(e, t) {
  return ge(e, 0) ^ 45 ? (((t << 2 ^ ge(e, 0)) << 2 ^ ge(e, 1)) << 2 ^ ge(e, 2)) << 2 ^ ge(e, 3) : 0;
}
function ss(e) {
  return e.trim();
}
function B0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, r) {
  return e.replace(t, r);
}
function ka(e, t) {
  return e.indexOf(t);
}
function ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function kr(e, t, r) {
  return e.slice(t, r);
}
function rt(e) {
  return e.length;
}
function ao(e) {
  return e.length;
}
function Gr(e, t) {
  return t.push(e), e;
}
function I0(e, t) {
  return e.map(t).join("");
}
var Cn = 1, er = 1, us = 0, Fe = 0, le = 0, ur = "";
function kn(e, t, r, n, o, l, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: l, line: Cn, column: er, length: i, return: "" };
}
function yr(e, t) {
  return L0(kn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $0() {
  return le;
}
function j0() {
  return le = Fe > 0 ? ge(ur, --Fe) : 0, er--, le === 10 && (er = 1, Cn--), le;
}
function De() {
  return le = Fe < us ? ge(ur, Fe++) : 0, er++, le === 10 && (er = 1, Cn++), le;
}
function it() {
  return ge(ur, Fe);
}
function tn() {
  return Fe;
}
function Hr(e, t) {
  return kr(ur, e, t);
}
function _r(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function cs(e) {
  return Cn = er = 1, us = rt(ur = e), Fe = 0, [];
}
function ds(e) {
  return ur = "", e;
}
function rn(e) {
  return ss(Hr(Fe - 1, _a(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function H0(e) {
  for (; (le = it()) && le < 33; )
    De();
  return _r(e) > 2 || _r(le) > 3 ? "" : " ";
}
function N0(e, t) {
  for (; --t && De() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return Hr(e, tn() + (t < 6 && it() == 32 && De() == 32));
}
function _a(e) {
  for (; De(); )
    switch (le) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _a(le);
        break;
      case 40:
        e === 41 && _a(e);
        break;
      case 92:
        De();
        break;
    }
  return Fe;
}
function Z0(e, t) {
  for (; De() && e + le !== 47 + 10 && !(e + le === 42 + 42 && it() === 47); )
    ;
  return "/*" + Hr(t, Fe - 1) + "*" + Sn(e === 47 ? e : De());
}
function P0(e) {
  for (; !_r(it()); )
    De();
  return Hr(e, Fe);
}
function V0(e) {
  return ds(nn("", null, null, null, [""], e = cs(e), 0, [0], e));
}
function nn(e, t, r, n, o, l, i, u, s) {
  for (var c = 0, d = 0, g = i, h = 0, p = 0, m = 0, f = 1, E = 1, y = 1, x = 0, b = "", v = o, A = l, w = n, C = b; E; )
    switch (m = x, x = De()) {
      case 40:
        if (m != 108 && ge(C, g - 1) == 58) {
          ka(C += G(rn(x), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += rn(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += H0(m);
        break;
      case 92:
        C += N0(tn() - 1, 7);
        continue;
      case 47:
        switch (it()) {
          case 42:
          case 47:
            Gr(z0(Z0(De(), tn()), t, r), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * f:
        u[c++] = rt(C) * y;
      case 125 * f:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            E = 0;
          case 59 + d:
            y == -1 && (C = G(C, /\f/g, "")), p > 0 && rt(C) - g && Gr(p > 32 ? cl(C + ";", n, r, g - 1) : cl(G(C, " ", "") + ";", n, r, g - 2), s);
            break;
          case 59:
            C += ";";
          default:
            if (Gr(w = ul(C, t, r, c, d, o, u, b, v = [], A = [], g), l), x === 123)
              if (d === 0)
                nn(C, t, w, w, v, l, g, u, A);
              else
                switch (h === 99 && ge(C, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nn(e, w, w, n && Gr(ul(e, w, w, 0, 0, o, u, b, o, v = [], g), A), o, A, g, u, n ? v : A);
                    break;
                  default:
                    nn(C, w, w, w, [""], A, 0, u, A);
                }
        }
        c = d = p = 0, f = y = 1, b = C = "", g = i;
        break;
      case 58:
        g = 1 + rt(C), p = m;
      default:
        if (f < 1) {
          if (x == 123)
            --f;
          else if (x == 125 && f++ == 0 && j0() == 125)
            continue;
        }
        switch (C += Sn(x), x * f) {
          case 38:
            y = d > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            u[c++] = (rt(C) - 1) * y, y = 1;
            break;
          case 64:
            it() === 45 && (C += rn(De())), h = it(), d = g = rt(b = C += P0(tn())), x++;
            break;
          case 45:
            m === 45 && rt(C) == 2 && (f = 0);
        }
    }
  return l;
}
function ul(e, t, r, n, o, l, i, u, s, c, d) {
  for (var g = o - 1, h = o === 0 ? l : [""], p = ao(h), m = 0, f = 0, E = 0; m < n; ++m)
    for (var y = 0, x = kr(e, g + 1, g = D0(f = i[m])), b = e; y < p; ++y)
      (b = ss(f > 0 ? h[y] + " " + x : G(x, /&\f/g, h[y]))) && (s[E++] = b);
  return kn(e, t, r, o === 0 ? ro : u, s, c, d);
}
function z0(e, t, r) {
  return kn(e, t, r, to, Sn($0()), kr(e, 2, -2), 0);
}
function cl(e, t, r, n) {
  return kn(e, t, r, no, kr(e, 0, n), kr(e, n + 1, -1), n);
}
function Qt(e, t) {
  for (var r = "", n = ao(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function q0(e, t, r, n) {
  switch (e.type) {
    case R0:
      if (e.children.length)
        break;
    case F0:
    case no:
      return e.return = e.return || e.value;
    case to:
      return "";
    case is:
      return e.return = e.value + "{" + Qt(e.children, n) + "}";
    case ro:
      e.value = e.props.join(",");
  }
  return rt(r = Qt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function U0(e) {
  var t = ao(e);
  return function(r, n, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, o, l) || "";
    return i;
  };
}
var dl = function(e) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (t.has(r))
      return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
}, W0 = function(e, t, r) {
  for (var n = 0, o = 0; n = o, o = it(), n === 38 && o === 12 && (t[r] = 1), !_r(o); )
    De();
  return Hr(e, Fe);
}, G0 = function(e, t) {
  var r = -1, n = 44;
  do
    switch (_r(n)) {
      case 0:
        n === 38 && it() === 12 && (t[r] = 1), e[r] += W0(Fe - 1, t, r);
        break;
      case 2:
        e[r] += rn(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = it() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += Sn(n);
    }
  while (n = De());
  return e;
}, Y0 = function(e, t) {
  return ds(G0(cs(e), t));
}, pl = /* @__PURE__ */ new WeakMap(), K0 = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !pl.get(r)) && !n) {
      pl.set(e, !0);
      for (var o = [], l = Y0(t, o), i = r.props, u = 0, s = 0; u < l.length; u++)
        for (var c = 0; c < i.length; c++, s++)
          e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + " " + l[u];
    }
  }
}, J0 = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, X0 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Q0 = function(e) {
  return e.type === "comm" && e.children.indexOf(X0) > -1;
}, e1 = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1; u >= 0; u--) {
          var s = i[u];
          if (s.line < t.line)
            break;
          if (s.column < t.column) {
            if (Q0(s))
              return;
            break;
          }
        }
        o.forEach(function(c) {
          console.error('The pseudo class "' + c + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + c.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ps = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, t1 = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!ps(t[r]))
      return !0;
  return !1;
}, fl = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, r1 = function(e, t, r) {
  ps(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), fl(e)) : t1(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), fl(e)));
};
function fs(e, t) {
  switch (M0(e, t)) {
    case 5103:
      return W + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + fn + e + Ee + e + e;
    case 6828:
    case 4268:
      return W + e + Ee + e + e;
    case 6165:
      return W + e + Ee + "flex-" + e + e;
    case 5187:
      return W + e + G(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + Ee + "flex-$1$2") + e;
    case 5443:
      return W + e + Ee + "flex-item-" + G(e, /flex-|-self/, "") + e;
    case 4675:
      return W + e + Ee + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return W + e + Ee + G(e, "shrink", "negative") + e;
    case 5292:
      return W + e + Ee + G(e, "basis", "preferred-size") + e;
    case 6060:
      return W + "box-" + G(e, "-grow", "") + W + e + Ee + G(e, "grow", "positive") + e;
    case 4554:
      return W + G(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return G(e, /(.+)-inline(.+)/, W + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rt(e) - 1 - t > 6)
        switch (ge(e, t + 1)) {
          case 109:
            if (ge(e, t + 4) !== 45)
              break;
          case 102:
            return G(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + fn + (ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ka(e, "stretch") ? fs(G(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ge(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ge(e, rt(e) - 3 - (~ka(e, "!important") && 10))) {
        case 107:
          return G(e, ":", ":" + W) + e;
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + Ee + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ge(e, t + 11)) {
        case 114:
          return W + e + Ee + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + Ee + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + Ee + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + Ee + e + e;
  }
  return e;
}
var n1 = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case no:
        e.return = fs(e.value, e.length);
        break;
      case is:
        return Qt([yr(e, { value: G(e.value, "@", "@" + W) })], n);
      case ro:
        if (e.length)
          return I0(e.props, function(o) {
            switch (B0(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Qt([yr(e, { props: [G(o, /:(read-\w+)/, ":" + fn + "$1")] })], n);
              case "::placeholder":
                return Qt([yr(e, { props: [G(o, /:(plac\w+)/, ":" + W + "input-$1")] }), yr(e, { props: [G(o, /:(plac\w+)/, ":" + fn + "$1")] }), yr(e, { props: [G(o, /:(plac\w+)/, Ee + "input-$1")] })], n);
            }
            return "";
          });
    }
}, a1 = [n1], o1 = function(e) {
  var t = e.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var f = m.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || a1;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, l, i = [];
  l = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(m) {
    for (var f = m.getAttribute("data-emotion").split(" "), E = 1; E < f.length; E++)
      o[f[E]] = !0;
    i.push(m);
  });
  var u, s = [K0, J0];
  s.push(e1({ get compat() {
    return p.compat;
  } }), r1);
  {
    var c, d = [q0, function(m) {
      m.root || (m.return ? c.insert(m.return) : m.value && m.type !== to && c.insert(m.value + "{}"));
    }], g = U0(s.concat(n, d)), h = function(m) {
      return Qt(V0(m), g);
    };
    u = function(m, f, E, y) {
      c = E, f.map !== void 0 && (c = { insert: function(x) {
        E.insert(x + f.map);
      } }), h(m ? m + "{" + f.styles + "}" : f.styles), y && (p.inserted[f.name] = !0);
    };
  }
  var p = { key: t, sheet: new T0({ key: t, container: l, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: o, registered: {}, insert: u };
  return p.sheet.hydrate(i), p;
};
Pi(os());
var l1 = !0;
function oo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var _n = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || l1 === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, On = function(e, t, r) {
  _n(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function i1(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var s1 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, ml = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, u1 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", c1 = /[A-Z]|^ms/g, ms = /_EMO_([^_]+?)_([^]*?)_EMO_/g, lo = function(e) {
  return e.charCodeAt(1) === 45;
}, gl = function(e) {
  return e != null && typeof e != "boolean";
}, Jn = ls(function(e) {
  return lo(e) ? e : e.replace(c1, "-$&").toLowerCase();
}), mn = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ms, function(r, n, o) {
          return nt = { name: n, styles: o, next: nt }, n;
        });
  }
  return s1[e] !== 1 && !lo(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
hl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, bl = ["normal", "none", "initial", "inherit", "unset"], yl = mn, vl = /^-ms-/, El = /-(.)/g, Xn = {}, mn = function(e, t) {
  if (e === "content" && (typeof t != "string" || bl.indexOf(t) === -1 && !hl.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var r = yl(e, t);
  return r !== "" && !lo(e) && e.indexOf("-") !== -1 && Xn[e] === void 0 && (Xn[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(vl, "ms-").replace(El, function(n, o) {
    return o.toUpperCase();
  }) + "?")), r;
};
var hl, bl, yl, vl, El, Xn, gs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Or(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(gs);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return nt = { name: r.name, styles: r.styles, next: nt }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            nt = { name: n.name, styles: n.styles, next: nt }, n = n.next;
        var o = r.styles + ";";
        return r.map !== void 0 && (o += r.map), o;
      }
      return d1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = nt, i = r(e);
        return nt = l, Or(e, t, i);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var u = [], s = r.replace(ms, function(d, g, h) {
        var p = "animation" + u.length;
        return u.push("const " + p + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
      });
      u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + s + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + s + "`"));
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function d1(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Or(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += l + "{" + t[i] + "}" : gl(i) && (n += Jn(l) + ":" + mn(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR")
          throw new Error(gs);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++)
            gl(i[u]) && (n += Jn(l) + ":" + mn(l, i[u]) + ";");
        else {
          var s = Or(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += Jn(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(u1), n += l + "{" + s + "}";
          }
        }
      }
    }
  return n;
}
var xl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, hs;
hs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var nt, tr = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  nt = void 0;
  var l = e[0];
  l == null || l.raw === void 0 ? (n = !1, o += Or(r, t, l)) : (l[0] === void 0 && console.error(ml), o += l[0]);
  for (var i = 1; i < e.length; i++)
    o += Or(r, t, e[i]), n && (l[i] === void 0 && console.error(ml), o += l[i]);
  var u;
  o = o.replace(hs, function(g) {
    return u = g, "";
  }), xl.lastIndex = 0;
  for (var s = "", c; (c = xl.exec(o)) !== null; )
    s += "-" + c[1];
  var d = i1(o) + s;
  return { name: d, styles: o, map: u, next: nt, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, p1 = {}.hasOwnProperty, io = M.createContext(typeof HTMLElement < "u" ? o1({ key: "css" }) : null);
io.displayName = "EmotionCacheContext";
io.Provider;
var Tn = function(e) {
  return Ct(function(t, r) {
    var n = Se(io);
    return e(t, n, r);
  });
}, St = M.createContext({});
St.displayName = "EmotionThemeContext";
var f1 = function() {
  return M.useContext(St);
}, m1 = function(e, t) {
  if (typeof t == "function") {
    var r = t(e);
    if (r == null || typeof r != "object" || Array.isArray(r))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return r;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Vi({}, e, t);
}, g1 = dl(function(e) {
  return dl(function(t) {
    return m1(e, t);
  });
}), bs = function(e) {
  var t = M.useContext(St);
  return e.theme !== t && (t = g1(t)(e.theme)), M.createElement(St.Provider, { value: t }, e.children);
}, Al = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", wl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", h1 = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return _n(t, r, n), Qa(function() {
    return On(t, r, n);
  }), null;
}, b1 = Tn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Al], l = [n], i = "";
  typeof e.className == "string" ? i = oo(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = tr(l, void 0, M.useContext(St));
  if (u.name.indexOf("-") === -1) {
    var s = e[wl];
    s && (u = tr([u, "label:" + s + ";"]));
  }
  i += t.key + "-" + u.name;
  var c = {};
  for (var d in e)
    p1.call(e, d) && d !== "css" && d !== Al && d !== wl && (c[d] = e[d]);
  return c.ref = r, c.className = i, M.createElement(M.Fragment, null, M.createElement(h1, { cache: t, serialized: u, isStringTag: typeof o == "string" }), M.createElement(o, c));
});
b1.displayName = "EmotionCssPropInternal";
Pi(os());
var y1 = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, Sl = !1, v1 = Tn(function(e, t) {
  !Sl && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Sl = !0);
  var r = e.styles, n = tr([r], void 0, M.useContext(St)), o = M.useRef();
  return sl(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({ key: l, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), sl(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (n.next !== void 0 && On(t, n.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
v1.displayName = "EmotionGlobal";
function so() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return tr(t);
}
var cr = function() {
  var e = so.apply(void 0, arguments), t = "animation-" + e.name;
  return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, E1 = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var l = t[n];
    if (l != null) {
      var i = void 0;
      switch (typeof l) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(l))
            i = e(l);
          else {
            l.styles !== void 0 && l.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var u in l)
              l[u] && u && (i && (i += " "), i += u);
          }
          break;
        }
        default:
          i = l;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function x1(e, t, r) {
  var n = [], o = oo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var A1 = function(e) {
  var t = e.cache, r = e.serializedArr;
  return Qa(function() {
    for (var n = 0; n < r.length; n++)
      On(t, r[n], !1);
  }), null;
}, w1 = Tn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r)
      throw new Error("css can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    var g = tr(c, t.registered);
    return n.push(g), _n(t, g, !1), t.key + "-" + g.name;
  }, l = function() {
    if (r)
      throw new Error("cx can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    return x1(t.registered, o, E1(c));
  }, i = { css: o, cx: l, theme: M.useContext(St) }, u = e.children(i);
  return r = !0, M.createElement(M.Fragment, null, M.createElement(A1, { cache: t, serializedArr: n }), u);
});
w1.displayName = "EmotionClassNames";
Qn = !0, Cl = typeof jest < "u" || typeof vi < "u", Qn && !Cl && (ea = typeof globalThis < "u" ? globalThis : Qn ? window : global, ta = "__EMOTION_REACT_" + y1.version.split(".")[0] + "__", ea[ta] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ea[ta] = !0);
var Qn, Cl, ea, ta, S1 = eo, C1 = function(e) {
  return e !== "theme";
}, kl = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? S1 : C1;
}, _l = function(e, t, r) {
  var n;
  if (t) {
    var o = t.shouldForwardProp;
    n = e.__emotion_forwardProp && o ? function(l) {
      return e.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
}, Ol = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, k1 = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return _n(t, r, n), Qa(function() {
    return On(t, r, n);
  }), null;
}, _1 = function e(t, r) {
  if (t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, l, i;
  r !== void 0 && (l = r.label, i = r.target);
  var u = _l(t, r, n), s = u || kl(o), c = !s("as");
  return function() {
    var d = arguments, g = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && g.push("label:" + l + ";"), d[0] == null || d[0].raw === void 0)
      g.push.apply(g, d);
    else {
      d[0][0] === void 0 && console.error(Ol), g.push(d[0][0]);
      for (var h = d.length, p = 1; p < h; p++)
        d[0][p] === void 0 && console.error(Ol), g.push(d[p], d[0][p]);
    }
    var m = Tn(function(f, E, y) {
      var x = c && f.as || o, b = "", v = [], A = f;
      if (f.theme == null) {
        A = {};
        for (var w in f)
          A[w] = f[w];
        A.theme = M.useContext(St);
      }
      typeof f.className == "string" ? b = oo(E.registered, v, f.className) : f.className != null && (b = f.className + " ");
      var C = tr(g.concat(v), E.registered, A);
      b += E.key + "-" + C.name, i !== void 0 && (b += " " + i);
      var S = c && u === void 0 ? kl(x) : s, _ = {};
      for (var O in f)
        c && O === "as" || S(O) && (_[O] = f[O]);
      return _.className = b, _.ref = y, M.createElement(M.Fragment, null, M.createElement(k1, { cache: E, serialized: C, isStringTag: typeof x == "string" }), M.createElement(x, _));
    });
    return m.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = g, m.__emotion_forwardProp = u, Object.defineProperty(m, "toString", { value: function() {
      return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
    } }), m.withComponent = function(f, E) {
      return e(f, Vi({}, r, E, { shouldForwardProp: _l(m, E, !0) })).apply(void 0, g);
    }, m;
  };
}, O1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], k = _1.bind();
O1.forEach(function(e) {
  k[e] = k(e);
});
var T1 = Pt(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
Pt(1)(({ color: e, background: t, typography: r }) => {
  let n = T1({ typography: r });
  return { ...n, body: { ...n.body, color: e.defaultText, background: t.app, overflow: "hidden" }, hr: { ...n.hr, borderTop: `1px solid ${e.border}` } };
});
var F1 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, R1 = cr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, ys = cr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, D1 = cr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, L1 = cr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, M1 = so`
  animation: ${ys} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, B1 = so`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, I1 = { rotate360: R1, glow: ys, float: D1, jiggle: L1, inlineGlow: M1, hoverable: B1 }, $1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, j1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, H1 = (e) => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: Yc(n) }), {}), N1 = ({ colors: e, mono: t }) => {
  let r = H1(e);
  return { token: { fontFamily: t, WebkitFontSmoothing: "antialiased", "&.tag": r.red3, "&.comment": { ...r.green1, fontStyle: "italic" }, "&.prolog": { ...r.green1, fontStyle: "italic" }, "&.doctype": { ...r.green1, fontStyle: "italic" }, "&.cdata": { ...r.green1, fontStyle: "italic" }, "&.string": r.red1, "&.url": r.cyan1, "&.symbol": r.cyan1, "&.number": r.cyan1, "&.boolean": r.cyan1, "&.variable": r.cyan1, "&.constant": r.cyan1, "&.inserted": r.cyan1, "&.atrule": r.blue1, "&.keyword": r.blue1, "&.attr-value": r.blue1, "&.punctuation": r.gray1, "&.operator": r.gray1, "&.function": r.gray1, "&.deleted": r.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": r.cyan2, "&.selector": r.red3, "&.attr-name": r.red4, "&.property": r.red4, "&.regex": r.red4, "&.entity": r.red4, "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 } }, "language-json .token.boolean": r.blue1, "language-json .token.number": r.blue1, "language-json .token.property": r.cyan2, namespace: { opacity: 0.7 } };
}, Z1 = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, P1 = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, V1 = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: K.tertiary, ancillary: K.ancillary, orange: K.orange, gold: K.gold, green: K.green, seafoam: K.seafoam, purple: K.purple, ultraviolet: K.ultraviolet, lightest: K.lightest, lighter: K.lighter, light: K.light, mediumlight: K.mediumlight, medium: K.medium, mediumdark: K.mediumdark, dark: K.dark, darker: K.darker, darkest: K.darkest, border: K.border, positive: K.positive, negative: K.negative, warning: K.warning, critical: K.critical, defaultText: e.textColor || K.darkest, inverseText: e.textInverseColor || K.lightest, positiveText: K.positiveText, negativeText: K.negativeText, warningText: K.warningText }), Oa = (e = Sa[Gc()]) => {
  let { base: t, colorPrimary: r, colorSecondary: n, appBg: o, appContentBg: l, appBorderColor: i, appBorderRadius: u, fontBase: s, fontCode: c, textColor: d, textInverseColor: g, barTextColor: h, barSelectedColor: p, barBg: m, buttonBg: f, buttonBorder: E, booleanBg: y, booleanSelectedBg: x, inputBg: b, inputBorder: v, inputTextColor: A, inputBorderRadius: w, brandTitle: C, brandUrl: S, brandImage: _, brandTarget: O, gridCellSize: T, ...R } = e;
  return { ...R, base: t, color: V1(e), background: { app: o, bar: m, content: l, gridCellSize: T || Wt.gridCellSize, hoverable: Wt.hoverable, positive: Wt.positive, negative: Wt.negative, warning: Wt.warning, critical: Wt.critical }, typography: { fonts: { base: s, mono: c }, weight: Kt.weight, size: Kt.size }, animation: I1, easing: F1, input: { background: b, border: v, borderRadius: w, color: A }, button: { background: f || b, border: E || v }, boolean: { background: y || v, selectedBackground: x || b }, layoutMargin: 10, appBorderColor: i, appBorderRadius: u, barTextColor: h, barSelectedColor: p || n, barBg: m, brand: { title: C, url: S, image: _ || (C ? null : void 0), target: O }, code: N1({ colors: t === "light" ? Z1 : P1, mono: c }), addonActionsTheme: { ...t === "light" ? j1 : $1, BASE_FONT_FAMILY: c, BASE_FONT_SIZE: Kt.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: d, ARROW_COLOR: Wc(0.2, i), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: c, TREENODE_FONT_SIZE: Kt.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, z1 = (e) => Object.keys(e).length === 0, ra = (e) => e != null && typeof e == "object", q1 = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t), U1 = () => /* @__PURE__ */ Object.create(null), vs = (e, t) => e === t || !ra(e) || !ra(t) ? {} : Object.keys(e).reduce((r, n) => {
  if (q1(t, n)) {
    let o = vs(e[n], t[n]);
    return ra(o) && z1(o) || (r[n] = o), r;
  }
  return r[n] = void 0, r;
}, U1()), W1 = vs;
function G1(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c ? u.concat(c.map(function(d) {
      var g, h;
      return (h = (g = d.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && h !== void 0 ? h : 0;
    })) : u;
  }, []);
  if (o.length) {
    var l = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    n = n.map(function(u) {
      return u.replace(l, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return t.forEach(function(u, s) {
    var c = i.match(/(?:^|\n)( *)$/), d = c ? c[1] : "", g = u;
    typeof u == "string" && u.includes(`
`) && (g = String(u).split(`
`).map(function(h, p) {
      return p === 0 ? h : "" + d + h;
    }).join(`
`)), i += g + n[s + 1];
  }), i;
}
var Y1 = (e) => {
  if (!e)
    return Oa(ll);
  let t = W1(ll, e);
  return Object.keys(t).length && w0.warn(G1`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, t), Oa(e);
}, Ta = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function Ce() {
  return Ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ce.apply(this, arguments);
}
function uo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, l;
  for (l = 0; l < n.length; l++)
    o = n[l], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var K1 = Object.create, Es = Object.defineProperty, J1 = Object.getOwnPropertyDescriptor, xs = Object.getOwnPropertyNames, X1 = Object.getPrototypeOf, Q1 = Object.prototype.hasOwnProperty, Z = (e, t) => function() {
  return t || (0, e[xs(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, ed = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of xs(t))
      !Q1.call(e, o) && o !== r && Es(e, o, { get: () => t[o], enumerable: !(n = J1(t, o)) || n.enumerable });
  return e;
}, Me = (e, t, r) => (r = e != null ? K1(X1(e)) : {}, ed(t || !e || !e.__esModule ? Es(r, "default", { value: e, enumerable: !0 }) : r, e)), td = Z({ "../../node_modules/refractor/lang/markdown.js"(e, t) {
  t.exports = r, r.displayName = "markdown", r.aliases = ["md"];
  function r(n) {
    (function(o) {
      var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function i(m) {
        return m = m.replace(/<inner>/g, function() {
          return l;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + m + ")");
      }
      var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return u;
      }), c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      o.languages.markdown = o.languages.extend("markup", {}), o.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: o.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + s + c + "(?:" + s + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + s + c + ")(?:" + s + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(u), inside: o.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + s + ")" + c + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + s + "$"), inside: { "table-header": { pattern: RegExp(u), alias: "important", inside: o.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: i(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: i(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: i(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(m) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
          m !== f && (o.languages.markdown[m].inside.content.inside[f] = o.languages.markdown[f]);
        });
      }), o.hooks.add("after-tokenize", function(m) {
        if (m.language !== "markdown" && m.language !== "md")
          return;
        function f(E) {
          if (!(!E || typeof E == "string"))
            for (var y = 0, x = E.length; y < x; y++) {
              var b = E[y];
              if (b.type !== "code") {
                f(b.content);
                continue;
              }
              var v = b.content[1], A = b.content[3];
              if (v && A && v.type === "code-language" && A.type === "code-block" && typeof v.content == "string") {
                var w = v.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                w = (/[a-z][\w-]*/i.exec(w) || [""])[0].toLowerCase();
                var C = "language-" + w;
                A.alias ? typeof A.alias == "string" ? A.alias = [A.alias, C] : A.alias.push(C) : A.alias = [C];
              }
            }
        }
        f(m.tokens);
      }), o.hooks.add("wrap", function(m) {
        if (m.type === "code-block") {
          for (var f = "", E = 0, y = m.classes.length; E < y; E++) {
            var x = m.classes[E], b = /language-(.+)/.exec(x);
            if (b) {
              f = b[1];
              break;
            }
          }
          var v = o.languages[f];
          if (v)
            m.content = o.highlight(p(m.content.value), v, f);
          else if (f && f !== "none" && o.plugins.autoloader) {
            var A = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            m.attributes.id = A, o.plugins.autoloader.loadLanguages(f, function() {
              var w = document.getElementById(A);
              w && (w.innerHTML = o.highlight(w.textContent, o.languages[f], f));
            });
          }
        }
      });
      var d = RegExp(o.languages.markup.tag.pattern.source, "gi"), g = { amp: "&", lt: "<", gt: ">", quot: '"' }, h = String.fromCodePoint || String.fromCharCode;
      function p(m) {
        var f = m.replace(d, "");
        return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(E, y) {
          if (y = y.toLowerCase(), y[0] === "#") {
            var x;
            return y[1] === "x" ? x = parseInt(y.slice(2), 16) : x = Number(y.slice(1)), h(x);
          } else {
            var b = g[y];
            return b || E;
          }
        }), f;
      }
      o.languages.md = o.languages.markdown;
    })(n);
  }
} }), rd = Z({ "../../node_modules/refractor/lang/yaml.js"(e, t) {
  t.exports = r, r.displayName = "yaml", r.aliases = ["yml"];
  function r(n) {
    (function(o) {
      var l = /[*&][^\s[\]{},]+/, i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, u = "(?:" + i.source + "(?:[ 	]+" + l.source + ")?|" + l.source + "(?:[ 	]+" + i.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function d(g, h) {
        h = (h || "").replace(/m/g, "") + "m";
        var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return u;
        }).replace(/<<value>>/g, function() {
          return g;
        });
        return RegExp(p, h);
      }
      o.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return u;
      })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return u;
      }).replace(/<<key>>/g, function() {
        return "(?:" + s + "|" + c + ")";
      })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: d(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: d(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: d(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: d(c), lookbehind: !0, greedy: !0 }, number: { pattern: d(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: i, important: l, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, o.languages.yml = o.languages.yaml;
    })(n);
  }
} }), As = Z({ "../../node_modules/refractor/lang/typescript.js"(e, t) {
  t.exports = r, r.displayName = "typescript", r.aliases = ["ts"];
  function r(n) {
    (function(o) {
      o.languages.typescript = o.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), o.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete o.languages.typescript.parameter, delete o.languages.typescript["literal-property"];
      var l = o.languages.extend("typescript", {});
      delete l["class-name"], o.languages.typescript["class-name"].inside = l, o.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: l } } } }), o.languages.ts = o.languages.typescript;
    })(n);
  }
} }), ws = Z({ "../../node_modules/refractor/lang/jsx.js"(e, t) {
  t.exports = r, r.displayName = "jsx", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = o.util.clone(o.languages.javascript), i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c(h, p) {
        return h = h.replace(/<S>/g, function() {
          return i;
        }).replace(/<BRACES>/g, function() {
          return u;
        }).replace(/<SPREAD>/g, function() {
          return s;
        }), RegExp(h, p);
      }
      s = c(s).source, o.languages.jsx = o.languages.extend("markup", l), o.languages.jsx.tag.pattern = c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, o.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, o.languages.jsx.tag.inside.comment = l.comment, o.languages.insertBefore("inside", "attr-name", { spread: { pattern: c(/<SPREAD>/.source), inside: o.languages.jsx } }, o.languages.jsx.tag), o.languages.insertBefore("inside", "special-attr", { script: { pattern: c(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: o.languages.jsx } } }, o.languages.jsx.tag);
      var d = function(h) {
        return h ? typeof h == "string" ? h : typeof h.content == "string" ? h.content : h.content.map(d).join("") : "";
      }, g = function(h) {
        for (var p = [], m = 0; m < h.length; m++) {
          var f = h[m], E = !1;
          if (typeof f != "string" && (f.type === "tag" && f.content[0] && f.content[0].type === "tag" ? f.content[0].content[0].content === "</" ? p.length > 0 && p[p.length - 1].tagName === d(f.content[0].content[1]) && p.pop() : f.content[f.content.length - 1].content === "/>" || p.push({ tagName: d(f.content[0].content[1]), openedBraces: 0 }) : p.length > 0 && f.type === "punctuation" && f.content === "{" ? p[p.length - 1].openedBraces++ : p.length > 0 && p[p.length - 1].openedBraces > 0 && f.type === "punctuation" && f.content === "}" ? p[p.length - 1].openedBraces-- : E = !0), (E || typeof f == "string") && p.length > 0 && p[p.length - 1].openedBraces === 0) {
            var y = d(f);
            m < h.length - 1 && (typeof h[m + 1] == "string" || h[m + 1].type === "plain-text") && (y += d(h[m + 1]), h.splice(m + 1, 1)), m > 0 && (typeof h[m - 1] == "string" || h[m - 1].type === "plain-text") && (y = d(h[m - 1]) + y, h.splice(m - 1, 1), m--), h[m] = new o.Token("plain-text", y, null, y);
          }
          f.content && typeof f.content != "string" && g(f.content);
        }
      };
      o.hooks.add("after-tokenize", function(h) {
        h.language !== "jsx" && h.language !== "tsx" || g(h.tokens);
      });
    })(n);
  }
} }), nd = Z({ "../../node_modules/refractor/lang/tsx.js"(e, t) {
  var r = ws(), n = As();
  t.exports = o, o.displayName = "tsx", o.aliases = [];
  function o(l) {
    l.register(r), l.register(n), function(i) {
      var u = i.util.clone(i.languages.typescript);
      i.languages.tsx = i.languages.extend("jsx", u), delete i.languages.tsx.parameter, delete i.languages.tsx["literal-property"];
      var s = i.languages.tsx.tag;
      s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")", s.pattern.flags), s.lookbehind = !0;
    }(l);
  }
} }), ad = Z({ "../../node_modules/refractor/lang/clike.js"(e, t) {
  t.exports = r, r.displayName = "clike", r.aliases = [];
  function r(n) {
    n.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), od = Z({ "../../node_modules/refractor/lang/javascript.js"(e, t) {
  t.exports = r, r.displayName = "javascript", r.aliases = ["js"];
  function r(n) {
    n.languages.javascript = n.languages.extend("clike", { "class-name": [n.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: n.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: n.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), n.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: n.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), n.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript;
  }
} }), Ss = Z({ "../../node_modules/refractor/lang/css.js"(e, t) {
  t.exports = r, r.displayName = "css", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      o.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + l.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: l, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, o.languages.css.atrule.inside.rest = o.languages.css;
      var i = o.languages.markup;
      i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
    })(n);
  }
} }), Cs = Z({ "../../node_modules/refractor/lang/markup.js"(e, t) {
  t.exports = r, r.displayName = "markup", r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function r(n) {
    n.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(o) {
      o.type === "entity" && (o.attributes.title = o.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(o, l) {
      var i = {};
      i["language-" + l] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: n.languages[l] }, i.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var u = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i } };
      u["language-" + l] = { pattern: /[\s\S]+/, inside: n.languages[l] };
      var s = {};
      s[o] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return o;
      }), "i"), lookbehind: !0, greedy: !0, inside: u }, n.languages.insertBefore("markup", "cdata", s);
    } }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(o, l) {
      n.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + o + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [l, "language-" + l], inside: n.languages[l] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml;
  }
} }), ld = Z({ "../../node_modules/xtend/immutable.js"(e, t) {
  t.exports = n;
  var r = Object.prototype.hasOwnProperty;
  function n() {
    for (var o = {}, l = 0; l < arguments.length; l++) {
      var i = arguments[l];
      for (var u in i)
        r.call(i, u) && (o[u] = i[u]);
    }
    return o;
  }
} }), ks = Z({ "../../node_modules/property-information/lib/util/schema.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.normal = {}, r.property = {};
  function n(o, l, i) {
    this.property = o, this.normal = l, i && (this.space = i);
  }
} }), id = Z({ "../../node_modules/property-information/lib/util/merge.js"(e, t) {
  var r = ld(), n = ks();
  t.exports = o;
  function o(l) {
    for (var i = l.length, u = [], s = [], c = -1, d, g; ++c < i; )
      d = l[c], u.push(d.property), s.push(d.normal), g = d.space;
    return new n(r.apply(null, u), r.apply(null, s), g);
  }
} }), co = Z({ "../../node_modules/property-information/normalize.js"(e, t) {
  t.exports = r;
  function r(n) {
    return n.toLowerCase();
  }
} }), _s = Z({ "../../node_modules/property-information/lib/util/info.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1;
  function n(o, l) {
    this.property = o, this.attribute = l;
  }
} }), po = Z({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var t = 0;
  e.boolean = r(), e.booleanish = r(), e.overloadedBoolean = r(), e.number = r(), e.spaceSeparated = r(), e.commaSeparated = r(), e.commaOrSpaceSeparated = r();
  function r() {
    return Math.pow(2, ++t);
  }
} }), Os = Z({ "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
  var r = _s(), n = po();
  t.exports = i, i.prototype = new r(), i.prototype.defined = !0;
  var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], l = o.length;
  function i(s, c, d, g) {
    var h = -1, p;
    for (u(this, "space", g), r.call(this, s, c); ++h < l; )
      p = o[h], u(this, p, (d & n[p]) === n[p]);
  }
  function u(s, c, d) {
    d && (s[c] = d);
  }
} }), Nr = Z({ "../../node_modules/property-information/lib/util/create.js"(e, t) {
  var r = co(), n = ks(), o = Os();
  t.exports = l;
  function l(i) {
    var u = i.space, s = i.mustUseProperty || [], c = i.attributes || {}, d = i.properties, g = i.transform, h = {}, p = {}, m, f;
    for (m in d)
      f = new o(m, g(c, m), d[m], u), s.indexOf(m) !== -1 && (f.mustUseProperty = !0), h[m] = f, p[r(m)] = m, p[r(f.attribute)] = m;
    return new n(h, p, u);
  }
} }), sd = Z({ "../../node_modules/property-information/lib/xlink.js"(e, t) {
  var r = Nr();
  t.exports = r({ space: "xlink", transform: n, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function n(o, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  }
} }), ud = Z({ "../../node_modules/property-information/lib/xml.js"(e, t) {
  var r = Nr();
  t.exports = r({ space: "xml", transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function n(o, l) {
    return "xml:" + l.slice(3).toLowerCase();
  }
} }), cd = Z({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, t) {
  t.exports = r;
  function r(n, o) {
    return o in n ? n[o] : o;
  }
} }), Ts = Z({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, t) {
  var r = cd();
  t.exports = n;
  function n(o, l) {
    return r(o, l.toLowerCase());
  }
} }), dd = Z({ "../../node_modules/property-information/lib/xmlns.js"(e, t) {
  var r = Nr(), n = Ts();
  t.exports = r({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: n, properties: { xmlns: null, xmlnsXLink: null } });
} }), pd = Z({ "../../node_modules/property-information/lib/aria.js"(e, t) {
  var r = po(), n = Nr(), o = r.booleanish, l = r.number, i = r.spaceSeparated;
  t.exports = n({ transform: u, properties: { ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: l, ariaColIndex: l, ariaColSpan: l, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: o, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: i, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: i, ariaRowCount: l, ariaRowIndex: l, ariaRowSpan: l, ariaSelected: o, ariaSetSize: l, ariaSort: null, ariaValueMax: l, ariaValueMin: l, ariaValueNow: l, ariaValueText: null, role: null } });
  function u(s, c) {
    return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
  }
} }), fd = Z({ "../../node_modules/property-information/lib/html.js"(e, t) {
  var r = po(), n = Nr(), o = Ts(), l = r.boolean, i = r.overloadedBoolean, u = r.booleanish, s = r.number, c = r.spaceSeparated, d = r.commaSeparated;
  t.exports = n({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: d, acceptCharset: c, accessKey: c, action: null, allow: null, allowFullScreen: l, allowPaymentRequest: l, allowUserMedia: l, alt: null, as: null, async: l, autoCapitalize: null, autoComplete: c, autoFocus: l, autoPlay: l, capture: l, charSet: null, checked: l, cite: null, className: c, cols: s, colSpan: null, content: null, contentEditable: u, controls: l, controlsList: c, coords: s | d, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l, defer: l, dir: null, dirName: null, disabled: l, download: i, draggable: u, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l, formTarget: null, headers: c, height: s, hidden: l, high: s, href: null, hrefLang: null, htmlFor: c, httpEquiv: c, id: null, imageSizes: null, imageSrcSet: d, inputMode: null, integrity: null, is: null, isMap: l, itemId: null, itemProp: c, itemRef: c, itemScope: l, itemType: c, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l, low: s, manifest: null, max: null, maxLength: s, media: null, method: null, min: null, minLength: s, multiple: l, muted: l, name: null, nonce: null, noModule: l, noValidate: l, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l, optimum: s, pattern: null, ping: c, placeholder: null, playsInline: l, poster: null, preload: null, readOnly: l, referrerPolicy: null, rel: c, required: l, reversed: l, rows: s, rowSpan: s, sandbox: c, scope: null, scoped: l, seamless: l, selected: l, shape: null, size: s, sizes: null, slot: null, span: s, spellCheck: u, src: null, srcDoc: null, srcLang: null, srcSet: d, start: s, step: null, style: null, tabIndex: s, target: null, title: null, translate: null, type: null, typeMustMatch: l, useMap: null, value: u, width: s, wrap: null, align: null, aLink: null, archive: c, axis: null, background: null, bgColor: null, border: s, borderColor: null, bottomMargin: s, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l, declare: l, event: null, face: null, frame: null, frameBorder: null, hSpace: s, leftMargin: s, link: null, longDesc: null, lowSrc: null, marginHeight: s, marginWidth: s, noResize: l, noHref: l, noShade: l, noWrap: l, object: null, profile: null, prompt: null, rev: null, rightMargin: s, rules: null, scheme: null, scrolling: u, standby: null, summary: null, text: null, topMargin: s, valueType: null, version: null, vAlign: null, vLink: null, vSpace: s, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l, disableRemotePlayback: l, prefix: null, property: null, results: s, security: null, unselectable: null } });
} }), md = Z({ "../../node_modules/property-information/html.js"(e, t) {
  var r = id(), n = sd(), o = ud(), l = dd(), i = pd(), u = fd();
  t.exports = r([o, n, l, i, u]);
} }), gd = Z({ "../../node_modules/property-information/find.js"(e, t) {
  var r = co(), n = Os(), o = _s(), l = "data";
  t.exports = c;
  var i = /^data[-\w.:]+$/i, u = /-[a-z]/g, s = /[A-Z]/g;
  function c(m, f) {
    var E = r(f), y = f, x = o;
    return E in m.normal ? m.property[m.normal[E]] : (E.length > 4 && E.slice(0, 4) === l && i.test(f) && (f.charAt(4) === "-" ? y = d(f) : f = g(f), x = n), new x(y, f));
  }
  function d(m) {
    var f = m.slice(5).replace(u, p);
    return l + f.charAt(0).toUpperCase() + f.slice(1);
  }
  function g(m) {
    var f = m.slice(4);
    return u.test(f) ? m : (f = f.replace(s, h), f.charAt(0) !== "-" && (f = "-" + f), l + f);
  }
  function h(m) {
    return "-" + m.toLowerCase();
  }
  function p(m) {
    return m.charAt(1).toUpperCase();
  }
} }), hd = Z({ "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
  t.exports = n;
  var r = /[#.]/g;
  function n(o, l) {
    for (var i = o || "", u = l || "div", s = {}, c = 0, d, g, h; c < i.length; )
      r.lastIndex = c, h = r.exec(i), d = i.slice(c, h ? h.index : i.length), d && (g ? g === "#" ? s.id = d : s.className ? s.className.push(d) : s.className = [d] : u = d, c += d.length), h && (g = h[0], c++);
    return { type: "element", tagName: u, properties: s, children: [] };
  }
} }), bd = Z({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = "", r = " ", n = /[ \t\n\r\f]+/g;
  function o(i) {
    var u = String(i || t).trim();
    return u === t ? [] : u.split(n);
  }
  function l(i) {
    return i.join(r).trim();
  }
} }), yd = Z({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = ",", r = " ", n = "";
  function o(i) {
    for (var u = [], s = String(i || n), c = s.indexOf(t), d = 0, g = !1, h; !g; )
      c === -1 && (c = s.length, g = !0), h = s.slice(d, c).trim(), (h || !g) && u.push(h), d = c + 1, c = s.indexOf(t, d);
    return u;
  }
  function l(i, u) {
    var s = u || {}, c = s.padLeft === !1 ? n : r, d = s.padRight ? r : n;
    return i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim();
  }
} }), vd = Z({ "../../node_modules/hastscript/factory.js"(e, t) {
  var r = gd(), n = co(), o = hd(), l = bd().parse, i = yd().parse;
  t.exports = s;
  var u = {}.hasOwnProperty;
  function s(E, y, x) {
    var b = x ? f(x) : null;
    return v;
    function v(w, C) {
      var S = o(w, y), _ = Array.prototype.slice.call(arguments, 2), O = S.tagName.toLowerCase(), T;
      if (S.tagName = b && u.call(b, O) ? b[O] : O, C && c(C, S) && (_.unshift(C), C = null), C)
        for (T in C)
          A(S.properties, T, C[T]);
      return g(S.children, _), S.tagName === "template" && (S.content = { type: "root", children: S.children }, S.children = []), S;
    }
    function A(w, C, S) {
      var _, O, T;
      S == null || S !== S || (_ = r(E, C), O = _.property, T = S, typeof T == "string" && (_.spaceSeparated ? T = l(T) : _.commaSeparated ? T = i(T) : _.commaOrSpaceSeparated && (T = l(i(T).join(" ")))), O === "style" && typeof S != "string" && (T = m(T)), O === "className" && w.className && (T = w.className.concat(T)), w[O] = h(_, O, T));
    }
  }
  function c(E, y) {
    return typeof E == "string" || "length" in E || d(y.tagName, E);
  }
  function d(E, y) {
    var x = y.type;
    return E === "input" || !x || typeof x != "string" ? !1 : typeof y.children == "object" && "length" in y.children ? !0 : (x = x.toLowerCase(), E === "button" ? x !== "menu" && x !== "submit" && x !== "reset" && x !== "button" : "value" in y);
  }
  function g(E, y) {
    var x, b;
    if (typeof y == "string" || typeof y == "number") {
      E.push({ type: "text", value: String(y) });
      return;
    }
    if (typeof y == "object" && "length" in y) {
      for (x = -1, b = y.length; ++x < b; )
        g(E, y[x]);
      return;
    }
    if (typeof y != "object" || !("type" in y))
      throw new Error("Expected node, nodes, or string, got `" + y + "`");
    E.push(y);
  }
  function h(E, y, x) {
    var b, v, A;
    if (typeof x != "object" || !("length" in x))
      return p(E, y, x);
    for (v = x.length, b = -1, A = []; ++b < v; )
      A[b] = p(E, y, x[b]);
    return A;
  }
  function p(E, y, x) {
    var b = x;
    return E.number || E.positiveNumber ? !isNaN(b) && b !== "" && (b = Number(b)) : (E.boolean || E.overloadedBoolean) && typeof b == "string" && (b === "" || n(x) === n(y)) && (b = !0), b;
  }
  function m(E) {
    var y = [], x;
    for (x in E)
      y.push([x, E[x]].join(": "));
    return y.join("; ");
  }
  function f(E) {
    for (var y = E.length, x = -1, b = {}, v; ++x < y; )
      v = E[x], b[v.toLowerCase()] = v;
    return b;
  }
} }), Ed = Z({ "../../node_modules/hastscript/html.js"(e, t) {
  var r = md(), n = vd(), o = n(r, "div");
  o.displayName = "html", t.exports = o;
} }), xd = Z({ "../../node_modules/hastscript/index.js"(e, t) {
  t.exports = Ed();
} }), Ad = Z({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, t) {
  t.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), wd = Z({ "../../node_modules/character-reference-invalid/index.json"(e, t) {
  t.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), Fs = Z({ "../../node_modules/is-decimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 48 && o <= 57;
  }
} }), Sd = Z({ "../../node_modules/is-hexadecimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 102 || o >= 65 && o <= 70 || o >= 48 && o <= 57;
  }
} }), Cd = Z({ "../../node_modules/is-alphabetical/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 122 || o >= 65 && o <= 90;
  }
} }), kd = Z({ "../../node_modules/is-alphanumerical/index.js"(e, t) {
  var r = Cd(), n = Fs();
  t.exports = o;
  function o(l) {
    return r(l) || n(l);
  }
} }), _d = Z({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, t) {
  t.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), Od = Z({ "../../node_modules/parse-entities/decode-entity.js"(e, t) {
  var r = _d();
  t.exports = o;
  var n = {}.hasOwnProperty;
  function o(l) {
    return n.call(r, l) ? r[l] : !1;
  }
} }), Td = Z({ "../../node_modules/parse-entities/index.js"(e, t) {
  var r = Ad(), n = wd(), o = Fs(), l = Sd(), i = kd(), u = Od();
  t.exports = J;
  var s = {}.hasOwnProperty, c = String.fromCharCode, d = Function.prototype, g = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, h = 9, p = 10, m = 12, f = 32, E = 38, y = 59, x = 60, b = 61, v = 35, A = 88, w = 120, C = 65533, S = "named", _ = "hexadecimal", O = "decimal", T = {};
  T[_] = 16, T[O] = 10;
  var R = {};
  R[S] = i, R[O] = o, R[_] = l;
  var F = 1, j = 2, D = 3, L = 4, H = 5, P = 6, I = 7, N = {};
  N[F] = "Named character references must be terminated by a semicolon", N[j] = "Numeric character references must be terminated by a semicolon", N[D] = "Named character references cannot be empty", N[L] = "Numeric character references cannot be empty", N[H] = "Named character references must be known", N[P] = "Numeric character references cannot be disallowed", N[I] = "Numeric character references cannot be outside the permissible Unicode range";
  function J($, V) {
    var q = {}, de, xe;
    V || (V = {});
    for (xe in g)
      de = V[xe], q[xe] = de ?? g[xe];
    return (q.position.indent || q.position.start) && (q.indent = q.position.indent || [], q.position = q.position.start), ne($, q);
  }
  function ne($, V) {
    var q = V.additional, de = V.nonTerminated, xe = V.text, dt = V.reference, Ie = V.warning, We = V.textContext, B = V.referenceContext, Ve = V.warningContext, Ge = V.position, _t = V.indent || [], zt = $.length, Ye = 0, zr = -1, Ae = Ge.column || 1, Ot = Ge.line || 1, Ke = "", qt = [], Je, Ut, Xe, be, ze, pe, oe, Qe, qr, Wn, Tt, gr, Ft, pt, rl, hr, Ur, et, fe;
    for (typeof q == "string" && (q = q.charCodeAt(0)), hr = br(), Qe = Ie ? Uc : d, Ye--, zt++; ++Ye < zt; )
      if (ze === p && (Ae = _t[zr] || 1), ze = $.charCodeAt(Ye), ze === E) {
        if (oe = $.charCodeAt(Ye + 1), oe === h || oe === p || oe === m || oe === f || oe === E || oe === x || oe !== oe || q && oe === q) {
          Ke += c(ze), Ae++;
          continue;
        }
        for (Ft = Ye + 1, gr = Ft, fe = Ft, oe === v ? (fe = ++gr, oe = $.charCodeAt(fe), oe === A || oe === w ? (pt = _, fe = ++gr) : pt = O) : pt = S, Je = "", Tt = "", be = "", rl = R[pt], fe--; ++fe < zt && (oe = $.charCodeAt(fe), !!rl(oe)); )
          be += c(oe), pt === S && s.call(r, be) && (Je = be, Tt = r[be]);
        Xe = $.charCodeAt(fe) === y, Xe && (fe++, Ut = pt === S ? u(be) : !1, Ut && (Je = be, Tt = Ut)), et = 1 + fe - Ft, !Xe && !de || (be ? pt === S ? (Xe && !Tt ? Qe(H, 1) : (Je !== be && (fe = gr + Je.length, et = 1 + fe - gr, Xe = !1), Xe || (qr = Je ? F : D, V.attribute ? (oe = $.charCodeAt(fe), oe === b ? (Qe(qr, et), Tt = null) : i(oe) ? Tt = null : Qe(qr, et)) : Qe(qr, et))), pe = Tt) : (Xe || Qe(j, et), pe = parseInt(be, T[pt]), Y(pe) ? (Qe(I, et), pe = c(C)) : pe in n ? (Qe(P, et), pe = n[pe]) : (Wn = "", X(pe) && Qe(P, et), pe > 65535 && (pe -= 65536, Wn += c(pe >>> 10 | 55296), pe = 56320 | pe & 1023), pe = Wn + c(pe))) : pt !== S && Qe(L, et)), pe ? (nl(), hr = br(), Ye = fe - 1, Ae += fe - Ft + 1, qt.push(pe), Ur = br(), Ur.offset++, dt && dt.call(B, pe, { start: hr, end: Ur }, $.slice(Ft - 1, fe)), hr = Ur) : (be = $.slice(Ft - 1, fe), Ke += be, Ae += be.length, Ye = fe - 1);
      } else
        ze === 10 && (Ot++, zr++, Ae = 0), ze === ze ? (Ke += c(ze), Ae++) : nl();
    return qt.join("");
    function br() {
      return { line: Ot, column: Ae, offset: Ye + (Ge.offset || 0) };
    }
    function Uc(al, ol) {
      var Gn = br();
      Gn.column += ol, Gn.offset += ol, Ie.call(Ve, N[al], Gn, al);
    }
    function nl() {
      Ke && (qt.push(Ke), xe && xe.call(We, Ke, { start: hr, end: br() }), Ke = "");
    }
  }
  function Y($) {
    return $ >= 55296 && $ <= 57343 || $ > 1114111;
  }
  function X($) {
    return $ >= 1 && $ <= 8 || $ === 11 || $ >= 13 && $ <= 31 || $ >= 127 && $ <= 159 || $ >= 64976 && $ <= 65007 || ($ & 65535) === 65535 || ($ & 65535) === 65534;
  }
} }), Fd = Z({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, t) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, n = function(o) {
    var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, u = {}, s = { manual: o.Prism && o.Prism.manual, disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler, util: { encode: function b(v) {
      return v instanceof c ? new c(v.type, b(v.content), v.alias) : Array.isArray(v) ? v.map(b) : v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(b) {
      return Object.prototype.toString.call(b).slice(8, -1);
    }, objId: function(b) {
      return b.__id || Object.defineProperty(b, "__id", { value: ++i }), b.__id;
    }, clone: function b(v, A) {
      A = A || {};
      var w, C;
      switch (s.util.type(v)) {
        case "Object":
          if (C = s.util.objId(v), A[C])
            return A[C];
          w = {}, A[C] = w;
          for (var S in v)
            v.hasOwnProperty(S) && (w[S] = b(v[S], A));
          return w;
        case "Array":
          return C = s.util.objId(v), A[C] ? A[C] : (w = [], A[C] = w, v.forEach(function(_, O) {
            w[O] = b(_, A);
          }), w);
        default:
          return v;
      }
    }, getLanguage: function(b) {
      for (; b; ) {
        var v = l.exec(b.className);
        if (v)
          return v[1].toLowerCase();
        b = b.parentElement;
      }
      return "none";
    }, setLanguage: function(b, v) {
      b.className = b.className.replace(RegExp(l, "gi"), ""), b.classList.add("language-" + v);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (w) {
        var b = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1];
        if (b) {
          var v = document.getElementsByTagName("script");
          for (var A in v)
            if (v[A].src == b)
              return v[A];
        }
        return null;
      }
    }, isActive: function(b, v, A) {
      for (var w = "no-" + v; b; ) {
        var C = b.classList;
        if (C.contains(v))
          return !0;
        if (C.contains(w))
          return !1;
        b = b.parentElement;
      }
      return !!A;
    } }, languages: { plain: u, plaintext: u, text: u, txt: u, extend: function(b, v) {
      var A = s.util.clone(s.languages[b]);
      for (var w in v)
        A[w] = v[w];
      return A;
    }, insertBefore: function(b, v, A, w) {
      w = w || s.languages;
      var C = w[b], S = {};
      for (var _ in C)
        if (C.hasOwnProperty(_)) {
          if (_ == v)
            for (var O in A)
              A.hasOwnProperty(O) && (S[O] = A[O]);
          A.hasOwnProperty(_) || (S[_] = C[_]);
        }
      var T = w[b];
      return w[b] = S, s.languages.DFS(s.languages, function(R, F) {
        F === T && R != b && (this[R] = S);
      }), S;
    }, DFS: function b(v, A, w, C) {
      C = C || {};
      var S = s.util.objId;
      for (var _ in v)
        if (v.hasOwnProperty(_)) {
          A.call(v, _, v[_], w || _);
          var O = v[_], T = s.util.type(O);
          T === "Object" && !C[S(O)] ? (C[S(O)] = !0, b(O, A, null, C)) : T === "Array" && !C[S(O)] && (C[S(O)] = !0, b(O, A, _, C));
        }
    } }, plugins: {}, highlightAll: function(b, v) {
      s.highlightAllUnder(document, b, v);
    }, highlightAllUnder: function(b, v, A) {
      var w = { callback: A, container: b, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      s.hooks.run("before-highlightall", w), w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)), s.hooks.run("before-all-elements-highlight", w);
      for (var C = 0, S; S = w.elements[C++]; )
        s.highlightElement(S, v === !0, w.callback);
    }, highlightElement: function(b, v, A) {
      var w = s.util.getLanguage(b), C = s.languages[w];
      s.util.setLanguage(b, w);
      var S = b.parentElement;
      S && S.nodeName.toLowerCase() === "pre" && s.util.setLanguage(S, w);
      var _ = b.textContent, O = { element: b, language: w, grammar: C, code: _ };
      function T(F) {
        O.highlightedCode = F, s.hooks.run("before-insert", O), O.element.innerHTML = O.highlightedCode, s.hooks.run("after-highlight", O), s.hooks.run("complete", O), A && A.call(O.element);
      }
      if (s.hooks.run("before-sanity-check", O), S = O.element.parentElement, S && S.nodeName.toLowerCase() === "pre" && !S.hasAttribute("tabindex") && S.setAttribute("tabindex", "0"), !O.code) {
        s.hooks.run("complete", O), A && A.call(O.element);
        return;
      }
      if (s.hooks.run("before-highlight", O), !O.grammar) {
        T(s.util.encode(O.code));
        return;
      }
      if (v && o.Worker) {
        var R = new Worker(s.filename);
        R.onmessage = function(F) {
          T(F.data);
        }, R.postMessage(JSON.stringify({ language: O.language, code: O.code, immediateClose: !0 }));
      } else
        T(s.highlight(O.code, O.grammar, O.language));
    }, highlight: function(b, v, A) {
      var w = { code: b, grammar: v, language: A };
      if (s.hooks.run("before-tokenize", w), !w.grammar)
        throw new Error('The language "' + w.language + '" has no grammar.');
      return w.tokens = s.tokenize(w.code, w.grammar), s.hooks.run("after-tokenize", w), c.stringify(s.util.encode(w.tokens), w.language);
    }, tokenize: function(b, v) {
      var A = v.rest;
      if (A) {
        for (var w in A)
          v[w] = A[w];
        delete v.rest;
      }
      var C = new h();
      return p(C, C.head, b), g(b, C, v, C.head, 0), f(C);
    }, hooks: { all: {}, add: function(b, v) {
      var A = s.hooks.all;
      A[b] = A[b] || [], A[b].push(v);
    }, run: function(b, v) {
      var A = s.hooks.all[b];
      if (!(!A || !A.length))
        for (var w = 0, C; C = A[w++]; )
          C(v);
    } }, Token: c };
    o.Prism = s;
    function c(b, v, A, w) {
      this.type = b, this.content = v, this.alias = A, this.length = (w || "").length | 0;
    }
    c.stringify = function b(v, A) {
      if (typeof v == "string")
        return v;
      if (Array.isArray(v)) {
        var w = "";
        return v.forEach(function(T) {
          w += b(T, A);
        }), w;
      }
      var C = { type: v.type, content: b(v.content, A), tag: "span", classes: ["token", v.type], attributes: {}, language: A }, S = v.alias;
      S && (Array.isArray(S) ? Array.prototype.push.apply(C.classes, S) : C.classes.push(S)), s.hooks.run("wrap", C);
      var _ = "";
      for (var O in C.attributes)
        _ += " " + O + '="' + (C.attributes[O] || "").replace(/"/g, "&quot;") + '"';
      return "<" + C.tag + ' class="' + C.classes.join(" ") + '"' + _ + ">" + C.content + "</" + C.tag + ">";
    };
    function d(b, v, A, w) {
      b.lastIndex = v;
      var C = b.exec(A);
      if (C && w && C[1]) {
        var S = C[1].length;
        C.index += S, C[0] = C[0].slice(S);
      }
      return C;
    }
    function g(b, v, A, w, C, S) {
      for (var _ in A)
        if (!(!A.hasOwnProperty(_) || !A[_])) {
          var O = A[_];
          O = Array.isArray(O) ? O : [O];
          for (var T = 0; T < O.length; ++T) {
            if (S && S.cause == _ + "," + T)
              return;
            var R = O[T], F = R.inside, j = !!R.lookbehind, D = !!R.greedy, L = R.alias;
            if (D && !R.pattern.global) {
              var H = R.pattern.toString().match(/[imsuy]*$/)[0];
              R.pattern = RegExp(R.pattern.source, H + "g");
            }
            for (var P = R.pattern || R, I = w.next, N = C; I !== v.tail && !(S && N >= S.reach); N += I.value.length, I = I.next) {
              var J = I.value;
              if (v.length > b.length)
                return;
              if (!(J instanceof c)) {
                var ne = 1, Y;
                if (D) {
                  if (Y = d(P, N, b, j), !Y || Y.index >= b.length)
                    break;
                  var q = Y.index, X = Y.index + Y[0].length, $ = N;
                  for ($ += I.value.length; q >= $; )
                    I = I.next, $ += I.value.length;
                  if ($ -= I.value.length, N = $, I.value instanceof c)
                    continue;
                  for (var V = I; V !== v.tail && ($ < X || typeof V.value == "string"); V = V.next)
                    ne++, $ += V.value.length;
                  ne--, J = b.slice(N, $), Y.index -= N;
                } else if (Y = d(P, 0, J, j), !Y)
                  continue;
                var q = Y.index, de = Y[0], xe = J.slice(0, q), dt = J.slice(q + de.length), Ie = N + J.length;
                S && Ie > S.reach && (S.reach = Ie);
                var We = I.prev;
                xe && (We = p(v, We, xe), N += xe.length), m(v, We, ne);
                var B = new c(_, F ? s.tokenize(de, F) : de, L, de);
                if (I = p(v, We, B), dt && p(v, I, dt), ne > 1) {
                  var Ve = { cause: _ + "," + T, reach: Ie };
                  g(b, v, A, I.prev, N, Ve), S && Ve.reach > S.reach && (S.reach = Ve.reach);
                }
              }
            }
          }
        }
    }
    function h() {
      var b = { value: null, prev: null, next: null }, v = { value: null, prev: b, next: null };
      b.next = v, this.head = b, this.tail = v, this.length = 0;
    }
    function p(b, v, A) {
      var w = v.next, C = { value: A, prev: v, next: w };
      return v.next = C, w.prev = C, b.length++, C;
    }
    function m(b, v, A) {
      for (var w = v.next, C = 0; C < A && w !== b.tail; C++)
        w = w.next;
      v.next = w, w.prev = v, b.length -= C;
    }
    function f(b) {
      for (var v = [], A = b.head.next; A !== b.tail; )
        v.push(A.value), A = A.next;
      return v;
    }
    if (!o.document)
      return o.addEventListener && (s.disableWorkerMessageHandler || o.addEventListener("message", function(b) {
        var v = JSON.parse(b.data), A = v.language, w = v.code, C = v.immediateClose;
        o.postMessage(s.highlight(w, s.languages[A], A)), C && o.close();
      }, !1)), s;
    var E = s.util.currentScript();
    E && (s.filename = E.src, E.hasAttribute("data-manual") && (s.manual = !0));
    function y() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var x = document.readyState;
      x === "loading" || x === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return s;
  }(r);
  typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
} }), Rd = Z({ "../../node_modules/refractor/core.js"(e, t) {
  var r = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, n = C();
  r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var o = xd(), l = Td(), i = Fd(), u = Cs(), s = Ss(), c = ad(), d = od();
  n();
  var g = {}.hasOwnProperty;
  function h() {
  }
  h.prototype = i;
  var p = new h();
  t.exports = p, p.highlight = E, p.register = m, p.alias = f, p.registered = y, p.listLanguages = x, m(u), m(s), m(c), m(d), p.util.encode = A, p.Token.stringify = b;
  function m(S) {
    if (typeof S != "function" || !S.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + S + "`");
    p.languages[S.displayName] === void 0 && S(p);
  }
  function f(S, _) {
    var O = p.languages, T = S, R, F, j, D;
    _ && (T = {}, T[S] = _);
    for (R in T)
      for (F = T[R], F = typeof F == "string" ? [F] : F, j = F.length, D = -1; ++D < j; )
        O[F[D]] = O[R];
  }
  function E(S, _) {
    var O = i.highlight, T;
    if (typeof S != "string")
      throw new Error("Expected `string` for `value`, got `" + S + "`");
    if (p.util.type(_) === "Object")
      T = _, _ = null;
    else {
      if (typeof _ != "string")
        throw new Error("Expected `string` for `name`, got `" + _ + "`");
      if (g.call(p.languages, _))
        T = p.languages[_];
      else
        throw new Error("Unknown language: `" + _ + "` is not registered");
    }
    return O.call(this, S, T, _);
  }
  function y(S) {
    if (typeof S != "string")
      throw new Error("Expected `string` for `language`, got `" + S + "`");
    return g.call(p.languages, S);
  }
  function x() {
    var S = p.languages, _ = [], O;
    for (O in S)
      g.call(S, O) && typeof S[O] == "object" && _.push(O);
    return _;
  }
  function b(S, _, O) {
    var T;
    return typeof S == "string" ? { type: "text", value: S } : p.util.type(S) === "Array" ? v(S, _) : (T = { type: S.type, content: p.Token.stringify(S.content, _, O), tag: "span", classes: ["token", S.type], attributes: {}, language: _, parent: O }, S.alias && (T.classes = T.classes.concat(S.alias)), p.hooks.run("wrap", T), o(T.tag + "." + T.classes.join("."), w(T.attributes), T.content));
  }
  function v(S, _) {
    for (var O = [], T = S.length, R = -1, F; ++R < T; )
      F = S[R], F !== "" && F !== null && F !== void 0 && O.push(F);
    for (R = -1, T = O.length; ++R < T; )
      F = O[R], O[R] = p.Token.stringify(F, _, O);
    return O;
  }
  function A(S) {
    return S;
  }
  function w(S) {
    var _;
    for (_ in S)
      S[_] = l(S[_]);
    return S;
  }
  function C() {
    var S = "Prism" in r, _ = S ? r.Prism : void 0;
    return O;
    function O() {
      S ? r.Prism = _ : delete r.Prism, S = void 0, _ = void 0;
    }
  }
} }), Dd = Z({ "../../node_modules/refractor/lang/bash.js"(e, t) {
  t.exports = r, r.displayName = "bash", r.aliases = ["shell"];
  function r(n) {
    (function(o) {
      var l = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", i = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null }, u = { bash: i, environment: { pattern: RegExp("\\$" + l), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + l), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      o.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: u }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: i } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: u }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: u.entity } }], environment: { pattern: RegExp("\\$?" + l), alias: "constant" }, variable: u.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }, i.inside = o.languages.bash;
      for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], c = u.variable[1].inside, d = 0; d < s.length; d++)
        c[s[d]] = o.languages.bash[s[d]];
      o.languages.shell = o.languages.bash;
    })(n);
  }
} }), Ld = Z({ "../../node_modules/refractor/lang/js-extras.js"(e, t) {
  t.exports = r, r.displayName = "jsExtras", r.aliases = [];
  function r(n) {
    (function(o) {
      o.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + o.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), o.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + o.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), o.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function l(g, h) {
        return RegExp(g.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), h);
      }
      o.languages.insertBefore("javascript", "keyword", { imports: { pattern: l(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: o.languages.javascript }, exports: { pattern: l(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: o.languages.javascript } }), o.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), o.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), o.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: l(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var i = ["function", "function-variable", "method", "method-variable", "property-access"], u = 0; u < i.length; u++) {
        var s = i[u], c = o.languages.javascript[s];
        o.util.type(c) === "RegExp" && (c = o.languages.javascript[s] = { pattern: c });
        var d = c.inside || {};
        c.inside = d, d["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(n);
  }
} }), Md = Z({ "../../node_modules/refractor/lang/json.js"(e, t) {
  t.exports = r, r.displayName = "json", r.aliases = ["webmanifest"];
  function r(n) {
    n.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, n.languages.webmanifest = n.languages.json;
  }
} }), Bd = Z({ "../../node_modules/refractor/lang/graphql.js"(e, t) {
  t.exports = r, r.displayName = "graphql", r.aliases = [];
  function r(n) {
    n.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: n.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, n.hooks.add("after-tokenize", function(o) {
      if (o.language !== "graphql")
        return;
      var l = o.tokens.filter(function(x) {
        return typeof x != "string" && x.type !== "comment" && x.type !== "scalar";
      }), i = 0;
      function u(x) {
        return l[i + x];
      }
      function s(x, b) {
        b = b || 0;
        for (var v = 0; v < x.length; v++) {
          var A = u(v + b);
          if (!A || A.type !== x[v])
            return !1;
        }
        return !0;
      }
      function c(x, b) {
        for (var v = 1, A = i; A < l.length; A++) {
          var w = l[A], C = w.content;
          if (w.type === "punctuation" && typeof C == "string") {
            if (x.test(C))
              v++;
            else if (b.test(C) && (v--, v === 0))
              return A;
          }
        }
        return -1;
      }
      function d(x, b) {
        var v = x.alias;
        v ? Array.isArray(v) || (x.alias = v = [v]) : x.alias = v = [], v.push(b);
      }
      for (; i < l.length; ) {
        var g = l[i++];
        if (g.type === "keyword" && g.content === "mutation") {
          var h = [];
          if (s(["definition-mutation", "punctuation"]) && u(1).content === "(") {
            i += 2;
            var p = c(/^\($/, /^\)$/);
            if (p === -1)
              continue;
            for (; i < p; i++) {
              var m = u(0);
              m.type === "variable" && (d(m, "variable-input"), h.push(m.content));
            }
            i = p + 1;
          }
          if (s(["punctuation", "property-query"]) && u(0).content === "{" && (i++, d(u(0), "property-mutation"), h.length > 0)) {
            var f = c(/^\{$/, /^\}$/);
            if (f === -1)
              continue;
            for (var E = i; E < f; E++) {
              var y = l[E];
              y.type === "variable" && h.indexOf(y.content) >= 0 && d(y, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: Id } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { global: $d } = __STORYBOOK_MODULE_GLOBAL__;
var jd = Me(ws()), Hd = jd.default, Nd = Me(Dd()), Zd = Nd.default, Pd = Me(Ss()), Vd = Pd.default, zd = Me(Ld()), qd = zd.default, Ud = Me(Md()), Wd = Ud.default, Gd = Me(Bd()), Yd = Gd.default, Kd = Me(Cs()), Jd = Kd.default, Xd = Me(td()), Qd = Xd.default, ep = Me(rd()), tp = ep.default, rp = Me(nd()), np = rp.default, ap = Me(As()), op = ap.default;
function lp(e, t) {
  if (e == null)
    return {};
  var r = uo(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      n = l[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ip(e) {
  if (Array.isArray(e))
    return Fa(e);
}
function sp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function up(e, t) {
  if (e) {
    if (typeof e == "string")
      return Fa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fa(e, t);
  }
}
function cp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dp(e) {
  return ip(e) || sp(e) || up(e) || cp();
}
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function pp(e, t) {
  if (Tr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fp(e) {
  var t = pp(e, "string");
  return Tr(t) === "symbol" ? t : String(t);
}
function Rs(e, t, r) {
  return t = fp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tl(Object(r), !0).forEach(function(n) {
      Rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mp(e) {
  var t = e.length;
  if (t === 0 || t === 1)
    return e;
  if (t === 2)
    return [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])];
  if (t === 3)
    return [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])];
  if (t >= 4)
    return [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])];
}
var na = {};
function gp(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var t = e.join(".");
  return na[t] || (na[t] = mp(e)), na[t];
}
function hp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e.filter(function(l) {
    return l !== "token";
  }), o = gp(n);
  return o.reduce(function(l, i) {
    return Jt(Jt({}, l), r[i]);
  }, t);
}
function Fl(e) {
  return e.join(" ");
}
function bp(e, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(o, l) {
      return fo({ node: o, stylesheet: e, useInlineStyles: t, key: "code-segment-".concat(r, "-").concat(l) });
    });
  };
}
function fo(e) {
  var t = e.node, r = e.stylesheet, n = e.style, o = n === void 0 ? {} : n, l = e.useInlineStyles, i = e.key, u = t.properties, s = t.type, c = t.tagName, d = t.value;
  if (s === "text")
    return d;
  if (c) {
    var g = bp(r, l), h;
    if (!l)
      h = Jt(Jt({}, u), {}, { className: Fl(u.className) });
    else {
      var p = Object.keys(r).reduce(function(y, x) {
        return x.split(".").forEach(function(b) {
          y.includes(b) || y.push(b);
        }), y;
      }, []), m = u.className && u.className.includes("token") ? ["token"] : [], f = u.className && m.concat(u.className.filter(function(y) {
        return !p.includes(y);
      }));
      h = Jt(Jt({}, u), {}, { className: Fl(f) || void 0, style: hp(u.className, Object.assign({}, u.style, o), r) });
    }
    var E = g(t.children);
    return a.createElement(c, Ce({ key: i }, h), E);
  }
}
var yp = function(e, t) {
  var r = e.listLanguages();
  return r.indexOf(t) !== -1;
}, vp = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function Rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(r), !0).forEach(function(n) {
      Rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ep = /\n/g;
function xp(e) {
  return e.match(Ep);
}
function Ap(e) {
  var t = e.lines, r = e.startingLineNumber, n = e.style;
  return t.map(function(o, l) {
    var i = l + r;
    return a.createElement("span", { key: "line-".concat(l), className: "react-syntax-highlighter-line-number", style: typeof n == "function" ? n(i) : n }, "".concat(i, `
`));
  });
}
function wp(e) {
  var t = e.codeString, r = e.codeStyle, n = e.containerStyle, o = n === void 0 ? { float: "left", paddingRight: "10px" } : n, l = e.numberStyle, i = l === void 0 ? {} : l, u = e.startingLineNumber;
  return a.createElement("code", { style: Object.assign({}, r, o) }, Ap({ lines: t.replace(/\n$/, "").split(`
`), style: i, startingLineNumber: u }));
}
function Sp(e) {
  return "".concat(e.toString().length, ".25em");
}
function Ds(e, t) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: t }, children: [{ type: "text", value: e }] };
}
function Ls(e, t, r) {
  var n = { display: "inline-block", minWidth: Sp(r), paddingRight: "1em", textAlign: "right", userSelect: "none" }, o = typeof e == "function" ? e(t) : e, l = at(at({}, n), o);
  return l;
}
function an(e) {
  var t = e.children, r = e.lineNumber, n = e.lineNumberStyle, o = e.largestLineNumber, l = e.showInlineLineNumbers, i = e.lineProps, u = i === void 0 ? {} : i, s = e.className, c = s === void 0 ? [] : s, d = e.showLineNumbers, g = e.wrapLongLines, h = typeof u == "function" ? u(r) : u;
  if (h.className = c, r && l) {
    var p = Ls(n, r, o);
    t.unshift(Ds(r, p));
  }
  return g & d && (h.style = at(at({}, h.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: h, children: t };
}
function Ms(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e.length; n++) {
    var o = e[n];
    if (o.type === "text")
      r.push(an({ children: [o], className: dp(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      Ms(o.children, l).forEach(function(i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function Cp(e, t, r, n, o, l, i, u, s) {
  var c, d = Ms(e.value), g = [], h = -1, p = 0;
  function m(A, w) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return an({ children: A, lineNumber: w, lineNumberStyle: u, largestLineNumber: i, showInlineLineNumbers: o, lineProps: r, className: C, showLineNumbers: n, wrapLongLines: s });
  }
  function f(A, w) {
    if (n && w && o) {
      var C = Ls(u, w, i);
      A.unshift(Ds(w, C));
    }
    return A;
  }
  function E(A, w) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || C.length > 0 ? m(A, w, C) : f(A, w);
  }
  for (var y = function() {
    var A = d[p], w = A.children[0].value, C = xp(w);
    if (C) {
      var S = w.split(`
`);
      S.forEach(function(_, O) {
        var T = n && g.length + l, R = { type: "text", value: "".concat(_, `
`) };
        if (O === 0) {
          var F = d.slice(h + 1, p).concat(an({ children: [R], className: A.properties.className })), j = E(F, T);
          g.push(j);
        } else if (O === S.length - 1) {
          var D = d[p + 1] && d[p + 1].children && d[p + 1].children[0], L = { type: "text", value: "".concat(_) };
          if (D) {
            var H = an({ children: [L], className: A.properties.className });
            d.splice(p + 1, 0, H);
          } else {
            var P = [L], I = E(P, T, A.properties.className);
            g.push(I);
          }
        } else {
          var N = [R], J = E(N, T, A.properties.className);
          g.push(J);
        }
      }), h = p;
    }
    p++;
  }; p < d.length; )
    y();
  if (h !== d.length - 1) {
    var x = d.slice(h + 1, d.length);
    if (x && x.length) {
      var b = n && g.length + l, v = E(x, b);
      g.push(v);
    }
  }
  return t ? g : (c = []).concat.apply(c, g);
}
function kp(e) {
  var t = e.rows, r = e.stylesheet, n = e.useInlineStyles;
  return t.map(function(o, l) {
    return fo({ node: o, stylesheet: r, useInlineStyles: n, key: "code-segement".concat(l) });
  });
}
function Bs(e) {
  return e && typeof e.highlightAuto < "u";
}
function _p(e) {
  var t = e.astGenerator, r = e.language, n = e.code, o = e.defaultCodeValue;
  if (Bs(t)) {
    var l = yp(t, r);
    return r === "text" ? { value: o, language: "text" } : l ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: o };
  } catch {
    return { value: o };
  }
}
function Op(e, t) {
  return function(r) {
    var n = r.language, o = r.children, l = r.style, i = l === void 0 ? t : l, u = r.customStyle, s = u === void 0 ? {} : u, c = r.codeTagProps, d = c === void 0 ? { className: n ? "language-".concat(n) : void 0, style: at(at({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')]) } : c, g = r.useInlineStyles, h = g === void 0 ? !0 : g, p = r.showLineNumbers, m = p === void 0 ? !1 : p, f = r.showInlineLineNumbers, E = f === void 0 ? !0 : f, y = r.startingLineNumber, x = y === void 0 ? 1 : y, b = r.lineNumberContainerStyle, v = r.lineNumberStyle, A = v === void 0 ? {} : v, w = r.wrapLines, C = r.wrapLongLines, S = C === void 0 ? !1 : C, _ = r.lineProps, O = _ === void 0 ? {} : _, T = r.renderer, R = r.PreTag, F = R === void 0 ? "pre" : R, j = r.CodeTag, D = j === void 0 ? "code" : j, L = r.code, H = L === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : L, P = r.astGenerator, I = lp(r, vp);
    P = P || e;
    var N = m ? a.createElement(wp, { containerStyle: b, codeStyle: d.style || {}, numberStyle: A, startingLineNumber: x, codeString: H }) : null, J = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" }, ne = Bs(P) ? "hljs" : "prismjs", Y = h ? Object.assign({}, I, { style: Object.assign({}, J, s) }) : Object.assign({}, I, { className: I.className ? "".concat(ne, " ").concat(I.className) : ne, style: Object.assign({}, s) });
    if (S ? d.style = at(at({}, d.style), {}, { whiteSpace: "pre-wrap" }) : d.style = at(at({}, d.style), {}, { whiteSpace: "pre" }), !P)
      return a.createElement(F, Y, N, a.createElement(D, d, H));
    (w === void 0 && T || S) && (w = !0), T = T || kp;
    var X = [{ type: "text", value: H }], $ = _p({ astGenerator: P, language: n, code: H, defaultCodeValue: X });
    $.language === null && ($.value = X);
    var V = $.value.length + x, q = Cp($, w, O, m, E, x, V, A, S);
    return a.createElement(F, Y, a.createElement(D, d, !E && N, T({ rows: q, stylesheet: i, useInlineStyles: h })));
  };
}
var mo = Me(Rd()), go = Op(mo.default, {});
go.registerLanguage = function(e, t) {
  return mo.default.register(t);
};
go.alias = function(e, t) {
  return mo.default.alias(e, t);
};
var Be = go, Tp = k.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), Is = k.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
Is.displayName = "ActionButton";
var ho = ({ actionItems: e, ...t }) => a.createElement(Tp, { ...t }, e.map(({ title: r, className: n, onClick: o, disabled: l }, i) => a.createElement(Is, { key: i, className: n, onClick: o, disabled: l }, r))), Fp = Zt(() => import("./storybook-f5df1d02.es.js")), Rp = Zt(() => import("./storybook-30b5cc95.es.js")), Dp = ({ horizontal: e, vertical: t, ...r }) => a.createElement(jr, { fallback: a.createElement("div", { ...r }) }, a.createElement(Fp, null), a.createElement(Rp, { defer: !0, options: { scrollbars: { autoHide: "leave", visibility: "auto" } }, ...r })), Fn = k(Dp)(({ vertical: e }) => e ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" }, ({ horizontal: e }) => e ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" });
Fn.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: Yr, document: vr, window: Lp } = $d;
Be.registerLanguage("jsextra", qd);
Be.registerLanguage("jsx", Hd);
Be.registerLanguage("json", Wd);
Be.registerLanguage("yml", tp);
Be.registerLanguage("md", Qd);
Be.registerLanguage("bash", Zd);
Be.registerLanguage("css", Vd);
Be.registerLanguage("html", Jd);
Be.registerLanguage("tsx", np);
Be.registerLanguage("typescript", op);
Be.registerLanguage("graphql", Yd);
var Mp = Pt(2)((e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})), Bp = $s();
function $s() {
  return Yr != null && Yr.clipboard ? (e) => Yr.clipboard.writeText(e) : async (e) => {
    let t = vr.createElement("TEXTAREA"), r = vr.activeElement;
    t.value = e, vr.body.appendChild(t), t.select(), vr.execCommand("copy"), vr.body.removeChild(t), r.focus();
  };
}
var Ip = k.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: t }) => t ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), $p = ({ children: e, className: t }) => a.createElement(Fn, { horizontal: !0, vertical: !0, className: t }, e), jp = k($p)({ position: "relative" }, ({ theme: e }) => Mp(e)), Hp = k.pre(({ theme: e, padded: t }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: t ? e.layoutMargin : 0 })), Np = k.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), js = (e) => {
  let t = [...e.children], r = t[0], n = r.children[0].value, o = { ...r, children: [], properties: { ...r.properties, "data-line-number": n, style: { ...r.properties.style, userSelect: "auto" } } };
  return t[0] = o, { ...e, children: t };
}, Zp = ({ rows: e, stylesheet: t, useInlineStyles: r }) => e.map((n, o) => fo({ node: js(n), stylesheet: t, useInlineStyles: r, key: `code-segement${o}` })), Pp = (e, t) => t ? e ? ({ rows: r, ...n }) => e({ rows: r.map((o) => js(o)), ...n }) : Zp : e, bo = ({ children: e, language: t = "jsx", copyable: r = !1, bordered: n = !1, padded: o = !1, format: l = !0, formatter: i = null, className: u = null, showLineNumbers: s = !1, ...c }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let d = i ? i(l, e) : e.trim(), [g, h] = U(!1), p = ae((f) => {
    f.preventDefault(), Bp(d).then(() => {
      h(!0), Lp.setTimeout(() => h(!1), 1500);
    }).catch(Id.error);
  }, [d]), m = Pp(c.renderer, s);
  return a.createElement(Ip, { bordered: n, padded: o, showLineNumbers: s, className: u }, a.createElement(jp, null, a.createElement(Be, { padded: o || n, language: t, showLineNumbers: s, showInlineLineNumbers: s, useInlineStyles: !1, PreTag: Hp, CodeTag: Np, lineNumberContainerStyle: {}, ...c, renderer: m }, d)), r ? a.createElement(ho, { actionItems: [{ title: g ? "Copied" : "Copy", onClick: p }] }) : null);
};
bo.registerLanguage = (...e) => Be.registerLanguage(...e);
var Kx = bo;
const { global: Vp } = __STORYBOOK_MODULE_GLOBAL__;
var zp = Z({ "../../node_modules/react-fast-compare/index.js"(e, t) {
  var r = typeof Element < "u", n = typeof Map == "function", o = typeof Set == "function", l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(u, s) {
    if (u === s)
      return !0;
    if (u && s && typeof u == "object" && typeof s == "object") {
      if (u.constructor !== s.constructor)
        return !1;
      var c, d, g;
      if (Array.isArray(u)) {
        if (c = u.length, c != s.length)
          return !1;
        for (d = c; d-- !== 0; )
          if (!i(u[d], s[d]))
            return !1;
        return !0;
      }
      var h;
      if (n && u instanceof Map && s instanceof Map) {
        if (u.size !== s.size)
          return !1;
        for (h = u.entries(); !(d = h.next()).done; )
          if (!s.has(d.value[0]))
            return !1;
        for (h = u.entries(); !(d = h.next()).done; )
          if (!i(d.value[1], s.get(d.value[0])))
            return !1;
        return !0;
      }
      if (o && u instanceof Set && s instanceof Set) {
        if (u.size !== s.size)
          return !1;
        for (h = u.entries(); !(d = h.next()).done; )
          if (!s.has(d.value[0]))
            return !1;
        return !0;
      }
      if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
        if (c = u.length, c != s.length)
          return !1;
        for (d = c; d-- !== 0; )
          if (u[d] !== s[d])
            return !1;
        return !0;
      }
      if (u.constructor === RegExp)
        return u.source === s.source && u.flags === s.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == "function" && typeof s.valueOf == "function")
        return u.valueOf() === s.valueOf();
      if (u.toString !== Object.prototype.toString && typeof u.toString == "function" && typeof s.toString == "function")
        return u.toString() === s.toString();
      if (g = Object.keys(u), c = g.length, c !== Object.keys(s).length)
        return !1;
      for (d = c; d-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, g[d]))
          return !1;
      if (r && u instanceof Element)
        return !1;
      for (d = c; d-- !== 0; )
        if (!((g[d] === "_owner" || g[d] === "__v" || g[d] === "__o") && u.$$typeof) && !i(u[g[d]], s[g[d]]))
          return !1;
      return !0;
    }
    return u !== u && s !== s;
  }
  t.exports = function(u, s) {
    try {
      return i(u, s);
    } catch (c) {
      if ((c.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw c;
    }
  };
} }), Dl = function(e) {
  return e.reduce(function(t, r) {
    var n = r[0], o = r[1];
    return t[n] = o, t;
  }, {});
}, Ll = typeof window < "u" && window.document && window.document.createElement ? M.useLayoutEffect : M.useEffect, Oe = "top", Ne = "bottom", Ze = "right", Te = "left", Rn = "auto", Zr = [Oe, Ne, Ze, Te], rr = "start", Fr = "end", qp = "clippingParents", Hs = "viewport", Er = "popper", Up = "reference", Ml = Zr.reduce(function(e, t) {
  return e.concat([t + "-" + rr, t + "-" + Fr]);
}, []), Ns = [].concat(Zr, [Rn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + rr, t + "-" + Fr]);
}, []), Wp = "beforeRead", Gp = "read", Yp = "afterRead", Kp = "beforeMain", Jp = "main", Xp = "afterMain", Qp = "beforeWrite", e5 = "write", t5 = "afterWrite", r5 = [Wp, Gp, Yp, Kp, Jp, Xp, Qp, e5, t5];
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Le(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nt(e) {
  var t = Le(e).Element;
  return e instanceof t || e instanceof Element;
}
function He(e) {
  var t = Le(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function yo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Le(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function n5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, l = t.elements[r];
    !He(l) || !ut(l) || (Object.assign(l.style, n), Object.keys(o).forEach(function(i) {
      var u = o[i];
      u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? "" : u);
    }));
  });
}
function a5(e) {
  var t = e.state, r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], l = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = i.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !He(o) || !ut(o) || (Object.assign(o.style, u), Object.keys(l).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
var o5 = { name: "applyStyles", enabled: !0, phase: "write", fn: n5, effect: a5, requires: ["computeStyles"] };
function st(e) {
  return e.split("-")[0];
}
var Bt = Math.max, gn = Math.min, nr = Math.round;
function Ra() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Zs() {
  return !/^((?!chrome|android).)*safari/i.test(Ra());
}
function ar(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, l = 1;
  t && He(e) && (o = e.offsetWidth > 0 && nr(n.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && nr(n.height) / e.offsetHeight || 1);
  var i = Nt(e) ? Le(e) : window, u = i.visualViewport, s = !Zs() && r, c = (n.left + (s && u ? u.offsetLeft : 0)) / o, d = (n.top + (s && u ? u.offsetTop : 0)) / l, g = n.width / o, h = n.height / l;
  return { width: g, height: h, top: d, right: c + g, bottom: d + h, left: c, x: c, y: d };
}
function vo(e) {
  var t = ar(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
}
function Ps(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && yo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ht(e) {
  return Le(e).getComputedStyle(e);
}
function l5(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function kt(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dn(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (yo(e) ? e.host : null) || kt(e);
}
function Bl(e) {
  return !He(e) || ht(e).position === "fixed" ? null : e.offsetParent;
}
function i5(e) {
  var t = /firefox/i.test(Ra()), r = /Trident/i.test(Ra());
  if (r && He(e)) {
    var n = ht(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Dn(e);
  for (yo(o) && (o = o.host); He(o) && ["html", "body"].indexOf(ut(o)) < 0; ) {
    var l = ht(o);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Pr(e) {
  for (var t = Le(e), r = Bl(e); r && l5(r) && ht(r).position === "static"; )
    r = Bl(r);
  return r && (ut(r) === "html" || ut(r) === "body" && ht(r).position === "static") ? t : r || i5(e) || t;
}
function Eo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Sr(e, t, r) {
  return Bt(e, gn(t, r));
}
function s5(e, t, r) {
  var n = Sr(e, t, r);
  return n > r ? r : n;
}
function Vs() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zs(e) {
  return Object.assign({}, Vs(), e);
}
function qs(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var u5 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, zs(typeof e != "number" ? e : qs(e, Zr));
};
function c5(e) {
  var t, r = e.state, n = e.name, o = e.options, l = r.elements.arrow, i = r.modifiersData.popperOffsets, u = st(r.placement), s = Eo(u), c = [Te, Ze].indexOf(u) >= 0, d = c ? "height" : "width";
  if (!(!l || !i)) {
    var g = u5(o.padding, r), h = vo(l), p = s === "y" ? Oe : Te, m = s === "y" ? Ne : Ze, f = r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d], E = i[s] - r.rects.reference[s], y = Pr(l), x = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, b = f / 2 - E / 2, v = g[p], A = x - h[d] - g[m], w = x / 2 - h[d] / 2 + b, C = Sr(v, w, A), S = s;
    r.modifiersData[n] = (t = {}, t[S] = C, t.centerOffset = C - w, t);
  }
}
function d5(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ps(t.elements.popper, o) && (t.elements.arrow = o));
}
var p5 = { name: "arrow", enabled: !0, phase: "main", fn: c5, effect: d5, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function or(e) {
  return e.split("-")[1];
}
var f5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function m5(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return { x: nr(r * o) / o || 0, y: nr(n * o) / o || 0 };
}
function Il(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, l = e.variation, i = e.offsets, u = e.position, s = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, g = e.isFixed, h = i.x, p = h === void 0 ? 0 : h, m = i.y, f = m === void 0 ? 0 : m, E = typeof d == "function" ? d({ x: p, y: f }) : { x: p, y: f };
  p = E.x, f = E.y;
  var y = i.hasOwnProperty("x"), x = i.hasOwnProperty("y"), b = Te, v = Oe, A = window;
  if (c) {
    var w = Pr(r), C = "clientHeight", S = "clientWidth";
    if (w === Le(r) && (w = kt(r), ht(w).position !== "static" && u === "absolute" && (C = "scrollHeight", S = "scrollWidth")), w = w, o === Oe || (o === Te || o === Ze) && l === Fr) {
      v = Ne;
      var _ = g && w === A && A.visualViewport ? A.visualViewport.height : w[C];
      f -= _ - n.height, f *= s ? 1 : -1;
    }
    if (o === Te || (o === Oe || o === Ne) && l === Fr) {
      b = Ze;
      var O = g && w === A && A.visualViewport ? A.visualViewport.width : w[S];
      p -= O - n.width, p *= s ? 1 : -1;
    }
  }
  var T = Object.assign({ position: u }, c && f5), R = d === !0 ? m5({ x: p, y: f }, Le(r)) : { x: p, y: f };
  if (p = R.x, f = R.y, s) {
    var F;
    return Object.assign({}, T, (F = {}, F[v] = x ? "0" : "", F[b] = y ? "0" : "", F.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + f + "px)" : "translate3d(" + p + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, T, (t = {}, t[v] = x ? f + "px" : "", t[b] = y ? p + "px" : "", t.transform = "", t));
}
function g5(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, l = r.adaptive, i = l === void 0 ? !0 : l, u = r.roundOffsets, s = u === void 0 ? !0 : u, c = { placement: st(t.placement), variation: or(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Il(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Il(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var h5 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: g5, data: {} }, Kr = { passive: !0 };
function b5(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, l = o === void 0 ? !0 : o, i = n.resize, u = i === void 0 ? !0 : i, s = Le(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && c.forEach(function(d) {
    d.addEventListener("scroll", r.update, Kr);
  }), u && s.addEventListener("resize", r.update, Kr), function() {
    l && c.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Kr);
    }), u && s.removeEventListener("resize", r.update, Kr);
  };
}
var y5 = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: b5, data: {} }, v5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function on(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return v5[t];
  });
}
var E5 = { start: "end", end: "start" };
function $l(e) {
  return e.replace(/start|end/g, function(t) {
    return E5[t];
  });
}
function xo(e) {
  var t = Le(e), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Ao(e) {
  return ar(kt(e)).left + xo(e).scrollLeft;
}
function x5(e, t) {
  var r = Le(e), n = kt(e), o = r.visualViewport, l = n.clientWidth, i = n.clientHeight, u = 0, s = 0;
  if (o) {
    l = o.width, i = o.height;
    var c = Zs();
    (c || !c && t === "fixed") && (u = o.offsetLeft, s = o.offsetTop);
  }
  return { width: l, height: i, x: u + Ao(e), y: s };
}
function A5(e) {
  var t, r = kt(e), n = xo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, l = Bt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Bt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + Ao(e), s = -n.scrollTop;
  return ht(o || r).direction === "rtl" && (u += Bt(r.clientWidth, o ? o.clientWidth : 0) - l), { width: l, height: i, x: u, y: s };
}
function wo(e) {
  var t = ht(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Us(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : He(e) && wo(e) ? e : Us(Dn(e));
}
function Cr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Us(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Le(n), i = o ? [l].concat(l.visualViewport || [], wo(n) ? n : []) : n, u = t.concat(i);
  return o ? u : u.concat(Cr(Dn(i)));
}
function Da(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function w5(e, t) {
  var r = ar(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jl(e, t, r) {
  return t === Hs ? Da(x5(e, r)) : Nt(t) ? w5(t, r) : Da(A5(kt(e)));
}
function S5(e) {
  var t = Cr(Dn(e)), r = ["absolute", "fixed"].indexOf(ht(e).position) >= 0, n = r && He(e) ? Pr(e) : e;
  return Nt(n) ? t.filter(function(o) {
    return Nt(o) && Ps(o, n) && ut(o) !== "body";
  }) : [];
}
function C5(e, t, r, n) {
  var o = t === "clippingParents" ? S5(e) : [].concat(t), l = [].concat(o, [r]), i = l[0], u = l.reduce(function(s, c) {
    var d = jl(e, c, n);
    return s.top = Bt(d.top, s.top), s.right = gn(d.right, s.right), s.bottom = gn(d.bottom, s.bottom), s.left = Bt(d.left, s.left), s;
  }, jl(e, i, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function Ws(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? st(n) : null, l = n ? or(n) : null, i = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case Oe:
      s = { x: i, y: t.y - r.height };
      break;
    case Ne:
      s = { x: i, y: t.y + t.height };
      break;
    case Ze:
      s = { x: t.x + t.width, y: u };
      break;
    case Te:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = o ? Eo(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (l) {
      case rr:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2);
        break;
      case Fr:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Rr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, l = r.strategy, i = l === void 0 ? e.strategy : l, u = r.boundary, s = u === void 0 ? qp : u, c = r.rootBoundary, d = c === void 0 ? Hs : c, g = r.elementContext, h = g === void 0 ? Er : g, p = r.altBoundary, m = p === void 0 ? !1 : p, f = r.padding, E = f === void 0 ? 0 : f, y = zs(typeof E != "number" ? E : qs(E, Zr)), x = h === Er ? Up : Er, b = e.rects.popper, v = e.elements[m ? x : h], A = C5(Nt(v) ? v : v.contextElement || kt(e.elements.popper), s, d, i), w = ar(e.elements.reference), C = Ws({ reference: w, element: b, strategy: "absolute", placement: o }), S = Da(Object.assign({}, b, C)), _ = h === Er ? S : w, O = { top: A.top - _.top + y.top, bottom: _.bottom - A.bottom + y.bottom, left: A.left - _.left + y.left, right: _.right - A.right + y.right }, T = e.modifiersData.offset;
  if (h === Er && T) {
    var R = T[o];
    Object.keys(O).forEach(function(F) {
      var j = [Ze, Ne].indexOf(F) >= 0 ? 1 : -1, D = [Oe, Ne].indexOf(F) >= 0 ? "y" : "x";
      O[F] += R[D] * j;
    });
  }
  return O;
}
function k5(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, l = r.rootBoundary, i = r.padding, u = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? Ns : s, d = or(n), g = d ? u ? Ml : Ml.filter(function(m) {
    return or(m) === d;
  }) : Zr, h = g.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  h.length === 0 && (h = g);
  var p = h.reduce(function(m, f) {
    return m[f] = Rr(e, { placement: f, boundary: o, rootBoundary: l, padding: i })[st(f)], m;
  }, {});
  return Object.keys(p).sort(function(m, f) {
    return p[m] - p[f];
  });
}
function _5(e) {
  if (st(e) === Rn)
    return [];
  var t = on(e);
  return [$l(e), t, $l(t)];
}
function O5(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, u = i === void 0 ? !0 : i, s = r.fallbackPlacements, c = r.padding, d = r.boundary, g = r.rootBoundary, h = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, f = r.allowedAutoPlacements, E = t.options.placement, y = st(E), x = y === E, b = s || (x || !m ? [on(E)] : _5(E)), v = [E].concat(b).reduce(function(X, $) {
      return X.concat(st($) === Rn ? k5(t, { placement: $, boundary: d, rootBoundary: g, padding: c, flipVariations: m, allowedAutoPlacements: f }) : $);
    }, []), A = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), S = !0, _ = v[0], O = 0; O < v.length; O++) {
      var T = v[O], R = st(T), F = or(T) === rr, j = [Oe, Ne].indexOf(R) >= 0, D = j ? "width" : "height", L = Rr(t, { placement: T, boundary: d, rootBoundary: g, altBoundary: h, padding: c }), H = j ? F ? Ze : Te : F ? Ne : Oe;
      A[D] > w[D] && (H = on(H));
      var P = on(H), I = [];
      if (l && I.push(L[R] <= 0), u && I.push(L[H] <= 0, L[P] <= 0), I.every(function(X) {
        return X;
      })) {
        _ = T, S = !1;
        break;
      }
      C.set(T, I);
    }
    if (S)
      for (var N = m ? 3 : 1, J = function(X) {
        var $ = v.find(function(V) {
          var q = C.get(V);
          if (q)
            return q.slice(0, X).every(function(de) {
              return de;
            });
        });
        if ($)
          return _ = $, "break";
      }, ne = N; ne > 0; ne--) {
        var Y = J(ne);
        if (Y === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
var T5 = { name: "flip", enabled: !0, phase: "main", fn: O5, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Hl(e, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
}
function Nl(e) {
  return [Oe, Ze, Ne, Te].some(function(t) {
    return e[t] >= 0;
  });
}
function F5(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, l = t.modifiersData.preventOverflow, i = Rr(t, { elementContext: "reference" }), u = Rr(t, { altBoundary: !0 }), s = Hl(i, n), c = Hl(u, o, l), d = Nl(s), g = Nl(c);
  t.modifiersData[r] = { referenceClippingOffsets: s, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": g });
}
var R5 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: F5 };
function D5(e, t, r) {
  var n = st(e), o = [Te, Oe].indexOf(n) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r, i = l[0], u = l[1];
  return i = i || 0, u = (u || 0) * o, [Te, Ze].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u };
}
function L5(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, l = o === void 0 ? [0, 0] : o, i = Ns.reduce(function(d, g) {
    return d[g] = D5(g, t.rects, l), d;
  }, {}), u = i[t.placement], s = u.x, c = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
var M5 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: L5 };
function B5(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ws({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var I5 = { name: "popperOffsets", enabled: !0, phase: "read", fn: B5, data: {} };
function $5(e) {
  return e === "x" ? "y" : "x";
}
function j5(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, u = i === void 0 ? !1 : i, s = r.boundary, c = r.rootBoundary, d = r.altBoundary, g = r.padding, h = r.tether, p = h === void 0 ? !0 : h, m = r.tetherOffset, f = m === void 0 ? 0 : m, E = Rr(t, { boundary: s, rootBoundary: c, padding: g, altBoundary: d }), y = st(t.placement), x = or(t.placement), b = !x, v = Eo(y), A = $5(v), w = t.modifiersData.popperOffsets, C = t.rects.reference, S = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, O = typeof _ == "number" ? { mainAxis: _, altAxis: _ } : Object.assign({ mainAxis: 0, altAxis: 0 }, _), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = { x: 0, y: 0 };
  if (w) {
    if (l) {
      var F, j = v === "y" ? Oe : Te, D = v === "y" ? Ne : Ze, L = v === "y" ? "height" : "width", H = w[v], P = H + E[j], I = H - E[D], N = p ? -S[L] / 2 : 0, J = x === rr ? C[L] : S[L], ne = x === rr ? -S[L] : -C[L], Y = t.elements.arrow, X = p && Y ? vo(Y) : { width: 0, height: 0 }, $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Vs(), V = $[j], q = $[D], de = Sr(0, C[L], X[L]), xe = b ? C[L] / 2 - N - de - V - O.mainAxis : J - de - V - O.mainAxis, dt = b ? -C[L] / 2 + N + de + q + O.mainAxis : ne + de + q + O.mainAxis, Ie = t.elements.arrow && Pr(t.elements.arrow), We = Ie ? v === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, B = (F = T == null ? void 0 : T[v]) != null ? F : 0, Ve = H + xe - B - We, Ge = H + dt - B, _t = Sr(p ? gn(P, Ve) : P, H, p ? Bt(I, Ge) : I);
      w[v] = _t, R[v] = _t - H;
    }
    if (u) {
      var zt, Ye = v === "x" ? Oe : Te, zr = v === "x" ? Ne : Ze, Ae = w[A], Ot = A === "y" ? "height" : "width", Ke = Ae + E[Ye], qt = Ae - E[zr], Je = [Oe, Te].indexOf(y) !== -1, Ut = (zt = T == null ? void 0 : T[A]) != null ? zt : 0, Xe = Je ? Ke : Ae - C[Ot] - S[Ot] - Ut + O.altAxis, be = Je ? Ae + C[Ot] + S[Ot] - Ut - O.altAxis : qt, ze = p && Je ? s5(Xe, Ae, be) : Sr(p ? Xe : Ke, Ae, p ? be : qt);
      w[A] = ze, R[A] = ze - Ae;
    }
    t.modifiersData[n] = R;
  }
}
var H5 = { name: "preventOverflow", enabled: !0, phase: "main", fn: j5, requiresIfExists: ["offset"] };
function N5(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Z5(e) {
  return e === Le(e) || !He(e) ? xo(e) : N5(e);
}
function P5(e) {
  var t = e.getBoundingClientRect(), r = nr(t.width) / e.offsetWidth || 1, n = nr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function V5(e, t, r) {
  r === void 0 && (r = !1);
  var n = He(t), o = He(t) && P5(t), l = kt(t), i = ar(e, o, r), u = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (n || !n && !r) && ((ut(t) !== "body" || wo(l)) && (u = Z5(t)), He(t) ? (s = ar(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : l && (s.x = Ao(l))), { x: i.left + u.scrollLeft - s.x, y: i.top + u.scrollTop - s.y, width: i.width, height: i.height };
}
function z5(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function o(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function(u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && o(s);
      }
    }), n.push(l);
  }
  return e.forEach(function(l) {
    r.has(l.name) || o(l);
  }), n;
}
function q5(e) {
  var t = z5(e);
  return r5.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function U5(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function W5(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, { options: Object.assign({}, o.options, n.options), data: Object.assign({}, o.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Zl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Pl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function G5(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, l = o === void 0 ? Zl : o;
  return function(i, u, s) {
    s === void 0 && (s = l);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Zl, l), modifiersData: {}, elements: { reference: i, popper: u }, attributes: {}, styles: {} }, d = [], g = !1, h = { state: c, setOptions: function(f) {
      var E = typeof f == "function" ? f(c.options) : f;
      m(), c.options = Object.assign({}, l, c.options, E), c.scrollParents = { reference: Nt(i) ? Cr(i) : i.contextElement ? Cr(i.contextElement) : [], popper: Cr(u) };
      var y = q5(W5([].concat(n, c.options.modifiers)));
      return c.orderedModifiers = y.filter(function(x) {
        return x.enabled;
      }), p(), h.update();
    }, forceUpdate: function() {
      if (!g) {
        var f = c.elements, E = f.reference, y = f.popper;
        if (Pl(E, y)) {
          c.rects = { reference: V5(E, Pr(y), c.options.strategy === "fixed"), popper: vo(y) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(S) {
            return c.modifiersData[S.name] = Object.assign({}, S.data);
          });
          for (var x = 0; x < c.orderedModifiers.length; x++) {
            if (c.reset === !0) {
              c.reset = !1, x = -1;
              continue;
            }
            var b = c.orderedModifiers[x], v = b.fn, A = b.options, w = A === void 0 ? {} : A, C = b.name;
            typeof v == "function" && (c = v({ state: c, options: w, name: C, instance: h }) || c);
          }
        }
      }
    }, update: U5(function() {
      return new Promise(function(f) {
        h.forceUpdate(), f(c);
      });
    }), destroy: function() {
      m(), g = !0;
    } };
    if (!Pl(i, u))
      return h;
    h.setOptions(s).then(function(f) {
      !g && s.onFirstUpdate && s.onFirstUpdate(f);
    });
    function p() {
      c.orderedModifiers.forEach(function(f) {
        var E = f.name, y = f.options, x = y === void 0 ? {} : y, b = f.effect;
        if (typeof b == "function") {
          var v = b({ state: c, name: E, instance: h, options: x }), A = function() {
          };
          d.push(v || A);
        }
      });
    }
    function m() {
      d.forEach(function(f) {
        return f();
      }), d = [];
    }
    return h;
  };
}
var Y5 = [y5, I5, h5, o5, M5, T5, H5, p5, R5], K5 = G5({ defaultModifiers: Y5 }), J5 = Me(zp()), X5 = [], Q5 = function(e, t, r) {
  r === void 0 && (r = {});
  var n = M.useRef(null), o = { onFirstUpdate: r.onFirstUpdate, placement: r.placement || "bottom", strategy: r.strategy || "absolute", modifiers: r.modifiers || X5 }, l = M.useState({ styles: { popper: { position: o.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), i = l[0], u = l[1], s = M.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(g) {
      var h = g.state, p = Object.keys(h.elements);
      Xc.flushSync(function() {
        u({ styles: Dl(p.map(function(m) {
          return [m, h.styles[m] || {}];
        })), attributes: Dl(p.map(function(m) {
          return [m, h.attributes[m]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), c = M.useMemo(function() {
    var g = { onFirstUpdate: o.onFirstUpdate, placement: o.placement, strategy: o.strategy, modifiers: [].concat(o.modifiers, [s, { name: "applyStyles", enabled: !1 }]) };
    return (0, J5.default)(n.current, g) ? n.current || g : (n.current = g, g);
  }, [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]), d = M.useRef();
  return Ll(function() {
    d.current && d.current.setOptions(c);
  }, [c]), Ll(function() {
    if (!(e == null || t == null)) {
      var g = r.createPopper || K5, h = g(e, t, c);
      return d.current = h, function() {
        h.destroy(), d.current = null;
      };
    }
  }, [e, t, r.createPopper]), { state: d.current ? d.current.state : null, styles: i.styles, attributes: i.attributes, update: d.current ? d.current.update : null, forceUpdate: d.current ? d.current.forceUpdate : null };
};
function Gs(e) {
  var t = M.useRef(e);
  return t.current = e, M.useCallback(function() {
    return t.current;
  }, []);
}
var e2 = function() {
};
function t2(e) {
  var t = e.initial, r = e.value, n = e.onChange, o = n === void 0 ? e2 : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var l = M.useState(t), i = l[0], u = l[1], s = Gs(i), c = M.useCallback(function(g) {
    var h = s(), p = typeof g == "function" ? g(h) : g;
    typeof p.persist == "function" && p.persist(), u(p), typeof o == "function" && o(p);
  }, [s, o]), d = r !== void 0;
  return [d ? r : i, d ? o : c];
}
function Ys(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), function() {
    return { width: 0, height: 0, top: t, right: e, bottom: t, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var r2 = ["styles", "attributes"], Vl = { getBoundingClientRect: Ys() }, zl = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function n2(e, t) {
  var r, n, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(zl).reduce(function(D, L) {
    var H;
    return Ce({}, D, (H = {}, H[L] = D[L] !== void 0 ? D[L] : zl[L], H));
  }, e), i = M.useMemo(function() {
    return [{ name: "offset", options: { offset: l.offset } }];
  }, Array.isArray(l.offset) ? l.offset : []), u = Ce({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }), s = M.useState(null), c = s[0], d = s[1], g = M.useState(null), h = g[0], p = g[1], m = t2({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }), f = m[0], E = m[1], y = M.useRef();
  M.useEffect(function() {
    return function() {
      return clearTimeout(y.current);
    };
  }, []);
  var x = Q5(l.followCursor ? Vl : c, h, u), b = x.styles, v = x.attributes, A = uo(x, r2), w = A.update, C = Gs({ visible: f, triggerRef: c, tooltipRef: h, finalConfig: l }), S = M.useCallback(function(D) {
    return Array.isArray(l.trigger) ? l.trigger.includes(D) : l.trigger === D;
  }, Array.isArray(l.trigger) ? l.trigger : [l.trigger]), _ = M.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return E(!1);
    }, l.delayHide);
  }, [l.delayHide, E]), O = M.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return E(!0);
    }, l.delayShow);
  }, [l.delayShow, E]), T = M.useCallback(function() {
    C().visible ? _() : O();
  }, [C, _, O]);
  M.useEffect(function() {
    if (C().finalConfig.closeOnOutsideClick) {
      var D = function(L) {
        var H, P = C(), I = P.tooltipRef, N = P.triggerRef, J = (L.composedPath == null || (H = L.composedPath()) == null ? void 0 : H[0]) || L.target;
        J instanceof Node && I != null && N != null && !I.contains(J) && !N.contains(J) && _();
      };
      return document.addEventListener("mousedown", D), function() {
        return document.removeEventListener("mousedown", D);
      };
    }
  }, [C, _]), M.useEffect(function() {
    if (!(c == null || !S("click")))
      return c.addEventListener("click", T), function() {
        return c.removeEventListener("click", T);
      };
  }, [c, S, T]), M.useEffect(function() {
    if (!(c == null || !S("double-click")))
      return c.addEventListener("dblclick", T), function() {
        return c.removeEventListener("dblclick", T);
      };
  }, [c, S, T]), M.useEffect(function() {
    if (!(c == null || !S("right-click"))) {
      var D = function(L) {
        L.preventDefault(), T();
      };
      return c.addEventListener("contextmenu", D), function() {
        return c.removeEventListener("contextmenu", D);
      };
    }
  }, [c, S, T]), M.useEffect(function() {
    if (!(c == null || !S("focus")))
      return c.addEventListener("focus", O), c.addEventListener("blur", _), function() {
        c.removeEventListener("focus", O), c.removeEventListener("blur", _);
      };
  }, [c, S, O, _]), M.useEffect(function() {
    if (!(c == null || !S("hover")))
      return c.addEventListener("mouseenter", O), c.addEventListener("mouseleave", _), function() {
        c.removeEventListener("mouseenter", O), c.removeEventListener("mouseleave", _);
      };
  }, [c, S, O, _]), M.useEffect(function() {
    if (!(h == null || !S("hover") || !C().finalConfig.interactive))
      return h.addEventListener("mouseenter", O), h.addEventListener("mouseleave", _), function() {
        h.removeEventListener("mouseenter", O), h.removeEventListener("mouseleave", _);
      };
  }, [h, S, O, _, C]);
  var R = A == null || (r = A.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null ? void 0 : o.isReferenceHidden;
  M.useEffect(function() {
    l.closeOnTriggerHidden && R && _();
  }, [l.closeOnTriggerHidden, _, R]), M.useEffect(function() {
    if (!l.followCursor || c == null)
      return;
    function D(L) {
      var H = L.clientX, P = L.clientY;
      Vl.getBoundingClientRect = Ys(H, P), w == null || w();
    }
    return c.addEventListener("mousemove", D), function() {
      return c.removeEventListener("mousemove", D);
    };
  }, [l.followCursor, c, w]), M.useEffect(function() {
    if (!(h == null || w == null || l.mutationObserverOptions == null)) {
      var D = new MutationObserver(w);
      return D.observe(h, l.mutationObserverOptions), function() {
        return D.disconnect();
      };
    }
  }, [l.mutationObserverOptions, h, w]);
  var F = function(D) {
    return D === void 0 && (D = {}), Ce({}, D, { style: Ce({}, D.style, b.popper) }, v.popper, { "data-popper-interactive": l.interactive });
  }, j = function(D) {
    return D === void 0 && (D = {}), Ce({}, D, v.arrow, { style: Ce({}, D.style, b.arrow), "data-popper-arrow": !0 });
  };
  return Ce({ getArrowProps: j, getTooltipProps: F, setTooltipRef: p, setTriggerRef: d, tooltipRef: h, triggerRef: c, visible: f }, A);
}
var $e = Pt(1e3)((e, t, r, n = 0) => t.split("-")[0] === e ? r : n), yt = 8, a2 = k.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
  let t = 0, r = 0;
  switch (!0) {
    case (e.startsWith("left") || e.startsWith("right")): {
      r = 8;
      break;
    }
    case (e.startsWith("top") || e.startsWith("bottom")): {
      t = 8;
      break;
    }
  }
  return { transform: `translate3d(${t}px, ${r}px, 0px)` };
}, ({ theme: e, color: t, placement: r }) => ({ bottom: `${$e("top", r, `${yt * -1}px`, "auto")}`, top: `${$e("bottom", r, `${yt * -1}px`, "auto")}`, right: `${$e("left", r, `${yt * -1}px`, "auto")}`, left: `${$e("right", r, `${yt * -1}px`, "auto")}`, borderBottomWidth: `${$e("top", r, "0", yt)}px`, borderTopWidth: `${$e("bottom", r, "0", yt)}px`, borderRightWidth: `${$e("left", r, "0", yt)}px`, borderLeftWidth: `${$e("right", r, "0", yt)}px`, borderTopColor: $e("top", r, e.color[t] || t || e.base === "light" ? wr(e.background.app) : e.background.app, "transparent"), borderBottomColor: $e("bottom", r, e.color[t] || t || e.base === "light" ? wr(e.background.app) : e.background.app, "transparent"), borderLeftColor: $e("left", r, e.color[t] || t || e.base === "light" ? wr(e.background.app) : e.background.app, "transparent"), borderRightColor: $e("right", r, e.color[t] || t || e.base === "light" ? wr(e.background.app) : e.background.app, "transparent") })), o2 = k.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: t, hasChrome: r }) => r ? { background: e.color[t] || t || e.base === "light" ? wr(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), So = a.forwardRef(({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: o, color: l, withArrows: i, ...u }, s) => a.createElement(o2, { "data-testid": "tooltip", hasChrome: t, ref: s, ...u, color: l }, t && i && a.createElement(a2, { placement: e, ...n, color: l }), r));
So.displayName = "Tooltip";
So.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: ln } = Vp, l2 = k.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, i2 = k.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, Ks = ({ svg: e, trigger: t, closeOnOutsideClick: r, placement: n, hasChrome: o, withArrows: l, offset: i, tooltip: u, children: s, closeOnTriggerHidden: c, mutationObserverOptions: d, closeOnClick: g, tooltipShown: h, onVisibilityChange: p, defaultVisible: m, delayHide: f, visible: E, interactive: y, delayShow: x, modifiers: b, strategy: v, followCursor: A, onVisibleChange: w, ...C }) => {
  let S = e ? i2 : l2, { getArrowProps: _, getTooltipProps: O, setTooltipRef: T, setTriggerRef: R, visible: F, state: j } = n2({ trigger: t, placement: n, defaultVisible: m ?? h, delayHide: f, interactive: y, closeOnOutsideClick: r ?? g, closeOnTriggerHidden: c, onVisibleChange: (L) => {
    p == null || p(L), w == null || w(L);
  }, delayShow: x, followCursor: A, mutationObserverOptions: d, visible: E, offset: i }, { modifiers: b, strategy: v }), D = a.createElement(So, { placement: j == null ? void 0 : j.placement, ref: T, hasChrome: o, arrowProps: _(), withArrows: l, ...O() }, typeof u == "function" ? u({ onHide: () => w(!1) }) : u);
  return a.createElement(a.Fragment, null, a.createElement(S, { trigger: t, ref: R, ...C }, s), F && Jc.createPortal(D, ln.body));
};
Ks.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var s2 = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, o] = U(e), l = ae((i) => {
    t && t(i) === !1 || o(i);
  }, [t]);
  return ie(() => {
    let i = () => l(!1);
    ln.addEventListener("keydown", i, !1);
    let u = Array.from(ln.getElementsByTagName("iframe")), s = [];
    return u.forEach((c) => {
      let d = () => {
        try {
          c.contentWindow.document && (c.contentWindow.document.addEventListener("click", i), s.push(() => {
            try {
              c.contentWindow.document.removeEventListener("click", i);
            } catch {
            }
          }));
        } catch {
        }
      };
      d(), c.addEventListener("load", d), s.push(() => {
        c.removeEventListener("load", d);
      });
    }), () => {
      ln.removeEventListener("keydown", i), s.forEach((c) => {
        c();
      });
    };
  }), a.createElement(Ks, { ...r, visible: n, onVisibleChange: l });
};
function u2(e, t) {
  var r = ce(null), n = ce(null);
  n.current = t;
  var o = ce(null);
  ie(function() {
    l();
  });
  var l = ae(function() {
    var i = o.current, u = n.current, s = i || (u ? u instanceof Element ? u : u.current : null);
    r.current && r.current.element === s && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: s,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s ? e(s) : void 0
    });
  }, [e]);
  return ie(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), ae(function(i) {
    o.current = i, l();
  }, [l]);
}
function ql(e, t, r) {
  return e[t] ? e[t][0] ? e[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
function Js(e) {
  e === void 0 && (e = {});
  var t = e.onResize, r = ce(void 0);
  r.current = t;
  var n = e.round || Math.round, o = ce(), l = U({
    width: void 0,
    height: void 0
  }), i = l[0], u = l[1], s = ce(!1);
  ie(function() {
    return s.current = !1, function() {
      s.current = !0;
    };
  }, []);
  var c = ce({
    width: void 0,
    height: void 0
  }), d = u2(ae(function(g) {
    return (!o.current || o.current.box !== e.box || o.current.round !== n) && (o.current = {
      box: e.box,
      round: n,
      instance: new ResizeObserver(function(h) {
        var p = h[0], m = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", f = ql(p, m, "inlineSize"), E = ql(p, m, "blockSize"), y = f ? n(f) : void 0, x = E ? n(E) : void 0;
        if (c.current.width !== y || c.current.height !== x) {
          var b = {
            width: y,
            height: x
          };
          c.current.width = y, c.current.height = x, r.current ? r.current(b) : s.current || u(b);
        }
      })
    }), o.current.instance.observe(g, {
      box: e.box
    }), function() {
      o.current && o.current.instance.unobserve(g);
    };
  }, [e.box, n]), e.ref);
  return vn(function() {
    return {
      ref: d,
      width: i.width,
      height: i.height
    };
  }, [d, i.width, i.height]);
}
const { global: c2 } = __STORYBOOK_MODULE_GLOBAL__;
var ee = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e;
};
function d2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Dr(e, t);
}
function p2(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dr(e, t);
}
function La(e) {
  return La = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, La(e);
}
function f2(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function m2() {
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
function sn(e, t, r) {
  return m2() ? sn = Reflect.construct.bind() : sn = function(n, o, l) {
    var i = [null];
    i.push.apply(i, o);
    var u = Function.bind.apply(n, i), s = new u();
    return l && Dr(s, l.prototype), s;
  }, sn.apply(null, arguments);
}
function Ma(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ma = function(r) {
    if (r === null || !f2(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, n);
    }
    function n() {
      return sn(r, arguments, La(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Dr(n, r);
  }, Ma(e);
}
var g2 = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function h2() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var ot = function(e) {
  p2(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, h2.apply(void 0, [g2[r]].concat(l))) || this;
    }
    return d2(n);
  }
  return t;
}(Ma(Error));
function aa(e) {
  return Math.round(e * 255);
}
function b2(e, t, r) {
  return aa(e) + "," + aa(t) + "," + aa(r);
}
function Lr(e, t, r, n) {
  if (n === void 0 && (n = b2), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), u = 0, s = 0, c = 0;
  o >= 0 && o < 1 ? (u = l, s = i) : o >= 1 && o < 2 ? (u = i, s = l) : o >= 2 && o < 3 ? (s = l, c = i) : o >= 3 && o < 4 ? (s = i, c = l) : o >= 4 && o < 5 ? (u = i, c = l) : o >= 5 && o < 6 && (u = l, c = i);
  var d = r - l / 2, g = u + d, h = s + d, p = c + d;
  return n(g, h, p);
}
var Ul = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function y2(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ul[t] ? "#" + Ul[t] : e;
}
var v2 = /^#[a-fA-F0-9]{6}$/, E2 = /^#[a-fA-F0-9]{8}$/, x2 = /^#[a-fA-F0-9]{3}$/, A2 = /^#[a-fA-F0-9]{4}$/, oa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, w2 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, S2 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, C2 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Co(e) {
  if (typeof e != "string")
    throw new ot(3);
  var t = y2(e);
  if (t.match(v2))
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(E2)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(x2))
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(A2)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var o = oa.exec(t);
  if (o)
    return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var l = w2.exec(t.substring(0, 50));
  if (l)
    return { red: parseInt("" + l[1], 10), green: parseInt("" + l[2], 10), blue: parseInt("" + l[3], 10), alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]) };
  var i = S2.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Lr(u, s, c) + ")", g = oa.exec(d);
    if (!g)
      throw new ot(4, t, d);
    return { red: parseInt("" + g[1], 10), green: parseInt("" + g[2], 10), blue: parseInt("" + g[3], 10) };
  }
  var h = C2.exec(t.substring(0, 50));
  if (h) {
    var p = parseInt("" + h[1], 10), m = parseInt("" + h[2], 10) / 100, f = parseInt("" + h[3], 10) / 100, E = "rgb(" + Lr(p, m, f) + ")", y = oa.exec(E);
    if (!y)
      throw new ot(4, t, E);
    return { red: parseInt("" + y[1], 10), green: parseInt("" + y[2], 10), blue: parseInt("" + y[3], 10), alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4]) };
  }
  throw new ot(5);
}
function k2(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), l = Math.min(t, r, n), i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: i };
  var u, s = o - l, c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? { hue: u, saturation: c, lightness: i, alpha: e.alpha } : { hue: u, saturation: c, lightness: i };
}
function Xs(e) {
  return k2(Co(e));
}
var _2 = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Ba = _2;
function Rt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function la(e) {
  return Rt(Math.round(e * 255));
}
function O2(e, t, r) {
  return Ba("#" + la(e) + la(t) + la(r));
}
function hn(e, t, r) {
  return Lr(e, t, r, O2);
}
function T2(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return hn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return hn(e.hue, e.saturation, e.lightness);
  throw new ot(1);
}
function F2(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? hn(e, t, r) : "rgba(" + Lr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? hn(e.hue, e.saturation, e.lightness) : "rgba(" + Lr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new ot(2);
}
function Ia(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ba("#" + Rt(e) + Rt(t) + Rt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ba("#" + Rt(e.red) + Rt(e.green) + Rt(e.blue));
  throw new ot(6);
}
function mt(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = Co(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Ia(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Ia(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new ot(7);
}
var R2 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, D2 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, L2 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, M2 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Qs(e) {
  if (typeof e != "object")
    throw new ot(8);
  if (D2(e))
    return mt(e);
  if (R2(e))
    return Ia(e);
  if (M2(e))
    return F2(e);
  if (L2(e))
    return T2(e);
  throw new ot(8);
}
function eu(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : eu(e, t, n);
  };
}
function ko(e) {
  return eu(e, e.length, []);
}
function _o(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function B2(e, t) {
  if (t === "transparent")
    return t;
  var r = Xs(t);
  return Qs(Ce({}, r, { lightness: _o(0, 1, r.lightness - parseFloat(e)) }));
}
var I2 = ko(B2), Xt = I2;
function $2(e, t) {
  if (t === "transparent")
    return t;
  var r = Xs(t);
  return Qs(Ce({}, r, { lightness: _o(0, 1, r.lightness + parseFloat(e)) }));
}
var j2 = ko($2), H2 = j2;
function N2(e, t) {
  if (t === "transparent")
    return t;
  var r = Co(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = Ce({}, r, { alpha: _o(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return mt(o);
}
var Z2 = ko(N2), ke = Z2, dr = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), bt = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? ke(0.1, e.color.defaultText) : ke(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), re = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), Vt = { margin: "16px 0" }, P2 = ({ href: e, children: t, ...r }) => {
  let n = /^\//.test(e), o = /^#.*/.test(e), l = n ? `./?path=${e}` : e;
  return a.createElement("a", { href: l, target: o ? "_self" : "_top", ...r }, t);
}, tu = k(P2)(re, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), ru = k.blockquote(re, Vt, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), V2 = (e) => typeof e == "string", z2 = /[\n\r]/g, q2 = k.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), bt), U2 = k(bo)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Oo = ({ className: e, children: t, ...r }) => {
  let n = (e || "").match(/lang-(\S+)/), o = Ht.toArray(t);
  return o.filter(V2).some((l) => l.match(z2)) ? a.createElement(U2, { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? "plaintext", format: !1, ...r }, t) : a.createElement(q2, { ...r, className: e }, o);
}, nu = k.div(re), au = k.dl(re, { ...Vt, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), ou = k.h1(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), To = k.h2(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), Fo = k.h3(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), lu = k.h4(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), iu = k.h5(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), su = k.h6(re, dr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), uu = k.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), cu = k.img({ maxWidth: "100%" }), du = k.li(re, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": bt({ theme: e }) })), W2 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, pu = k.ol(re, Vt, { ...W2, listStyle: "decimal" }), fu = k.p(re, Vt, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": bt({ theme: e }) })), mu = k.pre(re, Vt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), gu = k.span(re, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), hu = k.table(re, Vt, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), bu = k.title(bt), G2 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, yu = k.ul(re, Vt, { ...G2, listStyle: "disc" }), Ro = k.div(re), vu = { h1: (e) => a.createElement(ou, { ...ee(e, "h1") }), h2: (e) => a.createElement(To, { ...ee(e, "h2") }), h3: (e) => a.createElement(Fo, { ...ee(e, "h3") }), h4: (e) => a.createElement(lu, { ...ee(e, "h4") }), h5: (e) => a.createElement(iu, { ...ee(e, "h5") }), h6: (e) => a.createElement(su, { ...ee(e, "h6") }), pre: (e) => a.createElement(mu, { ...ee(e, "pre") }), a: (e) => a.createElement(tu, { ...ee(e, "a") }), hr: (e) => a.createElement(uu, { ...ee(e, "hr") }), dl: (e) => a.createElement(au, { ...ee(e, "dl") }), blockquote: (e) => a.createElement(ru, { ...ee(e, "blockquote") }), table: (e) => a.createElement(hu, { ...ee(e, "table") }), img: (e) => a.createElement(cu, { ...ee(e, "img") }), div: (e) => a.createElement(nu, { ...ee(e, "div") }), span: (e) => a.createElement(gu, { ...ee(e, "span") }), li: (e) => a.createElement(du, { ...ee(e, "li") }), ul: (e) => a.createElement(yu, { ...ee(e, "ul") }), ol: (e) => a.createElement(pu, { ...ee(e, "ol") }), p: (e) => a.createElement(fu, { ...ee(e, "p") }), code: (e) => a.createElement(Oo, { ...ee(e, "code") }), tt: (e) => a.createElement(bu, { ...ee(e, "tt") }), resetwrapper: (e) => a.createElement(Ro, { ...ee(e, "resetwrapper") }) };
k.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: t }) => {
  switch (t) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${ke(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${ke(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${ke(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${ke(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var Mr = { user: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), a.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: a.createElement(a.Fragment, null, a.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: a.createElement(a.Fragment, null, a.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), a.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), a.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), a.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), a.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), a.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), a.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: a.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), a.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), a.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), a.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: a.createElement(a.Fragment, null, a.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), a.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), a.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), a.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), a.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), a.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), a.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), a.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: a.createElement(a.Fragment, null, a.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: a.createElement(a.Fragment, null, a.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), a.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), a.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), a.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: a.createElement(a.Fragment, null, a.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, Eu = k.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, we = ({ icon: e, useSymbol: t, ...r }) => a.createElement(Eu, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r }, t ? a.createElement("use", { xlinkHref: `#icon--${e}` }) : Mr[e]);
qi(function({ icons: e = Object.keys(Mr) }) {
  return a.createElement(Eu, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((t) => a.createElement("symbol", { id: `icon--${t}`, key: t }, Mr[t])));
});
var Y2 = 0, K2 = (e) => e.button === Y2 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, J2 = (e, t) => {
  K2(e) && (e.preventDefault(), t(e));
}, X2 = k.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), Q2 = k.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: Xt(0.07, e.color.secondary), "svg path:not([fill])": { fill: Xt(0.07, e.color.secondary) } }, "&:active": { color: Xt(0.1, e.color.secondary), "svg path:not([fill])": { fill: Xt(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: t, tertiary: r }) => {
  let n;
  return t && (n = [e.textMutedColor, e.color.dark, e.color.darker]), r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]), n ? { color: n[0], "svg path:not([fill])": { fill: n[0] }, "&:hover": { color: n[1], "svg path:not([fill])": { fill: n[1] } }, "&:active": { color: n[2], "svg path:not([fill])": { fill: n[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: t }) => t ? { color: e.color.lightest, ":not([fill])": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path:not([fill])": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path:not([fill])": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), It = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: o, className: l, ...i }) => a.createElement(Q2, { ...i, onClick: r && e ? (u) => J2(u, r) : r, className: l }, a.createElement(X2, { withArrow: n, containsIcon: o }, t, n && a.createElement(we, { icon: "arrowright" })));
It.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
k.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var $t = [], lr = null, ef = Zt(async () => {
  let { SyntaxHighlighter: e } = await import("./storybook-9fb68198.es.js");
  return $t.length > 0 && ($t.forEach((t) => {
    e.registerLanguage(...t);
  }), $t = []), lr === null && (lr = e), { default: (t) => a.createElement(e, { ...t }) };
}), tf = Zt(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([import("./storybook-9fb68198.es.js"), import("./storybook-43458b50.es.js")]);
  return $t.length > 0 && ($t.forEach((r) => {
    e.registerLanguage(...r);
  }), $t = []), lr === null && (lr = e), { default: (r) => a.createElement(e, { ...r, formatter: t }) };
}), Ln = (e) => a.createElement(jr, { fallback: a.createElement("div", null) }, e.format !== !1 ? a.createElement(tf, { ...e }) : a.createElement(ef, { ...e }));
Ln.registerLanguage = (...e) => {
  if (lr !== null) {
    lr.registerLanguage(...e);
    return;
  }
  $t.push(e);
};
k.div(({ theme: e, col: t, row: r = 1 }) => t ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: t * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${Ta}`]: { marginLeft: 0 } } : { "& > *": { marginTop: r * e.layoutMargin }, [`& > *:first-child${Ta}`]: { marginTop: 0 } }, ({ theme: e, outer: t, col: r, row: n }) => {
  switch (!0) {
    case !!(t && r):
      return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin };
    case !!(t && n):
      return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin };
    default:
      return {};
  }
});
var rf = k.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), nf = k.div(), af = k.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), xu = ({ children: e, ...t }) => {
  let [r, n] = Ht.toArray(e);
  return a.createElement(af, { ...t }, a.createElement(rf, null, r), n && a.createElement(nf, null, n));
}, of = k.div(({ scale: e = 1, elementHeight: t }) => ({ height: t || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function lf({ scale: e, children: t }) {
  let r = ce(null), [n, o] = U(0), l = ae(({ height: i }) => {
    i && o(i / e);
  }, [e]);
  return ie(() => {
    r.current && o(r.current.getBoundingClientRect().height);
  }, [e]), Js({ ref: r, onResize: l }), a.createElement(of, { scale: e, elementHeight: n }, a.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
var sf = class extends ct {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: e } = this.props;
    this.iframe = e.current;
  }
  shouldComponentUpdate(e) {
    let { scale: t, active: r } = this.props;
    return t !== e.scale && this.setIframeInnerZoom(e.scale), r !== e.active && this.iframe.setAttribute("data-is-storybook", e.active ? "true" : "false"), e.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(e) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
    } catch {
      this.setIframeZoom(e);
    }
  }
  setIframeZoom(e) {
    Object.assign(this.iframe.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
  }
  render() {
    let { children: e } = this.props;
    return e;
  }
}, Au = { Element: lf, IFrame: sf }, { document: uf } = c2, cf = k.strong(({ theme: e }) => ({ color: e.color.orange })), df = k.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), Wl = k.em(({ theme: e }) => ({ color: e.textMutedColor })), pf = /(Error): (.*)\n/, ff = /at (?:(.*) )?\(?(.+)\)?/, mf = /([^@]+)?(?:\/<)?@(.+)?/, gf = /([^@]+)?@(.+)?/, wu = ({ error: e }) => {
  if (!e)
    return a.createElement(At, null, "This error has no stack or message");
  if (!e.stack)
    return a.createElement(At, null, e.message || "This error has no stack or message");
  let t = e.stack.toString();
  t && e.message && !t.includes(e.message) && (t = `Error: ${e.message}

${t}`);
  let r = t.match(pf);
  if (!r)
    return a.createElement(At, null, t);
  let [, n, o] = r, l = t.split(/\n/).slice(1), [, ...i] = l.map((u) => {
    let s = u.match(ff) || u.match(mf) || u.match(gf);
    return s ? { name: (s[1] || "").replace("/<", ""), location: s[2].replace(uf.location.origin, "") } : null;
  }).filter(Boolean);
  return a.createElement(At, null, a.createElement("span", null, n), ": ", a.createElement(cf, null, o), a.createElement("br", null), i.map((u, s) => u.name ? a.createElement(At, { key: s }, "  ", "at ", a.createElement(df, null, u.name), " (", a.createElement(Wl, null, u.location), ")", a.createElement("br", null)) : a.createElement(At, { key: s }, "  ", "at ", a.createElement(Wl, null, u.location), a.createElement("br", null))));
}, Su = k.button(({ small: e, theme: t }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`, fontWeight: t.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: t }) => e ? { svg: { display: "block", margin: 0 }, ...t ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: t, secondary: r, gray: n }) => {
  let o;
  return n ? o = e.color.mediumlight : r ? o = e.color.secondary : t && (o = e.color.primary), o ? { background: o, color: n ? e.color.darkest : e.color.lightest, "&:hover": { background: Xt(0.05, o) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${mt(o, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${mt(o, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: t, inForm: r, small: n }) => t ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...r && n ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? Xt(0.02, e.button.background) : H2(0.03, e.button.background), ...r ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${mt(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: t }) => t ? { boxShadow: `${ke(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: ke(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${ke(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${ke(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: ke(0, e.color.defaultText) } } : {}, ({ theme: e, outline: t, primary: r }) => {
  let n = e.color.primary;
  return t && r ? { boxShadow: `${n} 0 0 0 1px inset`, color: n, "svg path:not([fill])": { fill: n }, "&:hover": { boxShadow: `${n} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${n} 0 0 0 1px inset, ${mt(n, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${n} 0 0 0 1px inset, ${mt(n, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: t, primary: r, secondary: n }) => {
  let o;
  return n ? o = e.color.secondary : r && (o = e.color.primary), t && o ? { boxShadow: `${o} 0 0 0 1px inset`, color: o, "svg path:not([fill])": { fill: o }, "&:hover": { boxShadow: `${o} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: o, boxShadow: `${o} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${o} 0 0 0 1px inset, ${mt(o, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${o} 0 0 0 1px inset, ${mt(o, 0.2)} 0 8px 18px 0px` } } : {};
}), hf = Su.withComponent("a"), Cu = Object.assign(Ct(function({ isLink: e, children: t, ...r }, n) {
  return e ? a.createElement(hf, { ...r, ref: n }, t) : a.createElement(Su, { ...r, ref: n }, t);
}), { defaultProps: { isLink: !1 } }), bf = k.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), yf = k.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), ku = ({ label: e, children: t, ...r }) => a.createElement(bf, { ...r }, e ? a.createElement(yf, null, a.createElement("span", null, e)) : null, t);
ku.defaultProps = { label: void 0 };
var Gl = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, vf = function(e, t) {
  var r = ce();
  return ae(function(n) {
    e.current = n, r.current && Gl(r.current, null), r.current = t, t && Gl(t, n);
  }, [t]);
}, Ef = vf, xf = function() {
}, Af = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], wf = function(e, t) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var r = e.onChange, n = r === void 0 ? xf : r;
  e.onHeightChange;
  var o = uo(e, Af);
  o.value;
  var l = M.useRef(null), i = Ef(l, t);
  return M.useRef(0), M.useRef(), M.createElement("textarea", Ce({}, o, { onChange: n, ref: i }));
}, Sf = M.forwardRef(wf), Cf = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, Do = ({ theme: e }) => ({ ...Cf, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), Mn = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, _u = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, Bn = ({ valid: e, theme: t }) => {
  switch (e) {
    case "valid":
      return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
    case void 0:
    case null:
    default:
      return {};
  }
}, kf = Object.assign(k(Ct(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("input", { ...n, ref: o });
}))(Do, Mn, _u, Bn, { minHeight: 32 }), { displayName: "Input" }), _f = Object.assign(k(Ct(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("select", { ...n, ref: o });
}))(Do, Mn, Bn, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Of = Object.assign(k(Ct(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(Sf, { ...n, ref: o });
}))(Do, Mn, _u, Bn, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Tf = k(Ct(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(Cu, { ...n, ref: o });
}))(Mn, Bn, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Ff = Object.assign(Ct(function(e, t) {
  return a.createElement(Tf, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t });
}), { displayName: "Button" }), qe = Object.assign(k.form({ boxSizing: "border-box", width: "100%" }), { Field: ku, Input: kf, Select: _f, Textarea: Of, Button: Ff }), Rf = Zt(() => import("./storybook-890dfef3.es.js").then((e) => ({ default: e.WithTooltip }))), Df = (e) => a.createElement(jr, { fallback: a.createElement("div", null) }, a.createElement(Rf, { ...e })), Lf = Zt(() => import("./storybook-890dfef3.es.js").then((e) => ({ default: e.WithTooltipPure }))), Ou = (e) => a.createElement(jr, { fallback: a.createElement("div", null) }, a.createElement(Lf, { ...e }));
k.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
k.span();
k.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
k.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
k.div({ padding: 15, width: 280, boxSizing: "border-box" });
var Mf = k.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), Bf = ({ note: e, ...t }) => a.createElement(Mf, { ...t }, e), If = k(({ active: e, loading: t, disabled: r, ...n }) => a.createElement("span", { ...n }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: t }) => e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}, ({ loading: e, theme: t }) => e ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow } : {}, ({ disabled: e, theme: t }) => e ? { color: ke(0.7, t.color.defaultText) } : {}), $f = k.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), jf = k.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), Hf = k.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: t }) => e ? { color: t.color.secondary } : {}, ({ theme: e, disabled: t }) => t ? { color: e.textMutedColor } : {}), Yl = k.span(({ active: e, theme: t }) => e ? { "& svg": { opacity: 1 }, "& svg path:not([fill])": { fill: t.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), Nf = k.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), Zf = Pt(100)((e, t, r) => {
  let n = {};
  return e && Object.assign(n, { onClick: e }), t && Object.assign(n, { href: t }), r && t && Object.assign(n, { to: t, as: r }), n;
}), Tu = ({ loading: e, left: t, title: r, center: n, right: o, icon: l, active: i, disabled: u, isIndented: s, href: c, onClick: d, LinkWrapper: g, ...h }) => {
  let p = Zf(d, c, g), m = { active: i, disabled: u }, f = typeof l == "string" && Mr[l];
  return a.createElement(Nf, { ...m, ...h, ...p }, l ? a.createElement(Yl, { ...m }, f ? a.createElement(we, { icon: l }) : l) : t && a.createElement(Yl, { ...m }, t), r || n ? a.createElement(jf, { isIndented: !t && !l && s }, r && a.createElement(If, { ...m, loading: e }, r), n && a.createElement(Hf, { ...m }, n)) : null, o && a.createElement($f, { ...m }, o));
};
Tu.defaultProps = { loading: !1, left: null, title: a.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var Lo = Tu, Pf = k.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), Vf = (e) => {
  let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l } = e, { title: i, href: u, active: s } = l, c = ae((g) => {
    r(g, l);
  }, [r]), d = !!r;
  return a.createElement(Lo, { title: i, active: s, href: u, id: `list-item-${n}`, LinkWrapper: t, isIndented: o, ...l, ...d ? { onClick: c } : {} });
}, Mo = ({ links: e, LinkWrapper: t }) => {
  let r = e.some((n) => n.left || n.icon);
  return a.createElement(Pf, null, e.map(({ isGatsby: n, ...o }) => a.createElement(Vf, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })));
};
Mo.defaultProps = { LinkWrapper: Lo.defaultProps.LinkWrapper };
var Bo = a.forwardRef(({ children: e, ...t }, r) => t.href != null ? a.createElement("a", { ref: r, ...t }, e) : a.createElement("button", { ref: r, type: "button", ...t }, e));
Bo.displayName = "ButtonOrLink";
var Vr = k(Bo, { shouldForwardProp: eo })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: t, theme: r }) => e ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor } : { color: t || r.barTextColor, borderBottomColor: "transparent" });
Vr.displayName = "TabButton";
var jt = k(Bo, { shouldForwardProp: eo })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: t }) => e ? { backgroundColor: t.background.hoverable, color: t.color.secondary } : {}, ({ disabled: e, theme: t }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: ke(0.88, t.color.secondary), color: t.color.secondary }, "&:focus-visible": { outline: Rn }, "&:focus:not(:focus-visible)": { outline: "none" } });
jt.displayName = "IconButton";
var zf = k.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), qf = k.div(() => ({ marginTop: 6, padding: 7, height: 28 })), Fu = () => a.createElement(qf, null, a.createElement(zf, null)), $a = k.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
$a.displayName = "Side";
var Uf = ({ children: e, className: t, scrollable: r }) => r ? a.createElement(Fn, { vertical: !1, className: t }, e) : a.createElement("div", { className: t }, e), Io = k(Uf)(({ theme: e, scrollable: t = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: t ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: t = !1 }) => t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
Io.displayName = "Bar";
var Wf = k.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), In = ({ children: e, backgroundColor: t, ...r }) => {
  let [n, o] = Ht.toArray(e);
  return a.createElement(Io, { ...r }, a.createElement(Wf, { bgColor: t }, a.createElement($a, { scrollable: r.scrollable, left: !0 }, n), o ? a.createElement($a, { right: !0 }, o) : null));
};
In.displayName = "FlexBar";
var Gf = k.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), Kl = (e) => Ht.toArray(e).map(({ props: { title: t, id: r, color: n, children: o } }) => {
  let l = Array.isArray(o) ? o[0] : o;
  return { title: t, id: r, ...n ? { color: n } : {}, render: typeof l == "function" ? l : ({ active: i }) => a.createElement(Gf, { active: i, role: "tabpanel" }, l) };
}), Yf = k.span(({ theme: e, isActive: t }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: t ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), Kf = k(Vr)(({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);
function Jf(e) {
  let t = ce(), r = ce(), n = ce(/* @__PURE__ */ new Map()), { width: o = 1 } = Js({ ref: t }), [l, i] = U(e), [u, s] = U([]), c = ce(e), d = ae(({ menuName: h, actions: p }) => {
    let m = u.some(({ active: y }) => y), [f, E] = U(!1);
    return a.createElement(a.Fragment, null, a.createElement(s2, { interactive: !0, visible: f, onVisibleChange: E, placement: "bottom", delayHide: 100, tooltip: a.createElement(Mo, { links: u.map(({ title: y, id: x, color: b, active: v }) => ({ id: x, title: y, color: b, active: v, onClick: (A) => {
      A.preventDefault(), p.onSelect(x);
    } })) }) }, a.createElement(Kf, { ref: r, active: m, preActive: f, style: { visibility: u.length ? "visible" : "hidden" }, "aria-hidden": !u.length, className: "tabbutton", type: "button", role: "tab" }, h, a.createElement(Yf, { className: "addon-collapsible-icon", isActive: m || f }))), u.map(({ title: y, id: x, color: b }, v) => {
      let A = `index-${v}`;
      return a.createElement(Vr, { id: `tabbutton-${rs(x) ?? A}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (w) => {
        n.current.set(x, w);
      }, className: "tabbutton", type: "button", key: x, textColor: b, role: "tab" }, y);
    }));
  }, [u]), g = ae(() => {
    if (!t.current || !r.current)
      return;
    let { x: h, width: p } = t.current.getBoundingClientRect(), { width: m } = r.current.getBoundingClientRect(), f = u.length ? h + p - m : h + p, E = [], y = 0, x = e.filter((b) => {
      let { id: v } = b, A = n.current.get(v), { width: w = 0 } = (A == null ? void 0 : A.getBoundingClientRect()) || {}, C = h + y + w > f;
      return (!C || !A) && E.push(b), y += w, C;
    });
    (E.length !== l.length || c.current !== e) && (i(E), s(x), c.current = e);
  }, [u.length, e, l]);
  return zi(g, [g, o]), { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: u, AddonTab: d };
}
var Xf = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Qf = k.div(({ theme: e, bordered: t }) => t ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), $o = k.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
$o.displayName = "TabBar";
var em = k.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: t }) => e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: t }) => e ? { height: `calc(100% - ${t ? 42 : 40}px)`, position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 40 + (t ? 1 : 0), overflow: "auto", [`& > *:first-child${Xf}`]: { position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 0 + (t ? 1 : 0), height: `calc(100% - ${t ? 2 : 0}px)`, overflow: "auto" } } : {}), $n = qi(({ children: e, selected: t, actions: r, absolute: n, bordered: o, tools: l, backgroundColor: i, id: u, menuName: s }) => {
  let c = Kl(e).map((f) => f.id), d = vn(() => Kl(e).map((f, E) => ({ ...f, active: t ? f.id === t : E === 0 })), [t, ...c]), { visibleList: g, tabBarRef: h, tabRefs: p, AddonTab: m } = Jf(d);
  return d.length ? a.createElement(Qf, { absolute: n, bordered: o, id: u }, a.createElement(In, { scrollable: !1, border: !0, backgroundColor: i }, a.createElement($o, { style: { whiteSpace: "normal" }, ref: h, role: "tablist" }, g.map(({ title: f, id: E, active: y, color: x }, b) => {
    let v = `index-${b}`;
    return a.createElement(Vr, { id: `tabbutton-${rs(E) ?? v}`, ref: (A) => {
      p.current.set(E, A);
    }, className: `tabbutton ${y ? "tabbutton-active" : ""}`, type: "button", key: E, active: y, textColor: x, onClick: (A) => {
      A.preventDefault(), r.onSelect(E);
    }, role: "tab" }, typeof f == "function" ? a.createElement("title", null) : f);
  }), a.createElement(m, { menuName: s, actions: r })), l), a.createElement(em, { id: "panel-tab-content", bordered: o, absolute: n }, d.map(({ id: f, active: E, render: y }) => a.createElement(y, { key: f, active: E }, null)))) : a.createElement(xu, null, a.createElement(At, { key: "title" }, "Nothing found"));
});
$n.displayName = "Tabs";
$n.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var Ru = class extends ct {
  constructor(e) {
    super(e), this.handlers = { onSelect: (t) => this.setState({ selected: t }) }, this.state = { selected: e.initial };
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: o } = this.props, { selected: l } = this.state;
    return a.createElement($n, { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: o, actions: this.handlers }, r);
  }
};
Ru.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var Du = k.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
Du.displayName = "Separator";
var tm = cr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, rm = k.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${tm} 0.7s linear infinite`, mixBlendMode: "difference" })), Jl = k.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), nm = k.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: ke(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), am = k.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), Xl = k.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), om = k(we)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), lm = cr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, im = k.span({ "&::after": { content: "'...'", animation: `${lm} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), Lu = ({ progress: e, error: t, size: r, ...n }) => {
  if (t)
    return a.createElement(Jl, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, a.createElement(om, { icon: "lightningoff" }), a.createElement(Xl, null, t.message));
  if (e) {
    let { value: o, modules: l } = e, { message: i } = e;
    return l && (i += ` ${l.complete} / ${l.total} modules`), a.createElement(Jl, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": o * 100, "aria-valuetext": i, role: "progressbar", ...n }, a.createElement(nm, null, a.createElement(am, { style: { width: `${o * 100}%` } })), a.createElement(Xl, null, i, o < 1 && a.createElement(im, { key: i })));
  }
  return a.createElement(rm, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: r, ...n });
};
function sm(e) {
  let t = {}, r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var Mu = (e, t, r = {}) => {
  let [n, o] = e.split("?"), l = o ? { ...sm(o), ...r, id: t } : { ...r, id: t };
  return `${n}?${Object.entries(l).map((i) => `${i[0]}=${i[1]}`).join("&")}`;
};
k.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${K.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${Kt.fonts.mono};
  font-size: ${Kt.size.s2 - 1}px;
`;
var Bu = vu;
Object.keys(vu).forEach((e) => {
  Ct((t, r) => Kc(e, { ...t, ref: r }));
});
const um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: tu,
  ActionBar: ho,
  Bar: Io,
  Blockquote: ru,
  Button: Cu,
  Code: Oo,
  DL: au,
  Div: nu,
  ErrorFormatter: wu,
  FlexBar: In,
  Form: qe,
  H1: ou,
  H2: To,
  H3: Fo,
  H4: lu,
  H5: iu,
  H6: su,
  HR: uu,
  IconButton: jt,
  IconButtonSkeleton: Fu,
  Icons: we,
  Img: cu,
  LI: du,
  Link: It,
  ListItem: Lo,
  Loader: Lu,
  OL: pu,
  P: fu,
  Placeholder: xu,
  Pre: mu,
  ResetWrapper: Ro,
  ScrollArea: Fn,
  Separator: Du,
  Span: gu,
  SyntaxHighlighter: Ln,
  TT: bu,
  TabBar: $o,
  TabButton: Vr,
  Table: hu,
  Tabs: $n,
  TabsState: Ru,
  TooltipLinkList: Mo,
  TooltipNote: Bf,
  UL: yu,
  WithTooltip: Df,
  WithTooltipPure: Ou,
  Zoom: Au,
  codeCommon: bt,
  components: Bu,
  createCopyToClipboardFunction: $s,
  getStoryHref: Mu,
  icons: Mr,
  nameSpaceClassNames: ee,
  withReset: re
}, Symbol.toStringTag, { value: "Module" }));
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ir.apply(this, arguments);
}
function cm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Br(e, t) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Br(e, t);
}
function dm(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Br(e, t);
}
function ja(e) {
  return ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ja(e);
}
function pm(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function fm() {
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
function un(e, t, r) {
  return fm() ? un = Reflect.construct.bind() : un = function(o, l, i) {
    var u = [null];
    u.push.apply(u, l);
    var s = Function.bind.apply(o, u), c = new s();
    return i && Br(c, i.prototype), c;
  }, un.apply(null, arguments);
}
function Ha(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ha = function(n) {
    if (n === null || !pm(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return un(n, arguments, ja(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Br(o, n);
  }, Ha(e);
}
var mm = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function gm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var lt = /* @__PURE__ */ function(e) {
  dm(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, gm.apply(void 0, [mm[r]].concat(l))) || this;
    }
    return cm(n);
  }
  return t;
}(/* @__PURE__ */ Ha(Error));
function ia(e) {
  return Math.round(e * 255);
}
function hm(e, t, r) {
  return ia(e) + "," + ia(t) + "," + ia(r);
}
function Ir(e, t, r, n) {
  if (n === void 0 && (n = hm), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), u = 0, s = 0, c = 0;
  o >= 0 && o < 1 ? (u = l, s = i) : o >= 1 && o < 2 ? (u = i, s = l) : o >= 2 && o < 3 ? (s = l, c = i) : o >= 3 && o < 4 ? (s = i, c = l) : o >= 4 && o < 5 ? (u = i, c = l) : o >= 5 && o < 6 && (u = l, c = i);
  var d = r - l / 2, g = u + d, h = s + d, p = c + d;
  return n(g, h, p);
}
var Ql = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function bm(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ql[t] ? "#" + Ql[t] : e;
}
var ym = /^#[a-fA-F0-9]{6}$/, vm = /^#[a-fA-F0-9]{8}$/, Em = /^#[a-fA-F0-9]{3}$/, xm = /^#[a-fA-F0-9]{4}$/, sa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Am = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, wm = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Sm = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function jn(e) {
  if (typeof e != "string")
    throw new lt(3);
  var t = bm(e);
  if (t.match(ym))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(vm)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(Em))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(xm)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var o = sa.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var l = Am.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var i = wm.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Ir(u, s, c) + ")", g = sa.exec(d);
    if (!g)
      throw new lt(4, t, d);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10)
    };
  }
  var h = Sm.exec(t.substring(0, 50));
  if (h) {
    var p = parseInt("" + h[1], 10), m = parseInt("" + h[2], 10) / 100, f = parseInt("" + h[3], 10) / 100, E = "rgb(" + Ir(p, m, f) + ")", y = sa.exec(E);
    if (!y)
      throw new lt(4, t, E);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new lt(5);
}
function Cm(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), l = Math.min(t, r, n), i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: i,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: i
    };
  var u, s = o - l, c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: c,
    lightness: i,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: c,
    lightness: i
  };
}
function Iu(e) {
  return Cm(jn(e));
}
var km = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Na = km;
function Dt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ua(e) {
  return Dt(Math.round(e * 255));
}
function _m(e, t, r) {
  return Na("#" + ua(e) + ua(t) + ua(r));
}
function bn(e, t, r) {
  return Ir(e, t, r, _m);
}
function Om(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return bn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return bn(e.hue, e.saturation, e.lightness);
  throw new lt(1);
}
function Tm(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? bn(e, t, r) : "rgba(" + Ir(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? bn(e.hue, e.saturation, e.lightness) : "rgba(" + Ir(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new lt(2);
}
function Za(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Na("#" + Dt(e) + Dt(t) + Dt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Na("#" + Dt(e.red) + Dt(e.green) + Dt(e.blue));
  throw new lt(6);
}
function gt(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = jn(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Za(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Za(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new lt(7);
}
var Fm = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Rm = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, Dm = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Lm = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function $u(e) {
  if (typeof e != "object")
    throw new lt(8);
  if (Rm(e))
    return gt(e);
  if (Fm(e))
    return Za(e);
  if (Lm(e))
    return Tm(e);
  if (Dm(e))
    return Om(e);
  throw new lt(8);
}
function ju(e, t, r) {
  return function() {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e.apply(this, o) : ju(e, t, o);
  };
}
function Hn(e) {
  return ju(e, e.length, []);
}
function Nn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Mm(e, t) {
  if (t === "transparent")
    return t;
  var r = Iu(t);
  return $u(ir({}, r, {
    lightness: Nn(0, 1, r.lightness - parseFloat(e))
  }));
}
var Bm = /* @__PURE__ */ Hn(Mm), tt = Bm;
function Im(e, t) {
  if (t === "transparent")
    return t;
  var r = Iu(t);
  return $u(ir({}, r, {
    lightness: Nn(0, 1, r.lightness + parseFloat(e))
  }));
}
var $m = /* @__PURE__ */ Hn(Im), Lt = $m;
function jm(e, t) {
  if (t === "transparent")
    return t;
  var r = jn(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = ir({}, r, {
    alpha: Nn(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return gt(o);
}
var Hm = /* @__PURE__ */ Hn(jm), Jr = Hm;
function Nm(e, t) {
  if (t === "transparent")
    return t;
  var r = jn(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = ir({}, r, {
    alpha: Nn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return gt(o);
}
var Zm = /* @__PURE__ */ Hn(Nm), te = Zm, Pm = Ui, Vm = Qc, zm = Object.prototype, qm = zm.hasOwnProperty;
function Um(e, t, r) {
  var n = e[t];
  (!(qm.call(e, t) && Vm(n, r)) || r === void 0 && !(t in e)) && Pm(e, t, r);
}
var jo = Um, Wm = jo, Gm = Wi, Ym = e0, ei = An, Km = t0;
function Jm(e, t, r, n) {
  if (!ei(e))
    return e;
  t = Gm(t, e);
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = Km(t[o]), c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var d = u[s];
      c = n ? n(d, s, u) : void 0, c === void 0 && (c = ei(d) ? d : Ym(t[o + 1]) ? [] : {});
    }
    Wm(u, s, c), u = u[s];
  }
  return e;
}
var Xm = Jm, Qm = r0, eg = Xm, tg = Wi;
function rg(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n], u = Qm(e, i);
    r(u, i) && eg(l, tg(i, e), u);
  }
  return l;
}
var ng = rg, ag = n0, og = Gi, lg = Yi, ig = a0, sg = Object.getOwnPropertySymbols, ug = sg ? function(e) {
  for (var t = []; e; )
    ag(t, lg(e)), e = og(e);
  return t;
} : ig, Hu = ug;
function cg(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var dg = cg, pg = An, fg = Ki, mg = dg, gg = Object.prototype, hg = gg.hasOwnProperty;
function bg(e) {
  if (!pg(e))
    return mg(e);
  var t = fg(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !hg.call(e, n)) || r.push(n);
  return r;
}
var yg = bg, vg = o0, Eg = yg, xg = l0;
function Ag(e) {
  return xg(e) ? vg(e, !0) : Eg(e);
}
var Ho = Ag, wg = i0, Sg = Hu, Cg = Ho;
function kg(e) {
  return wg(e, Cg, Sg);
}
var Nu = kg, _g = s0, Og = u0, Tg = ng, Fg = Nu;
function Rg(e, t) {
  if (e == null)
    return {};
  var r = _g(Fg(e), function(n) {
    return [n];
  });
  return t = Og(t), Tg(e, r, function(n, o) {
    return t(n, o[0]);
  });
}
var Dg = Rg;
const Lg = /* @__PURE__ */ xn(Dg);
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mt.apply(this, arguments);
}
const Mg = ["children", "options"], ti = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), ri = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Bg = ["style", "script"], Ig = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, $g = /mailto:/i, jg = /\n{2,}$/, Zu = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, Hg = /^ *> ?/gm, Ng = /^ {2,}\n/, Zg = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Pu = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, Vu = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Pg = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Vg = /^(?:\n *)*\n/, zg = /\r\n?/g, qg = /^\[\^([^\]]+)](:.*)\n/, Ug = /^\[\^([^\]]+)]/, Wg = /\f/g, Gg = /^\s*?\[(x|\s)\]/, zu = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, qu = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Uu = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Pa = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, Yg = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Wu = /^<!--[\s\S]*?(?:-->)/, Kg = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Va = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Jg = /^\{.*\}$/, Xg = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Qg = /^<([^ >]+@[^ >]+)>/, eh = /^<([^ >]+:\/[^ >]+)>/, th = /-([a-z])?/gi, Gu = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, rh = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, nh = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ah = /^\[([^\]]*)\] ?\[([^\]]*)\]/, oh = /(\[|\])/g, lh = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, ih = /\t/g, sh = /^ *\| */, uh = /(^ *\||\| *$)/g, ch = / *$/, dh = /^ *:-+: *$/, ph = /^ *:-+ *$/, fh = /^ *-+: *$/, mh = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, gh = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, hh = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, bh = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, yh = /^\\([^0-9A-Za-z\s])/, vh = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, Eh = /^\n+/, xh = /^([ \t]*)/, Ah = /\\([^\\])/g, ni = / *\n+$/, wh = /(?:^|\n)( *)$/, No = "(?:\\d+\\.)", Zo = "(?:[*+-])";
function Yu(e) {
  return "( *)(" + (e === 1 ? No : Zo) + ") +";
}
const Ku = Yu(1), Ju = Yu(2);
function Xu(e) {
  return new RegExp("^" + (e === 1 ? Ku : Ju));
}
const Sh = Xu(1), Ch = Xu(2);
function Qu(e) {
  return new RegExp("^" + (e === 1 ? Ku : Ju) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? No : Zo) + " )[^\\n]*)*(\\n|$)", "gm");
}
const ec = Qu(1), tc = Qu(2);
function rc(e) {
  const t = e === 1 ? No : Zo;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const nc = rc(1), ac = rc(2);
function ai(e, t) {
  const r = t === 1, n = r ? nc : ac, o = r ? ec : tc, l = r ? Sh : Ch;
  return { t(i, u, s) {
    const c = wh.exec(s);
    return c && (u.o || !u._ && !u.u) ? n.exec(i = c[1] + i) : null;
  }, i: z.HIGH, l(i, u, s) {
    const c = r ? +i[2] : void 0, d = i[0].replace(jg, `
`).match(o);
    let g = !1;
    return { p: d.map(function(h, p) {
      const m = l.exec(h)[0].length, f = new RegExp("^ {1," + m + "}", "gm"), E = h.replace(f, "").replace(l, ""), y = p === d.length - 1, x = E.indexOf(`

`) !== -1 || y && g;
      g = x;
      const b = s._, v = s.o;
      let A;
      s.o = !0, x ? (s._ = !1, A = E.replace(ni, `

`)) : (s._ = !0, A = E.replace(ni, ""));
      const w = u(A, s);
      return s._ = b, s.o = v, w;
    }), m: r, g: c };
  }, h: (i, u, s) => e(i.m ? "ol" : "ul", { key: s.k, start: i.g }, i.p.map(function(c, d) {
    return e("li", { key: d }, u(c, s));
  })) };
}
const kh = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, _h = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, oc = [Zu, Pu, Vu, zu, Uu, qu, Wu, Gu, ec, nc, tc, ac], Oh = [...oc, /^[^\n]+(?:  \n|\n{2,})/, Pa, Va];
function Th(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Fh(e) {
  return fh.test(e) ? "right" : dh.test(e) ? "center" : ph.test(e) ? "left" : null;
}
function oi(e, t, r) {
  const n = r.$;
  r.$ = !0;
  const o = t(e.trim(), r);
  r.$ = n;
  let l = [[]];
  return o.forEach(function(i, u) {
    i.type === "tableSeparator" ? u !== 0 && u !== o.length - 1 && l.push([]) : (i.type !== "text" || o[u + 1] != null && o[u + 1].type !== "tableSeparator" || (i.v = i.v.replace(ch, "")), l[l.length - 1].push(i));
  }), l;
}
function Rh(e, t, r) {
  r._ = !0;
  const n = oi(e[1], t, r), o = e[2].replace(uh, "").split("|").map(Fh), l = function(i, u, s) {
    return i.trim().split(`
`).map(function(c) {
      return oi(c, u, s);
    });
  }(e[3], t, r);
  return r._ = !1, { S: o, A: l, L: n, type: "table" };
}
function li(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function vt(e) {
  return function(t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function Et(e) {
  return function(t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function ft(e) {
  return function(t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function xr(e) {
  return function(t) {
    return e.exec(t);
  };
}
function Dh(e, t, r) {
  if (t._ || t.u || r && !r.endsWith(`
`))
    return null;
  let n = "";
  e.split(`
`).every((l) => !oc.some((i) => i.test(l)) && (n += l + `
`, l.trim()));
  const o = n.trimEnd();
  return o == "" ? null : [n, o];
}
function Gt(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return;
  } catch {
    return null;
  }
  return e;
}
function ii(e) {
  return e.replace(Ah, "$1");
}
function cn(e, t, r) {
  const n = r._ || !1, o = r.u || !1;
  r._ = !0, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = o, l;
}
function Lh(e, t, r) {
  const n = r._ || !1, o = r.u || !1;
  r._ = !1, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = o, l;
}
function Mh(e, t, r) {
  return r._ = !1, e(t, r);
}
const ca = (e, t, r) => ({ v: cn(t, e[1], r) });
function da() {
  return {};
}
function pa() {
  return null;
}
function Bh(...e) {
  return e.filter(Boolean).join(" ");
}
function fa(e, t, r) {
  let n = e;
  const o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); )
    o.shift();
  return n || r;
}
var z;
function Ih(e, t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || Th, t.namedCodesToUnicode = t.namedCodesToUnicode ? Mt({}, ri, t.namedCodesToUnicode) : ri;
  const r = t.createElement || M.createElement;
  function n(p, m, ...f) {
    const E = fa(t.overrides, `${p}.props`, {});
    return r(function(y, x) {
      const b = fa(x, y);
      return b ? typeof b == "function" || typeof b == "object" && "render" in b ? b : fa(x, `${y}.component`, y) : y;
    }(p, t.overrides), Mt({}, m, E, { className: Bh(m == null ? void 0 : m.className, E.className) || void 0 }), ...f);
  }
  function o(p) {
    let m = !1;
    t.forceInline ? m = !0 : t.forceBlock || (m = lh.test(p) === !1);
    const f = d(c(m ? p : `${p.trimEnd().replace(Eh, "")}

`, { _: m }));
    for (; typeof f[f.length - 1] == "string" && !f[f.length - 1].trim(); )
      f.pop();
    if (t.wrapper === null)
      return f;
    const E = t.wrapper || (m ? "span" : "div");
    let y;
    if (f.length > 1 || t.forceWrapper)
      y = f;
    else {
      if (f.length === 1)
        return y = f[0], typeof y == "string" ? n("span", { key: "outer" }, y) : y;
      y = null;
    }
    return M.createElement(E, { key: "outer" }, y);
  }
  function l(p) {
    const m = p.match(Ig);
    return m ? m.reduce(function(f, E, y) {
      const x = E.indexOf("=");
      if (x !== -1) {
        const b = function(C) {
          return C.indexOf("-") !== -1 && C.match(Kg) === null && (C = C.replace(th, function(S, _) {
            return _.toUpperCase();
          })), C;
        }(E.slice(0, x)).trim(), v = function(C) {
          const S = C[0];
          return (S === '"' || S === "'") && C.length >= 2 && C[C.length - 1] === S ? C.slice(1, -1) : C;
        }(E.slice(x + 1).trim()), A = ti[b] || b, w = f[A] = function(C, S) {
          return C === "style" ? S.split(/;\s?/).reduce(function(_, O) {
            const T = O.slice(0, O.indexOf(":"));
            return _[T.replace(/(-[a-z])/g, (R) => R[1].toUpperCase())] = O.slice(T.length + 1).trim(), _;
          }, {}) : C === "href" ? Gt(S) : (S.match(Jg) && (S = S.slice(1, S.length - 1)), S === "true" || S !== "false" && S);
        }(b, v);
        typeof w == "string" && (Pa.test(w) || Va.test(w)) && (f[A] = M.cloneElement(o(w.trim()), { key: y }));
      } else
        E !== "style" && (f[ti[E] || E] = !0);
      return f;
    }, {}) : null;
  }
  const i = [], u = {}, s = { blockQuote: { t: ft(Zu), i: z.HIGH, l: (p, m, f) => ({ v: m(p[0].replace(Hg, ""), f) }), h: (p, m, f) => n("blockquote", { key: f.k }, m(p.v, f)) }, breakLine: { t: xr(Ng), i: z.HIGH, l: da, h: (p, m, f) => n("br", { key: f.k }) }, breakThematic: { t: ft(Zg), i: z.HIGH, l: da, h: (p, m, f) => n("hr", { key: f.k }) }, codeBlock: { t: ft(Vu), i: z.MAX, l: (p) => ({ v: p[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (p, m, f) => n("pre", { key: f.k }, n("code", Mt({}, p.O, { className: p.M ? `lang-${p.M}` : "" }), p.v)) }, codeFenced: { t: ft(Pu), i: z.MAX, l: (p) => ({ O: l(p[3] || ""), v: p[4], M: p[2] || void 0, type: "codeBlock" }) }, codeInline: { t: Et(Pg), i: z.LOW, l: (p) => ({ v: p[2] }), h: (p, m, f) => n("code", { key: f.k }, p.v) }, footnote: { t: ft(qg), i: z.MAX, l: (p) => (i.push({ I: p[2], j: p[1] }), {}), h: pa }, footnoteReference: { t: vt(Ug), i: z.HIGH, l: (p) => ({ v: p[1], B: `#${t.slugify(p[1])}` }), h: (p, m, f) => n("a", { key: f.k, href: Gt(p.B) }, n("sup", { key: f.k }, p.v)) }, gfmTask: { t: vt(Gg), i: z.HIGH, l: (p) => ({ R: p[1].toLowerCase() === "x" }), h: (p, m, f) => n("input", { checked: p.R, key: f.k, readOnly: !0, type: "checkbox" }) }, heading: { t: ft(t.enforceAtxHeadings ? qu : zu), i: z.HIGH, l: (p, m, f) => ({ v: cn(m, p[2], f), T: t.slugify(p[2]), C: p[1].length }), h: (p, m, f) => n(`h${p.C}`, { id: p.T, key: f.k }, m(p.v, f)) }, headingSetext: { t: ft(Uu), i: z.MAX, l: (p, m, f) => ({ v: cn(m, p[1], f), C: p[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { t: xr(Wu), i: z.HIGH, l: () => ({}), h: pa }, image: { t: Et(_h), i: z.HIGH, l: (p) => ({ D: p[1], B: ii(p[2]), F: p[3] }), h: (p, m, f) => n("img", { key: f.k, alt: p.D || void 0, title: p.F || void 0, src: Gt(p.B) }) }, link: { t: vt(kh), i: z.LOW, l: (p, m, f) => ({ v: Lh(m, p[1], f), B: ii(p[2]), F: p[3] }), h: (p, m, f) => n("a", { key: f.k, href: Gt(p.B), title: p.F }, m(p.v, f)) }, linkAngleBraceStyleDetector: { t: vt(eh), i: z.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], type: "link" }) }, linkBareUrlDetector: { t: (p, m) => m.N ? null : vt(Xg)(p, m), i: z.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], F: void 0, type: "link" }) }, linkMailtoDetector: { t: vt(Qg), i: z.MAX, l(p) {
    let m = p[1], f = p[1];
    return $g.test(f) || (f = "mailto:" + f), { v: [{ v: m.replace("mailto:", ""), type: "text" }], B: f, type: "link" };
  } }, orderedList: ai(n, 1), unorderedList: ai(n, 2), newlineCoalescer: { t: ft(Vg), i: z.LOW, l: da, h: () => `
` }, paragraph: { t: Dh, i: z.LOW, l: ca, h: (p, m, f) => n("p", { key: f.k }, m(p.v, f)) }, ref: { t: vt(rh), i: z.MAX, l: (p) => (u[p[1]] = { B: p[2], F: p[4] }, {}), h: pa }, refImage: { t: Et(nh), i: z.MAX, l: (p) => ({ D: p[1] || void 0, P: p[2] }), h: (p, m, f) => n("img", { key: f.k, alt: p.D, src: Gt(u[p.P].B), title: u[p.P].F }) }, refLink: { t: vt(ah), i: z.MAX, l: (p, m, f) => ({ v: m(p[1], f), Z: m(p[0].replace(oh, "\\$1"), f), P: p[2] }), h: (p, m, f) => u[p.P] ? n("a", { key: f.k, href: Gt(u[p.P].B), title: u[p.P].F }, m(p.v, f)) : n("span", { key: f.k }, m(p.Z, f)) }, table: { t: ft(Gu), i: z.HIGH, l: Rh, h: (p, m, f) => n("table", { key: f.k }, n("thead", null, n("tr", null, p.L.map(function(E, y) {
    return n("th", { key: y, style: li(p, y) }, m(E, f));
  }))), n("tbody", null, p.A.map(function(E, y) {
    return n("tr", { key: y }, E.map(function(x, b) {
      return n("td", { key: b, style: li(p, b) }, m(x, f));
    }));
  }))) }, tableSeparator: { t: function(p, m) {
    return m.$ ? (m._ = !0, sh.exec(p)) : null;
  }, i: z.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: xr(vh), i: z.MIN, l: (p) => ({ v: p[0].replace(Yg, (m, f) => t.namedCodesToUnicode[f] ? t.namedCodesToUnicode[f] : m) }), h: (p) => p.v }, textBolded: { t: Et(mh), i: z.MED, l: (p, m, f) => ({ v: m(p[2], f) }), h: (p, m, f) => n("strong", { key: f.k }, m(p.v, f)) }, textEmphasized: { t: Et(gh), i: z.LOW, l: (p, m, f) => ({ v: m(p[2], f) }), h: (p, m, f) => n("em", { key: f.k }, m(p.v, f)) }, textEscaped: { t: Et(yh), i: z.HIGH, l: (p) => ({ v: p[1], type: "text" }) }, textMarked: { t: Et(hh), i: z.LOW, l: ca, h: (p, m, f) => n("mark", { key: f.k }, m(p.v, f)) }, textStrikethroughed: { t: Et(bh), i: z.LOW, l: ca, h: (p, m, f) => n("del", { key: f.k }, m(p.v, f)) } };
  t.disableParsingRawHTML !== !0 && (s.htmlBlock = { t: xr(Pa), i: z.HIGH, l(p, m, f) {
    const [, E] = p[3].match(xh), y = new RegExp(`^${E}`, "gm"), x = p[3].replace(y, ""), b = (v = x, Oh.some((S) => S.test(v)) ? Mh : cn);
    var v;
    const A = p[1].toLowerCase(), w = Bg.indexOf(A) !== -1;
    f.N = f.N || A === "a";
    const C = w ? p[3] : b(m, x, f);
    return f.N = !1, { O: l(p[2]), v: C, G: w, H: w ? A : p[1] };
  }, h: (p, m, f) => n(p.H, Mt({ key: f.k }, p.O), p.G ? p.v : m(p.v, f)) }, s.htmlSelfClosing = { t: xr(Va), i: z.HIGH, l: (p) => ({ O: l(p[2] || ""), H: p[1] }), h: (p, m, f) => n(p.H, Mt({}, p.O, { key: f.k })) });
  const c = function(p) {
    let m = Object.keys(p);
    function f(E, y) {
      let x = [], b = "";
      for (; E; ) {
        let v = 0;
        for (; v < m.length; ) {
          const A = m[v], w = p[A], C = w.t(E, y, b);
          if (C) {
            const S = C[0];
            E = E.substring(S.length);
            const _ = w.l(C, f, y);
            _.type == null && (_.type = A), x.push(_), b = S;
            break;
          }
          v++;
        }
      }
      return x;
    }
    return m.sort(function(E, y) {
      let x = p[E].i, b = p[y].i;
      return x !== b ? x - b : E < y ? -1 : 1;
    }), function(E, y) {
      return f(function(x) {
        return x.replace(zg, `
`).replace(Wg, "").replace(ih, "    ");
      }(E), y);
    };
  }(s), d = (g = function(p) {
    return function(m, f, E) {
      return p[m.type].h(m, f, E);
    };
  }(s), function p(m, f = {}) {
    if (Array.isArray(m)) {
      const E = f.k, y = [];
      let x = !1;
      for (let b = 0; b < m.length; b++) {
        f.k = b;
        const v = p(m[b], f), A = typeof v == "string";
        A && x ? y[y.length - 1] += v : v !== null && y.push(v), x = A;
      }
      return f.k = E, y;
    }
    return g(m, p, f);
  });
  var g;
  const h = o(e);
  return i.length ? n("div", null, h, n("footer", { key: "footer" }, i.map(function(p) {
    return n("div", { id: t.slugify(p.j), key: p.j }, p.j, d(c(p.I, { _: !0 })));
  }))) : h;
}
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(z || (z = {}));
const lc = (e) => {
  let { children: t, options: r } = e, n = function(o, l) {
    if (o == null)
      return {};
    var i, u, s = {}, c = Object.keys(o);
    for (u = 0; u < c.length; u++)
      l.indexOf(i = c[u]) >= 0 || (s[i] = o[i]);
    return s;
  }(e, Mg);
  return M.cloneElement(Ih(t, r), n);
};
function $h(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var jh = $h;
function Hh(e) {
  return e !== e;
}
var Nh = Hh;
function Zh(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; )
    if (e[n] === t)
      return n;
  return -1;
}
var Ph = Zh, Vh = jh, zh = Nh, qh = Ph;
function Uh(e, t, r) {
  return t === t ? qh(e, t, r) : Vh(e, zh, r);
}
var Wh = Uh, Gh = Wh;
function Yh(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Gh(e, t, 0) > -1;
}
var Kh = Yh;
function Jh(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var Xh = Jh;
function Qh() {
}
var eb = Qh, ma = c0, tb = eb, rb = Ji, nb = 1 / 0, ab = ma && 1 / rb(new ma([, -0]))[1] == nb ? function(e) {
  return new ma(e);
} : tb, ob = ab, lb = d0, ib = Kh, sb = Xh, ub = p0, cb = ob, db = Ji, pb = 200;
function fb(e, t, r) {
  var n = -1, o = ib, l = e.length, i = !0, u = [], s = u;
  if (r)
    i = !1, o = sb;
  else if (l >= pb) {
    var c = t ? null : cb(e);
    if (c)
      return db(c);
    i = !1, o = ub, s = new lb();
  } else
    s = t ? [] : u;
  e:
    for (; ++n < l; ) {
      var d = e[n], g = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, i && g === g) {
        for (var h = s.length; h--; )
          if (s[h] === g)
            continue e;
        t && s.push(g), u.push(d);
      } else
        o(s, g, r) || (s !== u && s.push(g), u.push(d));
    }
  return u;
}
var mb = fb, gb = mb;
function hb(e) {
  return e && e.length ? gb(e) : [];
}
var bb = hb;
const yb = /* @__PURE__ */ xn(bb);
function vb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Eb = vb, xb = jo, Ab = Ui;
function wb(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l], s = n ? n(r[u], e[u], u, r, e) : void 0;
    s === void 0 && (s = e[u]), o ? Ab(r, u, s) : xb(r, u, s);
  }
  return r;
}
var Zn = wb, Sb = Zn, Cb = Xi;
function kb(e, t) {
  return e && Sb(t, Cb(t), e);
}
var _b = kb, Ob = Zn, Tb = Ho;
function Fb(e, t) {
  return e && Ob(t, Tb(t), e);
}
var Rb = Fb, yn = { exports: {} };
yn.exports;
(function(e, t) {
  var r = f0, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, l = o && o.exports === n, i = l ? r.Buffer : void 0, u = i ? i.allocUnsafe : void 0;
  function s(c, d) {
    if (d)
      return c.slice();
    var g = c.length, h = u ? u(g) : new c.constructor(g);
    return c.copy(h), h;
  }
  e.exports = s;
})(yn, yn.exports);
var Db = yn.exports;
function Lb(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Mb = Lb, Bb = Zn, Ib = Yi;
function $b(e, t) {
  return Bb(e, Ib(e), t);
}
var jb = $b, Hb = Zn, Nb = Hu;
function Zb(e, t) {
  return Hb(e, Nb(e), t);
}
var Pb = Zb, Vb = Object.prototype, zb = Vb.hasOwnProperty;
function qb(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && zb.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Ub = qb, si = m0;
function Wb(e) {
  var t = new e.constructor(e.byteLength);
  return new si(t).set(new si(e)), t;
}
var Po = Wb, Gb = Po;
function Yb(e, t) {
  var r = t ? Gb(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Kb = Yb, Jb = /\w*$/;
function Xb(e) {
  var t = new e.constructor(e.source, Jb.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Qb = Xb, ui = g0, ci = ui ? ui.prototype : void 0, di = ci ? ci.valueOf : void 0;
function ey(e) {
  return di ? Object(di.call(e)) : {};
}
var ty = ey, ry = Po;
function ny(e, t) {
  var r = t ? ry(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var ay = ny, oy = Po, ly = Kb, iy = Qb, sy = ty, uy = ay, cy = "[object Boolean]", dy = "[object Date]", py = "[object Map]", fy = "[object Number]", my = "[object RegExp]", gy = "[object Set]", hy = "[object String]", by = "[object Symbol]", yy = "[object ArrayBuffer]", vy = "[object DataView]", Ey = "[object Float32Array]", xy = "[object Float64Array]", Ay = "[object Int8Array]", wy = "[object Int16Array]", Sy = "[object Int32Array]", Cy = "[object Uint8Array]", ky = "[object Uint8ClampedArray]", _y = "[object Uint16Array]", Oy = "[object Uint32Array]";
function Ty(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case yy:
      return oy(e);
    case cy:
    case dy:
      return new n(+e);
    case vy:
      return ly(e, r);
    case Ey:
    case xy:
    case Ay:
    case wy:
    case Sy:
    case Cy:
    case ky:
    case _y:
    case Oy:
      return uy(e, r);
    case py:
      return new n();
    case fy:
    case hy:
      return new n(e);
    case my:
      return iy(e);
    case gy:
      return new n();
    case by:
      return sy(e);
  }
}
var Fy = Ty, Ry = An, pi = Object.create, Dy = function() {
  function e() {
  }
  return function(t) {
    if (!Ry(t))
      return {};
    if (pi)
      return pi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Ly = Dy, My = Ly, By = Gi, Iy = Ki;
function $y(e) {
  return typeof e.constructor == "function" && !Iy(e) ? My(By(e)) : {};
}
var jy = $y, Hy = Xa, Ny = Qi, Zy = "[object Map]";
function Py(e) {
  return Ny(e) && Hy(e) == Zy;
}
var Vy = Py, zy = Vy, qy = ts, fi = es, mi = fi && fi.isMap, Uy = mi ? qy(mi) : zy, Wy = Uy, Gy = Xa, Yy = Qi, Ky = "[object Set]";
function Jy(e) {
  return Yy(e) && Gy(e) == Ky;
}
var Xy = Jy, Qy = Xy, e3 = ts, gi = es, hi = gi && gi.isSet, t3 = hi ? e3(hi) : Qy, r3 = t3, n3 = h0, a3 = Eb, o3 = jo, l3 = _b, i3 = Rb, s3 = Db, u3 = Mb, c3 = jb, d3 = Pb, p3 = y0, f3 = Nu, m3 = Xa, g3 = Ub, h3 = Fy, b3 = jy, y3 = v0, v3 = b0, E3 = Wy, x3 = An, A3 = r3, w3 = Xi, S3 = Ho, C3 = 1, k3 = 2, _3 = 4, ic = "[object Arguments]", O3 = "[object Array]", T3 = "[object Boolean]", F3 = "[object Date]", R3 = "[object Error]", sc = "[object Function]", D3 = "[object GeneratorFunction]", L3 = "[object Map]", M3 = "[object Number]", uc = "[object Object]", B3 = "[object RegExp]", I3 = "[object Set]", $3 = "[object String]", j3 = "[object Symbol]", H3 = "[object WeakMap]", N3 = "[object ArrayBuffer]", Z3 = "[object DataView]", P3 = "[object Float32Array]", V3 = "[object Float64Array]", z3 = "[object Int8Array]", q3 = "[object Int16Array]", U3 = "[object Int32Array]", W3 = "[object Uint8Array]", G3 = "[object Uint8ClampedArray]", Y3 = "[object Uint16Array]", K3 = "[object Uint32Array]", Q = {};
Q[ic] = Q[O3] = Q[N3] = Q[Z3] = Q[T3] = Q[F3] = Q[P3] = Q[V3] = Q[z3] = Q[q3] = Q[U3] = Q[L3] = Q[M3] = Q[uc] = Q[B3] = Q[I3] = Q[$3] = Q[j3] = Q[W3] = Q[G3] = Q[Y3] = Q[K3] = !0;
Q[R3] = Q[sc] = Q[H3] = !1;
function dn(e, t, r, n, o, l) {
  var i, u = t & C3, s = t & k3, c = t & _3;
  if (r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)
    return i;
  if (!x3(e))
    return e;
  var d = y3(e);
  if (d) {
    if (i = g3(e), !u)
      return u3(e, i);
  } else {
    var g = m3(e), h = g == sc || g == D3;
    if (v3(e))
      return s3(e, u);
    if (g == uc || g == ic || h && !o) {
      if (i = s || h ? {} : b3(e), !u)
        return s ? d3(e, i3(i, e)) : c3(e, l3(i, e));
    } else {
      if (!Q[g])
        return o ? e : {};
      i = h3(e, g, u);
    }
  }
  l || (l = new n3());
  var p = l.get(e);
  if (p)
    return p;
  l.set(e, i), A3(e) ? e.forEach(function(E) {
    i.add(dn(E, t, r, E, e, l));
  }) : E3(e) && e.forEach(function(E, y) {
    i.set(y, dn(E, t, r, y, e, l));
  });
  var m = c ? s ? f3 : p3 : s ? S3 : w3, f = d ? void 0 : m(e);
  return a3(f || e, function(E, y) {
    f && (y = E, E = e[y]), o3(i, y, dn(E, t, r, y, e, l));
  }), i;
}
var J3 = dn, X3 = J3, Q3 = 1, ev = 4;
function tv(e) {
  return X3(e, Q3 | ev);
}
var rv = tv;
const nv = /* @__PURE__ */ xn(rv);
var av = Object.create, cc = Object.defineProperty, ov = Object.getOwnPropertyDescriptor, dc = Object.getOwnPropertyNames, lv = Object.getPrototypeOf, iv = Object.prototype.hasOwnProperty, Pe = (e, t) => function() {
  return t || (0, e[dc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, sv = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of dc(t))
      !iv.call(e, o) && o !== r && cc(e, o, { get: () => t[o], enumerable: !(n = ov(t, o)) || n.enumerable });
  return e;
}, Vo = (e, t, r) => (r = e != null ? av(lv(e)) : {}, sv(
  t || !e || !e.__esModule ? cc(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), uv = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], cv = ["detail"];
function dv(e) {
  const t = uv.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return e instanceof CustomEvent && cv.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
var pc = Pe({
  "node_modules/has-symbols/shams.js"(e, t) {
    t.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var n = {}, o = Symbol("test"), l = Object(o);
      if (typeof o == "string" || Object.prototype.toString.call(o) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object Symbol]")
        return !1;
      var i = 42;
      n[o] = i;
      for (o in n)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(n).length !== 0)
        return !1;
      var u = Object.getOwnPropertySymbols(n);
      if (u.length !== 1 || u[0] !== o || !Object.prototype.propertyIsEnumerable.call(n, o))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(n, o);
        if (s.value !== i || s.enumerable !== !0)
          return !1;
      }
      return !0;
    };
  }
}), fc = Pe({
  "node_modules/has-symbols/index.js"(e, t) {
    var r = typeof Symbol < "u" && Symbol, n = pc();
    t.exports = function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
    };
  }
}), pv = Pe({
  "node_modules/function-bind/implementation.js"(e, t) {
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, l = "[object Function]";
    t.exports = function(u) {
      var s = this;
      if (typeof s != "function" || o.call(s) !== l)
        throw new TypeError(r + s);
      for (var c = n.call(arguments, 1), d, g = function() {
        if (this instanceof d) {
          var E = s.apply(
            this,
            c.concat(n.call(arguments))
          );
          return Object(E) === E ? E : this;
        } else
          return s.apply(
            u,
            c.concat(n.call(arguments))
          );
      }, h = Math.max(0, s.length - c.length), p = [], m = 0; m < h; m++)
        p.push("$" + m);
      if (d = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(g), s.prototype) {
        var f = function() {
        };
        f.prototype = s.prototype, d.prototype = new f(), f.prototype = null;
      }
      return d;
    };
  }
}), zo = Pe({
  "node_modules/function-bind/index.js"(e, t) {
    var r = pv();
    t.exports = Function.prototype.bind || r;
  }
}), fv = Pe({
  "node_modules/has/src/index.js"(e, t) {
    var r = zo();
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), mc = Pe({
  "node_modules/get-intrinsic/index.js"(e, t) {
    var r, n = SyntaxError, o = Function, l = TypeError, i = function(R) {
      try {
        return o('"use strict"; return (' + R + ").constructor;")();
      } catch {
      }
    }, u = Object.getOwnPropertyDescriptor;
    if (u)
      try {
        u({}, "");
      } catch {
        u = null;
      }
    var s = function() {
      throw new l();
    }, c = u ? function() {
      try {
        return arguments.callee, s;
      } catch {
        try {
          return u(arguments, "callee").get;
        } catch {
          return s;
        }
      }
    }() : s, d = fc()(), g = Object.getPrototypeOf || function(R) {
      return R.__proto__;
    }, h = {}, p = typeof Uint8Array > "u" ? r : g(Uint8Array), m = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": d ? g([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": h,
      "%AsyncGenerator%": h,
      "%AsyncGeneratorFunction%": h,
      "%AsyncIteratorPrototype%": h,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": o,
      "%GeneratorFunction%": h,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": d ? g(g([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !d ? r : g((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !d ? r : g((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": d ? g(""[Symbol.iterator]()) : r,
      "%Symbol%": d ? Symbol : r,
      "%SyntaxError%": n,
      "%ThrowTypeError%": c,
      "%TypedArray%": p,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, f = function R(F) {
      var j;
      if (F === "%AsyncFunction%")
        j = i("async function () {}");
      else if (F === "%GeneratorFunction%")
        j = i("function* () {}");
      else if (F === "%AsyncGeneratorFunction%")
        j = i("async function* () {}");
      else if (F === "%AsyncGenerator%") {
        var D = R("%AsyncGeneratorFunction%");
        D && (j = D.prototype);
      } else if (F === "%AsyncIteratorPrototype%") {
        var L = R("%AsyncGenerator%");
        L && (j = g(L.prototype));
      }
      return m[F] = j, j;
    }, E = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, y = zo(), x = fv(), b = y.call(Function.call, Array.prototype.concat), v = y.call(Function.apply, Array.prototype.splice), A = y.call(Function.call, String.prototype.replace), w = y.call(Function.call, String.prototype.slice), C = y.call(Function.call, RegExp.prototype.exec), S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _ = /\\(\\)?/g, O = function(F) {
      var j = w(F, 0, 1), D = w(F, -1);
      if (j === "%" && D !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (D === "%" && j !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var L = [];
      return A(F, S, function(H, P, I, N) {
        L[L.length] = I ? A(N, _, "$1") : P || H;
      }), L;
    }, T = function(F, j) {
      var D = F, L;
      if (x(E, D) && (L = E[D], D = "%" + L[0] + "%"), x(m, D)) {
        var H = m[D];
        if (H === h && (H = f(D)), typeof H > "u" && !j)
          throw new l("intrinsic " + F + " exists, but is not available. Please file an issue!");
        return {
          alias: L,
          name: D,
          value: H
        };
      }
      throw new n("intrinsic " + F + " does not exist!");
    };
    t.exports = function(F, j) {
      if (typeof F != "string" || F.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof j != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (C(/^%?[^%]*%?$/, F) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var D = O(F), L = D.length > 0 ? D[0] : "", H = T("%" + L + "%", j), P = H.name, I = H.value, N = !1, J = H.alias;
      J && (L = J[0], v(D, b([0, 1], J)));
      for (var ne = 1, Y = !0; ne < D.length; ne += 1) {
        var X = D[ne], $ = w(X, 0, 1), V = w(X, -1);
        if (($ === '"' || $ === "'" || $ === "`" || V === '"' || V === "'" || V === "`") && $ !== V)
          throw new n("property names with quotes must have matching quotes");
        if ((X === "constructor" || !Y) && (N = !0), L += "." + X, P = "%" + L + "%", x(m, P))
          I = m[P];
        else if (I != null) {
          if (!(X in I)) {
            if (!j)
              throw new l("base intrinsic for " + F + " exists, but the property is not available.");
            return;
          }
          if (u && ne + 1 >= D.length) {
            var q = u(I, X);
            Y = !!q, Y && "get" in q && !("originalValue" in q.get) ? I = q.get : I = I[X];
          } else
            Y = x(I, X), I = I[X];
          Y && !N && (m[P] = I);
        }
      }
      return I;
    };
  }
}), mv = Pe({
  "node_modules/call-bind/index.js"(e, t) {
    var r = zo(), n = mc(), o = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || r.call(l, o), u = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch {
        s = null;
      }
    t.exports = function(h) {
      var p = i(r, l, arguments);
      if (u && s) {
        var m = u(p, "length");
        m.configurable && s(
          p,
          "length",
          { value: 1 + c(0, h.length - (arguments.length - 1)) }
        );
      }
      return p;
    };
    var d = function() {
      return i(r, o, arguments);
    };
    s ? s(t.exports, "apply", { value: d }) : t.exports.apply = d;
  }
}), gv = Pe({
  "node_modules/call-bind/callBound.js"(e, t) {
    var r = mc(), n = mv(), o = n(r("String.prototype.indexOf"));
    t.exports = function(i, u) {
      var s = r(i, !!u);
      return typeof s == "function" && o(i, ".prototype.") > -1 ? n(s) : s;
    };
  }
}), hv = Pe({
  "node_modules/has-tostringtag/shams.js"(e, t) {
    var r = pc();
    t.exports = function() {
      return r() && !!Symbol.toStringTag;
    };
  }
}), bv = Pe({
  "node_modules/is-regex/index.js"(e, t) {
    var r = gv(), n = hv()(), o, l, i, u;
    n && (o = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), i = {}, s = function() {
      throw i;
    }, u = {
      toString: s,
      valueOf: s
    }, typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
    var s, c = r("Object.prototype.toString"), d = Object.getOwnPropertyDescriptor, g = "[object RegExp]";
    t.exports = n ? function(p) {
      if (!p || typeof p != "object")
        return !1;
      var m = d(p, "lastIndex"), f = m && o(m, "value");
      if (!f)
        return !1;
      try {
        l(p, u);
      } catch (E) {
        return E === i;
      }
    } : function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : c(p) === g;
    };
  }
}), yv = Pe({
  "node_modules/is-function/index.js"(e, t) {
    t.exports = n;
    var r = Object.prototype.toString;
    function n(o) {
      if (!o)
        return !1;
      var l = r.call(o);
      return l === "[object Function]" || typeof o == "function" && l !== "[object RegExp]" || typeof window < "u" && (o === window.setTimeout || o === window.alert || o === window.confirm || o === window.prompt);
    }
  }
}), vv = Pe({
  "node_modules/is-symbol/index.js"(e, t) {
    var r = Object.prototype.toString, n = fc()();
    n ? (o = Symbol.prototype.toString, l = /^Symbol\(.*\)$/, i = function(s) {
      return typeof s.valueOf() != "symbol" ? !1 : l.test(o.call(s));
    }, t.exports = function(s) {
      if (typeof s == "symbol")
        return !0;
      if (r.call(s) !== "[object Symbol]")
        return !1;
      try {
        return i(s);
      } catch {
        return !1;
      }
    }) : t.exports = function(s) {
      return !1;
    };
    var o, l, i;
  }
}), Ev = Vo(bv()), xv = Vo(yv()), Av = Vo(vv());
function wv(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var Sv = typeof global == "object" && global && global.Object === Object && global, Cv = Sv, kv = typeof self == "object" && self && self.Object === Object && self, _v = Cv || kv || Function("return this")(), qo = _v, Ov = qo.Symbol, sr = Ov, gc = Object.prototype, Tv = gc.hasOwnProperty, Fv = gc.toString, Ar = sr ? sr.toStringTag : void 0;
function Rv(e) {
  var t = Tv.call(e, Ar), r = e[Ar];
  try {
    e[Ar] = void 0;
    var n = !0;
  } catch {
  }
  var o = Fv.call(e);
  return n && (t ? e[Ar] = r : delete e[Ar]), o;
}
var Dv = Rv, Lv = Object.prototype, Mv = Lv.toString;
function Bv(e) {
  return Mv.call(e);
}
var Iv = Bv, $v = "[object Null]", jv = "[object Undefined]", bi = sr ? sr.toStringTag : void 0;
function Hv(e) {
  return e == null ? e === void 0 ? jv : $v : bi && bi in Object(e) ? Dv(e) : Iv(e);
}
var Nv = Hv, yi = sr ? sr.prototype : void 0;
yi && yi.toString;
function Zv(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hc = Zv, Pv = "[object AsyncFunction]", Vv = "[object Function]", zv = "[object GeneratorFunction]", qv = "[object Proxy]";
function Uv(e) {
  if (!hc(e))
    return !1;
  var t = Nv(e);
  return t == Vv || t == zv || t == Pv || t == qv;
}
var Wv = Uv, Gv = qo["__core-js_shared__"], ga = Gv, Ei = function() {
  var e = /[^.]+$/.exec(ga && ga.keys && ga.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yv(e) {
  return !!Ei && Ei in e;
}
var Kv = Yv, Jv = Function.prototype, Xv = Jv.toString;
function Qv(e) {
  if (e != null) {
    try {
      return Xv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var e4 = Qv, t4 = /[\\^$.*+?()[\]{}|]/g, r4 = /^\[object .+?Constructor\]$/, n4 = Function.prototype, a4 = Object.prototype, o4 = n4.toString, l4 = a4.hasOwnProperty, i4 = RegExp(
  "^" + o4.call(l4).replace(t4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function s4(e) {
  if (!hc(e) || Kv(e))
    return !1;
  var t = Wv(e) ? i4 : r4;
  return t.test(e4(e));
}
var u4 = s4;
function c4(e, t) {
  return e == null ? void 0 : e[t];
}
var d4 = c4;
function p4(e, t) {
  var r = d4(e, t);
  return u4(r) ? r : void 0;
}
var bc = p4;
function f4(e, t) {
  return e === t || e !== e && t !== t;
}
var m4 = f4, g4 = bc(Object, "create"), $r = g4;
function h4() {
  this.__data__ = $r ? $r(null) : {}, this.size = 0;
}
var b4 = h4;
function y4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var v4 = y4, E4 = "__lodash_hash_undefined__", x4 = Object.prototype, A4 = x4.hasOwnProperty;
function w4(e) {
  var t = this.__data__;
  if ($r) {
    var r = t[e];
    return r === E4 ? void 0 : r;
  }
  return A4.call(t, e) ? t[e] : void 0;
}
var S4 = w4, C4 = Object.prototype, k4 = C4.hasOwnProperty;
function _4(e) {
  var t = this.__data__;
  return $r ? t[e] !== void 0 : k4.call(t, e);
}
var O4 = _4, T4 = "__lodash_hash_undefined__";
function F4(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = $r && t === void 0 ? T4 : t, this;
}
var R4 = F4;
function pr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pr.prototype.clear = b4;
pr.prototype.delete = v4;
pr.prototype.get = S4;
pr.prototype.has = O4;
pr.prototype.set = R4;
var xi = pr;
function D4() {
  this.__data__ = [], this.size = 0;
}
var L4 = D4;
function M4(e, t) {
  for (var r = e.length; r--; )
    if (m4(e[r][0], t))
      return r;
  return -1;
}
var Pn = M4, B4 = Array.prototype, I4 = B4.splice;
function $4(e) {
  var t = this.__data__, r = Pn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : I4.call(t, r, 1), --this.size, !0;
}
var j4 = $4;
function H4(e) {
  var t = this.__data__, r = Pn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var N4 = H4;
function Z4(e) {
  return Pn(this.__data__, e) > -1;
}
var P4 = Z4;
function V4(e, t) {
  var r = this.__data__, n = Pn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var z4 = V4;
function fr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fr.prototype.clear = L4;
fr.prototype.delete = j4;
fr.prototype.get = N4;
fr.prototype.has = P4;
fr.prototype.set = z4;
var q4 = fr, U4 = bc(qo, "Map"), W4 = U4;
function G4() {
  this.size = 0, this.__data__ = {
    hash: new xi(),
    map: new (W4 || q4)(),
    string: new xi()
  };
}
var Y4 = G4;
function K4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var J4 = K4;
function X4(e, t) {
  var r = e.__data__;
  return J4(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Vn = X4;
function Q4(e) {
  var t = Vn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var e7 = Q4;
function t7(e) {
  return Vn(this, e).get(e);
}
var r7 = t7;
function n7(e) {
  return Vn(this, e).has(e);
}
var a7 = n7;
function o7(e, t) {
  var r = Vn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var l7 = o7;
function mr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mr.prototype.clear = Y4;
mr.prototype.delete = e7;
mr.prototype.get = r7;
mr.prototype.has = a7;
mr.prototype.set = l7;
var yc = mr, i7 = "Expected a function";
function Uo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(i7);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], l = r.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, n);
    return r.cache = l.set(o, i) || l, i;
  };
  return r.cache = new (Uo.Cache || yc)(), r;
}
Uo.Cache = yc;
var s7 = Uo, u7 = 500;
function c7(e) {
  var t = s7(e, function(n) {
    return r.size === u7 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var d7 = c7, p7 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, f7 = /\\(\\)?/g;
d7(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(p7, function(r, n, o, l) {
    t.push(o ? l.replace(f7, "$1") : n || r);
  }), t;
});
var m7 = wv, g7 = (e) => {
  let t = null, r = !1, n = !1, o = !1, l = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
    for (let i = 0; i < e.length; i += 1)
      !t && !r && !n && !o ? e[i] === '"' || e[i] === "'" || e[i] === "`" ? t = e[i] : e[i] === "/" && e[i + 1] === "*" ? r = !0 : e[i] === "/" && e[i + 1] === "/" ? n = !0 : e[i] === "/" && e[i + 1] !== "/" && (o = !0) : (t && (e[i] === t && e[i - 1] !== "\\" || e[i] === `
` && t !== "`") && (t = null), o && (e[i] === "/" && e[i - 1] !== "\\" || e[i] === `
`) && (o = !1), r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1), n && e[i] === `
` && (n = !1)), !r && !n && (l += e[i]);
  else
    l = e;
  return l;
}, h7 = Pt(1e4)(
  (e) => g7(e).replace(/\n\s*/g, "").trim()
), b7 = function(t, r) {
  const n = r.slice(0, r.indexOf("{")), o = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(t, "function"), l + o;
}, y7 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function vc(e) {
  if (!m7(e))
    return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = dv(t), r = !0), t = Object.keys(t).reduce((n, o) => {
    try {
      t[o] && t[o].toJSON, n[o] = t[o];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? t : e;
}
var v7 = function(t) {
  let r, n, o, l;
  return function(u, s) {
    try {
      if (u === "")
        return l = [], r = /* @__PURE__ */ new Map([[s, "[]"]]), n = /* @__PURE__ */ new Map(), o = [], s;
      const c = n.get(this) || this;
      for (; o.length && c !== o[0]; )
        o.shift(), l.pop();
      if (typeof s == "boolean")
        return s;
      if (s === void 0)
        return t.allowUndefined ? "_undefined_" : void 0;
      if (s === null)
        return null;
      if (typeof s == "number")
        return s === -1 / 0 ? "_-Infinity_" : s === 1 / 0 ? "_Infinity_" : Number.isNaN(s) ? "_NaN_" : s;
      if (typeof s == "bigint")
        return `_bigint_${s.toString()}`;
      if (typeof s == "string")
        return y7.test(s) ? t.allowDate ? `_date_${s}` : void 0 : s;
      if ((0, Ev.default)(s))
        return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
      if ((0, xv.default)(s)) {
        if (!t.allowFunction)
          return;
        const { name: g } = s, h = s.toString();
        return h.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${g}|${(() => {
        }).toString()}` : `_function_${g}|${h7(b7(u, h))}`;
      }
      if ((0, Av.default)(s)) {
        if (!t.allowSymbol)
          return;
        const g = Symbol.keyFor(s);
        return g !== void 0 ? `_gsymbol_${g}` : `_symbol_${s.toString().slice(7, -1)}`;
      }
      if (o.length >= t.maxDepth)
        return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
      if (s === this)
        return `_duplicate_${JSON.stringify(l)}`;
      if (s instanceof Error && t.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...s.cause ? { cause: s.cause } : {},
            ...s,
            name: s.name,
            message: s.message,
            stack: s.stack,
            "_constructor-name_": s.constructor.name
          }
        };
      if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && !t.allowClass)
        return;
      const d = r.get(s);
      if (!d) {
        const g = Array.isArray(s) ? s : vc(s);
        if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && t.allowClass)
          try {
            Object.assign(g, { "_constructor-name_": s.constructor.name });
          } catch {
          }
        return l.push(u), o.unshift(g), r.set(s, JSON.stringify(l)), s !== g && n.set(s, g), g;
      }
      return `_duplicate_${d}`;
    } catch {
      return;
    }
  };
}, E7 = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, x7 = (e, t = {}) => {
  const r = { ...E7, ...t };
  return JSON.stringify(vc(e), v7(r), t.space);
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Ec = { exports: {} }, ha, Ai;
function A7() {
  return Ai || (Ai = 1, ha = {
    // Where to render the table of contents.
    tocSelector: ".js-toc",
    // Where to grab the headings to build the table of contents.
    contentSelector: ".js-toc-content",
    // Which headings to grab inside of the contentSelector element.
    headingSelector: "h1, h2, h3",
    // Headings that match the ignoreSelector will be skipped.
    ignoreSelector: ".js-toc-ignore",
    // For headings inside relative or absolute positioned containers within content
    hasInnerContainers: !1,
    // Main class to add to links.
    linkClass: "toc-link",
    // Extra classes to add to links.
    extraLinkClasses: "",
    // Class to add to active links,
    // the link corresponding to the top most heading on the page.
    activeLinkClass: "is-active-link",
    // Main class to add to lists.
    listClass: "toc-list",
    // Extra classes to add to lists.
    extraListClasses: "",
    // Class that gets added when a list should be collapsed.
    isCollapsedClass: "is-collapsed",
    // Class that gets added when a list should be able
    // to be collapsed but isn't necessarily collapsed.
    collapsibleClass: "is-collapsible",
    // Class to add to list items.
    listItemClass: "toc-list-item",
    // Class to add to active list items.
    activeListItemClass: "is-active-li",
    // How many heading levels should not be collapsed.
    // For example, number 6 will show everything since
    // there are only 6 heading levels and number 0 will collapse them all.
    // The sections that are hidden will open
    // and close as you scroll to headings within them.
    collapseDepth: 0,
    // Smooth scrolling enabled.
    scrollSmooth: !0,
    // Smooth scroll duration.
    scrollSmoothDuration: 420,
    // Smooth scroll offset.
    scrollSmoothOffset: 0,
    // Callback for scroll end.
    scrollEndCallback: function(e) {
    },
    // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
    headingsOffset: 1,
    // Timeout between events firing to make sure it's
    // not too rapid (for performance reasons).
    throttleTimeout: 50,
    // Element to add the positionFixedClass to.
    positionFixedSelector: null,
    // Fixed position class to add to make sidebar fixed after scrolling
    // down past the fixedSidebarOffset.
    positionFixedClass: "is-position-fixed",
    // fixedSidebarOffset can be any number but by default is set
    // to auto which sets the fixedSidebarOffset to the sidebar
    // element's offsetTop from the top of the document on init.
    fixedSidebarOffset: "auto",
    // includeHtml can be set to true to include the HTML markup from the
    // heading node instead of just including the textContent.
    includeHtml: !1,
    // includeTitleTags automatically sets the html title tag of the link
    // to match the title. This can be useful for SEO purposes or
    // when truncating titles.
    includeTitleTags: !1,
    // onclick function to apply to all links in toc. will be called with
    // the event as the first parameter, and this can be used to stop,
    // propagation, prevent default or perform action
    onClick: function(e) {
    },
    // orderedList can be set to false to generate unordered lists (ul)
    // instead of ordered lists (ol)
    orderedList: !0,
    // If there is a fixed article scroll container, set to calculate titles' offset
    scrollContainer: null,
    // prevent ToC DOM rendering if it's already rendered by an external system
    skipRendering: !1,
    // Optional callback to change heading labels.
    // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
    // Called each time a heading is parsed. Expects a string and returns the modified label to display.
    // Additionally, the attribute `data-heading-label` may be used on a heading to specify
    // a shorter string to be used in the TOC.
    // function (string) => string
    headingLabelCallback: !1,
    // ignore headings that are hidden in DOM
    ignoreHiddenElements: !1,
    // Optional callback to modify properties of parsed headings.
    // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
    // Function has to return the same or modified obj.
    // The heading will be excluded from TOC if nothing is returned.
    // function (object, HTMLElement) => object | void
    headingObjectCallback: null,
    // Set the base path, useful if you use a `base` tag in `head`.
    basePath: "",
    // Only takes affect when `tocSelector` is scrolling,
    // keep the toc scroll position in sync with the content.
    disableTocScrollSync: !1,
    // Offset for the toc scroll (top) position when scrolling the page.
    // Only effective if `disableTocScrollSync` is false.
    tocScrollOffset: 0
  }), ha;
}
var ba, wi;
function w7() {
  return wi || (wi = 1, ba = function(e) {
    var t = [].forEach, r = [].some, n = document.body, o, l = !0, i = " ";
    function u(y, x) {
      var b = x.appendChild(c(y));
      if (y.children.length) {
        var v = d(y.isCollapsed);
        y.children.forEach(function(A) {
          u(A, v);
        }), b.appendChild(v);
      }
    }
    function s(y, x) {
      var b = !1, v = d(b);
      if (x.forEach(function(A) {
        u(A, v);
      }), o = y || o, o !== null)
        return o.firstChild && o.removeChild(o.firstChild), x.length === 0 ? o : o.appendChild(v);
    }
    function c(y) {
      var x = document.createElement("li"), b = document.createElement("a");
      return e.listItemClass && x.setAttribute("class", e.listItemClass), e.onClick && (b.onclick = e.onClick), e.includeTitleTags && b.setAttribute("title", y.textContent), e.includeHtml && y.childNodes.length ? t.call(y.childNodes, function(v) {
        b.appendChild(v.cloneNode(!0));
      }) : b.textContent = y.textContent, b.setAttribute("href", e.basePath + "#" + y.id), b.setAttribute("class", e.linkClass + i + "node-name--" + y.nodeName + i + e.extraLinkClasses), x.appendChild(b), x;
    }
    function d(y) {
      var x = e.orderedList ? "ol" : "ul", b = document.createElement(x), v = e.listClass + i + e.extraListClasses;
      return y && (v = v + i + e.collapsibleClass, v = v + i + e.isCollapsedClass), b.setAttribute("class", v), b;
    }
    function g() {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var y;
        y = document.querySelector(e.scrollContainer).scrollTop;
      } else
        y = document.documentElement.scrollTop || n.scrollTop;
      var x = document.querySelector(e.positionFixedSelector);
      e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = o.offsetTop), y > e.fixedSidebarOffset ? x.className.indexOf(e.positionFixedClass) === -1 && (x.className += i + e.positionFixedClass) : x.className = x.className.split(i + e.positionFixedClass).join("");
    }
    function h(y) {
      var x = 0;
      return y !== null && (x = y.offsetTop, e.hasInnerContainers && (x += h(y.offsetParent))), x;
    }
    function p(y) {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var x;
        x = document.querySelector(e.scrollContainer).scrollTop;
      } else
        x = document.documentElement.scrollTop || n.scrollTop;
      e.positionFixedSelector && g();
      var b = y, v;
      if (l && o !== null && b.length > 0) {
        r.call(b, function(T, R) {
          if (h(T) > x + e.headingsOffset + 10) {
            var F = R === 0 ? R : R - 1;
            return v = b[F], !0;
          } else if (R === b.length - 1)
            return v = b[b.length - 1], !0;
        });
        var A = o.querySelector("." + e.activeLinkClass), w = o.querySelector("." + e.linkClass + ".node-name--" + v.nodeName + '[href="' + e.basePath + "#" + v.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (A === w)
          return;
        var C = o.querySelectorAll("." + e.linkClass);
        t.call(C, function(T) {
          T.className = T.className.split(i + e.activeLinkClass).join("");
        });
        var S = o.querySelectorAll("." + e.listItemClass);
        t.call(S, function(T) {
          T.className = T.className.split(i + e.activeListItemClass).join("");
        }), w && w.className.indexOf(e.activeLinkClass) === -1 && (w.className += i + e.activeLinkClass);
        var _ = w && w.parentNode;
        _ && _.className.indexOf(e.activeListItemClass) === -1 && (_.className += i + e.activeListItemClass);
        var O = o.querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
        t.call(O, function(T) {
          T.className.indexOf(e.isCollapsedClass) === -1 && (T.className += i + e.isCollapsedClass);
        }), w && w.nextSibling && w.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 && (w.nextSibling.className = w.nextSibling.className.split(i + e.isCollapsedClass).join("")), m(w && w.parentNode.parentNode);
      }
    }
    function m(y) {
      return y && y.className.indexOf(e.collapsibleClass) !== -1 && y.className.indexOf(e.isCollapsedClass) !== -1 ? (y.className = y.className.split(i + e.isCollapsedClass).join(""), m(y.parentNode.parentNode)) : y;
    }
    function f(y) {
      var x = y.target || y.srcElement;
      typeof x.className != "string" || x.className.indexOf(e.linkClass) === -1 || (l = !1);
    }
    function E() {
      l = !0;
    }
    return {
      enableTocAnimation: E,
      disableTocAnimation: f,
      render: s,
      updateToc: p
    };
  }), ba;
}
var ya, Si;
function S7() {
  return Si || (Si = 1, ya = function(t) {
    var r = [].reduce;
    function n(d) {
      return d[d.length - 1];
    }
    function o(d) {
      return +d.nodeName.toUpperCase().replace("H", "");
    }
    function l(d) {
      try {
        return d instanceof window.HTMLElement || d instanceof window.parent.HTMLElement;
      } catch {
        return d instanceof window.HTMLElement;
      }
    }
    function i(d) {
      if (!l(d))
        return d;
      if (t.ignoreHiddenElements && (!d.offsetHeight || !d.offsetParent))
        return null;
      const g = d.getAttribute("data-heading-label") || (t.headingLabelCallback ? String(t.headingLabelCallback(d.textContent)) : d.textContent.trim());
      var h = {
        id: d.id,
        children: [],
        nodeName: d.nodeName,
        headingLevel: o(d),
        textContent: g
      };
      return t.includeHtml && (h.childNodes = d.childNodes), t.headingObjectCallback ? t.headingObjectCallback(h, d) : h;
    }
    function u(d, g) {
      for (var h = i(d), p = h.headingLevel, m = g, f = n(m), E = f ? f.headingLevel : 0, y = p - E; y > 0 && (f = n(m), !(f && p === f.headingLevel)); )
        f && f.children !== void 0 && (m = f.children), y--;
      return p >= t.collapseDepth && (h.isCollapsed = !0), m.push(h), m;
    }
    function s(d, g) {
      var h = g;
      t.ignoreSelector && (h = g.split(",").map(function(m) {
        return m.trim() + ":not(" + t.ignoreSelector + ")";
      }));
      try {
        return d.querySelectorAll(h);
      } catch {
        return console.warn("Headers not found with selector: " + h), null;
      }
    }
    function c(d) {
      return r.call(d, function(h, p) {
        var m = i(p);
        return m && u(m, h.nest), h;
      }, {
        nest: []
      });
    }
    return {
      nestHeadingsArray: c,
      selectHeadings: s
    };
  }), ya;
}
var va, Ci;
function C7() {
  return Ci || (Ci = 1, va = function(t) {
    var r = t.tocElement || document.querySelector(t.tocSelector);
    if (r && r.scrollHeight > r.clientHeight) {
      var n = r.querySelector("." + t.activeListItemClass);
      n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
    }
  }), va;
}
var Ea = {}, ki;
function k7() {
  if (ki)
    return Ea;
  ki = 1, Ea.initSmoothScrolling = e;
  function e(r) {
    var n = r.duration, o = r.offset, l = location.hash ? s(location.href) : location.href;
    i();
    function i() {
      document.body.addEventListener("click", d, !1);
      function d(g) {
        !u(g.target) || g.target.className.indexOf("no-smooth-scroll") > -1 || g.target.href.charAt(g.target.href.length - 2) === "#" && g.target.href.charAt(g.target.href.length - 1) === "!" || g.target.className.indexOf(r.linkClass) === -1 || t(g.target.hash, {
          duration: n,
          offset: o,
          callback: function() {
            c(g.target.hash);
          }
        });
      }
    }
    function u(d) {
      return d.tagName.toLowerCase() === "a" && (d.hash.length > 0 || d.href.charAt(d.href.length - 1) === "#") && (s(d.href) === l || s(d.href) + "#" === l);
    }
    function s(d) {
      return d.slice(0, d.lastIndexOf("#"));
    }
    function c(d) {
      var g = document.getElementById(d.substring(1));
      g && (/^(?:a|select|input|button|textarea)$/i.test(g.tagName) || (g.tabIndex = -1), g.focus());
    }
  }
  function t(r, n) {
    var o = window.pageYOffset, l = {
      duration: n.duration,
      offset: n.offset || 0,
      callback: n.callback,
      easing: n.easing || p
    }, i = document.querySelector('[id="' + decodeURI(r).split("#").join("") + '"]') || document.querySelector('[id="' + r.split("#").join("") + '"]'), u = typeof r == "string" ? l.offset + (r ? i && i.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : r, s = typeof l.duration == "function" ? l.duration(u) : l.duration, c, d;
    requestAnimationFrame(function(m) {
      c = m, g(m);
    });
    function g(m) {
      d = m - c, window.scrollTo(0, l.easing(d, o, u, s)), d < s ? requestAnimationFrame(g) : h();
    }
    function h() {
      window.scrollTo(0, o + u), typeof l.callback == "function" && l.callback();
    }
    function p(m, f, E, y) {
      return m /= y / 2, m < 1 ? E / 2 * m * m + f : (m--, -E / 2 * (m * (m - 2) - 1) + f);
    }
  }
  return Ea;
}
(function(e, t) {
  (function(r, n) {
    e.exports = n(r);
  })(typeof Yn < "u" ? Yn : window || Yn, function(r) {
    var n = A7(), o = {}, l = {}, i = w7(), u = S7(), s = C7(), c, d, g = !!r && !!r.document && !!r.document.querySelector && !!r.addEventListener;
    if (typeof window > "u" && !g)
      return;
    var h, p = Object.prototype.hasOwnProperty;
    function m() {
      for (var x = {}, b = 0; b < arguments.length; b++) {
        var v = arguments[b];
        for (var A in v)
          p.call(v, A) && (x[A] = v[A]);
      }
      return x;
    }
    function f(x, b, v) {
      b || (b = 250);
      var A, w;
      return function() {
        var C = v || this, S = +/* @__PURE__ */ new Date(), _ = arguments;
        A && S < A + b ? (clearTimeout(w), w = setTimeout(function() {
          A = S, x.apply(C, _);
        }, b)) : (A = S, x.apply(C, _));
      };
    }
    function E(x) {
      try {
        return x.contentElement || document.querySelector(x.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + x.contentSelector), null;
      }
    }
    function y(x) {
      try {
        return x.tocElement || document.querySelector(x.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + x.tocSelector), null;
      }
    }
    return l.destroy = function() {
      var x = y(o);
      x !== null && (o.skipRendering || x && (x.innerHTML = ""), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).removeEventListener("resize", this._scrollListener, !1), c && document.querySelector(o.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), c && document.removeEventListener("click", this._clickListener, !1)));
    }, l.init = function(x) {
      if (g) {
        o = m(n, x || {}), this.options = o, this.state = {}, o.scrollSmooth && (o.duration = o.scrollSmoothDuration, o.offset = o.scrollSmoothOffset, l.scrollSmooth = k7().initSmoothScrolling(o)), c = i(o), d = u(o), this._buildHtml = c, this._parseContent = d, this._headingsArray = h, l.destroy();
        var b = E(o);
        if (b !== null) {
          var v = y(o);
          if (v !== null && (h = d.selectHeadings(b, o.headingSelector), h !== null)) {
            var A = d.nestHeadingsArray(h), w = A.nest;
            o.skipRendering || c.render(v, w), this._scrollListener = f(function(S) {
              c.updateToc(h), !o.disableTocScrollSync && s(o);
              var _ = S && S.target && S.target.scrollingElement && S.target.scrollingElement.scrollTop === 0;
              (S && (S.eventPhase === 0 || S.currentTarget === null) || _) && (c.updateToc(h), o.scrollEndCallback && o.scrollEndCallback(S));
            }, o.throttleTimeout), this._scrollListener(), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var C = null;
            return this._clickListener = f(function(S) {
              o.scrollSmooth && c.disableTocAnimation(S), c.updateToc(h), C && clearTimeout(C), C = setTimeout(function() {
                c.enableTocAnimation();
              }, o.scrollSmoothDuration);
            }, o.throttleTimeout), o.scrollContainer && document.querySelector(o.scrollContainer) ? document.querySelector(o.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, l.refresh = function(x) {
      l.destroy(), l.init(x || this.options);
    }, r.tocbot = l, l;
  });
})(Ec);
var _i = Ec.exports;
const { global: je } = __STORYBOOK_MODULE_GLOBAL__, { deprecate: he, once: _7, logger: Wo } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: O7, composeConfigs: Jx, Preview: Xx, DocsContext: Qx } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: Oi, UPDATE_STORY_ARGS: T7, RESET_STORY_ARGS: F7, GLOBALS_UPDATED: Ti, NAVIGATE_URL: R7 } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var D7 = k.div(re, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: te(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), xc = (e) => a.createElement(D7, { ...e, className: "docblock-emptyblock sb-unstyled" }), L7 = k(Ln)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), M7 = k.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), Xr = k.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${Ta}`]: { margin: 0 } })), B7 = () => a.createElement(M7, null, a.createElement(Xr, null), a.createElement(Xr, { style: { width: "80%" } }), a.createElement(Xr, { style: { width: "30%" } }), a.createElement(Xr, { style: { width: "80%" } })), Go = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: l, ...i }) => {
  if (e)
    return a.createElement(B7, null);
  if (t)
    return a.createElement(xc, null, t);
  let u = a.createElement(L7, { bordered: !0, copyable: !0, format: l, language: r, className: "docblock-source sb-unstyled", ...i }, n);
  if (typeof o > "u")
    return u;
  let s = o ? Sa.dark : Sa.light;
  return a.createElement(bs, { theme: Oa(s) }, u);
};
Go.defaultProps = { format: !1 };
var se = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, Yo = 600, I7 = k.h1(re, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${Yo}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), $7 = k.h2(re, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${Yo}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: te(0.25, e.color.defaultText) })), j7 = k.div(({ theme: e }) => {
  let t = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, r = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, n = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [se("a")]: { ...t, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [se("blockquote")]: { ...t, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [se("div")]: t, [se("dl")]: { ...t, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [se("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [se("h2")]: { ...t, ...r, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [se("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [se("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` }, [se("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` }, [se("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [se("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [se("img")]: { maxWidth: "100%" }, [se("li")]: { ...t, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": n }, [se("ol")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [se("p")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": n }, [se("pre")]: { ...t, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [se("span")]: { ...t, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [se("table")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [se("ul")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), H7 = k.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${Yo}px)`]: {} })), N7 = ({ children: e, toc: t }) => a.createElement(H7, { className: "sbdocs sbdocs-wrapper" }, a.createElement(j7, { className: "sbdocs sbdocs-content" }, e), t), zn = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), Z7 = ({ zoom: e, resetZoom: t }) => a.createElement(a.Fragment, null, a.createElement(jt, { key: "zoomin", onClick: (r) => {
  r.preventDefault(), e(0.8);
}, title: "Zoom in" }, a.createElement(we, { icon: "zoom" })), a.createElement(jt, { key: "zoomout", onClick: (r) => {
  r.preventDefault(), e(1.25);
}, title: "Zoom out" }, a.createElement(we, { icon: "zoomout" })), a.createElement(jt, { key: "zoomreset", onClick: (r) => {
  r.preventDefault(), t();
}, title: "Reset zoom" }, a.createElement(we, { icon: "zoomreset" }))), P7 = k(In)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), V7 = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l }) => a.createElement(P7, { ...l }, a.createElement(At, { key: "left" }, e ? [1, 2, 3].map((i) => a.createElement(Fu, { key: i })) : a.createElement(Z7, { zoom: n, resetZoom: o }))), Ac = En({ scale: 1 }), { window: z7 } = je, q7 = class extends ct {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = z7.document.getElementById(e);
  }
  shouldComponentUpdate(e) {
    let { scale: t } = e;
    return t !== this.props.scale && this.setIframeBodyStyle({ width: `${t * 100}%`, height: `${t * 100}%`, transform: `scale(${1 / t})`, transformOrigin: "top left" }), !1;
  }
  setIframeBodyStyle(e) {
    return Object.assign(this.iframe.contentDocument.body.style, e);
  }
  render() {
    let { id: e, title: t, src: r, allowFullScreen: n, scale: o, ...l } = this.props;
    return a.createElement("iframe", { id: e, title: t, src: r, ...n ? { allow: "fullscreen" } : {}, loading: "lazy", ...l });
  }
}, { PREVIEW_URL: U7 } = je, W7 = U7 || "iframe.html", za = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`, G7 = (e) => {
  let t = ce(), [r, n] = U(!0), [o, l] = U(), { story: i, height: u, autoplay: s, forceInitialArgs: c, renderStoryToElement: d } = e;
  return ie(() => {
    if (!(i && t.current))
      return () => {
      };
    let g = t.current, h = d(i, g, { showMain: () => {
    }, showError: ({ title: p, description: m }) => l(new Error(`${p} - ${m}`)), showException: (p) => l(p) }, { autoplay: s, forceInitialArgs: c });
    return n(!1), () => {
      Promise.resolve().then(() => h());
    };
  }, [s, d, i]), o ? a.createElement("pre", null, a.createElement(wu, { error: o })) : a.createElement(a.Fragment, null, u ? a.createElement("style", null, `#${za(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`) : null, r && a.createElement(Ko, null), a.createElement("div", { ref: t, id: `${za(e)}-inner`, "data-name": i.name }));
}, Y7 = ({ story: e, height: t = "500px" }) => a.createElement("div", { style: { width: "100%", height: t } }, a.createElement(Ac.Consumer, null, ({ scale: r }) => a.createElement(q7, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: Mu(W7, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: r, style: { width: "100%", height: "100%", border: "0 none" } }))), K7 = (e) => {
  let { inline: t } = e;
  return a.createElement("div", { id: za(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, t ? a.createElement(G7, { ...e }) : a.createElement(Y7, { ...e }));
}, Ko = () => a.createElement(Lu, null), J7 = k.div(({ isColumn: e, columns: t, layout: r }) => ({ display: e || !t ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), Fi = k(Go)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : tt(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : tt(0.05, e.background.content) } })), X7 = k.div(({ theme: e, withSource: t, isExpanded: r }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...zn(e), borderBottomLeftRadius: t && r && 0, borderBottomRightRadius: t && r && 0, borderBottomWidth: r && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), Q7 = (e, t, r) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => r(!1) } };
    case t:
      return { source: a.createElement(Fi, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => r(!1) } };
    default:
      return { source: a.createElement(Fi, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) } };
  }
};
function eE(e) {
  if (Ht.count(e) === 1) {
    let t = e;
    if (t.props)
      return t.props.id;
  }
  return null;
}
var tE = k(V7)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), rE = k.div({ overflow: "hidden", position: "relative" }), qa = ({ isLoading: e, isColumn: t, columns: r, children: n, withSource: o, withToolbar: l = !1, isExpanded: i = !1, additionalActions: u, className: s, layout: c = "padded", ...d }) => {
  let [g, h] = U(i), { source: p, actionItem: m } = Q7(o, g, h), [f, E] = U(1), y = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), x = o ? [m] : [], [b, v] = U(u ? [...u] : []), A = [...x, ...b], { window: w } = je, C = ae(async (_) => {
    let { createCopyToClipboardFunction: O } = await Promise.resolve().then(() => um);
    O();
  }, []), S = (_) => {
    let O = w.getSelection();
    O && O.type === "Range" || (_.preventDefault(), b.filter((T) => T.title === "Copied").length === 0 && C(p.props.code).then(() => {
      v([...b, { title: "Copied", onClick: () => {
      } }]), w.setTimeout(() => v(b.filter((T) => T.title !== "Copied")), 1500);
    }));
  };
  return a.createElement(X7, { withSource: o, withToolbar: l, ...d, className: y.join(" ") }, l && a.createElement(tE, { isLoading: e, border: !0, zoom: (_) => E(f * _), resetZoom: () => E(1), storyId: eE(n), baseUrl: "./iframe.html" }), a.createElement(Ac.Provider, { value: { scale: f } }, a.createElement(rE, { className: "docs-story", onCopyCapture: o && S }, a.createElement(J7, { isColumn: t || !Array.isArray(n), columns: r, layout: c }, a.createElement(Au.Element, { scale: f }, Array.isArray(n) ? n.map((_, O) => a.createElement("div", { key: O }, _)) : a.createElement("div", null, n))), a.createElement(ho, { actionItems: A }))), o && g && p);
}, nE = k(qa)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), aE = () => a.createElement(nE, { isLoading: !0, withToolbar: !0 }, a.createElement(Ko, null)), oE = k.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: bt({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), lE = ({ tags: e }) => {
  let t = (e.params || []).filter((l) => l.description), r = t.length !== 0, n = e.deprecated != null, o = e.returns != null && e.returns.description != null;
  return !r && !o && !n ? null : a.createElement(a.Fragment, null, a.createElement(oE, null, a.createElement("tbody", null, n && a.createElement("tr", { key: "deprecated" }, a.createElement("td", { colSpan: 2 }, a.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), r && t.map((l) => a.createElement("tr", { key: l.name }, a.createElement("td", null, a.createElement("code", null, l.name)), a.createElement("td", null, l.description))), o && a.createElement("tr", { key: "returns" }, a.createElement("td", null, a.createElement("code", null, "Returns")), a.createElement("td", null, e.returns.description)))));
}, Ua = 8, Ri = k.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), iE = k.span(bt, ({ theme: e, simple: t = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...t && { background: "transparent", border: "0 none", paddingLeft: 0 } })), sE = k.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), uE = k.div(bt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), cE = k.div(({ theme: e, width: t }) => ({ width: t, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), dE = k(we)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), pE = () => a.createElement("span", null, "-"), wc = ({ text: e, simple: t }) => a.createElement(iE, { simple: t }, e), fE = Pt(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
}), mE = (e) => {
  if (!e)
    return [e];
  let t = e.split("|").map((r) => r.trim());
  return yb(t);
}, Di = (e, t = !0) => {
  let r = e;
  return t || (r = e.slice(0, Ua)), r.map((n) => a.createElement(wc, { key: n, text: n === "" ? '""' : n }));
}, gE = ({ value: e, initialExpandedArgs: t }) => {
  let { summary: r, detail: n } = e, [o, l] = U(!1), [i, u] = U(t || !1);
  if (r == null)
    return null;
  let s = typeof r.toString == "function" ? r.toString() : r;
  if (n == null) {
    if (/[(){}[\]<>]/.test(s))
      return a.createElement(wc, { text: s });
    let c = mE(s), d = c.length;
    return d > Ua ? a.createElement(Ri, { isExpanded: i }, Di(c, i), a.createElement(sE, { onClick: () => u(!i) }, i ? "Show less..." : `Show ${d - Ua} more...`)) : a.createElement(Ri, null, Di(c));
  }
  return a.createElement(Ou, { closeOnOutsideClick: !0, placement: "bottom", visible: o, onVisibleChange: (c) => {
    l(c);
  }, tooltip: a.createElement(cE, { width: fE(n) }, a.createElement(Ln, { language: "jsx", format: !1 }, n)) }, a.createElement(uE, { className: "sbdocs-expandable" }, a.createElement("span", null, s), a.createElement(dE, { icon: o ? "arrowup" : "arrowdown" })));
}, xa = ({ value: e, initialExpandedArgs: t }) => e == null ? a.createElement(pE, null) : a.createElement(gE, { value: e, initialExpandedArgs: t }), hE = k.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: te(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${Jr(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${Jr(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Jr(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${Jr(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), bE = (e) => e === "true", yE = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o }) => {
  let l = ae(() => r(!1), [r]);
  if (t === void 0)
    return a.createElement(qe.Button, { id: wn(e), onClick: l }, "Set boolean");
  let i = Ue(e), u = typeof t == "string" ? bE(t) : t;
  return a.createElement(hE, { htmlFor: i, title: u ? "Change to false" : "Change to true" }, a.createElement("input", { id: i, type: "checkbox", onChange: (s) => r(s.target.checked), checked: u, name: e, onBlur: n, onFocus: o }), a.createElement("span", null, "False"), a.createElement("span", null, "True"));
}, vE = (e) => {
  let [t, r, n] = e.split("-"), o = /* @__PURE__ */ new Date();
  return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o;
}, EE = (e) => {
  let [t, r] = e.split(":"), n = /* @__PURE__ */ new Date();
  return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
}, xE = (e) => {
  let t = new Date(e), r = `000${t.getFullYear()}`.slice(-4), n = `0${t.getMonth() + 1}`.slice(-2), o = `0${t.getDate()}`.slice(-2);
  return `${r}-${n}-${o}`;
}, AE = (e) => {
  let t = new Date(e), r = `0${t.getHours()}`.slice(-2), n = `0${t.getMinutes()}`.slice(-2);
  return `${r}:${n}`;
}, wE = k.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), SE = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o }) => {
  let [l, i] = U(!0), u = ce(), s = ce();
  ie(() => {
    l !== !1 && (u && u.current && (u.current.value = xE(t)), s && s.current && (s.current.value = AE(t)));
  }, [t]);
  let c = (h) => {
    let p = vE(h.target.value), m = new Date(t);
    m.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
    let f = m.getTime();
    f && r(f), i(!!f);
  }, d = (h) => {
    let p = EE(h.target.value), m = new Date(t);
    m.setHours(p.getHours()), m.setMinutes(p.getMinutes());
    let f = m.getTime();
    f && r(f), i(!!f);
  }, g = Ue(e);
  return a.createElement(wE, null, a.createElement(qe.Input, { type: "date", max: "9999-12-31", ref: u, id: `${g}-date`, name: `${g}-date`, onChange: c, onFocus: n, onBlur: o }), a.createElement(qe.Input, { type: "time", id: `${g}-time`, name: `${g}-time`, ref: s, onChange: d, onFocus: n, onBlur: o }), l ? null : a.createElement("div", null, "invalid"));
}, CE = k.label({ display: "flex" }), kE = (e) => {
  let t = parseFloat(e);
  return Number.isNaN(t) ? void 0 : t;
}, _E = ({ name: e, value: t, onChange: r, min: n, max: o, step: l, onBlur: i, onFocus: u }) => {
  let [s, c] = U(typeof t == "number" ? t : ""), [d, g] = U(!1), [h, p] = U(null), m = ae((y) => {
    c(y.target.value);
    let x = parseFloat(y.target.value);
    Number.isNaN(x) ? p(new Error(`'${y.target.value}' is not a number`)) : (r(x), p(null));
  }, [r, p]), f = ae(() => {
    c("0"), r(0), g(!0);
  }, [g]), E = ce(null);
  return ie(() => {
    d && E.current && E.current.select();
  }, [d]), ie(() => {
    s !== (typeof t == "number" ? t : "") && c(t);
  }, [t]), !d && t === void 0 ? a.createElement(qe.Button, { id: wn(e), onClick: f }, "Set number") : a.createElement(CE, null, a.createElement(qe.Input, { ref: E, id: Ue(e), type: "number", onChange: m, size: "flex", placeholder: "Edit number...", value: s, valid: h ? "error" : null, autoFocus: d, name: e, min: n, max: o, step: l, onFocus: u, onBlur: i }));
}, Sc = (e, t) => {
  let r = t && Object.entries(t).find(([n, o]) => o === e);
  return r ? r[0] : void 0;
}, Wa = (e, t) => e && t ? Object.entries(t).filter((r) => e.includes(r[1])).map((r) => r[0]) : [], Cc = (e, t) => e && t && e.map((r) => t[r]), OE = k.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), TE = k.span({}), FE = k.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Li = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return Wo.warn(`Checkbox with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = Wa(r, t), [i, u] = U(l), s = (d) => {
    let g = d.target.value, h = [...i];
    h.includes(g) ? h.splice(h.indexOf(g), 1) : h.push(g), n(Cc(h, t)), u(h);
  };
  ie(() => {
    u(Wa(r, t));
  }, [r]);
  let c = Ue(e);
  return a.createElement(OE, { isInline: o }, Object.keys(t).map((d, g) => {
    let h = `${c}-${g}`;
    return a.createElement(FE, { key: h, htmlFor: h }, a.createElement("input", { type: "checkbox", id: h, name: h, value: d, onChange: s, checked: i == null ? void 0 : i.includes(d) }), a.createElement(TE, null, d));
  }));
}, RE = k.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), DE = k.span({}), LE = k.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Mi = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return Wo.warn(`Radio with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = Sc(r, t), i = Ue(e);
  return a.createElement(RE, { isInline: o }, Object.keys(t).map((u, s) => {
    let c = `${i}-${s}`;
    return a.createElement(LE, { key: c, htmlFor: c }, a.createElement("input", { type: "radio", id: c, name: c, value: u, onChange: (d) => n(t[d.currentTarget.value]), checked: u === l }), a.createElement(DE, null, u));
  }));
}, ME = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, kc = k.select(({ theme: e }) => ({ ...ME, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), _c = k.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), Bi = "Choose option...", BE = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (u) => {
    n(r[u.currentTarget.value]);
  }, l = Sc(t, r) || Bi, i = Ue(e);
  return a.createElement(_c, null, a.createElement(we, { icon: "arrowdown" }), a.createElement(kc, { id: i, value: l, onChange: o }, a.createElement("option", { key: "no-selection", disabled: !0 }, Bi), Object.keys(r).map((u) => a.createElement("option", { key: u }, u))));
}, IE = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (u) => {
    let s = Array.from(u.currentTarget.options).filter((c) => c.selected).map((c) => c.value);
    n(Cc(s, r));
  }, l = Wa(t, r), i = Ue(e);
  return a.createElement(_c, null, a.createElement(kc, { id: i, multiple: !0, value: l, onChange: o }, Object.keys(r).map((u) => a.createElement("option", { key: u }, u))));
}, Ii = (e) => {
  let { name: t, options: r } = e;
  return r ? e.isMulti ? a.createElement(IE, { ...e }) : a.createElement(BE, { ...e }) : (Wo.warn(`Select with no options: ${t}`), a.createElement(a.Fragment, null, "-"));
}, $E = (e, t) => Array.isArray(e) ? e.reduce((r, n) => (r[(t == null ? void 0 : t[n]) || String(n)] = n, r), {}) : e, jE = { check: Li, "inline-check": Li, radio: Mi, "inline-radio": Mi, select: Ii, "multi-select": Ii }, Yt = (e) => {
  let { type: t = "select", labels: r, argType: n } = e, o = { ...e, options: n ? $E(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") }, l = jE[t];
  if (l)
    return a.createElement(l, { ...o });
  throw new Error(`Unknown options type: ${t}`);
}, Jo = "value", HE = "key", NE = "Error", ZE = "Object", PE = "Array", VE = "String", zE = "Number", qE = "Boolean", UE = "Date", WE = "Null", GE = "Undefined", YE = "Function", KE = "Symbol", Oc = "ADD_DELTA_TYPE", Tc = "REMOVE_DELTA_TYPE", Fc = "UPDATE_DELTA_TYPE";
function wt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function Rc(e, t) {
  let r = wt(e), n = wt(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var Xo = class extends ct {
  constructor(e) {
    super(e), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state, { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(), r && t && typeof t.focus == "function" && t.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.onSubmit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: o } = this.props, { inputRefKey: l, inputRefValue: i } = this.state, u = {};
    if (!t) {
      if (!l.value)
        return;
      u.key = l.value;
    }
    u.newValue = r(!1, n, o, u.key, i.value), e(u);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: t, addButtonElement: r, cancelButtonElement: n, inputElementGenerator: o, keyPath: l, deep: i } = this.props, u = me(r, { onClick: this.onSubmit }), s = me(n, { onClick: e }), c = o(Jo, l, i), d = me(c, { placeholder: "Value", ref: this.refInputValue }), g = null;
    if (!t) {
      let h = o(HE, l, i);
      g = me(h, { placeholder: "Key", ref: this.refInputKey });
    }
    return a.createElement("span", { className: "rejt-add-value-node" }, g, d, s, u);
  }
};
Xo.defaultProps = { onlyValue: !1, addButtonElement: a.createElement("button", null, "+"), cancelButtonElement: a.createElement("button", null, "c") };
var Dc = class extends ct {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { data: e.data, name: e.name, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: o } = this.props, l = n.length;
    o(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: l } = this.state, i = n[e];
      t(e, o, l, i).then(() => {
        let u = { keyPath: o, deep: l, key: e, oldValue: i, type: Tc };
        n.splice(e, 1), this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(o[o.length - 1], n), c(u);
      }).catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state, { beforeAddAction: o, logger: l } = this.props;
    o(t.length, r, n, e).then(() => {
      let i = [...t, e];
      this.setState({ data: i }), this.handleAddValueCancel();
      let { onUpdate: u, onDeltaUpdate: s } = this.props;
      u(r[r.length - 1], i), s({ type: Oc, keyPath: r, deep: n, key: i.length - 1, newValue: e });
    }).catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: l, keyPath: i, nextDeep: u } = this.state, s = l[e];
      o(e, i, u, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: c, onDeltaUpdate: d } = this.props;
        c(i[i.length - 1], l), d({ type: Fc, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r(void 0);
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state, { handleRemove: o, readOnly: l, getStyle: i, dataType: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = i(e, t, r, n, u), g = l(e, t, r, n, u), h = me(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "[...] ", t.length, " ", t.length === 1 ? "item" : "items"), !g && h);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: g, addButtonElement: h, cancelButtonElement: p, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: E, minusMenuElement: y, plusMenuElement: x, beforeRemoveAction: b, beforeAddAction: v, beforeUpdateAction: A, logger: w, onSubmitValueParser: C } = this.props, { minus: S, plus: _, delimiter: O, ul: T, addForm: R } = d(e, t, r, n, g), F = c(e, t, r, n, g), j = me(x, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: _ }), D = me(y, { onClick: u, className: "rejt-minus-menu", style: S }), L = !0, H = "[", P = "]";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, H), !o && j, a.createElement("ul", { className: "rejt-not-collapsed-list", style: T }, t.map((I, N) => a.createElement(qn, { key: N, name: N.toString(), data: I, keyPath: r, deep: l, isCollapsed: i, handleRemove: this.handleRemoveItem(N), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: h, cancelButtonElement: p, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: E, minusMenuElement: y, plusMenuElement: x, beforeRemoveAction: b, beforeAddAction: v, beforeUpdateAction: A, logger: w, onSubmitValueParser: C }))), !F && o && a.createElement("div", { className: "rejt-add-form", style: R }, a.createElement(Xo, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: L, addButtonElement: h, cancelButtonElement: p, inputElementGenerator: f, keyPath: r, deep: n, onSubmitValueParser: C })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, P), !F && D);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { dataType: l, getStyle: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = i(e, r, n, o, l);
    return a.createElement("div", { className: "rejt-array-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
Dc.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var Lc = class extends ct {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state, { readOnly: i, dataType: u } = this.props, s = i(r, n, o, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: l, name: i, deep: u } = this.state;
    if (!l)
      return;
    let s = n(!0, o, u, i, l.value);
    e({ value: s, key: i }).then(() => {
      Rc(t, s) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: g, textareaElementGenerator: h, minusMenuElement: p, keyPath: m } = this.props, f = c(e, i, n, o, s), E = null, y = null, x = u(e, i, n, o, s);
    if (r && !x) {
      let b = h(Jo, m, o, e, i, s), v = me(d, { onClick: this.handleEdit }), A = me(g, { onClick: this.handleCancelEdit }), w = me(b, { ref: this.refInput, defaultValue: i });
      E = a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, w, " ", A, v), y = null;
    } else {
      E = a.createElement("span", { className: "rejt-value", style: f.value, onClick: x ? null : this.handleEditMode }, t);
      let b = me(p, { onClick: l, className: "rejt-minus-menu", style: f.minus });
      y = x ? null : b;
    }
    return a.createElement("li", { className: "rejt-function-value-node", style: f.li }, a.createElement("span", { className: "rejt-name", style: f.name }, e, " :", " "), E, y);
  }
};
Lc.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var qn = class extends ct {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state, { isCollapsed: o, handleRemove: l, handleUpdateValue: i, onUpdate: u, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: g, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, textareaElementGenerator: f, minusMenuElement: E, plusMenuElement: y, beforeRemoveAction: x, beforeAddAction: b, beforeUpdateAction: v, logger: A, onSubmitValueParser: w } = this.props, C = () => !0, S = wt(e);
    switch (S) {
      case NE:
        return a.createElement(Ga, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: C, dataType: S, getStyle: d, addButtonElement: g, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, textareaElementGenerator: f, minusMenuElement: E, plusMenuElement: y, beforeRemoveAction: x, beforeAddAction: b, beforeUpdateAction: v, logger: A, onSubmitValueParser: w });
      case ZE:
        return a.createElement(Ga, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: S, getStyle: d, addButtonElement: g, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, textareaElementGenerator: f, minusMenuElement: E, plusMenuElement: y, beforeRemoveAction: x, beforeAddAction: b, beforeUpdateAction: v, logger: A, onSubmitValueParser: w });
      case PE:
        return a.createElement(Dc, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: S, getStyle: d, addButtonElement: g, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, textareaElementGenerator: f, minusMenuElement: E, plusMenuElement: y, beforeRemoveAction: x, beforeAddAction: b, beforeUpdateAction: v, logger: A, onSubmitValueParser: w });
      case VE:
        return a.createElement(xt, { name: t, value: `"${e}"`, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case zE:
        return a.createElement(xt, { name: t, value: e, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case qE:
        return a.createElement(xt, { name: t, value: e ? "true" : "false", originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case UE:
        return a.createElement(xt, { name: t, value: e.toISOString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: C, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case WE:
        return a.createElement(xt, { name: t, value: "null", originalValue: "null", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case GE:
        return a.createElement(xt, { name: t, value: "undefined", originalValue: "undefined", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case YE:
        return a.createElement(Lc, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, textareaElementGenerator: f, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      case KE:
        return a.createElement(xt, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: C, dataType: S, getStyle: d, cancelButtonElement: h, editButtonElement: p, inputElementGenerator: m, minusMenuElement: E, logger: A, onSubmitValueParser: w });
      default:
        return null;
    }
  }
};
qn.defaultProps = { keyPath: [], deep: 0 };
var Ga = class extends ct {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    this.state = { name: e.name, data: e.data, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: o } = this.props, l = n.length;
    o(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: o } = this.state, { beforeAddAction: l, logger: i } = this.props;
    l(e, n, o, t).then(() => {
      r[e] = t, this.setState({ data: r }), this.handleAddValueCancel();
      let { onUpdate: u, onDeltaUpdate: s } = this.props;
      u(n[n.length - 1], r), s({ type: Oc, keyPath: n, deep: o, key: e, newValue: t });
    }).catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: l } = this.state, i = n[e];
      t(e, o, l, i).then(() => {
        let u = { keyPath: o, deep: l, key: e, oldValue: i, type: Tc };
        delete n[e], this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(o[o.length - 1], n), c(u);
      }).catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: l, keyPath: i, nextDeep: u } = this.state, s = l[e];
      o(e, i, u, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: c, onDeltaUpdate: d } = this.props;
        c(i[i.length - 1], l), d({ type: Fc, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r();
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state, { handleRemove: o, readOnly: l, dataType: i, getStyle: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = u(e, n, t, r, i), g = Object.getOwnPropertyNames(n), h = l(e, n, t, r, i), p = me(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "{...}", " ", g.length, " ", g.length === 1 ? "key" : "keys"), !h && p);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: g, addButtonElement: h, cancelButtonElement: p, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: E, minusMenuElement: y, plusMenuElement: x, beforeRemoveAction: b, beforeAddAction: v, beforeUpdateAction: A, logger: w, onSubmitValueParser: C } = this.props, { minus: S, plus: _, addForm: O, ul: T, delimiter: R } = d(e, t, r, n, g), F = Object.getOwnPropertyNames(t), j = c(e, t, r, n, g), D = me(x, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: _ }), L = me(y, { onClick: u, className: "rejt-minus-menu", style: S }), H = F.map((N) => a.createElement(qn, { key: N, name: N, data: t[N], keyPath: r, deep: o, isCollapsed: i, handleRemove: this.handleRemoveValue(N), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: h, cancelButtonElement: p, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: E, minusMenuElement: y, plusMenuElement: x, beforeRemoveAction: b, beforeAddAction: v, beforeUpdateAction: A, logger: w, onSubmitValueParser: C })), P = "{", I = "}";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: R }, P), !j && D, a.createElement("ul", { className: "rejt-not-collapsed-list", style: T }, H), !j && l && a.createElement("div", { className: "rejt-add-form", style: O }, a.createElement(Xo, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: h, cancelButtonElement: p, inputElementGenerator: f, keyPath: r, deep: n, onSubmitValueParser: C })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: R }, I), !j && L);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { getStyle: l, dataType: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = l(e, r, n, o, i);
    return a.createElement("div", { className: "rejt-object-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
Ga.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var xt = class extends ct {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state, { readOnly: i, dataType: u } = this.props, s = i(r, n, o, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: l, name: i, deep: u } = this.state;
    if (!l)
      return;
    let s = n(!0, o, u, i, l.value);
    e({ value: s, key: i }).then(() => {
      Rc(t, s) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: g, inputElementGenerator: h, minusMenuElement: p, keyPath: m } = this.props, f = c(e, i, n, o, s), E = u(e, i, n, o, s), y = r && !E, x = h(Jo, m, o, e, i, s), b = me(d, { onClick: this.handleEdit }), v = me(g, { onClick: this.handleCancelEdit }), A = me(x, { ref: this.refInput, defaultValue: JSON.stringify(i) }), w = me(p, { onClick: l, className: "rejt-minus-menu", style: f.minus });
    return a.createElement("li", { className: "rejt-value-node", style: f.li }, a.createElement("span", { className: "rejt-name", style: f.name }, e, " : "), y ? a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, A, " ", v, b) : a.createElement("span", { className: "rejt-value", style: f.value, onClick: E ? null : this.handleEditMode }, String(t)), !E && !y && w);
  }
};
xt.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var JE = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, XE = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, QE = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function e6(e) {
  let t = e;
  if (t.indexOf("function") === 0)
    return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
var Mc = class extends ct {
  constructor(e) {
    super(e), this.state = { data: e.data, rootName: e.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName ? { data: e.data, rootName: e.rootName } : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state, { isCollapsed: r, onDeltaUpdate: n, readOnly: o, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElement: c, textareaElement: d, minusMenuElement: g, plusMenuElement: h, beforeRemoveAction: p, beforeAddAction: m, beforeUpdateAction: f, logger: E, onSubmitValueParser: y, fallback: x = null } = this.props, b = wt(e), v = o;
    wt(o) === "Boolean" && (v = () => o);
    let A = c;
    c && wt(c) !== "Function" && (A = () => c);
    let w = d;
    return d && wt(d) !== "Function" && (w = () => d), b === "Object" || b === "Array" ? a.createElement("div", { className: "rejt-tree" }, a.createElement(qn, { data: e, name: t, deep: -1, isCollapsed: r, onUpdate: this.onUpdate, onDeltaUpdate: n, readOnly: v, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElementGenerator: A, textareaElementGenerator: w, minusMenuElement: g, plusMenuElement: h, handleRemove: this.removeRoot, beforeRemoveAction: p, beforeAddAction: m, beforeUpdateAction: f, logger: E, onSubmitValueParser: y })) : x;
  }
};
Mc.defaultProps = { rootName: "root", isCollapsed: (e, t) => t !== -1, getStyle: (e, t, r, n, o) => {
  switch (o) {
    case "Object":
    case "Error":
      return JE;
    case "Array":
      return XE;
    default:
      return QE;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, t, r, n, o) => e6(o), inputElement: () => a.createElement("input", null), textareaElement: () => a.createElement("textarea", null), fallback: null };
var { window: t6 } = je, r6 = k.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), Aa = k.button(({ theme: e, primary: t }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: t ? e.color.secondary : "transparent", color: t ? e.color.lightest : e.color.dark, fontWeight: t ? "bold" : "normal", cursor: "pointer", order: t ? "initial" : 9 })), $i = k(we)(({ theme: e, icon: t, disabled: r }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: r ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": r ? {} : { color: t === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), ji = k.input(({ theme: e, placeholder: t }) => ({ outline: 0, margin: t ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: t === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), n6 = k(jt)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), a6 = k(qe.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), o6 = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, l6 = (e) => {
  e.currentTarget.dispatchEvent(new t6.KeyboardEvent("keydown", o6));
}, i6 = (e) => {
  e.currentTarget.select();
}, s6 = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), Hi = ({ name: e, value: t, onChange: r }) => {
  let n = f1(), o = vn(() => t && nv(t), [t]), l = o != null, [i, u] = U(!l), [s, c] = U(null), d = ae((E) => {
    try {
      E && r(JSON.parse(E)), c(void 0);
    } catch (y) {
      c(y);
    }
  }, [r]), [g, h] = U(!1), p = ae(() => {
    r({}), h(!0);
  }, [h]), m = ce(null);
  if (ie(() => {
    g && m.current && m.current.select();
  }, [g]), !l)
    return a.createElement(qe.Button, { id: wn(e), onClick: p }, "Set object");
  let f = a.createElement(a6, { ref: m, id: Ue(e), name: e, defaultValue: t === null ? "" : JSON.stringify(t, null, 2), onBlur: (E) => d(E.target.value), placeholder: "Edit JSON string...", autoFocus: g, valid: s ? "error" : null });
  return a.createElement(r6, null, ["Object", "Array"].includes(wt(o)) && a.createElement(n6, { href: "#", onClick: (E) => {
    E.preventDefault(), u((y) => !y);
  } }, a.createElement(we, { icon: i ? "eyeclose" : "eye" }), a.createElement("span", null, "RAW")), i ? f : a.createElement(Mc, { data: o, rootName: e, onFullyUpdate: r, getStyle: s6(n), cancelButtonElement: a.createElement(Aa, { type: "button" }, "Cancel"), editButtonElement: a.createElement(Aa, { type: "submit" }, "Save"), addButtonElement: a.createElement(Aa, { type: "submit", primary: !0 }, "Save"), plusMenuElement: a.createElement($i, { icon: "add" }), minusMenuElement: a.createElement($i, { icon: "subtract" }), inputElement: (E, y, x, b) => b ? a.createElement(ji, { onFocus: i6, onBlur: l6 }) : a.createElement(ji, null), fallback: f }));
}, u6 = k.input(({ theme: e, min: t, max: r, value: n }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${gt(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${gt(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${tt(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: gt(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${gt(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${gt(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${tt(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Lt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${gt(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), Bc = k.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), c6 = k(Bc)(({ numberOFDecimalsPlaces: e, max: t }) => ({ width: `${e + t.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), d6 = k.div({ display: "flex", alignItems: "center", width: "100%" });
function p6(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var f6 = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: l = 1, onBlur: i, onFocus: u }) => {
  let s = (g) => {
    r(kE(g.target.value));
  }, c = t !== void 0, d = vn(() => p6(l), [l]);
  return a.createElement(d6, null, a.createElement(Bc, null, n), a.createElement(u6, { id: Ue(e), type: "range", onChange: s, name: e, value: t, min: n, max: o, step: l, onFocus: u, onBlur: i }), a.createElement(c6, { numberOFDecimalsPlaces: d, max: o }, c ? t.toFixed(d) : "--", " / ", o));
}, m6 = k.label({ display: "flex" }), g6 = k.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), h6 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: l }) => {
  let i = (g) => {
    r(g.target.value);
  }, [u, s] = U(!1), c = ae(() => {
    r(""), s(!0);
  }, [s]);
  if (t === void 0)
    return a.createElement(qe.Button, { id: wn(e), onClick: c }, "Set string");
  let d = typeof t == "string";
  return a.createElement(m6, null, a.createElement(qe.Textarea, { id: Ue(e), maxLength: l, onChange: i, size: "flex", placeholder: "Edit string...", autoFocus: u, valid: d ? null : "error", name: e, value: d ? t : "", onFocus: n, onBlur: o }), l && a.createElement(g6, { isMaxed: (t == null ? void 0 : t.length) === l }, (t == null ? void 0 : t.length) ?? 0, " / ", l));
}, b6 = k(qe.Input)({ padding: 10 });
function y6(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var v6 = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
  let o = ce(null);
  function l(i) {
    if (!i.target.files)
      return;
    let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
    e(u), y6(n);
  }
  return ie(() => {
    n == null && o.current && (o.current.value = null);
  }, [n, t]), a.createElement(b6, { ref: o, id: Ue(t), type: "file", name: t, multiple: !0, onChange: l, accept: r, size: "flex" });
}, E6 = Zt(() => import("./storybook-485191a7.es.js")), x6 = (e) => a.createElement(jr, { fallback: a.createElement("div", null) }, a.createElement(E6, { ...e })), A6 = { array: Hi, object: Hi, boolean: yE, color: x6, date: SE, number: _E, check: Yt, "inline-check": Yt, radio: Yt, "inline-radio": Yt, select: Yt, "multi-select": Yt, range: f6, text: h6, file: v6 }, Ni = () => a.createElement(a.Fragment, null, "-"), w6 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
  let { key: o, control: l } = e, [i, u] = U(!1), [s, c] = U({ value: t });
  ie(() => {
    i || c({ value: t });
  }, [i, t]);
  let d = ae((f) => (c({ value: f }), r({ [o]: f }), f), [r, o]), g = ae(() => u(!1), []), h = ae(() => u(!0), []);
  if (!l || l.disable)
    return n ? a.createElement(It, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : a.createElement(Ni, null);
  let p = { name: o, argType: e, value: s.value, onChange: d, onBlur: g, onFocus: h }, m = A6[l.type] || Ni;
  return a.createElement(m, { ...p, ...l, controlType: l.type });
}, S6 = k.span({ fontWeight: "bold" }), C6 = k.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), k6 = k.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...bt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), _6 = k.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 4 : 0 })), O6 = k.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 12 : 0, marginBottom: 12 })), T6 = k.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })), Qr = (e) => {
  var f;
  let [t, r] = U(!1), { row: n, updateArgs: o, compact: l, expandable: i, initialExpandedArgs: u } = e, { name: s, description: c } = n, d = n.table || {}, g = d.type || n.type, h = d.defaultValue || n.defaultValue, p = (f = n.type) == null ? void 0 : f.required, m = c != null && c !== "";
  return a.createElement("tr", { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) }, a.createElement(T6, { expandable: i }, a.createElement(S6, null, s), p ? a.createElement(C6, { title: "Required" }, "*") : null), l ? null : a.createElement("td", null, m && a.createElement(k6, null, a.createElement(lc, null, c)), d.jsDocTags != null ? a.createElement(a.Fragment, null, a.createElement(O6, { hasDescription: m }, a.createElement(xa, { value: g, initialExpandedArgs: u })), a.createElement(lE, { tags: d.jsDocTags })) : a.createElement(_6, { hasDescription: m }, a.createElement(xa, { value: g, initialExpandedArgs: u }))), l ? null : a.createElement("td", null, a.createElement(xa, { value: h, initialExpandedArgs: u })), o ? a.createElement("td", null, a.createElement(w6, { ...e, isHovered: t })) : null);
}, F6 = k(we)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.3, e.color.defaultText), border: "none", display: "inline-block" })), R6 = k.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), D6 = k.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), L6 = k.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), M6 = k.td(() => ({ position: "relative" })), B6 = k.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${Lt(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), Zi = k.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), wa = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
  let [l, i] = U(n), u = e === "subsection" ? L6 : D6, s = (r == null ? void 0 : r.length) || 0, c = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "", d = l ? "arrowdown" : "arrowright", g = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
  return a.createElement(a.Fragment, null, a.createElement(B6, { title: g }, a.createElement(u, { colSpan: 1 }, a.createElement(Zi, { onClick: (h) => i(!l), tabIndex: 0 }, g), a.createElement(R6, null, a.createElement(F6, { icon: d }), t)), a.createElement(M6, { colSpan: o - 1 }, a.createElement(Zi, { onClick: (h) => i(!l), tabIndex: -1, style: { outline: "none" } }, g), l ? null : c)), l ? r : null);
}, en = k.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), ye = k.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), ue = k.div(({ theme: e, width: t, height: r }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: t || "100%", height: r || 16, borderRadius: 3 })), ve = [2, 4, 2, 2], I6 = () => a.createElement(a.Fragment, null, a.createElement(en, null, a.createElement(ye, { numColumn: ve[0] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[1] }, a.createElement(ue, { width: "30%" })), a.createElement(ye, { numColumn: ve[2] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(en, null, a.createElement(ye, { numColumn: ve[0] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(ye, { numColumn: ve[2] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(en, null, a.createElement(ye, { numColumn: ve[0] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(ye, { numColumn: ve[2] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(en, null, a.createElement(ye, { numColumn: ve[0] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(ye, { numColumn: ve[2] }, a.createElement(ue, { width: "60%" })), a.createElement(ye, { numColumn: ve[3] }, a.createElement(ue, { width: "60%" })))), $6 = k.div(({ inAddonPanel: e, theme: t }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${t.appBorderColor}`, borderRadius: e ? 0 : t.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: t.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), j6 = k.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), H6 = k.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textColor })), N6 = k.div(({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textMutedColor })), Z6 = k.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), P6 = k.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), V6 = ({ inAddonPanel: e }) => {
  let [t, r] = U(!0);
  return ie(() => {
    let n = setTimeout(() => {
      r(!1);
    }, 100);
    return () => clearTimeout(n);
  }, []), t ? null : a.createElement($6, { inAddonPanel: e }, a.createElement(j6, null, a.createElement(H6, null, e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated"), a.createElement(N6, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")), a.createElement(Z6, null, e && a.createElement(a.Fragment, null, a.createElement(It, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, a.createElement(we, { icon: "video" }), " Watch 5m video"), a.createElement(P6, null), a.createElement(It, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Read docs")), !e && a.createElement(It, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Learn how to set that up")));
}, z6 = k.table(({ theme: e, compact: t, inAddonPanel: r }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: r ? 0 : 25, marginBottom: r ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...t ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...t ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...t ? null : { width: "25%" } }, th: { color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: r ? 0 : 1, marginRight: r ? 0 : 1, tbody: { ...r ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...r ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), q6 = k(jt)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), U6 = k.span({ display: "flex", justifyContent: "space-between" }), W6 = { alpha: (e, t) => e.name.localeCompare(t.name), requiredFirst: (e, t) => {
  var r, n;
  return +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) || e.name.localeCompare(t.name);
}, none: void 0 }, G6 = (e, t) => {
  let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!e)
    return r;
  Object.entries(e).forEach(([l, i]) => {
    let { category: u, subcategory: s } = (i == null ? void 0 : i.table) || {};
    if (u) {
      let c = r.sections[u] || { ungrouped: [], subsections: {} };
      if (!s)
        c.ungrouped.push({ key: l, ...i });
      else {
        let d = c.subsections[s] || [];
        d.push({ key: l, ...i }), c.subsections[s] = d;
      }
      r.sections[u] = c;
    } else if (s) {
      let c = r.ungroupedSubsections[s] || [];
      c.push({ key: l, ...i }), r.ungroupedSubsections[s] = c;
    } else
      r.ungrouped.push({ key: l, ...i });
  });
  let n = W6[t], o = (l) => n ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {}) : l;
  return { ungrouped: r.ungrouped.sort(n), ungroupedSubsections: o(r.ungroupedSubsections), sections: Object.keys(r.sections).reduce((l, i) => ({ ...l, [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: o(r.sections[i].subsections) } }), {}) };
}, Y6 = (e, t, r) => {
  try {
    return E0(e, t, r);
  } catch (n) {
    return _7.warn(n.message), !1;
  }
}, K6 = (e) => {
  let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: o, initialExpandedArgs: l, sort: i = "none", isLoading: u } = e;
  if ("error" in e) {
    let { error: x } = e;
    return a.createElement(xc, null, x, " ", a.createElement(It, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  }
  if (u)
    return a.createElement(I6, null);
  let { rows: s, args: c, globals: d } = "rows" in e && e, g = G6(Lg(s, (x) => {
    var b;
    return !((b = x == null ? void 0 : x.table) != null && b.disable) && Y6(x, c || {}, d || {});
  }), i), h = g.ungrouped.length === 0, p = Object.entries(g.sections).length === 0, m = Object.entries(g.ungroupedSubsections).length === 0;
  if (h && p && m)
    return a.createElement(V6, { inAddonPanel: o });
  let f = 1;
  t && (f += 1), n || (f += 2);
  let E = Object.keys(g.sections).length > 0, y = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l };
  return a.createElement(Ro, null, a.createElement(z6, { compact: n, inAddonPanel: o, className: "docblock-argstable sb-unstyled" }, a.createElement("thead", { className: "docblock-argstable-head" }, a.createElement("tr", null, a.createElement("th", null, a.createElement("span", null, "Name")), n ? null : a.createElement("th", null, a.createElement("span", null, "Description")), n ? null : a.createElement("th", null, a.createElement("span", null, "Default")), t ? a.createElement("th", null, a.createElement(U6, null, "Control", " ", !u && r && a.createElement(q6, { onClick: () => r(), title: "Reset controls" }, a.createElement(we, { icon: "undo", "aria-hidden": !0 })))) : null)), a.createElement("tbody", { className: "docblock-argstable-body" }, g.ungrouped.map((x) => a.createElement(Qr, { key: x.key, row: x, arg: c && c[x.key], ...y })), Object.entries(g.ungroupedSubsections).map(([x, b]) => a.createElement(wa, { key: x, label: x, level: "subsection", colSpan: f }, b.map((v) => a.createElement(Qr, { key: v.key, row: v, arg: c && c[v.key], expandable: E, ...y })))), Object.entries(g.sections).map(([x, b]) => a.createElement(wa, { key: x, label: x, level: "section", colSpan: f }, b.ungrouped.map((v) => a.createElement(Qr, { key: v.key, row: v, arg: c && c[v.key], ...y })), Object.entries(b.subsections).map(([v, A]) => a.createElement(wa, { key: v, label: v, level: "subsection", colSpan: f }, A.map((w) => a.createElement(Qr, { key: w.key, row: w, arg: c && c[w.key], expandable: E, ...y })))))))));
};
k.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
k.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
k.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
k.div(re, ({ theme: e }) => ({ ...zn(e), margin: "25px 0 40px", padding: "30px 20px" }));
k.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
k.div(({ theme: e }) => ({ color: e.base === "light" ? te(0.2, e.color.defaultText) : te(0.6, e.color.defaultText) }));
k.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
k.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
k.div({ display: "flex", flexDirection: "row" });
k.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
k.div(({ theme: e }) => ({ ...zn(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
k.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
k.div({ flex: 1, display: "flex", flexDirection: "row" });
k.div({ display: "flex", alignItems: "flex-start" });
k.div({ flex: "0 0 30%" });
k.div({ flex: 1 });
k.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
k.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
k.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
k.div(({ theme: e }) => ({ ...zn(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
k.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
k.div({ display: "flex", flexFlow: "row wrap" });
var J6 = (e) => `anchor--${e}`, Ic = ({ storyId: e, children: t }) => a.createElement("div", { id: J6(e), className: "sb-anchor" }, t);
je && je.__DOCS_CONTEXT__ === void 0 && (je.__DOCS_CONTEXT__ = En(null), je.__DOCS_CONTEXT__.displayName = "DocsContext");
var Re = je ? je.__DOCS_CONTEXT__ : En(null), Un = (e, t) => Se(Re).resolveOf(e, t);
function X6(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function Q6(e, t) {
  let r = Qo([e], t);
  return r && r[0];
}
function Qo(e, t) {
  let [r, n] = U({});
  return ie(() => {
    Promise.all(e.map(async (o) => {
      let l = await t.loadStory(o);
      n((i) => i[o] === l ? i : { ...i, [o]: l });
    }));
  }), e.map((o) => {
    if (r[o])
      return r[o];
    try {
      return t.storyById(o);
    } catch {
      return null;
    }
  });
}
function $c(e) {
  return x7(e);
}
var jc = En({ sources: {} }), Hc = "--unknown--", ex = ({ children: e, channel: t }) => {
  let [r, n] = U({});
  return ie(() => {
    let o = (l, i = null, u = !1) => {
      let { id: s, args: c = void 0, source: d, format: g } = typeof l == "string" ? { id: l, source: i, format: u } : l, h = c ? $c(c) : Hc;
      n((p) => ({ ...p, [s]: { ...p[s], [h]: { code: d, format: g } } }));
    };
    return t.on(il, o), () => t.off(il, o);
  }, []), a.createElement(jc.Provider, { value: { sources: r } }, e);
}, tx = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(tx || {}), rx = (e) => {
  let t = e.map((r) => {
    var n, o;
    return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : o.state;
  }).filter(Boolean);
  return t.length === 0 ? "closed" : t[0];
}, nx = (e, t, r) => {
  let { sources: n } = r, o = n == null ? void 0 : n[e];
  return (o == null ? void 0 : o[$c(t)]) || (o == null ? void 0 : o[Hc]) || { code: "" };
}, ax = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
  var s, c, d, g, h, p;
  let { __isArgsStory: o } = t.parameters, l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {}, i = r || l.type || Kn.AUTO;
  if (l.code !== void 0)
    return l.code;
  let u = i === Kn.DYNAMIC || i === Kn.AUTO && e && o ? e : l.originalSource || "";
  return l.transformSource && he(_e`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (c = t.parameters.docs) != null && c.transformSource && he(_e`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (d = t.parameters.jsx) != null && d.transformSource && he(_e`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), ((p = n ?? l.transform ?? l.transformSource ?? ((g = t.parameters.docs) == null ? void 0 : g.transformSource) ?? ((h = t.parameters.jsx) == null ? void 0 : h.transformSource)) == null ? void 0 : p(u, t)) || u;
}, Nc = (e, t, r) => {
  var p, m, f;
  let n = e.ids || (e.id ? [e.id] : []), o = Qo(n, t), l = o, { of: i } = e;
  if ("of" in e && i === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (i)
    l = [t.resolveOf(i, ["story"]).story];
  else if (l.length === 0)
    try {
      l = [t.storyById()];
    } catch {
    }
  if (!o.every(Boolean))
    return { error: "Oh no! The source is not available.", state: "none" };
  let u = ((f = (m = (p = l[0]) == null ? void 0 : p.parameters) == null ? void 0 : m.docs) == null ? void 0 : f.source) || {}, { code: s } = e, c = e.format ?? u.format, d = e.language ?? u.language ?? "jsx", g = e.dark ?? u.dark ?? !1;
  s || (s = l.map((E, y) => {
    var A, w;
    if (!E)
      return "";
    let x = t.getStoryContext(E), b = e.__forceInitialArgs ? x.initialArgs : x.unmappedArgs, v = nx(E.id, b, r);
    return y === 0 && (c = v.format ?? ((w = (A = E.parameters.docs) == null ? void 0 : A.source) == null ? void 0 : w.format) ?? !1), ax({ snippet: v.code, storyContext: { ...x, args: b }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let h = rx(l);
  return s ? { code: s, format: c, language: d, dark: g, state: h } : { error: "Oh no! The source is not available.", state: h };
}, Zc = (e, t) => {
  let { id: r, of: n, meta: o, story: l } = e;
  if ("of" in e && n === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (r)
    return he(_e`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r;
  let { name: i } = e;
  return i ? (he(_e`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), t.storyIdByName(i)) : (l && he(_e`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), o && t.referenceMeta(o, !1), t.resolveOf(n || l || "story", ["story"]).story.id);
}, ox = (e, t, r) => {
  let { parameters: n = {} } = t || {}, { docs: o = {} } = n, l = o.story || {};
  if (o.disable)
    return null;
  let { inlineStories: i, iframeHeight: u } = o;
  typeof i < "u" && he(_e`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let s = e.inline ?? l.inline ?? i ?? !1;
  if (typeof u < "u" && he(_e`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), s) {
    let d = e.height ?? l.height, g = e.autoplay ?? l.autoplay ?? !1;
    return { story: t, inline: !0, height: d, autoplay: g, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: r.renderStoryToElement };
  }
  let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? "100px";
  return { story: t, inline: !1, height: c, primary: !!e.__primary };
}, lx = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let t = Se(Re), r = Zc(e, t), n = Q6(r, t);
  if (!n)
    return a.createElement(Ko, null);
  let o = ox(e, n, t);
  return o ? a.createElement(K7, { ...o }) : null;
}, ix = ({ withSource: e, mdxSource: t, children: r, layout: n, ...o }, l, i) => {
  let u = Ht.toArray(r).filter((h) => h.props && (h.props.id || h.props.name || h.props.of)).map((h) => Zc(h.props, l)), s = Qo(u, l), c = s.some((h) => !h), d = Nc({ ...t ? { code: decodeURI(t) } : { ids: u }, ...o.of && { of: o.of } }, l, i);
  if (e === "none")
    return { isLoading: c, previewProps: o };
  let g = n;
  return Ht.forEach(r, (h) => {
    var p, m;
    g || (g = (m = (p = h == null ? void 0 : h.props) == null ? void 0 : p.parameters) == null ? void 0 : m.layout);
  }), s.forEach((h) => {
    var p, m;
    g || !h || (g = (h == null ? void 0 : h.parameters.layout) ?? ((m = (p = h.parameters.docs) == null ? void 0 : p.canvas) == null ? void 0 : m.layout));
  }), { isLoading: c, previewProps: { ...o, layout: g ?? "padded", withSource: d, isExpanded: (e || d.state) === "open" } };
}, sx = (e) => {
  var E, y, x, b, v, A, w, C, S, _;
  let t = Se(Re), r = Se(jc), { children: n, of: o, source: l } = e;
  if ("of" in e && o === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: i, previewProps: u } = ix(e, t, r), s, c, d;
  try {
    ({ story: s } = Un(o || "story", ["story"]));
  } catch (O) {
    n || (d = O);
  }
  try {
    c = Nc({ ...l, ...o && { of: o } }, t, r);
  } catch (O) {
    n || (d = O);
  }
  if (d)
    throw d;
  if (e.withSource && he(_e`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && he(_e`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && he(_e`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), n)
    return he(_e`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), i ? a.createElement(aE, null) : a.createElement(qa, { ...u }, n);
  let g = e.layout ?? s.parameters.layout ?? ((y = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null ? void 0 : y.layout) ?? "padded", h = e.withToolbar ?? ((b = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null ? void 0 : b.withToolbar) ?? !1, p = e.additionalActions ?? ((A = (v = s.parameters.docs) == null ? void 0 : v.canvas) == null ? void 0 : A.additionalActions), m = e.sourceState ?? ((C = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null ? void 0 : C.sourceState) ?? "hidden", f = e.className ?? ((_ = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : _.className);
  return a.createElement(qa, { withSource: m === "none" ? void 0 : c, isExpanded: m === "shown", withToolbar: h, additionalActions: p, className: f, layout: g }, a.createElement(lx, { of: o || s.moduleExport, meta: e.meta, ...e.story }));
}, ux = (e, t) => {
  let r = t.getStoryContext(e), [n, o] = U(r.globals);
  return ie(() => {
    let l = (i) => {
      o(i.globals);
    };
    return t.channel.on(Ti, l), () => t.channel.off(Ti, l);
  }, [t.channel]), [n];
}, cx = (e, t) => {
  let r = dx(e, t);
  if (!r)
    throw new Error("No result when story was defined");
  return r;
}, dx = (e, t) => {
  let r = e ? t.getStoryContext(e) : { args: {} }, { id: n } = e || { id: "none" }, [o, l] = U(r.args);
  ie(() => {
    let s = (c) => {
      c.storyId === n && l(c.args);
    };
    return t.channel.on(Oi, s), () => t.channel.off(Oi, s);
  }, [n, t.channel]);
  let i = ae((s) => t.channel.emit(T7, { storyId: n, updatedArgs: s }), [n, t.channel]), u = ae((s) => t.channel.emit(F7, { storyId: n, argNames: s }), [n, t.channel]);
  return e && [o, i, u];
}, px = (e) => {
  var f;
  let { of: t } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = Se(Re), { story: n } = r.resolveOf(t || "story", ["story"]), { parameters: o, argTypes: l } = n, i = ((f = o.docs) == null ? void 0 : f.controls) || {}, u = e.include ?? i.include, s = e.exclude ?? i.exclude, c = e.sort ?? i.sort, [d, g, h] = cx(n, r), [p] = ux(n, r), m = O7(l, u, s);
  return a.createElement(K6, { rows: m, args: d, globals: p, updateArgs: g, resetArgs: h, sort: c });
}, { document: Pc } = je, fx = ({ className: e, children: t, ...r }) => {
  if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
    return a.createElement(Oo, null, t);
  let n = e && e.split("-");
  return a.createElement(Go, { language: n && n[1] || "plaintext", format: !1, code: t, ...r });
};
function el(e, t) {
  e.channel.emit(R7, t);
}
var Ya = Bu.a, mx = ({ hash: e, children: t }) => {
  let r = Se(Re);
  return a.createElement(Ya, { href: e, target: "_self", onClick: (n) => {
    let o = e.substring(1);
    Pc.getElementById(o) && el(r, e);
  } }, t);
}, gx = (e) => {
  let { href: t, target: r, children: n, ...o } = e, l = Se(Re);
  if (t) {
    if (t.startsWith("#"))
      return a.createElement(mx, { hash: t }, n);
    if (r !== "_blank" && !t.startsWith("https://"))
      return a.createElement(Ya, { href: t, onClick: (i) => {
        i.button === 0 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && (i.preventDefault(), el(l, i.currentTarget.getAttribute("href")));
      }, target: r, ...o }, n);
  }
  return a.createElement(Ya, { ...e });
}, Vc = ["h1", "h2", "h3", "h4", "h5", "h6"], hx = Vc.reduce((e, t) => ({ ...e, [t]: k(t)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), bx = k.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), yx = ({ as: e, id: t, children: r, ...n }) => {
  let o = Se(Re), l = hx[e], i = `#${t}`;
  return a.createElement(l, { id: t, ...n }, a.createElement(bx, { "aria-hidden": "true", href: i, tabIndex: -1, target: "_self", onClick: (u) => {
    Pc.getElementById(t) && el(o, i);
  } }, a.createElement(we, { icon: "link" })), r);
}, tl = (e) => {
  let { as: t, id: r, children: n, ...o } = e;
  if (r)
    return a.createElement(yx, { as: t, id: r, ...o }, n);
  let l = t, { as: i, ...u } = e;
  return a.createElement(l, { ...ee(u, t) });
}, vx = Vc.reduce((e, t) => ({ ...e, [t]: (r) => a.createElement(tl, { as: t, ...r }) }), {}), Ex = (e) => {
  var t;
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(_e`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return a.createElement(lc, { ...e, options: { forceBlock: !0, overrides: { code: fx, a: gx, ...vx, ...(t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides }, ...e == null ? void 0 : e.options } });
}, xx = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(xx || {}), pn = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", Ax = (e) => e && (typeof e == "string" ? e : Ca(e.markdown) || Ca(e.text)), wx = (e) => e && (typeof e == "string" ? e : Ca(e.text)), Sx = (e) => null, Cx = (e) => {
  var t, r, n, o, l, i, u, s;
  switch (e.type) {
    case "story":
      return ((r = (t = e.story.parameters.docs) == null ? void 0 : t.description) == null ? void 0 : r.story) || null;
    case "meta": {
      let { parameters: c, component: d } = e.preparedMeta;
      return ((o = (n = c.docs) == null ? void 0 : n.description) == null ? void 0 : o.component) || ((i = (l = c.docs) == null ? void 0 : l.extractComponentDescription) == null ? void 0 : i.call(l, d, { component: d, parameters: c })) || null;
    }
    case "component": {
      let { component: c, projectAnnotations: { parameters: d } } = e;
      return ((s = (u = d.docs) == null ? void 0 : u.extractComponentDescription) == null ? void 0 : s.call(u, c, { component: c, parameters: d })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
  }
}, kx = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
  let { component: o, parameters: l } = n();
  if (r || t)
    return r || t;
  let { notes: i, info: u, docs: s } = l;
  (i || u) && he(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${pn}`);
  let { extractComponentDescription: c = Sx, description: d } = s || {}, g = d == null ? void 0 : d.component;
  if (g)
    return g;
  switch (e) {
    case "info":
      return wx(u);
    case "notes":
      return Ax(i);
    case "docgen":
    case "auto":
    default:
      return c(o, { component: o, ...l });
  }
}, Ka = (e) => {
  let { of: t, type: r, markdown: n, children: o } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let l = Se(Re), i = Un(t || "meta"), u;
  return r || n || o ? u = kx(e, l) : u = Cx(i), r && he(`Manually specifying description type is deprecated. See ${pn}`), n && he(`The 'markdown' prop on the Description block is deprecated. See ${pn}`), o && he(`The 'children' prop on the Description block is deprecated. See ${pn}`), u ? a.createElement(Ex, null, u) : null;
}, _x = k.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), Ox = k.div(({ theme: e }) => ({ position: "fixed", top: 0, width: "10rem", paddingTop: "4rem", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), Tx = k.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), Fx = ({ title: e }) => e === null ? null : typeof e == "string" ? a.createElement(Tx, null, e) : e, Rx = ({ title: e, disable: t, headingSelector: r, contentsSelector: n, ignoreSelector: o, unsafeTocbotOptions: l }) => (ie(() => {
  let i = { tocSelector: ".toc-wrapper", contentSelector: n ?? ".sbdocs-content", headingSelector: r ?? "h3", ignoreSelector: o ?? ".skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...l }, u = setTimeout(() => _i.init(i), 100);
  return () => {
    clearTimeout(u), _i.destroy();
  };
}, [t]), a.createElement(a.Fragment, null, a.createElement(_x, null, t ? null : a.createElement(Ox, null, a.createElement(Fx, { title: e || null }), a.createElement("div", { className: "toc-wrapper" }))))), { document: Dx, window: Lx } = je, Mx = ({ context: e, theme: t, children: r }) => {
  var o, l, i, u, s;
  let n;
  try {
    n = (l = (o = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : o.docs) == null ? void 0 : l.toc;
  } catch {
    n = (s = (u = (i = e == null ? void 0 : e.projectAnnotations) == null ? void 0 : i.parameters) == null ? void 0 : u.docs) == null ? void 0 : s.toc;
  }
  return ie(() => {
    let c;
    try {
      if (c = new URL(Lx.parent.location.toString()), c.hash) {
        let d = Dx.getElementById(c.hash.substring(1));
        d && setTimeout(() => {
          X6(d);
        }, 200);
      }
    } catch {
    }
  }), a.createElement(Re.Provider, { value: e }, a.createElement(ex, { channel: e.channel }, a.createElement(bs, { theme: Y1(t) }, a.createElement(N7, { toc: n ? a.createElement(Rx, { className: "sbdocs sbdocs-toc--custom", ...n }) : null }, r))));
}, Bx = /\s*\/\s*/, Ix = (e) => {
  let t = e.trim().split(Bx);
  return t && t[t.length - 1] || e;
}, $x = ({ children: e }) => {
  let t = Se(Re), r = e || Ix(t.storyById().title);
  return r ? a.createElement(I7, { className: "sbdocs-title sb-unstyled" }, r) : null;
}, jx = ({ children: e }) => {
  let t = Se(Re), { parameters: r } = t.storyById(), n = e || (r == null ? void 0 : r.componentSubtitle);
  return n ? a.createElement($7, { className: "sbdocs-subtitle sb-unstyled" }, n) : null;
}, Hx = ({ children: e, disableAnchor: t }) => {
  if (t || typeof e != "string")
    return a.createElement(Fo, null, e);
  let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(tl, { as: "h3", id: r }, e);
}, zc = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
  var u, s;
  let { story: l } = Un(e || "story", ["story"]), i = ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null ? void 0 : s.withToolbar) ?? r;
  return a.createElement(Ic, { storyId: l.id }, t && a.createElement(a.Fragment, null, a.createElement(Hx, null, l.name), a.createElement(Ka, { of: e })), a.createElement(sx, { of: e, withToolbar: i, story: { __forceInitialArgs: n, __primary: o }, source: { __forceInitialArgs: n } }));
}, Nx = ({ name: e }) => {
  let t = Se(Re);
  e && he(_e`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  let r = e && t.storyIdByName(e), n = t.storyById(r);
  return n ? a.createElement(zc, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, Zx = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string")
    return a.createElement(To, null, e);
  let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(tl, { as: "h2", id: n, ...r }, e);
}, Px = k(Zx)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), qc = ({ title: e, includePrimary: t = !0 }) => {
  let { componentStories: r } = Se(Re), n = r().filter((o) => {
    var l, i;
    return !((i = (l = o.parameters) == null ? void 0 : l.docs) != null && i.disable);
  });
  return t || (n = n.slice(1)), !n || n.length === 0 ? null : a.createElement(a.Fragment, null, a.createElement(Px, null, e), n.map((o) => o && a.createElement(zc, { key: o.id, of: o.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
};
qc.defaultProps = { title: "Stories" };
var Vx = () => {
  let e = Un("meta", ["meta"]), { stories: t } = e.csfFile, r = Object.keys(t).length === 1;
  return a.createElement(a.Fragment, null, a.createElement($x, null), a.createElement(jx, null), a.createElement(Ka, { of: "meta" }), r ? a.createElement(Ka, { of: "story" }) : null, a.createElement(Nx, null), a.createElement(px, null), r ? null : a.createElement(qc, null));
};
function e8({ context: e, docsParameter: t }) {
  let r = t.container || Mx, n = t.page || Vx;
  return a.createElement(r, { context: e, theme: t.theme }, a.createElement(n, null));
}
var t8 = ({ of: e }) => {
  let t = Se(Re);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return a.createElement(Ic, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  gx as A,
  fx as C,
  e8 as D,
  qe as F,
  v1 as G,
  vx as H,
  we as I,
  t8 as M,
  bo as S,
  Bf as T,
  s2 as W,
  Me as _,
  Ks as a,
  Z as b,
  $s as c,
  Ex as d,
  Df as e,
  Ue as g,
  Pt as m,
  k as n,
  Kx as s
};
