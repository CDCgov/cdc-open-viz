import { R as r, r as w } from "./storybook-e61d95ab.es.js";
import { E as Mn, L as ra, H as Ee } from "./storybook-e806525d.es.js";
import { f as ia, i as la, g as oa } from "./storybook-46f8780f.es.js";
import { c as sa, p as ca, u as ua } from "./storybook-ae809cc1.es.js";
import { A as ke } from "./storybook-7101b92a.es.js";
import { B as ma } from "./storybook-515527e1.es.js";
import { I as tt } from "./storybook-a729838e.es.js";
import { T as Z } from "./storybook-46a89ba7.es.js";
import { I as j } from "./storybook-aa0a1b09.es.js";
import { P as F } from "./storybook-329ae7fd.es.js";
import { g as fa } from "./storybook-c5d32002.es.js";
import { t as fe, d as Ye, a as _e, b as Ge, c as da, e as ha, f as pa, u as ga, g as va, h as ba } from "./storybook-cb7bc8c6.es.js";
var Sn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = [], i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        if (l) {
          var o = typeof l;
          if (o === "string" || o === "number")
            a.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var s = n.apply(null, l);
              s && a.push(s);
            }
          } else if (o === "object") {
            if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]")) {
              a.push(l.toString());
              continue;
            }
            for (var c in l)
              t.call(l, c) && l[c] && a.push(c);
          }
        }
      }
      return a.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Sn);
