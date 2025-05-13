import { _ as ls, a as uo, b as Kt, t as Jt, d as v0, e as Oa, g as E0, f as Q, l as vl, m as x0, h as _r } from "./storybook-chunk-6E673XPF-1a765264.es.js";
import { r as h, a as El, R as a } from "./storybook-index-f2fed736.es.js";
import { g as Dn } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { r as is, R as w0 } from "./storybook-index-8cf78369.es.js";
import { O as ss, P as A0 } from "./storybook-index-83f1a828.es.js";
import { _ as Be } from "./storybook-extends-0a3e0827.es.js";
import { k as cs, l as us, m as S0, n as C0, o as k0, p as T0, _ as ds, q as ps, s as O0, r as fs, t as _0, v as R0, w as F0, x as D0, y as L0, z as $0, A as ms, B as M0, C as B0, D as gs, E as I0, F as po, G as hs, H as bs, I as P0, J as j0, K as N0, i as H0, S as xl, L as _a, b as aa } from "./storybook-index-aedbac5d.es.js";
import { e as Z0, i as Ln, a as V0, c as z0 } from "./storybook-memoize-b2d53f3a.es.js";
import { a as ys } from "./storybook-isSymbol-227578c5.es.js";
import { d as we } from "./storybook-index-398c73a4.es.js";
var Ue = (e) => `control-${e.replace(/\s+/g, "-")}`, $n = (e) => `set-${e.replace(/\s+/g, "-")}`, q0 = function(t) {
  return t();
}, vs = El["useInsertionEffect"] ? El["useInsertionEffect"] : !1, fo = vs || q0, wl = vs || h.useLayoutEffect;
function on(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Es = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, o, l) {
      function i(u, p) {
        if (!o[u]) {
          if (!n[u]) {
            var g = typeof on == "function" && on;
            if (!p && g)
              return g(u, !0);
            if (c)
              return c(u, !0);
            var d = new Error("Cannot find module '" + u + "'");
            throw d.code = "MODULE_NOT_FOUND", d;
          }
          var m = o[u] = { exports: {} };
          n[u][0].call(m.exports, function(f) {
            var b = n[u][1][f];
            return i(b || f);
          }, m, m.exports, r, n, o, l);
        }
        return o[u].exports;
      }
      for (var c = typeof on == "function" && on, s = 0; s < l.length; s++)
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
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, i))
          return this.lastItem.val;
        if (c = this.indexOf(i), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(i, c) {
        var s;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? (this.lastItem.val = c, this) : (s = this.indexOf(i), s >= 0 ? (this.lastItem = this.list[s], this.list[s].val = c, this) : (this.lastItem = { key: i, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(i) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0), c = this.indexOf(i), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(i) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? !0 : (c = this.indexOf(i), c >= 0 ? (this.lastItem = this.list[c], !0) : !1);
      }, l.prototype.forEach = function(i, c) {
        var s;
        for (s = 0; s < this.size; s++)
          i.call(c || this, this.list[s].val, this.list[s].key, this);
      }, l.prototype.indexOf = function(i) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, i))
            return c;
        return -1;
      }, l.prototype.isEqual = function(i, c) {
        return i === c || i !== i && c !== c;
      }, n.exports = l;
    }, {}], 3: [function(r, n, o) {
      var l = r("map-or-similar");
      n.exports = function(u) {
        var p = new l(!1), g = [];
        return function(d) {
          var m = function() {
            var f = p, b, y, v = arguments.length - 1, S = Array(v + 1), E = !0, x;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== v + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (x = 0; x < v; x++) {
              if (S[x] = {
                cacheItem: f,
                arg: arguments[x]
              }, f.has(arguments[x])) {
                f = f.get(arguments[x]);
                continue;
              }
              E = !1, b = new l(!1), f.set(arguments[x], b), f = b;
            }
            return E && (f.has(arguments[v]) ? y = f.get(arguments[v]) : E = !1), E || (y = d.apply(null, arguments), f.set(arguments[v], y)), u > 0 && (S[v] = {
              cacheItem: f,
              arg: arguments[v]
            }, E ? i(g, S) : g.push(S), g.length > u && c(g.shift())), m.wasMemoized = E, m.numArgs = v + 1, y;
          };
          return m.limit = u, m.wasMemoized = !1, m.cache = p, m.lru = g, m;
        };
      };
      function i(u, p) {
        var g = u.length, d = p.length, m, f, b;
        for (f = 0; f < g; f++) {
          for (m = !0, b = 0; b < d; b++)
            if (!s(u[f][b].arg, p[b].arg)) {
              m = !1;
              break;
            }
          if (m)
            break;
        }
        u.push(u.splice(f, 1)[0]);
      }
      function c(u) {
        var p = u.length, g = u[p - 1], d, m;
        for (g.cacheItem.delete(g.arg), m = p - 2; m >= 0 && (g = u[m], d = g.cacheItem.get(g.arg), !d || !d.size); m--)
          g.cacheItem.delete(g.arg);
      }
      function s(u, p) {
        return u === p || u !== u && p !== p;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(Es);
var U0 = Es.exports;
const zt = /* @__PURE__ */ Dn(U0), { logger: W0 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var G0 = uo({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, o = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, p = t ? Symbol.for("react.concurrent_mode") : 60111, g = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, f = t ? Symbol.for("react.memo") : 60115, b = t ? Symbol.for("react.lazy") : 60116, y = t ? Symbol.for("react.block") : 60121, v = t ? Symbol.for("react.fundamental") : 60117, S = t ? Symbol.for("react.responder") : 60118, E = t ? Symbol.for("react.scope") : 60119;
    function x(j) {
      return typeof j == "string" || typeof j == "function" || j === o || j === p || j === i || j === l || j === d || j === m || typeof j == "object" && j !== null && (j.$$typeof === b || j.$$typeof === f || j.$$typeof === c || j.$$typeof === s || j.$$typeof === g || j.$$typeof === v || j.$$typeof === S || j.$$typeof === E || j.$$typeof === y);
    }
    function w(j) {
      if (typeof j == "object" && j !== null) {
        var He = j.$$typeof;
        switch (He) {
          case r:
            var Ge = j.type;
            switch (Ge) {
              case u:
              case p:
              case o:
              case i:
              case l:
              case d:
                return Ge;
              default:
                var Ot = Ge && Ge.$$typeof;
                switch (Ot) {
                  case s:
                  case g:
                  case b:
                  case f:
                  case c:
                    return Ot;
                  default:
                    return He;
                }
            }
          case n:
            return He;
        }
      }
    }
    var A = u, k = p, T = s, R = c, C = r, _ = g, D = o, F = b, $ = f, L = n, M = i, I = l, H = d, B = !1;
    function N(j) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || w(j) === u;
    }
    function G(j) {
      return w(j) === p;
    }
    function J(j) {
      return w(j) === s;
    }
    function Y(j) {
      return w(j) === c;
    }
    function z(j) {
      return typeof j == "object" && j !== null && j.$$typeof === r;
    }
    function P(j) {
      return w(j) === g;
    }
    function W(j) {
      return w(j) === o;
    }
    function U(j) {
      return w(j) === b;
    }
    function oe(j) {
      return w(j) === f;
    }
    function te(j) {
      return w(j) === n;
    }
    function dt(j) {
      return w(j) === i;
    }
    function De(j) {
      return w(j) === l;
    }
    function We(j) {
      return w(j) === d;
    }
    e.AsyncMode = A, e.ConcurrentMode = k, e.ContextConsumer = T, e.ContextProvider = R, e.Element = C, e.ForwardRef = _, e.Fragment = D, e.Lazy = F, e.Memo = $, e.Portal = L, e.Profiler = M, e.StrictMode = I, e.Suspense = H, e.isAsyncMode = N, e.isConcurrentMode = G, e.isContextConsumer = J, e.isContextProvider = Y, e.isElement = z, e.isForwardRef = P, e.isFragment = W, e.isLazy = U, e.isMemo = oe, e.isPortal = te, e.isProfiler = dt, e.isStrictMode = De, e.isSuspense = We, e.isValidElementType = x, e.typeOf = w;
  })();
} }), Y0 = uo({ "../../node_modules/react-is/index.js"(e, t) {
  t.exports = G0();
} }), xs = uo({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
  var r = Y0(), n = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, c = {};
  c[r.ForwardRef] = l, c[r.Memo] = i;
  function s(y) {
    return r.isMemo(y) ? i : c[y.$$typeof] || n;
  }
  var u = Object.defineProperty, p = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, f = Object.prototype;
  function b(y, v, S) {
    if (typeof v != "string") {
      if (f) {
        var E = m(v);
        E && E !== f && b(y, E, S);
      }
      var x = p(v);
      g && (x = x.concat(g(v)));
      for (var w = s(y), A = s(v), k = 0; k < x.length; ++k) {
        var T = x[k];
        if (!o[T] && !(S && S[T]) && !(A && A[T]) && !(w && w[T])) {
          var R = d(v, T);
          try {
            u(y, T, R);
          } catch {
          }
        }
      }
    }
    return y;
  }
  t.exports = b;
} });
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
function mo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var K0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, X0 = mo(function(e) {
  return K0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function J0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Q0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ed = function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Q0(this));
    var n = this.tags[this.tags.length - 1], o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
    if (o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o, this.isSpeedy) {
      var l = J0(n);
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
}(), ye = "-ms-", Sn = "-moz-", K = "-webkit-", go = "comm", ho = "rule", bo = "decl", td = "@import", ws = "@keyframes", rd = "@layer", nd = Math.abs, Mn = String.fromCharCode, ad = Object.assign;
function od(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function As(e) {
  return e.trim();
}
function ld(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function Fa(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, r) {
  return e.slice(t, r);
}
function rt(e) {
  return e.length;
}
function yo(e) {
  return e.length;
}
function ln(e, t) {
  return t.push(e), e;
}
function id(e, t) {
  return e.map(t).join("");
}
var Bn = 1, rr = 1, Ss = 0, Ce = 0, ie = 0, fr = "";
function In(e, t, r, n, o, l, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: l, line: Bn, column: rr, length: i, return: "" };
}
function Ar(e, t) {
  return ad(In("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sd() {
  return ie;
}
function cd() {
  return ie = Ce > 0 ? fe(fr, --Ce) : 0, rr--, ie === 10 && (rr = 1, Bn--), ie;
}
function Te() {
  return ie = Ce < Ss ? fe(fr, Ce++) : 0, rr++, ie === 10 && (rr = 1, Bn++), ie;
}
function st() {
  return fe(fr, Ce);
}
function gn() {
  return Ce;
}
function Wr(e, t) {
  return Lr(fr, e, t);
}
function $r(e) {
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
function Cs(e) {
  return Bn = rr = 1, Ss = rt(fr = e), Ce = 0, [];
}
function ks(e) {
  return fr = "", e;
}
function hn(e) {
  return As(Wr(Ce - 1, Da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ud(e) {
  for (; (ie = st()) && ie < 33; )
    Te();
  return $r(e) > 2 || $r(ie) > 3 ? "" : " ";
}
function dd(e, t) {
  for (; --t && Te() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return Wr(e, gn() + (t < 6 && st() == 32 && Te() == 32));
}
function Da(e) {
  for (; Te(); )
    switch (ie) {
      case e:
        return Ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Da(ie);
        break;
      case 40:
        e === 41 && Da(e);
        break;
      case 92:
        Te();
        break;
    }
  return Ce;
}
function pd(e, t) {
  for (; Te() && e + ie !== 47 + 10 && !(e + ie === 42 + 42 && st() === 47); )
    ;
  return "/*" + Wr(t, Ce - 1) + "*" + Mn(e === 47 ? e : Te());
}
function fd(e) {
  for (; !$r(st()); )
    Te();
  return Wr(e, Ce);
}
function md(e) {
  return ks(bn("", null, null, null, [""], e = Cs(e), 0, [0], e));
}
function bn(e, t, r, n, o, l, i, c, s) {
  for (var u = 0, p = 0, g = i, d = 0, m = 0, f = 0, b = 1, y = 1, v = 1, S = 0, E = "", x = o, w = l, A = n, k = E; y; )
    switch (f = S, S = Te()) {
      case 40:
        if (f != 108 && fe(k, g - 1) == 58) {
          Fa(k += X(hn(S), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += hn(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += ud(f);
        break;
      case 92:
        k += dd(gn() - 1, 7);
        continue;
      case 47:
        switch (st()) {
          case 42:
          case 47:
            ln(gd(pd(Te(), gn()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * b:
        c[u++] = rt(k) * v;
      case 125 * b:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            y = 0;
          case 59 + p:
            v == -1 && (k = X(k, /\f/g, "")), m > 0 && rt(k) - g && ln(m > 32 ? Sl(k + ";", n, r, g - 1) : Sl(X(k, " ", "") + ";", n, r, g - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (ln(A = Al(k, t, r, u, p, o, c, E, x = [], w = [], g), l), S === 123)
              if (p === 0)
                bn(k, t, A, A, x, l, g, c, w);
              else
                switch (d === 99 && fe(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bn(e, A, A, n && ln(Al(e, A, A, 0, 0, o, c, E, o, x = [], g), w), o, w, g, c, n ? x : w);
                    break;
                  default:
                    bn(k, A, A, A, [""], w, 0, c, w);
                }
        }
        u = p = m = 0, b = v = 1, E = k = "", g = i;
        break;
      case 58:
        g = 1 + rt(k), m = f;
      default:
        if (b < 1) {
          if (S == 123)
            --b;
          else if (S == 125 && b++ == 0 && cd() == 125)
            continue;
        }
        switch (k += Mn(S), S * b) {
          case 38:
            v = p > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            c[u++] = (rt(k) - 1) * v, v = 1;
            break;
          case 64:
            st() === 45 && (k += hn(Te())), d = st(), p = g = rt(E = k += fd(gn())), S++;
            break;
          case 45:
            f === 45 && rt(k) == 2 && (b = 0);
        }
    }
  return l;
}
function Al(e, t, r, n, o, l, i, c, s, u, p) {
  for (var g = o - 1, d = o === 0 ? l : [""], m = yo(d), f = 0, b = 0, y = 0; f < n; ++f)
    for (var v = 0, S = Lr(e, g + 1, g = nd(b = i[f])), E = e; v < m; ++v)
      (E = As(b > 0 ? d[v] + " " + S : X(S, /&\f/g, d[v]))) && (s[y++] = E);
  return In(e, t, r, o === 0 ? ho : c, s, u, p);
}
function gd(e, t, r) {
  return In(e, t, r, go, Mn(sd()), Lr(e, 2, -2), 0);
}
function Sl(e, t, r, n) {
  return In(e, t, r, bo, Lr(e, 0, n), Lr(e, n + 1, -1), n);
}
function tr(e, t) {
  for (var r = "", n = yo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function hd(e, t, r, n) {
  switch (e.type) {
    case rd:
      if (e.children.length)
        break;
    case td:
    case bo:
      return e.return = e.return || e.value;
    case go:
      return "";
    case ws:
      return e.return = e.value + "{" + tr(e.children, n) + "}";
    case ho:
      e.value = e.props.join(",");
  }
  return rt(r = tr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function bd(e) {
  var t = yo(e);
  return function(r, n, o, l) {
    for (var i = "", c = 0; c < t; c++)
      i += e[c](r, n, o, l) || "";
    return i;
  };
}
var Cl = function(e) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (t.has(r))
      return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
}, yd = function(e, t, r) {
  for (var n = 0, o = 0; n = o, o = st(), n === 38 && o === 12 && (t[r] = 1), !$r(o); )
    Te();
  return Wr(e, Ce);
}, vd = function(e, t) {
  var r = -1, n = 44;
  do
    switch ($r(n)) {
      case 0:
        n === 38 && st() === 12 && (t[r] = 1), e[r] += yd(Ce - 1, t, r);
        break;
      case 2:
        e[r] += hn(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = st() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += Mn(n);
    }
  while (n = Te());
  return e;
}, Ed = function(e, t) {
  return ks(vd(Cs(e), t));
}, kl = /* @__PURE__ */ new WeakMap(), xd = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !kl.get(r)) && !n) {
      kl.set(e, !0);
      for (var o = [], l = Ed(t, o), i = r.props, c = 0, s = 0; c < l.length; c++)
        for (var u = 0; u < i.length; u++, s++)
          e.props[s] = o[c] ? l[c].replace(/&\f/g, i[u]) : i[u] + " " + l[c];
    }
  }
}, wd = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, Ad = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Sd = function(e) {
  return e.type === "comm" && e.children.indexOf(Ad) > -1;
}, Cd = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var l = !!t.parent, i = l ? t.parent.children : n, c = i.length - 1; c >= 0; c--) {
          var s = i[c];
          if (s.line < t.line)
            break;
          if (s.column < t.column) {
            if (Sd(s))
              return;
            break;
          }
        }
        o.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Ts = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, kd = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!Ts(t[r]))
      return !0;
  return !1;
}, Tl = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, Td = function(e, t, r) {
  Ts(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Tl(e)) : kd(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Tl(e)));
};
function Os(e, t) {
  switch (od(e, t)) {
    case 5103:
      return K + "print-" + e + e;
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
      return K + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return K + e + Sn + e + ye + e + e;
    case 6828:
    case 4268:
      return K + e + ye + e + e;
    case 6165:
      return K + e + ye + "flex-" + e + e;
    case 5187:
      return K + e + X(e, /(\w+).+(:[^]+)/, K + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return K + e + ye + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return K + e + ye + "flex-line-pack" + X(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return K + e + ye + X(e, "shrink", "negative") + e;
    case 5292:
      return K + e + ye + X(e, "basis", "preferred-size") + e;
    case 6060:
      return K + "box-" + X(e, "-grow", "") + K + e + ye + X(e, "grow", "positive") + e;
    case 4554:
      return K + X(e, /([^-])(transform)/g, "$1" + K + "$2") + e;
    case 6187:
      return X(X(X(e, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, K + "$1$`$1");
    case 4968:
      return X(X(e, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + K + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, K + "$1$2") + e;
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
        switch (fe(e, t + 1)) {
          case 109:
            if (fe(e, t + 4) !== 45)
              break;
          case 102:
            return X(e, /(.+:)(.+)-([^]+)/, "$1" + K + "$2-$3$1" + Sn + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fa(e, "stretch") ? Os(X(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, rt(e) - 3 - (~Fa(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + K) + e;
        case 101:
          return X(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + K + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + K + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return K + e + ye + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return K + e + ye + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return K + e + ye + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return K + e + ye + e + e;
  }
  return e;
}
var Od = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case bo:
        e.return = Os(e.value, e.length);
        break;
      case ws:
        return tr([Ar(e, { value: X(e.value, "@", "@" + K) })], n);
      case ho:
        if (e.length)
          return id(e.props, function(o) {
            switch (ld(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return tr([Ar(e, { props: [X(o, /:(read-\w+)/, ":" + Sn + "$1")] })], n);
              case "::placeholder":
                return tr([Ar(e, { props: [X(o, /:(plac\w+)/, ":" + K + "input-$1")] }), Ar(e, { props: [X(o, /:(plac\w+)/, ":" + Sn + "$1")] }), Ar(e, { props: [X(o, /:(plac\w+)/, ye + "input-$1")] })], n);
            }
            return "";
          });
    }
}, _d = [Od], Rd = function(e) {
  var t = e.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var b = f.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || _d;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, l, i = [];
  l = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(f) {
    for (var b = f.getAttribute("data-emotion").split(" "), y = 1; y < b.length; y++)
      o[b[y]] = !0;
    i.push(f);
  });
  var c, s = [xd, wd];
  s.push(Cd({ get compat() {
    return m.compat;
  } }), Td);
  {
    var u, p = [hd, function(f) {
      f.root || (f.return ? u.insert(f.return) : f.value && f.type !== go && u.insert(f.value + "{}"));
    }], g = bd(s.concat(n, p)), d = function(f) {
      return tr(md(f), g);
    };
    c = function(f, b, y, v) {
      u = y, b.map !== void 0 && (u = { insert: function(S) {
        y.insert(S + b.map);
      } }), d(f ? f + "{" + b.styles + "}" : b.styles), v && (m.inserted[b.name] = !0);
    };
  }
  var m = { key: t, sheet: new ed({ key: t, container: l, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: o, registered: {}, insert: c };
  return m.sheet.hydrate(i), m;
};
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(this, arguments);
}
ls(xs());
var Fd = !0;
function vo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Pn = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || Fd === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, jn = function(e, t, r) {
  Pn(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var o = t;
    do
      e.insert(t === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Dd(e) {
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
var Ld = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Ol = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, $d = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Md = /[A-Z]|^ms/g, _s = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Eo = function(e) {
  return e.charCodeAt(1) === 45;
}, _l = function(e) {
  return e != null && typeof e != "boolean";
}, oa = mo(function(e) {
  return Eo(e) ? e : e.replace(Md, "-$&").toLowerCase();
}), Cn = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(_s, function(r, n, o) {
          return nt = { name: n, styles: o, next: nt }, n;
        });
  }
  return Ld[e] !== 1 && !Eo(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
Rl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Fl = ["normal", "none", "initial", "inherit", "unset"], Dl = Cn, Ll = /^-ms-/, $l = /-(.)/g, la = {}, Cn = function(e, t) {
  if (e === "content" && (typeof t != "string" || Fl.indexOf(t) === -1 && !Rl.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var r = Dl(e, t);
  return r !== "" && !Eo(e) && e.indexOf("-") !== -1 && la[e] === void 0 && (la[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Ll, "ms-").replace($l, function(n, o) {
    return o.toUpperCase();
  }) + "?")), r;
};
var Rl, Fl, Dl, Ll, $l, la, Rs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Rs);
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
      return Bd(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = nt, i = r(e);
        return nt = l, Mr(e, t, i);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var c = [], s = r.replace(_s, function(p, g, d) {
        var m = "animation" + c.length;
        return c.push("const " + m + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + m + "}";
      });
      c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + s + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + s + "`"));
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function Bd(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Mr(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += l + "{" + t[i] + "}" : _l(i) && (n += oa(l) + ":" + Cn(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR")
          throw new Error(Rs);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var c = 0; c < i.length; c++)
            _l(i[c]) && (n += oa(l) + ":" + Cn(l, i[c]) + ";");
        else {
          var s = Mr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += oa(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error($d), n += l + "{" + s + "}";
          }
        }
      }
    }
  return n;
}
var Ml = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Fs;
Fs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var nt, nr = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  nt = void 0;
  var l = e[0];
  l == null || l.raw === void 0 ? (n = !1, o += Mr(r, t, l)) : (l[0] === void 0 && console.error(Ol), o += l[0]);
  for (var i = 1; i < e.length; i++)
    o += Mr(r, t, e[i]), n && (l[i] === void 0 && console.error(Ol), o += l[i]);
  var c;
  o = o.replace(Fs, function(g) {
    return c = g, "";
  }), Ml.lastIndex = 0;
  for (var s = "", u; (u = Ml.exec(o)) !== null; )
    s += "-" + u[1];
  var p = Dd(o) + s;
  return { name: p, styles: o, map: c, next: nt, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, Id = {}.hasOwnProperty, xo = h.createContext(typeof HTMLElement < "u" ? Rd({ key: "css" }) : null);
xo.displayName = "EmotionCacheContext";
xo.Provider;
var Nn = function(e) {
  return h.forwardRef(function(t, r) {
    var n = h.useContext(xo);
    return e(t, n, r);
  });
}, St = h.createContext({});
St.displayName = "EmotionThemeContext";
var Pd = function() {
  return h.useContext(St);
}, jd = function(e, t) {
  if (typeof t == "function") {
    var r = t(e);
    if (r == null || typeof r != "object" || Array.isArray(r))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return r;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return La({}, e, t);
}, Nd = Cl(function(e) {
  return Cl(function(t) {
    return jd(e, t);
  });
}), Ds = function(e) {
  var t = h.useContext(St);
  return e.theme !== t && (t = Nd(t)(e.theme)), h.createElement(St.Provider, { value: t }, e.children);
}, Bl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Il = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Hd = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return Pn(t, r, n), fo(function() {
    return jn(t, r, n);
  }), null;
}, Zd = Nn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Bl], l = [n], i = "";
  typeof e.className == "string" ? i = vo(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var c = nr(l, void 0, h.useContext(St));
  if (c.name.indexOf("-") === -1) {
    var s = e[Il];
    s && (c = nr([c, "label:" + s + ";"]));
  }
  i += t.key + "-" + c.name;
  var u = {};
  for (var p in e)
    Id.call(e, p) && p !== "css" && p !== Bl && p !== Il && (u[p] = e[p]);
  return u.ref = r, u.className = i, h.createElement(h.Fragment, null, h.createElement(Hd, { cache: t, serialized: c, isStringTag: typeof o == "string" }), h.createElement(o, u));
});
Zd.displayName = "EmotionCssPropInternal";
ls(xs());
var Vd = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, Pl = !1, zd = Nn(function(e, t) {
  !Pl && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Pl = !0);
  var r = e.styles, n = nr([r], void 0, h.useContext(St)), o = h.useRef();
  return wl(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({ key: l, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), c = !1, s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (c = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, c], function() {
      i.flush();
    };
  }, [t]), wl(function() {
    var l = o.current, i = l[0], c = l[1];
    if (c) {
      l[1] = !1;
      return;
    }
    if (n.next !== void 0 && jn(t, n.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
zd.displayName = "EmotionGlobal";
function wo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return nr(t);
}
var mr = function() {
  var e = wo.apply(void 0, arguments), t = "animation-" + e.name;
  return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, qd = function e(t) {
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
            for (var c in l)
              l[c] && c && (i && (i += " "), i += c);
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
function Ud(e, t, r) {
  var n = [], o = vo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Wd = function(e) {
  var t = e.cache, r = e.serializedArr;
  return fo(function() {
    for (var n = 0; n < r.length; n++)
      jn(t, r[n], !1);
  }), null;
}, Gd = Nn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r)
      throw new Error("css can only be used during render");
    for (var s = arguments.length, u = new Array(s), p = 0; p < s; p++)
      u[p] = arguments[p];
    var g = nr(u, t.registered);
    return n.push(g), Pn(t, g, !1), t.key + "-" + g.name;
  }, l = function() {
    if (r)
      throw new Error("cx can only be used during render");
    for (var s = arguments.length, u = new Array(s), p = 0; p < s; p++)
      u[p] = arguments[p];
    return Ud(t.registered, o, qd(u));
  }, i = { css: o, cx: l, theme: h.useContext(St) }, c = e.children(i);
  return r = !0, h.createElement(h.Fragment, null, h.createElement(Wd, { cache: t, serializedArr: n }), c);
});
Gd.displayName = "EmotionClassNames";
ia = !0, jl = typeof jest < "u" || typeof vi < "u", ia && !jl && (sa = typeof globalThis < "u" ? globalThis : ia ? window : global, ca = "__EMOTION_REACT_" + Vd.version.split(".")[0] + "__", sa[ca] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), sa[ca] = !0);
var ia, jl, sa, ca, Yd = X0, Kd = function(e) {
  return e !== "theme";
}, Nl = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? Yd : Kd;
}, Hl = function(e, t, r) {
  var n;
  if (t) {
    var o = t.shouldForwardProp;
    n = e.__emotion_forwardProp && o ? function(l) {
      return e.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
}, Zl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Xd = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return Pn(t, r, n), fo(function() {
    return jn(t, r, n);
  }), null;
}, Jd = function e(t, r) {
  if (t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, l, i;
  r !== void 0 && (l = r.label, i = r.target);
  var c = Hl(t, r, n), s = c || Nl(o), u = !s("as");
  return function() {
    var p = arguments, g = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && g.push("label:" + l + ";"), p[0] == null || p[0].raw === void 0)
      g.push.apply(g, p);
    else {
      p[0][0] === void 0 && console.error(Zl), g.push(p[0][0]);
      for (var d = p.length, m = 1; m < d; m++)
        p[0][m] === void 0 && console.error(Zl), g.push(p[m], p[0][m]);
    }
    var f = Nn(function(b, y, v) {
      var S = u && b.as || o, E = "", x = [], w = b;
      if (b.theme == null) {
        w = {};
        for (var A in b)
          w[A] = b[A];
        w.theme = h.useContext(St);
      }
      typeof b.className == "string" ? E = vo(y.registered, x, b.className) : b.className != null && (E = b.className + " ");
      var k = nr(g.concat(x), y.registered, w);
      E += y.key + "-" + k.name, i !== void 0 && (E += " " + i);
      var T = u && c === void 0 ? Nl(S) : s, R = {};
      for (var C in b)
        u && C === "as" || T(C) && (R[C] = b[C]);
      return R.className = E, R.ref = v, h.createElement(h.Fragment, null, h.createElement(Xd, { cache: y, serialized: k, isStringTag: typeof S == "string" }), h.createElement(S, R));
    });
    return f.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = g, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", { value: function() {
      return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
    } }), f.withComponent = function(b, y) {
      return e(b, Ra({}, r, y, { shouldForwardProp: Hl(f, y, !0) })).apply(void 0, g);
    }, f;
  };
}, Qd = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], O = Jd.bind();
Qd.forEach(function(e) {
  O[e] = O(e);
});
var e1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ls = mo(function(e) {
  return e1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), t1 = zt(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
zt(1)(({ color: e, background: t, typography: r }) => {
  let n = t1({ typography: r });
  return { ...n, body: { ...n.body, color: e.defaultText, background: t.app, overflow: "hidden" }, hr: { ...n.hr, borderTop: `1px solid ${e.border}` } };
});
var r1 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, n1 = mr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, $s = mr`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, a1 = mr`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, o1 = mr`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, l1 = wo`
  animation: ${$s} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, i1 = wo`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, s1 = { rotate360: n1, glow: $s, float: a1, jiggle: o1, inlineGlow: l1, hoverable: i1 }, c1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, u1 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, d1 = (e) => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: x0(n) }), {}), p1 = ({ colors: e, mono: t }) => {
  let r = d1(e);
  return { token: { fontFamily: t, WebkitFontSmoothing: "antialiased", "&.tag": r.red3, "&.comment": { ...r.green1, fontStyle: "italic" }, "&.prolog": { ...r.green1, fontStyle: "italic" }, "&.doctype": { ...r.green1, fontStyle: "italic" }, "&.cdata": { ...r.green1, fontStyle: "italic" }, "&.string": r.red1, "&.url": r.cyan1, "&.symbol": r.cyan1, "&.number": r.cyan1, "&.boolean": r.cyan1, "&.variable": r.cyan1, "&.constant": r.cyan1, "&.inserted": r.cyan1, "&.atrule": r.blue1, "&.keyword": r.blue1, "&.attr-value": r.blue1, "&.punctuation": r.gray1, "&.operator": r.gray1, "&.function": r.gray1, "&.deleted": r.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": r.cyan2, "&.selector": r.red3, "&.attr-name": r.red4, "&.property": r.red4, "&.regex": r.red4, "&.entity": r.red4, "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 } }, "language-json .token.boolean": r.blue1, "language-json .token.number": r.blue1, "language-json .token.property": r.cyan2, namespace: { opacity: 0.7 } };
}, f1 = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, m1 = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, g1 = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: Q.tertiary, ancillary: Q.ancillary, orange: Q.orange, gold: Q.gold, green: Q.green, seafoam: Q.seafoam, purple: Q.purple, ultraviolet: Q.ultraviolet, lightest: Q.lightest, lighter: Q.lighter, light: Q.light, mediumlight: Q.mediumlight, medium: Q.medium, mediumdark: Q.mediumdark, dark: Q.dark, darker: Q.darker, darkest: Q.darkest, border: Q.border, positive: Q.positive, negative: Q.negative, warning: Q.warning, critical: Q.critical, defaultText: e.textColor || Q.darkest, inverseText: e.textInverseColor || Q.lightest, positiveText: Q.positiveText, negativeText: Q.negativeText, warningText: Q.warningText }), $a = (e = Oa[E0()]) => {
  let { base: t, colorPrimary: r, colorSecondary: n, appBg: o, appContentBg: l, appPreviewBg: i, appBorderColor: c, appBorderRadius: s, fontBase: u, fontCode: p, textColor: g, textInverseColor: d, barTextColor: m, barHoverColor: f, barSelectedColor: b, barBg: y, buttonBg: v, buttonBorder: S, booleanBg: E, booleanSelectedBg: x, inputBg: w, inputBorder: A, inputTextColor: k, inputBorderRadius: T, brandTitle: R, brandUrl: C, brandImage: _, brandTarget: D, gridCellSize: F, ...$ } = e;
  return { ...$, base: t, color: g1(e), background: { app: o, bar: y, content: l, preview: i, gridCellSize: F || Kt.gridCellSize, hoverable: Kt.hoverable, positive: Kt.positive, negative: Kt.negative, warning: Kt.warning, critical: Kt.critical }, typography: { fonts: { base: u, mono: p }, weight: Jt.weight, size: Jt.size }, animation: s1, easing: r1, input: { background: w, border: A, borderRadius: T, color: k }, button: { background: v || w, border: S || A }, boolean: { background: E || A, selectedBackground: x || w }, layoutMargin: 10, appBorderColor: c, appBorderRadius: s, barTextColor: m, barHoverColor: f || n, barSelectedColor: b || n, barBg: y, brand: { title: R, url: C, image: _ || (R ? null : void 0), target: D }, code: p1({ colors: t === "light" ? f1 : m1, mono: p }), addonActionsTheme: { ...t === "light" ? u1 : c1, BASE_FONT_FAMILY: p, BASE_FONT_SIZE: Jt.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: g, ARROW_COLOR: v0(0.2, c), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: p, TREENODE_FONT_SIZE: Jt.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, h1 = (e) => Object.keys(e).length === 0, ua = (e) => e != null && typeof e == "object", b1 = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t), y1 = () => /* @__PURE__ */ Object.create(null), Ms = (e, t) => e === t || !ua(e) || !ua(t) ? {} : Object.keys(e).reduce((r, n) => {
  if (b1(t, n)) {
    let o = Ms(e[n], t[n]);
    return ua(o) && h1(o) || (r[n] = o), r;
  }
  return r[n] = void 0, r;
}, y1()), v1 = Ms;
function E1(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(c, s) {
    var u = s.match(/\n([\t ]+|(?!\s).)/g);
    return u ? c.concat(u.map(function(p) {
      var g, d;
      return (d = (g = p.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && d !== void 0 ? d : 0;
    })) : c;
  }, []);
  if (o.length) {
    var l = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    n = n.map(function(c) {
      return c.replace(l, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return t.forEach(function(c, s) {
    var u = i.match(/(?:^|\n)( *)$/), p = u ? u[1] : "", g = c;
    typeof c == "string" && c.includes(`
`) && (g = String(c).split(`
`).map(function(d, m) {
      return m === 0 ? d : "" + p + d;
    }).join(`
`)), i += g + n[s + 1];
  }), i;
}
var x1 = (e) => {
  if (!e)
    return $a(vl);
  let t = v1(vl, e);
  return Object.keys(t).length && W0.warn(E1`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, t), $a(e);
}, Ma = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", w1 = Object.create, Bs = Object.defineProperty, A1 = Object.getOwnPropertyDescriptor, Is = Object.getOwnPropertyNames, S1 = Object.getPrototypeOf, C1 = Object.prototype.hasOwnProperty, V = (e, t) => function() {
  return t || (0, e[Is(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, k1 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Is(t))
      !C1.call(e, o) && o !== r && Bs(e, o, { get: () => t[o], enumerable: !(n = A1(t, o)) || n.enumerable });
  return e;
}, _e = (e, t, r) => (r = e != null ? w1(S1(e)) : {}, k1(t || !e || !e.__esModule ? Bs(r, "default", { value: e, enumerable: !0 }) : r, e)), T1 = V({ "../../node_modules/refractor/lang/markdown.js"(e, t) {
  t.exports = r, r.displayName = "markdown", r.aliases = ["md"];
  function r(n) {
    (function(o) {
      var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function i(f) {
        return f = f.replace(/<inner>/g, function() {
          return l;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + f + ")");
      }
      var c = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return c;
      }), u = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      o.languages.markdown = o.languages.extend("markup", {}), o.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: o.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + s + u + "(?:" + s + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + s + u + ")(?:" + s + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(c), inside: o.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + s + ")" + u + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + s + "$"), inside: { "table-header": { pattern: RegExp(c), alias: "important", inside: o.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: i(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: i(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: i(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(f) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(b) {
          f !== b && (o.languages.markdown[f].inside.content.inside[b] = o.languages.markdown[b]);
        });
      }), o.hooks.add("after-tokenize", function(f) {
        if (f.language !== "markdown" && f.language !== "md")
          return;
        function b(y) {
          if (!(!y || typeof y == "string"))
            for (var v = 0, S = y.length; v < S; v++) {
              var E = y[v];
              if (E.type !== "code") {
                b(E.content);
                continue;
              }
              var x = E.content[1], w = E.content[3];
              if (x && w && x.type === "code-language" && w.type === "code-block" && typeof x.content == "string") {
                var A = x.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                A = (/[a-z][\w-]*/i.exec(A) || [""])[0].toLowerCase();
                var k = "language-" + A;
                w.alias ? typeof w.alias == "string" ? w.alias = [w.alias, k] : w.alias.push(k) : w.alias = [k];
              }
            }
        }
        b(f.tokens);
      }), o.hooks.add("wrap", function(f) {
        if (f.type === "code-block") {
          for (var b = "", y = 0, v = f.classes.length; y < v; y++) {
            var S = f.classes[y], E = /language-(.+)/.exec(S);
            if (E) {
              b = E[1];
              break;
            }
          }
          var x = o.languages[b];
          if (x)
            f.content = o.highlight(m(f.content.value), x, b);
          else if (b && b !== "none" && o.plugins.autoloader) {
            var w = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            f.attributes.id = w, o.plugins.autoloader.loadLanguages(b, function() {
              var A = document.getElementById(w);
              A && (A.innerHTML = o.highlight(A.textContent, o.languages[b], b));
            });
          }
        }
      });
      var p = RegExp(o.languages.markup.tag.pattern.source, "gi"), g = { amp: "&", lt: "<", gt: ">", quot: '"' }, d = String.fromCodePoint || String.fromCharCode;
      function m(f) {
        var b = f.replace(p, "");
        return b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(y, v) {
          if (v = v.toLowerCase(), v[0] === "#") {
            var S;
            return v[1] === "x" ? S = parseInt(v.slice(2), 16) : S = Number(v.slice(1)), d(S);
          } else {
            var E = g[v];
            return E || y;
          }
        }), b;
      }
      o.languages.md = o.languages.markdown;
    })(n);
  }
} }), O1 = V({ "../../node_modules/refractor/lang/yaml.js"(e, t) {
  t.exports = r, r.displayName = "yaml", r.aliases = ["yml"];
  function r(n) {
    (function(o) {
      var l = /[*&][^\s[\]{},]+/, i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, c = "(?:" + i.source + "(?:[ 	]+" + l.source + ")?|" + l.source + "(?:[ 	]+" + i.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), u = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function p(g, d) {
        d = (d || "").replace(/m/g, "") + "m";
        var m = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return c;
        }).replace(/<<value>>/g, function() {
          return g;
        });
        return RegExp(m, d);
      }
      o.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return c;
      })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return c;
      }).replace(/<<key>>/g, function() {
        return "(?:" + s + "|" + u + ")";
      })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: p(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: p(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: p(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: p(u), lookbehind: !0, greedy: !0 }, number: { pattern: p(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: i, important: l, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, o.languages.yml = o.languages.yaml;
    })(n);
  }
} }), Ps = V({ "../../node_modules/refractor/lang/typescript.js"(e, t) {
  t.exports = r, r.displayName = "typescript", r.aliases = ["ts"];
  function r(n) {
    (function(o) {
      o.languages.typescript = o.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), o.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete o.languages.typescript.parameter, delete o.languages.typescript["literal-property"];
      var l = o.languages.extend("typescript", {});
      delete l["class-name"], o.languages.typescript["class-name"].inside = l, o.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: l } } } }), o.languages.ts = o.languages.typescript;
    })(n);
  }
} }), js = V({ "../../node_modules/refractor/lang/jsx.js"(e, t) {
  t.exports = r, r.displayName = "jsx", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = o.util.clone(o.languages.javascript), i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, c = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function u(d, m) {
        return d = d.replace(/<S>/g, function() {
          return i;
        }).replace(/<BRACES>/g, function() {
          return c;
        }).replace(/<SPREAD>/g, function() {
          return s;
        }), RegExp(d, m);
      }
      s = u(s).source, o.languages.jsx = o.languages.extend("markup", l), o.languages.jsx.tag.pattern = u(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, o.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, o.languages.jsx.tag.inside.comment = l.comment, o.languages.insertBefore("inside", "attr-name", { spread: { pattern: u(/<SPREAD>/.source), inside: o.languages.jsx } }, o.languages.jsx.tag), o.languages.insertBefore("inside", "special-attr", { script: { pattern: u(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: o.languages.jsx } } }, o.languages.jsx.tag);
      var p = function(d) {
        return d ? typeof d == "string" ? d : typeof d.content == "string" ? d.content : d.content.map(p).join("") : "";
      }, g = function(d) {
        for (var m = [], f = 0; f < d.length; f++) {
          var b = d[f], y = !1;
          if (typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? m.length > 0 && m[m.length - 1].tagName === p(b.content[0].content[1]) && m.pop() : b.content[b.content.length - 1].content === "/>" || m.push({ tagName: p(b.content[0].content[1]), openedBraces: 0 }) : m.length > 0 && b.type === "punctuation" && b.content === "{" ? m[m.length - 1].openedBraces++ : m.length > 0 && m[m.length - 1].openedBraces > 0 && b.type === "punctuation" && b.content === "}" ? m[m.length - 1].openedBraces-- : y = !0), (y || typeof b == "string") && m.length > 0 && m[m.length - 1].openedBraces === 0) {
            var v = p(b);
            f < d.length - 1 && (typeof d[f + 1] == "string" || d[f + 1].type === "plain-text") && (v += p(d[f + 1]), d.splice(f + 1, 1)), f > 0 && (typeof d[f - 1] == "string" || d[f - 1].type === "plain-text") && (v = p(d[f - 1]) + v, d.splice(f - 1, 1), f--), d[f] = new o.Token("plain-text", v, null, v);
          }
          b.content && typeof b.content != "string" && g(b.content);
        }
      };
      o.hooks.add("after-tokenize", function(d) {
        d.language !== "jsx" && d.language !== "tsx" || g(d.tokens);
      });
    })(n);
  }
} }), _1 = V({ "../../node_modules/refractor/lang/tsx.js"(e, t) {
  var r = js(), n = Ps();
  t.exports = o, o.displayName = "tsx", o.aliases = [];
  function o(l) {
    l.register(r), l.register(n), function(i) {
      var c = i.util.clone(i.languages.typescript);
      i.languages.tsx = i.languages.extend("jsx", c), delete i.languages.tsx.parameter, delete i.languages.tsx["literal-property"];
      var s = i.languages.tsx.tag;
      s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")", s.pattern.flags), s.lookbehind = !0;
    }(l);
  }
} }), R1 = V({ "../../node_modules/refractor/lang/clike.js"(e, t) {
  t.exports = r, r.displayName = "clike", r.aliases = [];
  function r(n) {
    n.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), F1 = V({ "../../node_modules/refractor/lang/javascript.js"(e, t) {
  t.exports = r, r.displayName = "javascript", r.aliases = ["js"];
  function r(n) {
    n.languages.javascript = n.languages.extend("clike", { "class-name": [n.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: n.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: n.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), n.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: n.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), n.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript;
  }
} }), Ns = V({ "../../node_modules/refractor/lang/css.js"(e, t) {
  t.exports = r, r.displayName = "css", r.aliases = [];
  function r(n) {
    (function(o) {
      var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      o.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + l.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: l, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, o.languages.css.atrule.inside.rest = o.languages.css;
      var i = o.languages.markup;
      i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
    })(n);
  }
} }), Hs = V({ "../../node_modules/refractor/lang/markup.js"(e, t) {
  t.exports = r, r.displayName = "markup", r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function r(n) {
    n.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(o) {
      o.type === "entity" && (o.attributes.title = o.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(o, l) {
      var i = {};
      i["language-" + l] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: n.languages[l] }, i.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var c = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i } };
      c["language-" + l] = { pattern: /[\s\S]+/, inside: n.languages[l] };
      var s = {};
      s[o] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return o;
      }), "i"), lookbehind: !0, greedy: !0, inside: c }, n.languages.insertBefore("markup", "cdata", s);
    } }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(o, l) {
      n.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + o + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [l, "language-" + l], inside: n.languages[l] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml;
  }
} }), D1 = V({ "../../node_modules/xtend/immutable.js"(e, t) {
  t.exports = n;
  var r = Object.prototype.hasOwnProperty;
  function n() {
    for (var o = {}, l = 0; l < arguments.length; l++) {
      var i = arguments[l];
      for (var c in i)
        r.call(i, c) && (o[c] = i[c]);
    }
    return o;
  }
} }), Zs = V({ "../../node_modules/property-information/lib/util/schema.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.normal = {}, r.property = {};
  function n(o, l, i) {
    this.property = o, this.normal = l, i && (this.space = i);
  }
} }), L1 = V({ "../../node_modules/property-information/lib/util/merge.js"(e, t) {
  var r = D1(), n = Zs();
  t.exports = o;
  function o(l) {
    for (var i = l.length, c = [], s = [], u = -1, p, g; ++u < i; )
      p = l[u], c.push(p.property), s.push(p.normal), g = p.space;
    return new n(r.apply(null, c), r.apply(null, s), g);
  }
} }), Ao = V({ "../../node_modules/property-information/normalize.js"(e, t) {
  t.exports = r;
  function r(n) {
    return n.toLowerCase();
  }
} }), Vs = V({ "../../node_modules/property-information/lib/util/info.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1;
  function n(o, l) {
    this.property = o, this.attribute = l;
  }
} }), So = V({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var t = 0;
  e.boolean = r(), e.booleanish = r(), e.overloadedBoolean = r(), e.number = r(), e.spaceSeparated = r(), e.commaSeparated = r(), e.commaOrSpaceSeparated = r();
  function r() {
    return Math.pow(2, ++t);
  }
} }), zs = V({ "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
  var r = Vs(), n = So();
  t.exports = i, i.prototype = new r(), i.prototype.defined = !0;
  var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], l = o.length;
  function i(s, u, p, g) {
    var d = -1, m;
    for (c(this, "space", g), r.call(this, s, u); ++d < l; )
      m = o[d], c(this, m, (p & n[m]) === n[m]);
  }
  function c(s, u, p) {
    p && (s[u] = p);
  }
} }), Gr = V({ "../../node_modules/property-information/lib/util/create.js"(e, t) {
  var r = Ao(), n = Zs(), o = zs();
  t.exports = l;
  function l(i) {
    var c = i.space, s = i.mustUseProperty || [], u = i.attributes || {}, p = i.properties, g = i.transform, d = {}, m = {}, f, b;
    for (f in p)
      b = new o(f, g(u, f), p[f], c), s.indexOf(f) !== -1 && (b.mustUseProperty = !0), d[f] = b, m[r(f)] = f, m[r(b.attribute)] = f;
    return new n(d, m, c);
  }
} }), $1 = V({ "../../node_modules/property-information/lib/xlink.js"(e, t) {
  var r = Gr();
  t.exports = r({ space: "xlink", transform: n, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function n(o, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  }
} }), M1 = V({ "../../node_modules/property-information/lib/xml.js"(e, t) {
  var r = Gr();
  t.exports = r({ space: "xml", transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function n(o, l) {
    return "xml:" + l.slice(3).toLowerCase();
  }
} }), B1 = V({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, t) {
  t.exports = r;
  function r(n, o) {
    return o in n ? n[o] : o;
  }
} }), qs = V({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, t) {
  var r = B1();
  t.exports = n;
  function n(o, l) {
    return r(o, l.toLowerCase());
  }
} }), I1 = V({ "../../node_modules/property-information/lib/xmlns.js"(e, t) {
  var r = Gr(), n = qs();
  t.exports = r({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: n, properties: { xmlns: null, xmlnsXLink: null } });
} }), P1 = V({ "../../node_modules/property-information/lib/aria.js"(e, t) {
  var r = So(), n = Gr(), o = r.booleanish, l = r.number, i = r.spaceSeparated;
  t.exports = n({ transform: c, properties: { ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: l, ariaColIndex: l, ariaColSpan: l, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: o, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: i, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: i, ariaRowCount: l, ariaRowIndex: l, ariaRowSpan: l, ariaSelected: o, ariaSetSize: l, ariaSort: null, ariaValueMax: l, ariaValueMin: l, ariaValueNow: l, ariaValueText: null, role: null } });
  function c(s, u) {
    return u === "role" ? u : "aria-" + u.slice(4).toLowerCase();
  }
} }), j1 = V({ "../../node_modules/property-information/lib/html.js"(e, t) {
  var r = So(), n = Gr(), o = qs(), l = r.boolean, i = r.overloadedBoolean, c = r.booleanish, s = r.number, u = r.spaceSeparated, p = r.commaSeparated;
  t.exports = n({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: p, acceptCharset: u, accessKey: u, action: null, allow: null, allowFullScreen: l, allowPaymentRequest: l, allowUserMedia: l, alt: null, as: null, async: l, autoCapitalize: null, autoComplete: u, autoFocus: l, autoPlay: l, capture: l, charSet: null, checked: l, cite: null, className: u, cols: s, colSpan: null, content: null, contentEditable: c, controls: l, controlsList: u, coords: s | p, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l, defer: l, dir: null, dirName: null, disabled: l, download: i, draggable: c, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l, formTarget: null, headers: u, height: s, hidden: l, high: s, href: null, hrefLang: null, htmlFor: u, httpEquiv: u, id: null, imageSizes: null, imageSrcSet: p, inputMode: null, integrity: null, is: null, isMap: l, itemId: null, itemProp: u, itemRef: u, itemScope: l, itemType: u, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l, low: s, manifest: null, max: null, maxLength: s, media: null, method: null, min: null, minLength: s, multiple: l, muted: l, name: null, nonce: null, noModule: l, noValidate: l, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l, optimum: s, pattern: null, ping: u, placeholder: null, playsInline: l, poster: null, preload: null, readOnly: l, referrerPolicy: null, rel: u, required: l, reversed: l, rows: s, rowSpan: s, sandbox: u, scope: null, scoped: l, seamless: l, selected: l, shape: null, size: s, sizes: null, slot: null, span: s, spellCheck: c, src: null, srcDoc: null, srcLang: null, srcSet: p, start: s, step: null, style: null, tabIndex: s, target: null, title: null, translate: null, type: null, typeMustMatch: l, useMap: null, value: c, width: s, wrap: null, align: null, aLink: null, archive: u, axis: null, background: null, bgColor: null, border: s, borderColor: null, bottomMargin: s, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l, declare: l, event: null, face: null, frame: null, frameBorder: null, hSpace: s, leftMargin: s, link: null, longDesc: null, lowSrc: null, marginHeight: s, marginWidth: s, noResize: l, noHref: l, noShade: l, noWrap: l, object: null, profile: null, prompt: null, rev: null, rightMargin: s, rules: null, scheme: null, scrolling: c, standby: null, summary: null, text: null, topMargin: s, valueType: null, version: null, vAlign: null, vLink: null, vSpace: s, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l, disableRemotePlayback: l, prefix: null, property: null, results: s, security: null, unselectable: null } });
} }), N1 = V({ "../../node_modules/property-information/html.js"(e, t) {
  var r = L1(), n = $1(), o = M1(), l = I1(), i = P1(), c = j1();
  t.exports = r([o, n, l, i, c]);
} }), H1 = V({ "../../node_modules/property-information/find.js"(e, t) {
  var r = Ao(), n = zs(), o = Vs(), l = "data";
  t.exports = u;
  var i = /^data[-\w.:]+$/i, c = /-[a-z]/g, s = /[A-Z]/g;
  function u(f, b) {
    var y = r(b), v = b, S = o;
    return y in f.normal ? f.property[f.normal[y]] : (y.length > 4 && y.slice(0, 4) === l && i.test(b) && (b.charAt(4) === "-" ? v = p(b) : b = g(b), S = n), new S(v, b));
  }
  function p(f) {
    var b = f.slice(5).replace(c, m);
    return l + b.charAt(0).toUpperCase() + b.slice(1);
  }
  function g(f) {
    var b = f.slice(4);
    return c.test(b) ? f : (b = b.replace(s, d), b.charAt(0) !== "-" && (b = "-" + b), l + b);
  }
  function d(f) {
    return "-" + f.toLowerCase();
  }
  function m(f) {
    return f.charAt(1).toUpperCase();
  }
} }), Z1 = V({ "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
  t.exports = n;
  var r = /[#.]/g;
  function n(o, l) {
    for (var i = o || "", c = l || "div", s = {}, u = 0, p, g, d; u < i.length; )
      r.lastIndex = u, d = r.exec(i), p = i.slice(u, d ? d.index : i.length), p && (g ? g === "#" ? s.id = p : s.className ? s.className.push(p) : s.className = [p] : c = p, u += p.length), d && (g = d[0], u++);
    return { type: "element", tagName: c, properties: s, children: [] };
  }
} }), V1 = V({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = "", r = " ", n = /[ \t\n\r\f]+/g;
  function o(i) {
    var c = String(i || t).trim();
    return c === t ? [] : c.split(n);
  }
  function l(i) {
    return i.join(r).trim();
  }
} }), z1 = V({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = o, e.stringify = l;
  var t = ",", r = " ", n = "";
  function o(i) {
    for (var c = [], s = String(i || n), u = s.indexOf(t), p = 0, g = !1, d; !g; )
      u === -1 && (u = s.length, g = !0), d = s.slice(p, u).trim(), (d || !g) && c.push(d), p = u + 1, u = s.indexOf(t, p);
    return c;
  }
  function l(i, c) {
    var s = c || {}, u = s.padLeft === !1 ? n : r, p = s.padRight ? r : n;
    return i[i.length - 1] === n && (i = i.concat(n)), i.join(p + t + u).trim();
  }
} }), q1 = V({ "../../node_modules/hastscript/factory.js"(e, t) {
  var r = H1(), n = Ao(), o = Z1(), l = V1().parse, i = z1().parse;
  t.exports = s;
  var c = {}.hasOwnProperty;
  function s(y, v, S) {
    var E = S ? b(S) : null;
    return x;
    function x(A, k) {
      var T = o(A, v), R = Array.prototype.slice.call(arguments, 2), C = T.tagName.toLowerCase(), _;
      if (T.tagName = E && c.call(E, C) ? E[C] : C, k && u(k, T) && (R.unshift(k), k = null), k)
        for (_ in k)
          w(T.properties, _, k[_]);
      return g(T.children, R), T.tagName === "template" && (T.content = { type: "root", children: T.children }, T.children = []), T;
    }
    function w(A, k, T) {
      var R, C, _;
      T == null || T !== T || (R = r(y, k), C = R.property, _ = T, typeof _ == "string" && (R.spaceSeparated ? _ = l(_) : R.commaSeparated ? _ = i(_) : R.commaOrSpaceSeparated && (_ = l(i(_).join(" ")))), C === "style" && typeof T != "string" && (_ = f(_)), C === "className" && A.className && (_ = A.className.concat(_)), A[C] = d(R, C, _));
    }
  }
  function u(y, v) {
    return typeof y == "string" || "length" in y || p(v.tagName, y);
  }
  function p(y, v) {
    var S = v.type;
    return y === "input" || !S || typeof S != "string" ? !1 : typeof v.children == "object" && "length" in v.children ? !0 : (S = S.toLowerCase(), y === "button" ? S !== "menu" && S !== "submit" && S !== "reset" && S !== "button" : "value" in v);
  }
  function g(y, v) {
    var S, E;
    if (typeof v == "string" || typeof v == "number") {
      y.push({ type: "text", value: String(v) });
      return;
    }
    if (typeof v == "object" && "length" in v) {
      for (S = -1, E = v.length; ++S < E; )
        g(y, v[S]);
      return;
    }
    if (typeof v != "object" || !("type" in v))
      throw new Error("Expected node, nodes, or string, got `" + v + "`");
    y.push(v);
  }
  function d(y, v, S) {
    var E, x, w;
    if (typeof S != "object" || !("length" in S))
      return m(y, v, S);
    for (x = S.length, E = -1, w = []; ++E < x; )
      w[E] = m(y, v, S[E]);
    return w;
  }
  function m(y, v, S) {
    var E = S;
    return y.number || y.positiveNumber ? !isNaN(E) && E !== "" && (E = Number(E)) : (y.boolean || y.overloadedBoolean) && typeof E == "string" && (E === "" || n(S) === n(v)) && (E = !0), E;
  }
  function f(y) {
    var v = [], S;
    for (S in y)
      v.push([S, y[S]].join(": "));
    return v.join("; ");
  }
  function b(y) {
    for (var v = y.length, S = -1, E = {}, x; ++S < v; )
      x = y[S], E[x.toLowerCase()] = x;
    return E;
  }
} }), U1 = V({ "../../node_modules/hastscript/html.js"(e, t) {
  var r = N1(), n = q1(), o = n(r, "div");
  o.displayName = "html", t.exports = o;
} }), W1 = V({ "../../node_modules/hastscript/index.js"(e, t) {
  t.exports = U1();
} }), G1 = V({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, t) {
  t.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), Y1 = V({ "../../node_modules/character-reference-invalid/index.json"(e, t) {
  t.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), Us = V({ "../../node_modules/is-decimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 48 && o <= 57;
  }
} }), K1 = V({ "../../node_modules/is-hexadecimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 102 || o >= 65 && o <= 70 || o >= 48 && o <= 57;
  }
} }), X1 = V({ "../../node_modules/is-alphabetical/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var o = typeof n == "string" ? n.charCodeAt(0) : n;
    return o >= 97 && o <= 122 || o >= 65 && o <= 90;
  }
} }), J1 = V({ "../../node_modules/is-alphanumerical/index.js"(e, t) {
  var r = X1(), n = Us();
  t.exports = o;
  function o(l) {
    return r(l) || n(l);
  }
} }), Q1 = V({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, t) {
  t.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), ep = V({ "../../node_modules/parse-entities/decode-entity.js"(e, t) {
  var r = Q1();
  t.exports = o;
  var n = {}.hasOwnProperty;
  function o(l) {
    return n.call(r, l) ? r[l] : !1;
  }
} }), tp = V({ "../../node_modules/parse-entities/index.js"(e, t) {
  var r = G1(), n = Y1(), o = Us(), l = K1(), i = J1(), c = ep();
  t.exports = G;
  var s = {}.hasOwnProperty, u = String.fromCharCode, p = Function.prototype, g = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, d = 9, m = 10, f = 12, b = 32, y = 38, v = 59, S = 60, E = 61, x = 35, w = 88, A = 120, k = 65533, T = "named", R = "hexadecimal", C = "decimal", _ = {};
  _[R] = 16, _[C] = 10;
  var D = {};
  D[T] = i, D[C] = o, D[R] = l;
  var F = 1, $ = 2, L = 3, M = 4, I = 5, H = 6, B = 7, N = {};
  N[F] = "Named character references must be terminated by a semicolon", N[$] = "Numeric character references must be terminated by a semicolon", N[L] = "Named character references cannot be empty", N[M] = "Numeric character references cannot be empty", N[I] = "Named character references must be known", N[H] = "Numeric character references cannot be disallowed", N[B] = "Numeric character references cannot be outside the permissible Unicode range";
  function G(P, W) {
    var U = {}, oe, te;
    W || (W = {});
    for (te in g)
      oe = W[te], U[te] = oe ?? g[te];
    return (U.position.indent || U.position.start) && (U.indent = U.position.indent || [], U.position = U.position.start), J(P, U);
  }
  function J(P, W) {
    var U = W.additional, oe = W.nonTerminated, te = W.text, dt = W.reference, De = W.warning, We = W.textContext, j = W.referenceContext, He = W.warningContext, Ge = W.position, Ot = W.indent || [], Wt = P.length, Ye = 0, rn = -1, ve = Ge.column || 1, _t = Ge.line || 1, Ke = "", Gt = [], Xe, Yt, Je, ge, Ze, de, le, Qe, nn, ra, Rt, Er, Ft, pt, gl, xr, an, et, pe;
    for (typeof U == "string" && (U = U.charCodeAt(0)), xr = wr(), Qe = De ? y0 : p, Ye--, Wt++; ++Ye < Wt; )
      if (Ze === m && (ve = Ot[rn] || 1), Ze = P.charCodeAt(Ye), Ze === y) {
        if (le = P.charCodeAt(Ye + 1), le === d || le === m || le === f || le === b || le === y || le === S || le !== le || U && le === U) {
          Ke += u(Ze), ve++;
          continue;
        }
        for (Ft = Ye + 1, Er = Ft, pe = Ft, le === x ? (pe = ++Er, le = P.charCodeAt(pe), le === w || le === A ? (pt = R, pe = ++Er) : pt = C) : pt = T, Xe = "", Rt = "", ge = "", gl = D[pt], pe--; ++pe < Wt && (le = P.charCodeAt(pe), !!gl(le)); )
          ge += u(le), pt === T && s.call(r, ge) && (Xe = ge, Rt = r[ge]);
        Je = P.charCodeAt(pe) === v, Je && (pe++, Yt = pt === T ? c(ge) : !1, Yt && (Xe = ge, Rt = Yt)), et = 1 + pe - Ft, !Je && !oe || (ge ? pt === T ? (Je && !Rt ? Qe(I, 1) : (Xe !== ge && (pe = Er + Xe.length, et = 1 + pe - Er, Je = !1), Je || (nn = Xe ? F : L, W.attribute ? (le = P.charCodeAt(pe), le === E ? (Qe(nn, et), Rt = null) : i(le) ? Rt = null : Qe(nn, et)) : Qe(nn, et))), de = Rt) : (Je || Qe($, et), de = parseInt(ge, _[pt]), Y(de) ? (Qe(B, et), de = u(k)) : de in n ? (Qe(H, et), de = n[de]) : (ra = "", z(de) && Qe(H, et), de > 65535 && (de -= 65536, ra += u(de >>> 10 | 55296), de = 56320 | de & 1023), de = ra + u(de))) : pt !== T && Qe(M, et)), de ? (hl(), xr = wr(), Ye = pe - 1, ve += pe - Ft + 1, Gt.push(de), an = wr(), an.offset++, dt && dt.call(j, de, { start: xr, end: an }, P.slice(Ft - 1, pe)), xr = an) : (ge = P.slice(Ft - 1, pe), Ke += ge, ve += ge.length, Ye = pe - 1);
      } else
        Ze === 10 && (_t++, rn++, ve = 0), Ze === Ze ? (Ke += u(Ze), ve++) : hl();
    return Gt.join("");
    function wr() {
      return { line: _t, column: ve, offset: Ye + (Ge.offset || 0) };
    }
    function y0(bl, yl) {
      var na = wr();
      na.column += yl, na.offset += yl, De.call(He, N[bl], na, bl);
    }
    function hl() {
      Ke && (Gt.push(Ke), te && te.call(We, Ke, { start: xr, end: wr() }), Ke = "");
    }
  }
  function Y(P) {
    return P >= 55296 && P <= 57343 || P > 1114111;
  }
  function z(P) {
    return P >= 1 && P <= 8 || P === 11 || P >= 13 && P <= 31 || P >= 127 && P <= 159 || P >= 64976 && P <= 65007 || (P & 65535) === 65535 || (P & 65535) === 65534;
  }
} }), rp = V({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, t) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, n = function(o) {
    var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, c = {}, s = { manual: o.Prism && o.Prism.manual, disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler, util: { encode: function E(x) {
      return x instanceof u ? new u(x.type, E(x.content), x.alias) : Array.isArray(x) ? x.map(E) : x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(E) {
      return Object.prototype.toString.call(E).slice(8, -1);
    }, objId: function(E) {
      return E.__id || Object.defineProperty(E, "__id", { value: ++i }), E.__id;
    }, clone: function E(x, w) {
      w = w || {};
      var A, k;
      switch (s.util.type(x)) {
        case "Object":
          if (k = s.util.objId(x), w[k])
            return w[k];
          A = {}, w[k] = A;
          for (var T in x)
            x.hasOwnProperty(T) && (A[T] = E(x[T], w));
          return A;
        case "Array":
          return k = s.util.objId(x), w[k] ? w[k] : (A = [], w[k] = A, x.forEach(function(R, C) {
            A[C] = E(R, w);
          }), A);
        default:
          return x;
      }
    }, getLanguage: function(E) {
      for (; E; ) {
        var x = l.exec(E.className);
        if (x)
          return x[1].toLowerCase();
        E = E.parentElement;
      }
      return "none";
    }, setLanguage: function(E, x) {
      E.className = E.className.replace(RegExp(l, "gi"), ""), E.classList.add("language-" + x);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (A) {
        var E = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(A.stack) || [])[1];
        if (E) {
          var x = document.getElementsByTagName("script");
          for (var w in x)
            if (x[w].src == E)
              return x[w];
        }
        return null;
      }
    }, isActive: function(E, x, w) {
      for (var A = "no-" + x; E; ) {
        var k = E.classList;
        if (k.contains(x))
          return !0;
        if (k.contains(A))
          return !1;
        E = E.parentElement;
      }
      return !!w;
    } }, languages: { plain: c, plaintext: c, text: c, txt: c, extend: function(E, x) {
      var w = s.util.clone(s.languages[E]);
      for (var A in x)
        w[A] = x[A];
      return w;
    }, insertBefore: function(E, x, w, A) {
      A = A || s.languages;
      var k = A[E], T = {};
      for (var R in k)
        if (k.hasOwnProperty(R)) {
          if (R == x)
            for (var C in w)
              w.hasOwnProperty(C) && (T[C] = w[C]);
          w.hasOwnProperty(R) || (T[R] = k[R]);
        }
      var _ = A[E];
      return A[E] = T, s.languages.DFS(s.languages, function(D, F) {
        F === _ && D != E && (this[D] = T);
      }), T;
    }, DFS: function E(x, w, A, k) {
      k = k || {};
      var T = s.util.objId;
      for (var R in x)
        if (x.hasOwnProperty(R)) {
          w.call(x, R, x[R], A || R);
          var C = x[R], _ = s.util.type(C);
          _ === "Object" && !k[T(C)] ? (k[T(C)] = !0, E(C, w, null, k)) : _ === "Array" && !k[T(C)] && (k[T(C)] = !0, E(C, w, R, k));
        }
    } }, plugins: {}, highlightAll: function(E, x) {
      s.highlightAllUnder(document, E, x);
    }, highlightAllUnder: function(E, x, w) {
      var A = { callback: w, container: E, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      s.hooks.run("before-highlightall", A), A.elements = Array.prototype.slice.apply(A.container.querySelectorAll(A.selector)), s.hooks.run("before-all-elements-highlight", A);
      for (var k = 0, T; T = A.elements[k++]; )
        s.highlightElement(T, x === !0, A.callback);
    }, highlightElement: function(E, x, w) {
      var A = s.util.getLanguage(E), k = s.languages[A];
      s.util.setLanguage(E, A);
      var T = E.parentElement;
      T && T.nodeName.toLowerCase() === "pre" && s.util.setLanguage(T, A);
      var R = E.textContent, C = { element: E, language: A, grammar: k, code: R };
      function _(F) {
        C.highlightedCode = F, s.hooks.run("before-insert", C), C.element.innerHTML = C.highlightedCode, s.hooks.run("after-highlight", C), s.hooks.run("complete", C), w && w.call(C.element);
      }
      if (s.hooks.run("before-sanity-check", C), T = C.element.parentElement, T && T.nodeName.toLowerCase() === "pre" && !T.hasAttribute("tabindex") && T.setAttribute("tabindex", "0"), !C.code) {
        s.hooks.run("complete", C), w && w.call(C.element);
        return;
      }
      if (s.hooks.run("before-highlight", C), !C.grammar) {
        _(s.util.encode(C.code));
        return;
      }
      if (x && o.Worker) {
        var D = new Worker(s.filename);
        D.onmessage = function(F) {
          _(F.data);
        }, D.postMessage(JSON.stringify({ language: C.language, code: C.code, immediateClose: !0 }));
      } else
        _(s.highlight(C.code, C.grammar, C.language));
    }, highlight: function(E, x, w) {
      var A = { code: E, grammar: x, language: w };
      if (s.hooks.run("before-tokenize", A), !A.grammar)
        throw new Error('The language "' + A.language + '" has no grammar.');
      return A.tokens = s.tokenize(A.code, A.grammar), s.hooks.run("after-tokenize", A), u.stringify(s.util.encode(A.tokens), A.language);
    }, tokenize: function(E, x) {
      var w = x.rest;
      if (w) {
        for (var A in w)
          x[A] = w[A];
        delete x.rest;
      }
      var k = new d();
      return m(k, k.head, E), g(E, k, x, k.head, 0), b(k);
    }, hooks: { all: {}, add: function(E, x) {
      var w = s.hooks.all;
      w[E] = w[E] || [], w[E].push(x);
    }, run: function(E, x) {
      var w = s.hooks.all[E];
      if (!(!w || !w.length))
        for (var A = 0, k; k = w[A++]; )
          k(x);
    } }, Token: u };
    o.Prism = s;
    function u(E, x, w, A) {
      this.type = E, this.content = x, this.alias = w, this.length = (A || "").length | 0;
    }
    u.stringify = function E(x, w) {
      if (typeof x == "string")
        return x;
      if (Array.isArray(x)) {
        var A = "";
        return x.forEach(function(_) {
          A += E(_, w);
        }), A;
      }
      var k = { type: x.type, content: E(x.content, w), tag: "span", classes: ["token", x.type], attributes: {}, language: w }, T = x.alias;
      T && (Array.isArray(T) ? Array.prototype.push.apply(k.classes, T) : k.classes.push(T)), s.hooks.run("wrap", k);
      var R = "";
      for (var C in k.attributes)
        R += " " + C + '="' + (k.attributes[C] || "").replace(/"/g, "&quot;") + '"';
      return "<" + k.tag + ' class="' + k.classes.join(" ") + '"' + R + ">" + k.content + "</" + k.tag + ">";
    };
    function p(E, x, w, A) {
      E.lastIndex = x;
      var k = E.exec(w);
      if (k && A && k[1]) {
        var T = k[1].length;
        k.index += T, k[0] = k[0].slice(T);
      }
      return k;
    }
    function g(E, x, w, A, k, T) {
      for (var R in w)
        if (!(!w.hasOwnProperty(R) || !w[R])) {
          var C = w[R];
          C = Array.isArray(C) ? C : [C];
          for (var _ = 0; _ < C.length; ++_) {
            if (T && T.cause == R + "," + _)
              return;
            var D = C[_], F = D.inside, $ = !!D.lookbehind, L = !!D.greedy, M = D.alias;
            if (L && !D.pattern.global) {
              var I = D.pattern.toString().match(/[imsuy]*$/)[0];
              D.pattern = RegExp(D.pattern.source, I + "g");
            }
            for (var H = D.pattern || D, B = A.next, N = k; B !== x.tail && !(T && N >= T.reach); N += B.value.length, B = B.next) {
              var G = B.value;
              if (x.length > E.length)
                return;
              if (!(G instanceof u)) {
                var J = 1, Y;
                if (L) {
                  if (Y = p(H, N, E, $), !Y || Y.index >= E.length)
                    break;
                  var U = Y.index, z = Y.index + Y[0].length, P = N;
                  for (P += B.value.length; U >= P; )
                    B = B.next, P += B.value.length;
                  if (P -= B.value.length, N = P, B.value instanceof u)
                    continue;
                  for (var W = B; W !== x.tail && (P < z || typeof W.value == "string"); W = W.next)
                    J++, P += W.value.length;
                  J--, G = E.slice(N, P), Y.index -= N;
                } else if (Y = p(H, 0, G, $), !Y)
                  continue;
                var U = Y.index, oe = Y[0], te = G.slice(0, U), dt = G.slice(U + oe.length), De = N + G.length;
                T && De > T.reach && (T.reach = De);
                var We = B.prev;
                te && (We = m(x, We, te), N += te.length), f(x, We, J);
                var j = new u(R, F ? s.tokenize(oe, F) : oe, M, oe);
                if (B = m(x, We, j), dt && m(x, B, dt), J > 1) {
                  var He = { cause: R + "," + _, reach: De };
                  g(E, x, w, B.prev, N, He), T && He.reach > T.reach && (T.reach = He.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var E = { value: null, prev: null, next: null }, x = { value: null, prev: E, next: null };
      E.next = x, this.head = E, this.tail = x, this.length = 0;
    }
    function m(E, x, w) {
      var A = x.next, k = { value: w, prev: x, next: A };
      return x.next = k, A.prev = k, E.length++, k;
    }
    function f(E, x, w) {
      for (var A = x.next, k = 0; k < w && A !== E.tail; k++)
        A = A.next;
      x.next = A, A.prev = x, E.length -= k;
    }
    function b(E) {
      for (var x = [], w = E.head.next; w !== E.tail; )
        x.push(w.value), w = w.next;
      return x;
    }
    if (!o.document)
      return o.addEventListener && (s.disableWorkerMessageHandler || o.addEventListener("message", function(E) {
        var x = JSON.parse(E.data), w = x.language, A = x.code, k = x.immediateClose;
        o.postMessage(s.highlight(A, s.languages[w], w)), k && o.close();
      }, !1)), s;
    var y = s.util.currentScript();
    y && (s.filename = y.src, y.hasAttribute("data-manual") && (s.manual = !0));
    function v() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var S = document.readyState;
      S === "loading" || S === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", v) : window.requestAnimationFrame ? window.requestAnimationFrame(v) : window.setTimeout(v, 16);
    }
    return s;
  }(r);
  typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
} }), np = V({ "../../node_modules/refractor/core.js"(e, t) {
  var r = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, n = k();
  r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var o = W1(), l = tp(), i = rp(), c = Hs(), s = Ns(), u = R1(), p = F1();
  n();
  var g = {}.hasOwnProperty;
  function d() {
  }
  d.prototype = i;
  var m = new d();
  t.exports = m, m.highlight = y, m.register = f, m.alias = b, m.registered = v, m.listLanguages = S, f(c), f(s), f(u), f(p), m.util.encode = w, m.Token.stringify = E;
  function f(T) {
    if (typeof T != "function" || !T.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + T + "`");
    m.languages[T.displayName] === void 0 && T(m);
  }
  function b(T, R) {
    var C = m.languages, _ = T, D, F, $, L;
    R && (_ = {}, _[T] = R);
    for (D in _)
      for (F = _[D], F = typeof F == "string" ? [F] : F, $ = F.length, L = -1; ++L < $; )
        C[F[L]] = C[D];
  }
  function y(T, R) {
    var C = i.highlight, _;
    if (typeof T != "string")
      throw new Error("Expected `string` for `value`, got `" + T + "`");
    if (m.util.type(R) === "Object")
      _ = R, R = null;
    else {
      if (typeof R != "string")
        throw new Error("Expected `string` for `name`, got `" + R + "`");
      if (g.call(m.languages, R))
        _ = m.languages[R];
      else
        throw new Error("Unknown language: `" + R + "` is not registered");
    }
    return C.call(this, T, _, R);
  }
  function v(T) {
    if (typeof T != "string")
      throw new Error("Expected `string` for `language`, got `" + T + "`");
    return g.call(m.languages, T);
  }
  function S() {
    var T = m.languages, R = [], C;
    for (C in T)
      g.call(T, C) && typeof T[C] == "object" && R.push(C);
    return R;
  }
  function E(T, R, C) {
    var _;
    return typeof T == "string" ? { type: "text", value: T } : m.util.type(T) === "Array" ? x(T, R) : (_ = { type: T.type, content: m.Token.stringify(T.content, R, C), tag: "span", classes: ["token", T.type], attributes: {}, language: R, parent: C }, T.alias && (_.classes = _.classes.concat(T.alias)), m.hooks.run("wrap", _), o(_.tag + "." + _.classes.join("."), A(_.attributes), _.content));
  }
  function x(T, R) {
    for (var C = [], _ = T.length, D = -1, F; ++D < _; )
      F = T[D], F !== "" && F !== null && F !== void 0 && C.push(F);
    for (D = -1, _ = C.length; ++D < _; )
      F = C[D], C[D] = m.Token.stringify(F, R, C);
    return C;
  }
  function w(T) {
    return T;
  }
  function A(T) {
    var R;
    for (R in T)
      T[R] = l(T[R]);
    return T;
  }
  function k() {
    var T = "Prism" in r, R = T ? r.Prism : void 0;
    return C;
    function C() {
      T ? r.Prism = R : delete r.Prism, T = void 0, R = void 0;
    }
  }
} }), ap = V({ "../../node_modules/refractor/lang/bash.js"(e, t) {
  t.exports = r, r.displayName = "bash", r.aliases = ["shell"];
  function r(n) {
    (function(o) {
      var l = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", i = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null }, c = { bash: i, environment: { pattern: RegExp("\\$" + l), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + l), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      o.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: c }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: i } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: c }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: c.entity } }], environment: { pattern: RegExp("\\$?" + l), alias: "constant" }, variable: c.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }, i.inside = o.languages.bash;
      for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], u = c.variable[1].inside, p = 0; p < s.length; p++)
        u[s[p]] = o.languages.bash[s[p]];
      o.languages.shell = o.languages.bash;
    })(n);
  }
} }), op = V({ "../../node_modules/refractor/lang/js-extras.js"(e, t) {
  t.exports = r, r.displayName = "jsExtras", r.aliases = [];
  function r(n) {
    (function(o) {
      o.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + o.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), o.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + o.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), o.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function l(g, d) {
        return RegExp(g.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), d);
      }
      o.languages.insertBefore("javascript", "keyword", { imports: { pattern: l(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: o.languages.javascript }, exports: { pattern: l(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: o.languages.javascript } }), o.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), o.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), o.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: l(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var i = ["function", "function-variable", "method", "method-variable", "property-access"], c = 0; c < i.length; c++) {
        var s = i[c], u = o.languages.javascript[s];
        o.util.type(u) === "RegExp" && (u = o.languages.javascript[s] = { pattern: u });
        var p = u.inside || {};
        u.inside = p, p["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(n);
  }
} }), lp = V({ "../../node_modules/refractor/lang/json.js"(e, t) {
  t.exports = r, r.displayName = "json", r.aliases = ["webmanifest"];
  function r(n) {
    n.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, n.languages.webmanifest = n.languages.json;
  }
} }), ip = V({ "../../node_modules/refractor/lang/graphql.js"(e, t) {
  t.exports = r, r.displayName = "graphql", r.aliases = [];
  function r(n) {
    n.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: n.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, n.hooks.add("after-tokenize", function(o) {
      if (o.language !== "graphql")
        return;
      var l = o.tokens.filter(function(S) {
        return typeof S != "string" && S.type !== "comment" && S.type !== "scalar";
      }), i = 0;
      function c(S) {
        return l[i + S];
      }
      function s(S, E) {
        E = E || 0;
        for (var x = 0; x < S.length; x++) {
          var w = c(x + E);
          if (!w || w.type !== S[x])
            return !1;
        }
        return !0;
      }
      function u(S, E) {
        for (var x = 1, w = i; w < l.length; w++) {
          var A = l[w], k = A.content;
          if (A.type === "punctuation" && typeof k == "string") {
            if (S.test(k))
              x++;
            else if (E.test(k) && (x--, x === 0))
              return w;
          }
        }
        return -1;
      }
      function p(S, E) {
        var x = S.alias;
        x ? Array.isArray(x) || (S.alias = x = [x]) : S.alias = x = [], x.push(E);
      }
      for (; i < l.length; ) {
        var g = l[i++];
        if (g.type === "keyword" && g.content === "mutation") {
          var d = [];
          if (s(["definition-mutation", "punctuation"]) && c(1).content === "(") {
            i += 2;
            var m = u(/^\($/, /^\)$/);
            if (m === -1)
              continue;
            for (; i < m; i++) {
              var f = c(0);
              f.type === "variable" && (p(f, "variable-input"), d.push(f.content));
            }
            i = m + 1;
          }
          if (s(["punctuation", "property-query"]) && c(0).content === "{" && (i++, p(c(0), "property-mutation"), d.length > 0)) {
            var b = u(/^\{$/, /^\}$/);
            if (b === -1)
              continue;
            for (var y = i; y < b; y++) {
              var v = l[y];
              v.type === "variable" && d.indexOf(v.content) >= 0 && p(v, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: sp } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { global: cp } = __STORYBOOK_MODULE_GLOBAL__;
var up = _e(js()), dp = up.default, pp = _e(ap()), fp = pp.default, mp = _e(Ns()), gp = mp.default, hp = _e(op()), bp = hp.default, yp = _e(lp()), vp = yp.default, Ep = _e(ip()), xp = Ep.default, wp = _e(Hs()), Ap = wp.default, Sp = _e(T1()), Cp = Sp.default, kp = _e(O1()), Tp = kp.default, Op = _e(_1()), _p = Op.default, Rp = _e(Ps()), Fp = Rp.default;
function Dp(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, l;
  for (l = 0; l < n.length; l++)
    o = n[l], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Lp(e, t) {
  if (e == null)
    return {};
  var r = Dp(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      n = l[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ba(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $p(e) {
  if (Array.isArray(e))
    return Ba(e);
}
function Mp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Bp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ba(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ba(e, t);
  }
}
function Ip() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pp(e) {
  return $p(e) || Mp(e) || Bp(e) || Ip();
}
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function jp(e, t) {
  if (Br(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Br(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Np(e) {
  var t = jp(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function Ws(e, t, r) {
  return t = Np(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}
function Vl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vl(Object(r), !0).forEach(function(n) {
      Ws(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hp(e) {
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
var da = {};
function Zp(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var t = e.join(".");
  return da[t] || (da[t] = Hp(e)), da[t];
}
function Vp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e.filter(function(l) {
    return l !== "token";
  }), o = Zp(n);
  return o.reduce(function(l, i) {
    return Qt(Qt({}, l), r[i]);
  }, t);
}
function zl(e) {
  return e.join(" ");
}
function zp(e, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(o, l) {
      return Co({ node: o, stylesheet: e, useInlineStyles: t, key: "code-segment-".concat(r, "-").concat(l) });
    });
  };
}
function Co(e) {
  var t = e.node, r = e.stylesheet, n = e.style, o = n === void 0 ? {} : n, l = e.useInlineStyles, i = e.key, c = t.properties, s = t.type, u = t.tagName, p = t.value;
  if (s === "text")
    return p;
  if (u) {
    var g = zp(r, l), d;
    if (!l)
      d = Qt(Qt({}, c), {}, { className: zl(c.className) });
    else {
      var m = Object.keys(r).reduce(function(v, S) {
        return S.split(".").forEach(function(E) {
          v.includes(E) || v.push(E);
        }), v;
      }, []), f = c.className && c.className.includes("token") ? ["token"] : [], b = c.className && f.concat(c.className.filter(function(v) {
        return !m.includes(v);
      }));
      d = Qt(Qt({}, c), {}, { className: zl(b) || void 0, style: Vp(c.className, Object.assign({}, c.style, o), r) });
    }
    var y = g(t.children);
    return a.createElement(u, Ia({ key: i }, d), y);
  }
}
var qp = function(e, t) {
  var r = e.listLanguages();
  return r.indexOf(t) !== -1;
}, Up = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ql(e, t) {
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
    t % 2 ? ql(Object(r), !0).forEach(function(n) {
      Ws(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ql(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Wp = /\n/g;
function Gp(e) {
  return e.match(Wp);
}
function Yp(e) {
  var t = e.lines, r = e.startingLineNumber, n = e.style;
  return t.map(function(o, l) {
    var i = l + r;
    return a.createElement("span", { key: "line-".concat(l), className: "react-syntax-highlighter-line-number", style: typeof n == "function" ? n(i) : n }, "".concat(i, `
`));
  });
}
function Kp(e) {
  var t = e.codeString, r = e.codeStyle, n = e.containerStyle, o = n === void 0 ? { float: "left", paddingRight: "10px" } : n, l = e.numberStyle, i = l === void 0 ? {} : l, c = e.startingLineNumber;
  return a.createElement("code", { style: Object.assign({}, r, o) }, Yp({ lines: t.replace(/\n$/, "").split(`
`), style: i, startingLineNumber: c }));
}
function Xp(e) {
  return "".concat(e.toString().length, ".25em");
}
function Gs(e, t) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: t }, children: [{ type: "text", value: e }] };
}
function Ys(e, t, r) {
  var n = { display: "inline-block", minWidth: Xp(r), paddingRight: "1em", textAlign: "right", userSelect: "none" }, o = typeof e == "function" ? e(t) : e, l = at(at({}, n), o);
  return l;
}
function yn(e) {
  var t = e.children, r = e.lineNumber, n = e.lineNumberStyle, o = e.largestLineNumber, l = e.showInlineLineNumbers, i = e.lineProps, c = i === void 0 ? {} : i, s = e.className, u = s === void 0 ? [] : s, p = e.showLineNumbers, g = e.wrapLongLines, d = typeof c == "function" ? c(r) : c;
  if (d.className = u, r && l) {
    var m = Ys(n, r, o);
    t.unshift(Gs(r, m));
  }
  return g & p && (d.style = at(at({}, d.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: d, children: t };
}
function Ks(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e.length; n++) {
    var o = e[n];
    if (o.type === "text")
      r.push(yn({ children: [o], className: Pp(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      Ks(o.children, l).forEach(function(i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function Jp(e, t, r, n, o, l, i, c, s) {
  var u, p = Ks(e.value), g = [], d = -1, m = 0;
  function f(w, A) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return yn({ children: w, lineNumber: A, lineNumberStyle: c, largestLineNumber: i, showInlineLineNumbers: o, lineProps: r, className: k, showLineNumbers: n, wrapLongLines: s });
  }
  function b(w, A) {
    if (n && A && o) {
      var k = Ys(c, A, i);
      w.unshift(Gs(A, k));
    }
    return w;
  }
  function y(w, A) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || k.length > 0 ? f(w, A, k) : b(w, A);
  }
  for (var v = function() {
    var w = p[m], A = w.children[0].value, k = Gp(A);
    if (k) {
      var T = A.split(`
`);
      T.forEach(function(R, C) {
        var _ = n && g.length + l, D = { type: "text", value: "".concat(R, `
`) };
        if (C === 0) {
          var F = p.slice(d + 1, m).concat(yn({ children: [D], className: w.properties.className })), $ = y(F, _);
          g.push($);
        } else if (C === T.length - 1) {
          var L = p[m + 1] && p[m + 1].children && p[m + 1].children[0], M = { type: "text", value: "".concat(R) };
          if (L) {
            var I = yn({ children: [M], className: w.properties.className });
            p.splice(m + 1, 0, I);
          } else {
            var H = [M], B = y(H, _, w.properties.className);
            g.push(B);
          }
        } else {
          var N = [D], G = y(N, _, w.properties.className);
          g.push(G);
        }
      }), d = m;
    }
    m++;
  }; m < p.length; )
    v();
  if (d !== p.length - 1) {
    var S = p.slice(d + 1, p.length);
    if (S && S.length) {
      var E = n && g.length + l, x = y(S, E);
      g.push(x);
    }
  }
  return t ? g : (u = []).concat.apply(u, g);
}
function Qp(e) {
  var t = e.rows, r = e.stylesheet, n = e.useInlineStyles;
  return t.map(function(o, l) {
    return Co({ node: o, stylesheet: r, useInlineStyles: n, key: "code-segement".concat(l) });
  });
}
function Xs(e) {
  return e && typeof e.highlightAuto < "u";
}
function e5(e) {
  var t = e.astGenerator, r = e.language, n = e.code, o = e.defaultCodeValue;
  if (Xs(t)) {
    var l = qp(t, r);
    return r === "text" ? { value: o, language: "text" } : l ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: o };
  } catch {
    return { value: o };
  }
}
function t5(e, t) {
  return function(r) {
    var n = r.language, o = r.children, l = r.style, i = l === void 0 ? t : l, c = r.customStyle, s = c === void 0 ? {} : c, u = r.codeTagProps, p = u === void 0 ? { className: n ? "language-".concat(n) : void 0, style: at(at({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')]) } : u, g = r.useInlineStyles, d = g === void 0 ? !0 : g, m = r.showLineNumbers, f = m === void 0 ? !1 : m, b = r.showInlineLineNumbers, y = b === void 0 ? !0 : b, v = r.startingLineNumber, S = v === void 0 ? 1 : v, E = r.lineNumberContainerStyle, x = r.lineNumberStyle, w = x === void 0 ? {} : x, A = r.wrapLines, k = r.wrapLongLines, T = k === void 0 ? !1 : k, R = r.lineProps, C = R === void 0 ? {} : R, _ = r.renderer, D = r.PreTag, F = D === void 0 ? "pre" : D, $ = r.CodeTag, L = $ === void 0 ? "code" : $, M = r.code, I = M === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : M, H = r.astGenerator, B = Lp(r, Up);
    H = H || e;
    var N = f ? a.createElement(Kp, { containerStyle: E, codeStyle: p.style || {}, numberStyle: w, startingLineNumber: S, codeString: I }) : null, G = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" }, J = Xs(H) ? "hljs" : "prismjs", Y = d ? Object.assign({}, B, { style: Object.assign({}, G, s) }) : Object.assign({}, B, { className: B.className ? "".concat(J, " ").concat(B.className) : J, style: Object.assign({}, s) });
    if (T ? p.style = at(at({}, p.style), {}, { whiteSpace: "pre-wrap" }) : p.style = at(at({}, p.style), {}, { whiteSpace: "pre" }), !H)
      return a.createElement(F, Y, N, a.createElement(L, p, I));
    (A === void 0 && _ || T) && (A = !0), _ = _ || Qp;
    var z = [{ type: "text", value: I }], P = e5({ astGenerator: H, language: n, code: I, defaultCodeValue: z });
    P.language === null && (P.value = z);
    var W = P.value.length + S, U = Jp(P, A, C, f, y, S, W, w, T);
    return a.createElement(F, Y, a.createElement(L, p, !y && N, _({ rows: U, stylesheet: i, useInlineStyles: d })));
  };
}
var ko = _e(np()), To = t5(ko.default, {});
To.registerLanguage = function(e, t) {
  return ko.default.register(t);
};
To.alias = function(e, t) {
  return ko.default.alias(e, t);
};
var Re = To, r5 = O.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), Js = O.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
Js.displayName = "ActionButton";
var Oo = ({ actionItems: e, ...t }) => a.createElement(r5, { ...t }, e.map(({ title: r, className: n, onClick: o, disabled: l }, i) => a.createElement(Js, { key: i, className: n, onClick: o, disabled: l }, r)));
function se() {
  return se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, se.apply(this, arguments);
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kn.apply(this, arguments);
}
function n5(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qs(...e) {
  return (t) => e.forEach((r) => n5(r, t));
}
function qt(...e) {
  return h.useCallback(Qs(...e), e);
}
var ec = h.forwardRef((e, t) => {
  let { children: r, ...n } = e, o = h.Children.toArray(r), l = o.find(o5);
  if (l) {
    let i = l.props.children, c = o.map((s) => s === l ? h.Children.count(i) > 1 ? h.Children.only(null) : h.isValidElement(i) ? i.props.children : null : s);
    return h.createElement(ja, kn({}, n, { ref: t }), h.isValidElement(i) ? h.cloneElement(i, void 0, c) : null);
  }
  return h.createElement(ja, kn({}, n, { ref: t }), r);
});
ec.displayName = "Slot";
var ja = h.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return h.isValidElement(r) ? h.cloneElement(r, { ...l5(n, r.props), ref: t ? Qs(t, r.ref) : r.ref }) : h.Children.count(r) > 1 ? h.Children.only(null) : null;
});
ja.displayName = "SlotClone";
var a5 = ({ children: e }) => h.createElement(h.Fragment, null, e);
function o5(e) {
  return h.isValidElement(e) && e.type === a5;
}
function l5(e, t) {
  let r = { ...t };
  for (let n in t) {
    let o = e[n], l = t[n];
    /^on[A-Z]/.test(n) ? o && l ? r[n] = (...i) => {
      l(...i), o(...i);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...l } : n === "className" && (r[n] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
var i5 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], Yr = i5.reduce((e, t) => {
  let r = h.forwardRef((n, o) => {
    let { asChild: l, ...i } = n, c = l ? ec : t;
    return h.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), h.createElement(c, Pa({}, i, { ref: o }));
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Na = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {
};
function s5(e, t) {
  return h.useReducer((r, n) => t[r][n] ?? r, e);
}
var Kr = (e) => {
  let { present: t, children: r } = e, n = c5(t), o = typeof r == "function" ? r({ present: n.isPresent }) : h.Children.only(r), l = qt(n.ref, o.ref);
  return typeof r == "function" || n.isPresent ? h.cloneElement(o, { ref: l }) : null;
};
Kr.displayName = "Presence";
function c5(e) {
  let [t, r] = h.useState(), n = h.useRef({}), o = h.useRef(e), l = h.useRef("none"), i = e ? "mounted" : "unmounted", [c, s] = s5(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return h.useEffect(() => {
    let u = sn(n.current);
    l.current = c === "mounted" ? u : "none";
  }, [c]), Na(() => {
    let u = n.current, p = o.current;
    if (p !== e) {
      let g = l.current, d = sn(u);
      e ? s("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(p && g !== d ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, s]), Na(() => {
    if (t) {
      let u = (g) => {
        let d = sn(n.current).includes(g.animationName);
        g.target === t && d && is.flushSync(() => s("ANIMATION_END"));
      }, p = (g) => {
        g.target === t && (l.current = sn(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), { isPresent: ["mounted", "unmountSuspended"].includes(c), ref: h.useCallback((u) => {
    u && (n.current = getComputedStyle(u)), r(u);
  }, []) };
}
function sn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function u5(e, t = []) {
  let r = [];
  function n(l, i) {
    let c = h.createContext(i), s = r.length;
    r = [...r, i];
    function u(g) {
      let { scope: d, children: m, ...f } = g, b = (d == null ? void 0 : d[e][s]) || c, y = h.useMemo(() => f, Object.values(f));
      return h.createElement(b.Provider, { value: y }, m);
    }
    function p(g, d) {
      let m = (d == null ? void 0 : d[e][s]) || c, f = h.useContext(m);
      if (f)
        return f;
      if (i !== void 0)
        return i;
      throw new Error(`\`${g}\` must be used within \`${l}\``);
    }
    return u.displayName = l + "Provider", [u, p];
  }
  let o = () => {
    let l = r.map((i) => h.createContext(i));
    return function(i) {
      let c = (i == null ? void 0 : i[e]) || l;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c]);
    };
  };
  return o.scopeName = e, [n, d5(o, ...t)];
}
function d5(...e) {
  let t = e[0];
  if (e.length === 1)
    return t;
  let r = () => {
    let n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(o) {
      let l = n.reduce((i, { useScope: c, scopeName: s }) => {
        let u = c(o)[`__scope${s}`];
        return { ...i, ...u };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Bt(e) {
  let t = h.useRef(e);
  return h.useEffect(() => {
    t.current = e;
  }), h.useMemo(() => (...r) => {
    var n;
    return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
  }, []);
}
var p5 = h.createContext(void 0);
function f5(e) {
  let t = h.useContext(p5);
  return e || t || "ltr";
}
function m5(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Pt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), r === !1 || !n.defaultPrevented)
      return t == null ? void 0 : t(n);
  };
}
function g5(e, t) {
  return h.useReducer((r, n) => t[r][n] ?? r, e);
}
var tc = "ScrollArea", [rc, zw] = u5(tc), [h5, je] = rc(tc), b5 = h.forwardRef((e, t) => {
  let { __scopeScrollArea: r, type: n = "hover", dir: o, scrollHideDelay: l = 600, ...i } = e, [c, s] = h.useState(null), [u, p] = h.useState(null), [g, d] = h.useState(null), [m, f] = h.useState(null), [b, y] = h.useState(null), [v, S] = h.useState(0), [E, x] = h.useState(0), [w, A] = h.useState(!1), [k, T] = h.useState(!1), R = qt(t, (_) => s(_)), C = f5(o);
  return h.createElement(h5, { scope: r, type: n, dir: C, scrollHideDelay: l, scrollArea: c, viewport: u, onViewportChange: p, content: g, onContentChange: d, scrollbarX: m, onScrollbarXChange: f, scrollbarXEnabled: w, onScrollbarXEnabledChange: A, scrollbarY: b, onScrollbarYChange: y, scrollbarYEnabled: k, onScrollbarYEnabledChange: T, onCornerWidthChange: S, onCornerHeightChange: x }, h.createElement(Yr.div, se({ dir: C }, i, { ref: R, style: { position: "relative", "--radix-scroll-area-corner-width": v + "px", "--radix-scroll-area-corner-height": E + "px", ...e.style } })));
}), y5 = "ScrollAreaViewport", v5 = h.forwardRef((e, t) => {
  let { __scopeScrollArea: r, children: n, ...o } = e, l = je(y5, r), i = h.useRef(null), c = qt(t, i, l.onViewportChange);
  return h.createElement(h.Fragment, null, h.createElement("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" } }), h.createElement(Yr.div, se({ "data-radix-scroll-area-viewport": "" }, o, { ref: c, style: { overflowX: l.scrollbarXEnabled ? "scroll" : "hidden", overflowY: l.scrollbarYEnabled ? "scroll" : "hidden", ...e.style } }), h.createElement("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" } }, n)));
}), bt = "ScrollAreaScrollbar", E5 = h.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = je(bt, e.__scopeScrollArea), { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = o, c = e.orientation === "horizontal";
  return h.useEffect(() => (c ? l(!0) : i(!0), () => {
    c ? l(!1) : i(!1);
  }), [c, l, i]), o.type === "hover" ? h.createElement(x5, se({}, n, { ref: t, forceMount: r })) : o.type === "scroll" ? h.createElement(w5, se({}, n, { ref: t, forceMount: r })) : o.type === "auto" ? h.createElement(nc, se({}, n, { ref: t, forceMount: r })) : o.type === "always" ? h.createElement(_o, se({}, n, { ref: t })) : null;
}), x5 = h.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = je(bt, e.__scopeScrollArea), [l, i] = h.useState(!1);
  return h.useEffect(() => {
    let c = o.scrollArea, s = 0;
    if (c) {
      let u = () => {
        window.clearTimeout(s), i(!0);
      }, p = () => {
        s = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return c.addEventListener("pointerenter", u), c.addEventListener("pointerleave", p), () => {
        window.clearTimeout(s), c.removeEventListener("pointerenter", u), c.removeEventListener("pointerleave", p);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), h.createElement(Kr, { present: r || l }, h.createElement(nc, se({ "data-state": l ? "visible" : "hidden" }, n, { ref: t })));
}), w5 = h.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = je(bt, e.__scopeScrollArea), l = e.orientation === "horizontal", i = Zn(() => s("SCROLL_END"), 100), [c, s] = g5("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return h.useEffect(() => {
    if (c === "idle") {
      let u = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [c, o.scrollHideDelay, s]), h.useEffect(() => {
    let u = o.viewport, p = l ? "scrollLeft" : "scrollTop";
    if (u) {
      let g = u[p], d = () => {
        let m = u[p];
        g !== m && (s("SCROLL"), i()), g = m;
      };
      return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, s, i]), h.createElement(Kr, { present: r || c !== "hidden" }, h.createElement(_o, se({ "data-state": c === "hidden" ? "hidden" : "visible" }, n, { ref: t, onPointerEnter: Pt(e.onPointerEnter, () => s("POINTER_ENTER")), onPointerLeave: Pt(e.onPointerLeave, () => s("POINTER_LEAVE")) })));
}), nc = h.forwardRef((e, t) => {
  let r = je(bt, e.__scopeScrollArea), { forceMount: n, ...o } = e, [l, i] = h.useState(!1), c = e.orientation === "horizontal", s = Zn(() => {
    if (r.viewport) {
      let u = r.viewport.offsetWidth < r.viewport.scrollWidth, p = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(c ? u : p);
    }
  }, 10);
  return ar(r.viewport, s), ar(r.content, s), h.createElement(Kr, { present: n || l }, h.createElement(_o, se({ "data-state": l ? "visible" : "hidden" }, o, { ref: t })));
}), _o = h.forwardRef((e, t) => {
  let { orientation: r = "vertical", ...n } = e, o = je(bt, e.__scopeScrollArea), l = h.useRef(null), i = h.useRef(0), [c, s] = h.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), u = ic(c.viewport, c.content), p = { ...n, sizes: c, onSizesChange: s, hasThumb: u > 0 && u < 1, onThumbChange: (d) => l.current = d, onThumbPointerUp: () => i.current = 0, onThumbPointerDown: (d) => i.current = d };
  function g(d, m) {
    return R5(d, i.current, c, m);
  }
  return r === "horizontal" ? h.createElement(A5, se({}, p, { ref: t, onThumbPositionChange: () => {
    if (o.viewport && l.current) {
      let d = o.viewport.scrollLeft, m = Ul(d, c, o.dir);
      l.current.style.transform = `translate3d(${m}px, 0, 0)`;
    }
  }, onWheelScroll: (d) => {
    o.viewport && (o.viewport.scrollLeft = d);
  }, onDragScroll: (d) => {
    o.viewport && (o.viewport.scrollLeft = g(d, o.dir));
  } })) : r === "vertical" ? h.createElement(S5, se({}, p, { ref: t, onThumbPositionChange: () => {
    if (o.viewport && l.current) {
      let d = o.viewport.scrollTop, m = Ul(d, c);
      l.current.style.transform = `translate3d(0, ${m}px, 0)`;
    }
  }, onWheelScroll: (d) => {
    o.viewport && (o.viewport.scrollTop = d);
  }, onDragScroll: (d) => {
    o.viewport && (o.viewport.scrollTop = g(d));
  } })) : null;
}), A5 = h.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...o } = e, l = je(bt, e.__scopeScrollArea), [i, c] = h.useState(), s = h.useRef(null), u = qt(t, s, l.onScrollbarXChange);
  return h.useEffect(() => {
    s.current && c(getComputedStyle(s.current));
  }, [s]), h.createElement(oc, se({ "data-orientation": "horizontal" }, o, { ref: u, sizes: r, style: { bottom: 0, left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": Hn(r) + "px", ...e.style }, onThumbPointerDown: (p) => e.onThumbPointerDown(p.x), onDragScroll: (p) => e.onDragScroll(p.x), onWheelScroll: (p, g) => {
    if (l.viewport) {
      let d = l.viewport.scrollLeft + p.deltaX;
      e.onWheelScroll(d), cc(d, g) && p.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollWidth, viewport: l.viewport.offsetWidth, scrollbar: { size: s.current.clientWidth, paddingStart: Tn(i.paddingLeft), paddingEnd: Tn(i.paddingRight) } });
  } }));
}), S5 = h.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...o } = e, l = je(bt, e.__scopeScrollArea), [i, c] = h.useState(), s = h.useRef(null), u = qt(t, s, l.onScrollbarYChange);
  return h.useEffect(() => {
    s.current && c(getComputedStyle(s.current));
  }, [s]), h.createElement(oc, se({ "data-orientation": "vertical" }, o, { ref: u, sizes: r, style: { top: 0, right: l.dir === "ltr" ? 0 : void 0, left: l.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": Hn(r) + "px", ...e.style }, onThumbPointerDown: (p) => e.onThumbPointerDown(p.y), onDragScroll: (p) => e.onDragScroll(p.y), onWheelScroll: (p, g) => {
    if (l.viewport) {
      let d = l.viewport.scrollTop + p.deltaY;
      e.onWheelScroll(d), cc(d, g) && p.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollHeight, viewport: l.viewport.offsetHeight, scrollbar: { size: s.current.clientHeight, paddingStart: Tn(i.paddingTop), paddingEnd: Tn(i.paddingBottom) } });
  } }));
}), [C5, ac] = rc(bt), oc = h.forwardRef((e, t) => {
  let { __scopeScrollArea: r, sizes: n, hasThumb: o, onThumbChange: l, onThumbPointerUp: i, onThumbPointerDown: c, onThumbPositionChange: s, onDragScroll: u, onWheelScroll: p, onResize: g, ...d } = e, m = je(bt, r), [f, b] = h.useState(null), y = qt(t, (R) => b(R)), v = h.useRef(null), S = h.useRef(""), E = m.viewport, x = n.content - n.viewport, w = Bt(p), A = Bt(s), k = Zn(g, 10);
  function T(R) {
    if (v.current) {
      let C = R.clientX - v.current.left, _ = R.clientY - v.current.top;
      u({ x: C, y: _ });
    }
  }
  return h.useEffect(() => {
    let R = (C) => {
      let _ = C.target;
      f != null && f.contains(_) && w(C, x);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [E, f, x, w]), h.useEffect(A, [n, A]), ar(f, k), ar(m.content, k), h.createElement(C5, { scope: r, scrollbar: f, hasThumb: o, onThumbChange: Bt(l), onThumbPointerUp: Bt(i), onThumbPositionChange: A, onThumbPointerDown: Bt(c) }, h.createElement(Yr.div, se({}, d, { ref: y, style: { position: "absolute", ...d.style }, onPointerDown: Pt(e.onPointerDown, (R) => {
    R.button === 0 && (R.target.setPointerCapture(R.pointerId), v.current = f.getBoundingClientRect(), S.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), T(R));
  }), onPointerMove: Pt(e.onPointerMove, T), onPointerUp: Pt(e.onPointerUp, (R) => {
    let C = R.target;
    C.hasPointerCapture(R.pointerId) && C.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = S.current, m.viewport && (m.viewport.style.scrollBehavior = ""), v.current = null;
  }) })));
}), Ha = "ScrollAreaThumb", k5 = h.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, o = ac(Ha, e.__scopeScrollArea);
  return h.createElement(Kr, { present: r || o.hasThumb }, h.createElement(T5, se({ ref: t }, n)));
}), T5 = h.forwardRef((e, t) => {
  let { __scopeScrollArea: r, style: n, ...o } = e, l = je(Ha, r), i = ac(Ha, r), { onThumbPositionChange: c } = i, s = qt(t, (g) => i.onThumbChange(g)), u = h.useRef(), p = Zn(() => {
    u.current && (u.current(), u.current = void 0);
  }, 100);
  return h.useEffect(() => {
    let g = l.viewport;
    if (g) {
      let d = () => {
        if (p(), !u.current) {
          let m = F5(g, c);
          u.current = m, c();
        }
      };
      return c(), g.addEventListener("scroll", d), () => g.removeEventListener("scroll", d);
    }
  }, [l.viewport, p, c]), h.createElement(Yr.div, se({ "data-state": i.hasThumb ? "visible" : "hidden" }, o, { ref: s, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...n }, onPointerDownCapture: Pt(e.onPointerDownCapture, (g) => {
    let d = g.target.getBoundingClientRect(), m = g.clientX - d.left, f = g.clientY - d.top;
    i.onThumbPointerDown({ x: m, y: f });
  }), onPointerUp: Pt(e.onPointerUp, i.onThumbPointerUp) }));
}), lc = "ScrollAreaCorner", O5 = h.forwardRef((e, t) => {
  let r = je(lc, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? h.createElement(_5, se({}, e, { ref: t })) : null;
}), _5 = h.forwardRef((e, t) => {
  let { __scopeScrollArea: r, ...n } = e, o = je(lc, r), [l, i] = h.useState(0), [c, s] = h.useState(0), u = !!(l && c);
  return ar(o.scrollbarX, () => {
    var p;
    let g = ((p = o.scrollbarX) === null || p === void 0 ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(g), s(g);
  }), ar(o.scrollbarY, () => {
    var p;
    let g = ((p = o.scrollbarY) === null || p === void 0 ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(g), i(g);
  }), u ? h.createElement(Yr.div, se({}, n, { ref: t, style: { width: l, height: c, position: "absolute", right: o.dir === "ltr" ? 0 : void 0, left: o.dir === "rtl" ? 0 : void 0, bottom: 0, ...e.style } })) : null;
});
function Tn(e) {
  return e ? parseInt(e, 10) : 0;
}
function ic(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function Hn(e) {
  let t = ic(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function R5(e, t, r, n = "ltr") {
  let o = Hn(r), l = o / 2, i = t || l, c = o - i, s = r.scrollbar.paddingStart + i, u = r.scrollbar.size - r.scrollbar.paddingEnd - c, p = r.content - r.viewport, g = n === "ltr" ? [0, p] : [p * -1, 0];
  return sc([s, u], g)(e);
}
function Ul(e, t, r = "ltr") {
  let n = Hn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, l = t.scrollbar.size - o, i = t.content - t.viewport, c = l - n, s = r === "ltr" ? [0, i] : [i * -1, 0], u = m5(e, s);
  return sc([0, i], [0, c])(u);
}
function sc(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function cc(e, t) {
  return e > 0 && e < t;
}
var F5 = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    let l = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== l.left, c = r.top !== l.top;
    (i || c) && t(), r = l, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Zn(e, t) {
  let r = Bt(e), n = h.useRef(0);
  return h.useEffect(() => () => window.clearTimeout(n.current), []), h.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function ar(e, t) {
  let r = Bt(t);
  Na(() => {
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
var D5 = b5, L5 = v5, $5 = E5, M5 = k5, B5 = O5, I5 = O(D5)(({ scrollbarsize: e, offset: t }) => ({ width: "100%", height: "100%", overflow: "hidden", "--scrollbar-size": `${e + t}px`, "--radix-scroll-area-thumb-width": `${e}px` })), P5 = O(L5)({ width: "100%", height: "100%" }), Wl = O($5)(({ offset: e, horizontal: t, vertical: r }) => ({ display: "flex", userSelect: "none", touchAction: "none", background: "transparent", transition: "all 0.2s ease-out", borderRadius: "var(--scrollbar-size)", '&[data-orientation="vertical"]': { width: "var(--scrollbar-size)", paddingRight: e, marginTop: e, marginBottom: t === "true" && r === "true" ? 0 : e }, '&[data-orientation="horizontal"]': { flexDirection: "column", height: "var(--scrollbar-size)", paddingBottom: e, marginLeft: e, marginRight: t === "true" && r === "true" ? 0 : e } })), Gl = O(M5)(({ theme: e }) => ({ flex: 1, background: e.textMutedColor, opacity: 0.5, borderRadius: "var(--scrollbar-size)", position: "relative", transition: "opacity 0.2s ease-out", "&:hover": { opacity: 0.8 }, "::before": { content: '""', position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", minWidth: 44, minHeight: 44 } })), Ro = ({ children: e, horizontal: t = !1, vertical: r = !1, offset: n = 2, scrollbarSize: o = 6, className: l }) => a.createElement(I5, { scrollbarsize: o, offset: n, className: l }, a.createElement(P5, null, e), t && a.createElement(Wl, { orientation: "horizontal", offset: n, horizontal: t.toString(), vertical: r.toString() }, a.createElement(Gl, null)), r && a.createElement(Wl, { orientation: "vertical", offset: n, horizontal: t.toString(), vertical: r.toString() }, a.createElement(Gl, null)), t && r && a.createElement(B5, null)), { navigator: cn, document: Sr, window: j5 } = cp;
Re.registerLanguage("jsextra", bp);
Re.registerLanguage("jsx", dp);
Re.registerLanguage("json", vp);
Re.registerLanguage("yml", Tp);
Re.registerLanguage("md", Cp);
Re.registerLanguage("bash", fp);
Re.registerLanguage("css", gp);
Re.registerLanguage("html", Ap);
Re.registerLanguage("tsx", _p);
Re.registerLanguage("typescript", Fp);
Re.registerLanguage("graphql", xp);
var N5 = zt(2)((e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})), H5 = uc();
function uc() {
  return cn != null && cn.clipboard ? (e) => cn.clipboard.writeText(e) : async (e) => {
    let t = Sr.createElement("TEXTAREA"), r = Sr.activeElement;
    t.value = e, Sr.body.appendChild(t), t.select(), Sr.execCommand("copy"), Sr.body.removeChild(t), r.focus();
  };
}
var Z5 = O.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: t }) => t ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), V5 = ({ children: e, className: t }) => a.createElement(Ro, { horizontal: !0, vertical: !0, className: t }, e), z5 = O(V5)({ position: "relative" }, ({ theme: e }) => N5(e)), q5 = O.pre(({ theme: e, padded: t }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: t ? e.layoutMargin : 0 })), U5 = O.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), dc = (e) => {
  let t = [...e.children], r = t[0], n = r.children[0].value, o = { ...r, children: [], properties: { ...r.properties, "data-line-number": n, style: { ...r.properties.style, userSelect: "auto" } } };
  return t[0] = o, { ...e, children: t };
}, W5 = ({ rows: e, stylesheet: t, useInlineStyles: r }) => e.map((n, o) => Co({ node: dc(n), stylesheet: t, useInlineStyles: r, key: `code-segement${o}` })), G5 = (e, t) => t ? e ? ({ rows: r, ...n }) => e({ rows: r.map((o) => dc(o)), ...n }) : W5 : e, Fo = ({ children: e, language: t = "jsx", copyable: r = !1, bordered: n = !1, padded: o = !1, format: l = !0, formatter: i = null, className: c = null, showLineNumbers: s = !1, ...u }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let p = i ? i(l, e) : e.trim(), [g, d] = h.useState(!1), m = h.useCallback((b) => {
    b.preventDefault(), H5(p).then(() => {
      d(!0), j5.setTimeout(() => d(!1), 1500);
    }).catch(sp.error);
  }, [p]), f = G5(u.renderer, s);
  return a.createElement(Z5, { bordered: n, padded: o, showLineNumbers: s, className: c }, a.createElement(z5, null, a.createElement(Re, { padded: o || n, language: t, showLineNumbers: s, showInlineLineNumbers: s, useInlineStyles: !1, PreTag: q5, CodeTag: U5, lineNumberContainerStyle: {}, ...u, renderer: f }, p)), r ? a.createElement(Oo, { actionItems: [{ title: g ? "Copied" : "Copy", onClick: m }] }) : null);
};
Fo.registerLanguage = (...e) => Re.registerLanguage(...e);
var qw = Fo;
const { global: Y5 } = __STORYBOOK_MODULE_GLOBAL__;
var K5 = V({ "../../node_modules/react-fast-compare/index.js"(e, t) {
  var r = typeof Element < "u", n = typeof Map == "function", o = typeof Set == "function", l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(c, s) {
    if (c === s)
      return !0;
    if (c && s && typeof c == "object" && typeof s == "object") {
      if (c.constructor !== s.constructor)
        return !1;
      var u, p, g;
      if (Array.isArray(c)) {
        if (u = c.length, u != s.length)
          return !1;
        for (p = u; p-- !== 0; )
          if (!i(c[p], s[p]))
            return !1;
        return !0;
      }
      var d;
      if (n && c instanceof Map && s instanceof Map) {
        if (c.size !== s.size)
          return !1;
        for (d = c.entries(); !(p = d.next()).done; )
          if (!s.has(p.value[0]))
            return !1;
        for (d = c.entries(); !(p = d.next()).done; )
          if (!i(p.value[1], s.get(p.value[0])))
            return !1;
        return !0;
      }
      if (o && c instanceof Set && s instanceof Set) {
        if (c.size !== s.size)
          return !1;
        for (d = c.entries(); !(p = d.next()).done; )
          if (!s.has(p.value[0]))
            return !1;
        return !0;
      }
      if (l && ArrayBuffer.isView(c) && ArrayBuffer.isView(s)) {
        if (u = c.length, u != s.length)
          return !1;
        for (p = u; p-- !== 0; )
          if (c[p] !== s[p])
            return !1;
        return !0;
      }
      if (c.constructor === RegExp)
        return c.source === s.source && c.flags === s.flags;
      if (c.valueOf !== Object.prototype.valueOf && typeof c.valueOf == "function" && typeof s.valueOf == "function")
        return c.valueOf() === s.valueOf();
      if (c.toString !== Object.prototype.toString && typeof c.toString == "function" && typeof s.toString == "function")
        return c.toString() === s.toString();
      if (g = Object.keys(c), u = g.length, u !== Object.keys(s).length)
        return !1;
      for (p = u; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, g[p]))
          return !1;
      if (r && c instanceof Element)
        return !1;
      for (p = u; p-- !== 0; )
        if (!((g[p] === "_owner" || g[p] === "__v" || g[p] === "__o") && c.$$typeof) && !i(c[g[p]], s[g[p]]))
          return !1;
      return !0;
    }
    return c !== c && s !== s;
  }
  t.exports = function(c, s) {
    try {
      return i(c, s);
    } catch (u) {
      if ((u.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw u;
    }
  };
} });
function X5(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, l;
  for (l = 0; l < n.length; l++)
    o = n[l], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mt.apply(this, arguments);
}
var Yl = function(e) {
  return e.reduce(function(t, r) {
    var n = r[0], o = r[1];
    return t[n] = o, t;
  }, {});
}, Kl = typeof window < "u" && window.document && window.document.createElement ? h.useLayoutEffect : h.useEffect, Ae = "top", Ie = "bottom", Pe = "right", Se = "left", Vn = "auto", Xr = [Ae, Ie, Pe, Se], or = "start", Ir = "end", J5 = "clippingParents", pc = "viewport", Cr = "popper", Q5 = "reference", Xl = Xr.reduce(function(e, t) {
  return e.concat([t + "-" + or, t + "-" + Ir]);
}, []), fc = [].concat(Xr, [Vn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + or, t + "-" + Ir]);
}, []), e2 = "beforeRead", t2 = "read", r2 = "afterRead", n2 = "beforeMain", a2 = "main", o2 = "afterMain", l2 = "beforeWrite", i2 = "write", s2 = "afterWrite", c2 = [e2, t2, r2, n2, a2, o2, l2, i2, s2];
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Oe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vt(e) {
  var t = Oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Me(e) {
  var t = Oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Do(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function u2(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, l = t.elements[r];
    !Me(l) || !ut(l) || (Object.assign(l.style, n), Object.keys(o).forEach(function(i) {
      var c = o[i];
      c === !1 ? l.removeAttribute(i) : l.setAttribute(i, c === !0 ? "" : c);
    }));
  });
}
function d2(e) {
  var t = e.state, r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], l = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Me(o) || !ut(o) || (Object.assign(o.style, c), Object.keys(l).forEach(function(s) {
        o.removeAttribute(s);
      }));
    });
  };
}
var p2 = { name: "applyStyles", enabled: !0, phase: "write", fn: u2, effect: d2, requires: ["computeStyles"] };
function ct(e) {
  return e.split("-")[0];
}
var jt = Math.max, On = Math.min, lr = Math.round;
function Za() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mc() {
  return !/^((?!chrome|android).)*safari/i.test(Za());
}
function ir(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, l = 1;
  t && Me(e) && (o = e.offsetWidth > 0 && lr(n.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && lr(n.height) / e.offsetHeight || 1);
  var i = Vt(e) ? Oe(e) : window, c = i.visualViewport, s = !mc() && r, u = (n.left + (s && c ? c.offsetLeft : 0)) / o, p = (n.top + (s && c ? c.offsetTop : 0)) / l, g = n.width / o, d = n.height / l;
  return { width: g, height: d, top: p, right: u + g, bottom: p + d, left: u, x: u, y: p };
}
function Lo(e) {
  var t = ir(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
}
function gc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Do(r)) {
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
  return Oe(e).getComputedStyle(e);
}
function f2(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function Ct(e) {
  return ((Vt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zn(e) {
  return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (Do(e) ? e.host : null) || Ct(e);
}
function Jl(e) {
  return !Me(e) || ht(e).position === "fixed" ? null : e.offsetParent;
}
function m2(e) {
  var t = /firefox/i.test(Za()), r = /Trident/i.test(Za());
  if (r && Me(e)) {
    var n = ht(e);
    if (n.position === "fixed")
      return null;
  }
  var o = zn(e);
  for (Do(o) && (o = o.host); Me(o) && ["html", "body"].indexOf(ut(o)) < 0; ) {
    var l = ht(o);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Jr(e) {
  for (var t = Oe(e), r = Jl(e); r && f2(r) && ht(r).position === "static"; )
    r = Jl(r);
  return r && (ut(r) === "html" || ut(r) === "body" && ht(r).position === "static") ? t : r || m2(e) || t;
}
function $o(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Rr(e, t, r) {
  return jt(e, On(t, r));
}
function g2(e, t, r) {
  var n = Rr(e, t, r);
  return n > r ? r : n;
}
function hc() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bc(e) {
  return Object.assign({}, hc(), e);
}
function yc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var h2 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, bc(typeof e != "number" ? e : yc(e, Xr));
};
function b2(e) {
  var t, r = e.state, n = e.name, o = e.options, l = r.elements.arrow, i = r.modifiersData.popperOffsets, c = ct(r.placement), s = $o(c), u = [Se, Pe].indexOf(c) >= 0, p = u ? "height" : "width";
  if (!(!l || !i)) {
    var g = h2(o.padding, r), d = Lo(l), m = s === "y" ? Ae : Se, f = s === "y" ? Ie : Pe, b = r.rects.reference[p] + r.rects.reference[s] - i[s] - r.rects.popper[p], y = i[s] - r.rects.reference[s], v = Jr(l), S = v ? s === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = b / 2 - y / 2, x = g[m], w = S - d[p] - g[f], A = S / 2 - d[p] / 2 + E, k = Rr(x, A, w), T = s;
    r.modifiersData[n] = (t = {}, t[T] = k, t.centerOffset = k - A, t);
  }
}
function y2(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || gc(t.elements.popper, o) && (t.elements.arrow = o));
}
var v2 = { name: "arrow", enabled: !0, phase: "main", fn: b2, effect: y2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function sr(e) {
  return e.split("-")[1];
}
var E2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function x2(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return { x: lr(r * o) / o || 0, y: lr(n * o) / o || 0 };
}
function Ql(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, l = e.variation, i = e.offsets, c = e.position, s = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, g = e.isFixed, d = i.x, m = d === void 0 ? 0 : d, f = i.y, b = f === void 0 ? 0 : f, y = typeof p == "function" ? p({ x: m, y: b }) : { x: m, y: b };
  m = y.x, b = y.y;
  var v = i.hasOwnProperty("x"), S = i.hasOwnProperty("y"), E = Se, x = Ae, w = window;
  if (u) {
    var A = Jr(r), k = "clientHeight", T = "clientWidth";
    if (A === Oe(r) && (A = Ct(r), ht(A).position !== "static" && c === "absolute" && (k = "scrollHeight", T = "scrollWidth")), A = A, o === Ae || (o === Se || o === Pe) && l === Ir) {
      x = Ie;
      var R = g && A === w && w.visualViewport ? w.visualViewport.height : A[k];
      b -= R - n.height, b *= s ? 1 : -1;
    }
    if (o === Se || (o === Ae || o === Ie) && l === Ir) {
      E = Pe;
      var C = g && A === w && w.visualViewport ? w.visualViewport.width : A[T];
      m -= C - n.width, m *= s ? 1 : -1;
    }
  }
  var _ = Object.assign({ position: c }, u && E2), D = p === !0 ? x2({ x: m, y: b }, Oe(r)) : { x: m, y: b };
  if (m = D.x, b = D.y, s) {
    var F;
    return Object.assign({}, _, (F = {}, F[x] = S ? "0" : "", F[E] = v ? "0" : "", F.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", F));
  }
  return Object.assign({}, _, (t = {}, t[x] = S ? b + "px" : "", t[E] = v ? m + "px" : "", t.transform = "", t));
}
function w2(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, l = r.adaptive, i = l === void 0 ? !0 : l, c = r.roundOffsets, s = c === void 0 ? !0 : c, u = { placement: ct(t.placement), variation: sr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ql(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ql(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var A2 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: w2, data: {} }, un = { passive: !0 };
function S2(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, l = o === void 0 ? !0 : o, i = n.resize, c = i === void 0 ? !0 : i, s = Oe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(p) {
    p.addEventListener("scroll", r.update, un);
  }), c && s.addEventListener("resize", r.update, un), function() {
    l && u.forEach(function(p) {
      p.removeEventListener("scroll", r.update, un);
    }), c && s.removeEventListener("resize", r.update, un);
  };
}
var C2 = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: S2, data: {} }, k2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return k2[t];
  });
}
var T2 = { start: "end", end: "start" };
function ei(e) {
  return e.replace(/start|end/g, function(t) {
    return T2[t];
  });
}
function Mo(e) {
  var t = Oe(e), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Bo(e) {
  return ir(Ct(e)).left + Mo(e).scrollLeft;
}
function O2(e, t) {
  var r = Oe(e), n = Ct(e), o = r.visualViewport, l = n.clientWidth, i = n.clientHeight, c = 0, s = 0;
  if (o) {
    l = o.width, i = o.height;
    var u = mc();
    (u || !u && t === "fixed") && (c = o.offsetLeft, s = o.offsetTop);
  }
  return { width: l, height: i, x: c + Bo(e), y: s };
}
function _2(e) {
  var t, r = Ct(e), n = Mo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, l = jt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = jt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + Bo(e), s = -n.scrollTop;
  return ht(o || r).direction === "rtl" && (c += jt(r.clientWidth, o ? o.clientWidth : 0) - l), { width: l, height: i, x: c, y: s };
}
function Io(e) {
  var t = ht(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function vc(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : Me(e) && Io(e) ? e : vc(zn(e));
}
function Fr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vc(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Oe(n), i = o ? [l].concat(l.visualViewport || [], Io(n) ? n : []) : n, c = t.concat(i);
  return o ? c : c.concat(Fr(zn(i)));
}
function Va(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function R2(e, t) {
  var r = ir(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ti(e, t, r) {
  return t === pc ? Va(O2(e, r)) : Vt(t) ? R2(t, r) : Va(_2(Ct(e)));
}
function F2(e) {
  var t = Fr(zn(e)), r = ["absolute", "fixed"].indexOf(ht(e).position) >= 0, n = r && Me(e) ? Jr(e) : e;
  return Vt(n) ? t.filter(function(o) {
    return Vt(o) && gc(o, n) && ut(o) !== "body";
  }) : [];
}
function D2(e, t, r, n) {
  var o = t === "clippingParents" ? F2(e) : [].concat(t), l = [].concat(o, [r]), i = l[0], c = l.reduce(function(s, u) {
    var p = ti(e, u, n);
    return s.top = jt(p.top, s.top), s.right = On(p.right, s.right), s.bottom = On(p.bottom, s.bottom), s.left = jt(p.left, s.left), s;
  }, ti(e, i, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Ec(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? ct(n) : null, l = n ? sr(n) : null, i = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, s;
  switch (o) {
    case Ae:
      s = { x: i, y: t.y - r.height };
      break;
    case Ie:
      s = { x: i, y: t.y + t.height };
      break;
    case Pe:
      s = { x: t.x + t.width, y: c };
      break;
    case Se:
      s = { x: t.x - r.width, y: c };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = o ? $o(o) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (l) {
      case or:
        s[u] = s[u] - (t[p] / 2 - r[p] / 2);
        break;
      case Ir:
        s[u] = s[u] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return s;
}
function Pr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, l = r.strategy, i = l === void 0 ? e.strategy : l, c = r.boundary, s = c === void 0 ? J5 : c, u = r.rootBoundary, p = u === void 0 ? pc : u, g = r.elementContext, d = g === void 0 ? Cr : g, m = r.altBoundary, f = m === void 0 ? !1 : m, b = r.padding, y = b === void 0 ? 0 : b, v = bc(typeof y != "number" ? y : yc(y, Xr)), S = d === Cr ? Q5 : Cr, E = e.rects.popper, x = e.elements[f ? S : d], w = D2(Vt(x) ? x : x.contextElement || Ct(e.elements.popper), s, p, i), A = ir(e.elements.reference), k = Ec({ reference: A, element: E, strategy: "absolute", placement: o }), T = Va(Object.assign({}, E, k)), R = d === Cr ? T : A, C = { top: w.top - R.top + v.top, bottom: R.bottom - w.bottom + v.bottom, left: w.left - R.left + v.left, right: R.right - w.right + v.right }, _ = e.modifiersData.offset;
  if (d === Cr && _) {
    var D = _[o];
    Object.keys(C).forEach(function(F) {
      var $ = [Pe, Ie].indexOf(F) >= 0 ? 1 : -1, L = [Ae, Ie].indexOf(F) >= 0 ? "y" : "x";
      C[F] += D[L] * $;
    });
  }
  return C;
}
function L2(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, l = r.rootBoundary, i = r.padding, c = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? fc : s, p = sr(n), g = p ? c ? Xl : Xl.filter(function(f) {
    return sr(f) === p;
  }) : Xr, d = g.filter(function(f) {
    return u.indexOf(f) >= 0;
  });
  d.length === 0 && (d = g);
  var m = d.reduce(function(f, b) {
    return f[b] = Pr(e, { placement: b, boundary: o, rootBoundary: l, padding: i })[ct(b)], f;
  }, {});
  return Object.keys(m).sort(function(f, b) {
    return m[f] - m[b];
  });
}
function $2(e) {
  if (ct(e) === Vn)
    return [];
  var t = vn(e);
  return [ei(e), t, ei(t)];
}
function M2(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, c = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, p = r.boundary, g = r.rootBoundary, d = r.altBoundary, m = r.flipVariations, f = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, y = t.options.placement, v = ct(y), S = v === y, E = s || (S || !f ? [vn(y)] : $2(y)), x = [y].concat(E).reduce(function(z, P) {
      return z.concat(ct(P) === Vn ? L2(t, { placement: P, boundary: p, rootBoundary: g, padding: u, flipVariations: f, allowedAutoPlacements: b }) : P);
    }, []), w = t.rects.reference, A = t.rects.popper, k = /* @__PURE__ */ new Map(), T = !0, R = x[0], C = 0; C < x.length; C++) {
      var _ = x[C], D = ct(_), F = sr(_) === or, $ = [Ae, Ie].indexOf(D) >= 0, L = $ ? "width" : "height", M = Pr(t, { placement: _, boundary: p, rootBoundary: g, altBoundary: d, padding: u }), I = $ ? F ? Pe : Se : F ? Ie : Ae;
      w[L] > A[L] && (I = vn(I));
      var H = vn(I), B = [];
      if (l && B.push(M[D] <= 0), c && B.push(M[I] <= 0, M[H] <= 0), B.every(function(z) {
        return z;
      })) {
        R = _, T = !1;
        break;
      }
      k.set(_, B);
    }
    if (T)
      for (var N = f ? 3 : 1, G = function(z) {
        var P = x.find(function(W) {
          var U = k.get(W);
          if (U)
            return U.slice(0, z).every(function(oe) {
              return oe;
            });
        });
        if (P)
          return R = P, "break";
      }, J = N; J > 0; J--) {
        var Y = G(J);
        if (Y === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var B2 = { name: "flip", enabled: !0, phase: "main", fn: M2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ri(e, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
}
function ni(e) {
  return [Ae, Pe, Ie, Se].some(function(t) {
    return e[t] >= 0;
  });
}
function I2(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, l = t.modifiersData.preventOverflow, i = Pr(t, { elementContext: "reference" }), c = Pr(t, { altBoundary: !0 }), s = ri(i, n), u = ri(c, o, l), p = ni(s), g = ni(u);
  t.modifiersData[r] = { referenceClippingOffsets: s, popperEscapeOffsets: u, isReferenceHidden: p, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": g });
}
var P2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: I2 };
function j2(e, t, r) {
  var n = ct(e), o = [Se, Ae].indexOf(n) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r, i = l[0], c = l[1];
  return i = i || 0, c = (c || 0) * o, [Se, Pe].indexOf(n) >= 0 ? { x: c, y: i } : { x: i, y: c };
}
function N2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, l = o === void 0 ? [0, 0] : o, i = fc.reduce(function(p, g) {
    return p[g] = j2(g, t.rects, l), p;
  }, {}), c = i[t.placement], s = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = i;
}
var H2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: N2 };
function Z2(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ec({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var V2 = { name: "popperOffsets", enabled: !0, phase: "read", fn: Z2, data: {} };
function z2(e) {
  return e === "x" ? "y" : "x";
}
function q2(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, l = o === void 0 ? !0 : o, i = r.altAxis, c = i === void 0 ? !1 : i, s = r.boundary, u = r.rootBoundary, p = r.altBoundary, g = r.padding, d = r.tether, m = d === void 0 ? !0 : d, f = r.tetherOffset, b = f === void 0 ? 0 : f, y = Pr(t, { boundary: s, rootBoundary: u, padding: g, altBoundary: p }), v = ct(t.placement), S = sr(t.placement), E = !S, x = $o(v), w = z2(x), A = t.modifiersData.popperOffsets, k = t.rects.reference, T = t.rects.popper, R = typeof b == "function" ? b(Object.assign({}, t.rects, { placement: t.placement })) : b, C = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (A) {
    if (l) {
      var F, $ = x === "y" ? Ae : Se, L = x === "y" ? Ie : Pe, M = x === "y" ? "height" : "width", I = A[x], H = I + y[$], B = I - y[L], N = m ? -T[M] / 2 : 0, G = S === or ? k[M] : T[M], J = S === or ? -T[M] : -k[M], Y = t.elements.arrow, z = m && Y ? Lo(Y) : { width: 0, height: 0 }, P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hc(), W = P[$], U = P[L], oe = Rr(0, k[M], z[M]), te = E ? k[M] / 2 - N - oe - W - C.mainAxis : G - oe - W - C.mainAxis, dt = E ? -k[M] / 2 + N + oe + U + C.mainAxis : J + oe + U + C.mainAxis, De = t.elements.arrow && Jr(t.elements.arrow), We = De ? x === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, j = (F = _ == null ? void 0 : _[x]) != null ? F : 0, He = I + te - j - We, Ge = I + dt - j, Ot = Rr(m ? On(H, He) : H, I, m ? jt(B, Ge) : B);
      A[x] = Ot, D[x] = Ot - I;
    }
    if (c) {
      var Wt, Ye = x === "x" ? Ae : Se, rn = x === "x" ? Ie : Pe, ve = A[w], _t = w === "y" ? "height" : "width", Ke = ve + y[Ye], Gt = ve - y[rn], Xe = [Ae, Se].indexOf(v) !== -1, Yt = (Wt = _ == null ? void 0 : _[w]) != null ? Wt : 0, Je = Xe ? Ke : ve - k[_t] - T[_t] - Yt + C.altAxis, ge = Xe ? ve + k[_t] + T[_t] - Yt - C.altAxis : Gt, Ze = m && Xe ? g2(Je, ve, ge) : Rr(m ? Je : Ke, ve, m ? ge : Gt);
      A[w] = Ze, D[w] = Ze - ve;
    }
    t.modifiersData[n] = D;
  }
}
var U2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: q2, requiresIfExists: ["offset"] };
function W2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function G2(e) {
  return e === Oe(e) || !Me(e) ? Mo(e) : W2(e);
}
function Y2(e) {
  var t = e.getBoundingClientRect(), r = lr(t.width) / e.offsetWidth || 1, n = lr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function K2(e, t, r) {
  r === void 0 && (r = !1);
  var n = Me(t), o = Me(t) && Y2(t), l = Ct(t), i = ir(e, o, r), c = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (n || !n && !r) && ((ut(t) !== "body" || Io(l)) && (c = G2(t)), Me(t) ? (s = ir(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : l && (s.x = Bo(l))), { x: i.left + c.scrollLeft - s.x, y: i.top + c.scrollTop - s.y, width: i.width, height: i.height };
}
function X2(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function o(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function(c) {
      if (!r.has(c)) {
        var s = t.get(c);
        s && o(s);
      }
    }), n.push(l);
  }
  return e.forEach(function(l) {
    r.has(l.name) || o(l);
  }), n;
}
function J2(e) {
  var t = X2(e);
  return c2.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Q2(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ef(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, { options: Object.assign({}, o.options, n.options), data: Object.assign({}, o.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ai = { placement: "bottom", modifiers: [], strategy: "absolute" };
function oi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function tf(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, l = o === void 0 ? ai : o;
  return function(i, c, s) {
    s === void 0 && (s = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ai, l), modifiersData: {}, elements: { reference: i, popper: c }, attributes: {}, styles: {} }, p = [], g = !1, d = { state: u, setOptions: function(b) {
      var y = typeof b == "function" ? b(u.options) : b;
      f(), u.options = Object.assign({}, l, u.options, y), u.scrollParents = { reference: Vt(i) ? Fr(i) : i.contextElement ? Fr(i.contextElement) : [], popper: Fr(c) };
      var v = J2(ef([].concat(n, u.options.modifiers)));
      return u.orderedModifiers = v.filter(function(S) {
        return S.enabled;
      }), m(), d.update();
    }, forceUpdate: function() {
      if (!g) {
        var b = u.elements, y = b.reference, v = b.popper;
        if (oi(y, v)) {
          u.rects = { reference: K2(y, Jr(v), u.options.strategy === "fixed"), popper: Lo(v) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(T) {
            return u.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var S = 0; S < u.orderedModifiers.length; S++) {
            if (u.reset === !0) {
              u.reset = !1, S = -1;
              continue;
            }
            var E = u.orderedModifiers[S], x = E.fn, w = E.options, A = w === void 0 ? {} : w, k = E.name;
            typeof x == "function" && (u = x({ state: u, options: A, name: k, instance: d }) || u);
          }
        }
      }
    }, update: Q2(function() {
      return new Promise(function(b) {
        d.forceUpdate(), b(u);
      });
    }), destroy: function() {
      f(), g = !0;
    } };
    if (!oi(i, c))
      return d;
    d.setOptions(s).then(function(b) {
      !g && s.onFirstUpdate && s.onFirstUpdate(b);
    });
    function m() {
      u.orderedModifiers.forEach(function(b) {
        var y = b.name, v = b.options, S = v === void 0 ? {} : v, E = b.effect;
        if (typeof E == "function") {
          var x = E({ state: u, name: y, instance: d, options: S }), w = function() {
          };
          p.push(x || w);
        }
      });
    }
    function f() {
      p.forEach(function(b) {
        return b();
      }), p = [];
    }
    return d;
  };
}
var rf = [C2, V2, A2, p2, H2, B2, U2, v2, P2], nf = tf({ defaultModifiers: rf }), af = _e(K5()), of = [], lf = function(e, t, r) {
  r === void 0 && (r = {});
  var n = h.useRef(null), o = { onFirstUpdate: r.onFirstUpdate, placement: r.placement || "bottom", strategy: r.strategy || "absolute", modifiers: r.modifiers || of }, l = h.useState({ styles: { popper: { position: o.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), i = l[0], c = l[1], s = h.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(g) {
      var d = g.state, m = Object.keys(d.elements);
      is.flushSync(function() {
        c({ styles: Yl(m.map(function(f) {
          return [f, d.styles[f] || {}];
        })), attributes: Yl(m.map(function(f) {
          return [f, d.attributes[f]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), u = h.useMemo(function() {
    var g = { onFirstUpdate: o.onFirstUpdate, placement: o.placement, strategy: o.strategy, modifiers: [].concat(o.modifiers, [s, { name: "applyStyles", enabled: !1 }]) };
    return (0, af.default)(n.current, g) ? n.current || g : (n.current = g, g);
  }, [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]), p = h.useRef();
  return Kl(function() {
    p.current && p.current.setOptions(u);
  }, [u]), Kl(function() {
    if (!(e == null || t == null)) {
      var g = r.createPopper || nf, d = g(e, t, u);
      return p.current = d, function() {
        d.destroy(), p.current = null;
      };
    }
  }, [e, t, r.createPopper]), { state: p.current ? p.current.state : null, styles: i.styles, attributes: i.attributes, update: p.current ? p.current.update : null, forceUpdate: p.current ? p.current.forceUpdate : null };
};
function xc(e) {
  var t = h.useRef(e);
  return t.current = e, h.useCallback(function() {
    return t.current;
  }, []);
}
var sf = function() {
};
function cf(e) {
  var t = e.initial, r = e.value, n = e.onChange, o = n === void 0 ? sf : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var l = h.useState(t), i = l[0], c = l[1], s = xc(i), u = h.useCallback(function(g) {
    var d = s(), m = typeof g == "function" ? g(d) : g;
    typeof m.persist == "function" && m.persist(), c(m), typeof o == "function" && o(m);
  }, [s, o]), p = r !== void 0;
  return [p ? r : i, p ? o : u];
}
function wc(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), function() {
    return { width: 0, height: 0, top: t, right: e, bottom: t, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var uf = ["styles", "attributes"], li = { getBoundingClientRect: wc() }, ii = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function df(e, t) {
  var r, n, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(ii).reduce(function(L, M) {
    var I;
    return mt({}, L, (I = {}, I[M] = L[M] !== void 0 ? L[M] : ii[M], I));
  }, e), i = h.useMemo(function() {
    return [{ name: "offset", options: { offset: l.offset } }];
  }, Array.isArray(l.offset) ? l.offset : []), c = mt({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }), s = h.useState(null), u = s[0], p = s[1], g = h.useState(null), d = g[0], m = g[1], f = cf({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }), b = f[0], y = f[1], v = h.useRef();
  h.useEffect(function() {
    return function() {
      return clearTimeout(v.current);
    };
  }, []);
  var S = lf(l.followCursor ? li : u, d, c), E = S.styles, x = S.attributes, w = X5(S, uf), A = w.update, k = xc({ visible: b, triggerRef: u, tooltipRef: d, finalConfig: l }), T = h.useCallback(function(L) {
    return Array.isArray(l.trigger) ? l.trigger.includes(L) : l.trigger === L;
  }, Array.isArray(l.trigger) ? l.trigger : [l.trigger]), R = h.useCallback(function() {
    clearTimeout(v.current), v.current = window.setTimeout(function() {
      return y(!1);
    }, l.delayHide);
  }, [l.delayHide, y]), C = h.useCallback(function() {
    clearTimeout(v.current), v.current = window.setTimeout(function() {
      return y(!0);
    }, l.delayShow);
  }, [l.delayShow, y]), _ = h.useCallback(function() {
    k().visible ? R() : C();
  }, [k, R, C]);
  h.useEffect(function() {
    if (k().finalConfig.closeOnOutsideClick) {
      var L = function(M) {
        var I, H = k(), B = H.tooltipRef, N = H.triggerRef, G = (M.composedPath == null || (I = M.composedPath()) == null ? void 0 : I[0]) || M.target;
        G instanceof Node && B != null && N != null && !B.contains(G) && !N.contains(G) && R();
      };
      return document.addEventListener("mousedown", L), function() {
        return document.removeEventListener("mousedown", L);
      };
    }
  }, [k, R]), h.useEffect(function() {
    if (!(u == null || !T("click")))
      return u.addEventListener("click", _), function() {
        return u.removeEventListener("click", _);
      };
  }, [u, T, _]), h.useEffect(function() {
    if (!(u == null || !T("double-click")))
      return u.addEventListener("dblclick", _), function() {
        return u.removeEventListener("dblclick", _);
      };
  }, [u, T, _]), h.useEffect(function() {
    if (!(u == null || !T("right-click"))) {
      var L = function(M) {
        M.preventDefault(), _();
      };
      return u.addEventListener("contextmenu", L), function() {
        return u.removeEventListener("contextmenu", L);
      };
    }
  }, [u, T, _]), h.useEffect(function() {
    if (!(u == null || !T("focus")))
      return u.addEventListener("focus", C), u.addEventListener("blur", R), function() {
        u.removeEventListener("focus", C), u.removeEventListener("blur", R);
      };
  }, [u, T, C, R]), h.useEffect(function() {
    if (!(u == null || !T("hover")))
      return u.addEventListener("mouseenter", C), u.addEventListener("mouseleave", R), function() {
        u.removeEventListener("mouseenter", C), u.removeEventListener("mouseleave", R);
      };
  }, [u, T, C, R]), h.useEffect(function() {
    if (!(d == null || !T("hover") || !k().finalConfig.interactive))
      return d.addEventListener("mouseenter", C), d.addEventListener("mouseleave", R), function() {
        d.removeEventListener("mouseenter", C), d.removeEventListener("mouseleave", R);
      };
  }, [d, T, C, R, k]);
  var D = w == null || (r = w.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null ? void 0 : o.isReferenceHidden;
  h.useEffect(function() {
    l.closeOnTriggerHidden && D && R();
  }, [l.closeOnTriggerHidden, R, D]), h.useEffect(function() {
    if (!l.followCursor || u == null)
      return;
    function L(M) {
      var I = M.clientX, H = M.clientY;
      li.getBoundingClientRect = wc(I, H), A == null || A();
    }
    return u.addEventListener("mousemove", L), function() {
      return u.removeEventListener("mousemove", L);
    };
  }, [l.followCursor, u, A]), h.useEffect(function() {
    if (!(d == null || A == null || l.mutationObserverOptions == null)) {
      var L = new MutationObserver(A);
      return L.observe(d, l.mutationObserverOptions), function() {
        return L.disconnect();
      };
    }
  }, [l.mutationObserverOptions, d, A]);
  var F = function(L) {
    return L === void 0 && (L = {}), mt({}, L, { style: mt({}, L.style, E.popper) }, x.popper, { "data-popper-interactive": l.interactive });
  }, $ = function(L) {
    return L === void 0 && (L = {}), mt({}, L, x.arrow, { style: mt({}, L.style, E.arrow), "data-popper-arrow": !0 });
  };
  return mt({ getArrowProps: $, getTooltipProps: F, setTooltipRef: m, setTriggerRef: p, tooltipRef: d, triggerRef: u, visible: b }, w);
}
var Le = zt(1e3)((e, t, r, n = 0) => t.split("-")[0] === e ? r : n), vt = 8, pf = O.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
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
}, ({ theme: e, color: t, placement: r }) => ({ bottom: `${Le("top", r, `${vt * -1}px`, "auto")}`, top: `${Le("bottom", r, `${vt * -1}px`, "auto")}`, right: `${Le("left", r, `${vt * -1}px`, "auto")}`, left: `${Le("right", r, `${vt * -1}px`, "auto")}`, borderBottomWidth: `${Le("top", r, "0", vt)}px`, borderTopWidth: `${Le("bottom", r, "0", vt)}px`, borderRightWidth: `${Le("left", r, "0", vt)}px`, borderLeftWidth: `${Le("right", r, "0", vt)}px`, borderTopColor: Le("top", r, e.color[t] || t || e.base === "light" ? _r(e.background.app) : e.background.app, "transparent"), borderBottomColor: Le("bottom", r, e.color[t] || t || e.base === "light" ? _r(e.background.app) : e.background.app, "transparent"), borderLeftColor: Le("left", r, e.color[t] || t || e.base === "light" ? _r(e.background.app) : e.background.app, "transparent"), borderRightColor: Le("right", r, e.color[t] || t || e.base === "light" ? _r(e.background.app) : e.background.app, "transparent") })), ff = O.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: t, hasChrome: r }) => r ? { background: e.color[t] || t || e.base === "light" ? _r(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), Po = a.forwardRef(({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: o, color: l, withArrows: i, ...c }, s) => a.createElement(ff, { "data-testid": "tooltip", hasChrome: t, ref: s, ...c, color: l }, t && i && a.createElement(pf, { placement: e, ...n, color: l }), r));
Po.displayName = "Tooltip";
Po.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: En } = Y5, mf = O.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, gf = O.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, Ac = ({ svg: e, trigger: t, closeOnOutsideClick: r, placement: n, hasChrome: o, withArrows: l, offset: i, tooltip: c, children: s, closeOnTriggerHidden: u, mutationObserverOptions: p, closeOnClick: g, tooltipShown: d, onVisibilityChange: m, defaultVisible: f, delayHide: b, visible: y, interactive: v, delayShow: S, modifiers: E, strategy: x, followCursor: w, onVisibleChange: A, ...k }) => {
  let T = e ? gf : mf, { getArrowProps: R, getTooltipProps: C, setTooltipRef: _, setTriggerRef: D, visible: F, state: $ } = df({ trigger: t, placement: n, defaultVisible: f ?? d, delayHide: b, interactive: v, closeOnOutsideClick: r ?? g, closeOnTriggerHidden: u, onVisibleChange: (M) => {
    m == null || m(M), A == null || A(M);
  }, delayShow: S, followCursor: w, mutationObserverOptions: p, visible: y, offset: i }, { modifiers: E, strategy: x }), L = a.createElement(Po, { placement: $ == null ? void 0 : $.placement, ref: _, hasChrome: o, arrowProps: R(), withArrows: l, ...C() }, typeof c == "function" ? c({ onHide: () => A(!1) }) : c);
  return a.createElement(a.Fragment, null, a.createElement(T, { trigger: t, ref: D, ...k }, s), F && w0.createPortal(L, En.body));
};
Ac.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var hf = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, o] = h.useState(e), l = h.useCallback((i) => {
    t && t(i) === !1 || o(i);
  }, [t]);
  return h.useEffect(() => {
    let i = () => l(!1);
    En.addEventListener("keydown", i, !1);
    let c = Array.from(En.getElementsByTagName("iframe")), s = [];
    return c.forEach((u) => {
      let p = () => {
        try {
          u.contentWindow.document && (u.contentWindow.document.addEventListener("click", i), s.push(() => {
            try {
              u.contentWindow.document.removeEventListener("click", i);
            } catch {
            }
          }));
        } catch {
        }
      };
      p(), u.addEventListener("load", p), s.push(() => {
        u.removeEventListener("load", p);
      });
    }), () => {
      En.removeEventListener("keydown", i), s.forEach((u) => {
        u();
      });
    };
  }), a.createElement(Ac, { ...r, visible: n, onVisibleChange: l });
};
function bf(e, t) {
  var r = h.useRef(null), n = h.useRef(null);
  n.current = t;
  var o = h.useRef(null);
  h.useEffect(function() {
    l();
  });
  var l = h.useCallback(function() {
    var i = o.current, c = n.current, s = i || (c ? c instanceof Element ? c : c.current : null);
    r.current && r.current.element === s && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: s,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s ? e(s) : void 0
    });
  }, [e]);
  return h.useEffect(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), h.useCallback(function(i) {
    o.current = i, l();
  }, [l]);
}
function si(e, t, r) {
  return e[t] ? e[t][0] ? e[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
function Sc(e) {
  e === void 0 && (e = {});
  var t = e.onResize, r = h.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round, o = h.useRef(), l = h.useState({
    width: void 0,
    height: void 0
  }), i = l[0], c = l[1], s = h.useRef(!1);
  h.useEffect(function() {
    return s.current = !1, function() {
      s.current = !0;
    };
  }, []);
  var u = h.useRef({
    width: void 0,
    height: void 0
  }), p = bf(h.useCallback(function(g) {
    return (!o.current || o.current.box !== e.box || o.current.round !== n) && (o.current = {
      box: e.box,
      round: n,
      instance: new ResizeObserver(function(d) {
        var m = d[0], f = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", b = si(m, f, "inlineSize"), y = si(m, f, "blockSize"), v = b ? n(b) : void 0, S = y ? n(y) : void 0;
        if (u.current.width !== v || u.current.height !== S) {
          var E = {
            width: v,
            height: S
          };
          u.current.width = v, u.current.height = S, r.current ? r.current(E) : s.current || c(E);
        }
      })
    }), o.current.instance.observe(g, {
      box: e.box
    }), function() {
      o.current && o.current.instance.unobserve(g);
    };
  }, [e.box, n]), e.ref);
  return h.useMemo(function() {
    return {
      ref: p,
      width: i.width,
      height: i.height
    };
  }, [p, i.width, i.height]);
}
const { global: yf } = __STORYBOOK_MODULE_GLOBAL__;
var re = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e;
};
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jr.apply(this, arguments);
}
function vf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nr(e, t) {
  return Nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Nr(e, t);
}
function Ef(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nr(e, t);
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, za(e);
}
function xf(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Cc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cc = function() {
    return !!e;
  })();
}
function wf(e, t, r) {
  if (Cc())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Nr(o, r.prototype), o;
}
function qa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return qa = function(r) {
    if (r === null || !xf(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, n);
    }
    function n() {
      return wf(r, arguments, za(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Nr(n, r);
  }, qa(e);
}
var Af = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
function Sf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var lt = function(e) {
  Ef(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, Sf.apply(void 0, [Af[r]].concat(l))) || this;
    }
    return vf(n);
  }
  return t;
}(qa(Error));
function pa(e) {
  return Math.round(e * 255);
}
function Cf(e, t, r) {
  return pa(e) + "," + pa(t) + "," + pa(r);
}
function Hr(e, t, r, n) {
  if (n === void 0 && (n = Cf), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), c = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (c = l, s = i) : o >= 1 && o < 2 ? (c = i, s = l) : o >= 2 && o < 3 ? (s = l, u = i) : o >= 3 && o < 4 ? (s = i, u = l) : o >= 4 && o < 5 ? (c = i, u = l) : o >= 5 && o < 6 && (c = l, u = i);
  var p = r - l / 2, g = c + p, d = s + p, m = u + p;
  return n(g, d, m);
}
var ci = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function kf(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return ci[t] ? "#" + ci[t] : e;
}
var Tf = /^#[a-fA-F0-9]{6}$/, Of = /^#[a-fA-F0-9]{8}$/, _f = /^#[a-fA-F0-9]{3}$/, Rf = /^#[a-fA-F0-9]{4}$/, fa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Ff = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Df = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Lf = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function jo(e) {
  if (typeof e != "string")
    throw new lt(3);
  var t = kf(e);
  if (t.match(Tf))
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(Of)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(_f))
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(Rf)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var o = fa.exec(t);
  if (o)
    return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var l = Ff.exec(t.substring(0, 50));
  if (l)
    return { red: parseInt("" + l[1], 10), green: parseInt("" + l[2], 10), blue: parseInt("" + l[3], 10), alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]) };
  var i = Df.exec(t);
  if (i) {
    var c = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, u = parseInt("" + i[3], 10) / 100, p = "rgb(" + Hr(c, s, u) + ")", g = fa.exec(p);
    if (!g)
      throw new lt(4, t, p);
    return { red: parseInt("" + g[1], 10), green: parseInt("" + g[2], 10), blue: parseInt("" + g[3], 10) };
  }
  var d = Lf.exec(t.substring(0, 50));
  if (d) {
    var m = parseInt("" + d[1], 10), f = parseInt("" + d[2], 10) / 100, b = parseInt("" + d[3], 10) / 100, y = "rgb(" + Hr(m, f, b) + ")", v = fa.exec(y);
    if (!v)
      throw new lt(4, t, y);
    return { red: parseInt("" + v[1], 10), green: parseInt("" + v[2], 10), blue: parseInt("" + v[3], 10), alpha: parseFloat("" + d[4]) > 1 ? parseFloat("" + d[4]) / 100 : parseFloat("" + d[4]) };
  }
  throw new lt(5);
}
function $f(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), l = Math.min(t, r, n), i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: i };
  var c, s = o - l, u = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      c = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      c = (n - t) / s + 2;
      break;
    default:
      c = (t - r) / s + 4;
      break;
  }
  return c *= 60, e.alpha !== void 0 ? { hue: c, saturation: u, lightness: i, alpha: e.alpha } : { hue: c, saturation: u, lightness: i };
}
function kc(e) {
  return $f(jo(e));
}
var Mf = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Ua = Mf;
function Lt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ma(e) {
  return Lt(Math.round(e * 255));
}
function Bf(e, t, r) {
  return Ua("#" + ma(e) + ma(t) + ma(r));
}
function _n(e, t, r) {
  return Hr(e, t, r, Bf);
}
function If(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return _n(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return _n(e.hue, e.saturation, e.lightness);
  throw new lt(1);
}
function Pf(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? _n(e, t, r) : "rgba(" + Hr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? _n(e.hue, e.saturation, e.lightness) : "rgba(" + Hr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new lt(2);
}
function Wa(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ua("#" + Lt(e) + Lt(t) + Lt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ua("#" + Lt(e.red) + Lt(e.green) + Lt(e.blue));
  throw new lt(6);
}
function gt(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = jo(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Wa(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Wa(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new lt(7);
}
var jf = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Nf = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, Hf = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Zf = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Tc(e) {
  if (typeof e != "object")
    throw new lt(8);
  if (Nf(e))
    return gt(e);
  if (jf(e))
    return Wa(e);
  if (Zf(e))
    return Pf(e);
  if (Hf(e))
    return If(e);
  throw new lt(8);
}
function Oc(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Oc(e, t, n);
  };
}
function No(e) {
  return Oc(e, e.length, []);
}
function Ho(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Vf(e, t) {
  if (t === "transparent")
    return t;
  var r = kc(t);
  return Tc(jr({}, r, { lightness: Ho(0, 1, r.lightness - parseFloat(e)) }));
}
var zf = No(Vf), er = zf;
function qf(e, t) {
  if (t === "transparent")
    return t;
  var r = kc(t);
  return Tc(jr({}, r, { lightness: Ho(0, 1, r.lightness + parseFloat(e)) }));
}
var Uf = No(qf), Wf = Uf;
function Gf(e, t) {
  if (t === "transparent")
    return t;
  var r = jo(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = jr({}, r, { alpha: Ho(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return gt(o);
}
var Yf = No(Gf), xe = Yf, gr = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), yt = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? xe(0.1, e.color.defaultText) : xe(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), ae = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), Ut = { margin: "16px 0" }, Kf = ({ href: e, children: t, ...r }) => {
  let n = /^\//.test(e), o = /^#.*/.test(e), l = n ? `./?path=${e}` : e;
  return a.createElement("a", { href: l, target: o ? "_self" : "_top", ...r }, t);
}, _c = O(Kf)(ae, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), Rc = O.blockquote(ae, Ut, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), Xf = (e) => typeof e == "string", Jf = /[\n\r]/g, Qf = O.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), yt), em = O(Fo)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Zo = ({ className: e, children: t, ...r }) => {
  let n = (e || "").match(/lang-(\S+)/), o = h.Children.toArray(t);
  return o.filter(Xf).some((l) => l.match(Jf)) ? a.createElement(em, { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? "plaintext", format: !1, ...r }, t) : a.createElement(Qf, { ...r, className: e }, o);
}, Fc = O.div(ae), Dc = O.dl(ae, Ut, { padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), Lc = O.h1(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), Vo = O.h2(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), zo = O.h3(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), $c = O.h4(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), Mc = O.h5(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), Bc = O.h6(ae, gr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), Ic = O.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), Pc = O.img({ maxWidth: "100%" }), jc = O.li(ae, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": yt({ theme: e }) })), tm = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Nc = O.ol(ae, Ut, tm, { listStyle: "decimal" }), Hc = O.p(ae, Ut, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": yt({ theme: e }) })), Zc = O.pre(ae, Ut, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), Vc = O.span(ae, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), zc = O.table(ae, Ut, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), qc = O.title(yt), rm = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Uc = O.ul(ae, Ut, rm, { listStyle: "disc" }), Qr = O.div(ae), Wc = { h1: (e) => a.createElement(Lc, { ...re(e, "h1") }), h2: (e) => a.createElement(Vo, { ...re(e, "h2") }), h3: (e) => a.createElement(zo, { ...re(e, "h3") }), h4: (e) => a.createElement($c, { ...re(e, "h4") }), h5: (e) => a.createElement(Mc, { ...re(e, "h5") }), h6: (e) => a.createElement(Bc, { ...re(e, "h6") }), pre: (e) => a.createElement(Zc, { ...re(e, "pre") }), a: (e) => a.createElement(_c, { ...re(e, "a") }), hr: (e) => a.createElement(Ic, { ...re(e, "hr") }), dl: (e) => a.createElement(Dc, { ...re(e, "dl") }), blockquote: (e) => a.createElement(Rc, { ...re(e, "blockquote") }), table: (e) => a.createElement(zc, { ...re(e, "table") }), img: (e) => a.createElement(Pc, { ...re(e, "img") }), div: (e) => a.createElement(Fc, { ...re(e, "div") }), span: (e) => a.createElement(Vc, { ...re(e, "span") }), li: (e) => a.createElement(jc, { ...re(e, "li") }), ul: (e) => a.createElement(Uc, { ...re(e, "ul") }), ol: (e) => a.createElement(Nc, { ...re(e, "ol") }), p: (e) => a.createElement(Hc, { ...re(e, "p") }), code: (e) => a.createElement(Zo, { ...re(e, "code") }), tt: (e) => a.createElement(qc, { ...re(e, "tt") }), resetwrapper: (e) => a.createElement(Qr, { ...re(e, "resetwrapper") }) };
O.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: t }) => {
  switch (t) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${xe(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${xe(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${xe(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${xe(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var Zr = { user: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), a.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: a.createElement(a.Fragment, null, a.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: a.createElement(a.Fragment, null, a.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), a.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), a.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: a.createElement(a.Fragment, null, a.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), a.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), a.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: a.createElement(a.Fragment, null, a.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), a.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), a.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: a.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), a.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), a.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), a.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), a.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), a.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: a.createElement(a.Fragment, null, a.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), a.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), a.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), a.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), a.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), a.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), a.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), a.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), a.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), a.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: a.createElement(a.Fragment, null, a.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: a.createElement(a.Fragment, null, a.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: a.createElement(a.Fragment, null, a.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), a.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: a.createElement(a.Fragment, null, a.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), a.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: a.createElement(a.Fragment, null, a.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: a.createElement(a.Fragment, null, a.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), a.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), a.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), a.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: a.createElement(a.Fragment, null, a.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: a.createElement(a.Fragment, null, a.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: a.createElement(a.Fragment, null, a.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: a.createElement(a.Fragment, null, a.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: a.createElement(a.Fragment, null, a.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: a.createElement(a.Fragment, null, a.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: a.createElement(a.Fragment, null, a.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: a.createElement(a.Fragment, null, a.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: a.createElement(a.Fragment, null, a.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: a.createElement(a.Fragment, null, a.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: a.createElement(a.Fragment, null, a.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: a.createElement(a.Fragment, null, a.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, Gc = O.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, Ee = ({ icon: e, useSymbol: t, ...r }) => a.createElement(Gc, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r }, t ? a.createElement("use", { xlinkHref: `#icon--${e}` }) : Zr[e]);
h.memo(function({ icons: e = Object.keys(Zr) }) {
  return a.createElement(Gc, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((t) => a.createElement("symbol", { id: `icon--${t}`, key: t }, Zr[t])));
});
var nm = 0, am = (e) => e.button === nm && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, om = (e, t) => {
  am(e) && (e.preventDefault(), t(e));
}, lm = O.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), im = O.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: er(0.07, e.color.secondary), "svg path:not([fill])": { fill: er(0.07, e.color.secondary) } }, "&:active": { color: er(0.1, e.color.secondary), "svg path:not([fill])": { fill: er(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: t, tertiary: r }) => {
  let n;
  return t && (n = [e.textMutedColor, e.color.dark, e.color.darker]), r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]), n ? { color: n[0], "svg path:not([fill])": { fill: n[0] }, "&:hover": { color: n[1], "svg path:not([fill])": { fill: n[1] } }, "&:active": { color: n[2], "svg path:not([fill])": { fill: n[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: t }) => t ? { color: e.color.lightest, ":not([fill])": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path:not([fill])": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path:not([fill])": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), Nt = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: o, className: l, ...i }) => a.createElement(im, { ...i, onClick: r && e ? (c) => om(c, r) : r, className: l }, a.createElement(lm, { withArrow: n, containsIcon: o }, t, n && a.createElement(Ee, { icon: "arrowright" })));
Nt.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
O.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var Ht = [], cr = null, sm = h.lazy(async () => {
  let { SyntaxHighlighter: e } = await import("./storybook-syntaxhighlighter-MJWPISIS-f6a030a0.es.js");
  return Ht.length > 0 && (Ht.forEach((t) => {
    e.registerLanguage(...t);
  }), Ht = []), cr === null && (cr = e), { default: (t) => a.createElement(e, { ...t }) };
}), cm = h.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([import("./storybook-syntaxhighlighter-MJWPISIS-f6a030a0.es.js"), import("./storybook-formatter-SWP5E3XI-b9c4fe2e.es.js")]);
  return Ht.length > 0 && (Ht.forEach((r) => {
    e.registerLanguage(...r);
  }), Ht = []), cr === null && (cr = e), { default: (r) => a.createElement(e, { ...r, formatter: t }) };
}), qn = (e) => a.createElement(h.Suspense, { fallback: a.createElement("div", null) }, e.format !== !1 ? a.createElement(cm, { ...e }) : a.createElement(sm, { ...e }));
qn.registerLanguage = (...e) => {
  if (cr !== null) {
    cr.registerLanguage(...e);
    return;
  }
  Ht.push(e);
};
O.div(({ theme: e, col: t, row: r = 1 }) => t ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: t * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${Ma}`]: { marginLeft: 0 } } : { "& > *": { marginTop: r * e.layoutMargin }, [`& > *:first-child${Ma}`]: { marginTop: 0 } }, ({ theme: e, outer: t, col: r, row: n }) => {
  switch (!0) {
    case !!(t && r):
      return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin };
    case !!(t && n):
      return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin };
    default:
      return {};
  }
});
var um = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), dm = O.div(), pm = O.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), Yc = ({ children: e, ...t }) => {
  let [r, n] = h.Children.toArray(e);
  return a.createElement(pm, { ...t }, a.createElement(um, null, r), n && a.createElement(dm, null, n));
}, fm = O.div(({ scale: e = 1, elementHeight: t }) => ({ height: t || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function mm({ scale: e, children: t }) {
  let r = h.useRef(null), [n, o] = h.useState(0), l = h.useCallback(({ height: i }) => {
    i && o(i / e);
  }, [e]);
  return h.useEffect(() => {
    r.current && o(r.current.getBoundingClientRect().height);
  }, [e]), Sc({ ref: r, onResize: l }), a.createElement(fm, { scale: e, elementHeight: n }, a.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
var gm = class extends h.Component {
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
}, Kc = { Element: mm, IFrame: gm }, { document: hm } = yf, bm = O.strong(({ theme: e }) => ({ color: e.color.orange })), ym = O.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), ui = O.em(({ theme: e }) => ({ color: e.textMutedColor })), vm = /(Error): (.*)\n/, Em = /at (?:(.*) )?\(?(.+)\)?/, xm = /([^@]+)?(?:\/<)?@(.+)?/, wm = /([^@]+)?@(.+)?/, Xc = ({ error: e }) => {
  if (!e)
    return a.createElement(h.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return a.createElement(h.Fragment, null, e.message || "This error has no stack or message");
  let t = e.stack.toString();
  t && e.message && !t.includes(e.message) && (t = `Error: ${e.message}

${t}`);
  let r = t.match(vm);
  if (!r)
    return a.createElement(h.Fragment, null, t);
  let [, n, o] = r, l = t.split(/\n/).slice(1), [, ...i] = l.map((c) => {
    let s = c.match(Em) || c.match(xm) || c.match(wm);
    return s ? { name: (s[1] || "").replace("/<", ""), location: s[2].replace(hm.location.origin, "") } : null;
  }).filter(Boolean);
  return a.createElement(h.Fragment, null, a.createElement("span", null, n), ": ", a.createElement(bm, null, o), a.createElement("br", null), i.map((c, s) => c.name ? a.createElement(h.Fragment, { key: s }, "  ", "at ", a.createElement(ym, null, c.name), " (", a.createElement(ui, null, c.location), ")", a.createElement("br", null)) : a.createElement(h.Fragment, { key: s }, "  ", "at ", a.createElement(ui, null, c.location), a.createElement("br", null))));
}, Jc = O.button(({ small: e, theme: t }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`, fontWeight: t.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: t }) => e ? { svg: { display: "block", margin: 0 }, ...t ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: t, secondary: r, gray: n }) => {
  let o;
  return n ? o = e.color.mediumlight : r ? o = e.color.secondary : t && (o = e.color.primary), o ? { background: o, color: n ? e.color.darkest : e.color.lightest, "&:hover": { background: er(0.05, o) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${gt(o, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${gt(o, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: t, inForm: r, small: n }) => t ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...r && n ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? er(0.02, e.button.background) : Wf(0.03, e.button.background), ...r ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${gt(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: t }) => t ? { boxShadow: `${xe(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: xe(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${xe(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${xe(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: xe(0, e.color.defaultText) } } : {}, ({ theme: e, outline: t, primary: r }) => {
  let n = e.color.primary;
  return t && r ? { boxShadow: `${n} 0 0 0 1px inset`, color: n, "svg path:not([fill])": { fill: n }, "&:hover": { boxShadow: `${n} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${n} 0 0 0 1px inset, ${gt(n, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${n} 0 0 0 1px inset, ${gt(n, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: t, primary: r, secondary: n }) => {
  let o;
  return n ? o = e.color.secondary : r && (o = e.color.primary), t && o ? { boxShadow: `${o} 0 0 0 1px inset`, color: o, "svg path:not([fill])": { fill: o }, "&:hover": { boxShadow: `${o} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: o, boxShadow: `${o} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${o} 0 0 0 1px inset, ${gt(o, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${o} 0 0 0 1px inset, ${gt(o, 0.2)} 0 8px 18px 0px` } } : {};
}), Am = Jc.withComponent("a"), Qc = Object.assign(h.forwardRef(function({ isLink: e, children: t, ...r }, n) {
  return e ? a.createElement(Am, { ...r, ref: n }, t) : a.createElement(Jc, { ...r, ref: n }, t);
}), { defaultProps: { isLink: !1 } }), Sm = O.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Cm = O.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), eu = ({ label: e, children: t, ...r }) => a.createElement(Sm, { ...r }, e ? a.createElement(Cm, null, a.createElement("span", null, e)) : null, t);
eu.defaultProps = { label: void 0 };
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ga.apply(this, arguments);
}
function km(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, l;
  for (l = 0; l < n.length; l++)
    o = n[l], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var di = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, Tm = function(e, t) {
  var r = h.useRef();
  return h.useCallback(function(n) {
    e.current = n, r.current && di(r.current, null), r.current = t, t && di(t, n);
  }, [t]);
}, Om = Tm, _m = function() {
}, Rm = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], Fm = function(e, t) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var r = e.onChange, n = r === void 0 ? _m : r;
  e.onHeightChange;
  var o = km(e, Rm);
  o.value;
  var l = h.useRef(null), i = Om(l, t);
  return h.useRef(0), h.useRef(), h.createElement("textarea", Ga({}, o, { onChange: n, ref: i }));
}, Dm = h.forwardRef(Fm), Lm = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, qo = ({ theme: e }) => ({ ...Lm, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), Un = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, tu = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, Wn = ({ valid: e, theme: t }) => {
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
}, $m = Object.assign(O(h.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("input", { ...n, ref: o });
}))(qo, Un, tu, Wn, { minHeight: 32 }), { displayName: "Input" }), Mm = Object.assign(O(h.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement("select", { ...n, ref: o });
}))(qo, Un, Wn, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Bm = Object.assign(O(h.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(Dm, { ...n, ref: o });
}))(qo, Un, tu, Wn, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Im = O(h.forwardRef(function({ size: e, valid: t, align: r, ...n }, o) {
  return a.createElement(Qc, { ...n, ref: o });
}))(Un, Wn, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Pm = Object.assign(h.forwardRef(function(e, t) {
  return a.createElement(Im, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t });
}), { displayName: "Button" }), qe = Object.assign(O.form({ boxSizing: "border-box", width: "100%" }), { Field: eu, Input: $m, Select: Mm, Textarea: Bm, Button: Pm }), jm = h.lazy(() => import("./storybook-WithTooltip-V3YHNWJZ-856c62c0.es.js").then((e) => ({ default: e.WithTooltip }))), Nm = (e) => a.createElement(h.Suspense, { fallback: a.createElement("div", null) }, a.createElement(jm, { ...e })), Hm = h.lazy(() => import("./storybook-WithTooltip-V3YHNWJZ-856c62c0.es.js").then((e) => ({ default: e.WithTooltipPure }))), ru = (e) => a.createElement(h.Suspense, { fallback: a.createElement("div", null) }, a.createElement(Hm, { ...e }));
O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
O.span();
O.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
O.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
O.div({ padding: 15, width: 280, boxSizing: "border-box" });
var Zm = O.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), Vm = ({ note: e, ...t }) => a.createElement(Zm, { ...t }, e), zm = O(({ active: e, loading: t, disabled: r, ...n }) => a.createElement("span", { ...n }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: t }) => e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}, ({ loading: e, theme: t }) => e ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow } : {}, ({ disabled: e, theme: t }) => e ? { color: xe(0.7, t.color.defaultText) } : {}), qm = O.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), Um = O.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), Wm = O.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: t }) => e ? { color: t.color.secondary } : {}, ({ theme: e, disabled: t }) => t ? { color: e.textMutedColor } : {}), pi = O.span(({ active: e, theme: t }) => e ? { "& svg": { opacity: 1 }, "& svg path:not([fill])": { fill: t.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), Gm = O.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), Ym = zt(100)((e, t, r) => {
  let n = {};
  return e && Object.assign(n, { onClick: e }), t && Object.assign(n, { href: t }), r && t && Object.assign(n, { to: t, as: r }), n;
}), nu = ({ loading: e, left: t, title: r, center: n, right: o, icon: l, active: i, disabled: c, isIndented: s, href: u, onClick: p, LinkWrapper: g, ...d }) => {
  let m = Ym(p, u, g), f = { active: i, disabled: c }, b = typeof l == "string" && Zr[l];
  return a.createElement(Gm, { ...f, ...d, ...m }, l ? a.createElement(pi, { ...f }, b ? a.createElement(Ee, { icon: l }) : l) : t && a.createElement(pi, { ...f }, t), r || n ? a.createElement(Um, { isIndented: !t && !l && s }, r && a.createElement(zm, { ...f, loading: e }, r), n && a.createElement(Wm, { ...f }, n)) : null, o && a.createElement(qm, { ...f }, o));
};
nu.defaultProps = { loading: !1, left: null, title: a.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var Uo = nu, Km = O.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), Xm = (e) => {
  let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l } = e, { title: i, href: c, active: s } = l, u = h.useCallback((g) => {
    r(g, l);
  }, [r]), p = !!r;
  return a.createElement(Uo, { title: i, active: s, href: c, id: `list-item-${n}`, LinkWrapper: t, isIndented: o, ...l, ...p ? { onClick: u } : {} });
}, Wo = ({ links: e, LinkWrapper: t }) => {
  let r = e.some((n) => n.left || n.icon);
  return a.createElement(Km, null, e.map(({ isGatsby: n, ...o }) => a.createElement(Xm, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })));
};
Wo.defaultProps = { LinkWrapper: Uo.defaultProps.LinkWrapper };
var Go = a.forwardRef(({ children: e, ...t }, r) => t.href != null ? a.createElement("a", { ref: r, ...t }, e) : a.createElement("button", { ref: r, type: "button", ...t }, e));
Go.displayName = "ButtonOrLink";
var en = O(Go, { shouldForwardProp: Ls })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: t, theme: r }) => e ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor } : { color: t || r.barTextColor, borderBottomColor: "transparent" });
en.displayName = "TabButton";
var Zt = O(Go, { shouldForwardProp: Ls })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: t }) => e ? { backgroundColor: t.background.hoverable, color: t.barSelectedColor } : {}, ({ disabled: e, theme: t }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: xe(0.88, t.color.secondary), color: t.barHoverColor }, "&:focus-visible": { outline: Vn }, "&:focus:not(:focus-visible)": { outline: "none" } });
Zt.displayName = "IconButton";
var Jm = O.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), Qm = O.div(() => ({ marginTop: 6, padding: 7, height: 28 })), au = () => a.createElement(Qm, null, a.createElement(Jm, null)), Ya = O.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
Ya.displayName = "Side";
var eg = ({ children: e, className: t, scrollable: r }) => r ? a.createElement(Ro, { vertical: !1, className: t }, e) : a.createElement("div", { className: t }, e), Yo = O(eg)(({ theme: e, scrollable: t = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: t ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: t = !1 }) => t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
Yo.displayName = "Bar";
var tg = O.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), Gn = ({ children: e, backgroundColor: t, ...r }) => {
  let [n, o] = h.Children.toArray(e);
  return a.createElement(Yo, { ...r }, a.createElement(tg, { bgColor: t }, a.createElement(Ya, { scrollable: r.scrollable, left: !0 }, n), o ? a.createElement(Ya, { right: !0 }, o) : null));
};
Gn.displayName = "FlexBar";
var rg = O.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), fi = (e) => h.Children.toArray(e).map(({ props: { title: t, id: r, color: n, children: o } }) => {
  let l = Array.isArray(o) ? o[0] : o;
  return { title: t, id: r, ...n ? { color: n } : {}, render: typeof l == "function" ? l : ({ active: i }) => a.createElement(rg, { active: i, role: "tabpanel" }, l) };
}), ng = O.span(({ theme: e, isActive: t }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: t ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), ag = O(en)(({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);
function og(e) {
  let t = h.useRef(), r = h.useRef(), n = h.useRef(/* @__PURE__ */ new Map()), { width: o = 1 } = Sc({ ref: t }), [l, i] = h.useState(e), [c, s] = h.useState([]), u = h.useRef(e), p = h.useCallback(({ menuName: d, actions: m }) => {
    let f = c.some(({ active: v }) => v), [b, y] = h.useState(!1);
    return a.createElement(a.Fragment, null, a.createElement(hf, { interactive: !0, visible: b, onVisibleChange: y, placement: "bottom", delayHide: 100, tooltip: a.createElement(Wo, { links: c.map(({ title: v, id: S, color: E, active: x }) => ({ id: S, title: v, color: E, active: x, onClick: (w) => {
      w.preventDefault(), m.onSelect(S);
    } })) }) }, a.createElement(ag, { ref: r, active: f, preActive: b, style: { visibility: c.length ? "visible" : "hidden" }, "aria-hidden": !c.length, className: "tabbutton", type: "button", role: "tab" }, d, a.createElement(ng, { className: "addon-collapsible-icon", isActive: f || b }))), c.map(({ title: v, id: S, color: E }, x) => {
      let w = `index-${x}`;
      return a.createElement(en, { id: `tabbutton-${ss(S) ?? w}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (A) => {
        n.current.set(S, A);
      }, className: "tabbutton", type: "button", key: S, textColor: E, role: "tab" }, v);
    }));
  }, [c]), g = h.useCallback(() => {
    if (!t.current || !r.current)
      return;
    let { x: d, width: m } = t.current.getBoundingClientRect(), { width: f } = r.current.getBoundingClientRect(), b = c.length ? d + m - f : d + m, y = [], v = 0, S = e.filter((E) => {
      let { id: x } = E, w = n.current.get(x), { width: A = 0 } = (w == null ? void 0 : w.getBoundingClientRect()) || {}, k = d + v + A > b;
      return (!k || !w) && y.push(E), v += A, k;
    });
    (y.length !== l.length || u.current !== e) && (i(y), s(S), u.current = e);
  }, [c.length, e, l]);
  return h.useLayoutEffect(g, [g, o]), { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: c, AddonTab: p };
}
var lg = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", ig = O.div(({ theme: e, bordered: t }) => t ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), Ko = O.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
Ko.displayName = "TabBar";
var sg = O.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: t }) => e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: t }) => e ? { height: `calc(100% - ${t ? 42 : 40}px)`, position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 40 + (t ? 1 : 0), overflow: "auto", [`& > *:first-child${lg}`]: { position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 0 + (t ? 1 : 0), height: `calc(100% - ${t ? 2 : 0}px)`, overflow: "auto" } } : {}), Yn = h.memo(({ children: e, selected: t, actions: r, absolute: n, bordered: o, tools: l, backgroundColor: i, id: c, menuName: s }) => {
  let u = fi(e).map((b) => b.id), p = h.useMemo(() => fi(e).map((b, y) => ({ ...b, active: t ? b.id === t : y === 0 })), [t, ...u]), { visibleList: g, tabBarRef: d, tabRefs: m, AddonTab: f } = og(p);
  return p.length ? a.createElement(ig, { absolute: n, bordered: o, id: c }, a.createElement(Gn, { scrollable: !1, border: !0, backgroundColor: i }, a.createElement(Ko, { style: { whiteSpace: "normal" }, ref: d, role: "tablist" }, g.map(({ title: b, id: y, active: v, color: S }, E) => {
    let x = `index-${E}`;
    return a.createElement(en, { id: `tabbutton-${ss(y) ?? x}`, ref: (w) => {
      m.current.set(y, w);
    }, className: `tabbutton ${v ? "tabbutton-active" : ""}`, type: "button", key: y, active: v, textColor: S, onClick: (w) => {
      w.preventDefault(), r.onSelect(y);
    }, role: "tab" }, typeof b == "function" ? a.createElement("title", null) : b);
  }), a.createElement(f, { menuName: s, actions: r })), l), a.createElement(sg, { id: "panel-tab-content", bordered: o, absolute: n }, p.map(({ id: b, active: y, render: v }) => a.createElement(v, { key: b, active: y }, null)))) : a.createElement(Yc, null, a.createElement(h.Fragment, { key: "title" }, "Nothing found"));
});
Yn.displayName = "Tabs";
Yn.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var ou = class extends h.Component {
  constructor(e) {
    super(e), this.handlers = { onSelect: (t) => this.setState({ selected: t }) }, this.state = { selected: e.initial };
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: o } = this.props, { selected: l } = this.state;
    return a.createElement(Yn, { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: o, actions: this.handlers }, r);
  }
};
ou.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var lu = O.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
lu.displayName = "Separator";
var cg = mr`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, ug = O.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${cg} 0.7s linear infinite`, mixBlendMode: "difference" })), mi = O.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), dg = O.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: xe(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), pg = O.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), gi = O.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), fg = O(Ee)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), mg = mr`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, gg = O.span({ "&::after": { content: "'...'", animation: `${mg} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), iu = ({ progress: e, error: t, size: r, ...n }) => {
  if (t)
    return a.createElement(mi, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, a.createElement(fg, { icon: "lightningoff" }), a.createElement(gi, null, t.message));
  if (e) {
    let { value: o, modules: l } = e, { message: i } = e;
    return l && (i += ` ${l.complete} / ${l.total} modules`), a.createElement(mi, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": o * 100, "aria-valuetext": i, role: "progressbar", ...n }, a.createElement(dg, null, a.createElement(pg, { style: { width: `${o * 100}%` } })), a.createElement(gi, null, i, o < 1 && a.createElement(gg, { key: i })));
  }
  return a.createElement(ug, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: r, ...n });
};
function hg(e) {
  let t = {}, r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var su = (e, t, r = {}) => {
  let [n, o] = e.split("?"), l = o ? { ...hg(o), ...r, id: t } : { ...r, id: t };
  return `${n}?${Object.entries(l).map((i) => `${i[0]}=${i[1]}`).join("&")}`;
};
O.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${Q.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${Jt.fonts.mono};
  font-size: ${Jt.size.s2 - 1}px;
`;
var cu = Wc;
Object.keys(Wc).forEach((e) => {
  h.forwardRef((t, r) => h.createElement(e, { ...t, ref: r }));
});
const bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: _c,
  ActionBar: Oo,
  Bar: Yo,
  Blockquote: Rc,
  Button: Qc,
  Code: Zo,
  DL: Dc,
  Div: Fc,
  ErrorFormatter: Xc,
  FlexBar: Gn,
  Form: qe,
  H1: Lc,
  H2: Vo,
  H3: zo,
  H4: $c,
  H5: Mc,
  H6: Bc,
  HR: Ic,
  IconButton: Zt,
  IconButtonSkeleton: au,
  Icons: Ee,
  Img: Pc,
  LI: jc,
  Link: Nt,
  ListItem: Uo,
  Loader: iu,
  OL: Nc,
  P: Hc,
  Placeholder: Yc,
  Pre: Zc,
  ResetWrapper: Qr,
  ScrollArea: Ro,
  Separator: lu,
  Span: Vc,
  SyntaxHighlighter: qn,
  TT: qc,
  TabBar: Ko,
  TabButton: en,
  Table: zc,
  Tabs: Yn,
  TabsState: ou,
  TooltipLinkList: Wo,
  TooltipNote: Vm,
  UL: Uc,
  WithTooltip: Nm,
  WithTooltipPure: ru,
  Zoom: Kc,
  codeCommon: yt,
  components: cu,
  createCopyToClipboardFunction: uc,
  getStoryHref: su,
  icons: Zr,
  nameSpaceClassNames: re,
  withReset: ae
}, Symbol.toStringTag, { value: "Module" }));
function yg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vr(e, t) {
  return Vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Vr(e, t);
}
function vg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vr(e, t);
}
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ka(e);
}
function Eg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function uu() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uu = function() {
    return !!e;
  })();
}
function xg(e, t, r) {
  if (uu())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Vr(o, r.prototype), o;
}
function Xa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Xa = function(n) {
    if (n === null || !Eg(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return xg(n, arguments, Ka(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Vr(o, n);
  }, Xa(e);
}
var wg = {
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
function Ag() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], l;
  for (l = 1; l < t.length; l += 1)
    o.push(t[l]);
  return o.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var it = /* @__PURE__ */ function(e) {
  vg(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, Ag.apply(void 0, [wg[r]].concat(l))) || this;
    }
    return yg(n);
  }
  return t;
}(/* @__PURE__ */ Xa(Error));
function ga(e) {
  return Math.round(e * 255);
}
function Sg(e, t, r) {
  return ga(e) + "," + ga(t) + "," + ga(r);
}
function zr(e, t, r, n) {
  if (n === void 0 && (n = Sg), t === 0)
    return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(o % 2 - 1)), c = 0, s = 0, u = 0;
  o >= 0 && o < 1 ? (c = l, s = i) : o >= 1 && o < 2 ? (c = i, s = l) : o >= 2 && o < 3 ? (s = l, u = i) : o >= 3 && o < 4 ? (s = i, u = l) : o >= 4 && o < 5 ? (c = i, u = l) : o >= 5 && o < 6 && (c = l, u = i);
  var p = r - l / 2, g = c + p, d = s + p, m = u + p;
  return n(g, d, m);
}
var hi = {
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
function Cg(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return hi[t] ? "#" + hi[t] : e;
}
var kg = /^#[a-fA-F0-9]{6}$/, Tg = /^#[a-fA-F0-9]{8}$/, Og = /^#[a-fA-F0-9]{3}$/, _g = /^#[a-fA-F0-9]{4}$/, ha = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Rg = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Fg = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Dg = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function ur(e) {
  if (typeof e != "string")
    throw new it(3);
  var t = Cg(e);
  if (t.match(kg))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Tg)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(Og))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(_g)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var o = ha.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var l = Rg.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var i = Fg.exec(t);
  if (i) {
    var c = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, u = parseInt("" + i[3], 10) / 100, p = "rgb(" + zr(c, s, u) + ")", g = ha.exec(p);
    if (!g)
      throw new it(4, t, p);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10)
    };
  }
  var d = Dg.exec(t.substring(0, 50));
  if (d) {
    var m = parseInt("" + d[1], 10), f = parseInt("" + d[2], 10) / 100, b = parseInt("" + d[3], 10) / 100, y = "rgb(" + zr(m, f, b) + ")", v = ha.exec(y);
    if (!v)
      throw new it(4, t, y);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10),
      alpha: parseFloat("" + d[4]) > 1 ? parseFloat("" + d[4]) / 100 : parseFloat("" + d[4])
    };
  }
  throw new it(5);
}
function Lg(e) {
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
  var c, s = o - l, u = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      c = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      c = (n - t) / s + 2;
      break;
    default:
      c = (t - r) / s + 4;
      break;
  }
  return c *= 60, e.alpha !== void 0 ? {
    hue: c,
    saturation: u,
    lightness: i,
    alpha: e.alpha
  } : {
    hue: c,
    saturation: u,
    lightness: i
  };
}
function kt(e) {
  return Lg(ur(e));
}
var $g = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, Ja = $g;
function $t(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ba(e) {
  return $t(Math.round(e * 255));
}
function Mg(e, t, r) {
  return Ja("#" + ba(e) + ba(t) + ba(r));
}
function Rn(e, t, r) {
  return zr(e, t, r, Mg);
}
function Bg(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Rn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Rn(e.hue, e.saturation, e.lightness);
  throw new it(1);
}
function Ig(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? Rn(e, t, r) : "rgba(" + zr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? Rn(e.hue, e.saturation, e.lightness) : "rgba(" + zr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new it(2);
}
function Qa(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ja("#" + $t(e) + $t(t) + $t(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ja("#" + $t(e.red) + $t(e.green) + $t(e.blue));
  throw new it(6);
}
function ot(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = ur(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Qa(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Qa(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new it(7);
}
var Pg = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, jg = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, Ng = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Hg = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function Tt(e) {
  if (typeof e != "object")
    throw new it(8);
  if (jg(e))
    return ot(e);
  if (Pg(e))
    return Qa(e);
  if (Hg(e))
    return Ig(e);
  if (Ng(e))
    return Bg(e);
  throw new it(8);
}
function du(e, t, r) {
  return function() {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e.apply(this, o) : du(e, t, o);
  };
}
function Fe(e) {
  return du(e, e.length, []);
}
function Zg(e, t) {
  if (t === "transparent")
    return t;
  var r = kt(t);
  return Tt(Be({}, r, {
    hue: r.hue + parseFloat(e)
  }));
}
Fe(Zg);
function hr(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Vg(e, t) {
  if (t === "transparent")
    return t;
  var r = kt(t);
  return Tt(Be({}, r, {
    lightness: hr(0, 1, r.lightness - parseFloat(e))
  }));
}
var zg = Fe(Vg), tt = zg;
function qg(e, t) {
  if (t === "transparent")
    return t;
  var r = kt(t);
  return Tt(Be({}, r, {
    saturation: hr(0, 1, r.saturation - parseFloat(e))
  }));
}
Fe(qg);
function Ug(e, t) {
  if (t === "transparent")
    return t;
  var r = kt(t);
  return Tt(Be({}, r, {
    lightness: hr(0, 1, r.lightness + parseFloat(e))
  }));
}
var Wg = Fe(Ug), Mt = Wg;
function Gg(e, t, r) {
  if (t === "transparent")
    return r;
  if (r === "transparent")
    return t;
  if (e === 0)
    return r;
  var n = ur(t), o = Be({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), l = ur(r), i = Be({}, l, {
    alpha: typeof l.alpha == "number" ? l.alpha : 1
  }), c = o.alpha - i.alpha, s = parseFloat(e) * 2 - 1, u = s * c === -1 ? s : s + c, p = 1 + s * c, g = (u / p + 1) / 2, d = 1 - g, m = {
    red: Math.floor(o.red * g + i.red * d),
    green: Math.floor(o.green * g + i.green * d),
    blue: Math.floor(o.blue * g + i.blue * d),
    alpha: o.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e))
  };
  return ot(m);
}
var Yg = Fe(Gg), pu = Yg;
function Kg(e, t) {
  if (t === "transparent")
    return t;
  var r = ur(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = Be({}, r, {
    alpha: hr(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return ot(o);
}
var Xg = Fe(Kg), dn = Xg;
function Jg(e, t) {
  if (t === "transparent")
    return t;
  var r = kt(t);
  return Tt(Be({}, r, {
    saturation: hr(0, 1, r.saturation + parseFloat(e))
  }));
}
Fe(Jg);
function Qg(e, t) {
  return t === "transparent" ? t : Tt(Be({}, kt(t), {
    hue: parseFloat(e)
  }));
}
Fe(Qg);
function eh(e, t) {
  return t === "transparent" ? t : Tt(Be({}, kt(t), {
    lightness: parseFloat(e)
  }));
}
Fe(eh);
function th(e, t) {
  return t === "transparent" ? t : Tt(Be({}, kt(t), {
    saturation: parseFloat(e)
  }));
}
Fe(th);
function rh(e, t) {
  return t === "transparent" ? t : pu(parseFloat(e), "rgb(0, 0, 0)", t);
}
Fe(rh);
function nh(e, t) {
  return t === "transparent" ? t : pu(parseFloat(e), "rgb(255, 255, 255)", t);
}
Fe(nh);
function ah(e, t) {
  if (t === "transparent")
    return t;
  var r = ur(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = Be({}, r, {
    alpha: hr(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return ot(o);
}
var oh = Fe(ah), ne = oh, lh = cs, ih = Z0, sh = Object.prototype, ch = sh.hasOwnProperty;
function uh(e, t, r) {
  var n = e[t];
  (!(ch.call(e, t) && ih(n, r)) || r === void 0 && !(t in e)) && lh(e, t, r);
}
var Xo = uh, dh = Xo, ph = us, fh = S0, bi = Ln, mh = C0;
function gh(e, t, r, n) {
  if (!bi(e))
    return e;
  t = ph(t, e);
  for (var o = -1, l = t.length, i = l - 1, c = e; c != null && ++o < l; ) {
    var s = mh(t[o]), u = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (o != i) {
      var p = c[s];
      u = n ? n(p, s, c) : void 0, u === void 0 && (u = bi(p) ? p : fh(t[o + 1]) ? [] : {});
    }
    dh(c, s, u), c = c[s];
  }
  return e;
}
var hh = gh, bh = k0, yh = hh, vh = us;
function Eh(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n], c = bh(e, i);
    r(c, i) && yh(l, vh(i, e), c);
  }
  return l;
}
var xh = Eh, wh = T0, Ah = ds, Sh = ps, Ch = O0, kh = Object.getOwnPropertySymbols, Th = kh ? function(e) {
  for (var t = []; e; )
    wh(t, Sh(e)), e = Ah(e);
  return t;
} : Ch, fu = Th;
function Oh(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var _h = Oh, Rh = Ln, Fh = fs, Dh = _h, Lh = Object.prototype, $h = Lh.hasOwnProperty;
function Mh(e) {
  if (!Rh(e))
    return Dh(e);
  var t = Fh(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !$h.call(e, n)) || r.push(n);
  return r;
}
var Bh = Mh, Ih = _0, Ph = Bh, jh = R0;
function Nh(e) {
  return jh(e) ? Ih(e, !0) : Ph(e);
}
var Jo = Nh, Hh = F0, Zh = fu, Vh = Jo;
function zh(e) {
  return Hh(e, Vh, Zh);
}
var mu = zh, qh = D0, Uh = L0, Wh = xh, Gh = mu;
function Yh(e, t) {
  if (e == null)
    return {};
  var r = qh(Gh(e), function(n) {
    return [n];
  });
  return t = Uh(t), Wh(e, r, function(n, o) {
    return t(n, o[0]);
  });
}
var Kh = Yh;
const Xh = /* @__PURE__ */ Dn(Kh);
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, It.apply(this, arguments);
}
const Jh = ["children", "options"], Z = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var yi;
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(yi || (yi = {}));
const Ei = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { class: "className", for: "htmlFor" }), xi = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Qh = ["style", "script"], eb = ["src", "href", "data", "formAction", "srcDoc", "action"], tb = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, rb = /mailto:/i, nb = /\n{2,}$/, gu = /^(\s*>[\s\S]*?)(?=\n\n|$)/, ab = /^ *> ?/gm, ob = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, lb = /^ {2,}\n/, ib = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, hu = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, bu = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, sb = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, cb = /^(?:\n *)*\n/, ub = /\r\n?/g, db = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, pb = /^\[\^([^\]]+)]/, fb = /\f/g, mb = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, gb = /^\s*?\[(x|\s)\]/, yu = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, vu = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Eu = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, eo = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, hb = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, xu = /^<!--[\s\S]*?(?:-->)/, bb = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, to = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, yb = /^\{.*\}$/, vb = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Eb = /^<([^ >]+@[^ >]+)>/, xb = /^<([^ >]+:\/[^ >]+)>/, wb = /-([a-z])?/gi, wu = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Ab = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Sb = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Cb = /^\[([^\]]*)\] ?\[([^\]]*)\]/, kb = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Tb = /\t/g, Ob = /(^ *\||\| *$)/g, _b = /^ *:-+: *$/, Rb = /^ *:-+ *$/, Fb = /^ *-+: *$/, Kn = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", Db = new RegExp(`^([*_])\\1${Kn}\\1\\1(?!\\1)`), Lb = new RegExp(`^([*_])${Kn}\\1(?!\\1)`), $b = new RegExp(`^(==)${Kn}\\1`), Mb = new RegExp(`^(~~)${Kn}\\1`), Bb = /^\\([^0-9A-Za-z\s])/, wi = /\\([^0-9A-Za-z\s])/g, Ib = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/, Pb = /^\n+/, jb = /^([ \t]*)/, Nb = /\\([^\\])/g, Hb = /(?:^|\n)( *)$/, Qo = "(?:\\d+\\.)", el = "(?:[*+-])";
function Au(e) {
  return "( *)(" + (e === 1 ? Qo : el) + ") +";
}
const Su = Au(1), Cu = Au(2);
function ku(e) {
  return new RegExp("^" + (e === 1 ? Su : Cu));
}
const Zb = ku(1), Vb = ku(2);
function Tu(e) {
  return new RegExp("^" + (e === 1 ? Su : Cu) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? Qo : el) + " )[^\\n]*)*(\\n|$)", "gm");
}
const zb = Tu(1), qb = Tu(2);
function Ou(e) {
  const t = e === 1 ? Qo : el;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const _u = Ou(1), Ru = Ou(2);
function Ai(e, t) {
  const r = t === 1, n = r ? _u : Ru, o = r ? zb : qb, l = r ? Zb : Vb;
  return { match: dr(function(i, c) {
    const s = Hb.exec(c.prevCapture);
    return s && (c.list || !c.inline && !c.simple) ? n.exec(i = s[1] + i) : null;
  }), order: 1, parse(i, c, s) {
    const u = r ? +i[2] : void 0, p = i[0].replace(nb, `
`).match(o);
    let g = !1;
    return { items: p.map(function(d, m) {
      const f = l.exec(d)[0].length, b = new RegExp("^ {1," + f + "}", "gm"), y = d.replace(b, "").replace(l, ""), v = m === p.length - 1, S = y.indexOf(`

`) !== -1 || v && g;
      g = S;
      const E = s.inline, x = s.list;
      let w;
      s.list = !0, S ? (s.inline = !1, w = qr(y) + `

`) : (s.inline = !0, w = qr(y));
      const A = c(w, s);
      return s.inline = E, s.list = x, A;
    }), ordered: r, start: u };
  }, render: (i, c, s) => e(i.ordered ? "ol" : "ul", { key: s.key, start: i.type === Z.orderedList ? i.start : void 0 }, i.items.map(function(u, p) {
    return e("li", { key: p }, c(u, s));
  })) };
}
const Ub = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Wb = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Fu = [gu, hu, bu, yu, Eu, vu, wu, _u, Ru], Gb = [...Fu, /^[^\n]+(?:  \n|\n{2,})/, eo, xu, to];
function qr(e) {
  let t = e.length;
  for (; t > 0 && e[t - 1] <= " "; )
    t--;
  return e.slice(0, t);
}
function kr(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Yb(e) {
  return Fb.test(e) ? "right" : _b.test(e) ? "center" : Rb.test(e) ? "left" : null;
}
function Si(e, t, r, n) {
  const o = r.inTable;
  r.inTable = !0;
  let l = [[]], i = "";
  function c() {
    if (!i)
      return;
    const s = l[l.length - 1];
    s.push.apply(s, t(i, r)), i = "";
  }
  return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((s, u, p) => {
    s.trim() === "|" && (c(), n) ? u !== 0 && u !== p.length - 1 && l.push([]) : i += s;
  }), c(), r.inTable = o, l;
}
function Kb(e, t, r) {
  r.inline = !0;
  const n = e[2] ? e[2].replace(Ob, "").split("|").map(Yb) : [], o = e[3] ? function(i, c, s) {
    return i.trim().split(`
`).map(function(u) {
      return Si(u, c, s, !0);
    });
  }(e[3], t, r) : [], l = Si(e[1], t, r, !!o.length);
  return r.inline = !1, o.length ? { align: n, cells: o, header: l, type: Z.table } : { children: l, type: Z.paragraph };
}
function Ci(e, t) {
  return e.align[t] == null ? {} : { textAlign: e.align[t] };
}
function dr(e) {
  return e.inline = 1, e;
}
function Et(e) {
  return dr(function(t, r) {
    return r.inline ? e.exec(t) : null;
  });
}
function xt(e) {
  return dr(function(t, r) {
    return r.inline || r.simple ? e.exec(t) : null;
  });
}
function ft(e) {
  return function(t, r) {
    return r.inline || r.simple ? null : e.exec(t);
  };
}
function Tr(e) {
  return dr(function(t) {
    return e.exec(t);
  });
}
function Xb(e, t) {
  if (t.inline || t.simple)
    return null;
  let r = "";
  e.split(`
`).every((o) => (o += `
`, !Fu.some((l) => l.test(o)) && (r += o, !!o.trim())));
  const n = qr(r);
  return n == "" ? null : [r, , n];
}
const Jb = /(javascript|vbscript|data(?!:image)):/i;
function Qb(e) {
  try {
    const t = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
    if (Jb.test(t))
      return null;
  } catch {
    return null;
  }
  return e;
}
function ki(e) {
  return e.replace(Nb, "$1");
}
function xn(e, t, r) {
  const n = r.inline || !1, o = r.simple || !1;
  r.inline = !0, r.simple = !0;
  const l = e(t, r);
  return r.inline = n, r.simple = o, l;
}
function ey(e, t, r) {
  const n = r.inline || !1, o = r.simple || !1;
  r.inline = !1, r.simple = !0;
  const l = e(t, r);
  return r.inline = n, r.simple = o, l;
}
function ty(e, t, r) {
  const n = r.inline || !1;
  r.inline = !1;
  const o = e(t, r);
  return r.inline = n, o;
}
const ya = (e, t, r) => ({ children: xn(t, e[2], r) });
function va() {
  return {};
}
function Ea() {
  return null;
}
function ry(...e) {
  return e.filter(Boolean).join(" ");
}
function xa(e, t, r) {
  let n = e;
  const o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); )
    o.shift();
  return n || r;
}
function ny(e = "", t = {}) {
  function r(d, m, ...f) {
    const b = xa(t.overrides, `${d}.props`, {});
    return t.createElement(function(y, v) {
      const S = xa(v, y);
      return S ? typeof S == "function" || typeof S == "object" && "render" in S ? S : xa(v, `${y}.component`, y) : y;
    }(d, t.overrides), It({}, m, b, { className: ry(m == null ? void 0 : m.className, b.className) || void 0 }), ...f);
  }
  function n(d) {
    d = d.replace(mb, "");
    let m = !1;
    t.forceInline ? m = !0 : t.forceBlock || (m = kb.test(d) === !1);
    const f = u(s(m ? d : `${qr(d).replace(Pb, "")}

`, { inline: m }));
    for (; typeof f[f.length - 1] == "string" && !f[f.length - 1].trim(); )
      f.pop();
    if (t.wrapper === null)
      return f;
    const b = t.wrapper || (m ? "span" : "div");
    let y;
    if (f.length > 1 || t.forceWrapper)
      y = f;
    else {
      if (f.length === 1)
        return y = f[0], typeof y == "string" ? r("span", { key: "outer" }, y) : y;
      y = null;
    }
    return t.createElement(b, { key: "outer" }, y);
  }
  function o(d, m) {
    const f = m.match(tb);
    return f ? f.reduce(function(b, y) {
      const v = y.indexOf("=");
      if (v !== -1) {
        const S = function(A) {
          return A.indexOf("-") !== -1 && A.match(bb) === null && (A = A.replace(wb, function(k, T) {
            return T.toUpperCase();
          })), A;
        }(y.slice(0, v)).trim(), E = function(A) {
          const k = A[0];
          return (k === '"' || k === "'") && A.length >= 2 && A[A.length - 1] === k ? A.slice(1, -1) : A;
        }(y.slice(v + 1).trim()), x = Ei[S] || S;
        if (x === "ref")
          return b;
        const w = b[x] = function(A, k, T, R) {
          return k === "style" ? function(C) {
            const _ = [];
            let D = "", F = !1, $ = !1, L = "";
            if (!C)
              return _;
            for (let I = 0; I < C.length; I++) {
              const H = C[I];
              if (H !== '"' && H !== "'" || F || ($ ? H === L && ($ = !1, L = "") : ($ = !0, L = H)), H === "(" && D.endsWith("url") ? F = !0 : H === ")" && F && (F = !1), H !== ";" || $ || F)
                D += H;
              else {
                const B = D.trim();
                if (B) {
                  const N = B.indexOf(":");
                  if (N > 0) {
                    const G = B.slice(0, N).trim(), J = B.slice(N + 1).trim();
                    _.push([G, J]);
                  }
                }
                D = "";
              }
            }
            const M = D.trim();
            if (M) {
              const I = M.indexOf(":");
              if (I > 0) {
                const H = M.slice(0, I).trim(), B = M.slice(I + 1).trim();
                _.push([H, B]);
              }
            }
            return _;
          }(T).reduce(function(C, [_, D]) {
            return C[_.replace(/(-[a-z])/g, (F) => F[1].toUpperCase())] = R(D, A, _), C;
          }, {}) : eb.indexOf(k) !== -1 ? R(T, A, k) : (T.match(yb) && (T = T.slice(1, T.length - 1)), T === "true" || T !== "false" && T);
        }(d, S, E, t.sanitizer);
        typeof w == "string" && (eo.test(w) || to.test(w)) && (b[x] = n(w.trim()));
      } else
        y !== "style" && (b[Ei[y] || y] = !0);
      return b;
    }, {}) : null;
  }
  t.overrides = t.overrides || {}, t.sanitizer = t.sanitizer || Qb, t.slugify = t.slugify || kr, t.namedCodesToUnicode = t.namedCodesToUnicode ? It({}, xi, t.namedCodesToUnicode) : xi, t.createElement = t.createElement || h.createElement;
  const l = [], i = {}, c = { [Z.blockQuote]: { match: ft(gu), order: 1, parse(d, m, f) {
    const [, b, y] = d[0].replace(ab, "").match(ob);
    return { alert: b, children: m(y, f) };
  }, render(d, m, f) {
    const b = { key: f.key };
    return d.alert && (b.className = "markdown-alert-" + t.slugify(d.alert.toLowerCase(), kr), d.children.unshift({ attrs: {}, children: [{ type: Z.text, text: d.alert }], noInnerParse: !0, type: Z.htmlBlock, tag: "header" })), r("blockquote", b, m(d.children, f));
  } }, [Z.breakLine]: { match: Tr(lb), order: 1, parse: va, render: (d, m, f) => r("br", { key: f.key }) }, [Z.breakThematic]: { match: ft(ib), order: 1, parse: va, render: (d, m, f) => r("hr", { key: f.key }) }, [Z.codeBlock]: { match: ft(bu), order: 0, parse: (d) => ({ lang: void 0, text: qr(d[0].replace(/^ {4}/gm, "")).replace(wi, "$1") }), render: (d, m, f) => r("pre", { key: f.key }, r("code", It({}, d.attrs, { className: d.lang ? `lang-${d.lang}` : "" }), d.text)) }, [Z.codeFenced]: { match: ft(hu), order: 0, parse: (d) => ({ attrs: o("code", d[3] || ""), lang: d[2] || void 0, text: d[4], type: Z.codeBlock }) }, [Z.codeInline]: { match: xt(sb), order: 3, parse: (d) => ({ text: d[2].replace(wi, "$1") }), render: (d, m, f) => r("code", { key: f.key }, d.text) }, [Z.footnote]: { match: ft(db), order: 0, parse: (d) => (l.push({ footnote: d[2], identifier: d[1] }), {}), render: Ea }, [Z.footnoteReference]: { match: Et(pb), order: 1, parse: (d) => ({ target: `#${t.slugify(d[1], kr)}`, text: d[1] }), render: (d, m, f) => r("a", { key: f.key, href: t.sanitizer(d.target, "a", "href") }, r("sup", { key: f.key }, d.text)) }, [Z.gfmTask]: { match: Et(gb), order: 1, parse: (d) => ({ completed: d[1].toLowerCase() === "x" }), render: (d, m, f) => r("input", { checked: d.completed, key: f.key, readOnly: !0, type: "checkbox" }) }, [Z.heading]: { match: ft(t.enforceAtxHeadings ? vu : yu), order: 1, parse: (d, m, f) => ({ children: xn(m, d[2], f), id: t.slugify(d[2], kr), level: d[1].length }), render: (d, m, f) => r(`h${d.level}`, { id: d.id, key: f.key }, m(d.children, f)) }, [Z.headingSetext]: { match: ft(Eu), order: 0, parse: (d, m, f) => ({ children: xn(m, d[1], f), level: d[2] === "=" ? 1 : 2, type: Z.heading }) }, [Z.htmlBlock]: { match: Tr(eo), order: 1, parse(d, m, f) {
    const [, b] = d[3].match(jb), y = new RegExp(`^${b}`, "gm"), v = d[3].replace(y, ""), S = (E = v, Gb.some((T) => T.test(E)) ? ty : xn);
    var E;
    const x = d[1].toLowerCase(), w = Qh.indexOf(x) !== -1, A = (w ? x : d[1]).trim(), k = { attrs: o(A, d[2]), noInnerParse: w, tag: A };
    return f.inAnchor = f.inAnchor || x === "a", w ? k.text = d[3] : k.children = S(m, v, f), f.inAnchor = !1, k;
  }, render: (d, m, f) => r(d.tag, It({ key: f.key }, d.attrs), d.text || (d.children ? m(d.children, f) : "")) }, [Z.htmlSelfClosing]: { match: Tr(to), order: 1, parse(d) {
    const m = d[1].trim();
    return { attrs: o(m, d[2] || ""), tag: m };
  }, render: (d, m, f) => r(d.tag, It({}, d.attrs, { key: f.key })) }, [Z.htmlComment]: { match: Tr(xu), order: 1, parse: () => ({}), render: Ea }, [Z.image]: { match: xt(Wb), order: 1, parse: (d) => ({ alt: d[1], target: ki(d[2]), title: d[3] }), render: (d, m, f) => r("img", { key: f.key, alt: d.alt || void 0, title: d.title || void 0, src: t.sanitizer(d.target, "img", "src") }) }, [Z.link]: { match: Et(Ub), order: 3, parse: (d, m, f) => ({ children: ey(m, d[1], f), target: ki(d[2]), title: d[3] }), render: (d, m, f) => r("a", { key: f.key, href: t.sanitizer(d.target, "a", "href"), title: d.title }, m(d.children, f)) }, [Z.linkAngleBraceStyleDetector]: { match: Et(xb), order: 0, parse: (d) => ({ children: [{ text: d[1], type: Z.text }], target: d[1], type: Z.link }) }, [Z.linkBareUrlDetector]: { match: dr((d, m) => m.inAnchor || t.disableAutoLink ? null : Et(vb)(d, m)), order: 0, parse: (d) => ({ children: [{ text: d[1], type: Z.text }], target: d[1], title: void 0, type: Z.link }) }, [Z.linkMailtoDetector]: { match: Et(Eb), order: 0, parse(d) {
    let m = d[1], f = d[1];
    return rb.test(f) || (f = "mailto:" + f), { children: [{ text: m.replace("mailto:", ""), type: Z.text }], target: f, type: Z.link };
  } }, [Z.orderedList]: Ai(r, 1), [Z.unorderedList]: Ai(r, 2), [Z.newlineCoalescer]: { match: ft(cb), order: 3, parse: va, render: () => `
` }, [Z.paragraph]: { match: dr(Xb), order: 3, parse: ya, render: (d, m, f) => r("p", { key: f.key }, m(d.children, f)) }, [Z.ref]: { match: Et(Ab), order: 0, parse: (d) => (i[d[1]] = { target: d[2], title: d[4] }, {}), render: Ea }, [Z.refImage]: { match: xt(Sb), order: 0, parse: (d) => ({ alt: d[1] || void 0, ref: d[2] }), render: (d, m, f) => i[d.ref] ? r("img", { key: f.key, alt: d.alt, src: t.sanitizer(i[d.ref].target, "img", "src"), title: i[d.ref].title }) : null }, [Z.refLink]: { match: Et(Cb), order: 0, parse: (d, m, f) => ({ children: m(d[1], f), fallbackChildren: d[0], ref: d[2] }), render: (d, m, f) => i[d.ref] ? r("a", { key: f.key, href: t.sanitizer(i[d.ref].target, "a", "href"), title: i[d.ref].title }, m(d.children, f)) : r("span", { key: f.key }, d.fallbackChildren) }, [Z.table]: { match: ft(wu), order: 1, parse: Kb, render(d, m, f) {
    const b = d;
    return r("table", { key: f.key }, r("thead", null, r("tr", null, b.header.map(function(y, v) {
      return r("th", { key: v, style: Ci(b, v) }, m(y, f));
    }))), r("tbody", null, b.cells.map(function(y, v) {
      return r("tr", { key: v }, y.map(function(S, E) {
        return r("td", { key: E, style: Ci(b, E) }, m(S, f));
      }));
    })));
  } }, [Z.text]: { match: Tr(Ib), order: 4, parse: (d) => ({ text: d[0].replace(hb, (m, f) => t.namedCodesToUnicode[f] ? t.namedCodesToUnicode[f] : m) }), render: (d) => d.text }, [Z.textBolded]: { match: xt(Db), order: 2, parse: (d, m, f) => ({ children: m(d[2], f) }), render: (d, m, f) => r("strong", { key: f.key }, m(d.children, f)) }, [Z.textEmphasized]: { match: xt(Lb), order: 3, parse: (d, m, f) => ({ children: m(d[2], f) }), render: (d, m, f) => r("em", { key: f.key }, m(d.children, f)) }, [Z.textEscaped]: { match: xt(Bb), order: 1, parse: (d) => ({ text: d[1], type: Z.text }) }, [Z.textMarked]: { match: xt($b), order: 3, parse: ya, render: (d, m, f) => r("mark", { key: f.key }, m(d.children, f)) }, [Z.textStrikethroughed]: { match: xt(Mb), order: 3, parse: ya, render: (d, m, f) => r("del", { key: f.key }, m(d.children, f)) } };
  t.disableParsingRawHTML === !0 && (delete c[Z.htmlBlock], delete c[Z.htmlSelfClosing]);
  const s = function(d) {
    let m = Object.keys(d);
    function f(b, y) {
      let v, S, E = [], x = "", w = "";
      for (y.prevCapture = y.prevCapture || ""; b; ) {
        let A = 0;
        for (; A < m.length; ) {
          if (x = m[A], v = d[x], y.inline && !v.match.inline) {
            A++;
            continue;
          }
          const k = v.match(b, y);
          if (k) {
            w = k[0], y.prevCapture += w, b = b.substring(w.length), S = v.parse(k, f, y), S.type == null && (S.type = x), E.push(S);
            break;
          }
          A++;
        }
      }
      return y.prevCapture = "", E;
    }
    return m.sort(function(b, y) {
      let v = d[b].order, S = d[y].order;
      return v !== S ? v - S : b < y ? -1 : 1;
    }), function(b, y) {
      return f(function(v) {
        return v.replace(ub, `
`).replace(fb, "").replace(Tb, "    ");
      }(b), y);
    };
  }(c), u = (p = function(d, m) {
    return function(f, b, y) {
      const v = d[f.type].render;
      return m ? m(() => v(f, b, y), f, b, y) : v(f, b, y);
    };
  }(c, t.renderRule), function d(m, f = {}) {
    if (Array.isArray(m)) {
      const b = f.key, y = [];
      let v = !1;
      for (let S = 0; S < m.length; S++) {
        f.key = S;
        const E = d(m[S], f), x = typeof E == "string";
        x && v ? y[y.length - 1] += E : E !== null && y.push(E), v = x;
      }
      return f.key = b, y;
    }
    return p(m, d, f);
  });
  var p;
  const g = n(e);
  return l.length ? r("div", null, g, r("footer", { key: "footer" }, l.map(function(d) {
    return r("div", { id: t.slugify(d.identifier, kr), key: d.identifier }, d.identifier, u(s(d.footnote, { inline: !0 })));
  }))) : g;
}
const Du = (e) => {
  let { children: t = "", options: r } = e, n = function(o, l) {
    if (o == null)
      return {};
    var i, c, s = {}, u = Object.keys(o);
    for (c = 0; c < u.length; c++)
      l.indexOf(i = u[c]) >= 0 || (s[i] = o[i]);
    return s;
  }(e, Jh);
  return h.cloneElement(ny(t, r), n);
};
function ay(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var oy = ay;
function ly(e) {
  return e !== e;
}
var iy = ly;
function sy(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; )
    if (e[n] === t)
      return n;
  return -1;
}
var cy = sy, uy = oy, dy = iy, py = cy;
function fy(e, t, r) {
  return t === t ? py(e, t, r) : uy(e, dy, r);
}
var my = fy, gy = my;
function hy(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && gy(e, t, 0) > -1;
}
var by = hy;
function yy(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var vy = yy;
function Ey() {
}
var xy = Ey, wa = $0, wy = xy, Ay = ms, Sy = 1 / 0, Cy = wa && 1 / Ay(new wa([, -0]))[1] == Sy ? function(e) {
  return new wa(e);
} : wy, ky = Cy, Ty = M0, Oy = by, _y = vy, Ry = B0, Fy = ky, Dy = ms, Ly = 200;
function $y(e, t, r) {
  var n = -1, o = Oy, l = e.length, i = !0, c = [], s = c;
  if (r)
    i = !1, o = _y;
  else if (l >= Ly) {
    var u = t ? null : Fy(e);
    if (u)
      return Dy(u);
    i = !1, o = Ry, s = new Ty();
  } else
    s = t ? [] : c;
  e:
    for (; ++n < l; ) {
      var p = e[n], g = t ? t(p) : p;
      if (p = r || p !== 0 ? p : 0, i && g === g) {
        for (var d = s.length; d--; )
          if (s[d] === g)
            continue e;
        t && s.push(g), c.push(p);
      } else
        o(s, g, r) || (s !== c && s.push(g), c.push(p));
    }
  return c;
}
var My = $y, By = My;
function Iy(e) {
  return e && e.length ? By(e) : [];
}
var Py = Iy;
const jy = /* @__PURE__ */ Dn(Py);
function Ny(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Hy = Ny, Zy = Xo, Vy = cs;
function zy(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var c = t[l], s = n ? n(r[c], e[c], c, r, e) : void 0;
    s === void 0 && (s = e[c]), o ? Vy(r, c, s) : Zy(r, c, s);
  }
  return r;
}
var Xn = zy, qy = Xn, Uy = gs;
function Wy(e, t) {
  return e && qy(t, Uy(t), e);
}
var Gy = Wy, Yy = Xn, Ky = Jo;
function Xy(e, t) {
  return e && Yy(t, Ky(t), e);
}
var Jy = Xy, Fn = { exports: {} };
Fn.exports;
(function(e, t) {
  var r = V0, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, l = o && o.exports === n, i = l ? r.Buffer : void 0, c = i ? i.allocUnsafe : void 0;
  function s(u, p) {
    if (p)
      return u.slice();
    var g = u.length, d = c ? c(g) : new u.constructor(g);
    return u.copy(d), d;
  }
  e.exports = s;
})(Fn, Fn.exports);
var Qy = Fn.exports;
function ev(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var tv = ev, rv = Xn, nv = ps;
function av(e, t) {
  return rv(e, nv(e), t);
}
var ov = av, lv = Xn, iv = fu;
function sv(e, t) {
  return lv(e, iv(e), t);
}
var cv = sv, uv = Object.prototype, dv = uv.hasOwnProperty;
function pv(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && dv.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var fv = pv, Ti = I0;
function mv(e) {
  var t = new e.constructor(e.byteLength);
  return new Ti(t).set(new Ti(e)), t;
}
var tl = mv, gv = tl;
function hv(e, t) {
  var r = t ? gv(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var bv = hv, yv = /\w*$/;
function vv(e) {
  var t = new e.constructor(e.source, yv.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ev = vv, Oi = z0, _i = Oi ? Oi.prototype : void 0, Ri = _i ? _i.valueOf : void 0;
function xv(e) {
  return Ri ? Object(Ri.call(e)) : {};
}
var wv = xv, Av = tl;
function Sv(e, t) {
  var r = t ? Av(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Cv = Sv, kv = tl, Tv = bv, Ov = Ev, _v = wv, Rv = Cv, Fv = "[object Boolean]", Dv = "[object Date]", Lv = "[object Map]", $v = "[object Number]", Mv = "[object RegExp]", Bv = "[object Set]", Iv = "[object String]", Pv = "[object Symbol]", jv = "[object ArrayBuffer]", Nv = "[object DataView]", Hv = "[object Float32Array]", Zv = "[object Float64Array]", Vv = "[object Int8Array]", zv = "[object Int16Array]", qv = "[object Int32Array]", Uv = "[object Uint8Array]", Wv = "[object Uint8ClampedArray]", Gv = "[object Uint16Array]", Yv = "[object Uint32Array]";
function Kv(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case jv:
      return kv(e);
    case Fv:
    case Dv:
      return new n(+e);
    case Nv:
      return Tv(e, r);
    case Hv:
    case Zv:
    case Vv:
    case zv:
    case qv:
    case Uv:
    case Wv:
    case Gv:
    case Yv:
      return Rv(e, r);
    case Lv:
      return new n();
    case $v:
    case Iv:
      return new n(e);
    case Mv:
      return Ov(e);
    case Bv:
      return new n();
    case Pv:
      return _v(e);
  }
}
var Xv = Kv, Jv = Ln, Fi = Object.create, Qv = function() {
  function e() {
  }
  return function(t) {
    if (!Jv(t))
      return {};
    if (Fi)
      return Fi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), e3 = Qv, t3 = e3, r3 = ds, n3 = fs;
function a3(e) {
  return typeof e.constructor == "function" && !n3(e) ? t3(r3(e)) : {};
}
var o3 = a3, l3 = po, i3 = ys, s3 = "[object Map]";
function c3(e) {
  return i3(e) && l3(e) == s3;
}
var u3 = c3, d3 = u3, p3 = bs, Di = hs, Li = Di && Di.isMap, f3 = Li ? p3(Li) : d3, m3 = f3, g3 = po, h3 = ys, b3 = "[object Set]";
function y3(e) {
  return h3(e) && g3(e) == b3;
}
var v3 = y3, E3 = v3, x3 = bs, $i = hs, Mi = $i && $i.isSet, w3 = Mi ? x3(Mi) : E3, A3 = w3, S3 = P0, C3 = Hy, k3 = Xo, T3 = Gy, O3 = Jy, _3 = Qy, R3 = tv, F3 = ov, D3 = cv, L3 = N0, $3 = mu, M3 = po, B3 = fv, I3 = Xv, P3 = o3, j3 = H0, N3 = j0, H3 = m3, Z3 = Ln, V3 = A3, z3 = gs, q3 = Jo, U3 = 1, W3 = 2, G3 = 4, Lu = "[object Arguments]", Y3 = "[object Array]", K3 = "[object Boolean]", X3 = "[object Date]", J3 = "[object Error]", $u = "[object Function]", Q3 = "[object GeneratorFunction]", e7 = "[object Map]", t7 = "[object Number]", Mu = "[object Object]", r7 = "[object RegExp]", n7 = "[object Set]", a7 = "[object String]", o7 = "[object Symbol]", l7 = "[object WeakMap]", i7 = "[object ArrayBuffer]", s7 = "[object DataView]", c7 = "[object Float32Array]", u7 = "[object Float64Array]", d7 = "[object Int8Array]", p7 = "[object Int16Array]", f7 = "[object Int32Array]", m7 = "[object Uint8Array]", g7 = "[object Uint8ClampedArray]", h7 = "[object Uint16Array]", b7 = "[object Uint32Array]", ee = {};
ee[Lu] = ee[Y3] = ee[i7] = ee[s7] = ee[K3] = ee[X3] = ee[c7] = ee[u7] = ee[d7] = ee[p7] = ee[f7] = ee[e7] = ee[t7] = ee[Mu] = ee[r7] = ee[n7] = ee[a7] = ee[o7] = ee[m7] = ee[g7] = ee[h7] = ee[b7] = !0;
ee[J3] = ee[$u] = ee[l7] = !1;
function wn(e, t, r, n, o, l) {
  var i, c = t & U3, s = t & W3, u = t & G3;
  if (r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)
    return i;
  if (!Z3(e))
    return e;
  var p = j3(e);
  if (p) {
    if (i = B3(e), !c)
      return R3(e, i);
  } else {
    var g = M3(e), d = g == $u || g == Q3;
    if (N3(e))
      return _3(e, c);
    if (g == Mu || g == Lu || d && !o) {
      if (i = s || d ? {} : P3(e), !c)
        return s ? D3(e, O3(i, e)) : F3(e, T3(i, e));
    } else {
      if (!ee[g])
        return o ? e : {};
      i = I3(e, g, c);
    }
  }
  l || (l = new S3());
  var m = l.get(e);
  if (m)
    return m;
  l.set(e, i), V3(e) ? e.forEach(function(y) {
    i.add(wn(y, t, r, y, e, l));
  }) : H3(e) && e.forEach(function(y, v) {
    i.set(v, wn(y, t, r, v, e, l));
  });
  var f = u ? s ? $3 : L3 : s ? q3 : z3, b = p ? void 0 : f(e);
  return C3(b || e, function(y, v) {
    b && (v = y, y = e[v]), k3(i, v, wn(y, t, r, v, e, l));
  }), i;
}
var y7 = wn, v7 = y7, E7 = 1, x7 = 4;
function w7(e) {
  return v7(e, E7 | x7);
}
var A7 = w7;
const S7 = /* @__PURE__ */ Dn(A7);
var C7 = Object.create, Bu = Object.defineProperty, k7 = Object.getOwnPropertyDescriptor, Iu = Object.getOwnPropertyNames, T7 = Object.getPrototypeOf, O7 = Object.prototype.hasOwnProperty, Ne = (e, t) => function() {
  return t || (0, e[Iu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, _7 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Iu(t))
      !O7.call(e, o) && o !== r && Bu(e, o, { get: () => t[o], enumerable: !(n = k7(t, o)) || n.enumerable });
  return e;
}, rl = (e, t, r) => (r = e != null ? C7(T7(e)) : {}, _7(
  t || !e || !e.__esModule ? Bu(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), R7 = [
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
], F7 = ["detail"];
function D7(e) {
  const t = R7.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return e instanceof CustomEvent && F7.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
var Pu = Ne({
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
      var c = Object.getOwnPropertySymbols(n);
      if (c.length !== 1 || c[0] !== o || !Object.prototype.propertyIsEnumerable.call(n, o))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(n, o);
        if (s.value !== i || s.enumerable !== !0)
          return !1;
      }
      return !0;
    };
  }
}), ju = Ne({
  "node_modules/has-symbols/index.js"(e, t) {
    var r = typeof Symbol < "u" && Symbol, n = Pu();
    t.exports = function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
    };
  }
}), L7 = Ne({
  "node_modules/function-bind/implementation.js"(e, t) {
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, l = "[object Function]";
    t.exports = function(c) {
      var s = this;
      if (typeof s != "function" || o.call(s) !== l)
        throw new TypeError(r + s);
      for (var u = n.call(arguments, 1), p, g = function() {
        if (this instanceof p) {
          var y = s.apply(
            this,
            u.concat(n.call(arguments))
          );
          return Object(y) === y ? y : this;
        } else
          return s.apply(
            c,
            u.concat(n.call(arguments))
          );
      }, d = Math.max(0, s.length - u.length), m = [], f = 0; f < d; f++)
        m.push("$" + f);
      if (p = Function("binder", "return function (" + m.join(",") + "){ return binder.apply(this,arguments); }")(g), s.prototype) {
        var b = function() {
        };
        b.prototype = s.prototype, p.prototype = new b(), b.prototype = null;
      }
      return p;
    };
  }
}), nl = Ne({
  "node_modules/function-bind/index.js"(e, t) {
    var r = L7();
    t.exports = Function.prototype.bind || r;
  }
}), $7 = Ne({
  "node_modules/has/src/index.js"(e, t) {
    var r = nl();
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), Nu = Ne({
  "node_modules/get-intrinsic/index.js"(e, t) {
    var r, n = SyntaxError, o = Function, l = TypeError, i = function(D) {
      try {
        return o('"use strict"; return (' + D + ").constructor;")();
      } catch {
      }
    }, c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch {
        c = null;
      }
    var s = function() {
      throw new l();
    }, u = c ? function() {
      try {
        return arguments.callee, s;
      } catch {
        try {
          return c(arguments, "callee").get;
        } catch {
          return s;
        }
      }
    }() : s, p = ju()(), g = Object.getPrototypeOf || function(D) {
      return D.__proto__;
    }, d = {}, m = typeof Uint8Array > "u" ? r : g(Uint8Array), f = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": p ? g([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": d,
      "%AsyncGenerator%": d,
      "%AsyncGeneratorFunction%": d,
      "%AsyncIteratorPrototype%": d,
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
      "%GeneratorFunction%": d,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": p ? g(g([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !p ? r : g((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
      "%SetIteratorPrototype%": typeof Set > "u" || !p ? r : g((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": p ? g(""[Symbol.iterator]()) : r,
      "%Symbol%": p ? Symbol : r,
      "%SyntaxError%": n,
      "%ThrowTypeError%": u,
      "%TypedArray%": m,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, b = function D(F) {
      var $;
      if (F === "%AsyncFunction%")
        $ = i("async function () {}");
      else if (F === "%GeneratorFunction%")
        $ = i("function* () {}");
      else if (F === "%AsyncGeneratorFunction%")
        $ = i("async function* () {}");
      else if (F === "%AsyncGenerator%") {
        var L = D("%AsyncGeneratorFunction%");
        L && ($ = L.prototype);
      } else if (F === "%AsyncIteratorPrototype%") {
        var M = D("%AsyncGenerator%");
        M && ($ = g(M.prototype));
      }
      return f[F] = $, $;
    }, y = {
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
    }, v = nl(), S = $7(), E = v.call(Function.call, Array.prototype.concat), x = v.call(Function.apply, Array.prototype.splice), w = v.call(Function.call, String.prototype.replace), A = v.call(Function.call, String.prototype.slice), k = v.call(Function.call, RegExp.prototype.exec), T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, R = /\\(\\)?/g, C = function(F) {
      var $ = A(F, 0, 1), L = A(F, -1);
      if ($ === "%" && L !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (L === "%" && $ !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var M = [];
      return w(F, T, function(I, H, B, N) {
        M[M.length] = B ? w(N, R, "$1") : H || I;
      }), M;
    }, _ = function(F, $) {
      var L = F, M;
      if (S(y, L) && (M = y[L], L = "%" + M[0] + "%"), S(f, L)) {
        var I = f[L];
        if (I === d && (I = b(L)), typeof I > "u" && !$)
          throw new l("intrinsic " + F + " exists, but is not available. Please file an issue!");
        return {
          alias: M,
          name: L,
          value: I
        };
      }
      throw new n("intrinsic " + F + " does not exist!");
    };
    t.exports = function(F, $) {
      if (typeof F != "string" || F.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof $ != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (k(/^%?[^%]*%?$/, F) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var L = C(F), M = L.length > 0 ? L[0] : "", I = _("%" + M + "%", $), H = I.name, B = I.value, N = !1, G = I.alias;
      G && (M = G[0], x(L, E([0, 1], G)));
      for (var J = 1, Y = !0; J < L.length; J += 1) {
        var z = L[J], P = A(z, 0, 1), W = A(z, -1);
        if ((P === '"' || P === "'" || P === "`" || W === '"' || W === "'" || W === "`") && P !== W)
          throw new n("property names with quotes must have matching quotes");
        if ((z === "constructor" || !Y) && (N = !0), M += "." + z, H = "%" + M + "%", S(f, H))
          B = f[H];
        else if (B != null) {
          if (!(z in B)) {
            if (!$)
              throw new l("base intrinsic for " + F + " exists, but the property is not available.");
            return;
          }
          if (c && J + 1 >= L.length) {
            var U = c(B, z);
            Y = !!U, Y && "get" in U && !("originalValue" in U.get) ? B = U.get : B = B[z];
          } else
            Y = S(B, z), B = B[z];
          Y && !N && (f[H] = B);
        }
      }
      return B;
    };
  }
}), M7 = Ne({
  "node_modules/call-bind/index.js"(e, t) {
    var r = nl(), n = Nu(), o = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || r.call(l, o), c = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), u = n("%Math.max%");
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch {
        s = null;
      }
    t.exports = function(d) {
      var m = i(r, l, arguments);
      if (c && s) {
        var f = c(m, "length");
        f.configurable && s(
          m,
          "length",
          { value: 1 + u(0, d.length - (arguments.length - 1)) }
        );
      }
      return m;
    };
    var p = function() {
      return i(r, o, arguments);
    };
    s ? s(t.exports, "apply", { value: p }) : t.exports.apply = p;
  }
}), B7 = Ne({
  "node_modules/call-bind/callBound.js"(e, t) {
    var r = Nu(), n = M7(), o = n(r("String.prototype.indexOf"));
    t.exports = function(i, c) {
      var s = r(i, !!c);
      return typeof s == "function" && o(i, ".prototype.") > -1 ? n(s) : s;
    };
  }
}), I7 = Ne({
  "node_modules/has-tostringtag/shams.js"(e, t) {
    var r = Pu();
    t.exports = function() {
      return r() && !!Symbol.toStringTag;
    };
  }
}), P7 = Ne({
  "node_modules/is-regex/index.js"(e, t) {
    var r = B7(), n = I7()(), o, l, i, c;
    n && (o = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), i = {}, s = function() {
      throw i;
    }, c = {
      toString: s,
      valueOf: s
    }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s));
    var s, u = r("Object.prototype.toString"), p = Object.getOwnPropertyDescriptor, g = "[object RegExp]";
    t.exports = n ? function(m) {
      if (!m || typeof m != "object")
        return !1;
      var f = p(m, "lastIndex"), b = f && o(f, "value");
      if (!b)
        return !1;
      try {
        l(m, c);
      } catch (y) {
        return y === i;
      }
    } : function(m) {
      return !m || typeof m != "object" && typeof m != "function" ? !1 : u(m) === g;
    };
  }
}), j7 = Ne({
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
}), N7 = Ne({
  "node_modules/is-symbol/index.js"(e, t) {
    var r = Object.prototype.toString, n = ju()();
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
}), H7 = rl(P7()), Z7 = rl(j7()), V7 = rl(N7());
function z7(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var q7 = typeof global == "object" && global && global.Object === Object && global, U7 = q7, W7 = typeof self == "object" && self && self.Object === Object && self, G7 = U7 || W7 || Function("return this")(), al = G7, Y7 = al.Symbol, pr = Y7, Hu = Object.prototype, K7 = Hu.hasOwnProperty, X7 = Hu.toString, Or = pr ? pr.toStringTag : void 0;
function J7(e) {
  var t = K7.call(e, Or), r = e[Or];
  try {
    e[Or] = void 0;
    var n = !0;
  } catch {
  }
  var o = X7.call(e);
  return n && (t ? e[Or] = r : delete e[Or]), o;
}
var Q7 = J7, e4 = Object.prototype, t4 = e4.toString;
function r4(e) {
  return t4.call(e);
}
var n4 = r4, a4 = "[object Null]", o4 = "[object Undefined]", Bi = pr ? pr.toStringTag : void 0;
function l4(e) {
  return e == null ? e === void 0 ? o4 : a4 : Bi && Bi in Object(e) ? Q7(e) : n4(e);
}
var i4 = l4, Ii = pr ? pr.prototype : void 0;
Ii && Ii.toString;
function s4(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zu = s4, c4 = "[object AsyncFunction]", u4 = "[object Function]", d4 = "[object GeneratorFunction]", p4 = "[object Proxy]";
function f4(e) {
  if (!Zu(e))
    return !1;
  var t = i4(e);
  return t == u4 || t == d4 || t == c4 || t == p4;
}
var m4 = f4, g4 = al["__core-js_shared__"], Aa = g4, Pi = function() {
  var e = /[^.]+$/.exec(Aa && Aa.keys && Aa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function h4(e) {
  return !!Pi && Pi in e;
}
var b4 = h4, y4 = Function.prototype, v4 = y4.toString;
function E4(e) {
  if (e != null) {
    try {
      return v4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var x4 = E4, w4 = /[\\^$.*+?()[\]{}|]/g, A4 = /^\[object .+?Constructor\]$/, S4 = Function.prototype, C4 = Object.prototype, k4 = S4.toString, T4 = C4.hasOwnProperty, O4 = RegExp(
  "^" + k4.call(T4).replace(w4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _4(e) {
  if (!Zu(e) || b4(e))
    return !1;
  var t = m4(e) ? O4 : A4;
  return t.test(x4(e));
}
var R4 = _4;
function F4(e, t) {
  return e == null ? void 0 : e[t];
}
var D4 = F4;
function L4(e, t) {
  var r = D4(e, t);
  return R4(r) ? r : void 0;
}
var Vu = L4;
function $4(e, t) {
  return e === t || e !== e && t !== t;
}
var M4 = $4, B4 = Vu(Object, "create"), Ur = B4;
function I4() {
  this.__data__ = Ur ? Ur(null) : {}, this.size = 0;
}
var P4 = I4;
function j4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var N4 = j4, H4 = "__lodash_hash_undefined__", Z4 = Object.prototype, V4 = Z4.hasOwnProperty;
function z4(e) {
  var t = this.__data__;
  if (Ur) {
    var r = t[e];
    return r === H4 ? void 0 : r;
  }
  return V4.call(t, e) ? t[e] : void 0;
}
var q4 = z4, U4 = Object.prototype, W4 = U4.hasOwnProperty;
function G4(e) {
  var t = this.__data__;
  return Ur ? t[e] !== void 0 : W4.call(t, e);
}
var Y4 = G4, K4 = "__lodash_hash_undefined__";
function X4(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ur && t === void 0 ? K4 : t, this;
}
var J4 = X4;
function br(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
br.prototype.clear = P4;
br.prototype.delete = N4;
br.prototype.get = q4;
br.prototype.has = Y4;
br.prototype.set = J4;
var ji = br;
function Q4() {
  this.__data__ = [], this.size = 0;
}
var eE = Q4;
function tE(e, t) {
  for (var r = e.length; r--; )
    if (M4(e[r][0], t))
      return r;
  return -1;
}
var Jn = tE, rE = Array.prototype, nE = rE.splice;
function aE(e) {
  var t = this.__data__, r = Jn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : nE.call(t, r, 1), --this.size, !0;
}
var oE = aE;
function lE(e) {
  var t = this.__data__, r = Jn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var iE = lE;
function sE(e) {
  return Jn(this.__data__, e) > -1;
}
var cE = sE;
function uE(e, t) {
  var r = this.__data__, n = Jn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var dE = uE;
function yr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yr.prototype.clear = eE;
yr.prototype.delete = oE;
yr.prototype.get = iE;
yr.prototype.has = cE;
yr.prototype.set = dE;
var pE = yr, fE = Vu(al, "Map"), mE = fE;
function gE() {
  this.size = 0, this.__data__ = {
    hash: new ji(),
    map: new (mE || pE)(),
    string: new ji()
  };
}
var hE = gE;
function bE(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var yE = bE;
function vE(e, t) {
  var r = e.__data__;
  return yE(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Qn = vE;
function EE(e) {
  var t = Qn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var xE = EE;
function wE(e) {
  return Qn(this, e).get(e);
}
var AE = wE;
function SE(e) {
  return Qn(this, e).has(e);
}
var CE = SE;
function kE(e, t) {
  var r = Qn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var TE = kE;
function vr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
vr.prototype.clear = hE;
vr.prototype.delete = xE;
vr.prototype.get = AE;
vr.prototype.has = CE;
vr.prototype.set = TE;
var zu = vr, OE = "Expected a function";
function ol(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(OE);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], l = r.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, n);
    return r.cache = l.set(o, i) || l, i;
  };
  return r.cache = new (ol.Cache || zu)(), r;
}
ol.Cache = zu;
var _E = ol, RE = 500;
function FE(e) {
  var t = _E(e, function(n) {
    return r.size === RE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var DE = FE, LE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $E = /\\(\\)?/g;
DE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(LE, function(r, n, o, l) {
    t.push(o ? l.replace($E, "$1") : n || r);
  }), t;
});
var ME = z7, BE = (e) => {
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
}, IE = zt(1e4)(
  (e) => BE(e).replace(/\n\s*/g, "").trim()
), PE = function(t, r) {
  const n = r.slice(0, r.indexOf("{")), o = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(t, "function"), l + o;
}, jE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function qu(e) {
  if (!ME(e))
    return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = D7(t), r = !0), t = Object.keys(t).reduce((n, o) => {
    try {
      t[o] && t[o].toJSON, n[o] = t[o];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? t : e;
}
var NE = function(t) {
  let r, n, o, l;
  return function(c, s) {
    try {
      if (c === "")
        return l = [], r = /* @__PURE__ */ new Map([[s, "[]"]]), n = /* @__PURE__ */ new Map(), o = [], s;
      const u = n.get(this) || this;
      for (; o.length && u !== o[0]; )
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
        return jE.test(s) ? t.allowDate ? `_date_${s}` : void 0 : s;
      if ((0, H7.default)(s))
        return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
      if ((0, Z7.default)(s)) {
        if (!t.allowFunction)
          return;
        const { name: g } = s, d = s.toString();
        return d.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${g}|${(() => {
        }).toString()}` : `_function_${g}|${IE(PE(c, d))}`;
      }
      if ((0, V7.default)(s)) {
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
      const p = r.get(s);
      if (!p) {
        const g = Array.isArray(s) ? s : qu(s);
        if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && t.allowClass)
          try {
            Object.assign(g, { "_constructor-name_": s.constructor.name });
          } catch {
          }
        return l.push(c), o.unshift(g), r.set(s, JSON.stringify(l)), s !== g && n.set(s, g), g;
      }
      return `_duplicate_${p}`;
    } catch {
      return;
    }
  };
}, HE = {
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
}, ZE = (e, t = {}) => {
  const r = { ...HE, ...t };
  return JSON.stringify(qu(e), NE(r), t.space);
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
function VE(e) {
  const t = [].forEach, r = [].some, n = typeof window < "u" && document.body, o = " ";
  let l, i = !0, c = 0;
  function s(C, _) {
    const D = _.appendChild(p(C));
    if (C.children.length) {
      const F = g(C.isCollapsed);
      C.children.forEach(($) => {
        s($, F);
      }), D.appendChild(F);
    }
  }
  function u(C, _) {
    const F = g(!1);
    if (_.forEach(($) => {
      s($, F);
    }), l = C || l, l !== null)
      return l.firstChild && l.removeChild(l.firstChild), _.length === 0 ? l : l.appendChild(F);
  }
  function p(C) {
    const _ = document.createElement("li"), D = document.createElement("a");
    return e.listItemClass && _.setAttribute("class", e.listItemClass), e.onClick && (D.onclick = e.onClick), e.includeTitleTags && D.setAttribute("title", C.textContent), e.includeHtml && C.childNodes.length ? t.call(C.childNodes, (F) => {
      D.appendChild(F.cloneNode(!0));
    }) : D.textContent = C.textContent, D.setAttribute("href", `${e.basePath}#${C.id}`), D.setAttribute(
      "class",
      `${e.linkClass + o}node-name--${C.nodeName}${o}${e.extraLinkClasses}`
    ), _.appendChild(D), _;
  }
  function g(C) {
    const _ = e.orderedList ? "ol" : "ul", D = document.createElement(_);
    let F = e.listClass + o + e.extraListClasses;
    return C && (F = F + o + e.collapsibleClass, F = F + o + e.isCollapsedClass), D.setAttribute("class", F), D;
  }
  function d() {
    const C = k(), _ = document.querySelector(e.positionFixedSelector);
    e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = l.offsetTop), C > e.fixedSidebarOffset ? _.className.indexOf(e.positionFixedClass) === -1 && (_.className += o + e.positionFixedClass) : _.className = _.className.replace(
      o + e.positionFixedClass,
      ""
    );
  }
  function m(C) {
    let _ = 0;
    return C !== null && (_ = C.offsetTop, e.hasInnerContainers && (_ += m(C.offsetParent))), _;
  }
  function f(C, _) {
    return C && C.className !== _ && (C.className = _), C;
  }
  function b(C, _) {
    var M, I;
    e.positionFixedSelector && d();
    const D = C, F = (M = _ == null ? void 0 : _.target) != null && M.getAttribute ? (I = _ == null ? void 0 : _.target) == null ? void 0 : I.getAttribute("href") : null, $ = F && F.charAt(0) === "#" ? x(F.replace("#", "")) : !1, L = i || $;
    if (_ && c < 5 && c++, L && l && D.length > 0) {
      const H = T(D), B = l.querySelector(
        `.${e.activeLinkClass}`
      ), N = H.id.replace(
        /([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,
        "\\$1"
      ), G = window.location.hash.replace("#", "");
      let J = N;
      const Y = w();
      F && $ ? J = F.replace("#", "") : G && G !== N && Y && (x(N) || c <= 2) && (J = G);
      const z = l.querySelector(
        `.${e.linkClass}[href="${e.basePath}#${J}"]`
      );
      if (B === z)
        return;
      const P = l.querySelectorAll(`.${e.linkClass}`);
      t.call(P, (te) => {
        f(
          te,
          te.className.replace(o + e.activeLinkClass, "")
        );
      });
      const W = l.querySelectorAll(`.${e.listItemClass}`);
      t.call(W, (te) => {
        f(
          te,
          te.className.replace(o + e.activeListItemClass, "")
        );
      }), z && z.className.indexOf(e.activeLinkClass) === -1 && (z.className += o + e.activeLinkClass);
      const U = z == null ? void 0 : z.parentNode;
      U && U.className.indexOf(e.activeListItemClass) === -1 && (U.className += o + e.activeListItemClass);
      const oe = l.querySelectorAll(
        `.${e.listClass}.${e.collapsibleClass}`
      );
      t.call(oe, (te) => {
        te.className.indexOf(e.isCollapsedClass) === -1 && (te.className += o + e.isCollapsedClass);
      }), z != null && z.nextSibling && z.nextSibling.className.indexOf(
        e.isCollapsedClass
      ) !== -1 && f(
        z.nextSibling,
        z.nextSibling.className.replace(
          o + e.isCollapsedClass,
          ""
        )
      ), y(z == null ? void 0 : z.parentNode.parentNode);
    }
  }
  function y(C) {
    return C && C.className.indexOf(e.collapsibleClass) !== -1 && C.className.indexOf(e.isCollapsedClass) !== -1 ? (f(
      C,
      C.className.replace(o + e.isCollapsedClass, "")
    ), y(C.parentNode.parentNode)) : C;
  }
  function v(C) {
    const _ = C.target || C.srcElement;
    typeof _.className != "string" || _.className.indexOf(e.linkClass) === -1 || (i = !1);
  }
  function S() {
    i = !0;
  }
  function E() {
    return i;
  }
  function x(C) {
    const _ = A();
    return (document == null ? void 0 : document.getElementById(C)).offsetTop > _.offsetHeight - _.clientHeight * 1.4 - e.bottomModeThreshold;
  }
  function w() {
    const C = A(), _ = C.scrollHeight > C.clientHeight, D = k() + C.clientHeight > C.offsetHeight - e.bottomModeThreshold;
    return _ && D;
  }
  function A() {
    let C;
    return e.scrollContainer && document.querySelector(e.scrollContainer) ? C = document.querySelector(e.scrollContainer) : C = document.documentElement || n, C;
  }
  function k() {
    const C = A();
    return (C == null ? void 0 : C.scrollTop) || 0;
  }
  function T(C, _ = k()) {
    let D;
    return r.call(C, (F, $) => {
      if (m(F) > _ + e.headingsOffset + 10) {
        const L = $ === 0 ? $ : $ - 1;
        return D = C[L], !0;
      }
      if ($ === C.length - 1)
        return D = C[C.length - 1], !0;
    }), D;
  }
  function R(C) {
    const _ = k(), D = T(C, _), F = w();
    if ((!D || _ < 5) && !F)
      window.location.hash === "#" || window.location.hash === "" || window.history.pushState(null, null, "#");
    else if (D && !F) {
      const $ = `#${D.id}`;
      window.location.hash !== $ && window.history.pushState(null, null, $);
    }
  }
  return {
    enableTocAnimation: S,
    disableTocAnimation: v,
    render: u,
    updateToc: b,
    getCurrentlyHighlighting: E,
    getTopHeader: T,
    getScrollTop: k,
    updateUrlHashForHeader: R
  };
}
const zE = {
  // Where to render the table of contents.
  tocSelector: ".js-toc",
  // Or, you can pass in a DOM node instead
  tocElement: null,
  // Where to grab the headings to build the table of contents.
  contentSelector: ".js-toc-content",
  // Or, you can pass in a DOM node instead
  contentElement: null,
  // Which headings to grab inside of the contentSelector element.
  headingSelector: "h1, h2, h3",
  // Headings that match the ignoreSelector will be skipped.
  ignoreSelector: ".js-toc-ignore",
  // For headings inside relative or absolute positioned
  // containers within content.
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
  // Headings offset between the headings and the top of
  // the document (this is meant for minor adjustments).
  headingsOffset: 1,
  // Enable the URL hash to update with the proper heading ID as
  // a user scrolls the page.
  enableUrlHashUpdateOnScroll: !1,
  // type of scroll handler to use. to make scroll event not too rapid.
  // Options are: "debounce" or "throttle"
  // when set auto , use debounce less than 333ms , other use throttle.
  // for ios browser can't use history.pushState() more than 100 times per 30 seconds reason
  scrollHandlerType: "auto",
  //  scrollHandler delay in ms.
  scrollHandlerTimeout: 50,
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
  // heading node instead of just including the innerText.
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
  // If there is a fixed article scroll container, set to calculate offset.
  scrollContainer: null,
  // prevent ToC DOM rendering if it's already rendered by an external system.
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
  // The heading element is passed in node parameter and information
  // parsed by default parser is provided in obj parameter.
  // Function has to return the same or modified obj.
  // The heading will be excluded from TOC if nothing is returned.
  // function (object, HTMLElement) => object | void
  headingObjectCallback: null,
  // Set the base path, useful if you use a `base` tag in `head`.
  basePath: "",
  // Only takes affect when `tocSelector` is scrolling,
  // keep the toc scroll position in sync with the content.
  disableTocScrollSync: !1,
  // If this is null then just use `tocElement` or `tocSelector` instead
  // assuming `disableTocScrollSync` is set to false. This allows for
  // scrolling an outer element (like a nav panel w/ search) containing the toc.
  // Please pass an element, not a selector here.
  tocScrollingWrapper: null,
  // Offset for the toc scroll (top) position when scrolling the page.
  // Only effective if `disableTocScrollSync` is false.
  tocScrollOffset: 30,
  // Threshold for when bottom mode should be enabled to handle
  // highlighting links that cannot be scrolled to.
  bottomModeThreshold: 30
};
function qE(e) {
  const t = [].reduce;
  function r(u) {
    return u[u.length - 1];
  }
  function n(u) {
    return +u.nodeName.toUpperCase().replace("H", "");
  }
  function o(u) {
    try {
      return u instanceof window.HTMLElement || u instanceof window.parent.HTMLElement;
    } catch {
      return u instanceof window.HTMLElement;
    }
  }
  function l(u) {
    if (!o(u))
      return u;
    if (e.ignoreHiddenElements && (!u.offsetHeight || !u.offsetParent))
      return null;
    const p = u.getAttribute("data-heading-label") || (e.headingLabelCallback ? String(e.headingLabelCallback(u.innerText)) : (u.innerText || u.textContent).trim()), g = {
      id: u.id,
      children: [],
      nodeName: u.nodeName,
      headingLevel: n(u),
      textContent: p
    };
    return e.includeHtml && (g.childNodes = u.childNodes), e.headingObjectCallback ? e.headingObjectCallback(g, u) : g;
  }
  function i(u, p) {
    const g = l(u), d = g.headingLevel;
    let m = p, f = r(m);
    const b = f ? f.headingLevel : 0;
    let y = d - b;
    for (; y > 0 && (f = r(m), !(f && d === f.headingLevel)); )
      f && f.children !== void 0 && (m = f.children), y--;
    return d >= e.collapseDepth && (g.isCollapsed = !0), m.push(g), m;
  }
  function c(u, p) {
    let g = p;
    e.ignoreSelector && (g = p.split(",").map(function(m) {
      return `${m.trim()}:not(${e.ignoreSelector})`;
    }));
    try {
      return u.querySelectorAll(g);
    } catch {
      return console.warn(`Headers not found with selector: ${g}`), null;
    }
  }
  function s(u) {
    return t.call(
      u,
      function(g, d) {
        const m = l(d);
        return m && i(m, g.nest), g;
      },
      {
        nest: []
      }
    );
  }
  return {
    nestHeadingsArray: s,
    selectHeadings: c
  };
}
function UE(e) {
  var t = e.duration, r = e.offset;
  if (typeof window > "u" || typeof location > "u")
    return;
  var n = location.hash ? i(location.href) : location.href;
  o();
  function o() {
    document.body.addEventListener("click", s, !1);
    function s(u) {
      !l(u.target) || u.target.className.indexOf("no-smooth-scroll") > -1 || u.target.href.charAt(u.target.href.length - 2) === "#" && u.target.href.charAt(u.target.href.length - 1) === "!" || u.target.className.indexOf(e.linkClass) === -1 || WE(u.target.hash, {
        duration: t,
        offset: r,
        callback: function() {
          c(u.target.hash);
        }
      });
    }
  }
  function l(s) {
    return s.tagName.toLowerCase() === "a" && (s.hash.length > 0 || s.href.charAt(s.href.length - 1) === "#") && (i(s.href) === n || i(s.href) + "#" === n);
  }
  function i(s) {
    return s.slice(0, s.lastIndexOf("#"));
  }
  function c(s) {
    var u = document.getElementById(s.substring(1));
    u && (/^(?:a|select|input|button|textarea)$/i.test(u.tagName) || (u.tabIndex = -1), u.focus());
  }
}
function WE(e, t) {
  var r = window.pageYOffset, n = {
    duration: t.duration,
    offset: t.offset || 0,
    callback: t.callback,
    easing: t.easing || g
  }, o = document.querySelector(
    '[id="' + decodeURI(e).split("#").join("") + '"]'
  ) || document.querySelector('[id="' + e.split("#").join("") + '"]'), l = typeof e == "string" ? n.offset + (e ? o && o.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e, i = typeof n.duration == "function" ? n.duration(l) : n.duration, c, s;
  requestAnimationFrame(function(d) {
    c = d, u(d);
  });
  function u(d) {
    s = d - c, window.scrollTo(0, n.easing(s, r, l, i)), s < i ? requestAnimationFrame(u) : p();
  }
  function p() {
    window.scrollTo(0, r + l), typeof n.callback == "function" && n.callback();
  }
  function g(d, m, f, b) {
    return d /= b / 2, d < 1 ? f / 2 * d * d + m : (d--, -f / 2 * (d * (d - 2) - 1) + m);
  }
}
function GE(e) {
  const t = e.tocScrollingWrapper || e.tocElement || document.querySelector(e.tocSelector);
  if (t && t.scrollHeight > t.clientHeight) {
    const r = t.querySelector(`.${e.activeListItemClass}`);
    if (r) {
      const o = r.offsetTop - e.tocScrollOffset;
      t.scrollTop = o > 0 ? o : 0;
    }
  }
}
let q = {}, Ve, Sa, Dt, ze, Dr;
function YE(e) {
  let t = !1;
  q = XE(zE, e || {}), q.scrollSmooth && (q.duration = q.scrollSmoothDuration, q.offset = q.scrollSmoothOffset, UE(q)), Ve = VE(q), Sa = qE(q), Uu();
  const r = QE(q);
  if (r === null)
    return;
  const n = Wu(q);
  if (n === null || (Dt = Sa.selectHeadings(
    r,
    q.headingSelector
  ), Dt === null))
    return;
  const l = Sa.nestHeadingsArray(Dt).nest;
  if (!q.skipRendering)
    Ve.render(n, l);
  else
    return this;
  let i = !1;
  const c = q.scrollHandlerTimeout || q.throttleTimeout;
  ze = ((p, g) => JE(p, g, q.scrollHandlerType))((p) => {
    var d, m, f;
    Ve.updateToc(Dt, p), !q.disableTocScrollSync && !i && GE(q), q.enableUrlHashUpdateOnScroll && t && Ve.getCurrentlyHighlighting() && Ve.updateUrlHashForHeader(Dt);
    const g = ((m = (d = p == null ? void 0 : p.target) == null ? void 0 : d.scrollingElement) == null ? void 0 : m.scrollTop) === 0;
    (p && (p.eventPhase === 0 || p.currentTarget === null) || g) && (Ve.updateToc(Dt), (f = q.scrollEndCallback) == null || f.call(q, p));
  }, c), t || (ze(), t = !0), window.onhashchange = window.onscrollend = (p) => {
    ze(p);
  }, q.scrollContainer && document.querySelector(q.scrollContainer) ? (document.querySelector(q.scrollContainer).addEventListener("scroll", ze, !1), document.querySelector(q.scrollContainer).addEventListener("resize", ze, !1)) : (document.addEventListener("scroll", ze, !1), document.addEventListener("resize", ze, !1));
  let u = null;
  Dr = ro((p) => {
    i = !0, q.scrollSmooth && Ve.disableTocAnimation(p), Ve.updateToc(Dt, p), u && clearTimeout(u), u = setTimeout(() => {
      Ve.enableTocAnimation();
    }, q.scrollSmoothDuration), setTimeout(() => {
      i = !1;
    }, q.scrollSmoothDuration + 100);
  }, q.throttleTimeout), q.scrollContainer && document.querySelector(q.scrollContainer) ? document.querySelector(q.scrollContainer).addEventListener("click", Dr, !1) : document.addEventListener("click", Dr, !1);
}
function Uu() {
  const e = Wu(q);
  e !== null && (q.skipRendering || e && (e.innerHTML = ""), q.scrollContainer && document.querySelector(q.scrollContainer) ? (document.querySelector(q.scrollContainer).removeEventListener("scroll", ze, !1), document.querySelector(q.scrollContainer).removeEventListener("resize", ze, !1), Ve && document.querySelector(q.scrollContainer).removeEventListener("click", Dr, !1)) : (document.removeEventListener("scroll", ze, !1), document.removeEventListener("resize", ze, !1), Ve && document.removeEventListener("click", Dr, !1)));
}
const KE = Object.prototype.hasOwnProperty;
function XE(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      KE.call(n, o) && (t[o] = n[o]);
  }
  return t;
}
function ro(e, t, r) {
  t || (t = 250);
  let n, o;
  return function(...l) {
    const i = r || this, c = +/* @__PURE__ */ new Date();
    n && c < n + t ? (clearTimeout(o), o = setTimeout(() => {
      n = c, e.apply(i, l);
    }, t)) : (n = c, e.apply(i, l));
  };
}
function Ni(e, t) {
  let r;
  return (...n) => {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function JE(e, t, r = "auto") {
  switch (r) {
    case "debounce":
      return Ni(e, t);
    case "throttle":
      return ro(e, t);
    default:
      return t < 334 ? Ni(e, t) : ro(e, t);
  }
}
function QE(e) {
  try {
    return e.contentElement || document.querySelector(e.contentSelector);
  } catch {
    return console.warn(`Contents element not found: ${e.contentSelector}`), null;
  }
}
function Wu(e) {
  try {
    return e.tocElement || document.querySelector(e.tocSelector);
  } catch {
    return console.warn(`TOC element not found: ${e.tocSelector}`), null;
  }
}
const { global: $e } = __STORYBOOK_MODULE_GLOBAL__, { deprecate: me, once: e6, logger: ll } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: t6, composeConfigs: Uw, Preview: Ww, DocsContext: Gw } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: Hi, UPDATE_STORY_ARGS: r6, RESET_STORY_ARGS: n6, GLOBALS_UPDATED: Zi, NAVIGATE_URL: a6 } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var o6 = O.div(ae, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: ne(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), Gu = (e) => a.createElement(o6, { ...e, className: "docblock-emptyblock sb-unstyled" }), l6 = O(qn)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), i6 = O.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), pn = O.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${Ma}`]: { margin: 0 } })), s6 = () => a.createElement(i6, null, a.createElement(pn, null), a.createElement(pn, { style: { width: "80%" } }), a.createElement(pn, { style: { width: "30%" } }), a.createElement(pn, { style: { width: "80%" } })), il = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: l, ...i }) => {
  if (e)
    return a.createElement(s6, null);
  if (t)
    return a.createElement(Gu, null, t);
  let c = a.createElement(l6, { bordered: !0, copyable: !0, format: l, language: r, className: "docblock-source sb-unstyled", ...i }, n);
  if (typeof o > "u")
    return c;
  let s = o ? Oa.dark : Oa.light;
  return a.createElement(Ds, { theme: $a(s) }, c);
};
il.defaultProps = { format: !1 };
var ce = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, sl = 600, c6 = O.h1(ae, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${sl}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), u6 = O.h2(ae, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${sl}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: ne(0.25, e.color.defaultText) })), d6 = O.div(({ theme: e }) => {
  let t = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, r = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, n = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? ne(0.1, e.color.defaultText) : ne(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [ce("a")]: { ...t, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [ce("blockquote")]: { ...t, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [ce("div")]: t, [ce("dl")]: { ...t, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [ce("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [ce("h2")]: { ...t, ...r, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [ce("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [ce("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` }, [ce("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` }, [ce("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [ce("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [ce("img")]: { maxWidth: "100%" }, [ce("li")]: { ...t, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": n }, [ce("ol")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [ce("p")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": n }, [ce("pre")]: { ...t, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [ce("span")]: { ...t, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [ce("table")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [ce("ul")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), p6 = O.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${sl}px)`]: {} })), f6 = ({ children: e, toc: t }) => a.createElement(p6, { className: "sbdocs sbdocs-wrapper" }, a.createElement(d6, { className: "sbdocs sbdocs-content" }, e), t), ea = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), m6 = ({ zoom: e, resetZoom: t }) => a.createElement(a.Fragment, null, a.createElement(Zt, { key: "zoomin", onClick: (r) => {
  r.preventDefault(), e(0.8);
}, title: "Zoom in" }, a.createElement(Ee, { icon: "zoom" })), a.createElement(Zt, { key: "zoomout", onClick: (r) => {
  r.preventDefault(), e(1.25);
}, title: "Zoom out" }, a.createElement(Ee, { icon: "zoomout" })), a.createElement(Zt, { key: "zoomreset", onClick: (r) => {
  r.preventDefault(), t();
}, title: "Reset zoom" }, a.createElement(Ee, { icon: "zoomreset" }))), g6 = O(Gn)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), h6 = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l }) => a.createElement(g6, { ...l }, a.createElement(h.Fragment, { key: "left" }, e ? [1, 2, 3].map((i) => a.createElement(au, { key: i })) : a.createElement(m6, { zoom: n, resetZoom: o }))), Yu = h.createContext({ scale: 1 }), { window: b6 } = $e, y6 = class extends h.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = b6.document.getElementById(e);
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
}, { PREVIEW_URL: v6 } = $e, E6 = v6 || "iframe.html", no = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`, x6 = (e) => {
  let t = h.useRef(), [r, n] = h.useState(!0), [o, l] = h.useState(), { story: i, height: c, autoplay: s, forceInitialArgs: u, renderStoryToElement: p } = e;
  return h.useEffect(() => {
    if (!(i && t.current))
      return () => {
      };
    let g = t.current, d = p(i, g, { showMain: () => {
    }, showError: ({ title: m, description: f }) => l(new Error(`${m} - ${f}`)), showException: (m) => l(m) }, { autoplay: s, forceInitialArgs: u });
    return n(!1), () => {
      Promise.resolve().then(() => d());
    };
  }, [s, p, i]), o ? a.createElement("pre", null, a.createElement(Xc, { error: o })) : a.createElement(a.Fragment, null, c ? a.createElement("style", null, `#${no(e)} { min-height: ${c}; transform: translateZ(0); overflow: auto }`) : null, r && a.createElement(cl, null), a.createElement("div", { ref: t, id: `${no(e)}-inner`, "data-name": i.name }));
}, w6 = ({ story: e, height: t = "500px" }) => a.createElement("div", { style: { width: "100%", height: t } }, a.createElement(Yu.Consumer, null, ({ scale: r }) => a.createElement(y6, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: su(E6, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: r, style: { width: "100%", height: "100%", border: "0 none" } }))), A6 = (e) => {
  let { inline: t } = e;
  return a.createElement("div", { id: no(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, t ? a.createElement(x6, { ...e }) : a.createElement(w6, { ...e }));
}, cl = () => a.createElement(iu, null), S6 = O.div(({ isColumn: e, columns: t, layout: r }) => ({ display: e || !t ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), Vi = O(il)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : tt(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : tt(0.05, e.background.content) } })), C6 = O.div(({ theme: e, withSource: t, isExpanded: r }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...ea(e), borderBottomLeftRadius: t && r && 0, borderBottomRightRadius: t && r && 0, borderBottomWidth: r && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), k6 = (e, t, r) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => r(!1) } };
    case t:
      return { source: a.createElement(Vi, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => r(!1) } };
    default:
      return { source: a.createElement(Vi, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) } };
  }
};
function T6(e) {
  if (h.Children.count(e) === 1) {
    let t = e;
    if (t.props)
      return t.props.id;
  }
  return null;
}
var O6 = O(h6)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), _6 = O.div({ overflow: "hidden", position: "relative" }), ao = ({ isLoading: e, isColumn: t, columns: r, children: n, withSource: o, withToolbar: l = !1, isExpanded: i = !1, additionalActions: c, className: s, layout: u = "padded", ...p }) => {
  let [g, d] = h.useState(i), { source: m, actionItem: f } = k6(o, g, d), [b, y] = h.useState(1), v = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), S = o ? [f] : [], [E, x] = h.useState(c ? [...c] : []), w = [...S, ...E], { window: A } = $e, k = h.useCallback(async (R) => {
    let { createCopyToClipboardFunction: C } = await Promise.resolve().then(() => bg);
    C();
  }, []), T = (R) => {
    let C = A.getSelection();
    C && C.type === "Range" || (R.preventDefault(), E.filter((_) => _.title === "Copied").length === 0 && k(m.props.code).then(() => {
      x([...E, { title: "Copied", onClick: () => {
      } }]), A.setTimeout(() => x(E.filter((_) => _.title !== "Copied")), 1500);
    }));
  };
  return a.createElement(C6, { withSource: o, withToolbar: l, ...p, className: v.join(" ") }, l && a.createElement(O6, { isLoading: e, border: !0, zoom: (R) => y(b * R), resetZoom: () => y(1), storyId: T6(n), baseUrl: "./iframe.html" }), a.createElement(Yu.Provider, { value: { scale: b } }, a.createElement(_6, { className: "docs-story", onCopyCapture: o && T }, a.createElement(S6, { isColumn: t || !Array.isArray(n), columns: r, layout: u }, a.createElement(Kc.Element, { scale: b }, Array.isArray(n) ? n.map((R, C) => a.createElement("div", { key: C }, R)) : a.createElement("div", null, n))), a.createElement(Oo, { actionItems: w }))), o && g && m);
}, R6 = O(ao)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), F6 = () => a.createElement(R6, { isLoading: !0, withToolbar: !0 }, a.createElement(cl, null)), D6 = O.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: yt({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), L6 = ({ tags: e }) => {
  let t = (e.params || []).filter((l) => l.description), r = t.length !== 0, n = e.deprecated != null, o = e.returns != null && e.returns.description != null;
  return !r && !o && !n ? null : a.createElement(a.Fragment, null, a.createElement(D6, null, a.createElement("tbody", null, n && a.createElement("tr", { key: "deprecated" }, a.createElement("td", { colSpan: 2 }, a.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), r && t.map((l) => a.createElement("tr", { key: l.name }, a.createElement("td", null, a.createElement("code", null, l.name)), a.createElement("td", null, l.description))), o && a.createElement("tr", { key: "returns" }, a.createElement("td", null, a.createElement("code", null, "Returns")), a.createElement("td", null, e.returns.description)))));
}, oo = 8, zi = O.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), $6 = O.span(yt, ({ theme: e, simple: t = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...t && { background: "transparent", border: "0 none", paddingLeft: 0 } })), M6 = O.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), B6 = O.div(yt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), I6 = O.div(({ theme: e, width: t }) => ({ width: t, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), P6 = O(Ee)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), j6 = () => a.createElement("span", null, "-"), Ku = ({ text: e, simple: t }) => a.createElement($6, { simple: t }, e), N6 = zt(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
}), H6 = (e) => {
  if (!e)
    return [e];
  let t = e.split("|").map((r) => r.trim());
  return jy(t);
}, qi = (e, t = !0) => {
  let r = e;
  return t || (r = e.slice(0, oo)), r.map((n) => a.createElement(Ku, { key: n, text: n === "" ? '""' : n }));
}, Z6 = ({ value: e, initialExpandedArgs: t }) => {
  let { summary: r, detail: n } = e, [o, l] = h.useState(!1), [i, c] = h.useState(t || !1);
  if (r == null)
    return null;
  let s = typeof r.toString == "function" ? r.toString() : r;
  if (n == null) {
    if (/[(){}[\]<>]/.test(s))
      return a.createElement(Ku, { text: s });
    let u = H6(s), p = u.length;
    return p > oo ? a.createElement(zi, { isExpanded: i }, qi(u, i), a.createElement(M6, { onClick: () => c(!i) }, i ? "Show less..." : `Show ${p - oo} more...`)) : a.createElement(zi, null, qi(u));
  }
  return a.createElement(ru, { closeOnOutsideClick: !0, placement: "bottom", visible: o, onVisibleChange: (u) => {
    l(u);
  }, tooltip: a.createElement(I6, { width: N6(n) }, a.createElement(qn, { language: "jsx", format: !1 }, n)) }, a.createElement(B6, { className: "sbdocs-expandable" }, a.createElement("span", null, s), a.createElement(P6, { icon: o ? "arrowup" : "arrowdown" })));
}, Ca = ({ value: e, initialExpandedArgs: t }) => e == null ? a.createElement(j6, null) : a.createElement(Z6, { value: e, initialExpandedArgs: t }), V6 = O.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: ne(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${dn(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${dn(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: dn(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${dn(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), z6 = (e) => e === "true", q6 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o }) => {
  let l = h.useCallback(() => r(!1), [r]);
  if (t === void 0)
    return a.createElement(qe.Button, { id: $n(e), onClick: l }, "Set boolean");
  let i = Ue(e), c = typeof t == "string" ? z6(t) : t;
  return a.createElement(V6, { htmlFor: i, "aria-label": e }, a.createElement("input", { id: i, type: "checkbox", onChange: (s) => r(s.target.checked), checked: c, role: "switch", name: e, onBlur: n, onFocus: o }), a.createElement("span", { "aria-hidden": "true" }, "False"), a.createElement("span", { "aria-hidden": "true" }, "True"));
}, U6 = (e) => {
  let [t, r, n] = e.split("-"), o = /* @__PURE__ */ new Date();
  return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o;
}, W6 = (e) => {
  let [t, r] = e.split(":"), n = /* @__PURE__ */ new Date();
  return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
}, G6 = (e) => {
  let t = new Date(e), r = `000${t.getFullYear()}`.slice(-4), n = `0${t.getMonth() + 1}`.slice(-2), o = `0${t.getDate()}`.slice(-2);
  return `${r}-${n}-${o}`;
}, Y6 = (e) => {
  let t = new Date(e), r = `0${t.getHours()}`.slice(-2), n = `0${t.getMinutes()}`.slice(-2);
  return `${r}:${n}`;
}, K6 = O.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), X6 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o }) => {
  let [l, i] = h.useState(!0), c = h.useRef(), s = h.useRef();
  h.useEffect(() => {
    l !== !1 && (c && c.current && (c.current.value = G6(t)), s && s.current && (s.current.value = Y6(t)));
  }, [t]);
  let u = (d) => {
    let m = U6(d.target.value), f = new Date(t);
    f.setFullYear(m.getFullYear(), m.getMonth(), m.getDate());
    let b = f.getTime();
    b && r(b), i(!!b);
  }, p = (d) => {
    let m = W6(d.target.value), f = new Date(t);
    f.setHours(m.getHours()), f.setMinutes(m.getMinutes());
    let b = f.getTime();
    b && r(b), i(!!b);
  }, g = Ue(e);
  return a.createElement(K6, null, a.createElement(qe.Input, { type: "date", max: "9999-12-31", ref: c, id: `${g}-date`, name: `${g}-date`, onChange: u, onFocus: n, onBlur: o }), a.createElement(qe.Input, { type: "time", id: `${g}-time`, name: `${g}-time`, ref: s, onChange: p, onFocus: n, onBlur: o }), l ? null : a.createElement("div", null, "invalid"));
}, J6 = O.label({ display: "flex" }), Q6 = (e) => {
  let t = parseFloat(e);
  return Number.isNaN(t) ? void 0 : t;
}, ex = ({ name: e, value: t, onChange: r, min: n, max: o, step: l, onBlur: i, onFocus: c }) => {
  let [s, u] = h.useState(typeof t == "number" ? t : ""), [p, g] = h.useState(!1), [d, m] = h.useState(null), f = h.useCallback((v) => {
    u(v.target.value);
    let S = parseFloat(v.target.value);
    Number.isNaN(S) ? m(new Error(`'${v.target.value}' is not a number`)) : (r(S), m(null));
  }, [r, m]), b = h.useCallback(() => {
    u("0"), r(0), g(!0);
  }, [g]), y = h.useRef(null);
  return h.useEffect(() => {
    p && y.current && y.current.select();
  }, [p]), h.useEffect(() => {
    s !== (typeof t == "number" ? t : "") && u(t);
  }, [t]), !p && t === void 0 ? a.createElement(qe.Button, { id: $n(e), onClick: b }, "Set number") : a.createElement(J6, null, a.createElement(qe.Input, { ref: y, id: Ue(e), type: "number", onChange: f, size: "flex", placeholder: "Edit number...", value: s, valid: d ? "error" : null, autoFocus: p, name: e, min: n, max: o, step: l, onFocus: c, onBlur: i }));
}, Xu = (e, t) => {
  let r = t && Object.entries(t).find(([n, o]) => o === e);
  return r ? r[0] : void 0;
}, lo = (e, t) => e && t ? Object.entries(t).filter((r) => e.includes(r[1])).map((r) => r[0]) : [], Ju = (e, t) => e && t && e.map((r) => t[r]), tx = O.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), rx = O.span({}), nx = O.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Ui = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return ll.warn(`Checkbox with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = lo(r, t), [i, c] = h.useState(l), s = (p) => {
    let g = p.target.value, d = [...i];
    d.includes(g) ? d.splice(d.indexOf(g), 1) : d.push(g), n(Ju(d, t)), c(d);
  };
  h.useEffect(() => {
    c(lo(r, t));
  }, [r]);
  let u = Ue(e);
  return a.createElement(tx, { isInline: o }, Object.keys(t).map((p, g) => {
    let d = `${u}-${g}`;
    return a.createElement(nx, { key: d, htmlFor: d }, a.createElement("input", { type: "checkbox", id: d, name: d, value: p, onChange: s, checked: i == null ? void 0 : i.includes(p) }), a.createElement(rx, null, p));
  }));
}, ax = O.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), ox = O.span({}), lx = O.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Wi = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
  if (!t)
    return ll.warn(`Radio with no options: ${e}`), a.createElement(a.Fragment, null, "-");
  let l = Xu(r, t), i = Ue(e);
  return a.createElement(ax, { isInline: o }, Object.keys(t).map((c, s) => {
    let u = `${i}-${s}`;
    return a.createElement(lx, { key: u, htmlFor: u }, a.createElement("input", { type: "radio", id: u, name: u, value: c, onChange: (p) => n(t[p.currentTarget.value]), checked: c === l }), a.createElement(ox, null, c));
  }));
}, ix = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, Qu = O.select(ix, ({ theme: e }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), e0 = O.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), Gi = "Choose option...", sx = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (c) => {
    n(r[c.currentTarget.value]);
  }, l = Xu(t, r) || Gi, i = Ue(e);
  return a.createElement(e0, null, a.createElement(Ee, { icon: "arrowdown" }), a.createElement(Qu, { id: i, value: l, onChange: o }, a.createElement("option", { key: "no-selection", disabled: !0 }, Gi), Object.keys(r).map((c) => a.createElement("option", { key: c, value: c }, c))));
}, cx = ({ name: e, value: t, options: r, onChange: n }) => {
  let o = (c) => {
    let s = Array.from(c.currentTarget.options).filter((u) => u.selected).map((u) => u.value);
    n(Ju(s, r));
  }, l = lo(t, r), i = Ue(e);
  return a.createElement(e0, null, a.createElement(Qu, { id: i, multiple: !0, value: l, onChange: o }, Object.keys(r).map((c) => a.createElement("option", { key: c, value: c }, c))));
}, Yi = (e) => {
  let { name: t, options: r } = e;
  return r ? e.isMulti ? a.createElement(cx, { ...e }) : a.createElement(sx, { ...e }) : (ll.warn(`Select with no options: ${t}`), a.createElement(a.Fragment, null, "-"));
}, ux = (e, t) => Array.isArray(e) ? e.reduce((r, n) => (r[(t == null ? void 0 : t[n]) || String(n)] = n, r), {}) : e, dx = { check: Ui, "inline-check": Ui, radio: Wi, "inline-radio": Wi, select: Yi, "multi-select": Yi }, Xt = (e) => {
  let { type: t = "select", labels: r, argType: n } = e, o = { ...e, options: n ? ux(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") }, l = dx[t];
  if (l)
    return a.createElement(l, { ...o });
  throw new Error(`Unknown options type: ${t}`);
}, ul = "value", px = "key", fx = "Error", mx = "Object", gx = "Array", hx = "String", bx = "Number", yx = "Boolean", vx = "Date", Ex = "Null", xx = "Undefined", wx = "Function", Ax = "Symbol", t0 = "ADD_DELTA_TYPE", r0 = "REMOVE_DELTA_TYPE", n0 = "UPDATE_DELTA_TYPE";
function At(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function a0(e, t) {
  let r = At(e), n = At(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var dl = class extends h.Component {
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
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: o } = this.props, { inputRefKey: l, inputRefValue: i } = this.state, c = {};
    if (!t) {
      if (!l.value)
        return;
      c.key = l.value;
    }
    c.newValue = r(!1, n, o, c.key, i.value), e(c);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: t, addButtonElement: r, cancelButtonElement: n, inputElementGenerator: o, keyPath: l, deep: i } = this.props, c = h.cloneElement(r, { onClick: this.onSubmit }), s = h.cloneElement(n, { onClick: e }), u = o(ul, l, i), p = h.cloneElement(u, { placeholder: "Value", ref: this.refInputValue }), g = null;
    if (!t) {
      let d = o(px, l, i);
      g = h.cloneElement(d, { placeholder: "Key", ref: this.refInputKey });
    }
    return a.createElement("span", { className: "rejt-add-value-node" }, g, p, s, c);
  }
};
dl.defaultProps = { onlyValue: !1, addButtonElement: a.createElement("button", null, "+"), cancelButtonElement: a.createElement("button", null, "c") };
var o0 = class extends h.Component {
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
        let c = { keyPath: o, deep: l, key: e, oldValue: i, type: r0 };
        n.splice(e, 1), this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: u } = this.props;
        s(o[o.length - 1], n), u(c);
      }).catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state, { beforeAddAction: o, logger: l } = this.props;
    o(t.length, r, n, e).then(() => {
      let i = [...t, e];
      this.setState({ data: i }), this.handleAddValueCancel();
      let { onUpdate: c, onDeltaUpdate: s } = this.props;
      c(r[r.length - 1], i), s({ type: t0, keyPath: r, deep: n, key: i.length - 1, newValue: e });
    }).catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: l, keyPath: i, nextDeep: c } = this.state, s = l[e];
      o(e, i, c, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: u, onDeltaUpdate: p } = this.props;
        u(i[i.length - 1], l), p({ type: n0, keyPath: i, deep: c, key: e, newValue: t, oldValue: s }), r(void 0);
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state, { handleRemove: o, readOnly: l, getStyle: i, dataType: c, minusMenuElement: s } = this.props, { minus: u, collapsed: p } = i(e, t, r, n, c), g = l(e, t, r, n, c), d = h.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: u });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: p, onClick: this.handleCollapseMode }, "[...] ", t.length, " ", t.length === 1 ? "item" : "items"), !g && d);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: l } = this.state, { isCollapsed: i, handleRemove: c, onDeltaUpdate: s, readOnly: u, getStyle: p, dataType: g, addButtonElement: d, cancelButtonElement: m, editButtonElement: f, inputElementGenerator: b, textareaElementGenerator: y, minusMenuElement: v, plusMenuElement: S, beforeRemoveAction: E, beforeAddAction: x, beforeUpdateAction: w, logger: A, onSubmitValueParser: k } = this.props, { minus: T, plus: R, delimiter: C, ul: _, addForm: D } = p(e, t, r, n, g), F = u(e, t, r, n, g), $ = h.cloneElement(S, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: R }), L = h.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: T }), M = !0, I = "[", H = "]";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: C }, I), !o && $, a.createElement("ul", { className: "rejt-not-collapsed-list", style: _ }, t.map((B, N) => a.createElement(ta, { key: N, name: N.toString(), data: B, keyPath: r, deep: l, isCollapsed: i, handleRemove: this.handleRemoveItem(N), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: u, getStyle: p, addButtonElement: d, cancelButtonElement: m, editButtonElement: f, inputElementGenerator: b, textareaElementGenerator: y, minusMenuElement: v, plusMenuElement: S, beforeRemoveAction: E, beforeAddAction: x, beforeUpdateAction: w, logger: A, onSubmitValueParser: k }))), !F && o && a.createElement("div", { className: "rejt-add-form", style: D }, a.createElement(dl, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: M, addButtonElement: d, cancelButtonElement: m, inputElementGenerator: b, keyPath: r, deep: n, onSubmitValueParser: k })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: C }, H), !F && L);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { dataType: l, getStyle: i } = this.props, c = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = i(e, r, n, o, l);
    return a.createElement("div", { className: "rejt-array-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), c);
  }
};
o0.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var l0 = class extends h.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state, { readOnly: i, dataType: c } = this.props, s = i(r, n, o, l, c);
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
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: l, name: i, deep: c } = this.state;
    if (!l)
      return;
    let s = n(!0, o, c, i, l.value);
    e({ value: s, key: i }).then(() => {
      a0(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: c, dataType: s, getStyle: u, editButtonElement: p, cancelButtonElement: g, textareaElementGenerator: d, minusMenuElement: m, keyPath: f } = this.props, b = u(e, i, n, o, s), y = null, v = null, S = c(e, i, n, o, s);
    if (r && !S) {
      let E = d(ul, f, o, e, i, s), x = h.cloneElement(p, { onClick: this.handleEdit }), w = h.cloneElement(g, { onClick: this.handleCancelEdit }), A = h.cloneElement(E, { ref: this.refInput, defaultValue: i });
      y = a.createElement("span", { className: "rejt-edit-form", style: b.editForm }, A, " ", w, x), v = null;
    } else {
      y = a.createElement("span", { className: "rejt-value", style: b.value, onClick: S ? null : this.handleEditMode }, t);
      let E = h.cloneElement(m, { onClick: l, className: "rejt-minus-menu", style: b.minus });
      v = S ? null : E;
    }
    return a.createElement("li", { className: "rejt-function-value-node", style: b.li }, a.createElement("span", { className: "rejt-name", style: b.name }, e, " :", " "), y, v);
  }
};
l0.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var ta = class extends h.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state, { isCollapsed: o, handleRemove: l, handleUpdateValue: i, onUpdate: c, onDeltaUpdate: s, readOnly: u, getStyle: p, addButtonElement: g, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: b, minusMenuElement: y, plusMenuElement: v, beforeRemoveAction: S, beforeAddAction: E, beforeUpdateAction: x, logger: w, onSubmitValueParser: A } = this.props, k = () => !0, T = At(e);
    switch (T) {
      case fx:
        return a.createElement(io, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: c, onDeltaUpdate: s, readOnly: k, dataType: T, getStyle: p, addButtonElement: g, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: b, minusMenuElement: y, plusMenuElement: v, beforeRemoveAction: S, beforeAddAction: E, beforeUpdateAction: x, logger: w, onSubmitValueParser: A });
      case mx:
        return a.createElement(io, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: c, onDeltaUpdate: s, readOnly: u, dataType: T, getStyle: p, addButtonElement: g, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: b, minusMenuElement: y, plusMenuElement: v, beforeRemoveAction: S, beforeAddAction: E, beforeUpdateAction: x, logger: w, onSubmitValueParser: A });
      case gx:
        return a.createElement(o0, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: l, onUpdate: c, onDeltaUpdate: s, readOnly: u, dataType: T, getStyle: p, addButtonElement: g, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, textareaElementGenerator: b, minusMenuElement: y, plusMenuElement: v, beforeRemoveAction: S, beforeAddAction: E, beforeUpdateAction: x, logger: w, onSubmitValueParser: A });
      case hx:
        return a.createElement(wt, { name: t, value: `"${e}"`, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case bx:
        return a.createElement(wt, { name: t, value: e, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case yx:
        return a.createElement(wt, { name: t, value: e ? "true" : "false", originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case vx:
        return a.createElement(wt, { name: t, value: e.toISOString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case Ex:
        return a.createElement(wt, { name: t, value: "null", originalValue: "null", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case xx:
        return a.createElement(wt, { name: t, value: "undefined", originalValue: "undefined", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case wx:
        return a.createElement(l0, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: u, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, textareaElementGenerator: b, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      case Ax:
        return a.createElement(wt, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: T, getStyle: p, cancelButtonElement: d, editButtonElement: m, inputElementGenerator: f, minusMenuElement: y, logger: w, onSubmitValueParser: A });
      default:
        return null;
    }
  }
};
ta.defaultProps = { keyPath: [], deep: 0 };
var io = class extends h.Component {
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
      let { onUpdate: c, onDeltaUpdate: s } = this.props;
      c(n[n.length - 1], r), s({ type: t0, keyPath: n, deep: o, key: e, newValue: t });
    }).catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: l } = this.state, i = n[e];
      t(e, o, l, i).then(() => {
        let c = { keyPath: o, deep: l, key: e, oldValue: i, type: r0 };
        delete n[e], this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: u } = this.props;
        s(o[o.length - 1], n), u(c);
      }).catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: l, keyPath: i, nextDeep: c } = this.state, s = l[e];
      o(e, i, c, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: u, onDeltaUpdate: p } = this.props;
        u(i[i.length - 1], l), p({ type: n0, keyPath: i, deep: c, key: e, newValue: t, oldValue: s }), r();
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state, { handleRemove: o, readOnly: l, dataType: i, getStyle: c, minusMenuElement: s } = this.props, { minus: u, collapsed: p } = c(e, n, t, r, i), g = Object.getOwnPropertyNames(n), d = l(e, n, t, r, i), m = h.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: u });
    return a.createElement("span", { className: "rejt-collapsed" }, a.createElement("span", { className: "rejt-collapsed-text", style: p, onClick: this.handleCollapseMode }, "{...}", " ", g.length, " ", g.length === 1 ? "key" : "keys"), !d && m);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: l } = this.state, { isCollapsed: i, handleRemove: c, onDeltaUpdate: s, readOnly: u, getStyle: p, dataType: g, addButtonElement: d, cancelButtonElement: m, editButtonElement: f, inputElementGenerator: b, textareaElementGenerator: y, minusMenuElement: v, plusMenuElement: S, beforeRemoveAction: E, beforeAddAction: x, beforeUpdateAction: w, logger: A, onSubmitValueParser: k } = this.props, { minus: T, plus: R, addForm: C, ul: _, delimiter: D } = p(e, t, r, n, g), F = Object.getOwnPropertyNames(t), $ = u(e, t, r, n, g), L = h.cloneElement(S, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: R }), M = h.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: T }), I = F.map((N) => a.createElement(ta, { key: N, name: N, data: t[N], keyPath: r, deep: o, isCollapsed: i, handleRemove: this.handleRemoveValue(N), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: u, getStyle: p, addButtonElement: d, cancelButtonElement: m, editButtonElement: f, inputElementGenerator: b, textareaElementGenerator: y, minusMenuElement: v, plusMenuElement: S, beforeRemoveAction: E, beforeAddAction: x, beforeUpdateAction: w, logger: A, onSubmitValueParser: k })), H = "{", B = "}";
    return a.createElement("span", { className: "rejt-not-collapsed" }, a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: D }, H), !$ && L, a.createElement("ul", { className: "rejt-not-collapsed-list", style: _ }, I), !$ && l && a.createElement("div", { className: "rejt-add-form", style: C }, a.createElement(dl, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: d, cancelButtonElement: m, inputElementGenerator: b, keyPath: r, deep: n, onSubmitValueParser: k })), a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: D }, B), !$ && M);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { getStyle: l, dataType: i } = this.props, c = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = l(e, r, n, o, i);
    return a.createElement("div", { className: "rejt-object-node" }, a.createElement("span", { onClick: this.handleCollapseMode }, a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), c);
  }
};
io.defaultProps = { keyPath: [], deep: 0, minusMenuElement: a.createElement("span", null, " - "), plusMenuElement: a.createElement("span", null, " + ") };
var wt = class extends h.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state, { readOnly: i, dataType: c } = this.props, s = i(r, n, o, l, c);
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
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: l, name: i, deep: c } = this.state;
    if (!l)
      return;
    let s = n(!0, o, c, i, l.value);
    e({ value: s, key: i }).then(() => {
      a0(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: l, originalValue: i, readOnly: c, dataType: s, getStyle: u, editButtonElement: p, cancelButtonElement: g, inputElementGenerator: d, minusMenuElement: m, keyPath: f } = this.props, b = u(e, i, n, o, s), y = c(e, i, n, o, s), v = r && !y, S = d(ul, f, o, e, i, s), E = h.cloneElement(p, { onClick: this.handleEdit }), x = h.cloneElement(g, { onClick: this.handleCancelEdit }), w = h.cloneElement(S, { ref: this.refInput, defaultValue: JSON.stringify(i) }), A = h.cloneElement(m, { onClick: l, className: "rejt-minus-menu", style: b.minus });
    return a.createElement("li", { className: "rejt-value-node", style: b.li }, a.createElement("span", { className: "rejt-name", style: b.name }, e, " : "), v ? a.createElement("span", { className: "rejt-edit-form", style: b.editForm }, w, " ", x, E) : a.createElement("span", { className: "rejt-value", style: b.value, onClick: y ? null : this.handleEditMode }, String(t)), !y && !v && A);
  }
};
wt.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: a.createElement("button", null, "e"), cancelButtonElement: a.createElement("button", null, "c"), minusMenuElement: a.createElement("span", null, " - ") };
var Sx = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, Cx = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, kx = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function Tx(e) {
  let t = e;
  if (t.indexOf("function") === 0)
    return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
var i0 = class extends h.Component {
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
    let { data: e, rootName: t } = this.state, { isCollapsed: r, onDeltaUpdate: n, readOnly: o, getStyle: l, addButtonElement: i, cancelButtonElement: c, editButtonElement: s, inputElement: u, textareaElement: p, minusMenuElement: g, plusMenuElement: d, beforeRemoveAction: m, beforeAddAction: f, beforeUpdateAction: b, logger: y, onSubmitValueParser: v, fallback: S = null } = this.props, E = At(e), x = o;
    At(o) === "Boolean" && (x = () => o);
    let w = u;
    u && At(u) !== "Function" && (w = () => u);
    let A = p;
    return p && At(p) !== "Function" && (A = () => p), E === "Object" || E === "Array" ? a.createElement("div", { className: "rejt-tree" }, a.createElement(ta, { data: e, name: t, deep: -1, isCollapsed: r, onUpdate: this.onUpdate, onDeltaUpdate: n, readOnly: x, getStyle: l, addButtonElement: i, cancelButtonElement: c, editButtonElement: s, inputElementGenerator: w, textareaElementGenerator: A, minusMenuElement: g, plusMenuElement: d, handleRemove: this.removeRoot, beforeRemoveAction: m, beforeAddAction: f, beforeUpdateAction: b, logger: y, onSubmitValueParser: v })) : S;
  }
};
i0.defaultProps = { rootName: "root", isCollapsed: (e, t) => t !== -1, getStyle: (e, t, r, n, o) => {
  switch (o) {
    case "Object":
    case "Error":
      return Sx;
    case "Array":
      return Cx;
    default:
      return kx;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, t, r, n, o) => Tx(o), inputElement: () => a.createElement("input", null), textareaElement: () => a.createElement("textarea", null), fallback: null };
var { window: Ox } = $e, _x = O.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), ka = O.button(({ theme: e, primary: t }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: t ? e.color.secondary : "transparent", color: t ? e.color.lightest : e.color.dark, fontWeight: t ? "bold" : "normal", cursor: "pointer", order: t ? "initial" : 9 })), Ki = O(Ee)(({ theme: e, icon: t, disabled: r }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: r ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": r ? {} : { color: t === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), Xi = O.input(({ theme: e, placeholder: t }) => ({ outline: 0, margin: t ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: t === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), Rx = O(Zt)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), Fx = O(qe.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), Dx = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, Lx = (e) => {
  e.currentTarget.dispatchEvent(new Ox.KeyboardEvent("keydown", Dx));
}, $x = (e) => {
  e.currentTarget.select();
}, Mx = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), Ji = ({ name: e, value: t, onChange: r }) => {
  let n = Pd(), o = h.useMemo(() => t && S7(t), [t]), l = o != null, [i, c] = h.useState(!l), [s, u] = h.useState(null), p = h.useCallback((y) => {
    try {
      y && r(JSON.parse(y)), u(void 0);
    } catch (v) {
      u(v);
    }
  }, [r]), [g, d] = h.useState(!1), m = h.useCallback(() => {
    r({}), d(!0);
  }, [d]), f = h.useRef(null);
  if (h.useEffect(() => {
    g && f.current && f.current.select();
  }, [g]), !l)
    return a.createElement(qe.Button, { id: $n(e), onClick: m }, "Set object");
  let b = a.createElement(Fx, { ref: f, id: Ue(e), name: e, defaultValue: t === null ? "" : JSON.stringify(t, null, 2), onBlur: (y) => p(y.target.value), placeholder: "Edit JSON string...", autoFocus: g, valid: s ? "error" : null });
  return a.createElement(_x, null, ["Object", "Array"].includes(At(o)) && a.createElement(Rx, { href: "#", onClick: (y) => {
    y.preventDefault(), c((v) => !v);
  } }, a.createElement(Ee, { icon: i ? "eyeclose" : "eye" }), a.createElement("span", null, "RAW")), i ? b : a.createElement(i0, { data: o, rootName: e, onFullyUpdate: r, getStyle: Mx(n), cancelButtonElement: a.createElement(ka, { type: "button" }, "Cancel"), editButtonElement: a.createElement(ka, { type: "submit" }, "Save"), addButtonElement: a.createElement(ka, { type: "submit", primary: !0 }, "Save"), plusMenuElement: a.createElement(Ki, { icon: "add" }), minusMenuElement: a.createElement(Ki, { icon: "subtract" }), inputElement: (y, v, S, E) => E ? a.createElement(Xi, { onFocus: $x, onBlur: Lx }) : a.createElement(Xi, null), fallback: b }));
}, Bx = O.input(({ theme: e, min: t, max: r, value: n }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${ot(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${ot(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${tt(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: ot(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${ot(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${ot(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${tt(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${tt(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Mt(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${ot(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), s0 = O.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), Ix = O(s0)(({ numberOFDecimalsPlaces: e, max: t }) => ({ width: `${e + t.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), Px = O.div({ display: "flex", alignItems: "center", width: "100%" });
function jx(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var Nx = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: l = 1, onBlur: i, onFocus: c }) => {
  let s = (g) => {
    r(Q6(g.target.value));
  }, u = t !== void 0, p = h.useMemo(() => jx(l), [l]);
  return a.createElement(Px, null, a.createElement(s0, null, n), a.createElement(Bx, { id: Ue(e), type: "range", onChange: s, name: e, value: t, min: n, max: o, step: l, onFocus: c, onBlur: i }), a.createElement(Ix, { numberOFDecimalsPlaces: p, max: o }, u ? t.toFixed(p) : "--", " / ", o));
}, Hx = O.label({ display: "flex" }), Zx = O.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), Vx = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: l }) => {
  let i = (g) => {
    r(g.target.value);
  }, [c, s] = h.useState(!1), u = h.useCallback(() => {
    r(""), s(!0);
  }, [s]);
  if (t === void 0)
    return a.createElement(qe.Button, { id: $n(e), onClick: u }, "Set string");
  let p = typeof t == "string";
  return a.createElement(Hx, null, a.createElement(qe.Textarea, { id: Ue(e), maxLength: l, onChange: i, size: "flex", placeholder: "Edit string...", autoFocus: c, valid: p ? null : "error", name: e, value: p ? t : "", onFocus: n, onBlur: o }), l && a.createElement(Zx, { isMaxed: (t == null ? void 0 : t.length) === l }, (t == null ? void 0 : t.length) ?? 0, " / ", l));
}, zx = O(qe.Input)({ padding: 10 });
function qx(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var Ux = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
  let o = h.useRef(null);
  function l(i) {
    if (!i.target.files)
      return;
    let c = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
    e(c), qx(n);
  }
  return h.useEffect(() => {
    n == null && o.current && (o.current.value = null);
  }, [n, t]), a.createElement(zx, { ref: o, id: Ue(t), type: "file", name: t, multiple: !0, onChange: l, accept: r, size: "flex" });
}, Wx = h.lazy(() => import("./storybook-Color-6VNJS4EI-ca4c319a.es.js")), Gx = (e) => a.createElement(h.Suspense, { fallback: a.createElement("div", null) }, a.createElement(Wx, { ...e })), Yx = { array: Ji, object: Ji, boolean: q6, color: Gx, date: X6, number: ex, check: Xt, "inline-check": Xt, radio: Xt, "inline-radio": Xt, select: Xt, "multi-select": Xt, range: Nx, text: Vx, file: Ux }, Qi = () => a.createElement(a.Fragment, null, "-"), Kx = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
  let { key: o, control: l } = e, [i, c] = h.useState(!1), [s, u] = h.useState({ value: t });
  h.useEffect(() => {
    i || u({ value: t });
  }, [i, t]);
  let p = h.useCallback((b) => (u({ value: b }), r({ [o]: b }), b), [r, o]), g = h.useCallback(() => c(!1), []), d = h.useCallback(() => c(!0), []);
  if (!l || l.disable)
    return n ? a.createElement(Nt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : a.createElement(Qi, null);
  let m = { name: o, argType: e, value: s.value, onChange: p, onBlur: g, onFocus: d }, f = Yx[l.type] || Qi;
  return a.createElement(f, { ...m, ...l, controlType: l.type });
}, Xx = O.span({ fontWeight: "bold" }), Jx = O.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), Qx = O.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...yt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), e8 = O.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? ne(0.1, e.color.defaultText) : ne(0.2, e.color.defaultText), marginTop: t ? 4 : 0 })), t8 = O.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? ne(0.1, e.color.defaultText) : ne(0.2, e.color.defaultText), marginTop: t ? 12 : 0, marginBottom: 12 })), r8 = O.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })), fn = (e) => {
  var b;
  let [t, r] = h.useState(!1), { row: n, updateArgs: o, compact: l, expandable: i, initialExpandedArgs: c } = e, { name: s, description: u } = n, p = n.table || {}, g = p.type || n.type, d = p.defaultValue || n.defaultValue, m = (b = n.type) == null ? void 0 : b.required, f = u != null && u !== "";
  return a.createElement("tr", { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) }, a.createElement(r8, { expandable: i }, a.createElement(Xx, null, s), m ? a.createElement(Jx, { title: "Required" }, "*") : null), l ? null : a.createElement("td", null, f && a.createElement(Qx, null, a.createElement(Du, null, u)), p.jsDocTags != null ? a.createElement(a.Fragment, null, a.createElement(t8, { hasDescription: f }, a.createElement(Ca, { value: g, initialExpandedArgs: c })), a.createElement(L6, { tags: p.jsDocTags })) : a.createElement(e8, { hasDescription: f }, a.createElement(Ca, { value: g, initialExpandedArgs: c }))), l ? null : a.createElement("td", null, a.createElement(Ca, { value: d, initialExpandedArgs: c })), o ? a.createElement("td", null, a.createElement(Kx, { ...e, isHovered: t })) : null);
}, n8 = O(Ee)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? ne(0.25, e.color.defaultText) : ne(0.3, e.color.defaultText), border: "none", display: "inline-block" })), a8 = O.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), o8 = O.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? ne(0.4, e.color.defaultText) : ne(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), l8 = O.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), i8 = O.td(() => ({ position: "relative" })), s8 = O.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${Mt(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), es = O.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), Ta = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
  let [l, i] = h.useState(n), c = e === "subsection" ? l8 : o8, s = (r == null ? void 0 : r.length) || 0, u = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "", p = l ? "arrowdown" : "arrowright", g = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
  return a.createElement(a.Fragment, null, a.createElement(s8, { title: g }, a.createElement(c, { colSpan: 1 }, a.createElement(es, { onClick: (d) => i(!l), tabIndex: 0 }, g), a.createElement(a8, null, a.createElement(n8, { icon: p }), t)), a.createElement(i8, { colSpan: o - 1 }, a.createElement(es, { onClick: (d) => i(!l), tabIndex: -1, style: { outline: "none" } }, g), l ? null : u)), l ? r : null);
}, mn = O.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), he = O.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), ue = O.div(({ theme: e, width: t, height: r }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: t || "100%", height: r || 16, borderRadius: 3 })), be = [2, 4, 2, 2], c8 = () => a.createElement(a.Fragment, null, a.createElement(mn, null, a.createElement(he, { numColumn: be[0] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[1] }, a.createElement(ue, { width: "30%" })), a.createElement(he, { numColumn: be[2] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(mn, null, a.createElement(he, { numColumn: be[0] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(he, { numColumn: be[2] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(mn, null, a.createElement(he, { numColumn: be[0] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(he, { numColumn: be[2] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[3] }, a.createElement(ue, { width: "60%" }))), a.createElement(mn, null, a.createElement(he, { numColumn: be[0] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[1] }, a.createElement(ue, { width: "80%" }), a.createElement(ue, { width: "30%" })), a.createElement(he, { numColumn: be[2] }, a.createElement(ue, { width: "60%" })), a.createElement(he, { numColumn: be[3] }, a.createElement(ue, { width: "60%" })))), u8 = O.div(({ inAddonPanel: e, theme: t }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${t.appBorderColor}`, borderRadius: e ? 0 : t.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: t.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), d8 = O.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), p8 = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textColor })), f8 = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textMutedColor })), m8 = O.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), g8 = O.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), h8 = ({ inAddonPanel: e }) => {
  let [t, r] = h.useState(!0);
  return h.useEffect(() => {
    let n = setTimeout(() => {
      r(!1);
    }, 100);
    return () => clearTimeout(n);
  }, []), t ? null : a.createElement(u8, { inAddonPanel: e }, a.createElement(d8, null, a.createElement(p8, null, e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated"), a.createElement(f8, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")), a.createElement(m8, null, e && a.createElement(a.Fragment, null, a.createElement(Nt, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, a.createElement(Ee, { icon: "video" }), " Watch 5m video"), a.createElement(g8, null), a.createElement(Nt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Read docs")), !e && a.createElement(Nt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Learn how to set that up")));
}, b8 = O.table(({ theme: e, compact: t, inAddonPanel: r }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: r ? 0 : 25, marginBottom: r ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...t ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...t ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...t ? null : { width: "25%" } }, th: { color: e.base === "light" ? ne(0.25, e.color.defaultText) : ne(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: r ? 0 : 1, marginRight: r ? 0 : 1, tbody: { ...r ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...r ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), y8 = O(Zt)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), v8 = O.span({ display: "flex", justifyContent: "space-between" }), E8 = { alpha: (e, t) => e.name.localeCompare(t.name), requiredFirst: (e, t) => {
  var r, n;
  return +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) || e.name.localeCompare(t.name);
}, none: void 0 }, x8 = (e, t) => {
  let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!e)
    return r;
  Object.entries(e).forEach(([l, i]) => {
    let { category: c, subcategory: s } = (i == null ? void 0 : i.table) || {};
    if (c) {
      let u = r.sections[c] || { ungrouped: [], subsections: {} };
      if (!s)
        u.ungrouped.push({ key: l, ...i });
      else {
        let p = u.subsections[s] || [];
        p.push({ key: l, ...i }), u.subsections[s] = p;
      }
      r.sections[c] = u;
    } else if (s) {
      let u = r.ungroupedSubsections[s] || [];
      u.push({ key: l, ...i }), r.ungroupedSubsections[s] = u;
    } else
      r.ungrouped.push({ key: l, ...i });
  });
  let n = E8[t], o = (l) => n ? Object.keys(l).reduce((i, c) => ({ ...i, [c]: l[c].sort(n) }), {}) : l;
  return { ungrouped: r.ungrouped.sort(n), ungroupedSubsections: o(r.ungroupedSubsections), sections: Object.keys(r.sections).reduce((l, i) => ({ ...l, [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: o(r.sections[i].subsections) } }), {}) };
}, w8 = (e, t, r) => {
  try {
    return A0(e, t, r);
  } catch (n) {
    return e6.warn(n.message), !1;
  }
}, A8 = (e) => {
  let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: o, initialExpandedArgs: l, sort: i = "none", isLoading: c } = e;
  if ("error" in e) {
    let { error: S } = e;
    return a.createElement(Gu, null, S, " ", a.createElement(Nt, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  }
  if (c)
    return a.createElement(c8, null);
  let { rows: s, args: u, globals: p } = "rows" in e && e, g = x8(Xh(s, (S) => {
    var E;
    return !((E = S == null ? void 0 : S.table) != null && E.disable) && w8(S, u || {}, p || {});
  }), i), d = g.ungrouped.length === 0, m = Object.entries(g.sections).length === 0, f = Object.entries(g.ungroupedSubsections).length === 0;
  if (d && m && f)
    return a.createElement(h8, { inAddonPanel: o });
  let b = 1;
  t && (b += 1), n || (b += 2);
  let y = Object.keys(g.sections).length > 0, v = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l };
  return a.createElement(Qr, null, a.createElement(b8, { compact: n, inAddonPanel: o, className: "docblock-argstable sb-unstyled" }, a.createElement("thead", { className: "docblock-argstable-head" }, a.createElement("tr", null, a.createElement("th", null, a.createElement("span", null, "Name")), n ? null : a.createElement("th", null, a.createElement("span", null, "Description")), n ? null : a.createElement("th", null, a.createElement("span", null, "Default")), t ? a.createElement("th", null, a.createElement(v8, null, "Control", " ", !c && r && a.createElement(y8, { onClick: () => r(), title: "Reset controls" }, a.createElement(Ee, { icon: "undo", "aria-hidden": !0 })))) : null)), a.createElement("tbody", { className: "docblock-argstable-body" }, g.ungrouped.map((S) => a.createElement(fn, { key: S.key, row: S, arg: u && u[S.key], ...v })), Object.entries(g.ungroupedSubsections).map(([S, E]) => a.createElement(Ta, { key: S, label: S, level: "subsection", colSpan: b }, E.map((x) => a.createElement(fn, { key: x.key, row: x, arg: u && u[x.key], expandable: y, ...v })))), Object.entries(g.sections).map(([S, E]) => a.createElement(Ta, { key: S, label: S, level: "section", colSpan: b }, E.ungrouped.map((x) => a.createElement(fn, { key: x.key, row: x, arg: u && u[x.key], ...v })), Object.entries(E.subsections).map(([x, w]) => a.createElement(Ta, { key: x, label: x, level: "subsection", colSpan: b }, w.map((A) => a.createElement(fn, { key: A.key, row: A, arg: u && u[A.key], expandable: y, ...v })))))))));
};
O.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? ne(0.4, e.color.defaultText) : ne(0.6, e.color.defaultText) }));
O.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
O.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
O.div(ae, ({ theme: e }) => ({ ...ea(e), margin: "25px 0 40px", padding: "30px 20px" }));
var S8 = O.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText })), C8 = O.div(({ theme: e }) => ({ color: e.base === "light" ? ne(0.2, e.color.defaultText) : ne(0.6, e.color.defaultText) })), k8 = O.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 }), T8 = O.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? ne(0.4, e.color.defaultText) : ne(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } })), ts = O.div({ display: "flex", flexDirection: "row" }), O8 = O.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } })), rs = O.div(({ theme: e }) => ({ ...ea(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" })), ns = O.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 }), _8 = O.div({ flex: 1, display: "flex", flexDirection: "row" }), R8 = O.div({ display: "flex", alignItems: "flex-start" }), F8 = O.div({ flex: "0 0 30%" }), D8 = O.div({ flex: 1 }), L8 = O.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? ne(0.4, e.color.defaultText) : ne(0.6, e.color.defaultText) })), $8 = O.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
function as(e, t) {
  return a.createElement(O8, { key: `${e}-${t}`, title: e, background: e });
}
function os(e, t, r) {
  return a.createElement(T8, { key: `${e}-${t}`, title: e }, a.createElement("div", null, e, r && a.createElement("span", null, r)));
}
function M8(e) {
  return Array.isArray(e) ? a.createElement(ns, null, a.createElement(rs, null, e.map((t, r) => as(t, r))), a.createElement(ts, null, e.map((t, r) => os(t, r)))) : a.createElement(ns, null, a.createElement(rs, null, Object.values(e).map((t, r) => as(t, r))), a.createElement(ts, null, Object.keys(e).map((t, r) => os(t, r, e[t]))));
}
var Yw = ({ title: e, subtitle: t, colors: r }) => a.createElement(R8, null, a.createElement(k8, null, a.createElement(S8, null, e), a.createElement(C8, null, t)), a.createElement(_8, null, M8(r))), Kw = ({ children: e, ...t }) => a.createElement(Qr, null, a.createElement($8, { ...t, className: "docblock-colorpalette sb-unstyled" }, a.createElement(L8, null, a.createElement(F8, null, "Name"), a.createElement(D8, null, "Swatches")), e)), B8 = O.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 })), I8 = O.div(({ theme: e }) => ({ ...ea(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } })), P8 = O.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" }), j8 = O.div({ display: "flex", flexFlow: "row wrap" }), Xw = ({ name: e, children: t }) => a.createElement(P8, null, a.createElement(I8, null, t), a.createElement(B8, null, e)), Jw = ({ children: e, ...t }) => a.createElement(Qr, null, a.createElement(j8, { ...t, className: "docblock-icongallery sb-unstyled" }, e)), N8 = (e) => `anchor--${e}`, c0 = ({ storyId: e, children: t }) => a.createElement("div", { id: N8(e), className: "sb-anchor" }, t);
$e && $e.__DOCS_CONTEXT__ === void 0 && ($e.__DOCS_CONTEXT__ = h.createContext(null), $e.__DOCS_CONTEXT__.displayName = "DocsContext");
var ke = $e ? $e.__DOCS_CONTEXT__ : h.createContext(null), tn = (e, t) => h.useContext(ke).resolveOf(e, t);
function H8(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function Z8(e, t) {
  let r = pl([e], t);
  return r && r[0];
}
function pl(e, t) {
  let [r, n] = h.useState({});
  return h.useEffect(() => {
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
function u0(e) {
  return ZE(e);
}
var d0 = h.createContext({ sources: {} }), p0 = "--unknown--", V8 = ({ children: e, channel: t }) => {
  let [r, n] = h.useState({});
  return h.useEffect(() => {
    let o = (l, i = null, c = !1) => {
      let { id: s, args: u = void 0, source: p, format: g } = typeof l == "string" ? { id: l, source: i, format: c } : l, d = u ? u0(u) : p0;
      n((m) => ({ ...m, [s]: { ...m[s], [d]: { code: p, format: g } } }));
    };
    return t.on(xl, o), () => t.off(xl, o);
  }, []), a.createElement(d0.Provider, { value: { sources: r } }, e);
}, z8 = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(z8 || {}), q8 = (e) => {
  let t = e.map((r) => {
    var n, o;
    return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : o.state;
  }).filter(Boolean);
  return t.length === 0 ? "closed" : t[0];
}, U8 = (e, t, r) => {
  let { sources: n } = r, o = n == null ? void 0 : n[e];
  return (o == null ? void 0 : o[u0(t)]) || (o == null ? void 0 : o[p0]) || { code: "" };
}, W8 = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
  var s, u, p, g, d, m;
  let { __isArgsStory: o } = t.parameters, l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {}, i = r || l.type || aa.AUTO;
  if (l.code !== void 0)
    return l.code;
  let c = i === aa.DYNAMIC || i === aa.AUTO && e && o ? e : l.originalSource || "";
  return l.transformSource && me(we`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (u = t.parameters.docs) != null && u.transformSource && me(we`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (p = t.parameters.jsx) != null && p.transformSource && me(we`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), ((m = n ?? l.transform ?? l.transformSource ?? ((g = t.parameters.docs) == null ? void 0 : g.transformSource) ?? ((d = t.parameters.jsx) == null ? void 0 : d.transformSource)) == null ? void 0 : m(c, t)) || c;
}, f0 = (e, t, r) => {
  var m, f, b;
  let n = e.ids || (e.id ? [e.id] : []), o = pl(n, t), l = o, { of: i } = e;
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
  let c = ((b = (f = (m = l[0]) == null ? void 0 : m.parameters) == null ? void 0 : f.docs) == null ? void 0 : b.source) || {}, { code: s } = e, u = e.format ?? c.format, p = e.language ?? c.language ?? "jsx", g = e.dark ?? c.dark ?? !1;
  s || (s = l.map((y, v) => {
    var w, A;
    if (!y)
      return "";
    let S = t.getStoryContext(y), E = e.__forceInitialArgs ? S.initialArgs : S.unmappedArgs, x = U8(y.id, E, r);
    return v === 0 && (u = x.format ?? ((A = (w = y.parameters.docs) == null ? void 0 : w.source) == null ? void 0 : A.format) ?? !1), W8({ snippet: x.code, storyContext: { ...S, args: E }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let d = q8(l);
  return s ? { code: s, format: u, language: p, dark: g, state: d } : { error: "Oh no! The source is not available.", state: d };
}, m0 = (e, t) => {
  let { id: r, of: n, meta: o, story: l } = e;
  if ("of" in e && n === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (r)
    return me(we`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r;
  let { name: i } = e;
  return i ? (me(we`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), t.storyIdByName(i)) : (l && me(we`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), o && t.referenceMeta(o, !1), t.resolveOf(n || l || "story", ["story"]).story.id);
}, G8 = (e, t, r) => {
  let { parameters: n = {} } = t || {}, { docs: o = {} } = n, l = o.story || {};
  if (o.disable)
    return null;
  let { inlineStories: i, iframeHeight: c } = o;
  typeof i < "u" && me(we`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let s = e.inline ?? l.inline ?? i ?? !1;
  if (typeof c < "u" && me(we`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), s) {
    let p = e.height ?? l.height, g = e.autoplay ?? l.autoplay ?? !1;
    return { story: t, inline: !0, height: p, autoplay: g, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: r.renderStoryToElement };
  }
  let u = e.height ?? l.height ?? l.iframeHeight ?? c ?? "100px";
  return { story: t, inline: !1, height: u, primary: !!e.__primary };
}, Y8 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let t = h.useContext(ke), r = m0(e, t), n = Z8(r, t);
  if (!n)
    return a.createElement(cl, null);
  let o = G8(e, n, t);
  return o ? a.createElement(A6, { ...o }) : null;
}, K8 = ({ withSource: e, mdxSource: t, children: r, layout: n, ...o }, l, i) => {
  let c = h.Children.toArray(r).filter((d) => d.props && (d.props.id || d.props.name || d.props.of)).map((d) => m0(d.props, l)), s = pl(c, l), u = s.some((d) => !d), p = f0({ ...t ? { code: decodeURI(t) } : { ids: c }, ...o.of && { of: o.of } }, l, i);
  if (e === "none")
    return { isLoading: u, previewProps: o };
  let g = n;
  return h.Children.forEach(r, (d) => {
    var m, f;
    g || (g = (f = (m = d == null ? void 0 : d.props) == null ? void 0 : m.parameters) == null ? void 0 : f.layout);
  }), s.forEach((d) => {
    var m, f;
    g || !d || (g = (d == null ? void 0 : d.parameters.layout) ?? ((f = (m = d.parameters.docs) == null ? void 0 : m.canvas) == null ? void 0 : f.layout));
  }), { isLoading: u, previewProps: { ...o, layout: g ?? "padded", withSource: p, isExpanded: (e || p.state) === "open" } };
}, X8 = (e) => {
  var y, v, S, E, x, w, A, k, T, R;
  let t = h.useContext(ke), r = h.useContext(d0), { children: n, of: o, source: l } = e;
  if ("of" in e && o === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: i, previewProps: c } = K8(e, t, r), s, u, p;
  try {
    ({ story: s } = tn(o || "story", ["story"]));
  } catch (C) {
    n || (p = C);
  }
  try {
    u = f0({ ...l, ...o && { of: o } }, t, r);
  } catch (C) {
    n || (p = C);
  }
  if (p)
    throw p;
  if (e.withSource && me(we`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && me(we`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && me(we`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), n)
    return me(we`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), i ? a.createElement(F6, null) : a.createElement(ao, { ...c }, n);
  let g = e.layout ?? s.parameters.layout ?? ((v = (y = s.parameters.docs) == null ? void 0 : y.canvas) == null ? void 0 : v.layout) ?? "padded", d = e.withToolbar ?? ((E = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : E.withToolbar) ?? !1, m = e.additionalActions ?? ((w = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null ? void 0 : w.additionalActions), f = e.sourceState ?? ((k = (A = s.parameters.docs) == null ? void 0 : A.canvas) == null ? void 0 : k.sourceState) ?? "hidden", b = e.className ?? ((R = (T = s.parameters.docs) == null ? void 0 : T.canvas) == null ? void 0 : R.className);
  return a.createElement(ao, { withSource: f === "none" ? void 0 : u, isExpanded: f === "shown", withToolbar: d, additionalActions: m, className: b, layout: g }, a.createElement(Y8, { of: o || s.moduleExport, meta: e.meta, ...e.story }));
}, J8 = (e, t) => {
  let r = t.getStoryContext(e), [n, o] = h.useState(r.globals);
  return h.useEffect(() => {
    let l = (i) => {
      o(i.globals);
    };
    return t.channel.on(Zi, l), () => t.channel.off(Zi, l);
  }, [t.channel]), [n];
}, Q8 = (e, t) => {
  let r = ew(e, t);
  if (!r)
    throw new Error("No result when story was defined");
  return r;
}, ew = (e, t) => {
  let r = e ? t.getStoryContext(e) : { args: {} }, { id: n } = e || { id: "none" }, [o, l] = h.useState(r.args);
  h.useEffect(() => {
    let s = (u) => {
      u.storyId === n && l(u.args);
    };
    return t.channel.on(Hi, s), () => t.channel.off(Hi, s);
  }, [n, t.channel]);
  let i = h.useCallback((s) => t.channel.emit(r6, { storyId: n, updatedArgs: s }), [n, t.channel]), c = h.useCallback((s) => t.channel.emit(n6, { storyId: n, argNames: s }), [n, t.channel]);
  return e && [o, i, c];
}, tw = (e) => {
  var b;
  let { of: t } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = h.useContext(ke), { story: n } = r.resolveOf(t || "story", ["story"]), { parameters: o, argTypes: l } = n, i = ((b = o.docs) == null ? void 0 : b.controls) || {}, c = e.include ?? i.include, s = e.exclude ?? i.exclude, u = e.sort ?? i.sort, [p, g, d] = Q8(n, r), [m] = J8(n, r), f = t6(l, c, s);
  return a.createElement(A8, { rows: f, args: p, globals: m, updateArgs: g, resetArgs: d, sort: u });
}, { document: g0 } = $e, rw = ({ className: e, children: t, ...r }) => {
  if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
    return a.createElement(Zo, null, t);
  let n = e && e.split("-");
  return a.createElement(il, { language: n && n[1] || "plaintext", format: !1, code: t, ...r });
};
function fl(e, t) {
  e.channel.emit(a6, t);
}
var so = cu.a, nw = ({ hash: e, children: t }) => {
  let r = h.useContext(ke);
  return a.createElement(so, { href: e, target: "_self", onClick: (n) => {
    let o = e.substring(1);
    g0.getElementById(o) && fl(r, e);
  } }, t);
}, aw = (e) => {
  let { href: t, target: r, children: n, ...o } = e, l = h.useContext(ke);
  if (t) {
    if (t.startsWith("#"))
      return a.createElement(nw, { hash: t }, n);
    if (r !== "_blank" && !t.startsWith("https://"))
      return a.createElement(so, { href: t, onClick: (i) => {
        i.button === 0 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && (i.preventDefault(), fl(l, i.currentTarget.getAttribute("href")));
      }, target: r, ...o }, n);
  }
  return a.createElement(so, { ...e });
}, h0 = ["h1", "h2", "h3", "h4", "h5", "h6"], ow = h0.reduce((e, t) => ({ ...e, [t]: O(t)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), lw = O.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), iw = ({ as: e, id: t, children: r, ...n }) => {
  let o = h.useContext(ke), l = ow[e], i = `#${t}`;
  return a.createElement(l, { id: t, ...n }, a.createElement(lw, { "aria-hidden": "true", href: i, tabIndex: -1, target: "_self", onClick: (c) => {
    g0.getElementById(t) && fl(o, i);
  } }, a.createElement(Ee, { icon: "link" })), r);
}, ml = (e) => {
  let { as: t, id: r, children: n, ...o } = e;
  if (r)
    return a.createElement(iw, { as: t, id: r, ...o }, n);
  let l = t, { as: i, ...c } = e;
  return a.createElement(l, { ...re(c, t) });
}, sw = h0.reduce((e, t) => ({ ...e, [t]: (r) => a.createElement(ml, { as: t, ...r }) }), {}), cw = (e) => {
  var t;
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(we`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
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
  return a.createElement(Du, { ...e, options: { forceBlock: !0, overrides: { code: rw, a: aw, ...sw, ...(t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides }, ...e == null ? void 0 : e.options } });
}, uw = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(uw || {}), An = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", dw = (e) => e && (typeof e == "string" ? e : _a(e.markdown) || _a(e.text)), pw = (e) => e && (typeof e == "string" ? e : _a(e.text)), fw = (e) => null, mw = (e) => {
  var t, r, n, o, l, i, c, s;
  switch (e.type) {
    case "story":
      return ((r = (t = e.story.parameters.docs) == null ? void 0 : t.description) == null ? void 0 : r.story) || null;
    case "meta": {
      let { parameters: u, component: p } = e.preparedMeta;
      return ((o = (n = u.docs) == null ? void 0 : n.description) == null ? void 0 : o.component) || ((i = (l = u.docs) == null ? void 0 : l.extractComponentDescription) == null ? void 0 : i.call(l, p, { component: p, parameters: u })) || null;
    }
    case "component": {
      let { component: u, projectAnnotations: { parameters: p } } = e;
      return ((s = (c = p.docs) == null ? void 0 : c.extractComponentDescription) == null ? void 0 : s.call(c, u, { component: u, parameters: p })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
  }
}, gw = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
  let { component: o, parameters: l } = n();
  if (r || t)
    return r || t;
  let { notes: i, info: c, docs: s } = l;
  (i || c) && me(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${An}`);
  let { extractComponentDescription: u = fw, description: p } = s || {}, g = p == null ? void 0 : p.component;
  if (g)
    return g;
  switch (e) {
    case "info":
      return pw(c);
    case "notes":
      return dw(i);
    case "docgen":
    case "auto":
    default:
      return u(o, { component: o, ...l });
  }
}, co = (e) => {
  let { of: t, type: r, markdown: n, children: o } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let l = h.useContext(ke), i = tn(t || "meta"), c;
  return r || n || o ? c = gw(e, l) : c = mw(i), r && me(`Manually specifying description type is deprecated. See ${An}`), n && me(`The 'markdown' prop on the Description block is deprecated. See ${An}`), o && me(`The 'children' prop on the Description block is deprecated. See ${An}`), c ? a.createElement(cw, null, c) : null;
}, hw = O.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), bw = O.div(({ theme: e }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), yw = O.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), vw = ({ title: e }) => e === null ? null : typeof e == "string" ? a.createElement(yw, null, e) : e, Ew = ({ title: e, disable: t, headingSelector: r, contentsSelector: n, ignoreSelector: o, unsafeTocbotOptions: l }) => (h.useEffect(() => {
  let i = { tocSelector: ".toc-wrapper", contentSelector: n ?? ".sbdocs-content", headingSelector: r ?? "h3", ignoreSelector: o ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...l }, c = setTimeout(() => YE(i), 100);
  return () => {
    clearTimeout(c), Uu();
  };
}, [t]), a.createElement(a.Fragment, null, a.createElement(hw, null, t ? null : a.createElement(bw, null, a.createElement(vw, { title: e || null }), a.createElement("div", { className: "toc-wrapper" }))))), { document: xw, window: ww } = $e, Aw = ({ context: e, theme: t, children: r }) => {
  var o, l, i, c, s;
  let n;
  try {
    n = (l = (o = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : o.docs) == null ? void 0 : l.toc;
  } catch {
    n = (s = (c = (i = e == null ? void 0 : e.projectAnnotations) == null ? void 0 : i.parameters) == null ? void 0 : c.docs) == null ? void 0 : s.toc;
  }
  return h.useEffect(() => {
    let u;
    try {
      if (u = new URL(ww.parent.location.toString()), u.hash) {
        let p = xw.getElementById(u.hash.substring(1));
        p && setTimeout(() => {
          H8(p);
        }, 200);
      }
    } catch {
    }
  }), a.createElement(ke.Provider, { value: e }, a.createElement(V8, { channel: e.channel }, a.createElement(Ds, { theme: x1(t) }, a.createElement(f6, { toc: n ? a.createElement(Ew, { className: "sbdocs sbdocs-toc--custom", ...n }) : null }, r))));
}, Sw = /\s*\/\s*/, Cw = (e) => {
  let t = e.trim().split(Sw);
  return t && t[t.length - 1] || e;
}, kw = ({ children: e }) => {
  let t = h.useContext(ke), r = e || Cw(t.storyById().title);
  return r ? a.createElement(c6, { className: "sbdocs-title sb-unstyled" }, r) : null;
}, Tw = ({ children: e }) => {
  var n;
  let t = h.useContext(ke), r = e || ((n = t.storyById().parameters) == null ? void 0 : n.componentSubtitle);
  return r ? a.createElement(u6, { className: "sbdocs-subtitle sb-unstyled" }, r) : null;
}, Ow = ({ children: e, disableAnchor: t }) => {
  if (t || typeof e != "string")
    return a.createElement(zo, null, e);
  let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(ml, { as: "h3", id: r }, e);
}, b0 = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
  var c, s;
  let { story: l } = tn(e || "story", ["story"]), i = ((s = (c = l.parameters.docs) == null ? void 0 : c.canvas) == null ? void 0 : s.withToolbar) ?? r;
  return a.createElement(c0, { storyId: l.id }, t && a.createElement(a.Fragment, null, a.createElement(Ow, null, l.name), a.createElement(co, { of: e })), a.createElement(X8, { of: e, withToolbar: i, story: { __forceInitialArgs: n, __primary: o }, source: { __forceInitialArgs: n } }));
}, _w = (e) => {
  let { name: t, of: r } = e;
  if ("of" in e && r === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let n = h.useContext(ke), o;
  if (r && (o = tn(r || "meta", ["meta"]).csfFile.stories[0] || null), !o) {
    let l = t && n.storyIdByName(t);
    o = n.storyById(l);
  }
  return t && me(we`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `), o ? a.createElement(b0, { of: o.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, Rw = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string")
    return a.createElement(Vo, null, e);
  let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return a.createElement(ml, { as: "h2", id: n, ...r }, e);
}, Fw = O(Rw)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), Dw = ({ title: e = "Stories", includePrimary: t = !0 }) => {
  let { componentStories: r } = h.useContext(ke), n = r().filter((o) => {
    var l, i;
    return !((i = (l = o.parameters) == null ? void 0 : l.docs) != null && i.disable);
  });
  return t || (n = n.slice(1)), !n || n.length === 0 ? null : a.createElement(a.Fragment, null, a.createElement(Fw, null, e), n.map((o) => o && a.createElement(b0, { key: o.id, of: o.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
}, Lw = () => {
  let e = tn("meta", ["meta"]), { stories: t } = e.csfFile, r = Object.keys(t).length === 1;
  return a.createElement(a.Fragment, null, a.createElement(kw, null), a.createElement(Tw, null), a.createElement(co, { of: "meta" }), r ? a.createElement(co, { of: "story" }) : null, a.createElement(_w, null), a.createElement(tw, null), r ? null : a.createElement(Dw, null));
};
function Qw({ context: e, docsParameter: t }) {
  let r = t.container || Aw, n = t.page || Lw;
  return a.createElement(r, { context: e, theme: t.theme }, a.createElement(n, null));
}
var eA = ({ of: e }) => {
  let t = h.useContext(ke);
  e && t.referenceMeta(e, !0);
  try {
    let r = t.storyById();
    return a.createElement(c0, { storyId: r.id });
  } catch {
    return null;
  }
};
export {
  aw as A,
  Kw as C,
  Qw as D,
  qe as F,
  sw as H,
  Jw as I,
  eA as M,
  Fo as S,
  Vm as T,
  hf as W,
  _e as _,
  Ac as a,
  Yw as b,
  uc as c,
  Xw as d,
  rw as e,
  V as f,
  Nm as g,
  Ee as h,
  Ue as i,
  zt as m,
  O as n,
  qw as s
};
