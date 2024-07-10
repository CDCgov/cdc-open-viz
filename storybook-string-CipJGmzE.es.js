function q(e, r, t) {
  e.prototype = r.prototype = t, t.constructor = e;
}
function G(e, r) {
  var t = Object.create(e.prototype);
  for (var n in r) t[n] = r[n];
  return t;
}
function m() {
}
var b = 0.7, $ = 1 / b, g = "\\s*([+-]?\\d+)\\s*", p = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", J = /^#([0-9a-f]{3,8})$/, K = new RegExp(`^rgb\\(${g},${g},${g}\\)$`), Q = new RegExp(`^rgb\\(${c},${c},${c}\\)$`), T = new RegExp(`^rgba\\(${g},${g},${g},${p}\\)$`), U = new RegExp(`^rgba\\(${c},${c},${c},${p}\\)$`), V = new RegExp(`^hsl\\(${p},${c},${c}\\)$`), W = new RegExp(`^hsla\\(${p},${c},${c},${p}\\)$`), P = {
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
q(m, E, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: j,
  // Deprecated! Use color.formatHex.
  formatHex: j,
  formatHex8: X,
  formatHsl: Y,
  formatRgb: C,
  toString: C
});
function j() {
  return this.rgb().formatHex();
}
function X() {
  return this.rgb().formatHex8();
}
function Y() {
  return L(this).formatHsl();
}
function C() {
  return this.rgb().formatRgb();
}
function E(e) {
  var r, t;
  return e = (e + "").trim().toLowerCase(), (r = J.exec(e)) ? (t = r[1].length, r = parseInt(r[1], 16), t === 6 ? S(r) : t === 3 ? new s(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : t === 8 ? w(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : t === 4 ? w(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = K.exec(e)) ? new s(r[1], r[2], r[3], 1) : (r = Q.exec(e)) ? new s(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = T.exec(e)) ? w(r[1], r[2], r[3], r[4]) : (r = U.exec(e)) ? w(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = V.exec(e)) ? A(r[1], r[2] / 100, r[3] / 100, 1) : (r = W.exec(e)) ? A(r[1], r[2] / 100, r[3] / 100, r[4]) : P.hasOwnProperty(e) ? S(P[e]) : e === "transparent" ? new s(NaN, NaN, NaN, 0) : null;
}
function S(e) {
  return new s(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function w(e, r, t, n) {
  return n <= 0 && (e = r = t = NaN), new s(e, r, t, n);
}
function Z(e) {
  return e instanceof m || (e = E(e)), e ? (e = e.rgb(), new s(e.r, e.g, e.b, e.opacity)) : new s();
}
function H(e, r, t, n) {
  return arguments.length === 1 ? Z(e) : new s(e, r, t, n ?? 1);
}
function s(e, r, t, n) {
  this.r = +e, this.g = +r, this.b = +t, this.opacity = +n;
}
q(s, H, G(m, {
  brighter(e) {
    return e = e == null ? $ : Math.pow($, e), new s(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new s(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new s(d(this.r), d(this.g), d(this.b), N(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: O,
  // Deprecated! Use color.formatHex.
  formatHex: O,
  formatHex8: ee,
  formatRgb: z,
  toString: z
}));
function O() {
  return `#${h(this.r)}${h(this.g)}${h(this.b)}`;
}
function ee() {
  return `#${h(this.r)}${h(this.g)}${h(this.b)}${h((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function z() {
  const e = N(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${d(this.r)}, ${d(this.g)}, ${d(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function N(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function d(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function h(e) {
  return e = d(e), (e < 16 ? "0" : "") + e.toString(16);
}
function A(e, r, t, n) {
  return n <= 0 ? e = r = t = NaN : t <= 0 || t >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new o(e, r, t, n);
}
function L(e) {
  if (e instanceof o) return new o(e.h, e.s, e.l, e.opacity);
  if (e instanceof m || (e = E(e)), !e) return new o();
  if (e instanceof o) return e;
  e = e.rgb();
  var r = e.r / 255, t = e.g / 255, n = e.b / 255, f = Math.min(r, t, n), a = Math.max(r, t, n), x = NaN, i = a - f, l = (a + f) / 2;
  return i ? (r === a ? x = (t - n) / i + (t < n) * 6 : t === a ? x = (n - r) / i + 2 : x = (r - t) / i + 4, i /= l < 0.5 ? a + f : 2 - a - f, x *= 60) : i = l > 0 && l < 1 ? 0 : x, new o(x, i, l, e.opacity);
}
function re(e, r, t, n) {
  return arguments.length === 1 ? L(e) : new o(e, r, t, n ?? 1);
}
function o(e, r, t, n) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +n;
}
q(o, re, G(m, {
  brighter(e) {
    return e = e == null ? $ : Math.pow($, e), new o(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? b : Math.pow(b, e), new o(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, n = t + (t < 0.5 ? t : 1 - t) * r, f = 2 * t - n;
    return new s(
      k(e >= 240 ? e - 240 : e + 120, f, n),
      k(e, f, n),
      k(e < 120 ? e + 240 : e - 120, f, n),
      this.opacity
    );
  },
  clamp() {
    return new o(B(this.h), y(this.s), y(this.l), N(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = N(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${B(this.h)}, ${y(this.s) * 100}%, ${y(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function B(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function y(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function k(e, r, t) {
  return (e < 60 ? r + (t - r) * e / 60 : e < 180 ? t : e < 240 ? r + (t - r) * (240 - e) / 60 : r) * 255;
}
const I = (e) => () => e;
function D(e, r) {
  return function(t) {
    return e + t * r;
  };
}
function te(e, r, t) {
  return e = Math.pow(e, t), r = Math.pow(r, t) - e, t = 1 / t, function(n) {
    return Math.pow(e + n * r, t);
  };
}
function xe(e, r) {
  var t = r - e;
  return t ? D(e, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : I(isNaN(e) ? r : e);
}
function ne(e) {
  return (e = +e) == 1 ? F : function(r, t) {
    return t - r ? te(r, t, e) : I(isNaN(r) ? t : r);
  };
}
function F(e, r) {
  var t = r - e;
  return t ? D(e, t) : I(isNaN(e) ? r : e);
}
const se = function e(r) {
  var t = ne(r);
  function n(f, a) {
    var x = t((f = H(f)).r, (a = H(a)).r), i = t(f.g, a.g), l = t(f.b, a.b), v = F(f.opacity, a.opacity);
    return function(u) {
      return f.r = x(u), f.g = i(u), f.b = l(u), f.opacity = v(u), f + "";
    };
  }
  return n.gamma = e, n;
}(1);
function fe(e, r) {
  return e = +e, r = +r, function(t) {
    return e * (1 - t) + r * t;
  };
}
var M = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, R = new RegExp(M.source, "g");
function ie(e) {
  return function() {
    return e;
  };
}
function ae(e) {
  return function(r) {
    return e(r) + "";
  };
}
function le(e, r) {
  var t = M.lastIndex = R.lastIndex = 0, n, f, a, x = -1, i = [], l = [];
  for (e = e + "", r = r + ""; (n = M.exec(e)) && (f = R.exec(r)); )
    (a = f.index) > t && (a = r.slice(t, a), i[x] ? i[x] += a : i[++x] = a), (n = n[0]) === (f = f[0]) ? i[x] ? i[x] += f : i[++x] = f : (i[++x] = null, l.push({ i: x, x: fe(n, f) })), t = R.lastIndex;
  return t < r.length && (a = r.slice(t), i[x] ? i[x] += a : i[++x] = a), i.length < 2 ? l[0] ? ae(l[0].x) : ie(r) : (r = l.length, function(v) {
    for (var u = 0, _; u < r; ++u) i[(_ = l[u]).i] = _.x(v);
    return i.join("");
  });
}
export {
  m as C,
  s as R,
  b as a,
  $ as b,
  xe as c,
  q as d,
  G as e,
  I as f,
  fe as g,
  re as h,
  se as i,
  E as j,
  le as k,
  F as n,
  Z as r
};
