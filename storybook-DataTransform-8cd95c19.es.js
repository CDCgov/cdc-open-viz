import { c as Vl, g as Yl } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { r as B } from "./storybook-index-45401197.es.js";
var dn = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(s, v) {
  (function(u, f) {
    s.exports = f();
  })(Vl, function() {
    for (var u = function(r, e, a) {
      return e === void 0 && (e = 0), a === void 0 && (a = 1), r < e ? e : r > a ? a : r;
    }, f = u, m = function(r) {
      r._clipped = !1, r._unclipped = r.slice(0);
      for (var e = 0; e <= 3; e++)
        e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = f(r[e], 0, 255)) : e === 3 && (r[e] = f(r[e], 0, 1));
      return r;
    }, h = {}, E = 0, y = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; E < y.length; E += 1) {
      var A = y[E];
      h["[object " + A + "]"] = A.toLowerCase();
    }
    var k = function(r) {
      return h[Object.prototype.toString.call(r)] || "object";
    }, R = k, X = function(r, e) {
      return e === void 0 && (e = null), r.length >= 3 ? Array.prototype.slice.call(r) : R(r[0]) == "object" && e ? e.split("").filter(function(a) {
        return r[0][a] !== void 0;
      }).map(function(a) {
        return r[0][a];
      }) : r[0];
    }, or = k, cr = function(r) {
      if (r.length < 2)
        return null;
      var e = r.length - 1;
      return or(r[e]) == "string" ? r[e].toLowerCase() : null;
    }, ur = Math.PI, w = {
      clip_rgb: m,
      limit: u,
      type: k,
      unpack: X,
      last: cr,
      PI: ur,
      TWOPI: ur * 2,
      PITHIRD: ur / 3,
      DEG2RAD: ur / 180,
      RAD2DEG: 180 / ur
    }, G = {
      format: {},
      autodetect: []
    }, xn = w.last, _n = w.clip_rgb, Ie = w.type, hr = G, Pe = function() {
      for (var e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      var n = this;
      if (Ie(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor)
        return e[0];
      var o = xn(e), l = !1;
      if (!o) {
        l = !0, hr.sorted || (hr.autodetect = hr.autodetect.sort(function(g, x) {
          return x.p - g.p;
        }), hr.sorted = !0);
        for (var t = 0, i = hr.autodetect; t < i.length; t += 1) {
          var c = i[t];
          if (o = c.test.apply(c, e), o)
            break;
        }
      }
      if (hr.format[o]) {
        var d = hr.format[o].apply(null, l ? e : e.slice(0, -1));
        n._rgb = _n(d);
      } else
        throw new Error("unknown format: " + e);
      n._rgb.length === 3 && n._rgb.push(1);
    };
    Pe.prototype.toString = function() {
      return Ie(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var M = Pe, Dr = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Dr.Color, [null].concat(r)))();
    };
    Dr.Color = M, Dr.version = "2.4.2";
    var q = Dr, $n = w.unpack, De = Math.max, kn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = $n(r, "rgb"), n = a[0], o = a[1], l = a[2];
      n = n / 255, o = o / 255, l = l / 255;
      var t = 1 - De(n, De(o, l)), i = t < 1 ? 1 / (1 - t) : 0, c = (1 - n - t) * i, d = (1 - o - t) * i, g = (1 - l - t) * i;
      return [c, d, g, t];
    }, An = kn, Cn = w.unpack, Mn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Cn(r, "cmyk");
      var a = r[0], n = r[1], o = r[2], l = r[3], t = r.length > 4 ? r[4] : 1;
      return l === 1 ? [0, 0, 0, t] : [
        a >= 1 ? 0 : 255 * (1 - a) * (1 - l),
        // r
        n >= 1 ? 0 : 255 * (1 - n) * (1 - l),
        // g
        o >= 1 ? 0 : 255 * (1 - o) * (1 - l),
        // b
        t
      ];
    }, On = Mn, Nn = q, Se = M, Fe = G, In = w.unpack, Pn = w.type, Dn = An;
    Se.prototype.cmyk = function() {
      return Dn(this._rgb);
    }, Nn.cmyk = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Se, [null].concat(r, ["cmyk"])))();
    }, Fe.format.cmyk = On, Fe.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = In(r, "cmyk"), Pn(r) === "array" && r.length === 4)
          return "cmyk";
      }
    });
    var Sn = w.unpack, Fn = w.last, Ur = function(r) {
      return Math.round(r * 100) / 100;
    }, Rn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Sn(r, "hsla"), n = Fn(r) || "lsa";
      return a[0] = Ur(a[0] || 0), a[1] = Ur(a[1] * 100) + "%", a[2] = Ur(a[2] * 100) + "%", n === "hsla" || a.length > 3 && a[3] < 1 ? (a[3] = a.length > 3 ? a[3] : 1, n = "hsla") : a.length = 3, n + "(" + a.join(",") + ")";
    }, Tn = Rn, Ln = w.unpack, zn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Ln(r, "rgba");
      var a = r[0], n = r[1], o = r[2];
      a /= 255, n /= 255, o /= 255;
      var l = Math.min(a, n, o), t = Math.max(a, n, o), i = (t + l) / 2, c, d;
      return t === l ? (c = 0, d = Number.NaN) : c = i < 0.5 ? (t - l) / (t + l) : (t - l) / (2 - t - l), a == t ? d = (n - o) / (t - l) : n == t ? d = 2 + (o - a) / (t - l) : o == t && (d = 4 + (a - n) / (t - l)), d *= 60, d < 0 && (d += 360), r.length > 3 && r[3] !== void 0 ? [d, c, i, r[3]] : [d, c, i];
    }, Re = zn, Kn = w.unpack, jn = w.last, Bn = Tn, Hn = Re, Vr = Math.round, Gn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Kn(r, "rgba"), n = jn(r) || "rgb";
      return n.substr(0, 3) == "hsl" ? Bn(Hn(a), n) : (a[0] = Vr(a[0]), a[1] = Vr(a[1]), a[2] = Vr(a[2]), (n === "rgba" || a.length > 3 && a[3] < 1) && (a[3] = a.length > 3 ? a[3] : 1, n = "rgba"), n + "(" + a.slice(0, n === "rgb" ? 3 : 4).join(",") + ")");
    }, qn = Gn, Zn = w.unpack, Yr = Math.round, Wn = function() {
      for (var r, e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      e = Zn(e, "hsl");
      var n = e[0], o = e[1], l = e[2], t, i, c;
      if (o === 0)
        t = i = c = l * 255;
      else {
        var d = [0, 0, 0], g = [0, 0, 0], x = l < 0.5 ? l * (1 + o) : l + o - l * o, p = 2 * l - x, $ = n / 360;
        d[0] = $ + 1 / 3, d[1] = $, d[2] = $ - 1 / 3;
        for (var _ = 0; _ < 3; _++)
          d[_] < 0 && (d[_] += 1), d[_] > 1 && (d[_] -= 1), 6 * d[_] < 1 ? g[_] = p + (x - p) * 6 * d[_] : 2 * d[_] < 1 ? g[_] = x : 3 * d[_] < 2 ? g[_] = p + (x - p) * (2 / 3 - d[_]) * 6 : g[_] = p;
        r = [Yr(g[0] * 255), Yr(g[1] * 255), Yr(g[2] * 255)], t = r[0], i = r[1], c = r[2];
      }
      return e.length > 3 ? [t, i, c, e[3]] : [t, i, c, 1];
    }, Te = Wn, Le = Te, ze = G, Ke = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, je = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Be = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, He = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ge = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, qe = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ze = Math.round, We = function(r) {
      r = r.toLowerCase().trim();
      var e;
      if (ze.format.named)
        try {
          return ze.format.named(r);
        } catch {
        }
      if (e = r.match(Ke)) {
        for (var a = e.slice(1, 4), n = 0; n < 3; n++)
          a[n] = +a[n];
        return a[3] = 1, a;
      }
      if (e = r.match(je)) {
        for (var o = e.slice(1, 5), l = 0; l < 4; l++)
          o[l] = +o[l];
        return o;
      }
      if (e = r.match(Be)) {
        for (var t = e.slice(1, 4), i = 0; i < 3; i++)
          t[i] = Ze(t[i] * 2.55);
        return t[3] = 1, t;
      }
      if (e = r.match(He)) {
        for (var c = e.slice(1, 5), d = 0; d < 3; d++)
          c[d] = Ze(c[d] * 2.55);
        return c[3] = +c[3], c;
      }
      if (e = r.match(Ge)) {
        var g = e.slice(1, 4);
        g[1] *= 0.01, g[2] *= 0.01;
        var x = Le(g);
        return x[3] = 1, x;
      }
      if (e = r.match(qe)) {
        var p = e.slice(1, 4);
        p[1] *= 0.01, p[2] *= 0.01;
        var $ = Le(p);
        return $[3] = +e[4], $;
      }
    };
    We.test = function(r) {
      return Ke.test(r) || je.test(r) || Be.test(r) || He.test(r) || Ge.test(r) || qe.test(r);
    };
    var Un = We, Vn = q, Ue = M, Ve = G, Yn = w.type, Xn = qn, Ye = Un;
    Ue.prototype.css = function(r) {
      return Xn(this._rgb, r);
    }, Vn.css = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Ue, [null].concat(r, ["css"])))();
    }, Ve.format.css = Ye, Ve.autodetect.push({
      p: 5,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && Yn(r) === "string" && Ye.test(r))
          return "css";
      }
    });
    var Xe = M, Jn = q, Qn = G, rt = w.unpack;
    Qn.format.gl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = rt(r, "rgba");
      return a[0] *= 255, a[1] *= 255, a[2] *= 255, a;
    }, Jn.gl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Xe, [null].concat(r, ["gl"])))();
    }, Xe.prototype.gl = function() {
      var r = this._rgb;
      return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]];
    };
    var et = w.unpack, at = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = et(r, "rgb"), n = a[0], o = a[1], l = a[2], t = Math.min(n, o, l), i = Math.max(n, o, l), c = i - t, d = c * 100 / 255, g = t / (255 - c) * 100, x;
      return c === 0 ? x = Number.NaN : (n === i && (x = (o - l) / c), o === i && (x = 2 + (l - n) / c), l === i && (x = 4 + (n - o) / c), x *= 60, x < 0 && (x += 360)), [x, d, g];
    }, nt = at, tt = w.unpack, ot = Math.floor, ut = function() {
      for (var r, e, a, n, o, l, t = [], i = arguments.length; i--; )
        t[i] = arguments[i];
      t = tt(t, "hcg");
      var c = t[0], d = t[1], g = t[2], x, p, $;
      g = g * 255;
      var _ = d * 255;
      if (d === 0)
        x = p = $ = g;
      else {
        c === 360 && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 60;
        var O = ot(c), P = c - O, S = g * (1 - d), T = S + _ * (1 - P), V = S + _ * P, U = S + _;
        switch (O) {
          case 0:
            r = [U, V, S], x = r[0], p = r[1], $ = r[2];
            break;
          case 1:
            e = [T, U, S], x = e[0], p = e[1], $ = e[2];
            break;
          case 2:
            a = [S, U, V], x = a[0], p = a[1], $ = a[2];
            break;
          case 3:
            n = [S, T, U], x = n[0], p = n[1], $ = n[2];
            break;
          case 4:
            o = [V, S, U], x = o[0], p = o[1], $ = o[2];
            break;
          case 5:
            l = [U, S, T], x = l[0], p = l[1], $ = l[2];
            break;
        }
      }
      return [x, p, $, t.length > 3 ? t[3] : 1];
    }, lt = ut, ft = w.unpack, it = w.type, ct = q, Je = M, Qe = G, vt = nt;
    Je.prototype.hcg = function() {
      return vt(this._rgb);
    }, ct.hcg = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Je, [null].concat(r, ["hcg"])))();
    }, Qe.format.hcg = lt, Qe.autodetect.push({
      p: 1,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = ft(r, "hcg"), it(r) === "array" && r.length === 3)
          return "hcg";
      }
    });
    var st = w.unpack, dt = w.last, Sr = Math.round, gt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = st(r, "rgba"), n = a[0], o = a[1], l = a[2], t = a[3], i = dt(r) || "auto";
      t === void 0 && (t = 1), i === "auto" && (i = t < 1 ? "rgba" : "rgb"), n = Sr(n), o = Sr(o), l = Sr(l);
      var c = n << 16 | o << 8 | l, d = "000000" + c.toString(16);
      d = d.substr(d.length - 6);
      var g = "0" + Sr(t * 255).toString(16);
      switch (g = g.substr(g.length - 2), i.toLowerCase()) {
        case "rgba":
          return "#" + d + g;
        case "argb":
          return "#" + g + d;
        default:
          return "#" + d;
      }
    }, ra = gt, ht = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, pt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, bt = function(r) {
      if (r.match(ht)) {
        (r.length === 4 || r.length === 7) && (r = r.substr(1)), r.length === 3 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
        var e = parseInt(r, 16), a = e >> 16, n = e >> 8 & 255, o = e & 255;
        return [a, n, o, 1];
      }
      if (r.match(pt)) {
        (r.length === 5 || r.length === 9) && (r = r.substr(1)), r.length === 4 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]);
        var l = parseInt(r, 16), t = l >> 24 & 255, i = l >> 16 & 255, c = l >> 8 & 255, d = Math.round((l & 255) / 255 * 100) / 100;
        return [t, i, c, d];
      }
      throw new Error("unknown hex color: " + r);
    }, ea = bt, mt = q, aa = M, yt = w.type, na = G, wt = ra;
    aa.prototype.hex = function(r) {
      return wt(this._rgb, r);
    }, mt.hex = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(aa, [null].concat(r, ["hex"])))();
    }, na.format.hex = ea, na.autodetect.push({
      p: 4,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && yt(r) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(r.length) >= 0)
          return "hex";
      }
    });
    var Et = w.unpack, ta = w.TWOPI, xt = Math.min, _t = Math.sqrt, $t = Math.acos, kt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Et(r, "rgb"), n = a[0], o = a[1], l = a[2];
      n /= 255, o /= 255, l /= 255;
      var t, i = xt(n, o, l), c = (n + o + l) / 3, d = c > 0 ? 1 - i / c : 0;
      return d === 0 ? t = NaN : (t = (n - o + (n - l)) / 2, t /= _t((n - o) * (n - o) + (n - l) * (o - l)), t = $t(t), l > o && (t = ta - t), t /= ta), [t * 360, d, c];
    }, At = kt, Ct = w.unpack, Xr = w.limit, yr = w.TWOPI, Jr = w.PITHIRD, wr = Math.cos, Mt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Ct(r, "hsi");
      var a = r[0], n = r[1], o = r[2], l, t, i;
      return isNaN(a) && (a = 0), isNaN(n) && (n = 0), a > 360 && (a -= 360), a < 0 && (a += 360), a /= 360, a < 1 / 3 ? (i = (1 - n) / 3, l = (1 + n * wr(yr * a) / wr(Jr - yr * a)) / 3, t = 1 - (i + l)) : a < 2 / 3 ? (a -= 1 / 3, l = (1 - n) / 3, t = (1 + n * wr(yr * a) / wr(Jr - yr * a)) / 3, i = 1 - (l + t)) : (a -= 2 / 3, t = (1 - n) / 3, i = (1 + n * wr(yr * a) / wr(Jr - yr * a)) / 3, l = 1 - (t + i)), l = Xr(o * l * 3), t = Xr(o * t * 3), i = Xr(o * i * 3), [l * 255, t * 255, i * 255, r.length > 3 ? r[3] : 1];
    }, Ot = Mt, Nt = w.unpack, It = w.type, Pt = q, oa = M, ua = G, Dt = At;
    oa.prototype.hsi = function() {
      return Dt(this._rgb);
    }, Pt.hsi = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(oa, [null].concat(r, ["hsi"])))();
    }, ua.format.hsi = Ot, ua.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Nt(r, "hsi"), It(r) === "array" && r.length === 3)
          return "hsi";
      }
    });
    var St = w.unpack, Ft = w.type, Rt = q, la = M, fa = G, Tt = Re;
    la.prototype.hsl = function() {
      return Tt(this._rgb);
    }, Rt.hsl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(la, [null].concat(r, ["hsl"])))();
    }, fa.format.hsl = Te, fa.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = St(r, "hsl"), Ft(r) === "array" && r.length === 3)
          return "hsl";
      }
    });
    var Lt = w.unpack, zt = Math.min, Kt = Math.max, jt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Lt(r, "rgb");
      var a = r[0], n = r[1], o = r[2], l = zt(a, n, o), t = Kt(a, n, o), i = t - l, c, d, g;
      return g = t / 255, t === 0 ? (c = Number.NaN, d = 0) : (d = i / t, a === t && (c = (n - o) / i), n === t && (c = 2 + (o - a) / i), o === t && (c = 4 + (a - n) / i), c *= 60, c < 0 && (c += 360)), [c, d, g];
    }, Bt = jt, Ht = w.unpack, Gt = Math.floor, qt = function() {
      for (var r, e, a, n, o, l, t = [], i = arguments.length; i--; )
        t[i] = arguments[i];
      t = Ht(t, "hsv");
      var c = t[0], d = t[1], g = t[2], x, p, $;
      if (g *= 255, d === 0)
        x = p = $ = g;
      else {
        c === 360 && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 60;
        var _ = Gt(c), O = c - _, P = g * (1 - d), S = g * (1 - d * O), T = g * (1 - d * (1 - O));
        switch (_) {
          case 0:
            r = [g, T, P], x = r[0], p = r[1], $ = r[2];
            break;
          case 1:
            e = [S, g, P], x = e[0], p = e[1], $ = e[2];
            break;
          case 2:
            a = [P, g, T], x = a[0], p = a[1], $ = a[2];
            break;
          case 3:
            n = [P, S, g], x = n[0], p = n[1], $ = n[2];
            break;
          case 4:
            o = [T, P, g], x = o[0], p = o[1], $ = o[2];
            break;
          case 5:
            l = [g, P, S], x = l[0], p = l[1], $ = l[2];
            break;
        }
      }
      return [x, p, $, t.length > 3 ? t[3] : 1];
    }, Zt = qt, Wt = w.unpack, Ut = w.type, Vt = q, ia = M, ca = G, Yt = Bt;
    ia.prototype.hsv = function() {
      return Yt(this._rgb);
    }, Vt.hsv = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(ia, [null].concat(r, ["hsv"])))();
    }, ca.format.hsv = Zt, ca.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Wt(r, "hsv"), Ut(r) === "array" && r.length === 3)
          return "hsv";
      }
    });
    var Fr = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, Er = Fr, Xt = w.unpack, va = Math.pow, Jt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Xt(r, "rgb"), n = a[0], o = a[1], l = a[2], t = Qt(n, o, l), i = t[0], c = t[1], d = t[2], g = 116 * c - 16;
      return [g < 0 ? 0 : g, 500 * (i - c), 200 * (c - d)];
    }, Qr = function(r) {
      return (r /= 255) <= 0.04045 ? r / 12.92 : va((r + 0.055) / 1.055, 2.4);
    }, re = function(r) {
      return r > Er.t3 ? va(r, 1 / 3) : r / Er.t2 + Er.t0;
    }, Qt = function(r, e, a) {
      r = Qr(r), e = Qr(e), a = Qr(a);
      var n = re((0.4124564 * r + 0.3575761 * e + 0.1804375 * a) / Er.Xn), o = re((0.2126729 * r + 0.7151522 * e + 0.072175 * a) / Er.Yn), l = re((0.0193339 * r + 0.119192 * e + 0.9503041 * a) / Er.Zn);
      return [n, o, l];
    }, sa = Jt, xr = Fr, ro = w.unpack, eo = Math.pow, ao = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = ro(r, "lab");
      var a = r[0], n = r[1], o = r[2], l, t, i, c, d, g;
      return t = (a + 16) / 116, l = isNaN(n) ? t : t + n / 500, i = isNaN(o) ? t : t - o / 200, t = xr.Yn * ae(t), l = xr.Xn * ae(l), i = xr.Zn * ae(i), c = ee(3.2404542 * l - 1.5371385 * t - 0.4985314 * i), d = ee(-0.969266 * l + 1.8760108 * t + 0.041556 * i), g = ee(0.0556434 * l - 0.2040259 * t + 1.0572252 * i), [c, d, g, r.length > 3 ? r[3] : 1];
    }, ee = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * eo(r, 1 / 2.4) - 0.055);
    }, ae = function(r) {
      return r > xr.t1 ? r * r * r : xr.t2 * (r - xr.t0);
    }, da = ao, no = w.unpack, to = w.type, oo = q, ga = M, ha = G, uo = sa;
    ga.prototype.lab = function() {
      return uo(this._rgb);
    }, oo.lab = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(ga, [null].concat(r, ["lab"])))();
    }, ha.format.lab = da, ha.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = no(r, "lab"), to(r) === "array" && r.length === 3)
          return "lab";
      }
    });
    var lo = w.unpack, fo = w.RAD2DEG, io = Math.sqrt, co = Math.atan2, vo = Math.round, so = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = lo(r, "lab"), n = a[0], o = a[1], l = a[2], t = io(o * o + l * l), i = (co(l, o) * fo + 360) % 360;
      return vo(t * 1e4) === 0 && (i = Number.NaN), [n, t, i];
    }, pa = so, go = w.unpack, ho = sa, po = pa, bo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = go(r, "rgb"), n = a[0], o = a[1], l = a[2], t = ho(n, o, l), i = t[0], c = t[1], d = t[2];
      return po(i, c, d);
    }, mo = bo, yo = w.unpack, wo = w.DEG2RAD, Eo = Math.sin, xo = Math.cos, _o = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = yo(r, "lch"), n = a[0], o = a[1], l = a[2];
      return isNaN(l) && (l = 0), l = l * wo, [n, xo(l) * o, Eo(l) * o];
    }, ba = _o, $o = w.unpack, ko = ba, Ao = da, Co = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = $o(r, "lch");
      var a = r[0], n = r[1], o = r[2], l = ko(a, n, o), t = l[0], i = l[1], c = l[2], d = Ao(t, i, c), g = d[0], x = d[1], p = d[2];
      return [g, x, p, r.length > 3 ? r[3] : 1];
    }, ma = Co, Mo = w.unpack, Oo = ma, No = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Mo(r, "hcl").reverse();
      return Oo.apply(void 0, a);
    }, Io = No, Po = w.unpack, Do = w.type, ya = q, Rr = M, ne = G, wa = mo;
    Rr.prototype.lch = function() {
      return wa(this._rgb);
    }, Rr.prototype.hcl = function() {
      return wa(this._rgb).reverse();
    }, ya.lch = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Rr, [null].concat(r, ["lch"])))();
    }, ya.hcl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Rr, [null].concat(r, ["hcl"])))();
    }, ne.format.lch = ma, ne.format.hcl = Io, ["lch", "hcl"].forEach(function(r) {
      return ne.autodetect.push({
        p: 2,
        test: function() {
          for (var e = [], a = arguments.length; a--; )
            e[a] = arguments[a];
          if (e = Po(e, r), Do(e) === "array" && e.length === 3)
            return r;
        }
      });
    });
    var So = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, Ea = So, Fo = M, xa = G, Ro = w.type, Or = Ea, To = ea, Lo = ra;
    Fo.prototype.name = function() {
      for (var r = Lo(this._rgb, "rgb"), e = 0, a = Object.keys(Or); e < a.length; e += 1) {
        var n = a[e];
        if (Or[n] === r)
          return n.toLowerCase();
      }
      return r;
    }, xa.format.named = function(r) {
      if (r = r.toLowerCase(), Or[r])
        return To(Or[r]);
      throw new Error("unknown color name: " + r);
    }, xa.autodetect.push({
      p: 5,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && Ro(r) === "string" && Or[r.toLowerCase()])
          return "named";
      }
    });
    var zo = w.unpack, Ko = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = zo(r, "rgb"), n = a[0], o = a[1], l = a[2];
      return (n << 16) + (o << 8) + l;
    }, jo = Ko, Bo = w.type, Ho = function(r) {
      if (Bo(r) == "number" && r >= 0 && r <= 16777215) {
        var e = r >> 16, a = r >> 8 & 255, n = r & 255;
        return [e, a, n, 1];
      }
      throw new Error("unknown num color: " + r);
    }, Go = Ho, qo = q, _a = M, $a = G, Zo = w.type, Wo = jo;
    _a.prototype.num = function() {
      return Wo(this._rgb);
    }, qo.num = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(_a, [null].concat(r, ["num"])))();
    }, $a.format.num = Go, $a.autodetect.push({
      p: 5,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r.length === 1 && Zo(r[0]) === "number" && r[0] >= 0 && r[0] <= 16777215)
          return "num";
      }
    });
    var Uo = q, te = M, ka = G, Aa = w.unpack, Ca = w.type, Ma = Math.round;
    te.prototype.rgb = function(r) {
      return r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ma);
    }, te.prototype.rgba = function(r) {
      return r === void 0 && (r = !0), this._rgb.slice(0, 4).map(function(e, a) {
        return a < 3 ? r === !1 ? e : Ma(e) : e;
      });
    }, Uo.rgb = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(te, [null].concat(r, ["rgb"])))();
    }, ka.format.rgb = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Aa(r, "rgba");
      return a[3] === void 0 && (a[3] = 1), a;
    }, ka.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Aa(r, "rgba"), Ca(r) === "array" && (r.length === 3 || r.length === 4 && Ca(r[3]) == "number" && r[3] >= 0 && r[3] <= 1))
          return "rgb";
      }
    });
    var Tr = Math.log, Vo = function(r) {
      var e = r / 100, a, n, o;
      return e < 66 ? (a = 255, n = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = e - 2) + 104.49216199393888 * Tr(n), o = e < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = e - 10) + 115.67994401066147 * Tr(o)) : (a = 351.97690566805693 + 0.114206453784165 * (a = e - 55) - 40.25366309332127 * Tr(a), n = 325.4494125711974 + 0.07943456536662342 * (n = e - 50) - 28.0852963507957 * Tr(n), o = 255), [a, n, o, 1];
    }, Oa = Vo, Yo = Oa, Xo = w.unpack, Jo = Math.round, Qo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      for (var a = Xo(r, "rgb"), n = a[0], o = a[2], l = 1e3, t = 4e4, i = 0.4, c; t - l > i; ) {
        c = (t + l) * 0.5;
        var d = Yo(c);
        d[2] / d[0] >= o / n ? t = c : l = c;
      }
      return Jo(c);
    }, ru = Qo, oe = q, Lr = M, ue = G, eu = ru;
    Lr.prototype.temp = Lr.prototype.kelvin = Lr.prototype.temperature = function() {
      return eu(this._rgb);
    }, oe.temp = oe.kelvin = oe.temperature = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Lr, [null].concat(r, ["temp"])))();
    }, ue.format.temp = ue.format.kelvin = ue.format.temperature = Oa;
    var au = w.unpack, le = Math.cbrt, nu = Math.pow, tu = Math.sign, ou = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = au(r, "rgb"), n = a[0], o = a[1], l = a[2], t = [fe(n / 255), fe(o / 255), fe(l / 255)], i = t[0], c = t[1], d = t[2], g = le(0.4122214708 * i + 0.5363325363 * c + 0.0514459929 * d), x = le(0.2119034982 * i + 0.6806995451 * c + 0.1073969566 * d), p = le(0.0883024619 * i + 0.2817188376 * c + 0.6299787005 * d);
      return [
        0.2104542553 * g + 0.793617785 * x - 0.0040720468 * p,
        1.9779984951 * g - 2.428592205 * x + 0.4505937099 * p,
        0.0259040371 * g + 0.7827717662 * x - 0.808675766 * p
      ];
    }, Na = ou;
    function fe(r) {
      var e = Math.abs(r);
      return e < 0.04045 ? r / 12.92 : (tu(r) || 1) * nu((e + 0.055) / 1.055, 2.4);
    }
    var uu = w.unpack, zr = Math.pow, lu = Math.sign, fu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = uu(r, "lab");
      var a = r[0], n = r[1], o = r[2], l = zr(a + 0.3963377774 * n + 0.2158037573 * o, 3), t = zr(a - 0.1055613458 * n - 0.0638541728 * o, 3), i = zr(a - 0.0894841775 * n - 1.291485548 * o, 3);
      return [
        255 * ie(4.0767416621 * l - 3.3077115913 * t + 0.2309699292 * i),
        255 * ie(-1.2684380046 * l + 2.6097574011 * t - 0.3413193965 * i),
        255 * ie(-0.0041960863 * l - 0.7034186147 * t + 1.707614701 * i),
        r.length > 3 ? r[3] : 1
      ];
    }, Ia = fu;
    function ie(r) {
      var e = Math.abs(r);
      return e > 31308e-7 ? (lu(r) || 1) * (1.055 * zr(e, 1 / 2.4) - 0.055) : r * 12.92;
    }
    var iu = w.unpack, cu = w.type, vu = q, Pa = M, Da = G, su = Na;
    Pa.prototype.oklab = function() {
      return su(this._rgb);
    }, vu.oklab = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Pa, [null].concat(r, ["oklab"])))();
    }, Da.format.oklab = Ia, Da.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = iu(r, "oklab"), cu(r) === "array" && r.length === 3)
          return "oklab";
      }
    });
    var du = w.unpack, gu = Na, hu = pa, pu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = du(r, "rgb"), n = a[0], o = a[1], l = a[2], t = gu(n, o, l), i = t[0], c = t[1], d = t[2];
      return hu(i, c, d);
    }, bu = pu, mu = w.unpack, yu = ba, wu = Ia, Eu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = mu(r, "lch");
      var a = r[0], n = r[1], o = r[2], l = yu(a, n, o), t = l[0], i = l[1], c = l[2], d = wu(t, i, c), g = d[0], x = d[1], p = d[2];
      return [g, x, p, r.length > 3 ? r[3] : 1];
    }, xu = Eu, _u = w.unpack, $u = w.type, ku = q, Sa = M, Fa = G, Au = bu;
    Sa.prototype.oklch = function() {
      return Au(this._rgb);
    }, ku.oklch = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Sa, [null].concat(r, ["oklch"])))();
    }, Fa.format.oklch = xu, Fa.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = _u(r, "oklch"), $u(r) === "array" && r.length === 3)
          return "oklch";
      }
    });
    var Ra = M, Cu = w.type;
    Ra.prototype.alpha = function(r, e) {
      return e === void 0 && (e = !1), r !== void 0 && Cu(r) === "number" ? e ? (this._rgb[3] = r, this) : new Ra([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3];
    };
    var Mu = M;
    Mu.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var pr = M, Ou = Fr;
    pr.prototype.darken = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lab();
      return a[0] -= Ou.Kn * r, new pr(a, "lab").alpha(e.alpha(), !0);
    }, pr.prototype.brighten = function(r) {
      return r === void 0 && (r = 1), this.darken(-r);
    }, pr.prototype.darker = pr.prototype.darken, pr.prototype.brighter = pr.prototype.brighten;
    var Nu = M;
    Nu.prototype.get = function(r) {
      var e = r.split("."), a = e[0], n = e[1], o = this[a]();
      if (n) {
        var l = a.indexOf(n) - (a.substr(0, 2) === "ok" ? 2 : 0);
        if (l > -1)
          return o[l];
        throw new Error("unknown channel " + n + " in mode " + a);
      } else
        return o;
    };
    var _r = M, Iu = w.type, Pu = Math.pow, Du = 1e-7, Su = 20;
    _r.prototype.luminance = function(r) {
      if (r !== void 0 && Iu(r) === "number") {
        if (r === 0)
          return new _r([0, 0, 0, this._rgb[3]], "rgb");
        if (r === 1)
          return new _r([255, 255, 255, this._rgb[3]], "rgb");
        var e = this.luminance(), a = "rgb", n = Su, o = function(t, i) {
          var c = t.interpolate(i, 0.5, a), d = c.luminance();
          return Math.abs(r - d) < Du || !n-- ? c : d > r ? o(t, c) : o(c, i);
        }, l = (e > r ? o(new _r([0, 0, 0]), this) : o(this, new _r([255, 255, 255]))).rgb();
        return new _r(l.concat([this._rgb[3]]));
      }
      return Fu.apply(void 0, this._rgb.slice(0, 3));
    };
    var Fu = function(r, e, a) {
      return r = ce(r), e = ce(e), a = ce(a), 0.2126 * r + 0.7152 * e + 0.0722 * a;
    }, ce = function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : Pu((r + 0.055) / 1.055, 2.4);
    }, Q = {}, Ta = M, La = w.type, Kr = Q, za = function(r, e, a) {
      a === void 0 && (a = 0.5);
      for (var n = [], o = arguments.length - 3; o-- > 0; )
        n[o] = arguments[o + 3];
      var l = n[0] || "lrgb";
      if (!Kr[l] && !n.length && (l = Object.keys(Kr)[0]), !Kr[l])
        throw new Error("interpolation mode " + l + " is not defined");
      return La(r) !== "object" && (r = new Ta(r)), La(e) !== "object" && (e = new Ta(e)), Kr[l](r, e, a).alpha(r.alpha() + a * (e.alpha() - r.alpha()));
    }, Ka = M, Ru = za;
    Ka.prototype.mix = Ka.prototype.interpolate = function(r, e) {
      e === void 0 && (e = 0.5);
      for (var a = [], n = arguments.length - 2; n-- > 0; )
        a[n] = arguments[n + 2];
      return Ru.apply(void 0, [this, r, e].concat(a));
    };
    var ja = M;
    ja.prototype.premultiply = function(r) {
      r === void 0 && (r = !1);
      var e = this._rgb, a = e[3];
      return r ? (this._rgb = [e[0] * a, e[1] * a, e[2] * a, a], this) : new ja([e[0] * a, e[1] * a, e[2] * a, a], "rgb");
    };
    var ve = M, Tu = Fr;
    ve.prototype.saturate = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lch();
      return a[1] += Tu.Kn * r, a[1] < 0 && (a[1] = 0), new ve(a, "lch").alpha(e.alpha(), !0);
    }, ve.prototype.desaturate = function(r) {
      return r === void 0 && (r = 1), this.saturate(-r);
    };
    var Ba = M, Ha = w.type;
    Ba.prototype.set = function(r, e, a) {
      a === void 0 && (a = !1);
      var n = r.split("."), o = n[0], l = n[1], t = this[o]();
      if (l) {
        var i = o.indexOf(l) - (o.substr(0, 2) === "ok" ? 2 : 0);
        if (i > -1) {
          if (Ha(e) == "string")
            switch (e.charAt(0)) {
              case "+":
                t[i] += +e;
                break;
              case "-":
                t[i] += +e;
                break;
              case "*":
                t[i] *= +e.substr(1);
                break;
              case "/":
                t[i] /= +e.substr(1);
                break;
              default:
                t[i] = +e;
            }
          else if (Ha(e) === "number")
            t[i] = e;
          else
            throw new Error("unsupported value for Color.set");
          var c = new Ba(t, o);
          return a ? (this._rgb = c._rgb, this) : c;
        }
        throw new Error("unknown channel " + l + " in mode " + o);
      } else
        return t;
    };
    var Lu = M, zu = function(r, e, a) {
      var n = r._rgb, o = e._rgb;
      return new Lu(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "rgb"
      );
    };
    Q.rgb = zu;
    var Ku = M, se = Math.sqrt, $r = Math.pow, ju = function(r, e, a) {
      var n = r._rgb, o = n[0], l = n[1], t = n[2], i = e._rgb, c = i[0], d = i[1], g = i[2];
      return new Ku(
        se($r(o, 2) * (1 - a) + $r(c, 2) * a),
        se($r(l, 2) * (1 - a) + $r(d, 2) * a),
        se($r(t, 2) * (1 - a) + $r(g, 2) * a),
        "rgb"
      );
    };
    Q.lrgb = ju;
    var Bu = M, Hu = function(r, e, a) {
      var n = r.lab(), o = e.lab();
      return new Bu(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "lab"
      );
    };
    Q.lab = Hu;
    var Ga = M, kr = function(r, e, a, n) {
      var o, l, t, i;
      n === "hsl" ? (t = r.hsl(), i = e.hsl()) : n === "hsv" ? (t = r.hsv(), i = e.hsv()) : n === "hcg" ? (t = r.hcg(), i = e.hcg()) : n === "hsi" ? (t = r.hsi(), i = e.hsi()) : n === "lch" || n === "hcl" ? (n = "hcl", t = r.hcl(), i = e.hcl()) : n === "oklch" && (t = r.oklch().reverse(), i = e.oklch().reverse());
      var c, d, g, x, p, $;
      (n.substr(0, 1) === "h" || n === "oklch") && (o = t, c = o[0], g = o[1], p = o[2], l = i, d = l[0], x = l[1], $ = l[2]);
      var _, O, P, S;
      return !isNaN(c) && !isNaN(d) ? (d > c && d - c > 180 ? S = d - (c + 360) : d < c && c - d > 180 ? S = d + 360 - c : S = d - c, O = c + a * S) : isNaN(c) ? isNaN(d) ? O = Number.NaN : (O = d, (p == 1 || p == 0) && n != "hsv" && (_ = x)) : (O = c, ($ == 1 || $ == 0) && n != "hsv" && (_ = g)), _ === void 0 && (_ = g + a * (x - g)), P = p + a * ($ - p), n === "oklch" ? new Ga([P, _, O], n) : new Ga([O, _, P], n);
    }, Gu = kr, qa = function(r, e, a) {
      return Gu(r, e, a, "lch");
    };
    Q.lch = qa, Q.hcl = qa;
    var qu = M, Zu = function(r, e, a) {
      var n = r.num(), o = e.num();
      return new qu(n + a * (o - n), "num");
    };
    Q.num = Zu;
    var Wu = kr, Uu = function(r, e, a) {
      return Wu(r, e, a, "hcg");
    };
    Q.hcg = Uu;
    var Vu = kr, Yu = function(r, e, a) {
      return Vu(r, e, a, "hsi");
    };
    Q.hsi = Yu;
    var Xu = kr, Ju = function(r, e, a) {
      return Xu(r, e, a, "hsl");
    };
    Q.hsl = Ju;
    var Qu = kr, rl = function(r, e, a) {
      return Qu(r, e, a, "hsv");
    };
    Q.hsv = rl;
    var el = M, al = function(r, e, a) {
      var n = r.oklab(), o = e.oklab();
      return new el(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "oklab"
      );
    };
    Q.oklab = al;
    var nl = kr, tl = function(r, e, a) {
      return nl(r, e, a, "oklch");
    };
    Q.oklch = tl;
    var de = M, ol = w.clip_rgb, ge = Math.pow, he = Math.sqrt, pe = Math.PI, Za = Math.cos, Wa = Math.sin, ul = Math.atan2, ll = function(r, e, a) {
      e === void 0 && (e = "lrgb"), a === void 0 && (a = null);
      var n = r.length;
      a || (a = Array.from(new Array(n)).map(function() {
        return 1;
      }));
      var o = n / a.reduce(function(O, P) {
        return O + P;
      });
      if (a.forEach(function(O, P) {
        a[P] *= o;
      }), r = r.map(function(O) {
        return new de(O);
      }), e === "lrgb")
        return fl(r, a);
      for (var l = r.shift(), t = l.get(e), i = [], c = 0, d = 0, g = 0; g < t.length; g++)
        if (t[g] = (t[g] || 0) * a[0], i.push(isNaN(t[g]) ? 0 : a[0]), e.charAt(g) === "h" && !isNaN(t[g])) {
          var x = t[g] / 180 * pe;
          c += Za(x) * a[0], d += Wa(x) * a[0];
        }
      var p = l.alpha() * a[0];
      r.forEach(function(O, P) {
        var S = O.get(e);
        p += O.alpha() * a[P + 1];
        for (var T = 0; T < t.length; T++)
          if (!isNaN(S[T]))
            if (i[T] += a[P + 1], e.charAt(T) === "h") {
              var V = S[T] / 180 * pe;
              c += Za(V) * a[P + 1], d += Wa(V) * a[P + 1];
            } else
              t[T] += S[T] * a[P + 1];
      });
      for (var $ = 0; $ < t.length; $++)
        if (e.charAt($) === "h") {
          for (var _ = ul(d / i[$], c / i[$]) / pe * 180; _ < 0; )
            _ += 360;
          for (; _ >= 360; )
            _ -= 360;
          t[$] = _;
        } else
          t[$] = t[$] / i[$];
      return p /= n, new de(t, e).alpha(p > 0.99999 ? 1 : p, !0);
    }, fl = function(r, e) {
      for (var a = r.length, n = [0, 0, 0, 0], o = 0; o < r.length; o++) {
        var l = r[o], t = e[o] / a, i = l._rgb;
        n[0] += ge(i[0], 2) * t, n[1] += ge(i[1], 2) * t, n[2] += ge(i[2], 2) * t, n[3] += i[3] * t;
      }
      return n[0] = he(n[0]), n[1] = he(n[1]), n[2] = he(n[2]), n[3] > 0.9999999 && (n[3] = 1), new de(ol(n));
    }, rr = q, Ar = w.type, il = Math.pow, be = function(r) {
      var e = "rgb", a = rr("#ccc"), n = 0, o = [0, 1], l = [], t = [0, 0], i = !1, c = [], d = !1, g = 0, x = 1, p = !1, $ = {}, _ = !0, O = 1, P = function(b) {
        if (b = b || ["#fff", "#000"], b && Ar(b) === "string" && rr.brewer && rr.brewer[b.toLowerCase()] && (b = rr.brewer[b.toLowerCase()]), Ar(b) === "array") {
          b.length === 1 && (b = [b[0], b[0]]), b = b.slice(0);
          for (var C = 0; C < b.length; C++)
            b[C] = rr(b[C]);
          l.length = 0;
          for (var I = 0; I < b.length; I++)
            l.push(I / (b.length - 1));
        }
        return J(), c = b;
      }, S = function(b) {
        if (i != null) {
          for (var C = i.length - 1, I = 0; I < C && b >= i[I]; )
            I++;
          return I - 1;
        }
        return 0;
      }, T = function(b) {
        return b;
      }, V = function(b) {
        return b;
      }, U = function(b, C) {
        var I, N;
        if (C == null && (C = !1), isNaN(b) || b === null)
          return a;
        if (C)
          N = b;
        else if (i && i.length > 2) {
          var Y = S(b);
          N = Y / (i.length - 2);
        } else
          x !== g ? N = (b - g) / (x - g) : N = 1;
        N = V(N), C || (N = T(N)), O !== 1 && (N = il(N, O)), N = t[0] + N * (1 - t[0] - t[1]), N = Math.min(1, Math.max(0, N));
        var j = Math.floor(N * 1e4);
        if (_ && $[j])
          I = $[j];
        else {
          if (Ar(c) === "array")
            for (var F = 0; F < l.length; F++) {
              var L = l[F];
              if (N <= L) {
                I = c[F];
                break;
              }
              if (N >= L && F === l.length - 1) {
                I = c[F];
                break;
              }
              if (N > L && N < l[F + 1]) {
                N = (N - L) / (l[F + 1] - L), I = rr.interpolate(c[F], c[F + 1], N, e);
                break;
              }
            }
          else
            Ar(c) === "function" && (I = c(N));
          _ && ($[j] = I);
        }
        return I;
      }, J = function() {
        return $ = {};
      };
      P(r);
      var D = function(b) {
        var C = rr(U(b));
        return d && C[d] ? C[d]() : C;
      };
      return D.classes = function(b) {
        if (b != null) {
          if (Ar(b) === "array")
            i = b, o = [b[0], b[b.length - 1]];
          else {
            var C = rr.analyze(o);
            b === 0 ? i = [C.min, C.max] : i = rr.limits(C, "e", b);
          }
          return D;
        }
        return i;
      }, D.domain = function(b) {
        if (!arguments.length)
          return o;
        g = b[0], x = b[b.length - 1], l = [];
        var C = c.length;
        if (b.length === C && g !== x)
          for (var I = 0, N = Array.from(b); I < N.length; I += 1) {
            var Y = N[I];
            l.push((Y - g) / (x - g));
          }
        else {
          for (var j = 0; j < C; j++)
            l.push(j / (C - 1));
          if (b.length > 2) {
            var F = b.map(function(z, K) {
              return K / (b.length - 1);
            }), L = b.map(function(z) {
              return (z - g) / (x - g);
            });
            L.every(function(z, K) {
              return F[K] === z;
            }) || (V = function(z) {
              if (z <= 0 || z >= 1)
                return z;
              for (var K = 0; z >= L[K + 1]; )
                K++;
              var ar = (z - L[K]) / (L[K + 1] - L[K]), dr = F[K] + ar * (F[K + 1] - F[K]);
              return dr;
            });
          }
        }
        return o = [g, x], D;
      }, D.mode = function(b) {
        return arguments.length ? (e = b, J(), D) : e;
      }, D.range = function(b, C) {
        return P(b), D;
      }, D.out = function(b) {
        return d = b, D;
      }, D.spread = function(b) {
        return arguments.length ? (n = b, D) : n;
      }, D.correctLightness = function(b) {
        return b == null && (b = !0), p = b, J(), p ? T = function(C) {
          for (var I = U(0, !0).lab()[0], N = U(1, !0).lab()[0], Y = I > N, j = U(C, !0).lab()[0], F = I + (N - I) * C, L = j - F, z = 0, K = 1, ar = 20; Math.abs(L) > 0.01 && ar-- > 0; )
            (function() {
              return Y && (L *= -1), L < 0 ? (z = C, C += (K - C) * 0.5) : (K = C, C += (z - C) * 0.5), j = U(C, !0).lab()[0], L = j - F;
            })();
          return C;
        } : T = function(C) {
          return C;
        }, D;
      }, D.padding = function(b) {
        return b != null ? (Ar(b) === "number" && (b = [b, b]), t = b, D) : t;
      }, D.colors = function(b, C) {
        arguments.length < 2 && (C = "hex");
        var I = [];
        if (arguments.length === 0)
          I = c.slice(0);
        else if (b === 1)
          I = [D(0.5)];
        else if (b > 1) {
          var N = o[0], Y = o[1] - N;
          I = cl(0, b, !1).map(function(K) {
            return D(N + K / (b - 1) * Y);
          });
        } else {
          r = [];
          var j = [];
          if (i && i.length > 2)
            for (var F = 1, L = i.length, z = 1 <= L; z ? F < L : F > L; z ? F++ : F--)
              j.push((i[F - 1] + i[F]) * 0.5);
          else
            j = o;
          I = j.map(function(K) {
            return D(K);
          });
        }
        return rr[C] && (I = I.map(function(K) {
          return K[C]();
        })), I;
      }, D.cache = function(b) {
        return b != null ? (_ = b, D) : _;
      }, D.gamma = function(b) {
        return b != null ? (O = b, D) : O;
      }, D.nodata = function(b) {
        return b != null ? (a = rr(b), D) : a;
      }, D;
    };
    function cl(r, e, a) {
      for (var n = [], o = r < e, l = a ? o ? e + 1 : e - 1 : e, t = r; o ? t < l : t > l; o ? t++ : t--)
        n.push(t);
      return n;
    }
    var Nr = M, vl = be, sl = function(r) {
      for (var e = [1, 1], a = 1; a < r; a++) {
        for (var n = [1], o = 1; o <= e.length; o++)
          n[o] = (e[o] || 0) + e[o - 1];
        e = n;
      }
      return e;
    }, dl = function(r) {
      var e, a, n, o, l, t, i;
      if (r = r.map(function(p) {
        return new Nr(p);
      }), r.length === 2)
        e = r.map(function(p) {
          return p.lab();
        }), l = e[0], t = e[1], o = function(p) {
          var $ = [0, 1, 2].map(function(_) {
            return l[_] + p * (t[_] - l[_]);
          });
          return new Nr($, "lab");
        };
      else if (r.length === 3)
        a = r.map(function(p) {
          return p.lab();
        }), l = a[0], t = a[1], i = a[2], o = function(p) {
          var $ = [0, 1, 2].map(function(_) {
            return (1 - p) * (1 - p) * l[_] + 2 * (1 - p) * p * t[_] + p * p * i[_];
          });
          return new Nr($, "lab");
        };
      else if (r.length === 4) {
        var c;
        n = r.map(function(p) {
          return p.lab();
        }), l = n[0], t = n[1], i = n[2], c = n[3], o = function(p) {
          var $ = [0, 1, 2].map(function(_) {
            return (1 - p) * (1 - p) * (1 - p) * l[_] + 3 * (1 - p) * (1 - p) * p * t[_] + 3 * (1 - p) * p * p * i[_] + p * p * p * c[_];
          });
          return new Nr($, "lab");
        };
      } else if (r.length >= 5) {
        var d, g, x;
        d = r.map(function(p) {
          return p.lab();
        }), x = r.length - 1, g = sl(x), o = function(p) {
          var $ = 1 - p, _ = [0, 1, 2].map(function(O) {
            return d.reduce(function(P, S, T) {
              return P + g[T] * Math.pow($, x - T) * Math.pow(p, T) * S[O];
            }, 0);
          });
          return new Nr(_, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return o;
    }, gl = function(r) {
      var e = dl(r);
      return e.scale = function() {
        return vl(e);
      }, e;
    }, me = q, er = function(r, e, a) {
      if (!er[a])
        throw new Error("unknown blend mode " + a);
      return er[a](r, e);
    }, vr = function(r) {
      return function(e, a) {
        var n = me(a).rgb(), o = me(e).rgb();
        return me.rgb(r(n, o));
      };
    }, sr = function(r) {
      return function(e, a) {
        var n = [];
        return n[0] = r(e[0], a[0]), n[1] = r(e[1], a[1]), n[2] = r(e[2], a[2]), n;
      };
    }, hl = function(r) {
      return r;
    }, pl = function(r, e) {
      return r * e / 255;
    }, bl = function(r, e) {
      return r > e ? e : r;
    }, ml = function(r, e) {
      return r > e ? r : e;
    }, yl = function(r, e) {
      return 255 * (1 - (1 - r / 255) * (1 - e / 255));
    }, wl = function(r, e) {
      return e < 128 ? 2 * r * e / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - e / 255));
    }, El = function(r, e) {
      return 255 * (1 - (1 - e / 255) / (r / 255));
    }, xl = function(r, e) {
      return r === 255 ? 255 : (r = 255 * (e / 255) / (1 - r / 255), r > 255 ? 255 : r);
    };
    er.normal = vr(sr(hl)), er.multiply = vr(sr(pl)), er.screen = vr(sr(yl)), er.overlay = vr(sr(wl)), er.darken = vr(sr(bl)), er.lighten = vr(sr(ml)), er.dodge = vr(sr(xl)), er.burn = vr(sr(El));
    for (var _l = er, ye = w.type, $l = w.clip_rgb, kl = w.TWOPI, Al = Math.pow, Cl = Math.sin, Ml = Math.cos, Ua = q, Ol = function(r, e, a, n, o) {
      r === void 0 && (r = 300), e === void 0 && (e = -1.5), a === void 0 && (a = 1), n === void 0 && (n = 1), o === void 0 && (o = [0, 1]);
      var l = 0, t;
      ye(o) === "array" ? t = o[1] - o[0] : (t = 0, o = [o, o]);
      var i = function(c) {
        var d = kl * ((r + 120) / 360 + e * c), g = Al(o[0] + t * c, n), x = l !== 0 ? a[0] + c * l : a, p = x * g * (1 - g) / 2, $ = Ml(d), _ = Cl(d), O = g + p * (-0.14861 * $ + 1.78277 * _), P = g + p * (-0.29227 * $ - 0.90649 * _), S = g + p * (1.97294 * $);
        return Ua($l([O * 255, P * 255, S * 255, 1]));
      };
      return i.start = function(c) {
        return c == null ? r : (r = c, i);
      }, i.rotations = function(c) {
        return c == null ? e : (e = c, i);
      }, i.gamma = function(c) {
        return c == null ? n : (n = c, i);
      }, i.hue = function(c) {
        return c == null ? a : (a = c, ye(a) === "array" ? (l = a[1] - a[0], l === 0 && (a = a[1])) : l = 0, i);
      }, i.lightness = function(c) {
        return c == null ? o : (ye(c) === "array" ? (o = c, t = c[1] - c[0]) : (o = [c, c], t = 0), i);
      }, i.scale = function() {
        return Ua.scale(i);
      }, i.hue(a), i;
    }, Nl = M, Il = "0123456789abcdef", Pl = Math.floor, Dl = Math.random, Sl = function() {
      for (var r = "#", e = 0; e < 6; e++)
        r += Il.charAt(Pl(Dl() * 16));
      return new Nl(r, "hex");
    }, we = k, Va = Math.log, Fl = Math.pow, Rl = Math.floor, Tl = Math.abs, Ya = function(r, e) {
      e === void 0 && (e = null);
      var a = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return we(r) === "object" && (r = Object.values(r)), r.forEach(function(n) {
        e && we(n) === "object" && (n = n[e]), n != null && !isNaN(n) && (a.values.push(n), a.sum += n, n < a.min && (a.min = n), n > a.max && (a.max = n), a.count += 1);
      }), a.domain = [a.min, a.max], a.limits = function(n, o) {
        return Xa(a, n, o);
      }, a;
    }, Xa = function(r, e, a) {
      e === void 0 && (e = "equal"), a === void 0 && (a = 7), we(r) == "array" && (r = Ya(r));
      var n = r.min, o = r.max, l = r.values.sort(function(xe, _e) {
        return xe - _e;
      });
      if (a === 1)
        return [n, o];
      var t = [];
      if (e.substr(0, 1) === "c" && (t.push(n), t.push(o)), e.substr(0, 1) === "e") {
        t.push(n);
        for (var i = 1; i < a; i++)
          t.push(n + i / a * (o - n));
        t.push(o);
      } else if (e.substr(0, 1) === "l") {
        if (n <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var c = Math.LOG10E * Va(n), d = Math.LOG10E * Va(o);
        t.push(n);
        for (var g = 1; g < a; g++)
          t.push(Fl(10, c + g / a * (d - c)));
        t.push(o);
      } else if (e.substr(0, 1) === "q") {
        t.push(n);
        for (var x = 1; x < a; x++) {
          var p = (l.length - 1) * x / a, $ = Rl(p);
          if ($ === p)
            t.push(l[$]);
          else {
            var _ = p - $;
            t.push(l[$] * (1 - _) + l[$ + 1] * _);
          }
        }
        t.push(o);
      } else if (e.substr(0, 1) === "k") {
        var O, P = l.length, S = new Array(P), T = new Array(a), V = !0, U = 0, J = null;
        J = [], J.push(n);
        for (var D = 1; D < a; D++)
          J.push(n + D / a * (o - n));
        for (J.push(o); V; ) {
          for (var b = 0; b < a; b++)
            T[b] = 0;
          for (var C = 0; C < P; C++)
            for (var I = l[C], N = Number.MAX_VALUE, Y = void 0, j = 0; j < a; j++) {
              var F = Tl(J[j] - I);
              F < N && (N = F, Y = j), T[Y]++, S[C] = Y;
            }
          for (var L = new Array(a), z = 0; z < a; z++)
            L[z] = null;
          for (var K = 0; K < P; K++)
            O = S[K], L[O] === null ? L[O] = l[K] : L[O] += l[K];
          for (var ar = 0; ar < a; ar++)
            L[ar] *= 1 / T[ar];
          V = !1;
          for (var dr = 0; dr < a; dr++)
            if (L[dr] !== J[dr]) {
              V = !0;
              break;
            }
          J = L, U++, U > 200 && (V = !1);
        }
        for (var gr = {}, Cr = 0; Cr < a; Cr++)
          gr[Cr] = [];
        for (var Mr = 0; Mr < P; Mr++)
          O = S[Mr], gr[O].push(l[Mr]);
        for (var fr = [], br = 0; br < a; br++)
          fr.push(gr[br][0]), fr.push(gr[br][gr[br].length - 1]);
        fr = fr.sort(function(xe, _e) {
          return xe - _e;
        }), t.push(fr[0]);
        for (var Ir = 1; Ir < fr.length; Ir += 2) {
          var mr = fr[Ir];
          !isNaN(mr) && t.indexOf(mr) === -1 && t.push(mr);
        }
      }
      return t;
    }, Ja = { analyze: Ya, limits: Xa }, Qa = M, Ll = function(r, e) {
      r = new Qa(r), e = new Qa(e);
      var a = r.luminance(), n = e.luminance();
      return a > n ? (a + 0.05) / (n + 0.05) : (n + 0.05) / (a + 0.05);
    }, rn = M, lr = Math.sqrt, Z = Math.pow, zl = Math.min, Kl = Math.max, en = Math.atan2, an = Math.abs, jr = Math.cos, nn = Math.sin, jl = Math.exp, tn = Math.PI, Bl = function(r, e, a, n, o) {
      a === void 0 && (a = 1), n === void 0 && (n = 1), o === void 0 && (o = 1);
      var l = function(mr) {
        return 360 * mr / (2 * tn);
      }, t = function(mr) {
        return 2 * tn * mr / 360;
      };
      r = new rn(r), e = new rn(e);
      var i = Array.from(r.lab()), c = i[0], d = i[1], g = i[2], x = Array.from(e.lab()), p = x[0], $ = x[1], _ = x[2], O = (c + p) / 2, P = lr(Z(d, 2) + Z(g, 2)), S = lr(Z($, 2) + Z(_, 2)), T = (P + S) / 2, V = 0.5 * (1 - lr(Z(T, 7) / (Z(T, 7) + Z(25, 7)))), U = d * (1 + V), J = $ * (1 + V), D = lr(Z(U, 2) + Z(g, 2)), b = lr(Z(J, 2) + Z(_, 2)), C = (D + b) / 2, I = l(en(g, U)), N = l(en(_, J)), Y = I >= 0 ? I : I + 360, j = N >= 0 ? N : N + 360, F = an(Y - j) > 180 ? (Y + j + 360) / 2 : (Y + j) / 2, L = 1 - 0.17 * jr(t(F - 30)) + 0.24 * jr(t(2 * F)) + 0.32 * jr(t(3 * F + 6)) - 0.2 * jr(t(4 * F - 63)), z = j - Y;
      z = an(z) <= 180 ? z : j <= Y ? z + 360 : z - 360, z = 2 * lr(D * b) * nn(t(z) / 2);
      var K = p - c, ar = b - D, dr = 1 + 0.015 * Z(O - 50, 2) / lr(20 + Z(O - 50, 2)), gr = 1 + 0.045 * C, Cr = 1 + 0.015 * C * L, Mr = 30 * jl(-Z((F - 275) / 25, 2)), fr = 2 * lr(Z(C, 7) / (Z(C, 7) + Z(25, 7))), br = -fr * nn(2 * t(Mr)), Ir = lr(Z(K / (a * dr), 2) + Z(ar / (n * gr), 2) + Z(z / (o * Cr), 2) + br * (ar / (n * gr)) * (z / (o * Cr)));
      return Kl(0, zl(100, Ir));
    }, on = M, Hl = function(r, e, a) {
      a === void 0 && (a = "lab"), r = new on(r), e = new on(e);
      var n = r.get(a), o = e.get(a), l = 0;
      for (var t in n) {
        var i = (n[t] || 0) - (o[t] || 0);
        l += i * i;
      }
      return Math.sqrt(l);
    }, Gl = M, ql = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      try {
        return new (Function.prototype.bind.apply(Gl, [null].concat(r)))(), !0;
      } catch {
        return !1;
      }
    }, un = q, ln = be, Zl = {
      cool: function() {
        return ln([un.hsl(180, 1, 0.9), un.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return ln(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Br = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, Ee = 0, fn = Object.keys(Br); Ee < fn.length; Ee += 1) {
      var cn = fn[Ee];
      Br[cn.toLowerCase()] = Br[cn];
    }
    var Wl = Br, W = q;
    W.average = ll, W.bezier = gl, W.blend = _l, W.cubehelix = Ol, W.mix = W.interpolate = za, W.random = Sl, W.scale = be, W.analyze = Ja.analyze, W.contrast = Ll, W.deltaE = Bl, W.distance = Hl, W.limits = Ja.limits, W.valid = ql, W.scales = Zl, W.colors = Ea, W.brewer = Wl;
    var Ul = W;
    return Ul;
  });
})(dn);
var Xl = dn.exports;
const Mf = /* @__PURE__ */ Yl(Xl);
function Gr(s, v) {
  if (!(s instanceof v))
    throw new TypeError("Cannot call a class as a function");
}
function vn(s, v) {
  for (var u = 0; u < v.length; u++) {
    var f = v[u];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(s, f.key, f);
  }
}
function Me(s, v, u) {
  return v && vn(s.prototype, v), u && vn(s, u), s;
}
function H(s, v, u) {
  return v in s ? Object.defineProperty(s, v, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[v] = u, s;
}
function tr() {
  return tr = Object.assign || function(s) {
    for (var v = 1; v < arguments.length; v++) {
      var u = arguments[v];
      for (var f in u)
        Object.prototype.hasOwnProperty.call(u, f) && (s[f] = u[f]);
    }
    return s;
  }, tr.apply(this, arguments);
}
function sn(s, v) {
  var u = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(s);
    v && (f = f.filter(function(m) {
      return Object.getOwnPropertyDescriptor(s, m).enumerable;
    })), u.push.apply(u, f);
  }
  return u;
}
function Jl(s) {
  for (var v = 1; v < arguments.length; v++) {
    var u = arguments[v] != null ? arguments[v] : {};
    v % 2 ? sn(Object(u), !0).forEach(function(f) {
      H(s, f, u[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u)) : sn(Object(u)).forEach(function(f) {
      Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(u, f));
    });
  }
  return s;
}
function Oe(s, v) {
  if (typeof v != "function" && v !== null)
    throw new TypeError("Super expression must either be null or a function");
  s.prototype = Object.create(v && v.prototype, {
    constructor: {
      value: s,
      writable: !0,
      configurable: !0
    }
  }), v && ke(s, v);
}
function Hr(s) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(u) {
    return u.__proto__ || Object.getPrototypeOf(u);
  }, Hr(s);
}
function ke(s, v) {
  return ke = Object.setPrototypeOf || function(f, m) {
    return f.__proto__ = m, f;
  }, ke(s, v);
}
function Ql() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rf(s, v) {
  if (s == null)
    return {};
  var u = {}, f = Object.keys(s), m, h;
  for (h = 0; h < f.length; h++)
    m = f[h], !(v.indexOf(m) >= 0) && (u[m] = s[m]);
  return u;
}
function qr(s, v) {
  if (s == null)
    return {};
  var u = rf(s, v), f, m;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(s);
    for (m = 0; m < h.length; m++)
      f = h[m], !(v.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(s, f) && (u[f] = s[f]);
  }
  return u;
}
function nr(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function ef(s, v) {
  return v && (typeof v == "object" || typeof v == "function") ? v : nr(s);
}
function Ne(s) {
  var v = Ql();
  return function() {
    var f = Hr(s), m;
    if (v) {
      var h = Hr(this).constructor;
      m = Reflect.construct(f, arguments, h);
    } else
      m = f.apply(this, arguments);
    return ef(this, m);
  };
}
function af(s, v) {
  return of(s) || lf(s, v) || gn(s, v) || cf();
}
function nf(s) {
  return tf(s) || uf(s) || gn(s) || ff();
}
function tf(s) {
  if (Array.isArray(s))
    return Ae(s);
}
function of(s) {
  if (Array.isArray(s))
    return s;
}
function uf(s) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(s))
    return Array.from(s);
}
function lf(s, v) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
    var u = [], f = !0, m = !1, h = void 0;
    try {
      for (var E = s[Symbol.iterator](), y; !(f = (y = E.next()).done) && (u.push(y.value), !(v && u.length === v)); f = !0)
        ;
    } catch (A) {
      m = !0, h = A;
    } finally {
      try {
        !f && E.return != null && E.return();
      } finally {
        if (m)
          throw h;
      }
    }
    return u;
  }
}
function gn(s, v) {
  if (s) {
    if (typeof s == "string")
      return Ae(s, v);
    var u = Object.prototype.toString.call(s).slice(8, -1);
    if (u === "Object" && s.constructor && (u = s.constructor.name), u === "Map" || u === "Set")
      return Array.from(s);
    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
      return Ae(s, v);
  }
}
function Ae(s, v) {
  (v == null || v > s.length) && (v = s.length);
  for (var u = 0, f = new Array(v); u < v; u++)
    f[u] = s[u];
  return f;
}
function ff() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vf = function s(v) {
  var u = this, f = v.expanded, m = f === void 0 ? [] : f, h = v.allowMultipleExpanded, E = h === void 0 ? !1 : h, y = v.allowZeroExpanded, A = y === void 0 ? !1 : y;
  Gr(this, s), H(this, "expanded", void 0), H(this, "allowMultipleExpanded", void 0), H(this, "allowZeroExpanded", void 0), H(this, "toggleExpanded", function(k) {
    if (u.isItemDisabled(k))
      return u;
    var R = u.isItemExpanded(k);
    return R ? u.augment({
      expanded: u.expanded.filter(function(X) {
        return X !== k;
      })
    }) : u.augment({
      expanded: u.allowMultipleExpanded ? [].concat(nf(u.expanded), [k]) : [k]
    });
  }), H(this, "isItemDisabled", function(k) {
    var R = u.isItemExpanded(k), X = u.expanded.length === 1;
    return !!(R && !u.allowZeroExpanded && X);
  }), H(this, "isItemExpanded", function(k) {
    return u.expanded.indexOf(k) !== -1;
  }), H(this, "getPanelAttributes", function(k, R) {
    var X = R ?? u.isItemExpanded(k);
    return {
      role: u.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": u.allowMultipleExpanded ? !X : void 0,
      "aria-labelledby": u.getButtonId(k),
      id: u.getPanelId(k),
      hidden: X ? void 0 : !0
    };
  }), H(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), H(this, "getButtonAttributes", function(k, R) {
    var X = R ?? u.isItemExpanded(k), or = u.isItemDisabled(k);
    return {
      id: u.getButtonId(k),
      "aria-disabled": or,
      "aria-expanded": X,
      "aria-controls": u.getPanelId(k),
      role: "button",
      tabIndex: 0
    };
  }), H(this, "getPanelId", function(k) {
    return "accordion__panel-".concat(k);
  }), H(this, "getButtonId", function(k) {
    return "accordion__heading-".concat(k);
  }), H(this, "augment", function(k) {
    return new s(Jl({
      expanded: u.expanded,
      allowMultipleExpanded: u.allowMultipleExpanded,
      allowZeroExpanded: u.allowZeroExpanded
    }, k));
  }), this.expanded = m, this.allowMultipleExpanded = E, this.allowZeroExpanded = A;
}, hn = /* @__PURE__ */ B.createContext(null), pn = /* @__PURE__ */ function(s) {
  Oe(u, s);
  var v = Ne(u);
  function u() {
    var f;
    Gr(this, u);
    for (var m = arguments.length, h = new Array(m), E = 0; E < m; E++)
      h[E] = arguments[E];
    return f = v.call.apply(v, [this].concat(h)), H(nr(f), "state", new vf({
      expanded: f.props.preExpanded,
      allowMultipleExpanded: f.props.allowMultipleExpanded,
      allowZeroExpanded: f.props.allowZeroExpanded
    })), H(nr(f), "toggleExpanded", function(y) {
      f.setState(function(A) {
        return A.toggleExpanded(y);
      }, function() {
        f.props.onChange && f.props.onChange(f.state.expanded);
      });
    }), H(nr(f), "isItemDisabled", function(y) {
      return f.state.isItemDisabled(y);
    }), H(nr(f), "isItemExpanded", function(y) {
      return f.state.isItemExpanded(y);
    }), H(nr(f), "getPanelAttributes", function(y, A) {
      return f.state.getPanelAttributes(y, A);
    }), H(nr(f), "getHeadingAttributes", function() {
      return f.state.getHeadingAttributes();
    }), H(nr(f), "getButtonAttributes", function(y, A) {
      return f.state.getButtonAttributes(y, A);
    }), f;
  }
  return Me(u, [{
    key: "render",
    value: function() {
      var m = this.state, h = m.allowZeroExpanded, E = m.allowMultipleExpanded;
      return /* @__PURE__ */ B.createElement(hn.Provider, {
        value: {
          allowMultipleExpanded: E,
          allowZeroExpanded: h,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]), u;
}(B.PureComponent);
H(pn, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var bn = /* @__PURE__ */ function(s) {
  Oe(u, s);
  var v = Ne(u);
  function u() {
    var f;
    Gr(this, u);
    for (var m = arguments.length, h = new Array(m), E = 0; E < m; E++)
      h[E] = arguments[E];
    return f = v.call.apply(v, [this].concat(h)), H(nr(f), "renderChildren", function(y) {
      return y ? f.props.children(y) : null;
    }), f;
  }
  return Me(u, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ B.createElement(hn.Consumer, null, this.renderChildren);
    }
  }]), u;
}(B.PureComponent), Of = function(v) {
  var u = v.className, f = u === void 0 ? "accordion" : u, m = v.allowMultipleExpanded, h = v.allowZeroExpanded, E = v.onChange, y = v.preExpanded, A = qr(v, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ B.createElement(pn, {
    preExpanded: y,
    allowMultipleExpanded: m,
    allowZeroExpanded: h,
    onChange: E
  }, /* @__PURE__ */ B.createElement("div", tr({
    "data-accordion-component": "Accordion",
    className: f
  }, A)));
}, Ce;
(function(s) {
  s.Accordion = "Accordion", s.AccordionItem = "AccordionItem", s.AccordionItemButton = "AccordionItemButton", s.AccordionItemHeading = "AccordionItemHeading", s.AccordionItemPanel = "AccordionItemPanel";
})(Ce || (Ce = {}));
var mn = Ce, sf = 0, $e = sf;
function df() {
  var s = $e;
  return $e = $e + 1, "raa-".concat(s);
}
var gf = /[\u0009\u000a\u000c\u000d\u0020]/g;
function Pr(s) {
  return s === "" || gf.test(s) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(s, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var yn = /* @__PURE__ */ B.createContext(null), hf = function(v) {
  var u = v.children, f = v.uuid, m = v.accordionContext, h = v.dangerouslySetExpanded, E = function() {
    m.toggleExpanded(f);
  }, y = function(k) {
    var R = h ?? k.isItemExpanded(f), X = k.isItemDisabled(f), or = k.getPanelAttributes(f, h), cr = k.getHeadingAttributes(f), ur = k.getButtonAttributes(f, h);
    return /* @__PURE__ */ B.createElement(yn.Provider, {
      value: {
        uuid: f,
        expanded: R,
        disabled: X,
        toggleExpanded: E,
        panelAttributes: or,
        headingAttributes: cr,
        buttonAttributes: ur
      }
    }, u);
  };
  return /* @__PURE__ */ B.createElement(bn, null, y);
}, pf = function(v) {
  return /* @__PURE__ */ B.createElement(bn, null, function(u) {
    return /* @__PURE__ */ B.createElement(hf, tr({}, v, {
      accordionContext: u
    }));
  });
}, Zr = function(v) {
  var u = v.children, f = function(h) {
    return h ? u(h) : null;
  };
  return /* @__PURE__ */ B.createElement(yn.Consumer, null, f);
}, bf = function(v) {
  var u = v.uuid, f = v.dangerouslySetExpanded, m = v.className, h = m === void 0 ? "accordion__item" : m, E = v.activeClassName, y = qr(v, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), A = B.useState(df()), k = af(A, 1), R = k[0], X = u ?? R, or = function(ur) {
    var w = ur.expanded, G = w && E ? E : h;
    return /* @__PURE__ */ B.createElement("div", tr({
      "data-accordion-component": "AccordionItem",
      className: G
    }, y));
  };
  return Pr(X.toString()), y.id && Pr(y.id), /* @__PURE__ */ B.createElement(pf, {
    uuid: X,
    dangerouslySetExpanded: f
  }, /* @__PURE__ */ B.createElement(Zr, null, or));
};
bf.displayName = mn.AccordionItem;
function wn(s) {
  return s && (s.matches('[data-accordion-component="Accordion"]') ? s : wn(s.parentElement));
}
function Wr(s) {
  var v = wn(s);
  return v && Array.from(v.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function mf(s) {
  var v = Wr(s) || [], u = v[0];
  u && u.focus();
}
function yf(s) {
  var v = Wr(s) || [], u = v[v.length - 1];
  u && u.focus();
}
function wf(s) {
  var v = Wr(s) || [], u = v.indexOf(s);
  if (u !== -1) {
    var f = v[u + 1];
    f && f.focus();
  }
}
function Ef(s) {
  var v = Wr(s) || [], u = v.indexOf(s);
  if (u !== -1) {
    var f = v[u - 1];
    f && f.focus();
  }
}
var ir = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, xf = function(v) {
  var u = v.toggleExpanded, f = v.className, m = f === void 0 ? "accordion__button" : f, h = qr(v, ["toggleExpanded", "className"]), E = function(A) {
    var k = A.key;
    if ((k === ir.ENTER || k === ir.SPACE || k === ir.SPACE_DEPRECATED) && (A.preventDefault(), u()), A.target instanceof HTMLElement)
      switch (k) {
        case ir.HOME: {
          A.preventDefault(), mf(A.target);
          break;
        }
        case ir.END: {
          A.preventDefault(), yf(A.target);
          break;
        }
        case ir.LEFT:
        case ir.UP: {
          A.preventDefault(), Ef(A.target);
          break;
        }
        case ir.RIGHT:
        case ir.DOWN: {
          A.preventDefault(), wf(A.target);
          break;
        }
      }
  };
  return h.id && Pr(h.id), /* @__PURE__ */ B.createElement("div", tr({
    className: m
  }, h, {
    role: "button",
    tabIndex: 0,
    onClick: u,
    onKeyDown: E,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Nf = function(v) {
  return /* @__PURE__ */ B.createElement(Zr, null, function(u) {
    var f = u.toggleExpanded, m = u.buttonAttributes;
    return /* @__PURE__ */ B.createElement(xf, tr({
      toggleExpanded: f
    }, v, m));
  });
}, _f = {
  className: "accordion__heading",
  "aria-level": 3
}, $f = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, En = /* @__PURE__ */ function(s) {
  Oe(u, s);
  var v = Ne(u);
  function u() {
    var f;
    Gr(this, u);
    for (var m = arguments.length, h = new Array(m), E = 0; E < m; E++)
      h[E] = arguments[E];
    return f = v.call.apply(v, [this].concat(h)), H(nr(f), "ref", void 0), H(nr(f), "setRef", function(y) {
      f.ref = y;
    }), f;
  }
  return Me(u, [{
    key: "componentDidUpdate",
    value: function() {
      u.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      u.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ B.createElement("div", tr({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function(m) {
      if (m === void 0)
        throw new Error("ref is undefined");
      if (!(m.childElementCount === 1 && m.firstElementChild && m.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton"))
        throw new Error($f);
    }
  }]), u;
}(B.PureComponent);
H(En, "defaultProps", _f);
var kf = function(v) {
  return /* @__PURE__ */ B.createElement(Zr, null, function(u) {
    var f = u.headingAttributes;
    return v.id && Pr(v.id), /* @__PURE__ */ B.createElement(En, tr({}, v, f));
  });
};
kf.displayName = mn.AccordionItemHeading;
var If = function(v) {
  var u = v.className, f = u === void 0 ? "accordion__panel" : u, m = v.id, h = qr(v, ["className", "id"]), E = function(A) {
    var k = A.panelAttributes;
    return m && Pr(m), /* @__PURE__ */ B.createElement("div", tr({
      "data-accordion-component": "AccordionItemPanel",
      className: f
    }, h, k));
  };
  return /* @__PURE__ */ B.createElement(Zr, null, E);
};
class Pf {
  constructor() {
    this.constants = {
      errorMessageEmtpyData: "Your data file is empty.",
      errorMessageFormat: "Your datatype is not supported.",
      descriptionHeader: 1,
      descriptionRoot: 2,
      descriptionSeriesFilter: 3
    };
  }
  //Performs standardizations that can be completed automatically without use input
  autoStandardize(v) {
    const u = [];
    if ((!v || v.length === 0) && u.push(this.constants.errorMessageEmptyData), (!(v != null && v.filter) || v.filter((f) => typeof f != "object").length > 0) && u.push(this.constants.errorMessageFormat), u.length > 0) {
      console.error(u);
      return;
    }
    if (v.filter((f) => f.constructor !== Object).length > 0) {
      let f = [];
      for (let m = 1; m < v.length; m++) {
        let h = {};
        v[m].forEach((E, y) => {
          h[v[0][y]] = E;
        }), f.push(h);
      }
      v = f;
    }
    return v;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(v, u) {
    if (!v)
      return [];
    if (u && !(u.horizontal === void 0 || u.series === void 0) && !(u.series === !0 && u.horizontal === !1 && u.singleRow === void 0)) {
      if (u.horizontal === !0)
        if (u.series === !0) {
          if (!u.seriesKey)
            return;
          let f = {}, m = [];
          return v.forEach((h) => {
            let E = [];
            Object.keys(h).forEach((y) => {
              y !== u.seriesKey && isNaN(parseFloat(h[y])) && E.push(y);
            }), Object.keys(h).forEach((y) => {
              if (y !== u.seriesKey && E.indexOf(y) === -1) {
                let A = y + "|" + E.map((k) => k + "=" + h[k]);
                f[A] || (f[A] = { [h[u.seriesKey]]: h[y], key: y }, E.forEach((k) => {
                  f[A][k] = h[k];
                })), f[A][h[u.seriesKey]] = h[y];
              }
            });
          }), Object.keys(f).forEach((h) => {
            m.push(f[h]);
          }), m;
        } else {
          let f = [];
          return v.forEach((m) => {
            let h = [];
            Object.keys(m).forEach((E) => {
              isNaN(parseFloat(m[E])) && h.push(E);
            }), Object.keys(m).forEach((E) => {
              if (h.indexOf(E) === -1) {
                let y = { key: E, value: m[E] };
                h.forEach((A) => {
                  y[A] = m[A];
                }), f.push(y);
              }
            });
          }), f;
        }
      else if (u.series === !0 && u.singleRow === !1)
        if (u.seriesKey !== void 0 && u.xKey !== void 0 && (u.valueKey !== void 0 || u.valueKeys !== void 0 && u.valueKeys.length > 0 || u.valueKeysTallSupport !== void 0 && u.valueKeysTallSupport.length > 0))
          if (u.valueKeysTallSupport !== void 0) {
            let f = {}, m = [];
            return v.forEach((h) => {
              let E = h[u.xKey];
              Object.keys(h).forEach((y) => {
                y !== u.xKey && y !== u.seriesKey && u.valueKeysTallSupport.indexOf(y) === -1 && (!u.ignoredKeys || u.ignoredKeys.indexOf(y) === -1) && (E += "|" + h[y]);
              }), f[E] || (f[E] = { [u.xKey]: h[u.xKey] }), Object.keys(h).forEach((y) => {
                y !== u.xKey && y !== u.seriesKey && u.valueKeysTallSupport.indexOf(y) === -1 && (!u.ignoredKeys || u.ignoredKeys.indexOf(y) === -1) && (f[E][y] = h[y]);
              }), u.valueKeysTallSupport.forEach((y, A) => {
                f[E][A === 0 ? h[u.seriesKey] : h[u.seriesKey] + "-" + y] = h[y];
              });
            }), m = Object.keys(f).map((h) => f[h]), m;
          } else if (u.valueKeys !== void 0) {
            let f = {}, m = [], h = u.valueKeys;
            return u.ignoredKeys && u.ignoredKeys.length > 0 && (h = h.concat(u.ignoredKeys)), v.forEach((E) => {
              h.forEach((y) => {
                let A = [], k = E[u.xKey] + "|" + y;
                Object.keys(E).forEach((R) => {
                  R !== u.xKey && R !== u.seriesKey && h.indexOf(R) === -1 && (k += "|" + R + "=" + E[R], A.push(R));
                }), f[k] || (f[k] = { [u.xKey]: E[u.xKey], "**Numeric Value Property**": y }, A.forEach((R) => {
                  f[k][R] = E[R];
                })), f[k][E[u.seriesKey]] = E[y];
              });
            }), Object.keys(f).forEach((E) => {
              (!u.ignoredKeys || u.ignoredKeys.indexOf(f[E]["**Numeric Value Property**"]) === -1) && m.push(f[E]);
            }), m;
          } else {
            let f = {}, m = [];
            return v.forEach((h) => {
              let E = [], y = h[u.xKey];
              Object.keys(h).forEach((A) => {
                A !== u.xKey && A !== u.seriesKey && A !== u.valueKey && (y += "|" + A + "=" + h[A], E.push(A));
              }), f[y] ? f[y][h[u.seriesKey]] = h[u.valueKey] : (f[y] = { [u.xKey]: h[u.xKey], [h[u.seriesKey]]: h[u.valueKey] }, E.forEach((A) => {
                f[y][A] = h[A];
              }));
            }), Object.keys(f).forEach((h) => {
              m.push(f[h]);
            }), m;
          }
        else
          return;
      return v;
    }
  }
  /**
     * cleanData
     *
    // This cleans a data set by:
    // - removing commas and $ signs from any numbers to try to plot the point
    // - removing any data points that are NOT composed of of all digits (but allow a decimal point)
    // Without this the charts "break" and do not render
    *
    * Inputs: data as array, excludeKey indicates which key to use to NOT clean
    *                        Example: "Date" should not be cleaned if part of the data
    *
    * Output: returns the cleanedData
    *
    * Set testing = true if you need to see before and after data
    *
    */
  cleanData(v, u, f = !1) {
    let m = [];
    if (!Array.isArray(v))
      debugger;
    return f && console.log("## Data to clean=", v), u === void 0 ? (console.log("COVE: cleanData excludeKey undefined"), v) : (v.forEach(function(h, E) {
      f && console.log("clean", E, " d", h);
      let y = {};
      Object.keys(h).forEach(function(A) {
        const k = h[A];
        if (A === u)
          y[A] = k;
        else {
          f && console.log("typeof value is ", typeof k);
          let R = "";
          typeof k == "string" ? R = k ? ((cr) => cr.replace(/[,\$]/g, ""))(k) : "" : R = k || "";
          const or = (cr) => /\d+\.?\d*/.test(cr);
          !isNaN(parseFloat(R)) || or(R) ? y[A] = R : y[A] = "";
        }
      }), f && console.log("cleaned=", y), m.push(y);
    }), f && console.log("## cleanedData =", m), m);
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(v, u = !1) {
    u && console.log("clean", v);
    let f = "";
    return typeof v == "string" ? f = v !== null && v !== "" ? v.replace(/[,\$\%]/g, "") : "" : f = v !== null && v !== "" ? v : "", u && console.log("## cleanedData =", f), f;
  }
}
export {
  Of as A,
  Pf as D,
  bf as a,
  kf as b,
  Nf as c,
  If as d,
  Mf as e
};
