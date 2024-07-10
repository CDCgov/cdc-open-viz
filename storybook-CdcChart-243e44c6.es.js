import { r as de, R as r } from "./storybook-index-45401197.es.js";
import { v as ep, a as Py, i as tp, b as np, g as Ry } from "./storybook-isSolr-cb863e7a.es.js";
import { _ as Ur, P as Ny, D as _y, C as Dy, A as Oy, b as bi, F as rp, g as Fy } from "./storybook-Filters-8ab680b5.es.js";
import { L as Ud, a as My } from "./storybook-coveUpdateWorker-86b5b065.es.js";
import { B as fs } from "./storybook-Button-d74e310e.es.js";
import { p as zy, P as Fe } from "./storybook-index-43433e35.es.js";
import { d as Iy } from "./storybook-debounce-cc216a80.es.js";
import { a as $y } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as ap } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Li, T as By } from "./storybook-index-e5bf02db.es.js";
import { _ as pn } from "./storybook-extends-70f3d2a3.es.js";
import { p as ip, e as Si, s as Br, c as Vt, h as op, a as mc, f as Gn, t as Ru, i as $o, m as Ed, j as lp, k as qn, l as sp, n as Hy, o as Wy, G as Vy, q as Iu, r as dr, u as $u, g as jo, T as kt, b as Bu, I as up } from "./storybook-InputToggle-375413f7.es.js";
import { t as jy, a as Cn, f as Tf, L as cp, b as Xl, g as Ei, S as Uy, M as kd, D as Ky } from "./storybook-DataTable-6aa9804b.es.js";
import { E as Dr, L as Yy } from "./storybook-Loading-f180d060.es.js";
import { b as yc, t as Xy, e as zh, f as dp, g as qy, h as Gy, j as Zy, k as fp, m as Qy, G as at, c as Ln } from "./storybook-Group-e6c0d0df.es.js";
import { s as Jl, t as Ih, a as $h, b as Bh, d as xs, B as kr, c as Kn, C as Jy } from "./storybook-Circle-c4db6c75.es.js";
import { R as eg } from "./storybook-index-633d712d.es.js";
import { e as ps, a as Rn, b as Nn, c as _n, d as Dn, A as Pi } from "./storybook-index-66852bf6.es.js";
import { _ as ar } from "./storybook-lodash-c15d8e1c.es.js";
import { i as Hh, m as wd, c as Wh, j as fu, k as pu, l as hu, n as pp, o as tg, p as hp, b as Vh, d as jh } from "./storybook-year-bedc547d.es.js";
import { a as ft } from "./storybook-Icon-48ed169f.es.js";
import { C as ng, V as rg, a as mp } from "./storybook-footnoteSymbols-a744dcae.es.js";
import { S as Lt, T as Qe, C as ot, D as ag } from "./storybook-DataTableEditor-d2a344ec.es.js";
import { T as ve } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ma } from "./storybook-InputSelect-20478396.es.js";
import { S as Nu } from "./storybook-icon-check-0ef17e76.es.js";
import { A as mu } from "./storybook-Accordion-7a62f73e.es.js";
import { u as ig, p as og, s as lg, a as sg } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as yp } from "./storybook-numberFromString-24623c03.es.js";
import { D as ug } from "./storybook-DataTransform-e292f51b.es.js";
import { c as gp } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Uh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vp(e) {
  let t = e, n = e;
  e.length === 1 && (t = (f, d) => e(f) - d, n = cg(e));
  function i(f, d, u, h) {
    for (u == null && (u = 0), h == null && (h = f.length); u < h; ) {
      const y = u + h >>> 1;
      n(f[y], d) < 0 ? u = y + 1 : h = y;
    }
    return u;
  }
  function a(f, d, u, h) {
    for (u == null && (u = 0), h == null && (h = f.length); u < h; ) {
      const y = u + h >>> 1;
      n(f[y], d) > 0 ? h = y : u = y + 1;
    }
    return u;
  }
  function l(f, d, u, h) {
    u == null && (u = 0), h == null && (h = f.length);
    const y = i(f, d, u, h - 1);
    return y > u && t(f[y - 1], d) > -t(f[y], d) ? y - 1 : y;
  }
  return { left: i, center: l, right: a };
}
function cg(e) {
  return (t, n) => Uh(e(t), n);
}
function* dg(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (i = +i) >= i && (yield i);
  }
}
function fg(e, t) {
  let n = 0, i, a = 0, l = 0;
  if (t === void 0)
    for (let f of e)
      f != null && (f = +f) >= f && (i = f - a, a += i / ++n, l += i * (f - a));
  else {
    let f = -1;
    for (let d of e)
      (d = t(d, ++f, e)) != null && (d = +d) >= d && (i = d - a, a += i / ++n, l += i * (d - a));
  }
  if (n > 1)
    return l / (n - 1);
}
function pg(e, t) {
  const n = fg(e, t);
  return n && Math.sqrt(n);
}
function es(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n < i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function ts(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n > i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function Kh(e, t, n = 0, i = e.length - 1, a = Uh) {
  for (; i > n; ) {
    if (i - n > 600) {
      const u = i - n + 1, h = t - n + 1, y = Math.log(u), v = 0.5 * Math.exp(2 * y / 3), S = 0.5 * Math.sqrt(y * v * (u - v) / u) * (h - u / 2 < 0 ? -1 : 1), R = Math.max(n, Math.floor(t - h * v / u + S)), k = Math.min(i, Math.floor(t + (u - h) * v / u + S));
      Kh(e, t, R, k, a);
    }
    const l = e[t];
    let f = n, d = i;
    for (ql(e, n, t), a(e[i], l) > 0 && ql(e, n, i); f < d; ) {
      for (ql(e, f, d), ++f, --d; a(e[f], l) < 0; )
        ++f;
      for (; a(e[d], l) > 0; )
        --d;
    }
    a(e[n], l) === 0 ? ql(e, n, d) : (++d, ql(e, d, i)), d <= t && (n = d + 1), t <= d && (i = d - 1);
  }
  return e;
}
function ql(e, t, n) {
  const i = e[t];
  e[t] = e[n], e[n] = i;
}
function hg(e, t, n) {
  if (e = Float64Array.from(dg(e, n)), !!(i = e.length)) {
    if ((t = +t) <= 0 || i < 2)
      return ts(e);
    if (t >= 1)
      return es(e);
    var i, a = (i - 1) * t, l = Math.floor(a), f = es(Kh(e, l).subarray(0, l + 1)), d = ts(e.subarray(l + 1));
    return f + (d - f) * (a - l);
  }
}
function mg(e, t) {
  let n = 0, i = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (++n, i += a);
  else {
    let a = -1;
    for (let l of e)
      (l = t(l, ++a, e)) != null && (l = +l) >= l && (++n, i += l);
  }
  if (n)
    return i / n;
}
function yg(e, t) {
  return hg(e, 0.5, t);
}
class xp extends Map {
  constructor(t, n = xg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, a] of t)
        this.set(i, a);
  }
  get(t) {
    return super.get(bp(this, t));
  }
  has(t) {
    return super.has(bp(this, t));
  }
  set(t, n) {
    return super.set(gg(this, t), n);
  }
  delete(t) {
    return super.delete(vg(this, t));
  }
}
function bp({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : n;
}
function gg({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function vg({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function xg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function bg(e, t, n) {
  e = +e, t = +t, n = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +n;
  for (var i = -1, a = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(a); ++i < a; )
    l[i] = e + i * n;
  return l;
}
const Sp = Symbol("implicit");
function Cf() {
  var e = new xp(), t = [], n = [], i = Sp;
  function a(l) {
    let f = e.get(l);
    if (f === void 0) {
      if (i !== Sp)
        return i;
      e.set(l, f = t.push(l) - 1);
    }
    return n[f % n.length];
  }
  return a.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new xp();
    for (const f of l)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(l) {
    return arguments.length ? (n = Array.from(l), a) : n.slice();
  }, a.unknown = function(l) {
    return arguments.length ? (i = l, a) : i;
  }, a.copy = function() {
    return Cf(t, n).unknown(i);
  }, yc.apply(a, arguments), a;
}
function Af() {
  var e = Cf().unknown(void 0), t = e.domain, n = e.range, i = 0, a = 1, l, f, d = !1, u = 0, h = 0, y = 0.5;
  delete e.unknown;
  function v() {
    var S = t().length, R = a < i, k = R ? a : i, F = R ? i : a;
    l = (F - k) / Math.max(1, S - u + h * 2), d && (l = Math.floor(l)), k += (F - k - l * (S - u)) * y, f = l * (1 - u), d && (k = Math.round(k), f = Math.round(f));
    var T = bg(S).map(function(m) {
      return k + l * m;
    });
    return n(R ? T.reverse() : T);
  }
  return e.domain = function(S) {
    return arguments.length ? (t(S), v()) : t();
  }, e.range = function(S) {
    return arguments.length ? ([i, a] = S, i = +i, a = +a, v()) : [i, a];
  }, e.rangeRound = function(S) {
    return [i, a] = S, i = +i, a = +a, d = !0, v();
  }, e.bandwidth = function() {
    return f;
  }, e.step = function() {
    return l;
  }, e.round = function(S) {
    return arguments.length ? (d = !!S, v()) : d;
  }, e.padding = function(S) {
    return arguments.length ? (u = Math.min(1, h = +S), v()) : u;
  }, e.paddingInner = function(S) {
    return arguments.length ? (u = Math.min(1, S), v()) : u;
  }, e.paddingOuter = function(S) {
    return arguments.length ? (h = +S, v()) : h;
  }, e.align = function(S) {
    return arguments.length ? (y = Math.max(0, Math.min(1, S)), v()) : y;
  }, e.copy = function() {
    return Af(t(), [i, a]).round(d).paddingInner(u).paddingOuter(h).align(y);
  }, yc.apply(v(), arguments);
}
function Yh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Yh(t());
  }, e;
}
function Sg() {
  return Yh(Af.apply(null, arguments).paddingInner(1));
}
function Xh(e, t) {
  e = e.slice();
  var n = 0, i = e.length - 1, a = e[n], l = e[i], f;
  return l < a && (f = n, n = i, i = f, f = a, a = l, l = f), e[n] = t.floor(a), e[i] = t.ceil(l), e;
}
function Ep(e) {
  return Math.log(e);
}
function kp(e) {
  return Math.exp(e);
}
function Eg(e) {
  return -Math.log(-e);
}
function kg(e) {
  return -Math.exp(-e);
}
function wg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Tg(e) {
  return e === 10 ? wg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Cg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function wp(e) {
  return (t, n) => -e(-t, n);
}
function Ag(e) {
  const t = e(Ep, kp), n = t.domain;
  let i = 10, a, l;
  function f() {
    return a = Cg(i), l = Tg(i), n()[0] < 0 ? (a = wp(a), l = wp(l), e(Eg, kg)) : e(Ep, kp), t;
  }
  return t.base = function(d) {
    return arguments.length ? (i = +d, f()) : i;
  }, t.domain = function(d) {
    return arguments.length ? (n(d), f()) : n();
  }, t.ticks = (d) => {
    const u = n();
    let h = u[0], y = u[u.length - 1];
    const v = y < h;
    v && ([h, y] = [y, h]);
    let S = a(h), R = a(y), k, F;
    const T = d == null ? 10 : +d;
    let m = [];
    if (!(i % 1) && R - S < T) {
      if (S = Math.floor(S), R = Math.ceil(R), h > 0) {
        for (; S <= R; ++S)
          for (k = 1; k < i; ++k)
            if (F = S < 0 ? k / l(-S) : k * l(S), !(F < h)) {
              if (F > y)
                break;
              m.push(F);
            }
      } else
        for (; S <= R; ++S)
          for (k = i - 1; k >= 1; --k)
            if (F = S > 0 ? k / l(-S) : k * l(S), !(F < h)) {
              if (F > y)
                break;
              m.push(F);
            }
      m.length * 2 < T && (m = dp(h, y, T));
    } else
      m = dp(S, R, Math.min(R - S, T)).map(l);
    return v ? m.reverse() : m;
  }, t.tickFormat = (d, u) => {
    if (d == null && (d = 10), u == null && (u = i === 10 ? "s" : ","), typeof u != "function" && (!(i % 1) && (u = qy(u)).precision == null && (u.trim = !0), u = Gy(u)), d === 1 / 0)
      return u;
    const h = Math.max(1, i * d / t.ticks().length);
    return (y) => {
      let v = y / l(Math.round(a(y)));
      return v * i < i - 0.5 && (v *= i), v <= h ? u(y) : "";
    };
  }, t.nice = () => n(Xh(n(), {
    floor: (d) => l(Math.floor(a(d))),
    ceil: (d) => l(Math.ceil(a(d)))
  })), t;
}
function qh() {
  const e = Ag(Xy()).domain([1, 10]);
  return e.copy = () => zh(e, qh()).base(e.base()), yc.apply(e, arguments), e;
}
const Hu = Hh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Hu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Hh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Hu);
Hu.range;
function Lg(e, t, n, i, a, l) {
  const f = [
    [Jl, 1, fu],
    [Jl, 5, 5 * fu],
    [Jl, 15, 15 * fu],
    [Jl, 30, 30 * fu],
    [l, 1, pu],
    [l, 5, 5 * pu],
    [l, 15, 15 * pu],
    [l, 30, 30 * pu],
    [a, 1, hu],
    [a, 3, 3 * hu],
    [a, 6, 6 * hu],
    [a, 12, 12 * hu],
    [i, 1, pp],
    [i, 2, 2 * pp],
    [n, 1, tg],
    [t, 1, hp],
    [t, 3, 3 * hp],
    [e, 1, wd]
  ];
  function d(h, y, v) {
    const S = y < h;
    S && ([h, y] = [y, h]);
    const R = v && typeof v.range == "function" ? v : u(h, y, v), k = R ? R.range(h, +y + 1) : [];
    return S ? k.reverse() : k;
  }
  function u(h, y, v) {
    const S = Math.abs(y - h) / v, R = Zy(([, , T]) => T).right(f, S);
    if (R === f.length)
      return e.every(fp(h / wd, y / wd, v));
    if (R === 0)
      return Hu.every(Math.max(fp(h, y, v), 1));
    const [k, F] = f[S / f[R - 1][2] < f[R][2] / S ? R - 1 : R];
    return k.every(F);
  }
  return [d, u];
}
const [Pg, Rg] = Lg(Wh, Bh, jh, Vh, $h, Ih);
function Ng(e) {
  return new Date(e);
}
function _g(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Gh(e, t, n, i, a, l, f, d, u, h) {
  var y = Qy(), v = y.invert, S = y.domain, R = h(".%L"), k = h(":%S"), F = h("%I:%M"), T = h("%I %p"), m = h("%a %d"), O = h("%b %d"), N = h("%B"), P = h("%Y");
  function D(L) {
    return (u(L) < L ? R : d(L) < L ? k : f(L) < L ? F : l(L) < L ? T : i(L) < L ? a(L) < L ? m : O : n(L) < L ? N : P)(L);
  }
  return y.invert = function(L) {
    return new Date(v(L));
  }, y.domain = function(L) {
    return arguments.length ? S(Array.from(L, _g)) : S().map(Ng);
  }, y.ticks = function(L) {
    var U = S();
    return e(U[0], U[U.length - 1], L ?? 10);
  }, y.tickFormat = function(L, U) {
    return U == null ? D : h(U);
  }, y.nice = function(L) {
    var U = S();
    return (!L || typeof L.range != "function") && (L = t(U[0], U[U.length - 1], L ?? 10)), L ? S(Xh(U, L)) : y;
  }, y.copy = function() {
    return zh(y, Gh(e, t, n, i, a, l, f, d, u, h));
  }, y;
}
function Dg() {
  return yc.apply(Gh(Pg, Rg, Wh, Bh, jh, Vh, $h, Ih, Jl, jy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Og = xs("domain", "range", "reverse", "align", "padding", "round");
function Kd(e) {
  return Og(Af(), e);
}
var Fg = xs("domain", "range", "reverse", "align", "padding", "round");
function Bo(e) {
  return Fg(Sg(), e);
}
var Mg = xs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function zg(e) {
  return Mg(Dg(), e);
}
var Ig = xs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Wu(e) {
  return Ig(qh(), e);
}
var $g = xs("domain", "range", "reverse", "unknown");
function Zh(e) {
  return $g(Cf(), e);
}
function Bg(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Hg(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(i, a, l) {
    return t == null || l.length <= t || a % Math.round((l.length - 1) / t) === 0;
  });
}
function Wg(e) {
  return e == null ? void 0 : e.toString();
}
var Ri = [], Vg = function() {
  return Ri.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, jg = function() {
  return Ri.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Tp = "ResizeObserver loop completed with undelivered notifications.", Ug = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Tp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Tp), window.dispatchEvent(e);
}, hs;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(hs || (hs = {}));
var Ni = function(e) {
  return Object.freeze(e);
}, Qh = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Ni(this);
  }
  return e;
}(), Jh = function() {
  function e(t, n, i, a) {
    return this.x = t, this.y = n, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ni(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, i = t.y, a = t.top, l = t.right, f = t.bottom, d = t.left, u = t.width, h = t.height;
    return { x: n, y: i, top: a, right: l, bottom: f, left: d, width: u, height: h };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Lf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, em = function(e) {
  if (Lf(e)) {
    var t = e.getBBox(), n = t.width, i = t.height;
    return !n && !i;
  }
  var a = e, l = a.offsetWidth, f = a.offsetHeight;
  return !(l || f || e.getClientRects().length);
}, Cp = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Kg = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, ns = typeof window < "u" ? window : {}, yu = /* @__PURE__ */ new WeakMap(), Ap = /auto|scroll/, Yg = /^tb|vertical/, Xg = /msie|trident/i.test(ns.navigator && ns.navigator.userAgent), Hr = function(e) {
  return parseFloat(e || "0");
}, Wo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Qh((n ? t : e) || 0, (n ? e : t) || 0);
}, Lp = Ni({
  devicePixelContentBoxSize: Wo(),
  borderBoxSize: Wo(),
  contentBoxSize: Wo(),
  contentRect: new Jh(0, 0, 0, 0)
}), tm = function(e, t) {
  if (t === void 0 && (t = !1), yu.has(e) && !t)
    return yu.get(e);
  if (em(e))
    return yu.set(e, Lp), Lp;
  var n = getComputedStyle(e), i = Lf(e) && e.ownerSVGElement && e.getBBox(), a = !Xg && n.boxSizing === "border-box", l = Yg.test(n.writingMode || ""), f = !i && Ap.test(n.overflowY || ""), d = !i && Ap.test(n.overflowX || ""), u = i ? 0 : Hr(n.paddingTop), h = i ? 0 : Hr(n.paddingRight), y = i ? 0 : Hr(n.paddingBottom), v = i ? 0 : Hr(n.paddingLeft), S = i ? 0 : Hr(n.borderTopWidth), R = i ? 0 : Hr(n.borderRightWidth), k = i ? 0 : Hr(n.borderBottomWidth), F = i ? 0 : Hr(n.borderLeftWidth), T = v + h, m = u + y, O = F + R, N = S + k, P = d ? e.offsetHeight - N - e.clientHeight : 0, D = f ? e.offsetWidth - O - e.clientWidth : 0, L = a ? T + O : 0, U = a ? m + N : 0, W = i ? i.width : Hr(n.width) - L - D, Z = i ? i.height : Hr(n.height) - U - P, ce = W + T + D + O, te = Z + m + P + N, V = Ni({
    devicePixelContentBoxSize: Wo(Math.round(W * devicePixelRatio), Math.round(Z * devicePixelRatio), l),
    borderBoxSize: Wo(ce, te, l),
    contentBoxSize: Wo(W, Z, l),
    contentRect: new Jh(v, u, W, Z)
  });
  return yu.set(e, V), V;
}, nm = function(e, t, n) {
  var i = tm(e, n), a = i.borderBoxSize, l = i.contentBoxSize, f = i.devicePixelContentBoxSize;
  switch (t) {
    case hs.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case hs.BORDER_BOX:
      return a;
    default:
      return l;
  }
}, rm = function() {
  function e(t) {
    var n = tm(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Ni([n.borderBoxSize]), this.contentBoxSize = Ni([n.contentBoxSize]), this.devicePixelContentBoxSize = Ni([n.devicePixelContentBoxSize]);
  }
  return e;
}(), am = function(e) {
  if (em(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, qg = function() {
  var e = 1 / 0, t = [];
  Ri.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var d = [];
      f.activeTargets.forEach(function(h) {
        var y = new rm(h.target), v = am(h.target);
        d.push(y), h.lastReportedSize = nm(h.target, h.observedBox), v < e && (e = v);
      }), t.push(function() {
        f.callback.call(f.observer, d, f.observer);
      }), f.activeTargets.splice(0, f.activeTargets.length);
    }
  });
  for (var n = 0, i = t; n < i.length; n++) {
    var a = i[n];
    a();
  }
  return e;
}, Pp = function(e) {
  Ri.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (am(a.target) > e ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, Gg = function() {
  var e = 0;
  for (Pp(e); Vg(); )
    e = qg(), Pp(e);
  return jg() && Ug(), e > 0;
}, Td, im = [], Zg = function() {
  return im.splice(0).forEach(function(e) {
    return e();
  });
}, Qg = function(e) {
  if (!Td) {
    var t = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return Zg();
    }).observe(n, i), Td = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  im.push(e), Td();
}, Jg = function(e) {
  Qg(function() {
    requestAnimationFrame(e);
  });
}, _u = 0, ev = function() {
  return !!_u;
}, tv = 250, nv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Rp = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Np = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Cd = !1, rv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = tv), !Cd) {
      Cd = !0;
      var i = Np(t);
      Jg(function() {
        var a = !1;
        try {
          a = Gg();
        } finally {
          if (Cd = !1, t = i - Np(), !ev())
            return;
          a ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, nv);
    };
    document.body ? n() : ns.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Rp.forEach(function(n) {
      return ns.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Rp.forEach(function(n) {
      return ns.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Yd = new rv(), _p = function(e) {
  !_u && e > 0 && Yd.start(), _u += e, !_u && Yd.stop();
}, av = function(e) {
  return !Lf(e) && !Kg(e) && getComputedStyle(e).display === "inline";
}, iv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || hs.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = nm(this.target, this.observedBox, !0);
    return av(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ov = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), gu = /* @__PURE__ */ new WeakMap(), Dp = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, vu = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var i = new ov(t, n);
    gu.set(t, i);
  }, e.observe = function(t, n, i) {
    var a = gu.get(t), l = a.observationTargets.length === 0;
    Dp(a.observationTargets, n) < 0 && (l && Ri.push(a), a.observationTargets.push(new iv(n, i && i.box)), _p(1), Yd.schedule());
  }, e.unobserve = function(t, n) {
    var i = gu.get(t), a = Dp(i.observationTargets, n), l = i.observationTargets.length === 1;
    a >= 0 && (l && Ri.splice(Ri.indexOf(i), 1), i.observationTargets.splice(a, 1), _p(-1));
  }, e.disconnect = function(t) {
    var n = this, i = gu.get(t);
    i.observationTargets.slice().forEach(function(a) {
      return n.unobserve(t, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, e;
}(), lv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    vu.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    vu.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cp(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    vu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    vu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: lv,
  ResizeObserverEntry: rm,
  ResizeObserverSize: Qh
}, Symbol.toStringTag, { value: "Module" })), uv = /* @__PURE__ */ $y(sv);
var Op = sm, Ra = lm(zy), cv = lm(Iy), Mo = pv(de), dv = uv, fv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function om(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (om = function(a) {
    return a ? n : t;
  })(e);
}
function pv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = om(t);
  if (n && n.has(e))
    return n.get(e);
  var i = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, l) : null;
      f && (f.get || f.set) ? Object.defineProperty(i, l, f) : i[l] = e[l];
    }
  return i.default = e, n && n.set(e, i), i;
}
function lm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vu() {
  return Vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Vu.apply(this, arguments);
}
function hv(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var mv = [];
function sm(e) {
  var t = e.className, n = e.children, i = e.debounceTime, a = i === void 0 ? 300 : i, l = e.ignoreDimensions, f = l === void 0 ? mv : l, d = e.parentSizeStyles, u = d === void 0 ? {
    width: "100%",
    height: "100%"
  } : d, h = e.enableDebounceLeadingCall, y = h === void 0 ? !0 : h, v = hv(e, fv), S = (0, Mo.useRef)(null), R = (0, Mo.useRef)(0), k = (0, Mo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), F = k[0], T = k[1], m = (0, Mo.useMemo)(function() {
    var O = Array.isArray(f) ? f : [f];
    return (0, cv.default)(function(N) {
      T(function(P) {
        var D = Object.keys(P), L = D.filter(function(W) {
          return P[W] !== N[W];
        }), U = L.every(function(W) {
          return O.includes(W);
        });
        return U ? P : N;
      });
    }, a, {
      leading: y
    });
  }, [a, y, f]);
  return (0, Mo.useEffect)(function() {
    var O = new dv.ResizeObserver(function(N) {
      N === void 0 && (N = []), N.forEach(function(P) {
        var D = P.contentRect, L = D.left, U = D.top, W = D.width, Z = D.height;
        R.current = window.requestAnimationFrame(function() {
          m({
            width: W,
            height: Z,
            top: U,
            left: L
          });
        });
      });
    });
    return S.current && O.observe(S.current), function() {
      window.cancelAnimationFrame(R.current), O.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Mo.default.createElement("div", Vu({
    style: u,
    ref: S,
    className: t
  }, v), n(Vu({}, F, {
    ref: S.current,
    resize: m
  })));
}
sm.propTypes = {
  className: Ra.default.string,
  debounceTime: Ra.default.number,
  enableDebounceLeadingCall: Ra.default.bool,
  ignoreDimensions: Ra.default.oneOfType([Ra.default.any, Ra.default.arrayOf(Ra.default.any)]),
  children: Ra.default.func.isRequired
};
var Ad = /* @__PURE__ */ new Date(), Ld = /* @__PURE__ */ new Date();
function ua(e, t, n, i) {
  function a(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return a.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, a.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, a.round = function(l) {
    var f = a(l), d = a.ceil(l);
    return l - f < d - l ? f : d;
  }, a.offset = function(l, f) {
    return t(l = /* @__PURE__ */ new Date(+l), f == null ? 1 : Math.floor(f)), l;
  }, a.range = function(l, f, d) {
    var u = [], h;
    if (l = a.ceil(l), d = d == null ? 1 : Math.floor(d), !(l < f) || !(d > 0))
      return u;
    do
      u.push(h = /* @__PURE__ */ new Date(+l)), t(l, d), e(l);
    while (h < l && l < f);
    return u;
  }, a.filter = function(l) {
    return ua(function(f) {
      if (f >= f)
        for (; e(f), !l(f); )
          f.setTime(f - 1);
    }, function(f, d) {
      if (f >= f)
        if (d < 0)
          for (; ++d <= 0; )
            for (; t(f, -1), !l(f); )
              ;
        else
          for (; --d >= 0; )
            for (; t(f, 1), !l(f); )
              ;
    });
  }, n && (a.count = function(l, f) {
    return Ad.setTime(+l), Ld.setTime(+f), e(Ad), e(Ld), Math.floor(n(Ad, Ld));
  }, a.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? a.filter(i ? function(f) {
      return i(f) % l === 0;
    } : function(f) {
      return a.count(0, f) % l === 0;
    }) : a;
  }), a;
}
const yv = 1e3, Pf = yv * 60, gv = Pf * 60, Rf = gv * 24, um = Rf * 7;
var cm = ua(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Pf) / Rf,
  (e) => e.getDate() - 1
);
const dm = cm;
cm.range;
function Mi(e) {
  return ua(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Pf) / um;
  });
}
var fm = Mi(0), ju = Mi(1), vv = Mi(2), xv = Mi(3), Uo = Mi(4), bv = Mi(5), Sv = Mi(6);
fm.range;
ju.range;
vv.range;
xv.range;
Uo.range;
bv.range;
Sv.range;
var Nf = ua(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Nf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ua(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const ms = Nf;
Nf.range;
var pm = ua(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Rf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const hm = pm;
pm.range;
function zi(e) {
  return ua(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / um;
  });
}
var mm = zi(0), Uu = zi(1), Ev = zi(2), kv = zi(3), Ko = zi(4), wv = zi(5), Tv = zi(6);
mm.range;
Uu.range;
Ev.range;
kv.range;
Ko.range;
wv.range;
Tv.range;
var _f = ua(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
_f.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ua(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ys = _f;
_f.range;
function Pd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Rd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Cv(e) {
  var t = e.dateTime, n = e.date, i = e.time, a = e.periods, l = e.days, f = e.shortDays, d = e.months, u = e.shortMonths, h = Zl(a), y = Ql(a), v = Zl(l), S = Ql(l), R = Zl(f), k = Ql(f), F = Zl(d), T = Ql(d), m = Zl(u), O = Ql(u), N = {
    a: re,
    A: le,
    b: G,
    B: j,
    c: null,
    d: Bp,
    e: Bp,
    f: qv,
    g: ix,
    G: lx,
    H: Kv,
    I: Yv,
    j: Xv,
    L: ym,
    m: Gv,
    M: Zv,
    p: J,
    q: ue,
    Q: Vp,
    s: jp,
    S: Qv,
    u: Jv,
    U: ex,
    V: tx,
    w: nx,
    W: rx,
    x: null,
    X: null,
    y: ax,
    Y: ox,
    Z: sx,
    "%": Wp
  }, P = {
    a: _e,
    A: be,
    b: ye,
    B: Le,
    c: null,
    d: Hp,
    e: Hp,
    f: fx,
    g: Ex,
    G: wx,
    H: ux,
    I: cx,
    j: dx,
    L: vm,
    m: px,
    M: hx,
    p: ae,
    q: Ie,
    Q: Vp,
    s: jp,
    S: mx,
    u: yx,
    U: gx,
    V: vx,
    w: xx,
    W: bx,
    x: null,
    X: null,
    y: Sx,
    Y: kx,
    Z: Tx,
    "%": Wp
  }, D = {
    a: ce,
    A: te,
    b: V,
    B: K,
    c: X,
    d: Ip,
    e: Ip,
    f: Wv,
    g: zp,
    G: Mp,
    H: $p,
    I: $p,
    j: Iv,
    L: Hv,
    m: zv,
    M: $v,
    p: Z,
    q: Mv,
    Q: jv,
    s: Uv,
    S: Bv,
    u: Nv,
    U: _v,
    V: Dv,
    w: Rv,
    W: Ov,
    x: B,
    X: oe,
    y: zp,
    Y: Mp,
    Z: Fv,
    "%": Vv
  };
  N.x = L(n, N), N.X = L(i, N), N.c = L(t, N), P.x = L(n, P), P.X = L(i, P), P.c = L(t, P);
  function L(Ee, he) {
    return function(Pe) {
      var ee = [], De = -1, we = 0, Ue = Ee.length, Ge, et, Je;
      for (Pe instanceof Date || (Pe = /* @__PURE__ */ new Date(+Pe)); ++De < Ue; )
        Ee.charCodeAt(De) === 37 && (ee.push(Ee.slice(we, De)), (et = Fp[Ge = Ee.charAt(++De)]) != null ? Ge = Ee.charAt(++De) : et = Ge === "e" ? " " : "0", (Je = he[Ge]) && (Ge = Je(Pe, et)), ee.push(Ge), we = De + 1);
      return ee.push(Ee.slice(we, De)), ee.join("");
    };
  }
  function U(Ee, he) {
    return function(Pe) {
      var ee = Gl(1900, void 0, 1), De = W(ee, Ee, Pe += "", 0), we, Ue;
      if (De != Pe.length)
        return null;
      if ("Q" in ee)
        return new Date(ee.Q);
      if ("s" in ee)
        return new Date(ee.s * 1e3 + ("L" in ee ? ee.L : 0));
      if (he && !("Z" in ee) && (ee.Z = 0), "p" in ee && (ee.H = ee.H % 12 + ee.p * 12), ee.m === void 0 && (ee.m = "q" in ee ? ee.q : 0), "V" in ee) {
        if (ee.V < 1 || ee.V > 53)
          return null;
        "w" in ee || (ee.w = 1), "Z" in ee ? (we = Rd(Gl(ee.y, 0, 1)), Ue = we.getUTCDay(), we = Ue > 4 || Ue === 0 ? Uu.ceil(we) : Uu(we), we = hm.offset(we, (ee.V - 1) * 7), ee.y = we.getUTCFullYear(), ee.m = we.getUTCMonth(), ee.d = we.getUTCDate() + (ee.w + 6) % 7) : (we = Pd(Gl(ee.y, 0, 1)), Ue = we.getDay(), we = Ue > 4 || Ue === 0 ? ju.ceil(we) : ju(we), we = dm.offset(we, (ee.V - 1) * 7), ee.y = we.getFullYear(), ee.m = we.getMonth(), ee.d = we.getDate() + (ee.w + 6) % 7);
      } else
        ("W" in ee || "U" in ee) && ("w" in ee || (ee.w = "u" in ee ? ee.u % 7 : "W" in ee ? 1 : 0), Ue = "Z" in ee ? Rd(Gl(ee.y, 0, 1)).getUTCDay() : Pd(Gl(ee.y, 0, 1)).getDay(), ee.m = 0, ee.d = "W" in ee ? (ee.w + 6) % 7 + ee.W * 7 - (Ue + 5) % 7 : ee.w + ee.U * 7 - (Ue + 6) % 7);
      return "Z" in ee ? (ee.H += ee.Z / 100 | 0, ee.M += ee.Z % 100, Rd(ee)) : Pd(ee);
    };
  }
  function W(Ee, he, Pe, ee) {
    for (var De = 0, we = he.length, Ue = Pe.length, Ge, et; De < we; ) {
      if (ee >= Ue)
        return -1;
      if (Ge = he.charCodeAt(De++), Ge === 37) {
        if (Ge = he.charAt(De++), et = D[Ge in Fp ? he.charAt(De++) : Ge], !et || (ee = et(Ee, Pe, ee)) < 0)
          return -1;
      } else if (Ge != Pe.charCodeAt(ee++))
        return -1;
    }
    return ee;
  }
  function Z(Ee, he, Pe) {
    var ee = h.exec(he.slice(Pe));
    return ee ? (Ee.p = y.get(ee[0].toLowerCase()), Pe + ee[0].length) : -1;
  }
  function ce(Ee, he, Pe) {
    var ee = R.exec(he.slice(Pe));
    return ee ? (Ee.w = k.get(ee[0].toLowerCase()), Pe + ee[0].length) : -1;
  }
  function te(Ee, he, Pe) {
    var ee = v.exec(he.slice(Pe));
    return ee ? (Ee.w = S.get(ee[0].toLowerCase()), Pe + ee[0].length) : -1;
  }
  function V(Ee, he, Pe) {
    var ee = m.exec(he.slice(Pe));
    return ee ? (Ee.m = O.get(ee[0].toLowerCase()), Pe + ee[0].length) : -1;
  }
  function K(Ee, he, Pe) {
    var ee = F.exec(he.slice(Pe));
    return ee ? (Ee.m = T.get(ee[0].toLowerCase()), Pe + ee[0].length) : -1;
  }
  function X(Ee, he, Pe) {
    return W(Ee, t, he, Pe);
  }
  function B(Ee, he, Pe) {
    return W(Ee, n, he, Pe);
  }
  function oe(Ee, he, Pe) {
    return W(Ee, i, he, Pe);
  }
  function re(Ee) {
    return f[Ee.getDay()];
  }
  function le(Ee) {
    return l[Ee.getDay()];
  }
  function G(Ee) {
    return u[Ee.getMonth()];
  }
  function j(Ee) {
    return d[Ee.getMonth()];
  }
  function J(Ee) {
    return a[+(Ee.getHours() >= 12)];
  }
  function ue(Ee) {
    return 1 + ~~(Ee.getMonth() / 3);
  }
  function _e(Ee) {
    return f[Ee.getUTCDay()];
  }
  function be(Ee) {
    return l[Ee.getUTCDay()];
  }
  function ye(Ee) {
    return u[Ee.getUTCMonth()];
  }
  function Le(Ee) {
    return d[Ee.getUTCMonth()];
  }
  function ae(Ee) {
    return a[+(Ee.getUTCHours() >= 12)];
  }
  function Ie(Ee) {
    return 1 + ~~(Ee.getUTCMonth() / 3);
  }
  return {
    format: function(Ee) {
      var he = L(Ee += "", N);
      return he.toString = function() {
        return Ee;
      }, he;
    },
    parse: function(Ee) {
      var he = U(Ee += "", !1);
      return he.toString = function() {
        return Ee;
      }, he;
    },
    utcFormat: function(Ee) {
      var he = L(Ee += "", P);
      return he.toString = function() {
        return Ee;
      }, he;
    },
    utcParse: function(Ee) {
      var he = U(Ee += "", !0);
      return he.toString = function() {
        return Ee;
      }, he;
    }
  };
}
var Fp = { "-": "", _: " ", 0: "0" }, Bn = /^\s*\d+/, Av = /^%/, Lv = /[\\^$*+?|[\]().{}]/g;
function qt(e, t, n) {
  var i = e < 0 ? "-" : "", a = (i ? -e : e) + "", l = a.length;
  return i + (l < n ? new Array(n - l + 1).join(t) + a : a);
}
function Pv(e) {
  return e.replace(Lv, "\\$&");
}
function Zl(e) {
  return new RegExp("^(?:" + e.map(Pv).join("|") + ")", "i");
}
function Ql(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Rv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 1));
  return i ? (e.w = +i[0], n + i[0].length) : -1;
}
function Nv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 1));
  return i ? (e.u = +i[0], n + i[0].length) : -1;
}
function _v(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.U = +i[0], n + i[0].length) : -1;
}
function Dv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.V = +i[0], n + i[0].length) : -1;
}
function Ov(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.W = +i[0], n + i[0].length) : -1;
}
function Mp(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 4));
  return i ? (e.y = +i[0], n + i[0].length) : -1;
}
function zp(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1;
}
function Fv(e, t, n) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return i ? (e.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1;
}
function Mv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 1));
  return i ? (e.q = i[0] * 3 - 3, n + i[0].length) : -1;
}
function zv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.m = i[0] - 1, n + i[0].length) : -1;
}
function Ip(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.d = +i[0], n + i[0].length) : -1;
}
function Iv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 3));
  return i ? (e.m = 0, e.d = +i[0], n + i[0].length) : -1;
}
function $p(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.H = +i[0], n + i[0].length) : -1;
}
function $v(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.M = +i[0], n + i[0].length) : -1;
}
function Bv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.S = +i[0], n + i[0].length) : -1;
}
function Hv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 3));
  return i ? (e.L = +i[0], n + i[0].length) : -1;
}
function Wv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 6));
  return i ? (e.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1;
}
function Vv(e, t, n) {
  var i = Av.exec(t.slice(n, n + 1));
  return i ? n + i[0].length : -1;
}
function jv(e, t, n) {
  var i = Bn.exec(t.slice(n));
  return i ? (e.Q = +i[0], n + i[0].length) : -1;
}
function Uv(e, t, n) {
  var i = Bn.exec(t.slice(n));
  return i ? (e.s = +i[0], n + i[0].length) : -1;
}
function Bp(e, t) {
  return qt(e.getDate(), t, 2);
}
function Kv(e, t) {
  return qt(e.getHours(), t, 2);
}
function Yv(e, t) {
  return qt(e.getHours() % 12 || 12, t, 2);
}
function Xv(e, t) {
  return qt(1 + dm.count(ms(e), e), t, 3);
}
function ym(e, t) {
  return qt(e.getMilliseconds(), t, 3);
}
function qv(e, t) {
  return ym(e, t) + "000";
}
function Gv(e, t) {
  return qt(e.getMonth() + 1, t, 2);
}
function Zv(e, t) {
  return qt(e.getMinutes(), t, 2);
}
function Qv(e, t) {
  return qt(e.getSeconds(), t, 2);
}
function Jv(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ex(e, t) {
  return qt(fm.count(ms(e) - 1, e), t, 2);
}
function gm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Uo(e) : Uo.ceil(e);
}
function tx(e, t) {
  return e = gm(e), qt(Uo.count(ms(e), e) + (ms(e).getDay() === 4), t, 2);
}
function nx(e) {
  return e.getDay();
}
function rx(e, t) {
  return qt(ju.count(ms(e) - 1, e), t, 2);
}
function ax(e, t) {
  return qt(e.getFullYear() % 100, t, 2);
}
function ix(e, t) {
  return e = gm(e), qt(e.getFullYear() % 100, t, 2);
}
function ox(e, t) {
  return qt(e.getFullYear() % 1e4, t, 4);
}
function lx(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Uo(e) : Uo.ceil(e), qt(e.getFullYear() % 1e4, t, 4);
}
function sx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + qt(t / 60 | 0, "0", 2) + qt(t % 60, "0", 2);
}
function Hp(e, t) {
  return qt(e.getUTCDate(), t, 2);
}
function ux(e, t) {
  return qt(e.getUTCHours(), t, 2);
}
function cx(e, t) {
  return qt(e.getUTCHours() % 12 || 12, t, 2);
}
function dx(e, t) {
  return qt(1 + hm.count(ys(e), e), t, 3);
}
function vm(e, t) {
  return qt(e.getUTCMilliseconds(), t, 3);
}
function fx(e, t) {
  return vm(e, t) + "000";
}
function px(e, t) {
  return qt(e.getUTCMonth() + 1, t, 2);
}
function hx(e, t) {
  return qt(e.getUTCMinutes(), t, 2);
}
function mx(e, t) {
  return qt(e.getUTCSeconds(), t, 2);
}
function yx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gx(e, t) {
  return qt(mm.count(ys(e) - 1, e), t, 2);
}
function xm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ko(e) : Ko.ceil(e);
}
function vx(e, t) {
  return e = xm(e), qt(Ko.count(ys(e), e) + (ys(e).getUTCDay() === 4), t, 2);
}
function xx(e) {
  return e.getUTCDay();
}
function bx(e, t) {
  return qt(Uu.count(ys(e) - 1, e), t, 2);
}
function Sx(e, t) {
  return qt(e.getUTCFullYear() % 100, t, 2);
}
function Ex(e, t) {
  return e = xm(e), qt(e.getUTCFullYear() % 100, t, 2);
}
function kx(e, t) {
  return qt(e.getUTCFullYear() % 1e4, t, 4);
}
function wx(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ko(e) : Ko.ceil(e), qt(e.getUTCFullYear() % 1e4, t, 4);
}
function Tx() {
  return "+0000";
}
function Wp() {
  return "%";
}
function Vp(e) {
  return +e;
}
function jp(e) {
  return Math.floor(+e / 1e3);
}
var zo, Xd, bm;
Cx({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Cx(e) {
  return zo = Cv(e), Xd = zo.format, bm = zo.parse, zo.utcFormat, zo.utcParse, zo;
}
const Ct = de.createContext({}), Bt = {
  arr: Array.isArray,
  obj: (e) => Object.prototype.toString.call(e) === "[object Object]",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0,
  nul: (e) => e === null,
  set: (e) => e instanceof Set,
  map: (e) => e instanceof Map,
  equ(e, t) {
    if (typeof e != typeof t)
      return !1;
    if (Bt.str(e) || Bt.num(e))
      return e === t;
    if (Bt.obj(e) && Bt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Bt.und(n) ? e === t : !0;
  }
};
function Ax(e, t) {
  return t === void 0 && (t = !0), (n) => (Bt.arr(n) ? n : Object.keys(n)).reduce((i, a) => {
    const l = t ? a[0].toLowerCase() + a.substring(1) : a;
    return i[l] = e(l), i;
  }, e);
}
function Sm() {
  const e = de.useState(!1), t = e[1];
  return de.useCallback(() => t((i) => !i), []);
}
function ki(e, t) {
  return Bt.und(e) || Bt.nul(e) ? t : e;
}
function Ho(e) {
  return Bt.und(e) ? [] : Bt.arr(e) ? e : [e];
}
function Rr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return Bt.fun(e) ? e(...n) : e;
}
function Lx(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Ur(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Nd(e) {
  const t = Lx(e);
  if (Bt.und(t))
    return pn({
      to: t
    }, e);
  const n = Object.keys(e).reduce((i, a) => Bt.und(t[a]) ? pn({}, i, {
    [a]: e[a]
  }) : i, {});
  return pn({
    to: t
  }, n);
}
function Px(e, t) {
  return t && (Bt.fun(t) ? t(e) : Bt.obj(t) && (t.current = e)), e;
}
class Nr {
  constructor() {
    this.payload = void 0, this.children = [];
  }
  getAnimatedValue() {
    return this.getValue();
  }
  getPayload() {
    return this.payload || this;
  }
  attach() {
  }
  detach() {
  }
  getChildren() {
    return this.children;
  }
  addChild(t) {
    this.children.length === 0 && this.attach(), this.children.push(t);
  }
  removeChild(t) {
    const n = this.children.indexOf(t);
    this.children.splice(n, 1), this.children.length === 0 && this.detach();
  }
}
class qd extends Nr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Nr && t.removeChild(this));
  }
}
class Em extends Nr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const i in this.payload) {
      const a = this.payload[i];
      t && !(a instanceof Nr) || (n[i] = a instanceof Nr ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Df;
function Rx(e, t) {
  Df = {
    fn: e,
    transform: t
  };
}
let km;
function Nx(e) {
  km = e;
}
let wm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Ku;
function _x(e) {
  Ku = e;
}
let Tm = () => Date.now(), Dx = (e) => e.current, Cm;
function Ox(e) {
  Cm = e;
}
class Fx extends Em {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? pn({}, t, {
      style: Cm(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Mx = (e) => Bt.fun(e) && !(e.prototype instanceof r.Component), zx = (e) => de.forwardRef((n, i) => {
  const a = Sm(), l = de.useRef(!0), f = de.useRef(null), d = de.useRef(null), u = de.useCallback((S) => {
    const R = f.current, k = () => {
      let F = !1;
      d.current && (F = Df.fn(d.current, f.current.getAnimatedValue())), (!d.current || F === !1) && a();
    };
    f.current = new Fx(S, k), R && R.detach();
  }, []);
  de.useEffect(() => () => {
    l.current = !1, f.current && f.current.detach();
  }, []), de.useImperativeHandle(i, () => Dx(d)), u(n);
  const h = f.current.getValue();
  h.scrollTop, h.scrollLeft;
  const y = Ur(h, ["scrollTop", "scrollLeft"]), v = Mx(e) ? void 0 : (S) => d.current = Px(S, i);
  return r.createElement(e, pn({}, y, {
    ref: v
  }));
});
let rs = !1;
const _i = /* @__PURE__ */ new Set(), Am = () => {
  if (!rs)
    return !1;
  let e = Tm();
  for (let t of _i) {
    let n = !1;
    for (let i = 0; i < t.configs.length; i++) {
      let a = t.configs[i], l, f;
      for (let d = 0; d < a.animatedValues.length; d++) {
        let u = a.animatedValues[d];
        if (u.done)
          continue;
        let h = a.fromValues[d], y = a.toValues[d], v = u.lastPosition, S = y instanceof Nr, R = Array.isArray(a.initialVelocity) ? a.initialVelocity[d] : a.initialVelocity;
        if (S && (y = y.getValue()), a.immediate) {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (typeof h == "string" || typeof y == "string") {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          v = h + a.easing((e - u.startTime) / a.duration) * (y - h), l = e >= u.startTime + a.duration;
        else if (a.decay)
          v = h + R / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - u.startTime))), l = Math.abs(u.lastPosition - v) < 0.1, l && (y = v);
        else {
          f = u.lastTime !== void 0 ? u.lastTime : e, R = u.lastVelocity !== void 0 ? u.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let k = Math.floor(e - f);
          for (let O = 0; O < k; ++O) {
            let N = -a.tension * (v - y), P = -a.friction * R, D = (N + P) / a.mass;
            R = R + D * 1 / 1e3, v = v + R * 1 / 1e3;
          }
          let F = a.clamp && a.tension !== 0 ? h < y ? v > y : v < y : !1, T = Math.abs(R) <= a.precision, m = a.tension !== 0 ? Math.abs(y - v) <= a.precision : !0;
          l = F || T && m, u.lastVelocity = R, u.lastTime = e;
        }
        S && !a.toValues[d].done && (l = !1), l ? (u.value !== y && (v = y), u.done = !0) : n = !0, u.setValue(v), u.lastPosition = v;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (_i.delete(t), t.stop(!0));
  }
  return _i.size ? wm(Am) : rs = !1, rs;
}, Ix = (e) => {
  _i.has(e) || _i.add(e), rs || (rs = !0, wm(Am));
}, $x = (e) => {
  _i.has(e) && _i.delete(e);
};
function Yu(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Yu({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Ku && typeof e.output[0] == "string")
    return Ku(e);
  const i = e, a = i.output, l = i.range || [0, 1], f = i.extrapolateLeft || i.extrapolate || "extend", d = i.extrapolateRight || i.extrapolate || "extend", u = i.easing || ((h) => h);
  return (h) => {
    const y = Hx(h, l);
    return Bx(h, l[y], l[y + 1], a[y], a[y + 1], u, f, d, i.map);
  };
}
function Bx(e, t, n, i, a, l, f, d, u) {
  let h = u ? u(e) : e;
  if (h < t) {
    if (f === "identity")
      return h;
    f === "clamp" && (h = t);
  }
  if (h > n) {
    if (d === "identity")
      return h;
    d === "clamp" && (h = n);
  }
  return i === a ? i : t === n ? e <= t ? i : a : (t === -1 / 0 ? h = -h : n === 1 / 0 ? h = h - t : h = (h - t) / (n - t), h = l(h), i === -1 / 0 ? h = -h : a === 1 / 0 ? h = h + i : h = h * (a - i) + i, h);
}
function Hx(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Yo extends qd {
  constructor(t, n, i, a) {
    super(), this.calc = void 0, this.payload = t instanceof qd && !(t instanceof Yo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Yu(n, i, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, i) {
    this.calc = Yu(t, n, i);
  }
  interpolate(t, n, i) {
    return new Yo(this, t, n, i);
  }
}
const Wx = (e, t, n) => e && new Yo(e, t, n);
function Lm(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Lm(n, t));
}
class Gd extends Nr {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(i, a) {
      a === void 0 && (a = !0), n.value = i, a && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Lm(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, i) {
    return new Yo(this, t, n, i);
  }
}
class Vx extends qd {
  constructor(t) {
    super(), this.payload = t.map((n) => new Gd(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((i, a) => this.payload[a].setValue(i, n)) : this.payload.forEach((i) => i.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Yo(this, t, n);
  }
}
let jx = 0;
class Ux {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = jx++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Nd(t), i = n.delay, a = i === void 0 ? 0 : i, l = n.to, f = Ur(n, ["delay", "to"]);
    if (Bt.arr(l) || Bt.fun(l))
      this.queue.push(pn({}, f, {
        delay: a,
        to: l
      }));
    else if (l) {
      let d = {};
      Object.entries(l).forEach((u) => {
        let h = u[0], y = u[1];
        const v = pn({
          to: {
            [h]: y
          },
          delay: Rr(a, h)
        }, f), S = d[v.delay] && d[v.delay].to;
        d[v.delay] = pn({}, d[v.delay], v, {
          to: pn({}, S, v.to)
        });
      }), this.queue = Object.values(d);
    }
    return this.queue = this.queue.sort((d, u) => d.delay - u.delay), this.diff(f), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let l = a.from, f = l === void 0 ? {} : l, d = a.to, u = d === void 0 ? {} : d;
        Bt.obj(f) && (this.merged = pn({}, f, this.merged)), Bt.obj(u) && (this.merged = pn({}, this.merged, u));
      });
      const n = this.local = ++this.guid, i = this.localQueue = this.queue;
      this.queue = [], i.forEach((a, l) => {
        let f = a.delay, d = Ur(a, ["delay"]);
        const u = (y) => {
          l === i.length - 1 && n === this.guid && y && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let h = Bt.arr(d.to) || Bt.fun(d.to);
        f ? setTimeout(() => {
          n === this.guid && (h ? this.runAsync(d, u) : this.diff(d).start(u));
        }, f) : h ? this.runAsync(d, u) : this.diff(d).start(u);
      });
    } else
      Bt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Ix(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && $x(this), this;
  }
  runAsync(t, n) {
    var i = this;
    t.delay;
    let a = Ur(t, ["delay"]);
    const l = this.local;
    let f = Promise.resolve(void 0);
    if (Bt.arr(a.to))
      for (let d = 0; d < a.to.length; d++) {
        const u = d, h = pn({}, a, Nd(a.to[u]));
        Bt.arr(h.config) && (h.config = h.config[u]), f = f.then(() => {
          if (l === this.guid)
            return new Promise((y) => this.diff(h).start(y));
        });
      }
    else if (Bt.fun(a.to)) {
      let d = 0, u;
      f = f.then(() => a.to(
        // next(props)
        (h) => {
          const y = pn({}, a, Nd(h));
          if (Bt.arr(y.config) && (y.config = y.config[d]), d++, l === this.guid)
            return u = new Promise((v) => this.diff(y).start(v));
        },
        // cancel()
        function(h) {
          return h === void 0 && (h = !0), i.stop(h);
        }
      ).then(() => u));
    }
    f.then(n);
  }
  diff(t) {
    this.props = pn({}, this.props, t);
    let n = this.props, i = n.from, a = i === void 0 ? {} : i, l = n.to, f = l === void 0 ? {} : l, d = n.config, u = d === void 0 ? {} : d, h = n.reverse, y = n.attach, v = n.reset, S = n.immediate;
    if (h) {
      var R = [f, a];
      a = R[0], f = R[1];
    }
    this.merged = pn({}, a, this.merged, f), this.hasChanged = !1;
    let k = y && y(this);
    if (this.animations = Object.entries(this.merged).reduce((F, T) => {
      let m = T[0], O = T[1], N = F[m] || {};
      const P = Bt.num(O), D = Bt.str(O) && !O.startsWith("#") && !/\d/.test(O) && !km[O], L = Bt.arr(O), U = !P && !L && !D;
      let W = Bt.und(a[m]) ? O : a[m], Z = P || L || D ? O : 1, ce = Rr(u, m);
      k && (Z = k.animations[m].parent);
      let te = N.parent, V = N.interpolation, K = Ho(k ? Z.getPayload() : Z), X, B = O;
      U && (B = Ku({
        range: [0, 1],
        output: [O, O]
      })(1));
      let oe = V && V.getValue();
      const le = !Bt.und(te) && N.animatedValues.some((ue) => !ue.done), G = !Bt.equ(B, oe), j = !Bt.equ(B, N.previous), J = !Bt.equ(ce, N.config);
      if (v || j && G || J) {
        if (P || D)
          te = V = N.parent || new Gd(W);
        else if (L)
          te = V = N.parent || new Vx(W);
        else if (U) {
          let ue = N.interpolation && N.interpolation.calc(N.parent.value);
          ue = ue !== void 0 && !v ? ue : W, N.parent ? (te = N.parent, te.setValue(0, !1)) : te = new Gd(0);
          const _e = {
            output: [ue, O]
          };
          N.interpolation ? (V = N.interpolation, N.interpolation.updateConfig(_e)) : V = te.interpolate(_e);
        }
        return K = Ho(k ? Z.getPayload() : Z), X = Ho(te.getPayload()), v && !U && te.setValue(W, !1), this.hasChanged = !0, X.forEach((ue) => {
          ue.startPosition = ue.value, ue.lastPosition = ue.value, ue.lastVelocity = le ? ue.lastVelocity : void 0, ue.lastTime = le ? ue.lastTime : void 0, ue.startTime = Tm(), ue.done = !1, ue.animatedStyles.clear();
        }), Rr(S, m) && te.setValue(U ? Z : O, !1), pn({}, F, {
          [m]: pn({}, N, {
            name: m,
            parent: te,
            interpolation: V,
            animatedValues: X,
            toValues: K,
            previous: B,
            config: ce,
            fromValues: Ho(te.getValue()),
            immediate: Rr(S, m),
            initialVelocity: ki(ce.velocity, 0),
            clamp: ki(ce.clamp, !1),
            precision: ki(ce.precision, 0.01),
            tension: ki(ce.tension, 170),
            friction: ki(ce.friction, 26),
            mass: ki(ce.mass, 1),
            duration: ce.duration,
            easing: ki(ce.easing, (ue) => ue),
            decay: ce.decay
          })
        });
      } else
        return G ? F : (U && (te.setValue(1, !1), V.updateConfig({
          output: [B, B]
        })), te.done = !0, this.hasChanged = !0, pn({}, F, {
          [m]: pn({}, F[m], {
            previous: B
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let F in this.animations)
        this.interpolations[F] = this.animations[F].interpolation, this.values[F] = this.animations[F].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Kx = 0;
const Du = "enter", _d = "leave", Dd = "update", Yx = (e, t) => (typeof t == "function" ? e.map(t) : Ho(t)).map(String), Zd = (e) => {
  let t = e.items, n = e.keys, i = n === void 0 ? (l) => l : n, a = Ur(e, ["items", "keys"]);
  return t = Ho(t !== void 0 ? t : null), pn({
    items: t,
    keys: Yx(t, i)
  }, a);
};
function Xx(e, t, n) {
  const i = pn({
    items: e,
    keys: t || ((O) => O)
  }, n), a = Zd(i), l = a.lazy, f = l === void 0 ? !1 : l;
  a.unique;
  const d = a.reset, u = d === void 0 ? !1 : d;
  a.enter, a.leave, a.update;
  const h = a.onDestroyed;
  a.keys, a.items;
  const y = a.onFrame, v = a.onRest, S = a.onStart, R = a.ref, k = Ur(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), F = Sm(), T = de.useRef(!1), m = de.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!i.ref,
    instances: !T.current && /* @__PURE__ */ new Map(),
    forceUpdate: F
  });
  return de.useImperativeHandle(i.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((O) => {
      let N = O[1];
      return new Promise((P) => N.start(P));
    })),
    stop: (O) => Array.from(m.current.instances).forEach((N) => N[1].stop(O)),
    get controllers() {
      return Array.from(m.current.instances).map((O) => O[1]);
    }
  })), m.current = qx(m.current, i), m.current.changed && m.current.transitions.forEach((O) => {
    const N = O.slot, P = O.from, D = O.to, L = O.config, U = O.trail, W = O.key, Z = O.item;
    m.current.instances.has(W) || m.current.instances.set(W, new Ux());
    const ce = m.current.instances.get(W), te = pn({}, k, {
      to: D,
      from: P,
      config: L,
      ref: R,
      onRest: (V) => {
        m.current.mounted && (O.destroyed && (!R && !f && Up(m, W), h && h(Z)), !Array.from(m.current.instances).some((B) => !B[1].idle) && (R || f) && m.current.deleted.length > 0 && Up(m), v && v(Z, N, V));
      },
      onStart: S && (() => S(Z, N)),
      onFrame: y && ((V) => y(Z, N, V)),
      delay: U,
      reset: u && N === Du
      // Update controller
    });
    ce.update(te), m.current.paused || ce.start();
  }), de.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((O) => O[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((O) => {
    let N = O.item, P = O.slot, D = O.key;
    return {
      item: N,
      key: D,
      state: P,
      props: m.current.instances.get(D).getValues()
    };
  });
}
function Up(e, t) {
  const n = e.current.deleted;
  for (let i of n) {
    let a = i.key;
    const l = (f) => f.key !== a;
    (Bt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function qx(e, t) {
  let n = e.first, i = e.prevProps, a = Ur(e, ["first", "prevProps"]), l = Zd(t), f = l.items, d = l.keys, u = l.initial, h = l.from, y = l.enter, v = l.leave, S = l.update, R = l.trail, k = R === void 0 ? 0 : R, F = l.unique, T = l.config, m = l.order, O = m === void 0 ? [Du, _d, Dd] : m, N = Zd(i), P = N.keys, D = N.items, L = pn({}, a.current), U = [...a.deleted], W = Object.keys(L), Z = new Set(W), ce = new Set(d), te = d.filter((oe) => !Z.has(oe)), V = a.transitions.filter((oe) => !oe.destroyed && !ce.has(oe.originalKey)).map((oe) => oe.originalKey), K = d.filter((oe) => Z.has(oe)), X = -k;
  for (; O.length; )
    switch (O.shift()) {
      case Du: {
        te.forEach((re, le) => {
          F && U.find((ue) => ue.originalKey === re) && (U = U.filter((ue) => ue.originalKey !== re));
          const G = d.indexOf(re), j = f[G], J = n && u !== void 0 ? "initial" : Du;
          L[re] = {
            slot: J,
            originalKey: re,
            key: F ? String(re) : Kx++,
            item: j,
            trail: X = X + k,
            config: Rr(T, j, J),
            from: Rr(n && u !== void 0 ? u || {} : h, j),
            to: Rr(y, j)
          };
        });
        break;
      }
      case _d: {
        V.forEach((re) => {
          const le = P.indexOf(re), G = D[le], j = _d;
          U.unshift(pn({}, L[re], {
            slot: j,
            destroyed: !0,
            left: P[Math.max(0, le - 1)],
            right: P[Math.min(P.length, le + 1)],
            trail: X = X + k,
            config: Rr(T, G, j),
            to: Rr(v, G)
          })), delete L[re];
        });
        break;
      }
      case Dd: {
        K.forEach((re) => {
          const le = d.indexOf(re), G = f[le], j = Dd;
          L[re] = pn({}, L[re], {
            item: G,
            slot: j,
            trail: X = X + k,
            config: Rr(T, G, j),
            to: Rr(S, G)
          });
        });
        break;
      }
    }
  let B = d.map((oe) => L[oe]);
  return U.forEach((oe) => {
    let re = oe.left;
    oe.right;
    let le = Ur(oe, ["left", "right"]), G;
    (G = B.findIndex((j) => j.originalKey === re)) !== -1 && (G += 1), G = Math.max(0, G), B = [...B.slice(0, G), le, ...B.slice(G)];
  }), pn({}, a, {
    changed: te.length || V.length || K.length,
    first: n && te.length === 0,
    transitions: B,
    current: L,
    deleted: U,
    prevProps: t
  });
}
class Gx extends Em {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Nr) && (t = Df.transform(t)), this.payload = t;
  }
}
const Xu = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, _r = "[-+]?\\d*\\.?\\d+", qu = _r + "%";
function gc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Zx = new RegExp("rgb" + gc(_r, _r, _r)), Qx = new RegExp("rgba" + gc(_r, _r, _r, _r)), Jx = new RegExp("hsl" + gc(_r, qu, qu)), eb = new RegExp("hsla" + gc(_r, qu, qu, _r)), tb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, nb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, rb = /^#([0-9a-fA-F]{6})$/, ab = /^#([0-9a-fA-F]{8})$/;
function ib(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = rb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Xu.hasOwnProperty(e) ? Xu[e] : (t = Zx.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Qx.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  Xp(t[4])) >>> // a
  0 : (t = tb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = ab.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = nb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Jx.exec(e)) ? (Kp(
    Yp(t[1]),
    // h
    xu(t[2]),
    // s
    xu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = eb.exec(e)) ? (Kp(
    Yp(t[1]),
    // h
    xu(t[2]),
    // s
    xu(t[3])
    // l
  ) | Xp(t[4])) >>> // a
  0 : null;
}
function Od(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Kp(e, t, n) {
  const i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i, l = Od(a, i, e + 1 / 3), f = Od(a, i, e), d = Od(a, i, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(f * 255) << 16 | Math.round(d * 255) << 8;
}
function Io(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Yp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Xp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function qp(e) {
  let t = ib(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, i = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${i}, ${a}, ${l})`;
}
const bu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ob = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, lb = new RegExp(`(${Object.keys(Xu).join("|")})`, "g"), sb = (e) => {
  const t = e.output.map((a) => a.replace(ob, qp)).map((a) => a.replace(lb, qp)), n = t[0].match(bu).map(() => []);
  t.forEach((a) => {
    a.match(bu).forEach((l, f) => n[f].push(+l));
  });
  const i = t[0].match(bu).map((a, l) => Yu(pn({}, e, {
    output: n[l]
  })));
  return (a) => {
    let l = 0;
    return t[0].replace(bu, () => i[l++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, d, u, h, y) => `rgba(${Math.round(d)}, ${Math.round(u)}, ${Math.round(h)}, ${y})`);
  };
};
let as = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
const ub = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), cb = ["Webkit", "Ms", "Moz", "O"];
as = Object.keys(as).reduce((e, t) => (cb.forEach((n) => e[ub(n, t)] = e[t]), e), as);
function db(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(as.hasOwnProperty(e) && as[e]) ? t + "px" : ("" + t).trim();
}
const Gp = {};
Ox((e) => new Gx(e));
_x(sb);
Nx(Xu);
Rx((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, l = t.children, f = t.scrollTop, d = t.scrollLeft, u = Ur(t, ["style", "children", "scrollTop", "scrollLeft"]), h = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), d !== void 0 && (e.scrollLeft = d), l !== void 0 && (e.textContent = l);
    for (let y in a)
      if (a.hasOwnProperty(y)) {
        var n = y.indexOf("--") === 0, i = db(y, a[y], n);
        y === "float" && (y = "cssFloat"), n ? e.style.setProperty(y, i) : e.style[y] = i;
      }
    for (let y in u) {
      const v = h ? y : Gp[y] || (Gp[y] = y.replace(/([A-Z])/g, (S) => "-" + S.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, u[y]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const fb = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], pb = Ax(zx, !1), Zp = pb(fb);
function hb(e) {
  return e.innerRadius;
}
function mb(e) {
  return e.outerRadius;
}
function yb(e) {
  return e.startAngle;
}
function gb(e) {
  return e.endAngle;
}
function vb(e) {
  return e && e.padAngle;
}
function xb(e, t, n, i, a, l, f, d) {
  var u = n - e, h = i - t, y = f - a, v = d - l, S = v * u - y * h;
  if (!(S * S < Gn))
    return S = (y * (t - l) - v * (e - a)) / S, [e + S * u, t + S * h];
}
function Su(e, t, n, i, a, l, f) {
  var d = e - n, u = t - i, h = (f ? l : -l) / $o(d * d + u * u), y = h * u, v = -h * d, S = e + y, R = t + v, k = n + y, F = i + v, T = (S + k) / 2, m = (R + F) / 2, O = k - S, N = F - R, P = O * O + N * N, D = a - l, L = S * F - k * R, U = (N < 0 ? -1 : 1) * $o(Wy(0, D * D * P - L * L)), W = (L * N - O * U) / P, Z = (-L * O - N * U) / P, ce = (L * N + O * U) / P, te = (-L * O + N * U) / P, V = W - T, K = Z - m, X = ce - T, B = te - m;
  return V * V + K * K > X * X + B * B && (W = ce, Z = te), {
    cx: W,
    cy: Z,
    x01: -y,
    y01: -v,
    x11: W * (a / D - 1),
    y11: Z * (a / D - 1)
  };
}
function bb() {
  var e = hb, t = mb, n = Vt(0), i = null, a = yb, l = gb, f = vb, d = null;
  function u() {
    var h, y, v = +e.apply(this, arguments), S = +t.apply(this, arguments), R = a.apply(this, arguments) - op, k = l.apply(this, arguments) - op, F = lp(k - R), T = k > R;
    if (d || (d = h = mc()), S < v && (y = S, S = v, v = y), !(S > Gn))
      d.moveTo(0, 0);
    else if (F > Ru - Gn)
      d.moveTo(S * Si(R), S * Br(R)), d.arc(0, 0, S, R, k, !T), v > Gn && (d.moveTo(v * Si(k), v * Br(k)), d.arc(0, 0, v, k, R, T));
    else {
      var m = R, O = k, N = R, P = k, D = F, L = F, U = f.apply(this, arguments) / 2, W = U > Gn && (i ? +i.apply(this, arguments) : $o(v * v + S * S)), Z = Ed(lp(S - v) / 2, +n.apply(this, arguments)), ce = Z, te = Z, V, K;
      if (W > Gn) {
        var X = sp(W / v * Br(U)), B = sp(W / S * Br(U));
        (D -= X * 2) > Gn ? (X *= T ? 1 : -1, N += X, P -= X) : (D = 0, N = P = (R + k) / 2), (L -= B * 2) > Gn ? (B *= T ? 1 : -1, m += B, O -= B) : (L = 0, m = O = (R + k) / 2);
      }
      var oe = S * Si(m), re = S * Br(m), le = v * Si(P), G = v * Br(P);
      if (Z > Gn) {
        var j = S * Si(O), J = S * Br(O), ue = v * Si(N), _e = v * Br(N), be;
        if (F < ip && (be = xb(oe, re, ue, _e, j, J, le, G))) {
          var ye = oe - be[0], Le = re - be[1], ae = j - be[0], Ie = J - be[1], Ee = 1 / Br(Hy((ye * ae + Le * Ie) / ($o(ye * ye + Le * Le) * $o(ae * ae + Ie * Ie))) / 2), he = $o(be[0] * be[0] + be[1] * be[1]);
          ce = Ed(Z, (v - he) / (Ee - 1)), te = Ed(Z, (S - he) / (Ee + 1));
        }
      }
      L > Gn ? te > Gn ? (V = Su(ue, _e, oe, re, S, te, T), K = Su(j, J, le, G, S, te, T), d.moveTo(V.cx + V.x01, V.cy + V.y01), te < Z ? d.arc(V.cx, V.cy, te, qn(V.y01, V.x01), qn(K.y01, K.x01), !T) : (d.arc(V.cx, V.cy, te, qn(V.y01, V.x01), qn(V.y11, V.x11), !T), d.arc(0, 0, S, qn(V.cy + V.y11, V.cx + V.x11), qn(K.cy + K.y11, K.cx + K.x11), !T), d.arc(K.cx, K.cy, te, qn(K.y11, K.x11), qn(K.y01, K.x01), !T))) : (d.moveTo(oe, re), d.arc(0, 0, S, m, O, !T)) : d.moveTo(oe, re), !(v > Gn) || !(D > Gn) ? d.lineTo(le, G) : ce > Gn ? (V = Su(le, G, j, J, v, -ce, T), K = Su(oe, re, ue, _e, v, -ce, T), d.lineTo(V.cx + V.x01, V.cy + V.y01), ce < Z ? d.arc(V.cx, V.cy, ce, qn(V.y01, V.x01), qn(K.y01, K.x01), !T) : (d.arc(V.cx, V.cy, ce, qn(V.y01, V.x01), qn(V.y11, V.x11), !T), d.arc(0, 0, v, qn(V.cy + V.y11, V.cx + V.x11), qn(K.cy + K.y11, K.cx + K.x11), T), d.arc(K.cx, K.cy, ce, qn(K.y11, K.x11), qn(K.y01, K.x01), !T))) : d.arc(0, 0, v, P, N, T);
    }
    if (d.closePath(), h)
      return d = null, h + "" || null;
  }
  return u.centroid = function() {
    var h = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+a.apply(this, arguments) + +l.apply(this, arguments)) / 2 - ip / 2;
    return [Si(y) * h, Br(y) * h];
  }, u.innerRadius = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Vt(+h), u) : e;
  }, u.outerRadius = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Vt(+h), u) : t;
  }, u.cornerRadius = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Vt(+h), u) : n;
  }, u.padRadius = function(h) {
    return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : Vt(+h), u) : i;
  }, u.startAngle = function(h) {
    return arguments.length ? (a = typeof h == "function" ? h : Vt(+h), u) : a;
  }, u.endAngle = function(h) {
    return arguments.length ? (l = typeof h == "function" ? h : Vt(+h), u) : l;
  }, u.padAngle = function(h) {
    return arguments.length ? (f = typeof h == "function" ? h : Vt(+h), u) : f;
  }, u.context = function(h) {
    return arguments.length ? (d = h ?? null, u) : d;
  }, u;
}
function Pm(e) {
  this._context = e;
}
Pm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function vc(e) {
  return new Pm(e);
}
function Of(e) {
  return e[0];
}
function Ff(e) {
  return e[1];
}
function Rm() {
  var e = Of, t = Ff, n = Vt(!0), i = null, a = vc, l = null;
  function f(d) {
    var u, h = d.length, y, v = !1, S;
    for (i == null && (l = a(S = mc())), u = 0; u <= h; ++u)
      !(u < h && n(y = d[u], u, d)) === v && ((v = !v) ? l.lineStart() : l.lineEnd()), v && l.point(+e(y, u, d), +t(y, u, d));
    if (S)
      return l = null, S + "" || null;
  }
  return f.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Vt(+d), f) : e;
  }, f.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Vt(+d), f) : t;
  }, f.defined = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Vt(!!d), f) : n;
  }, f.curve = function(d) {
    return arguments.length ? (a = d, i != null && (l = a(i)), f) : a;
  }, f.context = function(d) {
    return arguments.length ? (d == null ? i = l = null : l = a(i = d), f) : i;
  }, f;
}
function Sb() {
  var e = Of, t = null, n = Vt(0), i = Ff, a = Vt(!0), l = null, f = vc, d = null;
  function u(y) {
    var v, S, R, k = y.length, F, T = !1, m, O = new Array(k), N = new Array(k);
    for (l == null && (d = f(m = mc())), v = 0; v <= k; ++v) {
      if (!(v < k && a(F = y[v], v, y)) === T)
        if (T = !T)
          S = v, d.areaStart(), d.lineStart();
        else {
          for (d.lineEnd(), d.lineStart(), R = v - 1; R >= S; --R)
            d.point(O[R], N[R]);
          d.lineEnd(), d.areaEnd();
        }
      T && (O[v] = +e(F, v, y), N[v] = +n(F, v, y), d.point(t ? +t(F, v, y) : O[v], i ? +i(F, v, y) : N[v]));
    }
    if (m)
      return d = null, m + "" || null;
  }
  function h() {
    return Rm().defined(a).curve(f).context(l);
  }
  return u.x = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Vt(+y), t = null, u) : e;
  }, u.x0 = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Vt(+y), u) : e;
  }, u.x1 = function(y) {
    return arguments.length ? (t = y == null ? null : typeof y == "function" ? y : Vt(+y), u) : t;
  }, u.y = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Vt(+y), i = null, u) : n;
  }, u.y0 = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Vt(+y), u) : n;
  }, u.y1 = function(y) {
    return arguments.length ? (i = y == null ? null : typeof y == "function" ? y : Vt(+y), u) : i;
  }, u.lineX0 = u.lineY0 = function() {
    return h().x(e).y(n);
  }, u.lineY1 = function() {
    return h().x(e).y(i);
  }, u.lineX1 = function() {
    return h().x(t).y(n);
  }, u.defined = function(y) {
    return arguments.length ? (a = typeof y == "function" ? y : Vt(!!y), u) : a;
  }, u.curve = function(y) {
    return arguments.length ? (f = y, l != null && (d = f(l)), u) : f;
  }, u.context = function(y) {
    return arguments.length ? (y == null ? l = d = null : d = f(l = y), u) : l;
  }, u;
}
function Eb(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function kb(e) {
  return e;
}
function wb() {
  var e = kb, t = Eb, n = null, i = Vt(0), a = Vt(Ru), l = Vt(0);
  function f(d) {
    var u, h = d.length, y, v, S = 0, R = new Array(h), k = new Array(h), F = +i.apply(this, arguments), T = Math.min(Ru, Math.max(-Ru, a.apply(this, arguments) - F)), m, O = Math.min(Math.abs(T) / h, l.apply(this, arguments)), N = O * (T < 0 ? -1 : 1), P;
    for (u = 0; u < h; ++u)
      (P = k[R[u] = u] = +e(d[u], u, d)) > 0 && (S += P);
    for (t != null ? R.sort(function(D, L) {
      return t(k[D], k[L]);
    }) : n != null && R.sort(function(D, L) {
      return n(d[D], d[L]);
    }), u = 0, v = S ? (T - h * N) / S : 0; u < h; ++u, F = m)
      y = R[u], P = k[y], m = F + (P > 0 ? P * v : 0) + N, k[y] = {
        data: d[y],
        index: u,
        value: P,
        startAngle: F,
        endAngle: m,
        padAngle: O
      };
    return k;
  }
  return f.value = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Vt(+d), f) : e;
  }, f.sortValues = function(d) {
    return arguments.length ? (t = d, n = null, f) : t;
  }, f.sort = function(d) {
    return arguments.length ? (n = d, t = null, f) : n;
  }, f.startAngle = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Vt(+d), f) : i;
  }, f.endAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : Vt(+d), f) : a;
  }, f.padAngle = function(d) {
    return arguments.length ? (l = typeof d == "function" ? d : Vt(+d), f) : l;
  }, f;
}
var Qd = Array.prototype.slice;
function Tb(e) {
  return e.source;
}
function Cb(e) {
  return e.target;
}
function Ab(e) {
  var t = Tb, n = Cb, i = Of, a = Ff, l = null;
  function f() {
    var d, u = Qd.call(arguments), h = t.apply(this, u), y = n.apply(this, u);
    if (l || (l = d = mc()), e(l, +i.apply(this, (u[0] = h, u)), +a.apply(this, u), +i.apply(this, (u[0] = y, u)), +a.apply(this, u)), d)
      return l = null, d + "" || null;
  }
  return f.source = function(d) {
    return arguments.length ? (t = d, f) : t;
  }, f.target = function(d) {
    return arguments.length ? (n = d, f) : n;
  }, f.x = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Vt(+d), f) : i;
  }, f.y = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : Vt(+d), f) : a;
  }, f.context = function(d) {
    return arguments.length ? (l = d ?? null, f) : l;
  }, f;
}
function Lb(e, t, n, i, a) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + i) / 2, n, t, a, i, a);
}
function Pb() {
  return Ab(Lb);
}
function za() {
}
function Gu(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function xc(e) {
  this._context = e;
}
xc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Gu(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Gu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Rb(e) {
  return new xc(e);
}
function Nm(e) {
  this._context = e;
}
Nm.prototype = {
  areaStart: za,
  areaEnd: za,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Gu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Nb(e) {
  return new Nm(e);
}
function _m(e) {
  this._context = e;
}
_m.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, i) : this._context.moveTo(n, i);
        break;
      case 3:
        this._point = 4;
      default:
        Gu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _b(e) {
  return new _m(e);
}
function Dm(e, t) {
  this._basis = new xc(e), this._beta = t;
}
Dm.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var i = e[0], a = t[0], l = e[n] - i, f = t[n] - a, d = -1, u; ++d <= n; )
        u = d / n, this._basis.point(
          this._beta * e[d] + (1 - this._beta) * (i + u * l),
          this._beta * t[d] + (1 - this._beta) * (a + u * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Db = function e(t) {
  function n(i) {
    return t === 1 ? new xc(i) : new Dm(i, t);
  }
  return n.beta = function(i) {
    return e(+i);
  }, n;
}(0.85);
function Zu(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Mf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Mf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Zu(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ob = function e(t) {
  function n(i) {
    return new Mf(i, t);
  }
  return n.tension = function(i) {
    return e(+i);
  }, n;
}(0);
function zf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
zf.prototype = {
  areaStart: za,
  areaEnd: za,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Fb = function e(t) {
  function n(i) {
    return new zf(i, t);
  }
  return n.tension = function(i) {
    return e(+i);
  }, n;
}(0);
function If(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
If.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Mb = function e(t) {
  function n(i) {
    return new If(i, t);
  }
  return n.tension = function(i) {
    return e(+i);
  }, n;
}(0);
function $f(e, t, n) {
  var i = e._x1, a = e._y1, l = e._x2, f = e._y2;
  if (e._l01_a > Gn) {
    var d = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * d - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, a = (a * d - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Gn) {
    var h = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, y = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * h + e._x1 * e._l23_2a - t * e._l12_2a) / y, f = (f * h + e._y1 * e._l23_2a - n * e._l12_2a) / y;
  }
  e._context.bezierCurveTo(i, a, l, f, e._x2, e._y2);
}
function Om(e, t) {
  this._context = e, this._alpha = t;
}
Om.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        $f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const zb = function e(t) {
  function n(i) {
    return t ? new Om(i, t) : new Mf(i, 0);
  }
  return n.alpha = function(i) {
    return e(+i);
  }, n;
}(0.5);
function Fm(e, t) {
  this._context = e, this._alpha = t;
}
Fm.prototype = {
  areaStart: za,
  areaEnd: za,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        $f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ib = function e(t) {
  function n(i) {
    return t ? new Fm(i, t) : new zf(i, 0);
  }
  return n.alpha = function(i) {
    return e(+i);
  }, n;
}(0.5);
function Mm(e, t) {
  this._context = e, this._alpha = t;
}
Mm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        $f(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const $b = function e(t) {
  function n(i) {
    return t ? new Mm(i, t) : new If(i, 0);
  }
  return n.alpha = function(i) {
    return e(+i);
  }, n;
}(0.5);
function zm(e) {
  this._context = e;
}
zm.prototype = {
  areaStart: za,
  areaEnd: za,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Jd(e) {
  return new zm(e);
}
function Qp(e) {
  return e < 0 ? -1 : 1;
}
function Jp(e, t, n) {
  var i = e._x1 - e._x0, a = t - e._x1, l = (e._y1 - e._y0) / (i || a < 0 && -0), f = (n - e._y1) / (a || i < 0 && -0), d = (l * a + f * i) / (i + a);
  return (Qp(l) + Qp(f)) * Math.min(Math.abs(l), Math.abs(f), 0.5 * Math.abs(d)) || 0;
}
function eh(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Fd(e, t, n) {
  var i = e._x0, a = e._y0, l = e._x1, f = e._y1, d = (l - i) / 3;
  e._context.bezierCurveTo(i + d, a + d * t, l - d, f - d * n, l, f);
}
function Qu(e) {
  this._context = e;
}
Qu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Fd(this, this._t0, eh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Fd(this, eh(this, n = Jp(this, e, t)), n);
          break;
        default:
          Fd(this, this._t0, n = Jp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Im(e) {
  this._context = new $m(e);
}
(Im.prototype = Object.create(Qu.prototype)).point = function(e, t) {
  Qu.prototype.point.call(this, t, e);
};
function $m(e) {
  this._context = e;
}
$m.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, i, a, l) {
    this._context.bezierCurveTo(t, e, i, n, l, a);
  }
};
function Ou(e) {
  return new Qu(e);
}
function Bb(e) {
  return new Im(e);
}
function Bm(e) {
  this._context = e;
}
Bm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length;
    if (n)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = th(e), a = th(t), l = 0, f = 1; f < n; ++l, ++f)
          this._context.bezierCurveTo(i[0][l], a[0][l], i[1][l], a[1][l], e[f], t[f]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function th(e) {
  var t, n = e.length - 1, i, a = new Array(n), l = new Array(n), f = new Array(n);
  for (a[0] = 0, l[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    a[t] = 1, l[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[n - 1] = 2, l[n - 1] = 7, f[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    i = a[t] / l[t - 1], l[t] -= i, f[t] -= i * f[t - 1];
  for (a[n - 1] = f[n - 1] / l[n - 1], t = n - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + a[n - 1]) / 2, t = 0; t < n - 1; ++t)
    l[t] = 2 * e[t + 1] - a[t + 1];
  return [a, l];
}
function Hb(e) {
  return new Bm(e);
}
function bc(e, t) {
  this._context = e, this._t = t;
}
bc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Wb(e) {
  return new bc(e, 0.5);
}
function Vb(e) {
  return new bc(e, 0);
}
function jb(e) {
  return new bc(e, 1);
}
function Xo(e, t) {
  if ((f = e.length) > 1)
    for (var n = 1, i, a, l = e[t[0]], f, d = l.length; n < f; ++n)
      for (a = l, l = e[t[n]], i = 0; i < d; ++i)
        l[i][1] += l[i][0] = isNaN(a[i][1]) ? a[i][0] : a[i][1];
}
function qo(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function Ub(e, t) {
  return e[t];
}
function Bf() {
  var e = Vt([]), t = qo, n = Xo, i = Ub;
  function a(l) {
    var f = e.apply(this, arguments), d, u = l.length, h = f.length, y = new Array(h), v;
    for (d = 0; d < h; ++d) {
      for (var S = f[d], R = y[d] = new Array(u), k = 0, F; k < u; ++k)
        R[k] = F = [0, +i(l[k], S, k, l)], F.data = l[k];
      R.key = S;
    }
    for (d = 0, v = t(y); d < h; ++d)
      y[v[d]].index = d;
    return n(y, v), y;
  }
  return a.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Vt(Qd.call(l)), a) : e;
  }, a.value = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Vt(+l), a) : i;
  }, a.order = function(l) {
    return arguments.length ? (t = l == null ? qo : typeof l == "function" ? l : Vt(Qd.call(l)), a) : t;
  }, a.offset = function(l) {
    return arguments.length ? (n = l ?? Xo, a) : n;
  }, a;
}
function Kb(e, t) {
  if ((i = e.length) > 0) {
    for (var n, i, a = 0, l = e[0].length, f; a < l; ++a) {
      for (f = n = 0; n < i; ++n)
        f += e[n][a][1] || 0;
      if (f)
        for (n = 0; n < i; ++n)
          e[n][a][1] /= f;
    }
    Xo(e, t);
  }
}
function Yb(e, t) {
  if ((u = e.length) > 0)
    for (var n, i = 0, a, l, f, d, u, h = e[t[0]].length; i < h; ++i)
      for (f = d = 0, n = 0; n < u; ++n)
        (l = (a = e[t[n]][i])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += l) : l < 0 ? (a[1] = d, a[0] = d += l) : (a[0] = 0, a[1] = l);
}
function Xb(e, t) {
  if ((a = e.length) > 0) {
    for (var n = 0, i = e[t[0]], a, l = i.length; n < l; ++n) {
      for (var f = 0, d = 0; f < a; ++f)
        d += e[f][n][1] || 0;
      i[n][1] += i[n][0] = -d / 2;
    }
    Xo(e, t);
  }
}
function qb(e, t) {
  if (!(!((f = e.length) > 0) || !((l = (a = e[t[0]]).length) > 0))) {
    for (var n = 0, i = 1, a, l, f; i < l; ++i) {
      for (var d = 0, u = 0, h = 0; d < f; ++d) {
        for (var y = e[t[d]], v = y[i][1] || 0, S = y[i - 1][1] || 0, R = (v - S) / 2, k = 0; k < d; ++k) {
          var F = e[t[k]], T = F[i][1] || 0, m = F[i - 1][1] || 0;
          R += T - m;
        }
        u += v, h += R * v;
      }
      a[i - 1][1] += a[i - 1][0] = n, u && (n -= h / u);
    }
    a[i - 1][1] += a[i - 1][0] = n, Xo(e, t);
  }
}
function Gb(e) {
  var t = e.map(Zb);
  return qo(e).sort(function(n, i) {
    return t[n] - t[i];
  });
}
function Zb(e) {
  for (var t = -1, n = 0, i = e.length, a, l = -1 / 0; ++t < i; )
    (a = +e[t][1]) > l && (l = a, n = t);
  return n;
}
function Hm(e) {
  var t = e.map(Wm);
  return qo(e).sort(function(n, i) {
    return t[n] - t[i];
  });
}
function Wm(e) {
  for (var t = 0, n = -1, i = e.length, a; ++n < i; )
    (a = +e[n][1]) && (t += a);
  return t;
}
function Qb(e) {
  return Hm(e).reverse();
}
function Jb(e) {
  var t = e.length, n, i, a = e.map(Wm), l = Gb(e), f = 0, d = 0, u = [], h = [];
  for (n = 0; n < t; ++n)
    i = l[n], f < d ? (f += a[i], u.push(i)) : (d += a[i], h.push(i));
  return h.reverse().concat(u);
}
function e0(e) {
  return qo(e).reverse();
}
function bn(e, t) {
  e(t);
}
var nh = {
  ascending: Hm,
  descending: Qb,
  insideout: Jb,
  none: qo,
  reverse: e0
};
function Hf(e) {
  return e && nh[e] || nh.none;
}
var rh = {
  expand: Kb,
  diverging: Yb,
  none: Xo,
  silhouette: Xb,
  wiggle: qb
};
function Wf(e) {
  return e && rh[e] || rh.none;
}
function t0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, i = t.outerRadius, a = t.cornerRadius, l = t.startAngle, f = t.endAngle, d = t.padAngle, u = t.padRadius, h = bb();
  return n != null && bn(h.innerRadius, n), i != null && bn(h.outerRadius, i), a != null && bn(h.cornerRadius, a), l != null && bn(h.startAngle, l), f != null && bn(h.endAngle, f), d != null && bn(h.padAngle, d), u != null && bn(h.padRadius, u), h;
}
function Vf(e) {
  var t = e === void 0 ? {} : e, n = t.x, i = t.x0, a = t.x1, l = t.y, f = t.y0, d = t.y1, u = t.defined, h = t.curve, y = Sb();
  return n && bn(y.x, n), i && bn(y.x0, i), a && bn(y.x1, a), l && bn(y.y, l), f && bn(y.y0, f), d && bn(y.y1, d), u && y.defined(u), h && y.curve(h), y;
}
function Vm(e) {
  var t = e === void 0 ? {} : e, n = t.x, i = t.y, a = t.defined, l = t.curve, f = Rm();
  return n && bn(f.x, n), i && bn(f.y, i), a && f.defined(a), l && f.curve(l), f;
}
function n0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, i = t.endAngle, a = t.padAngle, l = t.value, f = t.sort, d = t.sortValues, u = wb();
  return (f === null || f != null) && u.sort(f), (d === null || d != null) && u.sortValues(d), l != null && u.value(l), a != null && bn(u.padAngle, a), n != null && bn(u.startAngle, n), i != null && bn(u.endAngle, i), u;
}
function r0(e) {
  var t = e.keys, n = e.value, i = e.order, a = e.offset, l = Bf();
  return t && l.keys(t), n && bn(l.value, n), i && l.order(Hf(i)), a && l.offset(Wf(a)), l;
}
var a0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ef.apply(this, arguments);
}
function i0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function o0(e) {
  var t = e.className, n = e.top, i = e.left, a = e.data, l = a === void 0 ? [] : a, f = e.centroid, d = e.innerRadius, u = d === void 0 ? 0 : d, h = e.outerRadius, y = e.cornerRadius, v = e.startAngle, S = e.endAngle, R = e.padAngle, k = e.padRadius, F = e.pieSort, T = e.pieSortValues, m = e.pieValue, O = e.children, N = e.fill, P = N === void 0 ? "" : N, D = i0(e, a0), L = t0({
    innerRadius: u,
    outerRadius: h,
    cornerRadius: y,
    padRadius: k
  }), U = n0({
    startAngle: v,
    endAngle: S,
    padAngle: R,
    value: m,
    sort: F,
    sortValues: T
  }), W = U(l);
  return O ? /* @__PURE__ */ r.createElement(r.Fragment, null, O({
    arcs: W,
    path: L,
    pie: U
  })) : /* @__PURE__ */ r.createElement(at, {
    className: "visx-pie-arcs-group",
    top: n,
    left: i
  }, W.map(function(Z, ce) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + ce
    }, /* @__PURE__ */ r.createElement("path", ef({
      className: Ln("visx-pie-arc", t),
      d: L(Z) || "",
      fill: P == null || typeof P == "string" ? P : P(Z)
    }, D)), f == null ? void 0 : f(L.centroid(Z), Z));
  }));
}
var l0 = ["from", "to", "fill", "className", "innerRef"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, tf.apply(this, arguments);
}
function s0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function an(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, i = e.to, a = i === void 0 ? {
    x: 1,
    y: 1
  } : i, l = e.fill, f = l === void 0 ? "transparent" : l, d = e.className, u = e.innerRef, h = s0(e, l0), y = n.x === a.x || n.y === a.y;
  return /* @__PURE__ */ r.createElement("line", tf({
    ref: u,
    className: Ln("visx-line", d),
    x1: n.x,
    y1: n.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: y ? "crispEdges" : "auto"
  }, h));
}
var u0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, nf.apply(this, arguments);
}
function c0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Kr(e) {
  var t = e.children, n = e.data, i = n === void 0 ? [] : n, a = e.x, l = e.y, f = e.fill, d = f === void 0 ? "transparent" : f, u = e.className, h = e.curve, y = e.innerRef, v = e.defined, S = v === void 0 ? function() {
    return !0;
  } : v, R = c0(e, u0), k = Vm({
    x: a,
    y: l,
    defined: S,
    curve: h
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ r.createElement("path", nf({
    ref: y,
    className: Ln("visx-linepath", u),
    d: k(i) || "",
    fill: d,
    strokeLinecap: "round"
  }, R));
}
var d0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function f0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function p0(e) {
  var t = e.children, n = e.x, i = e.x0, a = e.x1, l = e.y, f = e.y0, d = e.y1, u = e.data, h = u === void 0 ? [] : u, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, k = e.innerRef, F = f0(e, d0), T = Vf({
    x: n,
    x0: i,
    x1: a,
    y: l,
    y0: f,
    y1: d,
    defined: v,
    curve: R
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ r.createElement("path", rf({
    ref: k,
    className: Ln("visx-area", S),
    d: T(h) || ""
  }, F));
}
var h0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, af.apply(this, arguments);
}
function m0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function y0(e) {
  var t = e.x, n = e.x0, i = e.x1, a = e.y, l = e.y1, f = e.y0, d = e.yScale, u = e.data, h = u === void 0 ? [] : u, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, k = e.innerRef, F = e.children, T = m0(e, h0), m = Vf({
    x: t,
    x0: n,
    x1: i,
    defined: v,
    curve: R
  });
  return f == null ? m.y0(d.range()[0]) : bn(m.y0, f), a && !l && bn(m.y1, a), l && !a && bn(m.y1, l), F ? /* @__PURE__ */ r.createElement(r.Fragment, null, F({
    path: m
  })) : /* @__PURE__ */ r.createElement("path", af({
    ref: k,
    className: Ln("visx-area-closed", S),
    d: m(h) || ""
  }, T));
}
var g0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, of.apply(this, arguments);
}
function v0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function x0(e) {
  var t = e.className, n = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, u = e.x, h = e.x0, y = e.x1, v = e.y0, S = e.y1, R = e.value, k = e.order, F = e.offset, T = e.color, m = e.children, O = v0(e, g0), N = r0({
    keys: a,
    value: R,
    order: k,
    offset: F
  }), P = Vf({
    x: u,
    x0: h,
    x1: y,
    y0: v,
    y1: S,
    curve: f,
    defined: d
  }), D = N(l);
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m({
    stacks: D,
    path: P,
    stack: N
  })) : /* @__PURE__ */ r.createElement(at, {
    top: n,
    left: i
  }, D.map(function(L, U) {
    return /* @__PURE__ */ r.createElement("path", of({
      className: Ln("visx-stack", t),
      key: "stack-" + U + "-" + (L.key || ""),
      d: P(L) || "",
      fill: T == null ? void 0 : T(L.key, U)
    }, O));
  }));
}
var b0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Ju() {
  return Ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ju.apply(this, arguments);
}
function S0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function E0(e) {
  var t = e.className, n = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, u = e.x, h = e.x0, y = e.x1, v = e.y0, S = e.y1, R = e.value, k = e.order, F = e.offset, T = e.color, m = e.children, O = S0(e, b0);
  return /* @__PURE__ */ r.createElement(x0, Ju({
    className: t,
    top: n,
    left: i,
    keys: a,
    data: l,
    curve: f,
    defined: d,
    x: u,
    x0: h,
    x1: y,
    y0: v,
    y1: S,
    value: R,
    order: k,
    offset: F,
    color: T
  }, O), m || function(N) {
    var P = N.stacks, D = N.path;
    return P.map(function(L, U) {
      return /* @__PURE__ */ r.createElement("path", Ju({
        className: Ln("visx-area-stack", t),
        key: "area-stack-" + U + "-" + (L.key || ""),
        d: D(L) || "",
        fill: T == null ? void 0 : T(L.key, U)
      }, O));
    });
  });
}
function jf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var k0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, lf.apply(this, arguments);
}
function w0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function jm(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.x0, f = e.x0Scale, d = e.x1Scale, u = e.yScale, h = e.color, y = e.keys, v = e.height, S = e.children, R = w0(e, k0), k = jf(d), F = t.map(function(T, m) {
    return {
      index: m,
      x0: f(l(T)),
      bars: y.map(function(O, N) {
        var P = T[O];
        return {
          index: N,
          key: O,
          value: P,
          width: k,
          x: d(O) || 0,
          y: u(P) || 0,
          color: h(O, N),
          height: v - (u(P) || 0)
        };
      })
    };
  });
  return S ? /* @__PURE__ */ r.createElement(r.Fragment, null, S(F)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-group", n),
    top: i,
    left: a
  }, F.map(function(T) {
    return /* @__PURE__ */ r.createElement(at, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ r.createElement(kr, lf({
        key: "bar-group-bar-" + T.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, R));
    }));
  }));
}
function Um(e) {
  return e == null ? void 0 : e[0];
}
function Km(e) {
  return e == null ? void 0 : e[1];
}
var T0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function C0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function A0(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.x, f = e.y0, d = f === void 0 ? Um : f, u = e.y1, h = u === void 0 ? Km : u, y = e.xScale, v = e.yScale, S = e.color, R = e.keys, k = e.value, F = e.order, T = e.offset, m = e.children, O = C0(e, T0), N = Bf();
  R && N.keys(R), k && bn(N.value, k), F && N.order(Hf(F)), T && N.offset(Wf(T));
  var P = N(t), D = jf(y), L = P.map(function(U, W) {
    var Z = U.key;
    return {
      index: W,
      key: Z,
      bars: U.map(function(ce, te) {
        var V = (v(d(ce)) || 0) - (v(h(ce)) || 0), K = v(h(ce)), X = "bandwidth" in y ? y(l(ce.data)) : Math.max((y(l(ce.data)) || 0) - D / 2);
        return {
          bar: ce,
          key: Z,
          index: te,
          height: V,
          width: D,
          x: X || 0,
          y: K || 0,
          color: S(U.key, te)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(L)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-stack", n),
    top: i,
    left: a
  }, L.map(function(U) {
    return U.bars.map(function(W) {
      return /* @__PURE__ */ r.createElement(kr, sf({
        key: "bar-stack-" + U.index + "-" + W.index,
        x: W.x,
        y: W.y,
        height: W.height,
        width: W.width,
        fill: W.color
      }, O));
    });
  }));
}
var L0 = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function P0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function R0(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.y, f = e.x0, d = f === void 0 ? Um : f, u = e.x1, h = u === void 0 ? Km : u, y = e.xScale, v = e.yScale, S = e.color, R = e.keys, k = e.value, F = e.order, T = e.offset, m = e.children, O = P0(e, L0), N = Bf();
  R && N.keys(R), k && bn(N.value, k), F && N.order(Hf(F)), T && N.offset(Wf(T));
  var P = N(t), D = jf(v), L = P.map(function(U, W) {
    var Z = U.key;
    return {
      index: W,
      key: Z,
      bars: U.map(function(ce, te) {
        var V = (y(h(ce)) || 0) - (y(d(ce)) || 0), K = y(d(ce)), X = "bandwidth" in v ? v(l(ce.data)) : Math.max((v(l(ce.data)) || 0) - V / 2);
        return {
          bar: ce,
          key: Z,
          index: te,
          height: D,
          width: V,
          x: K || 0,
          y: X || 0,
          color: S(U.key, te)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(L)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-stack-horizontal", n),
    top: i,
    left: a
  }, L.map(function(U) {
    return U.bars.map(function(W) {
      return /* @__PURE__ */ r.createElement(kr, uf({
        key: "bar-stack-" + U.index + "-" + W.index,
        x: W.x,
        y: W.y,
        height: W.height,
        width: W.width,
        fill: W.color
      }, O));
    });
  }));
}
var ah = "http://www.w3.org/2000/svg";
function N0(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(ah, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(ah, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var _0 = "__visx_splitpath_svg_path_measurement_id", ih = function() {
  return !0;
};
function D0(e) {
  var t = e.path, n = e.pointsInSegments, i = e.segmentation, a = i === void 0 ? "x" : i, l = e.sampleRate, f = l === void 0 ? 1 : l;
  try {
    var d = N0(_0);
    d.setAttribute("d", t);
    var u = d.getTotalLength(), h = n.length, y = n.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var v = n.map(function(K) {
        var X;
        return (X = K.find(function(B) {
          return typeof B[a] == "number";
        })) == null ? void 0 : X[a];
      }), S = d.getPointAtLength(0), R = d.getPointAtLength(u), k = R[a] > S[a], F = k ? v.map(function(K) {
        return typeof K > "u" ? ih : function(X) {
          return X >= K;
        };
      }) : v.map(function(K) {
        return typeof K > "u" ? ih : function(X) {
          return X <= K;
        };
      }), T = 0, m = 0; m <= u; m += f) {
        for (var O = d.getPointAtLength(m), N = O[a]; T < h - 1 && F[T + 1](N); )
          T += 1;
        y[T].push(O);
      }
    else {
      var P = n.map(function(K) {
        return K.length;
      }), D = P.reduce(function(K, X) {
        return K + X;
      }, 0), L = u / Math.max(1, D - 1), U = P.slice(0, h - 1);
      U.unshift(0);
      for (var W = 2; W < h; W += 1)
        U[W] += U[W - 1];
      for (var Z = 0; Z < h; Z += 1)
        U[Z] *= L;
      for (var ce = 0, te = 0; te <= u; te += f) {
        for (var V = d.getPointAtLength(te); ce < h - 1 && te >= U[ce + 1]; )
          ce += 1;
        y[ce].push(V);
      }
    }
    return y;
  } catch {
    return [];
  }
}
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, cf.apply(this, arguments);
}
var O0 = function(t) {
  return t.x || 0;
}, F0 = function(t) {
  return t.y || 0;
};
function Ym(e) {
  var t = e.children, n = e.className, i = e.curve, a = e.defined, l = e.segmentation, f = e.sampleRate, d = e.segments, u = e.x, h = e.y, y = e.styles, v = de.useMemo(function() {
    var k = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u, F = typeof h == "number" || typeof h > "u" ? function() {
      return h;
    } : h;
    return d.map(function(T) {
      return T.map(function(m, O) {
        return {
          x: k(m, O, T),
          y: F(m, O, T)
        };
      });
    });
  }, [u, h, d]), S = de.useMemo(function() {
    var k = Vm({
      x: u,
      y: h,
      defined: a,
      curve: i
    });
    return k(d.flat()) || "";
  }, [u, h, a, i, d]), R = de.useMemo(function() {
    return D0({
      path: S,
      segmentation: l,
      pointsInSegments: v,
      sampleRate: f
    });
  }, [S, l, v, f]);
  return /* @__PURE__ */ r.createElement("g", null, R.map(function(k, F) {
    return t ? /* @__PURE__ */ r.createElement(r.Fragment, {
      key: F
    }, t({
      index: F,
      segment: k,
      styles: y[F] || y[F % y.length]
    })) : /* @__PURE__ */ r.createElement(Kr, cf({
      key: F,
      className: n,
      data: k,
      x: O0,
      y: F0
    }, y[F] || y[F % y.length]));
  }));
}
Ym.propTypes = {
  segments: Fe.arrayOf(Fe.array).isRequired,
  styles: Fe.array.isRequired,
  children: Fe.func,
  className: Fe.string
};
var M0 = ["tooltipOpen"];
function z0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ec() {
  return ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ec.apply(this, arguments);
}
function Xm(e) {
  var t = de.useState(ec({
    tooltipOpen: !1
  }, e)), n = t[0], i = t[1], a = de.useCallback(function(f) {
    return i(typeof f == "function" ? function(d) {
      d.tooltipOpen;
      var u = z0(d, M0);
      return ec({}, f(u), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [i]), l = de.useCallback(function() {
    return i({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [i]);
  return {
    tooltipOpen: n.tooltipOpen,
    tooltipLeft: n.tooltipLeft,
    tooltipTop: n.tooltipTop,
    tooltipData: n.tooltipData,
    updateTooltip: i,
    showTooltip: a,
    hideTooltip: l
  };
}
var I0 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, tc.apply(this, arguments);
}
function $0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var qm = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, Uf = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, i = e.top, a = e.left, l = e.offsetLeft, f = l === void 0 ? 10 : l, d = e.offsetTop, u = d === void 0 ? 10 : d, h = e.style, y = h === void 0 ? qm : h, v = e.children, S = e.unstyled, R = S === void 0 ? !1 : S, k = e.applyPositionStyle, F = k === void 0 ? !1 : k, T = $0(e, I0);
  return /* @__PURE__ */ r.createElement("div", tc({
    ref: t,
    className: Ln("visx-tooltip", n),
    style: tc({
      top: i == null || u == null ? i : i + u,
      left: a == null || f == null ? a : a + f
    }, F && {
      position: "absolute"
    }, !R && y)
  }, T), v);
});
Uf.propTypes = {
  children: Fe.node,
  className: Fe.string,
  left: Fe.number,
  offsetLeft: Fe.number,
  offsetTop: Fe.number,
  top: Fe.number,
  applyPositionStyle: Fe.bool,
  unstyled: Fe.bool
};
Uf.displayName = "Tooltip";
const B0 = Uf;
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, df.apply(this, arguments);
}
function H0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, ff(e, t);
}
var oh = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function V0(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    W0(i, n);
    function i(l) {
      var f;
      return f = n.call(this, l) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ r.createRef(), f.getRects = f.getRects.bind(H0(f)), f;
    }
    var a = i.prototype;
    return a.componentDidMount = function() {
      var f, d = this;
      this.node = (f = this.nodeRef) != null && f.current ? this.nodeRef.current : eg.findDOMNode(this), this.setState(function() {
        return d.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var f = this.node, d = f.parentNode, u = f.getBoundingClientRect ? f.getBoundingClientRect() : oh, h = d != null && d.getBoundingClientRect ? d.getBoundingClientRect() : oh;
      return {
        rect: u,
        parentRect: h
      };
    }, a.render = function() {
      return /* @__PURE__ */ r.createElement(e, df({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, i;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Gm = /* @__PURE__ */ de.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), j0 = Gm.Provider;
Gm.Consumer;
var U0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, nc.apply(this, arguments);
}
function K0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Zm(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, i = n === void 0 ? 0 : n, a = e.offsetLeft, l = a === void 0 ? 10 : a, f = e.offsetTop, d = f === void 0 ? 10 : f, u = e.parentRect, h = e.rect, y = e.style, v = y === void 0 ? qm : y, S = e.top, R = S === void 0 ? 0 : S, k = e.unstyled, F = k === void 0 ? !1 : k, T = e.nodeRef, m = K0(e, U0), O, N = !1, P = !1;
  if (h && u) {
    var D = i, L = R;
    if (u.width) {
      var U = D + l + h.width - u.width, W = h.width - D - l;
      N = U > 0 && U > W;
    } else {
      var Z = D + l + h.width - window.innerWidth, ce = h.width - D - l;
      N = Z > 0 && Z > ce;
    }
    if (u.height) {
      var te = L + d + h.height - u.height, V = h.height - L - d;
      P = te > 0 && te > V;
    } else
      P = L + d + h.height > window.innerHeight;
    D = N ? D - h.width - l : D + l, L = P ? L - h.height - d : L + d, D = Math.round(D), L = Math.round(L), O = "translate(" + D + "px, " + L + "px)";
  }
  return /* @__PURE__ */ r.createElement(B0, nc({
    ref: T,
    style: nc({
      left: 0,
      top: 0,
      transform: O
    }, !F && v)
  }, m), /* @__PURE__ */ r.createElement(j0, {
    value: {
      isFlippedVertically: !P,
      isFlippedHorizontally: !N
    }
  }, t));
}
Zm.propTypes = {
  nodeRef: Fe.oneOfType([Fe.string, Fe.func, Fe.object])
};
const Qm = V0(Zm);
var pf = /* @__PURE__ */ function() {
  function e(n) {
    var i = n.x, a = i === void 0 ? 0 : i, l = n.y, f = l === void 0 ? 0 : l;
    this.x = 0, this.y = 0, this.x = a, this.y = f;
  }
  var t = e.prototype;
  return t.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, t.toArray = function() {
    return [this.x, this.y];
  }, e;
}();
function Y0(e) {
  return !!e && e instanceof Element;
}
function X0(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function q0(e) {
  return !!e && "createSVGPoint" in e;
}
function G0(e) {
  return !!e && "getScreenCTM" in e;
}
function Z0(e) {
  return !!e && "changedTouches" in e;
}
function Q0(e) {
  return !!e && "clientX" in e;
}
function J0(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function is() {
  return is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, is.apply(this, arguments);
}
var Md = {
  x: 0,
  y: 0
};
function eS(e) {
  if (!e)
    return is({}, Md);
  if (Z0(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : is({}, Md);
  if (Q0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : is({}, Md);
}
function lh(e, t) {
  if (!e || !t)
    return null;
  var n = eS(t), i = X0(e) ? e.ownerSVGElement : e, a = G0(i) ? i.getScreenCTM() : null;
  if (q0(i) && a) {
    var l = i.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(a.inverse()), new pf({
      x: l.x,
      y: l.y
    });
  }
  var f = e.getBoundingClientRect();
  return new pf({
    x: n.x - f.left - e.clientLeft,
    y: n.y - f.top - e.clientTop
  });
}
function sh(e, t) {
  if (Y0(e) && t)
    return lh(e, t);
  if (J0(e)) {
    var n = e, i = n.target;
    if (i)
      return lh(i, n);
  }
  return null;
}
const Jm = (e) => {
  const { tableData: t, config: n, formatNumber: i, capitalize: a, formatDate: l, formatTooltipsDate: f, parseDate: d, setSharedFilter: u } = de.useContext(Ct), { xScale: h, yScale: y, showTooltip: v, hideTooltip: S } = e, { xAxis: R, visualizationType: k, orientation: F, yAxis: T, runtime: m } = n, O = (B, oe) => {
    const { x: re, y: le } = oe, j = {
      data: B || {},
      dataXPosition: re + 10,
      dataYPosition: le
    };
    return {
      tooltipLeft: j.dataXPosition,
      tooltipTop: j.dataYPosition,
      tooltipData: j
    };
  }, N = (B, oe, re) => {
    let le = !1;
    return B.series.forEach((G) => {
      G.hideZeroValue && oe === "0" && re === G.dataKey && (le = !0), G.hideNullValue && isNaN(oe) && re === G.dataKey && (le = !0);
    }), le;
  }, P = (B, oe) => {
    B.stopPropagation();
    const re = sh(B), { x: le, y: G } = re, { data: j, arc: J } = oe ?? {}, ue = U(le - Number(n.yAxis.size || 0)), _e = k !== "Pie" ? n.series.filter((ee) => ee.tooltip === !0).map((ee) => ee.dataKey) : n.series.map((ee) => ee.dataKey);
    _e.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((ee) => {
      ee.confidenceIntervals.map((De) => {
        De.showInTooltip && (_e.push(De.high), _e.push(De.low));
      });
    });
    function be(ee) {
      let De = [];
      for (let we in ee)
        ee.hasOwnProperty(we) && De.push(ee[we].name);
      return De;
    }
    _e.push(...be(n.columns)), _e.push(...be(n.columns));
    const ye = ce(ue, _e), Le = t.filter((ee) => ee[R.dataKey] === W(G)), ae = F === "vertical" ? ye : Le, Ie = (ee) => {
      const De = n.series.filter((Ue) => Ue.dataKey === ee)[0];
      return De != null && De.axis ? String(De.axis).toLowerCase() : "left";
    }, he = (() => {
      var Ge, et, Je;
      const ee = n.columns, De = [], we = [];
      for (const [st, Ke] of Object.entries(ee)) {
        const We = {
          addColPrefix: n.columns[st].prefix,
          addColSuffix: n.columns[st].suffix,
          addColRoundTo: n.columns[st].roundToPlace ? n.columns[st].roundToPlace : "",
          addColCommas: n.columns[st].commas
        };
        let Be = null;
        n.visualizationType === "Pie" ? Be = J == null ? void 0 : J.data[Ke.name] : Be = (Ge = ae[0]) == null ? void 0 : Ge[Ke.name];
        const $e = Tf(Be, "left", !0, n, We);
        Ke.tooltips && De.push([Ke.label, $e]);
      }
      const Ue = [];
      return De.forEach((st) => {
        Ue.push([st[0], st[1]]);
      }), k === "Pie" && we.push(
        // ignore
        [n.xAxis.dataKey, j],
        [n.runtime.yAxis.dataKey, i(J == null ? void 0 : J.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((J == null ? void 0 : J.endAngle) - (J == null ? void 0 : J.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && we.push([n.xAxis.dataKey, W(G)]), k !== "Pie" && k !== "Forest Plot" && we.push(
        ...(Je = (et = te()) == null ? void 0 : et.filter((st) => {
          var Ke, We;
          return ((Ke = n.series) == null ? void 0 : Ke.find((Be) => Be.dataKey === st && Be.tooltip)) || ((We = n.xAxis) == null ? void 0 : We.dataKey) == st;
        })) == null ? void 0 : Je.flatMap((st) => {
          var ht, qe, pt, gt;
          const Ke = n.general.showMissingDataLabel && !((ht = ae[0]) != null && ht[st]);
          let We = st === n.xAxis.dataKey ? (qe = ae[0]) == null ? void 0 : qe[st] : i((pt = ae[0]) == null ? void 0 : pt[st], Ie(st));
          We = Ke ? "N/A" : We;
          const Be = (gt = n.preliminaryData) == null ? void 0 : gt.find((ut) => {
            var Rt;
            return ut.label && ut.type === "suppression" && ut.displayTooltip && ((Rt = ae[0]) == null ? void 0 : Rt[st]) === ut.value && (!ut.column || st === ut.column);
          });
          return Be && (We = Be.label), N(n, We, st) ? [] : [[st, We, Ie(st)]];
        })
      ), [...we, ...Ue];
    })();
    if (!he)
      return;
    const Pe = O(he, re);
    v(Pe);
  }, D = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      S();
    }, 3e3) : S();
  }, L = (B) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let oe = h.step();
      const le = Math.floor(Number(B) / oe);
      return h.domain()[le - 1];
    }
    if (Cn(n.xAxis) && n.visualizationType !== "Combo") {
      const oe = vp((j) => d(j[n.xAxis.dataKey])).left, re = h.invert(h(B)), le = oe(n.data, re, 1);
      return d(n.data[le - 1][n.xAxis.dataKey]);
    }
  }, U = (B, oe = !1) => {
    if (k !== "Pie" && F !== "horizontal") {
      if (h.type === "point" || R.type === "continuous" || Cn(R)) {
        let re = null, le = Number.MAX_VALUE, G = B;
        return t.forEach((j) => {
          const J = Cn(R) ? h(d(j[R.dataKey])) : h(j[R.dataKey]);
          let ue = n.barHeight;
          const _e = Math.abs(Number(J - G + (oe ? ue * 2 : 0)));
          _e <= le && (le = _e, re = (Cn(R), j[R.dataKey]));
        }), re;
      }
      if (n.xAxis.type === "categorical" || k === "Combo" && F !== "horizontal" && k !== "Forest Plot") {
        let le = (h.range()[1] - h.range()[0]) / (h.domain().length + 1);
        const j = Math.floor((Number(B) - le / 2) / le);
        return h.domain()[j];
      }
      if (Cn(R) && k !== "Combo" && F !== "horizontal") {
        const re = vp((J) => d(J[n.xAxis.dataKey])).left, le = h.invert(B), G = re(n.data, le, 1);
        return d(n.data[G - 1][n.xAxis.dataKey]);
      }
    }
  }, W = (B, oe) => {
    if (k === "Pie")
      return;
    let re = Number.MAX_VALUE, le = null;
    return t.forEach((G, j) => {
      const J = y(k !== "Forest Plot" ? G[n.xAxis.dataKey] : j), ue = Math.abs(J - B);
      ue < re && (re = ue, le = oe ? G[oe] : G[n.xAxis.dataKey]);
    }), le;
  }, Z = (B) => {
    var oe, re;
    try {
      const le = sh(B), { x: G } = le;
      if (!G)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let j = U(G, !0), J = (oe = n.data) == null ? void 0 : oe.filter((ue) => ue[n.xAxis.dataKey] === j);
      if (!j)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (Cn(R) && j && (j = new Date(j), j = l(j), J = (re = n.data) == null ? void 0 : re.filter((ue) => l(new Date(ue[n.xAxis.dataKey])) === j)), !J[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${j}`);
      u && (n != null && n.uid) && (J != null && J[0]) && u(n.uid, J[0]);
    } catch (le) {
      console.error(le.message);
    }
  }, ce = (B, oe) => {
    try {
      let re;
      return R.type === "categorical" ? re = t.filter((G) => G[R.dataKey] === B) : re = t.filter((G) => G[R.dataKey] === B), !re || re.length === 0 ? [] : re.map((G) => Object.fromEntries(Object.entries(G).filter(([j, J]) => oe.includes(j))));
    } catch (re) {
      console.error("COVE", re);
    }
  }, te = () => {
    var B;
    try {
      let oe, re = [], le = [];
      if ((B = n.series) == null || B.forEach((G) => {
        G.type === "Forecasting" && (re.push(G.stageColumn), G == null || G.confidenceIntervals.forEach((j) => {
          j.showInTooltip === !0 && (le.push(j.low), le.push(j.high));
        }));
      }), !n.dashboard)
        switch (k) {
          case "Combo":
            oe = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...le];
            break;
          case "Forecasting":
            oe = [m.xAxis.dataKey, ...re, ...le];
            break;
          case "Line":
            oe = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            oe = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            oe = F === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            oe = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (oe = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...re, ...le]), oe;
    } catch (oe) {
      console.error("COVE", oe);
    }
  }, V = (B) => {
    const { dataXPosition: oe, dataYPosition: re } = B;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${oe}px, ${Number(re)}px)`
    };
  }, K = (B) => {
    var re, le;
    let oe = n.series.filter((G) => G.dataKey === B);
    return (re = oe[0]) != null && re.name ? (le = oe[0]) == null ? void 0 : le.name : B;
  };
  return {
    getIncludedTooltipSeries: te,
    getXValueFromCoordinate: U,
    getXValueFromCoordinateDate: L,
    getYScaleValues: ce,
    handleTooltipClick: Z,
    handleTooltipMouseOff: D,
    handleTooltipMouseOver: P,
    TooltipListItem: ({ item: B }) => {
      const [oe, re] = B, [le, G, j] = re;
      if (k === "Forest Plot")
        return le === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${Cn(T) ? l(d(le, !1)) : G}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${K(le)}: ${i(G, "left")}`);
      const J = n.tooltips.dateDisplayFormat ? f(d(G, !1)) : l(d(G, !1));
      return k === "Bar" && F === "horizontal" && le === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? J : G}`) : le === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${Cn(R) ? J : G}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${K(le)}: ${G}`);
    },
    tooltipStyles: V
  };
};
function Kf(e, { threshold: t = 0, root: n = null, rootMargin: i = "0%", freezeOnceVisible: a = !1 }) {
  const [l, f] = de.useState(), d = (l == null ? void 0 : l.isIntersecting) && a, u = ([h]) => {
    f(h);
  };
  return de.useEffect(() => {
    setTimeout(() => {
      const h = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || d || !h)
        return;
      const v = { threshold: t, root: n, rootMargin: i }, S = new IntersectionObserver(u, v);
      return S.observe(h), () => S.disconnect();
    }, 500);
  }, [e, t, n, i, d]), l;
}
const hf = (e, t = !1) => {
  t && console.log("handleChartAriaLabels Testing On:", e);
  try {
    if (!e.visualizationType)
      throw Error("handleChartAriaLabels: no visualization type found in state");
    let n = "";
    return e.visualizationType && (n += `${e.visualizationType} chart`), e.title && e.visualizationType && (n += ` with the title: ${e.title}`), n;
  } catch (n) {
    console.error("COVE: ", n.message);
  }
};
var tS = ["flexDirection", "alignItems", "margin", "display", "children"];
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, mf.apply(this, arguments);
}
function nS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function rc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, i = e.alignItems, a = i === void 0 ? "center" : i, l = e.margin, f = l === void 0 ? "0" : l, d = e.display, u = d === void 0 ? "flex" : d, h = e.children, y = nS(e, tS);
  return /* @__PURE__ */ r.createElement("div", mf({
    className: "visx-legend-item",
    style: {
      display: u,
      alignItems: a,
      flexDirection: n,
      margin: f
    }
  }, y), h);
}
rc.propTypes = {
  alignItems: Fe.string,
  margin: Fe.oneOfType([Fe.string, Fe.number]),
  children: Fe.node,
  display: Fe.string
};
var rS = ["flex", "label", "margin", "align", "children"];
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, yf.apply(this, arguments);
}
function aS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ac(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, i = e.label, a = e.margin, l = a === void 0 ? "5px 0" : a, f = e.align, d = f === void 0 ? "left" : f, u = e.children, h = aS(e, rS);
  return /* @__PURE__ */ r.createElement("div", yf({
    className: "visx-legend-label",
    style: {
      justifyContent: d,
      display: "flex",
      flex: n,
      margin: l
    }
  }, h), u || i);
}
ac.propTypes = {
  align: Fe.string,
  label: Fe.node,
  flex: Fe.oneOfType([Fe.string, Fe.number]),
  margin: Fe.oneOfType([Fe.string, Fe.number]),
  children: Fe.node
};
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function Yf(e) {
  var t = e.fill, n = e.width, i = e.height, a = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: gf({
      width: n,
      height: i,
      background: t
    }, a)
  });
}
Yf.propTypes = {
  fill: Fe.string,
  width: Fe.oneOfType([Fe.string, Fe.number]),
  height: Fe.oneOfType([Fe.string, Fe.number])
};
function ey(e) {
  var t = e.fill, n = e.width, i = e.height, a = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof i == "string" || typeof i > "u" ? 0 : i, d = Math.max(l, f), u = d / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: d,
    height: d
  }, /* @__PURE__ */ r.createElement(at, {
    top: u,
    left: u
  }, /* @__PURE__ */ r.createElement("circle", {
    r: u,
    fill: t,
    style: a
  })));
}
ey.propTypes = {
  fill: Fe.string,
  width: Fe.oneOfType([Fe.string, Fe.number]),
  height: Fe.oneOfType([Fe.string, Fe.number])
};
function ty(e) {
  var t = e.fill, n = e.width, i = e.height, a = e.style, l = typeof i == "string" || typeof i > "u" ? 0 : i, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: i
  }, /* @__PURE__ */ r.createElement(at, {
    top: l / 2 - f / 2
  }, /* @__PURE__ */ r.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: f,
    style: a
  })));
}
ty.propTypes = {
  fill: Fe.string,
  width: Fe.oneOfType([Fe.string, Fe.number]),
  height: Fe.oneOfType([Fe.string, Fe.number])
};
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, os.apply(this, arguments);
}
var zd = function() {
};
function iS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, i = e.fill, a = i === void 0 ? zd : i, l = e.size, f = l === void 0 ? zd : l, d = e.width, u = e.height, h = e.label, y = e.item, v = e.itemIndex, S = e.shapeStyle, R = S === void 0 ? zd : S, k = {
    width: d,
    height: u,
    item: y,
    itemIndex: v,
    label: h,
    fill: a(os({}, h)),
    size: f(os({}, h)),
    style: R(os({}, h))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(ey, k) : n === "line" ? /* @__PURE__ */ r.createElement(ty, k) : /* @__PURE__ */ r.createElement(Yf, k) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, k) : n ? /* @__PURE__ */ r.createElement(n, k) : null;
}
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function ny(e) {
  var t = e.shape, n = t === void 0 ? Yf : t, i = e.width, a = e.height, l = e.margin, f = e.label, d = e.item, u = e.itemIndex, h = e.fill, y = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(ic({}, f)) : i,
      height: y ? y(ic({}, f)) : a,
      margin: l
    }
  }, iS({
    shape: n,
    item: d,
    itemIndex: u,
    label: f,
    width: i,
    height: a,
    fill: h,
    shapeStyle: v
  }));
}
ny.propTypes = {
  itemIndex: Fe.number.isRequired,
  margin: Fe.oneOfType([Fe.string, Fe.number]),
  width: Fe.oneOfType([Fe.string, Fe.number]),
  height: Fe.oneOfType([Fe.string, Fe.number])
};
function ry(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function uh(e) {
  return String(ry(e));
}
function oS(e) {
  var t = e.scale, n = e.labelFormat;
  return function(i, a) {
    return {
      datum: i,
      index: a,
      text: "" + n(i, a),
      value: t(i)
    };
  };
}
var lS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function sS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var uS = {
  display: "flex"
};
function ay(e) {
  var t = e.className, n = e.style, i = n === void 0 ? uS : n, a = e.scale, l = e.shape, f = e.domain, d = e.fill, u = d === void 0 ? uh : d, h = e.size, y = h === void 0 ? uh : h, v = e.labelFormat, S = v === void 0 ? ry : v, R = e.labelTransform, k = R === void 0 ? oS : R, F = e.shapeWidth, T = F === void 0 ? 15 : F, m = e.shapeHeight, O = m === void 0 ? 15 : m, N = e.shapeMargin, P = N === void 0 ? "2px 4px 2px 0" : N, D = e.shapeStyle, L = e.labelAlign, U = L === void 0 ? "left" : L, W = e.labelFlex, Z = W === void 0 ? "1" : W, ce = e.labelMargin, te = ce === void 0 ? "0 4px" : ce, V = e.itemMargin, K = V === void 0 ? "0" : V, X = e.direction, B = X === void 0 ? "column" : X, oe = e.itemDirection, re = oe === void 0 ? "row" : oe, le = e.legendLabelProps, G = e.children, j = sS(e, lS), J = f || ("domain" in a ? a.domain() : []), ue = k({
    scale: a,
    labelFormat: S
  }), _e = J.map(ue);
  return G ? /* @__PURE__ */ r.createElement(r.Fragment, null, G(_e)) : /* @__PURE__ */ r.createElement("div", {
    className: Ln("visx-legend", t),
    style: ls({}, i, {
      flexDirection: B
    })
  }, _e.map(function(be, ye) {
    return /* @__PURE__ */ r.createElement(rc, ls({
      key: "legend-" + be.text + "-" + ye,
      margin: K,
      flexDirection: re
    }, j), /* @__PURE__ */ r.createElement(ny, {
      shape: l,
      height: O,
      width: T,
      margin: P,
      item: J[ye],
      itemIndex: ye,
      label: be,
      fill: u,
      size: y,
      shapeStyle: D
    }), /* @__PURE__ */ r.createElement(ac, ls({
      label: be.text,
      flex: Z,
      margin: te,
      align: U
    }, le)));
  }));
}
ay.propTypes = {
  children: Fe.func,
  className: Fe.string,
  domain: Fe.array,
  shapeWidth: Fe.oneOfType([Fe.string, Fe.number]),
  shapeHeight: Fe.oneOfType([Fe.string, Fe.number]),
  shapeMargin: Fe.oneOfType([Fe.string, Fe.number]),
  labelAlign: Fe.string,
  labelFlex: Fe.oneOfType([Fe.string, Fe.number]),
  labelMargin: Fe.oneOfType([Fe.string, Fe.number]),
  itemMargin: Fe.oneOfType([Fe.string, Fe.number]),
  fill: Fe.func,
  size: Fe.func,
  shapeStyle: Fe.func
};
function cS(e) {
  return /* @__PURE__ */ r.createElement(ay, e);
}
function dS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Sc = (e, t) => {
  var F;
  const { formatDate: n, parseDate: i } = de.useContext(Ct);
  let a = [], l = "", f = [], d = [];
  ((F = e.series) == null ? void 0 : F.length) > 0 && e.data ? (a = e.series[0], l = e.series[0].dataKey, f = e.highlightedBarValues, d = e.data.map((T) => T[e.xAxis.dataKey])) : (a = [], l = "", f = [], d = []);
  const u = (T, m) => {
    const O = [...e.highlightedBarValues];
    O[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: O
    });
  }, h = (T, m) => {
    T.preventDefault();
    const O = [...e.highlightedBarValues];
    O[m].value = T.target.value, O[m].dataKey = l, t({
      ...e,
      highlightedBarValues: O
    });
  }, y = (T, m) => {
    T.preventDefault();
    const O = [...e.highlightedBarValues];
    O.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: O
    });
  }, v = (T, m) => {
    T.preventDefault();
    const O = [...e.highlightedBarValues];
    O.splice(m, 1), t({
      ...e,
      highlightedBarValues: O
    });
  }, S = (T, m) => {
    const O = [...e.highlightedBarValues];
    O[m].color = T.target.value, t({
      ...e
    });
  }, R = (T, m) => {
    const O = [...e.highlightedBarValues];
    O[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: O
    });
  }, k = () => {
  };
  return k.checkFontColor = (T, m, O) => {
    if (e.xAxis.type === "date") {
      if (k.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return O;
  }, k.formatDates = (T) => T.map((m) => m ? n(i(m)) : !1), k.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((N) => {
      const { legendLabel: P } = N;
      return m[P] ? !1 : (m[P] = !0, !0);
    });
  }, {
    HighLightedBarUtils: k,
    highlightedSeries: a,
    highlightedSeriesKey: l,
    highlightedBarValues: f,
    highlightedSeriesValues: d,
    handleUpdateHighlightedBar: h,
    handleAddNewHighlightedBar: y,
    handleRemoveHighlightedBar: v,
    handleUpdateHighlightedBarColor: S,
    handleHighlightedBarLegendLabel: R,
    handleUpdateHighlightedBorderWidth: u
  };
}, iy = (e) => {
  switch (e) {
    case "dashed-sm":
      return "5 5";
    case "Dashed Small":
      return "5 5";
    case "dashed-md":
      return "10 5";
    case "Dashed Medium":
      return "10 5";
    case "dashed-lg":
      return "15 5";
    case "Dashed Large":
      return "15 5";
    default:
      return 0;
  }
}, fS = (e, t) => e ? t ? "35px" : "15px" : "0px", oy = de.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: i, highlightReset: a, currentViewport: l, formatLabels: f, skipId: d = "legend" }, u) => {
  const { innerClasses: h, containerClasses: y } = dS(e), { runtime: v, legend: S } = e;
  if (!S)
    return null;
  const R = (S == null ? void 0 : S.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !S.hide, k = {
    marginBottom: R ? "15px" : "0px",
    marginTop: R && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : fS(R, e.brush.active)
  }, { HighLightedBarUtils: F } = Sc(e);
  let T = F.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { ref: u, style: k, id: d || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, S.label && /* @__PURE__ */ r.createElement("h3", null, Li(S.label)), S.description && /* @__PURE__ */ r.createElement("p", null, Li(S.description)), /* @__PURE__ */ r.createElement(cS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (m) => {
    var O, N, P, D;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: h.join(" ") }, f(m).map((L, U) => {
      var ce, te, V, K;
      let W = ["legend-item", `legend-text--${L.text.replace(" ", "").toLowerCase()}`], Z = L.datum;
      if (e.exclusions.active && ((ce = e.exclusions.keys) != null && ce.includes(Z)))
        return null;
      if (v.seriesLabels) {
        let X = e.runtime.seriesLabelsAll.indexOf(Z);
        Z = e.runtime.seriesKeys[X], ((te = v == null ? void 0 : v.forecastingSeriesKeys) == null ? void 0 : te.length) > 0 && (Z = L.text);
      }
      return n.length > 0 && n.includes(Z) === !1 && W.push("inactive"), /* @__PURE__ */ r.createElement(
        rc,
        {
          className: W.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (X) => {
            X.key === "Enter" && (X.preventDefault(), i(L));
          },
          onClick: (X) => {
            X.preventDefault(), i(L);
          },
          role: "button"
        },
        /* @__PURE__ */ r.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(an, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: L.value, strokeWidth: 2, strokeDasharray: iy((V = e.series[U]) != null && V.type ? (K = e.series[U]) == null ? void 0 : K.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(cp, { viewport: l, margin: "0", fill: L.value, display: !0 }))),
        /* @__PURE__ */ r.createElement(ac, { align: "left", margin: "0 0 0 4px" }, L.text)
      );
    }), T.map((L, U) => {
      let W = "legend-item", Z = L.legendLabel;
      return Z ? (n.length > 0 && n.includes(Z) === !1 && (W += " inactive"), /* @__PURE__ */ r.createElement(
        rc,
        {
          className: W,
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (ce) => {
            ce.key === "Enter" && (ce.preventDefault(), i(L.legendLabel));
          },
          onClick: (ce) => {
            ce.preventDefault(), i(L.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(cp, { fill: "transparent", borderColor: L.color ? L.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(ac, { align: "left", margin: "0 0 0 4px" }, L.legendLabel ? L.legendLabel : L.value)
      )) : !1;
    })), /* @__PURE__ */ r.createElement(r.Fragment, null, ((O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.some((L) => L.label && L.type === "effect" && L.style)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map((L, U) => /* @__PURE__ */ r.createElement(r.Fragment, null, L.label && L.type === "effect" && L.style && /* @__PURE__ */ r.createElement("div", { key: U, className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.lineCode), /* @__PURE__ */ r.createElement("p", null, " ", L.label)))))), !e.legend.hideSuppressedLabels && ((P = e == null ? void 0 : e.preliminaryData) == null ? void 0 : P.some((L) => L.label && L.displayLegend && L.type === "suppression" && L.value && ((L == null ? void 0 : L.style) || L.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (D = e == null ? void 0 : e.preliminaryData) == null ? void 0 : D.map(
      (L, U) => L.displayLegend && L.type === "suppression" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: U + "Bar", className: `legend-preliminary ${L.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.iconCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label))), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: U + "Line", className: "legend-preliminary " }, /* @__PURE__ */ r.createElement("span", null, L.lineCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label))), e.visualizationType === "Combo" && /* @__PURE__ */ r.createElement(r.Fragment, null, L.symbol && L.iconCode && /* @__PURE__ */ r.createElement("div", { key: U + "Combo", className: `legend-preliminary ${L.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.iconCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label)), L.style && L.lineCode && /* @__PURE__ */ r.createElement("div", { key: U + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", null, L.lineCode), /* @__PURE__ */ r.createElement("p", null, L.label))))
    )))));
  }), n.length > 0 && /* @__PURE__ */ r.createElement(fs, { onClick: (m) => a(m), style: { marginTop: "1rem" } }, "Reset"));
});
function pS(e) {
  return Vy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const ly = (e, t, n, i) => (a) => {
  var S, R, k, F, T;
  const { visualizationType: l, visualizationSubType: f, series: d, runtime: u } = e, h = (m) => {
    var O;
    return e.legend.reverseLabelOrder && ((O = e.legend) == null ? void 0 : O.position) === "bottom" ? m.reverse() : m;
  }, y = (S = e.legend) == null ? void 0 : S.colorCode;
  if (l === "Deviation Bar") {
    const [m, O] = Iu[e.twoColor.palette], N = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, P = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: O
    };
    return h([N, P]);
  }
  if (l === "Bar" && f === "regular" && y && (d == null ? void 0 : d.length) === 1) {
    let m = dr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, n.length);
    const O = /* @__PURE__ */ new Set();
    t.forEach((P) => O.add(P[y]));
    const N = Array.from(O).map((P, D) => ({
      datum: P,
      index: D,
      text: P,
      value: m[D]
    }));
    return h(N);
  }
  if (((R = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : R.length) > 0) {
    let m = [];
    return (F = (k = e.runtime) == null ? void 0 : k.forecastingSeriesKeys) == null || F.map((O, N) => {
      var P;
      return (P = O == null ? void 0 : O.stages) == null ? void 0 : P.map((D, L) => {
        var Z, ce, te, V;
        let U = (Z = $u[D.color]) != null && Z[2] ? (ce = $u[D.color]) == null ? void 0 : ce[2] : (te = dr[D.color]) != null && te[2] ? (V = dr[D.color]) == null ? void 0 : V[2] : "#ccc";
        const W = {
          datum: D.key,
          index: L,
          text: D.key,
          value: U
        };
        m.push(W);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((O, N) => {
      let P = dr[e.palette][N] ? dr[e.palette][N] : "#ccc";
      const D = {
        datum: O,
        index: N,
        text: O,
        value: P
      };
      m.push(D);
    }), h(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((N) => {
      m.add(N.name || N.dataKey);
    });
    const O = Array.from(m).map((N, P) => ({
      datum: N,
      index: P,
      text: N,
      value: i(N)
    }));
    return h(O);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let O = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: N, icon: P }, D) => {
      if (N && P) {
        const L = {
          datum: N,
          index: m + D,
          text: N,
          icon: /* @__PURE__ */ r.createElement(pS, { color: "#000", size: 15 })
        };
        O.push(L);
      }
    }), [...a, ...O];
  }
  return h(a);
}, Eu = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), hS = (e) => {
  const { transformedData: t, config: n, colorScale: i, currentViewport: a, dimensions: l, highlight: f, highlightReset: d, seriesHighlight: u } = de.useContext(Ct), { tooltipData: h, showTooltip: y, hideTooltip: v, tooltipOpen: S, tooltipLeft: R, tooltipTop: k } = Xm(), { handleTooltipMouseOver: F, handleTooltipMouseOff: T, TooltipListItem: m } = Jm({
    xScale: !1,
    yScale: !1,
    showTooltip: y,
    hideTooltip: v
  }), [O, N] = de.useState(void 0), [P, D] = de.useState(!1), L = Object.values(n.columns).filter((j) => j.showInViz), U = L.length > 0, W = U ? "pivotColumn" : void 0, Z = de.useMemo(() => {
    if (U) {
      let j = [];
      const J = n.yAxis.dataKey, ue = L.map((ye) => ye.name), _e = [J, ...ue], be = n.xAxis.dataKey;
      return t.forEach((ye) => {
        _e.forEach((Le) => {
          const ae = ye[Le];
          ae && j.push({
            [W]: ae,
            [be]: `${ye[be]} - ${Le}`
          });
        });
      }), j;
    }
    return t;
  }, [t, U]), ce = de.useMemo(() => {
    if (U) {
      const j = {};
      Z.forEach((_e) => {
        j[_e[n.xAxis.dataKey]] || (j[_e[n.xAxis.dataKey]] = !0);
      });
      const J = Object.entries(j).length;
      let ue = n.customColors || dr[n.palette];
      return ue = ue.slice(0, J), Zh({
        domain: Object.keys(j),
        range: ue,
        unknown: null
      });
    }
    return i;
  }, [i, U]), te = de.useRef(), V = Kf(te, {
    freezeOnceVisible: !1
  });
  de.useEffect(() => {
    document.querySelector(".isEditor") && D((J) => !0);
  }), de.useEffect(() => {
    V != null && V.isIntersecting && n.animate && !P && setTimeout(() => {
      D(!0);
    }, 500);
  }, [V == null ? void 0 : V.isIntersecting, n.animate]);
  const K = ({ arcs: j, path: J, getKey: ue }) => {
    const _e = Xx(j, ue, {
      from: Eu,
      enter: Eu,
      update: Eu,
      leave: Eu
    });
    return de.useEffect(() => {
      const be = setTimeout(() => {
        v();
      }, 500);
      return () => {
        clearTimeout(be);
      };
    }, [h]), /* @__PURE__ */ r.createElement(r.Fragment, null, _e.map(({ item: be, props: ye, key: Le }, ae) => /* @__PURE__ */ r.createElement(at, { className: be.data[n.xAxis.dataKey], key: `${Le}-${ae}`, style: { opacity: n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(be.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      Zp.path,
      {
        d: Wx(
          [ye.startAngle, ye.endAngle],
          (Ie, Ee) => J({
            ...be,
            startAngle: Ie,
            endAngle: Ee
          })
        ),
        fill: ce(be.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Ie) => F(Ie, { data: be.data[n.runtime.xAxis.dataKey], arc: be }),
        onMouseLeave: (Ie) => T()
      }
    ))), _e.map(({ item: be, key: ye }, Le) => {
      const [ae, Ie] = J.centroid(be), Ee = be.endAngle - be.startAngle >= 0.1;
      let he = "#FFF";
      return ce(be.data[n.runtime.xAxis.dataKey]) && (he = jo(he, ce(be.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ r.createElement(Zp.g, { key: `${ye}${Le}` }, Ee && /* @__PURE__ */ r.createElement(kt, { style: { fill: he }, x: ae, y: Ie, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((be.endAngle - be.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [X] = l;
  n && n.legend && !n.legend.hide && a === "lg" && (X = X * 0.73);
  const B = n.heights.vertical, oe = Math.min(X, B) / 2, re = B / 2, le = n.pieType === "Donut" ? 75 : oe;
  de.useEffect(() => {
    if (u.length > 0 && n.legend.behavior !== "highlight") {
      let j = [];
      Z.forEach((J) => {
        u.indexOf(J[n.runtime.xAxis.dataKey]) !== -1 && j.push(J);
      }), N(j);
    } else
      N(void 0);
  }, [u]);
  const G = ly(n, [], Z, ce);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dr, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: oe * 2, height: B, className: `animated-pie group ${n.animate === !1 || P ? "animated" : ""}`, role: "img", "aria-label": hf(n) }, /* @__PURE__ */ r.createElement(at, { top: re, left: oe }, /* @__PURE__ */ r.createElement(
    o0,
    {
      data: O || Z,
      pieValue: (j) => j[W || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: oe - le,
      outerRadius: oe
    },
    (j) => /* @__PURE__ */ r.createElement(K, { ...j, getKey: (J) => J.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: te }), h && Object.entries(h.data).length > 0 && S && y && h.dataYPosition && h.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Qm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: R, top: k }, /* @__PURE__ */ r.createElement("ul", null, typeof h == "object" && Object.entries(h.data).map((j, J) => /* @__PURE__ */ r.createElement(m, { item: j, key: J })))))), /* @__PURE__ */ r.createElement(oy, { config: n, colorScale: ce, seriesHighlight: u, highlight: f, highlightReset: d, currentViewport: a, formatLabels: G }));
};
function bs(e) {
  return e.split("-")[1];
}
function Xf(e) {
  return e === "y" ? "height" : "width";
}
function Di(e) {
  return e.split("-")[0];
}
function Ss(e) {
  return ["top", "bottom"].includes(Di(e)) ? "x" : "y";
}
function ch(e, t, n) {
  let { reference: i, floating: a } = e;
  const l = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, d = Ss(t), u = Xf(d), h = i[u] / 2 - a[u] / 2, y = d === "x";
  let v;
  switch (Di(t)) {
    case "top":
      v = { x: l, y: i.y - a.height };
      break;
    case "bottom":
      v = { x: l, y: i.y + i.height };
      break;
    case "right":
      v = { x: i.x + i.width, y: f };
      break;
    case "left":
      v = { x: i.x - a.width, y: f };
      break;
    default:
      v = { x: i.x, y: i.y };
  }
  switch (bs(t)) {
    case "start":
      v[d] -= h * (n && y ? -1 : 1);
      break;
    case "end":
      v[d] += h * (n && y ? -1 : 1);
  }
  return v;
}
function sy(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ss(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function uy(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: i, y: a, platform: l, rects: f, elements: d, strategy: u } = e, { boundary: h = "clippingAncestors", rootBoundary: y = "viewport", elementContext: v = "floating", altBoundary: S = !1, padding: R = 0 } = t, k = sy(R), F = d[S ? v === "floating" ? "reference" : "floating" : v], T = ss(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(F))) == null || n ? F : F.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)), boundary: h, rootBoundary: y, strategy: u })), m = v === "floating" ? { ...f.floating, x: i, y: a } : f.reference, O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating)), N = await (l.isElement == null ? void 0 : l.isElement(O)) && await (l.getScale == null ? void 0 : l.getScale(O)) || { x: 1, y: 1 }, P = ss(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: O, strategy: u }) : m);
  return { top: (T.top - P.top + k.top) / N.y, bottom: (P.bottom - T.bottom + k.bottom) / N.y, left: (T.left - P.left + k.left) / N.x, right: (P.right - T.right + k.right) / N.x };
}
const mS = Math.min, yS = Math.max;
function vf(e, t, n) {
  return yS(e, mS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const gS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function oc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gS[t]);
}
function vS(e, t, n) {
  n === void 0 && (n = !1);
  const i = bs(e), a = Ss(e), l = Xf(a);
  let f = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (f = oc(f)), { main: f, cross: oc(f) };
}
const xS = { start: "end", end: "start" };
function Id(e) {
  return e.replace(/start|end/g, (t) => xS[t]);
}
const bS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: i, middlewareData: a, rects: l, initialPlacement: f, platform: d, elements: u } = t, { mainAxis: h = !0, crossAxis: y = !0, fallbackPlacements: v, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: k = !0, ...F } = e, T = Di(i), m = Di(f) === f, O = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)), N = v || (m || !k ? [oc(f)] : function(te) {
      const V = oc(te);
      return [Id(te), V, Id(V)];
    }(f));
    v || R === "none" || N.push(...function(te, V, K, X) {
      const B = bs(te);
      let oe = function(re, le, G) {
        const j = ["left", "right"], J = ["right", "left"], ue = ["top", "bottom"], _e = ["bottom", "top"];
        switch (re) {
          case "top":
          case "bottom":
            return G ? le ? J : j : le ? j : J;
          case "left":
          case "right":
            return le ? ue : _e;
          default:
            return [];
        }
      }(Di(te), K === "start", X);
      return B && (oe = oe.map((re) => re + "-" + B), V && (oe = oe.concat(oe.map(Id)))), oe;
    }(f, k, R, O));
    const P = [f, ...N], D = await uy(t, F), L = [];
    let U = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (h && L.push(D[T]), y) {
      const { main: te, cross: V } = vS(i, l, O);
      L.push(D[te], D[V]);
    }
    if (U = [...U, { placement: i, overflows: L }], !L.every((te) => te <= 0)) {
      var W, Z;
      const te = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, V = P[te];
      if (V)
        return { data: { index: te, overflows: U }, reset: { placement: V } };
      let K = (Z = U.find((X) => X.overflows[0] <= 0)) == null ? void 0 : Z.placement;
      if (!K)
        switch (S) {
          case "bestFit": {
            var ce;
            const X = (ce = U.map((B) => [B.placement, B.overflows.filter((oe) => oe > 0).reduce((oe, re) => oe + re, 0)]).sort((B, oe) => B[1] - oe[1])[0]) == null ? void 0 : ce[0];
            X && (K = X);
            break;
          }
          case "initialPlacement":
            K = f;
        }
      if (i !== K)
        return { reset: { placement: K } };
    }
    return {};
  } };
}, SS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: i } = t, a = await async function(l, f) {
      const { placement: d, platform: u, elements: h } = l, y = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), v = Di(d), S = bs(d), R = Ss(d) === "x", k = ["left", "top"].includes(v) ? -1 : 1, F = y && R ? -1 : 1, T = typeof f == "function" ? f(l) : f;
      let { mainAxis: m, crossAxis: O, alignmentAxis: N } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return S && typeof N == "number" && (O = S === "end" ? -1 * N : N), R ? { x: O * F, y: m * k } : { x: m * k, y: O * F };
    }(t, e);
    return { x: n + a.x, y: i + a.y, data: a };
  } };
}, ES = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: i, placement: a } = t, { mainAxis: l = !0, crossAxis: f = !1, limiter: d = { fn: (T) => {
      let { x: m, y: O } = T;
      return { x: m, y: O };
    } }, ...u } = e, h = { x: n, y: i }, y = await uy(t, u), v = Ss(Di(a)), S = v === "x" ? "y" : "x";
    let R = h[v], k = h[S];
    if (l) {
      const T = v === "y" ? "bottom" : "right";
      R = vf(R + y[v === "y" ? "top" : "left"], R, R - y[T]);
    }
    if (f) {
      const T = S === "y" ? "bottom" : "right";
      k = vf(k + y[S === "y" ? "top" : "left"], k, k - y[T]);
    }
    const F = d.fn({ ...t, [v]: R, [S]: k });
    return { ...F, data: { x: F.x - n, y: F.y - i } };
  } };
};
function Er(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yr(e) {
  return Er(e).getComputedStyle(e);
}
const dh = Math.min, us = Math.max, lc = Math.round;
function cy(e) {
  const t = Yr(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, l = e.offsetHeight, f = lc(n) !== a || lc(i) !== l;
  return f && (n = a, i = l), { width: n, height: i, fallback: f };
}
function Ia(e) {
  return fy(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ku;
function dy() {
  if (ku)
    return ku;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ku = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ku) : navigator.userAgent;
}
function Xr(e) {
  return e instanceof Er(e).HTMLElement;
}
function Oa(e) {
  return e instanceof Er(e).Element;
}
function fy(e) {
  return e instanceof Er(e).Node;
}
function fh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Er(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ec(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Yr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function kS(e) {
  return ["table", "td", "th"].includes(Ia(e));
}
function xf(e) {
  const t = /firefox/i.test(dy()), n = Yr(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const l = n.contain;
    return l != null && l.includes(a);
  });
}
function py() {
  return !/^((?!chrome|android).)*safari/i.test(dy());
}
function qf(e) {
  return ["html", "body", "#document"].includes(Ia(e));
}
function hy(e) {
  return Oa(e) ? e : e.contextElement;
}
const my = { x: 1, y: 1 };
function Vo(e) {
  const t = hy(e);
  if (!Xr(t))
    return my;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: l } = cy(t);
  let f = (l ? lc(n.width) : n.width) / i, d = (l ? lc(n.height) : n.height) / a;
  return f && Number.isFinite(f) || (f = 1), d && Number.isFinite(d) || (d = 1), { x: f, y: d };
}
function gs(e, t, n, i) {
  var a, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const f = e.getBoundingClientRect(), d = hy(e);
  let u = my;
  t && (i ? Oa(i) && (u = Vo(i)) : u = Vo(e));
  const h = d ? Er(d) : window, y = !py() && n;
  let v = (f.left + (y && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, S = (f.top + (y && ((l = h.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, R = f.width / u.x, k = f.height / u.y;
  if (d) {
    const F = Er(d), T = i && Oa(i) ? Er(i) : i;
    let m = F.frameElement;
    for (; m && i && T !== F; ) {
      const O = Vo(m), N = m.getBoundingClientRect(), P = getComputedStyle(m);
      N.x += (m.clientLeft + parseFloat(P.paddingLeft)) * O.x, N.y += (m.clientTop + parseFloat(P.paddingTop)) * O.y, v *= O.x, S *= O.y, R *= O.x, k *= O.y, v += N.x, S += N.y, m = Er(m).frameElement;
    }
  }
  return { width: R, height: k, top: S, right: v + R, bottom: S + k, left: v, x: v, y: S };
}
function Fa(e) {
  return ((fy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kc(e) {
  return Oa(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yy(e) {
  return gs(Fa(e)).left + kc(e).scrollLeft;
}
function vs(e) {
  if (Ia(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || fh(e) && e.host || Fa(e);
  return fh(t) ? t.host : t;
}
function gy(e) {
  const t = vs(e);
  return qf(t) ? t.ownerDocument.body : Xr(t) && Ec(t) ? t : gy(t);
}
function vy(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = gy(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Er(i);
  return a ? t.concat(l, l.visualViewport || [], Ec(i) ? i : []) : t.concat(i, vy(i));
}
function ph(e, t, n) {
  return t === "viewport" ? ss(function(i, a) {
    const l = Er(i), f = Fa(i), d = l.visualViewport;
    let u = f.clientWidth, h = f.clientHeight, y = 0, v = 0;
    if (d) {
      u = d.width, h = d.height;
      const S = py();
      (S || !S && a === "fixed") && (y = d.offsetLeft, v = d.offsetTop);
    }
    return { width: u, height: h, x: y, y: v };
  }(e, n)) : Oa(t) ? ss(function(i, a) {
    const l = gs(i, !0, a === "fixed"), f = l.top + i.clientTop, d = l.left + i.clientLeft, u = Xr(i) ? Vo(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: d * u.x, y: f * u.y };
  }(t, n)) : ss(function(i) {
    const a = Fa(i), l = kc(i), f = i.ownerDocument.body, d = us(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), u = us(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let h = -l.scrollLeft + yy(i);
    const y = -l.scrollTop;
    return Yr(f).direction === "rtl" && (h += us(a.clientWidth, f.clientWidth) - d), { width: d, height: u, x: h, y };
  }(Fa(e)));
}
function hh(e) {
  return Xr(e) && Yr(e).position !== "fixed" ? e.offsetParent : null;
}
function mh(e) {
  const t = Er(e);
  let n = hh(e);
  for (; n && kS(n) && Yr(n).position === "static"; )
    n = hh(n);
  return n && (Ia(n) === "html" || Ia(n) === "body" && Yr(n).position === "static" && !xf(n)) ? t : n || function(i) {
    let a = vs(i);
    for (; Xr(a) && !qf(a); ) {
      if (xf(a))
        return a;
      a = vs(a);
    }
    return null;
  }(e) || t;
}
function wS(e, t, n) {
  const i = Xr(t), a = Fa(t), l = gs(e, !0, n === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (i || !i && n !== "fixed")
    if ((Ia(t) !== "body" || Ec(a)) && (f = kc(t)), Xr(t)) {
      const u = gs(t, !0);
      d.x = u.x + t.clientLeft, d.y = u.y + t.clientTop;
    } else
      a && (d.x = yy(a));
  return { x: l.left + f.scrollLeft - d.x, y: l.top + f.scrollTop - d.y, width: l.width, height: l.height };
}
const TS = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const l = n === "clippingAncestors" ? function(h, y) {
    const v = y.get(h);
    if (v)
      return v;
    let S = vy(h).filter((T) => Oa(T) && Ia(T) !== "body"), R = null;
    const k = Yr(h).position === "fixed";
    let F = k ? vs(h) : h;
    for (; Oa(F) && !qf(F); ) {
      const T = Yr(F), m = xf(F);
      (k ? m || R : m || T.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = T : S = S.filter((O) => O !== F), F = vs(F);
    }
    return y.set(h, S), S;
  }(t, this._c) : [].concat(n), f = [...l, i], d = f[0], u = f.reduce((h, y) => {
    const v = ph(t, y, a);
    return h.top = us(v.top, h.top), h.right = dh(v.right, h.right), h.bottom = dh(v.bottom, h.bottom), h.left = us(v.left, h.left), h;
  }, ph(t, d, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Xr(n), l = Fa(n);
  if (n === l)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ia(n) !== "body" || Ec(l)) && (f = kc(n)), Xr(n))) {
    const h = gs(n);
    d = Vo(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - f.scrollLeft * d.x + u.x, y: t.y * d.y - f.scrollTop * d.y + u.y };
}, isElement: Oa, getDimensions: function(e) {
  return Xr(e) ? cy(e) : e.getBoundingClientRect();
}, getOffsetParent: mh, getDocumentElement: Fa, getScale: Vo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || mh, l = this.getDimensions;
  return { reference: wS(t, await a(n), i), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yr(e).direction === "rtl" }, yh = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: TS, ...n }, l = { ...a.platform, _c: i };
  return (async (f, d, u) => {
    const { placement: h = "bottom", strategy: y = "absolute", middleware: v = [], platform: S } = u, R = v.filter(Boolean), k = await (S.isRTL == null ? void 0 : S.isRTL(d));
    if (S == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((D) => {
      let { name: L } = D;
      return L === "autoPlacement" || L === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && d || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let F = await S.getElementRects({ reference: f, floating: d, strategy: y }), { x: T, y: m } = ch(F, h, k), O = h, N = {}, P = 0;
    for (let D = 0; D < R.length; D++) {
      const { name: L, fn: U } = R[D], { x: W, y: Z, data: ce, reset: te } = await U({ x: T, y: m, initialPlacement: h, placement: O, strategy: y, middlewareData: N, rects: F, platform: S, elements: { reference: f, floating: d } });
      T = W ?? T, m = Z ?? m, N = { ...N, [L]: { ...N[L], ...ce } }, P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), te && P <= 50 && (P++, typeof te == "object" && (te.placement && (O = te.placement), te.rects && (F = te.rects === !0 ? await S.getElementRects({ reference: f, floating: d, strategy: y }) : te.rects), { x: T, y: m } = ch(F, O, k)), D = -1);
    }
    return { x: T, y: m, placement: O, strategy: y, middlewareData: N };
  })(e, t, { ...a, platform: l });
};
var Na, Oi = { exports: {} }, gh = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Na = gh, function() {
  var e = r, t = 60103, n = 60106;
  Na.Fragment = 60107;
  var i = 60108, a = 60114, l = 60109, f = 60110, d = 60112, u = 60113, h = 60120, y = 60115, v = 60116, S = 60121, R = 60122, k = 60117, F = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), n = m("react.portal"), Na.Fragment = m("react.fragment"), i = m("react.strict_mode"), a = m("react.profiler"), l = m("react.provider"), f = m("react.context"), d = m("react.forward_ref"), u = m("react.suspense"), h = m("react.suspense_list"), y = m("react.memo"), v = m("react.lazy"), S = m("react.block"), R = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), F = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var O = typeof Symbol == "function" && Symbol.iterator, N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function P(he) {
    for (var Pe = arguments.length, ee = new Array(Pe > 1 ? Pe - 1 : 0), De = 1; De < Pe; De++)
      ee[De - 1] = arguments[De];
    D("error", he, ee);
  }
  function D(he, Pe, ee) {
    var De = N.ReactDebugCurrentFrame, we = "";
    if (Z) {
      var Ue = U(Z.type), Ge = Z._owner;
      we += function(Je, st, Ke) {
        var We = "";
        if (st) {
          var Be = st.fileName, $e = Be.replace(L, "");
          if (/^index\./.test($e)) {
            var ht = Be.match(L);
            if (ht) {
              var qe = ht[1];
              qe && ($e = qe.replace(L, "") + "/" + $e);
            }
          }
          We = " (at " + $e + ":" + st.lineNumber + ")";
        } else
          Ke && (We = " (created by " + Ke + ")");
        return `
    in ` + (Je || "Unknown") + We;
      }(Ue, Z._source, Ge && U(Ge.type));
    }
    (we += De.getStackAddendum()) !== "" && (Pe += "%s", ee = ee.concat([we]));
    var et = ee.map(function(Je) {
      return "" + Je;
    });
    et.unshift("Warning: " + Pe), Function.prototype.apply.call(console[he], console, et);
  }
  var L = /^(.*)[\\\/]/;
  function U(he) {
    if (he == null)
      return null;
    if (typeof he.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof he == "function")
      return he.displayName || he.name || null;
    if (typeof he == "string")
      return he;
    switch (he) {
      case Na.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case a:
        return "Profiler";
      case i:
        return "StrictMode";
      case u:
        return "Suspense";
      case h:
        return "SuspenseList";
    }
    if (typeof he == "object")
      switch (he.$$typeof) {
        case f:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case d:
          return De = he, we = he.render, Ue = "ForwardRef", Ge = we.displayName || we.name || "", De.displayName || (Ge !== "" ? Ue + "(" + Ge + ")" : Ue);
        case y:
          return U(he.type);
        case S:
          return U(he.render);
        case v:
          var Pe = (ee = he)._status === 1 ? ee._result : null;
          if (Pe)
            return U(Pe);
      }
    var ee, De, we, Ue, Ge;
    return null;
  }
  var W = {};
  N.ReactDebugCurrentFrame;
  var Z = null;
  function ce(he) {
    Z = he;
  }
  var te, V, K, X = N.ReactCurrentOwner, B = Object.prototype.hasOwnProperty, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(he, Pe, ee, De, we) {
    var Ue, Ge = {}, et = null, Je = null;
    for (Ue in ee !== void 0 && (et = "" + ee), function(We) {
      if (B.call(We, "key")) {
        var Be = Object.getOwnPropertyDescriptor(We, "key").get;
        if (Be && Be.isReactWarning)
          return !1;
      }
      return We.key !== void 0;
    }(Pe) && (et = "" + Pe.key), function(We) {
      if (B.call(We, "ref")) {
        var Be = Object.getOwnPropertyDescriptor(We, "ref").get;
        if (Be && Be.isReactWarning)
          return !1;
      }
      return We.ref !== void 0;
    }(Pe) && (Je = Pe.ref, function(We, Be) {
      if (typeof We.ref == "string" && X.current && Be && X.current.stateNode !== Be) {
        var $e = U(X.current.type);
        K[$e] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(X.current.type), We.ref), K[$e] = !0);
      }
    }(Pe, we)), Pe)
      B.call(Pe, Ue) && !oe.hasOwnProperty(Ue) && (Ge[Ue] = Pe[Ue]);
    if (he && he.defaultProps) {
      var st = he.defaultProps;
      for (Ue in st)
        Ge[Ue] === void 0 && (Ge[Ue] = st[Ue]);
    }
    if (et || Je) {
      var Ke = typeof he == "function" ? he.displayName || he.name || "Unknown" : he;
      et && function(We, Be) {
        var $e = function() {
          te || (te = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Be));
        };
        $e.isReactWarning = !0, Object.defineProperty(We, "key", { get: $e, configurable: !0 });
      }(Ge, Ke), Je && function(We, Be) {
        var $e = function() {
          V || (V = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Be));
        };
        $e.isReactWarning = !0, Object.defineProperty(We, "ref", { get: $e, configurable: !0 });
      }(Ge, Ke);
    }
    return function(We, Be, $e, ht, qe, pt, gt) {
      var ut = { $$typeof: t, type: We, key: Be, ref: $e, props: gt, _owner: pt, _store: {} };
      return Object.defineProperty(ut._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ut, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ht }), Object.defineProperty(ut, "_source", { configurable: !1, enumerable: !1, writable: !1, value: qe }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    }(he, et, Je, we, De, X.current, Ge);
  }
  K = {};
  var le, G = N.ReactCurrentOwner;
  function j(he) {
    Z = he;
  }
  function J(he) {
    return typeof he == "object" && he !== null && he.$$typeof === t;
  }
  function ue() {
    if (G.current) {
      var he = U(G.current.type);
      if (he)
        return `

Check the render method of \`` + he + "`.";
    }
    return "";
  }
  N.ReactDebugCurrentFrame, le = !1;
  var _e = {};
  function be(he, Pe) {
    if (he._store && !he._store.validated && he.key == null) {
      he._store.validated = !0;
      var ee = function(we) {
        var Ue = ue();
        if (!Ue) {
          var Ge = typeof we == "string" ? we : we.displayName || we.name;
          Ge && (Ue = `

Check the top-level render call using <` + Ge + ">.");
        }
        return Ue;
      }(Pe);
      if (!_e[ee]) {
        _e[ee] = !0;
        var De = "";
        he && he._owner && he._owner !== G.current && (De = " It was passed a child from " + U(he._owner.type) + "."), j(he), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, De), j(null);
      }
    }
  }
  function ye(he, Pe) {
    if (typeof he == "object") {
      if (Array.isArray(he))
        for (var ee = 0; ee < he.length; ee++) {
          var De = he[ee];
          J(De) && be(De, Pe);
        }
      else if (J(he))
        he._store && (he._store.validated = !0);
      else if (he) {
        var we = function(et) {
          if (et === null || typeof et != "object")
            return null;
          var Je = O && et[O] || et["@@iterator"];
          return typeof Je == "function" ? Je : null;
        }(he);
        if (typeof we == "function" && we !== he.entries)
          for (var Ue, Ge = we.call(he); !(Ue = Ge.next()).done; )
            J(Ue.value) && be(Ue.value, Pe);
      }
    }
  }
  function Le(he) {
    var Pe, ee = he.type;
    if (ee != null && typeof ee != "string") {
      if (typeof ee == "function")
        Pe = ee.propTypes;
      else {
        if (typeof ee != "object" || ee.$$typeof !== d && ee.$$typeof !== y)
          return;
        Pe = ee.propTypes;
      }
      if (Pe) {
        var De = U(ee);
        (function(we, Ue, Ge, et, Je) {
          var st = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Ke in we)
            if (st(we, Ke)) {
              var We = void 0;
              try {
                if (typeof we[Ke] != "function") {
                  var Be = Error((et || "React class") + ": " + Ge + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof we[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Be.name = "Invariant Violation", Be;
                }
                We = we[Ke](Ue, Ke, et, Ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($e) {
                We = $e;
              }
              !We || We instanceof Error || (ce(Je), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", et || "React class", Ge, Ke, typeof We), ce(null)), We instanceof Error && !(We.message in W) && (W[We.message] = !0, ce(Je), P("Failed %s type: %s", Ge, We.message), ce(null));
            }
        })(Pe, he.props, "prop", De, he);
      } else
        ee.PropTypes === void 0 || le || (le = !0, P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U(ee) || "Unknown"));
      typeof ee.getDefaultProps != "function" || ee.getDefaultProps.isReactClassApproved || P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function ae(he, Pe, ee, De, we, Ue) {
    var Ge = function($e) {
      return typeof $e == "string" || typeof $e == "function" || $e === Na.Fragment || $e === a || $e === F || $e === i || $e === u || $e === h || $e === T || typeof $e == "object" && $e !== null && ($e.$$typeof === v || $e.$$typeof === y || $e.$$typeof === l || $e.$$typeof === f || $e.$$typeof === d || $e.$$typeof === k || $e.$$typeof === S || $e[0] === R);
    }(he);
    if (!Ge) {
      var et = "";
      (he === void 0 || typeof he == "object" && he !== null && Object.keys(he).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Je, st = function($e) {
        return $e !== void 0 ? `

Check your code at ` + $e.fileName.replace(/^.*[\\\/]/, "") + ":" + $e.lineNumber + "." : "";
      }(we);
      et += st || ue(), he === null ? Je = "null" : Array.isArray(he) ? Je = "array" : he !== void 0 && he.$$typeof === t ? (Je = "<" + (U(he.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : Je = typeof he, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Je, et);
    }
    var Ke = re(he, Pe, ee, we, Ue);
    if (Ke == null)
      return Ke;
    if (Ge) {
      var We = Pe.children;
      if (We !== void 0)
        if (De)
          if (Array.isArray(We)) {
            for (var Be = 0; Be < We.length; Be++)
              ye(We[Be], he);
            Object.freeze && Object.freeze(We);
          } else
            P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ye(We, he);
    }
    return he === Na.Fragment ? function($e) {
      for (var ht = Object.keys($e.props), qe = 0; qe < ht.length; qe++) {
        var pt = ht[qe];
        if (pt !== "children" && pt !== "key") {
          j($e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pt), j(null);
          break;
        }
      }
      $e.ref !== null && (j($e), P("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
    }(Ke) : Le(Ke), Ke;
  }
  var Ie = function(he, Pe, ee) {
    return ae(he, Pe, ee, !1);
  }, Ee = function(he, Pe, ee) {
    return ae(he, Pe, ee, !0);
  };
  Na.jsx = Ie, Na.jsxs = Ee;
}(), Oi.exports = gh;
var $d, xy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
$d = xy, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], i = 0; i < arguments.length; i++) {
      var a = arguments[i];
      if (a) {
        var l = typeof a;
        if (l === "string" || l === "number")
          n.push(a);
        else if (Array.isArray(a)) {
          if (a.length) {
            var f = t.apply(null, a);
            f && n.push(f);
          }
        } else if (l === "object") {
          if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
            n.push(a.toString());
            continue;
          }
          for (var d in a)
            e.call(a, d) && a[d] && n.push(d);
        }
      }
    }
    return n.join(" ");
  }
  $d.exports ? (t.default = t, $d.exports = t) : window.classNames = t;
}();
var vh = xy.exports;
const xh = (e, t, n) => {
  let i = null;
  return function(...a) {
    i && clearTimeout(i), i = setTimeout(() => {
      i = null, n || e.apply(this, a);
    }, t);
  };
}, CS = ({ content: e }) => Oi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), AS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, LS = de.createContext({ getTooltipData: () => AS });
function by(e = "DEFAULT_TOOLTIP_ID") {
  return de.useContext(LS).getTooltipData(e);
}
const bh = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: i = "top", offset: a = 10, strategy: l = "absolute", middlewares: f = [SS(Number(a)), bS(), ES({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const d = f;
  return n ? (d.push({ name: "arrow", options: u = { element: n, padding: 5 }, async fn(h) {
    const { element: y, padding: v = 0 } = u || {}, { x: S, y: R, placement: k, rects: F, platform: T } = h;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = sy(v), O = { x: S, y: R }, N = Ss(k), P = Xf(N), D = await T.getDimensions(y), L = N === "y" ? "top" : "left", U = N === "y" ? "bottom" : "right", W = F.reference[P] + F.reference[N] - O[N] - F.floating[P], Z = O[N] - F.reference[N], ce = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(y));
    let te = ce ? N === "y" ? ce.clientHeight || 0 : ce.clientWidth || 0 : 0;
    te === 0 && (te = F.floating[P]);
    const V = W / 2 - Z / 2, K = m[L], X = te - D[P] - m[U], B = te / 2 - D[P] / 2 + V, oe = vf(K, B, X), re = bs(k) != null && B != oe && F.reference[P] / 2 - (B < K ? m[L] : m[U]) - D[P] / 2 < 0;
    return { [N]: O[N] - (re ? B < K ? K - B : X - B : 0), data: { [N]: oe, centerOffset: B - oe } };
  } }), yh(e, t, { placement: i, strategy: l, middleware: d }).then(({ x: h, y, placement: v, middlewareData: S }) => {
    var R, k;
    const F = { left: `${h}px`, top: `${y}px` }, { x: T, y: m } = (R = S.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: F, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[v.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : yh(e, t, { placement: "bottom", strategy: l, middleware: d }).then(({ x: h, y }) => ({ tooltipStyles: { left: `${h}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var u;
};
var wi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Sh = ({ id: e, className: t, classNameArrow: n, variant: i = "dark", anchorId: a, anchorSelect: l, place: f = "top", offset: d = 10, events: u = ["hover"], positionStrategy: h = "absolute", middlewares: y, wrapper: v, children: S = null, delayShow: R = 0, delayHide: k = 0, float: F = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: O = !1, style: N, position: P, afterShow: D, afterHide: L, content: U, html: W, isOpen: Z, setIsOpen: ce, activeAnchor: te, setActiveAnchor: V }) => {
  const K = de.useRef(null), X = de.useRef(null), B = de.useRef(null), oe = de.useRef(null), [re, le] = de.useState({}), [G, j] = de.useState({}), [J, ue] = de.useState(!1), [_e, be] = de.useState(!1), ye = de.useRef(!1), Le = de.useRef(null), { anchorRefs: ae, setActiveAnchor: Ie } = by(e), Ee = de.useRef(!1), [he, Pe] = de.useState([]), ee = de.useRef(!1);
  de.useLayoutEffect(() => (ee.current = !0, () => {
    ee.current = !1;
  }), []), de.useEffect(() => {
    if (!J) {
      const qe = setTimeout(() => {
        be(!1);
      }, 150);
      return () => {
        clearTimeout(qe);
      };
    }
    return () => null;
  }, [J]);
  const De = (qe) => {
    ee.current && (qe && be(!0), setTimeout(() => {
      ee.current && (ce == null || ce(qe), Z === void 0 && ue(qe));
    }, 10));
  };
  de.useEffect(() => {
    if (Z === void 0)
      return () => null;
    Z && be(!0);
    const qe = setTimeout(() => {
      ue(Z);
    }, 10);
    return () => {
      clearTimeout(qe);
    };
  }, [Z]), de.useEffect(() => {
    J !== ye.current && (ye.current = J, J ? D == null || D() : L == null || L());
  }, [J]);
  const we = (qe = k) => {
    oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
      Ee.current || De(!1);
    }, qe);
  }, Ue = (qe) => {
    var pt;
    if (!qe)
      return;
    R ? (B.current && clearTimeout(B.current), B.current = setTimeout(() => {
      De(!0);
    }, R)) : De(!0);
    const gt = (pt = qe.currentTarget) !== null && pt !== void 0 ? pt : qe.target;
    V(gt), Ie({ current: gt }), oe.current && clearTimeout(oe.current);
  }, Ge = () => {
    m ? we(k || 100) : k ? we() : De(!1), B.current && clearTimeout(B.current);
  }, et = ({ x: qe, y: pt }) => {
    bh({ place: f, offset: d, elementReference: { getBoundingClientRect: () => ({ x: qe, y: pt, width: 0, height: 0, top: pt, left: qe, right: qe, bottom: pt }) }, tooltipReference: K.current, tooltipArrowReference: X.current, strategy: h, middlewares: y }).then((gt) => {
      Object.keys(gt.tooltipStyles).length && le(gt.tooltipStyles), Object.keys(gt.tooltipArrowStyles).length && j(gt.tooltipArrowStyles);
    });
  }, Je = (qe) => {
    if (!qe)
      return;
    const pt = qe, gt = { x: pt.clientX, y: pt.clientY };
    et(gt), Le.current = gt;
  }, st = (qe) => {
    Ue(qe), k && we();
  }, Ke = (qe) => {
    const pt = document.querySelector(`[id='${a}']`);
    pt != null && pt.contains(qe.target) || he.some((gt) => gt.contains(qe.target)) || De(!1);
  }, We = (qe) => {
    qe.key === "Escape" && De(!1);
  }, Be = xh(Ue, 50), $e = xh(Ge, 50);
  de.useEffect(() => {
    var qe, pt;
    const gt = new Set(ae);
    he.forEach((vt) => {
      gt.add({ current: vt });
    });
    const ut = document.querySelector(`[id='${a}']`);
    ut && gt.add({ current: ut }), O && window.addEventListener("keydown", We);
    const Rt = [];
    u.find((vt) => vt === "click") && (window.addEventListener("click", Ke), Rt.push({ event: "click", listener: st })), u.find((vt) => vt === "hover") && (Rt.push({ event: "mouseenter", listener: Be }, { event: "mouseleave", listener: $e }, { event: "focus", listener: Be }, { event: "blur", listener: $e }), F && Rt.push({ event: "mousemove", listener: Je }));
    const tn = () => {
      Ee.current = !0;
    }, Xt = () => {
      Ee.current = !1, Ge();
    };
    return m && ((qe = K.current) === null || qe === void 0 || qe.addEventListener("mouseenter", tn), (pt = K.current) === null || pt === void 0 || pt.addEventListener("mouseleave", Xt)), Rt.forEach(({ event: vt, listener: Nt }) => {
      gt.forEach((hn) => {
        var on;
        (on = hn.current) === null || on === void 0 || on.addEventListener(vt, Nt);
      });
    }), () => {
      var vt, Nt;
      u.find((hn) => hn === "click") && window.removeEventListener("click", Ke), O && window.removeEventListener("keydown", We), m && ((vt = K.current) === null || vt === void 0 || vt.removeEventListener("mouseenter", tn), (Nt = K.current) === null || Nt === void 0 || Nt.removeEventListener("mouseleave", Xt)), Rt.forEach(({ event: hn, listener: on }) => {
        gt.forEach((Gt) => {
          var yn;
          (yn = Gt.current) === null || yn === void 0 || yn.removeEventListener(hn, on);
        });
      });
    };
  }, [_e, ae, he, O, u]), de.useEffect(() => {
    let qe = l ?? "";
    !qe && e && (qe = `[data-tooltip-id='${e}']`);
    const pt = new MutationObserver((gt) => {
      const ut = [];
      gt.forEach((Rt) => {
        if (Rt.type === "attributes" && Rt.attributeName === "data-tooltip-id" && Rt.target.getAttribute("data-tooltip-id") === e && ut.push(Rt.target), Rt.type === "childList" && (te && [...Rt.removedNodes].some((tn) => !!tn.contains(te) && (be(!1), De(!1), V(null), !0)), qe))
          try {
            const tn = [...Rt.addedNodes].filter((Xt) => Xt.nodeType === 1);
            ut.push(...tn.filter((Xt) => Xt.matches(qe))), ut.push(...tn.flatMap((Xt) => [...Xt.querySelectorAll(qe)]));
          } catch {
          }
      }), ut.length && Pe((Rt) => [...Rt, ...ut]);
    });
    return pt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      pt.disconnect();
    };
  }, [e, l, te]), de.useEffect(() => {
    P ? et(P) : F ? Le.current && et(Le.current) : bh({ place: f, offset: d, elementReference: te, tooltipReference: K.current, tooltipArrowReference: X.current, strategy: h, middlewares: y }).then((qe) => {
      ee.current && (Object.keys(qe.tooltipStyles).length && le(qe.tooltipStyles), Object.keys(qe.tooltipArrowStyles).length && j(qe.tooltipArrowStyles));
    });
  }, [J, te, U, W, f, d, h, P]), de.useEffect(() => {
    var qe;
    const pt = document.querySelector(`[id='${a}']`), gt = [...he, pt];
    te && gt.includes(te) || V((qe = he[0]) !== null && qe !== void 0 ? qe : pt);
  }, [a, he, te]), de.useEffect(() => () => {
    B.current && clearTimeout(B.current), oe.current && clearTimeout(oe.current);
  }, []), de.useEffect(() => {
    let qe = l;
    if (!qe && e && (qe = `[data-tooltip-id='${e}']`), qe)
      try {
        const pt = Array.from(document.querySelectorAll(qe));
        Pe(pt);
      } catch {
        Pe([]);
      }
  }, [e, l]);
  const ht = !!(W || U || S) && J && Object.keys(re).length > 0;
  return _e ? Oi.exports.jsxs(v, { id: e, role: "tooltip", className: vh("react-tooltip", wi.tooltip, wi[i], t, { [wi.show]: ht, [wi.fixed]: h === "fixed", [wi.clickable]: m }), style: { ...N, ...re }, ref: K, children: [W && Oi.exports.jsx(CS, { content: W }) || U || S, Oi.exports.jsx(v, { className: vh("react-tooltip-arrow", wi.arrow, n, { [wi["no-arrow"]]: T }), style: G, ref: X })] }) : null;
}, Sy = ({ id: e, anchorId: t, anchorSelect: n, content: i, html: a, className: l, classNameArrow: f, variant: d = "dark", place: u = "top", offset: h = 10, wrapper: y = "div", children: v = null, events: S = ["hover"], positionStrategy: R = "absolute", middlewares: k, delayShow: F = 0, delayHide: T = 0, float: m = !1, noArrow: O = !1, clickable: N = !1, closeOnEsc: P = !1, style: D, position: L, isOpen: U, setIsOpen: W, afterShow: Z, afterHide: ce }) => {
  const [te, V] = de.useState(i), [K, X] = de.useState(a), [B, oe] = de.useState(u), [re, le] = de.useState(d), [G, j] = de.useState(h), [J, ue] = de.useState(F), [_e, be] = de.useState(T), [ye, Le] = de.useState(m), [ae, Ie] = de.useState(y), [Ee, he] = de.useState(S), [Pe, ee] = de.useState(R), [De, we] = de.useState(null), { anchorRefs: Ue, activeAnchor: Ge } = by(e), et = (Ke) => Ke == null ? void 0 : Ke.getAttributeNames().reduce((We, Be) => {
    var $e;
    return Be.startsWith("data-tooltip-") && (We[Be.replace(/^data-tooltip-/, "")] = ($e = Ke == null ? void 0 : Ke.getAttribute(Be)) !== null && $e !== void 0 ? $e : null), We;
  }, {}), Je = (Ke) => {
    const We = { place: (Be) => {
      var $e;
      oe(($e = Be) !== null && $e !== void 0 ? $e : u);
    }, content: (Be) => {
      V(Be ?? i);
    }, html: (Be) => {
      X(Be ?? a);
    }, variant: (Be) => {
      var $e;
      le(($e = Be) !== null && $e !== void 0 ? $e : d);
    }, offset: (Be) => {
      j(Be === null ? h : Number(Be));
    }, wrapper: (Be) => {
      var $e;
      Ie(($e = Be) !== null && $e !== void 0 ? $e : y);
    }, events: (Be) => {
      const $e = Be == null ? void 0 : Be.split(" ");
      he($e ?? S);
    }, "position-strategy": (Be) => {
      var $e;
      ee(($e = Be) !== null && $e !== void 0 ? $e : R);
    }, "delay-show": (Be) => {
      ue(Be === null ? F : Number(Be));
    }, "delay-hide": (Be) => {
      be(Be === null ? T : Number(Be));
    }, float: (Be) => {
      Le(Be === null ? m : !!Be);
    } };
    Object.values(We).forEach((Be) => Be(null)), Object.entries(Ke).forEach(([Be, $e]) => {
      var ht;
      (ht = We[Be]) === null || ht === void 0 || ht.call(We, $e);
    });
  };
  de.useEffect(() => {
    V(i);
  }, [i]), de.useEffect(() => {
    X(a);
  }, [a]), de.useEffect(() => {
    oe(u);
  }, [u]), de.useEffect(() => {
    var Ke;
    const We = new Set(Ue);
    let Be = n;
    if (!Be && e && (Be = `[data-tooltip-id='${e}']`), Be)
      try {
        document.querySelectorAll(Be).forEach((gt) => {
          We.add({ current: gt });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const $e = document.querySelector(`[id='${t}']`);
    if ($e && We.add({ current: $e }), !We.size)
      return () => null;
    const ht = (Ke = De ?? $e) !== null && Ke !== void 0 ? Ke : Ge.current, qe = new MutationObserver((gt) => {
      gt.forEach((ut) => {
        var Rt;
        if (!ht || ut.type !== "attributes" || !(!((Rt = ut.attributeName) === null || Rt === void 0) && Rt.startsWith("data-tooltip-")))
          return;
        const tn = et(ht);
        Je(tn);
      });
    }), pt = { attributes: !0, childList: !1, subtree: !1 };
    if (ht) {
      const gt = et(ht);
      Je(gt), qe.observe(ht, pt);
    }
    return () => {
      qe.disconnect();
    };
  }, [Ue, Ge, De, t, n]);
  const st = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: f, content: te, html: K, place: B, variant: re, offset: G, wrapper: ae, events: Ee, positionStrategy: Pe, middlewares: k, delayShow: J, delayHide: _e, float: ye, noArrow: O, clickable: N, closeOnEsc: P, style: D, position: L, isOpen: U, setIsOpen: W, afterShow: Z, afterHide: ce, activeAnchor: De, setActiveAnchor: (Ke) => we(Ke) };
  return v ? Oi.exports.jsx(Sh, { ...st, children: v }) : Oi.exports.jsx(Sh, { ...st });
};
function Eh(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n < i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function PS(e, t) {
  let n;
  if (t === void 0)
    for (const i of e)
      i != null && (n > i || n === void 0 && i >= i) && (n = i);
  else {
    let i = -1;
    for (let a of e)
      (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function Bd(e, t) {
  let n = 0;
  if (t === void 0)
    for (let i of e)
      (i = +i) && (n += i);
  else {
    let i = -1;
    for (let a of e)
      (a = +t(a, ++i, e)) && (n += a);
  }
  return n;
}
function RS(e) {
  return e.depth;
}
function NS(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function wu(e) {
  return function() {
    return e;
  };
}
function kh(e, t) {
  return sc(e.source, t.source) || e.index - t.index;
}
function wh(e, t) {
  return sc(e.target, t.target) || e.index - t.index;
}
function sc(e, t) {
  return e.y0 - t.y0;
}
function Hd(e) {
  return e.value;
}
function _S(e) {
  return e.index;
}
function DS(e) {
  return e.nodes;
}
function OS(e) {
  return e.links;
}
function Th(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function Ch({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, i = n;
    for (const a of t.sourceLinks)
      a.y0 = n + a.width / 2, n += a.width;
    for (const a of t.targetLinks)
      a.y1 = i + a.width / 2, i += a.width;
  }
}
function FS() {
  let e = 0, t = 0, n = 1, i = 1, a = 24, l = 8, f, d = _S, u = NS, h, y, v = DS, S = OS, R = 6;
  function k() {
    const B = { nodes: v.apply(null, arguments), links: S.apply(null, arguments) };
    return F(B), T(B), m(B), O(B), D(B), Ch(B), B;
  }
  k.update = function(B) {
    return Ch(B), B;
  }, k.nodeId = function(B) {
    return arguments.length ? (d = typeof B == "function" ? B : wu(B), k) : d;
  }, k.nodeAlign = function(B) {
    return arguments.length ? (u = typeof B == "function" ? B : wu(B), k) : u;
  }, k.nodeSort = function(B) {
    return arguments.length ? (h = B, k) : h;
  }, k.nodeWidth = function(B) {
    return arguments.length ? (a = +B, k) : a;
  }, k.nodePadding = function(B) {
    return arguments.length ? (l = f = +B, k) : l;
  }, k.nodes = function(B) {
    return arguments.length ? (v = typeof B == "function" ? B : wu(B), k) : v;
  }, k.links = function(B) {
    return arguments.length ? (S = typeof B == "function" ? B : wu(B), k) : S;
  }, k.linkSort = function(B) {
    return arguments.length ? (y = B, k) : y;
  }, k.size = function(B) {
    return arguments.length ? (e = t = 0, n = +B[0], i = +B[1], k) : [n - e, i - t];
  }, k.extent = function(B) {
    return arguments.length ? (e = +B[0][0], n = +B[1][0], t = +B[0][1], i = +B[1][1], k) : [[e, t], [n, i]];
  }, k.iterations = function(B) {
    return arguments.length ? (R = +B, k) : R;
  };
  function F({ nodes: B, links: oe }) {
    for (const [le, G] of B.entries())
      G.index = le, G.sourceLinks = [], G.targetLinks = [];
    const re = new Map(B.map((le, G) => [d(le, G, B), le]));
    for (const [le, G] of oe.entries()) {
      G.index = le;
      let { source: j, target: J } = G;
      typeof j != "object" && (j = G.source = Th(re, j)), typeof J != "object" && (J = G.target = Th(re, J)), j.sourceLinks.push(G), J.targetLinks.push(G);
    }
    if (y != null)
      for (const { sourceLinks: le, targetLinks: G } of B)
        le.sort(y), G.sort(y);
  }
  function T({ nodes: B }) {
    for (const oe of B)
      oe.value = oe.fixedValue === void 0 ? Math.max(Bd(oe.sourceLinks, Hd), Bd(oe.targetLinks, Hd)) : oe.fixedValue;
  }
  function m({ nodes: B }) {
    const oe = B.length;
    let re = new Set(B), le = /* @__PURE__ */ new Set(), G = 0;
    for (; re.size; ) {
      for (const j of re) {
        j.depth = G;
        for (const { target: J } of j.sourceLinks)
          le.add(J);
      }
      if (++G > oe)
        throw new Error("circular link");
      re = le, le = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: B }) {
    const oe = B.length;
    let re = new Set(B), le = /* @__PURE__ */ new Set(), G = 0;
    for (; re.size; ) {
      for (const j of re) {
        j.height = G;
        for (const { source: J } of j.targetLinks)
          le.add(J);
      }
      if (++G > oe)
        throw new Error("circular link");
      re = le, le = /* @__PURE__ */ new Set();
    }
  }
  function N({ nodes: B }) {
    const oe = Eh(B, (G) => G.depth) + 1, re = (n - e - a) / (oe - 1), le = new Array(oe);
    for (const G of B) {
      const j = Math.max(0, Math.min(oe - 1, Math.floor(u.call(null, G, oe))));
      G.layer = j, G.x0 = e + j * re, G.x1 = G.x0 + a, le[j] ? le[j].push(G) : le[j] = [G];
    }
    if (h)
      for (const G of le)
        G.sort(h);
    return le;
  }
  function P(B) {
    const oe = PS(B, (re) => (i - t - (re.length - 1) * f) / Bd(re, Hd));
    for (const re of B) {
      let le = t;
      for (const G of re) {
        G.y0 = le, G.y1 = le + G.value * oe, le = G.y1 + f;
        for (const j of G.sourceLinks)
          j.width = j.value * oe;
      }
      le = (i - le + f) / (re.length + 1);
      for (let G = 0; G < re.length; ++G) {
        const j = re[G];
        j.y0 += le * (G + 1), j.y1 += le * (G + 1);
      }
      V(re);
    }
  }
  function D(B) {
    const oe = N(B);
    f = Math.min(l, (i - t) / (Eh(oe, (re) => re.length) - 1)), P(oe);
    for (let re = 0; re < R; ++re) {
      const le = Math.pow(0.99, re), G = Math.max(1 - le, (re + 1) / R);
      U(oe, le, G), L(oe, le, G);
    }
  }
  function L(B, oe, re) {
    for (let le = 1, G = B.length; le < G; ++le) {
      const j = B[le];
      for (const J of j) {
        let ue = 0, _e = 0;
        for (const { source: ye, value: Le } of J.targetLinks) {
          let ae = Le * (J.layer - ye.layer);
          ue += K(ye, J) * ae, _e += ae;
        }
        if (!(_e > 0))
          continue;
        let be = (ue / _e - J.y0) * oe;
        J.y0 += be, J.y1 += be, te(J);
      }
      h === void 0 && j.sort(sc), W(j, re);
    }
  }
  function U(B, oe, re) {
    for (let le = B.length, G = le - 2; G >= 0; --G) {
      const j = B[G];
      for (const J of j) {
        let ue = 0, _e = 0;
        for (const { target: ye, value: Le } of J.sourceLinks) {
          let ae = Le * (ye.layer - J.layer);
          ue += X(J, ye) * ae, _e += ae;
        }
        if (!(_e > 0))
          continue;
        let be = (ue / _e - J.y0) * oe;
        J.y0 += be, J.y1 += be, te(J);
      }
      h === void 0 && j.sort(sc), W(j, re);
    }
  }
  function W(B, oe) {
    const re = B.length >> 1, le = B[re];
    ce(B, le.y0 - f, re - 1, oe), Z(B, le.y1 + f, re + 1, oe), ce(B, i, B.length - 1, oe), Z(B, t, 0, oe);
  }
  function Z(B, oe, re, le) {
    for (; re < B.length; ++re) {
      const G = B[re], j = (oe - G.y0) * le;
      j > 1e-6 && (G.y0 += j, G.y1 += j), oe = G.y1 + f;
    }
  }
  function ce(B, oe, re, le) {
    for (; re >= 0; --re) {
      const G = B[re], j = (G.y1 - oe) * le;
      j > 1e-6 && (G.y0 -= j, G.y1 -= j), oe = G.y0 - f;
    }
  }
  function te({ sourceLinks: B, targetLinks: oe }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: re } } of oe)
        re.sort(wh);
      for (const { target: { targetLinks: re } } of B)
        re.sort(kh);
    }
  }
  function V(B) {
    if (y === void 0)
      for (const { sourceLinks: oe, targetLinks: re } of B)
        oe.sort(wh), re.sort(kh);
  }
  function K(B, oe) {
    let re = B.y0 - (B.sourceLinks.length - 1) * f / 2;
    for (const { target: le, width: G } of B.sourceLinks) {
      if (le === oe)
        break;
      re += G + f;
    }
    for (const { source: le, width: G } of oe.targetLinks) {
      if (le === B)
        break;
      re -= G;
    }
    return re;
  }
  function X(B, oe) {
    let re = oe.y0 - (oe.targetLinks.length - 1) * f / 2;
    for (const { source: le, width: G } of oe.targetLinks) {
      if (le === B)
        break;
      re += G + f;
    }
    for (const { target: le, width: G } of B.sourceLinks) {
      if (le === oe)
        break;
      re -= G;
    }
    return re;
  }
  return k;
}
function MS(e) {
  return [e.source.x1, e.y0];
}
function zS(e) {
  return [e.target.x0, e.y1];
}
function IS() {
  return Pb().source(MS).target(zS);
}
var $a = {}, Ti = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function $S() {
  if (Ah)
    return Ti;
  Ah = 1;
  var e = de;
  function t(g) {
    for (var C = "https://reactjs.org/docs/error-decoder.html?invariant=" + g, I = 1; I < arguments.length; I++)
      C += "&args[]=" + encodeURIComponent(arguments[I]);
    return "Minified React error #" + g + "; visit " + C + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, l = {};
  function f(g) {
    return n.call(l, g) ? !0 : n.call(a, g) ? !1 : i.test(g) ? l[g] = !0 : (a[g] = !0, !1);
  }
  function d(g, C, I, Y, Se, ge, Ae) {
    this.acceptsBooleans = C === 2 || C === 3 || C === 4, this.attributeName = Y, this.attributeNamespace = Se, this.mustUseProperty = I, this.propertyName = g, this.type = C, this.sanitizeURL = ge, this.removeEmptyString = Ae;
  }
  var u = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(g) {
    u[g] = new d(g, 0, !1, g, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(g) {
    var C = g[0];
    u[C] = new d(C, 1, !1, g[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(g) {
    u[g] = new d(g, 2, !1, g.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(g) {
    u[g] = new d(g, 2, !1, g, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(g) {
    u[g] = new d(g, 3, !1, g.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(g) {
    u[g] = new d(g, 3, !0, g, null, !1, !1);
  }), ["capture", "download"].forEach(function(g) {
    u[g] = new d(g, 4, !1, g, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(g) {
    u[g] = new d(g, 6, !1, g, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(g) {
    u[g] = new d(g, 5, !1, g.toLowerCase(), null, !1, !1);
  });
  var h = /[\-:]([a-z])/g;
  function y(g) {
    return g[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(g) {
    var C = g.replace(
      h,
      y
    );
    u[C] = new d(C, 1, !1, g, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(g) {
    var C = g.replace(h, y);
    u[C] = new d(C, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(g) {
    var C = g.replace(h, y);
    u[C] = new d(C, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(g) {
    u[g] = new d(g, 1, !1, g.toLowerCase(), null, !1, !1);
  }), u.xlinkHref = new d("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(g) {
    u[g] = new d(g, 1, !1, g.toLowerCase(), null, !0, !0);
  });
  var v = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, S = ["Webkit", "ms", "Moz", "O"];
  Object.keys(v).forEach(function(g) {
    S.forEach(function(C) {
      C = C + g.charAt(0).toUpperCase() + g.substring(1), v[C] = v[g];
    });
  });
  var R = /["'&<>]/;
  function k(g) {
    if (typeof g == "boolean" || typeof g == "number")
      return "" + g;
    g = "" + g;
    var C = R.exec(g);
    if (C) {
      var I = "", Y, Se = 0;
      for (Y = C.index; Y < g.length; Y++) {
        switch (g.charCodeAt(Y)) {
          case 34:
            C = "&quot;";
            break;
          case 38:
            C = "&amp;";
            break;
          case 39:
            C = "&#x27;";
            break;
          case 60:
            C = "&lt;";
            break;
          case 62:
            C = "&gt;";
            break;
          default:
            continue;
        }
        Se !== Y && (I += g.substring(Se, Y)), Se = Y + 1, I += C;
      }
      g = Se !== Y ? I + g.substring(Se, Y) : I;
    }
    return g;
  }
  var F = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function O(g, C) {
    return { insertionMode: g, selectedValue: C };
  }
  function N(g, C, I) {
    switch (C) {
      case "select":
        return O(1, I.value != null ? I.value : I.defaultValue);
      case "svg":
        return O(2, null);
      case "math":
        return O(3, null);
      case "foreignObject":
        return O(1, null);
      case "table":
        return O(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return O(5, null);
      case "colgroup":
        return O(7, null);
      case "tr":
        return O(6, null);
    }
    return 4 <= g.insertionMode || g.insertionMode === 0 ? O(1, null) : g;
  }
  var P = /* @__PURE__ */ new Map();
  function D(g, C, I) {
    if (typeof I != "object")
      throw Error(t(62));
    C = !0;
    for (var Y in I)
      if (n.call(I, Y)) {
        var Se = I[Y];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (Y.indexOf("--") === 0) {
            var ge = k(Y);
            Se = k(("" + Se).trim());
          } else {
            ge = Y;
            var Ae = P.get(ge);
            Ae !== void 0 || (Ae = k(ge.replace(F, "-$1").toLowerCase().replace(T, "-ms-")), P.set(ge, Ae)), ge = Ae, Se = typeof Se == "number" ? Se === 0 || n.call(v, Y) ? "" + Se : Se + "px" : k(("" + Se).trim());
          }
          C ? (C = !1, g.push(' style="', ge, ":", Se)) : g.push(";", ge, ":", Se);
        }
      }
    C || g.push('"');
  }
  function L(g, C, I, Y) {
    switch (I) {
      case "style":
        D(g, C, Y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < I.length) || I[0] !== "o" && I[0] !== "O" || I[1] !== "n" && I[1] !== "N") {
      if (C = u.hasOwnProperty(I) ? u[I] : null, C !== null) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!C.acceptsBooleans)
              return;
        }
        switch (I = C.attributeName, C.type) {
          case 3:
            Y && g.push(" ", I, '=""');
            break;
          case 4:
            Y === !0 ? g.push(" ", I, '=""') : Y !== !1 && g.push(" ", I, '="', k(Y), '"');
            break;
          case 5:
            isNaN(Y) || g.push(" ", I, '="', k(Y), '"');
            break;
          case 6:
            !isNaN(Y) && 1 <= Y && g.push(" ", I, '="', k(Y), '"');
            break;
          default:
            C.sanitizeURL && (Y = "" + Y), g.push(" ", I, '="', k(Y), '"');
        }
      } else if (f(I)) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (C = I.toLowerCase().slice(0, 5), C !== "data-" && C !== "aria-")
              return;
        }
        g.push(" ", I, '="', k(Y), '"');
      }
    }
  }
  function U(g, C, I) {
    if (C != null) {
      if (I != null)
        throw Error(t(60));
      if (typeof C != "object" || !("__html" in C))
        throw Error(t(61));
      C = C.__html, C != null && g.push("" + C);
    }
  }
  function W(g) {
    var C = "";
    return e.Children.forEach(g, function(I) {
      I != null && (C += I);
    }), C;
  }
  function Z(g, C, I, Y) {
    g.push(V(I));
    var Se = I = null, ge;
    for (ge in C)
      if (n.call(C, ge)) {
        var Ae = C[ge];
        if (Ae != null)
          switch (ge) {
            case "children":
              I = Ae;
              break;
            case "dangerouslySetInnerHTML":
              Se = Ae;
              break;
            default:
              L(g, Y, ge, Ae);
          }
      }
    return g.push(">"), U(g, Se, I), typeof I == "string" ? (g.push(k(I)), null) : I;
  }
  var ce = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, te = /* @__PURE__ */ new Map();
  function V(g) {
    var C = te.get(g);
    if (C === void 0) {
      if (!ce.test(g))
        throw Error(t(65, g));
      C = "<" + g, te.set(g, C);
    }
    return C;
  }
  function K(g, C, I, Y, Se) {
    switch (C) {
      case "select":
        g.push(V("select"));
        var ge = null, Ae = null;
        for (ie in I)
          if (n.call(I, ie)) {
            var je = I[ie];
            if (je != null)
              switch (ie) {
                case "children":
                  ge = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Ae = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  L(g, Y, ie, je);
              }
          }
        return g.push(">"), U(g, Ae, ge), ge;
      case "option":
        Ae = Se.selectedValue, g.push(V("option"));
        var rt = je = null, yt = null, ie = null;
        for (ge in I)
          if (n.call(I, ge)) {
            var se = I[ge];
            if (se != null)
              switch (ge) {
                case "children":
                  je = se;
                  break;
                case "selected":
                  yt = se;
                  break;
                case "dangerouslySetInnerHTML":
                  ie = se;
                  break;
                case "value":
                  rt = se;
                default:
                  L(g, Y, ge, se);
              }
          }
        if (Ae != null)
          if (I = rt !== null ? "" + rt : W(je), m(Ae)) {
            for (Y = 0; Y < Ae.length; Y++)
              if ("" + Ae[Y] === I) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + Ae === I && g.push(' selected=""');
        else
          yt && g.push(' selected=""');
        return g.push(">"), U(g, ie, je), je;
      case "textarea":
        g.push(V("textarea")), ie = Ae = ge = null;
        for (je in I)
          if (n.call(I, je) && (rt = I[je], rt != null))
            switch (je) {
              case "children":
                ie = rt;
                break;
              case "value":
                ge = rt;
                break;
              case "defaultValue":
                Ae = rt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                L(
                  g,
                  Y,
                  je,
                  rt
                );
            }
        if (ge === null && Ae !== null && (ge = Ae), g.push(">"), ie != null) {
          if (ge != null)
            throw Error(t(92));
          if (m(ie) && 1 < ie.length)
            throw Error(t(93));
          ge = "" + ie;
        }
        return typeof ge == "string" && ge[0] === `
` && g.push(`
`), ge !== null && g.push(k("" + ge)), null;
      case "input":
        g.push(V("input")), rt = ie = je = ge = null;
        for (Ae in I)
          if (n.call(I, Ae) && (yt = I[Ae], yt != null))
            switch (Ae) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                rt = yt;
                break;
              case "defaultValue":
                je = yt;
                break;
              case "checked":
                ie = yt;
                break;
              case "value":
                ge = yt;
                break;
              default:
                L(g, Y, Ae, yt);
            }
        return ie !== null ? L(g, Y, "checked", ie) : rt !== null && L(g, Y, "checked", rt), ge !== null ? L(g, Y, "value", ge) : je !== null && L(g, Y, "value", je), g.push("/>"), null;
      case "menuitem":
        g.push(V("menuitem"));
        for (var me in I)
          if (n.call(I, me) && (ge = I[me], ge != null))
            switch (me) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                L(g, Y, me, ge);
            }
        return g.push(">"), null;
      case "title":
        g.push(V("title")), ge = null;
        for (se in I)
          if (n.call(I, se) && (Ae = I[se], Ae != null))
            switch (se) {
              case "children":
                ge = Ae;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                L(g, Y, se, Ae);
            }
        return g.push(">"), ge;
      case "listing":
      case "pre":
        g.push(V(C)), Ae = ge = null;
        for (rt in I)
          if (n.call(I, rt) && (je = I[rt], je != null))
            switch (rt) {
              case "children":
                ge = je;
                break;
              case "dangerouslySetInnerHTML":
                Ae = je;
                break;
              default:
                L(g, Y, rt, je);
            }
        if (g.push(">"), Ae != null) {
          if (ge != null)
            throw Error(t(60));
          if (typeof Ae != "object" || !("__html" in Ae))
            throw Error(t(61));
          I = Ae.__html, I != null && (typeof I == "string" && 0 < I.length && I[0] === `
` ? g.push(`
`, I) : g.push("" + I));
        }
        return typeof ge == "string" && ge[0] === `
` && g.push(`
`), ge;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        g.push(V(C));
        for (var Re in I)
          if (n.call(I, Re) && (ge = I[Re], ge != null))
            switch (Re) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, C));
              default:
                L(g, Y, Re, ge);
            }
        return g.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Z(
          g,
          I,
          C,
          Y
        );
      case "html":
        return Se.insertionMode === 0 && g.push("<!DOCTYPE html>"), Z(g, I, C, Y);
      default:
        if (C.indexOf("-") === -1 && typeof I.is != "string")
          return Z(g, I, C, Y);
        g.push(V(C)), Ae = ge = null;
        for (yt in I)
          if (n.call(I, yt) && (je = I[yt], je != null))
            switch (yt) {
              case "children":
                ge = je;
                break;
              case "dangerouslySetInnerHTML":
                Ae = je;
                break;
              case "style":
                D(g, Y, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(yt) && typeof je != "function" && typeof je != "symbol" && g.push(" ", yt, '="', k(je), '"');
            }
        return g.push(">"), U(g, Ae, ge), ge;
    }
  }
  function X(g, C, I) {
    if (g.push('<!--$?--><template id="'), I === null)
      throw Error(t(395));
    return g.push(I), g.push('"></template>');
  }
  function B(g, C, I, Y) {
    switch (I.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(C.segmentPrefix), C = Y.toString(16), g.push(C), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function oe(g, C) {
    switch (C.insertionMode) {
      case 0:
      case 1:
        return g.push("</div>");
      case 2:
        return g.push("</svg>");
      case 3:
        return g.push("</math>");
      case 4:
        return g.push("</table>");
      case 5:
        return g.push("</tbody></table>");
      case 6:
        return g.push("</tr></table>");
      case 7:
        return g.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var re = /[<\u2028\u2029]/g;
  function le(g) {
    return JSON.stringify(g).replace(re, function(C) {
      switch (C) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function G(g, C) {
    return C = C === void 0 ? "" : C, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: C + "P:", segmentPrefix: C + "S:", boundaryPrefix: C + "B:", idPrefix: C, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function j(g, C, I, Y) {
    return I.generateStaticMarkup ? (g.push(k(C)), !1) : (C === "" ? g = Y : (Y && g.push("<!-- -->"), g.push(k(C)), g = !0), g);
  }
  var J = Object.assign, ue = Symbol.for("react.element"), _e = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), we = Symbol.for("react.scope"), Ue = Symbol.for("react.debug_trace_mode"), Ge = Symbol.for("react.legacy_hidden"), et = Symbol.for("react.default_value"), Je = Symbol.iterator;
  function st(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case be:
        return "Fragment";
      case _e:
        return "Portal";
      case Le:
        return "Profiler";
      case ye:
        return "StrictMode";
      case he:
        return "Suspense";
      case Pe:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Ie:
          return (g.displayName || "Context") + ".Consumer";
        case ae:
          return (g._context.displayName || "Context") + ".Provider";
        case Ee:
          var C = g.render;
          return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case ee:
          return C = g.displayName || null, C !== null ? C : st(g.type) || "Memo";
        case De:
          C = g._payload, g = g._init;
          try {
            return st(g(C));
          } catch {
          }
      }
    return null;
  }
  var Ke = {};
  function We(g, C) {
    if (g = g.contextTypes, !g)
      return Ke;
    var I = {}, Y;
    for (Y in g)
      I[Y] = C[Y];
    return I;
  }
  var Be = null;
  function $e(g, C) {
    if (g !== C) {
      g.context._currentValue2 = g.parentValue, g = g.parent;
      var I = C.parent;
      if (g === null) {
        if (I !== null)
          throw Error(t(401));
      } else {
        if (I === null)
          throw Error(t(401));
        $e(g, I);
      }
      C.context._currentValue2 = C.value;
    }
  }
  function ht(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && ht(g);
  }
  function qe(g) {
    var C = g.parent;
    C !== null && qe(C), g.context._currentValue2 = g.value;
  }
  function pt(g, C) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === C.depth ? $e(g, C) : pt(g, C);
  }
  function gt(g, C) {
    var I = C.parent;
    if (I === null)
      throw Error(t(402));
    g.depth === I.depth ? $e(g, I) : gt(g, I), C.context._currentValue2 = C.value;
  }
  function ut(g) {
    var C = Be;
    C !== g && (C === null ? qe(g) : g === null ? ht(C) : C.depth === g.depth ? $e(C, g) : C.depth > g.depth ? pt(C, g) : gt(C, g), Be = g);
  }
  var Rt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, C) {
    g = g._reactInternals, g.queue !== null && g.queue.push(C);
  }, enqueueReplaceState: function(g, C) {
    g = g._reactInternals, g.replace = !0, g.queue = [C];
  }, enqueueForceUpdate: function() {
  } };
  function tn(g, C, I, Y) {
    var Se = g.state !== void 0 ? g.state : null;
    g.updater = Rt, g.props = I, g.state = Se;
    var ge = { queue: [], replace: !1 };
    g._reactInternals = ge;
    var Ae = C.contextType;
    if (g.context = typeof Ae == "object" && Ae !== null ? Ae._currentValue2 : Y, Ae = C.getDerivedStateFromProps, typeof Ae == "function" && (Ae = Ae(I, Se), Se = Ae == null ? Se : J({}, Se, Ae), g.state = Se), typeof C.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (C = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), C !== g.state && Rt.enqueueReplaceState(g, g.state, null), ge.queue !== null && 0 < ge.queue.length)
        if (C = ge.queue, Ae = ge.replace, ge.queue = null, ge.replace = !1, Ae && C.length === 1)
          g.state = C[0];
        else {
          for (ge = Ae ? C[0] : g.state, Se = !0, Ae = Ae ? 1 : 0; Ae < C.length; Ae++) {
            var je = C[Ae];
            je = typeof je == "function" ? je.call(g, ge, I, Y) : je, je != null && (Se ? (Se = !1, ge = J({}, ge, je)) : J(ge, je));
          }
          g.state = ge;
        }
      else
        ge.queue = null;
  }
  var Xt = { id: 1, overflow: "" };
  function vt(g, C, I) {
    var Y = g.id;
    g = g.overflow;
    var Se = 32 - Nt(Y) - 1;
    Y &= ~(1 << Se), I += 1;
    var ge = 32 - Nt(C) + Se;
    if (30 < ge) {
      var Ae = Se - Se % 5;
      return ge = (Y & (1 << Ae) - 1).toString(32), Y >>= Ae, Se -= Ae, { id: 1 << 32 - Nt(C) + Se | I << Se | Y, overflow: ge + g };
    }
    return { id: 1 << ge | I << Se | Y, overflow: g };
  }
  var Nt = Math.clz32 ? Math.clz32 : Gt, hn = Math.log, on = Math.LN2;
  function Gt(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (hn(g) / on | 0) | 0;
  }
  function yn(g, C) {
    return g === C && (g !== 0 || 1 / g === 1 / C) || g !== g && C !== C;
  }
  var ze = typeof Object.is == "function" ? Object.is : yn, xt = null, Ht = null, It = null, At = null, xn = !1, Mt = !1, ln = 0, cn = null, wn = 0;
  function Jt() {
    if (xt === null)
      throw Error(t(321));
    return xt;
  }
  function jt() {
    if (0 < wn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pn() {
    return At === null ? It === null ? (xn = !1, It = At = jt()) : (xn = !0, At = It) : At.next === null ? (xn = !1, At = At.next = jt()) : (xn = !0, At = At.next), At;
  }
  function Mn() {
    Ht = xt = null, Mt = !1, It = null, wn = 0, At = cn = null;
  }
  function Hn(g, C) {
    return typeof C == "function" ? C(g) : C;
  }
  function Ut(g, C, I) {
    if (xt = Jt(), At = Pn(), xn) {
      var Y = At.queue;
      if (C = Y.dispatch, cn !== null && (I = cn.get(Y), I !== void 0)) {
        cn.delete(Y), Y = At.memoizedState;
        do
          Y = g(Y, I.action), I = I.next;
        while (I !== null);
        return At.memoizedState = Y, [Y, C];
      }
      return [At.memoizedState, C];
    }
    return g = g === Hn ? typeof C == "function" ? C() : C : I !== void 0 ? I(C) : C, At.memoizedState = g, g = At.queue = { last: null, dispatch: null }, g = g.dispatch = Wn.bind(null, xt, g), [At.memoizedState, g];
  }
  function zn(g, C) {
    if (xt = Jt(), At = Pn(), C = C === void 0 ? null : C, At !== null) {
      var I = At.memoizedState;
      if (I !== null && C !== null) {
        var Y = I[1];
        e:
          if (Y === null)
            Y = !1;
          else {
            for (var Se = 0; Se < Y.length && Se < C.length; Se++)
              if (!ze(C[Se], Y[Se])) {
                Y = !1;
                break e;
              }
            Y = !0;
          }
        if (Y)
          return I[0];
      }
    }
    return g = g(), At.memoizedState = [g, C], g;
  }
  function Wn(g, C, I) {
    if (25 <= wn)
      throw Error(t(301));
    if (g === xt)
      if (Mt = !0, g = { action: I, next: null }, cn === null && (cn = /* @__PURE__ */ new Map()), I = cn.get(C), I === void 0)
        cn.set(C, g);
      else {
        for (C = I; C.next !== null; )
          C = C.next;
        C.next = g;
      }
  }
  function An() {
    throw Error(t(394));
  }
  function Sn() {
  }
  var Ne = { readContext: function(g) {
    return g._currentValue2;
  }, useContext: function(g) {
    return Jt(), g._currentValue2;
  }, useMemo: zn, useReducer: Ut, useRef: function(g) {
    xt = Jt(), At = Pn();
    var C = At.memoizedState;
    return C === null ? (g = { current: g }, At.memoizedState = g) : C;
  }, useState: function(g) {
    return Ut(Hn, g);
  }, useInsertionEffect: Sn, useLayoutEffect: function() {
  }, useCallback: function(g, C) {
    return zn(function() {
      return g;
    }, C);
  }, useImperativeHandle: Sn, useEffect: Sn, useDebugValue: Sn, useDeferredValue: function(g) {
    return Jt(), g;
  }, useTransition: function() {
    return Jt(), [
      !1,
      An
    ];
  }, useId: function() {
    var g = Ht.treeContext, C = g.overflow;
    g = g.id, g = (g & ~(1 << 32 - Nt(g) - 1)).toString(32) + C;
    var I = ct;
    if (I === null)
      throw Error(t(404));
    return C = ln++, g = ":" + I.idPrefix + "R" + g, 0 < C && (g += "H" + C.toString(32)), g + ":";
  }, useMutableSource: function(g, C) {
    return Jt(), C(g._source);
  }, useSyncExternalStore: function(g, C, I) {
    if (I === void 0)
      throw Error(t(407));
    return I();
  } }, ct = null, dt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $(g) {
    return console.error(g), null;
  }
  function Oe() {
  }
  function Xe(g, C, I, Y, Se, ge, Ae, je, rt) {
    var yt = [], ie = /* @__PURE__ */ new Set();
    return C = { destination: null, responseState: C, progressiveChunkSize: Y === void 0 ? 12800 : Y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ie, pingedTasks: yt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? $ : Se, onAllReady: ge === void 0 ? Oe : ge, onShellReady: Ae === void 0 ? Oe : Ae, onShellError: je === void 0 ? Oe : je, onFatalError: rt === void 0 ? Oe : rt }, I = it(C, 0, null, I, !1, !1), I.parentFlushed = !0, g = Ve(C, g, null, I, ie, Ke, null, Xt), yt.push(g), C;
  }
  function Ve(g, C, I, Y, Se, ge, Ae, je) {
    g.allPendingTasks++, I === null ? g.pendingRootTasks++ : I.pendingTasks++;
    var rt = { node: C, ping: function() {
      var yt = g.pingedTasks;
      yt.push(rt), yt.length === 1 && sn(g);
    }, blockedBoundary: I, blockedSegment: Y, abortSet: Se, legacyContext: ge, context: Ae, treeContext: je };
    return Se.add(rt), rt;
  }
  function it(g, C, I, Y, Se, ge) {
    return { status: 0, id: -1, index: C, parentFlushed: !1, chunks: [], children: [], formatContext: Y, boundary: I, lastPushedText: Se, textEmbedded: ge };
  }
  function nt(g, C) {
    if (g = g.onError(C), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function Et(g, C) {
    var I = g.onShellError;
    I(C), I = g.onFatalError, I(C), g.destination !== null ? (g.status = 2, g.destination.destroy(C)) : (g.status = 1, g.fatalError = C);
  }
  function _t(g, C, I, Y, Se) {
    for (xt = {}, Ht = C, ln = 0, g = I(Y, Se); Mt; )
      Mt = !1, ln = 0, wn += 1, At = null, g = I(Y, Se);
    return Mn(), g;
  }
  function Ze(g, C, I, Y) {
    var Se = I.render(), ge = Y.childContextTypes;
    if (ge != null) {
      var Ae = C.legacyContext;
      if (typeof I.getChildContext != "function")
        Y = Ae;
      else {
        I = I.getChildContext();
        for (var je in I)
          if (!(je in ge))
            throw Error(t(108, st(Y) || "Unknown", je));
        Y = J({}, Ae, I);
      }
      C.legacyContext = Y, Ft(g, C, Se), C.legacyContext = Ae;
    } else
      Ft(g, C, Se);
  }
  function Kt(g, C) {
    if (g && g.defaultProps) {
      C = J({}, C), g = g.defaultProps;
      for (var I in g)
        C[I] === void 0 && (C[I] = g[I]);
      return C;
    }
    return C;
  }
  function zt(g, C, I, Y, Se) {
    if (typeof I == "function")
      if (I.prototype && I.prototype.isReactComponent) {
        Se = We(I, C.legacyContext);
        var ge = I.contextType;
        ge = new I(Y, typeof ge == "object" && ge !== null ? ge._currentValue2 : Se), tn(ge, I, Y, Se), Ze(g, C, ge, I);
      } else {
        ge = We(I, C.legacyContext), Se = _t(g, C, I, Y, ge);
        var Ae = ln !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          tn(Se, I, Y, ge), Ze(g, C, Se, I);
        else if (Ae) {
          Y = C.treeContext, C.treeContext = vt(Y, 1, 0);
          try {
            Ft(g, C, Se);
          } finally {
            C.treeContext = Y;
          }
        } else
          Ft(g, C, Se);
      }
    else if (typeof I == "string") {
      switch (Se = C.blockedSegment, ge = K(Se.chunks, I, Y, g.responseState, Se.formatContext), Se.lastPushedText = !1, Ae = Se.formatContext, Se.formatContext = N(Ae, I, Y), Dt(g, C, ge), Se.formatContext = Ae, I) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          Se.chunks.push("</", I, ">");
      }
      Se.lastPushedText = !1;
    } else {
      switch (I) {
        case Ge:
        case Ue:
        case ye:
        case Le:
        case be:
          Ft(g, C, Y.children);
          return;
        case Pe:
          Ft(g, C, Y.children);
          return;
        case we:
          throw Error(t(343));
        case he:
          e: {
            I = C.blockedBoundary, Se = C.blockedSegment, ge = Y.fallback, Y = Y.children, Ae = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Ae, errorDigest: null }, rt = it(g, Se.chunks.length, je, Se.formatContext, !1, !1);
            Se.children.push(rt), Se.lastPushedText = !1;
            var yt = it(g, 0, null, Se.formatContext, !1, !1);
            yt.parentFlushed = !0, C.blockedBoundary = je, C.blockedSegment = yt;
            try {
              if (Dt(
                g,
                C,
                Y
              ), g.responseState.generateStaticMarkup || yt.lastPushedText && yt.textEmbedded && yt.chunks.push("<!-- -->"), yt.status = 1, Wt(je, yt), je.pendingTasks === 0)
                break e;
            } catch (ie) {
              yt.status = 4, je.forceClientRender = !0, je.errorDigest = nt(g, ie);
            } finally {
              C.blockedBoundary = I, C.blockedSegment = Se;
            }
            C = Ve(g, ge, I, rt, Ae, C.legacyContext, C.context, C.treeContext), g.pingedTasks.push(C);
          }
          return;
      }
      if (typeof I == "object" && I !== null)
        switch (I.$$typeof) {
          case Ee:
            if (Y = _t(g, C, I.render, Y, Se), ln !== 0) {
              I = C.treeContext, C.treeContext = vt(I, 1, 0);
              try {
                Ft(g, C, Y);
              } finally {
                C.treeContext = I;
              }
            } else
              Ft(g, C, Y);
            return;
          case ee:
            I = I.type, Y = Kt(I, Y), zt(g, C, I, Y, Se);
            return;
          case ae:
            if (Se = Y.children, I = I._context, Y = Y.value, ge = I._currentValue2, I._currentValue2 = Y, Ae = Be, Be = Y = { parent: Ae, depth: Ae === null ? 0 : Ae.depth + 1, context: I, parentValue: ge, value: Y }, C.context = Y, Ft(g, C, Se), g = Be, g === null)
              throw Error(t(403));
            Y = g.parentValue, g.context._currentValue2 = Y === et ? g.context._defaultValue : Y, g = Be = g.parent, C.context = g;
            return;
          case Ie:
            Y = Y.children, Y = Y(I._currentValue2), Ft(g, C, Y);
            return;
          case De:
            Se = I._init, I = Se(I._payload), Y = Kt(I, Y), zt(
              g,
              C,
              I,
              Y,
              void 0
            );
            return;
        }
      throw Error(t(130, I == null ? I : typeof I, ""));
    }
  }
  function Ft(g, C, I) {
    if (C.node = I, typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case ue:
          zt(g, C, I.type, I.props, I.ref);
          return;
        case _e:
          throw Error(t(257));
        case De:
          var Y = I._init;
          I = Y(I._payload), Ft(g, C, I);
          return;
      }
      if (m(I)) {
        mt(g, C, I);
        return;
      }
      if (I === null || typeof I != "object" ? Y = null : (Y = Je && I[Je] || I["@@iterator"], Y = typeof Y == "function" ? Y : null), Y && (Y = Y.call(I))) {
        if (I = Y.next(), !I.done) {
          var Se = [];
          do
            Se.push(I.value), I = Y.next();
          while (!I.done);
          mt(g, C, Se);
        }
        return;
      }
      throw g = Object.prototype.toString.call(I), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : g));
    }
    typeof I == "string" ? (Y = C.blockedSegment, Y.lastPushedText = j(C.blockedSegment.chunks, I, g.responseState, Y.lastPushedText)) : typeof I == "number" && (Y = C.blockedSegment, Y.lastPushedText = j(C.blockedSegment.chunks, "" + I, g.responseState, Y.lastPushedText));
  }
  function mt(g, C, I) {
    for (var Y = I.length, Se = 0; Se < Y; Se++) {
      var ge = C.treeContext;
      C.treeContext = vt(ge, Y, Se);
      try {
        Dt(g, C, I[Se]);
      } finally {
        C.treeContext = ge;
      }
    }
  }
  function Dt(g, C, I) {
    var Y = C.blockedSegment.formatContext, Se = C.legacyContext, ge = C.context;
    try {
      return Ft(g, C, I);
    } catch (rt) {
      if (Mn(), typeof rt == "object" && rt !== null && typeof rt.then == "function") {
        I = rt;
        var Ae = C.blockedSegment, je = it(g, Ae.chunks.length, null, Ae.formatContext, Ae.lastPushedText, !0);
        Ae.children.push(je), Ae.lastPushedText = !1, g = Ve(g, C.node, C.blockedBoundary, je, C.abortSet, C.legacyContext, C.context, C.treeContext).ping, I.then(g, g), C.blockedSegment.formatContext = Y, C.legacyContext = Se, C.context = ge, ut(ge);
      } else
        throw C.blockedSegment.formatContext = Y, C.legacyContext = Se, C.context = ge, ut(ge), rt;
    }
  }
  function wt(g) {
    var C = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, dn(this, C, g);
  }
  function Yt(g, C, I) {
    var Y = g.blockedBoundary;
    g.blockedSegment.status = 3, Y === null ? (C.allPendingTasks--, C.status !== 2 && (C.status = 2, C.destination !== null && C.destination.push(null))) : (Y.pendingTasks--, Y.forceClientRender || (Y.forceClientRender = !0, g = I === void 0 ? Error(t(432)) : I, Y.errorDigest = C.onError(g), Y.parentFlushed && C.clientRenderedBoundaries.push(Y)), Y.fallbackAbortableTasks.forEach(function(Se) {
      return Yt(Se, C, I);
    }), Y.fallbackAbortableTasks.clear(), C.allPendingTasks--, C.allPendingTasks === 0 && (Y = C.onAllReady, Y()));
  }
  function Wt(g, C) {
    if (C.chunks.length === 0 && C.children.length === 1 && C.children[0].boundary === null) {
      var I = C.children[0];
      I.id = C.id, I.parentFlushed = !0, I.status === 1 && Wt(g, I);
    } else
      g.completedSegments.push(C);
  }
  function dn(g, C, I) {
    if (C === null) {
      if (I.parentFlushed) {
        if (g.completedRootSegment !== null)
          throw Error(t(389));
        g.completedRootSegment = I;
      }
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = Oe, C = g.onShellReady, C());
    } else
      C.pendingTasks--, C.forceClientRender || (C.pendingTasks === 0 ? (I.parentFlushed && I.status === 1 && Wt(C, I), C.parentFlushed && g.completedBoundaries.push(C), C.fallbackAbortableTasks.forEach(wt, g), C.fallbackAbortableTasks.clear()) : I.parentFlushed && I.status === 1 && (Wt(C, I), C.completedSegments.length === 1 && C.parentFlushed && g.partialBoundaries.push(C)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function sn(g) {
    if (g.status !== 2) {
      var C = Be, I = dt.current;
      dt.current = Ne;
      var Y = ct;
      ct = g.responseState;
      try {
        var Se = g.pingedTasks, ge;
        for (ge = 0; ge < Se.length; ge++) {
          var Ae = Se[ge], je = g, rt = Ae.blockedSegment;
          if (rt.status === 0) {
            ut(Ae.context);
            try {
              Ft(je, Ae, Ae.node), je.responseState.generateStaticMarkup || rt.lastPushedText && rt.textEmbedded && rt.chunks.push("<!-- -->"), Ae.abortSet.delete(Ae), rt.status = 1, dn(je, Ae.blockedBoundary, rt);
            } catch (bt) {
              if (Mn(), typeof bt == "object" && bt !== null && typeof bt.then == "function") {
                var yt = Ae.ping;
                bt.then(yt, yt);
              } else {
                Ae.abortSet.delete(Ae), rt.status = 4;
                var ie = Ae.blockedBoundary, se = bt, me = nt(je, se);
                if (ie === null ? Et(je, se) : (ie.pendingTasks--, ie.forceClientRender || (ie.forceClientRender = !0, ie.errorDigest = me, ie.parentFlushed && je.clientRenderedBoundaries.push(ie))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var Re = je.onAllReady;
                  Re();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ge), g.destination !== null && In(g, g.destination);
      } catch (bt) {
        nt(g, bt), Et(g, bt);
      } finally {
        ct = Y, dt.current = I, I === Ne && ut(C);
      }
    }
  }
  function nn(g, C, I) {
    switch (I.parentFlushed = !0, I.status) {
      case 0:
        var Y = I.id = g.nextSegmentId++;
        return I.lastPushedText = !1, I.textEmbedded = !1, g = g.responseState, C.push('<template id="'), C.push(g.placeholderPrefix), g = Y.toString(16), C.push(g), C.push('"></template>');
      case 1:
        I.status = 2;
        var Se = !0;
        Y = I.chunks;
        var ge = 0;
        I = I.children;
        for (var Ae = 0; Ae < I.length; Ae++) {
          for (Se = I[Ae]; ge < Se.index; ge++)
            C.push(Y[ge]);
          Se = Zt(g, C, Se);
        }
        for (; ge < Y.length - 1; ge++)
          C.push(Y[ge]);
        return ge < Y.length && (Se = C.push(Y[ge])), Se;
      default:
        throw Error(t(390));
    }
  }
  function Zt(g, C, I) {
    var Y = I.boundary;
    if (Y === null)
      return nn(g, C, I);
    if (Y.parentFlushed = !0, Y.forceClientRender)
      return g.responseState.generateStaticMarkup || (Y = Y.errorDigest, C.push("<!--$!-->"), C.push("<template"), Y && (C.push(' data-dgst="'), Y = k(Y), C.push(Y), C.push('"')), C.push("></template>")), nn(g, C, I), g = g.responseState.generateStaticMarkup ? !0 : C.push("<!--/$-->"), g;
    if (0 < Y.pendingTasks) {
      Y.rootSegmentID = g.nextSegmentId++, 0 < Y.completedSegments.length && g.partialBoundaries.push(Y);
      var Se = g.responseState, ge = Se.nextSuspenseID++;
      return Se = Se.boundaryPrefix + ge.toString(16), Y = Y.id = Se, X(C, g.responseState, Y), nn(g, C, I), C.push("<!--/$-->");
    }
    if (Y.byteSize > g.progressiveChunkSize)
      return Y.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(Y), X(C, g.responseState, Y.id), nn(g, C, I), C.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || C.push("<!--$-->"), I = Y.completedSegments, I.length !== 1)
      throw Error(t(391));
    return Zt(g, C, I[0]), g = g.responseState.generateStaticMarkup ? !0 : C.push("<!--/$-->"), g;
  }
  function En(g, C, I) {
    return B(C, g.responseState, I.formatContext, I.id), Zt(g, C, I), oe(C, I.formatContext);
  }
  function un(g, C, I) {
    for (var Y = I.completedSegments, Se = 0; Se < Y.length; Se++)
      kn(g, C, I, Y[Se]);
    if (Y.length = 0, g = g.responseState, Y = I.id, I = I.rootSegmentID, C.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? C.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, C.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), Y === null)
      throw Error(t(395));
    return I = I.toString(16), C.push(Y), C.push('","'), C.push(g.segmentPrefix), C.push(I), C.push('")<\/script>');
  }
  function kn(g, C, I, Y) {
    if (Y.status === 2)
      return !0;
    var Se = Y.id;
    if (Se === -1) {
      if ((Y.id = I.rootSegmentID) === -1)
        throw Error(t(392));
      return En(g, C, Y);
    }
    return En(g, C, Y), g = g.responseState, C.push(g.startInlineScript), g.sentCompleteSegmentFunction ? C.push('$RS("') : (g.sentCompleteSegmentFunction = !0, C.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), C.push(g.segmentPrefix), Se = Se.toString(16), C.push(Se), C.push('","'), C.push(g.placeholderPrefix), C.push(Se), C.push('")<\/script>');
  }
  function In(g, C) {
    try {
      var I = g.completedRootSegment;
      if (I !== null && g.pendingRootTasks === 0) {
        Zt(g, C, I), g.completedRootSegment = null;
        var Y = g.responseState.bootstrapChunks;
        for (I = 0; I < Y.length - 1; I++)
          C.push(Y[I]);
        I < Y.length && C.push(Y[I]);
      }
      var Se = g.clientRenderedBoundaries, ge;
      for (ge = 0; ge < Se.length; ge++) {
        var Ae = Se[ge];
        Y = C;
        var je = g.responseState, rt = Ae.id, yt = Ae.errorDigest, ie = Ae.errorMessage, se = Ae.errorComponentStack;
        if (Y.push(je.startInlineScript), je.sentClientRenderFunction ? Y.push('$RX("') : (je.sentClientRenderFunction = !0, Y.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), rt === null)
          throw Error(t(395));
        if (Y.push(rt), Y.push('"'), yt || ie || se) {
          Y.push(",");
          var me = le(yt || "");
          Y.push(me);
        }
        if (ie || se) {
          Y.push(",");
          var Re = le(ie || "");
          Y.push(Re);
        }
        if (se) {
          Y.push(",");
          var bt = le(se);
          Y.push(bt);
        }
        if (!Y.push(")<\/script>")) {
          g.destination = null, ge++, Se.splice(0, ge);
          return;
        }
      }
      Se.splice(0, ge);
      var gn = g.completedBoundaries;
      for (ge = 0; ge < gn.length; ge++)
        if (!un(g, C, gn[ge])) {
          g.destination = null, ge++, gn.splice(0, ge);
          return;
        }
      gn.splice(0, ge);
      var Tn = g.partialBoundaries;
      for (ge = 0; ge < Tn.length; ge++) {
        var fr = Tn[ge];
        e: {
          Se = g, Ae = C;
          var $n = fr.completedSegments;
          for (je = 0; je < $n.length; je++)
            if (!kn(Se, Ae, fr, $n[je])) {
              je++, $n.splice(0, je);
              var wr = !1;
              break e;
            }
          $n.splice(0, je), wr = !0;
        }
        if (!wr) {
          g.destination = null, ge++, Tn.splice(0, ge);
          return;
        }
      }
      Tn.splice(0, ge);
      var pr = g.completedBoundaries;
      for (ge = 0; ge < pr.length; ge++)
        if (!un(g, C, pr[ge])) {
          g.destination = null, ge++, pr.splice(0, ge);
          return;
        }
      pr.splice(0, ge);
    } finally {
      g.allPendingTasks === 0 && g.pingedTasks.length === 0 && g.clientRenderedBoundaries.length === 0 && g.completedBoundaries.length === 0 && C.push(null);
    }
  }
  function Yn(g, C) {
    try {
      var I = g.abortableTasks;
      I.forEach(function(Y) {
        return Yt(Y, g, C);
      }), I.clear(), g.destination !== null && In(g, g.destination);
    } catch (Y) {
      nt(g, Y), Et(g, Y);
    }
  }
  function Zn() {
  }
  function Xn(g, C, I, Y) {
    var Se = !1, ge = null, Ae = "", je = { push: function(yt) {
      return yt !== null && (Ae += yt), !0;
    }, destroy: function(yt) {
      Se = !0, ge = yt;
    } }, rt = !1;
    if (g = Xe(g, G(I, C ? C.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Zn, void 0, function() {
      rt = !0;
    }, void 0, void 0), sn(g), Yn(g, Y), g.status === 1)
      g.status = 2, je.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = je;
      try {
        In(g, je);
      } catch (yt) {
        nt(g, yt), Et(g, yt);
      }
    }
    if (Se)
      throw ge;
    if (!rt)
      throw Error(t(426));
    return Ae;
  }
  return Ti.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ti.renderToStaticMarkup = function(g, C) {
    return Xn(g, C, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ti.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ti.renderToString = function(g, C) {
    return Xn(g, C, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ti.version = "18.2.0", Ti;
}
var Tu = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;
function BS() {
  if (Lh)
    return Tu;
  Lh = 1;
  var e = de;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, z = 1; z < arguments.length; z++)
      A += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, i = 0;
  function a(x, A) {
    if (A.length !== 0)
      if (512 < A.length)
        0 < i && (x.enqueue(new Uint8Array(n.buffer, 0, i)), n = new Uint8Array(512), i = 0), x.enqueue(A);
      else {
        var z = n.length - i;
        z < A.length && (z === 0 ? x.enqueue(n) : (n.set(A.subarray(0, z), i), x.enqueue(n), A = A.subarray(z)), n = new Uint8Array(512), i = 0), n.set(A, i), i += A.length;
      }
  }
  function l(x, A) {
    return a(x, A), !0;
  }
  function f(x) {
    n && 0 < i && (x.enqueue(new Uint8Array(n.buffer, 0, i)), n = null, i = 0);
  }
  var d = new TextEncoder();
  function u(x) {
    return d.encode(x);
  }
  function h(x) {
    return d.encode(x);
  }
  function y(x, A) {
    typeof x.error == "function" ? x.error(A) : x.close();
  }
  var v = Object.prototype.hasOwnProperty, S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, k = {};
  function F(x) {
    return v.call(k, x) ? !0 : v.call(R, x) ? !1 : S.test(x) ? k[x] = !0 : (R[x] = !0, !1);
  }
  function T(x, A, z, q, ke, xe, Me) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = q, this.attributeNamespace = ke, this.mustUseProperty = z, this.propertyName = x, this.type = A, this.sanitizeURL = xe, this.removeEmptyString = Me;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    m[x] = new T(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var A = x[0];
    m[A] = new T(A, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    m[x] = new T(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    m[x] = new T(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    m[x] = new T(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    m[x] = new T(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    m[x] = new T(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    m[x] = new T(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    m[x] = new T(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var O = /[\-:]([a-z])/g;
  function N(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var A = x.replace(
      O,
      N
    );
    m[A] = new T(A, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var A = x.replace(O, N);
    m[A] = new T(A, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var A = x.replace(O, N);
    m[A] = new T(A, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    m[x] = new T(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    m[x] = new T(x, 1, !1, x.toLowerCase(), null, !0, !0);
  });
  var P = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, D = ["Webkit", "ms", "Moz", "O"];
  Object.keys(P).forEach(function(x) {
    D.forEach(function(A) {
      A = A + x.charAt(0).toUpperCase() + x.substring(1), P[A] = P[x];
    });
  });
  var L = /["'&<>]/;
  function U(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = L.exec(x);
    if (A) {
      var z = "", q, ke = 0;
      for (q = A.index; q < x.length; q++) {
        switch (x.charCodeAt(q)) {
          case 34:
            A = "&quot;";
            break;
          case 38:
            A = "&amp;";
            break;
          case 39:
            A = "&#x27;";
            break;
          case 60:
            A = "&lt;";
            break;
          case 62:
            A = "&gt;";
            break;
          default:
            continue;
        }
        ke !== q && (z += x.substring(ke, q)), ke = q + 1, z += A;
      }
      x = ke !== q ? z + x.substring(ke, q) : z;
    }
    return x;
  }
  var W = /([A-Z])/g, Z = /^ms-/, ce = Array.isArray, te = h("<script>"), V = h("<\/script>"), K = h('<script src="'), X = h('<script type="module" src="'), B = h('" async=""><\/script>'), oe = /(<\/|<)(s)(cript)/gi;
  function re(x, A, z, q) {
    return "" + A + (z === "s" ? "\\u0073" : "\\u0053") + q;
  }
  function le(x, A, z, q, ke) {
    x = x === void 0 ? "" : x, A = A === void 0 ? te : h('<script nonce="' + U(A) + '">');
    var xe = [];
    if (z !== void 0 && xe.push(A, u(("" + z).replace(oe, re)), V), q !== void 0)
      for (z = 0; z < q.length; z++)
        xe.push(K, u(U(q[z])), B);
    if (ke !== void 0)
      for (q = 0; q < ke.length; q++)
        xe.push(X, u(U(ke[q])), B);
    return { bootstrapChunks: xe, startInlineScript: A, placeholderPrefix: h(x + "P:"), segmentPrefix: h(x + "S:"), boundaryPrefix: x + "B:", idPrefix: x, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function G(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function j(x) {
    return G(x === "http://www.w3.org/2000/svg" ? 2 : x === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function J(x, A, z) {
    switch (A) {
      case "select":
        return G(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return G(2, null);
      case "math":
        return G(3, null);
      case "foreignObject":
        return G(1, null);
      case "table":
        return G(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return G(5, null);
      case "colgroup":
        return G(7, null);
      case "tr":
        return G(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? G(1, null) : x;
  }
  var ue = h("<!-- -->");
  function _e(x, A, z, q) {
    return A === "" ? q : (q && x.push(ue), x.push(u(U(A))), !0);
  }
  var be = /* @__PURE__ */ new Map(), ye = h(' style="'), Le = h(":"), ae = h(";");
  function Ie(x, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var q in z)
      if (v.call(z, q)) {
        var ke = z[q];
        if (ke != null && typeof ke != "boolean" && ke !== "") {
          if (q.indexOf("--") === 0) {
            var xe = u(U(q));
            ke = u(U(("" + ke).trim()));
          } else {
            xe = q;
            var Me = be.get(xe);
            Me !== void 0 || (Me = h(U(xe.replace(W, "-$1").toLowerCase().replace(Z, "-ms-"))), be.set(xe, Me)), xe = Me, ke = typeof ke == "number" ? ke === 0 || v.call(P, q) ? u("" + ke) : u(ke + "px") : u(U(("" + ke).trim()));
          }
          A ? (A = !1, x.push(ye, xe, Le, ke)) : x.push(ae, xe, Le, ke);
        }
      }
    A || x.push(Pe);
  }
  var Ee = h(" "), he = h('="'), Pe = h('"'), ee = h('=""');
  function De(x, A, z, q) {
    switch (z) {
      case "style":
        Ie(x, A, q);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (A = m.hasOwnProperty(z) ? m[z] : null, A !== null) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = u(A.attributeName), A.type) {
          case 3:
            q && x.push(Ee, z, ee);
            break;
          case 4:
            q === !0 ? x.push(Ee, z, ee) : q !== !1 && x.push(Ee, z, he, u(U(q)), Pe);
            break;
          case 5:
            isNaN(q) || x.push(Ee, z, he, u(U(q)), Pe);
            break;
          case 6:
            !isNaN(q) && 1 <= q && x.push(Ee, z, he, u(U(q)), Pe);
            break;
          default:
            A.sanitizeURL && (q = "" + q), x.push(Ee, z, he, u(U(q)), Pe);
        }
      } else if (F(z)) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(Ee, u(z), he, u(U(q)), Pe);
      }
    }
  }
  var we = h(">"), Ue = h("/>");
  function Ge(x, A, z) {
    if (A != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push(u("" + A));
    }
  }
  function et(x) {
    var A = "";
    return e.Children.forEach(x, function(z) {
      z != null && (A += z);
    }), A;
  }
  var Je = h(' selected=""');
  function st(x, A, z, q) {
    x.push($e(z));
    var ke = z = null, xe;
    for (xe in A)
      if (v.call(A, xe)) {
        var Me = A[xe];
        if (Me != null)
          switch (xe) {
            case "children":
              z = Me;
              break;
            case "dangerouslySetInnerHTML":
              ke = Me;
              break;
            default:
              De(x, q, xe, Me);
          }
      }
    return x.push(we), Ge(x, ke, z), typeof z == "string" ? (x.push(u(U(z))), null) : z;
  }
  var Ke = h(`
`), We = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Be = /* @__PURE__ */ new Map();
  function $e(x) {
    var A = Be.get(x);
    if (A === void 0) {
      if (!We.test(x))
        throw Error(t(65, x));
      A = h("<" + x), Be.set(x, A);
    }
    return A;
  }
  var ht = h("<!DOCTYPE html>");
  function qe(x, A, z, q, ke) {
    switch (A) {
      case "select":
        x.push($e("select"));
        var xe = null, Me = null;
        for (Pt in z)
          if (v.call(z, Pt)) {
            var Ye = z[Pt];
            if (Ye != null)
              switch (Pt) {
                case "children":
                  xe = Ye;
                  break;
                case "dangerouslySetInnerHTML":
                  Me = Ye;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  De(x, q, Pt, Ye);
              }
          }
        return x.push(we), Ge(x, Me, xe), xe;
      case "option":
        Me = ke.selectedValue, x.push($e("option"));
        var St = Ye = null, Ot = null, Pt = null;
        for (xe in z)
          if (v.call(z, xe)) {
            var rn = z[xe];
            if (rn != null)
              switch (xe) {
                case "children":
                  Ye = rn;
                  break;
                case "selected":
                  Ot = rn;
                  break;
                case "dangerouslySetInnerHTML":
                  Pt = rn;
                  break;
                case "value":
                  St = rn;
                default:
                  De(x, q, xe, rn);
              }
          }
        if (Me != null)
          if (z = St !== null ? "" + St : et(Ye), ce(Me)) {
            for (q = 0; q < Me.length; q++)
              if ("" + Me[q] === z) {
                x.push(Je);
                break;
              }
          } else
            "" + Me === z && x.push(Je);
        else
          Ot && x.push(Je);
        return x.push(we), Ge(x, Pt, Ye), Ye;
      case "textarea":
        x.push($e("textarea")), Pt = Me = xe = null;
        for (Ye in z)
          if (v.call(z, Ye) && (St = z[Ye], St != null))
            switch (Ye) {
              case "children":
                Pt = St;
                break;
              case "value":
                xe = St;
                break;
              case "defaultValue":
                Me = St;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                De(x, q, Ye, St);
            }
        if (xe === null && Me !== null && (xe = Me), x.push(we), Pt != null) {
          if (xe != null)
            throw Error(t(92));
          if (ce(Pt) && 1 < Pt.length)
            throw Error(t(93));
          xe = "" + Pt;
        }
        return typeof xe == "string" && xe[0] === `
` && x.push(Ke), xe !== null && x.push(u(U("" + xe))), null;
      case "input":
        x.push($e("input")), St = Pt = Ye = xe = null;
        for (Me in z)
          if (v.call(z, Me) && (Ot = z[Me], Ot != null))
            switch (Me) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                St = Ot;
                break;
              case "defaultValue":
                Ye = Ot;
                break;
              case "checked":
                Pt = Ot;
                break;
              case "value":
                xe = Ot;
                break;
              default:
                De(x, q, Me, Ot);
            }
        return Pt !== null ? De(
          x,
          q,
          "checked",
          Pt
        ) : St !== null && De(x, q, "checked", St), xe !== null ? De(x, q, "value", xe) : Ye !== null && De(x, q, "value", Ye), x.push(Ue), null;
      case "menuitem":
        x.push($e("menuitem"));
        for (var Un in z)
          if (v.call(z, Un) && (xe = z[Un], xe != null))
            switch (Un) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                De(x, q, Un, xe);
            }
        return x.push(we), null;
      case "title":
        x.push($e("title")), xe = null;
        for (rn in z)
          if (v.call(z, rn) && (Me = z[rn], Me != null))
            switch (rn) {
              case "children":
                xe = Me;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                De(x, q, rn, Me);
            }
        return x.push(we), xe;
      case "listing":
      case "pre":
        x.push($e(A)), Me = xe = null;
        for (St in z)
          if (v.call(z, St) && (Ye = z[St], Ye != null))
            switch (St) {
              case "children":
                xe = Ye;
                break;
              case "dangerouslySetInnerHTML":
                Me = Ye;
                break;
              default:
                De(x, q, St, Ye);
            }
        if (x.push(we), Me != null) {
          if (xe != null)
            throw Error(t(60));
          if (typeof Me != "object" || !("__html" in Me))
            throw Error(t(61));
          z = Me.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? x.push(Ke, u(z)) : x.push(u("" + z)));
        }
        return typeof xe == "string" && xe[0] === `
` && x.push(Ke), xe;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        x.push($e(A));
        for (var Jn in z)
          if (v.call(z, Jn) && (xe = z[Jn], xe != null))
            switch (Jn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                De(x, q, Jn, xe);
            }
        return x.push(Ue), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return st(x, z, A, q);
      case "html":
        return ke.insertionMode === 0 && x.push(ht), st(x, z, A, q);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return st(x, z, A, q);
        x.push($e(A)), Me = xe = null;
        for (Ot in z)
          if (v.call(z, Ot) && (Ye = z[Ot], Ye != null))
            switch (Ot) {
              case "children":
                xe = Ye;
                break;
              case "dangerouslySetInnerHTML":
                Me = Ye;
                break;
              case "style":
                Ie(x, q, Ye);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                F(Ot) && typeof Ye != "function" && typeof Ye != "symbol" && x.push(Ee, u(Ot), he, u(U(Ye)), Pe);
            }
        return x.push(we), Ge(x, Me, xe), xe;
    }
  }
  var pt = h("</"), gt = h(">"), ut = h('<template id="'), Rt = h('"></template>'), tn = h("<!--$-->"), Xt = h('<!--$?--><template id="'), vt = h('"></template>'), Nt = h("<!--$!-->"), hn = h("<!--/$-->"), on = h("<template"), Gt = h('"'), yn = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var ze = h("></template>");
  function xt(x, A, z) {
    if (a(x, Xt), z === null)
      throw Error(t(395));
    return a(x, z), l(x, vt);
  }
  var Ht = h('<div hidden id="'), It = h('">'), At = h("</div>"), xn = h('<svg aria-hidden="true" style="display:none" id="'), Mt = h('">'), ln = h("</svg>"), cn = h('<math aria-hidden="true" style="display:none" id="'), wn = h('">'), Jt = h("</math>"), jt = h('<table hidden id="'), Pn = h('">'), Mn = h("</table>"), Hn = h('<table hidden><tbody id="'), Ut = h('">'), zn = h("</tbody></table>"), Wn = h('<table hidden><tr id="'), An = h('">'), Sn = h("</tr></table>"), Ne = h('<table hidden><colgroup id="'), ct = h('">'), dt = h("</colgroup></table>");
  function $(x, A, z, q) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return a(x, Ht), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, It);
      case 2:
        return a(x, xn), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, Mt);
      case 3:
        return a(x, cn), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, wn);
      case 4:
        return a(x, jt), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, Pn);
      case 5:
        return a(x, Hn), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, Ut);
      case 6:
        return a(x, Wn), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, An);
      case 7:
        return a(
          x,
          Ne
        ), a(x, A.segmentPrefix), a(x, u(q.toString(16))), l(x, ct);
      default:
        throw Error(t(397));
    }
  }
  function Oe(x, A) {
    switch (A.insertionMode) {
      case 0:
      case 1:
        return l(x, At);
      case 2:
        return l(x, ln);
      case 3:
        return l(x, Jt);
      case 4:
        return l(x, Mn);
      case 5:
        return l(x, zn);
      case 6:
        return l(x, Sn);
      case 7:
        return l(x, dt);
      default:
        throw Error(t(397));
    }
  }
  var Xe = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ve = h('$RS("'), it = h('","'), nt = h('")<\/script>'), Et = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _t = h('$RC("'), Ze = h('","'), Kt = h('")<\/script>'), zt = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ft = h('$RX("'), mt = h('"'), Dt = h(")<\/script>"), wt = h(","), Yt = /[<\u2028\u2029]/g;
  function Wt(x) {
    return JSON.stringify(x).replace(Yt, function(A) {
      switch (A) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var dn = Object.assign, sn = Symbol.for("react.element"), nn = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), un = Symbol.for("react.profiler"), kn = Symbol.for("react.provider"), In = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Zn = Symbol.for("react.suspense"), Xn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), I = Symbol.for("react.scope"), Y = Symbol.for("react.debug_trace_mode"), Se = Symbol.for("react.legacy_hidden"), ge = Symbol.for("react.default_value"), Ae = Symbol.iterator;
  function je(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case Zt:
        return "Fragment";
      case nn:
        return "Portal";
      case un:
        return "Profiler";
      case En:
        return "StrictMode";
      case Zn:
        return "Suspense";
      case Xn:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case In:
          return (x.displayName || "Context") + ".Consumer";
        case kn:
          return (x._context.displayName || "Context") + ".Provider";
        case Yn:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case g:
          return A = x.displayName || null, A !== null ? A : je(x.type) || "Memo";
        case C:
          A = x._payload, x = x._init;
          try {
            return je(x(A));
          } catch {
          }
      }
    return null;
  }
  var rt = {};
  function yt(x, A) {
    if (x = x.contextTypes, !x)
      return rt;
    var z = {}, q;
    for (q in x)
      z[q] = A[q];
    return z;
  }
  var ie = null;
  function se(x, A) {
    if (x !== A) {
      x.context._currentValue = x.parentValue, x = x.parent;
      var z = A.parent;
      if (x === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        se(x, z);
      }
      A.context._currentValue = A.value;
    }
  }
  function me(x) {
    x.context._currentValue = x.parentValue, x = x.parent, x !== null && me(x);
  }
  function Re(x) {
    var A = x.parent;
    A !== null && Re(A), x.context._currentValue = x.value;
  }
  function bt(x, A) {
    if (x.context._currentValue = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? se(x, A) : bt(x, A);
  }
  function gn(x, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    x.depth === z.depth ? se(x, z) : gn(x, z), A.context._currentValue = A.value;
  }
  function Tn(x) {
    var A = ie;
    A !== x && (A === null ? Re(x) : x === null ? me(A) : A.depth === x.depth ? se(A, x) : A.depth > x.depth ? bt(A, x) : gn(A, x), ie = x);
  }
  var fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function $n(x, A, z, q) {
    var ke = x.state !== void 0 ? x.state : null;
    x.updater = fr, x.props = z, x.state = ke;
    var xe = { queue: [], replace: !1 };
    x._reactInternals = xe;
    var Me = A.contextType;
    if (x.context = typeof Me == "object" && Me !== null ? Me._currentValue : q, Me = A.getDerivedStateFromProps, typeof Me == "function" && (Me = Me(z, ke), ke = Me == null ? ke : dn({}, ke, Me), x.state = ke), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && fr.enqueueReplaceState(x, x.state, null), xe.queue !== null && 0 < xe.queue.length)
        if (A = xe.queue, Me = xe.replace, xe.queue = null, xe.replace = !1, Me && A.length === 1)
          x.state = A[0];
        else {
          for (xe = Me ? A[0] : x.state, ke = !0, Me = Me ? 1 : 0; Me < A.length; Me++) {
            var Ye = A[Me];
            Ye = typeof Ye == "function" ? Ye.call(x, xe, z, q) : Ye, Ye != null && (ke ? (ke = !1, xe = dn({}, xe, Ye)) : dn(xe, Ye));
          }
          x.state = xe;
        }
      else
        xe.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function pr(x, A, z) {
    var q = x.id;
    x = x.overflow;
    var ke = 32 - qr(q) - 1;
    q &= ~(1 << ke), z += 1;
    var xe = 32 - qr(A) + ke;
    if (30 < xe) {
      var Me = ke - ke % 5;
      return xe = (q & (1 << Me) - 1).toString(32), q >>= Me, ke -= Me, { id: 1 << 32 - qr(A) + ke | z << ke | q, overflow: xe + x };
    }
    return { id: 1 << xe | z << ke | q, overflow: x };
  }
  var qr = Math.clz32 ? Math.clz32 : Ba, Zo = Math.log, Qo = Math.LN2;
  function Ba(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Zo(x) / Qo | 0) | 0;
  }
  function Jo(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Ha = typeof Object.is == "function" ? Object.is : Jo, hr = null, Gr = null, ca = null, en = null, mr = !1, Vn = !1, Tr = 0, yr = null, da = 0;
  function gr() {
    if (hr === null)
      throw Error(t(321));
    return hr;
  }
  function Qn() {
    if (0 < da)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wa() {
    return en === null ? ca === null ? (mr = !1, ca = en = Qn()) : (mr = !0, en = ca) : en.next === null ? (mr = !1, en = en.next = Qn()) : (mr = !0, en = en.next), en;
  }
  function Va() {
    Gr = hr = null, Vn = !1, ca = null, da = 0, en = yr = null;
  }
  function Ii(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function $i(x, A, z) {
    if (hr = gr(), en = Wa(), mr) {
      var q = en.queue;
      if (A = q.dispatch, yr !== null && (z = yr.get(q), z !== void 0)) {
        yr.delete(q), q = en.memoizedState;
        do
          q = x(q, z.action), z = z.next;
        while (z !== null);
        return en.memoizedState = q, [q, A];
      }
      return [en.memoizedState, A];
    }
    return x = x === Ii ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, en.memoizedState = x, x = en.queue = { last: null, dispatch: null }, x = x.dispatch = el.bind(null, hr, x), [en.memoizedState, x];
  }
  function Bi(x, A) {
    if (hr = gr(), en = Wa(), A = A === void 0 ? null : A, en !== null) {
      var z = en.memoizedState;
      if (z !== null && A !== null) {
        var q = z[1];
        e:
          if (q === null)
            q = !1;
          else {
            for (var ke = 0; ke < q.length && ke < A.length; ke++)
              if (!Ha(A[ke], q[ke])) {
                q = !1;
                break e;
              }
            q = !0;
          }
        if (q)
          return z[0];
      }
    }
    return x = x(), en.memoizedState = [x, A], x;
  }
  function el(x, A, z) {
    if (25 <= da)
      throw Error(t(301));
    if (x === hr)
      if (Vn = !0, x = { action: z, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), z = yr.get(A), z === void 0)
        yr.set(A, x);
      else {
        for (A = z; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function tl() {
    throw Error(t(394));
  }
  function fa() {
  }
  var pa = { readContext: function(x) {
    return x._currentValue;
  }, useContext: function(x) {
    return gr(), x._currentValue;
  }, useMemo: Bi, useReducer: $i, useRef: function(x) {
    hr = gr(), en = Wa();
    var A = en.memoizedState;
    return A === null ? (x = { current: x }, en.memoizedState = x) : A;
  }, useState: function(x) {
    return $i(Ii, x);
  }, useInsertionEffect: fa, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return Bi(function() {
      return x;
    }, A);
  }, useImperativeHandle: fa, useEffect: fa, useDebugValue: fa, useDeferredValue: function(x) {
    return gr(), x;
  }, useTransition: function() {
    return gr(), [!1, tl];
  }, useId: function() {
    var x = Gr.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - qr(x) - 1)).toString(32) + A;
    var z = ha;
    if (z === null)
      throw Error(t(404));
    return A = Tr++, x = ":" + z.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return gr(), A(x._source);
  }, useSyncExternalStore: function(x, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, ha = null, Zr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nl(x) {
    return console.error(x), null;
  }
  function Qr() {
  }
  function ja(x, A, z, q, ke, xe, Me, Ye, St) {
    var Ot = [], Pt = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: q === void 0 ? 12800 : q, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pt, pingedTasks: Ot, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ke === void 0 ? nl : ke, onAllReady: xe === void 0 ? Qr : xe, onShellReady: Me === void 0 ? Qr : Me, onShellError: Ye === void 0 ? Qr : Ye, onFatalError: St === void 0 ? Qr : St }, z = Or(A, 0, null, z, !1, !1), z.parentFlushed = !0, x = Ua(A, x, null, z, Pt, rt, null, wr), Ot.push(x), A;
  }
  function Ua(x, A, z, q, ke, xe, Me, Ye) {
    x.allPendingTasks++, z === null ? x.pendingRootTasks++ : z.pendingTasks++;
    var St = { node: A, ping: function() {
      var Ot = x.pingedTasks;
      Ot.push(St), Ot.length === 1 && Ki(x);
    }, blockedBoundary: z, blockedSegment: q, abortSet: ke, legacyContext: xe, context: Me, treeContext: Ye };
    return ke.add(St), St;
  }
  function Or(x, A, z, q, ke, xe) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: q, boundary: z, lastPushedText: ke, textEmbedded: xe };
  }
  function Fr(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function ma(x, A) {
    var z = x.onShellError;
    z(A), z = x.onFatalError, z(A), x.destination !== null ? (x.status = 2, y(x.destination, A)) : (x.status = 1, x.fatalError = A);
  }
  function Hi(x, A, z, q, ke) {
    for (hr = {}, Gr = A, Tr = 0, x = z(q, ke); Vn; )
      Vn = !1, Tr = 0, da += 1, en = null, x = z(q, ke);
    return Va(), x;
  }
  function Ka(x, A, z, q) {
    var ke = z.render(), xe = q.childContextTypes;
    if (xe != null) {
      var Me = A.legacyContext;
      if (typeof z.getChildContext != "function")
        q = Me;
      else {
        z = z.getChildContext();
        for (var Ye in z)
          if (!(Ye in xe))
            throw Error(t(108, je(q) || "Unknown", Ye));
        q = dn({}, Me, z);
      }
      A.legacyContext = q, jn(x, A, ke), A.legacyContext = Me;
    } else
      jn(x, A, ke);
  }
  function Wi(x, A) {
    if (x && x.defaultProps) {
      A = dn({}, A), x = x.defaultProps;
      for (var z in x)
        A[z] === void 0 && (A[z] = x[z]);
      return A;
    }
    return A;
  }
  function ya(x, A, z, q, ke) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        ke = yt(z, A.legacyContext);
        var xe = z.contextType;
        xe = new z(q, typeof xe == "object" && xe !== null ? xe._currentValue : ke), $n(xe, z, q, ke), Ka(x, A, xe, z);
      } else {
        xe = yt(z, A.legacyContext), ke = Hi(x, A, z, q, xe);
        var Me = Tr !== 0;
        if (typeof ke == "object" && ke !== null && typeof ke.render == "function" && ke.$$typeof === void 0)
          $n(ke, z, q, xe), Ka(x, A, ke, z);
        else if (Me) {
          q = A.treeContext, A.treeContext = pr(q, 1, 0);
          try {
            jn(x, A, ke);
          } finally {
            A.treeContext = q;
          }
        } else
          jn(x, A, ke);
      }
    else if (typeof z == "string") {
      switch (ke = A.blockedSegment, xe = qe(ke.chunks, z, q, x.responseState, ke.formatContext), ke.lastPushedText = !1, Me = ke.formatContext, ke.formatContext = J(Me, z, q), ga(x, A, xe), ke.formatContext = Me, z) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          ke.chunks.push(pt, u(z), gt);
      }
      ke.lastPushedText = !1;
    } else {
      switch (z) {
        case Se:
        case Y:
        case En:
        case un:
        case Zt:
          jn(x, A, q.children);
          return;
        case Xn:
          jn(x, A, q.children);
          return;
        case I:
          throw Error(t(343));
        case Zn:
          e: {
            z = A.blockedBoundary, ke = A.blockedSegment, xe = q.fallback, q = q.children, Me = /* @__PURE__ */ new Set();
            var Ye = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Me, errorDigest: null }, St = Or(x, ke.chunks.length, Ye, ke.formatContext, !1, !1);
            ke.children.push(St), ke.lastPushedText = !1;
            var Ot = Or(x, 0, null, ke.formatContext, !1, !1);
            Ot.parentFlushed = !0, A.blockedBoundary = Ye, A.blockedSegment = Ot;
            try {
              if (ga(
                x,
                A,
                q
              ), Ot.lastPushedText && Ot.textEmbedded && Ot.chunks.push(ue), Ot.status = 1, va(Ye, Ot), Ye.pendingTasks === 0)
                break e;
            } catch (Pt) {
              Ot.status = 4, Ye.forceClientRender = !0, Ye.errorDigest = Fr(x, Pt);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = ke;
            }
            A = Ua(x, xe, z, St, Me, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Yn:
            if (q = Hi(x, A, z.render, q, ke), Tr !== 0) {
              z = A.treeContext, A.treeContext = pr(z, 1, 0);
              try {
                jn(x, A, q);
              } finally {
                A.treeContext = z;
              }
            } else
              jn(x, A, q);
            return;
          case g:
            z = z.type, q = Wi(z, q), ya(x, A, z, q, ke);
            return;
          case kn:
            if (ke = q.children, z = z._context, q = q.value, xe = z._currentValue, z._currentValue = q, Me = ie, ie = q = { parent: Me, depth: Me === null ? 0 : Me.depth + 1, context: z, parentValue: xe, value: q }, A.context = q, jn(x, A, ke), x = ie, x === null)
              throw Error(t(403));
            q = x.parentValue, x.context._currentValue = q === ge ? x.context._defaultValue : q, x = ie = x.parent, A.context = x;
            return;
          case In:
            q = q.children, q = q(z._currentValue), jn(x, A, q);
            return;
          case C:
            ke = z._init, z = ke(z._payload), q = Wi(z, q), ya(x, A, z, q, void 0);
            return;
        }
      throw Error(t(
        130,
        z == null ? z : typeof z,
        ""
      ));
    }
  }
  function jn(x, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case sn:
          ya(x, A, z.type, z.props, z.ref);
          return;
        case nn:
          throw Error(t(257));
        case C:
          var q = z._init;
          z = q(z._payload), jn(x, A, z);
          return;
      }
      if (ce(z)) {
        Vi(x, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? q = null : (q = Ae && z[Ae] || z["@@iterator"], q = typeof q == "function" ? q : null), q && (q = q.call(z))) {
        if (z = q.next(), !z.done) {
          var ke = [];
          do
            ke.push(z.value), z = q.next();
          while (!z.done);
          Vi(x, A, ke);
        }
        return;
      }
      throw x = Object.prototype.toString.call(z), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : x));
    }
    typeof z == "string" ? (q = A.blockedSegment, q.lastPushedText = _e(A.blockedSegment.chunks, z, x.responseState, q.lastPushedText)) : typeof z == "number" && (q = A.blockedSegment, q.lastPushedText = _e(A.blockedSegment.chunks, "" + z, x.responseState, q.lastPushedText));
  }
  function Vi(x, A, z) {
    for (var q = z.length, ke = 0; ke < q; ke++) {
      var xe = A.treeContext;
      A.treeContext = pr(xe, q, ke);
      try {
        ga(x, A, z[ke]);
      } finally {
        A.treeContext = xe;
      }
    }
  }
  function ga(x, A, z) {
    var q = A.blockedSegment.formatContext, ke = A.legacyContext, xe = A.context;
    try {
      return jn(x, A, z);
    } catch (St) {
      if (Va(), typeof St == "object" && St !== null && typeof St.then == "function") {
        z = St;
        var Me = A.blockedSegment, Ye = Or(x, Me.chunks.length, null, Me.formatContext, Me.lastPushedText, !0);
        Me.children.push(Ye), Me.lastPushedText = !1, x = Ua(x, A.node, A.blockedBoundary, Ye, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(x, x), A.blockedSegment.formatContext = q, A.legacyContext = ke, A.context = xe, Tn(xe);
      } else
        throw A.blockedSegment.formatContext = q, A.legacyContext = ke, A.context = xe, Tn(xe), St;
    }
  }
  function rl(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Ui(this, A, x);
  }
  function ji(x, A, z) {
    var q = x.blockedBoundary;
    x.blockedSegment.status = 3, q === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.close())) : (q.pendingTasks--, q.forceClientRender || (q.forceClientRender = !0, x = z === void 0 ? Error(t(432)) : z, q.errorDigest = A.onError(x), q.parentFlushed && A.clientRenderedBoundaries.push(q)), q.fallbackAbortableTasks.forEach(function(ke) {
      return ji(ke, A, z);
    }), q.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (q = A.onAllReady, q()));
  }
  function va(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var z = A.children[0];
      z.id = A.id, z.parentFlushed = !0, z.status === 1 && va(x, z);
    } else
      x.completedSegments.push(A);
  }
  function Ui(x, A, z) {
    if (A === null) {
      if (z.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = z;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = Qr, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && va(A, z), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(rl, x), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (va(A, z), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Ki(x) {
    if (x.status !== 2) {
      var A = ie, z = Zr.current;
      Zr.current = pa;
      var q = ha;
      ha = x.responseState;
      try {
        var ke = x.pingedTasks, xe;
        for (xe = 0; xe < ke.length; xe++) {
          var Me = ke[xe], Ye = x, St = Me.blockedSegment;
          if (St.status === 0) {
            Tn(Me.context);
            try {
              jn(Ye, Me, Me.node), St.lastPushedText && St.textEmbedded && St.chunks.push(ue), Me.abortSet.delete(Me), St.status = 1, Ui(Ye, Me.blockedBoundary, St);
            } catch (er) {
              if (Va(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Ot = Me.ping;
                er.then(Ot, Ot);
              } else {
                Me.abortSet.delete(Me), St.status = 4;
                var Pt = Me.blockedBoundary, rn = er, Un = Fr(Ye, rn);
                if (Pt === null ? ma(Ye, rn) : (Pt.pendingTasks--, Pt.forceClientRender || (Pt.forceClientRender = !0, Pt.errorDigest = Un, Pt.parentFlushed && Ye.clientRenderedBoundaries.push(Pt))), Ye.allPendingTasks--, Ye.allPendingTasks === 0) {
                  var Jn = Ye.onAllReady;
                  Jn();
                }
              }
            } finally {
            }
          }
        }
        ke.splice(0, xe), x.destination !== null && Ya(x, x.destination);
      } catch (er) {
        Fr(x, er), ma(x, er);
      } finally {
        ha = q, Zr.current = z, z === pa && Tn(A);
      }
    }
  }
  function xa(x, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var q = z.id = x.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, x = x.responseState, a(A, ut), a(A, x.placeholderPrefix), x = u(q.toString(16)), a(A, x), l(A, Rt);
      case 1:
        z.status = 2;
        var ke = !0;
        q = z.chunks;
        var xe = 0;
        z = z.children;
        for (var Me = 0; Me < z.length; Me++) {
          for (ke = z[Me]; xe < ke.index; xe++)
            a(A, q[xe]);
          ke = ba(x, A, ke);
        }
        for (; xe < q.length - 1; xe++)
          a(A, q[xe]);
        return xe < q.length && (ke = l(A, q[xe])), ke;
      default:
        throw Error(t(390));
    }
  }
  function ba(x, A, z) {
    var q = z.boundary;
    if (q === null)
      return xa(x, A, z);
    if (q.parentFlushed = !0, q.forceClientRender)
      q = q.errorDigest, l(A, Nt), a(A, on), q && (a(A, yn), a(A, u(U(q))), a(A, Gt)), l(A, ze), xa(x, A, z);
    else if (0 < q.pendingTasks) {
      q.rootSegmentID = x.nextSegmentId++, 0 < q.completedSegments.length && x.partialBoundaries.push(q);
      var ke = x.responseState, xe = ke.nextSuspenseID++;
      ke = h(ke.boundaryPrefix + xe.toString(16)), q = q.id = ke, xt(A, x.responseState, q), xa(x, A, z);
    } else if (q.byteSize > x.progressiveChunkSize)
      q.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(q), xt(A, x.responseState, q.id), xa(x, A, z);
    else {
      if (l(A, tn), z = q.completedSegments, z.length !== 1)
        throw Error(t(391));
      ba(x, A, z[0]);
    }
    return l(A, hn);
  }
  function Yi(x, A, z) {
    return $(A, x.responseState, z.formatContext, z.id), ba(x, A, z), Oe(A, z.formatContext);
  }
  function Xi(x, A, z) {
    for (var q = z.completedSegments, ke = 0; ke < q.length; ke++)
      qi(x, A, z, q[ke]);
    if (q.length = 0, x = x.responseState, q = z.id, z = z.rootSegmentID, a(A, x.startInlineScript), x.sentCompleteBoundaryFunction ? a(A, _t) : (x.sentCompleteBoundaryFunction = !0, a(A, Et)), q === null)
      throw Error(t(395));
    return z = u(z.toString(16)), a(A, q), a(A, Ze), a(A, x.segmentPrefix), a(A, z), l(A, Kt);
  }
  function qi(x, A, z, q) {
    if (q.status === 2)
      return !0;
    var ke = q.id;
    if (ke === -1) {
      if ((q.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Yi(x, A, q);
    }
    return Yi(x, A, q), x = x.responseState, a(A, x.startInlineScript), x.sentCompleteSegmentFunction ? a(A, Ve) : (x.sentCompleteSegmentFunction = !0, a(A, Xe)), a(A, x.segmentPrefix), ke = u(ke.toString(16)), a(A, ke), a(A, it), a(A, x.placeholderPrefix), a(A, ke), l(A, nt);
  }
  function Ya(x, A) {
    n = new Uint8Array(512), i = 0;
    try {
      var z = x.completedRootSegment;
      if (z !== null && x.pendingRootTasks === 0) {
        ba(x, A, z), x.completedRootSegment = null;
        var q = x.responseState.bootstrapChunks;
        for (z = 0; z < q.length - 1; z++)
          a(A, q[z]);
        z < q.length && l(A, q[z]);
      }
      var ke = x.clientRenderedBoundaries, xe;
      for (xe = 0; xe < ke.length; xe++) {
        var Me = ke[xe];
        q = A;
        var Ye = x.responseState, St = Me.id, Ot = Me.errorDigest, Pt = Me.errorMessage, rn = Me.errorComponentStack;
        if (a(q, Ye.startInlineScript), Ye.sentClientRenderFunction ? a(q, Ft) : (Ye.sentClientRenderFunction = !0, a(
          q,
          zt
        )), St === null)
          throw Error(t(395));
        a(q, St), a(q, mt), (Ot || Pt || rn) && (a(q, wt), a(q, u(Wt(Ot || "")))), (Pt || rn) && (a(q, wt), a(q, u(Wt(Pt || "")))), rn && (a(q, wt), a(q, u(Wt(rn)))), l(q, Dt);
      }
      ke.splice(0, xe);
      var Un = x.completedBoundaries;
      for (xe = 0; xe < Un.length; xe++)
        Xi(x, A, Un[xe]);
      Un.splice(0, xe), f(A), n = new Uint8Array(512), i = 0;
      var Jn = x.partialBoundaries;
      for (xe = 0; xe < Jn.length; xe++) {
        var er = Jn[xe];
        e: {
          ke = x, Me = A;
          var Sa = er.completedSegments;
          for (Ye = 0; Ye < Sa.length; Ye++)
            if (!qi(
              ke,
              Me,
              er,
              Sa[Ye]
            )) {
              Ye++, Sa.splice(0, Ye);
              var Zi = !1;
              break e;
            }
          Sa.splice(0, Ye), Zi = !0;
        }
        if (!Zi) {
          x.destination = null, xe++, Jn.splice(0, xe);
          return;
        }
      }
      Jn.splice(0, xe);
      var Xa = x.completedBoundaries;
      for (xe = 0; xe < Xa.length; xe++)
        Xi(x, A, Xa[xe]);
      Xa.splice(0, xe);
    } finally {
      f(A), x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.close();
    }
  }
  function Gi(x, A) {
    try {
      var z = x.abortableTasks;
      z.forEach(function(q) {
        return ji(q, x, A);
      }), z.clear(), x.destination !== null && Ya(x, x.destination);
    } catch (q) {
      Fr(x, q), ma(x, q);
    }
  }
  return Tu.renderToReadableStream = function(x, A) {
    return new Promise(function(z, q) {
      var ke, xe, Me = new Promise(function(Pt, rn) {
        xe = Pt, ke = rn;
      }), Ye = ja(x, le(A ? A.identifierPrefix : void 0, A ? A.nonce : void 0, A ? A.bootstrapScriptContent : void 0, A ? A.bootstrapScripts : void 0, A ? A.bootstrapModules : void 0), j(A ? A.namespaceURI : void 0), A ? A.progressiveChunkSize : void 0, A ? A.onError : void 0, xe, function() {
        var Pt = new ReadableStream({ type: "bytes", pull: function(rn) {
          if (Ye.status === 1)
            Ye.status = 2, y(rn, Ye.fatalError);
          else if (Ye.status !== 2 && Ye.destination === null) {
            Ye.destination = rn;
            try {
              Ya(Ye, rn);
            } catch (Un) {
              Fr(Ye, Un), ma(Ye, Un);
            }
          }
        }, cancel: function() {
          Gi(Ye);
        } }, { highWaterMark: 0 });
        Pt.allReady = Me, z(Pt);
      }, function(Pt) {
        Me.catch(function() {
        }), q(Pt);
      }, ke);
      if (A && A.signal) {
        var St = A.signal, Ot = function() {
          Gi(Ye, St.reason), St.removeEventListener("abort", Ot);
        };
        St.addEventListener("abort", Ot);
      }
      Ki(Ye);
    });
  }, Tu.version = "18.2.0", Tu;
}
var Ci = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ph;
function HS() {
  return Ph || (Ph = 1, process.env.NODE_ENV !== "production" && function() {
    var e = de, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(o) {
      {
        for (var c = arguments.length, b = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          b[w - 1] = arguments[w];
        l("warn", o, b);
      }
    }
    function a(o) {
      {
        for (var c = arguments.length, b = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          b[w - 1] = arguments[w];
        l("error", o, b);
      }
    }
    function l(o, c, b) {
      {
        var w = n.ReactDebugCurrentFrame, M = w.getStackAddendum();
        M !== "" && (c += "%s", b = b.concat([M]));
        var Q = b.map(function(fe) {
          return String(fe);
        });
        Q.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, Q);
      }
    }
    function f(o) {
      o();
    }
    function d(o) {
    }
    function u(o, c) {
      h(o, c);
    }
    function h(o, c) {
      return o.push(c);
    }
    function y(o) {
    }
    function v(o) {
      o.push(null);
    }
    function S(o) {
      return o;
    }
    function R(o) {
      return o;
    }
    function k(o, c) {
      o.destroy(c);
    }
    function F(o) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, b = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return b;
      }
    }
    function T(o) {
      try {
        return m(o), !1;
      } catch {
        return !0;
      }
    }
    function m(o) {
      return "" + o;
    }
    function O(o, c) {
      if (T(o))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", c, F(o)), m(o);
    }
    function N(o, c) {
      if (T(o))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", c, F(o)), m(o);
    }
    function P(o) {
      if (T(o))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", F(o)), m(o);
    }
    var D = Object.prototype.hasOwnProperty, L = 0, U = 1, W = 2, Z = 3, ce = 4, te = 5, V = 6, K = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", X = K + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", B = new RegExp("^[" + K + "][" + X + "]*$"), oe = {}, re = {};
    function le(o) {
      return D.call(re, o) ? !0 : D.call(oe, o) ? !1 : B.test(o) ? (re[o] = !0, !0) : (oe[o] = !0, a("Invalid attribute name: `%s`", o), !1);
    }
    function G(o, c, b, w) {
      if (b !== null && b.type === L)
        return !1;
      switch (typeof c) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (w)
            return !1;
          if (b !== null)
            return !b.acceptsBooleans;
          var M = o.toLowerCase().slice(0, 5);
          return M !== "data-" && M !== "aria-";
        }
        default:
          return !1;
      }
    }
    function j(o) {
      return ue.hasOwnProperty(o) ? ue[o] : null;
    }
    function J(o, c, b, w, M, Q, fe) {
      this.acceptsBooleans = c === W || c === Z || c === ce, this.attributeName = w, this.attributeNamespace = M, this.mustUseProperty = b, this.propertyName = o, this.type = c, this.sanitizeURL = Q, this.removeEmptyString = fe;
    }
    var ue = {}, _e = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    _e.forEach(function(o) {
      ue[o] = new J(
        o,
        L,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
      var c = o[0], b = o[1];
      ue[c] = new J(
        c,
        U,
        !1,
        // mustUseProperty
        b,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
      ue[o] = new J(
        o,
        W,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
      ue[o] = new J(
        o,
        W,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(o) {
      ue[o] = new J(
        o,
        Z,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ue[o] = new J(
        o,
        Z,
        !0,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ue[o] = new J(
        o,
        ce,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      ue[o] = new J(
        o,
        V,
        !1,
        // mustUseProperty
        o,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(o) {
      ue[o] = new J(
        o,
        te,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var be = /[\-\:]([a-z])/g, ye = function(o) {
      return o[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var c = o.replace(be, ye);
      ue[c] = new J(
        c,
        U,
        !1,
        // mustUseProperty
        o,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var c = o.replace(be, ye);
      ue[c] = new J(
        c,
        U,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(o) {
      var c = o.replace(be, ye);
      ue[c] = new J(
        c,
        U,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(o) {
      ue[o] = new J(
        o,
        U,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Le = "xlinkHref";
    ue[Le] = new J(
      "xlinkHref",
      U,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(o) {
      ue[o] = new J(
        o,
        U,
        !1,
        // mustUseProperty
        o.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ae = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ie(o, c) {
      return o + c.charAt(0).toUpperCase() + c.substring(1);
    }
    var Ee = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ae).forEach(function(o) {
      Ee.forEach(function(c) {
        ae[Ie(c, o)] = ae[o];
      });
    });
    var he = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pe(o, c) {
      he[c.type] || c.onChange || c.onInput || c.readOnly || c.disabled || c.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), c.onChange || c.readOnly || c.disabled || c.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ee(o, c) {
      if (o.indexOf("-") === -1)
        return typeof c.is == "string";
      switch (o) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var De = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, we = {}, Ue = new RegExp("^(aria)-[" + X + "]*$"), Ge = new RegExp("^(aria)[A-Z][" + X + "]*$");
    function et(o, c) {
      {
        if (D.call(we, c) && we[c])
          return !0;
        if (Ge.test(c)) {
          var b = "aria-" + c.slice(4).toLowerCase(), w = De.hasOwnProperty(b) ? b : null;
          if (w == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", c), we[c] = !0, !0;
          if (c !== w)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", c, w), we[c] = !0, !0;
        }
        if (Ue.test(c)) {
          var M = c.toLowerCase(), Q = De.hasOwnProperty(M) ? M : null;
          if (Q == null)
            return we[c] = !0, !1;
          if (c !== Q)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", c, Q), we[c] = !0, !0;
        }
      }
      return !0;
    }
    function Je(o, c) {
      {
        var b = [];
        for (var w in c) {
          var M = et(o, w);
          M || b.push(w);
        }
        var Q = b.map(function(fe) {
          return "`" + fe + "`";
        }).join(", ");
        b.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, o) : b.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, o);
      }
    }
    function st(o, c) {
      ee(o, c) || Je(o, c);
    }
    var Ke = !1;
    function We(o, c) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        c != null && c.value === null && !Ke && (Ke = !0, o === "select" && c.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var Be = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, $e = function() {
    };
    {
      var ht = {}, qe = /^on./, pt = /^on[^A-Z]/, gt = new RegExp("^(aria)-[" + X + "]*$"), ut = new RegExp("^(aria)[A-Z][" + X + "]*$");
      $e = function(o, c, b, w) {
        if (D.call(ht, c) && ht[c])
          return !0;
        var M = c.toLowerCase();
        if (M === "onfocusin" || M === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[c] = !0, !0;
        if (w != null) {
          var Q = w.registrationNameDependencies, fe = w.possibleRegistrationNames;
          if (Q.hasOwnProperty(c))
            return !0;
          var Te = fe.hasOwnProperty(M) ? fe[M] : null;
          if (Te != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", c, Te), ht[c] = !0, !0;
          if (qe.test(c))
            return a("Unknown event handler property `%s`. It will be ignored.", c), ht[c] = !0, !0;
        } else if (qe.test(c))
          return pt.test(c) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", c), ht[c] = !0, !0;
        if (gt.test(c) || ut.test(c))
          return !0;
        if (M === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[c] = !0, !0;
        if (M === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[c] = !0, !0;
        if (M === "is" && b !== null && b !== void 0 && typeof b != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof b), ht[c] = !0, !0;
        if (typeof b == "number" && isNaN(b))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", c), ht[c] = !0, !0;
        var He = j(c), tt = He !== null && He.type === L;
        if (Be.hasOwnProperty(M)) {
          var lt = Be[M];
          if (lt !== c)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", c, lt), ht[c] = !0, !0;
        } else if (!tt && c !== M)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", c, M), ht[c] = !0, !0;
        return typeof b == "boolean" && G(c, b, He, !1) ? (b ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', b, c, c, b, c) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', b, c, c, b, c, c, c), ht[c] = !0, !0) : tt ? !0 : G(c, b, He, !1) ? (ht[c] = !0, !1) : ((b === "false" || b === "true") && He !== null && He.type === Z && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", b, c, b === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', c, b), ht[c] = !0), !0);
      };
    }
    var Rt = function(o, c, b) {
      {
        var w = [];
        for (var M in c) {
          var Q = $e(o, M, c[M], b);
          Q || w.push(M);
        }
        var fe = w.map(function(Te) {
          return "`" + Te + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o) : w.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o);
      }
    };
    function tn(o, c, b) {
      ee(o, c) || Rt(o, c, b);
    }
    var Xt = function() {
    };
    {
      var vt = /^(?:webkit|moz|o)[A-Z]/, Nt = /^-ms-/, hn = /-(.)/g, on = /;\s*$/, Gt = {}, yn = {}, ze = !1, xt = !1, Ht = function(o) {
        return o.replace(hn, function(c, b) {
          return b.toUpperCase();
        });
      }, It = function(o) {
        Gt.hasOwnProperty(o) && Gt[o] || (Gt[o] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ht(o.replace(Nt, "ms-"))
        ));
      }, At = function(o) {
        Gt.hasOwnProperty(o) && Gt[o] || (Gt[o] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, xn = function(o, c) {
        yn.hasOwnProperty(c) && yn[c] || (yn[c] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, c.replace(on, "")));
      }, Mt = function(o, c) {
        ze || (ze = !0, a("`NaN` is an invalid value for the `%s` css style property.", o));
      }, ln = function(o, c) {
        xt || (xt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      Xt = function(o, c) {
        o.indexOf("-") > -1 ? It(o) : vt.test(o) ? At(o) : on.test(c) && xn(o, c), typeof c == "number" && (isNaN(c) ? Mt(o, c) : isFinite(c) || ln(o, c));
      };
    }
    var cn = Xt, wn = /["'&<>]/;
    function Jt(o) {
      P(o);
      var c = "" + o, b = wn.exec(c);
      if (!b)
        return c;
      var w, M = "", Q, fe = 0;
      for (Q = b.index; Q < c.length; Q++) {
        switch (c.charCodeAt(Q)) {
          case 34:
            w = "&quot;";
            break;
          case 38:
            w = "&amp;";
            break;
          case 39:
            w = "&#x27;";
            break;
          case 60:
            w = "&lt;";
            break;
          case 62:
            w = "&gt;";
            break;
          default:
            continue;
        }
        fe !== Q && (M += c.substring(fe, Q)), fe = Q + 1, M += w;
      }
      return fe !== Q ? M + c.substring(fe, Q) : M;
    }
    function jt(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Jt(o);
    }
    var Pn = /([A-Z])/g, Mn = /^ms-/;
    function Hn(o) {
      return o.replace(Pn, "-$1").toLowerCase().replace(Mn, "-ms-");
    }
    var Ut = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zn = !1;
    function Wn(o) {
      !zn && Ut.test(o) && (zn = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var An = Array.isArray;
    function Sn(o) {
      return An(o);
    }
    var Ne = "<script>", ct = "<\/script>", dt = '<script src="', $ = '<script type="module" src="', Oe = '" async=""><\/script>';
    function Xe(o) {
      return P(o), ("" + o).replace(Ve, it);
    }
    var Ve = /(<\/|<)(s)(cript)/gi, it = function(o, c, b, w) {
      return "" + c + (b === "s" ? "\\u0073" : "\\u0053") + w;
    };
    function nt(o, c, b, w, M) {
      var Q = o === void 0 ? "" : o, fe = c === void 0 ? Ne : '<script nonce="' + jt(c) + '">', Te = [];
      if (b !== void 0 && Te.push(fe, Xe(b), ct), w !== void 0)
        for (var He = 0; He < w.length; He++)
          Te.push(dt, jt(w[He]), Oe);
      if (M !== void 0)
        for (var tt = 0; tt < M.length; tt++)
          Te.push($, jt(M[tt]), Oe);
      return {
        bootstrapChunks: Te,
        startInlineScript: fe,
        placeholderPrefix: Q + "P:",
        segmentPrefix: Q + "S:",
        boundaryPrefix: Q + "B:",
        idPrefix: Q,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Et = 0, _t = 1, Ze = 2, Kt = 3, zt = 4, Ft = 5, mt = 6, Dt = 7;
    function wt(o, c) {
      return {
        insertionMode: o,
        selectedValue: c
      };
    }
    function Yt(o, c, b) {
      switch (c) {
        case "select":
          return wt(_t, b.value != null ? b.value : b.defaultValue);
        case "svg":
          return wt(Ze, null);
        case "math":
          return wt(Kt, null);
        case "foreignObject":
          return wt(_t, null);
        case "table":
          return wt(zt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return wt(Ft, null);
        case "colgroup":
          return wt(Dt, null);
        case "tr":
          return wt(mt, null);
      }
      return o.insertionMode >= zt || o.insertionMode === Et ? wt(_t, null) : o;
    }
    var Wt = null;
    function dn(o) {
      var c = o.nextSuspenseID++;
      return o.boundaryPrefix + c.toString(16);
    }
    function sn(o, c, b) {
      var w = o.idPrefix, M = ":" + w + "R" + c;
      return b > 0 && (M += "H" + b.toString(32)), M + ":";
    }
    function nn(o) {
      return jt(o);
    }
    var Zt = "<!-- -->";
    function En(o, c, b, w) {
      return c === "" ? w : (w && o.push(Zt), o.push(nn(c)), !0);
    }
    function un(o, c, b, w) {
      b && w && o.push(Zt);
    }
    var kn = /* @__PURE__ */ new Map();
    function In(o) {
      var c = kn.get(o);
      if (c !== void 0)
        return c;
      var b = jt(Hn(o));
      return kn.set(o, b), b;
    }
    var Yn = ' style="', Zn = ":", Xn = ";";
    function g(o, c, b) {
      if (typeof b != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var w = !0;
      for (var M in b)
        if (D.call(b, M)) {
          var Q = b[M];
          if (!(Q == null || typeof Q == "boolean" || Q === "")) {
            var fe = void 0, Te = void 0, He = M.indexOf("--") === 0;
            He ? (fe = jt(M), N(Q, M), Te = jt(("" + Q).trim())) : (cn(M, Q), fe = In(M), typeof Q == "number" ? Q !== 0 && !D.call(ae, M) ? Te = Q + "px" : Te = "" + Q : (N(Q, M), Te = jt(("" + Q).trim()))), w ? (w = !1, o.push(Yn, fe, Zn, Te)) : o.push(Xn, fe, Zn, Te);
          }
        }
      w || o.push(Y);
    }
    var C = " ", I = '="', Y = '"', Se = '=""';
    function ge(o, c, b, w) {
      switch (b) {
        case "style": {
          g(o, c, w);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(b.length > 2 && (b[0] === "o" || b[0] === "O") && (b[1] === "n" || b[1] === "N"))
      ) {
        var M = j(b);
        if (M !== null) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!M.acceptsBooleans)
                return;
          }
          var Q = M.attributeName, fe = Q;
          switch (M.type) {
            case Z:
              w && o.push(C, fe, Se);
              return;
            case ce:
              w === !0 ? o.push(C, fe, Se) : w === !1 || o.push(C, fe, I, jt(w), Y);
              return;
            case te:
              isNaN(w) || o.push(C, fe, I, jt(w), Y);
              break;
            case V:
              !isNaN(w) && w >= 1 && o.push(C, fe, I, jt(w), Y);
              break;
            default:
              M.sanitizeURL && (O(w, Q), w = "" + w, Wn(w)), o.push(C, fe, I, jt(w), Y);
          }
        } else if (le(b)) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Te = b.toLowerCase().slice(0, 5);
              if (Te !== "data-" && Te !== "aria-")
                return;
            }
          }
          o.push(C, b, I, jt(w), Y);
        }
      }
    }
    var Ae = ">", je = "/>";
    function rt(o, c, b) {
      if (c != null) {
        if (b != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var w = c.__html;
        w != null && (P(w), o.push("" + w));
      }
    }
    var yt = !1, ie = !1, se = !1, me = !1, Re = !1, bt = !1, gn = !1;
    function Tn(o, c) {
      {
        var b = o[c];
        if (b != null) {
          var w = Sn(b);
          o.multiple && !w ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", c) : !o.multiple && w && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", c);
        }
      }
    }
    function fr(o, c, b) {
      Pe("select", c), Tn(c, "value"), Tn(c, "defaultValue"), c.value !== void 0 && c.defaultValue !== void 0 && !se && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), se = !0), o.push(Vn("select"));
      var w = null, M = null;
      for (var Q in c)
        if (D.call(c, Q)) {
          var fe = c[Q];
          if (fe == null)
            continue;
          switch (Q) {
            case "children":
              w = fe;
              break;
            case "dangerouslySetInnerHTML":
              M = fe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ge(o, b, Q, fe);
              break;
          }
        }
      return o.push(Ae), rt(o, M, w), w;
    }
    function $n(o) {
      var c = "";
      return e.Children.forEach(o, function(b) {
        b != null && (c += b, !Re && typeof b != "string" && typeof b != "number" && (Re = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), c;
    }
    var wr = ' selected=""';
    function pr(o, c, b, w) {
      var M = w.selectedValue;
      o.push(Vn("option"));
      var Q = null, fe = null, Te = null, He = null;
      for (var tt in c)
        if (D.call(c, tt)) {
          var lt = c[tt];
          if (lt == null)
            continue;
          switch (tt) {
            case "children":
              Q = lt;
              break;
            case "selected":
              Te = lt, gn || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gn = !0);
              break;
            case "dangerouslySetInnerHTML":
              He = lt;
              break;
            case "value":
              fe = lt;
            default:
              ge(o, b, tt, lt);
              break;
          }
        }
      if (M != null) {
        var Tt;
        if (fe !== null ? (O(fe, "value"), Tt = "" + fe) : (He !== null && (bt || (bt = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Tt = $n(Q)), Sn(M))
          for (var fn = 0; fn < M.length; fn++) {
            O(M[fn], "value");
            var Fn = "" + M[fn];
            if (Fn === Tt) {
              o.push(wr);
              break;
            }
          }
        else
          O(M, "select.value"), "" + M === Tt && o.push(wr);
      } else
        Te && o.push(wr);
      return o.push(Ae), rt(o, He, Q), Q;
    }
    function qr(o, c, b) {
      Pe("input", c), c.checked !== void 0 && c.defaultChecked !== void 0 && !ie && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), ie = !0), c.value !== void 0 && c.defaultValue !== void 0 && !yt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), yt = !0), o.push(Vn("input"));
      var w = null, M = null, Q = null, fe = null;
      for (var Te in c)
        if (D.call(c, Te)) {
          var He = c[Te];
          if (He == null)
            continue;
          switch (Te) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              fe = He;
              break;
            case "defaultValue":
              M = He;
              break;
            case "checked":
              Q = He;
              break;
            case "value":
              w = He;
              break;
            default:
              ge(o, b, Te, He);
              break;
          }
        }
      return Q !== null ? ge(o, b, "checked", Q) : fe !== null && ge(o, b, "checked", fe), w !== null ? ge(o, b, "value", w) : M !== null && ge(o, b, "value", M), o.push(je), null;
    }
    function Zo(o, c, b) {
      Pe("textarea", c), c.value !== void 0 && c.defaultValue !== void 0 && !me && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), me = !0), o.push(Vn("textarea"));
      var w = null, M = null, Q = null;
      for (var fe in c)
        if (D.call(c, fe)) {
          var Te = c[fe];
          if (Te == null)
            continue;
          switch (fe) {
            case "children":
              Q = Te;
              break;
            case "value":
              w = Te;
              break;
            case "defaultValue":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ge(o, b, fe, Te);
              break;
          }
        }
      if (w === null && M !== null && (w = M), o.push(Ae), Q != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), w != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Sn(Q)) {
          if (Q.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          P(Q[0]), w = "" + Q[0];
        }
        P(Q), w = "" + Q;
      }
      return typeof w == "string" && w[0] === `
` && o.push(Gr), w !== null && (O(w, "value"), o.push(nn("" + w))), null;
    }
    function Qo(o, c, b, w) {
      o.push(Vn(b));
      for (var M in c)
        if (D.call(c, M)) {
          var Q = c[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ge(o, w, M, Q);
              break;
          }
        }
      return o.push(je), null;
    }
    function Ba(o, c, b) {
      o.push(Vn("menuitem"));
      for (var w in c)
        if (D.call(c, w)) {
          var M = c[w];
          if (M == null)
            continue;
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ge(o, b, w, M);
              break;
          }
        }
      return o.push(Ae), null;
    }
    function Jo(o, c, b) {
      o.push(Vn("title"));
      var w = null;
      for (var M in c)
        if (D.call(c, M)) {
          var Q = c[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              w = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ge(o, b, M, Q);
              break;
          }
        }
      o.push(Ae);
      {
        var fe = Array.isArray(w) && w.length < 2 ? w[0] || null : w;
        Array.isArray(w) && w.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && fe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && typeof fe != "string" && typeof fe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return w;
    }
    function Ha(o, c, b, w) {
      o.push(Vn(b));
      var M = null, Q = null;
      for (var fe in c)
        if (D.call(c, fe)) {
          var Te = c[fe];
          if (Te == null)
            continue;
          switch (fe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              Q = Te;
              break;
            default:
              ge(o, w, fe, Te);
              break;
          }
        }
      return o.push(Ae), rt(o, Q, M), typeof M == "string" ? (o.push(nn(M)), null) : M;
    }
    function hr(o, c, b, w) {
      o.push(Vn(b));
      var M = null, Q = null;
      for (var fe in c)
        if (D.call(c, fe)) {
          var Te = c[fe];
          if (Te == null)
            continue;
          switch (fe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              Q = Te;
              break;
            case "style":
              g(o, w, Te);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              le(fe) && typeof Te != "function" && typeof Te != "symbol" && o.push(C, fe, I, jt(Te), Y);
              break;
          }
        }
      return o.push(Ae), rt(o, Q, M), M;
    }
    var Gr = `
`;
    function ca(o, c, b, w) {
      o.push(Vn(b));
      var M = null, Q = null;
      for (var fe in c)
        if (D.call(c, fe)) {
          var Te = c[fe];
          if (Te == null)
            continue;
          switch (fe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              Q = Te;
              break;
            default:
              ge(o, w, fe, Te);
              break;
          }
        }
      if (o.push(Ae), Q != null) {
        if (M != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Q != "object" || !("__html" in Q))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var He = Q.__html;
        He != null && (typeof He == "string" && He.length > 0 && He[0] === `
` ? o.push(Gr, He) : (P(He), o.push("" + He)));
      }
      return typeof M == "string" && M[0] === `
` && o.push(Gr), M;
    }
    var en = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, mr = /* @__PURE__ */ new Map();
    function Vn(o) {
      var c = mr.get(o);
      if (c === void 0) {
        if (!en.test(o))
          throw new Error("Invalid tag: " + o);
        c = "<" + o, mr.set(o, c);
      }
      return c;
    }
    var Tr = "<!DOCTYPE html>";
    function yr(o, c, b, w, M) {
      switch (st(c, b), We(c, b), tn(c, b, null), !b.suppressContentEditableWarning && b.contentEditable && b.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), M.insertionMode !== Ze && M.insertionMode !== Kt && c.indexOf("-") === -1 && typeof b.is != "string" && c.toLowerCase() !== c && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", c), c) {
        case "select":
          return fr(o, b, w);
        case "option":
          return pr(o, b, w, M);
        case "textarea":
          return Zo(o, b, w);
        case "input":
          return qr(o, b, w);
        case "menuitem":
          return Ba(o, b, w);
        case "title":
          return Jo(o, b, w);
        case "listing":
        case "pre":
          return ca(o, b, c, w);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Qo(o, b, c, w);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ha(o, b, c, w);
        case "html":
          return M.insertionMode === Et && o.push(Tr), Ha(o, b, c, w);
        default:
          return c.indexOf("-") === -1 && typeof b.is != "string" ? Ha(o, b, c, w) : hr(o, b, c, w);
      }
    }
    var da = "</", gr = ">";
    function Qn(o, c, b) {
      switch (c) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          o.push(da, c, gr);
      }
    }
    function Wa(o, c) {
      for (var b = c.bootstrapChunks, w = 0; w < b.length - 1; w++)
        u(o, b[w]);
      return w < b.length ? h(o, b[w]) : !0;
    }
    var Va = '<template id="', Ii = '"></template>';
    function $i(o, c, b) {
      u(o, Va), u(o, c.placeholderPrefix);
      var w = b.toString(16);
      return u(o, w), h(o, Ii);
    }
    var Bi = "<!--$-->", el = '<!--$?--><template id="', tl = '"></template>', fa = "<!--$!-->", pa = "<!--/$-->", ha = "<template", Zr = '"', nl = ' data-dgst="', Qr = ' data-msg="', ja = ' data-stck="', Ua = "></template>";
    function Or(o, c) {
      return h(o, Bi);
    }
    function Fr(o, c, b) {
      if (u(o, el), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, b), h(o, tl);
    }
    function ma(o, c, b, w, M) {
      var Q;
      return Q = h(o, fa), u(o, ha), b && (u(o, nl), u(o, jt(b)), u(o, Zr)), w && (u(o, Qr), u(o, jt(w)), u(o, Zr)), M && (u(o, ja), u(o, jt(M)), u(o, Zr)), Q = h(o, Ua), Q;
    }
    function Hi(o, c) {
      return h(o, pa);
    }
    function Ka(o, c) {
      return h(o, pa);
    }
    function Wi(o, c) {
      return h(o, pa);
    }
    var ya = '<div hidden id="', jn = '">', Vi = "</div>", ga = '<svg aria-hidden="true" style="display:none" id="', rl = '">', ji = "</svg>", va = '<math aria-hidden="true" style="display:none" id="', Ui = '">', Ki = "</math>", xa = '<table hidden id="', ba = '">', Yi = "</table>", Xi = '<table hidden><tbody id="', qi = '">', Ya = "</tbody></table>", Gi = '<table hidden><tr id="', x = '">', A = "</tr></table>", z = '<table hidden><colgroup id="', q = '">', ke = "</colgroup></table>";
    function xe(o, c, b, w) {
      switch (b.insertionMode) {
        case Et:
        case _t:
          return u(o, ya), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, jn);
        case Ze:
          return u(o, ga), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, rl);
        case Kt:
          return u(o, va), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, Ui);
        case zt:
          return u(o, xa), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, ba);
        case Ft:
          return u(o, Xi), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, qi);
        case mt:
          return u(o, Gi), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, x);
        case Dt:
          return u(o, z), u(o, c.segmentPrefix), u(o, w.toString(16)), h(o, q);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Me(o, c) {
      switch (c.insertionMode) {
        case Et:
        case _t:
          return h(o, Vi);
        case Ze:
          return h(o, ji);
        case Kt:
          return h(o, Ki);
        case zt:
          return h(o, Yi);
        case Ft:
          return h(o, Ya);
        case mt:
          return h(o, A);
        case Dt:
          return h(o, ke);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ye = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", St = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ot = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pt = Ye + ';$RS("', rn = '$RS("', Un = '","', Jn = '")<\/script>';
    function er(o, c, b) {
      u(o, c.startInlineScript), c.sentCompleteSegmentFunction ? u(o, rn) : (c.sentCompleteSegmentFunction = !0, u(o, Pt)), u(o, c.segmentPrefix);
      var w = b.toString(16);
      return u(o, w), u(o, Un), u(o, c.placeholderPrefix), u(o, w), h(o, Jn);
    }
    var Sa = St + ';$RC("', Zi = '$RC("', Xa = '","', Pc = '")<\/script>';
    function Rc(o, c, b, w) {
      if (u(o, c.startInlineScript), c.sentCompleteBoundaryFunction ? u(o, Zi) : (c.sentCompleteBoundaryFunction = !0, u(o, Sa)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var M = w.toString(16);
      return u(o, b), u(o, Xa), u(o, c.segmentPrefix), u(o, M), h(o, Pc);
    }
    var Nc = Ot + ';$RX("', _c = '$RX("', Dc = '"', Oc = ")<\/script>", al = ",";
    function Fc(o, c, b, w, M, Q) {
      if (u(o, c.startInlineScript), c.sentClientRenderFunction ? u(o, _c) : (c.sentClientRenderFunction = !0, u(o, Nc)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, b), u(o, Dc), (w || M || Q) && (u(o, al), u(o, il(w || ""))), (M || Q) && (u(o, al), u(o, il(M || ""))), Q && (u(o, al), u(o, il(Q))), h(o, Oc);
    }
    var Mc = /[<\u2028\u2029]/g;
    function il(o) {
      var c = JSON.stringify(o);
      return c.replace(Mc, function(b) {
        switch (b) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function zc(o, c) {
      var b = nt(c, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: b.bootstrapChunks,
        startInlineScript: b.startInlineScript,
        placeholderPrefix: b.placeholderPrefix,
        segmentPrefix: b.segmentPrefix,
        boundaryPrefix: b.boundaryPrefix,
        idPrefix: b.idPrefix,
        nextSuspenseID: b.nextSuspenseID,
        sentCompleteSegmentFunction: b.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: b.sentCompleteBoundaryFunction,
        sentClientRenderFunction: b.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: o
      };
    }
    function ol() {
      return {
        insertionMode: _t,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function ws(o, c, b, w) {
      return b.generateStaticMarkup ? (o.push(jt(c)), !1) : En(o, c, b, w);
    }
    function Ts(o, c, b, w) {
      if (!c.generateStaticMarkup)
        return un(o, c, b, w);
    }
    function ll(o, c) {
      return c.generateStaticMarkup ? !0 : Or(o);
    }
    function or(o, c, b, w, M) {
      return c.generateStaticMarkup ? !0 : ma(o, c, b, w, M);
    }
    function Ic(o, c) {
      return c.generateStaticMarkup ? !0 : Hi(o);
    }
    function Cs(o, c) {
      return c.generateStaticMarkup ? !0 : Wi(o);
    }
    var tr = Object.assign, As = Symbol.for("react.element"), sl = Symbol.for("react.portal"), Qi = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), qa = Symbol.for("react.provider"), Ga = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), ul = Symbol.for("react.suspense_list"), cl = Symbol.for("react.memo"), to = Symbol.for("react.lazy"), $c = Symbol.for("react.scope"), Ls = Symbol.for("react.debug_trace_mode"), Bc = Symbol.for("react.legacy_hidden"), Hc = Symbol.for("react.default_value"), Ps = Symbol.iterator, Rs = "@@iterator";
    function vn(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = Ps && o[Ps] || o[Rs];
      return typeof c == "function" ? c : null;
    }
    function Qa(o, c, b) {
      var w = o.displayName;
      if (w)
        return w;
      var M = c.displayName || c.name || "";
      return M !== "" ? b + "(" + M + ")" : b;
    }
    function dl(o) {
      return o.displayName || "Context";
    }
    function mn(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case Qi:
          return "Fragment";
        case sl:
          return "Portal";
        case eo:
          return "Profiler";
        case Ji:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case ul:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Ga:
            var c = o;
            return dl(c) + ".Consumer";
          case qa:
            var b = o;
            return dl(b._context) + ".Provider";
          case Za:
            return Qa(o, o.render, "ForwardRef");
          case cl:
            var w = o.displayName || null;
            return w !== null ? w : mn(o.type) || "Memo";
          case to: {
            var M = o, Q = M._payload, fe = M._init;
            try {
              return mn(fe(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ka = 0, fl, pl, hl, ml, yl, Ns, _s;
    function no() {
    }
    no.__reactDisabledLog = !0;
    function gl() {
      {
        if (ka === 0) {
          fl = console.log, pl = console.info, hl = console.warn, ml = console.error, yl = console.group, Ns = console.groupCollapsed, _s = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: no,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ka++;
      }
    }
    function Ja() {
      {
        if (ka--, ka === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tr({}, o, {
              value: fl
            }),
            info: tr({}, o, {
              value: pl
            }),
            warn: tr({}, o, {
              value: hl
            }),
            error: tr({}, o, {
              value: ml
            }),
            group: tr({}, o, {
              value: yl
            }),
            groupCollapsed: tr({}, o, {
              value: Ns
            }),
            groupEnd: tr({}, o, {
              value: _s
            })
          });
        }
        ka < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ei = n.ReactCurrentDispatcher, wa;
    function ti(o, c, b) {
      {
        if (wa === void 0)
          try {
            throw Error();
          } catch (M) {
            var w = M.stack.trim().match(/\n( *(at )?)/);
            wa = w && w[1] || "";
          }
        return `
` + wa + o;
      }
    }
    var ni = !1, ro;
    {
      var Ds = typeof WeakMap == "function" ? WeakMap : Map;
      ro = new Ds();
    }
    function vl(o, c) {
      if (!o || ni)
        return "";
      {
        var b = ro.get(o);
        if (b !== void 0)
          return b;
      }
      var w;
      ni = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ei.current, ei.current = null, gl();
      try {
        if (c) {
          var fe = function() {
            throw Error();
          };
          if (Object.defineProperty(fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(fe, []);
            } catch (cr) {
              w = cr;
            }
            Reflect.construct(o, [], fe);
          } else {
            try {
              fe.call();
            } catch (cr) {
              w = cr;
            }
            o.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (cr) {
            w = cr;
          }
          o();
        }
      } catch (cr) {
        if (cr && w && typeof cr.stack == "string") {
          for (var Te = cr.stack.split(`
`), He = w.stack.split(`
`), tt = Te.length - 1, lt = He.length - 1; tt >= 1 && lt >= 0 && Te[tt] !== He[lt]; )
            lt--;
          for (; tt >= 1 && lt >= 0; tt--, lt--)
            if (Te[tt] !== He[lt]) {
              if (tt !== 1 || lt !== 1)
                do
                  if (tt--, lt--, lt < 0 || Te[tt] !== He[lt]) {
                    var Tt = `
` + Te[tt].replace(" at new ", " at ");
                    return o.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", o.displayName)), typeof o == "function" && ro.set(o, Tt), Tt;
                  }
                while (tt >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        ni = !1, ei.current = Q, Ja(), Error.prepareStackTrace = M;
      }
      var fn = o ? o.displayName || o.name : "", Fn = fn ? ti(fn) : "";
      return typeof o == "function" && ro.set(o, Fn), Fn;
    }
    function xl(o, c, b) {
      return vl(o, !0);
    }
    function bl(o, c, b) {
      return vl(o, !1);
    }
    function Os(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ta(o, c, b) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return vl(o, Os(o));
      if (typeof o == "string")
        return ti(o);
      switch (o) {
        case Ea:
          return ti("Suspense");
        case ul:
          return ti("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Za:
            return bl(o.render);
          case cl:
            return Ta(o.type, c, b);
          case to: {
            var w = o, M = w._payload, Q = w._init;
            try {
              return Ta(Q(M), c, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Sl = {}, ao = n.ReactDebugCurrentFrame;
    function Jr(o) {
      if (o) {
        var c = o._owner, b = Ta(o.type, o._source, c ? c.type : null);
        ao.setExtraStackFrame(b);
      } else
        ao.setExtraStackFrame(null);
    }
    function El(o, c, b, w, M) {
      {
        var Q = Function.call.bind(D);
        for (var fe in o)
          if (Q(o, fe)) {
            var Te = void 0;
            try {
              if (typeof o[fe] != "function") {
                var He = Error((w || "React class") + ": " + b + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Te = o[fe](c, fe, w, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Te = tt;
            }
            Te && !(Te instanceof Error) && (Jr(M), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", b, fe, typeof Te), Jr(null)), Te instanceof Error && !(Te.message in Sl) && (Sl[Te.message] = !0, Jr(M), a("Failed %s type: %s", b, Te.message), Jr(null));
          }
      }
    }
    var kl;
    kl = {};
    var Mr = {};
    Object.freeze(Mr);
    function Fs(o, c) {
      {
        var b = o.contextTypes;
        if (!b)
          return Mr;
        var w = {};
        for (var M in b)
          w[M] = c[M];
        {
          var Q = mn(o) || "Unknown";
          El(b, w, "context", Q);
        }
        return w;
      }
    }
    function ea(o, c, b, w) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var M = mn(c) || "Unknown";
            kl[M] || (kl[M] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", M, M));
          }
          return b;
        }
        var Q = o.getChildContext();
        for (var fe in Q)
          if (!(fe in w))
            throw new Error((mn(c) || "Unknown") + '.getChildContext(): key "' + fe + '" is not defined in childContextTypes.');
        {
          var Te = mn(c) || "Unknown";
          El(w, Q, "child context", Te);
        }
        return tr({}, b, Q);
      }
    }
    var ta;
    ta = {};
    var wl = null, vr = null;
    function io(o) {
      o.context._currentValue2 = o.parentValue;
    }
    function oo(o) {
      o.context._currentValue2 = o.value;
    }
    function ri(o, c) {
      if (o !== c) {
        io(o);
        var b = o.parent, w = c.parent;
        if (b === null) {
          if (w !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (w === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ri(b, w);
        }
        oo(c);
      }
    }
    function Tl(o) {
      io(o);
      var c = o.parent;
      c !== null && Tl(c);
    }
    function ai(o) {
      var c = o.parent;
      c !== null && ai(c), oo(o);
    }
    function Ms(o, c) {
      io(o);
      var b = o.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      b.depth === c.depth ? ri(b, c) : Ms(b, c);
    }
    function zs(o, c) {
      var b = c.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === b.depth ? ri(o, b) : zs(o, b), oo(c);
    }
    function lo(o) {
      var c = vr, b = o;
      c !== b && (c === null ? ai(b) : b === null ? Tl(c) : c.depth === b.depth ? ri(c, b) : c.depth > b.depth ? Ms(c, b) : zs(c, b), vr = b);
    }
    function ii(o, c) {
      var b;
      b = o._currentValue2, o._currentValue2 = c, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      var w = vr, M = {
        parent: w,
        depth: w === null ? 0 : w.depth + 1,
        context: o,
        parentValue: b,
        value: c
      };
      return vr = M, M;
    }
    function Cl(o) {
      var c = vr;
      if (c === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      c.context !== o && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var b = c.parentValue;
        b === Hc ? c.context._currentValue2 = c.context._defaultValue : c.context._currentValue2 = b, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      }
      return vr = c.parent;
    }
    function Wc() {
      return vr;
    }
    function Ca(o) {
      var c = o._currentValue2;
      return c;
    }
    function so(o) {
      return o._reactInternals;
    }
    function Al(o, c) {
      o._reactInternals = c;
    }
    var uo = {}, co = {}, oi, fo, Aa, li, po, La, ho, mo, yo;
    {
      oi = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set();
      var Is = /* @__PURE__ */ new Set();
      La = function(o, c) {
        if (!(o === null || typeof o == "function")) {
          var b = c + "_" + o;
          Is.has(b) || (Is.add(b), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c, o));
        }
      }, po = function(o, c) {
        if (c === void 0) {
          var b = mn(o) || "Component";
          li.has(b) || (li.add(b), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", b));
        }
      };
    }
    function $s(o, c) {
      {
        var b = o.constructor, w = b && mn(b) || "ReactClass", M = w + "." + c;
        if (uo[M])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, c, c, w), uo[M] = !0;
      }
    }
    var Bs = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, c, b) {
        var w = so(o);
        w.queue === null ? $s(o, "setState") : (w.queue.push(c), b != null && La(b, "setState"));
      },
      enqueueReplaceState: function(o, c, b) {
        var w = so(o);
        w.replace = !0, w.queue = [c], b != null && La(b, "setState");
      },
      enqueueForceUpdate: function(o, c) {
        var b = so(o);
        b.queue === null ? $s(o, "forceUpdate") : c != null && La(c, "setState");
      }
    };
    function Vc(o, c, b, w, M) {
      var Q = b(M, w);
      po(c, Q);
      var fe = Q == null ? w : tr({}, w, Q);
      return fe;
    }
    function jc(o, c, b) {
      var w = Mr, M = o.contextType;
      if ("contextType" in o) {
        var Q = (
          // Allow null for conditional declaration
          M === null || M !== void 0 && M.$$typeof === Ga && M._context === void 0
        );
        if (!Q && !yo.has(o)) {
          yo.add(o);
          var fe = "";
          M === void 0 ? fe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof M != "object" ? fe = " However, it is set to a " + typeof M + "." : M.$$typeof === qa ? fe = " Did you accidentally pass the Context.Provider instead?" : M._context !== void 0 ? fe = " Did you accidentally pass the Context.Consumer instead?" : fe = " However, it is set to an object with keys {" + Object.keys(M).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(o) || "Component", fe);
        }
      }
      typeof M == "object" && M !== null ? w = Ca(M) : w = b;
      var Te = new o(c, w);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (Te.state === null || Te.state === void 0)) {
          var He = mn(o) || "Component";
          oi.has(He) || (oi.add(He), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", He, Te.state === null ? "null" : "undefined", He));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof Te.getSnapshotBeforeUpdate == "function") {
          var tt = null, lt = null, Tt = null;
          if (typeof Te.componentWillMount == "function" && Te.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Te.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Te.componentWillReceiveProps == "function" && Te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? lt = "componentWillReceiveProps" : typeof Te.UNSAFE_componentWillReceiveProps == "function" && (lt = "UNSAFE_componentWillReceiveProps"), typeof Te.componentWillUpdate == "function" && Te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Tt = "componentWillUpdate" : typeof Te.UNSAFE_componentWillUpdate == "function" && (Tt = "UNSAFE_componentWillUpdate"), tt !== null || lt !== null || Tt !== null) {
            var fn = mn(o) || "Component", Fn = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Aa.has(fn) || (Aa.add(fn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fn, Fn, tt !== null ? `
  ` + tt : "", lt !== null ? `
  ` + lt : "", Tt !== null ? `
  ` + Tt : ""));
          }
        }
      }
      return Te;
    }
    function Hs(o, c, b) {
      {
        var w = mn(c) || "Component", M = o.render;
        M || (c.prototype && typeof c.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", w) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", w)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", w), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", w), o.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", w), o.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", w), o.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", w), c.contextType && c.contextTypes && !mo.has(c) && (mo.add(c), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", w)), typeof o.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", w), c.prototype && c.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(c) || "A pure component"), typeof o.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", w), typeof o.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", w), typeof o.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", w), typeof o.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", w);
        var Q = o.props !== b;
        o.props !== void 0 && Q && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", w, w), o.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", w, w), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !fo.has(c) && (fo.add(c), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(c))), typeof o.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof o.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof c.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", w);
        var fe = o.state;
        fe && (typeof fe != "object" || Sn(fe)) && a("%s.state: must be set to an object or null", w), typeof o.getChildContext == "function" && typeof c.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", w);
      }
    }
    function Uc(o, c) {
      var b = c.state;
      if (typeof c.componentWillMount == "function") {
        if (c.componentWillMount.__suppressDeprecationWarning !== !0) {
          var w = mn(o) || "Unknown";
          co[w] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            w
          ), co[w] = !0);
        }
        c.componentWillMount();
      }
      typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), b !== c.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(o) || "Component"), Bs.enqueueReplaceState(c, c.state, null));
    }
    function Kc(o, c, b, w) {
      if (o.queue !== null && o.queue.length > 0) {
        var M = o.queue, Q = o.replace;
        if (o.queue = null, o.replace = !1, Q && M.length === 1)
          c.state = M[0];
        else {
          for (var fe = Q ? M[0] : c.state, Te = !0, He = Q ? 1 : 0; He < M.length; He++) {
            var tt = M[He], lt = typeof tt == "function" ? tt.call(c, fe, b, w) : tt;
            lt != null && (Te ? (Te = !1, fe = tr({}, fe, lt)) : tr(fe, lt));
          }
          c.state = fe;
        }
      } else
        o.queue = null;
    }
    function go(o, c, b, w) {
      Hs(o, c, b);
      var M = o.state !== void 0 ? o.state : null;
      o.updater = Bs, o.props = b, o.state = M;
      var Q = {
        queue: [],
        replace: !1
      };
      Al(o, Q);
      var fe = c.contextType;
      if (typeof fe == "object" && fe !== null ? o.context = Ca(fe) : o.context = w, o.state === b) {
        var Te = mn(c) || "Component";
        ho.has(Te) || (ho.add(Te), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Te));
      }
      var He = c.getDerivedStateFromProps;
      typeof He == "function" && (o.state = Vc(o, c, He, M, b)), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Uc(c, o), Kc(Q, o, b, w));
    }
    var vo = {
      id: 1,
      overflow: ""
    };
    function Yc(o) {
      var c = o.overflow, b = o.id, w = b & ~Xc(b);
      return w.toString(32) + c;
    }
    function Ll(o, c, b) {
      var w = o.id, M = o.overflow, Q = xo(w) - 1, fe = w & ~(1 << Q), Te = b + 1, He = xo(c) + Q;
      if (He > 30) {
        var tt = Q - Q % 5, lt = (1 << tt) - 1, Tt = (fe & lt).toString(32), fn = fe >> tt, Fn = Q - tt, cr = xo(c) + Fn, uu = Te << Fn, cu = uu | fn, du = Tt + M;
        return {
          id: 1 << cr | cu,
          overflow: du
        };
      } else {
        var Fo = Te << Q, Ay = Fo | fe, Ly = M;
        return {
          id: 1 << He | Ay,
          overflow: Ly
        };
      }
    }
    function xo(o) {
      return 32 - qc(o);
    }
    function Xc(o) {
      return 1 << xo(o) - 1;
    }
    var qc = Math.clz32 ? Math.clz32 : Cr, Gc = Math.log, Zc = Math.LN2;
    function Cr(o) {
      var c = o >>> 0;
      return c === 0 ? 32 : 31 - (Gc(c) / Zc | 0) | 0;
    }
    function Pl(o, c) {
      return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
    }
    var bo = typeof Object.is == "function" ? Object.is : Pl, $t = null, na = null, ra = null, Qt = null, lr = !1, aa = !1, So = 0, On = null, Ar = 0, ia = 25, xr = !1, oa;
    function Lr() {
      if ($t === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return xr && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), $t;
    }
    function Qc(o, c) {
      if (c === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oa), !1;
      o.length !== c.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oa, "[" + o.join(", ") + "]", "[" + c.join(", ") + "]");
      for (var b = 0; b < c.length && b < o.length; b++)
        if (!bo(o[b], c[b]))
          return !1;
      return !0;
    }
    function Ws() {
      if (Ar > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Eo() {
      return Qt === null ? ra === null ? (lr = !1, ra = Qt = Ws()) : (lr = !0, Qt = ra) : Qt.next === null ? (lr = !1, Qt = Qt.next = Ws()) : (lr = !0, Qt = Qt.next), Qt;
    }
    function Rl(o, c) {
      $t = c, na = o, xr = !1, So = 0;
    }
    function Jc(o, c, b, w) {
      for (; aa; )
        aa = !1, So = 0, Ar += 1, Qt = null, b = o(c, w);
      return si(), b;
    }
    function Vs() {
      var o = So !== 0;
      return o;
    }
    function si() {
      xr = !1, $t = null, na = null, aa = !1, ra = null, Ar = 0, On = null, Qt = null;
    }
    function ed(o) {
      return xr && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ca(o);
    }
    function js(o) {
      return oa = "useContext", Lr(), Ca(o);
    }
    function ko(o, c) {
      return typeof c == "function" ? c(o) : c;
    }
    function td(o) {
      return oa = "useState", Us(
        ko,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Us(o, c, b) {
      if (o !== ko && (oa = "useReducer"), $t = Lr(), Qt = Eo(), lr) {
        var w = Qt.queue, M = w.dispatch;
        if (On !== null) {
          var Q = On.get(w);
          if (Q !== void 0) {
            On.delete(w);
            var fe = Qt.memoizedState, Te = Q;
            do {
              var He = Te.action;
              xr = !0, fe = o(fe, He), xr = !1, Te = Te.next;
            } while (Te !== null);
            return Qt.memoizedState = fe, [fe, M];
          }
        }
        return [Qt.memoizedState, M];
      } else {
        xr = !0;
        var tt;
        o === ko ? tt = typeof c == "function" ? c() : c : tt = b !== void 0 ? b(c) : c, xr = !1, Qt.memoizedState = tt;
        var lt = Qt.queue = {
          last: null,
          dispatch: null
        }, Tt = lt.dispatch = ad.bind(null, $t, lt);
        return [Qt.memoizedState, Tt];
      }
    }
    function Ks(o, c) {
      $t = Lr(), Qt = Eo();
      var b = c === void 0 ? null : c;
      if (Qt !== null) {
        var w = Qt.memoizedState;
        if (w !== null && b !== null) {
          var M = w[1];
          if (Qc(b, M))
            return w[0];
        }
      }
      xr = !0;
      var Q = o();
      return xr = !1, Qt.memoizedState = [Q, b], Q;
    }
    function nd(o) {
      $t = Lr(), Qt = Eo();
      var c = Qt.memoizedState;
      if (c === null) {
        var b = {
          current: o
        };
        return Object.seal(b), Qt.memoizedState = b, b;
      } else
        return c;
    }
    function rd(o, c) {
      oa = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ad(o, c, b) {
      if (Ar >= ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === $t) {
        aa = !0;
        var w = {
          action: b,
          next: null
        };
        On === null && (On = /* @__PURE__ */ new Map());
        var M = On.get(c);
        if (M === void 0)
          On.set(c, w);
        else {
          for (var Q = M; Q.next !== null; )
            Q = Q.next;
          Q.next = w;
        }
      }
    }
    function id(o, c) {
      return Ks(function() {
        return o;
      }, c);
    }
    function od(o, c, b) {
      return Lr(), c(o._source);
    }
    function ld(o, c, b) {
      if (b === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return b();
    }
    function sd(o) {
      return Lr(), o;
    }
    function wo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ys() {
      return Lr(), [!1, wo];
    }
    function Nl() {
      var o = na, c = Yc(o.treeContext), b = ci;
      if (b === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var w = So++;
      return sn(b, c, w);
    }
    function ui() {
    }
    var Xs = {
      readContext: ed,
      useContext: js,
      useMemo: Ks,
      useReducer: Us,
      useRef: nd,
      useState: td,
      useInsertionEffect: ui,
      useLayoutEffect: rd,
      useCallback: id,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ui,
      // Effects are not run in the server environment.
      useEffect: ui,
      // Debugging effect
      useDebugValue: ui,
      useDeferredValue: sd,
      useTransition: Ys,
      useId: Nl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: od,
      useSyncExternalStore: ld
    }, ci = null;
    function To(o) {
      ci = o;
    }
    function _l(o) {
      try {
        var c = "", b = o;
        do {
          switch (b.tag) {
            case 0:
              c += ti(b.type, null, null);
              break;
            case 1:
              c += bl(b.type, null, null);
              break;
            case 2:
              c += xl(b.type, null, null);
              break;
          }
          b = b.parent;
        } while (b);
        return c;
      } catch (w) {
        return `
Error generating stack: ` + w.message + `
` + w.stack;
      }
    }
    var zr = n.ReactCurrentDispatcher, Co = n.ReactDebugCurrentFrame, Ao = 0, la = 1, qs = 2, Dl = 3, sa = 4, ud = 0, Gs = 1, br = 2, cd = 12800;
    function dd(o) {
      return console.error(o), null;
    }
    function di() {
    }
    function Ol(o, c, b, w, M, Q, fe, Te, He) {
      var tt = [], lt = /* @__PURE__ */ new Set(), Tt = {
        destination: null,
        responseState: c,
        progressiveChunkSize: w === void 0 ? cd : w,
        status: ud,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: lt,
        pingedTasks: tt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: M === void 0 ? dd : M,
        onAllReady: Q === void 0 ? di : Q,
        onShellReady: fe === void 0 ? di : fe,
        onShellError: Te === void 0 ? di : Te,
        onFatalError: He === void 0 ? di : He
      }, fn = Ir(
        Tt,
        0,
        null,
        b,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      fn.parentFlushed = !0;
      var Fn = fi(Tt, o, null, fn, lt, Mr, wl, vo);
      return tt.push(Fn), Tt;
    }
    function Lo(o, c) {
      var b = o.pingedTasks;
      b.push(c), b.length === 1 && f(function() {
        return lu(o);
      });
    }
    function Pr(o, c) {
      return {
        id: Wt,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: c,
        errorDigest: null
      };
    }
    function fi(o, c, b, w, M, Q, fe, Te) {
      o.allPendingTasks++, b === null ? o.pendingRootTasks++ : b.pendingTasks++;
      var He = {
        node: c,
        ping: function() {
          return Lo(o, He);
        },
        blockedBoundary: b,
        blockedSegment: w,
        abortSet: M,
        legacyContext: Q,
        context: fe,
        treeContext: Te
      };
      return He.componentStack = null, M.add(He), He;
    }
    function Ir(o, c, b, w, M, Q) {
      return {
        status: Ao,
        id: -1,
        // lazily assigned later
        index: c,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: w,
        boundary: b,
        lastPushedText: M,
        textEmbedded: Q
      };
    }
    var Sr = null;
    function Fl() {
      return Sr === null || Sr.componentStack === null ? "" : _l(Sr.componentStack);
    }
    function sr(o, c) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: c
      };
    }
    function Pa(o, c) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: c
      };
    }
    function Ml(o, c) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: c
      };
    }
    function ur(o) {
      o.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var $r = null;
    function zl(o, c) {
      {
        var b;
        typeof c == "string" ? b = c : c && typeof c.message == "string" ? b = c.message : b = String(c);
        var w = $r || Fl();
        $r = null, o.errorMessage = b, o.errorComponentStack = w;
      }
    }
    function pi(o, c) {
      var b = o.onError(c);
      if (b != null && typeof b != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
      return b;
    }
    function Po(o, c) {
      var b = o.onShellError;
      b(c);
      var w = o.onFatalError;
      w(c), o.destination !== null ? (o.status = br, k(o.destination, c)) : (o.status = Gs, o.fatalError = c);
    }
    function Zs(o, c, b) {
      sr(c, "Suspense");
      var w = c.blockedBoundary, M = c.blockedSegment, Q = b.fallback, fe = b.children, Te = /* @__PURE__ */ new Set(), He = Pr(o, Te), tt = M.chunks.length, lt = Ir(
        o,
        tt,
        He,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.children.push(lt), M.lastPushedText = !1;
      var Tt = Ir(
        o,
        0,
        null,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Tt.parentFlushed = !0, c.blockedBoundary = He, c.blockedSegment = Tt;
      try {
        if (Ro(o, c, fe), Ts(Tt.chunks, o.responseState, Tt.lastPushedText, Tt.textEmbedded), Tt.status = la, yi(He, Tt), He.pendingTasks === 0) {
          ur(c);
          return;
        }
      } catch (Fn) {
        Tt.status = sa, He.forceClientRender = !0, He.errorDigest = pi(o, Fn), zl(He, Fn);
      } finally {
        c.blockedBoundary = w, c.blockedSegment = M;
      }
      var fn = fi(o, Q, w, lt, Te, c.legacyContext, c.context, c.treeContext);
      fn.componentStack = c.componentStack, o.pingedTasks.push(fn), ur(c);
    }
    function Qs(o, c, b, w) {
      sr(c, b);
      var M = c.blockedSegment, Q = yr(M.chunks, b, w, o.responseState, M.formatContext);
      M.lastPushedText = !1;
      var fe = M.formatContext;
      M.formatContext = Yt(fe, b, w), Ro(o, c, Q), M.formatContext = fe, Qn(M.chunks, b), M.lastPushedText = !1, ur(c);
    }
    function fd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Il(o, c, b, w, M) {
      var Q = {};
      Rl(c, Q);
      var fe = b(w, M);
      return Jc(b, w, fe, M);
    }
    function hi(o, c, b, w, M) {
      var Q = b.render();
      b.props !== M && (Wl || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(w) || "a component"), Wl = !0);
      {
        var fe = w.childContextTypes;
        if (fe != null) {
          var Te = c.legacyContext, He = ea(b, w, Te, fe);
          c.legacyContext = He, rr(o, c, Q), c.legacyContext = Te;
          return;
        }
      }
      rr(o, c, Q);
    }
    function Js(o, c, b, w) {
      Ml(c, b);
      var M = Fs(b, c.legacyContext), Q = jc(b, w, M);
      go(Q, b, w, M), hi(o, c, Q, b, w), ur(c);
    }
    var $l = {}, mi = {}, Bl = {}, Hl = {}, Wl = !1, eu = !1, tu = !1, Vl = !1;
    function pd(o, c, b, w) {
      var M;
      if (M = Fs(b, c.legacyContext), Pa(c, b), b.prototype && typeof b.prototype.render == "function") {
        var Q = mn(b) || "Unknown";
        $l[Q] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Q, Q), $l[Q] = !0);
      }
      var fe = Il(o, c, b, w, M), Te = Vs();
      if (typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0) {
        var He = mn(b) || "Unknown";
        mi[He] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", He, He, He), mi[He] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0
      ) {
        {
          var tt = mn(b) || "Unknown";
          mi[tt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), mi[tt] = !0);
        }
        go(fe, b, w, M), hi(o, c, fe, b, w);
      } else if (hd(b), Te) {
        var lt = c.treeContext, Tt = 1, fn = 0;
        c.treeContext = Ll(lt, Tt, fn);
        try {
          rr(o, c, fe);
        } finally {
          c.treeContext = lt;
        }
      } else
        rr(o, c, fe);
      ur(c);
    }
    function hd(o) {
      {
        if (o && o.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var c = mn(o) || "Unknown";
          Hl[c] || (a("%s: Function components do not support getDerivedStateFromProps.", c), Hl[c] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var b = mn(o) || "Unknown";
          Bl[b] || (a("%s: Function components do not support contextType.", b), Bl[b] = !0);
        }
      }
    }
    function nu(o, c) {
      if (o && o.defaultProps) {
        var b = tr({}, c), w = o.defaultProps;
        for (var M in w)
          b[M] === void 0 && (b[M] = w[M]);
        return b;
      }
      return c;
    }
    function md(o, c, b, w, M) {
      Pa(c, b.render);
      var Q = Il(o, c, b.render, w, M), fe = Vs();
      if (fe) {
        var Te = c.treeContext, He = 1, tt = 0;
        c.treeContext = Ll(Te, He, tt);
        try {
          rr(o, c, Q);
        } finally {
          c.treeContext = Te;
        }
      } else
        rr(o, c, Q);
      ur(c);
    }
    function yd(o, c, b, w, M) {
      var Q = b.type, fe = nu(Q, w);
      Ul(o, c, Q, fe, M);
    }
    function jl(o, c, b, w) {
      b._context === void 0 ? b !== b.Consumer && (Vl || (Vl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : b = b._context;
      var M = w.children;
      typeof M != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Q = Ca(b), fe = M(Q);
      rr(o, c, fe);
    }
    function gd(o, c, b, w) {
      var M = b._context, Q = w.value, fe = w.children, Te;
      Te = c.context, c.context = ii(M, Q), rr(o, c, fe), c.context = Cl(M), Te !== c.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(o, c, b, w, M) {
      sr(c, "Lazy");
      var Q = b._payload, fe = b._init, Te = fe(Q), He = nu(Te, w);
      Ul(o, c, Te, He, M), ur(c);
    }
    function Ul(o, c, b, w, M) {
      if (typeof b == "function")
        if (fd(b)) {
          Js(o, c, b, w);
          return;
        } else {
          pd(o, c, b, w);
          return;
        }
      if (typeof b == "string") {
        Qs(o, c, b, w);
        return;
      }
      switch (b) {
        case Bc:
        case Ls:
        case Ji:
        case eo:
        case Qi: {
          rr(o, c, w.children);
          return;
        }
        case ul: {
          sr(c, "SuspenseList"), rr(o, c, w.children), ur(c);
          return;
        }
        case $c:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ea: {
          Zs(o, c, w);
          return;
        }
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case Za: {
            md(o, c, b, w, M);
            return;
          }
          case cl: {
            yd(o, c, b, w, M);
            return;
          }
          case qa: {
            gd(o, c, b, w);
            return;
          }
          case Ga: {
            jl(o, c, b, w);
            return;
          }
          case to: {
            nr(o, c, b, w);
            return;
          }
        }
      var Q = "";
      throw (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (b == null ? b : typeof b) + "." + Q));
    }
    function ru(o, c) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (eu || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eu = !0), o.entries === c && (tu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tu = !0);
    }
    function rr(o, c, b) {
      try {
        return Kl(o, c, b);
      } catch (w) {
        throw typeof w == "object" && w !== null && typeof w.then == "function" || ($r = $r !== null ? $r : Fl()), w;
      }
    }
    function Kl(o, c, b) {
      if (c.node = b, typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case As: {
            var w = b, M = w.type, Q = w.props, fe = w.ref;
            Ul(o, c, M, Q, fe);
            return;
          }
          case sl:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case to: {
            var Te = b, He = Te._payload, tt = Te._init, lt;
            try {
              lt = tt(He);
            } catch (Fo) {
              throw typeof Fo == "object" && Fo !== null && typeof Fo.then == "function" && sr(c, "Lazy"), Fo;
            }
            rr(o, c, lt);
            return;
          }
        }
        if (Sn(b)) {
          au(o, c, b);
          return;
        }
        var Tt = vn(b);
        if (Tt) {
          ru(b, Tt);
          var fn = Tt.call(b);
          if (fn) {
            var Fn = fn.next();
            if (!Fn.done) {
              var cr = [];
              do
                cr.push(Fn.value), Fn = fn.next();
              while (!Fn.done);
              au(o, c, cr);
              return;
            }
            return;
          }
        }
        var uu = Object.prototype.toString.call(b);
        throw new Error("Objects are not valid as a React child (found: " + (uu === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : uu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof b == "string") {
        var cu = c.blockedSegment;
        cu.lastPushedText = ws(c.blockedSegment.chunks, b, o.responseState, cu.lastPushedText);
        return;
      }
      if (typeof b == "number") {
        var du = c.blockedSegment;
        du.lastPushedText = ws(c.blockedSegment.chunks, "" + b, o.responseState, du.lastPushedText);
        return;
      }
      typeof b == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function au(o, c, b) {
      for (var w = b.length, M = 0; M < w; M++) {
        var Q = c.treeContext;
        c.treeContext = Ll(Q, w, M);
        try {
          Ro(o, c, b[M]);
        } finally {
          c.treeContext = Q;
        }
      }
    }
    function vd(o, c, b) {
      var w = c.blockedSegment, M = w.chunks.length, Q = Ir(
        o,
        M,
        null,
        w.formatContext,
        // Adopt the parent segment's leading text embed
        w.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      w.children.push(Q), w.lastPushedText = !1;
      var fe = fi(o, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext);
      c.componentStack !== null && (fe.componentStack = c.componentStack.parent);
      var Te = fe.ping;
      b.then(Te, Te);
    }
    function Ro(o, c, b) {
      var w = c.blockedSegment.formatContext, M = c.legacyContext, Q = c.context, fe = null;
      fe = c.componentStack;
      try {
        return rr(o, c, b);
      } catch (Te) {
        if (si(), typeof Te == "object" && Te !== null && typeof Te.then == "function") {
          vd(o, c, Te), c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = Q, lo(Q), c.componentStack = fe;
          return;
        } else
          throw c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = Q, lo(Q), c.componentStack = fe, Te;
      }
    }
    function No(o, c, b, w) {
      var M = pi(o, w);
      if (c === null ? Po(o, w) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = M, zl(c, w), c.parentFlushed && o.clientRenderedBoundaries.push(c))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var Q = o.onAllReady;
        Q();
      }
    }
    function iu(o) {
      var c = this, b = o.blockedBoundary, w = o.blockedSegment;
      w.status = Dl, gi(c, b, w);
    }
    function ou(o, c, b) {
      var w = o.blockedBoundary, M = o.blockedSegment;
      if (M.status = Dl, w === null)
        c.allPendingTasks--, c.status !== br && (c.status = br, c.destination !== null && v(c.destination));
      else {
        if (w.pendingTasks--, !w.forceClientRender) {
          w.forceClientRender = !0;
          var Q = b === void 0 ? new Error("The render was aborted by the server without a reason.") : b;
          w.errorDigest = c.onError(Q);
          {
            var fe = "The server did not finish this Suspense boundary: ";
            Q && typeof Q.message == "string" ? Q = fe + Q.message : Q = fe + String(Q);
            var Te = Sr;
            Sr = o;
            try {
              zl(w, Q);
            } finally {
              Sr = Te;
            }
          }
          w.parentFlushed && c.clientRenderedBoundaries.push(w);
        }
        if (w.fallbackAbortableTasks.forEach(function(tt) {
          return ou(tt, c, b);
        }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0) {
          var He = c.onAllReady;
          He();
        }
      }
    }
    function yi(o, c) {
      if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
        var b = c.children[0];
        b.id = c.id, b.parentFlushed = !0, b.status === la && yi(o, b);
      } else {
        var w = o.completedSegments;
        w.push(c);
      }
    }
    function gi(o, c, b) {
      if (c === null) {
        if (b.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = b;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = di;
          var w = o.onShellReady;
          w();
        }
      } else if (c.pendingTasks--, !c.forceClientRender) {
        if (c.pendingTasks === 0)
          b.parentFlushed && b.status === la && yi(c, b), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(iu, o), c.fallbackAbortableTasks.clear();
        else if (b.parentFlushed && b.status === la) {
          yi(c, b);
          var M = c.completedSegments;
          M.length === 1 && c.parentFlushed && o.partialBoundaries.push(c);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var Q = o.onAllReady;
        Q();
      }
    }
    function _o(o, c) {
      var b = c.blockedSegment;
      if (b.status === Ao) {
        lo(c.context);
        var w = null;
        w = Sr, Sr = c;
        try {
          rr(o, c, c.node), Ts(b.chunks, o.responseState, b.lastPushedText, b.textEmbedded), c.abortSet.delete(c), b.status = la, gi(o, c.blockedBoundary, b);
        } catch (Q) {
          if (si(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
            var M = c.ping;
            Q.then(M, M);
          } else
            c.abortSet.delete(c), b.status = sa, No(o, c.blockedBoundary, b, Q);
        } finally {
          Sr = w;
        }
      }
    }
    function lu(o) {
      if (o.status !== br) {
        var c = Wc(), b = zr.current;
        zr.current = Xs;
        var w;
        w = Co.getCurrentStack, Co.getCurrentStack = Fl;
        var M = ci;
        To(o.responseState);
        try {
          var Q = o.pingedTasks, fe;
          for (fe = 0; fe < Q.length; fe++) {
            var Te = Q[fe];
            _o(o, Te);
          }
          Q.splice(0, fe), o.destination !== null && Oo(o, o.destination);
        } catch (He) {
          pi(o, He), Po(o, He);
        } finally {
          To(M), zr.current = b, Co.getCurrentStack = w, b === Xs && lo(c);
        }
      }
    }
    function vi(o, c, b) {
      switch (b.parentFlushed = !0, b.status) {
        case Ao: {
          var w = b.id = o.nextSegmentId++;
          return b.lastPushedText = !1, b.textEmbedded = !1, $i(c, o.responseState, w);
        }
        case la: {
          b.status = qs;
          for (var M = !0, Q = b.chunks, fe = 0, Te = b.children, He = 0; He < Te.length; He++) {
            for (var tt = Te[He]; fe < tt.index; fe++)
              u(c, Q[fe]);
            M = xi(o, c, tt);
          }
          for (; fe < Q.length - 1; fe++)
            u(c, Q[fe]);
          return fe < Q.length && (M = h(c, Q[fe])), M;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function xi(o, c, b) {
      var w = b.boundary;
      if (w === null)
        return vi(o, c, b);
      if (w.parentFlushed = !0, w.forceClientRender)
        return or(c, o.responseState, w.errorDigest, w.errorMessage, w.errorComponentStack), vi(o, c, b), Cs(c, o.responseState);
      if (w.pendingTasks > 0) {
        w.rootSegmentID = o.nextSegmentId++, w.completedSegments.length > 0 && o.partialBoundaries.push(w);
        var M = w.id = dn(o.responseState);
        return Fr(c, o.responseState, M), vi(o, c, b), Ka(c, o.responseState);
      } else {
        if (w.byteSize > o.progressiveChunkSize)
          return w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), Fr(c, o.responseState, w.id), vi(o, c, b), Ka(c, o.responseState);
        ll(c, o.responseState);
        var Q = w.completedSegments;
        if (Q.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var fe = Q[0];
        return xi(o, c, fe), Ic(c, o.responseState);
      }
    }
    function xd(o, c, b) {
      return Fc(c, o.responseState, b.id, b.errorDigest, b.errorMessage, b.errorComponentStack);
    }
    function Yl(o, c, b) {
      return xe(c, o.responseState, b.formatContext, b.id), xi(o, c, b), Me(c, b.formatContext);
    }
    function Do(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var Q = w[M];
        su(o, c, b, Q);
      }
      return w.length = 0, Rc(c, o.responseState, b.id, b.rootSegmentID);
    }
    function bd(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var Q = w[M];
        if (!su(o, c, b, Q))
          return M++, w.splice(0, M), !1;
      }
      return w.splice(0, M), !0;
    }
    function su(o, c, b, w) {
      if (w.status === qs)
        return !0;
      var M = w.id;
      if (M === -1) {
        var Q = w.id = b.rootSegmentID;
        if (Q === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Yl(o, c, w);
      } else
        return Yl(o, c, w), er(c, o.responseState, M);
    }
    function Oo(o, c) {
      try {
        var b = o.completedRootSegment;
        b !== null && o.pendingRootTasks === 0 && (xi(o, c, b), o.completedRootSegment = null, Wa(c, o.responseState));
        var w = o.clientRenderedBoundaries, M;
        for (M = 0; M < w.length; M++) {
          var Q = w[M];
          if (!xd(o, c, Q)) {
            o.destination = null, M++, w.splice(0, M);
            return;
          }
        }
        w.splice(0, M);
        var fe = o.completedBoundaries;
        for (M = 0; M < fe.length; M++) {
          var Te = fe[M];
          if (!Do(o, c, Te)) {
            o.destination = null, M++, fe.splice(0, M);
            return;
          }
        }
        fe.splice(0, M);
        var He = o.partialBoundaries;
        for (M = 0; M < He.length; M++) {
          var tt = He[M];
          if (!bd(o, c, tt)) {
            o.destination = null, M++, He.splice(0, M);
            return;
          }
        }
        He.splice(0, M);
        var lt = o.completedBoundaries;
        for (M = 0; M < lt.length; M++) {
          var Tt = lt[M];
          if (!Do(o, c, Tt)) {
            o.destination = null, M++, lt.splice(0, M);
            return;
          }
        }
        lt.splice(0, M);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), v(c));
      }
    }
    function Sd(o) {
      f(function() {
        return lu(o);
      });
    }
    function s(o, c) {
      if (o.status === Gs) {
        o.status = br, k(c, o.fatalError);
        return;
      }
      if (o.status !== br && o.destination === null) {
        o.destination = c;
        try {
          Oo(o, c);
        } catch (b) {
          pi(o, b), Po(o, b);
        }
      }
    }
    function p(o, c) {
      try {
        var b = o.abortableTasks;
        b.forEach(function(w) {
          return ou(w, o, c);
        }), b.clear(), o.destination !== null && Oo(o, o.destination);
      } catch (w) {
        pi(o, w), Po(o, w);
      }
    }
    function E() {
    }
    function _(o, c, b, w) {
      var M = !1, Q = null, fe = "", Te = {
        push: function(Tt) {
          return Tt !== null && (fe += Tt), !0;
        },
        destroy: function(Tt) {
          M = !0, Q = Tt;
        }
      }, He = !1;
      function tt() {
        He = !0;
      }
      var lt = Ol(o, zc(b, c ? c.identifierPrefix : void 0), ol(), 1 / 0, E, void 0, tt, void 0, void 0);
      if (Sd(lt), p(lt, w), s(lt, Te), M)
        throw Q;
      if (!He)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return fe;
    }
    function H(o, c) {
      return _(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ne(o, c) {
      return _(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ce() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ci.renderToNodeStream = pe, Ci.renderToStaticMarkup = ne, Ci.renderToStaticNodeStream = Ce, Ci.renderToString = H, Ci.version = t;
  }()), Ci;
}
var Cu = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rh;
function WS() {
  return Rh || (Rh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = de, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          E[_ - 1] = arguments[_];
        l("warn", s, E);
      }
    }
    function a(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          E[_ - 1] = arguments[_];
        l("error", s, E);
      }
    }
    function l(s, p, E) {
      {
        var _ = n.ReactDebugCurrentFrame, H = _.getStackAddendum();
        H !== "" && (p += "%s", E = E.concat([H]));
        var ne = E.map(function(pe) {
          return String(pe);
        });
        ne.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, ne);
      }
    }
    function f(s) {
      s();
    }
    var d = 512, u = null, h = 0;
    function y(s) {
      u = new Uint8Array(d), h = 0;
    }
    function v(s, p) {
      if (p.length !== 0) {
        if (p.length > d) {
          h > 0 && (s.enqueue(new Uint8Array(u.buffer, 0, h)), u = new Uint8Array(d), h = 0), s.enqueue(p);
          return;
        }
        var E = p, _ = u.length - h;
        _ < E.length && (_ === 0 ? s.enqueue(u) : (u.set(E.subarray(0, _), h), s.enqueue(u), E = E.subarray(_)), u = new Uint8Array(d), h = 0), u.set(E, h), h += E.length;
      }
    }
    function S(s, p) {
      return v(s, p), !0;
    }
    function R(s) {
      u && h > 0 && (s.enqueue(new Uint8Array(u.buffer, 0, h)), u = null, h = 0);
    }
    function k(s) {
      s.close();
    }
    var F = new TextEncoder();
    function T(s) {
      return F.encode(s);
    }
    function m(s) {
      return F.encode(s);
    }
    function O(s, p) {
      typeof s.error == "function" ? s.error(p) : s.close();
    }
    function N(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, E = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function P(s) {
      try {
        return D(s), !1;
      } catch {
        return !0;
      }
    }
    function D(s) {
      return "" + s;
    }
    function L(s, p) {
      if (P(s))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, N(s)), D(s);
    }
    function U(s, p) {
      if (P(s))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, N(s)), D(s);
    }
    function W(s) {
      if (P(s))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", N(s)), D(s);
    }
    var Z = Object.prototype.hasOwnProperty, ce = 0, te = 1, V = 2, K = 3, X = 4, B = 5, oe = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", G = new RegExp("^[" + re + "][" + le + "]*$"), j = {}, J = {};
    function ue(s) {
      return Z.call(J, s) ? !0 : Z.call(j, s) ? !1 : G.test(s) ? (J[s] = !0, !0) : (j[s] = !0, a("Invalid attribute name: `%s`", s), !1);
    }
    function _e(s, p, E, _) {
      if (E !== null && E.type === ce)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (_)
            return !1;
          if (E !== null)
            return !E.acceptsBooleans;
          var H = s.toLowerCase().slice(0, 5);
          return H !== "data-" && H !== "aria-";
        }
        default:
          return !1;
      }
    }
    function be(s) {
      return Le.hasOwnProperty(s) ? Le[s] : null;
    }
    function ye(s, p, E, _, H, ne, pe) {
      this.acceptsBooleans = p === V || p === K || p === X, this.attributeName = _, this.attributeNamespace = H, this.mustUseProperty = E, this.propertyName = s, this.type = p, this.sanitizeURL = ne, this.removeEmptyString = pe;
    }
    var Le = {}, ae = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ae.forEach(function(s) {
      Le[s] = new ye(
        s,
        ce,
        !1,
        // mustUseProperty
        s,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
      var p = s[0], E = s[1];
      Le[p] = new ye(
        p,
        te,
        !1,
        // mustUseProperty
        E,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
      Le[s] = new ye(
        s,
        V,
        !1,
        // mustUseProperty
        s.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
      Le[s] = new ye(
        s,
        V,
        !1,
        // mustUseProperty
        s,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(s) {
      Le[s] = new ye(
        s,
        K,
        !1,
        // mustUseProperty
        s.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      Le[s] = new ye(
        s,
        K,
        !0,
        // mustUseProperty
        s,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      Le[s] = new ye(
        s,
        X,
        !1,
        // mustUseProperty
        s,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      Le[s] = new ye(
        s,
        oe,
        !1,
        // mustUseProperty
        s,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(s) {
      Le[s] = new ye(
        s,
        B,
        !1,
        // mustUseProperty
        s.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ie = /[\-\:]([a-z])/g, Ee = function(s) {
      return s[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      var p = s.replace(Ie, Ee);
      Le[p] = new ye(
        p,
        te,
        !1,
        // mustUseProperty
        s,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      var p = s.replace(Ie, Ee);
      Le[p] = new ye(
        p,
        te,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      var p = s.replace(Ie, Ee);
      Le[p] = new ye(
        p,
        te,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(s) {
      Le[s] = new ye(
        s,
        te,
        !1,
        // mustUseProperty
        s.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var he = "xlinkHref";
    Le[he] = new ye(
      "xlinkHref",
      te,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(s) {
      Le[s] = new ye(
        s,
        te,
        !1,
        // mustUseProperty
        s.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Pe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ee(s, p) {
      return s + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var De = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pe).forEach(function(s) {
      De.forEach(function(p) {
        Pe[ee(p, s)] = Pe[s];
      });
    });
    var we = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ue(s, p) {
      we[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ge(s, p) {
      if (s.indexOf("-") === -1)
        return typeof p.is == "string";
      switch (s) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var et = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Je = {}, st = new RegExp("^(aria)-[" + le + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function We(s, p) {
      {
        if (Z.call(Je, p) && Je[p])
          return !0;
        if (Ke.test(p)) {
          var E = "aria-" + p.slice(4).toLowerCase(), _ = et.hasOwnProperty(E) ? E : null;
          if (_ == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), Je[p] = !0, !0;
          if (p !== _)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, _), Je[p] = !0, !0;
        }
        if (st.test(p)) {
          var H = p.toLowerCase(), ne = et.hasOwnProperty(H) ? H : null;
          if (ne == null)
            return Je[p] = !0, !1;
          if (p !== ne)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ne), Je[p] = !0, !0;
        }
      }
      return !0;
    }
    function Be(s, p) {
      {
        var E = [];
        for (var _ in p) {
          var H = We(s, _);
          H || E.push(_);
        }
        var ne = E.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        E.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ne, s) : E.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ne, s);
      }
    }
    function $e(s, p) {
      Ge(s, p) || Be(s, p);
    }
    var ht = !1;
    function qe(s, p) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        p != null && p.value === null && !ht && (ht = !0, s === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
      }
    }
    var pt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, gt = function() {
    };
    {
      var ut = {}, Rt = /^on./, tn = /^on[^A-Z]/, Xt = new RegExp("^(aria)-[" + le + "]*$"), vt = new RegExp("^(aria)[A-Z][" + le + "]*$");
      gt = function(s, p, E, _) {
        if (Z.call(ut, p) && ut[p])
          return !0;
        var H = p.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ut[p] = !0, !0;
        if (_ != null) {
          var ne = _.registrationNameDependencies, pe = _.possibleRegistrationNames;
          if (ne.hasOwnProperty(p))
            return !0;
          var Ce = pe.hasOwnProperty(H) ? pe[H] : null;
          if (Ce != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, Ce), ut[p] = !0, !0;
          if (Rt.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ut[p] = !0, !0;
        } else if (Rt.test(p))
          return tn.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ut[p] = !0, !0;
        if (Xt.test(p) || vt.test(p))
          return !0;
        if (H === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ut[p] = !0, !0;
        if (H === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ut[p] = !0, !0;
        if (H === "is" && E !== null && E !== void 0 && typeof E != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), ut[p] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ut[p] = !0, !0;
        var o = be(p), c = o !== null && o.type === ce;
        if (pt.hasOwnProperty(H)) {
          var b = pt[H];
          if (b !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, b), ut[p] = !0, !0;
        } else if (!c && p !== H)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, H), ut[p] = !0, !0;
        return typeof E == "boolean" && _e(p, E, o, !1) ? (E ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, p, p, E, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, p, p, E, p, p, p), ut[p] = !0, !0) : c ? !0 : _e(p, E, o, !1) ? (ut[p] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === K && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, p, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, E), ut[p] = !0), !0);
      };
    }
    var Nt = function(s, p, E) {
      {
        var _ = [];
        for (var H in p) {
          var ne = gt(s, H, p[H], E);
          ne || _.push(H);
        }
        var pe = _.map(function(Ce) {
          return "`" + Ce + "`";
        }).join(", ");
        _.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, s) : _.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, s);
      }
    };
    function hn(s, p, E) {
      Ge(s, p) || Nt(s, p, E);
    }
    var on = function() {
    };
    {
      var Gt = /^(?:webkit|moz|o)[A-Z]/, yn = /^-ms-/, ze = /-(.)/g, xt = /;\s*$/, Ht = {}, It = {}, At = !1, xn = !1, Mt = function(s) {
        return s.replace(ze, function(p, E) {
          return E.toUpperCase();
        });
      }, ln = function(s) {
        Ht.hasOwnProperty(s) && Ht[s] || (Ht[s] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          s,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mt(s.replace(yn, "ms-"))
        ));
      }, cn = function(s) {
        Ht.hasOwnProperty(s) && Ht[s] || (Ht[s] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
      }, wn = function(s, p) {
        It.hasOwnProperty(p) && It[p] || (It[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, s, p.replace(xt, "")));
      }, Jt = function(s, p) {
        At || (At = !0, a("`NaN` is an invalid value for the `%s` css style property.", s));
      }, jt = function(s, p) {
        xn || (xn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      on = function(s, p) {
        s.indexOf("-") > -1 ? ln(s) : Gt.test(s) ? cn(s) : xt.test(p) && wn(s, p), typeof p == "number" && (isNaN(p) ? Jt(s, p) : isFinite(p) || jt(s, p));
      };
    }
    var Pn = on, Mn = /["'&<>]/;
    function Hn(s) {
      W(s);
      var p = "" + s, E = Mn.exec(p);
      if (!E)
        return p;
      var _, H = "", ne, pe = 0;
      for (ne = E.index; ne < p.length; ne++) {
        switch (p.charCodeAt(ne)) {
          case 34:
            _ = "&quot;";
            break;
          case 38:
            _ = "&amp;";
            break;
          case 39:
            _ = "&#x27;";
            break;
          case 60:
            _ = "&lt;";
            break;
          case 62:
            _ = "&gt;";
            break;
          default:
            continue;
        }
        pe !== ne && (H += p.substring(pe, ne)), pe = ne + 1, H += _;
      }
      return pe !== ne ? H + p.substring(pe, ne) : H;
    }
    function Ut(s) {
      return typeof s == "boolean" || typeof s == "number" ? "" + s : Hn(s);
    }
    var zn = /([A-Z])/g, Wn = /^ms-/;
    function An(s) {
      return s.replace(zn, "-$1").toLowerCase().replace(Wn, "-ms-");
    }
    var Sn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ne = !1;
    function ct(s) {
      !Ne && Sn.test(s) && (Ne = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(s)));
    }
    var dt = Array.isArray;
    function $(s) {
      return dt(s);
    }
    var Oe = m("<script>"), Xe = m("<\/script>"), Ve = m('<script src="'), it = m('<script type="module" src="'), nt = m('" async=""><\/script>');
    function Et(s) {
      return W(s), ("" + s).replace(_t, Ze);
    }
    var _t = /(<\/|<)(s)(cript)/gi, Ze = function(s, p, E, _) {
      return "" + p + (E === "s" ? "\\u0073" : "\\u0053") + _;
    };
    function Kt(s, p, E, _, H) {
      var ne = s === void 0 ? "" : s, pe = p === void 0 ? Oe : m('<script nonce="' + Ut(p) + '">'), Ce = [];
      if (E !== void 0 && Ce.push(pe, T(Et(E)), Xe), _ !== void 0)
        for (var o = 0; o < _.length; o++)
          Ce.push(Ve, T(Ut(_[o])), nt);
      if (H !== void 0)
        for (var c = 0; c < H.length; c++)
          Ce.push(it, T(Ut(H[c])), nt);
      return {
        bootstrapChunks: Ce,
        startInlineScript: pe,
        placeholderPrefix: m(ne + "P:"),
        segmentPrefix: m(ne + "S:"),
        boundaryPrefix: ne + "B:",
        idPrefix: ne,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var zt = 0, Ft = 1, mt = 2, Dt = 3, wt = 4, Yt = 5, Wt = 6, dn = 7;
    function sn(s, p) {
      return {
        insertionMode: s,
        selectedValue: p
      };
    }
    function nn(s) {
      var p = s === "http://www.w3.org/2000/svg" ? mt : s === "http://www.w3.org/1998/Math/MathML" ? Dt : zt;
      return sn(p, null);
    }
    function Zt(s, p, E) {
      switch (p) {
        case "select":
          return sn(Ft, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return sn(mt, null);
        case "math":
          return sn(Dt, null);
        case "foreignObject":
          return sn(Ft, null);
        case "table":
          return sn(wt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return sn(Yt, null);
        case "colgroup":
          return sn(dn, null);
        case "tr":
          return sn(Wt, null);
      }
      return s.insertionMode >= wt || s.insertionMode === zt ? sn(Ft, null) : s;
    }
    var En = null;
    function un(s) {
      var p = s.nextSuspenseID++;
      return m(s.boundaryPrefix + p.toString(16));
    }
    function kn(s, p, E) {
      var _ = s.idPrefix, H = ":" + _ + "R" + p;
      return E > 0 && (H += "H" + E.toString(32)), H + ":";
    }
    function In(s) {
      return Ut(s);
    }
    var Yn = m("<!-- -->");
    function Zn(s, p, E, _) {
      return p === "" ? _ : (_ && s.push(Yn), s.push(T(In(p))), !0);
    }
    function Xn(s, p, E, _) {
      E && _ && s.push(Yn);
    }
    var g = /* @__PURE__ */ new Map();
    function C(s) {
      var p = g.get(s);
      if (p !== void 0)
        return p;
      var E = m(Ut(An(s)));
      return g.set(s, E), E;
    }
    var I = m(' style="'), Y = m(":"), Se = m(";");
    function ge(s, p, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var _ = !0;
      for (var H in E)
        if (Z.call(E, H)) {
          var ne = E[H];
          if (!(ne == null || typeof ne == "boolean" || ne === "")) {
            var pe = void 0, Ce = void 0, o = H.indexOf("--") === 0;
            o ? (pe = T(Ut(H)), U(ne, H), Ce = T(Ut(("" + ne).trim()))) : (Pn(H, ne), pe = C(H), typeof ne == "number" ? ne !== 0 && !Z.call(Pe, H) ? Ce = T(ne + "px") : Ce = T("" + ne) : (U(ne, H), Ce = T(Ut(("" + ne).trim())))), _ ? (_ = !1, s.push(I, pe, Y, Ce)) : s.push(Se, pe, Y, Ce);
          }
        }
      _ || s.push(rt);
    }
    var Ae = m(" "), je = m('="'), rt = m('"'), yt = m('=""');
    function ie(s, p, E, _) {
      switch (E) {
        case "style": {
          ge(s, p, _);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(E.length > 2 && (E[0] === "o" || E[0] === "O") && (E[1] === "n" || E[1] === "N"))
      ) {
        var H = be(E);
        if (H !== null) {
          switch (typeof _) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!H.acceptsBooleans)
                return;
          }
          var ne = H.attributeName, pe = T(ne);
          switch (H.type) {
            case K:
              _ && s.push(Ae, pe, yt);
              return;
            case X:
              _ === !0 ? s.push(Ae, pe, yt) : _ === !1 || s.push(Ae, pe, je, T(Ut(_)), rt);
              return;
            case B:
              isNaN(_) || s.push(Ae, pe, je, T(Ut(_)), rt);
              break;
            case oe:
              !isNaN(_) && _ >= 1 && s.push(Ae, pe, je, T(Ut(_)), rt);
              break;
            default:
              H.sanitizeURL && (L(_, ne), _ = "" + _, ct(_)), s.push(Ae, pe, je, T(Ut(_)), rt);
          }
        } else if (ue(E)) {
          switch (typeof _) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ce = E.toLowerCase().slice(0, 5);
              if (Ce !== "data-" && Ce !== "aria-")
                return;
            }
          }
          s.push(Ae, T(E), je, T(Ut(_)), rt);
        }
      }
    }
    var se = m(">"), me = m("/>");
    function Re(s, p, E) {
      if (p != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var _ = p.__html;
        _ != null && (W(_), s.push(T("" + _)));
      }
    }
    var bt = !1, gn = !1, Tn = !1, fr = !1, $n = !1, wr = !1, pr = !1;
    function qr(s, p) {
      {
        var E = s[p];
        if (E != null) {
          var _ = $(E);
          s.multiple && !_ ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !s.multiple && _ && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Zo(s, p, E) {
      Ue("select", p), qr(p, "value"), qr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !Tn && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Tn = !0), s.push(Qn("select"));
      var _ = null, H = null;
      for (var ne in p)
        if (Z.call(p, ne)) {
          var pe = p[ne];
          if (pe == null)
            continue;
          switch (ne) {
            case "children":
              _ = pe;
              break;
            case "dangerouslySetInnerHTML":
              H = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(s, E, ne, pe);
              break;
          }
        }
      return s.push(se), Re(s, H, _), _;
    }
    function Qo(s) {
      var p = "";
      return e.Children.forEach(s, function(E) {
        E != null && (p += E, !$n && typeof E != "string" && typeof E != "number" && ($n = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ba = m(' selected=""');
    function Jo(s, p, E, _) {
      var H = _.selectedValue;
      s.push(Qn("option"));
      var ne = null, pe = null, Ce = null, o = null;
      for (var c in p)
        if (Z.call(p, c)) {
          var b = p[c];
          if (b == null)
            continue;
          switch (c) {
            case "children":
              ne = b;
              break;
            case "selected":
              Ce = b, pr || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = b;
              break;
            case "value":
              pe = b;
            default:
              ie(s, E, c, b);
              break;
          }
        }
      if (H != null) {
        var w;
        if (pe !== null ? (L(pe, "value"), w = "" + pe) : (o !== null && (wr || (wr = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), w = Qo(ne)), $(H))
          for (var M = 0; M < H.length; M++) {
            L(H[M], "value");
            var Q = "" + H[M];
            if (Q === w) {
              s.push(Ba);
              break;
            }
          }
        else
          L(H, "select.value"), "" + H === w && s.push(Ba);
      } else
        Ce && s.push(Ba);
      return s.push(se), Re(s, o, ne), ne;
    }
    function Ha(s, p, E) {
      Ue("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !gn && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), gn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !bt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), bt = !0), s.push(Qn("input"));
      var _ = null, H = null, ne = null, pe = null;
      for (var Ce in p)
        if (Z.call(p, Ce)) {
          var o = p[Ce];
          if (o == null)
            continue;
          switch (Ce) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              pe = o;
              break;
            case "defaultValue":
              H = o;
              break;
            case "checked":
              ne = o;
              break;
            case "value":
              _ = o;
              break;
            default:
              ie(s, E, Ce, o);
              break;
          }
        }
      return ne !== null ? ie(s, E, "checked", ne) : pe !== null && ie(s, E, "checked", pe), _ !== null ? ie(s, E, "value", _) : H !== null && ie(s, E, "value", H), s.push(me), null;
    }
    function hr(s, p, E) {
      Ue("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !fr && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), fr = !0), s.push(Qn("textarea"));
      var _ = null, H = null, ne = null;
      for (var pe in p)
        if (Z.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              ne = Ce;
              break;
            case "value":
              _ = Ce;
              break;
            case "defaultValue":
              H = Ce;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ie(s, E, pe, Ce);
              break;
          }
        }
      if (_ === null && H !== null && (_ = H), s.push(se), ne != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), _ != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if ($(ne)) {
          if (ne.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          W(ne[0]), _ = "" + ne[0];
        }
        W(ne), _ = "" + ne;
      }
      return typeof _ == "string" && _[0] === `
` && s.push(Tr), _ !== null && (L(_, "value"), s.push(T(In("" + _)))), null;
    }
    function Gr(s, p, E, _) {
      s.push(Qn(E));
      for (var H in p)
        if (Z.call(p, H)) {
          var ne = p[H];
          if (ne == null)
            continue;
          switch (H) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ie(s, _, H, ne);
              break;
          }
        }
      return s.push(me), null;
    }
    function ca(s, p, E) {
      s.push(Qn("menuitem"));
      for (var _ in p)
        if (Z.call(p, _)) {
          var H = p[_];
          if (H == null)
            continue;
          switch (_) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ie(s, E, _, H);
              break;
          }
        }
      return s.push(se), null;
    }
    function en(s, p, E) {
      s.push(Qn("title"));
      var _ = null;
      for (var H in p)
        if (Z.call(p, H)) {
          var ne = p[H];
          if (ne == null)
            continue;
          switch (H) {
            case "children":
              _ = ne;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ie(s, E, H, ne);
              break;
          }
        }
      s.push(se);
      {
        var pe = Array.isArray(_) && _.length < 2 ? _[0] || null : _;
        Array.isArray(_) && _.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return _;
    }
    function mr(s, p, E, _) {
      s.push(Qn(E));
      var H = null, ne = null;
      for (var pe in p)
        if (Z.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              H = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ne = Ce;
              break;
            default:
              ie(s, _, pe, Ce);
              break;
          }
        }
      return s.push(se), Re(s, ne, H), typeof H == "string" ? (s.push(T(In(H))), null) : H;
    }
    function Vn(s, p, E, _) {
      s.push(Qn(E));
      var H = null, ne = null;
      for (var pe in p)
        if (Z.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              H = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ne = Ce;
              break;
            case "style":
              ge(s, _, Ce);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ue(pe) && typeof Ce != "function" && typeof Ce != "symbol" && s.push(Ae, T(pe), je, T(Ut(Ce)), rt);
              break;
          }
        }
      return s.push(se), Re(s, ne, H), H;
    }
    var Tr = m(`
`);
    function yr(s, p, E, _) {
      s.push(Qn(E));
      var H = null, ne = null;
      for (var pe in p)
        if (Z.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              H = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ne = Ce;
              break;
            default:
              ie(s, _, pe, Ce);
              break;
          }
        }
      if (s.push(se), ne != null) {
        if (H != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ne != "object" || !("__html" in ne))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = ne.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(Tr, T(o)) : (W(o), s.push(T("" + o))));
      }
      return typeof H == "string" && H[0] === `
` && s.push(Tr), H;
    }
    var da = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gr = /* @__PURE__ */ new Map();
    function Qn(s) {
      var p = gr.get(s);
      if (p === void 0) {
        if (!da.test(s))
          throw new Error("Invalid tag: " + s);
        p = m("<" + s), gr.set(s, p);
      }
      return p;
    }
    var Wa = m("<!DOCTYPE html>");
    function Va(s, p, E, _, H) {
      switch ($e(p, E), qe(p, E), hn(p, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), H.insertionMode !== mt && H.insertionMode !== Dt && p.indexOf("-") === -1 && typeof E.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Zo(s, E, _);
        case "option":
          return Jo(s, E, _, H);
        case "textarea":
          return hr(s, E, _);
        case "input":
          return Ha(s, E, _);
        case "menuitem":
          return ca(s, E, _);
        case "title":
          return en(s, E, _);
        case "listing":
        case "pre":
          return yr(s, E, p, _);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Gr(s, E, p, _);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mr(s, E, p, _);
        case "html":
          return H.insertionMode === zt && s.push(Wa), mr(s, E, p, _);
        default:
          return p.indexOf("-") === -1 && typeof E.is != "string" ? mr(s, E, p, _) : Vn(s, E, p, _);
      }
    }
    var Ii = m("</"), $i = m(">");
    function Bi(s, p, E) {
      switch (p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          s.push(Ii, T(p), $i);
      }
    }
    function el(s, p) {
      for (var E = p.bootstrapChunks, _ = 0; _ < E.length - 1; _++)
        v(s, E[_]);
      return _ < E.length ? S(s, E[_]) : !0;
    }
    var tl = m('<template id="'), fa = m('"></template>');
    function pa(s, p, E) {
      v(s, tl), v(s, p.placeholderPrefix);
      var _ = T(E.toString(16));
      return v(s, _), S(s, fa);
    }
    var ha = m("<!--$-->"), Zr = m('<!--$?--><template id="'), nl = m('"></template>'), Qr = m("<!--$!-->"), ja = m("<!--/$-->"), Ua = m("<template"), Or = m('"'), Fr = m(' data-dgst="'), ma = m(' data-msg="'), Hi = m(' data-stck="'), Ka = m("></template>");
    function Wi(s, p) {
      return S(s, ha);
    }
    function ya(s, p, E) {
      if (v(s, Zr), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), S(s, nl);
    }
    function jn(s, p, E, _, H) {
      var ne;
      return ne = S(s, Qr), v(s, Ua), E && (v(s, Fr), v(s, T(Ut(E))), v(s, Or)), _ && (v(s, ma), v(s, T(Ut(_))), v(s, Or)), H && (v(s, Hi), v(s, T(Ut(H))), v(s, Or)), ne = S(s, Ka), ne;
    }
    function Vi(s, p) {
      return S(s, ja);
    }
    function ga(s, p) {
      return S(s, ja);
    }
    function rl(s, p) {
      return S(s, ja);
    }
    var ji = m('<div hidden id="'), va = m('">'), Ui = m("</div>"), Ki = m('<svg aria-hidden="true" style="display:none" id="'), xa = m('">'), ba = m("</svg>"), Yi = m('<math aria-hidden="true" style="display:none" id="'), Xi = m('">'), qi = m("</math>"), Ya = m('<table hidden id="'), Gi = m('">'), x = m("</table>"), A = m('<table hidden><tbody id="'), z = m('">'), q = m("</tbody></table>"), ke = m('<table hidden><tr id="'), xe = m('">'), Me = m("</tr></table>"), Ye = m('<table hidden><colgroup id="'), St = m('">'), Ot = m("</colgroup></table>");
    function Pt(s, p, E, _) {
      switch (E.insertionMode) {
        case zt:
        case Ft:
          return v(s, ji), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, va);
        case mt:
          return v(s, Ki), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, xa);
        case Dt:
          return v(s, Yi), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, Xi);
        case wt:
          return v(s, Ya), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, Gi);
        case Yt:
          return v(s, A), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, z);
        case Wt:
          return v(s, ke), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, xe);
        case dn:
          return v(s, Ye), v(s, p.segmentPrefix), v(s, T(_.toString(16))), S(s, St);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function rn(s, p) {
      switch (p.insertionMode) {
        case zt:
        case Ft:
          return S(s, Ui);
        case mt:
          return S(s, ba);
        case Dt:
          return S(s, qi);
        case wt:
          return S(s, x);
        case Yt:
          return S(s, q);
        case Wt:
          return S(s, Me);
        case dn:
          return S(s, Ot);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Un = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Sa = m(Un + ';$RS("'), Zi = m('$RS("'), Xa = m('","'), Pc = m('")<\/script>');
    function Rc(s, p, E) {
      v(s, p.startInlineScript), p.sentCompleteSegmentFunction ? v(s, Zi) : (p.sentCompleteSegmentFunction = !0, v(s, Sa)), v(s, p.segmentPrefix);
      var _ = T(E.toString(16));
      return v(s, _), v(s, Xa), v(s, p.placeholderPrefix), v(s, _), S(s, Pc);
    }
    var Nc = m(Jn + ';$RC("'), _c = m('$RC("'), Dc = m('","'), Oc = m('")<\/script>');
    function al(s, p, E, _) {
      if (v(s, p.startInlineScript), p.sentCompleteBoundaryFunction ? v(s, _c) : (p.sentCompleteBoundaryFunction = !0, v(s, Nc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var H = T(_.toString(16));
      return v(s, E), v(s, Dc), v(s, p.segmentPrefix), v(s, H), S(s, Oc);
    }
    var Fc = m(er + ';$RX("'), Mc = m('$RX("'), il = m('"'), zc = m(")<\/script>"), ol = m(",");
    function ws(s, p, E, _, H, ne) {
      if (v(s, p.startInlineScript), p.sentClientRenderFunction ? v(s, Mc) : (p.sentClientRenderFunction = !0, v(s, Fc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), v(s, il), (_ || H || ne) && (v(s, ol), v(s, T(ll(_ || "")))), (H || ne) && (v(s, ol), v(s, T(ll(H || "")))), ne && (v(s, ol), v(s, T(ll(ne)))), S(s, zc);
    }
    var Ts = /[<\u2028\u2029]/g;
    function ll(s) {
      var p = JSON.stringify(s);
      return p.replace(Ts, function(E) {
        switch (E) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var or = Object.assign, Ic = Symbol.for("react.element"), Cs = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), As = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), Qi = Symbol.for("react.provider"), Ji = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), qa = Symbol.for("react.suspense"), Ga = Symbol.for("react.suspense_list"), Za = Symbol.for("react.memo"), Ea = Symbol.for("react.lazy"), ul = Symbol.for("react.scope"), cl = Symbol.for("react.debug_trace_mode"), to = Symbol.for("react.legacy_hidden"), $c = Symbol.for("react.default_value"), Ls = Symbol.iterator, Bc = "@@iterator";
    function Hc(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = Ls && s[Ls] || s[Bc];
      return typeof p == "function" ? p : null;
    }
    function Ps(s, p, E) {
      var _ = s.displayName;
      if (_)
        return _;
      var H = p.displayName || p.name || "";
      return H !== "" ? E + "(" + H + ")" : E;
    }
    function Rs(s) {
      return s.displayName || "Context";
    }
    function vn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case tr:
          return "Fragment";
        case Cs:
          return "Portal";
        case sl:
          return "Profiler";
        case As:
          return "StrictMode";
        case qa:
          return "Suspense";
        case Ga:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case Ji:
            var p = s;
            return Rs(p) + ".Consumer";
          case Qi:
            var E = s;
            return Rs(E._context) + ".Provider";
          case eo:
            return Ps(s, s.render, "ForwardRef");
          case Za:
            var _ = s.displayName || null;
            return _ !== null ? _ : vn(s.type) || "Memo";
          case Ea: {
            var H = s, ne = H._payload, pe = H._init;
            try {
              return vn(pe(ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qa = 0, dl, mn, ka, fl, pl, hl, ml;
    function yl() {
    }
    yl.__reactDisabledLog = !0;
    function Ns() {
      {
        if (Qa === 0) {
          dl = console.log, mn = console.info, ka = console.warn, fl = console.error, pl = console.group, hl = console.groupCollapsed, ml = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: yl,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        Qa++;
      }
    }
    function _s() {
      {
        if (Qa--, Qa === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: or({}, s, {
              value: dl
            }),
            info: or({}, s, {
              value: mn
            }),
            warn: or({}, s, {
              value: ka
            }),
            error: or({}, s, {
              value: fl
            }),
            group: or({}, s, {
              value: pl
            }),
            groupCollapsed: or({}, s, {
              value: hl
            }),
            groupEnd: or({}, s, {
              value: ml
            })
          });
        }
        Qa < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var no = n.ReactCurrentDispatcher, gl;
    function Ja(s, p, E) {
      {
        if (gl === void 0)
          try {
            throw Error();
          } catch (H) {
            var _ = H.stack.trim().match(/\n( *(at )?)/);
            gl = _ && _[1] || "";
          }
        return `
` + gl + s;
      }
    }
    var ei = !1, wa;
    {
      var ti = typeof WeakMap == "function" ? WeakMap : Map;
      wa = new ti();
    }
    function ni(s, p) {
      if (!s || ei)
        return "";
      {
        var E = wa.get(s);
        if (E !== void 0)
          return E;
      }
      var _;
      ei = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ne;
      ne = no.current, no.current = null, Ns();
      try {
        if (p) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (fe) {
              _ = fe;
            }
            Reflect.construct(s, [], pe);
          } else {
            try {
              pe.call();
            } catch (fe) {
              _ = fe;
            }
            s.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            _ = fe;
          }
          s();
        }
      } catch (fe) {
        if (fe && _ && typeof fe.stack == "string") {
          for (var Ce = fe.stack.split(`
`), o = _.stack.split(`
`), c = Ce.length - 1, b = o.length - 1; c >= 1 && b >= 0 && Ce[c] !== o[b]; )
            b--;
          for (; c >= 1 && b >= 0; c--, b--)
            if (Ce[c] !== o[b]) {
              if (c !== 1 || b !== 1)
                do
                  if (c--, b--, b < 0 || Ce[c] !== o[b]) {
                    var w = `
` + Ce[c].replace(" at new ", " at ");
                    return s.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", s.displayName)), typeof s == "function" && wa.set(s, w), w;
                  }
                while (c >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ei = !1, no.current = ne, _s(), Error.prepareStackTrace = H;
      }
      var M = s ? s.displayName || s.name : "", Q = M ? Ja(M) : "";
      return typeof s == "function" && wa.set(s, Q), Q;
    }
    function ro(s, p, E) {
      return ni(s, !0);
    }
    function Ds(s, p, E) {
      return ni(s, !1);
    }
    function vl(s) {
      var p = s.prototype;
      return !!(p && p.isReactComponent);
    }
    function xl(s, p, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ni(s, vl(s));
      if (typeof s == "string")
        return Ja(s);
      switch (s) {
        case qa:
          return Ja("Suspense");
        case Ga:
          return Ja("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case eo:
            return Ds(s.render);
          case Za:
            return xl(s.type, p, E);
          case Ea: {
            var _ = s, H = _._payload, ne = _._init;
            try {
              return xl(ne(H), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var bl = {}, Os = n.ReactDebugCurrentFrame;
    function Ta(s) {
      if (s) {
        var p = s._owner, E = xl(s.type, s._source, p ? p.type : null);
        Os.setExtraStackFrame(E);
      } else
        Os.setExtraStackFrame(null);
    }
    function Sl(s, p, E, _, H) {
      {
        var ne = Function.call.bind(Z);
        for (var pe in s)
          if (ne(s, pe)) {
            var Ce = void 0;
            try {
              if (typeof s[pe] != "function") {
                var o = Error((_ || "React class") + ": " + E + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Ce = s[pe](p, pe, _, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              Ce = c;
            }
            Ce && !(Ce instanceof Error) && (Ta(H), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", E, pe, typeof Ce), Ta(null)), Ce instanceof Error && !(Ce.message in bl) && (bl[Ce.message] = !0, Ta(H), a("Failed %s type: %s", E, Ce.message), Ta(null));
          }
      }
    }
    var ao;
    ao = {};
    var Jr = {};
    Object.freeze(Jr);
    function El(s, p) {
      {
        var E = s.contextTypes;
        if (!E)
          return Jr;
        var _ = {};
        for (var H in E)
          _[H] = p[H];
        {
          var ne = vn(s) || "Unknown";
          Sl(E, _, "context", ne);
        }
        return _;
      }
    }
    function kl(s, p, E, _) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var H = vn(p) || "Unknown";
            ao[H] || (ao[H] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", H, H));
          }
          return E;
        }
        var ne = s.getChildContext();
        for (var pe in ne)
          if (!(pe in _))
            throw new Error((vn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var Ce = vn(p) || "Unknown";
          Sl(_, ne, "child context", Ce);
        }
        return or({}, E, ne);
      }
    }
    var Mr;
    Mr = {};
    var Fs = null, ea = null;
    function ta(s) {
      s.context._currentValue = s.parentValue;
    }
    function wl(s) {
      s.context._currentValue = s.value;
    }
    function vr(s, p) {
      if (s !== p) {
        ta(s);
        var E = s.parent, _ = p.parent;
        if (E === null) {
          if (_ !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (_ === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          vr(E, _);
        }
        wl(p);
      }
    }
    function io(s) {
      ta(s);
      var p = s.parent;
      p !== null && io(p);
    }
    function oo(s) {
      var p = s.parent;
      p !== null && oo(p), wl(s);
    }
    function ri(s, p) {
      ta(s);
      var E = s.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      E.depth === p.depth ? vr(E, p) : ri(E, p);
    }
    function Tl(s, p) {
      var E = p.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === E.depth ? vr(s, E) : Tl(s, E), wl(p);
    }
    function ai(s) {
      var p = ea, E = s;
      p !== E && (p === null ? oo(E) : E === null ? io(p) : p.depth === E.depth ? vr(p, E) : p.depth > E.depth ? ri(p, E) : Tl(p, E), ea = E);
    }
    function Ms(s, p) {
      var E;
      E = s._currentValue, s._currentValue = p, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Mr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Mr;
      var _ = ea, H = {
        parent: _,
        depth: _ === null ? 0 : _.depth + 1,
        context: s,
        parentValue: E,
        value: p
      };
      return ea = H, H;
    }
    function zs(s) {
      var p = ea;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== s && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var E = p.parentValue;
        E === $c ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Mr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Mr;
      }
      return ea = p.parent;
    }
    function lo() {
      return ea;
    }
    function ii(s) {
      var p = s._currentValue;
      return p;
    }
    function Cl(s) {
      return s._reactInternals;
    }
    function Wc(s, p) {
      s._reactInternals = p;
    }
    var Ca = {}, so = {}, Al, uo, co, oi, fo, Aa, li, po, La;
    {
      Al = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set();
      var ho = /* @__PURE__ */ new Set();
      Aa = function(s, p) {
        if (!(s === null || typeof s == "function")) {
          var E = p + "_" + s;
          ho.has(E) || (ho.add(E), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, s));
        }
      }, fo = function(s, p) {
        if (p === void 0) {
          var E = vn(s) || "Component";
          oi.has(E) || (oi.add(E), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", E));
        }
      };
    }
    function mo(s, p) {
      {
        var E = s.constructor, _ = E && vn(E) || "ReactClass", H = _ + "." + p;
        if (Ca[H])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, _), Ca[H] = !0;
      }
    }
    var yo = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, p, E) {
        var _ = Cl(s);
        _.queue === null ? mo(s, "setState") : (_.queue.push(p), E != null && Aa(E, "setState"));
      },
      enqueueReplaceState: function(s, p, E) {
        var _ = Cl(s);
        _.replace = !0, _.queue = [p], E != null && Aa(E, "setState");
      },
      enqueueForceUpdate: function(s, p) {
        var E = Cl(s);
        E.queue === null ? mo(s, "forceUpdate") : p != null && Aa(p, "setState");
      }
    };
    function Is(s, p, E, _, H) {
      var ne = E(H, _);
      fo(p, ne);
      var pe = ne == null ? _ : or({}, _, ne);
      return pe;
    }
    function $s(s, p, E) {
      var _ = Jr, H = s.contextType;
      if ("contextType" in s) {
        var ne = (
          // Allow null for conditional declaration
          H === null || H !== void 0 && H.$$typeof === Ji && H._context === void 0
        );
        if (!ne && !La.has(s)) {
          La.add(s);
          var pe = "";
          H === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof H != "object" ? pe = " However, it is set to a " + typeof H + "." : H.$$typeof === Qi ? pe = " Did you accidentally pass the Context.Provider instead?" : H._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(H).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", vn(s) || "Component", pe);
        }
      }
      typeof H == "object" && H !== null ? _ = ii(H) : _ = E;
      var Ce = new s(p, _);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Ce.state === null || Ce.state === void 0)) {
          var o = vn(s) || "Component";
          Al.has(o) || (Al.add(o), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Ce.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Ce.getSnapshotBeforeUpdate == "function") {
          var c = null, b = null, w = null;
          if (typeof Ce.componentWillMount == "function" && Ce.componentWillMount.__suppressDeprecationWarning !== !0 ? c = "componentWillMount" : typeof Ce.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof Ce.componentWillReceiveProps == "function" && Ce.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof Ce.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof Ce.componentWillUpdate == "function" && Ce.componentWillUpdate.__suppressDeprecationWarning !== !0 ? w = "componentWillUpdate" : typeof Ce.UNSAFE_componentWillUpdate == "function" && (w = "UNSAFE_componentWillUpdate"), c !== null || b !== null || w !== null) {
            var M = vn(s) || "Component", Q = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            co.has(M) || (co.add(M), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, Q, c !== null ? `
  ` + c : "", b !== null ? `
  ` + b : "", w !== null ? `
  ` + w : ""));
          }
        }
      }
      return Ce;
    }
    function Bs(s, p, E) {
      {
        var _ = vn(p) || "Component", H = s.render;
        H || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", _) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", _)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", _), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", _), s.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", _), s.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", _), s.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", _), p.contextType && p.contextTypes && !po.has(p) && (po.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", _)), typeof s.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", _), p.prototype && p.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", vn(p) || "A pure component"), typeof s.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", _), typeof s.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", _), typeof s.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", _), typeof s.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", _);
        var ne = s.props !== E;
        s.props !== void 0 && ne && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", _, _), s.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", _, _), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !uo.has(p) && (uo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", vn(p))), typeof s.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", _), typeof s.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", _), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", _);
        var pe = s.state;
        pe && (typeof pe != "object" || $(pe)) && a("%s.state: must be set to an object or null", _), typeof s.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", _);
      }
    }
    function Vc(s, p) {
      var E = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var _ = vn(s) || "Unknown";
          so[_] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            _
          ), so[_] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), E !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vn(s) || "Component"), yo.enqueueReplaceState(p, p.state, null));
    }
    function jc(s, p, E, _) {
      if (s.queue !== null && s.queue.length > 0) {
        var H = s.queue, ne = s.replace;
        if (s.queue = null, s.replace = !1, ne && H.length === 1)
          p.state = H[0];
        else {
          for (var pe = ne ? H[0] : p.state, Ce = !0, o = ne ? 1 : 0; o < H.length; o++) {
            var c = H[o], b = typeof c == "function" ? c.call(p, pe, E, _) : c;
            b != null && (Ce ? (Ce = !1, pe = or({}, pe, b)) : or(pe, b));
          }
          p.state = pe;
        }
      } else
        s.queue = null;
    }
    function Hs(s, p, E, _) {
      Bs(s, p, E);
      var H = s.state !== void 0 ? s.state : null;
      s.updater = yo, s.props = E, s.state = H;
      var ne = {
        queue: [],
        replace: !1
      };
      Wc(s, ne);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? s.context = ii(pe) : s.context = _, s.state === E) {
        var Ce = vn(p) || "Component";
        li.has(Ce) || (li.add(Ce), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ce));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (s.state = Is(s, p, o, H, E)), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (Vc(p, s), jc(ne, s, E, _));
    }
    var Uc = {
      id: 1,
      overflow: ""
    };
    function Kc(s) {
      var p = s.overflow, E = s.id, _ = E & ~Yc(E);
      return _.toString(32) + p;
    }
    function go(s, p, E) {
      var _ = s.id, H = s.overflow, ne = vo(_) - 1, pe = _ & ~(1 << ne), Ce = E + 1, o = vo(p) + ne;
      if (o > 30) {
        var c = ne - ne % 5, b = (1 << c) - 1, w = (pe & b).toString(32), M = pe >> c, Q = ne - c, fe = vo(p) + Q, Te = Ce << Q, He = Te | M, tt = w + H;
        return {
          id: 1 << fe | He,
          overflow: tt
        };
      } else {
        var lt = Ce << ne, Tt = lt | pe, fn = H;
        return {
          id: 1 << o | Tt,
          overflow: fn
        };
      }
    }
    function vo(s) {
      return 32 - Ll(s);
    }
    function Yc(s) {
      return 1 << vo(s) - 1;
    }
    var Ll = Math.clz32 ? Math.clz32 : qc, xo = Math.log, Xc = Math.LN2;
    function qc(s) {
      var p = s >>> 0;
      return p === 0 ? 32 : 31 - (xo(p) / Xc | 0) | 0;
    }
    function Gc(s, p) {
      return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
    }
    var Zc = typeof Object.is == "function" ? Object.is : Gc, Cr = null, Pl = null, bo = null, $t = null, na = !1, ra = !1, Qt = 0, lr = null, aa = 0, So = 25, On = !1, Ar;
    function ia() {
      if (Cr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return On && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Cr;
    }
    function xr(s, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ar), !1;
      s.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Ar, "[" + s.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var E = 0; E < p.length && E < s.length; E++)
        if (!Zc(s[E], p[E]))
          return !1;
      return !0;
    }
    function oa() {
      if (aa > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Lr() {
      return $t === null ? bo === null ? (na = !1, bo = $t = oa()) : (na = !0, $t = bo) : $t.next === null ? (na = !1, $t = $t.next = oa()) : (na = !0, $t = $t.next), $t;
    }
    function Qc(s, p) {
      Cr = p, Pl = s, On = !1, Qt = 0;
    }
    function Ws(s, p, E, _) {
      for (; ra; )
        ra = !1, Qt = 0, aa += 1, $t = null, E = s(p, _);
      return Rl(), E;
    }
    function Eo() {
      var s = Qt !== 0;
      return s;
    }
    function Rl() {
      On = !1, Cr = null, Pl = null, ra = !1, bo = null, aa = 0, lr = null, $t = null;
    }
    function Jc(s) {
      return On && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ii(s);
    }
    function Vs(s) {
      return Ar = "useContext", ia(), ii(s);
    }
    function si(s, p) {
      return typeof p == "function" ? p(s) : p;
    }
    function ed(s) {
      return Ar = "useState", js(
        si,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function js(s, p, E) {
      if (s !== si && (Ar = "useReducer"), Cr = ia(), $t = Lr(), na) {
        var _ = $t.queue, H = _.dispatch;
        if (lr !== null) {
          var ne = lr.get(_);
          if (ne !== void 0) {
            lr.delete(_);
            var pe = $t.memoizedState, Ce = ne;
            do {
              var o = Ce.action;
              On = !0, pe = s(pe, o), On = !1, Ce = Ce.next;
            } while (Ce !== null);
            return $t.memoizedState = pe, [pe, H];
          }
        }
        return [$t.memoizedState, H];
      } else {
        On = !0;
        var c;
        s === si ? c = typeof p == "function" ? p() : p : c = E !== void 0 ? E(p) : p, On = !1, $t.memoizedState = c;
        var b = $t.queue = {
          last: null,
          dispatch: null
        }, w = b.dispatch = Ks.bind(null, Cr, b);
        return [$t.memoizedState, w];
      }
    }
    function ko(s, p) {
      Cr = ia(), $t = Lr();
      var E = p === void 0 ? null : p;
      if ($t !== null) {
        var _ = $t.memoizedState;
        if (_ !== null && E !== null) {
          var H = _[1];
          if (xr(E, H))
            return _[0];
        }
      }
      On = !0;
      var ne = s();
      return On = !1, $t.memoizedState = [ne, E], ne;
    }
    function td(s) {
      Cr = ia(), $t = Lr();
      var p = $t.memoizedState;
      if (p === null) {
        var E = {
          current: s
        };
        return Object.seal(E), $t.memoizedState = E, E;
      } else
        return p;
    }
    function Us(s, p) {
      Ar = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ks(s, p, E) {
      if (aa >= So)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (s === Cr) {
        ra = !0;
        var _ = {
          action: E,
          next: null
        };
        lr === null && (lr = /* @__PURE__ */ new Map());
        var H = lr.get(p);
        if (H === void 0)
          lr.set(p, _);
        else {
          for (var ne = H; ne.next !== null; )
            ne = ne.next;
          ne.next = _;
        }
      }
    }
    function nd(s, p) {
      return ko(function() {
        return s;
      }, p);
    }
    function rd(s, p, E) {
      return ia(), p(s._source);
    }
    function ad(s, p, E) {
      if (E === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return E();
    }
    function id(s) {
      return ia(), s;
    }
    function od() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ld() {
      return ia(), [!1, od];
    }
    function sd() {
      var s = Pl, p = Kc(s.treeContext), E = Nl;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var _ = Qt++;
      return kn(E, p, _);
    }
    function wo() {
    }
    var Ys = {
      readContext: Jc,
      useContext: Vs,
      useMemo: ko,
      useReducer: js,
      useRef: td,
      useState: ed,
      useInsertionEffect: wo,
      useLayoutEffect: Us,
      useCallback: nd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: wo,
      // Effects are not run in the server environment.
      useEffect: wo,
      // Debugging effect
      useDebugValue: wo,
      useDeferredValue: id,
      useTransition: ld,
      useId: sd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: rd,
      useSyncExternalStore: ad
    }, Nl = null;
    function ui(s) {
      Nl = s;
    }
    function Xs(s) {
      try {
        var p = "", E = s;
        do {
          switch (E.tag) {
            case 0:
              p += Ja(E.type, null, null);
              break;
            case 1:
              p += Ds(E.type, null, null);
              break;
            case 2:
              p += ro(E.type, null, null);
              break;
          }
          E = E.parent;
        } while (E);
        return p;
      } catch (_) {
        return `
Error generating stack: ` + _.message + `
` + _.stack;
      }
    }
    var ci = n.ReactCurrentDispatcher, To = n.ReactDebugCurrentFrame, _l = 0, zr = 1, Co = 2, Ao = 3, la = 4, qs = 0, Dl = 1, sa = 2, ud = 12800;
    function Gs(s) {
      return console.error(s), null;
    }
    function br() {
    }
    function cd(s, p, E, _, H, ne, pe, Ce, o) {
      var c = [], b = /* @__PURE__ */ new Set(), w = {
        destination: null,
        responseState: p,
        progressiveChunkSize: _ === void 0 ? ud : _,
        status: qs,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: b,
        pingedTasks: c,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: H === void 0 ? Gs : H,
        onAllReady: ne === void 0 ? br : ne,
        onShellReady: pe === void 0 ? br : pe,
        onShellError: Ce === void 0 ? br : Ce,
        onFatalError: o === void 0 ? br : o
      }, M = Lo(
        w,
        0,
        null,
        E,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      M.parentFlushed = !0;
      var Q = Ol(w, s, null, M, b, Jr, Fs, Uc);
      return c.push(Q), w;
    }
    function dd(s, p) {
      var E = s.pingedTasks;
      E.push(p), E.length === 1 && f(function() {
        return yi(s);
      });
    }
    function di(s, p) {
      return {
        id: En,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: p,
        errorDigest: null
      };
    }
    function Ol(s, p, E, _, H, ne, pe, Ce) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return dd(s, o);
        },
        blockedBoundary: E,
        blockedSegment: _,
        abortSet: H,
        legacyContext: ne,
        context: pe,
        treeContext: Ce
      };
      return o.componentStack = null, H.add(o), o;
    }
    function Lo(s, p, E, _, H, ne) {
      return {
        status: _l,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: _,
        boundary: E,
        lastPushedText: H,
        textEmbedded: ne
      };
    }
    var Pr = null;
    function fi() {
      return Pr === null || Pr.componentStack === null ? "" : Xs(Pr.componentStack);
    }
    function Ir(s, p) {
      s.componentStack = {
        tag: 0,
        parent: s.componentStack,
        type: p
      };
    }
    function Sr(s, p) {
      s.componentStack = {
        tag: 1,
        parent: s.componentStack,
        type: p
      };
    }
    function Fl(s, p) {
      s.componentStack = {
        tag: 2,
        parent: s.componentStack,
        type: p
      };
    }
    function sr(s) {
      s.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : s.componentStack = s.componentStack.parent;
    }
    var Pa = null;
    function Ml(s, p) {
      {
        var E;
        typeof p == "string" ? E = p : p && typeof p.message == "string" ? E = p.message : E = String(p);
        var _ = Pa || fi();
        Pa = null, s.errorMessage = E, s.errorComponentStack = _;
      }
    }
    function ur(s, p) {
      var E = s.onError(p);
      if (E != null && typeof E != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof E + '" instead');
      return E;
    }
    function $r(s, p) {
      var E = s.onShellError;
      E(p);
      var _ = s.onFatalError;
      _(p), s.destination !== null ? (s.status = sa, O(s.destination, p)) : (s.status = Dl, s.fatalError = p);
    }
    function zl(s, p, E) {
      Ir(p, "Suspense");
      var _ = p.blockedBoundary, H = p.blockedSegment, ne = E.fallback, pe = E.children, Ce = /* @__PURE__ */ new Set(), o = di(s, Ce), c = H.chunks.length, b = Lo(
        s,
        c,
        o,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      H.children.push(b), H.lastPushedText = !1;
      var w = Lo(
        s,
        0,
        null,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      w.parentFlushed = !0, p.blockedBoundary = o, p.blockedSegment = w;
      try {
        if (Kl(s, p, pe), Xn(w.chunks, s.responseState, w.lastPushedText, w.textEmbedded), w.status = zr, No(o, w), o.pendingTasks === 0) {
          sr(p);
          return;
        }
      } catch (Q) {
        w.status = la, o.forceClientRender = !0, o.errorDigest = ur(s, Q), Ml(o, Q);
      } finally {
        p.blockedBoundary = _, p.blockedSegment = H;
      }
      var M = Ol(s, ne, _, b, Ce, p.legacyContext, p.context, p.treeContext);
      M.componentStack = p.componentStack, s.pingedTasks.push(M), sr(p);
    }
    function pi(s, p, E, _) {
      Ir(p, E);
      var H = p.blockedSegment, ne = Va(H.chunks, E, _, s.responseState, H.formatContext);
      H.lastPushedText = !1;
      var pe = H.formatContext;
      H.formatContext = Zt(pe, E, _), Kl(s, p, ne), H.formatContext = pe, Bi(H.chunks, E), H.lastPushedText = !1, sr(p);
    }
    function Po(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function Zs(s, p, E, _, H) {
      var ne = {};
      Qc(p, ne);
      var pe = E(_, H);
      return Ws(E, _, pe, H);
    }
    function Qs(s, p, E, _, H) {
      var ne = E.render();
      E.props !== H && (mi || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vn(_) || "a component"), mi = !0);
      {
        var pe = _.childContextTypes;
        if (pe != null) {
          var Ce = p.legacyContext, o = kl(E, _, Ce, pe);
          p.legacyContext = o, nr(s, p, ne), p.legacyContext = Ce;
          return;
        }
      }
      nr(s, p, ne);
    }
    function fd(s, p, E, _) {
      Fl(p, E);
      var H = El(E, p.legacyContext), ne = $s(E, _, H);
      Hs(ne, E, _, H), Qs(s, p, ne, E, _), sr(p);
    }
    var Il = {}, hi = {}, Js = {}, $l = {}, mi = !1, Bl = !1, Hl = !1, Wl = !1;
    function eu(s, p, E, _) {
      var H;
      if (H = El(E, p.legacyContext), Sr(p, E), E.prototype && typeof E.prototype.render == "function") {
        var ne = vn(E) || "Unknown";
        Il[ne] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ne, ne), Il[ne] = !0);
      }
      var pe = Zs(s, p, E, _, H), Ce = Eo();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var o = vn(E) || "Unknown";
        hi[o] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", o, o, o), hi[o] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var c = vn(E) || "Unknown";
          hi[c] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", c, c, c), hi[c] = !0);
        }
        Hs(pe, E, _, H), Qs(s, p, pe, E, _);
      } else if (tu(E), Ce) {
        var b = p.treeContext, w = 1, M = 0;
        p.treeContext = go(b, w, M);
        try {
          nr(s, p, pe);
        } finally {
          p.treeContext = b;
        }
      } else
        nr(s, p, pe);
      sr(p);
    }
    function tu(s) {
      {
        if (s && s.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", s.displayName || s.name || "Component"), typeof s.getDerivedStateFromProps == "function") {
          var p = vn(s) || "Unknown";
          $l[p] || (a("%s: Function components do not support getDerivedStateFromProps.", p), $l[p] = !0);
        }
        if (typeof s.contextType == "object" && s.contextType !== null) {
          var E = vn(s) || "Unknown";
          Js[E] || (a("%s: Function components do not support contextType.", E), Js[E] = !0);
        }
      }
    }
    function Vl(s, p) {
      if (s && s.defaultProps) {
        var E = or({}, p), _ = s.defaultProps;
        for (var H in _)
          E[H] === void 0 && (E[H] = _[H]);
        return E;
      }
      return p;
    }
    function pd(s, p, E, _, H) {
      Sr(p, E.render);
      var ne = Zs(s, p, E.render, _, H), pe = Eo();
      if (pe) {
        var Ce = p.treeContext, o = 1, c = 0;
        p.treeContext = go(Ce, o, c);
        try {
          nr(s, p, ne);
        } finally {
          p.treeContext = Ce;
        }
      } else
        nr(s, p, ne);
      sr(p);
    }
    function hd(s, p, E, _, H) {
      var ne = E.type, pe = Vl(ne, _);
      jl(s, p, ne, pe, H);
    }
    function nu(s, p, E, _) {
      E._context === void 0 ? E !== E.Consumer && (Wl || (Wl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var H = _.children;
      typeof H != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ne = ii(E), pe = H(ne);
      nr(s, p, pe);
    }
    function md(s, p, E, _) {
      var H = E._context, ne = _.value, pe = _.children, Ce;
      Ce = p.context, p.context = Ms(H, ne), nr(s, p, pe), p.context = zs(H), Ce !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function yd(s, p, E, _, H) {
      Ir(p, "Lazy");
      var ne = E._payload, pe = E._init, Ce = pe(ne), o = Vl(Ce, _);
      jl(s, p, Ce, o, H), sr(p);
    }
    function jl(s, p, E, _, H) {
      if (typeof E == "function")
        if (Po(E)) {
          fd(s, p, E, _);
          return;
        } else {
          eu(s, p, E, _);
          return;
        }
      if (typeof E == "string") {
        pi(s, p, E, _);
        return;
      }
      switch (E) {
        case to:
        case cl:
        case As:
        case sl:
        case tr: {
          nr(s, p, _.children);
          return;
        }
        case Ga: {
          Ir(p, "SuspenseList"), nr(s, p, _.children), sr(p);
          return;
        }
        case ul:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case qa: {
          zl(s, p, _);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case eo: {
            pd(s, p, E, _, H);
            return;
          }
          case Za: {
            hd(s, p, E, _, H);
            return;
          }
          case Qi: {
            md(s, p, E, _);
            return;
          }
          case Ji: {
            nu(s, p, E, _);
            return;
          }
          case Ea: {
            yd(s, p, E, _);
            return;
          }
        }
      var ne = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + ne));
    }
    function gd(s, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Bl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bl = !0), s.entries === p && (Hl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hl = !0);
    }
    function nr(s, p, E) {
      try {
        return Ul(s, p, E);
      } catch (_) {
        throw typeof _ == "object" && _ !== null && typeof _.then == "function" || (Pa = Pa !== null ? Pa : fi()), _;
      }
    }
    function Ul(s, p, E) {
      if (p.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ic: {
            var _ = E, H = _.type, ne = _.props, pe = _.ref;
            jl(s, p, H, ne, pe);
            return;
          }
          case Cs:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ea: {
            var Ce = E, o = Ce._payload, c = Ce._init, b;
            try {
              b = c(o);
            } catch (lt) {
              throw typeof lt == "object" && lt !== null && typeof lt.then == "function" && Ir(p, "Lazy"), lt;
            }
            nr(s, p, b);
            return;
          }
        }
        if ($(E)) {
          ru(s, p, E);
          return;
        }
        var w = Hc(E);
        if (w) {
          gd(E, w);
          var M = w.call(E);
          if (M) {
            var Q = M.next();
            if (!Q.done) {
              var fe = [];
              do
                fe.push(Q.value), Q = M.next();
              while (!Q.done);
              ru(s, p, fe);
              return;
            }
            return;
          }
        }
        var Te = Object.prototype.toString.call(E);
        throw new Error("Objects are not valid as a React child (found: " + (Te === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Te) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof E == "string") {
        var He = p.blockedSegment;
        He.lastPushedText = Zn(p.blockedSegment.chunks, E, s.responseState, He.lastPushedText);
        return;
      }
      if (typeof E == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = Zn(p.blockedSegment.chunks, "" + E, s.responseState, tt.lastPushedText);
        return;
      }
      typeof E == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ru(s, p, E) {
      for (var _ = E.length, H = 0; H < _; H++) {
        var ne = p.treeContext;
        p.treeContext = go(ne, _, H);
        try {
          Kl(s, p, E[H]);
        } finally {
          p.treeContext = ne;
        }
      }
    }
    function rr(s, p, E) {
      var _ = p.blockedSegment, H = _.chunks.length, ne = Lo(
        s,
        H,
        null,
        _.formatContext,
        // Adopt the parent segment's leading text embed
        _.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      _.children.push(ne), _.lastPushedText = !1;
      var pe = Ol(s, p.node, p.blockedBoundary, ne, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var Ce = pe.ping;
      E.then(Ce, Ce);
    }
    function Kl(s, p, E) {
      var _ = p.blockedSegment.formatContext, H = p.legacyContext, ne = p.context, pe = null;
      pe = p.componentStack;
      try {
        return nr(s, p, E);
      } catch (Ce) {
        if (Rl(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
          rr(s, p, Ce), p.blockedSegment.formatContext = _, p.legacyContext = H, p.context = ne, ai(ne), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = _, p.legacyContext = H, p.context = ne, ai(ne), p.componentStack = pe, Ce;
      }
    }
    function au(s, p, E, _) {
      var H = ur(s, _);
      if (p === null ? $r(s, _) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = H, Ml(p, _), p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var ne = s.onAllReady;
        ne();
      }
    }
    function vd(s) {
      var p = this, E = s.blockedBoundary, _ = s.blockedSegment;
      _.status = Ao, iu(p, E, _);
    }
    function Ro(s, p, E) {
      var _ = s.blockedBoundary, H = s.blockedSegment;
      if (H.status = Ao, _ === null)
        p.allPendingTasks--, p.status !== sa && (p.status = sa, p.destination !== null && k(p.destination));
      else {
        if (_.pendingTasks--, !_.forceClientRender) {
          _.forceClientRender = !0;
          var ne = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          _.errorDigest = p.onError(ne);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            ne && typeof ne.message == "string" ? ne = pe + ne.message : ne = pe + String(ne);
            var Ce = Pr;
            Pr = s;
            try {
              Ml(_, ne);
            } finally {
              Pr = Ce;
            }
          }
          _.parentFlushed && p.clientRenderedBoundaries.push(_);
        }
        if (_.fallbackAbortableTasks.forEach(function(c) {
          return Ro(c, p, E);
        }), _.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var o = p.onAllReady;
          o();
        }
      }
    }
    function No(s, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var E = p.children[0];
        E.id = p.id, E.parentFlushed = !0, E.status === zr && No(s, E);
      } else {
        var _ = s.completedSegments;
        _.push(p);
      }
    }
    function iu(s, p, E) {
      if (p === null) {
        if (E.parentFlushed) {
          if (s.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          s.completedRootSegment = E;
        }
        if (s.pendingRootTasks--, s.pendingRootTasks === 0) {
          s.onShellError = br;
          var _ = s.onShellReady;
          _();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          E.parentFlushed && E.status === zr && No(p, E), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(vd, s), p.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === zr) {
          No(p, E);
          var H = p.completedSegments;
          H.length === 1 && p.parentFlushed && s.partialBoundaries.push(p);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var ne = s.onAllReady;
        ne();
      }
    }
    function ou(s, p) {
      var E = p.blockedSegment;
      if (E.status === _l) {
        ai(p.context);
        var _ = null;
        _ = Pr, Pr = p;
        try {
          nr(s, p, p.node), Xn(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), p.abortSet.delete(p), E.status = zr, iu(s, p.blockedBoundary, E);
        } catch (ne) {
          if (Rl(), typeof ne == "object" && ne !== null && typeof ne.then == "function") {
            var H = p.ping;
            ne.then(H, H);
          } else
            p.abortSet.delete(p), E.status = la, au(s, p.blockedBoundary, E, ne);
        } finally {
          Pr = _;
        }
      }
    }
    function yi(s) {
      if (s.status !== sa) {
        var p = lo(), E = ci.current;
        ci.current = Ys;
        var _;
        _ = To.getCurrentStack, To.getCurrentStack = fi;
        var H = Nl;
        ui(s.responseState);
        try {
          var ne = s.pingedTasks, pe;
          for (pe = 0; pe < ne.length; pe++) {
            var Ce = ne[pe];
            ou(s, Ce);
          }
          ne.splice(0, pe), s.destination !== null && Do(s, s.destination);
        } catch (o) {
          ur(s, o), $r(s, o);
        } finally {
          ui(H), ci.current = E, To.getCurrentStack = _, E === Ys && ai(p);
        }
      }
    }
    function gi(s, p, E) {
      switch (E.parentFlushed = !0, E.status) {
        case _l: {
          var _ = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, pa(p, s.responseState, _);
        }
        case zr: {
          E.status = Co;
          for (var H = !0, ne = E.chunks, pe = 0, Ce = E.children, o = 0; o < Ce.length; o++) {
            for (var c = Ce[o]; pe < c.index; pe++)
              v(p, ne[pe]);
            H = _o(s, p, c);
          }
          for (; pe < ne.length - 1; pe++)
            v(p, ne[pe]);
          return pe < ne.length && (H = S(p, ne[pe])), H;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function _o(s, p, E) {
      var _ = E.boundary;
      if (_ === null)
        return gi(s, p, E);
      if (_.parentFlushed = !0, _.forceClientRender)
        return jn(p, s.responseState, _.errorDigest, _.errorMessage, _.errorComponentStack), gi(s, p, E), rl(p, s.responseState);
      if (_.pendingTasks > 0) {
        _.rootSegmentID = s.nextSegmentId++, _.completedSegments.length > 0 && s.partialBoundaries.push(_);
        var H = _.id = un(s.responseState);
        return ya(p, s.responseState, H), gi(s, p, E), ga(p, s.responseState);
      } else {
        if (_.byteSize > s.progressiveChunkSize)
          return _.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(_), ya(p, s.responseState, _.id), gi(s, p, E), ga(p, s.responseState);
        Wi(p, s.responseState);
        var ne = _.completedSegments;
        if (ne.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = ne[0];
        return _o(s, p, pe), Vi(p, s.responseState);
      }
    }
    function lu(s, p, E) {
      return ws(p, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function vi(s, p, E) {
      return Pt(p, s.responseState, E.formatContext, E.id), _o(s, p, E), rn(p, E.formatContext);
    }
    function xi(s, p, E) {
      for (var _ = E.completedSegments, H = 0; H < _.length; H++) {
        var ne = _[H];
        Yl(s, p, E, ne);
      }
      return _.length = 0, al(p, s.responseState, E.id, E.rootSegmentID);
    }
    function xd(s, p, E) {
      for (var _ = E.completedSegments, H = 0; H < _.length; H++) {
        var ne = _[H];
        if (!Yl(s, p, E, ne))
          return H++, _.splice(0, H), !1;
      }
      return _.splice(0, H), !0;
    }
    function Yl(s, p, E, _) {
      if (_.status === Co)
        return !0;
      var H = _.id;
      if (H === -1) {
        var ne = _.id = E.rootSegmentID;
        if (ne === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return vi(s, p, _);
      } else
        return vi(s, p, _), Rc(p, s.responseState, H);
    }
    function Do(s, p) {
      y();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (_o(s, p, E), s.completedRootSegment = null, el(p, s.responseState));
        var _ = s.clientRenderedBoundaries, H;
        for (H = 0; H < _.length; H++) {
          var ne = _[H];
          lu(s, p, ne);
        }
        _.splice(0, H);
        var pe = s.completedBoundaries;
        for (H = 0; H < pe.length; H++) {
          var Ce = pe[H];
          xi(s, p, Ce);
        }
        pe.splice(0, H), R(p), y(p);
        var o = s.partialBoundaries;
        for (H = 0; H < o.length; H++) {
          var c = o[H];
          if (!xd(s, p, c)) {
            s.destination = null, H++, o.splice(0, H);
            return;
          }
        }
        o.splice(0, H);
        var b = s.completedBoundaries;
        for (H = 0; H < b.length; H++) {
          var w = b[H];
          xi(s, p, w);
        }
        b.splice(0, H);
      } finally {
        R(p), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(p));
      }
    }
    function bd(s) {
      f(function() {
        return yi(s);
      });
    }
    function su(s, p) {
      if (s.status === Dl) {
        s.status = sa, O(p, s.fatalError);
        return;
      }
      if (s.status !== sa && s.destination === null) {
        s.destination = p;
        try {
          Do(s, p);
        } catch (E) {
          ur(s, E), $r(s, E);
        }
      }
    }
    function Oo(s, p) {
      try {
        var E = s.abortableTasks;
        E.forEach(function(_) {
          return Ro(_, s, p);
        }), E.clear(), s.destination !== null && Do(s, s.destination);
      } catch (_) {
        ur(s, _), $r(s, _);
      }
    }
    function Sd(s, p) {
      return new Promise(function(E, _) {
        var H, ne, pe = new Promise(function(M, Q) {
          ne = M, H = Q;
        });
        function Ce() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(Q) {
                su(c, Q);
              },
              cancel: function(Q) {
                Oo(c);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          M.allReady = pe, E(M);
        }
        function o(M) {
          pe.catch(function() {
          }), _(M);
        }
        var c = cd(s, Kt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), nn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ne, Ce, o, H);
        if (p && p.signal) {
          var b = p.signal, w = function() {
            Oo(c, b.reason), b.removeEventListener("abort", w);
          };
          b.addEventListener("abort", w);
        }
        bd(c);
      });
    }
    Cu.renderToReadableStream = Sd, Cu.version = t;
  }()), Cu;
}
var Fi, bf;
process.env.NODE_ENV === "production" ? (Fi = $S(), bf = BS()) : (Fi = HS(), bf = WS());
$a.version = Fi.version;
$a.renderToString = Fi.renderToString;
$a.renderToStaticMarkup = Fi.renderToStaticMarkup;
$a.renderToNodeStream = Fi.renderToNodeStream;
$a.renderToStaticNodeStream = Fi.renderToStaticNodeStream;
$a.renderToReadableStream = bf.renderToReadableStream;
const VS = ({ width: e, height: t, runtime: n }) => {
  var ye, Le;
  const { config: i } = de.useContext(Ct), { sankey: a } = i, l = (ae) => ae.visualizationType === "Sankey", [f, d] = de.useState(0), u = de.useRef([]), [h, y] = de.useState(""), v = (ae) => {
    y(ae);
  }, S = () => {
    y("");
  }, [R, k] = de.useState(!1);
  de.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && k(!0);
  }, [window.innerWidth]);
  const F = () => {
    k(!1);
  };
  if (de.useEffect(() => {
    var Ie;
    let ae = 0;
    (Ie = u == null ? void 0 : u.current) == null || Ie.map((Ee) => {
      const he = Ee == null ? void 0 : Ee.getBoundingClientRect().width;
      he > ae && (ae = he);
    }), d(ae);
  }, [u, a, window.innerWidth]), !l(i))
    return;
  const T = i == null ? void 0 : i.data[0], m = Array.from(new Set((ye = T == null ? void 0 : T.links) == null ? void 0 : ye.flatMap((ae) => [ae.source, ae.target]))), O = {
    nodes: m.map((ae) => ({ id: ae })),
    links: (Le = T == null ? void 0 : T.links) == null ? void 0 : Le.map((ae) => ({
      source: m.findIndex((Ie) => Ie === ae.source),
      target: m.findIndex((Ie) => Ie === ae.target),
      value: ae.value
    }))
  };
  let N = 5;
  const P = 50, D = FS().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(RS).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - N - f, i.heights.vertical - P]
  ]), { nodes: L, links: U } = D(O), W = (ae) => {
    var ee;
    let Ie = 30, Ee = 0, he = "node-value--storynode", Pe = !0;
    return (ee = T == null ? void 0 : T.storyNodeText) != null && ee.every((De) => De.StoryNode !== ae) && (Pe = !1, Ee = 10, Ie = 8, he = "node-value"), { textPositionHorizontal: Ie, textPositionVertical: Ee, classStyle: he, storyNodes: Pe };
  }, Z = (ae) => {
    const Ie = O.nodes.find((Pe) => Pe.id === ae), Ee = [], he = [];
    return Ie && (U.forEach((Pe) => {
      const ee = Pe.target, De = Pe.source;
      ee.id === ae && Ee.push(De.id);
    }), Ee.forEach((Pe) => {
      U.forEach((ee) => {
        const De = ee.target, we = ee.source;
        De.id === h && we.id === Pe && he.push(ee);
      });
    })), { sourceNodes: Ee, activeLinks: he };
  }, ce = `${((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).value}`, te = `${((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).summary}`, V = ((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).column1Label, K = ((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).column2Label, X = ((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).column1, B = ((T == null ? void 0 : T.tooltips.find((ae) => ae.node === h)) || {}).column2, oe = ({ columnData: ae }) => /* @__PURE__ */ r.createElement("ul", null, ae == null ? void 0 : ae.map((Ie, Ee) => /* @__PURE__ */ r.createElement("li", { key: Ee }, Ie.label, ": ", Ie.value, " (", Ie.additional_info, "%)"))), re = $a.renderToString(/* @__PURE__ */ r.createElement(oe, { columnData: X })), le = $a.renderToString(/* @__PURE__ */ r.createElement(oe, { columnData: B })), G = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${h}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${ce}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${te}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${V}<strong></span>
                          ${re}
                        </div>
                        <div>
                          <span><strong>${K}<strong></span>
                          ${le}
                        </div>
                      </div>
                    </div>`, j = O.nodes.map((ae, Ie) => {
    var Ge, et;
    let { textPositionHorizontal: Ee, textPositionVertical: he, classStyle: Pe, storyNodes: ee } = W(ae.id), { sourceNodes: De } = Z(h), we = a.opacity.nodeOpacityDefault, Ue = a.nodeColor.default;
    return h !== ae.id && h !== "" && !De.includes(ae.id) && (Ue = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ie }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: ae.y1 - ae.y0 + 2,
        width: D.nodeWidth(),
        x: ae.x0,
        y: ae.y0 - 1,
        fill: Ue,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => v(ae.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), ee ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        x: ae.x0 + Ee,
        textAnchor: O.nodes.length - 1 === Ie ? "end" : "start",
        verticalAnchor: "end",
        y: (ae.y1 + ae.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.id),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((Ge = T == null ? void 0 : T.storyNodeText) == null ? void 0 : Ge.find((Je) => Je.StoryNode === ae.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(
      kt,
      {
        verticalAnchor: "end",
        className: Pe,
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0 + 25) / 2,
        fill: a.storyNodeFontColor || a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.id),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      typeof ae.value == "number" ? ae.value.toLocaleString() : ae.value
    ), /* @__PURE__ */ r.createElement(
      kt,
      {
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: O.nodes.length === Ie ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.id),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((et = T == null ? void 0 : T.storyNodeText) == null ? void 0 : et.find((Je) => Je.StoryNode === ae.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.id),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0) / 2 + he,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      ae.id
    ), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.id),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      /* @__PURE__ */ r.createElement("tspan", { className: Pe }, a.nodeValueStyle.textBefore + (typeof ae.value == "number" ? ae.value.toLocaleString() : ae.value) + a.nodeValueStyle.textAfter)
    )));
  }), J = U.map((ae, Ie) => {
    const he = IS()(ae);
    let Pe = a.opacity.LinkOpacityDefault, ee = a.linkColor.default, { activeLinks: De } = Z(h);
    return !De.includes(ae) && h !== "" && (ee = a.linkColor.inactive, Pe = a.opacity.LinkOpacityInactive), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: Ie,
        d: he,
        stroke: ee,
        fill: "none",
        strokeOpacity: Pe,
        strokeWidth: ae.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(ae.target.id || null),
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      }
    );
  }), ue = O.nodes.reduce((ae, Ie) => Math.max(ae, Ie.depth), -1), be = O.nodes.filter((ae) => ae.depth === ue).map((ae, Ie) => {
    var Ge, et;
    let { textPositionHorizontal: Ee, textPositionVertical: he, classStyle: Pe, storyNodes: ee } = W(ae.id), { sourceNodes: De } = Z(h), we = a.opacity.nodeOpacityDefault, Ue = a.nodeColor.default;
    return h !== ae.id && h !== "" && !De.includes(ae.id) && (Ue = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ie, innerRef: (Je) => u.current[Ie] = Je }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: ae.y1 - ae.y0 + 2,
        width: D.nodeWidth(),
        x: ae.x0,
        y: ae.y0 - 1,
        fill: Ue,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": T.tooltips && i.enableTooltips ? G : null,
        "data-tooltip-id": "tooltip",
        onClick: () => v(ae.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), ee ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        x: ae.x0 + Ee,
        textAnchor: O.nodes.length - 1 === Ie ? "end" : "start",
        verticalAnchor: "end",
        y: (ae.y1 + ae.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ge = T == null ? void 0 : T.storyNodeText) == null ? void 0 : Ge.find((Je) => Je.StoryNode === ae.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(kt, { verticalAnchor: "end", className: Pe, x: ae.x0 + Ee, y: (ae.y1 + ae.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof ae.value == "number" ? ae.value.toLocaleString() : ae.value), /* @__PURE__ */ r.createElement(
      kt,
      {
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: O.nodes.length === Ie ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((et = T == null ? void 0 : T.storyNodeText) == null ? void 0 : et.find((Je) => Je.StoryNode === ae.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("text", { x: ae.x0 + Ee, y: (ae.y1 + ae.y0) / 2 + he, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ r.createElement("tspan", { id: ae.id, className: "node-id" }, ae.id)), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: ae.x0 + Ee,
        y: (ae.y1 + ae.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ r.createElement("tspan", { onClick: () => v(ae.id), className: Pe }, a.nodeValueStyle.textBefore + (typeof ae.value == "number" ? ae.value.toLocaleString() : ae.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ r.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(i.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ r.createElement(at, { className: "links" }, J), /* @__PURE__ */ r.createElement(at, { className: "nodes" }, j), /* @__PURE__ */ r.createElement(at, { className: "finalNodes", style: { display: "none" } }, be)), /* @__PURE__ */ r.createElement(Sy, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => S(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), R && /* @__PURE__ */ r.createElement("div", { className: "popup" }, /* @__PURE__ */ r.createElement("div", { className: "popup-content" }, /* @__PURE__ */ r.createElement("button", { className: "visually-hidden", onClick: F }, "Select for accessible version."), /* @__PURE__ */ r.createElement("p", null, /* @__PURE__ */ r.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var jS = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = jS;
function US(e) {
  var t = e.labelOffset, n = e.labelProps, i = e.orientation, a = e.range, l = e.tickLabelFontSize, f = e.tickLength, d = i === ir.left || i === ir.top ? -1 : 1, u, h, y;
  if (i === ir.top || i === ir.bottom) {
    var v = i === ir.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    u = (Number(a[0]) + Number(a[a.length - 1])) / 2, h = d * (f + t + l + v);
  } else
    u = d * ((Number(a[0]) + Number(a[a.length - 1])) / 2), h = -(f + t), y = "rotate(" + d * 90 + ")";
  return {
    x: u,
    y: h,
    transform: y
  };
}
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, cs.apply(this, arguments);
}
function KS(e) {
  var t = e.hideTicks, n = e.horizontal, i = e.orientation, a = e.tickClassName, l = e.tickComponent, f = e.tickLabelProps, d = e.tickStroke, u = d === void 0 ? "#222" : d, h = e.tickTransform, y = e.ticks, v = e.strokeWidth, S = e.tickLineProps;
  return y.map(function(R) {
    var k, F = R.value, T = R.index, m = R.from, O = R.to, N = R.formattedValue, P = (k = f[T]) != null ? k : {}, D = Math.max(10, typeof P.fontSize == "number" && P.fontSize || 0), L = O.y + (n && i !== ir.top ? D : 0);
    return /* @__PURE__ */ r.createElement(at, {
      key: "visx-tick-" + F + "-" + T,
      className: Ln("visx-axis-tick", a),
      transform: h
    }, !t && /* @__PURE__ */ r.createElement(an, cs({
      from: m,
      to: O,
      stroke: u,
      strokeWidth: v,
      strokeLinecap: "square"
    }, S)), l ? l(cs({}, P, {
      x: O.x,
      y: L,
      formattedValue: N
    })) : /* @__PURE__ */ r.createElement(kt, cs({
      x: O.x,
      y: L
    }, P), N));
  });
}
function uc() {
  return uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, uc.apply(this, arguments);
}
var Nh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function YS(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, i = e.axisToPoint, a = e.hideAxisLine, l = e.hideTicks, f = e.horizontal, d = e.label, u = d === void 0 ? "" : d, h = e.labelClassName, y = e.labelOffset, v = y === void 0 ? 14 : y, S = e.labelProps, R = S === void 0 ? Nh : S, k = e.orientation, F = k === void 0 ? ir.bottom : k, T = e.scale, m = e.stroke, O = m === void 0 ? "#222" : m, N = e.strokeDasharray, P = e.strokeWidth, D = P === void 0 ? 1 : P, L = e.tickClassName, U = e.tickComponent, W = e.tickLineProps, Z = e.tickLabelProps, ce = e.tickLength, te = ce === void 0 ? 8 : ce, V = e.tickStroke, K = V === void 0 ? "#222" : V, X = e.tickTransform, B = e.ticks, oe = e.ticksComponent, re = oe === void 0 ? KS : oe, le = uc({}, Nh, typeof Z == "object" ? Z : null), G = B.map(function(J) {
    var ue = J.value, _e = J.index;
    return typeof Z == "function" ? Z(ue, _e, B) : le;
  }), j = Math.max.apply(Math, [10].concat(G.map(function(J) {
    return typeof J.fontSize == "number" ? J.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, re({
    hideTicks: l,
    horizontal: f,
    orientation: F,
    scale: T,
    tickClassName: L,
    tickComponent: U,
    tickLabelProps: G,
    tickStroke: K,
    tickTransform: X,
    ticks: B,
    strokeWidth: D,
    tickLineProps: W
  }), !a && /* @__PURE__ */ r.createElement(an, {
    className: Ln("visx-axis-line", n),
    from: t,
    to: i,
    stroke: O,
    strokeWidth: D,
    strokeDasharray: N
  }), u && /* @__PURE__ */ r.createElement(kt, uc({
    className: Ln("visx-axis-label", h)
  }, US({
    labelOffset: v,
    labelProps: R,
    orientation: F,
    range: T.range(),
    tickLabelFontSize: j,
    tickLength: te
  }), R), u));
}
function XS(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var i = n.bandwidth();
    return t === "center" && (i /= 2), n.round() && (i = Math.round(i)), function(a) {
      var l = n(a);
      return typeof l == "number" ? l + i : l;
    };
  }
  return e;
}
function qS(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Wg;
}
function Au(e, t) {
  var n = e.x, i = e.y;
  return new pf(t ? {
    x: n,
    y: i
  } : {
    x: i,
    y: n
  });
}
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Sf.apply(this, arguments);
}
var Wd = 0;
function GS(e) {
  return e === void 0 && (e = Wd), typeof e == "number" ? {
    start: e,
    end: e
  } : Sf({
    start: Wd,
    end: Wd
  }, e);
}
var ZS = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function QS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wc(e) {
  var t = e.children, n = t === void 0 ? YS : t, i = e.axisClassName, a = e.hideAxisLine, l = a === void 0 ? !1 : a, f = e.hideTicks, d = f === void 0 ? !1 : f, u = e.hideZero, h = u === void 0 ? !1 : u, y = e.innerRef, v = e.left, S = v === void 0 ? 0 : v, R = e.numTicks, k = R === void 0 ? 10 : R, F = e.orientation, T = F === void 0 ? ir.bottom : F, m = e.rangePadding, O = m === void 0 ? 0 : m, N = e.scale, P = e.tickFormat, D = e.tickLength, L = D === void 0 ? 8 : D, U = e.tickValues, W = e.top, Z = W === void 0 ? 0 : W, ce = QS(e, ZS), te = P ?? qS(N), V = T === ir.left, K = T === ir.top, X = K || T === ir.bottom, B = XS(N), oe = V || K ? -1 : 1, re = N.range(), le = GS(O), G = Au({
    x: Number(re[0]) + 0.5 - le.start,
    y: 0
  }, X), j = Au({
    x: Number(re[re.length - 1]) + 0.5 + le.end,
    y: 0
  }, X), J = (U ?? Hg(N, k)).filter(function(_e) {
    return !h || _e !== 0 && _e !== "0";
  }).map(function(_e, be) {
    return {
      value: _e,
      index: be
    };
  }), ue = J.map(function(_e) {
    var be = _e.value, ye = _e.index, Le = Bg(B(be));
    return {
      value: be,
      index: ye,
      from: Au({
        x: Le,
        y: 0
      }, X),
      to: Au({
        x: Le,
        y: L * oe
      }, X),
      formattedValue: te(be, ye, J)
    };
  });
  return /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-axis", i),
    innerRef: y,
    top: Z,
    left: S
  }, n(Ef({}, ce, {
    axisFromPoint: G,
    axisToPoint: j,
    hideAxisLine: l,
    hideTicks: d,
    hideZero: h,
    horizontal: X,
    numTicks: k,
    orientation: T,
    rangePadding: O,
    scale: N,
    tickFormat: te,
    tickLength: L,
    tickPosition: B,
    tickSign: oe,
    ticks: ue
  })));
}
var JS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function eE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var tE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function nE(e) {
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 36 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = eE(e, JS), u = typeof f == "function" ? f : cc({}, tE, f);
  return /* @__PURE__ */ r.createElement(wc, cc({
    axisClassName: Ln("visx-axis-left", t),
    labelOffset: i,
    orientation: ir.left,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var rE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function dc() {
  return dc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, dc.apply(this, arguments);
}
function aE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var iE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function oE(e) {
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 36 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = aE(e, rE), u = typeof f == "function" ? f : dc({}, iE, f);
  return /* @__PURE__ */ r.createElement(wc, dc({
    axisClassName: Ln("visx-axis-right", t),
    labelOffset: i,
    orientation: ir.right,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var lE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function fc() {
  return fc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, fc.apply(this, arguments);
}
function sE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var uE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function cE(e) {
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 8 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = sE(e, lE), u = typeof f == "function" ? f : fc({}, uE, f);
  return /* @__PURE__ */ r.createElement(wc, fc({
    axisClassName: Ln("visx-axis-top", t),
    labelOffset: i,
    orientation: ir.top,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
var dE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, pc.apply(this, arguments);
}
function fE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var pE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Fu(e) {
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 8 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = fE(e, dE), u = typeof f == "function" ? f : pc({}, pE, f);
  return /* @__PURE__ */ r.createElement(wc, pc({
    axisClassName: Ln("visx-axis-bottom", t),
    labelOffset: i,
    orientation: ir.bottom,
    tickLabelProps: u,
    tickLength: l
  }, d));
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Rb,
  curveBasisClosed: Nb,
  curveBasisOpen: _b,
  curveBundle: Db,
  curveCardinal: Ob,
  curveCardinalClosed: Fb,
  curveCardinalOpen: Mb,
  curveCatmullRom: zb,
  curveCatmullRomClosed: Ib,
  curveCatmullRomOpen: $b,
  curveLinear: vc,
  curveLinearClosed: Jd,
  curveMonotoneX: Ou,
  curveMonotoneY: Bb,
  curveNatural: Hb,
  curveStep: Wb,
  curveStepAfter: jb,
  curveStepBefore: Vb
}, Symbol.toStringTag, { value: "Module" })), hE = (e) => {
  var L, U;
  const { xScale: t, yScale: n, yMax: i, xMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, isDebug: d, children: u } = e;
  let { transformedData: h, config: y, handleLineType: v, parseDate: S, formatDate: R, formatNumber: k, seriesHighlight: F, colorScale: T, rawData: m, brushConfig: O } = de.useContext(Ct);
  const N = (L = y.brush) != null && L.active && ((U = O.data) != null && U.length) ? O.data : h;
  if (!N)
    return;
  const P = (W) => (Cn(y.xAxis) ? t(S(W[y.xAxis.dataKey], !1)) : t(W[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), D = (W, Z, ce = void 0) => n(W[ce.dataKey]);
  return N && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Dr, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((W, Z) => {
    let ce = N.map((X) => ({
      [y.xAxis.dataKey]: X[y.xAxis.dataKey],
      [W.dataKey]: X[W.dataKey]
    })), te = ds[W.lineType], V = y.legend.behavior === "highlight" && F.length > 0 && F.indexOf(W.dataKey) === -1, K = y.legend.behavior === "highlight" || F.length === 0 || F.indexOf(W.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: Z }, /* @__PURE__ */ r.createElement(
      Kr,
      {
        data: ce,
        x: (X) => P(X),
        y: (X) => D(X, Z, W),
        stroke: K ? T ? T(y.runtime.seriesLabels ? y.runtime.seriesLabels[W.dataKey] : W.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: te,
        strokeDasharray: W.type ? v(W.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      y0,
      {
        key: "area-chart",
        fill: K ? T ? T(y.runtime.seriesLabels ? y.runtime.seriesLabels[W.dataKey] : W.dataKey) : "#000" : "transparent",
        fillOpacity: V ? 0.25 : 0.5,
        data: ce,
        x: (X) => P(X),
        y: (X) => D(X, Z, W),
        yScale: n,
        curve: te,
        strokeDasharray: W.type ? v(W.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(kr, { width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (W) => l(W, m), onMouseLeave: f }))));
}, mE = de.memo(hE), yE = ({ xScale: e, yScale: t, yMax: n, xMax: i, handleTooltipMouseOver: a, handleTooltipMouseOff: l, isDebug: f }) => {
  var F, T;
  let { transformedData: d, config: u, seriesHighlight: h, colorScale: y, rawData: v } = de.useContext(Ct);
  const S = (F = u.brush) != null && F.active && ((T = u.brush.data) != null && T.length) ? u.brush.data : d;
  if (!S)
    return;
  const R = (m) => {
    if (u.xAxis.type === "categorical")
      return e(m);
    if (Cn(u.xAxis)) {
      let O = new Date(m);
      return e(O);
    }
  }, k = 2;
  return S && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Dr, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(u.yAxis.size) + k / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    E0,
    {
      data: S,
      keys: u.runtime.areaSeriesKeys.map((m) => m.dataKey) || u.series.map((m) => m.dataKey),
      x0: (m) => R(m.data[u.xAxis.dataKey]),
      y0: (m) => Number(t(m[0])),
      y1: (m) => Number(t(m[1])),
      curve: ds[Bu[u.stackedAreaChartLineType]]
    },
    ({ stacks: m, path: O }) => m.map((N, P) => {
      let D = u.legend.behavior === "highlight" && h.length > 0 && h.indexOf(N.key) === -1, L = u.legend.behavior === "highlight" || h.length === 0 || h.indexOf(N.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: N.key,
            d: O(N) || "",
            strokeWidth: 2,
            stroke: L ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[N.key] : N.key) : "#000" : "transparent",
            fillOpacity: D ? 0.2 : 1,
            fill: L ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[N.key] : N.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(kr, { width: Number(i), height: Number(n), fill: "transparent", onMouseMove: (m) => a(m, v), onMouseLeave: l }))));
}, gE = de.memo(yE), Tc = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: i, parseDate: a, formatDate: l, setSeriesHighlight: f, seriesHighlight: d } = de.useContext(Ct), { orientation: u } = e, [h, y] = de.useState(null), v = u === "horizontal", S = 1, R = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, F = e.yAxis.labelPlacement === "Below Bar", T = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", O = e.barStyle === "rounded", N = e.visualizationSubType === "stacked", P = e.tipRounding, D = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", L = e.runtime.seriesKeys.length, U = { small: 16, medium: 18, large: 20 }, W = Object.keys(e.runtime.seriesLabels).length > 1, ce = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (d != null && d.length) ? d : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return de.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && i({
      ...e,
      yAxis: {
        ...e.yAxis,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, i]), de.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && i({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), de.useEffect(() => {
    e.visualizationSubType === "horizontal" && i({
      ...e,
      orientation: "horizontal"
    });
  }, []), de.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && i({ ...e, isLollipopChart: !0 }), (O || e.barStyle === "flat") && i({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: v,
    barBorderWidth: S,
    lollipopBarWidth: R,
    lollipopShapeSize: k,
    isLabelBelowBar: F,
    displayNumbersOnBar: T,
    shouldSuppress: (j) => {
      var J;
      return (J = e.preliminaryData) == null ? void 0 : J.some((ue) => {
        const _e = ue.column ? ue.column === j.key : !0, be = String(j.value) === String(ue.value) && ue.value !== "";
        return _e && be && ue.symbol && ue.type === "suppression";
      });
    },
    section: m,
    isRounded: O,
    isStacked: N,
    tipRounding: P,
    radius: D,
    stackCount: L,
    barStackedSeriesKeys: ce,
    fontSize: U,
    hasMultipleSeries: W,
    applyRadius: (j) => {
      if (j == null || !O)
        return {};
      let J = {};
      return (N && j + 1 === L || !N) && (J = v ? { borderRadius: `0 ${D}  ${D}  0` } : { borderRadius: `${D} ${D} 0 0` }), !N && j === -1 && (J = v ? { borderRadius: `${D} 0  0 ${D} ` } : { borderRadius: ` 0  0 ${D} ${D}` }), P === "full" && N && j === 0 && L > 1 && (J = v ? { borderRadius: `${D} 0 0 ${D}` } : { borderRadius: `0 0 ${D} ${D}` }), P === "full" && (N && j === 0 && L === 1 || !N) && (J = { borderRadius: D }), J;
    },
    updateBars: (j) => {
      if (e.visualizationType !== "Bar" && !v)
        return j;
      const J = [...j];
      let ue;
      const _e = {
        stacked: e.barHeight,
        lollipop: R
      };
      N ? ue = _e.stacked : ue = _e[e.isLollipopChart ? "lollipop" : "stacked"] * L;
      const be = F ? U[e.fontSize] * 1.2 : 0;
      let ye = Number(e.barSpace), Le = J.length * (ue + be + ye);
      return v && (e.heights.horizontal = Le), J.map((ae, Ie) => {
        let Ee = 0;
        return ae.index !== 0 && (Ee = (ue + ye + be) * Ie), { ...ae, y: Ee, height: ue };
      });
    },
    assignColorsToValues: (j, J, ue) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ue;
      const _e = e.customColors ?? t[e.palette], be = n.map((Ie) => Ie[e.legend.colorCode]);
      let ye = /* @__PURE__ */ new Map(), Le = [];
      for (let Ie = 0; Ie < be.length; Ie++)
        ye.has(be[Ie]) || ye.set(be[Ie], _e[ye.size % _e.length]), Le.push(ye.get(be[Ie]));
      for (; Le.length < j; )
        Le = Le.concat(Le);
      return Le[J];
    },
    getHighlightedBarColorByValue: (j) => {
      const J = e == null ? void 0 : e.highlightedBarValues.find((ue) => {
        if (ue.value)
          return e.xAxis.type === "date" ? l(a(ue.value)) === j : ue.value === j;
      });
      return J != null && J.color ? J.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (j) => {
      const J = e == null ? void 0 : e.highlightedBarValues.filter((ue) => {
        if (ue.value)
          return e.xAxis.type === "date" ? l(a(ue.value)) === j : ue.value === j;
      })[0];
      return J != null && J.color ? J : !1;
    },
    getAdditionalColumn: (j, J) => {
      if (!J)
        return "";
      const ue = e.columns, _e = [];
      let be = "";
      const ye = n.find((Le) => Le[e.xAxis.dataKey] === J) || {};
      return Object.keys(ue).forEach((Le) => {
        if (j && e.columns[Le].series && e.columns[Le].series !== j)
          return;
        const ae = {
          addColPrefix: e.columns[Le].prefix,
          addColSuffix: e.columns[Le].suffix,
          addColRoundTo: e.columns[Le].roundToPlace ? e.columns[Le].roundToPlace : "",
          addColCommas: e.columns[Le].commas
        }, Ie = Tf(ye[e.columns[Le].name], "left", !0, e, ae);
        e.columns[Le].tooltips && _e.push([e.columns[Le].label, Ie]);
      }), _e.forEach((Le) => {
        be += `${Le[0]} : ${Le[1]} <br/>`;
      }), be;
    },
    hoveredBar: h,
    setHoveredBar: y,
    onMouseOverBar: (j, J) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && J && f([J]), y(j);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Es = de.createContext(null), Gf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: i, handleTooltipMouseOff: a, handleTooltipMouseOver: l, handleTooltipClick: f, tooltipData: d, showTooltip: u, hideTooltip: h }) => {
  const { parseDate: y, config: v } = de.useContext(Ct), { runtime: S, regions: R, visualizationType: k, orientation: F, xAxis: T } = v, m = e.domain(), O = (D) => {
    let L;
    if (!(D != null && D.fromType) || D.fromType === "Fixed") {
      const U = new Date(D.from), W = y(Xl(v.xAxis.dateParseFormat, U)).getTime();
      L = e(W), k === "Bar" && T.type === "date-time" && (L = L - t * n / 2);
    }
    if (D.fromType === "Previous Days") {
      const U = Number(D.from) || 0;
      m.map((te) => Xl(v.xAxis.dateParseFormat, new Date(te)));
      const W = D.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(D.to), Z = v.xAxis.type === "categorical" ? Xl(v.xAxis.dateParseFormat, W) : Xl(v.xAxis.dateParseFormat, W), ce = new Date(Z);
      if (L = new Date(ce.setDate(ce.getDate() - Number(U))), T.type === "date") {
        L = new Date(Xl(T.dateParseFormat, L)).getTime();
        let te = m[0], V = Math.abs(L - te);
        for (let K = 1; K < m.length; K++) {
          const X = Math.abs(L - m[K]);
          X < V && (V = X, te = m[K]);
        }
        L = te;
      }
      if (T.type === "categorical") {
        let te = m[0], V = Math.abs(new Date(L).getTime() - new Date(te).getTime());
        for (let K = 1; K < m.length; K++) {
          const X = Math.abs(new Date(L).getTime() - new Date(m[K]).getTime());
          X < V && (V = X, te = m[K]);
        }
        L = te;
      }
      L = e(L);
    }
    if (T.type === "categorical" && D.fromType !== "Previous Days" && (L = e(D.from)), k === "Line" || k === "Area Chart") {
      let U = Number(v.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), L = L + U;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && D.fromType === "Previous Days" && (L = L - t * n / 2), L;
  }, N = (D) => {
    let L;
    if (T.type === "categorical" && (L = e(D.to)), Cn(T) && ((!(D != null && D.toType) || D.toType === "Fixed") && (L = e(y(D.to).getTime())), (k === "Bar" || v.visualizationType === "Combo") && (L = D.toType !== "Last Date" ? e(y(D.to).getTime()) + t * n : L)), D.toType === "Last Date") {
      const U = m[m.length - 1];
      L = Number(e(U) + ((k === "Bar" || k === "Combo") && v.xAxis.type === "date" ? t * n : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let U = Number(v.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), L = L + U;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && D.toType !== "Last Date" && (L = L - t * n / 2), (k === "Bar" || k === "Combo") && T.type === "categorical" && (L = L + (k === "Bar" || k === "Combo" ? t * n : 0)), L;
  }, P = (D, L) => D - L;
  if (R && F === "vertical")
    return R.map((D) => {
      const L = O(D), U = N(D), W = P(U, L);
      if (!L || !U)
        return null;
      const Z = () => /* @__PURE__ */ r.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${L} -5
                L${L} 5
                M${L} 0
                L${U} 0
                M${U} -5
                L${U} 5`
        }
      ), ce = () => /* @__PURE__ */ r.createElement("rect", { x: L, y: 0, width: W, height: i, fill: D.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(at, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: D.label, onMouseMove: l, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(d), showTooltip: u }, /* @__PURE__ */ r.createElement(Z, null), /* @__PURE__ */ r.createElement(ce, null), /* @__PURE__ */ r.createElement(kt, { x: L + W / 2, y: 5, fill: D.color, verticalAnchor: "start", textAnchor: "middle" }, D.label));
    });
};
function Cc(e) {
  var J, ue;
  const { config: t, index: n, id: i, className: a, background: l, borderColor: f, borderWidth: d, width: u, height: h, x: y, y: v, onMouseOver: S, onMouseLeave: R, onClick: k, tooltipHtml: F, tooltipId: T, styleOverrides: m, seriesHighlight: O } = e, N = Math.max(0, u), P = Math.max(0, h), D = t.orientation === "horizontal", L = t.barStyle === "rounded", U = t.visualizationSubType === "stacked", W = t.tipRounding, Z = t.visualizationType === "Combo" && ((ue = (J = t.runtime) == null ? void 0 : J.barSeriesKeys) == null ? void 0 : ue.length), ce = t.runtime.seriesKeys.length, te = t.visualizationType === "Bar" && t.legend.axisAlign && (O != null && O.length) ? O == null ? void 0 : O.length : 0, V = Z || te || ce;
  let K = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (K > N / 2 || K > P / 2) && (K = Math.min(N / 2, P / 2));
  const X = () => `M${y},${v + P}
      L${y},${v + K}
      Q${y},${v} ${y + K},${v}
      L${y + N - K},${v}
      Q${y + N},${v} ${y + N},${v + K}
      L${y + N},${v + P}
      L${y},${v + P}`, B = () => `M${y},${v + P}
      L${y},${v}
      L${y + N - K},${v}
      Q${y + N},${v} ${y + N},${v + K}
      L${y + N},${v + P - K}
      Q${y + N},${v + P} ${y + N - K},${v + P}
      L${y},${v + P}`, oe = () => `M${y + K},${v + P}
      Q${y},${v + P} ${y},${v + P - K}
      L${y},${v}
      L${y + N},${v}
      L${y + N},${v + P - K}
      Q${y + N},${v + P} ${y + N - K},${v + P}
      L${y + K},${v + P}`, re = () => `M${y + K},${v + P}
      Q${y},${v + P} ${y},${v + P - K}
      L${y},${v + K}
      Q${y},${v} ${y + K},${v}
      L${y + N},${v}
      L${y + N},${v + P}
      L${y + K},${v + P}`, le = () => `M${y + K},${v + P}
      Q${y},${v + P} ${y},${v + P - K}
      L${y},${v + K}
      Q${y},${v} ${y + K},${v}
      L${y + N - K},${v}
      Q${y + N},${v} ${y + N},${v + K}
      L${y + N},${v + P - K}
      Q${y + N},${v + P} ${y + N - K},${v + P}
      L${y + K},${v + P}`, G = () => `M${y},${v}
      L${y + N},${v}
      L${y + N},${v + P}
      L${y},${v + P}
      L${y},${v}`;
  let j;
  return n == null || !L ? j = G() : (j = G(), (U && n + 1 === V || !U) && (j = D ? B() : X()), !U && n === -1 && (j = D ? re() : oe()), W === "full" && U && n === 0 && V > 1 && (j = D ? re() : oe()), W === "full" && (U && n === 0 && V === 1 || !U) && (j = le())), /* @__PURE__ */ r.createElement(
    "path",
    {
      id: i,
      className: a,
      d: j,
      fill: l,
      stroke: f,
      strokeWidth: d,
      onMouseOver: S,
      onMouseLeave: R,
      onClick: k,
      "data-tooltip-html": F,
      "data-tooltip-id": T,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const vE = () => {
  var ce, te;
  const [e, t] = de.useState(0), { xScale: n, yScale: i, seriesScale: a, xMax: l, yMax: f } = de.useContext(Es), { transformedData: d, colorScale: u, seriesHighlight: h, config: y, formatNumber: v, formatDate: S, parseDate: R, setSharedFilter: k } = de.useContext(Ct), { isHorizontal: F, barBorderWidth: T, applyRadius: m, hoveredBar: O, getAdditionalColumn: N, onMouseLeaveBar: P, onMouseOverBar: D, barStackedSeriesKeys: L } = Tc(), { orientation: U } = y, W = (ce = y.brush) != null && ce.active && ((te = y.brush.data) != null && te.length) ? y.brush.data : d, Z = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !F && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(A0, { data: W, keys: L, x: (V) => V[y.runtime.xAxis.dataKey], xScale: n, yScale: i, color: u }, (V) => V.reverse().map(
    (K) => K.bars.map((X) => {
      let B = y.legend.behavior === "highlight" && h.length > 0 && h.indexOf(X.key) === -1, oe = y.legend.behavior === "highlight" || h.length === 0 || h.indexOf(X.key) !== -1, re = Z ? a.range()[1] - a.range()[0] : l / K.bars.length;
      y.runtime.xAxis.type !== "date" && (re = y.barThickness * re);
      const le = X.bar.data[y.runtime.xAxis.dataKey], G = Z ? S(R(le)) : le, j = v(X.bar ? X.bar.data[X.key] : 0, "left");
      if (!j)
        return;
      const J = n(Z ? R(le) : le) - (Z ? re / 2 : 0), ue = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${G}` : G, _e = N(O), be = `${y.runtime.seriesLabels[X.key]}: ${j}`, ye = `<ul>
                  <li class="tooltip-heading"">${ue}</li>
                  <li class="tooltip-body ">${be}</li>
                  <li class="tooltip-body ">${_e}</li>
                    </li></ul>`;
      return t(re), /* @__PURE__ */ r.createElement(at, { key: `${K.index}--${X.index}--${U}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-stack-${K.index}-${X.index}`, id: `barStack${K.index}-${X.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(kt, { display: y.labels && oe ? "block" : "none", opacity: B ? 0.5 : 1, x: J + e / 2, y: X.y - 5, fill: "#000", textAnchor: "middle" }, j), Cc({
        config: y,
        seriesHighlight: h,
        index: K.index,
        background: u(y.runtime.seriesLabels[X.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? T : 0}px`,
        width: re,
        height: X.height,
        x: J,
        y: X.y,
        onMouseOver: () => D(G, X.key),
        onMouseLeave: P,
        tooltipHtml: ye,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Le) => {
          Le.preventDefault(), k && (X[y.xAxis.dataKey] = G, k(y.uid, X));
        },
        styleOverrides: {
          animationDelay: `${K.index * 0.5}s`,
          transformOrigin: `${re / 2}px ${X.y + X.height}px`,
          opacity: B ? 0.2 : 1,
          display: oe ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ r.createElement(Gf, { xScale: n, yMax: f, barWidth: e, totalBarsInGroup: 1 }));
}, xE = () => {
  const { yMax: e, yScale: t, xScale: n } = de.useContext(Es), {
    animatedChart: i,
    colorScale: a,
    config: l,
    formatDate: f,
    formatNumber: d,
    getTextWidth: u,
    parseDate: h,
    seriesHighlight: y,
    setSharedFilter: v,
    transformedData: S
  } = de.useContext(Ct), { barBorderWidth: R, displayNumbersOnBar: k, fontSize: F, getAdditionalColumn: T, hoveredBar: m, isHorizontal: O, isLabelBelowBar: N, onMouseLeaveBar: P, onMouseOverBar: D, updateBars: L, barStackedSeriesKeys: U } = Tc(), { orientation: W, visualizationSubType: Z } = l;
  return l.visualizationSubType === "stacked" && O && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(R0, { data: S, keys: U, height: e, y: (ce) => ce[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: a, offset: "none" }, (ce) => ce.map(
    (te) => L(te.bars).map((V, K) => {
      const X = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(V.key) === -1, B = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(V.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const oe = jo("#000", a(l.runtime.seriesLabels[V.key])), re = d(S[V.index][V.key], "left"), le = l.runtime.yAxis.type === "date" ? f(h(S[V.index][l.runtime.originalXAxis.dataKey])) : S[V.index][l.runtime.originalXAxis.dataKey], G = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${le}` : le, j = u(re, `normal ${F[l.fontSize]}px sans-serif`), J = T(m), ue = `${l.runtime.seriesLabels[V.key]}: ${re}`, _e = `<ul>
                  <li class="tooltip-heading"">${G}</li>
                  <li class="tooltip-body ">${ue}</li>
                  <li class="tooltip-body ">${J}</li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: K, id: `barStack${te.index}-${V.index}`, className: "stack horizontal" }, Cc({
        config: l,
        seriesHighlight: y,
        index: te.index,
        className: `animated-chart group ${i ? "animated" : ""}`,
        background: a(l.runtime.seriesLabels[V.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? R : 0}px`,
        width: V.width,
        height: V.height,
        x: V.x,
        y: V.y,
        onMouseOver: () => D(le, V.key),
        onMouseLeave: P,
        tooltipHtml: _e,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (be) => {
          be.preventDefault(), v && (V[l.xAxis.dataKey] = re, v(l.uid, V));
        },
        styleOverrides: {
          animationDelay: `${te.index * 0.5}s`,
          transformOrigin: `${V.x}px 0`,
          opacity: X ? 0.2 : 1,
          display: B ? "block" : "none"
        }
      }), W === "horizontal" && Z === "stacked" && N && te.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        kt,
        {
          x: `${V.x + (l.isLollipopChart ? 15 : 5)}`,
          y: V.y + V.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        le
      ), k && j < V.width && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: B ? "block" : "none",
          x: V.x + te.bars[V.index].width / 2,
          y: V.y + V.height / 2,
          fill: oe,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        re
      )));
    })
  )));
}, Ey = ({ bar: e, defaultBarHeight: t, defaultBarWidth: n, config: i, isNumber: a, getTextWidth: l, barWidth: f, isVertical: d }) => {
  let h = t, y = n, v = "", S = !1, R = !1, k = !1;
  const F = i.general.showSuppressedSymbol;
  if (i.preliminaryData.forEach((O) => {
    (!O.column || O.column === e.key) && O.type === "suppression" && O.value && String(O.value) === String(e.value) && (!O.hideBarSymbol && F ? (h = f > 10 ? 3 : 0, y = 3, S = !0) : (h = 0, y = 0, S = !0));
  }), !S && !a(e.value) && i.general.showMissingDataLabel) {
    const N = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10;
    R = !0, h = N ? 3 : 0, y = 3;
  }
  return !S && String(e.value) === "0" && i.general.showZeroValueDataLabel && (h = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 ? 3 : 0, y = 3, k = !0), { barWidthHorizontal: y, barHeight: h, isSuppressed: S, showMissingDataLabel: R, showZeroValueDataLabel: k, getBarY: (O, N) => S || R || k ? N - 3 : O, getBarLabel: (O) => {
    let N = O;
    return String(N) === "0" && (N = ""), S && (N = ""), R && (N = "N/A"), k && (N = "0"), !i.labels && !S && !k && !R && d && (N = ""), !i.yAxis.displayNumbersOnBar && !d && !S && !k && !R && (N = ""), l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 && d ? N : d ? "" : N;
  } };
}, Ac = (e, t, n) => !!(e === "Line" && t.length < 3 && n), bE = () => {
  const { xScale: e, yScale: t, xMax: n, yMax: i, seriesScale: a } = de.useContext(Es), [l, f] = de.useState(0), [d, u] = de.useState(0), {
    // prettier-ignore
    assignColorsToValues: h,
    barBorderWidth: y,
    getAdditionalColumn: v,
    getHighlightedBarByValue: S,
    getHighlightedBarColorByValue: R,
    lollipopBarWidth: k,
    lollipopShapeSize: F,
    onMouseLeaveBar: T,
    onMouseOverBar: m,
    section: O
  } = Tc(), { colorScale: N, config: P, dashboardConfig: D, tableData: L, formatDate: U, formatNumber: W, getXAxisData: Z, getYAxisData: ce, isNumber: te, parseDate: V, seriesHighlight: K, setSharedFilter: X, transformedData: B, brushConfig: oe, getTextWidth: re } = de.useContext(Ct), { HighLightedBarUtils: le } = Sc(P);
  let G = B;
  return P.preliminaryData.some((J) => J.value && J.type === "suppression") && (G = L), oe.data.length && (G = oe.data), P.visualizationSubType !== "stacked" && (P.visualizationType === "Bar" || P.visualizationType === "Combo" || Ac(P.visualizationType, G, P.allowLineToBarGraph)) && P.orientation === "vertical" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    jm,
    {
      data: G,
      keys: P.runtime.barSeriesKeys || P.runtime.seriesKeys,
      height: i,
      x0: (J) => {
        const ue = J[P.runtime.originalXAxis.dataKey];
        return Cn(P.runtime.xAxis) ? V(ue) : ue;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (J) => J.map((ue, _e) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${ue.index}-${ue.x0}--${_e} ${P.orientation}`, key: `bar-group-${ue.index}-${ue.x0}--${_e}`, id: `bar-group-${ue.index}-${ue.x0}--${_e}`, left: ue.x0 }, ue.bars.map((be, ye) => {
      const Le = P.useLogScale ? 0.1 : 0;
      let ae = P.highlightedBarValues.map((xt) => xt.value).filter((xt) => xt !== void 0);
      ae = P.xAxis.type === "date" ? le.formatDates(ae) : ae;
      const Ie = P.legend.behavior === "highlight" && K.length > 0 && K.indexOf(be.key) === -1, Ee = P.legend.behavior === "highlight" || K.length === 0 || K.indexOf(be.key) !== -1;
      let he = a.range()[1] - a.range()[0];
      const Pe = Math.abs(t(be.value) - t(Le)), ee = be.value >= 0 && te(be.value) ? be.y : t(0);
      let De = P.isLollipopChart ? k : a.bandwidth(), we = be.x + (P.isLollipopChart ? (he / ue.bars.length - k) / 2 : 0) - (P.xAxis.type === "date-time" ? he / 2 : 0);
      f(De), u(ue.bars.length);
      const Ue = W(/[a-zA-Z]/.test(String(be.value)) ? "" : be.value, "left"), Ge = P.runtime[O].type === "date" ? U(V(G[ue.index][P.runtime.originalXAxis.dataKey])) : G[ue.index][P.runtime.originalXAxis.dataKey], et = be.value < 0 ? -1 : ye, Je = v(be.key, G[ue.index][P.runtime.originalXAxis.dataKey]);
      let st = P.runtime.xAxis.label ? `${P.runtime.xAxis.label}: ${Ge}` : Ge;
      const Ke = `${P.runtime.seriesLabels[be.key]}: ${Ue}`, We = `<ul>
                  <li class="tooltip-heading">${st}</li>
                  <li class="tooltip-body ">${Ke}</li>
                  ${Je ? '<li class="tooltip-body ">' + Je + "</li>" : ""}
                    </li></ul>`;
      let Be = "#000000";
      Be = le.checkFontColor(Ue, ae, Be);
      let $e = P.runtime.seriesLabels && P.runtime.seriesLabels[be.key] ? N(P.runtime.seriesLabels[be.key]) : N(be.key);
      $e = h(J.length, ue.index, $e);
      const ht = P.isLollipopChart && P.lollipopColorStyle === "regular", qe = P.isLollipopChart && P.lollipopColorStyle === "two-tone", pt = ae == null ? void 0 : ae.includes(Ge), gt = R(Ge), ut = S(Ge), Rt = pt ? gt : P.barHasBorder === "true" ? "#000" : "transparent", tn = pt ? ut.borderWidth : P.isLollipopChart ? 0 : P.barHasBorder === "true" ? y : 0, { barHeight: Xt, isSuppressed: vt, getBarY: Nt, getBarLabel: hn } = Ey({ bar: be, defaultBarHeight: Pe, config: P, isNumber: te, getTextWidth: re, barWidth: De, isVertical: !0, yAxisValue: Ue }), on = hn(Ue), Gt = Nt(ee, t(Le)), yn = vt ? "none" : "block", ze = (xt, Ht) => {
        var xn;
        let It = xt, At = Ht || "#f2f2f2";
        if (D && ((xn = D.dashboard.sharedFilters) == null ? void 0 : xn.length) !== 0) {
          const { sharedFilters: Mt } = D.dashboard;
          return It = Mt ? Mt.map((ln) => ln.setBy === P.uid ? ln.resetLabel === ln.active || ln.active === B[ue.index][P.xAxis.dataKey] ? N(P.runtime.seriesLabels[be.key]) : At : N(P.runtime.seriesLabels[be.key]))[0] : N(P.runtime.seriesLabels[be.key]), ht && (It = xt), qe && (It = ps(xt).brighten(1)), pt && (It = "transparent"), It;
        }
        return qe && (It = ps(xt).brighten(1)), pt && (It = "transparent"), It;
      };
      return /* @__PURE__ */ r.createElement(at, { key: `${ue.index}--${ye}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${ue.index}-${ue.x0}-${Gt}--${ye}` }, Cc({
        config: P,
        index: et,
        id: `barGroup${ue.index}`,
        background: ze(N(P.runtime.seriesLabels[be.key])),
        borderColor: Rt,
        borderStyle: "solid",
        borderWidth: `${tn}px`,
        width: De,
        height: Xt,
        x: we,
        y: Gt,
        onMouseOver: () => m(Ge, be.key),
        onMouseLeave: T,
        tooltipHtml: We,
        tooltipId: `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
        onClick: (xt) => {
          xt.preventDefault(), X && (be[P.xAxis.dataKey] = Ge, X(P.uid, be));
        },
        styleOverrides: {
          transformOrigin: `0 ${Gt + Xt}px`,
          opacity: Ie ? 0.2 : 1,
          display: Ee ? "block" : "none",
          cursor: D ? "pointer" : "default"
        }
      }), P.preliminaryData.map((xt, Ht) => {
        const It = !xt.column || xt.column === be.key;
        if (!(String(xt.value) === String(be.value) && xt.value !== "" && It) || De < 10 || !P.general.showSuppressedSymbol || xt.hideBarSymbol)
          return;
        const Mt = String(xt.symbol).includes("Asterisk"), ln = Mt ? -5 : -8, cn = Mt ? "middle" : "end", wn = xt.symbol === "Asterisk" ? De * 1.2 : xt.symbol === "Double Asterisk" ? De : De / 1.5;
        return /* @__PURE__ */ r.createElement(
          kt,
          {
            key: Ht,
            dy: ln,
            display: Ee ? "block" : "none",
            opacity: Ie ? 0.5 : 1,
            x: we + De / 2,
            y: Gt,
            verticalAnchor: cn,
            fill: Be,
            textAnchor: "middle",
            fontSize: `${wn}px`
          },
          xt.iconCode
        );
      }), /* @__PURE__ */ r.createElement(
        kt,
        {
          display: Ee ? "block" : "none",
          opacity: Ie ? 0.5 : 1,
          x: we + De / 2,
          y: Gt - 5,
          fill: Be,
          textAnchor: "middle",
          fontSize: De / 2
        },
        on
      ), P.isLollipopChart && P.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: yn,
          cx: we + F / 3.5,
          cy: be.y,
          r: F / 2,
          fill: $e,
          key: `circle--${be.index}`,
          "data-tooltip-html": We,
          "data-tooltip-id": `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), P.isLollipopChart && P.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: yn,
          x: we - k / 2,
          y: Gt,
          width: F,
          height: F,
          fill: $e,
          key: `circle--${be.index}`,
          "data-tooltip-html": We,
          "data-tooltip-id": `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${F}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(P.confidenceKeys).length > 0 ? G.map((J) => {
    let ue, _e, be, ye, Le = 5;
    return ue = e(Z(J)) + (P.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), be = t(ce(J, P.confidenceKeys.lower)), ye = t(ce(J, P.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${_e}-${J[P.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ue - Le} ${be}
                    L${ue + Le} ${be}
                    M${ue} ${be}
                    L${ue} ${ye}
                    M${ue - Le} ${ye}
                    L${ue + Le} ${ye}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(Gf, { xScale: e, yMax: i, barWidth: l, totalBarsInGroup: d }));
}, SE = () => {
  var le;
  const { xScale: e, yScale: t, yMax: n, seriesScale: i } = de.useContext(Es), { transformedData: a, tableData: l, colorScale: f, seriesHighlight: d, config: u, formatNumber: h, formatDate: y, parseDate: v, setSharedFilter: S, isNumber: R, getTextWidth: k, getYAxisData: F, getXAxisData: T } = de.useContext(Ct), { isHorizontal: m, barBorderWidth: O, updateBars: N, assignColorsToValues: P, section: D, fontSize: L, isLabelBelowBar: U, displayNumbersOnBar: W, lollipopBarWidth: Z, lollipopShapeSize: ce, getHighlightedBarColorByValue: te, getHighlightedBarByValue: V, getAdditionalColumn: K, hoveredBar: X, onMouseLeaveBar: B, onMouseOverBar: oe } = Tc(), { HighLightedBarUtils: re } = Sc(u);
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    jm,
    {
      data: (le = u.preliminaryData) != null && le.some((G) => G.value && G.type === "suppression") ? l : a,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: n,
      x0: (G) => G[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: i,
      yScale: e,
      color: () => ""
    },
    (G) => N(G).map((j, J) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${j.index}-${j.x0}--${J} ${u.orientation}`, key: `bar-group-${j.index}-${j.x0}--${J}`, id: `bar-group-${j.index}-${j.x0}--${J}`, top: j.y }, j.bars.map((ue, _e) => {
      var xn;
      const be = u.useLogScale ? 0.1 : 0;
      let ye = u.highlightedBarValues.map((Mt) => Mt.value).filter((Mt) => Mt !== void 0);
      ye = u.xAxis.type === "date" ? re.formatDates(ye) : ye;
      let Le = u.legend.behavior === "highlight" && d.length > 0 && d.indexOf(ue.key) === -1, ae = u.legend.behavior === "highlight" || d.length === 0 || d.indexOf(ue.key) !== -1, Ie = u.barHeight, Ee = parseInt(u.isLollipopChart ? Z : Ie);
      isNaN(Ee) && (Ee = 25);
      let he = ue.value >= 0 && R(ue.value) ? ue.y : t(be);
      const Pe = Math.abs(e(ue.value) - e(be)), ee = ue.value >= 0 && R(ue.value), { barWidthHorizontal: De, isSuppressed: we, getBarLabel: Ue } = Ey({ bar: ue, defaultBarWidth: Pe, config: u, isNumber: R, getTextWidth: k, isVertical: !1 }), Ge = ue.value < 0 ? Math.abs(e(ue.value)) : e(be), et = h(ue.value, "left"), Je = u.runtime[D].type === "date" ? y(v(a[j.index][u.runtime.originalXAxis.dataKey])) : a[j.index][u.runtime.originalXAxis.dataKey], st = ee ? "above" : "below", Ke = Ue(et), We = k(Je, `normal ${L[u.fontSize]}px sans-serif`), Be = Number(We) < Pe - 5;
      let $e = Be ? "end" : "start", ht = "start", qe = Be ? -5 : 5, pt = 10;
      st === "below" && ($e = Be ? "start" : "end", qe = Be ? 5 : -5, u.isLollipopChart && (ht = "end", pt = -10));
      const gt = ue.value < 0 ? -1 : _e;
      let ut = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Je}` : Je;
      const Rt = K(X), tn = `${u.runtime.seriesLabels[ue.key]}: ${et}`, Xt = `<ul>
                  <li class="tooltip-heading"">${ut}</li>
                  <li class="tooltip-body ">${tn}</li>
                  <li class="tooltip-body ">${Rt}</li>
                    </li></ul>`;
      let vt = "#000000";
      vt = re.checkFontColor(et, ye, vt);
      let Nt = u.runtime.seriesLabels && u.runtime.seriesLabels[ue.key] ? f(u.runtime.seriesLabels[ue.key]) : f(ue.key);
      Nt = P(G.length, j.index, Nt);
      const hn = u.isLollipopChart && u.lollipopColorStyle === "regular", on = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Gt = ye == null ? void 0 : ye.includes(Je), yn = te(Je), ze = V(Je), xt = Gt ? yn : u.barHasBorder === "true" ? "#000" : "transparent", Ht = Gt ? ze.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? O : 0, It = we ? "none" : "block";
      Nt && vt && Be && (vt = jo("#000", Nt));
      const At = () => hn ? Nt : on ? ps(Nt).brighten(1) : Gt ? "transparent" : Nt;
      return /* @__PURE__ */ r.createElement(at, { key: `${j.index}--${_e}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${j.index}-${j.x0}-${he}--${_e}` }, Cc({
        config: u,
        index: gt,
        id: `barGroup${j.index}`,
        background: At(),
        borderColor: xt,
        borderStyle: "solid",
        borderWidth: `${Ht}px`,
        width: De,
        height: Ee,
        x: Ge,
        y: Ie * ue.index,
        onMouseOver: () => oe(Je, ue.key),
        onMouseLeave: B,
        tooltipHtml: Xt,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: (Mt) => {
          Mt.preventDefault(), S && (ue[u.xAxis.dataKey] = et, S(u.uid, ue));
        },
        styleOverrides: {
          transformOrigin: `0 ${he + Ie}px`,
          opacity: Le ? 0.2 : 1,
          display: ae ? "block" : "none"
        }
      }), (xn = u.preliminaryData) == null ? void 0 : xn.map((Mt, ln) => {
        const cn = !Mt.column || Mt.column === ue.key;
        if (!(String(Mt.value) === String(ue.value) && Mt.value !== "" && cn) || Mt.hideBarSymbol || !u.general.showSuppressedSymbol)
          return;
        const Pn = String(Mt.symbol).includes("Asterisk") ? "middle" : "end", Mn = Mt.symbol === "Asterisk" ? Ie * 1.2 : Mt.symbol === "Double Asterisk" ? Ie : Ie / 1.5;
        return /* @__PURE__ */ r.createElement(
          kt,
          {
            key: ln,
            fontSize: Mn,
            display: ae ? "block" : "none",
            opacity: Le ? 0.5 : 1,
            x: Ge,
            y: u.barHeight / 2 + u.barHeight * ue.index,
            fill: "#000",
            dy: u.barHeight / 5,
            dx: 10,
            textAnchor: "start",
            verticalAnchor: Pn
          },
          Mt.iconCode
        );
      }), !u.isLollipopChart && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: ae ? "block" : "none",
          x: ue.y,
          opacity: Le ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * ue.index,
          fill: vt,
          dx: Ke === "N/A" ? 20 : qe,
          verticalAnchor: "middle",
          textAnchor: Ke === "N/A" ? "middle" : $e
        },
        Ke
      ), u.isLollipopChart && W && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: ae ? "block" : "none",
          x: ue.y,
          y: 0,
          fill: "#000000",
          dx: pt,
          textAnchor: ht,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Ke
      ), U && !u.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: u.yAxis.hideAxis ? 0 : 5, y: j.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? y(v(a[j.index][u.runtime.originalXAxis.dataKey])) : m ? a[j.index][u.runtime.originalXAxis.dataKey] : h(a[j.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: It,
          cx: ue.y,
          cy: Ie * ue.index + Z / 2,
          r: ce / 2,
          fill: Nt,
          key: `circle--${ue.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: It,
          x: ue.y > 10 ? ue.y - ce / 2 : 0,
          y: 0 - Z / 2,
          width: ce,
          height: ce,
          fill: Nt,
          key: `circle--${ue.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${ce}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? a.map((G) => {
    let j, J, ue, _e = 5;
    return j = t(T(G)) - 0.75 * u.barHeight, J = e(F(G, u.confidenceKeys.upper)), ue = e(F(G, u.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${j}-${G[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ue} ${j - _e}
                    L${ue} ${j + _e}
                    M${ue} ${j}
                    L${J} ${j}
                    M${J} ${j - _e}
                    L${J} ${j + _e} `
      }
    );
  }) : "");
}, Lu = {
  Vertical: bE,
  Horizontal: SE,
  StackedVertical: vE,
  StackedHorizontal: xE
}, EE = ({ xScale: e, yScale: t, seriesScale: n, xMax: i, yMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, handleTooltipClick: d }) => {
  const { transformedData: u, config: h } = de.useContext(Ct), y = {
    xScale: e,
    yScale: t,
    xMax: i,
    yMax: a,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Dr, { component: "BarChart" }, /* @__PURE__ */ r.createElement(Es.Provider, { value: y }, /* @__PURE__ */ r.createElement(at, { left: parseFloat(h.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Lu.StackedVertical, null), /* @__PURE__ */ r.createElement(Lu.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Lu.Vertical, null), /* @__PURE__ */ r.createElement(Lu.Horizontal, null), /* @__PURE__ */ r.createElement(kr, { key: "bars", display: h.tooltips.singleSeries ? "none" : "block", width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => l(v, u), onMouseOut: f, onClick: (v) => d(v, u) }))));
};
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Da.apply(this, arguments);
}
function Ai(e) {
  var t = e.x1, n = e.x2, i = e.y1, a = e.y2;
  return {
    x1: i,
    x2: a,
    y1: t,
    y2: n
  };
}
function ky(e) {
  var t = e.left, n = t === void 0 ? 0 : t, i = e.top, a = i === void 0 ? 0 : i, l = e.className, f = e.max, d = e.min, u = e.firstQuartile, h = e.thirdQuartile, y = e.median, v = e.boxWidth, S = v === void 0 ? 10 : v, R = e.fill, k = e.fillOpacity, F = e.stroke, T = e.strokeWidth, m = e.rx, O = m === void 0 ? 2 : m, N = e.ry, P = N === void 0 ? 2 : N, D = e.valueScale, L = e.outliers, U = L === void 0 ? [] : L, W = e.horizontal, Z = e.medianProps, ce = Z === void 0 ? {} : Z, te = e.maxProps, V = te === void 0 ? {} : te, K = e.minProps, X = K === void 0 ? {} : K, B = e.boxProps, oe = B === void 0 ? {} : B, re = e.outlierProps, le = re === void 0 ? {} : re, G = e.container, j = G === void 0 ? !1 : G, J = e.containerProps, ue = J === void 0 ? {} : J, _e = e.children, be = W ? a : n, ye = be + (S || 0) / 2, Le = D.range(), ae = D(d ?? 0), Ie = D(u ?? 0), Ee = D(y ?? 0), he = D(h ?? 0), Pe = D(f ?? 0), ee = {
    valueRange: Le,
    center: ye,
    offset: be,
    boxWidth: S,
    max: {
      x1: ye - (S || 0) / 4,
      x2: ye + (S || 0) / 4,
      y1: Pe,
      y2: Pe
    },
    maxToThird: {
      x1: ye,
      x2: ye,
      y1: Pe,
      y2: he
    },
    median: {
      x1: be,
      x2: be + (S || 0),
      y1: Ee,
      y2: Ee
    },
    minToFirst: {
      x1: ye,
      x2: ye,
      y1: Ie,
      y2: ae
    },
    min: {
      x1: ye - (S || 0) / 4,
      x2: ye + (S || 0) / 4,
      y1: ae,
      y2: ae
    },
    box: {
      x1: be,
      x2: S || 0,
      y1: he,
      y2: Math.abs(he - Ie)
    },
    container: {
      x1: be,
      x2: S || 0,
      y1: Math.min.apply(Math, Le),
      y2: Math.abs(Le[0] - Le[1])
    }
  };
  return W && (ee.max = Ai(ee.max), ee.maxToThird = Ai(ee.maxToThird), ee.box.y1 = Ie, ee.box = Ai(ee.box), ee.median = Ai(ee.median), ee.minToFirst = Ai(ee.minToFirst), ee.min = Ai(ee.min), ee.container = Ai(ee.container), ee.container.y1 = Math.min.apply(Math, Le)), _e ? /* @__PURE__ */ r.createElement(r.Fragment, null, _e(ee)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-boxplot", l)
  }, U.map(function(De, we) {
    var Ue = W ? D(De) : ye, Ge = W ? ye : D(De);
    return /* @__PURE__ */ r.createElement("circle", Da({
      key: "visx-boxplot-outlier-" + we,
      className: "visx-boxplot-outlier",
      cx: Ue,
      cy: Ge,
      r: 4,
      stroke: F,
      strokeWidth: T,
      fill: R,
      fillOpacity: k
    }, le));
  }), /* @__PURE__ */ r.createElement("line", Da({
    className: "visx-boxplot-max",
    x1: ee.max.x1,
    y1: ee.max.y1,
    x2: ee.max.x2,
    y2: ee.max.y2,
    stroke: F,
    strokeWidth: T
  }, V)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: ee.maxToThird.x1,
    y1: ee.maxToThird.y1,
    x2: ee.maxToThird.x2,
    y2: ee.maxToThird.y2,
    stroke: F,
    strokeWidth: T
  }), /* @__PURE__ */ r.createElement("rect", Da({
    className: "visx-boxplot-box",
    x: ee.box.x1,
    y: ee.box.y1,
    width: ee.box.x2,
    height: ee.box.y2,
    stroke: F,
    strokeWidth: T,
    fill: R,
    fillOpacity: k,
    rx: O,
    ry: P
  }, oe)), /* @__PURE__ */ r.createElement("line", Da({
    className: "visx-boxplot-median",
    x1: ee.median.x1,
    y1: ee.median.y1,
    x2: ee.median.x2,
    y2: ee.median.y2,
    stroke: F,
    strokeWidth: T
  }, ce)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: ee.minToFirst.x1,
    y1: ee.minToFirst.y1,
    x2: ee.minToFirst.x2,
    y2: ee.minToFirst.y2,
    stroke: F,
    strokeWidth: T
  }), /* @__PURE__ */ r.createElement("line", Da({
    className: "visx-boxplot-min",
    x1: ee.min.x1,
    y1: ee.min.y1,
    x2: ee.min.x2,
    y2: ee.min.y2,
    stroke: F,
    strokeWidth: T
  }, X)), j && /* @__PURE__ */ r.createElement("rect", Da({
    x: ee.container.x1,
    y: ee.container.y1,
    width: ee.container.x2,
    height: ee.container.y2,
    fillOpacity: "0"
  }, ue)));
}
ky.propTypes = {
  max: Fe.number,
  min: Fe.number,
  firstQuartile: Fe.number,
  thirdQuartile: Fe.number,
  median: Fe.number,
  boxWidth: Fe.number,
  fill: Fe.string,
  fillOpacity: Fe.oneOfType([Fe.number, Fe.string]),
  stroke: Fe.string,
  strokeWidth: Fe.oneOfType([Fe.number, Fe.string]),
  rx: Fe.number,
  ry: Fe.number,
  outliers: Fe.arrayOf(Fe.number),
  container: Fe.bool,
  children: Fe.func
};
const kE = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: i } = de.useContext(Ct), { boxplot: a } = n;
  de.useEffect(() => {
    n.legend.hide === !1 && i({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, f = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${a.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${T.columnIqr}<br/>
      ${a.labels.median}: ${T.columnMedian}
    `, d = (T) => Number(T.columnMax), u = (T) => Number(T.columnMin), h = (T) => Number(T.columnMedian), y = (T) => Number(T.columnThirdQuartile), v = (T) => Number(T.columnFirstQuartile), S = 0.5, R = e.bandwidth(), k = Math.min(40, R), F = dr[n == null ? void 0 : n.palette][0] ? dr[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Dr, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(at, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const O = R - k, N = 4;
    return /* @__PURE__ */ r.createElement(at, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((P, D) => /* @__PURE__ */ r.createElement("circle", { cx: e(T.columnCategory) + Number(n.yAxis.size) + R / 2, cy: t(P), r: N, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${D}` })), /* @__PURE__ */ r.createElement(
      ky,
      {
        "data-left": e(T.columnCategory) + n.yAxis.size + O / 2 + 0.5,
        key: `box-plot-${m}`,
        min: u(T),
        max: d(T),
        left: Number(e(T.columnCategory)) + Number(n.yAxis.size) + O / 2 + 0.5,
        firstQuartile: v(T),
        thirdQuartile: y(T),
        median: h(T),
        boxWidth: k,
        fill: F,
        fillOpacity: S,
        stroke: "black",
        valueScale: t,
        outliers: a.plotOutlierValues ? T.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${F}`,
            opacity: 1
          }
        },
        medianProps: {
          style: {
            stroke: "black"
          }
        },
        boxProps: {
          style: {
            stroke: "black",
            strokeWidth: a.borders === "true" ? 1 : 0
          }
        },
        maxProps: {
          style: {
            stroke: "black"
          }
        },
        container: !0,
        containerProps: {
          "data-tooltip-html": f(T),
          "data-tooltip-id": l,
          tabIndex: -1
        }
      }
    ));
  })));
}, wE = ({ xScale: e, yScale: t }) => {
  const { transformedData: n, config: i, tableData: a, formatNumber: l, seriesHighlight: f, colorPalettes: d } = de.useContext(Ct), u = 4.5, h = Object.keys(i.runtime.seriesLabels).length > 1, y = Object.entries(i.columns).filter(([S, R]) => R.tooltips).map(([S, R]) => [
    R.label || R.name,
    R.name,
    {
      addColPrefix: R.prefix,
      addColSuffix: R.suffix,
      addColRoundTo: R.roundToPlace,
      addColCommas: R.commas
    }
  ]), v = (S, R, k) => `<div>
    ${i.legend.showLegendValuesTooltip && i.runtime.seriesLabels && h ? `${i.runtime.seriesLabels[R] || ""}<br/>` : ""}
    ${i.xAxis.label}: ${l(S[i.xAxis.dataKey], "bottom")} <br/>
    ${i.yAxis.label}: ${l(S[R], "left")}<br/>
   ${y.map(([F, T, m]) => `${F} : ${Tf(a[k][T], "left", !1, i, m)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ r.createElement(at, { className: "scatter-plot", left: i.yAxis.size }, n.map((S, R) => i.runtime.seriesKeys.map((k, F) => {
    const T = i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(k) === -1, m = i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(k) !== -1, O = i.palette ? d[i.palette][F] : "#000";
    let N = {
      filter: "unset",
      opacity: 1,
      stroke: m ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${R}-${F}`,
        r: u,
        cx: e(S[i.xAxis.dataKey]),
        cy: t(S[k]),
        fill: m ? O : "transparent",
        fillOpacity: T ? 0.25 : 1,
        style: N,
        "data-tooltip-html": v(S, k, R),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function TE({ height: e, xScale: t }) {
  const { transformedData: n, config: i, formatNumber: a, twoColorPalette: l, getTextWidth: f, updateConfig: d, parseDate: u, formatDate: h, currentViewport: y } = de.useContext(Ct), { barStyle: v, tipRounding: S, roundingStyle: R, twoColor: k } = i, F = de.useRef([]), [T, m] = de.useState(window.innerWidth), O = R === "standard" ? "8px" : R === "shallow" ? "5px" : R === "finger" ? "15px" : "0px", N = { small: 16, medium: 18, large: 20 };
  i.barStyle;
  const P = Number(i.xAxis.target), D = i.series[0].dataKey, L = Number(t.domain()[1]), W = n.some((G) => G[D] < 0) || P > 0 || t.domain()[0] < 0, Z = i.barHasBorder === "true" ? 1 : 0, ce = i.lollipopSize === "large" ? 7 : i.lollipopSize === "medium" ? 6 : 5, te = i.lollipopSize === "large" ? 14 : i.lollipopSize === "medium" ? 12 : 10, V = Math.max(t(0), Math.min(t(P), t(L))), K = (G) => {
    if (G == null || v !== "rounded")
      return;
    let j = {};
    return G === "left" && (j = { borderRadius: `${O} 0 0 ${O}` }), G === "right" && (j = { borderRadius: `0 ${O} ${O} 0` }), S === "full" && (j = { borderRadius: O }), j;
  }, X = {
    calculate: function() {
      const j = n[0][D] < P ? "left" : "right", J = `${i.xAxis.targetLabel} ${a(i.xAxis.target || 0, "left")}`, ue = f(J, `bold ${N[i.fontSize]}px sans-serif`);
      let _e = i.isLollipopChart ? ce / 2 : Number(i.barHeight) / 2, be = 0, ye = 0, Le = !1;
      j === "right" && (be = -10, Le = ue - be < V, ye = V - ue), j === "left" && (be = 10, Le = t(L) - V > ue + be, ye = V), this.text = J, this.y = _e, this.x = ye, this.padding = be, this.showLabel = i.xAxis.showTargetLabel ? Le : !1;
    }
  };
  X.calculate();
  const B = de.useRef(null), oe = Kf(B, {});
  de.useEffect(() => {
    const G = () => {
      var j;
      m(window.innerWidth), (j = F.current) == null || j.forEach((J) => {
        !J || !J.style || (J.style.transition = "none", J.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", G), () => {
      window.removeEventListener("resize", G);
    };
  }, []);
  const [re, le] = de.useState(!1);
  return de.useEffect(() => {
    oe != null && oe.isIntersecting && setTimeout(() => {
      le(!0);
    }, 100);
  }, [oe == null ? void 0 : oe.isIntersecting, i.animate]), de.useEffect(() => {
    var G;
    (G = F.current) == null || G.forEach((j, J) => {
      if (!(!j || !j.style)) {
        if (i.animate) {
          const ue = P / L * 100;
          j.style.opacity = "0", j.style.transform = `translate(${ue / 1.07}%) scale(0, 1)`, setTimeout(() => {
            j.style.opacity = "1", j.style.transform = "translate(0) scale(1)", j.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          j.style.transition = "none", j.style.opacity = "0";
        i.animate || (j.style.transition = "none", j.style.opacity = "1");
      }
    });
  }, [i.animate, i, re]), /* @__PURE__ */ r.createElement(Dr, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(at, { left: Number(i.xAxis.size) }, n.map((G, j) => {
    const J = Number(G[D]), ue = i.isLollipopChart ? ce : Number(i.barHeight), _e = Number(i.barSpace), be = Math.abs(t(J) - V), ye = t(J), Le = J > P ? V : ye, ae = J < P ? "left" : "right";
    let Ie = 0;
    Ie = j !== 0 ? (_e + ue + Z) * j : Ie;
    const Ee = (_e + ue + Z) * n.length;
    i.heights.horizontal = Ee;
    const Pe = f(a(J, "left"), `normal ${N[i.fontSize]}px sans-serif`) < be - 6, ee = ye, De = Ie + ue / 2, we = ye, Ue = Ie + ue / 2, Ge = ye, et = Ie - ue / 2, Je = K(ae), [st, Ke] = l[k.palette], We = { left: st, right: Ke }, Be = jo("#000", We[ae]);
    let $e = CE(i.isLollipopChart, Pe, te, Be);
    const ht = a(J, "left"), qe = i.runtime.yAxis.type === "date" ? h(u(n[j][i.runtime.originalXAxis.dataKey])) : n[j][i.runtime.originalXAxis.dataKey];
    let pt = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${qe}` : qe, gt = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${ht}` : ht;
    const ut = `<div>
          ${pt}<br />
          ${gt}
            </div>`;
    return /* @__PURE__ */ r.createElement(at, { key: `deviation-bar-${i.orientation}-${D}-${j}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (Rt) => {
          F.current[j] = Rt;
        },
        x: Le,
        y: Ie,
        width: be,
        height: ue,
        "data-tooltip-html": ut,
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: be, height: ue, border: `${Z}px solid #333`, backgroundColor: We[ae], ...Je } })
    ), i.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(kt, { verticalAnchor: "middle", x: ee, y: De, ...$e[ae] }, a(G[D], "left")), i.isLollipopChart && i.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: we, cy: Ue, r: te / 2, fill: We[ae], style: { filter: "unset", opacity: 1 } }), i.isLollipopChart && i.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: Ge, y: et, width: te, height: te, fill: We[ae], style: { opacity: 1, filter: "unset" } }));
  }), X.showLabel && /* @__PURE__ */ r.createElement(kt, { fontWeight: "bold", dx: X.padding, verticalAnchor: "middle", x: X.x, y: X.y }, X.text), W && /* @__PURE__ */ r.createElement(an, { from: { x: V, y: 0 }, to: { x: V, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: B }));
}
function CE(e, t, n, i) {
  return e ? {
    right: {
      textAnchor: "start",
      dx: n + 6,
      fill: "#000000"
    },
    left: {
      textAnchor: "end",
      dx: -n,
      fill: "#000000"
    }
  } : {
    right: {
      textAnchor: t ? "end" : "start",
      dx: t ? -6 : 6,
      fill: t ? i : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? i : "#000000"
    }
  };
}
const AE = ({ xScale: e, yScale: t, height: n, width: i, handleTooltipMouseOver: a, handleTooltipMouseOff: l }) => {
  var k;
  const { transformedData: f, rawData: d, config: u, seriesHighlight: h } = de.useContext(Ct), { xAxis: y, yAxis: v, legend: S, runtime: R } = u;
  return f && /* @__PURE__ */ r.createElement(Dr, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(at, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (k = R.forecastingSeriesKeys) == null ? void 0 : k.map((F, T) => !F || !F.stages ? !1 : F.stages.map((m, O) => {
    var U;
    const { behavior: N } = S, P = d.filter((W) => W[F.stageColumn] === m.key);
    let D = N === "highlight" && h.length > 0 && h.indexOf(m.key) === -1, L = N === "highlight" || h.length === 0 || h.indexOf(m.key) !== -1;
    return /* @__PURE__ */ r.createElement(at, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (U = F.confidenceIntervals) == null ? void 0 : U.map((W, Z) => {
      const ce = $u[m.color] || dr[m.color] || !1, te = () => L && ce[2] ? ce[2] : "transparent", V = () => L && ce[1] ? ce[1] : "transparent";
      if (!(W.high === "" || W.low === ""))
        return /* @__PURE__ */ r.createElement(at, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${O}-${Z}` }, /* @__PURE__ */ r.createElement(
          p0,
          {
            curve: Ou,
            data: P,
            fill: te(),
            opacity: D ? 0.1 : 0.5,
            x: (K) => e(Date.parse(K[y.dataKey])),
            y0: (K) => t(K[W.low]),
            y1: (K) => t(K[W.high])
          }
        ), Z === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Kr, { data: P, x: (K) => Number(e(Date.parse(K[y.dataKey]))), y: (K) => Number(t(K[W.high])), curve: Ou, stroke: V(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Kr, { data: P, x: (K) => Number(e(Date.parse(K[y.dataKey]))), y: (K) => Number(t(K[W.low])), curve: Ou, stroke: V(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(at, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(i), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (F) => a(F, f), onMouseOut: l }))));
};
function Mu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Lc(e, t) {
  const n = e.series.every(({ type: S }) => S === "Bar"), i = e.series.every(({ type: S }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(S)), a = (S) => (R) => S.reduce((k, F) => isNaN(Number(R[F])) ? k : k + Number(R[F]), 0), l = () => {
    let S = Math.max(...t.map((R) => Math.max(...e.runtime.seriesKeys.map((k) => Mu(R[k]) ? Number(u(R[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const R = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      S = Math.max(...R);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const R = t.map(a(e.runtime.seriesKeys));
      S = Math.max(...R);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (S = Math.max(...t.map((R) => Mu(R[e.series.dataKey]) ? Number(u(R[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const R = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(u(T[m])))))), F = Math.max(...R);
      S = Math.max(F, k);
    }
    return S;
  }, f = () => {
    const S = Math.min(...t.map((R) => Math.min(...e.runtime.seriesKeys.map((k) => Mu(R[k]) ? Number(u(R[k])) : 1 / 0))));
    return String(S);
  }, d = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((S) => t.some((R) => R[S] >= 0)) : !1, u = (S) => S === null || S === "" ? "" : typeof S == "string" ? S.replace(/[,$]/g, "") : S, h = Number(l()), y = Number(f()), v = d();
  return { minValue: y, maxValue: h, existPositiveValue: v, isAllLine: i };
}
function Zf({ config: e, yMax: t = 0, data: n = [], updateConfig: i }) {
  var S, R, k, F;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Lc(e, n);
  const d = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((O, N) => m = [...m, ...n.map((P) => Number(P[O]))]), m;
  };
  let u = Math.max.apply(null, d(l));
  e.yAxis.rightMax > u && (u = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const h = ((R = (S = e.runtime) == null ? void 0 : S.barSeriesKeys) == null ? void 0 : R.length) > 0, y = ((F = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : F.length) > 0;
  return (h || y) && f > 0 && (f = 0), { yScaleRight: Kn({
    domain: [f, u],
    range: [t, 0]
  }), hasRightAxis: a };
}
const LE = (e) => {
  const { preliminaryData: t, data: n, stroke: i, strokeWidth: a, handleLineType: l, lineType: f, seriesKey: d } = e, u = t.filter((S) => S.seriesKey && S.column && S.value && S.type && S.style && S.type === "effect"), h = (S) => u.find((R) => R.seriesKey === d && S[R.column] === R.value && R.type === "effect" && R.style !== "Open Circles");
  let y = [];
  const v = (S) => ({
    stroke: i,
    strokeWidth: a,
    strokeDasharray: S
  });
  return n.forEach((S, R) => {
    let k = h(S), F = v(l(k ? k.style : f));
    y.push(F), k && R > 0 && (y[R - 1] = v(l(k.style)));
  }), y;
}, PE = (e, t, n) => {
  const i = e == null ? void 0 : e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey })), a = [];
  return t.forEach((l) => {
    i.forEach((f) => {
      l[f.column] === f.value && f.seriesKey === n && a.push(l);
    });
  }), a;
}, hc = (e) => !isNaN(parseFloat(e)) && isFinite(e), RE = (e, t, n) => {
  const i = {
    data: [],
    style: ""
  };
  if (!e.length)
    return i;
  const a = e[0], l = (d) => {
    if (!(d.type === "effect" || d.hideLineStyle))
      return d.type == "suppression" && d.value === a[t] && (!d.column || d.column === t);
  }, f = n.find(l);
  if (f && f.style) {
    const d = { ...a, [t]: 0 };
    i.data.push(d), i.style = f.style;
    let u = 1;
    for (; u < e.length && !hc(e[u][t]); )
      u++;
    u < e.length && i.data.push(e[u]);
  } else
    i.data.push(a);
  return i;
}, NE = (e, t, n) => {
  const i = {
    data: [],
    style: ""
  };
  let a = -1;
  return n == null || n.forEach((l) => {
    if (l.type !== "effect" && e[e.length - 1][t] === l.value && l.style && (!l.column || l.column === t) && l.type == "suppression" && !l.hideLineStyle) {
      const f = e.length - 1, d = { ...e[f], [t]: 0 };
      i.data.push(d);
      let u = f - 1;
      for (; u >= 0 && !hc(e[u][t]); )
        u--;
      u >= 0 && a !== u && (i.data.push(e[u]), a = u), i.style = l.style;
    }
  }), i;
};
function _E(e, t, n, i) {
  const a = {
    data: [],
    style: ""
  }, l = (f) => f > 0 && f < e.length - 1;
  return i == null || i.forEach((f) => {
    if (f.type === "effect" || f.hideLineStyle)
      return;
    const d = f.value;
    e.reduce((h, y, v) => (y[t] === d && l(v) && (!f.column || f.column === t) && h.push(v), h), []).forEach((h) => {
      a.style = f.style, hc(e[h - 1][t]) && a.data.push(e[h - 1]);
      const y = e.slice(h + 1).findIndex((v) => v[t] !== d && hc(v[t]));
      y !== -1 && a.data.push(e[h + 1 + y]);
    });
  }), a.data = ar.uniqWith(a.data, (f, d) => f[n] === d[n] && f[t] === d[t]), a;
}
const DE = (e, t, n, i) => {
  const a = RE(e, t, n), l = NE(e, t, n), f = _E(e, t, i, n);
  return [a, f, l].filter((d) => d.data.length > 0 && d.style !== "");
}, Vd = (e) => {
  var P, D, L, U, W, Z, ce, te;
  const { config: t, d: n, tableData: i, displayArea: a, seriesKey: l, tooltipData: f, xScale: d, yScale: u, colorScale: h, parseDate: y, yScaleRight: v, data: S, circleData: R, dataIndex: k, mode: F } = e, { lineDatapointStyle: T } = t, m = (P = t == null ? void 0 : t.series.filter((V) => V.dataKey === l)) == null ? void 0 : P[0], O = (V, K, X, B, oe) => {
    const re = X.runtime.seriesLabels || [];
    let le;
    return V ? le = K(re[B] || oe) : le = "transparent", X.lineDatapointColor === "Lighter than Line" && le !== "transparent" && le && (le = ps(le).brighten(1)), le;
  }, N = (V) => (t.xAxis.type === "categorical" ? d(V) : d(y(V))) + (d.bandwidth ? d.bandwidth() / 2 : 0);
  if (F === "ALWAYS_SHOW_POINTS") {
    if (T === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (T === "always show")
      return (R == null ? void 0 : R.some((K) => K[t.xAxis.dataKey] === n[t.xAxis.dataKey] && K[l] === n[l])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: N(n[t.xAxis.dataKey]),
          cy: m.axis === "Right" ? v(n[m.dataKey]) : u(n[m.dataKey]),
          r: 4.5,
          opacity: n[l] ? 1 : 0,
          fillOpacity: 1,
          fill: O(a, h, t, l, l),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (F === "HOVER_POINTS" && T === "hover") {
    if (!f || !l || !f.data)
      return;
    let V = (L = (D = f == null ? void 0 : f.data) == null ? void 0 : D[0]) == null ? void 0 : L[1];
    if (!V)
      return;
    let K, X = f.data.filter((re) => re[0] === l), B = (U = X == null ? void 0 : X[0]) == null ? void 0 : U[0], oe = (W = X == null ? void 0 : X[0]) == null ? void 0 : W[2];
    return B ? (f == null || f.data.indexOf(B), K = (Z = i == null ? void 0 : i.find((re) => re[t == null ? void 0 : t.xAxis.dataKey] === V)) == null ? void 0 : Z[l], f == null ? void 0 : f.data.map((re, le) => (t.runtime.seriesLabelsAll.indexOf(V), isNaN(K) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (R == null ? void 0 : R.some((j) => j[t.xAxis.dataKey] === V)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: N(V),
        cy: oe === "right" ? v(K) : u(K),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: O(a, h, t, B, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(re)}--${le}`
      }
    )))) : void 0;
  }
  return F === "ISOLATED_POINTS" && F && ((K, X) => {
    const B = S[K], oe = K > 0 ? S[K - 1] : null, re = K < S.length - 1 ? S[K + 1] : null;
    let le = !1;
    return K === 0 && re && !re[X] && (le = !0), K === S.length - 1 && oe && !oe[X] && (le = !0), K > 0 && K < S.length - 1 && B && B[X] && (!oe || !oe[X]) && (!re || !re[X]) && (le = !0), le;
  })(k, l) ? /* @__PURE__ */ r.createElement("circle", { cx: N(n[(ce = t.xAxis) == null ? void 0 : ce.dataKey]), cy: m.axis === "Right" ? v(n[m.dataKey]) : u(n[m == null ? void 0 : m.dataKey]), r: 5.3, strokeWidth: 2, stroke: h(t.runtime.seriesLabels[l]), fill: h((te = t.runtime) == null ? void 0 : te.seriesLabels[l]) }) : null;
}, _h = (e) => {
  var K;
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: i,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: l,
    tooltipData: f,
    xMax: d,
    xScale: u,
    yMax: h,
    yScale: y
  } = e, { colorScale: v, config: S, formatNumber: R, handleLineType: k, isNumber: F, parseDate: T, seriesHighlight: m, tableData: O, transformedData: N, updateConfig: P, brushConfig: D, clean: L } = de.useContext(Ct), { yScaleRight: U } = Zf({ config: S, yMax: h, data: N, updateConfig: P });
  if (!l)
    return;
  const { lineDatapointStyle: W, showLineSeriesLabels: Z, legend: ce } = S;
  let te = N, V = O;
  return D.data.length > 0 && ((K = S.brush) != null && K.active) && (te = L(D.data), V = L(D.data)), /* @__PURE__ */ r.createElement(Dr, { component: "LineChart" }, /* @__PURE__ */ r.createElement(at, { left: Number(S.runtime.yAxis.size) }, " ", (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((X, B) => {
    var be;
    let oe = S.series.filter((ye) => ye.dataKey === X)[0].type;
    const re = S.series.filter((ye) => ye.dataKey === X), le = re[0].axis ? re[0].axis : "left";
    let G = ce.behavior === "highlight" || m.length === 0 || m.indexOf(X) !== -1;
    const j = PE(S == null ? void 0 : S.preliminaryData, V, X);
    let J = LE({ preliminaryData: S.preliminaryData, data: V, stroke: v(S.runtime.seriesLabels[X]), strokeWidth: re[0].weight || 2, handleLineType: k, lineType: oe, seriesKey: X });
    const ue = DE(O, X, S.preliminaryData, S.xAxis.dataKey);
    let _e = (ye) => u(t(ye)) + (u.bandwidth ? u.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      at,
      {
        key: `series-${X}`,
        opacity: ce.behavior === "highlight" && m.length > 0 && m.indexOf(X) === -1 ? 0.5 : 1,
        display: ce.behavior === "highlight" || m.length === 0 && !ce.dynamicLegend || m.indexOf(X) !== -1 ? "block" : "none"
      },
      te.map((ye, Le) => {
        const ae = S.series.find(({ dataKey: ee }) => ee === X), { axis: Ie } = ae, Ee = Object.keys(S.runtime.seriesLabels).length > 1, he = Ie === "Right" ? "rightLabel" : "label";
        let Pe = S.runtime.yAxis[he];
        return Ee || (Pe = S.isLegendValue ? S.runtime.seriesLabels[X] : Pe), ye[X] !== void 0 && ye[X] !== "" && ye[X] !== null && F(ye[X]) && /* @__PURE__ */ r.createElement(at, { key: `series-${X}-point-${Le}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(d), height: Number(h), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ee) => l(ee, O), onMouseOut: a, onClick: (ee) => i(ee, te) }), /* @__PURE__ */ r.createElement(kt, { display: S.labels ? "block" : "none", x: _e(ye), y: le === "Right" ? U(n(ye, X)) : y(n(ye, X)), fill: "#000", textAnchor: "middle" }, R(ye[X], "left")), (W === "hidden" || W === "always show") && /* @__PURE__ */ r.createElement(
          Vd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Le,
            circleData: j,
            tableData: O,
            data: te,
            d: ye,
            config: S,
            seriesKey: X,
            displayArea: G,
            tooltipData: f,
            xScale: u,
            yScale: y,
            colorScale: v,
            parseDate: T,
            yScaleRight: U,
            seriesAxis: le,
            key: `line-circle--${Le}`
          }
        ), /* @__PURE__ */ r.createElement(
          Vd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Le,
            tableData: O,
            circleData: j,
            data: te,
            d: ye,
            config: S,
            seriesKey: X,
            displayArea: G,
            tooltipData: f,
            xScale: u,
            yScale: y,
            colorScale: v,
            parseDate: T,
            yScaleRight: U,
            seriesAxis: le,
            key: `isolated-circle-${Le}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, W === "hover" && /* @__PURE__ */ r.createElement(
        Vd,
        {
          tableData: O,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: j,
          data: te,
          config: S,
          seriesKey: X,
          displayArea: G,
          tooltipData: f,
          xScale: u,
          yScale: y,
          colorScale: v,
          parseDate: T,
          yScaleRight: U,
          seriesAxis: le
        }
      )),
      (be = S == null ? void 0 : S.preliminaryData) != null && be.some((ye) => ye.value && ye.type) ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Ym,
        {
          curve: ds[re[0].lineType],
          segments: te.map((ye) => [ye]),
          segmentation: "x",
          x: (ye) => _e(ye),
          y: (ye) => le === "Right" ? U(n(ye, X)) : y(Number(n(ye, X))),
          styles: J,
          defined: (ye, Le) => ye[X] !== "" && ye[X] !== null && ye[X] !== void 0
        }
      ), ue.map((ye, Le) => /* @__PURE__ */ r.createElement(
        Kr,
        {
          key: Le,
          data: ye.data,
          x: (ae) => _e(ae),
          y: (ae) => le === "Right" ? U(n(ae, X)) : y(Number(n(ae, X))),
          stroke: v(S.runtime.seriesLabels[X]),
          strokeWidth: re[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k(ye.style),
          defined: (ae, Ie) => ae[X] !== "" && ae[X] !== null && ae[X] !== void 0
        }
      ))) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Kr,
        {
          curve: ds[re[0].lineType],
          data: S.xAxis.type === "date-time" || S.xAxis.type === "date" ? te.sort((ye, Le) => {
            let ae = t(ye), Ie = t(Le);
            return ae < Ie ? -1 : Ie < ae ? 1 : 0;
          }) : te,
          x: (ye) => _e(ye),
          y: (ye) => le === "Right" ? U(n(ye, X)) : y(Number(n(ye, X))),
          stroke: v(S.runtime.seriesLabels[X]),
          strokeWidth: re[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: oe ? k(oe) : 0,
          defined: (ye, Le) => ye[X] !== "" && ye[X] !== null && ye[X] !== void 0
        }
      )),
      j.map((ye, Le) => /* @__PURE__ */ r.createElement(
        "circle",
        {
          key: Le,
          cx: _e(ye),
          cy: le === "Right" ? U(n(ye, X)) : y(Number(n(ye, X))),
          r: 6,
          strokeWidth: re[0].weight || 2,
          stroke: v ? v(S.runtime.seriesLabels[X]) : "#000",
          fill: "#fff"
        }
      )),
      S.animate && /* @__PURE__ */ r.createElement(
        Kr,
        {
          className: "animation",
          curve: ds[re[0].lineType],
          data: te,
          x: (ye) => _e(ye),
          y: (ye) => le === "Right" ? U(n(ye, X)) : y(Number(n(ye, X))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: oe ? k(oe) : 0,
          defined: (ye, Le) => ye[X] !== "" && ye[X] !== null && ye[X] !== void 0
        }
      ),
      Z && (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((ye) => {
        let Le;
        for (let ae = te.length - 1; ae >= 0; ae--)
          if (te[ae][ye]) {
            Le = te[ae];
            break;
          }
        return Le ? /* @__PURE__ */ r.createElement("text", { x: _e(Le) + 5, y: y(n(Le, ye)), alignmentBaseline: "middle", fill: S.colorMatchLineSeriesLabels && v ? v(S.runtime.seriesLabels[ye] || ye) : "black" }, S.runtime.seriesLabels[ye] || ye) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), S.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ r.createElement(kt, { x: d / 2, y: h / 2, fill: "black", textAnchor: "middle", color: "black" }, S.legend.dynamicLegendChartMessage)));
}, OE = (e) => {
  const { rawData: t, updateConfig: n } = de.useContext(Ct), { xScale: i, yScale: a, config: l, height: f, width: d, handleTooltipMouseOff: u, handleTooltipMouseOver: h } = e, { forestPlot: y } = l, v = l.xAxis.tickWidthMax + 10, [S, R] = de.useState(!1);
  de.useEffect(() => {
    try {
      const P = ["estimateField", "lower", "upper", "estimateRadius"], D = l, L = 10;
      for (let U = 0; U < L; U++)
        P.forEach((W) => {
          var Z;
          l.forestPlot[W] && l.forestPlot[W] !== ((Z = D.columns[l.forestPlot[`additionalColumn${U}`]]) == null ? void 0 : Z.name) && (delete D.columns[`additionalColumn${U}`], D.columns[l.forestPlot[W]] = {}, D.columns[l.forestPlot[W]].dataKey = D.forestPlot[W], D.columns[l.forestPlot[W]].name = D.forestPlot[W], D.columns[l.forestPlot[W]].dataTable = !0, D.columns[l.forestPlot[W]].tooltips = !0, D.columns[l.forestPlot[W]].label = D.forestPlot[W]);
        });
      l.forestPlot.radius.scalingColumn && (D.columns[l.forestPlot.radius.scalingColumn] = {}, D.columns[l.forestPlot.radius.scalingColumn].dataKey = D.forestPlot.radius.scalingColumn, D.columns[l.forestPlot.radius.scalingColumn].name = D.forestPlot.radius.scalingColumn, D.columns[l.forestPlot.radius.scalingColumn].label = D.forestPlot.radius.scalingColumn, D.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, D.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), D.table.showVertical && (D.table.indexLabel = l.xAxis.dataKey), n(D);
    } catch (P) {
      console.log(P.message);
    }
  }, []), de.useEffect(() => {
    !S && l.forestPlot.type === "Logarithmic" && (n({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), R(!0));
  }, [l.forestPlot.type]);
  const k = l.data.find((P) => P[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), F = k ? [
    { x: i(k[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.estimateField]), y: f - y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.upper]), y: f - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.estimateField]), y: f + y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: i(k[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) }
  ] : [], T = l.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: d, y: T }
  ], O = [
    { x: 0, y: f },
    { x: d, y: f }
  ], N = Object.entries(l.columns).map((P) => P[1]).filter((P) => P.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { width: d }, y.title && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot--title", x: y.type === "Linear" ? i(0) : i(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ r.createElement(an, { from: { x: i(0), y: 0 + T }, to: { x: i(0), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ r.createElement(an, { from: { x: i(1), y: 0 + T }, to: { x: i(1), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((P, D) => {
    const L = Kn({
      domain: t.map((V) => V[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), U = y.radius.scalingColumn !== "" ? L(t[D][y.radius.scalingColumn]) : 4, W = y.colors.shape ? y.colors.shape : "black", Z = y.colors.line ? y.colors.line : "black", ce = 4;
    return P[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ r.createElement(Kr, { data: F, x: (V) => V.x, y: (V) => V.y - Ei(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Jd }) : /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: Z,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${i(P[y.lower])} ${a(D) - Number(ce)}
                    L${i(P[y.lower])} ${a(D) + Number(ce)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: Z,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${i(P[y.upper])} ${a(D) - Number(ce)}
                    L${i(P[y.upper])} ${a(D) + Number(ce)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: Z, className: `line-${P[l.yAxis.dataKey]}`, key: D, x1: i(P[y.lower]), x2: i(P[y.upper]), y1: a(D), y2: a(D) }), y.shape === "circle" && /* @__PURE__ */ r.createElement(Jy, { className: "forest-plot--circle", cx: i(Number(P[y.estimateField])), cy: a(D), r: y.radius.scalingColumn !== "" ? L(t[D][y.radius.scalingColumn]) : 4, fill: W, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: i(Number(P[y.estimateField])), y: a(D) - U / 2, width: U, height: U, fill: W, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot--text", x: i(Number(P[y.estimateField])), y: a(D), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: W }, P[y.estimateField]));
  }), F && y.regression.showDiamond && /* @__PURE__ */ r.createElement(Kr, { data: F, x: (P) => P.x, y: (P) => P.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Jd }), y.regression.description && /* @__PURE__ */ r.createElement(kt, { x: 0 - Number(l.xAxis.size), width: d, y: f - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ r.createElement(kr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: d, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (P) => h(P, t), onMouseOut: u })), /* @__PURE__ */ r.createElement(an, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(an, { from: O[0], to: O[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), N.map((P) => t.map((D, L) => /* @__PURE__ */ r.createElement(kt, { className: `${D[P.name]}`, x: P.forestPlotAlignRight ? d : P.forestPlotStartingPoint, y: a(L), textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, D[P.name]))), !y.hideDateCategoryCol && t.map((P, D) => /* @__PURE__ */ r.createElement(kt, { className: `${P[l.xAxis.dataKey]}`, x: 0, y: a(D), textAnchor: "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, P[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(kt, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, l.xAxis.dataKey), N.map((P) => /* @__PURE__ */ r.createElement(kt, { className: `${P.label}`, x: P.forestPlotAlignRight ? d : P.forestPlotStartingPoint, y: 0, textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, P.label)), y.leftLabel && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot__left-label", x: y.type === "Linear" ? i(0) - 25 : i(1) - 25, y: f + v, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot__right-label", x: y.type === "Linear" ? i(0) + 25 : i(1) + 25, y: f + v, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, FE = ({ width: e, height: t, originalWidth: n }) => {
  var N, P, D;
  const { config: i, colorScale: a, transformedData: l, formatNumber: f, seriesHighlight: d, getTextWidth: u } = de.useContext(Ct);
  if (!i || ((N = i == null ? void 0 : i.series) == null ? void 0 : N.length) < 2)
    return;
  const h = i.barHasBorder === "true" ? 1 : 0, y = e / 2, v = { small: 16, medium: 18, large: 20 }, S = 1.02, R = {
    parentKey: (P = i.dataDescription) == null ? void 0 : P.seriesKey,
    dataKey: i.series[0].dataKey,
    dataKeyLabel: i.runtime.seriesLabels[i.series[0].dataKey] || i.series[0].dataKey,
    color: a(i.runtime.seriesLabels[i.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((L) => L[i.series[0].dataKey])
    ),
    labelColor: ""
  }, k = {
    parentKey: (D = i.dataDescription) == null ? void 0 : D.seriesKey,
    dataKey: i.series[1].dataKey,
    dataKeyLabel: i.runtime.seriesLabels[i.series[1].dataKey] || i.series[1].dataKey,
    color: a(i.runtime.seriesLabels[i.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((L) => L[i.series[1].dataKey])
    ),
    labelColor: ""
  }, F = Kn({
    domain: [0, Math.max(R.max * S, k.max * 1.1)],
    range: [0, y]
  });
  R.labelColor = R.color ? jo("#000", R.color) : "#000", k.labelColor = k.color ? jo("#000", k.color) : "#000";
  const T = i.yAxis.label ? `${i.yAxis.label}: ` : "", m = (L) => {
    var U;
    return `<p>
				${(U = i.dataDescription) == null ? void 0 : U.seriesKey}: ${R.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${L[i.xAxis.dataKey]}<br/>
				${T}${f(L[R.dataKey], "left")}
			</p>`;
  }, O = (L) => {
    var U;
    return `<p>
				${(U = i.dataDescription) == null ? void 0 : U.seriesKey}: ${k.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${L[i.xAxis.dataKey]}<br/>
				${T}${f(L[k.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(i.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Paired bar chart graphic with the title ${i.title ? i.title : "No Title Found"}`), /* @__PURE__ */ r.createElement(at, { top: 0, left: Number(i.xAxis.size) }, l.filter((L) => i.series[0].dataKey === R.dataKey).map((L, U) => {
    var oe, re;
    let W = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[0].dataKey) === -1, Z = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[0].dataKey) !== -1, ce = F(L[i.series[0].dataKey]), te = Number(i.barHeight) ? Number(i.barHeight) : 25, V = 0;
    V = U !== 0 ? (Number(i.barSpace) + te + h) * U : V;
    const K = (Number(i.barSpace) + te + h) * l.length;
    i.heights.horizontal = K;
    const B = u(f(L[R.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < ce - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: `group-${R.dataKey}-${L[i.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${R.dataKey}-${L[(oe = i.dataDescription) == null ? void 0 : oe.xKey]}`,
        className: "bar group-1",
        key: `bar-${R.dataKey}-${L[(re = i.dataDescription) == null ? void 0 : re.xKey]}`,
        x: y - ce,
        y: V,
        width: F(L[i.series[0].dataKey]),
        height: te,
        fill: R.color,
        "data-tooltip-html": m(L),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: h,
        opacity: W ? 0.5 : 1,
        display: Z ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && Z && /* @__PURE__ */ r.createElement(kt, { textAnchor: B ? "start" : "end", dx: B ? 5 : -5, verticalAnchor: "middle", x: y - ce, y: V + i.barHeight / 2, fill: B ? R.labelColor : "#000" }, f(L[R.dataKey], "left"))));
  }), l.filter((L) => i.series[1].dataKey === k.dataKey).map((L, U) => {
    var oe, re, le;
    let W = F(L[i.series[1].dataKey]), Z = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[1].dataKey) === -1, ce = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[1].dataKey) !== -1, te = i.barHeight ? Number(i.barHeight) : 25, V = 0;
    V = U !== 0 ? (Number(i.barSpace) + te + h) * U : V;
    const K = (Number(i.barSpace) + te + h) * l.length;
    i.heights.horizontal = K;
    const B = u(f(L[k.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < W - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${k.dataKey}-${L[i.xAxis.dataKey]} {
                          transform-origin: ${y}px ${V}px
                      }
							      `), /* @__PURE__ */ r.createElement(at, { key: `group-${k.dataKey}-${L[(oe = i.dataDescription) == null ? void 0 : oe.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${k.dataKey}-${L[(re = i.dataDescription) == null ? void 0 : re.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${L[(le = i.dataDescription) == null ? void 0 : le.xKey]}`,
        x: y,
        y: V,
        width: F(L[i.series[1].dataKey]),
        height: te,
        fill: k.color,
        "data-tooltip-html": O(L),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        strokeWidth: h,
        stroke: "#333",
        opacity: Z ? 0.5 : 1,
        display: ce ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && ce && /* @__PURE__ */ r.createElement(kt, { textAnchor: B ? "end" : "start", dx: B ? -5 : 5, verticalAnchor: "middle", x: y + W, y: V + i.barHeight / 2, fill: B ? k.labelColor : "#000" }, f(L[k.dataKey], "left"))));
  }))));
}, wy = ({ config: e, minValue: t, maxValue: n, existPositiveValue: i, data: a, isAllLine: l, tableData: f }) => {
  let d = 0, u = 0, h = 0, y = 0;
  if (!a)
    return { min: d, max: u };
  const v = () => Ac(e.visualizationType, a, e.allowLineToBarGraph), { visualizationType: S, series: R } = e, { max: k, min: F } = e.runtime.yAxis, T = i ? k >= n : k >= 0, m = e.useLogScale ? F >= 0 : F <= 0 && t >= 0 || F <= t && t < 0;
  d = F && m ? F : t, u = k && T ? k : Number.MIN_VALUE;
  const { lower: O, upper: N } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (O && N && e.visualizationType === "Bar") {
    const P = d < 0 ? 1.1 : 0;
    u = Math.max(n, Math.max(...a.flatMap((D) => [D[N], D[O]])) * 1.15), d = Math.min(t, Math.min(...a.flatMap((D) => [D[N], D[O]])) * 1.15) * P;
  }
  if (e.series.filter((P) => (P == null ? void 0 : P.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: P }
    } = e;
    if ((P == null ? void 0 : P.length) > 0) {
      let D = [];
      P.forEach((Z) => {
        var ce;
        (ce = Z.confidenceIntervals) == null || ce.map((te) => {
          D.push(te.high), D.push(te.low);
        });
      });
      const L = a.map((Z) => D.map((ce) => Z[ce])), U = Math.max.apply(
        null,
        L.map((Z) => Z[0])
      ), W = Math.min.apply(
        null,
        L.map((Z) => Z[1])
      );
      U > u && (u = U), W < d && (d = W);
    }
  }
  if (S === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let P = R.filter((U) => U.axis === "Left"), D = R.filter((U) => U.axis === "Right");
      const L = (U, W, Z, ce = "left") => {
        let te = 0;
        return (W.map((K) => K.dataKey) || []).forEach((K) => {
          let X = W.find((re) => re.dataKey === K), B = U.map((re) => re[K]), oe = Math.max.apply(null, B);
          e.visualizationSubType === "stacked" && ce === "left" && X.type === "Bar" && (te += oe), oe > Z && (Z = oe), Z < te && (Z = te);
        }), Z;
      };
      h = L(a, P, h, "left"), y = L(a, D, y, "right"), h < k && (h = k);
    } catch (P) {
      console.error(P.message);
    }
  if ((S === "Bar" || v() || S === "Combo" && !l) && d > 0 && (d = 0), (e.visualizationType === "Bar" || v() || e.visualizationType === "Combo" && !l) && d < 0 && (d = d * 1.1), e.visualizationType === "Combo" && l && ((F == null || F === "") && d > 0 && (d = 0), F)) {
    const P = e.useLogScale ? F >= 0 && F < t : F < t;
    d = F && P ? F : t;
  }
  if (e.visualizationType === "Deviation Bar" && d > 0) {
    const P = Number(F) < Math.min(t, Number(e.xAxis.target));
    d = F && P ? F : 0;
  }
  if (e.visualizationType === "Line" && !v()) {
    const P = e.useLogScale ? F >= 0 && F < t : F < t, D = f == null ? void 0 : f.some((L, U) => {
      var W;
      return (W = e.preliminaryData) == null ? void 0 : W.some((Z) => {
        var K;
        if (Z.type !== "suppression" || !Z.style)
          return !1;
        const ce = ar.pick(L, (K = e.runtime) == null ? void 0 : K.seriesKeys), te = ar.values(ce).includes(Z.value);
        return (Z.column ? L[Z.column] === Z.value : te) && (U === 0 || U === f.length - 1);
      });
    });
    d = F && P ? F : D ? 0 : t;
  }
  if (u === Number.MIN_VALUE && (u = i ? n : 0), e.runtime.yAxis.paddingPercent) {
    let P = (u - d) * e.runtime.yAxis.paddingPercent;
    d -= P, u += P;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const P = a.map((L) => L[e.series[0].dataKey]), D = Math.max(...P).toString().length;
    switch (!0) {
      case (D > 8 && D <= 12):
        u = u * 1.3;
        break;
      case (D > 4 && D <= 7):
        u = u * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (d < 0 ? (u *= 1 + e.yAxis.scalePadding * 2 / 100, d *= 1 + e.yAxis.scalePadding * 2 / 100) : u *= 1 + e.yAxis.scalePadding / 100), { min: d, max: u, leftMax: h, rightMax: y };
}, Wr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, ME = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: i, min: a, max: l, config: f, data: d } = e;
  const { rawData: u, dimensions: h } = de.useContext(Ct), [y, v] = h, S = f.runtime.barSeriesKeys || f.runtime.seriesKeys, R = f.runtime.xAxis.type, k = f.orientation === "horizontal", F = (Z) => Z[f.runtime.originalXAxis.dataKey], T = d.map((Z) => F(Z)), { visualizationType: m } = f;
  let O = null, N = null, P = null, D = null, L = null, U = null, W = null;
  if (k && (O = IE({ min: a * 1.03, ...e }), O.type = f.useLogScale ? Wr.LOG : Wr.LINEAR, N = BE(R, t), N.rangeRound([0, i]), L = Dh(S, [0, i])), k || (W = Dh(T, [0, n], 0.5), O = Pu(t, [0, n], 1 - f.barThickness), N = $E(e), L = Pu(S, [0, O.bandwidth()], 0)), f.xAxis.type === "date" && !k) {
    const Z = t ? t.sort() : [];
    O = Pu(Z, [0, n], 1 - f.barThickness);
  }
  if (f.xAxis.type === "date-time") {
    let Z = Math.min(...t), ce = Math.max(...t);
    Z -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (ce - Z), ce += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (ce - Z), O = zg({
      domain: [Z, ce],
      range: [0, n]
    }), O.type = Wr.TIME;
    let te = Number.MAX_VALUE, V = t ? t.sort() : [];
    for (let K = 0; K < V.length - 1; K++) {
      let X = O(V[K + 1]) - O(V[K]);
      X < te && (te = X);
    }
    (t.length === 1 || te > n / 4) && (te = n / 4), L = Pu(S, [0, (f.barThickness || 1) * te], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const Z = f.isLollipopChart ? 1.05 : 1.03;
    N = Kd({
      domain: t,
      range: [0, i]
    }), O = Kn({
      domain: [a * Z, Math.max(Number(f.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), O.type = Wr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (O = Kn({
    domain: [0, Math.max.apply(null, O.domain())],
    range: [0, n]
  }), O.type = Wr.LINEAR), m === "Box Plot") {
    const Z = [];
    if (f.boxplot.plots.map((K) => K.columnOutliers.map((X) => Z.push(X))) && !f.boxplot.hideOutliers) {
      let K = Math.min(...Z), X = Math.max(...Z);
      K < a && (a = K), X > l && (l = X);
    }
    let te = Math.min(...f.boxplot.plots.map((K) => K.columnLowerBounds)), V = Math.max(...f.boxplot.plots.map((K) => K.columnUpperBounds));
    te < a && (a = te), V > l && (l = V), N = Kn({
      range: [i, 0],
      round: !0,
      domain: [a, l]
    }), O = Kd({
      range: [0, n],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), O.type = Wr.BAND;
  }
  if (m === "Paired Bar") {
    let ce = Math.max.apply(
      Math,
      d.map((V) => {
        var K;
        return V[(K = f.series[0]) == null ? void 0 : K.dataKey];
      })
    ), te = Math.max.apply(
      Math,
      d.map((V) => {
        var K;
        return V[(K = f.series[1]) == null ? void 0 : K.dataKey];
      })
    );
    D = Kn({
      domain: [0, Math.max(ce, te) * 1.02],
      range: [n / 2, 0]
    }), P = Kn({
      domain: D.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const Z = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, i - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, i];
    N = Kn({
      domain: [0, u.length],
      range: Z()
    });
    const ce = 5, te = Number(f.forestPlot.leftWidthOffset) / 100 * n, V = Number(f.forestPlot.rightWidthOffset) / 100 * n, K = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * n, X = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (y > 480) {
      if (f.forestPlot.type === "Linear" && (O = Kn({
        domain: [Math.min(...d.map((B) => parseFloat(B[f.forestPlot.lower]))) - ce, Math.max(...d.map((B) => parseFloat(B[f.forestPlot.upper]))) + ce],
        range: [te, h[0] - V]
      }), O.type = Wr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let B = Math.max(...d.map((re) => parseFloat(re[f.forestPlot.upper]))), oe = Math.min(...d.map((re) => parseFloat(re[f.forestPlot.lower])));
        O = Wu({
          domain: [oe, B],
          range: [te, n - V],
          nice: !0
        }), O.type = Wr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (O = Kn({
      domain: [Math.min(...d.map((B) => parseFloat(B[f.forestPlot.lower]))) - ce, Math.max(...d.map((B) => parseFloat(B[f.forestPlot.upper]))) + ce],
      range: [X, n - K],
      type: Wr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let B = Math.max(...d.map((re) => parseFloat(re[f.forestPlot.upper]))), oe = Math.min(...d.map((re) => parseFloat(re[f.forestPlot.lower])));
      O = Wu({
        domain: [oe, B],
        range: [te, n - V],
        nice: !0,
        base: B > 1 ? 10 : 2,
        round: !1,
        type: Wr.LOG
      });
    }
  }
  return { xScale: O, yScale: N, seriesScale: L, g1xScale: D, g2xScale: P, xScaleNoPadding: U, xScaleBrush: W };
}, zE = (e, t, n) => {
  const i = t.domain();
  if (t.type === "time") {
    const a = e[e.length - 1], l = e[0], f = (a - l) / (n - 1), d = [];
    for (let u = a; u >= l; u -= f)
      d.push(u);
    return d[d.length - 1] !== l && d.push(l), d.reverse(), d;
  }
  if (i.length > 2) {
    const a = n || 1, l = [];
    for (let f = i.length; f > 0; f -= a) {
      const d = Math.max(Math.round(f) - 1, 0);
      l.push(i[d]);
    }
    return l.reverse(), l;
  }
}, IE = ({ min: e, max: t, xMax: n, config: i }) => (e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (i.useLogScale ? Wu : Kn)({
  domain: [e, t],
  range: [0, n],
  nice: i.useLogScale,
  zero: i.useLogScale
})), $E = ({ min: e, max: t, yMax: n, config: i, leftMax: a }) => {
  e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = i.useLogScale ? Wu : Kn;
  return i.visualizationType === "Combo" && (t = a), l({
    domain: [e, t],
    range: [n, 0],
    nice: i.useLogScale,
    zero: i.useLogScale
  });
}, BE = (e, t) => e === "date" ? Kn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Bo({ domain: t, padding: 0.5 }), Dh = (e, t, n = 0) => Bo({
  domain: e,
  range: t,
  padding: n
}), Pu = (e, t, n = 0) => Kd({
  domain: e,
  range: t,
  padding: n
});
function HE(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const ks = () => {
  const { config: e } = de.useContext(Ct), { visualizationType: t, series: n, orientation: i, visualizationSubType: a } = e, l = [
    "Area Chart",
    "Bar",
    "Box Plot",
    "Combo",
    "Deviation Bar",
    "Forecasting",
    // 'Forest Plot',
    "Line",
    "Paired Bar",
    "Pie",
    "Scatter Plot",
    "Spark Line",
    "Sankey"
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], d = () => !["Forest Plot", "Sankey"].includes(t), u = () => !["Spark Line"].includes(t), h = () => !["Spark Line"].includes(t), y = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), S = () => {
    switch (t) {
      case "Box Plot":
        return !1;
      case "Forest Plot":
        return !1;
      case "Spark Line":
        return !1;
      case "Sankey":
        return !1;
      default:
        return !0;
    }
  }, R = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), k = () => e.visualizationType === "Bar" && e.visualizationSubType === "stacked" ? !1 : !!["Bar", "Combo"].includes(e.visualizationType), F = () => {
    switch (t) {
      case "Area Chart":
        return !0;
      case "Combo":
        return !0;
      case "Line":
        return !0;
      case "Bar":
        return !0;
      case "Scatter Plot":
        return !0;
      default:
        return !1;
    }
  }, T = () => {
    if ((t === "Bar" || "Combo") && a === "regular")
      return !0;
  }, m = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && i === "vertical", O = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((Ue) => Ue.type === "Bar" || Ue.type === "Paired Bar" || Ue.type === "Deviation Bar"), N = () => {
    switch (t) {
      case "Sankey":
        return !1;
      case "Forest Plot":
        return !1;
      case "Box Plot":
        return !1;
      case "Pie":
        return !1;
      case "Spark Line":
        return !1;
      default:
        return !0;
    }
  }, P = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: l,
    headerColors: f,
    visCanAnimate: v,
    visHasAnchors: F,
    visHasBarBorders: O,
    visHasDataCutoff: N,
    visHasLabelOnData: y,
    visHasDataSuppression: T,
    visHasLegend: S,
    visHasLegendAxisAlign: () => t === "Bar" && a === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: m,
    visHasNumbersOnBars: R,
    visHasaAdditionalLabelsOnBars: k,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : i === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: d,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: h,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsPreliminaryData: () => (e == null || e.series.some((we) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(we == null ? void 0 : we.type)), t === "Line" || t === "Bar" && a === "regular" || t === "Combo"),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: u,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: P,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const we = ["Forest Plot"];
      return !(i === "horizontal" || we.includes(t));
    },
    visSupportsValueAxisLabels: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisLine: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisTicks: () => !["Forest Plot"].includes(t),
    visSupportsReactTooltip: () => {
      if (["Deviation Bar", "Box Plot", "Scatter Plot", "Paired Bar"].includes(t) || t === "Bar" && e.tooltips.singleSeries)
        return !0;
    },
    visSupportsValueAxisMax: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisMin: () => !["Forest Plot"].includes(t)
  };
};
var WE = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function VE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ty(e) {
  var t = e.id, n = e.markerWidth, i = n === void 0 ? 3 : n, a = e.markerHeight, l = a === void 0 ? 3 : a, f = e.markerUnits, d = f === void 0 ? "userSpaceOnUse" : f, u = e.children, h = VE(e, WE);
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("marker", kf({
    id: t,
    markerWidth: i,
    markerHeight: l,
    markerUnits: d
  }, h), u));
}
Ty.propTypes = {
  id: Fe.string.isRequired,
  size: Fe.number,
  markerWidth: Fe.oneOfType([Fe.string, Fe.number]),
  markerHeight: Fe.oneOfType([Fe.string, Fe.number]),
  markerUnits: Fe.string,
  refX: Fe.oneOfType([Fe.string, Fe.number]),
  refY: Fe.oneOfType([Fe.string, Fe.number]),
  strokeWidth: Fe.number,
  children: Fe.node.isRequired
};
var jE = ["id", "size", "strokeWidth"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function UE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function KE(e) {
  var t = e.id, n = e.size, i = n === void 0 ? 9 : n, a = e.strokeWidth, l = a === void 0 ? 1 : a, f = UE(e, jE), d = i + l * 2, u = i, h = d / 2, y = "0 0, " + i + " " + i / 2 + ", 0 " + i;
  return /* @__PURE__ */ r.createElement(Ty, wf({
    id: t,
    markerWidth: d,
    markerHeight: d,
    refX: u,
    refY: h,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, f), /* @__PURE__ */ r.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ r.createElement("polyline", {
    points: y
  })));
}
const Vr = (e) => {
  var Hn, Ut, zn, Wn, An, Sn;
  const { transformedData: t, tableData: n, dimensions: i, config: a, parseDate: l, formatDate: f, currentViewport: d, formatNumber: u, handleChartAriaLabels: h, updateConfig: y, handleLineType: v, getTextWidth: S, brushConfig: R } = de.useContext(Ct), { visualizationType: k, visualizationSubType: F, orientation: T, xAxis: m, yAxis: O, runtime: N, debugSvg: P } = a, D = () => Ac(a.visualizationType, t, a.allowLineToBarGraph);
  let [L] = i;
  a && a.legend && !a.legend.hide && ((Hn = a.legend) == null ? void 0 : Hn.position) !== "bottom" && ["lg", "md"].includes(d) && (L = L * 0.73);
  const { horizontal: U } = a.heights, W = T === "horizontal" || a.visualizationType === "Forest Plot", Z = !0, ce = isNaN(parseInt(N.xAxis.labelOffset)) ? 0 : parseInt(N.xAxis.labelOffset), te = isNaN(parseInt(N.yAxis.labelOffset)) ? 0 : parseInt(N.yAxis.labelOffset), V = isNaN(parseInt(N.xAxis.size)) ? 0 : parseInt(N.xAxis.size);
  let K = a.aspectRatio ? L * a.aspectRatio : a.visualizationType === "Forest Plot" ? a.heights.vertical : a.heights[T];
  K = Number(K);
  const X = L - N.yAxis.size - (k === "Combo" ? a.yAxis.rightAxisSize : 0);
  let B = K - (T === "horizontal" ? 0 : V);
  K += T === "horizontal" ? V : 0, a.visualizationType === "Forest Plot" && (K = K + a.data.length * a.forestPlot.rowHeight, B = B + a.data.length * a.forestPlot.rowHeight, L = i[0]), (Ut = a.brush) != null && Ut.active && (K = K + ((zn = a.brush) == null ? void 0 : zn.height));
  const { minValue: oe, maxValue: re, existPositiveValue: le, isAllLine: G } = Lc(a, t), { visSupportsReactTooltip: j } = ks(), { hasTopAxis: J } = HE(a), [ue, _e] = de.useState(!1), [be, ye] = de.useState({ x: 0, y: 0 });
  de.useRef(null);
  const Le = de.useRef(), ae = de.useRef(), Ie = Kf(Le, {
    freezeOnceVisible: !1
  }), Ee = (Ne) => Cn(a.runtime.xAxis) ? l(Ne[a.runtime.originalXAxis.dataKey]).getTime() : Ne[a.runtime.originalXAxis.dataKey], he = (Ne, ct) => Ne[ct], Pe = (Wn = a.brush) != null && Wn.active && ((An = R.data) != null && An.length) ? R.data.map((Ne) => Ee(Ne)) : t.map((Ne) => Ee(Ne)), ee = a.orientation === "horizontal" || a.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", De = { data: t, tableData: n, config: a, minValue: oe, maxValue: re, isAllLine: G, existPositiveValue: le, xAxisDataMapped: Pe, xMax: X, yMax: B }, { min: we, max: Ue, leftMax: Ge, rightMax: et } = wy(De), { yScaleRight: Je, hasRightAxis: st } = Zf({ config: a, yMax: B, data: t, updateConfig: y }), { xScale: Ke, yScale: We, seriesScale: Be, g1xScale: $e, g2xScale: ht, xScaleNoPadding: qe, xScaleBrush: pt } = ME({ ...De, min: we, max: Ue, leftMax: Ge, rightMax: et, dimensions: i }), [gt, ut] = de.useState(null);
  de.useEffect(() => {
    var Ne;
    ut((Ne = ae == null ? void 0 : ae.current) == null ? void 0 : Ne.getBoundingClientRect());
  }, [ae, a.legend]);
  const Rt = (Ne, ct) => {
    if (a.useLogScale && Ne === 0.1 && (Ne = 0), !(a.data && !a.data[ct] && k === "Forest Plot"))
      return a.visualizationType === "Forest Plot" ? a.data[ct][a.xAxis.dataKey] : Cn(N.yAxis) ? f(l(Ne)) : T === "vertical" && Ue - we < 3 ? u(Ne, "left", Z, !1, !1, "1") : T === "vertical" ? u(Ne, "left", Z) : Ne;
  }, tn = (Ne) => (a.useLogScale && Ne === 0.1 && (Ne = 0), Cn(N.xAxis) && a.visualizationType !== "Forest Plot" ? f(Ne) : T === "horizontal" && a.visualizationType !== "Forest Plot" ? u(Ne, "left", Z) : a.xAxis.type === "continuous" && a.visualizationType !== "Forest Plot" ? u(Ne, "bottom", Z) : a.visualizationType === "Forest Plot" ? u(Ne, "left", a.dataFormat.abbreviated, a.runtime.xAxis.prefix, a.runtime.xAxis.suffix, Number(a.dataFormat.roundTo)) : Ne), Xt = (Ne) => {
    let { numTicks: ct } = N[Ne];
    N[Ne].viewportNumTicks && N[Ne].viewportNumTicks[d] && (ct = N[Ne].viewportNumTicks[d]);
    let dt;
    return Ne === "yAxis" && (dt = W && !ct ? t.length : W && ct ? ct : !W && !ct ? void 0 : !W && ct && ct, dt === void 0 && !a.dataFormat.roundTo && (Number(Ue) <= 3 ? dt = 2 : dt = 4), Number(dt) > Number(Ue) && (dt = Number(we) < 0 ? Math.round(Ue) * 2 : Math.round(Ue))), Ne === "xAxis" && (dt = W && !ct ? void 0 : W && ct ? ct : !W && !ct ? void 0 : !W && ct && ct, W && dt === void 0 && !a.dataFormat.roundTo && (Ue <= 3 ? dt = 2 : dt = 4), a.visualizationType === "Forest Plot" && (dt = a.yAxis.numTicks !== "" ? a.yAxis.numTicks : 4)), dt;
  }, { tooltipData: vt, showTooltip: Nt, hideTooltip: hn, tooltipOpen: on, tooltipLeft: Gt, tooltipTop: yn } = Xm(), {
    handleTooltipMouseOver: ze,
    handleTooltipClick: xt,
    handleTooltipMouseOff: Ht,
    tooltipStyles: It,
    TooltipListItem: At,
    getXValueFromCoordinateDate: xn,
    getXValueFromCoordinate: Mt
  } = Jm({
    xScale: Ke,
    yScale: We,
    showTooltip: Nt,
    hideTooltip: hn
  });
  de.useEffect(() => {
    document.querySelector(".isEditor") && _e((ct) => !0);
  }), de.useEffect(() => {
    (Ie == null ? void 0 : Ie.isIntersecting) === !0 && a.animate && setTimeout(() => {
      _e((Ne) => !0);
    }, 500);
  }, [Ie == null ? void 0 : Ie.isIntersecting, a.animate]);
  const ln = () => {
    const { visualizationType: Ne } = a;
    return Ne === "Combo" && N.forecastingSeriesKeys > 0 || Ne === "Area Chart" || Ne === "Line" || Ne === "Bar";
  }, cn = Number(T === "horizontal" ? a.xAxis.size : a.yAxis.size), wn = { small: 16, medium: 18, large: 20 }, Jt = () => a.visualizationType === "Forest Plot" ? a.data.length : Xt("yAxis"), jt = () => {
    let Ne = a.xAxis.manualStep;
    return a.xAxis.viewportStepCount && a.xAxis.viewportStepCount[d] && (Ne = a.xAxis.viewportStepCount[d]), Ne;
  }, Pn = (Ne) => {
    const ct = Ne.currentTarget.getBoundingClientRect(), dt = Ne.clientX - ct.left, $ = Ne.clientY - ct.top;
    ye({
      x: dt,
      y: $
    });
  }, Mn = () => {
    let Ne = 40;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Fu, { top: B, left: Number(N.yAxis.size), label: N.xAxis.label, tickFormat: Cn(N.xAxis) ? f : u, scale: $e, stroke: "#333", tickStroke: "#333", numTicks: N.xAxis.numTicks || void 0 }, (ct) => /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ct.ticks.map((dt, $) => {
      const Oe = dt.index !== 0 ? a.yAxis.tickRotation : 0, Xe = dt.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", it = S(dt.value, `normal ${wn[a.fontSize]}px sans-serif`) * Math.sin(Oe * (Math.PI / 180)) + 25;
      return it > Ne && (Ne = it), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${dt.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: dt.from, to: dt.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: dt.to.x, y: dt.to.y, angle: -Oe, verticalAnchor: "start", textAnchor: Xe }, u(dt.value, "left")));
    }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: ct.axisFromPoint, to: ct.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      Fu,
      {
        top: B,
        left: Number(N.yAxis.size),
        label: N.xAxis.label,
        tickFormat: Cn(N.xAxis) ? f : N.xAxis.dataKey !== "Year" ? u : (ct) => ct,
        scale: ht,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: N.xAxis.numTicks || void 0
      },
      (ct) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ct.ticks.map((dt, $) => {
        const Oe = dt.index !== 0 ? a.yAxis.tickRotation : 0, Xe = dt.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", it = S(dt.value, `normal ${wn[a.fontSize]}px sans-serif`) * Math.sin(Oe * (Math.PI / 180)) + 25;
        return it > Ne && (Ne = it), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${dt.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: dt.from, to: dt.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: dt.to.x, y: dt.to.y, angle: -Oe, verticalAnchor: "start", textAnchor: Xe }, u(dt.value, "left")));
      }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: ct.axisFromPoint, to: ct.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(kt, { x: X / 2, y: Ne + 20 + ce, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, N.xAxis.label)), ae.current ? ae.current.setAttribute("height", Number(K) + Number(Ne) + (N.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(L) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Dr, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${L}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: Pn,
      width: "100%",
      height: K,
      className: `linear ${a.animate ? "animated" : ""} ${ue && a.animate ? "animate" : ""} ${P && "debug"}`,
      role: "img",
      "aria-label": h(a),
      ref: ae,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ r.createElement(kr, { width: L, height: K, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && /* @__PURE__ */ r.createElement(nE, { scale: We, tickLength: a.useLogScale ? 6 : 8, left: Number(N.yAxis.size) - a.yAxis.axisPadding, label: N.yAxis.label || N.yAxis.label, stroke: "#333", tickFormat: (Ne, ct) => Rt(Ne, ct), numTicks: Jt() }, (Ne) => {
      const ct = a.orientation === "horizontal" ? (Ne.axisToPoint.y - Ne.axisFromPoint.y) / 2 : (Ne.axisFromPoint.y - Ne.axisToPoint.y) / 2, dt = B / Ne.ticks.length / 2 - B / Ne.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "left-axis" }, Ne.ticks.map(($, Oe) => {
        const Xe = Ne.ticks[0].to.y, Ve = 15, it = String($.value).startsWith("1") || $.value === 0.1 ? "block" : "none", nt = it === "block" ? 7 : 0, Et = { x: $.to.x - nt, y: $.to.y }, _t = $.index !== 0 || a.xAxis.hideAxis;
        return /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${$.value}-${Oe}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { key: `${$.value}--hide-hideTicks`, from: $.from, to: a.useLogScale ? Et : $.to, stroke: a.yAxis.tickColor, display: T === "horizontal" ? "none" : "block" }), N.yAxis.gridLines && _t ? /* @__PURE__ */ r.createElement(an, { key: `${$.value}--hide-hideGridLines`, display: (a.useLogScale && it).toString(), from: { x: $.from.x + X, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", T === "horizontal" && F !== "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          kt,
          {
            transform: `translate(${$.to.x - 5}, ${a.isLollipopChart ? $.to.y - Xe : $.to.y - Xe + (Number(a.barHeight * a.series.length) - Ve) / 2}) rotate(-${a.runtime.horizontal && a.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          $.formattedValue
        ), T === "horizontal" && F === "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${$.to.y - Xe + (Number(a.barHeight) - Ve) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, $.formattedValue), T === "horizontal" && k === "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${$.to.y - Xe + Number(a.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), T === "horizontal" && k === "Deviation Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${a.isLollipopChart ? $.to.y - Xe + 2 : $.to.y - Xe + Number(a.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), T === "vertical" && k !== "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          kt,
          {
            display: a.useLogScale ? it : "block",
            dx: a.useLogScale ? -6 : 0,
            x: a.runtime.horizontal ? $.from.x + 2 : $.to.x,
            y: $.to.y + (a.runtime.horizontal ? dt : 0),
            angle: -Number(a.yAxis.tickRotation) || 0,
            verticalAnchor: a.runtime.horizontal ? "start" : "middle",
            textAnchor: a.runtime.horizontal ? "start" : "end",
            fill: a.yAxis.tickLabelColor
          },
          $.formattedValue
        ));
      }), !a.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: Ne.axisFromPoint, to: N.horizontal ? { x: 0, y: a.visualizationType === "Forest Plot" ? K : Number(U) } : Ne.axisToPoint, stroke: "#000" }), We.domain()[0] < 0 && /* @__PURE__ */ r.createElement(an, { from: { x: Ne.axisFromPoint.x, y: We(0) }, to: { x: X, y: We(0) }, stroke: "#333" }), k === "Bar" && T === "horizontal" && Ke.domain()[0] < 0 && /* @__PURE__ */ r.createElement(an, { from: { x: Ke(0), y: 0 }, to: { x: Ke(0), y: B }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(kt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * N.yAxis.size + te}, ${ct}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.labelColor }, Ne.label));
    }),
    st && /* @__PURE__ */ r.createElement(oE, { scale: Je, left: Number(L - a.yAxis.rightAxisSize), label: a.yAxis.rightLabel, tickFormat: (Ne) => u(Ne, "right"), numTicks: N.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Ne) => {
      const ct = a.orientation === "horizontal" ? (Ne.axisToPoint.y - Ne.axisFromPoint.y) / 2 : (Ne.axisFromPoint.y - Ne.axisToPoint.y) / 2, dt = B / Ne.ticks.length / 2 - B / Ne.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "right-axis" }, Ne.ticks.map(($, Oe) => /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${$.value}-${Oe}`, className: "vx-axis-tick" }, !N.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(an, { from: $.from, to: $.to, display: N.horizontal ? "none" : "block", stroke: a.yAxis.rightAxisTickColor }), N.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(an, { from: { x: $.from.x + X, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", !a.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(kt, { x: $.to.x, y: $.to.y + (N.horizontal ? dt : 0), verticalAnchor: N.horizontal ? "start" : "middle", textAnchor: "start", fill: a.yAxis.rightAxisTickLabelColor }, $.formattedValue))), !a.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(an, { from: Ne.axisFromPoint, to: Ne.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(kt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${a.yAxis.rightLabelOffsetSize ? a.yAxis.rightLabelOffsetSize : 0}, ${ct}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.rightAxisLabelColor }, Ne.label));
    }),
    J && a.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      cE,
      {
        stroke: "#333",
        left: Number(N.yAxis.size),
        scale: Ke,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Fu,
      {
        top: N.horizontal && a.visualizationType !== "Forest Plot" ? Number(U) + Number(a.xAxis.axisPadding) : a.visualizationType === "Forest Plot" ? B + Number(a.xAxis.axisPadding) : B,
        left: a.visualizationType !== "Forest Plot" ? Number(N.yAxis.size) : 0,
        label: a[ee].label,
        tickFormat: tn,
        scale: Ke,
        stroke: "#333",
        numTicks: Xt("xAxis"),
        tickStroke: "#333",
        tickValues: a.xAxis.manual ? zE(Pe, Ke, a.xAxis.type === "date-time" ? Xt("xAxis") : jt()) : void 0
      },
      (Ne) => {
        const ct = a.visualizationType !== "Forest Plot" ? (Ne.axisToPoint.x - Ne.axisFromPoint.x) / 2 : i[0] / 2, dt = (mt) => /\s/.test(mt), $ = Ne.ticks.some((mt) => dt(mt.value)), Oe = 8, Xe = Math.max(...Ne.ticks.map((mt) => S(mt.formattedValue, `normal ${wn[a.fontSize]}px sans-serif`))), Ve = $ ? 180 : 100, it = Ne.ticks.map((mt) => S(mt.formattedValue, `normal ${wn[a.fontSize]}px sans-serif`)), nt = it.reduce((mt, Dt) => mt + Dt, Ve), Et = (X - nt) / (Ne.ticks.length - 1);
        let _t = [0];
        for (let mt = 1; mt < it.length; mt++)
          _t[mt] = _t[mt - 1] + it[mt - 1] + Et;
        let Ze = !1;
        it.forEach((mt, Dt) => {
          if (_t[Dt] + it[Dt] > _t[Dt + 1]) {
            Ze = !0;
            return;
          }
        });
        const Kt = Ze && a.isResponsiveTicks ? Xe + Oe + 20 : 0;
        Number(a.xAxis.tickRotation) > 0 && Number(a.xAxis.tickRotation), a.dynamicMarginTop = Kt, a.xAxis.tickWidthMax = Xe;
        let zt = 40;
        const Ft = /* @__PURE__ */ r.createElement(at, { className: "bottom-axis", width: i[0] }, Ne.ticks.map((mt, Dt, wt) => {
          const Yt = String(mt.value).startsWith("1") || mt.value === 0.1 ? "block" : "none", Wt = Yt === "block" ? 16 : Oe, dn = { x: mt.to.x, y: Wt }, sn = S(mt.formattedValue, `normal ${wn[a.fontSize]}px sans-serif`), nn = 100 / wt.length;
          a.yAxis.tickRotation = a.isResponsiveTicks && a.orientation === "horizontal" ? 0 : a.yAxis.tickRotation, a.xAxis.tickRotation = a.isResponsiveTicks && a.orientation === "vertical" ? 0 : a.xAxis.tickRotation;
          const Zt = a.isResponsiveTicks && Ze ? -Number(a.xAxis.maxTickRotation) || -90 : -Number(a.runtime.xAxis.tickRotation), En = sn * Math.sin(Zt * -1 * (Math.PI / 180)) + 25;
          return En > zt && (zt = En), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${mt.value}-${Dt}`, className: "vx-axis-tick" }, !a.xAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: mt.from, to: T === "horizontal" && a.useLogScale ? dn : mt.to, stroke: a.xAxis.tickColor, strokeWidth: Yt === "block" && a.useLogScale ? 1.3 : 1 }), !a.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            kt,
            {
              dy: a.orientation === "horizontal" && a.useLogScale ? 8 : 0,
              display: a.orientation === "horizontal" && a.useLogScale ? Yt : "block",
              x: mt.to.x,
              y: mt.to.y,
              angle: Zt,
              verticalAnchor: Zt < -50 ? "middle" : "start",
              textAnchor: Zt ? "end" : "middle",
              width: Ze && !a.isResponsiveTicks && !Number(a[ee].tickRotation) ? nn : void 0,
              fill: a.xAxis.tickLabelColor
            },
            mt.formattedValue
          ));
        }), !a.xAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: Ne.axisFromPoint, to: Ne.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(kt, { x: ct, y: zt + 20 + ce, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: a.xAxis.labelColor }, Ne.label));
        return ae.current && ae.current.setAttribute("height", Number(K) + Number(zt) + (N.xAxis.label ? 50 : 0) + "px"), Ft;
      }
    ),
    k === "Paired Bar" && Mn(),
    k === "Deviation Bar" && ((Sn = a.series) == null ? void 0 : Sn.length) === 1 && /* @__PURE__ */ r.createElement(TE, { animatedChart: ue, xScale: Ke, yScale: We, width: X, height: B }),
    k === "Paired Bar" && /* @__PURE__ */ r.createElement(FE, { originalWidth: L, width: X, height: B }),
    k === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      wE,
      {
        xScale: Ke,
        yScale: We,
        getXAxisData: Ee,
        getYAxisData: he,
        xMax: X,
        yMax: B,
        handleTooltipMouseOver: ze,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: xt,
        tooltipData: vt,
        showTooltip: Nt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ r.createElement(kE, { xScale: Ke, yScale: We }),
    (k === "Area Chart" && a.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ r.createElement(mE, { xScale: Ke, yScale: We, yMax: B, xMax: X, chartRef: ae, width: X, height: B, handleTooltipMouseOver: ze, handleTooltipMouseOff: Ht, tooltipData: vt, showTooltip: Nt }),
    (k === "Area Chart" && a.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ r.createElement(gE, { xScale: Ke, yScale: We, yMax: B, xMax: X, chartRef: ae, width: X, height: B, handleTooltipMouseOver: ze, handleTooltipMouseOff: Ht, tooltipData: vt, showTooltip: Nt }),
    (k === "Bar" || k === "Combo" || D()) && /* @__PURE__ */ r.createElement(
      EE,
      {
        xScale: Ke,
        yScale: We,
        seriesScale: Be,
        xMax: X,
        yMax: B,
        getXAxisData: Ee,
        getYAxisData: he,
        animatedChart: ue,
        visible: ue,
        handleTooltipMouseOver: ze,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: xt,
        tooltipData: vt,
        showTooltip: Nt,
        chartRef: ae
      }
    ),
    (k === "Line" && !D() || k === "Combo") && /* @__PURE__ */ r.createElement(
      _h,
      {
        xScale: Ke,
        yScale: We,
        getXAxisData: Ee,
        getYAxisData: he,
        xMax: X,
        yMax: B,
        seriesStyle: a.series,
        handleTooltipMouseOver: ze,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: xt,
        tooltipData: vt,
        showTooltip: Nt,
        chartRef: ae
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ r.createElement(
      AE,
      {
        showTooltip: Nt,
        tooltipData: vt,
        xScale: Ke,
        yScale: We,
        width: X,
        le: !0,
        height: B,
        xScaleNoPadding: qe,
        chartRef: ae,
        getXValueFromCoordinate: Mt,
        handleTooltipMouseOver: ze,
        handleTooltipMouseOff: Ht,
        isBrush: !1
      }
    ),
    a.yAxis.anchors && a.yAxis.anchors.map((Ne) => /* @__PURE__ */ r.createElement(an, { strokeDasharray: v(Ne.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + a.yAxis.size, y: We(Ne.value) }, to: { x: X, y: We(Ne.value) }, display: N.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ r.createElement(
      OE,
      {
        xScale: Ke,
        yScale: We,
        seriesScale: Be,
        width: L,
        height: K,
        getXAxisData: Ee,
        getYAxisData: he,
        animatedChart: ue,
        visible: ue,
        handleTooltipMouseOver: ze,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: xt,
        tooltipData: vt,
        showTooltip: Nt,
        chartRef: ae,
        config: a
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(a.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !D() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_h, { xScale: Ke, yScale: We, getXAxisData: Ee, getYAxisData: he, xMax: X, yMax: B, seriesStyle: a.series })),
    a.yAxis.anchors && a.yAxis.anchors.map((Ne, ct) => {
      let dt = We(Ne.value);
      if (!Ne.value)
        return;
      const $ = T === "horizontal" && k === "Bar" ? a.barHeight / 4 : 0;
      if (dt)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            an,
            {
              key: `yAxis-${Ne.value}--${ct}`,
              strokeDasharray: v(Ne.lineStyle),
              stroke: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + cn, y: dt - $ },
              to: { x: L - a.yAxis.rightAxisSize, y: dt - $ }
            }
          )
        );
    }),
    a.xAxis.anchors && a.xAxis.anchors.map((Ne, ct) => {
      let dt = m;
      T === "horizontal" && (dt = O);
      let $ = Cn(dt) ? Ke(l(Ne.value, !1)) : Ke(Ne.value);
      if ($)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            an,
            {
              key: `xAxis-${Ne.value}--${ct}`,
              strokeDasharray: v(Ne.lineStyle),
              stroke: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              fill: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number($) + Number(cn), y: 0 },
              to: { x: Number($) + Number(cn), y: B }
            }
          )
        );
    }),
    a.visualizationType !== "Bar" && a.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(Gf, { xScale: Ke, handleTooltipClick: xt, handleTooltipMouseOff: Ht, handleTooltipMouseOver: ze, showTooltip: Nt, hideTooltip: hn, tooltipData: vt, yMax: B, width: L }),
    ln && Nt && vt && a.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(an, { from: { x: vt.dataXPosition - 10, y: 0 }, to: { x: vt.dataXPosition - 10, y: B }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    ln && Nt && vt && a.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(an, { from: { x: 0, y: vt.dataYPosition }, to: { x: X, y: vt.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    a.filters && a.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ r.createElement(kt, { x: Number(a.yAxis.size) + Number(X / 2), y: K / 2 - a.xAxis.padding / 2, textAnchor: "middle" }, a.chartMessage.noData),
    (a.visualizationType === "Bar" || D()) && a.tooltips.singleSeries && a.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(an, { from: { x: 0, y: be.y }, to: { x: X, y: be.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (a.visualizationType === "Bar" || D()) && a.tooltips.singleSeries && a.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(an, { from: { x: be.x, y: 0 }, to: { x: be.x, y: B }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    !1
  ), vt && Object.entries(vt.data).length > 0 && on && Nt && vt.dataYPosition && vt.dataXPosition && !a.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${a.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ r.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ r.createElement(Qm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Gt, top: yn }, /* @__PURE__ */ r.createElement("ul", null, typeof vt == "object" && Object.entries(vt.data).map((Ne, ct) => /* @__PURE__ */ r.createElement(At, { item: Ne, key: ct }))))), j() && /* @__PURE__ */ r.createElement(Sy, { id: `cdc-open-viz-tooltip-${N.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${a.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Le })));
};
const YE = (e) => {
  var te;
  const { width: t, height: n } = e, { transformedData: i, config: a, parseDate: l, formatDate: f, seriesHighlight: d, formatNumber: u, colorScale: h, handleChartAriaLabels: y } = de.useContext(Ct);
  let v = Number(t);
  const { minValue: S, maxValue: R } = Lc(a, i), k = { top: 5, right: 10, bottom: 10, left: 10 }, F = Number(n), T = v - a.runtime.yAxis.size, m = F - k.top - 20, O = (V) => a.runtime.xAxis.type === "date" ? l(V[a.runtime.originalXAxis.dataKey]).getTime() : V[a.runtime.originalXAxis.dataKey], N = (V, K) => V[K];
  let P, D;
  const { max: L, min: U } = a.runtime.yAxis, W = Number(L) >= Number(R), Z = Number(U) <= Number(S);
  if (i) {
    let V = Number(U && Z ? U : S), K = Number(L && W ? L : Number.MIN_VALUE);
    if (K === Number.MIN_VALUE && (K = R), a.runtime.yAxis.paddingPercent) {
      let B = (K - V) * a.runtime.yAxis.paddingPercent;
      V -= B, K += B;
    }
    let X = i.map((B) => O(B));
    a.runtime.horizontal ? (P = Kn({
      domain: [V, K],
      range: [0, T]
    }), D = a.runtime.xAxis.type === "date" ? Kn({ domain: [Math.min(...X), Math.max(...X)] }) : Bo({ domain: X, padding: 0.5 }), Bo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), D.rangeRound([0, m])) : (V = V < 0 ? V * 1.11 : V, D = Kn({
      domain: [V, K],
      range: [m - k.bottom, k.top]
    }), P = Bo({
      domain: X,
      range: [k.left, v - k.right]
    }), Bo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const ce = [P.domain()[0], P.domain()[P.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Dr, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": y(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((te = a.runtime.lineSeriesKeys) == null ? void 0 : te.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((V, K) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    at,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${V}`,
      opacity: a.legend.behavior === "highlight" && d.length > 0 && d.indexOf(V) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || d.length === 0 || d.indexOf(V) !== -1 ? "block" : "none"
    },
    i.map((X, B) => /* @__PURE__ */ r.createElement(at, { key: `series-${V}-point-${B}` }, /* @__PURE__ */ r.createElement(kt, { display: a.labels ? "block" : "none", x: P(O(X)), y: D(N(X, V)), fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[V] : V) : "#000", textAnchor: "middle" }, u(X[V])))),
    /* @__PURE__ */ r.createElement(
      Kr,
      {
        curve: vc,
        data: i,
        x: (X) => P(O(X)),
        y: (X) => D(N(X, V)),
        stroke: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[V] : V) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${K})`
      }
    ),
    /* @__PURE__ */ r.createElement(KE, { id: `arrow--${K}`, refX: 2, size: 6, markerEnd: `url(#arrow--${K})`, strokeOpacity: 1, fillOpacity: 1, fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[V] : V) : "#000" })
  ), /* @__PURE__ */ r.createElement(
    Fu,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: P,
      tickValues: ce,
      tickFormat: (X) => a.xAxis.type === "date" ? f(X) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, XE = de.forwardRef((e, t) => {
  const {
    config: n,
    colorScale: i,
    seriesHighlight: a,
    highlight: l,
    tableData: f,
    highlightReset: d,
    transformedData: u,
    currentViewport: h
  } = de.useContext(Ct);
  if (!n.legend)
    return null;
  const y = ly(n, f, u, i);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ r.createElement(oy, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: i, seriesHighlight: a, highlight: l, highlightReset: d, currentViewport: h, formatLabels: y });
}), jd = {
  annotations: [],
  allowLineToBarGraph: void 0,
  type: "chart",
  debugSvg: !1,
  chartMessage: {
    noData: "No Data Available"
  },
  title: "",
  showTitle: !0,
  showDownloadMediaButton: !1,
  theme: "theme-blue",
  animate: !1,
  fontSize: "medium",
  lineDatapointStyle: "hover",
  lineDatapointColor: "Same as Line",
  barHasBorder: "false",
  isLollipopChart: !1,
  lollipopShape: "circle",
  lollipopColorStyle: "two-tone",
  visualizationSubType: "regular",
  barStyle: "",
  roundingStyle: "standard",
  tipRounding: "top",
  isResponsiveTicks: !1,
  general: {
    showDownloadButton: !1,
    showMissingDataLabel: !0,
    showSuppressedSymbol: !0,
    showZeroValueDataLabel: !0
  },
  padding: {
    left: 5,
    right: 5
  },
  preliminaryData: [],
  yAxis: {
    hideAxis: !1,
    displayNumbersOnBar: !1,
    hideLabel: !1,
    hideTicks: !1,
    size: 50,
    gridLines: !1,
    enablePadding: !1,
    min: "",
    max: "",
    labelColor: "#333",
    tickLabelColor: "#333",
    tickColor: "#333",
    rightHideAxis: !0,
    rightAxisSize: 0,
    rightLabel: "",
    rightLabelOffsetSize: 0,
    rightAxisLabelColor: "#333",
    rightAxisTickLabelColor: "#333",
    rightAxisTickColor: "#333",
    numTicks: "",
    axisPadding: 0,
    scalePadding: 10,
    tickRotation: 0,
    anchors: [],
    shoMissingDataLabel: !0,
    showMissingDataLine: !0
  },
  boxplot: {
    plots: [],
    borders: "true",
    firstQuartilePercentage: 25,
    thirdQuartilePercentage: 75,
    boxWidthPercentage: 40,
    plotOutlierValues: !1,
    plotNonOutlierValues: !0,
    legend: {
      showHowToReadText: !1,
      howToReadText: ""
    },
    labels: {
      q1: "Lower Quartile",
      q2: "q2",
      q3: "Upper Quartile",
      q4: "q4",
      minimum: "Minimum",
      maximum: "Maximum",
      mean: "Mean",
      median: "Median",
      sd: "Standard Deviation",
      iqr: "Interquartile Range",
      total: "Total",
      outliers: "Outliers",
      values: "Values",
      lowerBounds: "Lower Bounds",
      upperBounds: "Upper Bounds"
    }
  },
  topAxis: {
    hasLine: !1
  },
  isLegendValue: !1,
  barThickness: 0.35,
  barHeight: 25,
  barSpace: 15,
  heights: {
    vertical: 300,
    horizontal: 750
  },
  xAxis: {
    sortDates: !1,
    anchors: [],
    type: "categorical",
    showTargetLabel: !0,
    targetLabel: "Target",
    hideAxis: !1,
    hideLabel: !1,
    hideTicks: !1,
    size: 75,
    tickRotation: 0,
    min: "",
    max: "",
    labelColor: "#333",
    tickLabelColor: "#333",
    tickColor: "#333",
    numTicks: "",
    labelOffset: 65,
    axisPadding: 200,
    target: 0,
    maxTickRotation: 0
  },
  table: {
    label: "Data Table",
    expanded: !0,
    limitHeight: !1,
    height: "",
    caption: "",
    showDownloadUrl: !1,
    showDataTableLink: !0,
    indexLabel: "",
    download: !1,
    showVertical: !0,
    dateDisplayFormat: "",
    showMissingDataLabel: !0,
    showSuppressedSymbol: !0
  },
  orientation: "vertical",
  color: "pinkpurple",
  columns: {
    // start with a blank list
  },
  legend: {
    hide: !1,
    behavior: "isolate",
    axisAlign: !0,
    singleRow: !0,
    colorCode: "",
    reverseLabelOrder: !1,
    description: "",
    dynamicLegend: !1,
    dynamicLegendDefaultText: "Show All",
    dynamicLegendItemLimit: 5,
    dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
    dynamicLegendChartMessage: "Select Options from the Legend",
    lineMode: !1,
    verticalSorted: !1,
    highlightOnHover: !1,
    hideSuppressedLabels: !1,
    seriesHighlight: []
  },
  brush: {
    height: 25,
    active: !1
  },
  exclusions: {
    active: !1,
    keys: []
  },
  palette: "qualitative-bold",
  isPaletteReversed: !1,
  twoColor: {
    palette: "monochrome-1",
    isPaletteReversed: !1
  },
  labels: !1,
  dataFormat: {
    commas: !1,
    prefix: "",
    suffix: "",
    abbreviated: !1,
    bottomSuffix: "",
    bottomPrefix: "",
    bottomAbbreviated: !1
  },
  confidenceKeys: {},
  visual: {
    border: !0,
    accent: !0,
    background: !0,
    verticalHoverLine: !1,
    horizontalHoverLine: !1
  },
  useLogScale: !1,
  filterBehavior: "Filter Change",
  highlightedBarValues: [],
  series: [],
  tooltips: {
    opacity: 90,
    singleSeries: !1,
    dateDisplayFormat: ""
  },
  forestPlot: {
    startAt: 0,
    colors: {
      line: "",
      shape: ""
    },
    lineOfNoEffect: {
      show: !0
    },
    type: "",
    pooledResult: {
      diamondHeight: 5,
      column: ""
    },
    estimateField: "",
    estimateRadius: "",
    shape: "square",
    rowHeight: 20,
    description: {
      show: !0,
      text: "description",
      location: 0
    },
    result: {
      show: !0,
      text: "result",
      location: 100
    },
    radius: {
      min: 2,
      max: 10,
      scalingColumn: ""
    },
    regression: {
      lower: 0,
      upper: 0,
      estimateField: 0
    },
    leftWidthOffset: 0,
    rightWidthOffset: 0,
    showZeroLine: !1,
    leftLabel: "",
    rightLabel: ""
  },
  area: {
    isStacked: !1
  },
  sankey: {
    title: {
      defaultColor: "black"
    },
    iterations: 1,
    rxValue: 0.9,
    overallSize: {
      width: 900,
      height: 700
    },
    margin: {
      margin_y: 25,
      margin_x: 0
    },
    nodeSize: {
      nodeWidth: 26,
      nodeHeight: 40
    },
    nodePadding: 55,
    nodeFontColor: "black",
    nodeColor: {
      default: "#ff8500",
      inactive: "#808080"
    },
    linkColor: {
      default: "#ffc900",
      inactive: "#D3D3D3"
    },
    opacity: {
      nodeOpacityDefault: 1,
      nodeOpacityInactive: 0.1,
      LinkOpacityDefault: 1,
      LinkOpacityInactive: 0.1
    },
    storyNodeFontColor: "#006778",
    storyNodeText: [],
    nodeValueStyle: {
      textBefore: "(",
      textAfter: ")"
    },
    data: []
  }
}, zu = (e) => /* @__PURE__ */ de.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ de.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), qE = ({ name: e }) => {
  var d, u, h, y, v;
  const { config: t, rawData: n, updateConfig: i } = de.useContext(Ct);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (S) => {
    S.orientation === "horizontal" && (S.labels = !1), S.table.show === void 0 && (S.table.show = !isDashboard), S.visualizationType === "Combo" && (S.orientation = "vertical");
  }, l = (S = !0) => {
    let R = {};
    return n.forEach((k) => {
      Object.keys(k).forEach((F) => R[F] = !0);
    }), S && Object.keys(R).forEach((k) => {
      (t.series && t.series.filter((F) => F.dataKey === k).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(k)) && delete R[k];
    }), Object.keys(R);
  }, f = (S, R, k, F) => {
    if (S === "boxplot" && R === "legend") {
      i({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.boxplot[R],
            [k]: F
          }
        }
      });
      return;
    }
    if (S === "boxplot" && R === "labels") {
      i({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.boxplot[R],
            [k]: F
          }
        }
      });
      return;
    }
    if (S === "forestPlot" && R) {
      let N = {
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.forestPlot[R],
            [k]: F
          }
        }
      };
      i(N);
      return;
    }
    if (S === "columns" && R !== "" && k !== "") {
      i({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t[S][R],
            [k]: F
          }
        }
      });
      return;
    }
    if (S === null && R === null) {
      let N = { ...t, [k]: F };
      a(N), i(N);
      return;
    }
    const T = Array.isArray(t[S]);
    let m = T ? [...t[S], F] : { ...t[S], [k]: F };
    R !== null && (T ? (m = [...t[S]], m[R] = { ...m[R], [k]: F }) : typeof F == "string" ? m[R] = F : m = { ...t[S], [R]: { ...t[S][R], [k]: F } });
    let O = { ...t, [S]: m };
    a(O), i(O);
  };
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(zu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: l(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: S.target.value
          }
        }), S.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: S.target.value
          }
        }), S.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: S.target.value
          }
        }), S.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: S.target.value
          }
        }), S.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: S.target.value
          }
        }), S.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: S.target.value
            }
          }
        }), S.target.value = "";
      }
    }
  ))), /* @__PURE__ */ r.createElement(ot, { value: ((h = (u = t.forestPlot) == null ? void 0 : u.lineOfNoEffect) == null ? void 0 : h.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: S.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: S.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffset || 0,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: S.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: S.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement(Qe, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: S.target.value
            }
          }
        }), S.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ r.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(S.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ r.createElement(
    "input",
    {
      min: 7,
      max: 10,
      value: t.forestPlot.radius.max,
      onChange: (S) => {
        i({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(S.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, Go = r.createContext({}), GE = (e) => {
  const { updateConfig: t, config: n, rawData: i } = de.useContext(Ct), { getColumns: a, selectComponent: l } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], d = (u, h, y) => {
    let v = [...n.series];
    if (v[u][y] = h, y === "type" && h === "Bar" && (v[u].axis = "Left"), v[u].type === "Forecasting") {
      let S = Array.from(new Set(i.map((k) => k[v[u].dataKey]))), R = [];
      S.forEach((k) => {
        R.push({ key: k });
      }), v[u].stages = R, v[u].stageColumn = v[u].dataKey;
    }
    t({ ...n, series: v });
  };
  return /* @__PURE__ */ r.createElement(Go.Provider, { value: { updateSeries: d, supportedRightAxisTypes: f, getColumns: a, selectComponent: l } }, e.children);
}, ZE = (e) => {
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e;
  if (!(() => {
    let u = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((y) => y.includes(i.type)) && (u = !0), u;
  })())
    return;
  const f = (u, h) => {
    let y = [...t.series];
    y[u].lineType = h, n({ ...t, series: y });
  };
  let d = [];
  return Object.keys(Bu).map((u) => d.push(Bu[u])), /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: i.lineType ? i.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (u) => {
        f(a, u.target.value);
      },
      options: d
    }
  );
}, QE = (e) => {
  const { config: t } = de.useContext(Ct), { updateSeries: n } = de.useContext(Go), { index: i, series: a } = e, l = () => {
    if (t.visualizationType === "Combo")
      return {
        Bar: "Bar",
        Line: "Line",
        "dashed-sm": "Small Dashed",
        "dashed-md": "Medium Dashed",
        "dashed-lg": "Large Dashed",
        "Area Chart": "Area Chart",
        Forecasting: "Forecasting"
      };
    if (t.visualizationType === "Line")
      return {
        Line: "Line",
        "dashed-sm": "Small Dashed",
        "dashed-md": "Medium Dashed",
        "dashed-lg": "Large Dashed"
      };
  };
  if (["Line", "Combo"].includes(t.visualizationType))
    return /* @__PURE__ */ r.createElement(
      Ma,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (f) => {
          n(i, f.target.value, "type");
        },
        options: l()
      }
    );
}, JE = (e) => {
  const { config: t, updateConfig: n, rawData: i } = de.useContext(Ct), { updateSeries: a, getColumns: l } = de.useContext(Go), { index: f, series: d } = e;
  return /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: d.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (u) => {
        let h = [], y = new Set(i == null ? void 0 : i.map((S) => S[u.target.value]));
        y = Array.from(y), y = y.filter((S) => S !== void 0), y.forEach((S) => h.push({ key: S }));
        const v = [...t.series];
        v[f] = { ...v[f], stages: h, stageColumn: u.target.value }, n({
          ...t,
          series: v
        });
      },
      options: l(!1)
    }
  );
}, ek = (e) => {
  const { config: t, rawData: n } = de.useContext(Ct), { updateSeries: i } = de.useContext(Go), { index: a, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let f = new Set(n.map((d) => d[l.stageColumn]));
  return f = Array.from(f), f = f.filter((d) => d !== void 0), /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (d) => {
        i(a, d.target.value, "stageItem");
      },
      options: f
    }
  );
}, tk = (e) => {
  const { config: t } = de.useContext(Ct), { updateSeries: n, supportedRightAxisTypes: i } = de.useContext(Go), { index: a, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && i.includes(l.type))
    return /* @__PURE__ */ r.createElement(
      Ma,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (f) => {
          n(a, f.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, nk = (e) => {
  var l;
  const { config: t, updateConfig: n } = de.useContext(Ct), { index: i, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (l = a == null ? void 0 : a.stages) == null ? void 0 : l.map((f, d) => {
      var u, h, y, v;
      return /* @__PURE__ */ r.createElement(
        Ma,
        {
          key: `${f}--${d}`,
          initial: "Select an option",
          value: (h = (u = t.series) == null ? void 0 : u[i].stages) != null && h[d].color ? (v = (y = t.series) == null ? void 0 : y[i].stages) == null ? void 0 : v[d].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (S) => {
            const R = [...t.series], k = R[i].stages;
            k[d].color = S.target.value, R[i] = { ...R[i], stages: k }, n({
              ...t,
              series: R
            });
          },
          options: Object.keys($u)
        }
      );
    });
}, rk = (e) => {
  var f;
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e, { getColumns: l } = de.useContext(Go);
  if (i.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (f = i == null ? void 0 : i.confidenceIntervals) == null ? void 0 : f.map((d, u) => {
      const h = d.showInTooltip ? d.showInTooltip : !1, y = (v, S, R) => {
        v.preventDefault();
        let k = [...t.series];
        k[S].confidenceIntervals[R].showInTooltip = !h, n({
          ...t,
          series: k
        });
      };
      return /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `${u}` }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_n, { className: "accordion__button accordion__button" }, "Group ", u + 1, /* @__PURE__ */ r.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const S = [...t.series[a].confidenceIntervals];
            S.splice(u, 1);
            const R = [...t.series];
            R[a] = { ...R[a], confidenceIntervals: [...S] }, n({
              ...t,
              series: R
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => y(v, a, u) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, h && /* @__PURE__ */ r.createElement(Nu, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: h || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        Ma,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[u].low ? t.series[a].confidenceIntervals[u].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const S = [...t.series[a].confidenceIntervals];
            S[u].low = v.target.value;
            const R = [...t.series];
            R[a] = { ...R[a], confidenceIntervals: S }, n({
              ...t,
              series: R
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ r.createElement(
        Ma,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[u].high ? t.series[a].confidenceIntervals[u].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const S = [...t.series[a].confidenceIntervals];
            S[u].high = v.target.value;
            const R = [...t.series];
            R[a] = { ...R[a], confidenceIntervals: S }, n({
              ...t,
              series: R
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ r.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (d) => {
          d.preventDefault();
          let u = null;
          t.series[a].confidenceIntervals ? u = [...t.series[a].confidenceIntervals] : u = [];
          const h = [...t.series];
          h[a] = { ...h[a], confidenceIntervals: [...u, { high: "", low: "" }] }, n({
            ...t,
            series: h
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, ak = (e) => {
  const { series: t, index: n } = e, { config: i, updateConfig: a } = de.useContext(Ct);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (d, u, h, y) => {
    let v = [...i.series], S = { ...i.runtime.seriesLabels };
    v[d].weight = u && Math.max(Number(h), Math.min(Number(y), Number(u))), S[v[d].dataKey] = v[d].weight ? v[d].weight : v[d].dataKey;
    const R = {
      ...i,
      series: v,
      runtime: {
        ...i.runtime,
        seriesLabels: S
      }
    };
    a(R);
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${n}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (d) => {
        f(n, d.target.value, d.target.min, d.target.max);
      }
    }
  ));
}, ik = (e) => {
  const { series: t, index: n } = e, { config: i, updateConfig: a } = de.useContext(Ct);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (d, u) => {
    let h = [...i.series], y = { ...i.runtime.seriesLabels };
    h[d].name = u, y[h[d].dataKey] = h[d].name ? h[d].name : h[d].dataKey;
    let v = {
      ...i,
      series: h,
      runtime: {
        ...i.runtime,
        seriesLabels: y
      }
    };
    a(v);
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (d) => {
        f(n, d.target.value);
      }
    }
  ));
}, ok = (e) => {
  const { series: t, index: n } = e, { config: i, updateConfig: a } = de.useContext(Ct);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(i.visualizationType))
    return;
  const l = (f, d) => {
    let u = [...i.series];
    u[f][d] = !u[f][d], a({
      ...i,
      series: u
    });
  };
  return /* @__PURE__ */ r.createElement("div", { className: "input-group-wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(n, "tooltip") }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Nu, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))), t.tooltip && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-hideZeroValue--${n}` }, "Hide zero Values In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(n, "hideZeroValue") }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.hideZeroValue && /* @__PURE__ */ r.createElement(Nu, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-hideZeroValue--${n}`, checked: t.hideZeroValue ? t.hideZeroValue : !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-hideNullValue--${n}` }, "Hide Null In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(n, "hideNullValue") }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.hideNullValue && /* @__PURE__ */ r.createElement(Nu, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-hideNullValue--${n}`, checked: t.hideNullValue ? t.hideNullValue : !1, readOnly: !0 })))));
}, lk = (e) => {
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e, l = (d) => {
    let u = [...t.series], h = -1;
    for (let y = 0; y < u.length; y++)
      if (u[y].dataKey === d) {
        h = y;
        break;
      }
    if (h !== -1) {
      u.splice(h, 1);
      let y = { ...t, series: u };
      u.length === 0 && delete y.series, n(y);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, f = (d, u, h) => {
    d.preventDefault(), l(u.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: (d) => f(d, i) }, "Remove");
}, Cy = (e) => {
  const { config: t } = de.useContext(Ct), { series: n, getItemStyle: i, sortableItemStyles: a, chartsWithOptions: l, index: f } = e;
  return /* @__PURE__ */ r.createElement(Ny, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: f }, (d, u) => /* @__PURE__ */ r.createElement("div", { key: f, className: u.isDragging ? "currently-dragging" : "", style: i(u.isDragging, d.draggableProps.style, a), ref: d.innerRef, ...d.draggableProps, ...d.dragHandleProps }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(_n, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(ft, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(jr.Button.Remove, { series: n, index: f }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(jr.Input.Name, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Input.Weight, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.SeriesType, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.AxisPosition, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.LineType, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.ForecastingColor, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.ConfidenceInterval, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Checkbox.DisplayInTooltip, { series: n, index: f }))))));
}, sk = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: i, chartsWithOptions: a } = e;
  return t.map((l, f) => /* @__PURE__ */ r.createElement(Cy, { getItemStyle: n, sortableItemStyles: i, chartsWithOptions: a, series: l, index: f, key: `series-list-${f}` }));
}, jr = {
  Wrapper: GE,
  Dropdown: {
    SeriesType: QE,
    AxisPosition: tk,
    ConfidenceInterval: rk,
    LineType: ZE,
    ForecastingStage: JE,
    ForecastingColumn: ek,
    ForecastingColor: nk
  },
  Input: {
    Name: ik,
    Weight: ak
  },
  Checkbox: {
    DisplayInTooltip: ok
  },
  Button: {
    Remove: lk
  },
  Item: Cy,
  List: sk
}, uk = de.memo(({ config: e, updateConfig: t }) => {
  let n = (u, h, y) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[y][u] = h, t({ ...e, regions: v });
  }, i = (u, h, y, v, S) => n(y, v, S), a = (u) => {
    let h = [];
    e.regions && (h = [...e.regions]), h.splice(u, 1), t({ ...e, regions: h });
  }, l = () => {
    let u = [];
    e.regions && (u = [...e.regions]), u.push({}), t({ ...e, regions: u });
  };
  const f = ["Fixed", "Previous Days"], d = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: u, color: h, from: y, to: v, background: S, range: R = "Custom" }, k) => {
    var F;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${k}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (T) => {
          T.preventDefault(), a(k);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Qe, { value: u, label: "Region Label", fieldName: "label", i: k, updateField: i }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(Qe, { value: h, label: "Text Color", fieldName: "color", updateField: (T, m, O, N) => n(O, N, k) }), /* @__PURE__ */ r.createElement(Qe, { value: S, label: "Background", fieldName: "background", updateField: (T, m, O, N) => n(O, N, k) })), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[k].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[k].fromType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: f
      }
    ), (e.regions[k].fromType === "Fixed" || e.regions[k].fromType === "Previous Days" || !e.regions[k].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Qe,
      {
        value: y,
        label: e.regions[k].fromType === "Fixed" || !((F = e.regions[k]) != null && F.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, O, N) => n(O, N, k),
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[k].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[k].toType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: d
      }
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ r.createElement(Qe, { value: v, label: "To Value", fieldName: "to", updateField: (T, m, O, N) => n(O, N, k) }));
  }), !e.regions && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (u) => {
        u.preventDefault(), l();
      }
    },
    "Add Region"
  ));
}), ck = ({ name: e }) => {
  const { visSupportsRegions: t } = ks(), { config: n, updateConfig: i } = de.useContext(Ct);
  return t() ? /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, e)), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(uk, { config: n, updateConfig: i }))) : null;
}, Qf = de.createContext(null), Jf = () => {
  const e = de.useContext(Qf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, dk = (e) => {
  const { config: t } = de.useContext(Ct), { updateField: n } = Jf(), { enabledChartTypes: i, visHasNumbersOnBars: a, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: f, visSupportsChartHeight: d, visSupportsSuperTitle: u, visSupportsFootnotes: h } = ks(), { visualizationType: y, visualizationSubType: v, barStyle: S } = t, R = () => (y === "Bar" || y === "Deviation Bar") && v !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(Rn, null, " ", /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "General")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Lt, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: i }), d() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: n
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ r.createElement(Lt, { value: v || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), y === "Area Chart" && v === "stacked" && /* @__PURE__ */ r.createElement(Lt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Bu) }), y === "Bar" && /* @__PURE__ */ r.createElement(Lt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ r.createElement(Lt, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.isLollipopChart ? "lollipop" : S || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: n,
      options: R(),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Lt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ r.createElement(ot, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : f() && /* @__PURE__ */ r.createElement(
    ot,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ot,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display "N/A" on the Date/Category Axis as an indication of missing or undefined data values.'))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    ot,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    ot,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the Date/Category Axis where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: n
    }
  )), y === "Pie" && /* @__PURE__ */ r.createElement(Lt, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ r.createElement(
    ot,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(ot, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), u() && /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), h() && /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, fk = (e) => {
  const { config: t } = de.useContext(Ct), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: i } = Jf();
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, e.name)), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: i }), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: i }), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: i }), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: i }), /* @__PURE__ */ r.createElement(Qe, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: i })));
}, pk = (e, t) => {
  let n = [], i = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(Iu).filter((f) => l ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const l = [], f = [];
    for (const d in dr) {
      const u = d.startsWith("sequential"), h = d.startsWith("qualitative"), y = d.endsWith("reverse");
      u && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && l.push(d), h && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && f.push(d);
    }
    i = l, a = f;
  }
  return de.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), de.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: i, nonSequential: a };
}, hk = (e) => {
  var U;
  const { config: t, updateConfig: n, colorPalettes: i, twoColorPalette: a } = de.useContext(Ct), { visual: l } = t, { setLollipopShape: f, updateField: d } = Jf(), { visHasBarBorders: u, visCanAnimate: h, visSupportsNonSequentialPallete: y, headerColors: v, visSupportsTooltipOpacity: S, visSupportsTooltipLines: R, visSupportsBarSpace: k, visSupportsBarThickness: F, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: O } = ks(), { twoColorPalettes: N, sequential: P, nonSequential: D } = pk(t, n), L = (W, Z) => {
    if (console.log("value", Z), W === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: Z
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [W]: {
            ...t.sankey[W],
            default: Z
          }
        }
      });
  };
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Visual")), /* @__PURE__ */ r.createElement(Dn, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (W) => {
        f(W.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: d, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: d, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Lt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: d, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(ot, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: d })), /* @__PURE__ */ r.createElement(Lt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: d, options: ["small", "medium", "large"] }), u() && /* @__PURE__ */ r.createElement(Lt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: d, options: ["true", "false"] }), h() && /* @__PURE__ */ r.createElement(ot, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: d }), (((U = t.series) == null ? void 0 : U.some((W) => W.type === "Line" || W.type === "dashed-lg" || W.type === "dashed-sm" || W.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: d, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: d, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, v.map((W) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: W,
      key: W,
      onClick: (Z) => {
        Z.preventDefault(), n({ ...t, theme: W });
      },
      className: t.theme === W ? "selected " + W : W
    }
  )))), (y() || y()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), O() && /* @__PURE__ */ r.createElement(up, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.isPaletteReversed }), m() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, P.map((W) => {
    const Z = {
      backgroundColor: i[W][2]
    }, ce = {
      backgroundColor: i[W][3]
    }, te = {
      backgroundColor: i[W][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (V) => {
          V.preventDefault(), n({ ...t, palette: W });
        },
        className: t.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: Z }),
      /* @__PURE__ */ r.createElement("span", { style: ce }),
      /* @__PURE__ */ r.createElement("span", { style: te })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, D.map((W) => {
    const Z = {
      backgroundColor: i[W][2]
    }, ce = {
      backgroundColor: i[W][4]
    }, te = {
      backgroundColor: i[W][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (V) => {
          V.preventDefault(), n({ ...t, palette: W });
        },
        className: t.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: Z }),
      /* @__PURE__ */ r.createElement("span", { style: ce }),
      /* @__PURE__ */ r.createElement("span", { style: te })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (W) => L("nodeColor", W.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (W) => L("storyNodeFontColor", W.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (W) => L("linkColor", W.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(up, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, N.map((W) => {
    const Z = {
      backgroundColor: a[W][0]
    }, ce = {
      backgroundColor: a[W][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (te) => {
          te.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: W } });
        },
        className: t.twoColor.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: Z }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: ce })
    );
  }))), T() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: d,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), F() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(Qe, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: d, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Qe, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: d }), k() && /* @__PURE__ */ r.createElement(Qe, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: d, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(ot, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: d }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(ot, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: d })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(ot, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: d }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(ot, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: d }), R() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: d }), /* @__PURE__ */ r.createElement(ot, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: d })), S() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (W) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: W.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(ot, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: d }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (W) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: W.target.value
        }
      })
    }
  ))));
}, mk = () => {
  var d, u;
  const { config: e, updateConfig: t } = de.useContext(Ct), n = (d = e.data) == null ? void 0 : d[0], { updateField: i } = de.useContext(Qf);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (h, y, v) => {
    let S = [];
    n != null && n.storyNodeText && (S = [...n == null ? void 0 : n.storyNodeText]), S[v][h] = y, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: S
        }
      }
    });
  }, l = () => {
    const h = n;
    h.storyNodeText.push({
      StoryNode: "",
      segmentTextBefore: "",
      segmentTextAfter: ""
    }), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: [{ ...h }]
      }
    });
  }, f = (h) => {
    const y = n;
    y.storyNodeText.splice(h, 1), t({ ...e, sankey: { ...e.sankey, data: { ...y } } });
  };
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Sankey Settings")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: h, segmentTextBefore: y, segmentTextAfter: v }, S) => /* @__PURE__ */ r.createElement("div", { key: S, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ r.createElement("label", null, "Story Node Text", /* @__PURE__ */ r.createElement("input", { type: "text", value: h, fieldName: "StoryNode", label: "StoryNode", onChange: (R) => a("StoryNode", R.target.value, S) })), /* @__PURE__ */ r.createElement("label", null, "Story Text Before", /* @__PURE__ */ r.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (R) => a("segmentTextBefore", R.target.value, S) })), /* @__PURE__ */ r.createElement("label", null, "Story Text After", /* @__PURE__ */ r.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (R) => a("segmentTextAfter", R.target.value, S) })), /* @__PURE__ */ r.createElement(fs, { onClick: (R) => f(S), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((u = n == null ? void 0 : n.storyNodeText) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (h) => {
        h.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ r.createElement(ot, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: i })));
};
const yk = (e) => {
  var h;
  const { updateConfig: t, config: n, unfilteredData: i, dimensions: a } = de.useContext(Ct), l = (y = !0) => {
    const v = {};
    return i.forEach((S) => {
      Object.keys(S).forEach((R) => v[R] = !0);
    }), y && Object.keys(v).forEach((S) => {
      (n.series && n.series.filter((R) => R.dataKey === S).length > 0 || n.confidenceKeys && Object.keys(n.confidenceKeys).includes(S)) && delete v[S];
    }), Object.keys(v);
  }, f = (y, v, S) => {
    const R = [...n == null ? void 0 : n.annotations];
    R[S][v] = y, R[S].savedDimensions = [a[0], a[1]], t({
      ...n,
      annotations: R
    });
  }, d = () => {
    var k, F, T;
    const y = (k = document.querySelector(".chart-container > div > svg")) == null ? void 0 : k.getBoundingClientRect(), v = [y.width, y.height], S = {
      text: "New Annotation",
      snapToNearestPoint: !1,
      fontSize: 16,
      bezier: 10,
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
      marker: "arrow",
      edit: {
        subject: !0,
        label: !0
      },
      seriesKey: "",
      x: (Number(v == null ? void 0 : v[0]) + 350) / 2,
      y: Number((v == null ? void 0 : v[1]) / 2),
      xKey: n.xAxis.type === "date" ? new Date((T = (F = n == null ? void 0 : n.data) == null ? void 0 : F[0]) == null ? void 0 : T[n.xAxis.dataKey]).getTime() : n.xAxis.type === "categorical" ? "1/15/2016" : "",
      yKey: "",
      dx: 0,
      dy: 0,
      opacity: "100",
      savedDimensions: [a[0] * 0.73, a[1]],
      connectionType: "line"
    }, R = Array.isArray(n.annotations) ? n.annotations : [];
    t({
      ...n,
      annotations: [...R, S]
    });
  }, u = (y) => {
    const v = n.annotations.filter((S, R) => R !== y);
    t({
      ...n,
      annotations: v
    });
  };
  return /* @__PURE__ */ r.createElement(mu, null, /* @__PURE__ */ r.createElement(mu.Section, { title: e.name }, (n == null ? void 0 : n.annotations) && (n == null ? void 0 : n.annotations.map((y, v) => {
    var S, R, k, F, T, m, O, N, P;
    return /* @__PURE__ */ r.createElement(mu, null, /* @__PURE__ */ r.createElement(mu.Section, { title: y.text ? y.text.substring(0, 15) + "..." : `Annotation ${v + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: y.text, onChange: (D) => f(D.target.value, "text", v) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].opacity = D.target.value, t({
            ...n,
            annotations: L
          });
        },
        value: ((R = (S = n == null ? void 0 : n.annotations) == null ? void 0 : S[v]) == null ? void 0 : R.opacity) || "100"
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Subject", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (F = (k = n == null ? void 0 : n.annotations[v]) == null ? void 0 : k.edit) == null ? void 0 : F.subject,
        onClick: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].edit.subject = D.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Label", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (m = (T = n == null ? void 0 : n.annotations[v]) == null ? void 0 : T.edit) == null ? void 0 : m.label,
        onClick: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].edit.label = D.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Connection Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].connectionType = D.target.value, t({
            ...n,
            annotations: L
          });
        },
        value: (O = n == null ? void 0 : n.annotations[v]) == null ? void 0 : O.connectionType
      },
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((D, L) => /* @__PURE__ */ r.createElement("option", { key: D, value: D }, D))
    )), y.connectionType === "curve" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Curve Control", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((N = n == null ? void 0 : n.annotations[v]) == null ? void 0 : N.bezier) || 0,
        onChange: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].bezier = D.target.value, t({
            ...n,
            annotations: L
          });
        }
      }
    ))), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].marker = D.target.value, t({
            ...n,
            annotations: L
          });
        }
      },
      ["circle", "arrow"].map((D, L) => /* @__PURE__ */ r.createElement("option", null, D))
    )), /* @__PURE__ */ r.createElement("label", null, "Snap to Nearest Point", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (P = n == null ? void 0 : n.annotations[v]) == null ? void 0 : P.snapToNearestPoint,
        onClick: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].snapToNearestPoint = D.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), y.snapToNearestPoint && /* @__PURE__ */ r.createElement("label", null, "Associated Series:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (D) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].seriesKey = D.target.value, t({
            ...n,
            annotations: L
          });
        }
      },
      /* @__PURE__ */ r.createElement("option", { key: "none", value: "none" }, "None"),
      l(!1).map((D, L) => /* @__PURE__ */ r.createElement("option", null, D))
    )), /* @__PURE__ */ r.createElement(fs, { className: "warn btn-warn btn btn-remove delete", onClick: () => u(v) }, "Delete Annotation"))));
  })), ((h = n == null ? void 0 : n.annotations) == null ? void 0 : h.length) < 3 && /* @__PURE__ */ r.createElement(fs, { onClick: d }, "Add Annotation")));
}, _a = {
  ForestPlot: qE,
  Series: jr,
  Regions: ck,
  General: dk,
  BoxPlot: fk,
  Visual: hk,
  Sankey: mk,
  Annotate: yk
};
const gk = ({ config: e, updateConfig: t, data: n }) => {
  var T, m, O;
  const i = e.visualizationType === "Combo", a = ((T = e.runtime.lineSeriesKeys) == null ? void 0 : T.length) > 0, l = ((m = e.runtime.barSeriesKeys) == null ? void 0 : m.length) > 0, f = i && a, d = i && l, u = () => ar.uniq(ar.flatMap(n, ar.keys)), h = () => e.visualizationType === "Line" || f ? ["effect", "suppression"] : ["suppression"], y = {
    "Dashed Small": "- - -",
    "Dashed Medium": "– –",
    "Dashed Large": "— –",
    "Open Circles": "◯"
  }, v = (N) => {
    const P = Object.keys(y);
    return N === "suppression" ? P.slice(0, -1) : P;
  }, S = () => {
    if (e.visualizationType === "Bar" || d)
      return Object.keys(mp);
  };
  let R = (N) => {
    let P = [];
    e.preliminaryData && (P = [...e.preliminaryData]), P.splice(N, 1), t({ ...e, preliminaryData: P });
  }, k = () => {
    const N = e.visualizationType === "Line" ? "effect" : "suppression";
    let P = e.preliminaryData ? [...e.preliminaryData] : [];
    const D = {
      type: N,
      seriesKey: "",
      label: "Suppressed",
      column: "",
      value: "",
      style: "",
      displayTooltip: !0,
      displayLegend: !0,
      displayTable: !0,
      symbol: "",
      iconCode: "",
      lineCode: "",
      hideBarSymbol: !1,
      hideLineStyle: !1
    };
    P.push(D), t({ ...e, preliminaryData: P });
  }, F = (N, P, D) => {
    let L = [];
    e.preliminaryData && (L = [...e.preliminaryData]), L[D][N] = P, N === "symbol" && (L[D].iconCode = mp[P]), N === "style" && (L[D].lineCode = y[P]), t({ ...e, preliminaryData: L });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && ((O = e.preliminaryData) == null ? void 0 : O.map(({ column: N, displayLegend: P, displayTable: D, displayTooltip: L, label: U, seriesKey: W, style: Z, symbol: ce, type: te, value: V, hideBarSymbol: K, hideLineStyle: X }, B) => {
    var oe, re;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${B}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, " ", te === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (le) => {
          le.preventDefault(), R(B);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Lt, { value: te, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (le, G, j, J) => F(j, J, B), options: h() }), te === "suppression" ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: N,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (le, G, j, J) => F(j, J, B),
        options: (oe = e.runtime) == null ? void 0 : oe.seriesKeys
      }
    ), /* @__PURE__ */ r.createElement(Qe, { value: V, fieldName: "value", label: "Suppressed Data  Value", updateField: (le, G, j, J) => F(j, J, B) }), (f || e.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: Z,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (le, G, j, J) => F(j, J, B),
        options: v(te)
      }
    ), /* @__PURE__ */ r.createElement(ot, { value: X, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (le, G, j, J) => F(j, J, B) })), (d || e.visualizationType === "Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: ce,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (le, G, j, J) => F(j, J, B),
        options: S()
      }
    ), /* @__PURE__ */ r.createElement(ot, { value: K, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (le, G, j, J) => F(j, J, B) })), /* @__PURE__ */ r.createElement(
      Qe,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: U || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (le, G, j, J) => F(j, J, B)
      }
    ), /* @__PURE__ */ r.createElement(
      ot,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: L,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (le, G, j, J) => F(j, J, B)
      }
    ), /* @__PURE__ */ r.createElement(
      ot,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: P,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (le, G, j, J) => F(j, J, B)
      }
    ), /* @__PURE__ */ r.createElement(
      ot,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: D,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (le, G, j, J) => F(j, J, B)
      }
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: W, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (le, G, j, J) => F(j, J, B), options: e.runtime.lineSeriesKeys ?? ((re = e.runtime) == null ? void 0 : re.seriesKeys) }), /* @__PURE__ */ r.createElement(Lt, { value: N, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (le, G, j, J) => F(j, J, B), options: u() }), /* @__PURE__ */ r.createElement(Qe, { value: V, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (le, G, j, J) => F(j, J, B) }), /* @__PURE__ */ r.createElement(Lt, { value: Z, initial: "Select", fieldName: "style", label: "Style", updateField: (le, G, j, J) => F(j, J, B), options: v(te) }), /* @__PURE__ */ r.createElement(Qe, { value: U, fieldName: "label", label: "Label", placeholder: "", updateField: (le, G, j, J) => F(j, J, B) })));
  })), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: k, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, vk = () => {
  var Zt, En, un, kn, In, Yn, Zn, Xn, g, C, I, Y, Se, ge, Ae, je, rt, yt;
  const {
    config: e,
    updateConfig: t,
    tableData: n,
    transformedData: i,
    loading: a,
    colorScale: l,
    colorPalettes: f,
    twoColorPalette: d,
    unfilteredData: u,
    excludedData: h,
    isDashboard: y,
    setParentConfig: v,
    missingRequiredSections: S,
    isDebug: R,
    setFilteredData: k,
    lineOptions: F,
    rawData: T,
    highlight: m,
    highlightReset: O,
    dimensions: N
  } = de.useContext(Ct), { minValue: P, maxValue: D, existPositiveValue: L, isAllLine: U } = Lc(e, u), W = { data: i, config: e }, { leftMax: Z, rightMax: ce } = wy(W), {
    headerColors: te,
    visSupportsTooltipLines: V,
    visSupportsNonSequentialPallete: K,
    visSupportsSequentialPallete: X,
    visSupportsReverseColorPalette: B,
    visHasLabelOnData: oe,
    visHasNumbersOnBars: re,
    visHasAnchors: le,
    visHasBarBorders: G,
    visHasDataCutoff: j,
    visHasSelectableLegendValues: J,
    visCanAnimate: ue,
    visHasLegend: _e,
    visHasLegendAxisAlign: be,
    visHasBrushChart: ye,
    visSupportsDateCategoryAxis: Le,
    visSupportsValueAxisMin: ae,
    visSupportsValueAxisMax: Ie,
    visSupportsDateCategoryAxisLabel: Ee,
    visSupportsDateCategoryAxisLine: he,
    visSupportsDateCategoryAxisTicks: Pe,
    visSupportsDateCategoryTickRotation: ee,
    visSupportsDateCategoryNumTicks: De,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Ue,
    visSupportsFilters: Ge,
    visSupportsPreliminaryData: et,
    visSupportsValueAxisGridLines: Je,
    visSupportsValueAxisLine: st,
    visSupportsValueAxisTicks: Ke,
    visSupportsValueAxisLabels: We,
    visSupportsBarSpace: Be,
    visSupportsBarThickness: $e,
    visSupportsFootnotes: ht,
    visSupportsSuperTitle: qe,
    visSupportsDataCutoff: pt,
    visSupportsChartHeight: gt,
    visSupportsLeftValueAxis: ut,
    visSupportsTooltipOpacity: Rt,
    visSupportsRankByValue: tn,
    visSupportsResponsiveTicks: Xt,
    visSupportsDateCategoryHeight: vt,
    visHasDataSuppression: Nt
  } = ks();
  de.useEffect(() => {
    let ie = [];
    e.series && (ie = e.series.map((se) => ({
      ...se,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: ie
    });
  }, [e.visualizationType]), de.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), de.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: hn } = Zf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), on = (ie, se) => ({
    ...se
  }), Gt = {
    animate: !1,
    animateReplay: !0,
    display: "block",
    boxSizing: "border-box",
    border: "1px solid #D1D1D1",
    borderRadius: "2px",
    background: "#F1F1F1",
    padding: ".4em .6em",
    fontSize: ".8em",
    marginRight: ".3em",
    marginBottom: ".3em",
    cursor: "move",
    zIndex: "999"
  }, yn = (ie) => {
    ie.orientation === "horizontal" && (ie.labels = !1), ie.table.show === void 0 && (ie.table.show = !y), ie.visualizationType === "Combo" && (ie.orientation = "vertical"), Cn(ie.xAxis) && !ie.xAxis.padding && (ie.xAxis.padding = 6), ie.visualizationType === "Line" && (ie.visualizationSubType = "regular", ie.barStyle = "flat", ie.isLollipopChart = !1);
  }, ze = (ie, se, me, Re) => {
    if (R && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", ie, se, me, Re), ie === "boxplot" && se === "legend") {
      t({
        ...e,
        [ie]: {
          ...e[ie],
          [se]: {
            ...e.boxplot[se],
            [me]: Re
          }
        }
      });
      return;
    }
    if (ie === "boxplot" && se === "labels") {
      t({
        ...e,
        [ie]: {
          ...e[ie],
          [se]: {
            ...e.boxplot[se],
            [me]: Re
          }
        }
      });
      return;
    }
    const bt = ($n) => $n === 0 ? !0 : !!$n;
    if (ie === "columns" && bt(se) && bt(me)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [se]: {
            ...e.columns[se],
            [me]: Re
          }
        }
      });
      return;
    }
    if (ie === null && se === null) {
      bt(me) || console.error("fieldName is required");
      let $n = { ...e, [me]: Re };
      yn($n), t($n);
      return;
    }
    const gn = Array.isArray(e[ie]);
    let Tn = gn ? [...e[ie], Re] : { ...e[ie], [me]: Re };
    bt(se) && (gn ? (Tn = [...e[ie]], Tn[se] = { ...Tn[se], [me]: Re }) : typeof Re == "string" ? Tn[se] = Re : bt(me) && (Tn = { ...e[ie], [se]: { ...e[ie][se], [me]: Re } }));
    let fr = { ...e, [ie]: Tn };
    yn(fr), t(fr);
  }, [xt, Ht] = de.useState(!0), [It, At] = de.useState(!1);
  if (a)
    return null;
  de.useEffect(() => {
    var ie;
    (ie = e.general) != null && ie.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const xn = (ie) => {
    t({
      ...e,
      lollipopShape: ie
    });
  }, Mt = (ie) => {
    let se = e.series ? [...e.series] : [], me = Array.from(new Set(i.map((bt) => bt[ie]))), Re = [];
    me.forEach((bt) => {
      Re.push({ key: bt });
    }), e.visualizationType === "Forecasting" ? se.push({ dataKey: ie, type: e.visualizationType, stages: Re, stageColumn: ie, axis: "Left", tooltip: !0 }) : se.push({ dataKey: ie, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: se });
  }, ln = (ie) => {
    const se = e.series[0].dataKey, me = i.sort((bt, gn) => bt[se] - gn[se]), Re = ie === "asc" ? me : me.reverse();
    t({ ...e }, Re);
  }, cn = (ie) => {
    let se = [...e.exclusions.keys];
    se.push(ie);
    let me = { ...e.exclusions, keys: se };
    t({ ...e, exclusions: me });
  }, wn = (ie) => {
    let se = -1, me = [...e.exclusions.keys];
    for (let Re = 0; Re < me.length; Re++)
      if (me[Re] === ie) {
        se = Re;
        break;
      }
    if (se !== -1) {
      me.splice(se, 1);
      let Re = { ...e.exclusions, keys: me }, bt = { ...e, exclusions: Re };
      me.length === 0 && delete bt.exclusions.keys, t(bt);
    }
  }, Jt = (ie = !0) => {
    let se = {};
    if (u.forEach((me) => {
      Object.keys(me).forEach((Re) => se[Re] = !0);
    }), ie) {
      const { lower: me, upper: Re } = e.confidenceKeys || {};
      Object.keys(se).forEach((bt) => {
        (e.series && e.series.filter((gn) => gn.dataKey === bt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(bt) && (me && Re || me || Re) && bt !== me && bt !== Re) && delete se[bt];
      });
    }
    return Object.keys(se);
  }, jt = (ie) => {
    if (!ie)
      return [];
    const se = /* @__PURE__ */ new Set();
    for (let me = 0; me < ie.length; me++)
      for (const [Re] of Object.entries(ie[me]))
        se.add(Re);
    return Array.from(se);
  }, Pn = (ie, se = !1) => {
    let me = [];
    return h.forEach((Re) => {
      me.push(Re[ie]);
    }), se ? [...new Set(me)] : me;
  }, Mn = () => {
    Ht(!xt), t({
      ...e,
      showEditorPanel: !xt
    });
  }, Hn = () => {
    let ie = JSON.parse(JSON.stringify(e));
    return S() === !1 && delete ie.newViz, delete ie.runtime, ie;
  };
  de.useEffect(() => {
    if (v) {
      const ie = Hn();
      v(ie);
    }
  }, [e]), de.useEffect(() => {
    const ie = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], se = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: se
      },
      yAxis: {
        ...e.yAxis,
        anchors: ie
      }
    });
  }, [e.orientation]), de.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), de.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), de.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const Ut = de.useCallback(() => {
    const ie = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, ie.map((se, me) => /* @__PURE__ */ r.createElement("li", { key: se }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": se }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, se)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => wn(se) }, "×"))));
  }, [e]), zn = (ie, se) => {
    let me = e.series, [Re] = me.splice(ie, 1);
    me.splice(se, 0, Re), t({ ...e, series: me });
  };
  e.isLollipopChart && ((Zt = e == null ? void 0 : e.series) == null ? void 0 : Zt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((En = e == null ? void 0 : e.series) == null ? void 0 : En.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((un = e == null ? void 0 : e.series) == null ? void 0 : un.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((kn = e == null ? void 0 : e.series) == null ? void 0 : kn.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Wn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [An, Sn] = de.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Ne = () => {
    const ie = e[Wn].max, se = e[Wn].rightMax;
    let me = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (ie && parseFloat(ie) < parseFloat(D) && L):
          me = "Max value must be more than " + D;
          break;
        case (ie && parseFloat(ie) < 0 && !L):
          me = "Value must be more than or equal to 0";
          break;
        default:
          me = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (ie && parseFloat(ie) < Z):
          me = "Max value must be more than " + Z;
          break;
        case (se && parseFloat(se) < ce):
          Re = "Max value must be more than " + ce;
          break;
        case (ie && parseFloat(ie) < 0 && !L):
          me = "Value must be more than or equal to 0";
          break;
        default:
          me = "";
      }
    Sn((bt) => ({ ...bt, maxMsg: me, rightMaxMessage: Re }));
  }, ct = () => {
    const ie = parseFloat(e[Wn].min);
    let se = Number(P), me = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && ie < 0):
        me = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && ie > se):
        me = "Value should not exceed " + P;
        break;
      case (e.visualizationType === "Combo" && U && ie > se):
        me = "Value should not exceed " + P;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !U) && se > 0 && ie > 0):
        me = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && ie >= Math.min(se, e.xAxis.target)):
        me = "Value must be less than " + Math.min(se, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && ie && se < 0 && ie > se):
        me = "Value should not exceed " + P;
        break;
      default:
        me = "";
    }
    Sn((Re) => ({ ...Re, minMsg: me }));
  };
  de.useEffect(() => {
    ct(), Ne();
  }, [P, D, e]);
  const dt = ((In = e == null ? void 0 : e.dataKey) == null ? void 0 : In.includes("http://")) || ((Yn = e == null ? void 0 : e.dataKey) == null ? void 0 : Yn.includes("https://")), $ = () => {
    var ie, se;
    if (R !== void 0 && R && !((ie = e == null ? void 0 : e.xAxis) != null && ie.dataKey)) {
      let me = Jt(!1);
      if (me.includes("Date"))
        return "Date";
      if (me.includes("Race"))
        return "Race";
      if (me.includes("Month"))
        return "Month";
    }
    return ((se = e == null ? void 0 : e.xAxis) == null ? void 0 : se.dataKey) || "";
  }, Oe = () => {
    if (R !== void 0 && R && Jt(!1).length > 0) {
      let ie = Jt(!1).filter((se) => se !== $());
      if (ie.length > 0)
        return ie[0];
    }
    return "";
  };
  if (R && !e.xAxis.dataKey && (e.xAxis.dataKey = $()), R && ((Zn = e == null ? void 0 : e.series) == null ? void 0 : Zn.length) === 0) {
    let ie = Oe();
    ie !== "" && Mt(ie), R && console.log("### COVE DEBUG: Chart: Setting default datacol=", ie);
  }
  const Xe = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Ve = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Xn = e.data) == null ? void 0 : Xn[0]) || []).map((se) => {
      const me = e == null ? void 0 : e.series.some((Re) => Re.dataKey === se);
      if (se !== e.xAxis.dataKey && !me)
        return Ve.push(
          /* @__PURE__ */ r.createElement("option", { value: se, key: se }, se)
        );
    });
    let ie = {};
    e.data.forEach((se) => {
      Object.keys(se).forEach((me) => {
        ie[me] = ie[me] || [];
        const Re = typeof se[me] == "number" ? se[me].toString() : se[me];
        ie[me].indexOf(Re) === -1 && ie[me].push(Re);
      });
    });
  }
  if (!e.data && i) {
    if (!i[0])
      return;
    Object.keys(i[0]).map((se) => {
      const me = i.some((Re) => Re.dataKey === se);
      if (se !== e.xAxis.dataKey && !me)
        return Ve.push(
          /* @__PURE__ */ r.createElement("option", { value: se, key: se }, se)
        );
    });
    let ie = {};
    i.forEach((se) => {
      Object.keys(se).forEach((me) => {
        ie[me] = ie[me] || [];
        const Re = typeof se[me] == "number" ? se[me].toString() : se[me];
        ie[me].indexOf(Re) === -1 && ie[me].push(Re);
      });
    });
  }
  const it = (ie) => {
    const se = ar.cloneDeep(e.columns);
    delete se[ie], t({
      ...e,
      columns: se
    });
  }, nt = async (ie, se, me) => {
    switch (se) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [ie]: {
              ...e.columns[ie],
              [se]: me
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [ie]: {
              ...e.columns[ie],
              [se]: me
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Et,
    highlightedSeriesValues: _t,
    handleUpdateHighlightedBar: Ze,
    handleAddNewHighlightedBar: Kt,
    handleRemoveHighlightedBar: zt,
    handleUpdateHighlightedBarColor: Ft,
    handleHighlightedBarLegendLabel: mt,
    handleUpdateHighlightedBorderWidth: Dt
  } = Sc(e, t), wt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, Yt = () => {
    const ie = i.map((se) => se[e.legend.colorCode]);
    return wt ? ie : Jt(!1).filter((se) => se !== e.xAxis.dataKey);
  }, Wt = (ie) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: ie } });
  }, dn = (ie, se, me) => {
    var gn;
    const Re = { ...e[ie], [se]: me }, bt = { ...e, [ie]: Re };
    me === "highlight" && ((gn = e.legend.seriesHighlight) != null && gn.length) && (bt.legend.seriesHighlight.length = 0), t(bt);
  }, sn = (ie, se, me) => {
    const Re = { ...e.xAxis[ie] };
    Re[se] = me;
    const bt = { ...e, xAxis: { ...e.xAxis, [ie]: Re } };
    t(bt);
  }, nn = {
    addNewExclusion: cn,
    data: i,
    editColumn: nt,
    getColumns: Jt,
    getDataValueOptions: jt,
    getDataValues: Pn,
    getItemStyle: on,
    handleSeriesChange: zn,
    handleAddNewHighlightedBar: Kt,
    setCategoryAxis: $,
    sortSeries: ln,
    updateField: ze,
    warningMsg: An,
    highlightedBarValues: Et,
    handleHighlightedBarLegendLabel: mt,
    handleUpdateHighlightedBar: Ze,
    handleRemoveHighlightedBar: zt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: _t,
    handleUpdateHighlightedBorderWidth: Dt,
    handleUpdateHighlightedBarColor: Ft,
    setLollipopShape: xn
  };
  return /* @__PURE__ */ r.createElement(Qf.Provider, { value: nn }, /* @__PURE__ */ r.createElement(Dr, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(Ud.Sidebar, { displayPanel: xt, isDashboard: y, title: "Configure Chart", onBackClick: Mn }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(_a.General, { name: "General" }), /* @__PURE__ */ r.createElement(_a.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ r.createElement(_a.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(zu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Dn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (ie) => {
        ie.target.value !== "" && ie.target.value !== "Select" && Mt(ie.target.value), ie.target.value = "";
      },
      options: Jt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(_a.Series.Wrapper, { getColumns: Jt }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(_y, { onDragEnd: ({ source: ie, destination: se }) => zn(ie.index, se.index) }, /* @__PURE__ */ r.createElement(Dy, { droppableId: "filter_order" }, (ie) => /* @__PURE__ */ r.createElement("ul", { ...ie.droppableProps, className: "series-list", ref: ie.innerRef }, /* @__PURE__ */ r.createElement(_a.Series.List, { series: e.series, getItemStyle: on, sortableItemStyles: Gt, chartsWithOptions: Xe }), ie.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: ze, initial: "Select", options: Jt() }), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: ze, initial: "Select", options: Jt() })), tn() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Lt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (ie) => ln(ie.target.value), options: ["asc", "desc"] }), et() && /* @__PURE__ */ r.createElement(gk, { config: e, updateConfig: t, data: i }))), /* @__PURE__ */ r.createElement(_a.BoxPlot, { name: "Measures" }), ut() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(zu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: ze,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: ze }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(ot, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: ze }), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: ze
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: ze }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(ot, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: ze }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: ze }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), Je() && /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: ze }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(Qe, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: ze, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(ot, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: ze })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(Qe, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: ze, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, st() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: ze }), We() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: ze }), Ke() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: ze }), Ie() && /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.maxMsg), ae() && /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: ze })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.maxMsg), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg)), le() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (C = (g = e.yAxis) == null ? void 0 : g.anchors) == null ? void 0 : C.map((ie, se) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${se}` }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", se + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(se, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[se].value ? e.yAxis.anchors[se].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[se].value = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[se].color ? e.yAxis.anchors[se].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[se].color = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[se].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.yAxis.anchors];
        Re[se].lineStyle = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((me) => /* @__PURE__ */ r.createElement("option", { key: me.key }, me.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ie) => {
        ie.preventDefault();
        const se = [...e.yAxis.anchors];
        se.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: se
          }
        });
      }
    },
    "Add Anchor"
  )), le() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (Y = (I = e.xAxis) == null ? void 0 : I.anchors) == null ? void 0 : Y.map((ie, se) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `xaxis-anchors-${se}` }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", se + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(se, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[se].value ? e.xAxis.anchors[se].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[se].value = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[se].color ? e.xAxis.anchors[se].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[se].color = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[se].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.xAxis.anchors];
        Re[se].lineStyle = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((me) => /* @__PURE__ */ r.createElement("option", { key: me.key }, me.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ie) => {
        ie.preventDefault();
        const se = [...e.xAxis.anchors];
        se.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: se
          }
        });
      }
    },
    "Add Anchor"
  )))), hn && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: ze }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(ot, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: ze, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.rightMaxMessage), /* @__PURE__ */ r.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: ze }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg))), Le() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(zu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (ie) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: ie.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ r.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: ze }), we() && /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.xAxis.dataKey || $() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: ze,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: ze,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: ze }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), Cn(e.xAxis) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: ze
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: ze
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: ze
    }
  ), /* @__PURE__ */ r.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: ze
    }
  )), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: ze
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Ut, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ie) => {
        ie.target.value !== "" && ie.target.value !== "Select" && cn(ie.target.value), ie.target.value = "";
      },
      options: Pn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: ze, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: ze, value: e.exclusions.dateEnd || "" }))), De() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.xAxis.manualStep,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "manualStep",
      label: "Step count",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => At(!It), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${It ? "90deg" : "0deg"})` } }, ">"))), It && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(ep).map((ie) => /* @__PURE__ */ r.createElement(
    Qe,
    {
      key: `viewport-step-count-input-${ie}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[ie] : void 0,
      placeholder: "Auto",
      type: "number",
      label: ie,
      className: "number-narrow",
      updateField: (se, me, Re, bt) => sn("viewportStepCount", ie, bt)
    }
  ))))), De() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.xAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => At(!It), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${It ? "90deg" : "0deg"})` } }, ">"))), It && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(ep).map((ie) => /* @__PURE__ */ r.createElement(
    Qe,
    {
      key: `viewport-num-ticks-input-${ie}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[ie] : void 0,
      placeholder: "Auto",
      type: "number",
      label: ie,
      className: "number-narrow",
      updateField: (se, me, Re, bt) => sn("viewportNumTicks", ie, bt)
    }
  ))))), vt() && /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: ze }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: ze }), /* @__PURE__ */ r.createElement(Qe, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: ze, min: 0 })), Xt() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(ot, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: ze }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ee() && /* @__PURE__ */ r.createElement(Qe, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: ze }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: ze }), Ee() && /* @__PURE__ */ r.createElement(ot, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: ze })) : /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: ze }), Ee() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: ze }), Pe() && /* @__PURE__ */ r.createElement(ot, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: ze })), ((Se = e.series) == null ? void 0 : Se.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Et.map((ie, se) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${se}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (me) => zt(me, se) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", se + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[se].value, onChange: (me) => Ze(me, se) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), _t && [...new Set(_t)].sort().map((me) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${se}-${me}` }, me)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[se].color ? e.highlightedBarValues[se].color : "", onChange: (me) => Ft(me, se) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[se].borderWidth ? e.highlightedBarValues[se].borderWidth : "", onChange: (me) => Dt(me, se) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[se].legendLabel ? e.highlightedBarValues[se].legendLabel : "", onChange: (me) => mt(me, se) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (ie) => Kt(ie) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Ut, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ie) => {
        ie.target.value !== "" && ie.target.value !== "Select" && cn(ie.target.value), ie.target.value = "";
      },
      options: Pn(e.xAxis.dataKey, !0)
    }
  ))), le() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (Ae = (ge = e.xAxis) == null ? void 0 : ge.anchors) == null ? void 0 : Ae.map((ie, se) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${se}` }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", se + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(se, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[se].value ? e.xAxis.anchors[se].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[se].value = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[se].color ? e.xAxis.anchors[se].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[se].color = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[se].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.xAxis.anchors];
        Re[se].lineStyle = me.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((me) => /* @__PURE__ */ r.createElement("option", { key: me.key }, me.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ie) => {
        ie.preventDefault();
        const se = [...e.xAxis.anchors];
        se.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: se
          }
        });
      }
    },
    "Add Anchor"
  )), le() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (rt = (je = e.yAxis) == null ? void 0 : je.anchors) == null ? void 0 : rt.map((ie, se) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${se}` }, /* @__PURE__ */ r.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", se + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(se, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[se].value ? e.yAxis.anchors[se].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[se].value = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[se].color ? e.yAxis.anchors[se].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[se].color = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[se].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.yAxis.anchors];
        Re[se].lineStyle = me.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((me) => /* @__PURE__ */ r.createElement("option", { key: me.key }, me.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ie) => {
        ie.preventDefault();
        const se = [...e.yAxis.anchors];
        se.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: se
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(_a.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Columns")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(ng, { config: e, updateField: ze, deleteColumn: it }), " ")), _e() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Legend")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(ot, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: ze }), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ r.createElement(
    ot,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: ze,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(ot, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: ze }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Lt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: ze, options: jt(i) }), /* @__PURE__ */ r.createElement(Lt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[ie, , se, me]) => dn(ie, se, me), options: ["highlight", "isolate"] }), be() && /* @__PURE__ */ r.createElement(ot, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: ze }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(ot, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: ze }), J && e.legend.behavior === "isolate" && !wt && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(ft, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((ie, se) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `${ie}-${se}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(se, 1), ze("legend", null, "seriesHighlight", Re), Re.length || O();
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.legend.seriesHighlight[se],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (me) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(me.target.value) || (Re[se] = me.target.value, Wt([...Re]));
      },
      options: Yt()
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ie) => {
        ie.preventDefault();
        const se = Yt(), me = [...e.legend.seriesHighlight];
        if (me.length < se.length) {
          const [bt] = se.filter((gn) => !me.includes(gn));
          me.push(bt), Wt([...me]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ r.createElement(Qe, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: ze }), /* @__PURE__ */ r.createElement(Lt, { value: (yt = e.legend) == null ? void 0 : yt.position, section: "legend", fieldName: "position", label: "Position", updateField: ze, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: ze }), /* @__PURE__ */ r.createElement(ot, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: ze })), /* @__PURE__ */ r.createElement(Qe, { type: "textarea", value: e.legend.description, updateField: ze, section: "legend", fieldName: "description", label: "Legend Description" }))), Ge() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Filters")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(rg, { config: e, updateField: ze, rawData: T }))), /* @__PURE__ */ r.createElement(_a.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Nn, null, /* @__PURE__ */ r.createElement(_n, null, "Data Table")), /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(ag, { config: e, columns: Object.keys(i[0] || {}), updateField: ze, isDashboard: y, isLoadedFromUrl: dt }), " ")), !1), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Oy, { loadConfig: t, state: e, convertStateToConfig: Hn }))));
}, Oh = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, xk = (e) => {
  e.sort((h, y) => h - y);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, i = n ? e.slice(0, t) : e.slice(0, t + 1), a = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(i.length / 2), f = n ? (i[l - 1] + i[l]) / 2 : i[l], d = Math.floor(a.length / 2), u = n ? (a[d - 1] + a[d]) / 2 : a[d];
  return { q1: f, q3: u };
}, bk = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Sk = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Ek = [
  {
    value: "Dashed Small",
    key: "dashed-sm"
  },
  {
    value: "Dashed Medium",
    key: "dashed-md"
  },
  {
    value: "Dashed Large",
    key: "dashed-lg"
  },
  {
    value: "Solid Line",
    key: "solid-line"
  }
], Fh = (e = "#000000", t = !1) => {
  let n = ps(e), i = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, i, n.darken(0.3).hex()];
};
const Mh = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, i = new URL(e, window.location.origin), a = i.pathname, l = i.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const d = n.exec(l);
  return d && d[1] ? d[1] : "";
};
function ew({ configUrl: e, config: t, isEditor: n = !1, isDebug: i = !1, isDashboard: a = !1, setConfig: l, setEditing: f, hostname: d, link: u, setSharedFilter: h, setSharedFilterValue: y, dashboardConfig: v }) {
  var Pn, Mn, Hn, Ut, zn, Wn, An, Sn, Ne, ct, dt;
  const S = new ug(), [R, k] = de.useState(!0), [F, T] = de.useState(null), [m, O] = de.useState({}), [N, P] = de.useState(m.data || []), [D, L] = de.useState(void 0), [U, W] = de.useState(void 0), [Z, ce] = de.useState(t && ((Mn = (Pn = t == null ? void 0 : t.legend) == null ? void 0 : Pn.seriesHighlight) != null && Mn.length) ? [...(Hn = t == null ? void 0 : t.legend) == null ? void 0 : Hn.seriesHighlight] : []), [te, V] = de.useState("lg"), [K, X] = de.useState([]), [B, oe] = de.useState(), [re, le] = de.useState(), [G, j] = de.useState(!1), [J, ue] = de.useState([]), [_e] = de.useState(`cove-${Math.random().toString(16).slice(-4)}`), [be, ye] = de.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  de.useRef(/* @__PURE__ */ new Map()), de.useRef();
  const Le = de.useRef(null);
  i && console.log("Chart config, isEditor", m, n);
  let { legend: ae, title: Ie, description: Ee, visualizationType: he } = m;
  n && (!Ie || Ie === "") && (Ie = "Chart Title"), m.table && (!((Ut = m.table) != null && Ut.label) || ((zn = m.table) == null ? void 0 : zn.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Pe, lineDatapointClass: ee, contentClasses: De, sparkLineStyles: we } = ig(m), Ue = de.useId(), Ge = (Wn = m.legend) != null && Wn.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : Ue, et = () => Ac(m.visualizationType, U, m.allowLineToBarGraph), Je = async () => {
    var $;
    if (m.dataUrl) {
      const Oe = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Xe = Object.fromEntries(new URLSearchParams(Oe.search)), Ve = !1;
      if (($ = m.filters) == null || $.forEach((Et) => {
        Et.type === "url" && Xe[Et.queryParameter] !== decodeURIComponent(Et.active) && (Xe[Et.queryParameter] = Et.active, Ve = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Ve)
        return;
      let it = `${Oe.origin}${Oe.pathname}${Object.keys(Xe).map((Et, _t) => {
        let Ze = _t === 0 ? "?" : "&";
        return Ze += Et + "=", Ze += Xe[Et], Ze;
      }).join("")}`, nt = [];
      try {
        const Et = Mh(Oe.href);
        Et === "csv" || tp(it) ? nt = await fetch(it).then((_t) => _t.text()).then((_t) => ap.parse(_t, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : Et === "json" || np(it) ? nt = await fetch(it).then((_t) => _t.json()) : nt = [];
      } catch {
        console.error(`Cannot parse URL: ${it}`), nt = [];
      }
      m.dataDescription && (nt = S.autoStandardize(nt), nt = S.developerStandardize(nt, m.dataDescription)), Object.assign(nt, { urlFiltered: !0 }), Ke({ ...m, runtimeDataUrl: it, data: nt, formattedData: nt }), nt && (P(nt), L(nt), W(bi(m.filters, nt)));
    }
  }, st = async () => {
    let $ = t || await (await fetch(e)).json(), Oe = $.data || [];
    const Xe = $.filters ? $.filters.filter((nt) => nt.type === "url").length > 0 : !1;
    if ($.dataUrl && !Xe)
      try {
        const nt = Mh($.dataUrl);
        (nt === "csv" || tp($.dataUrl)) && (Oe = await fetch($.dataUrl + `?v=${gp()}`).then((Et) => Et.text()).then((Et) => (Et = Et.replace(/(".*?")|,/g, (...Ze) => Ze[1] || "|"), Et = Et.replace(/["]+/g, ""), ap.parse(Et, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (nt === "json" || np($.dataUrl)) && (Oe = await fetch($.dataUrl + `?v=${gp()}`).then((Et) => Et.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${$.dataUrl}`), Oe = [];
      }
    $.dataDescription && (Oe = S.autoStandardize(Oe), Oe = S.developerStandardize(Oe, $.dataDescription)), Oe && (P(Oe), L(Oe)), $ !== void 0 && $.table !== void 0 && (!$.table || !$.table.showVertical) && ($.table = $.table || {}, $.table.showVertical = !1);
    let Ve = { ...jd, ...$ };
    Ve.filters && Ve.filters.forEach((nt, Et) => {
      const _t = Fy(nt);
      _t && (Ve.filters[Et].active = _t);
    }), Ve.visualizationType === "Box Plot" && (Ve.legend.hide = !0), Ve.table.show === void 0 && (Ve.table.show = !a), Ve.series.forEach((nt) => {
      (nt.tooltip === void 0 || nt.tooltip === null) && (nt.tooltip = !0), nt.axis || (nt.axis = "Left");
    }), !Ve.data && Oe && (Ve.data = Oe);
    const it = { ...await My(Ve) };
    Ke(it, Oe);
  }, Ke = ($, Oe) => {
    var nt, Et, _t;
    let Xe = Oe || N;
    Object.keys(jd).forEach((Ze) => {
      $[Ze] && typeof $[Ze] == "object" && !Array.isArray($[Ze]) && ($[Ze] = { ...jd[Ze], ...$[Ze] });
    });
    let Ve = [];
    if ($.exclusions && $.exclusions.active)
      if ($.xAxis.type === "categorical" && ((nt = $.exclusions.keys) == null ? void 0 : nt.length) > 0)
        Ve = Xe.filter((Ze) => !$.exclusions.keys.includes(Ze[$.xAxis.dataKey]));
      else if (Cn($.xAxis) && ($.exclusions.dateStart || $.exclusions.dateEnd) && $.xAxis.dateParseFormat) {
        const Ze = (Dt) => new Date(Dt).getTime();
        let Kt = Ze($.exclusions.dateStart), zt = Ze($.exclusions.dateEnd) + 86399999, Ft = typeof Kt !== void 0 && isNaN(Kt) === !1, mt = typeof zt !== void 0 && isNaN(zt) === !1;
        Ft && mt ? Ve = Xe.filter((Dt) => Ze(Dt[$.xAxis.dataKey]) >= Kt && Ze(Dt[$.xAxis.dataKey]) <= zt) : Ft ? Ve = Xe.filter((Dt) => Ze(Dt[$.xAxis.dataKey]) >= Kt) : mt && (Ve = Xe.filter((Dt) => Ze(Dt[$.xAxis.dataKey]) <= zt));
      } else
        Ve = Oe || N;
    else
      Ve = Oe || N;
    L(Ve);
    let it = [];
    if ($.filters && ($.filters.forEach((Ze, Kt) => {
      let zt = [];
      zt = Ze.orderedValues || We(Ze.columnName, Ve).sort(Ze.order === "desc" ? Sk : bk), $.filters[Kt].values = zt, $.filters[Kt].active = $.filters[Kt].active || zt[0], $.filters[Kt].filterStyle = $.filters[Kt].filterStyle ? $.filters[Kt].filterStyle : "dropdown";
    }), it = bi($.filters, Ve), W(it)), $.xAxis.type === "date-time" && m.orientation === "horizontal" && ($.xAxis.type = "date"), $.runtime = {}, $.runtime.seriesLabels = {}, $.runtime.seriesLabelsAll = [], $.runtime.originalXAxis = $.xAxis, $.visualizationType === "Pie" ? ($.runtime.seriesKeys = (Oe || Xe).map((Ze) => Ze[$.xAxis.dataKey]), $.runtime.seriesLabelsAll = $.runtime.seriesKeys) : $.runtime.seriesKeys = $.series ? $.series.map((Ze) => ($.runtime.seriesLabels[Ze.dataKey] = Ze.name || Ze.label || Ze.dataKey, $.runtime.seriesLabelsAll.push(Ze.name || Ze.dataKey), Ze.dataKey)) : [], $.visualizationType === "Box Plot" && $.series) {
      let Ze = Ve ? Ve.map((wt) => wt[$.xAxis.dataKey]) : Xe.map((wt) => wt[$.xAxis.dataKey]), Kt = Ve ? Ve.map((wt) => {
        var Yt;
        return Number(wt[(Yt = $ == null ? void 0 : $.series[0]) == null ? void 0 : Yt.dataKey]);
      }) : Xe.map((wt) => {
        var Yt;
        return Number(wt[(Yt = $ == null ? void 0 : $.series[0]) == null ? void 0 : Yt.dataKey]);
      });
      const Ft = function(wt) {
        return wt.filter(function(Yt, Wt, dn) {
          return dn.indexOf(Yt) === Wt;
        });
      }(Ze);
      let mt = [];
      const Dt = [];
      if (!Ft)
        return;
      Ft.forEach((wt) => {
        try {
          if (!wt)
            throw new ze("No groups resolved in box plots");
          let Yt = Ve ? Ve.filter((g) => g[$.xAxis.dataKey] === wt) : Xe.filter((g) => g[$.xAxis.dataKey] === wt), Wt = Yt.map((g) => {
            var C;
            return Number(g[(C = $ == null ? void 0 : $.series[0]) == null ? void 0 : C.dataKey]);
          }), dn = Wt.sort((g, C) => g - C);
          const sn = xk(dn);
          if (!Yt)
            throw new ze("boxplots dont have data yet");
          if (!Dt)
            throw new ze("boxplots dont have plots yet");
          $.boxplot.firstQuartilePercentage === "" && ($.boxplot.firstQuartilePercentage = 0), $.boxplot.thirdQuartilePercentage === "" && ($.boxplot.thirdQuartilePercentage = 0);
          const nn = sn.q1, Zt = sn.q3, En = Zt - nn, un = nn - (Zt - nn) * 1.5, kn = Zt + (Zt - nn) * 1.5, In = dn.filter((g) => g < un || g > kn);
          let Yn = Wt;
          Yn = Yn.filter((g) => !In.includes(g));
          const Zn = ts(Wt) || 0, Xn = es([Zn, nn - 1.5 * En]);
          Dt.push({
            columnCategory: wt,
            columnMax: ts([es(Wt), nn + 1.5 * En]),
            columnThirdQuartile: Number(Zt).toFixed($.dataFormat.roundTo),
            columnMedian: Number(yg(Wt)).toFixed($.dataFormat.roundTo),
            columnFirstQuartile: nn.toFixed($.dataFormat.roundTo),
            columnMin: Xn,
            columnTotal: Wt.reduce((g, C) => g + C, 0),
            columnSd: Number(pg(Wt)).toFixed($.dataFormat.roundTo),
            columnMean: Number(mg(Wt)).toFixed($.dataFormat.roundTo),
            columnIqr: Number(En).toFixed($.dataFormat.roundTo),
            columnLowerBounds: Xn,
            columnUpperBounds: ts([es(dn), nn + 1.5 * En]),
            columnOutliers: In,
            values: Wt,
            nonOutlierValues: Yn
          });
        } catch (Yt) {
          console.error("COVE: ", Yt.message);
        }
      }), mt = JSON.parse(JSON.stringify(Dt)), mt.map((wt) => (wt.columnIqr = void 0, wt.nonOutlierValues = void 0, wt.columnLowerBounds = void 0, wt.columnUpperBounds = void 0, null)), $.boxplot.allValues = Kt, $.boxplot.categories = Ft, $.boxplot.plots = Dt, $.boxplot.tableData = mt;
    }
    $.visualizationType === "Combo" && $.series && ($.runtime.barSeriesKeys = [], $.runtime.lineSeriesKeys = [], $.runtime.areaSeriesKeys = [], $.runtime.forecastingSeriesKeys = [], $.series.forEach((Ze) => {
      Ze.type === "Area Chart" && $.runtime.areaSeriesKeys.push(Ze), Ze.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ze), (Ze.type === "Bar" || Ze.type === "Combo") && $.runtime.barSeriesKeys.push(Ze.dataKey), (Ze.type === "Line" || Ze.type === "dashed-sm" || Ze.type === "dashed-md" || Ze.type === "dashed-lg") && $.runtime.lineSeriesKeys.push(Ze.dataKey), Ze.type === "Combo" && (Ze.type = "Bar");
    })), $.visualizationType === "Forecasting" && $.series && ($.runtime.forecastingSeriesKeys = [], $.series.forEach((Ze) => {
      Ze.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ze);
    })), $.visualizationType === "Area Chart" && $.series && ($.runtime.areaSeriesKeys = [], $.series.forEach((Ze) => {
      $.runtime.areaSeriesKeys.push({ ...Ze, type: "Area Chart" });
    })), $.visualizationType === "Bar" && $.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes($.visualizationType) ? ($.runtime.xAxis = $.yAxis.yAxis ? $.yAxis.yAxis : $.yAxis, $.runtime.yAxis = $.xAxis.xAxis ? $.xAxis.xAxis : $.xAxis, $.runtime.horizontal = !1, $.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes($.visualizationType) && !et() ? ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1, $.orientation = "vertical") : ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1, $.series.forEach((Ze) => {
      (Ze.hideNullValue === null || Ze.hideNullValue === void 0) && (Ze.hideNullValue = !0), (Ze.hideZeroValue === null || Ze.hideZeroValue === void 0) && (Ze.hideZeroValue = !0);
    })), $.runtime.uniqueId = Date.now(), $.runtime.editorErrorMessage = $.visualizationType === "Pie" && !$.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", $.runtime.editorErrorMessage = $.visualizationType === "Sankey" && !$.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (Et = $.legend.seriesHighlight) != null && Et.length && ce((_t = $.legend) == null ? void 0 : _t.seriesHighlight), O($);
  }, We = ($, Oe = this.state.data) => {
    const Xe = [];
    return Oe.forEach((Ve) => {
      const it = Ve[$];
      it && Xe.includes(it) === !1 && Xe.push(it);
    }), Xe;
  }, Be = ($, Oe) => {
    let Xe = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Ve = parseFloat($[Xe]), it = parseFloat(Oe[Xe]);
    return Ve < it ? m.sortData === "ascending" ? 1 : -1 : Ve > it ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, $e = new Py(($) => {
    for (let Oe of $) {
      let { width: Xe, height: Ve } = Oe.contentRect, it = Ry(Xe), nt = 32, Et = 350;
      V(it), n && (Xe = Xe - Et), Oe.target.dataset.lollipop === "true" && (Xe = Xe - 2.5), Xe = Xe - nt, X([Xe, Ve]);
    }
  }), ht = de.useCallback(($) => {
    $ !== null && $e.observe($), le($);
  }, []);
  function qe($) {
    return Object.keys($).length === 0;
  }
  de.useEffect(() => {
    st();
  }, []), de.useEffect(() => {
    Je();
  }, [JSON.stringify(m.filters)]), de.useEffect(() => {
    re && !qe(m) && !G && (og("cove_loaded", { config: m }), j(!0));
  }, [re, m]), de.useEffect(() => {
    const $ = (Oe) => {
      let Xe = [];
      Xe.push(Oe.detail), oe(Xe);
    };
    return lg("cove_filterData", (Oe) => $(Oe)), () => {
      sg("cove_filterData", $);
    };
  }, [m]), de.useEffect(() => {
    if (B && B[0] && !B[0].hasOwnProperty("active")) {
      let Oe = { ...m };
      delete Oe.filters, O(Oe), W(bi(B, D));
    }
    if (B && B.length > 0 && B.length > 0 && B[0].hasOwnProperty("active")) {
      let $ = { ...m, filters: B };
      O($), W(bi(B, D));
    }
  }, [B]), t && de.useEffect(() => {
    st();
  }, [t.data]), de.useEffect(() => {
    var $;
    if (N && m.xAxis && (($ = m.runtime) != null && $.seriesKeys)) {
      const Oe = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Xe = { ...dr, ...Iu };
      let Ve = m.customColors || Xe[Oe], it = m.runtime.seriesKeys.length, nt;
      for (; it > Ve.length; )
        Ve = Ve.concat(Ve);
      Ve = Ve.slice(0, it), nt = () => Zh({
        domain: m.runtime.seriesLabelsAll,
        range: Ve,
        unknown: null
      }), T(nt), k(!1);
    }
    m && N && m.sortData && N.sort(Be);
  }, [m, N]);
  const pt = ($) => {
    if (Z.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      gt();
      return;
    }
    const Oe = [...Z];
    let Xe = $.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Ve) => {
      m.runtime.seriesLabels[Ve] === $.datum && (Xe = Ve);
    }), Oe.indexOf(Xe) !== -1 ? Oe.splice(Oe.indexOf(Xe), 1) : Oe.push(Xe), ce(Oe);
  }, gt = () => {
    try {
      const $ = Le.current;
      if (!$)
        throw new ze("No legend available to set previous focus on.");
      $.focus();
    } catch ($) {
      console.error("COVE:", $.message);
    }
    ce([]);
  }, ut = m.orientation === "horizontal" ? "yAxis" : "xAxis", Rt = ($, Oe = !0) => {
    let Xe = bm(m.runtime[ut].dateParseFormat)($);
    return Xe || (Oe && (m.runtime.editorErrorMessage = `Error parsing date "${$}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, tn = ($) => Xd(m.runtime[ut].dateDisplayFormat)($), Xt = ($) => Xd(m.tooltips.dateDisplayFormat)($);
  function vt($, Oe) {
    const Ve = document.createElement("canvas").getContext("2d");
    if (!Ve) {
      console.error("2d context not found");
      return;
    }
    return Ve.font = Oe || getComputedStyle(document.body).font, Math.ceil(Ve.measureText($).width);
  }
  const Nt = ($, Oe, Xe = !1, Ve, it, nt) => {
    if (isNaN($) || !$)
      return $;
    const Et = $ < 0;
    (Oe === void 0 || !Oe) && (Oe = "left"), Et && ($ = Math.abs($));
    let {
      dataFormat: { commas: _t, abbreviated: Ze, roundTo: Kt, prefix: zt, suffix: Ft, rightRoundTo: mt, bottomRoundTo: Dt, rightPrefix: wt, rightSuffix: Yt, bottomPrefix: Wt, bottomSuffix: dn, bottomAbbreviated: sn }
    } = m;
    String($).indexOf(",") !== -1 && ($ = $.replaceAll(",", ""));
    let nn = $, Zt = {
      useGrouping: !!_t
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Oe === "left" || Oe === void 0) {
      let kn;
      nt !== void 0 ? kn = nt ? Number(nt) : 0 : kn = Kt ? Number(Kt) : 0, Zt = {
        useGrouping: nt ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: kn,
        maximumFractionDigits: kn
      };
    }
    Oe === "right" && (Zt = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: mt ? Number(mt) : 0,
      maximumFractionDigits: mt ? Number(mt) : 0
    });
    const En = () => m.forestPlot.type === "Logarithmic" && !Dt ? 2 : Number(Dt) ? Number(Dt) : 0;
    if (Oe === "bottom" && (Zt = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: En(),
      maximumFractionDigits: En()
    }), $ = yp($), isNaN($))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${nn}. Try reviewing your data and selections in the Data Series section.`, nn;
    if (!m.dataFormat)
      return $;
    if (m.dataCutoff) {
      let kn = yp(m.dataCutoff);
      $ < kn && ($ = kn);
    }
    Oe === "left" && _t && Ze && Xe || Oe === "bottom" && _t && Ze && Xe ? $ = $ : $ = $.toLocaleString("en-US", Zt);
    let un = "";
    return Ze && Oe === "left" && Xe && ($ = Oh(parseFloat($))), sn && Oe === "bottom" && Xe && ($ = Oh(parseFloat($))), Ve && Oe === "left" ? un = Ve + un : zt && Oe === "left" && (un += zt), wt && Oe === "right" && (un += wt), Wt && Oe === "bottom" && (un += Wt), un += $, it && Oe === "left" ? un += it : Ft && Oe === "left" && (un += Ft), Yt && Oe === "right" && (un += Yt), dn && Oe === "bottom" && (un += dn), Et && (un = "-" + un), String(un);
  }, hn = {
    "Paired Bar": /* @__PURE__ */ r.createElement(Vr, null),
    Forecasting: /* @__PURE__ */ r.createElement(Vr, null),
    Bar: /* @__PURE__ */ r.createElement(Vr, null),
    Line: /* @__PURE__ */ r.createElement(Vr, null),
    Combo: /* @__PURE__ */ r.createElement(Vr, null),
    Pie: /* @__PURE__ */ r.createElement(hS, null),
    "Box Plot": /* @__PURE__ */ r.createElement(Vr, null),
    "Area Chart": /* @__PURE__ */ r.createElement(Vr, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(Vr, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(Vr, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(Vr, null)
  }, on = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, Gt = ($, Oe) => {
    if ($ === null || $ === "" || $ === void 0)
      return "";
    if (typeof $ == "string" && $.length > 0 && m.legend.type === "equalnumber")
      return $;
    let Xe = $, Ve;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(it) {
      var nt = m.columns[it];
      nt.name === Oe && (Ve = nt);
    }), Ve === void 0 && (Ve = m.type === "chart" ? m.dataFormat : m.primary, Ve.useCommas = Ve.commas, Ve.roundToPlace = Ve.roundTo ? Ve.roundTo : ""), Ve) {
      let it = !1, nt = 0;
      Number($) && (Ve.roundToPlace >= 0 && (it = Ve.roundToPlace ? Ve.roundToPlace !== "" || Ve.roundToPlace !== null : !1, nt = Ve.roundToPlace ? Number(Ve.roundToPlace) : 0, Ve.hasOwnProperty("roundToPlace") && it && (Xe = Number($).toFixed(nt))), Ve.hasOwnProperty("useCommas") && Ve.useCommas === !0 && (Xe = Number($).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: it ? nt : 0,
        maximumFractionDigits: it ? nt : 5
      }))), Xe = (Ve.prefix || "") + Xe + (Ve.suffix || "");
    }
    return Xe;
  }, yn = () => {
    const $ = (Xe) => {
      Xe && Xe.preventDefault();
      let Ve = { ...m };
      delete Ve.newViz, Ke(Ve);
    }, Oe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: Oe }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement(fs, { className: "btn", style: { margin: "1em auto" }, disabled: on(), onClick: (Xe) => $(Xe) }, "I'm Done")));
  }, ze = () => {
    const $ = {
      position: "absolute",
      background: "white",
      zIndex: "999",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: $ }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, m.runtime.editorErrorMessage)));
  }, xt = ($) => {
    try {
      if (!$)
        throw new ze("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Oe = dr[m.color] || dr.bluegreenreverse;
        return Fh(Oe[3]);
      }
      return Fh();
    } catch (Oe) {
      console.error("COVE: ", Oe);
    }
  }, Ht = ($) => {
    var Oe;
    return Array.isArray($) ? m.visualizationType === "Forecasting" ? $ : (Oe = m == null ? void 0 : m.xAxis) != null && Oe.dataKey ? S.cleanData($, m.xAxis.dataKey) : $ : [];
  }, It = ($) => $;
  let At = /* @__PURE__ */ r.createElement(Yy, null);
  const xn = ($) => {
    if (!(!$ || !$.toLowerCase))
      return $.toLowerCase().replaceAll(/ /g, "-");
  }, Mt = () => {
    var Xe, Ve, it;
    const $ = (ae == null ? void 0 : ae.position) === "bottom" || ["sm", "xs", "xxs"].includes(te), Oe = ["chart-container", "p-relative"];
    return ((Xe = m.legend) == null ? void 0 : Xe.position) === "bottom" && Oe.push("bottom"), (Ve = m.legend) != null && Ve.hide && Oe.push("legend-hidden"), ee && Oe.push(ee), m.barHasBorder || Oe.push("chart-bar--no-border"), (it = m.brush) != null && it.active && (v == null ? void 0 : v.type) === "dashboard" && (!$ || m.legend.hide) && Oe.push("dashboard-brush"), Oe.push(...De), Oe;
  }, ln = () => {
    var Xe, Ve;
    const $ = ["subtext "], Oe = (ae == null ? void 0 : ae.position) === "bottom" || ["sm", "xs", "xxs"].includes(te);
    return m.isResponsiveTicks && $.push("subtext--responsive-ticks "), (Xe = m.brush) != null && Xe.active && !Oe && $.push("subtext--brush-active "), (Ve = m.brush) != null && Ve.active && m.legend.hide && $.push("subtext--brush-active "), $;
  };
  if (!R) {
    const $ = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    At = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(vk, null), /* @__PURE__ */ r.createElement(Ud.Responsive, { isEditor: n }, m.newViz && /* @__PURE__ */ r.createElement(yn, null), m.newViz === void 0 && n && m.runtime && ((An = m.runtime) == null ? void 0 : An.editorErrorMessage) && /* @__PURE__ */ r.createElement(ze, null), !on() && !m.newViz && /* @__PURE__ */ r.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${xn(m.visualizationType)}`, "aria-label": hf(m), tabIndex: 0 }, /* @__PURE__ */ r.createElement(By, { showTitle: m.showTitle, isDashboard: a, title: Ie, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !B && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(rp, { config: m, setConfig: O, setFilteredData: W, filteredData: U, excludedData: D, filterData: bi, dimensions: K }), /* @__PURE__ */ r.createElement(Uy, { skipId: Ge, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, Li(m.introText)), /* @__PURE__ */ r.createElement("div", { className: Mt().join(" ") }, m.visualizationType !== "Spark Line" && m.visualizationType !== "Line" && hn[m.visualizationType], m.visualizationType === "Line" && (et() ? hn.Bar : hn.Line), m.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(rp, { config: m, setConfig: O, setFilteredData: W, filteredData: U, excludedData: D, filterData: bi, dimensions: K }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Li(m.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...we } }, /* @__PURE__ */ r.createElement(Op, null, (Oe) => /* @__PURE__ */ r.createElement(YE, { width: Oe.width, height: Oe.height }))), Ee && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Li(Ee))), m.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(Op, { "aria-hidden": "true" }, (Oe) => /* @__PURE__ */ r.createElement(VS, { runtime: m.runtime, width: Oe.width, height: Oe.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(XE, { ref: Le })), a && m.table && m.table.show && m.table.showDataTableLink ? $ : u && u, Ee && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: ln().join("") }, Li(Ee)), !1, /* @__PURE__ */ r.createElement(kd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(kd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: _e }), m.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(kd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: _e })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ r.createElement(
      Ky,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (Ne = (Sn = m == null ? void 0 : m.data) == null ? void 0 : Sn[0]) == null ? void 0 : Ne.tableData : m.table.customTableConfig ? bi(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (dt = (ct = m == null ? void 0 : m.data) == null ? void 0 : ct[0]) == null ? void 0 : dt.tableData : U || D,
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: Gt,
        displayGeoName: It,
        applyLegendToRow: xt,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: Ie,
        viewport: te,
        tabbingId: Ge,
        colorScale: F
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, Li(m.footnotes)))));
  }
  const jt = {
    brushConfig: be,
    capitalize: ($) => $.charAt(0).toUpperCase() + $.slice(1),
    clean: Ht,
    colorPalettes: dr,
    colorScale: F,
    config: m,
    currentViewport: te,
    dashboardConfig: v,
    debugSvg: i,
    dimensions: K,
    dynamicLegendItems: J,
    excludedData: D,
    formatDate: tn,
    formatNumber: Nt,
    formatTooltipsDate: Xt,
    getTextWidth: vt,
    getXAxisData: ($) => Cn(m.runtime.xAxis) ? Rt($[m.runtime.originalXAxis.dataKey]).getTime() : $[m.runtime.originalXAxis.dataKey],
    getYAxisData: ($, Oe) => $[Oe],
    handleChartAriaLabels: hf,
    handleLineType: iy,
    highlight: pt,
    highlightReset: gt,
    imageId: _e,
    isDashboard: a,
    isDebug: i,
    isEditor: n,
    isNumber: Mu,
    legend: ae,
    lineOptions: Ek,
    loading: R,
    missingRequiredSections: on,
    outerContainerRef: ht,
    parseDate: Rt,
    rawData: N ?? {},
    seriesHighlight: Z,
    setBrushConfig: ye,
    setConfig: O,
    setDynamicLegendItems: ue,
    setEditing: f,
    setFilteredData: W,
    setParentConfig: l,
    setSeriesHighlight: ce,
    setSharedFilter: h,
    setSharedFilterValue: y,
    tableData: U || D,
    // do not clean table data
    transformedData: Ht(U || D),
    // do this right before passing to components
    twoColorPalette: Iu,
    unfilteredData: N,
    updateConfig: Ke
  };
  return /* @__PURE__ */ r.createElement(Ct.Provider, { value: jt }, /* @__PURE__ */ r.createElement(Ud.VisualizationWrapper, { config: m, isEditor: n, currentViewport: te, ref: ht, imageId: _e, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, At));
}
export {
  ew as C
};
