import { R as r, r as R } from "./storybook-index-45401197.es.js";
import { S as a8, r as Mn, d as xn, i as k7, T as z0, a as G0, U as On } from "./storybook-usa-region-graphic-b10bed44.es.js";
import { L as p6, a as In } from "./storybook-coveUpdateWorker-785760a1.es.js";
import { i as He, D as r8, C as o8, P as i8, A as _n, g as Rn, F as $n } from "./storybook-Filters-604223ce.es.js";
import { a as Bn, g as Un, i as Fn, b as zn } from "./storybook-isSolr-cb863e7a.es.js";
import { e as x5, a as C2, b as v2, c as E2, d as b2, A as x4 } from "./storybook-index-66852bf6.es.js";
import { P as Gn } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as f3, T as Jn } from "./storybook-index-e5bf02db.es.js";
import { u as We, p as Hn } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { d as O5, e as w3, s as z3, a as I5, f as je, b as _5, c as R5, g as Wn } from "./storybook-supported-geos-489a8060.es.js";
import { t as P0, p as m6, c as V4, a as jn, G as A0, b as qn, I as Vn, d as L2, g as i3, T as Yn } from "./storybook-InputToggle-375413f7.es.js";
import { D as Kn } from "./storybook-DataTransform-e292f51b.es.js";
import { L as qe, S as Zn, M as J0, D as Xn, i as Qn } from "./storybook-DataTable-c925ca2f.es.js";
import { f as l8 } from "./storybook-fetchRemoteData-8fd8b50f.es.js";
import { n as ea } from "./storybook-numberFromString-24623c03.es.js";
import { E as I3, L as Ve } from "./storybook-Loading-f180d060.es.js";
import { B as H5 } from "./storybook-Button-d74e310e.es.js";
import { n as ta, a as na, b as aa, d as ra, c as T2, G as W3, l as Ye } from "./storybook-Group-e6c0d0df.es.js";
import { P as H } from "./storybook-index-43433e35.es.js";
import { A as Y4 } from "./storybook-Accordion-798fc615.es.js";
import { T as X } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as U1, U as oa, c as ia, A as la } from "./storybook-Icon-736fb775.es.js";
import { c as K4, g as sa } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-MultiSelect-5b27422b.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-Table-12c53202.es.js";
import "./storybook-index-e502eacf.es.js";
function ca(e, t) {
  let n, a;
  if (t === void 0)
    for (const i of e)
      i != null && (n === void 0 ? i >= i && (n = a = i) : (n > i && (n = i), a < i && (a = i)));
  else {
    let i = -1;
    for (let c of e)
      (c = t(c, ++i, e)) != null && (n === void 0 ? c >= c && (n = a = c) : (n > c && (n = c), a < c && (a = c)));
  }
  return [n, a];
}
let G2 = class {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const n = this._partials;
    let a = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const c = n[i], p = t + c, m = Math.abs(t) < Math.abs(c) ? t - (p - c) : c - (p - t);
      m && (n[a++] = m), t = p;
    }
    return n[a] = t, this._n = a + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let n = this._n, a, i, c, p = 0;
    if (n > 0) {
      for (p = t[--n]; n > 0 && (a = p, i = t[--n], p = a + i, c = i - (p - a), !c); )
        ;
      n > 0 && (c < 0 && t[n - 1] < 0 || c > 0 && t[n - 1] > 0) && (i = c * 2, a = p + i, i == a - p && (p = a));
    }
    return p;
  }
};
function ua(e, t, n = ta) {
  if (!(!(a = e.length) || isNaN(t = +t))) {
    if (t <= 0 || a < 2)
      return +n(e[0], 0, e);
    if (t >= 1)
      return +n(e[a - 1], a - 1, e);
    var a, i = (a - 1) * t, c = Math.floor(i), p = +n(e[c], c, e), m = +n(e[c + 1], c + 1, e);
    return p + (m - p) * (i - c);
  }
}
function* pa(e) {
  for (const t of e)
    yield* t;
}
function Ke(e) {
  return Array.from(pa(e));
}
var ma = 1e-12;
function s8(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function da(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ga(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const fa = function e(t, n, a) {
  function i(c, p) {
    var m = c[0], g = c[1], d = c[2], u = p[0], s = p[1], o = p[2], l = u - m, f = s - g, S = l * l + f * f, C, E;
    if (S < ma)
      E = Math.log(o / d) / t, C = function(x) {
        return [
          m + x * l,
          g + x * f,
          d * Math.exp(t * x * E)
        ];
      };
    else {
      var y = Math.sqrt(S), v = (o * o - d * d + a * S) / (2 * d * n * y), b = (o * o - d * d - a * S) / (2 * o * n * y), T = Math.log(Math.sqrt(v * v + 1) - v), P = Math.log(Math.sqrt(b * b + 1) - b);
      E = (P - T) / t, C = function(x) {
        var A = x * E, D = s8(T), I = d / (n * y) * (D * ga(t * A + T) - da(T));
        return [
          m + I * l,
          g + I * f,
          d * D / s8(t * A + T)
        ];
      };
    }
    return C.duration = E * 1e3 * t / Math.SQRT2, C;
  }
  return i.rho = function(c) {
    var p = Math.max(1e-3, +c), m = p * p, g = m * m;
    return e(p, m, g);
  }, i;
}(Math.SQRT2, 2, 4);
function Ze() {
  var e = [], t = [], n = [], a;
  function i() {
    var p = 0, m = Math.max(1, t.length);
    for (n = new Array(m - 1); ++p < m; )
      n[p - 1] = ua(e, p / m);
    return c;
  }
  function c(p) {
    return p == null || isNaN(p = +p) ? a : t[ra(n, p)];
  }
  return c.invertExtent = function(p) {
    var m = t.indexOf(p);
    return m < 0 ? [NaN, NaN] : [
      m > 0 ? n[m - 1] : e[0],
      m < n.length ? n[m] : e[e.length - 1]
    ];
  }, c.domain = function(p) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let m of p)
      m != null && !isNaN(m = +m) && e.push(m);
    return e.sort(na), i();
  }, c.range = function(p) {
    return arguments.length ? (t = Array.from(p), i()) : t.slice();
  }, c.unknown = function(p) {
    return arguments.length ? (a = p, c) : a;
  }, c.quantiles = function() {
    return n.slice();
  }, c.copy = function() {
    return Ze().domain(e).range(t).unknown(a);
  }, aa.apply(c, arguments);
}
const Xe = {
  draw: function(e, t) {
    var n = Math.sqrt(t / m6);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, P0);
  }
};
var Qe = Math.sqrt(1 / 3), ha = Qe * 2;
const ya = {
  draw: function(e, t) {
    var n = Math.sqrt(t / ha), a = n * Qe;
    e.moveTo(0, -n), e.lineTo(a, 0), e.lineTo(0, n), e.lineTo(-a, 0), e.closePath();
  }
};
var Sa = 0.8908130915292852, et = Math.sin(m6 / 10) / Math.sin(7 * m6 / 10), Ca = Math.sin(P0 / 10) * et, va = -Math.cos(P0 / 10) * et;
const Ea = {
  draw: function(e, t) {
    var n = Math.sqrt(t * Sa), a = Ca * n, i = va * n;
    e.moveTo(0, -n), e.lineTo(a, i);
    for (var c = 1; c < 5; ++c) {
      var p = P0 * c / 5, m = Math.cos(p), g = Math.sin(p);
      e.lineTo(g * n, -m * n), e.lineTo(m * a - g * i, g * a + m * i);
    }
    e.closePath();
  }
}, ba = {
  draw: function(e, t) {
    var n = Math.sqrt(t), a = -n / 2;
    e.rect(a, a, n, n);
  }
};
var H0 = Math.sqrt(3);
const La = {
  draw: function(e, t) {
    var n = -Math.sqrt(t / (H0 * 3));
    e.moveTo(0, n * 2), e.lineTo(-H0 * n, -n), e.lineTo(H0 * n, -n), e.closePath();
  }
};
function U4() {
  var e = V4(Xe), t = V4(64), n = null;
  function a() {
    var i;
    if (n || (n = i = jn()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), i)
      return n = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : V4(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : V4(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (n = i ?? null, a) : n;
  }, a;
}
function o3(e) {
  return typeof e == "string" ? new a8([[document.querySelector(e)]], [document.documentElement]) : new a8([[e]], Mn);
}
function ka(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function E3(e, t) {
  if (e = ka(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var a = n.createSVGPoint();
      return a.x = e.clientX, a.y = e.clientY, a = a.matrixTransform(t.getScreenCTM().inverse()), [a.x, a.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const d6 = { capture: !0, passive: !1 };
function g6(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function wa(e) {
  var t = e.document.documentElement, n = o3(e).on("dragstart.drag", g6, d6);
  "onselectstart" in t ? n.on("selectstart.drag", g6, d6) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ta(e, t) {
  var n = e.document.documentElement, a = o3(e).on("dragstart.drag", null);
  t && (a.on("click.drag", g6, d6), setTimeout(function() {
    a.on("click.drag", null);
  }, 0)), "onselectstart" in n ? a.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var V1 = 1e-6, W5 = 1e-12, x1 = Math.PI, k2 = x1 / 2, c8 = x1 / 4, A2 = x1 * 2, d2 = 180 / x1, A1 = x1 / 180, t2 = Math.abs, tt = Math.atan, S3 = Math.atan2, O1 = Math.cos, Na = Math.exp, f6 = Math.hypot, Pa = Math.log, I1 = Math.sin, Aa = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, s3 = Math.sqrt, Da = Math.tan;
function Ma(e) {
  return e > 1 ? 0 : e < -1 ? x1 : Math.acos(e);
}
function A3(e) {
  return e > 1 ? k2 : e < -1 ? -k2 : Math.asin(e);
}
function u2() {
}
function j5(e, t) {
  e && p8.hasOwnProperty(e.type) && p8[e.type](e, t);
}
var u8 = {
  Feature: function(e, t) {
    j5(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      j5(n[a].geometry, t);
  }
}, p8 = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      e = n[a], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    h6(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      h6(n[a], t, 0);
  },
  Polygon: function(e, t) {
    m8(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      m8(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      j5(n[a], t);
  }
};
function h6(e, t, n) {
  var a = -1, i = e.length - n, c;
  for (t.lineStart(); ++a < i; )
    c = e[a], t.point(c[0], c[1], c[2]);
  t.lineEnd();
}
function m8(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    h6(e[n], t, 1);
  t.polygonEnd();
}
function m3(e, t) {
  e && u8.hasOwnProperty(e.type) ? u8[e.type](e, t) : j5(e, t);
}
function y6(e) {
  return [S3(e[1], e[0]), A3(e[2])];
}
function j3(e) {
  var t = e[0], n = e[1], a = O1(n);
  return [a * O1(t), a * I1(t), I1(n)];
}
function Z4(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function q5(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function W0(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function X4(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function S6(e) {
  var t = s3(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
var p4, V5, Y5, K5, Z5, X5, Q5, e0, C6, v6, E6, nt, at, h2, y2, S2, z2 = {
  sphere: u2,
  point: w7,
  lineStart: d8,
  lineEnd: g8,
  polygonStart: function() {
    z2.lineStart = Ia, z2.lineEnd = _a;
  },
  polygonEnd: function() {
    z2.lineStart = d8, z2.lineEnd = g8;
  }
};
function w7(e, t) {
  e *= A1, t *= A1;
  var n = O1(t);
  F4(n * O1(e), n * I1(e), I1(t));
}
function F4(e, t, n) {
  ++p4, Y5 += (e - Y5) / p4, K5 += (t - K5) / p4, Z5 += (n - Z5) / p4;
}
function d8() {
  z2.point = xa;
}
function xa(e, t) {
  e *= A1, t *= A1;
  var n = O1(t);
  h2 = n * O1(e), y2 = n * I1(e), S2 = I1(t), z2.point = Oa, F4(h2, y2, S2);
}
function Oa(e, t) {
  e *= A1, t *= A1;
  var n = O1(t), a = n * O1(e), i = n * I1(e), c = I1(t), p = S3(s3((p = y2 * c - S2 * i) * p + (p = S2 * a - h2 * c) * p + (p = h2 * i - y2 * a) * p), h2 * a + y2 * i + S2 * c);
  V5 += p, X5 += p * (h2 + (h2 = a)), Q5 += p * (y2 + (y2 = i)), e0 += p * (S2 + (S2 = c)), F4(h2, y2, S2);
}
function g8() {
  z2.point = w7;
}
function Ia() {
  z2.point = Ra;
}
function _a() {
  rt(nt, at), z2.point = w7;
}
function Ra(e, t) {
  nt = e, at = t, e *= A1, t *= A1, z2.point = rt;
  var n = O1(t);
  h2 = n * O1(e), y2 = n * I1(e), S2 = I1(t), F4(h2, y2, S2);
}
function rt(e, t) {
  e *= A1, t *= A1;
  var n = O1(t), a = n * O1(e), i = n * I1(e), c = I1(t), p = y2 * c - S2 * i, m = S2 * a - h2 * c, g = h2 * i - y2 * a, d = f6(p, m, g), u = A3(d), s = d && -u / d;
  C6.add(s * p), v6.add(s * m), E6.add(s * g), V5 += u, X5 += u * (h2 + (h2 = a)), Q5 += u * (y2 + (y2 = i)), e0 += u * (S2 + (S2 = c)), F4(h2, y2, S2);
}
function q3(e) {
  p4 = V5 = Y5 = K5 = Z5 = X5 = Q5 = e0 = 0, C6 = new G2(), v6 = new G2(), E6 = new G2(), m3(e, z2);
  var t = +C6, n = +v6, a = +E6, i = f6(t, n, a);
  return i < W5 && (t = X5, n = Q5, a = e0, V5 < V1 && (t = Y5, n = K5, a = Z5), i = f6(t, n, a), i < W5) ? [NaN, NaN] : [S3(n, t) * d2, A3(a / i) * d2];
}
function b6(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function L6(e, t) {
  return t2(e) > x1 && (e -= Math.round(e / A2) * A2), [e, t];
}
L6.invert = L6;
function ot(e, t, n) {
  return (e %= A2) ? t || n ? b6(h8(e), y8(t, n)) : h8(e) : t || n ? y8(t, n) : L6;
}
function f8(e) {
  return function(t, n) {
    return t += e, t2(t) > x1 && (t -= Math.round(t / A2) * A2), [t, n];
  };
}
function h8(e) {
  var t = f8(e);
  return t.invert = f8(-e), t;
}
function y8(e, t) {
  var n = O1(e), a = I1(e), i = O1(t), c = I1(t);
  function p(m, g) {
    var d = O1(g), u = O1(m) * d, s = I1(m) * d, o = I1(g), l = o * n + u * a;
    return [
      S3(s * i - l * c, u * n - o * a),
      A3(l * i + s * c)
    ];
  }
  return p.invert = function(m, g) {
    var d = O1(g), u = O1(m) * d, s = I1(m) * d, o = I1(g), l = o * i - s * c;
    return [
      S3(s * i + o * c, u * n + l * a),
      A3(l * n - u * a)
    ];
  }, p;
}
function $a(e) {
  e = ot(e[0] * A1, e[1] * A1, e.length > 2 ? e[2] * A1 : 0);
  function t(n) {
    return n = e(n[0] * A1, n[1] * A1), n[0] *= d2, n[1] *= d2, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * A1, n[1] * A1), n[0] *= d2, n[1] *= d2, n;
  }, t;
}
function Ba(e, t, n, a, i, c) {
  if (n) {
    var p = O1(t), m = I1(t), g = a * n;
    i == null ? (i = t + a * A2, c = t - g / 2) : (i = S8(p, i), c = S8(p, c), (a > 0 ? i < c : i > c) && (i += a * A2));
    for (var d, u = i; a > 0 ? u > c : u < c; u -= g)
      d = y6([p, -m * O1(u), -m * I1(u)]), e.point(d[0], d[1]);
  }
}
function S8(e, t) {
  t = j3(t), t[0] -= e, S6(t);
  var n = Ma(-t[1]);
  return ((-t[2] < 0 ? -n : n) + A2 - V1) % A2;
}
function it() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: u2,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function $5(e, t) {
  return t2(e[0] - t[0]) < V1 && t2(e[1] - t[1]) < V1;
}
function Q4(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function lt(e, t, n, a, i) {
  var c = [], p = [], m, g;
  if (e.forEach(function(f) {
    if (!((S = f.length - 1) <= 0)) {
      var S, C = f[0], E = f[S], y;
      if ($5(C, E)) {
        if (!C[2] && !E[2]) {
          for (i.lineStart(), m = 0; m < S; ++m)
            i.point((C = f[m])[0], C[1]);
          i.lineEnd();
          return;
        }
        E[0] += 2 * V1;
      }
      c.push(y = new Q4(C, f, null, !0)), p.push(y.o = new Q4(C, null, y, !1)), c.push(y = new Q4(E, f, null, !1)), p.push(y.o = new Q4(E, null, y, !0));
    }
  }), !!c.length) {
    for (p.sort(t), C8(c), C8(p), m = 0, g = p.length; m < g; ++m)
      p[m].e = n = !n;
    for (var d = c[0], u, s; ; ) {
      for (var o = d, l = !0; o.v; )
        if ((o = o.n) === d)
          return;
      u = o.z, i.lineStart();
      do {
        if (o.v = o.o.v = !0, o.e) {
          if (l)
            for (m = 0, g = u.length; m < g; ++m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.n.x, 1, i);
          o = o.n;
        } else {
          if (l)
            for (u = o.p.z, m = u.length - 1; m >= 0; --m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.p.x, -1, i);
          o = o.p;
        }
        o = o.o, u = o.z, l = !l;
      } while (!o.v);
      i.lineEnd();
    }
  }
}
function C8(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
function j0(e) {
  return t2(e[0]) <= x1 ? e[0] : Aa(e[0]) * ((t2(e[0]) + x1) % A2 - x1);
}
function st(e, t) {
  var n = j0(t), a = t[1], i = I1(a), c = [I1(n), -O1(n), 0], p = 0, m = 0, g = new G2();
  i === 1 ? a = k2 + V1 : i === -1 && (a = -k2 - V1);
  for (var d = 0, u = e.length; d < u; ++d)
    if (o = (s = e[d]).length)
      for (var s, o, l = s[o - 1], f = j0(l), S = l[1] / 2 + c8, C = I1(S), E = O1(S), y = 0; y < o; ++y, f = b, C = P, E = x, l = v) {
        var v = s[y], b = j0(v), T = v[1] / 2 + c8, P = I1(T), x = O1(T), A = b - f, D = A >= 0 ? 1 : -1, I = D * A, N = I > x1, F = C * P;
        if (g.add(S3(F * D * I1(I), E * x + F * O1(I))), p += N ? A + D * A2 : A, N ^ f >= n ^ b >= n) {
          var _ = q5(j3(l), j3(v));
          S6(_);
          var k = q5(c, _);
          S6(k);
          var h = (N ^ A >= 0 ? -1 : 1) * A3(k[2]);
          (a > h || a === h && (_[0] || _[1])) && (m += N ^ A >= 0 ? 1 : -1);
        }
      }
  return (p < -V1 || p < V1 && g < -W5) ^ m & 1;
}
function ct(e, t, n, a) {
  return function(i) {
    var c = t(i), p = it(), m = t(p), g = !1, d, u, s, o = {
      point: l,
      lineStart: S,
      lineEnd: C,
      polygonStart: function() {
        o.point = E, o.lineStart = y, o.lineEnd = v, u = [], d = [];
      },
      polygonEnd: function() {
        o.point = l, o.lineStart = S, o.lineEnd = C, u = Ke(u);
        var b = st(d, a);
        u.length ? (g || (i.polygonStart(), g = !0), lt(u, Fa, b, n, i)) : b && (g || (i.polygonStart(), g = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), g && (i.polygonEnd(), g = !1), u = d = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function l(b, T) {
      e(b, T) && i.point(b, T);
    }
    function f(b, T) {
      c.point(b, T);
    }
    function S() {
      o.point = f, c.lineStart();
    }
    function C() {
      o.point = l, c.lineEnd();
    }
    function E(b, T) {
      s.push([b, T]), m.point(b, T);
    }
    function y() {
      m.lineStart(), s = [];
    }
    function v() {
      E(s[0][0], s[0][1]), m.lineEnd();
      var b = m.clean(), T = p.result(), P, x = T.length, A, D, I;
      if (s.pop(), d.push(s), s = null, !!x) {
        if (b & 1) {
          if (D = T[0], (A = D.length - 1) > 0) {
            for (g || (i.polygonStart(), g = !0), i.lineStart(), P = 0; P < A; ++P)
              i.point((I = D[P])[0], I[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && b & 2 && T.push(T.pop().concat(T.shift())), u.push(T.filter(Ua));
      }
    }
    return o;
  };
}
function Ua(e) {
  return e.length > 1;
}
function Fa(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - k2 - V1 : k2 - e[1]) - ((t = t.x)[0] < 0 ? t[1] - k2 - V1 : k2 - t[1]);
}
const v8 = ct(
  function() {
    return !0;
  },
  za,
  Ja,
  [-x1, -k2]
);
function za(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(c, p) {
      var m = c > 0 ? x1 : -x1, g = t2(c - t);
      t2(g - x1) < V1 ? (e.point(t, n = (n + p) / 2 > 0 ? k2 : -k2), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), e.point(c, n), i = 0) : a !== m && g >= x1 && (t2(t - a) < V1 && (t -= a * V1), t2(c - m) < V1 && (c -= m * V1), n = Ga(t, n, c, p), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), i = 0), e.point(t = c, n = p), a = m;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Ga(e, t, n, a) {
  var i, c, p = I1(e - n);
  return t2(p) > V1 ? tt((I1(t) * (c = O1(a)) * I1(n) - I1(a) * (i = O1(t)) * I1(e)) / (i * c * p)) : (t + a) / 2;
}
function Ja(e, t, n, a) {
  var i;
  if (e == null)
    i = n * k2, a.point(-x1, i), a.point(0, i), a.point(x1, i), a.point(x1, 0), a.point(x1, -i), a.point(0, -i), a.point(-x1, -i), a.point(-x1, 0), a.point(-x1, i);
  else if (t2(e[0] - t[0]) > V1) {
    var c = e[0] < t[0] ? x1 : -x1;
    i = n * c / 2, a.point(-c, i), a.point(0, i), a.point(c, i);
  } else
    a.point(t[0], t[1]);
}
function Ha(e) {
  var t = O1(e), n = 6 * A1, a = t > 0, i = t2(t) > V1;
  function c(u, s, o, l) {
    Ba(l, e, n, o, u, s);
  }
  function p(u, s) {
    return O1(u) * O1(s) > t;
  }
  function m(u) {
    var s, o, l, f, S;
    return {
      lineStart: function() {
        f = l = !1, S = 1;
      },
      point: function(C, E) {
        var y = [C, E], v, b = p(C, E), T = a ? b ? 0 : d(C, E) : b ? d(C + (C < 0 ? x1 : -x1), E) : 0;
        if (!s && (f = l = b) && u.lineStart(), b !== l && (v = g(s, y), (!v || $5(s, v) || $5(y, v)) && (y[2] = 1)), b !== l)
          S = 0, b ? (u.lineStart(), v = g(y, s), u.point(v[0], v[1])) : (v = g(s, y), u.point(v[0], v[1], 2), u.lineEnd()), s = v;
        else if (i && s && a ^ b) {
          var P;
          !(T & o) && (P = g(y, s, !0)) && (S = 0, a ? (u.lineStart(), u.point(P[0][0], P[0][1]), u.point(P[1][0], P[1][1]), u.lineEnd()) : (u.point(P[1][0], P[1][1]), u.lineEnd(), u.lineStart(), u.point(P[0][0], P[0][1], 3)));
        }
        b && (!s || !$5(s, y)) && u.point(y[0], y[1]), s = y, l = b, o = T;
      },
      lineEnd: function() {
        l && u.lineEnd(), s = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (f && l) << 1;
      }
    };
  }
  function g(u, s, o) {
    var l = j3(u), f = j3(s), S = [1, 0, 0], C = q5(l, f), E = Z4(C, C), y = C[0], v = E - y * y;
    if (!v)
      return !o && u;
    var b = t * E / v, T = -t * y / v, P = q5(S, C), x = X4(S, b), A = X4(C, T);
    W0(x, A);
    var D = P, I = Z4(x, D), N = Z4(D, D), F = I * I - N * (Z4(x, x) - 1);
    if (!(F < 0)) {
      var _ = s3(F), k = X4(D, (-I - _) / N);
      if (W0(k, x), k = y6(k), !o)
        return k;
      var h = u[0], w = s[0], M = u[1], B = s[1], $;
      w < h && ($ = h, h = w, w = $);
      var W = w - h, z = t2(W - x1) < V1, q = z || W < V1;
      if (!z && B < M && ($ = M, M = B, B = $), q ? z ? M + B > 0 ^ k[1] < (t2(k[0] - h) < V1 ? M : B) : M <= k[1] && k[1] <= B : W > x1 ^ (h <= k[0] && k[0] <= w)) {
        var J = X4(D, (-I + _) / N);
        return W0(J, x), [k, y6(J)];
      }
    }
  }
  function d(u, s) {
    var o = a ? e : x1 - e, l = 0;
    return u < -o ? l |= 1 : u > o && (l |= 2), s < -o ? l |= 4 : s > o && (l |= 8), l;
  }
  return ct(p, m, c, a ? [0, -e] : [-x1, e - x1]);
}
function Wa(e, t, n, a, i, c) {
  var p = e[0], m = e[1], g = t[0], d = t[1], u = 0, s = 1, o = g - p, l = d - m, f;
  if (f = n - p, !(!o && f > 0)) {
    if (f /= o, o < 0) {
      if (f < u)
        return;
      f < s && (s = f);
    } else if (o > 0) {
      if (f > s)
        return;
      f > u && (u = f);
    }
    if (f = i - p, !(!o && f < 0)) {
      if (f /= o, o < 0) {
        if (f > s)
          return;
        f > u && (u = f);
      } else if (o > 0) {
        if (f < u)
          return;
        f < s && (s = f);
      }
      if (f = a - m, !(!l && f > 0)) {
        if (f /= l, l < 0) {
          if (f < u)
            return;
          f < s && (s = f);
        } else if (l > 0) {
          if (f > s)
            return;
          f > u && (u = f);
        }
        if (f = c - m, !(!l && f < 0)) {
          if (f /= l, l < 0) {
            if (f > s)
              return;
            f > u && (u = f);
          } else if (l > 0) {
            if (f < u)
              return;
            f < s && (s = f);
          }
          return u > 0 && (e[0] = p + u * o, e[1] = m + u * l), s < 1 && (t[0] = p + s * o, t[1] = m + s * l), !0;
        }
      }
    }
  }
}
var m4 = 1e9, e5 = -m4;
function ja(e, t, n, a) {
  function i(d, u) {
    return e <= d && d <= n && t <= u && u <= a;
  }
  function c(d, u, s, o) {
    var l = 0, f = 0;
    if (d == null || (l = p(d, s)) !== (f = p(u, s)) || g(d, u) < 0 ^ s > 0)
      do
        o.point(l === 0 || l === 3 ? e : n, l > 1 ? a : t);
      while ((l = (l + s + 4) % 4) !== f);
    else
      o.point(u[0], u[1]);
  }
  function p(d, u) {
    return t2(d[0] - e) < V1 ? u > 0 ? 0 : 3 : t2(d[0] - n) < V1 ? u > 0 ? 2 : 1 : t2(d[1] - t) < V1 ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function m(d, u) {
    return g(d.x, u.x);
  }
  function g(d, u) {
    var s = p(d, 1), o = p(u, 1);
    return s !== o ? s - o : s === 0 ? u[1] - d[1] : s === 1 ? d[0] - u[0] : s === 2 ? d[1] - u[1] : u[0] - d[0];
  }
  return function(d) {
    var u = d, s = it(), o, l, f, S, C, E, y, v, b, T, P, x = {
      point: A,
      lineStart: F,
      lineEnd: _,
      polygonStart: I,
      polygonEnd: N
    };
    function A(h, w) {
      i(h, w) && u.point(h, w);
    }
    function D() {
      for (var h = 0, w = 0, M = l.length; w < M; ++w)
        for (var B = l[w], $ = 1, W = B.length, z = B[0], q, J, Y = z[0], Z = z[1]; $ < W; ++$)
          q = Y, J = Z, z = B[$], Y = z[0], Z = z[1], J <= a ? Z > a && (Y - q) * (a - J) > (Z - J) * (e - q) && ++h : Z <= a && (Y - q) * (a - J) < (Z - J) * (e - q) && --h;
      return h;
    }
    function I() {
      u = s, o = [], l = [], P = !0;
    }
    function N() {
      var h = D(), w = P && h, M = (o = Ke(o)).length;
      (w || M) && (d.polygonStart(), w && (d.lineStart(), c(null, null, 1, d), d.lineEnd()), M && lt(o, m, h, c, d), d.polygonEnd()), u = d, o = l = f = null;
    }
    function F() {
      x.point = k, l && l.push(f = []), T = !0, b = !1, y = v = NaN;
    }
    function _() {
      o && (k(S, C), E && b && s.rejoin(), o.push(s.result())), x.point = A, b && u.lineEnd();
    }
    function k(h, w) {
      var M = i(h, w);
      if (l && f.push([h, w]), T)
        S = h, C = w, E = M, T = !1, M && (u.lineStart(), u.point(h, w));
      else if (M && b)
        u.point(h, w);
      else {
        var B = [y = Math.max(e5, Math.min(m4, y)), v = Math.max(e5, Math.min(m4, v))], $ = [h = Math.max(e5, Math.min(m4, h)), w = Math.max(e5, Math.min(m4, w))];
        Wa(B, $, e, t, n, a) ? (b || (u.lineStart(), u.point(B[0], B[1])), u.point($[0], $[1]), M || u.lineEnd(), P = !1) : M && (u.lineStart(), u.point(h, w), P = !1);
      }
      y = h, v = w, b = M;
    }
    return x;
  };
}
var k6, w6, B5, U5, V3 = {
  sphere: u2,
  point: u2,
  lineStart: qa,
  lineEnd: u2,
  polygonStart: u2,
  polygonEnd: u2
};
function qa() {
  V3.point = Ya, V3.lineEnd = Va;
}
function Va() {
  V3.point = V3.lineEnd = u2;
}
function Ya(e, t) {
  e *= A1, t *= A1, w6 = e, B5 = I1(t), U5 = O1(t), V3.point = Ka;
}
function Ka(e, t) {
  e *= A1, t *= A1;
  var n = I1(t), a = O1(t), i = t2(e - w6), c = O1(i), p = I1(i), m = a * p, g = U5 * n - B5 * a * c, d = B5 * n + U5 * a * c;
  k6.add(S3(s3(m * m + g * g), d)), w6 = e, B5 = n, U5 = a;
}
function Za(e) {
  return k6 = new G2(), m3(e, V3), +k6;
}
var T6 = [null, null], Xa = { type: "LineString", coordinates: T6 };
function N6(e, t) {
  return T6[0] = e, T6[1] = t, Za(Xa);
}
var E8 = {
  Feature: function(e, t) {
    return t0(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      if (t0(n[a].geometry, t))
        return !0;
    return !1;
  }
}, b8 = {
  Sphere: function() {
    return !0;
  },
  Point: function(e, t) {
    return L8(e.coordinates, t);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (L8(n[a], t))
        return !0;
    return !1;
  },
  LineString: function(e, t) {
    return k8(e.coordinates, t);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (k8(n[a], t))
        return !0;
    return !1;
  },
  Polygon: function(e, t) {
    return w8(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      if (w8(n[a], t))
        return !0;
    return !1;
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      if (t0(n[a], t))
        return !0;
    return !1;
  }
};
function t0(e, t) {
  return e && b8.hasOwnProperty(e.type) ? b8[e.type](e, t) : !1;
}
function L8(e, t) {
  return N6(e, t) === 0;
}
function k8(e, t) {
  for (var n, a, i, c = 0, p = e.length; c < p; c++) {
    if (a = N6(e[c], t), a === 0 || c > 0 && (i = N6(e[c], e[c - 1]), i > 0 && n <= i && a <= i && (n + a - i) * (1 - Math.pow((n - a) / i, 2)) < W5 * i))
      return !0;
    n = a;
  }
  return !1;
}
function w8(e, t) {
  return !!st(e.map(Qa), ut(t));
}
function Qa(e) {
  return e = e.map(ut), e.pop(), e;
}
function ut(e) {
  return [e[0] * A1, e[1] * A1];
}
function s4(e, t) {
  return (e && E8.hasOwnProperty(e.type) ? E8[e.type] : t0)(e, t);
}
const P6 = (e) => e;
var q0 = new G2(), A6 = new G2(), pt, mt, D6, M6, d3 = {
  point: u2,
  lineStart: u2,
  lineEnd: u2,
  polygonStart: function() {
    d3.lineStart = er, d3.lineEnd = nr;
  },
  polygonEnd: function() {
    d3.lineStart = d3.lineEnd = d3.point = u2, q0.add(t2(A6)), A6 = new G2();
  },
  result: function() {
    var e = q0 / 2;
    return q0 = new G2(), e;
  }
};
function er() {
  d3.point = tr;
}
function tr(e, t) {
  d3.point = dt, pt = D6 = e, mt = M6 = t;
}
function dt(e, t) {
  A6.add(M6 * e - D6 * t), D6 = e, M6 = t;
}
function nr() {
  dt(pt, mt);
}
const T8 = d3;
var Y3 = 1 / 0, n0 = Y3, O4 = -Y3, a0 = O4, ar = {
  point: rr,
  lineStart: u2,
  lineEnd: u2,
  polygonStart: u2,
  polygonEnd: u2,
  result: function() {
    var e = [[Y3, n0], [O4, a0]];
    return O4 = a0 = -(n0 = Y3 = 1 / 0), e;
  }
};
function rr(e, t) {
  e < Y3 && (Y3 = e), e > O4 && (O4 = e), t < n0 && (n0 = t), t > a0 && (a0 = t);
}
const r0 = ar;
var x6 = 0, O6 = 0, d4 = 0, o0 = 0, i0 = 0, B3 = 0, I6 = 0, _6 = 0, g4 = 0, gt, ft, K2, Z2, U2 = {
  point: D3,
  lineStart: N8,
  lineEnd: P8,
  polygonStart: function() {
    U2.lineStart = lr, U2.lineEnd = sr;
  },
  polygonEnd: function() {
    U2.point = D3, U2.lineStart = N8, U2.lineEnd = P8;
  },
  result: function() {
    var e = g4 ? [I6 / g4, _6 / g4] : B3 ? [o0 / B3, i0 / B3] : d4 ? [x6 / d4, O6 / d4] : [NaN, NaN];
    return x6 = O6 = d4 = o0 = i0 = B3 = I6 = _6 = g4 = 0, e;
  }
};
function D3(e, t) {
  x6 += e, O6 += t, ++d4;
}
function N8() {
  U2.point = or;
}
function or(e, t) {
  U2.point = ir, D3(K2 = e, Z2 = t);
}
function ir(e, t) {
  var n = e - K2, a = t - Z2, i = s3(n * n + a * a);
  o0 += i * (K2 + e) / 2, i0 += i * (Z2 + t) / 2, B3 += i, D3(K2 = e, Z2 = t);
}
function P8() {
  U2.point = D3;
}
function lr() {
  U2.point = cr;
}
function sr() {
  ht(gt, ft);
}
function cr(e, t) {
  U2.point = ht, D3(gt = K2 = e, ft = Z2 = t);
}
function ht(e, t) {
  var n = e - K2, a = t - Z2, i = s3(n * n + a * a);
  o0 += i * (K2 + e) / 2, i0 += i * (Z2 + t) / 2, B3 += i, i = Z2 * e - K2 * t, I6 += i * (K2 + e), _6 += i * (Z2 + t), g4 += i * 3, D3(K2 = e, Z2 = t);
}
const A8 = U2;
function yt(e) {
  this._context = e;
}
yt.prototype = {
  _radius: 4.5,
  pointRadius: function(e) {
    return this._radius = e, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(e, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(e, t);
        break;
      }
      default: {
        this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, A2);
        break;
      }
    }
  },
  result: u2
};
var R6 = new G2(), V0, St, Ct, f4, h4, l0 = {
  point: u2,
  lineStart: function() {
    l0.point = ur;
  },
  lineEnd: function() {
    V0 && vt(St, Ct), l0.point = u2;
  },
  polygonStart: function() {
    V0 = !0;
  },
  polygonEnd: function() {
    V0 = null;
  },
  result: function() {
    var e = +R6;
    return R6 = new G2(), e;
  }
};
function ur(e, t) {
  l0.point = vt, St = f4 = e, Ct = h4 = t;
}
function vt(e, t) {
  f4 -= e, h4 -= t, R6.add(s3(f4 * f4 + h4 * h4)), f4 = e, h4 = t;
}
const D8 = l0;
let M8, s0, x8, O8, I8 = class {
  constructor(t) {
    this._append = t == null ? Et : pr(t), this._radius = 4.5, this._ = "";
  }
  pointRadius(t) {
    return this._radius = +t, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(t, n) {
    switch (this._point) {
      case 0: {
        this._append`M${t},${n}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${t},${n}`;
        break;
      }
      default: {
        if (this._append`M${t},${n}`, this._radius !== x8 || this._append !== s0) {
          const a = this._radius, i = this._;
          this._ = "", this._append`m0,${a}a${a},${a} 0 1,1 0,${-2 * a}a${a},${a} 0 1,1 0,${2 * a}z`, x8 = a, s0 = this._append, O8 = this._, this._ = i;
        }
        this._ += O8;
        break;
      }
    }
  }
  result() {
    const t = this._;
    return this._ = "", t.length ? t : null;
  }
};
function Et(e) {
  let t = 1;
  this._ += e[0];
  for (const n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function pr(e) {
  const t = Math.floor(e);
  if (!(t >= 0))
    throw new RangeError(`invalid digits: ${e}`);
  if (t > 15)
    return Et;
  if (t !== M8) {
    const n = 10 ** t;
    M8 = t, s0 = function(i) {
      let c = 1;
      this._ += i[0];
      for (const p = i.length; c < p; ++c)
        this._ += Math.round(arguments[c] * n) / n + i[c];
    };
  }
  return s0;
}
function k4(e, t) {
  let n = 3, a = 4.5, i, c;
  function p(m) {
    return m && (typeof a == "function" && c.pointRadius(+a.apply(this, arguments)), m3(m, i(c))), c.result();
  }
  return p.area = function(m) {
    return m3(m, i(T8)), T8.result();
  }, p.measure = function(m) {
    return m3(m, i(D8)), D8.result();
  }, p.bounds = function(m) {
    return m3(m, i(r0)), r0.result();
  }, p.centroid = function(m) {
    return m3(m, i(A8)), A8.result();
  }, p.projection = function(m) {
    return arguments.length ? (i = m == null ? (e = null, P6) : (e = m).stream, p) : e;
  }, p.context = function(m) {
    return arguments.length ? (c = m == null ? (t = null, new I8(n)) : new yt(t = m), typeof a != "function" && c.pointRadius(a), p) : t;
  }, p.pointRadius = function(m) {
    return arguments.length ? (a = typeof m == "function" ? m : (c.pointRadius(+m), +m), p) : a;
  }, p.digits = function(m) {
    if (!arguments.length)
      return n;
    if (m == null)
      n = null;
    else {
      const g = Math.floor(m);
      if (!(g >= 0))
        throw new RangeError(`invalid digits: ${m}`);
      n = g;
    }
    return t === null && (c = new I8(n)), p;
  }, p.projection(e).digits(n).context(t);
}
function T7(e) {
  return function(t) {
    var n = new $6();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function $6() {
}
$6.prototype = {
  constructor: $6,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function N7(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), m3(n, e.stream(r0)), t(r0.result()), a != null && e.clipExtent(a), e;
}
function bt(e, t, n) {
  return N7(e, function(a) {
    var i = t[1][0] - t[0][0], c = t[1][1] - t[0][1], p = Math.min(i / (a[1][0] - a[0][0]), c / (a[1][1] - a[0][1])), m = +t[0][0] + (i - p * (a[1][0] + a[0][0])) / 2, g = +t[0][1] + (c - p * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * p).translate([m, g]);
  }, n);
}
function mr(e, t, n) {
  return bt(e, [[0, 0], t], n);
}
function dr(e, t, n) {
  return N7(e, function(a) {
    var i = +t, c = i / (a[1][0] - a[0][0]), p = (i - c * (a[1][0] + a[0][0])) / 2, m = -c * a[0][1];
    e.scale(150 * c).translate([p, m]);
  }, n);
}
function gr(e, t, n) {
  return N7(e, function(a) {
    var i = +t, c = i / (a[1][1] - a[0][1]), p = -c * a[0][0], m = (i - c * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * c).translate([p, m]);
  }, n);
}
var _8 = 16, fr = O1(30 * A1);
function R8(e, t) {
  return +t ? yr(e, t) : hr(e);
}
function hr(e) {
  return T7({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function yr(e, t) {
  function n(a, i, c, p, m, g, d, u, s, o, l, f, S, C) {
    var E = d - a, y = u - i, v = E * E + y * y;
    if (v > 4 * t && S--) {
      var b = p + o, T = m + l, P = g + f, x = s3(b * b + T * T + P * P), A = A3(P /= x), D = t2(t2(P) - 1) < V1 || t2(c - s) < V1 ? (c + s) / 2 : S3(T, b), I = e(D, A), N = I[0], F = I[1], _ = N - a, k = F - i, h = y * _ - E * k;
      (h * h / v > t || t2((E * _ + y * k) / v - 0.5) > 0.3 || p * o + m * l + g * f < fr) && (n(a, i, c, p, m, g, N, F, D, b /= x, T /= x, P, S, C), C.point(N, F), n(N, F, D, b, T, P, d, u, s, o, l, f, S, C));
    }
  }
  return function(a) {
    var i, c, p, m, g, d, u, s, o, l, f, S, C = {
      point: E,
      lineStart: y,
      lineEnd: b,
      polygonStart: function() {
        a.polygonStart(), C.lineStart = T;
      },
      polygonEnd: function() {
        a.polygonEnd(), C.lineStart = y;
      }
    };
    function E(A, D) {
      A = e(A, D), a.point(A[0], A[1]);
    }
    function y() {
      s = NaN, C.point = v, a.lineStart();
    }
    function v(A, D) {
      var I = j3([A, D]), N = e(A, D);
      n(s, o, u, l, f, S, s = N[0], o = N[1], u = A, l = I[0], f = I[1], S = I[2], _8, a), a.point(s, o);
    }
    function b() {
      C.point = E, a.lineEnd();
    }
    function T() {
      y(), C.point = P, C.lineEnd = x;
    }
    function P(A, D) {
      v(i = A, D), c = s, p = o, m = l, g = f, d = S, C.point = v;
    }
    function x() {
      n(s, o, u, l, f, S, c, p, i, m, g, d, _8, a), C.lineEnd = b, b();
    }
    return C;
  };
}
var Sr = T7({
  point: function(e, t) {
    this.stream.point(e * A1, t * A1);
  }
});
function Cr(e) {
  return T7({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function vr(e, t, n, a, i) {
  function c(p, m) {
    return p *= a, m *= i, [t + e * p, n - e * m];
  }
  return c.invert = function(p, m) {
    return [(p - t) / e * a, (n - m) / e * i];
  }, c;
}
function $8(e, t, n, a, i, c) {
  if (!c)
    return vr(e, t, n, a, i);
  var p = O1(c), m = I1(c), g = p * e, d = m * e, u = p / e, s = m / e, o = (m * n - p * t) / e, l = (m * t + p * n) / e;
  function f(S, C) {
    return S *= a, C *= i, [g * S - d * C + t, n - d * S - g * C];
  }
  return f.invert = function(S, C) {
    return [a * (u * S - s * C + o), i * (l - s * S - u * C)];
  }, f;
}
function Er(e) {
  return br(function() {
    return e;
  })();
}
function br(e) {
  var t, n = 150, a = 480, i = 250, c = 0, p = 0, m = 0, g = 0, d = 0, u, s = 0, o = 1, l = 1, f = null, S = v8, C = null, E, y, v, b = P6, T = 0.5, P, x, A, D, I;
  function N(h) {
    return A(h[0] * A1, h[1] * A1);
  }
  function F(h) {
    return h = A.invert(h[0], h[1]), h && [h[0] * d2, h[1] * d2];
  }
  N.stream = function(h) {
    return D && I === h ? D : D = Sr(Cr(u)(S(P(b(I = h)))));
  }, N.preclip = function(h) {
    return arguments.length ? (S = h, f = void 0, k()) : S;
  }, N.postclip = function(h) {
    return arguments.length ? (b = h, C = E = y = v = null, k()) : b;
  }, N.clipAngle = function(h) {
    return arguments.length ? (S = +h ? Ha(f = h * A1) : (f = null, v8), k()) : f * d2;
  }, N.clipExtent = function(h) {
    return arguments.length ? (b = h == null ? (C = E = y = v = null, P6) : ja(C = +h[0][0], E = +h[0][1], y = +h[1][0], v = +h[1][1]), k()) : C == null ? null : [[C, E], [y, v]];
  }, N.scale = function(h) {
    return arguments.length ? (n = +h, _()) : n;
  }, N.translate = function(h) {
    return arguments.length ? (a = +h[0], i = +h[1], _()) : [a, i];
  }, N.center = function(h) {
    return arguments.length ? (c = h[0] % 360 * A1, p = h[1] % 360 * A1, _()) : [c * d2, p * d2];
  }, N.rotate = function(h) {
    return arguments.length ? (m = h[0] % 360 * A1, g = h[1] % 360 * A1, d = h.length > 2 ? h[2] % 360 * A1 : 0, _()) : [m * d2, g * d2, d * d2];
  }, N.angle = function(h) {
    return arguments.length ? (s = h % 360 * A1, _()) : s * d2;
  }, N.reflectX = function(h) {
    return arguments.length ? (o = h ? -1 : 1, _()) : o < 0;
  }, N.reflectY = function(h) {
    return arguments.length ? (l = h ? -1 : 1, _()) : l < 0;
  }, N.precision = function(h) {
    return arguments.length ? (P = R8(x, T = h * h), k()) : s3(T);
  }, N.fitExtent = function(h, w) {
    return bt(N, h, w);
  }, N.fitSize = function(h, w) {
    return mr(N, h, w);
  }, N.fitWidth = function(h, w) {
    return dr(N, h, w);
  }, N.fitHeight = function(h, w) {
    return gr(N, h, w);
  };
  function _() {
    var h = $8(n, 0, 0, o, l, s).apply(null, t(c, p)), w = $8(n, a - h[0], i - h[1], o, l, s);
    return u = ot(m, g, d), x = b6(t, w), A = b6(u, x), P = R8(x, T), k();
  }
  function k() {
    return D = I = null, N;
  }
  return function() {
    return t = e.apply(this, arguments), N.invert = t.invert && F, _();
  };
}
function P7(e, t) {
  return [e, Pa(Da((k2 + t) / 2))];
}
P7.invert = function(e, t) {
  return [e, 2 * tt(Na(t)) - k2];
};
function Lr() {
  return kr(P7).scale(961 / A2);
}
function kr(e) {
  var t = Er(e), n = t.center, a = t.scale, i = t.translate, c = t.clipExtent, p = null, m, g, d;
  t.scale = function(s) {
    return arguments.length ? (a(s), u()) : a();
  }, t.translate = function(s) {
    return arguments.length ? (i(s), u()) : i();
  }, t.center = function(s) {
    return arguments.length ? (n(s), u()) : n();
  }, t.clipExtent = function(s) {
    return arguments.length ? (s == null ? p = m = g = d = null : (p = +s[0][0], m = +s[0][1], g = +s[1][0], d = +s[1][1]), u()) : p == null ? null : [[p, m], [g, d]];
  };
  function u() {
    var s = x1 * a(), o = t($a(t.rotate()).invert([0, 0]));
    return c(p == null ? [[o[0] - s, o[1] - s], [o[0] + s, o[1] + s]] : e === P7 ? [[Math.max(o[0] - s, p), m], [Math.min(o[0] + s, g), d]] : [[p, Math.max(o[1] - s, m)], [g, Math.min(o[1] + s, d)]]);
  }
  return u();
}
const t5 = (e) => () => e;
function wr(e, {
  sourceEvent: t,
  target: n,
  transform: a,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: a, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Y0(e) {
  e.stopImmediatePropagation();
}
function c4(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Tr(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Nr() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function B8() {
  return this.__zoom || k7;
}
function Pr(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Ar() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Dr(e, t, n) {
  var a = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], c = e.invertY(t[0][1]) - n[0][1], p = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i),
    p > c ? (c + p) / 2 : Math.min(0, c) || Math.max(0, p)
  );
}
function Mr() {
  var e = Tr, t = Nr, n = Dr, a = Pr, i = Ar, c = [0, 1 / 0], p = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], m = 250, g = fa, d = xn("start", "zoom", "end"), u, s, o, l = 500, f = 150, S = 0, C = 10;
  function E(k) {
    k.property("__zoom", B8).on("wheel.zoom", A, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", I).filter(i).on("touchstart.zoom", N).on("touchmove.zoom", F).on("touchend.zoom touchcancel.zoom", _).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(k, h, w, M) {
    var B = k.selection ? k.selection() : k;
    B.property("__zoom", B8), k !== B ? T(k, h, w, M) : B.interrupt().each(function() {
      P(this, arguments).event(M).start().zoom(null, typeof h == "function" ? h.apply(this, arguments) : h).end();
    });
  }, E.scaleBy = function(k, h, w, M) {
    E.scaleTo(k, function() {
      var B = this.__zoom.k, $ = typeof h == "function" ? h.apply(this, arguments) : h;
      return B * $;
    }, w, M);
  }, E.scaleTo = function(k, h, w, M) {
    E.transform(k, function() {
      var B = t.apply(this, arguments), $ = this.__zoom, W = w == null ? b(B) : typeof w == "function" ? w.apply(this, arguments) : w, z = $.invert(W), q = typeof h == "function" ? h.apply(this, arguments) : h;
      return n(v(y($, q), W, z), B, p);
    }, w, M);
  }, E.translateBy = function(k, h, w, M) {
    E.transform(k, function() {
      return n(this.__zoom.translate(
        typeof h == "function" ? h.apply(this, arguments) : h,
        typeof w == "function" ? w.apply(this, arguments) : w
      ), t.apply(this, arguments), p);
    }, null, M);
  }, E.translateTo = function(k, h, w, M, B) {
    E.transform(k, function() {
      var $ = t.apply(this, arguments), W = this.__zoom, z = M == null ? b($) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(k7.translate(z[0], z[1]).scale(W.k).translate(
        typeof h == "function" ? -h.apply(this, arguments) : -h,
        typeof w == "function" ? -w.apply(this, arguments) : -w
      ), $, p);
    }, M, B);
  };
  function y(k, h) {
    return h = Math.max(c[0], Math.min(c[1], h)), h === k.k ? k : new z0(h, k.x, k.y);
  }
  function v(k, h, w) {
    var M = h[0] - w[0] * k.k, B = h[1] - w[1] * k.k;
    return M === k.x && B === k.y ? k : new z0(k.k, M, B);
  }
  function b(k) {
    return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
  }
  function T(k, h, w, M) {
    k.on("start.zoom", function() {
      P(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var B = this, $ = arguments, W = P(B, $).event(M), z = t.apply(B, $), q = w == null ? b(z) : typeof w == "function" ? w.apply(B, $) : w, J = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), Y = B.__zoom, Z = typeof h == "function" ? h.apply(B, $) : h, f1 = g(Y.invert(q).concat(J / Y.k), Z.invert(q).concat(J / Z.k));
      return function(_1) {
        if (_1 === 1)
          _1 = Z;
        else {
          var Q1 = f1(_1), $1 = J / Q1[2];
          _1 = new z0($1, q[0] - Q1[0] * $1, q[1] - Q1[1] * $1);
        }
        W.zoom(null, _1);
      };
    });
  }
  function P(k, h, w) {
    return !w && k.__zooming || new x(k, h);
  }
  function x(k, h) {
    this.that = k, this.args = h, this.active = 0, this.sourceEvent = null, this.extent = t.apply(k, h), this.taps = 0;
  }
  x.prototype = {
    event: function(k) {
      return k && (this.sourceEvent = k), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(k, h) {
      return this.mouse && k !== "mouse" && (this.mouse[1] = h.invert(this.mouse[0])), this.touch0 && k !== "touch" && (this.touch0[1] = h.invert(this.touch0[0])), this.touch1 && k !== "touch" && (this.touch1[1] = h.invert(this.touch1[0])), this.that.__zoom = h, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(k) {
      var h = o3(this.that).datum();
      d.call(
        k,
        this.that,
        new wr(k, {
          sourceEvent: this.sourceEvent,
          target: E,
          type: k,
          transform: this.that.__zoom,
          dispatch: d
        }),
        h
      );
    }
  };
  function A(k, ...h) {
    if (!e.apply(this, arguments))
      return;
    var w = P(this, h).event(k), M = this.__zoom, B = Math.max(c[0], Math.min(c[1], M.k * Math.pow(2, a.apply(this, arguments)))), $ = E3(k);
    if (w.wheel)
      (w.mouse[0][0] !== $[0] || w.mouse[0][1] !== $[1]) && (w.mouse[1] = M.invert(w.mouse[0] = $)), clearTimeout(w.wheel);
    else {
      if (M.k === B)
        return;
      w.mouse = [$, M.invert($)], G0(this), w.start();
    }
    c4(k), w.wheel = setTimeout(W, f), w.zoom("mouse", n(v(y(M, B), w.mouse[0], w.mouse[1]), w.extent, p));
    function W() {
      w.wheel = null, w.end();
    }
  }
  function D(k, ...h) {
    if (o || !e.apply(this, arguments))
      return;
    var w = k.currentTarget, M = P(this, h, !0).event(k), B = o3(k.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", J, !0), $ = E3(k, w), W = k.clientX, z = k.clientY;
    wa(k.view), Y0(k), M.mouse = [$, this.__zoom.invert($)], G0(this), M.start();
    function q(Y) {
      if (c4(Y), !M.moved) {
        var Z = Y.clientX - W, f1 = Y.clientY - z;
        M.moved = Z * Z + f1 * f1 > S;
      }
      M.event(Y).zoom("mouse", n(v(M.that.__zoom, M.mouse[0] = E3(Y, w), M.mouse[1]), M.extent, p));
    }
    function J(Y) {
      B.on("mousemove.zoom mouseup.zoom", null), Ta(Y.view, M.moved), c4(Y), M.event(Y).end();
    }
  }
  function I(k, ...h) {
    if (e.apply(this, arguments)) {
      var w = this.__zoom, M = E3(k.changedTouches ? k.changedTouches[0] : k, this), B = w.invert(M), $ = w.k * (k.shiftKey ? 0.5 : 2), W = n(v(y(w, $), M, B), t.apply(this, h), p);
      c4(k), m > 0 ? o3(this).transition().duration(m).call(T, W, M, k) : o3(this).call(E.transform, W, M, k);
    }
  }
  function N(k, ...h) {
    if (e.apply(this, arguments)) {
      var w = k.touches, M = w.length, B = P(this, h, k.changedTouches.length === M).event(k), $, W, z, q;
      for (Y0(k), W = 0; W < M; ++W)
        z = w[W], q = E3(z, this), q = [q, this.__zoom.invert(q), z.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== q[2] && (B.touch1 = q, B.taps = 0) : (B.touch0 = q, $ = !0, B.taps = 1 + !!u);
      u && (u = clearTimeout(u)), $ && (B.taps < 2 && (s = q[0], u = setTimeout(function() {
        u = null;
      }, l)), G0(this), B.start());
    }
  }
  function F(k, ...h) {
    if (this.__zooming) {
      var w = P(this, h).event(k), M = k.changedTouches, B = M.length, $, W, z, q;
      for (c4(k), $ = 0; $ < B; ++$)
        W = M[$], z = E3(W, this), w.touch0 && w.touch0[2] === W.identifier ? w.touch0[0] = z : w.touch1 && w.touch1[2] === W.identifier && (w.touch1[0] = z);
      if (W = w.that.__zoom, w.touch1) {
        var J = w.touch0[0], Y = w.touch0[1], Z = w.touch1[0], f1 = w.touch1[1], _1 = (_1 = Z[0] - J[0]) * _1 + (_1 = Z[1] - J[1]) * _1, Q1 = (Q1 = f1[0] - Y[0]) * Q1 + (Q1 = f1[1] - Y[1]) * Q1;
        W = y(W, Math.sqrt(_1 / Q1)), z = [(J[0] + Z[0]) / 2, (J[1] + Z[1]) / 2], q = [(Y[0] + f1[0]) / 2, (Y[1] + f1[1]) / 2];
      } else if (w.touch0)
        z = w.touch0[0], q = w.touch0[1];
      else
        return;
      w.zoom("touch", n(v(W, z, q), w.extent, p));
    }
  }
  function _(k, ...h) {
    if (this.__zooming) {
      var w = P(this, h).event(k), M = k.changedTouches, B = M.length, $, W;
      for (Y0(k), o && clearTimeout(o), o = setTimeout(function() {
        o = null;
      }, l), $ = 0; $ < B; ++$)
        W = M[$], w.touch0 && w.touch0[2] === W.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === W.identifier && delete w.touch1;
      if (w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0)
        w.touch0[1] = this.__zoom.invert(w.touch0[0]);
      else if (w.end(), w.taps === 2 && (W = E3(W, this), Math.hypot(s[0] - W[0], s[1] - W[1]) < C)) {
        var z = o3(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(k) {
    return arguments.length ? (a = typeof k == "function" ? k : t5(+k), E) : a;
  }, E.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : t5(!!k), E) : e;
  }, E.touchable = function(k) {
    return arguments.length ? (i = typeof k == "function" ? k : t5(!!k), E) : i;
  }, E.extent = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : t5([[+k[0][0], +k[0][1]], [+k[1][0], +k[1][1]]]), E) : t;
  }, E.scaleExtent = function(k) {
    return arguments.length ? (c[0] = +k[0], c[1] = +k[1], E) : [c[0], c[1]];
  }, E.translateExtent = function(k) {
    return arguments.length ? (p[0][0] = +k[0][0], p[1][0] = +k[1][0], p[0][1] = +k[0][1], p[1][1] = +k[1][1], E) : [[p[0][0], p[0][1]], [p[1][0], p[1][1]]];
  }, E.constrain = function(k) {
    return arguments.length ? (n = k, E) : n;
  }, E.duration = function(k) {
    return arguments.length ? (m = +k, E) : m;
  }, E.interpolate = function(k) {
    return arguments.length ? (g = k, E) : g;
  }, E.on = function() {
    var k = d.on.apply(d, arguments);
    return k === d ? E : k;
  }, E.clickDistance = function(k) {
    return arguments.length ? (S = (k = +k) * k, E) : Math.sqrt(S);
  }, E.tapDistance = function(k) {
    return arguments.length ? (C = +k, E) : C;
  }, E;
}
const xr = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridArea: "content"
}, Or = ({ requiredColumns: e, className: t }) => /* @__PURE__ */ r.createElement("section", { className: t, style: xr }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Configuration Required"), /* @__PURE__ */ r.createElement("p", null, "Set", " ", e.map((n, a) => /* @__PURE__ */ r.createElement("span", { key: `missing-column-${a}` }, /* @__PURE__ */ r.createElement("strong", null, n), a + 1 < e.length && ", ")), " ", "columns in editor."))), n5 = ({ state: e }) => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, e.runtime.editorErrorMessage)));
function z4(e) {
  return e.split("-")[1];
}
function A7(e) {
  return e === "y" ? "height" : "width";
}
function N3(e) {
  return e.split("-")[0];
}
function G4(e) {
  return ["top", "bottom"].includes(N3(e)) ? "x" : "y";
}
function U8(e, t, n) {
  let { reference: a, floating: i } = e;
  const c = a.x + a.width / 2 - i.width / 2, p = a.y + a.height / 2 - i.height / 2, m = G4(t), g = A7(m), d = a[g] / 2 - i[g] / 2, u = m === "x";
  let s;
  switch (N3(t)) {
    case "top":
      s = { x: c, y: a.y - i.height };
      break;
    case "bottom":
      s = { x: c, y: a.y + a.height };
      break;
    case "right":
      s = { x: a.x + a.width, y: p };
      break;
    case "left":
      s = { x: a.x - i.width, y: p };
      break;
    default:
      s = { x: a.x, y: a.y };
  }
  switch (z4(t)) {
    case "start":
      s[m] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      s[m] += d * (n && u ? -1 : 1);
  }
  return s;
}
function Lt(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function w4(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function kt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: c, rects: p, elements: m, strategy: g } = e, { boundary: d = "clippingAncestors", rootBoundary: u = "viewport", elementContext: s = "floating", altBoundary: o = !1, padding: l = 0 } = t, f = Lt(l), S = m[o ? s === "floating" ? "reference" : "floating" : s], C = w4(await c.getClippingRect({ element: (n = await (c.isElement == null ? void 0 : c.isElement(S))) == null || n ? S : S.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(m.floating)), boundary: d, rootBoundary: u, strategy: g })), E = s === "floating" ? { ...p.floating, x: a, y: i } : p.reference, y = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m.floating)), v = await (c.isElement == null ? void 0 : c.isElement(y)) && await (c.getScale == null ? void 0 : c.getScale(y)) || { x: 1, y: 1 }, b = w4(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: E, offsetParent: y, strategy: g }) : E);
  return { top: (C.top - b.top + f.top) / v.y, bottom: (b.bottom - C.bottom + f.bottom) / v.y, left: (C.left - b.left + f.left) / v.x, right: (b.right - C.right + f.right) / v.x };
}
const Ir = Math.min, _r = Math.max;
function B6(e, t, n) {
  return _r(e, Ir(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Rr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function c0(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rr[t]);
}
function $r(e, t, n) {
  n === void 0 && (n = !1);
  const a = z4(e), i = G4(e), c = A7(i);
  let p = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (p = c0(p)), { main: p, cross: c0(p) };
}
const Br = { start: "end", end: "start" };
function K0(e) {
  return e.replace(/start|end/g, (t) => Br[t]);
}
const Ur = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: c, initialPlacement: p, platform: m, elements: g } = t, { mainAxis: d = !0, crossAxis: u = !0, fallbackPlacements: s, fallbackStrategy: o = "bestFit", fallbackAxisSideDirection: l = "none", flipAlignment: f = !0, ...S } = e, C = N3(a), E = N3(p) === p, y = await (m.isRTL == null ? void 0 : m.isRTL(g.floating)), v = s || (E || !f ? [c0(p)] : function(N) {
      const F = c0(N);
      return [K0(N), F, K0(F)];
    }(p));
    s || l === "none" || v.push(...function(N, F, _, k) {
      const h = z4(N);
      let w = function(M, B, $) {
        const W = ["left", "right"], z = ["right", "left"], q = ["top", "bottom"], J = ["bottom", "top"];
        switch (M) {
          case "top":
          case "bottom":
            return $ ? B ? z : W : B ? W : z;
          case "left":
          case "right":
            return B ? q : J;
          default:
            return [];
        }
      }(N3(N), _ === "start", k);
      return h && (w = w.map((M) => M + "-" + h), F && (w = w.concat(w.map(K0)))), w;
    }(p, f, l, y));
    const b = [p, ...v], T = await kt(t, S), P = [];
    let x = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (d && P.push(T[C]), u) {
      const { main: N, cross: F } = $r(a, c, y);
      P.push(T[N], T[F]);
    }
    if (x = [...x, { placement: a, overflows: P }], !P.every((N) => N <= 0)) {
      var A, D;
      const N = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, F = b[N];
      if (F)
        return { data: { index: N, overflows: x }, reset: { placement: F } };
      let _ = (D = x.find((k) => k.overflows[0] <= 0)) == null ? void 0 : D.placement;
      if (!_)
        switch (o) {
          case "bestFit": {
            var I;
            const k = (I = x.map((h) => [h.placement, h.overflows.filter((w) => w > 0).reduce((w, M) => w + M, 0)]).sort((h, w) => h[1] - w[1])[0]) == null ? void 0 : I[0];
            k && (_ = k);
            break;
          }
          case "initialPlacement":
            _ = p;
        }
      if (a !== _)
        return { reset: { placement: _ } };
    }
    return {};
  } };
}, Fr = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(c, p) {
      const { placement: m, platform: g, elements: d } = c, u = await (g.isRTL == null ? void 0 : g.isRTL(d.floating)), s = N3(m), o = z4(m), l = G4(m) === "x", f = ["left", "top"].includes(s) ? -1 : 1, S = u && l ? -1 : 1, C = typeof p == "function" ? p(c) : p;
      let { mainAxis: E, crossAxis: y, alignmentAxis: v } = typeof C == "number" ? { mainAxis: C, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...C };
      return o && typeof v == "number" && (y = o === "end" ? -1 * v : v), l ? { x: y * S, y: E * f } : { x: E * f, y: y * S };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, zr = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: c = !0, crossAxis: p = !1, limiter: m = { fn: (C) => {
      let { x: E, y } = C;
      return { x: E, y };
    } }, ...g } = e, d = { x: n, y: a }, u = await kt(t, g), s = G4(N3(i)), o = s === "x" ? "y" : "x";
    let l = d[s], f = d[o];
    if (c) {
      const C = s === "y" ? "bottom" : "right";
      l = B6(l + u[s === "y" ? "top" : "left"], l, l - u[C]);
    }
    if (p) {
      const C = o === "y" ? "bottom" : "right";
      f = B6(f + u[o === "y" ? "top" : "left"], f, f - u[C]);
    }
    const S = m.fn({ ...t, [s]: l, [o]: f });
    return { ...S, data: { x: S.x - n, y: S.y - a } };
  } };
};
function I2(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function e3(e) {
  return I2(e).getComputedStyle(e);
}
const F8 = Math.min, T4 = Math.max, u0 = Math.round;
function wt(e) {
  const t = e3(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, c = e.offsetHeight, p = u0(n) !== i || u0(a) !== c;
  return p && (n = i, a = c), { width: n, height: a, fallback: p };
}
function C3(e) {
  return Nt(e) ? (e.nodeName || "").toLowerCase() : "";
}
let a5;
function Tt() {
  if (a5)
    return a5;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (a5 = e.brands.map((t) => t.brand + "/" + t.version).join(" "), a5) : navigator.userAgent;
}
function t3(e) {
  return e instanceof I2(e).HTMLElement;
}
function h3(e) {
  return e instanceof I2(e).Element;
}
function Nt(e) {
  return e instanceof I2(e).Node;
}
function z8(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof I2(e).ShadowRoot || e instanceof ShadowRoot;
}
function D0(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = e3(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function Gr(e) {
  return ["table", "td", "th"].includes(C3(e));
}
function U6(e) {
  const t = /firefox/i.test(Tt()), n = e3(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const c = n.contain;
    return c != null && c.includes(i);
  });
}
function Pt() {
  return !/^((?!chrome|android).)*safari/i.test(Tt());
}
function D7(e) {
  return ["html", "body", "#document"].includes(C3(e));
}
function At(e) {
  return h3(e) ? e : e.contextElement;
}
const Dt = { x: 1, y: 1 };
function G3(e) {
  const t = At(e);
  if (!t3(t))
    return Dt;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: c } = wt(t);
  let p = (c ? u0(n.width) : n.width) / a, m = (c ? u0(n.height) : n.height) / i;
  return p && Number.isFinite(p) || (p = 1), m && Number.isFinite(m) || (m = 1), { x: p, y: m };
}
function I4(e, t, n, a) {
  var i, c;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const p = e.getBoundingClientRect(), m = At(e);
  let g = Dt;
  t && (a ? h3(a) && (g = G3(a)) : g = G3(e));
  const d = m ? I2(m) : window, u = !Pt() && n;
  let s = (p.left + (u && ((i = d.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / g.x, o = (p.top + (u && ((c = d.visualViewport) == null ? void 0 : c.offsetTop) || 0)) / g.y, l = p.width / g.x, f = p.height / g.y;
  if (m) {
    const S = I2(m), C = a && h3(a) ? I2(a) : a;
    let E = S.frameElement;
    for (; E && a && C !== S; ) {
      const y = G3(E), v = E.getBoundingClientRect(), b = getComputedStyle(E);
      v.x += (E.clientLeft + parseFloat(b.paddingLeft)) * y.x, v.y += (E.clientTop + parseFloat(b.paddingTop)) * y.y, s *= y.x, o *= y.y, l *= y.x, f *= y.y, s += v.x, o += v.y, E = I2(E).frameElement;
    }
  }
  return { width: l, height: f, top: o, right: s + l, bottom: o + f, left: s, x: s, y: o };
}
function y3(e) {
  return ((Nt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function M0(e) {
  return h3(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Mt(e) {
  return I4(y3(e)).left + M0(e).scrollLeft;
}
function _4(e) {
  if (C3(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || z8(e) && e.host || y3(e);
  return z8(t) ? t.host : t;
}
function xt(e) {
  const t = _4(e);
  return D7(t) ? t.ownerDocument.body : t3(t) && D0(t) ? t : xt(t);
}
function Ot(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = xt(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), c = I2(a);
  return i ? t.concat(c, c.visualViewport || [], D0(a) ? a : []) : t.concat(a, Ot(a));
}
function G8(e, t, n) {
  return t === "viewport" ? w4(function(a, i) {
    const c = I2(a), p = y3(a), m = c.visualViewport;
    let g = p.clientWidth, d = p.clientHeight, u = 0, s = 0;
    if (m) {
      g = m.width, d = m.height;
      const o = Pt();
      (o || !o && i === "fixed") && (u = m.offsetLeft, s = m.offsetTop);
    }
    return { width: g, height: d, x: u, y: s };
  }(e, n)) : h3(t) ? w4(function(a, i) {
    const c = I4(a, !0, i === "fixed"), p = c.top + a.clientTop, m = c.left + a.clientLeft, g = t3(a) ? G3(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * g.x, height: a.clientHeight * g.y, x: m * g.x, y: p * g.y };
  }(t, n)) : w4(function(a) {
    const i = y3(a), c = M0(a), p = a.ownerDocument.body, m = T4(i.scrollWidth, i.clientWidth, p.scrollWidth, p.clientWidth), g = T4(i.scrollHeight, i.clientHeight, p.scrollHeight, p.clientHeight);
    let d = -c.scrollLeft + Mt(a);
    const u = -c.scrollTop;
    return e3(p).direction === "rtl" && (d += T4(i.clientWidth, p.clientWidth) - m), { width: m, height: g, x: d, y: u };
  }(y3(e)));
}
function J8(e) {
  return t3(e) && e3(e).position !== "fixed" ? e.offsetParent : null;
}
function H8(e) {
  const t = I2(e);
  let n = J8(e);
  for (; n && Gr(n) && e3(n).position === "static"; )
    n = J8(n);
  return n && (C3(n) === "html" || C3(n) === "body" && e3(n).position === "static" && !U6(n)) ? t : n || function(a) {
    let i = _4(a);
    for (; t3(i) && !D7(i); ) {
      if (U6(i))
        return i;
      i = _4(i);
    }
    return null;
  }(e) || t;
}
function Jr(e, t, n) {
  const a = t3(t), i = y3(t), c = I4(e, !0, n === "fixed", t);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const m = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((C3(t) !== "body" || D0(i)) && (p = M0(t)), t3(t)) {
      const g = I4(t, !0);
      m.x = g.x + t.clientLeft, m.y = g.y + t.clientTop;
    } else
      i && (m.x = Mt(i));
  return { x: c.left + p.scrollLeft - m.x, y: c.top + p.scrollTop - m.y, width: c.width, height: c.height };
}
const Hr = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const c = n === "clippingAncestors" ? function(d, u) {
    const s = u.get(d);
    if (s)
      return s;
    let o = Ot(d).filter((C) => h3(C) && C3(C) !== "body"), l = null;
    const f = e3(d).position === "fixed";
    let S = f ? _4(d) : d;
    for (; h3(S) && !D7(S); ) {
      const C = e3(S), E = U6(S);
      (f ? E || l : E || C.position !== "static" || !l || !["absolute", "fixed"].includes(l.position)) ? l = C : o = o.filter((y) => y !== S), S = _4(S);
    }
    return u.set(d, o), o;
  }(t, this._c) : [].concat(n), p = [...c, a], m = p[0], g = p.reduce((d, u) => {
    const s = G8(t, u, i);
    return d.top = T4(s.top, d.top), d.right = F8(s.right, d.right), d.bottom = F8(s.bottom, d.bottom), d.left = T4(s.left, d.left), d;
  }, G8(t, m, i));
  return { width: g.right - g.left, height: g.bottom - g.top, x: g.left, y: g.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = t3(n), c = y3(n);
  if (n === c)
    return t;
  let p = { scrollLeft: 0, scrollTop: 0 }, m = { x: 1, y: 1 };
  const g = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((C3(n) !== "body" || D0(c)) && (p = M0(n)), t3(n))) {
    const d = I4(n);
    m = G3(n), g.x = d.x + n.clientLeft, g.y = d.y + n.clientTop;
  }
  return { width: t.width * m.x, height: t.height * m.y, x: t.x * m.x - p.scrollLeft * m.x + g.x, y: t.y * m.y - p.scrollTop * m.y + g.y };
}, isElement: h3, getDimensions: function(e) {
  return t3(e) ? wt(e) : e.getBoundingClientRect();
}, getOffsetParent: H8, getDocumentElement: y3, getScale: G3, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || H8, c = this.getDimensions;
  return { reference: Jr(t, await i(n), a), floating: { x: 0, y: 0, ...await c(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => e3(e).direction === "rtl" }, W8 = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: Hr, ...n }, c = { ...i.platform, _c: a };
  return (async (p, m, g) => {
    const { placement: d = "bottom", strategy: u = "absolute", middleware: s = [], platform: o } = g, l = s.filter(Boolean), f = await (o.isRTL == null ? void 0 : o.isRTL(m));
    if (o == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter((T) => {
      let { name: P } = T;
      return P === "autoPlacement" || P === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    p && m || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let S = await o.getElementRects({ reference: p, floating: m, strategy: u }), { x: C, y: E } = U8(S, d, f), y = d, v = {}, b = 0;
    for (let T = 0; T < l.length; T++) {
      const { name: P, fn: x } = l[T], { x: A, y: D, data: I, reset: N } = await x({ x: C, y: E, initialPlacement: d, placement: y, strategy: u, middlewareData: v, rects: S, platform: o, elements: { reference: p, floating: m } });
      C = A ?? C, E = D ?? E, v = { ...v, [P]: { ...v[P], ...I } }, b > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), N && b <= 50 && (b++, typeof N == "object" && (N.placement && (y = N.placement), N.rects && (S = N.rects === !0 ? await o.getElementRects({ reference: p, floating: m, strategy: u }) : N.rects), { x: C, y: E } = U8(S, y, f)), T = -1);
    }
    return { x: C, y: E, placement: y, strategy: u, middlewareData: v };
  })(e, t, { ...i, platform: c });
};
var c3, P3 = { exports: {} }, j8 = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
c3 = j8, function() {
  var e = r, t = 60103, n = 60106;
  c3.Fragment = 60107;
  var a = 60108, i = 60114, c = 60109, p = 60110, m = 60112, g = 60113, d = 60120, u = 60115, s = 60116, o = 60121, l = 60122, f = 60117, S = 60129, C = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var E = Symbol.for;
    t = E("react.element"), n = E("react.portal"), c3.Fragment = E("react.fragment"), a = E("react.strict_mode"), i = E("react.profiler"), c = E("react.provider"), p = E("react.context"), m = E("react.forward_ref"), g = E("react.suspense"), d = E("react.suspense_list"), u = E("react.memo"), s = E("react.lazy"), o = E("react.block"), l = E("react.server.block"), f = E("react.fundamental"), E("react.scope"), E("react.opaque.id"), S = E("react.debug_trace_mode"), E("react.offscreen"), C = E("react.legacy_hidden");
  }
  var y = typeof Symbol == "function" && Symbol.iterator, v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function b(V) {
    for (var m1 = arguments.length, i1 = new Array(m1 > 1 ? m1 - 1 : 0), g1 = 1; g1 < m1; g1++)
      i1[g1 - 1] = arguments[g1];
    T("error", V, i1);
  }
  function T(V, m1, i1) {
    var g1 = v.ReactDebugCurrentFrame, h1 = "";
    if (D) {
      var c1 = x(D.type), S1 = D._owner;
      h1 += function(r1, o2, b1) {
        var p1 = "";
        if (o2) {
          var n1 = o2.fileName, Q = n1.replace(P, "");
          if (/^index\./.test(Q)) {
            var n2 = n1.match(P);
            if (n2) {
              var a1 = n2[1];
              a1 && (Q = a1.replace(P, "") + "/" + Q);
            }
          }
          p1 = " (at " + Q + ":" + o2.lineNumber + ")";
        } else
          b1 && (p1 = " (created by " + b1 + ")");
        return `
    in ` + (r1 || "Unknown") + p1;
      }(c1, D._source, S1 && x(S1.type));
    }
    (h1 += g1.getStackAddendum()) !== "" && (m1 += "%s", i1 = i1.concat([h1]));
    var u1 = i1.map(function(r1) {
      return "" + r1;
    });
    u1.unshift("Warning: " + m1), Function.prototype.apply.call(console[V], console, u1);
  }
  var P = /^(.*)[\\\/]/;
  function x(V) {
    if (V == null)
      return null;
    if (typeof V.tag == "number" && b("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof V == "function")
      return V.displayName || V.name || null;
    if (typeof V == "string")
      return V;
    switch (V) {
      case c3.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case i:
        return "Profiler";
      case a:
        return "StrictMode";
      case g:
        return "Suspense";
      case d:
        return "SuspenseList";
    }
    if (typeof V == "object")
      switch (V.$$typeof) {
        case p:
          return "Context.Consumer";
        case c:
          return "Context.Provider";
        case m:
          return g1 = V, h1 = V.render, c1 = "ForwardRef", S1 = h1.displayName || h1.name || "", g1.displayName || (S1 !== "" ? c1 + "(" + S1 + ")" : c1);
        case u:
          return x(V.type);
        case o:
          return x(V.render);
        case s:
          var m1 = (i1 = V)._status === 1 ? i1._result : null;
          if (m1)
            return x(m1);
      }
    var i1, g1, h1, c1, S1;
    return null;
  }
  var A = {};
  v.ReactDebugCurrentFrame;
  var D = null;
  function I(V) {
    D = V;
  }
  var N, F, _, k = v.ReactCurrentOwner, h = Object.prototype.hasOwnProperty, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(V, m1, i1, g1, h1) {
    var c1, S1 = {}, u1 = null, r1 = null;
    for (c1 in i1 !== void 0 && (u1 = "" + i1), function(p1) {
      if (h.call(p1, "key")) {
        var n1 = Object.getOwnPropertyDescriptor(p1, "key").get;
        if (n1 && n1.isReactWarning)
          return !1;
      }
      return p1.key !== void 0;
    }(m1) && (u1 = "" + m1.key), function(p1) {
      if (h.call(p1, "ref")) {
        var n1 = Object.getOwnPropertyDescriptor(p1, "ref").get;
        if (n1 && n1.isReactWarning)
          return !1;
      }
      return p1.ref !== void 0;
    }(m1) && (r1 = m1.ref, function(p1, n1) {
      if (typeof p1.ref == "string" && k.current && n1 && k.current.stateNode !== n1) {
        var Q = x(k.current.type);
        _[Q] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(k.current.type), p1.ref), _[Q] = !0);
      }
    }(m1, h1)), m1)
      h.call(m1, c1) && !w.hasOwnProperty(c1) && (S1[c1] = m1[c1]);
    if (V && V.defaultProps) {
      var o2 = V.defaultProps;
      for (c1 in o2)
        S1[c1] === void 0 && (S1[c1] = o2[c1]);
    }
    if (u1 || r1) {
      var b1 = typeof V == "function" ? V.displayName || V.name || "Unknown" : V;
      u1 && function(p1, n1) {
        var Q = function() {
          N || (N = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n1));
        };
        Q.isReactWarning = !0, Object.defineProperty(p1, "key", { get: Q, configurable: !0 });
      }(S1, b1), r1 && function(p1, n1) {
        var Q = function() {
          F || (F = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n1));
        };
        Q.isReactWarning = !0, Object.defineProperty(p1, "ref", { get: Q, configurable: !0 });
      }(S1, b1);
    }
    return function(p1, n1, Q, n2, a1, L1, M1) {
      var H1 = { $$typeof: t, type: p1, key: n1, ref: Q, props: M1, _owner: L1, _store: {} };
      return Object.defineProperty(H1._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(H1, "_self", { configurable: !1, enumerable: !1, writable: !1, value: n2 }), Object.defineProperty(H1, "_source", { configurable: !1, enumerable: !1, writable: !1, value: a1 }), Object.freeze && (Object.freeze(H1.props), Object.freeze(H1)), H1;
    }(V, u1, r1, h1, g1, k.current, S1);
  }
  _ = {};
  var B, $ = v.ReactCurrentOwner;
  function W(V) {
    D = V;
  }
  function z(V) {
    return typeof V == "object" && V !== null && V.$$typeof === t;
  }
  function q() {
    if ($.current) {
      var V = x($.current.type);
      if (V)
        return `

Check the render method of \`` + V + "`.";
    }
    return "";
  }
  v.ReactDebugCurrentFrame, B = !1;
  var J = {};
  function Y(V, m1) {
    if (V._store && !V._store.validated && V.key == null) {
      V._store.validated = !0;
      var i1 = function(h1) {
        var c1 = q();
        if (!c1) {
          var S1 = typeof h1 == "string" ? h1 : h1.displayName || h1.name;
          S1 && (c1 = `

Check the top-level render call using <` + S1 + ">.");
        }
        return c1;
      }(m1);
      if (!J[i1]) {
        J[i1] = !0;
        var g1 = "";
        V && V._owner && V._owner !== $.current && (g1 = " It was passed a child from " + x(V._owner.type) + "."), W(V), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i1, g1), W(null);
      }
    }
  }
  function Z(V, m1) {
    if (typeof V == "object") {
      if (Array.isArray(V))
        for (var i1 = 0; i1 < V.length; i1++) {
          var g1 = V[i1];
          z(g1) && Y(g1, m1);
        }
      else if (z(V))
        V._store && (V._store.validated = !0);
      else if (V) {
        var h1 = function(u1) {
          if (u1 === null || typeof u1 != "object")
            return null;
          var r1 = y && u1[y] || u1["@@iterator"];
          return typeof r1 == "function" ? r1 : null;
        }(V);
        if (typeof h1 == "function" && h1 !== V.entries)
          for (var c1, S1 = h1.call(V); !(c1 = S1.next()).done; )
            z(c1.value) && Y(c1.value, m1);
      }
    }
  }
  function f1(V) {
    var m1, i1 = V.type;
    if (i1 != null && typeof i1 != "string") {
      if (typeof i1 == "function")
        m1 = i1.propTypes;
      else {
        if (typeof i1 != "object" || i1.$$typeof !== m && i1.$$typeof !== u)
          return;
        m1 = i1.propTypes;
      }
      if (m1) {
        var g1 = x(i1);
        (function(h1, c1, S1, u1, r1) {
          var o2 = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var b1 in h1)
            if (o2(h1, b1)) {
              var p1 = void 0;
              try {
                if (typeof h1[b1] != "function") {
                  var n1 = Error((u1 || "React class") + ": " + S1 + " type `" + b1 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h1[b1] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw n1.name = "Invariant Violation", n1;
                }
                p1 = h1[b1](c1, b1, u1, S1, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Q) {
                p1 = Q;
              }
              !p1 || p1 instanceof Error || (I(r1), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u1 || "React class", S1, b1, typeof p1), I(null)), p1 instanceof Error && !(p1.message in A) && (A[p1.message] = !0, I(r1), b("Failed %s type: %s", S1, p1.message), I(null));
            }
        })(m1, V.props, "prop", g1, V);
      } else
        i1.PropTypes === void 0 || B || (B = !0, b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x(i1) || "Unknown"));
      typeof i1.getDefaultProps != "function" || i1.getDefaultProps.isReactClassApproved || b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function _1(V, m1, i1, g1, h1, c1) {
    var S1 = function(Q) {
      return typeof Q == "string" || typeof Q == "function" || Q === c3.Fragment || Q === i || Q === S || Q === a || Q === g || Q === d || Q === C || typeof Q == "object" && Q !== null && (Q.$$typeof === s || Q.$$typeof === u || Q.$$typeof === c || Q.$$typeof === p || Q.$$typeof === m || Q.$$typeof === f || Q.$$typeof === o || Q[0] === l);
    }(V);
    if (!S1) {
      var u1 = "";
      (V === void 0 || typeof V == "object" && V !== null && Object.keys(V).length === 0) && (u1 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var r1, o2 = function(Q) {
        return Q !== void 0 ? `

Check your code at ` + Q.fileName.replace(/^.*[\\\/]/, "") + ":" + Q.lineNumber + "." : "";
      }(h1);
      u1 += o2 || q(), V === null ? r1 = "null" : Array.isArray(V) ? r1 = "array" : V !== void 0 && V.$$typeof === t ? (r1 = "<" + (x(V.type) || "Unknown") + " />", u1 = " Did you accidentally export a JSX literal instead of a component?") : r1 = typeof V, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", r1, u1);
    }
    var b1 = M(V, m1, i1, h1, c1);
    if (b1 == null)
      return b1;
    if (S1) {
      var p1 = m1.children;
      if (p1 !== void 0)
        if (g1)
          if (Array.isArray(p1)) {
            for (var n1 = 0; n1 < p1.length; n1++)
              Z(p1[n1], V);
            Object.freeze && Object.freeze(p1);
          } else
            b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          Z(p1, V);
    }
    return V === c3.Fragment ? function(Q) {
      for (var n2 = Object.keys(Q.props), a1 = 0; a1 < n2.length; a1++) {
        var L1 = n2[a1];
        if (L1 !== "children" && L1 !== "key") {
          W(Q), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L1), W(null);
          break;
        }
      }
      Q.ref !== null && (W(Q), b("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
    }(b1) : f1(b1), b1;
  }
  var Q1 = function(V, m1, i1) {
    return _1(V, m1, i1, !1);
  }, $1 = function(V, m1, i1) {
    return _1(V, m1, i1, !0);
  };
  c3.jsx = Q1, c3.jsxs = $1;
}(), P3.exports = j8;
var Z0, It = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Z0 = It, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) {
      var i = arguments[a];
      if (i) {
        var c = typeof i;
        if (c === "string" || c === "number")
          n.push(i);
        else if (Array.isArray(i)) {
          if (i.length) {
            var p = t.apply(null, i);
            p && n.push(p);
          }
        } else if (c === "object") {
          if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
            n.push(i.toString());
            continue;
          }
          for (var m in i)
            e.call(i, m) && i[m] && n.push(m);
        }
      }
    }
    return n.join(" ");
  }
  Z0.exports ? (t.default = t, Z0.exports = t) : window.classNames = t;
}();
var q8 = It.exports;
const V8 = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, Wr = ({ content: e }) => P3.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), jr = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, qr = R.createContext({ getTooltipData: () => jr });
function _t(e = "DEFAULT_TOOLTIP_ID") {
  return R.useContext(qr).getTooltipData(e);
}
const Y8 = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: c = "absolute", middlewares: p = [Fr(Number(i)), Ur(), zr({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const m = p;
  return n ? (m.push({ name: "arrow", options: g = { element: n, padding: 5 }, async fn(d) {
    const { element: u, padding: s = 0 } = g || {}, { x: o, y: l, placement: f, rects: S, platform: C } = d;
    if (u == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const E = Lt(s), y = { x: o, y: l }, v = G4(f), b = A7(v), T = await C.getDimensions(u), P = v === "y" ? "top" : "left", x = v === "y" ? "bottom" : "right", A = S.reference[b] + S.reference[v] - y[v] - S.floating[b], D = y[v] - S.reference[v], I = await (C.getOffsetParent == null ? void 0 : C.getOffsetParent(u));
    let N = I ? v === "y" ? I.clientHeight || 0 : I.clientWidth || 0 : 0;
    N === 0 && (N = S.floating[b]);
    const F = A / 2 - D / 2, _ = E[P], k = N - T[b] - E[x], h = N / 2 - T[b] / 2 + F, w = B6(_, h, k), M = z4(f) != null && h != w && S.reference[b] / 2 - (h < _ ? E[P] : E[x]) - T[b] / 2 < 0;
    return { [v]: y[v] - (M ? h < _ ? _ - h : k - h : 0), data: { [v]: w, centerOffset: h - w } };
  } }), W8(e, t, { placement: a, strategy: c, middleware: m }).then(({ x: d, y: u, placement: s, middlewareData: o }) => {
    var l, f;
    const S = { left: `${d}px`, top: `${u}px` }, { x: C, y: E } = (l = o.arrow) !== null && l !== void 0 ? l : { x: 0, y: 0 };
    return { tooltipStyles: S, tooltipArrowStyles: { left: C != null ? `${C}px` : "", top: E != null ? `${E}px` : "", right: "", bottom: "", [(f = { top: "bottom", right: "left", bottom: "top", left: "right" }[s.split("-")[0]]) !== null && f !== void 0 ? f : "bottom"]: "-4px" } };
  })) : W8(e, t, { placement: "bottom", strategy: c, middleware: m }).then(({ x: d, y: u }) => ({ tooltipStyles: { left: `${d}px`, top: `${u}px` }, tooltipArrowStyles: {} }));
  var g;
};
var b3 = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const K8 = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: c, place: p = "top", offset: m = 10, events: g = ["hover"], positionStrategy: d = "absolute", middlewares: u, wrapper: s, children: o = null, delayShow: l = 0, delayHide: f = 0, float: S = !1, noArrow: C = !1, clickable: E = !1, closeOnEsc: y = !1, style: v, position: b, afterShow: T, afterHide: P, content: x, html: A, isOpen: D, setIsOpen: I, activeAnchor: N, setActiveAnchor: F }) => {
  const _ = R.useRef(null), k = R.useRef(null), h = R.useRef(null), w = R.useRef(null), [M, B] = R.useState({}), [$, W] = R.useState({}), [z, q] = R.useState(!1), [J, Y] = R.useState(!1), Z = R.useRef(!1), f1 = R.useRef(null), { anchorRefs: _1, setActiveAnchor: Q1 } = _t(e), $1 = R.useRef(!1), [V, m1] = R.useState([]), i1 = R.useRef(!1);
  R.useLayoutEffect(() => (i1.current = !0, () => {
    i1.current = !1;
  }), []), R.useEffect(() => {
    if (!z) {
      const a1 = setTimeout(() => {
        Y(!1);
      }, 150);
      return () => {
        clearTimeout(a1);
      };
    }
    return () => null;
  }, [z]);
  const g1 = (a1) => {
    i1.current && (a1 && Y(!0), setTimeout(() => {
      i1.current && (I == null || I(a1), D === void 0 && q(a1));
    }, 10));
  };
  R.useEffect(() => {
    if (D === void 0)
      return () => null;
    D && Y(!0);
    const a1 = setTimeout(() => {
      q(D);
    }, 10);
    return () => {
      clearTimeout(a1);
    };
  }, [D]), R.useEffect(() => {
    z !== Z.current && (Z.current = z, z ? T == null || T() : P == null || P());
  }, [z]);
  const h1 = (a1 = f) => {
    w.current && clearTimeout(w.current), w.current = setTimeout(() => {
      $1.current || g1(!1);
    }, a1);
  }, c1 = (a1) => {
    var L1;
    if (!a1)
      return;
    l ? (h.current && clearTimeout(h.current), h.current = setTimeout(() => {
      g1(!0);
    }, l)) : g1(!0);
    const M1 = (L1 = a1.currentTarget) !== null && L1 !== void 0 ? L1 : a1.target;
    F(M1), Q1({ current: M1 }), w.current && clearTimeout(w.current);
  }, S1 = () => {
    E ? h1(f || 100) : f ? h1() : g1(!1), h.current && clearTimeout(h.current);
  }, u1 = ({ x: a1, y: L1 }) => {
    Y8({ place: p, offset: m, elementReference: { getBoundingClientRect: () => ({ x: a1, y: L1, width: 0, height: 0, top: L1, left: a1, right: a1, bottom: L1 }) }, tooltipReference: _.current, tooltipArrowReference: k.current, strategy: d, middlewares: u }).then((M1) => {
      Object.keys(M1.tooltipStyles).length && B(M1.tooltipStyles), Object.keys(M1.tooltipArrowStyles).length && W(M1.tooltipArrowStyles);
    });
  }, r1 = (a1) => {
    if (!a1)
      return;
    const L1 = a1, M1 = { x: L1.clientX, y: L1.clientY };
    u1(M1), f1.current = M1;
  }, o2 = (a1) => {
    c1(a1), f && h1();
  }, b1 = (a1) => {
    const L1 = document.querySelector(`[id='${i}']`);
    L1 != null && L1.contains(a1.target) || V.some((M1) => M1.contains(a1.target)) || g1(!1);
  }, p1 = (a1) => {
    a1.key === "Escape" && g1(!1);
  }, n1 = V8(c1, 50), Q = V8(S1, 50);
  R.useEffect(() => {
    var a1, L1;
    const M1 = new Set(_1);
    V.forEach((U) => {
      M1.add({ current: U });
    });
    const H1 = document.querySelector(`[id='${i}']`);
    H1 && M1.add({ current: H1 }), y && window.addEventListener("keydown", p1);
    const e2 = [];
    g.find((U) => U === "click") && (window.addEventListener("click", b1), e2.push({ event: "click", listener: o2 })), g.find((U) => U === "hover") && (e2.push({ event: "mouseenter", listener: n1 }, { event: "mouseleave", listener: Q }, { event: "focus", listener: n1 }, { event: "blur", listener: Q }), S && e2.push({ event: "mousemove", listener: r1 }));
    const m2 = () => {
      $1.current = !0;
    }, L = () => {
      $1.current = !1, S1();
    };
    return E && ((a1 = _.current) === null || a1 === void 0 || a1.addEventListener("mouseenter", m2), (L1 = _.current) === null || L1 === void 0 || L1.addEventListener("mouseleave", L)), e2.forEach(({ event: U, listener: G }) => {
      M1.forEach((K) => {
        var C1;
        (C1 = K.current) === null || C1 === void 0 || C1.addEventListener(U, G);
      });
    }), () => {
      var U, G;
      g.find((K) => K === "click") && window.removeEventListener("click", b1), y && window.removeEventListener("keydown", p1), E && ((U = _.current) === null || U === void 0 || U.removeEventListener("mouseenter", m2), (G = _.current) === null || G === void 0 || G.removeEventListener("mouseleave", L)), e2.forEach(({ event: K, listener: C1 }) => {
        M1.forEach((F1) => {
          var c2;
          (c2 = F1.current) === null || c2 === void 0 || c2.removeEventListener(K, C1);
        });
      });
    };
  }, [J, _1, V, y, g]), R.useEffect(() => {
    let a1 = c ?? "";
    !a1 && e && (a1 = `[data-tooltip-id='${e}']`);
    const L1 = new MutationObserver((M1) => {
      const H1 = [];
      M1.forEach((e2) => {
        if (e2.type === "attributes" && e2.attributeName === "data-tooltip-id" && e2.target.getAttribute("data-tooltip-id") === e && H1.push(e2.target), e2.type === "childList" && (N && [...e2.removedNodes].some((m2) => !!m2.contains(N) && (Y(!1), g1(!1), F(null), !0)), a1))
          try {
            const m2 = [...e2.addedNodes].filter((L) => L.nodeType === 1);
            H1.push(...m2.filter((L) => L.matches(a1))), H1.push(...m2.flatMap((L) => [...L.querySelectorAll(a1)]));
          } catch {
          }
      }), H1.length && m1((e2) => [...e2, ...H1]);
    });
    return L1.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      L1.disconnect();
    };
  }, [e, c, N]), R.useEffect(() => {
    b ? u1(b) : S ? f1.current && u1(f1.current) : Y8({ place: p, offset: m, elementReference: N, tooltipReference: _.current, tooltipArrowReference: k.current, strategy: d, middlewares: u }).then((a1) => {
      i1.current && (Object.keys(a1.tooltipStyles).length && B(a1.tooltipStyles), Object.keys(a1.tooltipArrowStyles).length && W(a1.tooltipArrowStyles));
    });
  }, [z, N, x, A, p, m, d, b]), R.useEffect(() => {
    var a1;
    const L1 = document.querySelector(`[id='${i}']`), M1 = [...V, L1];
    N && M1.includes(N) || F((a1 = V[0]) !== null && a1 !== void 0 ? a1 : L1);
  }, [i, V, N]), R.useEffect(() => () => {
    h.current && clearTimeout(h.current), w.current && clearTimeout(w.current);
  }, []), R.useEffect(() => {
    let a1 = c;
    if (!a1 && e && (a1 = `[data-tooltip-id='${e}']`), a1)
      try {
        const L1 = Array.from(document.querySelectorAll(a1));
        m1(L1);
      } catch {
        m1([]);
      }
  }, [e, c]);
  const n2 = !!(A || x || o) && z && Object.keys(M).length > 0;
  return J ? P3.exports.jsxs(s, { id: e, role: "tooltip", className: q8("react-tooltip", b3.tooltip, b3[a], t, { [b3.show]: n2, [b3.fixed]: d === "fixed", [b3.clickable]: E }), style: { ...v, ...M }, ref: _, children: [A && P3.exports.jsx(Wr, { content: A }) || x || o, P3.exports.jsx(s, { className: q8("react-tooltip-arrow", b3.arrow, n, { [b3["no-arrow"]]: C }), style: $, ref: k })] }) : null;
}, Rt = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: c, classNameArrow: p, variant: m = "dark", place: g = "top", offset: d = 10, wrapper: u = "div", children: s = null, events: o = ["hover"], positionStrategy: l = "absolute", middlewares: f, delayShow: S = 0, delayHide: C = 0, float: E = !1, noArrow: y = !1, clickable: v = !1, closeOnEsc: b = !1, style: T, position: P, isOpen: x, setIsOpen: A, afterShow: D, afterHide: I }) => {
  const [N, F] = R.useState(a), [_, k] = R.useState(i), [h, w] = R.useState(g), [M, B] = R.useState(m), [$, W] = R.useState(d), [z, q] = R.useState(S), [J, Y] = R.useState(C), [Z, f1] = R.useState(E), [_1, Q1] = R.useState(u), [$1, V] = R.useState(o), [m1, i1] = R.useState(l), [g1, h1] = R.useState(null), { anchorRefs: c1, activeAnchor: S1 } = _t(e), u1 = (b1) => b1 == null ? void 0 : b1.getAttributeNames().reduce((p1, n1) => {
    var Q;
    return n1.startsWith("data-tooltip-") && (p1[n1.replace(/^data-tooltip-/, "")] = (Q = b1 == null ? void 0 : b1.getAttribute(n1)) !== null && Q !== void 0 ? Q : null), p1;
  }, {}), r1 = (b1) => {
    const p1 = { place: (n1) => {
      var Q;
      w((Q = n1) !== null && Q !== void 0 ? Q : g);
    }, content: (n1) => {
      F(n1 ?? a);
    }, html: (n1) => {
      k(n1 ?? i);
    }, variant: (n1) => {
      var Q;
      B((Q = n1) !== null && Q !== void 0 ? Q : m);
    }, offset: (n1) => {
      W(n1 === null ? d : Number(n1));
    }, wrapper: (n1) => {
      var Q;
      Q1((Q = n1) !== null && Q !== void 0 ? Q : u);
    }, events: (n1) => {
      const Q = n1 == null ? void 0 : n1.split(" ");
      V(Q ?? o);
    }, "position-strategy": (n1) => {
      var Q;
      i1((Q = n1) !== null && Q !== void 0 ? Q : l);
    }, "delay-show": (n1) => {
      q(n1 === null ? S : Number(n1));
    }, "delay-hide": (n1) => {
      Y(n1 === null ? C : Number(n1));
    }, float: (n1) => {
      f1(n1 === null ? E : !!n1);
    } };
    Object.values(p1).forEach((n1) => n1(null)), Object.entries(b1).forEach(([n1, Q]) => {
      var n2;
      (n2 = p1[n1]) === null || n2 === void 0 || n2.call(p1, Q);
    });
  };
  R.useEffect(() => {
    F(a);
  }, [a]), R.useEffect(() => {
    k(i);
  }, [i]), R.useEffect(() => {
    w(g);
  }, [g]), R.useEffect(() => {
    var b1;
    const p1 = new Set(c1);
    let n1 = n;
    if (!n1 && e && (n1 = `[data-tooltip-id='${e}']`), n1)
      try {
        document.querySelectorAll(n1).forEach((M1) => {
          p1.add({ current: M1 });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const Q = document.querySelector(`[id='${t}']`);
    if (Q && p1.add({ current: Q }), !p1.size)
      return () => null;
    const n2 = (b1 = g1 ?? Q) !== null && b1 !== void 0 ? b1 : S1.current, a1 = new MutationObserver((M1) => {
      M1.forEach((H1) => {
        var e2;
        if (!n2 || H1.type !== "attributes" || !(!((e2 = H1.attributeName) === null || e2 === void 0) && e2.startsWith("data-tooltip-")))
          return;
        const m2 = u1(n2);
        r1(m2);
      });
    }), L1 = { attributes: !0, childList: !1, subtree: !1 };
    if (n2) {
      const M1 = u1(n2);
      r1(M1), a1.observe(n2, L1);
    }
    return () => {
      a1.disconnect();
    };
  }, [c1, S1, g1, t, n]);
  const o2 = { id: e, anchorId: t, anchorSelect: n, className: c, classNameArrow: p, content: N, html: _, place: h, variant: M, offset: $, wrapper: _1, events: $1, positionStrategy: m1, middlewares: f, delayShow: z, delayHide: J, float: Z, noArrow: y, clickable: v, closeOnEsc: b, style: T, position: P, isOpen: x, setIsOpen: A, afterShow: D, afterHide: I, activeAnchor: g1, setActiveAnchor: (b1) => h1(b1) };
  return s ? P3.exports.jsx(K8, { ...o2, children: s }) : P3.exports.jsx(K8, { ...o2 });
};
const M2 = (e) => {
  try {
    if (!e || e === void 0)
      throw new Error("No row supplied to hashObj");
    let t = JSON.stringify(e), n = 0;
    if (t.length === 0)
      return n;
    for (let a = 0; a < t.length; a++) {
      let i = t.charCodeAt(a);
      n = (n << 5) - n + i, n = n & n;
    }
    return n;
  } catch (t) {
    console.error({ state: "COVE: " + t.message });
  }
}, Z8 = (e, t) => M2({
  unified: e.legend.unified ?? !1,
  equalNumberOptIn: e.general.equalNumberOptIn ?? !1,
  specialClassesLast: e.legend.showSpecialClassesLast ?? !1,
  color: e.color,
  customColors: e.customColors,
  numberOfItems: e.legend.numberOfItems,
  type: e.legend.type,
  separateZero: e.legend.separateZero ?? !1,
  primary: e.columns.primary.name,
  categoryValuesOrder: e.legend.categoryValuesOrder,
  specialClasses: e.legend.specialClasses,
  geoType: e.general.geoType,
  data: e.data,
  ...t,
  filters: {
    ...e.filters
  }
}), r5 = (e = "#000000", t = !1) => {
  let n = x5(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, X8 = (e, t) => {
  let n = {};
  for (let a = 0; a < e.length; a++) {
    let i = e[a][t];
    i !== void 0 && n[i] === void 0 && (n[i] = !0);
  }
  return Object.keys(n);
}, $t = {
  AFG: [33.93911, 67.709953],
  ALA: [60.1785, 19.9156],
  ARG: [-38.416097, -63.616672],
  ARM: [40.069099, 45.038189],
  ABW: [12.52111, -69.968338],
  AUS: [-25.27, 133.77],
  AUT: [47.516231, 14.550072],
  AZE: [40.143105, 47.576927],
  BHS: [25.03428, -77.39628],
  BHR: [25.930414, 50.637772],
  BGD: [23.684994, 90.356331],
  BRB: [13.193887, -59.543198],
  BLR: [53.709807, 27.953389],
  BEL: [50.503887, 4.469936],
  BLZ: [17.189877, -88.49765],
  BEN: [9.30769, 2.315834],
  BTN: [27.514162, 90.433601],
  BRA: [-14.235, -51.9253],
  BGR: [42.733883, 25.48583],
  BFA: [12.238333, -1.561593],
  CAN: [56.1304, -106.3468],
  CHL: [-35.6751, -71.543],
  COL: [4.5709, -74.2973],
  CRI: [9.748917, -83.753428],
  HRV: [45.1, 15.2],
  CUB: [21.521757, -77.781167],
  CZE: [49.8175, 15.4729],
  DNK: [56.2639, 9.5018],
  EST: [58.5953, 25.0136],
  FIN: [61.9241, 25.7482],
  FRA: [46.2276, 2.2137],
  GEO: [42.3154, 43.3569],
  DEU: [51.1657, 10.4515],
  GIB: [36.1408, -5.3536],
  GRC: [39.0742, 21.8243],
  HUN: [47.1625, 19.5033],
  ISL: [64.9631, -19.0208],
  IRL: [53.1424, -7.6921],
  ISR: [31.0461, 34.8516],
  ITA: [41.8719, 12.5674],
  LVA: [56.8796, 24.6032],
  LBN: [33.8547, 35.8623],
  LUX: [49.8153, 6.1296],
  MLT: [35.9375, 14.3754],
  MEX: [23.6345, -102.5528],
  MAR: [31.7917, -7.0926],
  NAM: [-22.95764, 18.49041],
  NRU: [-0.522778, 166.931503],
  NPL: [28.394857, 84.124008],
  NLD: [52.1326, 5.2913],
  NZL: [-40.900557, 174.885971],
  NIC: [12.865416, -85.207229],
  NER: [17.607789, 8.081666],
  NGA: [9.081999, 8.675277],
  NOR: [60.472024, 8.468946],
  OMN: [21.512583, 55.923255],
  PAK: [30.375321, 69.345116],
  PLW: [7.51498, 134.58252],
  PAN: [8.537981, -80.782127],
  PNG: [-6.314993, 143.95555],
  PRY: [-23.442503, -58.443832],
  PER: [-9.189967, -75.015152],
  PHL: [12.879721, 121.774017],
  POL: [51.919438, 19.145136],
  PRT: [39.399872, -8.224454],
  QAT: [25.354826, 51.183884],
  ROU: [45.943161, 24.96676],
  RWA: [-1.940278, 29.873888],
  LCA: [13.909444, -60.978893],
  WSM: [-13.759029, -172.104629],
  SMR: [43.94236, 12.457777],
  SAU: [23.885942, 45.079162],
  SEN: [14.497401, -14.452362],
  SRB: [44.016521, 21.005859],
  SYC: [-4.679574, 55.491977],
  SLE: [8.460555, -11.779889],
  SGP: [1.352083, 103.819836],
  SVN: [46.1512, 14.9955],
  ZAF: [-30.5595, 22.9375],
  KOR: [35.9078, 127.7669],
  ESP: [40.4637, -3.7492],
  SWE: [60.1282, 18.6435],
  CHE: [46.8182, 8.2275],
  TWN: [23.68579, 120.89749],
  UGA: [1.373333, 32.290275],
  UKR: [48.379433, 31.16558],
  ARE: [23.424076, 53.847818],
  GBR: [55.3781, -3.436],
  USA: [37.0902, -95.7129],
  VEN: [6.4238, -66.14542],
  ALB: [41.1533, 20.1683],
  DZA: [28.0339, 1.6596],
  ASM: [-14.271, -170.1322],
  AND: [42.5063, 1.5218],
  AGO: [-11.2027, 17.8739],
  AIA: [18.2206, -63.0686],
  ATG: [17.0608, -61.7964],
  BMU: [32.2995, -64.7903],
  BOL: [-16.2902, -63.5887],
  BES: [12.2019, -68.2624],
  BIH: [43.9159, 17.6791],
  BWA: [-22.3285, 24.6849],
  BVT: [-54.4208, 3.3464],
  IOT: [-6.3432, 71.8765],
  BRN: [4.5353, 114.7277],
  MMR: [21.9162, 95.956],
  BDI: [-3.3731, 29.9189],
  CPV: [16.5388, -23.0418],
  KHM: [12.5657, 104.991],
  CMR: [7.3697, 12.3547],
  CYM: [19.3133, -81.2546],
  CAF: [6.6111, 20.9394],
  TCD: [15.4542, 18.7322],
  CHN: [35.8617, 104.1954],
  CXR: [-10.4475, 105.6904],
  CCK: [-12.1642, 96.871],
  COM: [-11.6455, 43.3333],
  COD: [-4.0383, 21.7587],
  COK: [-21.2367, 159.7777],
  CIV: [7.5401, -5.5471],
  CUW: [12.1696, -68.9901],
  CYP: [35.095192, 33.20343],
  COG: [-0.430179, 15.967529],
  DJI: [11.8251, 42.5903],
  DMA: [15.4151, -61.3711],
  DOM: [18.7357, -70.1627],
  ECU: [-1.8312, -78.1834],
  EGY: [26.8206, 30.8025],
  SLV: [13.7942, -88.8965],
  GNQ: [1.6508, 10.2679],
  ERI: [15.1794, 39.7823],
  SWZ: [-26.5225, 31.465],
  ETH: [9.1451, 40.4897],
  FLK: [-51.7963, -59.5236],
  FRO: [56.2639, 9.5018],
  FJI: [-17.42, 178.3],
  GUF: [3.9339, -53.1258],
  PYF: [-17.6797, -149.4068],
  ATF: [-49.2804, 69.3486],
  GAB: [-0.8037, 11.6094],
  GMB: [13.4432, -15.3101],
  GHA: [7.9465, -1.0232],
  GRL: [71.7069, -42.6043],
  GRD: [12.1165, -61.6791],
  GLP: [16.2651, -61.5511],
  GUM: [13.4443, 144.7937],
  GTM: [15.7835, -90.2308],
  GGY: [49.4482, -2.5895],
  GIN: [9.9456, -9.6966],
  GNB: [11.8037, -15.1804],
  GUY: [4.8604, -58.9302],
  HTI: [18.9712, -72.2852],
  HMD: [-53.0818, 73.5042],
  HND: [15.2001, -86.2419],
  HKG: [22.3193, 114.1694],
  IND: [20.5937, 78.9629],
  IDN: [-0.7893, 113.9213],
  IRN: [32.4279, 53.688],
  IRQ: [33.2232, 43.6793],
  IMN: [54.2361, -4.5481],
  JAM: [18.1096, -77.2975],
  JPN: [36.2048, 138.2529],
  JEY: [49.2138, -2.1358],
  JOR: [30.5852, 36.2384],
  KAZ: [48.0196, 66.9237],
  KEN: [-0.0236, 37.9062],
  KIR: [-3.3704, 168.734],
  KOS: [42.6026, 20.903],
  KWT: [29.3117, 47.4818],
  KGZ: [41.2044, 74.7661],
  LAO: [19.8563, 102.4955],
  LSO: [-29.6101, 28.2336],
  LBR: [6.4281, -9.4295],
  LBY: [26.3351, 17.2283],
  LIE: [47.166, 9.5554],
  LTU: [55.1694, 23.8813],
  MAC: [22.1987, 113.5439],
  MDG: [-18.7669, 46.8691],
  MWI: [-13.2543, 34.3015],
  MYS: [4.2105, 101.9758],
  MDV: [3.2028, 73.2207],
  MLI: [17.5707, -3.9962],
  MHL: [7.1315, 171.1845],
  MTQ: [14.6415, -61.0242],
  MRT: [21.0079, -10.9408],
  MUS: [-20.3484, 57.5522],
  MYT: [-12.8275, 45.1662],
  FSM: [7.4256, 150.5508],
  MDA: [47.4116, 28.3699],
  MCO: [43.7384, 7.4246],
  MNG: [46.8625, 103.8467],
  MNE: [42.7087, 19.3744],
  MSR: [16.7425, -62.1874],
  MOZ: [-18.6657, 35.5296],
  NCL: [-20.9043, 165.618],
  NIU: [-19.0544, -169.8672],
  NFK: [-29.0408, 167.9547],
  PRK: [40.3399, 127.5101],
  MKD: [41.6086, 21.7453],
  MNP: [15.0979, 145.6739],
  PCN: [-24.3768, -128.3242],
  PRI: [18.2208, -66.5901],
  REU: [-21.1151, 55.5364],
  RUS: [61.524, 105.3188],
  BLM: [17.9001, -62.8333],
  SHN: [-15.9651, -5.7089],
  KNA: [17.3578, -62.783],
  SPM: [46.8852, -56.3159],
  VCT: [12.9843, -61.2872],
  STP: [0.1864, 6.6131],
  SXM: [18.0425, -63.0548],
  SVK: [48.669, 19.699],
  SLB: [-9.6457, 160.1562],
  SOM: [9.4117, 46.8253],
  SGS: [-54.4296, -36.5879],
  SDS: [6.877, 31.307],
  LKA: [7.8731, 80.7718],
  MAF: [18.0708, -63.0501],
  SDN: [12.8628, 30.2176],
  SUR: [3.9193, -56.0278],
  SJM: [77.5536, 23.6703],
  SYR: [34.8021, 38.9968],
  TJK: [38.861, 71.2761],
  TZA: [-6.369, 34.8888],
  THA: [15.8701, 100.9925],
  TLS: [-8.8742, 125.7275],
  TGO: [8.6195, 0.8248],
  TKL: [-9.2002, -171.8484],
  TON: [-21.179, -175.1982],
  TTO: [10.6918, -61.2225],
  TUN: [33.8869, 9.5375],
  TUR: [38.9637, 35.2433],
  TKM: [38.9697, 59.5563],
  TCA: [21.694, -71.7979],
  TUV: [-7.1095, 177.6493],
  UMI: [19.2823, 166.647],
  URY: [-32.5228, -55.7658],
  UZB: [41.3775, 64.5853],
  VUT: [-15.3767, 166.9592],
  VAT: [41.9029, 12.4534],
  VNM: [14.0583, 108.2772],
  VGB: [18.4207, -64.6401],
  VIR: [18.3358, -64.8963],
  WLF: [-14.2938, -178.1165],
  SAH: [24.2155, -12.8858],
  YEM: [15.5527, 48.5164],
  ZMB: [-13.1339, 27.8493],
  ZWE: [-19.0154, 29.1549]
}, u4 = {
  annotations: [],
  general: {
    geoBorderColor: "darkGray",
    headerColor: "theme-blue",
    title: "",
    showTitle: !0,
    showSidebar: !0,
    showDownloadButton: !1,
    showDownloadMediaButton: !1,
    displayAsHex: !1,
    displayStateLabels: !1,
    territoriesLabel: "Territories",
    territoriesAlwaysShow: !1,
    language: "en",
    geoType: "single-state",
    geoLabelOverride: "",
    hasRegions: !1,
    fullBorder: !1,
    type: "data",
    convertFipsCodes: !0,
    palette: {
      isReversed: !1
    },
    allowMapZoom: !0,
    hideGeoColumnInTooltip: !1,
    hidePrimaryColumnInTooltip: !1,
    statePicked: {
      fipsCode: "01",
      stateName: "Alabama"
    }
  },
  type: "map",
  color: "pinkpurple",
  columns: {
    geo: {
      name: "FIPS Codes",
      label: "Location",
      tooltip: !1,
      dataTable: !0
    },
    primary: {
      dataTable: !0,
      tooltip: !0,
      prefix: "",
      suffix: "",
      name: "",
      label: ""
    },
    navigate: {
      name: ""
    },
    latitude: { name: "" },
    longitude: { name: "" }
  },
  legend: {
    descriptions: {},
    specialClasses: [],
    unified: !1,
    singleColumn: !1,
    singleRow: !1,
    verticalSorted: !1,
    showSpecialClassesLast: !1,
    dynamicDescription: !1,
    type: "equalnumber",
    numberOfItems: 3,
    position: "side",
    title: "Legend"
  },
  filters: [],
  table: {
    wrapColumns: !1,
    label: "Data Table",
    expanded: !1,
    limitHeight: !1,
    height: "",
    caption: "",
    showDownloadUrl: !1,
    showDataTableLink: !0,
    showFullGeoNameInCSV: !1,
    forceDisplay: !0,
    download: !1,
    indexLabel: ""
  },
  tooltips: {
    appearanceType: "hover",
    linkLabel: "Learn More",
    capitalizeLabels: !0,
    opacity: 90
  },
  runtime: {
    editorErrorMessage: []
  },
  visual: {
    minBubbleSize: 1,
    maxBubbleSize: 20,
    extraBubbleBorder: !1,
    cityStyle: "circle",
    cityStyleLabel: "",
    showBubbleZeros: !1,
    additionalCityStyles: [],
    geoCodeCircleSize: 8,
    showBubbleZeros: !1
  },
  mapPosition: { coordinates: [0, 30], zoom: 1 },
  map: {
    layers: [],
    patterns: []
  },
  hexMap: {
    type: "",
    shapeGroups: [
      {
        legendTitle: "",
        legendDescription: "",
        items: [{ key: "", shape: "Arrow Up", column: "", operator: "=", value: "" }]
      }
    ]
  },
  filterBehavior: "Filter Change"
}, Vr = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDMyIDMyMGgtMzJjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2MTEySDY0VjEyOGgxNDRjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY4MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJ2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMzM2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZ6TTQ4OCAwSDM2MGMtMjEuMzcgMC0zMi4wNSAyNS45MS0xNyA0MWwzNS43MyAzNS43M0wxMzUgMzIwLjM3YTI0IDI0IDAgMDAwIDM0TDE1Ny42NyAzNzdhMjQgMjQgMCAwMDM0IDBsMjQzLjYxLTI0My42OEw0NzEgMTY5YzE1IDE1IDQxIDQuNSA0MS0xN1YyNGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjR6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";
const N2 = R.createContext({}), Yr = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMCA3IDUuNTkgMS40MSAwIDAgMS40MSA1LjU5IDcgMCAxMi41OSAxLjQxIDE0IDcgOC40MSAxMi41OSAxNCAxNCAxMi41OSA4LjQxIDd6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=", Kr = (e) => {
  const { applyTooltipsToGeo: t, capitalize: n, applyLegendToRow: a, viewport: i, type: c, content: p } = R.useContext(N2), m = t(p.geoName, p.keyedData, "jsx"), g = a(p.keyedData);
  return /* @__PURE__ */ r.createElement("section", { className: n ? "modal-content tooltip capitalize " + i : "modal-content tooltip " + i, "aria-hidden": "true" }, /* @__PURE__ */ r.createElement("img", { src: Yr, className: "modal-close", alt: "Close Modal" }), c === "data" && /* @__PURE__ */ r.createElement(qe, { fill: g[0] }), /* @__PURE__ */ r.createElement("div", { className: "content" }, m));
};
function F6(e) {
  return A0({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" } }] })(e);
}
function Q8(e) {
  return A0({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function z6(e) {
  return A0({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" } }] })(e);
}
function G6(e) {
  return A0({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" } }] })(e);
}
const Zr = (e) => {
  const { state: t, viewport: n } = e, a = (c) => {
    switch (c) {
      case "Arrow Down":
        return /* @__PURE__ */ r.createElement(F6, null);
      case "Arrow Up":
        return /* @__PURE__ */ r.createElement(G6, null);
      case "Arrow Right":
        return /* @__PURE__ */ r.createElement(z6, null);
      default:
        return;
    }
  }, { legendClasses: i } = We(t, n);
  return t.hexMap.type === "shapes" && t.hexMap.shapeGroups.map((c, p) => /* @__PURE__ */ r.createElement("aside", { id: "legend", className: i.aside.join(" "), role: "region", "aria-label": "Legend", tabIndex: 0 }, /* @__PURE__ */ r.createElement("section", { className: i.section.join(" "), "aria-label": "Map Legend" }, c.legendTitle && /* @__PURE__ */ r.createElement("h3", { className: i.title.join(" ") }, f3(c.legendTitle)), c.legendDescription && /* @__PURE__ */ r.createElement("p", { className: i.description.join(" ") }, f3(c.legendDescription)), /* @__PURE__ */ r.createElement("ul", { className: i.ul.join(" "), "aria-label": "Legend items", style: { listStyle: "none" } }, c.items.map((m, g) => /* @__PURE__ */ r.createElement("li", { className: i.li.join(" "), key: `hex-legend-item-${g}` }, a(m.shape), " ", m.value))))));
};
function x0(e) {
  var t = e.id, n = e.width, a = e.height, i = e.children;
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("pattern", {
    id: t,
    width: n,
    height: a,
    patternUnits: "userSpaceOnUse"
  }, i));
}
x0.propTypes = {
  id: H.string.isRequired,
  width: H.number.isRequired,
  height: H.number.isRequired,
  children: H.node.isRequired
};
var o5 = {
  horizontal: "horizontal",
  vertical: "vertical",
  diagonal: "diagonal",
  diagonalRightToLeft: "diagonalRightToLeft"
};
function Xr(e) {
  var t = e.height, n = e.orientation;
  switch (n) {
    case o5.horizontal:
      return "M 0," + t / 2 + " l " + t + ",0";
    case o5.diagonal:
      return "M 0," + t + " l " + t + "," + -t + " M " + -t / 4 + "," + t / 4 + " l " + t / 2 + "," + -t / 2 + `
             M ` + 3 / 4 * t + "," + 5 / 4 * t + " l " + t / 2 + "," + -t / 2;
    case o5.diagonalRightToLeft:
      return "M 0,0 l " + t + "," + t + `
        M ` + -t / 4 + "," + 3 / 4 * t + " l " + t / 2 + "," + t / 2 + `
        M ` + 3 / 4 * t + "," + -t / 4 + " l " + t / 2 + "," + t / 2;
    case o5.vertical:
    default:
      return "M " + t / 2 + ", 0 l 0, " + t;
  }
}
function O0(e) {
  var t = e.id, n = e.width, a = e.height, i = e.stroke, c = e.strokeWidth, p = e.strokeDasharray, m = e.strokeLinecap, g = m === void 0 ? "square" : m, d = e.shapeRendering, u = d === void 0 ? "auto" : d, s = e.orientation, o = s === void 0 ? ["vertical"] : s, l = e.background, f = e.className, S = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ r.createElement(x0, {
    id: t,
    width: n,
    height: a
  }, !!l && /* @__PURE__ */ r.createElement("rect", {
    className: T2("visx-pattern-line-background"),
    width: n,
    height: a,
    fill: l
  }), S.map(function(C, E) {
    return /* @__PURE__ */ r.createElement("path", {
      key: "visx-" + t + "-line-" + C + "-" + E,
      className: T2("visx-pattern-line", f),
      d: Xr({
        orientation: C,
        height: a
      }),
      stroke: i,
      strokeWidth: c,
      strokeDasharray: p,
      strokeLinecap: g,
      shapeRendering: u
    });
  }));
}
O0.propTypes = {
  id: H.string.isRequired,
  width: H.number.isRequired,
  height: H.number.isRequired,
  className: H.string,
  background: H.string,
  stroke: H.string,
  strokeWidth: H.oneOfType([H.number, H.string]),
  strokeDasharray: H.oneOfType([H.string, H.number]),
  strokeLinecap: H.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: H.oneOfType([H.string, H.number]),
  orientation: H.array
};
function I0(e) {
  var t, n = e.id, a = e.width, i = e.height, c = e.radius, p = c === void 0 ? 2 : c, m = e.fill, g = e.stroke, d = e.strokeWidth, u = e.strokeDasharray, s = e.background, o = e.complement, l = o === void 0 ? !1 : o, f = e.className, S;
  return l && (S = [[0, 0], [0, i], [a, 0], [a, i]]), /* @__PURE__ */ r.createElement(x0, {
    id: n,
    width: a,
    height: i
  }, !!s && /* @__PURE__ */ r.createElement("rect", {
    width: a,
    height: i,
    fill: s
  }), /* @__PURE__ */ r.createElement("circle", {
    className: T2("visx-pattern-circle", f),
    cx: a / 2,
    cy: i / 2,
    r: p,
    fill: m,
    stroke: g,
    strokeWidth: d,
    strokeDasharray: u
  }), (t = S) == null ? void 0 : t.map(function(C) {
    var E = C[0], y = C[1];
    return /* @__PURE__ */ r.createElement("circle", {
      key: n + "-complement-" + E + "-" + y,
      className: T2("visx-pattern-circle visx-pattern-circle-complement", f),
      cx: E,
      cy: y,
      r: p,
      fill: m,
      stroke: g,
      strokeWidth: d,
      strokeDasharray: u
    });
  }));
}
I0.propTypes = {
  id: H.string.isRequired,
  width: H.number.isRequired,
  height: H.number.isRequired,
  radius: H.number,
  fill: H.string,
  className: H.string,
  stroke: H.string,
  strokeWidth: H.oneOfType([H.number, H.string]),
  strokeDasharray: H.oneOfType([H.number, H.string]),
  complement: H.bool,
  background: H.string
};
function Bt(e) {
  var t = e.id, n = e.width, a = e.height, i = e.path, c = e.fill, p = c === void 0 ? "transparent" : c, m = e.stroke, g = e.strokeWidth, d = e.strokeDasharray, u = e.strokeLinecap, s = u === void 0 ? "square" : u, o = e.shapeRendering, l = o === void 0 ? "auto" : o, f = e.background, S = e.className;
  return /* @__PURE__ */ r.createElement(x0, {
    id: t,
    width: n,
    height: a
  }, !!f && /* @__PURE__ */ r.createElement("rect", {
    width: n,
    height: a,
    fill: f
  }), /* @__PURE__ */ r.createElement("path", {
    className: T2("visx-pattern-path", S),
    d: i,
    fill: p,
    stroke: m,
    strokeWidth: g,
    strokeDasharray: d,
    strokeLinecap: s,
    shapeRendering: l
  }));
}
Bt.propTypes = {
  id: H.string.isRequired,
  width: H.number.isRequired,
  height: H.number.isRequired,
  path: H.string,
  fill: H.string,
  className: H.string,
  background: H.string,
  stroke: H.string,
  strokeWidth: H.oneOfType([H.number, H.string]),
  strokeDasharray: H.oneOfType([H.string, H.number]),
  strokeLinecap: H.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: H.oneOfType([H.string, H.number])
};
function _0(e) {
  var t = e.id, n = e.width, a = e.height, i = e.fill, c = e.stroke, p = e.strokeWidth, m = e.strokeDasharray, g = e.strokeLinecap, d = e.shapeRendering, u = e.background, s = e.className;
  return /* @__PURE__ */ r.createElement(Bt, {
    className: T2("visx-pattern-wave", s),
    path: "M 0 " + a / 2 + " c " + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + ` 0
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + -a / 2 + " " + a / 2 + `
             c ` + a / 8 + " " + a / 4 + " , " + a * 3 / 8 + " " + a / 4 + " , " + a / 2 + " 0 M " + a + " " + a / 2 + `
             c ` + a / 8 + " " + -a / 4 + " , " + a * 3 / 8 + " " + -a / 4 + " , " + a / 2 + " 0",
    id: t,
    width: n,
    height: a,
    fill: i,
    stroke: c,
    strokeWidth: p,
    strokeDasharray: m,
    strokeLinecap: g,
    shapeRendering: d,
    background: u
  });
}
_0.propTypes = {
  id: H.string.isRequired,
  width: H.number.isRequired,
  height: H.number.isRequired,
  fill: H.string,
  className: H.string,
  background: H.string,
  stroke: H.string,
  strokeWidth: H.oneOfType([H.number, H.string]),
  strokeDasharray: H.oneOfType([H.string, H.number]),
  strokeLinecap: H.oneOf(["square", "butt", "round", "inherit"]),
  shapeRendering: H.oneOfType([H.string, H.number])
};
function a4(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, c = e.className, p = e.children;
  return /* @__PURE__ */ r.createElement(W3, {
    className: T2("visx-glyph", c),
    top: n,
    left: i
  }, p);
}
a4.propTypes = {
  top: H.number,
  left: H.number,
  className: H.string,
  children: H.node
};
var Qr = ["children", "className", "top", "left", "size"];
function J6() {
  return J6 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, J6.apply(this, arguments);
}
function eo(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function M7(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, c = e.size, p = eo(e, Qr), m = U4();
  return m.type(ya), (typeof c == "number" || c) && m.size(c), t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: m
  })) : /* @__PURE__ */ r.createElement(a4, {
    top: a,
    left: i
  }, /* @__PURE__ */ r.createElement("path", J6({
    className: T2("visx-glyph-diamond", n),
    d: m() || ""
  }, p)));
}
M7.propTypes = {
  children: H.func,
  className: H.string,
  top: H.number,
  left: H.number,
  size: H.oneOfType([H.number, H.func])
};
var to = ["children", "className", "top", "left", "size"];
function H6() {
  return H6 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, H6.apply(this, arguments);
}
function no(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function x7(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, c = e.size, p = no(e, to), m = U4();
  return m.type(Ea), (typeof c == "number" || c) && m.size(c), t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: m
  })) : /* @__PURE__ */ r.createElement(a4, {
    top: a,
    left: i
  }, /* @__PURE__ */ r.createElement("path", H6({
    className: T2("visx-glyph-star", n),
    d: m() || ""
  }, p)));
}
x7.propTypes = {
  children: H.func,
  className: H.string,
  top: H.number,
  left: H.number,
  size: H.oneOfType([H.number, H.func])
};
var ao = ["children", "className", "top", "left", "size"];
function W6() {
  return W6 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, W6.apply(this, arguments);
}
function ro(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function O7(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, c = e.size, p = ro(e, ao), m = U4();
  return m.type(La), (typeof c == "number" || c) && m.size(c), t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: m
  })) : /* @__PURE__ */ r.createElement(a4, {
    top: a,
    left: i
  }, /* @__PURE__ */ r.createElement("path", W6({
    className: T2("visx-glyph-triangle", n),
    d: m() || ""
  }, p)));
}
O7.propTypes = {
  children: H.func,
  className: H.string,
  top: H.number,
  left: H.number,
  size: H.oneOfType([H.number, H.func])
};
var oo = ["children", "className", "top", "left", "size"];
function j6() {
  return j6 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, j6.apply(this, arguments);
}
function io(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function I7(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, c = e.size, p = io(e, oo), m = U4();
  return m.type(ba), (typeof c == "number" || c) && m.size(c), t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: m
  })) : /* @__PURE__ */ r.createElement(a4, {
    top: a,
    left: i
  }, /* @__PURE__ */ r.createElement("path", j6({
    className: T2("visx-glyph-square", n),
    d: m() || ""
  }, p)));
}
I7.propTypes = {
  children: H.func,
  className: H.string,
  top: H.number,
  left: H.number,
  size: H.oneOfType([H.number, H.func])
};
var lo = ["children", "className", "top", "left", "size"];
function q6() {
  return q6 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, q6.apply(this, arguments);
}
function so(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _7(e) {
  var t = e.children, n = e.className, a = e.top, i = e.left, c = e.size, p = so(e, lo), m = U4();
  return m.type(Xe), (typeof c == "number" || c) && m.size(c), t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: m
  })) : /* @__PURE__ */ r.createElement(a4, {
    top: a,
    left: i
  }, /* @__PURE__ */ r.createElement("path", q6({
    className: T2("visx-glyph-circle", n),
    d: m() || ""
  }, p)));
}
_7.propTypes = {
  children: H.func,
  className: H.string,
  top: H.number,
  left: H.number,
  size: H.oneOfType([H.number, H.func])
};
const co = R.forwardRef((e, t) => {
  var y;
  const { skipId: n } = e, {
    displayDataAsText: a,
    resetLegendToggles: i,
    runtimeFilters: c,
    runtimeLegend: p,
    setAccessibleStatus: m,
    setRuntimeLegend: g,
    state: d,
    viewport: u
  } = R.useContext(N2), { legend: s } = d, o = (v, b) => {
    const T = !p[v].disabled;
    p[v].disabled = T;
    let P = [...p];
    P[v].disabled = T;
    const x = p.disabledAmt ?? 0;
    P.disabledAmt = T ? x + 1 : x - 1, g(P), m(`Disabled legend item ${b ?? ""}. Please reference the data table to see updated values.`);
  }, l = () => {
    let v;
    return v = p.map((b, T) => {
      const P = a(b.max, "primary"), x = a(b.min, "primary");
      let A = `${x}${P !== x ? ` - ${P}` : ""}`;
      s.type === "equalinterval" && T !== p.length - 1 && (A = `${x} - < ${P}`);
      const { disabled: D } = b;
      s.type === "category" && (A = a(b.value, "primary")), b.max === 0 && b.min === 0 && (A = "0");
      let I = A;
      b.hasOwnProperty("special") && (I = b.label || b.value);
      const N = () => {
        let F = ["legend-container__li"];
        return D && F.push("legend-container__li--disabled"), b.hasOwnProperty("special") && F.push("legend-container__li--special-class"), F;
      };
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        /* @__PURE__ */ r.createElement(
          "li",
          {
            className: N().join(" "),
            key: T,
            title: `Legend item ${I} - Click to disable`,
            onClick: () => {
              o(T, I);
            },
            onKeyDown: (F) => {
              F.key === "Enter" && (F.preventDefault(), o(T, I));
            },
            tabIndex: 0
          },
          /* @__PURE__ */ r.createElement(qe, { viewport: u, fill: b.color }),
          " ",
          /* @__PURE__ */ r.createElement("span", null, I)
        )
      );
    }), d.map.patterns && d.map.patterns.map((b, T) => {
      const { pattern: P, dataKey: x, size: A } = b;
      let D = "black";
      const I = {
        small: "8",
        medium: "10",
        large: "12"
      }, N = 16;
      v.push(
        /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("li", { className: "legend-container__li legend-container__li--geo-pattern", "aria-label": "You are on a pattern button. We dont support toggling patterns on this legend at the moment, but provide the area as being focusable for congruity.", tabIndex: 0 }, /* @__PURE__ */ r.createElement("span", { className: "legend-item", style: { border: "unset" } }, /* @__PURE__ */ r.createElement("svg", { width: N, height: N }, P === "waves" && /* @__PURE__ */ r.createElement(_0, { id: `${x}--${T}`, height: I[A] ?? 10, width: I[A] ?? 10, fill: D }), P === "circles" && /* @__PURE__ */ r.createElement(I0, { id: `${x}--${T}`, height: I[A] ?? 10, width: I[A] ?? 10, fill: D }), P === "lines" && /* @__PURE__ */ r.createElement(O0, { id: `${x}--${T}`, height: I[A] ?? 6, width: I[A] ?? 10, stroke: D, strokeWidth: 2, orientation: ["diagonalRightToLeft"] }), /* @__PURE__ */ r.createElement("circle", { id: x, fill: `url(#${x}--${T})`, r: N / 2, cx: N / 2, cy: N / 2, stroke: "#0000004d", strokeWidth: 1 }))), /* @__PURE__ */ r.createElement("p", { style: { lineHeight: "22.4px" } }, b.label || b.dataValue || "")))
      );
    }), v;
  }, { legendClasses: f } = We(d, u), S = (v) => {
    const b = t.current;
    v && v.preventDefault(), i(), m("Legend has been reset, please reference the data table to see updated values."), b && b.focus();
  }, E = {
    pin: /* @__PURE__ */ r.createElement("path", { className: "marker", d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z", strokeWidth: 2, stroke: "black", transform: "scale(0.5)" }),
    circle: /* @__PURE__ */ r.createElement(_7, { color: "#000", size: 150 }),
    square: /* @__PURE__ */ r.createElement(I7, { color: "#000", size: 150 }),
    diamond: /* @__PURE__ */ r.createElement(M7, { color: "#000", size: 150 }),
    star: /* @__PURE__ */ r.createElement(x7, { color: "#000", size: 150 }),
    triangle: /* @__PURE__ */ r.createElement(O7, { color: "#000", size: 150 })
  };
  return /* @__PURE__ */ r.createElement(I3, { component: "Sidebar" }, /* @__PURE__ */ r.createElement("div", { className: "legends" }, /* @__PURE__ */ r.createElement("aside", { id: n || "legend", className: f.aside.join(" ") || "", role: "region", "aria-label": "Legend", tabIndex: 0, ref: t }, /* @__PURE__ */ r.createElement("section", { className: f.section.join(" ") || "", "aria-label": "Map Legend" }, s.title && /* @__PURE__ */ r.createElement("h3", { className: f.title.join(" ") || "" }, f3(s.title)), s.dynamicDescription === !1 && s.description && /* @__PURE__ */ r.createElement("p", { className: f.description.join(" ") || "" }, f3(s.description)), s.dynamicDescription === !0 && c.map((v, b) => {
    const T = `${b},${v.values.indexOf(String(v.active))}`, P = s.descriptions[T] || "";
    return P.length > 0 ? /* @__PURE__ */ r.createElement("p", { key: `dynamic-description-${T}`, className: `dynamic-legend-description-${T}` }, P) : !0;
  }), /* @__PURE__ */ r.createElement("ul", { className: f.ul.join(" ") || "", "aria-label": "Legend items" }, l()), (d.visual.additionalCityStyles.some((v) => v.label) || d.visual.cityStyleLabel) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: f.div.join(" ") || "" }, d.visual.cityStyleLabel && /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(W3, { top: d.visual.cityStyle === "pin" ? 19 : d.visual.cityStyle === "triangle" ? 13 : 11, left: 10 }, E[d.visual.cityStyle.toLowerCase()])), /* @__PURE__ */ r.createElement("p", null, d.visual.cityStyleLabel)), d.visual.additionalCityStyles.map(
    ({ shape: v, label: b }) => b && /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(W3, { top: v === "Pin" ? 19 : v === "Triangle" ? 13 : 11, left: 10 }, E[v.toLowerCase()])), /* @__PURE__ */ r.createElement("p", null, b))
  ))), p.disabledAmt > 0 && /* @__PURE__ */ r.createElement(H5, { onClick: S }, "Reset"))), ((y = d.hexMap.shapeGroups) == null ? void 0 : y.length) > 0 && d.hexMap.type === "shapes" && d.general.displayAsHex && /* @__PURE__ */ r.createElement(Zr, { state: d, runtimeLegend: p, viewport: u })));
});
function uo(e, t, n) {
  var a = this, i = R.useRef(null), c = R.useRef(0), p = R.useRef(null), m = R.useRef([]), g = R.useRef(), d = R.useRef(), u = R.useRef(e), s = R.useRef(!0);
  u.current = e;
  var o = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  t = +t || 0, n = n || {};
  var l = !!n.leading, f = "trailing" in n ? !!n.trailing : !0, S = "maxWait" in n, C = S ? Math.max(+n.maxWait || 0, t) : null, E = R.useCallback(function(N) {
    var F = m.current, _ = g.current;
    return m.current = g.current = null, c.current = N, d.current = u.current.apply(_, F);
  }, []), y = R.useCallback(function(N, F) {
    o && cancelAnimationFrame(p.current), p.current = o ? requestAnimationFrame(N) : setTimeout(N, F);
  }, [o]), v = R.useCallback(function(N) {
    if (!s.current)
      return !1;
    var F = N - i.current, _ = N - c.current;
    return !i.current || F >= t || F < 0 || S && _ >= C;
  }, [C, S, t]), b = R.useCallback(function(N) {
    return p.current = null, f && m.current ? E(N) : (m.current = g.current = null, d.current);
  }, [E, f]), T = R.useCallback(function() {
    var N = Date.now();
    if (v(N))
      return b(N);
    if (s.current) {
      var F = N - i.current, _ = N - c.current, k = t - F, h = S ? Math.min(k, C - _) : k;
      y(T, h);
    }
  }, [C, S, v, y, b, t]), P = R.useCallback(function() {
    p.current && (o ? cancelAnimationFrame(p.current) : clearTimeout(p.current)), c.current = 0, m.current = i.current = g.current = p.current = null;
  }, [o]), x = R.useCallback(function() {
    return p.current ? b(Date.now()) : d.current;
  }, [b]);
  R.useEffect(function() {
    return s.current = !0, function() {
      s.current = !1;
    };
  }, []);
  var A = R.useCallback(function() {
    for (var N = [], F = 0; F < arguments.length; F++)
      N[F] = arguments[F];
    var _ = Date.now(), k = v(_);
    if (m.current = N, g.current = a, i.current = _, k) {
      if (!p.current && s.current)
        return c.current = i.current, y(T, t), l ? E(i.current) : d.current;
      if (S)
        return y(T, t), E(i.current);
    }
    return p.current || y(T, t), d.current;
  }, [E, l, S, v, y, T, t]), D = R.useCallback(function() {
    return !!p.current;
  }, []), I = R.useMemo(function() {
    return {
      callback: A,
      cancel: P,
      flush: x,
      pending: D
    };
  }, [A, P, x, D]);
  return I;
}
function po(e, t) {
  return e === t;
}
function e9(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function mo(e) {
  var t = R.useState(e9(e)), n = t[0], a = t[1], i = R.useCallback(function(c) {
    return a(e9(c));
  }, []);
  return [n, i];
}
function Ut(e, t, n) {
  var a = n && n.equalityFn || po, i = mo(e), c = i[0], p = i[1], m = uo(R.useCallback(function(d) {
    return p(d);
  }, [p]), t, n), g = R.useRef(e);
  return R.useEffect(function() {
    a(g.current, e) || (m.callback(e), g.current = e);
  }, [e, m, a]), [c, { cancel: m.cancel, pending: m.pending, flush: m.flush }];
}
const go = (e) => {
  var g;
  const { state: t, setState: n, dimensions: a } = R.useContext(N2), i = (d = !0) => {
    const u = {};
    return t.data.forEach((s) => {
      Object.keys(s).forEach((o) => u[o] = !0);
    }), d && Object.keys(u).forEach((s) => {
      (t.series && t.series.filter((o) => o.dataKey === s).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(s)) && delete u[s];
    }), Object.keys(u);
  }, c = (d, u, s) => {
    const o = [...t == null ? void 0 : t.annotations];
    o[s][u] = d, o[s].savedDimensions = [a[0] * 0.73, a[1]], n({
      ...t,
      annotations: o
    });
  }, p = () => {
    var l;
    const d = (l = document.querySelector(".map-container > section > svg, .map-container > section > canvas")) == null ? void 0 : l.getBoundingClientRect(), u = [d.width, d.height], s = {
      text: "New Annotation",
      snapToNearestPoint: !1,
      fontSize: 16,
      show: {
        desktop: !0,
        tablet: !0,
        mobile: !0
      },
      markerType: "arrow",
      connectorType: "line",
      colors: {
        label: "black",
        connector: "black",
        marker: "black"
      },
      selected: !0,
      anchor: {
        vertical: !1,
        horizontal: !1
      },
      connectionType: "line",
      marker: "arrow",
      edit: {
        subject: !0,
        label: !0
      },
      seriesKey: "",
      x: Number(u == null ? void 0 : u[0]) / 2,
      y: Number((u == null ? void 0 : u[1]) / 2),
      xKey: null,
      yKey: null,
      dx: 0,
      dy: 0,
      opacity: "100",
      savedDimensions: [a[0] * 0.73, a[1]]
    }, o = Array.isArray(t.annotations) ? t.annotations : [];
    n({
      ...t,
      annotations: [...o, s]
    });
  }, m = (d) => {
    const u = t.annotations.filter((s, o) => o !== d);
    n({
      ...t,
      annotations: u
    });
  };
  return /* @__PURE__ */ r.createElement(Y4, null, /* @__PURE__ */ r.createElement(Y4.Section, { title: e.name }, (t == null ? void 0 : t.annotations) && (t == null ? void 0 : t.annotations.map((d, u) => {
    var s, o, l, f, S, C;
    return /* @__PURE__ */ r.createElement(Y4, null, /* @__PURE__ */ r.createElement(Y4.Section, { title: d.text ? d.text.substring(0, 15) + "..." : `Annotation ${u + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: d.text, onChange: (E) => c(E.target.value, "text", u) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].opacity = E.target.value, n({
            ...t,
            annotations: y
          });
        },
        value: ((o = (s = t == null ? void 0 : t.annotations) == null ? void 0 : s[u]) == null ? void 0 : o.opacity) || "100"
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Subject", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (f = (l = t == null ? void 0 : t.annotations[u]) == null ? void 0 : l.edit) == null ? void 0 : f.subject,
        onClick: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].edit.subject = E.target.checked, n({
            ...t,
            annotations: y
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Label", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (C = (S = t == null ? void 0 : t.annotations[u]) == null ? void 0 : S.edit) == null ? void 0 : C.label,
        onClick: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].edit.label = E.target.checked, n({
            ...t,
            annotations: y
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Associated Series:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].seriesKey = E.target.value, n({
            ...t,
            annotations: y
          });
        }
      },
      /* @__PURE__ */ r.createElement("option", { key: "none", value: "none" }, "None"),
      i(!1).map((E, y) => /* @__PURE__ */ r.createElement("option", null, E))
    )), /* @__PURE__ */ r.createElement("label", null, "Connection Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].connectionType = E.target.value, n({
            ...t,
            annotations: y
          });
        }
      },
      ["curve", "line", "elbow", "none"].map((E, y) => /* @__PURE__ */ r.createElement("option", { key: E, value: E }, E))
    )), d.connectionType === "curve" && /* @__PURE__ */ r.createElement("label", null, "Line Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].lineType = E.target.value, n({
            ...t,
            annotations: y
          });
        }
      },
      Object.entries(qn).map(([E, y]) => /* @__PURE__ */ r.createElement("option", { key: y, value: y }, E))
    )), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (E) => {
          const y = [...t == null ? void 0 : t.annotations];
          y[u].marker = E.target.value, n({
            ...t,
            annotations: y
          });
        }
      },
      ["circle", "arrow"].map((E, y) => /* @__PURE__ */ r.createElement("option", null, E))
    )), /* @__PURE__ */ r.createElement(H5, { className: "warn btn-warn btn btn-remove delete", onClick: () => m(u) }, "Delete Annotation"))));
  })), ((g = t == null ? void 0 : t.annotations) == null ? void 0 : g.length) < 3 && /* @__PURE__ */ r.createElement(H5, { onClick: p }, "Add Annotation")));
};
const fo = ({ name: e }) => {
  const { state: t, setState: n } = R.useContext(N2), a = "circles", i = ["circles", "waves", "lines"], {
    map: { patterns: c },
    data: p
  } = t, m = () => {
    let u = [...t.map.patterns];
    u.push({ dataKey: "", pattern: a }), n({
      ...t,
      map: {
        ...t.map,
        patterns: u
      }
    });
  }, g = (u, s, o) => {
    const l = [...t.map.patterns];
    l[s] = { ...l[s], [o]: u }, n({
      ...t,
      map: {
        ...t.map,
        patterns: l
      }
    });
  }, d = (u) => {
    const s = t.map.patterns.filter((o, l) => l !== u);
    n({
      ...t,
      map: {
        ...t.map,
        patterns: s
      }
    });
  };
  return /* @__PURE__ */ r.createElement(C2, null, /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, e)), /* @__PURE__ */ r.createElement(b2, null, c && c.map((u, s) => {
    [...new Set(p == null ? void 0 : p.map((l) => l == null ? void 0 : l[u == null ? void 0 : u.dataKey]))];
    const o = Object.keys(p[0]);
    return o.unshift("Select"), o.sort(), /* @__PURE__ */ r.createElement(x4, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(C2, null, /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, u.dataKey ? `${u.dataKey}: ${u.dataValue ?? "No Value"}` : "Select Column")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: `pattern-dataKey--${s}` }, "Data Key:"), /* @__PURE__ */ r.createElement("select", { id: `pattern-dataKey--${s}`, value: u.dataKey !== "" ? u.dataKey : "Select", onChange: (l) => g(l.target.value, s, "dataKey") }, o.map((l, f) => /* @__PURE__ */ r.createElement("option", { value: l, key: f }, l))), /* @__PURE__ */ r.createElement("label", { htmlFor: `pattern-dataValue--${s}` }, "Data Value:", /* @__PURE__ */ r.createElement("input", { type: "text", onChange: (l) => g(l.target.value, s, "dataValue"), id: `pattern-dataValue--${s}`, value: u.dataValue === "" ? "" : u.dataValue })), /* @__PURE__ */ r.createElement("label", { htmlFor: `pattern-label--${s}` }, "Label (optional):", /* @__PURE__ */ r.createElement("input", { type: "text", onChange: (l) => g(l.target.value, s, "label"), id: `pattern-dataValue--${s}`, value: u.label === "" ? "" : u.label })), /* @__PURE__ */ r.createElement("label", { htmlFor: `pattern-type--${s}` }, "Pattern Type:"), /* @__PURE__ */ r.createElement("select", { id: `pattern-type--${s}`, value: u == null ? void 0 : u.pattern, onChange: (l) => g(l.target.value, s, "pattern") }, i.map((l, f) => /* @__PURE__ */ r.createElement("option", { value: l, key: f }, l))), /* @__PURE__ */ r.createElement("label", { htmlFor: `pattern-size--${s}` }, "Pattern Size:"), /* @__PURE__ */ r.createElement("select", { id: `pattern-size--${s}`, value: u == null ? void 0 : u.size, onChange: (l) => g(l.target.value, s, "size") }, ["small", "medium", "large"].map((l, f) => /* @__PURE__ */ r.createElement("option", { value: l, key: f }, l))), /* @__PURE__ */ r.createElement("div", { className: "pattern-input__color" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "patternColor" }, "Pattern Color", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "If this setting is used, it is the reponsibility of the visualization author to verify the visualization colors meet WCAG 3:1 contrast ratios."))), /* @__PURE__ */ r.createElement("input", { type: "text", value: u.color || "", id: "patternColor", name: "patternColor", onChange: (l) => g(l.target.value, s, "color") }))), /* @__PURE__ */ r.createElement(H5, { onClick: (l) => d(s), className: "btn btn--remove warn" }, "Remove Pattern")))));
  }), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: m }, "Add Geo Pattern")));
}, ho = {
  Annotate: go,
  PatternSettings: fo
}, yo = !0, So = {
  title: "Default World Map",
  subtext: "",
  type: "bubble",
  geoType: "world",
  headerColor: "theme-blue",
  geoBorderColor: "darkGray",
  showSidebar: !0,
  showTitle: !0,
  showDownloadButton: !0,
  expandDataTable: !0,
  equalNumberOptIn: !0
}, Co = "pinkpurple", vo = {
  geo: {
    name: "Country",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Data",
    label: "Data Label",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0
  },
  navigate: {
    name: "Link",
    tooltip: !1,
    dataTable: !1
  }
}, Eo = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    "N/A"
  ],
  separateZero: !0
}, bo = [
  {
    Country: "Atlanta",
    Data: 10,
    Link: "",
    "Sample Categories": "Category 1",
    Regions: "North America"
  },
  {
    Country: "Aruba",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 1",
    Regions: "North America"
  },
  {
    Country: "Afghanistan",
    Data: 59,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Angola",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Anguilla",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Albania",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Åland",
    Data: 99,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Andorra",
    Data: 75,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "United Arab Emirates",
    Data: 62,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Argentina",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Armenia",
    Data: 23,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "American Samoa",
    Data: 48,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Ashmore and Cartier Is.",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Fr. S. Antarctic Lands",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Antigua and Barb.",
    Data: 91,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Australia",
    Data: 57,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Austria",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Azerbaijan",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Burundi",
    Data: 95,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Belgium",
    Data: 88,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Benin",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Burkina Faso",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Bangladesh",
    Data: 46,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Bulgaria",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Bahrain",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Bahamas",
    Data: 38,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Bosnia and Herz.",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "St-Barthélemy",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Belarus",
    Data: 35,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Belize",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Bermuda",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Bolivia",
    Data: 20,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Brazil",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Barbados",
    Data: 12,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Brunei",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Bhutan",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Botswana",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Central African Rep.",
    Data: 55,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Canada",
    Data: 14,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Switzerland",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Chile",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "China",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Côte d'Ivoire",
    Data: 84,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Cameroon",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Dem. Rep. Congo",
    Data: 97,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Congo",
    Data: 45,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Cook Is.",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Colombia",
    Data: 92,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Comoros",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Cabo Verde",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Costa Rica",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Cuba",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Curaçao",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Cayman Is.",
    Data: 56,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "N. Cyprus",
    Data: 78,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Cyprus",
    Data: 74,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Czechia",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Germany",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Djibouti",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Dominica",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Denmark",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Dominican Rep.",
    Data: 84,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Algeria",
    Data: 58,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Ecuador",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Egypt",
    Data: 29,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Eritrea",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Spain",
    Data: 9,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Estonia",
    Data: 13,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Ethiopia",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Finland",
    Data: 9,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Fiji",
    Data: 7,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Falkland Is.",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "France",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Faeroe Is.",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Micronesia",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Gabon",
    Data: 72,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "United Kingdom",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Georgia",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Guernsey",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Ghana",
    Data: 71,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Guinea",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Gambia",
    Data: 39,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Guinea-Bissau",
    Data: 48,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Eq. Guinea",
    Data: 74,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Greece",
    Data: 17,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Grenada",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Greenland",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Guatemala",
    Data: 42,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Guam",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Guyana",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Hong Kong",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Heard I. and McDonald Is.",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Honduras",
    Data: 27,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Croatia",
    Data: 41,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Haiti",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Hungary",
    Data: 41,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Indonesia",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Isle of Man",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "India",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Indian Ocean Ter.",
    Data: 32,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Br. Indian Ocean Ter.",
    Data: 66,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Ireland",
    Data: 36,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Iran",
    Data: 36,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Iraq",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Iceland",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Israel",
    Data: 75,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Italy",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Jamaica",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Jersey",
    Data: 99,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Jordan",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Japan",
    Data: 61,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Siachen Glacier",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Kazakhstan",
    Data: 0,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Kenya",
    Data: 73,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Kyrgyzstan",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Cambodia",
    Data: 43,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Kiribati",
    Data: 16,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "St. Kitts and Nevis",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "South Korea",
    Data: 60,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Kosovo",
    Data: 97,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Kuwait",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Laos",
    Data: 8,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Lebanon",
    Data: 86,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Liberia",
    Data: 58,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Libya",
    Data: 87,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Saint Lucia",
    Data: 67,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Liechtenstein",
    Data: 60,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Sri Lanka",
    Data: 55,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Lesotho",
    Data: 56,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Lithuania",
    Data: 31,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Luxembourg",
    Data: 63,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Latvia",
    Data: 44,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Macao",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "St-Martin",
    Data: 81,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Morocco",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Monaco",
    Data: 8,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Moldova",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Madagascar",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Maldives",
    Data: 50,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Mexico",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Marshall Is.",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Macedonia",
    Data: 61,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Mali",
    Data: 45,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Malta",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Myanmar",
    Data: 82,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Montenegro",
    Data: 72,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Mongolia",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "N. Mariana Is.",
    Data: 22,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Mozambique",
    Data: 20,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Mauritania",
    Data: 40,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Montserrat",
    Data: 3,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Mauritius",
    Data: 2,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Malawi",
    Data: 26,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Malaysia",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Namibia",
    Data: 70,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "New Caledonia",
    Data: 93,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Niger",
    Data: 21,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Norfolk Island",
    Data: 5,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Nigeria",
    Data: 43,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Nicaragua",
    Data: 23,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Niue",
    Data: 17,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Netherlands",
    Data: 11,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Norway",
    Data: 47,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Nepal",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Nauru",
    Data: 21,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "New Zealand",
    Data: 4,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Oman",
    Data: 65,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Pakistan",
    Data: 85,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Panama",
    Data: 66,
    Link: "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Pitcairn Is.",
    Data: 89,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Peru",
    Data: 16,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Philippines",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Palau",
    Data: 37,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Papua New Guinea",
    Data: 1,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Poland",
    Data: 14,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Puerto Rico",
    Data: 62,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "North Korea",
    Data: 92,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Portugal",
    Data: 77,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Paraguay",
    Data: 19,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Palestine",
    Data: 28,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Fr. Polynesia",
    Data: 69,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Qatar",
    Data: 40,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "Romania",
    Data: 51,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Russia",
    Data: 13,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Rwanda",
    Data: 91,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "W. Sahara",
    Data: 64,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "Saudi Arabia",
    Data: 90,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "Sudan",
    Data: 58,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "S. Sudan",
    Data: 93,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Senegal",
    Data: 15,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "Singapore",
    Data: 80,
    Link: "",
    "Sample Categories": "Category 1"
  },
  {
    Country: "S. Geo. and the Is.",
    Data: 90,
    Link: "",
    "Sample Categories": "Category 2"
  },
  {
    Country: "Saint Helena",
    Data: 49,
    Link: "",
    "Sample Categories": "Category 3"
  },
  {
    Country: "Solomon Is.",
    Data: 77,
    Link: "",
    "Sample Categories": "Category 4"
  },
  {
    Country: "Sierra Leone",
    Data: 33,
    Link: "",
    "Sample Categories": "Category 5"
  },
  {
    Country: "El Salvador",
    Data: 18,
    Link: "",
    "Sample Categories": "Category 6"
  },
  {
    Country: "San Marino",
    Data: 42,
    Link: "",
    "Sample Categories": "Category 7"
  },
  {
    Country: "Somaliland",
    Data: 52,
    Link: "",
    "Sample Categories": "Category 8"
  },
  {
    Country: "Somalia",
    Data: 68,
    Link: "",
    "Sample Categories": "Category 9"
  },
  {
    Country: "St. Pierre and Miquelon",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Serbia",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "São Tomé and Principe",
    Data: 50,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Suriname",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Slovakia",
    Data: 1,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Slovenia",
    Data: 77,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Sweden",
    Data: 77,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Swaziland",
    Data: 48,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Sint Maarten",
    Data: 75,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Seychelles",
    Data: 73,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Syria",
    Data: 69,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turks and Caicos Is.",
    Data: 73,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Chad",
    Data: 16,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Togo",
    Data: 83,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "Thailand",
    Data: 84,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tajikistan",
    Data: 55,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turkmenistan",
    Data: 59,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Timor-Leste",
    Data: 45,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tonga",
    Data: 43,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Trinidad and Tobago",
    Data: 22,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tunisia",
    Data: 93,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Turkey",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Taiwan",
    Data: 26,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Tanzania",
    Data: 54,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Uganda",
    Data: 55,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Ukraine",
    Data: 57,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Uruguay",
    Data: 15,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "United States of America",
    Data: 45,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "Uzbekistan",
    Data: 96,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vatican",
    Data: 87,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "St. Vin. and Gren.",
    Data: 12,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Venezuela",
    Data: 61,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "British Virgin Is.",
    Data: 91,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "U.S. Virgin Is.",
    Data: 27,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vietnam",
    Data: 82,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Vanuatu",
    Data: 56,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Wallis and Futuna Is.",
    Data: 76,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Samoa",
    Data: 4,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Yemen",
    Data: 39,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    Country: "South Africa",
    Data: 24,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Zambia",
    Data: 38,
    Link: "",
    "Sample Categories": ""
  },
  {
    Country: "Zimbabwe",
    Data: 35,
    Link: "https://cdc.gov/",
    "Sample Categories": ""
  }
], Lo = {
  defaultData: yo,
  general: So,
  color: Co,
  columns: vo,
  legend: Eo,
  data: bo
}, ko = {
  geoType: "us",
  geoBorderColor: "darkGray",
  headerColor: "theme-blue",
  showTitle: !0,
  showSidebar: !0,
  showDownloadButton: !0,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  territoriesLabel: "Territories",
  language: "en",
  hasRegions: !1,
  expandDataTable: !0,
  fullBorder: !1,
  type: "data",
  title: "Default US Map",
  territoriesAlwaysShow: !1,
  geoLabelOverride: "",
  convertFipsCodes: !0,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  }
}, wo = "map", To = "qualitative4", No = {
  geo: {
    name: "State",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    dataTable: !0,
    tooltip: !0,
    prefix: "",
    suffix: "",
    name: "Condition",
    label: ""
  },
  navigate: {
    name: "Condition"
  },
  latitude: {
    name: ""
  },
  longitude: {
    name: ""
  }
}, Po = {
  descriptions: {},
  specialClasses: [],
  unified: !1,
  singleColumn: !1,
  dynamicDescription: !1,
  type: "category",
  numberOfItems: 3,
  position: "side",
  title: "Legend",
  singleRow: !1,
  verticalSorted: !1,
  showSpecialClassesLast: !1,
  categoryValuesOrder: [
    "Arboviral 2",
    "Arboviral 3",
    "Arboviral 4",
    "Arboviral 5",
    "Arboviral 6",
    "Arboviral 7",
    "Arboviral 8",
    "Arboviral 9",
    "Arboviral 10",
    "Arboviral 11",
    "Arboviral 12",
    "Arboviral",
    "Babesiosis",
    "Congenital Syphilis",
    "FDD",
    "Generic v2.0"
  ]
}, Ao = [], Do = {
  wrapColumns: !1,
  label: "Data Table",
  expanded: !1,
  limitHeight: !1,
  height: "",
  caption: "",
  showDownloadUrl: !1,
  showDataTableLink: !0,
  showFullGeoNameInCSV: !1,
  forceDisplay: !0,
  download: !1,
  indexLabel: ""
}, Mo = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0,
  opacity: 90
}, xo = {
  editorErrorMessage: []
}, Oo = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "pin",
  geoCodeCircleSize: "4",
  showBubbleZeros: !1,
  additionalCityStyles: [
    {
      label: "Tampa Diamond",
      column: "State",
      value: "Tampa",
      shape: "Diamond"
    },
    {
      label: " Production Label",
      column: "Status",
      value: "Production",
      shape: "Star"
    },
    {
      label: "Onboarding label",
      column: "Status",
      value: "Onboarding",
      shape: "Triangle"
    }
  ],
  cityStyleLabel: "Default city shape"
}, Io = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, _o = {
  layers: [],
  patterns: [
    {
      dataKey: "State",
      pattern: "circles",
      dataValue: "GU"
    }
  ]
}, Ro = {
  type: "",
  shapeGroups: [
    {
      legendTitle: "",
      legendDescription: "",
      items: [
        {
          key: "",
          shape: "Arrow up",
          column: "",
          operator: "=",
          value: ""
        }
      ]
    }
  ]
}, $o = "Filter Change", Bo = [
  {
    Condition: "Arboviral 2",
    State: "Chicago",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 7",
    State: "Tampa",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 9",
    State: "Seatle",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 9",
    State: "Denver",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 4",
    State: "Dallas",
    Status: "Production"
  },
  {
    Condition: "Arboviral 4",
    State: "Sacramento",
    Status: "Production"
  },
  {
    Condition: "Arboviral 3",
    State: "Atlanta",
    Status: "Production"
  },
  {
    Condition: "Arboviral 9",
    State: "Orlando",
    Status: "Production"
  },
  {
    Condition: "Arboviral 2",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 3",
    State: "AK",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 4",
    State: "AZ",
    Status: "Production"
  },
  {
    Condition: "Arboviral 5",
    State: "AR",
    Status: "Production"
  },
  {
    Condition: "Arboviral 6",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Arboviral 7",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 8",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Arboviral 9",
    State: "IL",
    Status: "Production"
  },
  {
    Condition: "Arboviral 10",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Arboviral 11",
    State: "KS",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral 12",
    State: "LA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MD",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "MS",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "MT",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NE",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "ND",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "PA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "SC",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "SD",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "TX",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "WA",
    Status: "Onboarding"
  },
  {
    Condition: "Arboviral",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Arboviral",
    State: "WY",
    Status: "Production"
  },
  {
    Condition: "Arboviral 5",
    State: "New York City",
    Status: "Production"
  },
  {
    Condition: "Babesiosis",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Babesiosis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Babesiosis",
    State: "ID",
    Status: "Onboarding"
  },
  {
    Condition: "Babesiosis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Babesiosis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "IN",
    Status: "Onboarding"
  },
  {
    Condition: "Congenital Syphilis",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Congenital Syphilis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "AK",
    Status: "Onboarding"
  },
  {
    Condition: "COVID-19",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "KS",
    Status: "Production"
  },
  {
    Condition: "COVID-19",
    State: "KY",
    Status: "Onboarding"
  },
  {
    Condition: "COVID-19",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "CRS",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "FDD",
    State: "MN",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "NY",
    Status: "Piloting"
  },
  {
    Condition: "FDD",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AK",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "AZ",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CO",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "GA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IL",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "IA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "KS",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "ME",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MS",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "MT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NH",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "PA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "WV",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "WY",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "New York City",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "CNMI",
    Status: "Onboarding"
  },
  {
    Condition: "Generic v2.0",
    State: "GU",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "PR",
    Status: "Production"
  },
  {
    Condition: "Generic v2.0",
    State: "VI",
    Status: "Onboarding"
  },
  {
    Condition: "HAI MDRO",
    State: "CO",
    Status: "Onboarding"
  },
  {
    Condition: "HAI MDRO",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "HAI MDRO",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Hepatitis",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "AK",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "CO",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "DE",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "FL",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "IN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "IA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "LA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "MN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NE",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NJ",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "NY",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "RI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "TN",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "VA",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "WV",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "GU",
    Status: "Onboarding"
  },
  {
    Condition: "Hepatitis",
    State: "PR",
    Status: "Production"
  },
  {
    Condition: "Hepatitis",
    State: "VI",
    Status: "Onboarding"
  },
  {
    Condition: "Lyme & TBRD",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Lyme & TBRD",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Lyme & TBRD",
    State: "IL",
    Status: "Onboarding"
  },
  {
    Condition: "Lyme & TBRD",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Lyme & TBRD",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Malaria",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "Malaria",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Measles",
    State: "AL",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "AZ",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Measles",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Mumps",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Mumps",
    State: "New York City",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Pertussis",
    State: "UT",
    Status: "Production"
  },
  {
    Condition: "Pertussis",
    State: "New York City",
    Status: "Piloting"
  },
  {
    Condition: "RIBD",
    State: "GA",
    Status: "Piloting"
  },
  {
    Condition: "RIBD",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "Rubella",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Rubella",
    State: "OR",
    Status: "Piloting"
  },
  {
    Condition: "STD",
    State: "AL",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "CT",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "ID",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "IN",
    Status: "Onboarding"
  },
  {
    Condition: "STD",
    State: "KY",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "NC",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "SC",
    Status: "Production"
  },
  {
    Condition: "STD",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "TB & LTBI",
    State: "AZ",
    Status: "Onboarding"
  },
  {
    Condition: "TB & LTBI",
    State: "MI",
    Status: "Onboarding"
  },
  {
    Condition: "TB & LTBI",
    State: "OR",
    Status: "Production"
  },
  {
    Condition: "Trichinellosis",
    State: "CT",
    Status: "Piloting"
  },
  {
    Condition: "Trichinellosis",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Trichinellosis",
    State: "ID",
    Status: "Onboarding"
  },
  {
    Condition: "Trichinellosis",
    State: "MI",
    Status: "Production"
  },
  {
    Condition: "Trichinellosis",
    State: "WI",
    Status: "Production"
  },
  {
    Condition: "Varicella",
    State: "FL",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "KS",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "MI",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "SC",
    Status: "Piloting"
  },
  {
    Condition: "Varicella",
    State: "UT",
    Status: "Production"
  }
], Uo = "undefined.csv", Fo = "file", zo = {
  horizontal: !0
}, Go = "us", Jo = "darkGray", Ho = "theme-blue", Wo = !0, jo = !0, qo = !0, Vo = !1, Yo = !1, Ko = !1, Zo = "Territories", Xo = "en", Qo = !1, ei = !0, ti = !1, ni = {
  title: "Data Table",
  forceDisplay: !0
}, ai = 4.23, ri = {
  general: ko,
  type: wo,
  color: To,
  columns: No,
  legend: Po,
  filters: Ao,
  table: Do,
  tooltips: Mo,
  runtime: xo,
  visual: Oo,
  mapPosition: Io,
  map: _o,
  hexMap: Ro,
  filterBehavior: $o,
  data: Bo,
  dataFileName: Uo,
  dataFileSourceType: Fo,
  dataDescription: zo,
  geoType: Go,
  geoBorderColor: Jo,
  headerColor: Ho,
  showTitle: Wo,
  showSidebar: jo,
  showDownloadButton: qo,
  showDownloadMediaButton: Vo,
  displayAsHex: Yo,
  displayStateLabels: Ko,
  territoriesLabel: Zo,
  language: Xo,
  hasRegions: Qo,
  expandDataTable: ei,
  fullBorder: ti,
  dataTable: ni,
  validated: ai
}, oi = {
  title: "Default County Map",
  subtext: "",
  territoriesLabel: "Territories",
  type: "data",
  geoType: "us-county",
  headerColor: "theme-blue",
  showSidebar: !0,
  showTitle: !0,
  geoBorderColor: "darkGray",
  showDownloadButton: !0,
  expandDataTable: !1,
  showDownloadMediaButton: !1,
  displayAsHex: !1,
  displayStateLabels: !1,
  language: "en",
  hasRegions: !1,
  fullBorder: !1,
  palette: {
    isReversed: !1
  },
  allowMapZoom: !0,
  hideGeoColumnInTooltip: !1,
  hidePrimaryColumnInTooltip: !1,
  statePicked: {
    fipsCode: "01",
    stateName: "Alabama"
  },
  equalNumberOptIn: !0
}, ii = {
  layers: [
    {
      name: "Layer One",
      url: "./examples/testing-layer.json",
      namespace: "cove"
    },
    {
      name: "Layer Two",
      url: "./examples/testing-layer.json",
      namespace: "cove"
    }
  ]
}, li = "map", si = "pinkpurple", ci = {
  geo: {
    name: "FIPS Codes",
    label: "Location",
    tooltip: !1,
    dataTable: !0
  },
  primary: {
    name: "Insured Rate",
    label: "Data Label",
    prefix: "",
    suffix: "%",
    dataTable: !0,
    tooltip: !0
  },
  navigate: {
    name: "",
    tooltip: !1,
    dataTable: !1
  }
}, ui = {
  numberOfItems: 3,
  position: "side",
  title: "Legend Title",
  description: "Legend Text",
  type: "equalnumber",
  specialClasses: [
    {
      key: "Insured Rate",
      value: "18",
      label: "18"
    }
  ],
  descriptions: {},
  unified: !1,
  singleColumn: !1,
  dynamicDescription: !1
}, pi = [], mi = {
  title: "Data Table",
  forceDisplay: !0
}, di = {
  appearanceType: "hover",
  linkLabel: "Learn More",
  capitalizeLabels: !0
}, gi = {
  editorErrorMessage: []
}, fi = {
  minBubbleSize: 1,
  maxBubbleSize: 20,
  extraBubbleBorder: !1,
  cityStyle: "circle"
}, hi = {
  coordinates: [
    0,
    30
  ],
  zoom: 1
}, yi = [
  {
    "Insured Rate": 18,
    "Coverage Status": "Insured",
    "FIPS Codes": "06075",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 3,
    "Coverage Status": "Insured",
    "FIPS Codes": "06027",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 25,
    "Coverage Status": "Insured",
    "FIPS Codes": "06029",
    "Year (Good filter option)": "2010",
    link: ""
  },
  {
    "Insured Rate": 60,
    "Coverage Status": "Insured",
    "FIPS Codes": "06065",
    "Year (Good filter option)": "2010",
    link: ""
  }
], Si = {
  general: oi,
  map: ii,
  type: li,
  color: si,
  columns: ci,
  legend: ui,
  filters: pi,
  dataTable: mi,
  tooltips: di,
  runtime: gi,
  visual: fi,
  mapPosition: hi,
  data: yi
};
function Ci(e) {
  return e;
}
function vi(e) {
  if (e == null)
    return Ci;
  var t, n, a = e.scale[0], i = e.scale[1], c = e.translate[0], p = e.translate[1];
  return function(m, g) {
    g || (t = n = 0);
    var d = 2, u = m.length, s = new Array(u);
    for (s[0] = (t += m[0]) * a + c, s[1] = (n += m[1]) * i + p; d < u; )
      s[d] = m[d], ++d;
    return s;
  };
}
function Ei(e, t) {
  for (var n, a = e.length, i = a - t; i < --a; )
    n = e[i], e[i++] = e[a], e[a] = n;
}
function l3(e, t) {
  return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? { type: "FeatureCollection", features: t.geometries.map(function(n) {
    return t9(e, n);
  }) } : t9(e, t);
}
function t9(e, t) {
  var n = t.id, a = t.bbox, i = t.properties == null ? {} : t.properties, c = Ft(e, t);
  return n == null && a == null ? { type: "Feature", properties: i, geometry: c } : a == null ? { type: "Feature", id: n, properties: i, geometry: c } : { type: "Feature", id: n, bbox: a, properties: i, geometry: c };
}
function Ft(e, t) {
  var n = vi(e.transform), a = e.arcs;
  function i(u, s) {
    s.length && s.pop();
    for (var o = a[u < 0 ? ~u : u], l = 0, f = o.length; l < f; ++l)
      s.push(n(o[l], l));
    u < 0 && Ei(s, f);
  }
  function c(u) {
    return n(u);
  }
  function p(u) {
    for (var s = [], o = 0, l = u.length; o < l; ++o)
      i(u[o], s);
    return s.length < 2 && s.push(s[0]), s;
  }
  function m(u) {
    for (var s = p(u); s.length < 4; )
      s.push(s[0]);
    return s;
  }
  function g(u) {
    return u.map(m);
  }
  function d(u) {
    var s = u.type, o;
    switch (s) {
      case "GeometryCollection":
        return { type: s, geometries: u.geometries.map(d) };
      case "Point":
        o = c(u.coordinates);
        break;
      case "MultiPoint":
        o = u.coordinates.map(c);
        break;
      case "LineString":
        o = p(u.arcs);
        break;
      case "MultiLineString":
        o = u.arcs.map(p);
        break;
      case "Polygon":
        o = g(u.arcs);
        break;
      case "MultiPolygon":
        o = u.arcs.map(g);
        break;
      default:
        return null;
    }
    return { type: s, coordinates: o };
  }
  return d(t);
}
function bi(e, t) {
  var n = {}, a = {}, i = {}, c = [], p = -1;
  t.forEach(function(d, u) {
    var s = e.arcs[d < 0 ? ~d : d], o;
    s.length < 3 && !s[1][0] && !s[1][1] && (o = t[++p], t[p] = d, t[u] = o);
  }), t.forEach(function(d) {
    var u = m(d), s = u[0], o = u[1], l, f;
    if (l = i[s])
      if (delete i[l.end], l.push(d), l.end = o, f = a[o]) {
        delete a[f.start];
        var S = f === l ? l : l.concat(f);
        a[S.start = l.start] = i[S.end = f.end] = S;
      } else
        a[l.start] = i[l.end] = l;
    else if (l = a[o])
      if (delete a[l.start], l.unshift(d), l.start = s, f = i[s]) {
        delete i[f.end];
        var C = f === l ? l : f.concat(l);
        a[C.start = f.start] = i[C.end = l.end] = C;
      } else
        a[l.start] = i[l.end] = l;
    else
      l = [d], a[l.start = s] = i[l.end = o] = l;
  });
  function m(d) {
    var u = e.arcs[d < 0 ? ~d : d], s = u[0], o;
    return e.transform ? (o = [0, 0], u.forEach(function(l) {
      o[0] += l[0], o[1] += l[1];
    })) : o = u[u.length - 1], d < 0 ? [o, s] : [s, o];
  }
  function g(d, u) {
    for (var s in d) {
      var o = d[s];
      delete u[o.start], delete o.start, delete o.end, o.forEach(function(l) {
        n[l < 0 ? ~l : l] = 1;
      }), c.push(o);
    }
  }
  return g(i, a), g(a, i), t.forEach(function(d) {
    n[d < 0 ? ~d : d] || c.push([d]);
  }), c;
}
function Li(e) {
  return Ft(e, ki.apply(this, arguments));
}
function ki(e, t, n) {
  var a, i, c;
  if (arguments.length > 1)
    a = wi(e, t, n);
  else
    for (i = 0, a = new Array(c = e.arcs.length); i < c; ++i)
      a[i] = i;
  return { type: "MultiLineString", arcs: bi(e, a) };
}
function wi(e, t, n) {
  var a = [], i = [], c;
  function p(s) {
    var o = s < 0 ? ~s : s;
    (i[o] || (i[o] = [])).push({ i: s, g: c });
  }
  function m(s) {
    s.forEach(p);
  }
  function g(s) {
    s.forEach(m);
  }
  function d(s) {
    s.forEach(g);
  }
  function u(s) {
    switch (c = s, s.type) {
      case "GeometryCollection":
        s.geometries.forEach(u);
        break;
      case "LineString":
        m(s.arcs);
        break;
      case "MultiLineString":
      case "Polygon":
        g(s.arcs);
        break;
      case "MultiPolygon":
        d(s.arcs);
        break;
    }
  }
  return u(t), i.forEach(n == null ? function(s) {
    a.push(s[0].i);
  } : function(s) {
    n(s[0].g, s[s.length - 1].g) && a.push(s[0].i);
  }), a;
}
function R7(e, t, n, a) {
  const [i, c] = R.useState([]), p = R.useId(), [m, g] = R.useState([]), [d, u] = R.useState([]);
  R.useEffect(() => {
    s();
  }, []), R.useEffect(() => {
    s();
  }, [e.map.layers]), R.useEffect(() => {
    n && C();
  }, [i]);
  const s = async () => {
    let y = await S();
    c(y);
  }, o = (y, v) => {
    y.preventDefault();
    const b = {
      ...e,
      map: {
        ...e.map,
        layers: e.map.layers.filter((T, P) => P !== v)
      }
    };
    t(b);
  }, l = (y) => {
    y.preventDefault();
    const v = {
      ...e,
      map: {
        ...e.map,
        layers: [
          ...e.map.layers,
          {
            name: "New Custom Layer",
            url: ""
          }
        ]
      }
    };
    t(v);
  }, f = (y, v, b) => {
    y.preventDefault();
    let T = y.target.value;
    b === "fillOpacity" && (T = T / 100);
    let P = [...e.map.layers];
    P[v][b] = T, t({
      ...e,
      map: {
        ...e.map,
        layers: P
      }
    });
  }, S = async () => {
    let y = [];
    if (e.map.layers) {
      for (const v of e.map.layers) {
        let b = await fetch(v.url).then((T) => T.json()).catch((T) => console.warn("error with newLayer item"));
        b || (b = []), y.push(b);
      }
      return y;
    }
  }, C = () => {
    if (i.length === 0 || !i)
      return !1;
    let y = [], v = [];
    i == null || i.map((b, T) => {
      if (b.length === 0)
        return null;
      let P = b.objects[e.map.layers[T].namespace];
      if (!P)
        return null;
      l3(b, P).features.forEach((A) => {
        let D = ["custom-map-layer", `custom-map-layer--${A.properties.name.replace(" ", "-")}`];
        v.push(A), y.push(
          /* @__PURE__ */ r.createElement(W3, { className: D.join(" "), key: `customMapLayer-${A.properties.name.replace(" ", "-")}-${T}` }, /* @__PURE__ */ r.createElement(
            "path",
            {
              d: n(A),
              fill: e.map.layers[T].fill ? e.map.layers[T].fill : A.properties.fill ? A.properties.fill : "transparent",
              fillOpacity: e.map.layers[T].fillOpacity ? e.map.layers[T].fillOpacity : A.properties["fill-opacity"] ? A.properties["fill-opacity"] : "1",
              key: p,
              "data-id": p,
              stroke: e.map.layers[T].stroke ? e.map.layers[T].stroke : A.properties.stroke ? A.properties.stroke : "transparent",
              strokeWidth: e.map.layers[T].strokeWidth ? e.map.layers[T].strokeWidth : A.properties["stroke-width"],
              "data-tooltip-id": `tooltip__${a}`,
              "data-tooltip-html": e.map.layers[T].tooltip ? e.map.layers[T].tooltip : ""
            }
          ))
        );
      });
    }), g(y), u(v);
  }, E = () => null;
  return E.handleRemoveLayer = o, E.handleAddLayer = l, E.handleMapLayer = f, { pathArray: m, featureArray: d, MapLayerHandlers: E };
}
const Ti = ["Arrow Up", "Arrow Down", "Arrow Right", "Arrow Left", "None"], Ni = "<", Pi = ">", Ai = "<=", Di = ">=", Mi = "=", xi = "≠", Oi = (e) => {
  const { state: t, setState: n } = e;
  return t.general.displayAsHex ? /* @__PURE__ */ r.createElement("label", { className: "checkbox mt-4" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.hexMap.type === "shapes",
      onChange: (a) => {
        n({
          ...t,
          hexMap: {
            ...t.hexMap,
            type: a.target.checked ? "shapes" : "standard"
          }
        });
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Display Shapes on Hex Map")) : /* @__PURE__ */ r.createElement(r.Fragment, null);
}, Ii = (e) => {
  const { state: t, handleEditorChanges: n } = e;
  return t.general.geoType === "us" && t.general.type !== " navigation" && t.general.type !== "bubble" && /* @__PURE__ */ r.createElement("label", { className: "checkbox mt-4" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: t.general.displayAsHex,
      onChange: (a) => {
        n("displayAsHex", a.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Display As Hex Map"));
}, _i = (e) => {
  var p;
  const { state: t, setState: n, columnsOptions: a } = e, i = (m, g, d, u) => {
    n({
      ...t,
      hexMap: {
        ...t.hexMap,
        shapeGroups: t.hexMap.shapeGroups.map((s, o) => o === d ? {
          ...s,
          items: s.items.map((l, f) => u === f ? {
            ...l,
            [m]: g
          } : l)
        } : s)
      }
    });
  }, c = (m, g) => {
    n({
      ...t,
      hexMap: {
        ...t.hexMap,
        shapeGroups: t.hexMap.shapeGroups.map((d, u) => u === m ? {
          ...d,
          items: d.items.filter((s, o) => o !== g)
        } : d)
      }
    });
  };
  return t.general.displayAsHex && t.hexMap.type === "shapes" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block" }, t.hexMap.shapeGroups && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x4, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement("ul", { style: { listStyle: "none" } }, (p = t.hexMap.shapeGroups) == null ? void 0 : p.map((m, g) => /* @__PURE__ */ r.createElement(C2, null, /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, `Legend Shape Group ${g + 1}`)), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Title"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: m.legendTitle || "",
      onChange: (d) => n((u) => ({
        ...u,
        hexMap: {
          ...u.hexMap,
          shapeGroups: u.hexMap.shapeGroups.map((s, o) => o === g ? {
            ...s,
            legendTitle: d.target.value
          } : s)
        }
      }))
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Description"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: m.legendDescription || "",
      onChange: (d) => n((u) => ({
        ...u,
        hexMap: {
          ...u.hexMap,
          shapeGroups: u.hexMap.shapeGroups.map((s, o) => o === g ? {
            ...s,
            legendDescription: d.target.value
          } : s)
        }
      }))
    }
  )), m.items.map((d, u) => /* @__PURE__ */ r.createElement(x4, { allowZeroExpanded: !0, style: { marginTop: u === 0 ? "15px" : "initial" } }, /* @__PURE__ */ r.createElement(C2, null, /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, `Shape Condition ${u + 1}`)), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Shape Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: t.hexMap.shapeGroups[g].items[u].shape ? t.hexMap.shapeGroups[g].items[u].shape : "select",
      onChange: (s) => {
        i("shape", s.target.value, g, u);
      }
    },
    Ti.map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s))
  )), /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement("label", { className: "" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label cove-input__label" }, "Column Conditional")), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-row cove-accordion__small-inputs" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col cove-input" }, /* @__PURE__ */ r.createElement("select", { value: t.hexMap.shapeGroups[g].key === "" ? "Select" : t.hexMap.shapeGroups[g].key, className: "cove-input", onChange: (s) => i("key", s.target.value, g, u) }, a)), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col cove-input" }, /* @__PURE__ */ r.createElement("select", { value: t.hexMap.shapeGroups[g].items[u].operator || "-SELECT-", initial: "Select", className: "cove-input", onChange: (s) => i("operator", s.target.value, g, u) }, [Mi].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)), [xi].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)), [Ni].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)), [Pi].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)), [Ai].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)), [Di].map((s) => /* @__PURE__ */ r.createElement("option", { value: s }, s)))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-col cove-input" }, /* @__PURE__ */ r.createElement("input", { type: "text", value: t.hexMap.shapeGroups[g].items[u].value || "", className: "cove-input", style: { height: "100%" }, onChange: (s) => i("value", s.target.value, g, u) })))), /* @__PURE__ */ r.createElement("button", { className: "cove-button cove-button--warn", style: { background: "none", border: "1px solid red", color: "red", marginTop: "15px" }, onClick: (s) => c(g, u) }, "Remove Shape Conditional")))))), /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end", flexWrap: "wrap" } }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-button",
      style: { marginTop: "15px" },
      onClick: () => n({
        ...t,
        hexMap: {
          ...t.hexMap,
          shapeGroups: t.hexMap.shapeGroups.map((d, u) => u === g ? {
            ...d,
            items: [
              ...d.items,
              {
                key: "",
                shape: "Arrow Up",
                column: "",
                operator: "=",
                value: ""
              }
            ]
          } : d)
        }
      })
    },
    "Add Shape Condition"
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-button cove-button--warn",
      style: { background: "none", border: "1px solid red", color: "red", marginTop: "15px" },
      onClick: (d, u) => {
        let s = [...t.hexMap.shapeGroups.slice(0, g), ...t.hexMap.shapeGroups.slice(g + 1)];
        n({
          ...t,
          hexMap: {
            ...t.hexMap,
            shapeGroups: s
          }
        });
      }
    },
    "Remove Shape Group"
  ))))))))), /* @__PURE__ */ r.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "cove-button",
      style: { marginTop: "15px" },
      onClick: (m) => {
        let g = t.hexMap.shapeGroups;
        g.push({
          legendTitle: "",
          legendDescription: "",
          items: [{ key: "", shape: "Arrow Up", column: "", operator: "=", value: "" }]
        }), g.legendTitle = "", g.legendDescription = "", n({
          ...t,
          hexMap: {
            ...t.hexMap,
            shapeGroups: g
          }
        });
      }
    },
    "Add Shape Group"
  )));
}, J3 = () => props.children;
J3.DisplayShapesOnHex = Oi;
J3.DisplayAsHexMap = Ii;
J3.ShapeColumns = _i;
R.memo(({ label: e, value: t, fieldName: n, section: a = null, subsection: i = null, tooltip: c, updateField: p, ...m }) => /* @__PURE__ */ r.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ r.createElement(
  "input",
  {
    type: "checkbox",
    name: n,
    checked: t,
    onChange: (g) => {
      p(a, i, n, !t);
    },
    ...m
  }
), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, e, c)));
const B1 = ({ label: e, section: t = null, subsection: n = null, fieldName: a, updateField: i, value: c, type: p = "input", tooltip: m, ...g }) => {
  const [d, u] = R.useState(c), [s] = Ut(d, 500);
  R.useEffect(() => {
    typeof s == "string" && c !== s && i(t, n, a, s);
  }, [s]);
  let o = n ? `${t}-${n}-${a}` : `${t}-${n}-${a}`;
  const l = (S) => u(S.target.value);
  let f = /* @__PURE__ */ r.createElement("input", { type: "text", name: o, onChange: l, ...g, value: d });
  return p === "textarea" && (f = /* @__PURE__ */ r.createElement("textarea", { name: o, onChange: l, ...g, value: d })), p === "number" && (f = /* @__PURE__ */ r.createElement("input", { type: "number", name: o, onChange: l, ...g, value: d })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, e, m), f);
}, Ri = ({ columnsRequiredChecker: e }) => {
  var e2, m2;
  const {
    changeFilterActive: t,
    columnsInData: n = [],
    isDashboard: a,
    isDebug: i,
    isEditor: c,
    loadConfig: p,
    runtimeFilters: m,
    runtimeLegend: g,
    setParentConfig: d,
    setRuntimeFilters: u,
    setState: s,
    state: o,
    tooltipId: l
  } = R.useContext(N2), { general: f, columns: S, legend: C, table: E, tooltips: y } = o, [v, b] = R.useState({}), [T, P] = R.useState(!1), [x, A] = R.useState(!0), [D, I] = R.useState([0, 0]), { handleFilterOrder: N, filterOrderOptions: F, filterStyleOptions: _ } = He({ config: o, setConfig: s, filteredData: m, setFilteredData: u }), k = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], {
    // prettier-ignore
    MapLayerHandlers: {
      handleMapLayer: h,
      handleAddLayer: w,
      handleRemoveLayer: M
    }
  } = R7(o, s, !1, l), B = (L, U) => {
    let G = [...o.legend.categoryValuesOrder], [K] = G.splice(L, 1);
    G.splice(U, 0, K), s({
      ...o,
      legend: {
        ...o.legend,
        categoryValuesOrder: G
      }
    });
  };
  let $ = [];
  C.specialClasses && C.specialClasses.length && typeof C.specialClasses[0] == "string" ? (C.specialClasses.forEach((L) => {
    $.push({
      key: o.columns.primary && o.columns.primary.name ? o.columns.primary.name : n[0],
      value: L,
      label: L
    });
  }), s({
    ...o,
    legend: {
      ...o.legend,
      specialClasses: $
    }
  })) : $ = C.specialClasses || [];
  const W = (L) => {
    switch (L) {
      case "value": {
        const G = ["Circle", "Square", "Triangle", "Diamond", "Star", "Pin"].filter((K) => String(o.visual.cityStyle).toLocaleLowerCase() !== K.toLocaleLowerCase());
        return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -"), G.map((K, C1) => /* @__PURE__ */ r.createElement("option", { key: C1, value: K }, K)));
      }
    }
  }, z = (L, U, G, K) => {
    switch (L) {
      case "add": {
        const C1 = o.visual.additionalCityStyles ? [...o.visual.additionalCityStyles] : [];
        C1.push({ label: "", column: "", value: "", shape: "" }), s({
          ...o,
          visual: {
            ...o.visual,
            additionalCityStyles: C1
          }
        });
        break;
      }
      case "remove": {
        let C1 = [];
        o.visual.additionalCityStyles && (C1 = [...o.visual.additionalCityStyles]), C1.splice(U, 1), s({
          ...o,
          visual: {
            ...o.visual,
            additionalCityStyles: C1
          }
        });
        break;
      }
      case "update": {
        let C1 = [];
        C1 = [...o.visual.additionalCityStyles], C1[U][G] = K, s({
          ...o,
          visual: {
            ...o.visual,
            additionalCityStyles: C1
          }
        });
      }
    }
  }, q = ({ label: L, fieldName: U, value: G, type: K = "input", ...C1 }) => {
    const [F1, c2] = R.useState(G), [$2] = Ut(F1, 500);
    R.useEffect(() => {
      typeof $2 == "string" && G !== $2 && J("changeLegendDescription", [String(D), $2]);
    }, [$2]);
    const _3 = (J4) => c2(J4.target.value);
    return /* @__PURE__ */ r.createElement("textarea", { onChange: _3, ...C1, value: F1 });
  }, J = async (L, U) => {
    switch (L) {
      case "showBubbleZeros":
        s({
          ...o,
          visual: {
            ...o.visual,
            showBubbleZeros: U
          }
        });
        break;
      case "showEqualNumber":
        s({
          ...o,
          general: {
            ...o.general,
            equalNumberOptIn: U
          }
        });
        break;
      case "hideGeoColumnInTooltip":
        s({
          ...o,
          general: {
            ...o.general,
            [L]: U
          }
        });
        break;
      case "toggleDataTableLink":
        s({
          ...o,
          table: {
            ...o.table,
            showDataTableLink: U
          }
        });
        break;
      case "toggleDataUrl":
        s({
          ...o,
          table: {
            ...o.table,
            showDownloadUrl: U
          }
        });
        break;
      case "toggleExtraBubbleBorder":
        s({
          ...o,
          visual: {
            ...o.visual,
            extraBubbleBorder: U
          }
        });
        break;
      case "allowMapZoom":
        s({
          ...o,
          general: {
            ...o.general,
            allowMapZoom: U
          }
        });
        break;
      case "hidePrimaryColumnInTooltip":
        s({
          ...o,
          general: {
            ...o.general,
            [L]: U
          }
        });
        break;
      case "geoLabelOverride":
        s({
          ...o,
          general: {
            ...o.general,
            geoLabelOverride: U
          }
        });
        break;
      case "showTitle":
        s({
          ...o,
          general: {
            ...o.general,
            showTitle: U
          }
        });
        break;
      case "showSidebar":
        s({
          ...o,
          general: {
            ...o.general,
            showSidebar: U
          }
        });
        break;
      case "fullBorder":
        s({
          ...o,
          general: {
            ...o.general,
            fullBorder: U
          }
        });
        break;
      case "expandDataTable":
        s({
          ...o,
          table: {
            ...o.table,
            expanded: U
          }
        });
        break;
      case "color":
        s({
          ...o,
          color: U
        });
        break;
      case "sidebarPosition":
        s({
          ...o,
          legend: {
            ...o.legend,
            position: U
          }
        });
        break;
      case "handleCityStyle":
        s({
          ...o,
          visual: {
            ...o.visual,
            cityStyle: U
          }
        });
        break;
      case "geoBorderColor":
        s({
          ...o,
          general: {
            ...o.general,
            geoBorderColor: U
          }
        });
        break;
      case "headerColor":
        s({
          ...o,
          general: {
            ...o.general,
            headerColor: U
          }
        });
        break;
      case "navigateColumn":
        s({
          ...o,
          columns: {
            ...o.columns,
            navigate: {
              ...o.columns.navigate,
              name: U
            }
          }
        });
        break;
      case "legendDescription":
        s({
          ...o,
          legend: {
            ...o.legend,
            description: U
          }
        });
        break;
      case "legendType":
        let G = +typeof o.data[0][o.columns.primary.name], K = o.data[0][o.columns.primary.name], C1 = [];
        K || C1.push(`There appears to be values missing for data in the primary column ${o.columns.primary.name}`), G === "string" && isNaN(G) && U !== "category" ? C1.push("Error with legend. Primary columns that are text must use a categorical legend type. Try changing the legend type to DEV-12345categorical.") : C1 = [], s({
          ...o,
          legend: {
            ...o.legend,
            type: U
          },
          runtime: {
            ...o.runtime,
            editorErrorMessage: C1
          }
        });
        break;
      case "legendNumber":
        s({
          ...o,
          legend: {
            ...o.legend,
            numberOfItems: parseInt(U)
          }
        });
        break;
      case "changeActiveFilterValue":
        const F1 = U.split(",");
        I(F1);
        break;
      case "unifiedLegend":
        s({
          ...o,
          legend: {
            ...o.legend,
            unified: U
          }
        });
        break;
      case "separateZero":
        s({
          ...o,
          legend: {
            ...o.legend,
            separateZero: U
          }
        });
        break;
      case "toggleShowFullGeoNameInCSV":
        s({
          ...o,
          table: {
            // setting both bc DataTable new core needs it here
            ...o.table,
            showFullGeoNameInCSV: !o.table.showFullGeoNameInCSV
          }
        });
        break;
      case "toggleDownloadImgButton":
        s({
          ...o,
          general: {
            ...o.general,
            showDownloadImgButton: !o.general.showDownloadImgButton
          }
        });
        break;
      case "toggleDownloadPdfButton":
        s({
          ...o,
          general: {
            ...o.general,
            showDownloadPdfButton: !o.general.showDownloadPdfButton
          }
        });
        break;
      case "displayAsHex":
        s({
          ...o,
          general: {
            ...o.general,
            displayAsHex: U
          }
        });
        break;
      case "editorMapType":
        switch (U) {
          case "us-geocode":
            s({
              ...o,
              general: {
                ...o.general,
                type: U
              }
            });
            break;
          case "world-geocode":
            s({
              ...o,
              general: {
                ...o.general,
                type: U
              }
            });
            break;
          case "data":
            s({
              ...o,
              general: {
                ...o.general,
                showSidebar: !0,
                type: "data"
              }
            });
            break;
          case "navigation":
            s({
              ...o,
              general: {
                ...o.general,
                showSidebar: !1,
                type: "navigation"
              },
              tooltips: {
                ...o.tooltips,
                appearanceType: "hover"
              }
            });
            break;
          case "bubble":
            s({
              ...o,
              general: {
                ...o.general,
                showSidebar: !1,
                type: "bubble"
              },
              tooltips: {
                ...o.tooltips,
                appearanceType: "hover"
              }
            });
            break;
          default:
            console.warn("COVE: Map type not set");
            break;
        }
        break;
      case "geoType":
        if (T === !0 && U === "world") {
          p(Lo);
          break;
        }
        if (T === !0 && U === "us") {
          p(ri);
          break;
        }
        if (T === !0 && U === "us-county") {
          p(Si);
          break;
        }
        switch (U) {
          case "us":
            s({
              ...o,
              general: {
                ...o.general,
                geoType: "us",
                type: o.type === "us-geocode" ? "data" : o.type
              },
              table: {
                ...o.table,
                forceDisplay: !0
              }
            });
            break;
          case "us-region":
            s({
              ...o,
              general: {
                ...o.general,
                geoType: "us-region"
              },
              table: {
                ...o.table,
                forceDisplay: !0
              }
            });
            break;
          case "world":
            s({
              ...o,
              general: {
                ...o.general,
                geoType: "world"
              },
              table: {
                ...o.table,
                forceDisplay: !0
              }
            });
            break;
          case "us-county":
            s({
              ...o,
              general: {
                ...o.general,
                geoType: "us-county"
              },
              table: {
                ...o.table,
                expanded: !1,
                forceDisplay: !0
              }
            });
            break;
          case "single-state":
            s({
              ...o,
              general: {
                ...o.general,
                geoType: "single-state"
              },
              table: {
                ...o.table,
                expanded: !1,
                forceDisplay: !0
              }
            });
            break;
        }
        break;
      case "singleColumnLegend":
        s({
          ...o,
          legend: {
            ...o.legend,
            singleColumn: !o.legend.singleColumn,
            singleRow: !1,
            verticalSorted: !1
          }
        });
        break;
      case "singleRowLegend":
        s({
          ...o,
          legend: {
            ...o.legend,
            singleRow: !o.legend.singleRow,
            singleColumn: !1,
            verticalSorted: !1
          }
        });
        break;
      case "verticalSortedLegend":
        s({
          ...o,
          legend: {
            ...o.legend,
            verticalSorted: !o.legend.verticalSorted,
            singleRow: !1,
            singleColumn: !1
          }
        });
        break;
      case "legendShowSpecialClassesLast":
        s({
          ...o,
          legend: {
            ...o.legend,
            showSpecialClassesLast: !o.legend.showSpecialClassesLast
          }
        });
        break;
      case "dynamicDescription":
        s({
          ...o,
          editor: {
            ...o.editor,
            activeFilterValueForDescription: U
          },
          legend: {
            ...o.legend,
            dynamicDescription: !o.legend.dynamicDescription
          }
        });
        break;
      case "changeLegendDescription":
        const [c2, $2] = U;
        s({
          ...o,
          legend: {
            ...o.legend,
            descriptions: {
              ...o.legend.descriptions,
              [c2]: [$2]
            }
          }
        });
        break;
      case "appearanceType":
        s({
          ...o,
          tooltips: {
            ...o.tooltips,
            appearanceType: U
          }
        });
        break;
      case "linkLabel":
        s({
          ...o,
          tooltips: {
            ...o.tooltips,
            linkLabel: U
          }
        });
        break;
      case "displayStateLabels":
        s({
          ...o,
          general: {
            ...o.general,
            displayStateLabels: !o.general.displayStateLabels
          }
        });
        break;
      case "capitalizeLabels":
        s({
          ...o,
          tooltips: {
            ...o.tooltips,
            capitalizeLabels: U
          }
        });
        break;
      case "showDataTable":
        s({
          ...o,
          table: {
            ...o.table,
            forceDisplay: U
          }
        });
        break;
      case "limitDataTableHeight":
        s({
          ...o,
          table: {
            ...o.table,
            limitHeight: U
          }
        });
        break;
      case "chooseState":
        let z1 = { fipsCode: Object.keys(O5).find((H4) => O5[H4] === U), stateName: U };
        s({
          ...o,
          general: {
            ...o.general,
            statePicked: z1
          }
        });
        break;
      case "classificationType":
        s({
          ...o,
          legend: {
            ...o.legend,
            type: U
          }
        });
        break;
      case "territoriesAlwaysShow":
        s({
          ...o,
          general: {
            ...o.general,
            territoriesAlwaysShow: U
          }
        });
        break;
      case "countyCensusYear":
        s({
          ...o,
          general: {
            ...o.general,
            countyCensusYear: U
          }
        });
        break;
      case "filterControlsCountyYear":
        s({
          ...o,
          general: {
            ...o.general,
            filterControlsCountyYear: U
          }
        });
        break;
      case "filterBehavior":
        s({
          ...o,
          filterBehavior: U
        });
        break;
      default:
        console.warn("COVE: Did not recognize editor property.");
        break;
    }
  }, Y = async (L, U, G) => {
    let K;
    switch (U) {
      case "specialClassEdit":
        K = Array.from($), K[G.index][G.prop] = G.value, s({
          ...o,
          legend: {
            ...o.legend,
            specialClasses: K
          }
        });
        break;
      case "specialClassDelete":
        K = Array.from($), K.splice(G, 1), s({
          ...o,
          legend: {
            ...o.legend,
            specialClasses: K
          }
        });
        break;
      case "specialClassAdd":
        K = $, K.push(G), s({
          ...o,
          legend: {
            ...o.legend,
            specialClasses: K
          }
        });
        break;
      case "name":
        s({
          ...o,
          columns: {
            ...o.columns,
            [L]: {
              ...o.columns[L],
              [U]: G
            }
          }
        });
        break;
      default:
        s({
          ...o,
          columns: {
            ...o.columns,
            [L]: {
              ...o.columns[L],
              [U]: G
            }
          }
        });
        break;
    }
  }, Z = async (L, U, G) => {
    let K = [...o.filters];
    switch (U) {
      case "addNew":
        K.push({
          label: "",
          values: []
        });
        break;
      case "remove":
        K.length === 1 ? K = [] : K.splice(L, 1);
        break;
      case "filterStyle":
        K[L] = { ...K[L] }, K[L].filterStyle = G;
        break;
      case "showDropdown":
        K[L] = { ...K[L] }, K[L].showDropdown = G;
        break;
      case "columnName":
        K[L] = { ...K[L] }, K[L].columnName = G, K[L].values = [];
        break;
      case "filterOrder":
        G === "desc" && (K[L] = { ...m[L] }, delete K[L].active, K[L].order = "desc"), G === "asc" && (K[L] = { ...m[L] }, delete K[L].active, K[L].order = "asc"), G === "cust" && (K[L] = { ...m[L] }, K[L].order = "cust");
        break;
      default:
        K[L][U] = G;
        break;
    }
    s({
      ...o,
      filters: K
    });
  }, f1 = (L) => {
    const U = `additionalColumn${L}`;
    s({
      ...o,
      columns: {
        ...o.columns,
        [U]: {
          label: "New Column",
          dataTable: !1,
          tooltips: !1,
          prefix: "",
          suffix: ""
        }
      }
    });
  }, _1 = () => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Filter Behavior", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.filterBehavior,
      onChange: (L) => {
        s({
          ...o,
          filterBehavior: L.target.value
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", { key: "Apply Button", value: "Apply Button" }, "Apply Button"),
    /* @__PURE__ */ r.createElement("option", { key: "Filter Change", value: "Filter Change" }, "Filter Change")
  )), p1), Q1 = (L) => {
    const U = o.columns;
    delete U[L], s({
      ...o,
      columns: U
    });
  }, $1 = (L) => {
    const U = o.filters[L[0]].label || "Unlabeled Legend", G = m[L[0]];
    if (G)
      return U + " - " + G.values[L[1]];
  }, V = () => {
    let L = JSON.parse(JSON.stringify(o));
    delete L[""], delete L.newViz;
    let U = JSON.parse(JSON.stringify(o.legend));
    delete U.disabledAmt, L.legend = U, delete L.defaultData;
    let G = JSON.parse(JSON.stringify(o.general));
    return L.general = G, o.columns && (L.columns = o.columns), L;
  }, m1 = o.general.palette.isReversed;
  function i1() {
    let L = [], U = [];
    for (let G in L2)
      m1 || (G.includes("qualitative") && !G.endsWith("reverse") && U.push(G), !G.includes("qualitative") && !G.endsWith("reverse") && L.push(G)), m1 && (G.includes("qualitative") && G.endsWith("reverse") && U.push(G), !G.includes("qualitative") && G.endsWith("reverse") && L.push(G));
    return [L, U];
  }
  const [g1, h1] = i1();
  R.useEffect(() => {
    let L = "";
    m1 && !o.color.endsWith("reverse") && (L = o.color + "reverse"), !m1 && o.color.endsWith("reverse") && (L = o.color.slice(0, -7)), L && J("color", L);
  }, [m1]), R.useEffect(() => {
    P(o.defaultData), e();
  }, [o]), R.useEffect(() => {
    if (o.legend.type === "category" && g && g.runtimeDataHash) {
      let L = !0;
      if (o.legend.categoryValuesOrder) {
        g.forEach((G) => {
          !G.special && o.legend.categoryValuesOrder.indexOf(G.value) === -1 && (L = !1);
        });
        let U = g.map((G) => G.value);
        o.legend.categoryValuesOrder.forEach((G) => {
          U.indexOf(G) === -1 && (L = !1);
        });
      } else
        L = !1;
      if (!L) {
        let U = g.filter((G) => !G.special).map(({ value: G }) => G);
        s({
          ...o,
          legend: {
            ...o.legend,
            categoryValuesOrder: U
          }
        });
      }
    }
  }, [g]);
  const c1 = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  n.map((L) => c1.push(
    /* @__PURE__ */ r.createElement("option", { value: L, key: L }, L)
  ));
  let S1 = {};
  o.data.forEach((L) => {
    Object.keys(L).forEach((U) => {
      S1[U] = S1[U] || [];
      const G = typeof L[U] == "number" ? L[U].toString() : L[U];
      S1[U].indexOf(G) === -1 && S1[U].push(G);
    });
  });
  const u1 = Object.keys(o.columns).filter((L) => ["geo", "navigate", "primary", "latitude", "longitude"].includes(L) !== !0), r1 = (L, U, G, K) => {
    const C1 = Array.isArray(o[L]);
    let F1 = C1 ? [...o[L], K] : { ...o[L], [G]: K };
    U !== null && (C1 ? (F1 = [...o[L]], F1[U] = { ...F1[U], [G]: K }) : F1 = {
      ...o[L],
      [U]: { ...o[L][U], [G]: K }
    });
    let c2 = {
      ...o,
      [L]: F1
    };
    s(c2);
  }, o2 = () => {
    A(!x), s({
      ...o,
      showEditorPanel: !x
    });
  }, b1 = {}, p1 = o.filters.map((L, U) => L.type === "url" ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (L.columnName && (b1[L.columnName] = !0), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `filter-${U}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (G) => {
        G.preventDefault(), Z(U, "remove");
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(B1, { value: o.filters[U].label, section: "filters", subsection: U, fieldName: "label", label: "Label", updateField: r1 }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Column", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting a column will add a dropdown menu below the map legend and allow users to filter based on the values in this column.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: L.columnName,
      onChange: (G) => {
        Z(U, "columnName", G.target.value);
      }
    },
    c1.filter(({ key: G }) => b1[G] === void 0 || L.columnName === G)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: L.showDropdown === void 0 ? !0 : L.showDropdown,
      onChange: (G) => {
        Z(U, "showDropdown", G.target.checked);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Style"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: L.filterStyle,
      onChange: (G) => {
        Z(U, "filterStyle", G.target.value);
      }
    },
    _.map((G, K) => /* @__PURE__ */ r.createElement("option", { value: G, key: `filter-${G}--${K}` }, G))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: L.order,
      onChange: (G) => {
        Z(U, "filterOrder", G.target.value), t(U, L.values[0]);
      }
    },
    F.map((G, K) => /* @__PURE__ */ r.createElement("option", { value: G.value, key: `filter-${K}` }, G.label))
  )), /* @__PURE__ */ r.createElement(B1, { value: o.filters[U].setByQueryParameter, section: "filters", subsection: U, fieldName: "setByQueryParameter", label: "Default Value Set By Query String Parameter", updateField: r1 }), L.order === "cust" && /* @__PURE__ */ r.createElement(r8, { onDragEnd: ({ source: G, destination: K }) => N(G.index, K.index, U, o.filters[U]) }, /* @__PURE__ */ r.createElement(o8, { droppableId: "filter_order" }, (G) => {
    var K;
    return /* @__PURE__ */ r.createElement("ul", { ...G.droppableProps, className: "sort-list", ref: G.innerRef, style: { marginTop: "1em" } }, (K = o.filters[U]) == null ? void 0 : K.values.map((C1, F1) => /* @__PURE__ */ r.createElement(i8, { key: C1, draggableId: `draggableFilter-${C1}`, index: F1 }, (c2, $2) => /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("div", { className: $2.isDragging ? "currently-dragging" : "", style: a1($2.isDragging, c2.draggableProps.style), ref: c2.innerRef, ...c2.draggableProps, ...c2.dragHandleProps }, C1)))), G.placeholder);
  })))))), n1 = () => {
    let U = Object.entries(O5).sort((K, C1) => K[0].localeCompare(C1[0])), G = [];
    return U.forEach((K) => {
      G.push(
        /* @__PURE__ */ r.createElement("option", { key: K[0], value: K[1] }, K[1])
      );
    }), G;
  }, Q = [];
  m.length > 0 && m.forEach((L, U) => {
    m[U].values.forEach((G, K) => {
      Q.push([U, K]);
    });
  }), R.useEffect(() => {
    const L = V(), U = JSON.stringify(L, void 0, 2);
    b(U);
  }, [o]), R.useEffect(() => {
    if (d) {
      const L = V();
      d(L);
    }
  }, [o]);
  let n2 = 8;
  const a1 = (L, U) => ({
    ...U
  }), L1 = () => o.legend.categoryValuesOrder ? o.legend.categoryValuesOrder.map((L, U) => /* @__PURE__ */ r.createElement(i8, { key: L, draggableId: `item-${L}`, index: U }, (G, K) => /* @__PURE__ */ r.createElement("li", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { className: K.isDragging ? "currently-dragging" : "", style: a1(K.isDragging, G.draggableProps.style), ref: G.innerRef, ...G.draggableProps, ...G.dragHandleProps }, L)))) : /* @__PURE__ */ r.createElement(r.Fragment, null), M1 = ((e2 = o == null ? void 0 : o.dataKey) == null ? void 0 : e2.includes("http://")) || ((m2 = o == null ? void 0 : o.dataKey) == null ? void 0 : m2.includes("https://"));
  return i && (() => {
    let L = n.includes(o.columns.geo.name);
    if (i !== void 0 && i && !L) {
      let U = n[0];
      U !== "" && Y("geo", "name", U), (!o.columns.hasOwnProperty("primary") || o.columns.primary.name === void 0 || o.columns.primary.name === "" || !o.columns.primary.name) && Y("primary", "name", n[1]);
    }
  })(), /* @__PURE__ */ r.createElement(I3, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(p6.Sidebar, { isDashboard: a, displayPanel: x, title: "Configure Map", onBackClick: o2 }, /* @__PURE__ */ r.createElement(Rt, { multiline: !0 }), /* @__PURE__ */ r.createElement(x4, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Type")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ r.createElement("span", null, "Geography")), /* @__PURE__ */ r.createElement("ul", { className: "geo-buttons" }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: o.general.geoType === "us" || o.general.geoType === "us-county" ? "active" : "",
      onClick: (L) => {
        L.preventDefault(), J("geoType", "us");
      }
    },
    /* @__PURE__ */ r.createElement(oa, null),
    /* @__PURE__ */ r.createElement("span", null, "United States")
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: o.general.geoType === "us-region" ? "active" : "",
      onClick: (L) => {
        L.preventDefault(), J("geoType", "us-region");
      }
    },
    /* @__PURE__ */ r.createElement(On, null),
    /* @__PURE__ */ r.createElement("span", null, "U.S. Region")
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: o.general.geoType === "world" ? "active" : "",
      onClick: (L) => {
        L.preventDefault(), J("geoType", "world");
      }
    },
    /* @__PURE__ */ r.createElement(ia, null),
    /* @__PURE__ */ r.createElement("span", null, "World")
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: o.general.geoType === "single-state" ? "active" : "",
      onClick: (L) => {
        L.preventDefault(), J("geoType", "single-state");
      }
    },
    /* @__PURE__ */ r.createElement(la, null),
    /* @__PURE__ */ r.createElement("span", null, "U.S. State")
  ))), (o.general.geoType === "us" || o.general.geoType === "us-county") && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Geography Subtype"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.geoType,
      onChange: (L) => {
        J("geoType", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "us" }, "US State-Level"),
    /* @__PURE__ */ r.createElement("option", { value: "us-county" }, "US County-Level")
  )), (o.general.geoType === "us-county" || o.general.geoType === "single-state") && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "County Census Year"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.countyCensusYear || "2019",
      onChange: (L) => {
        J("countyCensusYear", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "2022" }, "2022"),
    /* @__PURE__ */ r.createElement("option", { value: "2021" }, "2021"),
    /* @__PURE__ */ r.createElement("option", { value: "2020" }, "2020"),
    /* @__PURE__ */ r.createElement("option", { value: "2019" }, "2019"),
    /* @__PURE__ */ r.createElement("option", { value: "2015" }, "2015"),
    /* @__PURE__ */ r.createElement("option", { value: "2014" }, "2014"),
    /* @__PURE__ */ r.createElement("option", { value: "2013" }, "2013")
  )), (o.general.geoType === "us-county" || o.general.geoType === "single-state") && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Controlling County Census Year"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.filterControlsCountyYear || "",
      onChange: (L) => {
        J("filterControlsCountyYear", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "None"),
    o.filters && o.filters.map((L) => /* @__PURE__ */ r.createElement("option", null, L.columnName))
  )), o.general.geoType === "single-state" && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "State Selector"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.statePicked.stateName,
      onChange: (L) => {
        J("chooseState", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement(n1, null)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Map Type", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select "Data" to create a color-coded data map. To create a navigation-only map, select "Navigation."')))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.type,
      onChange: (L) => {
        J("editorMapType", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "data" }, "Data"),
    o.general.geoType === "us-county" && /* @__PURE__ */ r.createElement("option", { value: "us-geocode" }, "Geocode"),
    o.general.geoType === "world" && /* @__PURE__ */ r.createElement("option", { value: "world-geocode" }, "Geocode"),
    o.general.geoType !== "us-county" && /* @__PURE__ */ r.createElement("option", { value: "navigation" }, "Navigation"),
    (o.general.geoType === "world" || o.general.geoType === "us") && /* @__PURE__ */ r.createElement("option", { value: "bubble" }, "Bubble")
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Classification Type"), /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "equalnumber", value: "equalnumber", checked: o.legend.type === "equalnumber", onChange: (L) => J("classificationType", L.target.value) }), "Numeric/Quantitative"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "category", value: "category", checked: o.legend.type === "category", onChange: (L) => J("classificationType", L.target.value) }), "Categorical"))), /* @__PURE__ */ r.createElement(J3.DisplayAsHexMap, { state: o, setState: s, handleEditorChanges: J }), /* @__PURE__ */ r.createElement(J3.DisplayShapesOnHex, { state: o, setState: s }), /* @__PURE__ */ r.createElement(J3.ShapeColumns, { state: o, setState: s, columnsOptions: c1 }), o.general.geoType === "us" && o.general.type !== "bubble" && o.general.displayAsHex === !1 && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.displayStateLabels,
      onChange: (L) => {
        J("displayStateLabels", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show state labels")))), /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "General")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement(
    B1,
    {
      value: f.title,
      "data-testid": "title-input",
      updateField: r1,
      section: "general",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Map Title",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.showTitle || !1,
      onChange: (L) => {
        J("showTitle", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Title")), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: f.superTitle || "",
      updateField: r1,
      section: "general",
      fieldName: "superTitle",
      label: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    B1,
    {
      type: "textarea",
      value: f.introText,
      updateField: r1,
      section: "general",
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    B1,
    {
      type: "textarea",
      value: f.subtext,
      updateField: r1,
      section: "general",
      fieldName: "subtext",
      label: "Subtext",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ r.createElement(
    B1,
    {
      type: "textarea",
      value: f.footnotes,
      updateField: r1,
      section: "general",
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Footnotes")))
    }
  ), o.general.geoType === "us" && /* @__PURE__ */ r.createElement(B1, { value: f.territoriesLabel, updateField: r1, section: "general", fieldName: "territoriesLabel", label: "Territories Label", placeholder: "Territories" }), o.general.geoType === "us" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: f.territoriesAlwaysShow || !1,
      onChange: (L) => {
        J("territoriesAlwaysShow", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show All Territories")))), /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Columns")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Geography", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source column containing the map location names or, for county-level maps, the FIPS codes.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.geo ? o.columns.geo.name : c1[0],
      onChange: (L) => {
        Y("geo", "name", L.target.value);
      }
    },
    c1
  )), o.general.type === "us-geocode" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.convertFipsCodes,
      onChange: (L) => {
        s({
          ...o,
          general: {
            ...o.general,
            convertFipsCodes: L.target.checked
          }
        });
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Convert FIPS Codes to Geography Name")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.hideGeoColumnInTooltip || !1,
      onChange: (L) => {
        J("hideGeoColumnInTooltip", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Hide Geography Column Name in Tooltip")), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: o.general.geoLabelOverride,
      section: "general",
      fieldName: "geoLabelOverride",
      label: "Geography Label",
      className: "edit-label",
      updateField: r1,
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter a geography label for use in tooltips.")))
    }
  )), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Data Column", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source column containing the categorical or numeric values to be mapped.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.primary ? o.columns.primary.name : c1[0],
      onChange: (L) => {
        Y("primary", "name", L.target.value);
      }
    },
    c1
  )), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.hidePrimaryColumnInTooltip || !1,
      onChange: (L) => {
        J("hidePrimaryColumnInTooltip", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Hide Data Column Name in Tooltip")), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: S.primary.label,
      section: "columns",
      subsection: "primary",
      fieldName: "label",
      label: "Data Label",
      updateField: r1,
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter a data label for use in tooltips and the data table.")))
    }
  ), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement(B1, { value: S.primary.prefix, section: "columns", subsection: "primary", fieldName: "prefix", label: "Prefix", updateField: r1 }), /* @__PURE__ */ r.createElement(B1, { value: S.primary.suffix, section: "columns", subsection: "primary", fieldName: "suffix", label: "Suffix", updateField: r1 }), /* @__PURE__ */ r.createElement(B1, { type: "number", value: S.primary.roundToPlace, section: "columns", subsection: "primary", fieldName: "roundToPlace", label: "Round", updateField: r1, min: 0 })), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns.primary.useCommas,
      onChange: (L) => {
        Y("primary", "useCommas", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns.primary.dataTable || !1,
      onChange: (L) => {
        Y("primary", "dataTable", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns.primary.tooltip || !1,
      onChange: (L) => {
        Y("primary", "tooltip", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Tooltips"))))), o.general.type === "bubble" && o.legend.type === "category" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Category Column", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source column containing the categorical bubble values to be mapped.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.categorical ? o.columns.categorical.name : c1[0],
      onChange: (L) => {
        Y("categorical", "name", L.target.value);
      }
    },
    c1
  ))), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Latitude Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.latitude.name ? o.columns.latitude.name : "",
      onChange: (L) => {
        Y("latitude", "name", L.target.value);
      }
    },
    c1
  ), /* @__PURE__ */ r.createElement("label", null, "Longitude Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.longitude.name ? o.columns.longitude.name : "",
      onChange: (L) => {
        Y("longitude", "name", L.target.value);
      }
    },
    c1
  )), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Special Classes", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, 'For secondary values such as "NA", the system can automatically color-code them in shades of gray, one shade for each special class.'))))), $.map((L, U) => /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `special-class-${U}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (G) => {
        G.preventDefault(), Y("primary", "specialClassDelete", U);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("p", null, "Special Class ", U + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Data Key"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: L.key,
      onChange: (G) => {
        Y("primary", "specialClassEdit", { prop: "key", index: U, value: G.target.value });
      }
    },
    c1
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: L.value,
      onChange: (G) => {
        Y("primary", "specialClassEdit", { prop: "value", index: U, value: G.target.value });
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"),
    S1[L.key] && S1[L.key].sort().map((G) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${U}-${G}` }, G))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: L.label,
      onChange: (G) => {
        Y("primary", "specialClassEdit", { prop: "label", index: U, value: G.target.value });
      }
    }
  )))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault(), Y("primary", "specialClassAdd", {});
      }
    },
    "Add Special Class"
  )), /* @__PURE__ */ r.createElement("label", { className: "edit-block navigate column-heading" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Navigation", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "To provide end users with navigation functionality, select the source column containing the navigation URLs.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns.navigate ? o.columns.navigate.name : c1[0],
      onChange: (L) => {
        Y("navigate", "name", L.target.value);
      }
    },
    c1
  )), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), u1.map((L) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (U) => {
        U.preventDefault(), Q1(L);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.columns[L] ? o.columns[L].name : c1[0],
      onChange: (U) => {
        Y(L, "name", U.target.value);
      }
    },
    c1
  )), /* @__PURE__ */ r.createElement(B1, { value: S[L].label, section: "columns", subsection: L, fieldName: "label", label: "Label", updateField: r1 }), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement(B1, { value: S[L].prefix, section: "columns", subsection: L, fieldName: "prefix", label: "Prefix", updateField: r1 }), /* @__PURE__ */ r.createElement(B1, { value: S[L].suffix, section: "columns", subsection: L, fieldName: "suffix", label: "Suffix", updateField: r1 }), /* @__PURE__ */ r.createElement(B1, { type: "number", value: S[L].roundToPlace, section: "columns", subsection: L, fieldName: "roundToPlace", label: "Round", updateField: r1 })), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns[L].useCommas,
      onChange: (U) => {
        Y(L, "useCommas", U.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns[L].dataTable,
      onChange: (U) => {
        Y(L, "dataTable", U.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Data Table"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.columns[L].tooltip,
      onChange: (U) => {
        Y(L, "tooltip", U.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Tooltips")))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault(), f1(u1.length + 1);
      }
    },
    "Add Column"
  )), o.legend.type === "category" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), o.legend.additionalCategories && o.legend.additionalCategories.map((L, U) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (G) => {
        G.preventDefault();
        const K = [...o.legend.additionalCategories];
        K.splice(U, 1), r1("legend", null, "additionalCategories", K);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Category"), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: L,
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (G, K, C1, F1) => {
        const c2 = [...o.legend.additionalCategories];
        c2[U] = F1, r1(G, K, C1, c2);
      }
    }
  )))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault();
        const U = [...o.legend.additionalCategories || []];
        U.push(""), r1("legend", null, "additionalCategories", U);
      }
    },
    "Add Category"
  )))), " ", o.general.type !== "navigation" && /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Legend")), /* @__PURE__ */ r.createElement(b2, null, (o.legend.type === "equalnumber" || o.legend.type === "equalinterval") && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Legend Type"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: C.type,
      onChange: (L) => {
        J("legendType", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "equalnumber" }, "Equal Number (Quantiles)"),
    /* @__PURE__ */ r.createElement("option", { value: "equalinterval" }, "Equal Interval")
  )), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.showSidebar || !1,
      onChange: (L) => {
        J("showSidebar", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Legend")), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Legend Position"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: C.position || !1,
      onChange: (L) => {
        J("sidebarPosition", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "side" }, "Side"),
    /* @__PURE__ */ r.createElement("option", { value: "bottom" }, "Bottom")
  )), C.position === "side" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: C.singleColumn,
      onChange: (L) => {
        J("singleColumnLegend", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Single Column Legend")), C.position === "bottom" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: C.singleRow,
      onChange: (L) => {
        J("singleRowLegend", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Single Row Legend")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: C.verticalSorted,
      onChange: (L) => {
        J("verticalSortedLegend", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Vertical sorted legend")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: C.showSpecialClassesLast,
      onChange: (L) => {
        J("legendShowSpecialClassesLast", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Special Classes Last")), C.type !== "category" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", checked: C.separateZero || !1, onChange: (L) => J("separateZero", L.target.checked) }), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Separate Zero", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "For numeric data, you can separate the zero value as its own data class."))))), o.legend.type === "equalnumber" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.equalNumberOptIn,
      onChange: (L) => {
        J("showEqualNumber", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Use new quantile legend"), /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "This prevents numbers from being used in more than one category (ie. 0-1, 1-2, 2-3) ")))), C.type !== "category" && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Number of Items", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "For numeric maps, select the number of data classes. Do not include designated special classes.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: C.numberOfItems,
      onChange: (L) => {
        J("legendNumber", L.target.value);
      }
    },
    [...Array(n2).keys()].map((L) => /* @__PURE__ */ r.createElement("option", { value: L + 1, key: L + 1 }, L + 1))
  )), C.type === "category" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Category Order", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Drag map categories into preferred legend order. "))))), /* @__PURE__ */ r.createElement(r8, { onDragEnd: ({ source: L, destination: U }) => B(L.index, U.index) }, /* @__PURE__ */ r.createElement(o8, { droppableId: "category_order" }, (L) => /* @__PURE__ */ r.createElement("ul", { ...L.droppableProps, className: "sort-list", ref: L.innerRef }, /* @__PURE__ */ r.createElement(L1, null), L.placeholder))), o.legend.categoryValuesOrder && o.legend.categoryValuesOrder.length >= 10 && /* @__PURE__ */ r.createElement("section", { className: "error-box my-2" }, /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ r.createElement("p", null, "The maximum number of categorical legend items is 10. If your data has more than 10 categories your map will not display properly.")))), /* @__PURE__ */ r.createElement(B1, { value: C.title, updateField: r1, section: "legend", fieldName: "title", label: "Legend Title", placeholder: "Legend Title" }), C.dynamicDescription === !1 && /* @__PURE__ */ r.createElement(B1, { type: "textarea", value: C.description, updateField: r1, section: "legend", fieldName: "description", label: "Legend Description" }), C.dynamicDescription === !0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Legend Description"), /* @__PURE__ */ r.createElement("span", { className: "subtext" }, "For ", $1(D)), /* @__PURE__ */ r.createElement(q, { value: C.descriptions[String(D)] })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "select",
    {
      value: String(D),
      onChange: (L) => {
        J("changeActiveFilterValue", L.target.value);
      }
    },
    Q.map((L, U) => /* @__PURE__ */ r.createElement("option", { value: L, key: U }, $1(L)))
  ))), p1.length > 0 && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: C.dynamicDescription,
      onChange: () => {
        J("dynamicDescription", Q[0]);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Dynamic Legend Description", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Check this option if the map has multiple filter controls and you want to specify a description for each filter selection."))))), (p1.length > 0 || o.general.type === "bubble" || o.general.geoType === "us") && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", checked: C.unified, onChange: (L) => J("unifiedLegend", L.target.checked) }), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Unified Legend", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "For a map with filters, check this option if you want the high and low values in the legend to be based on ", /* @__PURE__ */ r.createElement("em", null, "all"), " mapped values."))))))), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Filters")), /* @__PURE__ */ r.createElement(b2, null, p1.length > 0 ? /* @__PURE__ */ r.createElement(_1, null) : /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (L) => {
        L.preventDefault(), Z(null, "addNew");
      }
    },
    "Add Filter"
  ))), o.general.type !== "navigation" && /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Data Table")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement(
    B1,
    {
      value: E.label,
      updateField: r1,
      section: "table",
      fieldName: "label",
      id: "dataTableTitle",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.wrapColumns,
      onChange: (L) => {
        s({
          ...o,
          table: {
            ...o.table,
            wrapColumns: L.target.checked
          }
        });
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "WRAP DATA TABLE COLUMNS")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.forceDisplay !== void 0 ? o.table.forceDisplay : !a,
      onChange: (L) => {
        J("showDataTable", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Show Data Table", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Data tables are required for 508 compliance. When choosing to hide this data table, replace with your own version."))))), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: E.indexLabel || "",
      updateField: r1,
      section: "table",
      fieldName: "indexLabel",
      label: "Index Column Header",
      placeholder: "Location",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "To comply with 508 standards, if the first column in the data table has no header, enter a brief one here.")))
    }
  ), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: o.table.caption,
      updateField: r1,
      section: "table",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter a description of the data table to be read by screen readers."))),
      type: "textarea"
    }
  ), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.limitHeight,
      onChange: (L) => {
        J("limitDataTableHeight", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Limit Table Height")), o.table.limitHeight && /* @__PURE__ */ r.createElement(B1, { value: E.height, updateField: r1, section: "table", fieldName: "height", label: "Data Table Height", placeholder: "Height(px)", type: "number", min: "0", max: "500" }), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.expanded || !1,
      onChange: (L) => {
        J("expandDataTable", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Map loads with data table expanded")), a && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.showDataTableLink,
      onChange: (L) => {
        J("toggleDataTableLink", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Data Table Name & Link")), M1 && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.table.showDownloadUrl,
      onChange: (L) => {
        J("toggleDataUrl", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show URL to Automatically Updated Data")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.showFullGeoNameInCSV,
      onChange: (L) => {
        J("toggleShowFullGeoNameInCSV", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Include Full Geo Name in CSV Download")), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.showDownloadImgButton,
      onChange: (L) => {
        J("toggleDownloadImgButton", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Enable Image Download")))), /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Interactivity")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Detail displays on", " ", /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "At mobile sizes, information always appears in a popover modal when a user taps on an item.")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.tooltips.appearanceType,
      onChange: (L) => {
        J("appearanceType", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "hover" }, "Hover - Tooltip"),
    /* @__PURE__ */ r.createElement("option", { value: "click" }, "Click - Popover Modal")
  )), o.tooltips.appearanceType === "click" && /* @__PURE__ */ r.createElement(B1, { value: y.linkLabel, section: "tooltips", fieldName: "linkLabel", label: "Tooltips Link Label", updateField: r1 }), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.tooltips.capitalizeLabels,
      onChange: (L) => {
        J("capitalizeLabels", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Capitalize text inside tooltip")))), /* @__PURE__ */ r.createElement(C2, null, " ", /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Visual")), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, k.map((L) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: L,
      key: L,
      onClick: () => {
        J("headerColor", L);
      },
      className: o.general.headerColor === L ? "selected " + L : L
    }
  )))), /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.showTitle || !1,
      onChange: (L) => {
        J("showTitle", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Title")), o.general.type === "navigation" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.fullBorder || !1,
      onChange: (L) => {
        J("fullBorder", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Add border around map")), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Geo Border Color"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.general.geoBorderColor || !1,
      onChange: (L) => {
        J("geoBorderColor", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "darkGray" }, "Dark Gray (Default)"),
    /* @__PURE__ */ r.createElement("option", { value: "sameAsBackground" }, "White")
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Map Color Palette")), /* @__PURE__ */ r.createElement(Vn, { type: "3d", section: "general", subsection: "palette", fieldName: "isReversed", size: "small", label: "Use selected palette in reverse order", updateField: r1, value: o.general.palette.isReversed }), /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, g1.map((L) => {
    const U = {
      backgroundColor: L2[L][2]
    }, G = {
      backgroundColor: L2[L][4]
    }, K = {
      backgroundColor: L2[L][6]
    };
    return /* @__PURE__ */ r.createElement(
      "li",
      {
        title: L,
        key: L,
        onClick: () => {
          J("color", L);
        },
        className: o.color === L ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: U }),
      /* @__PURE__ */ r.createElement("span", { style: G }),
      /* @__PURE__ */ r.createElement("span", { style: K })
    );
  })), /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, h1.map((L) => {
    const U = {
      backgroundColor: L2[L][2]
    }, G = {
      backgroundColor: L2[L][4]
    }, K = {
      backgroundColor: L2[L][6]
    };
    return L2[L].length <= 8 && o.general.geoType === "us-region" ? "" : /* @__PURE__ */ r.createElement(
      "li",
      {
        title: L,
        key: L,
        onClick: () => {
          J("color", L);
        },
        className: o.color === L ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: U }),
      /* @__PURE__ */ r.createElement("span", { style: G }),
      /* @__PURE__ */ r.createElement("span", { style: K })
    );
  })), /* @__PURE__ */ r.createElement("label", null, "Geocode Settings", /* @__PURE__ */ r.createElement(B1, { type: "number", value: o.visual.geoCodeCircleSize, section: "visual", max: "10", fieldName: "geoCodeCircleSize", label: "Geocode Circle Size", updateField: r1 })), o.general.type === "bubble" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(B1, { type: "number", value: o.visual.minBubbleSize, section: "visual", fieldName: "minBubbleSize", label: "Minimum Bubble Size", updateField: r1 }), /* @__PURE__ */ r.createElement(B1, { type: "number", value: o.visual.maxBubbleSize, section: "visual", fieldName: "maxBubbleSize", label: "Maximum Bubble Size", updateField: r1 })), (o.general.geoType === "world" || o.general.geoType === "us" && o.general.type === "bubble") && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.visual.showBubbleZeros,
      onChange: (L) => {
        J("showBubbleZeros", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show Data with Zero's on Bubble Map")), o.general.geoType === "world" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.general.allowMapZoom,
      onChange: (L) => {
        J("allowMapZoom", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Allow Map Zooming")), o.general.type === "bubble" && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: o.visual.extraBubbleBorder,
      onChange: (L) => {
        J("toggleExtraBubbleBorder", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Bubble Map has extra border")), (o.general.geoType === "us" || o.general.geoType === "us-county" || o.general.geoType === "world") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Default City Style"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: o.visual.cityStyle || !1,
      onChange: (L) => {
        J("handleCityStyle", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "circle" }, "Circle"),
    /* @__PURE__ */ r.createElement("option", { value: "pin" }, "Pin"),
    /* @__PURE__ */ r.createElement("option", { value: "square" }, "Square"),
    /* @__PURE__ */ r.createElement("option", { value: "triangle" }, "Triangle"),
    /* @__PURE__ */ r.createElement("option", { value: "diamond" }, "Diamond"),
    /* @__PURE__ */ r.createElement("option", { value: "star" }, "Star")
  )), /* @__PURE__ */ r.createElement(
    B1,
    {
      value: o.visual.cityStyleLabel,
      section: "visual",
      fieldName: "cityStyleLabel",
      label: "Label (Optional) ",
      updateField: r1,
      tooltip: /* @__PURE__ */ r.createElement(X, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(X.Target, null, /* @__PURE__ */ r.createElement(U1, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(X.Content, null, /* @__PURE__ */ r.createElement("p", null, "When a label is provided, the default city style will appear in the legend.")))
    }
  )), /* @__PURE__ */ r.createElement(r.Fragment, null, o.visual.additionalCityStyles.length > 0 && o.visual.additionalCityStyles.map(({ label: L, column: U, value: G, shape: K }, C1) => /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `additional-city-style-${C1}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (F1) => {
        F1.preventDefault(), z("remove", C1, "", "");
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("p", null, "City Style ", C1 + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column with configuration value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: U,
      onChange: (F1) => {
        z("update", C1, "column", F1.target.value);
      }
    },
    c1
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value to Trigger"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: G,
      onChange: (F1) => {
        z("update", C1, "value", F1.target.value);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Shape"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: K,
      onChange: (F1) => {
        z("update", C1, "shape", F1.target.value);
      }
    },
    W("value")
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ r.createElement(
    "input",
    {
      key: C1,
      type: "text",
      value: L,
      onChange: (F1) => {
        z("update", C1, "label", F1.target.value);
      }
    }
  )))), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: () => z("add", 0, "", ""), className: "btn full-width" }, "Add city style")), /* @__PURE__ */ r.createElement("label", { htmlFor: "opacity" }, /* @__PURE__ */ r.createElement(B1, { type: "number", min: 0, max: 100, value: o.tooltips.opacity ? o.tooltips.opacity : 100, section: "tooltips", fieldName: "opacity", label: "Tooltip Opacity (%)", updateField: r1 })))), /* @__PURE__ */ r.createElement(C2, null, /* @__PURE__ */ r.createElement(v2, null, /* @__PURE__ */ r.createElement(E2, null, "Custom Map Layers")), /* @__PURE__ */ r.createElement(b2, null, o.map.layers.length === 0 && /* @__PURE__ */ r.createElement("p", null, "There are currently no layers."), o.map.layers.map((L, U) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x4, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(C2, { className: "series-item map-layers-list" }, /* @__PURE__ */ r.createElement(v2, { className: "series-item__title map-layers-list--title" }, /* @__PURE__ */ r.createElement(E2, null, `Layer ${U + 1}: ${L.name}`)), /* @__PURE__ */ r.createElement(b2, null, /* @__PURE__ */ r.createElement("div", { className: "map-layers-panel" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "layerName" }, "Layer Name:"), /* @__PURE__ */ r.createElement("input", { type: "text", name: "layerName", value: L.name, onChange: (G) => h(G, U, "name") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerFilename" }, "File:"), /* @__PURE__ */ r.createElement("input", { type: "text", name: "layerFilename", value: L.url, onChange: (G) => h(G, U, "url") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerNamespace" }, "TOPOJSON Namespace:"), /* @__PURE__ */ r.createElement("input", { type: "text", name: "layerNamespace", value: L.namespace, onChange: (G) => h(G, U, "namespace") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerFill" }, "Fill Color:"), /* @__PURE__ */ r.createElement("input", { type: "text", name: "layerFill", value: L.fill, onChange: (G) => h(G, U, "fill") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerFill" }, "Fill Opacity (%):"), /* @__PURE__ */ r.createElement("input", { type: "number", min: 0, max: 100, name: "layerFill", value: L.fillOpacity ? L.fillOpacity * 100 : "", onChange: (G) => h(G, U, "fillOpacity") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerStroke" }, "Stroke Color:"), /* @__PURE__ */ r.createElement("input", { type: "text", name: "layerStroke", value: L.stroke, onChange: (G) => h(G, U, "stroke") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerStroke" }, "Stroke Width:"), /* @__PURE__ */ r.createElement("input", { type: "number", min: 0, max: 5, name: "layerStrokeWidth", value: L.strokeWidth, onChange: (G) => h(G, U, "strokeWidth") }), /* @__PURE__ */ r.createElement("label", { htmlFor: "layerTooltip" }, "Tooltip:"), /* @__PURE__ */ r.createElement("textarea", { name: "layerTooltip", value: L.tooltip, onChange: (G) => h(G, U, "tooltip") }), /* @__PURE__ */ r.createElement("button", { onClick: (G) => M(G, U) }, "Remove Layer"))))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: w }, "Add Map Layer"), /* @__PURE__ */ r.createElement("p", { className: "layer-purpose-details" }, "Context should be added to your visualization or associated page to describe the significance of layers that are added to maps."))), o.general.geoType === "us" && /* @__PURE__ */ r.createElement(ho.PatternSettings, { name: "Pattern Settings" }), !1), /* @__PURE__ */ r.createElement(_n, { loadConfig: p, state: o, convertStateToConfig: V })));
}, $i = ({ data: e, navigationHandler: t, options: n, columns: a, displayGeoName: i, mapTabbingID: c }) => {
  const [p, m] = R.useState(""), [g, d] = R.useState({}), u = (l) => {
    if (l.preventDefault(), p !== "") {
      const f = e[g[p]][a.navigate.name];
      t(f);
    }
  };
  let s, o;
  switch (n.language) {
    case "es":
      s = "Selecciona un Artículo", o = "Ir";
      break;
    default:
      s = "Select an Item", o = "Go";
  }
  return R.useEffect(() => {
    const l = {}, f = {};
    Object.keys(e).forEach((S) => {
      const C = i(S);
      f[C] = S;
    }), Object.keys(f).sort().forEach((S) => {
      l[S] = f[S];
    }), d(l), m(Object.keys(l)[0]);
  }, [e, i]), /* @__PURE__ */ r.createElement("section", { className: "navigation-menu" }, /* @__PURE__ */ r.createElement("form", { onSubmit: u, type: "get" }, /* @__PURE__ */ r.createElement("label", { htmlFor: c.replace("#", "") }, /* @__PURE__ */ r.createElement("div", { className: "select-heading" }, s), /* @__PURE__ */ r.createElement("select", { value: p, id: c.replace("#", ""), onChange: (l) => m(l.target.value) }, Object.keys(g).map((l, f) => /* @__PURE__ */ r.createElement("option", { key: l, value: l }, l)))), /* @__PURE__ */ r.createElement("input", { type: "submit", value: o, className: `${n.headerColor} btn`, id: "cdcnavmap-dropdown-go" })));
}, Bi = "Topology", Ui = [
  [
    [
      19832,
      37035
    ],
    [
      6,
      -7
    ],
    [
      89,
      -43
    ],
    [
      83,
      -40
    ],
    [
      37,
      -111
    ],
    [
      90,
      -86
    ],
    [
      69,
      -65
    ],
    [
      66,
      -62
    ],
    [
      94,
      -90
    ],
    [
      67,
      -62
    ],
    [
      88,
      -84
    ],
    [
      52,
      -49
    ],
    [
      25,
      -97
    ],
    [
      30,
      -115
    ],
    [
      -18,
      -69
    ],
    [
      41,
      -11
    ],
    [
      82,
      77
    ],
    [
      77,
      47
    ],
    [
      94,
      59
    ],
    [
      64,
      40
    ],
    [
      119,
      2
    ],
    [
      57,
      115
    ],
    [
      0,
      162
    ],
    [
      60,
      -3
    ],
    [
      36,
      22
    ],
    [
      15,
      47
    ],
    [
      -38,
      65
    ],
    [
      114,
      31
    ],
    [
      83,
      21
    ],
    [
      117,
      60
    ],
    [
      115,
      58
    ],
    [
      55,
      -45
    ],
    [
      54,
      -43
    ],
    [
      106,
      -105
    ],
    [
      8,
      -26
    ],
    [
      -8,
      -49
    ],
    [
      -10,
      -49
    ],
    [
      65,
      -138
    ],
    [
      18,
      -16
    ],
    [
      53,
      -19
    ],
    [
      64,
      -46
    ],
    [
      28,
      -39
    ],
    [
      91,
      -64
    ],
    [
      16,
      -26
    ],
    [
      9,
      -42
    ],
    [
      15,
      -37
    ],
    [
      17,
      -26
    ],
    [
      16,
      -37
    ],
    [
      40,
      -44
    ],
    [
      76,
      -49
    ],
    [
      52,
      -34
    ],
    [
      74,
      -48
    ],
    [
      74,
      -97
    ],
    [
      65,
      -85
    ],
    [
      73,
      -83
    ],
    [
      -11,
      -67
    ],
    [
      75,
      -103
    ],
    [
      79,
      -131
    ],
    [
      60,
      -116
    ],
    [
      43,
      -65
    ],
    [
      51,
      -94
    ],
    [
      63,
      -115
    ],
    [
      71,
      -131
    ],
    [
      55,
      -84
    ],
    [
      71,
      -118
    ],
    [
      36,
      -70
    ],
    [
      -24,
      -48
    ],
    [
      -30,
      -60
    ],
    [
      92,
      -28
    ],
    [
      63,
      -20
    ],
    [
      -16,
      -66
    ],
    [
      -21,
      -87
    ],
    [
      72,
      -34
    ],
    [
      49,
      -23
    ],
    [
      -10,
      -46
    ],
    [
      27,
      -52
    ],
    [
      4,
      -86
    ],
    [
      88,
      6
    ],
    [
      39,
      2
    ],
    [
      52,
      -38
    ],
    [
      69,
      -50
    ],
    [
      69,
      -47
    ],
    [
      59,
      -40
    ],
    [
      77,
      -23
    ],
    [
      96,
      -34
    ],
    [
      47,
      -70
    ],
    [
      87,
      -30
    ],
    [
      32,
      -97
    ],
    [
      101,
      -36
    ],
    [
      59,
      24
    ],
    [
      21,
      -40
    ],
    [
      17,
      -46
    ],
    [
      5,
      -58
    ],
    [
      -6,
      -56
    ],
    [
      -25,
      -47
    ],
    [
      -19,
      -51
    ],
    [
      -13,
      -54
    ],
    [
      -5,
      -59
    ],
    [
      4,
      -62
    ],
    [
      10,
      -55
    ],
    [
      31,
      -101
    ],
    [
      10,
      -62
    ],
    [
      1,
      -42
    ],
    [
      -68,
      -145
    ],
    [
      -24,
      -69
    ],
    [
      2,
      -31
    ],
    [
      -50,
      -72
    ],
    [
      -91,
      -101
    ],
    [
      -42,
      -58
    ],
    [
      -20,
      19
    ],
    [
      -119,
      15
    ],
    [
      -43,
      129
    ],
    [
      -23,
      100
    ],
    [
      -34,
      87
    ],
    [
      1,
      20
    ],
    [
      31,
      58
    ],
    [
      118,
      48
    ],
    [
      2,
      19
    ],
    [
      -44,
      12
    ],
    [
      -11,
      21
    ],
    [
      -12,
      94
    ],
    [
      3,
      83
    ],
    [
      -3,
      55
    ],
    [
      -20,
      112
    ],
    [
      -29,
      68
    ],
    [
      -77,
      134
    ],
    [
      -6,
      34
    ],
    [
      33,
      42
    ],
    [
      21,
      40
    ],
    [
      -129,
      -69
    ],
    [
      -176,
      -72
    ],
    [
      -75,
      -50
    ],
    [
      -16,
      -21
    ],
    [
      -6,
      -17
    ],
    [
      14,
      -47
    ],
    [
      -2,
      -15
    ],
    [
      -15,
      -28
    ],
    [
      -19,
      -79
    ],
    [
      -38,
      -84
    ],
    [
      -19,
      -18
    ],
    [
      -69,
      32
    ],
    [
      -19,
      27
    ],
    [
      -34,
      109
    ],
    [
      8,
      29
    ],
    [
      25,
      25
    ],
    [
      34,
      53
    ],
    [
      43,
      82
    ],
    [
      82,
      207
    ],
    [
      54,
      2
    ],
    [
      95,
      41
    ],
    [
      -149,
      20
    ],
    [
      -22,
      11
    ],
    [
      -20,
      28
    ],
    [
      -18,
      46
    ],
    [
      -30,
      51
    ],
    [
      -56,
      18
    ],
    [
      -25,
      19
    ],
    [
      -37,
      61
    ],
    [
      -25,
      28
    ],
    [
      -14,
      34
    ],
    [
      -2,
      41
    ],
    [
      -11,
      21
    ],
    [
      -39,
      7
    ],
    [
      -21,
      14
    ],
    [
      -6,
      106
    ],
    [
      -77,
      27
    ],
    [
      -31,
      23
    ],
    [
      -51,
      66
    ],
    [
      -14,
      32
    ],
    [
      -5,
      27
    ],
    [
      13,
      72
    ],
    [
      -6,
      14
    ],
    [
      -45,
      -8
    ],
    [
      -280,
      113
    ],
    [
      15,
      148
    ],
    [
      -52,
      197
    ],
    [
      -55,
      79
    ],
    [
      11,
      31
    ],
    [
      12,
      16
    ],
    [
      25,
      1
    ],
    [
      107,
      -58
    ],
    [
      101,
      -69
    ],
    [
      13,
      10
    ],
    [
      -161,
      146
    ],
    [
      -41,
      43
    ],
    [
      -10,
      52
    ],
    [
      0,
      28
    ],
    [
      13,
      15
    ],
    [
      151,
      -13
    ],
    [
      9,
      11
    ],
    [
      -154,
      42
    ],
    [
      -31,
      0
    ],
    [
      -34,
      -61
    ],
    [
      -16,
      -15
    ],
    [
      -32,
      3
    ],
    [
      -12,
      10
    ],
    [
      -39,
      74
    ],
    [
      -37,
      51
    ],
    [
      -69,
      71
    ],
    [
      -13,
      51
    ],
    [
      -3,
      74
    ],
    [
      9,
      71
    ],
    [
      56,
      161
    ],
    [
      23,
      28
    ],
    [
      6,
      18
    ],
    [
      -17,
      -3
    ],
    [
      -17,
      -15
    ],
    [
      -46,
      -75
    ],
    [
      -49,
      -123
    ],
    [
      -39,
      -42
    ],
    [
      -25,
      10
    ],
    [
      -37,
      50
    ],
    [
      -78,
      61
    ],
    [
      -90,
      16
    ],
    [
      -57,
      63
    ],
    [
      -85,
      173
    ],
    [
      -11,
      87
    ],
    [
      -11,
      21
    ],
    [
      -46,
      28
    ],
    [
      -28,
      42
    ],
    [
      -43,
      211
    ],
    [
      -57,
      146
    ],
    [
      -15,
      78
    ],
    [
      5,
      76
    ],
    [
      -7,
      9
    ],
    [
      -20,
      -60
    ],
    [
      -5,
      -31
    ],
    [
      -36,
      -9
    ],
    [
      34,
      -61
    ],
    [
      8,
      -30
    ],
    [
      -17,
      3
    ],
    [
      -34,
      -8
    ],
    [
      58,
      -104
    ],
    [
      27,
      -160
    ],
    [
      39,
      -119
    ],
    [
      25,
      -97
    ],
    [
      12,
      -73
    ],
    [
      16,
      -70
    ],
    [
      46,
      -154
    ],
    [
      6,
      -31
    ],
    [
      -6,
      -25
    ],
    [
      -15,
      -30
    ],
    [
      -26,
      -11
    ],
    [
      -81,
      20
    ],
    [
      -31,
      38
    ],
    [
      -44,
      70
    ],
    [
      -62,
      33
    ],
    [
      -152,
      -16
    ],
    [
      -13,
      5
    ],
    [
      1,
      58
    ],
    [
      17,
      102
    ],
    [
      -14,
      41
    ],
    [
      -79,
      150
    ],
    [
      2,
      29
    ],
    [
      109,
      69
    ],
    [
      -53,
      6
    ],
    [
      -43,
      -27
    ],
    [
      -17,
      17
    ],
    [
      -26,
      96
    ],
    [
      -16,
      36
    ],
    [
      -9,
      8
    ],
    [
      -4,
      -92
    ],
    [
      18,
      -48
    ],
    [
      2,
      -28
    ],
    [
      -3,
      -38
    ],
    [
      -11,
      -28
    ],
    [
      -20,
      -17
    ],
    [
      -20,
      -4
    ],
    [
      -37,
      19
    ],
    [
      -41,
      37
    ],
    [
      -36,
      17
    ],
    [
      -14,
      14
    ],
    [
      -17,
      41
    ],
    [
      -28,
      30
    ],
    [
      -134,
      39
    ],
    [
      -80,
      46
    ],
    [
      -6,
      -12
    ],
    [
      25,
      -49
    ],
    [
      2,
      -29
    ],
    [
      -20,
      -9
    ],
    [
      -36,
      -47
    ],
    [
      10,
      -6
    ],
    [
      38,
      15
    ],
    [
      43,
      -2
    ],
    [
      70,
      -28
    ],
    [
      64,
      -37
    ],
    [
      23,
      -20
    ],
    [
      10,
      -31
    ],
    [
      8,
      -11
    ],
    [
      63,
      -36
    ],
    [
      3,
      -19
    ],
    [
      -41,
      -56
    ],
    [
      83,
      7
    ],
    [
      49,
      -21
    ],
    [
      61,
      -86
    ],
    [
      21,
      -48
    ],
    [
      3,
      -62
    ],
    [
      -13,
      -18
    ],
    [
      -24,
      -13
    ],
    [
      -169,
      -20
    ],
    [
      -61,
      -75
    ],
    [
      -12,
      -1
    ],
    [
      -47,
      20
    ],
    [
      -84,
      60
    ],
    [
      -105,
      57
    ],
    [
      -239,
      167
    ],
    [
      -7,
      8
    ],
    [
      -3,
      33
    ],
    [
      -17,
      16
    ],
    [
      -32,
      15
    ],
    [
      -45,
      42
    ],
    [
      -58,
      71
    ],
    [
      -36,
      55
    ],
    [
      -13,
      40
    ],
    [
      -34,
      46
    ],
    [
      -108,
      95
    ],
    [
      -57,
      36
    ],
    [
      -50,
      21
    ],
    [
      -43,
      4
    ],
    [
      -12,
      13
    ],
    [
      20,
      21
    ],
    [
      3,
      12
    ],
    [
      -96,
      20
    ],
    [
      -91,
      44
    ],
    [
      -232,
      125
    ],
    [
      -119,
      79
    ],
    [
      -70,
      37
    ],
    [
      -30,
      21
    ],
    [
      -13,
      17
    ],
    [
      17,
      18
    ],
    [
      47,
      19
    ],
    [
      31,
      21
    ],
    [
      50,
      79
    ],
    [
      4,
      26
    ],
    [
      -27,
      58
    ],
    [
      -12,
      52
    ],
    [
      1,
      29
    ],
    [
      6,
      29
    ],
    [
      7,
      19
    ],
    [
      22,
      18
    ],
    [
      15,
      9
    ],
    [
      18,
      -6
    ],
    [
      59,
      -72
    ],
    [
      8,
      -26
    ],
    [
      -3,
      -99
    ],
    [
      17,
      -115
    ],
    [
      5,
      8
    ],
    [
      6,
      38
    ],
    [
      3,
      73
    ],
    [
      7,
      35
    ],
    [
      12,
      34
    ],
    [
      22,
      18
    ],
    [
      66,
      -10
    ],
    [
      30,
      6
    ],
    [
      -129,
      52
    ],
    [
      -81,
      98
    ],
    [
      -14,
      10
    ],
    [
      -45,
      4
    ],
    [
      -47,
      -39
    ],
    [
      -121,
      -129
    ],
    [
      -33,
      -22
    ],
    [
      -152,
      -72
    ],
    [
      -103,
      -14
    ],
    [
      -116,
      11
    ],
    [
      -99,
      23
    ],
    [
      -247,
      113
    ],
    [
      -39,
      26
    ],
    [
      58,
      70
    ],
    [
      2,
      22
    ],
    [
      -20,
      71
    ],
    [
      -17,
      20
    ],
    [
      -23,
      11
    ],
    [
      -7,
      -8
    ],
    [
      0,
      -21
    ],
    [
      6,
      -39
    ],
    [
      -19,
      -21
    ],
    [
      -42,
      -22
    ],
    [
      -71,
      -22
    ],
    [
      -220,
      57
    ],
    [
      -225,
      48
    ],
    [
      -201,
      9
    ],
    [
      -284,
      -37
    ],
    [
      -152,
      -38
    ],
    [
      -88,
      -4
    ],
    [
      -85,
      7
    ],
    [
      -7,
      26
    ],
    [
      39,
      16
    ],
    [
      -2,
      19
    ],
    [
      -49,
      60
    ],
    [
      -75,
      36
    ],
    [
      -100,
      13
    ],
    [
      -57,
      18
    ],
    [
      -15,
      22
    ],
    [
      -35,
      21
    ],
    [
      -56,
      20
    ],
    [
      -25,
      36
    ],
    [
      20,
      112
    ],
    [
      19,
      67
    ],
    [
      19,
      46
    ],
    [
      49,
      77
    ],
    [
      -17,
      -6
    ],
    [
      -71,
      -56
    ],
    [
      -61,
      -58
    ],
    [
      -57,
      -75
    ],
    [
      -33,
      -34
    ],
    [
      -44,
      -32
    ],
    [
      -67,
      8
    ],
    [
      -92,
      47
    ],
    [
      -79,
      24
    ],
    [
      -66,
      1
    ],
    [
      -25,
      8
    ],
    [
      44,
      42
    ],
    [
      26,
      34
    ],
    [
      35,
      54
    ],
    [
      8,
      27
    ],
    [
      -240,
      8
    ],
    [
      -9,
      29
    ],
    [
      0,
      21
    ],
    [
      -8,
      17
    ],
    [
      -35,
      13
    ],
    [
      -49,
      -10
    ],
    [
      -79,
      -34
    ],
    [
      -34,
      26
    ],
    [
      12,
      14
    ],
    [
      26,
      11
    ],
    [
      53,
      49
    ],
    [
      -71,
      25
    ],
    [
      -37,
      29
    ],
    [
      -17,
      24
    ],
    [
      1,
      86
    ],
    [
      19,
      55
    ],
    [
      159,
      53
    ],
    [
      -50,
      21
    ],
    [
      -101,
      -7
    ],
    [
      -67,
      -46
    ],
    [
      -81,
      -65
    ],
    [
      -53,
      -25
    ],
    [
      -28,
      17
    ],
    [
      -36,
      6
    ],
    [
      -45,
      -5
    ],
    [
      -31,
      -17
    ],
    [
      -15,
      -29
    ],
    [
      -18,
      -19
    ],
    [
      -21,
      -10
    ],
    [
      -14,
      3
    ],
    [
      -22,
      29
    ],
    [
      -46,
      19
    ],
    [
      -22,
      22
    ],
    [
      -13,
      -14
    ],
    [
      -15,
      -42
    ],
    [
      -17,
      -21
    ],
    [
      -77,
      -22
    ],
    [
      -42,
      4
    ],
    [
      -50,
      53
    ],
    [
      -8,
      18
    ],
    [
      17,
      46
    ],
    [
      112,
      180
    ],
    [
      -11,
      -1
    ],
    [
      -36,
      -28
    ],
    [
      -72,
      -73
    ],
    [
      -32,
      -21
    ],
    [
      -55,
      -3
    ],
    [
      -26,
      8
    ],
    [
      -31,
      -6
    ],
    [
      -36,
      -19
    ],
    [
      -24,
      -21
    ],
    [
      -11,
      -23
    ],
    [
      7,
      -4
    ],
    [
      55,
      26
    ],
    [
      31,
      7
    ],
    [
      9,
      -13
    ],
    [
      -43,
      -81
    ],
    [
      -26,
      -78
    ],
    [
      -24,
      -19
    ],
    [
      -40,
      3
    ],
    [
      -43,
      -8
    ],
    [
      -1,
      -22
    ],
    [
      81,
      -62
    ],
    [
      29,
      -8
    ],
    [
      37,
      -23
    ],
    [
      6,
      -22
    ],
    [
      -14,
      -59
    ],
    [
      -11,
      -24
    ],
    [
      -17,
      -12
    ],
    [
      -65,
      2
    ],
    [
      -21,
      -6
    ],
    [
      -44,
      -37
    ],
    [
      -22,
      -31
    ],
    [
      8,
      -3
    ],
    [
      38,
      25
    ],
    [
      55,
      14
    ],
    [
      73,
      2
    ],
    [
      54,
      14
    ],
    [
      35,
      25
    ],
    [
      35,
      -7
    ],
    [
      34,
      -40
    ],
    [
      10,
      -35
    ],
    [
      -14,
      -29
    ],
    [
      -27,
      -22
    ],
    [
      -43,
      -12
    ],
    [
      -26,
      -19
    ],
    [
      -11,
      -26
    ],
    [
      -6,
      -37
    ],
    [
      -2,
      -51
    ],
    [
      11,
      -90
    ],
    [
      -8,
      -12
    ],
    [
      -16,
      -7
    ],
    [
      -24,
      -1
    ],
    [
      -21,
      -21
    ],
    [
      -49,
      -120
    ],
    [
      -18,
      -13
    ],
    [
      -21,
      13
    ],
    [
      -18,
      -1
    ],
    [
      -16,
      -16
    ],
    [
      -35,
      -12
    ],
    [
      -55,
      -8
    ],
    [
      -46,
      3
    ],
    [
      -82,
      26
    ],
    [
      -33,
      18
    ],
    [
      -26,
      30
    ],
    [
      -74,
      -32
    ],
    [
      -19,
      14
    ],
    [
      -46,
      83
    ],
    [
      -10,
      -5
    ],
    [
      -9,
      -89
    ],
    [
      -14,
      -32
    ],
    [
      -45,
      -64
    ],
    [
      -25,
      -112
    ],
    [
      -7,
      -4
    ],
    [
      -9,
      17
    ],
    [
      -28,
      99
    ],
    [
      -15,
      22
    ],
    [
      -41,
      -57
    ],
    [
      -4,
      -21
    ],
    [
      11,
      -74
    ],
    [
      -10,
      -12
    ],
    [
      -83,
      40
    ],
    [
      -20,
      2
    ],
    [
      -6,
      -6
    ],
    [
      29,
      -58
    ],
    [
      -4,
      -21
    ],
    [
      -117,
      -111
    ],
    [
      -31,
      4
    ],
    [
      -19,
      11
    ],
    [
      -21,
      -2
    ],
    [
      -74,
      -42
    ],
    [
      -21,
      2
    ],
    [
      -28,
      25
    ],
    [
      -13,
      -1
    ],
    [
      -7,
      -26
    ],
    [
      -1,
      -50
    ],
    [
      -28,
      -47
    ],
    [
      -89,
      -77
    ],
    [
      -23,
      -35
    ],
    [
      -18,
      -49
    ],
    [
      -13,
      -4
    ],
    [
      -52,
      31
    ],
    [
      -61,
      20
    ],
    [
      -8,
      -10
    ],
    [
      18,
      -30
    ],
    [
      -4,
      -18
    ],
    [
      -26,
      -7
    ],
    [
      -33,
      3
    ],
    [
      -40,
      12
    ],
    [
      -56,
      -14
    ],
    [
      -72,
      -39
    ],
    [
      -60,
      2
    ],
    [
      -84,
      64
    ],
    [
      -23,
      5
    ],
    [
      -8,
      18
    ],
    [
      17,
      52
    ],
    [
      23,
      39
    ],
    [
      18,
      18
    ],
    [
      80,
      51
    ],
    [
      91,
      18
    ],
    [
      57,
      30
    ],
    [
      70,
      63
    ],
    [
      37,
      47
    ],
    [
      72,
      121
    ],
    [
      -5,
      9
    ],
    [
      -17,
      7
    ],
    [
      -159,
      -115
    ],
    [
      -23,
      -11
    ],
    [
      -32,
      1
    ],
    [
      -127,
      44
    ],
    [
      -27,
      19
    ],
    [
      -19,
      55
    ],
    [
      36,
      126
    ],
    [
      25,
      60
    ],
    [
      62,
      94
    ],
    [
      81,
      100
    ],
    [
      28,
      65
    ],
    [
      42,
      173
    ],
    [
      -2,
      78
    ],
    [
      -19,
      96
    ],
    [
      -1,
      57
    ],
    [
      18,
      18
    ],
    [
      186,
      89
    ],
    [
      88,
      66
    ],
    [
      172,
      99
    ],
    [
      47,
      -1
    ],
    [
      34,
      -34
    ],
    [
      40,
      -27
    ],
    [
      45,
      -20
    ],
    [
      59,
      2
    ],
    [
      71,
      24
    ],
    [
      114,
      -9
    ],
    [
      233,
      -65
    ],
    [
      49,
      -3
    ],
    [
      2,
      8
    ],
    [
      -36,
      45
    ],
    [
      -160,
      27
    ],
    [
      -68,
      26
    ],
    [
      -190,
      115
    ],
    [
      -44,
      45
    ],
    [
      18,
      21
    ],
    [
      47,
      17
    ],
    [
      16,
      16
    ],
    [
      6,
      29
    ],
    [
      27,
      40
    ],
    [
      47,
      50
    ],
    [
      71,
      49
    ],
    [
      135,
      72
    ],
    [
      -53,
      3
    ],
    [
      -97,
      -13
    ],
    [
      -35,
      -14
    ],
    [
      -65,
      -52
    ],
    [
      -26,
      -36
    ],
    [
      -36,
      -71
    ],
    [
      -15,
      -14
    ],
    [
      -68,
      -10
    ],
    [
      -184,
      -7
    ],
    [
      -31,
      36
    ],
    [
      -17,
      6
    ],
    [
      -23,
      -5
    ],
    [
      -169,
      -93
    ],
    [
      -60,
      -47
    ],
    [
      -43,
      -54
    ],
    [
      -67,
      -40
    ],
    [
      -90,
      -25
    ],
    [
      -68,
      -31
    ],
    [
      -71,
      -62
    ],
    [
      -24,
      -48
    ],
    [
      -2,
      -22
    ],
    [
      17,
      -71
    ],
    [
      -17,
      -13
    ],
    [
      -41,
      -6
    ],
    [
      -66,
      -46
    ],
    [
      -139,
      -140
    ],
    [
      -18,
      -50
    ],
    [
      0,
      -17
    ],
    [
      23,
      -40
    ],
    [
      -16,
      -25
    ],
    [
      -39,
      -41
    ],
    [
      -87,
      -64
    ],
    [
      -57,
      -24
    ],
    [
      -38,
      -1
    ],
    [
      -35,
      9
    ],
    [
      -64,
      41
    ],
    [
      -51,
      3
    ],
    [
      -4,
      -6
    ],
    [
      71,
      -44
    ],
    [
      71,
      -57
    ],
    [
      44,
      -47
    ],
    [
      18,
      -38
    ],
    [
      1,
      -38
    ],
    [
      -16,
      -40
    ],
    [
      -51,
      -69
    ],
    [
      -49,
      -20
    ],
    [
      -126,
      -21
    ],
    [
      -41,
      -16
    ],
    [
      -13,
      -13
    ],
    [
      87,
      -29
    ],
    [
      8,
      -15
    ],
    [
      -12,
      -58
    ],
    [
      -23,
      -19
    ],
    [
      -72,
      -34
    ],
    [
      -65,
      -10
    ],
    [
      -10,
      7
    ],
    [
      12,
      45
    ],
    [
      -3,
      11
    ],
    [
      -25,
      9
    ],
    [
      -34,
      -17
    ],
    [
      -86,
      -67
    ],
    [
      -10,
      -11
    ],
    [
      32,
      -18
    ],
    [
      -7,
      -14
    ],
    [
      -47,
      -49
    ],
    [
      -19,
      -31
    ],
    [
      -31,
      -33
    ],
    [
      -139,
      -100
    ],
    [
      10,
      -24
    ],
    [
      -36,
      -87
    ],
    [
      -20,
      -76
    ],
    [
      25,
      -32
    ],
    [
      117,
      -38
    ],
    [
      56,
      -9
    ],
    [
      67,
      -27
    ],
    [
      120,
      -71
    ],
    [
      41,
      -46
    ],
    [
      6,
      -22
    ],
    [
      -4,
      -24
    ],
    [
      -15,
      -32
    ],
    [
      -37,
      -61
    ],
    [
      -91,
      -90
    ],
    [
      -42,
      -26
    ],
    [
      -62,
      -20
    ],
    [
      -20,
      -15
    ],
    [
      -80,
      -85
    ],
    [
      -22,
      -46
    ],
    [
      3,
      -41
    ],
    [
      -15,
      -28
    ],
    [
      -103,
      -55
    ],
    [
      4,
      -10
    ],
    [
      37,
      -4
    ],
    [
      -14,
      -49
    ],
    [
      -6,
      -68
    ],
    [
      -17,
      -12
    ],
    [
      -65,
      1
    ],
    [
      -82,
      -27
    ],
    [
      -5,
      -7
    ],
    [
      -2,
      -49
    ],
    [
      -214,
      -36
    ],
    [
      -46,
      -92
    ],
    [
      -25,
      -29
    ],
    [
      -84,
      -67
    ],
    [
      -51,
      -27
    ],
    [
      -58,
      -17
    ],
    [
      -31,
      -22
    ],
    [
      -3,
      -30
    ],
    [
      -17,
      -25
    ],
    [
      -50,
      -42
    ],
    [
      -25,
      -53
    ],
    [
      -18,
      -8
    ],
    [
      -95,
      -13
    ],
    [
      -19,
      -16
    ],
    [
      -9,
      -72
    ],
    [
      -17,
      -2
    ],
    [
      -34,
      17
    ],
    [
      -44,
      -13
    ],
    [
      -98,
      -81
    ],
    [
      -21,
      -29
    ],
    [
      2,
      -15
    ],
    [
      15,
      -16
    ],
    [
      24,
      -47
    ],
    [
      -2,
      -33
    ],
    [
      -38,
      -90
    ],
    [
      -13,
      -13
    ],
    [
      -46,
      -23
    ],
    [
      -19,
      -50
    ],
    [
      -42,
      6
    ],
    [
      -34,
      -9
    ],
    [
      -22,
      -34
    ],
    [
      -25,
      -19
    ],
    [
      -26,
      -5
    ],
    [
      -33,
      -26
    ],
    [
      -39,
      -48
    ],
    [
      -37,
      -30
    ],
    [
      -34,
      -13
    ],
    [
      -33,
      -3
    ],
    [
      -32,
      6
    ],
    [
      -28,
      -5
    ],
    [
      -26,
      -18
    ],
    [
      -25,
      -27
    ],
    [
      -19,
      -78
    ],
    [
      -26,
      -35
    ],
    [
      -15,
      -7
    ],
    [
      -33,
      6
    ],
    [
      -49,
      16
    ],
    [
      -50,
      -6
    ],
    [
      -80,
      -48
    ],
    [
      -26,
      -36
    ],
    [
      51,
      -8
    ],
    [
      25,
      -10
    ],
    [
      -1,
      -10
    ],
    [
      -26,
      -10
    ],
    [
      -45,
      1
    ],
    [
      -27,
      -9
    ],
    [
      -33,
      -20
    ],
    [
      -83,
      -23
    ],
    [
      -31,
      -16
    ],
    [
      -63,
      -90
    ],
    [
      -7,
      -21
    ],
    [
      8,
      -4
    ],
    [
      35,
      9
    ],
    [
      41,
      -15
    ],
    [
      21,
      -19
    ],
    [
      14,
      -24
    ],
    [
      13,
      -45
    ],
    [
      8,
      -7
    ],
    [
      -79,
      -76
    ],
    [
      -22,
      -33
    ],
    [
      -15,
      -12
    ],
    [
      -9,
      9
    ],
    [
      -10,
      86
    ],
    [
      -6,
      14
    ],
    [
      -19,
      2
    ],
    [
      -18,
      -27
    ],
    [
      -39,
      -101
    ],
    [
      -43,
      -51
    ],
    [
      -325,
      -130
    ],
    [
      -47,
      -29
    ],
    [
      -9,
      -56
    ],
    [
      -14,
      -48
    ],
    [
      -21,
      -38
    ],
    [
      -25,
      -25
    ],
    [
      -6,
      18
    ],
    [
      3,
      135
    ],
    [
      -7,
      27
    ],
    [
      -32,
      17
    ],
    [
      -15,
      -2
    ],
    [
      -20,
      -8
    ],
    [
      -32,
      -29
    ],
    [
      -20,
      -8
    ],
    [
      -25,
      3
    ],
    [
      -42,
      -29
    ],
    [
      -100,
      -92
    ],
    [
      -66,
      -23
    ],
    [
      -17,
      -20
    ],
    [
      -28,
      -50
    ],
    [
      -19,
      -19
    ],
    [
      -27,
      -1
    ],
    [
      -36,
      15
    ],
    [
      -30,
      -11
    ],
    [
      -22,
      -37
    ],
    [
      -22,
      -14
    ],
    [
      -64,
      27
    ],
    [
      -28,
      -19
    ],
    [
      -37,
      -47
    ],
    [
      -38,
      -31
    ],
    [
      -40,
      -16
    ],
    [
      -103,
      -15
    ],
    [
      -41,
      10
    ],
    [
      -9,
      14
    ],
    [
      2,
      60
    ],
    [
      17,
      44
    ],
    [
      15,
      20
    ],
    [
      21,
      19
    ],
    [
      30,
      2
    ],
    [
      56,
      -14
    ],
    [
      -6,
      15
    ],
    [
      -21,
      17
    ],
    [
      -51,
      30
    ],
    [
      -52,
      15
    ],
    [
      -29,
      -9
    ],
    [
      -42,
      -23
    ],
    [
      -28,
      -27
    ],
    [
      -15,
      -30
    ],
    [
      -18,
      -99
    ],
    [
      -11,
      -26
    ],
    [
      -121,
      -174
    ],
    [
      -48,
      -54
    ],
    [
      -46,
      4
    ],
    [
      -23,
      -20
    ],
    [
      -32,
      -43
    ],
    [
      -30,
      -21
    ],
    [
      -27,
      2
    ],
    [
      -21,
      8
    ],
    [
      -15,
      15
    ],
    [
      3,
      13
    ],
    [
      20,
      13
    ],
    [
      -7,
      35
    ],
    [
      -35,
      57
    ],
    [
      -24,
      31
    ],
    [
      -44,
      3
    ],
    [
      -7,
      -26
    ],
    [
      15,
      -132
    ],
    [
      -3,
      -30
    ],
    [
      -28,
      -38
    ],
    [
      -73,
      -42
    ],
    [
      -23,
      4
    ],
    [
      -67,
      83
    ],
    [
      -62,
      17
    ],
    [
      -5,
      -27
    ],
    [
      14,
      -55
    ],
    [
      -15,
      -52
    ],
    [
      -46,
      -48
    ],
    [
      -34,
      -23
    ],
    [
      -24,
      1
    ],
    [
      -1,
      34
    ],
    [
      21,
      66
    ],
    [
      5,
      55
    ],
    [
      -10,
      43
    ],
    [
      1,
      34
    ],
    [
      13,
      23
    ],
    [
      83,
      66
    ],
    [
      35,
      9
    ],
    [
      19,
      -16
    ],
    [
      23,
      -3
    ],
    [
      29,
      11
    ],
    [
      17,
      21
    ],
    [
      8,
      31
    ],
    [
      36,
      40
    ],
    [
      64,
      48
    ],
    [
      74,
      90
    ],
    [
      83,
      130
    ],
    [
      97,
      113
    ],
    [
      112,
      94
    ],
    [
      121,
      75
    ],
    [
      244,
      103
    ],
    [
      19,
      -6
    ],
    [
      -22,
      -33
    ],
    [
      15,
      -21
    ],
    [
      24,
      -3
    ],
    [
      90,
      17
    ],
    [
      35,
      21
    ],
    [
      11,
      -21
    ],
    [
      -13,
      -26
    ],
    [
      -54,
      -27
    ],
    [
      2,
      -22
    ],
    [
      78,
      -104
    ],
    [
      25,
      -16
    ],
    [
      20,
      2
    ],
    [
      9,
      14
    ],
    [
      -7,
      75
    ],
    [
      26,
      14
    ],
    [
      54,
      4
    ],
    [
      36,
      -10
    ],
    [
      16,
      -23
    ],
    [
      31,
      -19
    ],
    [
      45,
      -16
    ],
    [
      29,
      5
    ],
    [
      10,
      25
    ],
    [
      -19,
      29
    ],
    [
      -87,
      64
    ],
    [
      -24,
      26
    ],
    [
      -6,
      38
    ],
    [
      13,
      47
    ],
    [
      27,
      71
    ],
    [
      42,
      94
    ],
    [
      38,
      65
    ],
    [
      78,
      75
    ],
    [
      52,
      36
    ],
    [
      132,
      113
    ],
    [
      255,
      114
    ],
    [
      62,
      74
    ],
    [
      86,
      81
    ],
    [
      37,
      20
    ],
    [
      0,
      -31
    ],
    [
      11,
      -28
    ],
    [
      57,
      -19
    ],
    [
      38,
      -6
    ],
    [
      17,
      5
    ],
    [
      4,
      30
    ],
    [
      -7,
      54
    ],
    [
      -2,
      51
    ],
    [
      4,
      48
    ],
    [
      8,
      38
    ],
    [
      38,
      67
    ],
    [
      57,
      77
    ],
    [
      77,
      89
    ],
    [
      49,
      41
    ],
    [
      46,
      21
    ],
    [
      45,
      39
    ],
    [
      76,
      92
    ],
    [
      25,
      15
    ],
    [
      55,
      18
    ],
    [
      20,
      -8
    ],
    [
      12,
      -23
    ],
    [
      14,
      -14
    ],
    [
      56,
      -13
    ],
    [
      37,
      20
    ],
    [
      -6,
      11
    ],
    [
      -30,
      7
    ],
    [
      -19,
      13
    ],
    [
      -18,
      55
    ],
    [
      -37,
      33
    ],
    [
      -9,
      38
    ],
    [
      7,
      58
    ],
    [
      32,
      136
    ],
    [
      5,
      141
    ],
    [
      28,
      80
    ],
    [
      57,
      29
    ],
    [
      126,
      20
    ],
    [
      -73,
      37
    ],
    [
      -28,
      0
    ],
    [
      -48,
      17
    ],
    [
      -18,
      87
    ],
    [
      0,
      64
    ],
    [
      32,
      74
    ],
    [
      118,
      124
    ],
    [
      128,
      86
    ],
    [
      -17,
      8
    ],
    [
      -16,
      25
    ],
    [
      59,
      173
    ],
    [
      58,
      154
    ],
    [
      -78,
      -132
    ],
    [
      -90,
      -100
    ],
    [
      -266,
      -117
    ],
    [
      -180,
      -97
    ],
    [
      -86,
      -24
    ],
    [
      -57,
      25
    ],
    [
      -44,
      94
    ],
    [
      -25,
      33
    ],
    [
      -32,
      61
    ],
    [
      13,
      80
    ],
    [
      26,
      55
    ],
    [
      56,
      9
    ],
    [
      64,
      -27
    ],
    [
      55,
      -2
    ],
    [
      -71,
      54
    ],
    [
      -102,
      47
    ],
    [
      -47,
      -15
    ],
    [
      -35,
      -77
    ],
    [
      -48,
      -52
    ],
    [
      -42,
      18
    ],
    [
      -24,
      22
    ],
    [
      17,
      -65
    ],
    [
      -32,
      -98
    ],
    [
      -12,
      -67
    ],
    [
      46,
      -179
    ],
    [
      -9,
      -72
    ],
    [
      -82,
      -33
    ],
    [
      -67,
      59
    ],
    [
      -139,
      227
    ],
    [
      -49,
      65
    ],
    [
      -110,
      106
    ],
    [
      -36,
      -15
    ],
    [
      -46,
      -53
    ],
    [
      -44,
      -14
    ],
    [
      -118,
      78
    ],
    [
      -55,
      59
    ],
    [
      -52,
      72
    ],
    [
      -79,
      -40
    ],
    [
      -69,
      -47
    ],
    [
      -82,
      -75
    ],
    [
      -54,
      0
    ],
    [
      -148,
      -64
    ],
    [
      -15,
      -2
    ],
    [
      -21,
      -34
    ],
    [
      -21,
      -16
    ],
    [
      -16,
      -67
    ],
    [
      -200,
      -52
    ],
    [
      -198,
      29
    ],
    [
      70,
      37
    ],
    [
      77,
      29
    ],
    [
      67,
      70
    ],
    [
      -29,
      93
    ],
    [
      -5,
      47
    ],
    [
      1,
      60
    ],
    [
      73,
      84
    ],
    [
      -76,
      0
    ],
    [
      -49,
      -30
    ],
    [
      -45,
      63
    ],
    [
      -22,
      125
    ],
    [
      52,
      73
    ],
    [
      25,
      57
    ],
    [
      20,
      78
    ],
    [
      2,
      67
    ],
    [
      -41,
      113
    ],
    [
      -116,
      240
    ],
    [
      -53,
      179
    ],
    [
      -91,
      95
    ],
    [
      68,
      156
    ],
    [
      76,
      142
    ],
    [
      97,
      64
    ],
    [
      -8,
      9
    ],
    [
      -54,
      0
    ],
    [
      -35,
      -8
    ],
    [
      -31,
      -47
    ],
    [
      -33,
      -35
    ],
    [
      -104,
      -181
    ],
    [
      -66,
      -88
    ],
    [
      -43,
      -25
    ],
    [
      69,
      -35
    ],
    [
      11,
      -28
    ],
    [
      13,
      -66
    ],
    [
      -17,
      -79
    ],
    [
      -18,
      -44
    ],
    [
      -82,
      3
    ],
    [
      -74,
      -64
    ],
    [
      -173,
      -69
    ],
    [
      -234,
      -40
    ],
    [
      -114,
      5
    ],
    [
      -120,
      81
    ],
    [
      1,
      47
    ],
    [
      5,
      41
    ],
    [
      -172,
      140
    ],
    [
      -97,
      139
    ],
    [
      -70,
      3
    ],
    [
      -61,
      37
    ],
    [
      -71,
      58
    ],
    [
      6,
      47
    ],
    [
      11,
      33
    ],
    [
      -44,
      23
    ],
    [
      -56,
      -3
    ],
    [
      -65,
      16
    ],
    [
      171,
      180
    ],
    [
      59,
      120
    ],
    [
      48,
      17
    ],
    [
      62,
      -19
    ],
    [
      86,
      -47
    ],
    [
      72,
      -21
    ],
    [
      26,
      -22
    ],
    [
      27,
      -42
    ],
    [
      -28,
      -71
    ],
    [
      -26,
      -49
    ],
    [
      32,
      13
    ],
    [
      90,
      77
    ],
    [
      67,
      67
    ],
    [
      32,
      -7
    ],
    [
      21,
      -12
    ],
    [
      37,
      -69
    ],
    [
      46,
      -71
    ],
    [
      102,
      68
    ],
    [
      55,
      83
    ],
    [
      -46,
      37
    ],
    [
      -56,
      22
    ],
    [
      -144,
      28
    ],
    [
      35,
      24
    ],
    [
      92,
      -2
    ],
    [
      35,
      23
    ],
    [
      -37,
      32
    ],
    [
      -45,
      28
    ],
    [
      -125,
      -95
    ],
    [
      -226,
      5
    ],
    [
      -159,
      55
    ],
    [
      -157,
      -9
    ],
    [
      -25,
      11
    ],
    [
      -31,
      29
    ],
    [
      89,
      71
    ],
    [
      63,
      39
    ],
    [
      3,
      22
    ],
    [
      -36,
      3
    ],
    [
      -69,
      -19
    ],
    [
      -31,
      33
    ],
    [
      5,
      56
    ],
    [
      -11,
      -5
    ],
    [
      -27,
      -31
    ],
    [
      -39,
      15
    ],
    [
      -33,
      26
    ],
    [
      17,
      27
    ],
    [
      34,
      37
    ],
    [
      -15,
      5
    ],
    [
      -30,
      -7
    ],
    [
      -30,
      -49
    ],
    [
      7,
      -39
    ],
    [
      -1,
      -57
    ],
    [
      -51,
      -10
    ],
    [
      -43,
      7
    ],
    [
      -31,
      56
    ],
    [
      -33,
      122
    ],
    [
      -87,
      32
    ],
    [
      -21,
      62
    ],
    [
      55,
      79
    ],
    [
      -25,
      40
    ],
    [
      -58,
      14
    ],
    [
      -68,
      -40
    ],
    [
      -29,
      35
    ],
    [
      -6,
      39
    ],
    [
      -2,
      56
    ],
    [
      19,
      6
    ],
    [
      15,
      -11
    ],
    [
      135,
      30
    ],
    [
      13,
      16
    ],
    [
      -107,
      47
    ],
    [
      -30,
      49
    ],
    [
      44,
      28
    ],
    [
      80,
      3
    ],
    [
      112,
      29
    ],
    [
      -47,
      52
    ],
    [
      -10,
      29
    ],
    [
      -9,
      47
    ],
    [
      18,
      80
    ],
    [
      132,
      184
    ],
    [
      128,
      153
    ],
    [
      40,
      36
    ],
    [
      59,
      19
    ],
    [
      55,
      -15
    ],
    [
      57,
      -33
    ],
    [
      10,
      14
    ],
    [
      -19,
      14
    ],
    [
      -24,
      62
    ],
    [
      79,
      25
    ],
    [
      46,
      71
    ],
    [
      4,
      20
    ],
    [
      -51,
      -29
    ],
    [
      -52,
      -49
    ],
    [
      -13,
      49
    ],
    [
      -14,
      112
    ],
    [
      23,
      105
    ],
    [
      18,
      48
    ],
    [
      44,
      45
    ],
    [
      127,
      18
    ],
    [
      22,
      -9
    ],
    [
      4,
      21
    ],
    [
      -76,
      66
    ],
    [
      32,
      52
    ],
    [
      27,
      27
    ],
    [
      153,
      42
    ],
    [
      83,
      -13
    ],
    [
      105,
      -49
    ],
    [
      61,
      -61
    ],
    [
      -9,
      -31
    ],
    [
      -15,
      -18
    ],
    [
      -32,
      -21
    ],
    [
      -11,
      -15
    ],
    [
      5,
      -13
    ],
    [
      45,
      37
    ],
    [
      74,
      44
    ],
    [
      41,
      -19
    ],
    [
      32,
      -35
    ],
    [
      36,
      0
    ],
    [
      115,
      30
    ],
    [
      58,
      32
    ],
    [
      71,
      83
    ],
    [
      94,
      53
    ],
    [
      133,
      169
    ],
    [
      39,
      69
    ],
    [
      45,
      11
    ],
    [
      41,
      -7
    ],
    [
      28,
      -56
    ],
    [
      42,
      -17
    ],
    [
      238,
      14
    ],
    [
      121,
      26
    ],
    [
      84,
      55
    ],
    [
      88,
      92
    ],
    [
      51,
      63
    ],
    [
      24,
      80
    ],
    [
      -32,
      105
    ],
    [
      -32,
      87
    ],
    [
      -42,
      199
    ],
    [
      -118,
      131
    ],
    [
      -84,
      39
    ],
    [
      -53,
      -6
    ],
    [
      39,
      84
    ],
    [
      112,
      -9
    ],
    [
      73,
      16
    ],
    [
      59,
      40
    ],
    [
      19,
      31
    ],
    [
      30,
      62
    ],
    [
      -10,
      67
    ],
    [
      -16,
      36
    ],
    [
      -41,
      39
    ],
    [
      -48,
      59
    ],
    [
      -34,
      19
    ],
    [
      -29,
      -1
    ],
    [
      -142,
      -117
    ],
    [
      -85,
      -2
    ],
    [
      -63,
      21
    ],
    [
      -55,
      -66
    ],
    [
      -154,
      -58
    ],
    [
      -83,
      -59
    ],
    [
      -152,
      -146
    ],
    [
      -38,
      -67
    ],
    [
      -49,
      -3
    ],
    [
      -35,
      129
    ],
    [
      -166,
      122
    ],
    [
      -50,
      -41
    ],
    [
      27,
      -39
    ],
    [
      38,
      -27
    ],
    [
      62,
      -12
    ],
    [
      -27,
      -37
    ],
    [
      -20,
      -50
    ],
    [
      -62,
      47
    ],
    [
      -111,
      67
    ],
    [
      -115,
      35
    ],
    [
      -300,
      -4
    ],
    [
      -196,
      -69
    ],
    [
      -18,
      14
    ],
    [
      -19,
      6
    ],
    [
      -33,
      -17
    ],
    [
      -14,
      -28
    ],
    [
      -21,
      -17
    ],
    [
      -40,
      -7
    ],
    [
      -81,
      11
    ],
    [
      -156,
      43
    ],
    [
      -353,
      63
    ],
    [
      -93,
      38
    ],
    [
      -79,
      93
    ],
    [
      2,
      63
    ],
    [
      35,
      26
    ],
    [
      -3,
      90
    ],
    [
      -69,
      24
    ],
    [
      -140,
      129
    ],
    [
      -51,
      55
    ],
    [
      11,
      6
    ],
    [
      25,
      -15
    ],
    [
      48,
      -11
    ],
    [
      117,
      18
    ],
    [
      40,
      83
    ],
    [
      87,
      24
    ],
    [
      81,
      -11
    ],
    [
      -18,
      22
    ],
    [
      -21,
      18
    ],
    [
      -209,
      43
    ],
    [
      -28,
      -13
    ],
    [
      -374,
      75
    ],
    [
      -296,
      132
    ],
    [
      -24,
      25
    ],
    [
      -27,
      56
    ],
    [
      40,
      55
    ],
    [
      40,
      26
    ],
    [
      2,
      -30
    ],
    [
      6,
      -30
    ],
    [
      169,
      70
    ],
    [
      89,
      91
    ],
    [
      168,
      16
    ],
    [
      39,
      25
    ],
    [
      52,
      49
    ],
    [
      74,
      83
    ],
    [
      105,
      45
    ],
    [
      72,
      39
    ],
    [
      93,
      23
    ],
    [
      80,
      -38
    ],
    [
      25,
      -6
    ],
    [
      144,
      -8
    ],
    [
      48,
      17
    ],
    [
      20,
      13
    ],
    [
      15,
      19
    ],
    [
      -142,
      71
    ],
    [
      14,
      39
    ],
    [
      19,
      28
    ],
    [
      165,
      82
    ],
    [
      127,
      27
    ],
    [
      68,
      -2
    ],
    [
      198,
      106
    ],
    [
      108,
      30
    ],
    [
      204,
      20
    ],
    [
      168,
      5
    ],
    [
      45,
      -38
    ],
    [
      -90,
      8
    ],
    [
      -40,
      -7
    ],
    [
      28,
      -12
    ],
    [
      32,
      -28
    ],
    [
      -9,
      -35
    ],
    [
      -55,
      -103
    ],
    [
      4,
      -82
    ],
    [
      -36,
      -27
    ],
    [
      -35,
      -38
    ],
    [
      172,
      -119
    ],
    [
      265,
      -7
    ],
    [
      145,
      21
    ],
    [
      83,
      -35
    ],
    [
      69,
      -8
    ],
    [
      188,
      18
    ],
    [
      143,
      -26
    ],
    [
      59,
      10
    ],
    [
      131,
      178
    ],
    [
      52,
      28
    ],
    [
      56,
      -31
    ],
    [
      73,
      -25
    ],
    [
      46,
      18
    ],
    [
      38,
      -46
    ],
    [
      -18,
      96
    ],
    [
      -25,
      35
    ],
    [
      -215,
      66
    ],
    [
      -144,
      -33
    ],
    [
      -45,
      37
    ],
    [
      15,
      74
    ],
    [
      -154,
      180
    ],
    [
      -64,
      37
    ],
    [
      -76,
      2
    ],
    [
      -39,
      62
    ],
    [
      -32,
      81
    ],
    [
      66,
      33
    ],
    [
      59,
      15
    ],
    [
      54,
      -26
    ],
    [
      62,
      -106
    ],
    [
      58,
      -16
    ],
    [
      -17,
      -105
    ],
    [
      72,
      -97
    ],
    [
      161,
      -91
    ],
    [
      129,
      34
    ],
    [
      92,
      -1
    ],
    [
      54,
      -19
    ],
    [
      134,
      -81
    ],
    [
      68,
      -11
    ],
    [
      212,
      43
    ],
    [
      2,
      80
    ],
    [
      -18,
      57
    ],
    [
      -50,
      37
    ],
    [
      -143,
      -7
    ],
    [
      -111,
      59
    ],
    [
      -95,
      -16
    ],
    [
      -176,
      -91
    ],
    [
      -88,
      36
    ],
    [
      -55,
      48
    ],
    [
      -89,
      50
    ],
    [
      -12,
      93
    ],
    [
      75,
      108
    ],
    [
      55,
      51
    ],
    [
      -49,
      37
    ],
    [
      -125,
      26
    ],
    [
      -215,
      -27
    ],
    [
      -11,
      37
    ],
    [
      1,
      39
    ],
    [
      -88,
      -77
    ],
    [
      -90,
      16
    ],
    [
      -122,
      -8
    ],
    [
      -268,
      68
    ],
    [
      -96,
      84
    ],
    [
      -40,
      68
    ],
    [
      -72,
      186
    ],
    [
      -93,
      117
    ],
    [
      -639,
      396
    ],
    [
      -290,
      99
    ],
    [
      -140,
      111
    ],
    [
      -88,
      27
    ],
    [
      -84,
      11
    ],
    [
      -107,
      35
    ],
    [
      72,
      44
    ],
    [
      49,
      15
    ],
    [
      -51,
      -46
    ],
    [
      39,
      -11
    ],
    [
      63,
      26
    ],
    [
      33,
      31
    ],
    [
      50,
      134
    ],
    [
      51,
      202
    ],
    [
      -14,
      80
    ],
    [
      355,
      -16
    ],
    [
      236,
      13
    ],
    [
      78,
      18
    ],
    [
      297,
      31
    ],
    [
      77,
      22
    ],
    [
      143,
      68
    ],
    [
      169,
      121
    ],
    [
      144,
      158
    ],
    [
      23,
      42
    ],
    [
      9,
      -11
    ],
    [
      13,
      7
    ],
    [
      16,
      60
    ],
    [
      19,
      141
    ],
    [
      71,
      133
    ],
    [
      305,
      304
    ],
    [
      142,
      120
    ],
    [
      47,
      54
    ],
    [
      49,
      40
    ],
    [
      35,
      -38
    ],
    [
      16,
      -11
    ],
    [
      10,
      -18
    ],
    [
      -29,
      -8
    ],
    [
      -47,
      -39
    ],
    [
      -67,
      -26
    ],
    [
      -16,
      -13
    ],
    [
      39,
      3
    ],
    [
      116,
      28
    ],
    [
      66,
      34
    ],
    [
      326,
      63
    ],
    [
      176,
      105
    ],
    [
      7,
      23
    ],
    [
      262,
      131
    ],
    [
      36,
      -5
    ],
    [
      42,
      -16
    ],
    [
      -73,
      -86
    ],
    [
      52,
      -23
    ],
    [
      -46,
      -103
    ],
    [
      95,
      -1
    ],
    [
      21,
      -48
    ],
    [
      6,
      41
    ],
    [
      -1,
      59
    ],
    [
      7,
      57
    ],
    [
      14,
      40
    ],
    [
      67,
      -18
    ],
    [
      150,
      43
    ],
    [
      -182,
      5
    ],
    [
      -109,
      94
    ],
    [
      -61,
      1
    ],
    [
      203,
      137
    ],
    [
      186,
      82
    ],
    [
      42,
      -1
    ],
    [
      20,
      -16
    ],
    [
      4,
      -25
    ],
    [
      -40,
      -16
    ],
    [
      -39,
      -29
    ],
    [
      18,
      -26
    ],
    [
      27,
      -4
    ],
    [
      89,
      21
    ],
    [
      40,
      27
    ],
    [
      190,
      -2
    ],
    [
      56,
      19
    ],
    [
      13,
      19
    ],
    [
      247,
      3
    ],
    [
      45,
      14
    ],
    [
      154,
      73
    ],
    [
      142,
      89
    ],
    [
      66,
      48
    ],
    [
      112,
      124
    ],
    [
      96,
      80
    ],
    [
      159,
      80
    ],
    [
      38,
      -10
    ],
    [
      -51,
      -16
    ],
    [
      -36,
      -34
    ],
    [
      49,
      -45
    ],
    [
      334,
      -93
    ],
    [
      84,
      -5
    ],
    [
      33,
      -56
    ],
    [
      -28,
      -53
    ],
    [
      -86,
      -60
    ],
    [
      -173,
      -61
    ],
    [
      53,
      -23
    ],
    [
      35,
      -55
    ],
    [
      51,
      -6
    ],
    [
      83,
      20
    ],
    [
      65,
      34
    ],
    [
      135,
      109
    ],
    [
      43,
      60
    ],
    [
      31,
      16
    ],
    [
      113,
      -15
    ],
    [
      64,
      -31
    ],
    [
      73,
      -56
    ],
    [
      -26,
      -53
    ],
    [
      -30,
      -30
    ],
    [
      94,
      -42
    ],
    [
      105,
      -9
    ],
    [
      100,
      -33
    ],
    [
      140,
      68
    ],
    [
      110,
      15
    ],
    [
      103,
      -2
    ],
    [
      134,
      37
    ],
    [
      227,
      -51
    ],
    [
      58,
      13
    ],
    [
      91,
      -8
    ],
    [
      97,
      -31
    ],
    [
      34,
      -33
    ],
    [
      -104,
      -70
    ],
    [
      -16,
      -72
    ],
    [
      36,
      -29
    ],
    [
      65,
      -6
    ],
    [
      9,
      -42
    ],
    [
      40,
      -10
    ],
    [
      205,
      3
    ],
    [
      -16,
      -20
    ],
    [
      -10,
      -24
    ],
    [
      -63,
      -53
    ],
    [
      365,
      -30
    ],
    [
      49,
      29
    ],
    [
      75,
      12
    ],
    [
      161,
      41
    ],
    [
      60,
      -18
    ],
    [
      71,
      -42
    ],
    [
      66,
      -8
    ],
    [
      61,
      8
    ],
    [
      143,
      60
    ],
    [
      165,
      2
    ],
    [
      68,
      -19
    ],
    [
      72,
      9
    ],
    [
      215,
      -69
    ],
    [
      79,
      -8
    ],
    [
      106,
      -88
    ],
    [
      55,
      -3
    ],
    [
      62,
      38
    ],
    [
      54,
      -2
    ],
    [
      52,
      -36
    ],
    [
      86,
      -11
    ],
    [
      40,
      -57
    ],
    [
      43,
      -20
    ],
    [
      326,
      -43
    ],
    [
      161,
      20
    ],
    [
      235,
      -5
    ],
    [
      113,
      -27
    ],
    [
      119,
      3
    ],
    [
      194,
      -98
    ],
    [
      103,
      -16
    ],
    [
      20,
      -23
    ],
    [
      293,
      -24
    ],
    [
      102,
      52
    ],
    [
      179,
      13
    ],
    [
      161,
      44
    ],
    [
      91,
      -1
    ],
    [
      107,
      -11
    ],
    [
      40,
      6
    ],
    [
      30,
      19
    ],
    [
      258,
      -75
    ],
    [
      145,
      -85
    ],
    [
      64,
      -63
    ],
    [
      303,
      -90
    ],
    [
      87,
      -50
    ],
    [
      60,
      -55
    ],
    [
      35,
      -6
    ],
    [
      25,
      16
    ],
    [
      106,
      -5
    ],
    [
      40,
      -8
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      0,
      -264
    ],
    [
      0,
      -263
    ],
    [
      0,
      -264
    ],
    [
      121,
      -37
    ],
    [
      120,
      -37
    ],
    [
      37,
      73
    ],
    [
      130,
      -56
    ],
    [
      113,
      -49
    ],
    [
      72,
      63
    ],
    [
      79,
      68
    ],
    [
      105,
      5
    ],
    [
      118,
      5
    ],
    [
      79,
      4
    ],
    [
      0,
      -58
    ],
    [
      -29,
      -96
    ],
    [
      -25,
      -81
    ],
    [
      66,
      -74
    ]
  ],
  [
    [
      6123,
      42654
    ],
    [
      -19,
      -5
    ],
    [
      1,
      14
    ],
    [
      58,
      36
    ],
    [
      106,
      46
    ],
    [
      -4,
      -10
    ],
    [
      -57,
      -35
    ],
    [
      -85,
      -46
    ]
  ],
  [
    [
      3411,
      40319
    ],
    [
      8,
      -22
    ],
    [
      53,
      4
    ],
    [
      74,
      -10
    ],
    [
      82,
      -21
    ],
    [
      81,
      7
    ],
    [
      102,
      68
    ],
    [
      62,
      18
    ],
    [
      61,
      9
    ],
    [
      67,
      -16
    ],
    [
      64,
      -36
    ],
    [
      26,
      -21
    ],
    [
      19,
      -37
    ],
    [
      14,
      -45
    ],
    [
      19,
      -32
    ],
    [
      122,
      -39
    ],
    [
      78,
      -16
    ],
    [
      18,
      -22
    ],
    [
      17,
      -30
    ],
    [
      64,
      -22
    ],
    [
      67,
      8
    ],
    [
      38,
      -8
    ],
    [
      114,
      -1
    ],
    [
      142,
      -33
    ],
    [
      -23,
      -88
    ],
    [
      -46,
      -38
    ],
    [
      -130,
      12
    ],
    [
      -130,
      -12
    ],
    [
      -54,
      -45
    ],
    [
      -44,
      -57
    ],
    [
      -7,
      -56
    ],
    [
      -26,
      -25
    ],
    [
      -27,
      -11
    ],
    [
      -22,
      30
    ],
    [
      -29,
      94
    ],
    [
      -21,
      26
    ],
    [
      -23,
      16
    ],
    [
      -63,
      30
    ],
    [
      -64,
      18
    ],
    [
      -38,
      3
    ],
    [
      -27,
      32
    ],
    [
      -15,
      47
    ],
    [
      -26,
      24
    ],
    [
      -51,
      35
    ],
    [
      -52,
      27
    ],
    [
      -163,
      58
    ],
    [
      -53,
      8
    ],
    [
      -54,
      -6
    ],
    [
      -59,
      -27
    ],
    [
      -56,
      -40
    ],
    [
      -58,
      -30
    ],
    [
      -60,
      -6
    ],
    [
      -57,
      17
    ],
    [
      -53,
      39
    ],
    [
      -27,
      28
    ],
    [
      -15,
      47
    ],
    [
      1,
      47
    ],
    [
      7,
      46
    ],
    [
      29,
      111
    ],
    [
      51,
      21
    ],
    [
      93,
      -78
    ]
  ],
  [
    [
      15335,
      37779
    ],
    [
      -64,
      -7
    ],
    [
      -30,
      11
    ],
    [
      -4,
      13
    ],
    [
      12,
      45
    ],
    [
      -1,
      20
    ],
    [
      33,
      7
    ],
    [
      37,
      -22
    ],
    [
      11,
      -22
    ],
    [
      6,
      -45
    ]
  ],
  [
    [
      2763,
      37447
    ],
    [
      109,
      -60
    ],
    [
      70,
      7
    ],
    [
      56,
      -50
    ],
    [
      23,
      -40
    ],
    [
      -83,
      29
    ],
    [
      -121,
      -2
    ],
    [
      -164,
      121
    ],
    [
      -58,
      27
    ],
    [
      13,
      68
    ],
    [
      63,
      35
    ],
    [
      32,
      -92
    ],
    [
      60,
      -43
    ]
  ],
  [
    [
      13263,
      37360
    ],
    [
      -25,
      -3
    ],
    [
      33,
      45
    ],
    [
      22,
      87
    ],
    [
      31,
      -13
    ],
    [
      6,
      -16
    ],
    [
      -50,
      -89
    ],
    [
      -17,
      -11
    ]
  ],
  [
    [
      15473,
      37440
    ],
    [
      0,
      -23
    ],
    [
      -16,
      -23
    ],
    [
      15,
      -42
    ],
    [
      -26,
      -72
    ],
    [
      -10,
      -46
    ],
    [
      -14,
      -28
    ],
    [
      -15,
      -12
    ],
    [
      -14,
      7
    ],
    [
      -3,
      16
    ],
    [
      9,
      25
    ],
    [
      -34,
      -1
    ],
    [
      -10,
      63
    ],
    [
      18,
      20
    ],
    [
      7,
      27
    ],
    [
      2,
      18
    ],
    [
      22,
      80
    ],
    [
      8,
      6
    ],
    [
      2,
      -20
    ],
    [
      7,
      -5
    ],
    [
      12,
      8
    ],
    [
      17,
      35
    ],
    [
      8,
      4
    ],
    [
      15,
      -37
    ]
  ],
  [
    [
      16114,
      37440
    ],
    [
      11,
      -25
    ],
    [
      97,
      6
    ],
    [
      28,
      -5
    ],
    [
      11,
      -11
    ],
    [
      -13,
      -17
    ],
    [
      -37,
      -22
    ],
    [
      -110,
      -39
    ],
    [
      -89,
      -51
    ],
    [
      -12,
      5
    ],
    [
      -16,
      56
    ],
    [
      -17,
      22
    ],
    [
      -10,
      32
    ],
    [
      0,
      12
    ],
    [
      17,
      21
    ],
    [
      32,
      32
    ],
    [
      23,
      12
    ],
    [
      85,
      -28
    ]
  ],
  [
    [
      16760,
      37338
    ],
    [
      -16,
      -22
    ],
    [
      -44,
      8
    ],
    [
      -24,
      14
    ],
    [
      79,
      58
    ],
    [
      13,
      -12
    ],
    [
      -8,
      -46
    ]
  ],
  [
    [
      6110,
      37380
    ],
    [
      47,
      -45
    ],
    [
      25,
      -2
    ],
    [
      78,
      13
    ],
    [
      28,
      -9
    ],
    [
      28,
      -20
    ],
    [
      17,
      -29
    ],
    [
      3,
      -52
    ],
    [
      -12,
      -46
    ],
    [
      4,
      -65
    ],
    [
      -3,
      -29
    ],
    [
      41,
      -36
    ],
    [
      13,
      -51
    ],
    [
      7,
      -53
    ],
    [
      -90,
      -19
    ],
    [
      -90,
      -2
    ],
    [
      -77,
      -37
    ],
    [
      -16,
      -27
    ],
    [
      12,
      -40
    ],
    [
      -21,
      -10
    ],
    [
      -20,
      9
    ],
    [
      -37,
      37
    ],
    [
      -42,
      17
    ],
    [
      -144,
      28
    ],
    [
      -181,
      107
    ],
    [
      -78,
      23
    ],
    [
      -79,
      78
    ],
    [
      -72,
      100
    ],
    [
      47,
      16
    ],
    [
      47,
      9
    ],
    [
      210,
      -15
    ],
    [
      27,
      71
    ],
    [
      27,
      18
    ],
    [
      67,
      21
    ],
    [
      62,
      39
    ],
    [
      28,
      -1
    ],
    [
      29,
      -15
    ],
    [
      59,
      24
    ],
    [
      31,
      5
    ],
    [
      25,
      -12
    ]
  ],
  [
    [
      15434,
      36865
    ],
    [
      -56,
      -13
    ],
    [
      -14,
      27
    ],
    [
      30,
      66
    ],
    [
      23,
      38
    ],
    [
      18,
      9
    ],
    [
      64,
      75
    ],
    [
      72,
      54
    ],
    [
      65,
      80
    ],
    [
      67,
      114
    ],
    [
      12,
      42
    ],
    [
      31,
      5
    ],
    [
      51,
      -28
    ],
    [
      31,
      -39
    ],
    [
      -15,
      -32
    ],
    [
      -168,
      -161
    ],
    [
      -14,
      -21
    ],
    [
      -15,
      -55
    ],
    [
      -14,
      -19
    ],
    [
      -22,
      -9
    ],
    [
      -16,
      -24
    ],
    [
      -10,
      -39
    ],
    [
      -21,
      -21
    ],
    [
      -31,
      -1
    ],
    [
      -22,
      -11
    ],
    [
      -12,
      -20
    ],
    [
      -34,
      -17
    ]
  ],
  [
    [
      15289,
      37093
    ],
    [
      -27,
      -28
    ],
    [
      -100,
      17
    ],
    [
      21,
      54
    ],
    [
      77,
      35
    ],
    [
      83,
      -54
    ],
    [
      -54,
      -24
    ]
  ],
  [
    [
      17040,
      36870
    ],
    [
      -24,
      -5
    ],
    [
      36,
      59
    ],
    [
      49,
      65
    ],
    [
      46,
      41
    ],
    [
      60,
      18
    ],
    [
      -6,
      -30
    ],
    [
      -79,
      -55
    ],
    [
      -82,
      -93
    ]
  ],
  [
    [
      8754,
      35750
    ],
    [
      -38,
      -15
    ],
    [
      -39,
      8
    ],
    [
      -31,
      89
    ],
    [
      24,
      3
    ],
    [
      50,
      59
    ],
    [
      110,
      47
    ],
    [
      27,
      6
    ],
    [
      -103,
      -197
    ]
  ],
  [
    [
      13027,
      35667
    ],
    [
      -15,
      -6
    ],
    [
      -37,
      28
    ],
    [
      -25,
      29
    ],
    [
      17,
      22
    ],
    [
      71,
      47
    ],
    [
      35,
      1
    ],
    [
      14,
      -8
    ],
    [
      5,
      -14
    ],
    [
      -3,
      -22
    ],
    [
      -15,
      -27
    ],
    [
      -47,
      -50
    ]
  ],
  [
    [
      13062,
      35554
    ],
    [
      18,
      -7
    ],
    [
      19,
      53
    ],
    [
      14,
      2
    ],
    [
      60,
      -45
    ],
    [
      37,
      10
    ],
    [
      23,
      -56
    ],
    [
      21,
      -5
    ],
    [
      20,
      7
    ],
    [
      12,
      -4
    ],
    [
      -4,
      -60
    ],
    [
      -44,
      -59
    ],
    [
      -20,
      -16
    ],
    [
      -29,
      16
    ],
    [
      -10,
      6
    ],
    [
      -19,
      26
    ],
    [
      -14,
      34
    ],
    [
      -9,
      0
    ],
    [
      -33,
      -39
    ],
    [
      0,
      -20
    ],
    [
      14,
      -29
    ],
    [
      -2,
      -18
    ],
    [
      -36,
      -9
    ],
    [
      -36,
      5
    ],
    [
      -43,
      -26
    ],
    [
      -11,
      16
    ],
    [
      -6,
      45
    ],
    [
      -14,
      -5
    ],
    [
      -21,
      -55
    ],
    [
      -22,
      -35
    ],
    [
      -41,
      -29
    ],
    [
      -9,
      -14
    ],
    [
      -30,
      -2
    ],
    [
      -44,
      -18
    ],
    [
      -28,
      3
    ],
    [
      -163,
      60
    ],
    [
      -39,
      22
    ],
    [
      135,
      136
    ],
    [
      70,
      53
    ],
    [
      41,
      -3
    ],
    [
      41,
      -16
    ],
    [
      22,
      2
    ],
    [
      2,
      61
    ],
    [
      -39,
      45
    ],
    [
      2,
      19
    ],
    [
      84,
      31
    ],
    [
      32,
      -5
    ],
    [
      35,
      -16
    ],
    [
      33,
      -25
    ],
    [
      31,
      -36
    ]
  ],
  [
    [
      22049,
      35375
    ],
    [
      129,
      -21
    ],
    [
      94,
      5
    ],
    [
      86,
      -135
    ],
    [
      53,
      -109
    ],
    [
      31,
      -76
    ],
    [
      18,
      -74
    ],
    [
      24,
      -71
    ],
    [
      -2,
      -10
    ],
    [
      -50,
      48
    ],
    [
      -36,
      97
    ],
    [
      -18,
      38
    ],
    [
      -18,
      17
    ],
    [
      -19,
      36
    ],
    [
      -37,
      93
    ],
    [
      -2,
      26
    ],
    [
      -16,
      24
    ],
    [
      -19,
      10
    ],
    [
      -21,
      -4
    ],
    [
      -8,
      -9
    ],
    [
      4,
      -64
    ],
    [
      16,
      -71
    ],
    [
      93,
      -156
    ],
    [
      63,
      -88
    ],
    [
      12,
      -30
    ],
    [
      8,
      -81
    ],
    [
      -27,
      -36
    ],
    [
      33,
      -75
    ],
    [
      -1,
      -14
    ],
    [
      -7,
      -15
    ],
    [
      -89,
      -33
    ],
    [
      -81,
      -138
    ],
    [
      -89,
      -81
    ],
    [
      -41,
      -13
    ],
    [
      -19,
      13
    ],
    [
      -19,
      31
    ],
    [
      -11,
      42
    ],
    [
      -3,
      52
    ],
    [
      22,
      33
    ],
    [
      44,
      170
    ],
    [
      1,
      55
    ],
    [
      -55,
      78
    ],
    [
      -33,
      63
    ],
    [
      -17,
      89
    ],
    [
      -30,
      233
    ],
    [
      -14,
      75
    ],
    [
      -20,
      63
    ],
    [
      -25,
      49
    ],
    [
      -19,
      55
    ],
    [
      -13,
      60
    ],
    [
      5,
      23
    ],
    [
      44,
      -31
    ],
    [
      52,
      -86
    ],
    [
      27,
      -57
    ]
  ],
  [
    [
      22235,
      35436
    ],
    [
      -3,
      -23
    ],
    [
      -69,
      2
    ],
    [
      -70,
      33
    ],
    [
      -34,
      43
    ],
    [
      6,
      20
    ],
    [
      65,
      18
    ],
    [
      62,
      -41
    ],
    [
      43,
      -52
    ]
  ],
  [
    [
      21517,
      35449
    ],
    [
      72,
      -88
    ],
    [
      1,
      -20
    ],
    [
      -15,
      -60
    ],
    [
      -39,
      -17
    ],
    [
      11,
      -24
    ],
    [
      29,
      -18
    ],
    [
      21,
      15
    ],
    [
      77,
      84
    ],
    [
      23,
      18
    ],
    [
      14,
      2
    ],
    [
      94,
      -26
    ],
    [
      81,
      -40
    ],
    [
      24,
      -32
    ],
    [
      14,
      -57
    ],
    [
      -22,
      -122
    ],
    [
      -67,
      -21
    ],
    [
      -31,
      2
    ],
    [
      -34,
      18
    ],
    [
      -54,
      -43
    ],
    [
      45,
      -32
    ],
    [
      137,
      -8
    ],
    [
      41,
      -69
    ],
    [
      12,
      -53
    ],
    [
      -29,
      -97
    ],
    [
      -78,
      27
    ],
    [
      -68,
      56
    ],
    [
      -141,
      80
    ],
    [
      -34,
      4
    ],
    [
      -22,
      -14
    ],
    [
      -6,
      -49
    ],
    [
      1,
      -105
    ],
    [
      -38,
      -55
    ],
    [
      -110,
      24
    ],
    [
      -44,
      80
    ],
    [
      -40,
      126
    ],
    [
      -153,
      150
    ],
    [
      -42,
      29
    ],
    [
      -55,
      90
    ],
    [
      22,
      71
    ],
    [
      7,
      41
    ],
    [
      29,
      10
    ],
    [
      43,
      32
    ],
    [
      24,
      68
    ],
    [
      39,
      -55
    ],
    [
      52,
      -53
    ],
    [
      0,
      50
    ],
    [
      25,
      40
    ],
    [
      50,
      -2
    ],
    [
      24,
      9
    ],
    [
      33,
      37
    ],
    [
      48,
      19
    ],
    [
      29,
      -22
    ]
  ],
  [
    [
      12818,
      35070
    ],
    [
      4,
      -50
    ],
    [
      20,
      7
    ],
    [
      78,
      51
    ],
    [
      41,
      15
    ],
    [
      53,
      2
    ],
    [
      42,
      -23
    ],
    [
      8,
      -18
    ],
    [
      -3,
      -22
    ],
    [
      -34,
      -43
    ],
    [
      1,
      -28
    ],
    [
      37,
      -51
    ],
    [
      88,
      -29
    ],
    [
      11,
      -15
    ],
    [
      -1,
      -19
    ],
    [
      -61,
      -85
    ],
    [
      -22,
      -20
    ],
    [
      -16,
      -5
    ],
    [
      -111,
      15
    ],
    [
      -101,
      28
    ],
    [
      -41,
      5
    ],
    [
      -15,
      -9
    ],
    [
      -28,
      -26
    ],
    [
      20,
      -8
    ],
    [
      89,
      -6
    ],
    [
      31,
      -39
    ],
    [
      14,
      -28
    ],
    [
      7,
      -31
    ],
    [
      -18,
      -13
    ],
    [
      -38,
      -9
    ],
    [
      -45,
      0
    ],
    [
      -57,
      -35
    ],
    [
      -31,
      -40
    ],
    [
      -113,
      -10
    ],
    [
      -86,
      -54
    ],
    [
      -30,
      -26
    ],
    [
      -10,
      -31
    ],
    [
      -33,
      -23
    ],
    [
      -73,
      -23
    ],
    [
      44,
      -21
    ],
    [
      7,
      -17
    ],
    [
      0,
      -24
    ],
    [
      -6,
      -21
    ],
    [
      -57,
      -92
    ],
    [
      -110,
      -76
    ],
    [
      -27,
      3
    ],
    [
      -12,
      10
    ],
    [
      -10,
      14
    ],
    [
      0,
      15
    ],
    [
      140,
      152
    ],
    [
      -5,
      7
    ],
    [
      -38,
      6
    ],
    [
      -61,
      42
    ],
    [
      -43,
      -27
    ],
    [
      -10,
      1
    ],
    [
      12,
      36
    ],
    [
      28,
      42
    ],
    [
      -5,
      12
    ],
    [
      -15,
      11
    ],
    [
      -36,
      7
    ],
    [
      -55,
      2
    ],
    [
      -41,
      -11
    ],
    [
      -26,
      -22
    ],
    [
      -2,
      -9
    ],
    [
      56,
      2
    ],
    [
      15,
      -11
    ],
    [
      16,
      -21
    ],
    [
      9,
      -25
    ],
    [
      3,
      -28
    ],
    [
      -12,
      -37
    ],
    [
      -27,
      -47
    ],
    [
      -39,
      8
    ],
    [
      -81,
      104
    ],
    [
      -36,
      153
    ],
    [
      -69,
      117
    ],
    [
      -3,
      28
    ],
    [
      19,
      72
    ],
    [
      70,
      102
    ],
    [
      75,
      28
    ],
    [
      54,
      43
    ],
    [
      52,
      13
    ],
    [
      32,
      -1
    ],
    [
      43,
      -18
    ],
    [
      18,
      -40
    ],
    [
      -10,
      -18
    ],
    [
      4,
      -10
    ],
    [
      30,
      -23
    ],
    [
      33,
      -82
    ],
    [
      39,
      -73
    ],
    [
      26,
      -30
    ],
    [
      34,
      -18
    ],
    [
      -35,
      56
    ],
    [
      -21,
      69
    ],
    [
      -10,
      137
    ],
    [
      -10,
      36
    ],
    [
      19,
      10
    ],
    [
      56,
      -5
    ],
    [
      -2,
      20
    ],
    [
      -58,
      46
    ],
    [
      -36,
      39
    ],
    [
      -14,
      30
    ],
    [
      1,
      26
    ],
    [
      32,
      39
    ],
    [
      18,
      11
    ],
    [
      19,
      5
    ],
    [
      37,
      -8
    ],
    [
      17,
      -12
    ],
    [
      47,
      -88
    ],
    [
      23,
      -27
    ],
    [
      18,
      0
    ],
    [
      17,
      15
    ],
    [
      16,
      29
    ],
    [
      16,
      17
    ],
    [
      17,
      6
    ],
    [
      53,
      -13
    ],
    [
      18,
      5
    ],
    [
      9,
      22
    ],
    [
      -1,
      39
    ],
    [
      14,
      14
    ],
    [
      3,
      28
    ],
    [
      -29,
      43
    ],
    [
      33,
      13
    ],
    [
      110,
      -33
    ],
    [
      47,
      -35
    ],
    [
      -24,
      -66
    ]
  ],
  [
    [
      12644,
      35094
    ],
    [
      -14,
      -25
    ],
    [
      -13,
      6
    ],
    [
      -28,
      29
    ],
    [
      -58,
      43
    ],
    [
      -27,
      30
    ],
    [
      -1,
      12
    ],
    [
      20,
      14
    ],
    [
      68,
      -35
    ],
    [
      28,
      -31
    ],
    [
      25,
      -43
    ]
  ],
  [
    [
      21902,
      34644
    ],
    [
      43,
      -99
    ],
    [
      32,
      -77
    ],
    [
      27,
      -93
    ],
    [
      47,
      -191
    ],
    [
      22,
      -72
    ],
    [
      6,
      -40
    ],
    [
      5,
      -103
    ],
    [
      -7,
      -23
    ],
    [
      -13,
      -20
    ],
    [
      -3,
      -30
    ],
    [
      13,
      -79
    ],
    [
      1,
      -120
    ],
    [
      -13,
      -68
    ],
    [
      -14,
      -10
    ],
    [
      -34,
      22
    ],
    [
      -29,
      37
    ],
    [
      -21,
      38
    ],
    [
      -52,
      120
    ],
    [
      -15,
      56
    ],
    [
      -1,
      41
    ],
    [
      8,
      29
    ],
    [
      17,
      18
    ],
    [
      29,
      49
    ],
    [
      -4,
      8
    ],
    [
      -22,
      -11
    ],
    [
      -46,
      -6
    ],
    [
      -40,
      38
    ],
    [
      -31,
      21
    ],
    [
      6,
      69
    ],
    [
      -9,
      20
    ],
    [
      -61,
      -22
    ],
    [
      -23,
      20
    ],
    [
      -5,
      26
    ],
    [
      1,
      39
    ],
    [
      11,
      34
    ],
    [
      59,
      86
    ],
    [
      -6,
      16
    ],
    [
      -28,
      4
    ],
    [
      -38,
      29
    ],
    [
      -17,
      97
    ],
    [
      -40,
      55
    ],
    [
      -24,
      -5
    ],
    [
      -54,
      -156
    ],
    [
      -27,
      -34
    ],
    [
      -77,
      -22
    ],
    [
      16,
      43
    ],
    [
      7,
      39
    ],
    [
      -27,
      117
    ],
    [
      -1,
      46
    ],
    [
      18,
      33
    ],
    [
      54,
      14
    ],
    [
      29,
      19
    ],
    [
      22,
      32
    ],
    [
      5,
      32
    ],
    [
      42,
      83
    ],
    [
      20,
      16
    ],
    [
      52,
      -1
    ],
    [
      109,
      -92
    ],
    [
      33,
      -13
    ],
    [
      48,
      -59
    ]
  ],
  [
    [
      4071,
      34492
    ],
    [
      -53,
      -42
    ],
    [
      -47,
      16
    ],
    [
      -14,
      31
    ],
    [
      -1,
      13
    ],
    [
      137,
      35
    ],
    [
      -22,
      -53
    ]
  ],
  [
    [
      12763,
      34439
    ],
    [
      -65,
      -29
    ],
    [
      -11,
      1
    ],
    [
      -40,
      -59
    ],
    [
      -30,
      -25
    ],
    [
      -40,
      46
    ],
    [
      10,
      73
    ],
    [
      35,
      47
    ],
    [
      177,
      -16
    ],
    [
      14,
      -13
    ],
    [
      0,
      -11
    ],
    [
      -13,
      -10
    ],
    [
      -37,
      -4
    ]
  ],
  [
    [
      22715,
      34330
    ],
    [
      34,
      -29
    ],
    [
      18,
      30
    ],
    [
      34,
      -1
    ],
    [
      64,
      -27
    ],
    [
      37,
      -39
    ],
    [
      22,
      -46
    ],
    [
      2,
      -26
    ],
    [
      -7,
      -62
    ],
    [
      5,
      -62
    ],
    [
      -3,
      -33
    ],
    [
      -8,
      -27
    ],
    [
      -15,
      -21
    ],
    [
      -15,
      -3
    ],
    [
      -50,
      57
    ],
    [
      -56,
      101
    ],
    [
      -43,
      31
    ],
    [
      -2,
      -10
    ],
    [
      12,
      -29
    ],
    [
      35,
      -55
    ],
    [
      6,
      -33
    ],
    [
      25,
      -40
    ],
    [
      11,
      -30
    ],
    [
      6,
      -40
    ],
    [
      0,
      -35
    ],
    [
      -7,
      -30
    ],
    [
      -11,
      -19
    ],
    [
      -16,
      -9
    ],
    [
      -86,
      9
    ],
    [
      -52,
      -20
    ],
    [
      -60,
      11
    ],
    [
      -14,
      18
    ],
    [
      -9,
      29
    ],
    [
      -5,
      72
    ],
    [
      -15,
      103
    ],
    [
      3,
      79
    ],
    [
      -38,
      71
    ],
    [
      -34,
      43
    ],
    [
      -47,
      39
    ],
    [
      -32,
      38
    ],
    [
      9,
      31
    ],
    [
      49,
      22
    ],
    [
      80,
      -5
    ],
    [
      173,
      -53
    ]
  ],
  [
    [
      22399,
      34187
    ],
    [
      33,
      -63
    ],
    [
      48,
      5
    ],
    [
      26,
      -47
    ],
    [
      20,
      -71
    ],
    [
      -14,
      -45
    ],
    [
      -21,
      10
    ],
    [
      -24,
      -27
    ],
    [
      -14,
      -87
    ],
    [
      6,
      -87
    ],
    [
      -7,
      -87
    ],
    [
      -27,
      -89
    ],
    [
      -6,
      -60
    ],
    [
      -10,
      -18
    ],
    [
      -12,
      -6
    ],
    [
      -15,
      16
    ],
    [
      -22,
      13
    ],
    [
      -28,
      -50
    ],
    [
      -34,
      -1
    ],
    [
      -28,
      114
    ],
    [
      25,
      190
    ],
    [
      56,
      39
    ],
    [
      -33,
      51
    ],
    [
      -71,
      60
    ],
    [
      6,
      34
    ],
    [
      -54,
      96
    ],
    [
      -3,
      23
    ],
    [
      8,
      81
    ],
    [
      51,
      72
    ],
    [
      66,
      12
    ],
    [
      47,
      -30
    ],
    [
      26,
      -27
    ],
    [
      5,
      -21
    ]
  ],
  [
    [
      23029,
      33898
    ],
    [
      -6,
      -13
    ],
    [
      -64,
      1
    ],
    [
      -23,
      11
    ],
    [
      -9,
      39
    ],
    [
      6,
      36
    ],
    [
      15,
      27
    ],
    [
      18,
      53
    ],
    [
      14,
      89
    ],
    [
      95,
      -99
    ],
    [
      29,
      -44
    ],
    [
      15,
      -54
    ],
    [
      -33,
      -21
    ],
    [
      -41,
      -9
    ],
    [
      -16,
      -16
    ]
  ],
  [
    [
      4276,
      33997
    ],
    [
      67,
      -18
    ],
    [
      37,
      12
    ],
    [
      33,
      -10
    ],
    [
      6,
      -21
    ],
    [
      -57,
      -46
    ],
    [
      -24,
      2
    ],
    [
      -67,
      57
    ],
    [
      5,
      24
    ]
  ],
  [
    [
      12154,
      33889
    ],
    [
      -25,
      -2
    ],
    [
      -38,
      23
    ],
    [
      5,
      29
    ],
    [
      54,
      34
    ],
    [
      54,
      -5
    ],
    [
      4,
      -19
    ],
    [
      -3,
      -22
    ],
    [
      -4,
      -12
    ],
    [
      -17,
      -13
    ],
    [
      -30,
      -13
    ]
  ],
  [
    [
      11914,
      33817
    ],
    [
      -35,
      -21
    ],
    [
      -12,
      7
    ],
    [
      -1,
      18
    ],
    [
      8,
      28
    ],
    [
      16,
      28
    ],
    [
      54,
      54
    ],
    [
      53,
      35
    ],
    [
      28,
      -2
    ],
    [
      9,
      -23
    ],
    [
      -33,
      -46
    ],
    [
      -87,
      -78
    ]
  ],
  [
    [
      23350,
      33523
    ],
    [
      -10,
      -150
    ],
    [
      -20,
      8
    ],
    [
      -19,
      1
    ],
    [
      -39,
      -22
    ],
    [
      -42,
      10
    ],
    [
      -19,
      16
    ],
    [
      -7,
      20
    ],
    [
      7,
      44
    ],
    [
      -22,
      25
    ],
    [
      -77,
      9
    ],
    [
      -29,
      11
    ],
    [
      -16,
      46
    ],
    [
      -4,
      62
    ],
    [
      12,
      23
    ],
    [
      39,
      16
    ],
    [
      30,
      75
    ],
    [
      17,
      10
    ],
    [
      64,
      147
    ],
    [
      32,
      -10
    ],
    [
      56,
      -90
    ],
    [
      70,
      -130
    ],
    [
      -23,
      -121
    ]
  ],
  [
    [
      23012,
      33647
    ],
    [
      -26,
      -3
    ],
    [
      -30,
      14
    ],
    [
      -73,
      74
    ],
    [
      -2,
      21
    ],
    [
      11,
      25
    ],
    [
      41,
      45
    ],
    [
      17,
      11
    ],
    [
      99,
      -5
    ],
    [
      32,
      -12
    ],
    [
      7,
      -21
    ],
    [
      -1,
      -22
    ],
    [
      -11,
      -21
    ],
    [
      -2,
      -23
    ],
    [
      6,
      -23
    ],
    [
      -12,
      -24
    ],
    [
      -56,
      -36
    ]
  ],
  [
    [
      22614,
      33730
    ],
    [
      96,
      -19
    ],
    [
      88,
      2
    ],
    [
      30,
      -38
    ],
    [
      20,
      -39
    ],
    [
      11,
      -37
    ],
    [
      3,
      -34
    ],
    [
      -2,
      -25
    ],
    [
      -11,
      -26
    ],
    [
      3,
      -9
    ],
    [
      171,
      -85
    ],
    [
      81,
      -91
    ],
    [
      33,
      -47
    ],
    [
      18,
      -40
    ],
    [
      34,
      -100
    ],
    [
      72,
      -117
    ],
    [
      37,
      -35
    ],
    [
      22,
      -35
    ],
    [
      -12,
      -1
    ],
    [
      -51,
      26
    ],
    [
      -109,
      78
    ],
    [
      -9,
      -4
    ],
    [
      -10,
      -42
    ],
    [
      -17,
      -37
    ],
    [
      -25,
      -26
    ],
    [
      20,
      -8
    ],
    [
      89,
      16
    ],
    [
      73,
      -76
    ],
    [
      29,
      -13
    ],
    [
      28,
      -55
    ],
    [
      1,
      -21
    ],
    [
      -16,
      -40
    ],
    [
      -13,
      -17
    ],
    [
      5,
      -11
    ],
    [
      20,
      -6
    ],
    [
      82,
      12
    ],
    [
      14,
      -20
    ],
    [
      -12,
      -158
    ],
    [
      12,
      -58
    ],
    [
      -1,
      -26
    ],
    [
      -9,
      -35
    ],
    [
      0,
      -30
    ],
    [
      7,
      -30
    ],
    [
      1,
      -28
    ],
    [
      -21,
      -70
    ],
    [
      -22,
      -12
    ],
    [
      -35,
      -1
    ],
    [
      -28,
      20
    ],
    [
      -39,
      61
    ],
    [
      -38,
      95
    ],
    [
      -14,
      13
    ],
    [
      -50,
      15
    ],
    [
      -9,
      11
    ],
    [
      -32,
      2
    ],
    [
      -23,
      39
    ],
    [
      3,
      51
    ],
    [
      -19,
      52
    ],
    [
      2,
      23
    ],
    [
      -22,
      10
    ],
    [
      -18,
      -15
    ],
    [
      9,
      -51
    ],
    [
      -11,
      -39
    ],
    [
      -39,
      16
    ],
    [
      -66,
      127
    ],
    [
      -75,
      101
    ],
    [
      -30,
      24
    ],
    [
      8,
      30
    ],
    [
      37,
      15
    ],
    [
      30,
      -1
    ],
    [
      6,
      18
    ],
    [
      -62,
      97
    ],
    [
      2,
      28
    ],
    [
      23,
      50
    ],
    [
      -29,
      20
    ],
    [
      -78,
      -15
    ],
    [
      -28,
      10
    ],
    [
      -22,
      40
    ],
    [
      -13,
      34
    ],
    [
      -68,
      7
    ],
    [
      -26,
      -5
    ],
    [
      -44,
      52
    ],
    [
      -20,
      33
    ],
    [
      8,
      17
    ],
    [
      41,
      29
    ],
    [
      23,
      -4
    ],
    [
      46,
      -31
    ],
    [
      18,
      1
    ],
    [
      45,
      42
    ],
    [
      7,
      38
    ],
    [
      34,
      31
    ],
    [
      -5,
      32
    ],
    [
      -19,
      56
    ],
    [
      -42,
      15
    ],
    [
      -84,
      -33
    ],
    [
      -74,
      -51
    ],
    [
      -30,
      20
    ],
    [
      -6,
      32
    ],
    [
      79,
      85
    ],
    [
      35,
      46
    ],
    [
      -7,
      28
    ],
    [
      -26,
      36
    ],
    [
      -2,
      90
    ],
    [
      17,
      21
    ]
  ],
  [
    [
      23925,
      32963
    ],
    [
      -18,
      -99
    ],
    [
      -35,
      -102
    ],
    [
      -53,
      -54
    ],
    [
      -38,
      12
    ],
    [
      -27,
      44
    ],
    [
      -26,
      -3
    ],
    [
      -27,
      10
    ],
    [
      -16,
      36
    ],
    [
      15,
      47
    ],
    [
      -13,
      36
    ],
    [
      -13,
      -31
    ],
    [
      -24,
      -30
    ],
    [
      -61,
      -38
    ],
    [
      -42,
      -72
    ],
    [
      -19,
      -48
    ],
    [
      -25,
      52
    ],
    [
      -16,
      122
    ],
    [
      -2,
      52
    ],
    [
      44,
      79
    ],
    [
      57,
      74
    ],
    [
      11,
      222
    ],
    [
      181,
      112
    ],
    [
      16,
      -6
    ],
    [
      59,
      -83
    ],
    [
      62,
      -117
    ],
    [
      16,
      -52
    ],
    [
      1,
      -92
    ],
    [
      -7,
      -71
    ]
  ],
  [
    [
      11466,
      33263
    ],
    [
      -20,
      -29
    ],
    [
      -38,
      2
    ],
    [
      -22,
      9
    ],
    [
      -7,
      25
    ],
    [
      59,
      76
    ],
    [
      14,
      10
    ],
    [
      10,
      -3
    ],
    [
      5,
      -31
    ],
    [
      -1,
      -59
    ]
  ],
  [
    [
      22746,
      33012
    ],
    [
      11,
      -25
    ],
    [
      1,
      -16
    ],
    [
      -74,
      -60
    ],
    [
      -1,
      -13
    ],
    [
      -17,
      -37
    ],
    [
      -16,
      -13
    ],
    [
      -27,
      -40
    ],
    [
      -52,
      -43
    ],
    [
      8,
      130
    ],
    [
      -52,
      75
    ],
    [
      52,
      38
    ],
    [
      34,
      -11
    ],
    [
      57,
      -4
    ],
    [
      55,
      33
    ],
    [
      21,
      -14
    ]
  ],
  [
    [
      8872,
      32806
    ],
    [
      8,
      -1
    ],
    [
      16,
      7
    ],
    [
      33,
      51
    ],
    [
      10,
      2
    ],
    [
      0,
      -16
    ],
    [
      -15,
      -50
    ],
    [
      26,
      -67
    ],
    [
      25,
      -32
    ],
    [
      -3,
      -12
    ],
    [
      -61,
      -23
    ],
    [
      -47,
      17
    ],
    [
      -25,
      -6
    ],
    [
      -23,
      -23
    ],
    [
      -15,
      26
    ],
    [
      -11,
      124
    ],
    [
      4,
      21
    ],
    [
      25,
      43
    ],
    [
      34,
      20
    ],
    [
      14,
      -6
    ],
    [
      12,
      -17
    ],
    [
      3,
      -18
    ],
    [
      -10,
      -40
    ]
  ],
  [
    [
      9053,
      32826
    ],
    [
      -8,
      -71
    ],
    [
      -69,
      45
    ],
    [
      -19,
      23
    ],
    [
      13,
      17
    ],
    [
      66,
      4
    ],
    [
      17,
      -18
    ]
  ],
  [
    [
      22970,
      32426
    ],
    [
      13,
      -12
    ],
    [
      12,
      9
    ],
    [
      21,
      32
    ],
    [
      36,
      -7
    ],
    [
      26,
      -10
    ],
    [
      16,
      -14
    ],
    [
      -8,
      -46
    ],
    [
      -7,
      -77
    ],
    [
      -15,
      -27
    ],
    [
      -14,
      -38
    ],
    [
      -52,
      23
    ],
    [
      -42,
      48
    ],
    [
      -60,
      84
    ],
    [
      -34,
      60
    ],
    [
      -2,
      25
    ],
    [
      -22,
      18
    ],
    [
      -41,
      104
    ],
    [
      -24,
      82
    ],
    [
      -37,
      9
    ],
    [
      -47,
      23
    ],
    [
      -18,
      44
    ],
    [
      12,
      40
    ],
    [
      67,
      19
    ],
    [
      101,
      -101
    ],
    [
      16,
      -42
    ],
    [
      36,
      -51
    ],
    [
      7,
      -70
    ],
    [
      18,
      -27
    ],
    [
      42,
      -98
    ]
  ],
  [
    [
      9284,
      32638
    ],
    [
      -31,
      -20
    ],
    [
      -10,
      -25
    ],
    [
      -23,
      -11
    ],
    [
      -20,
      -20
    ],
    [
      -67,
      -93
    ],
    [
      -29,
      -17
    ],
    [
      32,
      79
    ],
    [
      6,
      25
    ],
    [
      0,
      17
    ],
    [
      -10,
      60
    ],
    [
      20,
      -3
    ],
    [
      16,
      12
    ],
    [
      32,
      53
    ],
    [
      29,
      5
    ],
    [
      31,
      63
    ],
    [
      16,
      5
    ],
    [
      9,
      -9
    ],
    [
      -14,
      -38
    ],
    [
      30,
      -35
    ],
    [
      -8,
      -34
    ],
    [
      -9,
      -14
    ]
  ],
  [
    [
      23742,
      32594
    ],
    [
      52,
      -118
    ],
    [
      2,
      -41
    ],
    [
      -49,
      -15
    ],
    [
      -39,
      6
    ],
    [
      -20,
      14
    ],
    [
      -5,
      19
    ],
    [
      12,
      59
    ],
    [
      -25,
      35
    ],
    [
      -30,
      12
    ],
    [
      -26,
      -20
    ],
    [
      -2,
      58
    ],
    [
      20,
      43
    ],
    [
      -11,
      57
    ],
    [
      0,
      43
    ],
    [
      6,
      14
    ],
    [
      27,
      -1
    ],
    [
      55,
      -45
    ],
    [
      33,
      -120
    ]
  ],
  [
    [
      9465,
      32659
    ],
    [
      -3,
      -72
    ],
    [
      -7,
      -12
    ],
    [
      -13,
      20
    ],
    [
      -29,
      -22
    ],
    [
      -16,
      16
    ],
    [
      7,
      25
    ],
    [
      -2,
      19
    ],
    [
      21,
      2
    ],
    [
      5,
      36
    ],
    [
      -4,
      15
    ],
    [
      11,
      32
    ],
    [
      15,
      7
    ],
    [
      15,
      -66
    ]
  ],
  [
    [
      9543,
      32497
    ],
    [
      -17,
      -5
    ],
    [
      -13,
      10
    ],
    [
      -19,
      51
    ],
    [
      -2,
      22
    ],
    [
      36,
      -17
    ],
    [
      14,
      -37
    ],
    [
      1,
      -24
    ]
  ],
  [
    [
      7458,
      32504
    ],
    [
      49,
      -149
    ],
    [
      22,
      -29
    ],
    [
      31,
      -16
    ],
    [
      44,
      -16
    ],
    [
      27,
      -22
    ],
    [
      23,
      -34
    ],
    [
      3,
      -15
    ],
    [
      -139,
      60
    ],
    [
      -88,
      -88
    ],
    [
      -26,
      -11
    ],
    [
      -249,
      -4
    ],
    [
      -49,
      -17
    ],
    [
      -32,
      -28
    ],
    [
      -57,
      -81
    ],
    [
      -29,
      -31
    ],
    [
      -30,
      -18
    ],
    [
      -65,
      -21
    ],
    [
      -77,
      3
    ],
    [
      -41,
      10
    ],
    [
      -21,
      38
    ],
    [
      -20,
      76
    ],
    [
      1,
      21
    ],
    [
      8,
      36
    ],
    [
      69,
      49
    ],
    [
      23,
      27
    ],
    [
      89,
      170
    ],
    [
      26,
      23
    ],
    [
      28,
      6
    ],
    [
      76,
      -12
    ],
    [
      65,
      50
    ],
    [
      140,
      76
    ],
    [
      31,
      9
    ],
    [
      101,
      1
    ],
    [
      28,
      -11
    ],
    [
      21,
      -22
    ],
    [
      18,
      -30
    ]
  ],
  [
    [
      8055,
      32383
    ],
    [
      -12,
      -4
    ],
    [
      -35,
      28
    ],
    [
      -13,
      21
    ],
    [
      -9,
      32
    ],
    [
      71,
      46
    ],
    [
      15,
      1
    ],
    [
      13,
      -26
    ],
    [
      2,
      -21
    ],
    [
      -19,
      -58
    ],
    [
      -13,
      -19
    ]
  ],
  [
    [
      7925,
      31981
    ],
    [
      -44,
      -19
    ],
    [
      -47,
      20
    ],
    [
      -39,
      38
    ],
    [
      -5,
      45
    ],
    [
      89,
      -29
    ],
    [
      19,
      -14
    ],
    [
      27,
      -41
    ]
  ],
  [
    [
      6401,
      31742
    ],
    [
      -22,
      -6
    ],
    [
      -5,
      9
    ],
    [
      -3,
      40
    ],
    [
      -17,
      63
    ],
    [
      33,
      23
    ],
    [
      20,
      5
    ],
    [
      8,
      -10
    ],
    [
      24,
      -47
    ],
    [
      23,
      -12
    ],
    [
      17,
      -10
    ],
    [
      -30,
      -15
    ],
    [
      -48,
      -40
    ]
  ],
  [
    [
      6259,
      31683
    ],
    [
      -19,
      -16
    ],
    [
      -15,
      -4
    ],
    [
      -12,
      9
    ],
    [
      -52,
      -10
    ],
    [
      -11,
      6
    ],
    [
      -23,
      54
    ],
    [
      -2,
      28
    ],
    [
      10,
      22
    ],
    [
      23,
      20
    ],
    [
      38,
      18
    ],
    [
      37,
      -4
    ],
    [
      65,
      -50
    ],
    [
      31,
      -29
    ],
    [
      6,
      -18
    ],
    [
      -23,
      -17
    ],
    [
      -53,
      -9
    ]
  ],
  [
    [
      5867,
      31530
    ],
    [
      22,
      -43
    ],
    [
      38,
      27
    ],
    [
      28,
      37
    ],
    [
      21,
      48
    ],
    [
      14,
      19
    ],
    [
      19,
      -25
    ],
    [
      53,
      -35
    ],
    [
      -45,
      -53
    ],
    [
      -86,
      -80
    ],
    [
      -28,
      -53
    ],
    [
      -2,
      -23
    ],
    [
      83,
      18
    ],
    [
      23,
      -3
    ],
    [
      15,
      -18
    ],
    [
      -23,
      -22
    ],
    [
      -45,
      -19
    ],
    [
      -39,
      -38
    ],
    [
      -92,
      -66
    ],
    [
      -34,
      -55
    ],
    [
      -41,
      -21
    ],
    [
      -56,
      -5
    ],
    [
      -97,
      -35
    ],
    [
      -60,
      -34
    ],
    [
      -15,
      -18
    ],
    [
      -19,
      -9
    ],
    [
      -22,
      1
    ],
    [
      -24,
      -14
    ],
    [
      -26,
      -31
    ],
    [
      -21,
      -14
    ],
    [
      -36,
      -3
    ],
    [
      -18,
      -12
    ],
    [
      -21,
      0
    ],
    [
      -56,
      37
    ],
    [
      -14,
      21
    ],
    [
      50,
      42
    ],
    [
      36,
      14
    ],
    [
      55,
      7
    ],
    [
      54,
      39
    ],
    [
      111,
      52
    ],
    [
      34,
      29
    ],
    [
      23,
      99
    ],
    [
      25,
      16
    ],
    [
      13,
      40
    ],
    [
      62,
      -1
    ],
    [
      28,
      -45
    ],
    [
      10,
      -6
    ],
    [
      5,
      5
    ],
    [
      3,
      35
    ],
    [
      31,
      25
    ],
    [
      -18,
      18
    ],
    [
      -57,
      23
    ],
    [
      -42,
      11
    ],
    [
      -27,
      -1
    ],
    [
      -23,
      13
    ],
    [
      -17,
      27
    ],
    [
      -8,
      26
    ],
    [
      2,
      27
    ],
    [
      14,
      30
    ],
    [
      26,
      33
    ],
    [
      30,
      19
    ],
    [
      66,
      13
    ],
    [
      58,
      22
    ],
    [
      31,
      3
    ],
    [
      23,
      -9
    ],
    [
      6,
      -85
    ]
  ],
  [
    [
      6073,
      31369
    ],
    [
      -7,
      -2
    ],
    [
      -13,
      22
    ],
    [
      -1,
      20
    ],
    [
      8,
      15
    ],
    [
      24,
      35
    ],
    [
      17,
      12
    ],
    [
      20,
      6
    ],
    [
      6,
      -9
    ],
    [
      -18,
      -41
    ],
    [
      -23,
      -27
    ],
    [
      -13,
      -31
    ]
  ],
  [
    [
      5184,
      31028
    ],
    [
      -155,
      -97
    ],
    [
      -51,
      -70
    ],
    [
      -38,
      -68
    ],
    [
      -31,
      -37
    ],
    [
      -22,
      -7
    ],
    [
      -24,
      -18
    ],
    [
      -51,
      -47
    ],
    [
      -22,
      -6
    ],
    [
      -164,
      -111
    ],
    [
      -12,
      -2
    ],
    [
      8,
      29
    ],
    [
      50,
      41
    ],
    [
      33,
      38
    ],
    [
      37,
      61
    ],
    [
      20,
      23
    ],
    [
      7,
      31
    ],
    [
      3,
      63
    ],
    [
      9,
      24
    ],
    [
      35,
      47
    ],
    [
      26,
      25
    ],
    [
      34,
      9
    ],
    [
      68,
      -8
    ],
    [
      29,
      24
    ],
    [
      9,
      19
    ],
    [
      -18,
      16
    ],
    [
      -4,
      29
    ],
    [
      5,
      50
    ],
    [
      20,
      44
    ],
    [
      35,
      38
    ],
    [
      48,
      30
    ],
    [
      61,
      21
    ],
    [
      44,
      1
    ],
    [
      80,
      -45
    ],
    [
      12,
      -21
    ],
    [
      -20,
      -45
    ],
    [
      -11,
      -43
    ],
    [
      -50,
      -38
    ]
  ],
  [
    [
      4308,
      30579
    ],
    [
      -8,
      -36
    ],
    [
      -7,
      -14
    ],
    [
      -79,
      20
    ],
    [
      -52,
      -7
    ],
    [
      -6,
      21
    ],
    [
      5,
      19
    ],
    [
      82,
      29
    ],
    [
      33,
      1
    ],
    [
      23,
      -16
    ],
    [
      9,
      -17
    ]
  ],
  [
    [
      3781,
      30339
    ],
    [
      -33,
      -29
    ],
    [
      -9,
      11
    ],
    [
      -6,
      35
    ],
    [
      18,
      28
    ],
    [
      56,
      60
    ],
    [
      37,
      -12
    ],
    [
      12,
      -15
    ],
    [
      -1,
      -23
    ],
    [
      -14,
      -30
    ],
    [
      -18,
      -15
    ],
    [
      -22,
      0
    ],
    [
      -20,
      -10
    ]
  ],
  [
    [
      1782,
      29846
    ],
    [
      -272,
      -37
    ],
    [
      -41,
      25
    ],
    [
      41,
      15
    ],
    [
      49,
      8
    ],
    [
      102,
      42
    ],
    [
      126,
      37
    ],
    [
      98,
      44
    ],
    [
      85,
      29
    ],
    [
      24,
      48
    ],
    [
      -75,
      24
    ],
    [
      -14,
      19
    ],
    [
      35,
      23
    ],
    [
      30,
      32
    ],
    [
      70,
      38
    ],
    [
      62,
      -47
    ],
    [
      14,
      -32
    ],
    [
      -6,
      -38
    ],
    [
      -12,
      -40
    ],
    [
      -55,
      -20
    ],
    [
      -8,
      -21
    ],
    [
      29,
      -59
    ],
    [
      -113,
      -52
    ],
    [
      -169,
      -38
    ]
  ],
  [
    [
      2903,
      30060
    ],
    [
      -37,
      -14
    ],
    [
      -41,
      14
    ],
    [
      19,
      48
    ],
    [
      19,
      25
    ],
    [
      37,
      31
    ],
    [
      45,
      -13
    ],
    [
      35,
      -39
    ],
    [
      -77,
      -52
    ]
  ],
  [
    [
      2352,
      29937
    ],
    [
      99,
      -37
    ],
    [
      124,
      5
    ],
    [
      45,
      -9
    ],
    [
      1,
      -10
    ],
    [
      -80,
      -15
    ],
    [
      -27,
      4
    ],
    [
      -69,
      -20
    ],
    [
      -46,
      -3
    ],
    [
      -108,
      19
    ],
    [
      -82,
      -13
    ],
    [
      -22,
      5
    ],
    [
      -26,
      16
    ],
    [
      -30,
      29
    ],
    [
      -2,
      17
    ],
    [
      27,
      8
    ],
    [
      74,
      -25
    ],
    [
      7,
      13
    ],
    [
      62,
      23
    ],
    [
      53,
      -7
    ]
  ],
  [
    [
      1101,
      29816
    ],
    [
      -12,
      -26
    ],
    [
      -49,
      28
    ],
    [
      -18,
      23
    ],
    [
      -4,
      24
    ],
    [
      15,
      39
    ],
    [
      40,
      0
    ],
    [
      23,
      -16
    ],
    [
      22,
      -29
    ],
    [
      7,
      -19
    ],
    [
      -24,
      -24
    ]
  ],
  [
    [
      811,
      29694
    ],
    [
      3,
      -30
    ],
    [
      58,
      3
    ],
    [
      18,
      -15
    ],
    [
      0,
      -60
    ],
    [
      -7,
      -16
    ],
    [
      -9,
      -4
    ],
    [
      -21,
      13
    ],
    [
      -24,
      -31
    ],
    [
      -108,
      -74
    ],
    [
      -33,
      42
    ],
    [
      -63,
      -66
    ],
    [
      44,
      169
    ],
    [
      51,
      26
    ],
    [
      19,
      19
    ],
    [
      -5,
      49
    ],
    [
      24,
      83
    ],
    [
      52,
      -4
    ],
    [
      23,
      -34
    ],
    [
      -1,
      -22
    ],
    [
      -21,
      -48
    ]
  ],
  [
    [
      530,
      29558
    ],
    [
      -14,
      -11
    ],
    [
      -27,
      -9
    ],
    [
      -77,
      10
    ],
    [
      -47,
      -3
    ],
    [
      -52,
      -7
    ],
    [
      -40,
      -16
    ],
    [
      -7,
      22
    ],
    [
      1,
      18
    ],
    [
      169,
      50
    ],
    [
      39,
      26
    ],
    [
      24,
      33
    ],
    [
      22,
      61
    ],
    [
      18,
      19
    ],
    [
      11,
      -1
    ],
    [
      23,
      -24
    ],
    [
      -8,
      -32
    ],
    [
      -21,
      -28
    ],
    [
      -7,
      -26
    ],
    [
      -7,
      -82
    ]
  ],
  [
    [
      160,
      29498
    ],
    [
      -11,
      -30
    ],
    [
      -13,
      1
    ],
    [
      -67,
      50
    ],
    [
      -10,
      16
    ],
    [
      40,
      24
    ],
    [
      11,
      18
    ],
    [
      -5,
      24
    ],
    [
      -29,
      34
    ],
    [
      -55,
      42
    ],
    [
      -21,
      31
    ],
    [
      13,
      19
    ],
    [
      26,
      11
    ],
    [
      83,
      3
    ],
    [
      45,
      -53
    ],
    [
      33,
      -18
    ],
    [
      79,
      -13
    ],
    [
      -41,
      -22
    ],
    [
      -23,
      -21
    ],
    [
      -29,
      -83
    ],
    [
      -26,
      -33
    ]
  ],
  [
    [
      1107,
      29645
    ],
    [
      -42,
      -20
    ],
    [
      -57,
      40
    ],
    [
      6,
      46
    ],
    [
      62,
      -38
    ],
    [
      31,
      -28
    ]
  ],
  [
    [
      967,
      29626
    ],
    [
      -32,
      -53
    ],
    [
      -24,
      24
    ],
    [
      -9,
      73
    ],
    [
      18,
      19
    ],
    [
      50,
      -53
    ],
    [
      -3,
      -10
    ]
  ],
  [
    [
      45961,
      10301
    ],
    [
      -12,
      -9
    ],
    [
      -55,
      -93
    ],
    [
      -195,
      -31
    ],
    [
      11,
      21
    ],
    [
      41,
      5
    ],
    [
      58,
      29
    ],
    [
      -12,
      50
    ],
    [
      -22,
      54
    ],
    [
      -21,
      6
    ],
    [
      -13,
      33
    ],
    [
      1,
      101
    ],
    [
      -14,
      59
    ],
    [
      -31,
      60
    ],
    [
      -11,
      -11
    ],
    [
      -23,
      -104
    ],
    [
      -20,
      -136
    ],
    [
      -9,
      -44
    ],
    [
      -58,
      -3
    ],
    [
      -51,
      9
    ],
    [
      -25,
      -3
    ]
  ],
  [
    [
      45500,
      10294
    ],
    [
      -7,
      186
    ],
    [
      -5,
      170
    ],
    [
      -5,
      169
    ],
    [
      -6,
      169
    ],
    [
      -5,
      170
    ],
    [
      -5,
      169
    ],
    [
      -6,
      170
    ],
    [
      -5,
      169
    ],
    [
      13,
      167
    ],
    [
      12,
      166
    ],
    [
      12,
      167
    ],
    [
      13,
      167
    ],
    [
      12,
      166
    ],
    [
      12,
      167
    ],
    [
      13,
      167
    ],
    [
      12,
      167
    ],
    [
      12,
      166
    ],
    [
      13,
      167
    ],
    [
      12,
      167
    ],
    [
      13,
      166
    ],
    [
      12,
      167
    ],
    [
      12,
      167
    ],
    [
      13,
      167
    ],
    [
      12,
      166
    ],
    [
      3,
      43
    ],
    [
      1,
      14
    ],
    [
      2,
      22
    ],
    [
      -45,
      59
    ]
  ],
  [
    [
      45615,
      14471
    ],
    [
      -9,
      12
    ],
    [
      -6,
      11
    ],
    [
      6,
      1
    ],
    [
      81,
      -2
    ],
    [
      82,
      -1
    ],
    [
      81,
      -1
    ],
    [
      81,
      -2
    ],
    [
      81,
      -1
    ],
    [
      82,
      -1
    ],
    [
      81,
      -2
    ],
    [
      81,
      -1
    ],
    [
      82,
      -2
    ],
    [
      81,
      -1
    ],
    [
      81,
      -1
    ],
    [
      81,
      -2
    ],
    [
      82,
      -1
    ],
    [
      81,
      -1
    ],
    [
      81,
      -2
    ],
    [
      82,
      -1
    ]
  ],
  [
    [
      46907,
      14473
    ],
    [
      13,
      -115
    ],
    [
      13,
      -116
    ],
    [
      14,
      -115
    ],
    [
      13,
      -115
    ],
    [
      14,
      -116
    ],
    [
      13,
      -115
    ],
    [
      13,
      -115
    ],
    [
      14,
      -116
    ],
    [
      13,
      -115
    ],
    [
      13,
      -115
    ],
    [
      14,
      -116
    ],
    [
      13,
      -115
    ],
    [
      14,
      -115
    ],
    [
      13,
      -116
    ],
    [
      13,
      -115
    ],
    [
      14,
      -115
    ],
    [
      12,
      -53
    ],
    [
      10,
      -84
    ],
    [
      72,
      -251
    ],
    [
      21,
      -106
    ],
    [
      -6,
      -44
    ],
    [
      9,
      -37
    ],
    [
      23,
      -30
    ],
    [
      -4,
      -36
    ],
    [
      -32,
      -40
    ],
    [
      -21,
      -49
    ],
    [
      -15,
      -87
    ],
    [
      0,
      -1
    ],
    [
      -30,
      -153
    ],
    [
      -1,
      -94
    ],
    [
      30,
      -127
    ],
    [
      0,
      -1
    ],
    [
      6,
      -56
    ],
    [
      -19,
      -250
    ],
    [
      12,
      -161
    ],
    [
      31,
      -104
    ]
  ],
  [
    [
      47219,
      10864
    ],
    [
      -164,
      -1
    ],
    [
      -163,
      0
    ],
    [
      -164,
      0
    ],
    [
      -164,
      0
    ],
    [
      -164,
      0
    ],
    [
      -164,
      0
    ],
    [
      -164,
      0
    ],
    [
      -164,
      0
    ],
    [
      -7,
      -65
    ],
    [
      4,
      -62
    ],
    [
      17,
      -58
    ],
    [
      74,
      -112
    ],
    [
      6,
      -27
    ],
    [
      -13,
      -87
    ],
    [
      3,
      -61
    ],
    [
      -8,
      -32
    ],
    [
      -18,
      -28
    ],
    [
      -5,
      -30
    ]
  ],
  [
    [
      45666,
      10187
    ],
    [
      -44,
      -19
    ],
    [
      -66,
      2
    ],
    [
      -14,
      7
    ],
    [
      27,
      13
    ],
    [
      78,
      17
    ],
    [
      19,
      -20
    ]
  ],
  [
    [
      44839,
      15376
    ],
    [
      -3,
      -17
    ],
    [
      11,
      -35
    ],
    [
      0,
      -21
    ],
    [
      -8,
      -12
    ],
    [
      -17,
      -8
    ],
    [
      -13,
      -9
    ],
    [
      -3,
      -15
    ],
    [
      0,
      -7
    ],
    [
      1,
      -17
    ],
    [
      2,
      -16
    ],
    [
      -8,
      -20
    ],
    [
      -58,
      -50
    ],
    [
      -25,
      -64
    ],
    [
      8,
      -79
    ],
    [
      -20,
      -80
    ],
    [
      -50,
      -80
    ],
    [
      -22,
      -90
    ],
    [
      8,
      -100
    ],
    [
      -25,
      -81
    ],
    [
      -58,
      -61
    ],
    [
      -19,
      -38
    ],
    [
      0,
      -3
    ]
  ],
  [
    [
      44540,
      14473
    ],
    [
      0,
      -28
    ],
    [
      6,
      -22
    ],
    [
      -19,
      -42
    ],
    [
      -49,
      -43
    ],
    [
      -26,
      -42
    ],
    [
      -3,
      -40
    ],
    [
      -12,
      -20
    ],
    [
      -21,
      -9
    ],
    [
      -13,
      -61
    ],
    [
      -10,
      -142
    ],
    [
      -26,
      -81
    ],
    [
      -42,
      -20
    ],
    [
      -22,
      -32
    ],
    [
      -3,
      -43
    ],
    [
      -25,
      -51
    ],
    [
      -47,
      -57
    ],
    [
      -15,
      -54
    ],
    [
      16,
      -52
    ],
    [
      -3,
      -20
    ],
    [
      -15,
      -18
    ],
    [
      -50,
      -24
    ],
    [
      -9,
      -12
    ],
    [
      -5,
      -14
    ],
    [
      10,
      -26
    ],
    [
      6,
      -39
    ],
    [
      -7,
      -67
    ],
    [
      -13,
      -28
    ],
    [
      -11,
      -26
    ],
    [
      -43,
      -47
    ],
    [
      -12,
      -36
    ],
    [
      19,
      -26
    ],
    [
      -1,
      -27
    ],
    [
      -21,
      -30
    ],
    [
      6,
      -33
    ],
    [
      5,
      -22
    ],
    [
      19,
      -20
    ],
    [
      7,
      -56
    ],
    [
      -14,
      -71
    ],
    [
      3,
      -59
    ],
    [
      23,
      -48
    ],
    [
      5,
      -21
    ],
    [
      -23,
      -160
    ],
    [
      1,
      -22
    ]
  ],
  [
    [
      44106,
      12682
    ],
    [
      -99,
      -1
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ],
    [
      -91,
      -1
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ],
    [
      -91,
      -1
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ],
    [
      -92,
      0
    ],
    [
      -91,
      0
    ],
    [
      -91,
      -1
    ],
    [
      -91,
      0
    ],
    [
      -91,
      0
    ]
  ],
  [
    [
      42641,
      12678
    ],
    [
      0,
      122
    ],
    [
      -1,
      123
    ],
    [
      -1,
      122
    ],
    [
      -1,
      123
    ],
    [
      -26,
      20
    ],
    [
      -47,
      11
    ],
    [
      -24,
      -7
    ],
    [
      -28,
      5
    ],
    [
      -19,
      -20
    ],
    [
      -13,
      -4
    ],
    [
      -10,
      5
    ],
    [
      -6,
      18
    ],
    [
      -22,
      12
    ],
    [
      -26,
      44
    ]
  ],
  [
    [
      42417,
      13252
    ],
    [
      1,
      98
    ],
    [
      2,
      99
    ],
    [
      1,
      98
    ],
    [
      2,
      98
    ],
    [
      1,
      98
    ],
    [
      1,
      98
    ],
    [
      2,
      98
    ],
    [
      1,
      98
    ],
    [
      2,
      98
    ],
    [
      1,
      98
    ],
    [
      2,
      98
    ],
    [
      1,
      98
    ],
    [
      1,
      98
    ],
    [
      2,
      98
    ],
    [
      1,
      99
    ],
    [
      2,
      98
    ],
    [
      -12,
      125
    ],
    [
      -11,
      126
    ],
    [
      -11,
      125
    ],
    [
      -12,
      126
    ],
    [
      -11,
      126
    ],
    [
      -11,
      125
    ],
    [
      -12,
      126
    ],
    [
      -11,
      126
    ]
  ],
  [
    [
      42349,
      15827
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      142,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      142,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      141,
      0
    ],
    [
      22,
      -71
    ],
    [
      22,
      -46
    ],
    [
      4,
      -34
    ],
    [
      -4,
      -34
    ],
    [
      -38,
      -73
    ],
    [
      -33,
      -33
    ],
    [
      -19,
      -37
    ],
    [
      -25,
      -35
    ],
    [
      -40,
      -96
    ],
    [
      83,
      2
    ],
    [
      83,
      2
    ],
    [
      84,
      2
    ],
    [
      93,
      2
    ]
  ],
  [
    [
      35037,
      11158
    ],
    [
      -115,
      0
    ],
    [
      -179,
      -1
    ],
    [
      -179,
      0
    ],
    [
      -179,
      -1
    ],
    [
      -179,
      -1
    ],
    [
      -179,
      0
    ],
    [
      -240,
      133
    ],
    [
      -241,
      134
    ],
    [
      -240,
      134
    ],
    [
      -240,
      133
    ],
    [
      -241,
      134
    ],
    [
      -240,
      133
    ],
    [
      -240,
      134
    ],
    [
      -241,
      133
    ],
    [
      25,
      51
    ],
    [
      32,
      136
    ]
  ],
  [
    [
      32161,
      12410
    ],
    [
      2,
      9
    ],
    [
      0,
      0
    ],
    [
      70,
      9
    ],
    [
      33,
      34
    ],
    [
      20,
      63
    ],
    [
      4,
      63
    ],
    [
      -11,
      64
    ],
    [
      -30,
      48
    ],
    [
      -49,
      32
    ],
    [
      -29,
      88
    ],
    [
      -8,
      146
    ],
    [
      9,
      78
    ],
    [
      26,
      12
    ],
    [
      25,
      35
    ],
    [
      23,
      60
    ],
    [
      18,
      65
    ],
    [
      11,
      70
    ],
    [
      2,
      89
    ],
    [
      -7,
      108
    ],
    [
      46,
      133
    ],
    [
      45,
      82
    ],
    [
      84,
      100
    ],
    [
      19,
      30
    ],
    [
      1,
      25
    ],
    [
      0,
      3
    ],
    [
      -17,
      34
    ],
    [
      -76,
      70
    ],
    [
      -32,
      50
    ],
    [
      -3,
      47
    ],
    [
      -1,
      1
    ],
    [
      -10,
      44
    ],
    [
      -80,
      185
    ],
    [
      -28,
      102
    ],
    [
      1,
      75
    ]
  ],
  [
    [
      32219,
      14464
    ],
    [
      0,
      6
    ],
    [
      10,
      320
    ],
    [
      -30,
      112
    ],
    [
      -6,
      62
    ],
    [
      8,
      77
    ],
    [
      -2,
      48
    ],
    [
      -14,
      42
    ],
    [
      -3,
      75
    ],
    [
      -2,
      94
    ],
    [
      -23,
      60
    ],
    [
      -5,
      27
    ],
    [
      13,
      64
    ],
    [
      24,
      33
    ],
    [
      39,
      24
    ],
    [
      44,
      8
    ],
    [
      50,
      -8
    ],
    [
      38,
      -28
    ],
    [
      25,
      -51
    ],
    [
      25,
      -26
    ],
    [
      25,
      -1
    ],
    [
      33,
      42
    ],
    [
      29,
      89
    ],
    [
      9,
      6
    ],
    [
      1,
      388
    ],
    [
      1,
      354
    ]
  ],
  [
    [
      32508,
      16281
    ],
    [
      158,
      0
    ],
    [
      158,
      -1
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      159,
      -1
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      159,
      -1
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ],
    [
      158,
      0
    ]
  ],
  [
    [
      35038,
      16278
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -319
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      0,
      -320
    ],
    [
      -1,
      -321
    ]
  ],
  [
    [
      32161,
      12410
    ],
    [
      -58,
      -9
    ],
    [
      -145,
      -20
    ],
    [
      -145,
      -19
    ],
    [
      -145,
      -19
    ],
    [
      -145,
      -20
    ],
    [
      -145,
      -19
    ],
    [
      -145,
      -19
    ],
    [
      -145,
      -20
    ],
    [
      -145,
      -19
    ],
    [
      -1,
      6
    ],
    [
      -4,
      99
    ],
    [
      -23,
      34
    ],
    [
      -30,
      -21
    ],
    [
      -14,
      128
    ],
    [
      7,
      61
    ],
    [
      -3,
      59
    ],
    [
      -29,
      145
    ],
    [
      -75,
      177
    ],
    [
      -163,
      219
    ],
    [
      -83,
      73
    ],
    [
      -65,
      93
    ],
    [
      -41,
      26
    ],
    [
      -52,
      7
    ],
    [
      -15,
      -42
    ],
    [
      -59,
      29
    ],
    [
      9,
      103
    ],
    [
      -57,
      143
    ],
    [
      -47,
      16
    ],
    [
      -118,
      -9
    ],
    [
      -158,
      79
    ],
    [
      -47,
      47
    ],
    [
      -16,
      84
    ],
    [
      -74,
      73
    ],
    [
      -98,
      72
    ],
    [
      -54,
      -17
    ],
    [
      -71,
      11
    ],
    [
      -101,
      52
    ],
    [
      -59,
      7
    ],
    [
      -115,
      -16
    ],
    [
      -43,
      11
    ],
    [
      -40,
      65
    ],
    [
      -43,
      33
    ],
    [
      9,
      80
    ],
    [
      -5,
      73
    ],
    [
      6,
      56
    ],
    [
      -19,
      124
    ],
    [
      15,
      115
    ],
    [
      -13,
      42
    ],
    [
      -24,
      31
    ],
    [
      -77,
      47
    ],
    [
      -14,
      59
    ],
    [
      13,
      82
    ],
    [
      -20,
      54
    ],
    [
      -63,
      50
    ],
    [
      -58,
      114
    ],
    [
      -74,
      62
    ],
    [
      -30,
      105
    ],
    [
      -46,
      65
    ],
    [
      -16,
      57
    ],
    [
      -101,
      205
    ],
    [
      -108,
      159
    ],
    [
      -16,
      92
    ],
    [
      -4,
      126
    ],
    [
      42,
      77
    ],
    [
      23,
      67
    ],
    [
      -3,
      62
    ],
    [
      -6,
      46
    ],
    [
      -37,
      79
    ],
    [
      -144,
      47
    ],
    [
      -117,
      195
    ],
    [
      -7,
      150
    ],
    [
      -46,
      153
    ],
    [
      0,
      99
    ],
    [
      -7,
      108
    ],
    [
      35,
      23
    ],
    [
      31,
      -8
    ],
    [
      -3,
      -43
    ],
    [
      10,
      -77
    ],
    [
      37,
      -58
    ],
    [
      34,
      -25
    ],
    [
      32,
      -56
    ],
    [
      24,
      -17
    ],
    [
      25,
      -4
    ],
    [
      -14,
      36
    ],
    [
      -14,
      23
    ],
    [
      -17,
      74
    ],
    [
      -32,
      96
    ],
    [
      -38,
      52
    ],
    [
      -19,
      96
    ],
    [
      -16,
      22
    ],
    [
      -10,
      36
    ],
    [
      36,
      42
    ],
    [
      49,
      30
    ],
    [
      66,
      8
    ],
    [
      188,
      -14
    ],
    [
      40,
      25
    ],
    [
      33,
      -8
    ],
    [
      24,
      3
    ],
    [
      -51,
      25
    ],
    [
      -29,
      -8
    ],
    [
      -33,
      5
    ],
    [
      -67,
      -5
    ],
    [
      -27,
      11
    ],
    [
      -30,
      30
    ],
    [
      -20,
      3
    ],
    [
      -62,
      -52
    ],
    [
      -27,
      6
    ],
    [
      -65,
      57
    ],
    [
      -29,
      8
    ],
    [
      -46,
      -32
    ],
    [
      -5,
      -140
    ],
    [
      14,
      -104
    ],
    [
      -28,
      -11
    ],
    [
      -32,
      43
    ],
    [
      -49,
      25
    ],
    [
      -40,
      39
    ],
    [
      -57,
      73
    ],
    [
      -30,
      27
    ],
    [
      -34,
      -61
    ],
    [
      -1,
      28
    ],
    [
      17,
      70
    ],
    [
      -5,
      118
    ],
    [
      51,
      -94
    ],
    [
      -16,
      66
    ],
    [
      -40,
      73
    ],
    [
      -30,
      25
    ],
    [
      -38,
      130
    ],
    [
      -85,
      78
    ],
    [
      -69,
      126
    ],
    [
      -140,
      209
    ],
    [
      -9,
      184
    ],
    [
      -51,
      232
    ],
    [
      22,
      133
    ],
    [
      -3,
      93
    ],
    [
      -25,
      142
    ],
    [
      -27,
      77
    ],
    [
      -113,
      211
    ],
    [
      -109,
      142
    ],
    [
      -17,
      107
    ],
    [
      -7,
      109
    ],
    [
      23,
      96
    ],
    [
      21,
      102
    ],
    [
      15,
      27
    ],
    [
      6,
      -12
    ],
    [
      -4,
      -21
    ],
    [
      15,
      -7
    ],
    [
      6,
      45
    ],
    [
      10,
      23
    ],
    [
      -17,
      3
    ],
    [
      2,
      14
    ],
    [
      10,
      28
    ],
    [
      33,
      134
    ],
    [
      -3,
      168
    ],
    [
      36,
      206
    ],
    [
      -2,
      68
    ],
    [
      -23,
      146
    ],
    [
      -23,
      88
    ],
    [
      -41,
      62
    ],
    [
      18,
      91
    ],
    [
      -1,
      87
    ],
    [
      -9,
      14
    ]
  ],
  [
    [
      27345,
      20790
    ],
    [
      138,
      0
    ],
    [
      134,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ],
    [
      134,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ],
    [
      134,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ],
    [
      134,
      0
    ],
    [
      133,
      0
    ]
  ],
  [
    [
      29487,
      20790
    ],
    [
      0,
      -169
    ],
    [
      0,
      -170
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      1,
      -170
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -170
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -170
    ],
    [
      0,
      -169
    ],
    [
      118,
      -147
    ],
    [
      119,
      -148
    ],
    [
      119,
      -147
    ],
    [
      118,
      -148
    ],
    [
      119,
      -147
    ],
    [
      119,
      -148
    ],
    [
      119,
      -148
    ],
    [
      118,
      -147
    ],
    [
      93,
      -124
    ],
    [
      93,
      -125
    ],
    [
      93,
      -124
    ],
    [
      93,
      -125
    ],
    [
      93,
      -124
    ],
    [
      93,
      -124
    ],
    [
      92,
      -125
    ],
    [
      93,
      -124
    ],
    [
      129,
      -179
    ],
    [
      129,
      -179
    ],
    [
      128,
      -179
    ],
    [
      129,
      -178
    ],
    [
      129,
      -179
    ],
    [
      128,
      -179
    ],
    [
      129,
      -179
    ],
    [
      138,
      -191
    ]
  ],
  [
    [
      29547,
      13642
    ],
    [
      103,
      -47
    ],
    [
      56,
      22
    ],
    [
      10,
      -22
    ],
    [
      -6,
      -19
    ],
    [
      -126,
      -35
    ],
    [
      -38,
      24
    ],
    [
      -4,
      34
    ],
    [
      -13,
      32
    ],
    [
      18,
      11
    ]
  ],
  [
    [
      29332,
      13592
    ],
    [
      -26,
      -2
    ],
    [
      -42,
      9
    ],
    [
      15,
      21
    ],
    [
      22,
      16
    ],
    [
      8,
      -12
    ],
    [
      23,
      -32
    ]
  ],
  [
    [
      29466,
      13496
    ],
    [
      -36,
      -12
    ],
    [
      -27,
      12
    ],
    [
      -43,
      86
    ],
    [
      91,
      12
    ],
    [
      40,
      -38
    ],
    [
      5,
      -10
    ],
    [
      -30,
      -50
    ]
  ],
  [
    [
      30325,
      13015
    ],
    [
      25,
      -66
    ],
    [
      -36,
      8
    ],
    [
      -39,
      -4
    ],
    [
      -12,
      36
    ],
    [
      -11,
      51
    ],
    [
      -8,
      13
    ],
    [
      -26,
      4
    ],
    [
      -2,
      5
    ],
    [
      -3,
      24
    ],
    [
      7,
      12
    ],
    [
      83,
      -56
    ],
    [
      22,
      -27
    ]
  ],
  [
    [
      29773,
      12863
    ],
    [
      -23,
      -1
    ],
    [
      -31,
      8
    ],
    [
      -16,
      48
    ],
    [
      25,
      4
    ],
    [
      24,
      -7
    ],
    [
      18,
      -38
    ],
    [
      3,
      -14
    ]
  ],
  [
    [
      30324,
      12512
    ],
    [
      -30,
      -9
    ],
    [
      -33,
      19
    ],
    [
      -28,
      87
    ],
    [
      -31,
      68
    ],
    [
      17,
      20
    ],
    [
      25,
      -66
    ],
    [
      63,
      -100
    ],
    [
      17,
      -19
    ]
  ],
  [
    [
      35038,
      16278
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ],
    [
      0,
      226
    ]
  ],
  [
    [
      35038,
      19888
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      160,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      160,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ],
    [
      159,
      0
    ]
  ],
  [
    [
      37584,
      19888
    ],
    [
      127,
      0
    ],
    [
      126,
      0
    ],
    [
      127,
      0
    ],
    [
      126,
      0
    ],
    [
      126,
      0
    ],
    [
      127,
      0
    ],
    [
      126,
      0
    ],
    [
      127,
      0
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -112
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ]
  ],
  [
    [
      38596,
      18985
    ],
    [
      1,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -169
    ],
    [
      1,
      -169
    ],
    [
      0,
      -170
    ],
    [
      0,
      -169
    ],
    [
      1,
      -169
    ],
    [
      0,
      -169
    ],
    [
      0,
      -170
    ],
    [
      1,
      -169
    ],
    [
      0,
      -169
    ],
    [
      1,
      -169
    ],
    [
      0,
      -170
    ],
    [
      0,
      -169
    ],
    [
      1,
      -169
    ],
    [
      0,
      -169
    ]
  ],
  [
    [
      38602,
      16278
    ],
    [
      -125,
      0
    ],
    [
      -125,
      0
    ],
    [
      -125,
      0
    ],
    [
      -126,
      0
    ]
  ],
  [
    [
      38101,
      16278
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ],
    [
      -192,
      0
    ],
    [
      -191,
      0
    ]
  ],
  [
    [
      53911,
      20800
    ],
    [
      0,
      -48
    ],
    [
      0,
      -68
    ],
    [
      1,
      -49
    ],
    [
      0,
      -68
    ],
    [
      1,
      -78
    ],
    [
      0,
      -71
    ],
    [
      0,
      -62
    ],
    [
      -1,
      -37
    ],
    [
      -3,
      -56
    ],
    [
      -13,
      -22
    ],
    [
      -6,
      -51
    ]
  ],
  [
    [
      53890,
      20190
    ],
    [
      -45,
      5
    ],
    [
      -73,
      -14
    ],
    [
      -97,
      -31
    ],
    [
      -53,
      19
    ],
    [
      -55,
      -33
    ],
    [
      -186,
      -9
    ],
    [
      -40,
      17
    ],
    [
      -50,
      -62
    ],
    [
      -80,
      -36
    ],
    [
      -203,
      -139
    ],
    [
      -24,
      -27
    ]
  ],
  [
    [
      52984,
      19880
    ],
    [
      -26,
      56
    ],
    [
      -21,
      45
    ],
    [
      41,
      35
    ],
    [
      31,
      27
    ],
    [
      30,
      25
    ],
    [
      19,
      17
    ],
    [
      -16,
      34
    ],
    [
      -15,
      35
    ],
    [
      4,
      86
    ],
    [
      4,
      85
    ],
    [
      4,
      86
    ],
    [
      4,
      86
    ],
    [
      4,
      85
    ],
    [
      5,
      86
    ],
    [
      4,
      86
    ],
    [
      4,
      86
    ]
  ],
  [
    [
      53060,
      20840
    ],
    [
      42,
      -3
    ],
    [
      43,
      -2
    ],
    [
      43,
      -3
    ],
    [
      42,
      -2
    ],
    [
      43,
      -3
    ],
    [
      42,
      -2
    ],
    [
      43,
      -2
    ],
    [
      43,
      -3
    ],
    [
      0,
      -23
    ],
    [
      22,
      3
    ],
    [
      3,
      20
    ],
    [
      61,
      -1
    ],
    [
      60,
      -1
    ],
    [
      61,
      -2
    ],
    [
      60,
      -1
    ],
    [
      61,
      -1
    ],
    [
      60,
      -2
    ],
    [
      61,
      -1
    ],
    [
      60,
      -1
    ],
    [
      1,
      -10
    ]
  ],
  [
    [
      52271,
      17591
    ],
    [
      -55,
      -1
    ],
    [
      -112,
      0
    ],
    [
      -112,
      0
    ],
    [
      -51,
      0
    ],
    [
      -1,
      0
    ],
    [
      -2,
      0
    ],
    [
      -1,
      0
    ],
    [
      -1,
      0
    ],
    [
      -1,
      0
    ],
    [
      -1,
      0
    ],
    [
      -1,
      0
    ],
    [
      -2,
      0
    ],
    [
      -4,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ],
    [
      -5,
      143
    ]
  ],
  [
    [
      51892,
      18734
    ],
    [
      38,
      73
    ],
    [
      17,
      22
    ],
    [
      21,
      11
    ],
    [
      63,
      3
    ],
    [
      45,
      -25
    ]
  ],
  [
    [
      52076,
      18818
    ],
    [
      -22,
      -31
    ],
    [
      -19,
      -58
    ],
    [
      -43,
      -69
    ],
    [
      3,
      -46
    ],
    [
      7,
      -33
    ],
    [
      -3,
      -69
    ],
    [
      27,
      -66
    ],
    [
      55,
      -110
    ],
    [
      10,
      -170
    ],
    [
      41,
      -114
    ],
    [
      64,
      -133
    ],
    [
      49,
      -38
    ],
    [
      2,
      -49
    ],
    [
      -22,
      -82
    ],
    [
      -30,
      -37
    ],
    [
      39,
      7
    ],
    [
      19,
      -18
    ],
    [
      19,
      -68
    ],
    [
      -1,
      -43
    ]
  ],
  [
    [
      47219,
      10864
    ],
    [
      21,
      -72
    ],
    [
      40,
      -147
    ],
    [
      1,
      -35
    ],
    [
      48,
      -5
    ],
    [
      81,
      -8
    ],
    [
      80,
      -9
    ],
    [
      81,
      -8
    ],
    [
      81,
      -9
    ],
    [
      81,
      -8
    ],
    [
      80,
      -8
    ],
    [
      81,
      -9
    ],
    [
      81,
      -8
    ],
    [
      81,
      -9
    ],
    [
      81,
      -8
    ],
    [
      80,
      -9
    ],
    [
      81,
      -8
    ],
    [
      81,
      -8
    ],
    [
      81,
      -9
    ],
    [
      80,
      -8
    ],
    [
      81,
      -9
    ],
    [
      1,
      -30
    ],
    [
      13,
      -46
    ],
    [
      3,
      -54
    ],
    [
      6,
      -25
    ],
    [
      16,
      -16
    ],
    [
      26,
      -4
    ],
    [
      25,
      30
    ],
    [
      17,
      66
    ],
    [
      4,
      74
    ],
    [
      -10,
      84
    ],
    [
      1,
      71
    ],
    [
      13,
      42
    ],
    [
      15,
      10
    ],
    [
      14,
      23
    ],
    [
      10,
      4
    ],
    [
      28,
      -12
    ],
    [
      105,
      -59
    ],
    [
      86,
      -8
    ]
  ],
  [
    [
      48994,
      10620
    ],
    [
      24,
      -82
    ],
    [
      36,
      -335
    ],
    [
      25,
      -116
    ],
    [
      44,
      -313
    ],
    [
      74,
      -304
    ],
    [
      103,
      -368
    ],
    [
      170,
      -445
    ],
    [
      21,
      -64
    ],
    [
      -23,
      -53
    ],
    [
      -6,
      -56
    ],
    [
      -2,
      -84
    ],
    [
      6,
      -82
    ],
    [
      20,
      -100
    ],
    [
      39,
      -153
    ],
    [
      -22,
      31
    ],
    [
      -56,
      219
    ],
    [
      -6,
      129
    ],
    [
      8,
      183
    ],
    [
      -13,
      -5
    ],
    [
      -11,
      -59
    ],
    [
      -6,
      -70
    ],
    [
      -14,
      -27
    ],
    [
      -20,
      107
    ],
    [
      2,
      48
    ],
    [
      20,
      56
    ],
    [
      -6,
      20
    ],
    [
      -33,
      29
    ],
    [
      -7,
      45
    ],
    [
      5,
      45
    ],
    [
      -20,
      24
    ],
    [
      -15,
      -1
    ],
    [
      10,
      -111
    ],
    [
      16,
      -67
    ],
    [
      20,
      -162
    ],
    [
      31,
      -99
    ],
    [
      19,
      -82
    ],
    [
      215,
      -879
    ],
    [
      50,
      -112
    ],
    [
      19,
      -80
    ],
    [
      20,
      -168
    ],
    [
      4,
      -216
    ],
    [
      -35,
      -394
    ],
    [
      -8,
      -269
    ],
    [
      -5,
      8
    ],
    [
      -3,
      28
    ],
    [
      -8,
      4
    ],
    [
      -31,
      -123
    ],
    [
      -41,
      -111
    ],
    [
      -14,
      -173
    ],
    [
      -20,
      -87
    ],
    [
      -59,
      -91
    ],
    [
      -37,
      2
    ],
    [
      -91,
      -69
    ],
    [
      -64,
      18
    ],
    [
      -76,
      -38
    ],
    [
      -50,
      4
    ],
    [
      -28,
      82
    ],
    [
      4,
      36
    ],
    [
      12,
      37
    ],
    [
      19,
      8
    ],
    [
      67,
      -85
    ],
    [
      13,
      36
    ],
    [
      -21,
      43
    ],
    [
      -38,
      24
    ],
    [
      -29,
      26
    ],
    [
      -58,
      195
    ],
    [
      -59,
      134
    ],
    [
      -10,
      89
    ],
    [
      -103,
      55
    ],
    [
      -75,
      83
    ],
    [
      -49,
      147
    ],
    [
      -28,
      260
    ],
    [
      -33,
      30
    ],
    [
      -13,
      20
    ],
    [
      32,
      97
    ],
    [
      34,
      81
    ],
    [
      -27,
      -20
    ],
    [
      -20,
      -30
    ],
    [
      -25,
      -72
    ],
    [
      -18,
      -11
    ],
    [
      -17,
      11
    ],
    [
      -20,
      138
    ],
    [
      6,
      168
    ],
    [
      27,
      64
    ],
    [
      -42,
      1
    ],
    [
      -43,
      -24
    ],
    [
      6,
      -56
    ],
    [
      -6,
      -31
    ],
    [
      -31,
      8
    ],
    [
      -24,
      20
    ],
    [
      -33,
      58
    ],
    [
      -44,
      112
    ],
    [
      -91,
      308
    ],
    [
      -17,
      44
    ],
    [
      -30,
      45
    ],
    [
      14,
      14
    ],
    [
      26,
      9
    ],
    [
      58,
      138
    ],
    [
      46,
      84
    ],
    [
      15,
      58
    ],
    [
      -3,
      25
    ],
    [
      -20,
      36
    ],
    [
      -27,
      -31
    ],
    [
      -11,
      9
    ],
    [
      -30,
      72
    ],
    [
      -28,
      21
    ],
    [
      -20,
      -16
    ],
    [
      21,
      -59
    ],
    [
      18,
      -23
    ],
    [
      -7,
      -86
    ],
    [
      -7,
      -28
    ],
    [
      -18,
      -25
    ],
    [
      -28,
      13
    ],
    [
      -14,
      -21
    ],
    [
      -16,
      22
    ],
    [
      -16,
      38
    ],
    [
      -19,
      63
    ],
    [
      48,
      353
    ],
    [
      45,
      224
    ],
    [
      5,
      257
    ],
    [
      3,
      38
    ],
    [
      -3,
      68
    ],
    [
      -60,
      148
    ],
    [
      -264,
      361
    ],
    [
      -205,
      428
    ],
    [
      -177,
      160
    ],
    [
      -135,
      -35
    ],
    [
      -23,
      -32
    ],
    [
      -10,
      -42
    ],
    [
      9,
      -48
    ],
    [
      -13,
      -20
    ],
    [
      -36,
      3
    ],
    [
      -48,
      -11
    ],
    [
      -127,
      -113
    ],
    [
      -45,
      4
    ],
    [
      -41,
      -29
    ],
    [
      -30,
      -22
    ],
    [
      -80,
      -12
    ],
    [
      -67,
      -25
    ],
    [
      -29,
      14
    ],
    [
      -19,
      65
    ],
    [
      0,
      68
    ],
    [
      15,
      -52
    ],
    [
      24,
      -41
    ],
    [
      11,
      16
    ],
    [
      4,
      36
    ],
    [
      -24,
      71
    ],
    [
      -76,
      90
    ],
    [
      -87,
      132
    ],
    [
      27,
      -5
    ],
    [
      6,
      29
    ],
    [
      -27,
      37
    ],
    [
      12,
      43
    ],
    [
      19,
      45
    ],
    [
      -37,
      -7
    ],
    [
      -33,
      -32
    ],
    [
      -1,
      -39
    ],
    [
      -6,
      -31
    ],
    [
      -18,
      5
    ],
    [
      -33,
      38
    ],
    [
      -162,
      107
    ],
    [
      -141,
      60
    ],
    [
      108,
      27
    ],
    [
      59,
      -21
    ],
    [
      -7,
      32
    ],
    [
      -14,
      21
    ],
    [
      -46,
      26
    ],
    [
      -60,
      -10
    ],
    [
      -37,
      12
    ],
    [
      -38,
      -26
    ],
    [
      -42,
      -38
    ],
    [
      -37,
      -20
    ],
    [
      -146,
      -27
    ],
    [
      -119,
      -30
    ],
    [
      19,
      31
    ],
    [
      20,
      21
    ],
    [
      70,
      31
    ],
    [
      11,
      64
    ],
    [
      -17,
      61
    ],
    [
      -18,
      -14
    ],
    [
      -19,
      -49
    ],
    [
      -24,
      35
    ],
    [
      -26,
      0
    ],
    [
      -7,
      -77
    ],
    [
      -34,
      -51
    ],
    [
      -15,
      -52
    ],
    [
      -99,
      -41
    ],
    [
      -13,
      14
    ],
    [
      29,
      49
    ],
    [
      -2,
      27
    ],
    [
      -21,
      -14
    ]
  ],
  [
    [
      47269,
      9637
    ],
    [
      -51,
      -32
    ],
    [
      -55,
      23
    ],
    [
      35,
      5
    ],
    [
      24,
      -10
    ],
    [
      63,
      47
    ],
    [
      33,
      35
    ],
    [
      38,
      13
    ],
    [
      -87,
      -81
    ]
  ],
  [
    [
      49662,
      7504
    ],
    [
      8,
      -67
    ],
    [
      -47,
      154
    ],
    [
      -57,
      242
    ],
    [
      -31,
      187
    ],
    [
      21,
      -51
    ],
    [
      20,
      -104
    ],
    [
      86,
      -361
    ]
  ],
  [
    [
      48700,
      6848
    ],
    [
      0,
      -53
    ],
    [
      -26,
      89
    ],
    [
      -17,
      98
    ],
    [
      24,
      -32
    ],
    [
      19,
      -102
    ]
  ],
  [
    [
      48724,
      6759
    ],
    [
      -18,
      -23
    ],
    [
      -37,
      17
    ],
    [
      -20,
      31
    ],
    [
      -8,
      60
    ],
    [
      32,
      -64
    ],
    [
      11,
      -14
    ],
    [
      40,
      -7
    ]
  ],
  [
    [
      49563,
      5576
    ],
    [
      -101,
      -170
    ],
    [
      11,
      43
    ],
    [
      39,
      90
    ],
    [
      13,
      43
    ],
    [
      27,
      27
    ],
    [
      24,
      49
    ],
    [
      2,
      57
    ],
    [
      36,
      40
    ],
    [
      12,
      6
    ],
    [
      -63,
      -185
    ]
  ],
  [
    [
      49433,
      5360
    ],
    [
      -14,
      -4
    ],
    [
      20,
      38
    ],
    [
      6,
      -3
    ],
    [
      -12,
      -31
    ]
  ],
  [
    [
      49336,
      5270
    ],
    [
      -10,
      0
    ],
    [
      5,
      13
    ],
    [
      20,
      26
    ],
    [
      7,
      -10
    ],
    [
      0,
      -13
    ],
    [
      -22,
      -16
    ]
  ],
  [
    [
      49227,
      5192
    ],
    [
      -23,
      -22
    ],
    [
      -24,
      16
    ],
    [
      26,
      22
    ],
    [
      79,
      22
    ],
    [
      -30,
      -28
    ],
    [
      -28,
      -10
    ]
  ],
  [
    [
      49080,
      5132
    ],
    [
      -15,
      -19
    ],
    [
      -8,
      6
    ],
    [
      0,
      27
    ],
    [
      -21,
      60
    ],
    [
      1,
      16
    ],
    [
      49,
      -59
    ],
    [
      1,
      -16
    ],
    [
      -7,
      -15
    ]
  ],
  [
    [
      48962,
      5086
    ],
    [
      -33,
      -9
    ],
    [
      27,
      36
    ],
    [
      9,
      54
    ],
    [
      15,
      -42
    ],
    [
      0,
      -26
    ],
    [
      -18,
      -13
    ]
  ],
  [
    [
      48852,
      5036
    ],
    [
      -13,
      -2
    ],
    [
      -1,
      14
    ],
    [
      22,
      17
    ],
    [
      15,
      -1
    ],
    [
      0,
      -19
    ],
    [
      -23,
      -9
    ]
  ],
  [
    [
      46907,
      14473
    ],
    [
      164,
      -3
    ],
    [
      165,
      -3
    ],
    [
      164,
      -3
    ],
    [
      165,
      -3
    ]
  ],
  [
    [
      47565,
      14461
    ],
    [
      153,
      3
    ],
    [
      153,
      3
    ],
    [
      154,
      3
    ],
    [
      153,
      3
    ]
  ],
  [
    [
      48178,
      14473
    ],
    [
      -3,
      0
    ],
    [
      -25,
      -61
    ],
    [
      -74,
      -115
    ],
    [
      -20,
      -88
    ],
    [
      96,
      -98
    ],
    [
      0,
      -1
    ],
    [
      57,
      -79
    ],
    [
      39,
      -31
    ],
    [
      40,
      -10
    ],
    [
      25,
      -26
    ],
    [
      15,
      -64
    ],
    [
      0,
      0
    ],
    [
      116,
      -315
    ],
    [
      0,
      1
    ],
    [
      120,
      -163
    ],
    [
      49,
      -80
    ],
    [
      24,
      -77
    ],
    [
      103,
      -127
    ],
    [
      35,
      -68
    ],
    [
      2,
      -52
    ],
    [
      12,
      -37
    ],
    [
      23,
      -21
    ],
    [
      21,
      -46
    ],
    [
      21,
      -72
    ],
    [
      41,
      -61
    ],
    [
      61,
      -53
    ],
    [
      45,
      -120
    ],
    [
      29,
      -187
    ],
    [
      28,
      -109
    ],
    [
      44,
      -45
    ],
    [
      61,
      -160
    ],
    [
      19,
      -95
    ],
    [
      -1,
      -84
    ],
    [
      31,
      -65
    ],
    [
      102,
      -73
    ]
  ],
  [
    [
      49314,
      11791
    ],
    [
      -26,
      -76
    ],
    [
      -62,
      -48
    ],
    [
      -19,
      2
    ],
    [
      -15,
      -14
    ],
    [
      9,
      -34
    ],
    [
      16,
      -25
    ],
    [
      -1,
      -23
    ],
    [
      -16,
      -31
    ],
    [
      -33,
      -9
    ],
    [
      -18,
      -35
    ],
    [
      6,
      -34
    ],
    [
      11,
      -19
    ],
    [
      -3,
      -32
    ],
    [
      -36,
      -32
    ],
    [
      -9,
      -32
    ],
    [
      18,
      -10
    ],
    [
      14,
      10
    ],
    [
      11,
      -7
    ],
    [
      -22,
      -54
    ],
    [
      -20,
      -32
    ],
    [
      -19,
      -59
    ],
    [
      -44,
      -16
    ],
    [
      2,
      -19
    ],
    [
      25,
      -17
    ],
    [
      20,
      -45
    ],
    [
      -38,
      -83
    ],
    [
      -25,
      7
    ],
    [
      -14,
      18
    ],
    [
      -10,
      -65
    ],
    [
      4,
      -35
    ],
    [
      -9,
      -72
    ],
    [
      -15,
      -86
    ],
    [
      -10,
      -35
    ],
    [
      2,
      -66
    ],
    [
      6,
      -63
    ]
  ],
  [
    [
      49037,
      10836
    ],
    [
      -22,
      -219
    ],
    [
      -10,
      77
    ],
    [
      -1,
      76
    ],
    [
      17,
      45
    ],
    [
      16,
      21
    ]
  ],
  [
    [
      417,
      8336
    ],
    [
      -10,
      -4
    ],
    [
      1,
      11
    ],
    [
      9,
      11
    ],
    [
      9,
      -3
    ],
    [
      -4,
      -9
    ],
    [
      -5,
      -6
    ]
  ],
  [
    [
      9537,
      2679
    ],
    [
      -44,
      -51
    ],
    [
      -26,
      22
    ],
    [
      -49,
      8
    ],
    [
      -19,
      38
    ],
    [
      -52,
      35
    ],
    [
      -21,
      47
    ],
    [
      32,
      89
    ],
    [
      75,
      74
    ],
    [
      115,
      -3
    ],
    [
      24,
      -59
    ],
    [
      2,
      -44
    ],
    [
      -15,
      -49
    ],
    [
      -7,
      -70
    ],
    [
      -15,
      -37
    ]
  ],
  [
    [
      9128,
      2597
    ],
    [
      -10,
      -40
    ],
    [
      -18,
      6
    ],
    [
      -4,
      35
    ],
    [
      11,
      49
    ],
    [
      29,
      42
    ],
    [
      32,
      65
    ],
    [
      27,
      -10
    ],
    [
      -15,
      -42
    ],
    [
      -1,
      -46
    ],
    [
      -37,
      -25
    ],
    [
      -14,
      -34
    ]
  ],
  [
    [
      10334,
      2250
    ],
    [
      18,
      -6
    ],
    [
      22,
      7
    ],
    [
      8,
      -72
    ],
    [
      26,
      -40
    ],
    [
      10,
      -24
    ],
    [
      -29,
      -25
    ],
    [
      -54,
      -10
    ],
    [
      -26,
      20
    ],
    [
      -26,
      45
    ],
    [
      -29,
      -12
    ],
    [
      -5,
      36
    ],
    [
      -5,
      10
    ],
    [
      -20,
      -10
    ],
    [
      18,
      -46
    ],
    [
      -49,
      -4
    ],
    [
      -16,
      6
    ],
    [
      -14,
      53
    ],
    [
      -51,
      101
    ],
    [
      0,
      40
    ],
    [
      -18,
      47
    ],
    [
      76,
      13
    ],
    [
      52,
      83
    ],
    [
      30,
      8
    ],
    [
      56,
      -133
    ],
    [
      -1,
      -37
    ],
    [
      12,
      -37
    ],
    [
      15,
      -13
    ]
  ],
  [
    [
      10631,
      2032
    ],
    [
      107,
      -25
    ],
    [
      26,
      11
    ],
    [
      17,
      -20
    ],
    [
      89,
      -13
    ],
    [
      15,
      -8
    ],
    [
      -18,
      -46
    ],
    [
      -57,
      -43
    ],
    [
      -81,
      38
    ],
    [
      -137,
      13
    ],
    [
      6,
      36
    ],
    [
      13,
      25
    ],
    [
      2,
      45
    ],
    [
      18,
      -13
    ]
  ],
  [
    [
      11e3,
      1777
    ],
    [
      13,
      -16
    ],
    [
      54,
      24
    ],
    [
      39,
      9
    ],
    [
      65,
      -60
    ],
    [
      23,
      -41
    ],
    [
      43,
      -43
    ],
    [
      14,
      -32
    ],
    [
      -12,
      -38
    ],
    [
      -47,
      -63
    ],
    [
      -65,
      -15
    ],
    [
      -38,
      -27
    ],
    [
      -50,
      6
    ],
    [
      -15,
      12
    ],
    [
      -5,
      79
    ],
    [
      -16,
      86
    ],
    [
      -32,
      -10
    ],
    [
      -37,
      29
    ],
    [
      -37,
      72
    ],
    [
      -4,
      43
    ],
    [
      20,
      68
    ],
    [
      37,
      8
    ],
    [
      26,
      -37
    ],
    [
      24,
      -54
    ]
  ],
  [
    [
      10816,
      1632
    ],
    [
      -30,
      -25
    ],
    [
      -33,
      12
    ],
    [
      -8,
      61
    ],
    [
      -31,
      79
    ],
    [
      55,
      15
    ],
    [
      31,
      -22
    ],
    [
      16,
      -25
    ],
    [
      20,
      -42
    ],
    [
      -20,
      -53
    ]
  ],
  [
    [
      11458,
      43
    ],
    [
      -22,
      -43
    ],
    [
      -28,
      3
    ],
    [
      -102,
      93
    ],
    [
      -12,
      50
    ],
    [
      8,
      232
    ],
    [
      -38,
      188
    ],
    [
      -42,
      143
    ],
    [
      30,
      74
    ],
    [
      40,
      57
    ],
    [
      45,
      108
    ],
    [
      -36,
      138
    ],
    [
      9,
      84
    ],
    [
      22,
      14
    ],
    [
      106,
      -101
    ],
    [
      214,
      -153
    ],
    [
      57,
      -107
    ],
    [
      10,
      -115
    ],
    [
      39,
      -15
    ],
    [
      19,
      -79
    ],
    [
      56,
      -69
    ],
    [
      19,
      -39
    ],
    [
      -23,
      -64
    ],
    [
      -103,
      -121
    ],
    [
      -130,
      -54
    ],
    [
      -114,
      -136
    ],
    [
      -24,
      -88
    ]
  ],
  [
    [
      43958,
      19327
    ],
    [
      -44,
      48
    ],
    [
      -8,
      33
    ],
    [
      -36,
      34
    ],
    [
      -6,
      21
    ],
    [
      -27,
      20
    ],
    [
      -25,
      65
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -2
    ],
    [
      -128,
      -1
    ],
    [
      -127,
      -1
    ],
    [
      -128,
      -2
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -2
    ],
    [
      -128,
      -1
    ],
    [
      -127,
      -1
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -2
    ],
    [
      -128,
      -1
    ],
    [
      -128,
      -1
    ],
    [
      -126,
      -1
    ]
  ],
  [
    [
      41768,
      19528
    ],
    [
      -31,
      67
    ],
    [
      -17,
      62
    ],
    [
      11,
      29
    ],
    [
      2,
      101
    ],
    [
      -6,
      172
    ],
    [
      -13,
      97
    ],
    [
      -18,
      22
    ],
    [
      -2,
      30
    ],
    [
      14,
      38
    ],
    [
      -4,
      26
    ],
    [
      -23,
      14
    ],
    [
      -7,
      33
    ],
    [
      9,
      52
    ],
    [
      -6,
      32
    ],
    [
      -19,
      12
    ],
    [
      -8,
      17
    ],
    [
      3,
      25
    ],
    [
      -10,
      15
    ],
    [
      -24,
      7
    ],
    [
      -10,
      60
    ],
    [
      5,
      111
    ],
    [
      -9,
      78
    ],
    [
      -23,
      46
    ],
    [
      -11,
      44
    ],
    [
      0,
      40
    ],
    [
      -24,
      64
    ],
    [
      -48,
      87
    ],
    [
      -31,
      115
    ],
    [
      -14,
      142
    ],
    [
      -34,
      80
    ],
    [
      -15,
      5
    ]
  ],
  [
    [
      41405,
      21251
    ],
    [
      -13,
      74
    ],
    [
      -14,
      33
    ],
    [
      -2,
      26
    ],
    [
      -42,
      64
    ],
    [
      -3,
      25
    ],
    [
      6,
      31
    ],
    [
      27,
      60
    ],
    [
      25,
      100
    ],
    [
      5,
      67
    ],
    [
      20,
      50
    ],
    [
      1,
      28
    ],
    [
      -3,
      37
    ],
    [
      -12,
      31
    ],
    [
      -33,
      24
    ],
    [
      -4,
      10
    ],
    [
      -3,
      37
    ],
    [
      14,
      23
    ],
    [
      4,
      26
    ],
    [
      -4,
      32
    ],
    [
      -20,
      55
    ],
    [
      -9,
      57
    ],
    [
      74,
      3
    ]
  ],
  [
    [
      41419,
      22144
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      164,
      0
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      164,
      0
    ],
    [
      165,
      1
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      164,
      0
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      165,
      0
    ],
    [
      167,
      0
    ]
  ],
  [
    [
      44058,
      22145
    ],
    [
      4,
      -56
    ],
    [
      10,
      -40
    ],
    [
      20,
      -33
    ],
    [
      31,
      -25
    ],
    [
      5,
      -48
    ],
    [
      -20,
      -71
    ],
    [
      -7,
      -88
    ],
    [
      6,
      -105
    ],
    [
      16,
      -94
    ],
    [
      24,
      -84
    ],
    [
      56,
      -62
    ],
    [
      86,
      -39
    ],
    [
      52,
      -60
    ],
    [
      15,
      -81
    ],
    [
      3,
      -7
    ]
  ],
  [
    [
      44359,
      21252
    ],
    [
      31,
      -61
    ],
    [
      53,
      -56
    ],
    [
      31,
      -52
    ],
    [
      7,
      -48
    ],
    [
      32,
      -52
    ],
    [
      58,
      -55
    ],
    [
      33,
      -48
    ],
    [
      9,
      -42
    ],
    [
      -1,
      -65
    ],
    [
      -12,
      -89
    ],
    [
      -21,
      -63
    ],
    [
      -30,
      -39
    ],
    [
      -22,
      -55
    ],
    [
      -14,
      -70
    ],
    [
      -45,
      -64
    ],
    [
      -76,
      -60
    ],
    [
      -85,
      -40
    ],
    [
      -94,
      -22
    ],
    [
      -55,
      -51
    ],
    [
      -17,
      -80
    ],
    [
      8,
      -67
    ],
    [
      33,
      -54
    ],
    [
      19,
      -58
    ],
    [
      5,
      -60
    ],
    [
      -24,
      -100
    ],
    [
      -51,
      -140
    ],
    [
      -58,
      -90
    ],
    [
      -62,
      -41
    ],
    [
      -28,
      -61
    ],
    [
      7,
      -81
    ],
    [
      -6,
      -45
    ],
    [
      -26,
      -16
    ]
  ],
  [
    [
      30988,
      27100
    ],
    [
      163,
      0
    ],
    [
      216,
      0
    ],
    [
      123,
      0
    ]
  ],
  [
    [
      31490,
      27100
    ],
    [
      0,
      -222
    ],
    [
      0,
      -223
    ],
    [
      0,
      -223
    ],
    [
      0,
      -224
    ],
    [
      54,
      -90
    ],
    [
      40,
      -56
    ],
    [
      26,
      -60
    ],
    [
      40,
      -63
    ],
    [
      7,
      -22
    ],
    [
      14,
      -68
    ],
    [
      -10,
      -49
    ],
    [
      21,
      -49
    ],
    [
      -4,
      -25
    ],
    [
      -15,
      -12
    ],
    [
      -4,
      -4
    ],
    [
      1,
      -5
    ],
    [
      5,
      -8
    ],
    [
      56,
      -48
    ],
    [
      54,
      -66
    ],
    [
      69,
      -46
    ],
    [
      22,
      -27
    ],
    [
      91,
      -132
    ],
    [
      47,
      -84
    ],
    [
      50,
      -62
    ],
    [
      25,
      -70
    ],
    [
      51,
      -62
    ],
    [
      13,
      -31
    ],
    [
      3,
      -7
    ],
    [
      7,
      -1
    ],
    [
      31,
      15
    ],
    [
      9,
      -4
    ],
    [
      15,
      -24
    ],
    [
      4,
      -37
    ],
    [
      11,
      -16
    ],
    [
      20,
      -9
    ],
    [
      22,
      -2
    ],
    [
      70,
      18
    ],
    [
      15,
      0
    ],
    [
      7,
      -8
    ],
    [
      4,
      -19
    ],
    [
      -1,
      -33
    ],
    [
      -7,
      -46
    ],
    [
      -21,
      -46
    ],
    [
      3,
      -42
    ],
    [
      -16,
      -99
    ],
    [
      -16,
      -65
    ],
    [
      -1,
      -65
    ],
    [
      -20,
      -37
    ],
    [
      11,
      -44
    ],
    [
      -7,
      -67
    ],
    [
      7,
      -17
    ],
    [
      24,
      -31
    ],
    [
      10,
      -82
    ],
    [
      -4,
      -15
    ],
    [
      -45,
      -32
    ],
    [
      -15,
      -22
    ],
    [
      -5,
      -29
    ],
    [
      19,
      -87
    ],
    [
      -19,
      -48
    ],
    [
      -2,
      -41
    ],
    [
      4,
      -11
    ],
    [
      41,
      -22
    ],
    [
      49,
      -49
    ],
    [
      16,
      -10
    ],
    [
      11,
      2
    ],
    [
      21,
      16
    ],
    [
      24,
      33
    ],
    [
      47,
      33
    ],
    [
      56,
      72
    ],
    [
      3,
      20
    ],
    [
      4,
      11
    ],
    [
      7,
      0
    ],
    [
      18,
      -10
    ],
    [
      35,
      -43
    ],
    [
      31,
      -24
    ],
    [
      5,
      -6
    ],
    [
      3,
      -12
    ],
    [
      -1,
      -43
    ],
    [
      17,
      -34
    ],
    [
      5,
      -55
    ],
    [
      17,
      -56
    ],
    [
      13,
      -67
    ],
    [
      45,
      -86
    ],
    [
      25,
      -62
    ],
    [
      28,
      -29
    ],
    [
      16,
      -32
    ],
    [
      12,
      -40
    ],
    [
      5,
      -32
    ],
    [
      -16,
      -57
    ],
    [
      4,
      -24
    ],
    [
      15,
      -27
    ],
    [
      47,
      -59
    ],
    [
      9,
      -5
    ],
    [
      44,
      6
    ],
    [
      24,
      -10
    ],
    [
      23,
      -30
    ],
    [
      24,
      -45
    ],
    [
      16,
      -45
    ],
    [
      4,
      -54
    ],
    [
      25,
      -60
    ],
    [
      3,
      -53
    ],
    [
      15,
      -23
    ],
    [
      30,
      -32
    ],
    [
      29,
      -19
    ],
    [
      11,
      -2
    ],
    [
      8,
      9
    ],
    [
      3,
      29
    ],
    [
      12,
      22
    ],
    [
      36,
      32
    ],
    [
      34,
      -1
    ],
    [
      129,
      -26
    ],
    [
      9,
      2
    ],
    [
      6,
      8
    ],
    [
      22,
      49
    ],
    [
      18,
      18
    ],
    [
      27,
      6
    ],
    [
      80,
      -11
    ],
    [
      92,
      6
    ],
    [
      48,
      -13
    ],
    [
      70,
      17
    ],
    [
      81,
      -13
    ],
    [
      10,
      8
    ],
    [
      3,
      10
    ],
    [
      -8,
      18
    ],
    [
      -1,
      36
    ],
    [
      17,
      42
    ],
    [
      5,
      36
    ],
    [
      17,
      20
    ],
    [
      21,
      12
    ],
    [
      18,
      -1
    ],
    [
      17,
      -20
    ],
    [
      20,
      -32
    ],
    [
      34,
      -88
    ],
    [
      19,
      -31
    ],
    [
      22,
      -28
    ],
    [
      33,
      -23
    ]
  ],
  [
    [
      34022,
      23045
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -140
    ],
    [
      0,
      -141
    ],
    [
      1,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ]
  ],
  [
    [
      34023,
      20790
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -94,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -94,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -94,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ]
  ],
  [
    [
      32506,
      20790
    ],
    [
      -188,
      0
    ],
    [
      -188,
      0
    ],
    [
      -189,
      0
    ],
    [
      -188,
      0
    ],
    [
      -188,
      0
    ],
    [
      -189,
      0
    ],
    [
      -188,
      0
    ],
    [
      -189,
      0
    ]
  ],
  [
    [
      30999,
      20790
    ],
    [
      0,
      201
    ],
    [
      0,
      202
    ],
    [
      0,
      201
    ],
    [
      0,
      202
    ],
    [
      -1,
      201
    ],
    [
      0,
      201
    ],
    [
      0,
      202
    ],
    [
      0,
      221
    ],
    [
      0,
      5
    ],
    [
      31,
      136
    ],
    [
      7,
      66
    ],
    [
      -8,
      38
    ],
    [
      5,
      36
    ],
    [
      20,
      34
    ],
    [
      -1,
      38
    ],
    [
      -20,
      42
    ],
    [
      -39,
      27
    ],
    [
      -56,
      13
    ],
    [
      -29,
      49
    ],
    [
      -2,
      83
    ],
    [
      42,
      128
    ],
    [
      86,
      173
    ],
    [
      47,
      123
    ],
    [
      8,
      71
    ],
    [
      52,
      166
    ],
    [
      95,
      260
    ],
    [
      37,
      166
    ],
    [
      -22,
      73
    ],
    [
      -49,
      70
    ],
    [
      -75,
      67
    ],
    [
      -53,
      77
    ],
    [
      -14,
      39
    ]
  ],
  [
    [
      31060,
      24401
    ],
    [
      -17,
      49
    ],
    [
      -9,
      61
    ],
    [
      13,
      36
    ],
    [
      -10,
      62
    ],
    [
      -34,
      88
    ],
    [
      -15,
      60
    ],
    [
      3,
      21
    ],
    [
      4,
      9
    ],
    [
      0,
      144
    ],
    [
      -1,
      145
    ],
    [
      0,
      145
    ],
    [
      0,
      144
    ],
    [
      -1,
      145
    ],
    [
      0,
      145
    ],
    [
      -1,
      144
    ],
    [
      0,
      145
    ],
    [
      -1,
      145
    ],
    [
      0,
      144
    ],
    [
      0,
      145
    ],
    [
      -1,
      145
    ],
    [
      0,
      144
    ],
    [
      -1,
      145
    ],
    [
      0,
      145
    ],
    [
      -1,
      143
    ]
  ],
  [
    [
      44359,
      21252
    ],
    [
      233,
      -2
    ],
    [
      228,
      -2
    ],
    [
      229,
      -3
    ],
    [
      228,
      -2
    ],
    [
      228,
      -2
    ],
    [
      228,
      -2
    ],
    [
      65,
      -1
    ]
  ],
  [
    [
      45798,
      21238
    ],
    [
      0,
      -141
    ],
    [
      7,
      -117
    ],
    [
      16,
      -52
    ],
    [
      17,
      -38
    ],
    [
      19,
      -24
    ],
    [
      22,
      -76
    ],
    [
      25,
      -128
    ],
    [
      23,
      -84
    ],
    [
      18,
      -34
    ]
  ],
  [
    [
      45945,
      20544
    ],
    [
      -1,
      -241
    ],
    [
      0,
      -271
    ],
    [
      -1,
      -270
    ],
    [
      -1,
      -271
    ],
    [
      -1,
      -270
    ],
    [
      0,
      -271
    ],
    [
      -1,
      -270
    ],
    [
      -1,
      -256
    ],
    [
      0,
      -4
    ],
    [
      -23,
      -28
    ],
    [
      -16,
      -47
    ],
    [
      4,
      -52
    ],
    [
      -6,
      -37
    ],
    [
      -17,
      -22
    ],
    [
      8,
      -56
    ],
    [
      32,
      -90
    ],
    [
      20,
      -88
    ],
    [
      6,
      -88
    ],
    [
      -6,
      -63
    ],
    [
      -28,
      -56
    ],
    [
      -26,
      -124
    ],
    [
      -23,
      -49
    ],
    [
      -27,
      -16
    ],
    [
      -25,
      -46
    ],
    [
      -22,
      -76
    ],
    [
      -23,
      -36
    ],
    [
      -25,
      2
    ],
    [
      -18,
      -14
    ],
    [
      -12,
      -30
    ],
    [
      2,
      -31
    ],
    [
      15,
      -33
    ],
    [
      -5,
      -30
    ],
    [
      -25,
      -28
    ],
    [
      1,
      -14
    ],
    [
      7,
      -8
    ],
    [
      -2,
      -13
    ],
    [
      -16,
      -14
    ],
    [
      -9,
      -41
    ],
    [
      1,
      -70
    ],
    [
      -8,
      -34
    ],
    [
      -17,
      -2
    ],
    [
      -2,
      -19
    ],
    [
      27,
      -78
    ]
  ],
  [
    [
      45681,
      16989
    ],
    [
      -16,
      -16
    ],
    [
      -28,
      -65
    ],
    [
      -6,
      -71
    ],
    [
      17,
      -78
    ],
    [
      -42,
      -63
    ],
    [
      -101,
      -48
    ],
    [
      -53,
      -42
    ],
    [
      -6,
      -37
    ],
    [
      7,
      -56
    ],
    [
      20,
      -75
    ],
    [
      3,
      -52
    ],
    [
      -12,
      -29
    ],
    [
      -73,
      19
    ],
    [
      -131,
      68
    ],
    [
      -88,
      -2
    ],
    [
      -44,
      -72
    ],
    [
      -16,
      -55
    ],
    [
      6,
      -45
    ]
  ],
  [
    [
      45118,
      16270
    ],
    [
      -36,
      55
    ],
    [
      -24,
      24
    ],
    [
      -5,
      -2
    ],
    [
      -5,
      -6
    ],
    [
      -2,
      -17
    ],
    [
      1,
      -12
    ],
    [
      4,
      -14
    ],
    [
      -2,
      -9
    ],
    [
      -6,
      -1
    ],
    [
      -26,
      21
    ],
    [
      -31,
      60
    ],
    [
      -37,
      100
    ],
    [
      -8,
      79
    ],
    [
      21,
      59
    ],
    [
      0,
      62
    ],
    [
      -21,
      65
    ],
    [
      -10,
      63
    ],
    [
      0,
      62
    ],
    [
      -51,
      92
    ],
    [
      -101,
      124
    ],
    [
      -75,
      76
    ],
    [
      -47,
      29
    ],
    [
      -56,
      62
    ],
    [
      -63,
      95
    ],
    [
      -34,
      72
    ],
    [
      -4,
      50
    ],
    [
      29,
      134
    ],
    [
      84,
      291
    ],
    [
      9,
      34
    ],
    [
      3,
      13
    ],
    [
      -4,
      13
    ],
    [
      -8,
      12
    ],
    [
      -35,
      34
    ],
    [
      -68,
      29
    ],
    [
      -63,
      16
    ],
    [
      -50,
      -35
    ],
    [
      -44,
      71
    ],
    [
      -37,
      175
    ],
    [
      -93,
      185
    ],
    [
      -147,
      195
    ],
    [
      -86,
      132
    ],
    [
      -23,
      70
    ],
    [
      -21,
      105
    ],
    [
      -18,
      139
    ],
    [
      1,
      116
    ],
    [
      29,
      139
    ]
  ],
  [
    [
      45945,
      20544
    ],
    [
      3,
      -7
    ],
    [
      20,
      -22
    ],
    [
      15,
      -14
    ],
    [
      11,
      -2
    ],
    [
      6,
      -20
    ],
    [
      29,
      -12
    ],
    [
      52,
      -5
    ],
    [
      48,
      8
    ],
    [
      43,
      21
    ],
    [
      107,
      82
    ]
  ],
  [
    [
      46279,
      20573
    ],
    [
      125,
      0
    ],
    [
      154,
      0
    ],
    [
      153,
      0
    ],
    [
      154,
      0
    ],
    [
      154,
      0
    ],
    [
      153,
      0
    ],
    [
      154,
      0
    ],
    [
      0,
      -53
    ]
  ],
  [
    [
      47326,
      20520
    ],
    [
      -2,
      -294
    ],
    [
      -2,
      -293
    ],
    [
      -1,
      -294
    ],
    [
      -2,
      -294
    ],
    [
      -2,
      -293
    ],
    [
      -1,
      -294
    ],
    [
      -2,
      -294
    ],
    [
      -1,
      -299
    ]
  ],
  [
    [
      47313,
      18165
    ],
    [
      -8,
      -8
    ],
    [
      -12,
      -39
    ],
    [
      13,
      -40
    ],
    [
      -1,
      -32
    ],
    [
      -13,
      -24
    ],
    [
      5,
      -19
    ],
    [
      23,
      -12
    ],
    [
      9,
      -28
    ],
    [
      -5,
      -44
    ],
    [
      -51,
      -45
    ],
    [
      -98,
      -51
    ],
    [
      -21,
      -14
    ],
    [
      -17,
      -6
    ],
    [
      -9,
      3
    ],
    [
      0,
      0
    ],
    [
      -12,
      9
    ],
    [
      -18,
      21
    ],
    [
      -31,
      9
    ],
    [
      -50,
      -7
    ],
    [
      -20,
      -42
    ],
    [
      10,
      -78
    ],
    [
      -17,
      -60
    ],
    [
      -44,
      -42
    ],
    [
      -32,
      -55
    ],
    [
      -19,
      -68
    ],
    [
      -30,
      -42
    ],
    [
      -42,
      -14
    ],
    [
      -34,
      -63
    ],
    [
      -25,
      -112
    ],
    [
      -28,
      -70
    ],
    [
      -31,
      -27
    ],
    [
      -41,
      7
    ],
    [
      -53,
      41
    ],
    [
      -31,
      41
    ],
    [
      -8,
      43
    ],
    [
      -15,
      30
    ],
    [
      -15,
      14
    ],
    [
      -9,
      0
    ],
    [
      -1,
      -6
    ],
    [
      4,
      -12
    ],
    [
      -5,
      -13
    ],
    [
      -33,
      -4
    ],
    [
      -14,
      -18
    ],
    [
      5,
      -31
    ],
    [
      -7,
      -22
    ],
    [
      -19,
      -13
    ],
    [
      -10,
      -29
    ],
    [
      -2,
      -46
    ],
    [
      -13,
      -42
    ],
    [
      -26,
      -38
    ],
    [
      -37,
      12
    ],
    [
      -49,
      64
    ],
    [
      -50,
      15
    ],
    [
      -51,
      -34
    ],
    [
      -38,
      -47
    ],
    [
      -25,
      -59
    ],
    [
      -24,
      -14
    ],
    [
      -35,
      45
    ],
    [
      -82,
      61
    ],
    [
      -43,
      14
    ],
    [
      -31,
      -15
    ],
    [
      -22,
      7
    ],
    [
      -8,
      16
    ],
    [
      -5,
      8
    ],
    [
      -7,
      -9
    ],
    [
      0,
      -54
    ],
    [
      -8,
      -34
    ],
    [
      -14,
      -14
    ],
    [
      -11,
      11
    ],
    [
      -7,
      37
    ],
    [
      -18,
      12
    ],
    [
      -28,
      -13
    ],
    [
      -28,
      6
    ],
    [
      -25,
      21
    ],
    [
      -9,
      -2
    ],
    [
      -7,
      -10
    ],
    [
      2,
      -42
    ],
    [
      -5,
      -34
    ],
    [
      -13,
      -22
    ],
    [
      -19,
      -5
    ],
    [
      -24,
      11
    ],
    [
      -10,
      -10
    ]
  ],
  [
    [
      38596,
      18985
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      106,
      0
    ],
    [
      107,
      0
    ],
    [
      91,
      1
    ]
  ],
  [
    [
      41980,
      18986
    ],
    [
      117,
      -117
    ],
    [
      30,
      -1
    ],
    [
      37,
      18
    ],
    [
      27,
      -27
    ],
    [
      19,
      -71
    ],
    [
      -3,
      -37
    ],
    [
      -24,
      -2
    ],
    [
      -30,
      -43
    ],
    [
      -36,
      -85
    ],
    [
      9,
      -80
    ],
    [
      54,
      -74
    ],
    [
      35,
      -75
    ],
    [
      18,
      -76
    ],
    [
      35,
      -59
    ],
    [
      79,
      -63
    ],
    [
      -1,
      -34
    ],
    [
      0,
      -118
    ],
    [
      0,
      -118
    ],
    [
      0,
      -117
    ],
    [
      1,
      -118
    ],
    [
      0,
      -117
    ],
    [
      0,
      -118
    ],
    [
      0,
      -118
    ],
    [
      0,
      -117
    ],
    [
      1,
      -118
    ],
    [
      0,
      -117
    ],
    [
      0,
      -118
    ],
    [
      0,
      -118
    ],
    [
      0,
      -117
    ],
    [
      1,
      -118
    ],
    [
      0,
      -118
    ],
    [
      0,
      -117
    ]
  ],
  [
    [
      42349,
      16278
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -118,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -118,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -118,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ],
    [
      -117,
      0
    ]
  ],
  [
    [
      47313,
      18165
    ],
    [
      28,
      30
    ],
    [
      30,
      3
    ],
    [
      24,
      -31
    ],
    [
      33,
      -8
    ],
    [
      43,
      16
    ],
    [
      40,
      -11
    ],
    [
      37,
      -37
    ],
    [
      34,
      -68
    ],
    [
      32,
      -99
    ],
    [
      58,
      -60
    ],
    [
      83,
      -22
    ],
    [
      61,
      -39
    ],
    [
      39,
      -55
    ],
    [
      31,
      -18
    ],
    [
      38,
      30
    ],
    [
      39,
      15
    ],
    [
      40,
      -18
    ],
    [
      52,
      -47
    ],
    [
      78,
      10
    ],
    [
      103,
      68
    ],
    [
      61,
      -3
    ],
    [
      18,
      -75
    ],
    [
      44,
      -78
    ],
    [
      69,
      -82
    ],
    [
      4,
      -2
    ]
  ],
  [
    [
      48432,
      17584
    ],
    [
      12,
      -25
    ],
    [
      6,
      -134
    ],
    [
      -4,
      -26
    ],
    [
      -17,
      -55
    ],
    [
      1,
      -29
    ],
    [
      14,
      -45
    ],
    [
      54,
      -105
    ],
    [
      6,
      -41
    ],
    [
      21,
      -40
    ],
    [
      18,
      -59
    ],
    [
      58,
      -128
    ],
    [
      89,
      -105
    ],
    [
      70,
      -28
    ]
  ],
  [
    [
      48760,
      16764
    ],
    [
      -191,
      -219
    ],
    [
      -88,
      -79
    ],
    [
      -84,
      -64
    ],
    [
      -6,
      -11
    ],
    [
      -19,
      -71
    ],
    [
      -51,
      -62
    ],
    [
      -31,
      -65
    ],
    [
      -76,
      -55
    ],
    [
      -54,
      -75
    ],
    [
      -135,
      -74
    ],
    [
      -76,
      -25
    ],
    [
      -51,
      -43
    ]
  ],
  [
    [
      47898,
      15921
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -3
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -2
    ],
    [
      -4,
      -2
    ],
    [
      -176,
      9
    ],
    [
      -176,
      9
    ],
    [
      -176,
      9
    ],
    [
      -176,
      8
    ],
    [
      -176,
      9
    ],
    [
      -175,
      9
    ],
    [
      -176,
      9
    ],
    [
      -176,
      9
    ],
    [
      -169,
      -5
    ],
    [
      -169,
      -5
    ],
    [
      -168,
      -5
    ],
    [
      -169,
      -4
    ],
    [
      -15,
      28
    ],
    [
      -44,
      6
    ],
    [
      -69,
      10
    ],
    [
      -2,
      0
    ],
    [
      20,
      -93
    ],
    [
      0,
      -80
    ],
    [
      -1,
      -1
    ],
    [
      -80,
      0
    ],
    [
      -87,
      0
    ],
    [
      -88,
      0
    ],
    [
      -87,
      0
    ],
    [
      -88,
      0
    ],
    [
      -87,
      0
    ],
    [
      -88,
      0
    ],
    [
      -100,
      0
    ]
  ],
  [
    [
      44968,
      15826
    ],
    [
      26,
      79
    ],
    [
      24,
      21
    ],
    [
      10,
      4
    ],
    [
      26,
      -14
    ],
    [
      12,
      -5
    ],
    [
      27,
      28
    ],
    [
      24,
      81
    ],
    [
      13,
      87
    ],
    [
      4,
      90
    ],
    [
      -16,
      73
    ]
  ],
  [
    [
      44949,
      15829
    ],
    [
      -36,
      -2
    ]
  ],
  [
    [
      44913,
      15827
    ],
    [
      -1,
      11
    ],
    [
      2,
      25
    ],
    [
      3,
      11
    ],
    [
      7,
      2
    ],
    [
      9,
      -1
    ],
    [
      11,
      -23
    ],
    [
      5,
      -23
    ]
  ],
  [
    [
      44106,
      12682
    ],
    [
      3,
      -45
    ],
    [
      25,
      -26
    ],
    [
      1,
      -48
    ],
    [
      -22,
      -68
    ],
    [
      1,
      -48
    ],
    [
      22,
      -27
    ],
    [
      -1,
      -29
    ],
    [
      -25,
      -30
    ],
    [
      -3,
      -32
    ],
    [
      17,
      -35
    ],
    [
      7,
      -41
    ],
    [
      -1,
      -46
    ],
    [
      22,
      -60
    ],
    [
      35,
      -38
    ],
    [
      23,
      -46
    ],
    [
      3,
      -25
    ],
    [
      1,
      -23
    ],
    [
      -5,
      -34
    ],
    [
      -29,
      -49
    ],
    [
      -22,
      -36
    ],
    [
      -13,
      -13
    ],
    [
      -8,
      -24
    ],
    [
      -2,
      -53
    ],
    [
      -32,
      -68
    ],
    [
      -66,
      -78
    ],
    [
      -43,
      -100
    ],
    [
      -22,
      -120
    ],
    [
      -22,
      -77
    ],
    [
      -24,
      -33
    ],
    [
      -12,
      -63
    ],
    [
      0,
      -93
    ],
    [
      -15,
      -52
    ],
    [
      -30,
      -10
    ],
    [
      -6,
      -53
    ],
    [
      17,
      -98
    ],
    [
      -7,
      -40
    ],
    [
      -21,
      -32
    ],
    [
      -2,
      -25
    ],
    [
      121,
      -1
    ],
    [
      122,
      0
    ],
    [
      121,
      0
    ],
    [
      122,
      0
    ],
    [
      122,
      0
    ],
    [
      122,
      0
    ],
    [
      121,
      0
    ],
    [
      122,
      0
    ],
    [
      -15,
      -104
    ],
    [
      -35,
      -140
    ],
    [
      -2,
      -36
    ],
    [
      9,
      -46
    ],
    [
      0,
      -26
    ],
    [
      13,
      -38
    ],
    [
      30,
      -38
    ],
    [
      25,
      -58
    ],
    [
      23,
      -102
    ],
    [
      6,
      -48
    ],
    [
      19,
      -66
    ],
    [
      10,
      -12
    ],
    [
      14,
      -8
    ],
    [
      12,
      -7
    ]
  ],
  [
    [
      44932,
      10134
    ],
    [
      -34,
      -24
    ],
    [
      -186,
      92
    ],
    [
      -46,
      75
    ],
    [
      -41,
      16
    ],
    [
      -50,
      9
    ],
    [
      -54,
      -92
    ],
    [
      -41,
      -124
    ],
    [
      65,
      -68
    ],
    [
      55,
      -32
    ],
    [
      92,
      27
    ],
    [
      51,
      60
    ],
    [
      41,
      -2
    ],
    [
      20,
      13
    ],
    [
      18,
      31
    ],
    [
      36,
      -25
    ],
    [
      1,
      -25
    ],
    [
      -25,
      -35
    ],
    [
      -32,
      -29
    ],
    [
      -19,
      -35
    ],
    [
      36,
      -70
    ],
    [
      57,
      -23
    ],
    [
      21,
      10
    ],
    [
      13,
      79
    ],
    [
      35,
      50
    ],
    [
      48,
      -11
    ],
    [
      -7,
      -31
    ],
    [
      7,
      -30
    ],
    [
      21,
      -52
    ],
    [
      -2,
      -73
    ],
    [
      4,
      -17
    ],
    [
      -51,
      -33
    ],
    [
      -38,
      -11
    ],
    [
      -31,
      -42
    ],
    [
      16,
      -25
    ],
    [
      -31,
      -21
    ],
    [
      -21,
      8
    ],
    [
      -10,
      -8
    ],
    [
      -3,
      -26
    ],
    [
      -16,
      -24
    ],
    [
      23,
      -73
    ],
    [
      48,
      -47
    ],
    [
      34,
      -60
    ],
    [
      135,
      -78
    ],
    [
      33,
      2
    ],
    [
      33,
      -79
    ],
    [
      26,
      -27
    ],
    [
      25,
      -14
    ],
    [
      -3,
      -54
    ],
    [
      -45,
      -40
    ],
    [
      -12,
      -47
    ],
    [
      -11,
      -27
    ],
    [
      -20,
      34
    ],
    [
      -21,
      24
    ],
    [
      -48,
      -74
    ],
    [
      -23,
      -16
    ],
    [
      12,
      81
    ],
    [
      -18,
      31
    ],
    [
      -28,
      80
    ],
    [
      -40,
      50
    ],
    [
      -28,
      17
    ],
    [
      -22,
      31
    ],
    [
      -26,
      13
    ],
    [
      -23,
      -3
    ],
    [
      -38,
      18
    ],
    [
      -2,
      43
    ],
    [
      -11,
      32
    ],
    [
      -30,
      38
    ],
    [
      -143,
      71
    ],
    [
      0,
      -30
    ],
    [
      10,
      -22
    ],
    [
      20,
      -15
    ],
    [
      25,
      -28
    ],
    [
      -1,
      -86
    ],
    [
      -10,
      -36
    ],
    [
      -5,
      -51
    ],
    [
      -9,
      -53
    ],
    [
      -18,
      -41
    ],
    [
      -39,
      -28
    ],
    [
      -17,
      24
    ],
    [
      -28,
      112
    ],
    [
      -39,
      36
    ],
    [
      -63,
      4
    ],
    [
      -42,
      -26
    ],
    [
      -46,
      -109
    ],
    [
      -37,
      -18
    ],
    [
      -128,
      57
    ],
    [
      -146,
      86
    ],
    [
      4,
      29
    ],
    [
      23,
      9
    ],
    [
      44,
      -12
    ],
    [
      -2,
      30
    ],
    [
      -45,
      96
    ],
    [
      -8,
      43
    ],
    [
      5,
      53
    ],
    [
      -14,
      -1
    ],
    [
      -27,
      -44
    ],
    [
      -93,
      37
    ],
    [
      -26,
      46
    ],
    [
      -54,
      127
    ],
    [
      -77,
      4
    ],
    [
      -35,
      77
    ],
    [
      -63,
      -32
    ],
    [
      -32,
      -36
    ],
    [
      -28,
      -55
    ],
    [
      11,
      -29
    ],
    [
      28,
      -46
    ],
    [
      -13,
      -22
    ],
    [
      -89,
      -32
    ],
    [
      -209,
      36
    ],
    [
      -60,
      34
    ],
    [
      -82,
      72
    ],
    [
      -113,
      58
    ],
    [
      -55,
      10
    ],
    [
      -53,
      -12
    ],
    [
      -155,
      -6
    ],
    [
      -36,
      -15
    ],
    [
      -31,
      -25
    ],
    [
      -20,
      27
    ],
    [
      -9,
      49
    ],
    [
      18,
      8
    ],
    [
      20,
      29
    ],
    [
      18,
      57
    ],
    [
      2,
      35
    ],
    [
      -12,
      22
    ]
  ],
  [
    [
      42767,
      9939
    ],
    [
      34,
      90
    ],
    [
      8,
      33
    ],
    [
      -5,
      153
    ],
    [
      -15,
      56
    ],
    [
      2,
      32
    ],
    [
      16,
      84
    ],
    [
      -3,
      77
    ],
    [
      28,
      92
    ],
    [
      20,
      48
    ],
    [
      23,
      99
    ],
    [
      6,
      64
    ],
    [
      10,
      48
    ],
    [
      -7,
      52
    ],
    [
      16,
      37
    ],
    [
      -10,
      52
    ],
    [
      -4,
      69
    ],
    [
      -20,
      27
    ],
    [
      -34,
      101
    ],
    [
      1,
      45
    ],
    [
      -37,
      95
    ],
    [
      -1,
      33
    ],
    [
      -35,
      50
    ],
    [
      -7,
      31
    ],
    [
      -3,
      132
    ],
    [
      -10,
      39
    ],
    [
      -30,
      76
    ],
    [
      -70,
      110
    ],
    [
      0,
      114
    ],
    [
      1,
      115
    ],
    [
      0,
      114
    ],
    [
      0,
      114
    ],
    [
      0,
      114
    ],
    [
      0,
      114
    ],
    [
      0,
      115
    ],
    [
      0,
      114
    ]
  ],
  [
    [
      45082,
      10036
    ],
    [
      2,
      -42
    ],
    [
      -25,
      21
    ],
    [
      -37,
      1
    ],
    [
      17,
      15
    ],
    [
      11,
      14
    ],
    [
      6,
      15
    ],
    [
      46,
      52
    ],
    [
      -13,
      -38
    ],
    [
      -7,
      -38
    ]
  ],
  [
    [
      45283,
      9786
    ],
    [
      -14,
      -29
    ],
    [
      14,
      138
    ],
    [
      -20,
      116
    ],
    [
      21,
      -51
    ],
    [
      7,
      -60
    ],
    [
      -8,
      -114
    ]
  ],
  [
    [
      45252,
      9700
    ],
    [
      -28,
      -47
    ],
    [
      2,
      18
    ],
    [
      20,
      47
    ],
    [
      14,
      19
    ],
    [
      -8,
      -37
    ]
  ],
  [
    [
      43780,
      9509
    ],
    [
      -19,
      -13
    ],
    [
      -83,
      78
    ],
    [
      -6,
      34
    ],
    [
      42,
      30
    ],
    [
      25,
      -2
    ],
    [
      40,
      -40
    ],
    [
      14,
      -11
    ],
    [
      7,
      -16
    ],
    [
      -4,
      -25
    ],
    [
      -16,
      -35
    ]
  ],
  [
    [
      53060,
      20840
    ],
    [
      -14,
      22
    ],
    [
      16,
      75
    ],
    [
      16,
      76
    ],
    [
      16,
      76
    ],
    [
      16,
      76
    ],
    [
      17,
      76
    ],
    [
      16,
      76
    ],
    [
      16,
      75
    ],
    [
      16,
      76
    ]
  ],
  [
    [
      53175,
      21468
    ],
    [
      50,
      -2
    ],
    [
      49,
      -3
    ],
    [
      50,
      -2
    ],
    [
      50,
      -3
    ],
    [
      50,
      -2
    ],
    [
      50,
      -3
    ],
    [
      49,
      -2
    ],
    [
      50,
      -3
    ]
  ],
  [
    [
      53573,
      21448
    ],
    [
      72,
      -3
    ],
    [
      72,
      -3
    ],
    [
      72,
      -3
    ],
    [
      72,
      -3
    ],
    [
      72,
      -3
    ],
    [
      72,
      -3
    ],
    [
      73,
      -3
    ],
    [
      72,
      -4
    ],
    [
      44,
      25
    ],
    [
      52,
      71
    ],
    [
      32,
      15
    ],
    [
      52,
      42
    ],
    [
      25,
      9
    ],
    [
      60,
      -4
    ]
  ],
  [
    [
      54415,
      21581
    ],
    [
      -12,
      -47
    ],
    [
      15,
      -46
    ],
    [
      9,
      -48
    ],
    [
      24,
      -47
    ],
    [
      19,
      -4
    ],
    [
      21,
      9
    ],
    [
      16,
      -2
    ],
    [
      10,
      -20
    ],
    [
      -4,
      -24
    ],
    [
      -25,
      -6
    ],
    [
      -46,
      -42
    ],
    [
      -40,
      -16
    ],
    [
      -20,
      -50
    ],
    [
      -30,
      -59
    ],
    [
      -59,
      -91
    ],
    [
      25,
      -28
    ],
    [
      91,
      -31
    ],
    [
      40,
      -33
    ],
    [
      61,
      -170
    ],
    [
      -14,
      -17
    ],
    [
      -5,
      -31
    ],
    [
      54,
      -44
    ],
    [
      18,
      -122
    ],
    [
      44,
      -42
    ],
    [
      67,
      -25
    ],
    [
      81,
      37
    ],
    [
      68,
      51
    ],
    [
      -3,
      41
    ],
    [
      -42,
      97
    ],
    [
      -11,
      46
    ],
    [
      -31,
      29
    ],
    [
      -12,
      -25
    ],
    [
      -21,
      33
    ],
    [
      -2,
      18
    ],
    [
      19,
      9
    ],
    [
      22,
      -4
    ],
    [
      26,
      -17
    ],
    [
      66,
      -106
    ],
    [
      19,
      -138
    ],
    [
      4,
      -88
    ],
    [
      -8,
      -30
    ],
    [
      -19,
      6
    ],
    [
      -37,
      -6
    ],
    [
      -175,
      -45
    ],
    [
      -39,
      -40
    ],
    [
      -89,
      -44
    ],
    [
      -5,
      22
    ],
    [
      6,
      45
    ],
    [
      -5,
      92
    ],
    [
      -18,
      4
    ],
    [
      -138,
      -150
    ],
    [
      -54,
      -9
    ],
    [
      -45,
      -44
    ],
    [
      -10,
      24
    ],
    [
      -8,
      113
    ],
    [
      28,
      94
    ],
    [
      -15,
      -2
    ],
    [
      -28,
      -33
    ]
  ],
  [
    [
      54198,
      20525
    ],
    [
      -17,
      40
    ],
    [
      -19,
      21
    ],
    [
      -18,
      21
    ],
    [
      1,
      34
    ],
    [
      1,
      50
    ],
    [
      -21,
      10
    ],
    [
      -3,
      63
    ],
    [
      -2,
      41
    ],
    [
      -38,
      -1
    ],
    [
      -31,
      -1
    ],
    [
      -50,
      -1
    ],
    [
      -52,
      -1
    ],
    [
      -38,
      -1
    ]
  ],
  [
    [
      54565,
      20227
    ],
    [
      -140,
      -45
    ],
    [
      -22,
      29
    ],
    [
      35,
      13
    ],
    [
      44,
      68
    ],
    [
      29,
      8
    ],
    [
      46,
      -39
    ],
    [
      8,
      -34
    ]
  ],
  [
    [
      54834,
      20127
    ],
    [
      -39,
      -15
    ],
    [
      -90,
      33
    ],
    [
      74,
      29
    ],
    [
      13,
      9
    ],
    [
      9,
      42
    ],
    [
      1,
      21
    ],
    [
      29,
      -90
    ],
    [
      3,
      -29
    ]
  ],
  [
    [
      51261,
      17982
    ],
    [
      5,
      -75
    ],
    [
      45,
      74
    ],
    [
      -29,
      58
    ],
    [
      -27,
      54
    ],
    [
      -41,
      -62
    ]
  ],
  [
    [
      51214,
      18031
    ],
    [
      -34,
      23
    ],
    [
      -56,
      76
    ],
    [
      -91,
      54
    ],
    [
      -13,
      27
    ],
    [
      1,
      29
    ],
    [
      13,
      41
    ],
    [
      -28,
      41
    ],
    [
      -69,
      39
    ],
    [
      -29,
      34
    ]
  ],
  [
    [
      50908,
      18395
    ],
    [
      -6,
      7
    ],
    [
      -3,
      41
    ],
    [
      -9,
      26
    ],
    [
      -15,
      12
    ],
    [
      -3,
      17
    ],
    [
      9,
      25
    ],
    [
      -9,
      26
    ],
    [
      -28,
      28
    ],
    [
      -10,
      25
    ],
    [
      9,
      21
    ],
    [
      -14,
      10
    ],
    [
      -37,
      -2
    ],
    [
      -36,
      21
    ],
    [
      -36,
      42
    ],
    [
      -42,
      7
    ],
    [
      -73,
      -42
    ],
    [
      -42,
      -10
    ],
    [
      -18,
      -24
    ],
    [
      -9,
      -41
    ],
    [
      -17,
      -21
    ],
    [
      -41,
      0
    ],
    [
      -6,
      1
    ],
    [
      -46,
      14
    ],
    [
      -32,
      26
    ],
    [
      -6,
      10
    ],
    [
      3,
      22
    ],
    [
      -6,
      10
    ],
    [
      -9,
      2
    ],
    [
      -10,
      -13
    ],
    [
      -9,
      -39
    ],
    [
      -80,
      -105
    ],
    [
      -38,
      21
    ],
    [
      -14,
      0
    ],
    [
      -111,
      -149
    ],
    [
      -33,
      -23
    ],
    [
      -65,
      -68
    ],
    [
      1,
      116
    ],
    [
      1,
      115
    ],
    [
      2,
      116
    ],
    [
      1,
      115
    ]
  ],
  [
    [
      50021,
      18734
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      116,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ],
    [
      117,
      0
    ]
  ],
  [
    [
      52271,
      17591
    ],
    [
      -1,
      -27
    ],
    [
      -6,
      -39
    ],
    [
      -12,
      -15
    ],
    [
      1,
      40
    ],
    [
      -9,
      13
    ],
    [
      -13,
      -17
    ],
    [
      -9,
      -20
    ],
    [
      -4,
      -77
    ],
    [
      -9,
      -39
    ],
    [
      -33,
      -12
    ],
    [
      -34,
      -102
    ],
    [
      -31,
      -58
    ],
    [
      -12,
      -36
    ]
  ],
  [
    [
      52099,
      17202
    ],
    [
      -47,
      -9
    ],
    [
      -76,
      -14
    ],
    [
      -20,
      -41
    ]
  ],
  [
    [
      51956,
      17138
    ],
    [
      -39,
      18
    ],
    [
      -58,
      -2
    ],
    [
      11,
      55
    ],
    [
      17,
      49
    ],
    [
      -31,
      48
    ],
    [
      -18,
      6
    ],
    [
      -19,
      20
    ],
    [
      22,
      41
    ],
    [
      11,
      42
    ],
    [
      -7,
      52
    ],
    [
      10,
      39
    ],
    [
      -16,
      -6
    ],
    [
      -24,
      -41
    ],
    [
      -15,
      -17
    ],
    [
      -10,
      37
    ],
    [
      -10,
      -8
    ],
    [
      -7,
      -25
    ],
    [
      -16,
      -14
    ],
    [
      -33,
      34
    ],
    [
      -48,
      40
    ],
    [
      -27,
      67
    ],
    [
      -15,
      53
    ],
    [
      15,
      95
    ],
    [
      34,
      17
    ],
    [
      43,
      -16
    ],
    [
      57,
      1
    ],
    [
      -9,
      21
    ],
    [
      -20,
      -4
    ],
    [
      -60,
      77
    ],
    [
      -19,
      47
    ],
    [
      -33,
      13
    ],
    [
      -15,
      -45
    ],
    [
      -17,
      -12
    ],
    [
      21,
      98
    ],
    [
      27,
      4
    ],
    [
      40,
      27
    ],
    [
      -12,
      57
    ],
    [
      -25,
      25
    ],
    [
      -46,
      -31
    ],
    [
      1,
      39
    ],
    [
      9,
      51
    ],
    [
      34,
      0
    ],
    [
      30,
      -16
    ],
    [
      26,
      82
    ],
    [
      1,
      37
    ],
    [
      -43,
      -54
    ],
    [
      -9,
      116
    ],
    [
      41,
      111
    ],
    [
      40,
      49
    ],
    [
      50,
      -2
    ],
    [
      51,
      8
    ],
    [
      -32,
      21
    ],
    [
      -33,
      11
    ],
    [
      25,
      44
    ],
    [
      21,
      8
    ],
    [
      20,
      38
    ],
    [
      -49,
      -6
    ],
    [
      6,
      73
    ],
    [
      -24,
      -15
    ],
    [
      -29,
      -7
    ],
    [
      -11,
      -30
    ],
    [
      2,
      -52
    ],
    [
      -8,
      -33
    ],
    [
      -23,
      -27
    ],
    [
      -37,
      -21
    ],
    [
      -4,
      36
    ],
    [
      -12,
      17
    ],
    [
      -5,
      -78
    ],
    [
      -10,
      -27
    ],
    [
      -28,
      74
    ],
    [
      -8,
      -15
    ],
    [
      1,
      -21
    ],
    [
      -7,
      -36
    ],
    [
      -24,
      -19
    ],
    [
      2,
      -46
    ],
    [
      -9,
      -25
    ],
    [
      -76,
      40
    ],
    [
      -2,
      -13
    ],
    [
      43,
      -87
    ],
    [
      31,
      -29
    ],
    [
      4,
      -47
    ],
    [
      -27,
      -39
    ],
    [
      -37,
      33
    ],
    [
      -6,
      -2
    ],
    [
      20,
      -58
    ],
    [
      13,
      -50
    ],
    [
      -13,
      -43
    ],
    [
      2,
      -52
    ],
    [
      -3,
      -47
    ],
    [
      -8,
      -41
    ],
    [
      18,
      -190
    ],
    [
      22,
      -52
    ],
    [
      21,
      -49
    ],
    [
      11,
      -46
    ],
    [
      -22,
      -7
    ],
    [
      -36,
      38
    ],
    [
      -32,
      29
    ],
    [
      -38,
      93
    ],
    [
      -6,
      37
    ],
    [
      -9,
      29
    ],
    [
      4,
      -67
    ],
    [
      14,
      -75
    ],
    [
      118,
      -168
    ],
    [
      22,
      -65
    ],
    [
      16,
      -50
    ],
    [
      -4,
      -49
    ],
    [
      -31,
      34
    ],
    [
      -26,
      44
    ],
    [
      -71,
      50
    ],
    [
      -89,
      31
    ],
    [
      -50,
      115
    ],
    [
      0,
      -48
    ],
    [
      -11,
      -41
    ],
    [
      -30,
      50
    ],
    [
      -20,
      42
    ],
    [
      -6,
      46
    ],
    [
      -39,
      -3
    ],
    [
      -40,
      -40
    ],
    [
      -39,
      9
    ],
    [
      -4,
      79
    ],
    [
      10,
      42
    ],
    [
      44,
      98
    ],
    [
      41,
      50
    ],
    [
      18,
      65
    ],
    [
      -6,
      101
    ]
  ],
  [
    [
      52175,
      17216
    ],
    [
      -13,
      -3
    ]
  ],
  [
    [
      52162,
      17213
    ],
    [
      13,
      32
    ],
    [
      45,
      151
    ],
    [
      20,
      53
    ],
    [
      -19,
      -107
    ],
    [
      -34,
      -97
    ],
    [
      -12,
      -29
    ]
  ],
  [
    [
      55303,
      25568
    ],
    [
      2,
      -19
    ],
    [
      23,
      -34
    ],
    [
      34,
      -23
    ],
    [
      25,
      -7
    ],
    [
      30,
      0
    ],
    [
      81,
      45
    ],
    [
      95,
      30
    ],
    [
      53,
      27
    ],
    [
      9,
      26
    ],
    [
      24,
      9
    ],
    [
      38,
      -8
    ],
    [
      71,
      -64
    ],
    [
      82,
      -97
    ],
    [
      65,
      -76
    ],
    [
      2,
      -133
    ],
    [
      1,
      -141
    ],
    [
      1,
      -148
    ],
    [
      1,
      -106
    ],
    [
      2,
      -145
    ],
    [
      1,
      -116
    ],
    [
      2,
      -151
    ],
    [
      1,
      -80
    ],
    [
      9,
      -24
    ],
    [
      -6,
      -31
    ],
    [
      -2,
      -16
    ],
    [
      1,
      -13
    ],
    [
      3,
      -16
    ],
    [
      0,
      -22
    ],
    [
      -9,
      -20
    ],
    [
      -4,
      -23
    ],
    [
      -1,
      -39
    ],
    [
      9,
      -23
    ],
    [
      15,
      -14
    ],
    [
      12,
      0
    ],
    [
      16,
      -13
    ],
    [
      21,
      -25
    ],
    [
      32,
      -21
    ],
    [
      32,
      -7
    ],
    [
      23,
      5
    ],
    [
      27,
      -14
    ],
    [
      10,
      -34
    ],
    [
      -6,
      -32
    ],
    [
      -15,
      -14
    ],
    [
      -17,
      -12
    ],
    [
      -3,
      -24
    ],
    [
      9,
      -26
    ],
    [
      12,
      -22
    ],
    [
      13,
      -39
    ],
    [
      -6,
      -34
    ],
    [
      -12,
      -29
    ],
    [
      -5,
      -29
    ],
    [
      10,
      -26
    ],
    [
      27,
      -34
    ],
    [
      16,
      -32
    ],
    [
      27,
      -18
    ],
    [
      12,
      12
    ],
    [
      10,
      17
    ],
    [
      11,
      13
    ],
    [
      18,
      -7
    ],
    [
      22,
      -10
    ],
    [
      23,
      -11
    ],
    [
      -3,
      -28
    ],
    [
      15,
      -46
    ],
    [
      11,
      -89
    ],
    [
      -17,
      -40
    ],
    [
      3,
      -54
    ],
    [
      47,
      -16
    ],
    [
      12,
      -16
    ],
    [
      2,
      -20
    ],
    [
      -103,
      -137
    ],
    [
      -88,
      19
    ],
    [
      -48,
      -36
    ],
    [
      -49,
      -11
    ],
    [
      -22,
      -61
    ],
    [
      -27,
      -13
    ],
    [
      -38,
      4
    ],
    [
      -32,
      17
    ],
    [
      -25,
      -9
    ],
    [
      -34,
      -110
    ],
    [
      -28,
      9
    ],
    [
      -12,
      -39
    ],
    [
      -14,
      -18
    ],
    [
      -22,
      -15
    ],
    [
      -19,
      49
    ],
    [
      -12,
      47
    ],
    [
      -17,
      10
    ],
    [
      -24,
      12
    ],
    [
      -24,
      0
    ],
    [
      -16,
      -7
    ],
    [
      -20,
      -30
    ],
    [
      -29,
      -26
    ],
    [
      -22,
      22
    ],
    [
      -17,
      34
    ],
    [
      -14,
      -55
    ],
    [
      -21,
      -59
    ],
    [
      3,
      -69
    ],
    [
      -9,
      -41
    ],
    [
      -20,
      11
    ],
    [
      -20,
      36
    ],
    [
      -57,
      28
    ],
    [
      -45,
      -2
    ],
    [
      9,
      38
    ],
    [
      43,
      55
    ],
    [
      -13,
      11
    ],
    [
      -21,
      -8
    ],
    [
      -9,
      8
    ],
    [
      15,
      49
    ],
    [
      1,
      55
    ],
    [
      -19,
      -19
    ],
    [
      -24,
      -58
    ],
    [
      -57,
      -46
    ],
    [
      2,
      -78
    ],
    [
      -54,
      -158
    ],
    [
      -3,
      -68
    ],
    [
      -35,
      -54
    ],
    [
      -45,
      -46
    ],
    [
      -60,
      13
    ],
    [
      -45,
      -40
    ],
    [
      -24,
      -46
    ],
    [
      -20,
      -7
    ],
    [
      -10,
      59
    ],
    [
      -8,
      18
    ],
    [
      -17,
      -87
    ],
    [
      -17,
      -5
    ],
    [
      -7,
      61
    ],
    [
      -8,
      41
    ],
    [
      -23,
      -35
    ],
    [
      -16,
      -93
    ],
    [
      -16,
      8
    ],
    [
      -5,
      34
    ],
    [
      -12,
      11
    ],
    [
      -4,
      -40
    ],
    [
      6,
      -55
    ],
    [
      -9,
      -30
    ],
    [
      -16,
      16
    ],
    [
      -16,
      26
    ],
    [
      -27,
      -20
    ],
    [
      -25,
      -8
    ],
    [
      0,
      27
    ],
    [
      5,
      34
    ],
    [
      -49,
      -19
    ],
    [
      -59,
      -61
    ],
    [
      -46,
      -86
    ],
    [
      16,
      -14
    ],
    [
      18,
      -27
    ],
    [
      -80,
      -132
    ],
    [
      -82,
      -118
    ],
    [
      -61,
      -194
    ],
    [
      -25,
      -22
    ],
    [
      -21,
      -36
    ]
  ],
  [
    [
      54452,
      21755
    ],
    [
      -41,
      85
    ],
    [
      -8,
      68
    ],
    [
      -46,
      80
    ],
    [
      -18,
      55
    ],
    [
      -6,
      62
    ],
    [
      3,
      67
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -3,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      101
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -4,
      100
    ],
    [
      -3,
      89
    ]
  ],
  [
    [
      54274,
      23762
    ],
    [
      12,
      14
    ],
    [
      31,
      25
    ],
    [
      20,
      -4
    ],
    [
      17,
      -38
    ],
    [
      14,
      -25
    ],
    [
      17,
      7
    ],
    [
      14,
      36
    ],
    [
      0,
      50
    ],
    [
      19,
      35
    ],
    [
      24,
      5
    ],
    [
      21,
      -1
    ],
    [
      11,
      17
    ],
    [
      -1,
      25
    ],
    [
      -8,
      39
    ],
    [
      2,
      47
    ],
    [
      54,
      84
    ],
    [
      66,
      57
    ],
    [
      23,
      28
    ],
    [
      7,
      58
    ],
    [
      37,
      59
    ],
    [
      19,
      35
    ],
    [
      5,
      29
    ],
    [
      -10,
      37
    ],
    [
      1,
      70
    ],
    [
      13,
      84
    ],
    [
      15,
      91
    ],
    [
      35,
      82
    ],
    [
      57,
      89
    ],
    [
      15,
      118
    ],
    [
      15,
      124
    ],
    [
      69,
      121
    ],
    [
      78,
      137
    ],
    [
      45,
      78
    ],
    [
      80,
      142
    ],
    [
      57,
      101
    ],
    [
      29,
      47
    ],
    [
      30,
      55
    ],
    [
      49,
      -17
    ],
    [
      49,
      -16
    ],
    [
      -8,
      -80
    ],
    [
      6,
      -39
    ]
  ],
  [
    [
      55742,
      22894
    ],
    [
      -30,
      -17
    ],
    [
      -32,
      8
    ],
    [
      1,
      -48
    ],
    [
      -4,
      -17
    ],
    [
      -36,
      24
    ],
    [
      -13,
      16
    ],
    [
      1,
      63
    ],
    [
      32,
      60
    ],
    [
      24,
      23
    ],
    [
      31,
      -16
    ],
    [
      24,
      -67
    ],
    [
      2,
      -29
    ]
  ],
  [
    [
      55521,
      22771
    ],
    [
      -19,
      -18
    ],
    [
      -21,
      6
    ],
    [
      -1,
      45
    ],
    [
      7,
      15
    ],
    [
      7,
      7
    ],
    [
      10,
      -13
    ],
    [
      17,
      -42
    ]
  ],
  [
    [
      48531,
      21708
    ],
    [
      0,
      0
    ],
    [
      -36,
      -251
    ],
    [
      -29,
      -104
    ],
    [
      -50,
      -60
    ],
    [
      3,
      15
    ],
    [
      5,
      18
    ],
    [
      -2,
      60
    ],
    [
      -9,
      23
    ],
    [
      -18,
      9
    ],
    [
      -23,
      -6
    ],
    [
      -28,
      -23
    ],
    [
      -9,
      -23
    ],
    [
      11,
      -24
    ],
    [
      -7,
      -21
    ],
    [
      -22,
      -19
    ],
    [
      -15,
      -44
    ],
    [
      -7,
      -70
    ],
    [
      -9,
      -43
    ],
    [
      -12,
      -17
    ],
    [
      -46,
      -25
    ],
    [
      -24,
      -22
    ],
    [
      -21,
      -33
    ],
    [
      -19,
      -53
    ],
    [
      -17,
      -74
    ],
    [
      -6,
      -56
    ],
    [
      6,
      -31
    ],
    [
      -15,
      -20
    ],
    [
      -25,
      -38
    ],
    [
      -5,
      -13
    ],
    [
      1,
      -22
    ],
    [
      -5,
      -11
    ],
    [
      -13,
      1
    ],
    [
      -9,
      -11
    ],
    [
      -23,
      -39
    ],
    [
      -40,
      -103
    ],
    [
      -7,
      -18
    ]
  ],
  [
    [
      48006,
      20560
    ],
    [
      -5,
      -6
    ],
    [
      -169,
      -8
    ],
    [
      -169,
      -9
    ],
    [
      -168,
      -8
    ],
    [
      -169,
      -9
    ]
  ],
  [
    [
      46279,
      20573
    ],
    [
      32,
      26
    ],
    [
      55,
      58
    ],
    [
      29,
      52
    ],
    [
      29,
      69
    ],
    [
      28,
      86
    ],
    [
      58,
      127
    ],
    [
      27,
      78
    ],
    [
      27,
      97
    ],
    [
      20,
      103
    ],
    [
      14,
      107
    ],
    [
      6,
      111
    ],
    [
      0,
      115
    ],
    [
      -14,
      116
    ],
    [
      -27,
      117
    ],
    [
      -14,
      59
    ],
    [
      -5,
      16
    ],
    [
      -48,
      149
    ],
    [
      -55,
      208
    ],
    [
      1,
      18
    ],
    [
      51,
      124
    ],
    [
      1,
      16
    ],
    [
      -5,
      101
    ],
    [
      -11,
      50
    ],
    [
      -26,
      68
    ],
    [
      1,
      17
    ],
    [
      52,
      86
    ],
    [
      32,
      66
    ],
    [
      29,
      80
    ],
    [
      19,
      93
    ],
    [
      8,
      106
    ],
    [
      0,
      71
    ],
    [
      -9,
      35
    ],
    [
      1,
      27
    ],
    [
      11,
      19
    ],
    [
      56,
      25
    ],
    [
      19,
      42
    ],
    [
      4,
      74
    ],
    [
      12,
      36
    ],
    [
      19,
      0
    ],
    [
      18,
      15
    ],
    [
      16,
      31
    ],
    [
      21,
      8
    ],
    [
      27,
      -13
    ],
    [
      37,
      46
    ],
    [
      48,
      104
    ],
    [
      37,
      59
    ],
    [
      26,
      12
    ],
    [
      5,
      -9
    ],
    [
      -16,
      -32
    ],
    [
      -5,
      -34
    ],
    [
      6,
      -37
    ],
    [
      -5,
      -36
    ],
    [
      -12,
      -50
    ],
    [
      7,
      -15
    ],
    [
      -20,
      -80
    ],
    [
      -1,
      -40
    ],
    [
      12,
      -30
    ],
    [
      15,
      10
    ],
    [
      17,
      52
    ],
    [
      5,
      27
    ],
    [
      -7,
      4
    ],
    [
      3,
      22
    ],
    [
      12,
      40
    ],
    [
      11,
      19
    ],
    [
      9,
      -2
    ],
    [
      3,
      -22
    ],
    [
      -4,
      -42
    ],
    [
      -28,
      -98
    ],
    [
      -5,
      -31
    ],
    [
      6,
      -8
    ],
    [
      33,
      62
    ],
    [
      28,
      98
    ],
    [
      21,
      75
    ],
    [
      3,
      41
    ],
    [
      -6,
      106
    ],
    [
      1,
      44
    ],
    [
      8,
      30
    ],
    [
      29,
      34
    ],
    [
      49,
      37
    ],
    [
      48,
      20
    ],
    [
      48,
      3
    ],
    [
      33,
      10
    ],
    [
      19,
      18
    ],
    [
      -6,
      15
    ],
    [
      -33,
      10
    ],
    [
      -24,
      24
    ],
    [
      -17,
      36
    ],
    [
      -5,
      42
    ],
    [
      5,
      47
    ],
    [
      21,
      46
    ],
    [
      35,
      45
    ],
    [
      11,
      34
    ],
    [
      -13,
      21
    ],
    [
      15,
      8
    ],
    [
      44,
      -7
    ],
    [
      30,
      6
    ],
    [
      17,
      18
    ],
    [
      5,
      -2
    ],
    [
      36,
      -17
    ],
    [
      65,
      -55
    ],
    [
      62,
      -33
    ],
    [
      58,
      -9
    ],
    [
      43,
      -20
    ],
    [
      26,
      -30
    ],
    [
      20,
      -33
    ],
    [
      12,
      -38
    ],
    [
      27,
      -21
    ],
    [
      44,
      -5
    ],
    [
      35,
      -15
    ],
    [
      25,
      -27
    ],
    [
      139,
      -70
    ],
    [
      59,
      -36
    ],
    [
      32,
      -36
    ],
    [
      9,
      -23
    ],
    [
      -3,
      -23
    ],
    [
      3,
      -24
    ],
    [
      24,
      -48
    ],
    [
      9,
      -4
    ],
    [
      6,
      -23
    ],
    [
      2,
      -41
    ],
    [
      7,
      -28
    ],
    [
      12,
      -14
    ],
    [
      -7,
      -6
    ],
    [
      -43,
      24
    ],
    [
      -25,
      -7
    ],
    [
      -11,
      -31
    ],
    [
      -2,
      -29
    ],
    [
      8,
      -28
    ],
    [
      55,
      -83
    ],
    [
      14,
      -76
    ],
    [
      3,
      -92
    ],
    [
      -7,
      -36
    ],
    [
      -6,
      -78
    ],
    [
      -4,
      -122
    ],
    [
      -1,
      -42
    ],
    [
      -19,
      -41
    ],
    [
      -48,
      -59
    ],
    [
      -1,
      12
    ],
    [
      -12,
      3
    ],
    [
      -13,
      -9
    ],
    [
      -17,
      -51
    ],
    [
      -16,
      -91
    ],
    [
      -18,
      -50
    ],
    [
      -22,
      -8
    ],
    [
      -13,
      -13
    ],
    [
      -4,
      -19
    ],
    [
      -24,
      -12
    ],
    [
      -42,
      -7
    ],
    [
      -29,
      -27
    ],
    [
      -22,
      -79
    ],
    [
      1,
      -38
    ],
    [
      -10,
      -46
    ],
    [
      1,
      -41
    ],
    [
      11,
      -33
    ],
    [
      34,
      -33
    ],
    [
      58,
      -34
    ],
    [
      34,
      -5
    ],
    [
      23,
      14
    ],
    [
      25,
      55
    ],
    [
      24,
      21
    ],
    [
      28,
      10
    ],
    [
      11,
      24
    ],
    [
      48,
      109
    ],
    [
      0,
      25
    ],
    [
      -17,
      9
    ],
    [
      2,
      7
    ],
    [
      23,
      4
    ],
    [
      19,
      15
    ],
    [
      17,
      25
    ],
    [
      29,
      19
    ],
    [
      71,
      28
    ],
    [
      38,
      32
    ],
    [
      24,
      6
    ],
    [
      35,
      -18
    ],
    [
      46,
      -39
    ],
    [
      36,
      -59
    ],
    [
      27,
      -76
    ],
    [
      33,
      -199
    ],
    [
      41,
      -320
    ],
    [
      28,
      -179
    ],
    [
      15,
      -38
    ],
    [
      7,
      -19
    ],
    [
      0,
      0
    ]
  ],
  [
    [
      45902,
      23595
    ],
    [
      -24,
      12
    ],
    [
      -21,
      35
    ],
    [
      -12,
      36
    ],
    [
      -1,
      38
    ],
    [
      29,
      92
    ],
    [
      3,
      15
    ],
    [
      -3,
      9
    ],
    [
      -17,
      10
    ],
    [
      -36,
      -16
    ],
    [
      -37,
      -4
    ],
    [
      -12,
      7
    ],
    [
      -5,
      16
    ],
    [
      0,
      24
    ],
    [
      8,
      30
    ],
    [
      22,
      54
    ],
    [
      0,
      52
    ],
    [
      11,
      30
    ],
    [
      -10,
      55
    ],
    [
      2,
      26
    ],
    [
      -15,
      29
    ],
    [
      -42,
      38
    ],
    [
      -98,
      50
    ],
    [
      10,
      57
    ],
    [
      -4,
      24
    ],
    [
      -24,
      36
    ],
    [
      -103,
      42
    ],
    [
      -70,
      19
    ],
    [
      -69,
      1
    ],
    [
      -50,
      15
    ],
    [
      -56,
      5
    ],
    [
      -35,
      26
    ],
    [
      -36,
      25
    ],
    [
      -36,
      26
    ],
    [
      -36,
      25
    ],
    [
      -63,
      22
    ],
    [
      -63,
      21
    ],
    [
      -64,
      22
    ],
    [
      -63,
      22
    ],
    [
      -63,
      21
    ],
    [
      -63,
      22
    ],
    [
      -64,
      22
    ],
    [
      -63,
      22
    ],
    [
      -14,
      38
    ],
    [
      -14,
      37
    ],
    [
      -14,
      38
    ],
    [
      -15,
      38
    ],
    [
      -29,
      16
    ],
    [
      -15,
      9
    ],
    [
      -12,
      19
    ],
    [
      -26,
      -8
    ],
    [
      -10,
      32
    ],
    [
      3,
      7
    ]
  ],
  [
    [
      44483,
      24934
    ],
    [
      33,
      9
    ],
    [
      95,
      47
    ],
    [
      81,
      57
    ],
    [
      68,
      68
    ],
    [
      84,
      41
    ],
    [
      100,
      15
    ],
    [
      72,
      24
    ],
    [
      43,
      33
    ],
    [
      58,
      63
    ],
    [
      33,
      19
    ],
    [
      41,
      6
    ],
    [
      31,
      25
    ],
    [
      21,
      43
    ],
    [
      39,
      49
    ],
    [
      58,
      56
    ],
    [
      33,
      22
    ],
    [
      8,
      -10
    ],
    [
      3,
      -20
    ],
    [
      -2,
      -29
    ],
    [
      14,
      -23
    ],
    [
      31,
      -18
    ],
    [
      14,
      -23
    ],
    [
      -2,
      -29
    ],
    [
      8,
      -25
    ],
    [
      19,
      -21
    ],
    [
      6,
      -45
    ],
    [
      -10,
      -69
    ],
    [
      -1,
      -45
    ],
    [
      7,
      -20
    ],
    [
      7,
      -11
    ],
    [
      11,
      11
    ],
    [
      14,
      24
    ],
    [
      5,
      15
    ],
    [
      3,
      15
    ],
    [
      85,
      70
    ],
    [
      16,
      3
    ],
    [
      28,
      -17
    ],
    [
      128,
      -26
    ],
    [
      50,
      -17
    ],
    [
      53,
      -40
    ],
    [
      18,
      -16
    ],
    [
      65,
      -129
    ],
    [
      30,
      -50
    ],
    [
      18,
      -14
    ],
    [
      10,
      -20
    ],
    [
      9,
      -46
    ],
    [
      10,
      -13
    ],
    [
      95,
      -10
    ],
    [
      43,
      8
    ],
    [
      26,
      19
    ],
    [
      29,
      -12
    ],
    [
      32,
      -43
    ],
    [
      31,
      -11
    ],
    [
      31,
      18
    ],
    [
      30,
      0
    ],
    [
      27,
      -20
    ],
    [
      13,
      -15
    ],
    [
      8,
      1
    ],
    [
      54,
      65
    ],
    [
      65,
      57
    ],
    [
      87,
      62
    ],
    [
      50,
      27
    ],
    [
      14,
      -7
    ],
    [
      80,
      21
    ],
    [
      72,
      2
    ],
    [
      95,
      -12
    ],
    [
      89,
      14
    ],
    [
      81,
      41
    ],
    [
      72,
      23
    ],
    [
      63,
      5
    ],
    [
      24,
      -11
    ],
    [
      -15,
      -28
    ],
    [
      -9,
      -48
    ],
    [
      -1,
      -68
    ],
    [
      -5,
      -43
    ],
    [
      -10,
      -19
    ],
    [
      -1,
      -17
    ],
    [
      7,
      -16
    ],
    [
      61,
      -11
    ],
    [
      32,
      -22
    ],
    [
      37,
      -1
    ],
    [
      41,
      20
    ],
    [
      32,
      -7
    ],
    [
      22,
      -36
    ],
    [
      32,
      -6
    ],
    [
      31,
      25
    ],
    [
      21,
      24
    ],
    [
      19,
      11
    ],
    [
      15,
      2
    ],
    [
      15,
      -12
    ],
    [
      11,
      -20
    ],
    [
      26,
      -56
    ],
    [
      13,
      -38
    ],
    [
      8,
      -56
    ],
    [
      6,
      -18
    ],
    [
      -1,
      -33
    ],
    [
      -17,
      -22
    ],
    [
      -5,
      -17
    ],
    [
      10,
      -18
    ],
    [
      60,
      -5
    ],
    [
      28,
      -17
    ],
    [
      10,
      -20
    ],
    [
      -7,
      -21
    ],
    [
      4,
      -23
    ],
    [
      14,
      -24
    ],
    [
      48,
      -37
    ],
    [
      12,
      -18
    ],
    [
      -3,
      -18
    ],
    [
      -15,
      -12
    ],
    [
      -25,
      -5
    ],
    [
      -183,
      34
    ],
    [
      -54,
      6
    ],
    [
      -8,
      -13
    ],
    [
      -5,
      -2
    ],
    [
      -9,
      4
    ],
    [
      -16,
      0
    ],
    [
      -8,
      9
    ],
    [
      -6,
      23
    ],
    [
      -16,
      14
    ],
    [
      -26,
      7
    ],
    [
      -22,
      -18
    ],
    [
      -25,
      -68
    ],
    [
      4,
      -13
    ],
    [
      -4,
      -44
    ],
    [
      6,
      -12
    ],
    [
      0,
      -10
    ],
    [
      -7,
      -8
    ],
    [
      -15,
      1
    ],
    [
      -23,
      11
    ],
    [
      -86,
      103
    ],
    [
      -65,
      52
    ],
    [
      -81,
      38
    ],
    [
      -64,
      18
    ],
    [
      -47,
      -1
    ],
    [
      -39,
      -26
    ],
    [
      -30,
      -52
    ],
    [
      -47,
      -30
    ],
    [
      -64,
      -7
    ],
    [
      -35,
      -14
    ],
    [
      -5,
      -21
    ],
    [
      -23,
      0
    ],
    [
      -41,
      20
    ],
    [
      -42,
      5
    ],
    [
      -44,
      -8
    ],
    [
      -32,
      -21
    ],
    [
      -33,
      -64
    ],
    [
      -7,
      -31
    ],
    [
      -25,
      -28
    ],
    [
      -64,
      -42
    ],
    [
      -4,
      -16
    ],
    [
      -34,
      -49
    ],
    [
      -10,
      -27
    ],
    [
      0,
      -26
    ],
    [
      -12,
      1
    ],
    [
      -23,
      30
    ],
    [
      0,
      40
    ],
    [
      21,
      50
    ],
    [
      19,
      24
    ],
    [
      16,
      -2
    ],
    [
      11,
      22
    ],
    [
      3,
      46
    ],
    [
      -6,
      23
    ],
    [
      -32,
      -9
    ],
    [
      -17,
      -18
    ],
    [
      -21,
      -4
    ],
    [
      -26,
      10
    ],
    [
      -23,
      -25
    ],
    [
      -19,
      -60
    ],
    [
      -24,
      -40
    ],
    [
      -27,
      -18
    ],
    [
      -19,
      20
    ],
    [
      -9,
      60
    ],
    [
      0,
      48
    ],
    [
      11,
      57
    ],
    [
      -6,
      11
    ],
    [
      -11,
      -19
    ],
    [
      -18,
      -47
    ],
    [
      -23,
      -104
    ],
    [
      -15,
      -33
    ],
    [
      -20,
      -14
    ],
    [
      -31,
      -63
    ],
    [
      -44,
      -111
    ],
    [
      -49,
      -108
    ],
    [
      -54,
      -105
    ],
    [
      -33,
      -56
    ],
    [
      -11,
      -8
    ],
    [
      -5,
      -18
    ],
    [
      -2,
      -44
    ]
  ],
  [
    [
      45809,
      25673
    ],
    [
      -117,
      -17
    ],
    [
      -3,
      -6
    ],
    [
      22,
      -16
    ],
    [
      4,
      -12
    ],
    [
      -20,
      -31
    ],
    [
      -105,
      -99
    ],
    [
      -9,
      -29
    ],
    [
      2,
      -18
    ],
    [
      -62,
      -77
    ],
    [
      -22,
      -49
    ],
    [
      -19,
      -8
    ],
    [
      -15,
      34
    ],
    [
      0,
      26
    ],
    [
      15,
      21
    ],
    [
      15,
      28
    ],
    [
      2,
      40
    ],
    [
      -6,
      15
    ],
    [
      -18,
      -36
    ],
    [
      10,
      -8
    ],
    [
      3,
      -6
    ],
    [
      -3,
      -13
    ],
    [
      -71,
      19
    ],
    [
      -21,
      28
    ],
    [
      3,
      39
    ],
    [
      24,
      49
    ],
    [
      85,
      106
    ],
    [
      37,
      29
    ],
    [
      107,
      46
    ],
    [
      58,
      11
    ],
    [
      59,
      0
    ],
    [
      43,
      -16
    ],
    [
      27,
      -30
    ],
    [
      -25,
      -20
    ]
  ],
  [
    [
      45241,
      26147
    ],
    [
      -22,
      -10
    ],
    [
      -3,
      -14
    ],
    [
      18,
      -5
    ],
    [
      -3,
      -7
    ],
    [
      -20,
      -14
    ],
    [
      -57,
      -28
    ],
    [
      -38,
      -8
    ],
    [
      -19,
      9
    ],
    [
      -2,
      19
    ],
    [
      15,
      27
    ],
    [
      0,
      13
    ],
    [
      -16,
      0
    ],
    [
      4,
      11
    ],
    [
      23,
      21
    ],
    [
      199,
      137
    ],
    [
      84,
      49
    ],
    [
      46,
      16
    ],
    [
      7,
      -8
    ],
    [
      -49,
      -51
    ],
    [
      -8,
      -21
    ],
    [
      2,
      -14
    ],
    [
      -16,
      -27
    ],
    [
      -145,
      -95
    ]
  ],
  [
    [
      46973,
      24183
    ],
    [
      -4,
      -9
    ],
    [
      4,
      -79
    ],
    [
      -8,
      -35
    ],
    [
      -22,
      -19
    ],
    [
      -17,
      -5
    ],
    [
      -14,
      11
    ],
    [
      3,
      42
    ],
    [
      17,
      74
    ],
    [
      18,
      34
    ],
    [
      23,
      -14
    ]
  ],
  [
    [
      47512,
      24225
    ],
    [
      6,
      7
    ],
    [
      19,
      -24
    ],
    [
      2,
      -20
    ],
    [
      -7,
      -17
    ],
    [
      -12,
      -10
    ],
    [
      -14,
      -1
    ],
    [
      -24,
      17
    ],
    [
      -38,
      45
    ],
    [
      3,
      15
    ],
    [
      65,
      -12
    ]
  ],
  [
    [
      47968,
      24421
    ],
    [
      13,
      -10
    ],
    [
      5,
      -20
    ],
    [
      -12,
      -30
    ],
    [
      -36,
      -15
    ],
    [
      -72,
      2
    ],
    [
      -47,
      11
    ],
    [
      -22,
      21
    ],
    [
      -4,
      11
    ],
    [
      2,
      24
    ],
    [
      10,
      2
    ],
    [
      15,
      -13
    ],
    [
      23,
      5
    ],
    [
      31,
      24
    ],
    [
      16,
      18
    ],
    [
      1,
      12
    ],
    [
      -9,
      23
    ],
    [
      8,
      9
    ],
    [
      38,
      -9
    ],
    [
      14,
      -14
    ],
    [
      26,
      -51
    ]
  ],
  [
    [
      47644,
      24692
    ],
    [
      16,
      -16
    ],
    [
      9,
      -19
    ],
    [
      2,
      -22
    ],
    [
      -3,
      -14
    ],
    [
      -7,
      -5
    ],
    [
      -25,
      35
    ],
    [
      -6,
      22
    ],
    [
      4,
      18
    ],
    [
      10,
      1
    ]
  ],
  [
    [
      47662,
      24707
    ],
    [
      -15,
      4
    ],
    [
      -13,
      13
    ],
    [
      -11,
      22
    ],
    [
      -13,
      54
    ],
    [
      -20,
      39
    ],
    [
      30,
      44
    ],
    [
      18,
      5
    ],
    [
      19,
      -10
    ],
    [
      3,
      -25
    ],
    [
      -14,
      -41
    ],
    [
      0,
      -43
    ],
    [
      16,
      -43
    ],
    [
      0,
      -19
    ]
  ],
  [
    [
      46689,
      23638
    ],
    [
      28,
      -6
    ],
    [
      9,
      -16
    ],
    [
      2,
      -27
    ],
    [
      -6,
      -13
    ],
    [
      -14,
      1
    ],
    [
      -11,
      13
    ],
    [
      -11,
      39
    ],
    [
      3,
      9
    ]
  ],
  [
    [
      41028,
      27101
    ],
    [
      62,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      119,
      -2
    ],
    [
      2,
      191
    ],
    [
      2,
      150
    ],
    [
      109,
      -18
    ],
    [
      33,
      -27
    ],
    [
      10,
      -13
    ],
    [
      -3,
      -42
    ],
    [
      9,
      -126
    ],
    [
      20,
      -105
    ],
    [
      46,
      -126
    ],
    [
      0,
      0
    ],
    [
      4,
      -49
    ],
    [
      15,
      -31
    ],
    [
      28,
      -29
    ],
    [
      104,
      -34
    ],
    [
      182,
      -41
    ],
    [
      103,
      -47
    ],
    [
      25,
      -52
    ],
    [
      48,
      -22
    ],
    [
      73,
      11
    ],
    [
      51,
      22
    ],
    [
      43,
      50
    ],
    [
      61,
      11
    ],
    [
      52,
      -3
    ],
    [
      53,
      -5
    ],
    [
      28,
      -8
    ],
    [
      81,
      -39
    ],
    [
      52,
      -33
    ],
    [
      76,
      -60
    ],
    [
      42,
      -27
    ],
    [
      20,
      -63
    ],
    [
      24,
      -80
    ],
    [
      33,
      0
    ],
    [
      25,
      47
    ],
    [
      65,
      9
    ],
    [
      84,
      -33
    ],
    [
      74,
      -94
    ],
    [
      107,
      -84
    ],
    [
      66,
      -42
    ],
    [
      66,
      0
    ],
    [
      85,
      42
    ],
    [
      89,
      80
    ],
    [
      65,
      14
    ],
    [
      38,
      -8
    ],
    [
      22,
      -62
    ],
    [
      27,
      -24
    ],
    [
      69,
      7
    ],
    [
      146,
      -12
    ],
    [
      116,
      17
    ],
    [
      26,
      -36
    ],
    [
      23,
      -57
    ],
    [
      47,
      -18
    ],
    [
      64,
      18
    ],
    [
      100,
      -12
    ],
    [
      -14,
      -9
    ],
    [
      -14,
      2
    ],
    [
      -20,
      -14
    ],
    [
      -24,
      -29
    ],
    [
      -55,
      -41
    ],
    [
      -87,
      -54
    ],
    [
      -100,
      -50
    ],
    [
      -203,
      -89
    ],
    [
      -126,
      -92
    ],
    [
      -56,
      -56
    ],
    [
      -217,
      -278
    ],
    [
      -132,
      -149
    ],
    [
      -212,
      -209
    ],
    [
      -20,
      -26
    ],
    [
      -2,
      -25
    ]
  ],
  [
    [
      43621,
      25087
    ],
    [
      -9,
      1
    ],
    [
      -35,
      -51
    ],
    [
      -15,
      -32
    ],
    [
      -34,
      -9
    ],
    [
      0,
      -130
    ],
    [
      0,
      -130
    ],
    [
      0,
      -131
    ],
    [
      -1,
      -130
    ],
    [
      -16,
      -13
    ],
    [
      -21,
      -30
    ],
    [
      -29,
      -8
    ],
    [
      -137,
      -107
    ],
    [
      -22,
      -31
    ],
    [
      -25,
      -71
    ],
    [
      -45,
      -81
    ],
    [
      -11,
      -43
    ],
    [
      2,
      -57
    ],
    [
      69,
      -47
    ],
    [
      25,
      -45
    ],
    [
      13,
      -54
    ],
    [
      -2,
      -48
    ],
    [
      -34,
      -93
    ],
    [
      -7,
      -37
    ],
    [
      4,
      -113
    ],
    [
      -17,
      -36
    ],
    [
      14,
      -92
    ],
    [
      1,
      -32
    ],
    [
      -11,
      -100
    ],
    [
      -7,
      -30
    ],
    [
      13,
      -52
    ],
    [
      2,
      -6
    ],
    [
      64,
      -72
    ],
    [
      54,
      -40
    ],
    [
      48,
      -13
    ],
    [
      38,
      -31
    ],
    [
      27,
      -49
    ],
    [
      37,
      -33
    ],
    [
      46,
      -15
    ],
    [
      48,
      -41
    ],
    [
      72,
      -100
    ],
    [
      36,
      -85
    ],
    [
      63,
      -62
    ],
    [
      102,
      -65
    ],
    [
      67,
      -57
    ],
    [
      32,
      -49
    ],
    [
      21,
      -125
    ],
    [
      17,
      -267
    ]
  ],
  [
    [
      41419,
      22144
    ],
    [
      0,
      203
    ],
    [
      0,
      202
    ],
    [
      0,
      203
    ],
    [
      0,
      203
    ],
    [
      0,
      202
    ],
    [
      0,
      203
    ],
    [
      0,
      203
    ],
    [
      0,
      202
    ],
    [
      -39,
      67
    ],
    [
      -84,
      54
    ],
    [
      -21,
      33
    ],
    [
      -39,
      81
    ],
    [
      -16,
      35
    ],
    [
      -2,
      27
    ],
    [
      19,
      30
    ],
    [
      76,
      87
    ],
    [
      24,
      40
    ],
    [
      12,
      39
    ],
    [
      18,
      90
    ]
  ],
  [
    [
      41367,
      24348
    ],
    [
      -7,
      69
    ],
    [
      5,
      107
    ],
    [
      -16,
      81
    ],
    [
      -3,
      40
    ],
    [
      -10,
      49
    ],
    [
      -58,
      132
    ],
    [
      -13,
      106
    ],
    [
      -15,
      52
    ],
    [
      -5,
      135
    ],
    [
      2,
      37
    ],
    [
      12,
      73
    ],
    [
      -25,
      49
    ],
    [
      -3,
      41
    ],
    [
      -12,
      320
    ],
    [
      -7,
      45
    ],
    [
      2,
      149
    ],
    [
      -45,
      156
    ],
    [
      -21,
      53
    ],
    [
      -10,
      64
    ],
    [
      0,
      31
    ],
    [
      -36,
      106
    ],
    [
      -24,
      118
    ],
    [
      2,
      101
    ],
    [
      -7,
      77
    ],
    [
      3,
      60
    ],
    [
      -7,
      90
    ],
    [
      8,
      51
    ],
    [
      0,
      79
    ],
    [
      -49,
      282
    ]
  ],
  [
    [
      42349,
      15827
    ],
    [
      0,
      112
    ],
    [
      0,
      113
    ],
    [
      0,
      113
    ],
    [
      0,
      113
    ]
  ],
  [
    [
      41980,
      18986
    ],
    [
      -8,
      8
    ],
    [
      -37,
      77
    ],
    [
      -14,
      92
    ],
    [
      -30,
      60
    ],
    [
      -43,
      28
    ],
    [
      -28,
      61
    ],
    [
      -11,
      93
    ],
    [
      -28,
      95
    ],
    [
      -13,
      28
    ]
  ],
  [
    [
      44968,
      15826
    ],
    [
      -1,
      -2
    ],
    [
      -10,
      -8
    ],
    [
      -7,
      8
    ],
    [
      -1,
      5
    ]
  ],
  [
    [
      44913,
      15827
    ],
    [
      9,
      -67
    ],
    [
      -8,
      -49
    ],
    [
      -24,
      -19
    ],
    [
      -4,
      -27
    ],
    [
      14,
      -31
    ],
    [
      0,
      -14
    ],
    [
      -6,
      -11
    ],
    [
      -16,
      -4
    ],
    [
      -14,
      -7
    ],
    [
      -10,
      -24
    ],
    [
      20,
      -48
    ],
    [
      -3,
      -57
    ],
    [
      -29,
      -67
    ],
    [
      -3,
      -26
    ]
  ],
  [
    [
      45500,
      10294
    ],
    [
      -148,
      -14
    ],
    [
      -65,
      47
    ],
    [
      -27,
      8
    ],
    [
      -16,
      -1
    ],
    [
      -76,
      -42
    ],
    [
      -86,
      -32
    ],
    [
      -20,
      10
    ],
    [
      -29,
      1
    ],
    [
      -62,
      -110
    ],
    [
      -39,
      -27
    ]
  ],
  [
    [
      44540,
      14473
    ],
    [
      130,
      0
    ],
    [
      134,
      0
    ],
    [
      135,
      -1
    ],
    [
      134,
      0
    ],
    [
      135,
      0
    ],
    [
      135,
      0
    ],
    [
      134,
      -1
    ],
    [
      138,
      0
    ]
  ],
  [
    [
      45420,
      10155
    ],
    [
      -7,
      -10
    ],
    [
      -45,
      18
    ],
    [
      -27,
      18
    ],
    [
      -5,
      17
    ],
    [
      76,
      -31
    ],
    [
      8,
      -12
    ]
  ],
  [
    [
      32496,
      27100
    ],
    [
      168,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      163,
      0
    ],
    [
      53,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      1
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      217,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      161,
      0
    ]
  ],
  [
    [
      37578,
      27101
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      0,
      -172
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      0,
      -172
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      0,
      -173
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      0,
      -172
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ],
    [
      1,
      -172
    ]
  ],
  [
    [
      37590,
      24348
    ],
    [
      0,
      -210
    ],
    [
      1,
      -210
    ],
    [
      1,
      -209
    ],
    [
      1,
      -210
    ],
    [
      0,
      -3
    ],
    [
      0,
      -3
    ],
    [
      -1,
      -2
    ],
    [
      0,
      -3
    ],
    [
      -4,
      0
    ],
    [
      -4,
      0
    ],
    [
      -4,
      0
    ],
    [
      -4,
      0
    ]
  ],
  [
    [
      37576,
      23498
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -112,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -111,
      0
    ],
    [
      -112,
      0
    ],
    [
      -111,
      0
    ],
    [
      0,
      -114
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ]
  ],
  [
    [
      31490,
      27100
    ],
    [
      93,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      217,
      0
    ],
    [
      216,
      0
    ],
    [
      48,
      0
    ]
  ],
  [
    [
      47565,
      14461
    ],
    [
      19,
      192
    ],
    [
      13,
      44
    ],
    [
      15,
      10
    ],
    [
      52,
      1
    ],
    [
      34,
      22
    ],
    [
      29,
      116
    ],
    [
      68,
      91
    ],
    [
      30,
      23
    ],
    [
      45,
      17
    ],
    [
      107,
      22
    ],
    [
      115,
      89
    ],
    [
      83,
      83
    ],
    [
      66,
      23
    ],
    [
      21,
      31
    ],
    [
      14,
      40
    ],
    [
      10,
      55
    ],
    [
      7,
      11
    ],
    [
      38,
      -4
    ],
    [
      29,
      47
    ],
    [
      28,
      28
    ],
    [
      28,
      15
    ],
    [
      17,
      0
    ],
    [
      7,
      -14
    ],
    [
      4,
      -40
    ],
    [
      6,
      -13
    ],
    [
      12,
      -2
    ],
    [
      17,
      10
    ],
    [
      21,
      26
    ],
    [
      56,
      80
    ],
    [
      37,
      31
    ],
    [
      57,
      18
    ],
    [
      42,
      -42
    ],
    [
      25,
      14
    ],
    [
      72,
      166
    ],
    [
      29,
      30
    ],
    [
      22,
      12
    ],
    [
      37,
      2
    ],
    [
      1,
      46
    ],
    [
      13,
      69
    ],
    [
      2,
      46
    ],
    [
      23,
      70
    ]
  ],
  [
    [
      48916,
      15926
    ],
    [
      8,
      -14
    ],
    [
      184,
      -3
    ],
    [
      183,
      -2
    ],
    [
      183,
      -3
    ],
    [
      184,
      -3
    ],
    [
      183,
      -2
    ],
    [
      183,
      -3
    ],
    [
      184,
      -2
    ],
    [
      183,
      -3
    ],
    [
      183,
      -2
    ],
    [
      184,
      -3
    ],
    [
      183,
      -2
    ],
    [
      183,
      -3
    ],
    [
      184,
      -2
    ],
    [
      183,
      -3
    ],
    [
      183,
      -2
    ],
    [
      126,
      -2
    ]
  ],
  [
    [
      51800,
      15872
    ],
    [
      -13,
      -70
    ],
    [
      7,
      -40
    ],
    [
      27,
      -42
    ],
    [
      30,
      -104
    ],
    [
      23,
      -140
    ],
    [
      -32,
      57
    ],
    [
      -34,
      30
    ],
    [
      -53,
      23
    ],
    [
      -47,
      41
    ],
    [
      4,
      -58
    ],
    [
      -5,
      -63
    ],
    [
      -36,
      19
    ],
    [
      -25,
      21
    ],
    [
      22,
      -67
    ],
    [
      -48,
      20
    ],
    [
      -31,
      -4
    ],
    [
      -21,
      -59
    ],
    [
      -28,
      -36
    ],
    [
      -40,
      -12
    ],
    [
      -61,
      55
    ],
    [
      -20,
      65
    ],
    [
      -8,
      73
    ],
    [
      -3,
      -86
    ],
    [
      11,
      -90
    ],
    [
      -4,
      -69
    ],
    [
      58,
      -12
    ],
    [
      55,
      11
    ],
    [
      73,
      -3
    ],
    [
      48,
      13
    ],
    [
      29,
      22
    ],
    [
      70,
      -19
    ],
    [
      5,
      -83
    ],
    [
      -8,
      -82
    ],
    [
      -4,
      -88
    ],
    [
      19,
      1
    ],
    [
      22,
      28
    ],
    [
      12,
      157
    ],
    [
      63,
      58
    ],
    [
      21,
      -4
    ],
    [
      20,
      -51
    ],
    [
      7,
      -51
    ],
    [
      7,
      -70
    ],
    [
      -14,
      -107
    ],
    [
      -98,
      -125
    ],
    [
      -69,
      -116
    ],
    [
      -36,
      -23
    ],
    [
      -51,
      13
    ],
    [
      -59,
      29
    ],
    [
      -28,
      6
    ],
    [
      -22,
      -10
    ],
    [
      -13,
      36
    ],
    [
      -9,
      65
    ],
    [
      -22,
      21
    ],
    [
      -18,
      -2
    ],
    [
      -11,
      -69
    ],
    [
      -55,
      -19
    ],
    [
      -74,
      28
    ],
    [
      -77,
      58
    ],
    [
      33,
      -62
    ],
    [
      192,
      -116
    ],
    [
      22,
      -22
    ],
    [
      20,
      -32
    ],
    [
      -27,
      -50
    ],
    [
      -21,
      -56
    ],
    [
      -3,
      -44
    ],
    [
      -7,
      -28
    ],
    [
      -77,
      -75
    ],
    [
      -41,
      14
    ],
    [
      -106,
      135
    ],
    [
      48,
      -117
    ],
    [
      39,
      -50
    ],
    [
      78,
      -26
    ],
    [
      146,
      43
    ],
    [
      47,
      -47
    ],
    [
      -39,
      -85
    ],
    [
      -39,
      -59
    ],
    [
      -51,
      -7
    ],
    [
      -45,
      -16
    ],
    [
      -13,
      -40
    ],
    [
      -33,
      -3
    ],
    [
      -50,
      -2
    ],
    [
      -78,
      -4
    ],
    [
      -43,
      10
    ],
    [
      -59,
      -84
    ],
    [
      -23,
      -11
    ],
    [
      -31,
      15
    ],
    [
      -13,
      67
    ],
    [
      -15,
      33
    ],
    [
      0,
      -125
    ],
    [
      6,
      -34
    ],
    [
      11,
      -25
    ],
    [
      -70,
      -68
    ],
    [
      -67,
      -85
    ],
    [
      -24,
      -23
    ],
    [
      -27,
      -42
    ],
    [
      -56,
      -123
    ],
    [
      -14,
      -89
    ],
    [
      -20,
      -100
    ],
    [
      -2,
      45
    ],
    [
      3,
      76
    ],
    [
      -14,
      86
    ],
    [
      -8,
      -158
    ],
    [
      -22,
      -74
    ],
    [
      -199,
      5
    ],
    [
      -80,
      -37
    ]
  ],
  [
    [
      50484,
      13458
    ],
    [
      -73,
      110
    ],
    [
      -69,
      103
    ],
    [
      -68,
      103
    ],
    [
      -69,
      103
    ],
    [
      -68,
      103
    ],
    [
      -68,
      103
    ],
    [
      -69,
      103
    ],
    [
      -68,
      103
    ],
    [
      -72,
      3
    ],
    [
      -71,
      4
    ],
    [
      -72,
      3
    ],
    [
      -72,
      4
    ],
    [
      -71,
      4
    ],
    [
      -72,
      3
    ],
    [
      -72,
      4
    ],
    [
      -71,
      3
    ],
    [
      -3,
      71
    ],
    [
      -2,
      51
    ],
    [
      -45,
      85
    ],
    [
      -26,
      51
    ],
    [
      -56,
      -44
    ],
    [
      -3,
      21
    ],
    [
      2,
      38
    ],
    [
      -5,
      13
    ],
    [
      -16,
      10
    ],
    [
      -80,
      5
    ],
    [
      -80,
      5
    ],
    [
      -81,
      5
    ],
    [
      -80,
      5
    ],
    [
      -81,
      6
    ],
    [
      -80,
      5
    ],
    [
      -80,
      5
    ],
    [
      -81,
      5
    ],
    [
      -18,
      8
    ],
    [
      -36,
      -29
    ],
    [
      -95,
      -45
    ],
    [
      -47,
      -40
    ],
    [
      -17,
      2
    ],
    [
      -81,
      -38
    ],
    [
      -81,
      -38
    ],
    [
      -9,
      -1
    ]
  ],
  [
    [
      51839,
      15871
    ],
    [
      16,
      0
    ]
  ],
  [
    [
      51855,
      15871
    ],
    [
      51,
      -290
    ],
    [
      101,
      -315
    ],
    [
      12,
      -55
    ],
    [
      -23,
      48
    ],
    [
      -75,
      209
    ],
    [
      -42,
      151
    ],
    [
      -40,
      252
    ]
  ],
  [
    [
      51968,
      15245
    ],
    [
      -8,
      -19
    ],
    [
      -34,
      100
    ],
    [
      35,
      -32
    ],
    [
      6,
      -27
    ],
    [
      1,
      -22
    ]
  ],
  [
    [
      52014,
      14689
    ],
    [
      -68,
      -25
    ],
    [
      -6,
      8
    ],
    [
      78,
      52
    ],
    [
      25,
      181
    ],
    [
      3,
      83
    ],
    [
      -12,
      148
    ],
    [
      1,
      30
    ],
    [
      12,
      -47
    ],
    [
      11,
      -138
    ],
    [
      -4,
      -104
    ],
    [
      -22,
      -152
    ],
    [
      -18,
      -36
    ]
  ],
  [
    [
      51894,
      14644
    ],
    [
      -93,
      -65
    ],
    [
      -10,
      4
    ],
    [
      60,
      46
    ],
    [
      43,
      15
    ]
  ],
  [
    [
      51528,
      14150
    ],
    [
      -13,
      -10
    ],
    [
      47,
      112
    ],
    [
      91,
      143
    ],
    [
      25,
      22
    ],
    [
      -76,
      -122
    ],
    [
      -74,
      -145
    ]
  ],
  [
    [
      51506,
      14161
    ],
    [
      -11,
      -2
    ],
    [
      -20,
      9
    ],
    [
      -27,
      20
    ],
    [
      -6,
      14
    ],
    [
      26,
      -6
    ],
    [
      38,
      -35
    ]
  ],
  [
    [
      38929,
      27101
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      217,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      154,
      0
    ]
  ],
  [
    [
      41367,
      24348
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -119,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ],
    [
      -118,
      0
    ]
  ],
  [
    [
      37578,
      27101
    ],
    [
      55,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ]
  ],
  [
    [
      37584,
      19888
    ],
    [
      0,
      225
    ],
    [
      -1,
      226
    ],
    [
      0,
      226
    ],
    [
      -1,
      225
    ],
    [
      0,
      226
    ],
    [
      -1,
      226
    ],
    [
      0,
      225
    ],
    [
      0,
      226
    ]
  ],
  [
    [
      37581,
      21693
    ],
    [
      175,
      0
    ],
    [
      175,
      0
    ],
    [
      176,
      0
    ],
    [
      175,
      0
    ],
    [
      175,
      0
    ],
    [
      176,
      0
    ],
    [
      175,
      0
    ],
    [
      176,
      0
    ],
    [
      175,
      0
    ],
    [
      175,
      0
    ],
    [
      176,
      0
    ],
    [
      175,
      0
    ],
    [
      175,
      0
    ],
    [
      176,
      0
    ],
    [
      175,
      0
    ],
    [
      201,
      0
    ],
    [
      151,
      -134
    ],
    [
      90,
      -42
    ],
    [
      43,
      39
    ],
    [
      92,
      23
    ],
    [
      143,
      5
    ],
    [
      90,
      -18
    ],
    [
      38,
      -43
    ],
    [
      73,
      -48
    ],
    [
      109,
      -53
    ],
    [
      66,
      -57
    ],
    [
      21,
      -62
    ],
    [
      38,
      -40
    ],
    [
      39,
      -12
    ]
  ],
  [
    [
      54054,
      23504
    ],
    [
      50,
      174
    ],
    [
      47,
      81
    ],
    [
      63,
      -27
    ],
    [
      34,
      2
    ],
    [
      26,
      28
    ]
  ],
  [
    [
      54452,
      21755
    ],
    [
      -23,
      -117
    ],
    [
      -14,
      -57
    ]
  ],
  [
    [
      53573,
      21448
    ],
    [
      -8,
      33
    ],
    [
      -29,
      57
    ],
    [
      -6,
      24
    ],
    [
      1,
      28
    ],
    [
      16,
      72
    ],
    [
      11,
      22
    ],
    [
      12,
      43
    ],
    [
      18,
      168
    ],
    [
      16,
      97
    ],
    [
      11,
      177
    ],
    [
      11,
      52
    ],
    [
      13,
      32
    ],
    [
      21,
      84
    ],
    [
      37,
      69
    ],
    [
      25,
      84
    ],
    [
      30,
      73
    ],
    [
      4,
      43
    ],
    [
      22,
      93
    ],
    [
      16,
      167
    ],
    [
      15,
      26
    ],
    [
      68,
      23
    ],
    [
      21,
      17
    ],
    [
      72,
      69
    ],
    [
      23,
      28
    ],
    [
      15,
      29
    ],
    [
      11,
      46
    ],
    [
      8,
      13
    ],
    [
      2,
      26
    ],
    [
      -26,
      108
    ],
    [
      -1,
      40
    ],
    [
      56,
      123
    ],
    [
      -12,
      72
    ],
    [
      8,
      18
    ]
  ],
  [
    [
      52252,
      18970
    ],
    [
      26,
      30
    ],
    [
      58,
      56
    ],
    [
      88,
      68
    ],
    [
      -122,
      227
    ],
    [
      -30,
      13
    ],
    [
      -32,
      111
    ],
    [
      -37,
      30
    ],
    [
      -9,
      17
    ],
    [
      -2,
      85
    ],
    [
      4,
      49
    ],
    [
      5,
      28
    ],
    [
      32,
      24
    ],
    [
      18,
      49
    ],
    [
      1,
      26
    ],
    [
      -24,
      78
    ],
    [
      -1,
      25
    ],
    [
      47,
      48
    ],
    [
      60,
      93
    ],
    [
      36,
      102
    ],
    [
      15,
      30
    ],
    [
      17,
      21
    ],
    [
      40,
      29
    ]
  ],
  [
    [
      52442,
      20209
    ],
    [
      50,
      -41
    ],
    [
      51,
      -41
    ],
    [
      50,
      -41
    ],
    [
      50,
      -42
    ],
    [
      50,
      -41
    ],
    [
      50,
      -41
    ],
    [
      50,
      -41
    ],
    [
      49,
      -41
    ]
  ],
  [
    [
      52842,
      19880
    ],
    [
      -9,
      -70
    ],
    [
      -49,
      -143
    ],
    [
      -22,
      -33
    ],
    [
      -24,
      -29
    ],
    [
      -19,
      -13
    ],
    [
      -17,
      -23
    ],
    [
      -20,
      -36
    ],
    [
      -19,
      -71
    ],
    [
      11,
      -66
    ],
    [
      97,
      -24
    ],
    [
      26,
      21
    ],
    [
      14,
      -47
    ],
    [
      7,
      -65
    ],
    [
      -7,
      -70
    ],
    [
      -17,
      -72
    ],
    [
      -12,
      -89
    ],
    [
      -10,
      -135
    ],
    [
      -16,
      -122
    ],
    [
      -2,
      37
    ],
    [
      10,
      148
    ],
    [
      -16,
      -15
    ],
    [
      -11,
      -34
    ],
    [
      -30,
      -191
    ],
    [
      -41,
      -102
    ],
    [
      -37,
      -70
    ],
    [
      -39,
      11
    ],
    [
      9,
      -56
    ],
    [
      -11,
      -29
    ],
    [
      -9,
      -61
    ],
    [
      -23,
      -40
    ],
    [
      -22,
      4
    ],
    [
      -31,
      -28
    ],
    [
      -12,
      -21
    ],
    [
      -1,
      -41
    ],
    [
      -21,
      -35
    ],
    [
      -75,
      -186
    ],
    [
      -65,
      -55
    ],
    [
      -16,
      8
    ],
    [
      17,
      88
    ],
    [
      12,
      88
    ],
    [
      -40,
      39
    ],
    [
      -38,
      20
    ],
    [
      -43,
      -2
    ],
    [
      -48,
      69
    ],
    [
      -62,
      50
    ],
    [
      -87,
      135
    ],
    [
      3,
      38
    ],
    [
      -3,
      63
    ],
    [
      27,
      100
    ],
    [
      25,
      70
    ],
    [
      35,
      36
    ],
    [
      101,
      37
    ],
    [
      25,
      55
    ],
    [
      15,
      47
    ]
  ],
  [
    [
      52729,
      18696
    ],
    [
      -59,
      -136
    ],
    [
      -2,
      26
    ],
    [
      74,
      170
    ],
    [
      -13,
      -60
    ]
  ],
  [
    [
      38101,
      16278
    ],
    [
      0,
      -113
    ],
    [
      1,
      -113
    ],
    [
      0,
      -112
    ],
    [
      0,
      -113
    ]
  ],
  [
    [
      38102,
      15827
    ],
    [
      -22,
      -1
    ],
    [
      0,
      -253
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -254
    ],
    [
      0,
      -253
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -254
    ],
    [
      0,
      -253
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -253
    ],
    [
      0,
      -254
    ],
    [
      -1,
      -254
    ],
    [
      -1,
      -253
    ],
    [
      -1,
      -254
    ],
    [
      0,
      -254
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      -1
    ],
    [
      -113,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -114,
      0
    ],
    [
      -3,
      0
    ],
    [
      52,
      -164
    ],
    [
      0,
      0
    ],
    [
      61,
      -46
    ]
  ],
  [
    [
      36356,
      11556
    ],
    [
      -4,
      1
    ],
    [
      -111,
      1
    ],
    [
      -112,
      1
    ],
    [
      -111,
      1
    ],
    [
      -111,
      1
    ],
    [
      -112,
      1
    ],
    [
      -111,
      1
    ],
    [
      -112,
      1
    ],
    [
      -111,
      2
    ],
    [
      0,
      -102
    ],
    [
      -1,
      -101
    ],
    [
      0,
      -102
    ],
    [
      0,
      -101
    ],
    [
      -179,
      -1
    ],
    [
      -180,
      -1
    ],
    [
      -64,
      0
    ]
  ],
  [
    [
      29487,
      20790
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ],
    [
      189,
      0
    ]
  ],
  [
    [
      32506,
      20790
    ],
    [
      0,
      -141
    ],
    [
      1,
      -140
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -140
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      1,
      -140
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ],
    [
      0,
      -141
    ]
  ],
  [
    [
      50229,
      21788
    ],
    [
      0,
      0
    ],
    [
      4,
      155
    ],
    [
      -1,
      4
    ],
    [
      4,
      2
    ],
    [
      184,
      69
    ],
    [
      118,
      24
    ],
    [
      143,
      6
    ],
    [
      171,
      -34
    ],
    [
      66,
      -31
    ],
    [
      42,
      -39
    ],
    [
      48,
      -11
    ],
    [
      55,
      19
    ],
    [
      76,
      6
    ],
    [
      97,
      -6
    ],
    [
      52,
      -10
    ],
    [
      7,
      -12
    ],
    [
      7,
      4
    ],
    [
      6,
      19
    ],
    [
      26,
      22
    ],
    [
      73,
      33
    ],
    [
      10,
      -7
    ],
    [
      15,
      17
    ],
    [
      20,
      39
    ],
    [
      37,
      44
    ],
    [
      55,
      49
    ],
    [
      48,
      25
    ],
    [
      44,
      2
    ],
    [
      30,
      12
    ],
    [
      14,
      21
    ],
    [
      5,
      20
    ],
    [
      -6,
      16
    ],
    [
      3,
      19
    ],
    [
      2,
      9
    ],
    [
      -2,
      7
    ],
    [
      -5,
      16
    ],
    [
      -4,
      79
    ],
    [
      -9,
      37
    ],
    [
      -12,
      27
    ],
    [
      -15,
      18
    ],
    [
      2,
      18
    ],
    [
      26,
      23
    ],
    [
      -2,
      -21
    ],
    [
      7,
      -7
    ],
    [
      13,
      10
    ],
    [
      28,
      47
    ],
    [
      3,
      18
    ],
    [
      19,
      19
    ],
    [
      14,
      28
    ],
    [
      -16,
      4
    ],
    [
      -37,
      -8
    ],
    [
      -8,
      8
    ],
    [
      19,
      38
    ],
    [
      -4,
      22
    ],
    [
      -6,
      9
    ],
    [
      -12,
      4
    ],
    [
      -42,
      -34
    ],
    [
      -13,
      -3
    ],
    [
      -2,
      18
    ],
    [
      -22,
      39
    ],
    [
      59,
      70
    ],
    [
      205,
      193
    ],
    [
      21,
      29
    ],
    [
      8,
      26
    ],
    [
      -6,
      23
    ],
    [
      -6,
      6
    ],
    [
      3,
      6
    ],
    [
      198,
      248
    ],
    [
      113,
      115
    ],
    [
      93,
      64
    ],
    [
      70,
      30
    ],
    [
      48,
      -4
    ],
    [
      27,
      4
    ],
    [
      23,
      0
    ],
    [
      118,
      1
    ],
    [
      211,
      0
    ],
    [
      211,
      0
    ],
    [
      125,
      1
    ]
  ],
  [
    [
      53125,
      23502
    ],
    [
      3,
      -60
    ],
    [
      -10,
      -71
    ],
    [
      9,
      -77
    ],
    [
      -12,
      -161
    ],
    [
      31,
      -124
    ],
    [
      -7,
      -83
    ],
    [
      2,
      -89
    ],
    [
      -6,
      -22
    ],
    [
      -25,
      -51
    ],
    [
      -14,
      -51
    ],
    [
      -9,
      -51
    ],
    [
      1,
      -33
    ],
    [
      21,
      -147
    ],
    [
      4,
      -64
    ],
    [
      0,
      -38
    ],
    [
      -19,
      -121
    ],
    [
      -2,
      -35
    ],
    [
      6,
      -10
    ],
    [
      7,
      0
    ],
    [
      21,
      38
    ],
    [
      10,
      5
    ],
    [
      12,
      -9
    ],
    [
      30,
      -57
    ],
    [
      -2,
      -102
    ],
    [
      -1,
      -75
    ],
    [
      -1,
      -83
    ],
    [
      -2,
      -124
    ],
    [
      -2,
      -91
    ],
    [
      -1,
      -83
    ],
    [
      -1,
      -63
    ],
    [
      -7,
      -47
    ],
    [
      14,
      -55
    ]
  ],
  [
    [
      52984,
      19880
    ],
    [
      -21,
      -24
    ],
    [
      -55,
      -79
    ],
    [
      -36,
      -42
    ],
    [
      -30,
      -14
    ],
    [
      -19,
      -35
    ],
    [
      -20,
      -23
    ],
    [
      20,
      78
    ],
    [
      21,
      67
    ],
    [
      17,
      129
    ],
    [
      -5,
      104
    ],
    [
      -22,
      43
    ],
    [
      -22,
      28
    ],
    [
      26,
      -103
    ],
    [
      4,
      -126
    ],
    [
      0,
      -3
    ]
  ],
  [
    [
      52442,
      20209
    ],
    [
      -11,
      34
    ],
    [
      -18,
      27
    ],
    [
      -91,
      45
    ],
    [
      -23,
      30
    ],
    [
      -21,
      41
    ],
    [
      -14,
      50
    ],
    [
      -8,
      53
    ],
    [
      0,
      42
    ],
    [
      7,
      46
    ],
    [
      -21,
      31
    ],
    [
      -1,
      30
    ],
    [
      -13,
      19
    ],
    [
      -59,
      35
    ],
    [
      -18,
      49
    ],
    [
      -39,
      47
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -69,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      1
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -69,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -69,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      1
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -69,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      -70,
      0
    ],
    [
      0,
      122
    ],
    [
      0,
      121
    ],
    [
      0,
      5
    ]
  ],
  [
    [
      49876,
      21038
    ],
    [
      30,
      22
    ],
    [
      97,
      82
    ],
    [
      49,
      60
    ],
    [
      51,
      49
    ],
    [
      54,
      39
    ],
    [
      43,
      51
    ],
    [
      31,
      62
    ],
    [
      35,
      46
    ],
    [
      38,
      30
    ],
    [
      21,
      32
    ],
    [
      3,
      33
    ],
    [
      -7,
      45
    ],
    [
      -17,
      56
    ],
    [
      -3,
      45
    ],
    [
      13,
      32
    ],
    [
      2,
      22
    ],
    [
      -7,
      11
    ],
    [
      -80,
      33
    ]
  ],
  [
    [
      53552,
      19874
    ],
    [
      -36,
      -58
    ],
    [
      32,
      -6
    ],
    [
      28,
      17
    ],
    [
      27,
      35
    ],
    [
      61,
      47
    ],
    [
      53,
      20
    ],
    [
      16,
      4
    ],
    [
      25,
      -33
    ],
    [
      50,
      27
    ],
    [
      51,
      15
    ],
    [
      -221,
      -151
    ],
    [
      -45,
      -17
    ],
    [
      -65,
      -44
    ],
    [
      -61,
      -32
    ],
    [
      -44,
      -12
    ],
    [
      -218,
      -111
    ],
    [
      -18,
      -3
    ],
    [
      -18,
      11
    ],
    [
      -180,
      -57
    ],
    [
      -74,
      -7
    ],
    [
      -68,
      -20
    ],
    [
      50,
      47
    ],
    [
      1,
      17
    ],
    [
      -12,
      13
    ],
    [
      -26,
      -3
    ],
    [
      -28,
      -48
    ],
    [
      -43,
      -16
    ],
    [
      -9,
      52
    ],
    [
      15,
      40
    ],
    [
      19,
      38
    ],
    [
      44,
      60
    ],
    [
      61,
      38
    ],
    [
      32,
      33
    ],
    [
      22,
      -29
    ],
    [
      4,
      39
    ],
    [
      17,
      22
    ],
    [
      18,
      12
    ],
    [
      44,
      1
    ],
    [
      24,
      6
    ],
    [
      17,
      13
    ],
    [
      17,
      2
    ],
    [
      48,
      -17
    ],
    [
      47,
      5
    ],
    [
      38,
      24
    ],
    [
      39,
      8
    ],
    [
      104,
      6
    ],
    [
      103,
      18
    ],
    [
      41,
      31
    ],
    [
      87,
      89
    ],
    [
      50,
      25
    ],
    [
      -78,
      -103
    ],
    [
      -41,
      -48
    ]
  ],
  [
    [
      52701,
      19456
    ],
    [
      -24,
      -3
    ],
    [
      24,
      86
    ],
    [
      45,
      40
    ],
    [
      16,
      -9
    ],
    [
      0,
      -30
    ],
    [
      -6,
      -26
    ],
    [
      -30,
      -41
    ],
    [
      -25,
      -17
    ]
  ],
  [
    [
      51742,
      22860
    ],
    [
      -15,
      -15
    ],
    [
      -16,
      -8
    ],
    [
      -4,
      11
    ],
    [
      2,
      10
    ],
    [
      14,
      12
    ],
    [
      22,
      0
    ],
    [
      -3,
      -10
    ]
  ],
  [
    [
      51644,
      22602
    ],
    [
      7,
      13
    ],
    [
      15,
      5
    ],
    [
      0,
      -10
    ],
    [
      -16,
      -25
    ],
    [
      -7,
      -2
    ],
    [
      1,
      19
    ]
  ],
  [
    [
      50268,
      21684
    ],
    [
      -11,
      10
    ],
    [
      -4,
      20
    ],
    [
      3,
      24
    ],
    [
      13,
      11
    ],
    [
      36,
      -9
    ],
    [
      2,
      -10
    ],
    [
      -9,
      -18
    ],
    [
      -15,
      -31
    ],
    [
      -15,
      3
    ]
  ],
  [
    [
      49493,
      20780
    ],
    [
      0,
      -75
    ],
    [
      0,
      -95
    ],
    [
      0,
      -95
    ],
    [
      0,
      -94
    ],
    [
      0,
      -95
    ],
    [
      0,
      -95
    ],
    [
      0,
      -94
    ],
    [
      0,
      -95
    ],
    [
      0,
      -94
    ],
    [
      0,
      -95
    ],
    [
      0,
      -95
    ],
    [
      0,
      -94
    ],
    [
      0,
      -96
    ]
  ],
  [
    [
      49493,
      19568
    ],
    [
      -60,
      -39
    ],
    [
      -11,
      -36
    ],
    [
      18,
      -47
    ],
    [
      10,
      -60
    ],
    [
      1,
      -73
    ],
    [
      -33,
      -161
    ],
    [
      -69,
      -250
    ],
    [
      -35,
      -156
    ],
    [
      -1,
      -64
    ],
    [
      -45,
      -85
    ],
    [
      -89,
      -103
    ],
    [
      -63,
      -63
    ],
    [
      -35,
      -22
    ],
    [
      -30,
      2
    ],
    [
      -24,
      25
    ],
    [
      -27,
      -17
    ],
    [
      -30,
      -59
    ],
    [
      -28,
      -31
    ],
    [
      -26,
      -2
    ],
    [
      -22,
      -38
    ],
    [
      -18,
      -75
    ],
    [
      -17,
      -43
    ],
    [
      -16,
      -11
    ],
    [
      -1,
      -38
    ],
    [
      13,
      -65
    ],
    [
      -1,
      -23
    ],
    [
      -7,
      -1
    ],
    [
      -8,
      4
    ],
    [
      -17,
      -14
    ],
    [
      -20,
      -36
    ],
    [
      -7,
      -1
    ],
    [
      -5,
      6
    ],
    [
      -6,
      47
    ],
    [
      -16,
      33
    ],
    [
      -26,
      20
    ],
    [
      -36,
      -43
    ],
    [
      -46,
      -107
    ],
    [
      -20,
      -69
    ],
    [
      8,
      -48
    ],
    [
      4,
      -70
    ],
    [
      -12,
      -29
    ],
    [
      -25,
      -10
    ],
    [
      -20,
      -38
    ],
    [
      -13,
      -66
    ],
    [
      -35,
      -41
    ],
    [
      -56,
      -17
    ],
    [
      -59,
      30
    ]
  ],
  [
    [
      48006,
      20560
    ],
    [
      -1,
      -3
    ],
    [
      7,
      -16
    ],
    [
      46,
      -10
    ],
    [
      31,
      -18
    ],
    [
      24,
      -29
    ],
    [
      88,
      -55
    ],
    [
      27,
      -34
    ],
    [
      27,
      -19
    ],
    [
      26,
      -3
    ],
    [
      18,
      10
    ],
    [
      10,
      25
    ],
    [
      13,
      2
    ],
    [
      15,
      -22
    ],
    [
      49,
      -23
    ],
    [
      2,
      -8
    ],
    [
      -137,
      -41
    ],
    [
      -29,
      -19
    ],
    [
      35,
      -13
    ],
    [
      34,
      3
    ],
    [
      35,
      20
    ],
    [
      40,
      -1
    ],
    [
      36,
      -10
    ],
    [
      11,
      8
    ],
    [
      4,
      4
    ],
    [
      60,
      -54
    ],
    [
      22,
      -8
    ],
    [
      24,
      6
    ],
    [
      24,
      21
    ],
    [
      53,
      26
    ],
    [
      81,
      33
    ],
    [
      79,
      13
    ],
    [
      75,
      -6
    ],
    [
      48,
      9
    ],
    [
      44,
      34
    ],
    [
      96,
      111
    ],
    [
      111,
      89
    ],
    [
      182,
      111
    ],
    [
      177,
      87
    ]
  ],
  [
    [
      42417,
      13252
    ],
    [
      -114,
      46
    ],
    [
      -29,
      29
    ],
    [
      -52,
      33
    ],
    [
      -47,
      68
    ],
    [
      -93,
      84
    ],
    [
      -36,
      21
    ],
    [
      -11,
      -3
    ],
    [
      -19,
      -41
    ],
    [
      -50,
      -33
    ],
    [
      -27,
      -1
    ],
    [
      -49,
      12
    ],
    [
      -9,
      11
    ],
    [
      -7,
      25
    ],
    [
      -20,
      17
    ],
    [
      -14,
      -13
    ],
    [
      -71,
      -35
    ],
    [
      -11,
      -25
    ],
    [
      -40,
      -1
    ],
    [
      -40,
      18
    ],
    [
      -100,
      -55
    ],
    [
      -34,
      -43
    ],
    [
      -36,
      -15
    ],
    [
      -19,
      -42
    ],
    [
      -11,
      6
    ],
    [
      -38,
      52
    ],
    [
      -38,
      15
    ],
    [
      -53,
      52
    ],
    [
      -2,
      45
    ],
    [
      -5,
      5
    ],
    [
      -10,
      6
    ],
    [
      -12,
      -5
    ],
    [
      -23,
      -38
    ],
    [
      -13,
      -10
    ],
    [
      -13,
      1
    ],
    [
      -52,
      26
    ],
    [
      -21,
      47
    ],
    [
      -11,
      14
    ],
    [
      -11,
      3
    ],
    [
      -23,
      -14
    ],
    [
      -12,
      -51
    ],
    [
      -10,
      -14
    ],
    [
      -21,
      -9
    ],
    [
      1,
      -25
    ],
    [
      -19,
      -71
    ],
    [
      -10,
      -14
    ],
    [
      -13,
      3
    ],
    [
      -14,
      17
    ],
    [
      -10,
      25
    ],
    [
      -5,
      22
    ],
    [
      8,
      55
    ],
    [
      -5,
      19
    ],
    [
      -10,
      6
    ],
    [
      -25,
      -27
    ],
    [
      -22,
      2
    ],
    [
      -28,
      -27
    ],
    [
      -18,
      -8
    ],
    [
      -16,
      7
    ],
    [
      -26,
      42
    ],
    [
      -45,
      28
    ],
    [
      -18,
      50
    ],
    [
      -8,
      15
    ],
    [
      -10,
      3
    ],
    [
      -10,
      -1
    ],
    [
      -16,
      -17
    ],
    [
      -52,
      -65
    ],
    [
      -24,
      -21
    ],
    [
      -20,
      -5
    ],
    [
      -20,
      7
    ],
    [
      -12,
      17
    ],
    [
      -3,
      67
    ],
    [
      -11,
      20
    ],
    [
      -49,
      42
    ],
    [
      -10,
      40
    ],
    [
      -5,
      55
    ],
    [
      -58,
      -9
    ],
    [
      -72,
      5
    ],
    [
      -33,
      -48
    ],
    [
      -16,
      -9
    ],
    [
      -21,
      10
    ],
    [
      -58,
      65
    ],
    [
      -62,
      -13
    ],
    [
      -34,
      7
    ],
    [
      -87,
      49
    ],
    [
      -67,
      4
    ],
    [
      -28,
      9
    ],
    [
      -15,
      11
    ],
    [
      -7,
      75
    ],
    [
      -26,
      63
    ],
    [
      -9,
      17
    ],
    [
      -46,
      44
    ],
    [
      -7,
      2
    ],
    [
      -5,
      -10
    ],
    [
      -11,
      -50
    ],
    [
      -13,
      -2
    ],
    [
      -53,
      14
    ],
    [
      -49,
      -15
    ],
    [
      -27,
      25
    ],
    [
      -92,
      115
    ],
    [
      -37,
      30
    ],
    [
      -30,
      9
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      -1,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      0,
      108
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -94,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ],
    [
      -95,
      0
    ]
  ],
  [
    [
      27345,
      20790
    ],
    [
      -64,
      110
    ],
    [
      -28,
      164
    ],
    [
      -5,
      69
    ],
    [
      7,
      183
    ],
    [
      -19,
      78
    ],
    [
      -49,
      129
    ],
    [
      21,
      112
    ],
    [
      23,
      68
    ],
    [
      54,
      297
    ],
    [
      13,
      24
    ],
    [
      23,
      -1
    ],
    [
      40,
      51
    ],
    [
      -18,
      12
    ],
    [
      -28,
      -24
    ],
    [
      25,
      117
    ],
    [
      28,
      101
    ],
    [
      18,
      36
    ],
    [
      9,
      329
    ],
    [
      16,
      251
    ],
    [
      26,
      82
    ],
    [
      -9,
      86
    ],
    [
      10,
      115
    ],
    [
      -7,
      117
    ],
    [
      56,
      563
    ],
    [
      -7,
      67
    ],
    [
      17,
      92
    ],
    [
      -16,
      240
    ],
    [
      7,
      268
    ],
    [
      -15,
      34
    ],
    [
      -7,
      37
    ],
    [
      14,
      6
    ],
    [
      26,
      -39
    ],
    [
      120,
      0
    ],
    [
      77,
      36
    ],
    [
      28,
      -12
    ],
    [
      33,
      -49
    ],
    [
      41,
      -10
    ],
    [
      51,
      9
    ]
  ],
  [
    [
      27856,
      24538
    ],
    [
      50,
      23
    ],
    [
      40,
      -17
    ],
    [
      51,
      -41
    ],
    [
      50,
      -123
    ],
    [
      49,
      -207
    ],
    [
      11,
      -68
    ],
    [
      38,
      -42
    ],
    [
      45,
      -2
    ],
    [
      182,
      -31
    ],
    [
      26,
      3
    ],
    [
      0,
      0
    ],
    [
      33,
      8
    ],
    [
      103,
      78
    ],
    [
      111,
      26
    ],
    [
      132,
      -6
    ],
    [
      81,
      -22
    ],
    [
      30,
      -39
    ],
    [
      70,
      -4
    ],
    [
      167,
      45
    ],
    [
      185,
      32
    ],
    [
      99,
      34
    ],
    [
      112,
      68
    ],
    [
      256,
      87
    ],
    [
      128,
      10
    ],
    [
      64,
      33
    ],
    [
      16,
      17
    ],
    [
      8,
      0
    ],
    [
      135,
      0
    ],
    [
      134,
      0
    ],
    [
      135,
      0
    ],
    [
      134,
      1
    ],
    [
      135,
      0
    ],
    [
      134,
      0
    ],
    [
      135,
      0
    ],
    [
      125,
      0
    ]
  ],
  [
    [
      52252,
      18970
    ],
    [
      -50,
      -80
    ],
    [
      -75,
      -28
    ],
    [
      -40,
      -30
    ],
    [
      -11,
      -14
    ]
  ],
  [
    [
      50021,
      18734
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      -66,
      0
    ],
    [
      0,
      104
    ],
    [
      0,
      105
    ],
    [
      0,
      104
    ],
    [
      0,
      105
    ],
    [
      0,
      104
    ],
    [
      0,
      104
    ],
    [
      0,
      105
    ],
    [
      0,
      103
    ]
  ],
  [
    [
      49493,
      20780
    ],
    [
      94,
      46
    ],
    [
      42,
      31
    ],
    [
      42,
      31
    ],
    [
      22,
      17
    ],
    [
      25,
      16
    ],
    [
      158,
      117
    ]
  ],
  [
    [
      54198,
      20525
    ],
    [
      -19,
      -23
    ],
    [
      -20,
      35
    ],
    [
      -10,
      38
    ],
    [
      -14,
      21
    ],
    [
      -16,
      9
    ],
    [
      13,
      -84
    ],
    [
      -32,
      -63
    ],
    [
      -8,
      -162
    ],
    [
      -40,
      -67
    ],
    [
      -125,
      -43
    ],
    [
      -37,
      4
    ]
  ],
  [
    [
      54194,
      20331
    ],
    [
      -25,
      -25
    ],
    [
      -28,
      5
    ],
    [
      14,
      33
    ],
    [
      6,
      49
    ],
    [
      14,
      54
    ],
    [
      8,
      16
    ],
    [
      16,
      14
    ],
    [
      -5,
      -146
    ]
  ],
  [
    [
      54131,
      20325
    ],
    [
      -14,
      -17
    ],
    [
      -5,
      44
    ],
    [
      10,
      50
    ],
    [
      10,
      1
    ],
    [
      5,
      -27
    ],
    [
      -6,
      -51
    ]
  ],
  [
    [
      50484,
      13458
    ],
    [
      -7,
      -3
    ],
    [
      -134,
      -134
    ],
    [
      -40,
      -59
    ],
    [
      -110,
      -228
    ],
    [
      -28,
      -146
    ],
    [
      -23,
      61
    ],
    [
      6,
      46
    ],
    [
      0,
      38
    ],
    [
      -28,
      -81
    ],
    [
      27,
      -118
    ],
    [
      -24,
      -45
    ],
    [
      -73,
      -83
    ],
    [
      -40,
      -14
    ],
    [
      -45,
      -24
    ],
    [
      -14,
      -83
    ],
    [
      -61,
      -76
    ],
    [
      -35,
      -34
    ],
    [
      -65,
      21
    ],
    [
      20,
      -74
    ],
    [
      -24,
      -55
    ],
    [
      -41,
      -43
    ],
    [
      -51,
      -28
    ],
    [
      -29,
      4
    ],
    [
      -25,
      -15
    ],
    [
      -20,
      -35
    ],
    [
      -48,
      -33
    ],
    [
      -49,
      18
    ],
    [
      -57,
      11
    ],
    [
      -31,
      -19
    ],
    [
      53,
      -33
    ],
    [
      28,
      -48
    ],
    [
      -6,
      -64
    ],
    [
      -14,
      -25
    ],
    [
      -33,
      -33
    ],
    [
      -15,
      5
    ],
    [
      -9,
      30
    ],
    [
      -11,
      63
    ],
    [
      -15,
      -13
    ],
    [
      -3,
      -30
    ],
    [
      -13,
      -10
    ],
    [
      -47,
      100
    ],
    [
      2,
      -76
    ],
    [
      16,
      -59
    ],
    [
      16,
      -30
    ],
    [
      16,
      -17
    ],
    [
      4,
      -28
    ],
    [
      -32,
      -66
    ],
    [
      -17,
      -15
    ],
    [
      -29,
      -10
    ],
    [
      -17,
      -41
    ],
    [
      5,
      -36
    ]
  ],
  [
    [
      37581,
      21693
    ],
    [
      -1,
      226
    ],
    [
      -1,
      225
    ],
    [
      0,
      226
    ],
    [
      -1,
      225
    ],
    [
      0,
      226
    ],
    [
      -1,
      226
    ],
    [
      0,
      225
    ],
    [
      -1,
      226
    ]
  ],
  [
    [
      47898,
      15921
    ],
    [
      115,
      -1
    ],
    [
      245,
      -2
    ],
    [
      175,
      -1
    ],
    [
      143,
      -1
    ],
    [
      85,
      -1
    ],
    [
      106,
      -1
    ],
    [
      24,
      19
    ],
    [
      53,
      -3
    ],
    [
      72,
      -4
    ]
  ],
  [
    [
      42767,
      9939
    ],
    [
      -24,
      2
    ],
    [
      -54,
      -148
    ],
    [
      31,
      -84
    ],
    [
      -2,
      -30
    ],
    [
      -106,
      -17
    ],
    [
      -241,
      -167
    ],
    [
      -94,
      -91
    ],
    [
      5,
      31
    ],
    [
      114,
      117
    ],
    [
      -40,
      18
    ],
    [
      -65,
      -30
    ],
    [
      -23,
      12
    ],
    [
      27,
      97
    ],
    [
      -9,
      85
    ],
    [
      -46,
      2
    ],
    [
      -29,
      -68
    ],
    [
      -20,
      3
    ],
    [
      -26,
      29
    ],
    [
      -21,
      -9
    ],
    [
      15,
      -155
    ],
    [
      29,
      -63
    ],
    [
      24,
      -81
    ],
    [
      -66,
      -101
    ],
    [
      -61,
      -82
    ],
    [
      -7,
      -80
    ],
    [
      -61,
      -104
    ],
    [
      -58,
      -59
    ],
    [
      -136,
      -139
    ],
    [
      -39,
      -30
    ],
    [
      -61,
      -64
    ],
    [
      -85,
      -49
    ],
    [
      -81,
      -76
    ],
    [
      -27,
      -12
    ],
    [
      52,
      65
    ],
    [
      61,
      64
    ],
    [
      -52,
      -9
    ],
    [
      -82,
      30
    ],
    [
      -49,
      2
    ],
    [
      -1,
      -24
    ],
    [
      -38,
      -33
    ],
    [
      -39,
      49
    ],
    [
      -17,
      33
    ],
    [
      -8,
      28
    ],
    [
      -17,
      7
    ],
    [
      -15,
      -14
    ],
    [
      58,
      -198
    ],
    [
      25,
      -9
    ],
    [
      27,
      -19
    ],
    [
      -34,
      -47
    ],
    [
      -37,
      -35
    ],
    [
      -58,
      -23
    ],
    [
      -49,
      72
    ],
    [
      -11,
      -91
    ],
    [
      -6,
      -90
    ],
    [
      -17,
      -24
    ],
    [
      -26,
      -33
    ],
    [
      -14,
      25
    ],
    [
      -7,
      35
    ],
    [
      -17,
      -31
    ],
    [
      -25,
      -24
    ],
    [
      -41,
      -4
    ],
    [
      -30,
      -13
    ],
    [
      1,
      -38
    ],
    [
      7,
      -37
    ],
    [
      54,
      30
    ],
    [
      -20,
      -98
    ],
    [
      -50,
      -96
    ],
    [
      -40,
      -23
    ],
    [
      -62,
      15
    ],
    [
      -16,
      -10
    ],
    [
      -14,
      -20
    ],
    [
      73,
      -150
    ],
    [
      -47,
      -227
    ],
    [
      -29,
      -82
    ],
    [
      -21,
      -11
    ],
    [
      -22,
      -2
    ],
    [
      -81,
      73
    ],
    [
      -43,
      56
    ],
    [
      38,
      -154
    ],
    [
      105,
      -44
    ],
    [
      6,
      -59
    ],
    [
      -1,
      -49
    ],
    [
      -21,
      -59
    ],
    [
      -19,
      -77
    ],
    [
      14,
      -54
    ],
    [
      17,
      -134
    ],
    [
      14,
      -61
    ],
    [
      16,
      -186
    ],
    [
      16,
      -80
    ],
    [
      96,
      -297
    ],
    [
      32,
      -2
    ],
    [
      5,
      -32
    ],
    [
      -3,
      -62
    ],
    [
      -69,
      -18
    ],
    [
      -28,
      -27
    ],
    [
      -6,
      -24
    ],
    [
      -4,
      -13
    ],
    [
      -9,
      1
    ],
    [
      -33,
      17
    ],
    [
      -74,
      85
    ],
    [
      -109,
      52
    ],
    [
      -143,
      20
    ],
    [
      -97,
      42
    ],
    [
      -52,
      64
    ],
    [
      -55,
      39
    ],
    [
      -57,
      12
    ],
    [
      -47,
      34
    ],
    [
      -37,
      58
    ],
    [
      -55,
      37
    ],
    [
      -72,
      16
    ],
    [
      -47,
      43
    ],
    [
      -33,
      106
    ],
    [
      0,
      2
    ],
    [
      -29,
      176
    ],
    [
      -37,
      111
    ],
    [
      -71,
      137
    ],
    [
      -7,
      18
    ],
    [
      0,
      0
    ],
    [
      0,
      23
    ],
    [
      9,
      80
    ],
    [
      -8,
      57
    ],
    [
      -23,
      47
    ],
    [
      -5,
      49
    ],
    [
      13,
      53
    ],
    [
      0,
      62
    ],
    [
      -10,
      73
    ],
    [
      -46,
      79
    ],
    [
      -81,
      85
    ],
    [
      -68,
      124
    ],
    [
      -57,
      163
    ],
    [
      -56,
      113
    ],
    [
      -55,
      63
    ],
    [
      -38,
      77
    ],
    [
      -20,
      90
    ],
    [
      -6,
      53
    ],
    [
      8,
      14
    ],
    [
      -34,
      101
    ],
    [
      -77,
      187
    ],
    [
      -43,
      137
    ],
    [
      -12,
      86
    ],
    [
      -48,
      103
    ],
    [
      -86,
      119
    ],
    [
      -47,
      78
    ],
    [
      -11,
      54
    ],
    [
      0,
      0
    ],
    [
      -135,
      157
    ],
    [
      -38,
      97
    ],
    [
      -31,
      31
    ],
    [
      -35,
      -3
    ],
    [
      -18,
      9
    ],
    [
      -1,
      23
    ],
    [
      -11,
      1
    ],
    [
      -22,
      -20
    ],
    [
      -71,
      -5
    ],
    [
      -121,
      12
    ],
    [
      -87,
      27
    ],
    [
      -54,
      41
    ],
    [
      -37,
      -5
    ],
    [
      -22,
      -53
    ],
    [
      -46,
      -34
    ],
    [
      -70,
      -15
    ],
    [
      -60,
      -98
    ],
    [
      -51,
      -180
    ],
    [
      -22,
      -116
    ],
    [
      6,
      -52
    ],
    [
      -13,
      -37
    ],
    [
      -33,
      -24
    ],
    [
      -34,
      -52
    ],
    [
      -34,
      -82
    ],
    [
      -39,
      -39
    ],
    [
      -46,
      2
    ],
    [
      -83,
      63
    ],
    [
      -123,
      123
    ],
    [
      -95,
      76
    ],
    [
      -70,
      29
    ],
    [
      -61,
      57
    ],
    [
      -53,
      84
    ],
    [
      -49,
      57
    ],
    [
      -45,
      28
    ],
    [
      -52,
      94
    ],
    [
      -60,
      159
    ],
    [
      -30,
      123
    ],
    [
      0,
      130
    ],
    [
      -78,
      283
    ],
    [
      -42,
      122
    ],
    [
      -31,
      57
    ],
    [
      -60,
      67
    ],
    [
      -90,
      78
    ],
    [
      -121,
      157
    ],
    [
      -151,
      235
    ],
    [
      -107,
      141
    ],
    [
      -63,
      48
    ],
    [
      -55,
      85
    ],
    [
      -46,
      121
    ],
    [
      -45,
      77
    ],
    [
      -5,
      4
    ]
  ],
  [
    [
      42135,
      9189
    ],
    [
      -25,
      -9
    ],
    [
      111,
      139
    ],
    [
      23,
      46
    ],
    [
      29,
      -2
    ],
    [
      -49,
      -77
    ],
    [
      -89,
      -97
    ]
  ],
  [
    [
      41261,
      8292
    ],
    [
      -18,
      -3
    ],
    [
      23,
      49
    ],
    [
      37,
      24
    ],
    [
      83,
      94
    ],
    [
      33,
      6
    ],
    [
      18,
      32
    ],
    [
      7,
      5
    ],
    [
      -5,
      -39
    ],
    [
      -66,
      -56
    ],
    [
      -112,
      -112
    ]
  ],
  [
    [
      41135,
      8066
    ],
    [
      -11,
      -2
    ],
    [
      24,
      74
    ],
    [
      5,
      29
    ],
    [
      40,
      94
    ],
    [
      21,
      14
    ],
    [
      9,
      -40
    ],
    [
      -41,
      -66
    ],
    [
      -47,
      -103
    ]
  ],
  [
    [
      40963,
      7523
    ],
    [
      -16,
      -52
    ],
    [
      4,
      78
    ],
    [
      42,
      175
    ],
    [
      83,
      231
    ],
    [
      35,
      39
    ],
    [
      -96,
      -253
    ],
    [
      -52,
      -218
    ]
  ],
  [
    [
      41056,
      6494
    ],
    [
      -7,
      -42
    ],
    [
      -42,
      195
    ],
    [
      -69,
      443
    ],
    [
      -2,
      253
    ],
    [
      11,
      87
    ],
    [
      17,
      -357
    ],
    [
      76,
      -453
    ],
    [
      16,
      -126
    ]
  ],
  [
    [
      34023,
      20790
    ],
    [
      0,
      -113
    ],
    [
      0,
      -112
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -113
    ],
    [
      0,
      -112
    ],
    [
      0,
      -113
    ],
    [
      127,
      0
    ],
    [
      127,
      0
    ],
    [
      127,
      0
    ],
    [
      126,
      0
    ],
    [
      127,
      0
    ],
    [
      127,
      0
    ],
    [
      127,
      0
    ],
    [
      127,
      0
    ]
  ],
  [
    [
      51214,
      18031
    ],
    [
      11,
      -7
    ],
    [
      24,
      -18
    ],
    [
      12,
      -24
    ]
  ],
  [
    [
      51261,
      17982
    ],
    [
      -8,
      -102
    ],
    [
      -23,
      -51
    ],
    [
      -37,
      -39
    ],
    [
      -49,
      -69
    ],
    [
      -11,
      -64
    ],
    [
      -16,
      -120
    ],
    [
      21,
      -40
    ],
    [
      21,
      -11
    ],
    [
      62,
      28
    ],
    [
      32,
      -13
    ],
    [
      71,
      -144
    ],
    [
      132,
      -57
    ],
    [
      49,
      -35
    ],
    [
      39,
      -75
    ],
    [
      59,
      -44
    ],
    [
      46,
      -63
    ],
    [
      1,
      -41
    ],
    [
      -16,
      -48
    ],
    [
      -6,
      -66
    ],
    [
      -19,
      -41
    ],
    [
      -47,
      -5
    ],
    [
      -29,
      11
    ],
    [
      -152,
      231
    ],
    [
      -18,
      21
    ],
    [
      -56,
      121
    ],
    [
      -66,
      64
    ],
    [
      -21,
      -1
    ],
    [
      94,
      -120
    ],
    [
      39,
      -83
    ],
    [
      68,
      -118
    ],
    [
      48,
      -49
    ],
    [
      36,
      -78
    ],
    [
      33,
      -36
    ],
    [
      90,
      -52
    ],
    [
      -31,
      -37
    ],
    [
      50,
      -32
    ],
    [
      7,
      -58
    ],
    [
      -4,
      -67
    ],
    [
      -70,
      27
    ],
    [
      -2,
      -49
    ],
    [
      6,
      -29
    ],
    [
      -31,
      -24
    ],
    [
      -43,
      32
    ],
    [
      -111,
      177
    ],
    [
      1,
      -23
    ],
    [
      9,
      -28
    ],
    [
      64,
      -114
    ],
    [
      58,
      -68
    ],
    [
      49,
      -31
    ],
    [
      37,
      -57
    ],
    [
      14,
      -35
    ],
    [
      8,
      -52
    ],
    [
      -27,
      -36
    ],
    [
      -32,
      -20
    ],
    [
      -31,
      36
    ],
    [
      -23,
      37
    ],
    [
      -48,
      64
    ],
    [
      -15,
      71
    ],
    [
      -36,
      -4
    ],
    [
      -154,
      91
    ],
    [
      -124,
      10
    ],
    [
      12,
      -18
    ],
    [
      16,
      -12
    ],
    [
      98,
      -22
    ],
    [
      39,
      -42
    ],
    [
      81,
      -37
    ],
    [
      48,
      -10
    ],
    [
      19,
      -113
    ],
    [
      65,
      -78
    ],
    [
      9,
      -58
    ],
    [
      45,
      -6
    ],
    [
      78,
      56
    ],
    [
      51,
      -20
    ],
    [
      73,
      -16
    ],
    [
      17,
      -46
    ],
    [
      13,
      -87
    ],
    [
      26,
      -97
    ],
    [
      16,
      -97
    ]
  ],
  [
    [
      51839,
      15871
    ],
    [
      -39,
      1
    ]
  ],
  [
    [
      48760,
      16764
    ],
    [
      4,
      -29
    ],
    [
      -7,
      -31
    ],
    [
      16,
      -37
    ],
    [
      14,
      -57
    ],
    [
      19,
      -35
    ],
    [
      23,
      -28
    ],
    [
      39,
      -26
    ],
    [
      47,
      -44
    ],
    [
      36,
      -12
    ],
    [
      12,
      1
    ],
    [
      40,
      43
    ],
    [
      34,
      23
    ],
    [
      35,
      46
    ],
    [
      62,
      -63
    ],
    [
      25,
      0
    ],
    [
      61,
      27
    ],
    [
      58,
      8
    ],
    [
      14,
      8
    ],
    [
      22,
      26
    ],
    [
      0,
      54
    ],
    [
      5,
      13
    ],
    [
      10,
      7
    ],
    [
      11,
      1
    ],
    [
      26,
      -20
    ],
    [
      25,
      0
    ],
    [
      108,
      61
    ],
    [
      8,
      -4
    ],
    [
      14,
      -28
    ],
    [
      47,
      36
    ],
    [
      28,
      33
    ],
    [
      12,
      51
    ],
    [
      24,
      49
    ],
    [
      -5,
      22
    ],
    [
      -15,
      29
    ],
    [
      20,
      67
    ],
    [
      29,
      66
    ],
    [
      110,
      200
    ],
    [
      34,
      122
    ],
    [
      46,
      78
    ],
    [
      15,
      62
    ],
    [
      34,
      61
    ],
    [
      24,
      127
    ],
    [
      15,
      25
    ],
    [
      21,
      4
    ],
    [
      22,
      -16
    ],
    [
      15,
      -23
    ],
    [
      10,
      -38
    ],
    [
      55,
      -33
    ],
    [
      47,
      -4
    ],
    [
      32,
      24
    ],
    [
      19,
      44
    ],
    [
      26,
      84
    ],
    [
      24,
      49
    ],
    [
      16,
      62
    ],
    [
      16,
      43
    ],
    [
      25,
      27
    ],
    [
      62,
      -1
    ],
    [
      32,
      38
    ],
    [
      25,
      43
    ],
    [
      15,
      14
    ],
    [
      18,
      -2
    ],
    [
      56,
      70
    ],
    [
      74,
      146
    ],
    [
      16,
      92
    ],
    [
      19,
      66
    ],
    [
      8,
      68
    ],
    [
      14,
      37
    ],
    [
      66,
      -74
    ],
    [
      38,
      -42
    ],
    [
      86,
      -97
    ],
    [
      57,
      -64
    ],
    [
      22,
      74
    ],
    [
      33,
      108
    ]
  ],
  [
    [
      52099,
      17202
    ],
    [
      -111,
      -355
    ],
    [
      4,
      -66
    ],
    [
      -22,
      -21
    ],
    [
      -34,
      -17
    ],
    [
      -35,
      -39
    ],
    [
      -23,
      -43
    ],
    [
      -21,
      -116
    ],
    [
      -41,
      -131
    ],
    [
      -25,
      55
    ],
    [
      -7,
      46
    ],
    [
      12,
      122
    ],
    [
      44,
      199
    ],
    [
      48,
      124
    ],
    [
      37,
      58
    ],
    [
      31,
      120
    ]
  ],
  [
    [
      52175,
      17216
    ],
    [
      0,
      0
    ],
    [
      -54,
      -137
    ],
    [
      -23,
      -15
    ],
    [
      64,
      149
    ]
  ],
  [
    [
      53125,
      23502
    ],
    [
      86,
      0
    ],
    [
      211,
      0
    ],
    [
      211,
      1
    ],
    [
      210,
      0
    ],
    [
      211,
      1
    ]
  ],
  [
    [
      28075,
      27100
    ],
    [
      52,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      216,
      0
    ],
    [
      53,
      0
    ]
  ],
  [
    [
      27856,
      24538
    ],
    [
      -16,
      12
    ],
    [
      -24,
      3
    ],
    [
      -53,
      46
    ],
    [
      -31,
      45
    ],
    [
      -94,
      -3
    ],
    [
      -19,
      29
    ],
    [
      -105,
      -29
    ],
    [
      -33,
      30
    ],
    [
      -57,
      -20
    ],
    [
      14,
      85
    ],
    [
      -2,
      106
    ],
    [
      2,
      103
    ],
    [
      15,
      -75
    ],
    [
      35,
      -80
    ],
    [
      17,
      91
    ],
    [
      12,
      114
    ],
    [
      -35,
      44
    ],
    [
      -57,
      32
    ],
    [
      -21,
      107
    ],
    [
      137,
      91
    ],
    [
      -73,
      19
    ],
    [
      -28,
      41
    ],
    [
      -36,
      5
    ],
    [
      -2,
      -32
    ],
    [
      -12,
      -41
    ],
    [
      -12,
      55
    ],
    [
      -3,
      64
    ],
    [
      -15,
      110
    ],
    [
      -56,
      177
    ],
    [
      -34,
      229
    ],
    [
      -42,
      113
    ],
    [
      -82,
      109
    ],
    [
      -21,
      63
    ],
    [
      -20,
      160
    ],
    [
      11,
      121
    ],
    [
      -15,
      86
    ],
    [
      39,
      -5
    ],
    [
      104,
      -67
    ],
    [
      128,
      -53
    ],
    [
      39,
      -38
    ],
    [
      62,
      -29
    ],
    [
      345,
      -44
    ],
    [
      23,
      4
    ],
    [
      45,
      28
    ],
    [
      19,
      -4
    ],
    [
      50,
      -62
    ],
    [
      26,
      -8
    ],
    [
      33,
      4
    ],
    [
      24,
      11
    ],
    [
      42,
      43
    ],
    [
      5,
      -15
    ],
    [
      0,
      -40
    ],
    [
      15,
      -57
    ],
    [
      30,
      -73
    ],
    [
      12,
      -46
    ],
    [
      -62,
      -129
    ],
    [
      -12,
      -3
    ],
    [
      -2,
      44
    ],
    [
      -8,
      9
    ],
    [
      -116,
      -218
    ],
    [
      -41,
      -103
    ],
    [
      -4,
      -47
    ],
    [
      2,
      -27
    ],
    [
      16,
      -7
    ],
    [
      37,
      11
    ],
    [
      55,
      43
    ],
    [
      3,
      9
    ],
    [
      -52,
      -15
    ],
    [
      -24,
      -2
    ],
    [
      3,
      49
    ],
    [
      6,
      23
    ],
    [
      34,
      73
    ],
    [
      35,
      43
    ],
    [
      50,
      46
    ],
    [
      29,
      38
    ],
    [
      20,
      56
    ],
    [
      55,
      66
    ],
    [
      10,
      18
    ],
    [
      -2,
      55
    ],
    [
      4,
      10
    ],
    [
      26,
      -7
    ],
    [
      12,
      -94
    ],
    [
      -7,
      -42
    ],
    [
      -48,
      -51
    ],
    [
      -6,
      -18
    ],
    [
      8,
      -70
    ],
    [
      -7,
      -6
    ],
    [
      -18,
      8
    ],
    [
      -6,
      -5
    ],
    [
      46,
      -75
    ],
    [
      14,
      -59
    ],
    [
      2,
      -53
    ],
    [
      -12,
      -101
    ],
    [
      -14,
      -16
    ],
    [
      -22,
      6
    ],
    [
      -30,
      31
    ],
    [
      -7,
      -10
    ],
    [
      -24,
      -78
    ],
    [
      -8,
      7
    ],
    [
      -14,
      93
    ],
    [
      -8,
      7
    ],
    [
      -47,
      -43
    ],
    [
      -18,
      -41
    ],
    [
      -16,
      -64
    ],
    [
      -20,
      -31
    ],
    [
      57,
      -7
    ],
    [
      52,
      14
    ],
    [
      42,
      -31
    ],
    [
      14,
      -1
    ],
    [
      38,
      30
    ],
    [
      11,
      20
    ],
    [
      32,
      98
    ],
    [
      15,
      18
    ],
    [
      24,
      1
    ],
    [
      22,
      14
    ],
    [
      34,
      54
    ],
    [
      1,
      21
    ],
    [
      -12,
      121
    ],
    [
      4,
      68
    ],
    [
      -7,
      21
    ],
    [
      -15,
      23
    ],
    [
      2,
      22
    ],
    [
      12,
      35
    ],
    [
      1,
      33
    ],
    [
      -10,
      29
    ],
    [
      4,
      32
    ],
    [
      32,
      71
    ],
    [
      6,
      31
    ],
    [
      39,
      70
    ],
    [
      -10,
      28
    ],
    [
      -29,
      35
    ],
    [
      -18,
      30
    ],
    [
      -18,
      47
    ],
    [
      -13,
      16
    ],
    [
      -5,
      -7
    ],
    [
      19,
      -78
    ],
    [
      -4,
      -5
    ],
    [
      -50,
      42
    ],
    [
      -12,
      26
    ],
    [
      -6,
      36
    ],
    [
      5,
      27
    ],
    [
      27,
      27
    ],
    [
      32,
      9
    ],
    [
      -3,
      22
    ],
    [
      -40,
      73
    ],
    [
      -27,
      33
    ],
    [
      -21,
      16
    ],
    [
      -28,
      4
    ],
    [
      -12,
      12
    ],
    [
      -4,
      17
    ],
    [
      6,
      22
    ],
    [
      15,
      8
    ],
    [
      43,
      -9
    ],
    [
      24,
      15
    ],
    [
      -3,
      29
    ],
    [
      -7,
      16
    ],
    [
      2,
      103
    ],
    [
      -17,
      84
    ],
    [
      -8,
      14
    ],
    [
      -10,
      2
    ],
    [
      -9,
      -11
    ],
    [
      -28,
      -3
    ],
    [
      -16,
      27
    ],
    [
      -19,
      53
    ],
    [
      -33,
      126
    ]
  ],
  [
    [
      27924,
      27100
    ],
    [
      19,
      0
    ],
    [
      -7,
      -13
    ],
    [
      -8,
      2
    ],
    [
      -4,
      11
    ]
  ],
  [
    [
      28078,
      26811
    ],
    [
      7,
      -19
    ],
    [
      -21,
      -19
    ],
    [
      -14,
      -3
    ],
    [
      -23,
      30
    ],
    [
      -10,
      4
    ],
    [
      8,
      -47
    ],
    [
      -3,
      -16
    ],
    [
      -47,
      29
    ],
    [
      -9,
      23
    ],
    [
      13,
      24
    ],
    [
      30,
      25
    ],
    [
      10,
      3
    ],
    [
      59,
      -34
    ]
  ],
  [
    [
      27961,
      26656
    ],
    [
      13,
      -29
    ],
    [
      -54,
      19
    ],
    [
      -23,
      17
    ],
    [
      -7,
      16
    ],
    [
      -8,
      55
    ],
    [
      3,
      17
    ],
    [
      25,
      7
    ],
    [
      45,
      -68
    ],
    [
      6,
      -34
    ]
  ],
  [
    [
      28058,
      26594
    ],
    [
      -8,
      -9
    ],
    [
      -27,
      12
    ],
    [
      -16,
      20
    ],
    [
      -5,
      25
    ],
    [
      10,
      48
    ],
    [
      14,
      12
    ],
    [
      8,
      -3
    ],
    [
      4,
      -42
    ],
    [
      24,
      -45
    ],
    [
      -4,
      -18
    ]
  ],
  [
    [
      28184,
      26346
    ],
    [
      25,
      -119
    ],
    [
      11,
      49
    ],
    [
      69,
      -85
    ],
    [
      0,
      -42
    ],
    [
      -9,
      -14
    ],
    [
      -14,
      -5
    ],
    [
      -13,
      12
    ],
    [
      -13,
      30
    ],
    [
      -15,
      15
    ],
    [
      -33,
      10
    ],
    [
      -17,
      34
    ],
    [
      -6,
      23
    ],
    [
      -2,
      66
    ],
    [
      -8,
      21
    ],
    [
      -18,
      4
    ],
    [
      -16,
      16
    ],
    [
      -26,
      47
    ],
    [
      -4,
      12
    ],
    [
      12,
      38
    ],
    [
      28,
      63
    ],
    [
      21,
      30
    ],
    [
      13,
      -3
    ],
    [
      15,
      -19
    ],
    [
      19,
      -35
    ],
    [
      -4,
      -24
    ],
    [
      -75,
      -48
    ],
    [
      -3,
      -11
    ],
    [
      37,
      -14
    ],
    [
      14,
      -12
    ],
    [
      12,
      -39
    ]
  ],
  [
    [
      28222,
      25838
    ],
    [
      -2,
      -17
    ],
    [
      -28,
      21
    ],
    [
      -9,
      19
    ],
    [
      1,
      43
    ],
    [
      7,
      27
    ],
    [
      5,
      6
    ],
    [
      16,
      -12
    ],
    [
      5,
      -7
    ],
    [
      5,
      -80
    ]
  ],
  [
    [
      28275,
      25658
    ],
    [
      -3,
      -20
    ],
    [
      -19,
      -16
    ],
    [
      -10,
      4
    ],
    [
      -1,
      24
    ],
    [
      -5,
      4
    ],
    [
      -21,
      -29
    ],
    [
      2,
      57
    ],
    [
      10,
      61
    ],
    [
      9,
      1
    ],
    [
      13,
      -40
    ],
    [
      25,
      -46
    ]
  ],
  [
    [
      28042,
      25487
    ],
    [
      -5,
      -18
    ],
    [
      -7,
      1
    ],
    [
      -16,
      36
    ],
    [
      -2,
      25
    ],
    [
      14,
      19
    ],
    [
      18,
      -53
    ],
    [
      -2,
      -10
    ]
  ],
  [
    [
      43621,
      25087
    ],
    [
      0,
      0
    ],
    [
      18,
      -23
    ],
    [
      43,
      -34
    ],
    [
      34,
      -4
    ],
    [
      43,
      7
    ],
    [
      170,
      58
    ],
    [
      72,
      40
    ],
    [
      71,
      68
    ],
    [
      7,
      2
    ],
    [
      30,
      -13
    ],
    [
      9,
      -6
    ],
    [
      92,
      78
    ],
    [
      30,
      10
    ],
    [
      23,
      -2
    ],
    [
      30,
      -31
    ],
    [
      7,
      -18
    ],
    [
      -10,
      -36
    ],
    [
      -26,
      -53
    ],
    [
      -13,
      -44
    ],
    [
      0,
      -36
    ],
    [
      -11,
      -39
    ],
    [
      -29,
      -53
    ],
    [
      10,
      -14
    ],
    [
      78,
      38
    ],
    [
      11,
      15
    ],
    [
      2,
      8
    ],
    [
      -5,
      11
    ],
    [
      9,
      5
    ],
    [
      61,
      -52
    ],
    [
      40,
      -29
    ],
    [
      35,
      -14
    ],
    [
      31,
      8
    ]
  ],
  [
    [
      45902,
      23595
    ],
    [
      -1,
      -24
    ],
    [
      -9,
      -45
    ],
    [
      -29,
      -36
    ],
    [
      -74,
      -45
    ],
    [
      -12,
      -31
    ],
    [
      -2,
      -25
    ],
    [
      -48,
      -105
    ],
    [
      -23,
      -65
    ],
    [
      -16,
      -67
    ],
    [
      5,
      -42
    ],
    [
      25,
      -17
    ],
    [
      20,
      6
    ],
    [
      16,
      31
    ],
    [
      24,
      28
    ],
    [
      32,
      24
    ],
    [
      24,
      37
    ],
    [
      32,
      89
    ],
    [
      37,
      51
    ],
    [
      19,
      3
    ],
    [
      6,
      -2
    ],
    [
      38,
      23
    ],
    [
      31,
      -7
    ],
    [
      18,
      -35
    ],
    [
      19,
      -24
    ],
    [
      4,
      -22
    ],
    [
      -9,
      -51
    ],
    [
      -18,
      -52
    ],
    [
      -25,
      -56
    ],
    [
      -23,
      -83
    ],
    [
      -21,
      -111
    ],
    [
      -4,
      -83
    ],
    [
      12,
      -57
    ],
    [
      -12,
      -50
    ],
    [
      -35,
      -45
    ],
    [
      -27,
      -59
    ],
    [
      -22,
      -75
    ],
    [
      -12,
      -62
    ],
    [
      -2,
      -51
    ],
    [
      3,
      -38
    ],
    [
      13,
      -51
    ],
    [
      -1,
      -26
    ],
    [
      -38,
      -113
    ],
    [
      -14,
      -55
    ],
    [
      -2,
      -43
    ],
    [
      -9,
      -42
    ],
    [
      -29,
      -87
    ],
    [
      -9,
      -48
    ],
    [
      -2,
      -44
    ],
    [
      7,
      -73
    ],
    [
      -4,
      -24
    ],
    [
      2,
      -19
    ],
    [
      7,
      -12
    ],
    [
      0,
      -23
    ],
    [
      -7,
      -33
    ],
    [
      2,
      -26
    ],
    [
      13,
      -18
    ],
    [
      9,
      -35
    ],
    [
      3,
      -52
    ],
    [
      10,
      -44
    ],
    [
      16,
      -34
    ],
    [
      3,
      -51
    ],
    [
      -10,
      -66
    ],
    [
      -5,
      -124
    ],
    [
      0,
      -41
    ]
  ],
  [
    [
      44412,
      25229
    ],
    [
      -17,
      -5
    ],
    [
      -36,
      8
    ],
    [
      0,
      13
    ],
    [
      38,
      18
    ],
    [
      17,
      5
    ],
    [
      4,
      -7
    ],
    [
      -6,
      -32
    ]
  ],
  [
    [
      44306,
      25270
    ],
    [
      9,
      -3
    ],
    [
      13,
      -18
    ],
    [
      2,
      -13
    ],
    [
      -7,
      -6
    ],
    [
      -19,
      15
    ],
    [
      -3,
      12
    ],
    [
      5,
      13
    ]
  ],
  [
    [
      44481,
      25341
    ],
    [
      -8,
      -16
    ],
    [
      -17,
      -14
    ],
    [
      -6,
      7
    ],
    [
      4,
      27
    ],
    [
      8,
      16
    ],
    [
      13,
      5
    ],
    [
      6,
      -7
    ],
    [
      0,
      -18
    ]
  ],
  [
    [
      44358,
      25146
    ],
    [
      -12,
      -13
    ],
    [
      -2,
      -14
    ],
    [
      -15,
      -13
    ],
    [
      -29,
      -12
    ],
    [
      -12,
      2
    ],
    [
      5,
      17
    ],
    [
      15,
      21
    ],
    [
      67,
      50
    ],
    [
      12,
      -1
    ],
    [
      4,
      -12
    ],
    [
      -33,
      -25
    ]
  ],
  [
    [
      46184,
      23770
    ],
    [
      23,
      -6
    ],
    [
      9,
      -19
    ],
    [
      -3,
      -31
    ],
    [
      -9,
      -11
    ],
    [
      -16,
      7
    ],
    [
      -6,
      -17
    ],
    [
      4,
      -41
    ],
    [
      -6,
      -19
    ],
    [
      -13,
      3
    ],
    [
      -1,
      -8
    ],
    [
      12,
      -18
    ],
    [
      1,
      -21
    ],
    [
      -9,
      -22
    ],
    [
      -10,
      -10
    ],
    [
      -9,
      2
    ],
    [
      -13,
      -25
    ],
    [
      -19,
      -52
    ],
    [
      -7,
      -30
    ],
    [
      6,
      -8
    ],
    [
      -4,
      -18
    ],
    [
      -47,
      -78
    ],
    [
      -18,
      -8
    ],
    [
      -19,
      11
    ],
    [
      -14,
      23
    ],
    [
      -9,
      35
    ],
    [
      -2,
      27
    ],
    [
      3,
      19
    ],
    [
      41,
      70
    ],
    [
      19,
      45
    ],
    [
      10,
      51
    ],
    [
      19,
      33
    ],
    [
      28,
      14
    ],
    [
      22,
      31
    ],
    [
      18,
      50
    ],
    [
      19,
      21
    ]
  ],
  [
    [
      46247,
      23871
    ],
    [
      24,
      0
    ],
    [
      8,
      -5
    ],
    [
      3,
      -13
    ],
    [
      -3,
      -38
    ],
    [
      -15,
      -9
    ],
    [
      -28,
      3
    ],
    [
      -10,
      20
    ],
    [
      15,
      52
    ],
    [
      6,
      -10
    ]
  ]
], Fi = {
  scale: [
    0.0019735136891562196,
    0.0011080685760387287
  ],
  translate: [
    -178.19451843993753,
    18.963909185849403
  ]
}, zi = {
  states: {
    type: "GeometryCollection",
    geometries: [
      {
        arcs: [
          [
            [
              0
            ]
          ],
          [
            [
              1
            ]
          ],
          [
            [
              2
            ]
          ],
          [
            [
              3
            ]
          ],
          [
            [
              4
            ]
          ],
          [
            [
              5
            ]
          ],
          [
            [
              6
            ]
          ],
          [
            [
              7
            ]
          ],
          [
            [
              8
            ]
          ],
          [
            [
              9
            ]
          ],
          [
            [
              10
            ]
          ],
          [
            [
              11
            ]
          ],
          [
            [
              12
            ]
          ],
          [
            [
              13
            ]
          ],
          [
            [
              14
            ]
          ],
          [
            [
              15
            ]
          ],
          [
            [
              16
            ]
          ],
          [
            [
              17
            ]
          ],
          [
            [
              18
            ]
          ],
          [
            [
              19
            ]
          ],
          [
            [
              20
            ]
          ],
          [
            [
              21
            ]
          ],
          [
            [
              22
            ]
          ],
          [
            [
              23
            ]
          ],
          [
            [
              24
            ]
          ],
          [
            [
              25
            ]
          ],
          [
            [
              26
            ]
          ],
          [
            [
              27
            ]
          ],
          [
            [
              28
            ]
          ],
          [
            [
              29
            ]
          ],
          [
            [
              30
            ]
          ],
          [
            [
              31
            ]
          ],
          [
            [
              32
            ]
          ],
          [
            [
              33
            ]
          ],
          [
            [
              34
            ]
          ],
          [
            [
              35
            ]
          ],
          [
            [
              36
            ]
          ],
          [
            [
              37
            ]
          ],
          [
            [
              38
            ]
          ],
          [
            [
              39
            ]
          ],
          [
            [
              40
            ]
          ],
          [
            [
              41
            ]
          ],
          [
            [
              42
            ]
          ],
          [
            [
              43
            ]
          ],
          [
            [
              44
            ]
          ],
          [
            [
              45
            ]
          ],
          [
            [
              46
            ]
          ],
          [
            [
              47
            ]
          ],
          [
            [
              48
            ]
          ],
          [
            [
              49
            ]
          ],
          [
            [
              50
            ]
          ],
          [
            [
              51
            ]
          ],
          [
            [
              52
            ]
          ],
          [
            [
              53
            ]
          ],
          [
            [
              54
            ]
          ],
          [
            [
              55
            ]
          ],
          [
            [
              56
            ]
          ],
          [
            [
              57
            ]
          ],
          [
            [
              58
            ]
          ],
          [
            [
              59
            ]
          ],
          [
            [
              60
            ]
          ],
          [
            [
              61
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-AK"
        }
      },
      {
        arcs: [
          [
            [
              62,
              63,
              64,
              65,
              66
            ]
          ],
          [
            [
              67
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-AL"
        }
      },
      {
        arcs: [
          [
            68,
            69,
            70,
            71,
            72,
            73
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-AR"
        }
      },
      {
        arcs: [
          [
            74,
            75,
            76,
            77,
            78
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-AZ"
        }
      },
      {
        arcs: [
          [
            [
              -76,
              79,
              80,
              81
            ]
          ],
          [
            [
              82
            ]
          ],
          [
            [
              83
            ]
          ],
          [
            [
              84
            ]
          ],
          [
            [
              85
            ]
          ],
          [
            [
              86
            ]
          ],
          [
            [
              87
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-CA"
        }
      },
      {
        arcs: [
          [
            88,
            89,
            90,
            91,
            92,
            93
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-CO"
        }
      },
      {
        arcs: [
          [
            94,
            95,
            96,
            97
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-CT"
        }
      },
      {
        arcs: [
          [
            98,
            99,
            100
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-DE"
        }
      },
      {
        arcs: [
          [
            [
              -67,
              101,
              102
            ]
          ],
          [
            [
              103
            ]
          ],
          [
            [
              104
            ]
          ],
          [
            [
              105
            ]
          ],
          [
            [
              106
            ]
          ],
          [
            [
              107
            ]
          ],
          [
            [
              108
            ]
          ],
          [
            [
              109
            ]
          ],
          [
            [
              110
            ]
          ],
          [
            [
              111
            ]
          ],
          [
            [
              112
            ]
          ],
          [
            [
              113
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-FL"
        }
      },
      {
        arcs: [
          [
            [
              -66,
              114,
              115,
              116,
              117,
              -102
            ]
          ],
          [
            [
              118
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-GA"
        }
      },
      {
        arcs: [
          [
            [
              119
            ]
          ],
          [
            [
              120
            ]
          ],
          [
            [
              121
            ]
          ],
          [
            [
              122
            ]
          ],
          [
            [
              123
            ]
          ],
          [
            [
              124
            ]
          ],
          [
            [
              125
            ]
          ],
          [
            [
              126
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-HI"
        }
      },
      {
        arcs: [
          [
            127,
            128,
            129,
            130,
            131,
            132
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-IA"
        }
      },
      {
        arcs: [
          [
            133,
            134,
            135,
            136,
            137,
            138,
            139
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-ID"
        }
      },
      {
        arcs: [
          [
            -133,
            140,
            141,
            142,
            143,
            144
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-IL"
        }
      },
      {
        arcs: [
          [
            -143,
            145,
            146,
            147,
            148
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-IN"
        }
      },
      {
        arcs: [
          [
            -92,
            149,
            150,
            151
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-KS"
        }
      },
      {
        arcs: [
          [
            [
              -144,
              -149,
              152,
              153,
              154,
              155,
              156
            ]
          ],
          [
            [
              157,
              158
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-KY"
        }
      },
      {
        arcs: [
          [
            [
              -71,
              159,
              160,
              161
            ]
          ],
          [
            [
              162
            ]
          ],
          [
            [
              163
            ]
          ],
          [
            [
              164
            ]
          ],
          [
            [
              165
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-LA"
        }
      },
      {
        arcs: [
          [
            [
              -98,
              166,
              167,
              168,
              169,
              170
            ]
          ],
          [
            [
              171
            ]
          ],
          [
            [
              172
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-MA"
        }
      },
      {
        arcs: [
          [
            [
              173,
              174,
              175,
              176,
              -99,
              177,
              178,
              179
            ]
          ],
          [
            [
              180,
              181
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-MD"
        }
      },
      {
        arcs: [
          [
            [
              182,
              183,
              184
            ]
          ],
          [
            [
              185
            ]
          ],
          [
            [
              186
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-ME"
        }
      },
      {
        arcs: [
          [
            [
              187,
              188,
              -147,
              189
            ]
          ],
          [
            [
              190,
              191
            ]
          ],
          [
            [
              192
            ]
          ],
          [
            [
              193
            ]
          ],
          [
            [
              194
            ]
          ],
          [
            [
              195
            ]
          ],
          [
            [
              196
            ]
          ],
          [
            [
              197
            ]
          ],
          [
            [
              198
            ]
          ],
          [
            [
              199
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-MI"
        }
      },
      {
        arcs: [
          [
            200,
            201,
            -131,
            202,
            203
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-MN"
        }
      },
      {
        arcs: [
          [
            -74,
            204,
            -151,
            205,
            -128,
            -145,
            -157,
            206,
            -159,
            207
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-MO"
        }
      },
      {
        arcs: [
          [
            [
              -64,
              208,
              -160,
              -70,
              209
            ]
          ],
          [
            [
              210
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-MS"
        }
      },
      {
        arcs: [
          [
            211,
            212,
            213,
            214,
            -135,
            215
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-MT"
        }
      },
      {
        arcs: [
          [
            [
              -116,
              216,
              217,
              218,
              219
            ]
          ],
          [
            [
              220,
              221
            ]
          ],
          [
            [
              222
            ]
          ],
          [
            [
              223
            ]
          ],
          [
            [
              224
            ]
          ],
          [
            [
              225
            ]
          ],
          [
            [
              226
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-NC"
        }
      },
      {
        arcs: [
          [
            227,
            -204,
            228,
            -213,
            229
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-ND"
        }
      },
      {
        arcs: [
          [
            -91,
            230,
            231,
            -129,
            -206,
            -150
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-NE"
        }
      },
      {
        arcs: [
          [
            232,
            -184,
            233,
            -169,
            234
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-NH"
        }
      },
      {
        arcs: [
          [
            [
              235,
              236,
              237
            ]
          ],
          [
            [
              238
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-NJ"
        }
      },
      {
        arcs: [
          [
            -79,
            -94,
            239,
            240,
            241
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-NM"
        }
      },
      {
        arcs: [
          [
            -77,
            -82,
            242,
            -138,
            243
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-NV"
        }
      },
      {
        arcs: [
          [
            [
              244,
              245,
              -167,
              -97,
              246,
              -237,
              247,
              248
            ]
          ],
          [
            [
              249
            ]
          ],
          [
            [
              250
            ]
          ],
          [
            [
              251
            ]
          ],
          [
            [
              252
            ]
          ],
          [
            [
              253
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-NY"
        }
      },
      {
        arcs: [
          [
            254,
            255,
            -153,
            -148,
            -189,
            256
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-OH"
        }
      },
      {
        arcs: [
          [
            -73,
            257,
            -240,
            -93,
            -152,
            -205
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-OK"
        }
      },
      {
        arcs: [
          [
            -81,
            258,
            259,
            -139,
            -243
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-OR"
        }
      },
      {
        arcs: [
          [
            -248,
            -236,
            260,
            -100,
            -177,
            261,
            -255,
            262
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-PA"
        }
      },
      {
        arcs: [
          [
            [
              -95,
              -171,
              263
            ]
          ],
          [
            [
              264
            ]
          ],
          [
            [
              265
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-RI"
        }
      },
      {
        arcs: [
          [
            -117,
            -220,
            266
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-SC"
        }
      },
      {
        arcs: [
          [
            -130,
            -232,
            267,
            -214,
            -229,
            -203
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-SD"
        }
      },
      {
        arcs: [
          [
            -65,
            -210,
            -69,
            -208,
            -158,
            -207,
            -156,
            268,
            -217,
            -115
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-TN"
        }
      },
      {
        arcs: [
          [
            [
              -72,
              -162,
              269,
              -241,
              -258
            ]
          ],
          [
            [
              270
            ]
          ],
          [
            [
              271
            ]
          ],
          [
            [
              272
            ]
          ],
          [
            [
              273
            ]
          ],
          [
            [
              274
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-TX"
        }
      },
      {
        arcs: [
          [
            -78,
            -244,
            -137,
            275,
            -89
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-UT"
        }
      },
      {
        arcs: [
          [
            [
              276,
              277,
              -221,
              278,
              -218,
              -269,
              -155,
              279,
              -175
            ]
          ],
          [
            [
              -179,
              280
            ]
          ],
          [
            [
              -181,
              281
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-VA"
        }
      },
      {
        arcs: [
          [
            282,
            -235,
            -168,
            -246
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-VT"
        }
      },
      {
        arcs: [
          [
            [
              283,
              -140,
              -260,
              284
            ]
          ],
          [
            [
              285
            ]
          ],
          [
            [
              286
            ]
          ],
          [
            [
              287
            ]
          ],
          [
            [
              288
            ]
          ],
          [
            [
              289
            ]
          ],
          [
            [
              290
            ]
          ],
          [
            [
              291
            ]
          ],
          [
            [
              292
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-WA"
        }
      },
      {
        arcs: [
          [
            [
              -132,
              -202,
              293,
              -191,
              294,
              -141
            ]
          ],
          [
            [
              295
            ]
          ],
          [
            [
              296
            ]
          ],
          [
            [
              297
            ]
          ],
          [
            [
              298
            ]
          ],
          [
            [
              299
            ]
          ],
          [
            [
              300
            ]
          ]
        ],
        type: "MultiPolygon",
        properties: {
          iso: "US-WI"
        }
      },
      {
        arcs: [
          [
            -154,
            -256,
            -262,
            -176,
            -280
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-WV"
        }
      },
      {
        arcs: [
          [
            -90,
            -276,
            -136,
            -215,
            -268,
            -231
          ]
        ],
        type: "Polygon",
        properties: {
          iso: "US-WY"
        }
      }
    ]
  }
}, n9 = {
  type: Bi,
  arcs: Ui,
  transform: Fi,
  objects: zi
}, Gi = "Topology", Ji = {
  states: {
    type: "GeometryCollection",
    geometries: [
      {
        type: "Polygon",
        arcs: [
          [
            0,
            1
          ]
        ],
        properties: {
          iso: "US-ME"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            2,
            3,
            4,
            5
          ]
        ],
        properties: {
          iso: "US-RI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            6,
            7,
            8,
            9
          ]
        ],
        properties: {
          iso: "US-VT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            10,
            11,
            12,
            13,
            14,
            15
          ]
        ],
        properties: {
          iso: "US-OK"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            16,
            17,
            18,
            19,
            20,
            21
          ]
        ],
        properties: {
          iso: "US-SC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            22,
            23,
            24,
            -17,
            25,
            26
          ]
        ],
        properties: {
          iso: "US-DC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            27,
            -26,
            -22,
            28,
            29,
            30
          ]
        ],
        properties: {
          iso: "US-WV"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            31,
            32,
            33,
            34
          ]
        ],
        properties: {
          iso: "US-CA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            35,
            36,
            37,
            -11,
            38,
            39
          ]
        ],
        properties: {
          iso: "US-KS"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            40,
            -30,
            41,
            42,
            43,
            44
          ]
        ],
        properties: {
          iso: "US-KY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            45,
            46,
            47,
            48,
            -24,
            49
          ]
        ],
        properties: {
          iso: "US-MD"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            50,
            -44,
            51,
            -36,
            52,
            53
          ]
        ],
        properties: {
          iso: "US-MO"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            54,
            -53,
            -40,
            55,
            56,
            57
          ]
        ],
        properties: {
          iso: "US-NE"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -56,
            -39,
            -16,
            58,
            59,
            60
          ]
        ],
        properties: {
          iso: "US-NM"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -49,
            61,
            62,
            63,
            -18,
            -25
          ]
        ],
        properties: {
          iso: "US-NC"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -29,
            -21,
            64,
            65,
            66,
            -42
          ]
        ],
        properties: {
          iso: "US-TN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            67,
            68,
            -54,
            -55,
            69,
            70
          ]
        ],
        properties: {
          iso: "US-IA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            71,
            72,
            73,
            -32,
            74,
            75
          ]
        ],
        properties: {
          iso: "US-NV"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            76,
            77,
            78,
            -46,
            79,
            80
          ]
        ],
        properties: {
          iso: "US-NJ"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            81,
            -70,
            -58,
            82,
            83,
            84
          ]
        ],
        properties: {
          iso: "US-SD"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            85,
            86,
            -27,
            -28,
            87,
            88
          ]
        ],
        properties: {
          iso: "US-OH"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            89,
            -84,
            90,
            -72,
            91,
            92
          ]
        ],
        properties: {
          iso: "US-WY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            93,
            94,
            -62,
            -48
          ]
        ],
        properties: {
          iso: "US-VA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            95,
            96,
            -94,
            -47,
            -79
          ]
        ],
        properties: {
          iso: "US-DE"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            97,
            98,
            99
          ]
        ],
        properties: {
          iso: "US-FL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -1,
            100,
            -6,
            101,
            -7,
            102
          ]
        ],
        properties: {
          iso: "US-NH"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            103
          ]
        ],
        properties: {
          iso: "US-HI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            104,
            105,
            -13
          ]
        ],
        properties: {
          iso: "US-TX"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -20,
            106,
            -100,
            107,
            108,
            -65
          ]
        ],
        properties: {
          iso: "US-AL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -59,
            -15,
            109,
            110
          ]
        ],
        properties: {
          iso: "US-AZ"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -64,
            111,
            -98,
            -107,
            -19
          ]
        ],
        properties: {
          iso: "US-GA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            112,
            113,
            114,
            -105,
            -12,
            -38
          ]
        ],
        properties: {
          iso: "US-LA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -66,
            -109,
            115,
            -114,
            116
          ]
        ],
        properties: {
          iso: "US-MS"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            117,
            -60,
            -111,
            118,
            -33,
            -74
          ]
        ],
        properties: {
          iso: "US-UT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -83,
            -57,
            -61,
            -118,
            -73,
            -91
          ]
        ],
        properties: {
          iso: "US-CO"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -43,
            -67,
            -117,
            -113,
            -37,
            -52
          ]
        ],
        properties: {
          iso: "US-AR"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            119,
            -92,
            -76,
            120,
            121,
            122
          ]
        ],
        properties: {
          iso: "US-ID"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -121,
            -75,
            -35,
            123
          ]
        ],
        properties: {
          iso: "US-OR"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            124,
            125,
            -45,
            -51,
            -69,
            126
          ]
        ],
        properties: {
          iso: "US-IL"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            127,
            -80,
            -50,
            -23,
            -87,
            128
          ]
        ],
        properties: {
          iso: "US-PA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            129,
            -88,
            -31,
            -41,
            -126,
            130
          ]
        ],
        properties: {
          iso: "US-IN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -9,
            131,
            -81,
            -128,
            132
          ]
        ],
        properties: {
          iso: "US-NY"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            133,
            -123,
            134
          ]
        ],
        properties: {
          iso: "US-WA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -127,
            -68,
            135,
            136
          ]
        ],
        properties: {
          iso: "US-WI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -102,
            -5,
            137,
            -77,
            -132,
            -8
          ]
        ],
        properties: {
          iso: "US-MA"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -89,
            -130,
            138
          ]
        ],
        properties: {
          iso: "US-MI"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -136,
            -71,
            -82,
            139,
            140
          ]
        ],
        properties: {
          iso: "US-MN"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            141,
            -93,
            -120,
            -134,
            142
          ]
        ],
        properties: {
          iso: "US-MT"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -140,
            -85,
            -90,
            -142,
            143
          ]
        ],
        properties: {
          iso: "US-ND"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            144
          ]
        ],
        properties: {
          iso: "US-AK"
        }
      },
      {
        type: "Polygon",
        arcs: [
          [
            -4,
            145,
            -96,
            -78,
            -138
          ]
        ],
        properties: {
          iso: "US-CT"
        }
      }
    ]
  }
}, Hi = [
  [
    [
      960161,
      870593
    ],
    [
      -39838,
      33425
    ]
  ],
  [
    [
      920323,
      904018
    ],
    [
      0,
      64696
    ],
    [
      39838,
      31285
    ],
    [
      39838,
      -31285
    ],
    [
      0,
      -64696
    ],
    [
      -39838,
      -33425
    ]
  ],
  [
    [
      960161,
      801560
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ],
    [
      -39838,
      -37846
    ]
  ],
  [
    [
      960161,
      654636
    ],
    [
      -39838,
      37846
    ]
  ],
  [
    [
      920323,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      920323,
      765942
    ],
    [
      39838,
      35618
    ]
  ],
  [
    [
      880486,
      870593
    ],
    [
      0,
      -69033
    ]
  ],
  [
    [
      880486,
      801560
    ],
    [
      -39838,
      -35618
    ]
  ],
  [
    [
      840648,
      765942
    ],
    [
      -39838,
      35618
    ]
  ],
  [
    [
      800810,
      801560
    ],
    [
      0,
      69033
    ],
    [
      39838,
      33425
    ],
    [
      39838,
      -33425
    ]
  ],
  [
    [
      402432,
      325202
    ],
    [
      39838,
      -44441
    ]
  ],
  [
    [
      442270,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      442270,
      189802
    ],
    [
      -39838,
      -46490
    ]
  ],
  [
    [
      402432,
      143312
    ],
    [
      -39837,
      46490
    ]
  ],
  [
    [
      362595,
      189802
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      362595,
      280761
    ],
    [
      39837,
      44441
    ]
  ],
  [
    [
      681297,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      721135,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      721135,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      681297,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      641459,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      641459,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      721135,
      576707
    ],
    [
      39837,
      -40080
    ]
  ],
  [
    [
      760972,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      760972,
      454245
    ],
    [
      -39837,
      -42292
    ]
  ],
  [
    [
      681297,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      681297,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      641459,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      641459,
      411953
    ],
    [
      -39838,
      42292
    ]
  ],
  [
    [
      601621,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      601621,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      203243,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      243081,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      243081,
      325202
    ],
    [
      -39838,
      -44441
    ],
    [
      -39837,
      44441
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      163406,
      411953
    ],
    [
      39837,
      42292
    ]
  ],
  [
    [
      442270,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      482108,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      482108,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      402432,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      402432,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      561783,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      601621,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      561783,
      411953
    ],
    [
      -39837,
      42292
    ]
  ],
  [
    [
      521946,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      521946,
      536627
    ],
    [
      39837,
      40080
    ]
  ],
  [
    [
      800810,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      840648,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      840648,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      800810,
      411953
    ],
    [
      -39838,
      42292
    ]
  ],
  [
    [
      760972,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      482108,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      521946,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      442270,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      442270,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      402432,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      402432,
      411953
    ],
    [
      -39837,
      42292
    ]
  ],
  [
    [
      362595,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      362595,
      536627
    ],
    [
      39837,
      40080
    ]
  ],
  [
    [
      362595,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      322757,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      322757,
      411953
    ],
    [
      39838,
      42292
    ]
  ],
  [
    [
      800810,
      411953
    ],
    [
      0,
      -86751
    ]
  ],
  [
    [
      800810,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      760972,
      280761
    ],
    [
      -39837,
      44441
    ]
  ],
  [
    [
      641459,
      325202
    ],
    [
      -39838,
      -44441
    ]
  ],
  [
    [
      601621,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      561783,
      325202
    ],
    [
      0,
      86751
    ]
  ],
  [
    [
      442270,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      482108,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      402432,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      402432,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      243081,
      576707
    ],
    [
      39838,
      -40080
    ]
  ],
  [
    [
      282919,
      536627
    ],
    [
      0,
      -82382
    ]
  ],
  [
    [
      282919,
      454245
    ],
    [
      -39838,
      -42292
    ]
  ],
  [
    [
      203243,
      454245
    ],
    [
      0,
      82382
    ]
  ],
  [
    [
      203243,
      536627
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      840648,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      880486,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      880486,
      576707
    ],
    [
      -39838,
      -40080
    ]
  ],
  [
    [
      800810,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      800810,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      362595,
      692482
    ],
    [
      39837,
      -37846
    ]
  ],
  [
    [
      362595,
      536627
    ],
    [
      -39838,
      40080
    ]
  ],
  [
    [
      322757,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      322757,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      681297,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      721135,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      641459,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      641459,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      282919,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      322757,
      576707
    ],
    [
      -39838,
      -40080
    ]
  ],
  [
    [
      243081,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      243081,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      840648,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      880486,
      411953
    ],
    [
      0,
      -86751
    ],
    [
      -39838,
      -44441
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      880486,
      576707
    ],
    [
      39837,
      -40080
    ]
  ],
  [
    [
      920323,
      536627
    ],
    [
      0,
      -82382
    ],
    [
      -39837,
      -42292
    ]
  ],
  [
    [
      681297,
      189802
    ],
    [
      39838,
      -46490
    ]
  ],
  [
    [
      721135,
      143312
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39838,
      48392
    ],
    [
      0,
      94920
    ]
  ],
  [
    [
      641459,
      143312
    ],
    [
      39838,
      46490
    ]
  ],
  [
    [
      960161,
      870593
    ],
    [
      0,
      -69033
    ]
  ],
  [
    [
      920323,
      765942
    ],
    [
      -39837,
      35618
    ]
  ],
  [
    [
      880486,
      870593
    ],
    [
      39837,
      33425
    ]
  ],
  [
    [
      43892,
      189802
    ],
    [
      39838,
      -46490
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39837,
      48392
    ],
    [
      0,
      94920
    ],
    [
      39837,
      46490
    ]
  ],
  [
    [
      442270,
      189802
    ],
    [
      39838,
      -46490
    ]
  ],
  [
    [
      482108,
      143312
    ],
    [
      0,
      -94920
    ],
    [
      -39838,
      -48392
    ],
    [
      -39838,
      48392
    ],
    [
      0,
      94920
    ]
  ],
  [
    [
      681297,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      641459,
      143312
    ],
    [
      -39838,
      46490
    ]
  ],
  [
    [
      601621,
      189802
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      362595,
      189802
    ],
    [
      -39838,
      -46490
    ],
    [
      -39838,
      46490
    ],
    [
      0,
      90959
    ]
  ],
  [
    [
      282919,
      280761
    ],
    [
      39838,
      44441
    ]
  ],
  [
    [
      760972,
      280761
    ],
    [
      0,
      -90959
    ],
    [
      -39837,
      -46490
    ]
  ],
  [
    [
      482108,
      325202
    ],
    [
      39838,
      -44441
    ]
  ],
  [
    [
      521946,
      280761
    ],
    [
      0,
      -90959
    ]
  ],
  [
    [
      521946,
      189802
    ],
    [
      -39838,
      -46490
    ]
  ],
  [
    [
      601621,
      189802
    ],
    [
      -39838,
      -46490
    ],
    [
      -39837,
      46490
    ]
  ],
  [
    [
      521946,
      280761
    ],
    [
      39837,
      44441
    ]
  ],
  [
    [
      282919,
      454245
    ],
    [
      39838,
      -42292
    ]
  ],
  [
    [
      282919,
      280761
    ],
    [
      -39838,
      44441
    ]
  ],
  [
    [
      203243,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      203243,
      536627
    ],
    [
      -39837,
      40080
    ]
  ],
  [
    [
      163406,
      576707
    ],
    [
      0,
      77929
    ]
  ],
  [
    [
      163406,
      654636
    ],
    [
      39837,
      37846
    ]
  ],
  [
    [
      163406,
      411953
    ],
    [
      -39838,
      42292
    ],
    [
      0,
      82382
    ],
    [
      39838,
      40080
    ]
  ],
  [
    [
      521946,
      692482
    ],
    [
      39837,
      -37846
    ]
  ],
  [
    [
      561783,
      654636
    ],
    [
      0,
      -77929
    ]
  ],
  [
    [
      482108,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      760972,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      721135,
      654636
    ],
    [
      39837,
      37846
    ]
  ],
  [
    [
      601621,
      692482
    ],
    [
      39838,
      -37846
    ]
  ],
  [
    [
      561783,
      654636
    ],
    [
      39838,
      37846
    ]
  ],
  [
    [
      840648,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      760972,
      692482
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ]
  ],
  [
    [
      203243,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      163406,
      654636
    ],
    [
      -39838,
      37846
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ],
    [
      39837,
      -35618
    ]
  ],
  [
    [
      442270,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      442270,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      920323,
      692482
    ],
    [
      -39837,
      -37846
    ]
  ],
  [
    [
      601621,
      692482
    ],
    [
      0,
      73460
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      362595,
      692482
    ],
    [
      0,
      73460
    ]
  ],
  [
    [
      362595,
      765942
    ],
    [
      39837,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      282919,
      765942
    ],
    [
      0,
      -73460
    ]
  ],
  [
    [
      203243,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      282919,
      765942
    ],
    [
      39838,
      35618
    ],
    [
      39838,
      -35618
    ]
  ],
  [
    [
      39838,
      896264
    ],
    [
      39838,
      -31286
    ],
    [
      0,
      -64696
    ],
    [
      -39838,
      -33424
    ],
    [
      -39838,
      33424
    ],
    [
      0,
      64696
    ],
    [
      39838,
      31286
    ]
  ],
  [
    [
      960161,
      654636
    ],
    [
      0,
      -77929
    ],
    [
      -39838,
      -40080
    ]
  ]
], Wi = [
  -138.251828,
  26.393432,
  -69.902864,
  55.313204
], ji = {
  scale: [
    6834903234903234e-20,
    28919800919800915e-21
  ],
  translate: [
    -138.251828,
    26.393432
  ]
}, a9 = {
  type: Gi,
  objects: Ji,
  arcs: Hi,
  bbox: Wi,
  transform: ji
};
function V6() {
  return V6 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, V6.apply(this, arguments);
}
function qi(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $7(e) {
  var t = e.top, n = t === void 0 ? 0 : t, a = e.left, i = a === void 0 ? 0 : a, c = e.transform, p = e.className, m = e.children, g = e.innerRef, d = qi(e, ["top", "left", "transform", "className", "children", "innerRef"]);
  return /* @__PURE__ */ r.createElement("g", V6({
    ref: g,
    className: T2("visx-group", p),
    transform: c || "translate(" + i + ", " + n + ")"
  }, d), m);
}
$7.propTypes = {
  top: H.number,
  left: H.number,
  transform: H.string,
  className: H.string,
  children: H.node,
  innerRef: H.oneOfType([H.string, H.func, H.object])
};
function R0() {
  return new p0();
}
function p0() {
  this.reset();
}
p0.prototype = {
  constructor: p0,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(e) {
    r9(i5, e, this.t), r9(this, i5.s, this.s), this.s ? this.t += i5.t : this.s = i5.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var i5 = new p0();
function r9(e, t, n) {
  var a = e.s = t + n, i = a - t, c = a - i;
  e.t = t - c + (n - i);
}
var E1 = 1e-6, Vi = 1e-12, T1 = Math.PI, w2 = T1 / 2, o9 = T1 / 4, D2 = T1 * 2, g2 = 180 / T1, i2 = T1 / 180, J1 = Math.abs, zt = Math.atan, M3 = Math.atan2, q1 = Math.cos, l5 = Math.ceil, Yi = Math.exp, Ki = Math.log, R1 = Math.sin, F5 = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, J2 = Math.sqrt, Zi = Math.tan;
function Xi(e) {
  return e > 1 ? 0 : e < -1 ? T1 : Math.acos(e);
}
function H2(e) {
  return e > 1 ? w2 : e < -1 ? -w2 : Math.asin(e);
}
function _2() {
}
function m0(e, t) {
  e && l9.hasOwnProperty(e.type) && l9[e.type](e, t);
}
var i9 = {
  Feature: function(e, t) {
    m0(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      m0(n[a].geometry, t);
  }
}, l9 = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      e = n[a], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    Y6(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      Y6(n[a], t, 0);
  },
  Polygon: function(e, t) {
    s9(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      s9(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      m0(n[a], t);
  }
};
function Y6(e, t, n) {
  var a = -1, i = e.length - n, c;
  for (t.lineStart(); ++a < i; )
    c = e[a], t.point(c[0], c[1], c[2]);
  t.lineEnd();
}
function s9(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    Y6(e[n], t, 1);
  t.polygonEnd();
}
function $3(e, t) {
  e && i9.hasOwnProperty(e.type) ? i9[e.type](e, t) : m0(e, t);
}
function K6(e) {
  return [M3(e[1], e[0]), H2(e[2])];
}
function K3(e) {
  var t = e[0], n = e[1], a = q1(n);
  return [a * q1(t), a * R1(t), R1(n)];
}
function s5(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function d0(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function X0(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function c5(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function Z6(e) {
  var t = J2(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function X6(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function Q6(e, t) {
  return [J1(e) > T1 ? e + Math.round(-e / D2) * D2 : e, t];
}
Q6.invert = Q6;
function Gt(e, t, n) {
  return (e %= D2) ? t || n ? X6(u9(e), p9(t, n)) : u9(e) : t || n ? p9(t, n) : Q6;
}
function c9(e) {
  return function(t, n) {
    return t += e, [t > T1 ? t - D2 : t < -T1 ? t + D2 : t, n];
  };
}
function u9(e) {
  var t = c9(e);
  return t.invert = c9(-e), t;
}
function p9(e, t) {
  var n = q1(e), a = R1(e), i = q1(t), c = R1(t);
  function p(m, g) {
    var d = q1(g), u = q1(m) * d, s = R1(m) * d, o = R1(g), l = o * n + u * a;
    return [
      M3(s * i - l * c, u * n - o * a),
      H2(l * i + s * c)
    ];
  }
  return p.invert = function(m, g) {
    var d = q1(g), u = q1(m) * d, s = R1(m) * d, o = R1(g), l = o * i - s * c;
    return [
      M3(s * i + o * c, u * n + l * a),
      H2(l * n - u * a)
    ];
  }, p;
}
function Qi(e) {
  e = Gt(e[0] * i2, e[1] * i2, e.length > 2 ? e[2] * i2 : 0);
  function t(n) {
    return n = e(n[0] * i2, n[1] * i2), n[0] *= g2, n[1] *= g2, n;
  }
  return t.invert = function(n) {
    return n = e.invert(n[0] * i2, n[1] * i2), n[0] *= g2, n[1] *= g2, n;
  }, t;
}
function el(e, t, n, a, i, c) {
  if (n) {
    var p = q1(t), m = R1(t), g = a * n;
    i == null ? (i = t + a * D2, c = t - g / 2) : (i = m9(p, i), c = m9(p, c), (a > 0 ? i < c : i > c) && (i += a * D2));
    for (var d, u = i; a > 0 ? u > c : u < c; u -= g)
      d = K6([p, -m * q1(u), -m * R1(u)]), e.point(d[0], d[1]);
  }
}
function m9(e, t) {
  t = K3(t), t[0] -= e, Z6(t);
  var n = Xi(-t[1]);
  return ((-t[2] < 0 ? -n : n) + D2 - E1) % D2;
}
function Jt() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: _2,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function z5(e, t) {
  return J1(e[0] - t[0]) < E1 && J1(e[1] - t[1]) < E1;
}
function u5(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function Ht(e, t, n, a, i) {
  var c = [], p = [], m, g;
  if (e.forEach(function(f) {
    if (!((S = f.length - 1) <= 0)) {
      var S, C = f[0], E = f[S], y;
      if (z5(C, E)) {
        if (!C[2] && !E[2]) {
          for (i.lineStart(), m = 0; m < S; ++m)
            i.point((C = f[m])[0], C[1]);
          i.lineEnd();
          return;
        }
        E[0] += 2 * E1;
      }
      c.push(y = new u5(C, f, null, !0)), p.push(y.o = new u5(C, null, y, !1)), c.push(y = new u5(E, f, null, !1)), p.push(y.o = new u5(E, null, y, !0));
    }
  }), !!c.length) {
    for (p.sort(t), d9(c), d9(p), m = 0, g = p.length; m < g; ++m)
      p[m].e = n = !n;
    for (var d = c[0], u, s; ; ) {
      for (var o = d, l = !0; o.v; )
        if ((o = o.n) === d)
          return;
      u = o.z, i.lineStart();
      do {
        if (o.v = o.o.v = !0, o.e) {
          if (l)
            for (m = 0, g = u.length; m < g; ++m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.n.x, 1, i);
          o = o.n;
        } else {
          if (l)
            for (u = o.p.z, m = u.length - 1; m >= 0; --m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.p.x, -1, i);
          o = o.p;
        }
        o = o.o, u = o.z, l = !l;
      } while (!o.v);
      i.lineEnd();
    }
  }
}
function d9(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
var Q0 = R0();
function e6(e) {
  return J1(e[0]) <= T1 ? e[0] : F5(e[0]) * ((J1(e[0]) + T1) % D2 - T1);
}
function tl(e, t) {
  var n = e6(t), a = t[1], i = R1(a), c = [R1(n), -q1(n), 0], p = 0, m = 0;
  Q0.reset(), i === 1 ? a = w2 + E1 : i === -1 && (a = -w2 - E1);
  for (var g = 0, d = e.length; g < d; ++g)
    if (s = (u = e[g]).length)
      for (var u, s, o = u[s - 1], l = e6(o), f = o[1] / 2 + o9, S = R1(f), C = q1(f), E = 0; E < s; ++E, l = v, S = T, C = P, o = y) {
        var y = u[E], v = e6(y), b = y[1] / 2 + o9, T = R1(b), P = q1(b), x = v - l, A = x >= 0 ? 1 : -1, D = A * x, I = D > T1, N = S * T;
        if (Q0.add(M3(N * A * R1(D), C * P + N * q1(D))), p += I ? x + A * D2 : x, I ^ l >= n ^ v >= n) {
          var F = d0(K3(o), K3(y));
          Z6(F);
          var _ = d0(c, F);
          Z6(_);
          var k = (I ^ x >= 0 ? -1 : 1) * H2(_[2]);
          (a > k || a === k && (F[0] || F[1])) && (m += I ^ x >= 0 ? 1 : -1);
        }
      }
  return (p < -E1 || p < E1 && Q0 < -E1) ^ m & 1;
}
function Wt(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function nl(e) {
  return e.length === 1 && (e = al(e)), {
    left: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var c = a + i >>> 1;
        e(t[c], n) < 0 ? a = c + 1 : i = c;
      }
      return a;
    },
    right: function(t, n, a, i) {
      for (a == null && (a = 0), i == null && (i = t.length); a < i; ) {
        var c = a + i >>> 1;
        e(t[c], n) > 0 ? i = c : a = c + 1;
      }
      return a;
    }
  };
}
function al(e) {
  return function(t, n) {
    return Wt(e(t), n);
  };
}
nl(Wt);
function U3(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, c = new Array(i); ++a < i; )
    c[a] = e + a * n;
  return c;
}
function jt(e) {
  for (var t = e.length, n, a = -1, i = 0, c, p; ++a < t; )
    i += e[a].length;
  for (c = new Array(i); --t >= 0; )
    for (p = e[t], n = p.length; --n >= 0; )
      c[--i] = p[n];
  return c;
}
function qt(e, t, n, a) {
  return function(i) {
    var c = t(i), p = Jt(), m = t(p), g = !1, d, u, s, o = {
      point: l,
      lineStart: S,
      lineEnd: C,
      polygonStart: function() {
        o.point = E, o.lineStart = y, o.lineEnd = v, u = [], d = [];
      },
      polygonEnd: function() {
        o.point = l, o.lineStart = S, o.lineEnd = C, u = jt(u);
        var b = tl(d, a);
        u.length ? (g || (i.polygonStart(), g = !0), Ht(u, ol, b, n, i)) : b && (g || (i.polygonStart(), g = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), g && (i.polygonEnd(), g = !1), u = d = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function l(b, T) {
      e(b, T) && i.point(b, T);
    }
    function f(b, T) {
      c.point(b, T);
    }
    function S() {
      o.point = f, c.lineStart();
    }
    function C() {
      o.point = l, c.lineEnd();
    }
    function E(b, T) {
      s.push([b, T]), m.point(b, T);
    }
    function y() {
      m.lineStart(), s = [];
    }
    function v() {
      E(s[0][0], s[0][1]), m.lineEnd();
      var b = m.clean(), T = p.result(), P, x = T.length, A, D, I;
      if (s.pop(), d.push(s), s = null, !!x) {
        if (b & 1) {
          if (D = T[0], (A = D.length - 1) > 0) {
            for (g || (i.polygonStart(), g = !0), i.lineStart(), P = 0; P < A; ++P)
              i.point((I = D[P])[0], I[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && b & 2 && T.push(T.pop().concat(T.shift())), u.push(T.filter(rl));
      }
    }
    return o;
  };
}
function rl(e) {
  return e.length > 1;
}
function ol(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - w2 - E1 : w2 - e[1]) - ((t = t.x)[0] < 0 ? t[1] - w2 - E1 : w2 - t[1]);
}
const g9 = qt(
  function() {
    return !0;
  },
  il,
  sl,
  [-T1, -w2]
);
function il(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(c, p) {
      var m = c > 0 ? T1 : -T1, g = J1(c - t);
      J1(g - T1) < E1 ? (e.point(t, n = (n + p) / 2 > 0 ? w2 : -w2), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), e.point(c, n), i = 0) : a !== m && g >= T1 && (J1(t - a) < E1 && (t -= a * E1), J1(c - m) < E1 && (c -= m * E1), n = ll(t, n, c, p), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), i = 0), e.point(t = c, n = p), a = m;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function ll(e, t, n, a) {
  var i, c, p = R1(e - n);
  return J1(p) > E1 ? zt((R1(t) * (c = q1(a)) * R1(n) - R1(a) * (i = q1(t)) * R1(e)) / (i * c * p)) : (t + a) / 2;
}
function sl(e, t, n, a) {
  var i;
  if (e == null)
    i = n * w2, a.point(-T1, i), a.point(0, i), a.point(T1, i), a.point(T1, 0), a.point(T1, -i), a.point(0, -i), a.point(-T1, -i), a.point(-T1, 0), a.point(-T1, i);
  else if (J1(e[0] - t[0]) > E1) {
    var c = e[0] < t[0] ? T1 : -T1;
    i = n * c / 2, a.point(-c, i), a.point(0, i), a.point(c, i);
  } else
    a.point(t[0], t[1]);
}
function cl(e) {
  var t = q1(e), n = 6 * i2, a = t > 0, i = J1(t) > E1;
  function c(u, s, o, l) {
    el(l, e, n, o, u, s);
  }
  function p(u, s) {
    return q1(u) * q1(s) > t;
  }
  function m(u) {
    var s, o, l, f, S;
    return {
      lineStart: function() {
        f = l = !1, S = 1;
      },
      point: function(C, E) {
        var y = [C, E], v, b = p(C, E), T = a ? b ? 0 : d(C, E) : b ? d(C + (C < 0 ? T1 : -T1), E) : 0;
        if (!s && (f = l = b) && u.lineStart(), b !== l && (v = g(s, y), (!v || z5(s, v) || z5(y, v)) && (y[2] = 1)), b !== l)
          S = 0, b ? (u.lineStart(), v = g(y, s), u.point(v[0], v[1])) : (v = g(s, y), u.point(v[0], v[1], 2), u.lineEnd()), s = v;
        else if (i && s && a ^ b) {
          var P;
          !(T & o) && (P = g(y, s, !0)) && (S = 0, a ? (u.lineStart(), u.point(P[0][0], P[0][1]), u.point(P[1][0], P[1][1]), u.lineEnd()) : (u.point(P[1][0], P[1][1]), u.lineEnd(), u.lineStart(), u.point(P[0][0], P[0][1], 3)));
        }
        b && (!s || !z5(s, y)) && u.point(y[0], y[1]), s = y, l = b, o = T;
      },
      lineEnd: function() {
        l && u.lineEnd(), s = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (f && l) << 1;
      }
    };
  }
  function g(u, s, o) {
    var l = K3(u), f = K3(s), S = [1, 0, 0], C = d0(l, f), E = s5(C, C), y = C[0], v = E - y * y;
    if (!v)
      return !o && u;
    var b = t * E / v, T = -t * y / v, P = d0(S, C), x = c5(S, b), A = c5(C, T);
    X0(x, A);
    var D = P, I = s5(x, D), N = s5(D, D), F = I * I - N * (s5(x, x) - 1);
    if (!(F < 0)) {
      var _ = J2(F), k = c5(D, (-I - _) / N);
      if (X0(k, x), k = K6(k), !o)
        return k;
      var h = u[0], w = s[0], M = u[1], B = s[1], $;
      w < h && ($ = h, h = w, w = $);
      var W = w - h, z = J1(W - T1) < E1, q = z || W < E1;
      if (!z && B < M && ($ = M, M = B, B = $), q ? z ? M + B > 0 ^ k[1] < (J1(k[0] - h) < E1 ? M : B) : M <= k[1] && k[1] <= B : W > T1 ^ (h <= k[0] && k[0] <= w)) {
        var J = c5(D, (-I + _) / N);
        return X0(J, x), [k, K6(J)];
      }
    }
  }
  function d(u, s) {
    var o = a ? e : T1 - e, l = 0;
    return u < -o ? l |= 1 : u > o && (l |= 2), s < -o ? l |= 4 : s > o && (l |= 8), l;
  }
  return qt(p, m, c, a ? [0, -e] : [-T1, e - T1]);
}
function ul(e, t, n, a, i, c) {
  var p = e[0], m = e[1], g = t[0], d = t[1], u = 0, s = 1, o = g - p, l = d - m, f;
  if (f = n - p, !(!o && f > 0)) {
    if (f /= o, o < 0) {
      if (f < u)
        return;
      f < s && (s = f);
    } else if (o > 0) {
      if (f > s)
        return;
      f > u && (u = f);
    }
    if (f = i - p, !(!o && f < 0)) {
      if (f /= o, o < 0) {
        if (f > s)
          return;
        f > u && (u = f);
      } else if (o > 0) {
        if (f < u)
          return;
        f < s && (s = f);
      }
      if (f = a - m, !(!l && f > 0)) {
        if (f /= l, l < 0) {
          if (f < u)
            return;
          f < s && (s = f);
        } else if (l > 0) {
          if (f > s)
            return;
          f > u && (u = f);
        }
        if (f = c - m, !(!l && f < 0)) {
          if (f /= l, l < 0) {
            if (f > s)
              return;
            f > u && (u = f);
          } else if (l > 0) {
            if (f < u)
              return;
            f < s && (s = f);
          }
          return u > 0 && (e[0] = p + u * o, e[1] = m + u * l), s < 1 && (t[0] = p + s * o, t[1] = m + s * l), !0;
        }
      }
    }
  }
}
var y4 = 1e9, p5 = -y4;
function pl(e, t, n, a) {
  function i(d, u) {
    return e <= d && d <= n && t <= u && u <= a;
  }
  function c(d, u, s, o) {
    var l = 0, f = 0;
    if (d == null || (l = p(d, s)) !== (f = p(u, s)) || g(d, u) < 0 ^ s > 0)
      do
        o.point(l === 0 || l === 3 ? e : n, l > 1 ? a : t);
      while ((l = (l + s + 4) % 4) !== f);
    else
      o.point(u[0], u[1]);
  }
  function p(d, u) {
    return J1(d[0] - e) < E1 ? u > 0 ? 0 : 3 : J1(d[0] - n) < E1 ? u > 0 ? 2 : 1 : J1(d[1] - t) < E1 ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function m(d, u) {
    return g(d.x, u.x);
  }
  function g(d, u) {
    var s = p(d, 1), o = p(u, 1);
    return s !== o ? s - o : s === 0 ? u[1] - d[1] : s === 1 ? d[0] - u[0] : s === 2 ? d[1] - u[1] : u[0] - d[0];
  }
  return function(d) {
    var u = d, s = Jt(), o, l, f, S, C, E, y, v, b, T, P, x = {
      point: A,
      lineStart: F,
      lineEnd: _,
      polygonStart: I,
      polygonEnd: N
    };
    function A(h, w) {
      i(h, w) && u.point(h, w);
    }
    function D() {
      for (var h = 0, w = 0, M = l.length; w < M; ++w)
        for (var B = l[w], $ = 1, W = B.length, z = B[0], q, J, Y = z[0], Z = z[1]; $ < W; ++$)
          q = Y, J = Z, z = B[$], Y = z[0], Z = z[1], J <= a ? Z > a && (Y - q) * (a - J) > (Z - J) * (e - q) && ++h : Z <= a && (Y - q) * (a - J) < (Z - J) * (e - q) && --h;
      return h;
    }
    function I() {
      u = s, o = [], l = [], P = !0;
    }
    function N() {
      var h = D(), w = P && h, M = (o = jt(o)).length;
      (w || M) && (d.polygonStart(), w && (d.lineStart(), c(null, null, 1, d), d.lineEnd()), M && Ht(o, m, h, c, d), d.polygonEnd()), u = d, o = l = f = null;
    }
    function F() {
      x.point = k, l && l.push(f = []), T = !0, b = !1, y = v = NaN;
    }
    function _() {
      o && (k(S, C), E && b && s.rejoin(), o.push(s.result())), x.point = A, b && u.lineEnd();
    }
    function k(h, w) {
      var M = i(h, w);
      if (l && f.push([h, w]), T)
        S = h, C = w, E = M, T = !1, M && (u.lineStart(), u.point(h, w));
      else if (M && b)
        u.point(h, w);
      else {
        var B = [y = Math.max(p5, Math.min(y4, y)), v = Math.max(p5, Math.min(y4, v))], $ = [h = Math.max(p5, Math.min(y4, h)), w = Math.max(p5, Math.min(y4, w))];
        ul(B, $, e, t, n, a) ? (b || (u.lineStart(), u.point(B[0], B[1])), u.point($[0], $[1]), M || u.lineEnd(), P = !1) : M && (u.lineStart(), u.point(h, w), P = !1);
      }
      y = h, v = w, b = M;
    }
    return x;
  };
}
function f9(e, t, n) {
  var a = U3(e, t - E1, n).concat(t);
  return function(i) {
    return a.map(function(c) {
      return [i, c];
    });
  };
}
function h9(e, t, n) {
  var a = U3(e, t - E1, n).concat(t);
  return function(i) {
    return a.map(function(c) {
      return [c, i];
    });
  };
}
function ml() {
  var e, t, n, a, i, c, p, m, g = 10, d = g, u = 90, s = 360, o, l, f, S, C = 2.5;
  function E() {
    return { type: "MultiLineString", coordinates: y() };
  }
  function y() {
    return U3(l5(a / u) * u, n, u).map(f).concat(U3(l5(m / s) * s, p, s).map(S)).concat(U3(l5(t / g) * g, e, g).filter(function(v) {
      return J1(v % u) > E1;
    }).map(o)).concat(U3(l5(c / d) * d, i, d).filter(function(v) {
      return J1(v % s) > E1;
    }).map(l));
  }
  return E.lines = function() {
    return y().map(function(v) {
      return { type: "LineString", coordinates: v };
    });
  }, E.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        f(a).concat(
          S(p).slice(1),
          f(n).reverse().slice(1),
          S(m).reverse().slice(1)
        )
      ]
    };
  }, E.extent = function(v) {
    return arguments.length ? E.extentMajor(v).extentMinor(v) : E.extentMinor();
  }, E.extentMajor = function(v) {
    return arguments.length ? (a = +v[0][0], n = +v[1][0], m = +v[0][1], p = +v[1][1], a > n && (v = a, a = n, n = v), m > p && (v = m, m = p, p = v), E.precision(C)) : [[a, m], [n, p]];
  }, E.extentMinor = function(v) {
    return arguments.length ? (t = +v[0][0], e = +v[1][0], c = +v[0][1], i = +v[1][1], t > e && (v = t, t = e, e = v), c > i && (v = c, c = i, i = v), E.precision(C)) : [[t, c], [e, i]];
  }, E.step = function(v) {
    return arguments.length ? E.stepMajor(v).stepMinor(v) : E.stepMinor();
  }, E.stepMajor = function(v) {
    return arguments.length ? (u = +v[0], s = +v[1], E) : [u, s];
  }, E.stepMinor = function(v) {
    return arguments.length ? (g = +v[0], d = +v[1], E) : [g, d];
  }, E.precision = function(v) {
    return arguments.length ? (C = +v, o = f9(c, i, 90), l = h9(t, e, C), f = f9(m, p, 90), S = h9(a, n, C), E) : C;
  }, E.extentMajor([[-180, -90 + E1], [180, 90 - E1]]).extentMinor([[-180, -80 - E1], [180, 80 + E1]]);
}
function e7(e) {
  return e;
}
var t6 = R0(), t7 = R0(), Vt, Yt, n7, a7, g3 = {
  point: _2,
  lineStart: _2,
  lineEnd: _2,
  polygonStart: function() {
    g3.lineStart = dl, g3.lineEnd = fl;
  },
  polygonEnd: function() {
    g3.lineStart = g3.lineEnd = g3.point = _2, t6.add(J1(t7)), t7.reset();
  },
  result: function() {
    var e = t6 / 2;
    return t6.reset(), e;
  }
};
function dl() {
  g3.point = gl;
}
function gl(e, t) {
  g3.point = Kt, Vt = n7 = e, Yt = a7 = t;
}
function Kt(e, t) {
  t7.add(a7 * e - n7 * t), n7 = e, a7 = t;
}
function fl() {
  Kt(Vt, Yt);
}
const y9 = g3;
var Z3 = 1 / 0, g0 = Z3, R4 = -Z3, f0 = R4, hl = {
  point: yl,
  lineStart: _2,
  lineEnd: _2,
  polygonStart: _2,
  polygonEnd: _2,
  result: function() {
    var e = [[Z3, g0], [R4, f0]];
    return R4 = f0 = -(g0 = Z3 = 1 / 0), e;
  }
};
function yl(e, t) {
  e < Z3 && (Z3 = e), e > R4 && (R4 = e), t < g0 && (g0 = t), t > f0 && (f0 = t);
}
const h0 = hl;
var r7 = 0, o7 = 0, S4 = 0, y0 = 0, S0 = 0, F3 = 0, i7 = 0, l7 = 0, C4 = 0, Zt, Xt, X2, Q2, F2 = {
  point: x3,
  lineStart: S9,
  lineEnd: C9,
  polygonStart: function() {
    F2.lineStart = vl, F2.lineEnd = El;
  },
  polygonEnd: function() {
    F2.point = x3, F2.lineStart = S9, F2.lineEnd = C9;
  },
  result: function() {
    var e = C4 ? [i7 / C4, l7 / C4] : F3 ? [y0 / F3, S0 / F3] : S4 ? [r7 / S4, o7 / S4] : [NaN, NaN];
    return r7 = o7 = S4 = y0 = S0 = F3 = i7 = l7 = C4 = 0, e;
  }
};
function x3(e, t) {
  r7 += e, o7 += t, ++S4;
}
function S9() {
  F2.point = Sl;
}
function Sl(e, t) {
  F2.point = Cl, x3(X2 = e, Q2 = t);
}
function Cl(e, t) {
  var n = e - X2, a = t - Q2, i = J2(n * n + a * a);
  y0 += i * (X2 + e) / 2, S0 += i * (Q2 + t) / 2, F3 += i, x3(X2 = e, Q2 = t);
}
function C9() {
  F2.point = x3;
}
function vl() {
  F2.point = bl;
}
function El() {
  Qt(Zt, Xt);
}
function bl(e, t) {
  F2.point = Qt, x3(Zt = X2 = e, Xt = Q2 = t);
}
function Qt(e, t) {
  var n = e - X2, a = t - Q2, i = J2(n * n + a * a);
  y0 += i * (X2 + e) / 2, S0 += i * (Q2 + t) / 2, F3 += i, i = Q2 * e - X2 * t, i7 += i * (X2 + e), l7 += i * (Q2 + t), C4 += i * 3, x3(X2 = e, Q2 = t);
}
const v9 = F2;
function en(e) {
  this._context = e;
}
en.prototype = {
  _radius: 4.5,
  pointRadius: function(e) {
    return this._radius = e, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(e, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(e, t);
        break;
      }
      default: {
        this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, D2);
        break;
      }
    }
  },
  result: _2
};
var s7 = R0(), n6, tn, nn, v4, E4, C0 = {
  point: _2,
  lineStart: function() {
    C0.point = Ll;
  },
  lineEnd: function() {
    n6 && an(tn, nn), C0.point = _2;
  },
  polygonStart: function() {
    n6 = !0;
  },
  polygonEnd: function() {
    n6 = null;
  },
  result: function() {
    var e = +s7;
    return s7.reset(), e;
  }
};
function Ll(e, t) {
  C0.point = an, tn = v4 = e, nn = E4 = t;
}
function an(e, t) {
  v4 -= e, E4 -= t, s7.add(J2(v4 * v4 + E4 * E4)), v4 = e, E4 = t;
}
const E9 = C0;
function rn() {
  this._string = [];
}
rn.prototype = {
  _radius: 4.5,
  _circle: b9(4.5),
  pointRadius: function(e) {
    return (e = +e) !== this._radius && (this._radius = e, this._circle = null), this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._string.push("Z"), this._point = NaN;
  },
  point: function(e, t) {
    switch (this._point) {
      case 0: {
        this._string.push("M", e, ",", t), this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", e, ",", t);
        break;
      }
      default: {
        this._circle == null && (this._circle = b9(this._radius)), this._string.push("M", e, ",", t, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var e = this._string.join("");
      return this._string = [], e;
    } else
      return null;
  }
};
function b9(e) {
  return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z";
}
function kl(e, t) {
  var n = 4.5, a, i;
  function c(p) {
    return p && (typeof n == "function" && i.pointRadius(+n.apply(this, arguments)), $3(p, a(i))), i.result();
  }
  return c.area = function(p) {
    return $3(p, a(y9)), y9.result();
  }, c.measure = function(p) {
    return $3(p, a(E9)), E9.result();
  }, c.bounds = function(p) {
    return $3(p, a(h0)), h0.result();
  }, c.centroid = function(p) {
    return $3(p, a(v9)), v9.result();
  }, c.projection = function(p) {
    return arguments.length ? (a = p == null ? (e = null, e7) : (e = p).stream, c) : e;
  }, c.context = function(p) {
    return arguments.length ? (i = p == null ? (t = null, new rn()) : new en(t = p), typeof n != "function" && i.pointRadius(n), c) : t;
  }, c.pointRadius = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : (i.pointRadius(+p), +p), c) : n;
  }, c.projection(e).context(t);
}
function B7(e) {
  return function(t) {
    var n = new c7();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function c7() {
}
c7.prototype = {
  constructor: c7,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function U7(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), $3(n, e.stream(h0)), t(h0.result()), a != null && e.clipExtent(a), e;
}
function F7(e, t, n) {
  return U7(e, function(a) {
    var i = t[1][0] - t[0][0], c = t[1][1] - t[0][1], p = Math.min(i / (a[1][0] - a[0][0]), c / (a[1][1] - a[0][1])), m = +t[0][0] + (i - p * (a[1][0] + a[0][0])) / 2, g = +t[0][1] + (c - p * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * p).translate([m, g]);
  }, n);
}
function on(e, t, n) {
  return F7(e, [[0, 0], t], n);
}
function ln(e, t, n) {
  return U7(e, function(a) {
    var i = +t, c = i / (a[1][0] - a[0][0]), p = (i - c * (a[1][0] + a[0][0])) / 2, m = -c * a[0][1];
    e.scale(150 * c).translate([p, m]);
  }, n);
}
function sn(e, t, n) {
  return U7(e, function(a) {
    var i = +t, c = i / (a[1][1] - a[0][1]), p = -c * a[0][0], m = (i - c * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * c).translate([p, m]);
  }, n);
}
var L9 = 16, wl = q1(30 * i2);
function k9(e, t) {
  return +t ? Nl(e, t) : Tl(e);
}
function Tl(e) {
  return B7({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function Nl(e, t) {
  function n(a, i, c, p, m, g, d, u, s, o, l, f, S, C) {
    var E = d - a, y = u - i, v = E * E + y * y;
    if (v > 4 * t && S--) {
      var b = p + o, T = m + l, P = g + f, x = J2(b * b + T * T + P * P), A = H2(P /= x), D = J1(J1(P) - 1) < E1 || J1(c - s) < E1 ? (c + s) / 2 : M3(T, b), I = e(D, A), N = I[0], F = I[1], _ = N - a, k = F - i, h = y * _ - E * k;
      (h * h / v > t || J1((E * _ + y * k) / v - 0.5) > 0.3 || p * o + m * l + g * f < wl) && (n(a, i, c, p, m, g, N, F, D, b /= x, T /= x, P, S, C), C.point(N, F), n(N, F, D, b, T, P, d, u, s, o, l, f, S, C));
    }
  }
  return function(a) {
    var i, c, p, m, g, d, u, s, o, l, f, S, C = {
      point: E,
      lineStart: y,
      lineEnd: b,
      polygonStart: function() {
        a.polygonStart(), C.lineStart = T;
      },
      polygonEnd: function() {
        a.polygonEnd(), C.lineStart = y;
      }
    };
    function E(A, D) {
      A = e(A, D), a.point(A[0], A[1]);
    }
    function y() {
      s = NaN, C.point = v, a.lineStart();
    }
    function v(A, D) {
      var I = K3([A, D]), N = e(A, D);
      n(s, o, u, l, f, S, s = N[0], o = N[1], u = A, l = I[0], f = I[1], S = I[2], L9, a), a.point(s, o);
    }
    function b() {
      C.point = E, a.lineEnd();
    }
    function T() {
      y(), C.point = P, C.lineEnd = x;
    }
    function P(A, D) {
      v(i = A, D), c = s, p = o, m = l, g = f, d = S, C.point = v;
    }
    function x() {
      n(s, o, u, l, f, S, c, p, i, m, g, d, L9, a), C.lineEnd = b, b();
    }
    return C;
  };
}
var Pl = B7({
  point: function(e, t) {
    this.stream.point(e * i2, t * i2);
  }
});
function Al(e) {
  return B7({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function Dl(e, t, n, a, i) {
  function c(p, m) {
    return p *= a, m *= i, [t + e * p, n - e * m];
  }
  return c.invert = function(p, m) {
    return [(p - t) / e * a, (n - m) / e * i];
  }, c;
}
function w9(e, t, n, a, i, c) {
  var p = q1(c), m = R1(c), g = p * e, d = m * e, u = p / e, s = m / e, o = (m * n - p * t) / e, l = (m * t + p * n) / e;
  function f(S, C) {
    return S *= a, C *= i, [g * S - d * C + t, n - d * S - g * C];
  }
  return f.invert = function(S, C) {
    return [a * (u * S - s * C + o), i * (l - s * S - u * C)];
  }, f;
}
function $0(e) {
  return cn(function() {
    return e;
  })();
}
function cn(e) {
  var t, n = 150, a = 480, i = 250, c = 0, p = 0, m = 0, g = 0, d = 0, u, s = 0, o = 1, l = 1, f = null, S = g9, C = null, E, y, v, b = e7, T = 0.5, P, x, A, D, I;
  function N(h) {
    return A(h[0] * i2, h[1] * i2);
  }
  function F(h) {
    return h = A.invert(h[0], h[1]), h && [h[0] * g2, h[1] * g2];
  }
  N.stream = function(h) {
    return D && I === h ? D : D = Pl(Al(u)(S(P(b(I = h)))));
  }, N.preclip = function(h) {
    return arguments.length ? (S = h, f = void 0, k()) : S;
  }, N.postclip = function(h) {
    return arguments.length ? (b = h, C = E = y = v = null, k()) : b;
  }, N.clipAngle = function(h) {
    return arguments.length ? (S = +h ? cl(f = h * i2) : (f = null, g9), k()) : f * g2;
  }, N.clipExtent = function(h) {
    return arguments.length ? (b = h == null ? (C = E = y = v = null, e7) : pl(C = +h[0][0], E = +h[0][1], y = +h[1][0], v = +h[1][1]), k()) : C == null ? null : [[C, E], [y, v]];
  }, N.scale = function(h) {
    return arguments.length ? (n = +h, _()) : n;
  }, N.translate = function(h) {
    return arguments.length ? (a = +h[0], i = +h[1], _()) : [a, i];
  }, N.center = function(h) {
    return arguments.length ? (c = h[0] % 360 * i2, p = h[1] % 360 * i2, _()) : [c * g2, p * g2];
  }, N.rotate = function(h) {
    return arguments.length ? (m = h[0] % 360 * i2, g = h[1] % 360 * i2, d = h.length > 2 ? h[2] % 360 * i2 : 0, _()) : [m * g2, g * g2, d * g2];
  }, N.angle = function(h) {
    return arguments.length ? (s = h % 360 * i2, _()) : s * g2;
  }, N.reflectX = function(h) {
    return arguments.length ? (o = h ? -1 : 1, _()) : o < 0;
  }, N.reflectY = function(h) {
    return arguments.length ? (l = h ? -1 : 1, _()) : l < 0;
  }, N.precision = function(h) {
    return arguments.length ? (P = k9(x, T = h * h), k()) : J2(T);
  }, N.fitExtent = function(h, w) {
    return F7(N, h, w);
  }, N.fitSize = function(h, w) {
    return on(N, h, w);
  }, N.fitWidth = function(h, w) {
    return ln(N, h, w);
  }, N.fitHeight = function(h, w) {
    return sn(N, h, w);
  };
  function _() {
    var h = w9(n, 0, 0, o, l, s).apply(null, t(c, p)), w = (s ? w9 : Dl)(n, a - h[0], i - h[1], o, l, s);
    return u = Gt(m, g, d), x = X6(t, w), A = X6(u, x), P = k9(x, T), k();
  }
  function k() {
    return D = I = null, N;
  }
  return function() {
    return t = e.apply(this, arguments), N.invert = t.invert && F, _();
  };
}
function Ml(e) {
  var t = 0, n = T1 / 3, a = cn(e), i = a(t, n);
  return i.parallels = function(c) {
    return arguments.length ? a(t = c[0] * i2, n = c[1] * i2) : [t * g2, n * g2];
  }, i;
}
function xl(e) {
  var t = q1(e);
  function n(a, i) {
    return [a * t, R1(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, H2(i * t)];
  }, n;
}
function Ol(e, t) {
  var n = R1(e), a = (n + R1(t)) / 2;
  if (J1(a) < E1)
    return xl(e);
  var i = 1 + n * (2 * a - n), c = J2(i) / a;
  function p(m, g) {
    var d = J2(i - 2 * a * R1(g)) / a;
    return [d * R1(m *= a), c - d * q1(m)];
  }
  return p.invert = function(m, g) {
    var d = c - g, u = M3(m, J1(d)) * F5(d);
    return d * a < 0 && (u -= T1 * F5(m) * F5(d)), [u / a, H2((i - (m * m + d * d) * a * a) / (2 * a))];
  }, p;
}
function u7() {
  return Ml(Ol).scale(155.424).center([0, 33.6442]);
}
function un() {
  return u7().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function Il(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function _l() {
  var e, t, n = un(), a, i = u7().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c, p = u7().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), m, g, d = { point: function(o, l) {
    g = [o, l];
  } };
  function u(o) {
    var l = o[0], f = o[1];
    return g = null, a.point(l, f), g || (c.point(l, f), g) || (m.point(l, f), g);
  }
  u.invert = function(o) {
    var l = n.scale(), f = n.translate(), S = (o[0] - f[0]) / l, C = (o[1] - f[1]) / l;
    return (C >= 0.12 && C < 0.234 && S >= -0.425 && S < -0.214 ? i : C >= 0.166 && C < 0.234 && S >= -0.214 && S < -0.115 ? p : n).invert(o);
  }, u.stream = function(o) {
    return e && t === o ? e : e = Il([n.stream(t = o), i.stream(o), p.stream(o)]);
  }, u.precision = function(o) {
    return arguments.length ? (n.precision(o), i.precision(o), p.precision(o), s()) : n.precision();
  }, u.scale = function(o) {
    return arguments.length ? (n.scale(o), i.scale(o * 0.35), p.scale(o), u.translate(n.translate())) : n.scale();
  }, u.translate = function(o) {
    if (!arguments.length)
      return n.translate();
    var l = n.scale(), f = +o[0], S = +o[1];
    return a = n.translate(o).clipExtent([[f - 0.455 * l, S - 0.238 * l], [f + 0.455 * l, S + 0.238 * l]]).stream(d), c = i.translate([f - 0.307 * l, S + 0.201 * l]).clipExtent([[f - 0.425 * l + E1, S + 0.12 * l + E1], [f - 0.214 * l - E1, S + 0.234 * l - E1]]).stream(d), m = p.translate([f - 0.205 * l, S + 0.212 * l]).clipExtent([[f - 0.214 * l + E1, S + 0.166 * l + E1], [f - 0.115 * l - E1, S + 0.234 * l - E1]]).stream(d), s();
  }, u.fitExtent = function(o, l) {
    return F7(u, o, l);
  }, u.fitSize = function(o, l) {
    return on(u, o, l);
  }, u.fitWidth = function(o, l) {
    return ln(u, o, l);
  }, u.fitHeight = function(o, l) {
    return sn(u, o, l);
  };
  function s() {
    return e = t = null, u;
  }
  return u.scale(1070);
}
function Rl(e) {
  return function(t, n) {
    var a = J2(t * t + n * n), i = e(a), c = R1(i), p = q1(i);
    return [
      M3(t * c, a * p),
      H2(a && n * c / a)
    ];
  };
}
function z7(e, t) {
  return [e, Ki(Zi((w2 + t) / 2))];
}
z7.invert = function(e, t) {
  return [e, 2 * zt(Yi(t)) - w2];
};
function $l() {
  return Bl(z7).scale(961 / D2);
}
function Bl(e) {
  var t = $0(e), n = t.center, a = t.scale, i = t.translate, c = t.clipExtent, p = null, m, g, d;
  t.scale = function(s) {
    return arguments.length ? (a(s), u()) : a();
  }, t.translate = function(s) {
    return arguments.length ? (i(s), u()) : i();
  }, t.center = function(s) {
    return arguments.length ? (n(s), u()) : n();
  }, t.clipExtent = function(s) {
    return arguments.length ? (s == null ? p = m = g = d = null : (p = +s[0][0], m = +s[0][1], g = +s[1][0], d = +s[1][1]), u()) : p == null ? null : [[p, m], [g, d]];
  };
  function u() {
    var s = T1 * a(), o = t(Qi(t.rotate()).invert([0, 0]));
    return c(p == null ? [[o[0] - s, o[1] - s], [o[0] + s, o[1] + s]] : e === z7 ? [[Math.max(o[0] - s, p), m], [Math.min(o[0] + s, g), d]] : [[p, Math.max(o[1] - s, m)], [g, Math.min(o[1] + s, d)]]);
  }
  return u();
}
var N4 = 1.340264, P4 = -0.081106, A4 = 893e-6, D4 = 3796e-6, v0 = J2(3) / 2, Ul = 12;
function pn(e, t) {
  var n = H2(v0 * R1(t)), a = n * n, i = a * a * a;
  return [
    e * q1(n) / (v0 * (N4 + 3 * P4 * a + i * (7 * A4 + 9 * D4 * a))),
    n * (N4 + P4 * a + i * (A4 + D4 * a))
  ];
}
pn.invert = function(e, t) {
  for (var n = t, a = n * n, i = a * a * a, c = 0, p, m, g; c < Ul && (m = n * (N4 + P4 * a + i * (A4 + D4 * a)) - t, g = N4 + 3 * P4 * a + i * (7 * A4 + 9 * D4 * a), n -= p = m / g, a = n * n, i = a * a * a, !(J1(p) < Vi)); ++c)
    ;
  return [
    v0 * e * (N4 + 3 * P4 * a + i * (7 * A4 + 9 * D4 * a)) / q1(n),
    H2(R1(n) / v0)
  ];
};
function Fl() {
  return $0(pn).scale(177.158);
}
function mn(e, t) {
  var n = t * t, a = n * n;
  return [
    e * (0.8707 - 0.131979 * n + a * (-0.013791 + a * (3971e-6 * n - 1529e-6 * a))),
    t * (1.007226 + n * (0.015085 + a * (-0.044475 + 0.028874 * n - 5916e-6 * a)))
  ];
}
mn.invert = function(e, t) {
  var n = t, a = 25, i;
  do {
    var c = n * n, p = c * c;
    n -= i = (n * (1.007226 + c * (0.015085 + p * (-0.044475 + 0.028874 * c - 5916e-6 * p))) - t) / (1.007226 + c * (0.015085 * 3 + p * (-0.044475 * 7 + 0.028874 * 9 * c - 5916e-6 * 11 * p)));
  } while (J1(i) > E1 && --a > 0);
  return [
    e / (0.8707 + (c = n * n) * (-0.131979 + c * (-0.013791 + c * c * c * (3971e-6 - 1529e-6 * c)))),
    n
  ];
};
function zl() {
  return $0(mn).scale(175.295);
}
function dn(e, t) {
  return [q1(t) * R1(e), R1(t)];
}
dn.invert = Rl(H2);
function Gl() {
  return $0(dn).scale(249.5).clipAngle(90 + E1);
}
function M4() {
  return M4 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, M4.apply(this, arguments);
}
function Jl(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function L3(e) {
  var t = e.graticule, n = e.lines, a = e.outline, i = e.extent, c = e.extentMajor, p = e.extentMinor, m = e.step, g = e.stepMajor, d = e.stepMinor, u = e.precision, s = e.children, o = Jl(e, ["graticule", "lines", "outline", "extent", "extentMajor", "extentMinor", "step", "stepMajor", "stepMinor", "precision", "children"]), l = ml();
  return i && l.extent(i), c && l.extentMajor(c), p && l.extentMinor(p), m && l.step(m), g && l.stepMajor(g), d && l.stepMinor(d), u && l.precision(u), s ? /* @__PURE__ */ r.createElement(r.Fragment, null, s({
    graticule: l
  })) : /* @__PURE__ */ r.createElement($7, {
    className: "visx-geo-graticule"
  }, t && /* @__PURE__ */ r.createElement("path", M4({
    d: t(l()),
    fill: "none",
    stroke: "black"
  }, o)), n && l.lines().map(function(f, S) {
    return /* @__PURE__ */ r.createElement("g", {
      key: S
    }, /* @__PURE__ */ r.createElement("path", M4({
      d: n(f),
      fill: "none",
      stroke: "black"
    }, o)));
  }), a && /* @__PURE__ */ r.createElement("path", M4({
    d: a(l.outline()),
    fill: "none",
    stroke: "black"
  }, o)));
}
L3.propTypes = {
  graticule: H.func,
  lines: H.func,
  outline: H.func,
  children: H.func,
  precision: H.number
};
function r3() {
  return r3 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, r3.apply(this, arguments);
}
function Hl(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, c;
  for (c = 0; c < a.length; c++)
    i = a[c], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Wl = {
  orthographic: function() {
    return Gl();
  },
  albers: function() {
    return un();
  },
  albersUsa: function() {
    return _l();
  },
  mercator: function() {
    return $l();
  },
  naturalEarth: function() {
    return zl();
  },
  equalEarth: function() {
    return Fl();
  }
};
function B0(e) {
  var t = e.data, n = e.projection, a = n === void 0 ? "mercator" : n, i = e.projectionFunc, c = e.clipAngle, p = e.clipExtent, m = e.scale, g = e.translate, d = e.center, u = e.rotate, s = e.precision, o = e.fitExtent, l = e.fitSize, f = e.centroid, S = e.graticule, C = e.graticuleLines, E = e.graticuleOutline, y = e.className, v = e.innerRef, b = e.pointRadius, T = e.children, P = Hl(e, ["data", "projection", "projectionFunc", "clipAngle", "clipExtent", "scale", "translate", "center", "rotate", "precision", "fitExtent", "fitSize", "centroid", "graticule", "graticuleLines", "graticuleOutline", "className", "innerRef", "pointRadius", "children"]), x = typeof a == "string" ? Wl[a] : a, A = x();
  c && A.clipAngle && A.clipAngle(c), p && A.clipExtent && A.clipExtent(p), m && A.scale && A.scale(m), g && A.translate && A.translate(g), d && A.center && A.center(d), u && A.rotate && A.rotate(u), s && A.precision && A.precision(s), o && A.fitExtent && A.fitExtent.apply(A, o), l && A.fitSize && A.fitSize.apply(A, l);
  var D = kl().projection(A);
  b && D.pointRadius(b);
  var I = t.map(function(N, F) {
    return {
      feature: N,
      type: a,
      projection: A,
      index: F,
      centroid: D.centroid(N),
      path: D(N)
    };
  });
  return T ? /* @__PURE__ */ r.createElement(r.Fragment, null, T({
    path: D,
    features: I,
    projection: A
  })) : /* @__PURE__ */ r.createElement($7, {
    className: "visx-geo"
  }, S && !S.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    graticule: function(F) {
      return D(F) || "";
    }
  }, S)), C && !C.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    lines: function(F) {
      return D(F) || "";
    }
  }, C)), E && !E.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    outline: function(F) {
      return D(F) || "";
    }
  }, E)), I.map(function(N, F) {
    return /* @__PURE__ */ r.createElement("g", {
      key: a + "-" + F
    }, /* @__PURE__ */ r.createElement("path", r3({
      className: T2("visx-geo-" + a, y),
      d: N.path || "",
      ref: v && v(N, F)
    }, P)), f && f(N.centroid, N));
  }), i && i(A), S && S.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    graticule: function(F) {
      return D(F) || "";
    }
  }, S)), C && C.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    lines: function(F) {
      return D(F) || "";
    }
  }, C)), E && E.foreground && /* @__PURE__ */ r.createElement(L3, r3({
    outline: function(F) {
      return D(F) || "";
    }
  }, E)));
}
B0.propTypes = {
  data: H.array.isRequired,
  projectionFunc: H.func,
  clipAngle: H.number,
  scale: H.number,
  precision: H.number,
  centroid: H.func,
  className: H.string,
  children: H.func,
  innerRef: H.func,
  pointRadius: H.number
};
function p7() {
  return p7 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, p7.apply(this, arguments);
}
function jl(e) {
  return /* @__PURE__ */ r.createElement(B0, p7({
    projection: "albersUsa"
  }, e));
}
function m7() {
  return m7 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, m7.apply(this, arguments);
}
function E0(e) {
  return /* @__PURE__ */ r.createElement(B0, m7({
    projection: "mercator"
  }, e));
}
function ql(e) {
  return /* @__PURE__ */ r.createElement(B0, e);
}
const G7 = ({ data: e, state: t, geoClickHandler: n, applyTooltipsToGeo: a, displayGeoName: i, applyLegendToRow: c, projection: p, titleCase: m, setSharedFilterValue: g, isFilterValueSupported: d, tooltipId: u }) => {
  const [s, o] = R.useState({});
  if (R.useEffect(() => {
    const C = {};
    e && Object.keys(e).forEach((E) => {
      const y = e[E];
      C[y[t.columns.geo.name]] = y;
    }), o(C);
  }, [e]), t.general.type === "bubble") {
    const C = Math.max(...e ? Object.keys(e).map((y) => e[y][t.columns.primary.name]) : [0]);
    if (!Object.values(e).sort((y, v) => y[t.columns.primary.name] < v[t.columns.primary.name] ? 1 : -1))
      return;
    var l = Ye().domain([1, C]).range([t.visual.minBubbleSize, t.visual.maxBubbleSize]);
  }
  let f = Object.keys(s).filter((C) => C !== void 0 || e[C] !== void 0);
  return f ? f.map((C, E) => {
    let y;
    e && Object.keys(e).forEach((w) => {
      C === e[w][t.columns.geo.name] && (y = e[w]);
    }), y || (y = e ? e[C] : void 0);
    const v = m(i(C)), b = y ? c(y) : e[C] ? c(e[C]) : !1;
    if (b === !1)
      return !0;
    const T = a(v, y || e[C]), P = t.visual.geoCodeCircleSize || 8, x = {
      fillOpacity: t.general.type === "bubble" ? 0.4 : 1
    }, A = /* @__PURE__ */ r.createElement(
      "path",
      {
        className: "marker",
        d: "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z",
        title: "Select for more information",
        onClick: () => n(v, y),
        "data-tooltip-id": `tooltip__${u}`,
        "data-tooltip-html": T,
        transform: `scale(${P / 9})`,
        stroke: t.general.geoBorderColor === "sameAsBackground" ? "#ffffff" : "#000000",
        strokeWidth: "2px",
        tabIndex: "-1",
        ...x
      }
    );
    let D = "";
    !(y != null && y[t.columns.longitude.name]) && !(y != null && y[t.columns.latitude.name]) && C && w3[C.toUpperCase()] && (D = `translate(${p(w3[C.toUpperCase()])})`);
    let I = !1;
    if (y != null && y[t.columns.longitude.name] && (y != null && y[t.columns.latitude.name])) {
      let w = [Number(y == null ? void 0 : y[t.columns.longitude.name]), Number(y == null ? void 0 : y[t.columns.latitude.name])];
      D = `translate(${p(w)})`, I = !0;
    }
    if (!D)
      return;
    const N = {
      fill: b[0],
      opacity: g && d && e[C] && e[C][t.columns.geo.name] !== g ? 0.5 : 1,
      stroke: g && d && e[C] && e[C][t.columns.geo.name] === g ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",
      "&:hover": {
        fill: b[1],
        outline: 0
      },
      "&:active": {
        fill: b[2],
        outline: 0
      },
      cursor: I ? "pointer" : "default"
    };
    (t.columns.navigate && (y != null && y[t.columns.navigate.name]) && y[t.columns.navigate.name] || t.tooltips.appearanceType === "click") && (N.cursor = "pointer");
    const F = {
      onClick: () => n(v, y),
      size: t.general.type === "bubble" ? l(y[t.columns.primary.name]) : P * 30,
      title: "Select for more information",
      "data-tooltip-id": `tooltip__${u}`,
      "data-tooltip-html": T,
      stroke: t.general.geoBorderColor === "sameAsBackground" ? "#ffffff" : "#000000",
      strokeWidth: "2px",
      tabIndex: -1,
      ...x
    }, _ = {
      circle: /* @__PURE__ */ r.createElement(_7, { ...F }),
      pin: A,
      square: /* @__PURE__ */ r.createElement(I7, { ...F }),
      diamond: /* @__PURE__ */ r.createElement(M7, { ...F }),
      star: /* @__PURE__ */ r.createElement(x7, { ...F }),
      triangle: /* @__PURE__ */ r.createElement(O7, { ...F })
    }, { additionalCityStyles: k } = t.visual || [], h = Object.values(e).filter((w) => k.some((M) => String(w[M.column]) === String(M.value))).map((w) => ({ ...k.find((B) => String(w[B.column]) === String(B.value)), ...w })).find((w) => Object.keys(w).find((M) => w[M] === C));
    if (h !== void 0 && h.shape) {
      if (!(y != null && y[t.columns.longitude.name]) && !(y != null && y[t.columns.latitude.name]) && C && w3[C.toUpperCase()]) {
        let w = `translate(${p(w3[C.toUpperCase()])})`;
        return /* @__PURE__ */ r.createElement("g", { key: E, transform: w, style: N, className: "geo-point", tabIndex: -1 }, _[h.shape.toLowerCase()]);
      }
      if (y != null && y[t.columns.longitude.name] && (y != null && y[t.columns.latitude.name])) {
        const w = [Number(y == null ? void 0 : y[t.columns.longitude.name]), Number(y == null ? void 0 : y[t.columns.latitude.name])];
        let M = `translate(${p(w)})`;
        return /* @__PURE__ */ r.createElement("g", { key: E, transform: M, style: N, className: "geo-point", tabIndex: -1 }, _[h.shape.toLowerCase()]);
      }
    }
    return /* @__PURE__ */ r.createElement("g", { key: E, transform: D, style: N, className: "geo-point", tabIndex: -1 }, _[t.visual.cityStyle.toLowerCase()]);
  }) : !0;
}, Vl = {
  "US-AK": { Abbreviation: "AK", Name: "Alaska", Latitude: "63.588753", Longitude: "-154.493062" },
  "US-AL": { Abbreviation: "AL", Name: "Alabama", Latitude: "32.318231", Longitude: "-86.902298" },
  "US-AR": { Abbreviation: "AR", Name: "Arkansas", Latitude: "35.20105", Longitude: "-91.831833" },
  "US-AZ": { Abbreviation: "AZ", Name: "Arizona", Latitude: "34.048928", Longitude: "-111.093731" },
  "US-CA": { Abbreviation: "CA", Name: "California", Latitude: "36.778261", Longitude: "-119.417932" },
  "US-CO": { Abbreviation: "CO", Name: "Colorado", Latitude: "39.550051", Longitude: "-105.782067" },
  "US-CT": { Abbreviation: "CT", Name: "Connecticut", Latitude: "41.603221", Longitude: "-73.087749" },
  "US-DC": { Abbreviation: "DC", Name: "District of Columbia", Latitude: "38.905985", Longitude: "-77.033418" },
  "US-DE": { Abbreviation: "DE", Name: "Delaware", Latitude: "38.910832", Longitude: "-75.52767" },
  "US-FL": { Abbreviation: "FL", Name: "Florida", Latitude: "27.664827", Longitude: "-81.515754" },
  "US-GA": { Abbreviation: "GA", Name: "Georgia", Latitude: "32.157435", Longitude: "-82.907123" },
  "US-HI": { Abbreviation: "HI", Name: "Hawaii", Latitude: "19.898682", Longitude: "-155.665857" },
  "US-IA": { Abbreviation: "IA", Name: "Iowa", Latitude: "41.878003", Longitude: "-93.097702" },
  "US-ID": { Abbreviation: "ID", Name: "Idaho", Latitude: "44.068202", Longitude: "-114.742041" },
  "US-IL": { Abbreviation: "IL", Name: "Illinois", Latitude: "40.633125", Longitude: "-89.398528" },
  "US-IN": { Abbreviation: "IN", Name: "Indiana", Latitude: "40.551217", Longitude: "-85.602364" },
  "US-KS": { Abbreviation: "KS", Name: "Kansas", Latitude: "39.011902", Longitude: "-98.484246" },
  "US-KY": { Abbreviation: "KY", Name: "Kentucky", Latitude: "37.839333", Longitude: "-84.270018" },
  "US-LA": { Abbreviation: "LA", Name: "Louisiana", Latitude: "31.244823", Longitude: "-92.145024" },
  "US-MA": { Abbreviation: "MA", Name: "Massachusetts", Latitude: "42.407211", Longitude: "-71.382437" },
  "US-MD": { Abbreviation: "MD", Name: "Maryland", Latitude: "39.045755", Longitude: "-76.641271" },
  "US-ME": { Abbreviation: "ME", Name: "Maine", Latitude: "45.253783", Longitude: "-69.445469" },
  "US-MI": { Abbreviation: "MI", Name: "Michigan", Latitude: "44.314844", Longitude: "-85.602364" },
  "US-MN": { Abbreviation: "MN", Name: "Minnesota", Latitude: "46.729553", Longitude: "-94.6859" },
  "US-MO": { Abbreviation: "MO", Name: "Missouri", Latitude: "37.964253", Longitude: "-91.831833" },
  "US-MS": { Abbreviation: "MS", Name: "Mississippi", Latitude: "32.354668", Longitude: "-89.398528" },
  "US-MT": { Abbreviation: "MT", Name: "Montana", Latitude: "46.879682", Longitude: "-110.362566" },
  "US-NC": { Abbreviation: "NC", Name: "North Carolina", Latitude: "35.759573", Longitude: "-79.0193" },
  "US-ND": { Abbreviation: "ND", Name: "North Dakota", Latitude: "47.551493", Longitude: "-101.002012" },
  "US-NE": { Abbreviation: "NE", Name: "Nebraska", Latitude: "41.492537", Longitude: "-99.901813" },
  "US-NH": { Abbreviation: "NH", Name: "New Hampshire", Latitude: "43.193852", Longitude: "-71.572395" },
  "US-NJ": { Abbreviation: "NJ", Name: "New Jersey", Latitude: "40.058324", Longitude: "-74.405661" },
  "US-NM": { Abbreviation: "NM", Name: "New Mexico", Latitude: "34.97273", Longitude: "-105.032363" },
  "US-NV": { Abbreviation: "NV", Name: "Nevada", Latitude: "38.80261", Longitude: "-116.419389" },
  "US-NY": { Abbreviation: "NY", Name: "New York", Latitude: "43.299428", Longitude: "-74.217933" },
  "US-OH": { Abbreviation: "OH", Name: "Ohio", Latitude: "40.417287", Longitude: "-82.907123" },
  "US-OK": { Abbreviation: "OK", Name: "Oklahoma", Latitude: "35.007752", Longitude: "-97.092877" },
  "US-OR": { Abbreviation: "OR", Name: "Oregon", Latitude: "43.804133", Longitude: "-120.554201" },
  "US-PA": { Abbreviation: "PA", Name: "Pennsylvania", Latitude: "41.203322", Longitude: "-77.194525" },
  "US-PR": { Abbreviation: "PR", Name: "Puerto Rico", Latitude: "18.220833", Longitude: "-66.590149" },
  "US-RI": { Abbreviation: "RI", Name: "Rhode Island", Latitude: "41.580095", Longitude: "-71.477429" },
  "US-SC": { Abbreviation: "SC", Name: "South Carolina", Latitude: "33.836081", Longitude: "-81.163725" },
  "US-SD": { Abbreviation: "SD", Name: "South Dakota", Latitude: "43.969515", Longitude: "-99.901813" },
  "US-TN": { Abbreviation: "TN", Name: "Tennessee", Latitude: "35.517491", Longitude: "-86.580447" },
  "US-TX": { Abbreviation: "TX", Name: "Texas", Latitude: "31.968599", Longitude: "-99.901813" },
  "US-UT": { Abbreviation: "UT", Name: "Utah", Latitude: "39.32098", Longitude: "-111.093731" },
  "US-VA": { Abbreviation: "VA", Name: "Virginia", Latitude: "37.431573", Longitude: "-78.656894" },
  "US-VT": { Abbreviation: "VT", Name: "Vermont", Latitude: "44.558803", Longitude: "-72.577841" },
  "US-WA": { Abbreviation: "WA", Name: "Washington", Latitude: "47.751074", Longitude: "-120.740139" },
  "US-WI": { Abbreviation: "WI", Name: "Wisconsin", Latitude: "43.78444", Longitude: "-88.787868" },
  "US-WV": { Abbreviation: "WV", Name: "West Virginia", Latitude: "38.597626", Longitude: "-80.454903" },
  "US-WY": { Abbreviation: "WY", Name: "Wyoming", Latitude: "43.075968", Longitude: "-107.290284" }
}, gn = ({ data: e, state: t, projection: n, applyLegendToRow: a, applyTooltipsToGeo: i, handleCircleClick: c, runtimeData: p, displayGeoName: m }) => {
  const g = Math.max(...e.map((f) => f[t.columns.primary.name])), { tooltipId: d } = R.useContext(N2), u = t.visual.showBubbleZeros ? 0 : 1, s = Object.values(p).sort((f, S) => f[t.columns.primary.name] < S[t.columns.primary.name] ? 1 : -1);
  if (!s)
    return;
  const o = 10;
  var l = Ye().domain([u, g]).range([t.visual.minBubbleSize, t.visual.maxBubbleSize]);
  if (t.general.geoType === "world")
    return s && s.map((S, C) => {
      let E = $t[S.uid];
      if (!E)
        return !0;
      const y = m(S[t.columns.geo.name]), v = i(y, S), b = a(S);
      let T = t.columns.primary.name;
      if ((Math.floor(Number(S[T])) === 0 || S[T] === "") && !t.visual.showBubbleZeros)
        return;
      let P = `translate(${n([E[1], E[0]])})`, x, A;
      if (!n(E))
        return !0;
      const D = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        "circle",
        {
          tabIndex: -1,
          key: `circle-${y.replace(" ", "")}`,
          className: `bubble country--${y}`,
          cx: Number(n(E[1], E[0])[0]) || 0,
          cy: Number(n(E[1], E[0])[1]) || 0,
          r: Number(l(S[T])),
          fill: b[0],
          stroke: b[0],
          strokeWidth: 1.25,
          fillOpacity: 0.4,
          onPointerDown: (I) => {
            x = I.clientX, A = I.clientY;
          },
          onPointerUp: (I) => {
            x && A && I.clientX > x - o && I.clientX < x + o && I.clientY > A - o && I.clientY < A + o && (c(S), x = void 0, A = void 0);
          },
          transform: P,
          style: { transition: "all .25s ease-in-out", cursor: "pointer" },
          "data-tooltip-id": `tooltip__${d}`,
          "data-tooltip-html": v
        }
      ), t.visual.extraBubbleBorder && /* @__PURE__ */ r.createElement(
        "circle",
        {
          tabIndex: -1,
          key: `circle-${y.replace(" ", "")}`,
          className: "bubble",
          cx: Number(n(E[1], E[0])[0]) || 0,
          cy: Number(n(E[1], E[0])[1]) || 0,
          r: Number(l(S[T])) + 1,
          fill: "transparent",
          stroke: "white",
          strokeWidth: 0.5,
          onPointerDown: (I) => {
            x = I.clientX, A = I.clientY;
          },
          onPointerUp: (I) => {
            x && A && I.clientX > x - o && I.clientX < x + o && I.clientY > A - o && I.clientY < A + o && (c(S), x = void 0, A = void 0);
          },
          transform: P,
          style: { transition: "all .25s ease-in-out", cursor: "pointer" },
          "data-tooltip-id": `tooltip__${d}`,
          "data-tooltip-html": v
        }
      ));
      return /* @__PURE__ */ r.createElement("g", { key: `group-${y.replace(" ", "")}`, tabIndex: -1 }, D);
    });
  if (t.general.geoType === "us")
    return s && s.map((S, C) => {
      var _, k;
      let E = Vl[S.uid], y = (k = (_ = t == null ? void 0 : t.columns) == null ? void 0 : _.primary) == null ? void 0 : k.name;
      if (Number(l(S[y])) === 0 || (S[y] === null && (S[y] = ""), (Math.floor(Number(S[y])) === 0 || S[y] === "") && !t.visual.showBubbleZeros))
        return;
      if (!E)
        return !0;
      let v = Number(E.Longitude), b = Number(E.Latitude), T = [v, b], P = E.Name;
      if (!T)
        return !0;
      P = m(P);
      const x = i(P, S), A = a(S);
      let D = `translate(${n([T[1], T[0]])})`;
      if (!n(T))
        return !0;
      let I, N;
      const F = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        "circle",
        {
          tabIndex: -1,
          key: `circle-${P.replace(" ", "")}`,
          className: "bubble",
          cx: n(T)[0] || 0,
          cy: n(T)[1] || 0,
          r: Number(l(S[y])),
          fill: A[0],
          stroke: A[0],
          strokeWidth: 1.25,
          fillOpacity: 0.4,
          onPointerDown: (h) => {
            I = h.clientX, N = h.clientY;
          },
          onPointerUp: (h) => {
            I && N && h.clientX > I - o && h.clientX < I + o && h.clientY > N - o && h.clientY < N + o && (c(t), I = void 0, N = void 0);
          },
          transform: D,
          style: { transition: "all .25s ease-in-out", cursor: "pointer" },
          "data-tooltip-id": `tooltip__${d}`,
          "data-tooltip-html": x
        }
      ), t.visual.extraBubbleBorder && /* @__PURE__ */ r.createElement(
        "circle",
        {
          tabIndex: -1,
          key: `circle-${P.replace(" ", "")}`,
          className: "bubble",
          cx: n(T)[0] || 0,
          cy: n(T)[1] || 0,
          r: Number(l(S[y])) + 1,
          fill: "transparent",
          stroke: "white",
          strokeWidth: 0.5,
          fillOpacity: 0.4,
          onPointerDown: (h) => {
            I = h.clientX, N = h.clientY;
          },
          onPointerUp: (h) => {
            I && N && h.clientX > I - o && h.clientX < I + o && h.clientY > N - o && h.clientY < N + o && (c(t), I = void 0, N = void 0);
          },
          transform: D,
          style: { transition: "all .25s ease-in-out", cursor: "pointer" },
          "data-tooltip-id": `tooltip__${d}`,
          "data-tooltip-html": x
        }
      ));
      return /* @__PURE__ */ r.createElement("g", { key: `group-${P.replace(" ", "")}` }, F);
    });
};
var G1 = 1e-6;
class Yl {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const n = this._partials;
    let a = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const c = n[i], p = t + c, m = Math.abs(t) < Math.abs(c) ? t - (p - c) : c - (p - t);
      m && (n[a++] = m), t = p;
    }
    return n[a] = t, this._n = a + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let n = this._n, a, i, c, p = 0;
    if (n > 0) {
      for (p = t[--n]; n > 0 && (a = p, i = t[--n], p = a + i, c = i - (p - a), !c); )
        ;
      n > 0 && (c < 0 && t[n - 1] < 0 || c > 0 && t[n - 1] > 0) && (i = c * 2, a = p + i, i == a - p && (p = a));
    }
    return p;
  }
}
function* Kl(e) {
  for (const t of e)
    yield* t;
}
function fn(e) {
  return Array.from(Kl(e));
}
var Y1 = 1e-6, Zl = 1e-12, D1 = Math.PI, R2 = D1 / 2, T9 = D1 / 4, W2 = D1 * 2, B2 = 180 / D1, f2 = D1 / 180, r2 = Math.abs, Xl = Math.atan, X3 = Math.atan2, a2 = Math.cos, Z1 = Math.sin, G5 = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, Q3 = Math.sqrt;
function Ql(e) {
  return e > 1 ? 0 : e < -1 ? D1 : Math.acos(e);
}
function O3(e) {
  return e > 1 ? R2 : e < -1 ? -R2 : Math.asin(e);
}
function b4() {
}
function b0(e, t) {
  e && P9.hasOwnProperty(e.type) && P9[e.type](e, t);
}
var N9 = {
  Feature: function(e, t) {
    b0(e.geometry, t);
  },
  FeatureCollection: function(e, t) {
    for (var n = e.features, a = -1, i = n.length; ++a < i; )
      b0(n[a].geometry, t);
  }
}, P9 = {
  Sphere: function(e, t) {
    t.sphere();
  },
  Point: function(e, t) {
    e = e.coordinates, t.point(e[0], e[1], e[2]);
  },
  MultiPoint: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      e = n[a], t.point(e[0], e[1], e[2]);
  },
  LineString: function(e, t) {
    d7(e.coordinates, t, 0);
  },
  MultiLineString: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      d7(n[a], t, 0);
  },
  Polygon: function(e, t) {
    A9(e.coordinates, t);
  },
  MultiPolygon: function(e, t) {
    for (var n = e.coordinates, a = -1, i = n.length; ++a < i; )
      A9(n[a], t);
  },
  GeometryCollection: function(e, t) {
    for (var n = e.geometries, a = -1, i = n.length; ++a < i; )
      b0(n[a], t);
  }
};
function d7(e, t, n) {
  var a = -1, i = e.length - n, c;
  for (t.lineStart(); ++a < i; )
    c = e[a], t.point(c[0], c[1], c[2]);
  t.lineEnd();
}
function A9(e, t) {
  var n = -1, a = e.length;
  for (t.polygonStart(); ++n < a; )
    d7(e[n], t, 1);
  t.polygonEnd();
}
function hn(e, t) {
  e && N9.hasOwnProperty(e.type) ? N9[e.type](e, t) : b0(e, t);
}
function g7(e) {
  return [X3(e[1], e[0]), O3(e[2])];
}
function e4(e) {
  var t = e[0], n = e[1], a = a2(n);
  return [a * a2(t), a * Z1(t), Z1(n)];
}
function m5(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function L0(e, t) {
  return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
}
function a6(e, t) {
  e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function d5(e, t) {
  return [e[0] * t, e[1] * t, e[2] * t];
}
function f7(e) {
  var t = Q3(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
  e[0] /= t, e[1] /= t, e[2] /= t;
}
function h7(e, t) {
  function n(a, i) {
    return a = e(a, i), t(a[0], a[1]);
  }
  return e.invert && t.invert && (n.invert = function(a, i) {
    return a = t.invert(a, i), a && e.invert(a[0], a[1]);
  }), n;
}
function y7(e, t) {
  return [r2(e) > D1 ? e + Math.round(-e / W2) * W2 : e, t];
}
y7.invert = y7;
function es(e, t, n) {
  return (e %= W2) ? t || n ? h7(M9(e), x9(t, n)) : M9(e) : t || n ? x9(t, n) : y7;
}
function D9(e) {
  return function(t, n) {
    return t += e, [t > D1 ? t - W2 : t < -D1 ? t + W2 : t, n];
  };
}
function M9(e) {
  var t = D9(e);
  return t.invert = D9(-e), t;
}
function x9(e, t) {
  var n = a2(e), a = Z1(e), i = a2(t), c = Z1(t);
  function p(m, g) {
    var d = a2(g), u = a2(m) * d, s = Z1(m) * d, o = Z1(g), l = o * n + u * a;
    return [
      X3(s * i - l * c, u * n - o * a),
      O3(l * i + s * c)
    ];
  }
  return p.invert = function(m, g) {
    var d = a2(g), u = a2(m) * d, s = Z1(m) * d, o = Z1(g), l = o * i - s * c;
    return [
      X3(s * i + o * c, u * n + l * a),
      O3(l * n - u * a)
    ];
  }, p;
}
function ts(e, t, n, a, i, c) {
  if (n) {
    var p = a2(t), m = Z1(t), g = a * n;
    i == null ? (i = t + a * W2, c = t - g / 2) : (i = O9(p, i), c = O9(p, c), (a > 0 ? i < c : i > c) && (i += a * W2));
    for (var d, u = i; a > 0 ? u > c : u < c; u -= g)
      d = g7([p, -m * a2(u), -m * Z1(u)]), e.point(d[0], d[1]);
  }
}
function O9(e, t) {
  t = e4(t), t[0] -= e, f7(t);
  var n = Ql(-t[1]);
  return ((-t[2] < 0 ? -n : n) + W2 - Y1) % W2;
}
function yn() {
  var e = [], t;
  return {
    point: function(n, a, i) {
      t.push([n, a, i]);
    },
    lineStart: function() {
      e.push(t = []);
    },
    lineEnd: b4,
    rejoin: function() {
      e.length > 1 && e.push(e.pop().concat(e.shift()));
    },
    result: function() {
      var n = e;
      return e = [], t = null, n;
    }
  };
}
function J5(e, t) {
  return r2(e[0] - t[0]) < Y1 && r2(e[1] - t[1]) < Y1;
}
function g5(e, t, n, a) {
  this.x = e, this.z = t, this.o = n, this.e = a, this.v = !1, this.n = this.p = null;
}
function Sn(e, t, n, a, i) {
  var c = [], p = [], m, g;
  if (e.forEach(function(f) {
    if (!((S = f.length - 1) <= 0)) {
      var S, C = f[0], E = f[S], y;
      if (J5(C, E)) {
        if (!C[2] && !E[2]) {
          for (i.lineStart(), m = 0; m < S; ++m)
            i.point((C = f[m])[0], C[1]);
          i.lineEnd();
          return;
        }
        E[0] += 2 * Y1;
      }
      c.push(y = new g5(C, f, null, !0)), p.push(y.o = new g5(C, null, y, !1)), c.push(y = new g5(E, f, null, !1)), p.push(y.o = new g5(E, null, y, !0));
    }
  }), !!c.length) {
    for (p.sort(t), I9(c), I9(p), m = 0, g = p.length; m < g; ++m)
      p[m].e = n = !n;
    for (var d = c[0], u, s; ; ) {
      for (var o = d, l = !0; o.v; )
        if ((o = o.n) === d)
          return;
      u = o.z, i.lineStart();
      do {
        if (o.v = o.o.v = !0, o.e) {
          if (l)
            for (m = 0, g = u.length; m < g; ++m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.n.x, 1, i);
          o = o.n;
        } else {
          if (l)
            for (u = o.p.z, m = u.length - 1; m >= 0; --m)
              i.point((s = u[m])[0], s[1]);
          else
            a(o.x, o.p.x, -1, i);
          o = o.p;
        }
        o = o.o, u = o.z, l = !l;
      } while (!o.v);
      i.lineEnd();
    }
  }
}
function I9(e) {
  if (t = e.length) {
    for (var t, n = 0, a = e[0], i; ++n < t; )
      a.n = i = e[n], i.p = a, a = i;
    a.n = i = e[0], i.p = a;
  }
}
function r6(e) {
  return r2(e[0]) <= D1 ? e[0] : G5(e[0]) * ((r2(e[0]) + D1) % W2 - D1);
}
function ns(e, t) {
  var n = r6(t), a = t[1], i = Z1(a), c = [Z1(n), -a2(n), 0], p = 0, m = 0, g = new Yl();
  i === 1 ? a = R2 + Y1 : i === -1 && (a = -R2 - Y1);
  for (var d = 0, u = e.length; d < u; ++d)
    if (o = (s = e[d]).length)
      for (var s, o, l = s[o - 1], f = r6(l), S = l[1] / 2 + T9, C = Z1(S), E = a2(S), y = 0; y < o; ++y, f = b, C = P, E = x, l = v) {
        var v = s[y], b = r6(v), T = v[1] / 2 + T9, P = Z1(T), x = a2(T), A = b - f, D = A >= 0 ? 1 : -1, I = D * A, N = I > D1, F = C * P;
        if (g.add(X3(F * D * Z1(I), E * x + F * a2(I))), p += N ? A + D * W2 : A, N ^ f >= n ^ b >= n) {
          var _ = L0(e4(l), e4(v));
          f7(_);
          var k = L0(c, _);
          f7(k);
          var h = (N ^ A >= 0 ? -1 : 1) * O3(k[2]);
          (a > h || a === h && (_[0] || _[1])) && (m += N ^ A >= 0 ? 1 : -1);
        }
      }
  return (p < -Y1 || p < Y1 && g < -Zl) ^ m & 1;
}
function Cn(e, t, n, a) {
  return function(i) {
    var c = t(i), p = yn(), m = t(p), g = !1, d, u, s, o = {
      point: l,
      lineStart: S,
      lineEnd: C,
      polygonStart: function() {
        o.point = E, o.lineStart = y, o.lineEnd = v, u = [], d = [];
      },
      polygonEnd: function() {
        o.point = l, o.lineStart = S, o.lineEnd = C, u = fn(u);
        var b = ns(d, a);
        u.length ? (g || (i.polygonStart(), g = !0), Sn(u, rs, b, n, i)) : b && (g || (i.polygonStart(), g = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), g && (i.polygonEnd(), g = !1), u = d = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function l(b, T) {
      e(b, T) && i.point(b, T);
    }
    function f(b, T) {
      c.point(b, T);
    }
    function S() {
      o.point = f, c.lineStart();
    }
    function C() {
      o.point = l, c.lineEnd();
    }
    function E(b, T) {
      s.push([b, T]), m.point(b, T);
    }
    function y() {
      m.lineStart(), s = [];
    }
    function v() {
      E(s[0][0], s[0][1]), m.lineEnd();
      var b = m.clean(), T = p.result(), P, x = T.length, A, D, I;
      if (s.pop(), d.push(s), s = null, !!x) {
        if (b & 1) {
          if (D = T[0], (A = D.length - 1) > 0) {
            for (g || (i.polygonStart(), g = !0), i.lineStart(), P = 0; P < A; ++P)
              i.point((I = D[P])[0], I[1]);
            i.lineEnd();
          }
          return;
        }
        x > 1 && b & 2 && T.push(T.pop().concat(T.shift())), u.push(T.filter(as));
      }
    }
    return o;
  };
}
function as(e) {
  return e.length > 1;
}
function rs(e, t) {
  return ((e = e.x)[0] < 0 ? e[1] - R2 - Y1 : R2 - e[1]) - ((t = t.x)[0] < 0 ? t[1] - R2 - Y1 : R2 - t[1]);
}
const _9 = Cn(
  function() {
    return !0;
  },
  os,
  ls,
  [-D1, -R2]
);
function os(e) {
  var t = NaN, n = NaN, a = NaN, i;
  return {
    lineStart: function() {
      e.lineStart(), i = 1;
    },
    point: function(c, p) {
      var m = c > 0 ? D1 : -D1, g = r2(c - t);
      r2(g - D1) < Y1 ? (e.point(t, n = (n + p) / 2 > 0 ? R2 : -R2), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), e.point(c, n), i = 0) : a !== m && g >= D1 && (r2(t - a) < Y1 && (t -= a * Y1), r2(c - m) < Y1 && (c -= m * Y1), n = is(t, n, c, p), e.point(a, n), e.lineEnd(), e.lineStart(), e.point(m, n), i = 0), e.point(t = c, n = p), a = m;
    },
    lineEnd: function() {
      e.lineEnd(), t = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function is(e, t, n, a) {
  var i, c, p = Z1(e - n);
  return r2(p) > Y1 ? Xl((Z1(t) * (c = a2(a)) * Z1(n) - Z1(a) * (i = a2(t)) * Z1(e)) / (i * c * p)) : (t + a) / 2;
}
function ls(e, t, n, a) {
  var i;
  if (e == null)
    i = n * R2, a.point(-D1, i), a.point(0, i), a.point(D1, i), a.point(D1, 0), a.point(D1, -i), a.point(0, -i), a.point(-D1, -i), a.point(-D1, 0), a.point(-D1, i);
  else if (r2(e[0] - t[0]) > Y1) {
    var c = e[0] < t[0] ? D1 : -D1;
    i = n * c / 2, a.point(-c, i), a.point(0, i), a.point(c, i);
  } else
    a.point(t[0], t[1]);
}
function ss(e) {
  var t = a2(e), n = 6 * f2, a = t > 0, i = r2(t) > Y1;
  function c(u, s, o, l) {
    ts(l, e, n, o, u, s);
  }
  function p(u, s) {
    return a2(u) * a2(s) > t;
  }
  function m(u) {
    var s, o, l, f, S;
    return {
      lineStart: function() {
        f = l = !1, S = 1;
      },
      point: function(C, E) {
        var y = [C, E], v, b = p(C, E), T = a ? b ? 0 : d(C, E) : b ? d(C + (C < 0 ? D1 : -D1), E) : 0;
        if (!s && (f = l = b) && u.lineStart(), b !== l && (v = g(s, y), (!v || J5(s, v) || J5(y, v)) && (y[2] = 1)), b !== l)
          S = 0, b ? (u.lineStart(), v = g(y, s), u.point(v[0], v[1])) : (v = g(s, y), u.point(v[0], v[1], 2), u.lineEnd()), s = v;
        else if (i && s && a ^ b) {
          var P;
          !(T & o) && (P = g(y, s, !0)) && (S = 0, a ? (u.lineStart(), u.point(P[0][0], P[0][1]), u.point(P[1][0], P[1][1]), u.lineEnd()) : (u.point(P[1][0], P[1][1]), u.lineEnd(), u.lineStart(), u.point(P[0][0], P[0][1], 3)));
        }
        b && (!s || !J5(s, y)) && u.point(y[0], y[1]), s = y, l = b, o = T;
      },
      lineEnd: function() {
        l && u.lineEnd(), s = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return S | (f && l) << 1;
      }
    };
  }
  function g(u, s, o) {
    var l = e4(u), f = e4(s), S = [1, 0, 0], C = L0(l, f), E = m5(C, C), y = C[0], v = E - y * y;
    if (!v)
      return !o && u;
    var b = t * E / v, T = -t * y / v, P = L0(S, C), x = d5(S, b), A = d5(C, T);
    a6(x, A);
    var D = P, I = m5(x, D), N = m5(D, D), F = I * I - N * (m5(x, x) - 1);
    if (!(F < 0)) {
      var _ = Q3(F), k = d5(D, (-I - _) / N);
      if (a6(k, x), k = g7(k), !o)
        return k;
      var h = u[0], w = s[0], M = u[1], B = s[1], $;
      w < h && ($ = h, h = w, w = $);
      var W = w - h, z = r2(W - D1) < Y1, q = z || W < Y1;
      if (!z && B < M && ($ = M, M = B, B = $), q ? z ? M + B > 0 ^ k[1] < (r2(k[0] - h) < Y1 ? M : B) : M <= k[1] && k[1] <= B : W > D1 ^ (h <= k[0] && k[0] <= w)) {
        var J = d5(D, (-I + _) / N);
        return a6(J, x), [k, g7(J)];
      }
    }
  }
  function d(u, s) {
    var o = a ? e : D1 - e, l = 0;
    return u < -o ? l |= 1 : u > o && (l |= 2), s < -o ? l |= 4 : s > o && (l |= 8), l;
  }
  return Cn(p, m, c, a ? [0, -e] : [-D1, e - D1]);
}
function cs(e, t, n, a, i, c) {
  var p = e[0], m = e[1], g = t[0], d = t[1], u = 0, s = 1, o = g - p, l = d - m, f;
  if (f = n - p, !(!o && f > 0)) {
    if (f /= o, o < 0) {
      if (f < u)
        return;
      f < s && (s = f);
    } else if (o > 0) {
      if (f > s)
        return;
      f > u && (u = f);
    }
    if (f = i - p, !(!o && f < 0)) {
      if (f /= o, o < 0) {
        if (f > s)
          return;
        f > u && (u = f);
      } else if (o > 0) {
        if (f < u)
          return;
        f < s && (s = f);
      }
      if (f = a - m, !(!l && f > 0)) {
        if (f /= l, l < 0) {
          if (f < u)
            return;
          f < s && (s = f);
        } else if (l > 0) {
          if (f > s)
            return;
          f > u && (u = f);
        }
        if (f = c - m, !(!l && f < 0)) {
          if (f /= l, l < 0) {
            if (f > s)
              return;
            f > u && (u = f);
          } else if (l > 0) {
            if (f < u)
              return;
            f < s && (s = f);
          }
          return u > 0 && (e[0] = p + u * o, e[1] = m + u * l), s < 1 && (t[0] = p + s * o, t[1] = m + s * l), !0;
        }
      }
    }
  }
}
var L4 = 1e9, f5 = -L4;
function us(e, t, n, a) {
  function i(d, u) {
    return e <= d && d <= n && t <= u && u <= a;
  }
  function c(d, u, s, o) {
    var l = 0, f = 0;
    if (d == null || (l = p(d, s)) !== (f = p(u, s)) || g(d, u) < 0 ^ s > 0)
      do
        o.point(l === 0 || l === 3 ? e : n, l > 1 ? a : t);
      while ((l = (l + s + 4) % 4) !== f);
    else
      o.point(u[0], u[1]);
  }
  function p(d, u) {
    return r2(d[0] - e) < Y1 ? u > 0 ? 0 : 3 : r2(d[0] - n) < Y1 ? u > 0 ? 2 : 1 : r2(d[1] - t) < Y1 ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
  }
  function m(d, u) {
    return g(d.x, u.x);
  }
  function g(d, u) {
    var s = p(d, 1), o = p(u, 1);
    return s !== o ? s - o : s === 0 ? u[1] - d[1] : s === 1 ? d[0] - u[0] : s === 2 ? d[1] - u[1] : u[0] - d[0];
  }
  return function(d) {
    var u = d, s = yn(), o, l, f, S, C, E, y, v, b, T, P, x = {
      point: A,
      lineStart: F,
      lineEnd: _,
      polygonStart: I,
      polygonEnd: N
    };
    function A(h, w) {
      i(h, w) && u.point(h, w);
    }
    function D() {
      for (var h = 0, w = 0, M = l.length; w < M; ++w)
        for (var B = l[w], $ = 1, W = B.length, z = B[0], q, J, Y = z[0], Z = z[1]; $ < W; ++$)
          q = Y, J = Z, z = B[$], Y = z[0], Z = z[1], J <= a ? Z > a && (Y - q) * (a - J) > (Z - J) * (e - q) && ++h : Z <= a && (Y - q) * (a - J) < (Z - J) * (e - q) && --h;
      return h;
    }
    function I() {
      u = s, o = [], l = [], P = !0;
    }
    function N() {
      var h = D(), w = P && h, M = (o = fn(o)).length;
      (w || M) && (d.polygonStart(), w && (d.lineStart(), c(null, null, 1, d), d.lineEnd()), M && Sn(o, m, h, c, d), d.polygonEnd()), u = d, o = l = f = null;
    }
    function F() {
      x.point = k, l && l.push(f = []), T = !0, b = !1, y = v = NaN;
    }
    function _() {
      o && (k(S, C), E && b && s.rejoin(), o.push(s.result())), x.point = A, b && u.lineEnd();
    }
    function k(h, w) {
      var M = i(h, w);
      if (l && f.push([h, w]), T)
        S = h, C = w, E = M, T = !1, M && (u.lineStart(), u.point(h, w));
      else if (M && b)
        u.point(h, w);
      else {
        var B = [y = Math.max(f5, Math.min(L4, y)), v = Math.max(f5, Math.min(L4, v))], $ = [h = Math.max(f5, Math.min(L4, h)), w = Math.max(f5, Math.min(L4, w))];
        cs(B, $, e, t, n, a) ? (b || (u.lineStart(), u.point(B[0], B[1])), u.point($[0], $[1]), M || u.lineEnd(), P = !1) : M && (u.lineStart(), u.point(h, w), P = !1);
      }
      y = h, v = w, b = M;
    }
    return x;
  };
}
const R9 = (e) => e;
var t4 = 1 / 0, k0 = t4, $4 = -t4, w0 = $4, ps = {
  point: ms,
  lineStart: b4,
  lineEnd: b4,
  polygonStart: b4,
  polygonEnd: b4,
  result: function() {
    var e = [[t4, k0], [$4, w0]];
    return $4 = w0 = -(k0 = t4 = 1 / 0), e;
  }
};
function ms(e, t) {
  e < t4 && (t4 = e), e > $4 && ($4 = e), t < k0 && (k0 = t), t > w0 && (w0 = t);
}
const $9 = ps;
function J7(e) {
  return function(t) {
    var n = new S7();
    for (var a in e)
      n[a] = e[a];
    return n.stream = t, n;
  };
}
function S7() {
}
S7.prototype = {
  constructor: S7,
  point: function(e, t) {
    this.stream.point(e, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function H7(e, t, n) {
  var a = e.clipExtent && e.clipExtent();
  return e.scale(150).translate([0, 0]), a != null && e.clipExtent(null), hn(n, e.stream($9)), t($9.result()), a != null && e.clipExtent(a), e;
}
function vn(e, t, n) {
  return H7(e, function(a) {
    var i = t[1][0] - t[0][0], c = t[1][1] - t[0][1], p = Math.min(i / (a[1][0] - a[0][0]), c / (a[1][1] - a[0][1])), m = +t[0][0] + (i - p * (a[1][0] + a[0][0])) / 2, g = +t[0][1] + (c - p * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * p).translate([m, g]);
  }, n);
}
function ds(e, t, n) {
  return vn(e, [[0, 0], t], n);
}
function gs(e, t, n) {
  return H7(e, function(a) {
    var i = +t, c = i / (a[1][0] - a[0][0]), p = (i - c * (a[1][0] + a[0][0])) / 2, m = -c * a[0][1];
    e.scale(150 * c).translate([p, m]);
  }, n);
}
function fs(e, t, n) {
  return H7(e, function(a) {
    var i = +t, c = i / (a[1][1] - a[0][1]), p = -c * a[0][0], m = (i - c * (a[1][1] + a[0][1])) / 2;
    e.scale(150 * c).translate([p, m]);
  }, n);
}
var B9 = 16, hs = a2(30 * f2);
function U9(e, t) {
  return +t ? Ss(e, t) : ys(e);
}
function ys(e) {
  return J7({
    point: function(t, n) {
      t = e(t, n), this.stream.point(t[0], t[1]);
    }
  });
}
function Ss(e, t) {
  function n(a, i, c, p, m, g, d, u, s, o, l, f, S, C) {
    var E = d - a, y = u - i, v = E * E + y * y;
    if (v > 4 * t && S--) {
      var b = p + o, T = m + l, P = g + f, x = Q3(b * b + T * T + P * P), A = O3(P /= x), D = r2(r2(P) - 1) < Y1 || r2(c - s) < Y1 ? (c + s) / 2 : X3(T, b), I = e(D, A), N = I[0], F = I[1], _ = N - a, k = F - i, h = y * _ - E * k;
      (h * h / v > t || r2((E * _ + y * k) / v - 0.5) > 0.3 || p * o + m * l + g * f < hs) && (n(a, i, c, p, m, g, N, F, D, b /= x, T /= x, P, S, C), C.point(N, F), n(N, F, D, b, T, P, d, u, s, o, l, f, S, C));
    }
  }
  return function(a) {
    var i, c, p, m, g, d, u, s, o, l, f, S, C = {
      point: E,
      lineStart: y,
      lineEnd: b,
      polygonStart: function() {
        a.polygonStart(), C.lineStart = T;
      },
      polygonEnd: function() {
        a.polygonEnd(), C.lineStart = y;
      }
    };
    function E(A, D) {
      A = e(A, D), a.point(A[0], A[1]);
    }
    function y() {
      s = NaN, C.point = v, a.lineStart();
    }
    function v(A, D) {
      var I = e4([A, D]), N = e(A, D);
      n(s, o, u, l, f, S, s = N[0], o = N[1], u = A, l = I[0], f = I[1], S = I[2], B9, a), a.point(s, o);
    }
    function b() {
      C.point = E, a.lineEnd();
    }
    function T() {
      y(), C.point = P, C.lineEnd = x;
    }
    function P(A, D) {
      v(i = A, D), c = s, p = o, m = l, g = f, d = S, C.point = v;
    }
    function x() {
      n(s, o, u, l, f, S, c, p, i, m, g, d, B9, a), C.lineEnd = b, b();
    }
    return C;
  };
}
var Cs = J7({
  point: function(e, t) {
    this.stream.point(e * f2, t * f2);
  }
});
function vs(e) {
  return J7({
    point: function(t, n) {
      var a = e(t, n);
      return this.stream.point(a[0], a[1]);
    }
  });
}
function Es(e, t, n, a, i) {
  function c(p, m) {
    return p *= a, m *= i, [t + e * p, n - e * m];
  }
  return c.invert = function(p, m) {
    return [(p - t) / e * a, (n - m) / e * i];
  }, c;
}
function F9(e, t, n, a, i, c) {
  if (!c)
    return Es(e, t, n, a, i);
  var p = a2(c), m = Z1(c), g = p * e, d = m * e, u = p / e, s = m / e, o = (m * n - p * t) / e, l = (m * t + p * n) / e;
  function f(S, C) {
    return S *= a, C *= i, [g * S - d * C + t, n - d * S - g * C];
  }
  return f.invert = function(S, C) {
    return [a * (u * S - s * C + o), i * (l - s * S - u * C)];
  }, f;
}
function bs(e) {
  return En(function() {
    return e;
  })();
}
function En(e) {
  var t, n = 150, a = 480, i = 250, c = 0, p = 0, m = 0, g = 0, d = 0, u, s = 0, o = 1, l = 1, f = null, S = _9, C = null, E, y, v, b = R9, T = 0.5, P, x, A, D, I;
  function N(h) {
    return A(h[0] * f2, h[1] * f2);
  }
  function F(h) {
    return h = A.invert(h[0], h[1]), h && [h[0] * B2, h[1] * B2];
  }
  N.stream = function(h) {
    return D && I === h ? D : D = Cs(vs(u)(S(P(b(I = h)))));
  }, N.preclip = function(h) {
    return arguments.length ? (S = h, f = void 0, k()) : S;
  }, N.postclip = function(h) {
    return arguments.length ? (b = h, C = E = y = v = null, k()) : b;
  }, N.clipAngle = function(h) {
    return arguments.length ? (S = +h ? ss(f = h * f2) : (f = null, _9), k()) : f * B2;
  }, N.clipExtent = function(h) {
    return arguments.length ? (b = h == null ? (C = E = y = v = null, R9) : us(C = +h[0][0], E = +h[0][1], y = +h[1][0], v = +h[1][1]), k()) : C == null ? null : [[C, E], [y, v]];
  }, N.scale = function(h) {
    return arguments.length ? (n = +h, _()) : n;
  }, N.translate = function(h) {
    return arguments.length ? (a = +h[0], i = +h[1], _()) : [a, i];
  }, N.center = function(h) {
    return arguments.length ? (c = h[0] % 360 * f2, p = h[1] % 360 * f2, _()) : [c * B2, p * B2];
  }, N.rotate = function(h) {
    return arguments.length ? (m = h[0] % 360 * f2, g = h[1] % 360 * f2, d = h.length > 2 ? h[2] % 360 * f2 : 0, _()) : [m * B2, g * B2, d * B2];
  }, N.angle = function(h) {
    return arguments.length ? (s = h % 360 * f2, _()) : s * B2;
  }, N.reflectX = function(h) {
    return arguments.length ? (o = h ? -1 : 1, _()) : o < 0;
  }, N.reflectY = function(h) {
    return arguments.length ? (l = h ? -1 : 1, _()) : l < 0;
  }, N.precision = function(h) {
    return arguments.length ? (P = U9(x, T = h * h), k()) : Q3(T);
  }, N.fitExtent = function(h, w) {
    return vn(N, h, w);
  }, N.fitSize = function(h, w) {
    return ds(N, h, w);
  }, N.fitWidth = function(h, w) {
    return gs(N, h, w);
  }, N.fitHeight = function(h, w) {
    return fs(N, h, w);
  };
  function _() {
    var h = F9(n, 0, 0, o, l, s).apply(null, t(c, p)), w = F9(n, a - h[0], i - h[1], o, l, s);
    return u = es(m, g, d), x = h7(t, w), A = h7(u, x), P = U9(x, T), k();
  }
  function k() {
    return D = I = null, N;
  }
  return function() {
    return t = e.apply(this, arguments), N.invert = t.invert && F, _();
  };
}
function Ls(e) {
  var t = 0, n = D1 / 3, a = En(e), i = a(t, n);
  return i.parallels = function(c) {
    return arguments.length ? a(t = c[0] * f2, n = c[1] * f2) : [t * B2, n * B2];
  }, i;
}
function ks(e) {
  var t = a2(e);
  function n(a, i) {
    return [a * t, Z1(i) / t];
  }
  return n.invert = function(a, i) {
    return [a / t, O3(i * t)];
  }, n;
}
function ws(e, t) {
  var n = Z1(e), a = (n + Z1(t)) / 2;
  if (r2(a) < Y1)
    return ks(e);
  var i = 1 + n * (2 * a - n), c = Q3(i) / a;
  function p(m, g) {
    var d = Q3(i - 2 * a * Z1(g)) / a;
    return [d * Z1(m *= a), c - d * a2(m)];
  }
  return p.invert = function(m, g) {
    var d = c - g, u = X3(m, r2(d)) * G5(d);
    return d * a < 0 && (u -= D1 * G5(m) * G5(d)), [u / a, O3((i - (m * m + d * d) * a * a) / (2 * a))];
  }, p;
}
function H3() {
  return Ls(ws).scale(155.424).center([0, 33.6442]);
}
function bn() {
  return H3().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function C7(e, t) {
  return [e, t];
}
C7.invert = C7;
function z9() {
  return bs(C7).scale(152.63);
}
function h5() {
}
var n4 = 1 / 0, T0 = n4, B4 = -n4, N0 = B4, G9 = {
  point: Ts,
  lineStart: h5,
  lineEnd: h5,
  polygonStart: h5,
  polygonEnd: h5,
  result: function() {
    var e = [[n4, T0], [B4, N0]];
    return B4 = N0 = -(T0 = n4 = 1 / 0), e;
  }
};
function Ts(e, t) {
  e < n4 && (n4 = e), e > B4 && (B4 = e), t < T0 && (T0 = t), t > N0 && (N0 = t);
}
function W7(e, t, n) {
  var a = t[1][0] - t[0][0], i = t[1][1] - t[0][1], c = e.clipExtent && e.clipExtent();
  e.scale(150).translate([0, 0]), c != null && e.clipExtent(null), hn(n, e.stream(G9));
  var p = G9.result(), m = Math.min(a / (p[1][0] - p[0][0]), i / (p[1][1] - p[0][1])), g = +t[0][0] + (a - m * (p[1][0] + p[0][0])) / 2, d = +t[0][1] + (i - m * (p[1][1] + p[0][1])) / 2;
  return c != null && e.clipExtent(c), e.scale(m * 150).translate([g, d]);
}
function Ln(e, t, n) {
  return W7(e, [[0, 0], t], n);
}
const v7 = Math.PI, E7 = 2 * v7, k3 = 1e-6, Ns = E7 - k3;
function b7() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function j7() {
  return new b7();
}
b7.prototype = j7.prototype = {
  constructor: b7,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, a) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(e, t, n, a, i, c) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +i) + "," + (this._y1 = +c);
  },
  arcTo: function(e, t, n, a, i) {
    e = +e, t = +t, n = +n, a = +a, i = +i;
    var c = this._x1, p = this._y1, m = n - e, g = a - t, d = c - e, u = p - t, s = d * d + u * u;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (s > k3)
      if (!(Math.abs(u * m - g * d) > k3) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var o = n - c, l = a - p, f = m * m + g * g, S = o * o + l * l, C = Math.sqrt(f), E = Math.sqrt(s), y = i * Math.tan((v7 - Math.acos((f + s - S) / (2 * C * E))) / 2), v = y / E, b = y / C;
        Math.abs(v - 1) > k3 && (this._ += "L" + (e + v * d) + "," + (t + v * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * o > d * l) + "," + (this._x1 = e + b * m) + "," + (this._y1 = t + b * g);
      }
  },
  arc: function(e, t, n, a, i, c) {
    e = +e, t = +t, n = +n, c = !!c;
    var p = n * Math.cos(a), m = n * Math.sin(a), g = e + p, d = t + m, u = 1 ^ c, s = c ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + g + "," + d : (Math.abs(this._x1 - g) > k3 || Math.abs(this._y1 - d) > k3) && (this._ += "L" + g + "," + d), n && (s < 0 && (s = s % E7 + E7), s > Ns ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - p) + "," + (t - m) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = g) + "," + (this._y1 = d) : s > k3 && (this._ += "A" + n + "," + n + ",0," + +(s >= v7) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Ps(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function As() {
  var e, t, n = bn(), a, i = H3().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c, p = H3().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), m, g, d = { point: function(o, l) {
    g = [o, l];
  } };
  function u(o) {
    var l = o[0], f = o[1];
    return g = null, a.point(l, f), g || (c.point(l, f), g) || (m.point(l, f), g);
  }
  u.invert = function(o) {
    var l = n.scale(), f = n.translate(), S = (o[0] - f[0]) / l, C = (o[1] - f[1]) / l;
    return (C >= 0.12 && C < 0.234 && S >= -0.425 && S < -0.214 ? i : C >= 0.166 && C < 0.234 && S >= -0.214 && S < -0.115 ? p : n).invert(o);
  }, u.stream = function(o) {
    return e && t === o ? e : e = Ps([n.stream(t = o), i.stream(o), p.stream(o)]);
  }, u.precision = function(o) {
    return arguments.length ? (n.precision(o), i.precision(o), p.precision(o), s()) : n.precision();
  }, u.scale = function(o) {
    return arguments.length ? (n.scale(o), i.scale(o * 0.35), p.scale(o), u.translate(n.translate())) : n.scale();
  }, u.translate = function(o) {
    if (!arguments.length)
      return n.translate();
    var l = n.scale(), f = +o[0], S = +o[1];
    return a = n.translate(o).clipExtent([[f - 0.455 * l, S - 0.238 * l], [f + 0.455 * l, S + 0.238 * l]]).stream(d), c = i.translate([f - 0.307 * l, S + 0.201 * l]).clipExtent([[f - 0.425 * l + G1, S + 0.12 * l + G1], [f - 0.214 * l - G1, S + 0.234 * l - G1]]).stream(d), m = p.translate([f - 0.205 * l, S + 0.212 * l]).clipExtent([[f - 0.214 * l + G1, S + 0.166 * l + G1], [f - 0.115 * l - G1, S + 0.234 * l - G1]]).stream(d), s();
  }, u.fitExtent = function(o, l) {
    return W7(u, o, l);
  }, u.fitSize = function(o, l) {
    return Ln(u, o, l);
  };
  function s() {
    return e = t = null, u;
  }
  return u.drawCompositionBorders = function(o) {
    var l = n([-102.91, 26.3]), f = n([-104, 27.5]), S = n([-108, 29.1]), C = n([-110, 29.1]), E = n([-110, 26.7]), y = n([-112.8, 27.6]), v = n([-114.3, 30.6]), b = n([-119.3, 30.1]);
    o.moveTo(l[0], l[1]), o.lineTo(f[0], f[1]), o.lineTo(S[0], S[1]), o.lineTo(C[0], C[1]), o.moveTo(E[0], E[1]), o.lineTo(y[0], y[1]), o.lineTo(v[0], v[1]), o.lineTo(b[0], b[1]);
  }, u.getCompositionBorders = function() {
    var o = j7();
    return this.drawCompositionBorders(o), o.toString();
  }, u.scale(1070);
}
function Ds(e) {
  var t = e.length;
  return {
    point: function(n, a) {
      for (var i = -1; ++i < t; )
        e[i].point(n, a);
    },
    sphere: function() {
      for (var n = -1; ++n < t; )
        e[n].sphere();
    },
    lineStart: function() {
      for (var n = -1; ++n < t; )
        e[n].lineStart();
    },
    lineEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].lineEnd();
    },
    polygonStart: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonStart();
    },
    polygonEnd: function() {
      for (var n = -1; ++n < t; )
        e[n].polygonEnd();
    }
  };
}
function T3() {
  var e, t, n = bn(), a, i = H3().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c, p = H3().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), m, g = H3().rotate([66, 0]).center([0, 18]).parallels([8, 18]), d, u = z9().rotate([173, 14]), s, o = z9().rotate([-145, -16.8]), l, f, S = { point: function(y, v) {
    f = [y, v];
  } };
  function C(y) {
    var v = y[0], b = y[1];
    return f = null, a.point(v, b), f || (c.point(v, b), f) || (m.point(v, b), f) || (d.point(v, b), f) || (s.point(v, b), f) || (l.point(v, b), f);
  }
  C.invert = function(y) {
    var v = n.scale(), b = n.translate(), T = (y[0] - b[0]) / v, P = (y[1] - b[1]) / v;
    return (P >= 0.12 && P < 0.234 && T >= -0.425 && T < -0.214 ? i : P >= 0.166 && P < 0.234 && T >= -0.214 && T < -0.115 ? p : P >= 0.2064 && P < 0.2413 && T >= 0.312 && T < 0.385 ? g : P >= 0.09 && P < 0.1197 && T >= -0.4243 && T < -0.3232 ? u : P >= -0.0518 && P < 0.0895 && T >= -0.4243 && T < -0.3824 ? o : n).invert(y);
  }, C.stream = function(y) {
    return e && t === y ? e : e = Ds([n.stream(t = y), i.stream(y), p.stream(y), g.stream(y), u.stream(y), o.stream(y)]);
  }, C.precision = function(y) {
    return arguments.length ? (n.precision(y), i.precision(y), p.precision(y), g.precision(y), u.precision(y), o.precision(y), E()) : n.precision();
  }, C.scale = function(y) {
    return arguments.length ? (n.scale(y), i.scale(y * 0.35), p.scale(y), g.scale(y), u.scale(y * 2), o.scale(y), C.translate(n.translate())) : n.scale();
  }, C.translate = function(y) {
    if (!arguments.length)
      return n.translate();
    var v = n.scale(), b = +y[0], T = +y[1];
    return a = n.translate(y).clipExtent([[b - 0.455 * v, T - 0.238 * v], [b + 0.455 * v, T + 0.238 * v]]).stream(S), c = i.translate([b - 0.307 * v, T + 0.201 * v]).clipExtent([[b - 0.425 * v + G1, T + 0.12 * v + G1], [b - 0.214 * v - G1, T + 0.233 * v - G1]]).stream(S), m = p.translate([b - 0.205 * v, T + 0.212 * v]).clipExtent([[b - 0.214 * v + G1, T + 0.166 * v + G1], [b - 0.115 * v - G1, T + 0.233 * v - G1]]).stream(S), d = g.translate([b + 0.35 * v, T + 0.224 * v]).clipExtent([[b + 0.312 * v + G1, T + 0.2064 * v + G1], [b + 0.385 * v - G1, T + 0.233 * v - G1]]).stream(S), s = u.translate([b - 0.492 * v, T + 0.09 * v]).clipExtent([[b - 0.4243 * v + G1, T + 0.0903 * v + G1], [b - 0.3233 * v - G1, T + 0.1197 * v - G1]]).stream(S), l = o.translate([b - 0.408 * v, T + 0.018 * v]).clipExtent([[b - 0.4244 * v + G1, T - 0.0519 * v + G1], [b - 0.3824 * v - G1, T + 0.0895 * v - G1]]).stream(S), E();
  }, C.fitExtent = function(y, v) {
    return W7(C, y, v);
  }, C.fitSize = function(y, v) {
    return Ln(C, y, v);
  };
  function E() {
    return e = t = null, C;
  }
  return C.drawCompositionBorders = function(y) {
    var v = n([-110.4641, 28.2805]), b = n([-104.0597, 28.9528]), T = n([-103.7049, 25.1031]), P = n([-109.8337, 24.4531]), x = n([-124.4745, 28.1407]), A = n([-110.931, 30.8844]), D = n([-109.8337, 24.4531]), I = n([-122.4628, 21.8562]), N = n([-76.8579, 25.1544]), F = n([-72.429, 24.2097]), _ = n([-72.8265, 22.7056]), k = n([-77.1852, 23.6392]), h = n([-125.0093, 29.7791]), w = n([-118.5193, 31.3262]), M = n([-118.064, 29.6912]), B = n([-124.4369, 28.169]), $ = n([-128.1314, 37.4582]), W = n([-125.2132, 38.214]), z = n([-122.3616, 30.5115]), q = n([-125.0315, 29.8211]);
    y.moveTo(v[0], v[1]), y.lineTo(b[0], b[1]), y.lineTo(T[0], T[1]), y.lineTo(T[0], T[1]), y.lineTo(P[0], P[1]), y.closePath(), y.moveTo(x[0], x[1]), y.lineTo(A[0], A[1]), y.lineTo(D[0], D[1]), y.lineTo(D[0], D[1]), y.lineTo(I[0], I[1]), y.closePath(), y.moveTo(N[0], N[1]), y.lineTo(F[0], F[1]), y.lineTo(_[0], _[1]), y.lineTo(_[0], _[1]), y.lineTo(k[0], k[1]), y.closePath(), y.moveTo(h[0], h[1]), y.lineTo(w[0], w[1]), y.lineTo(M[0], M[1]), y.lineTo(M[0], M[1]), y.lineTo(B[0], B[1]), y.closePath(), y.moveTo($[0], $[1]), y.lineTo(W[0], W[1]), y.lineTo(z[0], z[1]), y.lineTo(z[0], z[1]), y.lineTo(q[0], q[1]), y.closePath();
  }, C.getCompositionBorders = function() {
    var y = j7();
    return this.drawCompositionBorders(y), y.toString();
  }, C.scale(1070);
}
const x2 = (e) => {
  const { item: t, index: n, centroid: a, iconSize: i, textColor: c = "#000", isTerritory: p } = e;
  if (a)
    return p ? /* @__PURE__ */ r.createElement(W3, { style: { transform: "translate(36%, 50%)" }, key: `territory-hex--${n}` }, t.shape === "Arrow Down" && /* @__PURE__ */ r.createElement(F6, { size: 12, stroke: "none", fontWeight: 100 }), t.shape === "Arrow Up" && /* @__PURE__ */ r.createElement(G6, { size: 12, stroke: "none", fontWeight: 100 }), t.shape === "Arrow Right" && /* @__PURE__ */ r.createElement(z6, { size: 12, stroke: "none", fontWeight: 100 }), t.shape === "Arrow Left" && /* @__PURE__ */ r.createElement(Q8, { size: 12, stroke: "none", fontWeight: 100 })) : /* @__PURE__ */ r.createElement(W3, { top: a[1] - 5, left: a[0] - i, color: c, textAnchor: "start", key: `hex--${t.key}-${t.value}-${n}` }, t.shape === "Arrow Down" && /* @__PURE__ */ r.createElement(F6, null), t.shape === "Arrow Up" && /* @__PURE__ */ r.createElement(G6, null), t.shape === "Arrow Right" && /* @__PURE__ */ r.createElement(z6, null), t.shape === "Arrow Left" && /* @__PURE__ */ r.createElement(Q8, null));
}, O2 = {
  small: 8,
  medium: 10,
  large: 12
};
const J9 = {
  "US-VT": [50, -8],
  "US-NH": [34, 2],
  "US-MA": [30, -1],
  "US-RI": [28, 2],
  "US-CT": [35, 10],
  "US-NJ": [42, 1],
  "US-DE": [33, 0],
  "US-MD": [47, 10]
}, o6 = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, Ms = ({ label: e, text: t, stroke: n, strokeWidth: a, textColor: i, territory: c, territoryData: p, ...m }) => {
  const { state: g } = R.useContext(N2), d = g.general.displayAsHex, u = (s, o = "#FFFFFF", l) => {
    var T;
    let f = l ? l(q3(s)) : [22, 17.5], S = (T = s == null ? void 0 : s.properties) != null && T.iso ? s.properties.iso : s.uid;
    const C = (P, x, A = !1) => (A || (f = l(q3(x))), /* @__PURE__ */ r.createElement(r.Fragment, null, g.hexMap.shapeGroups.map((D, I) => D.items.map((N, F) => {
      switch (N.operator) {
        case "=":
          if (P[N.key] === N.value || Number(P[N.key]) === Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
        case "≠":
          if (P[N.key] !== N.value && Number(P[N.key]) !== Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
        case "<":
          if (Number(P[N.key]) < Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
        case ">":
          if (Number(P[N.key]) > Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
        case "<=":
          if (Number(P[N.key]) <= Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
        case ">=":
          if (N.operator === ">=" && Number(P[N.key]) >= Number(N.value))
            return /* @__PURE__ */ r.createElement(x2, { item: N, index: F, centroid: f, isTerritory: !0 });
          break;
      }
    }))));
    if (S === void 0)
      return null;
    i3("#FFF", o);
    let E = 0, y = g.hexMap.type === "shapes" ? -10 : 5;
    if (o6[S] && d === !1 && (E += o6[S][0], y += o6[S][1]), J9[S] === void 0 || d) {
      let P = g.hexMap.type === "shapes" ? "30%" : "50%";
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Yn, { fontSize: 14, x: "50%", y: P, style: { fill: "currentColor", stroke: "initial", fontWeight: 400, opacity: 1, fillOpacity: 1 }, textAnchor: "middle", verticalAnchor: "middle" }, S.substring(3)), g.general.displayAsHex && g.hexMap.type === "shapes" && C(p, s, !0));
    }
    let [v, b] = J9[S];
    return /* @__PURE__ */ r.createElement("g", null, /* @__PURE__ */ r.createElement("line", { x1: f[0], y1: f[1], x2: f[0] + v, y2: f[1] + b, stroke: "rgba(0,0,0,.5)", strokeWidth: 1 }), /* @__PURE__ */ r.createElement("text", { x: 4, strokeWidth: "0", fontSize: 13, style: { fill: "#202020" }, alignmentBaseline: "middle", transform: `translate(${f[0] + v}, ${f[1] + b})` }, S.substring(3)));
  };
  return /* @__PURE__ */ r.createElement("svg", { viewBox: "0 0 45 51", className: "territory-wrapper--hex" }, /* @__PURE__ */ r.createElement("g", { ...m }, /* @__PURE__ */ r.createElement("polygon", { stroke: n, strokeWidth: a, points: "22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702" }), g.general.displayAsHex && u(p || geo, n, !1)));
}, xs = ({ label: e, text: t, stroke: n, strokeWidth: a, textColor: i, hasPattern: c, territory: p, ...m }) => {
  const { state: g, supportedTerritories: d } = R.useContext(N2), { territoryData: u, ...s } = m;
  return /* @__PURE__ */ r.createElement("svg", { viewBox: "0 0 45 28", key: p, className: p }, /* @__PURE__ */ r.createElement("g", { ...s, strokeLinejoin: "round", tabIndex: -1 }, /* @__PURE__ */ r.createElement(
    "path",
    {
      stroke: n,
      strokeWidth: a,
      d: "M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z",
      ...s
    }
  ), /* @__PURE__ */ r.createElement("text", { textAnchor: "middle", dominantBaseline: "middle", x: "50%", y: "54%", fill: t, style: { stroke: i, strokeWidth: 1 }, className: "territory-text", paintOrder: "stroke" }, e), g.map.patterns.map((o, l) => {
    var C;
    const f = i3("#FFF", m.style.fill);
    return !((C = d[p]) == null ? void 0 : C.includes(o == null ? void 0 : o.dataValue)) || !o.pattern ? null : /* @__PURE__ */ r.createElement(r.Fragment, null, (o == null ? void 0 : o.pattern) === "waves" && /* @__PURE__ */ r.createElement(_0, { id: `territory-${o == null ? void 0 : o.dataKey}--${l}`, height: O2[o == null ? void 0 : o.size] ?? 10, width: O2[o == null ? void 0 : o.size] ?? 10, fill: f, complement: !0 }), (o == null ? void 0 : o.pattern) === "circles" && /* @__PURE__ */ r.createElement(I0, { id: `territory-${o == null ? void 0 : o.dataKey}--${l}`, height: O2[o == null ? void 0 : o.size] ?? 10, width: O2[o == null ? void 0 : o.size] ?? 10, fill: f, complement: !0 }), (o == null ? void 0 : o.pattern) === "lines" && /* @__PURE__ */ r.createElement(O0, { id: `territory-${o == null ? void 0 : o.dataKey}--${l}`, height: O2[o == null ? void 0 : o.size] ?? 6, width: O2[o == null ? void 0 : o.size] ?? 6, stroke: f, strokeWidth: 1, orientation: ["diagonalRightToLeft"] }), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: n,
        strokeWidth: a,
        d: "M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z",
        fill: `url(#territory-${o == null ? void 0 : o.dataKey}--${l})`,
        color: o ? "white" : i,
        className: [`territory-pattern-${o.dataKey}`, `territory-pattern-${o.dataKey}--${o.dataValue}`].join(" ")
      }
    ), /* @__PURE__ */ r.createElement("text", { textAnchor: "middle", dominantBaseline: "middle", x: "50%", y: "54%", fill: t, style: { fill: o ? "white" : "black", stroke: o ? "black" : i, strokeWidth: o ? 6 : 0 }, className: "territory-text", "paint-order": "stroke" }, e));
  })));
}, H9 = {
  Rectangle: xs,
  Hexagon: Ms
}, { features: Os } = l3(n9, n9.objects.states), { features: Is } = l3(a9, a9.objects.states), W9 = {
  "US-VT": [50, -8],
  "US-NH": [34, 2],
  "US-MA": [30, -1],
  "US-RI": [28, 2],
  "US-CT": [35, 10],
  "US-NJ": [42, 1],
  "US-DE": [33, 0],
  "US-MD": [47, 10]
}, i6 = {
  "US-FL": [15, 3],
  "US-AK": [0, -8],
  "US-CA": [-10, 0],
  "US-NY": [5, 0],
  "US-MI": [13, 20],
  "US-LA": [-10, -3],
  "US-HI": [-10, 10],
  "US-ID": [0, 10],
  "US-WV": [-2, 2]
}, _s = () => {
  const {
    applyLegendToRow: e,
    applyTooltipsToGeo: t,
    data: n,
    displayGeoName: a,
    geoClickHandler: i,
    handleCircleClick: c,
    handleMapAriaLabels: p,
    setSharedFilterValue: m,
    state: g,
    supportedTerritories: d,
    titleCase: u,
    tooltipId: s
  } = R.useContext(N2);
  let o = !1;
  m && (Object.keys(z3).forEach((_) => {
    z3[_].indexOf(m.toUpperCase()) !== -1 && (o = !0);
  }), Object.keys(d).forEach((_) => {
    d[_].indexOf(m.toUpperCase()) !== -1 && (o = !0);
  }), Object.keys(w3).forEach((_) => {
    _ === m.toUpperCase() && (o = !0);
  }));
  const [l, f] = R.useState(null), [S, C] = R.useState(Os), [E, y] = R.useState([455, 200]);
  R.useEffect(() => {
    y([455, 250]), f(null);
  }, [g.general.geoType]);
  const v = g.general.displayAsHex, [b, T] = R.useState([]), P = Object.keys(d);
  R.useEffect(() => {
    if (g.general.territoriesAlwaysShow)
      T(P);
    else {
      const _ = P.filter((k) => n[k]);
      T(_);
    }
  }, [n, g.general.territoriesAlwaysShow]);
  const x = g.general.geoBorderColor === "darkGray" ? "rgba(0, 0, 0, 0.2)" : "rgba(255,255,255,0.7)", A = b.map((_, k) => {
    const h = v ? H9.Hexagon : H9.Rectangle, w = n[_];
    let M, B = {
      fill: "#E6E6E6",
      color: "#202020"
    };
    const $ = d[_][1];
    if (!w)
      return /* @__PURE__ */ r.createElement(h, { key: $, label: $, style: B, text: B.color });
    M = t(a(_), w);
    const W = e(w);
    if (W) {
      const z = i3("#FFF", W[0]);
      let q = !1;
      return (g.columns.navigate && w[g.columns.navigate.name] || g.tooltips.appearanceType === "click") && (q = !0), B = {
        color: z,
        fill: W[0],
        opacity: m && o && m !== w[g.columns.geo.name] ? 0.5 : 1,
        stroke: m && o && m === w[g.columns.geo.name] ? "rgba(0, 0, 0, 1)" : x,
        cursor: q ? "pointer" : "default",
        "&:hover": {
          fill: W[1]
        },
        "&:active": {
          fill: W[2]
        }
      }, /* @__PURE__ */ r.createElement(
        h,
        {
          key: `label__${k}`,
          label: $,
          style: B,
          text: B.color,
          strokeWidth: 1.5,
          textColor: z,
          onClick: () => i(_, w),
          "data-tooltip-id": `tooltip__${s}`,
          "data-tooltip-html": M,
          territory: _,
          territoryData: w,
          tabIndex: -1
        }
      );
    }
  });
  let D = k4().projection(As().translate(E));
  const { pathArray: I } = R7(g, "", D, s), N = (_, k) => {
    let h = g.general.displayStateLabels;
    _.map((M) => {
      M.feature.properties.iso && (M.feature.properties.name = u(z3[M.feature.properties.iso][0]));
    }), _.sort((M, B) => {
      const $ = M.feature.properties.name.toUpperCase(), W = B.feature.properties.name.toUpperCase();
      return $ < W ? -1 : $ > W ? 1 : 0;
    });
    const w = _.map(({ feature: M, path: B = "" }, $) => {
      const W = v ? M.properties.iso + "-hex-group" : M.properties.iso + "-group";
      let z = {
        fill: "#E6E6E6",
        cursor: "default"
      }, q = M.properties.iso, J = M.properties.name;
      if (!q)
        return;
      const Y = n[q];
      let Z;
      Y !== void 0 && (Z = e(Y));
      const f1 = a(q);
      if (Z && Z[0] !== "#000000") {
        const _1 = t(f1, Y);
        z = {
          fill: g.general.type !== "bubble" ? Z[0] : "#E6E6E6",
          opacity: m && o && m !== Y[g.columns.geo.name] ? 0.5 : 1,
          stroke: m && o && m === Y[g.columns.geo.name] ? "rgba(0, 0, 0, 1)" : x,
          cursor: "default",
          "&:hover": {
            fill: g.general.type !== "bubble" ? Z[1] : "#e6e6e6"
          },
          "&:active": {
            fill: g.general.type !== "bubble" ? Z[2] : "#e6e6e6"
          }
        }, (g.columns.navigate && Y[g.columns.navigate.name] || g.tooltips.appearanceType === "click") && (z.cursor = "pointer");
        const Q1 = ($1, V, m1) => {
          const i1 = k(q3(V)), g1 = 8, h1 = i3("#FFF", m1);
          return /* @__PURE__ */ r.createElement(r.Fragment, null, g.hexMap.shapeGroups.map((c1, S1) => c1.items.map((u1, r1) => {
            switch (u1.operator) {
              case "=":
                if ($1[u1.key] === u1.value || Number($1[u1.key]) === Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
              case "≠":
                if ($1[u1.key] !== u1.value && Number($1[u1.key]) !== Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
              case "<":
                if (Number($1[u1.key]) < Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
              case ">":
                if (Number($1[u1.key]) > Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
              case "<=":
                if (Number($1[u1.key]) <= Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
              case ">=":
                if (u1.operator === ">=" && Number($1[u1.key]) >= Number(u1.value))
                  return /* @__PURE__ */ r.createElement(x2, { textColor: h1, item: u1, index: r1, centroid: i1, iconSize: g1 });
                break;
            }
          })));
        };
        return /* @__PURE__ */ r.createElement("g", { "data-name": J, key: W, tabIndex: -1 }, /* @__PURE__ */ r.createElement("g", { className: "geo-group", style: z, onClick: () => i(f1, Y), id: J, "data-tooltip-id": `tooltip__${s}`, "data-tooltip-html": _1, tabIndex: -1 }, /* @__PURE__ */ r.createElement("path", { tabIndex: -1, className: "single-geo", strokeWidth: 1.3, d: B }), g.map.patterns.map(($1, V) => {
          const { pattern: m1, dataKey: i1, size: g1 } = $1, h1 = z.fill, c1 = $1.dataValue === Y[$1.dataKey], S1 = $1.color || i3("#000", h1);
          return c1 && /* @__PURE__ */ r.createElement(r.Fragment, null, m1 === "waves" && /* @__PURE__ */ r.createElement(_0, { id: `${i1}--${$}`, height: O2[g1] ?? 10, width: O2[g1] ?? 10, fill: S1 }), m1 === "circles" && /* @__PURE__ */ r.createElement(I0, { id: `${i1}--${$}`, height: O2[g1] ?? 10, width: O2[g1] ?? 10, fill: S1 }), m1 === "lines" && /* @__PURE__ */ r.createElement(O0, { id: `${i1}--${$}`, height: O2[g1] ?? 6, width: O2[g1] ?? 6, stroke: S1, strokeWidth: 1, orientation: ["diagonalRightToLeft"] }), /* @__PURE__ */ r.createElement("path", { className: `pattern-geoKey--${i1}`, tabIndex: -1, stroke: "transparent", d: B, fill: `url(#${i1}--${$})` }));
        }), (v || h) && F(M, Z[0], k), v && g.hexMap.type === "shapes" && Q1(Y, M, Z[0])));
      }
      return /* @__PURE__ */ r.createElement("g", { "data-name": J, key: W, tabIndex: -1 }, /* @__PURE__ */ r.createElement("g", { className: "geo-group", style: z, tabIndex: -1 }, /* @__PURE__ */ r.createElement("path", { tabIndex: -1, className: "single-geo", stroke: x, strokeWidth: 1.3, d: B }), (v || h) && F(M, z.fill, k)));
    });
    return v || (w.push(
      /* @__PURE__ */ r.createElement(
        G7,
        {
          applyLegendToRow: e,
          applyTooltipsToGeo: t,
          data: n,
          displayGeoName: a,
          geoClickHandler: i,
          isFilterValueSupported: o,
          key: "cities",
          projection: k,
          setSharedFilterValue: m,
          state: g,
          titleCase: u,
          tooltipId: s
        }
      )
    ), g.general.type === "bubble" && w.push(/* @__PURE__ */ r.createElement(gn, { key: "bubbles", data: g.data, runtimeData: n, state: g, projection: k, applyLegendToRow: e, applyTooltipsToGeo: t, displayGeoName: a })), I.length > 0 && I.map((M) => w.push(M))), w;
  }, F = (_, k = "#FFFFFF", h) => {
    let w = h ? h(q3(_)) : [22, 17.5], M = _.properties.iso;
    if (M === void 0)
      return null;
    let B = i3("#FFF", k);
    M === "US-HI" && !g.general.displayAsHex && (B = "#000");
    let $ = 0, W = g.hexMap.type === "shapes" && g.general.displayAsHex ? -10 : 5;
    if (i6[M] && v === !1 && ($ += i6[M][0], W += i6[M][1]), W9[M] === void 0 || v)
      return /* @__PURE__ */ r.createElement("g", { transform: `translate(${w})`, tabIndex: -1 }, /* @__PURE__ */ r.createElement("text", { x: $, y: W, fontSize: 14, strokeWidth: "0", style: { fill: B }, textAnchor: "middle" }, M.substring(3)));
    let [z, q] = W9[M];
    return /* @__PURE__ */ r.createElement("g", { tabIndex: -1 }, /* @__PURE__ */ r.createElement("line", { x1: w[0], y1: w[1], x2: w[0] + z, y2: w[1] + q, stroke: "rgba(0,0,0,.5)", strokeWidth: 1 }), /* @__PURE__ */ r.createElement("text", { x: 4, strokeWidth: "0", fontSize: 13, style: { fill: "#202020" }, alignmentBaseline: "middle", transform: `translate(${w[0] + z}, ${w[1] + q})` }, M.substring(3)));
  };
  return /* @__PURE__ */ r.createElement(I3, { component: "UsaMap" }, /* @__PURE__ */ r.createElement("svg", { viewBox: "0 0 880 500", role: "img", "aria-label": p(g) }, g.general.displayAsHex ? /* @__PURE__ */ r.createElement(E0, { data: Is, scale: 650, translate: [1600, 775] }, ({ features: _, projection: k }) => N(_, k)) : /* @__PURE__ */ r.createElement(jl, { data: S, translate: E, fitExtent: l }, ({ features: _, projection: k }) => N(_, k)), !1), A.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "two-col" }, /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("span", { className: "territories-label label" }, g.general.territoriesLabel)), /* @__PURE__ */ r.createElement("div", null, /* @__PURE__ */ r.createElement("span", { className: window.visualViewport.width < 700 ? "territories--mobile" : "territories" }, A)))));
}, Rs = "Topology", $s = [
  [
    [
      381613,
      182132
    ],
    [
      22,
      16
    ],
    [
      142,
      -43
    ],
    [
      29,
      -20
    ],
    [
      -37,
      -92
    ],
    [
      -7,
      -49
    ],
    [
      53,
      -45
    ],
    [
      90,
      -117
    ],
    [
      -33,
      -122
    ],
    [
      -14,
      -16
    ],
    [
      -12,
      -12
    ],
    [
      -72,
      -14
    ],
    [
      -23,
      64
    ],
    [
      -62,
      320
    ],
    [
      -12,
      11
    ],
    [
      -40,
      0
    ],
    [
      -21,
      18
    ],
    [
      -3,
      101
    ]
  ],
  [
    [
      377115,
      181030
    ],
    [
      102,
      -368
    ],
    [
      -56,
      -43
    ],
    [
      -131,
      81
    ],
    [
      -44,
      -18
    ],
    [
      -49,
      56
    ],
    [
      16,
      27
    ],
    [
      9,
      81
    ],
    [
      40,
      100
    ],
    [
      -6,
      68
    ],
    [
      17,
      99
    ],
    [
      30,
      28
    ],
    [
      26,
      3
    ],
    [
      32,
      -22
    ],
    [
      14,
      -92
    ]
  ],
  [
    [
      378457,
      180270
    ],
    [
      111,
      -23
    ],
    [
      17,
      -44
    ],
    [
      -5,
      -12
    ],
    [
      -46,
      13
    ],
    [
      -52,
      -9
    ],
    [
      -29,
      -19
    ],
    [
      -16,
      -13
    ],
    [
      -6,
      -30
    ],
    [
      4,
      -58
    ],
    [
      -42,
      -31
    ],
    [
      -91,
      -10
    ],
    [
      -40,
      22
    ],
    [
      -12,
      27
    ],
    [
      11,
      132
    ],
    [
      64,
      15
    ],
    [
      41,
      -22
    ],
    [
      39,
      0
    ],
    [
      28,
      19
    ],
    [
      24,
      43
    ]
  ],
  [
    [
      374842,
      180379
    ],
    [
      120,
      211
    ],
    [
      0,
      188
    ],
    [
      39,
      217
    ],
    [
      42,
      100
    ],
    [
      126,
      59
    ],
    [
      54,
      -38
    ],
    [
      39,
      -125
    ],
    [
      -18,
      -69
    ],
    [
      -38,
      -76
    ],
    [
      -58,
      -48
    ],
    [
      -29,
      0
    ],
    [
      -21,
      -26
    ],
    [
      -20,
      -93
    ],
    [
      47,
      -138
    ],
    [
      -61,
      -142
    ],
    [
      -25,
      -29
    ],
    [
      -64,
      -271
    ],
    [
      -49,
      -73
    ],
    [
      -100,
      -89
    ],
    [
      -31,
      -16
    ],
    [
      25,
      59
    ],
    [
      -42,
      126
    ],
    [
      -21,
      26
    ],
    [
      -33,
      17
    ],
    [
      -6,
      16
    ],
    [
      9,
      54
    ],
    [
      59,
      96
    ],
    [
      56,
      64
    ]
  ],
  [
    [
      375613,
      180061
    ],
    [
      114,
      -110
    ],
    [
      4,
      -69
    ],
    [
      -56,
      -75
    ],
    [
      -50,
      6
    ],
    [
      -59,
      34
    ],
    [
      -40,
      29
    ],
    [
      -32,
      12
    ],
    [
      -38,
      17
    ],
    [
      -35,
      3
    ],
    [
      -42,
      75
    ],
    [
      -8,
      69
    ],
    [
      30,
      32
    ],
    [
      30,
      14
    ],
    [
      11,
      -2
    ],
    [
      171,
      -35
    ]
  ],
  [
    [
      377247,
      179929
    ],
    [
      65,
      -53
    ],
    [
      32,
      -80
    ],
    [
      -2,
      -16
    ],
    [
      -25,
      -13
    ],
    [
      -130,
      38
    ],
    [
      -14,
      49
    ],
    [
      23,
      128
    ],
    [
      12,
      12
    ],
    [
      52,
      -2
    ],
    [
      9,
      -32
    ],
    [
      -22,
      -31
    ]
  ],
  [
    [
      377849,
      179777
    ],
    [
      113,
      60
    ],
    [
      46,
      -11
    ],
    [
      41,
      -40
    ],
    [
      7,
      -23
    ],
    [
      -19,
      -4
    ],
    [
      -14,
      18
    ],
    [
      -58,
      -51
    ],
    [
      -33,
      -149
    ],
    [
      -43,
      -17
    ],
    [
      -161,
      108
    ],
    [
      39,
      64
    ],
    [
      35,
      34
    ],
    [
      47,
      11
    ]
  ],
  [
    [
      376183,
      180366
    ],
    [
      27,
      3
    ],
    [
      37,
      -23
    ],
    [
      48,
      -59
    ],
    [
      181,
      -95
    ],
    [
      61,
      -79
    ],
    [
      29,
      -103
    ],
    [
      128,
      -128
    ],
    [
      85,
      -104
    ],
    [
      6,
      -44
    ],
    [
      -21,
      -44
    ],
    [
      -55,
      -13
    ],
    [
      -109,
      57
    ],
    [
      -69,
      106
    ],
    [
      -63,
      -74
    ],
    [
      -3,
      -21
    ],
    [
      31,
      -39
    ],
    [
      6,
      -22
    ],
    [
      -2,
      -39
    ],
    [
      -124,
      -172
    ],
    [
      -48,
      -29
    ],
    [
      -90,
      -16
    ],
    [
      -7,
      -95
    ],
    [
      -19,
      -11
    ],
    [
      -35,
      8
    ],
    [
      -24,
      66
    ],
    [
      -29,
      48
    ],
    [
      -44,
      34
    ],
    [
      -45,
      3
    ],
    [
      -18,
      13
    ],
    [
      -17,
      16
    ],
    [
      -20,
      48
    ],
    [
      7,
      103
    ],
    [
      21,
      58
    ],
    [
      3,
      92
    ],
    [
      -35,
      64
    ],
    [
      -9,
      53
    ],
    [
      0,
      29
    ],
    [
      22,
      37
    ],
    [
      35,
      2
    ],
    [
      57,
      38
    ],
    [
      34,
      108
    ],
    [
      70,
      98
    ],
    [
      14,
      50
    ],
    [
      0,
      48
    ],
    [
      -16,
      28
    ]
  ],
  [
    [
      377347,
      179710
    ],
    [
      79,
      -13
    ],
    [
      69,
      19
    ],
    [
      41,
      -27
    ],
    [
      42,
      -79
    ],
    [
      119,
      -157
    ],
    [
      -60,
      -105
    ],
    [
      -158,
      -157
    ],
    [
      -56,
      -23
    ],
    [
      -52,
      69
    ],
    [
      6,
      58
    ],
    [
      -48,
      87
    ],
    [
      -118,
      19
    ],
    [
      -25,
      -10
    ],
    [
      -61,
      3
    ],
    [
      -28,
      40
    ],
    [
      7,
      56
    ],
    [
      27,
      18
    ],
    [
      108,
      143
    ],
    [
      108,
      59
    ]
  ],
  [
    [
      377833,
      179234
    ],
    [
      27,
      20
    ],
    [
      33,
      -1
    ],
    [
      81,
      -126
    ],
    [
      -1,
      -22
    ],
    [
      -36,
      -45
    ],
    [
      -139,
      0
    ],
    [
      -58,
      79
    ],
    [
      0,
      12
    ],
    [
      6,
      19
    ],
    [
      50,
      56
    ],
    [
      37,
      8
    ]
  ],
  [
    [
      377111,
      179227
    ],
    [
      33,
      -53
    ],
    [
      7,
      -52
    ],
    [
      -58,
      -75
    ],
    [
      -72,
      28
    ],
    [
      -9,
      72
    ],
    [
      38,
      87
    ],
    [
      22,
      16
    ],
    [
      39,
      -23
    ]
  ],
  [
    [
      375646,
      178708
    ],
    [
      -25,
      3
    ],
    [
      -86,
      -133
    ],
    [
      -57,
      -27
    ],
    [
      -51,
      0
    ],
    [
      -176,
      -52
    ],
    [
      -58,
      2
    ],
    [
      -79,
      53
    ],
    [
      -53,
      253
    ],
    [
      -26,
      76
    ],
    [
      -43,
      58
    ],
    [
      29,
      149
    ],
    [
      -6,
      33
    ],
    [
      -175,
      -2
    ],
    [
      -7,
      23
    ],
    [
      47,
      129
    ],
    [
      93,
      131
    ],
    [
      146,
      83
    ],
    [
      51,
      52
    ],
    [
      161,
      120
    ],
    [
      114,
      24
    ],
    [
      30,
      -43
    ],
    [
      -16,
      -12
    ],
    [
      -3,
      -37
    ],
    [
      23,
      -94
    ],
    [
      134,
      -110
    ],
    [
      27,
      -15
    ],
    [
      23,
      10
    ],
    [
      9,
      -15
    ],
    [
      -59,
      -48
    ],
    [
      -51,
      8
    ],
    [
      -82,
      -7
    ],
    [
      -8,
      -10
    ],
    [
      -4,
      -39
    ],
    [
      5,
      -60
    ],
    [
      20,
      -45
    ],
    [
      45,
      4
    ],
    [
      83,
      -172
    ],
    [
      45,
      -64
    ],
    [
      47,
      -43
    ],
    [
      12,
      -65
    ],
    [
      -48,
      -87
    ],
    [
      -31,
      -31
    ]
  ],
  [
    [
      376503,
      178406
    ],
    [
      -87,
      48
    ],
    [
      -62,
      -32
    ],
    [
      -23,
      -34
    ],
    [
      -5,
      -44
    ],
    [
      -22,
      -1
    ],
    [
      -15,
      90
    ],
    [
      1,
      49
    ],
    [
      13,
      12
    ],
    [
      34,
      114
    ],
    [
      -21,
      145
    ],
    [
      -35,
      119
    ],
    [
      173,
      90
    ],
    [
      13,
      35
    ],
    [
      37,
      28
    ],
    [
      43,
      -15
    ],
    [
      35,
      -58
    ],
    [
      68,
      -82
    ],
    [
      18,
      -2
    ],
    [
      10,
      -34
    ],
    [
      -21,
      -69
    ],
    [
      -14,
      -19
    ],
    [
      -52,
      -2
    ],
    [
      -53,
      -244
    ],
    [
      4,
      -86
    ],
    [
      -27,
      -27
    ],
    [
      -12,
      19
    ]
  ],
  [
    [
      374324,
      178357
    ],
    [
      -18,
      -25
    ],
    [
      -24,
      -44
    ],
    [
      -14,
      -18
    ],
    [
      -46,
      -13
    ],
    [
      -29,
      -52
    ],
    [
      -44,
      -80
    ],
    [
      -76,
      37
    ],
    [
      -20,
      16
    ],
    [
      16,
      24
    ],
    [
      36,
      18
    ],
    [
      49,
      23
    ],
    [
      46,
      39
    ],
    [
      32,
      33
    ],
    [
      17,
      25
    ],
    [
      2,
      31
    ],
    [
      -20,
      20
    ],
    [
      -23,
      -12
    ],
    [
      -25,
      -9
    ],
    [
      -1,
      37
    ],
    [
      50,
      19
    ],
    [
      74,
      -8
    ],
    [
      18,
      -61
    ]
  ],
  [
    [
      372359,
      177793
    ],
    [
      24,
      -44
    ],
    [
      6,
      -38
    ],
    [
      -6,
      -16
    ],
    [
      -76,
      -44
    ],
    [
      -14,
      2
    ],
    [
      -5,
      48
    ],
    [
      41,
      242
    ],
    [
      21,
      -6
    ],
    [
      44,
      -75
    ],
    [
      -35,
      -69
    ]
  ],
  [
    [
      375162,
      177312
    ],
    [
      -12,
      -109
    ],
    [
      33,
      -87
    ],
    [
      -54,
      -106
    ],
    [
      -59,
      -9
    ],
    [
      -4,
      7
    ],
    [
      28,
      70
    ],
    [
      -6,
      92
    ],
    [
      -17,
      41
    ],
    [
      -30,
      -7
    ],
    [
      -22,
      9
    ],
    [
      29,
      139
    ],
    [
      67,
      49
    ],
    [
      47,
      -89
    ]
  ],
  [
    [
      372973,
      176654
    ],
    [
      6,
      10
    ],
    [
      20,
      -4
    ],
    [
      13,
      -18
    ],
    [
      -2,
      -26
    ],
    [
      -69,
      -87
    ],
    [
      -42,
      -6
    ],
    [
      -6,
      23
    ],
    [
      13,
      49
    ],
    [
      38,
      52
    ],
    [
      29,
      7
    ]
  ],
  [
    [
      368819,
      176470
    ],
    [
      34,
      3
    ],
    [
      81,
      60
    ],
    [
      11,
      -30
    ],
    [
      -26,
      -81
    ],
    [
      -39,
      -56
    ],
    [
      -9,
      -30
    ],
    [
      3,
      -60
    ],
    [
      -78,
      -102
    ],
    [
      -27,
      0
    ],
    [
      -44,
      72
    ],
    [
      -3,
      69
    ],
    [
      59,
      111
    ],
    [
      38,
      44
    ]
  ],
  [
    [
      368983,
      176112
    ],
    [
      -31,
      -60
    ],
    [
      -30,
      27
    ],
    [
      -84,
      -91
    ],
    [
      -12,
      2
    ],
    [
      1,
      23
    ],
    [
      11,
      20
    ],
    [
      78,
      123
    ],
    [
      26,
      25
    ],
    [
      13,
      9
    ],
    [
      5,
      -8
    ],
    [
      -26,
      -63
    ],
    [
      27,
      -20
    ],
    [
      22,
      13
    ]
  ],
  [
    [
      368593,
      176057
    ],
    [
      36,
      17
    ],
    [
      55,
      51
    ],
    [
      54,
      -8
    ],
    [
      -97,
      -144
    ],
    [
      -70,
      -43
    ],
    [
      -11,
      2
    ],
    [
      -17,
      61
    ],
    [
      12,
      28
    ],
    [
      38,
      36
    ]
  ],
  [
    [
      368479,
      175985
    ],
    [
      -7,
      -29
    ],
    [
      -26,
      -41
    ],
    [
      -75,
      -77
    ],
    [
      -18,
      -7
    ],
    [
      -12,
      10
    ],
    [
      -4,
      23
    ],
    [
      22,
      75
    ],
    [
      39,
      67
    ],
    [
      28,
      24
    ],
    [
      28,
      2
    ],
    [
      25,
      -47
    ]
  ],
  [
    [
      368555,
      175845
    ],
    [
      1,
      -2
    ],
    [
      -98,
      -149
    ],
    [
      -80,
      -69
    ],
    [
      -7,
      1
    ],
    [
      -20,
      60
    ],
    [
      56,
      155
    ],
    [
      62,
      79
    ],
    [
      18,
      7
    ],
    [
      68,
      -82
    ]
  ],
  [
    [
      365830,
      171412
    ],
    [
      -5,
      82
    ],
    [
      -6,
      16
    ],
    [
      -15,
      14
    ],
    [
      -59,
      -3
    ],
    [
      -67,
      -10
    ],
    [
      -23,
      1
    ],
    [
      -20,
      29
    ],
    [
      -74,
      19
    ],
    [
      -7,
      7
    ],
    [
      -27,
      63
    ],
    [
      -18,
      23
    ],
    [
      -8,
      7
    ],
    [
      -57,
      17
    ],
    [
      -24,
      37
    ],
    [
      -51,
      42
    ],
    [
      -76,
      76
    ],
    [
      -58,
      41
    ],
    [
      -35,
      33
    ],
    [
      -6,
      15
    ],
    [
      -6,
      25
    ],
    [
      -4,
      43
    ],
    [
      -15,
      36
    ],
    [
      -5,
      26
    ],
    [
      25,
      81
    ],
    [
      6,
      63
    ],
    [
      -2,
      19
    ],
    [
      10,
      22
    ],
    [
      12,
      9
    ],
    [
      2,
      10
    ],
    [
      -6,
      37
    ],
    [
      -18,
      52
    ],
    [
      2,
      14
    ],
    [
      3,
      6
    ],
    [
      18,
      12
    ],
    [
      16,
      4
    ],
    [
      6,
      10
    ],
    [
      1,
      16
    ],
    [
      -6,
      18
    ],
    [
      -2,
      16
    ],
    [
      20,
      109
    ],
    [
      4,
      8
    ],
    [
      15,
      11
    ],
    [
      18,
      54
    ],
    [
      0,
      6
    ],
    [
      -11,
      21
    ],
    [
      -11,
      6
    ],
    [
      -8,
      -1
    ],
    [
      -4,
      44
    ],
    [
      -7,
      18
    ],
    [
      -1,
      4
    ],
    [
      -26,
      16
    ],
    [
      -2,
      2
    ],
    [
      -9,
      4
    ],
    [
      -8,
      3
    ],
    [
      -7,
      2
    ],
    [
      -29,
      9
    ],
    [
      -18,
      -4
    ],
    [
      -7,
      5
    ],
    [
      -14,
      42
    ],
    [
      1,
      7
    ],
    [
      7,
      5
    ],
    [
      3,
      7
    ],
    [
      -21,
      22
    ],
    [
      -45,
      19
    ],
    [
      -15,
      -12
    ],
    [
      -16,
      8
    ],
    [
      -8,
      7
    ],
    [
      -1,
      18
    ],
    [
      -8,
      25
    ],
    [
      -9,
      14
    ],
    [
      0,
      0
    ],
    [
      -48,
      37
    ],
    [
      -47,
      18
    ],
    [
      -5,
      5
    ],
    [
      -5,
      31
    ],
    [
      -14,
      39
    ],
    [
      -19,
      10
    ],
    [
      -31,
      9
    ],
    [
      -50,
      47
    ],
    [
      -7,
      14
    ],
    [
      18,
      24
    ],
    [
      13,
      14
    ],
    [
      5,
      19
    ],
    [
      -10,
      25
    ],
    [
      -11,
      3
    ],
    [
      -15,
      -3
    ],
    [
      -12,
      14
    ],
    [
      -14,
      11
    ],
    [
      4,
      13
    ],
    [
      -2,
      72
    ],
    [
      -17,
      0
    ],
    [
      -5,
      4
    ],
    [
      -39,
      32
    ],
    [
      -35,
      36
    ],
    [
      -4,
      10
    ],
    [
      -3,
      26
    ],
    [
      -3,
      17
    ],
    [
      -22,
      4
    ],
    [
      -74,
      -20
    ],
    [
      -8,
      -10
    ],
    [
      -18,
      10
    ],
    [
      -6,
      23
    ],
    [
      -14,
      24
    ],
    [
      -18,
      6
    ],
    [
      -16,
      14
    ],
    [
      -39,
      104
    ],
    [
      3,
      37
    ],
    [
      -11,
      32
    ],
    [
      -28,
      48
    ],
    [
      -13,
      17
    ],
    [
      0,
      5
    ],
    [
      -8,
      23
    ],
    [
      0,
      31
    ],
    [
      4,
      19
    ],
    [
      -13,
      20
    ],
    [
      0,
      15
    ],
    [
      1,
      14
    ],
    [
      24,
      10
    ],
    [
      1,
      22
    ],
    [
      -1,
      11
    ],
    [
      -15,
      17
    ],
    [
      -5,
      14
    ],
    [
      -3,
      61
    ],
    [
      2,
      18
    ],
    [
      20,
      37
    ],
    [
      25,
      19
    ],
    [
      18,
      8
    ],
    [
      18,
      19
    ],
    [
      14,
      27
    ],
    [
      -5,
      25
    ],
    [
      3,
      16
    ],
    [
      39,
      25
    ],
    [
      0,
      16
    ],
    [
      -3,
      19
    ],
    [
      -21,
      33
    ],
    [
      -6,
      21
    ],
    [
      4,
      24
    ],
    [
      11,
      23
    ],
    [
      18,
      72
    ],
    [
      -5,
      23
    ],
    [
      -15,
      26
    ],
    [
      -1,
      0
    ],
    [
      -7,
      -3
    ],
    [
      -25,
      7
    ],
    [
      -11,
      9
    ],
    [
      -6,
      17
    ],
    [
      32,
      25
    ],
    [
      3,
      14
    ],
    [
      -8,
      9
    ],
    [
      -3,
      17
    ],
    [
      14,
      37
    ],
    [
      25,
      48
    ],
    [
      14,
      11
    ],
    [
      6,
      64
    ],
    [
      16,
      13
    ],
    [
      -3,
      11
    ],
    [
      -7,
      10
    ],
    [
      14,
      45
    ],
    [
      0,
      28
    ],
    [
      -14,
      12
    ],
    [
      -2,
      6
    ],
    [
      1,
      27
    ],
    [
      -6,
      21
    ],
    [
      -22,
      20
    ],
    [
      -4,
      7
    ],
    [
      -1,
      11
    ],
    [
      1,
      16
    ],
    [
      5,
      15
    ],
    [
      32,
      7
    ],
    [
      4,
      -7
    ],
    [
      0,
      -1
    ],
    [
      23,
      75
    ],
    [
      -6,
      9
    ],
    [
      -7,
      3
    ],
    [
      -9,
      11
    ],
    [
      -4,
      41
    ],
    [
      -7,
      12
    ],
    [
      -24,
      11
    ],
    [
      -34,
      44
    ],
    [
      -8,
      -3
    ],
    [
      -13,
      13
    ],
    [
      -16,
      402
    ],
    [
      -32,
      558
    ],
    [
      0,
      7
    ],
    [
      -1,
      73
    ],
    [
      1,
      23
    ],
    [
      -15,
      279
    ],
    [
      -21,
      289
    ],
    [
      -5,
      344
    ],
    [
      -13,
      418
    ],
    [
      -1,
      148
    ],
    [
      -29,
      916
    ],
    [
      -15,
      381
    ],
    [
      0,
      2
    ],
    [
      -37,
      1118
    ],
    [
      -1,
      95
    ],
    [
      0,
      3
    ],
    [
      -13,
      316
    ],
    [
      -7,
      285
    ],
    [
      -14,
      275
    ],
    [
      -27,
      702
    ],
    [
      -12,
      193
    ],
    [
      -18,
      426
    ],
    [
      -23,
      715
    ],
    [
      -29,
      595
    ],
    [
      -4,
      140
    ],
    [
      -37,
      657
    ],
    [
      -41,
      630
    ],
    [
      -26,
      508
    ],
    [
      -6,
      36
    ],
    [
      -53,
      1021
    ],
    [
      -17,
      271
    ],
    [
      -22,
      485
    ],
    [
      -38,
      428
    ],
    [
      31,
      7
    ],
    [
      24,
      11
    ],
    [
      38,
      27
    ],
    [
      36,
      17
    ],
    [
      86,
      -5
    ],
    [
      21,
      -8
    ],
    [
      40,
      5
    ],
    [
      45,
      13
    ],
    [
      38,
      17
    ],
    [
      27,
      17
    ],
    [
      33,
      65
    ],
    [
      1,
      5
    ],
    [
      -14,
      22
    ],
    [
      -31,
      23
    ],
    [
      -9,
      63
    ],
    [
      1,
      11
    ],
    [
      10,
      18
    ],
    [
      30,
      -13
    ],
    [
      16,
      -13
    ],
    [
      46,
      -40
    ],
    [
      13,
      -14
    ],
    [
      5,
      -12
    ],
    [
      19,
      -18
    ],
    [
      94,
      1
    ],
    [
      84,
      16
    ],
    [
      7,
      -22
    ],
    [
      28,
      -53
    ],
    [
      24,
      -30
    ],
    [
      48,
      -13
    ],
    [
      43,
      -34
    ],
    [
      18,
      -14
    ],
    [
      30,
      -116
    ],
    [
      -9,
      -25
    ],
    [
      -25,
      -42
    ],
    [
      -6,
      -15
    ],
    [
      -9,
      -41
    ],
    [
      1,
      -4
    ],
    [
      32,
      -30
    ],
    [
      37,
      -40
    ],
    [
      48,
      -79
    ],
    [
      10,
      -40
    ],
    [
      -10,
      -66
    ],
    [
      9,
      -15
    ],
    [
      20,
      -21
    ],
    [
      40,
      -32
    ],
    [
      34,
      -12
    ],
    [
      110,
      -30
    ],
    [
      64,
      40
    ],
    [
      29,
      22
    ],
    [
      -12,
      10
    ],
    [
      -37,
      42
    ],
    [
      -5,
      86
    ],
    [
      4,
      51
    ],
    [
      27,
      17
    ],
    [
      11,
      11
    ],
    [
      11,
      15
    ],
    [
      38,
      76
    ],
    [
      9,
      55
    ],
    [
      1,
      25
    ],
    [
      64,
      54
    ],
    [
      4,
      3
    ],
    [
      20,
      28
    ],
    [
      19,
      71
    ],
    [
      8,
      79
    ],
    [
      -6,
      25
    ],
    [
      -10,
      14
    ],
    [
      -14,
      2
    ],
    [
      -18,
      19
    ],
    [
      -8,
      15
    ],
    [
      -5,
      18
    ],
    [
      -4,
      37
    ],
    [
      2,
      10
    ],
    [
      26,
      111
    ],
    [
      29,
      44
    ],
    [
      6,
      6
    ],
    [
      19,
      6
    ],
    [
      6,
      5
    ],
    [
      -1,
      12
    ],
    [
      -17,
      74
    ],
    [
      -8,
      11
    ],
    [
      -24,
      38
    ],
    [
      -50,
      53
    ],
    [
      -10,
      4
    ],
    [
      -5,
      16
    ],
    [
      -5,
      38
    ],
    [
      2,
      14
    ],
    [
      66,
      81
    ],
    [
      54,
      49
    ],
    [
      18,
      45
    ],
    [
      4,
      19
    ],
    [
      15,
      10
    ],
    [
      69,
      22
    ],
    [
      133,
      -20
    ],
    [
      8,
      -4
    ],
    [
      51,
      -50
    ],
    [
      -4,
      -28
    ],
    [
      5,
      -39
    ],
    [
      71,
      -92
    ],
    [
      37,
      -30
    ],
    [
      53,
      -34
    ],
    [
      102,
      14
    ],
    [
      26,
      5
    ],
    [
      14,
      13
    ],
    [
      5,
      1
    ],
    [
      29,
      -6
    ],
    [
      86,
      -61
    ],
    [
      2,
      -58
    ],
    [
      4,
      -2
    ],
    [
      45,
      -5
    ],
    [
      27,
      11
    ],
    [
      58,
      36
    ],
    [
      17,
      241
    ],
    [
      -22,
      84
    ],
    [
      -73,
      110
    ],
    [
      -67,
      27
    ],
    [
      -61,
      43
    ],
    [
      -32,
      44
    ],
    [
      -55,
      95
    ],
    [
      -65,
      61
    ],
    [
      -17,
      9
    ],
    [
      -47,
      51
    ],
    [
      -31,
      146
    ],
    [
      -1,
      20
    ],
    [
      2,
      18
    ],
    [
      7,
      16
    ],
    [
      25,
      26
    ],
    [
      73,
      81
    ],
    [
      9,
      14
    ],
    [
      67,
      129
    ],
    [
      -3,
      110
    ],
    [
      12,
      10
    ],
    [
      37,
      39
    ],
    [
      99,
      119
    ],
    [
      49,
      82
    ],
    [
      -4,
      9
    ],
    [
      29,
      57
    ],
    [
      48,
      23
    ],
    [
      93,
      45
    ],
    [
      56,
      74
    ],
    [
      25,
      6
    ],
    [
      47,
      19
    ],
    [
      5,
      5
    ],
    [
      135,
      181
    ],
    [
      14,
      40
    ],
    [
      -8,
      10
    ],
    [
      -1,
      5
    ],
    [
      28,
      30
    ],
    [
      29,
      8
    ],
    [
      58,
      -8
    ],
    [
      80,
      -1
    ],
    [
      32,
      25
    ],
    [
      0,
      13
    ],
    [
      3,
      4
    ],
    [
      45,
      52
    ],
    [
      69,
      56
    ],
    [
      137,
      107
    ],
    [
      94,
      21
    ],
    [
      24,
      -3
    ],
    [
      41,
      3
    ],
    [
      41,
      20
    ],
    [
      155,
      93
    ],
    [
      52,
      64
    ],
    [
      35,
      46
    ],
    [
      -26,
      109
    ],
    [
      -39,
      48
    ],
    [
      -28,
      12
    ],
    [
      -25,
      29
    ],
    [
      -47,
      179
    ],
    [
      -10,
      56
    ],
    [
      0,
      6
    ],
    [
      4,
      5
    ],
    [
      46,
      17
    ],
    [
      8,
      -1
    ],
    [
      11,
      -9
    ],
    [
      12,
      -2
    ],
    [
      11,
      2
    ],
    [
      19,
      19
    ],
    [
      -2,
      28
    ],
    [
      -9,
      11
    ],
    [
      8,
      32
    ],
    [
      44,
      77
    ],
    [
      37,
      41
    ],
    [
      70,
      77
    ],
    [
      126,
      126
    ],
    [
      65,
      12
    ],
    [
      65,
      19
    ],
    [
      56,
      24
    ],
    [
      112,
      90
    ],
    [
      110,
      117
    ],
    [
      19,
      21
    ],
    [
      27,
      90
    ],
    [
      -1,
      26
    ],
    [
      -20,
      85
    ],
    [
      -16,
      16
    ],
    [
      -9,
      -4
    ],
    [
      -3,
      3
    ],
    [
      0,
      27
    ],
    [
      6,
      10
    ],
    [
      49,
      58
    ],
    [
      60,
      44
    ],
    [
      4,
      13
    ],
    [
      -1,
      21
    ],
    [
      -65,
      84
    ],
    [
      -64,
      55
    ],
    [
      -45,
      12
    ],
    [
      -34,
      7
    ],
    [
      -45,
      -15
    ],
    [
      -119,
      -10
    ],
    [
      -17,
      9
    ],
    [
      -3,
      3
    ],
    [
      0,
      3
    ],
    [
      25,
      56
    ],
    [
      12,
      64
    ],
    [
      11,
      17
    ],
    [
      32,
      21
    ],
    [
      27,
      4
    ],
    [
      42,
      43
    ],
    [
      16,
      26
    ],
    [
      -2,
      2
    ],
    [
      -40,
      13
    ],
    [
      -52,
      12
    ],
    [
      -3,
      3
    ],
    [
      -72,
      144
    ],
    [
      0,
      3
    ],
    [
      123,
      164
    ],
    [
      71,
      76
    ],
    [
      7,
      36
    ],
    [
      1,
      19
    ],
    [
      -4,
      7
    ],
    [
      -27,
      16
    ],
    [
      -16,
      -1
    ],
    [
      -28,
      -14
    ],
    [
      -71,
      4
    ],
    [
      -12,
      9
    ],
    [
      -8,
      15
    ],
    [
      107,
      219
    ],
    [
      26,
      32
    ],
    [
      61,
      26
    ],
    [
      33,
      -9
    ],
    [
      63,
      -11
    ],
    [
      8,
      8
    ],
    [
      0,
      41
    ],
    [
      -14,
      16
    ],
    [
      0,
      13
    ],
    [
      20,
      57
    ],
    [
      39,
      80
    ],
    [
      21,
      102
    ],
    [
      8,
      34
    ],
    [
      -12,
      20
    ],
    [
      -133,
      141
    ],
    [
      -25,
      20
    ],
    [
      -13,
      4
    ],
    [
      -22,
      18
    ],
    [
      -66,
      80
    ],
    [
      -10,
      42
    ],
    [
      37,
      39
    ],
    [
      69,
      95
    ],
    [
      59,
      158
    ],
    [
      10,
      31
    ],
    [
      16,
      80
    ],
    [
      5,
      57
    ],
    [
      8,
      35
    ],
    [
      23,
      59
    ],
    [
      81,
      127
    ],
    [
      93,
      80
    ],
    [
      45,
      34
    ],
    [
      13,
      106
    ],
    [
      -6,
      16
    ],
    [
      -14,
      20
    ],
    [
      -9,
      71
    ],
    [
      7,
      18
    ],
    [
      82,
      123
    ],
    [
      14,
      14
    ],
    [
      72,
      62
    ],
    [
      14,
      6
    ],
    [
      54,
      13
    ],
    [
      65,
      -16
    ],
    [
      38,
      28
    ],
    [
      40,
      46
    ],
    [
      19,
      3
    ],
    [
      11,
      19
    ],
    [
      0,
      50
    ],
    [
      11,
      19
    ],
    [
      35,
      21
    ],
    [
      41,
      14
    ],
    [
      53,
      91
    ],
    [
      -2,
      6
    ],
    [
      1,
      42
    ],
    [
      21,
      32
    ],
    [
      36,
      9
    ],
    [
      46,
      -1
    ],
    [
      21,
      -8
    ],
    [
      98,
      41
    ],
    [
      3,
      4
    ],
    [
      0,
      8
    ],
    [
      153,
      1032
    ],
    [
      35,
      257
    ],
    [
      116,
      757
    ],
    [
      14,
      24
    ],
    [
      226,
      323
    ],
    [
      36,
      55
    ],
    [
      351,
      499
    ],
    [
      286,
      419
    ],
    [
      1291,
      1835
    ],
    [
      651,
      918
    ],
    [
      1099,
      1540
    ],
    [
      22,
      -19
    ],
    [
      83,
      -36
    ],
    [
      112,
      25
    ],
    [
      18,
      7
    ],
    [
      72,
      -41
    ],
    [
      43,
      0
    ],
    [
      49,
      -16
    ],
    [
      123,
      -51
    ],
    [
      72,
      -45
    ],
    [
      50,
      -33
    ],
    [
      6,
      -7
    ],
    [
      3,
      -24
    ],
    [
      73,
      -23
    ],
    [
      9,
      1
    ],
    [
      72,
      45
    ],
    [
      28,
      21
    ],
    [
      29,
      -6
    ],
    [
      59,
      -34
    ],
    [
      7,
      -7
    ],
    [
      17,
      -33
    ],
    [
      13,
      -104
    ],
    [
      -12,
      -29
    ],
    [
      -17,
      -21
    ],
    [
      2,
      -14
    ],
    [
      7,
      -9
    ],
    [
      -5,
      -5
    ],
    [
      -8,
      -1
    ],
    [
      -11,
      -39
    ],
    [
      6,
      -19
    ],
    [
      7,
      -11
    ],
    [
      15,
      -11
    ],
    [
      3,
      -9
    ],
    [
      -24,
      -10
    ],
    [
      -12,
      1
    ],
    [
      -39,
      -44
    ],
    [
      4,
      -369
    ],
    [
      -7,
      -86
    ],
    [
      28,
      -69
    ],
    [
      -11,
      -50
    ],
    [
      -7,
      -10
    ],
    [
      -1,
      -29
    ],
    [
      3,
      -10
    ],
    [
      8,
      -4
    ],
    [
      3,
      -7
    ],
    [
      4,
      -50
    ],
    [
      -6,
      -30
    ],
    [
      4,
      -28
    ],
    [
      9,
      -19
    ],
    [
      4,
      -53
    ],
    [
      -5,
      -29
    ],
    [
      -6,
      -7
    ],
    [
      -5,
      -17
    ],
    [
      -2,
      -18
    ],
    [
      2,
      -5
    ],
    [
      52,
      -85
    ],
    [
      34,
      -30
    ],
    [
      17,
      -3
    ],
    [
      32,
      -16
    ],
    [
      101,
      -61
    ],
    [
      59,
      -41
    ],
    [
      59,
      -34
    ],
    [
      31,
      -24
    ],
    [
      15,
      -17
    ],
    [
      29,
      -12
    ],
    [
      27,
      -52
    ],
    [
      14,
      -1
    ],
    [
      26,
      9
    ],
    [
      4,
      -4
    ],
    [
      4,
      -24
    ],
    [
      7,
      -3
    ],
    [
      8,
      3
    ],
    [
      33,
      26
    ],
    [
      34,
      -31
    ],
    [
      30,
      -36
    ],
    [
      10,
      -2
    ],
    [
      8,
      6
    ],
    [
      9,
      0
    ],
    [
      22,
      -20
    ],
    [
      3,
      -39
    ],
    [
      15,
      -3
    ],
    [
      36,
      -23
    ],
    [
      23,
      -39
    ],
    [
      15,
      -15
    ],
    [
      7,
      -3
    ],
    [
      11,
      21
    ],
    [
      16,
      11
    ],
    [
      13,
      1
    ],
    [
      15,
      -5
    ],
    [
      40,
      8
    ],
    [
      23,
      24
    ],
    [
      18,
      13
    ],
    [
      17,
      6
    ],
    [
      42,
      2
    ],
    [
      27,
      10
    ],
    [
      21,
      19
    ],
    [
      26,
      30
    ],
    [
      89,
      54
    ],
    [
      97,
      77
    ],
    [
      44,
      5
    ],
    [
      117,
      41
    ],
    [
      56,
      -2
    ],
    [
      27,
      7
    ],
    [
      63,
      32
    ],
    [
      35,
      32
    ],
    [
      50,
      35
    ],
    [
      90,
      37
    ],
    [
      22,
      1
    ],
    [
      14,
      -5
    ],
    [
      12,
      -12
    ],
    [
      16,
      -5
    ],
    [
      61,
      37
    ],
    [
      16,
      7
    ],
    [
      14,
      2
    ],
    [
      60,
      -12
    ],
    [
      60,
      -43
    ],
    [
      11,
      -3
    ],
    [
      18,
      6
    ],
    [
      23,
      17
    ],
    [
      31,
      1
    ],
    [
      46,
      13
    ],
    [
      72,
      7
    ],
    [
      26,
      6
    ],
    [
      61,
      32
    ],
    [
      16,
      14
    ],
    [
      48,
      61
    ],
    [
      7,
      11
    ],
    [
      0,
      14
    ],
    [
      -5,
      15
    ],
    [
      -19,
      34
    ],
    [
      0,
      15
    ],
    [
      9,
      14
    ],
    [
      23,
      22
    ],
    [
      9,
      39
    ],
    [
      10,
      12
    ],
    [
      29,
      28
    ],
    [
      23,
      15
    ],
    [
      38,
      -4
    ],
    [
      55,
      -25
    ],
    [
      33,
      -10
    ],
    [
      11,
      0
    ],
    [
      26,
      5
    ],
    [
      36,
      16
    ],
    [
      54,
      55
    ],
    [
      29,
      16
    ],
    [
      28,
      9
    ],
    [
      54,
      4
    ],
    [
      18,
      -2
    ],
    [
      37,
      -14
    ],
    [
      29,
      -2
    ],
    [
      22,
      4
    ],
    [
      40,
      16
    ],
    [
      21,
      5
    ],
    [
      23,
      -5
    ],
    [
      21,
      -15
    ],
    [
      12,
      -19
    ],
    [
      19,
      -45
    ],
    [
      10,
      -11
    ],
    [
      48,
      -15
    ],
    [
      29,
      7
    ],
    [
      54,
      -12
    ],
    [
      19,
      1
    ],
    [
      19,
      9
    ],
    [
      48,
      34
    ],
    [
      14,
      5
    ],
    [
      119,
      -14
    ],
    [
      34,
      0
    ],
    [
      23,
      7
    ],
    [
      9,
      7
    ],
    [
      5,
      11
    ],
    [
      2,
      16
    ],
    [
      -4,
      15
    ],
    [
      -3,
      10
    ],
    [
      -9,
      13
    ],
    [
      -28,
      30
    ],
    [
      -4,
      11
    ],
    [
      1,
      16
    ],
    [
      15,
      20
    ],
    [
      3,
      9
    ],
    [
      -17,
      97
    ],
    [
      1,
      34
    ],
    [
      21,
      98
    ],
    [
      8,
      21
    ],
    [
      21,
      32
    ],
    [
      22,
      26
    ],
    [
      23,
      20
    ],
    [
      22,
      13
    ],
    [
      32,
      11
    ],
    [
      97,
      20
    ],
    [
      33,
      3
    ],
    [
      34,
      -2
    ],
    [
      68,
      -27
    ],
    [
      31,
      -5
    ],
    [
      16,
      4
    ],
    [
      41,
      25
    ],
    [
      17,
      5
    ],
    [
      27,
      2
    ],
    [
      30,
      -14
    ],
    [
      29,
      -27
    ],
    [
      15,
      -8
    ],
    [
      23,
      -9
    ],
    [
      88,
      0
    ],
    [
      40,
      12
    ],
    [
      28,
      6
    ],
    [
      36,
      -14
    ],
    [
      15,
      -17
    ],
    [
      3,
      -7
    ],
    [
      0,
      -23
    ],
    [
      6,
      -16
    ],
    [
      27,
      -27
    ],
    [
      16,
      -9
    ],
    [
      17,
      -4
    ],
    [
      36,
      5
    ],
    [
      9,
      -2
    ],
    [
      135,
      -75
    ],
    [
      75,
      -11
    ],
    [
      32,
      -17
    ],
    [
      8,
      -9
    ],
    [
      6,
      -20
    ],
    [
      -6,
      -55
    ],
    [
      2,
      -17
    ],
    [
      4,
      -13
    ],
    [
      36,
      -43
    ],
    [
      42,
      -59
    ],
    [
      46,
      -14
    ],
    [
      14,
      -14
    ],
    [
      20,
      -29
    ],
    [
      9,
      -7
    ],
    [
      140,
      -78
    ],
    [
      49,
      -35
    ],
    [
      14,
      -15
    ],
    [
      13,
      -24
    ],
    [
      8,
      -33
    ],
    [
      10,
      -17
    ],
    [
      62,
      -25
    ],
    [
      126,
      -79
    ],
    [
      17,
      -15
    ],
    [
      73,
      -41
    ],
    [
      19,
      -26
    ],
    [
      50,
      -59
    ],
    [
      41,
      -63
    ],
    [
      33,
      -43
    ],
    [
      8,
      -7
    ],
    [
      21,
      -13
    ],
    [
      75,
      -16
    ],
    [
      12,
      -6
    ],
    [
      29,
      -25
    ],
    [
      40,
      -24
    ],
    [
      17,
      -25
    ],
    [
      5,
      -28
    ],
    [
      4,
      -53
    ],
    [
      6,
      -19
    ],
    [
      24,
      -41
    ],
    [
      8,
      -6
    ],
    [
      20,
      -35
    ],
    [
      17,
      -48
    ],
    [
      52,
      -78
    ],
    [
      31,
      -22
    ],
    [
      48,
      -23
    ],
    [
      35,
      -77
    ],
    [
      12,
      -18
    ],
    [
      40,
      -38
    ],
    [
      6,
      -10
    ],
    [
      11,
      -29
    ],
    [
      4,
      -44
    ],
    [
      0,
      -39
    ],
    [
      3,
      -13
    ],
    [
      15,
      -32
    ],
    [
      9,
      -10
    ],
    [
      13,
      -15
    ],
    [
      17,
      -11
    ],
    [
      39,
      -11
    ],
    [
      30,
      -12
    ],
    [
      80,
      -42
    ],
    [
      62,
      -48
    ],
    [
      23,
      -10
    ],
    [
      46,
      -9
    ],
    [
      13,
      -6
    ],
    [
      23,
      -17
    ],
    [
      29,
      -38
    ],
    [
      31,
      -20
    ],
    [
      52,
      -26
    ],
    [
      20,
      -14
    ],
    [
      4,
      -16
    ],
    [
      1,
      -23
    ],
    [
      -1,
      -162
    ],
    [
      4,
      -108
    ],
    [
      -3,
      -76
    ],
    [
      1,
      -87
    ],
    [
      -2,
      -26
    ],
    [
      3,
      -874
    ],
    [
      -3,
      -633
    ],
    [
      2,
      -215
    ],
    [
      0,
      -54
    ],
    [
      5,
      -1148
    ],
    [
      20,
      -1206
    ],
    [
      12,
      -1162
    ],
    [
      9,
      -1769
    ],
    [
      -1,
      -249
    ],
    [
      -4,
      -298
    ],
    [
      1,
      -153
    ],
    [
      6,
      -36
    ],
    [
      12,
      -29
    ],
    [
      4,
      -1
    ],
    [
      10,
      7
    ],
    [
      7,
      -2
    ],
    [
      82,
      -65
    ],
    [
      36,
      -59
    ],
    [
      -7,
      -21
    ],
    [
      -20,
      -24
    ],
    [
      -20,
      -13
    ],
    [
      -21,
      3
    ],
    [
      -6,
      -4
    ],
    [
      -19,
      -58
    ],
    [
      4,
      -25
    ],
    [
      -5,
      -4
    ],
    [
      -53,
      -21
    ],
    [
      -21,
      0
    ],
    [
      -11,
      4
    ],
    [
      -92,
      -88
    ],
    [
      -3,
      -6
    ],
    [
      -4,
      -65
    ],
    [
      6,
      -34
    ],
    [
      36,
      -69
    ],
    [
      35,
      -60
    ],
    [
      34,
      -39
    ],
    [
      26,
      -21
    ],
    [
      30,
      -17
    ],
    [
      15,
      -15
    ],
    [
      21,
      -39
    ],
    [
      6,
      -29
    ],
    [
      6,
      -11
    ],
    [
      39,
      -36
    ],
    [
      -44,
      -24
    ],
    [
      -9,
      -11
    ],
    [
      -7,
      -2
    ],
    [
      -30,
      6
    ],
    [
      -25,
      -1
    ],
    [
      -13,
      -8
    ],
    [
      -2,
      -4
    ],
    [
      1,
      -10
    ],
    [
      -111,
      -93
    ],
    [
      -23,
      -65
    ],
    [
      15,
      -96
    ],
    [
      -9,
      -87
    ],
    [
      -19,
      -17
    ],
    [
      14,
      -89
    ],
    [
      68,
      -35
    ],
    [
      57,
      -143
    ],
    [
      -143,
      -14
    ],
    [
      34,
      -243
    ],
    [
      -75,
      -18
    ],
    [
      74,
      -116
    ],
    [
      178,
      -2
    ],
    [
      74,
      -72
    ],
    [
      122,
      -34
    ],
    [
      51,
      -5
    ],
    [
      4,
      2
    ],
    [
      8,
      18
    ],
    [
      0,
      20
    ],
    [
      -29,
      18
    ],
    [
      -37,
      57
    ],
    [
      -14,
      45
    ],
    [
      -5,
      34
    ],
    [
      24,
      1
    ],
    [
      12,
      -4
    ],
    [
      88,
      -67
    ],
    [
      22,
      -42
    ],
    [
      42,
      -102
    ],
    [
      27,
      -69
    ],
    [
      88,
      -143
    ],
    [
      46,
      -47
    ],
    [
      106,
      -80
    ],
    [
      28,
      19
    ],
    [
      -20,
      52
    ],
    [
      23,
      11
    ],
    [
      40,
      -25
    ],
    [
      131,
      -109
    ],
    [
      117,
      -30
    ],
    [
      113,
      -55
    ],
    [
      22,
      1
    ],
    [
      3,
      16
    ],
    [
      53,
      6
    ],
    [
      57,
      -19
    ],
    [
      84,
      -56
    ],
    [
      98,
      -6
    ],
    [
      43,
      33
    ],
    [
      13,
      23
    ],
    [
      -3,
      17
    ],
    [
      -11,
      14
    ],
    [
      7,
      17
    ],
    [
      67,
      22
    ],
    [
      109,
      3
    ],
    [
      29,
      -13
    ],
    [
      102,
      -140
    ],
    [
      22,
      -34
    ],
    [
      10,
      -51
    ],
    [
      13,
      -163
    ],
    [
      -22,
      -68
    ],
    [
      -16,
      -1
    ],
    [
      -3,
      4
    ],
    [
      -8,
      2
    ],
    [
      -8,
      -3
    ],
    [
      -12,
      -37
    ],
    [
      -4,
      -38
    ],
    [
      1,
      -15
    ],
    [
      15,
      -64
    ],
    [
      59,
      -66
    ],
    [
      22,
      -55
    ],
    [
      -1,
      -10
    ],
    [
      -5,
      -2
    ],
    [
      -18,
      23
    ],
    [
      -8,
      6
    ],
    [
      -9,
      0
    ],
    [
      -7,
      -22
    ],
    [
      -10,
      -11
    ],
    [
      -10,
      2
    ],
    [
      -104,
      24
    ],
    [
      -66,
      28
    ],
    [
      -39,
      -25
    ],
    [
      -2,
      -8
    ],
    [
      1,
      -31
    ],
    [
      -32,
      -20
    ],
    [
      -57,
      -26
    ],
    [
      -58,
      -20
    ],
    [
      -19,
      -10
    ],
    [
      -4,
      -8
    ],
    [
      4,
      -24
    ],
    [
      17,
      -53
    ],
    [
      28,
      -37
    ],
    [
      38,
      -37
    ],
    [
      23,
      -53
    ],
    [
      2,
      -18
    ],
    [
      -15,
      -17
    ],
    [
      3,
      -30
    ],
    [
      36,
      -149
    ],
    [
      20,
      -46
    ],
    [
      11,
      -14
    ],
    [
      65,
      -55
    ],
    [
      53,
      -60
    ],
    [
      93,
      -109
    ],
    [
      58,
      -115
    ],
    [
      -2,
      -9
    ],
    [
      -13,
      -15
    ],
    [
      -11,
      -4
    ],
    [
      -18,
      1
    ],
    [
      -15,
      -13
    ],
    [
      -5,
      -8
    ],
    [
      -16,
      -39
    ],
    [
      4,
      -30
    ],
    [
      29,
      -43
    ],
    [
      -14,
      -50
    ],
    [
      -23,
      -63
    ],
    [
      -36,
      -41
    ],
    [
      -58,
      -46
    ],
    [
      -15,
      -13
    ],
    [
      -2,
      -6
    ],
    [
      2,
      -13
    ],
    [
      21,
      -31
    ],
    [
      0,
      -21
    ],
    [
      -5,
      -19
    ],
    [
      -37,
      -102
    ],
    [
      -27,
      -23
    ],
    [
      -2,
      -22
    ],
    [
      -2,
      -3
    ],
    [
      -67,
      -30
    ],
    [
      -14,
      12
    ],
    [
      -10,
      4
    ],
    [
      -7,
      -4
    ],
    [
      -4,
      -5
    ],
    [
      -15,
      -59
    ],
    [
      0,
      -10
    ],
    [
      132,
      -273
    ],
    [
      8,
      -10
    ],
    [
      9,
      -6
    ],
    [
      35,
      -6
    ],
    [
      69,
      -103
    ],
    [
      15,
      -32
    ],
    [
      29,
      -93
    ],
    [
      12,
      -81
    ],
    [
      1,
      -43
    ],
    [
      111,
      -101
    ],
    [
      13,
      -92
    ],
    [
      -4,
      -15
    ],
    [
      0,
      -15
    ],
    [
      4,
      -21
    ],
    [
      72,
      -43
    ],
    [
      35,
      -13
    ],
    [
      136,
      -151
    ],
    [
      19,
      -17
    ],
    [
      40,
      -22
    ],
    [
      24,
      -7
    ],
    [
      5,
      1
    ],
    [
      52,
      44
    ],
    [
      58,
      57
    ],
    [
      66,
      40
    ],
    [
      37,
      14
    ],
    [
      11,
      9
    ],
    [
      6,
      13
    ],
    [
      3,
      28
    ],
    [
      -13,
      13
    ],
    [
      -25,
      13
    ],
    [
      -4,
      31
    ],
    [
      17,
      56
    ],
    [
      17,
      11
    ],
    [
      23,
      8
    ],
    [
      -1,
      22
    ],
    [
      -9,
      12
    ],
    [
      -2,
      13
    ],
    [
      16,
      71
    ],
    [
      5,
      8
    ],
    [
      31,
      25
    ],
    [
      64,
      -7
    ],
    [
      49,
      -25
    ],
    [
      19,
      -19
    ],
    [
      57,
      -32
    ],
    [
      14,
      -18
    ],
    [
      9,
      -45
    ],
    [
      8,
      -8
    ],
    [
      39,
      -18
    ],
    [
      14,
      -23
    ],
    [
      15,
      -14
    ],
    [
      22,
      1
    ],
    [
      98,
      56
    ],
    [
      65,
      -40
    ],
    [
      119,
      -10
    ],
    [
      34,
      -12
    ],
    [
      10,
      -5
    ],
    [
      7,
      -9
    ],
    [
      63,
      -105
    ],
    [
      86,
      -107
    ],
    [
      84,
      -146
    ],
    [
      91,
      -270
    ],
    [
      20,
      -50
    ],
    [
      -77,
      -21
    ],
    [
      -61,
      -67
    ],
    [
      92,
      -86
    ],
    [
      91,
      -113
    ],
    [
      36,
      -76
    ],
    [
      11,
      -80
    ],
    [
      23,
      -54
    ],
    [
      70,
      -105
    ],
    [
      84,
      -303
    ],
    [
      24,
      -40
    ],
    [
      161,
      -155
    ],
    [
      57,
      -8
    ],
    [
      33,
      -38
    ],
    [
      5,
      -69
    ],
    [
      -12,
      -44
    ],
    [
      -17,
      -5
    ],
    [
      -6,
      -103
    ],
    [
      48,
      -145
    ],
    [
      14,
      -43
    ],
    [
      -75,
      -57
    ],
    [
      -19,
      -33
    ],
    [
      53,
      -176
    ],
    [
      57,
      -38
    ],
    [
      44,
      26
    ],
    [
      74,
      8
    ],
    [
      11,
      -20
    ],
    [
      -3,
      -21
    ],
    [
      -54,
      -53
    ],
    [
      -46,
      -12
    ],
    [
      -32,
      19
    ],
    [
      -18,
      -7
    ],
    [
      -49,
      -63
    ],
    [
      -30,
      -56
    ],
    [
      -127,
      -145
    ],
    [
      -31,
      -23
    ],
    [
      -88,
      -23
    ],
    [
      -61,
      47
    ],
    [
      -36,
      -14
    ],
    [
      -5,
      -83
    ],
    [
      -52,
      -120
    ],
    [
      -52,
      -15
    ],
    [
      -46,
      20
    ],
    [
      -33,
      -10
    ],
    [
      -25,
      -175
    ],
    [
      -128,
      -162
    ],
    [
      -53,
      -11
    ],
    [
      -45,
      -72
    ],
    [
      -36,
      -107
    ],
    [
      3,
      -10
    ],
    [
      -79,
      -44
    ],
    [
      -61,
      11
    ],
    [
      -24,
      -7
    ],
    [
      -28,
      -53
    ],
    [
      3,
      -57
    ],
    [
      10,
      -16
    ],
    [
      -121,
      -46
    ],
    [
      -108,
      -15
    ],
    [
      -67,
      33
    ],
    [
      -20,
      -7
    ],
    [
      -117,
      -106
    ],
    [
      -15,
      -61
    ],
    [
      20,
      -52
    ],
    [
      -31,
      -30
    ],
    [
      -73,
      -56
    ],
    [
      -46,
      -14
    ],
    [
      -64,
      7
    ],
    [
      -41,
      82
    ],
    [
      2,
      22
    ],
    [
      60,
      6
    ],
    [
      88,
      155
    ],
    [
      6,
      103
    ],
    [
      -31,
      44
    ],
    [
      -57,
      36
    ],
    [
      -85,
      -19
    ],
    [
      -7,
      76
    ],
    [
      28,
      50
    ],
    [
      66,
      -62
    ],
    [
      7,
      190
    ],
    [
      40,
      40
    ],
    [
      4,
      66
    ],
    [
      -47,
      13
    ],
    [
      -201,
      -59
    ],
    [
      -42,
      -3
    ],
    [
      -106,
      -126
    ],
    [
      -23,
      -91
    ],
    [
      11,
      -29
    ],
    [
      26,
      -19
    ],
    [
      34,
      -77
    ],
    [
      21,
      -152
    ],
    [
      -26,
      -52
    ],
    [
      -48,
      -36
    ],
    [
      -46,
      53
    ],
    [
      -11,
      -3
    ],
    [
      -36,
      -100
    ],
    [
      -16,
      -76
    ],
    [
      -34,
      -62
    ],
    [
      -32,
      20
    ],
    [
      -36,
      48
    ],
    [
      -9,
      33
    ],
    [
      -40,
      9
    ],
    [
      -78,
      -25
    ],
    [
      -19,
      -18
    ],
    [
      -6,
      -22
    ],
    [
      -47,
      -17
    ],
    [
      -177,
      147
    ],
    [
      -7,
      80
    ],
    [
      -62,
      58
    ],
    [
      -87,
      -28
    ],
    [
      -6,
      -47
    ],
    [
      -35,
      -34
    ],
    [
      -16,
      -3
    ],
    [
      -32,
      35
    ],
    [
      -16,
      2
    ],
    [
      -40,
      -34
    ],
    [
      -6,
      -17
    ],
    [
      -116,
      -433
    ],
    [
      26,
      -29
    ],
    [
      39,
      -127
    ],
    [
      -30,
      -61
    ],
    [
      -411,
      -42
    ],
    [
      -24,
      3
    ],
    [
      -19,
      74
    ],
    [
      -20,
      12
    ],
    [
      -128,
      -3
    ],
    [
      -54,
      -24
    ],
    [
      -32,
      -43
    ],
    [
      19,
      -90
    ],
    [
      -24,
      -80
    ],
    [
      -54,
      -70
    ],
    [
      -45,
      24
    ],
    [
      -57,
      -17
    ],
    [
      -48,
      9
    ],
    [
      3,
      64
    ],
    [
      14,
      20
    ],
    [
      -15,
      129
    ],
    [
      -55,
      126
    ],
    [
      -26,
      22
    ],
    [
      -43,
      12
    ],
    [
      -34,
      -6
    ],
    [
      -28,
      -28
    ],
    [
      -13,
      -71
    ],
    [
      2,
      -98
    ],
    [
      -81,
      0
    ],
    [
      -27,
      24
    ],
    [
      -15,
      43
    ],
    [
      0,
      53
    ],
    [
      -17,
      52
    ],
    [
      -107,
      99
    ],
    [
      -52,
      9
    ],
    [
      -23,
      -18
    ],
    [
      -7,
      -34
    ],
    [
      13,
      -65
    ],
    [
      -69,
      -139
    ],
    [
      15,
      -194
    ],
    [
      13,
      -37
    ],
    [
      -2,
      -55
    ],
    [
      -20,
      -46
    ],
    [
      -28,
      -8
    ],
    [
      -29,
      -42
    ],
    [
      -11,
      -48
    ],
    [
      0,
      -62
    ],
    [
      88,
      -207
    ],
    [
      0,
      -32
    ],
    [
      -18,
      -36
    ],
    [
      -70,
      38
    ],
    [
      -49,
      81
    ],
    [
      -45,
      -19
    ],
    [
      0,
      -49
    ],
    [
      -25,
      -123
    ],
    [
      -38,
      -114
    ],
    [
      -62,
      184
    ],
    [
      -9,
      80
    ],
    [
      -40,
      22
    ],
    [
      -26,
      -9
    ],
    [
      -22,
      -22
    ],
    [
      15,
      -55
    ],
    [
      -19,
      -70
    ],
    [
      -26,
      -5
    ],
    [
      -56,
      35
    ],
    [
      -43,
      3
    ],
    [
      -30,
      -28
    ],
    [
      0,
      -99
    ],
    [
      -88,
      -88
    ],
    [
      -35,
      -1
    ],
    [
      -59,
      96
    ],
    [
      -17,
      49
    ],
    [
      -28,
      21
    ],
    [
      -24,
      -15
    ],
    [
      -45,
      -77
    ],
    [
      28,
      -49
    ],
    [
      -103,
      -219
    ],
    [
      -28,
      3
    ],
    [
      -24,
      -22
    ],
    [
      -2,
      -49
    ],
    [
      9,
      -55
    ],
    [
      -33,
      -95
    ],
    [
      -56,
      9
    ],
    [
      -34,
      27
    ],
    [
      -46,
      90
    ],
    [
      -10,
      184
    ],
    [
      -43,
      25
    ],
    [
      -19,
      -37
    ],
    [
      -15,
      -3
    ],
    [
      -55,
      104
    ],
    [
      -44,
      121
    ],
    [
      -2,
      145
    ],
    [
      -19,
      58
    ],
    [
      -17,
      120
    ],
    [
      2,
      102
    ],
    [
      21,
      62
    ],
    [
      -13,
      52
    ],
    [
      -28,
      28
    ],
    [
      -141,
      26
    ],
    [
      -43,
      -21
    ],
    [
      -17,
      -16
    ],
    [
      -3,
      -31
    ],
    [
      -40,
      -21
    ],
    [
      -121,
      12
    ],
    [
      26,
      49
    ],
    [
      -2,
      47
    ],
    [
      -11,
      18
    ],
    [
      -112,
      37
    ],
    [
      -51,
      -40
    ],
    [
      -17,
      -52
    ],
    [
      15,
      -114
    ],
    [
      -26,
      -7
    ],
    [
      -77,
      56
    ],
    [
      -41,
      89
    ],
    [
      -47,
      6
    ],
    [
      -33,
      -92
    ],
    [
      -13,
      -86
    ],
    [
      -53,
      -62
    ],
    [
      -88,
      -15
    ],
    [
      -5,
      -84
    ],
    [
      22,
      -37
    ],
    [
      135,
      56
    ],
    [
      108,
      -52
    ],
    [
      15,
      -25
    ],
    [
      4,
      -68
    ],
    [
      -32,
      -21
    ],
    [
      0,
      -22
    ],
    [
      176,
      -179
    ],
    [
      30,
      19
    ],
    [
      31,
      -5
    ],
    [
      34,
      -44
    ],
    [
      64,
      -126
    ],
    [
      50,
      -188
    ],
    [
      5,
      -111
    ],
    [
      -93,
      -160
    ],
    [
      -213,
      -133
    ],
    [
      -213,
      2
    ],
    [
      -73,
      -37
    ],
    [
      -45,
      -55
    ],
    [
      -2,
      -71
    ],
    [
      5,
      -26
    ],
    [
      12,
      -10
    ],
    [
      23,
      -103
    ],
    [
      -137,
      -166
    ],
    [
      -113,
      -16
    ],
    [
      -18,
      48
    ],
    [
      -114,
      62
    ],
    [
      -22,
      40
    ],
    [
      -42,
      31
    ],
    [
      -61,
      -4
    ],
    [
      -59,
      38
    ],
    [
      -94,
      165
    ],
    [
      -8,
      72
    ],
    [
      -25,
      78
    ],
    [
      -25,
      26
    ],
    [
      1,
      103
    ],
    [
      97,
      70
    ],
    [
      15,
      25
    ],
    [
      -5,
      28
    ],
    [
      -60,
      49
    ],
    [
      1,
      12
    ],
    [
      59,
      136
    ],
    [
      20,
      3
    ],
    [
      49,
      53
    ],
    [
      5,
      42
    ],
    [
      -13,
      48
    ],
    [
      156,
      107
    ],
    [
      20,
      -13
    ],
    [
      17,
      5
    ],
    [
      11,
      20
    ],
    [
      -5,
      77
    ],
    [
      -68,
      153
    ],
    [
      -34,
      47
    ],
    [
      -44,
      6
    ],
    [
      -17,
      -26
    ],
    [
      -8,
      -68
    ],
    [
      -122,
      -148
    ],
    [
      -28,
      -11
    ],
    [
      -31,
      3
    ],
    [
      -31,
      35
    ],
    [
      7,
      184
    ],
    [
      15,
      92
    ],
    [
      -49,
      65
    ],
    [
      -45,
      11
    ],
    [
      -36,
      -15
    ],
    [
      -25,
      -31
    ],
    [
      -20,
      -49
    ],
    [
      26,
      -180
    ],
    [
      -27,
      -103
    ],
    [
      -1,
      -51
    ],
    [
      16,
      -40
    ],
    [
      0,
      -53
    ],
    [
      -25,
      -9
    ],
    [
      -63,
      6
    ],
    [
      -26,
      74
    ],
    [
      13,
      68
    ],
    [
      41,
      49
    ],
    [
      -38,
      210
    ],
    [
      -26,
      12
    ],
    [
      -48,
      -34
    ],
    [
      -25,
      -114
    ],
    [
      -30,
      -18
    ],
    [
      -46,
      12
    ],
    [
      -79,
      -105
    ],
    [
      -24,
      -9
    ],
    [
      -105,
      43
    ],
    [
      -30,
      -6
    ],
    [
      -21,
      -28
    ],
    [
      -7,
      -33
    ],
    [
      9,
      -68
    ],
    [
      28,
      -80
    ],
    [
      47,
      -19
    ],
    [
      24,
      -123
    ],
    [
      -44,
      -64
    ],
    [
      -47,
      -97
    ],
    [
      -19,
      -114
    ],
    [
      3,
      -33
    ],
    [
      12,
      -37
    ],
    [
      39,
      -53
    ],
    [
      91,
      -7
    ],
    [
      40,
      14
    ],
    [
      16,
      -48
    ],
    [
      -24,
      -65
    ],
    [
      19,
      -75
    ],
    [
      46,
      -82
    ],
    [
      -1,
      -35
    ],
    [
      -51,
      -78
    ],
    [
      8,
      -61
    ],
    [
      24,
      -40
    ],
    [
      -9,
      -61
    ],
    [
      -48,
      13
    ],
    [
      -83,
      53
    ],
    [
      -2,
      13
    ],
    [
      -59,
      72
    ],
    [
      -51,
      34
    ],
    [
      -157,
      161
    ],
    [
      -63,
      6
    ],
    [
      -53,
      37
    ],
    [
      -7,
      29
    ],
    [
      -13,
      13
    ],
    [
      -271,
      95
    ],
    [
      -219,
      165
    ],
    [
      -37,
      49
    ],
    [
      -68,
      21
    ],
    [
      -81,
      -12
    ],
    [
      -21,
      -19
    ],
    [
      -27,
      -47
    ],
    [
      -121,
      -93
    ],
    [
      -164,
      31
    ],
    [
      -6,
      33
    ],
    [
      15,
      132
    ],
    [
      21,
      110
    ],
    [
      18,
      26
    ],
    [
      15,
      67
    ],
    [
      -20,
      94
    ],
    [
      -16,
      249
    ],
    [
      33,
      140
    ],
    [
      70,
      50
    ],
    [
      81,
      204
    ],
    [
      11,
      83
    ],
    [
      -135,
      -38
    ],
    [
      -97,
      -48
    ],
    [
      -153,
      -127
    ],
    [
      -109,
      -123
    ],
    [
      -32,
      18
    ],
    [
      -22,
      54
    ],
    [
      -10,
      40
    ],
    [
      4,
      12
    ],
    [
      -26,
      41
    ],
    [
      -20,
      11
    ],
    [
      -135,
      -30
    ],
    [
      -23,
      -69
    ],
    [
      -75,
      -70
    ],
    [
      -184,
      -21
    ],
    [
      -42,
      -82
    ],
    [
      32,
      -134
    ],
    [
      29,
      -77
    ],
    [
      59,
      -38
    ],
    [
      31,
      -45
    ],
    [
      67,
      -141
    ],
    [
      -33,
      -233
    ],
    [
      -22,
      -72
    ],
    [
      -103,
      -132
    ],
    [
      -127,
      -13
    ],
    [
      -7,
      -150
    ],
    [
      -61,
      -125
    ],
    [
      -63,
      -63
    ],
    [
      -55,
      -109
    ],
    [
      -18,
      -63
    ],
    [
      4,
      -73
    ],
    [
      -46,
      -141
    ],
    [
      -14,
      -179
    ],
    [
      -34,
      -45
    ],
    [
      -85,
      -3
    ],
    [
      -10,
      -30
    ],
    [
      -6,
      -31
    ],
    [
      7,
      -94
    ],
    [
      20,
      -102
    ],
    [
      -24,
      -90
    ],
    [
      -105,
      -97
    ],
    [
      -1,
      -80
    ],
    [
      46,
      -58
    ],
    [
      15,
      -3
    ],
    [
      65,
      39
    ],
    [
      103,
      33
    ],
    [
      28,
      -2
    ],
    [
      38,
      -20
    ],
    [
      59,
      -96
    ],
    [
      -87,
      -122
    ],
    [
      -9,
      5
    ],
    [
      0,
      36
    ],
    [
      -28,
      11
    ],
    [
      -42,
      3
    ],
    [
      -18,
      -17
    ],
    [
      -61,
      -91
    ],
    [
      31,
      -67
    ],
    [
      -38,
      -35
    ],
    [
      -67,
      -17
    ],
    [
      -97,
      -75
    ],
    [
      -64,
      -68
    ],
    [
      -12,
      -17
    ],
    [
      18,
      -72
    ],
    [
      -125,
      -65
    ],
    [
      -70,
      3
    ],
    [
      -40,
      -25
    ],
    [
      -120,
      -147
    ],
    [
      -20,
      -59
    ],
    [
      20,
      -57
    ],
    [
      -12,
      -68
    ],
    [
      -38,
      -64
    ],
    [
      -54,
      -46
    ],
    [
      -119,
      -29
    ],
    [
      -27,
      -45
    ],
    [
      -93,
      -74
    ],
    [
      -67,
      -9
    ],
    [
      -21,
      22
    ],
    [
      -3,
      35
    ],
    [
      21,
      44
    ],
    [
      36,
      116
    ],
    [
      -66,
      101
    ],
    [
      -18,
      8
    ],
    [
      -23,
      -7
    ],
    [
      -99,
      -104
    ],
    [
      -33,
      -4
    ],
    [
      -28,
      15
    ],
    [
      74,
      86
    ],
    [
      5,
      40
    ],
    [
      -139,
      90
    ],
    [
      -105,
      3
    ],
    [
      -75,
      -73
    ],
    [
      -110,
      -4
    ],
    [
      -53,
      55
    ],
    [
      -91,
      40
    ],
    [
      -64,
      -142
    ],
    [
      -15,
      49
    ],
    [
      -25,
      17
    ],
    [
      -26,
      -19
    ],
    [
      -48,
      -164
    ],
    [
      -44,
      -284
    ],
    [
      -122,
      -169
    ],
    [
      -14,
      -82
    ],
    [
      -87,
      -231
    ],
    [
      -60,
      -46
    ],
    [
      -7,
      43
    ],
    [
      16,
      56
    ],
    [
      -36,
      174
    ],
    [
      -23,
      52
    ],
    [
      -98,
      44
    ],
    [
      -29,
      -12
    ],
    [
      -7,
      -15
    ],
    [
      1,
      -39
    ],
    [
      29,
      -84
    ],
    [
      -39,
      -146
    ],
    [
      -28,
      -5
    ],
    [
      -52,
      28
    ],
    [
      -23,
      -3
    ],
    [
      -14,
      -15
    ],
    [
      -15,
      -137
    ],
    [
      -52,
      -36
    ],
    [
      -80,
      -36
    ],
    [
      -9,
      10
    ],
    [
      7,
      80
    ],
    [
      31,
      -2
    ],
    [
      32,
      40
    ],
    [
      16,
      149
    ],
    [
      -28,
      56
    ],
    [
      -51,
      -6
    ],
    [
      -44,
      -96
    ],
    [
      1,
      -55
    ],
    [
      -11,
      -43
    ],
    [
      -30,
      -35
    ],
    [
      -47,
      75
    ],
    [
      3,
      47
    ],
    [
      -27,
      18
    ],
    [
      -76,
      -71
    ],
    [
      -17,
      -140
    ],
    [
      12,
      -98
    ],
    [
      -13,
      -94
    ],
    [
      -60,
      0
    ],
    [
      -105,
      186
    ],
    [
      0,
      31
    ],
    [
      -35,
      28
    ],
    [
      -25,
      5
    ],
    [
      -44,
      -15
    ],
    [
      -46,
      -94
    ],
    [
      -15,
      -67
    ],
    [
      4,
      -64
    ],
    [
      -14,
      -42
    ],
    [
      -169,
      -226
    ],
    [
      -45,
      8
    ],
    [
      -95,
      -12
    ],
    [
      -12,
      -11
    ],
    [
      1,
      -20
    ],
    [
      19,
      -30
    ],
    [
      1,
      -18
    ],
    [
      -292,
      -172
    ],
    [
      -17,
      -118
    ],
    [
      -64,
      -11
    ],
    [
      -20,
      8
    ],
    [
      -14,
      141
    ],
    [
      12,
      64
    ],
    [
      -18,
      58
    ],
    [
      -49,
      16
    ],
    [
      33,
      120
    ],
    [
      -39,
      122
    ],
    [
      -73,
      18
    ],
    [
      -98,
      -42
    ],
    [
      -63,
      20
    ],
    [
      -59,
      37
    ],
    [
      -110,
      -104
    ],
    [
      -24,
      21
    ],
    [
      -25,
      -8
    ],
    [
      -125,
      -124
    ],
    [
      -34,
      -56
    ],
    [
      -27,
      -109
    ],
    [
      11,
      -11
    ],
    [
      -2,
      -15
    ],
    [
      -46,
      -53
    ],
    [
      -27,
      -4
    ],
    [
      9,
      77
    ],
    [
      21,
      43
    ],
    [
      12,
      51
    ],
    [
      -15,
      30
    ],
    [
      -203,
      -47
    ],
    [
      3,
      51
    ],
    [
      33,
      103
    ],
    [
      45,
      77
    ],
    [
      104,
      133
    ],
    [
      36,
      81
    ],
    [
      -6,
      47
    ],
    [
      -18,
      52
    ],
    [
      -42,
      -9
    ],
    [
      -77,
      86
    ],
    [
      0,
      47
    ],
    [
      14,
      38
    ],
    [
      84,
      73
    ],
    [
      21,
      30
    ],
    [
      0,
      34
    ],
    [
      -36,
      47
    ],
    [
      -48,
      -4
    ],
    [
      -65,
      -64
    ],
    [
      -111,
      -159
    ],
    [
      3,
      -51
    ],
    [
      -59,
      -60
    ],
    [
      -9,
      47
    ],
    [
      -75,
      0
    ],
    [
      -134,
      -77
    ],
    [
      -182,
      -128
    ],
    [
      -57,
      -77
    ],
    [
      0,
      -47
    ],
    [
      -113,
      -103
    ],
    [
      -9,
      30
    ],
    [
      27,
      64
    ],
    [
      -15,
      26
    ],
    [
      -75,
      -39
    ],
    [
      -24,
      -43
    ],
    [
      -15,
      -94
    ],
    [
      18,
      -55
    ],
    [
      -3,
      -26
    ],
    [
      -119,
      -163
    ],
    [
      -6,
      -30
    ],
    [
      18,
      -60
    ],
    [
      -6,
      -21
    ],
    [
      -57,
      -21
    ],
    [
      -21,
      21
    ],
    [
      -101,
      -158
    ],
    [
      -12,
      -47
    ],
    [
      6,
      -14
    ],
    [
      29,
      -22
    ],
    [
      26,
      -18
    ],
    [
      14,
      -26
    ],
    [
      -3,
      -10
    ],
    [
      -10,
      -10
    ],
    [
      5,
      -30
    ],
    [
      92,
      -148
    ],
    [
      61,
      -97
    ],
    [
      -30,
      -214
    ],
    [
      14,
      -46
    ],
    [
      67,
      -29
    ],
    [
      22,
      -157
    ],
    [
      -47,
      -55
    ],
    [
      -55,
      -5
    ],
    [
      -15,
      38
    ],
    [
      -63,
      -7
    ],
    [
      -63,
      -68
    ],
    [
      -90,
      13
    ],
    [
      -54,
      66
    ],
    [
      -137,
      -88
    ],
    [
      -43,
      -47
    ],
    [
      -20,
      -74
    ],
    [
      15,
      -46
    ],
    [
      -64,
      -5
    ],
    [
      7,
      51
    ],
    [
      -46,
      57
    ],
    [
      -67,
      -11
    ],
    [
      -56,
      -34
    ],
    [
      -43,
      -49
    ],
    [
      -92,
      -161
    ],
    [
      -29,
      -82
    ],
    [
      -4,
      -66
    ],
    [
      14,
      -128
    ],
    [
      14,
      -40
    ],
    [
      41,
      -67
    ],
    [
      25,
      -20
    ],
    [
      50,
      41
    ],
    [
      155,
      5
    ],
    [
      -55,
      -121
    ],
    [
      -60,
      -1
    ],
    [
      -63,
      -21
    ],
    [
      -44,
      -37
    ],
    [
      -31,
      -47
    ],
    [
      -21,
      -128
    ],
    [
      -91,
      -127
    ],
    [
      -11,
      17
    ],
    [
      -5,
      44
    ],
    [
      -24,
      -2
    ],
    [
      -76,
      -38
    ],
    [
      -33,
      -48
    ],
    [
      17,
      -71
    ],
    [
      30,
      -52
    ],
    [
      20,
      -76
    ],
    [
      -61,
      -59
    ],
    [
      -202,
      -102
    ],
    [
      -36,
      27
    ],
    [
      -63,
      18
    ],
    [
      -166,
      -17
    ],
    [
      -90,
      -53
    ],
    [
      -95,
      -110
    ],
    [
      -46,
      -82
    ],
    [
      -114,
      -298
    ],
    [
      -45,
      -153
    ],
    [
      15,
      -84
    ],
    [
      78,
      -117
    ],
    [
      -5,
      -31
    ],
    [
      -57,
      -131
    ],
    [
      -98,
      -163
    ],
    [
      76,
      -50
    ],
    [
      4,
      -46
    ],
    [
      -141,
      -7
    ],
    [
      -36,
      -119
    ],
    [
      18,
      -62
    ],
    [
      0,
      -32
    ],
    [
      -49,
      -10
    ],
    [
      -12,
      -41
    ],
    [
      0,
      -40
    ],
    [
      -20,
      -59
    ],
    [
      -87,
      -118
    ],
    [
      -5,
      -36
    ],
    [
      -50,
      -124
    ],
    [
      -36,
      -44
    ],
    [
      -157,
      -77
    ],
    [
      0,
      0
    ]
  ],
  [
    [
      368736,
      176503
    ],
    [
      0,
      23
    ],
    [
      17,
      43
    ],
    [
      15,
      14
    ],
    [
      61,
      12
    ],
    [
      6,
      -2
    ],
    [
      2,
      -2
    ],
    [
      -4,
      -7
    ],
    [
      -17,
      -26
    ],
    [
      -40,
      -37
    ],
    [
      -20,
      -11
    ],
    [
      -20,
      -7
    ]
  ],
  [
    [
      368651,
      176456
    ],
    [
      3,
      18
    ],
    [
      -7,
      10
    ],
    [
      -14,
      -8
    ],
    [
      -9,
      2
    ],
    [
      -4,
      6
    ],
    [
      1,
      8
    ],
    [
      55,
      51
    ],
    [
      7,
      26
    ],
    [
      2,
      73
    ],
    [
      4,
      11
    ],
    [
      8,
      4
    ],
    [
      47,
      0
    ],
    [
      7,
      1
    ],
    [
      9,
      1
    ],
    [
      15,
      -3
    ],
    [
      5,
      -10
    ],
    [
      -12,
      -13
    ],
    [
      -14,
      -17
    ],
    [
      -16,
      -22
    ],
    [
      -27,
      -91
    ],
    [
      -10,
      -11
    ],
    [
      -19,
      -12
    ],
    [
      -17,
      -19
    ],
    [
      -10,
      -7
    ],
    [
      -4,
      2
    ]
  ],
  [
    [
      378948,
      181082
    ],
    [
      -40,
      54
    ],
    [
      3,
      61
    ],
    [
      70,
      109
    ],
    [
      -6,
      57
    ],
    [
      -40,
      78
    ],
    [
      2,
      80
    ],
    [
      44,
      104
    ],
    [
      39,
      -31
    ],
    [
      33,
      -260
    ],
    [
      -31,
      -166
    ],
    [
      -74,
      -86
    ]
  ],
  [
    [
      377341,
      180506
    ],
    [
      -10,
      338
    ],
    [
      49,
      136
    ],
    [
      130,
      86
    ],
    [
      28,
      -121
    ],
    [
      -67,
      -207
    ],
    [
      -95,
      -217
    ],
    [
      -35,
      -15
    ]
  ],
  [
    [
      376048,
      180315
    ],
    [
      -124,
      126
    ],
    [
      -76,
      97
    ],
    [
      38,
      61
    ],
    [
      289,
      -187
    ],
    [
      -32,
      -71
    ],
    [
      -95,
      -26
    ]
  ],
  [
    [
      377317,
      180188
    ],
    [
      -137,
      106
    ],
    [
      -29,
      101
    ],
    [
      190,
      -187
    ],
    [
      -24,
      -20
    ]
  ],
  [
    [
      372748,
      177747
    ],
    [
      -88,
      26
    ],
    [
      -12,
      39
    ],
    [
      33,
      74
    ],
    [
      40,
      70
    ],
    [
      67,
      70
    ],
    [
      52,
      31
    ],
    [
      45,
      -66
    ],
    [
      0,
      -39
    ],
    [
      -30,
      -39
    ],
    [
      -43,
      -5
    ],
    [
      -12,
      -39
    ],
    [
      6,
      -39
    ],
    [
      -15,
      -62
    ],
    [
      -43,
      -21
    ]
  ],
  [
    [
      373860,
      177290
    ],
    [
      49,
      267
    ],
    [
      39,
      10
    ],
    [
      -14,
      -181
    ],
    [
      -74,
      -96
    ]
  ],
  [
    [
      382132,
      182385
    ],
    [
      -77,
      74
    ],
    [
      -42,
      100
    ],
    [
      0,
      83
    ],
    [
      15,
      9
    ],
    [
      30,
      -13
    ],
    [
      37,
      -22
    ],
    [
      24,
      13
    ],
    [
      13,
      61
    ],
    [
      21,
      14
    ],
    [
      106,
      -66
    ],
    [
      61,
      -61
    ],
    [
      -3,
      -22
    ],
    [
      -21,
      -13
    ],
    [
      -70,
      17
    ],
    [
      -58,
      35
    ],
    [
      -33,
      -21
    ],
    [
      -7,
      -35
    ],
    [
      22,
      -35
    ],
    [
      88,
      -44
    ],
    [
      43,
      -17
    ],
    [
      6,
      -18
    ],
    [
      -61,
      -35
    ],
    [
      -94,
      -4
    ]
  ],
  [
    [
      380747,
      181784
    ],
    [
      -81,
      85
    ],
    [
      -130,
      232
    ],
    [
      -32,
      112
    ],
    [
      32,
      65
    ],
    [
      193,
      -338
    ],
    [
      60,
      -121
    ],
    [
      -42,
      -35
    ]
  ],
  [
    [
      382045,
      181784
    ],
    [
      -81,
      60
    ],
    [
      0,
      91
    ],
    [
      -18,
      52
    ],
    [
      -46,
      53
    ],
    [
      15,
      48
    ],
    [
      42,
      13
    ],
    [
      148,
      -20
    ],
    [
      39,
      -46
    ],
    [
      27,
      -75
    ],
    [
      -126,
      -176
    ]
  ],
  [
    [
      372913,
      177249
    ],
    [
      -15,
      43
    ],
    [
      21,
      140
    ],
    [
      24,
      13
    ],
    [
      34,
      -26
    ],
    [
      3,
      -74
    ],
    [
      -21,
      -61
    ],
    [
      -46,
      -35
    ]
  ],
  [
    [
      369193,
      176715
    ],
    [
      -10,
      61
    ],
    [
      12,
      44
    ],
    [
      84,
      108
    ],
    [
      14,
      -14
    ],
    [
      -67,
      -182
    ],
    [
      -33,
      -17
    ]
  ],
  [
    [
      368909,
      176677
    ],
    [
      -57,
      32
    ],
    [
      88,
      53
    ],
    [
      33,
      -24
    ],
    [
      -64,
      -61
    ]
  ],
  [
    [
      369118,
      176422
    ],
    [
      2,
      137
    ],
    [
      22,
      82
    ],
    [
      66,
      -61
    ],
    [
      -13,
      -47
    ],
    [
      -77,
      -111
    ]
  ],
  [
    [
      369026,
      176164
    ],
    [
      -49,
      56
    ],
    [
      22,
      35
    ],
    [
      64,
      -3
    ],
    [
      4,
      -38
    ],
    [
      -41,
      -50
    ]
  ],
  [
    [
      368940,
      175909
    ],
    [
      -26,
      23
    ],
    [
      42,
      91
    ],
    [
      29,
      24
    ],
    [
      -6,
      -71
    ],
    [
      -39,
      -67
    ]
  ],
  [
    [
      368263,
      174925
    ],
    [
      -88,
      10
    ],
    [
      49,
      56
    ],
    [
      57,
      0
    ],
    [
      -18,
      -66
    ]
  ],
  [
    [
      366321,
      170810
    ],
    [
      -55,
      58
    ],
    [
      7,
      46
    ],
    [
      60,
      102
    ],
    [
      30,
      1
    ],
    [
      10,
      -15
    ],
    [
      -55,
      -68
    ],
    [
      4,
      -28
    ],
    [
      33,
      -46
    ],
    [
      -1,
      -26
    ],
    [
      -33,
      -24
    ]
  ],
  [
    [
      365173,
      160696
    ],
    [
      43,
      -59
    ],
    [
      14,
      -80
    ],
    [
      -5,
      -35
    ],
    [
      -41,
      18
    ],
    [
      -43,
      82
    ],
    [
      32,
      74
    ]
  ],
  [
    [
      366380,
      159707
    ],
    [
      110,
      -26
    ],
    [
      38,
      21
    ],
    [
      21,
      -15
    ],
    [
      51,
      -119
    ],
    [
      2,
      -70
    ],
    [
      -14,
      -92
    ],
    [
      13,
      -51
    ],
    [
      28,
      -59
    ],
    [
      48,
      -49
    ],
    [
      50,
      -30
    ],
    [
      56,
      -10
    ],
    [
      54,
      -26
    ],
    [
      24,
      -60
    ],
    [
      5,
      -49
    ],
    [
      12,
      -8
    ],
    [
      42,
      -5
    ],
    [
      32,
      20
    ],
    [
      61,
      94
    ],
    [
      -2,
      71
    ],
    [
      11,
      30
    ],
    [
      36,
      46
    ],
    [
      68,
      11
    ],
    [
      22,
      -178
    ],
    [
      -16,
      -117
    ],
    [
      6,
      -197
    ],
    [
      -15,
      -40
    ],
    [
      -231,
      -13
    ],
    [
      -215,
      19
    ],
    [
      -312,
      2
    ],
    [
      -566,
      -56
    ],
    [
      -120,
      -40
    ],
    [
      -73,
      -46
    ],
    [
      -85,
      -83
    ],
    [
      -20,
      -49
    ],
    [
      10,
      -22
    ],
    [
      -13,
      -39
    ],
    [
      -36,
      -20
    ],
    [
      -135,
      97
    ],
    [
      -89,
      96
    ],
    [
      -99,
      147
    ],
    [
      25,
      45
    ],
    [
      110,
      17
    ],
    [
      62,
      -14
    ],
    [
      87,
      -44
    ],
    [
      43,
      10
    ],
    [
      31,
      30
    ],
    [
      203,
      327
    ],
    [
      25,
      9
    ],
    [
      61,
      72
    ],
    [
      4,
      49
    ],
    [
      52,
      113
    ],
    [
      74,
      77
    ],
    [
      193,
      145
    ],
    [
      234,
      156
    ],
    [
      26,
      -9
    ],
    [
      11,
      -68
    ]
  ],
  [
    [
      368960,
      158428
    ],
    [
      52,
      10
    ],
    [
      99,
      71
    ],
    [
      85,
      95
    ],
    [
      75,
      130
    ],
    [
      13,
      151
    ],
    [
      -11,
      55
    ],
    [
      -21,
      35
    ],
    [
      -17,
      31
    ],
    [
      -37,
      53
    ],
    [
      -20,
      31
    ],
    [
      3,
      28
    ],
    [
      79,
      -43
    ],
    [
      77,
      -126
    ],
    [
      298,
      -660
    ],
    [
      0,
      -104
    ],
    [
      -21,
      -73
    ],
    [
      -7,
      -16
    ],
    [
      -47,
      -37
    ],
    [
      -137,
      -59
    ],
    [
      -69,
      -10
    ],
    [
      -193,
      34
    ],
    [
      -155,
      13
    ],
    [
      -71,
      -26
    ],
    [
      -111,
      11
    ],
    [
      -266,
      99
    ],
    [
      -340,
      197
    ],
    [
      -97,
      40
    ],
    [
      -55,
      46
    ],
    [
      -34,
      52
    ],
    [
      -10,
      66
    ],
    [
      76,
      -3
    ],
    [
      58,
      -33
    ],
    [
      25,
      -17
    ],
    [
      22,
      -58
    ],
    [
      54,
      -38
    ],
    [
      107,
      0
    ],
    [
      63,
      33
    ],
    [
      368,
      -6
    ],
    [
      165,
      28
    ]
  ],
  [
    [
      352723,
      169062
    ],
    [
      1238,
      -36
    ],
    [
      1095,
      -33
    ],
    [
      1794,
      -71
    ],
    [
      883,
      -39
    ],
    [
      826,
      -29
    ],
    [
      732,
      -32
    ],
    [
      270,
      -8
    ],
    [
      936,
      -36
    ],
    [
      561,
      -18
    ],
    [
      23,
      0
    ],
    [
      1432,
      -49
    ],
    [
      111,
      -7
    ],
    [
      184,
      -2
    ],
    [
      78,
      105
    ],
    [
      57,
      108
    ],
    [
      63,
      77
    ],
    [
      52,
      45
    ],
    [
      61,
      21
    ],
    [
      49,
      9
    ],
    [
      80,
      -25
    ],
    [
      0,
      0
    ],
    [
      1,
      0
    ],
    [
      135,
      -42
    ],
    [
      -22,
      390
    ],
    [
      59,
      80
    ],
    [
      35,
      43
    ],
    [
      10,
      9
    ],
    [
      82,
      50
    ],
    [
      88,
      44
    ],
    [
      349,
      -111
    ],
    [
      55,
      197
    ],
    [
      31,
      80
    ],
    [
      16,
      35
    ],
    [
      67,
      75
    ],
    [
      331,
      73
    ],
    [
      89,
      52
    ],
    [
      89,
      60
    ],
    [
      5,
      3
    ],
    [
      16,
      5
    ],
    [
      65,
      9
    ],
    [
      1,
      0
    ],
    [
      62,
      0
    ],
    [
      85,
      -29
    ],
    [
      192,
      -159
    ],
    [
      57,
      30
    ],
    [
      34,
      29
    ],
    [
      46,
      21
    ],
    [
      23,
      3
    ],
    [
      -2,
      -159
    ],
    [
      64,
      -505
    ],
    [
      63,
      -255
    ],
    [
      105,
      -264
    ],
    [
      10,
      -46
    ],
    [
      -42,
      -46
    ],
    [
      0,
      -36
    ],
    [
      73,
      -59
    ],
    [
      80,
      -13
    ],
    [
      22,
      -13
    ],
    [
      75,
      -92
    ],
    [
      5,
      -42
    ],
    [
      201,
      -77
    ],
    [
      35,
      9
    ],
    [
      5,
      57
    ],
    [
      93,
      112
    ],
    [
      94,
      87
    ],
    [
      77,
      24
    ],
    [
      51,
      -35
    ],
    [
      -14,
      -88
    ],
    [
      -5,
      -77
    ],
    [
      5,
      -34
    ],
    [
      41,
      -24
    ],
    [
      99,
      20
    ],
    [
      19,
      -87
    ],
    [
      2,
      -63
    ],
    [
      -13,
      -36
    ],
    [
      -60,
      -1
    ],
    [
      -65,
      -46
    ],
    [
      -88,
      -208
    ],
    [
      -98,
      -132
    ],
    [
      -52,
      -13
    ],
    [
      -16,
      9
    ],
    [
      -1,
      27
    ],
    [
      -1,
      31
    ],
    [
      -10,
      19
    ],
    [
      -11,
      15
    ],
    [
      -17,
      3
    ],
    [
      -15,
      -2
    ],
    [
      -14,
      -9
    ],
    [
      -15,
      -32
    ],
    [
      -72,
      -84
    ],
    [
      -160,
      -43
    ],
    [
      -37,
      39
    ],
    [
      -104,
      -47
    ],
    [
      -239,
      -65
    ],
    [
      -58,
      -54
    ],
    [
      -41,
      -20
    ],
    [
      -129,
      -10
    ],
    [
      -117,
      -27
    ],
    [
      -5,
      -26
    ],
    [
      31,
      -149
    ],
    [
      34,
      -16
    ],
    [
      13,
      8
    ],
    [
      77,
      -15
    ],
    [
      56,
      -117
    ],
    [
      -25,
      -96
    ],
    [
      -28,
      -21
    ],
    [
      -30,
      28
    ],
    [
      -53,
      -8
    ],
    [
      -112,
      -85
    ],
    [
      -35,
      -63
    ],
    [
      -8,
      -23
    ],
    [
      4,
      -16
    ],
    [
      -36,
      -29
    ],
    [
      -71,
      44
    ],
    [
      -49,
      8
    ],
    [
      -22,
      -10
    ],
    [
      -66,
      -64
    ],
    [
      3,
      -97
    ],
    [
      6,
      -51
    ],
    [
      25,
      -50
    ],
    [
      77,
      -24
    ],
    [
      25,
      -18
    ],
    [
      33,
      -36
    ],
    [
      -19,
      -30
    ],
    [
      -158,
      14
    ],
    [
      -35,
      133
    ],
    [
      -1,
      116
    ],
    [
      -18,
      31
    ],
    [
      -69,
      -74
    ],
    [
      -2,
      -36
    ],
    [
      -113,
      -127
    ],
    [
      -24,
      -54
    ],
    [
      -15,
      -70
    ],
    [
      7,
      -33
    ],
    [
      21,
      -4
    ],
    [
      9,
      -43
    ],
    [
      16,
      -35
    ],
    [
      39,
      -11
    ],
    [
      12,
      -14
    ],
    [
      -7,
      -7
    ],
    [
      -4,
      -15
    ],
    [
      -1,
      -24
    ],
    [
      2,
      -33
    ],
    [
      97,
      -203
    ],
    [
      1,
      -42
    ],
    [
      -54,
      22
    ],
    [
      -58,
      65
    ],
    [
      -25,
      4
    ],
    [
      -94,
      -26
    ],
    [
      -44,
      -42
    ],
    [
      -45,
      -155
    ],
    [
      13,
      -77
    ],
    [
      62,
      -95
    ],
    [
      -27,
      -106
    ],
    [
      7,
      -39
    ],
    [
      45,
      -85
    ],
    [
      36,
      -28
    ],
    [
      111,
      6
    ],
    [
      57,
      19
    ],
    [
      0,
      58
    ],
    [
      12,
      15
    ],
    [
      25,
      -60
    ],
    [
      18,
      -26
    ],
    [
      49,
      -35
    ],
    [
      57,
      -7
    ],
    [
      -8,
      48
    ],
    [
      47,
      20
    ],
    [
      22,
      -20
    ],
    [
      33,
      13
    ],
    [
      52,
      99
    ],
    [
      2,
      54
    ],
    [
      -7,
      25
    ],
    [
      -94,
      49
    ],
    [
      -10,
      23
    ],
    [
      51,
      16
    ],
    [
      127,
      8
    ],
    [
      8,
      -61
    ],
    [
      53,
      -110
    ],
    [
      46,
      -71
    ],
    [
      55,
      -57
    ],
    [
      102,
      -6
    ],
    [
      99,
      -33
    ],
    [
      118,
      -66
    ],
    [
      91,
      -35
    ],
    [
      32,
      -37
    ],
    [
      52,
      -113
    ],
    [
      38,
      -51
    ],
    [
      85,
      -79
    ],
    [
      42,
      -22
    ],
    [
      19,
      -170
    ],
    [
      22,
      -118
    ],
    [
      41,
      -41
    ],
    [
      107,
      -222
    ],
    [
      110,
      -181
    ],
    [
      121,
      -144
    ],
    [
      9,
      -52
    ],
    [
      -45,
      -39
    ],
    [
      -5,
      -58
    ],
    [
      26,
      -129
    ],
    [
      232,
      -340
    ],
    [
      -25,
      -18
    ],
    [
      -58,
      33
    ],
    [
      -91,
      -101
    ],
    [
      -37,
      8
    ],
    [
      -11,
      88
    ],
    [
      25,
      58
    ],
    [
      33,
      -91
    ],
    [
      97,
      71
    ],
    [
      -171,
      256
    ],
    [
      -33,
      2
    ],
    [
      -95,
      -67
    ],
    [
      -12,
      -115
    ],
    [
      22,
      -67
    ],
    [
      -18,
      -33
    ],
    [
      -40,
      -17
    ],
    [
      -41,
      53
    ],
    [
      -46,
      5
    ],
    [
      -84,
      -43
    ],
    [
      11,
      -59
    ],
    [
      56,
      -91
    ],
    [
      187,
      -195
    ],
    [
      56,
      -13
    ],
    [
      16,
      21
    ],
    [
      88,
      -82
    ],
    [
      40,
      -53
    ],
    [
      36,
      -22
    ],
    [
      42,
      3
    ],
    [
      52,
      52
    ],
    [
      74,
      17
    ],
    [
      157,
      -150
    ],
    [
      33,
      -95
    ],
    [
      -5,
      -35
    ],
    [
      8,
      -35
    ],
    [
      71,
      -129
    ],
    [
      33,
      -227
    ],
    [
      -51,
      -142
    ],
    [
      -33,
      -59
    ],
    [
      -6,
      -50
    ],
    [
      11,
      -64
    ],
    [
      43,
      -81
    ],
    [
      78,
      -101
    ],
    [
      119,
      -125
    ],
    [
      115,
      -91
    ],
    [
      303,
      -126
    ],
    [
      190,
      -41
    ],
    [
      432,
      -33
    ],
    [
      80,
      -60
    ],
    [
      15,
      -35
    ],
    [
      44,
      -53
    ],
    [
      23,
      -2
    ],
    [
      125,
      146
    ],
    [
      96,
      68
    ],
    [
      137,
      66
    ],
    [
      37,
      -8
    ],
    [
      207,
      67
    ],
    [
      100,
      -9
    ],
    [
      133,
      57
    ],
    [
      162,
      46
    ],
    [
      203,
      106
    ],
    [
      83,
      99
    ],
    [
      24,
      57
    ],
    [
      -3,
      222
    ],
    [
      -24,
      278
    ],
    [
      46,
      76
    ],
    [
      -14,
      24
    ],
    [
      -48,
      10
    ],
    [
      -62,
      53
    ],
    [
      -6,
      94
    ],
    [
      -26,
      129
    ],
    [
      -74,
      6
    ],
    [
      -48,
      -20
    ],
    [
      -57,
      -115
    ],
    [
      -1,
      -88
    ],
    [
      2,
      -88
    ],
    [
      7,
      -64
    ],
    [
      -10,
      -14
    ],
    [
      -8,
      5
    ],
    [
      -17,
      38
    ],
    [
      -11,
      124
    ],
    [
      -5,
      285
    ],
    [
      -18,
      344
    ],
    [
      -32,
      195
    ],
    [
      -30,
      95
    ],
    [
      -31,
      58
    ],
    [
      -63,
      79
    ],
    [
      -77,
      59
    ],
    [
      -129,
      76
    ],
    [
      -37,
      3
    ],
    [
      -73,
      -20
    ],
    [
      -45,
      -24
    ],
    [
      -42,
      -44
    ],
    [
      -40,
      -80
    ],
    [
      -4,
      -39
    ],
    [
      12,
      -49
    ],
    [
      18,
      -24
    ],
    [
      80,
      23
    ],
    [
      36,
      53
    ],
    [
      -22,
      -48
    ],
    [
      -44,
      -46
    ],
    [
      -36,
      -14
    ],
    [
      -21,
      1
    ],
    [
      -30,
      17
    ],
    [
      -58,
      61
    ],
    [
      -55,
      111
    ],
    [
      -74,
      88
    ],
    [
      -29,
      20
    ],
    [
      -24,
      0
    ],
    [
      -9,
      24
    ],
    [
      37,
      67
    ],
    [
      64,
      42
    ],
    [
      96,
      24
    ],
    [
      90,
      3
    ],
    [
      149,
      -27
    ],
    [
      226,
      -81
    ],
    [
      171,
      -95
    ],
    [
      123,
      -105
    ],
    [
      128,
      -166
    ],
    [
      111,
      -206
    ],
    [
      132,
      -294
    ],
    [
      89,
      -279
    ],
    [
      119,
      -488
    ],
    [
      48,
      -263
    ],
    [
      38,
      -500
    ],
    [
      2,
      -364
    ],
    [
      -25,
      -159
    ],
    [
      -74,
      -181
    ],
    [
      -18,
      -34
    ],
    [
      -34,
      -150
    ],
    [
      -96,
      -122
    ],
    [
      -32,
      -161
    ],
    [
      -28,
      -199
    ],
    [
      -51,
      -81
    ],
    [
      -31,
      -11
    ],
    [
      -37,
      6
    ],
    [
      -15,
      19
    ],
    [
      -11,
      38
    ],
    [
      8,
      17
    ],
    [
      22,
      -3
    ],
    [
      47,
      68
    ],
    [
      36,
      110
    ],
    [
      37,
      233
    ],
    [
      73,
      238
    ],
    [
      -1,
      44
    ],
    [
      -13,
      49
    ],
    [
      -106,
      99
    ],
    [
      -54,
      32
    ],
    [
      -37,
      3
    ],
    [
      -78,
      -31
    ],
    [
      -134,
      -21
    ],
    [
      -172,
      -15
    ],
    [
      -264,
      -91
    ],
    [
      -91,
      0
    ],
    [
      -166,
      -38
    ],
    [
      -281,
      -123
    ],
    [
      -53,
      -57
    ],
    [
      4,
      -23
    ],
    [
      -21,
      -49
    ],
    [
      -30,
      -12
    ],
    [
      -11,
      12
    ],
    [
      -11,
      50
    ],
    [
      3,
      59
    ],
    [
      -27,
      53
    ],
    [
      -35,
      16
    ],
    [
      -48,
      0
    ],
    [
      -158,
      -34
    ],
    [
      -43,
      30
    ],
    [
      -42,
      13
    ],
    [
      -69,
      -13
    ],
    [
      -45,
      -26
    ],
    [
      -23,
      -32
    ],
    [
      1,
      -22
    ],
    [
      -26,
      -58
    ],
    [
      -48,
      -33
    ],
    [
      -109,
      -36
    ],
    [
      -41,
      7
    ],
    [
      -147,
      -15
    ],
    [
      -41,
      -99
    ],
    [
      -82,
      -147
    ],
    [
      -77,
      -98
    ],
    [
      -47,
      -31
    ],
    [
      -40,
      -16
    ],
    [
      -148,
      -23
    ],
    [
      -192,
      -5
    ],
    [
      -263,
      -39
    ],
    [
      -115,
      -35
    ],
    [
      -51,
      -43
    ],
    [
      -54,
      -98
    ],
    [
      -50,
      -36
    ],
    [
      -59,
      -11
    ],
    [
      -152,
      -117
    ],
    [
      -149,
      -76
    ],
    [
      -117,
      -120
    ],
    [
      3,
      -29
    ],
    [
      -22,
      -37
    ],
    [
      -151,
      -107
    ],
    [
      -139,
      -6
    ],
    [
      -94,
      -27
    ],
    [
      -111,
      -118
    ],
    [
      -48,
      -25
    ],
    [
      -183,
      -10
    ],
    [
      -131,
      -39
    ],
    [
      -46,
      -30
    ],
    [
      -57,
      -18
    ],
    [
      -14,
      19
    ],
    [
      7,
      26
    ],
    [
      111,
      117
    ],
    [
      22,
      -4
    ],
    [
      25,
      -40
    ],
    [
      37,
      -6
    ],
    [
      29,
      9
    ],
    [
      116,
      48
    ],
    [
      144,
      122
    ],
    [
      136,
      56
    ],
    [
      135,
      32
    ],
    [
      74,
      101
    ],
    [
      64,
      21
    ],
    [
      109,
      109
    ],
    [
      46,
      64
    ],
    [
      442,
      311
    ],
    [
      22,
      48
    ],
    [
      -5,
      56
    ],
    [
      7,
      56
    ],
    [
      26,
      35
    ],
    [
      31,
      18
    ],
    [
      9,
      36
    ],
    [
      -5,
      42
    ],
    [
      -53,
      163
    ],
    [
      2,
      37
    ],
    [
      61,
      106
    ],
    [
      -27,
      65
    ],
    [
      -37,
      32
    ],
    [
      11,
      46
    ],
    [
      60,
      39
    ],
    [
      5,
      37
    ],
    [
      -7,
      28
    ],
    [
      -66,
      35
    ],
    [
      -9,
      29
    ],
    [
      48,
      44
    ],
    [
      -10,
      40
    ],
    [
      -15,
      18
    ],
    [
      -63,
      6
    ],
    [
      80,
      88
    ],
    [
      105,
      36
    ],
    [
      9,
      64
    ],
    [
      -15,
      41
    ],
    [
      -92,
      44
    ],
    [
      -33,
      -24
    ],
    [
      -29,
      -2
    ],
    [
      -71,
      48
    ],
    [
      -193,
      66
    ],
    [
      -54,
      35
    ],
    [
      -39,
      -22
    ],
    [
      -13,
      -68
    ],
    [
      39,
      -77
    ],
    [
      20,
      -139
    ],
    [
      -11,
      -66
    ],
    [
      -50,
      23
    ],
    [
      -77,
      65
    ],
    [
      -56,
      -20
    ],
    [
      -31,
      -128
    ],
    [
      -5,
      -67
    ],
    [
      21,
      -48
    ],
    [
      3,
      -51
    ],
    [
      -40,
      -93
    ],
    [
      -20,
      -3
    ],
    [
      -22,
      28
    ],
    [
      -11,
      31
    ],
    [
      -4,
      11
    ],
    [
      -166,
      42
    ],
    [
      -22,
      -5
    ],
    [
      -12,
      -22
    ],
    [
      -3,
      -49
    ],
    [
      60,
      -36
    ],
    [
      22,
      -69
    ],
    [
      -4,
      -17
    ],
    [
      -47,
      -34
    ],
    [
      -128,
      -2
    ],
    [
      -46,
      33
    ],
    [
      -42,
      -16
    ],
    [
      -14,
      -20
    ],
    [
      26,
      -225
    ],
    [
      -15,
      -45
    ],
    [
      -21,
      3
    ],
    [
      -60,
      197
    ],
    [
      3,
      59
    ],
    [
      -7,
      22
    ],
    [
      -15,
      16
    ],
    [
      -85,
      37
    ],
    [
      -123,
      -100
    ],
    [
      45,
      -65
    ],
    [
      23,
      -124
    ],
    [
      -7,
      -7
    ],
    [
      -49,
      22
    ],
    [
      -29,
      88
    ],
    [
      -18,
      24
    ],
    [
      -36,
      3
    ],
    [
      -13,
      -13
    ],
    [
      -2,
      -66
    ],
    [
      14,
      -47
    ],
    [
      -21,
      -72
    ],
    [
      -34,
      -50
    ],
    [
      -18,
      27
    ],
    [
      -27,
      0
    ],
    [
      -10,
      -15
    ],
    [
      8,
      -40
    ],
    [
      48,
      -61
    ],
    [
      32,
      -185
    ],
    [
      -52,
      0
    ],
    [
      -59,
      -184
    ],
    [
      -150,
      -36
    ],
    [
      -106,
      13
    ],
    [
      -82,
      -22
    ],
    [
      -83,
      -72
    ],
    [
      -117,
      50
    ],
    [
      -139,
      25
    ],
    [
      -179,
      -87
    ],
    [
      -9,
      181
    ],
    [
      -46,
      515
    ],
    [
      -2,
      12
    ],
    [
      -30,
      64
    ],
    [
      -16,
      18
    ],
    [
      -1,
      17
    ],
    [
      -3,
      64
    ],
    [
      5,
      57
    ],
    [
      25,
      33
    ],
    [
      6,
      94
    ],
    [
      0,
      1
    ],
    [
      9,
      128
    ],
    [
      -1,
      10
    ],
    [
      -9,
      3
    ],
    [
      -3,
      0
    ],
    [
      -55,
      17
    ],
    [
      -41,
      9
    ],
    [
      -113,
      30
    ],
    [
      0,
      3
    ],
    [
      0,
      21
    ],
    [
      -27,
      8
    ],
    [
      -50,
      13
    ],
    [
      0,
      0
    ],
    [
      -17,
      4
    ],
    [
      -6,
      2
    ],
    [
      -1,
      0
    ],
    [
      -64,
      114
    ],
    [
      -84,
      146
    ],
    [
      -6,
      9
    ],
    [
      -182,
      298
    ],
    [
      -288,
      175
    ],
    [
      -52,
      32
    ],
    [
      -8,
      16
    ],
    [
      1,
      30
    ],
    [
      -15,
      41
    ],
    [
      -9,
      16
    ],
    [
      -10,
      2
    ],
    [
      -17,
      11
    ],
    [
      -8,
      15
    ],
    [
      0,
      14
    ],
    [
      8,
      31
    ],
    [
      0,
      15
    ],
    [
      2,
      13
    ],
    [
      -2,
      5
    ],
    [
      -41,
      104
    ],
    [
      12,
      36
    ],
    [
      27,
      29
    ],
    [
      10,
      13
    ],
    [
      13,
      13
    ],
    [
      -34,
      60
    ],
    [
      -2,
      8
    ],
    [
      42,
      129
    ],
    [
      -35,
      141
    ],
    [
      8,
      87
    ],
    [
      0,
      2
    ],
    [
      3,
      35
    ],
    [
      -72,
      -13
    ],
    [
      -10,
      -1
    ],
    [
      -40,
      -7
    ],
    [
      -11,
      -1
    ],
    [
      -4,
      -1
    ],
    [
      -29,
      -5
    ],
    [
      -14,
      -2
    ],
    [
      -14,
      -3
    ],
    [
      -26,
      -5
    ],
    [
      0,
      216
    ],
    [
      0,
      2
    ],
    [
      1,
      307
    ],
    [
      0,
      14
    ],
    [
      0,
      383
    ],
    [
      -606,
      -12
    ],
    [
      -6,
      -1
    ],
    [
      -135,
      -14
    ],
    [
      -1,
      -1
    ],
    [
      -163,
      -5
    ],
    [
      -89,
      -2
    ],
    [
      -968,
      -32
    ],
    [
      -170,
      -12
    ],
    [
      -8,
      114
    ],
    [
      -461,
      6
    ],
    [
      -494,
      18
    ],
    [
      -390,
      4
    ],
    [
      -369,
      21
    ],
    [
      -583,
      10
    ],
    [
      -346,
      2
    ],
    [
      -714,
      15
    ],
    [
      -366,
      3
    ],
    [
      -230,
      -31
    ],
    [
      -47,
      -40
    ],
    [
      -40,
      0
    ],
    [
      -86,
      2
    ],
    [
      -5,
      43
    ],
    [
      -180,
      12
    ],
    [
      -270,
      32
    ],
    [
      -307,
      -4
    ],
    [
      -9,
      -22
    ],
    [
      21,
      -9
    ],
    [
      9,
      -14
    ],
    [
      -12,
      -35
    ],
    [
      -17,
      -32
    ],
    [
      -4,
      -1
    ],
    [
      -12,
      7
    ],
    [
      -8,
      -2
    ],
    [
      -1,
      -13
    ],
    [
      5,
      -12
    ],
    [
      8,
      -8
    ],
    [
      -7,
      -18
    ],
    [
      -11,
      -13
    ],
    [
      0,
      -23
    ],
    [
      -15,
      -15
    ],
    [
      -3,
      -34
    ],
    [
      -256,
      -40
    ],
    [
      17,
      286
    ],
    [
      -172,
      3
    ],
    [
      -84,
      6
    ],
    [
      -1,
      0
    ],
    [
      -695,
      7
    ],
    [
      -275,
      8
    ],
    [
      -903,
      37
    ],
    [
      -7,
      1
    ],
    [
      -317,
      14
    ],
    [
      -7,
      1
    ],
    [
      -708,
      26
    ],
    [
      -279,
      -7
    ],
    [
      -49,
      0
    ],
    [
      -58,
      269
    ],
    [
      797,
      3111
    ],
    [
      448,
      1733
    ]
  ],
  [
    [
      364874,
      165982
    ],
    [
      -39,
      28
    ],
    [
      0,
      73
    ],
    [
      14,
      23
    ],
    [
      7,
      -28
    ],
    [
      104,
      28
    ],
    [
      -23,
      -94
    ],
    [
      -63,
      -30
    ]
  ],
  [
    [
      364696,
      165914
    ],
    [
      -14,
      0
    ],
    [
      -74,
      71
    ],
    [
      62,
      58
    ],
    [
      35,
      -63
    ],
    [
      -9,
      -66
    ]
  ],
  [
    [
      364542,
      165860
    ],
    [
      -111,
      3
    ],
    [
      -1,
      15
    ],
    [
      50,
      78
    ],
    [
      53,
      64
    ],
    [
      22,
      -8
    ],
    [
      18,
      -131
    ],
    [
      -31,
      -21
    ]
  ],
  [
    [
      364635,
      165677
    ],
    [
      -60,
      7
    ],
    [
      -11,
      28
    ],
    [
      81,
      91
    ],
    [
      36,
      5
    ],
    [
      2,
      -40
    ],
    [
      -48,
      -91
    ]
  ],
  [
    [
      367945,
      158680
    ],
    [
      -79,
      2
    ],
    [
      -19,
      23
    ],
    [
      7,
      25
    ],
    [
      98,
      -15
    ],
    [
      -7,
      -35
    ]
  ],
  [
    [
      365279,
      158077
    ],
    [
      -72,
      18
    ],
    [
      -33,
      53
    ],
    [
      100,
      32
    ],
    [
      53,
      -42
    ],
    [
      -9,
      -56
    ],
    [
      -39,
      -5
    ]
  ],
  [
    [
      256310,
      190453
    ],
    [
      45,
      34
    ],
    [
      -4,
      33
    ],
    [
      11,
      17
    ],
    [
      88,
      88
    ],
    [
      220,
      115
    ],
    [
      182,
      55
    ],
    [
      161,
      92
    ],
    [
      114,
      -70
    ],
    [
      121,
      21
    ],
    [
      47,
      53
    ],
    [
      50,
      33
    ],
    [
      115,
      29
    ],
    [
      64,
      -7
    ],
    [
      126,
      59
    ],
    [
      22,
      -78
    ],
    [
      -8,
      -70
    ],
    [
      -39,
      -30
    ],
    [
      -113,
      -25
    ],
    [
      -52,
      -35
    ],
    [
      -51,
      -41
    ],
    [
      -82,
      -112
    ],
    [
      -134,
      -117
    ],
    [
      -282,
      -206
    ],
    [
      -57,
      -68
    ],
    [
      -2,
      -47
    ],
    [
      13,
      -21
    ],
    [
      10,
      -46
    ],
    [
      -6,
      -35
    ],
    [
      -24,
      -40
    ],
    [
      -462,
      -347
    ],
    [
      -248,
      -120
    ],
    [
      -275,
      -103
    ],
    [
      -101,
      -16
    ],
    [
      -205,
      -100
    ],
    [
      -107,
      0
    ],
    [
      -236,
      -88
    ],
    [
      -97,
      -56
    ],
    [
      -28,
      -56
    ],
    [
      -200,
      -107
    ],
    [
      -32,
      -103
    ],
    [
      0,
      -57
    ],
    [
      56,
      -46
    ],
    [
      80,
      0
    ],
    [
      218,
      52
    ],
    [
      4,
      -13
    ],
    [
      -65,
      -69
    ],
    [
      -447,
      -175
    ],
    [
      -122,
      -66
    ],
    [
      -111,
      -20
    ],
    [
      -61,
      -23
    ],
    [
      -264,
      -124
    ],
    [
      -83,
      -52
    ],
    [
      -172,
      -34
    ],
    [
      -166,
      56
    ],
    [
      -12,
      13
    ],
    [
      2,
      56
    ],
    [
      -49,
      67
    ],
    [
      -168,
      11
    ],
    [
      -5,
      15
    ],
    [
      5,
      12
    ],
    [
      31,
      20
    ],
    [
      -93,
      95
    ],
    [
      -22,
      -5
    ],
    [
      -21,
      42
    ],
    [
      41,
      91
    ],
    [
      106,
      51
    ],
    [
      29,
      40
    ],
    [
      -3,
      53
    ],
    [
      35,
      43
    ],
    [
      181,
      155
    ],
    [
      429,
      241
    ],
    [
      394,
      181
    ],
    [
      124,
      72
    ],
    [
      272,
      127
    ],
    [
      48,
      15
    ],
    [
      21,
      -15
    ],
    [
      64,
      8
    ],
    [
      102,
      61
    ],
    [
      -7,
      21
    ],
    [
      14,
      21
    ],
    [
      296,
      162
    ],
    [
      101,
      2
    ],
    [
      29,
      -13
    ],
    [
      117,
      57
    ],
    [
      79,
      55
    ],
    [
      1,
      65
    ],
    [
      39,
      43
    ],
    [
      101,
      55
    ],
    [
      84,
      67
    ],
    [
      115,
      67
    ],
    [
      53,
      -3
    ],
    [
      56,
      38
    ]
  ],
  [
    [
      272266,
      173158
    ],
    [
      87,
      -22
    ],
    [
      30,
      -43
    ],
    [
      41,
      -7
    ],
    [
      53,
      0
    ],
    [
      98,
      31
    ],
    [
      25,
      -2
    ],
    [
      18,
      -60
    ],
    [
      -31,
      -25
    ],
    [
      -26,
      -3
    ],
    [
      -6,
      3
    ],
    [
      8,
      16
    ],
    [
      -3,
      26
    ],
    [
      -31,
      7
    ],
    [
      -28,
      -35
    ],
    [
      -7,
      -39
    ],
    [
      6,
      -16
    ],
    [
      51,
      -21
    ],
    [
      62,
      -59
    ],
    [
      23,
      -154
    ],
    [
      1,
      -51
    ],
    [
      -45,
      -55
    ],
    [
      -17,
      -72
    ],
    [
      12,
      -78
    ],
    [
      17,
      -46
    ],
    [
      52,
      -89
    ],
    [
      17,
      -227
    ],
    [
      -22,
      -85
    ],
    [
      -92,
      -97
    ],
    [
      -45,
      -26
    ],
    [
      -45,
      -9
    ],
    [
      -17,
      -18
    ],
    [
      -20,
      -81
    ],
    [
      -36,
      -23
    ],
    [
      -105,
      -21
    ],
    [
      -289,
      77
    ],
    [
      -24,
      25
    ],
    [
      -37,
      89
    ],
    [
      52,
      194
    ],
    [
      57,
      54
    ],
    [
      22,
      54
    ],
    [
      -3,
      61
    ],
    [
      -22,
      77
    ],
    [
      23,
      175
    ],
    [
      20,
      51
    ],
    [
      52,
      67
    ],
    [
      36,
      20
    ],
    [
      58,
      79
    ],
    [
      37,
      141
    ],
    [
      2,
      108
    ],
    [
      -12,
      37
    ],
    [
      -3,
      53
    ],
    [
      6,
      19
    ]
  ],
  [
    [
      261910,
      168275
    ],
    [
      -9,
      -4
    ],
    [
      -118,
      40
    ],
    [
      -34,
      17
    ],
    [
      -31,
      7
    ],
    [
      -6,
      5
    ],
    [
      -4,
      9
    ],
    [
      -10,
      7
    ],
    [
      -23,
      -2
    ],
    [
      -62,
      3
    ],
    [
      -22,
      17
    ],
    [
      -24,
      -8
    ],
    [
      -14,
      -1
    ],
    [
      -7,
      6
    ],
    [
      0,
      31
    ],
    [
      -30,
      41
    ],
    [
      -20,
      14
    ],
    [
      -7,
      9
    ],
    [
      -30,
      65
    ],
    [
      -1,
      8
    ],
    [
      12,
      21
    ],
    [
      1,
      8
    ],
    [
      -41,
      66
    ],
    [
      -23,
      24
    ],
    [
      -20,
      16
    ],
    [
      -14,
      7
    ],
    [
      -29,
      5
    ],
    [
      -14,
      7
    ],
    [
      -20,
      19
    ],
    [
      -4,
      9
    ],
    [
      -16,
      22
    ],
    [
      -34,
      16
    ],
    [
      -27,
      29
    ],
    [
      -7,
      17
    ],
    [
      -16,
      16
    ],
    [
      -16,
      10
    ],
    [
      -22,
      4
    ],
    [
      -5,
      6
    ],
    [
      -2,
      8
    ],
    [
      6,
      31
    ],
    [
      -33,
      143
    ],
    [
      0,
      8
    ],
    [
      12,
      29
    ],
    [
      16,
      19
    ],
    [
      43,
      24
    ],
    [
      9,
      10
    ],
    [
      0,
      24
    ],
    [
      -6,
      26
    ],
    [
      2,
      20
    ],
    [
      23,
      33
    ],
    [
      5,
      25
    ],
    [
      -3,
      12
    ],
    [
      -15,
      11
    ],
    [
      -1,
      12
    ],
    [
      5,
      12
    ],
    [
      30,
      38
    ],
    [
      6,
      3
    ],
    [
      19,
      -1
    ],
    [
      6,
      3
    ],
    [
      5,
      7
    ],
    [
      -1,
      38
    ],
    [
      12,
      70
    ],
    [
      7,
      27
    ],
    [
      -7,
      14
    ],
    [
      31,
      50
    ],
    [
      22,
      17
    ],
    [
      2,
      20
    ],
    [
      -6,
      33
    ],
    [
      7,
      36
    ],
    [
      24,
      45
    ],
    [
      16,
      19
    ],
    [
      14,
      44
    ],
    [
      1,
      13
    ],
    [
      43,
      57
    ],
    [
      19,
      16
    ],
    [
      40,
      62
    ],
    [
      11,
      5
    ],
    [
      9,
      9
    ],
    [
      11,
      23
    ],
    [
      -3,
      37
    ],
    [
      2,
      8
    ],
    [
      9,
      12
    ],
    [
      21,
      12
    ],
    [
      39,
      63
    ],
    [
      4,
      43
    ],
    [
      -2,
      40
    ],
    [
      -4,
      11
    ],
    [
      -11,
      12
    ],
    [
      -15,
      3
    ],
    [
      -15,
      32
    ],
    [
      4,
      30
    ],
    [
      -4,
      34
    ],
    [
      -4,
      10
    ],
    [
      -83,
      61
    ],
    [
      -4,
      8
    ],
    [
      -1,
      26
    ],
    [
      -3,
      6
    ],
    [
      -40,
      18
    ],
    [
      -15,
      28
    ],
    [
      -23,
      8
    ],
    [
      -18,
      1
    ],
    [
      -30,
      -15
    ],
    [
      -24,
      -18
    ],
    [
      -12,
      -12
    ],
    [
      -8,
      -19
    ],
    [
      -54,
      -28
    ],
    [
      -74,
      -95
    ],
    [
      -23,
      -36
    ],
    [
      -3,
      -10
    ],
    [
      -64,
      -23
    ],
    [
      -4,
      -7
    ],
    [
      1,
      -17
    ],
    [
      -13,
      -17
    ],
    [
      -41,
      -8
    ],
    [
      -36,
      20
    ],
    [
      -12,
      1
    ],
    [
      -13,
      0
    ],
    [
      -47,
      -11
    ],
    [
      -25,
      21
    ],
    [
      -12,
      6
    ],
    [
      -52,
      1
    ],
    [
      -49,
      -17
    ],
    [
      -66,
      10
    ],
    [
      -3,
      -7
    ],
    [
      -6,
      -7
    ],
    [
      -11,
      -1
    ],
    [
      -15,
      10
    ],
    [
      -14,
      2
    ],
    [
      -14,
      -9
    ],
    [
      -7,
      -33
    ],
    [
      -7,
      -10
    ],
    [
      -53,
      -33
    ],
    [
      -9,
      -2
    ],
    [
      -6,
      7
    ],
    [
      -1,
      7
    ],
    [
      8,
      17
    ],
    [
      -2,
      21
    ],
    [
      -12,
      15
    ],
    [
      -30,
      6
    ],
    [
      -12,
      6
    ],
    [
      -13,
      14
    ],
    [
      -7,
      13
    ],
    [
      -2,
      9
    ],
    [
      -2,
      16
    ],
    [
      -7,
      14
    ],
    [
      -8,
      3
    ],
    [
      -9,
      1
    ],
    [
      -5,
      -4
    ],
    [
      0,
      -11
    ],
    [
      1,
      -12
    ],
    [
      -3,
      -9
    ],
    [
      -9,
      -11
    ],
    [
      -33,
      -20
    ],
    [
      -6,
      -2
    ],
    [
      -21,
      3
    ],
    [
      -9,
      11
    ],
    [
      -6,
      11
    ],
    [
      1,
      25
    ],
    [
      16,
      35
    ],
    [
      41,
      42
    ],
    [
      27,
      22
    ],
    [
      -2,
      15
    ],
    [
      -20,
      25
    ],
    [
      2,
      17
    ],
    [
      9,
      15
    ],
    [
      14,
      13
    ],
    [
      32,
      15
    ],
    [
      27,
      22
    ],
    [
      13,
      36
    ],
    [
      -14,
      24
    ],
    [
      -1,
      7
    ],
    [
      3,
      12
    ],
    [
      42,
      22
    ],
    [
      8,
      14
    ],
    [
      -1,
      42
    ],
    [
      -5,
      16
    ],
    [
      -6,
      10
    ],
    [
      -23,
      22
    ],
    [
      -21,
      54
    ],
    [
      1,
      45
    ],
    [
      -9,
      26
    ],
    [
      1,
      10
    ],
    [
      33,
      51
    ],
    [
      40,
      20
    ],
    [
      14,
      31
    ],
    [
      45,
      18
    ],
    [
      15,
      20
    ],
    [
      3,
      11
    ],
    [
      25,
      22
    ],
    [
      33,
      14
    ],
    [
      41,
      31
    ],
    [
      0,
      14
    ],
    [
      8,
      14
    ],
    [
      29,
      38
    ],
    [
      0,
      9
    ],
    [
      -8,
      19
    ],
    [
      3,
      16
    ],
    [
      40,
      44
    ],
    [
      3,
      10
    ],
    [
      3,
      36
    ],
    [
      7,
      24
    ],
    [
      15,
      27
    ],
    [
      4,
      12
    ],
    [
      -2,
      37
    ],
    [
      -29,
      9
    ],
    [
      -18,
      59
    ],
    [
      -10,
      76
    ],
    [
      -2,
      48
    ],
    [
      1,
      23
    ],
    [
      6,
      20
    ],
    [
      0,
      9
    ],
    [
      -20,
      39
    ],
    [
      -33,
      37
    ],
    [
      -26,
      26
    ],
    [
      -43,
      25
    ],
    [
      -26,
      24
    ],
    [
      -4,
      5
    ],
    [
      -3,
      22
    ],
    [
      10,
      41
    ],
    [
      12,
      5
    ],
    [
      80,
      -26
    ],
    [
      39,
      -17
    ],
    [
      43,
      -6
    ],
    [
      27,
      7
    ],
    [
      8,
      8
    ],
    [
      10,
      13
    ],
    [
      3,
      15
    ],
    [
      5,
      51
    ],
    [
      -1,
      48
    ],
    [
      4,
      10
    ],
    [
      5,
      9
    ],
    [
      23,
      12
    ],
    [
      21,
      21
    ],
    [
      4,
      68
    ],
    [
      -7,
      84
    ],
    [
      -16,
      40
    ],
    [
      -57,
      15
    ],
    [
      -20,
      16
    ],
    [
      -2,
      23
    ],
    [
      -4,
      12
    ],
    [
      -38,
      39
    ],
    [
      -29,
      72
    ],
    [
      -37,
      38
    ],
    [
      -23,
      12
    ],
    [
      -11,
      11
    ],
    [
      -3,
      45
    ],
    [
      10,
      21
    ],
    [
      1,
      14
    ],
    [
      -6,
      14
    ],
    [
      -1,
      15
    ],
    [
      3,
      6
    ],
    [
      102,
      28
    ],
    [
      22,
      26
    ],
    [
      19,
      9
    ],
    [
      70,
      14
    ],
    [
      3,
      5
    ],
    [
      1,
      11
    ],
    [
      0,
      36
    ],
    [
      -7,
      20
    ],
    [
      -28,
      30
    ],
    [
      -73,
      49
    ],
    [
      -16,
      15
    ],
    [
      -21,
      28
    ],
    [
      0,
      5
    ],
    [
      21,
      24
    ],
    [
      0,
      10
    ],
    [
      -4,
      14
    ],
    [
      -22,
      25
    ],
    [
      -11,
      8
    ],
    [
      -98,
      26
    ],
    [
      -30,
      15
    ],
    [
      -93,
      73
    ],
    [
      -45,
      75
    ],
    [
      2,
      41
    ],
    [
      4,
      3
    ],
    [
      -5,
      19
    ],
    [
      -21,
      28
    ],
    [
      -26,
      7
    ],
    [
      -13,
      25
    ],
    [
      -21,
      7
    ],
    [
      -12,
      0
    ],
    [
      -49,
      -6
    ],
    [
      -22,
      -13
    ],
    [
      -12,
      2
    ],
    [
      -8,
      7
    ],
    [
      -7,
      23
    ],
    [
      -7,
      10
    ],
    [
      -10,
      9
    ],
    [
      -6,
      1
    ],
    [
      -10,
      0
    ],
    [
      -6,
      -7
    ],
    [
      -66,
      -10
    ],
    [
      -24,
      19
    ],
    [
      -13,
      6
    ],
    [
      -28,
      -17
    ],
    [
      -49,
      -5
    ],
    [
      -53,
      7
    ],
    [
      -24,
      -7
    ],
    [
      -22,
      6
    ],
    [
      -6,
      9
    ],
    [
      4,
      10
    ],
    [
      -16,
      24
    ],
    [
      -28,
      16
    ],
    [
      -22,
      6
    ],
    [
      -49,
      19
    ],
    [
      -17,
      17
    ],
    [
      -1,
      7
    ],
    [
      22,
      15
    ],
    [
      11,
      -2
    ],
    [
      9,
      3
    ],
    [
      4,
      14
    ],
    [
      -9,
      44
    ],
    [
      -27,
      74
    ],
    [
      -10,
      13
    ],
    [
      -8,
      4
    ],
    [
      -23,
      0
    ],
    [
      -29,
      -10
    ],
    [
      -28,
      -14
    ],
    [
      -54,
      2
    ],
    [
      -30,
      -17
    ],
    [
      -19,
      -7
    ],
    [
      -20,
      1
    ],
    [
      -12,
      4
    ],
    [
      -32,
      -1
    ],
    [
      -3,
      -3
    ],
    [
      -3,
      -21
    ],
    [
      -19,
      -20
    ],
    [
      -20,
      -8
    ],
    [
      -11,
      -12
    ],
    [
      -110,
      -5
    ],
    [
      -22,
      10
    ],
    [
      -10,
      19
    ],
    [
      -7,
      5
    ],
    [
      -45,
      -2
    ],
    [
      -28,
      7
    ],
    [
      -28,
      34
    ],
    [
      -19,
      8
    ],
    [
      -16,
      46
    ],
    [
      4,
      9
    ],
    [
      1,
      10
    ],
    [
      -11,
      18
    ],
    [
      -10,
      7
    ],
    [
      -33,
      4
    ],
    [
      -69,
      38
    ],
    [
      -12,
      15
    ],
    [
      -22,
      57
    ],
    [
      5,
      19
    ],
    [
      7,
      11
    ],
    [
      30,
      29
    ],
    [
      25,
      18
    ],
    [
      12,
      25
    ],
    [
      33,
      36
    ],
    [
      13,
      10
    ],
    [
      13,
      2
    ],
    [
      13,
      11
    ],
    [
      42,
      67
    ],
    [
      49,
      42
    ],
    [
      7,
      12
    ],
    [
      12,
      36
    ],
    [
      13,
      19
    ],
    [
      5,
      1
    ],
    [
      21,
      -10
    ],
    [
      12,
      8
    ],
    [
      10,
      52
    ],
    [
      -4,
      27
    ],
    [
      -40,
      36
    ],
    [
      -11,
      5
    ],
    [
      -61,
      -9
    ],
    [
      -23,
      9
    ],
    [
      -8,
      17
    ],
    [
      -18,
      96
    ],
    [
      -3,
      4
    ],
    [
      -1,
      27
    ],
    [
      3,
      26
    ],
    [
      5,
      18
    ],
    [
      13,
      27
    ],
    [
      15,
      14
    ],
    [
      19,
      11
    ],
    [
      0,
      9
    ],
    [
      -6,
      16
    ],
    [
      -32,
      34
    ],
    [
      -9,
      1
    ],
    [
      -55,
      1
    ],
    [
      -16,
      -8
    ],
    [
      -17,
      -3
    ],
    [
      -23,
      6
    ],
    [
      -7,
      7
    ],
    [
      1,
      5
    ],
    [
      7,
      11
    ],
    [
      -7,
      11
    ],
    [
      -69,
      33
    ],
    [
      -25,
      22
    ],
    [
      -3,
      4
    ],
    [
      0,
      8
    ],
    [
      -63,
      28
    ],
    [
      -22,
      0
    ],
    [
      -5,
      -5
    ],
    [
      -31,
      8
    ],
    [
      -13,
      11
    ],
    [
      -15,
      29
    ],
    [
      -13,
      16
    ],
    [
      -60,
      37
    ],
    [
      -11,
      4
    ],
    [
      -22,
      4
    ],
    [
      -7,
      -1
    ],
    [
      -23,
      -24
    ],
    [
      1,
      -34
    ],
    [
      -39,
      -7
    ],
    [
      -8,
      2
    ],
    [
      -20,
      18
    ],
    [
      -37,
      11
    ],
    [
      -8,
      2
    ],
    [
      -21,
      -8
    ],
    [
      -27,
      -2
    ],
    [
      -33,
      12
    ],
    [
      -15,
      10
    ],
    [
      -10,
      13
    ],
    [
      -6,
      15
    ],
    [
      -5,
      18
    ],
    [
      4,
      15
    ],
    [
      -2,
      31
    ],
    [
      -15,
      5
    ],
    [
      -5,
      0
    ],
    [
      0,
      -3
    ],
    [
      -24,
      3
    ],
    [
      -8,
      -6
    ],
    [
      -15,
      -24
    ],
    [
      -46,
      -15
    ],
    [
      -77,
      -17
    ],
    [
      -46,
      -30
    ],
    [
      -15,
      1
    ],
    [
      -8,
      19
    ],
    [
      -21,
      17
    ],
    [
      -44,
      24
    ],
    [
      -37,
      12
    ],
    [
      -19,
      -8
    ],
    [
      -28,
      -34
    ],
    [
      -5,
      -2
    ],
    [
      -17,
      12
    ],
    [
      12,
      17
    ],
    [
      -2,
      37
    ],
    [
      -9,
      14
    ],
    [
      -23,
      21
    ],
    [
      -233,
      168
    ],
    [
      -26,
      -10
    ],
    [
      5,
      -16
    ],
    [
      -24,
      -40
    ],
    [
      -33,
      -17
    ],
    [
      -19,
      -1
    ],
    [
      -19,
      7
    ],
    [
      -36,
      -11
    ],
    [
      -6,
      -4
    ],
    [
      -20,
      -27
    ],
    [
      -10,
      -1
    ],
    [
      -18,
      11
    ],
    [
      -14,
      13
    ],
    [
      4,
      12
    ],
    [
      -6,
      13
    ],
    [
      -13,
      16
    ],
    [
      -41,
      15
    ],
    [
      -9,
      14
    ],
    [
      -20,
      17
    ],
    [
      -17,
      2
    ],
    [
      -29,
      -7
    ],
    [
      -8,
      3
    ],
    [
      -20,
      24
    ],
    [
      2,
      20
    ],
    [
      -3,
      10
    ],
    [
      -22,
      14
    ],
    [
      -35,
      9
    ],
    [
      -27,
      3
    ],
    [
      -20,
      -17
    ],
    [
      -2,
      -16
    ],
    [
      5,
      -14
    ],
    [
      -10,
      -13
    ],
    [
      -15,
      -8
    ],
    [
      -40,
      -6
    ],
    [
      -29,
      9
    ],
    [
      -25,
      22
    ],
    [
      -4,
      9
    ],
    [
      6,
      14
    ],
    [
      0,
      5
    ],
    [
      -9,
      10
    ],
    [
      -7,
      1
    ],
    [
      -30,
      95
    ],
    [
      -1,
      27
    ],
    [
      -5,
      9
    ],
    [
      -12,
      6
    ],
    [
      -26,
      6
    ],
    [
      -44,
      -3
    ],
    [
      -18,
      9
    ],
    [
      -29,
      3
    ],
    [
      -8,
      -2
    ],
    [
      2,
      -7
    ],
    [
      -7,
      -14
    ],
    [
      -21,
      -24
    ],
    [
      -11,
      -8
    ],
    [
      -49,
      -6
    ],
    [
      -22,
      15
    ],
    [
      -54,
      6
    ],
    [
      -31,
      -14
    ],
    [
      -7,
      -15
    ],
    [
      -39,
      -36
    ],
    [
      -43,
      -13
    ],
    [
      -4,
      3
    ],
    [
      -16,
      44
    ],
    [
      -2,
      21
    ],
    [
      -3,
      5
    ],
    [
      -22,
      19
    ],
    [
      -17,
      -1
    ],
    [
      -13,
      -10
    ],
    [
      -17,
      -38
    ],
    [
      -21,
      -56
    ],
    [
      0,
      -33
    ],
    [
      -8,
      -61
    ],
    [
      -6,
      -13
    ],
    [
      -11,
      -8
    ],
    [
      -39,
      7
    ],
    [
      -52,
      -5
    ],
    [
      -4,
      -3
    ],
    [
      -3,
      -18
    ],
    [
      -10,
      -1
    ],
    [
      -104,
      32
    ],
    [
      -18,
      -4
    ],
    [
      -8,
      0
    ],
    [
      -4,
      2
    ],
    [
      -6,
      6
    ],
    [
      2,
      11
    ],
    [
      4,
      7
    ],
    [
      -1,
      7
    ],
    [
      -19,
      13
    ],
    [
      -19,
      29
    ],
    [
      2,
      7
    ],
    [
      4,
      0
    ],
    [
      -7,
      38
    ],
    [
      -16,
      40
    ],
    [
      -23,
      22
    ],
    [
      -64,
      14
    ],
    [
      -36,
      18
    ],
    [
      -31,
      2
    ],
    [
      -29,
      -14
    ],
    [
      -14,
      -27
    ],
    [
      -27,
      5
    ],
    [
      -15,
      39
    ],
    [
      1,
      25
    ],
    [
      -19,
      18
    ],
    [
      -30,
      15
    ],
    [
      -48,
      6
    ],
    [
      -33,
      -11
    ],
    [
      -29,
      -17
    ],
    [
      -10,
      -8
    ],
    [
      -11,
      -17
    ],
    [
      -12,
      -4
    ],
    [
      -7,
      2
    ],
    [
      -19,
      15
    ],
    [
      -8,
      1
    ],
    [
      -5,
      1
    ],
    [
      -4,
      -2
    ],
    [
      -3,
      -2
    ],
    [
      -4,
      -3
    ],
    [
      -2,
      -5
    ],
    [
      -5,
      -11
    ],
    [
      -33,
      -23
    ],
    [
      -19,
      -3
    ],
    [
      -11,
      8
    ],
    [
      -9,
      32
    ],
    [
      -1,
      15
    ],
    [
      2,
      10
    ],
    [
      25,
      33
    ],
    [
      1,
      18
    ],
    [
      -3,
      4
    ],
    [
      -27,
      6
    ],
    [
      -38,
      -4
    ],
    [
      -22,
      12
    ],
    [
      -23,
      -27
    ],
    [
      22,
      -24
    ],
    [
      3,
      -14
    ],
    [
      -4,
      -9
    ],
    [
      -27,
      1
    ],
    [
      -52,
      -16
    ],
    [
      -19,
      5
    ],
    [
      1,
      5
    ],
    [
      -5,
      7
    ],
    [
      -21,
      17
    ],
    [
      -56,
      25
    ],
    [
      -19,
      5
    ],
    [
      -14,
      -1
    ],
    [
      -13,
      7
    ],
    [
      -17,
      14
    ],
    [
      -19,
      30
    ],
    [
      -5,
      13
    ],
    [
      -9,
      10
    ],
    [
      -476,
      277
    ],
    [
      -28,
      16
    ],
    [
      -215,
      126
    ],
    [
      -516,
      302
    ],
    [
      -172,
      44
    ],
    [
      -187,
      54
    ],
    [
      -26,
      8
    ],
    [
      -142,
      37
    ],
    [
      -34,
      11
    ],
    [
      -11,
      4
    ],
    [
      -12,
      3
    ],
    [
      -64,
      19
    ],
    [
      -9,
      2
    ],
    [
      -289,
      79
    ],
    [
      -2,
      1
    ],
    [
      -1120,
      309
    ],
    [
      -195,
      58
    ],
    [
      -536,
      144
    ],
    [
      -149,
      44
    ],
    [
      -496,
      135
    ],
    [
      -735,
      205
    ],
    [
      -9,
      3
    ],
    [
      -45,
      9
    ],
    [
      -1033,
      288
    ],
    [
      -3,
      2
    ],
    [
      -1,
      7
    ],
    [
      1,
      4
    ],
    [
      9,
      7
    ],
    [
      3,
      19
    ],
    [
      -4,
      14
    ],
    [
      -3,
      7
    ],
    [
      -2,
      10
    ],
    [
      4,
      15
    ],
    [
      12,
      7
    ],
    [
      4,
      9
    ],
    [
      -1,
      33
    ],
    [
      -10,
      30
    ],
    [
      -5,
      4
    ],
    [
      0,
      0
    ],
    [
      -6,
      -1
    ],
    [
      -7,
      4
    ],
    [
      -2,
      8
    ],
    [
      0,
      10
    ],
    [
      -1,
      7
    ],
    [
      -18,
      24
    ],
    [
      -24,
      17
    ],
    [
      -14,
      19
    ],
    [
      -4,
      23
    ],
    [
      0,
      1
    ],
    [
      12,
      46
    ],
    [
      -9,
      6
    ],
    [
      -6,
      1
    ],
    [
      -21,
      20
    ],
    [
      -26,
      39
    ],
    [
      -12,
      51
    ],
    [
      -8,
      15
    ],
    [
      -24,
      15
    ],
    [
      -25,
      58
    ],
    [
      -6,
      33
    ],
    [
      4,
      50
    ],
    [
      -2,
      16
    ],
    [
      -24,
      87
    ],
    [
      -16,
      22
    ],
    [
      -2,
      13
    ],
    [
      0,
      4
    ],
    [
      -39,
      -2
    ],
    [
      -17,
      7
    ],
    [
      -7,
      92
    ],
    [
      -6,
      27
    ],
    [
      -45,
      17
    ],
    [
      -8,
      8
    ],
    [
      -13,
      22
    ],
    [
      6,
      18
    ],
    [
      14,
      10
    ],
    [
      4,
      8
    ],
    [
      -2,
      7
    ],
    [
      -23,
      25
    ],
    [
      -42,
      27
    ],
    [
      -12,
      15
    ],
    [
      -40,
      90
    ],
    [
      -15,
      57
    ],
    [
      -1,
      13
    ],
    [
      -8,
      13
    ],
    [
      -21,
      12
    ],
    [
      -9,
      0
    ],
    [
      -33,
      -13
    ],
    [
      -8,
      1
    ],
    [
      -3,
      12
    ],
    [
      0,
      10
    ],
    [
      8,
      24
    ],
    [
      -5,
      13
    ],
    [
      -6,
      1
    ],
    [
      -24,
      -20
    ],
    [
      -37,
      -14
    ],
    [
      -13,
      -3
    ],
    [
      -11,
      4
    ],
    [
      -46,
      -5
    ],
    [
      -8,
      -9
    ],
    [
      -9,
      -5
    ],
    [
      -13,
      0
    ],
    [
      -12,
      8
    ],
    [
      1,
      9
    ],
    [
      0,
      8
    ],
    [
      -7,
      8
    ],
    [
      -10,
      -1
    ],
    [
      -9,
      1
    ],
    [
      -2,
      7
    ],
    [
      0,
      10
    ],
    [
      1,
      8
    ],
    [
      0,
      7
    ],
    [
      -22,
      28
    ],
    [
      14,
      32
    ],
    [
      -3,
      10
    ],
    [
      -23,
      24
    ],
    [
      -7,
      -4
    ],
    [
      -2,
      -12
    ],
    [
      -23,
      -25
    ],
    [
      -12,
      0
    ],
    [
      -37,
      15
    ],
    [
      -7,
      -8
    ],
    [
      -1,
      -7
    ],
    [
      -20,
      -8
    ],
    [
      -26,
      -3
    ],
    [
      -16,
      8
    ],
    [
      -6,
      -1
    ],
    [
      -25,
      -9
    ],
    [
      -6,
      -7
    ],
    [
      0,
      0
    ],
    [
      -16,
      9
    ],
    [
      -4,
      31
    ],
    [
      17,
      16
    ],
    [
      13,
      36
    ],
    [
      8,
      60
    ],
    [
      -3,
      18
    ],
    [
      -49,
      51
    ],
    [
      -22,
      -5
    ],
    [
      -10,
      4
    ],
    [
      -7,
      14
    ],
    [
      3,
      16
    ],
    [
      -22,
      23
    ],
    [
      -26,
      6
    ],
    [
      -38,
      -15
    ],
    [
      -16,
      -37
    ],
    [
      -10,
      -66
    ],
    [
      -4,
      -5
    ],
    [
      -7,
      -2
    ],
    [
      -10,
      3
    ],
    [
      -11,
      20
    ],
    [
      -7,
      2
    ],
    [
      -3,
      -2
    ],
    [
      -21,
      9
    ],
    [
      -42,
      -7
    ],
    [
      -23,
      -10
    ],
    [
      -66,
      -40
    ],
    [
      -31,
      -8
    ],
    [
      -10,
      10
    ],
    [
      -1,
      17
    ],
    [
      -17,
      47
    ],
    [
      -6,
      12
    ],
    [
      -2,
      0
    ],
    [
      -8,
      0
    ],
    [
      -19,
      24
    ],
    [
      -11,
      34
    ],
    [
      -34,
      37
    ],
    [
      -1,
      0
    ],
    [
      -5,
      43
    ],
    [
      -13,
      22
    ],
    [
      357,
      253
    ],
    [
      106,
      53
    ],
    [
      108,
      -37
    ],
    [
      211,
      116
    ],
    [
      142,
      43
    ],
    [
      377,
      155
    ],
    [
      324,
      70
    ],
    [
      283,
      97
    ],
    [
      87,
      45
    ],
    [
      165,
      138
    ],
    [
      53,
      73
    ],
    [
      61,
      53
    ],
    [
      86,
      48
    ],
    [
      197,
      172
    ],
    [
      134,
      167
    ],
    [
      224,
      240
    ],
    [
      85,
      61
    ],
    [
      211,
      106
    ],
    [
      361,
      87
    ],
    [
      240,
      21
    ],
    [
      65,
      -16
    ],
    [
      94,
      -42
    ],
    [
      37,
      -43
    ],
    [
      80,
      -4
    ],
    [
      254,
      95
    ],
    [
      174,
      30
    ],
    [
      112,
      43
    ],
    [
      76,
      -1
    ],
    [
      40,
      -24
    ],
    [
      100,
      -8
    ],
    [
      177,
      16
    ],
    [
      112,
      33
    ],
    [
      221,
      99
    ],
    [
      629,
      337
    ],
    [
      108,
      71
    ],
    [
      135,
      133
    ],
    [
      171,
      253
    ],
    [
      131,
      141
    ],
    [
      71,
      57
    ],
    [
      53,
      12
    ],
    [
      27,
      -36
    ],
    [
      35,
      -21
    ],
    [
      100,
      -8
    ],
    [
      121,
      23
    ],
    [
      121,
      80
    ],
    [
      54,
      13
    ],
    [
      30,
      -44
    ],
    [
      126,
      1
    ],
    [
      57,
      14
    ],
    [
      74,
      36
    ],
    [
      68,
      47
    ],
    [
      79,
      85
    ],
    [
      100,
      162
    ],
    [
      53,
      126
    ],
    [
      53,
      197
    ],
    [
      75,
      106
    ],
    [
      173,
      101
    ],
    [
      37,
      5
    ],
    [
      170,
      194
    ],
    [
      128,
      70
    ],
    [
      61,
      -4
    ],
    [
      70,
      39
    ],
    [
      177,
      221
    ],
    [
      154,
      140
    ],
    [
      139,
      105
    ],
    [
      82,
      47
    ],
    [
      82,
      9
    ],
    [
      86,
      41
    ],
    [
      70,
      48
    ],
    [
      128,
      25
    ],
    [
      56,
      27
    ],
    [
      375,
      349
    ],
    [
      117,
      146
    ],
    [
      38,
      104
    ],
    [
      57,
      90
    ],
    [
      208,
      230
    ],
    [
      149,
      97
    ],
    [
      335,
      141
    ],
    [
      105,
      63
    ],
    [
      94,
      75
    ],
    [
      235,
      56
    ],
    [
      60,
      37
    ],
    [
      47,
      48
    ],
    [
      7,
      29
    ],
    [
      -4,
      23
    ],
    [
      184,
      66
    ],
    [
      160,
      18
    ],
    [
      56,
      19
    ],
    [
      278,
      46
    ],
    [
      45,
      -9
    ],
    [
      139,
      15
    ],
    [
      6,
      2
    ],
    [
      0,
      36
    ],
    [
      40,
      8
    ],
    [
      314,
      25
    ],
    [
      254,
      -5
    ],
    [
      138,
      -13
    ],
    [
      22,
      -16
    ],
    [
      415,
      -21
    ],
    [
      81,
      10
    ],
    [
      227,
      -93
    ],
    [
      133,
      -85
    ],
    [
      76,
      -68
    ],
    [
      28,
      -247
    ],
    [
      -10,
      -35
    ],
    [
      -45,
      -3
    ],
    [
      -108,
      35
    ],
    [
      -46,
      -5
    ],
    [
      -40,
      -15
    ],
    [
      -30,
      -32
    ],
    [
      -181,
      -48
    ],
    [
      -77,
      -54
    ],
    [
      -60,
      10
    ],
    [
      -39,
      32
    ],
    [
      -69,
      32
    ],
    [
      -43,
      4
    ],
    [
      -131,
      1
    ],
    [
      -304,
      -40
    ],
    [
      -79,
      -21
    ],
    [
      -41,
      -94
    ],
    [
      -3,
      -43
    ],
    [
      16,
      -44
    ],
    [
      40,
      -43
    ],
    [
      38,
      -9
    ],
    [
      44,
      -64
    ],
    [
      2,
      -33
    ],
    [
      -26,
      -47
    ],
    [
      -15,
      -12
    ],
    [
      -62,
      1
    ],
    [
      -52,
      -13
    ],
    [
      -105,
      -73
    ],
    [
      -140,
      -121
    ],
    [
      -196,
      -59
    ],
    [
      -27,
      -18
    ],
    [
      -58,
      -66
    ],
    [
      -130,
      -186
    ],
    [
      -62,
      -17
    ],
    [
      -44,
      -29
    ],
    [
      -74,
      -114
    ],
    [
      -159,
      -171
    ],
    [
      -160,
      -52
    ],
    [
      -54,
      9
    ],
    [
      -38,
      -8
    ],
    [
      -86,
      -76
    ],
    [
      -40,
      -72
    ],
    [
      -26,
      -106
    ],
    [
      -4,
      -120
    ],
    [
      17,
      -54
    ],
    [
      14,
      -13
    ],
    [
      25,
      2
    ],
    [
      -2,
      -27
    ],
    [
      -39,
      -48
    ],
    [
      -40,
      -25
    ],
    [
      -10,
      2
    ],
    [
      -6,
      29
    ],
    [
      -23,
      25
    ],
    [
      -39,
      12
    ],
    [
      -47,
      -13
    ],
    [
      -49,
      -39
    ],
    [
      -38,
      -62
    ],
    [
      -2,
      -23
    ],
    [
      8,
      -9
    ],
    [
      4,
      -36
    ],
    [
      -6,
      -43
    ],
    [
      -48,
      -118
    ],
    [
      -217,
      -132
    ],
    [
      -34,
      -9
    ],
    [
      -17,
      -22
    ],
    [
      -16,
      -53
    ],
    [
      -4,
      -81
    ],
    [
      -26,
      -135
    ],
    [
      -44,
      -150
    ],
    [
      -33,
      -51
    ],
    [
      -59,
      -57
    ],
    [
      -97,
      -156
    ],
    [
      -34,
      -39
    ],
    [
      -167,
      -42
    ],
    [
      -24,
      -187
    ],
    [
      -35,
      -172
    ],
    [
      -105,
      -274
    ],
    [
      -11,
      -261
    ],
    [
      -29,
      -138
    ],
    [
      6,
      -40
    ],
    [
      47,
      -147
    ],
    [
      56,
      -143
    ],
    [
      123,
      0
    ],
    [
      23,
      49
    ],
    [
      95,
      134
    ],
    [
      173,
      197
    ],
    [
      -4,
      44
    ],
    [
      1,
      7
    ],
    [
      -41,
      45
    ],
    [
      -71,
      -24
    ],
    [
      73,
      138
    ],
    [
      88,
      42
    ],
    [
      -17,
      -69
    ],
    [
      31,
      -43
    ],
    [
      5,
      -2
    ],
    [
      41,
      -8
    ],
    [
      45,
      6
    ],
    [
      213,
      240
    ],
    [
      149,
      124
    ],
    [
      101,
      65
    ],
    [
      87,
      104
    ],
    [
      396,
      215
    ],
    [
      60,
      45
    ],
    [
      60,
      12
    ],
    [
      55,
      -33
    ],
    [
      -88,
      -136
    ],
    [
      -191,
      -181
    ],
    [
      63,
      -106
    ],
    [
      68,
      3
    ],
    [
      179,
      36
    ],
    [
      131,
      54
    ],
    [
      99,
      24
    ],
    [
      86,
      -14
    ],
    [
      167,
      -71
    ],
    [
      144,
      -14
    ],
    [
      93,
      -8
    ],
    [
      155,
      23
    ],
    [
      284,
      5
    ],
    [
      132,
      -126
    ],
    [
      145,
      -64
    ],
    [
      26,
      4
    ],
    [
      72,
      39
    ],
    [
      53,
      10
    ],
    [
      18,
      -23
    ],
    [
      103,
      -52
    ],
    [
      55,
      -7
    ],
    [
      28,
      -23
    ],
    [
      3,
      -31
    ],
    [
      -12,
      -16
    ],
    [
      10,
      -26
    ],
    [
      55,
      -41
    ],
    [
      52,
      -6
    ],
    [
      47,
      37
    ],
    [
      29,
      -2
    ],
    [
      31,
      -111
    ],
    [
      -9,
      -21
    ],
    [
      12,
      -75
    ],
    [
      14,
      -43
    ],
    [
      22,
      -26
    ],
    [
      69,
      -15
    ],
    [
      98,
      12
    ],
    [
      46,
      39
    ],
    [
      -12,
      49
    ],
    [
      4,
      19
    ],
    [
      34,
      5
    ],
    [
      31,
      -40
    ],
    [
      7,
      -69
    ],
    [
      -6,
      -26
    ],
    [
      12,
      -27
    ],
    [
      50,
      -39
    ],
    [
      55,
      -20
    ],
    [
      49,
      10
    ],
    [
      44,
      -12
    ],
    [
      27,
      -51
    ],
    [
      103,
      -123
    ],
    [
      64,
      -40
    ],
    [
      24,
      -220
    ],
    [
      41,
      -165
    ],
    [
      49,
      -74
    ],
    [
      255,
      -235
    ],
    [
      -6,
      -80
    ],
    [
      110,
      -221
    ],
    [
      52,
      -36
    ],
    [
      127,
      -51
    ],
    [
      7,
      -30
    ],
    [
      -5,
      -39
    ],
    [
      18,
      -84
    ],
    [
      65,
      -65
    ],
    [
      45,
      -23
    ],
    [
      161,
      -8
    ],
    [
      40,
      -47
    ],
    [
      99,
      -16
    ],
    [
      12,
      -96
    ],
    [
      -58,
      -55
    ],
    [
      1,
      -12
    ],
    [
      54,
      -126
    ],
    [
      34,
      -48
    ],
    [
      -75,
      -34
    ],
    [
      -19,
      -69
    ],
    [
      24,
      -64
    ],
    [
      40,
      -53
    ],
    [
      75,
      -73
    ],
    [
      80,
      -48
    ],
    [
      207,
      -64
    ],
    [
      266,
      -28
    ],
    [
      288,
      19
    ],
    [
      140,
      49
    ],
    [
      244,
      -25
    ],
    [
      102,
      15
    ],
    [
      45,
      55
    ],
    [
      109,
      86
    ],
    [
      160,
      34
    ],
    [
      83,
      41
    ],
    [
      65,
      59
    ],
    [
      43,
      -6
    ],
    [
      163,
      -45
    ],
    [
      63,
      -74
    ],
    [
      9,
      -51
    ],
    [
      81,
      -184
    ],
    [
      4,
      -40
    ],
    [
      -17,
      -20
    ],
    [
      13,
      -32
    ],
    [
      99,
      -55
    ],
    [
      123,
      12
    ],
    [
      75,
      -56
    ],
    [
      26,
      -55
    ],
    [
      0,
      -70
    ],
    [
      45,
      -31
    ],
    [
      128,
      -23
    ],
    [
      65,
      0
    ],
    [
      109,
      27
    ],
    [
      26,
      87
    ],
    [
      11,
      80
    ],
    [
      27,
      45
    ],
    [
      80,
      81
    ],
    [
      100,
      10
    ],
    [
      94,
      0
    ],
    [
      72,
      -28
    ],
    [
      25,
      -26
    ],
    [
      2,
      -27
    ],
    [
      103,
      -170
    ],
    [
      38,
      -41
    ],
    [
      26,
      -5
    ],
    [
      60,
      120
    ],
    [
      -12,
      60
    ],
    [
      12,
      62
    ],
    [
      13,
      194
    ],
    [
      -62,
      38
    ],
    [
      -31,
      61
    ],
    [
      -37,
      238
    ],
    [
      70,
      81
    ],
    [
      89,
      45
    ],
    [
      12,
      -30
    ],
    [
      25,
      -4
    ],
    [
      74,
      15
    ],
    [
      19,
      15
    ],
    [
      130,
      -197
    ],
    [
      -9,
      -114
    ],
    [
      -15,
      -68
    ],
    [
      -13,
      -32
    ],
    [
      -33,
      -30
    ],
    [
      -23,
      -62
    ],
    [
      -4,
      -46
    ],
    [
      49,
      -55
    ],
    [
      48,
      -5
    ],
    [
      35,
      46
    ],
    [
      13,
      41
    ],
    [
      30,
      28
    ],
    [
      14,
      -2
    ],
    [
      13,
      -106
    ],
    [
      -11,
      -61
    ],
    [
      117,
      -51
    ],
    [
      145,
      177
    ],
    [
      168,
      132
    ],
    [
      153,
      143
    ],
    [
      57,
      82
    ],
    [
      10,
      49
    ],
    [
      65,
      64
    ],
    [
      48,
      4
    ],
    [
      79,
      -28
    ],
    [
      37,
      6
    ],
    [
      240,
      104
    ],
    [
      207,
      109
    ],
    [
      828,
      558
    ],
    [
      135,
      114
    ],
    [
      120,
      25
    ],
    [
      94,
      -115
    ],
    [
      40,
      -16
    ],
    [
      63,
      -3
    ],
    [
      131,
      23
    ],
    [
      190,
      72
    ],
    [
      215,
      45
    ],
    [
      212,
      23
    ],
    [
      151,
      58
    ],
    [
      236,
      45
    ],
    [
      189,
      -15
    ],
    [
      236,
      -57
    ],
    [
      227,
      -27
    ],
    [
      185,
      -2
    ],
    [
      234,
      24
    ],
    [
      226,
      -11
    ],
    [
      190,
      -31
    ],
    [
      230,
      -3
    ],
    [
      169,
      11
    ],
    [
      140,
      34
    ],
    [
      575,
      245
    ],
    [
      409,
      227
    ],
    [
      169,
      64
    ],
    [
      429,
      75
    ],
    [
      560,
      -42
    ],
    [
      140,
      19
    ],
    [
      138,
      64
    ],
    [
      101,
      24
    ],
    [
      127,
      3
    ],
    [
      55,
      -11
    ],
    [
      12,
      -14
    ],
    [
      -184,
      -176
    ],
    [
      -103,
      -126
    ],
    [
      -64,
      -117
    ],
    [
      -38,
      -110
    ],
    [
      -13,
      -93
    ],
    [
      10,
      -71
    ],
    [
      -37,
      -368
    ],
    [
      -8,
      -176
    ],
    [
      8,
      -143
    ],
    [
      20,
      -94
    ],
    [
      10,
      -105
    ],
    [
      11,
      -5
    ],
    [
      10,
      -54
    ],
    [
      -8,
      -25
    ],
    [
      -95,
      -39
    ],
    [
      -38,
      -36
    ],
    [
      -16,
      -46
    ],
    [
      6,
      -86
    ],
    [
      26,
      -79
    ],
    [
      82,
      -120
    ],
    [
      42,
      -34
    ],
    [
      53,
      -25
    ],
    [
      235,
      -25
    ],
    [
      72,
      30
    ],
    [
      41,
      52
    ],
    [
      52,
      14
    ],
    [
      14,
      -66
    ],
    [
      64,
      -76
    ],
    [
      34,
      -18
    ],
    [
      112,
      -16
    ],
    [
      94,
      11
    ],
    [
      69,
      23
    ],
    [
      60,
      -71
    ],
    [
      30,
      -85
    ],
    [
      74,
      -34
    ],
    [
      150,
      16
    ],
    [
      159,
      53
    ],
    [
      234,
      108
    ],
    [
      172,
      115
    ],
    [
      58,
      28
    ],
    [
      126,
      -40
    ],
    [
      117,
      19
    ],
    [
      74,
      -95
    ],
    [
      44,
      -111
    ],
    [
      121,
      -127
    ],
    [
      55,
      -85
    ],
    [
      113,
      -69
    ],
    [
      244,
      152
    ],
    [
      53,
      8
    ],
    [
      71,
      -57
    ],
    [
      39,
      13
    ],
    [
      48,
      49
    ],
    [
      36,
      95
    ],
    [
      1,
      65
    ],
    [
      -41,
      34
    ],
    [
      93,
      159
    ],
    [
      127,
      88
    ],
    [
      131,
      -13
    ],
    [
      101,
      69
    ],
    [
      5,
      3
    ],
    [
      156,
      -10
    ],
    [
      30,
      -16
    ],
    [
      63,
      -40
    ],
    [
      165,
      -53
    ],
    [
      88,
      0
    ],
    [
      54,
      11
    ],
    [
      6,
      5
    ],
    [
      50,
      42
    ],
    [
      145,
      244
    ],
    [
      166,
      44
    ],
    [
      83,
      -96
    ],
    [
      58,
      -5
    ],
    [
      67,
      15
    ],
    [
      33,
      21
    ],
    [
      36,
      8
    ],
    [
      54,
      -15
    ],
    [
      29,
      -68
    ],
    [
      27,
      -24
    ],
    [
      35,
      -99
    ],
    [
      -71,
      -250
    ],
    [
      -108,
      -379
    ],
    [
      37,
      -340
    ],
    [
      101,
      -258
    ],
    [
      66,
      -111
    ],
    [
      -68,
      -51
    ],
    [
      21,
      -343
    ],
    [
      91,
      -86
    ],
    [
      -53,
      -112
    ],
    [
      -52,
      -54
    ],
    [
      -35,
      -8
    ],
    [
      -49,
      -5
    ],
    [
      -58,
      -53
    ],
    [
      -6,
      -6
    ],
    [
      -11,
      -2
    ],
    [
      -7,
      0
    ],
    [
      -5,
      2
    ],
    [
      -2,
      6
    ],
    [
      -1,
      10
    ],
    [
      -1,
      11
    ],
    [
      -36,
      40
    ],
    [
      -119,
      16
    ],
    [
      -188,
      -25
    ],
    [
      -70,
      -59
    ],
    [
      -82,
      -129
    ],
    [
      20,
      -102
    ],
    [
      -13,
      -93
    ],
    [
      -19,
      -29
    ],
    [
      156,
      -94
    ],
    [
      124,
      22
    ],
    [
      100,
      131
    ],
    [
      29,
      -16
    ],
    [
      238,
      -12
    ],
    [
      52,
      -44
    ],
    [
      8,
      -39
    ],
    [
      68,
      -133
    ],
    [
      22,
      -22
    ],
    [
      33,
      -10
    ],
    [
      148,
      -2
    ],
    [
      173,
      -106
    ],
    [
      -23,
      -62
    ],
    [
      -39,
      18
    ],
    [
      -68,
      -43
    ],
    [
      -48,
      -47
    ],
    [
      -40,
      -69
    ],
    [
      -17,
      -54
    ],
    [
      4,
      -31
    ],
    [
      28,
      -37
    ],
    [
      74,
      -60
    ],
    [
      122,
      -179
    ],
    [
      112,
      -75
    ],
    [
      85,
      -87
    ],
    [
      131,
      -36
    ],
    [
      64,
      9
    ],
    [
      38,
      17
    ],
    [
      25,
      -16
    ],
    [
      18,
      -65
    ],
    [
      22,
      -19
    ],
    [
      116,
      -47
    ],
    [
      41,
      -92
    ],
    [
      21,
      -71
    ],
    [
      -11,
      -71
    ],
    [
      -17,
      -51
    ],
    [
      -10,
      -47
    ],
    [
      -63,
      -80
    ],
    [
      -26,
      20
    ],
    [
      -158,
      55
    ],
    [
      -169,
      12
    ],
    [
      -58,
      -42
    ],
    [
      -18,
      -95
    ],
    [
      -90,
      78
    ],
    [
      -320,
      86
    ],
    [
      -53,
      -26
    ],
    [
      -76,
      42
    ],
    [
      -10,
      31
    ],
    [
      -20,
      11
    ],
    [
      -152,
      -25
    ],
    [
      -161,
      -68
    ],
    [
      -29,
      23
    ],
    [
      -308,
      -12
    ],
    [
      -86,
      -84
    ],
    [
      -384,
      1
    ],
    [
      -119,
      -107
    ],
    [
      -118,
      -71
    ],
    [
      -268,
      194
    ],
    [
      -46,
      113
    ],
    [
      -28,
      30
    ],
    [
      -102,
      -66
    ],
    [
      -89,
      65
    ],
    [
      -13,
      33
    ],
    [
      3,
      23
    ],
    [
      -8,
      21
    ],
    [
      -119,
      21
    ],
    [
      -35,
      -28
    ],
    [
      0,
      -118
    ],
    [
      -56,
      -19
    ],
    [
      -38,
      6
    ],
    [
      -10,
      24
    ],
    [
      -1,
      40
    ],
    [
      21,
      97
    ],
    [
      -15,
      105
    ],
    [
      -39,
      101
    ],
    [
      -17,
      25
    ],
    [
      -100,
      71
    ],
    [
      -88,
      -11
    ],
    [
      -28,
      -33
    ],
    [
      -115,
      -1
    ],
    [
      -197,
      171
    ],
    [
      -46,
      22
    ],
    [
      -52,
      -16
    ],
    [
      -47,
      -33
    ],
    [
      -59,
      -82
    ],
    [
      -27,
      -57
    ],
    [
      0,
      -74
    ],
    [
      33,
      -278
    ],
    [
      10,
      -12
    ],
    [
      -5,
      -30
    ],
    [
      -13,
      -16
    ],
    [
      -83,
      -2
    ],
    [
      -97,
      -27
    ],
    [
      -37,
      -45
    ],
    [
      -44,
      -113
    ],
    [
      -3,
      -29
    ],
    [
      33,
      -66
    ],
    [
      72,
      -39
    ],
    [
      27,
      -52
    ],
    [
      2,
      -32
    ],
    [
      -106,
      -66
    ],
    [
      65,
      -244
    ],
    [
      29,
      -58
    ],
    [
      74,
      -94
    ],
    [
      -6,
      -20
    ],
    [
      -21,
      -13
    ],
    [
      -74,
      -4
    ],
    [
      -10,
      -11
    ],
    [
      -15,
      -70
    ],
    [
      -109,
      -11
    ],
    [
      -234,
      170
    ],
    [
      -198,
      98
    ],
    [
      -36,
      69
    ],
    [
      4,
      56
    ],
    [
      -23,
      67
    ],
    [
      -55,
      14
    ],
    [
      -104,
      71
    ],
    [
      -34,
      44
    ],
    [
      -118,
      58
    ],
    [
      -74,
      51
    ],
    [
      -101,
      186
    ],
    [
      -186,
      221
    ],
    [
      -154,
      147
    ],
    [
      -53,
      34
    ],
    [
      -213,
      91
    ],
    [
      -170,
      39
    ],
    [
      -72,
      30
    ],
    [
      -141,
      100
    ],
    [
      -53,
      25
    ],
    [
      -58,
      9
    ],
    [
      -197,
      -23
    ],
    [
      -36,
      -20
    ],
    [
      -127,
      116
    ],
    [
      -225,
      37
    ],
    [
      -109,
      48
    ],
    [
      -146,
      105
    ],
    [
      -101,
      44
    ],
    [
      -104,
      -4
    ],
    [
      -53,
      -39
    ],
    [
      -76,
      -34
    ],
    [
      -63,
      98
    ],
    [
      -94,
      44
    ],
    [
      -76,
      4
    ],
    [
      -76,
      -45
    ],
    [
      -2,
      -14
    ],
    [
      11,
      -10
    ],
    [
      -35,
      -54
    ],
    [
      -172,
      82
    ],
    [
      -100,
      4
    ],
    [
      -65,
      -16
    ],
    [
      -45,
      -26
    ],
    [
      -99,
      -85
    ],
    [
      -322,
      -362
    ],
    [
      -71,
      -161
    ],
    [
      -158,
      -181
    ],
    [
      -31,
      -74
    ],
    [
      -48,
      -49
    ],
    [
      -170,
      -50
    ],
    [
      -138,
      38
    ],
    [
      -99,
      -1
    ],
    [
      -140,
      45
    ],
    [
      -101,
      46
    ],
    [
      -101,
      18
    ],
    [
      -37,
      -5
    ],
    [
      -42,
      -23
    ],
    [
      -35,
      -63
    ],
    [
      -50,
      -18
    ],
    [
      -96,
      22
    ],
    [
      -109,
      3
    ],
    [
      -55,
      -10
    ],
    [
      -81,
      -60
    ],
    [
      -70,
      -79
    ],
    [
      -18,
      -75
    ],
    [
      1,
      -44
    ],
    [
      45,
      -32
    ],
    [
      36,
      -42
    ],
    [
      -18,
      -19
    ],
    [
      -35,
      11
    ],
    [
      -171,
      115
    ],
    [
      -230,
      105
    ],
    [
      -266,
      83
    ],
    [
      -108,
      23
    ],
    [
      -116,
      10
    ],
    [
      -148,
      -15
    ],
    [
      -113,
      -54
    ],
    [
      -23,
      -21
    ],
    [
      -47,
      -5
    ],
    [
      -191,
      69
    ],
    [
      -59,
      -2
    ],
    [
      -63,
      -30
    ],
    [
      -44,
      -75
    ],
    [
      -23,
      -21
    ],
    [
      -74,
      -7
    ],
    [
      -34,
      28
    ],
    [
      -119,
      -48
    ],
    [
      -194,
      -197
    ],
    [
      -43,
      -67
    ],
    [
      -43,
      -399
    ],
    [
      -84,
      -129
    ],
    [
      -30,
      -212
    ],
    [
      17,
      -53
    ],
    [
      -62,
      -59
    ],
    [
      -31,
      -6
    ],
    [
      -133,
      3
    ],
    [
      -30,
      42
    ],
    [
      -73,
      -12
    ],
    [
      -45,
      -29
    ],
    [
      -19,
      -31
    ],
    [
      -3,
      -23
    ],
    [
      9,
      -25
    ],
    [
      -5,
      -25
    ],
    [
      -19,
      -58
    ],
    [
      -39,
      -52
    ],
    [
      -82,
      -28
    ],
    [
      -53,
      21
    ],
    [
      -67,
      -17
    ],
    [
      -36,
      -79
    ],
    [
      -52,
      19
    ],
    [
      -41,
      37
    ],
    [
      -53,
      -14
    ],
    [
      -19,
      -34
    ],
    [
      -25,
      -82
    ],
    [
      -10,
      -116
    ],
    [
      -42,
      -73
    ],
    [
      -20,
      -18
    ],
    [
      -21,
      -2
    ],
    [
      -150,
      61
    ],
    [
      -52,
      -33
    ],
    [
      -26,
      -51
    ],
    [
      6,
      -169
    ],
    [
      -14,
      -114
    ],
    [
      -31,
      -6
    ],
    [
      -91,
      30
    ],
    [
      -47,
      -19
    ],
    [
      -24,
      -24
    ],
    [
      -14,
      -33
    ],
    [
      56,
      -285
    ],
    [
      66,
      -103
    ],
    [
      -50,
      -51
    ],
    [
      -15,
      53
    ],
    [
      -36,
      48
    ],
    [
      -48,
      36
    ],
    [
      -78,
      -16
    ],
    [
      -90,
      42
    ],
    [
      -108,
      92
    ],
    [
      -8,
      42
    ],
    [
      -34,
      60
    ],
    [
      -65,
      8
    ],
    [
      -50,
      138
    ],
    [
      -2,
      68
    ],
    [
      13,
      49
    ],
    [
      54,
      51
    ],
    [
      82,
      -23
    ],
    [
      66,
      30
    ],
    [
      54,
      76
    ],
    [
      1,
      50
    ],
    [
      -19,
      13
    ],
    [
      -12,
      71
    ],
    [
      45,
      62
    ],
    [
      79,
      27
    ],
    [
      72,
      110
    ],
    [
      -9,
      117
    ],
    [
      20,
      136
    ],
    [
      70,
      11
    ],
    [
      27,
      -31
    ],
    [
      74,
      -29
    ],
    [
      73,
      21
    ],
    [
      33,
      75
    ],
    [
      -21,
      25
    ],
    [
      -4,
      22
    ],
    [
      25,
      49
    ],
    [
      30,
      29
    ],
    [
      39,
      -7
    ],
    [
      32,
      27
    ],
    [
      9,
      39
    ],
    [
      -18,
      65
    ],
    [
      19,
      69
    ],
    [
      28,
      31
    ],
    [
      21,
      4
    ],
    [
      35,
      26
    ],
    [
      49,
      95
    ],
    [
      5,
      29
    ],
    [
      -7,
      132
    ],
    [
      -17,
      57
    ],
    [
      -43,
      55
    ],
    [
      -63,
      46
    ],
    [
      -72,
      30
    ],
    [
      -80,
      -13
    ],
    [
      -50,
      -100
    ],
    [
      -52,
      -63
    ],
    [
      -52,
      -4
    ],
    [
      -63,
      -57
    ],
    [
      -38,
      -60
    ],
    [
      4,
      -123
    ],
    [
      -69,
      -69
    ],
    [
      -385,
      84
    ],
    [
      -38,
      25
    ],
    [
      -71,
      117
    ],
    [
      -37,
      23
    ],
    [
      -45,
      -4
    ],
    [
      -121,
      -52
    ],
    [
      -11,
      -41
    ],
    [
      10,
      -181
    ],
    [
      26,
      -21
    ],
    [
      13,
      -40
    ],
    [
      7,
      -76
    ],
    [
      -63,
      -123
    ],
    [
      -102,
      -24
    ],
    [
      21,
      -83
    ],
    [
      -103,
      -71
    ],
    [
      -11,
      -36
    ],
    [
      15,
      -34
    ],
    [
      -5,
      -27
    ],
    [
      -86,
      -112
    ],
    [
      -16,
      -94
    ],
    [
      15,
      -50
    ],
    [
      -162,
      -89
    ],
    [
      -33,
      13
    ],
    [
      -94,
      -3
    ],
    [
      -45,
      -14
    ],
    [
      -87,
      -86
    ],
    [
      -118,
      -15
    ],
    [
      -103,
      -169
    ],
    [
      -14,
      16
    ],
    [
      -2,
      73
    ],
    [
      -12,
      51
    ],
    [
      -60,
      34
    ],
    [
      -16,
      68
    ],
    [
      11,
      103
    ],
    [
      24,
      66
    ],
    [
      13,
      179
    ],
    [
      -32,
      95
    ],
    [
      -1,
      192
    ],
    [
      -35,
      135
    ],
    [
      -85,
      155
    ],
    [
      -71,
      52
    ],
    [
      -64,
      -12
    ],
    [
      -43,
      -22
    ],
    [
      -62,
      -91
    ],
    [
      -28,
      -69
    ],
    [
      -7,
      -80
    ],
    [
      4,
      -164
    ],
    [
      -30,
      -93
    ],
    [
      -2,
      -57
    ],
    [
      10,
      -40
    ],
    [
      35,
      -13
    ],
    [
      13,
      -26
    ],
    [
      -23,
      -82
    ],
    [
      -22,
      -29
    ],
    [
      -45,
      -104
    ],
    [
      56,
      -75
    ],
    [
      -184,
      -55
    ],
    [
      -20,
      -18
    ],
    [
      -1,
      -24
    ],
    [
      -61,
      -69
    ],
    [
      -91,
      -31
    ],
    [
      -219,
      -146
    ],
    [
      -126,
      -187
    ],
    [
      -138,
      -272
    ],
    [
      -56,
      -77
    ],
    [
      -147,
      -270
    ],
    [
      -130,
      -370
    ],
    [
      -89,
      -192
    ],
    [
      -69,
      -77
    ],
    [
      -69,
      -131
    ],
    [
      -6,
      -35
    ],
    [
      6,
      -40
    ],
    [
      16,
      -37
    ],
    [
      21,
      -14
    ],
    [
      -9,
      -34
    ],
    [
      -43,
      -73
    ],
    [
      -76,
      -56
    ],
    [
      -44,
      -58
    ],
    [
      -25,
      -83
    ],
    [
      -144,
      -144
    ],
    [
      -38,
      -144
    ],
    [
      -162,
      -242
    ],
    [
      -29,
      -80
    ],
    [
      -8,
      -89
    ],
    [
      -135,
      -147
    ],
    [
      -241,
      -361
    ],
    [
      -187,
      -239
    ],
    [
      -74,
      -56
    ],
    [
      -114,
      -129
    ],
    [
      -78,
      -144
    ],
    [
      -43,
      -107
    ],
    [
      -14,
      -65
    ],
    [
      10,
      -68
    ],
    [
      51,
      -82
    ],
    [
      50,
      -48
    ],
    [
      43,
      6
    ],
    [
      -42,
      -15
    ]
  ],
  [
    [
      269878,
      168739
    ],
    [
      139,
      -20
    ],
    [
      65,
      -21
    ],
    [
      20,
      -13
    ],
    [
      64,
      -93
    ],
    [
      2,
      -130
    ],
    [
      -20,
      -56
    ],
    [
      -19,
      -191
    ],
    [
      7,
      -46
    ],
    [
      29,
      -57
    ],
    [
      84,
      -79
    ],
    [
      5,
      -28
    ],
    [
      -88,
      31
    ],
    [
      -105,
      -49
    ],
    [
      -80,
      57
    ],
    [
      -35,
      58
    ],
    [
      -88,
      110
    ],
    [
      -79,
      64
    ],
    [
      -32,
      40
    ],
    [
      -8,
      28
    ],
    [
      -24,
      262
    ],
    [
      29,
      88
    ],
    [
      45,
      45
    ],
    [
      31,
      9
    ],
    [
      58,
      -9
    ]
  ],
  [
    [
      269569,
      167633
    ],
    [
      -113,
      -64
    ],
    [
      -92,
      -16
    ],
    [
      -109,
      40
    ],
    [
      -9,
      60
    ],
    [
      11,
      56
    ],
    [
      66,
      162
    ],
    [
      18,
      21
    ],
    [
      103,
      40
    ],
    [
      127,
      -51
    ],
    [
      72,
      -79
    ],
    [
      -74,
      6
    ],
    [
      -18,
      -11
    ],
    [
      -17,
      -28
    ],
    [
      -8,
      -26
    ],
    [
      4,
      -34
    ],
    [
      39,
      -76
    ]
  ],
  [
    [
      288390,
      152932
    ],
    [
      -34,
      -41
    ],
    [
      -9,
      -22
    ],
    [
      -1,
      -26
    ],
    [
      7,
      -35
    ],
    [
      14,
      -31
    ],
    [
      38,
      -54
    ],
    [
      -19,
      -77
    ],
    [
      -61,
      -107
    ],
    [
      -95,
      -105
    ],
    [
      -40,
      -80
    ],
    [
      -47,
      -186
    ],
    [
      -30,
      -103
    ],
    [
      0,
      -45
    ],
    [
      9,
      -163
    ],
    [
      -4,
      -50
    ],
    [
      -19,
      -114
    ],
    [
      -30,
      -85
    ],
    [
      -18,
      -122
    ],
    [
      3,
      -23
    ],
    [
      6,
      -24
    ],
    [
      47,
      -134
    ],
    [
      19,
      -108
    ],
    [
      0,
      -54
    ],
    [
      -83,
      -208
    ],
    [
      -1,
      -115
    ],
    [
      -54,
      -126
    ],
    [
      -82,
      -261
    ],
    [
      3,
      -205
    ],
    [
      -46,
      -172
    ],
    [
      -23,
      -47
    ],
    [
      -127,
      -115
    ],
    [
      -8,
      -11
    ],
    [
      -23,
      -46
    ],
    [
      -9,
      -12
    ],
    [
      -71,
      -65
    ],
    [
      -39,
      -48
    ],
    [
      -9,
      -12
    ],
    [
      -24,
      -83
    ],
    [
      -30,
      -25
    ],
    [
      -76,
      -15
    ],
    [
      -12,
      2
    ],
    [
      -21,
      11
    ],
    [
      -30,
      31
    ],
    [
      -41,
      19
    ],
    [
      -44,
      -1
    ],
    [
      -38,
      -15
    ],
    [
      -9,
      -5
    ],
    [
      -31,
      -29
    ],
    [
      -66,
      -63
    ],
    [
      -25,
      -49
    ],
    [
      -64,
      -95
    ],
    [
      -38,
      -27
    ],
    [
      6,
      74
    ],
    [
      30,
      51
    ],
    [
      44,
      18
    ],
    [
      33,
      60
    ],
    [
      -84,
      86
    ],
    [
      -1,
      123
    ],
    [
      -36,
      101
    ],
    [
      -67,
      -18
    ],
    [
      -51,
      36
    ],
    [
      -10,
      52
    ],
    [
      63,
      64
    ],
    [
      88,
      20
    ],
    [
      10,
      68
    ],
    [
      -44,
      47
    ],
    [
      2,
      16
    ],
    [
      106,
      74
    ],
    [
      120,
      -45
    ],
    [
      75,
      80
    ],
    [
      24,
      39
    ],
    [
      17,
      63
    ],
    [
      -4,
      69
    ],
    [
      -36,
      59
    ],
    [
      -23,
      16
    ],
    [
      -125,
      22
    ],
    [
      -74,
      62
    ],
    [
      -58,
      22
    ],
    [
      -79,
      -3
    ],
    [
      -26,
      -44
    ],
    [
      -104,
      -6
    ],
    [
      -138,
      -96
    ],
    [
      -63,
      -103
    ],
    [
      -78,
      -25
    ],
    [
      -59,
      21
    ],
    [
      -25,
      -8
    ],
    [
      -83,
      -97
    ],
    [
      -34,
      -106
    ],
    [
      6,
      -74
    ],
    [
      41,
      -40
    ],
    [
      112,
      -55
    ],
    [
      88,
      -58
    ],
    [
      12,
      -15
    ],
    [
      -98,
      -36
    ],
    [
      3,
      -42
    ],
    [
      34,
      -82
    ],
    [
      -5,
      -50
    ],
    [
      -11,
      -9
    ],
    [
      -23,
      35
    ],
    [
      -39,
      20
    ],
    [
      -124,
      -3
    ],
    [
      -68,
      -21
    ],
    [
      -60,
      -53
    ],
    [
      -17,
      -36
    ],
    [
      -9,
      -50
    ],
    [
      -42,
      -51
    ],
    [
      -78,
      -135
    ],
    [
      -40,
      -165
    ],
    [
      -8,
      -215
    ],
    [
      69,
      -154
    ],
    [
      -81,
      -314
    ],
    [
      -11,
      -72
    ],
    [
      -29,
      -65
    ],
    [
      -22,
      -29
    ],
    [
      -86,
      -54
    ],
    [
      -20,
      -27
    ],
    [
      -50,
      -110
    ],
    [
      25,
      -54
    ],
    [
      -110,
      -35
    ],
    [
      -72,
      -56
    ],
    [
      -149,
      -53
    ],
    [
      -152,
      -20
    ],
    [
      -235,
      -88
    ],
    [
      -79,
      -67
    ],
    [
      -86,
      -136
    ],
    [
      -74,
      -217
    ],
    [
      -88,
      -160
    ],
    [
      -30,
      -470
    ],
    [
      65,
      -360
    ],
    [
      -63,
      -276
    ],
    [
      -123,
      -19
    ],
    [
      -57,
      -88
    ],
    [
      -102,
      -52
    ],
    [
      -2,
      -34
    ],
    [
      11,
      -5
    ],
    [
      7,
      -66
    ],
    [
      -14,
      -153
    ],
    [
      12,
      -14
    ],
    [
      77,
      -52
    ],
    [
      0,
      -53
    ],
    [
      -118,
      -128
    ],
    [
      -95,
      -66
    ],
    [
      -22,
      -1
    ],
    [
      -33,
      4
    ],
    [
      -27,
      -14
    ],
    [
      -106,
      -109
    ],
    [
      -40,
      -93
    ],
    [
      -1,
      -66
    ],
    [
      19,
      -43
    ],
    [
      -56,
      -116
    ],
    [
      -31,
      75
    ],
    [
      -85,
      38
    ],
    [
      -45,
      2
    ],
    [
      -36,
      -12
    ],
    [
      -66,
      -53
    ],
    [
      -52,
      -80
    ],
    [
      -39,
      -130
    ],
    [
      -12,
      -129
    ],
    [
      -28,
      -72
    ],
    [
      -92,
      -89
    ],
    [
      -34,
      -17
    ],
    [
      -32,
      66
    ],
    [
      -49,
      -26
    ],
    [
      -73,
      -132
    ],
    [
      -69,
      -166
    ],
    [
      -65,
      -59
    ],
    [
      -60,
      -27
    ],
    [
      -28,
      -40
    ],
    [
      -11,
      -33
    ],
    [
      -8,
      -144
    ],
    [
      30,
      -142
    ],
    [
      52,
      -143
    ],
    [
      16,
      -70
    ],
    [
      -52,
      -27
    ],
    [
      -90,
      -19
    ],
    [
      -10,
      -13
    ],
    [
      -225,
      -6
    ],
    [
      -10,
      -2
    ],
    [
      -19,
      0
    ],
    [
      -4,
      0
    ],
    [
      -414,
      -16
    ],
    [
      -44,
      -2
    ],
    [
      -8,
      0
    ],
    [
      -211,
      -9
    ],
    [
      -16,
      -1
    ],
    [
      -134,
      -6
    ],
    [
      -100,
      -4
    ],
    [
      -120,
      -9
    ],
    [
      -277,
      -12
    ],
    [
      -494,
      -17
    ],
    [
      -108,
      -9
    ],
    [
      -98,
      0
    ],
    [
      -507,
      -23
    ],
    [
      -105,
      -2
    ],
    [
      -589,
      -27
    ],
    [
      -1157,
      -46
    ],
    [
      -184,
      -5
    ],
    [
      -213,
      -8
    ],
    [
      -1596,
      -49
    ],
    [
      -287,
      -16
    ],
    [
      0,
      84
    ],
    [
      0,
      96
    ],
    [
      0,
      91
    ],
    [
      0,
      34
    ],
    [
      -1,
      41
    ],
    [
      2,
      125
    ],
    [
      -67,
      -1
    ],
    [
      -32,
      0
    ],
    [
      -549,
      -3
    ],
    [
      -145,
      -2
    ],
    [
      -4,
      1
    ],
    [
      -51,
      0
    ],
    [
      -7,
      -1
    ],
    [
      -332,
      3
    ],
    [
      -9,
      1
    ],
    [
      -398,
      -2
    ],
    [
      -30,
      1
    ],
    [
      -251,
      -1
    ],
    [
      -125,
      1
    ],
    [
      -185,
      0
    ],
    [
      -202,
      2
    ],
    [
      -4,
      -1
    ],
    [
      -3,
      -1
    ],
    [
      -95,
      1
    ],
    [
      -32,
      1
    ],
    [
      -50,
      0
    ],
    [
      -51,
      -1
    ],
    [
      -64,
      0
    ],
    [
      -100,
      0
    ],
    [
      -148,
      0
    ],
    [
      -248,
      -2
    ],
    [
      -25,
      0
    ],
    [
      -427,
      -2
    ],
    [
      -12,
      1
    ],
    [
      -457,
      -3
    ],
    [
      -4,
      1
    ],
    [
      -73,
      -1
    ],
    [
      -12,
      0
    ],
    [
      -40,
      0
    ],
    [
      -76,
      0
    ],
    [
      -16,
      0
    ],
    [
      -378,
      0
    ],
    [
      -130,
      0
    ],
    [
      -2,
      0
    ],
    [
      -126,
      0
    ],
    [
      -84,
      0
    ],
    [
      -413,
      2
    ],
    [
      -15,
      0
    ],
    [
      -70,
      0
    ],
    [
      -441,
      3
    ],
    [
      0,
      0
    ],
    [
      -84,
      1
    ],
    [
      -254,
      4
    ],
    [
      -430,
      1
    ],
    [
      -2,
      0
    ],
    [
      -13,
      0
    ],
    [
      -459,
      -4
    ],
    [
      -43,
      0
    ],
    [
      -202,
      1
    ],
    [
      -1209,
      -5
    ],
    [
      -90,
      0
    ],
    [
      -618,
      1
    ],
    [
      -6,
      0
    ],
    [
      -539,
      2
    ],
    [
      -8,
      0
    ],
    [
      -269,
      2
    ],
    [
      0,
      0
    ],
    [
      -5,
      0
    ],
    [
      -14,
      0
    ],
    [
      -98,
      0
    ],
    [
      -7,
      0
    ],
    [
      244,
      180
    ],
    [
      308,
      254
    ],
    [
      193,
      187
    ],
    [
      307,
      360
    ],
    [
      110,
      180
    ],
    [
      80,
      176
    ],
    [
      132,
      424
    ],
    [
      282,
      620
    ],
    [
      57,
      152
    ],
    [
      25,
      96
    ],
    [
      97,
      119
    ],
    [
      318,
      455
    ],
    [
      97,
      153
    ],
    [
      149,
      271
    ],
    [
      176,
      415
    ],
    [
      126,
      349
    ],
    [
      65,
      267
    ],
    [
      -3,
      53
    ],
    [
      42,
      84
    ],
    [
      78,
      225
    ],
    [
      61,
      267
    ],
    [
      46,
      439
    ],
    [
      28,
      183
    ],
    [
      36,
      135
    ],
    [
      13,
      84
    ],
    [
      -18,
      315
    ],
    [
      13,
      53
    ],
    [
      54,
      143
    ],
    [
      38,
      203
    ],
    [
      9,
      201
    ],
    [
      -7,
      318
    ],
    [
      -13,
      155
    ],
    [
      -5,
      363
    ],
    [
      5,
      190
    ],
    [
      -17,
      179
    ],
    [
      -11,
      260
    ],
    [
      -52,
      509
    ],
    [
      -32,
      202
    ],
    [
      -59,
      249
    ],
    [
      -30,
      57
    ],
    [
      -2,
      70
    ],
    [
      -22,
      121
    ],
    [
      -133,
      386
    ],
    [
      -182,
      434
    ],
    [
      -407,
      889
    ],
    [
      -62,
      163
    ],
    [
      -139,
      428
    ],
    [
      -70,
      259
    ],
    [
      -102,
      440
    ],
    [
      -54,
      172
    ],
    [
      -210,
      451
    ],
    [
      -47,
      123
    ],
    [
      -46,
      176
    ],
    [
      -13,
      115
    ],
    [
      1,
      84
    ],
    [
      12,
      104
    ],
    [
      47,
      140
    ],
    [
      97,
      153
    ],
    [
      146,
      194
    ],
    [
      104,
      159
    ],
    [
      84,
      182
    ],
    [
      39,
      131
    ],
    [
      33,
      195
    ],
    [
      -1,
      182
    ],
    [
      -14,
      109
    ],
    [
      -59,
      251
    ],
    [
      -13,
      208
    ],
    [
      -78,
      388
    ],
    [
      -103,
      222
    ],
    [
      -94,
      152
    ],
    [
      -36,
      80
    ],
    [
      -31,
      111
    ],
    [
      1,
      75
    ],
    [
      30,
      72
    ],
    [
      42,
      57
    ],
    [
      275,
      223
    ],
    [
      87,
      101
    ],
    [
      45,
      71
    ],
    [
      104,
      201
    ],
    [
      106,
      240
    ],
    [
      88,
      137
    ],
    [
      57,
      156
    ],
    [
      40,
      148
    ],
    [
      85,
      99
    ],
    [
      57,
      155
    ],
    [
      81,
      176
    ],
    [
      161,
      273
    ],
    [
      86,
      409
    ],
    [
      20,
      146
    ],
    [
      -1,
      102
    ],
    [
      -18,
      124
    ],
    [
      1,
      101
    ],
    [
      14,
      129
    ],
    [
      26,
      43
    ],
    [
      26,
      94
    ],
    [
      76,
      348
    ],
    [
      16,
      130
    ],
    [
      -24,
      204
    ],
    [
      -33,
      107
    ],
    [
      -113,
      286
    ],
    [
      -26,
      114
    ],
    [
      11,
      170
    ],
    [
      10,
      38
    ],
    [
      33,
      52
    ],
    [
      82,
      52
    ],
    [
      308,
      107
    ],
    [
      61,
      55
    ],
    [
      201,
      -1
    ],
    [
      76,
      22
    ],
    [
      87,
      77
    ],
    [
      58,
      123
    ],
    [
      22,
      85
    ],
    [
      9,
      256
    ],
    [
      30,
      123
    ],
    [
      0,
      98
    ],
    [
      -26,
      225
    ],
    [
      -7,
      142
    ],
    [
      7,
      81
    ],
    [
      22,
      72
    ],
    [
      40,
      40
    ],
    [
      105,
      34
    ],
    [
      37,
      -61
    ],
    [
      50,
      -34
    ],
    [
      62,
      -24
    ],
    [
      86,
      4
    ],
    [
      63,
      45
    ],
    [
      38,
      63
    ],
    [
      29,
      108
    ],
    [
      28,
      45
    ],
    [
      46,
      38
    ],
    [
      54,
      99
    ],
    [
      18,
      76
    ],
    [
      36,
      31
    ],
    [
      80,
      -4
    ],
    [
      94,
      -46
    ],
    [
      31,
      -31
    ],
    [
      59,
      -106
    ],
    [
      52,
      -32
    ],
    [
      79,
      -6
    ],
    [
      93,
      15
    ],
    [
      106,
      40
    ],
    [
      41,
      30
    ],
    [
      138,
      207
    ],
    [
      11,
      38
    ],
    [
      11,
      128
    ],
    [
      25,
      107
    ],
    [
      48,
      61
    ],
    [
      79,
      204
    ],
    [
      29,
      32
    ],
    [
      146,
      74
    ],
    [
      85,
      79
    ],
    [
      75,
      119
    ],
    [
      27,
      95
    ],
    [
      5,
      78
    ],
    [
      96,
      217
    ],
    [
      191,
      301
    ],
    [
      28,
      -16
    ],
    [
      8,
      -25
    ],
    [
      24,
      -20
    ],
    [
      71,
      1
    ],
    [
      36,
      13
    ],
    [
      110,
      90
    ],
    [
      14,
      58
    ],
    [
      55,
      75
    ],
    [
      54,
      -4
    ],
    [
      71,
      -153
    ],
    [
      -25,
      -89
    ],
    [
      -27,
      -28
    ],
    [
      -79,
      -44
    ],
    [
      -48,
      -62
    ],
    [
      39,
      -120
    ],
    [
      -22,
      -69
    ],
    [
      -32,
      31
    ],
    [
      0,
      72
    ],
    [
      -29,
      58
    ],
    [
      -19,
      3
    ],
    [
      -84,
      -17
    ],
    [
      -48,
      -29
    ],
    [
      -75,
      -160
    ],
    [
      26,
      -103
    ],
    [
      73,
      -70
    ],
    [
      -12,
      -70
    ],
    [
      73,
      -170
    ],
    [
      50,
      -21
    ],
    [
      37,
      -67
    ],
    [
      0,
      -115
    ],
    [
      -21,
      -17
    ],
    [
      -19,
      15
    ],
    [
      -119,
      -20
    ],
    [
      -13,
      -138
    ],
    [
      -48,
      -64
    ],
    [
      -65,
      -63
    ],
    [
      78,
      -102
    ],
    [
      12,
      3
    ],
    [
      10,
      -123
    ],
    [
      1,
      -349
    ],
    [
      -99,
      -27
    ],
    [
      -21,
      -14
    ],
    [
      -73,
      -227
    ],
    [
      -29,
      -48
    ],
    [
      -18,
      -71
    ],
    [
      -17,
      -183
    ],
    [
      4,
      -128
    ],
    [
      51,
      -153
    ],
    [
      23,
      -152
    ],
    [
      -19,
      -107
    ],
    [
      24,
      -31
    ],
    [
      42,
      -28
    ],
    [
      88,
      -17
    ],
    [
      59,
      5
    ],
    [
      29,
      21
    ],
    [
      13,
      111
    ],
    [
      47,
      176
    ],
    [
      184,
      413
    ],
    [
      66,
      67
    ],
    [
      12,
      121
    ],
    [
      -117,
      9
    ],
    [
      -31,
      -21
    ],
    [
      -26,
      53
    ],
    [
      127,
      158
    ],
    [
      32,
      66
    ],
    [
      68,
      254
    ],
    [
      -10,
      47
    ],
    [
      11,
      53
    ],
    [
      140,
      116
    ],
    [
      89,
      9
    ],
    [
      25,
      -75
    ],
    [
      28,
      -145
    ],
    [
      -9,
      -16
    ],
    [
      -29,
      4
    ],
    [
      -69,
      -43
    ],
    [
      -28,
      -191
    ],
    [
      -6,
      -142
    ],
    [
      20,
      -48
    ],
    [
      -48,
      -266
    ],
    [
      -22,
      -71
    ],
    [
      -33,
      -58
    ],
    [
      -53,
      -19
    ],
    [
      -107,
      -82
    ],
    [
      -82,
      -117
    ],
    [
      -22,
      -60
    ],
    [
      -1,
      -149
    ],
    [
      -82,
      -217
    ],
    [
      27,
      -36
    ],
    [
      86,
      -48
    ],
    [
      83,
      -14
    ],
    [
      56,
      10
    ],
    [
      115,
      146
    ],
    [
      4,
      36
    ],
    [
      -6,
      63
    ],
    [
      -21,
      42
    ],
    [
      50,
      122
    ],
    [
      126,
      81
    ],
    [
      61,
      74
    ],
    [
      13,
      78
    ],
    [
      177,
      338
    ],
    [
      15,
      98
    ],
    [
      86,
      123
    ],
    [
      53,
      141
    ],
    [
      89,
      497
    ],
    [
      -17,
      145
    ],
    [
      5,
      205
    ],
    [
      16,
      69
    ],
    [
      57,
      98
    ],
    [
      -2,
      351
    ],
    [
      -29,
      69
    ],
    [
      -23,
      122
    ],
    [
      -18,
      279
    ],
    [
      -32,
      63
    ],
    [
      -9,
      336
    ],
    [
      87,
      261
    ],
    [
      82,
      88
    ],
    [
      105,
      83
    ],
    [
      56,
      68
    ],
    [
      84,
      72
    ],
    [
      65,
      24
    ],
    [
      27,
      -17
    ],
    [
      81,
      10
    ],
    [
      55,
      30
    ],
    [
      41,
      45
    ],
    [
      15,
      38
    ],
    [
      84,
      63
    ],
    [
      133,
      129
    ],
    [
      67,
      27
    ],
    [
      72,
      1
    ],
    [
      199,
      70
    ],
    [
      455,
      -46
    ],
    [
      60,
      -19
    ],
    [
      52,
      -2
    ],
    [
      55,
      40
    ],
    [
      323,
      68
    ],
    [
      221,
      126
    ],
    [
      17,
      72
    ],
    [
      -2,
      51
    ],
    [
      -17,
      57
    ],
    [
      -30,
      32
    ],
    [
      -301,
      55
    ],
    [
      -47,
      -13
    ],
    [
      -4,
      -18
    ],
    [
      36,
      -33
    ],
    [
      34,
      -5
    ],
    [
      -7,
      -10
    ],
    [
      -319,
      132
    ],
    [
      -147,
      166
    ],
    [
      -96,
      130
    ],
    [
      -107,
      328
    ],
    [
      -32,
      130
    ],
    [
      -21,
      218
    ],
    [
      5,
      45
    ],
    [
      35,
      78
    ],
    [
      94,
      105
    ],
    [
      71,
      125
    ],
    [
      20,
      48
    ],
    [
      4,
      41
    ],
    [
      69,
      75
    ],
    [
      236,
      89
    ],
    [
      42,
      35
    ],
    [
      30,
      36
    ],
    [
      25,
      62
    ],
    [
      17,
      76
    ],
    [
      26,
      22
    ],
    [
      62,
      1
    ],
    [
      25,
      23
    ],
    [
      139,
      176
    ],
    [
      17,
      85
    ],
    [
      -9,
      49
    ],
    [
      -44,
      61
    ],
    [
      -161,
      111
    ],
    [
      -106,
      15
    ],
    [
      -233,
      50
    ],
    [
      -133,
      10
    ],
    [
      -14,
      25
    ],
    [
      144,
      36
    ],
    [
      95,
      -10
    ],
    [
      118,
      -44
    ],
    [
      63,
      -24
    ],
    [
      291,
      0
    ],
    [
      70,
      -22
    ],
    [
      73,
      -50
    ],
    [
      222,
      15
    ],
    [
      133,
      -54
    ],
    [
      176,
      11
    ],
    [
      36,
      7
    ],
    [
      55,
      37
    ],
    [
      38,
      65
    ],
    [
      8,
      63
    ],
    [
      -64,
      65
    ],
    [
      -4,
      14
    ],
    [
      66,
      50
    ],
    [
      38,
      15
    ],
    [
      109,
      -48
    ],
    [
      49,
      10
    ],
    [
      40,
      30
    ],
    [
      41,
      -9
    ],
    [
      37,
      -69
    ],
    [
      15,
      -84
    ],
    [
      174,
      -73
    ],
    [
      12,
      -52
    ],
    [
      178,
      -67
    ],
    [
      205,
      -134
    ],
    [
      159,
      -83
    ],
    [
      93,
      -60
    ],
    [
      11,
      -27
    ],
    [
      74,
      -60
    ],
    [
      395,
      -279
    ],
    [
      99,
      17
    ],
    [
      36,
      69
    ],
    [
      40,
      37
    ],
    [
      71,
      2
    ],
    [
      68,
      -45
    ],
    [
      123,
      -57
    ],
    [
      240,
      65
    ],
    [
      203,
      -81
    ],
    [
      100,
      -63
    ],
    [
      281,
      -73
    ],
    [
      99,
      -98
    ],
    [
      79,
      -124
    ],
    [
      120,
      -142
    ],
    [
      90,
      -85
    ],
    [
      54,
      -84
    ],
    [
      12,
      -41
    ],
    [
      -2,
      -104
    ],
    [
      24,
      -137
    ],
    [
      29,
      -79
    ],
    [
      38,
      -58
    ],
    [
      68,
      -58
    ],
    [
      103,
      -49
    ],
    [
      101,
      -9
    ],
    [
      82,
      32
    ],
    [
      19,
      19
    ],
    [
      39,
      7
    ],
    [
      98,
      -16
    ],
    [
      57,
      -29
    ],
    [
      104,
      22
    ],
    [
      199,
      -7
    ],
    [
      152,
      -54
    ],
    [
      142,
      -132
    ],
    [
      119,
      -154
    ],
    [
      87,
      -85
    ],
    [
      179,
      -118
    ],
    [
      91,
      -21
    ],
    [
      80,
      7
    ],
    [
      90,
      -46
    ],
    [
      93,
      -1
    ],
    [
      80,
      18
    ],
    [
      125,
      -126
    ],
    [
      150,
      -85
    ],
    [
      124,
      -95
    ],
    [
      228,
      -140
    ],
    [
      148,
      -40
    ],
    [
      103,
      27
    ],
    [
      17,
      13
    ],
    [
      6,
      42
    ],
    [
      38,
      -1
    ],
    [
      92,
      -81
    ],
    [
      28,
      -5
    ],
    [
      93,
      81
    ],
    [
      40,
      -12
    ],
    [
      56,
      -103
    ],
    [
      165,
      -229
    ],
    [
      64,
      -51
    ],
    [
      41,
      -51
    ],
    [
      14,
      -44
    ],
    [
      109,
      -82
    ],
    [
      66,
      -20
    ],
    [
      16,
      -20
    ],
    [
      17,
      -38
    ],
    [
      -32,
      -103
    ],
    [
      -126,
      -67
    ],
    [
      1,
      -51
    ],
    [
      33,
      -86
    ],
    [
      111,
      -174
    ],
    [
      13,
      -1
    ],
    [
      66,
      -156
    ],
    [
      4,
      -71
    ],
    [
      22,
      -44
    ],
    [
      20,
      -25
    ],
    [
      57,
      -11
    ],
    [
      56,
      -106
    ],
    [
      111,
      -38
    ],
    [
      1,
      -14
    ],
    [
      -18,
      -17
    ],
    [
      5,
      -64
    ],
    [
      54,
      -220
    ],
    [
      49,
      -63
    ],
    [
      38,
      -156
    ],
    [
      -2,
      -48
    ],
    [
      56,
      -123
    ],
    [
      17,
      -8
    ],
    [
      28,
      -49
    ],
    [
      29,
      -83
    ],
    [
      -29,
      -25
    ],
    [
      -84,
      22
    ],
    [
      -73,
      43
    ],
    [
      -195,
      68
    ],
    [
      -89,
      67
    ],
    [
      -50,
      85
    ],
    [
      -163,
      60
    ],
    [
      -176,
      -94
    ],
    [
      -43,
      -48
    ],
    [
      -58,
      -116
    ],
    [
      -4,
      -25
    ],
    [
      40,
      -112
    ],
    [
      57,
      -35
    ],
    [
      21,
      -28
    ],
    [
      -24,
      -59
    ],
    [
      -16,
      0
    ],
    [
      -56,
      -72
    ],
    [
      32,
      -279
    ],
    [
      25,
      -83
    ],
    [
      30,
      -59
    ],
    [
      39,
      -45
    ],
    [
      106,
      -59
    ],
    [
      29,
      -90
    ],
    [
      25,
      -25
    ],
    [
      211,
      -124
    ],
    [
      165,
      -41
    ],
    [
      39,
      27
    ],
    [
      -10,
      -117
    ],
    [
      -32,
      -113
    ],
    [
      34,
      -79
    ],
    [
      71,
      -91
    ],
    [
      5,
      -47
    ],
    [
      45,
      -114
    ],
    [
      -25,
      -171
    ],
    [
      35,
      -137
    ],
    [
      -48,
      -81
    ],
    [
      5,
      -64
    ],
    [
      34,
      -124
    ],
    [
      34,
      -55
    ],
    [
      54,
      -58
    ],
    [
      -17,
      -180
    ],
    [
      -65,
      -267
    ],
    [
      -92,
      -170
    ],
    [
      -36,
      -155
    ],
    [
      -6,
      -100
    ],
    [
      10,
      -224
    ],
    [
      25,
      -119
    ],
    [
      2,
      -62
    ],
    [
      -50,
      -187
    ],
    [
      3,
      -209
    ],
    [
      -47,
      -305
    ],
    [
      -2,
      -112
    ],
    [
      13,
      -104
    ],
    [
      16,
      -44
    ],
    [
      0,
      -33
    ],
    [
      -62,
      -236
    ],
    [
      -8,
      -106
    ],
    [
      14,
      -129
    ],
    [
      -23,
      -55
    ],
    [
      -35,
      -23
    ],
    [
      -42,
      19
    ],
    [
      -63,
      2
    ],
    [
      -47,
      -36
    ],
    [
      -145,
      -190
    ],
    [
      -64,
      -54
    ],
    [
      -25,
      -49
    ],
    [
      -33,
      -113
    ],
    [
      -100,
      -144
    ],
    [
      -102,
      -51
    ],
    [
      115,
      143
    ],
    [
      -16,
      59
    ],
    [
      -88,
      40
    ],
    [
      -84,
      9
    ],
    [
      -107,
      -26
    ],
    [
      -43,
      -21
    ],
    [
      -82,
      -89
    ],
    [
      -66,
      -98
    ],
    [
      -58,
      -154
    ],
    [
      -20,
      -121
    ],
    [
      -5,
      -94
    ],
    [
      -71,
      -309
    ],
    [
      -6,
      -214
    ],
    [
      6,
      -52
    ],
    [
      -27,
      -135
    ],
    [
      -77,
      -106
    ],
    [
      -17,
      -56
    ],
    [
      5,
      -71
    ],
    [
      32,
      -94
    ],
    [
      -87,
      -15
    ],
    [
      -102,
      11
    ],
    [
      -148,
      -28
    ],
    [
      -152,
      -117
    ],
    [
      -42,
      -115
    ],
    [
      40,
      -195
    ],
    [
      -326,
      -20
    ],
    [
      -15,
      -20
    ],
    [
      -87,
      -26
    ],
    [
      -123,
      0
    ],
    [
      -211,
      28
    ],
    [
      -99,
      -55
    ],
    [
      -34,
      -33
    ],
    [
      -6,
      -32
    ],
    [
      -68,
      -88
    ],
    [
      -42,
      -11
    ],
    [
      -39,
      -92
    ],
    [
      -25,
      -88
    ],
    [
      -4,
      -84
    ],
    [
      -84,
      -38
    ],
    [
      -48,
      -140
    ],
    [
      -6,
      -312
    ],
    [
      -43,
      -507
    ],
    [
      -16,
      -76
    ],
    [
      -82,
      -126
    ],
    [
      -48,
      7
    ],
    [
      -6,
      -12
    ],
    [
      9,
      -63
    ],
    [
      77,
      -259
    ],
    [
      152,
      -314
    ],
    [
      64,
      -63
    ],
    [
      230,
      -141
    ],
    [
      41,
      59
    ],
    [
      30,
      11
    ],
    [
      120,
      -84
    ],
    [
      41,
      -13
    ],
    [
      142,
      -82
    ],
    [
      42,
      -10
    ],
    [
      5,
      46
    ],
    [
      225,
      -119
    ],
    [
      115,
      -155
    ],
    [
      172,
      -50
    ],
    [
      19,
      4
    ],
    [
      61,
      58
    ],
    [
      182,
      218
    ],
    [
      118,
      157
    ],
    [
      166,
      251
    ],
    [
      48,
      7
    ],
    [
      24,
      61
    ],
    [
      -13,
      45
    ],
    [
      58,
      65
    ],
    [
      79,
      60
    ],
    [
      46,
      9
    ],
    [
      12,
      -26
    ],
    [
      35,
      -27
    ],
    [
      136,
      27
    ],
    [
      51,
      65
    ],
    [
      25,
      76
    ],
    [
      28,
      52
    ],
    [
      100,
      153
    ],
    [
      7,
      40
    ],
    [
      -14,
      22
    ],
    [
      -27,
      12
    ],
    [
      43,
      110
    ],
    [
      63,
      96
    ],
    [
      50,
      9
    ],
    [
      25,
      29
    ],
    [
      4,
      20
    ],
    [
      -91,
      75
    ],
    [
      -74,
      -51
    ],
    [
      -148,
      -156
    ],
    [
      -46,
      15
    ],
    [
      166,
    ],