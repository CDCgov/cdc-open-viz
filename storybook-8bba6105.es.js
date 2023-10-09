import { a as b, F as ke, j as c } from "./storybook-a1762952.es.js";
import * as Ge from "react";
import Fn, { createContext as ir, useRef as re, useEffect as q, useMemo as or, useCallback as he, useState as Z, memo as Pe, useContext as lr } from "react";
import { E as vt, f as cr, i as sr, g as ur, L as fr, H as Ae } from "./storybook-8b9ffe05.es.js";
import { A as He } from "./storybook-505d9a24.es.js";
import { B as dr } from "./storybook-9d47a96f.es.js";
import { I as rn } from "./storybook-ba379c3c.es.js";
import { T as te } from "./storybook-7d6e2240.es.js";
import { P as H } from "./storybook-8ffdcfbc.es.js";
import { g as hr } from "./storybook-92157f1b.es.js";
import "./storybook-2d1b80a2.es.js";
var bt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function t() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var l = t.apply(null, a);
              l && r.push(l);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              r.push(a.toString());
              continue;
            }
            for (var u in a)
              n.call(a, u) && a[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(bt);
var mr = bt.exports;
const zn = /* @__PURE__ */ hr(mr);
var pr = ["top", "left", "transform", "className", "children", "innerRef"];
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, hn.apply(this, arguments);
}
function gr(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(n.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function mn(e) {
  var n = e.top, t = n === void 0 ? 0 : n, r = e.left, i = r === void 0 ? 0 : r, a = e.transform, o = e.className, l = e.children, u = e.innerRef, s = gr(e, pr);
  return /* @__PURE__ */ Fn.createElement("g", hn({
    ref: u,
    className: zn("visx-group", o),
    transform: a || "translate(" + i + ", " + t + ")"
  }, s), l);
}
mn.propTypes = {
  top: H.number,
  left: H.number,
  transform: H.string,
  className: H.string,
  children: H.node,
  innerRef: H.oneOfType([H.string, H.func, H.object])
};
var vr = ["className", "innerRef"];
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, pn.apply(this, arguments);
}
function br(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(n.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Wn(e) {
  var n = e.className, t = e.innerRef, r = br(e, vr);
  return /* @__PURE__ */ Fn.createElement("rect", pn({
    ref: t,
    className: zn("visx-bar", n)
  }, r));
}
var yr = ["className", "innerRef"];
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, gn.apply(this, arguments);
}
function xr(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(n.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Nr(e) {
  var n = e.className, t = e.innerRef, r = xr(e, yr);
  return /* @__PURE__ */ Fn.createElement("circle", gn({
    ref: t,
    className: zn("visx-circle", n)
  }, r));
}
function Be(e, n) {
  return e == null || n == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function wr(e, n) {
  return e == null || n == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function yt(e) {
  let n, t, r;
  e.length !== 2 ? (n = Be, t = (l, u) => Be(e(l), u), r = (l, u) => e(l) - u) : (n = e === Be || e === wr ? e : Cr, t = e, r = e);
  function i(l, u, s = 0, m = l.length) {
    if (s < m) {
      if (n(u, u) !== 0)
        return m;
      do {
        const d = s + m >>> 1;
        t(l[d], u) < 0 ? s = d + 1 : m = d;
      } while (s < m);
    }
    return s;
  }
  function a(l, u, s = 0, m = l.length) {
    if (s < m) {
      if (n(u, u) !== 0)
        return m;
      do {
        const d = s + m >>> 1;
        t(l[d], u) <= 0 ? s = d + 1 : m = d;
      } while (s < m);
    }
    return s;
  }
  function o(l, u, s = 0, m = l.length) {
    const d = i(l, u, s, m - 1);
    return d > s && r(l[d - 1], u) > -r(l[d], u) ? d - 1 : d;
  }
  return { left: i, center: o, right: a };
}
function Cr() {
  return 0;
}
function Mr(e) {
  return e === null ? NaN : +e;
}
const _r = yt(Be), Tr = _r.right;
yt(Mr).center;
const Sr = Tr, Dr = Math.sqrt(50), Ar = Math.sqrt(10), Or = Math.sqrt(2);
function Ve(e, n, t) {
  const r = (n - e) / Math.max(0, t), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Dr ? 10 : a >= Ar ? 5 : a >= Or ? 2 : 1;
  let l, u, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, l = Math.round(e * s), u = Math.round(n * s), l / s < e && ++l, u / s > n && --u, s = -s) : (s = Math.pow(10, i) * o, l = Math.round(e / s), u = Math.round(n / s), l * s < e && ++l, u * s > n && --u), u < l && 0.5 <= t && t < 2 ? Ve(e, n, t * 2) : [l, u, s];
}
function kr(e, n, t) {
  if (n = +n, e = +e, t = +t, !(t > 0))
    return [];
  if (e === n)
    return [e];
  const r = n < e, [i, a, o] = r ? Ve(n, e, t) : Ve(e, n, t);
  if (!(a >= i))
    return [];
  const l = a - i + 1, u = new Array(l);
  if (r)
    if (o < 0)
      for (let s = 0; s < l; ++s)
        u[s] = (a - s) / -o;
    else
      for (let s = 0; s < l; ++s)
        u[s] = (a - s) * o;
  else if (o < 0)
    for (let s = 0; s < l; ++s)
      u[s] = (i + s) / -o;
  else
    for (let s = 0; s < l; ++s)
      u[s] = (i + s) * o;
  return u;
}
function vn(e, n, t) {
  return n = +n, e = +e, t = +t, Ve(e, n, t)[2];
}
function $r(e, n, t) {
  n = +n, e = +e, t = +t;
  const r = n < e, i = r ? vn(n, e, t) : vn(e, n, t);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Fr(e, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(n).domain(e);
      break;
  }
  return this;
}
function Te(e, n, t) {
  e.prototype = n.prototype = t, t.constructor = e;
}
function Ue(e, n) {
  var t = Object.create(e.prototype);
  for (var r in n)
    t[r] = n[r];
  return t;
}
function ce() {
}
var ge = 0.7, Me = 1 / ge, we = "\\s*([+-]?\\d+)\\s*", $e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", zr = /^#([0-9a-f]{3,8})$/, Rr = new RegExp(`^rgb\\(${we},${we},${we}\\)$`), Er = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), Pr = new RegExp(`^rgba\\(${we},${we},${we},${$e}\\)$`), Ur = new RegExp(`^rgba\\(${K},${K},${K},${$e}\\)$`), Ir = new RegExp(`^hsl\\(${$e},${K},${K}\\)$`), Lr = new RegExp(`^hsla\\(${$e},${K},${K},${$e}\\)$`), qn = {
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
Te(ce, Fe, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bn,
  // Deprecated! Use color.formatHex.
  formatHex: Bn,
  formatHex8: Hr,
  formatHsl: jr,
  formatRgb: Gn,
  toString: Gn
});
function Bn() {
  return this.rgb().formatHex();
}
function Hr() {
  return this.rgb().formatHex8();
}
function jr() {
  return xt(this).formatHsl();
}
function Gn() {
  return this.rgb().formatRgb();
}
function Fe(e) {
  var n, t;
  return e = (e + "").trim().toLowerCase(), (n = zr.exec(e)) ? (t = n[1].length, n = parseInt(n[1], 16), t === 6 ? Vn(n) : t === 3 ? new z(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : t === 8 ? je(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : t === 4 ? je(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Rr.exec(e)) ? new z(n[1], n[2], n[3], 1) : (n = Er.exec(e)) ? new z(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Pr.exec(e)) ? je(n[1], n[2], n[3], n[4]) : (n = Ur.exec(e)) ? je(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ir.exec(e)) ? Jn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Lr.exec(e)) ? Jn(n[1], n[2] / 100, n[3] / 100, n[4]) : qn.hasOwnProperty(e) ? Vn(qn[e]) : e === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function Vn(e) {
  return new z(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function je(e, n, t, r) {
  return r <= 0 && (e = n = t = NaN), new z(e, n, t, r);
}
function Rn(e) {
  return e instanceof ce || (e = Fe(e)), e ? (e = e.rgb(), new z(e.r, e.g, e.b, e.opacity)) : new z();
}
function bn(e, n, t, r) {
  return arguments.length === 1 ? Rn(e) : new z(e, n, t, r ?? 1);
}
function z(e, n, t, r) {
  this.r = +e, this.g = +n, this.b = +t, this.opacity = +r;
}
Te(z, bn, Ue(ce, {
  brighter(e) {
    return e = e == null ? Me : Math.pow(Me, e), new z(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ge : Math.pow(ge, e), new z(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(me(this.r), me(this.g), me(this.b), Xe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xn,
  // Deprecated! Use color.formatHex.
  formatHex: Xn,
  formatHex8: Yr,
  formatRgb: Qn,
  toString: Qn
}));
function Xn() {
  return `#${de(this.r)}${de(this.g)}${de(this.b)}`;
}
function Yr() {
  return `#${de(this.r)}${de(this.g)}${de(this.b)}${de((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qn() {
  const e = Xe(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${me(this.r)}, ${me(this.g)}, ${me(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Xe(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function me(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function de(e) {
  return e = me(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Jn(e, n, t, r) {
  return r <= 0 ? e = n = t = NaN : t <= 0 || t >= 1 ? e = n = NaN : n <= 0 && (e = NaN), new X(e, n, t, r);
}
function xt(e) {
  if (e instanceof X)
    return new X(e.h, e.s, e.l, e.opacity);
  if (e instanceof ce || (e = Fe(e)), !e)
    return new X();
  if (e instanceof X)
    return e;
  e = e.rgb();
  var n = e.r / 255, t = e.g / 255, r = e.b / 255, i = Math.min(n, t, r), a = Math.max(n, t, r), o = NaN, l = a - i, u = (a + i) / 2;
  return l ? (n === a ? o = (t - r) / l + (t < r) * 6 : t === a ? o = (r - n) / l + 2 : o = (n - t) / l + 4, l /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : l = u > 0 && u < 1 ? 0 : o, new X(o, l, u, e.opacity);
}
function yn(e, n, t, r) {
  return arguments.length === 1 ? xt(e) : new X(e, n, t, r ?? 1);
}
function X(e, n, t, r) {
  this.h = +e, this.s = +n, this.l = +t, this.opacity = +r;
}
Te(X, yn, Ue(ce, {
  brighter(e) {
    return e = e == null ? Me : Math.pow(Me, e), new X(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ge : Math.pow(ge, e), new X(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, n = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, r = t + (t < 0.5 ? t : 1 - t) * n, i = 2 * t - r;
    return new z(
      an(e >= 240 ? e - 240 : e + 120, i, r),
      an(e, i, r),
      an(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new X(Zn(this.h), Ye(this.s), Ye(this.l), Xe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Xe(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Zn(this.h)}, ${Ye(this.s) * 100}%, ${Ye(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Zn(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ye(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function an(e, n, t) {
  return (e < 60 ? n + (t - n) * e / 60 : e < 180 ? t : e < 240 ? n + (t - n) * (240 - e) / 60 : n) * 255;
}
const Nt = Math.PI / 180, wt = 180 / Math.PI, Qe = 18, Ct = 0.96422, Mt = 1, _t = 0.82521, Tt = 4 / 29, Ce = 6 / 29, St = 3 * Ce * Ce, Wr = Ce * Ce * Ce;
function Dt(e) {
  if (e instanceof ee)
    return new ee(e.l, e.a, e.b, e.opacity);
  if (e instanceof ie)
    return At(e);
  e instanceof z || (e = Rn(e));
  var n = sn(e.r), t = sn(e.g), r = sn(e.b), i = on((0.2225045 * n + 0.7168786 * t + 0.0606169 * r) / Mt), a, o;
  return n === t && t === r ? a = o = i : (a = on((0.4360747 * n + 0.3850649 * t + 0.1430804 * r) / Ct), o = on((0.0139322 * n + 0.0971045 * t + 0.7141733 * r) / _t)), new ee(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function xn(e, n, t, r) {
  return arguments.length === 1 ? Dt(e) : new ee(e, n, t, r ?? 1);
}
function ee(e, n, t, r) {
  this.l = +e, this.a = +n, this.b = +t, this.opacity = +r;
}
Te(ee, xn, Ue(ce, {
  brighter(e) {
    return new ee(this.l + Qe * (e ?? 1), this.a, this.b, this.opacity);
  },
  darker(e) {
    return new ee(this.l - Qe * (e ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116, n = isNaN(this.a) ? e : e + this.a / 500, t = isNaN(this.b) ? e : e - this.b / 200;
    return n = Ct * ln(n), e = Mt * ln(e), t = _t * ln(t), new z(
      cn(3.1338561 * n - 1.6168667 * e - 0.4906146 * t),
      cn(-0.9787684 * n + 1.9161415 * e + 0.033454 * t),
      cn(0.0719453 * n - 0.2289914 * e + 1.4052427 * t),
      this.opacity
    );
  }
}));
function on(e) {
  return e > Wr ? Math.pow(e, 1 / 3) : e / St + Tt;
}
function ln(e) {
  return e > Ce ? e * e * e : St * (e - Tt);
}
function cn(e) {
  return 255 * (e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
}
function sn(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function qr(e) {
  if (e instanceof ie)
    return new ie(e.h, e.c, e.l, e.opacity);
  if (e instanceof ee || (e = Dt(e)), e.a === 0 && e.b === 0)
    return new ie(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var n = Math.atan2(e.b, e.a) * wt;
  return new ie(n < 0 ? n + 360 : n, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Nn(e, n, t, r) {
  return arguments.length === 1 ? qr(e) : new ie(e, n, t, r ?? 1);
}
function ie(e, n, t, r) {
  this.h = +e, this.c = +n, this.l = +t, this.opacity = +r;
}
function At(e) {
  if (isNaN(e.h))
    return new ee(e.l, 0, 0, e.opacity);
  var n = e.h * Nt;
  return new ee(e.l, Math.cos(n) * e.c, Math.sin(n) * e.c, e.opacity);
}
Te(ie, Nn, Ue(ce, {
  brighter(e) {
    return new ie(this.h, this.c, this.l + Qe * (e ?? 1), this.opacity);
  },
  darker(e) {
    return new ie(this.h, this.c, this.l - Qe * (e ?? 1), this.opacity);
  },
  rgb() {
    return At(this).rgb();
  }
}));
var Ot = -0.14861, En = 1.78277, Pn = -0.29227, en = -0.90649, ze = 1.97294, Kn = ze * en, et = ze * En, nt = En * Pn - en * Ot;
function Br(e) {
  if (e instanceof pe)
    return new pe(e.h, e.s, e.l, e.opacity);
  e instanceof z || (e = Rn(e));
  var n = e.r / 255, t = e.g / 255, r = e.b / 255, i = (nt * r + Kn * n - et * t) / (nt + Kn - et), a = r - i, o = (ze * (t - i) - Pn * a) / en, l = Math.sqrt(o * o + a * a) / (ze * i * (1 - i)), u = l ? Math.atan2(o, a) * wt - 120 : NaN;
  return new pe(u < 0 ? u + 360 : u, l, i, e.opacity);
}
function wn(e, n, t, r) {
  return arguments.length === 1 ? Br(e) : new pe(e, n, t, r ?? 1);
}
function pe(e, n, t, r) {
  this.h = +e, this.s = +n, this.l = +t, this.opacity = +r;
}
Te(pe, wn, Ue(ce, {
  brighter(e) {
    return e = e == null ? Me : Math.pow(Me, e), new pe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ge : Math.pow(ge, e), new pe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * Nt, n = +this.l, t = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(e), i = Math.sin(e);
    return new z(
      255 * (n + t * (Ot * r + En * i)),
      255 * (n + t * (Pn * r + en * i)),
      255 * (n + t * (ze * r)),
      this.opacity
    );
  }
}));
const nn = (e) => () => e;
function kt(e, n) {
  return function(t) {
    return e + t * n;
  };
}
function Gr(e, n, t) {
  return e = Math.pow(e, t), n = Math.pow(n, t) - e, t = 1 / t, function(r) {
    return Math.pow(e + r * n, t);
  };
}
function Un(e, n) {
  var t = n - e;
  return t ? kt(e, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : nn(isNaN(e) ? n : e);
}
function Vr(e) {
  return (e = +e) == 1 ? R : function(n, t) {
    return t - n ? Gr(n, t, e) : nn(isNaN(n) ? t : n);
  };
}
function R(e, n) {
  var t = n - e;
  return t ? kt(e, t) : nn(isNaN(e) ? n : e);
}
const Cn = function e(n) {
  var t = Vr(n);
  function r(i, a) {
    var o = t((i = bn(i)).r, (a = bn(a)).r), l = t(i.g, a.g), u = t(i.b, a.b), s = R(i.opacity, a.opacity);
    return function(m) {
      return i.r = o(m), i.g = l(m), i.b = u(m), i.opacity = s(m), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Xr(e, n) {
  n || (n = []);
  var t = e ? Math.min(n.length, e.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < t; ++i)
      r[i] = e[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Qr(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Jr(e, n) {
  var t = n ? n.length : 0, r = e ? Math.min(t, e.length) : 0, i = new Array(r), a = new Array(t), o;
  for (o = 0; o < r; ++o)
    i[o] = In(e[o], n[o]);
  for (; o < t; ++o)
    a[o] = n[o];
  return function(l) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](l);
    return a;
  };
}
function Zr(e, n) {
  var t = /* @__PURE__ */ new Date();
  return e = +e, n = +n, function(r) {
    return t.setTime(e * (1 - r) + n * r), t;
  };
}
function Je(e, n) {
  return e = +e, n = +n, function(t) {
    return e * (1 - t) + n * t;
  };
}
function Kr(e, n) {
  var t = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in e ? t[i] = In(e[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in t)
      r[i] = t[i](a);
    return r;
  };
}
var Mn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, un = new RegExp(Mn.source, "g");
function ea(e) {
  return function() {
    return e;
  };
}
function na(e) {
  return function(n) {
    return e(n) + "";
  };
}
function ta(e, n) {
  var t = Mn.lastIndex = un.lastIndex = 0, r, i, a, o = -1, l = [], u = [];
  for (e = e + "", n = n + ""; (r = Mn.exec(e)) && (i = un.exec(n)); )
    (a = i.index) > t && (a = n.slice(t, a), l[o] ? l[o] += a : l[++o] = a), (r = r[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, u.push({ i: o, x: Je(r, i) })), t = un.lastIndex;
  return t < n.length && (a = n.slice(t), l[o] ? l[o] += a : l[++o] = a), l.length < 2 ? u[0] ? na(u[0].x) : ea(n) : (n = u.length, function(s) {
    for (var m = 0, d; m < n; ++m)
      l[(d = u[m]).i] = d.x(s);
    return l.join("");
  });
}
function In(e, n) {
  var t = typeof n, r;
  return n == null || t === "boolean" ? nn(n) : (t === "number" ? Je : t === "string" ? (r = Fe(n)) ? (n = r, Cn) : ta : n instanceof Fe ? Cn : n instanceof Date ? Zr : Qr(n) ? Xr : Array.isArray(n) ? Jr : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Kr : Je)(e, n);
}
function $t(e, n) {
  return e = +e, n = +n, function(t) {
    return Math.round(e * (1 - t) + n * t);
  };
}
function Ft(e) {
  return function(n, t) {
    var r = e((n = yn(n)).h, (t = yn(t)).h), i = R(n.s, t.s), a = R(n.l, t.l), o = R(n.opacity, t.opacity);
    return function(l) {
      return n.h = r(l), n.s = i(l), n.l = a(l), n.opacity = o(l), n + "";
    };
  };
}
const ra = Ft(Un);
var aa = Ft(R);
function ia(e, n) {
  var t = R((e = xn(e)).l, (n = xn(n)).l), r = R(e.a, n.a), i = R(e.b, n.b), a = R(e.opacity, n.opacity);
  return function(o) {
    return e.l = t(o), e.a = r(o), e.b = i(o), e.opacity = a(o), e + "";
  };
}
function zt(e) {
  return function(n, t) {
    var r = e((n = Nn(n)).h, (t = Nn(t)).h), i = R(n.c, t.c), a = R(n.l, t.l), o = R(n.opacity, t.opacity);
    return function(l) {
      return n.h = r(l), n.c = i(l), n.l = a(l), n.opacity = o(l), n + "";
    };
  };
}
const oa = zt(Un);
var la = zt(R);
function Rt(e) {
  return function n(t) {
    t = +t;
    function r(i, a) {
      var o = e((i = wn(i)).h, (a = wn(a)).h), l = R(i.s, a.s), u = R(i.l, a.l), s = R(i.opacity, a.opacity);
      return function(m) {
        return i.h = o(m), i.s = l(m), i.l = u(Math.pow(m, t)), i.opacity = s(m), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
const ca = Rt(Un);
var sa = Rt(R);
function ua(e) {
  return function() {
    return e;
  };
}
function fa(e) {
  return +e;
}
var tt = [0, 1];
function Ne(e) {
  return e;
}
function _n(e, n) {
  return (n -= e = +e) ? function(t) {
    return (t - e) / n;
  } : ua(isNaN(n) ? NaN : 0.5);
}
function da(e, n) {
  var t;
  return e > n && (t = e, e = n, n = t), function(r) {
    return Math.max(e, Math.min(n, r));
  };
}
function ha(e, n, t) {
  var r = e[0], i = e[1], a = n[0], o = n[1];
  return i < r ? (r = _n(i, r), a = t(o, a)) : (r = _n(r, i), a = t(a, o)), function(l) {
    return a(r(l));
  };
}
function ma(e, n, t) {
  var r = Math.min(e.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = _n(e[o], e[o + 1]), a[o] = t(n[o], n[o + 1]);
  return function(l) {
    var u = Sr(e, l, 1, r) - 1;
    return a[u](i[u](l));
  };
}
function pa(e, n) {
  return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ga() {
  var e = tt, n = tt, t = In, r, i, a, o = Ne, l, u, s;
  function m() {
    var f = Math.min(e.length, n.length);
    return o !== Ne && (o = da(e[0], e[f - 1])), l = f > 2 ? ma : ha, u = s = null, d;
  }
  function d(f) {
    return f == null || isNaN(f = +f) ? a : (u || (u = l(e.map(r), n, t)))(r(o(f)));
  }
  return d.invert = function(f) {
    return o(i((s || (s = l(n, e.map(r), Je)))(f)));
  }, d.domain = function(f) {
    return arguments.length ? (e = Array.from(f, fa), m()) : e.slice();
  }, d.range = function(f) {
    return arguments.length ? (n = Array.from(f), m()) : n.slice();
  }, d.rangeRound = function(f) {
    return n = Array.from(f), t = $t, m();
  }, d.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ne, m()) : o !== Ne;
  }, d.interpolate = function(f) {
    return arguments.length ? (t = f, m()) : t;
  }, d.unknown = function(f) {
    return arguments.length ? (a = f, d) : a;
  }, function(f, C) {
    return r = f, i = C, m();
  };
}
function va() {
  return ga()(Ne, Ne);
}
function ba(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ze(e, n) {
  if ((t = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var t, r = e.slice(0, t);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(t + 1)
  ];
}
function _e(e) {
  return e = Ze(Math.abs(e)), e ? e[1] : NaN;
}
function ya(e, n) {
  return function(t, r) {
    for (var i = t.length, a = [], o = 0, l = e[0], u = 0; i > 0 && l > 0 && (u + l + 1 > r && (l = Math.max(1, r - u)), a.push(t.substring(i -= l, i + l)), !((u += l + 1) > r)); )
      l = e[o = (o + 1) % e.length];
    return a.reverse().join(n);
  };
}
function xa(e) {
  return function(n) {
    return n.replace(/[0-9]/g, function(t) {
      return e[+t];
    });
  };
}
var Na = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ke(e) {
  if (!(n = Na.exec(e)))
    throw new Error("invalid format: " + e);
  var n;
  return new Ln({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ke.prototype = Ln.prototype;
function Ln(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ln.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wa(e) {
  e:
    for (var n = e.length, t = 1, r = -1, i; t < n; ++t)
      switch (e[t]) {
        case ".":
          r = i = t;
          break;
        case "0":
          r === 0 && (r = t), i = t;
          break;
        default:
          if (!+e[t])
            break e;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Et;
function Ca(e, n) {
  var t = Ze(e, n);
  if (!t)
    return e + "";
  var r = t[0], i = t[1], a = i - (Et = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ze(e, Math.max(0, n + a - 1))[0];
}
function rt(e, n) {
  var t = Ze(e, n);
  if (!t)
    return e + "";
  var r = t[0], i = t[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const at = {
  "%": (e, n) => (e * 100).toFixed(n),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ba,
  e: (e, n) => e.toExponential(n),
  f: (e, n) => e.toFixed(n),
  g: (e, n) => e.toPrecision(n),
  o: (e) => Math.round(e).toString(8),
  p: (e, n) => rt(e * 100, n),
  r: rt,
  s: Ca,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function it(e) {
  return e;
}
var ot = Array.prototype.map, lt = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ma(e) {
  var n = e.grouping === void 0 || e.thousands === void 0 ? it : ya(ot.call(e.grouping, Number), e.thousands + ""), t = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? it : xa(ot.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(d) {
    d = Ke(d);
    var f = d.fill, C = d.align, M = d.sign, _ = d.symbol, w = d.zero, F = d.width, T = d.comma, D = d.precision, y = d.trim, x = d.type;
    x === "n" ? (T = !0, x = "g") : at[x] || (D === void 0 && (D = 12), y = !0, x = "g"), (w || f === "0" && C === "=") && (w = !0, f = "0", C = "=");
    var $ = _ === "$" ? t : _ === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(x) ? o : "", h = at[x], v = /[defgprs%]/.test(x);
    D = D === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function N(p) {
      var U = $, A = P, B, se, ye;
      if (x === "c")
        A = h(p) + A, p = "";
      else {
        p = +p;
        var xe = p < 0 || 1 / p < 0;
        if (p = isNaN(p) ? u : h(Math.abs(p), D), y && (p = wa(p)), xe && +p == 0 && M !== "+" && (xe = !1), U = (xe ? M === "(" ? M : l : M === "-" || M === "(" ? "" : M) + U, A = (x === "s" ? lt[8 + Et / 3] : "") + A + (xe && M === "(" ? ")" : ""), v) {
          for (B = -1, se = p.length; ++B < se; )
            if (ye = p.charCodeAt(B), 48 > ye || ye > 57) {
              A = (ye === 46 ? i + p.slice(B + 1) : p.slice(B)) + A, p = p.slice(0, B);
              break;
            }
        }
      }
      T && !w && (p = n(p, 1 / 0));
      var ue = U.length + p.length + A.length, L = ue < F ? new Array(F - ue + 1).join(f) : "";
      switch (T && w && (p = n(L + p, L.length ? F - A.length : 1 / 0), L = ""), C) {
        case "<":
          p = U + p + A + L;
          break;
        case "=":
          p = U + L + p + A;
          break;
        case "^":
          p = L.slice(0, ue = L.length >> 1) + U + p + A + L.slice(ue);
          break;
        default:
          p = L + U + p + A;
          break;
      }
      return a(p);
    }
    return N.toString = function() {
      return d + "";
    }, N;
  }
  function m(d, f) {
    var C = s((d = Ke(d), d.type = "f", d)), M = Math.max(-8, Math.min(8, Math.floor(_e(f) / 3))) * 3, _ = Math.pow(10, -M), w = lt[8 + M / 3];
    return function(F) {
      return C(_ * F) + w;
    };
  }
  return {
    format: s,
    formatPrefix: m
  };
}
var We, Pt, Ut;
_a({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function _a(e) {
  return We = Ma(e), Pt = We.format, Ut = We.formatPrefix, We;
}
function Ta(e) {
  return Math.max(0, -_e(Math.abs(e)));
}
function Sa(e, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_e(n) / 3))) * 3 - _e(Math.abs(e)));
}
function Da(e, n) {
  return e = Math.abs(e), n = Math.abs(n) - e, Math.max(0, _e(n) - _e(e)) + 1;
}
function Aa(e, n, t, r) {
  var i = $r(e, n, t), a;
  switch (r = Ke(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(n));
      return r.precision == null && !isNaN(a = Sa(i, o)) && (r.precision = a), Ut(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Da(i, Math.max(Math.abs(e), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Ta(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Pt(r);
}
function Oa(e) {
  var n = e.domain;
  return e.ticks = function(t) {
    var r = n();
    return kr(r[0], r[r.length - 1], t ?? 10);
  }, e.tickFormat = function(t, r) {
    var i = n();
    return Aa(i[0], i[i.length - 1], t ?? 10, r);
  }, e.nice = function(t) {
    t == null && (t = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], l = r[a], u, s, m = 10;
    for (l < o && (s = o, o = l, l = s, s = i, i = a, a = s); m-- > 0; ) {
      if (s = vn(o, l, t), s === u)
        return r[i] = o, r[a] = l, n(r);
      if (s > 0)
        o = Math.floor(o / s) * s, l = Math.ceil(l / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, l = Math.floor(l * s) / s;
      else
        break;
      u = s;
    }
    return e;
  }, e;
}
function It() {
  var e = va();
  return e.copy = function() {
    return pa(e, It());
  }, Fr.apply(e, arguments), Oa(e);
}
function ka(e, n) {
  n.domain && ("nice" in e || "quantiles" in e || "padding" in e, e.domain(n.domain));
}
function $a(e, n) {
  n.range && ("padding" in e, e.range(n.range));
}
function Fa(e, n) {
  "align" in e && "align" in n && typeof n.align < "u" && e.align(n.align);
}
function za(e, n) {
  "base" in e && "base" in n && typeof n.base < "u" && e.base(n.base);
}
function Ra(e, n) {
  "clamp" in e && "clamp" in n && typeof n.clamp < "u" && e.clamp(n.clamp);
}
function Ea(e, n) {
  "constant" in e && "constant" in n && typeof n.constant < "u" && e.constant(n.constant);
}
function Pa(e, n) {
  "exponent" in e && "exponent" in n && typeof n.exponent < "u" && e.exponent(n.exponent);
}
var ct = {
  lab: ia,
  hcl: oa,
  "hcl-long": la,
  hsl: ra,
  "hsl-long": aa,
  cubehelix: ca,
  "cubehelix-long": sa,
  rgb: Cn
};
function Ua(e) {
  switch (e) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return ct[e];
  }
  var n = e.type, t = e.gamma, r = ct[n];
  return typeof t > "u" ? r : r.gamma(t);
}
function Ia(e, n) {
  if ("interpolate" in n && "interpolate" in e && typeof n.interpolate < "u") {
    var t = Ua(n.interpolate);
    e.interpolate(t);
  }
}
var fn = /* @__PURE__ */ new Date(), dn = /* @__PURE__ */ new Date();
function E(e, n, t, r) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = function(a) {
    return e(a = /* @__PURE__ */ new Date(+a)), a;
  }, i.ceil = function(a) {
    return e(a = new Date(a - 1)), n(a, 1), e(a), a;
  }, i.round = function(a) {
    var o = i(a), l = i.ceil(a);
    return a - o < l - a ? o : l;
  }, i.offset = function(a, o) {
    return n(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a;
  }, i.range = function(a, o, l) {
    var u = [], s;
    if (a = i.ceil(a), l = l == null ? 1 : Math.floor(l), !(a < o) || !(l > 0))
      return u;
    do
      u.push(s = /* @__PURE__ */ new Date(+a)), n(a, l), e(a);
    while (s < a && a < o);
    return u;
  }, i.filter = function(a) {
    return E(function(o) {
      if (o >= o)
        for (; e(o), !a(o); )
          o.setTime(o - 1);
    }, function(o, l) {
      if (o >= o)
        if (l < 0)
          for (; ++l <= 0; )
            for (; n(o, -1), !a(o); )
              ;
        else
          for (; --l >= 0; )
            for (; n(o, 1), !a(o); )
              ;
    });
  }, t && (i.count = function(a, o) {
    return fn.setTime(+a), dn.setTime(+o), e(fn), e(dn), Math.floor(t(fn, dn));
  }, i.every = function(a) {
    return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? function(o) {
      return r(o) % a === 0;
    } : function(o) {
      return i.count(0, o) % a === 0;
    }) : i;
  }), i;
}
const Re = 1e3, le = Re * 60, Ee = le * 60, Hn = Ee * 24, Lt = Hn * 7;
var Ht = E(function(e) {
  e.setTime(e - e.getMilliseconds());
}, function(e, n) {
  e.setTime(+e + n * Re);
}, function(e, n) {
  return (n - e) / Re;
}, function(e) {
  return e.getUTCSeconds();
});
const jt = Ht;
Ht.range;
var Yt = E(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re);
}, function(e, n) {
  e.setTime(+e + n * le);
}, function(e, n) {
  return (n - e) / le;
}, function(e) {
  return e.getMinutes();
});
const La = Yt;
Yt.range;
var Wt = E(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re - e.getMinutes() * le);
}, function(e, n) {
  e.setTime(+e + n * Ee);
}, function(e, n) {
  return (n - e) / Ee;
}, function(e) {
  return e.getHours();
});
const Ha = Wt;
Wt.range;
var qt = E(
  (e) => e.setHours(0, 0, 0, 0),
  (e, n) => e.setDate(e.getDate() + n),
  (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * le) / Hn,
  (e) => e.getDate() - 1
);
const ja = qt;
qt.range;
function ve(e) {
  return E(function(n) {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setDate(n.getDate() + t * 7);
  }, function(n, t) {
    return (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * le) / Lt;
  });
}
var Bt = ve(0), Ya = ve(1), Wa = ve(2), qa = ve(3), Ba = ve(4), Ga = ve(5), Va = ve(6);
Bt.range;
Ya.range;
Wa.range;
qa.range;
Ba.range;
Ga.range;
Va.range;
var Gt = E(function(e) {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, function(e, n) {
  e.setMonth(e.getMonth() + n);
}, function(e, n) {
  return n.getMonth() - e.getMonth() + (n.getFullYear() - e.getFullYear()) * 12;
}, function(e) {
  return e.getMonth();
});
const Xa = Gt;
Gt.range;
var jn = E(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, n) {
  e.setFullYear(e.getFullYear() + n);
}, function(e, n) {
  return n.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
jn.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : E(function(n) {
    n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setFullYear(n.getFullYear() + t * e);
  });
};
const Qa = jn;
jn.range;
var Vt = E(function(e) {
  e.setUTCSeconds(0, 0);
}, function(e, n) {
  e.setTime(+e + n * le);
}, function(e, n) {
  return (n - e) / le;
}, function(e) {
  return e.getUTCMinutes();
});
const Ja = Vt;
Vt.range;
var Xt = E(function(e) {
  e.setUTCMinutes(0, 0, 0);
}, function(e, n) {
  e.setTime(+e + n * Ee);
}, function(e, n) {
  return (n - e) / Ee;
}, function(e) {
  return e.getUTCHours();
});
const Za = Xt;
Xt.range;
var Qt = E(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  e.setUTCDate(e.getUTCDate() + n);
}, function(e, n) {
  return (n - e) / Hn;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Ka = Qt;
Qt.range;
function be(e) {
  return E(function(n) {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setUTCDate(n.getUTCDate() + t * 7);
  }, function(n, t) {
    return (t - n) / Lt;
  });
}
var Jt = be(0), ei = be(1), ni = be(2), ti = be(3), ri = be(4), ai = be(5), ii = be(6);
Jt.range;
ei.range;
ni.range;
ti.range;
ri.range;
ai.range;
ii.range;
var Zt = E(function(e) {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  e.setUTCMonth(e.getUTCMonth() + n);
}, function(e, n) {
  return n.getUTCMonth() - e.getUTCMonth() + (n.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, function(e) {
  return e.getUTCMonth();
});
const oi = Zt;
Zt.range;
var Yn = E(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, function(e, n) {
  return n.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Yn.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : E(function(n) {
    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setUTCFullYear(n.getUTCFullYear() + t * e);
  });
};
const li = Yn;
Yn.range;
var ci = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), si = "%Y-%m-%d %H:%M";
function ui(e) {
  var n = e.tickFormat(1, si)(ci);
  return n === "2020-02-02 03:04";
}
var st = {
  day: ja,
  hour: Ha,
  minute: La,
  month: Xa,
  second: jt,
  week: Bt,
  year: Qa
}, ut = {
  day: Ka,
  hour: Za,
  minute: Ja,
  month: oi,
  second: jt,
  week: Jt,
  year: li
};
function fi(e, n) {
  if ("nice" in n && typeof n.nice < "u" && "nice" in e) {
    var t = n.nice;
    if (typeof t == "boolean")
      t && e.nice();
    else if (typeof t == "number")
      e.nice(t);
    else {
      var r = e, i = ui(r);
      if (typeof t == "string")
        r.nice(i ? ut[t] : st[t]);
      else {
        var a = t.interval, o = t.step, l = (i ? ut[a] : st[a]).every(o);
        l != null && r.nice(l);
      }
    }
  }
}
function di(e, n) {
  "padding" in e && "padding" in n && typeof n.padding < "u" && e.padding(n.padding), "paddingInner" in e && "paddingInner" in n && typeof n.paddingInner < "u" && e.paddingInner(n.paddingInner), "paddingOuter" in e && "paddingOuter" in n && typeof n.paddingOuter < "u" && e.paddingOuter(n.paddingOuter);
}
function hi(e, n) {
  if (n.reverse) {
    var t = e.range().slice().reverse();
    "padding" in e, e.range(t);
  }
}
function mi(e, n) {
  "round" in n && typeof n.round < "u" && (n.round && "interpolate" in n && typeof n.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", n) : "round" in e ? e.round(n.round) : "interpolate" in e && n.round && e.interpolate($t));
}
function pi(e, n) {
  "unknown" in e && "unknown" in n && typeof n.unknown < "u" && e.unknown(n.unknown);
}
function gi(e, n) {
  if ("zero" in n && n.zero === !0) {
    var t = e.domain(), r = t[0], i = t[1], a = i < r, o = a ? [i, r] : [r, i], l = o[0], u = o[1], s = [Math.min(0, l), Math.max(0, u)];
    e.domain(a ? s.reverse() : s);
  }
}
var vi = [
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
], bi = {
  domain: ka,
  nice: fi,
  zero: gi,
  interpolate: Ia,
  round: mi,
  align: Fa,
  base: za,
  clamp: Ra,
  constant: Ea,
  exponent: Pa,
  padding: di,
  range: $a,
  reverse: hi,
  unknown: pi
};
function yi() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = new Set(n), i = vi.filter(function(a) {
    return r.has(a);
  });
  return function(o, l) {
    return typeof l < "u" && i.forEach(function(u) {
      bi[u](o, l);
    }), o;
  };
}
var xi = yi("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function Ni(e) {
  return xi(It(), e);
}
const Kt = ir({});
function wi(e, n, t) {
  var r = this, i = re(null), a = re(0), o = re(null), l = re([]), u = re(), s = re(), m = re(e), d = re(!0);
  m.current = e;
  var f = !n && n !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  n = +n || 0, t = t || {};
  var C = !!t.leading, M = "trailing" in t ? !!t.trailing : !0, _ = "maxWait" in t, w = _ ? Math.max(+t.maxWait || 0, n) : null;
  q(function() {
    return d.current = !0, function() {
      d.current = !1;
    };
  }, []);
  var F = or(function() {
    var T = function(h) {
      var v = l.current, N = u.current;
      return l.current = u.current = null, a.current = h, s.current = m.current.apply(N, v);
    }, D = function(h, v) {
      f && cancelAnimationFrame(o.current), o.current = f ? requestAnimationFrame(h) : setTimeout(h, v);
    }, y = function(h) {
      if (!d.current)
        return !1;
      var v = h - i.current, N = h - a.current;
      return !i.current || v >= n || v < 0 || _ && N >= w;
    }, x = function(h) {
      return o.current = null, M && l.current ? T(h) : (l.current = u.current = null, s.current);
    }, $ = function() {
      var h = Date.now();
      if (y(h))
        return x(h);
      if (d.current) {
        var v = h - i.current, N = h - a.current, p = n - v, U = _ ? Math.min(p, w - N) : p;
        D($, U);
      }
    }, P = function() {
      for (var h = [], v = 0; v < arguments.length; v++)
        h[v] = arguments[v];
      var N = Date.now(), p = y(N);
      if (l.current = h, u.current = r, i.current = N, p) {
        if (!o.current && d.current)
          return a.current = i.current, D($, n), C ? T(i.current) : s.current;
        if (_)
          return D($, n), T(i.current);
      }
      return o.current || D($, n), s.current;
    };
    return P.cancel = function() {
      o.current && (f ? cancelAnimationFrame(o.current) : clearTimeout(o.current)), a.current = 0, l.current = i.current = u.current = o.current = null;
    }, P.isPending = function() {
      return !!o.current;
    }, P.flush = function() {
      return o.current ? x(Date.now()) : s.current;
    }, P;
  }, [C, _, n, w, M, f]);
  return F;
}
function Ci(e, n) {
  return e === n;
}
function ft(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function Mi(e) {
  var n = Z(ft(e)), t = n[0], r = n[1], i = he(function(a) {
    return r(ft(a));
  }, []);
  return [t, i];
}
function _i(e, n, t) {
  var r = t && t.equalityFn || Ci, i = Mi(e), a = i[0], o = i[1], l = wi(he(function(s) {
    return o(s);
  }, [o]), n, t), u = re(e);
  return q(function() {
    r(u.current, e) || (l(e), u.current = e);
  }, [e, l, r]), [a, { cancel: l.cancel, isPending: l.isPending, flush: l.flush }];
}
const W = Pe(({ label: e, section: n = null, subsection: t = null, fieldName: r, updateField: i, value: a, type: o = "input", tooltip: l, placeholder: u, i: s = null, min: m = null, max: d = null, className: f, ...C }) => {
  const [M, _] = Z(a), [w] = _i(M, 500);
  q(() => {
    typeof w == "string" && a !== w && i && i(n, t, r, w, s);
  }, [w, n, t, r, s, a, i]);
  let F = t ? `${n}-${t}-${r}` : `${n}-${t}-${r}`;
  const T = (x) => {
    o !== "number" || m === null || !x.target.value || parseFloat(m) <= parseFloat(x.target.value) & parseFloat(d) >= parseFloat(x.target.value) ? _(x.target.value) : _(m.toString());
  };
  let D = {
    className: `cove-input${f ? " " + f : ""}`,
    type: o,
    name: F,
    placeholder: u,
    onChange: T,
    value: M,
    ...C
  }, y = o === "textarea" ? /* @__PURE__ */ c("textarea", { ...D }) : /* @__PURE__ */ c("input", { ...D });
  return /* @__PURE__ */ b(ke, { children: [
    e && /* @__PURE__ */ c("label", { className: "cove-input__label", children: e }),
    l,
    y
  ] });
}), V = Pe(({ label: e, value: n, options: t, fieldName: r, section: i = null, subsection: a = null, required: o = !1, updateField: l, initial: u, ...s }) => {
  let m = "";
  if (Array.isArray(t))
    m = t.map((d) => /* @__PURE__ */ c("option", { value: d, children: d }, d));
  else {
    m = [];
    for (const [d, f] of Object.entries(t))
      m.push(
        /* @__PURE__ */ c("option", { value: d, children: f }, d)
      );
  }
  return u && m.unshift(
    /* @__PURE__ */ c("option", { value: "", children: u }, "initial")
  ), /* @__PURE__ */ b("label", { style: { width: "100%", display: "block" }, children: [
    e && /* @__PURE__ */ c("span", { className: "edit-label cove-input__label", children: e }),
    /* @__PURE__ */ c(
      "select",
      {
        className: o && !n ? "warning" : "",
        name: r,
        value: n,
        onChange: (d) => {
          l(i, a, r, d.target.value);
        },
        ...s,
        children: m
      }
    )
  ] });
}), Ti = (e) => /* @__PURE__ */ Ge.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", ...e }, /* @__PURE__ */ Ge.createElement("path", { d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" })), ae = Pe(
  ({
    label: e,
    size: n = "small",
    activeColor: t = null,
    activeCheckColor: r = null,
    section: i = null,
    subsection: a = null,
    fieldName: o,
    updateField: l,
    value: u,
    i: s = null,
    min: m = null,
    max: d = null,
    ...f
  }) => {
    const [C, M] = Z(u);
    let _ = a ? `${i}-${a}-${o}` : `${i}-${a}-${o}`;
    return q(() => {
      u !== void 0 && u !== C && M(u);
    }, [u]), q(() => {
      u !== void 0 && u !== C && l && l(i, a, o, C, s);
    }, [C]), /* @__PURE__ */ b("div", { className: "input-group", children: [
      e && /* @__PURE__ */ c("label", { children: e }),
      /* @__PURE__ */ b("div", { className: "cove-input__checkbox" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + (C ? " active" : ""), onClick: () => M(!C), children: [
        /* @__PURE__ */ c("div", { className: `cove-input__checkbox-box${t ? " custom-color" : ""}`, style: C && t ? { backgroundColor: t } : null, children: /* @__PURE__ */ c(Ti, { className: "cove-input__checkbox-check", style: { fill: r || "#025eaa" } }) }),
        /* @__PURE__ */ c("input", { className: "cove-input--hidden", type: "checkbox", name: _, checked: C || !1, readOnly: !0 })
      ] })
    ] });
  }
);
ae.propTypes = {
  label: H.string,
  size: H.oneOf(["small", "medium", "large"]),
  activeColor: H.string,
  activeCheckColor: H.string
};
const Si = (e) => /* @__PURE__ */ Ge.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ Ge.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Di = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"];
Pe(({ label: e, value: n, fieldName: t, section: r = null, subsection: i = null, tooltip: a, updateField: o, ...l }) => /* @__PURE__ */ b("label", { className: "checkbox", children: [
  /* @__PURE__ */ c(
    "input",
    {
      type: "checkbox",
      name: t,
      checked: n,
      onChange: () => {
        o(r, i, t, !n);
      },
      ...l
    }
  ),
  /* @__PURE__ */ c("span", { className: "edit-label column-heading", children: e }),
  /* @__PURE__ */ c("span", { className: "cove-icon", children: a })
] }));
const Ai = Pe((e) => {
  const { config: n, updateConfig: t, loading: r, data: i, setParentConfig: a, isDashboard: o } = lr(Kt), [l, u] = Z(!0), [s, m] = Z(!1), d = (h) => h ? { backgroundColor: "#ffd2d2", color: "#d8000c" } : {}, f = (h, v, N, p) => {
    if (h === null && v === null) {
      let se = { ...n, [N]: p };
      N === "filterColumn" && (se.filterValue = ""), t(se);
      return;
    }
    const U = Array.isArray(n[h]);
    let A = U ? [...n[h], p] : { ...n[h], [N]: p };
    v !== null && (U ? (A = [...n[h]], A[v] = { ...A[v], [N]: p }) : typeof p == "string" ? A[v] = p : A = { ...n[h], [v]: { ...n[h][v], [N]: p } });
    let B = { ...n, [h]: A };
    t(B);
  };
  q(() => {
    if (a) {
      const h = w();
      a(h);
    }
  }, [n]), q(() => {
    if (!s) {
      let h = { ...n };
      delete h.newViz, t(h);
    }
  }, []), q(() => {
    let h = ["<", ">", "<=", ">="];
    n.dataConditionalComparate !== "" ? h.indexOf(n.dataConditionalOperator) > -1 && isNaN(n.dataConditionalComparate) ? t({ ...n, invalidComparate: !0 }) : n.invalidComparate && t({ ...n, invalidComparate: !1 }) : t({ ...n, invalidComparate: !1 });
  }, [n.dataConditionalOperator, n.dataConditionalComparate]);
  const C = () => {
    u(!l);
  }, M = () => /* @__PURE__ */ c("section", { className: "waiting", children: /* @__PURE__ */ b("section", { className: "waiting-container", children: [
    /* @__PURE__ */ c("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ c("p", { children: n.runtime.editorErrorMessage })
  ] }) }), _ = () => /* @__PURE__ */ c("section", { className: "waiting", children: /* @__PURE__ */ b("section", { className: "waiting-container", children: [
    /* @__PURE__ */ c("h3", { children: "Finish Configuring" }),
    /* @__PURE__ */ c("p", { children: "Set all required options to the left and confirm below to display a preview of the chart." }),
    /* @__PURE__ */ c("button", { className: "btn", style: { margin: "1em auto" }, onClick: (v) => {
      v.preventDefault();
      let N = { ...n };
      delete N.newViz, t(N);
    }, children: "I'm Done" })
  ] }) }), w = () => {
    let h = JSON.parse(JSON.stringify(n));
    return delete h.newViz, delete h.runtime, h;
  }, F = () => {
    let h = n.filters ? [...n.filters] : [];
    h.push({ values: [] }), t({ ...n, filters: h });
  }, T = (h) => {
    let v = [...n.filters];
    v.splice(h, 1), t({ ...n, filters: v });
  }, D = (h, v, N) => {
    let p = [...n.filters];
    p[v][h] = N, t({ ...n, filters: p });
  }, y = (h = !0) => {
    let v = {};
    return i.map((N) => Object.keys(N).forEach((p) => v[p] = !0)), Object.keys(v);
  }, x = (h) => {
    let v = [];
    const N = n.filters[h].columnName;
    return i && N && (i.forEach(function(p) {
      p[N] !== void 0 && v.indexOf(p[N]) === -1 && v.push(p[N]);
    }), v.sort()), v;
  }, $ = ["Waffle", "Gauge"], P = /* @__PURE__ */ b(He, { children: [
    /* @__PURE__ */ b(He.Section, { title: "General", children: [
      /* @__PURE__ */ c("div", { className: "cove-accordion__panel-section", children: /* @__PURE__ */ b("div", { style: { width: "100%", display: "block" }, className: "cove-input-group", children: [
        /* @__PURE__ */ c(V, { value: n.visualizationType, fieldName: "visualizationType", label: "Chart Type", updateField: f, options: $, className: "cove-input" }),
        n.visualizationType === "Gauge" && /* @__PURE__ */ c(V, { value: n.visualizationSubType, fieldName: "visualizationSubType", label: "Chart Subtype", updateField: f, options: ["Linear"], className: "cove-input" })
      ] }) }),
      /* @__PURE__ */ c(W, { value: n.title, fieldName: "title", label: "Title", placeholder: "Chart Title", updateField: f }),
      /* @__PURE__ */ c(
        W,
        {
          type: "textarea",
          value: n.content,
          fieldName: "content",
          label: "Message",
          updateField: f,
          tooltip: /* @__PURE__ */ b(te, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ c(te.Target, { children: /* @__PURE__ */ c(rn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ c(te.Content, { children: /* @__PURE__ */ c("p", { children: "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub." }) })
          ] })
        }
      ),
      /* @__PURE__ */ c(
        W,
        {
          value: n.subtext,
          fieldName: "subtext",
          label: "Subtext/Citation",
          placeholder: "Chart Subtext or Citation",
          updateField: f,
          tooltip: /* @__PURE__ */ b(te, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ c(te.Target, { children: /* @__PURE__ */ c(rn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ c(te.Content, { children: /* @__PURE__ */ c("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ b(He.Section, { icon: !n.dataColumn || !n.dataFunction ? /* @__PURE__ */ c(Si, { width: "15", className: "warning-icon" }) : "", title: "Data", children: [
      /* @__PURE__ */ c("h4", { style: { fontWeight: "600" }, children: "Numerator" }),
      /* @__PURE__ */ b("div", { className: "cove-accordion__panel-section", children: [
        /* @__PURE__ */ c("div", { className: "cove-input-group", children: /* @__PURE__ */ c(V, { style: d(!n.dataColumn), value: n.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: f, initial: "Select", options: y(), className: "cove-input" }) }),
        /* @__PURE__ */ c("div", { className: "cove-input-group", children: /* @__PURE__ */ c(V, { style: d(!n.dataFunction), value: n.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: f, initial: "Select", options: ht, className: "cove-input" }) }),
        /* @__PURE__ */ b("div", { className: "cove-input-group", children: [
          /* @__PURE__ */ c("label", { children: /* @__PURE__ */ c("span", { className: "edit-label cove-input__label", children: "Data Conditional" }) }),
          /* @__PURE__ */ b("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", children: [
            /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(V, { value: n.dataConditionalColumn || "", fieldName: "dataConditionalColumn", updateField: f, initial: "Select", options: y(), className: "cove-input" }) }),
            /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(V, { value: n.dataConditionalOperator || "", fieldName: "dataConditionalOperator", updateField: f, initial: "Select", options: Hi, className: "cove-input" }) }),
            /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(W, { value: n.dataConditionalComparate, fieldName: "dataConditionalComparate", updateField: f, className: n.invalidComparate ? "cove-accordion__input-error" : "", style: { minHeight: "2rem" } }) })
          ] })
        ] }),
        n.invalidComparate && /* @__PURE__ */ c("div", { className: "cove-accordion__panel-error", children: "Non-numerical comparate values can only be used with = or ≠." })
      ] }),
      /* @__PURE__ */ b("div", { className: "cove-accordion__panel-row align-center", children: [
        /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c("h4", { style: { fontWeight: "600" }, children: "Denominator" }) }),
        /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ b("div", { style: { display: "flex", justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ c("label", { className: "cove-accordion__panel-label--inline", children: "Select from data" }),
          /* @__PURE__ */ c(ae, { size: "small", value: n.customDenom, fieldName: "customDenom", updateField: f })
        ] }) })
      ] }),
      /* @__PURE__ */ b("div", { className: "cove-accordion__panel-section", children: [
        !n.customDenom && /* @__PURE__ */ b("div", { className: "cove-accordion__panel-row align-center", children: [
          /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(W, { value: n.dataDenom, fieldName: "dataDenom", updateField: f }) }),
          /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ c("label", { className: "cove-accordion__panel-label--muted", children: "default (100)" }) })
        ] }),
        n.customDenom && /* @__PURE__ */ b(ke, { children: [
          /* @__PURE__ */ c(V, { value: n.dataDenomColumn || "", fieldName: "dataDenomColumn", label: "Data Column", updateField: f, initial: "Select", options: y() }),
          /* @__PURE__ */ c(V, { value: n.dataDenomFunction || "", fieldName: "dataDenomFunction", label: "Data Function", updateField: f, initial: "Select", options: ht })
        ] })
      ] }),
      /* @__PURE__ */ c("ul", { className: "column-edit", children: /* @__PURE__ */ b("li", { className: "three-col", children: [
        /* @__PURE__ */ c("div", { style: { marginRight: "1rem" }, children: /* @__PURE__ */ c(W, { value: n.prefix, fieldName: "prefix", label: "Prefix", updateField: f }) }),
        /* @__PURE__ */ c("div", { style: { marginRight: "1rem" }, children: /* @__PURE__ */ c(W, { value: n.suffix, fieldName: "suffix", label: "Suffix", updateField: f }) }),
        /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(W, { type: "number", value: n.roundToPlace, fieldName: "roundToPlace", label: "Round", updateField: f }) })
      ] }) }),
      n.visualizationType === "Gauge" && /* @__PURE__ */ b(ke, { children: [
        /* @__PURE__ */ c("hr", { className: "cove-accordion__divider" }),
        /* @__PURE__ */ b("div", { className: "cove-accordion__panel-section reverse-labels", children: [
          /* @__PURE__ */ c(W, { inline: !0, size: "small", value: n.valueDescription, label: "Value Descriptor", fieldName: "valueDescription", updateField: f }),
          /* @__PURE__ */ c(ae, { inline: !0, size: "small", value: n.showPercent, label: "Show Percentage", fieldName: "showPercent", updateField: f }),
          /* @__PURE__ */ c(ae, { inline: !0, size: "small", label: "Show Denominator", value: n.showDenominator, fieldName: "showDenominator", updateField: f })
        ] })
      ] }),
      /* @__PURE__ */ b("label", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ c("span", { className: "edit-label", children: "Data Point Filters" }),
        /* @__PURE__ */ b(te, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ c(te.Target, { children: /* @__PURE__ */ c(rn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ c(te.Content, { children: /* @__PURE__ */ c("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
        ] })
      ] }),
      n.filters && /* @__PURE__ */ c("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" }, children: n.filters.map((h, v) => /* @__PURE__ */ b("fieldset", { className: "edit-block", children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            className: "remove-column",
            onClick: () => {
              T(v);
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ b("label", { children: [
          /* @__PURE__ */ c("span", { className: "edit-label column-heading", children: "Column" }),
          /* @__PURE__ */ b(
            "select",
            {
              value: h.columnName,
              onChange: (N) => {
                D("columnName", v, N.target.value);
              },
              children: [
                /* @__PURE__ */ c("option", { value: "", children: "- Select Option -" }),
                y().map((N, p) => /* @__PURE__ */ c("option", { value: N, children: N }, p))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ b("label", { children: [
          /* @__PURE__ */ c("span", { className: "edit-label column-heading", children: "Column Value" }),
          /* @__PURE__ */ b(
            "select",
            {
              value: h.columnValue,
              onChange: (N) => {
                D("columnValue", v, N.target.value);
              },
              children: [
                /* @__PURE__ */ c("option", { value: "", children: "- Select Option -" }),
                x(v).map((N, p) => /* @__PURE__ */ c("option", { value: N, children: N }, p))
              ]
            }
          )
        ] })
      ] }, v)) }),
      /* @__PURE__ */ c(dr, { onClick: F, fluid: !0, children: "Add Filter" })
    ] }),
    /* @__PURE__ */ b(He.Section, { title: "Visual", children: [
      n.visualizationType !== "Gauge" && /* @__PURE__ */ c(V, { value: n.shape, fieldName: "shape", label: "Shape", updateField: f, options: ["circle", "square", "person"], className: "cove-input" }),
      n.visualizationType !== "Gauge" && /* @__PURE__ */ b("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs", style: { marginTop: "1rem", marginBottom: "1rem" }, children: [
        /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(W, { type: "number", value: n.nodeWidth, fieldName: "nodeWidth", label: "Width", updateField: f }) }),
        /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(W, { type: "number", value: n.nodeSpacer, fieldName: "nodeSpacer", label: "Spacer", updateField: f }) })
      ] }),
      /* @__PURE__ */ c("div", { className: "cove-input-group", children: n.visualizationType !== "Gauge" && /* @__PURE__ */ c(V, { value: n.orientation, fieldName: "orientation", label: "Layout", updateField: f, className: "cove-input", options: ["horizontal", "vertical"] }) }),
      /* @__PURE__ */ b("div", { className: "cove-input-group", children: [
        /* @__PURE__ */ c("label", { children: /* @__PURE__ */ c("span", { className: "edit-label column-heading cove-input__label", children: "Data Point Font Size" }) }),
        /* @__PURE__ */ b("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs align-center", children: [
          /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", children: /* @__PURE__ */ c(W, { type: "number", value: n.fontSize, fieldName: "fontSize", updateField: f }) }),
          /* @__PURE__ */ c("div", { className: "cove-accordion__panel-col", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ b("label", { className: "accordion__panel-label--muted", children: [
            " ",
            n.visualizationType === "Gauge" ? " default (16px)" : " default (50px)"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ c(V, { value: n.overallFontSize, fieldName: "overallFontSize", label: "Overall Font Size", updateField: f, options: ["small", "medium", "large"], className: "cove-input" }),
      /* @__PURE__ */ b("label", { children: [
        /* @__PURE__ */ c("span", { className: "edit-label cove-input__label", children: "Theme" }),
        /* @__PURE__ */ c("ul", { className: "color-palette", children: Di.map((h) => /* @__PURE__ */ c(
          "li",
          {
            title: h,
            onClick: () => {
              t({ ...n, theme: h });
            },
            className: n.theme === h ? "selected " + h : h
          },
          h
        )) })
      ] }),
      /* @__PURE__ */ b("div", { className: "cove-accordion__panel-section reverse-labels", children: [
        /* @__PURE__ */ c(ae, { inline: !0, size: "small", value: n.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: f }),
        /* @__PURE__ */ c(ae, { inline: !0, size: "small", value: n.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: f }),
        /* @__PURE__ */ c(ae, { size: "small", value: n.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }),
        /* @__PURE__ */ c(ae, { size: "small", value: n.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }),
        /* @__PURE__ */ c(ae, { size: "small", value: n.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f })
      ] })
    ] })
  ] });
  return r ? null : /* @__PURE__ */ c(vt, { component: "EditorPanel", children: /* @__PURE__ */ b("div", { className: "cove-editor", children: [
    !n.newViz && n.runtime && n.runtime.editorErrorMessage && /* @__PURE__ */ c(M, {}),
    n.newViz && s && /* @__PURE__ */ c(_, {}),
    /* @__PURE__ */ c("button", { className: "cove-editor--toggle" + (l ? "" : " collapsed"), title: l ? "Collapse Editor" : "Expand Editor", onClick: C }),
    /* @__PURE__ */ c("section", { className: "cove-editor__panel" + (l ? "" : " hidden"), children: /* @__PURE__ */ b("div", { className: "cove-editor__panel-container", children: [
      /* @__PURE__ */ c("h2", { className: "cove-editor__heading", children: "Configure Chart" }),
      /* @__PURE__ */ c("section", { className: "cove-editor__content", children: P })
    ] }) }),
    /* @__PURE__ */ c("div", { className: "cove-editor__content", children: /* @__PURE__ */ c("div", { className: "cove-editor__content-wrap", children: e.children }) })
  ] }) });
}), Oe = {
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
function Oi(e, n) {
  const t = new CustomEvent(e, { detail: n });
  document.dispatchEvent(t);
}
function ki(e, n = null) {
  var _, w, F, T, D, y, x;
  const { legend: t } = e;
  let r = "", i = "";
  e.lineDatapointStyle === "hover" && (r = " chart-line--hover"), e.lineDatapointStyle === "always show" && (r = " chart-line--always"), e.barHasBorder === "false" && (i = " chart-bar--no-border");
  let a = ["cove-component__inner"], o = ["cove-component__content"];
  const { visualizationType: l, title: u, showTitle: s } = e;
  (l === "Spark Line" || l === "chart") && u && s && o.push("component--has-title"), e.showTitle && o.push("component--has-title"), e.title && e.visualizationType !== "chart" && e.visualizationType !== "Spark Line" && o.push("component--has-title"), e.subtext && a.push("component--has-subtext"), e.biteStyle && a.push(`bite__style--${e.biteStyle}`), (_ = e.general) != null && _.isCompactStyle && a.push("component--isCompactStyle"), !((w = e.visual) != null && w.border) && o.push("no-borders"), e.visualizationType === "Spark Line" && o.push("sparkline"), (F = e.visual) != null && F.borderColorTheme && o.push("component--has-borderColorTheme"), (T = e.visual) != null && T.accent && o.push("component--has-accent"), (D = e.visual) != null && D.background && o.push("component--has-background"), (y = e.visual) != null && y.hideBackgroundColor && o.push("component--hideBackgroundColor"), e.shadow && a.push("shadow"), (x = e == null ? void 0 : e.visual) != null && x.roundedBorders && a.push("bite--has-rounded-borders");
  let m = {
    width: "100%"
  };
  const d = () => (t == null ? void 0 : t.position) === "side" && (t != null && t.singleColumn) ? "legend-container__ul--single-column" : (t == null ? void 0 : t.position) === "bottom" && (t != null && t.singleRow) ? "single-row" : t != null && t.verticalSorted && !(t != null && t.singleRow) ? "vertical-sorted" : "", f = () => {
    const $ = ["legend-container__ul"];
    return $.push(d()), $;
  }, M = {
    aside: [`${t == null ? void 0 : t.position}`, `${d()}`, "cdcdataviz-sr-focusable", `${n}`],
    section: ["legend-container"],
    ul: f(),
    li: ["single-legend-item", "legend-container__li"],
    title: ["legend-container__title"],
    resetButton: ["legend-container__reset-button", "btn", "clear"],
    description: ["legend-container__description"]
  };
  return { innerContainerClasses: a, contentClasses: o, barBorderClass: i, lineDatapointClass: r, sparkLineStyles: m, legendClasses: M };
}
const $i = async (e) => {
  let t = { ...e };
  return t.validated = 4.23, t;
}, Fi = async (e) => {
  let n = e;
  return n = await $i(n), n;
};
const dt = {
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
}, zi = ({ config: e, isEditor: n, link: t }) => {
  let { title: r, theme: i, shape: a, nodeWidth: o, nodeSpacer: l, prefix: u, suffix: s, subtext: m, content: d, orientation: f, filters: C, dataColumn: M, dataFunction: _, dataConditionalColumn: w, dataConditionalOperator: F, dataConditionalComparate: T, customDenom: D, dataDenom: y, dataDenomColumn: x, dataDenomFunction: $, roundToPlace: P } = e;
  const h = he(() => {
    if (!M || !_)
      return "";
    const ne = (g) => {
      if (Array.isArray(g) && g.length > 0) {
        const k = g.reduce((G, oe) => G + oe);
        return S(k);
      }
    }, j = (g) => {
      const k = g.length > 1 ? g.reduce((G, oe) => G + oe) / g.length : g[0];
      return S(k);
    }, Q = (g) => {
      let k = {}, G = -1 / 0;
      for (let Y = 0; Y < g.length; Y++)
        k[g[Y]] ? k[g[Y]] += 1 : k[g[Y]] = 1, k[g[Y]] > G && (G = k[g[Y]]);
      let oe = [];
      for (let Y in k)
        k[Y] === G && oe.push(Y);
      return oe;
    }, Se = (g) => {
      const k = Math.floor(g.length / 2), G = [...g].sort((Y, ar) => Y - ar), oe = g.length % 2 !== 0 ? G[k] : (G[k - 1] + G[k]) / 2;
      return S(oe);
    }, S = (g) => (P !== "" && !isNaN(P) && Number(P) > -1 && (g = Number(g).toFixed(Number(P))), g);
    let O = e.data;
    C.map((g) => {
      if (g.columnName && g.columnValue)
        O = O.filter(function(k) {
          return k[g.columnName] === g.columnValue;
        });
      else
        return !1;
    });
    let I = [];
    if (w !== "" && F !== "" && T !== "")
      switch (F) {
        case "<":
          I = O.filter((g) => g[w] < T);
          break;
        case ">":
          I = O.filter((g) => g[w] > T);
          break;
        case "<=":
          I = O.filter((g) => g[w] <= T);
          break;
        case ">=":
          I = O.filter((g) => g[w] >= T);
          break;
        case "=":
          isNaN(Number(T)) ? I = O.filter((g) => String(g[w]) === T) : I = O.filter((g) => g[w] === T);
          break;
        case "≠":
          isNaN(Number(T)) ? I = O.filter((g) => String(g[w]) !== T) : I = O.filter((g) => g[w] !== T);
          break;
        default:
          I = [];
      }
    const De = I.length > 0 ? I.map((g) => g[M]) : O.map((g) => g[M]), Ie = O.map((g) => g[x]);
    let J = De.filter((g) => {
      let k = !1;
      return (Number(g) || Number.isFinite(Number(g))) && (k = !0), k;
    }).map(Number), fe = Ie.filter((g) => {
      let k = !1;
      return (Number(g) || Number.isFinite(Number(g))) && (k = !0), k;
    }).map(Number), tn = "";
    tn = {
      [Sn]: String(J.length),
      [$n]: String(ne(J)),
      [Dn]: String(j(J)),
      [An]: Se(J).toString(),
      [Tn]: Math.max(...J).toString(),
      [On]: Math.min(...J).toString(),
      [kn]: Q(J).join(", ")
    }[_];
    let Le = null;
    const rr = {
      [Sn]: String(fe.length),
      [$n]: String(ne(fe)),
      [Dn]: String(j(fe)),
      [An]: Se(fe).toString(),
      [Tn]: Math.max(...fe).toString(),
      [On]: Math.min(...fe).toString(),
      [kn]: Q(fe).join(", ")
    };
    return D && x && $ ? Le = rr[$] : Le = y > 0 ? y : 100, [S(tn / Le * 100), Le, S(tn)];
  }, [M, _, e.data, C, w, F, T, D, x, $, P, y]), [v, N, p] = h(), U = he(() => {
    let ne = [], j = parseInt(o, 10), Q = parseInt(l, 10);
    const Se = (S, O, I, De, Ie) => {
      let J = O === "x" ? I % 10 : O === "y" ? Math.floor(I / 10) : null;
      return S === "circle" ? J * (De + Ie) + De / 2 : J * (De + Ie);
    };
    for (let S = 0; S < 100; S++) {
      let O = {
        shape: a,
        x: Se(a, "x", S, j, Q),
        y: Se(a, "y", S, j, Q),
        color: dt[i],
        opacity: S + 1 > 100 - Math.round(v) ? 1 : 0.35
      };
      ne.push(O);
    }
    return ne.map(
      (S, O) => S.shape === "square" ? /* @__PURE__ */ c(Wn, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * O}ms` }, x: S.x, y: S.y, width: j, height: j, fill: S.color, fillOpacity: S.opacity }, O) : S.shape === "person" ? /* @__PURE__ */ c(
        "path",
        {
          style: { transform: `translateX(${S.x + j / 4}px) translateY(${S.y}px) scale(${j / 20})` },
          fill: S.color,
          fillOpacity: S.opacity,
          d: `M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`
        },
        O
      ) : /* @__PURE__ */ c(Nr, { className: "cdc-waffle-chart__node", style: { transitionDelay: `${0.1 * O}ms` }, cx: S.x, cy: S.y, r: j / 2, fill: S.color, fillOpacity: S.opacity }, O)
    );
  }, [i, v, a, o, l]), A = he(() => o * 10 + l * 9, [o, l]);
  let B = e.fontSize ? { fontSize: e.fontSize + "px" } : null;
  const { innerContainerClasses: se, contentClasses: ye } = ki(e), xe = (ne, j = !1) => {
    j && console.log("handleWaffleChartAriaLabels Testing On:", ne);
    try {
      let Q = "Waffle chart";
      return ne.title && (Q += ` with the title: ${ne.title}`), Q;
    } catch (Q) {
      console.error(Q.message);
    }
  }, ue = "100%", L = 35, nr = Ni({
    domain: [0, N],
    range: [0, ue]
  }), tr = dt[i];
  return /* @__PURE__ */ c("div", { className: se.join(" "), children: /* @__PURE__ */ b(ke, { children: [
    r && /* @__PURE__ */ c("header", { className: `cove-component__header chart-title ${e.theme}`, "aria-hidden": "true", children: Ae(r) }),
    /* @__PURE__ */ c("div", { className: ye.join(" "), children: /* @__PURE__ */ b("div", { className: "cove-component__content-wrap", children: [
      e.visualizationType === "Gauge" && /* @__PURE__ */ c("div", { className: `cove-gauge-chart${e.overallFontSize ? " font-" + e.overallFontSize : ""}`, children: /* @__PURE__ */ b("div", { className: "cove-gauge-chart__chart", children: [
        /* @__PURE__ */ b("div", { style: B, children: [
          u || " ",
          e.showPercent ? v : p,
          s ? s + " " : " ",
          " ",
          e.valueDescription,
          " ",
          e.showDenominator && N ? N : " "
        ] }),
        /* @__PURE__ */ c("div", { className: "cove-gauge-chart__data--text introText", children: Ae(d) }),
        /* @__PURE__ */ c("svg", { height: L, width: "100%", children: /* @__PURE__ */ b(mn, { children: [
          /* @__PURE__ */ c("foreignObject", { style: { border: "1px solid black" }, x: 0, y: 0, width: ue, height: L, fill: "#fff" }),
          /* @__PURE__ */ c(Wn, { x: 0, y: 0, width: nr(p), height: L, fill: tr })
        ] }) }),
        /* @__PURE__ */ c("div", { className: "cove-gauge-chart__subtext subtext", children: Ae(m) })
      ] }) }),
      e.visualizationType !== "Gauge" && /* @__PURE__ */ b("div", { className: `cove-waffle-chart${f === "vertical" ? " cove-waffle-chart--verical" : ""}${e.overallFontSize ? " font-" + e.overallFontSize : ""}`, children: [
        /* @__PURE__ */ c("div", { className: "cove-waffle-chart__chart", style: { width: A() }, children: /* @__PURE__ */ c("svg", { width: A(), height: A(), role: "img", "aria-label": xe(e), tabIndex: 0, children: /* @__PURE__ */ c(mn, { children: U() }) }) }),
        (v || d) && /* @__PURE__ */ b("div", { className: "cove-waffle-chart__data", children: [
          v && /* @__PURE__ */ b("div", { className: "cove-waffle-chart__data--primary", style: B, children: [
            u || null,
            v,
            s || null
          ] }),
          /* @__PURE__ */ c("div", { className: "cove-waffle-chart__data--text", children: Ae(d) }),
          m && /* @__PURE__ */ c("div", { className: "cove-waffle-chart__subtext subtext", children: Ae(m) })
        ] })
      ] })
    ] }) }),
    t && t
  ] }) });
}, er = ({ configUrl: e, config: n, isDashboard: t = !1, isEditor: r = !1, setConfig: i }) => {
  const [a, o] = Z({ ...Oe }), [l, u] = Z(!0), [s, m] = Z("lg"), [d, f] = Z(!1), [C, M] = Z(), _ = (y) => {
    Object.keys(Oe).forEach((x) => {
      y[x] && typeof y[x] == "object" && !Array.isArray(y[x]) && (y[x] = { ...Oe[x], ...y[x] });
    }), y.runtime = {}, y.runtime.uniqueId = Date.now(), y.runtime.editorErrorMessage = "", o(y);
  }, w = he(async () => {
    let y = n || await (await fetch(e)).json(), x = y.data ?? {};
    y.dataUrl && (x = await cr(y.dataUrl)), y.data = x;
    const $ = { ...await Fi(y) };
    _({ ...Oe, ...$ }), u(!1);
  }, []), F = new sr((y) => {
    for (let x of y) {
      let $ = ur(x.contentRect.width * 2);
      m($);
    }
  }), T = he((y) => {
    y !== null && F.observe(y), M(y);
  }, []);
  q(() => {
    w().catch((y) => console.log(y));
  }, []), q(() => {
    a && !d && C && (Oi("cove_loaded", { config: a }), f(!0));
  }, [a, C]), q(() => {
    w().catch((y) => console.log(y));
  }, []), n && q(() => {
    n.dataUrl || _({ ...Oe, ...n });
  }, [n.data]);
  let D = /* @__PURE__ */ c(fr, {});
  if (l === !1) {
    let y = ["cove", "cdc-open-viz-module", "type-waffle-chart", s, a.theme, "font-" + a.overallFontSize];
    r && y.push("is-editor");
    let $ = /* @__PURE__ */ c("div", { className: `${["cove-component", "waffle-chart"].join(" ")}`, ref: T, children: /* @__PURE__ */ c(zi, { config: a, isEditor: r }) });
    D = /* @__PURE__ */ b("div", { className: y.join(" "), children: [
      r && /* @__PURE__ */ c(Ai, { children: $ }),
      !r && $
    ] });
  }
  return /* @__PURE__ */ c(vt, { component: "WaffleChart", children: /* @__PURE__ */ c(Kt.Provider, { value: { config: a, updateConfig: _, loading: l, data: a.data, setParentConfig: i, isDashboard: t, outerContainerRef: T }, children: D }) });
}, Tn = "Max", Sn = "Count", Dn = "Mean (Average)", An = "Median", On = "Min", kn = "Mode", $n = "Sum", ht = [Sn, Tn, Dn, An, On, kn, $n], Ri = "<", Ei = ">", Pi = "<=", Ui = ">=", Ii = "=", Li = "≠", Hi = [Ri, Ei, Pi, Ui, Ii, Li], Ki = {
  title: "Components/Templates/WaffleChart",
  component: er
}, qe = {
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
  render: (e) => /* @__PURE__ */ c(ke, { children: /* @__PURE__ */ c(er, { ...e }) })
};
var mt, pt, gt;
qe.parameters = {
  ...qe.parameters,
  docs: {
    ...(mt = qe.parameters) == null ? void 0 : mt.docs,
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
      ...(gt = (pt = qe.parameters) == null ? void 0 : pt.docs) == null ? void 0 : gt.source
    }
  }
};
const eo = ["Primary"];
export {
  qe as Primary,
  eo as __namedExportsOrder,
  Ki as default
};
