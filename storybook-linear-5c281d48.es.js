import { P as M } from "./storybook-index-43433e35.es.js";
import { R as Ln } from "./storybook-index-f2fed736.es.js";
import { c as _n } from "./storybook-Tooltip-7cf39805.es.js";
function B(n, e) {
  return n == null || e == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function Dn(n, e) {
  return n == null || e == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Pn(n) {
  let e, r, t;
  n.length !== 2 ? (e = B, r = (o, s) => B(n(o), s), t = (o, s) => n(o) - s) : (e = n === B || n === Dn ? n : Gn, r = n, t = n);
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
  function f(o, s, u = 0, l = o.length) {
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
  function a(o, s, u = 0, l = o.length) {
    const c = i(o, s, u, l - 1);
    return c > u && t(o[c - 1], s) > -t(o[c], s) ? c - 1 : c;
  }
  return { left: i, center: a, right: f };
}
function Gn() {
  return 0;
}
function Bn(n) {
  return n === null ? NaN : +n;
}
function* Ze(n, e) {
  if (e === void 0)
    for (let r of n)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let t of n)
      (t = e(t, ++r, n)) != null && (t = +t) >= t && (yield t);
  }
}
const Vn = Pn(B), Xn = Vn.right;
Pn(Bn).center;
const Kn = Xn, Un = Math.sqrt(50), Wn = Math.sqrt(10), Yn = Math.sqrt(2);
function V(n, e, r) {
  const t = (e - n) / Math.max(0, r), i = Math.floor(Math.log10(t)), f = t / Math.pow(10, i), a = f >= Un ? 10 : f >= Wn ? 5 : f >= Yn ? 2 : 1;
  let o, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, o = Math.round(n * u), s = Math.round(e * u), o / u < n && ++o, s / u > e && --s, u = -u) : (u = Math.pow(10, i) * a, o = Math.round(n / u), s = Math.round(e / u), o * u < n && ++o, s * u > e && --s), s < o && 0.5 <= r && r < 2 ? V(n, e, r * 2) : [o, s, u];
}
function Zn(n, e, r) {
  if (e = +e, n = +n, r = +r, !(r > 0))
    return [];
  if (n === e)
    return [n];
  const t = e < n, [i, f, a] = t ? V(e, n, r) : V(n, e, r);
  if (!(f >= i))
    return [];
  const o = f - i + 1, s = new Array(o);
  if (t)
    if (a < 0)
      for (let u = 0; u < o; ++u)
        s[u] = (f - u) / -a;
    else
      for (let u = 0; u < o; ++u)
        s[u] = (f - u) * a;
  else if (a < 0)
    for (let u = 0; u < o; ++u)
      s[u] = (i + u) / -a;
  else
    for (let u = 0; u < o; ++u)
      s[u] = (i + u) * a;
  return s;
}
function en(n, e, r) {
  return e = +e, n = +n, r = +r, V(n, e, r)[2];
}
function Jn(n, e, r) {
  e = +e, n = +n, r = +r;
  const t = e < n, i = t ? en(e, n, r) : en(n, e, r);
  return (t ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Qn = ["top", "left", "transform", "className", "children", "innerRef"];
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
function ne(n, e) {
  if (n == null)
    return {};
  var r = {}, t = Object.keys(n), i, f;
  for (f = 0; f < t.length; f++)
    i = t[f], !(e.indexOf(i) >= 0) && (r[i] = n[i]);
  return r;
}
function ee(n) {
  var e = n.top, r = e === void 0 ? 0 : e, t = n.left, i = t === void 0 ? 0 : t, f = n.transform, a = n.className, o = n.children, s = n.innerRef, u = ne(n, Qn);
  return /* @__PURE__ */ Ln.createElement("g", rn({
    ref: s,
    className: _n("visx-group", a),
    transform: f || "translate(" + i + ", " + r + ")"
  }, u), o);
}
ee.propTypes = {
  top: M.number,
  left: M.number,
  transform: M.string,
  className: M.string,
  children: M.node,
  innerRef: M.oneOfType([M.string, M.func, M.object])
};
function re(n, e) {
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
function Sn(n, e) {
  var r = Object.create(n.prototype);
  for (var t in e)
    r[t] = e[t];
  return r;
}
function C() {
}
var z = 0.7, X = 1 / z, S = "\\s*([+-]?\\d+)\\s*", O = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", te = /^#([0-9a-f]{3,8})$/, ie = new RegExp(`^rgb\\(${S},${S},${S}\\)$`), ae = new RegExp(`^rgb\\(${y},${y},${y}\\)$`), fe = new RegExp(`^rgba\\(${S},${S},${S},${O}\\)$`), oe = new RegExp(`^rgba\\(${y},${y},${y},${O}\\)$`), ue = new RegExp(`^hsl\\(${O},${y},${y}\\)$`), se = new RegExp(`^hsla\\(${O},${y},${y},${O}\\)$`), gn = {
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
  hex: xn,
  // Deprecated! Use color.formatHex.
  formatHex: xn,
  formatHex8: ce,
  formatHsl: le,
  formatRgb: mn,
  toString: mn
});
function xn() {
  return this.rgb().formatHex();
}
function ce() {
  return this.rgb().formatHex8();
}
function le() {
  return Hn(this).formatHsl();
}
function mn() {
  return this.rgb().formatRgb();
}
function I(n) {
  var e, r;
  return n = (n + "").trim().toLowerCase(), (e = te.exec(n)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? pn(e) : r === 3 ? new g(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? _(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? _(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ie.exec(n)) ? new g(e[1], e[2], e[3], 1) : (e = ae.exec(n)) ? new g(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = fe.exec(n)) ? _(e[1], e[2], e[3], e[4]) : (e = oe.exec(n)) ? _(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ue.exec(n)) ? wn(e[1], e[2] / 100, e[3] / 100, 1) : (e = se.exec(n)) ? wn(e[1], e[2] / 100, e[3] / 100, e[4]) : gn.hasOwnProperty(n) ? pn(gn[n]) : n === "transparent" ? new g(NaN, NaN, NaN, 0) : null;
}
function pn(n) {
  return new g(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function _(n, e, r, t) {
  return t <= 0 && (n = e = r = NaN), new g(n, e, r, t);
}
function he(n) {
  return n instanceof C || (n = I(n)), n ? (n = n.rgb(), new g(n.r, n.g, n.b, n.opacity)) : new g();
}
function tn(n, e, r, t) {
  return arguments.length === 1 ? he(n) : new g(n, e, r, t ?? 1);
}
function g(n, e, r, t) {
  this.r = +n, this.g = +e, this.b = +r, this.opacity = +t;
}
on(g, tn, Sn(C, {
  brighter(n) {
    return n = n == null ? X : Math.pow(X, n), new g(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? z : Math.pow(z, n), new g(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new g(R(this.r), R(this.g), R(this.b), K(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bn,
  // Deprecated! Use color.formatHex.
  formatHex: bn,
  formatHex8: de,
  formatRgb: yn,
  toString: yn
}));
function bn() {
  return `#${k(this.r)}${k(this.g)}${k(this.b)}`;
}
function de() {
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
  var e = n.r / 255, r = n.g / 255, t = n.b / 255, i = Math.min(e, r, t), f = Math.max(e, r, t), a = NaN, o = f - i, s = (f + i) / 2;
  return o ? (e === f ? a = (r - t) / o + (r < t) * 6 : r === f ? a = (t - e) / o + 2 : a = (e - r) / o + 4, o /= s < 0.5 ? f + i : 2 - f - i, a *= 60) : o = s > 0 && s < 1 ? 0 : a, new p(a, o, s, n.opacity);
}
function ge(n, e, r, t) {
  return arguments.length === 1 ? Hn(n) : new p(n, e, r, t ?? 1);
}
function p(n, e, r, t) {
  this.h = +n, this.s = +e, this.l = +r, this.opacity = +t;
}
on(p, ge, Sn(C, {
  brighter(n) {
    return n = n == null ? X : Math.pow(X, n), new p(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? z : Math.pow(z, n), new p(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, e = isNaN(n) || isNaN(this.s) ? 0 : this.s, r = this.l, t = r + (r < 0.5 ? r : 1 - r) * e, i = 2 * r - t;
    return new g(
      Q(n >= 240 ? n - 240 : n + 120, i, t),
      Q(n, i, t),
      Q(n < 120 ? n + 240 : n - 120, i, t),
      this.opacity
    );
  },
  clamp() {
    return new p(Mn(this.h), D(this.s), D(this.l), K(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = K(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Mn(this.h)}, ${D(this.s) * 100}%, ${D(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Mn(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function D(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function Q(n, e, r) {
  return (n < 60 ? e + (r - e) * n / 60 : n < 180 ? r : n < 240 ? e + (r - e) * (240 - n) / 60 : e) * 255;
}
const Z = (n) => () => n;
function En(n, e) {
  return function(r) {
    return n + r * e;
  };
}
function xe(n, e, r) {
  return n = Math.pow(n, r), e = Math.pow(e, r) - n, r = 1 / r, function(t) {
    return Math.pow(n + t * e, r);
  };
}
function Je(n, e) {
  var r = e - n;
  return r ? En(n, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Z(isNaN(n) ? e : n);
}
function me(n) {
  return (n = +n) == 1 ? qn : function(e, r) {
    return r - e ? xe(e, r, n) : Z(isNaN(e) ? r : e);
  };
}
function qn(n, e) {
  var r = e - n;
  return r ? En(n, r) : Z(isNaN(n) ? e : n);
}
const Nn = function n(e) {
  var r = me(e);
  function t(i, f) {
    var a = r((i = tn(i)).r, (f = tn(f)).r), o = r(i.g, f.g), s = r(i.b, f.b), u = qn(i.opacity, f.opacity);
    return function(l) {
      return i.r = a(l), i.g = o(l), i.b = s(l), i.opacity = u(l), i + "";
    };
  }
  return t.gamma = n, t;
}(1);
function pe(n, e) {
  e || (e = []);
  var r = n ? Math.min(e.length, n.length) : 0, t = e.slice(), i;
  return function(f) {
    for (i = 0; i < r; ++i)
      t[i] = n[i] * (1 - f) + e[i] * f;
    return t;
  };
}
function be(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function ye(n, e) {
  var r = e ? e.length : 0, t = n ? Math.min(r, n.length) : 0, i = new Array(t), f = new Array(r), a;
  for (a = 0; a < t; ++a)
    i[a] = un(n[a], e[a]);
  for (; a < r; ++a)
    f[a] = e[a];
  return function(o) {
    for (a = 0; a < t; ++a)
      f[a] = i[a](o);
    return f;
  };
}
function we(n, e) {
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
function Me(n, e) {
  var r = {}, t = {}, i;
  (n === null || typeof n != "object") && (n = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in n ? r[i] = un(n[i], e[i]) : t[i] = e[i];
  return function(f) {
    for (i in r)
      t[i] = r[i](f);
    return t;
  };
}
var an = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nn = new RegExp(an.source, "g");
function Ne(n) {
  return function() {
    return n;
  };
}
function $e(n) {
  return function(e) {
    return n(e) + "";
  };
}
function ve(n, e) {
  var r = an.lastIndex = nn.lastIndex = 0, t, i, f, a = -1, o = [], s = [];
  for (n = n + "", e = e + ""; (t = an.exec(n)) && (i = nn.exec(e)); )
    (f = i.index) > r && (f = e.slice(r, f), o[a] ? o[a] += f : o[++a] = f), (t = t[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, s.push({ i: a, x: U(t, i) })), r = nn.lastIndex;
  return r < e.length && (f = e.slice(r), o[a] ? o[a] += f : o[++a] = f), o.length < 2 ? s[0] ? $e(s[0].x) : Ne(e) : (e = s.length, function(u) {
    for (var l = 0, c; l < e; ++l)
      o[(c = s[l]).i] = c.x(u);
    return o.join("");
  });
}
function un(n, e) {
  var r = typeof e, t;
  return e == null || r === "boolean" ? Z(e) : (r === "number" ? U : r === "string" ? (t = I(e)) ? (e = t, Nn) : ve : e instanceof I ? Nn : e instanceof Date ? we : be(e) ? pe : Array.isArray(e) ? ye : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Me : U)(n, e);
}
function ke(n, e) {
  return n = +n, e = +e, function(r) {
    return Math.round(n * (1 - r) + e * r);
  };
}
function Re(n) {
  return function() {
    return n;
  };
}
function Ae(n) {
  return +n;
}
var $n = [0, 1];
function P(n) {
  return n;
}
function fn(n, e) {
  return (e -= n = +n) ? function(r) {
    return (r - n) / e;
  } : Re(isNaN(e) ? NaN : 0.5);
}
function je(n, e) {
  var r;
  return n > e && (r = n, n = e, e = r), function(t) {
    return Math.max(n, Math.min(e, t));
  };
}
function Pe(n, e, r) {
  var t = n[0], i = n[1], f = e[0], a = e[1];
  return i < t ? (t = fn(i, t), f = r(a, f)) : (t = fn(t, i), f = r(f, a)), function(o) {
    return f(t(o));
  };
}
function Se(n, e, r) {
  var t = Math.min(n.length, e.length) - 1, i = new Array(t), f = new Array(t), a = -1;
  for (n[t] < n[0] && (n = n.slice().reverse(), e = e.slice().reverse()); ++a < t; )
    i[a] = fn(n[a], n[a + 1]), f[a] = r(e[a], e[a + 1]);
  return function(o) {
    var s = Kn(n, o, 1, t) - 1;
    return f[s](i[s](o));
  };
}
function He(n, e) {
  return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function Ee() {
  var n = $n, e = $n, r = un, t, i, f, a = P, o, s, u;
  function l() {
    var d = Math.min(n.length, e.length);
    return a !== P && (a = je(n[0], n[d - 1])), o = d > 2 ? Se : Pe, s = u = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? f : (s || (s = o(n.map(t), e, r)))(t(a(d)));
  }
  return c.invert = function(d) {
    return a(i((u || (u = o(e, n.map(t), U)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (n = Array.from(d, Ae), l()) : n.slice();
  }, c.range = function(d) {
    return arguments.length ? (e = Array.from(d), l()) : e.slice();
  }, c.rangeRound = function(d) {
    return e = Array.from(d), r = ke, l();
  }, c.clamp = function(d) {
    return arguments.length ? (a = d ? !0 : P, l()) : a !== P;
  }, c.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, c.unknown = function(d) {
    return arguments.length ? (f = d, c) : f;
  }, function(d, N) {
    return t = d, i = N, l();
  };
}
function qe() {
  return Ee()(P, P);
}
function ze(n) {
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
function H(n) {
  return n = W(Math.abs(n)), n ? n[1] : NaN;
}
function Oe(n, e) {
  return function(r, t) {
    for (var i = r.length, f = [], a = 0, o = n[0], s = 0; i > 0 && o > 0 && (s + o + 1 > t && (o = Math.max(1, t - s)), f.push(r.substring(i -= o, i + o)), !((s += o + 1) > t)); )
      o = n[a = (a + 1) % n.length];
    return f.reverse().join(e);
  };
}
function Ie(n) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r) {
      return n[+r];
    });
  };
}
var Ce = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Y(n) {
  if (!(e = Ce.exec(n)))
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
function Te(n) {
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
function Fe(n, e) {
  var r = W(n, e);
  if (!r)
    return n + "";
  var t = r[0], i = r[1], f = i - (zn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = t.length;
  return f === a ? t : f > a ? t + new Array(f - a + 1).join("0") : f > 0 ? t.slice(0, f) + "." + t.slice(f) : "0." + new Array(1 - f).join("0") + W(n, Math.max(0, e + f - 1))[0];
}
function vn(n, e) {
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
  d: ze,
  e: (n, e) => n.toExponential(e),
  f: (n, e) => n.toFixed(e),
  g: (n, e) => n.toPrecision(e),
  o: (n) => Math.round(n).toString(8),
  p: (n, e) => vn(n * 100, e),
  r: vn,
  s: Fe,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function Rn(n) {
  return n;
}
var An = Array.prototype.map, jn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Le(n) {
  var e = n.grouping === void 0 || n.thousands === void 0 ? Rn : Oe(An.call(n.grouping, Number), n.thousands + ""), r = n.currency === void 0 ? "" : n.currency[0] + "", t = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", f = n.numerals === void 0 ? Rn : Ie(An.call(n.numerals, String)), a = n.percent === void 0 ? "%" : n.percent + "", o = n.minus === void 0 ? "−" : n.minus + "", s = n.nan === void 0 ? "NaN" : n.nan + "";
  function u(c) {
    c = Y(c);
    var d = c.fill, N = c.align, b = c.sign, E = c.symbol, A = c.zero, q = c.width, J = c.comma, $ = c.precision, cn = c.trim, x = c.type;
    x === "n" ? (J = !0, x = "g") : kn[x] || ($ === void 0 && ($ = 12), cn = !0, x = "g"), (A || d === "0" && N === "=") && (A = !0, d = "0", N = "=");
    var Cn = E === "$" ? r : E === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", Tn = E === "$" ? t : /[%p]/.test(x) ? a : "", ln = kn[x], Fn = /[defgprs%]/.test(x);
    $ = $ === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function hn(h) {
      var v = Cn, m = Tn, j, dn, T;
      if (x === "c")
        m = ln(h) + m, h = "";
      else {
        h = +h;
        var F = h < 0 || 1 / h < 0;
        if (h = isNaN(h) ? s : ln(Math.abs(h), $), cn && (h = Te(h)), F && +h == 0 && b !== "+" && (F = !1), v = (F ? b === "(" ? b : o : b === "-" || b === "(" ? "" : b) + v, m = (x === "s" ? jn[8 + zn / 3] : "") + m + (F && b === "(" ? ")" : ""), Fn) {
          for (j = -1, dn = h.length; ++j < dn; )
            if (T = h.charCodeAt(j), 48 > T || T > 57) {
              m = (T === 46 ? i + h.slice(j + 1) : h.slice(j)) + m, h = h.slice(0, j);
              break;
            }
        }
      }
      J && !A && (h = e(h, 1 / 0));
      var L = v.length + h.length + m.length, w = L < q ? new Array(q - L + 1).join(d) : "";
      switch (J && A && (h = e(w + h, w.length ? q - m.length : 1 / 0), w = ""), N) {
        case "<":
          h = v + h + m + w;
          break;
        case "=":
          h = v + w + h + m;
          break;
        case "^":
          h = w.slice(0, L = w.length >> 1) + v + h + m + w.slice(L);
          break;
        default:
          h = w + v + h + m;
          break;
      }
      return f(h);
    }
    return hn.toString = function() {
      return c + "";
    }, hn;
  }
  function l(c, d) {
    var N = u((c = Y(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(H(d) / 3))) * 3, E = Math.pow(10, -b), A = jn[8 + b / 3];
    return function(q) {
      return N(E * q) + A;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var G, On, In;
_e({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function _e(n) {
  return G = Le(n), On = G.format, In = G.formatPrefix, G;
}
function De(n) {
  return Math.max(0, -H(Math.abs(n)));
}
function Ge(n, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(H(e) / 3))) * 3 - H(Math.abs(n)));
}
function Be(n, e) {
  return n = Math.abs(n), e = Math.abs(e) - n, Math.max(0, H(e) - H(n)) + 1;
}
function Ve(n, e, r, t) {
  var i = Jn(n, e, r), f;
  switch (t = Y(t ?? ",f"), t.type) {
    case "s": {
      var a = Math.max(Math.abs(n), Math.abs(e));
      return t.precision == null && !isNaN(f = Ge(i, a)) && (t.precision = f), In(t, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      t.precision == null && !isNaN(f = Be(i, Math.max(Math.abs(n), Math.abs(e)))) && (t.precision = f - (t.type === "e"));
      break;
    }
    case "f":
    case "%": {
      t.precision == null && !isNaN(f = De(i)) && (t.precision = f - (t.type === "%") * 2);
      break;
    }
  }
  return On(t);
}
function Xe(n) {
  var e = n.domain;
  return n.ticks = function(r) {
    var t = e();
    return Zn(t[0], t[t.length - 1], r ?? 10);
  }, n.tickFormat = function(r, t) {
    var i = e();
    return Ve(i[0], i[i.length - 1], r ?? 10, t);
  }, n.nice = function(r) {
    r == null && (r = 10);
    var t = e(), i = 0, f = t.length - 1, a = t[i], o = t[f], s, u, l = 10;
    for (o < a && (u = a, a = o, o = u, u = i, i = f, f = u); l-- > 0; ) {
      if (u = en(a, o, r), u === s)
        return t[i] = a, t[f] = o, e(t);
      if (u > 0)
        a = Math.floor(a / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, o = Math.floor(o * u) / u;
      else
        break;
      s = u;
    }
    return n;
  }, n;
}
function Ke() {
  var n = qe();
  return n.copy = function() {
    return He(n, Ke());
  }, re.apply(n, arguments), Xe(n);
}
export {
  qe as A,
  un as B,
  C,
  ee as G,
  g as R,
  z as a,
  X as b,
  Je as c,
  on as d,
  Sn as e,
  ke as f,
  B as g,
  ge as h,
  Nn as i,
  Ze as j,
  Bn as k,
  Ke as l,
  U as m,
  qn as n,
  I as o,
  ve as p,
  re as q,
  he as r,
  Kn as s,
  Pn as t,
  Jn as u,
  Ee as v,
  He as w,
  Zn as x,
  Y as y,
  On as z
};
