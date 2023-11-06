import { _ as Gi, a as Xa, b as Yi, d as Ht, t as zt, e as u0, f as xa, g as c0, h as K, l as sl, m as d0, i as br } from "./storybook-e988567b.es.js";
import { r as b, a as ul, R as a } from "./storybook-e61d95ab.es.js";
import { g as hn, c as Un } from "./storybook-c5d32002.es.js";
import { r as Ki, R as p0, e as f0, i as bn, a as m0, c as g0 } from "./storybook-ac19c974.es.js";
import { L as Xi, v as h0 } from "./storybook-d79fba58.es.js";
import { _ as yn } from "./storybook-70f3d2a3.es.js";
import { k as Ji, l as Qi, m as b0, n as y0, o as v0, p as E0, _ as es, q as ts, s as x0, r as rs, t as A0, v as w0, w as S0, x as C0, y as k0, z as _0, A as ns, B as T0, C as O0, D as as, E as R0, F as Ja, G as os, H as ls, I as F0, J as D0, K as L0, i as $0, S as cl, L as Aa, b as Wn } from "./storybook-2a203c68.es.js";
import { a as is } from "./storybook-21ad7f25.es.js";
import { d as xe } from "./storybook-398c73a4.es.js";
var He = (e) => `control-${e.replace(/\s+/g, "-")}`, vn = (e) => `set-${e.replace(/\s+/g, "-")}`, M0 = function(t) {
  return t();
}, ss = ul["useInsertionEffect"] ? ul["useInsertionEffect"] : !1, Qa = ss || M0, dl = ss || b.useLayoutEffect;
function Zr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var us = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, o, l) {
      function i(c, d) {
        if (!o[c]) {
          if (!n[c]) {
            var m = typeof Zr == "function" && Zr;
            if (!d && m)
              return m(c, !0);
            if (u)
              return u(c, !0);
            var g = new Error("Cannot find module '" + c + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var p = o[c] = { exports: {} };
          n[c][0].call(p.exports, function(h) {
            var f = n[c][1][h];
            return i(f || h);
          }, p, p.exports, r, n, o, l);
        }
        return o[c].exports;
      }
      for (var u = typeof Zr == "function" && Zr, s = 0; s < l.length; s++)
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
        var d = new l(!1), m = [];
        return function(g) {
          var p = function() {
            var h = d, f, x, y = arguments.length - 1, A = Array(y + 1), v = !0, E;
            if ((p.numArgs || p.numArgs === 0) && p.numArgs !== y + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E = 0; E < y; E++) {
              if (A[E] = {
                cacheItem: h,
                arg: arguments[E]
              }, h.has(arguments[E])) {
                h = h.get(arguments[E]);
                continue;
              }
              v = !1, f = new l(!1), h.set(arguments[E], f), h = f;
            }
            return v && (h.has(arguments[y]) ? x = h.get(arguments[y]) : v = !1), v || (x = g.apply(null, arguments), h.set(arguments[y], x)), c > 0 && (A[y] = {
              cacheItem: h,
              arg: arguments[y]
            }, v ? i(m, A) : m.push(A), m.length > c && u(m.shift())), p.wasMemoized = v, p.numArgs = y + 1, x;
          };
          return p.limit = c, p.wasMemoized = !1, p.cache = d, p.lru = m, p;
        };
      };
      function i(c, d) {
        var m = c.length, g = d.length, p, h, f;
        for (h = 0; h < m; h++) {
          for (p = !0, f = 0; f < g; f++)
            if (!s(c[h][f].arg, d[f].arg)) {
              p = !1;
              break;
            }
          if (p)
            break;
        }
        c.push(c.splice(h, 1)[0]);
      }
      function u(c) {
        var d = c.length, m = c[d - 1], g, p;
        for (m.cacheItem.delete(m.arg), p = d - 2; p >= 0 && (m = c[p], g = m.cacheItem.get(m.arg), !g || !g.size); p--)
          m.cacheItem.delete(m.arg);
      }
      function s(c, d) {
        return c === d || c !== c && d !== d;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(us);
var B0 = us.exports;
const Mt = /* @__PURE__ */ hn(B0), { logger: I0 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var P0 = Xa({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, o = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, f = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, A = t ? Symbol.for("react.responder") : 60118, v = t ? Symbol.for("react.scope") : 60119;
    function E(M) {
      return typeof M == "string" || typeof M == "function" || M === o || M === d || M === i || M === l || M === g || M === p || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === h || M.$$typeof === u || M.$$typeof === s || M.$$typeof === m || M.$$typeof === y || M.$$typeof === A || M.$$typeof === v || M.$$typeof === x);
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var Pe = M.$$typeof;
        switch (Pe) {
          case r:
            var Ve = M.type;
            switch (Ve) {
              case c:
              case d:
              case o:
              case i:
              case l:
              case g:
                return Ve;
              default:
                var Et = Ve && Ve.$$typeof;
                switch (Et) {
                  case s:
                  case m:
                  case f:
                  case h:
                  case u:
                    return Et;
                  default:
                    return Pe;
                }
            }
          case n:
            return Pe;
        }
      }
    }
    var S = c, k = d, C = s, T = u, O = r, R = m, D = o, F = f, P = h, L = n, $ = i, N = l, Z = g, B = !1;
    function j(M) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(M) || w(M) === c;
    }
    function X(M) {
      return w(M) === d;
    }
    function ne(M) {
      return w(M) === s;
    }
    function Y(M) {
      return w(M) === u;
    }
    function J(M) {
      return typeof M == "object" && M !== null && M.$$typeof === r;
    }
    function I(M) {
      return w(M) === m;
    }
    function V(M) {
      return w(M) === o;
    }
    function U(M) {
      return w(M) === f;
    }
    function se(M) {
      return w(M) === h;
    }
    function be(M) {
      return w(M) === n;
    }
    function ot(M) {
      return w(M) === i;
    }
    function Re(M) {
      return w(M) === l;
    }
    function Ze(M) {
      return w(M) === g;
    }
    e.AsyncMode = S, e.ConcurrentMode = k, e.ContextConsumer = C, e.ContextProvider = T, e.Element = O, e.ForwardRef = R, e.Fragment = D, e.Lazy = F, e.Memo = P, e.Portal = L, e.Profiler = $, e.StrictMode = N, e.Suspense = Z, e.isAsyncMode = j, e.isConcurrentMode = X, e.isContextConsumer = ne, e.isContextProvider = Y, e.isElement = J, e.isForwardRef = I, e.isFragment = V, e.isLazy = U, e.isMemo = se, e.isPortal = be, e.isProfiler = ot, e.isStrictMode = Re, e.isSuspense = Ze, e.isValidElementType = E, e.typeOf = w;
  })();
} }), N0 = Xa({ "../../node_modules/react-is/index.js"(e, t) {
  t.exports = P0();
} }), cs = Xa({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
  var r = N0(), n = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, u = {};
  u[r.ForwardRef] = l, u[r.Memo] = i;
  function s(x) {
    return r.isMemo(x) ? i : u[x.$$typeof] || n;
  }
  var c = Object.defineProperty, d = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, g = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
  function f(x, y, A) {
    if (typeof y != "string") {
      if (h) {
        var v = p(y);
        v && v !== h && f(x, v, A);
      }
      var E = d(y);
      m && (E = E.concat(m(y)));
      for (var w = s(x), S = s(y), k = 0; k < E.length; ++k) {
        var C = E[k];
        if (!o[C] && !(A && A[C]) && !(S && S[C]) && !(w && w[C])) {
          var T = g(y, C);
          try {
            c(x, C, T);
          } catch {
          }
        }
      }
    }
    return x;
  }
  t.exports = f;
} });
function ds(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var j0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eo = ds(function(e) {
  return j0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function H0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Z0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var V0 = function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Z0(this));
    var n = this.tags[this.tags.length - 1], o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
    if (o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o, this.isSpeedy) {
      var l = H0(n);
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
}(), he = "-ms-", un = "-moz-", W = "-webkit-", to = "comm", ro = "rule", no = "decl", z0 = "@import", ps = "@keyframes", q0 = "@layer", U0 = Math.abs, En = String.fromCharCode, W0 = Object.assign;
function G0(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function fs(e) {
  return e.trim();
}
function Y0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, r) {
  return e.replace(t, r);
}
function wa(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, r) {
  return e.slice(t, r);
}
function Xe(e) {
  return e.length;
}
function ao(e) {
  return e.length;
}
function Vr(e, t) {
  return t.push(e), e;
}
function K0(e, t) {
  return e.map(t).join("");
}
var xn = 1, Gt = 1, ms = 0, Se = 0, oe = 0, nr = "";
function An(e, t, r, n, o, l, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: l, line: xn, column: Gt, length: i, return: "" };
}
function pr(e, t) {
  return W0(An("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function X0() {
  return oe;
}
function J0() {
  return oe = Se > 0 ? de(nr, --Se) : 0, Gt--, oe === 10 && (Gt = 1, xn--), oe;
}
function ke() {
  return oe = Se < ms ? de(nr, Se++) : 0, Gt++, oe === 10 && (Gt = 1, xn++), oe;
}
function rt() {
  return de(nr, Se);
}
function Xr() {
  return Se;
}
function Dr(e, t) {
  return Er(nr, e, t);
}
function xr(e) {
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
function gs(e) {
  return xn = Gt = 1, ms = Xe(nr = e), Se = 0, [];
}
function hs(e) {
  return nr = "", e;
}
function Jr(e) {
  return fs(Dr(Se - 1, Sa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Q0(e) {
  for (; (oe = rt()) && oe < 33; )
    ke();
  return xr(e) > 2 || xr(oe) > 3 ? "" : " ";
}
function e1(e, t) {
  for (; --t && ke() && !(oe < 48 || oe > 102 || oe > 57 && oe < 65 || oe > 70 && oe < 97); )
    ;
  return Dr(e, Xr() + (t < 6 && rt() == 32 && ke() == 32));
}
function Sa(e) {
  for (; ke(); )
    switch (oe) {
      case e:
        return Se;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sa(oe);
        break;
      case 40:
        e === 41 && Sa(e);
        break;
      case 92:
        ke();
        break;
    }
  return Se;
}
function t1(e, t) {
  for (; ke() && e + oe !== 47 + 10 && !(e + oe === 42 + 42 && rt() === 47); )
    ;
  return "/*" + Dr(t, Se - 1) + "*" + En(e === 47 ? e : ke());
}
function r1(e) {
  for (; !xr(rt()); )
    ke();
  return Dr(e, Se);
}
function n1(e) {
  return hs(Qr("", null, null, null, [""], e = gs(e), 0, [0], e));
}
function Qr(e, t, r, n, o, l, i, u, s) {
  for (var c = 0, d = 0, m = i, g = 0, p = 0, h = 0, f = 1, x = 1, y = 1, A = 0, v = "", E = o, w = l, S = n, k = v; x; )
    switch (h = A, A = ke()) {
      case 40:
        if (h != 108 && de(k, m - 1) == 58) {
          wa(k += G(Jr(A), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Jr(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Q0(h);
        break;
      case 92:
        k += e1(Xr() - 1, 7);
        continue;
      case 47:
        switch (rt()) {
          case 42:
          case 47:
            Vr(a1(t1(ke(), Xr()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * f:
        u[c++] = Xe(k) * y;
      case 125 * f:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            x = 0;
          case 59 + d:
            y == -1 && (k = G(k, /\f/g, "")), p > 0 && Xe(k) - m && Vr(p > 32 ? fl(k + ";", n, r, m - 1) : fl(G(k, " ", "") + ";", n, r, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (Vr(S = pl(k, t, r, c, d, o, u, v, E = [], w = [], m), l), A === 123)
              if (d === 0)
                Qr(k, t, S, S, E, l, m, u, w);
              else
                switch (g === 99 && de(k, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qr(e, S, S, n && Vr(pl(e, S, S, 0, 0, o, u, v, o, E = [], m), w), o, w, m, u, n ? E : w);
                    break;
                  default:
                    Qr(k, S, S, S, [""], w, 0, u, w);
                }
        }
        c = d = p = 0, f = y = 1, v = k = "", m = i;
        break;
      case 58:
        m = 1 + Xe(k), p = h;
      default:
        if (f < 1) {
          if (A == 123)
            --f;
          else if (A == 125 && f++ == 0 && J0() == 125)
            continue;
        }
        switch (k += En(A), A * f) {
          case 38:
            y = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[c++] = (Xe(k) - 1) * y, y = 1;
            break;
          case 64:
            rt() === 45 && (k += Jr(ke())), g = rt(), d = m = Xe(v = k += r1(Xr())), A++;
            break;
          case 45:
            h === 45 && Xe(k) == 2 && (f = 0);
        }
    }
  return l;
}
function pl(e, t, r, n, o, l, i, u, s, c, d) {
  for (var m = o - 1, g = o === 0 ? l : [""], p = ao(g), h = 0, f = 0, x = 0; h < n; ++h)
    for (var y = 0, A = Er(e, m + 1, m = U0(f = i[h])), v = e; y < p; ++y)
      (v = fs(f > 0 ? g[y] + " " + A : G(A, /&\f/g, g[y]))) && (s[x++] = v);
  return An(e, t, r, o === 0 ? ro : u, s, c, d);
}
function a1(e, t, r) {
  return An(e, t, r, to, En(X0()), Er(e, 2, -2), 0);
}
function fl(e, t, r, n) {
  return An(e, t, r, no, Er(e, 0, n), Er(e, n + 1, -1), n);
}
function Wt(e, t) {
  for (var r = "", n = ao(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function o1(e, t, r, n) {
  switch (e.type) {
    case q0:
      if (e.children.length)
        break;
    case z0:
    case no:
      return e.return = e.return || e.value;
    case to:
      return "";
    case ps:
      return e.return = e.value + "{" + Wt(e.children, n) + "}";
    case ro:
      e.value = e.props.join(",");
  }
  return Xe(r = Wt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function l1(e) {
  var t = ao(e);
  return function(r, n, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, o, l) || "";
    return i;
  };
}
var ml = function(e) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (t.has(r))
      return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
}, i1 = function(e, t, r) {
  for (var n = 0, o = 0; n = o, o = rt(), n === 38 && o === 12 && (t[r] = 1), !xr(o); )
    ke();
  return Dr(e, Se);
}, s1 = function(e, t) {
  var r = -1, n = 44;
  do
    switch (xr(n)) {
      case 0:
        n === 38 && rt() === 12 && (t[r] = 1), e[r] += i1(Se - 1, t, r);
        break;
      case 2:
        e[r] += Jr(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = rt() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += En(n);
    }
  while (n = ke());
  return e;
}, u1 = function(e, t) {
  return hs(s1(gs(e), t));
}, gl = /* @__PURE__ */ new WeakMap(), c1 = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !gl.get(r)) && !n) {
      gl.set(e, !0);
      for (var o = [], l = u1(t, o), i = r.props, u = 0, s = 0; u < l.length; u++)
        for (var c = 0; c < i.length; c++, s++)
          e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + " " + l[u];
    }
  }
}, d1 = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, p1 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", f1 = function(e) {
  return e.type === "comm" && e.children.indexOf(p1) > -1;
}, m1 = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1; u >= 0; u--) {
          var s = i[u];
          if (s.line < t.line)
            break;
          if (s.column < t.column) {
            if (f1(s))
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
}, bs = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, g1 = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!bs(t[r]))
      return !0;
  return !1;
}, hl = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, h1 = function(e, t, r) {
  bs(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), hl(e)) : g1(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), hl(e)));
};
function ys(e, t) {
  switch (G0(e, t)) {
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
      return W + e + un + e + he + e + e;
    case 6828:
    case 4268:
      return W + e + he + e + e;
    case 6165:
      return W + e + he + "flex-" + e + e;
    case 5187:
      return W + e + G(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return W + e + he + "flex-item-" + G(e, /flex-|-self/, "") + e;
    case 4675:
      return W + e + he + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return W + e + he + G(e, "shrink", "negative") + e;
    case 5292:
      return W + e + he + G(e, "basis", "preferred-size") + e;
    case 6060:
      return W + "box-" + G(e, "-grow", "") + W + e + he + G(e, "grow", "positive") + e;
    case 4554:
      return W + G(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
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
      if (Xe(e) - 1 - t > 6)
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45)
              break;
          case 102:
            return G(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + un + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~wa(e, "stretch") ? ys(G(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (de(e, t + 1) !== 115)
        break;
    case 6444:
      switch (de(e, Xe(e) - 3 - (~wa(e, "!important") && 10))) {
        case 107:
          return G(e, ":", ":" + W) + e;
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return W + e + he + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + he + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + he + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + he + e + e;
  }
  return e;
}
var b1 = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case no:
        e.return = ys(e.value, e.length);
        break;
      case ps:
        return Wt([pr(e, { value: G(e.value, "@", "@" + W) })], n);
      case ro:
        if (e.length)
          return K0(e.props, function(o) {
            switch (Y0(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Wt([pr(e, { props: [G(o, /:(read-\w+)/, ":" + un + "$1")] })], n);
              case "::placeholder":
                return Wt([pr(e, { props: [G(o, /:(plac\w+)/, ":" + W + "input-$1")] }), pr(e, { props: [G(o, /:(plac\w+)/, ":" + un + "$1")] }), pr(e, { props: [G(o, /:(plac\w+)/, he + "input-$1")] })], n);
            }
            return "";
          });
    }
}, y1 = [b1], v1 = function(e) {
  var t = e.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var f = h.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || y1;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, l, i = [];
  l = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(h) {
    for (var f = h.getAttribute("data-emotion").split(" "), x = 1; x < f.length; x++)
      o[f[x]] = !0;
    i.push(h);
  });
  var u, s = [c1, d1];
  s.push(m1({ get compat() {
    return p.compat;
  } }), h1);
  {
    var c, d = [o1, function(h) {
      h.root || (h.return ? c.insert(h.return) : h.value && h.type !== to && c.insert(h.value + "{}"));
    }], m = l1(s.concat(n, d)), g = function(h) {
      return Wt(n1(h), m);
    };
    u = function(h, f, x, y) {
      c = x, f.map !== void 0 && (c = { insert: function(A) {
        x.insert(A + f.map);
      } }), g(h ? h + "{" + f.styles + "}" : f.styles), y && (p.inserted[f.name] = !0);
    };
  }
  var p = { key: t, sheet: new V0({ key: t, container: l, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: o, registered: {}, insert: u };
  return p.sheet.hydrate(i), p;
};
Gi(cs());
var E1 = !0;
function oo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var wn = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || E1 === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, Sn = function(e, t, r) {
  wn(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function x1(e) {
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
var A1 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, bl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, w1 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", S1 = /[A-Z]|^ms/g, vs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, lo = function(e) {
  return e.charCodeAt(1) === 45;
}, yl = function(e) {
  return e != null && typeof e != "boolean";
}, Gn = ds(function(e) {
  return lo(e) ? e : e.replace(S1, "-$&").toLowerCase();
}), cn = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(vs, function(r, n, o) {
          return Je = { name: n, styles: o, next: Je }, n;
        });
  }
  return A1[e] !== 1 && !lo(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
vl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, El = ["normal", "none", "initial", "inherit", "unset"], xl = cn, Al = /^-ms-/, wl = /-(.)/g, Yn = {}, cn = function(e, t) {
  if (e === "content" && (typeof t != "string" || El.indexOf(t) === -1 && !vl.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var r = xl(e, t);
  return r !== "" && !lo(e) && e.indexOf("-") !== -1 && Yn[e] === void 0 && (Yn[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Al, "ms-").replace(wl, function(n, o) {
    return o.toUpperCase();
  }) + "?")), r;
};
var vl, El, xl, Al, wl, Yn, Es = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ar(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Es);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Je = { name: r.name, styles: r.styles, next: Je }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Je = { name: n.name, styles: n.styles, next: Je }, n = n.next;
        var o = r.styles + ";";
        return r.map !== void 0 && (o += r.map), o;
      }
      return C1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Je, i = r(e);
        return Je = l, Ar(e, t, i);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var u = [], s = r.replace(vs, function(d, m, g) {
        var p = "animation" + u.length;
        return u.push("const " + p + " = keyframes`" + g.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
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
function C1(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ar(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += l + "{" + t[i] + "}" : yl(i) && (n += Gn(l) + ":" + cn(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR")
          throw new Error(Es);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++)
            yl(i[u]) && (n += Gn(l) + ":" + cn(l, i[u]) + ";");
        else {
          var s = Ar(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += Gn(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(w1), n += l + "{" + s + "}";
          }
        }
      }
    }
  return n;
}
var Sl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, xs;
xs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Je, Yt = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Je = void 0;
  var l = e[0];
  l == null || l.raw === void 0 ? (n = !1, o += Ar(r, t, l)) : (l[0] === void 0 && console.error(bl), o += l[0]);
  for (var i = 1; i < e.length; i++)
    o += Ar(r, t, e[i]), n && (l[i] === void 0 && console.error(bl), o += l[i]);
  var u;
  o = o.replace(xs, function(m) {
    return u = m, "";
  }), Sl.lastIndex = 0;
  for (var s = "", c; (c = Sl.exec(o)) !== null; )
    s += "-" + c[1];
  var d = x1(o) + s;
  return { name: d, styles: o, map: u, next: Je, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, k1 = {}.hasOwnProperty, io = b.createContext(typeof HTMLElement < "u" ? v1({ key: "css" }) : null);
io.displayName = "EmotionCacheContext";
io.Provider;
var Cn = function(e) {
  return b.forwardRef(function(t, r) {
    var n = b.useContext(io);
    return e(t, n, r);
  });
}, yt = b.createContext({});
yt.displayName = "EmotionThemeContext";
var _1 = function() {
  return b.useContext(yt);
}, T1 = function(e, t) {
  if (typeof t == "function") {
    var r = t(e);
    if (r == null || typeof r != "object" || Array.isArray(r))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return r;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Yi({}, e, t);
}, O1 = ml(function(e) {
  return ml(function(t) {
    return T1(e, t);
  });
}), As = function(e) {
  var t = b.useContext(yt);
  return e.theme !== t && (t = O1(t)(e.theme)), b.createElement(yt.Provider, { value: t }, e.children);
}, Cl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", R1 = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return wn(t, r, n), Qa(function() {
    return Sn(t, r, n);
  }), null;
}, F1 = Cn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Cl], l = [n], i = "";
  typeof e.className == "string" ? i = oo(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = Yt(l, void 0, b.useContext(yt));
  if (u.name.indexOf("-") === -1) {
    var s = e[kl];
    s && (u = Yt([u, "label:" + s + ";"]));
  }
  i += t.key + "-" + u.name;
  var c = {};
  for (var d in e)
    k1.call(e, d) && d !== "css" && d !== Cl && d !== kl && (c[d] = e[d]);
  return c.ref = r, c.className = i, b.createElement(b.Fragment, null, b.createElement(R1, { cache: t, serialized: u, isStringTag: typeof o == "string" }), b.createElement(o, c));
});
F1.displayName = "EmotionCssPropInternal";
Gi(cs());
var D1 = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, _l = !1, L1 = Cn(function(e, t) {
  !_l && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), _l = !0);
  var r = e.styles, n = Yt([r], void 0, b.useContext(yt)), o = b.useRef();
  return dl(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({ key: l, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), dl(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (n.next !== void 0 && Sn(t, n.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
L1.displayName = "EmotionGlobal";
function so() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Yt(t);
}
var ar = function() {
  var e = so.apply(void 0, arguments), t = "animation-" + e.name;
  return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, $1 = function e(t) {
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
function M1(e, t, r) {
  var n = [], o = oo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var B1 = function(e) {
  var t = e.cache, r = e.serializedArr;
  return Qa(function() {
    for (var n = 0; n < r.length; n++)
      Sn(t, r[n], !1);
  }), null;
}, I1 = Cn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r)
      throw new Error("css can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    var m = Yt(c, t.registered);
    return n.push(m), wn(t, m, !1), t.key + "-" + m.name;
  }, l = function() {
    if (r)
      throw new Error("cx can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    return M1(t.registered, o, $1(c));
  }, i = { css: o, cx: l, theme: b.useContext(yt) }, u = e.children(i);
  return r = !0, b.createElement(b.Fragment, null, b.createElement(B1, { cache: t, serializedArr: n }), u);
});
I1.displayName = "EmotionClassNames";
Kn = !0, Tl = typeof jest < "u" || typeof vi < "u", Kn && !Tl && (Xn = typeof globalThis < "u" ? globalThis : Kn ? window : global, Jn = "__EMOTION_REACT_" + D1.version.split(".")[0] + "__", Xn[Jn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Xn[Jn] = !0);
var Kn, Tl, Xn, Jn, P1 = eo, N1 = function(e) {
  return e !== "theme";
}, Ol = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? P1 : N1;
}, Rl = function(e, t, r) {
  var n;
  if (t) {
    var o = t.shouldForwardProp;
    n = e.__emotion_forwardProp && o ? function(l) {
      return e.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
}, Fl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, j1 = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return wn(t, r, n), Qa(function() {
    return Sn(t, r, n);
  }), null;
}, H1 = function e(t, r) {
  if (t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, l, i;
  r !== void 0 && (l = r.label, i = r.target);
  var u = Rl(t, r, n), s = u || Ol(o), c = !s("as");
  return function() {
    var d = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && m.push("label:" + l + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      d[0][0] === void 0 && console.error(Fl), m.push(d[0][0]);
      for (var g = d.length, p = 1; p < g; p++)
        d[0][p] === void 0 && console.error(Fl), m.push(d[p], d[0][p]);
    }
    var h = Cn(function(f, x, y) {
      var A = c && f.as || o, v = "", E = [], w = f;
      if (f.theme == null) {
        w = {};
        for (var S in f)
          w[S] = f[S];
        w.theme = b.useContext(yt);
      }
      typeof f.className == "string" ? v = oo(x.registered, E, f.className) : f.className != null && (v = f.className + " ");
      var k = Yt(m.concat(E), x.registered, w);
      v += x.key + "-" + k.name, i !== void 0 && (v += " " + i);
      var C = c && u === void 0 ? Ol(A) : s, T = {};
      for (var O in f)
        c && O === "as" || C(O) && (T[O] = f[O]);
      return T.className = v, T.ref = y, b.createElement(b.Fragment, null, b.createElement(j1, { cache: x, serialized: k, isStringTag: typeof A == "string" }), b.createElement(A, T));
    });
    return h.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = m, h.__emotion_forwardProp = u, Object.defineProperty(h, "toString", { value: function() {
      return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
    } }), h.withComponent = function(f, x) {
      return e(f, Yi({}, r, x, { shouldForwardProp: Rl(h, x, !0) })).apply(void 0, m);
    }, h;
  };
}, Z1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], _ = H1.bind();
Z1.forEach(function(e) {
  _[e] = _(e);
});
var V1 = Mt(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
Mt(1)(({ color: e, background: t, typography: r }) => {
  let n = V1({ typography: r });
  return { ...n, body: { ...n.body, color: e.defaultText, background: t.app, overflow: "hidden" }, hr: { ...n.hr, borderTop: `1px solid ${e.border}` } };
});
var z1 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, q1 = ar`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, ws = ar`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, U1 = ar`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, W1 = ar`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, G1 = so`
  animation: ${ws} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, Y1 = so`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, K1 = { rotate360: q1, glow: ws, float: U1, jiggle: W1, inlineGlow: G1, hoverable: Y1 }, X1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, J1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, Q1 = (e) => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: d0(n) }), {}), ed = ({ colors: e, mono: t }) => {
  let r = Q1(e);
  return { token: { fontFamily: t, WebkitFontSmoothing: "antialiased", "&.tag": r.red3, "&.comment": { ...r.green1, fontStyle: "italic" }, "&.prolog": { ...r.green1, fontStyle: "italic" }, "&.doctype": { ...r.green1, fontStyle: "italic" }, "&.cdata": { ...r.green1, fontStyle: "italic" }, "&.string": r.red1, "&.url": r.cyan1, "&.symbol": r.cyan1, "&.number": r.cyan1, "&.boolean": r.cyan1, "&.variable": r.cyan1, "&.constant": r.cyan1, "&.inserted": r.cyan1, "&.atrule": r.blue1, "&.keyword": r.blue1, "&.attr-value": r.blue1, "&.punctuation": r.gray1, "&.operator": r.gray1, "&.function": r.gray1, "&.deleted": r.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": r.cyan2, "&.selector": r.red3, "&.attr-name": r.red4, "&.property": r.red4, "&.regex": r.red4, "&.entity": r.red4, "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 } }, "language-json .token.boolean": r.blue1, "language-json .token.number": r.blue1, "language-json .token.property": r.cyan2, namespace: { opacity: 0.7 } };
}, td = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, rd = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, nd = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: K.tertiary, ancillary: K.ancillary, orange: K.orange, gold: K.gold, green: K.green, seafoam: K.seafoam, purple: K.purple, ultraviolet: K.ultraviolet, lightest: K.lightest, lighter: K.lighter, light: K.light, mediumlight: K.mediumlight, medium: K.medium, mediumdark: K.mediumdark, dark: K.dark, darker: K.darker, darkest: K.darkest, border: K.border, positive: K.positive, negative: K.negative, warning: K.warning, critical: K.critical, defaultText: e.textColor || K.darkest, inverseText: e.textInverseColor || K.lightest, positiveText: K.positiveText, negativeText: K.negativeText, warningText: K.warningText }), Ca = (e = xa[c0()]) => {
  let { base: t, colorPrimary: r, colorSecondary: n, appBg: o, appContentBg: l, appBorderColor: i, appBorderRadius: u, fontBase: s, fontCode: c, textColor: d, textInverseColor: m, barTextColor: g, barHoverColor: p, barSelectedColor: h, barBg: f, buttonBg: x, buttonBorder: y, booleanBg: A, booleanSelectedBg: v, inputBg: E, inputBorder: w, inputTextColor: S, inputBorderRadius: k, brandTitle: C, brandUrl: T, brandImage: O, brandTarget: R, gridCellSize: D, ...F } = e;
  return { ...F, base: t, color: nd(e), background: { app: o, bar: f, content: l, gridCellSize: D || Ht.gridCellSize, hoverable: Ht.hoverable, positive: Ht.positive, negative: Ht.negative, warning: Ht.warning, critical: Ht.critical }, typography: { fonts: { base: s, mono: c }, weight: zt.weight, size: zt.size }, animation: K1, easing: z1, input: { background: E, border: w, borderRadius: k, color: S }, button: { background: x || E, border: y || w }, boolean: { background: A || w, selectedBackground: v || E }, layoutMargin: 10, appBorderColor: i, appBorderRadius: u, barTextColor: g, barHoverColor: p || n, barSelectedColor: h || n, barBg: f, brand: { title: C, url: T, image: O || (C ? null : void 0), target: R }, code: ed({ colors: t === "light" ? td : rd, mono: c }), addonActionsTheme: { ...t === "light" ? J1 : X1, BASE_FONT_FAMILY: c, BASE_FONT_SIZE: zt.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: d, ARROW_COLOR: u0(0.2, i), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: c, TREENODE_FONT_SIZE: zt.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, ad = (e) => Object.keys(e).length === 0, Qn = (e) => e != null && typeof e == "object", od = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t), ld = () => /* @__PURE__ */ Object.create(null), Ss = (e, t) => e === t || !Qn(e) || !Qn(t) ? {} : Object.keys(e).reduce((r, n) => {
  if (od(t, n)) {
    let o = Ss(e[n], t[n]);
    return Qn(o) && ad(o) || (r[n] = o), r;
  }
  return r[n] = void 0, r;
}, ld()), id = Ss;
function sd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c ? u.concat(c.map(function(d) {
      var m, g;
      return (g = (m = d.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null && g !== void 0 ? g : 0;
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
    var c = i.match(/(?:^|\n)( *)$/), d = c ? c[1] : "", m = u;
    typeof u == "string" && u.includes(`
`) && (m = String(u).split(`
`).map(function(g, p) {
      return p === 0 ? g : "" + d + g;
    }).join(`
`)), i += m + n[s + 1];
  }), i;
}
var ud = (e) => {
  if (!e)
    return Ca(sl);
  let t = id(sl, e);
  return Object.keys(t).length && I0.warn(sd`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, t), Ca(e);
}, ka = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, q.apply(this, arguments);
}
function uo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, l;
  for (l = 0; l < n.length; l++)
    o = n[l], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var cd = Object.create, Cs = Object.defineProperty, dd = Object.getOwnPropertyDescriptor, ks = Object.getOwnPropertyNames, pd = Object.getPrototypeOf, fd = Object.prototype.hasOwnProperty, H = (e, t) => function() {
  return t || (0, e[ks(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, md = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of ks(t))
      !fd.call(e, o) && o !== r && Cs(e, o, { get: () => t[o], enumerable: !(n = dd(t, o)) || n.enumerable });
  return e;
}, Te = (e, t, r) => (r = e != null ? cd(pd(e)) : {}, md(t || !e || !e.__esModule ? Cs(r, "default", { value: e, enumerable: !0 }) : r, e)), gd = H({ "../../node_modules/refractor/lang/markdown.js"(e, t) {
  t.exports = r, r.displayName = "markdown", r.aliases = ["md"];
  function r(n) {
    (function(o) {
      var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function i(h) {
        return h = h.replace(/<inner>/g, function() {
          return l;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")");
      }
      var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return u;
      }), c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      o.languages.markdown = o.languages.extend("markup", {}), o.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: o.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + s + c + "(?:" + s + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + s + c + ")(?:" + s + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(u), inside: o.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + s + ")" + c + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + s + "$"), inside: { "table-header": { pattern: RegExp(u), alias: "important", inside: o.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: i(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: i(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: i(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(h) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
          h !== f && (o.languages.markdown[h].inside.content.inside[f] = o.languages.markdown[f]);
        });
      }), o.hooks.add("after-tokenize", function(h) {
        if (h.language !== "markdown" && h.language !== "md")
          return;
        function f(x) {
          if (!(!x || typeof x == "string"))
            for (var y = 0, A = x.length; y < A; y++) {
              var v = x[y];
              if (v.type !== "code") {
                f(v.content);
                continue;
              }
              var E = v.content[1], w = v.content[3];
              if (E && w && E.type === "code-language" && w.type === "code-block" && typeof E.content == "string") {
                var S = E.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                S = (/[a-z][\w-]*/i.exec(S) || [""])[0].toLowerCase();
                var k = "language-" + S;
                w.alias ? typeof w.alias == "string" ? w.alias = [w.alias, k] : w.alias.push(k) : w.alias = [k];
              }
            }
        }
        f(h.tokens);
      }), o.hooks.add("wrap", function(h) {
        if (h.type === "code-block") {
          for (var f = "", x = 0, y = h.classes.length; x < y; x++) {
            var A = h.classes[x], v = /language-(.+)/.exec(A);
            if (v) {
              f = v[1];
              break;
            }
          }
          var E = o.languages[f];
          if (E)
            h.content = o.highlight(p(h.content.value), E, f);
          else if (f && f !== "none" && o.plugins.autoloader) {
            var w = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            h.attributes.id = w, o.plugins.autoloader.loadLanguages(f, function() {
              var S = document.getElementById(w);
              S && (S.innerHTML = o.highlight(S.textContent, o.languages[f], f));
            });
          }
        }
      });
      var d = RegExp(o.languages.markup.tag.pattern.source, "gi"), m = { amp: "&", lt: "<", gt: ">", quot: '"' }, g = String.fromCodePoint || String.fromCharCode;
      function p(h) {
        var f = h.replace(d, "");
        return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(x, y) {
          if (y = y.toLowerCase(), y[0] === "#") {
            var A;
            return y[1] === "x" ? A = parseInt(y.slice(2), 16) : A = Number(y.slice(1)), g(A);
          } else {
            var v = m[y];
            return v || x;
          }
        }), f;
      }
      o.languages.md = o.languages.markdown;
    })(n);
  }
} }), hd = H({ "../../node_modules/refractor/lang/yaml.js"(e, t) {
  t.exports = r, r.displayName = "yaml", r.aliases = ["yml"];
  function r(n) {
    (function(o) {
      var l = /[*&][^\s[\]{},]+/, i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, u = "(?:" + i.source + "(?:[ 	]+" + l.source + ")?|" + l.source + "(?:[ 	]+" + i.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function d(m, g) {
        g = (g || "").replace(/m/g, "") + "m";
        var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return u;
        }).replace(/<<value>>/g, function() {
          return m;
        });
        return RegExp(p, g);
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
} }), _s = H({ "../../node_modules/refractor/lang/typescript.js"(e, t) {
  t.exports = r, r.displayName = "typescript", r.aliases = ["ts"];
  function r(n) {
    (function(o) {
      o.languages.typescript = o.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), o.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete o.languages.typescript.parameter, delete o.languages.typescript["literal-property"];
      var l = o.languages.extend("typescript", {});
      delete l["class-name"], o.languages.typescript["class-name"].inside = l, o.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: l } } } }), o.languages.ts = o.languages.typescript;
    })(n);
  }
} }), Ts = H({ "../../node_modules/refractor/lang/jsx.js"(e, t) {
  t.exports = r, r.displayName = "jsx", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = o.util.clone(o.languages.javascript), i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c(g, p) {
        return g = g.replace(/<S>/g, function() {
          return i;
        }).replace(/<BRACES>/g, function() {
          return u;
        }).replace(/<SPREAD>/g, function() {
          return s;
        }), RegExp(g, p);
      }
      s = c(s).source, o.languages.jsx = o.languages.extend("markup", l), o.languages.jsx.tag.pattern = c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, o.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, o.languages.jsx.tag.inside.comment = l.comment, o.languages.insertBefore("inside", "attr-name", { spread: { pattern: c(/<SPREAD>/.source), inside: o.languages.jsx } }, o.languages.jsx.tag), o.languages.insertBefore("inside", "special-attr", { script: { pattern: c(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: o.languages.jsx } } }, o.languages.jsx.tag);
      var d = function(g) {
        return g ? typeof g == "string" ? g : typeof g.content == "string" ? g.content : g.content.map(d).join("") : "";
      }, m = function(g) {
        for (var p = [], h = 0; h < g.length; h++) {
          var f = g[h], x = !1;
          if (typeof f != "string" && (f.type === "tag" && f.content[0] && f.content[0].type === "tag" ? f.content[0].content[0].content === "</" ? p.length > 0 && p[p.length - 1].tagName === d(f.content[0].content[1]) && p.pop() : f.content[f.content.length - 1].content === "/>" || p.push({ tagName: d(f.content[0].content[1]), openedBraces: 0 }) : p.length > 0 && f.type === "punctuation" && f.content === "{" ? p[p.length - 1].openedBraces++ : p.length > 0 && p[p.length - 1].openedBraces > 0 && f.type === "punctuation" && f.content === "}" ? p[p.length - 1].openedBraces-- : x = !0), (x || typeof f == "string") && p.length > 0 && p[p.length - 1].openedBraces === 0) {
            var y = d(f);
            h < g.length - 1 && (typeof g[h + 1] == "string" || g[h + 1].type === "plain-text") && (y += d(g[h + 1]), g.splice(h + 1, 1)), h > 0 && (typeof g[h - 1] == "string" || g[h - 1].type === "plain-text") && (y = d(g[h - 1]) + y, g.splice(h - 1, 1), h--), g[h] = new o.Token("plain-text", y, null, y);
          }
          f.content && typeof f.content != "string" && m(f.content);
        }
      };
      o.hooks.add("after-tokenize", function(g) {
        g.language !== "jsx" && g.language !== "tsx" || m(g.tokens);
      });
    })(n);
  }
} }), bd = H({ "../../node_modules/refractor/lang/tsx.js"(e, t) {
  var r = Ts(), n = _s();
  t.exports = o, o.displayName = "tsx", o.aliases = [];
  function o(l) {
    l.register(r), l.register(n), function(i) {
      var u = i.util.clone(i.languages.typescript);
      i.languages.tsx = i.languages.extend("jsx", u), delete i.languages.tsx.parameter, delete i.languages.tsx["literal-property"];
      var s = i.languages.tsx.tag;
      s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")", s.pattern.flags), s.lookbehind = !0;
    }(l);
  }
} }), yd = H({ "../../node_modules/refractor/lang/clike.js"(e, t) {
  t.exports = r, r.displayName = "clike", r.aliases = [];
  function r(n) {
    n.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), vd = H({ "../../node_modules/refractor/lang/javascript.js"(e, t) {
  t.exports = r, r.displayName = "javascript", r.aliases = ["js"];
  function r(n) {
    n.languages.javascript = n.languages.extend("clike", { "class-name": [n.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: n.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: n.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), n.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: n.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), n.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript;
  }
} }), Os = H({ "../../node_modules/refractor/lang/css.js"(e, t) {
  t.exports = r, r.displayName = "css", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      o.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + l.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: l, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, o.languages.css.atrule.inside.rest = o.languages.css;
      var i = o.languages.markup;
      i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
    })(n);
  }
} }), Rs = H({ "../../node_modules/refractor/lang/markup.js"(e, t) {
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
} }), Ed = H({ "../../node_modules/xtend/immutable.js"(e, t) {
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
} }), Fs = H({ "../../node_modules/property-information/lib/util/schema.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.normal = {}, r.property = {};
  function n(o, l, i) {
    this.property = o, this.normal = l, i && (this.space = i);
  }
} }), xd = H({ "../../node_modules/property-information/lib/util/merge.js"(e, t) {
  var r = Ed(), n = Fs();
  t.exports = o;
  function o(l) {
    for (var i = l.length, u = [], s = [], c = -1, d, m; ++c < i; )
      d = l[c], u.push(d.property), s.push(d.normal), m = d.space;
    return new n(r.apply(null, u), r.apply(null, s), m);
  }
} }), co = H({ "../../node_modules/property-information/normalize.js"(e, t) {
  t.exports = r;
  function r(n) {
    return n.toLowerCase();
  }
} }), Ds = H({ "../../node_modules/property-information/lib/util/info.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1;
  function n(o, l) {
    this.property = o, this.attribute = l;
  }
} }), po = H({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var t = 0;
  e.boolean = r(), e.booleanish = r(), e.overloadedBoolean = r(), e.number = r(), e.spaceSeparated = r(), e.commaSeparated = r(), e.commaOrSpaceSeparated = r();
  function r() {
    return Math.pow(2, ++t);
  }
} }), Ls = H({ "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
  var r = Ds(), n = po();
  t.exports = i, i.prototype = new r(), i.prototype.defined = !0;
  var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], l = o.length;
  function i(s, c, d, m) {
    var g = -1, p;
    for (u(this, "space", m), r.call(this, s, c); ++g < l; )
      p = o[g], u(this, p, (d & n[p]) === n[p]);
  }
  function u(s, c, d) {
    d && (s[c] = d);
  }
} }), Lr = H({ "../../node_modules/property-information/lib/util/create.js"(e, t) {
  var r = co(), n = Fs(), o = Ls();
  t.exports = l;
  function l(i) {
    var u = i.space, s = i.mustUseProperty || [], c = i.attributes || {}, d = i.properties, m = i.transform, g = {}, p = {}, h, f;
    for (h in d)
      f = new o(h, m(c, h), d[h], u), s.indexOf(h) !== -1 && (f.mustUseProperty = !0), g[h] = f, p[r(h)] = h, p[r(f.attribute)] = h;
    return new n(g, p, u);
  }
} }), Ad = H({ "../../node_modules/property-information/lib/xlink.js"(e, t) {
  var r = Lr();
  t.exports = r({ space: "xlink", transform: n, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function n(o, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  }
} }), wd = H({ "../../node_modules/property-information/lib/xml.js"(e, t) {
  var r = Lr();
  t.exports = r({ space: "xml", transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function n(o, l) {
    return "xml:" + l.slice(3).toLowerCase();
  }
} }), Sd = H({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, t) {
  t.exports = r;
  function r(n, o) {
    return o in n ? n[o] : o;
  }
} }), $s = H({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, t) {
  var r = Sd();
  t.exports = n;
  function n(o, l) {
    return r(o, l.toLowerCase());
  }
} }), Cd = H({ "../../node_modules/property-information/lib/xmlns.js"(e, t) {
  var r = Lr(), n = $s();
  t.exports = r({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: n, properties: { xmlns: null, xmlnsXLink: null } });
} }), kd = H({ "../../node_modules/property-information/lib/aria.js"(e, t) {
  var r = po(), n = Lr(), o = r.booleanish, l = r.number, i = r.spaceSeparated;
  t.exports = n({ transform: u, properties: { ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: l, ariaColIndex: l, ariaColSpan: l, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: o, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: i, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: i, ariaRowCount: l, ariaRowIndex: l, ariaRowSpan: l, ariaSelected: o, ariaSetSize: l, ariaSort: null, ariaValueMax: l, ariaValueMin: l, ariaValueNow: l, ariaValueText: null, role: null } });
  function u(s, c) {
    return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
  }
} }), _d = H({ "../../node_modules/property-information/lib/html.js"(e, t) {
  var r = po(), n = Lr(), o = $s(), l = r.boolean, i = r.overloadedBoolean, u = r.booleanish, s = r.number, c = r.spaceSeparated, d = r.commaSeparated;
  t.exports = n({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: d, acceptCharset: c, accessKey: c, action: null, allow: null, allowFullScreen: l, allowPaymentRequest: l, allowUserMedia: l, alt: null, as: null, async: l, autoCapitalize: null, autoComplete: c, autoFocus: l, autoPlay: l, capture: l, charSet: null, checked: l, cite: null, className: c, cols: s, colSpan: null, content: null, contentEditable: u, controls: l, controlsList: c, coords: s | d, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l, defer: l, dir: null, dirName: null, disabled: l, download: i, draggable: u, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l, formTarget: null, headers: c, height: s, hidden: l, high: s, href: null, hrefLang: null, htmlFor: c, httpEquiv: c, id: null, imageSizes: null, imageSrcSet: d, inputMode: null, integrity: null, is: null, isMap: l, itemId: null, itemProp: c, itemRef: c, itemScope: l, itemType: c, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l, low: s, manifest: null, max: null, maxLength: s, media: null, method: null, min: null, minLength: s, multiple: l, muted: l, name: null, nonce: null, noModule: l, noValidate: l, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l, optimum: s, pattern: null, ping: c, placeholder: null, playsInline: l, poster: null, preload: null, readOnly: l, referrerPolicy: null, rel: c, required: l, reversed: l, rows: s, rowSpan: s, sandbox: c, scope: null, scoped: l, seamless: l, selected: l, shape: null, size: s, sizes: null, slot: null, span: s, spellCheck: u, src: null, srcDoc: null, srcLang: null, srcSet: d, start: s, step: null, style: null, tabIndex: s, target: null, title: null, translate: null, type: null, typeMustMatch: l, useMap: null, value: u, width: s, wrap: null, align: null, aLink: null, archive: c, axis: null, background: null, bgColor: null, border: s, borderColor: null, bottomMargin: s, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l, declare: l, event: null, face: null, frame: null, frameBorder: null, hSpace: s, leftMargin: s, link: null, longDesc: null, lowSrc: null, marginHeight: s, marginWidth: s, noResize: l, noHref: l, noShade: l, noWrap: l, object: null, profile: null, prompt: null, rev: null, rightMargin: s, rules: null, scheme: null, scrolling: u, standby: null, summary: null, text: null, topMargin: s, valueType: null, version: null, vAlign: null, vLink: null, vSpace: s, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l, disableRemotePlayback: l, prefix: null, property: null, results: s, security: null, unselectable: null } });
} }), Td = H({ "../../node_modules/property-information/html.js"(e, t) {
  var r = xd(), n = Ad(), o = wd(), l = Cd(), i = kd(), u = _d();
  t.exports = r([o, n, l, i, u]);
} }), Od = H({ "../../node_modules/property-information/find.js"(e, t) {
  var r = co(), n = Ls(), o = Ds(), l = "data";
  t.exports = c;
  var i = /^data[-\w.:]+$/i, u = /-[a-z]/g, s = /[A-Z]/g;
  function c(h, f) {
    var x = r(f), y = f, A = o;
    return x in h.normal ? h.property[h.normal[x]] : (x.length > 4 && x.slice(0, 4) === l && i.test(f) && (f.charAt(4) === "-" ? y = d(f) : f = m(f), A = n), new A(y, f));
  }
  function d(h) {
    var f = h.slice(5).replace(u, p);
    return l + f.charAt(0).toUpperCase() + f.slice(1);
  }
  function m(h) {
    var f = h.slice(4);
    return u.test(f) ? h : (f = f.replace(s, g), f.charAt(0) !== "-" && (f = "-" + f), l + f);
  }
  function g(h) {
    return "-" + h.toLowerCase();
  }
  function p(h) {
    return h.charAt(1).toUpperCase();
  }
} }), Rd = H({ "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
  t.exports = n;
  var r = /[#.]/g;
  function n(o, l) {
    for (var i = o || "", u = l || "div", s = {}, c = 0, d, m, g; c < i.length; )
      r.lastIndex = c, g = r.exec(i), d = i.slice(c, g ? g.index : i.length), d && (m ? m === "#" ? s.id = d : s.className ? s.className.push(d) : s.className = [d] : u = d, c += d.length), g && (m = g[0], c++);
    return { type: "element", tagName: u, properties: s, children: [] };
  }
} }), Fd = H({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = "", r = " ", n = /[ \t\n\r\f]+/g;
  function o(i) {
    var u = String(i || t).trim();
    return u === t ? [] : u.split(n);
  }
  function l(i) {
    return i.join(r).trim();
  }
} }), Dd = H({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = ",", r = " ", n = "";
  function o(i) {
    for (var u = [], s = String(i || n), c = s.indexOf(t), d = 0, m = !1, g; !m; )
      c === -1 && (c = s.length, m = !0), g = s.slice(d, c).trim(), (g || !m) && u.push(g), d = c + 1, c = s.indexOf(t, d);
    return u;
  }
  function l(i, u) {
    var s = u || {}, c = s.padLeft === !1 ? n : r, d = s.padRight ? r : n;
    return i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim();
  }
} }), Ld = H({ "../../node_modules/hastscript/factory.js"(e, t) {
  var r = Od(), n = co(), o = Rd(), l = Fd().parse, i = Dd().parse;
  t.exports = s;
  var u = {}.hasOwnProperty;
  function s(x, y, A) {
    var v = A ? f(A) : null;
    return E;
    function E(S, k) {
      var C = o(S, y), T = Array.prototype.slice.call(arguments, 2), O = C.tagName.toLowerCase(), R;
      if (C.tagName = v && u.call(v, O) ? v[O] : O, k && c(k, C) && (T.unshift(k), k = null), k)
        for (R in k)
          w(C.properties, R, k[R]);
      return m(C.children, T), C.tagName === "template" && (C.content = { type: "root", children: C.children }, C.children = []), C;
    }
    function w(S, k, C) {
      var T, O, R;
      C == null || C !== C || (T = r(x, k), O = T.property, R = C, typeof R == "string" && (T.spaceSeparated ? R = l(R) : T.commaSeparated ? R = i(R) : T.commaOrSpaceSeparated && (R = l(i(R).join(" ")))), O === "style" && typeof C != "string" && (R = h(R)), O === "className" && S.className && (R = S.className.concat(R)), S[O] = g(T, O, R));
    }
  }
  function c(x, y) {
    return typeof x == "string" || "length" in x || d(y.tagName, x);
  }
  function d(x, y) {
    var A = y.type;
    return x === "input" || !A || typeof A != "string" ? !1 : typeof y.children == "object" && "length" in y.children ? !0 : (A = A.toLowerCase(), x === "button" ? A !== "menu" && A !== "submit" && A !== "reset" && A !== "button" : "value" in y);
  }
  function m(x, y) {
    var A, v;
    if (typeof y == "string" || typeof y == "number") {
      x.push({ type: "text", value: String(y) });
      return;
    }
    if (typeof y == "object" && "length" in y) {
      for (A = -1, v = y.length; ++A < v; )
        m(x, y[A]);
      return;
    }
    if (typeof y != "object" || !("type" in y))
      throw new Error("Expected node, nodes, or string, got `" + y + "`");
    x.push(y);
  }
  function g(x, y, A) {
    var v, E, w;
    if (typeof A != "object" || !("length" in A))
      return p(x, y, A);
    for (E = A.length, v = -1, w = []; ++v < E; )
      w[v] = p(x, y, A[v]);
    return w;
  }
  function p(x, y, A) {
    var v = A;
    return x.number || x.positiveNumber ? !isNaN(v) && v !== "" && (v = Number(v)) : (x.boolean || x.overloadedBoolean) && typeof v == "string" && (v === "" || n(A) === n(y)) && (v = !0), v;
  }
  function h(x) {
    var y = [], A;
    for (A in x)
      y.push([A, x[A]].join(": "));
    return y.join("; ");
  }
  function f(x) {
    for (var y = x.length, A = -1, v = {}, E; ++A < y; )
      E = x[A], v[E.toLowerCase()] = E;
    return v;
  }
} }), $d = H({ "../../node_modules/hastscript/html.js"(e, t) {
  var r = Td(), n = Ld(), o = n(r, "div");
  o.displayName = "html", t.exports = o;
} }), Md = H({ "../../node_modules/hastscript/index.js"(e, t) {
  t.exports = $d();
} }), Bd = H({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, t) {
  t.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), Id = H({ "../../node_modules/character-reference-invalid/index.json"(e, t) {
  t.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), Ms = H({ "../../node_modules/is-decimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 48 && o <= 57;
  }
} }), Pd = H({ "../../node_modules/is-hexadecimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 102 || o >= 65 && o <= 70 || o >= 48 && o <= 57;
  }
} }), Nd = H({ "../../node_modules/is-alphabetical/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 122 || o >= 65 && o <= 90;
  }
} }), jd = H({ "../../node_modules/is-alphanumerical/index.js"(e, t) {
  var r = Nd(), n = Ms();
  t.exports = o;
  function o(l) {
    return r(l) || n(l);
  }
} }), Hd = H({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, t) {
  t.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), Zd = H({ "../../node_modules/parse-entities/decode-entity.js"(e, t) {
  var r = Hd();
  t.exports = o;
  var n = {}.hasOwnProperty;
  function o(l) {
    return n.call(r, l) ? r[l] : !1;
  }
} }), Vd = H({ "../../node_modules/parse-entities/index.js"(e, t) {
  var r = Bd(), n = Id(), o = Ms(), l = Pd(), i = jd(), u = Zd();
  t.exports = X;
  var s = {}.hasOwnProperty, c = String.fromCharCode, d = Function.prototype, m = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, g = 9, p = 10, h = 12, f = 32, x = 38, y = 59, A = 60, v = 61, E = 35, w = 88, S = 120, k = 65533, C = "named", T = "hexadecimal", O = "decimal", R = {};
  R[T] = 16, R[O] = 10;
  var D = {};
  D[C] = i, D[O] = o, D[T] = l;
  var F = 1, P = 2, L = 3, $ = 4, N = 5, Z = 6, B = 7, j = {};
  j[F] = "Named character references must be terminated by a semicolon", j[P] = "Numeric character references must be terminated by a semicolon", j[L] = "Named character references cannot be empty", j[$] = "Numeric character references cannot be empty", j[N] = "Named character references must be known", j[Z] = "Numeric character references cannot be disallowed", j[B] = "Numeric character references cannot be outside the permissible Unicode range";
  function X(I, V) {
    var U = {}, se, be;
    V || (V = {});
    for (be in m)
      se = V[be], U[be] = se ?? m[be];
    return (U.position.indent || U.position.start) && (U.indent = U.position.indent || [], U.position = U.position.start), ne(I, U);
  }
  function ne(I, V) {
    var U = V.additional, se = V.nonTerminated, be = V.text, ot = V.reference, Re = V.warning, Ze = V.textContext, M = V.referenceContext, Pe = V.warningContext, Ve = V.position, Et = V.indent || [], Pt = I.length, ze = 0, Nr = -1, ye = Ve.column || 1, xt = Ve.line || 1, qe = "", Nt = [], Ue, jt, We, fe, Ne, ue, ae, Ge, jr, zn, At, ur, wt, lt, al, cr, Hr, Ye, ce;
    for (typeof U == "string" && (U = U.charCodeAt(0)), cr = dr(), Ge = Re ? s0 : d, ze--, Pt++; ++ze < Pt; )
      if (Ne === p && (ye = Et[Nr] || 1), Ne = I.charCodeAt(ze), Ne === x) {
        if (ae = I.charCodeAt(ze + 1), ae === g || ae === p || ae === h || ae === f || ae === x || ae === A || ae !== ae || U && ae === U) {
          qe += c(Ne), ye++;
          continue;
        }
        for (wt = ze + 1, ur = wt, ce = wt, ae === E ? (ce = ++ur, ae = I.charCodeAt(ce), ae === w || ae === S ? (lt = T, ce = ++ur) : lt = O) : lt = C, Ue = "", At = "", fe = "", al = D[lt], ce--; ++ce < Pt && (ae = I.charCodeAt(ce), !!al(ae)); )
          fe += c(ae), lt === C && s.call(r, fe) && (Ue = fe, At = r[fe]);
        We = I.charCodeAt(ce) === y, We && (ce++, jt = lt === C ? u(fe) : !1, jt && (Ue = fe, At = jt)), Ye = 1 + ce - wt, !We && !se || (fe ? lt === C ? (We && !At ? Ge(N, 1) : (Ue !== fe && (ce = ur + Ue.length, Ye = 1 + ce - ur, We = !1), We || (jr = Ue ? F : L, V.attribute ? (ae = I.charCodeAt(ce), ae === v ? (Ge(jr, Ye), At = null) : i(ae) ? At = null : Ge(jr, Ye)) : Ge(jr, Ye))), ue = At) : (We || Ge(P, Ye), ue = parseInt(fe, R[lt]), Y(ue) ? (Ge(B, Ye), ue = c(k)) : ue in n ? (Ge(Z, Ye), ue = n[ue]) : (zn = "", J(ue) && Ge(Z, Ye), ue > 65535 && (ue -= 65536, zn += c(ue >>> 10 | 55296), ue = 56320 | ue & 1023), ue = zn + c(ue))) : lt !== C && Ge($, Ye)), ue ? (ol(), cr = dr(), ze = ce - 1, ye += ce - wt + 1, Nt.push(ue), Hr = dr(), Hr.offset++, ot && ot.call(M, ue, { start: cr, end: Hr }, I.slice(wt - 1, ce)), cr = Hr) : (fe = I.slice(wt - 1, ce), qe += fe, ye += fe.length, ze = ce - 1);
      } else
        Ne === 10 && (xt++, Nr++, ye = 0), Ne === Ne ? (qe += c(Ne), ye++) : ol();
    return Nt.join("");
    function dr() {
      return { line: xt, column: ye, offset: ze + (Ve.offset || 0) };
    }
    function s0(ll, il) {
      var qn = dr();
      qn.column += il, qn.offset += il, Re.call(Pe, j[ll], qn, ll);
    }
    function ol() {
      qe && (Nt.push(qe), be && be.call(Ze, qe, { start: cr, end: dr() }), qe = "");
    }
  }
  function Y(I) {
    return I >= 55296 && I <= 57343 || I > 1114111;
  }
  function J(I) {
    return I >= 1 && I <= 8 || I === 11 || I >= 13 && I <= 31 || I >= 127 && I <= 159 || I >= 64976 && I <= 65007 || (I & 65535) === 65535 || (I & 65535) === 65534;
  }
} }), zd = H({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, t) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, n = function(o) {
    var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, u = {}, s = { manual: o.Prism && o.Prism.manual, disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler, util: { encode: function v(E) {
      return E instanceof c ? new c(E.type, v(E.content), E.alias) : Array.isArray(E) ? E.map(v) : E.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(v) {
      return Object.prototype.toString.call(v).slice(8, -1);
    }, objId: function(v) {
      return v.__id || Object.defineProperty(v, "__id", { value: ++i }), v.__id;
    }, clone: function v(E, w) {
      w = w || {};
      var S, k;
      switch (s.util.type(E)) {
        case "Object":
          if (k = s.util.objId(E), w[k])
            return w[k];
          S = {}, w[k] = S;
          for (var C in E)
            E.hasOwnProperty(C) && (S[C] = v(E[C], w));
          return S;
        case "Array":
          return k = s.util.objId(E), w[k] ? w[k] : (S = [], w[k] = S, E.forEach(function(T, O) {
            S[O] = v(T, w);
          }), S);
        default:
          return E;
      }
    }, getLanguage: function(v) {
      for (; v; ) {
        var E = l.exec(v.className);
        if (E)
          return E[1].toLowerCase();
        v = v.parentElement;
      }
      return "none";
    }, setLanguage: function(v, E) {
      v.className = v.className.replace(RegExp(l, "gi"), ""), v.classList.add("language-" + E);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (S) {
        var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
        if (v) {
          var E = document.getElementsByTagName("script");
          for (var w in E)
            if (E[w].src == v)
              return E[w];
        }
        return null;
      }
    }, isActive: function(v, E, w) {
      for (var S = "no-" + E; v; ) {
        var k = v.classList;
        if (k.contains(E))
          return !0;
        if (k.contains(S))
          return !1;
        v = v.parentElement;
      }
      return !!w;
    } }, languages: { plain: u, plaintext: u, text: u, txt: u, extend: function(v, E) {
      var w = s.util.clone(s.languages[v]);
      for (var S in E)
        w[S] = E[S];
      return w;
    }, insertBefore: function(v, E, w, S) {
      S = S || s.languages;
      var k = S[v], C = {};
      for (var T in k)
        if (k.hasOwnProperty(T)) {
          if (T == E)
            for (var O in w)
              w.hasOwnProperty(O) && (C[O] = w[O]);
          w.hasOwnProperty(T) || (C[T] = k[T]);
        }
      var R = S[v];
      return S[v] = C, s.languages.DFS(s.languages, function(D, F) {
        F === R && D != v && (this[D] = C);
      }), C;
    }, DFS: function v(E, w, S, k) {
      k = k || {};
      var C = s.util.objId;
      for (var T in E)
        if (E.hasOwnProperty(T)) {
          w.call(E, T, E[T], S || T);
          var O = E[T], R = s.util.type(O);
          R === "Object" && !k[C(O)] ? (k[C(O)] = !0, v(O, w, null, k)) : R === "Array" && !k[C(O)] && (k[C(O)] = !0, v(O, w, T, k));
        }
    } }, plugins: {}, highlightAll: function(v, E) {
      s.highlightAllUnder(document, v, E);
    }, highlightAllUnder: function(v, E, w) {
      var S = { callback: w, container: v, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      s.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), s.hooks.run("before-all-elements-highlight", S);
      for (var k = 0, C; C = S.elements[k++]; )
        s.highlightElement(C, E === !0, S.callback);
    }, highlightElement: function(v, E, w) {
      var S = s.util.getLanguage(v), k = s.languages[S];
      s.util.setLanguage(v, S);
      var C = v.parentElement;
      C && C.nodeName.toLowerCase() === "pre" && s.util.setLanguage(C, S);
      var T = v.textContent, O = { element: v, language: S, grammar: k, code: T };
      function R(F) {
        O.highlightedCode = F, s.hooks.run("before-insert", O), O.element.innerHTML = O.highlightedCode, s.hooks.run("after-highlight", O), s.hooks.run("complete", O), w && w.call(O.element);
      }
      if (s.hooks.run("before-sanity-check", O), C = O.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !O.code) {
        s.hooks.run("complete", O), w && w.call(O.element);
        return;
      }
      if (s.hooks.run("before-highlight", O), !O.grammar) {
        R(s.util.encode(O.code));
        return;
      }
      if (E && o.Worker) {
        var D = new Worker(s.filename);
        D.onmessage = function(F) {
          R(F.data);
        }, D.postMessage(JSON.stringify({ language: O.language, code: O.code, immediateClose: !0 }));
      } else
        R(s.highlight(O.code, O.grammar, O.language));
    }, highlight: function(v, E, w) {
      var S = { code: v, grammar: E, language: w };
      if (s.hooks.run("before-tokenize", S), !S.grammar)
        throw new Error('The language "' + S.language + '" has no grammar.');
      return S.tokens = s.tokenize(S.code, S.grammar), s.hooks.run("after-tokenize", S), c.stringify(s.util.encode(S.tokens), S.language);
    }, tokenize: function(v, E) {
      var w = E.rest;
      if (w) {
        for (var S in w)
          E[S] = w[S];
        delete E.rest;
      }
      var k = new g();
      return p(k, k.head, v), m(v, k, E, k.head, 0), f(k);
    }, hooks: { all: {}, add: function(v, E) {
      var w = s.hooks.all;
      w[v] = w[v] || [], w[v].push(E);
    }, run: function(v, E) {
      var w = s.hooks.all[v];
      if (!(!w || !w.length))
        for (var S = 0, k; k = w[S++]; )
          k(E);
    } }, Token: c };
    o.Prism = s;
    function c(v, E, w, S) {
      this.type = v, this.content = E, this.alias = w, this.length = (S || "").length | 0;
    }
    c.stringify = function v(E, w) {
      if (typeof E == "string")
        return E;
      if (Array.isArray(E)) {
        var S = "";
        return E.forEach(function(R) {
          S += v(R, w);
        }), S;
      }
      var k = { type: E.type, content: v(E.content, w), tag: "span", classes: ["token", E.type], attributes: {}, language: w }, C = E.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(k.classes, C) : k.classes.push(C)), s.hooks.run("wrap", k);
      var T = "";
      for (var O in k.attributes)
        T += " " + O + '="' + (k.attributes[O] || "").replace(/"/g, "&quot;") + '"';
      return "<" + k.tag + ' class="' + k.classes.join(" ") + '"' + T + ">" + k.content + "</" + k.tag + ">";
    };
    function d(v, E, w, S) {
      v.lastIndex = E;
      var k = v.exec(w);
      if (k && S && k[1]) {
        var C = k[1].length;
        k.index += C, k[0] = k[0].slice(C);
      }
      return k;
    }
    function m(v, E, w, S, k, C) {
      for (var T in w)
        if (!(!w.hasOwnProperty(T) || !w[T])) {
          var O = w[T];
          O = Array.isArray(O) ? O : [O];
          for (var R = 0; R < O.length; ++R) {
            if (C && C.cause == T + "," + R)
              return;
            var D = O[R], F = D.inside, P = !!D.lookbehind, L = !!D.greedy, $ = D.alias;
            if (L && !D.pattern.global) {
              var N = D.pattern.toString().match(/[imsuy]*$/)[0];
              D.pattern = RegExp(D.pattern.source, N + "g");
            }
            for (var Z = D.pattern || D, B = S.next, j = k; B !== E.tail && !(C && j >= C.reach); j += B.value.length, B = B.next) {
              var X = B.value;
              if (E.length > v.length)
                return;
              if (!(X instanceof c)) {
                var ne = 1, Y;
                if (L) {
                  if (Y = d(Z, j, v, P), !Y || Y.index >= v.length)
                    break;
                  var U = Y.index, J = Y.index + Y[0].length, I = j;
                  for (I += B.value.length; U >= I; )
                    B = B.next, I += B.value.length;
                  if (I -= B.value.length, j = I, B.value instanceof c)
                    continue;
                  for (var V = B; V !== E.tail && (I < J || typeof V.value == "string"); V = V.next)
                    ne++, I += V.value.length;
                  ne--, X = v.slice(j, I), Y.index -= j;
                } else if (Y = d(Z, 0, X, P), !Y)
                  continue;
                var U = Y.index, se = Y[0], be = X.slice(0, U), ot = X.slice(U + se.length), Re = j + X.length;
                C && Re > C.reach && (C.reach = Re);
                var Ze = B.prev;
                be && (Ze = p(E, Ze, be), j += be.length), h(E, Ze, ne);
                var M = new c(T, F ? s.tokenize(se, F) : se, $, se);
                if (B = p(E, Ze, M), ot && p(E, B, ot), ne > 1) {
                  var Pe = { cause: T + "," + R, reach: Re };
                  m(v, E, w, B.prev, j, Pe), C && Pe.reach > C.reach && (C.reach = Pe.reach);
                }
              }
            }
          }
        }
    }
    function g() {
      var v = { value: null, prev: null, next: null }, E = { value: null, prev: v, next: null };
      v.next = E, this.head = v, this.tail = E, this.length = 0;
    }
    function p(v, E, w) {
      var S = E.next, k = { value: w, prev: E, next: S };
      return E.next = k, S.prev = k, v.length++, k;
    }
    function h(v, E, w) {
      for (var S = E.next, k = 0; k < w && S !== v.tail; k++)
        S = S.next;
      E.next = S, S.prev = E, v.length -= k;
    }
    function f(v) {
      for (var E = [], w = v.head.next; w !== v.tail; )
        E.push(w.value), w = w.next;
      return E;
    }
    if (!o.document)
      return o.addEventListener && (s.disableWorkerMessageHandler || o.addEventListener("message", function(v) {
        var E = JSON.parse(v.data), w = E.language, S = E.code, k = E.immediateClose;
        o.postMessage(s.highlight(S, s.languages[w], w)), k && o.close();
      }, !1)), s;
    var x = s.util.currentScript();
    x && (s.filename = x.src, x.hasAttribute("data-manual") && (s.manual = !0));
    function y() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var A = document.readyState;
      A === "loading" || A === "interactive" && x && x.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return s;
  }(r);
  typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
} }), qd = H({ "../../node_modules/refractor/core.js"(e, t) {
  var r = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, n = k();
  r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var o = Md(), l = Vd(), i = zd(), u = Rs(), s = Os(), c = yd(), d = vd();
  n();
  var m = {}.hasOwnProperty;
  function g() {
  }
  g.prototype = i;
  var p = new g();
  t.exports = p, p.highlight = x, p.register = h, p.alias = f, p.registered = y, p.listLanguages = A, h(u), h(s), h(c), h(d), p.util.encode = w, p.Token.stringify = v;
  function h(C) {
    if (typeof C != "function" || !C.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + C + "`");
    p.languages[C.displayName] === void 0 && C(p);
  }
  function f(C, T) {
    var O = p.languages, R = C, D, F, P, L;
    T && (R = {}, R[C] = T);
    for (D in R)
      for (F = R[D], F = typeof F == "string" ? [F] : F, P = F.length, L = -1; ++L < P; )
        O[F[L]] = O[D];
  }
  function x(C, T) {
    var O = i.highlight, R;
    if (typeof C != "string")
      throw new Error("Expected `string` for `value`, got `" + C + "`");
    if (p.util.type(T) === "Object")
      R = T, T = null;
    else {
      if (typeof T != "string")
        throw new Error("Expected `string` for `name`, got `" + T + "`");
      if (m.call(p.languages, T))
        R = p.languages[T];
      else
        throw new Error("Unknown language: `" + T + "` is not registered");
    }
    return O.call(this, C, R, T);
  }
  function y(C) {
    if (typeof C != "string")
      throw new Error("Expected `string` for `language`, got `" + C + "`");
    return m.call(p.languages, C);
  }
  function A() {
    var C = p.languages, T = [], O;
    for (O in C)
      m.call(C, O) && typeof C[O] == "object" && T.push(O);
    return T;
  }
  function v(C, T, O) {
    var R;
    return typeof C == "string" ? { type: "text", value: C } : p.util.type(C) === "Array" ? E(C, T) : (R = { type: C.type, content: p.Token.stringify(C.content, T, O), tag: "span", classes: ["token", C.type], attributes: {}, language: T, parent: O }, C.alias && (R.classes = R.classes.concat(C.alias)), p.hooks.run("wrap", R), o(R.tag + "." + R.classes.join("."), S(R.attributes), R.content));
  }
  function E(C, T) {
    for (var O = [], R = C.length, D = -1, F; ++D < R; )
      F = C[D], F !== "" && F !== null && F !== void 0 && O.push(F);
    for (D = -1, R = O.length; ++D < R; )
      F = O[D], O[D] = p.Token.stringify(F, T, O);
    return O;
  }
  function w(C) {
    return C;
  }
  function S(C) {
    var T;
    for (T in C)
      C[T] = l(C[T]);
    return C;
  }
  function k() {
    var C = "Prism" in r, T = C ? r.Prism : void 0;
    return O;
    function O() {
      C ? r.Prism = T : delete r.Prism, C = void 0, T = void 0;
    }
  }
} }), Ud = H({ "../../node_modules/refractor/lang/bash.js"(e, t) {
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
} }), Wd = H({ "../../node_modules/refractor/lang/js-extras.js"(e, t) {
  t.exports = r, r.displayName = "jsExtras", r.aliases = [];
  function r(n) {
    (function(o) {
      o.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + o.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), o.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + o.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), o.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function l(m, g) {
        return RegExp(m.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), g);
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
} }), Gd = H({ "../../node_modules/refractor/lang/json.js"(e, t) {
  t.exports = r, r.displayName = "json", r.aliases = ["webmanifest"];
  function r(n) {
    n.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, n.languages.webmanifest = n.languages.json;
  }
} }), Yd = H({ "../../node_modules/refractor/lang/graphql.js"(e, t) {
  t.exports = r, r.displayName = "graphql", r.aliases = [];
  function r(n) {
    n.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: n.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, n.hooks.add("after-tokenize", function(o) {
      if (o.language !== "graphql")
        return;
      var l = o.tokens.filter(function(A) {
        return typeof A != "string" && A.type !== "comment" && A.type !== "scalar";
      }), i = 0;
      function u(A) {
        return l[i + A];
      }
      function s(A, v) {
        v = v || 0;
        for (var E = 0; E < A.length; E++) {
          var w = u(E + v);
          if (!w || w.type !== A[E])
            return !1;
        }
        return !0;
      }
      function c(A, v) {
        for (var E = 1, w = i; w < l.length; w++) {
          var S = l[w], k = S.content;
          if (S.type === "punctuation" && typeof k == "string") {
            if (A.test(k))
              E++;
            else if (v.test(k) && (E--, E === 0))
              return w;
          }
        }
        return -1;
      }
      function d(A, v) {
        var E = A.alias;
        E ? Array.isArray(E) || (A.alias = E = [E]) : A.alias = E = [], E.push(v);
      }
      for (; i < l.length; ) {
        var m = l[i++];
        if (m.type === "keyword" && m.content === "mutation") {
          var g = [];
          if (s(["definition-mutation", "punctuation"]) && u(1).content === "(") {
            i += 2;
            var p = c(/^\($/, /^\)$/);
            if (p === -1)
              continue;
            for (; i < p; i++) {
              var h = u(0);
              h.type === "variable" && (d(h, "variable-input"), g.push(h.content));
            }
            i = p + 1;
          }
          if (s(["punctuation", "property-query"]) && u(0).content === "{" && (i++, d(u(0), "property-mutation"), g.length > 0)) {
            var f = c(/^\{$/, /^\}$/);
            if (f === -1)
              continue;
            for (var x = i; x < f; x++) {
              var y = l[x];
              y.type === "variable" && g.indexOf(y.content) >= 0 && d(y, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: Kd } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { global: Xd } = __STORYBOOK_MODULE_GLOBAL__;
var Jd = Te(Ts()), Qd = Jd.default, ep = Te(Ud()), tp = ep.default, rp = Te(Os()), np = rp.default, ap = Te(Wd()), op = ap.default, lp = Te(Gd()), ip = lp.default, sp = Te(Yd()), up = sp.default, cp = Te(Rs()), dp = cp.default, pp = Te(gd()), fp = pp.default, mp = Te(hd()), gp = mp.default, hp = Te(bd()), bp = hp.default, yp = Te(_s()), vp = yp.default;
function Ep(e, t) {
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
function _a(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xp(e) {
  if (Array.isArray(e))
    return _a(e);
}
function Ap(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function wp(e, t) {
  if (e) {
    if (typeof e == "string")
      return _a(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _a(e, t);
  }
}
function Sp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cp(e) {
  return xp(e) || Ap(e) || wp(e) || Sp();
}
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function kp(e, t) {
  if (wr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _p(e) {
  var t = kp(e, "string");
  return wr(t) === "symbol" ? t : String(t);
}
function Bs(e, t, r) {
  return t = _p(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dl(Object(r), !0).forEach(function(n) {
      Bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tp(e) {
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
var ea = {};
function Op(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var t = e.join(".");
  return ea[t] || (ea[t] = Tp(e)), ea[t];
}
function Rp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e.filter(function(l) {
    return l !== "token";
  }), o = Op(n);
  return o.reduce(function(l, i) {
    return qt(qt({}, l), r[i]);
  }, t);
}
function Ll(e) {
  return e.join(" ");
}
function Fp(e, t) {
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
    var m = Fp(r, l), g;
    if (!l)
      g = qt(qt({}, u), {}, { className: Ll(u.className) });
    else {
      var p = Object.keys(r).reduce(function(y, A) {
        return A.split(".").forEach(function(v) {
          y.includes(v) || y.push(v);
        }), y;
      }, []), h = u.className && u.className.includes("token") ? ["token"] : [], f = u.className && h.concat(u.className.filter(function(y) {
        return !p.includes(y);
      }));
      g = qt(qt({}, u), {}, { className: Ll(f) || void 0, style: Rp(u.className, Object.assign({}, u.style, o), r) });
    }
    var x = m(t.children);
    return a.createElement(c, q({ key: i }, g), x);
  }
}
var Dp = function(e, t) {
  var r = e.listLanguages();
  return r.indexOf(t) !== -1;
}, Lp = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function $l(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(r), !0).forEach(function(n) {
      Bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $l(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var $p = /\n/g;
function Mp(e) {
  return e.match($p);
}
function Bp(e) {
  var t = e.lines, r = e.startingLineNumber, n = e.style;
  return t.map(function(o, l) {
    var i = l + r;
    return a.createElement("span", { key: "line-".concat(l), className: "react-syntax-highlighter-line-number", style: typeof n == "function" ? n(i) : n }, "".concat(i, `
`));
  });
}
function Ip(e) {
  var t = e.codeString, r = e.codeStyle, n = e.containerStyle, o = n === void 0 ? { float: "left", paddingRight: "10px" } : n, l = e.numberStyle, i = l === void 0 ? {} : l, u = e.startingLineNumber;
  return a.createElement("code", { style: Object.assign({}, r, o) }, Bp({ lines: t.replace(/\n$/, "").split(`
`), style: i, startingLineNumber: u }));
}
function Pp(e) {
  return "".concat(e.toString().length, ".25em");
}
function Is(e, t) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: t }, children: [{ type: "text", value: e }] };
}
function Ps(e, t, r) {
  var n = { display: "inline-block", minWidth: Pp(r), paddingRight: "1em", textAlign: "right", userSelect: "none" }, o = typeof e == "function" ? e(t) : e, l = Qe(Qe({}, n), o);
  return l;
}
function en(e) {
  var t = e.children, r = e.lineNumber, n = e.lineNumberStyle, o = e.largestLineNumber, l = e.showInlineLineNumbers, i = e.lineProps, u = i === void 0 ? {} : i, s = e.className, c = s === void 0 ? [] : s, d = e.showLineNumbers, m = e.wrapLongLines, g = typeof u == "function" ? u(r) : u;
  if (g.className = c, r && l) {
    var p = Ps(n, r, o);
    t.unshift(Is(r, p));
  }
  return m & d && (g.style = Qe(Qe({}, g.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: g, children: t };
}
function Ns(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e.length; n++) {
    var o = e[n];
    if (o.type === "text")
      r.push(en({ children: [o], className: Cp(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      Ns(o.children, l).forEach(function(i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function Np(e, t, r, n, o, l, i, u, s) {
  var c, d = Ns(e.value), m = [], g = -1, p = 0;
  function h(w, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return en({ children: w, lineNumber: S, lineNumberStyle: u, largestLineNumber: i, showInlineLineNumbers: o, lineProps: r, className: k, showLineNumbers: n, wrapLongLines: s });
  }
  function f(w, S) {
    if (n && S && o) {
      var k = Ps(u, S, i);
      w.unshift(Is(S, k));
    }
    return w;
  }
  function x(w, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || k.length > 0 ? h(w, S, k) : f(w, S);
  }
  for (var y = function() {
    var w = d[p], S = w.children[0].value, k = Mp(S);
    if (k) {
      var C = S.split(`
`);
      C.forEach(function(T, O) {
        var R = n && m.length + l, D = { type: "text", value: "".concat(T, `
`) };
        if (O === 0) {
          var F = d.slice(g + 1, p).concat(en({ children: [D], className: w.properties.className })), P = x(F, R);
          m.push(P);
        } else if (O === C.length - 1) {
          var L = d[p + 1] && d[p + 1].children && d[p + 1].children[0], $ = { type: "text", value: "".concat(T) };
          if (L) {
            var N = en({ children: [$], className: w.properties.className });
            d.splice(p + 1, 0, N);
          } else {
            var Z = [$], B = x(Z, R, w.properties.className);
            m.push(B);
          }
        } else {
          var j = [D], X = x(j, R, w.properties.className);
          m.push(X);
        }
      }), g = p;
    }
    p++;
  }; p < d.length; )
    y();
  if (g !== d.length - 1) {
    var A = d.slice(g + 1, d.length);
    if (A && A.length) {
      var v = n && m.length + l, E = x(A, v);
      m.push(E);
    }
  }
  return t ? m : (c = []).concat.apply(c, m);
}
function jp(e) {
  var t = e.rows, r = e.stylesheet, n = e.useInlineStyles;
  return t.map(function(o, l) {
    return fo({ node: o, stylesheet: r, useInlineStyles: n, key: "code-segement".concat(l) });
  });
}
function js(e) {
  return e && typeof e.highlightAuto < "u";
}
function Hp(e) {
  var t = e.astGenerator, r = e.language, n = e.code, o = e.defaultCodeValue;
  if (js(t)) {
    var l = Dp(t, r);
    return r === "text" ? { value: o, language: "text" } : l ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: o };
  } catch {
    return { value: o };
  }
}
function Zp(e, t) {
  return function(r) {
    var n = r.language, o = r.children, l = r.style, i = l === void 0 ? t : l, u = r.customStyle, s = u === void 0 ? {} : u, c = r.codeTagProps, d = c === void 0 ? { className: n ? "language-".concat(n) : void 0, style: Qe(Qe({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')]) } : c, m = r.useInlineStyles, g = m === void 0 ? !0 : m, p = r.showLineNumbers, h = p === void 0 ? !1 : p, f = r.showInlineLineNumbers, x = f === void 0 ? !0 : f, y = r.startingLineNumber, A = y === void 0 ? 1 : y, v = r.lineNumberContainerStyle, E = r.lineNumberStyle, w = E === void 0 ? {} : E, S = r.wrapLines, k = r.wrapLongLines, C = k === void 0 ? !1 : k, T = r.lineProps, O = T === void 0 ? {} : T, R = r.renderer, D = r.PreTag, F = D === void 0 ? "pre" : D, P = r.CodeTag, L = P === void 0 ? "code" : P, $ = r.code, N = $ === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : $, Z = r.astGenerator, B = Ep(r, Lp);
    Z = Z || e;
    var j = h ? a.createElement(Ip, { containerStyle: v, codeStyle: d.style || {}, numberStyle: w, startingLineNumber: A, codeString: N }) : null, X = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" }, ne = js(Z) ? "hljs" : "prismjs", Y = g ? Object.assign({}, B, { style: Object.assign({}, X, s) }) : Object.assign({}, B, { className: B.className ? "".concat(ne, " ").concat(B.className) : ne, style: Object.assign({}, s) });
    if (C ? d.style = Qe(Qe({}, d.style), {}, { whiteSpace: "pre-wrap" }) : d.style = Qe(Qe({}, d.style), {}, { whiteSpace: "pre" }), !Z)
      return a.createElement(F, Y, j, a.createElement(L, d, N));
    (S === void 0 && R || C) && (S = !0), R = R || jp;
    var J = [{ type: "text", value: N }], I = Hp({ astGenerator: Z, language: n, code: N, defaultCodeValue: J });
    I.language === null && (I.value = J);
    var V = I.value.length + A, U = Np(I, S, O, h, x, A, V, w, C);
    return a.createElement(F, Y, a.createElement(L, d, !x && j, R({ rows: U, stylesheet: i, useInlineStyles: g })));
  };
}
var mo = Te(qd()), go = Zp(mo.default, {});
go.registerLanguage = function(e, t) {
  return mo.default.register(t);
};
go.alias = function(e, t) {
  return mo.default.alias(e, t);
};
var Oe = go, Vp = _.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), Hs = _.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
Hs.displayName = "ActionButton";
var ho = ({ actionItems: e, ...t }) => a.createElement(Vp, { ...t }, e.map(({ title: r, className: n, onClick: o, disabled: l }, i) => a.createElement(Hs, { key: i, className: n, onClick: o, disabled: l }, r)));
function zp(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Zs(...e) {
  return (t) => e.forEach((r) => zp(r, t));
}
function Bt(...e) {
  return b.useCallback(Zs(...e), e);
}
var Vs = b.forwardRef((e, t) => {
  let { children: r, ...n } = e, o = b.Children.toArray(r), l = o.find(Up);
  if (l) {
    let i = l.props.children, u = o.map((s) => s === l ? b.Children.count(i) > 1 ? b.Children.only(null) : b.isValidElement(i) ? i.props.children : null : s);
    return b.createElement(Ta, q({}, n, { ref: t }), b.isValidElement(i) ? b.cloneElement(i, void 0, u) : null);
  }
  return b.createElement(Ta, q({}, n, { ref: t }), r);
});
Vs.displayName = "Slot";
var Ta = b.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return b.isValidElement(r) ? b.cloneElement(r, { ...Wp(n, r.props), ref: t ? Zs(t, r.ref) : r.ref }) : b.Children.count(r) > 1 ? b.Children.only(null) : null;
});
Ta.displayName = "SlotClone";
var qp = ({ children: e }) => b.createElement(b.Fragment, null, e);
function Up(e) {
  return b.isValidElement(e) && e.type === qp;
}
function Wp(e, t) {
  let r = { ...t };
  for (let n in t) {
    let o = e[n], l = t[n];
    /^on[A-Z]/.test(n) ? o && l ? r[n] = (...i) => {
      l(...i), o(...i);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...l } : n === "className" && (r[n] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
var Gp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], $r = Gp.reduce((e, t) => {
  let r = b.forwardRef((n, o) => {
    let { asChild: l, ...i } = n, u = l ? Vs : t;
    return b.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), b.createElement(u, q({}, i, { ref: o }));
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Oa = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
};
function Yp(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var Mr = (e) => {
  let { present: t, children: r } = e, n = Kp(t), o = typeof r == "function" ? r({ present: n.isPresent }) : b.Children.only(r), l = Bt(n.ref, o.ref);
  return typeof r == "function" || n.isPresent ? b.cloneElement(o, { ref: l }) : null;
};
Mr.displayName = "Presence";
function Kp(e) {
  let [t, r] = b.useState(), n = b.useRef({}), o = b.useRef(e), l = b.useRef("none"), i = e ? "mounted" : "unmounted", [u, s] = Yp(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return b.useEffect(() => {
    let c = zr(n.current);
    l.current = u === "mounted" ? c : "none";
  }, [u]), Oa(() => {
    let c = n.current, d = o.current;
    if (d !== e) {
      let m = l.current, g = zr(c);
      e ? s("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? s("UNMOUNT") : s(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), Oa(() => {
    if (t) {
      let c = (m) => {
        let g = zr(n.current).includes(m.animationName);
        m.target === t && g && Ki.flushSync(() => s("ANIMATION_END"));
      }, d = (m) => {
        m.target === t && (l.current = zr(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), { isPresent: ["mounted", "unmountSuspended"].includes(u), ref: b.useCallback((c) => {
    c && (n.current = getComputedStyle(c)), r(c);
  }, []) };
}
function zr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Xp(e, t = []) {
  let r = [];
  function n(l, i) {
    let u = b.createContext(i), s = r.length;
    r = [...r, i];
    function c(m) {
      let { scope: g, children: p, ...h } = m, f = (g == null ? void 0 : g[e][s]) || u, x = b.useMemo(() => h, Object.values(h));
      return b.createElement(f.Provider, { value: x }, p);
    }
    function d(m, g) {
      let p = (g == null ? void 0 : g[e][s]) || u, h = b.useContext(p);
      if (h)
        return h;
      if (i !== void 0)
        return i;
      throw new Error(`\`${m}\` must be used within \`${l}\``);
    }
    return c.displayName = l + "Provider", [c, d];
  }
  let o = () => {
    let l = r.map((i) => b.createContext(i));
    return function(i) {
      let u = (i == null ? void 0 : i[e]) || l;
      return b.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: u } }), [i, u]);
    };
  };
  return o.scopeName = e, [n, Jp(o, ...t)];
}
function Jp(...e) {
  let t = e[0];
  if (e.length === 1)
    return t;
  let r = () => {
    let n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(o) {
      let l = n.reduce((i, { useScope: u, scopeName: s }) => {
        let c = u(o)[`__scope${s}`];
        return { ...i, ...c };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function _t(e) {
  let t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...r) => {
    var n;
    return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
  }, []);
}
var Qp = b.createContext(void 0);
function e5(e) {
  let t = b.useContext(Qp);
  return e || t || "ltr";
}
function t5(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Ot(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), r === !1 || !n.defaultPrevented)
      return t == null ? void 0 : t(n);
  };
}
function r5(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var zs = "ScrollArea", [qs, U8] = Xp(zs), [n5, Be] = qs(zs), a5 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, type: n = "hover", dir: o, scrollHideDelay: l = 600, ...i } = e, [u, s] = b.useState(null), [c, d] = b.useState(null), [m, g] = b.useState(null), [p, h] = b.useState(null), [f, x] = b.useState(null), [y, A] = b.useState(0), [v, E] = b.useState(0), [w, S] = b.useState(!1), [k, C] = b.useState(!1), T = Bt(t, (R) => s(R)), O = e5(o);
  return b.createElement(n5, { scope: r, type: n, dir: O, scrollHideDelay: l, scrollArea: u, viewport: c, onViewportChange: d, content: m, onContentChange: g, scrollbarX: p, onScrollbarXChange: h, scrollbarXEnabled: w, onScrollbarXEnabledChange: S, scrollbarY: f, onScrollbarYChange: x, scrollbarYEnabled: k, onScrollbarYEnabledChange: C, onCornerWidthChange: A, onCornerHeightChange: E }, b.createElement($r.div, q({ dir: O }, i, { ref: T, style: { position: "relative", "--radix-scroll-area-corner-width": y + "px", "--radix-scroll-area-corner-height": v + "px", ...e.style } })));
}), o5 = "ScrollAreaViewport", l5 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, children: n, ...o } = e, l = Be(o5, r), i = b.useRef(null), u = Bt(t, i, l.onViewportChange);
  return b.createElement(b.Fragment, null, b.createElement("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" } }), b.createElement($r.div, q({ "data-radix-scroll-area-viewport": "" }, o, { ref: u, style: { overflowX: l.scrollbarXEnabled ? "scroll" : "hidden", overflowY: l.scrollbarYEnabled ? "scroll" : "hidden", ...e.style } }), b.createElement("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" } }, n)));
}), dt = "ScrollAreaScrollbar", i5 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = Be(dt, e.__scopeScrollArea), { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = o, u = e.orientation === "horizontal";
  return b.useEffect(() => (u ? l(!0) : i(!0), () => {
    u ? l(!1) : i(!1);
  }), [u, l, i]), o.type === "hover" ? b.createElement(s5, q({}, n, { ref: t, forceMount: r })) : o.type === "scroll" ? b.createElement(u5, q({}, n, { ref: t, forceMount: r })) : o.type === "auto" ? b.createElement(Us, q({}, n, { ref: t, forceMount: r })) : o.type === "always" ? b.createElement(bo, q({}, n, { ref: t })) : null;
}), s5 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = Be(dt, e.__scopeScrollArea), [l, i] = b.useState(!1);
  return b.useEffect(() => {
    let u = o.scrollArea, s = 0;
    if (u) {
      let c = () => {
        window.clearTimeout(s), i(!0);
      }, d = () => {
        s = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return u.addEventListener("pointerenter", c), u.addEventListener("pointerleave", d), () => {
        window.clearTimeout(s), u.removeEventListener("pointerenter", c), u.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), b.createElement(Mr, { present: r || l }, b.createElement(Us, q({ "data-state": l ? "visible" : "hidden" }, n, { ref: t })));
}), u5 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = Be(dt, e.__scopeScrollArea), l = e.orientation === "horizontal", i = _n(() => s("SCROLL_END"), 100), [u, s] = r5("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return b.useEffect(() => {
    if (u === "idle") {
      let c = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [u, o.scrollHideDelay, s]), b.useEffect(() => {
    let c = o.viewport, d = l ? "scrollLeft" : "scrollTop";
    if (c) {
      let m = c[d], g = () => {
        let p = c[d];
        m !== p && (s("SCROLL"), i()), m = p;
      };
      return c.addEventListener("scroll", g), () => c.removeEventListener("scroll", g);
    }
  }, [o.viewport, l, s, i]), b.createElement(Mr, { present: r || u !== "hidden" }, b.createElement(bo, q({ "data-state": u === "hidden" ? "hidden" : "visible" }, n, { ref: t, onPointerEnter: Ot(e.onPointerEnter, () => s("POINTER_ENTER")), onPointerLeave: Ot(e.onPointerLeave, () => s("POINTER_LEAVE")) })));
}), Us = b.forwardRef((e, t) => {
  let r = Be(dt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [l, i] = b.useState(!1), u = e.orientation === "horizontal", s = _n(() => {
    if (r.viewport) {
      let c = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(u ? c : d);
    }
  }, 10);
  return Kt(r.viewport, s), Kt(r.content, s), b.createElement(Mr, { present: n || l }, b.createElement(bo, q({ "data-state": l ? "visible" : "hidden" }, o, { ref: t })));
}), bo = b.forwardRef((e, t) => {
  let { orientation: r = "vertical", ...n } = e, o = Be(dt, e.__scopeScrollArea), l = b.useRef(null), i = b.useRef(0), [u, s] = b.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), c = Ks(u.viewport, u.content), d = { ...n, sizes: u, onSizesChange: s, hasThumb: c > 0 && c < 1, onThumbChange: (g) => l.current = g, onThumbPointerUp: () => i.current = 0, onThumbPointerDown: (g) => i.current = g };
  function m(g, p) {
    return b5(g, i.current, u, p);
  }
  return r === "horizontal" ? b.createElement(c5, q({}, d, { ref: t, onThumbPositionChange: () => {
    if (o.viewport && l.current) {
      let g = o.viewport.scrollLeft, p = Ml(g, u, o.dir);
      l.current.style.transform = `translate3d(${p}px, 0, 0)`;
    }
  }, onWheelScroll: (g) => {
    o.viewport && (o.viewport.scrollLeft = g);
  }, onDragScroll: (g) => {
    o.viewport && (o.viewport.scrollLeft = m(g, o.dir));
  } })) : r === "vertical" ? b.createElement(d5, q({}, d, { ref: t, onThumbPositionChange: () => {
    if (o.viewport && l.current) {
      let g = o.viewport.scrollTop, p = Ml(g, u);
      l.current.style.transform = `translate3d(0, ${p}px, 0)`;
    }
  }, onWheelScroll: (g) => {
    o.viewport && (o.viewport.scrollTop = g);
  }, onDragScroll: (g) => {
    o.viewport && (o.viewport.scrollTop = m(g));
  } })) : null;
}), c5 = b.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...o } = e, l = Be(dt, e.__scopeScrollArea), [i, u] = b.useState(), s = b.useRef(null), c = Bt(t, s, l.onScrollbarXChange);
  return b.useEffect(() => {
    s.current && u(getComputedStyle(s.current));
  }, [s]), b.createElement(Gs, q({ "data-orientation": "horizontal" }, o, { ref: c, sizes: r, style: { bottom: 0, left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": kn(r) + "px", ...e.style }, onThumbPointerDown: (d) => e.onThumbPointerDown(d.x), onDragScroll: (d) => e.onDragScroll(d.x), onWheelScroll: (d, m) => {
    if (l.viewport) {
      let g = l.viewport.scrollLeft + d.deltaX;
      e.onWheelScroll(g), Js(g, m) && d.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollWidth, viewport: l.viewport.offsetWidth, scrollbar: { size: s.current.clientWidth, paddingStart: dn(i.paddingLeft), paddingEnd: dn(i.paddingRight) } });
  } }));
}), d5 = b.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...o } = e, l = Be(dt, e.__scopeScrollArea), [i, u] = b.useState(), s = b.useRef(null), c = Bt(t, s, l.onScrollbarYChange);
  return b.useEffect(() => {
    s.current && u(getComputedStyle(s.current));
  }, [s]), b.createElement(Gs, q({ "data-orientation": "vertical" }, o, { ref: c, sizes: r, style: { top: 0, right: l.dir === "ltr" ? 0 : void 0, left: l.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": kn(r) + "px", ...e.style }, onThumbPointerDown: (d) => e.onThumbPointerDown(d.y), onDragScroll: (d) => e.onDragScroll(d.y), onWheelScroll: (d, m) => {
    if (l.viewport) {
      let g = l.viewport.scrollTop + d.deltaY;
      e.onWheelScroll(g), Js(g, m) && d.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollHeight, viewport: l.viewport.offsetHeight, scrollbar: { size: s.current.clientHeight, paddingStart: dn(i.paddingTop), paddingEnd: dn(i.paddingBottom) } });
  } }));
}), [p5, Ws] = qs(dt), Gs = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, sizes: n, hasThumb: o, onThumbChange: l, onThumbPointerUp: i, onThumbPointerDown: u, onThumbPositionChange: s, onDragScroll: c, onWheelScroll: d, onResize: m, ...g } = e, p = Be(dt, r), [h, f] = b.useState(null), x = Bt(t, (T) => f(T)), y = b.useRef(null), A = b.useRef(""), v = p.viewport, E = n.content - n.viewport, w = _t(d), S = _t(s), k = _n(m, 10);
  function C(T) {
    if (y.current) {
      let O = T.clientX - y.current.left, R = T.clientY - y.current.top;
      c({ x: O, y: R });
    }
  }
  return b.useEffect(() => {
    let T = (O) => {
      let R = O.target;
      h != null && h.contains(R) && w(O, E);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [v, h, E, w]), b.useEffect(S, [n, S]), Kt(h, k), Kt(p.content, k), b.createElement(p5, { scope: r, scrollbar: h, hasThumb: o, onThumbChange: _t(l), onThumbPointerUp: _t(i), onThumbPositionChange: S, onThumbPointerDown: _t(u) }, b.createElement($r.div, q({}, g, { ref: x, style: { position: "absolute", ...g.style }, onPointerDown: Ot(e.onPointerDown, (T) => {
    T.button === 0 && (T.target.setPointerCapture(T.pointerId), y.current = h.getBoundingClientRect(), A.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(T));
  }), onPointerMove: Ot(e.onPointerMove, C), onPointerUp: Ot(e.onPointerUp, (T) => {
    let O = T.target;
    O.hasPointerCapture(T.pointerId) && O.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = A.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null;
  }) })));
}), Ra = "ScrollAreaThumb", f5 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = Ws(Ra, e.__scopeScrollArea);
  return b.createElement(Mr, { present: r || o.hasThumb }, b.createElement(m5, q({ ref: t }, n)));
}), m5 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, style: n, ...o } = e, l = Be(Ra, r), i = Ws(Ra, r), { onThumbPositionChange: u } = i, s = Bt(t, (m) => i.onThumbChange(m)), c = b.useRef(), d = _n(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return b.useEffect(() => {
    let m = l.viewport;
    if (m) {
      let g = () => {
        if (d(), !c.current) {
          let p = y5(m, u);
          c.current = p, u();
        }
      };
      return u(), m.addEventListener("scroll", g), () => m.removeEventListener("scroll", g);
    }
  }, [l.viewport, d, u]), b.createElement($r.div, q({ "data-state": i.hasThumb ? "visible" : "hidden" }, o, { ref: s, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...n }, onPointerDownCapture: Ot(e.onPointerDownCapture, (m) => {
    let g = m.target.getBoundingClientRect(), p = m.clientX - g.left, h = m.clientY - g.top;
    i.onThumbPointerDown({ x: p, y: h });
  }), onPointerUp: Ot(e.onPointerUp, i.onThumbPointerUp) }));
}), Ys = "ScrollAreaCorner", g5 = b.forwardRef((e, t) => {
  let r = Be(Ys, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? b.createElement(h5, q({}, e, { ref: t })) : null;
}), h5 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, ...n } = e, o = Be(Ys, r), [l, i] = b.useState(0), [u, s] = b.useState(0), c = !!(l && u);
  return Kt(o.scrollbarX, () => {
    var d;
    let m = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(m), s(m);
  }), Kt(o.scrollbarY, () => {
    var d;
    let m = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(m), i(m);
  }), c ? b.createElement($r.div, q({}, n, { ref: t, style: { width: l, height: u, position: "absolute", right: o.dir === "ltr" ? 0 : void 0, left: o.dir === "rtl" ? 0 : void 0, bottom: 0, ...e.style } })) : null;
});
function dn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ks(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function kn(e) {
  let t = Ks(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function b5(e, t, r, n = "ltr") {
  let o = kn(r), l = o / 2, i = t || l, u = o - i, s = r.scrollbar.paddingStart + i, c = r.scrollbar.size - r.scrollbar.paddingEnd - u, d = r.content - r.viewport, m = n === "ltr" ? [0, d] : [d * -1, 0];
  return Xs([s, c], m)(e);
}
function Ml(e, t, r = "ltr") {
  let n = kn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, l = t.scrollbar.size - o, i = t.content - t.viewport, u = l - n, s = r === "ltr" ? [0, i] : [i * -1, 0], c = t5(e, s);
  return Xs([0, i], [0, u])(c);
}
function Xs(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Js(e, t) {
  return e > 0 && e < t;
}
var y5 = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    let l = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== l.left, u = r.top !== l.top;
    (i || u) && t(), r = l, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function _n(e, t) {
  let r = _t(e), n = b.useRef(0);
  return b.useEffect(() => () => window.clearTimeout(n.current), []), b.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Kt(e, t) {
  let r = _t(t);
  Oa(() => {
    let n = 0;
    if (e) {
      let o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
var v5 = a5, E5 = l5, x5 = i5, A5 = f5, w5 = g5, S5 = _(v5)(({ scrollbarsize: e, offset: t }) => ({ width: "100%", height: "100%", overflow: "hidden", "--scrollbar-size": `${e + t}px`, "--radix-scroll-area-thumb-width": `${e}px` })), C5 = _(E5)({ width: "100%", height: "100%" }), Bl = _(x5)(({ offset: e, horizontal: t, vertical: r }) => ({ display: "flex", userSelect: "none", touchAction: "none", background: "transparent", transition: "all 0.2s ease-out", borderRadius: "var(--scrollbar-size)", '&[data-orientation="vertical"]': { width: "var(--scrollbar-size)", paddingRight: e, marginTop: e, marginBottom: t === "true" && r === "true" ? 0 : e }, '&[data-orientation="horizontal"]': { flexDirection: "column", height: "var(--scrollbar-size)", paddingBottom: e, marginLeft: e, marginRight: t === "true" && r === "true" ? 0 : e } })), Il = _(A5)(({ theme: e }) => ({ flex: 1, background: e.textMutedColor, opacity: 0.5, borderRadius: "var(--scrollbar-size)", position: "relative", transition: "opacity 0.2s ease-out", "&:hover": { opacity: 0.8 }, "::before": { content: '""', position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", minWidth: 44, minHeight: 44 } })), yo = ({ children: e, horizontal: t = !1, vertical: r = !1, offset: n = 2, scrollbarSize: o = 6, className: l }) => a.createElement(S5, { scrollbarsize: o, offset: n, className: l }, a.createElement(C5, null, e), t && a.createElement(Bl, { orientation: "horizontal", offset: n, horizontal: t.toString(), vertical: r.toString() }, a.createElement(Il, null)), r && a.createElement(Bl, { orientation: "vertical", offset: n, horizontal: t.toString(), vertical: r.toString() }, a.createElement(Il, null)), t && r && a.createElement(w5, null)), { navigator: qr, document: fr, window: k5 } = Xd;
Oe.registerLanguage("jsextra", op);
Oe.registerLanguage("jsx", Qd);
Oe.registerLanguage("json", ip);
Oe.registerLanguage("yml", gp);
Oe.registerLanguage("md", fp);
Oe.registerLanguage("bash", tp);
Oe.registerLanguage("css", np);
Oe.registerLanguage("html", dp);
Oe.registerLanguage("tsx", bp);
Oe.registerLanguage("typescript", vp);
Oe.registerLanguage("graphql", up);
var _5 = Mt(2)((e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})), T5 = Qs();
function Qs() {
  return qr != null && qr.clipboard ? (e) => qr.clipboard.writeText(e) : async (e) => {
    let t = fr.createElement("TEXTAREA"), r = fr.activeElement;
    t.value = e, fr.body.appendChild(t), t.select(), fr.execCommand("copy"), fr.body.removeChild(t), r.focus();
  };
}
var O5 = _.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: t }) => t ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), R5 = ({ children: e, className: t }) => a.createElement(yo, { horizontal: !0, vertical: !0, className: t }, e), F5 = _(R5)({ position: "relative" }, ({ theme: e }) => _5(e)), D5 = _.pre(({ theme: e, padded: t }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: t ? e.layoutMargin : 0 })), L5 = _.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), eu = (e) => {
  let t = [...e.children], r = t[0], n = r.children[0].value, o = { ...r, children: [], properties: { ...r.properties, "data-line-number": n, style: { ...r.properties.style, userSelect: "auto" } } };
  return t[0] = o, { ...e, children: t };
}, $5 = ({ rows: e, stylesheet: t, useInlineStyles: r }) => e.map((n, o) => fo({ node: eu(n), stylesheet: t, useInlineStyles: r, key: `code-segement${o}` })), M5 = (e, t) => t ? e ? ({ rows: r, ...n }) => e({ rows: r.map((o) => eu(o)), ...n }) : $5 : e, vo = ({ children: e, language: t = "jsx", copyable: r = !1, bordered: n = !1, padded: o = !1, format: l = !0, formatter: i = null, className: u = null, showLineNumbers: s = !1, ...c }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let d = i ? i(l, e) : e.trim(), [m, g] = b.useState(!1), p = b.useCallback((f) => {
    f.preventDefault(), T5(d).then(() => {
      g(!0), k5.setTimeout(() => g(!1), 1500);
    }).catch(Kd.error);
  }, [d]), h = M5(c.renderer, s);
  return a.createElement(O5, { bordered: n, padded: o, showLineNumbers: s, className: u }, a.createElement(F5, null, a.createElement(Oe, { padded: o || n, language: t, showLineNumbers: s, showInlineLineNumbers: s, useInlineStyles: !1, PreTag: D5, CodeTag: L5, lineNumberContainerStyle: {}, ...c, renderer: h }, d)), r ? a.createElement(ho, { actionItems: [{ title: m ? "Copied" : "Copy", onClick: p }] }) : null);
};
vo.registerLanguage = (...e) => Oe.registerLanguage(...e);
var W8 = vo;
const { global: B5 } = __STORYBOOK_MODULE_GLOBAL__;
var I5 = H({ "../../node_modules/react-fast-compare/index.js"(e, t) {
  var r = typeof Element < "u", n = typeof Map == "function", o = typeof Set == "function", l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(u, s) {
    if (u === s)
      return !0;
    if (u && s && typeof u == "object" && typeof s == "object") {
      if (u.constructor !== s.constructor)
        return !1;
      var c, d, m;
      if (Array.isArray(u)) {
        if (c = u.length, c != s.length)
          return !1;
        for (d = c; d-- !== 0; )
          if (!i(u[d], s[d]))
            return !1;
        return !0;
      }
      var g;
      if (n && u instanceof Map && s instanceof Map) {
        if (u.size !== s.size)
          return !1;
        for (g = u.entries(); !(d = g.next()).done; )
          if (!s.has(d.value[0]))
            return !1;
        for (g = u.entries(); !(d = g.next()).done; )
          if (!i(d.value[1], s.get(d.value[0])))
            return !1;
        return !0;
      }
      if (o && u instanceof Set && s instanceof Set) {
        if (u.size !== s.size)
          return !1;
        for (g = u.entries(); !(d = g.next()).done; )
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
      if (m = Object.keys(u), c = m.length, c !== Object.keys(s).length)
        return !1;
      for (d = c; d-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, m[d]))
          return !1;
      if (r && u instanceof Element)
        return !1;
      for (d = c; d-- !== 0; )
        if (!((m[d] === "_owner" || m[d] === "__v" || m[d] === "__o") && u.$$typeof) && !i(u[m[d]], s[m[d]]))
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
} }), Pl = function(e) {
  return e.reduce(function(t, r) {
    var n = r[0], o = r[1];
    return t[n] = o, t;
  }, {});
}, Nl = typeof window < "u" && window.document && window.document.createElement ? b.useLayoutEffect : b.useEffect, Ae = "top", $e = "bottom", Me = "right", we = "left", Tn = "auto", Br = [Ae, $e, Me, we], Xt = "start", Sr = "end", P5 = "clippingParents", tu = "viewport", mr = "popper", N5 = "reference", jl = Br.reduce(function(e, t) {
  return e.concat([t + "-" + Xt, t + "-" + Sr]);
}, []), ru = [].concat(Br, [Tn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xt, t + "-" + Sr]);
}, []), j5 = "beforeRead", H5 = "read", Z5 = "afterRead", V5 = "beforeMain", z5 = "main", q5 = "afterMain", U5 = "beforeWrite", W5 = "write", G5 = "afterWrite", Y5 = [j5, H5, Z5, V5, z5, q5, U5, W5, G5];
function at(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _e(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function $t(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Le(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function K5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, l = t.elements[r];
    !Le(l) || !at(l) || (Object.assign(l.style, n), Object.keys(o).forEach(function(i) {
      var u = o[i];
      u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? "" : u);
    }));
  });
}
function X5(e) {
  var t = e.state, r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], l = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = i.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !Le(o) || !at(o) || (Object.assign(o.style, u), Object.keys(l).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
var J5 = { name: "applyStyles", enabled: !0, phase: "write", fn: K5, effect: X5, requires: ["computeStyles"] };
function nt(e) {
  return e.split("-")[0];
}
var Rt = Math.max, pn = Math.min, Jt = Math.round;
function Fa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function nu() {
  return !/^((?!chrome|android).)*safari/i.test(Fa());
}
function Qt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, l = 1;
  t && Le(e) && (o = e.offsetWidth > 0 && Jt(n.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && Jt(n.height) / e.offsetHeight || 1);
  var i = $t(e) ? _e(e) : window, u = i.visualViewport, s = !nu() && r, c = (n.left + (s && u ? u.offsetLeft : 0)) / o, d = (n.top + (s && u ? u.offsetTop : 0)) / l, m = n.width / o, g = n.height / l;
  return { width: m, height: g, top: d, right: c + m, bottom: d + g, left: c, x: c, y: d };
}
function xo(e) {
  var t = Qt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
}
function au(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Eo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ct(e) {
  return _e(e).getComputedStyle(e);
}
function Q5(e) {
  return ["table", "td", "th"].indexOf(at(e)) >= 0;
}
function vt(e) {
  return (($t(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function On(e) {
  return at(e) === "html" ? e : e.assignedSlot || e.parentNode || (Eo(e) ? e.host : null) || vt(e);
}
function Hl(e) {
  return !Le(e) || ct(e).position === "fixed" ? null : e.offsetParent;
}
function e2(e) {
  var t = /firefox/i.test(Fa()), r = /Trident/i.test(Fa());
  if (r && Le(e)) {
    var n = ct(e);
    if (n.position === "fixed")
      return null;
  }
  var o = On(e);
  for (Eo(o) && (o = o.host); Le(o) && ["html", "body"].indexOf(at(o)) < 0; ) {
    var l = ct(o);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ir(e) {
  for (var t = _e(e), r = Hl(e); r && Q5(r) && ct(r).position === "static"; )
    r = Hl(r);
  return r && (at(r) === "html" || at(r) === "body" && ct(r).position === "static") ? t : r || e2(e) || t;
}
function Ao(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, r) {
  return Rt(e, pn(t, r));
}
function t2(e, t, r) {
  var n = yr(e, t, r);
  return n > r ? r : n;
}
function ou() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function lu(e) {
  return Object.assign({}, ou(), e);
}
function iu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var r2 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lu(typeof e != "number" ? e : iu(e, Br));
};
function n2(e) {
  var t, r = e.state, n = e.name, o = e.options, l = r.elements.arrow, i = r.modifiersData.popperOffsets, u = nt(r.placement), s = Ao(u), c = [we, Me].indexOf(u) >= 0, d = c ? "height" : "width";
  if (!(!l || !i)) {
    var m = r2(o.padding, r), g = xo(l), p = s === "y" ? Ae : we, h = s === "y" ? $e : Me, f = r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d], x = i[s] - r.rects.reference[s], y = Ir(l), A = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = f / 2 - x / 2, E = m[p], w = A - g[d] - m[h], S = A / 2 - g[d] / 2 + v, k = yr(E, S, w), C = s;
    r.modifiersData[n] = (t = {}, t[C] = k, t.centerOffset = k - S, t);
  }
}
function a2(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || au(t.elements.popper, o) && (t.elements.arrow = o));
}
var o2 = { name: "arrow", enabled: !0, phase: "main", fn: n2, effect: a2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function er(e) {
  return e.split("-")[1];
}
var l2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function i2(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return { x: Jt(r * o) / o || 0, y: Jt(n * o) / o || 0 };
}
function Zl(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, l = e.variation, i = e.offsets, u = e.position, s = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, m = e.isFixed, g = i.x, p = g === void 0 ? 0 : g, h = i.y, f = h === void 0 ? 0 : h, x = typeof d == "function" ? d({ x: p, y: f }) : { x: p, y: f };
  p = x.x, f = x.y;
  var y = i.hasOwnProperty("x"), A = i.hasOwnProperty("y"), v = we, E = Ae, w = window;
  if (c) {
    var S = Ir(r), k = "clientHeight", C = "clientWidth";
    if (S === _e(r) && (S = vt(r), ct(S).position !== "static" && u === "absolute" && (k = "scrollHeight", C = "scrollWidth")), S = S, o === Ae || (o === we || o === Me) && l === Sr) {
      E = $e;
      var T = m && S === w && w.visualViewport ? w.visualViewport.height : S[k];
      f -= T - n.height, f *= s ? 1 : -1;
    }
    if (o === we || (o === Ae || o === $e) && l === Sr) {
      v = Me;
      var O = m && S === w && w.visualViewport ? w.visualViewport.width : S[C];
      p -= O - n.width, p *= s ? 1 : -1;
    }
  }
  var R = Object.assign({ position: u }, c && l2), D = d === !0 ? i2({ x: p, y: f }, _e(r)) : { x: p, y: f };
  if (p = D.x, f = D.y, s) {
    var F;
    return Object.assign({}, R, (F = {}, F[E] = A ? "0" : "", F[v] = y ? "0" : "", F.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + f + "px)" : "translate3d(" + p + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, R, (t = {}, t[E] = A ? f + "px" : "", t[v] = y ? p + "px" : "", t.transform = "", t));
}
function s2(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, l = r.adaptive, i = l === void 0 ? !0 : l, u = r.roundOffsets, s = u === void 0 ? !0 : u, c = { placement: nt(t.placement), variation: er(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zl(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zl(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var u2 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: s2, data: {} }, Ur = { passive: !0 };
function c2(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, l = o === void 0 ? !0 : o, i = n.resize, u = i === void 0 ? !0 : i, s = _e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && c.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ur);
  }), u && s.addEventListener("resize", r.update, Ur), function() {
    l && c.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ur);
    }), u && s.removeEventListener("resize", r.update, Ur);
  };
}
var d2 = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: c2, data: {} }, p2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return p2[t];
  });
}
var f2 = { start: "end", end: "start" };
function Vl(e) {
  return e.replace(/start|end/g, function(t) {
    return f2[t];
  });
}
function wo(e) {
  var t = _e(e), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function So(e) {
  return Qt(vt(e)).left + wo(e).scrollLeft;
}
function m2(e, t) {
  var r = _e(e), n = vt(e), o = r.visualViewport, l = n.clientWidth, i = n.clientHeight, u = 0, s = 0;
  if (o) {
    l = o.width, i = o.height;
    var c = nu();
    (c || !c && t === "fixed") && (u = o.offsetLeft, s = o.offsetTop);
  }
  return { width: l, height: i, x: u + So(e), y: s };
}
function g2(e) {
  var t, r = vt(e), n = wo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, l = Rt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Rt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + So(e), s = -n.scrollTop;
  return ct(o || r).direction === "rtl" && (u += Rt(r.clientWidth, o ? o.clientWidth : 0) - l), { width: l, height: i, x: u, y: s };
}
function Co(e) {
  var t = ct(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function su(e) {
  return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : Le(e) && Co(e) ? e : su(On(e));
}
function vr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = su(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), l = _e(n), i = o ? [l].concat(l.visualViewport || [], Co(n) ? n : []) : n, u = t.concat(i);
  return o ? u : u.concat(vr(On(i)));
}
function Da(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function h2(e, t) {
  var r = Qt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function zl(e, t, r) {
  return t === tu ? Da(m2(e, r)) : $t(t) ? h2(t, r) : Da(g2(vt(e)));
}
function b2(e) {
  var t = vr(On(e)), r = ["absolute", "fixed"].indexOf(ct(e).position) >= 0, n = r && Le(e) ? Ir(e) : e;
  return $t(n) ? t.filter(function(o) {
    return $t(o) && au(o, n) && at(o) !== "body";
  }) : [];
}
function y2(e, t, r, n) {
  var o = t === "clippingParents" ? b2(e) : [].concat(t), l = [].concat(o, [r]), i = l[0], u = l.reduce(function(s, c) {
    var d = zl(e, c, n);
    return s.top = Rt(d.top, s.top), s.right = pn(d.right, s.right), s.bottom = pn(d.bottom, s.bottom), s.left = Rt(d.left, s.left), s;
  }, zl(e, i, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function uu(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? nt(n) : null, l = n ? er(n) : null, i = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case Ae:
      s = { x: i, y: t.y - r.height };
      break;
    case $e:
      s = { x: i, y: t.y + t.height };
      break;
    case Me:
      s = { x: t.x + t.width, y: u };
      break;
    case we:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = o ? Ao(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (l) {
      case Xt:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2);
        break;
      case Sr:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Cr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, l = r.strategy, i = l === void 0 ? e.strategy : l, u = r.boundary, s = u === void 0 ? P5 : u, c = r.rootBoundary, d = c === void 0 ? tu : c, m = r.elementContext, g = m === void 0 ? mr : m, p = r.altBoundary, h = p === void 0 ? !1 : p, f = r.padding, x = f === void 0 ? 0 : f, y = lu(typeof x != "number" ? x : iu(x, Br)), A = g === mr ? N5 : mr, v = e.rects.popper, E = e.elements[h ? A : g], w = y2($t(E) ? E : E.contextElement || vt(e.elements.popper), s, d, i), S = Qt(e.elements.reference), k = uu({ reference: S, element: v, strategy: "absolute", placement: o }), C = Da(Object.assign({}, v, k)), T = g === mr ? C : S, O = { top: w.top - T.top + y.top, bottom: T.bottom - w.bottom + y.bottom, left: w.left - T.left + y.left, right: T.right - w.right + y.right }, R = e.modifiersData.offset;
  if (g === mr && R) {
    var D = R[o];
    Object.keys(O).forEach(function(F) {
      var P = [Me, $e].indexOf(F) >= 0 ? 1 : -1, L = [Ae, $e].indexOf(F) >= 0 ? "y" : "x";
      O[F] += D[L] * P;
    });
  }
  return O;
}
function v2(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, l = r.rootBoundary, i = r.padding, u = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? ru : s, d = er(n), m = d ? u ? jl : jl.filter(function(h) {
    return er(h) === d;
  }) : Br, g = m.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  g.length === 0 && (g = m);
  var p = g.reduce(function(h, f) {
    return h[f] = Cr(e, { placement: f, boundary: o, rootBoundary: l, padding: i })[nt(f)], h;
  }, {});
  return Object.keys(p).sort(function(h, f) {
    return p[h] - p[f];
  });
}
function E2(e) {
  if (nt(e) === Tn)
    return [];
  var t = tn(e);
  return [Vl(e), t, Vl(t)];
}
function x2(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, u = i === void 0 ? !0 : i, s = r.fallbackPlacements, c = r.padding, d = r.boundary, m = r.rootBoundary, g = r.altBoundary, p = r.flipVariations, h = p === void 0 ? !0 : p, f = r.allowedAutoPlacements, x = t.options.placement, y = nt(x), A = y === x, v = s || (A || !h ? [tn(x)] : E2(x)), E = [x].concat(v).reduce(function(J, I) {
      return J.concat(nt(I) === Tn ? v2(t, { placement: I, boundary: d, rootBoundary: m, padding: c, flipVariations: h, allowedAutoPlacements: f }) : I);
    }, []), w = t.rects.reference, S = t.rects.popper, k = /* @__PURE__ */ new Map(), C = !0, T = E[0], O = 0; O < E.length; O++) {
      var R = E[O], D = nt(R), F = er(R) === Xt, P = [Ae, $e].indexOf(D) >= 0, L = P ? "width" : "height", $ = Cr(t, { placement: R, boundary: d, rootBoundary: m, altBoundary: g, padding: c }), N = P ? F ? Me : we : F ? $e : Ae;
      w[L] > S[L] && (N = tn(N));
      var Z = tn(N), B = [];
      if (l && B.push($[D] <= 0), u && B.push($[N] <= 0, $[Z] <= 0), B.every(function(J) {
        return J;
      })) {
        T = R, C = !1;
        break;
      }
      k.set(R, B);
    }
    if (C)
      for (var j = h ? 3 : 1, X = function(J) {
        var I = E.find(function(V) {
          var U = k.get(V);
          if (U)
            return U.slice(0, J).every(function(se) {
              return se;
            });
        });
        if (I)
          return T = I, "break";
      }, ne = j; ne > 0; ne--) {
        var Y = X(ne);
        if (Y === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var A2 = { name: "flip", enabled: !0, phase: "main", fn: x2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ql(e, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
}
function Ul(e) {
  return [Ae, Me, $e, we].some(function(t) {
    return e[t] >= 0;
  });
}
function w2(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, l = t.modifiersData.preventOverflow, i = Cr(t, { elementContext: "reference" }), u = Cr(t, { altBoundary: !0 }), s = ql(i, n), c = ql(u, o, l), d = Ul(s), m = Ul(c);
  t.modifiersData[r] = { referenceClippingOffsets: s, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var S2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: w2 };
function C2(e, t, r) {
  var n = nt(e), o = [we, Ae].indexOf(n) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r, i = l[0], u = l[1];
  return i = i || 0, u = (u || 0) * o, [we, Me].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u };
}
function k2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, l = o === void 0 ? [0, 0] : o, i = ru.reduce(function(d, m) {
    return d[m] = C2(m, t.rects, l), d;
  }, {}), u = i[t.placement], s = u.x, c = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
var _2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: k2 };
function T2(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = uu({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var O2 = { name: "popperOffsets", enabled: !0, phase: "read", fn: T2, data: {} };
function R2(e) {
  return e === "x" ? "y" : "x";
}
function F2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, u = i === void 0 ? !1 : i, s = r.boundary, c = r.rootBoundary, d = r.altBoundary, m = r.padding, g = r.tether, p = g === void 0 ? !0 : g, h = r.tetherOffset, f = h === void 0 ? 0 : h, x = Cr(t, { boundary: s, rootBoundary: c, padding: m, altBoundary: d }), y = nt(t.placement), A = er(t.placement), v = !A, E = Ao(y), w = R2(E), S = t.modifiersData.popperOffsets, k = t.rects.reference, C = t.rects.popper, T = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, O = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (S) {
    if (l) {
      var F, P = E === "y" ? Ae : we, L = E === "y" ? $e : Me, $ = E === "y" ? "height" : "width", N = S[E], Z = N + x[P], B = N - x[L], j = p ? -C[$] / 2 : 0, X = A === Xt ? k[$] : C[$], ne = A === Xt ? -C[$] : -k[$], Y = t.elements.arrow, J = p && Y ? xo(Y) : { width: 0, height: 0 }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ou(), V = I[P], U = I[L], se = yr(0, k[$], J[$]), be = v ? k[$] / 2 - j - se - V - O.mainAxis : X - se - V - O.mainAxis, ot = v ? -k[$] / 2 + j + se + U + O.mainAxis : ne + se + U + O.mainAxis, Re = t.elements.arrow && Ir(t.elements.arrow), Ze = Re ? E === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, M = (F = R == null ? void 0 : R[E]) != null ? F : 0, Pe = N + be - M - Ze, Ve = N + ot - M, Et = yr(p ? pn(Z, Pe) : Z, N, p ? Rt(B, Ve) : B);
      S[E] = Et, D[E] = Et - N;
    }
    if (u) {
      var Pt, ze = E === "x" ? Ae : we, Nr = E === "x" ? $e : Me, ye = S[w], xt = w === "y" ? "height" : "width", qe = ye + x[ze], Nt = ye - x[Nr], Ue = [Ae, we].indexOf(y) !== -1, jt = (Pt = R == null ? void 0 : R[w]) != null ? Pt : 0, We = Ue ? qe : ye - k[xt] - C[xt] - jt + O.altAxis, fe = Ue ? ye + k[xt] + C[xt] - jt - O.altAxis : Nt, Ne = p && Ue ? t2(We, ye, fe) : yr(p ? We : qe, ye, p ? fe : Nt);
      S[w] = Ne, D[w] = Ne - ye;
    }
    t.modifiersData[n] = D;
  }
}
var D2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: F2, requiresIfExists: ["offset"] };
function L2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function $2(e) {
  return e === _e(e) || !Le(e) ? wo(e) : L2(e);
}
function M2(e) {
  var t = e.getBoundingClientRect(), r = Jt(t.width) / e.offsetWidth || 1, n = Jt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function B2(e, t, r) {
  r === void 0 && (r = !1);
  var n = Le(t), o = Le(t) && M2(t), l = vt(t), i = Qt(e, o, r), u = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (n || !n && !r) && ((at(t) !== "body" || Co(l)) && (u = $2(t)), Le(t) ? (s = Qt(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : l && (s.x = So(l))), { x: i.left + u.scrollLeft - s.x, y: i.top + u.scrollTop - s.y, width: i.width, height: i.height };
}
function I2(e) {
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
function P2(e) {
  var t = I2(e);
  return Y5.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function N2(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function j2(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, { options: Object.assign({}, o.options, n.options), data: Object.assign({}, o.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Wl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Gl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function H2(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, l = o === void 0 ? Wl : o;
  return function(i, u, s) {
    s === void 0 && (s = l);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Wl, l), modifiersData: {}, elements: { reference: i, popper: u }, attributes: {}, styles: {} }, d = [], m = !1, g = { state: c, setOptions: function(f) {
      var x = typeof f == "function" ? f(c.options) : f;
      h(), c.options = Object.assign({}, l, c.options, x), c.scrollParents = { reference: $t(i) ? vr(i) : i.contextElement ? vr(i.contextElement) : [], popper: vr(u) };
      var y = P2(j2([].concat(n, c.options.modifiers)));
      return c.orderedModifiers = y.filter(function(A) {
        return A.enabled;
      }), p(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var f = c.elements, x = f.reference, y = f.popper;
        if (Gl(x, y)) {
          c.rects = { reference: B2(x, Ir(y), c.options.strategy === "fixed"), popper: xo(y) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var A = 0; A < c.orderedModifiers.length; A++) {
            if (c.reset === !0) {
              c.reset = !1, A = -1;
              continue;
            }
            var v = c.orderedModifiers[A], E = v.fn, w = v.options, S = w === void 0 ? {} : w, k = v.name;
            typeof E == "function" && (c = E({ state: c, options: S, name: k, instance: g }) || c);
          }
        }
      }
    }, update: N2(function() {
      return new Promise(function(f) {
        g.forceUpdate(), f(c);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!Gl(i, u))
      return g;
    g.setOptions(s).then(function(f) {
      !m && s.onFirstUpdate && s.onFirstUpdate(f);
    });
    function p() {
      c.orderedModifiers.forEach(function(f) {
        var x = f.name, y = f.options, A = y === void 0 ? {} : y, v = f.effect;
        if (typeof v == "function") {
          var E = v({ state: c, name: x, instance: g, options: A }), w = function() {
          };
          d.push(E || w);
        }
      });
    }
    function h() {
      d.forEach(function(f) {
        return f();
      }), d = [];
    }
    return g;
  };
}
var Z2 = [d2, O2, u2, J5, _2, A2, D2, o2, S2], V2 = H2({ defaultModifiers: Z2 }), z2 = Te(I5()), q2 = [], U2 = function(e, t, r) {
  r === void 0 && (r = {});
  var n = b.useRef(null), o = { onFirstUpdate: r.onFirstUpdate, placement: r.placement || "bottom", strategy: r.strategy || "absolute", modifiers: r.modifiers || q2 }, l = b.useState({ styles: { popper: { position: o.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), i = l[0], u = l[1], s = b.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(m) {
      var g = m.state, p = Object.keys(g.elements);
      Ki.flushSync(function() {
        u({ styles: Pl(p.map(function(h) {
          return [h, g.styles[h] || {}];
        })), attributes: Pl(p.map(function(h) {
          return [h, g.attributes[h]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), c = b.useMemo(function() {
    var m = { onFirstUpdate: o.onFirstUpdate, placement: o.placement, strategy: o.strategy, modifiers: [].concat(o.modifiers, [s, { name: "applyStyles", enabled: !1 }]) };
    return (0, z2.default)(n.current, m) ? n.current || m : (n.current = m, m);
  }, [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]), d = b.useRef();
  return Nl(function() {
    d.current && d.current.setOptions(c);
  }, [c]), Nl(function() {
    if (!(e == null || t == null)) {
      var m = r.createPopper || V2, g = m(e, t, c);
      return d.current = g, function() {
        g.destroy(), d.current = null;
      };
    }
  }, [e, t, r.createPopper]), { state: d.current ? d.current.state : null, styles: i.styles, attributes: i.attributes, update: d.current ? d.current.update : null, forceUpdate: d.current ? d.current.forceUpdate : null };
};
function cu(e) {
  var t = b.useRef(e);
  return t.current = e, b.useCallback(function() {
    return t.current;
  }, []);
}
var W2 = function() {
};
function G2(e) {
  var t = e.initial, r = e.value, n = e.onChange, o = n === void 0 ? W2 : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var l = b.useState(t), i = l[0], u = l[1], s = cu(i), c = b.useCallback(function(m) {
    var g = s(), p = typeof m == "function" ? m(g) : m;
    typeof p.persist == "function" && p.persist(), u(p), typeof o == "function" && o(p);
  }, [s, o]), d = r !== void 0;
  return [d ? r : i, d ? o : c];
}
function du(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), function() {
    return { width: 0, height: 0, top: t, right: e, bottom: t, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var Y2 = ["styles", "attributes"], Yl = { getBoundingClientRect: du() }, Kl = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function K2(e, t) {
  var r, n, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(Kl).reduce(function(L, $) {
    var N;
    return q({}, L, (N = {}, N[$] = L[$] !== void 0 ? L[$] : Kl[$], N));
  }, e), i = b.useMemo(function() {
    return [{ name: "offset", options: { offset: l.offset } }];
  }, Array.isArray(l.offset) ? l.offset : []), u = q({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }), s = b.useState(null), c = s[0], d = s[1], m = b.useState(null), g = m[0], p = m[1], h = G2({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }), f = h[0], x = h[1], y = b.useRef();
  b.useEffect(function() {
    return function() {
      return clearTimeout(y.current);
    };
  }, []);
  var A = U2(l.followCursor ? Yl : c, g, u), v = A.styles, E = A.attributes, w = uo(A, Y2), S = w.update, k = cu({ visible: f, triggerRef: c, tooltipRef: g, finalConfig: l }), C = b.useCallback(function(L) {
    return Array.isArray(l.trigger) ? l.trigger.includes(L) : l.trigger === L;
  }, Array.isArray(l.trigger) ? l.trigger : [l.trigger]), T = b.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return x(!1);
    }, l.delayHide);
  }, [l.delayHide, x]), O = b.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return x(!0);
    }, l.delayShow);
  }, [l.delayShow, x]), R = b.useCallback(function() {
    k().visible ? T() : O();
  }, [k, T, O]);
  b.useEffect(function() {
    if (k().finalConfig.closeOnOutsideClick) {
      var L = function($) {
        var N, Z = k(), B = Z.tooltipRef, j = Z.triggerRef, X = ($.composedPath == null || (N = $.composedPath()) == null ? void 0 : N[0]) || $.target;
        X instanceof Node && B != null && j != null && !B.contains(X) && !j.contains(X) && T();
      };
      return document.addEventListener("mousedown", L), function() {
        return document.removeEventListener("mousedown", L);
      };
    }
  }, [k, T]), b.useEffect(function() {
    if (!(c == null || !C("click")))
      return c.addEventListener("click", R), function() {
        return c.removeEventListener("click", R);
      };
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("double-click")))
      return c.addEventListener("dblclick", R), function() {
        return c.removeEventListener("dblclick", R);
      };
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("right-click"))) {
      var L = function($) {
        $.preventDefault(), R();
      };
      return c.addEventListener("contextmenu", L), function() {
        return c.removeEventListener("contextmenu", L);
      };
    }
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("focus")))
      return c.addEventListener("focus", O), c.addEventListener("blur", T), function() {
        c.removeEventListener("focus", O), c.removeEventListener("blur", T);
      };
  }, [c, C, O, T]), b.useEffect(function() {
    if (!(c == null || !C("hover")))
      return c.addEventListener("mouseenter", O), c.addEventListener("mouseleave", T), function() {
        c.removeEventListener("mouseenter", O), c.removeEventListener("mouseleave", T);
      };
  }, [c, C, O, T]), b.useEffect(function() {
    if (!(g == null || !C("hover") || !k().finalConfig.interactive))
      return g.addEventListener("mouseenter", O), g.addEventListener("mouseleave", T), function() {
        g.removeEventListener("mouseenter", O), g.removeEventListener("mouseleave", T);
      };
  }, [g, C, O, T, k]);
  var D = w == null || (r = w.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null ? void 0 : o.isReferenceHidden;
  b.useEffect(function() {
    l.closeOnTriggerHidden && D && T();
  }, [l.closeOnTriggerHidden, T, D]), b.useEffect(function() {
    if (!l.followCursor || c == null)
      return;
    function L($) {
      var N = $.clientX, Z = $.clientY;
      Yl.getBoundingClientRect = du(N, Z), S == null || S();
    }
    return c.addEventListener("mousemove", L), function() {
      return c.removeEventListener("mousemove", L);
    };
  }, [l.followCursor, c, S]), b.useEffect(function() {
    if (!(g == null || S == null || l.mutationObserverOptions == null)) {
      var L = new MutationObserver(S);
      return L.observe(g, l.mutationObserverOptions), function() {
        return L.disconnect();
      };
    }
  }, [l.mutationObserverOptions, g, S]);
  var F = function(L) {
    return L === void 0 && (L = {}), q({}, L, { style: q({}, L.style, v.popper) }, E.popper, { "data-popper-interactive": l.interactive });
  }, P = function(L) {
    return L === void 0 && (L = {}), q({}, L, E.arrow, { style: q({}, L.style, v.arrow), "data-popper-arrow": !0 });
  };
  return q({ getArrowProps: P, getTooltipProps: F, setTooltipRef: p, setTriggerRef: d, tooltipRef: g, triggerRef: c, visible: f }, w);
}
var Fe = Mt(1e3)((e, t, r, n = 0) => t.split("-")[0] === e ? r : n), ft = 8, X2 = _.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
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
}, ({ theme: e, color: t, placement: r }) => ({ bottom: `${Fe("top", r, `${ft * -1}px`, "auto")}`, top: `${Fe("bottom", r, `${ft * -1}px`, "auto")}`, right: `${Fe("left", r, `${ft * -1}px`, "auto")}`, left: `${Fe("right", r, `${ft * -1}px`, "auto")}`, borderBottomWidth: `${Fe("top", r, "0", ft)}px`, borderTopWidth: `${Fe("bottom", r, "0", ft)}px`, borderRightWidth: `${Fe("left", r, "0", ft)}px`, borderLeftWidth: `${Fe("right", r, "0", ft)}px`, borderTopColor: Fe("top", r, e.color[t] || t || e.base === "light" ? br(e.background.app) : e.background.app, "transparent"), borderBottomColor: Fe("bottom", r, e.color[t] || t || e.base === "light" ? br(e.background.app) : e.background.app, "transparent"), borderLeftColor: Fe("left", r, e.color[t] || t || e.base === "light" ? br(e.background.app) : e.background.app, "transparent"), borderRightColor: Fe("right", r, e.color[t] || t || e.base === "light" ? br(e.background.app) : e.background.app, "transparent") })), J2 = _.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: t, hasChrome: r }) => r ? { background: e.color[t] || t || e.base === "light" ? br(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), ko = a.forwardRef(({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: o, color: l, withArrows: i, ...u }, s) => a.createElement(J2, { "data-testid": "tooltip", hasChrome: t, ref: s, ...u, color: l }, t && i && a.createElement(X2, { placement: e, ...n, color: l }), r));
ko.displayName = "Tooltip";
ko.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: rn } = B5, Q2 = _.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, ef = _.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, pu = ({ svg: e, trigger: t, closeOnOutsideClick: r, placement: n, hasChrome: o, withArrows: l, offset: i, tooltip: u, children: s, closeOnTriggerHidden: c, mutationObserverOptions: d, closeOnClick: m, tooltipShown: g, onVisibilityChange: p, defaultVisible: h, delayHide: f, visible: x, interactive: y, delayShow: A, modifiers: v, strategy: E, followCursor: w, onVisibleChange: S, ...k }) => {
  let C = e ? ef : Q2, { getArrowProps: T, getTooltipProps: O, setTooltipRef: R, setTriggerRef: D, visible: F, state: P } = K2({ trigger: t, placement: n, defaultVisible: h ?? g, delayHide: f, interactive: y, closeOnOutsideClick: r ?? m, closeOnTriggerHidden: c, onVisibleChange: ($) => {
    p == null || p($), S == null || S($);
  }, delayShow: A, followCursor: w, mutationObserverOptions: d, visible: x, offset: i }, { modifiers: v, strategy: E }), L = a.createElement(ko, { placement: P == null ? void 0 : P.placement, ref: R, hasChrome: o, arrowProps: T(), withArrows: l, ...O() }, typeof u == "function" ? u({ onHide: () => S(!1) }) : u);
  return a.createElement(a.Fragment, null, a.createElement(C, { trigger: t, ref: D, ...k }, s), F && p0.createPortal(L, rn.body));
};
pu.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var tf = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, o] = b.useState(e), l = b.useCallback((i) => {
    t && t(i) === !1 || o(i);
  }, [t]);
  return b.useEffect(() => {
    let i = () => l(!1);
    rn.addEventListener("keydown", i, !1);
    let u = Array.from(rn.getElementsByTagName("iframe")), s = [];
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
      rn.removeEventListener("keydown", i), s.forEach((c) => {
        c();
      });
    };
  }), a.createElement(pu, { ...r, visible: n, onVisibleChange: l });
};
function rf(e, t) {
  var r = b.useRef(null), n = b.useRef(null);
  n.current = t;
  var o = b.useRef(null);
  b.useEffect(function() {
    l();
  });
  var l = b.useCallback(function() {
    var i = o.current, u = n.current, s = i || (u ? u instanceof Element ? u : u.current : null);
    r.current && r.current.element === s && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: s,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s ? e(s) : void 0
    });
  }, [e]);
  return b.useEffect(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), b.useCallback(function(i) {
    o.current = i, l();
  }, [l]);
}
function Xl(e, t, r) {
  return e[t] ? e[t][0] ? e[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
function fu(e) {
  e === void 0 && (e = {});
  var t = e.onResize, r = b.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round, o = b.useRef(), l = b.useState({
    width: void 0,
    height: void 0
  }), i = l[0], u = l[1], s = b.useRef(!1);
  b.useEffect(function() {
    return s.current = !1, function() {
      s.current = !0;
    };
  }, []);
  var c = b.useRef({
    width: void 0,
    height: void 0
  }), d = rf(b.useCallback(function(m) {
    return (!o.current || o.current.box !== e.box || o.current.round !== n) && (o.current = {
      box: e.box,
      round: n,
      instance: new ResizeObserver(function(g) {
        var p = g[0], h = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", f = Xl(p, h, "inlineSize"), x = Xl(p, h, "blockSize"), y = f ? n(f) : void 0, A = x ? n(x) : void 0;
        if (c.current.width !== y || c.current.height !== A) {
          var v = {
            width: y,
            height: A
          };
          c.current.width = y, c.current.height = A, r.current ? r.current(v) : s.current || u(v);
        }
      })
    }), o.current.instance.observe(m, {
      box: e.box
    }), function() {
      o.current && o.current.instance.unobserve(m);
    };
  }, [e.box, n]), e.ref);
  return b.useMemo(function() {
    return {
      ref: d,
      width: i.width,
      height: i.height
    };
  }, [d, i.width, i.height]);
}
const { global: nf } = __STORYBOOK_MODULE_GLOBAL__;
var ee = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e;
};
function af(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kr(e, t) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, kr(e, t);
}
function of(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kr(e, t);
}
function La(e) {
  return La = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, La(e);
}
function lf(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function sf() {
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
function nn(e, t, r) {
  return sf() ? nn = Reflect.construct.bind() : nn = function(n, o, l) {
    var i = [null];
    i.push.apply(i, o);
    var u = Function.bind.apply(n, i), s = new u();
    return l && kr(s, l.prototype), s;
  }, nn.apply(null, arguments);
}
function $a(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return $a = function(r) {
    if (r === null || !lf(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, n);
    }
    function n() {
      return nn(r, arguments, La(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), kr(n, r);
  }, $a(e);
}
var uf = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
function cf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var et = function(e) {
  of(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, cf.apply(void 0, [uf[r]].concat(l))) || this;
    }
    return af(n);
  }
  return t;
}($a(Error));
function ta(e) {
  return Math.round(e * 255);
}
function df(e, t, r) {
  return ta(e) + "," + ta(t) + "," + ta(r);
}
function _r(e, t, r, n) {
  if (n === void 0 && (n = df), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), u = 0, s = 0, c = 0;
  o >= 0 && o < 1 ? (u = l, s = i) : o >= 1 && o < 2 ? (u = i, s = l) : o >= 2 && o < 3 ? (s = l, c = i) : o >= 3 && o < 4 ? (s = i, c = l) : o >= 4 && o < 5 ? (u = i, c = l) : o >= 5 && o < 6 && (u = l, c = i);
  var d = r - l / 2, m = u + d, g = s + d, p = c + d;
  return n(m, g, p);
}
var Jl = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function pf(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Jl[t] ? "#" + Jl[t] : e;
}
var ff = /^#[a-fA-F0-9]{6}$/, mf = /^#[a-fA-F0-9]{8}$/, gf = /^#[a-fA-F0-9]{3}$/, hf = /^#[a-fA-F0-9]{4}$/, ra = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, bf = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, yf = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, vf = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function _o(e) {
  if (typeof e != "string")
    throw new et(3);
  var t = pf(e);
  if (t.match(ff))
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(mf)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(gf))
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(hf)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var o = ra.exec(t);
  if (o)
    return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var l = bf.exec(t.substring(0, 50));
  if (l)
    return { red: parseInt("" + l[1], 10), green: parseInt("" + l[2], 10), blue: parseInt("" + l[3], 10), alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]) };
  var i = yf.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + _r(u, s, c) + ")", m = ra.exec(d);
    if (!m)
      throw new et(4, t, d);
    return { red: parseInt("" + m[1], 10), green: parseInt("" + m[2], 10), blue: parseInt("" + m[3], 10) };
  }
  var g = vf.exec(t.substring(0, 50));
  if (g) {
    var p = parseInt("" + g[1], 10), h = parseInt("" + g[2], 10) / 100, f = parseInt("" + g[3], 10) / 100, x = "rgb(" + _r(p, h, f) + ")", y = ra.exec(x);
    if (!y)
      throw new et(4, t, x);
    return { red: parseInt("" + y[1], 10), green: parseInt("" + y[2], 10), blue: parseInt("" + y[3], 10), alpha: parseFloat("" + g[4]) > 1 ? parseFloat("" + g[4]) / 100 : parseFloat("" + g[4]) };
  }
  throw new et(5);
}
function Ef(e) {
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
function mu(e) {
  return Ef(_o(e));
}
var xf = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Ma = xf;
function St(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function na(e) {
  return St(Math.round(e * 255));
}
function Af(e, t, r) {
  return Ma("#" + na(e) + na(t) + na(r));
}
function fn(e, t, r) {
  return _r(e, t, r, Af);
}
function wf(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return fn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return fn(e.hue, e.saturation, e.lightness);
  throw new et(1);
}
function Sf(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? fn(e, t, r) : "rgba(" + _r(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? fn(e.hue, e.saturation, e.lightness) : "rgba(" + _r(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new et(2);
}
function Ba(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ma("#" + St(e) + St(t) + St(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ma("#" + St(e.red) + St(e.green) + St(e.blue));
  throw new et(6);
}
function st(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = _o(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Ba(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Ba(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new et(7);
}
var Cf = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, kf = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, _f = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Tf = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function gu(e) {
  if (typeof e != "object")
    throw new et(8);
  if (kf(e))
    return st(e);
  if (Cf(e))
    return Ba(e);
  if (Tf(e))
    return Sf(e);
  if (_f(e))
    return wf(e);
  throw new et(8);
}
function hu(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : hu(e, t, n);
  };
}
function To(e) {
  return hu(e, e.length, []);
}
function Oo(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Of(e, t) {
  if (t === "transparent")
    return t;
  var r = mu(t);
  return gu(q({}, r, { lightness: Oo(0, 1, r.lightness - parseFloat(e)) }));
}
var Rf = To(Of), Ut = Rf;
function Ff(e, t) {
  if (t === "transparent")
    return t;
  var r = mu(t);
  return gu(q({}, r, { lightness: Oo(0, 1, r.lightness + parseFloat(e)) }));
}
var Df = To(Ff), Lf = Df;
function $f(e, t) {
  if (t === "transparent")
    return t;
  var r = _o(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = q({}, r, { alpha: Oo(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return st(o);
}
var Mf = To($f), Ee = Mf, or = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), pt = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? Ee(0.1, e.color.defaultText) : Ee(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), re = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), It = { margin: "16px 0" }, Bf = ({ href: e, children: t, ...r }) => {
  let n = /^\//.test(e), o = /^#.*/.test(e), l = n ? `./?path=${e}` : e;
  return a.createElement("a", { href: l, target: o ? "_self" : "_top", ...r }, t);
}, bu = _(Bf)(re, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), yu = _.blockquote(re, It, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), If = (e) => typeof e == "string", Pf = /[\n\r]/g, Nf = _.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), pt), jf = _(vo)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Ro = ({ className: e, children: t, ...r }) => {
  let n = (e || "").match(/lang-(\S+)/), o = b.Children.toArray(t);
  return o.filter(If).some((l) => l.match(Pf)) ? a.createElement(jf, { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? "plaintext", format: !1, ...r }, t) : a.createElement(Nf, { ...r, className: e }, o);
}, vu = _.div(re), Eu = _.dl(re, { ...It, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), xu = _.h1(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), Fo = _.h2(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), Do = _.h3(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), Au = _.h4(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), wu = _.h5(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), Su = _.h6(re, or, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), Cu = _.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), ku = _.img({ maxWidth: "100%" }), _u = _.li(re, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": pt({ theme: e }) })), Hf = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Tu = _.ol(re, It, { ...Hf, listStyle: "decimal" }), Ou = _.p(re, It, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": pt({ theme: e }) })), Ru = _.pre(re, It, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), Fu = _.span(re, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), Du = _.table(re, It, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), Lu = _.title(pt), Zf = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, $u = _.ul(re, It, { ...Zf, listStyle: "disc" }), Lo = _.div(re), Mu = { h1: (e) => a.createElement(xu, { ...ee(e, "h1") }), h2: (e) => a.createElement(Fo, { ...ee(e, "h2") }), h3: (e) => a.createElement(Do, { ...ee(e, "h3") }), h4: (e) => a.createElement(Au, { ...ee(e, "h4") }), h5: (e) => a.createElement(wu, { ...ee(e, "h5") }), h6: (e) => a.createElement(Su, { ...ee(e, "h6") }), pre: (e) => a.createElement(Ru, { ...ee(e, "pre") }), a: (e) => a.createElement(bu, { ...ee(e, "a") }), hr: (e) => a.createElement(Cu, { ...ee(e, "hr") }), dl: (e) => a.createElement(Eu, { ...ee(e, "dl") }), blockquote: (e) => a.createElement(yu, { ...ee(e, "blockquote") }), table: (e) => a.createElement(Du, { ...ee(e, "table") }), img: (e) => a.createElement(ku, { ...ee(e, "img") }), div: (e) => a.createElement(vu, { ...ee(e, "div") }), span: (e) => a.createElement(Fu, { ...ee(e, "span") }), li: (e) => a.createElement(_u, { ...ee(e, "li") }), ul: (e) => a.createElement($u, { ...ee(e, "ul") }), ol: (e) => a.createElement(Tu, { ...ee(e, "ol") }), p: (e) => a.createElement(Ou, { ...ee(e, "p") }), code: (e) => a.createElement(Ro, { ...ee(e, "code") }), tt: (e) => a.createElement(Lu, { ...ee(e, "tt") }), resetwrapper: (e) => a.createElement(Lo, { ...ee(e, "resetwrapper") }) };
_.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: t }) => {
  switch (t) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var Tr = { user: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), a.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: a.createElement(a.Fragment, null, a.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: a.createElement(a.Fragment, null, a.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), a.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), a.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), a.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), a.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), a.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), a.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: a.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), a.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), a.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), a.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: a.createElement(a.Fragment, null, a.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), a.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), a.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), a.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), a.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), a.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), a.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), a.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: a.createElement(a.Fragment, null, a.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: a.createElement(a.Fragment, null, a.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), a.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), a.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), a.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: a.createElement(a.Fragment, null, a.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, Bu = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, ve = ({ icon: e, useSymbol: t, ...r }) => a.createElement(Bu, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r }, t ? a.createElement("use", { xlinkHref: `#icon--${e}` }) : Tr[e]);
b.memo(function({ icons: e = Object.keys(Tr) }) {
  return a.createElement(Bu, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((t) => a.createElement("symbol", { id: `icon--${t}`, key: t }, Tr[t])));
});
var Vf = 0, zf = (e) => e.button === Vf && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, qf = (e, t) => {
  zf(e) && (e.preventDefault(), t(e));
}, Uf = _.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), Wf = _.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: Ut(0.07, e.color.secondary), "svg path:not([fill])": { fill: Ut(0.07, e.color.secondary) } }, "&:active": { color: Ut(0.1, e.color.secondary), "svg path:not([fill])": { fill: Ut(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: t, tertiary: r }) => {
  let n;
  return t && (n = [e.textMutedColor, e.color.dark, e.color.darker]), r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]), n ? { color: n[0], "svg path:not([fill])": { fill: n[0] }, "&:hover": { color: n[1], "svg path:not([fill])": { fill: n[1] } }, "&:active": { color: n[2], "svg path:not([fill])": { fill: n[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: t }) => t ? { color: e.color.lightest, ":not([fill])": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path:not([fill])": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path:not([fill])": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), Ft = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: o, className: l, ...i }) => a.createElement(Wf, { ...i, onClick: r && e ? (u) => qf(u, r) : r, className: l }, a.createElement(Uf, { withArrow: n, containsIcon: o }, t, n && a.createElement(ve, { icon: "arrowright" })));
Ft.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
_.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var Dt = [], tr = null, Gf = b.lazy(async () => {
  let { SyntaxHighlighter: e } = await import("./storybook-a50401e3.es.js");
  return Dt.length > 0 && (Dt.forEach((t) => {
    e.registerLanguage(...t);
  }), Dt = []), tr === null && (tr = e), { default: (t) => a.createElement(e, { ...t }) };
}), Yf = b.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([import("./storybook-a50401e3.es.js"), import("./storybook-c0374005.es.js")]);
  return Dt.length > 0 && (Dt.forEach((r) => {
    e.registerLanguage(...r);
  }), Dt = []), tr === null && (tr = e), { default: (r) => a.createElement(e, { ...r, formatter: t }) };
}), Rn = (e) => a.createElement(b.Suspense, { fallback: a.createElement("div", null) }, e.format !== !1 ? a.createElement(Yf, { ...e }) : a.createElement(Gf, { ...e }));
Rn.registerLanguage = (...e) => {
  if (tr !== null) {
    tr.registerLanguage(...e);
    return;
  }
  Dt.push(e);
};
_.div(({ theme: e, col: t, row: r = 1 }) => t ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: t * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${ka}`]: { marginLeft: 0 } } : { "& > *": { marginTop: r * e.layoutMargin }, [`& > *:first-child${ka}`]: { marginTop: 0 } }, ({ theme: e, outer: t, col: r, row: n }) => {
  switch (!0) {
    case !!(t && r):
      return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin };
    case !!(t && n):
      return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin };
    default:
      return {};
  }
});
var Kf = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), Xf = _.div(), Jf = _.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), Iu = ({ children: e, ...t }) => {
  let [r, n] = b.Children.toArray(e);
  return a.createElement(Jf, { ...t }, a.createElement(Kf, null, r), n && a.createElement(Xf, null, n));
}, Qf = _.div(({ scale: e = 1, elementHeight: t }) => ({ height: t || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function em({ scale: e, children: t }) {
  let r = b.useRef(null), [n, o] = b.useState(0), l = b.useCallback(({ height: i }) => {
    i && o(i / e);
  }, [e]);
  return b.useEffect(() => {
    r.current && o(r.current.getBoundingClientRect().height);
  }, [e]), fu({ ref: r, onResize: l }), a.createElement(Qf, { scale: e, elementHeight: n }, a.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
var tm = class extends b.Component {
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
    return a.createElement(a.Fragment, null, e);
  }
}, Pu = { Element: em, IFrame: tm }, { document: rm } = nf, nm = _.strong(({ theme: e }) => ({ color: e.color.orange })), am = _.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), Ql = _.em(({ theme: e }) => ({ color: e.textMutedColor })), om = /(Error): (.*)\n/, lm = /at (?:(.*) )?\(?(.+)\)?/, im = /([^@]+)?(?:\/<)?@(.+)?/, sm = /([^@]+)?@(.+)?/, Nu = ({ error: e }) => {
  if (!e)
    return a.createElement(b.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return a.createElement(b.Fragment, null, e.message || "This error has no stack or message");
  let t = e.stack.toString();
  t && e.message && !t.includes(e.message) && (t = `Error: ${e.message}

${t}`);
  let r = t.match(om);
  if (!r)
    return a.createElement(b.Fragment, null, t);
  let [, n, o] = r, l = t.split(/\n/).slice(1), [, ...i] = l.map((u) => {
    let s = u.match(lm) || u.match(im) || u.match(sm);
    return s ? { name: (s[1] || "").replace("/<", ""), location: s[2].replace(rm.location.origin, "") } : null;
  }).filter(Boolean);
  return a.createElement(b.Fragment, null, a.createElement("span", null, n), ": ", a.createElement(nm, null, o), a.createElement("br", null), i.map((u, s) => u.name ? a.createElement(b.Fragment, { key: s }, "  ", "at ", a.createElement(am, null, u.name), " (", a.createElement(Ql, null, u.location), ")", a.createElement("br", null)) : a.createElement(b.Fragment, { key: s }, "  ", "at ", a.createElement(Ql, null, u.location), a.createElement("br", null))));
}, ju = _.button(({ small: e, theme: t }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`, fontWeight: t.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: t }) => e ? { svg: { display: "block", margin: 0 }, ...t ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: t, secondary: r, gray: n }) => {
  let o;
  return n ? o = e.color.mediumlight : r ? o = e.color.secondary : t && (o = e.color.primary), o ? { background: o, color: n ? e.color.darkest : e.color.lightest, "&:hover": { background: Ut(0.05, o) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${st(o, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${st(o, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: t, inForm: r, small: n }) => t ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...r && n ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? Ut(0.02, e.button.background) : Lf(0.03, e.button.background), ...r ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${st(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: t }) => t ? { boxShadow: `${Ee(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: Ee(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: Ee(0, e.color.defaultText) } } : {}, ({ theme: e, outline: t, primary: r }) => {
  let n = e.color.primary;
  return t && r ? { boxShadow: `${n} 0 0 0 1px inset`, color: n, "svg path:not([fill])": { fill: n }, "&:hover": { boxShadow: `${n} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${n} 0 0 0 1px inset, ${st(n, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${n} 0 0 0 1px inset, ${st(n, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: t, primary: r, secondary: n }) => {
  let o;
  return n ? o = e.color.secondary : r && (o = e.color.primary), t && o ? { boxShadow: `${o} 0 0 0 1px inset`, color: o, "svg path:not([fill])": { fill: o }, "&:hover": { boxShadow: `${o} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: o, boxShadow: `${o} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${o} 0 0 0 1px inset, ${st(o, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${o} 0 0 0 1px inset, ${st(o, 0.2)} 0 8px 18px 0px` } } : {};
}), um = ju.withComponent("a"), Hu = Object.assign(b.forwardRef(function({ isLink: e, children: t, ...r }, n) {
  return e ? a.createElement(um, { ...r, ref: n }, t) : a.createElement(ju, { ...r, ref: n }, t);
}), { defaultProps: { isLink: !1 } }), cm = _.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), dm = _.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), Zu = ({ label: e, children: t, ...r }) => a.createElement(cm, { ...r }, e ? a.createElement(dm, null, a.createElement("span", null, e)) : null, t);
Zu.defaultProps = { label: void 0 };
var ei = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, pm = function(e, t) {
  var r = b.useRef();
  return b.useCallback(function(n) {
    e.current = n, r.current && ei(r.current, null), r.current = t, t && ei(t, n);
  }, [t]);
}, fm = pm, mm = function() {
}, gm = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], hm = function(e, t) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var r = e.onChange, n = r === void 0 ? mm : r;
  e.onHeightChange;
  var o = uo(e, gm);
  o.value;
  var l = b.useRef(null), i = fm(l, t);
  return b.useRef(0), b.useRef(), b.createElement("textarea", q({}, o, { onChange: n, ref: i }));
}, bm = b.forwardRef(hm), ym = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, $o = ({ theme: e }) => ({ ...ym, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), Fn = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, Vu = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, Dn = ({ valid: e, theme: t }) => {
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
}, vm = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("input", { ...n, ref: o });
}))($o, Fn, Vu, Dn, { minHeight: 32 }), { displayName: "Input" }), Em = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("select", { ...n, ref: o });
}))($o, Fn, Dn, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), xm = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(bm, { ...n, ref: o });
}))($o, Fn, Vu, Dn, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Am = _(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(Hu, { ...n, ref: o });
}))(Fn, Dn, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), wm = Object.assign(b.forwardRef(function(e, t) {
  return a.createElement(Am, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t });
}), { displayName: "Button" }), je = Object.assign(_.form({ boxSizing: "border-box", width: "100%" }), { Field: Zu, Input: vm, Select: Em, Textarea: xm, Button: wm }), Sm = b.lazy(() => import("./storybook-9fc4f74e.es.js").then((e) => ({ default: e.WithTooltip }))), Cm = (e) => a.createElement(b.Suspense, { fallback: a.createElement("div", null) }, a.createElement(Sm, { ...e })), km = b.lazy(() => import("./storybook-9fc4f74e.es.js").then((e) => ({ default: e.WithTooltipPure }))), zu = (e) => a.createElement(b.Suspense, { fallback: a.createElement("div", null) }, a.createElement(km, { ...e }));
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
_.span();
_.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
_.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
_.div({ padding: 15, width: 280, boxSizing: "border-box" });
var _m = _.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), Tm = ({ note: e, ...t }) => a.createElement(_m, { ...t }, e), Om = _(({ active: e, loading: t, disabled: r, ...n }) => a.createElement("span", { ...n }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: t }) => e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}, ({ loading: e, theme: t }) => e ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow } : {}, ({ disabled: e, theme: t }) => e ? { color: Ee(0.7, t.color.defaultText) } : {}), Rm = _.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), Fm = _.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), Dm = _.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: t }) => e ? { color: t.color.secondary } : {}, ({ theme: e, disabled: t }) => t ? { color: e.textMutedColor } : {}), ti = _.span(({ active: e, theme: t }) => e ? { "& svg": { opacity: 1 }, "& svg path:not([fill])": { fill: t.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), Lm = _.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), $m = Mt(100)((e, t, r) => {
  let n = {};
  return e && Object.assign(n, { onClick: e }), t && Object.assign(n, { href: t }), r && t && Object.assign(n, { to: t, as: r }), n;
}), qu = ({ loading: e, left: t, title: r, center: n, right: o, icon: l, active: i, disabled: u, isIndented: s, href: c, onClick: d, LinkWrapper: m, ...g }) => {
  let p = $m(d, c, m), h = { active: i, disabled: u }, f = typeof l == "string" && Tr[l];
  return a.createElement(Lm, { ...h, ...g, ...p }, l ? a.createElement(ti, { ...h }, f ? a.createElement(ve, { icon: l }) : l) : t && a.createElement(ti, { ...h }, t), r || n ? a.createElement(Fm, { isIndented: !t && !l && s }, r && a.createElement(Om, { ...h, loading: e }, r), n && a.createElement(Dm, { ...h }, n)) : null, o && a.createElement(Rm, { ...h }, o));
};
qu.defaultProps = { loading: !1, left: null, title: a.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var Mo = qu, Mm = _.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), Bm = (e) => {
  let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l } = e, { title: i, href: u, active: s } = l, c = b.useCallback((m) => {
    r(m, l);
  }, [r]), d = !!r;
  return a.createElement(Mo, { title: i, active: s, href: u, id: `list-item-${n}`, LinkWrapper: t, isIndented: o, ...l, ...d ? { onClick: c } : {} });
}, Bo = ({ links: e, LinkWrapper: t }) => {
  let r = e.some((n) => n.left || n.icon);
  return a.createElement(Mm, null, e.map(({ isGatsby: n, ...o }) => a.createElement(Bm, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })));
};
Bo.defaultProps = { LinkWrapper: Mo.defaultProps.LinkWrapper };
var Io = a.forwardRef(({ children: e, ...t }, r) => t.href != null ? a.createElement("a", { ref: r, ...t }, e) : a.createElement("button", { ref: r, type: "button", ...t }, e));
Io.displayName = "ButtonOrLink";
var Pr = _(Io, { shouldForwardProp: eo })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: t, theme: r }) => e ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor } : { color: t || r.barTextColor, borderBottomColor: "transparent" });
Pr.displayName = "TabButton";
var Lt = _(Io, { shouldForwardProp: eo })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: t }) => e ? { backgroundColor: t.background.hoverable, color: t.barSelectedColor } : {}, ({ disabled: e, theme: t }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: Ee(0.88, t.color.secondary), color: t.barHoverColor }, "&:focus-visible": { outline: Tn }, "&:focus:not(:focus-visible)": { outline: "none" } });
Lt.displayName = "IconButton";
var Im = _.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), Pm = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })), Uu = () => a.createElement(Pm, null, a.createElement(Im, null)), Ia = _.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
Ia.displayName = "Side";
var Nm = ({ children: e, className: t, scrollable: r }) => r ? a.createElement(yo, { vertical: !1, className: t }, e) : a.createElement("div", { className: t }, e), Po = _(Nm)(({ theme: e, scrollable: t = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: t ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: t = !1 }) => t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
Po.displayName = "Bar";
var jm = _.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), Ln = ({ children: e, backgroundColor: t, ...r }) => {
  let [n, o] = b.Children.toArray(e);
  return a.createElement(Po, { ...r }, a.createElement(jm, { bgColor: t }, a.createElement(Ia, { scrollable: r.scrollable, left: !0 }, n), o ? a.createElement(Ia, { right: !0 }, o) : null));
};
Ln.displayName = "FlexBar";
var Hm = _.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), ri = (e) => b.Children.toArray(e).map(({ props: { title: t, id: r, color: n, children: o } }) => {
  let l = Array.isArray(o) ? o[0] : o;
  return { title: t, id: r, ...n ? { color: n } : {}, render: typeof l == "function" ? l : ({ active: i }) => a.createElement(Hm, { active: i, role: "tabpanel" }, l) };
}), Zm = _.span(({ theme: e, isActive: t }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: t ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), Vm = _(Pr)(({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);
function zm(e) {
  let t = b.useRef(), r = b.useRef(), n = b.useRef(/* @__PURE__ */ new Map()), { width: o = 1 } = fu({ ref: t }), [l, i] = b.useState(e), [u, s] = b.useState([]), c = b.useRef(e), d = b.useCallback(({ menuName: g, actions: p }) => {
    let h = u.some(({ active: y }) => y), [f, x] = b.useState(!1);
    return a.createElement(a.Fragment, null, a.createElement(tf, { interactive: !0, visible: f, onVisibleChange: x, placement: "bottom", delayHide: 100, tooltip: a.createElement(Bo, { links: u.map(({ title: y, id: A, color: v, active: E }) => ({ id: A, title: y, color: v, active: E, onClick: (w) => {
      w.preventDefault(), p.onSelect(A);
    } })) }) }, a.createElement(Vm, { ref: r, active: h, preActive: f, style: { visibility: u.length ? "visible" : "hidden" }, "aria-hidden": !u.length, className: "tabbutton", type: "button", role: "tab" }, g, a.createElement(Zm, { className: "addon-collapsible-icon", isActive: h || f }))), u.map(({ title: y, id: A, color: v }, E) => {
      let w = `index-${E}`;
      return a.createElement(Pr, { id: `tabbutton-${Xi(A) ?? w}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (S) => {
        n.current.set(A, S);
      }, className: "tabbutton", type: "button", key: A, textColor: v, role: "tab" }, y);
    }));
  }, [u]), m = b.useCallback(() => {
    if (!t.current || !r.current)
      return;
    let { x: g, width: p } = t.current.getBoundingClientRect(), { width: h } = r.current.getBoundingClientRect(), f = u.length ? g + p - h : g + p, x = [], y = 0, A = e.filter((v) => {
      let { id: E } = v, w = n.current.get(E), { width: S = 0 } = (w == null ? void 0 : w.getBoundingClientRect()) || {}, k = g + y + S > f;
      return (!k || !w) && x.push(v), y += S, k;
    });
    (x.length !== l.length || c.current !== e) && (i(x), s(A), c.current = e);
  }, [u.length, e, l]);
  return b.useLayoutEffect(m, [m, o]), { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: u, AddonTab: d };
}
var qm = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Um = _.div(({ theme: e, bordered: t }) => t ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), No = _.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
No.displayName = "TabBar";
var Wm = _.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: t }) => e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: t }) => e ? { height: `calc(100% - ${t ? 42 : 40}px)`, position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 40 + (t ? 1 : 0), overflow: "auto", [`& > *:first-child${qm}`]: { position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 0 + (t ? 1 : 0), height: `calc(100% - ${t ? 2 : 0}px)`, overflow: "auto" } } : {}), $n = b.memo(({ children: e, selected: t, actions: r, absolute: n, bordered: o, tools: l, backgroundColor: i, id: u, menuName: s }) => {
  let c = ri(e).map((f) => f.id), d = b.useMemo(() => ri(e).map((f, x) => ({ ...f, active: t ? f.id === t : x === 0 })), [t, ...c]), { visibleList: m, tabBarRef: g, tabRefs: p, AddonTab: h } = zm(d);
  return d.length ? a.createElement(Um, { absolute: n, bordered: o, id: u }, a.createElement(Ln, { scrollable: !1, border: !0, backgroundColor: i }, a.createElement(No, { style: { whiteSpace: "normal" }, ref: g, role: "tablist" }, m.map(({ title: f, id: x, active: y, color: A }, v) => {
    let E = `index-${v}`;
    return a.createElement(Pr, { id: `tabbutton-${Xi(x) ?? E}`, ref: (w) => {
      p.current.set(x, w);
    }, className: `tabbutton ${y ? "tabbutton-active" : ""}`, type: "button", key: x, active: y, textColor: A, onClick: (w) => {
      w.preventDefault(), r.onSelect(x);
    }, role: "tab" }, typeof f == "function" ? a.createElement("title", null) : f);
  }), a.createElement(h, { menuName: s, actions: r })), l), a.createElement(Wm, { id: "panel-tab-content", bordered: o, absolute: n }, d.map(({ id: f, active: x, render: y }) => a.createElement(y, { key: f, active: x }, null)))) : a.createElement(Iu, null, a.createElement(b.Fragment, { key: "title" }, "Nothing found"));
});
$n.displayName = "Tabs";
$n.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var Wu = class extends b.Component {
  constructor(e) {
    super(e), this.handlers = { onSelect: (t) => this.setState({ selected: t }) }, this.state = { selected: e.initial };
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: o } = this.props, { selected: l } = this.state;
    return a.createElement($n, { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: o, actions: this.handlers }, r);
  }
};
Wu.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var Gu = _.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
Gu.displayName = "Separator";
var Gm = ar`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, Ym = _.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${Gm} 0.7s linear infinite`, mixBlendMode: "difference" })), ni = _.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), Km = _.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: Ee(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), Xm = _.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), ai = _.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), Jm = _(ve)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), Qm = ar`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, eg = _.span({ "&::after": { content: "'...'", animation: `${Qm} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), Yu = ({ progress: e, error: t, size: r, ...n }) => {
  if (t)
    return a.createElement(ni, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, a.createElement(Jm, { icon: "lightningoff" }), a.createElement(ai, null, t.message));
  if (e) {
    let { value: o, modules: l } = e, { message: i } = e;
    return l && (i += ` ${l.complete} / ${l.total} modules`), a.createElement(ni, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": o * 100, "aria-valuetext": i, role: "progressbar", ...n }, a.createElement(Km, null, a.createElement(Xm, { style: { width: `${o * 100}%` } })), a.createElement(ai, null, i, o < 1 && a.createElement(eg, { key: i })));
  }
  return a.createElement(Ym, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: r, ...n });
};
function tg(e) {
  let t = {}, r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var Ku = (e, t, r = {}) => {
  let [n, o] = e.split("?"), l = o ? { ...tg(o), ...r, id: t } : { ...r, id: t };
  return `${n}?${Object.entries(l).map((i) => `${i[0]}=${i[1]}`).join("&")}`;
};
_.pre`
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
  font-family: ${zt.fonts.mono};
  font-size: ${zt.size.s2 - 1}px;
`;
var Xu = Mu;
Object.keys(Mu).forEach((e) => {
  b.forwardRef((t, r) => b.createElement(e, { ...t, ref: r }));
});
const rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: bu,
  ActionBar: ho,
  Bar: Po,
  Blockquote: yu,
  Button: Hu,
  Code: Ro,
  DL: Eu,
  Div: vu,
  ErrorFormatter: Nu,
  FlexBar: Ln,
  Form: je,
  H1: xu,
  H2: Fo,
  H3: Do,
  H4: Au,
  H5: wu,
  H6: Su,
  HR: Cu,
  IconButton: Lt,
  IconButtonSkeleton: Uu,
  Icons: ve,
  Img: ku,
  LI: _u,
  Link: Ft,
  ListItem: Mo,
  Loader: Yu,
  OL: Tu,
  P: Ou,
  Placeholder: Iu,
  Pre: Ru,
  ResetWrapper: Lo,
  ScrollArea: yo,
  Separator: Gu,
  Span: Fu,
  SyntaxHighlighter: Rn,
  TT: Lu,
  TabBar: No,
  TabButton: Pr,
  Table: Du,
  Tabs: $n,
  TabsState: Wu,
  TooltipLinkList: Bo,
  TooltipNote: Tm,
  UL: $u,
  WithTooltip: Cm,
  WithTooltipPure: zu,
  Zoom: Pu,
  codeCommon: pt,
  components: Xu,
  createCopyToClipboardFunction: Qs,
  getStoryHref: Ku,
  icons: Tr,
  nameSpaceClassNames: ee,
  withReset: re
}, Symbol.toStringTag, { value: "Module" }));
function ng(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Or(e, t) {
  return Or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Or(e, t);
}
function ag(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Or(e, t);
}
function Pa(e) {
  return Pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pa(e);
}
function og(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function lg() {
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
function an(e, t, r) {
  return lg() ? an = Reflect.construct.bind() : an = function(o, l, i) {
    var u = [null];
    u.push.apply(u, l);
    var s = Function.bind.apply(o, u), c = new s();
    return i && Or(c, i.prototype), c;
  }, an.apply(null, arguments);
}
function Na(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Na = function(n) {
    if (n === null || !og(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return an(n, arguments, Pa(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Or(o, n);
  }, Na(e);
}
var ig = {
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
function sg() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var tt = /* @__PURE__ */ function(e) {
  ag(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, sg.apply(void 0, [ig[r]].concat(l))) || this;
    }
    return ng(n);
  }
  return t;
}(/* @__PURE__ */ Na(Error));
function aa(e) {
  return Math.round(e * 255);
}
function ug(e, t, r) {
  return aa(e) + "," + aa(t) + "," + aa(r);
}
function Rr(e, t, r, n) {
  if (n === void 0 && (n = ug), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), u = 0, s = 0, c = 0;
  o >= 0 && o < 1 ? (u = l, s = i) : o >= 1 && o < 2 ? (u = i, s = l) : o >= 2 && o < 3 ? (s = l, c = i) : o >= 3 && o < 4 ? (s = i, c = l) : o >= 4 && o < 5 ? (u = i, c = l) : o >= 5 && o < 6 && (u = l, c = i);
  var d = r - l / 2, m = u + d, g = s + d, p = c + d;
  return n(m, g, p);
}
var oi = {
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
function cg(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return oi[t] ? "#" + oi[t] : e;
}
var dg = /^#[a-fA-F0-9]{6}$/, pg = /^#[a-fA-F0-9]{8}$/, fg = /^#[a-fA-F0-9]{3}$/, mg = /^#[a-fA-F0-9]{4}$/, oa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, gg = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hg = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, bg = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Mn(e) {
  if (typeof e != "string")
    throw new tt(3);
  var t = cg(e);
  if (t.match(dg))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(pg)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(fg))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(mg)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var o = oa.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var l = gg.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var i = hg.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Rr(u, s, c) + ")", m = oa.exec(d);
    if (!m)
      throw new tt(4, t, d);
    return {
      red: parseInt("" + m[1], 10),
      green: parseInt("" + m[2], 10),
      blue: parseInt("" + m[3], 10)
    };
  }
  var g = bg.exec(t.substring(0, 50));
  if (g) {
    var p = parseInt("" + g[1], 10), h = parseInt("" + g[2], 10) / 100, f = parseInt("" + g[3], 10) / 100, x = "rgb(" + Rr(p, h, f) + ")", y = oa.exec(x);
    if (!y)
      throw new tt(4, t, x);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + g[4]) > 1 ? parseFloat("" + g[4]) / 100 : parseFloat("" + g[4])
    };
  }
  throw new tt(5);
}
function yg(e) {
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
function Ju(e) {
  return yg(Mn(e));
}
var vg = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, ja = vg;
function Ct(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function la(e) {
  return Ct(Math.round(e * 255));
}
function Eg(e, t, r) {
  return ja("#" + la(e) + la(t) + la(r));
}
function mn(e, t, r) {
  return Rr(e, t, r, Eg);
}
function xg(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return mn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return mn(e.hue, e.saturation, e.lightness);
  throw new tt(1);
}
function Ag(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? mn(e, t, r) : "rgba(" + Rr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? mn(e.hue, e.saturation, e.lightness) : "rgba(" + Rr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new tt(2);
}
function Ha(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ja("#" + Ct(e) + Ct(t) + Ct(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ja("#" + Ct(e.red) + Ct(e.green) + Ct(e.blue));
  throw new tt(6);
}
function ut(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = Mn(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Ha(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Ha(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new tt(7);
}
var wg = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Sg = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, Cg = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, kg = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function Qu(e) {
  if (typeof e != "object")
    throw new tt(8);
  if (Sg(e))
    return ut(e);
  if (wg(e))
    return Ha(e);
  if (kg(e))
    return Ag(e);
  if (Cg(e))
    return xg(e);
  throw new tt(8);
}
function ec(e, t, r) {
  return function() {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e.apply(this, o) : ec(e, t, o);
  };
}
function Bn(e) {
  return ec(e, e.length, []);
}
function In(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function _g(e, t) {
  if (t === "transparent")
    return t;
  var r = Ju(t);
  return Qu(yn({}, r, {
    lightness: In(0, 1, r.lightness - parseFloat(e))
  }));
}
var Tg = /* @__PURE__ */ Bn(_g), Ke = Tg;
function Og(e, t) {
  if (t === "transparent")
    return t;
  var r = Ju(t);
  return Qu(yn({}, r, {
    lightness: In(0, 1, r.lightness + parseFloat(e))
  }));
}
var Rg = /* @__PURE__ */ Bn(Og), kt = Rg;
function Fg(e, t) {
  if (t === "transparent")
    return t;
  var r = Mn(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = yn({}, r, {
    alpha: In(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return ut(o);
}
var Dg = /* @__PURE__ */ Bn(Fg), Wr = Dg;
function Lg(e, t) {
  if (t === "transparent")
    return t;
  var r = Mn(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = yn({}, r, {
    alpha: In(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return ut(o);
}
var $g = /* @__PURE__ */ Bn(Lg), te = $g, Mg = Ji, Bg = f0, Ig = Object.prototype, Pg = Ig.hasOwnProperty;
function Ng(e, t, r) {
  var n = e[t];
  (!(Pg.call(e, t) && Bg(n, r)) || r === void 0 && !(t in e)) && Mg(e, t, r);
}
var jo = Ng, jg = jo, Hg = Qi, Zg = b0, li = bn, Vg = y0;
function zg(e, t, r, n) {
  if (!li(e))
    return e;
  t = Hg(t, e);
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = Vg(t[o]), c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var d = u[s];
      c = n ? n(d, s, u) : void 0, c === void 0 && (c = li(d) ? d : Zg(t[o + 1]) ? [] : {});
    }
    jg(u, s, c), u = u[s];
  }
  return e;
}
var qg = zg, Ug = v0, Wg = qg, Gg = Qi;
function Yg(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n], u = Ug(e, i);
    r(u, i) && Wg(l, Gg(i, e), u);
  }
  return l;
}
var Kg = Yg, Xg = E0, Jg = es, Qg = ts, eh = x0, th = Object.getOwnPropertySymbols, rh = th ? function(e) {
  for (var t = []; e; )
    Xg(t, Qg(e)), e = Jg(e);
  return t;
} : eh, tc = rh;
function nh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ah = nh, oh = bn, lh = rs, ih = ah, sh = Object.prototype, uh = sh.hasOwnProperty;
function ch(e) {
  if (!oh(e))
    return ih(e);
  var t = lh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !uh.call(e, n)) || r.push(n);
  return r;
}
var dh = ch, ph = A0, fh = dh, mh = w0;
function gh(e) {
  return mh(e) ? ph(e, !0) : fh(e);
}
var Ho = gh, hh = S0, bh = tc, yh = Ho;
function vh(e) {
  return hh(e, yh, bh);
}
var rc = vh, Eh = C0, xh = k0, Ah = Kg, wh = rc;
function Sh(e, t) {
  if (e == null)
    return {};
  var r = Eh(wh(e), function(n) {
    return [n];
  });
  return t = xh(t), Ah(e, r, function(n, o) {
    return t(n, o[0]);
  });
}
var Ch = Sh;
const kh = /* @__PURE__ */ hn(Ch);
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
const _h = ["children", "options"], ii = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), si = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Th = ["style", "script"], Oh = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Rh = /mailto:/i, Fh = /\n{2,}$/, nc = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, Dh = /^ *> ?/gm, Lh = /^ {2,}\n/, $h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, ac = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, oc = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Mh = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Bh = /^(?:\n *)*\n/, Ih = /\r\n?/g, Ph = /^\[\^([^\]]+)](:.*)\n/, Nh = /^\[\^([^\]]+)]/, jh = /\f/g, Hh = /^\s*?\[(x|\s)\]/, lc = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, ic = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, sc = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Za = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, Zh = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, uc = /^<!--[\s\S]*?(?:-->)/, Vh = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Va = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, zh = /^\{.*\}$/, qh = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Uh = /^<([^ >]+@[^ >]+)>/, Wh = /^<([^ >]+:\/[^ >]+)>/, Gh = /-([a-z])?/gi, cc = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, Yh = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Kh = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Xh = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Jh = /(\[|\])/g, Qh = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, eb = /\t/g, tb = /^ *\| */, rb = /(^ *\||\| *$)/g, nb = / *$/, ab = /^ *:-+: *$/, ob = /^ *:-+ *$/, lb = /^ *-+: *$/, ib = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, sb = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, ub = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, cb = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, db = /^\\([^0-9A-Za-z\s])/, pb = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, fb = /^\n+/, mb = /^([ \t]*)/, gb = /\\([^\\])/g, ui = / *\n+$/, hb = /(?:^|\n)( *)$/, Zo = "(?:\\d+\\.)", Vo = "(?:[*+-])";
function dc(e) {
  return "( *)(" + (e === 1 ? Zo : Vo) + ") +";
}
const pc = dc(1), fc = dc(2);
function mc(e) {
  return new RegExp("^" + (e === 1 ? pc : fc));
}
const bb = mc(1), yb = mc(2);
function gc(e) {
  return new RegExp("^" + (e === 1 ? pc : fc) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? Zo : Vo) + " )[^\\n]*)*(\\n|$)", "gm");
}
const hc = gc(1), bc = gc(2);
function yc(e) {
  const t = e === 1 ? Zo : Vo;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const vc = yc(1), Ec = yc(2);
function ci(e, t) {
  const r = t === 1, n = r ? vc : Ec, o = r ? hc : bc, l = r ? bb : yb;
  return { t(i, u, s) {
    const c = hb.exec(s);
    return c && (u.o || !u._ && !u.u) ? n.exec(i = c[1] + i) : null;
  }, i: z.HIGH, l(i, u, s) {
    const c = r ? +i[2] : void 0, d = i[0].replace(Fh, `
`).match(o);
    let m = !1;
    return { p: d.map(function(g, p) {
      const h = l.exec(g)[0].length, f = new RegExp("^ {1," + h + "}", "gm"), x = g.replace(f, "").replace(l, ""), y = p === d.length - 1, A = x.indexOf(`

`) !== -1 || y && m;
      m = A;
      const v = s._, E = s.o;
      let w;
      s.o = !0, A ? (s._ = !1, w = x.replace(ui, `

`)) : (s._ = !0, w = x.replace(ui, ""));
      const S = u(w, s);
      return s._ = v, s.o = E, S;
    }), m: r, g: c };
  }, h: (i, u, s) => e(i.m ? "ol" : "ul", { key: s.k, start: i.g }, i.p.map(function(c, d) {
    return e("li", { key: d }, u(c, s));
  })) };
}
const vb = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Eb = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, xc = [nc, ac, oc, lc, sc, ic, uc, cc, hc, vc, bc, Ec], xb = [...xc, /^[^\n]+(?:  \n|\n{2,})/, Za, Va];
function Ab(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function wb(e) {
  return lb.test(e) ? "right" : ab.test(e) ? "center" : ob.test(e) ? "left" : null;
}
function di(e, t, r) {
  const n = r.$;
  r.$ = !0;
  const o = t(e.trim(), r);
  r.$ = n;
  let l = [[]];
  return o.forEach(function(i, u) {
    i.type === "tableSeparator" ? u !== 0 && u !== o.length - 1 && l.push([]) : (i.type !== "text" || o[u + 1] != null && o[u + 1].type !== "tableSeparator" || (i.v = i.v.replace(nb, "")), l[l.length - 1].push(i));
  }), l;
}
function Sb(e, t, r) {
  r._ = !0;
  const n = di(e[1], t, r), o = e[2].replace(rb, "").split("|").map(wb), l = function(i, u, s) {
    return i.trim().split(`
`).map(function(c) {
      return di(c, u, s);
    });
  }(e[3], t, r);
  return r._ = !1, { S: o, A: l, L: n, type: "table" };
}
function pi(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function mt(e) {
  return function(t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function gt(e) {
  return function(t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function it(e) {
  return function(t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function gr(e) {
  return function(t) {
    return e.exec(t);
  };
}
function Cb(e, t, r) {
  if (t._ || t.u || r && !r.endsWith(`
`))
    return null;
  let n = "";
  e.split(`
`).every((l) => !xc.some((i) => i.test(l)) && (n += l + `
`, l.trim()));
  const o = n.trimEnd();
  return o == "" ? null : [n, o];
}
function Zt(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return;
  } catch {
    return null;
  }
  return e;
}
function fi(e) {
  return e.replace(gb, "$1");
}
function on(e, t, r) {
  const n = r._ || !1, o = r.u || !1;
  r._ = !0, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = o, l;
}
function kb(e, t, r) {
  const n = r._ || !1, o = r.u || !1;
  r._ = !1, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = o, l;
}
function _b(e, t, r) {
  return r._ = !1, e(t, r);
}
const ia = (e, t, r) => ({ v: on(t, e[1], r) });
function sa() {
  return {};
}
function ua() {
  return null;
}
function Tb(...e) {
  return e.filter(Boolean).join(" ");
}
function ca(e, t, r) {
  let n = e;
  const o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); )
    o.shift();
  return n || r;
}
var z;
function Ob(e, t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || Ab, t.namedCodesToUnicode = t.namedCodesToUnicode ? Tt({}, si, t.namedCodesToUnicode) : si;
  const r = t.createElement || b.createElement;
  function n(p, h, ...f) {
    const x = ca(t.overrides, `${p}.props`, {});
    return r(function(y, A) {
      const v = ca(A, y);
      return v ? typeof v == "function" || typeof v == "object" && "render" in v ? v : ca(A, `${y}.component`, y) : y;
    }(p, t.overrides), Tt({}, h, x, { className: Tb(h == null ? void 0 : h.className, x.className) || void 0 }), ...f);
  }
  function o(p) {
    let h = !1;
    t.forceInline ? h = !0 : t.forceBlock || (h = Qh.test(p) === !1);
    const f = d(c(h ? p : `${p.trimEnd().replace(fb, "")}

`, { _: h }));
    for (; typeof f[f.length - 1] == "string" && !f[f.length - 1].trim(); )
      f.pop();
    if (t.wrapper === null)
      return f;
    const x = t.wrapper || (h ? "span" : "div");
    let y;
    if (f.length > 1 || t.forceWrapper)
      y = f;
    else {
      if (f.length === 1)
        return y = f[0], typeof y == "string" ? n("span", { key: "outer" }, y) : y;
      y = null;
    }
    return b.createElement(x, { key: "outer" }, y);
  }
  function l(p) {
    const h = p.match(Oh);
    return h ? h.reduce(function(f, x, y) {
      const A = x.indexOf("=");
      if (A !== -1) {
        const v = function(k) {
          return k.indexOf("-") !== -1 && k.match(Vh) === null && (k = k.replace(Gh, function(C, T) {
            return T.toUpperCase();
          })), k;
        }(x.slice(0, A)).trim(), E = function(k) {
          const C = k[0];
          return (C === '"' || C === "'") && k.length >= 2 && k[k.length - 1] === C ? k.slice(1, -1) : k;
        }(x.slice(A + 1).trim()), w = ii[v] || v, S = f[w] = function(k, C) {
          return k === "style" ? C.split(/;\s?/).reduce(function(T, O) {
            const R = O.slice(0, O.indexOf(":"));
            return T[R.replace(/(-[a-z])/g, (D) => D[1].toUpperCase())] = O.slice(R.length + 1).trim(), T;
          }, {}) : k === "href" ? Zt(C) : (C.match(zh) && (C = C.slice(1, C.length - 1)), C === "true" || C !== "false" && C);
        }(v, E);
        typeof S == "string" && (Za.test(S) || Va.test(S)) && (f[w] = b.cloneElement(o(S.trim()), { key: y }));
      } else
        x !== "style" && (f[ii[x] || x] = !0);
      return f;
    }, {}) : null;
  }
  const i = [], u = {}, s = { blockQuote: { t: it(nc), i: z.HIGH, l: (p, h, f) => ({ v: h(p[0].replace(Dh, ""), f) }), h: (p, h, f) => n("blockquote", { key: f.k }, h(p.v, f)) }, breakLine: { t: gr(Lh), i: z.HIGH, l: sa, h: (p, h, f) => n("br", { key: f.k }) }, breakThematic: { t: it($h), i: z.HIGH, l: sa, h: (p, h, f) => n("hr", { key: f.k }) }, codeBlock: { t: it(oc), i: z.MAX, l: (p) => ({ v: p[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (p, h, f) => n("pre", { key: f.k }, n("code", Tt({}, p.O, { className: p.M ? `lang-${p.M}` : "" }), p.v)) }, codeFenced: { t: it(ac), i: z.MAX, l: (p) => ({ O: l(p[3] || ""), v: p[4], M: p[2] || void 0, type: "codeBlock" }) }, codeInline: { t: gt(Mh), i: z.LOW, l: (p) => ({ v: p[2] }), h: (p, h, f) => n("code", { key: f.k }, p.v) }, footnote: { t: it(Ph), i: z.MAX, l: (p) => (i.push({ I: p[2], j: p[1] }), {}), h: ua }, footnoteReference: { t: mt(Nh), i: z.HIGH, l: (p) => ({ v: p[1], B: `#${t.slugify(p[1])}` }), h: (p, h, f) => n("a", { key: f.k, href: Zt(p.B) }, n("sup", { key: f.k }, p.v)) }, gfmTask: { t: mt(Hh), i: z.HIGH, l: (p) => ({ R: p[1].toLowerCase() === "x" }), h: (p, h, f) => n("input", { checked: p.R, key: f.k, readOnly: !0, type: "checkbox" }) }, heading: { t: it(t.enforceAtxHeadings ? ic : lc), i: z.HIGH, l: (p, h, f) => ({ v: on(h, p[2], f), T: t.slugify(p[2]), C: p[1].length }), h: (p, h, f) => n(`h${p.C}`, { id: p.T, key: f.k }, h(p.v, f)) }, headingSetext: { t: it(sc), i: z.MAX, l: (p, h, f) => ({ v: on(h, p[1], f), C: p[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { t: gr(uc), i: z.HIGH, l: () => ({}), h: ua }, image: { t: gt(Eb), i: z.HIGH, l: (p) => ({ D: p[1], B: fi(p[2]), F: p[3] }), h: (p, h, f) => n("img", { key: f.k, alt: p.D || void 0, title: p.F || void 0, src: Zt(p.B) }) }, link: { t: mt(vb), i: z.LOW, l: (p, h, f) => ({ v: kb(h, p[1], f), B: fi(p[2]), F: p[3] }), h: (p, h, f) => n("a", { key: f.k, href: Zt(p.B), title: p.F }, h(p.v, f)) }, linkAngleBraceStyleDetector: { t: mt(Wh), i: z.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], type: "link" }) }, linkBareUrlDetector: { t: (p, h) => h.N ? null : mt(qh)(p, h), i: z.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], F: void 0, type: "link" }) }, linkMailtoDetector: { t: mt(Uh), i: z.MAX, l(p) {
    let h = p[1], f = p[1];
    return Rh.test(f) || (f = "mailto:" + f), { v: [{ v: h.replace("mailto:", ""), type: "text" }], B: f, type: "link" };
  } }, orderedList: ci(n, 1), unorderedList: ci(n, 2), newlineCoalescer: { t: it(Bh), i: z.LOW, l: sa, h: () => `
` }, paragraph: { t: Cb, i: z.LOW, l: ia, h: (p, h, f) => n("p", { key: f.k }, h(p.v, f)) }, ref: { t: mt(Yh), i: z.MAX, l: (p) => (u[p[1]] = { B: p[2], F: p[4] }, {}), h: ua }, refImage: { t: gt(Kh), i: z.MAX, l: (p) => ({ D: p[1] || void 0, P: p[2] }), h: (p, h, f) => n("img", { key: f.k, alt: p.D, src: Zt(u[p.P].B), title: u[p.P].F }) }, refLink: { t: mt(Xh), i: z.MAX, l: (p, h, f) => ({ v: h(p[1], f), Z: h(p[0].replace(Jh, "\\$1"), f), P: p[2] }), h: (p, h, f) => u[p.P] ? n("a", { key: f.k, href: Zt(u[p.P].B), title: u[p.P].F }, h(p.v, f)) : n("span", { key: f.k }, h(p.Z, f)) }, table: { t: it(cc), i: z.HIGH, l: Sb, h: (p, h, f) => n("table", { key: f.k }, n("thead", null, n("tr", null, p.L.map(function(x, y) {
    return n("th", { key: y, style: pi(p, y) }, h(x, f));
  }))), n("tbody", null, p.A.map(function(x, y) {
    return n("tr", { key: y }, x.map(function(A, v) {
      return n("td", { key: v, style: pi(p, v) }, h(A, f));
    }));
  }))) }, tableSeparator: { t: function(p, h) {
    return h.$ ? (h._ = !0, tb.exec(p)) : null;
  }, i: z.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: gr(pb), i: z.MIN, l: (p) => ({ v: p[0].replace(Zh, (h, f) => t.namedCodesToUnicode[f] ? t.namedCodesToUnicode[f] : h) }), h: (p) => p.v }, textBolded: { t: gt(ib), i: z.MED, l: (p, h, f) => ({ v: h(p[2], f) }), h: (p, h, f) => n("strong", { key: f.k }, h(p.v, f)) }, textEmphasized: { t: gt(sb), i: z.LOW, l: (p, h, f) => ({ v: h(p[2], f) }), h: (p, h, f) => n("em", { key: f.k }, h(p.v, f)) }, textEscaped: { t: gt(db), i: z.HIGH, l: (p) => ({ v: p[1], type: "text" }) }, textMarked: { t: gt(ub), i: z.LOW, l: ia, h: (p, h, f) => n("mark", { key: f.k }, h(p.v, f)) }, textStrikethroughed: { t: gt(cb), i: z.LOW, l: ia, h: (p, h, f) => n("del", { key: f.k }, h(p.v, f)) } };
  t.disableParsingRawHTML !== !0 && (s.htmlBlock = { t: gr(Za), i: z.HIGH, l(p, h, f) {
    const [, x] = p[3].match(mb), y = new RegExp(`^${x}`, "gm"), A = p[3].replace(y, ""), v = (E = A, xb.some((C) => C.test(E)) ? _b : on);
    var E;
    const w = p[1].toLowerCase(), S = Th.indexOf(w) !== -1;
    f.N = f.N || w === "a";
    const k = S ? p[3] : v(h, A, f);
    return f.N = !1, { O: l(p[2]), v: k, G: S, H: S ? w : p[1] };
  }, h: (p, h, f) => n(p.H, Tt({ key: f.k }, p.O), p.G ? p.v : h(p.v, f)) }, s.htmlSelfClosing = { t: gr(Va), i: z.HIGH, l: (p) => ({ O: l(p[2] || ""), H: p[1] }), h: (p, h, f) => n(p.H, Tt({}, p.O, { key: f.k })) });
  const c = function(p) {
    let h = Object.keys(p);
    function f(x, y) {
      let A = [], v = "";
      for (; x; ) {
        let E = 0;
        for (; E < h.length; ) {
          const w = h[E], S = p[w], k = S.t(x, y, v);
          if (k) {
            const C = k[0];
            x = x.substring(C.length);
            const T = S.l(k, f, y);
            T.type == null && (T.type = w), A.push(T), v = C;
            break;
          }
          E++;
        }
      }
      return A;
    }
    return h.sort(function(x, y) {
      let A = p[x].i, v = p[y].i;
      return A !== v ? A - v : x < y ? -1 : 1;
    }), function(x, y) {
      return f(function(A) {
        return A.replace(Ih, `
`).replace(jh, "").replace(eb, "    ");
      }(x), y);
    };
  }(s), d = (m = function(p) {
    return function(h, f, x) {
      return p[h.type].h(h, f, x);
    };
  }(s), function p(h, f = {}) {
    if (Array.isArray(h)) {
      const x = f.k, y = [];
      let A = !1;
      for (let v = 0; v < h.length; v++) {
        f.k = v;
        const E = p(h[v], f), w = typeof E == "string";
        w && A ? y[y.length - 1] += E : E !== null && y.push(E), A = w;
      }
      return f.k = x, y;
    }
    return m(h, p, f);
  });
  var m;
  const g = o(e);
  return i.length ? n("div", null, g, n("footer", { key: "footer" }, i.map(function(p) {
    return n("div", { id: t.slugify(p.j), key: p.j }, p.j, d(c(p.I, { _: !0 })));
  }))) : g;
}
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(z || (z = {}));
const Ac = (e) => {
  let { children: t, options: r } = e, n = function(o, l) {
    if (o == null)
      return {};
    var i, u, s = {}, c = Object.keys(o);
    for (u = 0; u < c.length; u++)
      l.indexOf(i = c[u]) >= 0 || (s[i] = o[i]);
    return s;
  }(e, _h);
  return b.cloneElement(Ob(t, r), n);
};
function Rb(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var Fb = Rb;
function Db(e) {
  return e !== e;
}
var Lb = Db;
function $b(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; )
    if (e[n] === t)
      return n;
  return -1;
}
var Mb = $b, Bb = Fb, Ib = Lb, Pb = Mb;
function Nb(e, t, r) {
  return t === t ? Pb(e, t, r) : Bb(e, Ib, r);
}
var jb = Nb, Hb = jb;
function Zb(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Hb(e, t, 0) > -1;
}
var Vb = Zb;
function zb(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var qb = zb;
function Ub() {
}
var Wb = Ub, da = _0, Gb = Wb, Yb = ns, Kb = 1 / 0, Xb = da && 1 / Yb(new da([, -0]))[1] == Kb ? function(e) {
  return new da(e);
} : Gb, Jb = Xb, Qb = T0, ey = Vb, ty = qb, ry = O0, ny = Jb, ay = ns, oy = 200;
function ly(e, t, r) {
  var n = -1, o = ey, l = e.length, i = !0, u = [], s = u;
  if (r)
    i = !1, o = ty;
  else if (l >= oy) {
    var c = t ? null : ny(e);
    if (c)
      return ay(c);
    i = !1, o = ry, s = new Qb();
  } else
    s = t ? [] : u;
  e:
    for (; ++n < l; ) {
      var d = e[n], m = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, i && m === m) {
        for (var g = s.length; g--; )
          if (s[g] === m)
            continue e;
        t && s.push(m), u.push(d);
      } else
        o(s, m, r) || (s !== u && s.push(m), u.push(d));
    }
  return u;
}
var iy = ly, sy = iy;
function uy(e) {
  return e && e.length ? sy(e) : [];
}
var cy = uy;
const dy = /* @__PURE__ */ hn(cy);
function py(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var fy = py, my = jo, gy = Ji;
function hy(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l], s = n ? n(r[u], e[u], u, r, e) : void 0;
    s === void 0 && (s = e[u]), o ? gy(r, u, s) : my(r, u, s);
  }
  return r;
}
var Pn = hy, by = Pn, yy = as;
function vy(e, t) {
  return e && by(t, yy(t), e);
}
var Ey = vy, xy = Pn, Ay = Ho;
function wy(e, t) {
  return e && xy(t, Ay(t), e);
}
var Sy = wy, gn = { exports: {} };
gn.exports;
(function(e, t) {
  var r = m0, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, l = o && o.exports === n, i = l ? r.Buffer : void 0, u = i ? i.allocUnsafe : void 0;
  function s(c, d) {
    if (d)
      return c.slice();
    var m = c.length, g = u ? u(m) : new c.constructor(m);
    return c.copy(g), g;
  }
  e.exports = s;
})(gn, gn.exports);
var Cy = gn.exports;
function ky(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var _y = ky, Ty = Pn, Oy = ts;
function Ry(e, t) {
  return Ty(e, Oy(e), t);
}
var Fy = Ry, Dy = Pn, Ly = tc;
function $y(e, t) {
  return Dy(e, Ly(e), t);
}
var My = $y, By = Object.prototype, Iy = By.hasOwnProperty;
function Py(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Iy.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Ny = Py, mi = R0;
function jy(e) {
  var t = new e.constructor(e.byteLength);
  return new mi(t).set(new mi(e)), t;
}
var zo = jy, Hy = zo;
function Zy(e, t) {
  var r = t ? Hy(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Vy = Zy, zy = /\w*$/;
function qy(e) {
  var t = new e.constructor(e.source, zy.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Uy = qy, gi = g0, hi = gi ? gi.prototype : void 0, bi = hi ? hi.valueOf : void 0;
function Wy(e) {
  return bi ? Object(bi.call(e)) : {};
}
var Gy = Wy, Yy = zo;
function Ky(e, t) {
  var r = t ? Yy(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Xy = Ky, Jy = zo, Qy = Vy, ev = Uy, tv = Gy, rv = Xy, nv = "[object Boolean]", av = "[object Date]", ov = "[object Map]", lv = "[object Number]", iv = "[object RegExp]", sv = "[object Set]", uv = "[object String]", cv = "[object Symbol]", dv = "[object ArrayBuffer]", pv = "[object DataView]", fv = "[object Float32Array]", mv = "[object Float64Array]", gv = "[object Int8Array]", hv = "[object Int16Array]", bv = "[object Int32Array]", yv = "[object Uint8Array]", vv = "[object Uint8ClampedArray]", Ev = "[object Uint16Array]", xv = "[object Uint32Array]";
function Av(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case dv:
      return Jy(e);
    case nv:
    case av:
      return new n(+e);
    case pv:
      return Qy(e, r);
    case fv:
    case mv:
    case gv:
    case hv:
    case bv:
    case yv:
    case vv:
    case Ev:
    case xv:
      return rv(e, r);
    case ov:
      return new n();
    case lv:
    case uv:
      return new n(e);
    case iv:
      return ev(e);
    case sv:
      return new n();
    case cv:
      return tv(e);
  }
}
var wv = Av, Sv = bn, yi = Object.create, Cv = function() {
  function e() {
  }
  return function(t) {
    if (!Sv(t))
      return {};
    if (yi)
      return yi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), kv = Cv, _v = kv, Tv = es, Ov = rs;
function Rv(e) {
  return typeof e.constructor == "function" && !Ov(e) ? _v(Tv(e)) : {};
}
var Fv = Rv, Dv = Ja, Lv = is, $v = "[object Map]";
function Mv(e) {
  return Lv(e) && Dv(e) == $v;
}
var Bv = Mv, Iv = Bv, Pv = ls, Ei = os, xi = Ei && Ei.isMap, Nv = xi ? Pv(xi) : Iv, jv = Nv, Hv = Ja, Zv = is, Vv = "[object Set]";
function zv(e) {
  return Zv(e) && Hv(e) == Vv;
}
var qv = zv, Uv = qv, Wv = ls, Ai = os, wi = Ai && Ai.isSet, Gv = wi ? Wv(wi) : Uv, Yv = Gv, Kv = F0, Xv = fy, Jv = jo, Qv = Ey, e3 = Sy, t3 = Cy, r3 = _y, n3 = Fy, a3 = My, o3 = L0, l3 = rc, i3 = Ja, s3 = Ny, u3 = wv, c3 = Fv, d3 = $0, p3 = D0, f3 = jv, m3 = bn, g3 = Yv, h3 = as, b3 = Ho, y3 = 1, v3 = 2, E3 = 4, wc = "[object Arguments]", x3 = "[object Array]", A3 = "[object Boolean]", w3 = "[object Date]", S3 = "[object Error]", Sc = "[object Function]", C3 = "[object GeneratorFunction]", k3 = "[object Map]", _3 = "[object Number]", Cc = "[object Object]", T3 = "[object RegExp]", O3 = "[object Set]", R3 = "[object String]", F3 = "[object Symbol]", D3 = "[object WeakMap]", L3 = "[object ArrayBuffer]", $3 = "[object DataView]", M3 = "[object Float32Array]", B3 = "[object Float64Array]", I3 = "[object Int8Array]", P3 = "[object Int16Array]", N3 = "[object Int32Array]", j3 = "[object Uint8Array]", H3 = "[object Uint8ClampedArray]", Z3 = "[object Uint16Array]", V3 = "[object Uint32Array]", Q = {};
Q[wc] = Q[x3] = Q[L3] = Q[$3] = Q[A3] = Q[w3] = Q[M3] = Q[B3] = Q[I3] = Q[P3] = Q[N3] = Q[k3] = Q[_3] = Q[Cc] = Q[T3] = Q[O3] = Q[R3] = Q[F3] = Q[j3] = Q[H3] = Q[Z3] = Q[V3] = !0;
Q[S3] = Q[Sc] = Q[D3] = !1;
function ln(e, t, r, n, o, l) {
  var i, u = t & y3, s = t & v3, c = t & E3;
  if (r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)
    return i;
  if (!m3(e))
    return e;
  var d = d3(e);
  if (d) {
    if (i = s3(e), !u)
      return r3(e, i);
  } else {
    var m = i3(e), g = m == Sc || m == C3;
    if (p3(e))
      return t3(e, u);
    if (m == Cc || m == wc || g && !o) {
      if (i = s || g ? {} : c3(e), !u)
        return s ? a3(e, e3(i, e)) : n3(e, Qv(i, e));
    } else {
      if (!Q[m])
        return o ? e : {};
      i = u3(e, m, u);
    }
  }
  l || (l = new Kv());
  var p = l.get(e);
  if (p)
    return p;
  l.set(e, i), g3(e) ? e.forEach(function(x) {
    i.add(ln(x, t, r, x, e, l));
  }) : f3(e) && e.forEach(function(x, y) {
    i.set(y, ln(x, t, r, y, e, l));
  });
  var h = c ? s ? l3 : o3 : s ? b3 : h3, f = d ? void 0 : h(e);
  return Xv(f || e, function(x, y) {
    f && (y = x, x = e[y]), Jv(i, y, ln(x, t, r, y, e, l));
  }), i;
}
var z3 = ln, q3 = z3, U3 = 1, W3 = 4;
function G3(e) {
  return q3(e, U3 | W3);
}
var Y3 = G3;
const K3 = /* @__PURE__ */ hn(Y3);
var X3 = Object.create, kc = Object.defineProperty, J3 = Object.getOwnPropertyDescriptor, _c = Object.getOwnPropertyNames, Q3 = Object.getPrototypeOf, e7 = Object.prototype.hasOwnProperty, Ie = (e, t) => function() {
  return t || (0, e[_c(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, t7 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of _c(t))
      !e7.call(e, o) && o !== r && kc(e, o, { get: () => t[o], enumerable: !(n = J3(t, o)) || n.enumerable });
  return e;
}, qo = (e, t, r) => (r = e != null ? X3(Q3(e)) : {}, t7(
  t || !e || !e.__esModule ? kc(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), r7 = [
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
], n7 = ["detail"];
function a7(e) {
  const t = r7.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return e instanceof CustomEvent && n7.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
var Tc = Ie({
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
}), Oc = Ie({
  "node_modules/has-symbols/index.js"(e, t) {
    var r = typeof Symbol < "u" && Symbol, n = Tc();
    t.exports = function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
    };
  }
}), o7 = Ie({
  "node_modules/function-bind/implementation.js"(e, t) {
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, l = "[object Function]";
    t.exports = function(u) {
      var s = this;
      if (typeof s != "function" || o.call(s) !== l)
        throw new TypeError(r + s);
      for (var c = n.call(arguments, 1), d, m = function() {
        if (this instanceof d) {
          var x = s.apply(
            this,
            c.concat(n.call(arguments))
          );
          return Object(x) === x ? x : this;
        } else
          return s.apply(
            u,
            c.concat(n.call(arguments))
          );
      }, g = Math.max(0, s.length - c.length), p = [], h = 0; h < g; h++)
        p.push("$" + h);
      if (d = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(m), s.prototype) {
        var f = function() {
        };
        f.prototype = s.prototype, d.prototype = new f(), f.prototype = null;
      }
      return d;
    };
  }
}), Uo = Ie({
  "node_modules/function-bind/index.js"(e, t) {
    var r = o7();
    t.exports = Function.prototype.bind || r;
  }
}), l7 = Ie({
  "node_modules/has/src/index.js"(e, t) {
    var r = Uo();
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), Rc = Ie({
  "node_modules/get-intrinsic/index.js"(e, t) {
    var r, n = SyntaxError, o = Function, l = TypeError, i = function(D) {
      try {
        return o('"use strict"; return (' + D + ").constructor;")();
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
    }() : s, d = Oc()(), m = Object.getPrototypeOf || function(D) {
      return D.__proto__;
    }, g = {}, p = typeof Uint8Array > "u" ? r : m(Uint8Array), h = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": d ? m([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": g,
      "%AsyncGenerator%": g,
      "%AsyncGeneratorFunction%": g,
      "%AsyncIteratorPrototype%": g,
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
      "%GeneratorFunction%": g,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": d ? m(m([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !d ? r : m((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
      "%SetIteratorPrototype%": typeof Set > "u" || !d ? r : m((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": d ? m(""[Symbol.iterator]()) : r,
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
    }, f = function D(F) {
      var P;
      if (F === "%AsyncFunction%")
        P = i("async function () {}");
      else if (F === "%GeneratorFunction%")
        P = i("function* () {}");
      else if (F === "%AsyncGeneratorFunction%")
        P = i("async function* () {}");
      else if (F === "%AsyncGenerator%") {
        var L = D("%AsyncGeneratorFunction%");
        L && (P = L.prototype);
      } else if (F === "%AsyncIteratorPrototype%") {
        var $ = D("%AsyncGenerator%");
        $ && (P = m($.prototype));
      }
      return h[F] = P, P;
    }, x = {
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
    }, y = Uo(), A = l7(), v = y.call(Function.call, Array.prototype.concat), E = y.call(Function.apply, Array.prototype.splice), w = y.call(Function.call, String.prototype.replace), S = y.call(Function.call, String.prototype.slice), k = y.call(Function.call, RegExp.prototype.exec), C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, T = /\\(\\)?/g, O = function(F) {
      var P = S(F, 0, 1), L = S(F, -1);
      if (P === "%" && L !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (L === "%" && P !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var $ = [];
      return w(F, C, function(N, Z, B, j) {
        $[$.length] = B ? w(j, T, "$1") : Z || N;
      }), $;
    }, R = function(F, P) {
      var L = F, $;
      if (A(x, L) && ($ = x[L], L = "%" + $[0] + "%"), A(h, L)) {
        var N = h[L];
        if (N === g && (N = f(L)), typeof N > "u" && !P)
          throw new l("intrinsic " + F + " exists, but is not available. Please file an issue!");
        return {
          alias: $,
          name: L,
          value: N
        };
      }
      throw new n("intrinsic " + F + " does not exist!");
    };
    t.exports = function(F, P) {
      if (typeof F != "string" || F.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof P != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (k(/^%?[^%]*%?$/, F) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var L = O(F), $ = L.length > 0 ? L[0] : "", N = R("%" + $ + "%", P), Z = N.name, B = N.value, j = !1, X = N.alias;
      X && ($ = X[0], E(L, v([0, 1], X)));
      for (var ne = 1, Y = !0; ne < L.length; ne += 1) {
        var J = L[ne], I = S(J, 0, 1), V = S(J, -1);
        if ((I === '"' || I === "'" || I === "`" || V === '"' || V === "'" || V === "`") && I !== V)
          throw new n("property names with quotes must have matching quotes");
        if ((J === "constructor" || !Y) && (j = !0), $ += "." + J, Z = "%" + $ + "%", A(h, Z))
          B = h[Z];
        else if (B != null) {
          if (!(J in B)) {
            if (!P)
              throw new l("base intrinsic for " + F + " exists, but the property is not available.");
            return;
          }
          if (u && ne + 1 >= L.length) {
            var U = u(B, J);
            Y = !!U, Y && "get" in U && !("originalValue" in U.get) ? B = U.get : B = B[J];
          } else
            Y = A(B, J), B = B[J];
          Y && !j && (h[Z] = B);
        }
      }
      return B;
    };
  }
}), i7 = Ie({
  "node_modules/call-bind/index.js"(e, t) {
    var r = Uo(), n = Rc(), o = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || r.call(l, o), u = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch {
        s = null;
      }
    t.exports = function(g) {
      var p = i(r, l, arguments);
      if (u && s) {
        var h = u(p, "length");
        h.configurable && s(
          p,
          "length",
          { value: 1 + c(0, g.length - (arguments.length - 1)) }
        );
      }
      return p;
    };
    var d = function() {
      return i(r, o, arguments);
    };
    s ? s(t.exports, "apply", { value: d }) : t.exports.apply = d;
  }
}), s7 = Ie({
  "node_modules/call-bind/callBound.js"(e, t) {
    var r = Rc(), n = i7(), o = n(r("String.prototype.indexOf"));
    t.exports = function(i, u) {
      var s = r(i, !!u);
      return typeof s == "function" && o(i, ".prototype.") > -1 ? n(s) : s;
    };
  }
}), u7 = Ie({
  "node_modules/has-tostringtag/shams.js"(e, t) {
    var r = Tc();
    t.exports = function() {
      return r() && !!Symbol.toStringTag;
    };
  }
}), c7 = Ie({
  "node_modules/is-regex/index.js"(e, t) {
    var r = s7(), n = u7()(), o, l, i, u;
    n && (o = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), i = {}, s = function() {
      throw i;
    }, u = {
      toString: s,
      valueOf: s
    }, typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
    var s, c = r("Object.prototype.toString"), d = Object.getOwnPropertyDescriptor, m = "[object RegExp]";
    t.exports = n ? function(p) {
      if (!p || typeof p != "object")
        return !1;
      var h = d(p, "lastIndex"), f = h && o(h, "value");
      if (!f)
        return !1;
      try {
        l(p, u);
      } catch (x) {
        return x === i;
      }
    } : function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : c(p) === m;
    };
  }
}), d7 = Ie({
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
}), p7 = Ie({
  "node_modules/is-symbol/index.js"(e, t) {
    var r = Object.prototype.toString, n = Oc()();
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
}), f7 = qo(c7()), m7 = qo(d7()), g7 = qo(p7());
function h7(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var b7 = typeof global == "object" && global && global.Object === Object && global, y7 = b7, v7 = typeof self == "object" && self && self.Object === Object && self, E7 = y7 || v7 || Function("return this")(), Wo = E7, x7 = Wo.Symbol, rr = x7, Fc = Object.prototype, A7 = Fc.hasOwnProperty, w7 = Fc.toString, hr = rr ? rr.toStringTag : void 0;
function S7(e) {
  var t = A7.call(e, hr), r = e[hr];
  try {
    e[hr] = void 0;
    var n = !0;
  } catch {
  }
  var o = w7.call(e);
  return n && (t ? e[hr] = r : delete e[hr]), o;
}
var C7 = S7, k7 = Object.prototype, _7 = k7.toString;
function T7(e) {
  return _7.call(e);
}
var O7 = T7, R7 = "[object Null]", F7 = "[object Undefined]", Si = rr ? rr.toStringTag : void 0;
function D7(e) {
  return e == null ? e === void 0 ? F7 : R7 : Si && Si in Object(e) ? C7(e) : O7(e);
}
var L7 = D7, Ci = rr ? rr.prototype : void 0;
Ci && Ci.toString;
function $7(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dc = $7, M7 = "[object AsyncFunction]", B7 = "[object Function]", I7 = "[object GeneratorFunction]", P7 = "[object Proxy]";
function N7(e) {
  if (!Dc(e))
    return !1;
  var t = L7(e);
  return t == B7 || t == I7 || t == M7 || t == P7;
}
var j7 = N7, H7 = Wo["__core-js_shared__"], pa = H7, ki = function() {
  var e = /[^.]+$/.exec(pa && pa.keys && pa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Z7(e) {
  return !!ki && ki in e;
}
var V7 = Z7, z7 = Function.prototype, q7 = z7.toString;
function U7(e) {
  if (e != null) {
    try {
      return q7.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var W7 = U7, G7 = /[\\^$.*+?()[\]{}|]/g, Y7 = /^\[object .+?Constructor\]$/, K7 = Function.prototype, X7 = Object.prototype, J7 = K7.toString, Q7 = X7.hasOwnProperty, e4 = RegExp(
  "^" + J7.call(Q7).replace(G7, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function t4(e) {
  if (!Dc(e) || V7(e))
    return !1;
  var t = j7(e) ? e4 : Y7;
  return t.test(W7(e));
}
var r4 = t4;
function n4(e, t) {
  return e == null ? void 0 : e[t];
}
var a4 = n4;
function o4(e, t) {
  var r = a4(e, t);
  return r4(r) ? r : void 0;
}
var Lc = o4;
function l4(e, t) {
  return e === t || e !== e && t !== t;
}
var i4 = l4, s4 = Lc(Object, "create"), Fr = s4;
function u4() {
  this.__data__ = Fr ? Fr(null) : {}, this.size = 0;
}
var c4 = u4;
function d4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var p4 = d4, f4 = "__lodash_hash_undefined__", m4 = Object.prototype, g4 = m4.hasOwnProperty;
function h4(e) {
  var t = this.__data__;
  if (Fr) {
    var r = t[e];
    return r === f4 ? void 0 : r;
  }
  return g4.call(t, e) ? t[e] : void 0;
}
var b4 = h4, y4 = Object.prototype, v4 = y4.hasOwnProperty;
function E4(e) {
  var t = this.__data__;
  return Fr ? t[e] !== void 0 : v4.call(t, e);
}
var x4 = E4, A4 = "__lodash_hash_undefined__";
function w4(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Fr && t === void 0 ? A4 : t, this;
}
var S4 = w4;
function lr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
lr.prototype.clear = c4;
lr.prototype.delete = p4;
lr.prototype.get = b4;
lr.prototype.has = x4;
lr.prototype.set = S4;
var _i = lr;
function C4() {
  this.__data__ = [], this.size = 0;
}
var k4 = C4;
function _4(e, t) {
  for (var r = e.length; r--; )
    if (i4(e[r][0], t))
      return r;
  return -1;
}
var Nn = _4, T4 = Array.prototype, O4 = T4.splice;
function R4(e) {
  var t = this.__data__, r = Nn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : O4.call(t, r, 1), --this.size, !0;
}
var F4 = R4;
function D4(e) {
  var t = this.__data__, r = Nn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var L4 = D4;
function $4(e) {
  return Nn(this.__data__, e) > -1;
}
var M4 = $4;
function B4(e, t) {
  var r = this.__data__, n = Nn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var I4 = B4;
function ir(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ir.prototype.clear = k4;
ir.prototype.delete = F4;
ir.prototype.get = L4;
ir.prototype.has = M4;
ir.prototype.set = I4;
var P4 = ir, N4 = Lc(Wo, "Map"), j4 = N4;
function H4() {
  this.size = 0, this.__data__ = {
    hash: new _i(),
    map: new (j4 || P4)(),
    string: new _i()
  };
}
var Z4 = H4;
function V4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var z4 = V4;
function q4(e, t) {
  var r = e.__data__;
  return z4(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var jn = q4;
function U4(e) {
  var t = jn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var W4 = U4;
function G4(e) {
  return jn(this, e).get(e);
}
var Y4 = G4;
function K4(e) {
  return jn(this, e).has(e);
}
var X4 = K4;
function J4(e, t) {
  var r = jn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Q4 = J4;
function sr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
sr.prototype.clear = Z4;
sr.prototype.delete = W4;
sr.prototype.get = Y4;
sr.prototype.has = X4;
sr.prototype.set = Q4;
var $c = sr, eE = "Expected a function";
function Go(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(eE);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], l = r.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, n);
    return r.cache = l.set(o, i) || l, i;
  };
  return r.cache = new (Go.Cache || $c)(), r;
}
Go.Cache = $c;
var tE = Go, rE = 500;
function nE(e) {
  var t = tE(e, function(n) {
    return r.size === rE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var aE = nE, oE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lE = /\\(\\)?/g;
aE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(oE, function(r, n, o, l) {
    t.push(o ? l.replace(lE, "$1") : n || r);
  }), t;
});
var iE = h7, sE = (e) => {
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
}, uE = Mt(1e4)(
  (e) => sE(e).replace(/\n\s*/g, "").trim()
), cE = function(t, r) {
  const n = r.slice(0, r.indexOf("{")), o = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(t, "function"), l + o;
}, dE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function Mc(e) {
  if (!iE(e))
    return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = a7(t), r = !0), t = Object.keys(t).reduce((n, o) => {
    try {
      t[o] && t[o].toJSON, n[o] = t[o];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? t : e;
}
var pE = function(t) {
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
        return dE.test(s) ? t.allowDate ? `_date_${s}` : void 0 : s;
      if ((0, f7.default)(s))
        return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
      if ((0, m7.default)(s)) {
        if (!t.allowFunction)
          return;
        const { name: m } = s, g = s.toString();
        return g.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${m}|${(() => {
        }).toString()}` : `_function_${m}|${uE(cE(u, g))}`;
      }
      if ((0, g7.default)(s)) {
        if (!t.allowSymbol)
          return;
        const m = Symbol.keyFor(s);
        return m !== void 0 ? `_gsymbol_${m}` : `_symbol_${s.toString().slice(7, -1)}`;
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
        const m = Array.isArray(s) ? s : Mc(s);
        if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && t.allowClass)
          try {
            Object.assign(m, { "_constructor-name_": s.constructor.name });
          } catch {
          }
        return l.push(u), o.unshift(m), r.set(s, JSON.stringify(l)), s !== m && n.set(s, m), m;
      }
      return `_duplicate_${d}`;
    } catch {
      return;
    }
  };
}, fE = {
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
}, mE = (e, t = {}) => {
  const r = { ...fE, ...t };
  return JSON.stringify(Mc(e), pE(r), t.space);
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
var Bc = { exports: {} }, fa, Ti;
function gE() {
  return Ti || (Ti = 1, fa = {
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
  }), fa;
}
var ma, Oi;
function hE() {
  return Oi || (Oi = 1, ma = function(e) {
    var t = [].forEach, r = [].some, n = document.body, o, l = !0, i = " ";
    function u(y, A) {
      var v = A.appendChild(c(y));
      if (y.children.length) {
        var E = d(y.isCollapsed);
        y.children.forEach(function(w) {
          u(w, E);
        }), v.appendChild(E);
      }
    }
    function s(y, A) {
      var v = !1, E = d(v);
      if (A.forEach(function(w) {
        u(w, E);
      }), o = y || o, o !== null)
        return o.firstChild && o.removeChild(o.firstChild), A.length === 0 ? o : o.appendChild(E);
    }
    function c(y) {
      var A = document.createElement("li"), v = document.createElement("a");
      return e.listItemClass && A.setAttribute("class", e.listItemClass), e.onClick && (v.onclick = e.onClick), e.includeTitleTags && v.setAttribute("title", y.textContent), e.includeHtml && y.childNodes.length ? t.call(y.childNodes, function(E) {
        v.appendChild(E.cloneNode(!0));
      }) : v.textContent = y.textContent, v.setAttribute("href", e.basePath + "#" + y.id), v.setAttribute("class", e.linkClass + i + "node-name--" + y.nodeName + i + e.extraLinkClasses), A.appendChild(v), A;
    }
    function d(y) {
      var A = e.orderedList ? "ol" : "ul", v = document.createElement(A), E = e.listClass + i + e.extraListClasses;
      return y && (E = E + i + e.collapsibleClass, E = E + i + e.isCollapsedClass), v.setAttribute("class", E), v;
    }
    function m() {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var y;
        y = document.querySelector(e.scrollContainer).scrollTop;
      } else
        y = document.documentElement.scrollTop || n.scrollTop;
      var A = document.querySelector(e.positionFixedSelector);
      e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = o.offsetTop), y > e.fixedSidebarOffset ? A.className.indexOf(e.positionFixedClass) === -1 && (A.className += i + e.positionFixedClass) : A.className = A.className.split(i + e.positionFixedClass).join("");
    }
    function g(y) {
      var A = 0;
      return y !== null && (A = y.offsetTop, e.hasInnerContainers && (A += g(y.offsetParent))), A;
    }
    function p(y) {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var A;
        A = document.querySelector(e.scrollContainer).scrollTop;
      } else
        A = document.documentElement.scrollTop || n.scrollTop;
      e.positionFixedSelector && m();
      var v = y, E;
      if (l && o !== null && v.length > 0) {
        r.call(v, function(R, D) {
          if (g(R) > A + e.headingsOffset + 10) {
            var F = D === 0 ? D : D - 1;
            return E = v[F], !0;
          } else if (D === v.length - 1)
            return E = v[v.length - 1], !0;
        });
        var w = o.querySelector("." + e.activeLinkClass), S = o.querySelector("." + e.linkClass + ".node-name--" + E.nodeName + '[href="' + e.basePath + "#" + E.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (w === S)
          return;
        var k = o.querySelectorAll("." + e.linkClass);
        t.call(k, function(R) {
          R.className = R.className.split(i + e.activeLinkClass).join("");
        });
        var C = o.querySelectorAll("." + e.listItemClass);
        t.call(C, function(R) {
          R.className = R.className.split(i + e.activeListItemClass).join("");
        }), S && S.className.indexOf(e.activeLinkClass) === -1 && (S.className += i + e.activeLinkClass);
        var T = S && S.parentNode;
        T && T.className.indexOf(e.activeListItemClass) === -1 && (T.className += i + e.activeListItemClass);
        var O = o.querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
        t.call(O, function(R) {
          R.className.indexOf(e.isCollapsedClass) === -1 && (R.className += i + e.isCollapsedClass);
        }), S && S.nextSibling && S.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 && (S.nextSibling.className = S.nextSibling.className.split(i + e.isCollapsedClass).join("")), h(S && S.parentNode.parentNode);
      }
    }
    function h(y) {
      return y && y.className.indexOf(e.collapsibleClass) !== -1 && y.className.indexOf(e.isCollapsedClass) !== -1 ? (y.className = y.className.split(i + e.isCollapsedClass).join(""), h(y.parentNode.parentNode)) : y;
    }
    function f(y) {
      var A = y.target || y.srcElement;
      typeof A.className != "string" || A.className.indexOf(e.linkClass) === -1 || (l = !1);
    }
    function x() {
      l = !0;
    }
    return {
      enableTocAnimation: x,
      disableTocAnimation: f,
      render: s,
      updateToc: p
    };
  }), ma;
}
var ga, Ri;
function bE() {
  return Ri || (Ri = 1, ga = function(t) {
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
      const m = d.getAttribute("data-heading-label") || (t.headingLabelCallback ? String(t.headingLabelCallback(d.textContent)) : d.textContent.trim());
      var g = {
        id: d.id,
        children: [],
        nodeName: d.nodeName,
        headingLevel: o(d),
        textContent: m
      };
      return t.includeHtml && (g.childNodes = d.childNodes), t.headingObjectCallback ? t.headingObjectCallback(g, d) : g;
    }
    function u(d, m) {
      for (var g = i(d), p = g.headingLevel, h = m, f = n(h), x = f ? f.headingLevel : 0, y = p - x; y > 0 && (f = n(h), !(f && p === f.headingLevel)); )
        f && f.children !== void 0 && (h = f.children), y--;
      return p >= t.collapseDepth && (g.isCollapsed = !0), h.push(g), h;
    }
    function s(d, m) {
      var g = m;
      t.ignoreSelector && (g = m.split(",").map(function(h) {
        return h.trim() + ":not(" + t.ignoreSelector + ")";
      }));
      try {
        return d.querySelectorAll(g);
      } catch {
        return console.warn("Headers not found with selector: " + g), null;
      }
    }
    function c(d) {
      return r.call(d, function(g, p) {
        var h = i(p);
        return h && u(h, g.nest), g;
      }, {
        nest: []
      });
    }
    return {
      nestHeadingsArray: c,
      selectHeadings: s
    };
  }), ga;
}
var ha, Fi;
function yE() {
  return Fi || (Fi = 1, ha = function(t) {
    var r = t.tocElement || document.querySelector(t.tocSelector);
    if (r && r.scrollHeight > r.clientHeight) {
      var n = r.querySelector("." + t.activeListItemClass);
      n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
    }
  }), ha;
}
var ba = {}, Di;
function vE() {
  if (Di)
    return ba;
  Di = 1, ba.initSmoothScrolling = e;
  function e(r) {
    var n = r.duration, o = r.offset, l = location.hash ? s(location.href) : location.href;
    i();
    function i() {
      document.body.addEventListener("click", d, !1);
      function d(m) {
        !u(m.target) || m.target.className.indexOf("no-smooth-scroll") > -1 || m.target.href.charAt(m.target.href.length - 2) === "#" && m.target.href.charAt(m.target.href.length - 1) === "!" || m.target.className.indexOf(r.linkClass) === -1 || t(m.target.hash, {
          duration: n,
          offset: o,
          callback: function() {
            c(m.target.hash);
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
      var m = document.getElementById(d.substring(1));
      m && (/^(?:a|select|input|button|textarea)$/i.test(m.tagName) || (m.tabIndex = -1), m.focus());
    }
  }
  function t(r, n) {
    var o = window.pageYOffset, l = {
      duration: n.duration,
      offset: n.offset || 0,
      callback: n.callback,
      easing: n.easing || p
    }, i = document.querySelector('[id="' + decodeURI(r).split("#").join("") + '"]') || document.querySelector('[id="' + r.split("#").join("") + '"]'), u = typeof r == "string" ? l.offset + (r ? i && i.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : r, s = typeof l.duration == "function" ? l.duration(u) : l.duration, c, d;
    requestAnimationFrame(function(h) {
      c = h, m(h);
    });
    function m(h) {
      d = h - c, window.scrollTo(0, l.easing(d, o, u, s)), d < s ? requestAnimationFrame(m) : g();
    }
    function g() {
      window.scrollTo(0, o + u), typeof l.callback == "function" && l.callback();
    }
    function p(h, f, x, y) {
      return h /= y / 2, h < 1 ? x / 2 * h * h + f : (h--, -x / 2 * (h * (h - 2) - 1) + f);
    }
  }
  return ba;
}
(function(e, t) {
  (function(r, n) {
    e.exports = n(r);
  })(typeof Un < "u" ? Un : window || Un, function(r) {
    var n = gE(), o = {}, l = {}, i = hE(), u = bE(), s = yE(), c, d, m = !!r && !!r.document && !!r.document.querySelector && !!r.addEventListener;
    if (typeof window > "u" && !m)
      return;
    var g, p = Object.prototype.hasOwnProperty;
    function h() {
      for (var A = {}, v = 0; v < arguments.length; v++) {
        var E = arguments[v];
        for (var w in E)
          p.call(E, w) && (A[w] = E[w]);
      }
      return A;
    }
    function f(A, v, E) {
      v || (v = 250);
      var w, S;
      return function() {
        var k = E || this, C = +/* @__PURE__ */ new Date(), T = arguments;
        w && C < w + v ? (clearTimeout(S), S = setTimeout(function() {
          w = C, A.apply(k, T);
        }, v)) : (w = C, A.apply(k, T));
      };
    }
    function x(A) {
      try {
        return A.contentElement || document.querySelector(A.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + A.contentSelector), null;
      }
    }
    function y(A) {
      try {
        return A.tocElement || document.querySelector(A.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + A.tocSelector), null;
      }
    }
    return l.destroy = function() {
      var A = y(o);
      A !== null && (o.skipRendering || A && (A.innerHTML = ""), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).removeEventListener("resize", this._scrollListener, !1), c && document.querySelector(o.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), c && document.removeEventListener("click", this._clickListener, !1)));
    }, l.init = function(A) {
      if (m) {
        o = h(n, A || {}), this.options = o, this.state = {}, o.scrollSmooth && (o.duration = o.scrollSmoothDuration, o.offset = o.scrollSmoothOffset, l.scrollSmooth = vE().initSmoothScrolling(o)), c = i(o), d = u(o), this._buildHtml = c, this._parseContent = d, this._headingsArray = g, l.destroy();
        var v = x(o);
        if (v !== null) {
          var E = y(o);
          if (E !== null && (g = d.selectHeadings(v, o.headingSelector), g !== null)) {
            var w = d.nestHeadingsArray(g), S = w.nest;
            if (!o.skipRendering)
              c.render(E, S);
            else
              return this;
            this._scrollListener = f(function(C) {
              c.updateToc(g), !o.disableTocScrollSync && s(o);
              var T = C && C.target && C.target.scrollingElement && C.target.scrollingElement.scrollTop === 0;
              (C && (C.eventPhase === 0 || C.currentTarget === null) || T) && (c.updateToc(g), o.scrollEndCallback && o.scrollEndCallback(C));
            }, o.throttleTimeout), this._scrollListener(), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var k = null;
            return this._clickListener = f(function(C) {
              o.scrollSmooth && c.disableTocAnimation(C), c.updateToc(g), k && clearTimeout(k), k = setTimeout(function() {
                c.enableTocAnimation();
              }, o.scrollSmoothDuration);
            }, o.throttleTimeout), o.scrollContainer && document.querySelector(o.scrollContainer) ? document.querySelector(o.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, l.refresh = function(A) {
      l.destroy(), l.init(A || this.options);
    }, r.tocbot = l, l;
  });
})(Bc);
var Li = Bc.exports;
const { global: De } = __STORYBOOK_MODULE_GLOBAL__, { deprecate: pe, once: EE, logger: Yo } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: xE, composeConfigs: G8, Preview: Y8, DocsContext: K8 } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: $i, UPDATE_STORY_ARGS: AE, RESET_STORY_ARGS: wE, GLOBALS_UPDATED: Mi, NAVIGATE_URL: SE } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var CE = _.div(re, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: te(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), Ic = (e) => a.createElement(CE, { ...e, className: "docblock-emptyblock sb-unstyled" }), kE = _(Rn)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), _E = _.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), Gr = _.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${ka}`]: { margin: 0 } })), TE = () => a.createElement(_E, null, a.createElement(Gr, null), a.createElement(Gr, { style: { width: "80%" } }), a.createElement(Gr, { style: { width: "30%" } }), a.createElement(Gr, { style: { width: "80%" } })), Ko = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: l, ...i }) => {
  if (e)
    return a.createElement(TE, null);
  if (t)
    return a.createElement(Ic, null, t);
  let u = a.createElement(kE, { bordered: !0, copyable: !0, format: l, language: r, className: "docblock-source sb-unstyled", ...i }, n);
  if (typeof o > "u")
    return u;
  let s = o ? xa.dark : xa.light;
  return a.createElement(As, { theme: Ca(s) }, u);
};
Ko.defaultProps = { format: !1 };
var le = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, Xo = 600, OE = _.h1(re, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${Xo}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), RE = _.h2(re, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${Xo}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: te(0.25, e.color.defaultText) })), FE = _.div(({ theme: e }) => {
  let t = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, r = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, n = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [le("a")]: { ...t, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [le("blockquote")]: { ...t, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [le("div")]: t, [le("dl")]: { ...t, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [le("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [le("h2")]: { ...t, ...r, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [le("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [le("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` }, [le("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` }, [le("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [le("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [le("img")]: { maxWidth: "100%" }, [le("li")]: { ...t, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": n }, [le("ol")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [le("p")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": n }, [le("pre")]: { ...t, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [le("span")]: { ...t, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [le("table")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [le("ul")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), DE = _.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${Xo}px)`]: {} })), LE = ({ children: e, toc: t }) => a.createElement(DE, { className: "sbdocs sbdocs-wrapper" }, a.createElement(FE, { className: "sbdocs sbdocs-content" }, e), t), Hn = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), $E = ({ zoom: e, resetZoom: t }) => a.createElement(a.Fragment, null, a.createElement(Lt, { key: "zoomin", onClick: (r) => {
  r.preventDefault(), e(0.8);
}, title: "Zoom in" }, a.createElement(ve, { icon: "zoom" })), a.createElement(Lt, { key: "zoomout", onClick: (r) => {
  r.preventDefault(), e(1.25);
}, title: "Zoom out" }, a.createElement(ve, { icon: "zoomout" })), a.createElement(Lt, { key: "zoomreset", onClick: (r) => {
  r.preventDefault(), t();
}, title: "Reset zoom" }, a.createElement(ve, { icon: "zoomreset" }))), ME = _(Ln)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), BE = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l }) => a.createElement(ME, { ...l }, a.createElement(b.Fragment, { key: "left" }, e ? [1, 2, 3].map((i) => a.createElement(Uu, { key: i })) : a.createElement($E, { zoom: n, resetZoom: o }))), Pc = b.createContext({ scale: 1 }), { window: IE } = De, PE = class extends b.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = IE.document.getElementById(e);
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
}, { PREVIEW_URL: NE } = De, jE = NE || "iframe.html", za = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`, HE = (e) => {
  let t = b.useRef(), [r, n] = b.useState(!0), [o, l] = b.useState(), { story: i, height: u, autoplay: s, forceInitialArgs: c, renderStoryToElement: d } = e;
  return b.useEffect(() => {
    if (!(i && t.current))
      return () => {
      };
    let m = t.current, g = d(i, m, { showMain: () => {
    }, showError: ({ title: p, description: h }) => l(new Error(`${p} - ${h}`)), showException: (p) => l(p) }, { autoplay: s, forceInitialArgs: c });
    return n(!1), () => {
      Promise.resolve().then(() => g());
    };
  }, [s, d, i]), o ? a.createElement("pre", null, a.createElement(Nu, { error: o })) : a.createElement(a.Fragment, null, u ? a.createElement("style", null, `#${za(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`) : null, r && a.createElement(Jo, null), a.createElement("div", { ref: t, id: `${za(e)}-inner`, "data-name": i.name }));
}, ZE = ({ story: e, height: t = "500px" }) => a.createElement("div", { style: { width: "100%", height: t } }, a.createElement(Pc.Consumer, null, ({ scale: r }) => a.createElement(PE, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: Ku(jE, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: r, style: { width: "100%", height: "100%", border: "0 none" } }))), VE = (e) => {
  let { inline: t } = e;
  return a.createElement("div", { id: za(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, t ? a.createElement(HE, { ...e }) : a.createElement(ZE, { ...e }));
}, Jo = () => a.createElement(Yu, null), zE = _.div(({ isColumn: e, columns: t, layout: r }) => ({ display: e || !t ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), Bi = _(Ko)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ke(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ke(0.05, e.background.content) } })), qE = _.div(({ theme: e, withSource: t, isExpanded: r }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...Hn(e), borderBottomLeftRadius: t && r && 0, borderBottomRightRadius: t && r && 0, borderBottomWidth: r && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), UE = (e, t, r) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => r(!1) } };
    case t:
      return { source: a.createElement(Bi, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => r(!1) } };
    default:
      return { source: a.createElement(Bi, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) } };
  }
};
function WE(e) {
  if (b.Children.count(e) === 1) {
    let t = e;
    if (t.props)
      return t.props.id;
  }
  return null;
}
var GE = _(BE)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), YE = _.div({ overflow: "hidden", position: "relative" }), qa = ({ isLoading: e, isColumn: t, columns: r, children: n, withSource: o, withToolbar: l = !1, isExpanded: i = !1, additionalActions: u, className: s, layout: c = "padded", ...d }) => {
  let [m, g] = b.useState(i), { source: p, actionItem: h } = UE(o, m, g), [f, x] = b.useState(1), y = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), A = o ? [h] : [], [v, E] = b.useState(u ? [...u] : []), w = [...A, ...v], { window: S } = De, k = b.useCallback(async (T) => {
    let { createCopyToClipboardFunction: O } = await Promise.resolve().then(() => rg);
    O();
  }, []), C = (T) => {
    let O = S.getSelection();
    O && O.type === "Range" || (T.preventDefault(), v.filter((R) => R.title === "Copied").length === 0 && k(p.props.code).then(() => {
      E([...v, { title: "Copied", onClick: () => {
      } }]), S.setTimeout(() => E(v.filter((R) => R.title !== "Copied")), 1500);
    }));
  };
  return a.createElement(qE, { withSource: o, withToolbar: l, ...d, className: y.join(" ") }, l && a.createElement(GE, { isLoading: e, border: !0, zoom: (T) => x(f * T), resetZoom: () => x(1), storyId: WE(n), baseUrl: "./iframe.html" }), a.createElement(Pc.Provider, { value: { scale: f } }, a.createElement(YE, { className: "docs-story", onCopyCapture: o && C }, a.createElement(zE, { isColumn: t || !Array.isArray(n), columns: r, layout: c }, a.createElement(Pu.Element, { scale: f }, Array.isArray(n) ? n.map((T, O) => a.createElement("div", { key: O }, T)) : a.createElement("div", null, n))), a.createElement(ho, { actionItems: w }))), o && m && p);
}, KE = _(qa)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), XE = () => a.createElement(KE, { isLoading: !0, withToolbar: !0 }, a.createElement(Jo, null)), JE = _.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: pt({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), QE = ({ tags: e }) => {
  let t = (e.params || []).filter((l) => l.description), r = t.length !== 0, n = e.deprecated != null, o = e.returns != null && e.returns.description != null;
  return !r && !o && !n ? null : a.createElement(a.Fragment, null, a.createElement(JE, null, a.createElement("tbody", null, n && a.createElement("tr", { key: "deprecated" }, a.createElement("td", { colSpan: 2 }, a.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), r && t.map((l) => a.createElement("tr", { key: l.name }, a.createElement("td", null, a.createElement("code", null, l.name)), a.createElement("td", null, l.description))), o && a.createElement("tr", { key: "returns" }, a.createElement("td", null, a.createElement("code", null, "Returns")), a.createElement("td", null, e.returns.description)))));
}, Ua = 8, Ii = _.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), e6 = _.span(pt, ({ theme: e, simple: t = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...t && { background: "transparent", border: "0 none", paddingLeft: 0 } })), t6 = _.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), r6 = _.div(pt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), n6 = _.div(({ theme: e, width: t }) => ({ width: t, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), a6 = _(ve)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), o6 = () => a.createElement("span", null, "-"), Nc = ({ text: e, simple: t }) => a.createElement(e6, { simple: t }, e), l6 = Mt(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
}), i6 = (e) => {
  if (!e)
    return [e];
  let t = e.split("|").map((r) => r.trim());
  return dy(t);
}, Pi = (e, t = !0) => {
  let r = e;
  return t || (r = e.slice(0, Ua)), r.map((n) => a.createElement(Nc, { key: n, text: n === "" ? '""' : n }));
}, s6 = ({ value: e, initialExpandedArgs: t }) => {
  let { summary: r, detail: n } = e, [o, l] = b.useState(!1), [i, u] = b.useState(t || !1);
  if (r == null)
    return null;
  let s = typeof r.toString == "function" ? r.toString() : r;
  if (n == null) {
    if (/[(){}[\]<>]/.test(s))
      return a.createElement(Nc, { text: s });
    let c = i6(s), d = c.length;
    return d > Ua ? a.createElement(Ii, { isExpanded: i }, Pi(c, i), a.createElement(t6, { onClick: () => u(!i) }, i ? "Show less..." : `Show ${d - Ua} more...`)) : a.createElement(Ii, null, Pi(c));
  }
  return a.createElement(zu, { closeOnOutsideClick: !0, placement: "bottom", visible: o, onVisibleChange: (c) => {
    l(c);
  }, tooltip: a.createElement(n6, { width: l6(n) }, a.createElement(Rn, { language: "jsx", format: !1 }, n)) }, a.createElement(r6, { className: "sbdocs-expandable" }, a.createElement("span", null, s), a.createElement(a6, { icon: o ? "arrowup" : "arrowdown" })));
}, ya = ({ value: e, initialExpandedArgs: t }) => e == null ? a.createElement(o6, null) : a.createElement(s6, { value: e, initialExpandedArgs: t }), u6 = _.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: te(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${Wr(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${Wr(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Wr(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${Wr(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), c6 = (e) => e === "true", d6 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o }) => {
  let l = b.useCallback(() => r(!1), [r]);
  if (t === void 0)
    return a.createElement(je.Button, { id: vn(e), onClick: l }, "Set boolean");
  let i = He(e), u = typeof t == "string" ? c6(t) : t;
  return a.createElement(u6, { htmlFor: i, title: u ? "Change to false" : "Change to true" }, a.createElement("input", { id: i, type: "checkbox", onChange: (s) => r(s.target.checked), checked: u, name: e, onBlur: n, onFocus: o }), a.createElement("span", null, "False"), a.createElement("span", null, "True"));
}, p6 = (e) => {
  let [t, r, n] = e.split("-"), o = /* @__PURE__ */ new Date();
  return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o;
}, f6 = (e) => {
  let [t, r] = e.split(":"), n = /* @__PURE__ */ new Date();
  return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
}, m6 = (e) => {
  let t = new Date(e), r = `000${t.getFullYear()}`.slice(-4), n = `0${t.getMonth() + 1}`.slice(-2), o = `0${t.getDate()}`.slice(-2);
  return `${r}-${n}-${o}`;
}, g6 = (e) => {
  let t = new Date(e), r = `0${t.getHours()}`.slice(-2), n = `0${t.getMinutes()}`.slice(-2);
  return `${r}:${n}`;
}, h6 = _.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), b6 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o }) => {
  let [l, i] = b.useState(!0), u = b.useRef(), s = b.useRef();
  b.useEffect(() => {
    l !== !1 && (u && u.current && (u.current.value = m6(t)), s && s.current && (s.current.value = g6(t)));
  }, [t]);
  let c = (g) => {
    let p = p6(g.target.value), h = new Date(t);
    h.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
    let f = h.getTime();
    f && r(f), i(!!f);
  }, d = (g) => {
    let p = f6(g.target.value), h = new Date(t);
    h.setHours(p.getHours()), h.setMinutes(p.getMinutes());
    let f = h.getTime();
    f && r(f), i(!!f);
  }, m = He(e);
  return a.createElement(h6, null, a.createElement(je.Input, { type: "date", max: "9999-12-31", ref: u, id: `${m}-date`, name: `${m}-date`, onChange: c, onFocus: n, onBlur: o }), a.createElement(je.Input, { type: "time", id: `${m}-time`, name: `${m}-time`, ref: s, onChange: d, onFocus: n, onBlur: o }), l ? null : a.createElement("div", null, "invalid"));
}, y6 = _.label({ display: "flex" }), v6 = (e) => {
  let t = parseFloat(e);
  return Number.isNaN(t) ? void 0 : t;
}, E6 = ({ name: e, value: t, onChange: r, min: n, max: o, step: l, onBlur: i, onFocus: u }) => {
  let [s, c] = b.useState(typeof t == "number" ? t : ""), [d, m] = b.useState(!1), [g, p] = b.useState(null), h = b.useCallback((y) => {
    c(y.target.value);
    let A = parseFloat(y.target.value);
    Number.isNaN(A) ? p(new Error(`'${y.target.value}' is not a number`)) : (r(A), p(null));
  }, [r, p]), f = b.useCallback(() => {
    c("0"), r(0), m(!0);
  }, [m]), x = b.useRef(null);
  return b.useEffect(() => {
    d && x.current && x.current.select();
  }, [d]), b.useEffect(() => {
    s !== (typeof t == "number" ? t : "") && c(t);
  }, [t]), !d && t === void 0 ? a.createElement(je.Button, { id: vn(e), onClick: f }, "Set number") : a.createElement(y6, null, a.createElement(je.Input, { ref: x, id: He(e), type: "number", onChange: h, size: "flex", placeholder: "Edit number...", value: s, valid: g ? "error" : null, autoFocus: d, name: e, min: n, max: o, step: l, onFocus: u, onBlur: i }));
}, jc = (e, t) => {
  let r = t && Object.entries(t).find(([n, o]) => o === e);
  return r ? r[0] : void 0;
}, Wa = (e, t) => e && t ? Object.entries(t).filter((r) => e.includes(r[1])).map((r) => r[0]) : [], Hc = (e, t) => e && t && e.map((r) => t[r]), x6 = _.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), A6 = _.span({}), w6 = _.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Ni = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return Yo.warn(`Checkbox with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = Wa(r, t), [i, u] = b.useState(l), s = (d) => {
    let m = d.target.value, g = [...i];
    g.includes(m) ? g.splice(g.indexOf(m), 1) : g.push(m), n(Hc(g, t)), u(g);
  };
  b.useEffect(() => {
    u(Wa(r, t));
  }, [r]);
  let c = He(e);
  return a.createElement(x6, { isInline: o }, Object.keys(t).map((d, m) => {
    let g = `${c}-${m}`;
    return a.createElement(w6, { key: g, htmlFor: g }, a.createElement("input", { type: "checkbox", id: g, name: g, value: d, onChange: s, checked: i == null ? void 0 : i.includes(d) }), a.createElement(A6, null, d));
  }));
}, S6 = _.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), C6 = _.span({}), k6 = _.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), ji = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return Yo.warn(`Radio with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = jc(r, t), i = He(e);
  return a.createElement(S6, { isInline: o }, Object.keys(t).map((u, s) => {
    let c = `${i}-${s}`;
    return a.createElement(k6, { key: c, htmlFor: c }, a.createElement("input", { type: "radio", id: c, name: c, value: u, onChange: (d) => n(t[d.currentTarget.value]), checked: u === l }), a.createElement(C6, null, u));
  }));
}, _6 = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, Zc = _.select(({ theme: e }) => ({ ..._6, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), Vc = _.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), Hi = "Choose option...", T6 = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (u) => {
    n(r[u.currentTarget.value]);
  }, l = jc(t, r) || Hi, i = He(e);
  return a.createElement(Vc, null, a.createElement(ve, { icon: "arrowdown" }), a.createElement(Zc, { id: i, value: l, onChange: o }, a.createElement("option", { key: "no-selection", disabled: !0 }, Hi), Object.keys(r).map((u) => a.createElement("option", { key: u, value: u }, u))));
}, O6 = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (u) => {
    let s = Array.from(u.currentTarget.options).filter((c) => c.selected).map((c) => c.value);
    n(Hc(s, r));
  }, l = Wa(t, r), i = He(e);
  return a.createElement(Vc, null, a.createElement(Zc, { id: i, multiple: !0, value: l, onChange: o }, Object.keys(r).map((u) => a.createElement("option", { key: u, value: u }, u))));
}, Zi = (e) => {
  let { name: t, options: r } = e;
  return r ? e.isMulti ? a.createElement(O6, { ...e }) : a.createElement(T6, { ...e }) : (Yo.warn(`Select with no options: ${t}`), a.createElement(a.Fragment, null, "-"));
}, R6 = (e, t) => Array.isArray(e) ? e.reduce((r, n) => (r[(t == null ? void 0 : t[n]) || String(n)] = n, r), {}) : e, F6 = { check: Ni, "inline-check": Ni, radio: ji, "inline-radio": ji, select: Zi, "multi-select": Zi }, Vt = (e) => {
  let { type: t = "select", labels: r, argType: n } = e, o = { ...e, options: n ? R6(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") }, l = F6[t];
  if (l)
    return a.createElement(l, { ...o });
  throw new Error(`Unknown options type: ${t}`);
}, Qo = "value", D6 = "key", L6 = "Error", $6 = "Object", M6 = "Array", B6 = "String", I6 = "Number", P6 = "Boolean", N6 = "Date", j6 = "Null", H6 = "Undefined", Z6 = "Function", V6 = "Symbol", zc = "ADD_DELTA_TYPE", qc = "REMOVE_DELTA_TYPE", Uc = "UPDATE_DELTA_TYPE";
function bt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function Wc(e, t) {
  let r = bt(e), n = bt(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var el = class extends b.Component {
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
    let { handleCancel: e, onlyValue: t, addButtonElement: r, cancelButtonElement: n, inputElementGenerator: o, keyPath: l, deep: i } = this.props, u = b.cloneElement(r, { onClick: this.onSubmit }), s = b.cloneElement(n, { onClick: e }), c = o(Qo, l, i), d = b.cloneElement(c, { placeholder: "Value", ref: this.refInputValue }), m = null;
    if (!t) {
      let g = o(D6, l, i);
      m = b.cloneElement(g, { placeholder: "Key", ref: this.refInputKey });
    }
    return a.createElement("span", { className: "rejt-add-value-node" }, m, d, s, u);
  }
};
el.defaultProps = { onlyValue: !1, addButtonElement: a.createElement("button", null, "+"), cancelButtonElement: a.createElement("button", null, "c") };
var Gc = class extends b.Component {
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
        let u = { keyPath: o, deep: l, key: e, oldValue: i, type: qc };
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
      u(r[r.length - 1], i), s({ type: zc, keyPath: r, deep: n, key: i.length - 1, newValue: e });
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
        c(i[i.length - 1], l), d({ type: Uc, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r(void 0);
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state, { handleRemove: o, readOnly: l, getStyle: i, dataType: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = i(e, t, r, n, u), m = l(e, t, r, n, u), g = b.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "[...] ", t.length, " ", t.length === 1 ? "item" : "items"), !m && g);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: m, addButtonElement: g, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: f, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: A, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: w, logger: S, onSubmitValueParser: k } = this.props, { minus: C, plus: T, delimiter: O, ul: R, addForm: D } = d(e, t, r, n, m), F = c(e, t, r, n, m), P = b.cloneElement(A, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: T }), L = b.cloneElement(y, { onClick: u, className: "rejt-minus-menu", style: C }), $ = !0, N = "[", Z = "]";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, N), !o && P, a.createElement("ul", { className: "rejt-not-collapsed-list", style: R }, t.map((B, j) => a.createElement(Zn, { key: j, name: j.toString(), data: B, keyPath: r, deep: l, isCollapsed: i, handleRemove: this.handleRemoveItem(j), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: g, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: f, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: A, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: w, logger: S, onSubmitValueParser: k }))), !F && o && a.createElement("div", { className: "rejt-add-form", style: D }, a.createElement(el, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: $, addButtonElement: g, cancelButtonElement: p, inputElementGenerator: f, keyPath: r, deep: n, onSubmitValueParser: k })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, Z), !F && L);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { dataType: l, getStyle: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = i(e, r, n, o, l);
    return a.createElement("div", { className: "rejt-array-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
Gc.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var Yc = class extends b.Component {
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
      Wc(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: m, textareaElementGenerator: g, minusMenuElement: p, keyPath: h } = this.props, f = c(e, i, n, o, s), x = null, y = null, A = u(e, i, n, o, s);
    if (r && !A) {
      let v = g(Qo, h, o, e, i, s), E = b.cloneElement(d, { onClick: this.handleEdit }), w = b.cloneElement(m, { onClick: this.handleCancelEdit }), S = b.cloneElement(v, { ref: this.refInput, defaultValue: i });
      x = a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, S, " ", w, E), y = null;
    } else {
      x = a.createElement("span", { className: "rejt-value", style: f.value, onClick: A ? null : this.handleEditMode }, t);
      let v = b.cloneElement(p, { onClick: l, className: "rejt-minus-menu", style: f.minus });
      y = A ? null : v;
    }
    return a.createElement("li", { className: "rejt-function-value-node", style: f.li }, a.createElement("span", { className: "rejt-name", style: f.name }, e, " :", " "), x, y);
  }
};
Yc.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var Zn = class extends b.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state, { isCollapsed: o, handleRemove: l, handleUpdateValue: i, onUpdate: u, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: m, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: f, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: A, beforeAddAction: v, beforeUpdateAction: E, logger: w, onSubmitValueParser: S } = this.props, k = () => !0, C = bt(e);
    switch (C) {
      case L6:
        return a.createElement(Ga, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: k, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: f, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: A, beforeAddAction: v, beforeUpdateAction: E, logger: w, onSubmitValueParser: S });
      case $6:
        return a.createElement(Ga, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: f, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: A, beforeAddAction: v, beforeUpdateAction: E, logger: w, onSubmitValueParser: S });
      case M6:
        return a.createElement(Gc, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: f, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: A, beforeAddAction: v, beforeUpdateAction: E, logger: w, onSubmitValueParser: S });
      case B6:
        return a.createElement(ht, { name: t, value: `"${e}"`, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case I6:
        return a.createElement(ht, { name: t, value: e, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case P6:
        return a.createElement(ht, { name: t, value: e ? "true" : "false", originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case N6:
        return a.createElement(ht, { name: t, value: e.toISOString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case j6:
        return a.createElement(ht, { name: t, value: "null", originalValue: "null", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case H6:
        return a.createElement(ht, { name: t, value: "undefined", originalValue: "undefined", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case Z6:
        return a.createElement(Yc, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, textareaElementGenerator: f, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      case V6:
        return a.createElement(ht, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: C, getStyle: d, cancelButtonElement: g, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: w, onSubmitValueParser: S });
      default:
        return null;
    }
  }
};
Zn.defaultProps = { keyPath: [], deep: 0 };
var Ga = class extends b.Component {
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
      u(n[n.length - 1], r), s({ type: zc, keyPath: n, deep: o, key: e, newValue: t });
    }).catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: l } = this.state, i = n[e];
      t(e, o, l, i).then(() => {
        let u = { keyPath: o, deep: l, key: e, oldValue: i, type: qc };
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
        c(i[i.length - 1], l), d({ type: Uc, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r();
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state, { handleRemove: o, readOnly: l, dataType: i, getStyle: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = u(e, n, t, r, i), m = Object.getOwnPropertyNames(n), g = l(e, n, t, r, i), p = b.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "{...}", " ", m.length, " ", m.length === 1 ? "key" : "keys"), !g && p);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: m, addButtonElement: g, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: f, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: A, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: w, logger: S, onSubmitValueParser: k } = this.props, { minus: C, plus: T, addForm: O, ul: R, delimiter: D } = d(e, t, r, n, m), F = Object.getOwnPropertyNames(t), P = c(e, t, r, n, m), L = b.cloneElement(A, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: T }), $ = b.cloneElement(y, { onClick: u, className: "rejt-minus-menu", style: C }), N = F.map((j) => a.createElement(Zn, { key: j, name: j, data: t[j], keyPath: r, deep: o, isCollapsed: i, handleRemove: this.handleRemoveValue(j), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: g, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: f, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: A, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: w, logger: S, onSubmitValueParser: k })), Z = "{", B = "}";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: D }, Z), !P && L, a.createElement("ul", { className: "rejt-not-collapsed-list", style: R }, N), !P && l && a.createElement("div", { className: "rejt-add-form", style: O }, a.createElement(el, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: g, cancelButtonElement: p, inputElementGenerator: f, keyPath: r, deep: n, onSubmitValueParser: k })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: D }, B), !P && $);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { getStyle: l, dataType: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = l(e, r, n, o, i);
    return a.createElement("div", { className: "rejt-object-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
Ga.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var ht = class extends b.Component {
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
      Wc(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: m, inputElementGenerator: g, minusMenuElement: p, keyPath: h } = this.props, f = c(e, i, n, o, s), x = u(e, i, n, o, s), y = r && !x, A = g(Qo, h, o, e, i, s), v = b.cloneElement(d, { onClick: this.handleEdit }), E = b.cloneElement(m, { onClick: this.handleCancelEdit }), w = b.cloneElement(A, { ref: this.refInput, defaultValue: JSON.stringify(i) }), S = b.cloneElement(p, { onClick: l, className: "rejt-minus-menu", style: f.minus });
    return a.createElement("li", { className: "rejt-value-node", style: f.li }, a.createElement("span", { className: "rejt-name", style: f.name }, e, " : "), y ? a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, w, " ", E, v) : a.createElement("span", { className: "rejt-value", style: f.value, onClick: x ? null : this.handleEditMode }, String(t)), !x && !y && S);
  }
};
ht.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var z6 = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, q6 = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, U6 = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function W6(e) {
  let t = e;
  if (t.indexOf("function") === 0)
    return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
var Kc = class extends b.Component {
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
    let { data: e, rootName: t } = this.state, { isCollapsed: r, onDeltaUpdate: n, readOnly: o, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElement: c, textareaElement: d, minusMenuElement: m, plusMenuElement: g, beforeRemoveAction: p, beforeAddAction: h, beforeUpdateAction: f, logger: x, onSubmitValueParser: y, fallback: A = null } = this.props, v = bt(e), E = o;
    bt(o) === "Boolean" && (E = () => o);
    let w = c;
    c && bt(c) !== "Function" && (w = () => c);
    let S = d;
    return d && bt(d) !== "Function" && (S = () => d), v === "Object" || v === "Array" ? a.createElement("div", { className: "rejt-tree" }, a.createElement(Zn, { data: e, name: t, deep: -1, isCollapsed: r, onUpdate: this.onUpdate, onDeltaUpdate: n, readOnly: E, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElementGenerator: w, textareaElementGenerator: S, minusMenuElement: m, plusMenuElement: g, handleRemove: this.removeRoot, beforeRemoveAction: p, beforeAddAction: h, beforeUpdateAction: f, logger: x, onSubmitValueParser: y })) : A;
  }
};
Kc.defaultProps = { rootName: "root", isCollapsed: (e, t) => t !== -1, getStyle: (e, t, r, n, o) => {
  switch (o) {
    case "Object":
    case "Error":
      return z6;
    case "Array":
      return q6;
    default:
      return U6;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, t, r, n, o) => W6(o), inputElement: () => a.createElement("input", null), textareaElement: () => a.createElement("textarea", null), fallback: null };
var { window: G6 } = De, Y6 = _.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), va = _.button(({ theme: e, primary: t }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: t ? e.color.secondary : "transparent", color: t ? e.color.lightest : e.color.dark, fontWeight: t ? "bold" : "normal", cursor: "pointer", order: t ? "initial" : 9 })), Vi = _(ve)(({ theme: e, icon: t, disabled: r }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: r ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": r ? {} : { color: t === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), zi = _.input(({ theme: e, placeholder: t }) => ({ outline: 0, margin: t ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: t === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), K6 = _(Lt)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), X6 = _(je.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), J6 = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, Q6 = (e) => {
  e.currentTarget.dispatchEvent(new G6.KeyboardEvent("keydown", J6));
}, ex = (e) => {
  e.currentTarget.select();
}, tx = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), qi = ({ name: e, value: t, onChange: r }) => {
  let n = _1(), o = b.useMemo(() => t && K3(t), [t]), l = o != null, [i, u] = b.useState(!l), [s, c] = b.useState(null), d = b.useCallback((x) => {
    try {
      x && r(JSON.parse(x)), c(void 0);
    } catch (y) {
      c(y);
    }
  }, [r]), [m, g] = b.useState(!1), p = b.useCallback(() => {
    r({}), g(!0);
  }, [g]), h = b.useRef(null);
  if (b.useEffect(() => {
    m && h.current && h.current.select();
  }, [m]), !l)
    return a.createElement(je.Button, { id: vn(e), onClick: p }, "Set object");
  let f = a.createElement(X6, { ref: h, id: He(e), name: e, defaultValue: t === null ? "" : JSON.stringify(t, null, 2), onBlur: (x) => d(x.target.value), placeholder: "Edit JSON string...", autoFocus: m, valid: s ? "error" : null });
  return a.createElement(Y6, null, ["Object", "Array"].includes(bt(o)) && a.createElement(K6, { href: "#", onClick: (x) => {
    x.preventDefault(), u((y) => !y);
  } }, a.createElement(ve, { icon: i ? "eyeclose" : "eye" }), a.createElement("span", null, "RAW")), i ? f : a.createElement(Kc, { data: o, rootName: e, onFullyUpdate: r, getStyle: tx(n), cancelButtonElement: a.createElement(va, { type: "button" }, "Cancel"), editButtonElement: a.createElement(va, { type: "submit" }, "Save"), addButtonElement: a.createElement(va, { type: "submit", primary: !0 }, "Save"), plusMenuElement: a.createElement(Vi, { icon: "add" }), minusMenuElement: a.createElement(Vi, { icon: "subtract" }), inputElement: (x, y, A, v) => v ? a.createElement(zi, { onFocus: ex, onBlur: Q6 }) : a.createElement(zi, null), fallback: f }));
}, rx = _.input(({ theme: e, min: t, max: r, value: n }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${ut(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${ut(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Ke(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: ut(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${ut(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${ut(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Ke(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${ut(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), Xc = _.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), nx = _(Xc)(({ numberOFDecimalsPlaces: e, max: t }) => ({ width: `${e + t.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), ax = _.div({ display: "flex", alignItems: "center", width: "100%" });
function ox(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var lx = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: l = 1, onBlur: i, onFocus: u }) => {
  let s = (m) => {
    r(v6(m.target.value));
  }, c = t !== void 0, d = b.useMemo(() => ox(l), [l]);
  return a.createElement(ax, null, a.createElement(Xc, null, n), a.createElement(rx, { id: He(e), type: "range", onChange: s, name: e, value: t, min: n, max: o, step: l, onFocus: u, onBlur: i }), a.createElement(nx, { numberOFDecimalsPlaces: d, max: o }, c ? t.toFixed(d) : "--", " / ", o));
}, ix = _.label({ display: "flex" }), sx = _.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), ux = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: l }) => {
  let i = (m) => {
    r(m.target.value);
  }, [u, s] = b.useState(!1), c = b.useCallback(() => {
    r(""), s(!0);
  }, [s]);
  if (t === void 0)
    return a.createElement(je.Button, { id: vn(e), onClick: c }, "Set string");
  let d = typeof t == "string";
  return a.createElement(ix, null, a.createElement(je.Textarea, { id: He(e), maxLength: l, onChange: i, size: "flex", placeholder: "Edit string...", autoFocus: u, valid: d ? null : "error", name: e, value: d ? t : "", onFocus: n, onBlur: o }), l && a.createElement(sx, { isMaxed: (t == null ? void 0 : t.length) === l }, (t == null ? void 0 : t.length) ?? 0, " / ", l));
}, cx = _(je.Input)({ padding: 10 });
function dx(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var px = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
  let o = b.useRef(null);
  function l(i) {
    if (!i.target.files)
      return;
    let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
    e(u), dx(n);
  }
  return b.useEffect(() => {
    n == null && o.current && (o.current.value = null);
  }, [n, t]), a.createElement(cx, { ref: o, id: He(t), type: "file", name: t, multiple: !0, onChange: l, accept: r, size: "flex" });
}, fx = b.lazy(() => import("./storybook-ef07dc72.es.js")), mx = (e) => a.createElement(b.Suspense, { fallback: a.createElement("div", null) }, a.createElement(fx, { ...e })), gx = { array: qi, object: qi, boolean: d6, color: mx, date: b6, number: E6, check: Vt, "inline-check": Vt, radio: Vt, "inline-radio": Vt, select: Vt, "multi-select": Vt, range: lx, text: ux, file: px }, Ui = () => a.createElement(a.Fragment, null, "-"), hx = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
  let { key: o, control: l } = e, [i, u] = b.useState(!1), [s, c] = b.useState({ value: t });
  b.useEffect(() => {
    i || c({ value: t });
  }, [i, t]);
  let d = b.useCallback((f) => (c({ value: f }), r({ [o]: f }), f), [r, o]), m = b.useCallback(() => u(!1), []), g = b.useCallback(() => u(!0), []);
  if (!l || l.disable)
    return n ? a.createElement(Ft, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : a.createElement(Ui, null);
  let p = { name: o, argType: e, value: s.value, onChange: d, onBlur: m, onFocus: g }, h = gx[l.type] || Ui;
  return a.createElement(h, { ...p, ...l, controlType: l.type });
}, bx = _.span({ fontWeight: "bold" }), yx = _.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), vx = _.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...pt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Ex = _.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 4 : 0 })), xx = _.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 12 : 0, marginBottom: 12 })), Ax = _.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })), Yr = (e) => {
  var f;
  let [t, r] = b.useState(!1), { row: n, updateArgs: o, compact: l, expandable: i, initialExpandedArgs: u } = e, { name: s, description: c } = n, d = n.table || {}, m = d.type || n.type, g = d.defaultValue || n.defaultValue, p = (f = n.type) == null ? void 0 : f.required, h = c != null && c !== "";
  return a.createElement("tr", { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) }, a.createElement(Ax, { expandable: i }, a.createElement(bx, null, s), p ? a.createElement(yx, { title: "Required" }, "*") : null), l ? null : a.createElement("td", null, h && a.createElement(vx, null, a.createElement(Ac, null, c)), d.jsDocTags != null ? a.createElement(a.Fragment, null, a.createElement(xx, { hasDescription: h }, a.createElement(ya, { value: m, initialExpandedArgs: u })), a.createElement(QE, { tags: d.jsDocTags })) : a.createElement(Ex, { hasDescription: h }, a.createElement(ya, { value: m, initialExpandedArgs: u }))), l ? null : a.createElement("td", null, a.createElement(ya, { value: g, initialExpandedArgs: u })), o ? a.createElement("td", null, a.createElement(hx, { ...e, isHovered: t })) : null);
}, wx = _(ve)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.3, e.color.defaultText), border: "none", display: "inline-block" })), Sx = _.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), Cx = _.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), kx = _.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), _x = _.td(() => ({ position: "relative" })), Tx = _.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${kt(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), Wi = _.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), Ea = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
  let [l, i] = b.useState(n), u = e === "subsection" ? kx : Cx, s = (r == null ? void 0 : r.length) || 0, c = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "", d = l ? "arrowdown" : "arrowright", m = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
  return a.createElement(a.Fragment, null, a.createElement(Tx, { title: m }, a.createElement(u, { colSpan: 1 }, a.createElement(Wi, { onClick: (g) => i(!l), tabIndex: 0 }, m), a.createElement(Sx, null, a.createElement(wx, { icon: d }), t)), a.createElement(_x, { colSpan: o - 1 }, a.createElement(Wi, { onClick: (g) => i(!l), tabIndex: -1, style: { outline: "none" } }, m), l ? null : c)), l ? r : null);
}, Kr = _.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), me = _.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), ie = _.div(({ theme: e, width: t, height: r }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: t || "100%", height: r || 16, borderRadius: 3 })), ge = [2, 4, 2, 2], Ox = () => a.createElement(a.Fragment, null, a.createElement(Kr, null, a.createElement(me, { numColumn: ge[0] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[1] }, a.createElement(ie, { width: "30%" })), a.createElement(me, { numColumn: ge[2] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[3] }, a.createElement(ie, { width: "60%" }))), a.createElement(Kr, null, a.createElement(me, { numColumn: ge[0] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[1] }, a.createElement(ie, { width: "80%" }), a.createElement(ie, { width: "30%" })), a.createElement(me, { numColumn: ge[2] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[3] }, a.createElement(ie, { width: "60%" }))), a.createElement(Kr, null, a.createElement(me, { numColumn: ge[0] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[1] }, a.createElement(ie, { width: "80%" }), a.createElement(ie, { width: "30%" })), a.createElement(me, { numColumn: ge[2] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[3] }, a.createElement(ie, { width: "60%" }))), a.createElement(Kr, null, a.createElement(me, { numColumn: ge[0] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[1] }, a.createElement(ie, { width: "80%" }), a.createElement(ie, { width: "30%" })), a.createElement(me, { numColumn: ge[2] }, a.createElement(ie, { width: "60%" })), a.createElement(me, { numColumn: ge[3] }, a.createElement(ie, { width: "60%" })))), Rx = _.div(({ inAddonPanel: e, theme: t }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${t.appBorderColor}`, borderRadius: e ? 0 : t.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: t.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), Fx = _.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), Dx = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textColor })), Lx = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textMutedColor })), $x = _.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), Mx = _.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), Bx = ({ inAddonPanel: e }) => {
  let [t, r] = b.useState(!0);
  return b.useEffect(() => {
    let n = setTimeout(() => {
      r(!1);
    }, 100);
    return () => clearTimeout(n);
  }, []), t ? null : a.createElement(Rx, { inAddonPanel: e }, a.createElement(Fx, null, a.createElement(Dx, null, e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated"), a.createElement(Lx, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")), a.createElement($x, null, e && a.createElement(a.Fragment, null, a.createElement(Ft, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, a.createElement(ve, { icon: "video" }), " Watch 5m video"), a.createElement(Mx, null), a.createElement(Ft, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Read docs")), !e && a.createElement(Ft, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Learn how to set that up")));
}, Ix = _.table(({ theme: e, compact: t, inAddonPanel: r }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: r ? 0 : 25, marginBottom: r ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...t ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...t ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...t ? null : { width: "25%" } }, th: { color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: r ? 0 : 1, marginRight: r ? 0 : 1, tbody: { ...r ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...r ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), Px = _(Lt)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), Nx = _.span({ display: "flex", justifyContent: "space-between" }), jx = { alpha: (e, t) => e.name.localeCompare(t.name), requiredFirst: (e, t) => {
  var r, n;
  return +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) || e.name.localeCompare(t.name);
}, none: void 0 }, Hx = (e, t) => {
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
  let n = jx[t], o = (l) => n ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {}) : l;
  return { ungrouped: r.ungrouped.sort(n), ungroupedSubsections: o(r.ungroupedSubsections), sections: Object.keys(r.sections).reduce((l, i) => ({ ...l, [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: o(r.sections[i].subsections) } }), {}) };
}, Zx = (e, t, r) => {
  try {
    return h0(e, t, r);
  } catch (n) {
    return EE.warn(n.message), !1;
  }
}, Vx = (e) => {
  let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: o, initialExpandedArgs: l, sort: i = "none", isLoading: u } = e;
  if ("error" in e) {
    let { error: A } = e;
    return a.createElement(Ic, null, A, " ", a.createElement(Ft, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  }
  if (u)
    return a.createElement(Ox, null);
  let { rows: s, args: c, globals: d } = "rows" in e && e, m = Hx(kh(s, (A) => {
    var v;
    return !((v = A == null ? void 0 : A.table) != null && v.disable) && Zx(A, c || {}, d || {});
  }), i), g = m.ungrouped.length === 0, p = Object.entries(m.sections).length === 0, h = Object.entries(m.ungroupedSubsections).length === 0;
  if (g && p && h)
    return a.createElement(Bx, { inAddonPanel: o });
  let f = 1;
  t && (f += 1), n || (f += 2);
  let x = Object.keys(m.sections).length > 0, y = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l };
  return a.createElement(Lo, null, a.createElement(Ix, { compact: n, inAddonPanel: o, className: "docblock-argstable sb-unstyled" }, a.createElement("thead", { className: "docblock-argstable-head" }, a.createElement("tr", null, a.createElement("th", null, a.createElement("span", null, "Name")), n ? null : a.createElement("th", null, a.createElement("span", null, "Description")), n ? null : a.createElement("th", null, a.createElement("span", null, "Default")), t ? a.createElement("th", null, a.createElement(Nx, null, "Control", " ", !u && r && a.createElement(Px, { onClick: () => r(), title: "Reset controls" }, a.createElement(ve, { icon: "undo", "aria-hidden": !0 })))) : null)), a.createElement("tbody", { className: "docblock-argstable-body" }, m.ungrouped.map((A) => a.createElement(Yr, { key: A.key, row: A, arg: c && c[A.key], ...y })), Object.entries(m.ungroupedSubsections).map(([A, v]) => a.createElement(Ea, { key: A, label: A, level: "subsection", colSpan: f }, v.map((E) => a.createElement(Yr, { key: E.key, row: E, arg: c && c[E.key], expandable: x, ...y })))), Object.entries(m.sections).map(([A, v]) => a.createElement(Ea, { key: A, label: A, level: "section", colSpan: f }, v.ungrouped.map((E) => a.createElement(Yr, { key: E.key, row: E, arg: c && c[E.key], ...y })), Object.entries(v.subsections).map(([E, w]) => a.createElement(Ea, { key: E, label: E, level: "subsection", colSpan: f }, w.map((S) => a.createElement(Yr, { key: S.key, row: S, arg: c && c[S.key], expandable: x, ...y })))))))));
};
_.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
_.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
_.div(re, ({ theme: e }) => ({ ...Hn(e), margin: "25px 0 40px", padding: "30px 20px" }));
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
_.div(({ theme: e }) => ({ color: e.base === "light" ? te(0.2, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
_.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
_.div({ display: "flex", flexDirection: "row" });
_.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
_.div(({ theme: e }) => ({ ...Hn(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
_.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
_.div({ flex: 1, display: "flex", flexDirection: "row" });
_.div({ display: "flex", alignItems: "flex-start" });
_.div({ flex: "0 0 30%" });
_.div({ flex: 1 });
_.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
_.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
_.div(({ theme: e }) => ({ ...Hn(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
_.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
_.div({ display: "flex", flexFlow: "row wrap" });
var zx = (e) => `anchor--${e}`, Jc = ({ storyId: e, children: t }) => a.createElement("div", { id: zx(e), className: "sb-anchor" }, t);
De && De.__DOCS_CONTEXT__ === void 0 && (De.__DOCS_CONTEXT__ = b.createContext(null), De.__DOCS_CONTEXT__.displayName = "DocsContext");
var Ce = De ? De.__DOCS_CONTEXT__ : b.createContext(null), Vn = (e, t) => b.useContext(Ce).resolveOf(e, t);
function qx(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function Ux(e, t) {
  let r = tl([e], t);
  return r && r[0];
}
function tl(e, t) {
  let [r, n] = b.useState({});
  return b.useEffect(() => {
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
function Qc(e) {
  return mE(e);
}
var e0 = b.createContext({ sources: {} }), t0 = "--unknown--", Wx = ({ children: e, channel: t }) => {
  let [r, n] = b.useState({});
  return b.useEffect(() => {
    let o = (l, i = null, u = !1) => {
      let { id: s, args: c = void 0, source: d, format: m } = typeof l == "string" ? { id: l, source: i, format: u } : l, g = c ? Qc(c) : t0;
      n((p) => ({ ...p, [s]: { ...p[s], [g]: { code: d, format: m } } }));
    };
    return t.on(cl, o), () => t.off(cl, o);
  }, []), a.createElement(e0.Provider, { value: { sources: r } }, e);
}, Gx = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(Gx || {}), Yx = (e) => {
  let t = e.map((r) => {
    var n, o;
    return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : o.state;
  }).filter(Boolean);
  return t.length === 0 ? "closed" : t[0];
}, Kx = (e, t, r) => {
  let { sources: n } = r, o = n == null ? void 0 : n[e];
  return (o == null ? void 0 : o[Qc(t)]) || (o == null ? void 0 : o[t0]) || { code: "" };
}, Xx = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
  var s, c, d, m, g, p;
  let { __isArgsStory: o } = t.parameters, l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {}, i = r || l.type || Wn.AUTO;
  if (l.code !== void 0)
    return l.code;
  let u = i === Wn.DYNAMIC || i === Wn.AUTO && e && o ? e : l.originalSource || "";
  return l.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (c = t.parameters.docs) != null && c.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (d = t.parameters.jsx) != null && d.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), ((p = n ?? l.transform ?? l.transformSource ?? ((m = t.parameters.docs) == null ? void 0 : m.transformSource) ?? ((g = t.parameters.jsx) == null ? void 0 : g.transformSource)) == null ? void 0 : p(u, t)) || u;
}, r0 = (e, t, r) => {
  var p, h, f;
  let n = e.ids || (e.id ? [e.id] : []), o = tl(n, t), l = o, { of: i } = e;
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
  let u = ((f = (h = (p = l[0]) == null ? void 0 : p.parameters) == null ? void 0 : h.docs) == null ? void 0 : f.source) || {}, { code: s } = e, c = e.format ?? u.format, d = e.language ?? u.language ?? "jsx", m = e.dark ?? u.dark ?? !1;
  s || (s = l.map((x, y) => {
    var w, S;
    if (!x)
      return "";
    let A = t.getStoryContext(x), v = e.__forceInitialArgs ? A.initialArgs : A.unmappedArgs, E = Kx(x.id, v, r);
    return y === 0 && (c = E.format ?? ((S = (w = x.parameters.docs) == null ? void 0 : w.source) == null ? void 0 : S.format) ?? !1), Xx({ snippet: E.code, storyContext: { ...A, args: v }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let g = Yx(l);
  return s ? { code: s, format: c, language: d, dark: m, state: g } : { error: "Oh no! The source is not available.", state: g };
}, n0 = (e, t) => {
  let { id: r, of: n, meta: o, story: l } = e;
  if ("of" in e && n === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (r)
    return pe(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r;
  let { name: i } = e;
  return i ? (pe(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), t.storyIdByName(i)) : (l && pe(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), o && t.referenceMeta(o, !1), t.resolveOf(n || l || "story", ["story"]).story.id);
}, Jx = (e, t, r) => {
  let { parameters: n = {} } = t || {}, { docs: o = {} } = n, l = o.story || {};
  if (o.disable)
    return null;
  let { inlineStories: i, iframeHeight: u } = o;
  typeof i < "u" && pe(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let s = e.inline ?? l.inline ?? i ?? !1;
  if (typeof u < "u" && pe(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), s) {
    let d = e.height ?? l.height, m = e.autoplay ?? l.autoplay ?? !1;
    return { story: t, inline: !0, height: d, autoplay: m, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: r.renderStoryToElement };
  }
  let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? "100px";
  return { story: t, inline: !1, height: c, primary: !!e.__primary };
}, Qx = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let t = b.useContext(Ce), r = n0(e, t), n = Ux(r, t);
  if (!n)
    return a.createElement(Jo, null);
  let o = Jx(e, n, t);
  return o ? a.createElement(VE, { ...o }) : null;
}, e8 = ({ withSource: e, mdxSource: t, children: r, layout: n, ...o }, l, i) => {
  let u = b.Children.toArray(r).filter((g) => g.props && (g.props.id || g.props.name || g.props.of)).map((g) => n0(g.props, l)), s = tl(u, l), c = s.some((g) => !g), d = r0({ ...t ? { code: decodeURI(t) } : { ids: u }, ...o.of && { of: o.of } }, l, i);
  if (e === "none")
    return { isLoading: c, previewProps: o };
  let m = n;
  return b.Children.forEach(r, (g) => {
    var p, h;
    m || (m = (h = (p = g == null ? void 0 : g.props) == null ? void 0 : p.parameters) == null ? void 0 : h.layout);
  }), s.forEach((g) => {
    var p, h;
    m || !g || (m = (g == null ? void 0 : g.parameters.layout) ?? ((h = (p = g.parameters.docs) == null ? void 0 : p.canvas) == null ? void 0 : h.layout));
  }), { isLoading: c, previewProps: { ...o, layout: m ?? "padded", withSource: d, isExpanded: (e || d.state) === "open" } };
}, t8 = (e) => {
  var x, y, A, v, E, w, S, k, C, T;
  let t = b.useContext(Ce), r = b.useContext(e0), { children: n, of: o, source: l } = e;
  if ("of" in e && o === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: i, previewProps: u } = e8(e, t, r), s, c, d;
  try {
    ({ story: s } = Vn(o || "story", ["story"]));
  } catch (O) {
    n || (d = O);
  }
  try {
    c = r0({ ...l, ...o && { of: o } }, t, r);
  } catch (O) {
    n || (d = O);
  }
  if (d)
    throw d;
  if (e.withSource && pe(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && pe(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && pe(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), n)
    return pe(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), i ? a.createElement(XE, null) : a.createElement(qa, { ...u }, n);
  let m = e.layout ?? s.parameters.layout ?? ((y = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null ? void 0 : y.layout) ?? "padded", g = e.withToolbar ?? ((v = (A = s.parameters.docs) == null ? void 0 : A.canvas) == null ? void 0 : v.withToolbar) ?? !1, p = e.additionalActions ?? ((w = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null ? void 0 : w.additionalActions), h = e.sourceState ?? ((k = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : k.sourceState) ?? "hidden", f = e.className ?? ((T = (C = s.parameters.docs) == null ? void 0 : C.canvas) == null ? void 0 : T.className);
  return a.createElement(qa, { withSource: h === "none" ? void 0 : c, isExpanded: h === "shown", withToolbar: g, additionalActions: p, className: f, layout: m }, a.createElement(Qx, { of: o || s.moduleExport, meta: e.meta, ...e.story }));
}, r8 = (e, t) => {
  let r = t.getStoryContext(e), [n, o] = b.useState(r.globals);
  return b.useEffect(() => {
    let l = (i) => {
      o(i.globals);
    };
    return t.channel.on(Mi, l), () => t.channel.off(Mi, l);
  }, [t.channel]), [n];
}, n8 = (e, t) => {
  let r = a8(e, t);
  if (!r)
    throw new Error("No result when story was defined");
  return r;
}, a8 = (e, t) => {
  let r = e ? t.getStoryContext(e) : { args: {} }, { id: n } = e || { id: "none" }, [o, l] = b.useState(r.args);
  b.useEffect(() => {
    let s = (c) => {
      c.storyId === n && l(c.args);
    };
    return t.channel.on($i, s), () => t.channel.off($i, s);
  }, [n, t.channel]);
  let i = b.useCallback((s) => t.channel.emit(AE, { storyId: n, updatedArgs: s }), [n, t.channel]), u = b.useCallback((s) => t.channel.emit(wE, { storyId: n, argNames: s }), [n, t.channel]);
  return e && [o, i, u];
}, o8 = (e) => {
  var f;
  let { of: t } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = b.useContext(Ce), { story: n } = r.resolveOf(t || "story", ["story"]), { parameters: o, argTypes: l } = n, i = ((f = o.docs) == null ? void 0 : f.controls) || {}, u = e.include ?? i.include, s = e.exclude ?? i.exclude, c = e.sort ?? i.sort, [d, m, g] = n8(n, r), [p] = r8(n, r), h = xE(l, u, s);
  return a.createElement(Vx, { rows: h, args: d, globals: p, updateArgs: m, resetArgs: g, sort: c });
}, { document: a0 } = De, l8 = ({ className: e, children: t, ...r }) => {
  if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
    return a.createElement(Ro, null, t);
  let n = e && e.split("-");
  return a.createElement(Ko, { language: n && n[1] || "plaintext", format: !1, code: t, ...r });
};
function rl(e, t) {
  e.channel.emit(SE, t);
}
var Ya = Xu.a, i8 = ({ hash: e, children: t }) => {
  let r = b.useContext(Ce);
  return a.createElement(Ya, { href: e, target: "_self", onClick: (n) => {
    let o = e.substring(1);
    a0.getElementById(o) && rl(r, e);
  } }, t);
}, s8 = (e) => {
  let { href: t, target: r, children: n, ...o } = e, l = b.useContext(Ce);
  if (t) {
    if (t.startsWith("#"))
      return a.createElement(i8, { hash: t }, n);
    if (r !== "_blank" && !t.startsWith("https://"))
      return a.createElement(Ya, { href: t, onClick: (i) => {
        i.button === 0 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && (i.preventDefault(), rl(l, i.currentTarget.getAttribute("href")));
      }, target: r, ...o }, n);
  }
  return a.createElement(Ya, { ...e });
}, o0 = ["h1", "h2", "h3", "h4", "h5", "h6"], u8 = o0.reduce((e, t) => ({ ...e, [t]: _(t)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), c8 = _.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), d8 = ({ as: e, id: t, children: r, ...n }) => {
  let o = b.useContext(Ce), l = u8[e], i = `#${t}`;
  return a.createElement(l, { id: t, ...n }, a.createElement(c8, { "aria-hidden": "true", href: i, tabIndex: -1, target: "_self", onClick: (u) => {
    a0.getElementById(t) && rl(o, i);
  } }, a.createElement(ve, { icon: "link" })), r);
}, nl = (e) => {
  let { as: t, id: r, children: n, ...o } = e;
  if (r)
    return a.createElement(d8, { as: t, id: r, ...o }, n);
  let l = t, { as: i, ...u } = e;
  return a.createElement(l, { ...ee(u, t) });
}, p8 = o0.reduce((e, t) => ({ ...e, [t]: (r) => a.createElement(nl, { as: t, ...r }) }), {}), f8 = (e) => {
  var t;
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
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
  return a.createElement(Ac, { ...e, options: { forceBlock: !0, overrides: { code: l8, a: s8, ...p8, ...(t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides }, ...e == null ? void 0 : e.options } });
}, m8 = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(m8 || {}), sn = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", g8 = (e) => e && (typeof e == "string" ? e : Aa(e.markdown) || Aa(e.text)), h8 = (e) => e && (typeof e == "string" ? e : Aa(e.text)), b8 = (e) => null, y8 = (e) => {
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
}, v8 = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
  let { component: o, parameters: l } = n();
  if (r || t)
    return r || t;
  let { notes: i, info: u, docs: s } = l;
  (i || u) && pe(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${sn}`);
  let { extractComponentDescription: c = b8, description: d } = s || {}, m = d == null ? void 0 : d.component;
  if (m)
    return m;
  switch (e) {
    case "info":
      return h8(u);
    case "notes":
      return g8(i);
    case "docgen":
    case "auto":
    default:
      return c(o, { component: o, ...l });
  }
}, Ka = (e) => {
  let { of: t, type: r, markdown: n, children: o } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let l = b.useContext(Ce), i = Vn(t || "meta"), u;
  return r || n || o ? u = v8(e, l) : u = y8(i), r && pe(`Manually specifying description type is deprecated. See ${sn}`), n && pe(`The 'markdown' prop on the Description block is deprecated. See ${sn}`), o && pe(`The 'children' prop on the Description block is deprecated. See ${sn}`), u ? a.createElement(f8, null, u) : null;
}, E8 = _.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), x8 = _.div(({ theme: e }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), A8 = _.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), w8 = ({ title: e }) => e === null ? null : typeof e == "string" ? a.createElement(A8, null, e) : e, S8 = ({ title: e, disable: t, headingSelector: r, contentsSelector: n, ignoreSelector: o, unsafeTocbotOptions: l }) => (b.useEffect(() => {
  let i = { tocSelector: ".toc-wrapper", contentSelector: n ?? ".sbdocs-content", headingSelector: r ?? "h3", ignoreSelector: o ?? ".skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...l }, u = setTimeout(() => Li.init(i), 100);
  return () => {
    clearTimeout(u), Li.destroy();
  };
}, [t]), a.createElement(a.Fragment, null, a.createElement(E8, null, t ? null : a.createElement(x8, null, a.createElement(w8, { title: e || null }), a.createElement("div", { className: "toc-wrapper" }))))), { document: C8, window: k8 } = De, _8 = ({ context: e, theme: t, children: r }) => {
  var o, l, i, u, s;
  let n;
  try {
    n = (l = (o = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : o.docs) == null ? void 0 : l.toc;
  } catch {
    n = (s = (u = (i = e == null ? void 0 : e.projectAnnotations) == null ? void 0 : i.parameters) == null ? void 0 : u.docs) == null ? void 0 : s.toc;
  }
  return b.useEffect(() => {
    let c;
    try {
      if (c = new URL(k8.parent.location.toString()), c.hash) {
        let d = C8.getElementById(c.hash.substring(1));
        d && setTimeout(() => {
          qx(d);
        }, 200);
      }
    } catch {
    }
  }), a.createElement(Ce.Provider, { value: e }, a.createElement(Wx, { channel: e.channel }, a.createElement(As, { theme: ud(t) }, a.createElement(LE, { toc: n ? a.createElement(S8, { className: "sbdocs sbdocs-toc--custom", ...n }) : null }, r))));
}, T8 = /\s*\/\s*/, O8 = (e) => {
  let t = e.trim().split(T8);
  return t && t[t.length - 1] || e;
}, R8 = ({ children: e }) => {
  let t = b.useContext(Ce), r = e || O8(t.storyById().title);
  return r ? a.createElement(OE, { className: "sbdocs-title sb-unstyled" }, r) : null;
}, F8 = ({ children: e }) => {
  let t = b.useContext(Ce), { parameters: r } = t.storyById(), n = e || (r == null ? void 0 : r.componentSubtitle);
  return n ? a.createElement(RE, { className: "sbdocs-subtitle sb-unstyled" }, n) : null;
}, D8 = ({ children: e, disableAnchor: t }) => {
  if (t || typeof e != "string")
    return a.createElement(Do, null, e);
  let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(nl, { as: "h3", id: r }, e);
}, l0 = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
  var u, s;
  let { story: l } = Vn(e || "story", ["story"]), i = ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null ? void 0 : s.withToolbar) ?? r;
  return a.createElement(Jc, { storyId: l.id }, t && a.createElement(a.Fragment, null, a.createElement(D8, null, l.name), a.createElement(Ka, { of: e })), a.createElement(t8, { of: e, withToolbar: i, story: { __forceInitialArgs: n, __primary: o }, source: { __forceInitialArgs: n } }));
}, L8 = ({ name: e }) => {
  let t = b.useContext(Ce);
  e && pe(xe`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  let r = e && t.storyIdByName(e), n = t.storyById(r);
  return n ? a.createElement(l0, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, $8 = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string")
    return a.createElement(Fo, null, e);
  let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(nl, { as: "h2", id: n, ...r }, e);
}, M8 = _($8)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), i0 = ({ title: e, includePrimary: t = !0 }) => {
  let { componentStories: r } = b.useContext(Ce), n = r().filter((o) => {
    var l, i;
    return !((i = (l = o.parameters) == null ? void 0 : l.docs) != null && i.disable);
  });
  return t || (n = n.slice(1)), !n || n.length === 0 ? null : a.createElement(a.Fragment, null, a.createElement(M8, null, e), n.map((o) => o && a.createElement(l0, { key: o.id, of: o.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
};
i0.defaultProps = { title: "Stories" };
var B8 = () => {
  let e = Vn("meta", ["meta"]), { stories: t } = e.csfFile, r = Object.keys(t).length === 1;
  return a.createElement(a.Fragment, null, a.createElement(R8, null), a.createElement(F8, null), a.createElement(Ka, { of: "meta" }), r ? a.createElement(Ka, { of: "story" }) : null, a.createElement(L8, null), a.createElement(o8, null), r ? null : a.createElement(i0, null));
};
function X8({ context: e, docsParameter: t }) {
  let r = t.container || _8, n = t.page || B8;
  return a.createElement(r, { context: e, theme: t.theme }, a.createElement(n, null));
}
var J8 = ({ of: e }) => {
  let t = b.useContext(Ce);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return a.createElement(Jc, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  s8 as A,
  l8 as C,
  X8 as D,
  je as F,
  p8 as H,
  ve as I,
  J8 as M,
  vo as S,
  Tm as T,
  tf as W,
  Te as _,
  pu as a,
  H as b,
  Qs as c,
  f8 as d,
  Cm as e,
  He as g,
  Mt as m,
  _ as n,
  W8 as s
};
