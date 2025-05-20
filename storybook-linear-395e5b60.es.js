import { R as Z } from "./storybook-index-f2fed736.es.js";
import { c as _, R as x, r as J, d as j, e as L, C as P, b as $, a as B, h as F, n as s, f as z, i as bn, g as vn, l as Mn } from "./storybook-linear-d485c82c.es.js";
import { t as f, d as v, a as g, b as M, c as wn, e as xn, f as Tn, u as Cn, g as Nn, h as On } from "./storybook-year-24bd1dc7.es.js";
const D = f((n) => {
  n.setTime(n - n.getMilliseconds());
}, (n, e) => {
  n.setTime(+n + e * v);
}, (n, e) => (e - n) / v, (n) => n.getUTCSeconds());
D.range;
const Q = f((n) => {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * v);
}, (n, e) => {
  n.setTime(+n + e * g);
}, (n, e) => (e - n) / g, (n) => n.getMinutes());
Q.range;
const V = f((n) => {
  n.setUTCSeconds(0, 0);
}, (n, e) => {
  n.setTime(+n + e * g);
}, (n, e) => (e - n) / g, (n) => n.getUTCMinutes());
V.range;
const nn = f((n) => {
  n.setTime(n - n.getMilliseconds() - n.getSeconds() * v - n.getMinutes() * g);
}, (n, e) => {
  n.setTime(+n + e * M);
}, (n, e) => (e - n) / M, (n) => n.getHours());
nn.range;
const en = f((n) => {
  n.setUTCMinutes(0, 0, 0);
}, (n, e) => {
  n.setTime(+n + e * M);
}, (n, e) => (e - n) / M, (n) => n.getUTCHours());
en.range;
const tn = f((n) => {
  n.setDate(1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setMonth(n.getMonth() + e);
}, (n, e) => e.getMonth() - n.getMonth() + (e.getFullYear() - n.getFullYear()) * 12, (n) => n.getMonth());
tn.range;
const rn = f((n) => {
  n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCMonth(n.getUTCMonth() + e);
}, (n, e) => e.getUTCMonth() - n.getUTCMonth() + (e.getUTCFullYear() - n.getUTCFullYear()) * 12, (n) => n.getUTCMonth());
rn.range;
var Rn = ["className", "innerRef"];
function U() {
  return U = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, U.apply(this, arguments);
}
function Un(n, e) {
  if (n == null)
    return {};
  var t = {}, i = Object.keys(n), r, a;
  for (a = 0; a < i.length; a++)
    r = i[a], !(e.indexOf(r) >= 0) && (t[r] = n[r]);
  return t;
}
function he(n) {
  var e = n.className, t = n.innerRef, i = Un(n, Rn);
  return /* @__PURE__ */ Z.createElement("rect", U({
    ref: t,
    className: _("visx-bar", e)
  }, i));
}
var In = ["className", "innerRef"];
function I() {
  return I = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, I.apply(this, arguments);
}
function Sn(n, e) {
  if (n == null)
    return {};
  var t = {}, i = Object.keys(n), r, a;
  for (a = 0; a < i.length; a++)
    r = i[a], !(e.indexOf(r) >= 0) && (t[r] = n[r]);
  return t;
}
function fe(n) {
  var e = n.className, t = n.innerRef, i = Sn(n, In);
  return /* @__PURE__ */ Z.createElement("circle", I({
    ref: t,
    className: _("visx-circle", e)
  }, i));
}
const an = Math.PI / 180, un = 180 / Math.PI, w = 18, on = 0.96422, sn = 1, ln = 0.82521, pn = 4 / 29, d = 6 / 29, cn = 3 * d * d, En = d * d * d;
function hn(n) {
  if (n instanceof l)
    return new l(n.l, n.a, n.b, n.opacity);
  if (n instanceof c)
    return fn(n);
  n instanceof x || (n = J(n));
  var e = R(n.r), t = R(n.g), i = R(n.b), r = C((0.2225045 * e + 0.7168786 * t + 0.0606169 * i) / sn), a, u;
  return e === t && t === i ? a = u = r : (a = C((0.4360747 * e + 0.3850649 * t + 0.1430804 * i) / on), u = C((0.0139322 * e + 0.0971045 * t + 0.7141733 * i) / ln)), new l(116 * r - 16, 500 * (a - r), 200 * (r - u), n.opacity);
}
function S(n, e, t, i) {
  return arguments.length === 1 ? hn(n) : new l(n, e, t, i ?? 1);
}
function l(n, e, t, i) {
  this.l = +n, this.a = +e, this.b = +t, this.opacity = +i;
}
j(l, S, L(P, {
  brighter(n) {
    return new l(this.l + w * (n ?? 1), this.a, this.b, this.opacity);
  },
  darker(n) {
    return new l(this.l - w * (n ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var n = (this.l + 16) / 116, e = isNaN(this.a) ? n : n + this.a / 500, t = isNaN(this.b) ? n : n - this.b / 200;
    return e = on * N(e), n = sn * N(n), t = ln * N(t), new x(
      O(3.1338561 * e - 1.6168667 * n - 0.4906146 * t),
      O(-0.9787684 * e + 1.9161415 * n + 0.033454 * t),
      O(0.0719453 * e - 0.2289914 * n + 1.4052427 * t),
      this.opacity
    );
  }
}));
function C(n) {
  return n > En ? Math.pow(n, 1 / 3) : n / cn + pn;
}
function N(n) {
  return n > d ? n * n * n : cn * (n - pn);
}
function O(n) {
  return 255 * (n <= 31308e-7 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055);
}
function R(n) {
  return (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
}
function Hn(n) {
  if (n instanceof c)
    return new c(n.h, n.c, n.l, n.opacity);
  if (n instanceof l || (n = hn(n)), n.a === 0 && n.b === 0)
    return new c(NaN, 0 < n.l && n.l < 100 ? 0 : NaN, n.l, n.opacity);
  var e = Math.atan2(n.b, n.a) * un;
  return new c(e < 0 ? e + 360 : e, Math.sqrt(n.a * n.a + n.b * n.b), n.l, n.opacity);
}
function E(n, e, t, i) {
  return arguments.length === 1 ? Hn(n) : new c(n, e, t, i ?? 1);
}
function c(n, e, t, i) {
  this.h = +n, this.c = +e, this.l = +t, this.opacity = +i;
}
function fn(n) {
  if (isNaN(n.h))
    return new l(n.l, 0, 0, n.opacity);
  var e = n.h * an;
  return new l(n.l, Math.cos(e) * n.c, Math.sin(e) * n.c, n.opacity);
}
j(c, E, L(P, {
  brighter(n) {
    return new c(this.h, this.c, this.l + w * (n ?? 1), this.opacity);
  },
  darker(n) {
    return new c(this.h, this.c, this.l - w * (n ?? 1), this.opacity);
  },
  rgb() {
    return fn(this).rgb();
  }
}));
var dn = -0.14861, Y = 1.78277, A = -0.29227, T = -0.90649, y = 1.97294, k = y * T, q = y * Y, K = Y * A - T * dn;
function jn(n) {
  if (n instanceof h)
    return new h(n.h, n.s, n.l, n.opacity);
  n instanceof x || (n = J(n));
  var e = n.r / 255, t = n.g / 255, i = n.b / 255, r = (K * i + k * e - q * t) / (K + k - q), a = i - r, u = (y * (t - r) - A * a) / T, o = Math.sqrt(u * u + a * a) / (y * r * (1 - r)), p = o ? Math.atan2(u, a) * un - 120 : NaN;
  return new h(p < 0 ? p + 360 : p, o, r, n.opacity);
}
function H(n, e, t, i) {
  return arguments.length === 1 ? jn(n) : new h(n, e, t, i ?? 1);
}
function h(n, e, t, i) {
  this.h = +n, this.s = +e, this.l = +t, this.opacity = +i;
}
j(h, H, L(P, {
  brighter(n) {
    return n = n == null ? $ : Math.pow($, n), new h(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? B : Math.pow(B, n), new h(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = isNaN(this.h) ? 0 : (this.h + 120) * an, e = +this.l, t = isNaN(this.s) ? 0 : this.s * e * (1 - e), i = Math.cos(n), r = Math.sin(n);
    return new x(
      255 * (e + t * (dn * i + Y * r)),
      255 * (e + t * (A * i + T * r)),
      255 * (e + t * (y * i)),
      this.opacity
    );
  }
}));
function gn(n) {
  return function(e, t) {
    var i = n((e = F(e)).h, (t = F(t)).h), r = s(e.s, t.s), a = s(e.l, t.l), u = s(e.opacity, t.opacity);
    return function(o) {
      return e.h = i(o), e.s = r(o), e.l = a(o), e.opacity = u(o), e + "";
    };
  };
}
const Ln = gn(z);
var Pn = gn(s);
function zn(n, e) {
  var t = s((n = S(n)).l, (e = S(e)).l), i = s(n.a, e.a), r = s(n.b, e.b), a = s(n.opacity, e.opacity);
  return function(u) {
    return n.l = t(u), n.a = i(u), n.b = r(u), n.opacity = a(u), n + "";
  };
}
function yn(n) {
  return function(e, t) {
    var i = n((e = E(e)).h, (t = E(t)).h), r = s(e.c, t.c), a = s(e.l, t.l), u = s(e.opacity, t.opacity);
    return function(o) {
      return e.h = i(o), e.c = r(o), e.l = a(o), e.opacity = u(o), e + "";
    };
  };
}
const Dn = yn(z);
var Yn = yn(s);
function mn(n) {
  return function e(t) {
    t = +t;
    function i(r, a) {
      var u = n((r = H(r)).h, (a = H(a)).h), o = s(r.s, a.s), p = s(r.l, a.l), m = s(r.opacity, a.opacity);
      return function(b) {
        return r.h = u(b), r.s = o(b), r.l = p(Math.pow(b, t)), r.opacity = m(b), r + "";
      };
    }
    return i.gamma = e, i;
  }(1);
}
const An = mn(z);
var $n = mn(s);
function Bn(n, e) {
  e.domain && ("nice" in n || "quantiles" in n || "padding" in n, n.domain(e.domain));
}
function Fn(n, e) {
  e.range && ("padding" in n, n.range(e.range));
}
function kn(n, e) {
  "align" in n && "align" in e && typeof e.align < "u" && n.align(e.align);
}
function qn(n, e) {
  "base" in n && "base" in e && typeof e.base < "u" && n.base(e.base);
}
function Kn(n, e) {
  "clamp" in n && "clamp" in e && typeof e.clamp < "u" && n.clamp(e.clamp);
}
function Gn(n, e) {
  "constant" in n && "constant" in e && typeof e.constant < "u" && n.constant(e.constant);
}
function Wn(n, e) {
  "exponent" in n && "exponent" in e && typeof e.exponent < "u" && n.exponent(e.exponent);
}
var G = {
  lab: zn,
  hcl: Dn,
  "hcl-long": Yn,
  hsl: Ln,
  "hsl-long": Pn,
  cubehelix: An,
  "cubehelix-long": $n,
  rgb: bn
};
function Xn(n) {
  switch (n) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return G[n];
  }
  var e = n.type, t = n.gamma, i = G[e];
  return typeof t > "u" ? i : i.gamma(t);
}
function Zn(n, e) {
  if ("interpolate" in e && "interpolate" in n && typeof e.interpolate < "u") {
    var t = Xn(e.interpolate);
    n.interpolate(t);
  }
}
var _n = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), Jn = "%Y-%m-%d %H:%M";
function Qn(n) {
  var e = n.tickFormat(1, Jn)(_n);
  return e === "2020-02-02 03:04";
}
var W = {
  day: wn,
  hour: nn,
  minute: Q,
  month: tn,
  second: D,
  week: xn,
  year: Tn
}, X = {
  day: Cn,
  hour: en,
  minute: V,
  month: rn,
  second: D,
  week: Nn,
  year: On
};
function Vn(n, e) {
  if ("nice" in e && typeof e.nice < "u" && "nice" in n) {
    var t = e.nice;
    if (typeof t == "boolean")
      t && n.nice();
    else if (typeof t == "number")
      n.nice(t);
    else {
      var i = n, r = Qn(i);
      if (typeof t == "string")
        i.nice(r ? X[t] : W[t]);
      else {
        var a = t.interval, u = t.step, o = (r ? X[a] : W[a]).every(u);
        o != null && i.nice(o);
      }
    }
  }
}
function ne(n, e) {
  "padding" in n && "padding" in e && typeof e.padding < "u" && n.padding(e.padding), "paddingInner" in n && "paddingInner" in e && typeof e.paddingInner < "u" && n.paddingInner(e.paddingInner), "paddingOuter" in n && "paddingOuter" in e && typeof e.paddingOuter < "u" && n.paddingOuter(e.paddingOuter);
}
function ee(n, e) {
  if (e.reverse) {
    var t = n.range().slice().reverse();
    "padding" in n, n.range(t);
  }
}
function te(n, e) {
  "round" in e && typeof e.round < "u" && (e.round && "interpolate" in e && typeof e.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", e) : "round" in n ? n.round(e.round) : "interpolate" in n && e.round && n.interpolate(vn));
}
function ie(n, e) {
  "unknown" in n && "unknown" in e && typeof e.unknown < "u" && n.unknown(e.unknown);
}
function re(n, e) {
  if ("zero" in e && e.zero === !0) {
    var t = n.domain(), i = t[0], r = t[1], a = r < i, u = a ? [r, i] : [i, r], o = u[0], p = u[1], m = [Math.min(0, o), Math.max(0, p)];
    n.domain(a ? m.reverse() : m);
  }
}
var ae = [
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
], ue = {
  domain: Bn,
  nice: Vn,
  zero: re,
  interpolate: Zn,
  round: te,
  align: kn,
  base: qn,
  clamp: Kn,
  constant: Gn,
  exponent: Wn,
  padding: ne,
  range: Fn,
  reverse: ee,
  unknown: ie
};
function oe() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  var i = new Set(e), r = ae.filter(function(a) {
    return i.has(a);
  });
  return function(u, o) {
    return typeof o < "u" && r.forEach(function(p) {
      ue[p](u, o);
    }), u;
  };
}
var se = oe("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function de(n) {
  return se(Mn(), n);
}
export {
  he as B,
  fe as C,
  nn as a,
  tn as b,
  de as c,
  oe as d,
  D as s,
  Q as t
};
