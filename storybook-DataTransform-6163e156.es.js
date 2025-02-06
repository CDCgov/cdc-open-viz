import { c as Vl, g as Yl } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { r as B } from "./storybook-index-45401197.es.js";
import { _ as Xl } from "./storybook-lodash-a4231e1c.es.js";
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
  (function(o, i) {
    s.exports = i();
  })(Vl, function() {
    for (var o = function(r, e, a) {
      return e === void 0 && (e = 0), a === void 0 && (a = 1), r < e ? e : r > a ? a : r;
    }, i = o, m = function(r) {
      r._clipped = !1, r._unclipped = r.slice(0);
      for (var e = 0; e <= 3; e++)
        e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = i(r[e], 0, 255)) : e === 3 && (r[e] = i(r[e], 0, 1));
      return r;
    }, g = {}, y = 0, w = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; y < w.length; y += 1) {
      var k = w[y];
      g["[object " + k + "]"] = k.toLowerCase();
    }
    var A = function(r) {
      return g[Object.prototype.toString.call(r)] || "object";
    }, K = A, X = function(r, e) {
      return e === void 0 && (e = null), r.length >= 3 ? Array.prototype.slice.call(r) : K(r[0]) == "object" && e ? e.split("").filter(function(a) {
        return r[0][a] !== void 0;
      }).map(function(a) {
        return r[0][a];
      }) : r[0];
    }, dr = A, Pr = function(r) {
      if (r.length < 2)
        return null;
      var e = r.length - 1;
      return dr(r[e]) == "string" ? r[e].toLowerCase() : null;
    }, ur = Math.PI, E = {
      clip_rgb: m,
      limit: o,
      type: A,
      unpack: X,
      last: Pr,
      PI: ur,
      TWOPI: ur * 2,
      PITHIRD: ur / 3,
      DEG2RAD: ur / 180,
      RAD2DEG: 180 / ur
    }, G = {
      format: {},
      autodetect: []
    }, _n = E.last, xn = E.clip_rgb, Ne = E.type, gr = G, Pe = function() {
      for (var e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      var n = this;
      if (Ne(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor)
        return e[0];
      var u = _n(e), l = !1;
      if (!u) {
        l = !0, gr.sorted || (gr.autodetect = gr.autodetect.sort(function(h, _) {
          return _.p - h.p;
        }), gr.sorted = !0);
        for (var t = 0, f = gr.autodetect; t < f.length; t += 1) {
          var c = f[t];
          if (u = c.test.apply(c, e), u)
            break;
        }
      }
      if (gr.format[u]) {
        var d = gr.format[u].apply(null, l ? e : e.slice(0, -1));
        n._rgb = xn(d);
      } else
        throw new Error("unknown format: " + e);
      n._rgb.length === 3 && n._rgb.push(1);
    };
    Pe.prototype.toString = function() {
      return Ne(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var M = Pe, Sr = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Sr.Color, [null].concat(r)))();
    };
    Sr.Color = M, Sr.version = "2.4.2";
    var q = Sr, $n = E.unpack, Se = Math.max, kn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = $n(r, "rgb"), n = a[0], u = a[1], l = a[2];
      n = n / 255, u = u / 255, l = l / 255;
      var t = 1 - Se(n, Se(u, l)), f = t < 1 ? 1 / (1 - t) : 0, c = (1 - n - t) * f, d = (1 - u - t) * f, h = (1 - l - t) * f;
      return [c, d, h, t];
    }, An = kn, Cn = E.unpack, Mn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Cn(r, "cmyk");
      var a = r[0], n = r[1], u = r[2], l = r[3], t = r.length > 4 ? r[4] : 1;
      return l === 1 ? [0, 0, 0, t] : [
        a >= 1 ? 0 : 255 * (1 - a) * (1 - l),
        // r
        n >= 1 ? 0 : 255 * (1 - n) * (1 - l),
        // g
        u >= 1 ? 0 : 255 * (1 - u) * (1 - l),
        // b
        t
      ];
    }, On = Mn, In = q, Fe = M, De = G, Nn = E.unpack, Pn = E.type, Sn = An;
    Fe.prototype.cmyk = function() {
      return Sn(this._rgb);
    }, In.cmyk = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Fe, [null].concat(r, ["cmyk"])))();
    }, De.format.cmyk = On, De.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Nn(r, "cmyk"), Pn(r) === "array" && r.length === 4)
          return "cmyk";
      }
    });
    var Fn = E.unpack, Dn = E.last, Ur = function(r) {
      return Math.round(r * 100) / 100;
    }, Rn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Fn(r, "hsla"), n = Dn(r) || "lsa";
      return a[0] = Ur(a[0] || 0), a[1] = Ur(a[1] * 100) + "%", a[2] = Ur(a[2] * 100) + "%", n === "hsla" || a.length > 3 && a[3] < 1 ? (a[3] = a.length > 3 ? a[3] : 1, n = "hsla") : a.length = 3, n + "(" + a.join(",") + ")";
    }, Tn = Rn, zn = E.unpack, Ln = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = zn(r, "rgba");
      var a = r[0], n = r[1], u = r[2];
      a /= 255, n /= 255, u /= 255;
      var l = Math.min(a, n, u), t = Math.max(a, n, u), f = (t + l) / 2, c, d;
      return t === l ? (c = 0, d = Number.NaN) : c = f < 0.5 ? (t - l) / (t + l) : (t - l) / (2 - t - l), a == t ? d = (n - u) / (t - l) : n == t ? d = 2 + (u - a) / (t - l) : u == t && (d = 4 + (a - n) / (t - l)), d *= 60, d < 0 && (d += 360), r.length > 3 && r[3] !== void 0 ? [d, c, f, r[3]] : [d, c, f];
    }, Re = Ln, Kn = E.unpack, jn = E.last, Bn = Tn, Hn = Re, Vr = Math.round, Gn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Kn(r, "rgba"), n = jn(r) || "rgb";
      return n.substr(0, 3) == "hsl" ? Bn(Hn(a), n) : (a[0] = Vr(a[0]), a[1] = Vr(a[1]), a[2] = Vr(a[2]), (n === "rgba" || a.length > 3 && a[3] < 1) && (a[3] = a.length > 3 ? a[3] : 1, n = "rgba"), n + "(" + a.slice(0, n === "rgb" ? 3 : 4).join(",") + ")");
    }, qn = Gn, Zn = E.unpack, Yr = Math.round, Wn = function() {
      for (var r, e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      e = Zn(e, "hsl");
      var n = e[0], u = e[1], l = e[2], t, f, c;
      if (u === 0)
        t = f = c = l * 255;
      else {
        var d = [0, 0, 0], h = [0, 0, 0], _ = l < 0.5 ? l * (1 + u) : l + u - l * u, p = 2 * l - _, $ = n / 360;
        d[0] = $ + 1 / 3, d[1] = $, d[2] = $ - 1 / 3;
        for (var x = 0; x < 3; x++)
          d[x] < 0 && (d[x] += 1), d[x] > 1 && (d[x] -= 1), 6 * d[x] < 1 ? h[x] = p + (_ - p) * 6 * d[x] : 2 * d[x] < 1 ? h[x] = _ : 3 * d[x] < 2 ? h[x] = p + (_ - p) * (2 / 3 - d[x]) * 6 : h[x] = p;
        r = [Yr(h[0] * 255), Yr(h[1] * 255), Yr(h[2] * 255)], t = r[0], f = r[1], c = r[2];
      }
      return e.length > 3 ? [t, f, c, e[3]] : [t, f, c, 1];
    }, Te = Wn, ze = Te, Le = G, Ke = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, je = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Be = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, He = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ge = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, qe = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ze = Math.round, We = function(r) {
      r = r.toLowerCase().trim();
      var e;
      if (Le.format.named)
        try {
          return Le.format.named(r);
        } catch {
        }
      if (e = r.match(Ke)) {
        for (var a = e.slice(1, 4), n = 0; n < 3; n++)
          a[n] = +a[n];
        return a[3] = 1, a;
      }
      if (e = r.match(je)) {
        for (var u = e.slice(1, 5), l = 0; l < 4; l++)
          u[l] = +u[l];
        return u;
      }
      if (e = r.match(Be)) {
        for (var t = e.slice(1, 4), f = 0; f < 3; f++)
          t[f] = Ze(t[f] * 2.55);
        return t[3] = 1, t;
      }
      if (e = r.match(He)) {
        for (var c = e.slice(1, 5), d = 0; d < 3; d++)
          c[d] = Ze(c[d] * 2.55);
        return c[3] = +c[3], c;
      }
      if (e = r.match(Ge)) {
        var h = e.slice(1, 4);
        h[1] *= 0.01, h[2] *= 0.01;
        var _ = ze(h);
        return _[3] = 1, _;
      }
      if (e = r.match(qe)) {
        var p = e.slice(1, 4);
        p[1] *= 0.01, p[2] *= 0.01;
        var $ = ze(p);
        return $[3] = +e[4], $;
      }
    };
    We.test = function(r) {
      return Ke.test(r) || je.test(r) || Be.test(r) || He.test(r) || Ge.test(r) || qe.test(r);
    };
    var Un = We, Vn = q, Ue = M, Ve = G, Yn = E.type, Xn = qn, Ye = Un;
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
    var Xe = M, Jn = q, Qn = G, rt = E.unpack;
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
    var et = E.unpack, at = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = et(r, "rgb"), n = a[0], u = a[1], l = a[2], t = Math.min(n, u, l), f = Math.max(n, u, l), c = f - t, d = c * 100 / 255, h = t / (255 - c) * 100, _;
      return c === 0 ? _ = Number.NaN : (n === f && (_ = (u - l) / c), u === f && (_ = 2 + (l - n) / c), l === f && (_ = 4 + (n - u) / c), _ *= 60, _ < 0 && (_ += 360)), [_, d, h];
    }, nt = at, tt = E.unpack, ut = Math.floor, ot = function() {
      for (var r, e, a, n, u, l, t = [], f = arguments.length; f--; )
        t[f] = arguments[f];
      t = tt(t, "hcg");
      var c = t[0], d = t[1], h = t[2], _, p, $;
      h = h * 255;
      var x = d * 255;
      if (d === 0)
        _ = p = $ = h;
      else {
        c === 360 && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 60;
        var O = ut(c), P = c - O, F = h * (1 - d), R = F + x * (1 - P), V = F + x * P, U = F + x;
        switch (O) {
          case 0:
            r = [U, V, F], _ = r[0], p = r[1], $ = r[2];
            break;
          case 1:
            e = [R, U, F], _ = e[0], p = e[1], $ = e[2];
            break;
          case 2:
            a = [F, U, V], _ = a[0], p = a[1], $ = a[2];
            break;
          case 3:
            n = [F, R, U], _ = n[0], p = n[1], $ = n[2];
            break;
          case 4:
            u = [V, F, U], _ = u[0], p = u[1], $ = u[2];
            break;
          case 5:
            l = [U, F, R], _ = l[0], p = l[1], $ = l[2];
            break;
        }
      }
      return [_, p, $, t.length > 3 ? t[3] : 1];
    }, lt = ot, ft = E.unpack, it = E.type, ct = q, Je = M, Qe = G, vt = nt;
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
    var st = E.unpack, dt = E.last, Fr = Math.round, gt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = st(r, "rgba"), n = a[0], u = a[1], l = a[2], t = a[3], f = dt(r) || "auto";
      t === void 0 && (t = 1), f === "auto" && (f = t < 1 ? "rgba" : "rgb"), n = Fr(n), u = Fr(u), l = Fr(l);
      var c = n << 16 | u << 8 | l, d = "000000" + c.toString(16);
      d = d.substr(d.length - 6);
      var h = "0" + Fr(t * 255).toString(16);
      switch (h = h.substr(h.length - 2), f.toLowerCase()) {
        case "rgba":
          return "#" + d + h;
        case "argb":
          return "#" + h + d;
        default:
          return "#" + d;
      }
    }, ra = gt, ht = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, pt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, bt = function(r) {
      if (r.match(ht)) {
        (r.length === 4 || r.length === 7) && (r = r.substr(1)), r.length === 3 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
        var e = parseInt(r, 16), a = e >> 16, n = e >> 8 & 255, u = e & 255;
        return [a, n, u, 1];
      }
      if (r.match(pt)) {
        (r.length === 5 || r.length === 9) && (r = r.substr(1)), r.length === 4 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]);
        var l = parseInt(r, 16), t = l >> 24 & 255, f = l >> 16 & 255, c = l >> 8 & 255, d = Math.round((l & 255) / 255 * 100) / 100;
        return [t, f, c, d];
      }
      throw new Error("unknown hex color: " + r);
    }, ea = bt, mt = q, aa = M, yt = E.type, na = G, wt = ra;
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
    var Et = E.unpack, ta = E.TWOPI, _t = Math.min, xt = Math.sqrt, $t = Math.acos, kt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Et(r, "rgb"), n = a[0], u = a[1], l = a[2];
      n /= 255, u /= 255, l /= 255;
      var t, f = _t(n, u, l), c = (n + u + l) / 3, d = c > 0 ? 1 - f / c : 0;
      return d === 0 ? t = NaN : (t = (n - u + (n - l)) / 2, t /= xt((n - u) * (n - u) + (n - l) * (u - l)), t = $t(t), l > u && (t = ta - t), t /= ta), [t * 360, d, c];
    }, At = kt, Ct = E.unpack, Xr = E.limit, mr = E.TWOPI, Jr = E.PITHIRD, yr = Math.cos, Mt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Ct(r, "hsi");
      var a = r[0], n = r[1], u = r[2], l, t, f;
      return isNaN(a) && (a = 0), isNaN(n) && (n = 0), a > 360 && (a -= 360), a < 0 && (a += 360), a /= 360, a < 1 / 3 ? (f = (1 - n) / 3, l = (1 + n * yr(mr * a) / yr(Jr - mr * a)) / 3, t = 1 - (f + l)) : a < 2 / 3 ? (a -= 1 / 3, l = (1 - n) / 3, t = (1 + n * yr(mr * a) / yr(Jr - mr * a)) / 3, f = 1 - (l + t)) : (a -= 2 / 3, t = (1 - n) / 3, f = (1 + n * yr(mr * a) / yr(Jr - mr * a)) / 3, l = 1 - (t + f)), l = Xr(u * l * 3), t = Xr(u * t * 3), f = Xr(u * f * 3), [l * 255, t * 255, f * 255, r.length > 3 ? r[3] : 1];
    }, Ot = Mt, It = E.unpack, Nt = E.type, Pt = q, ua = M, oa = G, St = At;
    ua.prototype.hsi = function() {
      return St(this._rgb);
    }, Pt.hsi = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(ua, [null].concat(r, ["hsi"])))();
    }, oa.format.hsi = Ot, oa.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = It(r, "hsi"), Nt(r) === "array" && r.length === 3)
          return "hsi";
      }
    });
    var Ft = E.unpack, Dt = E.type, Rt = q, la = M, fa = G, Tt = Re;
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
        if (r = Ft(r, "hsl"), Dt(r) === "array" && r.length === 3)
          return "hsl";
      }
    });
    var zt = E.unpack, Lt = Math.min, Kt = Math.max, jt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = zt(r, "rgb");
      var a = r[0], n = r[1], u = r[2], l = Lt(a, n, u), t = Kt(a, n, u), f = t - l, c, d, h;
      return h = t / 255, t === 0 ? (c = Number.NaN, d = 0) : (d = f / t, a === t && (c = (n - u) / f), n === t && (c = 2 + (u - a) / f), u === t && (c = 4 + (a - n) / f), c *= 60, c < 0 && (c += 360)), [c, d, h];
    }, Bt = jt, Ht = E.unpack, Gt = Math.floor, qt = function() {
      for (var r, e, a, n, u, l, t = [], f = arguments.length; f--; )
        t[f] = arguments[f];
      t = Ht(t, "hsv");
      var c = t[0], d = t[1], h = t[2], _, p, $;
      if (h *= 255, d === 0)
        _ = p = $ = h;
      else {
        c === 360 && (c = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 60;
        var x = Gt(c), O = c - x, P = h * (1 - d), F = h * (1 - d * O), R = h * (1 - d * (1 - O));
        switch (x) {
          case 0:
            r = [h, R, P], _ = r[0], p = r[1], $ = r[2];
            break;
          case 1:
            e = [F, h, P], _ = e[0], p = e[1], $ = e[2];
            break;
          case 2:
            a = [P, h, R], _ = a[0], p = a[1], $ = a[2];
            break;
          case 3:
            n = [P, F, h], _ = n[0], p = n[1], $ = n[2];
            break;
          case 4:
            u = [R, P, h], _ = u[0], p = u[1], $ = u[2];
            break;
          case 5:
            l = [h, P, F], _ = l[0], p = l[1], $ = l[2];
            break;
        }
      }
      return [_, p, $, t.length > 3 ? t[3] : 1];
    }, Zt = qt, Wt = E.unpack, Ut = E.type, Vt = q, ia = M, ca = G, Yt = Bt;
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
    var Dr = {
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
    }, wr = Dr, Xt = E.unpack, va = Math.pow, Jt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Xt(r, "rgb"), n = a[0], u = a[1], l = a[2], t = Qt(n, u, l), f = t[0], c = t[1], d = t[2], h = 116 * c - 16;
      return [h < 0 ? 0 : h, 500 * (f - c), 200 * (c - d)];
    }, Qr = function(r) {
      return (r /= 255) <= 0.04045 ? r / 12.92 : va((r + 0.055) / 1.055, 2.4);
    }, re = function(r) {
      return r > wr.t3 ? va(r, 1 / 3) : r / wr.t2 + wr.t0;
    }, Qt = function(r, e, a) {
      r = Qr(r), e = Qr(e), a = Qr(a);
      var n = re((0.4124564 * r + 0.3575761 * e + 0.1804375 * a) / wr.Xn), u = re((0.2126729 * r + 0.7151522 * e + 0.072175 * a) / wr.Yn), l = re((0.0193339 * r + 0.119192 * e + 0.9503041 * a) / wr.Zn);
      return [n, u, l];
    }, sa = Jt, Er = Dr, ru = E.unpack, eu = Math.pow, au = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = ru(r, "lab");
      var a = r[0], n = r[1], u = r[2], l, t, f, c, d, h;
      return t = (a + 16) / 116, l = isNaN(n) ? t : t + n / 500, f = isNaN(u) ? t : t - u / 200, t = Er.Yn * ae(t), l = Er.Xn * ae(l), f = Er.Zn * ae(f), c = ee(3.2404542 * l - 1.5371385 * t - 0.4985314 * f), d = ee(-0.969266 * l + 1.8760108 * t + 0.041556 * f), h = ee(0.0556434 * l - 0.2040259 * t + 1.0572252 * f), [c, d, h, r.length > 3 ? r[3] : 1];
    }, ee = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * eu(r, 1 / 2.4) - 0.055);
    }, ae = function(r) {
      return r > Er.t1 ? r * r * r : Er.t2 * (r - Er.t0);
    }, da = au, nu = E.unpack, tu = E.type, uu = q, ga = M, ha = G, ou = sa;
    ga.prototype.lab = function() {
      return ou(this._rgb);
    }, uu.lab = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(ga, [null].concat(r, ["lab"])))();
    }, ha.format.lab = da, ha.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = nu(r, "lab"), tu(r) === "array" && r.length === 3)
          return "lab";
      }
    });
    var lu = E.unpack, fu = E.RAD2DEG, iu = Math.sqrt, cu = Math.atan2, vu = Math.round, su = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = lu(r, "lab"), n = a[0], u = a[1], l = a[2], t = iu(u * u + l * l), f = (cu(l, u) * fu + 360) % 360;
      return vu(t * 1e4) === 0 && (f = Number.NaN), [n, t, f];
    }, pa = su, du = E.unpack, gu = sa, hu = pa, pu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = du(r, "rgb"), n = a[0], u = a[1], l = a[2], t = gu(n, u, l), f = t[0], c = t[1], d = t[2];
      return hu(f, c, d);
    }, bu = pu, mu = E.unpack, yu = E.DEG2RAD, wu = Math.sin, Eu = Math.cos, _u = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = mu(r, "lch"), n = a[0], u = a[1], l = a[2];
      return isNaN(l) && (l = 0), l = l * yu, [n, Eu(l) * u, wu(l) * u];
    }, ba = _u, xu = E.unpack, $u = ba, ku = da, Au = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = xu(r, "lch");
      var a = r[0], n = r[1], u = r[2], l = $u(a, n, u), t = l[0], f = l[1], c = l[2], d = ku(t, f, c), h = d[0], _ = d[1], p = d[2];
      return [h, _, p, r.length > 3 ? r[3] : 1];
    }, ma = Au, Cu = E.unpack, Mu = ma, Ou = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Cu(r, "hcl").reverse();
      return Mu.apply(void 0, a);
    }, Iu = Ou, Nu = E.unpack, Pu = E.type, ya = q, Rr = M, ne = G, wa = bu;
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
    }, ne.format.lch = ma, ne.format.hcl = Iu, ["lch", "hcl"].forEach(function(r) {
      return ne.autodetect.push({
        p: 2,
        test: function() {
          for (var e = [], a = arguments.length; a--; )
            e[a] = arguments[a];
          if (e = Nu(e, r), Pu(e) === "array" && e.length === 3)
            return r;
        }
      });
    });
    var Su = {
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
    }, Ea = Su, Fu = M, _a = G, Du = E.type, Mr = Ea, Ru = ea, Tu = ra;
    Fu.prototype.name = function() {
      for (var r = Tu(this._rgb, "rgb"), e = 0, a = Object.keys(Mr); e < a.length; e += 1) {
        var n = a[e];
        if (Mr[n] === r)
          return n.toLowerCase();
      }
      return r;
    }, _a.format.named = function(r) {
      if (r = r.toLowerCase(), Mr[r])
        return Ru(Mr[r]);
      throw new Error("unknown color name: " + r);
    }, _a.autodetect.push({
      p: 5,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && Du(r) === "string" && Mr[r.toLowerCase()])
          return "named";
      }
    });
    var zu = E.unpack, Lu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = zu(r, "rgb"), n = a[0], u = a[1], l = a[2];
      return (n << 16) + (u << 8) + l;
    }, Ku = Lu, ju = E.type, Bu = function(r) {
      if (ju(r) == "number" && r >= 0 && r <= 16777215) {
        var e = r >> 16, a = r >> 8 & 255, n = r & 255;
        return [e, a, n, 1];
      }
      throw new Error("unknown num color: " + r);
    }, Hu = Bu, Gu = q, xa = M, $a = G, qu = E.type, Zu = Ku;
    xa.prototype.num = function() {
      return Zu(this._rgb);
    }, Gu.num = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(xa, [null].concat(r, ["num"])))();
    }, $a.format.num = Hu, $a.autodetect.push({
      p: 5,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r.length === 1 && qu(r[0]) === "number" && r[0] >= 0 && r[0] <= 16777215)
          return "num";
      }
    });
    var Wu = q, te = M, ka = G, Aa = E.unpack, Ca = E.type, Ma = Math.round;
    te.prototype.rgb = function(r) {
      return r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ma);
    }, te.prototype.rgba = function(r) {
      return r === void 0 && (r = !0), this._rgb.slice(0, 4).map(function(e, a) {
        return a < 3 ? r === !1 ? e : Ma(e) : e;
      });
    }, Wu.rgb = function() {
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
    var Tr = Math.log, Uu = function(r) {
      var e = r / 100, a, n, u;
      return e < 66 ? (a = 255, n = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = e - 2) + 104.49216199393888 * Tr(n), u = e < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (u = e - 10) + 115.67994401066147 * Tr(u)) : (a = 351.97690566805693 + 0.114206453784165 * (a = e - 55) - 40.25366309332127 * Tr(a), n = 325.4494125711974 + 0.07943456536662342 * (n = e - 50) - 28.0852963507957 * Tr(n), u = 255), [a, n, u, 1];
    }, Oa = Uu, Vu = Oa, Yu = E.unpack, Xu = Math.round, Ju = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      for (var a = Yu(r, "rgb"), n = a[0], u = a[2], l = 1e3, t = 4e4, f = 0.4, c; t - l > f; ) {
        c = (t + l) * 0.5;
        var d = Vu(c);
        d[2] / d[0] >= u / n ? t = c : l = c;
      }
      return Xu(c);
    }, Qu = Ju, ue = q, zr = M, oe = G, ro = Qu;
    zr.prototype.temp = zr.prototype.kelvin = zr.prototype.temperature = function() {
      return ro(this._rgb);
    }, ue.temp = ue.kelvin = ue.temperature = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(zr, [null].concat(r, ["temp"])))();
    }, oe.format.temp = oe.format.kelvin = oe.format.temperature = Oa;
    var eo = E.unpack, le = Math.cbrt, ao = Math.pow, no = Math.sign, to = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = eo(r, "rgb"), n = a[0], u = a[1], l = a[2], t = [fe(n / 255), fe(u / 255), fe(l / 255)], f = t[0], c = t[1], d = t[2], h = le(0.4122214708 * f + 0.5363325363 * c + 0.0514459929 * d), _ = le(0.2119034982 * f + 0.6806995451 * c + 0.1073969566 * d), p = le(0.0883024619 * f + 0.2817188376 * c + 0.6299787005 * d);
      return [
        0.2104542553 * h + 0.793617785 * _ - 0.0040720468 * p,
        1.9779984951 * h - 2.428592205 * _ + 0.4505937099 * p,
        0.0259040371 * h + 0.7827717662 * _ - 0.808675766 * p
      ];
    }, Ia = to;
    function fe(r) {
      var e = Math.abs(r);
      return e < 0.04045 ? r / 12.92 : (no(r) || 1) * ao((e + 0.055) / 1.055, 2.4);
    }
    var uo = E.unpack, Lr = Math.pow, oo = Math.sign, lo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = uo(r, "lab");
      var a = r[0], n = r[1], u = r[2], l = Lr(a + 0.3963377774 * n + 0.2158037573 * u, 3), t = Lr(a - 0.1055613458 * n - 0.0638541728 * u, 3), f = Lr(a - 0.0894841775 * n - 1.291485548 * u, 3);
      return [
        255 * ie(4.0767416621 * l - 3.3077115913 * t + 0.2309699292 * f),
        255 * ie(-1.2684380046 * l + 2.6097574011 * t - 0.3413193965 * f),
        255 * ie(-0.0041960863 * l - 0.7034186147 * t + 1.707614701 * f),
        r.length > 3 ? r[3] : 1
      ];
    }, Na = lo;
    function ie(r) {
      var e = Math.abs(r);
      return e > 31308e-7 ? (oo(r) || 1) * (1.055 * Lr(e, 1 / 2.4) - 0.055) : r * 12.92;
    }
    var fo = E.unpack, io = E.type, co = q, Pa = M, Sa = G, vo = Ia;
    Pa.prototype.oklab = function() {
      return vo(this._rgb);
    }, co.oklab = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Pa, [null].concat(r, ["oklab"])))();
    }, Sa.format.oklab = Na, Sa.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = fo(r, "oklab"), io(r) === "array" && r.length === 3)
          return "oklab";
      }
    });
    var so = E.unpack, go = Ia, ho = pa, po = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = so(r, "rgb"), n = a[0], u = a[1], l = a[2], t = go(n, u, l), f = t[0], c = t[1], d = t[2];
      return ho(f, c, d);
    }, bo = po, mo = E.unpack, yo = ba, wo = Na, Eo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = mo(r, "lch");
      var a = r[0], n = r[1], u = r[2], l = yo(a, n, u), t = l[0], f = l[1], c = l[2], d = wo(t, f, c), h = d[0], _ = d[1], p = d[2];
      return [h, _, p, r.length > 3 ? r[3] : 1];
    }, _o = Eo, xo = E.unpack, $o = E.type, ko = q, Fa = M, Da = G, Ao = bo;
    Fa.prototype.oklch = function() {
      return Ao(this._rgb);
    }, ko.oklch = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Fa, [null].concat(r, ["oklch"])))();
    }, Da.format.oklch = _o, Da.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = xo(r, "oklch"), $o(r) === "array" && r.length === 3)
          return "oklch";
      }
    });
    var Ra = M, Co = E.type;
    Ra.prototype.alpha = function(r, e) {
      return e === void 0 && (e = !1), r !== void 0 && Co(r) === "number" ? e ? (this._rgb[3] = r, this) : new Ra([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3];
    };
    var Mo = M;
    Mo.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var hr = M, Oo = Dr;
    hr.prototype.darken = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lab();
      return a[0] -= Oo.Kn * r, new hr(a, "lab").alpha(e.alpha(), !0);
    }, hr.prototype.brighten = function(r) {
      return r === void 0 && (r = 1), this.darken(-r);
    }, hr.prototype.darker = hr.prototype.darken, hr.prototype.brighter = hr.prototype.brighten;
    var Io = M;
    Io.prototype.get = function(r) {
      var e = r.split("."), a = e[0], n = e[1], u = this[a]();
      if (n) {
        var l = a.indexOf(n) - (a.substr(0, 2) === "ok" ? 2 : 0);
        if (l > -1)
          return u[l];
        throw new Error("unknown channel " + n + " in mode " + a);
      } else
        return u;
    };
    var _r = M, No = E.type, Po = Math.pow, So = 1e-7, Fo = 20;
    _r.prototype.luminance = function(r) {
      if (r !== void 0 && No(r) === "number") {
        if (r === 0)
          return new _r([0, 0, 0, this._rgb[3]], "rgb");
        if (r === 1)
          return new _r([255, 255, 255, this._rgb[3]], "rgb");
        var e = this.luminance(), a = "rgb", n = Fo, u = function(t, f) {
          var c = t.interpolate(f, 0.5, a), d = c.luminance();
          return Math.abs(r - d) < So || !n-- ? c : d > r ? u(t, c) : u(c, f);
        }, l = (e > r ? u(new _r([0, 0, 0]), this) : u(this, new _r([255, 255, 255]))).rgb();
        return new _r(l.concat([this._rgb[3]]));
      }
      return Do.apply(void 0, this._rgb.slice(0, 3));
    };
    var Do = function(r, e, a) {
      return r = ce(r), e = ce(e), a = ce(a), 0.2126 * r + 0.7152 * e + 0.0722 * a;
    }, ce = function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : Po((r + 0.055) / 1.055, 2.4);
    }, Q = {}, Ta = M, za = E.type, Kr = Q, La = function(r, e, a) {
      a === void 0 && (a = 0.5);
      for (var n = [], u = arguments.length - 3; u-- > 0; )
        n[u] = arguments[u + 3];
      var l = n[0] || "lrgb";
      if (!Kr[l] && !n.length && (l = Object.keys(Kr)[0]), !Kr[l])
        throw new Error("interpolation mode " + l + " is not defined");
      return za(r) !== "object" && (r = new Ta(r)), za(e) !== "object" && (e = new Ta(e)), Kr[l](r, e, a).alpha(r.alpha() + a * (e.alpha() - r.alpha()));
    }, Ka = M, Ro = La;
    Ka.prototype.mix = Ka.prototype.interpolate = function(r, e) {
      e === void 0 && (e = 0.5);
      for (var a = [], n = arguments.length - 2; n-- > 0; )
        a[n] = arguments[n + 2];
      return Ro.apply(void 0, [this, r, e].concat(a));
    };
    var ja = M;
    ja.prototype.premultiply = function(r) {
      r === void 0 && (r = !1);
      var e = this._rgb, a = e[3];
      return r ? (this._rgb = [e[0] * a, e[1] * a, e[2] * a, a], this) : new ja([e[0] * a, e[1] * a, e[2] * a, a], "rgb");
    };
    var ve = M, To = Dr;
    ve.prototype.saturate = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lch();
      return a[1] += To.Kn * r, a[1] < 0 && (a[1] = 0), new ve(a, "lch").alpha(e.alpha(), !0);
    }, ve.prototype.desaturate = function(r) {
      return r === void 0 && (r = 1), this.saturate(-r);
    };
    var Ba = M, Ha = E.type;
    Ba.prototype.set = function(r, e, a) {
      a === void 0 && (a = !1);
      var n = r.split("."), u = n[0], l = n[1], t = this[u]();
      if (l) {
        var f = u.indexOf(l) - (u.substr(0, 2) === "ok" ? 2 : 0);
        if (f > -1) {
          if (Ha(e) == "string")
            switch (e.charAt(0)) {
              case "+":
                t[f] += +e;
                break;
              case "-":
                t[f] += +e;
                break;
              case "*":
                t[f] *= +e.substr(1);
                break;
              case "/":
                t[f] /= +e.substr(1);
                break;
              default:
                t[f] = +e;
            }
          else if (Ha(e) === "number")
            t[f] = e;
          else
            throw new Error("unsupported value for Color.set");
          var c = new Ba(t, u);
          return a ? (this._rgb = c._rgb, this) : c;
        }
        throw new Error("unknown channel " + l + " in mode " + u);
      } else
        return t;
    };
    var zo = M, Lo = function(r, e, a) {
      var n = r._rgb, u = e._rgb;
      return new zo(
        n[0] + a * (u[0] - n[0]),
        n[1] + a * (u[1] - n[1]),
        n[2] + a * (u[2] - n[2]),
        "rgb"
      );
    };
    Q.rgb = Lo;
    var Ko = M, se = Math.sqrt, xr = Math.pow, jo = function(r, e, a) {
      var n = r._rgb, u = n[0], l = n[1], t = n[2], f = e._rgb, c = f[0], d = f[1], h = f[2];
      return new Ko(
        se(xr(u, 2) * (1 - a) + xr(c, 2) * a),
        se(xr(l, 2) * (1 - a) + xr(d, 2) * a),
        se(xr(t, 2) * (1 - a) + xr(h, 2) * a),
        "rgb"
      );
    };
    Q.lrgb = jo;
    var Bo = M, Ho = function(r, e, a) {
      var n = r.lab(), u = e.lab();
      return new Bo(
        n[0] + a * (u[0] - n[0]),
        n[1] + a * (u[1] - n[1]),
        n[2] + a * (u[2] - n[2]),
        "lab"
      );
    };
    Q.lab = Ho;
    var Ga = M, $r = function(r, e, a, n) {
      var u, l, t, f;
      n === "hsl" ? (t = r.hsl(), f = e.hsl()) : n === "hsv" ? (t = r.hsv(), f = e.hsv()) : n === "hcg" ? (t = r.hcg(), f = e.hcg()) : n === "hsi" ? (t = r.hsi(), f = e.hsi()) : n === "lch" || n === "hcl" ? (n = "hcl", t = r.hcl(), f = e.hcl()) : n === "oklch" && (t = r.oklch().reverse(), f = e.oklch().reverse());
      var c, d, h, _, p, $;
      (n.substr(0, 1) === "h" || n === "oklch") && (u = t, c = u[0], h = u[1], p = u[2], l = f, d = l[0], _ = l[1], $ = l[2]);
      var x, O, P, F;
      return !isNaN(c) && !isNaN(d) ? (d > c && d - c > 180 ? F = d - (c + 360) : d < c && c - d > 180 ? F = d + 360 - c : F = d - c, O = c + a * F) : isNaN(c) ? isNaN(d) ? O = Number.NaN : (O = d, (p == 1 || p == 0) && n != "hsv" && (x = _)) : (O = c, ($ == 1 || $ == 0) && n != "hsv" && (x = h)), x === void 0 && (x = h + a * (_ - h)), P = p + a * ($ - p), n === "oklch" ? new Ga([P, x, O], n) : new Ga([O, x, P], n);
    }, Go = $r, qa = function(r, e, a) {
      return Go(r, e, a, "lch");
    };
    Q.lch = qa, Q.hcl = qa;
    var qo = M, Zo = function(r, e, a) {
      var n = r.num(), u = e.num();
      return new qo(n + a * (u - n), "num");
    };
    Q.num = Zo;
    var Wo = $r, Uo = function(r, e, a) {
      return Wo(r, e, a, "hcg");
    };
    Q.hcg = Uo;
    var Vo = $r, Yo = function(r, e, a) {
      return Vo(r, e, a, "hsi");
    };
    Q.hsi = Yo;
    var Xo = $r, Jo = function(r, e, a) {
      return Xo(r, e, a, "hsl");
    };
    Q.hsl = Jo;
    var Qo = $r, rl = function(r, e, a) {
      return Qo(r, e, a, "hsv");
    };
    Q.hsv = rl;
    var el = M, al = function(r, e, a) {
      var n = r.oklab(), u = e.oklab();
      return new el(
        n[0] + a * (u[0] - n[0]),
        n[1] + a * (u[1] - n[1]),
        n[2] + a * (u[2] - n[2]),
        "oklab"
      );
    };
    Q.oklab = al;
    var nl = $r, tl = function(r, e, a) {
      return nl(r, e, a, "oklch");
    };
    Q.oklch = tl;
    var de = M, ul = E.clip_rgb, ge = Math.pow, he = Math.sqrt, pe = Math.PI, Za = Math.cos, Wa = Math.sin, ol = Math.atan2, ll = function(r, e, a) {
      e === void 0 && (e = "lrgb"), a === void 0 && (a = null);
      var n = r.length;
      a || (a = Array.from(new Array(n)).map(function() {
        return 1;
      }));
      var u = n / a.reduce(function(O, P) {
        return O + P;
      });
      if (a.forEach(function(O, P) {
        a[P] *= u;
      }), r = r.map(function(O) {
        return new de(O);
      }), e === "lrgb")
        return fl(r, a);
      for (var l = r.shift(), t = l.get(e), f = [], c = 0, d = 0, h = 0; h < t.length; h++)
        if (t[h] = (t[h] || 0) * a[0], f.push(isNaN(t[h]) ? 0 : a[0]), e.charAt(h) === "h" && !isNaN(t[h])) {
          var _ = t[h] / 180 * pe;
          c += Za(_) * a[0], d += Wa(_) * a[0];
        }
      var p = l.alpha() * a[0];
      r.forEach(function(O, P) {
        var F = O.get(e);
        p += O.alpha() * a[P + 1];
        for (var R = 0; R < t.length; R++)
          if (!isNaN(F[R]))
            if (f[R] += a[P + 1], e.charAt(R) === "h") {
              var V = F[R] / 180 * pe;
              c += Za(V) * a[P + 1], d += Wa(V) * a[P + 1];
            } else
              t[R] += F[R] * a[P + 1];
      });
      for (var $ = 0; $ < t.length; $++)
        if (e.charAt($) === "h") {
          for (var x = ol(d / f[$], c / f[$]) / pe * 180; x < 0; )
            x += 360;
          for (; x >= 360; )
            x -= 360;
          t[$] = x;
        } else
          t[$] = t[$] / f[$];
      return p /= n, new de(t, e).alpha(p > 0.99999 ? 1 : p, !0);
    }, fl = function(r, e) {
      for (var a = r.length, n = [0, 0, 0, 0], u = 0; u < r.length; u++) {
        var l = r[u], t = e[u] / a, f = l._rgb;
        n[0] += ge(f[0], 2) * t, n[1] += ge(f[1], 2) * t, n[2] += ge(f[2], 2) * t, n[3] += f[3] * t;
      }
      return n[0] = he(n[0]), n[1] = he(n[1]), n[2] = he(n[2]), n[3] > 0.9999999 && (n[3] = 1), new de(ul(n));
    }, rr = q, kr = E.type, il = Math.pow, be = function(r) {
      var e = "rgb", a = rr("#ccc"), n = 0, u = [0, 1], l = [], t = [0, 0], f = !1, c = [], d = !1, h = 0, _ = 1, p = !1, $ = {}, x = !0, O = 1, P = function(b) {
        if (b = b || ["#fff", "#000"], b && kr(b) === "string" && rr.brewer && rr.brewer[b.toLowerCase()] && (b = rr.brewer[b.toLowerCase()]), kr(b) === "array") {
          b.length === 1 && (b = [b[0], b[0]]), b = b.slice(0);
          for (var C = 0; C < b.length; C++)
            b[C] = rr(b[C]);
          l.length = 0;
          for (var N = 0; N < b.length; N++)
            l.push(N / (b.length - 1));
        }
        return J(), c = b;
      }, F = function(b) {
        if (f != null) {
          for (var C = f.length - 1, N = 0; N < C && b >= f[N]; )
            N++;
          return N - 1;
        }
        return 0;
      }, R = function(b) {
        return b;
      }, V = function(b) {
        return b;
      }, U = function(b, C) {
        var N, I;
        if (C == null && (C = !1), isNaN(b) || b === null)
          return a;
        if (C)
          I = b;
        else if (f && f.length > 2) {
          var Y = F(b);
          I = Y / (f.length - 2);
        } else
          _ !== h ? I = (b - h) / (_ - h) : I = 1;
        I = V(I), C || (I = R(I)), O !== 1 && (I = il(I, O)), I = t[0] + I * (1 - t[0] - t[1]), I = Math.min(1, Math.max(0, I));
        var j = Math.floor(I * 1e4);
        if (x && $[j])
          N = $[j];
        else {
          if (kr(c) === "array")
            for (var D = 0; D < l.length; D++) {
              var T = l[D];
              if (I <= T) {
                N = c[D];
                break;
              }
              if (I >= T && D === l.length - 1) {
                N = c[D];
                break;
              }
              if (I > T && I < l[D + 1]) {
                I = (I - T) / (l[D + 1] - T), N = rr.interpolate(c[D], c[D + 1], I, e);
                break;
              }
            }
          else
            kr(c) === "function" && (N = c(I));
          x && ($[j] = N);
        }
        return N;
      }, J = function() {
        return $ = {};
      };
      P(r);
      var S = function(b) {
        var C = rr(U(b));
        return d && C[d] ? C[d]() : C;
      };
      return S.classes = function(b) {
        if (b != null) {
          if (kr(b) === "array")
            f = b, u = [b[0], b[b.length - 1]];
          else {
            var C = rr.analyze(u);
            b === 0 ? f = [C.min, C.max] : f = rr.limits(C, "e", b);
          }
          return S;
        }
        return f;
      }, S.domain = function(b) {
        if (!arguments.length)
          return u;
        h = b[0], _ = b[b.length - 1], l = [];
        var C = c.length;
        if (b.length === C && h !== _)
          for (var N = 0, I = Array.from(b); N < I.length; N += 1) {
            var Y = I[N];
            l.push((Y - h) / (_ - h));
          }
        else {
          for (var j = 0; j < C; j++)
            l.push(j / (C - 1));
          if (b.length > 2) {
            var D = b.map(function(z, L) {
              return L / (b.length - 1);
            }), T = b.map(function(z) {
              return (z - h) / (_ - h);
            });
            T.every(function(z, L) {
              return D[L] === z;
            }) || (V = function(z) {
              if (z <= 0 || z >= 1)
                return z;
              for (var L = 0; z >= T[L + 1]; )
                L++;
              var ar = (z - T[L]) / (T[L + 1] - T[L]), vr = D[L] + ar * (D[L + 1] - D[L]);
              return vr;
            });
          }
        }
        return u = [h, _], S;
      }, S.mode = function(b) {
        return arguments.length ? (e = b, J(), S) : e;
      }, S.range = function(b, C) {
        return P(b), S;
      }, S.out = function(b) {
        return d = b, S;
      }, S.spread = function(b) {
        return arguments.length ? (n = b, S) : n;
      }, S.correctLightness = function(b) {
        return b == null && (b = !0), p = b, J(), p ? R = function(C) {
          for (var N = U(0, !0).lab()[0], I = U(1, !0).lab()[0], Y = N > I, j = U(C, !0).lab()[0], D = N + (I - N) * C, T = j - D, z = 0, L = 1, ar = 20; Math.abs(T) > 0.01 && ar-- > 0; )
            (function() {
              return Y && (T *= -1), T < 0 ? (z = C, C += (L - C) * 0.5) : (L = C, C += (z - C) * 0.5), j = U(C, !0).lab()[0], T = j - D;
            })();
          return C;
        } : R = function(C) {
          return C;
        }, S;
      }, S.padding = function(b) {
        return b != null ? (kr(b) === "number" && (b = [b, b]), t = b, S) : t;
      }, S.colors = function(b, C) {
        arguments.length < 2 && (C = "hex");
        var N = [];
        if (arguments.length === 0)
          N = c.slice(0);
        else if (b === 1)
          N = [S(0.5)];
        else if (b > 1) {
          var I = u[0], Y = u[1] - I;
          N = cl(0, b, !1).map(function(L) {
            return S(I + L / (b - 1) * Y);
          });
        } else {
          r = [];
          var j = [];
          if (f && f.length > 2)
            for (var D = 1, T = f.length, z = 1 <= T; z ? D < T : D > T; z ? D++ : D--)
              j.push((f[D - 1] + f[D]) * 0.5);
          else
            j = u;
          N = j.map(function(L) {
            return S(L);
          });
        }
        return rr[C] && (N = N.map(function(L) {
          return L[C]();
        })), N;
      }, S.cache = function(b) {
        return b != null ? (x = b, S) : x;
      }, S.gamma = function(b) {
        return b != null ? (O = b, S) : O;
      }, S.nodata = function(b) {
        return b != null ? (a = rr(b), S) : a;
      }, S;
    };
    function cl(r, e, a) {
      for (var n = [], u = r < e, l = a ? u ? e + 1 : e - 1 : e, t = r; u ? t < l : t > l; u ? t++ : t--)
        n.push(t);
      return n;
    }
    var Or = M, vl = be, sl = function(r) {
      for (var e = [1, 1], a = 1; a < r; a++) {
        for (var n = [1], u = 1; u <= e.length; u++)
          n[u] = (e[u] || 0) + e[u - 1];
        e = n;
      }
      return e;
    }, dl = function(r) {
      var e, a, n, u, l, t, f;
      if (r = r.map(function(p) {
        return new Or(p);
      }), r.length === 2)
        e = r.map(function(p) {
          return p.lab();
        }), l = e[0], t = e[1], u = function(p) {
          var $ = [0, 1, 2].map(function(x) {
            return l[x] + p * (t[x] - l[x]);
          });
          return new Or($, "lab");
        };
      else if (r.length === 3)
        a = r.map(function(p) {
          return p.lab();
        }), l = a[0], t = a[1], f = a[2], u = function(p) {
          var $ = [0, 1, 2].map(function(x) {
            return (1 - p) * (1 - p) * l[x] + 2 * (1 - p) * p * t[x] + p * p * f[x];
          });
          return new Or($, "lab");
        };
      else if (r.length === 4) {
        var c;
        n = r.map(function(p) {
          return p.lab();
        }), l = n[0], t = n[1], f = n[2], c = n[3], u = function(p) {
          var $ = [0, 1, 2].map(function(x) {
            return (1 - p) * (1 - p) * (1 - p) * l[x] + 3 * (1 - p) * (1 - p) * p * t[x] + 3 * (1 - p) * p * p * f[x] + p * p * p * c[x];
          });
          return new Or($, "lab");
        };
      } else if (r.length >= 5) {
        var d, h, _;
        d = r.map(function(p) {
          return p.lab();
        }), _ = r.length - 1, h = sl(_), u = function(p) {
          var $ = 1 - p, x = [0, 1, 2].map(function(O) {
            return d.reduce(function(P, F, R) {
              return P + h[R] * Math.pow($, _ - R) * Math.pow(p, R) * F[O];
            }, 0);
          });
          return new Or(x, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return u;
    }, gl = function(r) {
      var e = dl(r);
      return e.scale = function() {
        return vl(e);
      }, e;
    }, me = q, er = function(r, e, a) {
      if (!er[a])
        throw new Error("unknown blend mode " + a);
      return er[a](r, e);
    }, ir = function(r) {
      return function(e, a) {
        var n = me(a).rgb(), u = me(e).rgb();
        return me.rgb(r(n, u));
      };
    }, cr = function(r) {
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
    }, _l = function(r, e) {
      return r === 255 ? 255 : (r = 255 * (e / 255) / (1 - r / 255), r > 255 ? 255 : r);
    };
    er.normal = ir(cr(hl)), er.multiply = ir(cr(pl)), er.screen = ir(cr(yl)), er.overlay = ir(cr(wl)), er.darken = ir(cr(bl)), er.lighten = ir(cr(ml)), er.dodge = ir(cr(_l)), er.burn = ir(cr(El));
    for (var xl = er, ye = E.type, $l = E.clip_rgb, kl = E.TWOPI, Al = Math.pow, Cl = Math.sin, Ml = Math.cos, Ua = q, Ol = function(r, e, a, n, u) {
      r === void 0 && (r = 300), e === void 0 && (e = -1.5), a === void 0 && (a = 1), n === void 0 && (n = 1), u === void 0 && (u = [0, 1]);
      var l = 0, t;
      ye(u) === "array" ? t = u[1] - u[0] : (t = 0, u = [u, u]);
      var f = function(c) {
        var d = kl * ((r + 120) / 360 + e * c), h = Al(u[0] + t * c, n), _ = l !== 0 ? a[0] + c * l : a, p = _ * h * (1 - h) / 2, $ = Ml(d), x = Cl(d), O = h + p * (-0.14861 * $ + 1.78277 * x), P = h + p * (-0.29227 * $ - 0.90649 * x), F = h + p * (1.97294 * $);
        return Ua($l([O * 255, P * 255, F * 255, 1]));
      };
      return f.start = function(c) {
        return c == null ? r : (r = c, f);
      }, f.rotations = function(c) {
        return c == null ? e : (e = c, f);
      }, f.gamma = function(c) {
        return c == null ? n : (n = c, f);
      }, f.hue = function(c) {
        return c == null ? a : (a = c, ye(a) === "array" ? (l = a[1] - a[0], l === 0 && (a = a[1])) : l = 0, f);
      }, f.lightness = function(c) {
        return c == null ? u : (ye(c) === "array" ? (u = c, t = c[1] - c[0]) : (u = [c, c], t = 0), f);
      }, f.scale = function() {
        return Ua.scale(f);
      }, f.hue(a), f;
    }, Il = M, Nl = "0123456789abcdef", Pl = Math.floor, Sl = Math.random, Fl = function() {
      for (var r = "#", e = 0; e < 6; e++)
        r += Nl.charAt(Pl(Sl() * 16));
      return new Il(r, "hex");
    }, we = A, Va = Math.log, Dl = Math.pow, Rl = Math.floor, Tl = Math.abs, Ya = function(r, e) {
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
      }), a.domain = [a.min, a.max], a.limits = function(n, u) {
        return Xa(a, n, u);
      }, a;
    }, Xa = function(r, e, a) {
      e === void 0 && (e = "equal"), a === void 0 && (a = 7), we(r) == "array" && (r = Ya(r));
      var n = r.min, u = r.max, l = r.values.sort(function(_e, xe) {
        return _e - xe;
      });
      if (a === 1)
        return [n, u];
      var t = [];
      if (e.substr(0, 1) === "c" && (t.push(n), t.push(u)), e.substr(0, 1) === "e") {
        t.push(n);
        for (var f = 1; f < a; f++)
          t.push(n + f / a * (u - n));
        t.push(u);
      } else if (e.substr(0, 1) === "l") {
        if (n <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var c = Math.LOG10E * Va(n), d = Math.LOG10E * Va(u);
        t.push(n);
        for (var h = 1; h < a; h++)
          t.push(Dl(10, c + h / a * (d - c)));
        t.push(u);
      } else if (e.substr(0, 1) === "q") {
        t.push(n);
        for (var _ = 1; _ < a; _++) {
          var p = (l.length - 1) * _ / a, $ = Rl(p);
          if ($ === p)
            t.push(l[$]);
          else {
            var x = p - $;
            t.push(l[$] * (1 - x) + l[$ + 1] * x);
          }
        }
        t.push(u);
      } else if (e.substr(0, 1) === "k") {
        var O, P = l.length, F = new Array(P), R = new Array(a), V = !0, U = 0, J = null;
        J = [], J.push(n);
        for (var S = 1; S < a; S++)
          J.push(n + S / a * (u - n));
        for (J.push(u); V; ) {
          for (var b = 0; b < a; b++)
            R[b] = 0;
          for (var C = 0; C < P; C++)
            for (var N = l[C], I = Number.MAX_VALUE, Y = void 0, j = 0; j < a; j++) {
              var D = Tl(J[j] - N);
              D < I && (I = D, Y = j), R[Y]++, F[C] = Y;
            }
          for (var T = new Array(a), z = 0; z < a; z++)
            T[z] = null;
          for (var L = 0; L < P; L++)
            O = F[L], T[O] === null ? T[O] = l[L] : T[O] += l[L];
          for (var ar = 0; ar < a; ar++)
            T[ar] *= 1 / R[ar];
          V = !1;
          for (var vr = 0; vr < a; vr++)
            if (T[vr] !== J[vr]) {
              V = !0;
              break;
            }
          J = T, U++, U > 200 && (V = !1);
        }
        for (var sr = {}, Ar = 0; Ar < a; Ar++)
          sr[Ar] = [];
        for (var Cr = 0; Cr < P; Cr++)
          O = F[Cr], sr[O].push(l[Cr]);
        for (var lr = [], pr = 0; pr < a; pr++)
          lr.push(sr[pr][0]), lr.push(sr[pr][sr[pr].length - 1]);
        lr = lr.sort(function(_e, xe) {
          return _e - xe;
        }), t.push(lr[0]);
        for (var Ir = 1; Ir < lr.length; Ir += 2) {
          var br = lr[Ir];
          !isNaN(br) && t.indexOf(br) === -1 && t.push(br);
        }
      }
      return t;
    }, Ja = { analyze: Ya, limits: Xa }, Qa = M, zl = function(r, e) {
      r = new Qa(r), e = new Qa(e);
      var a = r.luminance(), n = e.luminance();
      return a > n ? (a + 0.05) / (n + 0.05) : (n + 0.05) / (a + 0.05);
    }, rn = M, or = Math.sqrt, Z = Math.pow, Ll = Math.min, Kl = Math.max, en = Math.atan2, an = Math.abs, jr = Math.cos, nn = Math.sin, jl = Math.exp, tn = Math.PI, Bl = function(r, e, a, n, u) {
      a === void 0 && (a = 1), n === void 0 && (n = 1), u === void 0 && (u = 1);
      var l = function(br) {
        return 360 * br / (2 * tn);
      }, t = function(br) {
        return 2 * tn * br / 360;
      };
      r = new rn(r), e = new rn(e);
      var f = Array.from(r.lab()), c = f[0], d = f[1], h = f[2], _ = Array.from(e.lab()), p = _[0], $ = _[1], x = _[2], O = (c + p) / 2, P = or(Z(d, 2) + Z(h, 2)), F = or(Z($, 2) + Z(x, 2)), R = (P + F) / 2, V = 0.5 * (1 - or(Z(R, 7) / (Z(R, 7) + Z(25, 7)))), U = d * (1 + V), J = $ * (1 + V), S = or(Z(U, 2) + Z(h, 2)), b = or(Z(J, 2) + Z(x, 2)), C = (S + b) / 2, N = l(en(h, U)), I = l(en(x, J)), Y = N >= 0 ? N : N + 360, j = I >= 0 ? I : I + 360, D = an(Y - j) > 180 ? (Y + j + 360) / 2 : (Y + j) / 2, T = 1 - 0.17 * jr(t(D - 30)) + 0.24 * jr(t(2 * D)) + 0.32 * jr(t(3 * D + 6)) - 0.2 * jr(t(4 * D - 63)), z = j - Y;
      z = an(z) <= 180 ? z : j <= Y ? z + 360 : z - 360, z = 2 * or(S * b) * nn(t(z) / 2);
      var L = p - c, ar = b - S, vr = 1 + 0.015 * Z(O - 50, 2) / or(20 + Z(O - 50, 2)), sr = 1 + 0.045 * C, Ar = 1 + 0.015 * C * T, Cr = 30 * jl(-Z((D - 275) / 25, 2)), lr = 2 * or(Z(C, 7) / (Z(C, 7) + Z(25, 7))), pr = -lr * nn(2 * t(Cr)), Ir = or(Z(L / (a * vr), 2) + Z(ar / (n * sr), 2) + Z(z / (u * Ar), 2) + pr * (ar / (n * sr)) * (z / (u * Ar)));
      return Kl(0, Ll(100, Ir));
    }, un = M, Hl = function(r, e, a) {
      a === void 0 && (a = "lab"), r = new un(r), e = new un(e);
      var n = r.get(a), u = e.get(a), l = 0;
      for (var t in n) {
        var f = (n[t] || 0) - (u[t] || 0);
        l += f * f;
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
    }, on = q, ln = be, Zl = {
      cool: function() {
        return ln([on.hsl(180, 1, 0.9), on.hsl(250, 0.7, 0.4)]);
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
    W.average = ll, W.bezier = gl, W.blend = xl, W.cubehelix = Ol, W.mix = W.interpolate = La, W.random = Fl, W.scale = be, W.analyze = Ja.analyze, W.contrast = zl, W.deltaE = Bl, W.distance = Hl, W.limits = Ja.limits, W.valid = ql, W.scales = Zl, W.colors = Ea, W.brewer = Wl;
    var Ul = W;
    return Ul;
  });
})(dn);
var Jl = dn.exports;
const If = /* @__PURE__ */ Yl(Jl);
function Gr(s, v) {
  if (!(s instanceof v))
    throw new TypeError("Cannot call a class as a function");
}
function vn(s, v) {
  for (var o = 0; o < v.length; o++) {
    var i = v[o];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
  }
}
function Me(s, v, o) {
  return v && vn(s.prototype, v), o && vn(s, o), s;
}
function H(s, v, o) {
  return v in s ? Object.defineProperty(s, v, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[v] = o, s;
}
function tr() {
  return tr = Object.assign || function(s) {
    for (var v = 1; v < arguments.length; v++) {
      var o = arguments[v];
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (s[i] = o[i]);
    }
    return s;
  }, tr.apply(this, arguments);
}
function sn(s, v) {
  var o = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    v && (i = i.filter(function(m) {
      return Object.getOwnPropertyDescriptor(s, m).enumerable;
    })), o.push.apply(o, i);
  }
  return o;
}
function Ql(s) {
  for (var v = 1; v < arguments.length; v++) {
    var o = arguments[v] != null ? arguments[v] : {};
    v % 2 ? sn(Object(o), !0).forEach(function(i) {
      H(s, i, o[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : sn(Object(o)).forEach(function(i) {
      Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(o, i));
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
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Hr(s);
}
function ke(s, v) {
  return ke = Object.setPrototypeOf || function(i, m) {
    return i.__proto__ = m, i;
  }, ke(s, v);
}
function rf() {
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
function ef(s, v) {
  if (s == null)
    return {};
  var o = {}, i = Object.keys(s), m, g;
  for (g = 0; g < i.length; g++)
    m = i[g], !(v.indexOf(m) >= 0) && (o[m] = s[m]);
  return o;
}
function qr(s, v) {
  if (s == null)
    return {};
  var o = ef(s, v), i, m;
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(s);
    for (m = 0; m < g.length; m++)
      i = g[m], !(v.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(s, i) && (o[i] = s[i]);
  }
  return o;
}
function nr(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function af(s, v) {
  return v && (typeof v == "object" || typeof v == "function") ? v : nr(s);
}
function Ie(s) {
  var v = rf();
  return function() {
    var i = Hr(s), m;
    if (v) {
      var g = Hr(this).constructor;
      m = Reflect.construct(i, arguments, g);
    } else
      m = i.apply(this, arguments);
    return af(this, m);
  };
}
function nf(s, v) {
  return of(s) || ff(s, v) || gn(s, v) || vf();
}
function tf(s) {
  return uf(s) || lf(s) || gn(s) || cf();
}
function uf(s) {
  if (Array.isArray(s))
    return Ae(s);
}
function of(s) {
  if (Array.isArray(s))
    return s;
}
function lf(s) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(s))
    return Array.from(s);
}
function ff(s, v) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
    var o = [], i = !0, m = !1, g = void 0;
    try {
      for (var y = s[Symbol.iterator](), w; !(i = (w = y.next()).done) && (o.push(w.value), !(v && o.length === v)); i = !0)
        ;
    } catch (k) {
      m = !0, g = k;
    } finally {
      try {
        !i && y.return != null && y.return();
      } finally {
        if (m)
          throw g;
      }
    }
    return o;
  }
}
function gn(s, v) {
  if (s) {
    if (typeof s == "string")
      return Ae(s, v);
    var o = Object.prototype.toString.call(s).slice(8, -1);
    if (o === "Object" && s.constructor && (o = s.constructor.name), o === "Map" || o === "Set")
      return Array.from(s);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Ae(s, v);
  }
}
function Ae(s, v) {
  (v == null || v > s.length) && (v = s.length);
  for (var o = 0, i = new Array(v); o < v; o++)
    i[o] = s[o];
  return i;
}
function cf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var sf = function s(v) {
  var o = this, i = v.expanded, m = i === void 0 ? [] : i, g = v.allowMultipleExpanded, y = g === void 0 ? !1 : g, w = v.allowZeroExpanded, k = w === void 0 ? !1 : w;
  Gr(this, s), H(this, "expanded", void 0), H(this, "allowMultipleExpanded", void 0), H(this, "allowZeroExpanded", void 0), H(this, "toggleExpanded", function(A) {
    if (o.isItemDisabled(A))
      return o;
    var K = o.isItemExpanded(A);
    return K ? o.augment({
      expanded: o.expanded.filter(function(X) {
        return X !== A;
      })
    }) : o.augment({
      expanded: o.allowMultipleExpanded ? [].concat(tf(o.expanded), [A]) : [A]
    });
  }), H(this, "isItemDisabled", function(A) {
    var K = o.isItemExpanded(A), X = o.expanded.length === 1;
    return !!(K && !o.allowZeroExpanded && X);
  }), H(this, "isItemExpanded", function(A) {
    return o.expanded.indexOf(A) !== -1;
  }), H(this, "getPanelAttributes", function(A, K) {
    var X = K ?? o.isItemExpanded(A);
    return {
      role: o.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": o.allowMultipleExpanded ? !X : void 0,
      "aria-labelledby": o.getButtonId(A),
      id: o.getPanelId(A),
      hidden: X ? void 0 : !0
    };
  }), H(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), H(this, "getButtonAttributes", function(A, K) {
    var X = K ?? o.isItemExpanded(A), dr = o.isItemDisabled(A);
    return {
      id: o.getButtonId(A),
      "aria-disabled": dr,
      "aria-expanded": X,
      "aria-controls": o.getPanelId(A),
      role: "button",
      tabIndex: 0
    };
  }), H(this, "getPanelId", function(A) {
    return "accordion__panel-".concat(A);
  }), H(this, "getButtonId", function(A) {
    return "accordion__heading-".concat(A);
  }), H(this, "augment", function(A) {
    return new s(Ql({
      expanded: o.expanded,
      allowMultipleExpanded: o.allowMultipleExpanded,
      allowZeroExpanded: o.allowZeroExpanded
    }, A));
  }), this.expanded = m, this.allowMultipleExpanded = y, this.allowZeroExpanded = k;
}, hn = /* @__PURE__ */ B.createContext(null), pn = /* @__PURE__ */ function(s) {
  Oe(o, s);
  var v = Ie(o);
  function o() {
    var i;
    Gr(this, o);
    for (var m = arguments.length, g = new Array(m), y = 0; y < m; y++)
      g[y] = arguments[y];
    return i = v.call.apply(v, [this].concat(g)), H(nr(i), "state", new sf({
      expanded: i.props.preExpanded,
      allowMultipleExpanded: i.props.allowMultipleExpanded,
      allowZeroExpanded: i.props.allowZeroExpanded
    })), H(nr(i), "toggleExpanded", function(w) {
      i.setState(function(k) {
        return k.toggleExpanded(w);
      }, function() {
        i.props.onChange && i.props.onChange(i.state.expanded);
      });
    }), H(nr(i), "isItemDisabled", function(w) {
      return i.state.isItemDisabled(w);
    }), H(nr(i), "isItemExpanded", function(w) {
      return i.state.isItemExpanded(w);
    }), H(nr(i), "getPanelAttributes", function(w, k) {
      return i.state.getPanelAttributes(w, k);
    }), H(nr(i), "getHeadingAttributes", function() {
      return i.state.getHeadingAttributes();
    }), H(nr(i), "getButtonAttributes", function(w, k) {
      return i.state.getButtonAttributes(w, k);
    }), i;
  }
  return Me(o, [{
    key: "render",
    value: function() {
      var m = this.state, g = m.allowZeroExpanded, y = m.allowMultipleExpanded;
      return /* @__PURE__ */ B.createElement(hn.Provider, {
        value: {
          allowMultipleExpanded: y,
          allowZeroExpanded: g,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]), o;
}(B.PureComponent);
H(pn, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var bn = /* @__PURE__ */ function(s) {
  Oe(o, s);
  var v = Ie(o);
  function o() {
    var i;
    Gr(this, o);
    for (var m = arguments.length, g = new Array(m), y = 0; y < m; y++)
      g[y] = arguments[y];
    return i = v.call.apply(v, [this].concat(g)), H(nr(i), "renderChildren", function(w) {
      return w ? i.props.children(w) : null;
    }), i;
  }
  return Me(o, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ B.createElement(hn.Consumer, null, this.renderChildren);
    }
  }]), o;
}(B.PureComponent), Nf = function(v) {
  var o = v.className, i = o === void 0 ? "accordion" : o, m = v.allowMultipleExpanded, g = v.allowZeroExpanded, y = v.onChange, w = v.preExpanded, k = qr(v, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ B.createElement(pn, {
    preExpanded: w,
    allowMultipleExpanded: m,
    allowZeroExpanded: g,
    onChange: y
  }, /* @__PURE__ */ B.createElement("div", tr({
    "data-accordion-component": "Accordion",
    className: i
  }, k)));
}, Ce;
(function(s) {
  s.Accordion = "Accordion", s.AccordionItem = "AccordionItem", s.AccordionItemButton = "AccordionItemButton", s.AccordionItemHeading = "AccordionItemHeading", s.AccordionItemPanel = "AccordionItemPanel";
})(Ce || (Ce = {}));
var mn = Ce, df = 0, $e = df;
function gf() {
  var s = $e;
  return $e = $e + 1, "raa-".concat(s);
}
var hf = /[\u0009\u000a\u000c\u000d\u0020]/g;
function Nr(s) {
  return s === "" || hf.test(s) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(s, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var yn = /* @__PURE__ */ B.createContext(null), pf = function(v) {
  var o = v.children, i = v.uuid, m = v.accordionContext, g = v.dangerouslySetExpanded, y = function() {
    m.toggleExpanded(i);
  }, w = function(A) {
    var K = g ?? A.isItemExpanded(i), X = A.isItemDisabled(i), dr = A.getPanelAttributes(i, g), Pr = A.getHeadingAttributes(i), ur = A.getButtonAttributes(i, g);
    return /* @__PURE__ */ B.createElement(yn.Provider, {
      value: {
        uuid: i,
        expanded: K,
        disabled: X,
        toggleExpanded: y,
        panelAttributes: dr,
        headingAttributes: Pr,
        buttonAttributes: ur
      }
    }, o);
  };
  return /* @__PURE__ */ B.createElement(bn, null, w);
}, bf = function(v) {
  return /* @__PURE__ */ B.createElement(bn, null, function(o) {
    return /* @__PURE__ */ B.createElement(pf, tr({}, v, {
      accordionContext: o
    }));
  });
}, Zr = function(v) {
  var o = v.children, i = function(g) {
    return g ? o(g) : null;
  };
  return /* @__PURE__ */ B.createElement(yn.Consumer, null, i);
}, mf = function(v) {
  var o = v.uuid, i = v.dangerouslySetExpanded, m = v.className, g = m === void 0 ? "accordion__item" : m, y = v.activeClassName, w = qr(v, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), k = B.useState(gf()), A = nf(k, 1), K = A[0], X = o ?? K, dr = function(ur) {
    var E = ur.expanded, G = E && y ? y : g;
    return /* @__PURE__ */ B.createElement("div", tr({
      "data-accordion-component": "AccordionItem",
      className: G
    }, w));
  };
  return Nr(X.toString()), w.id && Nr(w.id), /* @__PURE__ */ B.createElement(bf, {
    uuid: X,
    dangerouslySetExpanded: i
  }, /* @__PURE__ */ B.createElement(Zr, null, dr));
};
mf.displayName = mn.AccordionItem;
function wn(s) {
  return s && (s.matches('[data-accordion-component="Accordion"]') ? s : wn(s.parentElement));
}
function Wr(s) {
  var v = wn(s);
  return v && Array.from(v.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function yf(s) {
  var v = Wr(s) || [], o = v[0];
  o && o.focus();
}
function wf(s) {
  var v = Wr(s) || [], o = v[v.length - 1];
  o && o.focus();
}
function Ef(s) {
  var v = Wr(s) || [], o = v.indexOf(s);
  if (o !== -1) {
    var i = v[o + 1];
    i && i.focus();
  }
}
function _f(s) {
  var v = Wr(s) || [], o = v.indexOf(s);
  if (o !== -1) {
    var i = v[o - 1];
    i && i.focus();
  }
}
var fr = {
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
  var o = v.toggleExpanded, i = v.className, m = i === void 0 ? "accordion__button" : i, g = qr(v, ["toggleExpanded", "className"]), y = function(k) {
    var A = k.key;
    if ((A === fr.ENTER || A === fr.SPACE || A === fr.SPACE_DEPRECATED) && (k.preventDefault(), o()), k.target instanceof HTMLElement)
      switch (A) {
        case fr.HOME: {
          k.preventDefault(), yf(k.target);
          break;
        }
        case fr.END: {
          k.preventDefault(), wf(k.target);
          break;
        }
        case fr.LEFT:
        case fr.UP: {
          k.preventDefault(), _f(k.target);
          break;
        }
        case fr.RIGHT:
        case fr.DOWN: {
          k.preventDefault(), Ef(k.target);
          break;
        }
      }
  };
  return g.id && Nr(g.id), /* @__PURE__ */ B.createElement("div", tr({
    className: m
  }, g, {
    role: "button",
    tabIndex: 0,
    onClick: o,
    onKeyDown: y,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Pf = function(v) {
  return /* @__PURE__ */ B.createElement(Zr, null, function(o) {
    var i = o.toggleExpanded, m = o.buttonAttributes;
    return /* @__PURE__ */ B.createElement(xf, tr({
      toggleExpanded: i
    }, v, m));
  });
}, $f = {
  className: "accordion__heading",
  "aria-level": 3
}, kf = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, En = /* @__PURE__ */ function(s) {
  Oe(o, s);
  var v = Ie(o);
  function o() {
    var i;
    Gr(this, o);
    for (var m = arguments.length, g = new Array(m), y = 0; y < m; y++)
      g[y] = arguments[y];
    return i = v.call.apply(v, [this].concat(g)), H(nr(i), "ref", void 0), H(nr(i), "setRef", function(w) {
      i.ref = w;
    }), i;
  }
  return Me(o, [{
    key: "componentDidUpdate",
    value: function() {
      o.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      o.VALIDATE(this.ref);
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
        throw new Error(kf);
    }
  }]), o;
}(B.PureComponent);
H(En, "defaultProps", $f);
var Af = function(v) {
  return /* @__PURE__ */ B.createElement(Zr, null, function(o) {
    var i = o.headingAttributes;
    return v.id && Nr(v.id), /* @__PURE__ */ B.createElement(En, tr({}, v, i));
  });
};
Af.displayName = mn.AccordionItemHeading;
var Sf = function(v) {
  var o = v.className, i = o === void 0 ? "accordion__panel" : o, m = v.id, g = qr(v, ["className", "id"]), y = function(k) {
    var A = k.panelAttributes;
    return m && Nr(m), /* @__PURE__ */ B.createElement("div", tr({
      "data-accordion-component": "AccordionItemPanel",
      className: i
    }, g, A));
  };
  return /* @__PURE__ */ B.createElement(Zr, null, y);
};
class Ff {
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
    const o = [];
    if ((!v || v.length === 0) && o.push(this.constants.errorMessageEmptyData), (!(v != null && v.filter) || v.filter((i) => typeof i != "object").length > 0) && o.push(this.constants.errorMessageFormat), o.length > 0) {
      console.error(o);
      return;
    }
    if (v.filter((i) => i.constructor !== Object).length > 0) {
      let i = [];
      for (let m = 1; m < v.length; m++) {
        let g = {};
        v[m].forEach((y, w) => {
          g[v[0][w]] = y;
        }), i.push(g);
      }
      v = i;
    }
    return v;
  }
  //Performs standardizations based on developer provided description of the data
  developerStandardize(v, o) {
    if (!v)
      return [];
    if (o && !(o.horizontal === void 0 || o.series === void 0) && !(o.series === !0 && o.horizontal === !1 && o.singleRow === void 0)) {
      if (o.horizontal === !0)
        if (o.series === !0) {
          if (!o.seriesKey)
            return;
          let i = {}, m = [];
          return v.forEach((g) => {
            let y = [];
            Object.keys(g).forEach((w) => {
              w !== o.seriesKey && isNaN(parseFloat(g[w])) && y.push(w);
            }), Object.keys(g).forEach((w) => {
              if (w !== o.seriesKey && y.indexOf(w) === -1) {
                let k = w + "|" + y.map((A) => A + "=" + g[A]);
                i[k] || (i[k] = { [g[o.seriesKey]]: g[w], key: w }, y.forEach((A) => {
                  i[k][A] = g[A];
                })), i[k][g[o.seriesKey]] = g[w];
              }
            });
          }), Object.keys(i).forEach((g) => {
            m.push(i[g]);
          }), m;
        } else {
          let i = [];
          return v.forEach((m) => {
            let g = [];
            Object.keys(m).forEach((y) => {
              isNaN(parseFloat(m[y])) && g.push(y);
            }), Object.keys(m).forEach((y) => {
              if (g.indexOf(y) === -1) {
                let w = { key: y, value: m[y] };
                g.forEach((k) => {
                  w[k] = m[k];
                }), i.push(w);
              }
            });
          }), i;
        }
      else if (o.series === !0 && o.singleRow === !1)
        if (o.seriesKey !== void 0 && o.xKey !== void 0 && (o.valueKey !== void 0 || o.valueKeys !== void 0 && o.valueKeys.length > 0 || o.valueKeysTallSupport !== void 0 && o.valueKeysTallSupport.length > 0))
          if (o.valueKeysTallSupport !== void 0) {
            let i = {}, m = [];
            return v.forEach((g) => {
              let y = g[o.xKey];
              Object.keys(g).forEach((w) => {
                w !== o.xKey && w !== o.seriesKey && o.valueKeysTallSupport.indexOf(w) === -1 && (!o.ignoredKeys || o.ignoredKeys.indexOf(w) === -1) && (y += "|" + g[w]);
              }), i[y] || (i[y] = { [o.xKey]: g[o.xKey] }), Object.keys(g).forEach((w) => {
                w !== o.xKey && w !== o.seriesKey && o.valueKeysTallSupport.indexOf(w) === -1 && (!o.ignoredKeys || o.ignoredKeys.indexOf(w) === -1) && (i[y][w] = g[w]);
              }), o.valueKeysTallSupport.forEach((w, k) => {
                g[o.seriesKey] && (i[y][k === 0 ? g[o.seriesKey] : g[o.seriesKey] + "-" + w] = g[w]);
              });
            }), m = Object.keys(i).map((g) => i[g]), m;
          } else if (o.valueKeys !== void 0) {
            let i = {}, m = [], g = o.valueKeys;
            return o.ignoredKeys && o.ignoredKeys.length > 0 && (g = g.concat(o.ignoredKeys)), v.forEach((y) => {
              g.forEach((w) => {
                let k = [], A = y[o.xKey] + "|" + w;
                Object.keys(y).forEach((K) => {
                  K !== o.xKey && K !== o.seriesKey && g.indexOf(K) === -1 && (A += "|" + K + "=" + y[K], k.push(K));
                }), i[A] || (i[A] = {
                  [o.xKey]: y[o.xKey],
                  "**Numeric Value Property**": w
                }, k.forEach((K) => {
                  i[A][K] = y[K];
                })), i[A][y[o.seriesKey]] = y[w];
              });
            }), Object.keys(i).forEach((y) => {
              (!o.ignoredKeys || o.ignoredKeys.indexOf(i[y]["**Numeric Value Property**"]) === -1) && m.push(i[y]);
            }), m;
          } else {
            let i = {}, m = [];
            return v.forEach((g) => {
              let y = [], w = g[o.xKey];
              Object.keys(g).forEach((k) => {
                k !== o.xKey && k !== o.seriesKey && k !== o.valueKey && (w += "|" + k + "=" + g[k], y.push(k));
              }), i[w] ? i[w][g[o.seriesKey]] = g[o.valueKey] : (i[w] = {
                [o.xKey]: g[o.xKey],
                [g[o.seriesKey]]: g[o.valueKey]
              }, y.forEach((k) => {
                i[w][k] = g[k];
              }));
            }), Object.keys(i).forEach((g) => {
              m.push(i[g]);
            }), m;
          }
        else
          return;
      return v;
    }
  }
  cleanData(v, o) {
    if (!Array.isArray(v) || !o)
      return v;
    const i = (g) => g.replace(/[,\$]/g, ""), m = (g) => !isNaN(parseFloat(g)) && isFinite(g);
    return v.map(
      (g) => Xl.mapValues(g, (y, w) => {
        if (w === o)
          return y;
        if (typeof y == "string") {
          const k = i(y);
          return m(k) ? k : "";
        }
        return m(y) ? y : "";
      })
    );
  }
  // clean out %, $, commas from numbers when needing to do sorting!
  cleanDataPoint(v, o = !1) {
    o && console.log("clean", v);
    let i = "";
    return typeof v == "string" ? i = v !== null && v !== "" ? v.replace(/[,\$\%]/g, "") : "" : i = v !== null && v !== "" ? v : "", o && console.log("## cleanedData =", i), i;
  }
}
export {
  Nf as A,
  Ff as D,
  mf as a,
  Af as b,
  Pf as c,
  Sf as d,
  If as e
};
