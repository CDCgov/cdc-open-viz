import { c as wv, g as kv } from "./storybook-c5d32002.es.js";
var Oe = { exports: {} };
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
(function(De, _v) {
  (function(xr, gr) {
    De.exports = gr();
  })(wv, function() {
    for (var xr = function(r, a, e) {
      return a === void 0 && (a = 0), e === void 0 && (e = 1), r < a ? a : r > e ? e : r;
    }, gr = xr, Se = function(r) {
      r._clipped = !1, r._unclipped = r.slice(0);
      for (var a = 0; a <= 3; a++)
        a < 3 ? ((r[a] < 0 || r[a] > 255) && (r._clipped = !0), r[a] = gr(r[a], 0, 255)) : a === 3 && (r[a] = gr(r[a], 0, 1));
      return r;
    }, na = {}, Cr = 0, ta = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; Cr < ta.length; Cr += 1) {
      var fa = ta[Cr];
      na["[object " + fa + "]"] = fa.toLowerCase();
    }
    var hr = function(r) {
      return na[Object.prototype.toString.call(r)] || "object";
    }, Be = hr, Ye = function(r, a) {
      return a === void 0 && (a = null), r.length >= 3 ? Array.prototype.slice.call(r) : Be(r[0]) == "object" && a ? a.split("").filter(function(e) {
        return r[0][e] !== void 0;
      }).map(function(e) {
        return r[0][e];
      }) : r[0];
    }, He = hr, Xe = function(r) {
      if (r.length < 2)
        return null;
      var a = r.length - 1;
      return He(r[a]) == "string" ? r[a].toLowerCase() : null;
    }, or = Math.PI, g = {
      clip_rgb: Se,
      limit: xr,
      type: hr,
      unpack: Ye,
      last: Xe,
      PI: or,
      TWOPI: or * 2,
      PITHIRD: or / 3,
      DEG2RAD: or / 180,
      RAD2DEG: 180 / or
    }, z = {
      format: {},
      autodetect: []
    }, We = g.last, Ue = g.clip_rgb, va = g.type, Z = z, ua = function() {
      for (var a = [], e = arguments.length; e--; )
        a[e] = arguments[e];
      var n = this;
      if (va(a[0]) === "object" && a[0].constructor && a[0].constructor === this.constructor)
        return a[0];
      var f = We(a), v = !1;
      if (!f) {
        v = !0, Z.sorted || (Z.autodetect = Z.autodetect.sort(function(i, h) {
          return h.p - i.p;
        }), Z.sorted = !0);
        for (var t = 0, u = Z.autodetect; t < u.length; t += 1) {
          var l = u[t];
          if (f = l.test.apply(l, a), f)
            break;
        }
      }
      if (Z.format[f]) {
        var o = Z.format[f].apply(null, v ? a : a.slice(0, -1));
        n._rgb = Ue(o);
      } else
        throw new Error("unknown format: " + a);
      n._rgb.length === 3 && n._rgb.push(1);
    };
    ua.prototype.toString = function() {
      return va(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var m = ua, br = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(br.Color, [null].concat(r)))();
    };
    br.Color = m, br.version = "2.4.2";
    var L = br, Ve = g.unpack, la = Math.max, Ze = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Ve(r, "rgb"), n = e[0], f = e[1], v = e[2];
      n = n / 255, f = f / 255, v = v / 255;
      var t = 1 - la(n, la(f, v)), u = t < 1 ? 1 / (1 - t) : 0, l = (1 - n - t) * u, o = (1 - f - t) * u, i = (1 - v - t) * u;
      return [l, o, i, t];
    }, Je = Ze, Qe = g.unpack, je = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = Qe(r, "cmyk");
      var e = r[0], n = r[1], f = r[2], v = r[3], t = r.length > 4 ? r[4] : 1;
      return v === 1 ? [0, 0, 0, t] : [
        e >= 1 ? 0 : 255 * (1 - e) * (1 - v),
        // r
        n >= 1 ? 0 : 255 * (1 - n) * (1 - v),
        // g
        f >= 1 ? 0 : 255 * (1 - f) * (1 - v),
        // b
        t
      ];
    }, Ke = je, rn = L, oa = m, ia = z, an = g.unpack, en = g.type, nn = Je;
    oa.prototype.cmyk = function() {
      return nn(this._rgb);
    }, rn.cmyk = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(oa, [null].concat(r, ["cmyk"])))();
    }, ia.format.cmyk = Ke, ia.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = an(r, "cmyk"), en(r) === "array" && r.length === 4)
          return "cmyk";
      }
    });
    var tn = g.unpack, fn = g.last, Nr = function(r) {
      return Math.round(r * 100) / 100;
    }, vn = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = tn(r, "hsla"), n = fn(r) || "lsa";
      return e[0] = Nr(e[0] || 0), e[1] = Nr(e[1] * 100) + "%", e[2] = Nr(e[2] * 100) + "%", n === "hsla" || e.length > 3 && e[3] < 1 ? (e[3] = e.length > 3 ? e[3] : 1, n = "hsla") : e.length = 3, n + "(" + e.join(",") + ")";
    }, un = vn, ln = g.unpack, on = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = ln(r, "rgba");
      var e = r[0], n = r[1], f = r[2];
      e /= 255, n /= 255, f /= 255;
      var v = Math.min(e, n, f), t = Math.max(e, n, f), u = (t + v) / 2, l, o;
      return t === v ? (l = 0, o = Number.NaN) : l = u < 0.5 ? (t - v) / (t + v) : (t - v) / (2 - t - v), e == t ? o = (n - f) / (t - v) : n == t ? o = 2 + (f - e) / (t - v) : f == t && (o = 4 + (e - n) / (t - v)), o *= 60, o < 0 && (o += 360), r.length > 3 && r[3] !== void 0 ? [o, l, u, r[3]] : [o, l, u];
    }, ca = on, cn = g.unpack, sn = g.last, gn = un, hn = ca, Fr = Math.round, bn = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = cn(r, "rgba"), n = sn(r) || "rgb";
      return n.substr(0, 3) == "hsl" ? gn(hn(e), n) : (e[0] = Fr(e[0]), e[1] = Fr(e[1]), e[2] = Fr(e[2]), (n === "rgba" || e.length > 3 && e[3] < 1) && (e[3] = e.length > 3 ? e[3] : 1, n = "rgba"), n + "(" + e.slice(0, n === "rgb" ? 3 : 4).join(",") + ")");
    }, pn = bn, dn = g.unpack, Er = Math.round, mn = function() {
      for (var r, a = [], e = arguments.length; e--; )
        a[e] = arguments[e];
      a = dn(a, "hsl");
      var n = a[0], f = a[1], v = a[2], t, u, l;
      if (f === 0)
        t = u = l = v * 255;
      else {
        var o = [0, 0, 0], i = [0, 0, 0], h = v < 0.5 ? v * (1 + f) : v + f - v * f, c = 2 * v - h, p = n / 360;
        o[0] = p + 1 / 3, o[1] = p, o[2] = p - 1 / 3;
        for (var b = 0; b < 3; b++)
          o[b] < 0 && (o[b] += 1), o[b] > 1 && (o[b] -= 1), 6 * o[b] < 1 ? i[b] = c + (h - c) * 6 * o[b] : 2 * o[b] < 1 ? i[b] = h : 3 * o[b] < 2 ? i[b] = c + (h - c) * (2 / 3 - o[b]) * 6 : i[b] = c;
        r = [Er(i[0] * 255), Er(i[1] * 255), Er(i[2] * 255)], t = r[0], u = r[1], l = r[2];
      }
      return a.length > 3 ? [t, u, l, a[3]] : [t, u, l, 1];
    }, sa = mn, ga = sa, ha = z, ba = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, pa = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, da = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, ma = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, ya = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, wa = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, ka = Math.round, $a = function(r) {
      r = r.toLowerCase().trim();
      var a;
      if (ha.format.named)
        try {
          return ha.format.named(r);
        } catch {
        }
      if (a = r.match(ba)) {
        for (var e = a.slice(1, 4), n = 0; n < 3; n++)
          e[n] = +e[n];
        return e[3] = 1, e;
      }
      if (a = r.match(pa)) {
        for (var f = a.slice(1, 5), v = 0; v < 4; v++)
          f[v] = +f[v];
        return f;
      }
      if (a = r.match(da)) {
        for (var t = a.slice(1, 4), u = 0; u < 3; u++)
          t[u] = ka(t[u] * 2.55);
        return t[3] = 1, t;
      }
      if (a = r.match(ma)) {
        for (var l = a.slice(1, 5), o = 0; o < 3; o++)
          l[o] = ka(l[o] * 2.55);
        return l[3] = +l[3], l;
      }
      if (a = r.match(ya)) {
        var i = a.slice(1, 4);
        i[1] *= 0.01, i[2] *= 0.01;
        var h = ga(i);
        return h[3] = 1, h;
      }
      if (a = r.match(wa)) {
        var c = a.slice(1, 4);
        c[1] *= 0.01, c[2] *= 0.01;
        var p = ga(c);
        return p[3] = +a[4], p;
      }
    };
    $a.test = function(r) {
      return ba.test(r) || pa.test(r) || da.test(r) || ma.test(r) || ya.test(r) || wa.test(r);
    };
    var yn = $a, wn = L, _a = m, Ma = z, kn = g.type, $n = pn, xa = yn;
    _a.prototype.css = function(r) {
      return $n(this._rgb, r);
    }, wn.css = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(_a, [null].concat(r, ["css"])))();
    }, Ma.format.css = xa, Ma.autodetect.push({
      p: 5,
      test: function(r) {
        for (var a = [], e = arguments.length - 1; e-- > 0; )
          a[e] = arguments[e + 1];
        if (!a.length && kn(r) === "string" && xa.test(r))
          return "css";
      }
    });
    var Ca = m, _n = L, Mn = z, xn = g.unpack;
    Mn.format.gl = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = xn(r, "rgba");
      return e[0] *= 255, e[1] *= 255, e[2] *= 255, e;
    }, _n.gl = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Ca, [null].concat(r, ["gl"])))();
    }, Ca.prototype.gl = function() {
      var r = this._rgb;
      return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]];
    };
    var Cn = g.unpack, Nn = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Cn(r, "rgb"), n = e[0], f = e[1], v = e[2], t = Math.min(n, f, v), u = Math.max(n, f, v), l = u - t, o = l * 100 / 255, i = t / (255 - l) * 100, h;
      return l === 0 ? h = Number.NaN : (n === u && (h = (f - v) / l), f === u && (h = 2 + (v - n) / l), v === u && (h = 4 + (n - f) / l), h *= 60, h < 0 && (h += 360)), [h, o, i];
    }, Fn = Nn, En = g.unpack, An = Math.floor, Ln = function() {
      for (var r, a, e, n, f, v, t = [], u = arguments.length; u--; )
        t[u] = arguments[u];
      t = En(t, "hcg");
      var l = t[0], o = t[1], i = t[2], h, c, p;
      i = i * 255;
      var b = o * 255;
      if (o === 0)
        h = c = p = i;
      else {
        l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), l /= 60;
        var y = An(l), $ = l - y, M = i * (1 - o), C = M + b * (1 - $), G = M + b * $, T = M + b;
        switch (y) {
          case 0:
            r = [T, G, M], h = r[0], c = r[1], p = r[2];
            break;
          case 1:
            a = [C, T, M], h = a[0], c = a[1], p = a[2];
            break;
          case 2:
            e = [M, T, G], h = e[0], c = e[1], p = e[2];
            break;
          case 3:
            n = [M, C, T], h = n[0], c = n[1], p = n[2];
            break;
          case 4:
            f = [G, M, T], h = f[0], c = f[1], p = f[2];
            break;
          case 5:
            v = [T, M, C], h = v[0], c = v[1], p = v[2];
            break;
        }
      }
      return [h, c, p, t.length > 3 ? t[3] : 1];
    }, Rn = Ln, zn = g.unpack, Pn = g.type, Tn = L, Na = m, Fa = z, Gn = Fn;
    Na.prototype.hcg = function() {
      return Gn(this._rgb);
    }, Tn.hcg = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Na, [null].concat(r, ["hcg"])))();
    }, Fa.format.hcg = Rn, Fa.autodetect.push({
      p: 1,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = zn(r, "hcg"), Pn(r) === "array" && r.length === 3)
          return "hcg";
      }
    });
    var In = g.unpack, qn = g.last, pr = Math.round, On = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = In(r, "rgba"), n = e[0], f = e[1], v = e[2], t = e[3], u = qn(r) || "auto";
      t === void 0 && (t = 1), u === "auto" && (u = t < 1 ? "rgba" : "rgb"), n = pr(n), f = pr(f), v = pr(v);
      var l = n << 16 | f << 8 | v, o = "000000" + l.toString(16);
      o = o.substr(o.length - 6);
      var i = "0" + pr(t * 255).toString(16);
      switch (i = i.substr(i.length - 2), u.toLowerCase()) {
        case "rgba":
          return "#" + o + i;
        case "argb":
          return "#" + i + o;
        default:
          return "#" + o;
      }
    }, Ea = On, Dn = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Sn = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Bn = function(r) {
      if (r.match(Dn)) {
        (r.length === 4 || r.length === 7) && (r = r.substr(1)), r.length === 3 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]);
        var a = parseInt(r, 16), e = a >> 16, n = a >> 8 & 255, f = a & 255;
        return [e, n, f, 1];
      }
      if (r.match(Sn)) {
        (r.length === 5 || r.length === 9) && (r = r.substr(1)), r.length === 4 && (r = r.split(""), r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]);
        var v = parseInt(r, 16), t = v >> 24 & 255, u = v >> 16 & 255, l = v >> 8 & 255, o = Math.round((v & 255) / 255 * 100) / 100;
        return [t, u, l, o];
      }
      throw new Error("unknown hex color: " + r);
    }, Aa = Bn, Yn = L, La = m, Hn = g.type, Ra = z, Xn = Ea;
    La.prototype.hex = function(r) {
      return Xn(this._rgb, r);
    }, Yn.hex = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(La, [null].concat(r, ["hex"])))();
    }, Ra.format.hex = Aa, Ra.autodetect.push({
      p: 4,
      test: function(r) {
        for (var a = [], e = arguments.length - 1; e-- > 0; )
          a[e] = arguments[e + 1];
        if (!a.length && Hn(r) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(r.length) >= 0)
          return "hex";
      }
    });
    var Wn = g.unpack, za = g.TWOPI, Un = Math.min, Vn = Math.sqrt, Zn = Math.acos, Jn = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Wn(r, "rgb"), n = e[0], f = e[1], v = e[2];
      n /= 255, f /= 255, v /= 255;
      var t, u = Un(n, f, v), l = (n + f + v) / 3, o = l > 0 ? 1 - u / l : 0;
      return o === 0 ? t = NaN : (t = (n - f + (n - v)) / 2, t /= Vn((n - f) * (n - f) + (n - v) * (f - v)), t = Zn(t), v > f && (t = za - t), t /= za), [t * 360, o, l];
    }, Qn = Jn, jn = g.unpack, Ar = g.limit, K = g.TWOPI, Lr = g.PITHIRD, rr = Math.cos, Kn = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = jn(r, "hsi");
      var e = r[0], n = r[1], f = r[2], v, t, u;
      return isNaN(e) && (e = 0), isNaN(n) && (n = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 360, e < 1 / 3 ? (u = (1 - n) / 3, v = (1 + n * rr(K * e) / rr(Lr - K * e)) / 3, t = 1 - (u + v)) : e < 2 / 3 ? (e -= 1 / 3, v = (1 - n) / 3, t = (1 + n * rr(K * e) / rr(Lr - K * e)) / 3, u = 1 - (v + t)) : (e -= 2 / 3, t = (1 - n) / 3, u = (1 + n * rr(K * e) / rr(Lr - K * e)) / 3, v = 1 - (t + u)), v = Ar(f * v * 3), t = Ar(f * t * 3), u = Ar(f * u * 3), [v * 255, t * 255, u * 255, r.length > 3 ? r[3] : 1];
    }, rt = Kn, at = g.unpack, et = g.type, nt = L, Pa = m, Ta = z, tt = Qn;
    Pa.prototype.hsi = function() {
      return tt(this._rgb);
    }, nt.hsi = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Pa, [null].concat(r, ["hsi"])))();
    }, Ta.format.hsi = rt, Ta.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = at(r, "hsi"), et(r) === "array" && r.length === 3)
          return "hsi";
      }
    });
    var ft = g.unpack, vt = g.type, ut = L, Ga = m, Ia = z, lt = ca;
    Ga.prototype.hsl = function() {
      return lt(this._rgb);
    }, ut.hsl = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Ga, [null].concat(r, ["hsl"])))();
    }, Ia.format.hsl = sa, Ia.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = ft(r, "hsl"), vt(r) === "array" && r.length === 3)
          return "hsl";
      }
    });
    var ot = g.unpack, it = Math.min, ct = Math.max, st = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = ot(r, "rgb");
      var e = r[0], n = r[1], f = r[2], v = it(e, n, f), t = ct(e, n, f), u = t - v, l, o, i;
      return i = t / 255, t === 0 ? (l = Number.NaN, o = 0) : (o = u / t, e === t && (l = (n - f) / u), n === t && (l = 2 + (f - e) / u), f === t && (l = 4 + (e - n) / u), l *= 60, l < 0 && (l += 360)), [l, o, i];
    }, gt = st, ht = g.unpack, bt = Math.floor, pt = function() {
      for (var r, a, e, n, f, v, t = [], u = arguments.length; u--; )
        t[u] = arguments[u];
      t = ht(t, "hsv");
      var l = t[0], o = t[1], i = t[2], h, c, p;
      if (i *= 255, o === 0)
        h = c = p = i;
      else {
        l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), l /= 60;
        var b = bt(l), y = l - b, $ = i * (1 - o), M = i * (1 - o * y), C = i * (1 - o * (1 - y));
        switch (b) {
          case 0:
            r = [i, C, $], h = r[0], c = r[1], p = r[2];
            break;
          case 1:
            a = [M, i, $], h = a[0], c = a[1], p = a[2];
            break;
          case 2:
            e = [$, i, C], h = e[0], c = e[1], p = e[2];
            break;
          case 3:
            n = [$, M, i], h = n[0], c = n[1], p = n[2];
            break;
          case 4:
            f = [C, $, i], h = f[0], c = f[1], p = f[2];
            break;
          case 5:
            v = [i, $, M], h = v[0], c = v[1], p = v[2];
            break;
        }
      }
      return [h, c, p, t.length > 3 ? t[3] : 1];
    }, dt = pt, mt = g.unpack, yt = g.type, wt = L, qa = m, Oa = z, kt = gt;
    qa.prototype.hsv = function() {
      return kt(this._rgb);
    }, wt.hsv = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(qa, [null].concat(r, ["hsv"])))();
    }, Oa.format.hsv = dt, Oa.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = mt(r, "hsv"), yt(r) === "array" && r.length === 3)
          return "hsv";
      }
    });
    var dr = {
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
    }, ar = dr, $t = g.unpack, Da = Math.pow, _t = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = $t(r, "rgb"), n = e[0], f = e[1], v = e[2], t = Mt(n, f, v), u = t[0], l = t[1], o = t[2], i = 116 * l - 16;
      return [i < 0 ? 0 : i, 500 * (u - l), 200 * (l - o)];
    }, Rr = function(r) {
      return (r /= 255) <= 0.04045 ? r / 12.92 : Da((r + 0.055) / 1.055, 2.4);
    }, zr = function(r) {
      return r > ar.t3 ? Da(r, 1 / 3) : r / ar.t2 + ar.t0;
    }, Mt = function(r, a, e) {
      r = Rr(r), a = Rr(a), e = Rr(e);
      var n = zr((0.4124564 * r + 0.3575761 * a + 0.1804375 * e) / ar.Xn), f = zr((0.2126729 * r + 0.7151522 * a + 0.072175 * e) / ar.Yn), v = zr((0.0193339 * r + 0.119192 * a + 0.9503041 * e) / ar.Zn);
      return [n, f, v];
    }, Sa = _t, er = dr, xt = g.unpack, Ct = Math.pow, Nt = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = xt(r, "lab");
      var e = r[0], n = r[1], f = r[2], v, t, u, l, o, i;
      return t = (e + 16) / 116, v = isNaN(n) ? t : t + n / 500, u = isNaN(f) ? t : t - f / 200, t = er.Yn * Tr(t), v = er.Xn * Tr(v), u = er.Zn * Tr(u), l = Pr(3.2404542 * v - 1.5371385 * t - 0.4985314 * u), o = Pr(-0.969266 * v + 1.8760108 * t + 0.041556 * u), i = Pr(0.0556434 * v - 0.2040259 * t + 1.0572252 * u), [l, o, i, r.length > 3 ? r[3] : 1];
    }, Pr = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * Ct(r, 1 / 2.4) - 0.055);
    }, Tr = function(r) {
      return r > er.t1 ? r * r * r : er.t2 * (r - er.t0);
    }, Ba = Nt, Ft = g.unpack, Et = g.type, At = L, Ya = m, Ha = z, Lt = Sa;
    Ya.prototype.lab = function() {
      return Lt(this._rgb);
    }, At.lab = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Ya, [null].concat(r, ["lab"])))();
    }, Ha.format.lab = Ba, Ha.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = Ft(r, "lab"), Et(r) === "array" && r.length === 3)
          return "lab";
      }
    });
    var Rt = g.unpack, zt = g.RAD2DEG, Pt = Math.sqrt, Tt = Math.atan2, Gt = Math.round, It = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Rt(r, "lab"), n = e[0], f = e[1], v = e[2], t = Pt(f * f + v * v), u = (Tt(v, f) * zt + 360) % 360;
      return Gt(t * 1e4) === 0 && (u = Number.NaN), [n, t, u];
    }, Xa = It, qt = g.unpack, Ot = Sa, Dt = Xa, St = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = qt(r, "rgb"), n = e[0], f = e[1], v = e[2], t = Ot(n, f, v), u = t[0], l = t[1], o = t[2];
      return Dt(u, l, o);
    }, Bt = St, Yt = g.unpack, Ht = g.DEG2RAD, Xt = Math.sin, Wt = Math.cos, Ut = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Yt(r, "lch"), n = e[0], f = e[1], v = e[2];
      return isNaN(v) && (v = 0), v = v * Ht, [n, Wt(v) * f, Xt(v) * f];
    }, Wa = Ut, Vt = g.unpack, Zt = Wa, Jt = Ba, Qt = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = Vt(r, "lch");
      var e = r[0], n = r[1], f = r[2], v = Zt(e, n, f), t = v[0], u = v[1], l = v[2], o = Jt(t, u, l), i = o[0], h = o[1], c = o[2];
      return [i, h, c, r.length > 3 ? r[3] : 1];
    }, Ua = Qt, jt = g.unpack, Kt = Ua, rf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = jt(r, "hcl").reverse();
      return Kt.apply(void 0, e);
    }, af = rf, ef = g.unpack, nf = g.type, Va = L, mr = m, Gr = z, Za = Bt;
    mr.prototype.lch = function() {
      return Za(this._rgb);
    }, mr.prototype.hcl = function() {
      return Za(this._rgb).reverse();
    }, Va.lch = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(mr, [null].concat(r, ["lch"])))();
    }, Va.hcl = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(mr, [null].concat(r, ["hcl"])))();
    }, Gr.format.lch = Ua, Gr.format.hcl = af, ["lch", "hcl"].forEach(function(r) {
      return Gr.autodetect.push({
        p: 2,
        test: function() {
          for (var a = [], e = arguments.length; e--; )
            a[e] = arguments[e];
          if (a = ef(a, r), nf(a) === "array" && a.length === 3)
            return r;
        }
      });
    });
    var tf = {
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
    }, Ja = tf, ff = m, Qa = z, vf = g.type, ir = Ja, uf = Aa, lf = Ea;
    ff.prototype.name = function() {
      for (var r = lf(this._rgb, "rgb"), a = 0, e = Object.keys(ir); a < e.length; a += 1) {
        var n = e[a];
        if (ir[n] === r)
          return n.toLowerCase();
      }
      return r;
    }, Qa.format.named = function(r) {
      if (r = r.toLowerCase(), ir[r])
        return uf(ir[r]);
      throw new Error("unknown color name: " + r);
    }, Qa.autodetect.push({
      p: 5,
      test: function(r) {
        for (var a = [], e = arguments.length - 1; e-- > 0; )
          a[e] = arguments[e + 1];
        if (!a.length && vf(r) === "string" && ir[r.toLowerCase()])
          return "named";
      }
    });
    var of = g.unpack, cf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = of(r, "rgb"), n = e[0], f = e[1], v = e[2];
      return (n << 16) + (f << 8) + v;
    }, sf = cf, gf = g.type, hf = function(r) {
      if (gf(r) == "number" && r >= 0 && r <= 16777215) {
        var a = r >> 16, e = r >> 8 & 255, n = r & 255;
        return [a, e, n, 1];
      }
      throw new Error("unknown num color: " + r);
    }, bf = hf, pf = L, ja = m, Ka = z, df = g.type, mf = sf;
    ja.prototype.num = function() {
      return mf(this._rgb);
    }, pf.num = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(ja, [null].concat(r, ["num"])))();
    }, Ka.format.num = bf, Ka.autodetect.push({
      p: 5,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r.length === 1 && df(r[0]) === "number" && r[0] >= 0 && r[0] <= 16777215)
          return "num";
      }
    });
    var yf = L, Ir = m, re = z, ae = g.unpack, ee = g.type, ne = Math.round;
    Ir.prototype.rgb = function(r) {
      return r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(ne);
    }, Ir.prototype.rgba = function(r) {
      return r === void 0 && (r = !0), this._rgb.slice(0, 4).map(function(a, e) {
        return e < 3 ? r === !1 ? a : ne(a) : a;
      });
    }, yf.rgb = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(Ir, [null].concat(r, ["rgb"])))();
    }, re.format.rgb = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = ae(r, "rgba");
      return e[3] === void 0 && (e[3] = 1), e;
    }, re.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = ae(r, "rgba"), ee(r) === "array" && (r.length === 3 || r.length === 4 && ee(r[3]) == "number" && r[3] >= 0 && r[3] <= 1))
          return "rgb";
      }
    });
    var yr = Math.log, wf = function(r) {
      var a = r / 100, e, n, f;
      return a < 66 ? (e = 255, n = a < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (n = a - 2) + 104.49216199393888 * yr(n), f = a < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (f = a - 10) + 115.67994401066147 * yr(f)) : (e = 351.97690566805693 + 0.114206453784165 * (e = a - 55) - 40.25366309332127 * yr(e), n = 325.4494125711974 + 0.07943456536662342 * (n = a - 50) - 28.0852963507957 * yr(n), f = 255), [e, n, f, 1];
    }, te = wf, kf = te, $f = g.unpack, _f = Math.round, Mf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      for (var e = $f(r, "rgb"), n = e[0], f = e[2], v = 1e3, t = 4e4, u = 0.4, l; t - v > u; ) {
        l = (t + v) * 0.5;
        var o = kf(l);
        o[2] / o[0] >= f / n ? t = l : v = l;
      }
      return _f(l);
    }, xf = Mf, qr = L, wr = m, Or = z, Cf = xf;
    wr.prototype.temp = wr.prototype.kelvin = wr.prototype.temperature = function() {
      return Cf(this._rgb);
    }, qr.temp = qr.kelvin = qr.temperature = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(wr, [null].concat(r, ["temp"])))();
    }, Or.format.temp = Or.format.kelvin = Or.format.temperature = te;
    var Nf = g.unpack, Dr = Math.cbrt, Ff = Math.pow, Ef = Math.sign, Af = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = Nf(r, "rgb"), n = e[0], f = e[1], v = e[2], t = [Sr(n / 255), Sr(f / 255), Sr(v / 255)], u = t[0], l = t[1], o = t[2], i = Dr(0.4122214708 * u + 0.5363325363 * l + 0.0514459929 * o), h = Dr(0.2119034982 * u + 0.6806995451 * l + 0.1073969566 * o), c = Dr(0.0883024619 * u + 0.2817188376 * l + 0.6299787005 * o);
      return [
        0.2104542553 * i + 0.793617785 * h - 0.0040720468 * c,
        1.9779984951 * i - 2.428592205 * h + 0.4505937099 * c,
        0.0259040371 * i + 0.7827717662 * h - 0.808675766 * c
      ];
    }, fe = Af;
    function Sr(r) {
      var a = Math.abs(r);
      return a < 0.04045 ? r / 12.92 : (Ef(r) || 1) * Ff((a + 0.055) / 1.055, 2.4);
    }
    var Lf = g.unpack, kr = Math.pow, Rf = Math.sign, zf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = Lf(r, "lab");
      var e = r[0], n = r[1], f = r[2], v = kr(e + 0.3963377774 * n + 0.2158037573 * f, 3), t = kr(e - 0.1055613458 * n - 0.0638541728 * f, 3), u = kr(e - 0.0894841775 * n - 1.291485548 * f, 3);
      return [
        255 * Br(4.0767416621 * v - 3.3077115913 * t + 0.2309699292 * u),
        255 * Br(-1.2684380046 * v + 2.6097574011 * t - 0.3413193965 * u),
        255 * Br(-0.0041960863 * v - 0.7034186147 * t + 1.707614701 * u),
        r.length > 3 ? r[3] : 1
      ];
    }, ve = zf;
    function Br(r) {
      var a = Math.abs(r);
      return a > 31308e-7 ? (Rf(r) || 1) * (1.055 * kr(a, 1 / 2.4) - 0.055) : r * 12.92;
    }
    var Pf = g.unpack, Tf = g.type, Gf = L, ue = m, le = z, If = fe;
    ue.prototype.oklab = function() {
      return If(this._rgb);
    }, Gf.oklab = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(ue, [null].concat(r, ["oklab"])))();
    }, le.format.oklab = ve, le.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = Pf(r, "oklab"), Tf(r) === "array" && r.length === 3)
          return "oklab";
      }
    });
    var qf = g.unpack, Of = fe, Df = Xa, Sf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var e = qf(r, "rgb"), n = e[0], f = e[1], v = e[2], t = Of(n, f, v), u = t[0], l = t[1], o = t[2];
      return Df(u, l, o);
    }, Bf = Sf, Yf = g.unpack, Hf = Wa, Xf = ve, Wf = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = Yf(r, "lch");
      var e = r[0], n = r[1], f = r[2], v = Hf(e, n, f), t = v[0], u = v[1], l = v[2], o = Xf(t, u, l), i = o[0], h = o[1], c = o[2];
      return [i, h, c, r.length > 3 ? r[3] : 1];
    }, Uf = Wf, Vf = g.unpack, Zf = g.type, Jf = L, oe = m, ie = z, Qf = Bf;
    oe.prototype.oklch = function() {
      return Qf(this._rgb);
    }, Jf.oklch = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      return new (Function.prototype.bind.apply(oe, [null].concat(r, ["oklch"])))();
    }, ie.format.oklch = Uf, ie.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], a = arguments.length; a--; )
          r[a] = arguments[a];
        if (r = Vf(r, "oklch"), Zf(r) === "array" && r.length === 3)
          return "oklch";
      }
    });
    var ce = m, jf = g.type;
    ce.prototype.alpha = function(r, a) {
      return a === void 0 && (a = !1), r !== void 0 && jf(r) === "number" ? a ? (this._rgb[3] = r, this) : new ce([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3];
    };
    var Kf = m;
    Kf.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var J = m, r0 = dr;
    J.prototype.darken = function(r) {
      r === void 0 && (r = 1);
      var a = this, e = a.lab();
      return e[0] -= r0.Kn * r, new J(e, "lab").alpha(a.alpha(), !0);
    }, J.prototype.brighten = function(r) {
      return r === void 0 && (r = 1), this.darken(-r);
    }, J.prototype.darker = J.prototype.darken, J.prototype.brighter = J.prototype.brighten;
    var a0 = m;
    a0.prototype.get = function(r) {
      var a = r.split("."), e = a[0], n = a[1], f = this[e]();
      if (n) {
        var v = e.indexOf(n) - (e.substr(0, 2) === "ok" ? 2 : 0);
        if (v > -1)
          return f[v];
        throw new Error("unknown channel " + n + " in mode " + e);
      } else
        return f;
    };
    var nr = m, e0 = g.type, n0 = Math.pow, t0 = 1e-7, f0 = 20;
    nr.prototype.luminance = function(r) {
      if (r !== void 0 && e0(r) === "number") {
        if (r === 0)
          return new nr([0, 0, 0, this._rgb[3]], "rgb");
        if (r === 1)
          return new nr([255, 255, 255, this._rgb[3]], "rgb");
        var a = this.luminance(), e = "rgb", n = f0, f = function(t, u) {
          var l = t.interpolate(u, 0.5, e), o = l.luminance();
          return Math.abs(r - o) < t0 || !n-- ? l : o > r ? f(t, l) : f(l, u);
        }, v = (a > r ? f(new nr([0, 0, 0]), this) : f(this, new nr([255, 255, 255]))).rgb();
        return new nr(v.concat([this._rgb[3]]));
      }
      return v0.apply(void 0, this._rgb.slice(0, 3));
    };
    var v0 = function(r, a, e) {
      return r = Yr(r), a = Yr(a), e = Yr(e), 0.2126 * r + 0.7152 * a + 0.0722 * e;
    }, Yr = function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : n0((r + 0.055) / 1.055, 2.4);
    }, O = {}, se = m, ge = g.type, $r = O, he = function(r, a, e) {
      e === void 0 && (e = 0.5);
      for (var n = [], f = arguments.length - 3; f-- > 0; )
        n[f] = arguments[f + 3];
      var v = n[0] || "lrgb";
      if (!$r[v] && !n.length && (v = Object.keys($r)[0]), !$r[v])
        throw new Error("interpolation mode " + v + " is not defined");
      return ge(r) !== "object" && (r = new se(r)), ge(a) !== "object" && (a = new se(a)), $r[v](r, a, e).alpha(r.alpha() + e * (a.alpha() - r.alpha()));
    }, be = m, u0 = he;
    be.prototype.mix = be.prototype.interpolate = function(r, a) {
      a === void 0 && (a = 0.5);
      for (var e = [], n = arguments.length - 2; n-- > 0; )
        e[n] = arguments[n + 2];
      return u0.apply(void 0, [this, r, a].concat(e));
    };
    var pe = m;
    pe.prototype.premultiply = function(r) {
      r === void 0 && (r = !1);
      var a = this._rgb, e = a[3];
      return r ? (this._rgb = [a[0] * e, a[1] * e, a[2] * e, e], this) : new pe([a[0] * e, a[1] * e, a[2] * e, e], "rgb");
    };
    var Hr = m, l0 = dr;
    Hr.prototype.saturate = function(r) {
      r === void 0 && (r = 1);
      var a = this, e = a.lch();
      return e[1] += l0.Kn * r, e[1] < 0 && (e[1] = 0), new Hr(e, "lch").alpha(a.alpha(), !0);
    }, Hr.prototype.desaturate = function(r) {
      return r === void 0 && (r = 1), this.saturate(-r);
    };
    var de = m, me = g.type;
    de.prototype.set = function(r, a, e) {
      e === void 0 && (e = !1);
      var n = r.split("."), f = n[0], v = n[1], t = this[f]();
      if (v) {
        var u = f.indexOf(v) - (f.substr(0, 2) === "ok" ? 2 : 0);
        if (u > -1) {
          if (me(a) == "string")
            switch (a.charAt(0)) {
              case "+":
                t[u] += +a;
                break;
              case "-":
                t[u] += +a;
                break;
              case "*":
                t[u] *= +a.substr(1);
                break;
              case "/":
                t[u] /= +a.substr(1);
                break;
              default:
                t[u] = +a;
            }
          else if (me(a) === "number")
            t[u] = a;
          else
            throw new Error("unsupported value for Color.set");
          var l = new de(t, f);
          return e ? (this._rgb = l._rgb, this) : l;
        }
        throw new Error("unknown channel " + v + " in mode " + f);
      } else
        return t;
    };
    var o0 = m, i0 = function(r, a, e) {
      var n = r._rgb, f = a._rgb;
      return new o0(
        n[0] + e * (f[0] - n[0]),
        n[1] + e * (f[1] - n[1]),
        n[2] + e * (f[2] - n[2]),
        "rgb"
      );
    };
    O.rgb = i0;
    var c0 = m, Xr = Math.sqrt, tr = Math.pow, s0 = function(r, a, e) {
      var n = r._rgb, f = n[0], v = n[1], t = n[2], u = a._rgb, l = u[0], o = u[1], i = u[2];
      return new c0(
        Xr(tr(f, 2) * (1 - e) + tr(l, 2) * e),
        Xr(tr(v, 2) * (1 - e) + tr(o, 2) * e),
        Xr(tr(t, 2) * (1 - e) + tr(i, 2) * e),
        "rgb"
      );
    };
    O.lrgb = s0;
    var g0 = m, h0 = function(r, a, e) {
      var n = r.lab(), f = a.lab();
      return new g0(
        n[0] + e * (f[0] - n[0]),
        n[1] + e * (f[1] - n[1]),
        n[2] + e * (f[2] - n[2]),
        "lab"
      );
    };
    O.lab = h0;
    var ye = m, fr = function(r, a, e, n) {
      var f, v, t, u;
      n === "hsl" ? (t = r.hsl(), u = a.hsl()) : n === "hsv" ? (t = r.hsv(), u = a.hsv()) : n === "hcg" ? (t = r.hcg(), u = a.hcg()) : n === "hsi" ? (t = r.hsi(), u = a.hsi()) : n === "lch" || n === "hcl" ? (n = "hcl", t = r.hcl(), u = a.hcl()) : n === "oklch" && (t = r.oklch().reverse(), u = a.oklch().reverse());
      var l, o, i, h, c, p;
      (n.substr(0, 1) === "h" || n === "oklch") && (f = t, l = f[0], i = f[1], c = f[2], v = u, o = v[0], h = v[1], p = v[2]);
      var b, y, $, M;
      return !isNaN(l) && !isNaN(o) ? (o > l && o - l > 180 ? M = o - (l + 360) : o < l && l - o > 180 ? M = o + 360 - l : M = o - l, y = l + e * M) : isNaN(l) ? isNaN(o) ? y = Number.NaN : (y = o, (c == 1 || c == 0) && n != "hsv" && (b = h)) : (y = l, (p == 1 || p == 0) && n != "hsv" && (b = i)), b === void 0 && (b = i + e * (h - i)), $ = c + e * (p - c), n === "oklch" ? new ye([$, b, y], n) : new ye([y, b, $], n);
    }, b0 = fr, we = function(r, a, e) {
      return b0(r, a, e, "lch");
    };
    O.lch = we, O.hcl = we;
    var p0 = m, d0 = function(r, a, e) {
      var n = r.num(), f = a.num();
      return new p0(n + e * (f - n), "num");
    };
    O.num = d0;
    var m0 = fr, y0 = function(r, a, e) {
      return m0(r, a, e, "hcg");
    };
    O.hcg = y0;
    var w0 = fr, k0 = function(r, a, e) {
      return w0(r, a, e, "hsi");
    };
    O.hsi = k0;
    var $0 = fr, _0 = function(r, a, e) {
      return $0(r, a, e, "hsl");
    };
    O.hsl = _0;
    var M0 = fr, x0 = function(r, a, e) {
      return M0(r, a, e, "hsv");
    };
    O.hsv = x0;
    var C0 = m, N0 = function(r, a, e) {
      var n = r.oklab(), f = a.oklab();
      return new C0(
        n[0] + e * (f[0] - n[0]),
        n[1] + e * (f[1] - n[1]),
        n[2] + e * (f[2] - n[2]),
        "oklab"
      );
    };
    O.oklab = N0;
    var F0 = fr, E0 = function(r, a, e) {
      return F0(r, a, e, "oklch");
    };
    O.oklch = E0;
    var Wr = m, A0 = g.clip_rgb, Ur = Math.pow, Vr = Math.sqrt, Zr = Math.PI, ke = Math.cos, $e = Math.sin, L0 = Math.atan2, R0 = function(r, a, e) {
      a === void 0 && (a = "lrgb"), e === void 0 && (e = null);
      var n = r.length;
      e || (e = Array.from(new Array(n)).map(function() {
        return 1;
      }));
      var f = n / e.reduce(function(y, $) {
        return y + $;
      });
      if (e.forEach(function(y, $) {
        e[$] *= f;
      }), r = r.map(function(y) {
        return new Wr(y);
      }), a === "lrgb")
        return z0(r, e);
      for (var v = r.shift(), t = v.get(a), u = [], l = 0, o = 0, i = 0; i < t.length; i++)
        if (t[i] = (t[i] || 0) * e[0], u.push(isNaN(t[i]) ? 0 : e[0]), a.charAt(i) === "h" && !isNaN(t[i])) {
          var h = t[i] / 180 * Zr;
          l += ke(h) * e[0], o += $e(h) * e[0];
        }
      var c = v.alpha() * e[0];
      r.forEach(function(y, $) {
        var M = y.get(a);
        c += y.alpha() * e[$ + 1];
        for (var C = 0; C < t.length; C++)
          if (!isNaN(M[C]))
            if (u[C] += e[$ + 1], a.charAt(C) === "h") {
              var G = M[C] / 180 * Zr;
              l += ke(G) * e[$ + 1], o += $e(G) * e[$ + 1];
            } else
              t[C] += M[C] * e[$ + 1];
      });
      for (var p = 0; p < t.length; p++)
        if (a.charAt(p) === "h") {
          for (var b = L0(o / u[p], l / u[p]) / Zr * 180; b < 0; )
            b += 360;
          for (; b >= 360; )
            b -= 360;
          t[p] = b;
        } else
          t[p] = t[p] / u[p];
      return c /= n, new Wr(t, a).alpha(c > 0.99999 ? 1 : c, !0);
    }, z0 = function(r, a) {
      for (var e = r.length, n = [0, 0, 0, 0], f = 0; f < r.length; f++) {
        var v = r[f], t = a[f] / e, u = v._rgb;
        n[0] += Ur(u[0], 2) * t, n[1] += Ur(u[1], 2) * t, n[2] += Ur(u[2], 2) * t, n[3] += u[3] * t;
      }
      return n[0] = Vr(n[0]), n[1] = Vr(n[1]), n[2] = Vr(n[2]), n[3] > 0.9999999 && (n[3] = 1), new Wr(A0(n));
    }, D = L, vr = g.type, P0 = Math.pow, Jr = function(r) {
      var a = "rgb", e = D("#ccc"), n = 0, f = [0, 1], v = [], t = [0, 0], u = !1, l = [], o = !1, i = 0, h = 1, c = !1, p = {}, b = !0, y = 1, $ = function(s) {
        if (s = s || ["#fff", "#000"], s && vr(s) === "string" && D.brewer && D.brewer[s.toLowerCase()] && (s = D.brewer[s.toLowerCase()]), vr(s) === "array") {
          s.length === 1 && (s = [s[0], s[0]]), s = s.slice(0);
          for (var d = 0; d < s.length; d++)
            s[d] = D(s[d]);
          v.length = 0;
          for (var k = 0; k < s.length; k++)
            v.push(k / (s.length - 1));
        }
        return q(), l = s;
      }, M = function(s) {
        if (u != null) {
          for (var d = u.length - 1, k = 0; k < d && s >= u[k]; )
            k++;
          return k - 1;
        }
        return 0;
      }, C = function(s) {
        return s;
      }, G = function(s) {
        return s;
      }, T = function(s, d) {
        var k, w;
        if (d == null && (d = !1), isNaN(s) || s === null)
          return e;
        if (d)
          w = s;
        else if (u && u.length > 2) {
          var I = M(s);
          w = I / (u.length - 2);
        } else
          h !== i ? w = (s - i) / (h - i) : w = 1;
        w = G(w), d || (w = C(w)), y !== 1 && (w = P0(w, y)), w = t[0] + w * (1 - t[0] - t[1]), w = Math.min(1, Math.max(0, w));
        var A = Math.floor(w * 1e4);
        if (b && p[A])
          k = p[A];
        else {
          if (vr(l) === "array")
            for (var x = 0; x < v.length; x++) {
              var N = v[x];
              if (w <= N) {
                k = l[x];
                break;
              }
              if (w >= N && x === v.length - 1) {
                k = l[x];
                break;
              }
              if (w > N && w < v[x + 1]) {
                w = (w - N) / (v[x + 1] - N), k = D.interpolate(l[x], l[x + 1], w, a);
                break;
              }
            }
          else
            vr(l) === "function" && (k = l(w));
          b && (p[A] = k);
        }
        return k;
      }, q = function() {
        return p = {};
      };
      $(r);
      var _ = function(s) {
        var d = D(T(s));
        return o && d[o] ? d[o]() : d;
      };
      return _.classes = function(s) {
        if (s != null) {
          if (vr(s) === "array")
            u = s, f = [s[0], s[s.length - 1]];
          else {
            var d = D.analyze(f);
            s === 0 ? u = [d.min, d.max] : u = D.limits(d, "e", s);
          }
          return _;
        }
        return u;
      }, _.domain = function(s) {
        if (!arguments.length)
          return f;
        i = s[0], h = s[s.length - 1], v = [];
        var d = l.length;
        if (s.length === d && i !== h)
          for (var k = 0, w = Array.from(s); k < w.length; k += 1) {
            var I = w[k];
            v.push((I - i) / (h - i));
          }
        else {
          for (var A = 0; A < d; A++)
            v.push(A / (d - 1));
          if (s.length > 2) {
            var x = s.map(function(F, E) {
              return E / (s.length - 1);
            }), N = s.map(function(F) {
              return (F - i) / (h - i);
            });
            N.every(function(F, E) {
              return x[E] === F;
            }) || (G = function(F) {
              if (F <= 0 || F >= 1)
                return F;
              for (var E = 0; F >= N[E + 1]; )
                E++;
              var B = (F - N[E]) / (N[E + 1] - N[E]), U = x[E] + B * (x[E + 1] - x[E]);
              return U;
            });
          }
        }
        return f = [i, h], _;
      }, _.mode = function(s) {
        return arguments.length ? (a = s, q(), _) : a;
      }, _.range = function(s, d) {
        return $(s), _;
      }, _.out = function(s) {
        return o = s, _;
      }, _.spread = function(s) {
        return arguments.length ? (n = s, _) : n;
      }, _.correctLightness = function(s) {
        return s == null && (s = !0), c = s, q(), c ? C = function(d) {
          for (var k = T(0, !0).lab()[0], w = T(1, !0).lab()[0], I = k > w, A = T(d, !0).lab()[0], x = k + (w - k) * d, N = A - x, F = 0, E = 1, B = 20; Math.abs(N) > 0.01 && B-- > 0; )
            (function() {
              return I && (N *= -1), N < 0 ? (F = d, d += (E - d) * 0.5) : (E = d, d += (F - d) * 0.5), A = T(d, !0).lab()[0], N = A - x;
            })();
          return d;
        } : C = function(d) {
          return d;
        }, _;
      }, _.padding = function(s) {
        return s != null ? (vr(s) === "number" && (s = [s, s]), t = s, _) : t;
      }, _.colors = function(s, d) {
        arguments.length < 2 && (d = "hex");
        var k = [];
        if (arguments.length === 0)
          k = l.slice(0);
        else if (s === 1)
          k = [_(0.5)];
        else if (s > 1) {
          var w = f[0], I = f[1] - w;
          k = T0(0, s, !1).map(function(E) {
            return _(w + E / (s - 1) * I);
          });
        } else {
          r = [];
          var A = [];
          if (u && u.length > 2)
            for (var x = 1, N = u.length, F = 1 <= N; F ? x < N : x > N; F ? x++ : x--)
              A.push((u[x - 1] + u[x]) * 0.5);
          else
            A = f;
          k = A.map(function(E) {
            return _(E);
          });
        }
        return D[d] && (k = k.map(function(E) {
          return E[d]();
        })), k;
      }, _.cache = function(s) {
        return s != null ? (b = s, _) : b;
      }, _.gamma = function(s) {
        return s != null ? (y = s, _) : y;
      }, _.nodata = function(s) {
        return s != null ? (e = D(s), _) : e;
      }, _;
    };
    function T0(r, a, e) {
      for (var n = [], f = r < a, v = e ? f ? a + 1 : a - 1 : a, t = r; f ? t < v : t > v; f ? t++ : t--)
        n.push(t);
      return n;
    }
    var cr = m, G0 = Jr, I0 = function(r) {
      for (var a = [1, 1], e = 1; e < r; e++) {
        for (var n = [1], f = 1; f <= a.length; f++)
          n[f] = (a[f] || 0) + a[f - 1];
        a = n;
      }
      return a;
    }, q0 = function(r) {
      var a, e, n, f, v, t, u;
      if (r = r.map(function(c) {
        return new cr(c);
      }), r.length === 2)
        a = r.map(function(c) {
          return c.lab();
        }), v = a[0], t = a[1], f = function(c) {
          var p = [0, 1, 2].map(function(b) {
            return v[b] + c * (t[b] - v[b]);
          });
          return new cr(p, "lab");
        };
      else if (r.length === 3)
        e = r.map(function(c) {
          return c.lab();
        }), v = e[0], t = e[1], u = e[2], f = function(c) {
          var p = [0, 1, 2].map(function(b) {
            return (1 - c) * (1 - c) * v[b] + 2 * (1 - c) * c * t[b] + c * c * u[b];
          });
          return new cr(p, "lab");
        };
      else if (r.length === 4) {
        var l;
        n = r.map(function(c) {
          return c.lab();
        }), v = n[0], t = n[1], u = n[2], l = n[3], f = function(c) {
          var p = [0, 1, 2].map(function(b) {
            return (1 - c) * (1 - c) * (1 - c) * v[b] + 3 * (1 - c) * (1 - c) * c * t[b] + 3 * (1 - c) * c * c * u[b] + c * c * c * l[b];
          });
          return new cr(p, "lab");
        };
      } else if (r.length >= 5) {
        var o, i, h;
        o = r.map(function(c) {
          return c.lab();
        }), h = r.length - 1, i = I0(h), f = function(c) {
          var p = 1 - c, b = [0, 1, 2].map(function(y) {
            return o.reduce(function($, M, C) {
              return $ + i[C] * Math.pow(p, h - C) * Math.pow(c, C) * M[y];
            }, 0);
          });
          return new cr(b, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return f;
    }, O0 = function(r) {
      var a = q0(r);
      return a.scale = function() {
        return G0(a);
      }, a;
    }, Qr = L, S = function(r, a, e) {
      if (!S[e])
        throw new Error("unknown blend mode " + e);
      return S[e](r, a);
    }, X = function(r) {
      return function(a, e) {
        var n = Qr(e).rgb(), f = Qr(a).rgb();
        return Qr.rgb(r(n, f));
      };
    }, W = function(r) {
      return function(a, e) {
        var n = [];
        return n[0] = r(a[0], e[0]), n[1] = r(a[1], e[1]), n[2] = r(a[2], e[2]), n;
      };
    }, D0 = function(r) {
      return r;
    }, S0 = function(r, a) {
      return r * a / 255;
    }, B0 = function(r, a) {
      return r > a ? a : r;
    }, Y0 = function(r, a) {
      return r > a ? r : a;
    }, H0 = function(r, a) {
      return 255 * (1 - (1 - r / 255) * (1 - a / 255));
    }, X0 = function(r, a) {
      return a < 128 ? 2 * r * a / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - a / 255));
    }, W0 = function(r, a) {
      return 255 * (1 - (1 - a / 255) / (r / 255));
    }, U0 = function(r, a) {
      return r === 255 ? 255 : (r = 255 * (a / 255) / (1 - r / 255), r > 255 ? 255 : r);
    };
    S.normal = X(W(D0)), S.multiply = X(W(S0)), S.screen = X(W(H0)), S.overlay = X(W(X0)), S.darken = X(W(B0)), S.lighten = X(W(Y0)), S.dodge = X(W(U0)), S.burn = X(W(W0));
    for (var V0 = S, jr = g.type, Z0 = g.clip_rgb, J0 = g.TWOPI, Q0 = Math.pow, j0 = Math.sin, K0 = Math.cos, _e = L, rv = function(r, a, e, n, f) {
      r === void 0 && (r = 300), a === void 0 && (a = -1.5), e === void 0 && (e = 1), n === void 0 && (n = 1), f === void 0 && (f = [0, 1]);
      var v = 0, t;
      jr(f) === "array" ? t = f[1] - f[0] : (t = 0, f = [f, f]);
      var u = function(l) {
        var o = J0 * ((r + 120) / 360 + a * l), i = Q0(f[0] + t * l, n), h = v !== 0 ? e[0] + l * v : e, c = h * i * (1 - i) / 2, p = K0(o), b = j0(o), y = i + c * (-0.14861 * p + 1.78277 * b), $ = i + c * (-0.29227 * p - 0.90649 * b), M = i + c * (1.97294 * p);
        return _e(Z0([y * 255, $ * 255, M * 255, 1]));
      };
      return u.start = function(l) {
        return l == null ? r : (r = l, u);
      }, u.rotations = function(l) {
        return l == null ? a : (a = l, u);
      }, u.gamma = function(l) {
        return l == null ? n : (n = l, u);
      }, u.hue = function(l) {
        return l == null ? e : (e = l, jr(e) === "array" ? (v = e[1] - e[0], v === 0 && (e = e[1])) : v = 0, u);
      }, u.lightness = function(l) {
        return l == null ? f : (jr(l) === "array" ? (f = l, t = l[1] - l[0]) : (f = [l, l], t = 0), u);
      }, u.scale = function() {
        return _e.scale(u);
      }, u.hue(e), u;
    }, av = m, ev = "0123456789abcdef", nv = Math.floor, tv = Math.random, fv = function() {
      for (var r = "#", a = 0; a < 6; a++)
        r += ev.charAt(nv(tv() * 16));
      return new av(r, "hex");
    }, Kr = hr, Me = Math.log, vv = Math.pow, uv = Math.floor, lv = Math.abs, xe = function(r, a) {
      a === void 0 && (a = null);
      var e = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return Kr(r) === "object" && (r = Object.values(r)), r.forEach(function(n) {
        a && Kr(n) === "object" && (n = n[a]), n != null && !isNaN(n) && (e.values.push(n), e.sum += n, n < e.min && (e.min = n), n > e.max && (e.max = n), e.count += 1);
      }), e.domain = [e.min, e.max], e.limits = function(n, f) {
        return Ce(e, n, f);
      }, e;
    }, Ce = function(r, a, e) {
      a === void 0 && (a = "equal"), e === void 0 && (e = 7), Kr(r) == "array" && (r = xe(r));
      var n = r.min, f = r.max, v = r.values.sort(function(aa, ea) {
        return aa - ea;
      });
      if (e === 1)
        return [n, f];
      var t = [];
      if (a.substr(0, 1) === "c" && (t.push(n), t.push(f)), a.substr(0, 1) === "e") {
        t.push(n);
        for (var u = 1; u < e; u++)
          t.push(n + u / e * (f - n));
        t.push(f);
      } else if (a.substr(0, 1) === "l") {
        if (n <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var l = Math.LOG10E * Me(n), o = Math.LOG10E * Me(f);
        t.push(n);
        for (var i = 1; i < e; i++)
          t.push(vv(10, l + i / e * (o - l)));
        t.push(f);
      } else if (a.substr(0, 1) === "q") {
        t.push(n);
        for (var h = 1; h < e; h++) {
          var c = (v.length - 1) * h / e, p = uv(c);
          if (p === c)
            t.push(v[p]);
          else {
            var b = c - p;
            t.push(v[p] * (1 - b) + v[p + 1] * b);
          }
        }
        t.push(f);
      } else if (a.substr(0, 1) === "k") {
        var y, $ = v.length, M = new Array($), C = new Array(e), G = !0, T = 0, q = null;
        q = [], q.push(n);
        for (var _ = 1; _ < e; _++)
          q.push(n + _ / e * (f - n));
        for (q.push(f); G; ) {
          for (var s = 0; s < e; s++)
            C[s] = 0;
          for (var d = 0; d < $; d++)
            for (var k = v[d], w = Number.MAX_VALUE, I = void 0, A = 0; A < e; A++) {
              var x = lv(q[A] - k);
              x < w && (w = x, I = A), C[I]++, M[d] = I;
            }
          for (var N = new Array(e), F = 0; F < e; F++)
            N[F] = null;
          for (var E = 0; E < $; E++)
            y = M[E], N[y] === null ? N[y] = v[E] : N[y] += v[E];
          for (var B = 0; B < e; B++)
            N[B] *= 1 / C[B];
          G = !1;
          for (var U = 0; U < e; U++)
            if (N[U] !== q[U]) {
              G = !0;
              break;
            }
          q = N, T++, T > 200 && (G = !1);
        }
        for (var V = {}, ur = 0; ur < e; ur++)
          V[ur] = [];
        for (var lr = 0; lr < $; lr++)
          y = M[lr], V[y].push(v[lr]);
        for (var H = [], Q = 0; Q < e; Q++)
          H.push(V[Q][0]), H.push(V[Q][V[Q].length - 1]);
        H = H.sort(function(aa, ea) {
          return aa - ea;
        }), t.push(H[0]);
        for (var sr = 1; sr < H.length; sr += 2) {
          var j = H[sr];
          !isNaN(j) && t.indexOf(j) === -1 && t.push(j);
        }
      }
      return t;
    }, Ne = { analyze: xe, limits: Ce }, Fe = m, ov = function(r, a) {
      r = new Fe(r), a = new Fe(a);
      var e = r.luminance(), n = a.luminance();
      return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
    }, Ee = m, Y = Math.sqrt, R = Math.pow, iv = Math.min, cv = Math.max, Ae = Math.atan2, Le = Math.abs, _r = Math.cos, Re = Math.sin, sv = Math.exp, ze = Math.PI, gv = function(r, a, e, n, f) {
      e === void 0 && (e = 1), n === void 0 && (n = 1), f === void 0 && (f = 1);
      var v = function(j) {
        return 360 * j / (2 * ze);
      }, t = function(j) {
        return 2 * ze * j / 360;
      };
      r = new Ee(r), a = new Ee(a);
      var u = Array.from(r.lab()), l = u[0], o = u[1], i = u[2], h = Array.from(a.lab()), c = h[0], p = h[1], b = h[2], y = (l + c) / 2, $ = Y(R(o, 2) + R(i, 2)), M = Y(R(p, 2) + R(b, 2)), C = ($ + M) / 2, G = 0.5 * (1 - Y(R(C, 7) / (R(C, 7) + R(25, 7)))), T = o * (1 + G), q = p * (1 + G), _ = Y(R(T, 2) + R(i, 2)), s = Y(R(q, 2) + R(b, 2)), d = (_ + s) / 2, k = v(Ae(i, T)), w = v(Ae(b, q)), I = k >= 0 ? k : k + 360, A = w >= 0 ? w : w + 360, x = Le(I - A) > 180 ? (I + A + 360) / 2 : (I + A) / 2, N = 1 - 0.17 * _r(t(x - 30)) + 0.24 * _r(t(2 * x)) + 0.32 * _r(t(3 * x + 6)) - 0.2 * _r(t(4 * x - 63)), F = A - I;
      F = Le(F) <= 180 ? F : A <= I ? F + 360 : F - 360, F = 2 * Y(_ * s) * Re(t(F) / 2);
      var E = c - l, B = s - _, U = 1 + 0.015 * R(y - 50, 2) / Y(20 + R(y - 50, 2)), V = 1 + 0.045 * d, ur = 1 + 0.015 * d * N, lr = 30 * sv(-R((x - 275) / 25, 2)), H = 2 * Y(R(d, 7) / (R(d, 7) + R(25, 7))), Q = -H * Re(2 * t(lr)), sr = Y(R(E / (e * U), 2) + R(B / (n * V), 2) + R(F / (f * ur), 2) + Q * (B / (n * V)) * (F / (f * ur)));
      return cv(0, iv(100, sr));
    }, Pe = m, hv = function(r, a, e) {
      e === void 0 && (e = "lab"), r = new Pe(r), a = new Pe(a);
      var n = r.get(e), f = a.get(e), v = 0;
      for (var t in n) {
        var u = (n[t] || 0) - (f[t] || 0);
        v += u * u;
      }
      return Math.sqrt(v);
    }, bv = m, pv = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      try {
        return new (Function.prototype.bind.apply(bv, [null].concat(r)))(), !0;
      } catch {
        return !1;
      }
    }, Te = L, Ge = Jr, dv = {
      cool: function() {
        return Ge([Te.hsl(180, 1, 0.9), Te.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return Ge(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Mr = {
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
    }, ra = 0, Ie = Object.keys(Mr); ra < Ie.length; ra += 1) {
      var qe = Ie[ra];
      Mr[qe.toLowerCase()] = Mr[qe];
    }
    var mv = Mr, P = L;
    P.average = R0, P.bezier = O0, P.blend = V0, P.cubehelix = rv, P.mix = P.interpolate = he, P.random = fv, P.scale = Jr, P.analyze = Ne.analyze, P.contrast = ov, P.deltaE = gv, P.distance = hv, P.limits = Ne.limits, P.valid = pv, P.scales = dv, P.colors = Ja, P.brewer = mv;
    var yv = P;
    return yv;
  });
})(Oe);
var $v = Oe.exports;
const xv = /* @__PURE__ */ kv($v);
export {
  xv as c
};
