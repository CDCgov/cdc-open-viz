import { R as l, r as b } from "./storybook-b5af0f4a.es.js";
import { E as un, f as Jn, i as Zn, g as Kn, L as ea, H as Me } from "./storybook-88423377.es.js";
import { A as Re } from "./storybook-35663d54.es.js";
import { B as ta } from "./storybook-71ea65e0.es.js";
import { I as Qe } from "./storybook-8c97bf69.es.js";
import { T as ee } from "./storybook-c59d598b.es.js";
import { P as H } from "./storybook-38eee769.es.js";
import { g as na } from "./storybook-92157f1b.es.js";
var sn = { exports: {} };
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
        var r = arguments[i];
        if (r) {
          var o = typeof r;
          if (o === "string" || o === "number")
            a.push(r);
          else if (Array.isArray(r)) {
            if (r.length) {
              var c = n.apply(null, r);
              c && a.push(c);
            }
          } else if (o === "object") {
            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
              a.push(r.toString());
              continue;
            }
            for (var s in r)
              t.call(r, s) && r[s] && a.push(s);
          }
        }
      }
      return a.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(sn);
var aa = sn.exports;
const Mt = /* @__PURE__ */ na(aa);
var ra = ["top", "left", "transform", "className", "children", "innerRef"];
function it() {
  return it = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, it.apply(this, arguments);
}
function ia(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, r;
  for (r = 0; r < a.length; r++)
    i = a[r], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lt(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, r = e.transform, o = e.className, c = e.children, s = e.innerRef, u = ia(e, ra);
  return /* @__PURE__ */ l.createElement("g", it({
    ref: s,
    className: Mt("visx-group", o),
    transform: r || "translate(" + i + ", " + n + ")"
  }, u), c);
}
lt.propTypes = {
  top: H.number,
  left: H.number,
  transform: H.string,
  className: H.string,
  children: H.node,
  innerRef: H.oneOfType([H.string, H.func, H.object])
};
var la = ["className", "innerRef"];
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ot.apply(this, arguments);
}
function oa(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, r;
  for (r = 0; r < a.length; r++)
    i = a[r], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Rt(e) {
  var t = e.className, n = e.innerRef, a = oa(e, la);
  return /* @__PURE__ */ l.createElement("rect", ot({
    ref: n,
    className: Mt("visx-bar", t)
  }, a));
}
var ca = ["className", "innerRef"];
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
function ua(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, r;
  for (r = 0; r < a.length; r++)
    i = a[r], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sa(e) {
  var t = e.className, n = e.innerRef, a = ua(e, ca);
  return /* @__PURE__ */ l.createElement("circle", ct({
    ref: n,
    className: Mt("visx-circle", t)
  }, a));
}
function Le(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function fa(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function fn(e) {
  let t, n, a;
  e.length !== 2 ? (t = Le, n = (c, s) => Le(e(c), s), a = (c, s) => e(c) - s) : (t = e === Le || e === fa ? e : ma, n = e, a = e);
  function i(c, s, u = 0, h = c.length) {
    if (u < h) {
      if (t(s, s) !== 0)
        return h;
      do {
        const m = u + h >>> 1;
        n(c[m], s) < 0 ? u = m + 1 : h = m;
      } while (u < h);
    }
    return u;
  }
  function r(c, s, u = 0, h = c.length) {
    if (u < h) {
      if (t(s, s) !== 0)
        return h;
      do {
        const m = u + h >>> 1;
        n(c[m], s) <= 0 ? u = m + 1 : h = m;
      } while (u < h);
    }
    return u;
  }
  function o(c, s, u = 0, h = c.length) {
    const m = i(c, s, u, h - 1);
    return m > u && a(c[m - 1], s) > -a(c[m], s) ? m - 1 : m;
  }
  return { left: i, center: o, right: r };
}
function ma() {
  return 0;
}
function da(e) {
  return e === null ? NaN : +e;
}
const ha = fn(Le), pa = ha.right;
fn(da).center;
const ga = pa, va = Math.sqrt(50), ba = Math.sqrt(10), ya = Math.sqrt(2);
function He(e, t, n) {
  const a = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(a)), r = a / Math.pow(10, i), o = r >= va ? 10 : r >= ba ? 5 : r >= ya ? 2 : 1;
  let c, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, c = Math.round(e * u), s = Math.round(t * u), c / u < e && ++c, s / u > t && --s, u = -u) : (u = Math.pow(10, i) * o, c = Math.round(e / u), s = Math.round(t / u), c * u < e && ++c, s * u > t && --s), s < c && 0.5 <= n && n < 2 ? He(e, t, n * 2) : [c, s, u];
}
function xa(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const a = t < e, [i, r, o] = a ? He(t, e, n) : He(e, t, n);
  if (!(r >= i))
    return [];
  const c = r - i + 1, s = new Array(c);
  if (a)
    if (o < 0)
      for (let u = 0; u < c; ++u)
        s[u] = (r - u) / -o;
    else
      for (let u = 0; u < c; ++u)
        s[u] = (r - u) * o;
  else if (o < 0)
    for (let u = 0; u < c; ++u)
      s[u] = (i + u) / -o;
  else
    for (let u = 0; u < c; ++u)
      s[u] = (i + u) * o;
  return s;
}
function ut(e, t, n) {
  return t = +t, e = +e, n = +n, He(e, t, n)[2];
}
function Na(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, i = a ? ut(t, e, n) : ut(e, t, n);
  return (a ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ea(e, t) {
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
function Ee(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Oe(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t)
    n[a] = t[a];
  return n;
}
function ie() {
}
var me = 0.7, xe = 1 / me, be = "\\s*([+-]?\\d+)\\s*", _e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", J = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wa = /^#([0-9a-f]{3,8})$/, Ca = new RegExp(`^rgb\\(${be},${be},${be}\\)$`), Ma = new RegExp(`^rgb\\(${J},${J},${J}\\)$`), Ta = new RegExp(`^rgba\\(${be},${be},${be},${_e}\\)$`), _a = new RegExp(`^rgba\\(${J},${J},${J},${_e}\\)$`), Sa = new RegExp(`^hsl\\(${_e},${J},${J}\\)$`), Da = new RegExp(`^hsla\\(${_e},${J},${J},${_e}\\)$`), zt = {
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
Ee(ie, Se, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pt,
  // Deprecated! Use color.formatHex.
  formatHex: Pt,
  formatHex8: ka,
  formatHsl: Aa,
  formatRgb: Ut,
  toString: Ut
});
function Pt() {
  return this.rgb().formatHex();
}
function ka() {
  return this.rgb().formatHex8();
}
function Aa() {
  return mn(this).formatHsl();
}
function Ut() {
  return this.rgb().formatRgb();
}
function Se(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = wa.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? It(t) : n === 3 ? new F(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ze(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ze(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ca.exec(e)) ? new F(t[1], t[2], t[3], 1) : (t = Ma.exec(e)) ? new F(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ta.exec(e)) ? ze(t[1], t[2], t[3], t[4]) : (t = _a.exec(e)) ? ze(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Sa.exec(e)) ? jt(t[1], t[2] / 100, t[3] / 100, 1) : (t = Da.exec(e)) ? jt(t[1], t[2] / 100, t[3] / 100, t[4]) : zt.hasOwnProperty(e) ? It(zt[e]) : e === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function It(e) {
  return new F(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ze(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new F(e, t, n, a);
}
function Tt(e) {
  return e instanceof ie || (e = Se(e)), e ? (e = e.rgb(), new F(e.r, e.g, e.b, e.opacity)) : new F();
}
function st(e, t, n, a) {
  return arguments.length === 1 ? Tt(e) : new F(e, t, n, a ?? 1);
}
function F(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Ee(F, st, Oe(ie, {
  brighter(e) {
    return e = e == null ? xe : Math.pow(xe, e), new F(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new F(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(se(this.r), se(this.g), se(this.b), je(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Lt,
  // Deprecated! Use color.formatHex.
  formatHex: Lt,
  formatHex8: Oa,
  formatRgb: Ht,
  toString: Ht
}));
function Lt() {
  return `#${ue(this.r)}${ue(this.g)}${ue(this.b)}`;
}
function Oa() {
  return `#${ue(this.r)}${ue(this.g)}${ue(this.b)}${ue((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ht() {
  const e = je(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${se(this.r)}, ${se(this.g)}, ${se(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function je(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function se(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ue(e) {
  return e = se(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jt(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new V(e, t, n, a);
}
function mn(e) {
  if (e instanceof V)
    return new V(e.h, e.s, e.l, e.opacity);
  if (e instanceof ie || (e = Se(e)), !e)
    return new V();
  if (e instanceof V)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, i = Math.min(t, n, a), r = Math.max(t, n, a), o = NaN, c = r - i, s = (r + i) / 2;
  return c ? (t === r ? o = (n - a) / c + (n < a) * 6 : n === r ? o = (a - t) / c + 2 : o = (t - n) / c + 4, c /= s < 0.5 ? r + i : 2 - r - i, o *= 60) : c = s > 0 && s < 1 ? 0 : o, new V(o, c, s, e.opacity);
}
function ft(e, t, n, a) {
  return arguments.length === 1 ? mn(e) : new V(e, t, n, a ?? 1);
}
function V(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Ee(V, ft, Oe(ie, {
  brighter(e) {
    return e = e == null ? xe : Math.pow(xe, e), new V(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new V(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - a;
    return new F(
      Je(e >= 240 ? e - 240 : e + 120, i, a),
      Je(e, i, a),
      Je(e < 120 ? e + 240 : e - 120, i, a),
      this.opacity
    );
  },
  clamp() {
    return new V(Yt(this.h), Pe(this.s), Pe(this.l), je(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = je(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Yt(this.h)}, ${Pe(this.s) * 100}%, ${Pe(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Yt(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pe(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Je(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const dn = Math.PI / 180, hn = 180 / Math.PI, Ye = 18, pn = 0.96422, gn = 1, vn = 0.82521, bn = 4 / 29, ye = 6 / 29, yn = 3 * ye * ye, $a = ye * ye * ye;
function xn(e) {
  if (e instanceof Z)
    return new Z(e.l, e.a, e.b, e.opacity);
  if (e instanceof ne)
    return Nn(e);
  e instanceof F || (e = Tt(e));
  var t = tt(e.r), n = tt(e.g), a = tt(e.b), i = Ze((0.2225045 * t + 0.7168786 * n + 0.0606169 * a) / gn), r, o;
  return t === n && n === a ? r = o = i : (r = Ze((0.4360747 * t + 0.3850649 * n + 0.1430804 * a) / pn), o = Ze((0.0139322 * t + 0.0971045 * n + 0.7141733 * a) / vn)), new Z(116 * i - 16, 500 * (r - i), 200 * (i - o), e.opacity);
}
function mt(e, t, n, a) {
  return arguments.length === 1 ? xn(e) : new Z(e, t, n, a ?? 1);
}
function Z(e, t, n, a) {
  this.l = +e, this.a = +t, this.b = +n, this.opacity = +a;
}
Ee(Z, mt, Oe(ie, {
  brighter(e) {
    return new Z(this.l + Ye * (e ?? 1), this.a, this.b, this.opacity);
  },
  darker(e) {
    return new Z(this.l - Ye * (e ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
    return t = pn * Ke(t), e = gn * Ke(e), n = vn * Ke(n), new F(
      et(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
      et(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
      et(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
      this.opacity
    );
  }
}));
function Ze(e) {
  return e > $a ? Math.pow(e, 1 / 3) : e / yn + bn;
}
function Ke(e) {
  return e > ye ? e * e * e : yn * (e - bn);
}
function et(e) {
  return 255 * (e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
}
function tt(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Fa(e) {
  if (e instanceof ne)
    return new ne(e.h, e.c, e.l, e.opacity);
  if (e instanceof Z || (e = xn(e)), e.a === 0 && e.b === 0)
    return new ne(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * hn;
  return new ne(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function dt(e, t, n, a) {
  return arguments.length === 1 ? Fa(e) : new ne(e, t, n, a ?? 1);
}
function ne(e, t, n, a) {
  this.h = +e, this.c = +t, this.l = +n, this.opacity = +a;
}
function Nn(e) {
  if (isNaN(e.h))
    return new Z(e.l, 0, 0, e.opacity);
  var t = e.h * dn;
  return new Z(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Ee(ne, dt, Oe(ie, {
  brighter(e) {
    return new ne(this.h, this.c, this.l + Ye * (e ?? 1), this.opacity);
  },
  darker(e) {
    return new ne(this.h, this.c, this.l - Ye * (e ?? 1), this.opacity);
  },
  rgb() {
    return Nn(this).rgb();
  }
}));
var En = -0.14861, _t = 1.78277, St = -0.29227, Ge = -0.90649, De = 1.97294, Wt = De * Ge, qt = De * _t, Bt = _t * St - Ge * En;
function Ra(e) {
  if (e instanceof fe)
    return new fe(e.h, e.s, e.l, e.opacity);
  e instanceof F || (e = Tt(e));
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, i = (Bt * a + Wt * t - qt * n) / (Bt + Wt - qt), r = a - i, o = (De * (n - i) - St * r) / Ge, c = Math.sqrt(o * o + r * r) / (De * i * (1 - i)), s = c ? Math.atan2(o, r) * hn - 120 : NaN;
  return new fe(s < 0 ? s + 360 : s, c, i, e.opacity);
}
function ht(e, t, n, a) {
  return arguments.length === 1 ? Ra(e) : new fe(e, t, n, a ?? 1);
}
function fe(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Ee(fe, ht, Oe(ie, {
  brighter(e) {
    return e = e == null ? xe : Math.pow(xe, e), new fe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? me : Math.pow(me, e), new fe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * dn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), a = Math.cos(e), i = Math.sin(e);
    return new F(
      255 * (t + n * (En * a + _t * i)),
      255 * (t + n * (St * a + Ge * i)),
      255 * (t + n * (De * a)),
      this.opacity
    );
  }
}));
const Ve = (e) => () => e;
function wn(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function za(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Dt(e, t) {
  var n = t - e;
  return n ? wn(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Ve(isNaN(e) ? t : e);
}
function Pa(e) {
  return (e = +e) == 1 ? R : function(t, n) {
    return n - t ? za(t, n, e) : Ve(isNaN(t) ? n : t);
  };
}
function R(e, t) {
  var n = t - e;
  return n ? wn(e, n) : Ve(isNaN(e) ? t : e);
}
const pt = function e(t) {
  var n = Pa(t);
  function a(i, r) {
    var o = n((i = st(i)).r, (r = st(r)).r), c = n(i.g, r.g), s = n(i.b, r.b), u = R(i.opacity, r.opacity);
    return function(h) {
      return i.r = o(h), i.g = c(h), i.b = s(h), i.opacity = u(h), i + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Ua(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), i;
  return function(r) {
    for (i = 0; i < n; ++i)
      a[i] = e[i] * (1 - r) + t[i] * r;
    return a;
  };
}
function Ia(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function La(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, i = new Array(a), r = new Array(n), o;
  for (o = 0; o < a; ++o)
    i[o] = kt(e[o], t[o]);
  for (; o < n; ++o)
    r[o] = t[o];
  return function(c) {
    for (o = 0; o < a; ++o)
      r[o] = i[o](c);
    return r;
  };
}
function Ha(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function We(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ja(e, t) {
  var n = {}, a = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = kt(e[i], t[i]) : a[i] = t[i];
  return function(r) {
    for (i in n)
      a[i] = n[i](r);
    return a;
  };
}
var gt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nt = new RegExp(gt.source, "g");
function Ya(e) {
  return function() {
    return e;
  };
}
function Wa(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qa(e, t) {
  var n = gt.lastIndex = nt.lastIndex = 0, a, i, r, o = -1, c = [], s = [];
  for (e = e + "", t = t + ""; (a = gt.exec(e)) && (i = nt.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), c[o] ? c[o] += r : c[++o] = r), (a = a[0]) === (i = i[0]) ? c[o] ? c[o] += i : c[++o] = i : (c[++o] = null, s.push({ i: o, x: We(a, i) })), n = nt.lastIndex;
  return n < t.length && (r = t.slice(n), c[o] ? c[o] += r : c[++o] = r), c.length < 2 ? s[0] ? Wa(s[0].x) : Ya(t) : (t = s.length, function(u) {
    for (var h = 0, m; h < t; ++h)
      c[(m = s[h]).i] = m.x(u);
    return c.join("");
  });
}
function kt(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Ve(t) : (n === "number" ? We : n === "string" ? (a = Se(t)) ? (t = a, pt) : qa : t instanceof Se ? pt : t instanceof Date ? Ha : Ia(t) ? Ua : Array.isArray(t) ? La : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ja : We)(e, t);
}
function Cn(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Mn(e) {
  return function(t, n) {
    var a = e((t = ft(t)).h, (n = ft(n)).h), i = R(t.s, n.s), r = R(t.l, n.l), o = R(t.opacity, n.opacity);
    return function(c) {
      return t.h = a(c), t.s = i(c), t.l = r(c), t.opacity = o(c), t + "";
    };
  };
}
const Ba = Mn(Dt);
var Ga = Mn(R);
function Va(e, t) {
  var n = R((e = mt(e)).l, (t = mt(t)).l), a = R(e.a, t.a), i = R(e.b, t.b), r = R(e.opacity, t.opacity);
  return function(o) {
    return e.l = n(o), e.a = a(o), e.b = i(o), e.opacity = r(o), e + "";
  };
}
function Tn(e) {
  return function(t, n) {
    var a = e((t = dt(t)).h, (n = dt(n)).h), i = R(t.c, n.c), r = R(t.l, n.l), o = R(t.opacity, n.opacity);
    return function(c) {
      return t.h = a(c), t.c = i(c), t.l = r(c), t.opacity = o(c), t + "";
    };
  };
}
const Xa = Tn(Dt);
var Qa = Tn(R);
function _n(e) {
  return function t(n) {
    n = +n;
    function a(i, r) {
      var o = e((i = ht(i)).h, (r = ht(r)).h), c = R(i.s, r.s), s = R(i.l, r.l), u = R(i.opacity, r.opacity);
      return function(h) {
        return i.h = o(h), i.s = c(h), i.l = s(Math.pow(h, n)), i.opacity = u(h), i + "";
      };
    }
    return a.gamma = t, a;
  }(1);
}
const Ja = _n(Dt);
var Za = _n(R);
function Ka(e) {
  return function() {
    return e;
  };
}
function er(e) {
  return +e;
}
var Gt = [0, 1];
function ve(e) {
  return e;
}
function vt(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ka(isNaN(t) ? NaN : 0.5);
}
function tr(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function nr(e, t, n) {
  var a = e[0], i = e[1], r = t[0], o = t[1];
  return i < a ? (a = vt(i, a), r = n(o, r)) : (a = vt(a, i), r = n(r, o)), function(c) {
    return r(a(c));
  };
}
function ar(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, i = new Array(a), r = new Array(a), o = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < a; )
    i[o] = vt(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(c) {
    var s = ga(e, c, 1, a) - 1;
    return r[s](i[s](c));
  };
}
function rr(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ir() {
  var e = Gt, t = Gt, n = kt, a, i, r, o = ve, c, s, u;
  function h() {
    var f = Math.min(e.length, t.length);
    return o !== ve && (o = tr(e[0], e[f - 1])), c = f > 2 ? ar : nr, s = u = null, m;
  }
  function m(f) {
    return f == null || isNaN(f = +f) ? r : (s || (s = c(e.map(a), t, n)))(a(o(f)));
  }
  return m.invert = function(f) {
    return o(i((u || (u = c(t, e.map(a), We)))(f)));
  }, m.domain = function(f) {
    return arguments.length ? (e = Array.from(f, er), h()) : e.slice();
  }, m.range = function(f) {
    return arguments.length ? (t = Array.from(f), h()) : t.slice();
  }, m.rangeRound = function(f) {
    return t = Array.from(f), n = Cn, h();
  }, m.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : ve, h()) : o !== ve;
  }, m.interpolate = function(f) {
    return arguments.length ? (n = f, h()) : n;
  }, m.unknown = function(f) {
    return arguments.length ? (r = f, m) : r;
  }, function(f, w) {
    return a = f, i = w, h();
  };
}
function lr() {
  return ir()(ve, ve);
}
function or(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function qe(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Ne(e) {
  return e = qe(Math.abs(e)), e ? e[1] : NaN;
}
function cr(e, t) {
  return function(n, a) {
    for (var i = n.length, r = [], o = 0, c = e[0], s = 0; i > 0 && c > 0 && (s + c + 1 > a && (c = Math.max(1, a - s)), r.push(n.substring(i -= c, i + c)), !((s += c + 1) > a)); )
      c = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function ur(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var sr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Be(e) {
  if (!(t = sr.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new At({
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
Be.prototype = At.prototype;
function At(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
At.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fr(e) {
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
var Sn;
function mr(e, t) {
  var n = qe(e, t);
  if (!n)
    return e + "";
  var a = n[0], i = n[1], r = i - (Sn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = a.length;
  return r === o ? a : r > o ? a + new Array(r - o + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + qe(e, Math.max(0, t + r - 1))[0];
}
function Vt(e, t) {
  var n = qe(e, t);
  if (!n)
    return e + "";
  var a = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + a : a.length > i + 1 ? a.slice(0, i + 1) + "." + a.slice(i + 1) : a + new Array(i - a.length + 2).join("0");
}
const Xt = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: or,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Vt(e * 100, t),
  r: Vt,
  s: mr,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Qt(e) {
  return e;
}
var Jt = Array.prototype.map, Zt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function dr(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Qt : cr(Jt.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Qt : ur(Jt.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", c = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(m) {
    m = Be(m);
    var f = m.fill, w = m.align, C = m.sign, M = m.symbol, E = m.zero, $ = m.width, T = m.comma, S = m.precision, y = m.trim, x = m.type;
    x === "n" ? (T = !0, x = "g") : Xt[x] || (S === void 0 && (S = 12), y = !0, x = "g"), (E || f === "0" && w === "=") && (E = !0, f = "0", w = "=");
    var O = M === "$" ? n : M === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", P = M === "$" ? a : /[%p]/.test(x) ? o : "", d = Xt[x], v = /[defgprs%]/.test(x);
    S = S === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function N(p) {
      var U = O, D = P, q, le, pe;
      if (x === "c")
        D = d(p) + D, p = "";
      else {
        p = +p;
        var ge = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? s : d(Math.abs(p), S), y && (p = fr(p)), ge && +p == 0 && C !== "+" && (ge = !1), U = (ge ? C === "(" ? C : c : C === "-" || C === "(" ? "" : C) + U, D = (x === "s" ? Zt[8 + Sn / 3] : "") + D + (ge && C === "(" ? ")" : ""), v) {
          for (q = -1, le = p.length; ++q < le; )
            if (pe = p.charCodeAt(q), 48 > pe || pe > 57) {
              D = (pe === 46 ? i + p.slice(q + 1) : p.slice(q)) + D, p = p.slice(0, q);
              break;
            }
        }
      }
      T && !E && (p = t(p, 1 / 0));
      var oe = U.length + p.length + D.length, L = oe < $ ? new Array($ - oe + 1).join(f) : "";
      switch (T && E && (p = t(L + p, L.length ? $ - D.length : 1 / 0), L = ""), w) {
        case "<":
          p = U + p + D + L;
          break;
        case "=":
          p = U + L + p + D;
          break;
        case "^":
          p = L.slice(0, oe = L.length >> 1) + U + p + D + L.slice(oe);
          break;
        default:
          p = L + U + p + D;
          break;
      }
      return r(p);
    }
    return N.toString = function() {
      return m + "";
    }, N;
  }
  function h(m, f) {
    var w = u((m = Be(m), m.type = "f", m)), C = Math.max(-8, Math.min(8, Math.floor(Ne(f) / 3))) * 3, M = Math.pow(10, -C), E = Zt[8 + C / 3];
    return function($) {
      return w(M * $) + E;
    };
  }
  return {
    format: u,
    formatPrefix: h
  };
}
var Ue, Dn, kn;
hr({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function hr(e) {
  return Ue = dr(e), Dn = Ue.format, kn = Ue.formatPrefix, Ue;
}
function pr(e) {
  return Math.max(0, -Ne(Math.abs(e)));
}
function gr(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ne(t) / 3))) * 3 - Ne(Math.abs(e)));
}
function vr(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ne(t) - Ne(e)) + 1;
}
function br(e, t, n, a) {
  var i = Na(e, t, n), r;
  switch (a = Be(a ?? ",f"), a.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(r = gr(i, o)) && (a.precision = r), kn(a, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(r = vr(i, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = r - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(r = pr(i)) && (a.precision = r - (a.type === "%") * 2);
      break;
    }
  }
  return Dn(a);
}
function yr(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return xa(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var i = t();
    return br(i[0], i[i.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), i = 0, r = a.length - 1, o = a[i], c = a[r], s, u, h = 10;
    for (c < o && (u = o, o = c, c = u, u = i, i = r, r = u); h-- > 0; ) {
      if (u = ut(o, c, n), u === s)
        return a[i] = o, a[r] = c, t(a);
      if (u > 0)
        o = Math.floor(o / u) * u, c = Math.ceil(c / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, c = Math.floor(c * u) / u;
      else
        break;
      s = u;
    }
    return e;
  }, e;
}
function An() {
  var e = lr();
  return e.copy = function() {
    return rr(e, An());
  }, Ea.apply(e, arguments), yr(e);
}
function xr(e, t) {
  t.domain && ("nice" in e || "quantiles" in e || "padding" in e, e.domain(t.domain));
}
function Nr(e, t) {
  t.range && ("padding" in e, e.range(t.range));
}
function Er(e, t) {
  "align" in e && "align" in t && typeof t.align < "u" && e.align(t.align);
}
function wr(e, t) {
  "base" in e && "base" in t && typeof t.base < "u" && e.base(t.base);
}
function Cr(e, t) {
  "clamp" in e && "clamp" in t && typeof t.clamp < "u" && e.clamp(t.clamp);
}
function Mr(e, t) {
  "constant" in e && "constant" in t && typeof t.constant < "u" && e.constant(t.constant);
}
function Tr(e, t) {
  "exponent" in e && "exponent" in t && typeof t.exponent < "u" && e.exponent(t.exponent);
}
var Kt = {
  lab: Va,
  hcl: Xa,
  "hcl-long": Qa,
  hsl: Ba,
  "hsl-long": Ga,
  cubehelix: Ja,
  "cubehelix-long": Za,
  rgb: pt
};
function _r(e) {
  switch (e) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return Kt[e];
  }
  var t = e.type, n = e.gamma, a = Kt[t];
  return typeof n > "u" ? a : a.gamma(n);
}
function Sr(e, t) {
  if ("interpolate" in t && "interpolate" in e && typeof t.interpolate < "u") {
    var n = _r(t.interpolate);
    e.interpolate(n);
  }
}
var at = /* @__PURE__ */ new Date(), rt = /* @__PURE__ */ new Date();
function z(e, t, n, a) {
  function i(r) {
    return e(r = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r)), r;
  }
  return i.floor = function(r) {
    return e(r = /* @__PURE__ */ new Date(+r)), r;
  }, i.ceil = function(r) {
    return e(r = new Date(r - 1)), t(r, 1), e(r), r;
  }, i.round = function(r) {
    var o = i(r), c = i.ceil(r);
    return r - o < c - r ? o : c;
  }, i.offset = function(r, o) {
    return t(r = /* @__PURE__ */ new Date(+r), o == null ? 1 : Math.floor(o)), r;
  }, i.range = function(r, o, c) {
    var s = [], u;
    if (r = i.ceil(r), c = c == null ? 1 : Math.floor(c), !(r < o) || !(c > 0))
      return s;
    do
      s.push(u = /* @__PURE__ */ new Date(+r)), t(r, c), e(r);
    while (u < r && r < o);
    return s;
  }, i.filter = function(r) {
    return z(function(o) {
      if (o >= o)
        for (; e(o), !r(o); )
          o.setTime(o - 1);
    }, function(o, c) {
      if (o >= o)
        if (c < 0)
          for (; ++c <= 0; )
            for (; t(o, -1), !r(o); )
              ;
        else
          for (; --c >= 0; )
            for (; t(o, 1), !r(o); )
              ;
    });
  }, n && (i.count = function(r, o) {
    return at.setTime(+r), rt.setTime(+o), e(at), e(rt), Math.floor(n(at, rt));
  }, i.every = function(r) {
    return r = Math.floor(r), !isFinite(r) || !(r > 0) ? null : r > 1 ? i.filter(a ? function(o) {
      return a(o) % r === 0;
    } : function(o) {
      return i.count(0, o) % r === 0;
    }) : i;
  }), i;
}
const ke = 1e3, re = ke * 60, Ae = re * 60, Ot = Ae * 24, On = Ot * 7;
var $n = z(function(e) {
  e.setTime(e - e.getMilliseconds());
}, function(e, t) {
  e.setTime(+e + t * ke);
}, function(e, t) {
  return (t - e) / ke;
}, function(e) {
  return e.getUTCSeconds();
});
const Fn = $n;
$n.range;
var Rn = z(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ke);
}, function(e, t) {
  e.setTime(+e + t * re);
}, function(e, t) {
  return (t - e) / re;
}, function(e) {
  return e.getMinutes();
});
const Dr = Rn;
Rn.range;
var zn = z(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ke - e.getMinutes() * re);
}, function(e, t) {
  e.setTime(+e + t * Ae);
}, function(e, t) {
  return (t - e) / Ae;
}, function(e) {
  return e.getHours();
});
const kr = zn;
zn.range;
var Pn = z(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * re) / Ot,
  (e) => e.getDate() - 1
);
const Ar = Pn;
Pn.range;
function de(e) {
  return z(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * re) / On;
  });
}
var Un = de(0), Or = de(1), $r = de(2), Fr = de(3), Rr = de(4), zr = de(5), Pr = de(6);
Un.range;
Or.range;
$r.range;
Fr.range;
Rr.range;
zr.range;
Pr.range;
var In = z(function(e) {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setMonth(e.getMonth() + t);
}, function(e, t) {
  return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
}, function(e) {
  return e.getMonth();
});
const Ur = In;
In.range;
var $t = z(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
$t.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : z(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const Ir = $t;
$t.range;
var Ln = z(function(e) {
  e.setUTCSeconds(0, 0);
}, function(e, t) {
  e.setTime(+e + t * re);
}, function(e, t) {
  return (t - e) / re;
}, function(e) {
  return e.getUTCMinutes();
});
const Lr = Ln;
Ln.range;
var Hn = z(function(e) {
  e.setUTCMinutes(0, 0, 0);
}, function(e, t) {
  e.setTime(+e + t * Ae);
}, function(e, t) {
  return (t - e) / Ae;
}, function(e) {
  return e.getUTCHours();
});
const Hr = Hn;
Hn.range;
var jn = z(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Ot;
}, function(e) {
  return e.getUTCDate() - 1;
});
const jr = jn;
jn.range;
function he(e) {
  return z(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / On;
  });
}
var Yn = he(0), Yr = he(1), Wr = he(2), qr = he(3), Br = he(4), Gr = he(5), Vr = he(6);
Yn.range;
Yr.range;
Wr.range;
qr.range;
Br.range;
Gr.range;
Vr.range;
var Wn = z(function(e) {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCMonth(e.getUTCMonth() + t);
}, function(e, t) {
  return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, function(e) {
  return e.getUTCMonth();
});
const Xr = Wn;
Wn.range;
var Ft = z(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Ft.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : z(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const Qr = Ft;
Ft.range;
var Jr = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), Zr = "%Y-%m-%d %H:%M";
function Kr(e) {
  var t = e.tickFormat(1, Zr)(Jr);
  return t === "2020-02-02 03:04";
}
var en = {
  day: Ar,
  hour: kr,
  minute: Dr,
  month: Ur,
  second: Fn,
  week: Un,
  year: Ir
}, tn = {
  day: jr,
  hour: Hr,
  minute: Lr,
  month: Xr,
  second: Fn,
  week: Yn,
  year: Qr
};
function ei(e, t) {
  if ("nice" in t && typeof t.nice < "u" && "nice" in e) {
    var n = t.nice;
    if (typeof n == "boolean")
      n && e.nice();
    else if (typeof n == "number")
      e.nice(n);
    else {
      var a = e, i = Kr(a);
      if (typeof n == "string")
        a.nice(i ? tn[n] : en[n]);
      else {
        var r = n.interval, o = n.step, c = (i ? tn[r] : en[r]).every(o);
        c != null && a.nice(c);
      }
    }
  }
}
function ti(e, t) {
  "padding" in e && "padding" in t && typeof t.padding < "u" && e.padding(t.padding), "paddingInner" in e && "paddingInner" in t && typeof t.paddingInner < "u" && e.paddingInner(t.paddingInner), "paddingOuter" in e && "paddingOuter" in t && typeof t.paddingOuter < "u" && e.paddingOuter(t.paddingOuter);
}
function ni(e, t) {
  if (t.reverse) {
    var n = e.range().slice().reverse();
    "padding" in e, e.range(n);
  }
}
function ai(e, t) {
  "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e ? e.round(t.round) : "interpolate" in e && t.round && e.interpolate(Cn));
}
function ri(e, t) {
  "unknown" in e && "unknown" in t && typeof t.unknown < "u" && e.unknown(t.unknown);
}
function ii(e, t) {
  if ("zero" in t && t.zero === !0) {
    var n = e.domain(), a = n[0], i = n[1], r = i < a, o = r ? [i, a] : [a, i], c = o[0], s = o[1], u = [Math.min(0, c), Math.max(0, s)];
    e.domain(r ? u.reverse() : u);
  }
}
var li = [
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
], oi = {
  domain: xr,
  nice: ei,
  zero: ii,
  interpolate: Sr,
  round: ai,
  align: Er,
  base: wr,
  clamp: Cr,
  constant: Mr,
  exponent: Tr,
  padding: ti,
  range: Nr,
  reverse: ni,
  unknown: ri
};
function ci() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var a = new Set(t), i = li.filter(function(r) {
    return a.has(r);
  });
  return function(o, c) {
    return typeof c < "u" && i.forEach(function(s) {
      oi[s](o, c);
    }), o;
  };
}
var ui = ci("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function si(e) {
  return ui(An(), e);
}
const qn = b.createContext({});
function fi(e, t, n) {
  var a = this, i = b.useRef(null), r = b.useRef(0), o = b.useRef(null), c = b.useRef([]), s = b.useRef(), u = b.useRef(), h = b.useRef(e), m = b.useRef(!0);
  h.current = e;
  var f = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var w = !!n.leading, C = "trailing" in n ? !!n.trailing : !0, M = "maxWait" in n, E = M ? Math.max(+n.maxWait || 0, t) : null;
  b.useEffect(function() {
    return m.current = !0, function() {
      m.current = !1;
    };
  }, []);
  var $ = b.useMemo(function() {
    var T = function(d) {
      var v = c.current, N = s.current;
      return c.current = s.current = null, r.current = d, u.current = h.current.apply(N, v);
    }, S = function(d, v) {
      f && cancelAnimationFrame(o.current), o.current = f ? requestAnimationFrame(d) : setTimeout(d, v);
    }, y = function(d) {
      if (!m.current)
        return !1;
      var v = d - i.current, N = d - r.current;
      return !i.current || v >= t || v < 0 || M && N >= E;
    }, x = function(d) {
      return o.current = null, C && c.current ? T(d) : (c.current = s.current = null, u.current);
    }, O = function() {
      var d = Date.now();
      if (y(d))
        return x(d);
      if (m.current) {
        var v = d - i.current, N = d - r.current, p = t - v, U = M ? Math.min(p, E - N) : p;
        S(O, U);
      }
    }, P = function() {
      for (var d = [], v = 0; v < arguments.length; v++)
        d[v] = arguments[v];
      var N = Date.now(), p = y(N);
      if (c.current = d, s.current = a, i.current = N, p) {
        if (!o.current && m.current)
          return r.current = i.current, S(O, t), w ? T(i.current) : u.current;
        if (M)
          return S(O, t), T(i.current);
      }
      return o.current || S(O, t), u.current;
    };
    return P.cancel = function() {
      o.current && (f ? cancelAnimationFrame(o.current) : clearTimeout(o.current)), r.current = 0, c.current = i.current = s.current = o.current = null;
    }, P.isPending = function() {
      return !!o.current;
    }, P.flush = function() {
      return o.current ? x(Date.now()) : u.current;
    }, P;
  }, [w, M, t, E, C, f]);
  return $;
}
function mi(e, t) {
  return e === t;
}
function nn(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function di(e) {
  var t = b.useState(nn(e)), n = t[0], a = t[1], i = b.useCallback(function(r) {
    return a(nn(r));
  }, []);
  return [n, i];
}
function hi(e, t, n) {
  var a = n && n.equalityFn || mi, i = di(e), r = i[0], o = i[1], c = fi(b.useCallback(function(u) {
    return o(u);
  }, [o]), t, n), s = b.useRef(e);
  return b.useEffect(function() {
    a(s.current, e) || (c(e), s.current = e);
  }, [e, c, a]), [r, { cancel: c.cancel, isPending: c.isPending, flush: c.flush }];
}
const W = b.memo(({ label: e, section: t = null, subsection: n = null, fieldName: a, updateField: i, value: r, type: o = "input", tooltip: c, placeholder: s, i: u = null, min: h = null, max: m = null, className: f, ...w }) => {
  const [C, M] = b.useState(r), [E] = hi(C, 500);
  b.useEffect(() => {
    typeof E == "string" && r !== E && i && i(t, n, a, E, u);
  }, [E, t, n, a, u, r, i]);
  let $ = n ? `${t}-${n}-${a}` : `${t}-${n}-${a}`;
  const T = (x) => {
    o !== "number" || h === null || !x.target.value || parseFloat(h) <= parseFloat(x.target.value) & parseFloat(m) >= parseFloat(x.target.value) ? M(x.target.value) : M(h.toString());
  };
  let S = {
    className: `cove-input${f ? " " + f : ""}`,
    type: o,
    name: $,
    placeholder: s,
    onChange: T,
    value: C,
    ...w
  }, y = o === "textarea" ? /* @__PURE__ */ l.createElement("textarea", { ...S }) : /* @__PURE__ */ l.createElement("input", { ...S });
  return /* @__PURE__ */ l.createElement(l.Fragment, null, e && /* @__PURE__ */ l.createElement("label", { className: "cove-input__label" }, e), c, y);
}), G = b.memo(({ label: e, value: t, options: n, fieldName: a, section: i = null, subsection: r = null, required: o = !1, updateField: c, initial: s, ...u }) => {
  let h = "";
  if (Array.isArray(n))
    h = n.map((m) => /* @__PURE__ */ l.createElement("option", { value: m, key: m }, m));
  else {
    h = [];
    for (const [m, f] of Object.entries(n))
      h.push(
        /* @__PURE__ */ l.createElement("option", { value: m, key: m }, f)
      );
  }
  return s && h.unshift(
    /* @__PURE__ */ l.createElement("option", { value: "", key: "initial" }, s)
  ), /* @__PURE__ */ l.createElement("label", { style: { width: "100%", display: "block" } }, e && /* @__PURE__ */ l.createElement("span", { className: "edit-label cove-input__label" }, e), /* @__PURE__ */ l.createElement(
    "select",
    {
      className: o && !t ? "warning" : "",
      name: a,
      value: t,
      onChange: (m) => {
        c(i, r, a, m.target.value);
      },
      ...u
    },
    h
  ));
}), pi = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" })), te = b.memo(
  ({
    label: e,
    size: t = "small",
    activeColor: n = null,
    activeCheckColor: a = null,
    section: i = null,
    subsection: r = null,
    fieldName: o,
    updateField: c,
    value: s,
    i: u = null,
    min: h = null,
    max: m = null,
    ...f
  }) => {
    const [w, C] = b.useState(s);
    let M = r ? `${i}-${r}-${o}` : `${i}-${r}-${o}`;
    return b.useEffect(() => {
      s !== void 0 && s !== w && C(s);
    }, [s]), b.useEffect(() => {
      s !== void 0 && s !== w && c && c(i, r, o, w, u);
    }, [w]), /* @__PURE__ */ l.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ l.createElement("label", null, e), /* @__PURE__ */ l.createElement("div", { className: "cove-input__checkbox" + (t === "small" ? "--small" : t === "large" ? "--large" : "") + (w ? " active" : ""), onClick: () => C(!w) }, /* @__PURE__ */ l.createElement("div", { className: `cove-input__checkbox-box${n ? " custom-color" : ""}`, style: w && n ? { backgroundColor: n } : null }, /* @__PURE__ */ l.createElement(pi, { className: "cove-input__checkbox-check", style: { fill: a || "#025eaa" } })), /* @__PURE__ */ l.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: M, checked: w || !1, readOnly: !0 })));
  }
);
te.propTypes = {
  label: H.string,
  size: H.oneOf(["small", "medium", "large"]),
  activeColor: H.string,
  activeCheckColor: H.string
};
const gi = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), vi = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
b.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: i = null, tooltip: r, updateField: o, ...c }) => /* @__PURE__ */ l.createElement("label", { className: "checkbox" }, /* @__PURE__ */ l.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: () => {
      o(a, i, n, !t);
    },
    ...c
  }
), /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, e), /* @__PURE__ */ l.createElement("span", { className: "cove-icon" }, r)));
const bi = b.memo((e) => {
  const { config: t, updateConfig: n, loading: a, data: i, setParentConfig: r, isDashboard: o } = b.useContext(qn), [c, s] = b.useState(!0), [u, h] = b.useState(!1), m = (d) => d ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, f = (d, v, N, p) => {
    if (d === null && v === null) {
      let le = { ...t, [N]: p };
      N === "filterColumn" && (le.filterValue = ""), n(le);
      return;
    }
    const U = Array.isArray(t[d]);
    let D = U ? [...t[d], p] : { ...t[d], [N]: p };
    v !== null && (U ? (D = [...t[d]], D[v] = { ...D[v], [N]: p }) : typeof p == "string" ? D[v] = p : D = { ...t[d], [v]: { ...t[d][v], [N]: p } });
    let q = { ...t, [d]: D };
    n(q);
  };
  b.useEffect(() => {
    if (r) {
      const d = E();
      r(d);
    }
  }, [t]), b.useEffect(() => {
    if (!u) {
      let d = { ...t };
      delete d.newViz, n(d);
    }
  }, []), b.useEffect(() => {
    let d = ["<", ">", "<=", ">="];
    t.dataConditionalComparate !== "" ? d.indexOf(t.dataConditionalOperator) > -1 && isNaN(t.dataConditionalComparate) ? n({ ...t, invalidComparate: !0 }) : t.invalidComparate && n({ ...t, invalidComparate: !1 }) : n({ ...t, invalidComparate: !1 });
  }, [t.dataConditionalOperator, t.dataConditionalComparate]);
  const w = () => {
    s(!c);
  }, C = () => /* @__PURE__ */ l.createElement("section", { className: "waiting" }, /* @__PURE__ */ l.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ l.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ l.createElement("p", null, t.runtime.editorErrorMessage))), M = () => {
    const d = (v) => {
      v.preventDefault();
      let N = { ...t };
      delete N.newViz, n(N);
    };
    return /* @__PURE__ */ l.createElement("section", { className: "waiting" }, /* @__PURE__ */ l.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ l.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ l.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ l.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: d }, "I'm Done")));
  }, E = () => {
    let d = JSON.parse(JSON.stringify(t));
    return delete d.newViz, delete d.runtime, d;
  }, $ = () => {
    let d = t.filters ? [...t.filters] : [];
    d.push({ values: [] }), n({ ...t, filters: d });
  }, T = (d) => {
    let v = [...t.filters];
    v.splice(d, 1), n({ ...t, filters: v });
  }, S = (d, v, N) => {
    let p = [...t.filters];
    p[v][d] = N, n({ ...t, filters: p });
  }, y = (d = !0) => {
    let v = {};
    return i.map((N) => Object.keys(N).forEach((p) => v[p] = !0)), Object.keys(v);
  }, x = (d) => {
    let v = [];
    const N = t.filters[d].columnName;
    return i && N && (i.forEach(function(p) {
      p[N] !== void 0 && v.indexOf(p[N]) === -1 && v.push(p[N]);
    }), v.sort()), v;
  }, O = ["Waffle", "Gauge"], P = /* @__PURE__ */ l.createElement(Re, null, /* @__PURE__ */ l.createElement(Re.Section, { title: "General" }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ l.createElement("div", { style: { width: "100%", display: "block" }, className: "cove-input-group" }, /* @__PURE__ */ l.createElement(G, { value: t.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: f, options: O, className: "cove-input" }), t.visualizationType === "Gauge" && /* @__PURE__ */ l.createElement(G, { value: t.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: f, options: ["Linear"], className: "cove-input" }))), /* @__PURE__ */ l.createElement(W, { value: t.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: f }), /* @__PURE__ */ l.createElement(
    W,
    {
      type: "textarea",
      value: t.content,
      fieldName: "content",
      label: "Message",
      updateField: f,
      tooltip: /* @__PURE__ */ l.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(ee.Target, null, /* @__PURE__ */ l.createElement(Qe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(ee.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ l.createElement(
    W,
    {
      value: t.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Chart Subtext or Citation",
      updateField: f,
      tooltip: /* @__PURE__ */ l.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(ee.Target, null, /* @__PURE__ */ l.createElement(Qe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(ee.Content, null, /* @__PURE__ */ l.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  )), /* @__PURE__ */ l.createElement(Re.Section, { icon: !t.dataColumn || !t.dataFunction ? /* @__PURE__ */ l.createElement(gi, { width: "15", className: "warning-icon" }) : "", title: "Data" }, /* @__PURE__ */ l.createElement("h4", { style: { fontWeight: "600" } }, "Numerator"), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ l.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ l.createElement(G, { style: m(!t.dataColumn), value: t.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: f, initial: "Select", options: y(), className: "cove-input" })), /* @__PURE__ */ l.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ l.createElement(G, { style: m(!t.dataFunction), value: t.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: f, initial: "Select", options: rn, className: "cove-input" })), /* @__PURE__ */ l.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label cove-input__label" }, "Data Conditional")), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(G, { value: t.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: f, initial: "Select", options: y(), className: "cove-input" })), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(G, { value: t.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: f, initial: "Select", options: ki, className: "cove-input" })), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(W, { value: t.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: f, className: t.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } })))), t.invalidComparate && /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-error" }, "Non-numerical comparate values can only be used with = or ≠.")), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement("h4", { style: { fontWeight: "600" } }, "Denominator")), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ l.createElement("label", { className: "cove-accordion__panel-label--inline" }, "Select from data"), /* @__PURE__ */ l.createElement(te, { size: "small", value: t.customDenom, fieldName: "customDenom", updateField: f })))), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section" }, !t.customDenom && /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-row align-center" }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(W, { value: t.dataDenom, fieldName: "dataDenom", updateField: f })), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ l.createElement("label", { className: "cove-accordion__panel-label--muted" }, "default (100)"))), t.customDenom && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(G, { value: t.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: f, initial: "Select", options: y() }), /* @__PURE__ */ l.createElement(G, { value: t.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: f, initial: "Select", options: rn }))), /* @__PURE__ */ l.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ l.createElement("li", { className: "three-col" }, /* @__PURE__ */ l.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ l.createElement(W, { value: t.prefix, fieldName: "prefix", label: "Prefix", updateField: f })), /* @__PURE__ */ l.createElement("div", { style: { marginRight: "1rem" } }, /* @__PURE__ */ l.createElement(W, { value: t.suffix, fieldName: "suffix", label: "Suffix", updateField: f })), /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement(W, { type: "number", value: t.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: f })))), t.visualizationType === "Gauge" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ l.createElement(W, { inline: !0, size: "small", value: t.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: f }), /* @__PURE__ */ l.createElement(te, { inline: !0, size: "small", value: t.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: f }), /* @__PURE__ */ l.createElement(te, { inline: !0, size: "small", label: "Show Denominator", value: t.showDenominator, fieldName: "showDenominator", updateField: f }))), /* @__PURE__ */ l.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ l.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ l.createElement(ee, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(ee.Target, null, /* @__PURE__ */ l.createElement(Qe, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ l.createElement(ee.Content, null, /* @__PURE__ */ l.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ l.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((d, v) => /* @__PURE__ */ l.createElement("fieldset", { className: "edit-block", key: v }, /* @__PURE__ */ l.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        T(v);
      }
    },
    "Remove"
  ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ l.createElement(
    "select",
    {
      value: d.columnName,
      onChange: (N) => {
        S("columnName", v, N.target.value);
      }
    },
    /* @__PURE__ */ l.createElement("option", { value: "" }, "- Select Option -"),
    y().map((N, p) => /* @__PURE__ */ l.createElement("option", { value: N, key: p }, N))
  )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ l.createElement(
    "select",
    {
      value: d.columnValue,
      onChange: (N) => {
        S("columnValue", v, N.target.value);
      }
    },
    /* @__PURE__ */ l.createElement("option", { value: "" }, "- Select Option -"),
    x(v).map((N, p) => /* @__PURE__ */ l.createElement("option", { value: N, key: p }, N))
  ))))), /* @__PURE__ */ l.createElement(ta, { onClick: $, fluid: !0 }, "Add Filter")), /* @__PURE__ */ l.createElement(Re.Section, { title: "Visual" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ l.createElement(G, { value: t.shape, fieldName: "shape", label: "Shape", updateField: f, options: ["circle", "square", "person"], className: "cove-input" }), t.visualizationType !== "Gauge" && /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" } }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(W, { type: "number", value: t.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: f })), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(W, { type: "number", value: t.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: f }))), /* @__PURE__ */ l.createElement("div", { className: "cove-input-group" }, t.visualizationType !== "Gauge" && /* @__PURE__ */ l.createElement(G, { value: t.orientation, fieldName: "orientation", label: "Layout", updateField: f, className: "cove-input", options: ["horizontal", "vertical"] })), /* @__PURE__ */ l.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading cove-input__label" }, "Data Point Font Size")), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center" }, /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col" }, /* @__PURE__ */ l.createElement(W, { type: "number", value: t.fontSize, fieldName: "fontSize", updateField: f })), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ l.createElement("label", { className: "accordion__panel-label--muted" }, " ", t.visualizationType === "Gauge" ? " default (16px)" : " default (50px)")))), /* @__PURE__ */ l.createElement(G, { value: t.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: f, options: ["small", "medium", "large"], className: "cove-input" }), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label cove-input__label" }, "Theme"), /* @__PURE__ */ l.createElement("ul", { className: "color-palette" }, vi.map((d) => /* @__PURE__ */ l.createElement(
    "li",
    {
      title: d,
      key: d,
      onClick: () => {
        n({ ...t, theme: d });
      },
      className: t.theme === d ? "selected " + d : d
    }
  )))), /* @__PURE__ */ l.createElement("div", { className: "cove-accordion__panel-section reverse-labels" }, /* @__PURE__ */ l.createElement(te, { inline: !0, size: "small", value: t.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: f }), /* @__PURE__ */ l.createElement(te, { inline: !0, size: "small", value: t.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: f }), /* @__PURE__ */ l.createElement(te, { size: "small", value: t.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }), /* @__PURE__ */ l.createElement(te, { size: "small", value: t.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }), /* @__PURE__ */ l.createElement(te, { size: "small", value: t.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f }))));
  return a ? null : /* @__PURE__ */ l.createElement(un, { component: "EditorPanel" }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor" }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ l.createElement(C, null), t.newViz && u && /* @__PURE__ */ l.createElement(M, null), /* @__PURE__ */ l.createElement("button", { className: "cove-editor--toggle" + (c ? "" : " collapsed"), title: c ? "Collapse Editor" : "Expand Editor", onClick: w }), /* @__PURE__ */ l.createElement("section", { className: "cove-editor__panel" + (c ? "" : " hidden") }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor__panel-container" }, /* @__PURE__ */ l.createElement("h2", { className: "cove-editor__heading" }, "Configure Chart"), /* @__PURE__ */ l.createElement("section", { className: "cove-editor__content" }, P))), /* @__PURE__ */ l.createElement("div", { className: "cove-editor__content" }, /* @__PURE__ */ l.createElement("div", { className: "cove-editor__content-wrap" }, e.children))));
}), Te = {
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
  visual: {
    border: !0,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  }
};
function yi(e, t) {
  const n = new CustomEvent(e, { detail: t });
  document.dispatchEvent(n);
}
function xi(e, t = null) {
  var M, E, $, T, S, y, x;
  const { legend: n } = e;
  let a = "", i = "";
  e.lineDatapointStyle === "hover" && (a = " chart-line--hover"), e.lineDatapointStyle === "always show" && (a = " chart-line--always"), e.barHasBorder === "false" && (i = " chart-bar--no-border");
  let r = ["cove-component__inner"], o = ["cove-component__content"];
  const { visualizationType: c, title: s, showTitle: u } = e;
  (c === "Spark Line" || c === "chart") && s && u && o.push("component--has-title"), e.showTitle && o.push("component--has-title"), e.title && e.visualizationType !== "chart" && e.visualizationType !== "Spark Line" && o.push("component--has-title"), e.subtext && r.push("component--has-subtext"), e.biteStyle && r.push(`bite__style--${e.biteStyle}`), (M = e.general) != null && M.isCompactStyle && r.push("component--isCompactStyle"), !((E = e.visual) != null && E.border) && o.push("no-borders"), e.visualizationType === "Spark Line" && o.push("sparkline"), ($ = e.visual) != null && $.borderColorTheme && o.push("component--has-borderColorTheme"), (T = e.visual) != null && T.accent && o.push("component--has-accent"), (S = e.visual) != null && S.background && o.push("component--has-background"), (y = e.visual) != null && y.hideBackgroundColor && o.push("component--hideBackgroundColor"), e.shadow && r.push("shadow"), (x = e == null ? void 0 : e.visual) != null && x.roundedBorders && r.push("bite--has-rounded-borders");
  let h = {
    width: "100%"
  };
  const m = () => (n == null ? void 0 : n.position) === "side" && (n != null && n.singleColumn) ? "legend-container__ul--single-column" : (n == null ? void 0 : n.position) === "bottom" && (n != null && n.singleRow) ? "single-row" : n != null && n.verticalSorted && !(n != null && n.singleRow) ? "vertical-sorted" : "", f = () => {
    const O = ["legend-container__ul"];
    return O.push(m()), O;
  }, C = {
    aside: [`${n == null ? void 0 : n.position}`, `${m()}`, "cdcdataviz-sr-focusable", `${t}`],
    section: ["legend-container"],
    ul: f(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    resetButton: ["legend-container__reset-button", "btn", "clear"],
    description: ["legend-container__description"]
  };
  return { innerContainerClasses: r, contentClasses: o, barBorderClass: i, lineDatapointClass: a, sparkLineStyles: h, legendClasses: C };
}
const Ni = async (e) => {
  let n = { ...e };
  return n.validated = 4.23, n;
}, Ei = async (e) => {
  let t = e;
  return t = await Ni(t), t;
};
const an = {
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
}, wi = ({ config: e, isEditor: t, link: n }) => {
  let { title: a, theme: i, shape: r, nodeWidth: o, nodeSpacer: c, prefix: s, suffix: u, subtext: h, content: m, orientation: f, filters: w, dataColumn: C, dataFunction: M, dataConditionalColumn: E, dataConditionalOperator: $, dataConditionalComparate: T, customDenom: S, dataDenom: y, dataDenomColumn: x, dataDenomFunction: O, roundToPlace: P } = e;
  const d = b.useCallback(() => {
    if (!C || !M)
      return "";
    const K = (g) => {
      if (Array.isArray(g) && g.length > 0) {
        const A = g.reduce((B, ae) => B + ae);
        return _(A);
      }
    }, j = (g) => {
      const A = g.length > 1 ? g.reduce((B, ae) => B + ae) / g.length : g[0];
      return _(A);
    }, X = (g) => {
      let A = {}, B = -1 / 0;
      for (let Y = 0; Y < g.length; Y++)
        A[g[Y]] ? A[g[Y]] += 1 : A[g[Y]] = 1, A[g[Y]] > B && (B = A[g[Y]]);
      let ae = [];
      for (let Y in A)
        A[Y] === B && ae.push(Y);
      return ae;
    }, we = (g) => {
      const A = Math.floor(g.length / 2), B = [...g].sort((Y, Qn) => Y - Qn), ae = g.length % 2 !== 0 ? B[A] : (B[A - 1] + B[A]) / 2;
      return _(ae);
    }, _ = (g) => (P !== "" && !isNaN(P) && Number(P) > -1 && (g = Number(g).toFixed(Number(P))), g);
    let k = e.data;
    w.map((g) => {
      if (g.columnName && g.columnValue)
        k = k.filter(function(A) {
          return A[g.columnName] === g.columnValue;
        });
      else
        return !1;
    });
    let I = [];
    if (E !== "" && $ !== "" && T !== "")
      switch ($) {
        case "<":
          I = k.filter((g) => g[E] < T);
          break;
        case ">":
          I = k.filter((g) => g[E] > T);
          break;
        case "<=":
          I = k.filter((g) => g[E] <= T);
          break;
        case ">=":
          I = k.filter((g) => g[E] >= T);
          break;
        case "=":
          isNaN(Number(T)) ? I = k.filter((g) => String(g[E]) === T) : I = k.filter((g) => g[E] === T);
          break;
        case "≠":
          isNaN(Number(T)) ? I = k.filter((g) => String(g[E]) !== T) : I = k.filter((g) => g[E] !== T);
          break;
        default:
          I = [];
      }
    const Ce = I.length > 0 ? I.map((g) => g[C]) : k.map((g) => g[C]), $e = k.map((g) => g[x]);
    let Q = Ce.filter((g) => {
      let A = !1;
      return (Number(g) || Number.isFinite(Number(g))) && (A = !0), A;
    }).map(Number), ce = $e.filter((g) => {
      let A = !1;
      return (Number(g) || Number.isFinite(Number(g))) && (A = !0), A;
    }).map(Number), Xe = "";
    Xe = {
      [yt]: String(Q.length),
      [Ct]: String(K(Q)),
      [xt]: String(j(Q)),
      [Nt]: we(Q).toString(),
      [bt]: Math.max(...Q).toString(),
      [Et]: Math.min(...Q).toString(),
      [wt]: X(Q).join(", ")
    }[M];
    let Fe = null;
    const Xn = {
      [yt]: String(ce.length),
      [Ct]: String(K(ce)),
      [xt]: String(j(ce)),
      [Nt]: we(ce).toString(),
      [bt]: Math.max(...ce).toString(),
      [Et]: Math.min(...ce).toString(),
      [wt]: X(ce).join(", ")
    };
    return S && x && O ? Fe = Xn[O] : Fe = y > 0 ? y : 100, [_(Xe / Fe * 100), Fe, _(Xe)];
  }, [C, M, e.data, w, E, $, T, S, x, O, P, y]), [v, N, p] = d(), U = b.useCallback(() => {
    let K = [], j = parseInt(o, 10), X = parseInt(c, 10);
    const we = (_, k, I, Ce, $e) => {
      let Q = k === "x" ? I % 10 : k === "y" ? Math.floor(I / 10) : null;
      return _ === "circle" ? Q * (Ce + $e) + Ce / 2 : Q * (Ce + $e);
    };
    for (let _ = 0; _ < 100; _++) {
      let k = {
        shape: r,
        x: we(r, "x", _, j, X),
        y: we(r, "y", _, j, X),
        color: an[i],
        opacity: _ + 1 > 100 - Math.round(v) ? 1 : 0.35
      };
      K.push(k);
    }
    return K.map(
      (_, k) => _.shape === "square" ? /* @__PURE__ */ l.createElement(Rt, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * k}ms` }, x: _.x, y: _.y, width: j, height: j, fill: _.color, fillOpacity: _.opacity, key: k }) : _.shape === "person" ? /* @__PURE__ */ l.createElement(
        "path",
        {
          style: { transform: `translateX(${_.x + j / 4}px) translateY(${_.y}px) scale(${j / 20})` },
          fill: _.color,
          fillOpacity: _.opacity,
          key: k,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        }
      ) : /* @__PURE__ */ l.createElement(sa, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * k}ms` }, cx: _.x, cy: _.y, r: j / 2, fill: _.color, fillOpacity: _.opacity, key: k })
    );
  }, [i, v, r, o, c]), D = b.useCallback(() => o * 10 + c * 9, [o, c]);
  let q = e.fontSize ? { fontSize: e.fontSize + "px" } : null;
  const { innerContainerClasses: le, contentClasses: pe } = xi(e), ge = (K, j = !1) => {
    j && console.log("handleWaffleChartAriaLabels Testing On:", K);
    try {
      let X = "Waffle chart";
      return K.title && (X += ` with the title: ${K.title}`), X;
    } catch (X) {
      console.error(X.message);
    }
  }, oe = "100%", L = 35, Gn = si({
    domain: [0, N],
    range: [0, oe]
  }), Vn = an[i];
  return /* @__PURE__ */ l.createElement("div", { className: le.join(" ") }, /* @__PURE__ */ l.createElement(l.Fragment, null, a && /* @__PURE__ */ l.createElement("header", { className: `cove-component__header chart-title ${e.theme}`, "aria-hidden": "true" }, Me(a)), /* @__PURE__ */ l.createElement("div", { className: pe.join(" ") }, /* @__PURE__ */ l.createElement("div", { className: "cove-component__content-wrap" }, e.visualizationType === "Gauge" && /* @__PURE__ */ l.createElement("div", { className: `cove-gauge-chart${e.overallFontSize ? " font-" + e.overallFontSize : ""}` }, /* @__PURE__ */ l.createElement("div", { className: "cove-gauge-chart__chart" }, /* @__PURE__ */ l.createElement("div", { style: q }, s || " ", e.showPercent ? v : p, u ? u + " " : " ", " ", e.valueDescription, " ", e.showDenominator && N ? N : " "), /* @__PURE__ */ l.createElement("div", { className: "cove-gauge-chart__data--text introText" }, Me(m)), /* @__PURE__ */ l.createElement("svg", { height: L, width: "100%" }, /* @__PURE__ */ l.createElement(lt, null, /* @__PURE__ */ l.createElement("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: oe, height: L, fill: "#fff" }), /* @__PURE__ */ l.createElement(Rt, { x: 0, y: 0, width: Gn(p), height: L, fill: Vn }))), /* @__PURE__ */ l.createElement("div", { className: "cove-gauge-chart__subtext subtext" }, Me(h)))), e.visualizationType !== "Gauge" && /* @__PURE__ */ l.createElement("div", { className: `cove-waffle-chart${f === "vertical" ? " cove-waffle-chart--verical" : ""}${e.overallFontSize ? " font-" + e.overallFontSize : ""}` }, /* @__PURE__ */ l.createElement("div", { className: "cove-waffle-chart__chart", style: { width: D() } }, /* @__PURE__ */ l.createElement("svg", { width: D(), height: D(), role: "img", "aria-label": ge(e), tabIndex: 0 }, /* @__PURE__ */ l.createElement(lt, null, U()))), (v || m) && /* @__PURE__ */ l.createElement("div", { className: "cove-waffle-chart__data" }, v && /* @__PURE__ */ l.createElement("div", { className: "cove-waffle-chart__data--primary", style: q }, s || null, v, u || null), /* @__PURE__ */ l.createElement("div", { className: "cove-waffle-chart__data--text" }, Me(m)), h && /* @__PURE__ */ l.createElement("div", { className: "cove-waffle-chart__subtext subtext" }, Me(h)))))), n && n));
}, Bn = ({ configUrl: e, config: t, isDashboard: n = !1, isEditor: a = !1, setConfig: i }) => {
  const [r, o] = b.useState({ ...Te }), [c, s] = b.useState(!0), [u, h] = b.useState("lg"), [m, f] = b.useState(!1), [w, C] = b.useState(), M = (y) => {
    Object.keys(Te).forEach((x) => {
      y[x] && typeof y[x] == "object" && !Array.isArray(y[x]) && (y[x] = { ...Te[x], ...y[x] });
    }), y.runtime = {}, y.runtime.uniqueId = Date.now(), y.runtime.editorErrorMessage = "", o(y);
  }, E = b.useCallback(async () => {
    let y = t || await (await fetch(e)).json(), x = y.data ?? {};
    y.dataUrl && (x = await Jn(y.dataUrl)), y.data = x;
    const O = { ...await Ei(y) };
    M({ ...Te, ...O }), s(!1);
  }, []), $ = new Zn((y) => {
    for (let x of y) {
      let O = Kn(x.contentRect.width * 2);
      h(O);
    }
  }), T = b.useCallback((y) => {
    y !== null && $.observe(y), C(y);
  }, []);
  b.useEffect(() => {
    E().catch((y) => console.log(y));
  }, []), b.useEffect(() => {
    r && !m && w && (yi("cove_loaded", { config: r }), f(!0));
  }, [r, w]), b.useEffect(() => {
    E().catch((y) => console.log(y));
  }, []), t && b.useEffect(() => {
    t.dataUrl || M({ ...Te, ...t });
  }, [t.data]);
  let S = /* @__PURE__ */ l.createElement(ea, null);
  if (c === !1) {
    let y = ["cove", "cdc-open-viz-module", "type-waffle-chart", u, r.theme, "font-" + r.overallFontSize];
    a && y.push("is-editor");
    let x = ["cove-component", "waffle-chart"], O = /* @__PURE__ */ l.createElement("div", { className: `${x.join(" ")}`, ref: T }, /* @__PURE__ */ l.createElement(wi, { config: r, isEditor: a }));
    S = /* @__PURE__ */ l.createElement("div", { className: y.join(" ") }, a && /* @__PURE__ */ l.createElement(bi, null, O), !a && O);
  }
  return /* @__PURE__ */ l.createElement(un, { component: "WaffleChart" }, /* @__PURE__ */ l.createElement(qn.Provider, { value: { config: r, updateConfig: M, loading: c, data: r.data, setParentConfig: i, isDashboard: n, outerContainerRef: T } }, S));
}, bt = "Max", yt = "Count", xt = "Mean (Average)", Nt = "Median", Et = "Min", wt = "Mode", Ct = "Sum", rn = [yt, bt, xt, Nt, Et, wt, Ct], Ci = "<", Mi = ">", Ti = "<=", _i = ">=", Si = "=", Di = "≠", ki = [Ci, Mi, Ti, _i, Si, Di], Li = {
  title: "Components/Templates/WaffleChart",
  component: Bn
}, Ie = {
  args: {
    config: {
      shape: "square",
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
      theme: "blue"
    }
  },
  render: (e) => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Bn, { ...e }))
};
var ln, on, cn;
Ie.parameters = {
  ...Ie.parameters,
  docs: {
    ...(ln = Ie.parameters) == null ? void 0 : ln.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      shape: 'square',
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
      theme: 'blue'
    }
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(cn = (on = Ie.parameters) == null ? void 0 : on.docs) == null ? void 0 : cn.source
    }
  }
};
const Hi = ["Primary"];
export {
  Ie as Primary,
  Hi as __namedExportsOrder,
  Li as default
};
