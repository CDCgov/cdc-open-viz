import { P as M } from "./storybook-index-43433e35.es.js";
import { R as Ln } from "./storybook-index-45401197.es.js";
import { g as _n } from "./storybook-_commonjsHelpers-c5d32002.es.js";
function B(n, e) {
  return n == null || e == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function Gn(n, e) {
  return n == null || e == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function jn(n) {
  let e, r, t;
  n.length !== 2 ? (e = B, r = (o, s) => B(n(o), s), t = (o, s) => n(o) - s) : (e = n === B || n === Gn ? n : Bn, r = n, t = n);
  function i(o, s, u = 0, l = o.length) {
    if (u < l) {
      if (e(s, s) !== 0)
        return l;
      do {
        const c = u + l >>> 1;
        r(o[c], s) < 0 ? u = c + 1 : l = c;
      } while (u < l);
    }
    return u;
  }
  function a(o, s, u = 0, l = o.length) {
    if (u < l) {
      if (e(s, s) !== 0)
        return l;
      do {
        const c = u + l >>> 1;
        r(o[c], s) <= 0 ? u = c + 1 : l = c;
      } while (u < l);
    }
    return u;
  }
  function f(o, s, u = 0, l = o.length) {
    const c = i(o, s, u, l - 1);
    return c > u && t(o[c - 1], s) > -t(o[c], s) ? c - 1 : c;
  }
  return { left: i, center: f, right: a };
}
function Bn() {
  return 0;
}
function Vn(n) {
  return n === null ? NaN : +n;
}
const Xn = jn(B), Kn = Xn.right;
jn(Vn).center;
const Un = Kn, Wn = Math.sqrt(50), Yn = Math.sqrt(10), Zn = Math.sqrt(2);
function V(n, e, r) {
  const t = (e - n) / Math.max(0, r), i = Math.floor(Math.log10(t)), a = t / Math.pow(10, i), f = a >= Wn ? 10 : a >= Yn ? 5 : a >= Zn ? 2 : 1;
  let o, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / f, o = Math.round(n * u), s = Math.round(e * u), o / u < n && ++o, s / u > e && --s, u = -u) : (u = Math.pow(10, i) * f, o = Math.round(n / u), s = Math.round(e / u), o * u < n && ++o, s * u > e && --s), s < o && 0.5 <= r && r < 2 ? V(n, e, r * 2) : [o, s, u];
}
function Jn(n, e, r) {
  if (e = +e, n = +n, r = +r, !(r > 0))
    return [];
  if (n === e)
    return [n];
  const t = e < n, [i, a, f] = t ? V(e, n, r) : V(n, e, r);
  if (!(a >= i))
    return [];
  const o = a - i + 1, s = new Array(o);
  if (t)
    if (f < 0)
      for (let u = 0; u < o; ++u)
        s[u] = (a - u) / -f;
    else
      for (let u = 0; u < o; ++u)
        s[u] = (a - u) * f;
  else if (f < 0)
    for (let u = 0; u < o; ++u)
      s[u] = (i + u) / -f;
  else
    for (let u = 0; u < o; ++u)
      s[u] = (i + u) * f;
  return s;
}
function en(n, e, r) {
  return e = +e, n = +n, r = +r, V(n, e, r)[2];
}
function Qn(n, e, r) {
  e = +e, n = +n, r = +r;
  const t = e < n, i = t ? en(e, n, r) : en(n, e, r);
  return (t ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Pn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var a = "", f = 0; f < arguments.length; f++) {
        var o = arguments[f];
        o && (a = i(a, t(o)));
      }
      return a;
    }
    function t(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var f = "";
      for (var o in a)
        e.call(a, o) && a[o] && (f = i(f, o));
      return f;
    }
    function i(a, f) {
      return f ? a ? a + " " + f : a + f : a;
    }
    n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
  })();
})(Pn);
var ne = Pn.exports;
const ee = /* @__PURE__ */ _n(ne);
var re = ["top", "left", "transform", "className", "children", "innerRef"];
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
    }
    return n;
  }, rn.apply(this, arguments);
}
function te(n, e) {
  if (n == null)
    return {};
  var r = {}, t = Object.keys(n), i, a;
  for (a = 0; a < t.length; a++)
    i = t[a], !(e.indexOf(i) >= 0) && (r[i] = n[i]);
  return r;
}
function ie(n) {
  var e = n.top, r = e === void 0 ? 0 : e, t = n.left, i = t === void 0 ? 0 : t, a = n.transform, f = n.className, o = n.children, s = n.innerRef, u = te(n, re);
  return /* @__PURE__ */ Ln.createElement("g", rn({
    ref: s,
    className: ee("visx-group", f),
    transform: a || "translate(" + i + ", " + r + ")"
  }, u), o);
}
ie.propTypes = {
  top: M.number,
  left: M.number,
  transform: M.string,
  className: M.string,
  children: M.node,
  innerRef: M.oneOfType([M.string, M.func, M.object])
};
function ae(n, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(e).domain(n);
      break;
  }
  return this;
}
function on(n, e, r) {
  n.prototype = e.prototype = r, r.constructor = n;
}
function En(n, e) {
  var r = Object.create(n.prototype);
  for (var t in e)
    r[t] = e[t];
  return r;
}
function C() {
}
var q = 0.7, X = 1 / q, P = "\\s*([+-]?\\d+)\\s*", z = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", fe = /^#([0-9a-f]{3,8})$/, oe = new RegExp(`^rgb\\(${P},${P},${P}\\)$`), ue = new RegExp(`^rgb\\(${y},${y},${y}\\)$`), se = new RegExp(`^rgba\\(${P},${P},${P},${z}\\)$`), ce = new RegExp(`^rgba\\(${y},${y},${y},${z}\\)$`), le = new RegExp(`^hsl\\(${z},${y},${y}\\)$`), he = new RegExp(`^hsla\\(${z},${y},${y},${z}\\)$`), xn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
on(C, I, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gn,
  // Deprecated! Use color.formatHex.
  formatHex: gn,
  formatHex8: de,
  formatHsl: xe,
  formatRgb: mn,
  toString: mn
});
function gn() {
  return this.rgb().formatHex();
}
function de() {
  return this.rgb().formatHex8();
}
function xe() {
  return Hn(this).formatHsl();
}
function mn() {
  return this.rgb().formatRgb();
}
function I(n) {
  var e, r;
  return n = (n + "").trim().toLowerCase(), (e = fe.exec(n)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? pn(e) : r === 3 ? new x(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? L(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? L(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = oe.exec(n)) ? new x(e[1], e[2], e[3], 1) : (e = ue.exec(n)) ? new x(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = se.exec(n)) ? L(e[1], e[2], e[3], e[4]) : (e = ce.exec(n)) ? L(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = le.exec(n)) ? wn(e[1], e[2] / 100, e[3] / 100, 1) : (e = he.exec(n)) ? wn(e[1], e[2] / 100, e[3] / 100, e[4]) : xn.hasOwnProperty(n) ? pn(xn[n]) : n === "transparent" ? new x(NaN, NaN, NaN, 0) : null;
}
function pn(n) {
  return new x(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function L(n, e, r, t) {
  return t <= 0 && (n = e = r = NaN), new x(n, e, r, t);
}
function ge(n) {
  return n instanceof C || (n = I(n)), n ? (n = n.rgb(), new x(n.r, n.g, n.b, n.opacity)) : new x();
}
function tn(n, e, r, t) {
  return arguments.length === 1 ? ge(n) : new x(n, e, r, t ?? 1);
}
function x(n, e, r, t) {
  this.r = +n, this.g = +e, this.b = +r, this.opacity = +t;
}
on(x, tn, En(C, {
  brighter(n) {
    return n = n == null ? X : Math.pow(X, n), new x(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? q : Math.pow(q, n), new x(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new x(R(this.r), R(this.g), R(this.b), K(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bn,
  // Deprecated! Use color.formatHex.
  formatHex: bn,
  formatHex8: me,
  formatRgb: yn,
  toString: yn
}));
function bn() {
  return `#${k(this.r)}${k(this.g)}${k(this.b)}`;
}
function me() {
  return `#${k(this.r)}${k(this.g)}${k(this.b)}${k((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yn() {
  const n = K(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${R(this.r)}, ${R(this.g)}, ${R(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function K(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function R(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function k(n) {
  return n = R(n), (n < 16 ? "0" : "") + n.toString(16);
}
function wn(n, e, r, t) {
  return t <= 0 ? n = e = r = NaN : r <= 0 || r >= 1 ? n = e = NaN : e <= 0 && (n = NaN), new p(n, e, r, t);
}
function Hn(n) {
  if (n instanceof p)
    return new p(n.h, n.s, n.l, n.opacity);
  if (n instanceof C || (n = I(n)), !n)
    return new p();
  if (n instanceof p)
    return n;
  n = n.rgb();
  var e = n.r / 255, r = n.g / 255, t = n.b / 255, i = Math.min(e, r, t), a = Math.max(e, r, t), f = NaN, o = a - i, s = (a + i) / 2;
  return o ? (e === a ? f = (r - t) / o + (r < t) * 6 : r === a ? f = (t - e) / o + 2 : f = (e - r) / o + 4, o /= s < 0.5 ? a + i : 2 - a - i, f *= 60) : o = s > 0 && s < 1 ? 0 : f, new p(f, o, s, n.opacity);
}
function pe(n, e, r, t) {
  return arguments.length === 1 ? Hn(n) : new p(n, e, r, t ?? 1);
}
function p(n, e, r, t) {
  this.h = +n, this.s = +e, this.l = +r, this.opacity = +t;
}
on(p, pe, En(C, {
  brighter(n) {
    return n = n == null ? X : Math.pow(X, n), new p(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? q : Math.pow(q, n), new p(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, e = isNaN(n) || isNaN(this.s) ? 0 : this.s, r = this.l, t = r + (r < 0.5 ? r : 1 - r) * e, i = 2 * r - t;
    return new x(
      Q(n >= 240 ? n - 240 : n + 120, i, t),
      Q(n, i, t),
      Q(n < 120 ? n + 240 : n - 120, i, t),
      this.opacity
    );
  },
  clamp() {
    return new p(Mn(this.h), _(this.s), _(this.l), K(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = K(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Mn(this.h)}, ${_(this.s) * 100}%, ${_(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Mn(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function _(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function Q(n, e, r) {
  return (n < 60 ? e + (r - e) * n / 60 : n < 180 ? r : n < 240 ? e + (r - e) * (240 - n) / 60 : e) * 255;
}
const Z = (n) => () => n;
function On(n, e) {
  return function(r) {
    return n + r * e;
  };
}
function be(n, e, r) {
  return n = Math.pow(n, r), e = Math.pow(e, r) - n, r = 1 / r, function(t) {
    return Math.pow(n + t * e, r);
  };
}
function nr(n, e) {
  var r = e - n;
  return r ? On(n, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Z(isNaN(n) ? e : n);
}
function ye(n) {
  return (n = +n) == 1 ? qn : function(e, r) {
    return r - e ? be(e, r, n) : Z(isNaN(e) ? r : e);
  };
}
function qn(n, e) {
  var r = e - n;
  return r ? On(n, r) : Z(isNaN(n) ? e : n);
}
const Nn = function n(e) {
  var r = ye(e);
  function t(i, a) {
    var f = r((i = tn(i)).r, (a = tn(a)).r), o = r(i.g, a.g), s = r(i.b, a.b), u = qn(i.opacity, a.opacity);
    return function(l) {
      return i.r = f(l), i.g = o(l), i.b = s(l), i.opacity = u(l), i + "";
    };
  }
  return t.gamma = n, t;
}(1);
function we(n, e) {
  e || (e = []);
  var r = n ? Math.min(e.length, n.length) : 0, t = e.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      t[i] = n[i] * (1 - a) + e[i] * a;
    return t;
  };
}
function Me(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function Ne(n, e) {
  var r = e ? e.length : 0, t = n ? Math.min(r, n.length) : 0, i = new Array(t), a = new Array(r), f;
  for (f = 0; f < t; ++f)
    i[f] = un(n[f], e[f]);
  for (; f < r; ++f)
    a[f] = e[f];
  return function(o) {
    for (f = 0; f < t; ++f)
      a[f] = i[f](o);
    return a;
  };
}
function ve(n, e) {
  var r = /* @__PURE__ */ new Date();
  return n = +n, e = +e, function(t) {
    return r.setTime(n * (1 - t) + e * t), r;
  };
}
function U(n, e) {
  return n = +n, e = +e, function(r) {
    return n * (1 - r) + e * r;
  };
}
function $e(n, e) {
  var r = {}, t = {}, i;
  (n === null || typeof n != "object") && (n = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in n ? r[i] = un(n[i], e[i]) : t[i] = e[i];
  return function(a) {
    for (i in r)
      t[i] = r[i](a);
    return t;
  };
}
var an = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nn = new RegExp(an.source, "g");
function ke(n) {
  return function() {
    return n;
  };
}
function Re(n) {
  return function(e) {
    return n(e) + "";
  };
}
function Ae(n, e) {
  var r = an.lastIndex = nn.lastIndex = 0, t, i, a, f = -1, o = [], s = [];
  for (n = n + "", e = e + ""; (t = an.exec(n)) && (i = nn.exec(e)); )
    (a = i.index) > r && (a = e.slice(r, a), o[f] ? o[f] += a : o[++f] = a), (t = t[0]) === (i = i[0]) ? o[f] ? o[f] += i : o[++f] = i : (o[++f] = null, s.push({ i: f, x: U(t, i) })), r = nn.lastIndex;
  return r < e.length && (a = e.slice(r), o[f] ? o[f] += a : o[++f] = a), o.length < 2 ? s[0] ? Re(s[0].x) : ke(e) : (e = s.length, function(u) {
    for (var l = 0, c; l < e; ++l)
      o[(c = s[l]).i] = c.x(u);
    return o.join("");
  });
}
function un(n, e) {
  var r = typeof e, t;
  return e == null || r === "boolean" ? Z(e) : (r === "number" ? U : r === "string" ? (t = I(e)) ? (e = t, Nn) : Ae : e instanceof I ? Nn : e instanceof Date ? ve : Me(e) ? we : Array.isArray(e) ? Ne : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? $e : U)(n, e);
}
function Se(n, e) {
  return n = +n, e = +e, function(r) {
    return Math.round(n * (1 - r) + e * r);
  };
}
function je(n) {
  return function() {
    return n;
  };
}
function Pe(n) {
  return +n;
}
var vn = [0, 1];
function j(n) {
  return n;
}
function fn(n, e) {
  return (e -= n = +n) ? function(r) {
    return (r - n) / e;
  } : je(isNaN(e) ? NaN : 0.5);
}
function Ee(n, e) {
  var r;
  return n > e && (r = n, n = e, e = r), function(t) {
    return Math.max(n, Math.min(e, t));
  };
}
function He(n, e, r) {
  var t = n[0], i = n[1], a = e[0], f = e[1];
  return i < t ? (t = fn(i, t), a = r(f, a)) : (t = fn(t, i), a = r(a, f)), function(o) {
    return a(t(o));
  };
}
function Oe(n, e, r) {
  var t = Math.min(n.length, e.length) - 1, i = new Array(t), a = new Array(t), f = -1;
  for (n[t] < n[0] && (n = n.slice().reverse(), e = e.slice().reverse()); ++f < t; )
    i[f] = fn(n[f], n[f + 1]), a[f] = r(e[f], e[f + 1]);
  return function(o) {
    var s = Un(n, o, 1, t) - 1;
    return a[s](i[s](o));
  };
}
function qe(n, e) {
  return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function ze() {
  var n = vn, e = vn, r = un, t, i, a, f = j, o, s, u;
  function l() {
    var d = Math.min(n.length, e.length);
    return f !== j && (f = Ee(n[0], n[d - 1])), o = d > 2 ? Oe : He, s = u = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = o(n.map(t), e, r)))(t(f(d)));
  }
  return c.invert = function(d) {
    return f(i((u || (u = o(e, n.map(t), U)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (n = Array.from(d, Pe), l()) : n.slice();
  }, c.range = function(d) {
    return arguments.length ? (e = Array.from(d), l()) : e.slice();
  }, c.rangeRound = function(d) {
    return e = Array.from(d), r = Se, l();
  }, c.clamp = function(d) {
    return arguments.length ? (f = d ? !0 : j, l()) : f !== j;
  }, c.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, c.unknown = function(d) {
    return arguments.length ? (a = d, c) : a;
  }, function(d, N) {
    return t = d, i = N, l();
  };
}
function Ie() {
  return ze()(j, j);
}
function Ce(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function W(n, e) {
  if ((r = (n = e ? n.toExponential(e - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var r, t = n.slice(0, r);
  return [
    t.length > 1 ? t[0] + t.slice(2) : t,
    +n.slice(r + 1)
  ];
}
function E(n) {
  return n = W(Math.abs(n)), n ? n[1] : NaN;
}
function Fe(n, e) {
  return function(r, t) {
    for (var i = r.length, a = [], f = 0, o = n[0], s = 0; i > 0 && o > 0 && (s + o + 1 > t && (o = Math.max(1, t - s)), a.push(r.substring(i -= o, i + o)), !((s += o + 1) > t)); )
      o = n[f = (f + 1) % n.length];
    return a.reverse().join(e);
  };
}
function Te(n) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return n[+r];
    });
  };
}
var De = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Y(n) {
  if (!(e = De.exec(n)))
    throw new Error("invalid format: " + n);
  var e;
  return new sn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Y.prototype = sn.prototype;
function sn(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
sn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Le(n) {
  n:
    for (var e = n.length, r = 1, t = -1, i; r < e; ++r)
      switch (n[r]) {
        case ".":
          t = i = r;
          break;
        case "0":
          t === 0 && (t = r), i = r;
          break;
        default:
          if (!+n[r])
            break n;
          t > 0 && (t = 0);
          break;
      }
  return t > 0 ? n.slice(0, t) + n.slice(i + 1) : n;
}
var zn;
function _e(n, e) {
  var r = W(n, e);
  if (!r)
    return n + "";
  var t = r[0], i = r[1], a = i - (zn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, f = t.length;
  return a === f ? t : a > f ? t + new Array(a - f + 1).join("0") : a > 0 ? t.slice(0, a) + "." + t.slice(a) : "0." + new Array(1 - a).join("0") + W(n, Math.max(0, e + a - 1))[0];
}
function $n(n, e) {
  var r = W(n, e);
  if (!r)
    return n + "";
  var t = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + t : t.length > i + 1 ? t.slice(0, i + 1) + "." + t.slice(i + 1) : t + new Array(i - t.length + 2).join("0");
}
const kn = {
  "%": (n, e) => (n * 100).toFixed(e),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: Ce,
  e: (n, e) => n.toExponential(e),
  f: (n, e) => n.toFixed(e),
  g: (n, e) => n.toPrecision(e),
  o: (n) => Math.round(n).toString(8),
  p: (n, e) => $n(n * 100, e),
  r: $n,
  s: _e,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function Rn(n) {
  return n;
}
var An = Array.prototype.map, Sn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ge(n) {
  var e = n.grouping === void 0 || n.thousands === void 0 ? Rn : Fe(An.call(n.grouping, Number), n.thousands + ""), r = n.currency === void 0 ? "" : n.currency[0] + "", t = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", a = n.numerals === void 0 ? Rn : Te(An.call(n.numerals, String)), f = n.percent === void 0 ? "%" : n.percent + "", o = n.minus === void 0 ? "−" : n.minus + "", s = n.nan === void 0 ? "NaN" : n.nan + "";
  function u(c) {
    c = Y(c);
    var d = c.fill, N = c.align, b = c.sign, H = c.symbol, A = c.zero, O = c.width, J = c.comma, v = c.precision, cn = c.trim, g = c.type;
    g === "n" ? (J = !0, g = "g") : kn[g] || (v === void 0 && (v = 12), cn = !0, g = "g"), (A || d === "0" && N === "=") && (A = !0, d = "0", N = "=");
    var Fn = H === "$" ? r : H === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", Tn = H === "$" ? t : /[%p]/.test(g) ? f : "", ln = kn[g], Dn = /[defgprs%]/.test(g);
    v = v === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    function hn(h) {
      var $ = Fn, m = Tn, S, dn, F;
      if (g === "c")
        m = ln(h) + m, h = "";
      else {
        h = +h;
        var T = h < 0 || 1 / h < 0;
        if (h = isNaN(h) ? s : ln(Math.abs(h), v), cn && (h = Le(h)), T && +h == 0 && b !== "+" && (T = !1), $ = (T ? b === "(" ? b : o : b === "-" || b === "(" ? "" : b) + $, m = (g === "s" ? Sn[8 + zn / 3] : "") + m + (T && b === "(" ? ")" : ""), Dn) {
          for (S = -1, dn = h.length; ++S < dn; )
            if (F = h.charCodeAt(S), 48 > F || F > 57) {
              m = (F === 46 ? i + h.slice(S + 1) : h.slice(S)) + m, h = h.slice(0, S);
              break;
            }
        }
      }
      J && !A && (h = e(h, 1 / 0));
      var D = $.length + h.length + m.length, w = D < O ? new Array(O - D + 1).join(d) : "";
      switch (J && A && (h = e(w + h, w.length ? O - m.length : 1 / 0), w = ""), N) {
        case "<":
          h = $ + h + m + w;
          break;
        case "=":
          h = $ + w + h + m;
          break;
        case "^":
          h = w.slice(0, D = w.length >> 1) + $ + h + m + w.slice(D);
          break;
        default:
          h = w + $ + h + m;
          break;
      }
      return a(h);
    }
    return hn.toString = function() {
      return c + "";
    }, hn;
  }
  function l(c, d) {
    var N = u((c = Y(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(E(d) / 3))) * 3, H = Math.pow(10, -b), A = Sn[8 + b / 3];
    return function(O) {
      return N(H * O) + A;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var G, In, Cn;
Be({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Be(n) {
  return G = Ge(n), In = G.format, Cn = G.formatPrefix, G;
}
function Ve(n) {
  return Math.max(0, -E(Math.abs(n)));
}
function Xe(n, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(E(e) / 3))) * 3 - E(Math.abs(n)));
}
function Ke(n, e) {
  return n = Math.abs(n), e = Math.abs(e) - n, Math.max(0, E(e) - E(n)) + 1;
}
function Ue(n, e, r, t) {
  var i = Qn(n, e, r), a;
  switch (t = Y(t ?? ",f"), t.type) {
    case "s": {
      var f = Math.max(Math.abs(n), Math.abs(e));
      return t.precision == null && !isNaN(a = Xe(i, f)) && (t.precision = a), Cn(t, f);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      t.precision == null && !isNaN(a = Ke(i, Math.max(Math.abs(n), Math.abs(e)))) && (t.precision = a - (t.type === "e"));
      break;
    }
    case "f":
    case "%": {
      t.precision == null && !isNaN(a = Ve(i)) && (t.precision = a - (t.type === "%") * 2);
      break;
    }
  }
  return In(t);
}
function We(n) {
  var e = n.domain;
  return n.ticks = function(r) {
    var t = e();
    return Jn(t[0], t[t.length - 1], r ?? 10);
  }, n.tickFormat = function(r, t) {
    var i = e();
    return Ue(i[0], i[i.length - 1], r ?? 10, t);
  }, n.nice = function(r) {
    r == null && (r = 10);
    var t = e(), i = 0, a = t.length - 1, f = t[i], o = t[a], s, u, l = 10;
    for (o < f && (u = f, f = o, o = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = en(f, o, r), u === s)
        return t[i] = f, t[a] = o, e(t);
      if (u > 0)
        f = Math.floor(f / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0)
        f = Math.ceil(f * u) / u, o = Math.floor(o * u) / u;
      else
        break;
      s = u;
    }
    return n;
  }, n;
}
function Ye() {
  var n = Ie();
  return n.copy = function() {
    return qe(n, Ye());
  }, ae.apply(n, arguments), We(n);
}
export {
  Ie as A,
  un as B,
  C,
  ie as G,
  x as R,
  q as a,
  X as b,
  ee as c,
  on as d,
  En as e,
  nr as f,
  Se as g,
  pe as h,
  Nn as i,
  U as j,
  I as k,
  Ye as l,
  Ae as m,
  qn as n,
  Vn as o,
  B as p,
  ae as q,
  ge as r,
  Un as s,
  jn as t,
  Qn as u,
  ze as v,
  qe as w,
  Jn as x,
  Y as y,
  In as z
};