var xa = Sn.exports;
const Tt = /* @__PURE__ */ fa(xa);
var ya = ["top", "left", "transform", "className", "children", "innerRef"];
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
function Na(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ct(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, l = e.transform, o = e.className, s = e.children, c = e.innerRef, u = Na(e, ya);
  return /* @__PURE__ */ r.createElement("g", st({
    ref: c,
    className: Tt("visx-group", o),
    transform: l || "translate(" + i + ", " + n + ")"
  }, u), s);
}
ct.propTypes = {
  top: F.number,
  left: F.number,
  transform: F.string,
  className: F.string,
  children: F.node,
  innerRef: F.oneOfType([F.string, F.func, F.object])
};
var wa = ["className", "innerRef"];
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
function Ea(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ft(e) {
  var t = e.className, n = e.innerRef, a = Ea(e, wa);
  return /* @__PURE__ */ r.createElement("rect", ut({
    ref: n,
    className: Tt("visx-bar", t)
  }, a));
}
var Ca = ["className", "innerRef"];
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mt.apply(this, arguments);
}
function _a(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ma(e) {
  var t = e.className, n = e.innerRef, a = _a(e, Ca);
  return /* @__PURE__ */ r.createElement("circle", mt({
    ref: n,
    className: Tt("visx-circle", t)
  }, a));
}
function He(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Sa(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Tn(e) {
  let t, n, a;
  e.length !== 2 ? (t = He, n = (s, c) => He(e(s), c), a = (s, c) => e(s) - c) : (t = e === He || e === Sa ? e : Ta, n = e, a = e);
  function i(s, c, u = 0, p = s.length) {
    if (u < p) {
      if (t(c, c) !== 0)
        return p;
      do {
        const f = u + p >>> 1;
        n(s[f], c) < 0 ? u = f + 1 : p = f;
      } while (u < p);
    }
    return u;
  }
  function l(s, c, u = 0, p = s.length) {
    if (u < p) {
      if (t(c, c) !== 0)
        return p;
      do {
        const f = u + p >>> 1;
        n(s[f], c) <= 0 ? u = f + 1 : p = f;
      } while (u < p);
    }
    return u;
  }
  function o(s, c, u = 0, p = s.length) {
    const f = i(s, c, u, p - 1);
    return f > u && a(s[f - 1], c) > -a(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: l };
}
function Ta() {
  return 0;
}
function Da(e) {
  return e === null ? NaN : +e;
}
const Aa = Tn(He), Oa = Aa.right;
Tn(Da).center;
const ka = Oa, Ra = Math.sqrt(50), za = Math.sqrt(10), $a = Math.sqrt(2);
function Be(e, t, n) {
  const a = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(a)), l = a / Math.pow(10, i), o = l >= Ra ? 10 : l >= za ? 5 : l >= $a ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= n && n < 2 ? Be(e, t, n * 2) : [s, c, u];
}
function Fa(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const a = t < e, [i, l, o] = a ? Be(t, e, n) : Be(e, t, n);
  if (!(l >= i))
    return [];
  const s = l - i + 1, c = new Array(s);
  if (a)
    if (o < 0)
      for (let u = 0; u < s; ++u)
        c[u] = (l - u) / -o;
    else
      for (let u = 0; u < s; ++u)
        c[u] = (l - u) * o;
  else if (o < 0)
    for (let u = 0; u < s; ++u)
      c[u] = (i + u) / -o;
  else
    for (let u = 0; u < s; ++u)
      c[u] = (i + u) * o;
  return c;
}
function ft(e, t, n) {
  return t = +t, e = +e, n = +n, Be(e, t, n)[2];
}
function Pa(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, i = a ? ft(t, e, n) : ft(e, t, n);
  return (a ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ia(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function ye(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function De(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t)
    n[a] = t[a];
  return n;
}
function ae() {
}
var me = 0.7, be = 1 / me, ge = "\\s*([+-]?\\d+)\\s*", Me = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ja = /^#([0-9a-f]{3,8})$/, La = new RegExp(`^rgb\\(${ge},${ge},${ge}\\)$`), Wa = new RegExp(`^rgb\\(${V},${V},${V}\\)$`), Ua = new RegExp(`^rgba\\(${ge},${ge},${ge},${Me}\\)$`), Ha = new RegExp(`^rgba\\(${V},${V},${V},${Me}\\)$`), Ya = new RegExp(`^hsl\\(${Me},${V},${V}\\)$`), Ga = new RegExp(`^hsla\\(${Me},${V},${V},${Me}\\)$`), Pt = {
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
ye(ae, Se, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: It,
  // Deprecated! Use color.formatHex.
  formatHex: It,
  formatHex8: Ba,
  formatHsl: qa,
  formatRgb: jt,
  toString: jt
});
function It() {
  return this.rgb().formatHex();
}
function Ba() {
  return this.rgb().formatHex8();
}
function qa() {
  return Dn(this).formatHsl();
}
function jt() {
  return this.rgb().formatRgb();
}
function Se(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ja.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Lt(t) : n === 3 ? new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Re(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Re(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = La.exec(e)) ? new O(t[1], t[2], t[3], 1) : (t = Wa.exec(e)) ? new O(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ua.exec(e)) ? Re(t[1], t[2], t[3], t[4]) : (t = Ha.exec(e)) ? Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ya.exec(e)) ? Ht(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ga.exec(e)) ? Ht(t[1], t[2] / 100, t[3] / 100, t[4]) : Pt.hasOwnProperty(e) ? Lt(Pt[e]) : e === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Lt(e) {
  return new O(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Re(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new O(e, t, n, a);
}
function Dt(e) {
  return e instanceof ae || (e = Se(e)), e ? (e = e.rgb(), new O(e.r, e.g, e.b, e.opacity)) : new O();
}
function dt(e, t, n, a) {
  return arguments.length === 1 ? Dt(e) : new O(e, t, n, a ?? 1);
}
function O(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
ye(O, dt, De(ae, {
  brighter(e) {
    return e = e == null ? be : Math.pow(be, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ce(this.r), ce(this.g), ce(this.b), qe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wt,
  // Deprecated! Use color.formatHex.
  formatHex: Wt,
  formatHex8: Va,
  formatRgb: Ut,
  toString: Ut
}));
function Wt() {
  return `#${se(this.r)}${se(this.g)}${se(this.b)}`;
}
function Va() {
  return `#${se(this.r)}${se(this.g)}${se(this.b)}${se((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ut() {
  const e = qe(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ce(this.r)}, ${ce(this.g)}, ${ce(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function qe(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ce(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function se(e) {
  return e = ce(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ht(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new G(e, t, n, a);
}
function Dn(e) {
  if (e instanceof G)
    return new G(e.h, e.s, e.l, e.opacity);
  if (e instanceof ae || (e = Se(e)), !e)
    return new G();
  if (e instanceof G)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, i = Math.min(t, n, a), l = Math.max(t, n, a), o = NaN, s = l - i, c = (l + i) / 2;
  return s ? (t === l ? o = (n - a) / s + (n < a) * 6 : n === l ? o = (a - t) / s + 2 : o = (t - n) / s + 4, s /= c < 0.5 ? l + i : 2 - l - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new G(o, s, c, e.opacity);
}
function ht(e, t, n, a) {
  return arguments.length === 1 ? Dn(e) : new G(e, t, n, a ?? 1);
}
function G(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
ye(G, ht, De(ae, {
  brighter(e) {
    return e = e == null ? be : Math.pow(be, e), new G(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new G(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - a;
    return new O(
      nt(e >= 240 ? e - 240 : e + 120, i, a),
      nt(e, i, a),
      nt(e < 120 ? e + 240 : e - 120, i, a),
      this.opacity
    );
  },
  clamp() {
    return new G(Yt(this.h), ze(this.s), ze(this.l), qe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = qe(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Yt(this.h)}, ${ze(this.s) * 100}%, ${ze(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Yt(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ze(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function nt(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const An = Math.PI / 180, On = 180 / Math.PI, Ve = 18, kn = 0.96422, Rn = 1, zn = 0.82521, $n = 4 / 29, ve = 6 / 29, Fn = 3 * ve * ve, Xa = ve * ve * ve;
function Pn(e) {
  if (e instanceof X)
    return new X(e.l, e.a, e.b, e.opacity);
  if (e instanceof ee)
    return In(e);
  e instanceof O || (e = Dt(e));
  var t = lt(e.r), n = lt(e.g), a = lt(e.b), i = at((0.2225045 * t + 0.7168786 * n + 0.0606169 * a) / Rn), l, o;
  return t === n && n === a ? l = o = i : (l = at((0.4360747 * t + 0.3850649 * n + 0.1430804 * a) / kn), o = at((0.0139322 * t + 0.0971045 * n + 0.7141733 * a) / zn)), new X(116 * i - 16, 500 * (l - i), 200 * (i - o), e.opacity);
}
function pt(e, t, n, a) {
  return arguments.length === 1 ? Pn(e) : new X(e, t, n, a ?? 1);
}
function X(e, t, n, a) {
  this.l = +e, this.a = +t, this.b = +n, this.opacity = +a;
}
ye(X, pt, De(ae, {
  brighter(e) {
    return new X(this.l + Ve * (e ?? 1), this.a, this.b, this.opacity);
  },
  darker(e) {
    return new X(this.l - Ve * (e ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
    return t = kn * rt(t), e = Rn * rt(e), n = zn * rt(n), new O(
      it(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
      it(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
      it(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
      this.opacity
    );
  }
}));
function at(e) {
  return e > Xa ? Math.pow(e, 1 / 3) : e / Fn + $n;
}
function rt(e) {
  return e > ve ? e * e * e : Fn * (e - $n);
}
function it(e) {
  return 255 * (e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
}
function lt(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Qa(e) {
  if (e instanceof ee)
    return new ee(e.h, e.c, e.l, e.opacity);
  if (e instanceof X || (e = Pn(e)), e.a === 0 && e.b === 0)
    return new ee(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * On;
  return new ee(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function gt(e, t, n, a) {
  return arguments.length === 1 ? Qa(e) : new ee(e, t, n, a ?? 1);
}
function ee(e, t, n, a) {
  this.h = +e, this.c = +t, this.l = +n, this.opacity = +a;
}
function In(e) {
  if (isNaN(e.h))
    return new X(e.l, 0, 0, e.opacity);
  var t = e.h * An;
  return new X(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
ye(ee, gt, De(ae, {
  brighter(e) {
    return new ee(this.h, this.c, this.l + Ve * (e ?? 1), this.opacity);
  },
  darker(e) {
    return new ee(this.h, this.c, this.l - Ve * (e ?? 1), this.opacity);
  },
  rgb() {
    return In(this).rgb();
  }
}));
var jn = -0.14861, At = 1.78277, Ot = -0.29227, Ze = -0.90649, Te = 1.97294, Gt = Te * Ze, Bt = Te * At, qt = At * Ot - Ze * jn;
function Ja(e) {
  if (e instanceof ue)
    return new ue(e.h, e.s, e.l, e.opacity);
  e instanceof O || (e = Dt(e));
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, i = (qt * a + Gt * t - Bt * n) / (qt + Gt - Bt), l = a - i, o = (Te * (n - i) - Ot * l) / Ze, s = Math.sqrt(o * o + l * l) / (Te * i * (1 - i)), c = s ? Math.atan2(o, l) * On - 120 : NaN;
  return new ue(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function vt(e, t, n, a) {
  return arguments.length === 1 ? Ja(e) : new ue(e, t, n, a ?? 1);
}
function ue(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
ye(ue, vt, De(ae, {
  brighter(e) {
    return e = e == null ? be : Math.pow(be, e), new ue(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new ue(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * An, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), a = Math.cos(e), i = Math.sin(e);
    return new O(
      255 * (t + n * (jn * a + At * i)),
      255 * (t + n * (Ot * a + Ze * i)),
      255 * (t + n * (Te * a)),
      this.opacity
    );
  }
}));
const Ke = (e) => () => e;
function Ln(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Za(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function kt(e, t) {
  var n = t - e;
  return n ? Ln(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Ke(isNaN(e) ? t : e);
}
function Ka(e) {
  return (e = +e) == 1 ? k : function(t, n) {
    return n - t ? Za(t, n, e) : Ke(isNaN(t) ? n : t);
  };
}
function k(e, t) {
  var n = t - e;
  return n ? Ln(e, n) : Ke(isNaN(e) ? t : e);
}
const bt = function e(t) {
  var n = Ka(t);
  function a(i, l) {
    var o = n((i = dt(i)).r, (l = dt(l)).r), s = n(i.g, l.g), c = n(i.b, l.b), u = k(i.opacity, l.opacity);
    return function(p) {
      return i.r = o(p), i.g = s(p), i.b = c(p), i.opacity = u(p), i + "";
    };
  }
  return a.gamma = e, a;
}(1);
function er(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), i;
  return function(l) {
    for (i = 0; i < n; ++i)
      a[i] = e[i] * (1 - l) + t[i] * l;
    return a;
  };
}
function tr(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function nr(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, i = new Array(a), l = new Array(n), o;
  for (o = 0; o < a; ++o)
    i[o] = Rt(e[o], t[o]);
  for (; o < n; ++o)
    l[o] = t[o];
  return function(s) {
    for (o = 0; o < a; ++o)
      l[o] = i[o](s);
    return l;
  };
}
function ar(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Xe(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function rr(e, t) {
  var n = {}, a = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Rt(e[i], t[i]) : a[i] = t[i];
  return function(l) {
    for (i in n)
      a[i] = n[i](l);
    return a;
  };
}
var xt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ot = new RegExp(xt.source, "g");
function ir(e) {
  return function() {
    return e;
  };
}
function lr(e) {
  return function(t) {
    return e(t) + "";
  };
}
function or(e, t) {
  var n = xt.lastIndex = ot.lastIndex = 0, a, i, l, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (a = xt.exec(e)) && (i = ot.exec(t)); )
    (l = i.index) > n && (l = t.slice(n, l), s[o] ? s[o] += l : s[++o] = l), (a = a[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Xe(a, i) })), n = ot.lastIndex;
  return n < t.length && (l = t.slice(n), s[o] ? s[o] += l : s[++o] = l), s.length < 2 ? c[0] ? lr(c[0].x) : ir(t) : (t = c.length, function(u) {
    for (var p = 0, f; p < t; ++p)
      s[(f = c[p]).i] = f.x(u);
    return s.join("");
  });
}
function Rt(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Ke(t) : (n === "number" ? Xe : n === "string" ? (a = Se(t)) ? (t = a, bt) : or : t instanceof Se ? bt : t instanceof Date ? ar : tr(t) ? er : Array.isArray(t) ? nr : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? rr : Xe)(e, t);
}
function Wn(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Un(e) {
  return function(t, n) {
    var a = e((t = ht(t)).h, (n = ht(n)).h), i = k(t.s, n.s), l = k(t.l, n.l), o = k(t.opacity, n.opacity);
    return function(s) {
      return t.h = a(s), t.s = i(s), t.l = l(s), t.opacity = o(s), t + "";
    };
  };
}
const sr = Un(kt);
var cr = Un(k);
function ur(e, t) {
  var n = k((e = pt(e)).l, (t = pt(t)).l), a = k(e.a, t.a), i = k(e.b, t.b), l = k(e.opacity, t.opacity);
  return function(o) {
    return e.l = n(o), e.a = a(o), e.b = i(o), e.opacity = l(o), e + "";
  };
}
function Hn(e) {
  return function(t, n) {
    var a = e((t = gt(t)).h, (n = gt(n)).h), i = k(t.c, n.c), l = k(t.l, n.l), o = k(t.opacity, n.opacity);
    return function(s) {
      return t.h = a(s), t.c = i(s), t.l = l(s), t.opacity = o(s), t + "";
    };
  };
}
const mr = Hn(kt);
var fr = Hn(k);
function Yn(e) {
  return function t(n) {
    n = +n;
    function a(i, l) {
      var o = e((i = vt(i)).h, (l = vt(l)).h), s = k(i.s, l.s), c = k(i.l, l.l), u = k(i.opacity, l.opacity);
      return function(p) {
        return i.h = o(p), i.s = s(p), i.l = c(Math.pow(p, n)), i.opacity = u(p), i + "";
      };
    }
    return a.gamma = t, a;
  }(1);
}
const dr = Yn(kt);
var hr = Yn(k);
function pr(e) {
  return function() {
    return e;
  };
}
function gr(e) {
  return +e;
}
var Vt = [0, 1];
function pe(e) {
  return e;
}
function yt(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : pr(isNaN(t) ? NaN : 0.5);
}
function vr(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function br(e, t, n) {
  var a = e[0], i = e[1], l = t[0], o = t[1];
  return i < a ? (a = yt(i, a), l = n(o, l)) : (a = yt(a, i), l = n(l, o)), function(s) {
    return l(a(s));
  };
}
function xr(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, i = new Array(a), l = new Array(a), o = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < a; )
    i[o] = yt(e[o], e[o + 1]), l[o] = n(t[o], t[o + 1]);
  return function(s) {
    var c = ka(e, s, 1, a) - 1;
    return l[c](i[c](s));
  };
}
function yr(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Nr() {
  var e = Vt, t = Vt, n = Rt, a, i, l, o = pe, s, c, u;
  function p() {
    var m = Math.min(e.length, t.length);
    return o !== pe && (o = vr(e[0], e[m - 1])), s = m > 2 ? xr : br, c = u = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? l : (c || (c = s(e.map(a), t, n)))(a(o(m)));
  }
  return f.invert = function(m) {
    return o(i((u || (u = s(t, e.map(a), Xe)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, gr), p()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), p()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), n = Wn, p();
  }, f.clamp = function(m) {
    return arguments.length ? (o = m ? !0 : pe, p()) : o !== pe;
  }, f.interpolate = function(m) {
    return arguments.length ? (n = m, p()) : n;
  }, f.unknown = function(m) {
    return arguments.length ? (l = m, f) : l;
  }, function(m, E) {
    return a = m, i = E, p();
  };
}
function wr() {
  return Nr()(pe, pe);
}
function Er(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Qe(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function xe(e) {
  return e = Qe(Math.abs(e)), e ? e[1] : NaN;
}
function Cr(e, t) {
  return function(n, a) {
    for (var i = n.length, l = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > a && (s = Math.max(1, a - c)), l.push(n.substring(i -= s, i + s)), !((c += s + 1) > a)); )
      s = e[o = (o + 1) % e.length];
    return l.reverse().join(t);
  };
}
function _r(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Mr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Je(e) {
  if (!(t = Mr.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new zt({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Je.prototype = zt.prototype;
function zt(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
zt.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Sr(e) {
  e:
    for (var t = e.length, n = 1, a = -1, i; n < t; ++n)
      switch (e[n]) {
        case ".":
          a = i = n;
          break;
        case "0":
          a === 0 && (a = n), i = n;
          break;
        default:
          if (!+e[n])
            break e;
          a > 0 && (a = 0);
          break;
      }
  return a > 0 ? e.slice(0, a) + e.slice(i + 1) : e;
}
var Gn;
function Tr(e, t) {
  var n = Qe(e, t);
  if (!n)
    return e + "";
  var a = n[0], i = n[1], l = i - (Gn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = a.length;
  return l === o ? a : l > o ? a + new Array(l - o + 1).join("0") : l > 0 ? a.slice(0, l) + "." + a.slice(l) : "0." + new Array(1 - l).join("0") + Qe(e, Math.max(0, t + l - 1))[0];
}
function Xt(e, t) {
  var n = Qe(e, t);
  if (!n)
    return e + "";
  var a = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + a : a.length > i + 1 ? a.slice(0, i + 1) + "." + a.slice(i + 1) : a + new Array(i - a.length + 2).join("0");
}
const Qt = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Er,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Xt(e * 100, t),
  r: Xt,
  s: Tr,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Jt(e) {
  return e;
}
var Zt = Array.prototype.map, Kt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Dr(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Jt : Cr(Zt.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", l = e.numerals === void 0 ? Jt : _r(Zt.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = Je(f);
    var m = f.fill, E = f.align, S = f.sign, z = f.symbol, T = f.zero, v = f.width, x = f.comma, D = f.precision, L = f.trim, A = f.type;
    A === "n" ? (x = !0, A = "g") : Qt[A] || (D === void 0 && (D = 12), L = !0, A = "g"), (T || m === "0" && E === "=") && (T = !0, m = "0", E = "=");
    var ie = z === "$" ? n : z === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", Q = z === "$" ? a : /[%p]/.test(A) ? o : "", g = Qt[A], y = /[defgprs%]/.test(A);
    D = D === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function b(h) {
      var R = ie, C = Q, W, le, te;
      if (A === "c")
        C = g(h) + C, h = "";
      else {
        h = +h;
        var de = h < 0 || 1 / h < 0;
        if (h = isNaN(h) ? c : g(Math.abs(h), D), L && (h = Sr(h)), de && +h == 0 && S !== "+" && (de = !1), R = (de ? S === "(" ? S : s : S === "-" || S === "(" ? "" : S) + R, C = (A === "s" ? Kt[8 + Gn / 3] : "") + C + (de && S === "(" ? ")" : ""), y) {
          for (W = -1, le = h.length; ++W < le; )
            if (te = h.charCodeAt(W), 48 > te || te > 57) {
              C = (te === 46 ? i + h.slice(W + 1) : h.slice(W)) + C, h = h.slice(0, W);
              break;
            }
        }
      }
      x && !T && (h = t(h, 1 / 0));
      var he = R.length + h.length + C.length, U = he < v ? new Array(v - he + 1).join(m) : "";
      switch (x && T && (h = t(U + h, U.length ? v - C.length : 1 / 0), U = ""), E) {
        case "<":
          h = R + h + C + U;
          break;
        case "=":
          h = R + U + h + C;
          break;
        case "^":
          h = U.slice(0, he = U.length >> 1) + R + h + C + U.slice(he);
          break;
        default:
          h = U + R + h + C;
          break;
      }
      return l(h);
    }
    return b.toString = function() {
      return f + "";
    }, b;
  }
  function p(f, m) {
    var E = u((f = Je(f), f.type = "f", f)), S = Math.max(-8, Math.min(8, Math.floor(xe(m) / 3))) * 3, z = Math.pow(10, -S), T = Kt[8 + S / 3];
    return function(v) {
      return E(z * v) + T;
    };
  }
  return {
    format: u,
    formatPrefix: p
  };
}
var $e, Bn, qn;
Ar({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ar(e) {
  return $e = Dr(e), Bn = $e.format, qn = $e.formatPrefix, $e;
}
function Or(e) {
  return Math.max(0, -xe(Math.abs(e)));
}
function kr(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(xe(t) / 3))) * 3 - xe(Math.abs(e)));
}
function Rr(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, xe(t) - xe(e)) + 1;
}
function zr(e, t, n, a) {
  var i = Pa(e, t, n), l;
  switch (a = Je(a ?? ",f"), a.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(l = kr(i, o)) && (a.precision = l), qn(a, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(l = Rr(i, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = l - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(l = Or(i)) && (a.precision = l - (a.type === "%") * 2);
      break;
    }
  }
  return Bn(a);
}
function $r(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Fa(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var i = t();
    return zr(i[0], i[i.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), i = 0, l = a.length - 1, o = a[i], s = a[l], c, u, p = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = l, l = u); p-- > 0; ) {
      if (u = ft(o, s, n), u === c)
        return a[i] = o, a[l] = s, t(a);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Vn() {
  var e = wr();
  return e.copy = function() {
    return yr(e, Vn());
  }, Ia.apply(e, arguments), $r(e);
}
const $t = fe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getUTCSeconds());
$t.range;
const Xn = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye);
}, (e, t) => {
  e.setTime(+e + t * _e);
}, (e, t) => (t - e) / _e, (e) => e.getMinutes());
Xn.range;
const Qn = fe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * _e);
}, (e, t) => (t - e) / _e, (e) => e.getUTCMinutes());
Qn.range;
const Jn = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye - e.getMinutes() * _e);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getHours());
Jn.range;
const Zn = fe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getUTCHours());
Zn.range;
const Kn = fe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Kn.range;
const ea = fe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ea.range;
function Fr(e, t) {
  t.domain && ("nice" in e || "quantiles" in e || "padding" in e, e.domain(t.domain));
}
function Pr(e, t) {
  t.range && ("padding" in e, e.range(t.range));
}
function Ir(e, t) {
  "align" in e && "align" in t && typeof t.align < "u" && e.align(t.align);
}
function jr(e, t) {
  "base" in e && "base" in t && typeof t.base < "u" && e.base(t.base);
}
function Lr(e, t) {
  "clamp" in e && "clamp" in t && typeof t.clamp < "u" && e.clamp(t.clamp);
}
function Wr(e, t) {
  "constant" in e && "constant" in t && typeof t.constant < "u" && e.constant(t.constant);
}
function Ur(e, t) {
  "exponent" in e && "exponent" in t && typeof t.exponent < "u" && e.exponent(t.exponent);
}
var en = {
  lab: ur,
  hcl: mr,
  "hcl-long": fr,
  hsl: sr,
  "hsl-long": cr,
  cubehelix: dr,
  "cubehelix-long": hr,
  rgb: bt
};
function Hr(e) {
  switch (e) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return en[e];
  }
  var t = e.type, n = e.gamma, a = en[t];
  return typeof n > "u" ? a : a.gamma(n);
}
function Yr(e, t) {
  if ("interpolate" in t && "interpolate" in e && typeof t.interpolate < "u") {
    var n = Hr(t.interpolate);
    e.interpolate(n);
  }
}
var Gr = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), Br = "%Y-%m-%d %H:%M";
function qr(e) {
  var t = e.tickFormat(1, Br)(Gr);
  return t === "2020-02-02 03:04";
}
var tn = {
  day: da,
  hour: Jn,
  minute: Xn,
  month: Kn,
  second: $t,
  week: ha,
  year: pa
}, nn = {
  day: ga,
  hour: Zn,
  minute: Qn,
  month: ea,
  second: $t,
  week: va,
  year: ba
};
function Vr(e, t) {
  if ("nice" in t && typeof t.nice < "u" && "nice" in e) {
    var n = t.nice;
    if (typeof n == "boolean")
      n && e.nice();
    else if (typeof n == "number")
      e.nice(n);
    else {
      var a = e, i = qr(a);
      if (typeof n == "string")
        a.nice(i ? nn[n] : tn[n]);
      else {
        var l = n.interval, o = n.step, s = (i ? nn[l] : tn[l]).every(o);
        s != null && a.nice(s);
      }
    }
  }
}
function Xr(e, t) {
  "padding" in e && "padding" in t && typeof t.padding < "u" && e.padding(t.padding), "paddingInner" in e && "paddingInner" in t && typeof t.paddingInner < "u" && e.paddingInner(t.paddingInner), "paddingOuter" in e && "paddingOuter" in t && typeof t.paddingOuter < "u" && e.paddingOuter(t.paddingOuter);
}
function Qr(e, t) {
  if (t.reverse) {
    var n = e.range().slice().reverse();
    "padding" in e, e.range(n);
  }
}
function Jr(e, t) {
  "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e ? e.round(t.round) : "interpolate" in e && t.round && e.interpolate(Wn));
}
function Zr(e, t) {
  "unknown" in e && "unknown" in t && typeof t.unknown < "u" && e.unknown(t.unknown);
}
function Kr(e, t) {
  if ("zero" in t && t.zero === !0) {
    var n = e.domain(), a = n[0], i = n[1], l = i < a, o = l ? [i, a] : [a, i], s = o[0], c = o[1], u = [Math.min(0, s), Math.max(0, c)];
    e.domain(l ? u.reverse() : u);
  }
}
var ei = [
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
], ti = {
  domain: Fr,
  nice: Vr,
  zero: Kr,
  interpolate: Yr,
  round: Jr,
  align: Ir,
  base: jr,
  clamp: Lr,
  constant: Wr,
  exponent: Ur,
  padding: Xr,
  range: Pr,
  reverse: Qr,
  unknown: Zr
};
function ni() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var a = new Set(t), i = ei.filter(function(l) {
    return a.has(l);
  });
  return function(o, s) {
    return typeof s < "u" && i.forEach(function(c) {
      ti[c](o, s);
    }), o;
  };
}
var ai = ni("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function ri(e) {
  return ai(Vn(), e);
}
const ii = (e, t) => {
  switch (t.type) {
    case "SET_CONFIG":
      return { ...e, config: t.payload };
    case "SET_LOADING":
      return { ...e, loading: t.payload };
    case "SET_VIEWPORT":
      return { ...e, viewport: t.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...e, coveLoadedHasRan: t.payload };
    case "SET_CONTAINER":
      return { ...e, container: t.payload };
  }
}, ta = w.createContext({}), Ce = {
  title: "Chart Title",
  visualizationType: "Waffle",
  visualizationSubType: "linear",
  showPercent: !0,
  showDenominator: !0,
  valueDescription: "out of",
  content: "",
  subtext: "",
  orientation: "horizontal",
  data: "",
  filters: [],
  fontSize: "",
  overallFontSize: "medium",
  dataColumn: "",
  dataFunction: "",
  dataConditionalColumn: "",
  dataConditionalOperator: "",
  dataConditionalComparate: "",
  invalidComparate: !1,
  customDenom: !1,
  dataDenom: "100",
  dataDenomColumn: "",
  dataDenomFunction: "",
  suffix: "%",
  roundToPlace: "0",
  shape: "circle",
  nodeWidth: "10",
  nodeSpacer: "2",
  theme: "theme-blue",
  type: "waffle-chart",
  gauge: {
    height: 35,
    width: "100%"
  },
  visual: {
    border: !0,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1,
    colors: {
      "theme-blue": "#005eaa",
      "theme-purple": "#712177",
      "theme-brown": "#705043",
      "theme-teal": "#00695c",
      "theme-pink": "#af4448",
      "theme-orange": "#bb4d00",
      "theme-slate": "#29434e",
      "theme-indigo": "#26418f",
      "theme-cyan": "#006778",
      "theme-green": "#4b830d",
      "theme-amber": "#fbab18"
    }
  }
}, Y = w.memo(({ label: e, value: t, options: n, fieldName: a, section: i = null, subsection: l = null, required: o = !1, updateField: s, initial: c, ...u }) => {
  let p = "";
  if (Array.isArray(n))
    p = n.map((f) => /* @__PURE__ */ r.createElement("option", { value: f, key: f }, f));
  else {
    p = [];
    for (const [f, m] of Object.entries(n))
      p.push(
        /* @__PURE__ */ r.createElement("option", { value: f, key: f }, m)
      );
  }
  return c && p.unshift(
    /* @__PURE__ */ r.createElement("option", { value: "", key: "initial" }, c)
  ), /* @__PURE__ */ r.createElement("label", { style: { width: "100%", display: "block" } }, e && /* @__PURE__ */ r.createElement("span", { className: "edit-label cove-input__label" }, e), /* @__PURE__ */ r.createElement(
    "select",
    {
      className: o && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (f) => {
        s(i, l, a, f.target.value);
      },
      ...u
    },
    p
  ));
}), li = (e) => /* @__PURE__ */ w.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", ...e }, /* @__PURE__ */ w.createElement("path", { d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" })), K = w.memo(
  ({
    label: e,
    size: t = "small",
    activeColor: n = null,
    activeCheckColor: a = null,
    section: i = null,
    subsection: l = null,
    fieldName: o,
    updateField: s,
    value: c,
    i: u = null,
    min: p = null,
    max: f = null,
    ...m
  }) => {
    const [E, S] = w.useState(c);
    let z = l ? `${i}-${l}-${o}` : `${i}-${l}-${o}`;
    return w.useEffect(() => {
      c !== void 0 && c !== E && S(c);
    }, [c]), w.useEffect(() => {
      c !== void 0 && c !== E && s && s(i, l, o, E, u);
    }, [E]), /* @__PURE__ */ r.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ r.createElement("label", null, e), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox" + (t === "small" ? "--small" : t === "large" ? "--large" : "") + (E ? " active" : ""), onClick: () => S(!E) }, /* @__PURE__ */ r.createElement("div", { className: `cove-input__checkbox-box${n ? " custom-color" : ""}`, style: E && n ? { backgroundColor: n } : null }, /* @__PURE__ */ r.createElement(li, { className: "cove-input__checkbox-check", style: { fill: a || "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: z, checked: E || !1, readOnly: !0 })));
  }
);
K.propTypes = {
  label: F.string,
  size: F.oneOf(["small", "medium", "large"]),
  activeColor: F.string,
  activeCheckColor: F.string
};
const oi = (e) => /* @__PURE__ */ w.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ w.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), si = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
w.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: i = null, tooltip: l, updateField: o, ...s }) => /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: () => {
      o(a, i, n, !t);
    },
    ...s
  }
), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, e), /* @__PURE__ */ r.createElement("span", { className: "cove-icon" }, l)));
const ci = w.memo((e) => {
  const { config: t, updateConfig: n, loading: a, data: i, setParentConfig: l, isDashboard: o } = w.useContext(ta), [s, c] = w.useState(!0), [u, p] = w.useState(!1), f = (g) => g ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, m = (g, y, b, h) => {
    if (g === null && y === null) {
      let le = { ...t, [b]: h };
      b === "filterColumn" && (le.filterValue = ""), n(le);
      return;
    }
    const R = Array.isArray(t[g]);
    let C = R ? [...t[g], h] : { ...t[g], [b]: h };
    y !== null && (R ? (C = [...t[g]], C[y] = { ...C[y], [b]: h }) : typeof h == "string" ? C[y] = h : C = { ...t[g], [y]: { ...t[g][y], [b]: h } });
    let W = { ...t, [g]: C };
    n(W);
  };
  w.useEffect(() => {
    if (l) {
      const g = T();
      l(g);
    }
  }, [t]), w.useEffect(() => {
    if (!u) {
      let g = { ...t };
      delete g.newViz, n(g);
    }
  }, []), w.useEffect(() => {
    let g = ["<", ">", "<=", ">="];
    t.dataConditionalComparate !== "" ? g.indexOf(t.dataConditionalOperator) > -1 && isNaN(t.dataConditionalComparate) ? n({ ...t, invalidComparate: !0 }) : t.invalidComparate && n({ ...t, invalidComparate: !1 }) : n({ ...t, invalidComparate: !1 });
  }, [t.dataConditionalOperator, t.dataConditionalComparate]);
  const E = () => {
    c(!s);
  }, S = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, t.runtime.editorErrorMessage))), z = () => {
    const g = (y) => {
      y.preventDefault();
      let b = { ...t };
      delete b.newViz, n(b);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: g }, "I'm Done")));
  }, T = () => {
    let g = JSON.parse(JSON.stringify(t));
    return delete g.newViz, delete g.runtime, g;
  }, v = () => {
    let g = t.filters ? [...t.filters] : [];
    g.push({ values: [] }), n({ ...t, filters: g });
  }, x = (g) => {
    let y = [...t.filters];
    y.splice(g, 1), n({ ...t, filters: y });
  }, D = (g, y, b) => {
    let h = [...t.filters];
    h[y][g] = b, n({ ...t, filters: h });
  }, L = (g = !0) => {
    let y = {};
    return i.map((b) => Object.keys(b).forEach((h) => y[h] = !0)), Object.keys(y);
  }, A = (g) => {
    let y = [];
    const b = t.filters[g].columnName;
    return i && b && (i.forEach(function(h) {
      h[b] !== void 0 && y.indexOf(h[b]) === -1 && y.push(h[b]);
    }), y.sort()), y;
  }, ie = ["Waffle", "Gauge"], Q = /* @__PURE__ */ r.createElement(ke, null, /* @__PURE__ */ r.createElement(ke.Section, { title: "General" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ r.createElement(Y, { value: t.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: m, options: ie, className: "cove-input" }), t.visualizationType === "Gauge" && /* @__PURE__ */ r.createElement(Y, { value: t.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: m, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ r.createElement(j, { value: t.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: m }), /* @__PURE__ */ r.createElement(
    j,
    {
      type: "textarea",
      value: t.content,
      fieldName: "content",
      label: "Message",
      updateField: m,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ r.createElement(
    j,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: m,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ r.createElement(ke.Section, { icon: !t.dataColumn || !t.dataFunction ? /* @__PURE__ */ r.createElement(oi, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ r.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(Y, { style: f(!t.dataColumn), value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: m, initial: "Select", options: L(), className: "cove-input" })), /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(Y, { style: f(!t.dataFunction), value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: m, initial: "Select", options: an, className: "cove-input" })), /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(Y, { value: t.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: m, initial: "Select", options: L(), className: "cove-input" })), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(Y, { value: t.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: m, initial: "Select", options: vi, className: "cove-input" })), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(j, { value: t.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: m, className: t.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), t.invalidComparate && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ r.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ r.createElement(K, { size: "small", value: t.customDenom, fieldName: "customDenom", updateField: m })))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, !t.customDenom && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(j, { value: t.dataDenom, fieldName: "dataDenom", updateField: m })), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ r.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), t.customDenom && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Y, { value: t.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: m, initial: "Select", options: L() }), /* @__PURE__ */ r.createElement(Y, { value: t.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: m, initial: "Select", options: an }))), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ r.createElement(j, { value: t.prefix, fieldName: "prefix", label: "Prefix", updateField: m })), /* @__PURE__ */ r.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ r.createElement(j, { value: t.suffix, fieldName: "suffix", label: "Suffix", updateField: m })), /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement(j, { type: "number", value: t.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: m })))), t.visualizationType === "Gauge" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ r.createElement(j, { inline: !0, size: "small", value: t.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: m }), /* @__PURE__ */ r.createElement(K, { inline: !0, size: "small", value: t.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: m }), /* @__PURE__ */ r.createElement(K, { inline: !0, size: "small", label: "Show Denominator", value: t.showDenominator, fieldName: "showDenominator", updateField: m }))), /* @__PURE__ */ r.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((g, y) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: y }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        x(y);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: g.columnName,
      onChange: (b) => {
        D("columnName", y, b.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    L().map((b, h) => /* @__PURE__ */ r.createElement("option", { value: b, key: h }, b))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: g.columnValue,
      onChange: (b) => {
        D("columnValue", y, b.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    A(y).map((b, h) => /* @__PURE__ */ r.createElement("option", { value: b, key: h }, b))
  ))))), /* @__PURE__ */ r.createElement(ma, { onClick: v, fluid: !0 }, "Add Filter")), /* @__PURE__ */ r.createElement(ke.Section, { title: "Visual" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ r.createElement(Y, { value: t.shape, fieldName: "shape", label: "Shape", updateField: m, options: ["circle", "square", "person"], className: "cove-input" }), t.visualizationType !== "Gauge" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(j, { type: "number", value: t.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: m })), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(j, { type: "number", value: t.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: m }))), /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ r.createElement(Y, { value: t.orientation, fieldName: "orientation", label: "Layout", updateField: m, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ r.createElement(j, { type: "number", value: t.fontSize, fieldName: "fontSize", updateField: m })), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ r.createElement("label", { className: "accordion__panel-label--muted" }, " default (50px)")))), /* @__PURE__ */ r.createElement(Y, { value: t.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: m, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, si.map((g) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: g,
      key: g,
      onClick: () => {
        n({ ...t, theme: g });
      },
      className: t.theme === g ? "selected " + g : g
    }
  )))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ r.createElement(K, { inline: !0, size: "small", value: t.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: m }), /* @__PURE__ */ r.createElement(K, { inline: !0, size: "small", value: t.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: m }), /* @__PURE__ */ r.createElement(K, { size: "small", value: t.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: m }), /* @__PURE__ */ r.createElement(K, { size: "small", value: t.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: m }), /* @__PURE__ */ r.createElement(K, { size: "small", value: t.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: m }))));
  return a ? null : /* @__PURE__ */ r.createElement(Mn, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor" }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ r.createElement(S, null), t.newViz && u && /* @__PURE__ */ r.createElement(z, null), /* @__PURE__ */ r.createElement("button", { className: "cove-editor--toggle" + (s ? "" : " collapsed"), title: s ? "Collapse Editor" : "Expand Editor", onClick: E }), /* @__PURE__ */ r.createElement("section", { className: "cove-editor__panel" + (s ? "" : " hidden") }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ r.createElement("h2", { className: "cove-editor__heading" }, "Configure Chart"), /* @__PURE__ */ r.createElement("section", { className: "cove-editor__content" }, Q))), /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ r.createElement("div", { className: "cove-editor__content-wrap" }, e.children))));
});
const ui = ({ config: e, isEditor: t, link: n = "" }) => {
  const { title: a, theme: i, shape: l, nodeWidth: o, nodeSpacer: s, prefix: c, suffix: u, subtext: p, content: f, orientation: m, filters: E, dataColumn: S, dataFunction: z, dataConditionalColumn: T, dataConditionalOperator: v, dataConditionalComparate: x, customDenom: D, dataDenom: L, dataDenomColumn: A, dataDenomFunction: ie, roundToPlace: Q } = e, g = (J, P = !1) => {
    P && console.log("handleWaffleChartAriaLabels Testing On:", J);
    try {
      let B = "Waffle chart";
      return J.title && (B += ` with the title: ${J.title}`), B;
    } catch (B) {
      console.error(B.message);
    }
  }, y = e.visual.colors[e.theme];
  let b = e.fontSize ? { fontSize: e.fontSize + "px" } : null;
  const h = w.useCallback(() => {
    if (!S || !z)
      return "";
    const J = (d) => {
      if (Array.isArray(d) && d.length > 0) {
        const M = d.reduce((H, ne) => H + ne);
        return N(M);
      }
    }, P = (d) => {
      const M = d.length > 1 ? d.reduce((H, ne) => H + ne) / d.length : d[0];
      return N(M);
    }, B = (d) => {
      let M = {}, H = -1 / 0;
      for (let I = 0; I < d.length; I++)
        M[d[I]] ? M[d[I]] += 1 : M[d[I]] = 1, M[d[I]] > H && (H = M[d[I]]);
      let ne = [];
      for (let I in M)
        M[I] === H && ne.push(I);
      return ne;
    }, Ne = (d) => {
      const M = Math.floor(d.length / 2), H = [...d].sort((I, aa) => I - aa), ne = d.length % 2 !== 0 ? H[M] : (H[M - 1] + H[M]) / 2;
      return N(ne);
    }, N = (d) => (Q !== "" && !isNaN(Q) && Number(Q) > -1 && (d = Number(d).toFixed(Number(Q))), d);
    let _ = e.data;
    E.map((d) => {
      if (d.columnName && d.columnValue)
        _ = _.filter(function(M) {
          return M[d.columnName] === d.columnValue;
        });
      else
        return !1;
    });
    let $ = [];
    if (T !== "" && v !== "" && x !== "")
      switch (v) {
        case "<":
          $ = _.filter((d) => d[T] < x);
          break;
        case ">":
          $ = _.filter((d) => d[T] > x);
          break;
        case "<=":
          $ = _.filter((d) => d[T] <= x);
          break;
        case ">=":
          $ = _.filter((d) => d[T] >= x);
          break;
        case "=":
          isNaN(Number(x)) ? $ = _.filter((d) => String(d[T]) === x) : $ = _.filter((d) => d[T] === x);
          break;
        case "≠":
          isNaN(Number(x)) ? $ = _.filter((d) => String(d[T]) !== x) : $ = _.filter((d) => d[T] !== x);
          break;
        default:
          $ = [];
      }
    const we = $.length > 0 ? $.map((d) => d[S]) : _.map((d) => d[S]), Ae = _.map((d) => d[A]);
    let q = we.filter((d) => {
      let M = !1;
      return (Number(d) || Number.isFinite(Number(d))) && (M = !0), M;
    }).map(Number), oe = Ae.filter((d) => {
      let M = !1;
      return (Number(d) || Number.isFinite(Number(d))) && (M = !0), M;
    }).map(Number), et = "";
    et = {
      [wt]: String(q.length),
      [St]: String(J(q)),
      [Et]: String(P(q)),
      [Ct]: Ne(q).toString(),
      [Nt]: Math.max(...q).toString(),
      [_t]: Math.min(...q).toString(),
      [Mt]: B(q).join(", ")
    }[z];
    let Oe = null;
    const na = {
      [wt]: String(oe.length),
      [St]: String(J(oe)),
      [Et]: String(P(oe)),
      [Ct]: Ne(oe).toString(),
      [Nt]: Math.max(...oe).toString(),
      [_t]: Math.min(...oe).toString(),
      [Mt]: B(oe).join(", ")
    };
    return D && A && ie ? Oe = na[ie] : Oe = L > 0 ? L : 100, [N(et / Oe * 100), Oe, N(et)];
  }, [S, z, e.data, E, T, v, x, D, A, ie, Q, L]), [R, C, W] = h(), le = w.useCallback(() => {
    let J = [], P = parseInt(o, 10), B = parseInt(s, 10);
    const Ne = (N, _, $, we, Ae) => {
      let q = _ === "x" ? $ % 10 : _ === "y" ? Math.floor($ / 10) : null;
      return N === "circle" ? q * (we + Ae) + we / 2 : q * (we + Ae);
    };
    for (let N = 0; N < 100; N++) {
      let _ = {
        shape: l,
        x: Ne(l, "x", N, P, B),
        y: Ne(l, "y", N, P, B),
        color: e.visual.colors[i],
        opacity: N + 1 > 100 - Math.round(R) ? 1 : 0.35
      };
      J.push(_);
    }
    return J.map(
      (N, _) => N.shape === "square" ? /* @__PURE__ */ r.createElement(Ft, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * _}ms` }, x: N.x, y: N.y, width: P, height: P, fill: N.color, fillOpacity: N.opacity, key: _ }) : N.shape === "person" ? /* @__PURE__ */ r.createElement(
        "path",
        {
          style: { transform: `translateX(${N.x + P / 4}px) translateY(${N.y}px) scale(${P / 20})` },
          fill: N.color,
          fillOpacity: N.opacity,
          key: _,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ r.createElement(Ma, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * _}ms` }, cx: N.x, cy: N.y, r: P / 2, fill: N.color, fillOpacity: N.opacity, key: _ })
    );
  }, [i, R, l, o, s]), te = w.useCallback(() => o * 10 + s * 9, [o, s]), { innerContainerClasses: de, contentClasses: he } = ua(e), U = ri({
    domain: [0, C],
    range: [0, e.gauge.width]
  });
  return /* @__PURE__ */ r.createElement("div", { className: de.join(" ") }, /* @__PURE__ */ r.createElement(r.Fragment, null, a && /* @__PURE__ */ r.createElement("header", { className: `cove-component__header chart-title ${e.theme}`, "aria-hidden": "true" }, Ee(a)), /* @__PURE__ */ r.createElement("div", { className: he.join(" ") }, /* @__PURE__ */ r.createElement("div", { className: "cove-component__content-wrap" }, e.visualizationType === "Gauge" && /* @__PURE__ */ r.createElement("div", { className: `cove-gauge-chart${e.overallFontSize ? " font-" + e.overallFontSize : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__data--primary", style: b }, c || " ", e.showPercent ? R : W, u ? u + " " : " ", " ", e.valueDescription, " ", e.showDenominator && C ? C : " "), /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__data--text" }, Ee(f)), /* @__PURE__ */ r.createElement("svg", { height: e.gauge.height, width: "100%" }, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: e.gauge.width, height: e.gauge.height, fill: "#fff" }), /* @__PURE__ */ r.createElement(Ft, { x: 0, y: 0, width: U(W), height: e.gauge.height, fill: y }))), /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Ee(p)))), e.visualizationType !== "Gauge" && /* @__PURE__ */ r.createElement("div", { className: `cove-waffle-chart${m === "vertical" ? " cove-waffle-chart--verical" : ""}${e.overallFontSize ? " font-" + e.overallFontSize : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__chart", style: { width: te() } }, /* @__PURE__ */ r.createElement("svg", { width: te(), height: te(), role: "img", "aria-label": g(e), tabIndex: 0 }, /* @__PURE__ */ r.createElement(ct, null, le()))), (R || f) && /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__data" }, R && /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__data--primary", style: b }, c || null, R, u || null), /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__data--text" }, Ee(f)), p && /* @__PURE__ */ r.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Ee(p)))))), n && n));
}, re = ({ configUrl: e, config: t, isDashboard: n = !1, isEditor: a = !1, setConfig: i }) => {
  const [l, o] = w.useReducer(ii, { config: t ?? Ce, loading: !0, preview: !1, viewport: "lg", coveLoadedHasRan: !1, container: null }), { loading: s, config: c, viewport: u, coveLoadedHasRan: p, container: f } = l, m = (v) => {
    Object.keys(Ce).forEach((x) => {
      v[x] && typeof v[x] == "object" && !Array.isArray(v[x]) && (v[x] = { ...Ce[x], ...v[x] });
    }), v.runtime = {}, v.runtime.uniqueId = Date.now(), v.runtime.editorErrorMessage = "", o({ type: "SET_CONFIG", payload: v });
  }, E = w.useCallback(async () => {
    let v = t || await (await fetch(e)).json(), x = v.data ?? {};
    v.dataUrl && (x = await ia(v.dataUrl)), v.data = x;
    const D = { ...await sa(v) };
    m({ ...Ce, ...D }), o({ type: "SET_LOADING", payload: !1 });
  }, []), S = new la((v) => {
    for (let x of v) {
      let D = oa(x.contentRect.width * 2);
      o({ type: "SET_VIEWPORT", payload: D });
    }
  }), z = w.useCallback((v) => {
    v !== null && S.observe(v), o({ type: "SET_CONTAINER", payload: v });
  }, []);
  w.useEffect(() => {
    E().catch((v) => console.log(v));
  }, []), w.useEffect(() => {
    c && !p && f && (ca("cove_loaded", { config: c }), o({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [c, f]), w.useEffect(() => {
    E().catch((v) => console.log(v));
  }, []), t && w.useEffect(() => {
    t.dataUrl || m({ ...Ce, ...t });
  }, [t.data]);
  let T = /* @__PURE__ */ r.createElement(ra, null);
  if (s === !1) {
    let v = ["cove", "cdc-open-viz-module", "type-waffle-chart", u, c.theme, "font-" + c.overallFontSize];
    a && v.push("is-editor");
    let x = ["cove-component", "waffle-chart"], D = /* @__PURE__ */ r.createElement("div", { className: `${x.join(" ")}`, ref: z }, /* @__PURE__ */ r.createElement(ui, { config: c, isEditor: a }));
    T = /* @__PURE__ */ r.createElement("div", { className: v.join(" ") }, a && /* @__PURE__ */ r.createElement(ci, null, D), !a && D);
  }
  return /* @__PURE__ */ r.createElement(Mn, { component: "WaffleChart" }, /* @__PURE__ */ r.createElement(ta.Provider, { value: { config: c, updateConfig: m, loading: s, data: c.data, setParentConfig: i, isDashboard: n, outerContainerRef: z } }, T));
}, Nt = "Max", wt = "Count", Et = "Mean (Average)", Ct = "Median", _t = "Min", Mt = "Mode", St = "Sum", an = [wt, Nt, Et, Ct, _t, Mt, St], mi = "<", fi = ">", di = "<=", hi = ">=", pi = "=", gi = "≠", vi = [mi, fi, di, hi, pi, gi], Oi = {
  title: "Components/Templates/WaffleChart",
  component: re
}, Fe = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json"
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, Pe = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json"
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, Ie = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json"
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, je = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json"
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, Le = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json"
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, We = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Waffle",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
}, Ue = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Gauge",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (e) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { ...e }))
};
var rn, ln, on;
Fe.parameters = {
  ...Fe.parameters,
  docs: {
    ...(rn = Fe.parameters) == null ? void 0 : rn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Example-Count.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(on = (ln = Fe.parameters) == null ? void 0 : ln.docs) == null ? void 0 : on.source
    }
  }
};
var sn, cn, un;
Pe.parameters = {
  ...Pe.parameters,
  docs: {
    ...(sn = Pe.parameters) == null ? void 0 : sn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Waffle-Chart-Average-Max.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(un = (cn = Pe.parameters) == null ? void 0 : cn.docs) == null ? void 0 : un.source
    }
  }
};
var mn, fn, dn;
Ie.parameters = {
  ...Ie.parameters,
  docs: {
    ...(mn = Ie.parameters) == null ? void 0 : mn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/waffle-chart-demographics.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(dn = (fn = Ie.parameters) == null ? void 0 : fn.docs) == null ? void 0 : dn.source
    }
  }
};
var hn, pn, gn;
je.parameters = {
  ...je.parameters,
  docs: {
    ...(hn = je.parameters) == null ? void 0 : hn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/linear-gauge-data-from-file.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(gn = (pn = je.parameters) == null ? void 0 : pn.docs) == null ? void 0 : gn.source
    }
  }
};
var vn, bn, xn;
Le.parameters = {
  ...Le.parameters,
  docs: {
    ...(vn = Le.parameters) == null ? void 0 : vn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/gauge-progress-indicator.json'
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(xn = (bn = Le.parameters) == null ? void 0 : bn.docs) == null ? void 0 : xn.source
    }
  }
};
var yn, Nn, wn;
We.parameters = {
  ...We.parameters,
  docs: {
    ...(yn = We.parameters) == null ? void 0 : yn.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Waffle',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(wn = (Nn = We.parameters) == null ? void 0 : Nn.docs) == null ? void 0 : wn.source
    }
  }
};
var En, Cn, _n;
Ue.parameters = {
  ...Ue.parameters,
  docs: {
    ...(En = Ue.parameters) == null ? void 0 : En.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Gauge',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>
      <WaffleChart {...args} />
    </>
}`,
      ...(_n = (Cn = Ue.parameters) == null ? void 0 : Cn.docs) == null ? void 0 : _n.source
    }
  }
};
const ki = ["Example_Waffle_Chart_Count", "Waffle_Chart_Average_Max", "Waffle_Chart_Demographics", "Linear_Gauge", "Linear_Gauge_With_Message", "Person", "Gauge"];
export {
  Fe as Example_Waffle_Chart_Count,
  Ue as Gauge,
  je as Linear_Gauge,
  Le as Linear_Gauge_With_Message,
  We as Person,
  Pe as Waffle_Chart_Average_Max,
  Ie as Waffle_Chart_Demographics,
  ki as __namedExportsOrder,
  Oi as default
};
