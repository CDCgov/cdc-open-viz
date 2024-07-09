import { c as Vi, g as Xi } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { r as H } from "./storybook-index-45401197.es.js";
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
(function(c, v) {
  (function(f, s) {
    c.exports = s();
  })(Vi, function() {
    for (var f = function(r, e, a) {
      return e === void 0 && (e = 0), a === void 0 && (a = 1), r < e ? e : r > a ? a : r;
    }, s = f, _ = function(r) {
      r._clipped = !1, r._unclipped = r.slice(0);
      for (var e = 0; e <= 3; e++)
        e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = s(r[e], 0, 255)) : e === 3 && (r[e] = s(r[e], 0, 1));
      return r;
    }, $ = {}, M = 0, S = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; M < S.length; M += 1) {
      var F = S[M];
      $["[object " + F + "]"] = F.toLowerCase();
    }
    var E = function(r) {
      return $[Object.prototype.toString.call(r)] || "object";
    }, Y = E, J = function(r, e) {
      return e === void 0 && (e = null), r.length >= 3 ? Array.prototype.slice.call(r) : Y(r[0]) == "object" && e ? e.split("").filter(function(a) {
        return r[0][a] !== void 0;
      }).map(function(a) {
        return r[0][a];
      }) : r[0];
    }, dr = E, Or = function(r) {
      if (r.length < 2)
        return null;
      var e = r.length - 1;
      return dr(r[e]) == "string" ? r[e].toLowerCase() : null;
    }, or = Math.PI, b = {
      clip_rgb: _,
      limit: f,
      type: E,
      unpack: J,
      last: Or,
      PI: or,
      TWOPI: or * 2,
      PITHIRD: or / 3,
      DEG2RAD: or / 180,
      RAD2DEG: 180 / or
    }, G = {
      format: {},
      autodetect: []
    }, kn = b.last, $n = b.clip_rgb, Ne = b.type, gr = G, Oe = function() {
      for (var e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      var n = this;
      if (Ne(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor)
        return e[0];
      var o = kn(e), u = !1;
      if (!o) {
        u = !0, gr.sorted || (gr.autodetect = gr.autodetect.sort(function(g, m) {
          return m.p - g.p;
        }), gr.sorted = !0);
        for (var t = 0, i = gr.autodetect; t < i.length; t += 1) {
          var l = i[t];
          if (o = l.test.apply(l, e), o)
            break;
        }
      }
      if (gr.format[o]) {
        var d = gr.format[o].apply(null, u ? e : e.slice(0, -1));
        n._rgb = $n(d);
      } else
        throw new Error("unknown format: " + e);
      n._rgb.length === 3 && n._rgb.push(1);
    };
    Oe.prototype.toString = function() {
      return Ne(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var x = Oe, Rr = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Rr.Color, [null].concat(r)))();
    };
    Rr.Color = x, Rr.version = "2.4.2";
    var q = Rr, En = b.unpack, Re = Math.max, xn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = En(r, "rgb"), n = a[0], o = a[1], u = a[2];
      n = n / 255, o = o / 255, u = u / 255;
      var t = 1 - Re(n, Re(o, u)), i = t < 1 ? 1 / (1 - t) : 0, l = (1 - n - t) * i, d = (1 - o - t) * i, g = (1 - u - t) * i;
      return [l, d, g, t];
    }, An = xn, Cn = b.unpack, In = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Cn(r, "cmyk");
      var a = r[0], n = r[1], o = r[2], u = r[3], t = r.length > 4 ? r[4] : 1;
      return u === 1 ? [0, 0, 0, t] : [
        a >= 1 ? 0 : 255 * (1 - a) * (1 - u),
        // r
        n >= 1 ? 0 : 255 * (1 - n) * (1 - u),
        // g
        o >= 1 ? 0 : 255 * (1 - o) * (1 - u),
        // b
        t
      ];
    }, Mn = In, Pn = q, Se = x, Fe = G, Nn = b.unpack, On = b.type, Rn = An;
    Se.prototype.cmyk = function() {
      return Rn(this._rgb);
    }, Pn.cmyk = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Se, [null].concat(r, ["cmyk"])))();
    }, Fe.format.cmyk = Mn, Fe.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Nn(r, "cmyk"), On(r) === "array" && r.length === 4)
          return "cmyk";
      }
    });
    var Sn = b.unpack, Fn = b.last, Yr = function(r) {
      return Math.round(r * 100) / 100;
    }, Dn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Sn(r, "hsla"), n = Fn(r) || "lsa";
      return a[0] = Yr(a[0] || 0), a[1] = Yr(a[1] * 100) + "%", a[2] = Yr(a[2] * 100) + "%", n === "hsla" || a.length > 3 && a[3] < 1 ? (a[3] = a.length > 3 ? a[3] : 1, n = "hsla") : a.length = 3, n + "(" + a.join(",") + ")";
    }, Tn = Dn, Ln = b.unpack, Bn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Ln(r, "rgba");
      var a = r[0], n = r[1], o = r[2];
      a /= 255, n /= 255, o /= 255;
      var u = Math.min(a, n, o), t = Math.max(a, n, o), i = (t + u) / 2, l, d;
      return t === u ? (l = 0, d = Number.NaN) : l = i < 0.5 ? (t - u) / (t + u) : (t - u) / (2 - t - u), a == t ? d = (n - o) / (t - u) : n == t ? d = 2 + (o - a) / (t - u) : o == t && (d = 4 + (a - n) / (t - u)), d *= 60, d < 0 && (d += 360), r.length > 3 && r[3] !== void 0 ? [d, l, i, r[3]] : [d, l, i];
    }, De = Bn, zn = b.unpack, Hn = b.last, jn = Tn, Gn = De, Vr = Math.round, qn = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = zn(r, "rgba"), n = Hn(r) || "rgb";
      return n.substr(0, 3) == "hsl" ? jn(Gn(a), n) : (a[0] = Vr(a[0]), a[1] = Vr(a[1]), a[2] = Vr(a[2]), (n === "rgba" || a.length > 3 && a[3] < 1) && (a[3] = a.length > 3 ? a[3] : 1, n = "rgba"), n + "(" + a.slice(0, n === "rgb" ? 3 : 4).join(",") + ")");
    }, Zn = qn, Wn = b.unpack, Xr = Math.round, Un = function() {
      for (var r, e = [], a = arguments.length; a--; )
        e[a] = arguments[a];
      e = Wn(e, "hsl");
      var n = e[0], o = e[1], u = e[2], t, i, l;
      if (o === 0)
        t = i = l = u * 255;
      else {
        var d = [0, 0, 0], g = [0, 0, 0], m = u < 0.5 ? u * (1 + o) : u + o - u * o, h = 2 * u - m, w = n / 360;
        d[0] = w + 1 / 3, d[1] = w, d[2] = w - 1 / 3;
        for (var y = 0; y < 3; y++)
          d[y] < 0 && (d[y] += 1), d[y] > 1 && (d[y] -= 1), 6 * d[y] < 1 ? g[y] = h + (m - h) * 6 * d[y] : 2 * d[y] < 1 ? g[y] = m : 3 * d[y] < 2 ? g[y] = h + (m - h) * (2 / 3 - d[y]) * 6 : g[y] = h;
        r = [Xr(g[0] * 255), Xr(g[1] * 255), Xr(g[2] * 255)], t = r[0], i = r[1], l = r[2];
      }
      return e.length > 3 ? [t, i, l, e[3]] : [t, i, l, 1];
    }, Te = Un, Le = Te, Be = G, ze = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, He = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, je = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Ge = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, qe = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Ze = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, We = Math.round, Ue = function(r) {
      r = r.toLowerCase().trim();
      var e;
      if (Be.format.named)
        try {
          return Be.format.named(r);
        } catch {
        }
      if (e = r.match(ze)) {
        for (var a = e.slice(1, 4), n = 0; n < 3; n++)
          a[n] = +a[n];
        return a[3] = 1, a;
      }
      if (e = r.match(He)) {
        for (var o = e.slice(1, 5), u = 0; u < 4; u++)
          o[u] = +o[u];
        return o;
      }
      if (e = r.match(je)) {
        for (var t = e.slice(1, 4), i = 0; i < 3; i++)
          t[i] = We(t[i] * 2.55);
        return t[3] = 1, t;
      }
      if (e = r.match(Ge)) {
        for (var l = e.slice(1, 5), d = 0; d < 3; d++)
          l[d] = We(l[d] * 2.55);
        return l[3] = +l[3], l;
      }
      if (e = r.match(qe)) {
        var g = e.slice(1, 4);
        g[1] *= 0.01, g[2] *= 0.01;
        var m = Le(g);
        return m[3] = 1, m;
      }
      if (e = r.match(Ze)) {
        var h = e.slice(1, 4);
        h[1] *= 0.01, h[2] *= 0.01;
        var w = Le(h);
        return w[3] = +e[4], w;
      }
    };
    Ue.test = function(r) {
      return ze.test(r) || He.test(r) || je.test(r) || Ge.test(r) || qe.test(r) || Ze.test(r);
    };
    var Yn = Ue, Vn = q, Ye = x, Ve = G, Xn = b.type, Jn = Zn, Xe = Yn;
    Ye.prototype.css = function(r) {
      return Jn(this._rgb, r);
    }, Vn.css = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Ye, [null].concat(r, ["css"])))();
    }, Ve.format.css = Xe, Ve.autodetect.push({
      p: 5,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && Xn(r) === "string" && Xe.test(r))
          return "css";
      }
    });
    var Je = x, Qn = q, Kn = G, rt = b.unpack;
    Kn.format.gl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = rt(r, "rgba");
      return a[0] *= 255, a[1] *= 255, a[2] *= 255, a;
    }, Qn.gl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Je, [null].concat(r, ["gl"])))();
    }, Je.prototype.gl = function() {
      var r = this._rgb;
      return [r[0] / 255, r[1] / 255, r[2] / 255, r[3]];
    };
    var et = b.unpack, at = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = et(r, "rgb"), n = a[0], o = a[1], u = a[2], t = Math.min(n, o, u), i = Math.max(n, o, u), l = i - t, d = l * 100 / 255, g = t / (255 - l) * 100, m;
      return l === 0 ? m = Number.NaN : (n === i && (m = (o - u) / l), o === i && (m = 2 + (u - n) / l), u === i && (m = 4 + (n - o) / l), m *= 60, m < 0 && (m += 360)), [m, d, g];
    }, nt = at, tt = b.unpack, ot = Math.floor, ut = function() {
      for (var r, e, a, n, o, u, t = [], i = arguments.length; i--; )
        t[i] = arguments[i];
      t = tt(t, "hcg");
      var l = t[0], d = t[1], g = t[2], m, h, w;
      g = g * 255;
      var y = d * 255;
      if (d === 0)
        m = h = w = g;
      else {
        l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), l /= 60;
        var A = ot(l), P = l - A, O = g * (1 - d), D = O + y * (1 - P), V = O + y * P, U = O + y;
        switch (A) {
          case 0:
            r = [U, V, O], m = r[0], h = r[1], w = r[2];
            break;
          case 1:
            e = [D, U, O], m = e[0], h = e[1], w = e[2];
            break;
          case 2:
            a = [O, U, V], m = a[0], h = a[1], w = a[2];
            break;
          case 3:
            n = [O, D, U], m = n[0], h = n[1], w = n[2];
            break;
          case 4:
            o = [V, O, U], m = o[0], h = o[1], w = o[2];
            break;
          case 5:
            u = [U, O, D], m = u[0], h = u[1], w = u[2];
            break;
        }
      }
      return [m, h, w, t.length > 3 ? t[3] : 1];
    }, it = ut, lt = b.unpack, ft = b.type, ct = q, Qe = x, Ke = G, vt = nt;
    Qe.prototype.hcg = function() {
      return vt(this._rgb);
    }, ct.hcg = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Qe, [null].concat(r, ["hcg"])))();
    }, Ke.format.hcg = it, Ke.autodetect.push({
      p: 1,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = lt(r, "hcg"), ft(r) === "array" && r.length === 3)
          return "hcg";
      }
    });
    var st = b.unpack, dt = b.last, Sr = Math.round, gt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = st(r, "rgba"), n = a[0], o = a[1], u = a[2], t = a[3], i = dt(r) || "auto";
      t === void 0 && (t = 1), i === "auto" && (i = t < 1 ? "rgba" : "rgb"), n = Sr(n), o = Sr(o), u = Sr(u);
      var l = n << 16 | o << 8 | u, d = "000000" + l.toString(16);
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
        var u = parseInt(r, 16), t = u >> 24 & 255, i = u >> 16 & 255, l = u >> 8 & 255, d = Math.round((u & 255) / 255 * 100) / 100;
        return [t, i, l, d];
      }
      throw new Error("unknown hex color: " + r);
    }, ea = bt, mt = q, aa = x, yt = b.type, na = G, wt = ra;
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
    var _t = b.unpack, ta = b.TWOPI, kt = Math.min, $t = Math.sqrt, Et = Math.acos, xt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = _t(r, "rgb"), n = a[0], o = a[1], u = a[2];
      n /= 255, o /= 255, u /= 255;
      var t, i = kt(n, o, u), l = (n + o + u) / 3, d = l > 0 ? 1 - i / l : 0;
      return d === 0 ? t = NaN : (t = (n - o + (n - u)) / 2, t /= $t((n - o) * (n - o) + (n - u) * (o - u)), t = Et(t), u > o && (t = ta - t), t /= ta), [t * 360, d, l];
    }, At = xt, Ct = b.unpack, Jr = b.limit, mr = b.TWOPI, Qr = b.PITHIRD, yr = Math.cos, It = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Ct(r, "hsi");
      var a = r[0], n = r[1], o = r[2], u, t, i;
      return isNaN(a) && (a = 0), isNaN(n) && (n = 0), a > 360 && (a -= 360), a < 0 && (a += 360), a /= 360, a < 1 / 3 ? (i = (1 - n) / 3, u = (1 + n * yr(mr * a) / yr(Qr - mr * a)) / 3, t = 1 - (i + u)) : a < 2 / 3 ? (a -= 1 / 3, u = (1 - n) / 3, t = (1 + n * yr(mr * a) / yr(Qr - mr * a)) / 3, i = 1 - (u + t)) : (a -= 2 / 3, t = (1 - n) / 3, i = (1 + n * yr(mr * a) / yr(Qr - mr * a)) / 3, u = 1 - (t + i)), u = Jr(o * u * 3), t = Jr(o * t * 3), i = Jr(o * i * 3), [u * 255, t * 255, i * 255, r.length > 3 ? r[3] : 1];
    }, Mt = It, Pt = b.unpack, Nt = b.type, Ot = q, oa = x, ua = G, Rt = At;
    oa.prototype.hsi = function() {
      return Rt(this._rgb);
    }, Ot.hsi = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(oa, [null].concat(r, ["hsi"])))();
    }, ua.format.hsi = Mt, ua.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Pt(r, "hsi"), Nt(r) === "array" && r.length === 3)
          return "hsi";
      }
    });
    var St = b.unpack, Ft = b.type, Dt = q, ia = x, la = G, Tt = De;
    ia.prototype.hsl = function() {
      return Tt(this._rgb);
    }, Dt.hsl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(ia, [null].concat(r, ["hsl"])))();
    }, la.format.hsl = Te, la.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = St(r, "hsl"), Ft(r) === "array" && r.length === 3)
          return "hsl";
      }
    });
    var Lt = b.unpack, Bt = Math.min, zt = Math.max, Ht = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Lt(r, "rgb");
      var a = r[0], n = r[1], o = r[2], u = Bt(a, n, o), t = zt(a, n, o), i = t - u, l, d, g;
      return g = t / 255, t === 0 ? (l = Number.NaN, d = 0) : (d = i / t, a === t && (l = (n - o) / i), n === t && (l = 2 + (o - a) / i), o === t && (l = 4 + (a - n) / i), l *= 60, l < 0 && (l += 360)), [l, d, g];
    }, jt = Ht, Gt = b.unpack, qt = Math.floor, Zt = function() {
      for (var r, e, a, n, o, u, t = [], i = arguments.length; i--; )
        t[i] = arguments[i];
      t = Gt(t, "hsv");
      var l = t[0], d = t[1], g = t[2], m, h, w;
      if (g *= 255, d === 0)
        m = h = w = g;
      else {
        l === 360 && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360), l /= 60;
        var y = qt(l), A = l - y, P = g * (1 - d), O = g * (1 - d * A), D = g * (1 - d * (1 - A));
        switch (y) {
          case 0:
            r = [g, D, P], m = r[0], h = r[1], w = r[2];
            break;
          case 1:
            e = [O, g, P], m = e[0], h = e[1], w = e[2];
            break;
          case 2:
            a = [P, g, D], m = a[0], h = a[1], w = a[2];
            break;
          case 3:
            n = [P, O, g], m = n[0], h = n[1], w = n[2];
            break;
          case 4:
            o = [D, P, g], m = o[0], h = o[1], w = o[2];
            break;
          case 5:
            u = [g, P, O], m = u[0], h = u[1], w = u[2];
            break;
        }
      }
      return [m, h, w, t.length > 3 ? t[3] : 1];
    }, Wt = Zt, Ut = b.unpack, Yt = b.type, Vt = q, fa = x, ca = G, Xt = jt;
    fa.prototype.hsv = function() {
      return Xt(this._rgb);
    }, Vt.hsv = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(fa, [null].concat(r, ["hsv"])))();
    }, ca.format.hsv = Wt, ca.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = Ut(r, "hsv"), Yt(r) === "array" && r.length === 3)
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
    }, wr = Fr, Jt = b.unpack, va = Math.pow, Qt = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Jt(r, "rgb"), n = a[0], o = a[1], u = a[2], t = Kt(n, o, u), i = t[0], l = t[1], d = t[2], g = 116 * l - 16;
      return [g < 0 ? 0 : g, 500 * (i - l), 200 * (l - d)];
    }, Kr = function(r) {
      return (r /= 255) <= 0.04045 ? r / 12.92 : va((r + 0.055) / 1.055, 2.4);
    }, re = function(r) {
      return r > wr.t3 ? va(r, 1 / 3) : r / wr.t2 + wr.t0;
    }, Kt = function(r, e, a) {
      r = Kr(r), e = Kr(e), a = Kr(a);
      var n = re((0.4124564 * r + 0.3575761 * e + 0.1804375 * a) / wr.Xn), o = re((0.2126729 * r + 0.7151522 * e + 0.072175 * a) / wr.Yn), u = re((0.0193339 * r + 0.119192 * e + 0.9503041 * a) / wr.Zn);
      return [n, o, u];
    }, sa = Qt, _r = Fr, ro = b.unpack, eo = Math.pow, ao = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = ro(r, "lab");
      var a = r[0], n = r[1], o = r[2], u, t, i, l, d, g;
      return t = (a + 16) / 116, u = isNaN(n) ? t : t + n / 500, i = isNaN(o) ? t : t - o / 200, t = _r.Yn * ae(t), u = _r.Xn * ae(u), i = _r.Zn * ae(i), l = ee(3.2404542 * u - 1.5371385 * t - 0.4985314 * i), d = ee(-0.969266 * u + 1.8760108 * t + 0.041556 * i), g = ee(0.0556434 * u - 0.2040259 * t + 1.0572252 * i), [l, d, g, r.length > 3 ? r[3] : 1];
    }, ee = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * eo(r, 1 / 2.4) - 0.055);
    }, ae = function(r) {
      return r > _r.t1 ? r * r * r : _r.t2 * (r - _r.t0);
    }, da = ao, no = b.unpack, to = b.type, oo = q, ga = x, ha = G, uo = sa;
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
    var io = b.unpack, lo = b.RAD2DEG, fo = Math.sqrt, co = Math.atan2, vo = Math.round, so = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = io(r, "lab"), n = a[0], o = a[1], u = a[2], t = fo(o * o + u * u), i = (co(u, o) * lo + 360) % 360;
      return vo(t * 1e4) === 0 && (i = Number.NaN), [n, t, i];
    }, pa = so, go = b.unpack, ho = sa, po = pa, bo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = go(r, "rgb"), n = a[0], o = a[1], u = a[2], t = ho(n, o, u), i = t[0], l = t[1], d = t[2];
      return po(i, l, d);
    }, mo = bo, yo = b.unpack, wo = b.DEG2RAD, _o = Math.sin, ko = Math.cos, $o = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = yo(r, "lch"), n = a[0], o = a[1], u = a[2];
      return isNaN(u) && (u = 0), u = u * wo, [n, ko(u) * o, _o(u) * o];
    }, ba = $o, Eo = b.unpack, xo = ba, Ao = da, Co = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = Eo(r, "lch");
      var a = r[0], n = r[1], o = r[2], u = xo(a, n, o), t = u[0], i = u[1], l = u[2], d = Ao(t, i, l), g = d[0], m = d[1], h = d[2];
      return [g, m, h, r.length > 3 ? r[3] : 1];
    }, ma = Co, Io = b.unpack, Mo = ma, Po = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Io(r, "hcl").reverse();
      return Mo.apply(void 0, a);
    }, No = Po, Oo = b.unpack, Ro = b.type, ya = q, Dr = x, ne = G, wa = mo;
    Dr.prototype.lch = function() {
      return wa(this._rgb);
    }, Dr.prototype.hcl = function() {
      return wa(this._rgb).reverse();
    }, ya.lch = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Dr, [null].concat(r, ["lch"])))();
    }, ya.hcl = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Dr, [null].concat(r, ["hcl"])))();
    }, ne.format.lch = ma, ne.format.hcl = No, ["lch", "hcl"].forEach(function(r) {
      return ne.autodetect.push({
        p: 2,
        test: function() {
          for (var e = [], a = arguments.length; a--; )
            e[a] = arguments[a];
          if (e = Oo(e, r), Ro(e) === "array" && e.length === 3)
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
    }, _a = So, Fo = x, ka = G, Do = b.type, Ir = _a, To = ea, Lo = ra;
    Fo.prototype.name = function() {
      for (var r = Lo(this._rgb, "rgb"), e = 0, a = Object.keys(Ir); e < a.length; e += 1) {
        var n = a[e];
        if (Ir[n] === r)
          return n.toLowerCase();
      }
      return r;
    }, ka.format.named = function(r) {
      if (r = r.toLowerCase(), Ir[r])
        return To(Ir[r]);
      throw new Error("unknown color name: " + r);
    }, ka.autodetect.push({
      p: 5,
      test: function(r) {
        for (var e = [], a = arguments.length - 1; a-- > 0; )
          e[a] = arguments[a + 1];
        if (!e.length && Do(r) === "string" && Ir[r.toLowerCase()])
          return "named";
      }
    });
    var Bo = b.unpack, zo = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Bo(r, "rgb"), n = a[0], o = a[1], u = a[2];
      return (n << 16) + (o << 8) + u;
    }, Ho = zo, jo = b.type, Go = function(r) {
      if (jo(r) == "number" && r >= 0 && r <= 16777215) {
        var e = r >> 16, a = r >> 8 & 255, n = r & 255;
        return [e, a, n, 1];
      }
      throw new Error("unknown num color: " + r);
    }, qo = Go, Zo = q, $a = x, Ea = G, Wo = b.type, Uo = Ho;
    $a.prototype.num = function() {
      return Uo(this._rgb);
    }, Zo.num = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply($a, [null].concat(r, ["num"])))();
    }, Ea.format.num = qo, Ea.autodetect.push({
      p: 5,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r.length === 1 && Wo(r[0]) === "number" && r[0] >= 0 && r[0] <= 16777215)
          return "num";
      }
    });
    var Yo = q, te = x, xa = G, Aa = b.unpack, Ca = b.type, Ia = Math.round;
    te.prototype.rgb = function(r) {
      return r === void 0 && (r = !0), r === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ia);
    }, te.prototype.rgba = function(r) {
      return r === void 0 && (r = !0), this._rgb.slice(0, 4).map(function(e, a) {
        return a < 3 ? r === !1 ? e : Ia(e) : e;
      });
    }, Yo.rgb = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(te, [null].concat(r, ["rgb"])))();
    }, xa.format.rgb = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = Aa(r, "rgba");
      return a[3] === void 0 && (a[3] = 1), a;
    }, xa.autodetect.push({
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
    }, Ma = Vo, Xo = Ma, Jo = b.unpack, Qo = Math.round, Ko = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      for (var a = Jo(r, "rgb"), n = a[0], o = a[2], u = 1e3, t = 4e4, i = 0.4, l; t - u > i; ) {
        l = (t + u) * 0.5;
        var d = Xo(l);
        d[2] / d[0] >= o / n ? t = l : u = l;
      }
      return Qo(l);
    }, ru = Ko, oe = q, Lr = x, ue = G, eu = ru;
    Lr.prototype.temp = Lr.prototype.kelvin = Lr.prototype.temperature = function() {
      return eu(this._rgb);
    }, oe.temp = oe.kelvin = oe.temperature = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Lr, [null].concat(r, ["temp"])))();
    }, ue.format.temp = ue.format.kelvin = ue.format.temperature = Ma;
    var au = b.unpack, ie = Math.cbrt, nu = Math.pow, tu = Math.sign, ou = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = au(r, "rgb"), n = a[0], o = a[1], u = a[2], t = [le(n / 255), le(o / 255), le(u / 255)], i = t[0], l = t[1], d = t[2], g = ie(0.4122214708 * i + 0.5363325363 * l + 0.0514459929 * d), m = ie(0.2119034982 * i + 0.6806995451 * l + 0.1073969566 * d), h = ie(0.0883024619 * i + 0.2817188376 * l + 0.6299787005 * d);
      return [
        0.2104542553 * g + 0.793617785 * m - 0.0040720468 * h,
        1.9779984951 * g - 2.428592205 * m + 0.4505937099 * h,
        0.0259040371 * g + 0.7827717662 * m - 0.808675766 * h
      ];
    }, Pa = ou;
    function le(r) {
      var e = Math.abs(r);
      return e < 0.04045 ? r / 12.92 : (tu(r) || 1) * nu((e + 0.055) / 1.055, 2.4);
    }
    var uu = b.unpack, Br = Math.pow, iu = Math.sign, lu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = uu(r, "lab");
      var a = r[0], n = r[1], o = r[2], u = Br(a + 0.3963377774 * n + 0.2158037573 * o, 3), t = Br(a - 0.1055613458 * n - 0.0638541728 * o, 3), i = Br(a - 0.0894841775 * n - 1.291485548 * o, 3);
      return [
        255 * fe(4.0767416621 * u - 3.3077115913 * t + 0.2309699292 * i),
        255 * fe(-1.2684380046 * u + 2.6097574011 * t - 0.3413193965 * i),
        255 * fe(-0.0041960863 * u - 0.7034186147 * t + 1.707614701 * i),
        r.length > 3 ? r[3] : 1
      ];
    }, Na = lu;
    function fe(r) {
      var e = Math.abs(r);
      return e > 31308e-7 ? (iu(r) || 1) * (1.055 * Br(e, 1 / 2.4) - 0.055) : r * 12.92;
    }
    var fu = b.unpack, cu = b.type, vu = q, Oa = x, Ra = G, su = Pa;
    Oa.prototype.oklab = function() {
      return su(this._rgb);
    }, vu.oklab = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Oa, [null].concat(r, ["oklab"])))();
    }, Ra.format.oklab = Na, Ra.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = fu(r, "oklab"), cu(r) === "array" && r.length === 3)
          return "oklab";
      }
    });
    var du = b.unpack, gu = Pa, hu = pa, pu = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      var a = du(r, "rgb"), n = a[0], o = a[1], u = a[2], t = gu(n, o, u), i = t[0], l = t[1], d = t[2];
      return hu(i, l, d);
    }, bu = pu, mu = b.unpack, yu = ba, wu = Na, _u = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      r = mu(r, "lch");
      var a = r[0], n = r[1], o = r[2], u = yu(a, n, o), t = u[0], i = u[1], l = u[2], d = wu(t, i, l), g = d[0], m = d[1], h = d[2];
      return [g, m, h, r.length > 3 ? r[3] : 1];
    }, ku = _u, $u = b.unpack, Eu = b.type, xu = q, Sa = x, Fa = G, Au = bu;
    Sa.prototype.oklch = function() {
      return Au(this._rgb);
    }, xu.oklch = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      return new (Function.prototype.bind.apply(Sa, [null].concat(r, ["oklch"])))();
    }, Fa.format.oklch = ku, Fa.autodetect.push({
      p: 3,
      test: function() {
        for (var r = [], e = arguments.length; e--; )
          r[e] = arguments[e];
        if (r = $u(r, "oklch"), Eu(r) === "array" && r.length === 3)
          return "oklch";
      }
    });
    var Da = x, Cu = b.type;
    Da.prototype.alpha = function(r, e) {
      return e === void 0 && (e = !1), r !== void 0 && Cu(r) === "number" ? e ? (this._rgb[3] = r, this) : new Da([this._rgb[0], this._rgb[1], this._rgb[2], r], "rgb") : this._rgb[3];
    };
    var Iu = x;
    Iu.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var hr = x, Mu = Fr;
    hr.prototype.darken = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lab();
      return a[0] -= Mu.Kn * r, new hr(a, "lab").alpha(e.alpha(), !0);
    }, hr.prototype.brighten = function(r) {
      return r === void 0 && (r = 1), this.darken(-r);
    }, hr.prototype.darker = hr.prototype.darken, hr.prototype.brighter = hr.prototype.brighten;
    var Pu = x;
    Pu.prototype.get = function(r) {
      var e = r.split("."), a = e[0], n = e[1], o = this[a]();
      if (n) {
        var u = a.indexOf(n) - (a.substr(0, 2) === "ok" ? 2 : 0);
        if (u > -1)
          return o[u];
        throw new Error("unknown channel " + n + " in mode " + a);
      } else
        return o;
    };
    var kr = x, Nu = b.type, Ou = Math.pow, Ru = 1e-7, Su = 20;
    kr.prototype.luminance = function(r) {
      if (r !== void 0 && Nu(r) === "number") {
        if (r === 0)
          return new kr([0, 0, 0, this._rgb[3]], "rgb");
        if (r === 1)
          return new kr([255, 255, 255, this._rgb[3]], "rgb");
        var e = this.luminance(), a = "rgb", n = Su, o = function(t, i) {
          var l = t.interpolate(i, 0.5, a), d = l.luminance();
          return Math.abs(r - d) < Ru || !n-- ? l : d > r ? o(t, l) : o(l, i);
        }, u = (e > r ? o(new kr([0, 0, 0]), this) : o(this, new kr([255, 255, 255]))).rgb();
        return new kr(u.concat([this._rgb[3]]));
      }
      return Fu.apply(void 0, this._rgb.slice(0, 3));
    };
    var Fu = function(r, e, a) {
      return r = ce(r), e = ce(e), a = ce(a), 0.2126 * r + 0.7152 * e + 0.0722 * a;
    }, ce = function(r) {
      return r /= 255, r <= 0.03928 ? r / 12.92 : Ou((r + 0.055) / 1.055, 2.4);
    }, K = {}, Ta = x, La = b.type, zr = K, Ba = function(r, e, a) {
      a === void 0 && (a = 0.5);
      for (var n = [], o = arguments.length - 3; o-- > 0; )
        n[o] = arguments[o + 3];
      var u = n[0] || "lrgb";
      if (!zr[u] && !n.length && (u = Object.keys(zr)[0]), !zr[u])
        throw new Error("interpolation mode " + u + " is not defined");
      return La(r) !== "object" && (r = new Ta(r)), La(e) !== "object" && (e = new Ta(e)), zr[u](r, e, a).alpha(r.alpha() + a * (e.alpha() - r.alpha()));
    }, za = x, Du = Ba;
    za.prototype.mix = za.prototype.interpolate = function(r, e) {
      e === void 0 && (e = 0.5);
      for (var a = [], n = arguments.length - 2; n-- > 0; )
        a[n] = arguments[n + 2];
      return Du.apply(void 0, [this, r, e].concat(a));
    };
    var Ha = x;
    Ha.prototype.premultiply = function(r) {
      r === void 0 && (r = !1);
      var e = this._rgb, a = e[3];
      return r ? (this._rgb = [e[0] * a, e[1] * a, e[2] * a, a], this) : new Ha([e[0] * a, e[1] * a, e[2] * a, a], "rgb");
    };
    var ve = x, Tu = Fr;
    ve.prototype.saturate = function(r) {
      r === void 0 && (r = 1);
      var e = this, a = e.lch();
      return a[1] += Tu.Kn * r, a[1] < 0 && (a[1] = 0), new ve(a, "lch").alpha(e.alpha(), !0);
    }, ve.prototype.desaturate = function(r) {
      return r === void 0 && (r = 1), this.saturate(-r);
    };
    var ja = x, Ga = b.type;
    ja.prototype.set = function(r, e, a) {
      a === void 0 && (a = !1);
      var n = r.split("."), o = n[0], u = n[1], t = this[o]();
      if (u) {
        var i = o.indexOf(u) - (o.substr(0, 2) === "ok" ? 2 : 0);
        if (i > -1) {
          if (Ga(e) == "string")
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
          else if (Ga(e) === "number")
            t[i] = e;
          else
            throw new Error("unsupported value for Color.set");
          var l = new ja(t, o);
          return a ? (this._rgb = l._rgb, this) : l;
        }
        throw new Error("unknown channel " + u + " in mode " + o);
      } else
        return t;
    };
    var Lu = x, Bu = function(r, e, a) {
      var n = r._rgb, o = e._rgb;
      return new Lu(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "rgb"
      );
    };
    K.rgb = Bu;
    var zu = x, se = Math.sqrt, $r = Math.pow, Hu = function(r, e, a) {
      var n = r._rgb, o = n[0], u = n[1], t = n[2], i = e._rgb, l = i[0], d = i[1], g = i[2];
      return new zu(
        se($r(o, 2) * (1 - a) + $r(l, 2) * a),
        se($r(u, 2) * (1 - a) + $r(d, 2) * a),
        se($r(t, 2) * (1 - a) + $r(g, 2) * a),
        "rgb"
      );
    };
    K.lrgb = Hu;
    var ju = x, Gu = function(r, e, a) {
      var n = r.lab(), o = e.lab();
      return new ju(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "lab"
      );
    };
    K.lab = Gu;
    var qa = x, Er = function(r, e, a, n) {
      var o, u, t, i;
      n === "hsl" ? (t = r.hsl(), i = e.hsl()) : n === "hsv" ? (t = r.hsv(), i = e.hsv()) : n === "hcg" ? (t = r.hcg(), i = e.hcg()) : n === "hsi" ? (t = r.hsi(), i = e.hsi()) : n === "lch" || n === "hcl" ? (n = "hcl", t = r.hcl(), i = e.hcl()) : n === "oklch" && (t = r.oklch().reverse(), i = e.oklch().reverse());
      var l, d, g, m, h, w;
      (n.substr(0, 1) === "h" || n === "oklch") && (o = t, l = o[0], g = o[1], h = o[2], u = i, d = u[0], m = u[1], w = u[2]);
      var y, A, P, O;
      return !isNaN(l) && !isNaN(d) ? (d > l && d - l > 180 ? O = d - (l + 360) : d < l && l - d > 180 ? O = d + 360 - l : O = d - l, A = l + a * O) : isNaN(l) ? isNaN(d) ? A = Number.NaN : (A = d, (h == 1 || h == 0) && n != "hsv" && (y = m)) : (A = l, (w == 1 || w == 0) && n != "hsv" && (y = g)), y === void 0 && (y = g + a * (m - g)), P = h + a * (w - h), n === "oklch" ? new qa([P, y, A], n) : new qa([A, y, P], n);
    }, qu = Er, Za = function(r, e, a) {
      return qu(r, e, a, "lch");
    };
    K.lch = Za, K.hcl = Za;
    var Zu = x, Wu = function(r, e, a) {
      var n = r.num(), o = e.num();
      return new Zu(n + a * (o - n), "num");
    };
    K.num = Wu;
    var Uu = Er, Yu = function(r, e, a) {
      return Uu(r, e, a, "hcg");
    };
    K.hcg = Yu;
    var Vu = Er, Xu = function(r, e, a) {
      return Vu(r, e, a, "hsi");
    };
    K.hsi = Xu;
    var Ju = Er, Qu = function(r, e, a) {
      return Ju(r, e, a, "hsl");
    };
    K.hsl = Qu;
    var Ku = Er, ri = function(r, e, a) {
      return Ku(r, e, a, "hsv");
    };
    K.hsv = ri;
    var ei = x, ai = function(r, e, a) {
      var n = r.oklab(), o = e.oklab();
      return new ei(
        n[0] + a * (o[0] - n[0]),
        n[1] + a * (o[1] - n[1]),
        n[2] + a * (o[2] - n[2]),
        "oklab"
      );
    };
    K.oklab = ai;
    var ni = Er, ti = function(r, e, a) {
      return ni(r, e, a, "oklch");
    };
    K.oklch = ti;
    var de = x, oi = b.clip_rgb, ge = Math.pow, he = Math.sqrt, pe = Math.PI, Wa = Math.cos, Ua = Math.sin, ui = Math.atan2, ii = function(r, e, a) {
      e === void 0 && (e = "lrgb"), a === void 0 && (a = null);
      var n = r.length;
      a || (a = Array.from(new Array(n)).map(function() {
        return 1;
      }));
      var o = n / a.reduce(function(A, P) {
        return A + P;
      });
      if (a.forEach(function(A, P) {
        a[P] *= o;
      }), r = r.map(function(A) {
        return new de(A);
      }), e === "lrgb")
        return li(r, a);
      for (var u = r.shift(), t = u.get(e), i = [], l = 0, d = 0, g = 0; g < t.length; g++)
        if (t[g] = (t[g] || 0) * a[0], i.push(isNaN(t[g]) ? 0 : a[0]), e.charAt(g) === "h" && !isNaN(t[g])) {
          var m = t[g] / 180 * pe;
          l += Wa(m) * a[0], d += Ua(m) * a[0];
        }
      var h = u.alpha() * a[0];
      r.forEach(function(A, P) {
        var O = A.get(e);
        h += A.alpha() * a[P + 1];
        for (var D = 0; D < t.length; D++)
          if (!isNaN(O[D]))
            if (i[D] += a[P + 1], e.charAt(D) === "h") {
              var V = O[D] / 180 * pe;
              l += Wa(V) * a[P + 1], d += Ua(V) * a[P + 1];
            } else
              t[D] += O[D] * a[P + 1];
      });
      for (var w = 0; w < t.length; w++)
        if (e.charAt(w) === "h") {
          for (var y = ui(d / i[w], l / i[w]) / pe * 180; y < 0; )
            y += 360;
          for (; y >= 360; )
            y -= 360;
          t[w] = y;
        } else
          t[w] = t[w] / i[w];
      return h /= n, new de(t, e).alpha(h > 0.99999 ? 1 : h, !0);
    }, li = function(r, e) {
      for (var a = r.length, n = [0, 0, 0, 0], o = 0; o < r.length; o++) {
        var u = r[o], t = e[o] / a, i = u._rgb;
        n[0] += ge(i[0], 2) * t, n[1] += ge(i[1], 2) * t, n[2] += ge(i[2], 2) * t, n[3] += i[3] * t;
      }
      return n[0] = he(n[0]), n[1] = he(n[1]), n[2] = he(n[2]), n[3] > 0.9999999 && (n[3] = 1), new de(oi(n));
    }, rr = q, xr = b.type, fi = Math.pow, be = function(r) {
      var e = "rgb", a = rr("#ccc"), n = 0, o = [0, 1], u = [], t = [0, 0], i = !1, l = [], d = !1, g = 0, m = 1, h = !1, w = {}, y = !0, A = 1, P = function(p) {
        if (p = p || ["#fff", "#000"], p && xr(p) === "string" && rr.brewer && rr.brewer[p.toLowerCase()] && (p = rr.brewer[p.toLowerCase()]), xr(p) === "array") {
          p.length === 1 && (p = [p[0], p[0]]), p = p.slice(0);
          for (var k = 0; k < p.length; k++)
            p[k] = rr(p[k]);
          u.length = 0;
          for (var I = 0; I < p.length; I++)
            u.push(I / (p.length - 1));
        }
        return Q(), l = p;
      }, O = function(p) {
        if (i != null) {
          for (var k = i.length - 1, I = 0; I < k && p >= i[I]; )
            I++;
          return I - 1;
        }
        return 0;
      }, D = function(p) {
        return p;
      }, V = function(p) {
        return p;
      }, U = function(p, k) {
        var I, C;
        if (k == null && (k = !1), isNaN(p) || p === null)
          return a;
        if (k)
          C = p;
        else if (i && i.length > 2) {
          var X = O(p);
          C = X / (i.length - 2);
        } else
          m !== g ? C = (p - g) / (m - g) : C = 1;
        C = V(C), k || (C = D(C)), A !== 1 && (C = fi(C, A)), C = t[0] + C * (1 - t[0] - t[1]), C = Math.min(1, Math.max(0, C));
        var z = Math.floor(C * 1e4);
        if (y && w[z])
          I = w[z];
        else {
          if (xr(l) === "array")
            for (var R = 0; R < u.length; R++) {
              var T = u[R];
              if (C <= T) {
                I = l[R];
                break;
              }
              if (C >= T && R === u.length - 1) {
                I = l[R];
                break;
              }
              if (C > T && C < u[R + 1]) {
                C = (C - T) / (u[R + 1] - T), I = rr.interpolate(l[R], l[R + 1], C, e);
                break;
              }
            }
          else
            xr(l) === "function" && (I = l(C));
          y && (w[z] = I);
        }
        return I;
      }, Q = function() {
        return w = {};
      };
      P(r);
      var N = function(p) {
        var k = rr(U(p));
        return d && k[d] ? k[d]() : k;
      };
      return N.classes = function(p) {
        if (p != null) {
          if (xr(p) === "array")
            i = p, o = [p[0], p[p.length - 1]];
          else {
            var k = rr.analyze(o);
            p === 0 ? i = [k.min, k.max] : i = rr.limits(k, "e", p);
          }
          return N;
        }
        return i;
      }, N.domain = function(p) {
        if (!arguments.length)
          return o;
        g = p[0], m = p[p.length - 1], u = [];
        var k = l.length;
        if (p.length === k && g !== m)
          for (var I = 0, C = Array.from(p); I < C.length; I += 1) {
            var X = C[I];
            u.push((X - g) / (m - g));
          }
        else {
          for (var z = 0; z < k; z++)
            u.push(z / (k - 1));
          if (p.length > 2) {
            var R = p.map(function(L, B) {
              return B / (p.length - 1);
            }), T = p.map(function(L) {
              return (L - g) / (m - g);
            });
            T.every(function(L, B) {
              return R[B] === L;
            }) || (V = function(L) {
              if (L <= 0 || L >= 1)
                return L;
              for (var B = 0; L >= T[B + 1]; )
                B++;
              var ar = (L - T[B]) / (T[B + 1] - T[B]), vr = R[B] + ar * (R[B + 1] - R[B]);
              return vr;
            });
          }
        }
        return o = [g, m], N;
      }, N.mode = function(p) {
        return arguments.length ? (e = p, Q(), N) : e;
      }, N.range = function(p, k) {
        return P(p), N;
      }, N.out = function(p) {
        return d = p, N;
      }, N.spread = function(p) {
        return arguments.length ? (n = p, N) : n;
      }, N.correctLightness = function(p) {
        return p == null && (p = !0), h = p, Q(), h ? D = function(k) {
          for (var I = U(0, !0).lab()[0], C = U(1, !0).lab()[0], X = I > C, z = U(k, !0).lab()[0], R = I + (C - I) * k, T = z - R, L = 0, B = 1, ar = 20; Math.abs(T) > 0.01 && ar-- > 0; )
            (function() {
              return X && (T *= -1), T < 0 ? (L = k, k += (B - k) * 0.5) : (B = k, k += (L - k) * 0.5), z = U(k, !0).lab()[0], T = z - R;
            })();
          return k;
        } : D = function(k) {
          return k;
        }, N;
      }, N.padding = function(p) {
        return p != null ? (xr(p) === "number" && (p = [p, p]), t = p, N) : t;
      }, N.colors = function(p, k) {
        arguments.length < 2 && (k = "hex");
        var I = [];
        if (arguments.length === 0)
          I = l.slice(0);
        else if (p === 1)
          I = [N(0.5)];
        else if (p > 1) {
          var C = o[0], X = o[1] - C;
          I = ci(0, p, !1).map(function(B) {
            return N(C + B / (p - 1) * X);
          });
        } else {
          r = [];
          var z = [];
          if (i && i.length > 2)
            for (var R = 1, T = i.length, L = 1 <= T; L ? R < T : R > T; L ? R++ : R--)
              z.push((i[R - 1] + i[R]) * 0.5);
          else
            z = o;
          I = z.map(function(B) {
            return N(B);
          });
        }
        return rr[k] && (I = I.map(function(B) {
          return B[k]();
        })), I;
      }, N.cache = function(p) {
        return p != null ? (y = p, N) : y;
      }, N.gamma = function(p) {
        return p != null ? (A = p, N) : A;
      }, N.nodata = function(p) {
        return p != null ? (a = rr(p), N) : a;
      }, N;
    };
    function ci(r, e, a) {
      for (var n = [], o = r < e, u = a ? o ? e + 1 : e - 1 : e, t = r; o ? t < u : t > u; o ? t++ : t--)
        n.push(t);
      return n;
    }
    var Mr = x, vi = be, si = function(r) {
      for (var e = [1, 1], a = 1; a < r; a++) {
        for (var n = [1], o = 1; o <= e.length; o++)
          n[o] = (e[o] || 0) + e[o - 1];
        e = n;
      }
      return e;
    }, di = function(r) {
      var e, a, n, o, u, t, i;
      if (r = r.map(function(h) {
        return new Mr(h);
      }), r.length === 2)
        e = r.map(function(h) {
          return h.lab();
        }), u = e[0], t = e[1], o = function(h) {
          var w = [0, 1, 2].map(function(y) {
            return u[y] + h * (t[y] - u[y]);
          });
          return new Mr(w, "lab");
        };
      else if (r.length === 3)
        a = r.map(function(h) {
          return h.lab();
        }), u = a[0], t = a[1], i = a[2], o = function(h) {
          var w = [0, 1, 2].map(function(y) {
            return (1 - h) * (1 - h) * u[y] + 2 * (1 - h) * h * t[y] + h * h * i[y];
          });
          return new Mr(w, "lab");
        };
      else if (r.length === 4) {
        var l;
        n = r.map(function(h) {
          return h.lab();
        }), u = n[0], t = n[1], i = n[2], l = n[3], o = function(h) {
          var w = [0, 1, 2].map(function(y) {
            return (1 - h) * (1 - h) * (1 - h) * u[y] + 3 * (1 - h) * (1 - h) * h * t[y] + 3 * (1 - h) * h * h * i[y] + h * h * h * l[y];
          });
          return new Mr(w, "lab");
        };
      } else if (r.length >= 5) {
        var d, g, m;
        d = r.map(function(h) {
          return h.lab();
        }), m = r.length - 1, g = si(m), o = function(h) {
          var w = 1 - h, y = [0, 1, 2].map(function(A) {
            return d.reduce(function(P, O, D) {
              return P + g[D] * Math.pow(w, m - D) * Math.pow(h, D) * O[A];
            }, 0);
          });
          return new Mr(y, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return o;
    }, gi = function(r) {
      var e = di(r);
      return e.scale = function() {
        return vi(e);
      }, e;
    }, me = q, er = function(r, e, a) {
      if (!er[a])
        throw new Error("unknown blend mode " + a);
      return er[a](r, e);
    }, fr = function(r) {
      return function(e, a) {
        var n = me(a).rgb(), o = me(e).rgb();
        return me.rgb(r(n, o));
      };
    }, cr = function(r) {
      return function(e, a) {
        var n = [];
        return n[0] = r(e[0], a[0]), n[1] = r(e[1], a[1]), n[2] = r(e[2], a[2]), n;
      };
    }, hi = function(r) {
      return r;
    }, pi = function(r, e) {
      return r * e / 255;
    }, bi = function(r, e) {
      return r > e ? e : r;
    }, mi = function(r, e) {
      return r > e ? r : e;
    }, yi = function(r, e) {
      return 255 * (1 - (1 - r / 255) * (1 - e / 255));
    }, wi = function(r, e) {
      return e < 128 ? 2 * r * e / 255 : 255 * (1 - 2 * (1 - r / 255) * (1 - e / 255));
    }, _i = function(r, e) {
      return 255 * (1 - (1 - e / 255) / (r / 255));
    }, ki = function(r, e) {
      return r === 255 ? 255 : (r = 255 * (e / 255) / (1 - r / 255), r > 255 ? 255 : r);
    };
    er.normal = fr(cr(hi)), er.multiply = fr(cr(pi)), er.screen = fr(cr(yi)), er.overlay = fr(cr(wi)), er.darken = fr(cr(bi)), er.lighten = fr(cr(mi)), er.dodge = fr(cr(ki)), er.burn = fr(cr(_i));
    for (var $i = er, ye = b.type, Ei = b.clip_rgb, xi = b.TWOPI, Ai = Math.pow, Ci = Math.sin, Ii = Math.cos, Ya = q, Mi = function(r, e, a, n, o) {
      r === void 0 && (r = 300), e === void 0 && (e = -1.5), a === void 0 && (a = 1), n === void 0 && (n = 1), o === void 0 && (o = [0, 1]);
      var u = 0, t;
      ye(o) === "array" ? t = o[1] - o[0] : (t = 0, o = [o, o]);
      var i = function(l) {
        var d = xi * ((r + 120) / 360 + e * l), g = Ai(o[0] + t * l, n), m = u !== 0 ? a[0] + l * u : a, h = m * g * (1 - g) / 2, w = Ii(d), y = Ci(d), A = g + h * (-0.14861 * w + 1.78277 * y), P = g + h * (-0.29227 * w - 0.90649 * y), O = g + h * (1.97294 * w);
        return Ya(Ei([A * 255, P * 255, O * 255, 1]));
      };
      return i.start = function(l) {
        return l == null ? r : (r = l, i);
      }, i.rotations = function(l) {
        return l == null ? e : (e = l, i);
      }, i.gamma = function(l) {
        return l == null ? n : (n = l, i);
      }, i.hue = function(l) {
        return l == null ? a : (a = l, ye(a) === "array" ? (u = a[1] - a[0], u === 0 && (a = a[1])) : u = 0, i);
      }, i.lightness = function(l) {
        return l == null ? o : (ye(l) === "array" ? (o = l, t = l[1] - l[0]) : (o = [l, l], t = 0), i);
      }, i.scale = function() {
        return Ya.scale(i);
      }, i.hue(a), i;
    }, Pi = x, Ni = "0123456789abcdef", Oi = Math.floor, Ri = Math.random, Si = function() {
      for (var r = "#", e = 0; e < 6; e++)
        r += Ni.charAt(Oi(Ri() * 16));
      return new Pi(r, "hex");
    }, we = E, Va = Math.log, Fi = Math.pow, Di = Math.floor, Ti = Math.abs, Xa = function(r, e) {
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
        return Ja(a, n, o);
      }, a;
    }, Ja = function(r, e, a) {
      e === void 0 && (e = "equal"), a === void 0 && (a = 7), we(r) == "array" && (r = Xa(r));
      var n = r.min, o = r.max, u = r.values.sort(function(ke, $e) {
        return ke - $e;
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
        var l = Math.LOG10E * Va(n), d = Math.LOG10E * Va(o);
        t.push(n);
        for (var g = 1; g < a; g++)
          t.push(Fi(10, l + g / a * (d - l)));
        t.push(o);
      } else if (e.substr(0, 1) === "q") {
        t.push(n);
        for (var m = 1; m < a; m++) {
          var h = (u.length - 1) * m / a, w = Di(h);
          if (w === h)
            t.push(u[w]);
          else {
            var y = h - w;
            t.push(u[w] * (1 - y) + u[w + 1] * y);
          }
        }
        t.push(o);
      } else if (e.substr(0, 1) === "k") {
        var A, P = u.length, O = new Array(P), D = new Array(a), V = !0, U = 0, Q = null;
        Q = [], Q.push(n);
        for (var N = 1; N < a; N++)
          Q.push(n + N / a * (o - n));
        for (Q.push(o); V; ) {
          for (var p = 0; p < a; p++)
            D[p] = 0;
          for (var k = 0; k < P; k++)
            for (var I = u[k], C = Number.MAX_VALUE, X = void 0, z = 0; z < a; z++) {
              var R = Ti(Q[z] - I);
              R < C && (C = R, X = z), D[X]++, O[k] = X;
            }
          for (var T = new Array(a), L = 0; L < a; L++)
            T[L] = null;
          for (var B = 0; B < P; B++)
            A = O[B], T[A] === null ? T[A] = u[B] : T[A] += u[B];
          for (var ar = 0; ar < a; ar++)
            T[ar] *= 1 / D[ar];
          V = !1;
          for (var vr = 0; vr < a; vr++)
            if (T[vr] !== Q[vr]) {
              V = !0;
              break;
            }
          Q = T, U++, U > 200 && (V = !1);
        }
        for (var sr = {}, Ar = 0; Ar < a; Ar++)
          sr[Ar] = [];
        for (var Cr = 0; Cr < P; Cr++)
          A = O[Cr], sr[A].push(u[Cr]);
        for (var ir = [], pr = 0; pr < a; pr++)
          ir.push(sr[pr][0]), ir.push(sr[pr][sr[pr].length - 1]);
        ir = ir.sort(function(ke, $e) {
          return ke - $e;
        }), t.push(ir[0]);
        for (var Pr = 1; Pr < ir.length; Pr += 2) {
          var br = ir[Pr];
          !isNaN(br) && t.indexOf(br) === -1 && t.push(br);
        }
      }
      return t;
    }, Qa = { analyze: Xa, limits: Ja }, Ka = x, Li = function(r, e) {
      r = new Ka(r), e = new Ka(e);
      var a = r.luminance(), n = e.luminance();
      return a > n ? (a + 0.05) / (n + 0.05) : (n + 0.05) / (a + 0.05);
    }, rn = x, ur = Math.sqrt, Z = Math.pow, Bi = Math.min, zi = Math.max, en = Math.atan2, an = Math.abs, Hr = Math.cos, nn = Math.sin, Hi = Math.exp, tn = Math.PI, ji = function(r, e, a, n, o) {
      a === void 0 && (a = 1), n === void 0 && (n = 1), o === void 0 && (o = 1);
      var u = function(br) {
        return 360 * br / (2 * tn);
      }, t = function(br) {
        return 2 * tn * br / 360;
      };
      r = new rn(r), e = new rn(e);
      var i = Array.from(r.lab()), l = i[0], d = i[1], g = i[2], m = Array.from(e.lab()), h = m[0], w = m[1], y = m[2], A = (l + h) / 2, P = ur(Z(d, 2) + Z(g, 2)), O = ur(Z(w, 2) + Z(y, 2)), D = (P + O) / 2, V = 0.5 * (1 - ur(Z(D, 7) / (Z(D, 7) + Z(25, 7)))), U = d * (1 + V), Q = w * (1 + V), N = ur(Z(U, 2) + Z(g, 2)), p = ur(Z(Q, 2) + Z(y, 2)), k = (N + p) / 2, I = u(en(g, U)), C = u(en(y, Q)), X = I >= 0 ? I : I + 360, z = C >= 0 ? C : C + 360, R = an(X - z) > 180 ? (X + z + 360) / 2 : (X + z) / 2, T = 1 - 0.17 * Hr(t(R - 30)) + 0.24 * Hr(t(2 * R)) + 0.32 * Hr(t(3 * R + 6)) - 0.2 * Hr(t(4 * R - 63)), L = z - X;
      L = an(L) <= 180 ? L : z <= X ? L + 360 : L - 360, L = 2 * ur(N * p) * nn(t(L) / 2);
      var B = h - l, ar = p - N, vr = 1 + 0.015 * Z(A - 50, 2) / ur(20 + Z(A - 50, 2)), sr = 1 + 0.045 * k, Ar = 1 + 0.015 * k * T, Cr = 30 * Hi(-Z((R - 275) / 25, 2)), ir = 2 * ur(Z(k, 7) / (Z(k, 7) + Z(25, 7))), pr = -ir * nn(2 * t(Cr)), Pr = ur(Z(B / (a * vr), 2) + Z(ar / (n * sr), 2) + Z(L / (o * Ar), 2) + pr * (ar / (n * sr)) * (L / (o * Ar)));
      return zi(0, Bi(100, Pr));
    }, on = x, Gi = function(r, e, a) {
      a === void 0 && (a = "lab"), r = new on(r), e = new on(e);
      var n = r.get(a), o = e.get(a), u = 0;
      for (var t in n) {
        var i = (n[t] || 0) - (o[t] || 0);
        u += i * i;
      }
      return Math.sqrt(u);
    }, qi = x, Zi = function() {
      for (var r = [], e = arguments.length; e--; )
        r[e] = arguments[e];
      try {
        return new (Function.prototype.bind.apply(qi, [null].concat(r)))(), !0;
      } catch {
        return !1;
      }
    }, un = q, ln = be, Wi = {
      cool: function() {
        return ln([un.hsl(180, 1, 0.9), un.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return ln(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, jr = {
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
    }, _e = 0, fn = Object.keys(jr); _e < fn.length; _e += 1) {
      var cn = fn[_e];
      jr[cn.toLowerCase()] = jr[cn];
    }
    var Ui = jr, W = q;
    W.average = ii, W.bezier = gi, W.blend = $i, W.cubehelix = Mi, W.mix = W.interpolate = Ba, W.random = Si, W.scale = be, W.analyze = Qa.analyze, W.contrast = Li, W.deltaE = ji, W.distance = Gi, W.limits = Qa.limits, W.valid = Zi, W.scales = Wi, W.colors = _a, W.brewer = Ui;
    var Yi = W;
    return Yi;
  });
})(dn);
var Ji = dn.exports;
const Cl = /* @__PURE__ */ Xi(Ji);
function qr(c, v) {
  if (!(c instanceof v))
    throw new TypeError("Cannot call a class as a function");
}
function vn(c, v) {
  for (var f = 0; f < v.length; f++) {
    var s = v[f];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(c, s.key, s);
  }
}
function Ie(c, v, f) {
  return v && vn(c.prototype, v), f && vn(c, f), c;
}
function j(c, v, f) {
  return v in c ? Object.defineProperty(c, v, {
    value: f,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[v] = f, c;
}
function tr() {
  return tr = Object.assign || function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var f = arguments[v];
      for (var s in f)
        Object.prototype.hasOwnProperty.call(f, s) && (c[s] = f[s]);
    }
    return c;
  }, tr.apply(this, arguments);
}
function sn(c, v) {
  var f = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(c);
    v && (s = s.filter(function(_) {
      return Object.getOwnPropertyDescriptor(c, _).enumerable;
    })), f.push.apply(f, s);
  }
  return f;
}
function Qi(c) {
  for (var v = 1; v < arguments.length; v++) {
    var f = arguments[v] != null ? arguments[v] : {};
    v % 2 ? sn(Object(f), !0).forEach(function(s) {
      j(c, s, f[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(f)) : sn(Object(f)).forEach(function(s) {
      Object.defineProperty(c, s, Object.getOwnPropertyDescriptor(f, s));
    });
  }
  return c;
}
function Me(c, v) {
  if (typeof v != "function" && v !== null)
    throw new TypeError("Super expression must either be null or a function");
  c.prototype = Object.create(v && v.prototype, {
    constructor: {
      value: c,
      writable: !0,
      configurable: !0
    }
  }), v && xe(c, v);
}
function Gr(c) {
  return Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
    return f.__proto__ || Object.getPrototypeOf(f);
  }, Gr(c);
}
function xe(c, v) {
  return xe = Object.setPrototypeOf || function(s, _) {
    return s.__proto__ = _, s;
  }, xe(c, v);
}
function Ki() {
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
function rl(c, v) {
  if (c == null)
    return {};
  var f = {}, s = Object.keys(c), _, $;
  for ($ = 0; $ < s.length; $++)
    _ = s[$], !(v.indexOf(_) >= 0) && (f[_] = c[_]);
  return f;
}
function Zr(c, v) {
  if (c == null)
    return {};
  var f = rl(c, v), s, _;
  if (Object.getOwnPropertySymbols) {
    var $ = Object.getOwnPropertySymbols(c);
    for (_ = 0; _ < $.length; _++)
      s = $[_], !(v.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(c, s) && (f[s] = c[s]);
  }
  return f;
}
function nr(c) {
  if (c === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return c;
}
function el(c, v) {
  return v && (typeof v == "object" || typeof v == "function") ? v : nr(c);
}
function Pe(c) {
  var v = Ki();
  return function() {
    var s = Gr(c), _;
    if (v) {
      var $ = Gr(this).constructor;
      _ = Reflect.construct(s, arguments, $);
    } else
      _ = s.apply(this, arguments);
    return el(this, _);
  };
}
function al(c, v) {
  return ol(c) || il(c, v) || gn(c, v) || fl();
}
function nl(c) {
  return tl(c) || ul(c) || gn(c) || ll();
}
function tl(c) {
  if (Array.isArray(c))
    return Ae(c);
}
function ol(c) {
  if (Array.isArray(c))
    return c;
}
function ul(c) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(c))
    return Array.from(c);
}
function il(c, v) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(c)))) {
    var f = [], s = !0, _ = !1, $ = void 0;
    try {
      for (var M = c[Symbol.iterator](), S; !(s = (S = M.next()).done) && (f.push(S.value), !(v && f.length === v)); s = !0)
        ;
    } catch (F) {
      _ = !0, $ = F;
    } finally {
      try {
        !s && M.return != null && M.return();
      } finally {
        if (_)
          throw $;
      }
    }
    return f;
  }
}
function gn(c, v) {
  if (c) {
    if (typeof c == "string")
      return Ae(c, v);
    var f = Object.prototype.toString.call(c).slice(8, -1);
    if (f === "Object" && c.constructor && (f = c.constructor.name), f === "Map" || f === "Set")
      return Array.from(c);
    if (f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))
      return Ae(c, v);
  }
}
function Ae(c, v) {
  (v == null || v > c.length) && (v = c.length);
  for (var f = 0, s = new Array(v); f < v; f++)
    s[f] = c[f];
  return s;
}
function ll() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cl = function c(v) {
  var f = this, s = v.expanded, _ = s === void 0 ? [] : s, $ = v.allowMultipleExpanded, M = $ === void 0 ? !1 : $, S = v.allowZeroExpanded, F = S === void 0 ? !1 : S;
  qr(this, c), j(this, "expanded", void 0), j(this, "allowMultipleExpanded", void 0), j(this, "allowZeroExpanded", void 0), j(this, "toggleExpanded", function(E) {
    if (f.isItemDisabled(E))
      return f;
    var Y = f.isItemExpanded(E);
    return Y ? f.augment({
      expanded: f.expanded.filter(function(J) {
        return J !== E;
      })
    }) : f.augment({
      expanded: f.allowMultipleExpanded ? [].concat(nl(f.expanded), [E]) : [E]
    });
  }), j(this, "isItemDisabled", function(E) {
    var Y = f.isItemExpanded(E), J = f.expanded.length === 1;
    return !!(Y && !f.allowZeroExpanded && J);
  }), j(this, "isItemExpanded", function(E) {
    return f.expanded.indexOf(E) !== -1;
  }), j(this, "getPanelAttributes", function(E, Y) {
    var J = Y ?? f.isItemExpanded(E);
    return {
      role: f.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": f.allowMultipleExpanded ? !J : void 0,
      "aria-labelledby": f.getButtonId(E),
      id: f.getPanelId(E),
      hidden: J ? void 0 : !0
    };
  }), j(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), j(this, "getButtonAttributes", function(E, Y) {
    var J = Y ?? f.isItemExpanded(E), dr = f.isItemDisabled(E);
    return {
      id: f.getButtonId(E),
      "aria-disabled": dr,
      "aria-expanded": J,
      "aria-controls": f.getPanelId(E),
      role: "button",
      tabIndex: 0
    };
  }), j(this, "getPanelId", function(E) {
    return "accordion__panel-".concat(E);
  }), j(this, "getButtonId", function(E) {
    return "accordion__heading-".concat(E);
  }), j(this, "augment", function(E) {
    return new c(Qi({
      expanded: f.expanded,
      allowMultipleExpanded: f.allowMultipleExpanded,
      allowZeroExpanded: f.allowZeroExpanded
    }, E));
  }), this.expanded = _, this.allowMultipleExpanded = M, this.allowZeroExpanded = F;
}, hn = /* @__PURE__ */ H.createContext(null), pn = /* @__PURE__ */ function(c) {
  Me(f, c);
  var v = Pe(f);
  function f() {
    var s;
    qr(this, f);
    for (var _ = arguments.length, $ = new Array(_), M = 0; M < _; M++)
      $[M] = arguments[M];
    return s = v.call.apply(v, [this].concat($)), j(nr(s), "state", new cl({
      expanded: s.props.preExpanded,
      allowMultipleExpanded: s.props.allowMultipleExpanded,
      allowZeroExpanded: s.props.allowZeroExpanded
    })), j(nr(s), "toggleExpanded", function(S) {
      s.setState(function(F) {
        return F.toggleExpanded(S);
      }, function() {
        s.props.onChange && s.props.onChange(s.state.expanded);
      });
    }), j(nr(s), "isItemDisabled", function(S) {
      return s.state.isItemDisabled(S);
    }), j(nr(s), "isItemExpanded", function(S) {
      return s.state.isItemExpanded(S);
    }), j(nr(s), "getPanelAttributes", function(S, F) {
      return s.state.getPanelAttributes(S, F);
    }), j(nr(s), "getHeadingAttributes", function() {
      return s.state.getHeadingAttributes();
    }), j(nr(s), "getButtonAttributes", function(S, F) {
      return s.state.getButtonAttributes(S, F);
    }), s;
  }
  return Ie(f, [{
    key: "render",
    value: function() {
      var _ = this.state, $ = _.allowZeroExpanded, M = _.allowMultipleExpanded;
      return /* @__PURE__ */ H.createElement(hn.Provider, {
        value: {
          allowMultipleExpanded: M,
          allowZeroExpanded: $,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]), f;
}(H.PureComponent);
j(pn, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var bn = /* @__PURE__ */ function(c) {
  Me(f, c);
  var v = Pe(f);
  function f() {
    var s;
    qr(this, f);
    for (var _ = arguments.length, $ = new Array(_), M = 0; M < _; M++)
      $[M] = arguments[M];
    return s = v.call.apply(v, [this].concat($)), j(nr(s), "renderChildren", function(S) {
      return S ? s.props.children(S) : null;
    }), s;
  }
  return Ie(f, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ H.createElement(hn.Consumer, null, this.renderChildren);
    }
  }]), f;
}(H.PureComponent), Il = function(v) {
  var f = v.className, s = f === void 0 ? "accordion" : f, _ = v.allowMultipleExpanded, $ = v.allowZeroExpanded, M = v.onChange, S = v.preExpanded, F = Zr(v, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ H.createElement(pn, {
    preExpanded: S,
    allowMultipleExpanded: _,
    allowZeroExpanded: $,
    onChange: M
  }, /* @__PURE__ */ H.createElement("div", tr({
    "data-accordion-component": "Accordion",
    className: s
  }, F)));
}, Ce;
(function(c) {
  c.Accordion = "Accordion", c.AccordionItem = "AccordionItem", c.AccordionItemButton = "AccordionItemButton", c.AccordionItemHeading = "AccordionItemHeading", c.AccordionItemPanel = "AccordionItemPanel";
})(Ce || (Ce = {}));
var mn = Ce, vl = 0, Ee = vl;
function sl() {
  var c = Ee;
  return Ee = Ee + 1, "raa-".concat(c);
}
var dl = /[\u0009\u000a\u000c\u000d\u0020]/g;
function Nr(c) {
  return c === "" || dl.test(c) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(c, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var yn = /* @__PURE__ */ H.createContext(null), gl = function(v) {
  var f = v.children, s = v.uuid, _ = v.accordionContext, $ = v.dangerouslySetExpanded, M = function() {
    _.toggleExpanded(s);
  }, S = function(E) {
    var Y = $ ?? E.isItemExpanded(s), J = E.isItemDisabled(s), dr = E.getPanelAttributes(s, $), Or = E.getHeadingAttributes(s), or = E.getButtonAttributes(s, $);
    return /* @__PURE__ */ H.createElement(yn.Provider, {
      value: {
        uuid: s,
        expanded: Y,
        disabled: J,
        toggleExpanded: M,
        panelAttributes: dr,
        headingAttributes: Or,
        buttonAttributes: or
      }
    }, f);
  };
  return /* @__PURE__ */ H.createElement(bn, null, S);
}, hl = function(v) {
  return /* @__PURE__ */ H.createElement(bn, null, function(f) {
    return /* @__PURE__ */ H.createElement(gl, tr({}, v, {
      accordionContext: f
    }));
  });
}, Wr = function(v) {
  var f = v.children, s = function($) {
    return $ ? f($) : null;
  };
  return /* @__PURE__ */ H.createElement(yn.Consumer, null, s);
}, pl = function(v) {
  var f = v.uuid, s = v.dangerouslySetExpanded, _ = v.className, $ = _ === void 0 ? "accordion__item" : _, M = v.activeClassName, S = Zr(v, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), F = H.useState(sl()), E = al(F, 1), Y = E[0], J = f ?? Y, dr = function(or) {
    var b = or.expanded, G = b && M ? M : $;
    return /* @__PURE__ */ H.createElement("div", tr({
      "data-accordion-component": "AccordionItem",
      className: G
    }, S));
  };
  return Nr(J.toString()), S.id && Nr(S.id), /* @__PURE__ */ H.createElement(hl, {
    uuid: J,
    dangerouslySetExpanded: s
  }, /* @__PURE__ */ H.createElement(Wr, null, dr));
};
pl.displayName = mn.AccordionItem;
function wn(c) {
  return c && (c.matches('[data-accordion-component="Accordion"]') ? c : wn(c.parentElement));
}
function Ur(c) {
  var v = wn(c);
  return v && Array.from(v.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function bl(c) {
  var v = Ur(c) || [], f = v[0];
  f && f.focus();
}
function ml(c) {
  var v = Ur(c) || [], f = v[v.length - 1];
  f && f.focus();
}
function yl(c) {
  var v = Ur(c) || [], f = v.indexOf(c);
  if (f !== -1) {
    var s = v[f + 1];
    s && s.focus();
  }
}
function wl(c) {
  var v = Ur(c) || [], f = v.indexOf(c);
  if (f !== -1) {
    var s = v[f - 1];
    s && s.focus();
  }
}
var lr = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, _l = function(v) {
  var f = v.toggleExpanded, s = v.className, _ = s === void 0 ? "accordion__button" : s, $ = Zr(v, ["toggleExpanded", "className"]), M = function(F) {
    var E = F.key;
    if ((E === lr.ENTER || E === lr.SPACE || E === lr.SPACE_DEPRECATED) && (F.preventDefault(), f()), F.target instanceof HTMLElement)
      switch (E) {
        case lr.HOME: {
          F.preventDefault(), bl(F.target);
          break;
        }
        case lr.END: {
          F.preventDefault(), ml(F.target);
          break;
        }
        case lr.LEFT:
        case lr.UP: {
          F.preventDefault(), wl(F.target);
          break;
        }
        case lr.RIGHT:
        case lr.DOWN: {
          F.preventDefault(), yl(F.target);
          break;
        }
      }
  };
  return $.id && Nr($.id), /* @__PURE__ */ H.createElement("div", tr({
    className: _
  }, $, {
    role: "button",
    tabIndex: 0,
    onClick: f,
    onKeyDown: M,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Ml = function(v) {
  return /* @__PURE__ */ H.createElement(Wr, null, function(f) {
    var s = f.toggleExpanded, _ = f.buttonAttributes;
    return /* @__PURE__ */ H.createElement(_l, tr({
      toggleExpanded: s
    }, v, _));
  });
}, kl = {
  className: "accordion__heading",
  "aria-level": 3
}, $l = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, _n = /* @__PURE__ */ function(c) {
  Me(f, c);
  var v = Pe(f);
  function f() {
    var s;
    qr(this, f);
    for (var _ = arguments.length, $ = new Array(_), M = 0; M < _; M++)
      $[M] = arguments[M];
    return s = v.call.apply(v, [this].concat($)), j(nr(s), "ref", void 0), j(nr(s), "setRef", function(S) {
      s.ref = S;
    }), s;
  }
  return Ie(f, [{
    key: "componentDidUpdate",
    value: function() {
      f.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      f.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ H.createElement("div", tr({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function(_) {
      if (_ === void 0)
        throw new Error("ref is undefined");
      if (!(_.childElementCount === 1 && _.firstElementChild && _.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton"))
        throw new Error($l);
    }
  }]), f;
}(H.PureComponent);
j(_n, "defaultProps", kl);
var El = function(v) {
  return /* @__PURE__ */ H.createElement(Wr, null, function(f) {
    var s = f.headingAttributes;
    return v.id && Nr(v.id), /* @__PURE__ */ H.createElement(_n, tr({}, v, s));
  });
};
El.displayName = mn.AccordionItemHeading;
var Pl = function(v) {
  var f = v.className, s = f === void 0 ? "accordion__panel" : f, _ = v.id, $ = Zr(v, ["className", "id"]), M = function(F) {
    var E = F.panelAttributes;
    return _ && Nr(_), /* @__PURE__ */ H.createElement("div", tr({
      "data-accordion-component": "AccordionItemPanel",
      className: s
    }, $, E));
  };
  return /* @__PURE__ */ H.createElement(Wr, null, M);
};
export {
  Il as A,
  pl as a,
  El as b,
  Ml as c,
  Pl as d,
  Cl as e
};
