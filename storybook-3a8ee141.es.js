import { P as N } from "./storybook-b8c9afe4.es.js";
import { R as $, r as vn } from "./storybook-e61d95ab.es.js";
import { g as Be } from "./storybook-c5d32002.es.js";
import { i as P, j as rn, k as _, l as an, b as Ye, d as _e, c as Ge, a as Ke, g as Xe, f as Ve } from "./storybook-bedc547d.es.js";
import "./storybook-4ed993c7.es.js";
var he = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var u = t.apply(null, a);
              u && r.push(u);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              r.push(a.toString());
              continue;
            }
            for (var s in a)
              e.call(a, s) && a[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    n.exports ? (t.default = t, n.exports = t) : window.classNames = t;
  })();
})(he);
var We = he.exports;
const Pn = /* @__PURE__ */ Be(We);
var Ze = ["top", "left", "transform", "className", "children", "innerRef"];
function Mn() {
  return Mn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Mn.apply(this, arguments);
}
function Je(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Qe(n) {
  var e = n.top, t = e === void 0 ? 0 : e, r = n.left, i = r === void 0 ? 0 : r, a = n.transform, o = n.className, u = n.children, s = n.innerRef, f = Je(n, Ze);
  return /* @__PURE__ */ $.createElement("g", Mn({
    ref: s,
    className: Pn("visx-group", o),
    transform: a || "translate(" + i + ", " + t + ")"
  }, f), u);
}
Qe.propTypes = {
  top: N.number,
  left: N.number,
  transform: N.string,
  className: N.string,
  children: N.node,
  innerRef: N.oneOfType([N.string, N.func, N.object])
};
var nt = ["className", "innerRef"];
function Nn() {
  return Nn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Nn.apply(this, arguments);
}
function et(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function qr(n) {
  var e = n.className, t = n.innerRef, r = et(n, nt);
  return /* @__PURE__ */ $.createElement("rect", Nn({
    ref: t,
    className: Pn("visx-bar", e)
  }, r));
}
var tt = ["className", "innerRef"];
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, $n.apply(this, arguments);
}
function rt(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Dr(n) {
  var e = n.className, t = n.innerRef, r = rt(n, tt);
  return /* @__PURE__ */ $.createElement("circle", $n({
    ref: t,
    className: Pn("visx-circle", e)
  }, r));
}
function tn(n, e) {
  return n == null || e == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function it(n, e) {
  return n == null || e == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function de(n) {
  let e, t, r;
  n.length !== 2 ? (e = tn, t = (u, s) => tn(n(u), s), r = (u, s) => n(u) - s) : (e = n === tn || n === it ? n : at, t = n, r = n);
  function i(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (e(s, s) !== 0)
        return c;
      do {
        const l = f + c >>> 1;
        t(u[l], s) < 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function a(u, s, f = 0, c = u.length) {
    if (f < c) {
      if (e(s, s) !== 0)
        return c;
      do {
        const l = f + c >>> 1;
        t(u[l], s) <= 0 ? f = l + 1 : c = l;
      } while (f < c);
    }
    return f;
  }
  function o(u, s, f = 0, c = u.length) {
    const l = i(u, s, f, c - 1);
    return l > f && r(u[l - 1], s) > -r(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function at() {
  return 0;
}
function ot(n) {
  return n === null ? NaN : +n;
}
const ut = de(tn), ft = ut.right;
de(ot).center;
const st = ft, lt = Math.sqrt(50), ct = Math.sqrt(10), ht = Math.sqrt(2);
function on(n, e, t) {
  const r = (e - n) / Math.max(0, t), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= lt ? 10 : a >= ct ? 5 : a >= ht ? 2 : 1;
  let u, s, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, u = Math.round(n * f), s = Math.round(e * f), u / f < n && ++u, s / f > e && --s, f = -f) : (f = Math.pow(10, i) * o, u = Math.round(n / f), s = Math.round(e / f), u * f < n && ++u, s * f > e && --s), s < u && 0.5 <= t && t < 2 ? on(n, e, t * 2) : [u, s, f];
}
function dt(n, e, t) {
  if (e = +e, n = +n, t = +t, !(t > 0))
    return [];
  if (n === e)
    return [n];
  const r = e < n, [i, a, o] = r ? on(e, n, t) : on(n, e, t);
  if (!(a >= i))
    return [];
  const u = a - i + 1, s = new Array(u);
  if (r)
    if (o < 0)
      for (let f = 0; f < u; ++f)
        s[f] = (a - f) / -o;
    else
      for (let f = 0; f < u; ++f)
        s[f] = (a - f) * o;
  else if (o < 0)
    for (let f = 0; f < u; ++f)
      s[f] = (i + f) / -o;
  else
    for (let f = 0; f < u; ++f)
      s[f] = (i + f) * o;
  return s;
}
function kn(n, e, t) {
  return e = +e, n = +n, t = +t, on(n, e, t)[2];
}
function pt(n, e, t) {
  e = +e, n = +n, t = +t;
  const r = e < n, i = r ? kn(e, n, t) : kn(n, e, t);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function gt(n, e) {
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
function F(n, e, t) {
  n.prototype = e.prototype = t, t.constructor = n;
}
function V(n, e) {
  var t = Object.create(n.prototype);
  for (var r in e)
    t[r] = e[r];
  return t;
}
function C() {
}
var A = 0.7, q = 1 / A, L = "\\s*([+-]?\\d+)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", w = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mt = /^#([0-9a-f]{3,8})$/, xt = new RegExp(`^rgb\\(${L},${L},${L}\\)$`), bt = new RegExp(`^rgb\\(${w},${w},${w}\\)$`), yt = new RegExp(`^rgba\\(${L},${L},${L},${G}\\)$`), wt = new RegExp(`^rgba\\(${w},${w},${w},${G}\\)$`), vt = new RegExp(`^hsl\\(${G},${w},${w}\\)$`), Mt = new RegExp(`^hsla\\(${G},${w},${w},${G}\\)$`), Gn = {
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
F(C, K, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Kn,
  // Deprecated! Use color.formatHex.
  formatHex: Kn,
  formatHex8: Nt,
  formatHsl: $t,
  formatRgb: Xn,
  toString: Xn
});
function Kn() {
  return this.rgb().formatHex();
}
function Nt() {
  return this.rgb().formatHex8();
}
function $t() {
  return pe(this).formatHsl();
}
function Xn() {
  return this.rgb().formatRgb();
}
function K(n) {
  var e, t;
  return n = (n + "").trim().toLowerCase(), (e = mt.exec(n)) ? (t = e[1].length, e = parseInt(e[1], 16), t === 6 ? Vn(e) : t === 3 ? new p(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : t === 8 ? Q(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : t === 4 ? Q(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = xt.exec(n)) ? new p(e[1], e[2], e[3], 1) : (e = bt.exec(n)) ? new p(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = yt.exec(n)) ? Q(e[1], e[2], e[3], e[4]) : (e = wt.exec(n)) ? Q(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = vt.exec(n)) ? Jn(e[1], e[2] / 100, e[3] / 100, 1) : (e = Mt.exec(n)) ? Jn(e[1], e[2] / 100, e[3] / 100, e[4]) : Gn.hasOwnProperty(n) ? Vn(Gn[n]) : n === "transparent" ? new p(NaN, NaN, NaN, 0) : null;
}
function Vn(n) {
  return new p(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Q(n, e, t, r) {
  return r <= 0 && (n = e = t = NaN), new p(n, e, t, r);
}
function Hn(n) {
  return n instanceof C || (n = K(n)), n ? (n = n.rgb(), new p(n.r, n.g, n.b, n.opacity)) : new p();
}
function Cn(n, e, t, r) {
  return arguments.length === 1 ? Hn(n) : new p(n, e, t, r ?? 1);
}
function p(n, e, t, r) {
  this.r = +n, this.g = +e, this.b = +t, this.opacity = +r;
}
F(p, Cn, V(C, {
  brighter(n) {
    return n = n == null ? q : Math.pow(q, n), new p(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? A : Math.pow(A, n), new p(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new p(j(this.r), j(this.g), j(this.b), un(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wn,
  // Deprecated! Use color.formatHex.
  formatHex: Wn,
  formatHex8: kt,
  formatRgb: Zn,
  toString: Zn
}));
function Wn() {
  return `#${O(this.r)}${O(this.g)}${O(this.b)}`;
}
function kt() {
  return `#${O(this.r)}${O(this.g)}${O(this.b)}${O((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zn() {
  const n = un(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function un(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function j(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function O(n) {
  return n = j(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Jn(n, e, t, r) {
  return r <= 0 ? n = e = t = NaN : t <= 0 || t >= 1 ? n = e = NaN : e <= 0 && (n = NaN), new b(n, e, t, r);
}
function pe(n) {
  if (n instanceof b)
    return new b(n.h, n.s, n.l, n.opacity);
  if (n instanceof C || (n = K(n)), !n)
    return new b();
  if (n instanceof b)
    return n;
  n = n.rgb();
  var e = n.r / 255, t = n.g / 255, r = n.b / 255, i = Math.min(e, t, r), a = Math.max(e, t, r), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (e === a ? o = (t - r) / u + (t < r) * 6 : t === a ? o = (r - e) / u + 2 : o = (e - t) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new b(o, u, s, n.opacity);
}
function Rn(n, e, t, r) {
  return arguments.length === 1 ? pe(n) : new b(n, e, t, r ?? 1);
}
function b(n, e, t, r) {
  this.h = +n, this.s = +e, this.l = +t, this.opacity = +r;
}
F(b, Rn, V(C, {
  brighter(n) {
    return n = n == null ? q : Math.pow(q, n), new b(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? A : Math.pow(A, n), new b(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, e = isNaN(n) || isNaN(this.s) ? 0 : this.s, t = this.l, r = t + (t < 0.5 ? t : 1 - t) * e, i = 2 * t - r;
    return new p(
      gn(n >= 240 ? n - 240 : n + 120, i, r),
      gn(n, i, r),
      gn(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new b(Qn(this.h), nn(this.s), nn(this.l), un(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = un(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Qn(this.h)}, ${nn(this.s) * 100}%, ${nn(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Qn(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function nn(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function gn(n, e, t) {
  return (n < 60 ? e + (t - e) * n / 60 : n < 180 ? t : n < 240 ? e + (t - e) * (240 - n) / 60 : e) * 255;
}
const ge = Math.PI / 180, me = 180 / Math.PI, fn = 18, xe = 0.96422, be = 1, ye = 0.82521, we = 4 / 29, U = 6 / 29, ve = 3 * U * U, Ct = U * U * U;
function Me(n) {
  if (n instanceof v)
    return new v(n.l, n.a, n.b, n.opacity);
  if (n instanceof k)
    return Ne(n);
  n instanceof p || (n = Hn(n));
  var e = yn(n.r), t = yn(n.g), r = yn(n.b), i = mn((0.2225045 * e + 0.7168786 * t + 0.0606169 * r) / be), a, o;
  return e === t && t === r ? a = o = i : (a = mn((0.4360747 * e + 0.3850649 * t + 0.1430804 * r) / xe), o = mn((0.0139322 * e + 0.0971045 * t + 0.7141733 * r) / ye)), new v(116 * i - 16, 500 * (a - i), 200 * (i - o), n.opacity);
}
function Sn(n, e, t, r) {
  return arguments.length === 1 ? Me(n) : new v(n, e, t, r ?? 1);
}
function v(n, e, t, r) {
  this.l = +n, this.a = +e, this.b = +t, this.opacity = +r;
}
F(v, Sn, V(C, {
  brighter(n) {
    return new v(this.l + fn * (n ?? 1), this.a, this.b, this.opacity);
  },
  darker(n) {
    return new v(this.l - fn * (n ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var n = (this.l + 16) / 116, e = isNaN(this.a) ? n : n + this.a / 500, t = isNaN(this.b) ? n : n - this.b / 200;
    return e = xe * xn(e), n = be * xn(n), t = ye * xn(t), new p(
      bn(3.1338561 * e - 1.6168667 * n - 0.4906146 * t),
      bn(-0.9787684 * e + 1.9161415 * n + 0.033454 * t),
      bn(0.0719453 * e - 0.2289914 * n + 1.4052427 * t),
      this.opacity
    );
  }
}));
function mn(n) {
  return n > Ct ? Math.pow(n, 1 / 3) : n / ve + we;
}
function xn(n) {
  return n > U ? n * n * n : ve * (n - we);
}
function bn(n) {
  return 255 * (n <= 31308e-7 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055);
}
function yn(n) {
  return (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
}
function Rt(n) {
  if (n instanceof k)
    return new k(n.h, n.c, n.l, n.opacity);
  if (n instanceof v || (n = Me(n)), n.a === 0 && n.b === 0)
    return new k(NaN, 0 < n.l && n.l < 100 ? 0 : NaN, n.l, n.opacity);
  var e = Math.atan2(n.b, n.a) * me;
  return new k(e < 0 ? e + 360 : e, Math.sqrt(n.a * n.a + n.b * n.b), n.l, n.opacity);
}
function En(n, e, t, r) {
  return arguments.length === 1 ? Rt(n) : new k(n, e, t, r ?? 1);
}
function k(n, e, t, r) {
  this.h = +n, this.c = +e, this.l = +t, this.opacity = +r;
}
function Ne(n) {
  if (isNaN(n.h))
    return new v(n.l, 0, 0, n.opacity);
  var e = n.h * ge;
  return new v(n.l, Math.cos(e) * n.c, Math.sin(e) * n.c, n.opacity);
}
F(k, En, V(C, {
  brighter(n) {
    return new k(this.h, this.c, this.l + fn * (n ?? 1), this.opacity);
  },
  darker(n) {
    return new k(this.h, this.c, this.l - fn * (n ?? 1), this.opacity);
  },
  rgb() {
    return Ne(this).rgb();
  }
}));
var $e = -0.14861, In = 1.78277, zn = -0.29227, hn = -0.90649, X = 1.97294, ne = X * hn, ee = X * In, te = In * zn - hn * $e;
function St(n) {
  if (n instanceof T)
    return new T(n.h, n.s, n.l, n.opacity);
  n instanceof p || (n = Hn(n));
  var e = n.r / 255, t = n.g / 255, r = n.b / 255, i = (te * r + ne * e - ee * t) / (te + ne - ee), a = r - i, o = (X * (t - i) - zn * a) / hn, u = Math.sqrt(o * o + a * a) / (X * i * (1 - i)), s = u ? Math.atan2(o, a) * me - 120 : NaN;
  return new T(s < 0 ? s + 360 : s, u, i, n.opacity);
}
function On(n, e, t, r) {
  return arguments.length === 1 ? St(n) : new T(n, e, t, r ?? 1);
}
function T(n, e, t, r) {
  this.h = +n, this.s = +e, this.l = +t, this.opacity = +r;
}
F(T, On, V(C, {
  brighter(n) {
    return n = n == null ? q : Math.pow(q, n), new T(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? A : Math.pow(A, n), new T(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = isNaN(this.h) ? 0 : (this.h + 120) * ge, e = +this.l, t = isNaN(this.s) ? 0 : this.s * e * (1 - e), r = Math.cos(n), i = Math.sin(n);
    return new p(
      255 * (e + t * ($e * r + In * i)),
      255 * (e + t * (zn * r + hn * i)),
      255 * (e + t * (X * r)),
      this.opacity
    );
  }
}));
const dn = (n) => () => n;
function ke(n, e) {
  return function(t) {
    return n + t * e;
  };
}
function Et(n, e, t) {
  return n = Math.pow(n, t), e = Math.pow(e, t) - n, t = 1 / t, function(r) {
    return Math.pow(n + r * e, t);
  };
}
function Ln(n, e) {
  var t = e - n;
  return t ? ke(n, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : dn(isNaN(n) ? e : n);
}
function Ot(n) {
  return (n = +n) == 1 ? g : function(e, t) {
    return t - e ? Et(e, t, n) : dn(isNaN(e) ? t : e);
  };
}
function g(n, e) {
  var t = e - n;
  return t ? ke(n, t) : dn(isNaN(n) ? e : n);
}
const jn = function n(e) {
  var t = Ot(e);
  function r(i, a) {
    var o = t((i = Cn(i)).r, (a = Cn(a)).r), u = t(i.g, a.g), s = t(i.b, a.b), f = g(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = s(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function jt(n, e) {
  e || (e = []);
  var t = n ? Math.min(e.length, n.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < t; ++i)
      r[i] = n[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Tt(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function At(n, e) {
  var t = e ? e.length : 0, r = n ? Math.min(t, n.length) : 0, i = new Array(r), a = new Array(t), o;
  for (o = 0; o < r; ++o)
    i[o] = Un(n[o], e[o]);
  for (; o < t; ++o)
    a[o] = e[o];
  return function(u) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](u);
    return a;
  };
}
function Pt(n, e) {
  var t = /* @__PURE__ */ new Date();
  return n = +n, e = +e, function(r) {
    return t.setTime(n * (1 - r) + e * r), t;
  };
}
function sn(n, e) {
  return n = +n, e = +e, function(t) {
    return n * (1 - t) + e * t;
  };
}
function Ht(n, e) {
  var t = {}, r = {}, i;
  (n === null || typeof n != "object") && (n = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in n ? t[i] = Un(n[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in t)
      r[i] = t[i](a);
    return r;
  };
}
var Tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wn = new RegExp(Tn.source, "g");
function It(n) {
  return function() {
    return n;
  };
}
function zt(n) {
  return function(e) {
    return n(e) + "";
  };
}
function Lt(n, e) {
  var t = Tn.lastIndex = wn.lastIndex = 0, r, i, a, o = -1, u = [], s = [];
  for (n = n + "", e = e + ""; (r = Tn.exec(n)) && (i = wn.exec(e)); )
    (a = i.index) > t && (a = e.slice(t, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: sn(r, i) })), t = wn.lastIndex;
  return t < e.length && (a = e.slice(t), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? zt(s[0].x) : It(e) : (e = s.length, function(f) {
    for (var c = 0, l; c < e; ++c)
      u[(l = s[c]).i] = l.x(f);
    return u.join("");
  });
}
function Un(n, e) {
  var t = typeof e, r;
  return e == null || t === "boolean" ? dn(e) : (t === "number" ? sn : t === "string" ? (r = K(e)) ? (e = r, jn) : Lt : e instanceof K ? jn : e instanceof Date ? Pt : Tt(e) ? jt : Array.isArray(e) ? At : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ht : sn)(n, e);
}
function Ce(n, e) {
  return n = +n, e = +e, function(t) {
    return Math.round(n * (1 - t) + e * t);
  };
}
function Re(n) {
  return function(e, t) {
    var r = n((e = Rn(e)).h, (t = Rn(t)).h), i = g(e.s, t.s), a = g(e.l, t.l), o = g(e.opacity, t.opacity);
    return function(u) {
      return e.h = r(u), e.s = i(u), e.l = a(u), e.opacity = o(u), e + "";
    };
  };
}
const Ut = Re(Ln);
var qt = Re(g);
function Dt(n, e) {
  var t = g((n = Sn(n)).l, (e = Sn(e)).l), r = g(n.a, e.a), i = g(n.b, e.b), a = g(n.opacity, e.opacity);
  return function(o) {
    return n.l = t(o), n.a = r(o), n.b = i(o), n.opacity = a(o), n + "";
  };
}
function Se(n) {
  return function(e, t) {
    var r = n((e = En(e)).h, (t = En(t)).h), i = g(e.c, t.c), a = g(e.l, t.l), o = g(e.opacity, t.opacity);
    return function(u) {
      return e.h = r(u), e.c = i(u), e.l = a(u), e.opacity = o(u), e + "";
    };
  };
}
const Ft = Se(Ln);
var Bt = Se(g);
function Ee(n) {
  return function e(t) {
    t = +t;
    function r(i, a) {
      var o = n((i = On(i)).h, (a = On(a)).h), u = g(i.s, a.s), s = g(i.l, a.l), f = g(i.opacity, a.opacity);
      return function(c) {
        return i.h = o(c), i.s = u(c), i.l = s(Math.pow(c, t)), i.opacity = f(c), i + "";
      };
    }
    return r.gamma = e, r;
  }(1);
}
const Yt = Ee(Ln);
var _t = Ee(g);
function Gt(n) {
  return function() {
    return n;
  };
}
function Kt(n) {
  return +n;
}
var re = [0, 1];
function z(n) {
  return n;
}
function An(n, e) {
  return (e -= n = +n) ? function(t) {
    return (t - n) / e;
  } : Gt(isNaN(e) ? NaN : 0.5);
}
function Xt(n, e) {
  var t;
  return n > e && (t = n, n = e, e = t), function(r) {
    return Math.max(n, Math.min(e, r));
  };
}
function Vt(n, e, t) {
  var r = n[0], i = n[1], a = e[0], o = e[1];
  return i < r ? (r = An(i, r), a = t(o, a)) : (r = An(r, i), a = t(a, o)), function(u) {
    return a(r(u));
  };
}
function Wt(n, e, t) {
  var r = Math.min(n.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (n[r] < n[0] && (n = n.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = An(n[o], n[o + 1]), a[o] = t(e[o], e[o + 1]);
  return function(u) {
    var s = st(n, u, 1, r) - 1;
    return a[s](i[s](u));
  };
}
function Zt(n, e) {
  return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function Jt() {
  var n = re, e = re, t = Un, r, i, a, o = z, u, s, f;
  function c() {
    var d = Math.min(n.length, e.length);
    return o !== z && (o = Xt(n[0], n[d - 1])), u = d > 2 ? Wt : Vt, s = f = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(n.map(r), e, t)))(r(o(d)));
  }
  return l.invert = function(d) {
    return o(i((f || (f = u(e, n.map(r), sn)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (n = Array.from(d, Kt), c()) : n.slice();
  }, l.range = function(d) {
    return arguments.length ? (e = Array.from(d), c()) : e.slice();
  }, l.rangeRound = function(d) {
    return e = Array.from(d), t = Ce, c();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : z, c()) : o !== z;
  }, l.interpolate = function(d) {
    return arguments.length ? (t = d, c()) : t;
  }, l.unknown = function(d) {
    return arguments.length ? (a = d, l) : a;
  }, function(d, R) {
    return r = d, i = R, c();
  };
}
function Qt() {
  return Jt()(z, z);
}
function nr(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function ln(n, e) {
  if ((t = (n = e ? n.toExponential(e - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var t, r = n.slice(0, t);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +n.slice(t + 1)
  ];
}
function D(n) {
  return n = ln(Math.abs(n)), n ? n[1] : NaN;
}
function er(n, e) {
  return function(t, r) {
    for (var i = t.length, a = [], o = 0, u = n[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), a.push(t.substring(i -= u, i + u)), !((s += u + 1) > r)); )
      u = n[o = (o + 1) % n.length];
    return a.reverse().join(e);
  };
}
function tr(n) {
  return function(e) {
    return e.replace(/[0-9]/g, function(t) {
      return n[+t];
    });
  };
}
var rr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cn(n) {
  if (!(e = rr.exec(n)))
    throw new Error("invalid format: " + n);
  var e;
  return new qn({
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
cn.prototype = qn.prototype;
function qn(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
qn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ir(n) {
  n:
    for (var e = n.length, t = 1, r = -1, i; t < e; ++t)
      switch (n[t]) {
        case ".":
          r = i = t;
          break;
        case "0":
          r === 0 && (r = t), i = t;
          break;
        default:
          if (!+n[t])
            break n;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
}
var Oe;
function ar(n, e) {
  var t = ln(n, e);
  if (!t)
    return n + "";
  var r = t[0], i = t[1], a = i - (Oe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + ln(n, Math.max(0, e + a - 1))[0];
}
function ie(n, e) {
  var t = ln(n, e);
  if (!t)
    return n + "";
  var r = t[0], i = t[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ae = {
  "%": (n, e) => (n * 100).toFixed(e),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: nr,
  e: (n, e) => n.toExponential(e),
  f: (n, e) => n.toFixed(e),
  g: (n, e) => n.toPrecision(e),
  o: (n) => Math.round(n).toString(8),
  p: (n, e) => ie(n * 100, e),
  r: ie,
  s: ar,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function oe(n) {
  return n;
}
var ue = Array.prototype.map, fe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function or(n) {
  var e = n.grouping === void 0 || n.thousands === void 0 ? oe : er(ue.call(n.grouping, Number), n.thousands + ""), t = n.currency === void 0 ? "" : n.currency[0] + "", r = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", a = n.numerals === void 0 ? oe : tr(ue.call(n.numerals, String)), o = n.percent === void 0 ? "%" : n.percent + "", u = n.minus === void 0 ? "−" : n.minus + "", s = n.nan === void 0 ? "NaN" : n.nan + "";
  function f(l) {
    l = cn(l);
    var d = l.fill, R = l.align, y = l.sign, B = l.symbol, H = l.zero, Y = l.width, pn = l.comma, S = l.precision, Fn = l.trim, m = l.type;
    m === "n" ? (pn = !0, m = "g") : ae[m] || (S === void 0 && (S = 12), Fn = !0, m = "g"), (H || d === "0" && R === "=") && (H = !0, d = "0", R = "=");
    var qe = B === "$" ? t : B === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", De = B === "$" ? r : /[%p]/.test(m) ? o : "", Bn = ae[m], Fe = /[defgprs%]/.test(m);
    S = S === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function Yn(h) {
      var E = qe, x = De, I, _n, W;
      if (m === "c")
        x = Bn(h) + x, h = "";
      else {
        h = +h;
        var Z = h < 0 || 1 / h < 0;
        if (h = isNaN(h) ? s : Bn(Math.abs(h), S), Fn && (h = ir(h)), Z && +h == 0 && y !== "+" && (Z = !1), E = (Z ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + E, x = (m === "s" ? fe[8 + Oe / 3] : "") + x + (Z && y === "(" ? ")" : ""), Fe) {
          for (I = -1, _n = h.length; ++I < _n; )
            if (W = h.charCodeAt(I), 48 > W || W > 57) {
              x = (W === 46 ? i + h.slice(I + 1) : h.slice(I)) + x, h = h.slice(0, I);
              break;
            }
        }
      }
      pn && !H && (h = e(h, 1 / 0));
      var J = E.length + h.length + x.length, M = J < Y ? new Array(Y - J + 1).join(d) : "";
      switch (pn && H && (h = e(M + h, M.length ? Y - x.length : 1 / 0), M = ""), R) {
        case "<":
          h = E + h + x + M;
          break;
        case "=":
          h = E + M + h + x;
          break;
        case "^":
          h = M.slice(0, J = M.length >> 1) + E + h + x + M.slice(J);
          break;
        default:
          h = M + E + h + x;
          break;
      }
      return a(h);
    }
    return Yn.toString = function() {
      return l + "";
    }, Yn;
  }
  function c(l, d) {
    var R = f((l = cn(l), l.type = "f", l)), y = Math.max(-8, Math.min(8, Math.floor(D(d) / 3))) * 3, B = Math.pow(10, -y), H = fe[8 + y / 3];
    return function(Y) {
      return R(B * Y) + H;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var en, je, Te;
ur({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ur(n) {
  return en = or(n), je = en.format, Te = en.formatPrefix, en;
}
function fr(n) {
  return Math.max(0, -D(Math.abs(n)));
}
function sr(n, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(D(e) / 3))) * 3 - D(Math.abs(n)));
}
function lr(n, e) {
  return n = Math.abs(n), e = Math.abs(e) - n, Math.max(0, D(e) - D(n)) + 1;
}
function cr(n, e, t, r) {
  var i = pt(n, e, t), a;
  switch (r = cn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(n), Math.abs(e));
      return r.precision == null && !isNaN(a = sr(i, o)) && (r.precision = a), Te(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = lr(i, Math.max(Math.abs(n), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = fr(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return je(r);
}
function hr(n) {
  var e = n.domain;
  return n.ticks = function(t) {
    var r = e();
    return dt(r[0], r[r.length - 1], t ?? 10);
  }, n.tickFormat = function(t, r) {
    var i = e();
    return cr(i[0], i[i.length - 1], t ?? 10, r);
  }, n.nice = function(t) {
    t == null && (t = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], u = r[a], s, f, c = 10;
    for (u < o && (f = o, o = u, u = f, f = i, i = a, a = f); c-- > 0; ) {
      if (f = kn(o, u, t), f === s)
        return r[i] = o, r[a] = u, e(r);
      if (f > 0)
        o = Math.floor(o / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      s = f;
    }
    return n;
  }, n;
}
function Ae() {
  var n = Qt();
  return n.copy = function() {
    return Zt(n, Ae());
  }, gt.apply(n, arguments), hr(n);
}
const Dn = P((n) => {
  n.setTime(n - n.getMilliseconds());
}, (n, e) => {
  n.setTime(+n + e * rn);
}, (n, e) => (e - n) / rn, (n) => n.getUTCSeconds());
Dn.range;
const Pe = P((n) => {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * rn);
}, (n, e) => {
  n.setTime(+n + e * _);
}, (n, e) => (e - n) / _, (n) => n.getMinutes());
Pe.range;
const He = P((n) => {
  n.setUTCSeconds(0, 0);
}, (n, e) => {
  n.setTime(+n + e * _);
}, (n, e) => (e - n) / _, (n) => n.getUTCMinutes());
He.range;
const Ie = P((n) => {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * rn - n.getMinutes() * _);
}, (n, e) => {
  n.setTime(+n + e * an);
}, (n, e) => (e - n) / an, (n) => n.getHours());
Ie.range;
const ze = P((n) => {
  n.setUTCMinutes(0, 0, 0);
}, (n, e) => {
  n.setTime(+n + e * an);
}, (n, e) => (e - n) / an, (n) => n.getUTCHours());
ze.range;
const Le = P((n) => {
  n.setDate(1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setMonth(n.getMonth() + e);
}, (n, e) => e.getMonth() - n.getMonth() + (e.getFullYear() - n.getFullYear()) * 12, (n) => n.getMonth());
Le.range;
const Ue = P((n) => {
  n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCMonth(n.getUTCMonth() + e);
}, (n, e) => e.getUTCMonth() - n.getUTCMonth() + (e.getUTCFullYear() - n.getUTCFullYear()) * 12, (n) => n.getUTCMonth());
Ue.range;
function dr(n, e) {
  e.domain && ("nice" in n || "quantiles" in n || "padding" in n, n.domain(e.domain));
}
function pr(n, e) {
  e.range && ("padding" in n, n.range(e.range));
}
function gr(n, e) {
  "align" in n && "align" in e && typeof e.align < "u" && n.align(e.align);
}
function mr(n, e) {
  "base" in n && "base" in e && typeof e.base < "u" && n.base(e.base);
}
function xr(n, e) {
  "clamp" in n && "clamp" in e && typeof e.clamp < "u" && n.clamp(e.clamp);
}
function br(n, e) {
  "constant" in n && "constant" in e && typeof e.constant < "u" && n.constant(e.constant);
}
function yr(n, e) {
  "exponent" in n && "exponent" in e && typeof e.exponent < "u" && n.exponent(e.exponent);
}
var se = {
  lab: Dt,
  hcl: Ft,
  "hcl-long": Bt,
  hsl: Ut,
  "hsl-long": qt,
  cubehelix: Yt,
  "cubehelix-long": _t,
  rgb: jn
};
function wr(n) {
  switch (n) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return se[n];
  }
  var e = n.type, t = n.gamma, r = se[e];
  return typeof t > "u" ? r : r.gamma(t);
}
function vr(n, e) {
  if ("interpolate" in e && "interpolate" in n && typeof e.interpolate < "u") {
    var t = wr(e.interpolate);
    n.interpolate(t);
  }
}
var Mr = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), Nr = "%Y-%m-%d %H:%M";
function $r(n) {
  var e = n.tickFormat(1, Nr)(Mr);
  return e === "2020-02-02 03:04";
}
var le = {
  day: Ye,
  hour: Ie,
  minute: Pe,
  month: Le,
  second: Dn,
  week: _e,
  year: Ge
}, ce = {
  day: Ke,
  hour: ze,
  minute: He,
  month: Ue,
  second: Dn,
  week: Xe,
  year: Ve
};
function kr(n, e) {
  if ("nice" in e && typeof e.nice < "u" && "nice" in n) {
    var t = e.nice;
    if (typeof t == "boolean")
      t && n.nice();
    else if (typeof t == "number")
      n.nice(t);
    else {
      var r = n, i = $r(r);
      if (typeof t == "string")
        r.nice(i ? ce[t] : le[t]);
      else {
        var a = t.interval, o = t.step, u = (i ? ce[a] : le[a]).every(o);
        u != null && r.nice(u);
      }
    }
  }
}
function Cr(n, e) {
  "padding" in n && "padding" in e && typeof e.padding < "u" && n.padding(e.padding), "paddingInner" in n && "paddingInner" in e && typeof e.paddingInner < "u" && n.paddingInner(e.paddingInner), "paddingOuter" in n && "paddingOuter" in e && typeof e.paddingOuter < "u" && n.paddingOuter(e.paddingOuter);
}
function Rr(n, e) {
  if (e.reverse) {
    var t = n.range().slice().reverse();
    "padding" in n, n.range(t);
  }
}
function Sr(n, e) {
  "round" in e && typeof e.round < "u" && (e.round && "interpolate" in e && typeof e.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", e) : "round" in n ? n.round(e.round) : "interpolate" in n && e.round && n.interpolate(Ce));
}
function Er(n, e) {
  "unknown" in n && "unknown" in e && typeof e.unknown < "u" && n.unknown(e.unknown);
}
function Or(n, e) {
  if ("zero" in e && e.zero === !0) {
    var t = n.domain(), r = t[0], i = t[1], a = i < r, o = a ? [i, r] : [r, i], u = o[0], s = o[1], f = [Math.min(0, u), Math.max(0, s)];
    n.domain(a ? f.reverse() : f);
  }
}
var jr = [
  // domain => nice => zero
  "domain",
  "nice",
  "zero",
  // interpolate before round
  "interpolate",
  "round",
  // set range then reverse
  "range",
  "reverse",
  // Order does not matter for these operators
  "align",
  "base",
  "clamp",
  "constant",
  "exponent",
  "padding",
  "unknown"
], Tr = {
  domain: dr,
  nice: kr,
  zero: Or,
  interpolate: vr,
  round: Sr,
  align: gr,
  base: mr,
  clamp: xr,
  constant: br,
  exponent: yr,
  padding: Cr,
  range: pr,
  reverse: Rr,
  unknown: Er
};
function Ar() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var r = new Set(e), i = jr.filter(function(a) {
    return r.has(a);
  });
  return function(o, u) {
    return typeof u < "u" && i.forEach(function(s) {
      Tr[s](o, u);
    }), o;
  };
}
var Pr = Ar("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function Fr(n) {
  return Pr(Ae(), n);
}
const Br = vn.memo(({ label: n, value: e, options: t, fieldName: r, section: i = null, subsection: a = null, required: o = !1, updateField: u, initial: s, ...f }) => {
  let c = "";
  if (Array.isArray(t))
    c = t.map((l) => /* @__PURE__ */ $.createElement("option", { value: l, key: l }, l));
  else {
    c = [];
    for (const [l, d] of Object.entries(t))
      c.push(
        /* @__PURE__ */ $.createElement("option", { value: l, key: l }, d)
      );
  }
  return s && c.unshift(
    /* @__PURE__ */ $.createElement("option", { value: "", key: "initial" }, s)
  ), /* @__PURE__ */ $.createElement("label", { style: { width: "100%", display: "block" } }, n && /* @__PURE__ */ $.createElement("span", { className: "edit-label cove-input__label" }, n), /* @__PURE__ */ $.createElement(
    "select",
    {
      className: o && !e ? "warning" : "",
      name: r,
      value: e,
      onChange: (l) => {
        u(i, a, r, l.target.value);
      },
      ...f
    },
    c
  ));
}), Yr = (n) => /* @__PURE__ */ vn.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", ...n }, /* @__PURE__ */ vn.createElement("path", { d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" }));
export {
  qr as B,
  Dr as C,
  Qe as G,
  Br as I,
  Yr as S,
  Pn as a,
  Zt as b,
  Fr as c,
  dt as d,
  je as e,
  cn as f,
  de as g,
  pt as h,
  gt as i,
  Pe as j,
  Ie as k,
  Le as l,
  Qt as m,
  Ar as n,
  Dn as s,
  Jt as t
};
