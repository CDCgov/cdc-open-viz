import { r as de, R as r } from "./storybook-index-45401197.es.js";
import { v as Jf, a as Py, i as ep, b as tp, g as Ry } from "./storybook-isSolr-cb863e7a.es.js";
import { _ as Ur, P as Dy, D as Ny, C as Oy, A as _y, b as bi, F as np, g as Fy } from "./storybook-Filters-604223ce.es.js";
import { L as jd, a as My } from "./storybook-coveUpdateWorker-785760a1.es.js";
import { B as fs } from "./storybook-Button-d74e310e.es.js";
import { p as zy, P as Oe } from "./storybook-index-43433e35.es.js";
import { d as Iy } from "./storybook-debounce-cc216a80.es.js";
import { a as $y } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as rp } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Li, T as By } from "./storybook-index-e5bf02db.es.js";
import { _ as pn } from "./storybook-extends-70f3d2a3.es.js";
import { p as ap, e as Si, s as Br, c as Vt, h as ip, a as hc, f as qn, t as Ru, i as $o, m as Sd, j as op, k as Gn, l as lp, n as Hy, o as Wy, G as Vy, q as zu, r as dr, u as Iu, g as jo, T as kt, b as $u, I as sp } from "./storybook-InputToggle-375413f7.es.js";
import { t as jy, a as Cn, f as Tf, L as up, b as Xl, g as Ei, S as Uy, M as Ed, D as Ky } from "./storybook-DataTable-c925ca2f.es.js";
import { E as Or, L as Yy } from "./storybook-Loading-f180d060.es.js";
import { b as mc, t as Xy, e as Mh, f as cp, g as Gy, h as qy, j as Zy, k as dp, m as Qy, G as at, c as Ln } from "./storybook-Group-e6c0d0df.es.js";
import { s as Jl, t as zh, a as Ih, b as $h, d as xs, B as kr, c as Kn, C as Jy } from "./storybook-Circle-c4db6c75.es.js";
import { R as eg } from "./storybook-index-633d712d.es.js";
import { e as ps, a as Rn, b as Dn, c as Nn, d as On, A as Pi } from "./storybook-index-66852bf6.es.js";
import { _ as ar } from "./storybook-lodash-c15d8e1c.es.js";
import { i as Bh, m as kd, c as Hh, j as fu, k as pu, l as hu, n as fp, o as tg, p as pp, b as Wh, d as Vh } from "./storybook-year-bedc547d.es.js";
import { a as dt } from "./storybook-Icon-736fb775.es.js";
import { C as ng, V as rg, a as hp } from "./storybook-footnoteSymbols-ee77e3f4.es.js";
import { S as Lt, T as Je, C as lt, D as ag } from "./storybook-DataTableEditor-6a05ff32.es.js";
import { T as ve } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ma } from "./storybook-InputSelect-20478396.es.js";
import { C as jh } from "./storybook-icon-check-50959323.es.js";
import { A as mu } from "./storybook-Accordion-798fc615.es.js";
import { u as ig, p as og, s as lg, a as sg } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as mp } from "./storybook-numberFromString-24623c03.es.js";
import { D as ug } from "./storybook-DataTransform-e292f51b.es.js";
import { c as yp } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Uh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function gp(e) {
  let t = e, n = e;
  e.length === 1 && (t = (f, d) => e(f) - d, n = cg(e));
  function i(f, d, c, h) {
    for (c == null && (c = 0), h == null && (h = f.length); c < h; ) {
      const y = c + h >>> 1;
      n(f[y], d) < 0 ? c = y + 1 : h = y;
    }
    return c;
  }
  function a(f, d, c, h) {
    for (c == null && (c = 0), h == null && (h = f.length); c < h; ) {
      const y = c + h >>> 1;
      n(f[y], d) > 0 ? h = y : c = y + 1;
    }
    return c;
  }
  function l(f, d, c, h) {
    c == null && (c = 0), h == null && (h = f.length);
    const y = i(f, d, c, h - 1);
    return y > c && t(f[y - 1], d) > -t(f[y], d) ? y - 1 : y;
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
      const c = i - n + 1, h = t - n + 1, y = Math.log(c), v = 0.5 * Math.exp(2 * y / 3), S = 0.5 * Math.sqrt(y * v * (c - v) / c) * (h - c / 2 < 0 ? -1 : 1), R = Math.max(n, Math.floor(t - h * v / c + S)), k = Math.min(i, Math.floor(t + (c - h) * v / c + S));
      Kh(e, t, R, k, a);
    }
    const l = e[t];
    let f = n, d = i;
    for (Gl(e, n, t), a(e[i], l) > 0 && Gl(e, n, i); f < d; ) {
      for (Gl(e, f, d), ++f, --d; a(e[f], l) < 0; )
        ++f;
      for (; a(e[d], l) > 0; )
        --d;
    }
    a(e[n], l) === 0 ? Gl(e, n, d) : (++d, Gl(e, d, i)), d <= t && (n = d + 1), t <= d && (i = d - 1);
  }
  return e;
}
function Gl(e, t, n) {
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
class vp extends Map {
  constructor(t, n = xg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, a] of t)
        this.set(i, a);
  }
  get(t) {
    return super.get(xp(this, t));
  }
  has(t) {
    return super.has(xp(this, t));
  }
  set(t, n) {
    return super.set(gg(this, t), n);
  }
  delete(t) {
    return super.delete(vg(this, t));
  }
}
function xp({ _intern: e, _key: t }, n) {
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
const bp = Symbol("implicit");
function wf() {
  var e = new vp(), t = [], n = [], i = bp;
  function a(l) {
    let f = e.get(l);
    if (f === void 0) {
      if (i !== bp)
        return i;
      e.set(l, f = t.push(l) - 1);
    }
    return n[f % n.length];
  }
  return a.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new vp();
    for (const f of l)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(l) {
    return arguments.length ? (n = Array.from(l), a) : n.slice();
  }, a.unknown = function(l) {
    return arguments.length ? (i = l, a) : i;
  }, a.copy = function() {
    return wf(t, n).unknown(i);
  }, mc.apply(a, arguments), a;
}
function Cf() {
  var e = wf().unknown(void 0), t = e.domain, n = e.range, i = 0, a = 1, l, f, d = !1, c = 0, h = 0, y = 0.5;
  delete e.unknown;
  function v() {
    var S = t().length, R = a < i, k = R ? a : i, F = R ? i : a;
    l = (F - k) / Math.max(1, S - c + h * 2), d && (l = Math.floor(l)), k += (F - k - l * (S - c)) * y, f = l * (1 - c), d && (k = Math.round(k), f = Math.round(f));
    var w = bg(S).map(function(m) {
      return k + l * m;
    });
    return n(R ? w.reverse() : w);
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
    return arguments.length ? (c = Math.min(1, h = +S), v()) : c;
  }, e.paddingInner = function(S) {
    return arguments.length ? (c = Math.min(1, S), v()) : c;
  }, e.paddingOuter = function(S) {
    return arguments.length ? (h = +S, v()) : h;
  }, e.align = function(S) {
    return arguments.length ? (y = Math.max(0, Math.min(1, S)), v()) : y;
  }, e.copy = function() {
    return Cf(t(), [i, a]).round(d).paddingInner(c).paddingOuter(h).align(y);
  }, mc.apply(v(), arguments);
}
function Yh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Yh(t());
  }, e;
}
function Sg() {
  return Yh(Cf.apply(null, arguments).paddingInner(1));
}
function Xh(e, t) {
  e = e.slice();
  var n = 0, i = e.length - 1, a = e[n], l = e[i], f;
  return l < a && (f = n, n = i, i = f, f = a, a = l, l = f), e[n] = t.floor(a), e[i] = t.ceil(l), e;
}
function Sp(e) {
  return Math.log(e);
}
function Ep(e) {
  return Math.exp(e);
}
function Eg(e) {
  return -Math.log(-e);
}
function kg(e) {
  return -Math.exp(-e);
}
function Tg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function wg(e) {
  return e === 10 ? Tg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Cg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function kp(e) {
  return (t, n) => -e(-t, n);
}
function Ag(e) {
  const t = e(Sp, Ep), n = t.domain;
  let i = 10, a, l;
  function f() {
    return a = Cg(i), l = wg(i), n()[0] < 0 ? (a = kp(a), l = kp(l), e(Eg, kg)) : e(Sp, Ep), t;
  }
  return t.base = function(d) {
    return arguments.length ? (i = +d, f()) : i;
  }, t.domain = function(d) {
    return arguments.length ? (n(d), f()) : n();
  }, t.ticks = (d) => {
    const c = n();
    let h = c[0], y = c[c.length - 1];
    const v = y < h;
    v && ([h, y] = [y, h]);
    let S = a(h), R = a(y), k, F;
    const w = d == null ? 10 : +d;
    let m = [];
    if (!(i % 1) && R - S < w) {
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
      m.length * 2 < w && (m = cp(h, y, w));
    } else
      m = cp(S, R, Math.min(R - S, w)).map(l);
    return v ? m.reverse() : m;
  }, t.tickFormat = (d, c) => {
    if (d == null && (d = 10), c == null && (c = i === 10 ? "s" : ","), typeof c != "function" && (!(i % 1) && (c = Gy(c)).precision == null && (c.trim = !0), c = qy(c)), d === 1 / 0)
      return c;
    const h = Math.max(1, i * d / t.ticks().length);
    return (y) => {
      let v = y / l(Math.round(a(y)));
      return v * i < i - 0.5 && (v *= i), v <= h ? c(y) : "";
    };
  }, t.nice = () => n(Xh(n(), {
    floor: (d) => l(Math.floor(a(d))),
    ceil: (d) => l(Math.ceil(a(d)))
  })), t;
}
function Gh() {
  const e = Ag(Xy()).domain([1, 10]);
  return e.copy = () => Mh(e, Gh()).base(e.base()), mc.apply(e, arguments), e;
}
const Bu = Bh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Bu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Bh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Bu);
Bu.range;
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
    [i, 1, fp],
    [i, 2, 2 * fp],
    [n, 1, tg],
    [t, 1, pp],
    [t, 3, 3 * pp],
    [e, 1, kd]
  ];
  function d(h, y, v) {
    const S = y < h;
    S && ([h, y] = [y, h]);
    const R = v && typeof v.range == "function" ? v : c(h, y, v), k = R ? R.range(h, +y + 1) : [];
    return S ? k.reverse() : k;
  }
  function c(h, y, v) {
    const S = Math.abs(y - h) / v, R = Zy(([, , w]) => w).right(f, S);
    if (R === f.length)
      return e.every(dp(h / kd, y / kd, v));
    if (R === 0)
      return Bu.every(Math.max(dp(h, y, v), 1));
    const [k, F] = f[S / f[R - 1][2] < f[R][2] / S ? R - 1 : R];
    return k.every(F);
  }
  return [d, c];
}
const [Pg, Rg] = Lg(Hh, $h, Vh, Wh, Ih, zh);
function Dg(e) {
  return new Date(e);
}
function Ng(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function qh(e, t, n, i, a, l, f, d, c, h) {
  var y = Qy(), v = y.invert, S = y.domain, R = h(".%L"), k = h(":%S"), F = h("%I:%M"), w = h("%I %p"), m = h("%a %d"), _ = h("%b %d"), D = h("%B"), P = h("%Y");
  function O(L) {
    return (c(L) < L ? R : d(L) < L ? k : f(L) < L ? F : l(L) < L ? w : i(L) < L ? a(L) < L ? m : _ : n(L) < L ? D : P)(L);
  }
  return y.invert = function(L) {
    return new Date(v(L));
  }, y.domain = function(L) {
    return arguments.length ? S(Array.from(L, Ng)) : S().map(Dg);
  }, y.ticks = function(L) {
    var U = S();
    return e(U[0], U[U.length - 1], L ?? 10);
  }, y.tickFormat = function(L, U) {
    return U == null ? O : h(U);
  }, y.nice = function(L) {
    var U = S();
    return (!L || typeof L.range != "function") && (L = t(U[0], U[U.length - 1], L ?? 10)), L ? S(Xh(U, L)) : y;
  }, y.copy = function() {
    return Mh(y, qh(e, t, n, i, a, l, f, d, c, h));
  }, y;
}
function Og() {
  return mc.apply(qh(Pg, Rg, Hh, $h, Vh, Wh, Ih, zh, Jl, jy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var _g = xs("domain", "range", "reverse", "align", "padding", "round");
function Ud(e) {
  return _g(Cf(), e);
}
var Fg = xs("domain", "range", "reverse", "align", "padding", "round");
function Bo(e) {
  return Fg(Sg(), e);
}
var Mg = xs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function zg(e) {
  return Mg(Og(), e);
}
var Ig = xs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Hu(e) {
  return Ig(Gh(), e);
}
var $g = xs("domain", "range", "reverse", "unknown");
function Zh(e) {
  return $g(wf(), e);
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
var Di = function(e) {
  return Object.freeze(e);
}, Qh = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Di(this);
  }
  return e;
}(), Jh = function() {
  function e(t, n, i, a) {
    return this.x = t, this.y = n, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Di(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, i = t.y, a = t.top, l = t.right, f = t.bottom, d = t.left, c = t.width, h = t.height;
    return { x: n, y: i, top: a, right: l, bottom: f, left: d, width: c, height: h };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Af = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, em = function(e) {
  if (Af(e)) {
    var t = e.getBBox(), n = t.width, i = t.height;
    return !n && !i;
  }
  var a = e, l = a.offsetWidth, f = a.offsetHeight;
  return !(l || f || e.getClientRects().length);
}, wp = function(e) {
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
}, ns = typeof window < "u" ? window : {}, yu = /* @__PURE__ */ new WeakMap(), Cp = /auto|scroll/, Yg = /^tb|vertical/, Xg = /msie|trident/i.test(ns.navigator && ns.navigator.userAgent), Hr = function(e) {
  return parseFloat(e || "0");
}, Wo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Qh((n ? t : e) || 0, (n ? e : t) || 0);
}, Ap = Di({
  devicePixelContentBoxSize: Wo(),
  borderBoxSize: Wo(),
  contentBoxSize: Wo(),
  contentRect: new Jh(0, 0, 0, 0)
}), tm = function(e, t) {
  if (t === void 0 && (t = !1), yu.has(e) && !t)
    return yu.get(e);
  if (em(e))
    return yu.set(e, Ap), Ap;
  var n = getComputedStyle(e), i = Af(e) && e.ownerSVGElement && e.getBBox(), a = !Xg && n.boxSizing === "border-box", l = Yg.test(n.writingMode || ""), f = !i && Cp.test(n.overflowY || ""), d = !i && Cp.test(n.overflowX || ""), c = i ? 0 : Hr(n.paddingTop), h = i ? 0 : Hr(n.paddingRight), y = i ? 0 : Hr(n.paddingBottom), v = i ? 0 : Hr(n.paddingLeft), S = i ? 0 : Hr(n.borderTopWidth), R = i ? 0 : Hr(n.borderRightWidth), k = i ? 0 : Hr(n.borderBottomWidth), F = i ? 0 : Hr(n.borderLeftWidth), w = v + h, m = c + y, _ = F + R, D = S + k, P = d ? e.offsetHeight - D - e.clientHeight : 0, O = f ? e.offsetWidth - _ - e.clientWidth : 0, L = a ? w + _ : 0, U = a ? m + D : 0, V = i ? i.width : Hr(n.width) - L - O, q = i ? i.height : Hr(n.height) - U - P, ce = V + w + O + _, ee = q + m + P + D, j = Di({
    devicePixelContentBoxSize: Wo(Math.round(V * devicePixelRatio), Math.round(q * devicePixelRatio), l),
    borderBoxSize: Wo(ce, ee, l),
    contentBoxSize: Wo(V, q, l),
    contentRect: new Jh(v, c, V, q)
  });
  return yu.set(e, j), j;
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
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Di([n.borderBoxSize]), this.contentBoxSize = Di([n.contentBoxSize]), this.devicePixelContentBoxSize = Di([n.devicePixelContentBoxSize]);
  }
  return e;
}(), am = function(e) {
  if (em(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Gg = function() {
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
}, Lp = function(e) {
  Ri.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (am(a.target) > e ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, qg = function() {
  var e = 0;
  for (Lp(e); Vg(); )
    e = Gg(), Lp(e);
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
}, Du = 0, ev = function() {
  return !!Du;
}, tv = 250, nv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Pp = [
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
], Rp = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, wd = !1, rv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = tv), !wd) {
      wd = !0;
      var i = Rp(t);
      Jg(function() {
        var a = !1;
        try {
          a = qg();
        } finally {
          if (wd = !1, t = i - Rp(), !ev())
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
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Pp.forEach(function(n) {
      return ns.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Pp.forEach(function(n) {
      return ns.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Kd = new rv(), Dp = function(e) {
  !Du && e > 0 && Kd.start(), Du += e, !Du && Kd.stop();
}, av = function(e) {
  return !Af(e) && !Kg(e) && getComputedStyle(e).display === "inline";
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
}(), gu = /* @__PURE__ */ new WeakMap(), Np = function(e, t) {
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
    Np(a.observationTargets, n) < 0 && (l && Ri.push(a), a.observationTargets.push(new iv(n, i && i.box)), Dp(1), Kd.schedule());
  }, e.unobserve = function(t, n) {
    var i = gu.get(t), a = Np(i.observationTargets, n), l = i.observationTargets.length === 1;
    a >= 0 && (l && Ri.splice(Ri.indexOf(i), 1), i.observationTargets.splice(a, 1), Dp(-1));
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
    if (!wp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    vu.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!wp(t))
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
function Wu() {
  return Wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Wu.apply(this, arguments);
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
  var t = e.className, n = e.children, i = e.debounceTime, a = i === void 0 ? 300 : i, l = e.ignoreDimensions, f = l === void 0 ? mv : l, d = e.parentSizeStyles, c = d === void 0 ? {
    width: "100%",
    height: "100%"
  } : d, h = e.enableDebounceLeadingCall, y = h === void 0 ? !0 : h, v = hv(e, fv), S = (0, Mo.useRef)(null), R = (0, Mo.useRef)(0), k = (0, Mo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), F = k[0], w = k[1], m = (0, Mo.useMemo)(function() {
    var _ = Array.isArray(f) ? f : [f];
    return (0, cv.default)(function(D) {
      w(function(P) {
        var O = Object.keys(P), L = O.filter(function(V) {
          return P[V] !== D[V];
        }), U = L.every(function(V) {
          return _.includes(V);
        });
        return U ? P : D;
      });
    }, a, {
      leading: y
    });
  }, [a, y, f]);
  return (0, Mo.useEffect)(function() {
    var _ = new dv.ResizeObserver(function(D) {
      D === void 0 && (D = []), D.forEach(function(P) {
        var O = P.contentRect, L = O.left, U = O.top, V = O.width, q = O.height;
        R.current = window.requestAnimationFrame(function() {
          m({
            width: V,
            height: q,
            top: U,
            left: L
          });
        });
      });
    });
    return S.current && _.observe(S.current), function() {
      window.cancelAnimationFrame(R.current), _.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Mo.default.createElement("div", Wu({
    style: c,
    ref: S,
    className: t
  }, v), n(Wu({}, F, {
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
var Cd = /* @__PURE__ */ new Date(), Ad = /* @__PURE__ */ new Date();
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
    var c = [], h;
    if (l = a.ceil(l), d = d == null ? 1 : Math.floor(d), !(l < f) || !(d > 0))
      return c;
    do
      c.push(h = /* @__PURE__ */ new Date(+l)), t(l, d), e(l);
    while (h < l && l < f);
    return c;
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
    return Cd.setTime(+l), Ad.setTime(+f), e(Cd), e(Ad), Math.floor(n(Cd, Ad));
  }, a.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? a.filter(i ? function(f) {
      return i(f) % l === 0;
    } : function(f) {
      return a.count(0, f) % l === 0;
    }) : a;
  }), a;
}
const yv = 1e3, Lf = yv * 60, gv = Lf * 60, Pf = gv * 24, um = Pf * 7;
var cm = ua(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Lf) / Pf,
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
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Lf) / um;
  });
}
var fm = Mi(0), Vu = Mi(1), vv = Mi(2), xv = Mi(3), Uo = Mi(4), bv = Mi(5), Sv = Mi(6);
fm.range;
Vu.range;
vv.range;
xv.range;
Uo.range;
bv.range;
Sv.range;
var Rf = ua(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Rf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ua(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const ms = Rf;
Rf.range;
var pm = ua(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Pf;
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
var mm = zi(0), ju = zi(1), Ev = zi(2), kv = zi(3), Ko = zi(4), Tv = zi(5), wv = zi(6);
mm.range;
ju.range;
Ev.range;
kv.range;
Ko.range;
Tv.range;
wv.range;
var Df = ua(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Df.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ua(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ys = Df;
Df.range;
function Ld(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Pd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ql(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Cv(e) {
  var t = e.dateTime, n = e.date, i = e.time, a = e.periods, l = e.days, f = e.shortDays, d = e.months, c = e.shortMonths, h = Zl(a), y = Ql(a), v = Zl(l), S = Ql(l), R = Zl(f), k = Ql(f), F = Zl(d), w = Ql(d), m = Zl(c), _ = Ql(c), D = {
    a: ae,
    A: se,
    b: Q,
    B: K,
    c: null,
    d: $p,
    e: $p,
    f: Gv,
    g: ix,
    G: lx,
    H: Kv,
    I: Yv,
    j: Xv,
    L: ym,
    m: qv,
    M: Zv,
    p: ne,
    q: ue,
    Q: Wp,
    s: Vp,
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
    "%": Hp
  }, P = {
    a: ze,
    A: be,
    b: ye,
    B: Pe,
    c: null,
    d: Bp,
    e: Bp,
    f: fx,
    g: Ex,
    G: Tx,
    H: ux,
    I: cx,
    j: dx,
    L: vm,
    m: px,
    M: hx,
    p: oe,
    q: Ie,
    Q: Wp,
    s: Vp,
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
    Z: wx,
    "%": Hp
  }, O = {
    a: ce,
    A: ee,
    b: j,
    B: Y,
    c: W,
    d: zp,
    e: zp,
    f: Wv,
    g: Mp,
    G: Fp,
    H: Ip,
    I: Ip,
    j: Iv,
    L: Hv,
    m: zv,
    M: $v,
    p: q,
    q: Mv,
    Q: jv,
    s: Uv,
    S: Bv,
    u: Dv,
    U: Nv,
    V: Ov,
    w: Rv,
    W: _v,
    x: B,
    X: ie,
    y: Mp,
    Y: Fp,
    Z: Fv,
    "%": Vv
  };
  D.x = L(n, D), D.X = L(i, D), D.c = L(t, D), P.x = L(n, P), P.X = L(i, P), P.c = L(t, P);
  function L(Ee, he) {
    return function(Te) {
      var J = [], Me = -1, we = 0, Xe = Ee.length, Ze, et, Ue;
      for (Te instanceof Date || (Te = /* @__PURE__ */ new Date(+Te)); ++Me < Xe; )
        Ee.charCodeAt(Me) === 37 && (J.push(Ee.slice(we, Me)), (et = _p[Ze = Ee.charAt(++Me)]) != null ? Ze = Ee.charAt(++Me) : et = Ze === "e" ? " " : "0", (Ue = he[Ze]) && (Ze = Ue(Te, et)), J.push(Ze), we = Me + 1);
      return J.push(Ee.slice(we, Me)), J.join("");
    };
  }
  function U(Ee, he) {
    return function(Te) {
      var J = ql(1900, void 0, 1), Me = V(J, Ee, Te += "", 0), we, Xe;
      if (Me != Te.length)
        return null;
      if ("Q" in J)
        return new Date(J.Q);
      if ("s" in J)
        return new Date(J.s * 1e3 + ("L" in J ? J.L : 0));
      if (he && !("Z" in J) && (J.Z = 0), "p" in J && (J.H = J.H % 12 + J.p * 12), J.m === void 0 && (J.m = "q" in J ? J.q : 0), "V" in J) {
        if (J.V < 1 || J.V > 53)
          return null;
        "w" in J || (J.w = 1), "Z" in J ? (we = Pd(ql(J.y, 0, 1)), Xe = we.getUTCDay(), we = Xe > 4 || Xe === 0 ? ju.ceil(we) : ju(we), we = hm.offset(we, (J.V - 1) * 7), J.y = we.getUTCFullYear(), J.m = we.getUTCMonth(), J.d = we.getUTCDate() + (J.w + 6) % 7) : (we = Ld(ql(J.y, 0, 1)), Xe = we.getDay(), we = Xe > 4 || Xe === 0 ? Vu.ceil(we) : Vu(we), we = dm.offset(we, (J.V - 1) * 7), J.y = we.getFullYear(), J.m = we.getMonth(), J.d = we.getDate() + (J.w + 6) % 7);
      } else
        ("W" in J || "U" in J) && ("w" in J || (J.w = "u" in J ? J.u % 7 : "W" in J ? 1 : 0), Xe = "Z" in J ? Pd(ql(J.y, 0, 1)).getUTCDay() : Ld(ql(J.y, 0, 1)).getDay(), J.m = 0, J.d = "W" in J ? (J.w + 6) % 7 + J.W * 7 - (Xe + 5) % 7 : J.w + J.U * 7 - (Xe + 6) % 7);
      return "Z" in J ? (J.H += J.Z / 100 | 0, J.M += J.Z % 100, Pd(J)) : Ld(J);
    };
  }
  function V(Ee, he, Te, J) {
    for (var Me = 0, we = he.length, Xe = Te.length, Ze, et; Me < we; ) {
      if (J >= Xe)
        return -1;
      if (Ze = he.charCodeAt(Me++), Ze === 37) {
        if (Ze = he.charAt(Me++), et = O[Ze in _p ? he.charAt(Me++) : Ze], !et || (J = et(Ee, Te, J)) < 0)
          return -1;
      } else if (Ze != Te.charCodeAt(J++))
        return -1;
    }
    return J;
  }
  function q(Ee, he, Te) {
    var J = h.exec(he.slice(Te));
    return J ? (Ee.p = y.get(J[0].toLowerCase()), Te + J[0].length) : -1;
  }
  function ce(Ee, he, Te) {
    var J = R.exec(he.slice(Te));
    return J ? (Ee.w = k.get(J[0].toLowerCase()), Te + J[0].length) : -1;
  }
  function ee(Ee, he, Te) {
    var J = v.exec(he.slice(Te));
    return J ? (Ee.w = S.get(J[0].toLowerCase()), Te + J[0].length) : -1;
  }
  function j(Ee, he, Te) {
    var J = m.exec(he.slice(Te));
    return J ? (Ee.m = _.get(J[0].toLowerCase()), Te + J[0].length) : -1;
  }
  function Y(Ee, he, Te) {
    var J = F.exec(he.slice(Te));
    return J ? (Ee.m = w.get(J[0].toLowerCase()), Te + J[0].length) : -1;
  }
  function W(Ee, he, Te) {
    return V(Ee, t, he, Te);
  }
  function B(Ee, he, Te) {
    return V(Ee, n, he, Te);
  }
  function ie(Ee, he, Te) {
    return V(Ee, i, he, Te);
  }
  function ae(Ee) {
    return f[Ee.getDay()];
  }
  function se(Ee) {
    return l[Ee.getDay()];
  }
  function Q(Ee) {
    return c[Ee.getMonth()];
  }
  function K(Ee) {
    return d[Ee.getMonth()];
  }
  function ne(Ee) {
    return a[+(Ee.getHours() >= 12)];
  }
  function ue(Ee) {
    return 1 + ~~(Ee.getMonth() / 3);
  }
  function ze(Ee) {
    return f[Ee.getUTCDay()];
  }
  function be(Ee) {
    return l[Ee.getUTCDay()];
  }
  function ye(Ee) {
    return c[Ee.getUTCMonth()];
  }
  function Pe(Ee) {
    return d[Ee.getUTCMonth()];
  }
  function oe(Ee) {
    return a[+(Ee.getUTCHours() >= 12)];
  }
  function Ie(Ee) {
    return 1 + ~~(Ee.getUTCMonth() / 3);
  }
  return {
    format: function(Ee) {
      var he = L(Ee += "", D);
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
var _p = { "-": "", _: " ", 0: "0" }, Bn = /^\s*\d+/, Av = /^%/, Lv = /[\\^$*+?|[\]().{}]/g;
function Gt(e, t, n) {
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
function Dv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 1));
  return i ? (e.u = +i[0], n + i[0].length) : -1;
}
function Nv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.U = +i[0], n + i[0].length) : -1;
}
function Ov(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.V = +i[0], n + i[0].length) : -1;
}
function _v(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.W = +i[0], n + i[0].length) : -1;
}
function Fp(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 4));
  return i ? (e.y = +i[0], n + i[0].length) : -1;
}
function Mp(e, t, n) {
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
function zp(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 2));
  return i ? (e.d = +i[0], n + i[0].length) : -1;
}
function Iv(e, t, n) {
  var i = Bn.exec(t.slice(n, n + 3));
  return i ? (e.m = 0, e.d = +i[0], n + i[0].length) : -1;
}
function Ip(e, t, n) {
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
function $p(e, t) {
  return Gt(e.getDate(), t, 2);
}
function Kv(e, t) {
  return Gt(e.getHours(), t, 2);
}
function Yv(e, t) {
  return Gt(e.getHours() % 12 || 12, t, 2);
}
function Xv(e, t) {
  return Gt(1 + dm.count(ms(e), e), t, 3);
}
function ym(e, t) {
  return Gt(e.getMilliseconds(), t, 3);
}
function Gv(e, t) {
  return ym(e, t) + "000";
}
function qv(e, t) {
  return Gt(e.getMonth() + 1, t, 2);
}
function Zv(e, t) {
  return Gt(e.getMinutes(), t, 2);
}
function Qv(e, t) {
  return Gt(e.getSeconds(), t, 2);
}
function Jv(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ex(e, t) {
  return Gt(fm.count(ms(e) - 1, e), t, 2);
}
function gm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Uo(e) : Uo.ceil(e);
}
function tx(e, t) {
  return e = gm(e), Gt(Uo.count(ms(e), e) + (ms(e).getDay() === 4), t, 2);
}
function nx(e) {
  return e.getDay();
}
function rx(e, t) {
  return Gt(Vu.count(ms(e) - 1, e), t, 2);
}
function ax(e, t) {
  return Gt(e.getFullYear() % 100, t, 2);
}
function ix(e, t) {
  return e = gm(e), Gt(e.getFullYear() % 100, t, 2);
}
function ox(e, t) {
  return Gt(e.getFullYear() % 1e4, t, 4);
}
function lx(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Uo(e) : Uo.ceil(e), Gt(e.getFullYear() % 1e4, t, 4);
}
function sx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Gt(t / 60 | 0, "0", 2) + Gt(t % 60, "0", 2);
}
function Bp(e, t) {
  return Gt(e.getUTCDate(), t, 2);
}
function ux(e, t) {
  return Gt(e.getUTCHours(), t, 2);
}
function cx(e, t) {
  return Gt(e.getUTCHours() % 12 || 12, t, 2);
}
function dx(e, t) {
  return Gt(1 + hm.count(ys(e), e), t, 3);
}
function vm(e, t) {
  return Gt(e.getUTCMilliseconds(), t, 3);
}
function fx(e, t) {
  return vm(e, t) + "000";
}
function px(e, t) {
  return Gt(e.getUTCMonth() + 1, t, 2);
}
function hx(e, t) {
  return Gt(e.getUTCMinutes(), t, 2);
}
function mx(e, t) {
  return Gt(e.getUTCSeconds(), t, 2);
}
function yx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gx(e, t) {
  return Gt(mm.count(ys(e) - 1, e), t, 2);
}
function xm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ko(e) : Ko.ceil(e);
}
function vx(e, t) {
  return e = xm(e), Gt(Ko.count(ys(e), e) + (ys(e).getUTCDay() === 4), t, 2);
}
function xx(e) {
  return e.getUTCDay();
}
function bx(e, t) {
  return Gt(ju.count(ys(e) - 1, e), t, 2);
}
function Sx(e, t) {
  return Gt(e.getUTCFullYear() % 100, t, 2);
}
function Ex(e, t) {
  return e = xm(e), Gt(e.getUTCFullYear() % 100, t, 2);
}
function kx(e, t) {
  return Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function Tx(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ko(e) : Ko.ceil(e), Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function wx() {
  return "+0000";
}
function Hp() {
  return "%";
}
function Wp(e) {
  return +e;
}
function Vp(e) {
  return Math.floor(+e / 1e3);
}
var zo, Yd, bm;
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
  return zo = Cv(e), Yd = zo.format, bm = zo.parse, zo.utcFormat, zo.utcParse, zo;
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
function Rd(e) {
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
class Dr {
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
class Xd extends Dr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Dr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Dr && t.removeChild(this));
  }
}
class Em extends Dr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Dr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Dr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const i in this.payload) {
      const a = this.payload[i];
      t && !(a instanceof Dr) || (n[i] = a instanceof Dr ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Nf;
function Rx(e, t) {
  Nf = {
    fn: e,
    transform: t
  };
}
let km;
function Dx(e) {
  km = e;
}
let Tm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Uu;
function Nx(e) {
  Uu = e;
}
let wm = () => Date.now(), Ox = (e) => e.current, Cm;
function _x(e) {
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
  const a = Sm(), l = de.useRef(!0), f = de.useRef(null), d = de.useRef(null), c = de.useCallback((S) => {
    const R = f.current, k = () => {
      let F = !1;
      d.current && (F = Nf.fn(d.current, f.current.getAnimatedValue())), (!d.current || F === !1) && a();
    };
    f.current = new Fx(S, k), R && R.detach();
  }, []);
  de.useEffect(() => () => {
    l.current = !1, f.current && f.current.detach();
  }, []), de.useImperativeHandle(i, () => Ox(d)), c(n);
  const h = f.current.getValue();
  h.scrollTop, h.scrollLeft;
  const y = Ur(h, ["scrollTop", "scrollLeft"]), v = Mx(e) ? void 0 : (S) => d.current = Px(S, i);
  return r.createElement(e, pn({}, y, {
    ref: v
  }));
});
let rs = !1;
const Ni = /* @__PURE__ */ new Set(), Am = () => {
  if (!rs)
    return !1;
  let e = wm();
  for (let t of Ni) {
    let n = !1;
    for (let i = 0; i < t.configs.length; i++) {
      let a = t.configs[i], l, f;
      for (let d = 0; d < a.animatedValues.length; d++) {
        let c = a.animatedValues[d];
        if (c.done)
          continue;
        let h = a.fromValues[d], y = a.toValues[d], v = c.lastPosition, S = y instanceof Dr, R = Array.isArray(a.initialVelocity) ? a.initialVelocity[d] : a.initialVelocity;
        if (S && (y = y.getValue()), a.immediate) {
          c.setValue(y), c.done = !0;
          continue;
        }
        if (typeof h == "string" || typeof y == "string") {
          c.setValue(y), c.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          v = h + a.easing((e - c.startTime) / a.duration) * (y - h), l = e >= c.startTime + a.duration;
        else if (a.decay)
          v = h + R / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), l = Math.abs(c.lastPosition - v) < 0.1, l && (y = v);
        else {
          f = c.lastTime !== void 0 ? c.lastTime : e, R = c.lastVelocity !== void 0 ? c.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let k = Math.floor(e - f);
          for (let _ = 0; _ < k; ++_) {
            let D = -a.tension * (v - y), P = -a.friction * R, O = (D + P) / a.mass;
            R = R + O * 1 / 1e3, v = v + R * 1 / 1e3;
          }
          let F = a.clamp && a.tension !== 0 ? h < y ? v > y : v < y : !1, w = Math.abs(R) <= a.precision, m = a.tension !== 0 ? Math.abs(y - v) <= a.precision : !0;
          l = F || w && m, c.lastVelocity = R, c.lastTime = e;
        }
        S && !a.toValues[d].done && (l = !1), l ? (c.value !== y && (v = y), c.done = !0) : n = !0, c.setValue(v), c.lastPosition = v;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (Ni.delete(t), t.stop(!0));
  }
  return Ni.size ? Tm(Am) : rs = !1, rs;
}, Ix = (e) => {
  Ni.has(e) || Ni.add(e), rs || (rs = !0, Tm(Am));
}, $x = (e) => {
  Ni.has(e) && Ni.delete(e);
};
function Ku(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Ku({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Uu && typeof e.output[0] == "string")
    return Uu(e);
  const i = e, a = i.output, l = i.range || [0, 1], f = i.extrapolateLeft || i.extrapolate || "extend", d = i.extrapolateRight || i.extrapolate || "extend", c = i.easing || ((h) => h);
  return (h) => {
    const y = Hx(h, l);
    return Bx(h, l[y], l[y + 1], a[y], a[y + 1], c, f, d, i.map);
  };
}
function Bx(e, t, n, i, a, l, f, d, c) {
  let h = c ? c(e) : e;
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
class Yo extends Xd {
  constructor(t, n, i, a) {
    super(), this.calc = void 0, this.payload = t instanceof Xd && !(t instanceof Yo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Ku(n, i, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, i) {
    this.calc = Ku(t, n, i);
  }
  interpolate(t, n, i) {
    return new Yo(this, t, n, i);
  }
}
const Wx = (e, t, n) => e && new Yo(e, t, n);
function Lm(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Lm(n, t));
}
class Gd extends Dr {
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
class Vx extends Xd {
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
    const n = Rd(t), i = n.delay, a = i === void 0 ? 0 : i, l = n.to, f = Ur(n, ["delay", "to"]);
    if (Bt.arr(l) || Bt.fun(l))
      this.queue.push(pn({}, f, {
        delay: a,
        to: l
      }));
    else if (l) {
      let d = {};
      Object.entries(l).forEach((c) => {
        let h = c[0], y = c[1];
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
    return this.queue = this.queue.sort((d, c) => d.delay - c.delay), this.diff(f), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let l = a.from, f = l === void 0 ? {} : l, d = a.to, c = d === void 0 ? {} : d;
        Bt.obj(f) && (this.merged = pn({}, f, this.merged)), Bt.obj(c) && (this.merged = pn({}, this.merged, c));
      });
      const n = this.local = ++this.guid, i = this.localQueue = this.queue;
      this.queue = [], i.forEach((a, l) => {
        let f = a.delay, d = Ur(a, ["delay"]);
        const c = (y) => {
          l === i.length - 1 && n === this.guid && y && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let h = Bt.arr(d.to) || Bt.fun(d.to);
        f ? setTimeout(() => {
          n === this.guid && (h ? this.runAsync(d, c) : this.diff(d).start(c));
        }, f) : h ? this.runAsync(d, c) : this.diff(d).start(c);
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
        const c = d, h = pn({}, a, Rd(a.to[c]));
        Bt.arr(h.config) && (h.config = h.config[c]), f = f.then(() => {
          if (l === this.guid)
            return new Promise((y) => this.diff(h).start(y));
        });
      }
    else if (Bt.fun(a.to)) {
      let d = 0, c;
      f = f.then(() => a.to(
        // next(props)
        (h) => {
          const y = pn({}, a, Rd(h));
          if (Bt.arr(y.config) && (y.config = y.config[d]), d++, l === this.guid)
            return c = new Promise((v) => this.diff(y).start(v));
        },
        // cancel()
        function(h) {
          return h === void 0 && (h = !0), i.stop(h);
        }
      ).then(() => c));
    }
    f.then(n);
  }
  diff(t) {
    this.props = pn({}, this.props, t);
    let n = this.props, i = n.from, a = i === void 0 ? {} : i, l = n.to, f = l === void 0 ? {} : l, d = n.config, c = d === void 0 ? {} : d, h = n.reverse, y = n.attach, v = n.reset, S = n.immediate;
    if (h) {
      var R = [f, a];
      a = R[0], f = R[1];
    }
    this.merged = pn({}, a, this.merged, f), this.hasChanged = !1;
    let k = y && y(this);
    if (this.animations = Object.entries(this.merged).reduce((F, w) => {
      let m = w[0], _ = w[1], D = F[m] || {};
      const P = Bt.num(_), O = Bt.str(_) && !_.startsWith("#") && !/\d/.test(_) && !km[_], L = Bt.arr(_), U = !P && !L && !O;
      let V = Bt.und(a[m]) ? _ : a[m], q = P || L || O ? _ : 1, ce = Rr(c, m);
      k && (q = k.animations[m].parent);
      let ee = D.parent, j = D.interpolation, Y = Ho(k ? q.getPayload() : q), W, B = _;
      U && (B = Uu({
        range: [0, 1],
        output: [_, _]
      })(1));
      let ie = j && j.getValue();
      const se = !Bt.und(ee) && D.animatedValues.some((ue) => !ue.done), Q = !Bt.equ(B, ie), K = !Bt.equ(B, D.previous), ne = !Bt.equ(ce, D.config);
      if (v || K && Q || ne) {
        if (P || O)
          ee = j = D.parent || new Gd(V);
        else if (L)
          ee = j = D.parent || new Vx(V);
        else if (U) {
          let ue = D.interpolation && D.interpolation.calc(D.parent.value);
          ue = ue !== void 0 && !v ? ue : V, D.parent ? (ee = D.parent, ee.setValue(0, !1)) : ee = new Gd(0);
          const ze = {
            output: [ue, _]
          };
          D.interpolation ? (j = D.interpolation, D.interpolation.updateConfig(ze)) : j = ee.interpolate(ze);
        }
        return Y = Ho(k ? q.getPayload() : q), W = Ho(ee.getPayload()), v && !U && ee.setValue(V, !1), this.hasChanged = !0, W.forEach((ue) => {
          ue.startPosition = ue.value, ue.lastPosition = ue.value, ue.lastVelocity = se ? ue.lastVelocity : void 0, ue.lastTime = se ? ue.lastTime : void 0, ue.startTime = wm(), ue.done = !1, ue.animatedStyles.clear();
        }), Rr(S, m) && ee.setValue(U ? q : _, !1), pn({}, F, {
          [m]: pn({}, D, {
            name: m,
            parent: ee,
            interpolation: j,
            animatedValues: W,
            toValues: Y,
            previous: B,
            config: ce,
            fromValues: Ho(ee.getValue()),
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
        return Q ? F : (U && (ee.setValue(1, !1), j.updateConfig({
          output: [B, B]
        })), ee.done = !0, this.hasChanged = !0, pn({}, F, {
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
const Nu = "enter", Dd = "leave", Nd = "update", Yx = (e, t) => (typeof t == "function" ? e.map(t) : Ho(t)).map(String), qd = (e) => {
  let t = e.items, n = e.keys, i = n === void 0 ? (l) => l : n, a = Ur(e, ["items", "keys"]);
  return t = Ho(t !== void 0 ? t : null), pn({
    items: t,
    keys: Yx(t, i)
  }, a);
};
function Xx(e, t, n) {
  const i = pn({
    items: e,
    keys: t || ((_) => _)
  }, n), a = qd(i), l = a.lazy, f = l === void 0 ? !1 : l;
  a.unique;
  const d = a.reset, c = d === void 0 ? !1 : d;
  a.enter, a.leave, a.update;
  const h = a.onDestroyed;
  a.keys, a.items;
  const y = a.onFrame, v = a.onRest, S = a.onStart, R = a.ref, k = Ur(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), F = Sm(), w = de.useRef(!1), m = de.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!i.ref,
    instances: !w.current && /* @__PURE__ */ new Map(),
    forceUpdate: F
  });
  return de.useImperativeHandle(i.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((_) => {
      let D = _[1];
      return new Promise((P) => D.start(P));
    })),
    stop: (_) => Array.from(m.current.instances).forEach((D) => D[1].stop(_)),
    get controllers() {
      return Array.from(m.current.instances).map((_) => _[1]);
    }
  })), m.current = Gx(m.current, i), m.current.changed && m.current.transitions.forEach((_) => {
    const D = _.slot, P = _.from, O = _.to, L = _.config, U = _.trail, V = _.key, q = _.item;
    m.current.instances.has(V) || m.current.instances.set(V, new Ux());
    const ce = m.current.instances.get(V), ee = pn({}, k, {
      to: O,
      from: P,
      config: L,
      ref: R,
      onRest: (j) => {
        m.current.mounted && (_.destroyed && (!R && !f && jp(m, V), h && h(q)), !Array.from(m.current.instances).some((B) => !B[1].idle) && (R || f) && m.current.deleted.length > 0 && jp(m), v && v(q, D, j));
      },
      onStart: S && (() => S(q, D)),
      onFrame: y && ((j) => y(q, D, j)),
      delay: U,
      reset: c && D === Nu
      // Update controller
    });
    ce.update(ee), m.current.paused || ce.start();
  }), de.useEffect(() => (m.current.mounted = w.current = !0, () => {
    m.current.mounted = w.current = !1, Array.from(m.current.instances).map((_) => _[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((_) => {
    let D = _.item, P = _.slot, O = _.key;
    return {
      item: D,
      key: O,
      state: P,
      props: m.current.instances.get(O).getValues()
    };
  });
}
function jp(e, t) {
  const n = e.current.deleted;
  for (let i of n) {
    let a = i.key;
    const l = (f) => f.key !== a;
    (Bt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Gx(e, t) {
  let n = e.first, i = e.prevProps, a = Ur(e, ["first", "prevProps"]), l = qd(t), f = l.items, d = l.keys, c = l.initial, h = l.from, y = l.enter, v = l.leave, S = l.update, R = l.trail, k = R === void 0 ? 0 : R, F = l.unique, w = l.config, m = l.order, _ = m === void 0 ? [Nu, Dd, Nd] : m, D = qd(i), P = D.keys, O = D.items, L = pn({}, a.current), U = [...a.deleted], V = Object.keys(L), q = new Set(V), ce = new Set(d), ee = d.filter((ie) => !q.has(ie)), j = a.transitions.filter((ie) => !ie.destroyed && !ce.has(ie.originalKey)).map((ie) => ie.originalKey), Y = d.filter((ie) => q.has(ie)), W = -k;
  for (; _.length; )
    switch (_.shift()) {
      case Nu: {
        ee.forEach((ae, se) => {
          F && U.find((ue) => ue.originalKey === ae) && (U = U.filter((ue) => ue.originalKey !== ae));
          const Q = d.indexOf(ae), K = f[Q], ne = n && c !== void 0 ? "initial" : Nu;
          L[ae] = {
            slot: ne,
            originalKey: ae,
            key: F ? String(ae) : Kx++,
            item: K,
            trail: W = W + k,
            config: Rr(w, K, ne),
            from: Rr(n && c !== void 0 ? c || {} : h, K),
            to: Rr(y, K)
          };
        });
        break;
      }
      case Dd: {
        j.forEach((ae) => {
          const se = P.indexOf(ae), Q = O[se], K = Dd;
          U.unshift(pn({}, L[ae], {
            slot: K,
            destroyed: !0,
            left: P[Math.max(0, se - 1)],
            right: P[Math.min(P.length, se + 1)],
            trail: W = W + k,
            config: Rr(w, Q, K),
            to: Rr(v, Q)
          })), delete L[ae];
        });
        break;
      }
      case Nd: {
        Y.forEach((ae) => {
          const se = d.indexOf(ae), Q = f[se], K = Nd;
          L[ae] = pn({}, L[ae], {
            item: Q,
            slot: K,
            trail: W = W + k,
            config: Rr(w, Q, K),
            to: Rr(S, Q)
          });
        });
        break;
      }
    }
  let B = d.map((ie) => L[ie]);
  return U.forEach((ie) => {
    let ae = ie.left;
    ie.right;
    let se = Ur(ie, ["left", "right"]), Q;
    (Q = B.findIndex((K) => K.originalKey === ae)) !== -1 && (Q += 1), Q = Math.max(0, Q), B = [...B.slice(0, Q), se, ...B.slice(Q)];
  }), pn({}, a, {
    changed: ee.length || j.length || Y.length,
    first: n && ee.length === 0,
    transitions: B,
    current: L,
    deleted: U,
    prevProps: t
  });
}
class qx extends Em {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Dr) && (t = Nf.transform(t)), this.payload = t;
  }
}
const Yu = {
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
}, Nr = "[-+]?\\d*\\.?\\d+", Xu = Nr + "%";
function yc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Zx = new RegExp("rgb" + yc(Nr, Nr, Nr)), Qx = new RegExp("rgba" + yc(Nr, Nr, Nr, Nr)), Jx = new RegExp("hsl" + yc(Nr, Xu, Xu)), eb = new RegExp("hsla" + yc(Nr, Xu, Xu, Nr)), tb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, nb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, rb = /^#([0-9a-fA-F]{6})$/, ab = /^#([0-9a-fA-F]{8})$/;
function ib(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = rb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Yu.hasOwnProperty(e) ? Yu[e] : (t = Zx.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Qx.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  Yp(t[4])) >>> // a
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
  ) >>> 0 : (t = Jx.exec(e)) ? (Up(
    Kp(t[1]),
    // h
    xu(t[2]),
    // s
    xu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = eb.exec(e)) ? (Up(
    Kp(t[1]),
    // h
    xu(t[2]),
    // s
    xu(t[3])
    // l
  ) | Yp(t[4])) >>> // a
  0 : null;
}
function Od(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Up(e, t, n) {
  const i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i, l = Od(a, i, e + 1 / 3), f = Od(a, i, e), d = Od(a, i, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(f * 255) << 16 | Math.round(d * 255) << 8;
}
function Io(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Kp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Yp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Xp(e) {
  let t = ib(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, i = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${i}, ${a}, ${l})`;
}
const bu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ob = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, lb = new RegExp(`(${Object.keys(Yu).join("|")})`, "g"), sb = (e) => {
  const t = e.output.map((a) => a.replace(ob, Xp)).map((a) => a.replace(lb, Xp)), n = t[0].match(bu).map(() => []);
  t.forEach((a) => {
    a.match(bu).forEach((l, f) => n[f].push(+l));
  });
  const i = t[0].match(bu).map((a, l) => Ku(pn({}, e, {
    output: n[l]
  })));
  return (a) => {
    let l = 0;
    return t[0].replace(bu, () => i[l++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, d, c, h, y) => `rgba(${Math.round(d)}, ${Math.round(c)}, ${Math.round(h)}, ${y})`);
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
_x((e) => new qx(e));
Nx(sb);
Dx(Yu);
Rx((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, l = t.children, f = t.scrollTop, d = t.scrollLeft, c = Ur(t, ["style", "children", "scrollTop", "scrollLeft"]), h = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), d !== void 0 && (e.scrollLeft = d), l !== void 0 && (e.textContent = l);
    for (let y in a)
      if (a.hasOwnProperty(y)) {
        var n = y.indexOf("--") === 0, i = db(y, a[y], n);
        y === "float" && (y = "cssFloat"), n ? e.style.setProperty(y, i) : e.style[y] = i;
      }
    for (let y in c) {
      const v = h ? y : Gp[y] || (Gp[y] = y.replace(/([A-Z])/g, (S) => "-" + S.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, c[y]);
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
], pb = Ax(zx, !1), qp = pb(fb);
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
  var c = n - e, h = i - t, y = f - a, v = d - l, S = v * c - y * h;
  if (!(S * S < qn))
    return S = (y * (t - l) - v * (e - a)) / S, [e + S * c, t + S * h];
}
function Su(e, t, n, i, a, l, f) {
  var d = e - n, c = t - i, h = (f ? l : -l) / $o(d * d + c * c), y = h * c, v = -h * d, S = e + y, R = t + v, k = n + y, F = i + v, w = (S + k) / 2, m = (R + F) / 2, _ = k - S, D = F - R, P = _ * _ + D * D, O = a - l, L = S * F - k * R, U = (D < 0 ? -1 : 1) * $o(Wy(0, O * O * P - L * L)), V = (L * D - _ * U) / P, q = (-L * _ - D * U) / P, ce = (L * D + _ * U) / P, ee = (-L * _ + D * U) / P, j = V - w, Y = q - m, W = ce - w, B = ee - m;
  return j * j + Y * Y > W * W + B * B && (V = ce, q = ee), {
    cx: V,
    cy: q,
    x01: -y,
    y01: -v,
    x11: V * (a / O - 1),
    y11: q * (a / O - 1)
  };
}
function bb() {
  var e = hb, t = mb, n = Vt(0), i = null, a = yb, l = gb, f = vb, d = null;
  function c() {
    var h, y, v = +e.apply(this, arguments), S = +t.apply(this, arguments), R = a.apply(this, arguments) - ip, k = l.apply(this, arguments) - ip, F = op(k - R), w = k > R;
    if (d || (d = h = hc()), S < v && (y = S, S = v, v = y), !(S > qn))
      d.moveTo(0, 0);
    else if (F > Ru - qn)
      d.moveTo(S * Si(R), S * Br(R)), d.arc(0, 0, S, R, k, !w), v > qn && (d.moveTo(v * Si(k), v * Br(k)), d.arc(0, 0, v, k, R, w));
    else {
      var m = R, _ = k, D = R, P = k, O = F, L = F, U = f.apply(this, arguments) / 2, V = U > qn && (i ? +i.apply(this, arguments) : $o(v * v + S * S)), q = Sd(op(S - v) / 2, +n.apply(this, arguments)), ce = q, ee = q, j, Y;
      if (V > qn) {
        var W = lp(V / v * Br(U)), B = lp(V / S * Br(U));
        (O -= W * 2) > qn ? (W *= w ? 1 : -1, D += W, P -= W) : (O = 0, D = P = (R + k) / 2), (L -= B * 2) > qn ? (B *= w ? 1 : -1, m += B, _ -= B) : (L = 0, m = _ = (R + k) / 2);
      }
      var ie = S * Si(m), ae = S * Br(m), se = v * Si(P), Q = v * Br(P);
      if (q > qn) {
        var K = S * Si(_), ne = S * Br(_), ue = v * Si(D), ze = v * Br(D), be;
        if (F < ap && (be = xb(ie, ae, ue, ze, K, ne, se, Q))) {
          var ye = ie - be[0], Pe = ae - be[1], oe = K - be[0], Ie = ne - be[1], Ee = 1 / Br(Hy((ye * oe + Pe * Ie) / ($o(ye * ye + Pe * Pe) * $o(oe * oe + Ie * Ie))) / 2), he = $o(be[0] * be[0] + be[1] * be[1]);
          ce = Sd(q, (v - he) / (Ee - 1)), ee = Sd(q, (S - he) / (Ee + 1));
        }
      }
      L > qn ? ee > qn ? (j = Su(ue, ze, ie, ae, S, ee, w), Y = Su(K, ne, se, Q, S, ee, w), d.moveTo(j.cx + j.x01, j.cy + j.y01), ee < q ? d.arc(j.cx, j.cy, ee, Gn(j.y01, j.x01), Gn(Y.y01, Y.x01), !w) : (d.arc(j.cx, j.cy, ee, Gn(j.y01, j.x01), Gn(j.y11, j.x11), !w), d.arc(0, 0, S, Gn(j.cy + j.y11, j.cx + j.x11), Gn(Y.cy + Y.y11, Y.cx + Y.x11), !w), d.arc(Y.cx, Y.cy, ee, Gn(Y.y11, Y.x11), Gn(Y.y01, Y.x01), !w))) : (d.moveTo(ie, ae), d.arc(0, 0, S, m, _, !w)) : d.moveTo(ie, ae), !(v > qn) || !(O > qn) ? d.lineTo(se, Q) : ce > qn ? (j = Su(se, Q, K, ne, v, -ce, w), Y = Su(ie, ae, ue, ze, v, -ce, w), d.lineTo(j.cx + j.x01, j.cy + j.y01), ce < q ? d.arc(j.cx, j.cy, ce, Gn(j.y01, j.x01), Gn(Y.y01, Y.x01), !w) : (d.arc(j.cx, j.cy, ce, Gn(j.y01, j.x01), Gn(j.y11, j.x11), !w), d.arc(0, 0, v, Gn(j.cy + j.y11, j.cx + j.x11), Gn(Y.cy + Y.y11, Y.cx + Y.x11), w), d.arc(Y.cx, Y.cy, ce, Gn(Y.y11, Y.x11), Gn(Y.y01, Y.x01), !w))) : d.arc(0, 0, v, P, D, w);
    }
    if (d.closePath(), h)
      return d = null, h + "" || null;
  }
  return c.centroid = function() {
    var h = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+a.apply(this, arguments) + +l.apply(this, arguments)) / 2 - ap / 2;
    return [Si(y) * h, Br(y) * h];
  }, c.innerRadius = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Vt(+h), c) : e;
  }, c.outerRadius = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Vt(+h), c) : t;
  }, c.cornerRadius = function(h) {
    return arguments.length ? (n = typeof h == "function" ? h : Vt(+h), c) : n;
  }, c.padRadius = function(h) {
    return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : Vt(+h), c) : i;
  }, c.startAngle = function(h) {
    return arguments.length ? (a = typeof h == "function" ? h : Vt(+h), c) : a;
  }, c.endAngle = function(h) {
    return arguments.length ? (l = typeof h == "function" ? h : Vt(+h), c) : l;
  }, c.padAngle = function(h) {
    return arguments.length ? (f = typeof h == "function" ? h : Vt(+h), c) : f;
  }, c.context = function(h) {
    return arguments.length ? (d = h ?? null, c) : d;
  }, c;
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
function gc(e) {
  return new Pm(e);
}
function Of(e) {
  return e[0];
}
function _f(e) {
  return e[1];
}
function Rm() {
  var e = Of, t = _f, n = Vt(!0), i = null, a = gc, l = null;
  function f(d) {
    var c, h = d.length, y, v = !1, S;
    for (i == null && (l = a(S = hc())), c = 0; c <= h; ++c)
      !(c < h && n(y = d[c], c, d)) === v && ((v = !v) ? l.lineStart() : l.lineEnd()), v && l.point(+e(y, c, d), +t(y, c, d));
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
  var e = Of, t = null, n = Vt(0), i = _f, a = Vt(!0), l = null, f = gc, d = null;
  function c(y) {
    var v, S, R, k = y.length, F, w = !1, m, _ = new Array(k), D = new Array(k);
    for (l == null && (d = f(m = hc())), v = 0; v <= k; ++v) {
      if (!(v < k && a(F = y[v], v, y)) === w)
        if (w = !w)
          S = v, d.areaStart(), d.lineStart();
        else {
          for (d.lineEnd(), d.lineStart(), R = v - 1; R >= S; --R)
            d.point(_[R], D[R]);
          d.lineEnd(), d.areaEnd();
        }
      w && (_[v] = +e(F, v, y), D[v] = +n(F, v, y), d.point(t ? +t(F, v, y) : _[v], i ? +i(F, v, y) : D[v]));
    }
    if (m)
      return d = null, m + "" || null;
  }
  function h() {
    return Rm().defined(a).curve(f).context(l);
  }
  return c.x = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Vt(+y), t = null, c) : e;
  }, c.x0 = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Vt(+y), c) : e;
  }, c.x1 = function(y) {
    return arguments.length ? (t = y == null ? null : typeof y == "function" ? y : Vt(+y), c) : t;
  }, c.y = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Vt(+y), i = null, c) : n;
  }, c.y0 = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Vt(+y), c) : n;
  }, c.y1 = function(y) {
    return arguments.length ? (i = y == null ? null : typeof y == "function" ? y : Vt(+y), c) : i;
  }, c.lineX0 = c.lineY0 = function() {
    return h().x(e).y(n);
  }, c.lineY1 = function() {
    return h().x(e).y(i);
  }, c.lineX1 = function() {
    return h().x(t).y(n);
  }, c.defined = function(y) {
    return arguments.length ? (a = typeof y == "function" ? y : Vt(!!y), c) : a;
  }, c.curve = function(y) {
    return arguments.length ? (f = y, l != null && (d = f(l)), c) : f;
  }, c.context = function(y) {
    return arguments.length ? (y == null ? l = d = null : d = f(l = y), c) : l;
  }, c;
}
function Eb(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function kb(e) {
  return e;
}
function Tb() {
  var e = kb, t = Eb, n = null, i = Vt(0), a = Vt(Ru), l = Vt(0);
  function f(d) {
    var c, h = d.length, y, v, S = 0, R = new Array(h), k = new Array(h), F = +i.apply(this, arguments), w = Math.min(Ru, Math.max(-Ru, a.apply(this, arguments) - F)), m, _ = Math.min(Math.abs(w) / h, l.apply(this, arguments)), D = _ * (w < 0 ? -1 : 1), P;
    for (c = 0; c < h; ++c)
      (P = k[R[c] = c] = +e(d[c], c, d)) > 0 && (S += P);
    for (t != null ? R.sort(function(O, L) {
      return t(k[O], k[L]);
    }) : n != null && R.sort(function(O, L) {
      return n(d[O], d[L]);
    }), c = 0, v = S ? (w - h * D) / S : 0; c < h; ++c, F = m)
      y = R[c], P = k[y], m = F + (P > 0 ? P * v : 0) + D, k[y] = {
        data: d[y],
        index: c,
        value: P,
        startAngle: F,
        endAngle: m,
        padAngle: _
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
var Zd = Array.prototype.slice;
function wb(e) {
  return e.source;
}
function Cb(e) {
  return e.target;
}
function Ab(e) {
  var t = wb, n = Cb, i = Of, a = _f, l = null;
  function f() {
    var d, c = Zd.call(arguments), h = t.apply(this, c), y = n.apply(this, c);
    if (l || (l = d = hc()), e(l, +i.apply(this, (c[0] = h, c)), +a.apply(this, c), +i.apply(this, (c[0] = y, c)), +a.apply(this, c)), d)
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
function vc(e) {
  this._context = e;
}
vc.prototype = {
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
  return new vc(e);
}
function Dm(e) {
  this._context = e;
}
Dm.prototype = {
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
function Db(e) {
  return new Dm(e);
}
function Nm(e) {
  this._context = e;
}
Nm.prototype = {
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
function Nb(e) {
  return new Nm(e);
}
function Om(e, t) {
  this._basis = new vc(e), this._beta = t;
}
Om.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var i = e[0], a = t[0], l = e[n] - i, f = t[n] - a, d = -1, c; ++d <= n; )
        c = d / n, this._basis.point(
          this._beta * e[d] + (1 - this._beta) * (i + c * l),
          this._beta * t[d] + (1 - this._beta) * (a + c * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Ob = function e(t) {
  function n(i) {
    return t === 1 ? new vc(i) : new Om(i, t);
  }
  return n.beta = function(i) {
    return e(+i);
  }, n;
}(0.85);
function qu(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Ff(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ff.prototype = {
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
        qu(this, this._x1, this._y1);
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
        qu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const _b = function e(t) {
  function n(i) {
    return new Ff(i, t);
  }
  return n.tension = function(i) {
    return e(+i);
  }, n;
}(0);
function Mf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Mf.prototype = {
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
        qu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Fb = function e(t) {
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
        qu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Mb = function e(t) {
  function n(i) {
    return new zf(i, t);
  }
  return n.tension = function(i) {
    return e(+i);
  }, n;
}(0);
function If(e, t, n) {
  var i = e._x1, a = e._y1, l = e._x2, f = e._y2;
  if (e._l01_a > qn) {
    var d = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * d - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * d - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > qn) {
    var h = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, y = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * h + e._x1 * e._l23_2a - t * e._l12_2a) / y, f = (f * h + e._y1 * e._l23_2a - n * e._l12_2a) / y;
  }
  e._context.bezierCurveTo(i, a, l, f, e._x2, e._y2);
}
function _m(e, t) {
  this._context = e, this._alpha = t;
}
_m.prototype = {
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
        If(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const zb = function e(t) {
  function n(i) {
    return t ? new _m(i, t) : new Ff(i, 0);
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
        If(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ib = function e(t) {
  function n(i) {
    return t ? new Fm(i, t) : new Mf(i, 0);
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
        If(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const $b = function e(t) {
  function n(i) {
    return t ? new Mm(i, t) : new zf(i, 0);
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
function Qd(e) {
  return new zm(e);
}
function Zp(e) {
  return e < 0 ? -1 : 1;
}
function Qp(e, t, n) {
  var i = e._x1 - e._x0, a = t - e._x1, l = (e._y1 - e._y0) / (i || a < 0 && -0), f = (n - e._y1) / (a || i < 0 && -0), d = (l * a + f * i) / (i + a);
  return (Zp(l) + Zp(f)) * Math.min(Math.abs(l), Math.abs(f), 0.5 * Math.abs(d)) || 0;
}
function Jp(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function _d(e, t, n) {
  var i = e._x0, a = e._y0, l = e._x1, f = e._y1, d = (l - i) / 3;
  e._context.bezierCurveTo(i + d, a + d * t, l - d, f - d * n, l, f);
}
function Zu(e) {
  this._context = e;
}
Zu.prototype = {
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
        _d(this, this._t0, Jp(this, this._t0));
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
          this._point = 3, _d(this, Jp(this, n = Qp(this, e, t)), n);
          break;
        default:
          _d(this, this._t0, n = Qp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Im(e) {
  this._context = new $m(e);
}
(Im.prototype = Object.create(Zu.prototype)).point = function(e, t) {
  Zu.prototype.point.call(this, t, e);
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
  return new Zu(e);
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
        for (var i = eh(e), a = eh(t), l = 0, f = 1; f < n; ++l, ++f)
          this._context.bezierCurveTo(i[0][l], a[0][l], i[1][l], a[1][l], e[f], t[f]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function eh(e) {
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
function xc(e, t) {
  this._context = e, this._t = t;
}
xc.prototype = {
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
  return new xc(e, 0.5);
}
function Vb(e) {
  return new xc(e, 0);
}
function jb(e) {
  return new xc(e, 1);
}
function Xo(e, t) {
  if ((f = e.length) > 1)
    for (var n = 1, i, a, l = e[t[0]], f, d = l.length; n < f; ++n)
      for (a = l, l = e[t[n]], i = 0; i < d; ++i)
        l[i][1] += l[i][0] = isNaN(a[i][1]) ? a[i][0] : a[i][1];
}
function Go(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function Ub(e, t) {
  return e[t];
}
function $f() {
  var e = Vt([]), t = Go, n = Xo, i = Ub;
  function a(l) {
    var f = e.apply(this, arguments), d, c = l.length, h = f.length, y = new Array(h), v;
    for (d = 0; d < h; ++d) {
      for (var S = f[d], R = y[d] = new Array(c), k = 0, F; k < c; ++k)
        R[k] = F = [0, +i(l[k], S, k, l)], F.data = l[k];
      R.key = S;
    }
    for (d = 0, v = t(y); d < h; ++d)
      y[v[d]].index = d;
    return n(y, v), y;
  }
  return a.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Vt(Zd.call(l)), a) : e;
  }, a.value = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Vt(+l), a) : i;
  }, a.order = function(l) {
    return arguments.length ? (t = l == null ? Go : typeof l == "function" ? l : Vt(Zd.call(l)), a) : t;
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
  if ((c = e.length) > 0)
    for (var n, i = 0, a, l, f, d, c, h = e[t[0]].length; i < h; ++i)
      for (f = d = 0, n = 0; n < c; ++n)
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
function Gb(e, t) {
  if (!(!((f = e.length) > 0) || !((l = (a = e[t[0]]).length) > 0))) {
    for (var n = 0, i = 1, a, l, f; i < l; ++i) {
      for (var d = 0, c = 0, h = 0; d < f; ++d) {
        for (var y = e[t[d]], v = y[i][1] || 0, S = y[i - 1][1] || 0, R = (v - S) / 2, k = 0; k < d; ++k) {
          var F = e[t[k]], w = F[i][1] || 0, m = F[i - 1][1] || 0;
          R += w - m;
        }
        c += v, h += R * v;
      }
      a[i - 1][1] += a[i - 1][0] = n, c && (n -= h / c);
    }
    a[i - 1][1] += a[i - 1][0] = n, Xo(e, t);
  }
}
function qb(e) {
  var t = e.map(Zb);
  return Go(e).sort(function(n, i) {
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
  return Go(e).sort(function(n, i) {
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
  var t = e.length, n, i, a = e.map(Wm), l = qb(e), f = 0, d = 0, c = [], h = [];
  for (n = 0; n < t; ++n)
    i = l[n], f < d ? (f += a[i], c.push(i)) : (d += a[i], h.push(i));
  return h.reverse().concat(c);
}
function e0(e) {
  return Go(e).reverse();
}
function bn(e, t) {
  e(t);
}
var th = {
  ascending: Hm,
  descending: Qb,
  insideout: Jb,
  none: Go,
  reverse: e0
};
function Bf(e) {
  return e && th[e] || th.none;
}
var nh = {
  expand: Kb,
  diverging: Yb,
  none: Xo,
  silhouette: Xb,
  wiggle: Gb
};
function Hf(e) {
  return e && nh[e] || nh.none;
}
function t0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, i = t.outerRadius, a = t.cornerRadius, l = t.startAngle, f = t.endAngle, d = t.padAngle, c = t.padRadius, h = bb();
  return n != null && bn(h.innerRadius, n), i != null && bn(h.outerRadius, i), a != null && bn(h.cornerRadius, a), l != null && bn(h.startAngle, l), f != null && bn(h.endAngle, f), d != null && bn(h.padAngle, d), c != null && bn(h.padRadius, c), h;
}
function Wf(e) {
  var t = e === void 0 ? {} : e, n = t.x, i = t.x0, a = t.x1, l = t.y, f = t.y0, d = t.y1, c = t.defined, h = t.curve, y = Sb();
  return n && bn(y.x, n), i && bn(y.x0, i), a && bn(y.x1, a), l && bn(y.y, l), f && bn(y.y0, f), d && bn(y.y1, d), c && y.defined(c), h && y.curve(h), y;
}
function Vm(e) {
  var t = e === void 0 ? {} : e, n = t.x, i = t.y, a = t.defined, l = t.curve, f = Rm();
  return n && bn(f.x, n), i && bn(f.y, i), a && f.defined(a), l && f.curve(l), f;
}
function n0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, i = t.endAngle, a = t.padAngle, l = t.value, f = t.sort, d = t.sortValues, c = Tb();
  return (f === null || f != null) && c.sort(f), (d === null || d != null) && c.sortValues(d), l != null && c.value(l), a != null && bn(c.padAngle, a), n != null && bn(c.startAngle, n), i != null && bn(c.endAngle, i), c;
}
function r0(e) {
  var t = e.keys, n = e.value, i = e.order, a = e.offset, l = $f();
  return t && l.keys(t), n && bn(l.value, n), i && l.order(Bf(i)), a && l.offset(Hf(a)), l;
}
var a0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function Jd() {
  return Jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Jd.apply(this, arguments);
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
  var t = e.className, n = e.top, i = e.left, a = e.data, l = a === void 0 ? [] : a, f = e.centroid, d = e.innerRadius, c = d === void 0 ? 0 : d, h = e.outerRadius, y = e.cornerRadius, v = e.startAngle, S = e.endAngle, R = e.padAngle, k = e.padRadius, F = e.pieSort, w = e.pieSortValues, m = e.pieValue, _ = e.children, D = e.fill, P = D === void 0 ? "" : D, O = i0(e, a0), L = t0({
    innerRadius: c,
    outerRadius: h,
    cornerRadius: y,
    padRadius: k
  }), U = n0({
    startAngle: v,
    endAngle: S,
    padAngle: R,
    value: m,
    sort: F,
    sortValues: w
  }), V = U(l);
  return _ ? /* @__PURE__ */ r.createElement(r.Fragment, null, _({
    arcs: V,
    path: L,
    pie: U
  })) : /* @__PURE__ */ r.createElement(at, {
    className: "visx-pie-arcs-group",
    top: n,
    left: i
  }, V.map(function(q, ce) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + ce
    }, /* @__PURE__ */ r.createElement("path", Jd({
      className: Ln("visx-pie-arc", t),
      d: L(q) || "",
      fill: P == null || typeof P == "string" ? P : P(q)
    }, O)), f == null ? void 0 : f(L.centroid(q), q));
  }));
}
var l0 = ["from", "to", "fill", "className", "innerRef"];
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
  } : i, l = e.fill, f = l === void 0 ? "transparent" : l, d = e.className, c = e.innerRef, h = s0(e, l0), y = n.x === a.x || n.y === a.y;
  return /* @__PURE__ */ r.createElement("line", ef({
    ref: c,
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
function c0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Kr(e) {
  var t = e.children, n = e.data, i = n === void 0 ? [] : n, a = e.x, l = e.y, f = e.fill, d = f === void 0 ? "transparent" : f, c = e.className, h = e.curve, y = e.innerRef, v = e.defined, S = v === void 0 ? function() {
    return !0;
  } : v, R = c0(e, u0), k = Vm({
    x: a,
    y: l,
    defined: S,
    curve: h
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ r.createElement("path", tf({
    ref: y,
    className: Ln("visx-linepath", c),
    d: k(i) || "",
    fill: d,
    strokeLinecap: "round"
  }, R));
}
var d0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function f0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function p0(e) {
  var t = e.children, n = e.x, i = e.x0, a = e.x1, l = e.y, f = e.y0, d = e.y1, c = e.data, h = c === void 0 ? [] : c, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, k = e.innerRef, F = f0(e, d0), w = Wf({
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
    path: w
  })) : /* @__PURE__ */ r.createElement("path", nf({
    ref: k,
    className: Ln("visx-area", S),
    d: w(h) || ""
  }, F));
}
var h0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function m0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function y0(e) {
  var t = e.x, n = e.x0, i = e.x1, a = e.y, l = e.y1, f = e.y0, d = e.yScale, c = e.data, h = c === void 0 ? [] : c, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, k = e.innerRef, F = e.children, w = m0(e, h0), m = Wf({
    x: t,
    x0: n,
    x1: i,
    defined: v,
    curve: R
  });
  return f == null ? m.y0(d.range()[0]) : bn(m.y0, f), a && !l && bn(m.y1, a), l && !a && bn(m.y1, l), F ? /* @__PURE__ */ r.createElement(r.Fragment, null, F({
    path: m
  })) : /* @__PURE__ */ r.createElement("path", rf({
    ref: k,
    className: Ln("visx-area-closed", S),
    d: m(h) || ""
  }, w));
}
var g0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function v0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function x0(e) {
  var t = e.className, n = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, c = e.x, h = e.x0, y = e.x1, v = e.y0, S = e.y1, R = e.value, k = e.order, F = e.offset, w = e.color, m = e.children, _ = v0(e, g0), D = r0({
    keys: a,
    value: R,
    order: k,
    offset: F
  }), P = Wf({
    x: c,
    x0: h,
    x1: y,
    y0: v,
    y1: S,
    curve: f,
    defined: d
  }), O = D(l);
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m({
    stacks: O,
    path: P,
    stack: D
  })) : /* @__PURE__ */ r.createElement(at, {
    top: n,
    left: i
  }, O.map(function(L, U) {
    return /* @__PURE__ */ r.createElement("path", af({
      className: Ln("visx-stack", t),
      key: "stack-" + U + "-" + (L.key || ""),
      d: P(L) || "",
      fill: w == null ? void 0 : w(L.key, U)
    }, _));
  }));
}
var b0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Qu() {
  return Qu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Qu.apply(this, arguments);
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
  var t = e.className, n = e.top, i = e.left, a = e.keys, l = e.data, f = e.curve, d = e.defined, c = e.x, h = e.x0, y = e.x1, v = e.y0, S = e.y1, R = e.value, k = e.order, F = e.offset, w = e.color, m = e.children, _ = S0(e, b0);
  return /* @__PURE__ */ r.createElement(x0, Qu({
    className: t,
    top: n,
    left: i,
    keys: a,
    data: l,
    curve: f,
    defined: d,
    x: c,
    x0: h,
    x1: y,
    y0: v,
    y1: S,
    value: R,
    order: k,
    offset: F,
    color: w
  }, _), m || function(D) {
    var P = D.stacks, O = D.path;
    return P.map(function(L, U) {
      return /* @__PURE__ */ r.createElement("path", Qu({
        className: Ln("visx-area-stack", t),
        key: "area-stack-" + U + "-" + (L.key || ""),
        d: O(L) || "",
        fill: w == null ? void 0 : w(L.key, U)
      }, _));
    });
  });
}
function Vf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var k0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function T0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function jm(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.x0, f = e.x0Scale, d = e.x1Scale, c = e.yScale, h = e.color, y = e.keys, v = e.height, S = e.children, R = T0(e, k0), k = Vf(d), F = t.map(function(w, m) {
    return {
      index: m,
      x0: f(l(w)),
      bars: y.map(function(_, D) {
        var P = w[_];
        return {
          index: D,
          key: _,
          value: P,
          width: k,
          x: d(_) || 0,
          y: c(P) || 0,
          color: h(_, D),
          height: v - (c(P) || 0)
        };
      })
    };
  });
  return S ? /* @__PURE__ */ r.createElement(r.Fragment, null, S(F)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-group", n),
    top: i,
    left: a
  }, F.map(function(w) {
    return /* @__PURE__ */ r.createElement(at, {
      key: "bar-group-" + w.index + "-" + w.x0,
      left: w.x0
    }, w.bars.map(function(m) {
      return /* @__PURE__ */ r.createElement(kr, of({
        key: "bar-group-bar-" + w.index + "-" + m.index + "-" + m.value + "-" + m.key,
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
var w0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function C0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function A0(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.x, f = e.y0, d = f === void 0 ? Um : f, c = e.y1, h = c === void 0 ? Km : c, y = e.xScale, v = e.yScale, S = e.color, R = e.keys, k = e.value, F = e.order, w = e.offset, m = e.children, _ = C0(e, w0), D = $f();
  R && D.keys(R), k && bn(D.value, k), F && D.order(Bf(F)), w && D.offset(Hf(w));
  var P = D(t), O = Vf(y), L = P.map(function(U, V) {
    var q = U.key;
    return {
      index: V,
      key: q,
      bars: U.map(function(ce, ee) {
        var j = (v(d(ce)) || 0) - (v(h(ce)) || 0), Y = v(h(ce)), W = "bandwidth" in y ? y(l(ce.data)) : Math.max((y(l(ce.data)) || 0) - O / 2);
        return {
          bar: ce,
          key: q,
          index: ee,
          height: j,
          width: O,
          x: W || 0,
          y: Y || 0,
          color: S(U.key, ee)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(L)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-stack", n),
    top: i,
    left: a
  }, L.map(function(U) {
    return U.bars.map(function(V) {
      return /* @__PURE__ */ r.createElement(kr, lf({
        key: "bar-stack-" + U.index + "-" + V.index,
        x: V.x,
        y: V.y,
        height: V.height,
        width: V.width,
        fill: V.color
      }, _));
    });
  }));
}
var L0 = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function P0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function R0(e) {
  var t = e.data, n = e.className, i = e.top, a = e.left, l = e.y, f = e.x0, d = f === void 0 ? Um : f, c = e.x1, h = c === void 0 ? Km : c, y = e.xScale, v = e.yScale, S = e.color, R = e.keys, k = e.value, F = e.order, w = e.offset, m = e.children, _ = P0(e, L0), D = $f();
  R && D.keys(R), k && bn(D.value, k), F && D.order(Bf(F)), w && D.offset(Hf(w));
  var P = D(t), O = Vf(v), L = P.map(function(U, V) {
    var q = U.key;
    return {
      index: V,
      key: q,
      bars: U.map(function(ce, ee) {
        var j = (y(h(ce)) || 0) - (y(d(ce)) || 0), Y = y(d(ce)), W = "bandwidth" in v ? v(l(ce.data)) : Math.max((v(l(ce.data)) || 0) - j / 2);
        return {
          bar: ce,
          key: q,
          index: ee,
          height: O,
          width: j,
          x: Y || 0,
          y: W || 0,
          color: S(U.key, ee)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(L)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-bar-stack-horizontal", n),
    top: i,
    left: a
  }, L.map(function(U) {
    return U.bars.map(function(V) {
      return /* @__PURE__ */ r.createElement(kr, sf({
        key: "bar-stack-" + U.index + "-" + V.index,
        x: V.x,
        y: V.y,
        height: V.height,
        width: V.width,
        fill: V.color
      }, _));
    });
  }));
}
var rh = "http://www.w3.org/2000/svg";
function D0(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(rh, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(rh, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var N0 = "__visx_splitpath_svg_path_measurement_id", ah = function() {
  return !0;
};
function O0(e) {
  var t = e.path, n = e.pointsInSegments, i = e.segmentation, a = i === void 0 ? "x" : i, l = e.sampleRate, f = l === void 0 ? 1 : l;
  try {
    var d = D0(N0);
    d.setAttribute("d", t);
    var c = d.getTotalLength(), h = n.length, y = n.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var v = n.map(function(Y) {
        var W;
        return (W = Y.find(function(B) {
          return typeof B[a] == "number";
        })) == null ? void 0 : W[a];
      }), S = d.getPointAtLength(0), R = d.getPointAtLength(c), k = R[a] > S[a], F = k ? v.map(function(Y) {
        return typeof Y > "u" ? ah : function(W) {
          return W >= Y;
        };
      }) : v.map(function(Y) {
        return typeof Y > "u" ? ah : function(W) {
          return W <= Y;
        };
      }), w = 0, m = 0; m <= c; m += f) {
        for (var _ = d.getPointAtLength(m), D = _[a]; w < h - 1 && F[w + 1](D); )
          w += 1;
        y[w].push(_);
      }
    else {
      var P = n.map(function(Y) {
        return Y.length;
      }), O = P.reduce(function(Y, W) {
        return Y + W;
      }, 0), L = c / Math.max(1, O - 1), U = P.slice(0, h - 1);
      U.unshift(0);
      for (var V = 2; V < h; V += 1)
        U[V] += U[V - 1];
      for (var q = 0; q < h; q += 1)
        U[q] *= L;
      for (var ce = 0, ee = 0; ee <= c; ee += f) {
        for (var j = d.getPointAtLength(ee); ce < h - 1 && ee >= U[ce + 1]; )
          ce += 1;
        y[ce].push(j);
      }
    }
    return y;
  } catch {
    return [];
  }
}
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
var _0 = function(t) {
  return t.x || 0;
}, F0 = function(t) {
  return t.y || 0;
};
function Ym(e) {
  var t = e.children, n = e.className, i = e.curve, a = e.defined, l = e.segmentation, f = e.sampleRate, d = e.segments, c = e.x, h = e.y, y = e.styles, v = de.useMemo(function() {
    var k = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, F = typeof h == "number" || typeof h > "u" ? function() {
      return h;
    } : h;
    return d.map(function(w) {
      return w.map(function(m, _) {
        return {
          x: k(m, _, w),
          y: F(m, _, w)
        };
      });
    });
  }, [c, h, d]), S = de.useMemo(function() {
    var k = Vm({
      x: c,
      y: h,
      defined: a,
      curve: i
    });
    return k(d.flat()) || "";
  }, [c, h, a, i, d]), R = de.useMemo(function() {
    return O0({
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
    })) : /* @__PURE__ */ r.createElement(Kr, uf({
      key: F,
      className: n,
      data: k,
      x: _0,
      y: F0
    }, y[F] || y[F % y.length]));
  }));
}
Ym.propTypes = {
  segments: Oe.arrayOf(Oe.array).isRequired,
  styles: Oe.array.isRequired,
  children: Oe.func,
  className: Oe.string
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
function Xm(e) {
  var t = de.useState(Ju({
    tooltipOpen: !1
  }, e)), n = t[0], i = t[1], a = de.useCallback(function(f) {
    return i(typeof f == "function" ? function(d) {
      d.tooltipOpen;
      var c = z0(d, M0);
      return Ju({}, f(c), {
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
function $0(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Gm = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, jf = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, i = e.top, a = e.left, l = e.offsetLeft, f = l === void 0 ? 10 : l, d = e.offsetTop, c = d === void 0 ? 10 : d, h = e.style, y = h === void 0 ? Gm : h, v = e.children, S = e.unstyled, R = S === void 0 ? !1 : S, k = e.applyPositionStyle, F = k === void 0 ? !1 : k, w = $0(e, I0);
  return /* @__PURE__ */ r.createElement("div", ec({
    ref: t,
    className: Ln("visx-tooltip", n),
    style: ec({
      top: i == null || c == null ? i : i + c,
      left: a == null || f == null ? a : a + f
    }, F && {
      position: "absolute"
    }, !R && y)
  }, w), v);
});
jf.propTypes = {
  children: Oe.node,
  className: Oe.string,
  left: Oe.number,
  offsetLeft: Oe.number,
  offsetTop: Oe.number,
  top: Oe.number,
  applyPositionStyle: Oe.bool,
  unstyled: Oe.bool
};
jf.displayName = "Tooltip";
const B0 = jf;
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
function H0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, df(e, t);
}
var ih = {
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
      var f = this.node, d = f.parentNode, c = f.getBoundingClientRect ? f.getBoundingClientRect() : ih, h = d != null && d.getBoundingClientRect ? d.getBoundingClientRect() : ih;
      return {
        rect: c,
        parentRect: h
      };
    }, a.render = function() {
      return /* @__PURE__ */ r.createElement(e, cf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, i;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var qm = /* @__PURE__ */ de.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), j0 = qm.Provider;
qm.Consumer;
var U0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
  var n = e.left, i = n === void 0 ? 0 : n, a = e.offsetLeft, l = a === void 0 ? 10 : a, f = e.offsetTop, d = f === void 0 ? 10 : f, c = e.parentRect, h = e.rect, y = e.style, v = y === void 0 ? Gm : y, S = e.top, R = S === void 0 ? 0 : S, k = e.unstyled, F = k === void 0 ? !1 : k, w = e.nodeRef, m = K0(e, U0), _, D = !1, P = !1;
  if (h && c) {
    var O = i, L = R;
    if (c.width) {
      var U = O + l + h.width - c.width, V = h.width - O - l;
      D = U > 0 && U > V;
    } else {
      var q = O + l + h.width - window.innerWidth, ce = h.width - O - l;
      D = q > 0 && q > ce;
    }
    if (c.height) {
      var ee = L + d + h.height - c.height, j = h.height - L - d;
      P = ee > 0 && ee > j;
    } else
      P = L + d + h.height > window.innerHeight;
    O = D ? O - h.width - l : O + l, L = P ? L - h.height - d : L + d, O = Math.round(O), L = Math.round(L), _ = "translate(" + O + "px, " + L + "px)";
  }
  return /* @__PURE__ */ r.createElement(B0, tc({
    ref: w,
    style: tc({
      left: 0,
      top: 0,
      transform: _
    }, !F && v)
  }, m), /* @__PURE__ */ r.createElement(j0, {
    value: {
      isFlippedVertically: !P,
      isFlippedHorizontally: !D
    }
  }, t));
}
Zm.propTypes = {
  nodeRef: Oe.oneOfType([Oe.string, Oe.func, Oe.object])
};
const Qm = V0(Zm);
var ff = /* @__PURE__ */ function() {
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
function G0(e) {
  return !!e && "createSVGPoint" in e;
}
function q0(e) {
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
var Fd = {
  x: 0,
  y: 0
};
function eS(e) {
  if (!e)
    return is({}, Fd);
  if (Z0(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : is({}, Fd);
  if (Q0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : is({}, Fd);
}
function oh(e, t) {
  if (!e || !t)
    return null;
  var n = eS(t), i = X0(e) ? e.ownerSVGElement : e, a = q0(i) ? i.getScreenCTM() : null;
  if (G0(i) && a) {
    var l = i.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(a.inverse()), new ff({
      x: l.x,
      y: l.y
    });
  }
  var f = e.getBoundingClientRect();
  return new ff({
    x: n.x - f.left - e.clientLeft,
    y: n.y - f.top - e.clientTop
  });
}
function lh(e, t) {
  if (Y0(e) && t)
    return oh(e, t);
  if (J0(e)) {
    var n = e, i = n.target;
    if (i)
      return oh(i, n);
  }
  return null;
}
const Jm = (e) => {
  const { tableData: t, config: n, formatNumber: i, capitalize: a, formatDate: l, formatTooltipsDate: f, parseDate: d, setSharedFilter: c } = de.useContext(Ct), { xScale: h, yScale: y, showTooltip: v, hideTooltip: S } = e, { xAxis: R, visualizationType: k, orientation: F, yAxis: w, runtime: m } = n, _ = (W, B) => {
    const { x: ie, y: ae } = B, Q = {
      data: W || {},
      dataXPosition: ie + 10,
      dataYPosition: ae
    };
    return {
      tooltipLeft: Q.dataXPosition,
      tooltipTop: Q.dataYPosition,
      tooltipData: Q
    };
  }, D = (W, B) => {
    W.stopPropagation();
    const ie = lh(W), { x: ae, y: se } = ie, { data: Q, arc: K } = B ?? {}, ne = L(ae - Number(n.yAxis.size || 0)), ue = k !== "Pie" ? n.series.filter((Te) => Te.tooltip === !0).map((Te) => Te.dataKey) : n.series.map((Te) => Te.dataKey);
    ue.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((Te) => {
      Te.confidenceIntervals.map((J) => {
        J.showInTooltip && (ue.push(J.high), ue.push(J.low));
      });
    });
    function ze(Te) {
      let J = [];
      for (let Me in Te)
        Te.hasOwnProperty(Me) && J.push(Te[Me].name);
      return J;
    }
    ue.push(...ze(n.columns)), ue.push(...ze(n.columns));
    const be = q(ne, ue), ye = t.filter((Te) => Te[R.dataKey] === U(se)), Pe = F === "vertical" ? be : ye, oe = (Te) => {
      const J = n.series.filter((we) => we.dataKey === Te)[0];
      return J != null && J.axis ? String(J.axis).toLowerCase() : "left";
    }, Ee = (() => {
      var Xe, Ze, et;
      const Te = n.columns, J = [], Me = [];
      for (const [Ue, Et] of Object.entries(Te)) {
        const Ke = {
          addColPrefix: n.columns[Ue].prefix,
          addColSuffix: n.columns[Ue].suffix,
          addColRoundTo: n.columns[Ue].roundToPlace ? n.columns[Ue].roundToPlace : "",
          addColCommas: n.columns[Ue].commas
        };
        let We = null;
        n.visualizationType === "Pie" ? We = K == null ? void 0 : K.data[Et.name] : We = (Xe = Pe[0]) == null ? void 0 : Xe[Et.name];
        const Be = Tf(We, "left", !0, n, Ke);
        Et.tooltips && J.push([Et.label, Be]);
      }
      const we = [];
      return J.forEach((Ue) => {
        we.push([Ue[0], Ue[1]]);
      }), k === "Pie" && Me.push(
        // ignore
        [n.xAxis.dataKey, Q],
        [n.runtime.yAxis.dataKey, i(K == null ? void 0 : K.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((K == null ? void 0 : K.endAngle) - (K == null ? void 0 : K.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && Me.push([n.xAxis.dataKey, U(se)]), k !== "Pie" && k !== "Forest Plot" && Me.push(
        ...(et = (Ze = ce()) == null ? void 0 : Ze.filter((Ue) => {
          var Et, Ke;
          return ((Et = n.series) == null ? void 0 : Et.find((We) => We.dataKey === Ue && (We == null ? void 0 : We.tooltip))) || ((Ke = n.xAxis) == null ? void 0 : Ke.dataKey) == Ue;
        })) == null ? void 0 : et.flatMap((Ue) => {
          var Be, $e, ft, qe;
          const Et = n.general.showMissingDataLabel && !((Be = Pe[0]) != null && Be[Ue]);
          let Ke = Ue === n.xAxis.dataKey ? ($e = Pe[0]) == null ? void 0 : $e[Ue] : i((ft = Pe[0]) == null ? void 0 : ft[Ue], oe(Ue));
          Ke = Et ? "N/A" : Ke;
          const We = (qe = n.preliminaryData) == null ? void 0 : qe.find((it) => {
            var yt;
            return it.label && it.type === "suppression" && it.displayTooltip && ((yt = Pe[0]) == null ? void 0 : yt[Ue]) === it.value && (!it.column || Ue === it.column);
          });
          return We && (Ke = We.label), [[Ue, Ke, oe(Ue)]];
        })
      ), [...Me, ...we];
    })();
    if (!Ee)
      return;
    const he = _(Ee, ie);
    v(he);
  }, P = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      S();
    }, 3e3) : S();
  }, O = (W) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let B = h.step();
      const ae = Math.floor(Number(W) / B);
      return h.domain()[ae - 1];
    }
    if (Cn(n.xAxis) && n.visualizationType !== "Combo") {
      const B = gp((Q) => d(Q[n.xAxis.dataKey])).left, ie = h.invert(h(W)), ae = B(n.data, ie, 1);
      return d(n.data[ae - 1][n.xAxis.dataKey]);
    }
  }, L = (W, B = !1) => {
    if (k !== "Pie" && F !== "horizontal") {
      if (h.type === "point" || R.type === "continuous" || Cn(R)) {
        let ie = null, ae = Number.MAX_VALUE, se = W;
        return t.forEach((Q) => {
          const K = Cn(R) ? h(d(Q[R.dataKey])) : h(Q[R.dataKey]);
          let ne = n.barHeight;
          const ue = Math.abs(Number(K - se + (B ? ne * 2 : 0)));
          ue <= ae && (ae = ue, ie = (Cn(R), Q[R.dataKey]));
        }), ie;
      }
      if (n.xAxis.type === "categorical" || k === "Combo" && F !== "horizontal" && k !== "Forest Plot") {
        let ae = (h.range()[1] - h.range()[0]) / (h.domain().length + 1);
        const Q = Math.floor((Number(W) - ae / 2) / ae);
        return h.domain()[Q];
      }
      if (Cn(R) && k !== "Combo" && F !== "horizontal") {
        const ie = gp((K) => d(K[n.xAxis.dataKey])).left, ae = h.invert(W), se = ie(n.data, ae, 1);
        return d(n.data[se - 1][n.xAxis.dataKey]);
      }
    }
  }, U = (W, B) => {
    if (k === "Pie")
      return;
    let ie = Number.MAX_VALUE, ae = null;
    return t.forEach((se, Q) => {
      const K = y(k !== "Forest Plot" ? se[n.xAxis.dataKey] : Q), ne = Math.abs(K - W);
      ne < ie && (ie = ne, ae = B ? se[B] : se[n.xAxis.dataKey]);
    }), ae;
  }, V = (W) => {
    var B, ie;
    try {
      const ae = lh(W), { x: se } = ae;
      if (!se)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let Q = L(se, !0), K = (B = n.data) == null ? void 0 : B.filter((ne) => ne[n.xAxis.dataKey] === Q);
      if (!Q)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (Cn(R) && Q && (Q = new Date(Q), Q = l(Q), K = (ie = n.data) == null ? void 0 : ie.filter((ne) => l(new Date(ne[n.xAxis.dataKey])) === Q)), !K[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${Q}`);
      c && (n != null && n.uid) && (K != null && K[0]) && c(n.uid, K[0]);
    } catch (ae) {
      console.error(ae.message);
    }
  }, q = (W, B) => {
    try {
      let ie;
      return R.type === "categorical" ? ie = t.filter((se) => se[R.dataKey] === W) : ie = t.filter((se) => se[R.dataKey] === W), !ie || ie.length === 0 ? [] : ie.map((se) => Object.fromEntries(Object.entries(se).filter(([Q, K]) => B.includes(Q))));
    } catch (ie) {
      console.error("COVE", ie);
    }
  }, ce = () => {
    var W;
    try {
      let B, ie = [], ae = [];
      if ((W = n.series) == null || W.forEach((se) => {
        se.type === "Forecasting" && (ie.push(se.stageColumn), se == null || se.confidenceIntervals.forEach((Q) => {
          Q.showInTooltip === !0 && (ae.push(Q.low), ae.push(Q.high));
        }));
      }), !n.dashboard)
        switch (k) {
          case "Combo":
            B = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...ae];
            break;
          case "Forecasting":
            B = [m.xAxis.dataKey, ...ie, ...ae];
            break;
          case "Line":
            B = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            B = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            B = F === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            B = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (B = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ie, ...ae]), B;
    } catch (B) {
      console.error("COVE", B);
    }
  }, ee = (W) => {
    const { dataXPosition: B, dataYPosition: ie } = W;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${B}px, ${Number(ie)}px)`
    };
  }, j = (W) => {
    var ie, ae;
    let B = n.series.filter((se) => se.dataKey === W);
    return (ie = B[0]) != null && ie.name ? (ae = B[0]) == null ? void 0 : ae.name : W;
  };
  return {
    getIncludedTooltipSeries: ce,
    getXValueFromCoordinate: L,
    getXValueFromCoordinateDate: O,
    getYScaleValues: q,
    handleTooltipClick: V,
    handleTooltipMouseOff: P,
    handleTooltipMouseOver: D,
    TooltipListItem: ({ item: W }) => {
      const [B, ie] = W, [ae, se, Q] = ie;
      if (k === "Forest Plot")
        return ae === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${Cn(w) ? l(d(ae, !1)) : se}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${j(ae)}: ${i(se, "left")}`);
      const K = n.tooltips.dateDisplayFormat ? f(d(se, !1)) : l(d(se, !1));
      return k === "Bar" && F === "horizontal" && ae === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? K : se}`) : ae === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${Cn(R) ? K : se}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${j(ae)}: ${se}`);
    },
    tooltipStyles: ee
  };
};
function Uf(e, { threshold: t = 0, root: n = null, rootMargin: i = "0%", freezeOnceVisible: a = !1 }) {
  const [l, f] = de.useState(), d = (l == null ? void 0 : l.isIntersecting) && a, c = ([h]) => {
    f(h);
  };
  return de.useEffect(() => {
    setTimeout(() => {
      const h = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || d || !h)
        return;
      const v = { threshold: t, root: n, rootMargin: i }, S = new IntersectionObserver(c, v);
      return S.observe(h), () => S.disconnect();
    }, 500);
  }, [e, t, n, i, d]), l;
}
const pf = (e, t = !1) => {
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
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function nS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function nc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, i = e.alignItems, a = i === void 0 ? "center" : i, l = e.margin, f = l === void 0 ? "0" : l, d = e.display, c = d === void 0 ? "flex" : d, h = e.children, y = nS(e, tS);
  return /* @__PURE__ */ r.createElement("div", hf({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: a,
      flexDirection: n,
      margin: f
    }
  }, y), h);
}
nc.propTypes = {
  alignItems: Oe.string,
  margin: Oe.oneOfType([Oe.string, Oe.number]),
  children: Oe.node,
  display: Oe.string
};
var rS = ["flex", "label", "margin", "align", "children"];
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
function aS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function rc(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, i = e.label, a = e.margin, l = a === void 0 ? "5px 0" : a, f = e.align, d = f === void 0 ? "left" : f, c = e.children, h = aS(e, rS);
  return /* @__PURE__ */ r.createElement("div", mf({
    className: "visx-legend-label",
    style: {
      justifyContent: d,
      display: "flex",
      flex: n,
      margin: l
    }
  }, h), c || i);
}
rc.propTypes = {
  align: Oe.string,
  label: Oe.node,
  flex: Oe.oneOfType([Oe.string, Oe.number]),
  margin: Oe.oneOfType([Oe.string, Oe.number]),
  children: Oe.node
};
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
function Kf(e) {
  var t = e.fill, n = e.width, i = e.height, a = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: yf({
      width: n,
      height: i,
      background: t
    }, a)
  });
}
Kf.propTypes = {
  fill: Oe.string,
  width: Oe.oneOfType([Oe.string, Oe.number]),
  height: Oe.oneOfType([Oe.string, Oe.number])
};
function ey(e) {
  var t = e.fill, n = e.width, i = e.height, a = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof i == "string" || typeof i > "u" ? 0 : i, d = Math.max(l, f), c = d / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: d,
    height: d
  }, /* @__PURE__ */ r.createElement(at, {
    top: c,
    left: c
  }, /* @__PURE__ */ r.createElement("circle", {
    r: c,
    fill: t,
    style: a
  })));
}
ey.propTypes = {
  fill: Oe.string,
  width: Oe.oneOfType([Oe.string, Oe.number]),
  height: Oe.oneOfType([Oe.string, Oe.number])
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
  fill: Oe.string,
  width: Oe.oneOfType([Oe.string, Oe.number]),
  height: Oe.oneOfType([Oe.string, Oe.number])
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
var Md = function() {
};
function iS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, i = e.fill, a = i === void 0 ? Md : i, l = e.size, f = l === void 0 ? Md : l, d = e.width, c = e.height, h = e.label, y = e.item, v = e.itemIndex, S = e.shapeStyle, R = S === void 0 ? Md : S, k = {
    width: d,
    height: c,
    item: y,
    itemIndex: v,
    label: h,
    fill: a(os({}, h)),
    size: f(os({}, h)),
    style: R(os({}, h))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(ey, k) : n === "line" ? /* @__PURE__ */ r.createElement(ty, k) : /* @__PURE__ */ r.createElement(Kf, k) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, k) : n ? /* @__PURE__ */ r.createElement(n, k) : null;
}
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ac.apply(this, arguments);
}
function ny(e) {
  var t = e.shape, n = t === void 0 ? Kf : t, i = e.width, a = e.height, l = e.margin, f = e.label, d = e.item, c = e.itemIndex, h = e.fill, y = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(ac({}, f)) : i,
      height: y ? y(ac({}, f)) : a,
      margin: l
    }
  }, iS({
    shape: n,
    item: d,
    itemIndex: c,
    label: f,
    width: i,
    height: a,
    fill: h,
    shapeStyle: v
  }));
}
ny.propTypes = {
  itemIndex: Oe.number.isRequired,
  margin: Oe.oneOfType([Oe.string, Oe.number]),
  width: Oe.oneOfType([Oe.string, Oe.number]),
  height: Oe.oneOfType([Oe.string, Oe.number])
};
function ry(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function sh(e) {
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
  var t = e.className, n = e.style, i = n === void 0 ? uS : n, a = e.scale, l = e.shape, f = e.domain, d = e.fill, c = d === void 0 ? sh : d, h = e.size, y = h === void 0 ? sh : h, v = e.labelFormat, S = v === void 0 ? ry : v, R = e.labelTransform, k = R === void 0 ? oS : R, F = e.shapeWidth, w = F === void 0 ? 15 : F, m = e.shapeHeight, _ = m === void 0 ? 15 : m, D = e.shapeMargin, P = D === void 0 ? "2px 4px 2px 0" : D, O = e.shapeStyle, L = e.labelAlign, U = L === void 0 ? "left" : L, V = e.labelFlex, q = V === void 0 ? "1" : V, ce = e.labelMargin, ee = ce === void 0 ? "0 4px" : ce, j = e.itemMargin, Y = j === void 0 ? "0" : j, W = e.direction, B = W === void 0 ? "column" : W, ie = e.itemDirection, ae = ie === void 0 ? "row" : ie, se = e.legendLabelProps, Q = e.children, K = sS(e, lS), ne = f || ("domain" in a ? a.domain() : []), ue = k({
    scale: a,
    labelFormat: S
  }), ze = ne.map(ue);
  return Q ? /* @__PURE__ */ r.createElement(r.Fragment, null, Q(ze)) : /* @__PURE__ */ r.createElement("div", {
    className: Ln("visx-legend", t),
    style: ls({}, i, {
      flexDirection: B
    })
  }, ze.map(function(be, ye) {
    return /* @__PURE__ */ r.createElement(nc, ls({
      key: "legend-" + be.text + "-" + ye,
      margin: Y,
      flexDirection: ae
    }, K), /* @__PURE__ */ r.createElement(ny, {
      shape: l,
      height: _,
      width: w,
      margin: P,
      item: ne[ye],
      itemIndex: ye,
      label: be,
      fill: c,
      size: y,
      shapeStyle: O
    }), /* @__PURE__ */ r.createElement(rc, ls({
      label: be.text,
      flex: q,
      margin: ee,
      align: U
    }, se)));
  }));
}
ay.propTypes = {
  children: Oe.func,
  className: Oe.string,
  domain: Oe.array,
  shapeWidth: Oe.oneOfType([Oe.string, Oe.number]),
  shapeHeight: Oe.oneOfType([Oe.string, Oe.number]),
  shapeMargin: Oe.oneOfType([Oe.string, Oe.number]),
  labelAlign: Oe.string,
  labelFlex: Oe.oneOfType([Oe.string, Oe.number]),
  labelMargin: Oe.oneOfType([Oe.string, Oe.number]),
  itemMargin: Oe.oneOfType([Oe.string, Oe.number]),
  fill: Oe.func,
  size: Oe.func,
  shapeStyle: Oe.func
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
const bc = (e, t) => {
  var F;
  const { formatDate: n, parseDate: i } = de.useContext(Ct);
  let a = [], l = "", f = [], d = [];
  ((F = e.series) == null ? void 0 : F.length) > 0 && e.data ? (a = e.series[0], l = e.series[0].dataKey, f = e.highlightedBarValues, d = e.data.map((w) => w[e.xAxis.dataKey])) : (a = [], l = "", f = [], d = []);
  const c = (w, m) => {
    const _ = [...e.highlightedBarValues];
    _[m].borderWidth = w.target.value, t({
      ...e,
      highlightedBarValues: _
    });
  }, h = (w, m) => {
    w.preventDefault();
    const _ = [...e.highlightedBarValues];
    _[m].value = w.target.value, _[m].dataKey = l, t({
      ...e,
      highlightedBarValues: _
    });
  }, y = (w, m) => {
    w.preventDefault();
    const _ = [...e.highlightedBarValues];
    _.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: _
    });
  }, v = (w, m) => {
    w.preventDefault();
    const _ = [...e.highlightedBarValues];
    _.splice(m, 1), t({
      ...e,
      highlightedBarValues: _
    });
  }, S = (w, m) => {
    const _ = [...e.highlightedBarValues];
    _[m].color = w.target.value, t({
      ...e
    });
  }, R = (w, m) => {
    const _ = [...e.highlightedBarValues];
    _[m].legendLabel = w.target.value, t({
      ...e,
      copyOfHighlightedBarValues: _
    });
  }, k = () => {
  };
  return k.checkFontColor = (w, m, _) => {
    if (e.xAxis.type === "date") {
      if (k.formatDates(m).includes(w))
        return "#000";
    } else if (m.includes(w))
      return "#000";
    return _;
  }, k.formatDates = (w) => w.map((m) => m ? n(i(m)) : !1), k.findDuplicates = (w) => {
    const m = {};
    return w == null ? void 0 : w.filter((D) => {
      const { legendLabel: P } = D;
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
    handleUpdateHighlightedBorderWidth: c
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
}, fS = (e, t) => e ? t ? "35px" : "15px" : "0px", oy = de.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: i, highlightReset: a, currentViewport: l, formatLabels: f, skipId: d = "legend" }, c) => {
  const { innerClasses: h, containerClasses: y } = dS(e), { runtime: v, legend: S } = e;
  if (!S)
    return null;
  const R = (S == null ? void 0 : S.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !S.hide, k = {
    marginBottom: R ? "15px" : "0px",
    marginTop: R && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : fS(R, e.brush.active)
  }, { HighLightedBarUtils: F } = bc(e);
  let w = F.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { ref: c, style: k, id: d || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, S.label && /* @__PURE__ */ r.createElement("h3", null, Li(S.label)), S.description && /* @__PURE__ */ r.createElement("p", null, Li(S.description)), /* @__PURE__ */ r.createElement(cS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (m) => {
    var _, D, P, O;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: h.join(" ") }, f(m).map((L, U) => {
      var ce, ee, j, Y;
      let V = ["legend-item", `legend-text--${L.text.replace(" ", "").toLowerCase()}`], q = L.datum;
      if (e.exclusions.active && ((ce = e.exclusions.keys) != null && ce.includes(q)))
        return null;
      if (v.seriesLabels) {
        let W = e.runtime.seriesLabelsAll.indexOf(q);
        q = e.runtime.seriesKeys[W], ((ee = v == null ? void 0 : v.forecastingSeriesKeys) == null ? void 0 : ee.length) > 0 && (q = L.text);
      }
      return n.length > 0 && n.includes(q) === !1 && V.push("inactive"), /* @__PURE__ */ r.createElement(
        nc,
        {
          className: V.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (W) => {
            W.key === "Enter" && (W.preventDefault(), i(L));
          },
          onClick: (W) => {
            W.preventDefault(), i(L);
          },
          role: "button"
        },
        /* @__PURE__ */ r.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(an, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: L.value, strokeWidth: 2, strokeDasharray: iy((j = e.series[U]) != null && j.type ? (Y = e.series[U]) == null ? void 0 : Y.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(up, { viewport: l, margin: "0", fill: L.value, display: !0 }))),
        /* @__PURE__ */ r.createElement(rc, { align: "left", margin: "0 0 0 4px" }, L.text)
      );
    }), w.map((L, U) => {
      let V = "legend-item", q = L.legendLabel;
      return q ? (n.length > 0 && n.includes(q) === !1 && (V += " inactive"), /* @__PURE__ */ r.createElement(
        nc,
        {
          className: V,
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (ce) => {
            ce.key === "Enter" && (ce.preventDefault(), i(L.legendLabel));
          },
          onClick: (ce) => {
            ce.preventDefault(), i(L.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(up, { fill: "transparent", borderColor: L.color ? L.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(rc, { align: "left", margin: "0 0 0 4px" }, L.legendLabel ? L.legendLabel : L.value)
      )) : !1;
    })), /* @__PURE__ */ r.createElement(r.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((L) => L.label && L.type === "effect" && L.style)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (D = e == null ? void 0 : e.preliminaryData) == null ? void 0 : D.map((L, U) => /* @__PURE__ */ r.createElement(r.Fragment, null, L.label && L.type === "effect" && L.style && /* @__PURE__ */ r.createElement("div", { key: U, className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.lineCode), /* @__PURE__ */ r.createElement("p", null, " ", L.label)))))), !e.legend.hideSuppressedLabels && ((P = e == null ? void 0 : e.preliminaryData) == null ? void 0 : P.some((L) => L.label && L.displayLegend && L.type === "suppression" && L.value && ((L == null ? void 0 : L.style) || L.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.map(
      (L, U) => L.displayLegend && L.type === "suppression" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: U + "Bar", className: `legend-preliminary ${L.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.iconCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label))), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: U + "Line", className: "legend-preliminary " }, /* @__PURE__ */ r.createElement("span", null, L.lineCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label))), e.visualizationType === "Combo" && /* @__PURE__ */ r.createElement(r.Fragment, null, L.symbol && L.iconCode && /* @__PURE__ */ r.createElement("div", { key: U + "Combo", className: `legend-preliminary ${L.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: L.symbol }, L.iconCode), /* @__PURE__ */ r.createElement("p", { className: L.type }, L.label)), L.style && L.lineCode && /* @__PURE__ */ r.createElement("div", { key: U + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", null, L.lineCode), /* @__PURE__ */ r.createElement("p", null, L.label))))
    )))));
  }), n.length > 0 && /* @__PURE__ */ r.createElement(fs, { onClick: (m) => a(m), style: { marginTop: "1rem" } }, "Reset"));
});
function pS(e) {
  return Vy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const ly = (e, t, n, i) => (a) => {
  var S, R, k, F, w;
  const { visualizationType: l, visualizationSubType: f, series: d, runtime: c } = e, h = (m) => {
    var _;
    return e.legend.reverseLabelOrder && ((_ = e.legend) == null ? void 0 : _.position) === "bottom" ? m.reverse() : m;
  }, y = (S = e.legend) == null ? void 0 : S.colorCode;
  if (l === "Deviation Bar") {
    const [m, _] = zu[e.twoColor.palette], D = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, P = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: _
    };
    return h([D, P]);
  }
  if (l === "Bar" && f === "regular" && y && (d == null ? void 0 : d.length) === 1) {
    let m = dr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, n.length);
    const _ = /* @__PURE__ */ new Set();
    t.forEach((P) => _.add(P[y]));
    const D = Array.from(_).map((P, O) => ({
      datum: P,
      index: O,
      text: P,
      value: m[O]
    }));
    return h(D);
  }
  if (((R = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : R.length) > 0) {
    let m = [];
    return (F = (k = e.runtime) == null ? void 0 : k.forecastingSeriesKeys) == null || F.map((_, D) => {
      var P;
      return (P = _ == null ? void 0 : _.stages) == null ? void 0 : P.map((O, L) => {
        var q, ce, ee, j;
        let U = (q = Iu[O.color]) != null && q[2] ? (ce = Iu[O.color]) == null ? void 0 : ce[2] : (ee = dr[O.color]) != null && ee[2] ? (j = dr[O.color]) == null ? void 0 : j[2] : "#ccc";
        const V = {
          datum: O.key,
          index: L,
          text: O.key,
          value: U
        };
        m.push(V);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((_, D) => {
      let P = dr[e.palette][D] ? dr[e.palette][D] : "#ccc";
      const O = {
        datum: _,
        index: D,
        text: _,
        value: P
      };
      m.push(O);
    }), h(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((D) => {
      m.add(D.name || D.dataKey);
    });
    const _ = Array.from(m).map((D, P) => ({
      datum: D,
      index: P,
      text: D,
      value: i(D)
    }));
    return h(_);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let _ = [];
    return (w = e.suppressedData) == null || w.forEach(({ label: D, icon: P }, O) => {
      if (D && P) {
        const L = {
          datum: D,
          index: m + O,
          text: D,
          icon: /* @__PURE__ */ r.createElement(pS, { color: "#000", size: 15 })
        };
        _.push(L);
      }
    }), [...a, ..._];
  }
  return h(a);
}, Eu = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), hS = (e) => {
  const { transformedData: t, config: n, colorScale: i, currentViewport: a, dimensions: l, highlight: f, highlightReset: d, seriesHighlight: c } = de.useContext(Ct), { tooltipData: h, showTooltip: y, hideTooltip: v, tooltipOpen: S, tooltipLeft: R, tooltipTop: k } = Xm(), { handleTooltipMouseOver: F, handleTooltipMouseOff: w, TooltipListItem: m } = Jm({
    xScale: !1,
    yScale: !1,
    showTooltip: y,
    hideTooltip: v
  }), [_, D] = de.useState(void 0), [P, O] = de.useState(!1), L = Object.values(n.columns).filter((K) => K.showInViz), U = L.length > 0, V = U ? "pivotColumn" : void 0, q = de.useMemo(() => {
    if (U) {
      let K = [];
      const ne = n.yAxis.dataKey, ue = L.map((ye) => ye.name), ze = [ne, ...ue], be = n.xAxis.dataKey;
      return t.forEach((ye) => {
        ze.forEach((Pe) => {
          const oe = ye[Pe];
          oe && K.push({
            [V]: oe,
            [be]: `${ye[be]} - ${Pe}`
          });
        });
      }), K;
    }
    return t;
  }, [t, U]), ce = de.useMemo(() => {
    if (U) {
      const K = {};
      q.forEach((ze) => {
        K[ze[n.xAxis.dataKey]] || (K[ze[n.xAxis.dataKey]] = !0);
      });
      const ne = Object.entries(K).length;
      let ue = n.customColors || dr[n.palette];
      return ue = ue.slice(0, ne), Zh({
        domain: Object.keys(K),
        range: ue,
        unknown: null
      });
    }
    return i;
  }, [i, U]), ee = de.useRef(), j = Uf(ee, {
    freezeOnceVisible: !1
  });
  de.useEffect(() => {
    document.querySelector(".isEditor") && O((ne) => !0);
  }), de.useEffect(() => {
    j != null && j.isIntersecting && n.animate && !P && setTimeout(() => {
      O(!0);
    }, 500);
  }, [j == null ? void 0 : j.isIntersecting, n.animate]);
  const Y = ({ arcs: K, path: ne, getKey: ue }) => {
    const ze = Xx(K, ue, {
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
    }, [h]), /* @__PURE__ */ r.createElement(r.Fragment, null, ze.map(({ item: be, props: ye, key: Pe }, oe) => /* @__PURE__ */ r.createElement(at, { className: be.data[n.xAxis.dataKey], key: `${Pe}-${oe}`, style: { opacity: n.legend.behavior === "highlight" && c.length > 0 && c.indexOf(be.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      qp.path,
      {
        d: Wx(
          [ye.startAngle, ye.endAngle],
          (Ie, Ee) => ne({
            ...be,
            startAngle: Ie,
            endAngle: Ee
          })
        ),
        fill: ce(be.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Ie) => F(Ie, { data: be.data[n.runtime.xAxis.dataKey], arc: be }),
        onMouseLeave: (Ie) => w()
      }
    ))), ze.map(({ item: be, key: ye }, Pe) => {
      const [oe, Ie] = ne.centroid(be), Ee = be.endAngle - be.startAngle >= 0.1;
      let he = "#FFF";
      return ce(be.data[n.runtime.xAxis.dataKey]) && (he = jo(he, ce(be.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ r.createElement(qp.g, { key: `${ye}${Pe}` }, Ee && /* @__PURE__ */ r.createElement(kt, { style: { fill: he }, x: oe, y: Ie, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((be.endAngle - be.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [W] = l;
  n && n.legend && !n.legend.hide && a === "lg" && (W = W * 0.73);
  const B = n.heights.vertical, ie = Math.min(W, B) / 2, ae = B / 2, se = n.pieType === "Donut" ? 75 : ie;
  de.useEffect(() => {
    if (c.length > 0 && n.legend.behavior !== "highlight") {
      let K = [];
      q.forEach((ne) => {
        c.indexOf(ne[n.runtime.xAxis.dataKey]) !== -1 && K.push(ne);
      }), D(K);
    } else
      D(void 0);
  }, [c]);
  const Q = ly(n, [], q, ce);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Or, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: ie * 2, height: B, className: `animated-pie group ${n.animate === !1 || P ? "animated" : ""}`, role: "img", "aria-label": pf(n) }, /* @__PURE__ */ r.createElement(at, { top: ae, left: ie }, /* @__PURE__ */ r.createElement(
    o0,
    {
      data: _ || q,
      pieValue: (K) => K[V || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ie - se,
      outerRadius: ie
    },
    (K) => /* @__PURE__ */ r.createElement(Y, { ...K, getKey: (ne) => ne.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: ee }), h && Object.entries(h.data).length > 0 && S && y && h.dataYPosition && h.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Qm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: R, top: k }, /* @__PURE__ */ r.createElement("ul", null, typeof h == "object" && Object.entries(h.data).map((K, ne) => /* @__PURE__ */ r.createElement(m, { item: K, key: ne })))))), /* @__PURE__ */ r.createElement(oy, { config: n, colorScale: ce, seriesHighlight: c, highlight: f, highlightReset: d, currentViewport: a, formatLabels: Q }));
};
function bs(e) {
  return e.split("-")[1];
}
function Yf(e) {
  return e === "y" ? "height" : "width";
}
function Oi(e) {
  return e.split("-")[0];
}
function Ss(e) {
  return ["top", "bottom"].includes(Oi(e)) ? "x" : "y";
}
function uh(e, t, n) {
  let { reference: i, floating: a } = e;
  const l = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, d = Ss(t), c = Yf(d), h = i[c] / 2 - a[c] / 2, y = d === "x";
  let v;
  switch (Oi(t)) {
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
  const { x: i, y: a, platform: l, rects: f, elements: d, strategy: c } = e, { boundary: h = "clippingAncestors", rootBoundary: y = "viewport", elementContext: v = "floating", altBoundary: S = !1, padding: R = 0 } = t, k = sy(R), F = d[S ? v === "floating" ? "reference" : "floating" : v], w = ss(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(F))) == null || n ? F : F.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)), boundary: h, rootBoundary: y, strategy: c })), m = v === "floating" ? { ...f.floating, x: i, y: a } : f.reference, _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating)), D = await (l.isElement == null ? void 0 : l.isElement(_)) && await (l.getScale == null ? void 0 : l.getScale(_)) || { x: 1, y: 1 }, P = ss(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: _, strategy: c }) : m);
  return { top: (w.top - P.top + k.top) / D.y, bottom: (P.bottom - w.bottom + k.bottom) / D.y, left: (w.left - P.left + k.left) / D.x, right: (P.right - w.right + k.right) / D.x };
}
const mS = Math.min, yS = Math.max;
function gf(e, t, n) {
  return yS(e, mS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const gS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ic(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gS[t]);
}
function vS(e, t, n) {
  n === void 0 && (n = !1);
  const i = bs(e), a = Ss(e), l = Yf(a);
  let f = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (f = ic(f)), { main: f, cross: ic(f) };
}
const xS = { start: "end", end: "start" };
function zd(e) {
  return e.replace(/start|end/g, (t) => xS[t]);
}
const bS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: i, middlewareData: a, rects: l, initialPlacement: f, platform: d, elements: c } = t, { mainAxis: h = !0, crossAxis: y = !0, fallbackPlacements: v, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: k = !0, ...F } = e, w = Oi(i), m = Oi(f) === f, _ = await (d.isRTL == null ? void 0 : d.isRTL(c.floating)), D = v || (m || !k ? [ic(f)] : function(ee) {
      const j = ic(ee);
      return [zd(ee), j, zd(j)];
    }(f));
    v || R === "none" || D.push(...function(ee, j, Y, W) {
      const B = bs(ee);
      let ie = function(ae, se, Q) {
        const K = ["left", "right"], ne = ["right", "left"], ue = ["top", "bottom"], ze = ["bottom", "top"];
        switch (ae) {
          case "top":
          case "bottom":
            return Q ? se ? ne : K : se ? K : ne;
          case "left":
          case "right":
            return se ? ue : ze;
          default:
            return [];
        }
      }(Oi(ee), Y === "start", W);
      return B && (ie = ie.map((ae) => ae + "-" + B), j && (ie = ie.concat(ie.map(zd)))), ie;
    }(f, k, R, _));
    const P = [f, ...D], O = await uy(t, F), L = [];
    let U = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (h && L.push(O[w]), y) {
      const { main: ee, cross: j } = vS(i, l, _);
      L.push(O[ee], O[j]);
    }
    if (U = [...U, { placement: i, overflows: L }], !L.every((ee) => ee <= 0)) {
      var V, q;
      const ee = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, j = P[ee];
      if (j)
        return { data: { index: ee, overflows: U }, reset: { placement: j } };
      let Y = (q = U.find((W) => W.overflows[0] <= 0)) == null ? void 0 : q.placement;
      if (!Y)
        switch (S) {
          case "bestFit": {
            var ce;
            const W = (ce = U.map((B) => [B.placement, B.overflows.filter((ie) => ie > 0).reduce((ie, ae) => ie + ae, 0)]).sort((B, ie) => B[1] - ie[1])[0]) == null ? void 0 : ce[0];
            W && (Y = W);
            break;
          }
          case "initialPlacement":
            Y = f;
        }
      if (i !== Y)
        return { reset: { placement: Y } };
    }
    return {};
  } };
}, SS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: i } = t, a = await async function(l, f) {
      const { placement: d, platform: c, elements: h } = l, y = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), v = Oi(d), S = bs(d), R = Ss(d) === "x", k = ["left", "top"].includes(v) ? -1 : 1, F = y && R ? -1 : 1, w = typeof f == "function" ? f(l) : f;
      let { mainAxis: m, crossAxis: _, alignmentAxis: D } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return S && typeof D == "number" && (_ = S === "end" ? -1 * D : D), R ? { x: _ * F, y: m * k } : { x: m * k, y: _ * F };
    }(t, e);
    return { x: n + a.x, y: i + a.y, data: a };
  } };
}, ES = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: i, placement: a } = t, { mainAxis: l = !0, crossAxis: f = !1, limiter: d = { fn: (w) => {
      let { x: m, y: _ } = w;
      return { x: m, y: _ };
    } }, ...c } = e, h = { x: n, y: i }, y = await uy(t, c), v = Ss(Oi(a)), S = v === "x" ? "y" : "x";
    let R = h[v], k = h[S];
    if (l) {
      const w = v === "y" ? "bottom" : "right";
      R = gf(R + y[v === "y" ? "top" : "left"], R, R - y[w]);
    }
    if (f) {
      const w = S === "y" ? "bottom" : "right";
      k = gf(k + y[S === "y" ? "top" : "left"], k, k - y[w]);
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
const ch = Math.min, us = Math.max, oc = Math.round;
function cy(e) {
  const t = Yr(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, l = e.offsetHeight, f = oc(n) !== a || oc(i) !== l;
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
function _a(e) {
  return e instanceof Er(e).Element;
}
function fy(e) {
  return e instanceof Er(e).Node;
}
function dh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Er(e).ShadowRoot || e instanceof ShadowRoot;
}
function Sc(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Yr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function kS(e) {
  return ["table", "td", "th"].includes(Ia(e));
}
function vf(e) {
  const t = /firefox/i.test(dy()), n = Yr(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const l = n.contain;
    return l != null && l.includes(a);
  });
}
function py() {
  return !/^((?!chrome|android).)*safari/i.test(dy());
}
function Xf(e) {
  return ["html", "body", "#document"].includes(Ia(e));
}
function hy(e) {
  return _a(e) ? e : e.contextElement;
}
const my = { x: 1, y: 1 };
function Vo(e) {
  const t = hy(e);
  if (!Xr(t))
    return my;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: l } = cy(t);
  let f = (l ? oc(n.width) : n.width) / i, d = (l ? oc(n.height) : n.height) / a;
  return f && Number.isFinite(f) || (f = 1), d && Number.isFinite(d) || (d = 1), { x: f, y: d };
}
function gs(e, t, n, i) {
  var a, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const f = e.getBoundingClientRect(), d = hy(e);
  let c = my;
  t && (i ? _a(i) && (c = Vo(i)) : c = Vo(e));
  const h = d ? Er(d) : window, y = !py() && n;
  let v = (f.left + (y && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, S = (f.top + (y && ((l = h.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, R = f.width / c.x, k = f.height / c.y;
  if (d) {
    const F = Er(d), w = i && _a(i) ? Er(i) : i;
    let m = F.frameElement;
    for (; m && i && w !== F; ) {
      const _ = Vo(m), D = m.getBoundingClientRect(), P = getComputedStyle(m);
      D.x += (m.clientLeft + parseFloat(P.paddingLeft)) * _.x, D.y += (m.clientTop + parseFloat(P.paddingTop)) * _.y, v *= _.x, S *= _.y, R *= _.x, k *= _.y, v += D.x, S += D.y, m = Er(m).frameElement;
    }
  }
  return { width: R, height: k, top: S, right: v + R, bottom: S + k, left: v, x: v, y: S };
}
function Fa(e) {
  return ((fy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ec(e) {
  return _a(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yy(e) {
  return gs(Fa(e)).left + Ec(e).scrollLeft;
}
function vs(e) {
  if (Ia(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || dh(e) && e.host || Fa(e);
  return dh(t) ? t.host : t;
}
function gy(e) {
  const t = vs(e);
  return Xf(t) ? t.ownerDocument.body : Xr(t) && Sc(t) ? t : gy(t);
}
function vy(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = gy(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Er(i);
  return a ? t.concat(l, l.visualViewport || [], Sc(i) ? i : []) : t.concat(i, vy(i));
}
function fh(e, t, n) {
  return t === "viewport" ? ss(function(i, a) {
    const l = Er(i), f = Fa(i), d = l.visualViewport;
    let c = f.clientWidth, h = f.clientHeight, y = 0, v = 0;
    if (d) {
      c = d.width, h = d.height;
      const S = py();
      (S || !S && a === "fixed") && (y = d.offsetLeft, v = d.offsetTop);
    }
    return { width: c, height: h, x: y, y: v };
  }(e, n)) : _a(t) ? ss(function(i, a) {
    const l = gs(i, !0, a === "fixed"), f = l.top + i.clientTop, d = l.left + i.clientLeft, c = Xr(i) ? Vo(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * c.x, height: i.clientHeight * c.y, x: d * c.x, y: f * c.y };
  }(t, n)) : ss(function(i) {
    const a = Fa(i), l = Ec(i), f = i.ownerDocument.body, d = us(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = us(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let h = -l.scrollLeft + yy(i);
    const y = -l.scrollTop;
    return Yr(f).direction === "rtl" && (h += us(a.clientWidth, f.clientWidth) - d), { width: d, height: c, x: h, y };
  }(Fa(e)));
}
function ph(e) {
  return Xr(e) && Yr(e).position !== "fixed" ? e.offsetParent : null;
}
function hh(e) {
  const t = Er(e);
  let n = ph(e);
  for (; n && kS(n) && Yr(n).position === "static"; )
    n = ph(n);
  return n && (Ia(n) === "html" || Ia(n) === "body" && Yr(n).position === "static" && !vf(n)) ? t : n || function(i) {
    let a = vs(i);
    for (; Xr(a) && !Xf(a); ) {
      if (vf(a))
        return a;
      a = vs(a);
    }
    return null;
  }(e) || t;
}
function TS(e, t, n) {
  const i = Xr(t), a = Fa(t), l = gs(e, !0, n === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (i || !i && n !== "fixed")
    if ((Ia(t) !== "body" || Sc(a)) && (f = Ec(t)), Xr(t)) {
      const c = gs(t, !0);
      d.x = c.x + t.clientLeft, d.y = c.y + t.clientTop;
    } else
      a && (d.x = yy(a));
  return { x: l.left + f.scrollLeft - d.x, y: l.top + f.scrollTop - d.y, width: l.width, height: l.height };
}
const wS = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const l = n === "clippingAncestors" ? function(h, y) {
    const v = y.get(h);
    if (v)
      return v;
    let S = vy(h).filter((w) => _a(w) && Ia(w) !== "body"), R = null;
    const k = Yr(h).position === "fixed";
    let F = k ? vs(h) : h;
    for (; _a(F) && !Xf(F); ) {
      const w = Yr(F), m = vf(F);
      (k ? m || R : m || w.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = w : S = S.filter((_) => _ !== F), F = vs(F);
    }
    return y.set(h, S), S;
  }(t, this._c) : [].concat(n), f = [...l, i], d = f[0], c = f.reduce((h, y) => {
    const v = fh(t, y, a);
    return h.top = us(v.top, h.top), h.right = ch(v.right, h.right), h.bottom = ch(v.bottom, h.bottom), h.left = us(v.left, h.left), h;
  }, fh(t, d, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Xr(n), l = Fa(n);
  if (n === l)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ia(n) !== "body" || Sc(l)) && (f = Ec(n)), Xr(n))) {
    const h = gs(n);
    d = Vo(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - f.scrollLeft * d.x + c.x, y: t.y * d.y - f.scrollTop * d.y + c.y };
}, isElement: _a, getDimensions: function(e) {
  return Xr(e) ? cy(e) : e.getBoundingClientRect();
}, getOffsetParent: hh, getDocumentElement: Fa, getScale: Vo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || hh, l = this.getDimensions;
  return { reference: TS(t, await a(n), i), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yr(e).direction === "rtl" }, mh = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: wS, ...n }, l = { ...a.platform, _c: i };
  return (async (f, d, c) => {
    const { placement: h = "bottom", strategy: y = "absolute", middleware: v = [], platform: S } = c, R = v.filter(Boolean), k = await (S.isRTL == null ? void 0 : S.isRTL(d));
    if (S == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((O) => {
      let { name: L } = O;
      return L === "autoPlacement" || L === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && d || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let F = await S.getElementRects({ reference: f, floating: d, strategy: y }), { x: w, y: m } = uh(F, h, k), _ = h, D = {}, P = 0;
    for (let O = 0; O < R.length; O++) {
      const { name: L, fn: U } = R[O], { x: V, y: q, data: ce, reset: ee } = await U({ x: w, y: m, initialPlacement: h, placement: _, strategy: y, middlewareData: D, rects: F, platform: S, elements: { reference: f, floating: d } });
      w = V ?? w, m = q ?? m, D = { ...D, [L]: { ...D[L], ...ce } }, P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), ee && P <= 50 && (P++, typeof ee == "object" && (ee.placement && (_ = ee.placement), ee.rects && (F = ee.rects === !0 ? await S.getElementRects({ reference: f, floating: d, strategy: y }) : ee.rects), { x: w, y: m } = uh(F, _, k)), O = -1);
    }
    return { x: w, y: m, placement: _, strategy: y, middlewareData: D };
  })(e, t, { ...a, platform: l });
};
var Da, _i = { exports: {} }, yh = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Da = yh, function() {
  var e = r, t = 60103, n = 60106;
  Da.Fragment = 60107;
  var i = 60108, a = 60114, l = 60109, f = 60110, d = 60112, c = 60113, h = 60120, y = 60115, v = 60116, S = 60121, R = 60122, k = 60117, F = 60129, w = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), n = m("react.portal"), Da.Fragment = m("react.fragment"), i = m("react.strict_mode"), a = m("react.profiler"), l = m("react.provider"), f = m("react.context"), d = m("react.forward_ref"), c = m("react.suspense"), h = m("react.suspense_list"), y = m("react.memo"), v = m("react.lazy"), S = m("react.block"), R = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), F = m("react.debug_trace_mode"), m("react.offscreen"), w = m("react.legacy_hidden");
  }
  var _ = typeof Symbol == "function" && Symbol.iterator, D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function P(he) {
    for (var Te = arguments.length, J = new Array(Te > 1 ? Te - 1 : 0), Me = 1; Me < Te; Me++)
      J[Me - 1] = arguments[Me];
    O("error", he, J);
  }
  function O(he, Te, J) {
    var Me = D.ReactDebugCurrentFrame, we = "";
    if (q) {
      var Xe = U(q.type), Ze = q._owner;
      we += function(Ue, Et, Ke) {
        var We = "";
        if (Et) {
          var Be = Et.fileName, $e = Be.replace(L, "");
          if (/^index\./.test($e)) {
            var ft = Be.match(L);
            if (ft) {
              var qe = ft[1];
              qe && ($e = qe.replace(L, "") + "/" + $e);
            }
          }
          We = " (at " + $e + ":" + Et.lineNumber + ")";
        } else
          Ke && (We = " (created by " + Ke + ")");
        return `
    in ` + (Ue || "Unknown") + We;
      }(Xe, q._source, Ze && U(Ze.type));
    }
    (we += Me.getStackAddendum()) !== "" && (Te += "%s", J = J.concat([we]));
    var et = J.map(function(Ue) {
      return "" + Ue;
    });
    et.unshift("Warning: " + Te), Function.prototype.apply.call(console[he], console, et);
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
      case Da.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case a:
        return "Profiler";
      case i:
        return "StrictMode";
      case c:
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
          return Me = he, we = he.render, Xe = "ForwardRef", Ze = we.displayName || we.name || "", Me.displayName || (Ze !== "" ? Xe + "(" + Ze + ")" : Xe);
        case y:
          return U(he.type);
        case S:
          return U(he.render);
        case v:
          var Te = (J = he)._status === 1 ? J._result : null;
          if (Te)
            return U(Te);
      }
    var J, Me, we, Xe, Ze;
    return null;
  }
  var V = {};
  D.ReactDebugCurrentFrame;
  var q = null;
  function ce(he) {
    q = he;
  }
  var ee, j, Y, W = D.ReactCurrentOwner, B = Object.prototype.hasOwnProperty, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(he, Te, J, Me, we) {
    var Xe, Ze = {}, et = null, Ue = null;
    for (Xe in J !== void 0 && (et = "" + J), function(We) {
      if (B.call(We, "key")) {
        var Be = Object.getOwnPropertyDescriptor(We, "key").get;
        if (Be && Be.isReactWarning)
          return !1;
      }
      return We.key !== void 0;
    }(Te) && (et = "" + Te.key), function(We) {
      if (B.call(We, "ref")) {
        var Be = Object.getOwnPropertyDescriptor(We, "ref").get;
        if (Be && Be.isReactWarning)
          return !1;
      }
      return We.ref !== void 0;
    }(Te) && (Ue = Te.ref, function(We, Be) {
      if (typeof We.ref == "string" && W.current && Be && W.current.stateNode !== Be) {
        var $e = U(W.current.type);
        Y[$e] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(W.current.type), We.ref), Y[$e] = !0);
      }
    }(Te, we)), Te)
      B.call(Te, Xe) && !ie.hasOwnProperty(Xe) && (Ze[Xe] = Te[Xe]);
    if (he && he.defaultProps) {
      var Et = he.defaultProps;
      for (Xe in Et)
        Ze[Xe] === void 0 && (Ze[Xe] = Et[Xe]);
    }
    if (et || Ue) {
      var Ke = typeof he == "function" ? he.displayName || he.name || "Unknown" : he;
      et && function(We, Be) {
        var $e = function() {
          ee || (ee = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Be));
        };
        $e.isReactWarning = !0, Object.defineProperty(We, "key", { get: $e, configurable: !0 });
      }(Ze, Ke), Ue && function(We, Be) {
        var $e = function() {
          j || (j = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Be));
        };
        $e.isReactWarning = !0, Object.defineProperty(We, "ref", { get: $e, configurable: !0 });
      }(Ze, Ke);
    }
    return function(We, Be, $e, ft, qe, it, yt) {
      var ht = { $$typeof: t, type: We, key: Be, ref: $e, props: yt, _owner: it, _store: {} };
      return Object.defineProperty(ht._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ht, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ft }), Object.defineProperty(ht, "_source", { configurable: !1, enumerable: !1, writable: !1, value: qe }), Object.freeze && (Object.freeze(ht.props), Object.freeze(ht)), ht;
    }(he, et, Ue, we, Me, W.current, Ze);
  }
  Y = {};
  var se, Q = D.ReactCurrentOwner;
  function K(he) {
    q = he;
  }
  function ne(he) {
    return typeof he == "object" && he !== null && he.$$typeof === t;
  }
  function ue() {
    if (Q.current) {
      var he = U(Q.current.type);
      if (he)
        return `

Check the render method of \`` + he + "`.";
    }
    return "";
  }
  D.ReactDebugCurrentFrame, se = !1;
  var ze = {};
  function be(he, Te) {
    if (he._store && !he._store.validated && he.key == null) {
      he._store.validated = !0;
      var J = function(we) {
        var Xe = ue();
        if (!Xe) {
          var Ze = typeof we == "string" ? we : we.displayName || we.name;
          Ze && (Xe = `

Check the top-level render call using <` + Ze + ">.");
        }
        return Xe;
      }(Te);
      if (!ze[J]) {
        ze[J] = !0;
        var Me = "";
        he && he._owner && he._owner !== Q.current && (Me = " It was passed a child from " + U(he._owner.type) + "."), K(he), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, Me), K(null);
      }
    }
  }
  function ye(he, Te) {
    if (typeof he == "object") {
      if (Array.isArray(he))
        for (var J = 0; J < he.length; J++) {
          var Me = he[J];
          ne(Me) && be(Me, Te);
        }
      else if (ne(he))
        he._store && (he._store.validated = !0);
      else if (he) {
        var we = function(et) {
          if (et === null || typeof et != "object")
            return null;
          var Ue = _ && et[_] || et["@@iterator"];
          return typeof Ue == "function" ? Ue : null;
        }(he);
        if (typeof we == "function" && we !== he.entries)
          for (var Xe, Ze = we.call(he); !(Xe = Ze.next()).done; )
            ne(Xe.value) && be(Xe.value, Te);
      }
    }
  }
  function Pe(he) {
    var Te, J = he.type;
    if (J != null && typeof J != "string") {
      if (typeof J == "function")
        Te = J.propTypes;
      else {
        if (typeof J != "object" || J.$$typeof !== d && J.$$typeof !== y)
          return;
        Te = J.propTypes;
      }
      if (Te) {
        var Me = U(J);
        (function(we, Xe, Ze, et, Ue) {
          var Et = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Ke in we)
            if (Et(we, Ke)) {
              var We = void 0;
              try {
                if (typeof we[Ke] != "function") {
                  var Be = Error((et || "React class") + ": " + Ze + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof we[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Be.name = "Invariant Violation", Be;
                }
                We = we[Ke](Xe, Ke, et, Ze, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($e) {
                We = $e;
              }
              !We || We instanceof Error || (ce(Ue), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", et || "React class", Ze, Ke, typeof We), ce(null)), We instanceof Error && !(We.message in V) && (V[We.message] = !0, ce(Ue), P("Failed %s type: %s", Ze, We.message), ce(null));
            }
        })(Te, he.props, "prop", Me, he);
      } else
        J.PropTypes === void 0 || se || (se = !0, P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U(J) || "Unknown"));
      typeof J.getDefaultProps != "function" || J.getDefaultProps.isReactClassApproved || P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function oe(he, Te, J, Me, we, Xe) {
    var Ze = function($e) {
      return typeof $e == "string" || typeof $e == "function" || $e === Da.Fragment || $e === a || $e === F || $e === i || $e === c || $e === h || $e === w || typeof $e == "object" && $e !== null && ($e.$$typeof === v || $e.$$typeof === y || $e.$$typeof === l || $e.$$typeof === f || $e.$$typeof === d || $e.$$typeof === k || $e.$$typeof === S || $e[0] === R);
    }(he);
    if (!Ze) {
      var et = "";
      (he === void 0 || typeof he == "object" && he !== null && Object.keys(he).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Ue, Et = function($e) {
        return $e !== void 0 ? `

Check your code at ` + $e.fileName.replace(/^.*[\\\/]/, "") + ":" + $e.lineNumber + "." : "";
      }(we);
      et += Et || ue(), he === null ? Ue = "null" : Array.isArray(he) ? Ue = "array" : he !== void 0 && he.$$typeof === t ? (Ue = "<" + (U(he.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof he, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, et);
    }
    var Ke = ae(he, Te, J, we, Xe);
    if (Ke == null)
      return Ke;
    if (Ze) {
      var We = Te.children;
      if (We !== void 0)
        if (Me)
          if (Array.isArray(We)) {
            for (var Be = 0; Be < We.length; Be++)
              ye(We[Be], he);
            Object.freeze && Object.freeze(We);
          } else
            P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ye(We, he);
    }
    return he === Da.Fragment ? function($e) {
      for (var ft = Object.keys($e.props), qe = 0; qe < ft.length; qe++) {
        var it = ft[qe];
        if (it !== "children" && it !== "key") {
          K($e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", it), K(null);
          break;
        }
      }
      $e.ref !== null && (K($e), P("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
    }(Ke) : Pe(Ke), Ke;
  }
  var Ie = function(he, Te, J) {
    return oe(he, Te, J, !1);
  }, Ee = function(he, Te, J) {
    return oe(he, Te, J, !0);
  };
  Da.jsx = Ie, Da.jsxs = Ee;
}(), _i.exports = yh;
var Id, xy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Id = xy, function() {
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
  Id.exports ? (t.default = t, Id.exports = t) : window.classNames = t;
}();
var gh = xy.exports;
const vh = (e, t, n) => {
  let i = null;
  return function(...a) {
    i && clearTimeout(i), i = setTimeout(() => {
      i = null, n || e.apply(this, a);
    }, t);
  };
}, CS = ({ content: e }) => _i.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), AS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, LS = de.createContext({ getTooltipData: () => AS });
function by(e = "DEFAULT_TOOLTIP_ID") {
  return de.useContext(LS).getTooltipData(e);
}
const xh = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: i = "top", offset: a = 10, strategy: l = "absolute", middlewares: f = [SS(Number(a)), bS(), ES({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const d = f;
  return n ? (d.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(h) {
    const { element: y, padding: v = 0 } = c || {}, { x: S, y: R, placement: k, rects: F, platform: w } = h;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = sy(v), _ = { x: S, y: R }, D = Ss(k), P = Yf(D), O = await w.getDimensions(y), L = D === "y" ? "top" : "left", U = D === "y" ? "bottom" : "right", V = F.reference[P] + F.reference[D] - _[D] - F.floating[P], q = _[D] - F.reference[D], ce = await (w.getOffsetParent == null ? void 0 : w.getOffsetParent(y));
    let ee = ce ? D === "y" ? ce.clientHeight || 0 : ce.clientWidth || 0 : 0;
    ee === 0 && (ee = F.floating[P]);
    const j = V / 2 - q / 2, Y = m[L], W = ee - O[P] - m[U], B = ee / 2 - O[P] / 2 + j, ie = gf(Y, B, W), ae = bs(k) != null && B != ie && F.reference[P] / 2 - (B < Y ? m[L] : m[U]) - O[P] / 2 < 0;
    return { [D]: _[D] - (ae ? B < Y ? Y - B : W - B : 0), data: { [D]: ie, centerOffset: B - ie } };
  } }), mh(e, t, { placement: i, strategy: l, middleware: d }).then(({ x: h, y, placement: v, middlewareData: S }) => {
    var R, k;
    const F = { left: `${h}px`, top: `${y}px` }, { x: w, y: m } = (R = S.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: F, tooltipArrowStyles: { left: w != null ? `${w}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[v.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : mh(e, t, { placement: "bottom", strategy: l, middleware: d }).then(({ x: h, y }) => ({ tooltipStyles: { left: `${h}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Ti = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const bh = ({ id: e, className: t, classNameArrow: n, variant: i = "dark", anchorId: a, anchorSelect: l, place: f = "top", offset: d = 10, events: c = ["hover"], positionStrategy: h = "absolute", middlewares: y, wrapper: v, children: S = null, delayShow: R = 0, delayHide: k = 0, float: F = !1, noArrow: w = !1, clickable: m = !1, closeOnEsc: _ = !1, style: D, position: P, afterShow: O, afterHide: L, content: U, html: V, isOpen: q, setIsOpen: ce, activeAnchor: ee, setActiveAnchor: j }) => {
  const Y = de.useRef(null), W = de.useRef(null), B = de.useRef(null), ie = de.useRef(null), [ae, se] = de.useState({}), [Q, K] = de.useState({}), [ne, ue] = de.useState(!1), [ze, be] = de.useState(!1), ye = de.useRef(!1), Pe = de.useRef(null), { anchorRefs: oe, setActiveAnchor: Ie } = by(e), Ee = de.useRef(!1), [he, Te] = de.useState([]), J = de.useRef(!1);
  de.useLayoutEffect(() => (J.current = !0, () => {
    J.current = !1;
  }), []), de.useEffect(() => {
    if (!ne) {
      const qe = setTimeout(() => {
        be(!1);
      }, 150);
      return () => {
        clearTimeout(qe);
      };
    }
    return () => null;
  }, [ne]);
  const Me = (qe) => {
    J.current && (qe && be(!0), setTimeout(() => {
      J.current && (ce == null || ce(qe), q === void 0 && ue(qe));
    }, 10));
  };
  de.useEffect(() => {
    if (q === void 0)
      return () => null;
    q && be(!0);
    const qe = setTimeout(() => {
      ue(q);
    }, 10);
    return () => {
      clearTimeout(qe);
    };
  }, [q]), de.useEffect(() => {
    ne !== ye.current && (ye.current = ne, ne ? O == null || O() : L == null || L());
  }, [ne]);
  const we = (qe = k) => {
    ie.current && clearTimeout(ie.current), ie.current = setTimeout(() => {
      Ee.current || Me(!1);
    }, qe);
  }, Xe = (qe) => {
    var it;
    if (!qe)
      return;
    R ? (B.current && clearTimeout(B.current), B.current = setTimeout(() => {
      Me(!0);
    }, R)) : Me(!0);
    const yt = (it = qe.currentTarget) !== null && it !== void 0 ? it : qe.target;
    j(yt), Ie({ current: yt }), ie.current && clearTimeout(ie.current);
  }, Ze = () => {
    m ? we(k || 100) : k ? we() : Me(!1), B.current && clearTimeout(B.current);
  }, et = ({ x: qe, y: it }) => {
    xh({ place: f, offset: d, elementReference: { getBoundingClientRect: () => ({ x: qe, y: it, width: 0, height: 0, top: it, left: qe, right: qe, bottom: it }) }, tooltipReference: Y.current, tooltipArrowReference: W.current, strategy: h, middlewares: y }).then((yt) => {
      Object.keys(yt.tooltipStyles).length && se(yt.tooltipStyles), Object.keys(yt.tooltipArrowStyles).length && K(yt.tooltipArrowStyles);
    });
  }, Ue = (qe) => {
    if (!qe)
      return;
    const it = qe, yt = { x: it.clientX, y: it.clientY };
    et(yt), Pe.current = yt;
  }, Et = (qe) => {
    Xe(qe), k && we();
  }, Ke = (qe) => {
    const it = document.querySelector(`[id='${a}']`);
    it != null && it.contains(qe.target) || he.some((yt) => yt.contains(qe.target)) || Me(!1);
  }, We = (qe) => {
    qe.key === "Escape" && Me(!1);
  }, Be = vh(Xe, 50), $e = vh(Ze, 50);
  de.useEffect(() => {
    var qe, it;
    const yt = new Set(oe);
    he.forEach((gt) => {
      yt.add({ current: gt });
    });
    const ht = document.querySelector(`[id='${a}']`);
    ht && yt.add({ current: ht }), _ && window.addEventListener("keydown", We);
    const _t = [];
    c.find((gt) => gt === "click") && (window.addEventListener("click", Ke), _t.push({ event: "click", listener: Et })), c.find((gt) => gt === "hover") && (_t.push({ event: "mouseenter", listener: Be }, { event: "mouseleave", listener: $e }, { event: "focus", listener: Be }, { event: "blur", listener: $e }), F && _t.push({ event: "mousemove", listener: Ue }));
    const tn = () => {
      Ee.current = !0;
    }, Xt = () => {
      Ee.current = !1, Ze();
    };
    return m && ((qe = Y.current) === null || qe === void 0 || qe.addEventListener("mouseenter", tn), (it = Y.current) === null || it === void 0 || it.addEventListener("mouseleave", Xt)), _t.forEach(({ event: gt, listener: Rt }) => {
      yt.forEach((hn) => {
        var on;
        (on = hn.current) === null || on === void 0 || on.addEventListener(gt, Rt);
      });
    }), () => {
      var gt, Rt;
      c.find((hn) => hn === "click") && window.removeEventListener("click", Ke), _ && window.removeEventListener("keydown", We), m && ((gt = Y.current) === null || gt === void 0 || gt.removeEventListener("mouseenter", tn), (Rt = Y.current) === null || Rt === void 0 || Rt.removeEventListener("mouseleave", Xt)), _t.forEach(({ event: hn, listener: on }) => {
        yt.forEach((qt) => {
          var yn;
          (yn = qt.current) === null || yn === void 0 || yn.removeEventListener(hn, on);
        });
      });
    };
  }, [ze, oe, he, _, c]), de.useEffect(() => {
    let qe = l ?? "";
    !qe && e && (qe = `[data-tooltip-id='${e}']`);
    const it = new MutationObserver((yt) => {
      const ht = [];
      yt.forEach((_t) => {
        if (_t.type === "attributes" && _t.attributeName === "data-tooltip-id" && _t.target.getAttribute("data-tooltip-id") === e && ht.push(_t.target), _t.type === "childList" && (ee && [..._t.removedNodes].some((tn) => !!tn.contains(ee) && (be(!1), Me(!1), j(null), !0)), qe))
          try {
            const tn = [..._t.addedNodes].filter((Xt) => Xt.nodeType === 1);
            ht.push(...tn.filter((Xt) => Xt.matches(qe))), ht.push(...tn.flatMap((Xt) => [...Xt.querySelectorAll(qe)]));
          } catch {
          }
      }), ht.length && Te((_t) => [..._t, ...ht]);
    });
    return it.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      it.disconnect();
    };
  }, [e, l, ee]), de.useEffect(() => {
    P ? et(P) : F ? Pe.current && et(Pe.current) : xh({ place: f, offset: d, elementReference: ee, tooltipReference: Y.current, tooltipArrowReference: W.current, strategy: h, middlewares: y }).then((qe) => {
      J.current && (Object.keys(qe.tooltipStyles).length && se(qe.tooltipStyles), Object.keys(qe.tooltipArrowStyles).length && K(qe.tooltipArrowStyles));
    });
  }, [ne, ee, U, V, f, d, h, P]), de.useEffect(() => {
    var qe;
    const it = document.querySelector(`[id='${a}']`), yt = [...he, it];
    ee && yt.includes(ee) || j((qe = he[0]) !== null && qe !== void 0 ? qe : it);
  }, [a, he, ee]), de.useEffect(() => () => {
    B.current && clearTimeout(B.current), ie.current && clearTimeout(ie.current);
  }, []), de.useEffect(() => {
    let qe = l;
    if (!qe && e && (qe = `[data-tooltip-id='${e}']`), qe)
      try {
        const it = Array.from(document.querySelectorAll(qe));
        Te(it);
      } catch {
        Te([]);
      }
  }, [e, l]);
  const ft = !!(V || U || S) && ne && Object.keys(ae).length > 0;
  return ze ? _i.exports.jsxs(v, { id: e, role: "tooltip", className: gh("react-tooltip", Ti.tooltip, Ti[i], t, { [Ti.show]: ft, [Ti.fixed]: h === "fixed", [Ti.clickable]: m }), style: { ...D, ...ae }, ref: Y, children: [V && _i.exports.jsx(CS, { content: V }) || U || S, _i.exports.jsx(v, { className: gh("react-tooltip-arrow", Ti.arrow, n, { [Ti["no-arrow"]]: w }), style: Q, ref: W })] }) : null;
}, Sy = ({ id: e, anchorId: t, anchorSelect: n, content: i, html: a, className: l, classNameArrow: f, variant: d = "dark", place: c = "top", offset: h = 10, wrapper: y = "div", children: v = null, events: S = ["hover"], positionStrategy: R = "absolute", middlewares: k, delayShow: F = 0, delayHide: w = 0, float: m = !1, noArrow: _ = !1, clickable: D = !1, closeOnEsc: P = !1, style: O, position: L, isOpen: U, setIsOpen: V, afterShow: q, afterHide: ce }) => {
  const [ee, j] = de.useState(i), [Y, W] = de.useState(a), [B, ie] = de.useState(c), [ae, se] = de.useState(d), [Q, K] = de.useState(h), [ne, ue] = de.useState(F), [ze, be] = de.useState(w), [ye, Pe] = de.useState(m), [oe, Ie] = de.useState(y), [Ee, he] = de.useState(S), [Te, J] = de.useState(R), [Me, we] = de.useState(null), { anchorRefs: Xe, activeAnchor: Ze } = by(e), et = (Ke) => Ke == null ? void 0 : Ke.getAttributeNames().reduce((We, Be) => {
    var $e;
    return Be.startsWith("data-tooltip-") && (We[Be.replace(/^data-tooltip-/, "")] = ($e = Ke == null ? void 0 : Ke.getAttribute(Be)) !== null && $e !== void 0 ? $e : null), We;
  }, {}), Ue = (Ke) => {
    const We = { place: (Be) => {
      var $e;
      ie(($e = Be) !== null && $e !== void 0 ? $e : c);
    }, content: (Be) => {
      j(Be ?? i);
    }, html: (Be) => {
      W(Be ?? a);
    }, variant: (Be) => {
      var $e;
      se(($e = Be) !== null && $e !== void 0 ? $e : d);
    }, offset: (Be) => {
      K(Be === null ? h : Number(Be));
    }, wrapper: (Be) => {
      var $e;
      Ie(($e = Be) !== null && $e !== void 0 ? $e : y);
    }, events: (Be) => {
      const $e = Be == null ? void 0 : Be.split(" ");
      he($e ?? S);
    }, "position-strategy": (Be) => {
      var $e;
      J(($e = Be) !== null && $e !== void 0 ? $e : R);
    }, "delay-show": (Be) => {
      ue(Be === null ? F : Number(Be));
    }, "delay-hide": (Be) => {
      be(Be === null ? w : Number(Be));
    }, float: (Be) => {
      Pe(Be === null ? m : !!Be);
    } };
    Object.values(We).forEach((Be) => Be(null)), Object.entries(Ke).forEach(([Be, $e]) => {
      var ft;
      (ft = We[Be]) === null || ft === void 0 || ft.call(We, $e);
    });
  };
  de.useEffect(() => {
    j(i);
  }, [i]), de.useEffect(() => {
    W(a);
  }, [a]), de.useEffect(() => {
    ie(c);
  }, [c]), de.useEffect(() => {
    var Ke;
    const We = new Set(Xe);
    let Be = n;
    if (!Be && e && (Be = `[data-tooltip-id='${e}']`), Be)
      try {
        document.querySelectorAll(Be).forEach((yt) => {
          We.add({ current: yt });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const $e = document.querySelector(`[id='${t}']`);
    if ($e && We.add({ current: $e }), !We.size)
      return () => null;
    const ft = (Ke = Me ?? $e) !== null && Ke !== void 0 ? Ke : Ze.current, qe = new MutationObserver((yt) => {
      yt.forEach((ht) => {
        var _t;
        if (!ft || ht.type !== "attributes" || !(!((_t = ht.attributeName) === null || _t === void 0) && _t.startsWith("data-tooltip-")))
          return;
        const tn = et(ft);
        Ue(tn);
      });
    }), it = { attributes: !0, childList: !1, subtree: !1 };
    if (ft) {
      const yt = et(ft);
      Ue(yt), qe.observe(ft, it);
    }
    return () => {
      qe.disconnect();
    };
  }, [Xe, Ze, Me, t, n]);
  const Et = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: f, content: ee, html: Y, place: B, variant: ae, offset: Q, wrapper: oe, events: Ee, positionStrategy: Te, middlewares: k, delayShow: ne, delayHide: ze, float: ye, noArrow: _, clickable: D, closeOnEsc: P, style: O, position: L, isOpen: U, setIsOpen: V, afterShow: q, afterHide: ce, activeAnchor: Me, setActiveAnchor: (Ke) => we(Ke) };
  return v ? _i.exports.jsx(bh, { ...Et, children: v }) : _i.exports.jsx(bh, { ...Et });
};
function Sh(e, t) {
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
function $d(e, t) {
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
function DS(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Tu(e) {
  return function() {
    return e;
  };
}
function Eh(e, t) {
  return lc(e.source, t.source) || e.index - t.index;
}
function kh(e, t) {
  return lc(e.target, t.target) || e.index - t.index;
}
function lc(e, t) {
  return e.y0 - t.y0;
}
function Bd(e) {
  return e.value;
}
function NS(e) {
  return e.index;
}
function OS(e) {
  return e.nodes;
}
function _S(e) {
  return e.links;
}
function Th(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function wh({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, i = n;
    for (const a of t.sourceLinks)
      a.y0 = n + a.width / 2, n += a.width;
    for (const a of t.targetLinks)
      a.y1 = i + a.width / 2, i += a.width;
  }
}
function FS() {
  let e = 0, t = 0, n = 1, i = 1, a = 24, l = 8, f, d = NS, c = DS, h, y, v = OS, S = _S, R = 6;
  function k() {
    const B = { nodes: v.apply(null, arguments), links: S.apply(null, arguments) };
    return F(B), w(B), m(B), _(B), O(B), wh(B), B;
  }
  k.update = function(B) {
    return wh(B), B;
  }, k.nodeId = function(B) {
    return arguments.length ? (d = typeof B == "function" ? B : Tu(B), k) : d;
  }, k.nodeAlign = function(B) {
    return arguments.length ? (c = typeof B == "function" ? B : Tu(B), k) : c;
  }, k.nodeSort = function(B) {
    return arguments.length ? (h = B, k) : h;
  }, k.nodeWidth = function(B) {
    return arguments.length ? (a = +B, k) : a;
  }, k.nodePadding = function(B) {
    return arguments.length ? (l = f = +B, k) : l;
  }, k.nodes = function(B) {
    return arguments.length ? (v = typeof B == "function" ? B : Tu(B), k) : v;
  }, k.links = function(B) {
    return arguments.length ? (S = typeof B == "function" ? B : Tu(B), k) : S;
  }, k.linkSort = function(B) {
    return arguments.length ? (y = B, k) : y;
  }, k.size = function(B) {
    return arguments.length ? (e = t = 0, n = +B[0], i = +B[1], k) : [n - e, i - t];
  }, k.extent = function(B) {
    return arguments.length ? (e = +B[0][0], n = +B[1][0], t = +B[0][1], i = +B[1][1], k) : [[e, t], [n, i]];
  }, k.iterations = function(B) {
    return arguments.length ? (R = +B, k) : R;
  };
  function F({ nodes: B, links: ie }) {
    for (const [se, Q] of B.entries())
      Q.index = se, Q.sourceLinks = [], Q.targetLinks = [];
    const ae = new Map(B.map((se, Q) => [d(se, Q, B), se]));
    for (const [se, Q] of ie.entries()) {
      Q.index = se;
      let { source: K, target: ne } = Q;
      typeof K != "object" && (K = Q.source = Th(ae, K)), typeof ne != "object" && (ne = Q.target = Th(ae, ne)), K.sourceLinks.push(Q), ne.targetLinks.push(Q);
    }
    if (y != null)
      for (const { sourceLinks: se, targetLinks: Q } of B)
        se.sort(y), Q.sort(y);
  }
  function w({ nodes: B }) {
    for (const ie of B)
      ie.value = ie.fixedValue === void 0 ? Math.max($d(ie.sourceLinks, Bd), $d(ie.targetLinks, Bd)) : ie.fixedValue;
  }
  function m({ nodes: B }) {
    const ie = B.length;
    let ae = new Set(B), se = /* @__PURE__ */ new Set(), Q = 0;
    for (; ae.size; ) {
      for (const K of ae) {
        K.depth = Q;
        for (const { target: ne } of K.sourceLinks)
          se.add(ne);
      }
      if (++Q > ie)
        throw new Error("circular link");
      ae = se, se = /* @__PURE__ */ new Set();
    }
  }
  function _({ nodes: B }) {
    const ie = B.length;
    let ae = new Set(B), se = /* @__PURE__ */ new Set(), Q = 0;
    for (; ae.size; ) {
      for (const K of ae) {
        K.height = Q;
        for (const { source: ne } of K.targetLinks)
          se.add(ne);
      }
      if (++Q > ie)
        throw new Error("circular link");
      ae = se, se = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: B }) {
    const ie = Sh(B, (Q) => Q.depth) + 1, ae = (n - e - a) / (ie - 1), se = new Array(ie);
    for (const Q of B) {
      const K = Math.max(0, Math.min(ie - 1, Math.floor(c.call(null, Q, ie))));
      Q.layer = K, Q.x0 = e + K * ae, Q.x1 = Q.x0 + a, se[K] ? se[K].push(Q) : se[K] = [Q];
    }
    if (h)
      for (const Q of se)
        Q.sort(h);
    return se;
  }
  function P(B) {
    const ie = PS(B, (ae) => (i - t - (ae.length - 1) * f) / $d(ae, Bd));
    for (const ae of B) {
      let se = t;
      for (const Q of ae) {
        Q.y0 = se, Q.y1 = se + Q.value * ie, se = Q.y1 + f;
        for (const K of Q.sourceLinks)
          K.width = K.value * ie;
      }
      se = (i - se + f) / (ae.length + 1);
      for (let Q = 0; Q < ae.length; ++Q) {
        const K = ae[Q];
        K.y0 += se * (Q + 1), K.y1 += se * (Q + 1);
      }
      j(ae);
    }
  }
  function O(B) {
    const ie = D(B);
    f = Math.min(l, (i - t) / (Sh(ie, (ae) => ae.length) - 1)), P(ie);
    for (let ae = 0; ae < R; ++ae) {
      const se = Math.pow(0.99, ae), Q = Math.max(1 - se, (ae + 1) / R);
      U(ie, se, Q), L(ie, se, Q);
    }
  }
  function L(B, ie, ae) {
    for (let se = 1, Q = B.length; se < Q; ++se) {
      const K = B[se];
      for (const ne of K) {
        let ue = 0, ze = 0;
        for (const { source: ye, value: Pe } of ne.targetLinks) {
          let oe = Pe * (ne.layer - ye.layer);
          ue += Y(ye, ne) * oe, ze += oe;
        }
        if (!(ze > 0))
          continue;
        let be = (ue / ze - ne.y0) * ie;
        ne.y0 += be, ne.y1 += be, ee(ne);
      }
      h === void 0 && K.sort(lc), V(K, ae);
    }
  }
  function U(B, ie, ae) {
    for (let se = B.length, Q = se - 2; Q >= 0; --Q) {
      const K = B[Q];
      for (const ne of K) {
        let ue = 0, ze = 0;
        for (const { target: ye, value: Pe } of ne.sourceLinks) {
          let oe = Pe * (ye.layer - ne.layer);
          ue += W(ne, ye) * oe, ze += oe;
        }
        if (!(ze > 0))
          continue;
        let be = (ue / ze - ne.y0) * ie;
        ne.y0 += be, ne.y1 += be, ee(ne);
      }
      h === void 0 && K.sort(lc), V(K, ae);
    }
  }
  function V(B, ie) {
    const ae = B.length >> 1, se = B[ae];
    ce(B, se.y0 - f, ae - 1, ie), q(B, se.y1 + f, ae + 1, ie), ce(B, i, B.length - 1, ie), q(B, t, 0, ie);
  }
  function q(B, ie, ae, se) {
    for (; ae < B.length; ++ae) {
      const Q = B[ae], K = (ie - Q.y0) * se;
      K > 1e-6 && (Q.y0 += K, Q.y1 += K), ie = Q.y1 + f;
    }
  }
  function ce(B, ie, ae, se) {
    for (; ae >= 0; --ae) {
      const Q = B[ae], K = (Q.y1 - ie) * se;
      K > 1e-6 && (Q.y0 -= K, Q.y1 -= K), ie = Q.y0 - f;
    }
  }
  function ee({ sourceLinks: B, targetLinks: ie }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: ae } } of ie)
        ae.sort(kh);
      for (const { target: { targetLinks: ae } } of B)
        ae.sort(Eh);
    }
  }
  function j(B) {
    if (y === void 0)
      for (const { sourceLinks: ie, targetLinks: ae } of B)
        ie.sort(kh), ae.sort(Eh);
  }
  function Y(B, ie) {
    let ae = B.y0 - (B.sourceLinks.length - 1) * f / 2;
    for (const { target: se, width: Q } of B.sourceLinks) {
      if (se === ie)
        break;
      ae += Q + f;
    }
    for (const { source: se, width: Q } of ie.targetLinks) {
      if (se === B)
        break;
      ae -= Q;
    }
    return ae;
  }
  function W(B, ie) {
    let ae = ie.y0 - (ie.targetLinks.length - 1) * f / 2;
    for (const { source: se, width: Q } of ie.targetLinks) {
      if (se === B)
        break;
      ae += Q + f;
    }
    for (const { target: se, width: Q } of B.sourceLinks) {
      if (se === ie)
        break;
      ae -= Q;
    }
    return ae;
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
var $a = {}, wi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function $S() {
  if (Ch)
    return wi;
  Ch = 1;
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
  function d(g, C, I, X, Se, ge, Le) {
    this.acceptsBooleans = C === 2 || C === 3 || C === 4, this.attributeName = X, this.attributeNamespace = Se, this.mustUseProperty = I, this.propertyName = g, this.type = C, this.sanitizeURL = ge, this.removeEmptyString = Le;
  }
  var c = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(g) {
    c[g] = new d(g, 0, !1, g, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(g) {
    var C = g[0];
    c[C] = new d(C, 1, !1, g[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(g) {
    c[g] = new d(g, 2, !1, g.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(g) {
    c[g] = new d(g, 2, !1, g, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(g) {
    c[g] = new d(g, 3, !1, g.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(g) {
    c[g] = new d(g, 3, !0, g, null, !1, !1);
  }), ["capture", "download"].forEach(function(g) {
    c[g] = new d(g, 4, !1, g, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(g) {
    c[g] = new d(g, 6, !1, g, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(g) {
    c[g] = new d(g, 5, !1, g.toLowerCase(), null, !1, !1);
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
    c[C] = new d(C, 1, !1, g, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(g) {
    var C = g.replace(h, y);
    c[C] = new d(C, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(g) {
    var C = g.replace(h, y);
    c[C] = new d(C, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(g) {
    c[g] = new d(g, 1, !1, g.toLowerCase(), null, !1, !1);
  }), c.xlinkHref = new d("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(g) {
    c[g] = new d(g, 1, !1, g.toLowerCase(), null, !0, !0);
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
      var I = "", X, Se = 0;
      for (X = C.index; X < g.length; X++) {
        switch (g.charCodeAt(X)) {
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
        Se !== X && (I += g.substring(Se, X)), Se = X + 1, I += C;
      }
      g = Se !== X ? I + g.substring(Se, X) : I;
    }
    return g;
  }
  var F = /([A-Z])/g, w = /^ms-/, m = Array.isArray;
  function _(g, C) {
    return { insertionMode: g, selectedValue: C };
  }
  function D(g, C, I) {
    switch (C) {
      case "select":
        return _(1, I.value != null ? I.value : I.defaultValue);
      case "svg":
        return _(2, null);
      case "math":
        return _(3, null);
      case "foreignObject":
        return _(1, null);
      case "table":
        return _(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return _(5, null);
      case "colgroup":
        return _(7, null);
      case "tr":
        return _(6, null);
    }
    return 4 <= g.insertionMode || g.insertionMode === 0 ? _(1, null) : g;
  }
  var P = /* @__PURE__ */ new Map();
  function O(g, C, I) {
    if (typeof I != "object")
      throw Error(t(62));
    C = !0;
    for (var X in I)
      if (n.call(I, X)) {
        var Se = I[X];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (X.indexOf("--") === 0) {
            var ge = k(X);
            Se = k(("" + Se).trim());
          } else {
            ge = X;
            var Le = P.get(ge);
            Le !== void 0 || (Le = k(ge.replace(F, "-$1").toLowerCase().replace(w, "-ms-")), P.set(ge, Le)), ge = Le, Se = typeof Se == "number" ? Se === 0 || n.call(v, X) ? "" + Se : Se + "px" : k(("" + Se).trim());
          }
          C ? (C = !1, g.push(' style="', ge, ":", Se)) : g.push(";", ge, ":", Se);
        }
      }
    C || g.push('"');
  }
  function L(g, C, I, X) {
    switch (I) {
      case "style":
        O(g, C, X);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < I.length) || I[0] !== "o" && I[0] !== "O" || I[1] !== "n" && I[1] !== "N") {
      if (C = c.hasOwnProperty(I) ? c[I] : null, C !== null) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!C.acceptsBooleans)
              return;
        }
        switch (I = C.attributeName, C.type) {
          case 3:
            X && g.push(" ", I, '=""');
            break;
          case 4:
            X === !0 ? g.push(" ", I, '=""') : X !== !1 && g.push(" ", I, '="', k(X), '"');
            break;
          case 5:
            isNaN(X) || g.push(" ", I, '="', k(X), '"');
            break;
          case 6:
            !isNaN(X) && 1 <= X && g.push(" ", I, '="', k(X), '"');
            break;
          default:
            C.sanitizeURL && (X = "" + X), g.push(" ", I, '="', k(X), '"');
        }
      } else if (f(I)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (C = I.toLowerCase().slice(0, 5), C !== "data-" && C !== "aria-")
              return;
        }
        g.push(" ", I, '="', k(X), '"');
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
  function V(g) {
    var C = "";
    return e.Children.forEach(g, function(I) {
      I != null && (C += I);
    }), C;
  }
  function q(g, C, I, X) {
    g.push(j(I));
    var Se = I = null, ge;
    for (ge in C)
      if (n.call(C, ge)) {
        var Le = C[ge];
        if (Le != null)
          switch (ge) {
            case "children":
              I = Le;
              break;
            case "dangerouslySetInnerHTML":
              Se = Le;
              break;
            default:
              L(g, X, ge, Le);
          }
      }
    return g.push(">"), U(g, Se, I), typeof I == "string" ? (g.push(k(I)), null) : I;
  }
  var ce = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ee = /* @__PURE__ */ new Map();
  function j(g) {
    var C = ee.get(g);
    if (C === void 0) {
      if (!ce.test(g))
        throw Error(t(65, g));
      C = "<" + g, ee.set(g, C);
    }
    return C;
  }
  function Y(g, C, I, X, Se) {
    switch (C) {
      case "select":
        g.push(j("select"));
        var ge = null, Le = null;
        for (re in I)
          if (n.call(I, re)) {
            var je = I[re];
            if (je != null)
              switch (re) {
                case "children":
                  ge = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Le = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  L(g, X, re, je);
              }
          }
        return g.push(">"), U(g, Le, ge), ge;
      case "option":
        Le = Se.selectedValue, g.push(j("option"));
        var rt = je = null, mt = null, re = null;
        for (ge in I)
          if (n.call(I, ge)) {
            var le = I[ge];
            if (le != null)
              switch (ge) {
                case "children":
                  je = le;
                  break;
                case "selected":
                  mt = le;
                  break;
                case "dangerouslySetInnerHTML":
                  re = le;
                  break;
                case "value":
                  rt = le;
                default:
                  L(g, X, ge, le);
              }
          }
        if (Le != null)
          if (I = rt !== null ? "" + rt : V(je), m(Le)) {
            for (X = 0; X < Le.length; X++)
              if ("" + Le[X] === I) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + Le === I && g.push(' selected=""');
        else
          mt && g.push(' selected=""');
        return g.push(">"), U(g, re, je), je;
      case "textarea":
        g.push(j("textarea")), re = Le = ge = null;
        for (je in I)
          if (n.call(I, je) && (rt = I[je], rt != null))
            switch (je) {
              case "children":
                re = rt;
                break;
              case "value":
                ge = rt;
                break;
              case "defaultValue":
                Le = rt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                L(
                  g,
                  X,
                  je,
                  rt
                );
            }
        if (ge === null && Le !== null && (ge = Le), g.push(">"), re != null) {
          if (ge != null)
            throw Error(t(92));
          if (m(re) && 1 < re.length)
            throw Error(t(93));
          ge = "" + re;
        }
        return typeof ge == "string" && ge[0] === `
` && g.push(`
`), ge !== null && g.push(k("" + ge)), null;
      case "input":
        g.push(j("input")), rt = re = je = ge = null;
        for (Le in I)
          if (n.call(I, Le) && (mt = I[Le], mt != null))
            switch (Le) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                rt = mt;
                break;
              case "defaultValue":
                je = mt;
                break;
              case "checked":
                re = mt;
                break;
              case "value":
                ge = mt;
                break;
              default:
                L(g, X, Le, mt);
            }
        return re !== null ? L(g, X, "checked", re) : rt !== null && L(g, X, "checked", rt), ge !== null ? L(g, X, "value", ge) : je !== null && L(g, X, "value", je), g.push("/>"), null;
      case "menuitem":
        g.push(j("menuitem"));
        for (var me in I)
          if (n.call(I, me) && (ge = I[me], ge != null))
            switch (me) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                L(g, X, me, ge);
            }
        return g.push(">"), null;
      case "title":
        g.push(j("title")), ge = null;
        for (le in I)
          if (n.call(I, le) && (Le = I[le], Le != null))
            switch (le) {
              case "children":
                ge = Le;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                L(g, X, le, Le);
            }
        return g.push(">"), ge;
      case "listing":
      case "pre":
        g.push(j(C)), Le = ge = null;
        for (rt in I)
          if (n.call(I, rt) && (je = I[rt], je != null))
            switch (rt) {
              case "children":
                ge = je;
                break;
              case "dangerouslySetInnerHTML":
                Le = je;
                break;
              default:
                L(g, X, rt, je);
            }
        if (g.push(">"), Le != null) {
          if (ge != null)
            throw Error(t(60));
          if (typeof Le != "object" || !("__html" in Le))
            throw Error(t(61));
          I = Le.__html, I != null && (typeof I == "string" && 0 < I.length && I[0] === `
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
        g.push(j(C));
        for (var Re in I)
          if (n.call(I, Re) && (ge = I[Re], ge != null))
            switch (Re) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, C));
              default:
                L(g, X, Re, ge);
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
        return q(
          g,
          I,
          C,
          X
        );
      case "html":
        return Se.insertionMode === 0 && g.push("<!DOCTYPE html>"), q(g, I, C, X);
      default:
        if (C.indexOf("-") === -1 && typeof I.is != "string")
          return q(g, I, C, X);
        g.push(j(C)), Le = ge = null;
        for (mt in I)
          if (n.call(I, mt) && (je = I[mt], je != null))
            switch (mt) {
              case "children":
                ge = je;
                break;
              case "dangerouslySetInnerHTML":
                Le = je;
                break;
              case "style":
                O(g, X, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(mt) && typeof je != "function" && typeof je != "symbol" && g.push(" ", mt, '="', k(je), '"');
            }
        return g.push(">"), U(g, Le, ge), ge;
    }
  }
  function W(g, C, I) {
    if (g.push('<!--$?--><template id="'), I === null)
      throw Error(t(395));
    return g.push(I), g.push('"></template>');
  }
  function B(g, C, I, X) {
    switch (I.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(C.segmentPrefix), C = X.toString(16), g.push(C), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ie(g, C) {
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
  var ae = /[<\u2028\u2029]/g;
  function se(g) {
    return JSON.stringify(g).replace(ae, function(C) {
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
  function Q(g, C) {
    return C = C === void 0 ? "" : C, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: C + "P:", segmentPrefix: C + "S:", boundaryPrefix: C + "B:", idPrefix: C, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function K(g, C, I, X) {
    return I.generateStaticMarkup ? (g.push(k(C)), !1) : (C === "" ? g = X : (X && g.push("<!-- -->"), g.push(k(C)), g = !0), g);
  }
  var ne = Object.assign, ue = Symbol.for("react.element"), ze = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), we = Symbol.for("react.scope"), Xe = Symbol.for("react.debug_trace_mode"), Ze = Symbol.for("react.legacy_hidden"), et = Symbol.for("react.default_value"), Ue = Symbol.iterator;
  function Et(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case be:
        return "Fragment";
      case ze:
        return "Portal";
      case Pe:
        return "Profiler";
      case ye:
        return "StrictMode";
      case he:
        return "Suspense";
      case Te:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Ie:
          return (g.displayName || "Context") + ".Consumer";
        case oe:
          return (g._context.displayName || "Context") + ".Provider";
        case Ee:
          var C = g.render;
          return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case J:
          return C = g.displayName || null, C !== null ? C : Et(g.type) || "Memo";
        case Me:
          C = g._payload, g = g._init;
          try {
            return Et(g(C));
          } catch {
          }
      }
    return null;
  }
  var Ke = {};
  function We(g, C) {
    if (g = g.contextTypes, !g)
      return Ke;
    var I = {}, X;
    for (X in g)
      I[X] = C[X];
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
  function ft(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && ft(g);
  }
  function qe(g) {
    var C = g.parent;
    C !== null && qe(C), g.context._currentValue2 = g.value;
  }
  function it(g, C) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === C.depth ? $e(g, C) : it(g, C);
  }
  function yt(g, C) {
    var I = C.parent;
    if (I === null)
      throw Error(t(402));
    g.depth === I.depth ? $e(g, I) : yt(g, I), C.context._currentValue2 = C.value;
  }
  function ht(g) {
    var C = Be;
    C !== g && (C === null ? qe(g) : g === null ? ft(C) : C.depth === g.depth ? $e(C, g) : C.depth > g.depth ? it(C, g) : yt(C, g), Be = g);
  }
  var _t = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, C) {
    g = g._reactInternals, g.queue !== null && g.queue.push(C);
  }, enqueueReplaceState: function(g, C) {
    g = g._reactInternals, g.replace = !0, g.queue = [C];
  }, enqueueForceUpdate: function() {
  } };
  function tn(g, C, I, X) {
    var Se = g.state !== void 0 ? g.state : null;
    g.updater = _t, g.props = I, g.state = Se;
    var ge = { queue: [], replace: !1 };
    g._reactInternals = ge;
    var Le = C.contextType;
    if (g.context = typeof Le == "object" && Le !== null ? Le._currentValue2 : X, Le = C.getDerivedStateFromProps, typeof Le == "function" && (Le = Le(I, Se), Se = Le == null ? Se : ne({}, Se, Le), g.state = Se), typeof C.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (C = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), C !== g.state && _t.enqueueReplaceState(g, g.state, null), ge.queue !== null && 0 < ge.queue.length)
        if (C = ge.queue, Le = ge.replace, ge.queue = null, ge.replace = !1, Le && C.length === 1)
          g.state = C[0];
        else {
          for (ge = Le ? C[0] : g.state, Se = !0, Le = Le ? 1 : 0; Le < C.length; Le++) {
            var je = C[Le];
            je = typeof je == "function" ? je.call(g, ge, I, X) : je, je != null && (Se ? (Se = !1, ge = ne({}, ge, je)) : ne(ge, je));
          }
          g.state = ge;
        }
      else
        ge.queue = null;
  }
  var Xt = { id: 1, overflow: "" };
  function gt(g, C, I) {
    var X = g.id;
    g = g.overflow;
    var Se = 32 - Rt(X) - 1;
    X &= ~(1 << Se), I += 1;
    var ge = 32 - Rt(C) + Se;
    if (30 < ge) {
      var Le = Se - Se % 5;
      return ge = (X & (1 << Le) - 1).toString(32), X >>= Le, Se -= Le, { id: 1 << 32 - Rt(C) + Se | I << Se | X, overflow: ge + g };
    }
    return { id: 1 << ge | I << Se | X, overflow: g };
  }
  var Rt = Math.clz32 ? Math.clz32 : qt, hn = Math.log, on = Math.LN2;
  function qt(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (hn(g) / on | 0) | 0;
  }
  function yn(g, C) {
    return g === C && (g !== 0 || 1 / g === 1 / C) || g !== g && C !== C;
  }
  var Fe = typeof Object.is == "function" ? Object.is : yn, vt = null, Ht = null, It = null, At = null, xn = !1, Mt = !1, ln = 0, cn = null, Tn = 0;
  function Jt() {
    if (vt === null)
      throw Error(t(321));
    return vt;
  }
  function jt() {
    if (0 < Tn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Pn() {
    return At === null ? It === null ? (xn = !1, It = At = jt()) : (xn = !0, At = It) : At.next === null ? (xn = !1, At = At.next = jt()) : (xn = !0, At = At.next), At;
  }
  function Mn() {
    Ht = vt = null, Mt = !1, It = null, Tn = 0, At = cn = null;
  }
  function Hn(g, C) {
    return typeof C == "function" ? C(g) : C;
  }
  function Ut(g, C, I) {
    if (vt = Jt(), At = Pn(), xn) {
      var X = At.queue;
      if (C = X.dispatch, cn !== null && (I = cn.get(X), I !== void 0)) {
        cn.delete(X), X = At.memoizedState;
        do
          X = g(X, I.action), I = I.next;
        while (I !== null);
        return At.memoizedState = X, [X, C];
      }
      return [At.memoizedState, C];
    }
    return g = g === Hn ? typeof C == "function" ? C() : C : I !== void 0 ? I(C) : C, At.memoizedState = g, g = At.queue = { last: null, dispatch: null }, g = g.dispatch = Wn.bind(null, vt, g), [At.memoizedState, g];
  }
  function zn(g, C) {
    if (vt = Jt(), At = Pn(), C = C === void 0 ? null : C, At !== null) {
      var I = At.memoizedState;
      if (I !== null && C !== null) {
        var X = I[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var Se = 0; Se < X.length && Se < C.length; Se++)
              if (!Fe(C[Se], X[Se])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
          return I[0];
      }
    }
    return g = g(), At.memoizedState = [g, C], g;
  }
  function Wn(g, C, I) {
    if (25 <= Tn)
      throw Error(t(301));
    if (g === vt)
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
  var De = { readContext: function(g) {
    return g._currentValue2;
  }, useContext: function(g) {
    return Jt(), g._currentValue2;
  }, useMemo: zn, useReducer: Ut, useRef: function(g) {
    vt = Jt(), At = Pn();
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
    g = g.id, g = (g & ~(1 << 32 - Rt(g) - 1)).toString(32) + C;
    var I = ut;
    if (I === null)
      throw Error(t(404));
    return C = ln++, g = ":" + I.idPrefix + "R" + g, 0 < C && (g += "H" + C.toString(32)), g + ":";
  }, useMutableSource: function(g, C) {
    return Jt(), C(g._source);
  }, useSyncExternalStore: function(g, C, I) {
    if (I === void 0)
      throw Error(t(407));
    return I();
  } }, ut = null, ct = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function $(g) {
    return console.error(g), null;
  }
  function Ne() {
  }
  function Ge(g, C, I, X, Se, ge, Le, je, rt) {
    var mt = [], re = /* @__PURE__ */ new Set();
    return C = { destination: null, responseState: C, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: re, pingedTasks: mt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? $ : Se, onAllReady: ge === void 0 ? Ne : ge, onShellReady: Le === void 0 ? Ne : Le, onShellError: je === void 0 ? Ne : je, onFatalError: rt === void 0 ? Ne : rt }, I = ot(C, 0, null, I, !1, !1), I.parentFlushed = !0, g = Ve(C, g, null, I, re, Ke, null, Xt), mt.push(g), C;
  }
  function Ve(g, C, I, X, Se, ge, Le, je) {
    g.allPendingTasks++, I === null ? g.pendingRootTasks++ : I.pendingTasks++;
    var rt = { node: C, ping: function() {
      var mt = g.pingedTasks;
      mt.push(rt), mt.length === 1 && sn(g);
    }, blockedBoundary: I, blockedSegment: X, abortSet: Se, legacyContext: ge, context: Le, treeContext: je };
    return Se.add(rt), rt;
  }
  function ot(g, C, I, X, Se, ge) {
    return { status: 0, id: -1, index: C, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: I, lastPushedText: Se, textEmbedded: ge };
  }
  function nt(g, C) {
    if (g = g.onError(C), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function St(g, C) {
    var I = g.onShellError;
    I(C), I = g.onFatalError, I(C), g.destination !== null ? (g.status = 2, g.destination.destroy(C)) : (g.status = 1, g.fatalError = C);
  }
  function Dt(g, C, I, X, Se) {
    for (vt = {}, Ht = C, ln = 0, g = I(X, Se); Mt; )
      Mt = !1, ln = 0, Tn += 1, At = null, g = I(X, Se);
    return Mn(), g;
  }
  function Qe(g, C, I, X) {
    var Se = I.render(), ge = X.childContextTypes;
    if (ge != null) {
      var Le = C.legacyContext;
      if (typeof I.getChildContext != "function")
        X = Le;
      else {
        I = I.getChildContext();
        for (var je in I)
          if (!(je in ge))
            throw Error(t(108, Et(X) || "Unknown", je));
        X = ne({}, Le, I);
      }
      C.legacyContext = X, Ft(g, C, Se), C.legacyContext = Le;
    } else
      Ft(g, C, Se);
  }
  function Kt(g, C) {
    if (g && g.defaultProps) {
      C = ne({}, C), g = g.defaultProps;
      for (var I in g)
        C[I] === void 0 && (C[I] = g[I]);
      return C;
    }
    return C;
  }
  function zt(g, C, I, X, Se) {
    if (typeof I == "function")
      if (I.prototype && I.prototype.isReactComponent) {
        Se = We(I, C.legacyContext);
        var ge = I.contextType;
        ge = new I(X, typeof ge == "object" && ge !== null ? ge._currentValue2 : Se), tn(ge, I, X, Se), Qe(g, C, ge, I);
      } else {
        ge = We(I, C.legacyContext), Se = Dt(g, C, I, X, ge);
        var Le = ln !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          tn(Se, I, X, ge), Qe(g, C, Se, I);
        else if (Le) {
          X = C.treeContext, C.treeContext = gt(X, 1, 0);
          try {
            Ft(g, C, Se);
          } finally {
            C.treeContext = X;
          }
        } else
          Ft(g, C, Se);
      }
    else if (typeof I == "string") {
      switch (Se = C.blockedSegment, ge = Y(Se.chunks, I, X, g.responseState, Se.formatContext), Se.lastPushedText = !1, Le = Se.formatContext, Se.formatContext = D(Le, I, X), Nt(g, C, ge), Se.formatContext = Le, I) {
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
        case Ze:
        case Xe:
        case ye:
        case Pe:
        case be:
          Ft(g, C, X.children);
          return;
        case Te:
          Ft(g, C, X.children);
          return;
        case we:
          throw Error(t(343));
        case he:
          e: {
            I = C.blockedBoundary, Se = C.blockedSegment, ge = X.fallback, X = X.children, Le = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Le, errorDigest: null }, rt = ot(g, Se.chunks.length, je, Se.formatContext, !1, !1);
            Se.children.push(rt), Se.lastPushedText = !1;
            var mt = ot(g, 0, null, Se.formatContext, !1, !1);
            mt.parentFlushed = !0, C.blockedBoundary = je, C.blockedSegment = mt;
            try {
              if (Nt(
                g,
                C,
                X
              ), g.responseState.generateStaticMarkup || mt.lastPushedText && mt.textEmbedded && mt.chunks.push("<!-- -->"), mt.status = 1, Wt(je, mt), je.pendingTasks === 0)
                break e;
            } catch (re) {
              mt.status = 4, je.forceClientRender = !0, je.errorDigest = nt(g, re);
            } finally {
              C.blockedBoundary = I, C.blockedSegment = Se;
            }
            C = Ve(g, ge, I, rt, Le, C.legacyContext, C.context, C.treeContext), g.pingedTasks.push(C);
          }
          return;
      }
      if (typeof I == "object" && I !== null)
        switch (I.$$typeof) {
          case Ee:
            if (X = Dt(g, C, I.render, X, Se), ln !== 0) {
              I = C.treeContext, C.treeContext = gt(I, 1, 0);
              try {
                Ft(g, C, X);
              } finally {
                C.treeContext = I;
              }
            } else
              Ft(g, C, X);
            return;
          case J:
            I = I.type, X = Kt(I, X), zt(g, C, I, X, Se);
            return;
          case oe:
            if (Se = X.children, I = I._context, X = X.value, ge = I._currentValue2, I._currentValue2 = X, Le = Be, Be = X = { parent: Le, depth: Le === null ? 0 : Le.depth + 1, context: I, parentValue: ge, value: X }, C.context = X, Ft(g, C, Se), g = Be, g === null)
              throw Error(t(403));
            X = g.parentValue, g.context._currentValue2 = X === et ? g.context._defaultValue : X, g = Be = g.parent, C.context = g;
            return;
          case Ie:
            X = X.children, X = X(I._currentValue2), Ft(g, C, X);
            return;
          case Me:
            Se = I._init, I = Se(I._payload), X = Kt(I, X), zt(
              g,
              C,
              I,
              X,
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
        case ze:
          throw Error(t(257));
        case Me:
          var X = I._init;
          I = X(I._payload), Ft(g, C, I);
          return;
      }
      if (m(I)) {
        pt(g, C, I);
        return;
      }
      if (I === null || typeof I != "object" ? X = null : (X = Ue && I[Ue] || I["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call(I))) {
        if (I = X.next(), !I.done) {
          var Se = [];
          do
            Se.push(I.value), I = X.next();
          while (!I.done);
          pt(g, C, Se);
        }
        return;
      }
      throw g = Object.prototype.toString.call(I), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : g));
    }
    typeof I == "string" ? (X = C.blockedSegment, X.lastPushedText = K(C.blockedSegment.chunks, I, g.responseState, X.lastPushedText)) : typeof I == "number" && (X = C.blockedSegment, X.lastPushedText = K(C.blockedSegment.chunks, "" + I, g.responseState, X.lastPushedText));
  }
  function pt(g, C, I) {
    for (var X = I.length, Se = 0; Se < X; Se++) {
      var ge = C.treeContext;
      C.treeContext = gt(ge, X, Se);
      try {
        Nt(g, C, I[Se]);
      } finally {
        C.treeContext = ge;
      }
    }
  }
  function Nt(g, C, I) {
    var X = C.blockedSegment.formatContext, Se = C.legacyContext, ge = C.context;
    try {
      return Ft(g, C, I);
    } catch (rt) {
      if (Mn(), typeof rt == "object" && rt !== null && typeof rt.then == "function") {
        I = rt;
        var Le = C.blockedSegment, je = ot(g, Le.chunks.length, null, Le.formatContext, Le.lastPushedText, !0);
        Le.children.push(je), Le.lastPushedText = !1, g = Ve(g, C.node, C.blockedBoundary, je, C.abortSet, C.legacyContext, C.context, C.treeContext).ping, I.then(g, g), C.blockedSegment.formatContext = X, C.legacyContext = Se, C.context = ge, ht(ge);
      } else
        throw C.blockedSegment.formatContext = X, C.legacyContext = Se, C.context = ge, ht(ge), rt;
    }
  }
  function Tt(g) {
    var C = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, dn(this, C, g);
  }
  function Yt(g, C, I) {
    var X = g.blockedBoundary;
    g.blockedSegment.status = 3, X === null ? (C.allPendingTasks--, C.status !== 2 && (C.status = 2, C.destination !== null && C.destination.push(null))) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, g = I === void 0 ? Error(t(432)) : I, X.errorDigest = C.onError(g), X.parentFlushed && C.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(Se) {
      return Yt(Se, C, I);
    }), X.fallbackAbortableTasks.clear(), C.allPendingTasks--, C.allPendingTasks === 0 && (X = C.onAllReady, X()));
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
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = Ne, C = g.onShellReady, C());
    } else
      C.pendingTasks--, C.forceClientRender || (C.pendingTasks === 0 ? (I.parentFlushed && I.status === 1 && Wt(C, I), C.parentFlushed && g.completedBoundaries.push(C), C.fallbackAbortableTasks.forEach(Tt, g), C.fallbackAbortableTasks.clear()) : I.parentFlushed && I.status === 1 && (Wt(C, I), C.completedSegments.length === 1 && C.parentFlushed && g.partialBoundaries.push(C)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function sn(g) {
    if (g.status !== 2) {
      var C = Be, I = ct.current;
      ct.current = De;
      var X = ut;
      ut = g.responseState;
      try {
        var Se = g.pingedTasks, ge;
        for (ge = 0; ge < Se.length; ge++) {
          var Le = Se[ge], je = g, rt = Le.blockedSegment;
          if (rt.status === 0) {
            ht(Le.context);
            try {
              Ft(je, Le, Le.node), je.responseState.generateStaticMarkup || rt.lastPushedText && rt.textEmbedded && rt.chunks.push("<!-- -->"), Le.abortSet.delete(Le), rt.status = 1, dn(je, Le.blockedBoundary, rt);
            } catch (xt) {
              if (Mn(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var mt = Le.ping;
                xt.then(mt, mt);
              } else {
                Le.abortSet.delete(Le), rt.status = 4;
                var re = Le.blockedBoundary, le = xt, me = nt(je, le);
                if (re === null ? St(je, le) : (re.pendingTasks--, re.forceClientRender || (re.forceClientRender = !0, re.errorDigest = me, re.parentFlushed && je.clientRenderedBoundaries.push(re))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var Re = je.onAllReady;
                  Re();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ge), g.destination !== null && In(g, g.destination);
      } catch (xt) {
        nt(g, xt), St(g, xt);
      } finally {
        ut = X, ct.current = I, I === De && ht(C);
      }
    }
  }
  function nn(g, C, I) {
    switch (I.parentFlushed = !0, I.status) {
      case 0:
        var X = I.id = g.nextSegmentId++;
        return I.lastPushedText = !1, I.textEmbedded = !1, g = g.responseState, C.push('<template id="'), C.push(g.placeholderPrefix), g = X.toString(16), C.push(g), C.push('"></template>');
      case 1:
        I.status = 2;
        var Se = !0;
        X = I.chunks;
        var ge = 0;
        I = I.children;
        for (var Le = 0; Le < I.length; Le++) {
          for (Se = I[Le]; ge < Se.index; ge++)
            C.push(X[ge]);
          Se = Zt(g, C, Se);
        }
        for (; ge < X.length - 1; ge++)
          C.push(X[ge]);
        return ge < X.length && (Se = C.push(X[ge])), Se;
      default:
        throw Error(t(390));
    }
  }
  function Zt(g, C, I) {
    var X = I.boundary;
    if (X === null)
      return nn(g, C, I);
    if (X.parentFlushed = !0, X.forceClientRender)
      return g.responseState.generateStaticMarkup || (X = X.errorDigest, C.push("<!--$!-->"), C.push("<template"), X && (C.push(' data-dgst="'), X = k(X), C.push(X), C.push('"')), C.push("></template>")), nn(g, C, I), g = g.responseState.generateStaticMarkup ? !0 : C.push("<!--/$-->"), g;
    if (0 < X.pendingTasks) {
      X.rootSegmentID = g.nextSegmentId++, 0 < X.completedSegments.length && g.partialBoundaries.push(X);
      var Se = g.responseState, ge = Se.nextSuspenseID++;
      return Se = Se.boundaryPrefix + ge.toString(16), X = X.id = Se, W(C, g.responseState, X), nn(g, C, I), C.push("<!--/$-->");
    }
    if (X.byteSize > g.progressiveChunkSize)
      return X.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(X), W(C, g.responseState, X.id), nn(g, C, I), C.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || C.push("<!--$-->"), I = X.completedSegments, I.length !== 1)
      throw Error(t(391));
    return Zt(g, C, I[0]), g = g.responseState.generateStaticMarkup ? !0 : C.push("<!--/$-->"), g;
  }
  function En(g, C, I) {
    return B(C, g.responseState, I.formatContext, I.id), Zt(g, C, I), ie(C, I.formatContext);
  }
  function un(g, C, I) {
    for (var X = I.completedSegments, Se = 0; Se < X.length; Se++)
      kn(g, C, I, X[Se]);
    if (X.length = 0, g = g.responseState, X = I.id, I = I.rootSegmentID, C.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? C.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, C.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), X === null)
      throw Error(t(395));
    return I = I.toString(16), C.push(X), C.push('","'), C.push(g.segmentPrefix), C.push(I), C.push('")<\/script>');
  }
  function kn(g, C, I, X) {
    if (X.status === 2)
      return !0;
    var Se = X.id;
    if (Se === -1) {
      if ((X.id = I.rootSegmentID) === -1)
        throw Error(t(392));
      return En(g, C, X);
    }
    return En(g, C, X), g = g.responseState, C.push(g.startInlineScript), g.sentCompleteSegmentFunction ? C.push('$RS("') : (g.sentCompleteSegmentFunction = !0, C.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), C.push(g.segmentPrefix), Se = Se.toString(16), C.push(Se), C.push('","'), C.push(g.placeholderPrefix), C.push(Se), C.push('")<\/script>');
  }
  function In(g, C) {
    try {
      var I = g.completedRootSegment;
      if (I !== null && g.pendingRootTasks === 0) {
        Zt(g, C, I), g.completedRootSegment = null;
        var X = g.responseState.bootstrapChunks;
        for (I = 0; I < X.length - 1; I++)
          C.push(X[I]);
        I < X.length && C.push(X[I]);
      }
      var Se = g.clientRenderedBoundaries, ge;
      for (ge = 0; ge < Se.length; ge++) {
        var Le = Se[ge];
        X = C;
        var je = g.responseState, rt = Le.id, mt = Le.errorDigest, re = Le.errorMessage, le = Le.errorComponentStack;
        if (X.push(je.startInlineScript), je.sentClientRenderFunction ? X.push('$RX("') : (je.sentClientRenderFunction = !0, X.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), rt === null)
          throw Error(t(395));
        if (X.push(rt), X.push('"'), mt || re || le) {
          X.push(",");
          var me = se(mt || "");
          X.push(me);
        }
        if (re || le) {
          X.push(",");
          var Re = se(re || "");
          X.push(Re);
        }
        if (le) {
          X.push(",");
          var xt = se(le);
          X.push(xt);
        }
        if (!X.push(")<\/script>")) {
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
      var wn = g.partialBoundaries;
      for (ge = 0; ge < wn.length; ge++) {
        var fr = wn[ge];
        e: {
          Se = g, Le = C;
          var $n = fr.completedSegments;
          for (je = 0; je < $n.length; je++)
            if (!kn(Se, Le, fr, $n[je])) {
              je++, $n.splice(0, je);
              var Tr = !1;
              break e;
            }
          $n.splice(0, je), Tr = !0;
        }
        if (!Tr) {
          g.destination = null, ge++, wn.splice(0, ge);
          return;
        }
      }
      wn.splice(0, ge);
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
      I.forEach(function(X) {
        return Yt(X, g, C);
      }), I.clear(), g.destination !== null && In(g, g.destination);
    } catch (X) {
      nt(g, X), St(g, X);
    }
  }
  function Zn() {
  }
  function Xn(g, C, I, X) {
    var Se = !1, ge = null, Le = "", je = { push: function(mt) {
      return mt !== null && (Le += mt), !0;
    }, destroy: function(mt) {
      Se = !0, ge = mt;
    } }, rt = !1;
    if (g = Ge(g, Q(I, C ? C.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Zn, void 0, function() {
      rt = !0;
    }, void 0, void 0), sn(g), Yn(g, X), g.status === 1)
      g.status = 2, je.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = je;
      try {
        In(g, je);
      } catch (mt) {
        nt(g, mt), St(g, mt);
      }
    }
    if (Se)
      throw ge;
    if (!rt)
      throw Error(t(426));
    return Le;
  }
  return wi.renderToNodeStream = function() {
    throw Error(t(207));
  }, wi.renderToStaticMarkup = function(g, C) {
    return Xn(g, C, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wi.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, wi.renderToString = function(g, C) {
    return Xn(g, C, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, wi.version = "18.2.0", wi;
}
var wu = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function BS() {
  if (Ah)
    return wu;
  Ah = 1;
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
  function c(x) {
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
  function w(x, A, z, G, ke, xe, _e) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = G, this.attributeNamespace = ke, this.mustUseProperty = z, this.propertyName = x, this.type = A, this.sanitizeURL = xe, this.removeEmptyString = _e;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    m[x] = new w(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var A = x[0];
    m[A] = new w(A, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    m[x] = new w(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    m[x] = new w(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    m[x] = new w(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    m[x] = new w(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    m[x] = new w(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    m[x] = new w(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    m[x] = new w(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var _ = /[\-:]([a-z])/g;
  function D(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var A = x.replace(
      _,
      D
    );
    m[A] = new w(A, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var A = x.replace(_, D);
    m[A] = new w(A, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var A = x.replace(_, D);
    m[A] = new w(A, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    m[x] = new w(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    m[x] = new w(x, 1, !1, x.toLowerCase(), null, !0, !0);
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
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(P).forEach(function(x) {
    O.forEach(function(A) {
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
      var z = "", G, ke = 0;
      for (G = A.index; G < x.length; G++) {
        switch (x.charCodeAt(G)) {
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
        ke !== G && (z += x.substring(ke, G)), ke = G + 1, z += A;
      }
      x = ke !== G ? z + x.substring(ke, G) : z;
    }
    return x;
  }
  var V = /([A-Z])/g, q = /^ms-/, ce = Array.isArray, ee = h("<script>"), j = h("<\/script>"), Y = h('<script src="'), W = h('<script type="module" src="'), B = h('" async=""><\/script>'), ie = /(<\/|<)(s)(cript)/gi;
  function ae(x, A, z, G) {
    return "" + A + (z === "s" ? "\\u0073" : "\\u0053") + G;
  }
  function se(x, A, z, G, ke) {
    x = x === void 0 ? "" : x, A = A === void 0 ? ee : h('<script nonce="' + U(A) + '">');
    var xe = [];
    if (z !== void 0 && xe.push(A, c(("" + z).replace(ie, ae)), j), G !== void 0)
      for (z = 0; z < G.length; z++)
        xe.push(Y, c(U(G[z])), B);
    if (ke !== void 0)
      for (G = 0; G < ke.length; G++)
        xe.push(W, c(U(ke[G])), B);
    return { bootstrapChunks: xe, startInlineScript: A, placeholderPrefix: h(x + "P:"), segmentPrefix: h(x + "S:"), boundaryPrefix: x + "B:", idPrefix: x, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Q(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function K(x) {
    return Q(x === "http://www.w3.org/2000/svg" ? 2 : x === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ne(x, A, z) {
    switch (A) {
      case "select":
        return Q(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return Q(2, null);
      case "math":
        return Q(3, null);
      case "foreignObject":
        return Q(1, null);
      case "table":
        return Q(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Q(5, null);
      case "colgroup":
        return Q(7, null);
      case "tr":
        return Q(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? Q(1, null) : x;
  }
  var ue = h("<!-- -->");
  function ze(x, A, z, G) {
    return A === "" ? G : (G && x.push(ue), x.push(c(U(A))), !0);
  }
  var be = /* @__PURE__ */ new Map(), ye = h(' style="'), Pe = h(":"), oe = h(";");
  function Ie(x, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var G in z)
      if (v.call(z, G)) {
        var ke = z[G];
        if (ke != null && typeof ke != "boolean" && ke !== "") {
          if (G.indexOf("--") === 0) {
            var xe = c(U(G));
            ke = c(U(("" + ke).trim()));
          } else {
            xe = G;
            var _e = be.get(xe);
            _e !== void 0 || (_e = h(U(xe.replace(V, "-$1").toLowerCase().replace(q, "-ms-"))), be.set(xe, _e)), xe = _e, ke = typeof ke == "number" ? ke === 0 || v.call(P, G) ? c("" + ke) : c(ke + "px") : c(U(("" + ke).trim()));
          }
          A ? (A = !1, x.push(ye, xe, Pe, ke)) : x.push(oe, xe, Pe, ke);
        }
      }
    A || x.push(Te);
  }
  var Ee = h(" "), he = h('="'), Te = h('"'), J = h('=""');
  function Me(x, A, z, G) {
    switch (z) {
      case "style":
        Ie(x, A, G);
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
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = c(A.attributeName), A.type) {
          case 3:
            G && x.push(Ee, z, J);
            break;
          case 4:
            G === !0 ? x.push(Ee, z, J) : G !== !1 && x.push(Ee, z, he, c(U(G)), Te);
            break;
          case 5:
            isNaN(G) || x.push(Ee, z, he, c(U(G)), Te);
            break;
          case 6:
            !isNaN(G) && 1 <= G && x.push(Ee, z, he, c(U(G)), Te);
            break;
          default:
            A.sanitizeURL && (G = "" + G), x.push(Ee, z, he, c(U(G)), Te);
        }
      } else if (F(z)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(Ee, c(z), he, c(U(G)), Te);
      }
    }
  }
  var we = h(">"), Xe = h("/>");
  function Ze(x, A, z) {
    if (A != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push(c("" + A));
    }
  }
  function et(x) {
    var A = "";
    return e.Children.forEach(x, function(z) {
      z != null && (A += z);
    }), A;
  }
  var Ue = h(' selected=""');
  function Et(x, A, z, G) {
    x.push($e(z));
    var ke = z = null, xe;
    for (xe in A)
      if (v.call(A, xe)) {
        var _e = A[xe];
        if (_e != null)
          switch (xe) {
            case "children":
              z = _e;
              break;
            case "dangerouslySetInnerHTML":
              ke = _e;
              break;
            default:
              Me(x, G, xe, _e);
          }
      }
    return x.push(we), Ze(x, ke, z), typeof z == "string" ? (x.push(c(U(z))), null) : z;
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
  var ft = h("<!DOCTYPE html>");
  function qe(x, A, z, G, ke) {
    switch (A) {
      case "select":
        x.push($e("select"));
        var xe = null, _e = null;
        for (Pt in z)
          if (v.call(z, Pt)) {
            var Ye = z[Pt];
            if (Ye != null)
              switch (Pt) {
                case "children":
                  xe = Ye;
                  break;
                case "dangerouslySetInnerHTML":
                  _e = Ye;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Me(x, G, Pt, Ye);
              }
          }
        return x.push(we), Ze(x, _e, xe), xe;
      case "option":
        _e = ke.selectedValue, x.push($e("option"));
        var bt = Ye = null, Ot = null, Pt = null;
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
                  bt = rn;
                default:
                  Me(x, G, xe, rn);
              }
          }
        if (_e != null)
          if (z = bt !== null ? "" + bt : et(Ye), ce(_e)) {
            for (G = 0; G < _e.length; G++)
              if ("" + _e[G] === z) {
                x.push(Ue);
                break;
              }
          } else
            "" + _e === z && x.push(Ue);
        else
          Ot && x.push(Ue);
        return x.push(we), Ze(x, Pt, Ye), Ye;
      case "textarea":
        x.push($e("textarea")), Pt = _e = xe = null;
        for (Ye in z)
          if (v.call(z, Ye) && (bt = z[Ye], bt != null))
            switch (Ye) {
              case "children":
                Pt = bt;
                break;
              case "value":
                xe = bt;
                break;
              case "defaultValue":
                _e = bt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                Me(x, G, Ye, bt);
            }
        if (xe === null && _e !== null && (xe = _e), x.push(we), Pt != null) {
          if (xe != null)
            throw Error(t(92));
          if (ce(Pt) && 1 < Pt.length)
            throw Error(t(93));
          xe = "" + Pt;
        }
        return typeof xe == "string" && xe[0] === `
` && x.push(Ke), xe !== null && x.push(c(U("" + xe))), null;
      case "input":
        x.push($e("input")), bt = Pt = Ye = xe = null;
        for (_e in z)
          if (v.call(z, _e) && (Ot = z[_e], Ot != null))
            switch (_e) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                bt = Ot;
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
                Me(x, G, _e, Ot);
            }
        return Pt !== null ? Me(
          x,
          G,
          "checked",
          Pt
        ) : bt !== null && Me(x, G, "checked", bt), xe !== null ? Me(x, G, "value", xe) : Ye !== null && Me(x, G, "value", Ye), x.push(Xe), null;
      case "menuitem":
        x.push($e("menuitem"));
        for (var Un in z)
          if (v.call(z, Un) && (xe = z[Un], xe != null))
            switch (Un) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                Me(x, G, Un, xe);
            }
        return x.push(we), null;
      case "title":
        x.push($e("title")), xe = null;
        for (rn in z)
          if (v.call(z, rn) && (_e = z[rn], _e != null))
            switch (rn) {
              case "children":
                xe = _e;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                Me(x, G, rn, _e);
            }
        return x.push(we), xe;
      case "listing":
      case "pre":
        x.push($e(A)), _e = xe = null;
        for (bt in z)
          if (v.call(z, bt) && (Ye = z[bt], Ye != null))
            switch (bt) {
              case "children":
                xe = Ye;
                break;
              case "dangerouslySetInnerHTML":
                _e = Ye;
                break;
              default:
                Me(x, G, bt, Ye);
            }
        if (x.push(we), _e != null) {
          if (xe != null)
            throw Error(t(60));
          if (typeof _e != "object" || !("__html" in _e))
            throw Error(t(61));
          z = _e.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? x.push(Ke, c(z)) : x.push(c("" + z)));
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
                Me(x, G, Jn, xe);
            }
        return x.push(Xe), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Et(x, z, A, G);
      case "html":
        return ke.insertionMode === 0 && x.push(ft), Et(x, z, A, G);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return Et(x, z, A, G);
        x.push($e(A)), _e = xe = null;
        for (Ot in z)
          if (v.call(z, Ot) && (Ye = z[Ot], Ye != null))
            switch (Ot) {
              case "children":
                xe = Ye;
                break;
              case "dangerouslySetInnerHTML":
                _e = Ye;
                break;
              case "style":
                Ie(x, G, Ye);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                F(Ot) && typeof Ye != "function" && typeof Ye != "symbol" && x.push(Ee, c(Ot), he, c(U(Ye)), Te);
            }
        return x.push(we), Ze(x, _e, xe), xe;
    }
  }
  var it = h("</"), yt = h(">"), ht = h('<template id="'), _t = h('"></template>'), tn = h("<!--$-->"), Xt = h('<!--$?--><template id="'), gt = h('"></template>'), Rt = h("<!--$!-->"), hn = h("<!--/$-->"), on = h("<template"), qt = h('"'), yn = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var Fe = h("></template>");
  function vt(x, A, z) {
    if (a(x, Xt), z === null)
      throw Error(t(395));
    return a(x, z), l(x, gt);
  }
  var Ht = h('<div hidden id="'), It = h('">'), At = h("</div>"), xn = h('<svg aria-hidden="true" style="display:none" id="'), Mt = h('">'), ln = h("</svg>"), cn = h('<math aria-hidden="true" style="display:none" id="'), Tn = h('">'), Jt = h("</math>"), jt = h('<table hidden id="'), Pn = h('">'), Mn = h("</table>"), Hn = h('<table hidden><tbody id="'), Ut = h('">'), zn = h("</tbody></table>"), Wn = h('<table hidden><tr id="'), An = h('">'), Sn = h("</tr></table>"), De = h('<table hidden><colgroup id="'), ut = h('">'), ct = h("</colgroup></table>");
  function $(x, A, z, G) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return a(x, Ht), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, It);
      case 2:
        return a(x, xn), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, Mt);
      case 3:
        return a(x, cn), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, Tn);
      case 4:
        return a(x, jt), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, Pn);
      case 5:
        return a(x, Hn), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, Ut);
      case 6:
        return a(x, Wn), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, An);
      case 7:
        return a(
          x,
          De
        ), a(x, A.segmentPrefix), a(x, c(G.toString(16))), l(x, ut);
      default:
        throw Error(t(397));
    }
  }
  function Ne(x, A) {
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
        return l(x, ct);
      default:
        throw Error(t(397));
    }
  }
  var Ge = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ve = h('$RS("'), ot = h('","'), nt = h('")<\/script>'), St = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Dt = h('$RC("'), Qe = h('","'), Kt = h('")<\/script>'), zt = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ft = h('$RX("'), pt = h('"'), Nt = h(")<\/script>"), Tt = h(","), Yt = /[<\u2028\u2029]/g;
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
  var dn = Object.assign, sn = Symbol.for("react.element"), nn = Symbol.for("react.portal"), Zt = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), un = Symbol.for("react.profiler"), kn = Symbol.for("react.provider"), In = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Zn = Symbol.for("react.suspense"), Xn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), I = Symbol.for("react.scope"), X = Symbol.for("react.debug_trace_mode"), Se = Symbol.for("react.legacy_hidden"), ge = Symbol.for("react.default_value"), Le = Symbol.iterator;
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
  function mt(x, A) {
    if (x = x.contextTypes, !x)
      return rt;
    var z = {}, G;
    for (G in x)
      z[G] = A[G];
    return z;
  }
  var re = null;
  function le(x, A) {
    if (x !== A) {
      x.context._currentValue = x.parentValue, x = x.parent;
      var z = A.parent;
      if (x === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        le(x, z);
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
  function xt(x, A) {
    if (x.context._currentValue = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? le(x, A) : xt(x, A);
  }
  function gn(x, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    x.depth === z.depth ? le(x, z) : gn(x, z), A.context._currentValue = A.value;
  }
  function wn(x) {
    var A = re;
    A !== x && (A === null ? Re(x) : x === null ? me(A) : A.depth === x.depth ? le(A, x) : A.depth > x.depth ? xt(A, x) : gn(A, x), re = x);
  }
  var fr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function $n(x, A, z, G) {
    var ke = x.state !== void 0 ? x.state : null;
    x.updater = fr, x.props = z, x.state = ke;
    var xe = { queue: [], replace: !1 };
    x._reactInternals = xe;
    var _e = A.contextType;
    if (x.context = typeof _e == "object" && _e !== null ? _e._currentValue : G, _e = A.getDerivedStateFromProps, typeof _e == "function" && (_e = _e(z, ke), ke = _e == null ? ke : dn({}, ke, _e), x.state = ke), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && fr.enqueueReplaceState(x, x.state, null), xe.queue !== null && 0 < xe.queue.length)
        if (A = xe.queue, _e = xe.replace, xe.queue = null, xe.replace = !1, _e && A.length === 1)
          x.state = A[0];
        else {
          for (xe = _e ? A[0] : x.state, ke = !0, _e = _e ? 1 : 0; _e < A.length; _e++) {
            var Ye = A[_e];
            Ye = typeof Ye == "function" ? Ye.call(x, xe, z, G) : Ye, Ye != null && (ke ? (ke = !1, xe = dn({}, xe, Ye)) : dn(xe, Ye));
          }
          x.state = xe;
        }
      else
        xe.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function pr(x, A, z) {
    var G = x.id;
    x = x.overflow;
    var ke = 32 - Gr(G) - 1;
    G &= ~(1 << ke), z += 1;
    var xe = 32 - Gr(A) + ke;
    if (30 < xe) {
      var _e = ke - ke % 5;
      return xe = (G & (1 << _e) - 1).toString(32), G >>= _e, ke -= _e, { id: 1 << 32 - Gr(A) + ke | z << ke | G, overflow: xe + x };
    }
    return { id: 1 << xe | z << ke | G, overflow: x };
  }
  var Gr = Math.clz32 ? Math.clz32 : Ba, Zo = Math.log, Qo = Math.LN2;
  function Ba(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Zo(x) / Qo | 0) | 0;
  }
  function Jo(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Ha = typeof Object.is == "function" ? Object.is : Jo, hr = null, qr = null, ca = null, en = null, mr = !1, Vn = !1, wr = 0, yr = null, da = 0;
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
    qr = hr = null, Vn = !1, ca = null, da = 0, en = yr = null;
  }
  function Ii(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function $i(x, A, z) {
    if (hr = gr(), en = Wa(), mr) {
      var G = en.queue;
      if (A = G.dispatch, yr !== null && (z = yr.get(G), z !== void 0)) {
        yr.delete(G), G = en.memoizedState;
        do
          G = x(G, z.action), z = z.next;
        while (z !== null);
        return en.memoizedState = G, [G, A];
      }
      return [en.memoizedState, A];
    }
    return x = x === Ii ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, en.memoizedState = x, x = en.queue = { last: null, dispatch: null }, x = x.dispatch = el.bind(null, hr, x), [en.memoizedState, x];
  }
  function Bi(x, A) {
    if (hr = gr(), en = Wa(), A = A === void 0 ? null : A, en !== null) {
      var z = en.memoizedState;
      if (z !== null && A !== null) {
        var G = z[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var ke = 0; ke < G.length && ke < A.length; ke++)
              if (!Ha(A[ke], G[ke])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
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
    var x = qr.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - Gr(x) - 1)).toString(32) + A;
    var z = ha;
    if (z === null)
      throw Error(t(404));
    return A = wr++, x = ":" + z.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
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
  function ja(x, A, z, G, ke, xe, _e, Ye, bt) {
    var Ot = [], Pt = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pt, pingedTasks: Ot, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ke === void 0 ? nl : ke, onAllReady: xe === void 0 ? Qr : xe, onShellReady: _e === void 0 ? Qr : _e, onShellError: Ye === void 0 ? Qr : Ye, onFatalError: bt === void 0 ? Qr : bt }, z = _r(A, 0, null, z, !1, !1), z.parentFlushed = !0, x = Ua(A, x, null, z, Pt, rt, null, Tr), Ot.push(x), A;
  }
  function Ua(x, A, z, G, ke, xe, _e, Ye) {
    x.allPendingTasks++, z === null ? x.pendingRootTasks++ : z.pendingTasks++;
    var bt = { node: A, ping: function() {
      var Ot = x.pingedTasks;
      Ot.push(bt), Ot.length === 1 && Ki(x);
    }, blockedBoundary: z, blockedSegment: G, abortSet: ke, legacyContext: xe, context: _e, treeContext: Ye };
    return ke.add(bt), bt;
  }
  function _r(x, A, z, G, ke, xe) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: z, lastPushedText: ke, textEmbedded: xe };
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
  function Hi(x, A, z, G, ke) {
    for (hr = {}, qr = A, wr = 0, x = z(G, ke); Vn; )
      Vn = !1, wr = 0, da += 1, en = null, x = z(G, ke);
    return Va(), x;
  }
  function Ka(x, A, z, G) {
    var ke = z.render(), xe = G.childContextTypes;
    if (xe != null) {
      var _e = A.legacyContext;
      if (typeof z.getChildContext != "function")
        G = _e;
      else {
        z = z.getChildContext();
        for (var Ye in z)
          if (!(Ye in xe))
            throw Error(t(108, je(G) || "Unknown", Ye));
        G = dn({}, _e, z);
      }
      A.legacyContext = G, jn(x, A, ke), A.legacyContext = _e;
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
  function ya(x, A, z, G, ke) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        ke = mt(z, A.legacyContext);
        var xe = z.contextType;
        xe = new z(G, typeof xe == "object" && xe !== null ? xe._currentValue : ke), $n(xe, z, G, ke), Ka(x, A, xe, z);
      } else {
        xe = mt(z, A.legacyContext), ke = Hi(x, A, z, G, xe);
        var _e = wr !== 0;
        if (typeof ke == "object" && ke !== null && typeof ke.render == "function" && ke.$$typeof === void 0)
          $n(ke, z, G, xe), Ka(x, A, ke, z);
        else if (_e) {
          G = A.treeContext, A.treeContext = pr(G, 1, 0);
          try {
            jn(x, A, ke);
          } finally {
            A.treeContext = G;
          }
        } else
          jn(x, A, ke);
      }
    else if (typeof z == "string") {
      switch (ke = A.blockedSegment, xe = qe(ke.chunks, z, G, x.responseState, ke.formatContext), ke.lastPushedText = !1, _e = ke.formatContext, ke.formatContext = ne(_e, z, G), ga(x, A, xe), ke.formatContext = _e, z) {
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
          ke.chunks.push(it, c(z), yt);
      }
      ke.lastPushedText = !1;
    } else {
      switch (z) {
        case Se:
        case X:
        case En:
        case un:
        case Zt:
          jn(x, A, G.children);
          return;
        case Xn:
          jn(x, A, G.children);
          return;
        case I:
          throw Error(t(343));
        case Zn:
          e: {
            z = A.blockedBoundary, ke = A.blockedSegment, xe = G.fallback, G = G.children, _e = /* @__PURE__ */ new Set();
            var Ye = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: _e, errorDigest: null }, bt = _r(x, ke.chunks.length, Ye, ke.formatContext, !1, !1);
            ke.children.push(bt), ke.lastPushedText = !1;
            var Ot = _r(x, 0, null, ke.formatContext, !1, !1);
            Ot.parentFlushed = !0, A.blockedBoundary = Ye, A.blockedSegment = Ot;
            try {
              if (ga(
                x,
                A,
                G
              ), Ot.lastPushedText && Ot.textEmbedded && Ot.chunks.push(ue), Ot.status = 1, va(Ye, Ot), Ye.pendingTasks === 0)
                break e;
            } catch (Pt) {
              Ot.status = 4, Ye.forceClientRender = !0, Ye.errorDigest = Fr(x, Pt);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = ke;
            }
            A = Ua(x, xe, z, bt, _e, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Yn:
            if (G = Hi(x, A, z.render, G, ke), wr !== 0) {
              z = A.treeContext, A.treeContext = pr(z, 1, 0);
              try {
                jn(x, A, G);
              } finally {
                A.treeContext = z;
              }
            } else
              jn(x, A, G);
            return;
          case g:
            z = z.type, G = Wi(z, G), ya(x, A, z, G, ke);
            return;
          case kn:
            if (ke = G.children, z = z._context, G = G.value, xe = z._currentValue, z._currentValue = G, _e = re, re = G = { parent: _e, depth: _e === null ? 0 : _e.depth + 1, context: z, parentValue: xe, value: G }, A.context = G, jn(x, A, ke), x = re, x === null)
              throw Error(t(403));
            G = x.parentValue, x.context._currentValue = G === ge ? x.context._defaultValue : G, x = re = x.parent, A.context = x;
            return;
          case In:
            G = G.children, G = G(z._currentValue), jn(x, A, G);
            return;
          case C:
            ke = z._init, z = ke(z._payload), G = Wi(z, G), ya(x, A, z, G, void 0);
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
          var G = z._init;
          z = G(z._payload), jn(x, A, z);
          return;
      }
      if (ce(z)) {
        Vi(x, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? G = null : (G = Le && z[Le] || z["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call(z))) {
        if (z = G.next(), !z.done) {
          var ke = [];
          do
            ke.push(z.value), z = G.next();
          while (!z.done);
          Vi(x, A, ke);
        }
        return;
      }
      throw x = Object.prototype.toString.call(z), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : x));
    }
    typeof z == "string" ? (G = A.blockedSegment, G.lastPushedText = ze(A.blockedSegment.chunks, z, x.responseState, G.lastPushedText)) : typeof z == "number" && (G = A.blockedSegment, G.lastPushedText = ze(A.blockedSegment.chunks, "" + z, x.responseState, G.lastPushedText));
  }
  function Vi(x, A, z) {
    for (var G = z.length, ke = 0; ke < G; ke++) {
      var xe = A.treeContext;
      A.treeContext = pr(xe, G, ke);
      try {
        ga(x, A, z[ke]);
      } finally {
        A.treeContext = xe;
      }
    }
  }
  function ga(x, A, z) {
    var G = A.blockedSegment.formatContext, ke = A.legacyContext, xe = A.context;
    try {
      return jn(x, A, z);
    } catch (bt) {
      if (Va(), typeof bt == "object" && bt !== null && typeof bt.then == "function") {
        z = bt;
        var _e = A.blockedSegment, Ye = _r(x, _e.chunks.length, null, _e.formatContext, _e.lastPushedText, !0);
        _e.children.push(Ye), _e.lastPushedText = !1, x = Ua(x, A.node, A.blockedBoundary, Ye, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(x, x), A.blockedSegment.formatContext = G, A.legacyContext = ke, A.context = xe, wn(xe);
      } else
        throw A.blockedSegment.formatContext = G, A.legacyContext = ke, A.context = xe, wn(xe), bt;
    }
  }
  function rl(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Ui(this, A, x);
  }
  function ji(x, A, z) {
    var G = x.blockedBoundary;
    x.blockedSegment.status = 3, G === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.close())) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, x = z === void 0 ? Error(t(432)) : z, G.errorDigest = A.onError(x), G.parentFlushed && A.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(ke) {
      return ji(ke, A, z);
    }), G.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (G = A.onAllReady, G()));
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
      var A = re, z = Zr.current;
      Zr.current = pa;
      var G = ha;
      ha = x.responseState;
      try {
        var ke = x.pingedTasks, xe;
        for (xe = 0; xe < ke.length; xe++) {
          var _e = ke[xe], Ye = x, bt = _e.blockedSegment;
          if (bt.status === 0) {
            wn(_e.context);
            try {
              jn(Ye, _e, _e.node), bt.lastPushedText && bt.textEmbedded && bt.chunks.push(ue), _e.abortSet.delete(_e), bt.status = 1, Ui(Ye, _e.blockedBoundary, bt);
            } catch (er) {
              if (Va(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Ot = _e.ping;
                er.then(Ot, Ot);
              } else {
                _e.abortSet.delete(_e), bt.status = 4;
                var Pt = _e.blockedBoundary, rn = er, Un = Fr(Ye, rn);
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
        ha = G, Zr.current = z, z === pa && wn(A);
      }
    }
  }
  function xa(x, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var G = z.id = x.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, x = x.responseState, a(A, ht), a(A, x.placeholderPrefix), x = c(G.toString(16)), a(A, x), l(A, _t);
      case 1:
        z.status = 2;
        var ke = !0;
        G = z.chunks;
        var xe = 0;
        z = z.children;
        for (var _e = 0; _e < z.length; _e++) {
          for (ke = z[_e]; xe < ke.index; xe++)
            a(A, G[xe]);
          ke = ba(x, A, ke);
        }
        for (; xe < G.length - 1; xe++)
          a(A, G[xe]);
        return xe < G.length && (ke = l(A, G[xe])), ke;
      default:
        throw Error(t(390));
    }
  }
  function ba(x, A, z) {
    var G = z.boundary;
    if (G === null)
      return xa(x, A, z);
    if (G.parentFlushed = !0, G.forceClientRender)
      G = G.errorDigest, l(A, Rt), a(A, on), G && (a(A, yn), a(A, c(U(G))), a(A, qt)), l(A, Fe), xa(x, A, z);
    else if (0 < G.pendingTasks) {
      G.rootSegmentID = x.nextSegmentId++, 0 < G.completedSegments.length && x.partialBoundaries.push(G);
      var ke = x.responseState, xe = ke.nextSuspenseID++;
      ke = h(ke.boundaryPrefix + xe.toString(16)), G = G.id = ke, vt(A, x.responseState, G), xa(x, A, z);
    } else if (G.byteSize > x.progressiveChunkSize)
      G.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(G), vt(A, x.responseState, G.id), xa(x, A, z);
    else {
      if (l(A, tn), z = G.completedSegments, z.length !== 1)
        throw Error(t(391));
      ba(x, A, z[0]);
    }
    return l(A, hn);
  }
  function Yi(x, A, z) {
    return $(A, x.responseState, z.formatContext, z.id), ba(x, A, z), Ne(A, z.formatContext);
  }
  function Xi(x, A, z) {
    for (var G = z.completedSegments, ke = 0; ke < G.length; ke++)
      Gi(x, A, z, G[ke]);
    if (G.length = 0, x = x.responseState, G = z.id, z = z.rootSegmentID, a(A, x.startInlineScript), x.sentCompleteBoundaryFunction ? a(A, Dt) : (x.sentCompleteBoundaryFunction = !0, a(A, St)), G === null)
      throw Error(t(395));
    return z = c(z.toString(16)), a(A, G), a(A, Qe), a(A, x.segmentPrefix), a(A, z), l(A, Kt);
  }
  function Gi(x, A, z, G) {
    if (G.status === 2)
      return !0;
    var ke = G.id;
    if (ke === -1) {
      if ((G.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Yi(x, A, G);
    }
    return Yi(x, A, G), x = x.responseState, a(A, x.startInlineScript), x.sentCompleteSegmentFunction ? a(A, Ve) : (x.sentCompleteSegmentFunction = !0, a(A, Ge)), a(A, x.segmentPrefix), ke = c(ke.toString(16)), a(A, ke), a(A, ot), a(A, x.placeholderPrefix), a(A, ke), l(A, nt);
  }
  function Ya(x, A) {
    n = new Uint8Array(512), i = 0;
    try {
      var z = x.completedRootSegment;
      if (z !== null && x.pendingRootTasks === 0) {
        ba(x, A, z), x.completedRootSegment = null;
        var G = x.responseState.bootstrapChunks;
        for (z = 0; z < G.length - 1; z++)
          a(A, G[z]);
        z < G.length && l(A, G[z]);
      }
      var ke = x.clientRenderedBoundaries, xe;
      for (xe = 0; xe < ke.length; xe++) {
        var _e = ke[xe];
        G = A;
        var Ye = x.responseState, bt = _e.id, Ot = _e.errorDigest, Pt = _e.errorMessage, rn = _e.errorComponentStack;
        if (a(G, Ye.startInlineScript), Ye.sentClientRenderFunction ? a(G, Ft) : (Ye.sentClientRenderFunction = !0, a(
          G,
          zt
        )), bt === null)
          throw Error(t(395));
        a(G, bt), a(G, pt), (Ot || Pt || rn) && (a(G, Tt), a(G, c(Wt(Ot || "")))), (Pt || rn) && (a(G, Tt), a(G, c(Wt(Pt || "")))), rn && (a(G, Tt), a(G, c(Wt(rn)))), l(G, Nt);
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
          ke = x, _e = A;
          var Sa = er.completedSegments;
          for (Ye = 0; Ye < Sa.length; Ye++)
            if (!Gi(
              ke,
              _e,
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
  function qi(x, A) {
    try {
      var z = x.abortableTasks;
      z.forEach(function(G) {
        return ji(G, x, A);
      }), z.clear(), x.destination !== null && Ya(x, x.destination);
    } catch (G) {
      Fr(x, G), ma(x, G);
    }
  }
  return wu.renderToReadableStream = function(x, A) {
    return new Promise(function(z, G) {
      var ke, xe, _e = new Promise(function(Pt, rn) {
        xe = Pt, ke = rn;
      }), Ye = ja(x, se(A ? A.identifierPrefix : void 0, A ? A.nonce : void 0, A ? A.bootstrapScriptContent : void 0, A ? A.bootstrapScripts : void 0, A ? A.bootstrapModules : void 0), K(A ? A.namespaceURI : void 0), A ? A.progressiveChunkSize : void 0, A ? A.onError : void 0, xe, function() {
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
          qi(Ye);
        } }, { highWaterMark: 0 });
        Pt.allReady = _e, z(Pt);
      }, function(Pt) {
        _e.catch(function() {
        }), G(Pt);
      }, ke);
      if (A && A.signal) {
        var bt = A.signal, Ot = function() {
          qi(Ye, bt.reason), bt.removeEventListener("abort", Ot);
        };
        bt.addEventListener("abort", Ot);
      }
      Ki(Ye);
    });
  }, wu.version = "18.2.0", wu;
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
var Lh;
function HS() {
  return Lh || (Lh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = de, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(o) {
      {
        for (var u = arguments.length, b = new Array(u > 1 ? u - 1 : 0), T = 1; T < u; T++)
          b[T - 1] = arguments[T];
        l("warn", o, b);
      }
    }
    function a(o) {
      {
        for (var u = arguments.length, b = new Array(u > 1 ? u - 1 : 0), T = 1; T < u; T++)
          b[T - 1] = arguments[T];
        l("error", o, b);
      }
    }
    function l(o, u, b) {
      {
        var T = n.ReactDebugCurrentFrame, M = T.getStackAddendum();
        M !== "" && (u += "%s", b = b.concat([M]));
        var Z = b.map(function(fe) {
          return String(fe);
        });
        Z.unshift("Warning: " + u), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    function f(o) {
      o();
    }
    function d(o) {
    }
    function c(o, u) {
      h(o, u);
    }
    function h(o, u) {
      return o.push(u);
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
    function k(o, u) {
      o.destroy(u);
    }
    function F(o) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, b = u && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return b;
      }
    }
    function w(o) {
      try {
        return m(o), !1;
      } catch {
        return !0;
      }
    }
    function m(o) {
      return "" + o;
    }
    function _(o, u) {
      if (w(o))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", u, F(o)), m(o);
    }
    function D(o, u) {
      if (w(o))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", u, F(o)), m(o);
    }
    function P(o) {
      if (w(o))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", F(o)), m(o);
    }
    var O = Object.prototype.hasOwnProperty, L = 0, U = 1, V = 2, q = 3, ce = 4, ee = 5, j = 6, Y = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", W = Y + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", B = new RegExp("^[" + Y + "][" + W + "]*$"), ie = {}, ae = {};
    function se(o) {
      return O.call(ae, o) ? !0 : O.call(ie, o) ? !1 : B.test(o) ? (ae[o] = !0, !0) : (ie[o] = !0, a("Invalid attribute name: `%s`", o), !1);
    }
    function Q(o, u, b, T) {
      if (b !== null && b.type === L)
        return !1;
      switch (typeof u) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (T)
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
    function K(o) {
      return ue.hasOwnProperty(o) ? ue[o] : null;
    }
    function ne(o, u, b, T, M, Z, fe) {
      this.acceptsBooleans = u === V || u === q || u === ce, this.attributeName = T, this.attributeNamespace = M, this.mustUseProperty = b, this.propertyName = o, this.type = u, this.sanitizeURL = Z, this.removeEmptyString = fe;
    }
    var ue = {}, ze = [
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
    ze.forEach(function(o) {
      ue[o] = new ne(
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
      var u = o[0], b = o[1];
      ue[u] = new ne(
        u,
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
      ue[o] = new ne(
        o,
        V,
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
      ue[o] = new ne(
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
      ue[o] = new ne(
        o,
        q,
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
      ue[o] = new ne(
        o,
        q,
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
      ue[o] = new ne(
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
      ue[o] = new ne(
        o,
        j,
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
      ue[o] = new ne(
        o,
        ee,
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
      var u = o.replace(be, ye);
      ue[u] = new ne(
        u,
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
      var u = o.replace(be, ye);
      ue[u] = new ne(
        u,
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
      var u = o.replace(be, ye);
      ue[u] = new ne(
        u,
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
      ue[o] = new ne(
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
    var Pe = "xlinkHref";
    ue[Pe] = new ne(
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
      ue[o] = new ne(
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
    var oe = {
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
    function Ie(o, u) {
      return o + u.charAt(0).toUpperCase() + u.substring(1);
    }
    var Ee = ["Webkit", "ms", "Moz", "O"];
    Object.keys(oe).forEach(function(o) {
      Ee.forEach(function(u) {
        oe[Ie(u, o)] = oe[o];
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
    function Te(o, u) {
      he[u.type] || u.onChange || u.onInput || u.readOnly || u.disabled || u.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), u.onChange || u.readOnly || u.disabled || u.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function J(o, u) {
      if (o.indexOf("-") === -1)
        return typeof u.is == "string";
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
    var Me = {
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
    }, we = {}, Xe = new RegExp("^(aria)-[" + W + "]*$"), Ze = new RegExp("^(aria)[A-Z][" + W + "]*$");
    function et(o, u) {
      {
        if (O.call(we, u) && we[u])
          return !0;
        if (Ze.test(u)) {
          var b = "aria-" + u.slice(4).toLowerCase(), T = Me.hasOwnProperty(b) ? b : null;
          if (T == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", u), we[u] = !0, !0;
          if (u !== T)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", u, T), we[u] = !0, !0;
        }
        if (Xe.test(u)) {
          var M = u.toLowerCase(), Z = Me.hasOwnProperty(M) ? M : null;
          if (Z == null)
            return we[u] = !0, !1;
          if (u !== Z)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", u, Z), we[u] = !0, !0;
        }
      }
      return !0;
    }
    function Ue(o, u) {
      {
        var b = [];
        for (var T in u) {
          var M = et(o, T);
          M || b.push(T);
        }
        var Z = b.map(function(fe) {
          return "`" + fe + "`";
        }).join(", ");
        b.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o) : b.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o);
      }
    }
    function Et(o, u) {
      J(o, u) || Ue(o, u);
    }
    var Ke = !1;
    function We(o, u) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        u != null && u.value === null && !Ke && (Ke = !0, o === "select" && u.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
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
      var ft = {}, qe = /^on./, it = /^on[^A-Z]/, yt = new RegExp("^(aria)-[" + W + "]*$"), ht = new RegExp("^(aria)[A-Z][" + W + "]*$");
      $e = function(o, u, b, T) {
        if (O.call(ft, u) && ft[u])
          return !0;
        var M = u.toLowerCase();
        if (M === "onfocusin" || M === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ft[u] = !0, !0;
        if (T != null) {
          var Z = T.registrationNameDependencies, fe = T.possibleRegistrationNames;
          if (Z.hasOwnProperty(u))
            return !0;
          var Ce = fe.hasOwnProperty(M) ? fe[M] : null;
          if (Ce != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", u, Ce), ft[u] = !0, !0;
          if (qe.test(u))
            return a("Unknown event handler property `%s`. It will be ignored.", u), ft[u] = !0, !0;
        } else if (qe.test(u))
          return it.test(u) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", u), ft[u] = !0, !0;
        if (yt.test(u) || ht.test(u))
          return !0;
        if (M === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ft[u] = !0, !0;
        if (M === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ft[u] = !0, !0;
        if (M === "is" && b !== null && b !== void 0 && typeof b != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof b), ft[u] = !0, !0;
        if (typeof b == "number" && isNaN(b))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", u), ft[u] = !0, !0;
        var He = K(u), tt = He !== null && He.type === L;
        if (Be.hasOwnProperty(M)) {
          var st = Be[M];
          if (st !== u)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", u, st), ft[u] = !0, !0;
        } else if (!tt && u !== M)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", u, M), ft[u] = !0, !0;
        return typeof b == "boolean" && Q(u, b, He, !1) ? (b ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', b, u, u, b, u) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', b, u, u, b, u, u, u), ft[u] = !0, !0) : tt ? !0 : Q(u, b, He, !1) ? (ft[u] = !0, !1) : ((b === "false" || b === "true") && He !== null && He.type === q && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", b, u, b === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', u, b), ft[u] = !0), !0);
      };
    }
    var _t = function(o, u, b) {
      {
        var T = [];
        for (var M in u) {
          var Z = $e(o, M, u[M], b);
          Z || T.push(M);
        }
        var fe = T.map(function(Ce) {
          return "`" + Ce + "`";
        }).join(", ");
        T.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o) : T.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o);
      }
    };
    function tn(o, u, b) {
      J(o, u) || _t(o, u, b);
    }
    var Xt = function() {
    };
    {
      var gt = /^(?:webkit|moz|o)[A-Z]/, Rt = /^-ms-/, hn = /-(.)/g, on = /;\s*$/, qt = {}, yn = {}, Fe = !1, vt = !1, Ht = function(o) {
        return o.replace(hn, function(u, b) {
          return b.toUpperCase();
        });
      }, It = function(o) {
        qt.hasOwnProperty(o) && qt[o] || (qt[o] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ht(o.replace(Rt, "ms-"))
        ));
      }, At = function(o) {
        qt.hasOwnProperty(o) && qt[o] || (qt[o] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, xn = function(o, u) {
        yn.hasOwnProperty(u) && yn[u] || (yn[u] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, u.replace(on, "")));
      }, Mt = function(o, u) {
        Fe || (Fe = !0, a("`NaN` is an invalid value for the `%s` css style property.", o));
      }, ln = function(o, u) {
        vt || (vt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      Xt = function(o, u) {
        o.indexOf("-") > -1 ? It(o) : gt.test(o) ? At(o) : on.test(u) && xn(o, u), typeof u == "number" && (isNaN(u) ? Mt(o, u) : isFinite(u) || ln(o, u));
      };
    }
    var cn = Xt, Tn = /["'&<>]/;
    function Jt(o) {
      P(o);
      var u = "" + o, b = Tn.exec(u);
      if (!b)
        return u;
      var T, M = "", Z, fe = 0;
      for (Z = b.index; Z < u.length; Z++) {
        switch (u.charCodeAt(Z)) {
          case 34:
            T = "&quot;";
            break;
          case 38:
            T = "&amp;";
            break;
          case 39:
            T = "&#x27;";
            break;
          case 60:
            T = "&lt;";
            break;
          case 62:
            T = "&gt;";
            break;
          default:
            continue;
        }
        fe !== Z && (M += u.substring(fe, Z)), fe = Z + 1, M += T;
      }
      return fe !== Z ? M + u.substring(fe, Z) : M;
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
    var De = "<script>", ut = "<\/script>", ct = '<script src="', $ = '<script type="module" src="', Ne = '" async=""><\/script>';
    function Ge(o) {
      return P(o), ("" + o).replace(Ve, ot);
    }
    var Ve = /(<\/|<)(s)(cript)/gi, ot = function(o, u, b, T) {
      return "" + u + (b === "s" ? "\\u0073" : "\\u0053") + T;
    };
    function nt(o, u, b, T, M) {
      var Z = o === void 0 ? "" : o, fe = u === void 0 ? De : '<script nonce="' + jt(u) + '">', Ce = [];
      if (b !== void 0 && Ce.push(fe, Ge(b), ut), T !== void 0)
        for (var He = 0; He < T.length; He++)
          Ce.push(ct, jt(T[He]), Ne);
      if (M !== void 0)
        for (var tt = 0; tt < M.length; tt++)
          Ce.push($, jt(M[tt]), Ne);
      return {
        bootstrapChunks: Ce,
        startInlineScript: fe,
        placeholderPrefix: Z + "P:",
        segmentPrefix: Z + "S:",
        boundaryPrefix: Z + "B:",
        idPrefix: Z,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var St = 0, Dt = 1, Qe = 2, Kt = 3, zt = 4, Ft = 5, pt = 6, Nt = 7;
    function Tt(o, u) {
      return {
        insertionMode: o,
        selectedValue: u
      };
    }
    function Yt(o, u, b) {
      switch (u) {
        case "select":
          return Tt(Dt, b.value != null ? b.value : b.defaultValue);
        case "svg":
          return Tt(Qe, null);
        case "math":
          return Tt(Kt, null);
        case "foreignObject":
          return Tt(Dt, null);
        case "table":
          return Tt(zt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Tt(Ft, null);
        case "colgroup":
          return Tt(Nt, null);
        case "tr":
          return Tt(pt, null);
      }
      return o.insertionMode >= zt || o.insertionMode === St ? Tt(Dt, null) : o;
    }
    var Wt = null;
    function dn(o) {
      var u = o.nextSuspenseID++;
      return o.boundaryPrefix + u.toString(16);
    }
    function sn(o, u, b) {
      var T = o.idPrefix, M = ":" + T + "R" + u;
      return b > 0 && (M += "H" + b.toString(32)), M + ":";
    }
    function nn(o) {
      return jt(o);
    }
    var Zt = "<!-- -->";
    function En(o, u, b, T) {
      return u === "" ? T : (T && o.push(Zt), o.push(nn(u)), !0);
    }
    function un(o, u, b, T) {
      b && T && o.push(Zt);
    }
    var kn = /* @__PURE__ */ new Map();
    function In(o) {
      var u = kn.get(o);
      if (u !== void 0)
        return u;
      var b = jt(Hn(o));
      return kn.set(o, b), b;
    }
    var Yn = ' style="', Zn = ":", Xn = ";";
    function g(o, u, b) {
      if (typeof b != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var T = !0;
      for (var M in b)
        if (O.call(b, M)) {
          var Z = b[M];
          if (!(Z == null || typeof Z == "boolean" || Z === "")) {
            var fe = void 0, Ce = void 0, He = M.indexOf("--") === 0;
            He ? (fe = jt(M), D(Z, M), Ce = jt(("" + Z).trim())) : (cn(M, Z), fe = In(M), typeof Z == "number" ? Z !== 0 && !O.call(oe, M) ? Ce = Z + "px" : Ce = "" + Z : (D(Z, M), Ce = jt(("" + Z).trim()))), T ? (T = !1, o.push(Yn, fe, Zn, Ce)) : o.push(Xn, fe, Zn, Ce);
          }
        }
      T || o.push(X);
    }
    var C = " ", I = '="', X = '"', Se = '=""';
    function ge(o, u, b, T) {
      switch (b) {
        case "style": {
          g(o, u, T);
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
        var M = K(b);
        if (M !== null) {
          switch (typeof T) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!M.acceptsBooleans)
                return;
          }
          var Z = M.attributeName, fe = Z;
          switch (M.type) {
            case q:
              T && o.push(C, fe, Se);
              return;
            case ce:
              T === !0 ? o.push(C, fe, Se) : T === !1 || o.push(C, fe, I, jt(T), X);
              return;
            case ee:
              isNaN(T) || o.push(C, fe, I, jt(T), X);
              break;
            case j:
              !isNaN(T) && T >= 1 && o.push(C, fe, I, jt(T), X);
              break;
            default:
              M.sanitizeURL && (_(T, Z), T = "" + T, Wn(T)), o.push(C, fe, I, jt(T), X);
          }
        } else if (se(b)) {
          switch (typeof T) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ce = b.toLowerCase().slice(0, 5);
              if (Ce !== "data-" && Ce !== "aria-")
                return;
            }
          }
          o.push(C, b, I, jt(T), X);
        }
      }
    }
    var Le = ">", je = "/>";
    function rt(o, u, b) {
      if (u != null) {
        if (b != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof u != "object" || !("__html" in u))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var T = u.__html;
        T != null && (P(T), o.push("" + T));
      }
    }
    var mt = !1, re = !1, le = !1, me = !1, Re = !1, xt = !1, gn = !1;
    function wn(o, u) {
      {
        var b = o[u];
        if (b != null) {
          var T = Sn(b);
          o.multiple && !T ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", u) : !o.multiple && T && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", u);
        }
      }
    }
    function fr(o, u, b) {
      Te("select", u), wn(u, "value"), wn(u, "defaultValue"), u.value !== void 0 && u.defaultValue !== void 0 && !le && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), le = !0), o.push(Vn("select"));
      var T = null, M = null;
      for (var Z in u)
        if (O.call(u, Z)) {
          var fe = u[Z];
          if (fe == null)
            continue;
          switch (Z) {
            case "children":
              T = fe;
              break;
            case "dangerouslySetInnerHTML":
              M = fe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ge(o, b, Z, fe);
              break;
          }
        }
      return o.push(Le), rt(o, M, T), T;
    }
    function $n(o) {
      var u = "";
      return e.Children.forEach(o, function(b) {
        b != null && (u += b, !Re && typeof b != "string" && typeof b != "number" && (Re = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), u;
    }
    var Tr = ' selected=""';
    function pr(o, u, b, T) {
      var M = T.selectedValue;
      o.push(Vn("option"));
      var Z = null, fe = null, Ce = null, He = null;
      for (var tt in u)
        if (O.call(u, tt)) {
          var st = u[tt];
          if (st == null)
            continue;
          switch (tt) {
            case "children":
              Z = st;
              break;
            case "selected":
              Ce = st, gn || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gn = !0);
              break;
            case "dangerouslySetInnerHTML":
              He = st;
              break;
            case "value":
              fe = st;
            default:
              ge(o, b, tt, st);
              break;
          }
        }
      if (M != null) {
        var wt;
        if (fe !== null ? (_(fe, "value"), wt = "" + fe) : (He !== null && (xt || (xt = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), wt = $n(Z)), Sn(M))
          for (var fn = 0; fn < M.length; fn++) {
            _(M[fn], "value");
            var Fn = "" + M[fn];
            if (Fn === wt) {
              o.push(Tr);
              break;
            }
          }
        else
          _(M, "select.value"), "" + M === wt && o.push(Tr);
      } else
        Ce && o.push(Tr);
      return o.push(Le), rt(o, He, Z), Z;
    }
    function Gr(o, u, b) {
      Te("input", u), u.checked !== void 0 && u.defaultChecked !== void 0 && !re && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", u.type), re = !0), u.value !== void 0 && u.defaultValue !== void 0 && !mt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", u.type), mt = !0), o.push(Vn("input"));
      var T = null, M = null, Z = null, fe = null;
      for (var Ce in u)
        if (O.call(u, Ce)) {
          var He = u[Ce];
          if (He == null)
            continue;
          switch (Ce) {
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
              Z = He;
              break;
            case "value":
              T = He;
              break;
            default:
              ge(o, b, Ce, He);
              break;
          }
        }
      return Z !== null ? ge(o, b, "checked", Z) : fe !== null && ge(o, b, "checked", fe), T !== null ? ge(o, b, "value", T) : M !== null && ge(o, b, "value", M), o.push(je), null;
    }
    function Zo(o, u, b) {
      Te("textarea", u), u.value !== void 0 && u.defaultValue !== void 0 && !me && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), me = !0), o.push(Vn("textarea"));
      var T = null, M = null, Z = null;
      for (var fe in u)
        if (O.call(u, fe)) {
          var Ce = u[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              Z = Ce;
              break;
            case "value":
              T = Ce;
              break;
            case "defaultValue":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ge(o, b, fe, Ce);
              break;
          }
        }
      if (T === null && M !== null && (T = M), o.push(Le), Z != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), T != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Sn(Z)) {
          if (Z.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          P(Z[0]), T = "" + Z[0];
        }
        P(Z), T = "" + Z;
      }
      return typeof T == "string" && T[0] === `
` && o.push(qr), T !== null && (_(T, "value"), o.push(nn("" + T))), null;
    }
    function Qo(o, u, b, T) {
      o.push(Vn(b));
      for (var M in u)
        if (O.call(u, M)) {
          var Z = u[M];
          if (Z == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ge(o, T, M, Z);
              break;
          }
        }
      return o.push(je), null;
    }
    function Ba(o, u, b) {
      o.push(Vn("menuitem"));
      for (var T in u)
        if (O.call(u, T)) {
          var M = u[T];
          if (M == null)
            continue;
          switch (T) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ge(o, b, T, M);
              break;
          }
        }
      return o.push(Le), null;
    }
    function Jo(o, u, b) {
      o.push(Vn("title"));
      var T = null;
      for (var M in u)
        if (O.call(u, M)) {
          var Z = u[M];
          if (Z == null)
            continue;
          switch (M) {
            case "children":
              T = Z;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ge(o, b, M, Z);
              break;
          }
        }
      o.push(Le);
      {
        var fe = Array.isArray(T) && T.length < 2 ? T[0] || null : T;
        Array.isArray(T) && T.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && fe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && typeof fe != "string" && typeof fe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return T;
    }
    function Ha(o, u, b, T) {
      o.push(Vn(b));
      var M = null, Z = null;
      for (var fe in u)
        if (O.call(u, fe)) {
          var Ce = u[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Z = Ce;
              break;
            default:
              ge(o, T, fe, Ce);
              break;
          }
        }
      return o.push(Le), rt(o, Z, M), typeof M == "string" ? (o.push(nn(M)), null) : M;
    }
    function hr(o, u, b, T) {
      o.push(Vn(b));
      var M = null, Z = null;
      for (var fe in u)
        if (O.call(u, fe)) {
          var Ce = u[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Z = Ce;
              break;
            case "style":
              g(o, T, Ce);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              se(fe) && typeof Ce != "function" && typeof Ce != "symbol" && o.push(C, fe, I, jt(Ce), X);
              break;
          }
        }
      return o.push(Le), rt(o, Z, M), M;
    }
    var qr = `
`;
    function ca(o, u, b, T) {
      o.push(Vn(b));
      var M = null, Z = null;
      for (var fe in u)
        if (O.call(u, fe)) {
          var Ce = u[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Z = Ce;
              break;
            default:
              ge(o, T, fe, Ce);
              break;
          }
        }
      if (o.push(Le), Z != null) {
        if (M != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Z != "object" || !("__html" in Z))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var He = Z.__html;
        He != null && (typeof He == "string" && He.length > 0 && He[0] === `
` ? o.push(qr, He) : (P(He), o.push("" + He)));
      }
      return typeof M == "string" && M[0] === `
` && o.push(qr), M;
    }
    var en = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, mr = /* @__PURE__ */ new Map();
    function Vn(o) {
      var u = mr.get(o);
      if (u === void 0) {
        if (!en.test(o))
          throw new Error("Invalid tag: " + o);
        u = "<" + o, mr.set(o, u);
      }
      return u;
    }
    var wr = "<!DOCTYPE html>";
    function yr(o, u, b, T, M) {
      switch (Et(u, b), We(u, b), tn(u, b, null), !b.suppressContentEditableWarning && b.contentEditable && b.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), M.insertionMode !== Qe && M.insertionMode !== Kt && u.indexOf("-") === -1 && typeof b.is != "string" && u.toLowerCase() !== u && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", u), u) {
        case "select":
          return fr(o, b, T);
        case "option":
          return pr(o, b, T, M);
        case "textarea":
          return Zo(o, b, T);
        case "input":
          return Gr(o, b, T);
        case "menuitem":
          return Ba(o, b, T);
        case "title":
          return Jo(o, b, T);
        case "listing":
        case "pre":
          return ca(o, b, u, T);
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
          return Qo(o, b, u, T);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ha(o, b, u, T);
        case "html":
          return M.insertionMode === St && o.push(wr), Ha(o, b, u, T);
        default:
          return u.indexOf("-") === -1 && typeof b.is != "string" ? Ha(o, b, u, T) : hr(o, b, u, T);
      }
    }
    var da = "</", gr = ">";
    function Qn(o, u, b) {
      switch (u) {
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
          o.push(da, u, gr);
      }
    }
    function Wa(o, u) {
      for (var b = u.bootstrapChunks, T = 0; T < b.length - 1; T++)
        c(o, b[T]);
      return T < b.length ? h(o, b[T]) : !0;
    }
    var Va = '<template id="', Ii = '"></template>';
    function $i(o, u, b) {
      c(o, Va), c(o, u.placeholderPrefix);
      var T = b.toString(16);
      return c(o, T), h(o, Ii);
    }
    var Bi = "<!--$-->", el = '<!--$?--><template id="', tl = '"></template>', fa = "<!--$!-->", pa = "<!--/$-->", ha = "<template", Zr = '"', nl = ' data-dgst="', Qr = ' data-msg="', ja = ' data-stck="', Ua = "></template>";
    function _r(o, u) {
      return h(o, Bi);
    }
    function Fr(o, u, b) {
      if (c(o, el), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(o, b), h(o, tl);
    }
    function ma(o, u, b, T, M) {
      var Z;
      return Z = h(o, fa), c(o, ha), b && (c(o, nl), c(o, jt(b)), c(o, Zr)), T && (c(o, Qr), c(o, jt(T)), c(o, Zr)), M && (c(o, ja), c(o, jt(M)), c(o, Zr)), Z = h(o, Ua), Z;
    }
    function Hi(o, u) {
      return h(o, pa);
    }
    function Ka(o, u) {
      return h(o, pa);
    }
    function Wi(o, u) {
      return h(o, pa);
    }
    var ya = '<div hidden id="', jn = '">', Vi = "</div>", ga = '<svg aria-hidden="true" style="display:none" id="', rl = '">', ji = "</svg>", va = '<math aria-hidden="true" style="display:none" id="', Ui = '">', Ki = "</math>", xa = '<table hidden id="', ba = '">', Yi = "</table>", Xi = '<table hidden><tbody id="', Gi = '">', Ya = "</tbody></table>", qi = '<table hidden><tr id="', x = '">', A = "</tr></table>", z = '<table hidden><colgroup id="', G = '">', ke = "</colgroup></table>";
    function xe(o, u, b, T) {
      switch (b.insertionMode) {
        case St:
        case Dt:
          return c(o, ya), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, jn);
        case Qe:
          return c(o, ga), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, rl);
        case Kt:
          return c(o, va), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, Ui);
        case zt:
          return c(o, xa), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, ba);
        case Ft:
          return c(o, Xi), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, Gi);
        case pt:
          return c(o, qi), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, x);
        case Nt:
          return c(o, z), c(o, u.segmentPrefix), c(o, T.toString(16)), h(o, G);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function _e(o, u) {
      switch (u.insertionMode) {
        case St:
        case Dt:
          return h(o, Vi);
        case Qe:
          return h(o, ji);
        case Kt:
          return h(o, Ki);
        case zt:
          return h(o, Yi);
        case Ft:
          return h(o, Ya);
        case pt:
          return h(o, A);
        case Nt:
          return h(o, ke);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ye = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", bt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ot = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pt = Ye + ';$RS("', rn = '$RS("', Un = '","', Jn = '")<\/script>';
    function er(o, u, b) {
      c(o, u.startInlineScript), u.sentCompleteSegmentFunction ? c(o, rn) : (u.sentCompleteSegmentFunction = !0, c(o, Pt)), c(o, u.segmentPrefix);
      var T = b.toString(16);
      return c(o, T), c(o, Un), c(o, u.placeholderPrefix), c(o, T), h(o, Jn);
    }
    var Sa = bt + ';$RC("', Zi = '$RC("', Xa = '","', Lc = '")<\/script>';
    function Pc(o, u, b, T) {
      if (c(o, u.startInlineScript), u.sentCompleteBoundaryFunction ? c(o, Zi) : (u.sentCompleteBoundaryFunction = !0, c(o, Sa)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var M = T.toString(16);
      return c(o, b), c(o, Xa), c(o, u.segmentPrefix), c(o, M), h(o, Lc);
    }
    var Rc = Ot + ';$RX("', Dc = '$RX("', Nc = '"', Oc = ")<\/script>", al = ",";
    function _c(o, u, b, T, M, Z) {
      if (c(o, u.startInlineScript), u.sentClientRenderFunction ? c(o, Dc) : (u.sentClientRenderFunction = !0, c(o, Rc)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(o, b), c(o, Nc), (T || M || Z) && (c(o, al), c(o, il(T || ""))), (M || Z) && (c(o, al), c(o, il(M || ""))), Z && (c(o, al), c(o, il(Z))), h(o, Oc);
    }
    var Fc = /[<\u2028\u2029]/g;
    function il(o) {
      var u = JSON.stringify(o);
      return u.replace(Fc, function(b) {
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
    function Mc(o, u) {
      var b = nt(u, void 0);
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
        insertionMode: Dt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ts(o, u, b, T) {
      return b.generateStaticMarkup ? (o.push(jt(u)), !1) : En(o, u, b, T);
    }
    function ws(o, u, b, T) {
      if (!u.generateStaticMarkup)
        return un(o, u, b, T);
    }
    function ll(o, u) {
      return u.generateStaticMarkup ? !0 : _r(o);
    }
    function or(o, u, b, T, M) {
      return u.generateStaticMarkup ? !0 : ma(o, u, b, T, M);
    }
    function zc(o, u) {
      return u.generateStaticMarkup ? !0 : Hi(o);
    }
    function Cs(o, u) {
      return u.generateStaticMarkup ? !0 : Wi(o);
    }
    var tr = Object.assign, As = Symbol.for("react.element"), sl = Symbol.for("react.portal"), Qi = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), Ga = Symbol.for("react.provider"), qa = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), ul = Symbol.for("react.suspense_list"), cl = Symbol.for("react.memo"), to = Symbol.for("react.lazy"), Ic = Symbol.for("react.scope"), Ls = Symbol.for("react.debug_trace_mode"), $c = Symbol.for("react.legacy_hidden"), Bc = Symbol.for("react.default_value"), Ps = Symbol.iterator, Rs = "@@iterator";
    function vn(o) {
      if (o === null || typeof o != "object")
        return null;
      var u = Ps && o[Ps] || o[Rs];
      return typeof u == "function" ? u : null;
    }
    function Qa(o, u, b) {
      var T = o.displayName;
      if (T)
        return T;
      var M = u.displayName || u.name || "";
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
          case qa:
            var u = o;
            return dl(u) + ".Consumer";
          case Ga:
            var b = o;
            return dl(b._context) + ".Provider";
          case Za:
            return Qa(o, o.render, "ForwardRef");
          case cl:
            var T = o.displayName || null;
            return T !== null ? T : mn(o.type) || "Memo";
          case to: {
            var M = o, Z = M._payload, fe = M._init;
            try {
              return mn(fe(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ka = 0, fl, pl, hl, ml, yl, Ds, Ns;
    function no() {
    }
    no.__reactDisabledLog = !0;
    function gl() {
      {
        if (ka === 0) {
          fl = console.log, pl = console.info, hl = console.warn, ml = console.error, yl = console.group, Ds = console.groupCollapsed, Ns = console.groupEnd;
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
              value: Ds
            }),
            groupEnd: tr({}, o, {
              value: Ns
            })
          });
        }
        ka < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ei = n.ReactCurrentDispatcher, Ta;
    function ti(o, u, b) {
      {
        if (Ta === void 0)
          try {
            throw Error();
          } catch (M) {
            var T = M.stack.trim().match(/\n( *(at )?)/);
            Ta = T && T[1] || "";
          }
        return `
` + Ta + o;
      }
    }
    var ni = !1, ro;
    {
      var Os = typeof WeakMap == "function" ? WeakMap : Map;
      ro = new Os();
    }
    function vl(o, u) {
      if (!o || ni)
        return "";
      {
        var b = ro.get(o);
        if (b !== void 0)
          return b;
      }
      var T;
      ni = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = ei.current, ei.current = null, gl();
      try {
        if (u) {
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
              T = cr;
            }
            Reflect.construct(o, [], fe);
          } else {
            try {
              fe.call();
            } catch (cr) {
              T = cr;
            }
            o.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (cr) {
            T = cr;
          }
          o();
        }
      } catch (cr) {
        if (cr && T && typeof cr.stack == "string") {
          for (var Ce = cr.stack.split(`
`), He = T.stack.split(`
`), tt = Ce.length - 1, st = He.length - 1; tt >= 1 && st >= 0 && Ce[tt] !== He[st]; )
            st--;
          for (; tt >= 1 && st >= 0; tt--, st--)
            if (Ce[tt] !== He[st]) {
              if (tt !== 1 || st !== 1)
                do
                  if (tt--, st--, st < 0 || Ce[tt] !== He[st]) {
                    var wt = `
` + Ce[tt].replace(" at new ", " at ");
                    return o.displayName && wt.includes("<anonymous>") && (wt = wt.replace("<anonymous>", o.displayName)), typeof o == "function" && ro.set(o, wt), wt;
                  }
                while (tt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        ni = !1, ei.current = Z, Ja(), Error.prepareStackTrace = M;
      }
      var fn = o ? o.displayName || o.name : "", Fn = fn ? ti(fn) : "";
      return typeof o == "function" && ro.set(o, Fn), Fn;
    }
    function xl(o, u, b) {
      return vl(o, !0);
    }
    function bl(o, u, b) {
      return vl(o, !1);
    }
    function _s(o) {
      var u = o.prototype;
      return !!(u && u.isReactComponent);
    }
    function wa(o, u, b) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return vl(o, _s(o));
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
            return wa(o.type, u, b);
          case to: {
            var T = o, M = T._payload, Z = T._init;
            try {
              return wa(Z(M), u, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Sl = {}, ao = n.ReactDebugCurrentFrame;
    function Jr(o) {
      if (o) {
        var u = o._owner, b = wa(o.type, o._source, u ? u.type : null);
        ao.setExtraStackFrame(b);
      } else
        ao.setExtraStackFrame(null);
    }
    function El(o, u, b, T, M) {
      {
        var Z = Function.call.bind(O);
        for (var fe in o)
          if (Z(o, fe)) {
            var Ce = void 0;
            try {
              if (typeof o[fe] != "function") {
                var He = Error((T || "React class") + ": " + b + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Ce = o[fe](u, fe, T, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ce = tt;
            }
            Ce && !(Ce instanceof Error) && (Jr(M), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", b, fe, typeof Ce), Jr(null)), Ce instanceof Error && !(Ce.message in Sl) && (Sl[Ce.message] = !0, Jr(M), a("Failed %s type: %s", b, Ce.message), Jr(null));
          }
      }
    }
    var kl;
    kl = {};
    var Mr = {};
    Object.freeze(Mr);
    function Fs(o, u) {
      {
        var b = o.contextTypes;
        if (!b)
          return Mr;
        var T = {};
        for (var M in b)
          T[M] = u[M];
        {
          var Z = mn(o) || "Unknown";
          El(b, T, "context", Z);
        }
        return T;
      }
    }
    function ea(o, u, b, T) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var M = mn(u) || "Unknown";
            kl[M] || (kl[M] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", M, M));
          }
          return b;
        }
        var Z = o.getChildContext();
        for (var fe in Z)
          if (!(fe in T))
            throw new Error((mn(u) || "Unknown") + '.getChildContext(): key "' + fe + '" is not defined in childContextTypes.');
        {
          var Ce = mn(u) || "Unknown";
          El(T, Z, "child context", Ce);
        }
        return tr({}, b, Z);
      }
    }
    var ta;
    ta = {};
    var Tl = null, vr = null;
    function io(o) {
      o.context._currentValue2 = o.parentValue;
    }
    function oo(o) {
      o.context._currentValue2 = o.value;
    }
    function ri(o, u) {
      if (o !== u) {
        io(o);
        var b = o.parent, T = u.parent;
        if (b === null) {
          if (T !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (T === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ri(b, T);
        }
        oo(u);
      }
    }
    function wl(o) {
      io(o);
      var u = o.parent;
      u !== null && wl(u);
    }
    function ai(o) {
      var u = o.parent;
      u !== null && ai(u), oo(o);
    }
    function Ms(o, u) {
      io(o);
      var b = o.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      b.depth === u.depth ? ri(b, u) : Ms(b, u);
    }
    function zs(o, u) {
      var b = u.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === b.depth ? ri(o, b) : zs(o, b), oo(u);
    }
    function lo(o) {
      var u = vr, b = o;
      u !== b && (u === null ? ai(b) : b === null ? wl(u) : u.depth === b.depth ? ri(u, b) : u.depth > b.depth ? Ms(u, b) : zs(u, b), vr = b);
    }
    function ii(o, u) {
      var b;
      b = o._currentValue2, o._currentValue2 = u, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      var T = vr, M = {
        parent: T,
        depth: T === null ? 0 : T.depth + 1,
        context: o,
        parentValue: b,
        value: u
      };
      return vr = M, M;
    }
    function Cl(o) {
      var u = vr;
      if (u === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      u.context !== o && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var b = u.parentValue;
        b === Bc ? u.context._currentValue2 = u.context._defaultValue : u.context._currentValue2 = b, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      }
      return vr = u.parent;
    }
    function Hc() {
      return vr;
    }
    function Ca(o) {
      var u = o._currentValue2;
      return u;
    }
    function so(o) {
      return o._reactInternals;
    }
    function Al(o, u) {
      o._reactInternals = u;
    }
    var uo = {}, co = {}, oi, fo, Aa, li, po, La, ho, mo, yo;
    {
      oi = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set();
      var Is = /* @__PURE__ */ new Set();
      La = function(o, u) {
        if (!(o === null || typeof o == "function")) {
          var b = u + "_" + o;
          Is.has(b) || (Is.add(b), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", u, o));
        }
      }, po = function(o, u) {
        if (u === void 0) {
          var b = mn(o) || "Component";
          li.has(b) || (li.add(b), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", b));
        }
      };
    }
    function $s(o, u) {
      {
        var b = o.constructor, T = b && mn(b) || "ReactClass", M = T + "." + u;
        if (uo[M])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, u, u, T), uo[M] = !0;
      }
    }
    var Bs = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, u, b) {
        var T = so(o);
        T.queue === null ? $s(o, "setState") : (T.queue.push(u), b != null && La(b, "setState"));
      },
      enqueueReplaceState: function(o, u, b) {
        var T = so(o);
        T.replace = !0, T.queue = [u], b != null && La(b, "setState");
      },
      enqueueForceUpdate: function(o, u) {
        var b = so(o);
        b.queue === null ? $s(o, "forceUpdate") : u != null && La(u, "setState");
      }
    };
    function Wc(o, u, b, T, M) {
      var Z = b(M, T);
      po(u, Z);
      var fe = Z == null ? T : tr({}, T, Z);
      return fe;
    }
    function Vc(o, u, b) {
      var T = Mr, M = o.contextType;
      if ("contextType" in o) {
        var Z = (
          // Allow null for conditional declaration
          M === null || M !== void 0 && M.$$typeof === qa && M._context === void 0
        );
        if (!Z && !yo.has(o)) {
          yo.add(o);
          var fe = "";
          M === void 0 ? fe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof M != "object" ? fe = " However, it is set to a " + typeof M + "." : M.$$typeof === Ga ? fe = " Did you accidentally pass the Context.Provider instead?" : M._context !== void 0 ? fe = " Did you accidentally pass the Context.Consumer instead?" : fe = " However, it is set to an object with keys {" + Object.keys(M).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(o) || "Component", fe);
        }
      }
      typeof M == "object" && M !== null ? T = Ca(M) : T = b;
      var Ce = new o(u, T);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (Ce.state === null || Ce.state === void 0)) {
          var He = mn(o) || "Component";
          oi.has(He) || (oi.add(He), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", He, Ce.state === null ? "null" : "undefined", He));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof Ce.getSnapshotBeforeUpdate == "function") {
          var tt = null, st = null, wt = null;
          if (typeof Ce.componentWillMount == "function" && Ce.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Ce.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Ce.componentWillReceiveProps == "function" && Ce.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? st = "componentWillReceiveProps" : typeof Ce.UNSAFE_componentWillReceiveProps == "function" && (st = "UNSAFE_componentWillReceiveProps"), typeof Ce.componentWillUpdate == "function" && Ce.componentWillUpdate.__suppressDeprecationWarning !== !0 ? wt = "componentWillUpdate" : typeof Ce.UNSAFE_componentWillUpdate == "function" && (wt = "UNSAFE_componentWillUpdate"), tt !== null || st !== null || wt !== null) {
            var fn = mn(o) || "Component", Fn = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Aa.has(fn) || (Aa.add(fn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fn, Fn, tt !== null ? `
  ` + tt : "", st !== null ? `
  ` + st : "", wt !== null ? `
  ` + wt : ""));
          }
        }
      }
      return Ce;
    }
    function Hs(o, u, b) {
      {
        var T = mn(u) || "Component", M = o.render;
        M || (u.prototype && typeof u.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", T) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", T)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", T), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", T), o.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", T), o.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", T), o.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", T), u.contextType && u.contextTypes && !mo.has(u) && (mo.add(u), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", T)), typeof o.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", T), u.prototype && u.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(u) || "A pure component"), typeof o.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", T), typeof o.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", T), typeof o.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", T), typeof o.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", T);
        var Z = o.props !== b;
        o.props !== void 0 && Z && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", T, T), o.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", T, T), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !fo.has(u) && (fo.add(u), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(u))), typeof o.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", T), typeof o.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", T), typeof u.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", T);
        var fe = o.state;
        fe && (typeof fe != "object" || Sn(fe)) && a("%s.state: must be set to an object or null", T), typeof o.getChildContext == "function" && typeof u.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", T);
      }
    }
    function jc(o, u) {
      var b = u.state;
      if (typeof u.componentWillMount == "function") {
        if (u.componentWillMount.__suppressDeprecationWarning !== !0) {
          var T = mn(o) || "Unknown";
          co[T] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            T
          ), co[T] = !0);
        }
        u.componentWillMount();
      }
      typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), b !== u.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(o) || "Component"), Bs.enqueueReplaceState(u, u.state, null));
    }
    function Uc(o, u, b, T) {
      if (o.queue !== null && o.queue.length > 0) {
        var M = o.queue, Z = o.replace;
        if (o.queue = null, o.replace = !1, Z && M.length === 1)
          u.state = M[0];
        else {
          for (var fe = Z ? M[0] : u.state, Ce = !0, He = Z ? 1 : 0; He < M.length; He++) {
            var tt = M[He], st = typeof tt == "function" ? tt.call(u, fe, b, T) : tt;
            st != null && (Ce ? (Ce = !1, fe = tr({}, fe, st)) : tr(fe, st));
          }
          u.state = fe;
        }
      } else
        o.queue = null;
    }
    function go(o, u, b, T) {
      Hs(o, u, b);
      var M = o.state !== void 0 ? o.state : null;
      o.updater = Bs, o.props = b, o.state = M;
      var Z = {
        queue: [],
        replace: !1
      };
      Al(o, Z);
      var fe = u.contextType;
      if (typeof fe == "object" && fe !== null ? o.context = Ca(fe) : o.context = T, o.state === b) {
        var Ce = mn(u) || "Component";
        ho.has(Ce) || (ho.add(Ce), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ce));
      }
      var He = u.getDerivedStateFromProps;
      typeof He == "function" && (o.state = Wc(o, u, He, M, b)), typeof u.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (jc(u, o), Uc(Z, o, b, T));
    }
    var vo = {
      id: 1,
      overflow: ""
    };
    function Kc(o) {
      var u = o.overflow, b = o.id, T = b & ~Yc(b);
      return T.toString(32) + u;
    }
    function Ll(o, u, b) {
      var T = o.id, M = o.overflow, Z = xo(T) - 1, fe = T & ~(1 << Z), Ce = b + 1, He = xo(u) + Z;
      if (He > 30) {
        var tt = Z - Z % 5, st = (1 << tt) - 1, wt = (fe & st).toString(32), fn = fe >> tt, Fn = Z - tt, cr = xo(u) + Fn, uu = Ce << Fn, cu = uu | fn, du = wt + M;
        return {
          id: 1 << cr | cu,
          overflow: du
        };
      } else {
        var Fo = Ce << Z, Ay = Fo | fe, Ly = M;
        return {
          id: 1 << He | Ay,
          overflow: Ly
        };
      }
    }
    function xo(o) {
      return 32 - Xc(o);
    }
    function Yc(o) {
      return 1 << xo(o) - 1;
    }
    var Xc = Math.clz32 ? Math.clz32 : Cr, Gc = Math.log, qc = Math.LN2;
    function Cr(o) {
      var u = o >>> 0;
      return u === 0 ? 32 : 31 - (Gc(u) / qc | 0) | 0;
    }
    function Pl(o, u) {
      return o === u && (o !== 0 || 1 / o === 1 / u) || o !== o && u !== u;
    }
    var bo = typeof Object.is == "function" ? Object.is : Pl, $t = null, na = null, ra = null, Qt = null, lr = !1, aa = !1, So = 0, _n = null, Ar = 0, ia = 25, xr = !1, oa;
    function Lr() {
      if ($t === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return xr && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), $t;
    }
    function Zc(o, u) {
      if (u === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oa), !1;
      o.length !== u.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oa, "[" + o.join(", ") + "]", "[" + u.join(", ") + "]");
      for (var b = 0; b < u.length && b < o.length; b++)
        if (!bo(o[b], u[b]))
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
    function Rl(o, u) {
      $t = u, na = o, xr = !1, So = 0;
    }
    function Qc(o, u, b, T) {
      for (; aa; )
        aa = !1, So = 0, Ar += 1, Qt = null, b = o(u, T);
      return si(), b;
    }
    function Vs() {
      var o = So !== 0;
      return o;
    }
    function si() {
      xr = !1, $t = null, na = null, aa = !1, ra = null, Ar = 0, _n = null, Qt = null;
    }
    function Jc(o) {
      return xr && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ca(o);
    }
    function js(o) {
      return oa = "useContext", Lr(), Ca(o);
    }
    function ko(o, u) {
      return typeof u == "function" ? u(o) : u;
    }
    function ed(o) {
      return oa = "useState", Us(
        ko,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Us(o, u, b) {
      if (o !== ko && (oa = "useReducer"), $t = Lr(), Qt = Eo(), lr) {
        var T = Qt.queue, M = T.dispatch;
        if (_n !== null) {
          var Z = _n.get(T);
          if (Z !== void 0) {
            _n.delete(T);
            var fe = Qt.memoizedState, Ce = Z;
            do {
              var He = Ce.action;
              xr = !0, fe = o(fe, He), xr = !1, Ce = Ce.next;
            } while (Ce !== null);
            return Qt.memoizedState = fe, [fe, M];
          }
        }
        return [Qt.memoizedState, M];
      } else {
        xr = !0;
        var tt;
        o === ko ? tt = typeof u == "function" ? u() : u : tt = b !== void 0 ? b(u) : u, xr = !1, Qt.memoizedState = tt;
        var st = Qt.queue = {
          last: null,
          dispatch: null
        }, wt = st.dispatch = rd.bind(null, $t, st);
        return [Qt.memoizedState, wt];
      }
    }
    function Ks(o, u) {
      $t = Lr(), Qt = Eo();
      var b = u === void 0 ? null : u;
      if (Qt !== null) {
        var T = Qt.memoizedState;
        if (T !== null && b !== null) {
          var M = T[1];
          if (Zc(b, M))
            return T[0];
        }
      }
      xr = !0;
      var Z = o();
      return xr = !1, Qt.memoizedState = [Z, b], Z;
    }
    function td(o) {
      $t = Lr(), Qt = Eo();
      var u = Qt.memoizedState;
      if (u === null) {
        var b = {
          current: o
        };
        return Object.seal(b), Qt.memoizedState = b, b;
      } else
        return u;
    }
    function nd(o, u) {
      oa = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function rd(o, u, b) {
      if (Ar >= ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === $t) {
        aa = !0;
        var T = {
          action: b,
          next: null
        };
        _n === null && (_n = /* @__PURE__ */ new Map());
        var M = _n.get(u);
        if (M === void 0)
          _n.set(u, T);
        else {
          for (var Z = M; Z.next !== null; )
            Z = Z.next;
          Z.next = T;
        }
      }
    }
    function ad(o, u) {
      return Ks(function() {
        return o;
      }, u);
    }
    function id(o, u, b) {
      return Lr(), u(o._source);
    }
    function od(o, u, b) {
      if (b === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return b();
    }
    function ld(o) {
      return Lr(), o;
    }
    function To() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ys() {
      return Lr(), [!1, To];
    }
    function Dl() {
      var o = na, u = Kc(o.treeContext), b = ci;
      if (b === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var T = So++;
      return sn(b, u, T);
    }
    function ui() {
    }
    var Xs = {
      readContext: Jc,
      useContext: js,
      useMemo: Ks,
      useReducer: Us,
      useRef: td,
      useState: ed,
      useInsertionEffect: ui,
      useLayoutEffect: nd,
      useCallback: ad,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ui,
      // Effects are not run in the server environment.
      useEffect: ui,
      // Debugging effect
      useDebugValue: ui,
      useDeferredValue: ld,
      useTransition: Ys,
      useId: Dl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: id,
      useSyncExternalStore: od
    }, ci = null;
    function wo(o) {
      ci = o;
    }
    function Nl(o) {
      try {
        var u = "", b = o;
        do {
          switch (b.tag) {
            case 0:
              u += ti(b.type, null, null);
              break;
            case 1:
              u += bl(b.type, null, null);
              break;
            case 2:
              u += xl(b.type, null, null);
              break;
          }
          b = b.parent;
        } while (b);
        return u;
      } catch (T) {
        return `
Error generating stack: ` + T.message + `
` + T.stack;
      }
    }
    var zr = n.ReactCurrentDispatcher, Co = n.ReactDebugCurrentFrame, Ao = 0, la = 1, Gs = 2, Ol = 3, sa = 4, sd = 0, qs = 1, br = 2, ud = 12800;
    function cd(o) {
      return console.error(o), null;
    }
    function di() {
    }
    function _l(o, u, b, T, M, Z, fe, Ce, He) {
      var tt = [], st = /* @__PURE__ */ new Set(), wt = {
        destination: null,
        responseState: u,
        progressiveChunkSize: T === void 0 ? ud : T,
        status: sd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: st,
        pingedTasks: tt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: M === void 0 ? cd : M,
        onAllReady: Z === void 0 ? di : Z,
        onShellReady: fe === void 0 ? di : fe,
        onShellError: Ce === void 0 ? di : Ce,
        onFatalError: He === void 0 ? di : He
      }, fn = Ir(
        wt,
        0,
        null,
        b,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      fn.parentFlushed = !0;
      var Fn = fi(wt, o, null, fn, st, Mr, Tl, vo);
      return tt.push(Fn), wt;
    }
    function Lo(o, u) {
      var b = o.pingedTasks;
      b.push(u), b.length === 1 && f(function() {
        return lu(o);
      });
    }
    function Pr(o, u) {
      return {
        id: Wt,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: u,
        errorDigest: null
      };
    }
    function fi(o, u, b, T, M, Z, fe, Ce) {
      o.allPendingTasks++, b === null ? o.pendingRootTasks++ : b.pendingTasks++;
      var He = {
        node: u,
        ping: function() {
          return Lo(o, He);
        },
        blockedBoundary: b,
        blockedSegment: T,
        abortSet: M,
        legacyContext: Z,
        context: fe,
        treeContext: Ce
      };
      return He.componentStack = null, M.add(He), He;
    }
    function Ir(o, u, b, T, M, Z) {
      return {
        status: Ao,
        id: -1,
        // lazily assigned later
        index: u,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: T,
        boundary: b,
        lastPushedText: M,
        textEmbedded: Z
      };
    }
    var Sr = null;
    function Fl() {
      return Sr === null || Sr.componentStack === null ? "" : Nl(Sr.componentStack);
    }
    function sr(o, u) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: u
      };
    }
    function Pa(o, u) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: u
      };
    }
    function Ml(o, u) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: u
      };
    }
    function ur(o) {
      o.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var $r = null;
    function zl(o, u) {
      {
        var b;
        typeof u == "string" ? b = u : u && typeof u.message == "string" ? b = u.message : b = String(u);
        var T = $r || Fl();
        $r = null, o.errorMessage = b, o.errorComponentStack = T;
      }
    }
    function pi(o, u) {
      var b = o.onError(u);
      if (b != null && typeof b != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
      return b;
    }
    function Po(o, u) {
      var b = o.onShellError;
      b(u);
      var T = o.onFatalError;
      T(u), o.destination !== null ? (o.status = br, k(o.destination, u)) : (o.status = qs, o.fatalError = u);
    }
    function Zs(o, u, b) {
      sr(u, "Suspense");
      var T = u.blockedBoundary, M = u.blockedSegment, Z = b.fallback, fe = b.children, Ce = /* @__PURE__ */ new Set(), He = Pr(o, Ce), tt = M.chunks.length, st = Ir(
        o,
        tt,
        He,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.children.push(st), M.lastPushedText = !1;
      var wt = Ir(
        o,
        0,
        null,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      wt.parentFlushed = !0, u.blockedBoundary = He, u.blockedSegment = wt;
      try {
        if (Ro(o, u, fe), ws(wt.chunks, o.responseState, wt.lastPushedText, wt.textEmbedded), wt.status = la, yi(He, wt), He.pendingTasks === 0) {
          ur(u);
          return;
        }
      } catch (Fn) {
        wt.status = sa, He.forceClientRender = !0, He.errorDigest = pi(o, Fn), zl(He, Fn);
      } finally {
        u.blockedBoundary = T, u.blockedSegment = M;
      }
      var fn = fi(o, Z, T, st, Ce, u.legacyContext, u.context, u.treeContext);
      fn.componentStack = u.componentStack, o.pingedTasks.push(fn), ur(u);
    }
    function Qs(o, u, b, T) {
      sr(u, b);
      var M = u.blockedSegment, Z = yr(M.chunks, b, T, o.responseState, M.formatContext);
      M.lastPushedText = !1;
      var fe = M.formatContext;
      M.formatContext = Yt(fe, b, T), Ro(o, u, Z), M.formatContext = fe, Qn(M.chunks, b), M.lastPushedText = !1, ur(u);
    }
    function dd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Il(o, u, b, T, M) {
      var Z = {};
      Rl(u, Z);
      var fe = b(T, M);
      return Qc(b, T, fe, M);
    }
    function hi(o, u, b, T, M) {
      var Z = b.render();
      b.props !== M && (Wl || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(T) || "a component"), Wl = !0);
      {
        var fe = T.childContextTypes;
        if (fe != null) {
          var Ce = u.legacyContext, He = ea(b, T, Ce, fe);
          u.legacyContext = He, rr(o, u, Z), u.legacyContext = Ce;
          return;
        }
      }
      rr(o, u, Z);
    }
    function Js(o, u, b, T) {
      Ml(u, b);
      var M = Fs(b, u.legacyContext), Z = Vc(b, T, M);
      go(Z, b, T, M), hi(o, u, Z, b, T), ur(u);
    }
    var $l = {}, mi = {}, Bl = {}, Hl = {}, Wl = !1, eu = !1, tu = !1, Vl = !1;
    function fd(o, u, b, T) {
      var M;
      if (M = Fs(b, u.legacyContext), Pa(u, b), b.prototype && typeof b.prototype.render == "function") {
        var Z = mn(b) || "Unknown";
        $l[Z] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Z, Z), $l[Z] = !0);
      }
      var fe = Il(o, u, b, T, M), Ce = Vs();
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
        go(fe, b, T, M), hi(o, u, fe, b, T);
      } else if (pd(b), Ce) {
        var st = u.treeContext, wt = 1, fn = 0;
        u.treeContext = Ll(st, wt, fn);
        try {
          rr(o, u, fe);
        } finally {
          u.treeContext = st;
        }
      } else
        rr(o, u, fe);
      ur(u);
    }
    function pd(o) {
      {
        if (o && o.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var u = mn(o) || "Unknown";
          Hl[u] || (a("%s: Function components do not support getDerivedStateFromProps.", u), Hl[u] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var b = mn(o) || "Unknown";
          Bl[b] || (a("%s: Function components do not support contextType.", b), Bl[b] = !0);
        }
      }
    }
    function nu(o, u) {
      if (o && o.defaultProps) {
        var b = tr({}, u), T = o.defaultProps;
        for (var M in T)
          b[M] === void 0 && (b[M] = T[M]);
        return b;
      }
      return u;
    }
    function hd(o, u, b, T, M) {
      Pa(u, b.render);
      var Z = Il(o, u, b.render, T, M), fe = Vs();
      if (fe) {
        var Ce = u.treeContext, He = 1, tt = 0;
        u.treeContext = Ll(Ce, He, tt);
        try {
          rr(o, u, Z);
        } finally {
          u.treeContext = Ce;
        }
      } else
        rr(o, u, Z);
      ur(u);
    }
    function md(o, u, b, T, M) {
      var Z = b.type, fe = nu(Z, T);
      Ul(o, u, Z, fe, M);
    }
    function jl(o, u, b, T) {
      b._context === void 0 ? b !== b.Consumer && (Vl || (Vl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : b = b._context;
      var M = T.children;
      typeof M != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Z = Ca(b), fe = M(Z);
      rr(o, u, fe);
    }
    function yd(o, u, b, T) {
      var M = b._context, Z = T.value, fe = T.children, Ce;
      Ce = u.context, u.context = ii(M, Z), rr(o, u, fe), u.context = Cl(M), Ce !== u.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(o, u, b, T, M) {
      sr(u, "Lazy");
      var Z = b._payload, fe = b._init, Ce = fe(Z), He = nu(Ce, T);
      Ul(o, u, Ce, He, M), ur(u);
    }
    function Ul(o, u, b, T, M) {
      if (typeof b == "function")
        if (dd(b)) {
          Js(o, u, b, T);
          return;
        } else {
          fd(o, u, b, T);
          return;
        }
      if (typeof b == "string") {
        Qs(o, u, b, T);
        return;
      }
      switch (b) {
        case $c:
        case Ls:
        case Ji:
        case eo:
        case Qi: {
          rr(o, u, T.children);
          return;
        }
        case ul: {
          sr(u, "SuspenseList"), rr(o, u, T.children), ur(u);
          return;
        }
        case Ic:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ea: {
          Zs(o, u, T);
          return;
        }
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case Za: {
            hd(o, u, b, T, M);
            return;
          }
          case cl: {
            md(o, u, b, T, M);
            return;
          }
          case Ga: {
            yd(o, u, b, T);
            return;
          }
          case qa: {
            jl(o, u, b, T);
            return;
          }
          case to: {
            nr(o, u, b, T);
            return;
          }
        }
      var Z = "";
      throw (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (b == null ? b : typeof b) + "." + Z));
    }
    function ru(o, u) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (eu || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eu = !0), o.entries === u && (tu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tu = !0);
    }
    function rr(o, u, b) {
      try {
        return Kl(o, u, b);
      } catch (T) {
        throw typeof T == "object" && T !== null && typeof T.then == "function" || ($r = $r !== null ? $r : Fl()), T;
      }
    }
    function Kl(o, u, b) {
      if (u.node = b, typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case As: {
            var T = b, M = T.type, Z = T.props, fe = T.ref;
            Ul(o, u, M, Z, fe);
            return;
          }
          case sl:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case to: {
            var Ce = b, He = Ce._payload, tt = Ce._init, st;
            try {
              st = tt(He);
            } catch (Fo) {
              throw typeof Fo == "object" && Fo !== null && typeof Fo.then == "function" && sr(u, "Lazy"), Fo;
            }
            rr(o, u, st);
            return;
          }
        }
        if (Sn(b)) {
          au(o, u, b);
          return;
        }
        var wt = vn(b);
        if (wt) {
          ru(b, wt);
          var fn = wt.call(b);
          if (fn) {
            var Fn = fn.next();
            if (!Fn.done) {
              var cr = [];
              do
                cr.push(Fn.value), Fn = fn.next();
              while (!Fn.done);
              au(o, u, cr);
              return;
            }
            return;
          }
        }
        var uu = Object.prototype.toString.call(b);
        throw new Error("Objects are not valid as a React child (found: " + (uu === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : uu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof b == "string") {
        var cu = u.blockedSegment;
        cu.lastPushedText = Ts(u.blockedSegment.chunks, b, o.responseState, cu.lastPushedText);
        return;
      }
      if (typeof b == "number") {
        var du = u.blockedSegment;
        du.lastPushedText = Ts(u.blockedSegment.chunks, "" + b, o.responseState, du.lastPushedText);
        return;
      }
      typeof b == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function au(o, u, b) {
      for (var T = b.length, M = 0; M < T; M++) {
        var Z = u.treeContext;
        u.treeContext = Ll(Z, T, M);
        try {
          Ro(o, u, b[M]);
        } finally {
          u.treeContext = Z;
        }
      }
    }
    function gd(o, u, b) {
      var T = u.blockedSegment, M = T.chunks.length, Z = Ir(
        o,
        M,
        null,
        T.formatContext,
        // Adopt the parent segment's leading text embed
        T.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      T.children.push(Z), T.lastPushedText = !1;
      var fe = fi(o, u.node, u.blockedBoundary, Z, u.abortSet, u.legacyContext, u.context, u.treeContext);
      u.componentStack !== null && (fe.componentStack = u.componentStack.parent);
      var Ce = fe.ping;
      b.then(Ce, Ce);
    }
    function Ro(o, u, b) {
      var T = u.blockedSegment.formatContext, M = u.legacyContext, Z = u.context, fe = null;
      fe = u.componentStack;
      try {
        return rr(o, u, b);
      } catch (Ce) {
        if (si(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
          gd(o, u, Ce), u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = Z, lo(Z), u.componentStack = fe;
          return;
        } else
          throw u.blockedSegment.formatContext = T, u.legacyContext = M, u.context = Z, lo(Z), u.componentStack = fe, Ce;
      }
    }
    function Do(o, u, b, T) {
      var M = pi(o, T);
      if (u === null ? Po(o, T) : (u.pendingTasks--, u.forceClientRender || (u.forceClientRender = !0, u.errorDigest = M, zl(u, T), u.parentFlushed && o.clientRenderedBoundaries.push(u))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function iu(o) {
      var u = this, b = o.blockedBoundary, T = o.blockedSegment;
      T.status = Ol, gi(u, b, T);
    }
    function ou(o, u, b) {
      var T = o.blockedBoundary, M = o.blockedSegment;
      if (M.status = Ol, T === null)
        u.allPendingTasks--, u.status !== br && (u.status = br, u.destination !== null && v(u.destination));
      else {
        if (T.pendingTasks--, !T.forceClientRender) {
          T.forceClientRender = !0;
          var Z = b === void 0 ? new Error("The render was aborted by the server without a reason.") : b;
          T.errorDigest = u.onError(Z);
          {
            var fe = "The server did not finish this Suspense boundary: ";
            Z && typeof Z.message == "string" ? Z = fe + Z.message : Z = fe + String(Z);
            var Ce = Sr;
            Sr = o;
            try {
              zl(T, Z);
            } finally {
              Sr = Ce;
            }
          }
          T.parentFlushed && u.clientRenderedBoundaries.push(T);
        }
        if (T.fallbackAbortableTasks.forEach(function(tt) {
          return ou(tt, u, b);
        }), T.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0) {
          var He = u.onAllReady;
          He();
        }
      }
    }
    function yi(o, u) {
      if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
        var b = u.children[0];
        b.id = u.id, b.parentFlushed = !0, b.status === la && yi(o, b);
      } else {
        var T = o.completedSegments;
        T.push(u);
      }
    }
    function gi(o, u, b) {
      if (u === null) {
        if (b.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = b;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = di;
          var T = o.onShellReady;
          T();
        }
      } else if (u.pendingTasks--, !u.forceClientRender) {
        if (u.pendingTasks === 0)
          b.parentFlushed && b.status === la && yi(u, b), u.parentFlushed && o.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(iu, o), u.fallbackAbortableTasks.clear();
        else if (b.parentFlushed && b.status === la) {
          yi(u, b);
          var M = u.completedSegments;
          M.length === 1 && u.parentFlushed && o.partialBoundaries.push(u);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function No(o, u) {
      var b = u.blockedSegment;
      if (b.status === Ao) {
        lo(u.context);
        var T = null;
        T = Sr, Sr = u;
        try {
          rr(o, u, u.node), ws(b.chunks, o.responseState, b.lastPushedText, b.textEmbedded), u.abortSet.delete(u), b.status = la, gi(o, u.blockedBoundary, b);
        } catch (Z) {
          if (si(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
            var M = u.ping;
            Z.then(M, M);
          } else
            u.abortSet.delete(u), b.status = sa, Do(o, u.blockedBoundary, b, Z);
        } finally {
          Sr = T;
        }
      }
    }
    function lu(o) {
      if (o.status !== br) {
        var u = Hc(), b = zr.current;
        zr.current = Xs;
        var T;
        T = Co.getCurrentStack, Co.getCurrentStack = Fl;
        var M = ci;
        wo(o.responseState);
        try {
          var Z = o.pingedTasks, fe;
          for (fe = 0; fe < Z.length; fe++) {
            var Ce = Z[fe];
            No(o, Ce);
          }
          Z.splice(0, fe), o.destination !== null && _o(o, o.destination);
        } catch (He) {
          pi(o, He), Po(o, He);
        } finally {
          wo(M), zr.current = b, Co.getCurrentStack = T, b === Xs && lo(u);
        }
      }
    }
    function vi(o, u, b) {
      switch (b.parentFlushed = !0, b.status) {
        case Ao: {
          var T = b.id = o.nextSegmentId++;
          return b.lastPushedText = !1, b.textEmbedded = !1, $i(u, o.responseState, T);
        }
        case la: {
          b.status = Gs;
          for (var M = !0, Z = b.chunks, fe = 0, Ce = b.children, He = 0; He < Ce.length; He++) {
            for (var tt = Ce[He]; fe < tt.index; fe++)
              c(u, Z[fe]);
            M = xi(o, u, tt);
          }
          for (; fe < Z.length - 1; fe++)
            c(u, Z[fe]);
          return fe < Z.length && (M = h(u, Z[fe])), M;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function xi(o, u, b) {
      var T = b.boundary;
      if (T === null)
        return vi(o, u, b);
      if (T.parentFlushed = !0, T.forceClientRender)
        return or(u, o.responseState, T.errorDigest, T.errorMessage, T.errorComponentStack), vi(o, u, b), Cs(u, o.responseState);
      if (T.pendingTasks > 0) {
        T.rootSegmentID = o.nextSegmentId++, T.completedSegments.length > 0 && o.partialBoundaries.push(T);
        var M = T.id = dn(o.responseState);
        return Fr(u, o.responseState, M), vi(o, u, b), Ka(u, o.responseState);
      } else {
        if (T.byteSize > o.progressiveChunkSize)
          return T.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(T), Fr(u, o.responseState, T.id), vi(o, u, b), Ka(u, o.responseState);
        ll(u, o.responseState);
        var Z = T.completedSegments;
        if (Z.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var fe = Z[0];
        return xi(o, u, fe), zc(u, o.responseState);
      }
    }
    function vd(o, u, b) {
      return _c(u, o.responseState, b.id, b.errorDigest, b.errorMessage, b.errorComponentStack);
    }
    function Yl(o, u, b) {
      return xe(u, o.responseState, b.formatContext, b.id), xi(o, u, b), _e(u, b.formatContext);
    }
    function Oo(o, u, b) {
      for (var T = b.completedSegments, M = 0; M < T.length; M++) {
        var Z = T[M];
        su(o, u, b, Z);
      }
      return T.length = 0, Pc(u, o.responseState, b.id, b.rootSegmentID);
    }
    function xd(o, u, b) {
      for (var T = b.completedSegments, M = 0; M < T.length; M++) {
        var Z = T[M];
        if (!su(o, u, b, Z))
          return M++, T.splice(0, M), !1;
      }
      return T.splice(0, M), !0;
    }
    function su(o, u, b, T) {
      if (T.status === Gs)
        return !0;
      var M = T.id;
      if (M === -1) {
        var Z = T.id = b.rootSegmentID;
        if (Z === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Yl(o, u, T);
      } else
        return Yl(o, u, T), er(u, o.responseState, M);
    }
    function _o(o, u) {
      try {
        var b = o.completedRootSegment;
        b !== null && o.pendingRootTasks === 0 && (xi(o, u, b), o.completedRootSegment = null, Wa(u, o.responseState));
        var T = o.clientRenderedBoundaries, M;
        for (M = 0; M < T.length; M++) {
          var Z = T[M];
          if (!vd(o, u, Z)) {
            o.destination = null, M++, T.splice(0, M);
            return;
          }
        }
        T.splice(0, M);
        var fe = o.completedBoundaries;
        for (M = 0; M < fe.length; M++) {
          var Ce = fe[M];
          if (!Oo(o, u, Ce)) {
            o.destination = null, M++, fe.splice(0, M);
            return;
          }
        }
        fe.splice(0, M);
        var He = o.partialBoundaries;
        for (M = 0; M < He.length; M++) {
          var tt = He[M];
          if (!xd(o, u, tt)) {
            o.destination = null, M++, He.splice(0, M);
            return;
          }
        }
        He.splice(0, M);
        var st = o.completedBoundaries;
        for (M = 0; M < st.length; M++) {
          var wt = st[M];
          if (!Oo(o, u, wt)) {
            o.destination = null, M++, st.splice(0, M);
            return;
          }
        }
        st.splice(0, M);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), v(u));
      }
    }
    function bd(o) {
      f(function() {
        return lu(o);
      });
    }
    function s(o, u) {
      if (o.status === qs) {
        o.status = br, k(u, o.fatalError);
        return;
      }
      if (o.status !== br && o.destination === null) {
        o.destination = u;
        try {
          _o(o, u);
        } catch (b) {
          pi(o, b), Po(o, b);
        }
      }
    }
    function p(o, u) {
      try {
        var b = o.abortableTasks;
        b.forEach(function(T) {
          return ou(T, o, u);
        }), b.clear(), o.destination !== null && _o(o, o.destination);
      } catch (T) {
        pi(o, T), Po(o, T);
      }
    }
    function E() {
    }
    function N(o, u, b, T) {
      var M = !1, Z = null, fe = "", Ce = {
        push: function(wt) {
          return wt !== null && (fe += wt), !0;
        },
        destroy: function(wt) {
          M = !0, Z = wt;
        }
      }, He = !1;
      function tt() {
        He = !0;
      }
      var st = _l(o, Mc(b, u ? u.identifierPrefix : void 0), ol(), 1 / 0, E, void 0, tt, void 0, void 0);
      if (bd(st), p(st, T), s(st, Ce), M)
        throw Z;
      if (!He)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return fe;
    }
    function H(o, u) {
      return N(o, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function te(o, u) {
      return N(o, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ae() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ci.renderToNodeStream = pe, Ci.renderToStaticMarkup = te, Ci.renderToStaticNodeStream = Ae, Ci.renderToString = H, Ci.version = t;
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
var Ph;
function WS() {
  return Ph || (Ph = 1, process.env.NODE_ENV !== "production" && function() {
    var e = de, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function i(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), N = 1; N < p; N++)
          E[N - 1] = arguments[N];
        l("warn", s, E);
      }
    }
    function a(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), N = 1; N < p; N++)
          E[N - 1] = arguments[N];
        l("error", s, E);
      }
    }
    function l(s, p, E) {
      {
        var N = n.ReactDebugCurrentFrame, H = N.getStackAddendum();
        H !== "" && (p += "%s", E = E.concat([H]));
        var te = E.map(function(pe) {
          return String(pe);
        });
        te.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, te);
      }
    }
    function f(s) {
      s();
    }
    var d = 512, c = null, h = 0;
    function y(s) {
      c = new Uint8Array(d), h = 0;
    }
    function v(s, p) {
      if (p.length !== 0) {
        if (p.length > d) {
          h > 0 && (s.enqueue(new Uint8Array(c.buffer, 0, h)), c = new Uint8Array(d), h = 0), s.enqueue(p);
          return;
        }
        var E = p, N = c.length - h;
        N < E.length && (N === 0 ? s.enqueue(c) : (c.set(E.subarray(0, N), h), s.enqueue(c), E = E.subarray(N)), c = new Uint8Array(d), h = 0), c.set(E, h), h += E.length;
      }
    }
    function S(s, p) {
      return v(s, p), !0;
    }
    function R(s) {
      c && h > 0 && (s.enqueue(new Uint8Array(c.buffer, 0, h)), c = null, h = 0);
    }
    function k(s) {
      s.close();
    }
    var F = new TextEncoder();
    function w(s) {
      return F.encode(s);
    }
    function m(s) {
      return F.encode(s);
    }
    function _(s, p) {
      typeof s.error == "function" ? s.error(p) : s.close();
    }
    function D(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, E = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function P(s) {
      try {
        return O(s), !1;
      } catch {
        return !0;
      }
    }
    function O(s) {
      return "" + s;
    }
    function L(s, p) {
      if (P(s))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, D(s)), O(s);
    }
    function U(s, p) {
      if (P(s))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, D(s)), O(s);
    }
    function V(s) {
      if (P(s))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", D(s)), O(s);
    }
    var q = Object.prototype.hasOwnProperty, ce = 0, ee = 1, j = 2, Y = 3, W = 4, B = 5, ie = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", se = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Q = new RegExp("^[" + ae + "][" + se + "]*$"), K = {}, ne = {};
    function ue(s) {
      return q.call(ne, s) ? !0 : q.call(K, s) ? !1 : Q.test(s) ? (ne[s] = !0, !0) : (K[s] = !0, a("Invalid attribute name: `%s`", s), !1);
    }
    function ze(s, p, E, N) {
      if (E !== null && E.type === ce)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (N)
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
      return Pe.hasOwnProperty(s) ? Pe[s] : null;
    }
    function ye(s, p, E, N, H, te, pe) {
      this.acceptsBooleans = p === j || p === Y || p === W, this.attributeName = N, this.attributeNamespace = H, this.mustUseProperty = E, this.propertyName = s, this.type = p, this.sanitizeURL = te, this.removeEmptyString = pe;
    }
    var Pe = {}, oe = [
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
    oe.forEach(function(s) {
      Pe[s] = new ye(
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
      Pe[p] = new ye(
        p,
        ee,
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
      Pe[s] = new ye(
        s,
        j,
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
      Pe[s] = new ye(
        s,
        j,
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
      Pe[s] = new ye(
        s,
        Y,
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
      Pe[s] = new ye(
        s,
        Y,
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
      Pe[s] = new ye(
        s,
        W,
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
      Pe[s] = new ye(
        s,
        ie,
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
      Pe[s] = new ye(
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
      Pe[p] = new ye(
        p,
        ee,
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
      Pe[p] = new ye(
        p,
        ee,
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
      Pe[p] = new ye(
        p,
        ee,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(s) {
      Pe[s] = new ye(
        s,
        ee,
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
    Pe[he] = new ye(
      "xlinkHref",
      ee,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(s) {
      Pe[s] = new ye(
        s,
        ee,
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
    var Te = {
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
    function J(s, p) {
      return s + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var Me = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Te).forEach(function(s) {
      Me.forEach(function(p) {
        Te[J(p, s)] = Te[s];
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
    function Xe(s, p) {
      we[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ze(s, p) {
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
    }, Ue = {}, Et = new RegExp("^(aria)-[" + se + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + se + "]*$");
    function We(s, p) {
      {
        if (q.call(Ue, p) && Ue[p])
          return !0;
        if (Ke.test(p)) {
          var E = "aria-" + p.slice(4).toLowerCase(), N = et.hasOwnProperty(E) ? E : null;
          if (N == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), Ue[p] = !0, !0;
          if (p !== N)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, N), Ue[p] = !0, !0;
        }
        if (Et.test(p)) {
          var H = p.toLowerCase(), te = et.hasOwnProperty(H) ? H : null;
          if (te == null)
            return Ue[p] = !0, !1;
          if (p !== te)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, te), Ue[p] = !0, !0;
        }
      }
      return !0;
    }
    function Be(s, p) {
      {
        var E = [];
        for (var N in p) {
          var H = We(s, N);
          H || E.push(N);
        }
        var te = E.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        E.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", te, s) : E.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", te, s);
      }
    }
    function $e(s, p) {
      Ze(s, p) || Be(s, p);
    }
    var ft = !1;
    function qe(s, p) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        p != null && p.value === null && !ft && (ft = !0, s === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
      }
    }
    var it = {
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
    }, yt = function() {
    };
    {
      var ht = {}, _t = /^on./, tn = /^on[^A-Z]/, Xt = new RegExp("^(aria)-[" + se + "]*$"), gt = new RegExp("^(aria)[A-Z][" + se + "]*$");
      yt = function(s, p, E, N) {
        if (q.call(ht, p) && ht[p])
          return !0;
        var H = p.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[p] = !0, !0;
        if (N != null) {
          var te = N.registrationNameDependencies, pe = N.possibleRegistrationNames;
          if (te.hasOwnProperty(p))
            return !0;
          var Ae = pe.hasOwnProperty(H) ? pe[H] : null;
          if (Ae != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, Ae), ht[p] = !0, !0;
          if (_t.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ht[p] = !0, !0;
        } else if (_t.test(p))
          return tn.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ht[p] = !0, !0;
        if (Xt.test(p) || gt.test(p))
          return !0;
        if (H === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[p] = !0, !0;
        if (H === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[p] = !0, !0;
        if (H === "is" && E !== null && E !== void 0 && typeof E != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), ht[p] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ht[p] = !0, !0;
        var o = be(p), u = o !== null && o.type === ce;
        if (it.hasOwnProperty(H)) {
          var b = it[H];
          if (b !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, b), ht[p] = !0, !0;
        } else if (!u && p !== H)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, H), ht[p] = !0, !0;
        return typeof E == "boolean" && ze(p, E, o, !1) ? (E ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, p, p, E, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, p, p, E, p, p, p), ht[p] = !0, !0) : u ? !0 : ze(p, E, o, !1) ? (ht[p] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === Y && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, p, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, E), ht[p] = !0), !0);
      };
    }
    var Rt = function(s, p, E) {
      {
        var N = [];
        for (var H in p) {
          var te = yt(s, H, p[H], E);
          te || N.push(H);
        }
        var pe = N.map(function(Ae) {
          return "`" + Ae + "`";
        }).join(", ");
        N.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, s) : N.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, s);
      }
    };
    function hn(s, p, E) {
      Ze(s, p) || Rt(s, p, E);
    }
    var on = function() {
    };
    {
      var qt = /^(?:webkit|moz|o)[A-Z]/, yn = /^-ms-/, Fe = /-(.)/g, vt = /;\s*$/, Ht = {}, It = {}, At = !1, xn = !1, Mt = function(s) {
        return s.replace(Fe, function(p, E) {
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
      }, Tn = function(s, p) {
        It.hasOwnProperty(p) && It[p] || (It[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, s, p.replace(vt, "")));
      }, Jt = function(s, p) {
        At || (At = !0, a("`NaN` is an invalid value for the `%s` css style property.", s));
      }, jt = function(s, p) {
        xn || (xn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      on = function(s, p) {
        s.indexOf("-") > -1 ? ln(s) : qt.test(s) ? cn(s) : vt.test(p) && Tn(s, p), typeof p == "number" && (isNaN(p) ? Jt(s, p) : isFinite(p) || jt(s, p));
      };
    }
    var Pn = on, Mn = /["'&<>]/;
    function Hn(s) {
      V(s);
      var p = "" + s, E = Mn.exec(p);
      if (!E)
        return p;
      var N, H = "", te, pe = 0;
      for (te = E.index; te < p.length; te++) {
        switch (p.charCodeAt(te)) {
          case 34:
            N = "&quot;";
            break;
          case 38:
            N = "&amp;";
            break;
          case 39:
            N = "&#x27;";
            break;
          case 60:
            N = "&lt;";
            break;
          case 62:
            N = "&gt;";
            break;
          default:
            continue;
        }
        pe !== te && (H += p.substring(pe, te)), pe = te + 1, H += N;
      }
      return pe !== te ? H + p.substring(pe, te) : H;
    }
    function Ut(s) {
      return typeof s == "boolean" || typeof s == "number" ? "" + s : Hn(s);
    }
    var zn = /([A-Z])/g, Wn = /^ms-/;
    function An(s) {
      return s.replace(zn, "-$1").toLowerCase().replace(Wn, "-ms-");
    }
    var Sn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, De = !1;
    function ut(s) {
      !De && Sn.test(s) && (De = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(s)));
    }
    var ct = Array.isArray;
    function $(s) {
      return ct(s);
    }
    var Ne = m("<script>"), Ge = m("<\/script>"), Ve = m('<script src="'), ot = m('<script type="module" src="'), nt = m('" async=""><\/script>');
    function St(s) {
      return V(s), ("" + s).replace(Dt, Qe);
    }
    var Dt = /(<\/|<)(s)(cript)/gi, Qe = function(s, p, E, N) {
      return "" + p + (E === "s" ? "\\u0073" : "\\u0053") + N;
    };
    function Kt(s, p, E, N, H) {
      var te = s === void 0 ? "" : s, pe = p === void 0 ? Ne : m('<script nonce="' + Ut(p) + '">'), Ae = [];
      if (E !== void 0 && Ae.push(pe, w(St(E)), Ge), N !== void 0)
        for (var o = 0; o < N.length; o++)
          Ae.push(Ve, w(Ut(N[o])), nt);
      if (H !== void 0)
        for (var u = 0; u < H.length; u++)
          Ae.push(ot, w(Ut(H[u])), nt);
      return {
        bootstrapChunks: Ae,
        startInlineScript: pe,
        placeholderPrefix: m(te + "P:"),
        segmentPrefix: m(te + "S:"),
        boundaryPrefix: te + "B:",
        idPrefix: te,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var zt = 0, Ft = 1, pt = 2, Nt = 3, Tt = 4, Yt = 5, Wt = 6, dn = 7;
    function sn(s, p) {
      return {
        insertionMode: s,
        selectedValue: p
      };
    }
    function nn(s) {
      var p = s === "http://www.w3.org/2000/svg" ? pt : s === "http://www.w3.org/1998/Math/MathML" ? Nt : zt;
      return sn(p, null);
    }
    function Zt(s, p, E) {
      switch (p) {
        case "select":
          return sn(Ft, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return sn(pt, null);
        case "math":
          return sn(Nt, null);
        case "foreignObject":
          return sn(Ft, null);
        case "table":
          return sn(Tt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return sn(Yt, null);
        case "colgroup":
          return sn(dn, null);
        case "tr":
          return sn(Wt, null);
      }
      return s.insertionMode >= Tt || s.insertionMode === zt ? sn(Ft, null) : s;
    }
    var En = null;
    function un(s) {
      var p = s.nextSuspenseID++;
      return m(s.boundaryPrefix + p.toString(16));
    }
    function kn(s, p, E) {
      var N = s.idPrefix, H = ":" + N + "R" + p;
      return E > 0 && (H += "H" + E.toString(32)), H + ":";
    }
    function In(s) {
      return Ut(s);
    }
    var Yn = m("<!-- -->");
    function Zn(s, p, E, N) {
      return p === "" ? N : (N && s.push(Yn), s.push(w(In(p))), !0);
    }
    function Xn(s, p, E, N) {
      E && N && s.push(Yn);
    }
    var g = /* @__PURE__ */ new Map();
    function C(s) {
      var p = g.get(s);
      if (p !== void 0)
        return p;
      var E = m(Ut(An(s)));
      return g.set(s, E), E;
    }
    var I = m(' style="'), X = m(":"), Se = m(";");
    function ge(s, p, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var N = !0;
      for (var H in E)
        if (q.call(E, H)) {
          var te = E[H];
          if (!(te == null || typeof te == "boolean" || te === "")) {
            var pe = void 0, Ae = void 0, o = H.indexOf("--") === 0;
            o ? (pe = w(Ut(H)), U(te, H), Ae = w(Ut(("" + te).trim()))) : (Pn(H, te), pe = C(H), typeof te == "number" ? te !== 0 && !q.call(Te, H) ? Ae = w(te + "px") : Ae = w("" + te) : (U(te, H), Ae = w(Ut(("" + te).trim())))), N ? (N = !1, s.push(I, pe, X, Ae)) : s.push(Se, pe, X, Ae);
          }
        }
      N || s.push(rt);
    }
    var Le = m(" "), je = m('="'), rt = m('"'), mt = m('=""');
    function re(s, p, E, N) {
      switch (E) {
        case "style": {
          ge(s, p, N);
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
          switch (typeof N) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!H.acceptsBooleans)
                return;
          }
          var te = H.attributeName, pe = w(te);
          switch (H.type) {
            case Y:
              N && s.push(Le, pe, mt);
              return;
            case W:
              N === !0 ? s.push(Le, pe, mt) : N === !1 || s.push(Le, pe, je, w(Ut(N)), rt);
              return;
            case B:
              isNaN(N) || s.push(Le, pe, je, w(Ut(N)), rt);
              break;
            case ie:
              !isNaN(N) && N >= 1 && s.push(Le, pe, je, w(Ut(N)), rt);
              break;
            default:
              H.sanitizeURL && (L(N, te), N = "" + N, ut(N)), s.push(Le, pe, je, w(Ut(N)), rt);
          }
        } else if (ue(E)) {
          switch (typeof N) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ae = E.toLowerCase().slice(0, 5);
              if (Ae !== "data-" && Ae !== "aria-")
                return;
            }
          }
          s.push(Le, w(E), je, w(Ut(N)), rt);
        }
      }
    }
    var le = m(">"), me = m("/>");
    function Re(s, p, E) {
      if (p != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var N = p.__html;
        N != null && (V(N), s.push(w("" + N)));
      }
    }
    var xt = !1, gn = !1, wn = !1, fr = !1, $n = !1, Tr = !1, pr = !1;
    function Gr(s, p) {
      {
        var E = s[p];
        if (E != null) {
          var N = $(E);
          s.multiple && !N ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !s.multiple && N && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Zo(s, p, E) {
      Xe("select", p), Gr(p, "value"), Gr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !wn && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wn = !0), s.push(Qn("select"));
      var N = null, H = null;
      for (var te in p)
        if (q.call(p, te)) {
          var pe = p[te];
          if (pe == null)
            continue;
          switch (te) {
            case "children":
              N = pe;
              break;
            case "dangerouslySetInnerHTML":
              H = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              re(s, E, te, pe);
              break;
          }
        }
      return s.push(le), Re(s, H, N), N;
    }
    function Qo(s) {
      var p = "";
      return e.Children.forEach(s, function(E) {
        E != null && (p += E, !$n && typeof E != "string" && typeof E != "number" && ($n = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ba = m(' selected=""');
    function Jo(s, p, E, N) {
      var H = N.selectedValue;
      s.push(Qn("option"));
      var te = null, pe = null, Ae = null, o = null;
      for (var u in p)
        if (q.call(p, u)) {
          var b = p[u];
          if (b == null)
            continue;
          switch (u) {
            case "children":
              te = b;
              break;
            case "selected":
              Ae = b, pr || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = b;
              break;
            case "value":
              pe = b;
            default:
              re(s, E, u, b);
              break;
          }
        }
      if (H != null) {
        var T;
        if (pe !== null ? (L(pe, "value"), T = "" + pe) : (o !== null && (Tr || (Tr = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), T = Qo(te)), $(H))
          for (var M = 0; M < H.length; M++) {
            L(H[M], "value");
            var Z = "" + H[M];
            if (Z === T) {
              s.push(Ba);
              break;
            }
          }
        else
          L(H, "select.value"), "" + H === T && s.push(Ba);
      } else
        Ae && s.push(Ba);
      return s.push(le), Re(s, o, te), te;
    }
    function Ha(s, p, E) {
      Xe("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !gn && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), gn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !xt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), xt = !0), s.push(Qn("input"));
      var N = null, H = null, te = null, pe = null;
      for (var Ae in p)
        if (q.call(p, Ae)) {
          var o = p[Ae];
          if (o == null)
            continue;
          switch (Ae) {
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
              te = o;
              break;
            case "value":
              N = o;
              break;
            default:
              re(s, E, Ae, o);
              break;
          }
        }
      return te !== null ? re(s, E, "checked", te) : pe !== null && re(s, E, "checked", pe), N !== null ? re(s, E, "value", N) : H !== null && re(s, E, "value", H), s.push(me), null;
    }
    function hr(s, p, E) {
      Xe("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !fr && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), fr = !0), s.push(Qn("textarea"));
      var N = null, H = null, te = null;
      for (var pe in p)
        if (q.call(p, pe)) {
          var Ae = p[pe];
          if (Ae == null)
            continue;
          switch (pe) {
            case "children":
              te = Ae;
              break;
            case "value":
              N = Ae;
              break;
            case "defaultValue":
              H = Ae;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              re(s, E, pe, Ae);
              break;
          }
        }
      if (N === null && H !== null && (N = H), s.push(le), te != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), N != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if ($(te)) {
          if (te.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          V(te[0]), N = "" + te[0];
        }
        V(te), N = "" + te;
      }
      return typeof N == "string" && N[0] === `
` && s.push(wr), N !== null && (L(N, "value"), s.push(w(In("" + N)))), null;
    }
    function qr(s, p, E, N) {
      s.push(Qn(E));
      for (var H in p)
        if (q.call(p, H)) {
          var te = p[H];
          if (te == null)
            continue;
          switch (H) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              re(s, N, H, te);
              break;
          }
        }
      return s.push(me), null;
    }
    function ca(s, p, E) {
      s.push(Qn("menuitem"));
      for (var N in p)
        if (q.call(p, N)) {
          var H = p[N];
          if (H == null)
            continue;
          switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              re(s, E, N, H);
              break;
          }
        }
      return s.push(le), null;
    }
    function en(s, p, E) {
      s.push(Qn("title"));
      var N = null;
      for (var H in p)
        if (q.call(p, H)) {
          var te = p[H];
          if (te == null)
            continue;
          switch (H) {
            case "children":
              N = te;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              re(s, E, H, te);
              break;
          }
        }
      s.push(le);
      {
        var pe = Array.isArray(N) && N.length < 2 ? N[0] || null : N;
        Array.isArray(N) && N.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return N;
    }
    function mr(s, p, E, N) {
      s.push(Qn(E));
      var H = null, te = null;
      for (var pe in p)
        if (q.call(p, pe)) {
          var Ae = p[pe];
          if (Ae == null)
            continue;
          switch (pe) {
            case "children":
              H = Ae;
              break;
            case "dangerouslySetInnerHTML":
              te = Ae;
              break;
            default:
              re(s, N, pe, Ae);
              break;
          }
        }
      return s.push(le), Re(s, te, H), typeof H == "string" ? (s.push(w(In(H))), null) : H;
    }
    function Vn(s, p, E, N) {
      s.push(Qn(E));
      var H = null, te = null;
      for (var pe in p)
        if (q.call(p, pe)) {
          var Ae = p[pe];
          if (Ae == null)
            continue;
          switch (pe) {
            case "children":
              H = Ae;
              break;
            case "dangerouslySetInnerHTML":
              te = Ae;
              break;
            case "style":
              ge(s, N, Ae);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ue(pe) && typeof Ae != "function" && typeof Ae != "symbol" && s.push(Le, w(pe), je, w(Ut(Ae)), rt);
              break;
          }
        }
      return s.push(le), Re(s, te, H), H;
    }
    var wr = m(`
`);
    function yr(s, p, E, N) {
      s.push(Qn(E));
      var H = null, te = null;
      for (var pe in p)
        if (q.call(p, pe)) {
          var Ae = p[pe];
          if (Ae == null)
            continue;
          switch (pe) {
            case "children":
              H = Ae;
              break;
            case "dangerouslySetInnerHTML":
              te = Ae;
              break;
            default:
              re(s, N, pe, Ae);
              break;
          }
        }
      if (s.push(le), te != null) {
        if (H != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof te != "object" || !("__html" in te))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = te.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(wr, w(o)) : (V(o), s.push(w("" + o))));
      }
      return typeof H == "string" && H[0] === `
` && s.push(wr), H;
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
    function Va(s, p, E, N, H) {
      switch ($e(p, E), qe(p, E), hn(p, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), H.insertionMode !== pt && H.insertionMode !== Nt && p.indexOf("-") === -1 && typeof E.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Zo(s, E, N);
        case "option":
          return Jo(s, E, N, H);
        case "textarea":
          return hr(s, E, N);
        case "input":
          return Ha(s, E, N);
        case "menuitem":
          return ca(s, E, N);
        case "title":
          return en(s, E, N);
        case "listing":
        case "pre":
          return yr(s, E, p, N);
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
          return qr(s, E, p, N);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mr(s, E, p, N);
        case "html":
          return H.insertionMode === zt && s.push(Wa), mr(s, E, p, N);
        default:
          return p.indexOf("-") === -1 && typeof E.is != "string" ? mr(s, E, p, N) : Vn(s, E, p, N);
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
          s.push(Ii, w(p), $i);
      }
    }
    function el(s, p) {
      for (var E = p.bootstrapChunks, N = 0; N < E.length - 1; N++)
        v(s, E[N]);
      return N < E.length ? S(s, E[N]) : !0;
    }
    var tl = m('<template id="'), fa = m('"></template>');
    function pa(s, p, E) {
      v(s, tl), v(s, p.placeholderPrefix);
      var N = w(E.toString(16));
      return v(s, N), S(s, fa);
    }
    var ha = m("<!--$-->"), Zr = m('<!--$?--><template id="'), nl = m('"></template>'), Qr = m("<!--$!-->"), ja = m("<!--/$-->"), Ua = m("<template"), _r = m('"'), Fr = m(' data-dgst="'), ma = m(' data-msg="'), Hi = m(' data-stck="'), Ka = m("></template>");
    function Wi(s, p) {
      return S(s, ha);
    }
    function ya(s, p, E) {
      if (v(s, Zr), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), S(s, nl);
    }
    function jn(s, p, E, N, H) {
      var te;
      return te = S(s, Qr), v(s, Ua), E && (v(s, Fr), v(s, w(Ut(E))), v(s, _r)), N && (v(s, ma), v(s, w(Ut(N))), v(s, _r)), H && (v(s, Hi), v(s, w(Ut(H))), v(s, _r)), te = S(s, Ka), te;
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
    var ji = m('<div hidden id="'), va = m('">'), Ui = m("</div>"), Ki = m('<svg aria-hidden="true" style="display:none" id="'), xa = m('">'), ba = m("</svg>"), Yi = m('<math aria-hidden="true" style="display:none" id="'), Xi = m('">'), Gi = m("</math>"), Ya = m('<table hidden id="'), qi = m('">'), x = m("</table>"), A = m('<table hidden><tbody id="'), z = m('">'), G = m("</tbody></table>"), ke = m('<table hidden><tr id="'), xe = m('">'), _e = m("</tr></table>"), Ye = m('<table hidden><colgroup id="'), bt = m('">'), Ot = m("</colgroup></table>");
    function Pt(s, p, E, N) {
      switch (E.insertionMode) {
        case zt:
        case Ft:
          return v(s, ji), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, va);
        case pt:
          return v(s, Ki), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, xa);
        case Nt:
          return v(s, Yi), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, Xi);
        case Tt:
          return v(s, Ya), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, qi);
        case Yt:
          return v(s, A), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, z);
        case Wt:
          return v(s, ke), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, xe);
        case dn:
          return v(s, Ye), v(s, p.segmentPrefix), v(s, w(N.toString(16))), S(s, bt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function rn(s, p) {
      switch (p.insertionMode) {
        case zt:
        case Ft:
          return S(s, Ui);
        case pt:
          return S(s, ba);
        case Nt:
          return S(s, Gi);
        case Tt:
          return S(s, x);
        case Yt:
          return S(s, G);
        case Wt:
          return S(s, _e);
        case dn:
          return S(s, Ot);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Un = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Sa = m(Un + ';$RS("'), Zi = m('$RS("'), Xa = m('","'), Lc = m('")<\/script>');
    function Pc(s, p, E) {
      v(s, p.startInlineScript), p.sentCompleteSegmentFunction ? v(s, Zi) : (p.sentCompleteSegmentFunction = !0, v(s, Sa)), v(s, p.segmentPrefix);
      var N = w(E.toString(16));
      return v(s, N), v(s, Xa), v(s, p.placeholderPrefix), v(s, N), S(s, Lc);
    }
    var Rc = m(Jn + ';$RC("'), Dc = m('$RC("'), Nc = m('","'), Oc = m('")<\/script>');
    function al(s, p, E, N) {
      if (v(s, p.startInlineScript), p.sentCompleteBoundaryFunction ? v(s, Dc) : (p.sentCompleteBoundaryFunction = !0, v(s, Rc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var H = w(N.toString(16));
      return v(s, E), v(s, Nc), v(s, p.segmentPrefix), v(s, H), S(s, Oc);
    }
    var _c = m(er + ';$RX("'), Fc = m('$RX("'), il = m('"'), Mc = m(")<\/script>"), ol = m(",");
    function Ts(s, p, E, N, H, te) {
      if (v(s, p.startInlineScript), p.sentClientRenderFunction ? v(s, Fc) : (p.sentClientRenderFunction = !0, v(s, _c)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), v(s, il), (N || H || te) && (v(s, ol), v(s, w(ll(N || "")))), (H || te) && (v(s, ol), v(s, w(ll(H || "")))), te && (v(s, ol), v(s, w(ll(te)))), S(s, Mc);
    }
    var ws = /[<\u2028\u2029]/g;
    function ll(s) {
      var p = JSON.stringify(s);
      return p.replace(ws, function(E) {
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
    var or = Object.assign, zc = Symbol.for("react.element"), Cs = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), As = Symbol.for("react.strict_mode"), sl = Symbol.for("react.profiler"), Qi = Symbol.for("react.provider"), Ji = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), Ga = Symbol.for("react.suspense"), qa = Symbol.for("react.suspense_list"), Za = Symbol.for("react.memo"), Ea = Symbol.for("react.lazy"), ul = Symbol.for("react.scope"), cl = Symbol.for("react.debug_trace_mode"), to = Symbol.for("react.legacy_hidden"), Ic = Symbol.for("react.default_value"), Ls = Symbol.iterator, $c = "@@iterator";
    function Bc(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = Ls && s[Ls] || s[$c];
      return typeof p == "function" ? p : null;
    }
    function Ps(s, p, E) {
      var N = s.displayName;
      if (N)
        return N;
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
        case Ga:
          return "Suspense";
        case qa:
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
            var N = s.displayName || null;
            return N !== null ? N : vn(s.type) || "Memo";
          case Ea: {
            var H = s, te = H._payload, pe = H._init;
            try {
              return vn(pe(te));
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
    function Ds() {
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
    function Ns() {
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
            var N = H.stack.trim().match(/\n( *(at )?)/);
            gl = N && N[1] || "";
          }
        return `
` + gl + s;
      }
    }
    var ei = !1, Ta;
    {
      var ti = typeof WeakMap == "function" ? WeakMap : Map;
      Ta = new ti();
    }
    function ni(s, p) {
      if (!s || ei)
        return "";
      {
        var E = Ta.get(s);
        if (E !== void 0)
          return E;
      }
      var N;
      ei = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = no.current, no.current = null, Ds();
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
              N = fe;
            }
            Reflect.construct(s, [], pe);
          } else {
            try {
              pe.call();
            } catch (fe) {
              N = fe;
            }
            s.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            N = fe;
          }
          s();
        }
      } catch (fe) {
        if (fe && N && typeof fe.stack == "string") {
          for (var Ae = fe.stack.split(`
`), o = N.stack.split(`
`), u = Ae.length - 1, b = o.length - 1; u >= 1 && b >= 0 && Ae[u] !== o[b]; )
            b--;
          for (; u >= 1 && b >= 0; u--, b--)
            if (Ae[u] !== o[b]) {
              if (u !== 1 || b !== 1)
                do
                  if (u--, b--, b < 0 || Ae[u] !== o[b]) {
                    var T = `
` + Ae[u].replace(" at new ", " at ");
                    return s.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", s.displayName)), typeof s == "function" && Ta.set(s, T), T;
                  }
                while (u >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ei = !1, no.current = te, Ns(), Error.prepareStackTrace = H;
      }
      var M = s ? s.displayName || s.name : "", Z = M ? Ja(M) : "";
      return typeof s == "function" && Ta.set(s, Z), Z;
    }
    function ro(s, p, E) {
      return ni(s, !0);
    }
    function Os(s, p, E) {
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
        case Ga:
          return Ja("Suspense");
        case qa:
          return Ja("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case eo:
            return Os(s.render);
          case Za:
            return xl(s.type, p, E);
          case Ea: {
            var N = s, H = N._payload, te = N._init;
            try {
              return xl(te(H), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var bl = {}, _s = n.ReactDebugCurrentFrame;
    function wa(s) {
      if (s) {
        var p = s._owner, E = xl(s.type, s._source, p ? p.type : null);
        _s.setExtraStackFrame(E);
      } else
        _s.setExtraStackFrame(null);
    }
    function Sl(s, p, E, N, H) {
      {
        var te = Function.call.bind(q);
        for (var pe in s)
          if (te(s, pe)) {
            var Ae = void 0;
            try {
              if (typeof s[pe] != "function") {
                var o = Error((N || "React class") + ": " + E + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Ae = s[pe](p, pe, N, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              Ae = u;
            }
            Ae && !(Ae instanceof Error) && (wa(H), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", E, pe, typeof Ae), wa(null)), Ae instanceof Error && !(Ae.message in bl) && (bl[Ae.message] = !0, wa(H), a("Failed %s type: %s", E, Ae.message), wa(null));
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
        var N = {};
        for (var H in E)
          N[H] = p[H];
        {
          var te = vn(s) || "Unknown";
          Sl(E, N, "context", te);
        }
        return N;
      }
    }
    function kl(s, p, E, N) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var H = vn(p) || "Unknown";
            ao[H] || (ao[H] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", H, H));
          }
          return E;
        }
        var te = s.getChildContext();
        for (var pe in te)
          if (!(pe in N))
            throw new Error((vn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var Ae = vn(p) || "Unknown";
          Sl(N, te, "child context", Ae);
        }
        return or({}, E, te);
      }
    }
    var Mr;
    Mr = {};
    var Fs = null, ea = null;
    function ta(s) {
      s.context._currentValue = s.parentValue;
    }
    function Tl(s) {
      s.context._currentValue = s.value;
    }
    function vr(s, p) {
      if (s !== p) {
        ta(s);
        var E = s.parent, N = p.parent;
        if (E === null) {
          if (N !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (N === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          vr(E, N);
        }
        Tl(p);
      }
    }
    function io(s) {
      ta(s);
      var p = s.parent;
      p !== null && io(p);
    }
    function oo(s) {
      var p = s.parent;
      p !== null && oo(p), Tl(s);
    }
    function ri(s, p) {
      ta(s);
      var E = s.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      E.depth === p.depth ? vr(E, p) : ri(E, p);
    }
    function wl(s, p) {
      var E = p.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === E.depth ? vr(s, E) : wl(s, E), Tl(p);
    }
    function ai(s) {
      var p = ea, E = s;
      p !== E && (p === null ? oo(E) : E === null ? io(p) : p.depth === E.depth ? vr(p, E) : p.depth > E.depth ? ri(p, E) : wl(p, E), ea = E);
    }
    function Ms(s, p) {
      var E;
      E = s._currentValue, s._currentValue = p, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Mr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Mr;
      var N = ea, H = {
        parent: N,
        depth: N === null ? 0 : N.depth + 1,
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
        E === Ic ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Mr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Mr;
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
    function Hc(s, p) {
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
        var E = s.constructor, N = E && vn(E) || "ReactClass", H = N + "." + p;
        if (Ca[H])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, N), Ca[H] = !0;
      }
    }
    var yo = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, p, E) {
        var N = Cl(s);
        N.queue === null ? mo(s, "setState") : (N.queue.push(p), E != null && Aa(E, "setState"));
      },
      enqueueReplaceState: function(s, p, E) {
        var N = Cl(s);
        N.replace = !0, N.queue = [p], E != null && Aa(E, "setState");
      },
      enqueueForceUpdate: function(s, p) {
        var E = Cl(s);
        E.queue === null ? mo(s, "forceUpdate") : p != null && Aa(p, "setState");
      }
    };
    function Is(s, p, E, N, H) {
      var te = E(H, N);
      fo(p, te);
      var pe = te == null ? N : or({}, N, te);
      return pe;
    }
    function $s(s, p, E) {
      var N = Jr, H = s.contextType;
      if ("contextType" in s) {
        var te = (
          // Allow null for conditional declaration
          H === null || H !== void 0 && H.$$typeof === Ji && H._context === void 0
        );
        if (!te && !La.has(s)) {
          La.add(s);
          var pe = "";
          H === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof H != "object" ? pe = " However, it is set to a " + typeof H + "." : H.$$typeof === Qi ? pe = " Did you accidentally pass the Context.Provider instead?" : H._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(H).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", vn(s) || "Component", pe);
        }
      }
      typeof H == "object" && H !== null ? N = ii(H) : N = E;
      var Ae = new s(p, N);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Ae.state === null || Ae.state === void 0)) {
          var o = vn(s) || "Component";
          Al.has(o) || (Al.add(o), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Ae.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Ae.getSnapshotBeforeUpdate == "function") {
          var u = null, b = null, T = null;
          if (typeof Ae.componentWillMount == "function" && Ae.componentWillMount.__suppressDeprecationWarning !== !0 ? u = "componentWillMount" : typeof Ae.UNSAFE_componentWillMount == "function" && (u = "UNSAFE_componentWillMount"), typeof Ae.componentWillReceiveProps == "function" && Ae.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof Ae.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof Ae.componentWillUpdate == "function" && Ae.componentWillUpdate.__suppressDeprecationWarning !== !0 ? T = "componentWillUpdate" : typeof Ae.UNSAFE_componentWillUpdate == "function" && (T = "UNSAFE_componentWillUpdate"), u !== null || b !== null || T !== null) {
            var M = vn(s) || "Component", Z = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            co.has(M) || (co.add(M), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, Z, u !== null ? `
  ` + u : "", b !== null ? `
  ` + b : "", T !== null ? `
  ` + T : ""));
          }
        }
      }
      return Ae;
    }
    function Bs(s, p, E) {
      {
        var N = vn(p) || "Component", H = s.render;
        H || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", N) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", N)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", N), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", N), s.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", N), s.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", N), s.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", N), p.contextType && p.contextTypes && !po.has(p) && (po.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", N)), typeof s.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", N), p.prototype && p.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", vn(p) || "A pure component"), typeof s.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", N), typeof s.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", N), typeof s.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", N), typeof s.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", N);
        var te = s.props !== E;
        s.props !== void 0 && te && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", N, N), s.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", N, N), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !uo.has(p) && (uo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", vn(p))), typeof s.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", N), typeof s.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", N), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", N);
        var pe = s.state;
        pe && (typeof pe != "object" || $(pe)) && a("%s.state: must be set to an object or null", N), typeof s.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", N);
      }
    }
    function Wc(s, p) {
      var E = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var N = vn(s) || "Unknown";
          so[N] || (i(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            N
          ), so[N] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), E !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vn(s) || "Component"), yo.enqueueReplaceState(p, p.state, null));
    }
    function Vc(s, p, E, N) {
      if (s.queue !== null && s.queue.length > 0) {
        var H = s.queue, te = s.replace;
        if (s.queue = null, s.replace = !1, te && H.length === 1)
          p.state = H[0];
        else {
          for (var pe = te ? H[0] : p.state, Ae = !0, o = te ? 1 : 0; o < H.length; o++) {
            var u = H[o], b = typeof u == "function" ? u.call(p, pe, E, N) : u;
            b != null && (Ae ? (Ae = !1, pe = or({}, pe, b)) : or(pe, b));
          }
          p.state = pe;
        }
      } else
        s.queue = null;
    }
    function Hs(s, p, E, N) {
      Bs(s, p, E);
      var H = s.state !== void 0 ? s.state : null;
      s.updater = yo, s.props = E, s.state = H;
      var te = {
        queue: [],
        replace: !1
      };
      Hc(s, te);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? s.context = ii(pe) : s.context = N, s.state === E) {
        var Ae = vn(p) || "Component";
        li.has(Ae) || (li.add(Ae), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ae));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (s.state = Is(s, p, o, H, E)), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (Wc(p, s), Vc(te, s, E, N));
    }
    var jc = {
      id: 1,
      overflow: ""
    };
    function Uc(s) {
      var p = s.overflow, E = s.id, N = E & ~Kc(E);
      return N.toString(32) + p;
    }
    function go(s, p, E) {
      var N = s.id, H = s.overflow, te = vo(N) - 1, pe = N & ~(1 << te), Ae = E + 1, o = vo(p) + te;
      if (o > 30) {
        var u = te - te % 5, b = (1 << u) - 1, T = (pe & b).toString(32), M = pe >> u, Z = te - u, fe = vo(p) + Z, Ce = Ae << Z, He = Ce | M, tt = T + H;
        return {
          id: 1 << fe | He,
          overflow: tt
        };
      } else {
        var st = Ae << te, wt = st | pe, fn = H;
        return {
          id: 1 << o | wt,
          overflow: fn
        };
      }
    }
    function vo(s) {
      return 32 - Ll(s);
    }
    function Kc(s) {
      return 1 << vo(s) - 1;
    }
    var Ll = Math.clz32 ? Math.clz32 : Xc, xo = Math.log, Yc = Math.LN2;
    function Xc(s) {
      var p = s >>> 0;
      return p === 0 ? 32 : 31 - (xo(p) / Yc | 0) | 0;
    }
    function Gc(s, p) {
      return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
    }
    var qc = typeof Object.is == "function" ? Object.is : Gc, Cr = null, Pl = null, bo = null, $t = null, na = !1, ra = !1, Qt = 0, lr = null, aa = 0, So = 25, _n = !1, Ar;
    function ia() {
      if (Cr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return _n && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Cr;
    }
    function xr(s, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ar), !1;
      s.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Ar, "[" + s.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var E = 0; E < p.length && E < s.length; E++)
        if (!qc(s[E], p[E]))
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
    function Zc(s, p) {
      Cr = p, Pl = s, _n = !1, Qt = 0;
    }
    function Ws(s, p, E, N) {
      for (; ra; )
        ra = !1, Qt = 0, aa += 1, $t = null, E = s(p, N);
      return Rl(), E;
    }
    function Eo() {
      var s = Qt !== 0;
      return s;
    }
    function Rl() {
      _n = !1, Cr = null, Pl = null, ra = !1, bo = null, aa = 0, lr = null, $t = null;
    }
    function Qc(s) {
      return _n && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ii(s);
    }
    function Vs(s) {
      return Ar = "useContext", ia(), ii(s);
    }
    function si(s, p) {
      return typeof p == "function" ? p(s) : p;
    }
    function Jc(s) {
      return Ar = "useState", js(
        si,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function js(s, p, E) {
      if (s !== si && (Ar = "useReducer"), Cr = ia(), $t = Lr(), na) {
        var N = $t.queue, H = N.dispatch;
        if (lr !== null) {
          var te = lr.get(N);
          if (te !== void 0) {
            lr.delete(N);
            var pe = $t.memoizedState, Ae = te;
            do {
              var o = Ae.action;
              _n = !0, pe = s(pe, o), _n = !1, Ae = Ae.next;
            } while (Ae !== null);
            return $t.memoizedState = pe, [pe, H];
          }
        }
        return [$t.memoizedState, H];
      } else {
        _n = !0;
        var u;
        s === si ? u = typeof p == "function" ? p() : p : u = E !== void 0 ? E(p) : p, _n = !1, $t.memoizedState = u;
        var b = $t.queue = {
          last: null,
          dispatch: null
        }, T = b.dispatch = Ks.bind(null, Cr, b);
        return [$t.memoizedState, T];
      }
    }
    function ko(s, p) {
      Cr = ia(), $t = Lr();
      var E = p === void 0 ? null : p;
      if ($t !== null) {
        var N = $t.memoizedState;
        if (N !== null && E !== null) {
          var H = N[1];
          if (xr(E, H))
            return N[0];
        }
      }
      _n = !0;
      var te = s();
      return _n = !1, $t.memoizedState = [te, E], te;
    }
    function ed(s) {
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
        var N = {
          action: E,
          next: null
        };
        lr === null && (lr = /* @__PURE__ */ new Map());
        var H = lr.get(p);
        if (H === void 0)
          lr.set(p, N);
        else {
          for (var te = H; te.next !== null; )
            te = te.next;
          te.next = N;
        }
      }
    }
    function td(s, p) {
      return ko(function() {
        return s;
      }, p);
    }
    function nd(s, p, E) {
      return ia(), p(s._source);
    }
    function rd(s, p, E) {
      if (E === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return E();
    }
    function ad(s) {
      return ia(), s;
    }
    function id() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function od() {
      return ia(), [!1, id];
    }
    function ld() {
      var s = Pl, p = Uc(s.treeContext), E = Dl;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var N = Qt++;
      return kn(E, p, N);
    }
    function To() {
    }
    var Ys = {
      readContext: Qc,
      useContext: Vs,
      useMemo: ko,
      useReducer: js,
      useRef: ed,
      useState: Jc,
      useInsertionEffect: To,
      useLayoutEffect: Us,
      useCallback: td,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: To,
      // Effects are not run in the server environment.
      useEffect: To,
      // Debugging effect
      useDebugValue: To,
      useDeferredValue: ad,
      useTransition: od,
      useId: ld,
      // Subscriptions are not setup in a server environment.
      useMutableSource: nd,
      useSyncExternalStore: rd
    }, Dl = null;
    function ui(s) {
      Dl = s;
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
              p += Os(E.type, null, null);
              break;
            case 2:
              p += ro(E.type, null, null);
              break;
          }
          E = E.parent;
        } while (E);
        return p;
      } catch (N) {
        return `
Error generating stack: ` + N.message + `
` + N.stack;
      }
    }
    var ci = n.ReactCurrentDispatcher, wo = n.ReactDebugCurrentFrame, Nl = 0, zr = 1, Co = 2, Ao = 3, la = 4, Gs = 0, Ol = 1, sa = 2, sd = 12800;
    function qs(s) {
      return console.error(s), null;
    }
    function br() {
    }
    function ud(s, p, E, N, H, te, pe, Ae, o) {
      var u = [], b = /* @__PURE__ */ new Set(), T = {
        destination: null,
        responseState: p,
        progressiveChunkSize: N === void 0 ? sd : N,
        status: Gs,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: b,
        pingedTasks: u,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: H === void 0 ? qs : H,
        onAllReady: te === void 0 ? br : te,
        onShellReady: pe === void 0 ? br : pe,
        onShellError: Ae === void 0 ? br : Ae,
        onFatalError: o === void 0 ? br : o
      }, M = Lo(
        T,
        0,
        null,
        E,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      M.parentFlushed = !0;
      var Z = _l(T, s, null, M, b, Jr, Fs, jc);
      return u.push(Z), T;
    }
    function cd(s, p) {
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
    function _l(s, p, E, N, H, te, pe, Ae) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return cd(s, o);
        },
        blockedBoundary: E,
        blockedSegment: N,
        abortSet: H,
        legacyContext: te,
        context: pe,
        treeContext: Ae
      };
      return o.componentStack = null, H.add(o), o;
    }
    function Lo(s, p, E, N, H, te) {
      return {
        status: Nl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: N,
        boundary: E,
        lastPushedText: H,
        textEmbedded: te
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
        var N = Pa || fi();
        Pa = null, s.errorMessage = E, s.errorComponentStack = N;
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
      var N = s.onFatalError;
      N(p), s.destination !== null ? (s.status = sa, _(s.destination, p)) : (s.status = Ol, s.fatalError = p);
    }
    function zl(s, p, E) {
      Ir(p, "Suspense");
      var N = p.blockedBoundary, H = p.blockedSegment, te = E.fallback, pe = E.children, Ae = /* @__PURE__ */ new Set(), o = di(s, Ae), u = H.chunks.length, b = Lo(
        s,
        u,
        o,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      H.children.push(b), H.lastPushedText = !1;
      var T = Lo(
        s,
        0,
        null,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      T.parentFlushed = !0, p.blockedBoundary = o, p.blockedSegment = T;
      try {
        if (Kl(s, p, pe), Xn(T.chunks, s.responseState, T.lastPushedText, T.textEmbedded), T.status = zr, Do(o, T), o.pendingTasks === 0) {
          sr(p);
          return;
        }
      } catch (Z) {
        T.status = la, o.forceClientRender = !0, o.errorDigest = ur(s, Z), Ml(o, Z);
      } finally {
        p.blockedBoundary = N, p.blockedSegment = H;
      }
      var M = _l(s, te, N, b, Ae, p.legacyContext, p.context, p.treeContext);
      M.componentStack = p.componentStack, s.pingedTasks.push(M), sr(p);
    }
    function pi(s, p, E, N) {
      Ir(p, E);
      var H = p.blockedSegment, te = Va(H.chunks, E, N, s.responseState, H.formatContext);
      H.lastPushedText = !1;
      var pe = H.formatContext;
      H.formatContext = Zt(pe, E, N), Kl(s, p, te), H.formatContext = pe, Bi(H.chunks, E), H.lastPushedText = !1, sr(p);
    }
    function Po(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function Zs(s, p, E, N, H) {
      var te = {};
      Zc(p, te);
      var pe = E(N, H);
      return Ws(E, N, pe, H);
    }
    function Qs(s, p, E, N, H) {
      var te = E.render();
      E.props !== H && (mi || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vn(N) || "a component"), mi = !0);
      {
        var pe = N.childContextTypes;
        if (pe != null) {
          var Ae = p.legacyContext, o = kl(E, N, Ae, pe);
          p.legacyContext = o, nr(s, p, te), p.legacyContext = Ae;
          return;
        }
      }
      nr(s, p, te);
    }
    function dd(s, p, E, N) {
      Fl(p, E);
      var H = El(E, p.legacyContext), te = $s(E, N, H);
      Hs(te, E, N, H), Qs(s, p, te, E, N), sr(p);
    }
    var Il = {}, hi = {}, Js = {}, $l = {}, mi = !1, Bl = !1, Hl = !1, Wl = !1;
    function eu(s, p, E, N) {
      var H;
      if (H = El(E, p.legacyContext), Sr(p, E), E.prototype && typeof E.prototype.render == "function") {
        var te = vn(E) || "Unknown";
        Il[te] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", te, te), Il[te] = !0);
      }
      var pe = Zs(s, p, E, N, H), Ae = Eo();
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
          var u = vn(E) || "Unknown";
          hi[u] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", u, u, u), hi[u] = !0);
        }
        Hs(pe, E, N, H), Qs(s, p, pe, E, N);
      } else if (tu(E), Ae) {
        var b = p.treeContext, T = 1, M = 0;
        p.treeContext = go(b, T, M);
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
        var E = or({}, p), N = s.defaultProps;
        for (var H in N)
          E[H] === void 0 && (E[H] = N[H]);
        return E;
      }
      return p;
    }
    function fd(s, p, E, N, H) {
      Sr(p, E.render);
      var te = Zs(s, p, E.render, N, H), pe = Eo();
      if (pe) {
        var Ae = p.treeContext, o = 1, u = 0;
        p.treeContext = go(Ae, o, u);
        try {
          nr(s, p, te);
        } finally {
          p.treeContext = Ae;
        }
      } else
        nr(s, p, te);
      sr(p);
    }
    function pd(s, p, E, N, H) {
      var te = E.type, pe = Vl(te, N);
      jl(s, p, te, pe, H);
    }
    function nu(s, p, E, N) {
      E._context === void 0 ? E !== E.Consumer && (Wl || (Wl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var H = N.children;
      typeof H != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var te = ii(E), pe = H(te);
      nr(s, p, pe);
    }
    function hd(s, p, E, N) {
      var H = E._context, te = N.value, pe = N.children, Ae;
      Ae = p.context, p.context = Ms(H, te), nr(s, p, pe), p.context = zs(H), Ae !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function md(s, p, E, N, H) {
      Ir(p, "Lazy");
      var te = E._payload, pe = E._init, Ae = pe(te), o = Vl(Ae, N);
      jl(s, p, Ae, o, H), sr(p);
    }
    function jl(s, p, E, N, H) {
      if (typeof E == "function")
        if (Po(E)) {
          dd(s, p, E, N);
          return;
        } else {
          eu(s, p, E, N);
          return;
        }
      if (typeof E == "string") {
        pi(s, p, E, N);
        return;
      }
      switch (E) {
        case to:
        case cl:
        case As:
        case sl:
        case tr: {
          nr(s, p, N.children);
          return;
        }
        case qa: {
          Ir(p, "SuspenseList"), nr(s, p, N.children), sr(p);
          return;
        }
        case ul:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ga: {
          zl(s, p, N);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case eo: {
            fd(s, p, E, N, H);
            return;
          }
          case Za: {
            pd(s, p, E, N, H);
            return;
          }
          case Qi: {
            hd(s, p, E, N);
            return;
          }
          case Ji: {
            nu(s, p, E, N);
            return;
          }
          case Ea: {
            md(s, p, E, N);
            return;
          }
        }
      var te = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + te));
    }
    function yd(s, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Bl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Bl = !0), s.entries === p && (Hl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hl = !0);
    }
    function nr(s, p, E) {
      try {
        return Ul(s, p, E);
      } catch (N) {
        throw typeof N == "object" && N !== null && typeof N.then == "function" || (Pa = Pa !== null ? Pa : fi()), N;
      }
    }
    function Ul(s, p, E) {
      if (p.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case zc: {
            var N = E, H = N.type, te = N.props, pe = N.ref;
            jl(s, p, H, te, pe);
            return;
          }
          case Cs:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ea: {
            var Ae = E, o = Ae._payload, u = Ae._init, b;
            try {
              b = u(o);
            } catch (st) {
              throw typeof st == "object" && st !== null && typeof st.then == "function" && Ir(p, "Lazy"), st;
            }
            nr(s, p, b);
            return;
          }
        }
        if ($(E)) {
          ru(s, p, E);
          return;
        }
        var T = Bc(E);
        if (T) {
          yd(E, T);
          var M = T.call(E);
          if (M) {
            var Z = M.next();
            if (!Z.done) {
              var fe = [];
              do
                fe.push(Z.value), Z = M.next();
              while (!Z.done);
              ru(s, p, fe);
              return;
            }
            return;
          }
        }
        var Ce = Object.prototype.toString.call(E);
        throw new Error("Objects are not valid as a React child (found: " + (Ce === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Ce) + "). If you meant to render a collection of children, use an array instead.");
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
      for (var N = E.length, H = 0; H < N; H++) {
        var te = p.treeContext;
        p.treeContext = go(te, N, H);
        try {
          Kl(s, p, E[H]);
        } finally {
          p.treeContext = te;
        }
      }
    }
    function rr(s, p, E) {
      var N = p.blockedSegment, H = N.chunks.length, te = Lo(
        s,
        H,
        null,
        N.formatContext,
        // Adopt the parent segment's leading text embed
        N.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      N.children.push(te), N.lastPushedText = !1;
      var pe = _l(s, p.node, p.blockedBoundary, te, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var Ae = pe.ping;
      E.then(Ae, Ae);
    }
    function Kl(s, p, E) {
      var N = p.blockedSegment.formatContext, H = p.legacyContext, te = p.context, pe = null;
      pe = p.componentStack;
      try {
        return nr(s, p, E);
      } catch (Ae) {
        if (Rl(), typeof Ae == "object" && Ae !== null && typeof Ae.then == "function") {
          rr(s, p, Ae), p.blockedSegment.formatContext = N, p.legacyContext = H, p.context = te, ai(te), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = N, p.legacyContext = H, p.context = te, ai(te), p.componentStack = pe, Ae;
      }
    }
    function au(s, p, E, N) {
      var H = ur(s, N);
      if (p === null ? $r(s, N) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = H, Ml(p, N), p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var te = s.onAllReady;
        te();
      }
    }
    function gd(s) {
      var p = this, E = s.blockedBoundary, N = s.blockedSegment;
      N.status = Ao, iu(p, E, N);
    }
    function Ro(s, p, E) {
      var N = s.blockedBoundary, H = s.blockedSegment;
      if (H.status = Ao, N === null)
        p.allPendingTasks--, p.status !== sa && (p.status = sa, p.destination !== null && k(p.destination));
      else {
        if (N.pendingTasks--, !N.forceClientRender) {
          N.forceClientRender = !0;
          var te = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          N.errorDigest = p.onError(te);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            te && typeof te.message == "string" ? te = pe + te.message : te = pe + String(te);
            var Ae = Pr;
            Pr = s;
            try {
              Ml(N, te);
            } finally {
              Pr = Ae;
            }
          }
          N.parentFlushed && p.clientRenderedBoundaries.push(N);
        }
        if (N.fallbackAbortableTasks.forEach(function(u) {
          return Ro(u, p, E);
        }), N.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var o = p.onAllReady;
          o();
        }
      }
    }
    function Do(s, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var E = p.children[0];
        E.id = p.id, E.parentFlushed = !0, E.status === zr && Do(s, E);
      } else {
        var N = s.completedSegments;
        N.push(p);
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
          var N = s.onShellReady;
          N();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          E.parentFlushed && E.status === zr && Do(p, E), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(gd, s), p.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === zr) {
          Do(p, E);
          var H = p.completedSegments;
          H.length === 1 && p.parentFlushed && s.partialBoundaries.push(p);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var te = s.onAllReady;
        te();
      }
    }
    function ou(s, p) {
      var E = p.blockedSegment;
      if (E.status === Nl) {
        ai(p.context);
        var N = null;
        N = Pr, Pr = p;
        try {
          nr(s, p, p.node), Xn(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), p.abortSet.delete(p), E.status = zr, iu(s, p.blockedBoundary, E);
        } catch (te) {
          if (Rl(), typeof te == "object" && te !== null && typeof te.then == "function") {
            var H = p.ping;
            te.then(H, H);
          } else
            p.abortSet.delete(p), E.status = la, au(s, p.blockedBoundary, E, te);
        } finally {
          Pr = N;
        }
      }
    }
    function yi(s) {
      if (s.status !== sa) {
        var p = lo(), E = ci.current;
        ci.current = Ys;
        var N;
        N = wo.getCurrentStack, wo.getCurrentStack = fi;
        var H = Dl;
        ui(s.responseState);
        try {
          var te = s.pingedTasks, pe;
          for (pe = 0; pe < te.length; pe++) {
            var Ae = te[pe];
            ou(s, Ae);
          }
          te.splice(0, pe), s.destination !== null && Oo(s, s.destination);
        } catch (o) {
          ur(s, o), $r(s, o);
        } finally {
          ui(H), ci.current = E, wo.getCurrentStack = N, E === Ys && ai(p);
        }
      }
    }
    function gi(s, p, E) {
      switch (E.parentFlushed = !0, E.status) {
        case Nl: {
          var N = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, pa(p, s.responseState, N);
        }
        case zr: {
          E.status = Co;
          for (var H = !0, te = E.chunks, pe = 0, Ae = E.children, o = 0; o < Ae.length; o++) {
            for (var u = Ae[o]; pe < u.index; pe++)
              v(p, te[pe]);
            H = No(s, p, u);
          }
          for (; pe < te.length - 1; pe++)
            v(p, te[pe]);
          return pe < te.length && (H = S(p, te[pe])), H;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function No(s, p, E) {
      var N = E.boundary;
      if (N === null)
        return gi(s, p, E);
      if (N.parentFlushed = !0, N.forceClientRender)
        return jn(p, s.responseState, N.errorDigest, N.errorMessage, N.errorComponentStack), gi(s, p, E), rl(p, s.responseState);
      if (N.pendingTasks > 0) {
        N.rootSegmentID = s.nextSegmentId++, N.completedSegments.length > 0 && s.partialBoundaries.push(N);
        var H = N.id = un(s.responseState);
        return ya(p, s.responseState, H), gi(s, p, E), ga(p, s.responseState);
      } else {
        if (N.byteSize > s.progressiveChunkSize)
          return N.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(N), ya(p, s.responseState, N.id), gi(s, p, E), ga(p, s.responseState);
        Wi(p, s.responseState);
        var te = N.completedSegments;
        if (te.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = te[0];
        return No(s, p, pe), Vi(p, s.responseState);
      }
    }
    function lu(s, p, E) {
      return Ts(p, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function vi(s, p, E) {
      return Pt(p, s.responseState, E.formatContext, E.id), No(s, p, E), rn(p, E.formatContext);
    }
    function xi(s, p, E) {
      for (var N = E.completedSegments, H = 0; H < N.length; H++) {
        var te = N[H];
        Yl(s, p, E, te);
      }
      return N.length = 0, al(p, s.responseState, E.id, E.rootSegmentID);
    }
    function vd(s, p, E) {
      for (var N = E.completedSegments, H = 0; H < N.length; H++) {
        var te = N[H];
        if (!Yl(s, p, E, te))
          return H++, N.splice(0, H), !1;
      }
      return N.splice(0, H), !0;
    }
    function Yl(s, p, E, N) {
      if (N.status === Co)
        return !0;
      var H = N.id;
      if (H === -1) {
        var te = N.id = E.rootSegmentID;
        if (te === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return vi(s, p, N);
      } else
        return vi(s, p, N), Pc(p, s.responseState, H);
    }
    function Oo(s, p) {
      y();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (No(s, p, E), s.completedRootSegment = null, el(p, s.responseState));
        var N = s.clientRenderedBoundaries, H;
        for (H = 0; H < N.length; H++) {
          var te = N[H];
          lu(s, p, te);
        }
        N.splice(0, H);
        var pe = s.completedBoundaries;
        for (H = 0; H < pe.length; H++) {
          var Ae = pe[H];
          xi(s, p, Ae);
        }
        pe.splice(0, H), R(p), y(p);
        var o = s.partialBoundaries;
        for (H = 0; H < o.length; H++) {
          var u = o[H];
          if (!vd(s, p, u)) {
            s.destination = null, H++, o.splice(0, H);
            return;
          }
        }
        o.splice(0, H);
        var b = s.completedBoundaries;
        for (H = 0; H < b.length; H++) {
          var T = b[H];
          xi(s, p, T);
        }
        b.splice(0, H);
      } finally {
        R(p), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(p));
      }
    }
    function xd(s) {
      f(function() {
        return yi(s);
      });
    }
    function su(s, p) {
      if (s.status === Ol) {
        s.status = sa, _(p, s.fatalError);
        return;
      }
      if (s.status !== sa && s.destination === null) {
        s.destination = p;
        try {
          Oo(s, p);
        } catch (E) {
          ur(s, E), $r(s, E);
        }
      }
    }
    function _o(s, p) {
      try {
        var E = s.abortableTasks;
        E.forEach(function(N) {
          return Ro(N, s, p);
        }), E.clear(), s.destination !== null && Oo(s, s.destination);
      } catch (N) {
        ur(s, N), $r(s, N);
      }
    }
    function bd(s, p) {
      return new Promise(function(E, N) {
        var H, te, pe = new Promise(function(M, Z) {
          te = M, H = Z;
        });
        function Ae() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(Z) {
                su(u, Z);
              },
              cancel: function(Z) {
                _o(u);
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
          }), N(M);
        }
        var u = ud(s, Kt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), nn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, te, Ae, o, H);
        if (p && p.signal) {
          var b = p.signal, T = function() {
            _o(u, b.reason), b.removeEventListener("abort", T);
          };
          b.addEventListener("abort", T);
        }
        xd(u);
      });
    }
    Cu.renderToReadableStream = bd, Cu.version = t;
  }()), Cu;
}
var Fi, xf;
process.env.NODE_ENV === "production" ? (Fi = $S(), xf = BS()) : (Fi = HS(), xf = WS());
$a.version = Fi.version;
$a.renderToString = Fi.renderToString;
$a.renderToStaticMarkup = Fi.renderToStaticMarkup;
$a.renderToNodeStream = Fi.renderToNodeStream;
$a.renderToStaticNodeStream = Fi.renderToStaticNodeStream;
$a.renderToReadableStream = xf.renderToReadableStream;
const VS = ({ width: e, height: t, runtime: n }) => {
  var ye, Pe;
  const { config: i } = de.useContext(Ct), { sankey: a } = i, l = (oe) => oe.visualizationType === "Sankey", [f, d] = de.useState(0), c = de.useRef([]), [h, y] = de.useState(""), v = (oe) => {
    y(oe);
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
    let oe = 0;
    (Ie = c == null ? void 0 : c.current) == null || Ie.map((Ee) => {
      const he = Ee == null ? void 0 : Ee.getBoundingClientRect().width;
      he > oe && (oe = he);
    }), d(oe);
  }, [c, a, window.innerWidth]), !l(i))
    return;
  const w = i == null ? void 0 : i.data[0], m = Array.from(new Set((ye = w == null ? void 0 : w.links) == null ? void 0 : ye.flatMap((oe) => [oe.source, oe.target]))), _ = {
    nodes: m.map((oe) => ({ id: oe })),
    links: (Pe = w == null ? void 0 : w.links) == null ? void 0 : Pe.map((oe) => ({
      source: m.findIndex((Ie) => Ie === oe.source),
      target: m.findIndex((Ie) => Ie === oe.target),
      value: oe.value
    }))
  };
  let D = 5;
  const P = 50, O = FS().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(RS).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - D - f, i.heights.vertical - P]
  ]), { nodes: L, links: U } = O(_), V = (oe) => {
    var J;
    let Ie = 30, Ee = 0, he = "node-value--storynode", Te = !0;
    return (J = w == null ? void 0 : w.storyNodeText) != null && J.every((Me) => Me.StoryNode !== oe) && (Te = !1, Ee = 10, Ie = 8, he = "node-value"), { textPositionHorizontal: Ie, textPositionVertical: Ee, classStyle: he, storyNodes: Te };
  }, q = (oe) => {
    const Ie = _.nodes.find((Te) => Te.id === oe), Ee = [], he = [];
    return Ie && (U.forEach((Te) => {
      const J = Te.target, Me = Te.source;
      J.id === oe && Ee.push(Me.id);
    }), Ee.forEach((Te) => {
      U.forEach((J) => {
        const Me = J.target, we = J.source;
        Me.id === h && we.id === Te && he.push(J);
      });
    })), { sourceNodes: Ee, activeLinks: he };
  }, ce = `${((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).value}`, ee = `${((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).summary}`, j = ((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).column1Label, Y = ((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).column2Label, W = ((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).column1, B = ((w == null ? void 0 : w.tooltips.find((oe) => oe.node === h)) || {}).column2, ie = ({ columnData: oe }) => /* @__PURE__ */ r.createElement("ul", null, oe == null ? void 0 : oe.map((Ie, Ee) => /* @__PURE__ */ r.createElement("li", { key: Ee }, Ie.label, ": ", Ie.value, " (", Ie.additional_info, "%)"))), ae = $a.renderToString(/* @__PURE__ */ r.createElement(ie, { columnData: W })), se = $a.renderToString(/* @__PURE__ */ r.createElement(ie, { columnData: B })), Q = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${h}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${ce}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${ee}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${j}<strong></span>
                          ${ae}
                        </div>
                        <div>
                          <span><strong>${Y}<strong></span>
                          ${se}
                        </div>
                      </div>
                    </div>`, K = _.nodes.map((oe, Ie) => {
    var Ze, et;
    let { textPositionHorizontal: Ee, textPositionVertical: he, classStyle: Te, storyNodes: J } = V(oe.id), { sourceNodes: Me } = q(h), we = a.opacity.nodeOpacityDefault, Xe = a.nodeColor.default;
    return h !== oe.id && h !== "" && !Me.includes(oe.id) && (Xe = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ie }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: O.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Xe,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => v(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), J ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        x: oe.x0 + Ee,
        textAnchor: _.nodes.length - 1 === Ie ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.id),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((Ze = w == null ? void 0 : w.storyNodeText) == null ? void 0 : Ze.find((Ue) => Ue.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(
      kt,
      {
        verticalAnchor: "end",
        className: Te,
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0 + 25) / 2,
        fill: a.storyNodeFontColor || a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.id),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value
    ), /* @__PURE__ */ r.createElement(
      kt,
      {
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: _.nodes.length === Ie ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.id),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((et = w == null ? void 0 : w.storyNodeText) == null ? void 0 : et.find((Ue) => Ue.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.id),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0) / 2 + he,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      oe.id
    ), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.id),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      /* @__PURE__ */ r.createElement("tspan", { className: Te }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  }), ne = U.map((oe, Ie) => {
    const he = IS()(oe);
    let Te = a.opacity.LinkOpacityDefault, J = a.linkColor.default, { activeLinks: Me } = q(h);
    return !Me.includes(oe) && h !== "" && (J = a.linkColor.inactive, Te = a.opacity.LinkOpacityInactive), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: Ie,
        d: he,
        stroke: J,
        fill: "none",
        strokeOpacity: Te,
        strokeWidth: oe.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => v(oe.target.id || null),
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      }
    );
  }), ue = _.nodes.reduce((oe, Ie) => Math.max(oe, Ie.depth), -1), be = _.nodes.filter((oe) => oe.depth === ue).map((oe, Ie) => {
    var Ze, et;
    let { textPositionHorizontal: Ee, textPositionVertical: he, classStyle: Te, storyNodes: J } = V(oe.id), { sourceNodes: Me } = q(h), we = a.opacity.nodeOpacityDefault, Xe = a.nodeColor.default;
    return h !== oe.id && h !== "" && !Me.includes(oe.id) && (Xe = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ie, innerRef: (Ue) => c.current[Ie] = Ue }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: O.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Xe,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": w.tooltips && i.enableTooltips ? Q : null,
        "data-tooltip-id": "tooltip",
        onClick: () => v(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), J ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      kt,
      {
        x: oe.x0 + Ee,
        textAnchor: _.nodes.length - 1 === Ie ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ze = w == null ? void 0 : w.storyNodeText) == null ? void 0 : Ze.find((Ue) => Ue.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(kt, { verticalAnchor: "end", className: Te, x: oe.x0 + Ee, y: (oe.y1 + oe.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value), /* @__PURE__ */ r.createElement(
      kt,
      {
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: _.nodes.length === Ie ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((et = w == null ? void 0 : w.storyNodeText) == null ? void 0 : et.find((Ue) => Ue.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("text", { x: oe.x0 + Ee, y: (oe.y1 + oe.y0) / 2 + he, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ r.createElement("tspan", { id: oe.id, className: "node-id" }, oe.id)), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: oe.x0 + Ee,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ r.createElement("tspan", { onClick: () => v(oe.id), className: Te }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ r.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(i.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ r.createElement(at, { className: "links" }, ne), /* @__PURE__ */ r.createElement(at, { className: "nodes" }, K), /* @__PURE__ */ r.createElement(at, { className: "finalNodes", style: { display: "none" } }, be)), /* @__PURE__ */ r.createElement(Sy, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => S(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), R && /* @__PURE__ */ r.createElement("div", { className: "popup" }, /* @__PURE__ */ r.createElement("div", { className: "popup-content" }, /* @__PURE__ */ r.createElement("button", { className: "visually-hidden", onClick: F }, "Select for accessible version."), /* @__PURE__ */ r.createElement("p", null, /* @__PURE__ */ r.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var jS = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = jS;
function US(e) {
  var t = e.labelOffset, n = e.labelProps, i = e.orientation, a = e.range, l = e.tickLabelFontSize, f = e.tickLength, d = i === ir.left || i === ir.top ? -1 : 1, c, h, y;
  if (i === ir.top || i === ir.bottom) {
    var v = i === ir.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    c = (Number(a[0]) + Number(a[a.length - 1])) / 2, h = d * (f + t + l + v);
  } else
    c = d * ((Number(a[0]) + Number(a[a.length - 1])) / 2), h = -(f + t), y = "rotate(" + d * 90 + ")";
  return {
    x: c,
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
  var t = e.hideTicks, n = e.horizontal, i = e.orientation, a = e.tickClassName, l = e.tickComponent, f = e.tickLabelProps, d = e.tickStroke, c = d === void 0 ? "#222" : d, h = e.tickTransform, y = e.ticks, v = e.strokeWidth, S = e.tickLineProps;
  return y.map(function(R) {
    var k, F = R.value, w = R.index, m = R.from, _ = R.to, D = R.formattedValue, P = (k = f[w]) != null ? k : {}, O = Math.max(10, typeof P.fontSize == "number" && P.fontSize || 0), L = _.y + (n && i !== ir.top ? O : 0);
    return /* @__PURE__ */ r.createElement(at, {
      key: "visx-tick-" + F + "-" + w,
      className: Ln("visx-axis-tick", a),
      transform: h
    }, !t && /* @__PURE__ */ r.createElement(an, cs({
      from: m,
      to: _,
      stroke: c,
      strokeWidth: v,
      strokeLinecap: "square"
    }, S)), l ? l(cs({}, P, {
      x: _.x,
      y: L,
      formattedValue: D
    })) : /* @__PURE__ */ r.createElement(kt, cs({
      x: _.x,
      y: L
    }, P), D));
  });
}
function sc() {
  return sc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, sc.apply(this, arguments);
}
var Rh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function YS(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, i = e.axisToPoint, a = e.hideAxisLine, l = e.hideTicks, f = e.horizontal, d = e.label, c = d === void 0 ? "" : d, h = e.labelClassName, y = e.labelOffset, v = y === void 0 ? 14 : y, S = e.labelProps, R = S === void 0 ? Rh : S, k = e.orientation, F = k === void 0 ? ir.bottom : k, w = e.scale, m = e.stroke, _ = m === void 0 ? "#222" : m, D = e.strokeDasharray, P = e.strokeWidth, O = P === void 0 ? 1 : P, L = e.tickClassName, U = e.tickComponent, V = e.tickLineProps, q = e.tickLabelProps, ce = e.tickLength, ee = ce === void 0 ? 8 : ce, j = e.tickStroke, Y = j === void 0 ? "#222" : j, W = e.tickTransform, B = e.ticks, ie = e.ticksComponent, ae = ie === void 0 ? KS : ie, se = sc({}, Rh, typeof q == "object" ? q : null), Q = B.map(function(ne) {
    var ue = ne.value, ze = ne.index;
    return typeof q == "function" ? q(ue, ze, B) : se;
  }), K = Math.max.apply(Math, [10].concat(Q.map(function(ne) {
    return typeof ne.fontSize == "number" ? ne.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, ae({
    hideTicks: l,
    horizontal: f,
    orientation: F,
    scale: w,
    tickClassName: L,
    tickComponent: U,
    tickLabelProps: Q,
    tickStroke: Y,
    tickTransform: W,
    ticks: B,
    strokeWidth: O,
    tickLineProps: V
  }), !a && /* @__PURE__ */ r.createElement(an, {
    className: Ln("visx-axis-line", n),
    from: t,
    to: i,
    stroke: _,
    strokeWidth: O,
    strokeDasharray: D
  }), c && /* @__PURE__ */ r.createElement(kt, sc({
    className: Ln("visx-axis-label", h)
  }, US({
    labelOffset: v,
    labelProps: R,
    orientation: F,
    range: w.range(),
    tickLabelFontSize: K,
    tickLength: ee
  }), R), c));
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
function GS(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Wg;
}
function Au(e, t) {
  var n = e.x, i = e.y;
  return new ff(t ? {
    x: n,
    y: i
  } : {
    x: i,
    y: n
  });
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, bf.apply(this, arguments);
}
var Hd = 0;
function qS(e) {
  return e === void 0 && (e = Hd), typeof e == "number" ? {
    start: e,
    end: e
  } : bf({
    start: Hd,
    end: Hd
  }, e);
}
var ZS = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
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
function QS(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function kc(e) {
  var t = e.children, n = t === void 0 ? YS : t, i = e.axisClassName, a = e.hideAxisLine, l = a === void 0 ? !1 : a, f = e.hideTicks, d = f === void 0 ? !1 : f, c = e.hideZero, h = c === void 0 ? !1 : c, y = e.innerRef, v = e.left, S = v === void 0 ? 0 : v, R = e.numTicks, k = R === void 0 ? 10 : R, F = e.orientation, w = F === void 0 ? ir.bottom : F, m = e.rangePadding, _ = m === void 0 ? 0 : m, D = e.scale, P = e.tickFormat, O = e.tickLength, L = O === void 0 ? 8 : O, U = e.tickValues, V = e.top, q = V === void 0 ? 0 : V, ce = QS(e, ZS), ee = P ?? GS(D), j = w === ir.left, Y = w === ir.top, W = Y || w === ir.bottom, B = XS(D), ie = j || Y ? -1 : 1, ae = D.range(), se = qS(_), Q = Au({
    x: Number(ae[0]) + 0.5 - se.start,
    y: 0
  }, W), K = Au({
    x: Number(ae[ae.length - 1]) + 0.5 + se.end,
    y: 0
  }, W), ne = (U ?? Hg(D, k)).filter(function(ze) {
    return !h || ze !== 0 && ze !== "0";
  }).map(function(ze, be) {
    return {
      value: ze,
      index: be
    };
  }), ue = ne.map(function(ze) {
    var be = ze.value, ye = ze.index, Pe = Bg(B(be));
    return {
      value: be,
      index: ye,
      from: Au({
        x: Pe,
        y: 0
      }, W),
      to: Au({
        x: Pe,
        y: L * ie
      }, W),
      formattedValue: ee(be, ye, ne)
    };
  });
  return /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-axis", i),
    innerRef: y,
    top: q,
    left: S
  }, n(Sf({}, ce, {
    axisFromPoint: Q,
    axisToPoint: K,
    hideAxisLine: l,
    hideTicks: d,
    hideZero: h,
    horizontal: W,
    numTicks: k,
    orientation: w,
    rangePadding: _,
    scale: D,
    tickFormat: ee,
    tickLength: L,
    tickPosition: B,
    tickSign: ie,
    ticks: ue
  })));
}
var JS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 36 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = eE(e, JS), c = typeof f == "function" ? f : uc({}, tE, f);
  return /* @__PURE__ */ r.createElement(kc, uc({
    axisClassName: Ln("visx-axis-left", t),
    labelOffset: i,
    orientation: ir.left,
    tickLabelProps: c,
    tickLength: l
  }, d));
}
var rE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 36 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = aE(e, rE), c = typeof f == "function" ? f : cc({}, iE, f);
  return /* @__PURE__ */ r.createElement(kc, cc({
    axisClassName: Ln("visx-axis-right", t),
    labelOffset: i,
    orientation: ir.right,
    tickLabelProps: c,
    tickLength: l
  }, d));
}
var lE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 8 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = sE(e, lE), c = typeof f == "function" ? f : dc({}, uE, f);
  return /* @__PURE__ */ r.createElement(kc, dc({
    axisClassName: Ln("visx-axis-top", t),
    labelOffset: i,
    orientation: ir.top,
    tickLabelProps: c,
    tickLength: l
  }, d));
}
var dE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function _u(e) {
  var t = e.axisClassName, n = e.labelOffset, i = n === void 0 ? 8 : n, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, d = fE(e, dE), c = typeof f == "function" ? f : fc({}, pE, f);
  return /* @__PURE__ */ r.createElement(kc, fc({
    axisClassName: Ln("visx-axis-bottom", t),
    labelOffset: i,
    orientation: ir.bottom,
    tickLabelProps: c,
    tickLength: l
  }, d));
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Rb,
  curveBasisClosed: Db,
  curveBasisOpen: Nb,
  curveBundle: Ob,
  curveCardinal: _b,
  curveCardinalClosed: Fb,
  curveCardinalOpen: Mb,
  curveCatmullRom: zb,
  curveCatmullRomClosed: Ib,
  curveCatmullRomOpen: $b,
  curveLinear: gc,
  curveLinearClosed: Qd,
  curveMonotoneX: Ou,
  curveMonotoneY: Bb,
  curveNatural: Hb,
  curveStep: Wb,
  curveStepAfter: jb,
  curveStepBefore: Vb
}, Symbol.toStringTag, { value: "Module" })), hE = (e) => {
  var L, U;
  const { xScale: t, yScale: n, yMax: i, xMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, isDebug: d, children: c } = e;
  let { transformedData: h, config: y, handleLineType: v, parseDate: S, formatDate: R, formatNumber: k, seriesHighlight: F, colorScale: w, rawData: m, brushConfig: _ } = de.useContext(Ct);
  const D = (L = y.brush) != null && L.active && ((U = _.data) != null && U.length) ? _.data : h;
  if (!D)
    return;
  const P = (V) => (Cn(y.xAxis) ? t(S(V[y.xAxis.dataKey], !1)) : t(V[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), O = (V, q, ce = void 0) => n(V[ce.dataKey]);
  return D && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Or, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((V, q) => {
    let ce = D.map((W) => ({
      [y.xAxis.dataKey]: W[y.xAxis.dataKey],
      [V.dataKey]: W[V.dataKey]
    })), ee = ds[V.lineType], j = y.legend.behavior === "highlight" && F.length > 0 && F.indexOf(V.dataKey) === -1, Y = y.legend.behavior === "highlight" || F.length === 0 || F.indexOf(V.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: q }, /* @__PURE__ */ r.createElement(
      Kr,
      {
        data: ce,
        x: (W) => P(W),
        y: (W) => O(W, q, V),
        stroke: Y ? w ? w(y.runtime.seriesLabels ? y.runtime.seriesLabels[V.dataKey] : V.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: ee,
        strokeDasharray: V.type ? v(V.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      y0,
      {
        key: "area-chart",
        fill: Y ? w ? w(y.runtime.seriesLabels ? y.runtime.seriesLabels[V.dataKey] : V.dataKey) : "#000" : "transparent",
        fillOpacity: j ? 0.25 : 0.5,
        data: ce,
        x: (W) => P(W),
        y: (W) => O(W, q, V),
        yScale: n,
        curve: ee,
        strokeDasharray: V.type ? v(V.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(kr, { width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (V) => l(V, m), onMouseLeave: f }))));
}, mE = de.memo(hE), yE = ({ xScale: e, yScale: t, yMax: n, xMax: i, handleTooltipMouseOver: a, handleTooltipMouseOff: l, isDebug: f }) => {
  var F, w;
  let { transformedData: d, config: c, seriesHighlight: h, colorScale: y, rawData: v } = de.useContext(Ct);
  const S = (F = c.brush) != null && F.active && ((w = c.brush.data) != null && w.length) ? c.brush.data : d;
  if (!S)
    return;
  const R = (m) => {
    if (c.xAxis.type === "categorical")
      return e(m);
    if (Cn(c.xAxis)) {
      let _ = new Date(m);
      return e(_);
    }
  }, k = 2;
  return S && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Or, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + k / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    E0,
    {
      data: S,
      keys: c.runtime.areaSeriesKeys.map((m) => m.dataKey) || c.series.map((m) => m.dataKey),
      x0: (m) => R(m.data[c.xAxis.dataKey]),
      y0: (m) => Number(t(m[0])),
      y1: (m) => Number(t(m[1])),
      curve: ds[$u[c.stackedAreaChartLineType]]
    },
    ({ stacks: m, path: _ }) => m.map((D, P) => {
      let O = c.legend.behavior === "highlight" && h.length > 0 && h.indexOf(D.key) === -1, L = c.legend.behavior === "highlight" || h.length === 0 || h.indexOf(D.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: D.key,
            d: _(D) || "",
            strokeWidth: 2,
            stroke: L ? y ? y(c.runtime.seriesLabels ? c.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent",
            fillOpacity: O ? 0.2 : 1,
            fill: L ? y ? y(c.runtime.seriesLabels ? c.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(kr, { width: Number(i), height: Number(n), fill: "transparent", onMouseMove: (m) => a(m, v), onMouseLeave: l }))));
}, gE = de.memo(yE), Tc = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: i, parseDate: a, formatDate: l, setSeriesHighlight: f, seriesHighlight: d } = de.useContext(Ct), { orientation: c } = e, [h, y] = de.useState(null), v = c === "horizontal", S = 1, R = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, F = e.yAxis.labelPlacement === "Below Bar", w = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", _ = e.barStyle === "rounded", D = e.visualizationSubType === "stacked", P = e.tipRounding, O = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", L = e.runtime.seriesKeys.length, U = { small: 16, medium: 18, large: 20 }, V = Object.keys(e.runtime.seriesLabels).length > 1, ce = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (d != null && d.length) ? d : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return de.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && i({
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
    e.barStyle === "lollipop" && !e.isLollipopChart && i({ ...e, isLollipopChart: !0 }), (_ || e.barStyle === "flat") && i({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: v,
    barBorderWidth: S,
    lollipopBarWidth: R,
    lollipopShapeSize: k,
    isLabelBelowBar: F,
    displayNumbersOnBar: w,
    shouldSuppress: (K) => {
      var ne;
      return (ne = e.preliminaryData) == null ? void 0 : ne.some((ue) => {
        const ze = ue.column ? ue.column === K.key : !0, be = String(K.value) === String(ue.value) && ue.value !== "";
        return ze && be && ue.symbol && ue.type === "suppression";
      });
    },
    section: m,
    isRounded: _,
    isStacked: D,
    tipRounding: P,
    radius: O,
    stackCount: L,
    barStackedSeriesKeys: ce,
    fontSize: U,
    hasMultipleSeries: V,
    applyRadius: (K) => {
      if (K == null || !_)
        return {};
      let ne = {};
      return (D && K + 1 === L || !D) && (ne = v ? { borderRadius: `0 ${O}  ${O}  0` } : { borderRadius: `${O} ${O} 0 0` }), !D && K === -1 && (ne = v ? { borderRadius: `${O} 0  0 ${O} ` } : { borderRadius: ` 0  0 ${O} ${O}` }), P === "full" && D && K === 0 && L > 1 && (ne = v ? { borderRadius: `${O} 0 0 ${O}` } : { borderRadius: `0 0 ${O} ${O}` }), P === "full" && (D && K === 0 && L === 1 || !D) && (ne = { borderRadius: O }), ne;
    },
    updateBars: (K) => {
      if (e.visualizationType !== "Bar" && !v)
        return K;
      const ne = [...K];
      let ue;
      const ze = {
        stacked: e.barHeight,
        lollipop: R
      };
      D ? ue = ze.stacked : ue = ze[e.isLollipopChart ? "lollipop" : "stacked"] * L;
      const be = F ? U[e.fontSize] * 1.2 : 0;
      let ye = Number(e.barSpace), Pe = ne.length * (ue + be + ye);
      return v && (e.heights.horizontal = Pe), ne.map((oe, Ie) => {
        let Ee = 0;
        return oe.index !== 0 && (Ee = (ue + ye + be) * Ie), { ...oe, y: Ee, height: ue };
      });
    },
    assignColorsToValues: (K, ne, ue) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ue;
      const ze = e.customColors ?? t[e.palette], be = n.map((Ie) => Ie[e.legend.colorCode]);
      let ye = /* @__PURE__ */ new Map(), Pe = [];
      for (let Ie = 0; Ie < be.length; Ie++)
        ye.has(be[Ie]) || ye.set(be[Ie], ze[ye.size % ze.length]), Pe.push(ye.get(be[Ie]));
      for (; Pe.length < K; )
        Pe = Pe.concat(Pe);
      return Pe[ne];
    },
    getHighlightedBarColorByValue: (K) => {
      const ne = e == null ? void 0 : e.highlightedBarValues.find((ue) => {
        if (ue.value)
          return e.xAxis.type === "date" ? l(a(ue.value)) === K : ue.value === K;
      });
      return ne != null && ne.color ? ne.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (K) => {
      const ne = e == null ? void 0 : e.highlightedBarValues.filter((ue) => {
        if (ue.value)
          return e.xAxis.type === "date" ? l(a(ue.value)) === K : ue.value === K;
      })[0];
      return ne != null && ne.color ? ne : !1;
    },
    getAdditionalColumn: (K, ne) => {
      if (!ne)
        return "";
      const ue = e.columns, ze = [];
      let be = "";
      const ye = n.find((Pe) => Pe[e.xAxis.dataKey] === ne) || {};
      return Object.keys(ue).forEach((Pe) => {
        if (K && e.columns[Pe].series && e.columns[Pe].series !== K)
          return;
        const oe = {
          addColPrefix: e.columns[Pe].prefix,
          addColSuffix: e.columns[Pe].suffix,
          addColRoundTo: e.columns[Pe].roundToPlace ? e.columns[Pe].roundToPlace : "",
          addColCommas: e.columns[Pe].commas
        }, Ie = Tf(ye[e.columns[Pe].name], "left", !0, e, oe);
        e.columns[Pe].tooltips && ze.push([e.columns[Pe].label, Ie]);
      }), ze.forEach((Pe) => {
        be += `${Pe[0]} : ${Pe[1]} <br/>`;
      }), be;
    },
    hoveredBar: h,
    setHoveredBar: y,
    onMouseOverBar: (K, ne) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && ne && f([ne]), y(K);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Es = de.createContext(null), Gf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: i, handleTooltipMouseOff: a, handleTooltipMouseOver: l, handleTooltipClick: f, tooltipData: d, showTooltip: c, hideTooltip: h }) => {
  const { parseDate: y, config: v } = de.useContext(Ct), { runtime: S, regions: R, visualizationType: k, orientation: F, xAxis: w } = v, m = e.domain(), _ = (O) => {
    let L;
    if (!(O != null && O.fromType) || O.fromType === "Fixed") {
      const U = new Date(O.from), V = y(Xl(v.xAxis.dateParseFormat, U)).getTime();
      L = e(V), k === "Bar" && w.type === "date-time" && (L = L - t * n / 2);
    }
    if (O.fromType === "Previous Days") {
      const U = Number(O.from) || 0;
      m.map((ee) => Xl(v.xAxis.dateParseFormat, new Date(ee)));
      const V = O.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(O.to), q = v.xAxis.type === "categorical" ? Xl(v.xAxis.dateParseFormat, V) : Xl(v.xAxis.dateParseFormat, V), ce = new Date(q);
      if (L = new Date(ce.setDate(ce.getDate() - Number(U))), w.type === "date") {
        L = new Date(Xl(w.dateParseFormat, L)).getTime();
        let ee = m[0], j = Math.abs(L - ee);
        for (let Y = 1; Y < m.length; Y++) {
          const W = Math.abs(L - m[Y]);
          W < j && (j = W, ee = m[Y]);
        }
        L = ee;
      }
      if (w.type === "categorical") {
        let ee = m[0], j = Math.abs(new Date(L).getTime() - new Date(ee).getTime());
        for (let Y = 1; Y < m.length; Y++) {
          const W = Math.abs(new Date(L).getTime() - new Date(m[Y]).getTime());
          W < j && (j = W, ee = m[Y]);
        }
        L = ee;
      }
      L = e(L);
    }
    if (w.type === "categorical" && O.fromType !== "Previous Days" && (L = e(O.from)), k === "Line" || k === "Area Chart") {
      let U = Number(v.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), L = L + U;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && O.fromType === "Previous Days" && (L = L - t * n / 2), L;
  }, D = (O) => {
    let L;
    if (w.type === "categorical" && (L = e(O.to)), Cn(w) && ((!(O != null && O.toType) || O.toType === "Fixed") && (L = e(y(O.to).getTime())), (k === "Bar" || v.visualizationType === "Combo") && (L = O.toType !== "Last Date" ? e(y(O.to).getTime()) + t * n : L)), O.toType === "Last Date") {
      const U = m[m.length - 1];
      L = Number(e(U) + ((k === "Bar" || k === "Combo") && v.xAxis.type === "date" ? t * n : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let U = Number(v.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), L = L + U;
    }
    return k === "Bar" && v.xAxis.type === "date-time" && O.toType !== "Last Date" && (L = L - t * n / 2), (k === "Bar" || k === "Combo") && w.type === "categorical" && (L = L + (k === "Bar" || k === "Combo" ? t * n : 0)), L;
  }, P = (O, L) => O - L;
  if (R && F === "vertical")
    return R.map((O) => {
      const L = _(O), U = D(O), V = P(U, L);
      if (!L || !U)
        return null;
      const q = () => /* @__PURE__ */ r.createElement(
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
      ), ce = () => /* @__PURE__ */ r.createElement("rect", { x: L, y: 0, width: V, height: i, fill: O.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(at, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: O.label, onMouseMove: l, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(d), showTooltip: c }, /* @__PURE__ */ r.createElement(q, null), /* @__PURE__ */ r.createElement(ce, null), /* @__PURE__ */ r.createElement(kt, { x: L + V / 2, y: 5, fill: O.color, verticalAnchor: "start", textAnchor: "middle" }, O.label));
    });
};
function wc(e) {
  var ne, ue;
  const { config: t, index: n, id: i, className: a, background: l, borderColor: f, borderWidth: d, width: c, height: h, x: y, y: v, onMouseOver: S, onMouseLeave: R, onClick: k, tooltipHtml: F, tooltipId: w, styleOverrides: m, seriesHighlight: _ } = e, D = Math.max(0, c), P = Math.max(0, h), O = t.orientation === "horizontal", L = t.barStyle === "rounded", U = t.visualizationSubType === "stacked", V = t.tipRounding, q = t.visualizationType === "Combo" && ((ue = (ne = t.runtime) == null ? void 0 : ne.barSeriesKeys) == null ? void 0 : ue.length), ce = t.runtime.seriesKeys.length, ee = t.visualizationType === "Bar" && t.legend.axisAlign && (_ != null && _.length) ? _ == null ? void 0 : _.length : 0, j = q || ee || ce;
  let Y = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (Y > D / 2 || Y > P / 2) && (Y = Math.min(D / 2, P / 2));
  const W = () => `M${y},${v + P}
      L${y},${v + Y}
      Q${y},${v} ${y + Y},${v}
      L${y + D - Y},${v}
      Q${y + D},${v} ${y + D},${v + Y}
      L${y + D},${v + P}
      L${y},${v + P}`, B = () => `M${y},${v + P}
      L${y},${v}
      L${y + D - Y},${v}
      Q${y + D},${v} ${y + D},${v + Y}
      L${y + D},${v + P - Y}
      Q${y + D},${v + P} ${y + D - Y},${v + P}
      L${y},${v + P}`, ie = () => `M${y + Y},${v + P}
      Q${y},${v + P} ${y},${v + P - Y}
      L${y},${v}
      L${y + D},${v}
      L${y + D},${v + P - Y}
      Q${y + D},${v + P} ${y + D - Y},${v + P}
      L${y + Y},${v + P}`, ae = () => `M${y + Y},${v + P}
      Q${y},${v + P} ${y},${v + P - Y}
      L${y},${v + Y}
      Q${y},${v} ${y + Y},${v}
      L${y + D},${v}
      L${y + D},${v + P}
      L${y + Y},${v + P}`, se = () => `M${y + Y},${v + P}
      Q${y},${v + P} ${y},${v + P - Y}
      L${y},${v + Y}
      Q${y},${v} ${y + Y},${v}
      L${y + D - Y},${v}
      Q${y + D},${v} ${y + D},${v + Y}
      L${y + D},${v + P - Y}
      Q${y + D},${v + P} ${y + D - Y},${v + P}
      L${y + Y},${v + P}`, Q = () => `M${y},${v}
      L${y + D},${v}
      L${y + D},${v + P}
      L${y},${v + P}
      L${y},${v}`;
  let K;
  return n == null || !L ? K = Q() : (K = Q(), (U && n + 1 === j || !U) && (K = O ? B() : W()), !U && n === -1 && (K = O ? ae() : ie()), V === "full" && U && n === 0 && j > 1 && (K = O ? ae() : ie()), V === "full" && (U && n === 0 && j === 1 || !U) && (K = se())), /* @__PURE__ */ r.createElement(
    "path",
    {
      id: i,
      className: a,
      d: K,
      fill: l,
      stroke: f,
      strokeWidth: d,
      onMouseOver: S,
      onMouseLeave: R,
      onClick: k,
      "data-tooltip-html": F,
      "data-tooltip-id": w,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const vE = () => {
  var ce, ee;
  const [e, t] = de.useState(0), { xScale: n, yScale: i, seriesScale: a, xMax: l, yMax: f } = de.useContext(Es), { transformedData: d, colorScale: c, seriesHighlight: h, config: y, formatNumber: v, formatDate: S, parseDate: R, setSharedFilter: k } = de.useContext(Ct), { isHorizontal: F, barBorderWidth: w, applyRadius: m, hoveredBar: _, getAdditionalColumn: D, onMouseLeaveBar: P, onMouseOverBar: O, barStackedSeriesKeys: L } = Tc(), { orientation: U } = y, V = (ce = y.brush) != null && ce.active && ((ee = y.brush.data) != null && ee.length) ? y.brush.data : d, q = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !F && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(A0, { data: V, keys: L, x: (j) => j[y.runtime.xAxis.dataKey], xScale: n, yScale: i, color: c }, (j) => j.reverse().map(
    (Y) => Y.bars.map((W) => {
      let B = y.legend.behavior === "highlight" && h.length > 0 && h.indexOf(W.key) === -1, ie = y.legend.behavior === "highlight" || h.length === 0 || h.indexOf(W.key) !== -1, ae = q ? a.range()[1] - a.range()[0] : l / Y.bars.length;
      y.runtime.xAxis.type !== "date" && (ae = y.barThickness * ae);
      const se = W.bar.data[y.runtime.xAxis.dataKey], Q = q ? S(R(se)) : se, K = v(W.bar ? W.bar.data[W.key] : 0, "left");
      if (!K)
        return;
      const ne = n(q ? R(se) : se) - (q ? ae / 2 : 0), ue = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${Q}` : Q, ze = D(_), be = `${y.runtime.seriesLabels[W.key]}: ${K}`, ye = `<ul>
                  <li class="tooltip-heading"">${ue}</li>
                  <li class="tooltip-body ">${be}</li>
                  <li class="tooltip-body ">${ze}</li>
                    </li></ul>`;
      return t(ae), /* @__PURE__ */ r.createElement(at, { key: `${Y.index}--${W.index}--${U}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-stack-${Y.index}-${W.index}`, id: `barStack${Y.index}-${W.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(kt, { display: y.labels && ie ? "block" : "none", opacity: B ? 0.5 : 1, x: ne + e / 2, y: W.y - 5, fill: "#000", textAnchor: "middle" }, K), wc({
        config: y,
        seriesHighlight: h,
        index: Y.index,
        background: c(y.runtime.seriesLabels[W.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? w : 0}px`,
        width: ae,
        height: W.height,
        x: ne,
        y: W.y,
        onMouseOver: () => O(Q, W.key),
        onMouseLeave: P,
        tooltipHtml: ye,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Pe) => {
          Pe.preventDefault(), k && (W[y.xAxis.dataKey] = Q, k(y.uid, W));
        },
        styleOverrides: {
          animationDelay: `${Y.index * 0.5}s`,
          transformOrigin: `${ae / 2}px ${W.y + W.height}px`,
          opacity: B ? 0.2 : 1,
          display: ie ? "block" : "none"
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
    getTextWidth: c,
    parseDate: h,
    seriesHighlight: y,
    setSharedFilter: v,
    transformedData: S
  } = de.useContext(Ct), { barBorderWidth: R, displayNumbersOnBar: k, fontSize: F, getAdditionalColumn: w, hoveredBar: m, isHorizontal: _, isLabelBelowBar: D, onMouseLeaveBar: P, onMouseOverBar: O, updateBars: L, barStackedSeriesKeys: U } = Tc(), { orientation: V, visualizationSubType: q } = l;
  return l.visualizationSubType === "stacked" && _ && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(R0, { data: S, keys: U, height: e, y: (ce) => ce[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: a, offset: "none" }, (ce) => ce.map(
    (ee) => L(ee.bars).map((j, Y) => {
      const W = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(j.key) === -1, B = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(j.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const ie = jo("#000", a(l.runtime.seriesLabels[j.key])), ae = d(S[j.index][j.key], "left"), se = l.runtime.yAxis.type === "date" ? f(h(S[j.index][l.runtime.originalXAxis.dataKey])) : S[j.index][l.runtime.originalXAxis.dataKey], Q = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${se}` : se, K = c(ae, `normal ${F[l.fontSize]}px sans-serif`), ne = w(m), ue = `${l.runtime.seriesLabels[j.key]}: ${ae}`, ze = `<ul>
                  <li class="tooltip-heading"">${Q}</li>
                  <li class="tooltip-body ">${ue}</li>
                  <li class="tooltip-body ">${ne}</li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: Y, id: `barStack${ee.index}-${j.index}`, className: "stack horizontal" }, wc({
        config: l,
        seriesHighlight: y,
        index: ee.index,
        className: `animated-chart group ${i ? "animated" : ""}`,
        background: a(l.runtime.seriesLabels[j.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? R : 0}px`,
        width: j.width,
        height: j.height,
        x: j.x,
        y: j.y,
        onMouseOver: () => O(se, j.key),
        onMouseLeave: P,
        tooltipHtml: ze,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (be) => {
          be.preventDefault(), v && (j[l.xAxis.dataKey] = ae, v(l.uid, j));
        },
        styleOverrides: {
          animationDelay: `${ee.index * 0.5}s`,
          transformOrigin: `${j.x}px 0`,
          opacity: W ? 0.2 : 1,
          display: B ? "block" : "none"
        }
      }), V === "horizontal" && q === "stacked" && D && ee.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        kt,
        {
          x: `${j.x + (l.isLollipopChart ? 15 : 5)}`,
          y: j.y + j.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        se
      ), k && K < j.width && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: B ? "block" : "none",
          x: j.x + ee.bars[j.index].width / 2,
          y: j.y + j.height / 2,
          fill: ie,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ae
      )));
    })
  )));
}, Ey = ({ bar: e, defaultBarHeight: t, defaultBarWidth: n, config: i, isNumber: a, getTextWidth: l, barWidth: f, isVertical: d }) => {
  let h = t, y = n, v = "", S = !1, R = !1, k = !1;
  const F = i.general.showSuppressedSymbol;
  if (i.preliminaryData.forEach((_) => {
    (!_.column || _.column === e.key) && _.type === "suppression" && _.value && String(_.value) === String(e.value) && (!_.hideBarSymbol && F ? (h = f > 10 ? 3 : 0, y = 3, S = !0) : (h = 0, y = 0, S = !0));
  }), !S && !a(e.value) && i.general.showMissingDataLabel) {
    const D = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10;
    R = !0, h = D ? 3 : 0, y = 3;
  }
  return !S && String(e.value) === "0" && i.general.showZeroValueDataLabel && (h = l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 ? 3 : 0, y = 3, k = !0), { barWidthHorizontal: y, barHeight: h, isSuppressed: S, showMissingDataLabel: R, showZeroValueDataLabel: k, getBarY: (_, D) => S || R || k ? D - 3 : _, getBarLabel: (_) => {
    let D = _;
    return String(D) === "0" && (D = ""), S && (D = ""), R && (D = "N/A"), k && (D = "0"), !i.labels && !S && !k && !R && d && (D = ""), !i.yAxis.displayNumbersOnBar && !d && !S && !k && !R && (D = ""), l(v, `normal ${f / 2}px sans-serif`) < f && f > 10 && d ? D : d ? "" : D;
  } };
}, Cc = (e, t, n) => !!(e === "Line" && t.length < 3 && n), bE = () => {
  const { xScale: e, yScale: t, xMax: n, yMax: i, seriesScale: a } = de.useContext(Es), [l, f] = de.useState(0), [d, c] = de.useState(0), {
    // prettier-ignore
    assignColorsToValues: h,
    barBorderWidth: y,
    getAdditionalColumn: v,
    getHighlightedBarByValue: S,
    getHighlightedBarColorByValue: R,
    lollipopBarWidth: k,
    lollipopShapeSize: F,
    onMouseLeaveBar: w,
    onMouseOverBar: m,
    section: _
  } = Tc(), { colorScale: D, config: P, dashboardConfig: O, tableData: L, formatDate: U, formatNumber: V, getXAxisData: q, getYAxisData: ce, isNumber: ee, parseDate: j, seriesHighlight: Y, setSharedFilter: W, transformedData: B, brushConfig: ie, getTextWidth: ae } = de.useContext(Ct), { HighLightedBarUtils: se } = bc(P);
  let Q = B;
  return P.preliminaryData.some((ne) => ne.value && ne.type === "suppression") && (Q = L), ie.data.length && (Q = ie.data), P.visualizationSubType !== "stacked" && (P.visualizationType === "Bar" || P.visualizationType === "Combo" || Cc(P.visualizationType, Q, P.allowLineToBarGraph)) && P.orientation === "vertical" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    jm,
    {
      data: Q,
      keys: P.runtime.barSeriesKeys || P.runtime.seriesKeys,
      height: i,
      x0: (ne) => {
        const ue = ne[P.runtime.originalXAxis.dataKey];
        return Cn(P.runtime.xAxis) ? j(ue) : ue;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (ne) => ne.map((ue, ze) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${ue.index}-${ue.x0}--${ze} ${P.orientation}`, key: `bar-group-${ue.index}-${ue.x0}--${ze}`, id: `bar-group-${ue.index}-${ue.x0}--${ze}`, left: ue.x0 }, ue.bars.map((be, ye) => {
      const Pe = P.useLogScale ? 0.1 : 0;
      let oe = P.highlightedBarValues.map((vt) => vt.value).filter((vt) => vt !== void 0);
      oe = P.xAxis.type === "date" ? se.formatDates(oe) : oe;
      const Ie = P.legend.behavior === "highlight" && Y.length > 0 && Y.indexOf(be.key) === -1, Ee = P.legend.behavior === "highlight" || Y.length === 0 || Y.indexOf(be.key) !== -1;
      let he = a.range()[1] - a.range()[0];
      const Te = Math.abs(t(be.value) - t(Pe)), J = be.value >= 0 && ee(be.value) ? be.y : t(0);
      let Me = P.isLollipopChart ? k : a.bandwidth(), we = be.x + (P.isLollipopChart ? (he / ue.bars.length - k) / 2 : 0) - (P.xAxis.type === "date-time" ? he / 2 : 0);
      f(Me), c(ue.bars.length);
      const Xe = V(/[a-zA-Z]/.test(String(be.value)) ? "" : be.value, "left"), Ze = P.runtime[_].type === "date" ? U(j(Q[ue.index][P.runtime.originalXAxis.dataKey])) : Q[ue.index][P.runtime.originalXAxis.dataKey], et = be.value < 0 ? -1 : ye, Ue = v(be.key, Q[ue.index][P.runtime.originalXAxis.dataKey]);
      let Et = P.runtime.xAxis.label ? `${P.runtime.xAxis.label}: ${Ze}` : Ze;
      const Ke = `${P.runtime.seriesLabels[be.key]}: ${Xe}`, We = `<ul>
                  <li class="tooltip-heading">${Et}</li>
                  <li class="tooltip-body ">${Ke}</li>
                  ${Ue ? '<li class="tooltip-body ">' + Ue + "</li>" : ""}
                    </li></ul>`;
      let Be = "#000000";
      Be = se.checkFontColor(Xe, oe, Be);
      let $e = P.runtime.seriesLabels && P.runtime.seriesLabels[be.key] ? D(P.runtime.seriesLabels[be.key]) : D(be.key);
      $e = h(ne.length, ue.index, $e);
      const ft = P.isLollipopChart && P.lollipopColorStyle === "regular", qe = P.isLollipopChart && P.lollipopColorStyle === "two-tone", it = oe == null ? void 0 : oe.includes(Ze), yt = R(Ze), ht = S(Ze), _t = it ? yt : P.barHasBorder === "true" ? "#000" : "transparent", tn = it ? ht.borderWidth : P.isLollipopChart ? 0 : P.barHasBorder === "true" ? y : 0, { barHeight: Xt, isSuppressed: gt, getBarY: Rt, getBarLabel: hn } = Ey({ bar: be, defaultBarHeight: Te, config: P, isNumber: ee, getTextWidth: ae, barWidth: Me, isVertical: !0, yAxisValue: Xe }), on = hn(Xe), qt = Rt(J, t(Pe)), yn = gt ? "none" : "block", Fe = (vt, Ht) => {
        var xn;
        let It = vt, At = Ht || "#f2f2f2";
        if (O && ((xn = O.dashboard.sharedFilters) == null ? void 0 : xn.length) !== 0) {
          const { sharedFilters: Mt } = O.dashboard;
          return It = Mt ? Mt.map((ln) => ln.setBy === P.uid ? ln.resetLabel === ln.active || ln.active === B[ue.index][P.xAxis.dataKey] ? D(P.runtime.seriesLabels[be.key]) : At : D(P.runtime.seriesLabels[be.key]))[0] : D(P.runtime.seriesLabels[be.key]), ft && (It = vt), qe && (It = ps(vt).brighten(1)), it && (It = "transparent"), It;
        }
        return qe && (It = ps(vt).brighten(1)), it && (It = "transparent"), It;
      };
      return /* @__PURE__ */ r.createElement(at, { key: `${ue.index}--${ye}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${ue.index}-${ue.x0}-${qt}--${ye}` }, wc({
        config: P,
        index: et,
        id: `barGroup${ue.index}`,
        background: Fe(D(P.runtime.seriesLabels[be.key])),
        borderColor: _t,
        borderStyle: "solid",
        borderWidth: `${tn}px`,
        width: Me,
        height: Xt,
        x: we,
        y: qt,
        onMouseOver: () => m(Ze, be.key),
        onMouseLeave: w,
        tooltipHtml: We,
        tooltipId: `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
        onClick: (vt) => {
          vt.preventDefault(), W && (be[P.xAxis.dataKey] = Ze, W(P.uid, be));
        },
        styleOverrides: {
          transformOrigin: `0 ${qt + Xt}px`,
          opacity: Ie ? 0.2 : 1,
          display: Ee ? "block" : "none",
          cursor: O ? "pointer" : "default"
        }
      }), P.preliminaryData.map((vt, Ht) => {
        const It = !vt.column || vt.column === be.key;
        if (!(String(vt.value) === String(be.value) && vt.value !== "" && It) || Me < 10 || !P.general.showSuppressedSymbol || vt.hideBarSymbol)
          return;
        const Mt = String(vt.symbol).includes("Asterisk"), ln = Mt ? -5 : -8, cn = Mt ? "middle" : "end", Tn = vt.symbol === "Asterisk" ? Me * 1.2 : vt.symbol === "Double Asterisk" ? Me : Me / 1.5;
        return /* @__PURE__ */ r.createElement(
          kt,
          {
            key: Ht,
            dy: ln,
            display: Ee ? "block" : "none",
            opacity: Ie ? 0.5 : 1,
            x: we + Me / 2,
            y: qt,
            verticalAnchor: cn,
            fill: Be,
            textAnchor: "middle",
            fontSize: `${Tn}px`
          },
          vt.iconCode
        );
      }), /* @__PURE__ */ r.createElement(
        kt,
        {
          display: Ee ? "block" : "none",
          opacity: Ie ? 0.5 : 1,
          x: we + Me / 2,
          y: qt - 5,
          fill: Be,
          textAnchor: "middle",
          fontSize: Me / 2
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
          y: qt,
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
  ), Object.keys(P.confidenceKeys).length > 0 ? Q.map((ne) => {
    let ue, ze, be, ye, Pe = 5;
    return ue = e(q(ne)) + (P.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), be = t(ce(ne, P.confidenceKeys.lower)), ye = t(ce(ne, P.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${ze}-${ne[P.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ue - Pe} ${be}
                    L${ue + Pe} ${be}
                    M${ue} ${be}
                    L${ue} ${ye}
                    M${ue - Pe} ${ye}
                    L${ue + Pe} ${ye}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(Gf, { xScale: e, yMax: i, barWidth: l, totalBarsInGroup: d }));
}, SE = () => {
  var se;
  const { xScale: e, yScale: t, yMax: n, seriesScale: i } = de.useContext(Es), { transformedData: a, tableData: l, colorScale: f, seriesHighlight: d, config: c, formatNumber: h, formatDate: y, parseDate: v, setSharedFilter: S, isNumber: R, getTextWidth: k, getYAxisData: F, getXAxisData: w } = de.useContext(Ct), { isHorizontal: m, barBorderWidth: _, updateBars: D, assignColorsToValues: P, section: O, fontSize: L, isLabelBelowBar: U, displayNumbersOnBar: V, lollipopBarWidth: q, lollipopShapeSize: ce, getHighlightedBarColorByValue: ee, getHighlightedBarByValue: j, getAdditionalColumn: Y, hoveredBar: W, onMouseLeaveBar: B, onMouseOverBar: ie } = Tc(), { HighLightedBarUtils: ae } = bc(c);
  return c.visualizationSubType !== "stacked" && c.visualizationType === "Bar" && c.orientation === "horizontal" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    jm,
    {
      data: (se = c.preliminaryData) != null && se.some((Q) => Q.value && Q.type === "suppression") ? l : a,
      keys: c.runtime.barSeriesKeys || c.runtime.seriesKeys,
      height: n,
      x0: (Q) => Q[c.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: i,
      yScale: e,
      color: () => ""
    },
    (Q) => D(Q).map((K, ne) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${K.index}-${K.x0}--${ne} ${c.orientation}`, key: `bar-group-${K.index}-${K.x0}--${ne}`, id: `bar-group-${K.index}-${K.x0}--${ne}`, top: K.y }, K.bars.map((ue, ze) => {
      var xn;
      const be = c.useLogScale ? 0.1 : 0;
      let ye = c.highlightedBarValues.map((Mt) => Mt.value).filter((Mt) => Mt !== void 0);
      ye = c.xAxis.type === "date" ? ae.formatDates(ye) : ye;
      let Pe = c.legend.behavior === "highlight" && d.length > 0 && d.indexOf(ue.key) === -1, oe = c.legend.behavior === "highlight" || d.length === 0 || d.indexOf(ue.key) !== -1, Ie = c.barHeight, Ee = parseInt(c.isLollipopChart ? q : Ie);
      isNaN(Ee) && (Ee = 25);
      let he = ue.value >= 0 && R(ue.value) ? ue.y : t(be);
      const Te = Math.abs(e(ue.value) - e(be)), J = ue.value >= 0 && R(ue.value), { barWidthHorizontal: Me, isSuppressed: we, getBarLabel: Xe } = Ey({ bar: ue, defaultBarWidth: Te, config: c, isNumber: R, getTextWidth: k, isVertical: !1 }), Ze = ue.value < 0 ? Math.abs(e(ue.value)) : e(be), et = h(ue.value, "left"), Ue = c.runtime[O].type === "date" ? y(v(a[K.index][c.runtime.originalXAxis.dataKey])) : a[K.index][c.runtime.originalXAxis.dataKey], Et = J ? "above" : "below", Ke = Xe(et), We = k(Ue, `normal ${L[c.fontSize]}px sans-serif`), Be = Number(We) < Te - 5;
      let $e = Be ? "end" : "start", ft = "start", qe = Be ? -5 : 5, it = 10;
      Et === "below" && ($e = Be ? "start" : "end", qe = Be ? 5 : -5, c.isLollipopChart && (ft = "end", it = -10));
      const yt = ue.value < 0 ? -1 : ze;
      let ht = c.runtime.yAxis.label ? `${c.runtime.yAxis.label}: ${Ue}` : Ue;
      const _t = Y(W), tn = `${c.runtime.seriesLabels[ue.key]}: ${et}`, Xt = `<ul>
                  <li class="tooltip-heading"">${ht}</li>
                  <li class="tooltip-body ">${tn}</li>
                  <li class="tooltip-body ">${_t}</li>
                    </li></ul>`;
      let gt = "#000000";
      gt = ae.checkFontColor(et, ye, gt);
      let Rt = c.runtime.seriesLabels && c.runtime.seriesLabels[ue.key] ? f(c.runtime.seriesLabels[ue.key]) : f(ue.key);
      Rt = P(Q.length, K.index, Rt);
      const hn = c.isLollipopChart && c.lollipopColorStyle === "regular", on = c.isLollipopChart && c.lollipopColorStyle === "two-tone", qt = ye == null ? void 0 : ye.includes(Ue), yn = ee(Ue), Fe = j(Ue), vt = qt ? yn : c.barHasBorder === "true" ? "#000" : "transparent", Ht = qt ? Fe.borderWidth : c.isLollipopChart ? 0 : c.barHasBorder === "true" ? _ : 0, It = we ? "none" : "block";
      Rt && gt && Be && (gt = jo("#000", Rt));
      const At = () => hn ? Rt : on ? ps(Rt).brighten(1) : qt ? "transparent" : Rt;
      return /* @__PURE__ */ r.createElement(at, { key: `${K.index}--${ze}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${K.index}-${K.x0}-${he}--${ze}` }, wc({
        config: c,
        index: yt,
        id: `barGroup${K.index}`,
        background: At(),
        borderColor: vt,
        borderStyle: "solid",
        borderWidth: `${Ht}px`,
        width: Me,
        height: Ee,
        x: Ze,
        y: Ie * ue.index,
        onMouseOver: () => ie(Ue, ue.key),
        onMouseLeave: B,
        tooltipHtml: Xt,
        tooltipId: `cdc-open-viz-tooltip-${c.runtime.uniqueId}`,
        onClick: (Mt) => {
          Mt.preventDefault(), S && (ue[c.xAxis.dataKey] = et, S(c.uid, ue));
        },
        styleOverrides: {
          transformOrigin: `0 ${he + Ie}px`,
          opacity: Pe ? 0.2 : 1,
          display: oe ? "block" : "none"
        }
      }), (xn = c.preliminaryData) == null ? void 0 : xn.map((Mt, ln) => {
        const cn = !Mt.column || Mt.column === ue.key;
        if (!(String(Mt.value) === String(ue.value) && Mt.value !== "" && cn) || Mt.hideBarSymbol || !c.general.showSuppressedSymbol)
          return;
        const Pn = String(Mt.symbol).includes("Asterisk") ? "middle" : "end", Mn = Mt.symbol === "Asterisk" ? Ie * 1.2 : Mt.symbol === "Double Asterisk" ? Ie : Ie / 1.5;
        return /* @__PURE__ */ r.createElement(
          kt,
          {
            key: ln,
            fontSize: Mn,
            display: oe ? "block" : "none",
            opacity: Pe ? 0.5 : 1,
            x: Ze,
            y: c.barHeight / 2 + c.barHeight * ue.index,
            fill: "#000",
            dy: c.barHeight / 5,
            dx: 10,
            textAnchor: "start",
            verticalAnchor: Pn
          },
          Mt.iconCode
        );
      }), !c.isLollipopChart && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: oe ? "block" : "none",
          x: ue.y,
          opacity: Pe ? 0.5 : 1,
          y: c.barHeight / 2 + c.barHeight * ue.index,
          fill: gt,
          dx: Ke === "N/A" ? 20 : qe,
          verticalAnchor: "middle",
          textAnchor: Ke === "N/A" ? "middle" : $e
        },
        Ke
      ), c.isLollipopChart && V && /* @__PURE__ */ r.createElement(
        kt,
        {
          display: oe ? "block" : "none",
          x: ue.y,
          y: 0,
          fill: "#000000",
          dx: it,
          textAnchor: ft,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Ke
      ), U && !c.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: c.yAxis.hideAxis ? 0 : 5, y: K.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, c.runtime.yAxis.type === "date" ? y(v(a[K.index][c.runtime.originalXAxis.dataKey])) : m ? a[K.index][c.runtime.originalXAxis.dataKey] : h(a[K.index][c.runtime.originalXAxis.dataKey])), c.isLollipopChart && c.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: It,
          cx: ue.y,
          cy: Ie * ue.index + q / 2,
          r: ce / 2,
          fill: Rt,
          key: `circle--${ue.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${c.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), c.isLollipopChart && c.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: It,
          x: ue.y > 10 ? ue.y - ce / 2 : 0,
          y: 0 - q / 2,
          width: ce,
          height: ce,
          fill: Rt,
          key: `circle--${ue.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${c.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${ce}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(c.confidenceKeys).length > 0 ? a.map((Q) => {
    let K, ne, ue, ze = 5;
    return K = t(w(Q)) - 0.75 * c.barHeight, ne = e(F(Q, c.confidenceKeys.upper)), ue = e(F(Q, c.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${K}-${Q[c.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ue} ${K - ze}
                    L${ue} ${K + ze}
                    M${ue} ${K}
                    L${ne} ${K}
                    M${ne} ${K - ze}
                    L${ne} ${K + ze} `
      }
    );
  }) : "");
}, Lu = {
  Vertical: bE,
  Horizontal: SE,
  StackedVertical: vE,
  StackedHorizontal: xE
}, EE = ({ xScale: e, yScale: t, seriesScale: n, xMax: i, yMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, handleTooltipClick: d }) => {
  const { transformedData: c, config: h } = de.useContext(Ct), y = {
    xScale: e,
    yScale: t,
    xMax: i,
    yMax: a,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Or, { component: "BarChart" }, /* @__PURE__ */ r.createElement(Es.Provider, { value: y }, /* @__PURE__ */ r.createElement(at, { left: parseFloat(h.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Lu.StackedVertical, null), /* @__PURE__ */ r.createElement(Lu.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Lu.Vertical, null), /* @__PURE__ */ r.createElement(Lu.Horizontal, null), /* @__PURE__ */ r.createElement(kr, { key: "bars", display: h.tooltips.singleSeries ? "none" : "block", width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => l(v, c), onMouseOut: f, onClick: (v) => d(v, c) }))));
};
function Oa() {
  return Oa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Oa.apply(this, arguments);
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
  var t = e.left, n = t === void 0 ? 0 : t, i = e.top, a = i === void 0 ? 0 : i, l = e.className, f = e.max, d = e.min, c = e.firstQuartile, h = e.thirdQuartile, y = e.median, v = e.boxWidth, S = v === void 0 ? 10 : v, R = e.fill, k = e.fillOpacity, F = e.stroke, w = e.strokeWidth, m = e.rx, _ = m === void 0 ? 2 : m, D = e.ry, P = D === void 0 ? 2 : D, O = e.valueScale, L = e.outliers, U = L === void 0 ? [] : L, V = e.horizontal, q = e.medianProps, ce = q === void 0 ? {} : q, ee = e.maxProps, j = ee === void 0 ? {} : ee, Y = e.minProps, W = Y === void 0 ? {} : Y, B = e.boxProps, ie = B === void 0 ? {} : B, ae = e.outlierProps, se = ae === void 0 ? {} : ae, Q = e.container, K = Q === void 0 ? !1 : Q, ne = e.containerProps, ue = ne === void 0 ? {} : ne, ze = e.children, be = V ? a : n, ye = be + (S || 0) / 2, Pe = O.range(), oe = O(d ?? 0), Ie = O(c ?? 0), Ee = O(y ?? 0), he = O(h ?? 0), Te = O(f ?? 0), J = {
    valueRange: Pe,
    center: ye,
    offset: be,
    boxWidth: S,
    max: {
      x1: ye - (S || 0) / 4,
      x2: ye + (S || 0) / 4,
      y1: Te,
      y2: Te
    },
    maxToThird: {
      x1: ye,
      x2: ye,
      y1: Te,
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
      y2: oe
    },
    min: {
      x1: ye - (S || 0) / 4,
      x2: ye + (S || 0) / 4,
      y1: oe,
      y2: oe
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
      y1: Math.min.apply(Math, Pe),
      y2: Math.abs(Pe[0] - Pe[1])
    }
  };
  return V && (J.max = Ai(J.max), J.maxToThird = Ai(J.maxToThird), J.box.y1 = Ie, J.box = Ai(J.box), J.median = Ai(J.median), J.minToFirst = Ai(J.minToFirst), J.min = Ai(J.min), J.container = Ai(J.container), J.container.y1 = Math.min.apply(Math, Pe)), ze ? /* @__PURE__ */ r.createElement(r.Fragment, null, ze(J)) : /* @__PURE__ */ r.createElement(at, {
    className: Ln("visx-boxplot", l)
  }, U.map(function(Me, we) {
    var Xe = V ? O(Me) : ye, Ze = V ? ye : O(Me);
    return /* @__PURE__ */ r.createElement("circle", Oa({
      key: "visx-boxplot-outlier-" + we,
      className: "visx-boxplot-outlier",
      cx: Xe,
      cy: Ze,
      r: 4,
      stroke: F,
      strokeWidth: w,
      fill: R,
      fillOpacity: k
    }, se));
  }), /* @__PURE__ */ r.createElement("line", Oa({
    className: "visx-boxplot-max",
    x1: J.max.x1,
    y1: J.max.y1,
    x2: J.max.x2,
    y2: J.max.y2,
    stroke: F,
    strokeWidth: w
  }, j)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: J.maxToThird.x1,
    y1: J.maxToThird.y1,
    x2: J.maxToThird.x2,
    y2: J.maxToThird.y2,
    stroke: F,
    strokeWidth: w
  }), /* @__PURE__ */ r.createElement("rect", Oa({
    className: "visx-boxplot-box",
    x: J.box.x1,
    y: J.box.y1,
    width: J.box.x2,
    height: J.box.y2,
    stroke: F,
    strokeWidth: w,
    fill: R,
    fillOpacity: k,
    rx: _,
    ry: P
  }, ie)), /* @__PURE__ */ r.createElement("line", Oa({
    className: "visx-boxplot-median",
    x1: J.median.x1,
    y1: J.median.y1,
    x2: J.median.x2,
    y2: J.median.y2,
    stroke: F,
    strokeWidth: w
  }, ce)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: J.minToFirst.x1,
    y1: J.minToFirst.y1,
    x2: J.minToFirst.x2,
    y2: J.minToFirst.y2,
    stroke: F,
    strokeWidth: w
  }), /* @__PURE__ */ r.createElement("line", Oa({
    className: "visx-boxplot-min",
    x1: J.min.x1,
    y1: J.min.y1,
    x2: J.min.x2,
    y2: J.min.y2,
    stroke: F,
    strokeWidth: w
  }, W)), K && /* @__PURE__ */ r.createElement("rect", Oa({
    x: J.container.x1,
    y: J.container.y1,
    width: J.container.x2,
    height: J.container.y2,
    fillOpacity: "0"
  }, ue)));
}
ky.propTypes = {
  max: Oe.number,
  min: Oe.number,
  firstQuartile: Oe.number,
  thirdQuartile: Oe.number,
  median: Oe.number,
  boxWidth: Oe.number,
  fill: Oe.string,
  fillOpacity: Oe.oneOfType([Oe.number, Oe.string]),
  stroke: Oe.string,
  strokeWidth: Oe.oneOfType([Oe.number, Oe.string]),
  rx: Oe.number,
  ry: Oe.number,
  outliers: Oe.arrayOf(Oe.number),
  container: Oe.bool,
  children: Oe.func
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
  const l = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, f = (w) => `
      <strong>${w.columnCategory}</strong></br>
      ${a.labels.q1}: ${w.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${w.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${w.columnIqr}<br/>
      ${a.labels.median}: ${w.columnMedian}
    `, d = (w) => Number(w.columnMax), c = (w) => Number(w.columnMin), h = (w) => Number(w.columnMedian), y = (w) => Number(w.columnThirdQuartile), v = (w) => Number(w.columnFirstQuartile), S = 0.5, R = e.bandwidth(), k = Math.min(40, R), F = dr[n == null ? void 0 : n.palette][0] ? dr[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Or, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(at, { className: "boxplot", key: "boxplot-group" }, a.plots.map((w, m) => {
    const _ = R - k, D = 4;
    return /* @__PURE__ */ r.createElement(at, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && w.nonOutlierValues.map((P, O) => /* @__PURE__ */ r.createElement("circle", { cx: e(w.columnCategory) + Number(n.yAxis.size) + R / 2, cy: t(P), r: D, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${O}` })), /* @__PURE__ */ r.createElement(
      ky,
      {
        "data-left": e(w.columnCategory) + n.yAxis.size + _ / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(w),
        max: d(w),
        left: Number(e(w.columnCategory)) + Number(n.yAxis.size) + _ / 2 + 0.5,
        firstQuartile: v(w),
        thirdQuartile: y(w),
        median: h(w),
        boxWidth: k,
        fill: F,
        fillOpacity: S,
        stroke: "black",
        valueScale: t,
        outliers: a.plotOutlierValues ? w.columnOutliers : [],
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
          "data-tooltip-html": f(w),
          "data-tooltip-id": l,
          tabIndex: -1
        }
      }
    ));
  })));
}, TE = ({ xScale: e, yScale: t }) => {
  const { transformedData: n, config: i, tableData: a, formatNumber: l, seriesHighlight: f, colorPalettes: d } = de.useContext(Ct), c = 4.5, h = Object.keys(i.runtime.seriesLabels).length > 1, y = Object.entries(i.columns).filter(([S, R]) => R.tooltips).map(([S, R]) => [
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
   ${y.map(([F, w, m]) => `${F} : ${Tf(a[k][w], "left", !1, i, m)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ r.createElement(at, { className: "scatter-plot", left: i.yAxis.size }, n.map((S, R) => i.runtime.seriesKeys.map((k, F) => {
    const w = i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(k) === -1, m = i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(k) !== -1, _ = i.palette ? d[i.palette][F] : "#000";
    let D = {
      filter: "unset",
      opacity: 1,
      stroke: m ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${R}-${F}`,
        r: c,
        cx: e(S[i.xAxis.dataKey]),
        cy: t(S[k]),
        fill: m ? _ : "transparent",
        fillOpacity: w ? 0.25 : 1,
        style: D,
        "data-tooltip-html": v(S, k, R),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function wE({ height: e, xScale: t }) {
  const { transformedData: n, config: i, formatNumber: a, twoColorPalette: l, getTextWidth: f, updateConfig: d, parseDate: c, formatDate: h, currentViewport: y } = de.useContext(Ct), { barStyle: v, tipRounding: S, roundingStyle: R, twoColor: k } = i, F = de.useRef([]), [w, m] = de.useState(window.innerWidth), _ = R === "standard" ? "8px" : R === "shallow" ? "5px" : R === "finger" ? "15px" : "0px", D = { small: 16, medium: 18, large: 20 };
  i.barStyle;
  const P = Number(i.xAxis.target), O = i.series[0].dataKey, L = Number(t.domain()[1]), V = n.some((Q) => Q[O] < 0) || P > 0 || t.domain()[0] < 0, q = i.barHasBorder === "true" ? 1 : 0, ce = i.lollipopSize === "large" ? 7 : i.lollipopSize === "medium" ? 6 : 5, ee = i.lollipopSize === "large" ? 14 : i.lollipopSize === "medium" ? 12 : 10, j = Math.max(t(0), Math.min(t(P), t(L))), Y = (Q) => {
    if (Q == null || v !== "rounded")
      return;
    let K = {};
    return Q === "left" && (K = { borderRadius: `${_} 0 0 ${_}` }), Q === "right" && (K = { borderRadius: `0 ${_} ${_} 0` }), S === "full" && (K = { borderRadius: _ }), K;
  }, W = {
    calculate: function() {
      const K = n[0][O] < P ? "left" : "right", ne = `${i.xAxis.targetLabel} ${a(i.xAxis.target || 0, "left")}`, ue = f(ne, `bold ${D[i.fontSize]}px sans-serif`);
      let ze = i.isLollipopChart ? ce / 2 : Number(i.barHeight) / 2, be = 0, ye = 0, Pe = !1;
      K === "right" && (be = -10, Pe = ue - be < j, ye = j - ue), K === "left" && (be = 10, Pe = t(L) - j > ue + be, ye = j), this.text = ne, this.y = ze, this.x = ye, this.padding = be, this.showLabel = i.xAxis.showTargetLabel ? Pe : !1;
    }
  };
  W.calculate();
  const B = de.useRef(null), ie = Uf(B, {});
  de.useEffect(() => {
    const Q = () => {
      var K;
      m(window.innerWidth), (K = F.current) == null || K.forEach((ne) => {
        !ne || !ne.style || (ne.style.transition = "none", ne.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", Q), () => {
      window.removeEventListener("resize", Q);
    };
  }, []);
  const [ae, se] = de.useState(!1);
  return de.useEffect(() => {
    ie != null && ie.isIntersecting && setTimeout(() => {
      se(!0);
    }, 100);
  }, [ie == null ? void 0 : ie.isIntersecting, i.animate]), de.useEffect(() => {
    var Q;
    (Q = F.current) == null || Q.forEach((K, ne) => {
      if (!(!K || !K.style)) {
        if (i.animate) {
          const ue = P / L * 100;
          K.style.opacity = "0", K.style.transform = `translate(${ue / 1.07}%) scale(0, 1)`, setTimeout(() => {
            K.style.opacity = "1", K.style.transform = "translate(0) scale(1)", K.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          K.style.transition = "none", K.style.opacity = "0";
        i.animate || (K.style.transition = "none", K.style.opacity = "1");
      }
    });
  }, [i.animate, i, ae]), /* @__PURE__ */ r.createElement(Or, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(at, { left: Number(i.xAxis.size) }, n.map((Q, K) => {
    const ne = Number(Q[O]), ue = i.isLollipopChart ? ce : Number(i.barHeight), ze = Number(i.barSpace), be = Math.abs(t(ne) - j), ye = t(ne), Pe = ne > P ? j : ye, oe = ne < P ? "left" : "right";
    let Ie = 0;
    Ie = K !== 0 ? (ze + ue + q) * K : Ie;
    const Ee = (ze + ue + q) * n.length;
    i.heights.horizontal = Ee;
    const Te = f(a(ne, "left"), `normal ${D[i.fontSize]}px sans-serif`) < be - 6, J = ye, Me = Ie + ue / 2, we = ye, Xe = Ie + ue / 2, Ze = ye, et = Ie - ue / 2, Ue = Y(oe), [Et, Ke] = l[k.palette], We = { left: Et, right: Ke }, Be = jo("#000", We[oe]);
    let $e = CE(i.isLollipopChart, Te, ee, Be);
    const ft = a(ne, "left"), qe = i.runtime.yAxis.type === "date" ? h(c(n[K][i.runtime.originalXAxis.dataKey])) : n[K][i.runtime.originalXAxis.dataKey];
    let it = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${qe}` : qe, yt = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${ft}` : ft;
    const ht = `<div>
          ${it}<br />
          ${yt}
            </div>`;
    return /* @__PURE__ */ r.createElement(at, { key: `deviation-bar-${i.orientation}-${O}-${K}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (_t) => {
          F.current[K] = _t;
        },
        x: Pe,
        y: Ie,
        width: be,
        height: ue,
        "data-tooltip-html": ht,
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: be, height: ue, border: `${q}px solid #333`, backgroundColor: We[oe], ...Ue } })
    ), i.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(kt, { verticalAnchor: "middle", x: J, y: Me, ...$e[oe] }, a(Q[O], "left")), i.isLollipopChart && i.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: we, cy: Xe, r: ee / 2, fill: We[oe], style: { filter: "unset", opacity: 1 } }), i.isLollipopChart && i.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: Ze, y: et, width: ee, height: ee, fill: We[oe], style: { opacity: 1, filter: "unset" } }));
  }), W.showLabel && /* @__PURE__ */ r.createElement(kt, { fontWeight: "bold", dx: W.padding, verticalAnchor: "middle", x: W.x, y: W.y }, W.text), V && /* @__PURE__ */ r.createElement(an, { from: { x: j, y: 0 }, to: { x: j, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: B }));
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
  const { transformedData: f, rawData: d, config: c, seriesHighlight: h } = de.useContext(Ct), { xAxis: y, yAxis: v, legend: S, runtime: R } = c;
  return f && /* @__PURE__ */ r.createElement(Or, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(at, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (k = R.forecastingSeriesKeys) == null ? void 0 : k.map((F, w) => !F || !F.stages ? !1 : F.stages.map((m, _) => {
    var U;
    const { behavior: D } = S, P = d.filter((V) => V[F.stageColumn] === m.key);
    let O = D === "highlight" && h.length > 0 && h.indexOf(m.key) === -1, L = D === "highlight" || h.length === 0 || h.indexOf(m.key) !== -1;
    return /* @__PURE__ */ r.createElement(at, { className: `forecasting-areas-combo-${w}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${w}` }, (U = F.confidenceIntervals) == null ? void 0 : U.map((V, q) => {
      const ce = Iu[m.color] || dr[m.color] || !1, ee = () => L && ce[2] ? ce[2] : "transparent", j = () => L && ce[1] ? ce[1] : "transparent";
      if (!(V.high === "" || V.low === ""))
        return /* @__PURE__ */ r.createElement(at, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${_}-${q}` }, /* @__PURE__ */ r.createElement(
          p0,
          {
            curve: Ou,
            data: P,
            fill: ee(),
            opacity: O ? 0.1 : 0.5,
            x: (Y) => e(Date.parse(Y[y.dataKey])),
            y0: (Y) => t(Y[V.low]),
            y1: (Y) => t(Y[V.high])
          }
        ), q === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Kr, { data: P, x: (Y) => Number(e(Date.parse(Y[y.dataKey]))), y: (Y) => Number(t(Y[V.high])), curve: Ou, stroke: j(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Kr, { data: P, x: (Y) => Number(e(Date.parse(Y[y.dataKey]))), y: (Y) => Number(t(Y[V.low])), curve: Ou, stroke: j(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(at, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(i), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (F) => a(F, f), onMouseOut: l }))));
};
function Fu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Ac(e, t) {
  const n = e.series.every(({ type: S }) => S === "Bar"), i = e.series.every(({ type: S }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(S)), a = (S) => (R) => S.reduce((k, F) => isNaN(Number(R[F])) ? k : k + Number(R[F]), 0), l = () => {
    let S = Math.max(...t.map((R) => Math.max(...e.runtime.seriesKeys.map((k) => Fu(R[k]) ? Number(c(R[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const R = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      S = Math.max(...R);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const R = t.map(a(e.runtime.seriesKeys));
      S = Math.max(...R);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (S = Math.max(...t.map((R) => Fu(R[e.series.dataKey]) ? Number(c(R[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const R = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((w) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(w[m])))))), F = Math.max(...R);
      S = Math.max(F, k);
    }
    return S;
  }, f = () => {
    const S = Math.min(...t.map((R) => Math.min(...e.runtime.seriesKeys.map((k) => Fu(R[k]) ? Number(c(R[k])) : 1 / 0))));
    return String(S);
  }, d = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((S) => t.some((R) => R[S] >= 0)) : !1, c = (S) => S === null || S === "" ? "" : typeof S == "string" ? S.replace(/[,$]/g, "") : S, h = Number(l()), y = Number(f()), v = d();
  return { minValue: y, maxValue: h, existPositiveValue: v, isAllLine: i };
}
function qf({ config: e, yMax: t = 0, data: n = [], updateConfig: i }) {
  var S, R, k, F;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((w) => w.axis === "Right").map((w) => w.dataKey);
  let { minValue: f } = Ac(e, n);
  const d = (w) => {
    if (!w)
      return [0];
    let m = [];
    return w.map((_, D) => m = [...m, ...n.map((P) => Number(P[_]))]), m;
  };
  let c = Math.max.apply(null, d(l));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const h = ((R = (S = e.runtime) == null ? void 0 : S.barSeriesKeys) == null ? void 0 : R.length) > 0, y = ((F = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : F.length) > 0;
  return (h || y) && f > 0 && (f = 0), { yScaleRight: Kn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const LE = (e) => {
  const { preliminaryData: t, data: n, stroke: i, strokeWidth: a, handleLineType: l, lineType: f, seriesKey: d } = e, c = t.filter((S) => S.seriesKey && S.column && S.value && S.type && S.style && S.type === "effect"), h = (S) => c.find((R) => R.seriesKey === d && S[R.column] === R.value && R.type === "effect" && R.style !== "Open Circles");
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
}, pc = (e) => !isNaN(parseFloat(e)) && isFinite(e), RE = (e, t, n) => {
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
    let c = 1;
    for (; c < e.length && !pc(e[c][t]); )
      c++;
    c < e.length && i.data.push(e[c]);
  } else
    i.data.push(a);
  return i;
}, DE = (e, t, n) => {
  const i = {
    data: [],
    style: ""
  };
  let a = -1;
  return n == null || n.forEach((l) => {
    if (l.type !== "effect" && e[e.length - 1][t] === l.value && l.style && (!l.column || l.column === t) && l.type == "suppression" && !l.hideLineStyle) {
      const f = e.length - 1, d = { ...e[f], [t]: 0 };
      i.data.push(d);
      let c = f - 1;
      for (; c >= 0 && !pc(e[c][t]); )
        c--;
      c >= 0 && a !== c && (i.data.push(e[c]), a = c), i.style = l.style;
    }
  }), i;
};
function NE(e, t, n, i) {
  const a = {
    data: [],
    style: ""
  }, l = (f) => f > 0 && f < e.length - 1;
  return i == null || i.forEach((f) => {
    if (f.type === "effect" || f.hideLineStyle)
      return;
    const d = f.value;
    e.reduce((h, y, v) => (y[t] === d && l(v) && (!f.column || f.column === t) && h.push(v), h), []).forEach((h) => {
      a.style = f.style, pc(e[h - 1][t]) && a.data.push(e[h - 1]);
      const y = e.slice(h + 1).findIndex((v) => v[t] !== d && pc(v[t]));
      y !== -1 && a.data.push(e[h + 1 + y]);
    });
  }), a.data = ar.uniqWith(a.data, (f, d) => f[n] === d[n] && f[t] === d[t]), a;
}
const OE = (e, t, n, i) => {
  const a = RE(e, t, n), l = DE(e, t, n), f = NE(e, t, i, n);
  return [a, f, l].filter((d) => d.data.length > 0 && d.style !== "");
}, Wd = (e) => {
  var P, O, L, U, V, q, ce, ee;
  const { config: t, d: n, tableData: i, displayArea: a, seriesKey: l, tooltipData: f, xScale: d, yScale: c, colorScale: h, parseDate: y, yScaleRight: v, data: S, circleData: R, dataIndex: k, mode: F } = e, { lineDatapointStyle: w } = t, m = (P = t == null ? void 0 : t.series.filter((j) => j.dataKey === l)) == null ? void 0 : P[0], _ = (j, Y, W, B, ie) => {
    const ae = W.runtime.seriesLabels || [];
    let se;
    return j ? se = Y(ae[B] || ie) : se = "transparent", W.lineDatapointColor === "Lighter than Line" && se !== "transparent" && se && (se = ps(se).brighten(1)), se;
  }, D = (j) => (t.xAxis.type === "categorical" ? d(j) : d(y(j))) + (d.bandwidth ? d.bandwidth() / 2 : 0);
  if (F === "ALWAYS_SHOW_POINTS") {
    if (w === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (w === "always show")
      return (R == null ? void 0 : R.some((Y) => Y[t.xAxis.dataKey] === n[t.xAxis.dataKey] && Y[l] === n[l])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: D(n[t.xAxis.dataKey]),
          cy: m.axis === "Right" ? v(n[m.dataKey]) : c(n[m.dataKey]),
          r: 4.5,
          opacity: n[l] ? 1 : 0,
          fillOpacity: 1,
          fill: _(a, h, t, l, l),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (F === "HOVER_POINTS" && w === "hover") {
    if (!f || !l || !f.data)
      return;
    let j = (L = (O = f == null ? void 0 : f.data) == null ? void 0 : O[0]) == null ? void 0 : L[1];
    if (!j)
      return;
    let Y, W = f.data.filter((ae) => ae[0] === l), B = (U = W == null ? void 0 : W[0]) == null ? void 0 : U[0], ie = (V = W == null ? void 0 : W[0]) == null ? void 0 : V[2];
    return B ? (f == null || f.data.indexOf(B), Y = (q = i == null ? void 0 : i.find((ae) => ae[t == null ? void 0 : t.xAxis.dataKey] === j)) == null ? void 0 : q[l], f == null ? void 0 : f.data.map((ae, se) => (t.runtime.seriesLabelsAll.indexOf(j), isNaN(Y) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (R == null ? void 0 : R.some((K) => K[t.xAxis.dataKey] === j)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: D(j),
        cy: ie === "right" ? v(Y) : c(Y),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: _(a, h, t, B, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(ae)}--${se}`
      }
    )))) : void 0;
  }
  return F === "ISOLATED_POINTS" && F && ((Y, W) => {
    const B = S[Y], ie = Y > 0 ? S[Y - 1] : null, ae = Y < S.length - 1 ? S[Y + 1] : null;
    let se = !1;
    return Y === 0 && ae && !ae[W] && (se = !0), Y === S.length - 1 && ie && !ie[W] && (se = !0), Y > 0 && Y < S.length - 1 && B && B[W] && (!ie || !ie[W]) && (!ae || !ae[W]) && (se = !0), se;
  })(k, l) ? /* @__PURE__ */ r.createElement("circle", { cx: D(n[(ce = t.xAxis) == null ? void 0 : ce.dataKey]), cy: m.axis === "Right" ? v(n[m.dataKey]) : c(n[m == null ? void 0 : m.dataKey]), r: 5.3, strokeWidth: 2, stroke: h(t.runtime.seriesLabels[l]), fill: h((ee = t.runtime) == null ? void 0 : ee.seriesLabels[l]) }) : null;
}, Dh = (e) => {
  var Y;
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: i,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: l,
    tooltipData: f,
    xMax: d,
    xScale: c,
    yMax: h,
    yScale: y
  } = e, { colorScale: v, config: S, formatNumber: R, handleLineType: k, isNumber: F, parseDate: w, seriesHighlight: m, tableData: _, transformedData: D, updateConfig: P, brushConfig: O, clean: L } = de.useContext(Ct), { yScaleRight: U } = qf({ config: S, yMax: h, data: D, updateConfig: P });
  if (!l)
    return;
  const { lineDatapointStyle: V, showLineSeriesLabels: q, legend: ce } = S;
  let ee = D, j = _;
  return O.data.length > 0 && ((Y = S.brush) != null && Y.active) && (ee = L(O.data), j = L(O.data)), /* @__PURE__ */ r.createElement(Or, { component: "LineChart" }, /* @__PURE__ */ r.createElement(at, { left: Number(S.runtime.yAxis.size) }, " ", (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((W, B) => {
    var be;
    let ie = S.series.filter((ye) => ye.dataKey === W)[0].type;
    const ae = S.series.filter((ye) => ye.dataKey === W), se = ae[0].axis ? ae[0].axis : "left";
    let Q = ce.behavior === "highlight" || m.length === 0 || m.indexOf(W) !== -1;
    const K = PE(S == null ? void 0 : S.preliminaryData, j, W);
    let ne = LE({ preliminaryData: S.preliminaryData, data: j, stroke: v(S.runtime.seriesLabels[W]), strokeWidth: ae[0].weight || 2, handleLineType: k, lineType: ie, seriesKey: W });
    const ue = OE(_, W, S.preliminaryData, S.xAxis.dataKey);
    let ze = (ye) => c(t(ye)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      at,
      {
        key: `series-${W}`,
        opacity: ce.behavior === "highlight" && m.length > 0 && m.indexOf(W) === -1 ? 0.5 : 1,
        display: ce.behavior === "highlight" || m.length === 0 && !ce.dynamicLegend || m.indexOf(W) !== -1 ? "block" : "none"
      },
      ee.map((ye, Pe) => {
        const oe = S.series.find(({ dataKey: J }) => J === W), { axis: Ie } = oe, Ee = Object.keys(S.runtime.seriesLabels).length > 1, he = Ie === "Right" ? "rightLabel" : "label";
        let Te = S.runtime.yAxis[he];
        return Ee || (Te = S.isLegendValue ? S.runtime.seriesLabels[W] : Te), ye[W] !== void 0 && ye[W] !== "" && ye[W] !== null && F(ye[W]) && /* @__PURE__ */ r.createElement(at, { key: `series-${W}-point-${Pe}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(d), height: Number(h), fill: "transparent", fillOpacity: 0.05, onMouseMove: (J) => l(J, _), onMouseOut: a, onClick: (J) => i(J, ee) }), /* @__PURE__ */ r.createElement(kt, { display: S.labels ? "block" : "none", x: ze(ye), y: se === "Right" ? U(n(ye, W)) : y(n(ye, W)), fill: "#000", textAnchor: "middle" }, R(ye[W], "left")), (V === "hidden" || V === "always show") && /* @__PURE__ */ r.createElement(
          Wd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Pe,
            circleData: K,
            tableData: _,
            data: ee,
            d: ye,
            config: S,
            seriesKey: W,
            displayArea: Q,
            tooltipData: f,
            xScale: c,
            yScale: y,
            colorScale: v,
            parseDate: w,
            yScaleRight: U,
            seriesAxis: se,
            key: `line-circle--${Pe}`
          }
        ), /* @__PURE__ */ r.createElement(
          Wd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Pe,
            tableData: _,
            circleData: K,
            data: ee,
            d: ye,
            config: S,
            seriesKey: W,
            displayArea: Q,
            tooltipData: f,
            xScale: c,
            yScale: y,
            colorScale: v,
            parseDate: w,
            yScaleRight: U,
            seriesAxis: se,
            key: `isolated-circle-${Pe}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, V === "hover" && /* @__PURE__ */ r.createElement(
        Wd,
        {
          tableData: _,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: K,
          data: ee,
          config: S,
          seriesKey: W,
          displayArea: Q,
          tooltipData: f,
          xScale: c,
          yScale: y,
          colorScale: v,
          parseDate: w,
          yScaleRight: U,
          seriesAxis: se
        }
      )),
      (be = S == null ? void 0 : S.preliminaryData) != null && be.some((ye) => ye.value && ye.type) ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Ym,
        {
          curve: ds[ae[0].lineType],
          segments: ee.map((ye) => [ye]),
          segmentation: "x",
          x: (ye) => ze(ye),
          y: (ye) => se === "Right" ? U(n(ye, W)) : y(Number(n(ye, W))),
          styles: ne,
          defined: (ye, Pe) => ye[W] !== "" && ye[W] !== null && ye[W] !== void 0
        }
      ), ue.map((ye, Pe) => /* @__PURE__ */ r.createElement(
        Kr,
        {
          key: Pe,
          data: ye.data,
          x: (oe) => ze(oe),
          y: (oe) => se === "Right" ? U(n(oe, W)) : y(Number(n(oe, W))),
          stroke: v(S.runtime.seriesLabels[W]),
          strokeWidth: ae[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k(ye.style),
          defined: (oe, Ie) => oe[W] !== "" && oe[W] !== null && oe[W] !== void 0
        }
      ))) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Kr,
        {
          curve: ds[ae[0].lineType],
          data: S.xAxis.type === "date-time" || S.xAxis.type === "date" ? ee.sort((ye, Pe) => {
            let oe = t(ye), Ie = t(Pe);
            return oe < Ie ? -1 : Ie < oe ? 1 : 0;
          }) : ee,
          x: (ye) => ze(ye),
          y: (ye) => se === "Right" ? U(n(ye, W)) : y(Number(n(ye, W))),
          stroke: v(S.runtime.seriesLabels[W]),
          strokeWidth: ae[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ie ? k(ie) : 0,
          defined: (ye, Pe) => ye[W] !== "" && ye[W] !== null && ye[W] !== void 0
        }
      )),
      K.map((ye, Pe) => /* @__PURE__ */ r.createElement(
        "circle",
        {
          key: Pe,
          cx: ze(ye),
          cy: se === "Right" ? U(n(ye, W)) : y(Number(n(ye, W))),
          r: 6,
          strokeWidth: ae[0].weight || 2,
          stroke: v ? v(S.runtime.seriesLabels[W]) : "#000",
          fill: "#fff"
        }
      )),
      S.animate && /* @__PURE__ */ r.createElement(
        Kr,
        {
          className: "animation",
          curve: ds[ae[0].lineType],
          data: ee,
          x: (ye) => ze(ye),
          y: (ye) => se === "Right" ? U(n(ye, W)) : y(Number(n(ye, W))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ie ? k(ie) : 0,
          defined: (ye, Pe) => ye[W] !== "" && ye[W] !== null && ye[W] !== void 0
        }
      ),
      q && (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((ye) => {
        let Pe;
        for (let oe = ee.length - 1; oe >= 0; oe--)
          if (ee[oe][ye]) {
            Pe = ee[oe];
            break;
          }
        return Pe ? /* @__PURE__ */ r.createElement("text", { x: ze(Pe) + 5, y: y(n(Pe, ye)), alignmentBaseline: "middle", fill: S.colorMatchLineSeriesLabels && v ? v(S.runtime.seriesLabels[ye] || ye) : "black" }, S.runtime.seriesLabels[ye] || ye) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), S.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ r.createElement(kt, { x: d / 2, y: h / 2, fill: "black", textAnchor: "middle", color: "black" }, S.legend.dynamicLegendChartMessage)));
}, _E = (e) => {
  const { rawData: t, updateConfig: n } = de.useContext(Ct), { xScale: i, yScale: a, config: l, height: f, width: d, handleTooltipMouseOff: c, handleTooltipMouseOver: h } = e, { forestPlot: y } = l, v = l.xAxis.tickWidthMax + 10, [S, R] = de.useState(!1);
  de.useEffect(() => {
    try {
      const P = ["estimateField", "lower", "upper", "estimateRadius"], O = l, L = 10;
      for (let U = 0; U < L; U++)
        P.forEach((V) => {
          var q;
          l.forestPlot[V] && l.forestPlot[V] !== ((q = O.columns[l.forestPlot[`additionalColumn${U}`]]) == null ? void 0 : q.name) && (delete O.columns[`additionalColumn${U}`], O.columns[l.forestPlot[V]] = {}, O.columns[l.forestPlot[V]].dataKey = O.forestPlot[V], O.columns[l.forestPlot[V]].name = O.forestPlot[V], O.columns[l.forestPlot[V]].dataTable = !0, O.columns[l.forestPlot[V]].tooltips = !0, O.columns[l.forestPlot[V]].label = O.forestPlot[V]);
        });
      l.forestPlot.radius.scalingColumn && (O.columns[l.forestPlot.radius.scalingColumn] = {}, O.columns[l.forestPlot.radius.scalingColumn].dataKey = O.forestPlot.radius.scalingColumn, O.columns[l.forestPlot.radius.scalingColumn].name = O.forestPlot.radius.scalingColumn, O.columns[l.forestPlot.radius.scalingColumn].label = O.forestPlot.radius.scalingColumn, O.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, O.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), O.table.showVertical && (O.table.indexLabel = l.xAxis.dataKey), n(O);
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
  ] : [], w = l.forestPlot.rowHeight, m = [
    { x: 0, y: w },
    { x: d, y: w }
  ], _ = [
    { x: 0, y: f },
    { x: d, y: f }
  ], D = Object.entries(l.columns).map((P) => P[1]).filter((P) => P.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { width: d }, y.title && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot--title", x: y.type === "Linear" ? i(0) : i(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ r.createElement(an, { from: { x: i(0), y: 0 + w }, to: { x: i(0), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ r.createElement(an, { from: { x: i(1), y: 0 + w }, to: { x: i(1), y: f }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((P, O) => {
    const L = Kn({
      domain: t.map((j) => j[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), U = y.radius.scalingColumn !== "" ? L(t[O][y.radius.scalingColumn]) : 4, V = y.colors.shape ? y.colors.shape : "black", q = y.colors.line ? y.colors.line : "black", ce = 4;
    return P[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ r.createElement(Kr, { data: F, x: (j) => j.x, y: (j) => j.y - Ei(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Qd }) : /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: q,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${i(P[y.lower])} ${a(O) - Number(ce)}
                    L${i(P[y.lower])} ${a(O) + Number(ce)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: q,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${i(P[y.upper])} ${a(O) - Number(ce)}
                    L${i(P[y.upper])} ${a(O) + Number(ce)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: q, className: `line-${P[l.yAxis.dataKey]}`, key: O, x1: i(P[y.lower]), x2: i(P[y.upper]), y1: a(O), y2: a(O) }), y.shape === "circle" && /* @__PURE__ */ r.createElement(Jy, { className: "forest-plot--circle", cx: i(Number(P[y.estimateField])), cy: a(O), r: y.radius.scalingColumn !== "" ? L(t[O][y.radius.scalingColumn]) : 4, fill: V, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: i(Number(P[y.estimateField])), y: a(O) - U / 2, width: U, height: U, fill: V, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot--text", x: i(Number(P[y.estimateField])), y: a(O), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: V }, P[y.estimateField]));
  }), F && y.regression.showDiamond && /* @__PURE__ */ r.createElement(Kr, { data: F, x: (P) => P.x, y: (P) => P.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Qd }), y.regression.description && /* @__PURE__ */ r.createElement(kt, { x: 0 - Number(l.xAxis.size), width: d, y: f - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ r.createElement(kr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: d, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (P) => h(P, t), onMouseOut: c })), /* @__PURE__ */ r.createElement(an, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(an, { from: _[0], to: _[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), D.map((P) => t.map((O, L) => /* @__PURE__ */ r.createElement(kt, { className: `${O[P.name]}`, x: P.forestPlotAlignRight ? d : P.forestPlotStartingPoint, y: a(L), textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, O[P.name]))), !y.hideDateCategoryCol && t.map((P, O) => /* @__PURE__ */ r.createElement(kt, { className: `${P[l.xAxis.dataKey]}`, x: 0, y: a(O), textAnchor: "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, P[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(kt, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, l.xAxis.dataKey), D.map((P) => /* @__PURE__ */ r.createElement(kt, { className: `${P.label}`, x: P.forestPlotAlignRight ? d : P.forestPlotStartingPoint, y: 0, textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, P.label)), y.leftLabel && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot__left-label", x: y.type === "Linear" ? i(0) - 25 : i(1) - 25, y: f + v, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ r.createElement(kt, { className: "forest-plot__right-label", x: y.type === "Linear" ? i(0) + 25 : i(1) + 25, y: f + v, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, FE = ({ width: e, height: t, originalWidth: n }) => {
  var D, P, O;
  const { config: i, colorScale: a, transformedData: l, formatNumber: f, seriesHighlight: d, getTextWidth: c } = de.useContext(Ct);
  if (!i || ((D = i == null ? void 0 : i.series) == null ? void 0 : D.length) < 2)
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
    parentKey: (O = i.dataDescription) == null ? void 0 : O.seriesKey,
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
  const w = i.yAxis.label ? `${i.yAxis.label}: ` : "", m = (L) => {
    var U;
    return `<p>
				${(U = i.dataDescription) == null ? void 0 : U.seriesKey}: ${R.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${L[i.xAxis.dataKey]}<br/>
				${w}${f(L[R.dataKey], "left")}
			</p>`;
  }, _ = (L) => {
    var U;
    return `<p>
				${(U = i.dataDescription) == null ? void 0 : U.seriesKey}: ${k.dataKeyLabel}<br/>
				${i.xAxis.dataKey}: ${L[i.xAxis.dataKey]}<br/>
				${w}${f(L[k.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(i.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Paired bar chart graphic with the title ${i.title ? i.title : "No Title Found"}`), /* @__PURE__ */ r.createElement(at, { top: 0, left: Number(i.xAxis.size) }, l.filter((L) => i.series[0].dataKey === R.dataKey).map((L, U) => {
    var ie, ae;
    let V = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[0].dataKey) === -1, q = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[0].dataKey) !== -1, ce = F(L[i.series[0].dataKey]), ee = Number(i.barHeight) ? Number(i.barHeight) : 25, j = 0;
    j = U !== 0 ? (Number(i.barSpace) + ee + h) * U : j;
    const Y = (Number(i.barSpace) + ee + h) * l.length;
    i.heights.horizontal = Y;
    const B = c(f(L[R.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < ce - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: `group-${R.dataKey}-${L[i.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${R.dataKey}-${L[(ie = i.dataDescription) == null ? void 0 : ie.xKey]}`,
        className: "bar group-1",
        key: `bar-${R.dataKey}-${L[(ae = i.dataDescription) == null ? void 0 : ae.xKey]}`,
        x: y - ce,
        y: j,
        width: F(L[i.series[0].dataKey]),
        height: ee,
        fill: R.color,
        "data-tooltip-html": m(L),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: h,
        opacity: V ? 0.5 : 1,
        display: q ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && q && /* @__PURE__ */ r.createElement(kt, { textAnchor: B ? "start" : "end", dx: B ? 5 : -5, verticalAnchor: "middle", x: y - ce, y: j + i.barHeight / 2, fill: B ? R.labelColor : "#000" }, f(L[R.dataKey], "left"))));
  }), l.filter((L) => i.series[1].dataKey === k.dataKey).map((L, U) => {
    var ie, ae, se;
    let V = F(L[i.series[1].dataKey]), q = i.legend.behavior === "highlight" && d.length > 0 && d.indexOf(i.series[1].dataKey) === -1, ce = i.legend.behavior === "highlight" || d.length === 0 || d.indexOf(i.series[1].dataKey) !== -1, ee = i.barHeight ? Number(i.barHeight) : 25, j = 0;
    j = U !== 0 ? (Number(i.barSpace) + ee + h) * U : j;
    const Y = (Number(i.barSpace) + ee + h) * l.length;
    i.heights.horizontal = Y;
    const B = c(f(L[k.dataKey], "left"), `normal ${v[i.fontSize]}px sans-serif`) < V - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${k.dataKey}-${L[i.xAxis.dataKey]} {
                          transform-origin: ${y}px ${j}px
                      }
							      `), /* @__PURE__ */ r.createElement(at, { key: `group-${k.dataKey}-${L[(ie = i.dataDescription) == null ? void 0 : ie.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${k.dataKey}-${L[(ae = i.dataDescription) == null ? void 0 : ae.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${L[(se = i.dataDescription) == null ? void 0 : se.xKey]}`,
        x: y,
        y: j,
        width: F(L[i.series[1].dataKey]),
        height: ee,
        fill: k.color,
        "data-tooltip-html": _(L),
        "data-tooltip-id": `cdc-open-viz-tooltip-${i.runtime.uniqueId}`,
        strokeWidth: h,
        stroke: "#333",
        opacity: q ? 0.5 : 1,
        display: ce ? "block" : "none",
        tabIndex: -1
      }
    ), i.yAxis.displayNumbersOnBar && ce && /* @__PURE__ */ r.createElement(kt, { textAnchor: B ? "end" : "start", dx: B ? -5 : 5, verticalAnchor: "middle", x: y + V, y: j + i.barHeight / 2, fill: B ? k.labelColor : "#000" }, f(L[k.dataKey], "left"))));
  }))));
}, Ty = ({ config: e, minValue: t, maxValue: n, existPositiveValue: i, data: a, isAllLine: l, tableData: f }) => {
  let d = 0, c = 0, h = 0, y = 0;
  if (!a)
    return { min: d, max: c };
  const v = () => Cc(e.visualizationType, a, e.allowLineToBarGraph), { visualizationType: S, series: R } = e, { max: k, min: F } = e.runtime.yAxis, w = i ? k >= n : k >= 0, m = e.useLogScale ? F >= 0 : F <= 0 && t >= 0 || F <= t && t < 0;
  d = F && m ? F : t, c = k && w ? k : Number.MIN_VALUE;
  const { lower: _, upper: D } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (_ && D && e.visualizationType === "Bar") {
    const P = d < 0 ? 1.1 : 0;
    c = Math.max(n, Math.max(...a.flatMap((O) => [O[D], O[_]])) * 1.15), d = Math.min(t, Math.min(...a.flatMap((O) => [O[D], O[_]])) * 1.15) * P;
  }
  if (e.series.filter((P) => (P == null ? void 0 : P.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: P }
    } = e;
    if ((P == null ? void 0 : P.length) > 0) {
      let O = [];
      P.forEach((q) => {
        var ce;
        (ce = q.confidenceIntervals) == null || ce.map((ee) => {
          O.push(ee.high), O.push(ee.low);
        });
      });
      const L = a.map((q) => O.map((ce) => q[ce])), U = Math.max.apply(
        null,
        L.map((q) => q[0])
      ), V = Math.min.apply(
        null,
        L.map((q) => q[1])
      );
      U > c && (c = U), V < d && (d = V);
    }
  }
  if (S === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let P = R.filter((U) => U.axis === "Left"), O = R.filter((U) => U.axis === "Right");
      const L = (U, V, q, ce = "left") => {
        let ee = 0;
        return (V.map((Y) => Y.dataKey) || []).forEach((Y) => {
          let W = V.find((ae) => ae.dataKey === Y), B = U.map((ae) => ae[Y]), ie = Math.max.apply(null, B);
          e.visualizationSubType === "stacked" && ce === "left" && W.type === "Bar" && (ee += ie), ie > q && (q = ie), q < ee && (q = ee);
        }), q;
      };
      h = L(a, P, h, "left"), y = L(a, O, y, "right"), h < k && (h = k);
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
    const P = e.useLogScale ? F >= 0 && F < t : F < t, O = f == null ? void 0 : f.some((L, U) => {
      var V;
      return (V = e.preliminaryData) == null ? void 0 : V.some((q) => {
        var Y;
        if (q.type !== "suppression" || !q.style)
          return !1;
        const ce = ar.pick(L, (Y = e.runtime) == null ? void 0 : Y.seriesKeys), ee = ar.values(ce).includes(q.value);
        return (q.column ? L[q.column] === q.value : ee) && (U === 0 || U === f.length - 1);
      });
    });
    d = F && P ? F : O ? 0 : t;
  }
  if (c === Number.MIN_VALUE && (c = i ? n : 0), e.runtime.yAxis.paddingPercent) {
    let P = (c - d) * e.runtime.yAxis.paddingPercent;
    d -= P, c += P;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const P = a.map((L) => L[e.series[0].dataKey]), O = Math.max(...P).toString().length;
    switch (!0) {
      case (O > 8 && O <= 12):
        c = c * 1.3;
        break;
      case (O > 4 && O <= 7):
        c = c * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (d < 0 ? (c *= 1 + e.yAxis.scalePadding * 2 / 100, d *= 1 + e.yAxis.scalePadding * 2 / 100) : c *= 1 + e.yAxis.scalePadding / 100), { min: d, max: c, leftMax: h, rightMax: y };
}, Wr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, ME = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: i, min: a, max: l, config: f, data: d } = e;
  const { rawData: c, dimensions: h } = de.useContext(Ct), [y, v] = h, S = f.runtime.barSeriesKeys || f.runtime.seriesKeys, R = f.runtime.xAxis.type, k = f.orientation === "horizontal", F = (q) => q[f.runtime.originalXAxis.dataKey], w = d.map((q) => F(q)), { visualizationType: m } = f;
  let _ = null, D = null, P = null, O = null, L = null, U = null, V = null;
  if (k && (_ = IE({ min: a * 1.03, ...e }), _.type = f.useLogScale ? Wr.LOG : Wr.LINEAR, D = BE(R, t), D.rangeRound([0, i]), L = Nh(S, [0, i])), k || (V = Nh(w, [0, n], 0.5), _ = Pu(t, [0, n], 1 - f.barThickness), D = $E(e), L = Pu(S, [0, _.bandwidth()], 0)), f.xAxis.type === "date" && !k) {
    const q = t ? t.sort() : [];
    _ = Pu(q, [0, n], 1 - f.barThickness);
  }
  if (f.xAxis.type === "date-time") {
    let q = Math.min(...t), ce = Math.max(...t);
    q -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (ce - q), ce += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (ce - q), _ = zg({
      domain: [q, ce],
      range: [0, n]
    }), _.type = Wr.TIME;
    let ee = Number.MAX_VALUE, j = t ? t.sort() : [];
    for (let Y = 0; Y < j.length - 1; Y++) {
      let W = _(j[Y + 1]) - _(j[Y]);
      W < ee && (ee = W);
    }
    (t.length === 1 || ee > n / 4) && (ee = n / 4), L = Pu(S, [0, (f.barThickness || 1) * ee], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const q = f.isLollipopChart ? 1.05 : 1.03;
    D = Ud({
      domain: t,
      range: [0, i]
    }), _ = Kn({
      domain: [a * q, Math.max(Number(f.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), _.type = Wr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (_ = Kn({
    domain: [0, Math.max.apply(null, _.domain())],
    range: [0, n]
  }), _.type = Wr.LINEAR), m === "Box Plot") {
    const q = [];
    if (f.boxplot.plots.map((Y) => Y.columnOutliers.map((W) => q.push(W))) && !f.boxplot.hideOutliers) {
      let Y = Math.min(...q), W = Math.max(...q);
      Y < a && (a = Y), W > l && (l = W);
    }
    let ee = Math.min(...f.boxplot.plots.map((Y) => Y.columnLowerBounds)), j = Math.max(...f.boxplot.plots.map((Y) => Y.columnUpperBounds));
    ee < a && (a = ee), j > l && (l = j), D = Kn({
      range: [i, 0],
      round: !0,
      domain: [a, l]
    }), _ = Ud({
      range: [0, n],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), _.type = Wr.BAND;
  }
  if (m === "Paired Bar") {
    let ce = Math.max.apply(
      Math,
      d.map((j) => {
        var Y;
        return j[(Y = f.series[0]) == null ? void 0 : Y.dataKey];
      })
    ), ee = Math.max.apply(
      Math,
      d.map((j) => {
        var Y;
        return j[(Y = f.series[1]) == null ? void 0 : Y.dataKey];
      })
    );
    O = Kn({
      domain: [0, Math.max(ce, ee) * 1.02],
      range: [n / 2, 0]
    }), P = Kn({
      domain: O.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const q = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, i - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, i];
    D = Kn({
      domain: [0, c.length],
      range: q()
    });
    const ce = 5, ee = Number(f.forestPlot.leftWidthOffset) / 100 * n, j = Number(f.forestPlot.rightWidthOffset) / 100 * n, Y = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * n, W = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (y > 480) {
      if (f.forestPlot.type === "Linear" && (_ = Kn({
        domain: [Math.min(...d.map((B) => parseFloat(B[f.forestPlot.lower]))) - ce, Math.max(...d.map((B) => parseFloat(B[f.forestPlot.upper]))) + ce],
        range: [ee, h[0] - j]
      }), _.type = Wr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let B = Math.max(...d.map((ae) => parseFloat(ae[f.forestPlot.upper]))), ie = Math.min(...d.map((ae) => parseFloat(ae[f.forestPlot.lower])));
        _ = Hu({
          domain: [ie, B],
          range: [ee, n - j],
          nice: !0
        }), _.type = Wr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (_ = Kn({
      domain: [Math.min(...d.map((B) => parseFloat(B[f.forestPlot.lower]))) - ce, Math.max(...d.map((B) => parseFloat(B[f.forestPlot.upper]))) + ce],
      range: [W, n - Y],
      type: Wr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let B = Math.max(...d.map((ae) => parseFloat(ae[f.forestPlot.upper]))), ie = Math.min(...d.map((ae) => parseFloat(ae[f.forestPlot.lower])));
      _ = Hu({
        domain: [ie, B],
        range: [ee, n - j],
        nice: !0,
        base: B > 1 ? 10 : 2,
        round: !1,
        type: Wr.LOG
      });
    }
  }
  return { xScale: _, yScale: D, seriesScale: L, g1xScale: O, g2xScale: P, xScaleNoPadding: U, xScaleBrush: V };
}, zE = (e, t, n) => {
  const i = t.domain();
  if (t.type === "time") {
    const a = e[e.length - 1], l = e[0], f = (a - l) / (n - 1), d = [];
    for (let c = a; c >= l; c -= f)
      d.push(c);
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
}, IE = ({ min: e, max: t, xMax: n, config: i }) => (e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (i.useLogScale ? Hu : Kn)({
  domain: [e, t],
  range: [0, n],
  nice: i.useLogScale,
  zero: i.useLogScale
})), $E = ({ min: e, max: t, yMax: n, config: i, leftMax: a }) => {
  e = i.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = i.useLogScale ? Hu : Kn;
  return i.visualizationType === "Combo" && (t = a), l({
    domain: [e, t],
    range: [n, 0],
    nice: i.useLogScale,
    zero: i.useLogScale
  });
}, BE = (e, t) => e === "date" ? Kn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Bo({ domain: t, padding: 0.5 }), Nh = (e, t, n = 0) => Bo({
  domain: e,
  range: t,
  padding: n
}), Pu = (e, t, n = 0) => Ud({
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
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], d = () => !["Forest Plot", "Sankey"].includes(t), c = () => !["Spark Line"].includes(t), h = () => !["Spark Line"].includes(t), y = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), S = () => {
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
  }, w = () => {
    if ((t === "Bar" || "Combo") && a === "regular")
      return !0;
  }, m = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && i === "vertical", _ = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((Xe) => Xe.type === "Bar" || Xe.type === "Paired Bar" || Xe.type === "Deviation Bar"), D = () => {
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
    visHasBarBorders: _,
    visHasDataCutoff: D,
    visHasLabelOnData: y,
    visHasDataSuppression: w,
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
    visSupportsSuperTitle: c,
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
function VE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wy(e) {
  var t = e.id, n = e.markerWidth, i = n === void 0 ? 3 : n, a = e.markerHeight, l = a === void 0 ? 3 : a, f = e.markerUnits, d = f === void 0 ? "userSpaceOnUse" : f, c = e.children, h = VE(e, WE);
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("marker", Ef({
    id: t,
    markerWidth: i,
    markerHeight: l,
    markerUnits: d
  }, h), c));
}
wy.propTypes = {
  id: Oe.string.isRequired,
  size: Oe.number,
  markerWidth: Oe.oneOfType([Oe.string, Oe.number]),
  markerHeight: Oe.oneOfType([Oe.string, Oe.number]),
  markerUnits: Oe.string,
  refX: Oe.oneOfType([Oe.string, Oe.number]),
  refY: Oe.oneOfType([Oe.string, Oe.number]),
  strokeWidth: Oe.number,
  children: Oe.node.isRequired
};
var jE = ["id", "size", "strokeWidth"];
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
function UE(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), a, l;
  for (l = 0; l < i.length; l++)
    a = i[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function KE(e) {
  var t = e.id, n = e.size, i = n === void 0 ? 9 : n, a = e.strokeWidth, l = a === void 0 ? 1 : a, f = UE(e, jE), d = i + l * 2, c = i, h = d / 2, y = "0 0, " + i + " " + i / 2 + ", 0 " + i;
  return /* @__PURE__ */ r.createElement(wy, kf({
    id: t,
    markerWidth: d,
    markerHeight: d,
    refX: c,
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
  const { transformedData: t, tableData: n, dimensions: i, config: a, parseDate: l, formatDate: f, currentViewport: d, formatNumber: c, handleChartAriaLabels: h, updateConfig: y, handleLineType: v, getTextWidth: S, brushConfig: R } = de.useContext(Ct), { visualizationType: k, visualizationSubType: F, orientation: w, xAxis: m, yAxis: _, runtime: D, debugSvg: P } = a, O = () => Cc(a.visualizationType, t, a.allowLineToBarGraph);
  let [L] = i;
  a && a.legend && !a.legend.hide && ((Hn = a.legend) == null ? void 0 : Hn.position) !== "bottom" && ["lg", "md"].includes(d) && (L = L * 0.73);
  const { horizontal: U } = a.heights, V = w === "horizontal" || a.visualizationType === "Forest Plot", q = !0, ce = isNaN(parseInt(D.xAxis.labelOffset)) ? 0 : parseInt(D.xAxis.labelOffset), ee = isNaN(parseInt(D.yAxis.labelOffset)) ? 0 : parseInt(D.yAxis.labelOffset), j = isNaN(parseInt(D.xAxis.size)) ? 0 : parseInt(D.xAxis.size);
  let Y = a.aspectRatio ? L * a.aspectRatio : a.visualizationType === "Forest Plot" ? a.heights.vertical : a.heights[w];
  Y = Number(Y);
  const W = L - D.yAxis.size - (k === "Combo" ? a.yAxis.rightAxisSize : 0);
  let B = Y - (w === "horizontal" ? 0 : j);
  Y += w === "horizontal" ? j : 0, a.visualizationType === "Forest Plot" && (Y = Y + a.data.length * a.forestPlot.rowHeight, B = B + a.data.length * a.forestPlot.rowHeight, L = i[0]), (Ut = a.brush) != null && Ut.active && (Y = Y + ((zn = a.brush) == null ? void 0 : zn.height));
  const { minValue: ie, maxValue: ae, existPositiveValue: se, isAllLine: Q } = Ac(a, t), { visSupportsReactTooltip: K } = ks(), { hasTopAxis: ne } = HE(a), [ue, ze] = de.useState(!1), [be, ye] = de.useState({ x: 0, y: 0 });
  de.useRef(null);
  const Pe = de.useRef(), oe = de.useRef(), Ie = Uf(Pe, {
    freezeOnceVisible: !1
  }), Ee = (De) => Cn(a.runtime.xAxis) ? l(De[a.runtime.originalXAxis.dataKey]).getTime() : De[a.runtime.originalXAxis.dataKey], he = (De, ut) => De[ut], Te = (Wn = a.brush) != null && Wn.active && ((An = R.data) != null && An.length) ? R.data.map((De) => Ee(De)) : t.map((De) => Ee(De)), J = a.orientation === "horizontal" || a.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", Me = { data: t, tableData: n, config: a, minValue: ie, maxValue: ae, isAllLine: Q, existPositiveValue: se, xAxisDataMapped: Te, xMax: W, yMax: B }, { min: we, max: Xe, leftMax: Ze, rightMax: et } = Ty(Me), { yScaleRight: Ue, hasRightAxis: Et } = qf({ config: a, yMax: B, data: t, updateConfig: y }), { xScale: Ke, yScale: We, seriesScale: Be, g1xScale: $e, g2xScale: ft, xScaleNoPadding: qe, xScaleBrush: it } = ME({ ...Me, min: we, max: Xe, leftMax: Ze, rightMax: et, dimensions: i }), [yt, ht] = de.useState(null);
  de.useEffect(() => {
    var De;
    ht((De = oe == null ? void 0 : oe.current) == null ? void 0 : De.getBoundingClientRect());
  }, [oe, a.legend]);
  const _t = (De, ut) => {
    if (a.useLogScale && De === 0.1 && (De = 0), !(a.data && !a.data[ut] && k === "Forest Plot"))
      return a.visualizationType === "Forest Plot" ? a.data[ut][a.xAxis.dataKey] : Cn(D.yAxis) ? f(l(De)) : w === "vertical" && Xe - we < 3 ? c(De, "left", q, !1, !1, "1") : w === "vertical" ? c(De, "left", q) : De;
  }, tn = (De) => (a.useLogScale && De === 0.1 && (De = 0), Cn(D.xAxis) && a.visualizationType !== "Forest Plot" ? f(De) : w === "horizontal" && a.visualizationType !== "Forest Plot" ? c(De, "left", q) : a.xAxis.type === "continuous" && a.visualizationType !== "Forest Plot" ? c(De, "bottom", q) : a.visualizationType === "Forest Plot" ? c(De, "left", a.dataFormat.abbreviated, a.runtime.xAxis.prefix, a.runtime.xAxis.suffix, Number(a.dataFormat.roundTo)) : De), Xt = (De) => {
    let { numTicks: ut } = D[De];
    D[De].viewportNumTicks && D[De].viewportNumTicks[d] && (ut = D[De].viewportNumTicks[d]);
    let ct;
    return De === "yAxis" && (ct = V && !ut ? t.length : V && ut ? ut : !V && !ut ? void 0 : !V && ut && ut, ct === void 0 && !a.dataFormat.roundTo && (Number(Xe) <= 3 ? ct = 2 : ct = 4), Number(ct) > Number(Xe) && (ct = Number(we) < 0 ? Math.round(Xe) * 2 : Math.round(Xe))), De === "xAxis" && (ct = V && !ut ? void 0 : V && ut ? ut : !V && !ut ? void 0 : !V && ut && ut, V && ct === void 0 && !a.dataFormat.roundTo && (Xe <= 3 ? ct = 2 : ct = 4), a.visualizationType === "Forest Plot" && (ct = a.yAxis.numTicks !== "" ? a.yAxis.numTicks : 4)), ct;
  }, { tooltipData: gt, showTooltip: Rt, hideTooltip: hn, tooltipOpen: on, tooltipLeft: qt, tooltipTop: yn } = Xm(), {
    handleTooltipMouseOver: Fe,
    handleTooltipClick: vt,
    handleTooltipMouseOff: Ht,
    tooltipStyles: It,
    TooltipListItem: At,
    getXValueFromCoordinateDate: xn,
    getXValueFromCoordinate: Mt
  } = Jm({
    xScale: Ke,
    yScale: We,
    showTooltip: Rt,
    hideTooltip: hn
  });
  de.useEffect(() => {
    document.querySelector(".isEditor") && ze((ut) => !0);
  }), de.useEffect(() => {
    (Ie == null ? void 0 : Ie.isIntersecting) === !0 && a.animate && setTimeout(() => {
      ze((De) => !0);
    }, 500);
  }, [Ie == null ? void 0 : Ie.isIntersecting, a.animate]);
  const ln = () => {
    const { visualizationType: De } = a;
    return De === "Combo" && D.forecastingSeriesKeys > 0 || De === "Area Chart" || De === "Line" || De === "Bar";
  }, cn = Number(w === "horizontal" ? a.xAxis.size : a.yAxis.size), Tn = { small: 16, medium: 18, large: 20 }, Jt = () => a.visualizationType === "Forest Plot" ? a.data.length : Xt("yAxis"), jt = () => {
    let De = a.xAxis.manualStep;
    return a.xAxis.viewportStepCount && a.xAxis.viewportStepCount[d] && (De = a.xAxis.viewportStepCount[d]), De;
  }, Pn = (De) => {
    const ut = De.currentTarget.getBoundingClientRect(), ct = De.clientX - ut.left, $ = De.clientY - ut.top;
    ye({
      x: ct,
      y: $
    });
  }, Mn = () => {
    let De = 40;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_u, { top: B, left: Number(D.yAxis.size), label: D.xAxis.label, tickFormat: Cn(D.xAxis) ? f : c, scale: $e, stroke: "#333", tickStroke: "#333", numTicks: D.xAxis.numTicks || void 0 }, (ut) => /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ut.ticks.map((ct, $) => {
      const Ne = ct.index !== 0 ? a.yAxis.tickRotation : 0, Ge = ct.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", ot = S(ct.value, `normal ${Tn[a.fontSize]}px sans-serif`) * Math.sin(Ne * (Math.PI / 180)) + 25;
      return ot > De && (De = ot), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${ct.value}-${$}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: ct.from, to: ct.to, stroke: "#333" }), !D.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: ct.to.x, y: ct.to.y, angle: -Ne, verticalAnchor: "start", textAnchor: Ge }, c(ct.value, "left")));
    }), !D.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      _u,
      {
        top: B,
        left: Number(D.yAxis.size),
        label: D.xAxis.label,
        tickFormat: Cn(D.xAxis) ? f : D.xAxis.dataKey !== "Year" ? c : (ut) => ut,
        scale: ft,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: D.xAxis.numTicks || void 0
      },
      (ut) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ut.ticks.map((ct, $) => {
        const Ne = ct.index !== 0 ? a.yAxis.tickRotation : 0, Ge = ct.index !== 0 && a.yAxis.tickRotation && a.yAxis.tickRotation > 0 ? "end" : "middle", ot = S(ct.value, `normal ${Tn[a.fontSize]}px sans-serif`) * Math.sin(Ne * (Math.PI / 180)) + 25;
        return ot > De && (De = ot), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${ct.value}-${$}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: ct.from, to: ct.to, stroke: "#333" }), !D.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { x: ct.to.x, y: ct.to.y, angle: -Ne, verticalAnchor: "start", textAnchor: Ge }, c(ct.value, "left")));
      }), !D.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(kt, { x: W / 2, y: De + 20 + ce, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, D.xAxis.label)), oe.current ? oe.current.setAttribute("height", Number(Y) + Number(De) + (D.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(L) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Or, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${L}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: Pn,
      width: "100%",
      height: Y,
      className: `linear ${a.animate ? "animated" : ""} ${ue && a.animate ? "animate" : ""} ${P && "debug"}`,
      role: "img",
      "aria-label": h(a),
      ref: oe,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ r.createElement(kr, { width: L, height: Y, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && /* @__PURE__ */ r.createElement(nE, { scale: We, tickLength: a.useLogScale ? 6 : 8, left: Number(D.yAxis.size) - a.yAxis.axisPadding, label: D.yAxis.label || D.yAxis.label, stroke: "#333", tickFormat: (De, ut) => _t(De, ut), numTicks: Jt() }, (De) => {
      const ut = a.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, ct = B / De.ticks.length / 2 - B / De.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "left-axis" }, De.ticks.map(($, Ne) => {
        const Ge = De.ticks[0].to.y, Ve = 15, ot = String($.value).startsWith("1") || $.value === 0.1 ? "block" : "none", nt = ot === "block" ? 7 : 0, St = { x: $.to.x - nt, y: $.to.y }, Dt = $.index !== 0 || a.xAxis.hideAxis;
        return /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${$.value}-${Ne}`, className: "vx-axis-tick" }, !D.yAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { key: `${$.value}--hide-hideTicks`, from: $.from, to: a.useLogScale ? St : $.to, stroke: a.yAxis.tickColor, display: w === "horizontal" ? "none" : "block" }), D.yAxis.gridLines && Dt ? /* @__PURE__ */ r.createElement(an, { key: `${$.value}--hide-hideGridLines`, display: (a.useLogScale && ot).toString(), from: { x: $.from.x + W, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", w === "horizontal" && F !== "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          kt,
          {
            transform: `translate(${$.to.x - 5}, ${a.isLollipopChart ? $.to.y - Ge : $.to.y - Ge + (Number(a.barHeight * a.series.length) - Ve) / 2}) rotate(-${a.runtime.horizontal && a.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          $.formattedValue
        ), w === "horizontal" && F === "stacked" && a.yAxis.labelPlacement === "On Date/Category Axis" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ge + (Number(a.barHeight) - Ve) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, $.formattedValue), w === "horizontal" && k === "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ge + Number(a.barHeight) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), w === "horizontal" && k === "Deviation Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(kt, { transform: `translate(${$.to.x - 5}, ${a.isLollipopChart ? $.to.y - Ge + 2 : $.to.y - Ge + Number(a.barHeight) / 2}) rotate(-${D.horizontal ? D.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), w === "vertical" && k !== "Paired Bar" && !a.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          kt,
          {
            display: a.useLogScale ? ot : "block",
            dx: a.useLogScale ? -6 : 0,
            x: a.runtime.horizontal ? $.from.x + 2 : $.to.x,
            y: $.to.y + (a.runtime.horizontal ? ct : 0),
            angle: -Number(a.yAxis.tickRotation) || 0,
            verticalAnchor: a.runtime.horizontal ? "start" : "middle",
            textAnchor: a.runtime.horizontal ? "start" : "end",
            fill: a.yAxis.tickLabelColor
          },
          $.formattedValue
        ));
      }), !a.yAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: De.axisFromPoint, to: D.horizontal ? { x: 0, y: a.visualizationType === "Forest Plot" ? Y : Number(U) } : De.axisToPoint, stroke: "#000" }), We.domain()[0] < 0 && /* @__PURE__ */ r.createElement(an, { from: { x: De.axisFromPoint.x, y: We(0) }, to: { x: W, y: We(0) }, stroke: "#333" }), k === "Bar" && w === "horizontal" && Ke.domain()[0] < 0 && /* @__PURE__ */ r.createElement(an, { from: { x: Ke(0), y: 0 }, to: { x: Ke(0), y: B }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(kt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * D.yAxis.size + ee}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.labelColor }, De.label));
    }),
    Et && /* @__PURE__ */ r.createElement(oE, { scale: Ue, left: Number(L - a.yAxis.rightAxisSize), label: a.yAxis.rightLabel, tickFormat: (De) => c(De, "right"), numTicks: D.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (De) => {
      const ut = a.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, ct = B / De.ticks.length / 2 - B / De.ticks.length * (1 - a.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "right-axis" }, De.ticks.map(($, Ne) => /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${$.value}-${Ne}`, className: "vx-axis-tick" }, !D.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(an, { from: $.from, to: $.to, display: D.horizontal ? "none" : "block", stroke: a.yAxis.rightAxisTickColor }), D.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(an, { from: { x: $.from.x + W, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", !a.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(kt, { x: $.to.x, y: $.to.y + (D.horizontal ? ct : 0), verticalAnchor: D.horizontal ? "start" : "middle", textAnchor: "start", fill: a.yAxis.rightAxisTickLabelColor }, $.formattedValue))), !a.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(an, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(kt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${a.yAxis.rightLabelOffsetSize ? a.yAxis.rightLabelOffsetSize : 0}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: a.yAxis.rightAxisLabelColor }, De.label));
    }),
    ne && a.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      cE,
      {
        stroke: "#333",
        left: Number(D.yAxis.size),
        scale: Ke,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ r.createElement(
      _u,
      {
        top: D.horizontal && a.visualizationType !== "Forest Plot" ? Number(U) + Number(a.xAxis.axisPadding) : a.visualizationType === "Forest Plot" ? B + Number(a.xAxis.axisPadding) : B,
        left: a.visualizationType !== "Forest Plot" ? Number(D.yAxis.size) : 0,
        label: a[J].label,
        tickFormat: tn,
        scale: Ke,
        stroke: "#333",
        numTicks: Xt("xAxis"),
        tickStroke: "#333",
        tickValues: a.xAxis.manual ? zE(Te, Ke, a.xAxis.type === "date-time" ? Xt("xAxis") : jt()) : void 0
      },
      (De) => {
        const ut = a.visualizationType !== "Forest Plot" ? (De.axisToPoint.x - De.axisFromPoint.x) / 2 : i[0] / 2, ct = (pt) => /\s/.test(pt), $ = De.ticks.some((pt) => ct(pt.value)), Ne = 8, Ge = Math.max(...De.ticks.map((pt) => S(pt.formattedValue, `normal ${Tn[a.fontSize]}px sans-serif`))), Ve = $ ? 180 : 100, ot = De.ticks.map((pt) => S(pt.formattedValue, `normal ${Tn[a.fontSize]}px sans-serif`)), nt = ot.reduce((pt, Nt) => pt + Nt, Ve), St = (W - nt) / (De.ticks.length - 1);
        let Dt = [0];
        for (let pt = 1; pt < ot.length; pt++)
          Dt[pt] = Dt[pt - 1] + ot[pt - 1] + St;
        let Qe = !1;
        ot.forEach((pt, Nt) => {
          if (Dt[Nt] + ot[Nt] > Dt[Nt + 1]) {
            Qe = !0;
            return;
          }
        });
        const Kt = Qe && a.isResponsiveTicks ? Ge + Ne + 20 : 0;
        Number(a.xAxis.tickRotation) > 0 && Number(a.xAxis.tickRotation), a.dynamicMarginTop = Kt, a.xAxis.tickWidthMax = Ge;
        let zt = 40;
        const Ft = /* @__PURE__ */ r.createElement(at, { className: "bottom-axis", width: i[0] }, De.ticks.map((pt, Nt, Tt) => {
          const Yt = String(pt.value).startsWith("1") || pt.value === 0.1 ? "block" : "none", Wt = Yt === "block" ? 16 : Ne, dn = { x: pt.to.x, y: Wt }, sn = S(pt.formattedValue, `normal ${Tn[a.fontSize]}px sans-serif`), nn = 100 / Tt.length;
          a.yAxis.tickRotation = a.isResponsiveTicks && a.orientation === "horizontal" ? 0 : a.yAxis.tickRotation, a.xAxis.tickRotation = a.isResponsiveTicks && a.orientation === "vertical" ? 0 : a.xAxis.tickRotation;
          const Zt = a.isResponsiveTicks && Qe ? -Number(a.xAxis.maxTickRotation) || -90 : -Number(a.runtime.xAxis.tickRotation), En = sn * Math.sin(Zt * -1 * (Math.PI / 180)) + 25;
          return En > zt && (zt = En), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${pt.value}-${Nt}`, className: "vx-axis-tick" }, !a.xAxis.hideTicks && /* @__PURE__ */ r.createElement(an, { from: pt.from, to: w === "horizontal" && a.useLogScale ? dn : pt.to, stroke: a.xAxis.tickColor, strokeWidth: Yt === "block" && a.useLogScale ? 1.3 : 1 }), !a.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            kt,
            {
              dy: a.orientation === "horizontal" && a.useLogScale ? 8 : 0,
              display: a.orientation === "horizontal" && a.useLogScale ? Yt : "block",
              x: pt.to.x,
              y: pt.to.y,
              angle: Zt,
              verticalAnchor: Zt < -50 ? "middle" : "start",
              textAnchor: Zt ? "end" : "middle",
              width: Qe && !a.isResponsiveTicks && !Number(a[J].tickRotation) ? nn : void 0,
              fill: a.xAxis.tickLabelColor
            },
            pt.formattedValue
          ));
        }), !a.xAxis.hideAxis && /* @__PURE__ */ r.createElement(an, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(kt, { x: ut, y: zt + 20 + ce, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: a.xAxis.labelColor }, De.label));
        return oe.current && oe.current.setAttribute("height", Number(Y) + Number(zt) + (D.xAxis.label ? 50 : 0) + "px"), Ft;
      }
    ),
    k === "Paired Bar" && Mn(),
    k === "Deviation Bar" && ((Sn = a.series) == null ? void 0 : Sn.length) === 1 && /* @__PURE__ */ r.createElement(wE, { animatedChart: ue, xScale: Ke, yScale: We, width: W, height: B }),
    k === "Paired Bar" && /* @__PURE__ */ r.createElement(FE, { originalWidth: L, width: W, height: B }),
    k === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      TE,
      {
        xScale: Ke,
        yScale: We,
        getXAxisData: Ee,
        getYAxisData: he,
        xMax: W,
        yMax: B,
        handleTooltipMouseOver: Fe,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: vt,
        tooltipData: gt,
        showTooltip: Rt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ r.createElement(kE, { xScale: Ke, yScale: We }),
    (k === "Area Chart" && a.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ r.createElement(mE, { xScale: Ke, yScale: We, yMax: B, xMax: W, chartRef: oe, width: W, height: B, handleTooltipMouseOver: Fe, handleTooltipMouseOff: Ht, tooltipData: gt, showTooltip: Rt }),
    (k === "Area Chart" && a.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ r.createElement(gE, { xScale: Ke, yScale: We, yMax: B, xMax: W, chartRef: oe, width: W, height: B, handleTooltipMouseOver: Fe, handleTooltipMouseOff: Ht, tooltipData: gt, showTooltip: Rt }),
    (k === "Bar" || k === "Combo" || O()) && /* @__PURE__ */ r.createElement(
      EE,
      {
        xScale: Ke,
        yScale: We,
        seriesScale: Be,
        xMax: W,
        yMax: B,
        getXAxisData: Ee,
        getYAxisData: he,
        animatedChart: ue,
        visible: ue,
        handleTooltipMouseOver: Fe,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: vt,
        tooltipData: gt,
        showTooltip: Rt,
        chartRef: oe
      }
    ),
    (k === "Line" && !O() || k === "Combo") && /* @__PURE__ */ r.createElement(
      Dh,
      {
        xScale: Ke,
        yScale: We,
        getXAxisData: Ee,
        getYAxisData: he,
        xMax: W,
        yMax: B,
        seriesStyle: a.series,
        handleTooltipMouseOver: Fe,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: vt,
        tooltipData: gt,
        showTooltip: Rt,
        chartRef: oe
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ r.createElement(
      AE,
      {
        showTooltip: Rt,
        tooltipData: gt,
        xScale: Ke,
        yScale: We,
        width: W,
        le: !0,
        height: B,
        xScaleNoPadding: qe,
        chartRef: oe,
        getXValueFromCoordinate: Mt,
        handleTooltipMouseOver: Fe,
        handleTooltipMouseOff: Ht,
        isBrush: !1
      }
    ),
    a.yAxis.anchors && a.yAxis.anchors.map((De) => /* @__PURE__ */ r.createElement(an, { strokeDasharray: v(De.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + a.yAxis.size, y: We(De.value) }, to: { x: W, y: We(De.value) }, display: D.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ r.createElement(
      _E,
      {
        xScale: Ke,
        yScale: We,
        seriesScale: Be,
        width: L,
        height: Y,
        getXAxisData: Ee,
        getYAxisData: he,
        animatedChart: ue,
        visible: ue,
        handleTooltipMouseOver: Fe,
        handleTooltipMouseOff: Ht,
        handleTooltipClick: vt,
        tooltipData: gt,
        showTooltip: Rt,
        chartRef: oe,
        config: a
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(a.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !O() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dh, { xScale: Ke, yScale: We, getXAxisData: Ee, getYAxisData: he, xMax: W, yMax: B, seriesStyle: a.series })),
    a.yAxis.anchors && a.yAxis.anchors.map((De, ut) => {
      let ct = We(De.value);
      if (!De.value)
        return;
      const $ = w === "horizontal" && k === "Bar" ? a.barHeight / 4 : 0;
      if (ct)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            an,
            {
              key: `yAxis-${De.value}--${ut}`,
              strokeDasharray: v(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + cn, y: ct - $ },
              to: { x: L - a.yAxis.rightAxisSize, y: ct - $ }
            }
          )
        );
    }),
    a.xAxis.anchors && a.xAxis.anchors.map((De, ut) => {
      let ct = m;
      w === "horizontal" && (ct = _);
      let $ = Cn(ct) ? Ke(l(De.value, !1)) : Ke(De.value);
      if ($)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            an,
            {
              key: `xAxis-${De.value}--${ut}`,
              strokeDasharray: v(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              fill: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number($) + Number(cn), y: 0 },
              to: { x: Number($) + Number(cn), y: B }
            }
          )
        );
    }),
    a.visualizationType !== "Bar" && a.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(Gf, { xScale: Ke, handleTooltipClick: vt, handleTooltipMouseOff: Ht, handleTooltipMouseOver: Fe, showTooltip: Rt, hideTooltip: hn, tooltipData: gt, yMax: B, width: L }),
    ln && Rt && gt && a.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(an, { from: { x: gt.dataXPosition - 10, y: 0 }, to: { x: gt.dataXPosition - 10, y: B }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    ln && Rt && gt && a.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(an, { from: { x: 0, y: gt.dataYPosition }, to: { x: W, y: gt.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    a.filters && a.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ r.createElement(kt, { x: Number(a.yAxis.size) + Number(W / 2), y: Y / 2 - a.xAxis.padding / 2, textAnchor: "middle" }, a.chartMessage.noData),
    (a.visualizationType === "Bar" || O()) && a.tooltips.singleSeries && a.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: a.yAxis.size ? a.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(an, { from: { x: 0, y: be.y }, to: { x: W, y: be.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (a.visualizationType === "Bar" || O()) && a.tooltips.singleSeries && a.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(an, { from: { x: be.x, y: 0 }, to: { x: be.x, y: B }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    !1
  ), gt && Object.entries(gt.data).length > 0 && on && Rt && gt.dataYPosition && gt.dataXPosition && !a.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${a.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ r.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ r.createElement(Qm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: qt, top: yn }, /* @__PURE__ */ r.createElement("ul", null, typeof gt == "object" && Object.entries(gt.data).map((De, ut) => /* @__PURE__ */ r.createElement(At, { item: De, key: ut }))))), K() && /* @__PURE__ */ r.createElement(Sy, { id: `cdc-open-viz-tooltip-${D.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${a.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Pe })));
};
const YE = (e) => {
  var ee;
  const { width: t, height: n } = e, { transformedData: i, config: a, parseDate: l, formatDate: f, seriesHighlight: d, formatNumber: c, colorScale: h, handleChartAriaLabels: y } = de.useContext(Ct);
  let v = Number(t);
  const { minValue: S, maxValue: R } = Ac(a, i), k = { top: 5, right: 10, bottom: 10, left: 10 }, F = Number(n), w = v - a.runtime.yAxis.size, m = F - k.top - 20, _ = (j) => a.runtime.xAxis.type === "date" ? l(j[a.runtime.originalXAxis.dataKey]).getTime() : j[a.runtime.originalXAxis.dataKey], D = (j, Y) => j[Y];
  let P, O;
  const { max: L, min: U } = a.runtime.yAxis, V = Number(L) >= Number(R), q = Number(U) <= Number(S);
  if (i) {
    let j = Number(U && q ? U : S), Y = Number(L && V ? L : Number.MIN_VALUE);
    if (Y === Number.MIN_VALUE && (Y = R), a.runtime.yAxis.paddingPercent) {
      let B = (Y - j) * a.runtime.yAxis.paddingPercent;
      j -= B, Y += B;
    }
    let W = i.map((B) => _(B));
    a.runtime.horizontal ? (P = Kn({
      domain: [j, Y],
      range: [0, w]
    }), O = a.runtime.xAxis.type === "date" ? Kn({ domain: [Math.min(...W), Math.max(...W)] }) : Bo({ domain: W, padding: 0.5 }), Bo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), O.rangeRound([0, m])) : (j = j < 0 ? j * 1.11 : j, O = Kn({
      domain: [j, Y],
      range: [m - k.bottom, k.top]
    }), P = Bo({
      domain: W,
      range: [k.left, v - k.right]
    }), Bo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, w]
    }));
  }
  const ce = [P.domain()[0], P.domain()[P.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Or, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": y(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((ee = a.runtime.lineSeriesKeys) == null ? void 0 : ee.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((j, Y) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    at,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${j}`,
      opacity: a.legend.behavior === "highlight" && d.length > 0 && d.indexOf(j) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || d.length === 0 || d.indexOf(j) !== -1 ? "block" : "none"
    },
    i.map((W, B) => /* @__PURE__ */ r.createElement(at, { key: `series-${j}-point-${B}` }, /* @__PURE__ */ r.createElement(kt, { display: a.labels ? "block" : "none", x: P(_(W)), y: O(D(W, j)), fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000", textAnchor: "middle" }, c(W[j])))),
    /* @__PURE__ */ r.createElement(
      Kr,
      {
        curve: gc,
        data: i,
        x: (W) => P(_(W)),
        y: (W) => O(D(W, j)),
        stroke: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${Y})`
      }
    ),
    /* @__PURE__ */ r.createElement(KE, { id: `arrow--${Y}`, refX: 2, size: 6, markerEnd: `url(#arrow--${Y})`, strokeOpacity: 1, fillOpacity: 1, fill: h ? h(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000" })
  ), /* @__PURE__ */ r.createElement(
    _u,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: P,
      tickValues: ce,
      tickFormat: (W) => a.xAxis.type === "date" ? f(W) : null,
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
    transformedData: c,
    currentViewport: h
  } = de.useContext(Ct);
  if (!n.legend)
    return null;
  const y = ly(n, f, c, i);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ r.createElement(oy, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: i, seriesHighlight: a, highlight: l, highlightReset: d, currentViewport: h, formatLabels: y });
}), Vd = {
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
}, Mu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01MDQgMjU2YzAgMTM2Ljk5Ny0xMTEuMDQzIDI0OC0yNDggMjQ4UzggMzkyLjk5NyA4IDI1NkM4IDExOS4wODMgMTE5LjA0MyA4IDI1NiA4czI0OCAxMTEuMDgzIDI0OCAyNDh6bS0yNDggNTBjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHoiLz48L3N2Zz4=", GE = ({ name: e }) => {
  var d, c, h, y, v;
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
      let D = {
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.forestPlot[R],
            [k]: F
          }
        }
      };
      i(D);
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
      let D = { ...t, [k]: F };
      a(D), i(D);
      return;
    }
    const w = Array.isArray(t[S]);
    let m = w ? [...t[S], F] : { ...t[S], [k]: F };
    R !== null && (w ? (m = [...t[S]], m[R] = { ...m[R], [k]: F }) : typeof F == "string" ? m[R] = F : m = { ...t[S], [R]: { ...t[S][R], [k]: F } });
    let _ = { ...t, [S]: m };
    a(_), i(_);
  };
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(Mu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(
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
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
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
  ))), /* @__PURE__ */ r.createElement(lt, { value: ((h = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : h.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
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
  )), /* @__PURE__ */ r.createElement(Je, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
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
}, qo = r.createContext({}), qE = (e) => {
  const { updateConfig: t, config: n, rawData: i } = de.useContext(Ct), { getColumns: a, selectComponent: l } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], d = (c, h, y) => {
    let v = [...n.series];
    if (v[c][y] = h, y === "type" && h === "Bar" && (v[c].axis = "Left"), v[c].type === "Forecasting") {
      let S = Array.from(new Set(i.map((k) => k[v[c].dataKey]))), R = [];
      S.forEach((k) => {
        R.push({ key: k });
      }), v[c].stages = R, v[c].stageColumn = v[c].dataKey;
    }
    t({ ...n, series: v });
  };
  return /* @__PURE__ */ r.createElement(qo.Provider, { value: { updateSeries: d, supportedRightAxisTypes: f, getColumns: a, selectComponent: l } }, e.children);
}, ZE = (e) => {
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((y) => y.includes(i.type)) && (c = !0), c;
  })())
    return;
  const f = (c, h) => {
    let y = [...t.series];
    y[c].lineType = h, n({ ...t, series: y });
  };
  let d = [];
  return Object.keys($u).map((c) => d.push($u[c])), /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: i.lineType ? i.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        f(a, c.target.value);
      },
      options: d
    }
  );
}, QE = (e) => {
  const { config: t } = de.useContext(Ct), { updateSeries: n } = de.useContext(qo), { index: i, series: a } = e, l = () => {
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
  const { config: t, updateConfig: n, rawData: i } = de.useContext(Ct), { updateSeries: a, getColumns: l } = de.useContext(qo), { index: f, series: d } = e;
  return /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: d.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let h = [], y = new Set(i == null ? void 0 : i.map((S) => S[c.target.value]));
        y = Array.from(y), y = y.filter((S) => S !== void 0), y.forEach((S) => h.push({ key: S }));
        const v = [...t.series];
        v[f] = { ...v[f], stages: h, stageColumn: c.target.value }, n({
          ...t,
          series: v
        });
      },
      options: l(!1)
    }
  );
}, ek = (e) => {
  const { config: t, rawData: n } = de.useContext(Ct), { updateSeries: i } = de.useContext(qo), { index: a, series: l } = e;
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
  const { config: t } = de.useContext(Ct), { updateSeries: n, supportedRightAxisTypes: i } = de.useContext(qo), { index: a, series: l } = e;
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
      var c, h, y, v;
      return /* @__PURE__ */ r.createElement(
        Ma,
        {
          key: `${f}--${d}`,
          initial: "Select an option",
          value: (h = (c = t.series) == null ? void 0 : c[i].stages) != null && h[d].color ? (v = (y = t.series) == null ? void 0 : y[i].stages) == null ? void 0 : v[d].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (S) => {
            const R = [...t.series], k = R[i].stages;
            k[d].color = S.target.value, R[i] = { ...R[i], stages: k }, n({
              ...t,
              series: R
            });
          },
          options: Object.keys(Iu)
        }
      );
    });
}, rk = (e) => {
  var f;
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e, { getColumns: l } = de.useContext(qo);
  if (i.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (f = i == null ? void 0 : i.confidenceIntervals) == null ? void 0 : f.map((d, c) => {
      const h = d.showInTooltip ? d.showInTooltip : !1, y = (v, S, R) => {
        v.preventDefault();
        let k = [...t.series];
        k[S].confidenceIntervals[R].showInTooltip = !h, n({
          ...t,
          series: k
        });
      };
      return /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nn, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ r.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const S = [...t.series[a].confidenceIntervals];
            S.splice(c, 1);
            const R = [...t.series];
            R[a] = { ...R[a], confidenceIntervals: [...S] }, n({
              ...t,
              series: R
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => y(v, a, c) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, h && /* @__PURE__ */ r.createElement(jh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: h || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        Ma,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const S = [...t.series[a].confidenceIntervals];
            S[c].low = v.target.value;
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
          value: t.series[a].confidenceIntervals[c].high ? t.series[a].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const S = [...t.series[a].confidenceIntervals];
            S[c].high = v.target.value;
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
          let c = null;
          t.series[a].confidenceIntervals ? c = [...t.series[a].confidenceIntervals] : c = [];
          const h = [...t.series];
          h[a] = { ...h[a], confidenceIntervals: [...c, { high: "", low: "" }] }, n({
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
  const f = (d, c, h, y) => {
    let v = [...i.series], S = { ...i.runtime.seriesLabels };
    v[d].weight = c && Math.max(Number(h), Math.min(Number(y), Number(c))), S[v[d].dataKey] = v[d].weight ? v[d].weight : v[d].dataKey;
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
  const f = (d, c) => {
    let h = [...i.series], y = { ...i.runtime.seriesLabels };
    h[d].name = c, y[h[d].dataKey] = h[d].name ? h[d].name : h[d].dataKey;
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
  const l = (f) => {
    let d = [...i.series];
    d[f].tooltip && d[f].tooltip, d[f].tooltip = !d[f].tooltip, a({
      ...i,
      series: d
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(jh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, lk = (e) => {
  const { config: t, updateConfig: n } = de.useContext(Ct), { series: i, index: a } = e, l = (d) => {
    let c = [...t.series], h = -1;
    for (let y = 0; y < c.length; y++)
      if (c[y].dataKey === d) {
        h = y;
        break;
      }
    if (h !== -1) {
      c.splice(h, 1);
      let y = { ...t, series: c };
      c.length === 0 && delete y.series, n(y);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, f = (d, c, h) => {
    d.preventDefault(), l(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: (d) => f(d, i) }, "Remove");
}, Cy = (e) => {
  const { config: t } = de.useContext(Ct), { series: n, getItemStyle: i, sortableItemStyles: a, chartsWithOptions: l, index: f } = e;
  return /* @__PURE__ */ r.createElement(Dy, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: f }, (d, c) => /* @__PURE__ */ r.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: i(c.isDragging, d.draggableProps.style, a), ref: d.innerRef, ...d.draggableProps, ...d.dragHandleProps }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(Nn, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(dt, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(jr.Button.Remove, { series: n, index: f }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(jr.Input.Name, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Input.Weight, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.SeriesType, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.AxisPosition, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.LineType, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.ForecastingColor, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Dropdown.ConfidenceInterval, { series: n, index: f }), /* @__PURE__ */ r.createElement(jr.Checkbox.DisplayInTooltip, { series: n, index: f }))))));
}, sk = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: i, chartsWithOptions: a } = e;
  return t.map((l, f) => /* @__PURE__ */ r.createElement(Cy, { getItemStyle: n, sortableItemStyles: i, chartsWithOptions: a, series: l, index: f, key: `series-list-${f}` }));
}, jr = {
  Wrapper: qE,
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
  let n = (c, h, y) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[y][c] = h, t({ ...e, regions: v });
  }, i = (c, h, y, v, S) => n(y, v, S), a = (c) => {
    let h = [];
    e.regions && (h = [...e.regions]), h.splice(c, 1), t({ ...e, regions: h });
  }, l = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const f = ["Fixed", "Previous Days"], d = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: c, color: h, from: y, to: v, background: S, range: R = "Custom" }, k) => {
    var F;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${k}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (w) => {
          w.preventDefault(), a(k);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Je, { value: c, label: "Region Label", fieldName: "label", i: k, updateField: i }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(Je, { value: h, label: "Text Color", fieldName: "color", updateField: (w, m, _, D) => n(_, D, k) }), /* @__PURE__ */ r.createElement(Je, { value: S, label: "Background", fieldName: "background", updateField: (w, m, _, D) => n(_, D, k) })), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[k].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (w) => {
          if (w.target.value !== "" && w.target.value !== "Select") {
            const m = [...e.regions];
            m[k].fromType = w.target.value, t({
              ...e,
              regions: m
            });
          }
          w.target.value = "";
        },
        options: f
      }
    ), (e.regions[k].fromType === "Fixed" || e.regions[k].fromType === "Previous Days" || !e.regions[k].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Je,
      {
        value: y,
        label: e.regions[k].fromType === "Fixed" || !((F = e.regions[k]) != null && F.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (w, m, _, D) => n(_, D, k),
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[k].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (w) => {
          if (w.target.value !== "" && w.target.value !== "Select") {
            const m = [...e.regions];
            m[k].toType = w.target.value, t({
              ...e,
              regions: m
            });
          }
          w.target.value = "";
        },
        options: d
      }
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ r.createElement(Je, { value: v, label: "To Value", fieldName: "to", updateField: (w, m, _, D) => n(_, D, k) }));
  }), !e.regions && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (c) => {
        c.preventDefault(), l();
      }
    },
    "Add Region"
  ));
}), ck = ({ name: e }) => {
  const { visSupportsRegions: t } = ks(), { config: n, updateConfig: i } = de.useContext(Ct);
  return t() ? /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, e)), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(uk, { config: n, updateConfig: i }))) : null;
}, Zf = de.createContext(null), Qf = () => {
  const e = de.useContext(Zf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, dk = (e) => {
  const { config: t } = de.useContext(Ct), { updateField: n } = Qf(), { enabledChartTypes: i, visHasNumbersOnBars: a, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: f, visSupportsChartHeight: d, visSupportsSuperTitle: c, visSupportsFootnotes: h } = ks(), { visualizationType: y, visualizationSubType: v, barStyle: S } = t, R = () => (y === "Bar" || y === "Deviation Bar") && v !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(Rn, null, " ", /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "General")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(Lt, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: i }), d() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: n
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ r.createElement(Lt, { value: v || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), y === "Area Chart" && v === "stacked" && /* @__PURE__ */ r.createElement(Lt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys($u) }), y === "Bar" && /* @__PURE__ */ r.createElement(Lt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ r.createElement(Lt, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.isLollipopChart ? "lollipop" : S || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: n,
      options: R(),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Lt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ r.createElement(lt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : f() && /* @__PURE__ */ r.createElement(
    lt,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display "N/A" on the Date/Category Axis as an indication of missing or undefined data values.'))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the Date/Category Axis where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: n
    }
  )), y === "Pie" && /* @__PURE__ */ r.createElement(Lt, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ r.createElement(
    lt,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(lt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), c() && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), h() && /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, fk = (e) => {
  const { config: t } = de.useContext(Ct), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: i } = Qf();
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, e.name)), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: i,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: i }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: i }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: i }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: i }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: i })));
}, pk = (e, t) => {
  let n = [], i = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(zu).filter((f) => l ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const l = [], f = [];
    for (const d in dr) {
      const c = d.startsWith("sequential"), h = d.startsWith("qualitative"), y = d.endsWith("reverse");
      c && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && l.push(d), h && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && f.push(d);
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
  const { config: t, updateConfig: n, colorPalettes: i, twoColorPalette: a } = de.useContext(Ct), { visual: l } = t, { setLollipopShape: f, updateField: d } = Qf(), { visHasBarBorders: c, visCanAnimate: h, visSupportsNonSequentialPallete: y, headerColors: v, visSupportsTooltipOpacity: S, visSupportsTooltipLines: R, visSupportsBarSpace: k, visSupportsBarThickness: F, visHasDataCutoff: w, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: _ } = ks(), { twoColorPalettes: D, sequential: P, nonSequential: O } = pk(t, n), L = (V, q) => {
    if (console.log("value", q), V === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: q
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [V]: {
            ...t.sankey[V],
            default: q
          }
        }
      });
  };
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Visual")), /* @__PURE__ */ r.createElement(On, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (V) => {
        f(V.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: d, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: d, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Lt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: d, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(lt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: d })), /* @__PURE__ */ r.createElement(Lt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: d, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ r.createElement(Lt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: d, options: ["true", "false"] }), h() && /* @__PURE__ */ r.createElement(lt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: d }), (((U = t.series) == null ? void 0 : U.some((V) => V.type === "Line" || V.type === "dashed-lg" || V.type === "dashed-sm" || V.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: d, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: d, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, v.map((V) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: V,
      key: V,
      onClick: (q) => {
        q.preventDefault(), n({ ...t, theme: V });
      },
      className: t.theme === V ? "selected " + V : V
    }
  )))), (y() || y()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), _() && /* @__PURE__ */ r.createElement(sp, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.isPaletteReversed }), m() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, P.map((V) => {
    const q = {
      backgroundColor: i[V][2]
    }, ce = {
      backgroundColor: i[V][3]
    }, ee = {
      backgroundColor: i[V][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: V,
        key: V,
        onClick: (j) => {
          j.preventDefault(), n({ ...t, palette: V });
        },
        className: t.palette === V ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: q }),
      /* @__PURE__ */ r.createElement("span", { style: ce }),
      /* @__PURE__ */ r.createElement("span", { style: ee })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, O.map((V) => {
    const q = {
      backgroundColor: i[V][2]
    }, ce = {
      backgroundColor: i[V][4]
    }, ee = {
      backgroundColor: i[V][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: V,
        key: V,
        onClick: (j) => {
          j.preventDefault(), n({ ...t, palette: V });
        },
        className: t.palette === V ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: q }),
      /* @__PURE__ */ r.createElement("span", { style: ce }),
      /* @__PURE__ */ r.createElement("span", { style: ee })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (V) => L("nodeColor", V.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (V) => L("storyNodeFontColor", V.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (V) => L("linkColor", V.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(sp, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: d, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, D.map((V) => {
    const q = {
      backgroundColor: a[V][0]
    }, ce = {
      backgroundColor: a[V][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: V,
        key: V,
        onClick: (ee) => {
          ee.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: V } });
        },
        className: t.twoColor.palette === V ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: q }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: ce })
    );
  }))), w() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: d,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), F() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(Je, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: d, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Je, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: d }), k() && /* @__PURE__ */ r.createElement(Je, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: d, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(lt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: d }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: d })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(lt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: d }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(lt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: d }), R() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: d }), /* @__PURE__ */ r.createElement(lt, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: d })), S() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (V) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: V.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(lt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: d }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (V) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: V.target.value
        }
      })
    }
  ))));
}, mk = () => {
  var d, c;
  const { config: e, updateConfig: t } = de.useContext(Ct), n = (d = e.data) == null ? void 0 : d[0], { updateField: i } = de.useContext(Zf);
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
  return /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Sankey Settings")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: h, segmentTextBefore: y, segmentTextAfter: v }, S) => /* @__PURE__ */ r.createElement("div", { key: S, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ r.createElement("label", null, "Story Node Text", /* @__PURE__ */ r.createElement("input", { type: "text", value: h, fieldName: "StoryNode", label: "StoryNode", onChange: (R) => a("StoryNode", R.target.value, S) })), /* @__PURE__ */ r.createElement("label", null, "Story Text Before", /* @__PURE__ */ r.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (R) => a("segmentTextBefore", R.target.value, S) })), /* @__PURE__ */ r.createElement("label", null, "Story Text After", /* @__PURE__ */ r.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (R) => a("segmentTextAfter", R.target.value, S) })), /* @__PURE__ */ r.createElement(fs, { onClick: (R) => f(S), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((c = n == null ? void 0 : n.storyNodeText) == null ? void 0 : c.length) < 3 && /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (h) => {
        h.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ r.createElement(lt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: i })));
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
    var k, F, w;
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
      xKey: n.xAxis.type === "date" ? new Date((w = (F = n == null ? void 0 : n.data) == null ? void 0 : F[0]) == null ? void 0 : w[n.xAxis.dataKey]).getTime() : n.xAxis.type === "categorical" ? "1/15/2016" : "",
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
  }, c = (y) => {
    const v = n.annotations.filter((S, R) => R !== y);
    t({
      ...n,
      annotations: v
    });
  };
  return /* @__PURE__ */ r.createElement(mu, null, /* @__PURE__ */ r.createElement(mu.Section, { title: e.name }, (n == null ? void 0 : n.annotations) && (n == null ? void 0 : n.annotations.map((y, v) => {
    var S, R, k, F, w, m, _, D, P;
    return /* @__PURE__ */ r.createElement(mu, null, /* @__PURE__ */ r.createElement(mu.Section, { title: y.text ? y.text.substring(0, 15) + "..." : `Annotation ${v + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: y.text, onChange: (O) => f(O.target.value, "text", v) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].opacity = O.target.value, t({
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
        onClick: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].edit.subject = O.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Label", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (m = (w = n == null ? void 0 : n.annotations[v]) == null ? void 0 : w.edit) == null ? void 0 : m.label,
        onClick: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].edit.label = O.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Connection Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].connectionType = O.target.value, t({
            ...n,
            annotations: L
          });
        },
        value: (_ = n == null ? void 0 : n.annotations[v]) == null ? void 0 : _.connectionType
      },
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((O, L) => /* @__PURE__ */ r.createElement("option", { key: O, value: O }, O))
    )), y.connectionType === "curve" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Curve Control", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((D = n == null ? void 0 : n.annotations[v]) == null ? void 0 : D.bezier) || 0,
        onChange: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].bezier = O.target.value, t({
            ...n,
            annotations: L
          });
        }
      }
    ))), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].marker = O.target.value, t({
            ...n,
            annotations: L
          });
        }
      },
      ["circle", "arrow"].map((O, L) => /* @__PURE__ */ r.createElement("option", null, O))
    )), /* @__PURE__ */ r.createElement("label", null, "Snap to Nearest Point", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: (P = n == null ? void 0 : n.annotations[v]) == null ? void 0 : P.snapToNearestPoint,
        onClick: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].snapToNearestPoint = O.target.checked, t({
            ...n,
            annotations: L
          });
        }
      }
    )), y.snapToNearestPoint && /* @__PURE__ */ r.createElement("label", null, "Associated Series:", /* @__PURE__ */ r.createElement(
      "select",
      {
        onChange: (O) => {
          const L = ar.cloneDeep(n == null ? void 0 : n.annotations);
          L[v].seriesKey = O.target.value, t({
            ...n,
            annotations: L
          });
        }
      },
      /* @__PURE__ */ r.createElement("option", { key: "none", value: "none" }, "None"),
      l(!1).map((O, L) => /* @__PURE__ */ r.createElement("option", null, O))
    )), /* @__PURE__ */ r.createElement(fs, { className: "warn btn-warn btn btn-remove delete", onClick: () => c(v) }, "Delete Annotation"))));
  })), ((h = n == null ? void 0 : n.annotations) == null ? void 0 : h.length) < 3 && /* @__PURE__ */ r.createElement(fs, { onClick: d }, "Add Annotation")));
}, Na = {
  ForestPlot: GE,
  Series: jr,
  Regions: ck,
  General: dk,
  BoxPlot: fk,
  Visual: hk,
  Sankey: mk,
  Annotate: yk
};
const gk = ({ config: e, updateConfig: t, data: n }) => {
  var w, m, _;
  const i = e.visualizationType === "Combo", a = ((w = e.runtime.lineSeriesKeys) == null ? void 0 : w.length) > 0, l = ((m = e.runtime.barSeriesKeys) == null ? void 0 : m.length) > 0, f = i && a, d = i && l, c = () => ar.uniq(ar.flatMap(n, ar.keys)), h = () => e.visualizationType === "Line" || f ? ["effect", "suppression"] : ["suppression"], y = {
    "Dashed Small": "- - -",
    "Dashed Medium": "– –",
    "Dashed Large": "— –",
    "Open Circles": "◯"
  }, v = (D) => {
    if (e.visualizationType === "Line" || i) {
      const P = Object.keys(y);
      return D === "suppression" ? P.slice(0, -1) : P;
    }
  }, S = () => {
    if (e.visualizationType === "Bar" || d)
      return Object.keys(hp);
  };
  let R = (D) => {
    let P = [];
    e.preliminaryData && (P = [...e.preliminaryData]), P.splice(D, 1), t({ ...e, preliminaryData: P });
  }, k = () => {
    const D = e.visualizationType === "Line" ? "effect" : "suppression";
    let P = e.preliminaryData ? [...e.preliminaryData] : [];
    const O = {
      type: D,
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
    P.push(O), t({ ...e, preliminaryData: P });
  }, F = (D, P, O) => {
    let L = [];
    e.preliminaryData && (L = [...e.preliminaryData]), L[O][D] = P, D === "symbol" && (L[O].iconCode = hp[P]), D === "style" && (L[O].lineCode = y[P]), t({ ...e, preliminaryData: L });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && ((_ = e.preliminaryData) == null ? void 0 : _.map(({ column: D, displayLegend: P, displayTable: O, displayTooltip: L, label: U, seriesKey: V, style: q, symbol: ce, type: ee, value: j, hideBarSymbol: Y, hideLineStyle: W }, B) => {
    var ie, ae;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${B}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, " ", ee === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (se) => {
          se.preventDefault(), R(B);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Lt, { value: ee, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (se, Q, K, ne) => F(K, ne, B), options: h() }), ee === "suppression" ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: D,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (se, Q, K, ne) => F(K, ne, B),
        options: (ie = e.runtime) == null ? void 0 : ie.seriesKeys
      }
    ), /* @__PURE__ */ r.createElement(Je, { value: j, fieldName: "value", label: "Suppressed Data  Value", updateField: (se, Q, K, ne) => F(K, ne, B) }), (f || e.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: q,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (se, Q, K, ne) => F(K, ne, B),
        options: v(ee)
      }
    ), /* @__PURE__ */ r.createElement(lt, { value: W, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (se, Q, K, ne) => F(K, ne, B) })), (d || e.visualizationType === "Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: ce,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (se, Q, K, ne) => F(K, ne, B),
        options: S()
      }
    ), /* @__PURE__ */ r.createElement(lt, { value: Y, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (se, Q, K, ne) => F(K, ne, B) })), /* @__PURE__ */ r.createElement(
      Je,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: U || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (se, Q, K, ne) => F(K, ne, B)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: L,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (se, Q, K, ne) => F(K, ne, B)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: P,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (se, Q, K, ne) => F(K, ne, B)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: O,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (se, Q, K, ne) => F(K, ne, B)
      }
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: V, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (se, Q, K, ne) => F(K, ne, B), options: e.runtime.lineSeriesKeys ?? ((ae = e.runtime) == null ? void 0 : ae.seriesKeys) }), /* @__PURE__ */ r.createElement(Lt, { value: D, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (se, Q, K, ne) => F(K, ne, B), options: c() }), /* @__PURE__ */ r.createElement(Je, { value: j, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (se, Q, K, ne) => F(K, ne, B) }), /* @__PURE__ */ r.createElement(Lt, { value: q, initial: "Select", fieldName: "style", label: "Style", updateField: (se, Q, K, ne) => F(K, ne, B), options: v(ee) }), /* @__PURE__ */ r.createElement(Je, { value: U, fieldName: "label", label: "Label", placeholder: "", updateField: (se, Q, K, ne) => F(K, ne, B) })));
  })), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: k, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, vk = () => {
  var Zt, En, un, kn, In, Yn, Zn, Xn, g, C, I, X, Se, ge, Le, je, rt, mt;
  const {
    config: e,
    updateConfig: t,
    tableData: n,
    transformedData: i,
    loading: a,
    colorScale: l,
    colorPalettes: f,
    twoColorPalette: d,
    unfilteredData: c,
    excludedData: h,
    isDashboard: y,
    setParentConfig: v,
    missingRequiredSections: S,
    isDebug: R,
    setFilteredData: k,
    lineOptions: F,
    rawData: w,
    highlight: m,
    highlightReset: _,
    dimensions: D
  } = de.useContext(Ct), { minValue: P, maxValue: O, existPositiveValue: L, isAllLine: U } = Ac(e, c), V = { data: i, config: e }, { leftMax: q, rightMax: ce } = Ty(V), {
    headerColors: ee,
    visSupportsTooltipLines: j,
    visSupportsNonSequentialPallete: Y,
    visSupportsSequentialPallete: W,
    visSupportsReverseColorPalette: B,
    visHasLabelOnData: ie,
    visHasNumbersOnBars: ae,
    visHasAnchors: se,
    visHasBarBorders: Q,
    visHasDataCutoff: K,
    visHasSelectableLegendValues: ne,
    visCanAnimate: ue,
    visHasLegend: ze,
    visHasLegendAxisAlign: be,
    visHasBrushChart: ye,
    visSupportsDateCategoryAxis: Pe,
    visSupportsValueAxisMin: oe,
    visSupportsValueAxisMax: Ie,
    visSupportsDateCategoryAxisLabel: Ee,
    visSupportsDateCategoryAxisLine: he,
    visSupportsDateCategoryAxisTicks: Te,
    visSupportsDateCategoryTickRotation: J,
    visSupportsDateCategoryNumTicks: Me,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Xe,
    visSupportsFilters: Ze,
    visSupportsPreliminaryData: et,
    visSupportsValueAxisGridLines: Ue,
    visSupportsValueAxisLine: Et,
    visSupportsValueAxisTicks: Ke,
    visSupportsValueAxisLabels: We,
    visSupportsBarSpace: Be,
    visSupportsBarThickness: $e,
    visSupportsFootnotes: ft,
    visSupportsSuperTitle: qe,
    visSupportsDataCutoff: it,
    visSupportsChartHeight: yt,
    visSupportsLeftValueAxis: ht,
    visSupportsTooltipOpacity: _t,
    visSupportsRankByValue: tn,
    visSupportsResponsiveTicks: Xt,
    visSupportsDateCategoryHeight: gt,
    visHasDataSuppression: Rt
  } = ks();
  de.useEffect(() => {
    let re = [];
    e.series && (re = e.series.map((le) => ({
      ...le,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: re
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
  const { hasRightAxis: hn } = qf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), on = (re, le) => ({
    ...le
  }), qt = {
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
  }, yn = (re) => {
    re.orientation === "horizontal" && (re.labels = !1), re.table.show === void 0 && (re.table.show = !y), re.visualizationType === "Combo" && (re.orientation = "vertical"), Cn(re.xAxis) && !re.xAxis.padding && (re.xAxis.padding = 6), re.visualizationType === "Line" && (re.visualizationSubType = "regular", re.barStyle = "flat", re.isLollipopChart = !1);
  }, Fe = (re, le, me, Re) => {
    if (R && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", re, le, me, Re), re === "boxplot" && le === "legend") {
      t({
        ...e,
        [re]: {
          ...e[re],
          [le]: {
            ...e.boxplot[le],
            [me]: Re
          }
        }
      });
      return;
    }
    if (re === "boxplot" && le === "labels") {
      t({
        ...e,
        [re]: {
          ...e[re],
          [le]: {
            ...e.boxplot[le],
            [me]: Re
          }
        }
      });
      return;
    }
    const xt = ($n) => $n === 0 ? !0 : !!$n;
    if (re === "columns" && xt(le) && xt(me)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [le]: {
            ...e.columns[le],
            [me]: Re
          }
        }
      });
      return;
    }
    if (re === null && le === null) {
      xt(me) || console.error("fieldName is required");
      let $n = { ...e, [me]: Re };
      yn($n), t($n);
      return;
    }
    const gn = Array.isArray(e[re]);
    let wn = gn ? [...e[re], Re] : { ...e[re], [me]: Re };
    xt(le) && (gn ? (wn = [...e[re]], wn[le] = { ...wn[le], [me]: Re }) : typeof Re == "string" ? wn[le] = Re : xt(me) && (wn = { ...e[re], [le]: { ...e[re][le], [me]: Re } }));
    let fr = { ...e, [re]: wn };
    yn(fr), t(fr);
  }, [vt, Ht] = de.useState(!0), [It, At] = de.useState(!1);
  if (a)
    return null;
  de.useEffect(() => {
    var re;
    (re = e.general) != null && re.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const xn = (re) => {
    t({
      ...e,
      lollipopShape: re
    });
  }, Mt = (re) => {
    let le = e.series ? [...e.series] : [], me = Array.from(new Set(i.map((xt) => xt[re]))), Re = [];
    me.forEach((xt) => {
      Re.push({ key: xt });
    }), e.visualizationType === "Forecasting" ? le.push({ dataKey: re, type: e.visualizationType, stages: Re, stageColumn: re, axis: "Left", tooltip: !0 }) : le.push({ dataKey: re, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: le });
  }, ln = (re) => {
    const le = e.series[0].dataKey, me = i.sort((xt, gn) => xt[le] - gn[le]), Re = re === "asc" ? me : me.reverse();
    t({ ...e }, Re);
  }, cn = (re) => {
    let le = [...e.exclusions.keys];
    le.push(re);
    let me = { ...e.exclusions, keys: le };
    t({ ...e, exclusions: me });
  }, Tn = (re) => {
    let le = -1, me = [...e.exclusions.keys];
    for (let Re = 0; Re < me.length; Re++)
      if (me[Re] === re) {
        le = Re;
        break;
      }
    if (le !== -1) {
      me.splice(le, 1);
      let Re = { ...e.exclusions, keys: me }, xt = { ...e, exclusions: Re };
      me.length === 0 && delete xt.exclusions.keys, t(xt);
    }
  }, Jt = (re = !0) => {
    let le = {};
    if (c.forEach((me) => {
      Object.keys(me).forEach((Re) => le[Re] = !0);
    }), re) {
      const { lower: me, upper: Re } = e.confidenceKeys || {};
      Object.keys(le).forEach((xt) => {
        (e.series && e.series.filter((gn) => gn.dataKey === xt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(xt) && (me && Re || me || Re) && xt !== me && xt !== Re) && delete le[xt];
      });
    }
    return Object.keys(le);
  }, jt = (re) => {
    if (!re)
      return [];
    const le = /* @__PURE__ */ new Set();
    for (let me = 0; me < re.length; me++)
      for (const [Re] of Object.entries(re[me]))
        le.add(Re);
    return Array.from(le);
  }, Pn = (re, le = !1) => {
    let me = [];
    return h.forEach((Re) => {
      me.push(Re[re]);
    }), le ? [...new Set(me)] : me;
  }, Mn = () => {
    Ht(!vt), t({
      ...e,
      showEditorPanel: !vt
    });
  }, Hn = () => {
    let re = JSON.parse(JSON.stringify(e));
    return S() === !1 && delete re.newViz, delete re.runtime, re;
  };
  de.useEffect(() => {
    if (v) {
      const re = Hn();
      v(re);
    }
  }, [e]), de.useEffect(() => {
    const re = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], le = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: le
      },
      yAxis: {
        ...e.yAxis,
        anchors: re
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
    const re = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, re.map((le, me) => /* @__PURE__ */ r.createElement("li", { key: le }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": le }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, le)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => Tn(le) }, "×"))));
  }, [e]), zn = (re, le) => {
    let me = e.series, [Re] = me.splice(re, 1);
    me.splice(le, 0, Re), t({ ...e, series: me });
  };
  e.isLollipopChart && ((Zt = e == null ? void 0 : e.series) == null ? void 0 : Zt.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((En = e == null ? void 0 : e.series) == null ? void 0 : En.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((un = e == null ? void 0 : e.series) == null ? void 0 : un.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((kn = e == null ? void 0 : e.series) == null ? void 0 : kn.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Wn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [An, Sn] = de.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), De = () => {
    const re = e[Wn].max, le = e[Wn].rightMax;
    let me = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (re && parseFloat(re) < parseFloat(O) && L):
          me = "Max value must be more than " + O;
          break;
        case (re && parseFloat(re) < 0 && !L):
          me = "Value must be more than or equal to 0";
          break;
        default:
          me = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (re && parseFloat(re) < q):
          me = "Max value must be more than " + q;
          break;
        case (le && parseFloat(le) < ce):
          Re = "Max value must be more than " + ce;
          break;
        case (re && parseFloat(re) < 0 && !L):
          me = "Value must be more than or equal to 0";
          break;
        default:
          me = "";
      }
    Sn((xt) => ({ ...xt, maxMsg: me, rightMaxMessage: Re }));
  }, ut = () => {
    const re = parseFloat(e[Wn].min);
    let le = Number(P), me = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && re < 0):
        me = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && re > le):
        me = "Value should not exceed " + P;
        break;
      case (e.visualizationType === "Combo" && U && re > le):
        me = "Value should not exceed " + P;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !U) && le > 0 && re > 0):
        me = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && re >= Math.min(le, e.xAxis.target)):
        me = "Value must be less than " + Math.min(le, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && re && le < 0 && re > le):
        me = "Value should not exceed " + P;
        break;
      default:
        me = "";
    }
    Sn((Re) => ({ ...Re, minMsg: me }));
  };
  de.useEffect(() => {
    ut(), De();
  }, [P, O, e]);
  const ct = ((In = e == null ? void 0 : e.dataKey) == null ? void 0 : In.includes("http://")) || ((Yn = e == null ? void 0 : e.dataKey) == null ? void 0 : Yn.includes("https://")), $ = () => {
    var re, le;
    if (R !== void 0 && R && !((re = e == null ? void 0 : e.xAxis) != null && re.dataKey)) {
      let me = Jt(!1);
      if (me.includes("Date"))
        return "Date";
      if (me.includes("Race"))
        return "Race";
      if (me.includes("Month"))
        return "Month";
    }
    return ((le = e == null ? void 0 : e.xAxis) == null ? void 0 : le.dataKey) || "";
  }, Ne = () => {
    if (R !== void 0 && R && Jt(!1).length > 0) {
      let re = Jt(!1).filter((le) => le !== $());
      if (re.length > 0)
        return re[0];
    }
    return "";
  };
  if (R && !e.xAxis.dataKey && (e.xAxis.dataKey = $()), R && ((Zn = e == null ? void 0 : e.series) == null ? void 0 : Zn.length) === 0) {
    let re = Ne();
    re !== "" && Mt(re), R && console.log("### COVE DEBUG: Chart: Setting default datacol=", re);
  }
  const Ge = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Ve = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Xn = e.data) == null ? void 0 : Xn[0]) || []).map((le) => {
      const me = e == null ? void 0 : e.series.some((Re) => Re.dataKey === le);
      if (le !== e.xAxis.dataKey && !me)
        return Ve.push(
          /* @__PURE__ */ r.createElement("option", { value: le, key: le }, le)
        );
    });
    let re = {};
    e.data.forEach((le) => {
      Object.keys(le).forEach((me) => {
        re[me] = re[me] || [];
        const Re = typeof le[me] == "number" ? le[me].toString() : le[me];
        re[me].indexOf(Re) === -1 && re[me].push(Re);
      });
    });
  }
  if (!e.data && i) {
    if (!i[0])
      return;
    Object.keys(i[0]).map((le) => {
      const me = i.some((Re) => Re.dataKey === le);
      if (le !== e.xAxis.dataKey && !me)
        return Ve.push(
          /* @__PURE__ */ r.createElement("option", { value: le, key: le }, le)
        );
    });
    let re = {};
    i.forEach((le) => {
      Object.keys(le).forEach((me) => {
        re[me] = re[me] || [];
        const Re = typeof le[me] == "number" ? le[me].toString() : le[me];
        re[me].indexOf(Re) === -1 && re[me].push(Re);
      });
    });
  }
  const ot = (re) => {
    const le = ar.cloneDeep(e.columns);
    delete le[re], t({
      ...e,
      columns: le
    });
  }, nt = async (re, le, me) => {
    switch (le) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [re]: {
              ...e.columns[re],
              [le]: me
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [re]: {
              ...e.columns[re],
              [le]: me
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: St,
    highlightedSeriesValues: Dt,
    handleUpdateHighlightedBar: Qe,
    handleAddNewHighlightedBar: Kt,
    handleRemoveHighlightedBar: zt,
    handleUpdateHighlightedBarColor: Ft,
    handleHighlightedBarLegendLabel: pt,
    handleUpdateHighlightedBorderWidth: Nt
  } = bc(e, t), Tt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, Yt = () => {
    const re = i.map((le) => le[e.legend.colorCode]);
    return Tt ? re : Jt(!1).filter((le) => le !== e.xAxis.dataKey);
  }, Wt = (re) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: re } });
  }, dn = (re, le, me) => {
    var gn;
    const Re = { ...e[re], [le]: me }, xt = { ...e, [re]: Re };
    me === "highlight" && ((gn = e.legend.seriesHighlight) != null && gn.length) && (xt.legend.seriesHighlight.length = 0), t(xt);
  }, sn = (re, le, me) => {
    const Re = { ...e.xAxis[re] };
    Re[le] = me;
    const xt = { ...e, xAxis: { ...e.xAxis, [re]: Re } };
    t(xt);
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
    updateField: Fe,
    warningMsg: An,
    highlightedBarValues: St,
    handleHighlightedBarLegendLabel: pt,
    handleUpdateHighlightedBar: Qe,
    handleRemoveHighlightedBar: zt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Dt,
    handleUpdateHighlightedBorderWidth: Nt,
    handleUpdateHighlightedBarColor: Ft,
    setLollipopShape: xn
  };
  return /* @__PURE__ */ r.createElement(Zf.Provider, { value: nn }, /* @__PURE__ */ r.createElement(Or, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(jd.Sidebar, { displayPanel: vt, isDashboard: y, title: "Configure Chart", onBackClick: Mn }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Na.General, { name: "General" }), /* @__PURE__ */ r.createElement(Na.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ r.createElement(Na.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(Mu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(On, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && Mt(re.target.value), re.target.value = "";
      },
      options: Jt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(Na.Series.Wrapper, { getColumns: Jt }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(Ny, { onDragEnd: ({ source: re, destination: le }) => zn(re.index, le.index) }, /* @__PURE__ */ r.createElement(Oy, { droppableId: "filter_order" }, (re) => /* @__PURE__ */ r.createElement("ul", { ...re.droppableProps, className: "series-list", ref: re.innerRef }, /* @__PURE__ */ r.createElement(Na.Series.List, { series: e.series, getItemStyle: on, sortableItemStyles: qt, chartsWithOptions: Ge }), re.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Fe, initial: "Select", options: Jt() }), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Fe, initial: "Select", options: Jt() })), tn() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Lt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (re) => ln(re.target.value), options: ["asc", "desc"] }), et() && /* @__PURE__ */ r.createElement(gk, { config: e, updateConfig: t, data: i }))), /* @__PURE__ */ r.createElement(Na.BoxPlot, { name: "Measures" }), ht() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(Mu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(On, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Fe,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Fe }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(lt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Fe }), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: Fe
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Fe }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(lt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Fe }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Fe }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), Ue() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Fe }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(Je, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Fe, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(lt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Fe })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, Et() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), We() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Fe }), Ke() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe }), Ie() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.maxMsg), oe() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Fe })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.maxMsg), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg)), se() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (C = (g = e.yAxis) == null ? void 0 : g.anchors) == null ? void 0 : C.map((re, le) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${le}` }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(le, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].value ? e.yAxis.anchors[le].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[le].value = me.target.value, t({
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
      value: e.yAxis.anchors[le].color ? e.yAxis.anchors[le].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[le].color = me.target.value, t({
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
      value: e.yAxis.anchors[le].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.yAxis.anchors];
        Re[le].lineStyle = me.target.value, t({
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
      onClick: (re) => {
        re.preventDefault();
        const le = [...e.yAxis.anchors];
        le.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: le
          }
        });
      }
    },
    "Add Anchor"
  )), se() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (X = (I = e.xAxis) == null ? void 0 : I.anchors) == null ? void 0 : X.map((re, le) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `xaxis-anchors-${le}` }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(le, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].value ? e.xAxis.anchors[le].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[le].value = me.target.value, t({
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
      value: e.xAxis.anchors[le].color ? e.xAxis.anchors[le].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[le].color = me.target.value, t({
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
      value: e.xAxis.anchors[le].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.xAxis.anchors];
        Re[le].lineStyle = me.target.value, t({
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
      onClick: (re) => {
        re.preventDefault();
        const le = [...e.xAxis.anchors];
        le.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: le
          }
        });
      }
    },
    "Add Anchor"
  )))), hn && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(lt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.rightMaxMessage), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, An.minMsg))), Pe() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(Mu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(On, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (re) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: re.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ r.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Fe }), we() && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
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
      updateField: Fe,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: Fe,
      options: Jt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Fe }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), Cn(e.xAxis) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Fe
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Fe
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Fe
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Fe
    }
  )), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Fe
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Ut, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && cn(re.target.value), re.target.value = "";
      },
      options: Pn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Fe, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(Je, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Fe, value: e.exclusions.dateEnd || "" }))), Me() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.manualStep,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "manualStep",
      label: "Step count",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => At(!It), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${It ? "90deg" : "0deg"})` } }, ">"))), It && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Jf).map((re) => /* @__PURE__ */ r.createElement(
    Je,
    {
      key: `viewport-step-count-input-${re}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[re] : void 0,
      placeholder: "Auto",
      type: "number",
      label: re,
      className: "number-narrow",
      updateField: (le, me, Re, xt) => sn("viewportStepCount", re, xt)
    }
  ))))), Me() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      min: 1,
      section: "xAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => At(!It), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${It ? "90deg" : "0deg"})` } }, ">"))), It && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Jf).map((re) => /* @__PURE__ */ r.createElement(
    Je,
    {
      key: `viewport-num-ticks-input-${re}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[re] : void 0,
      placeholder: "Auto",
      type: "number",
      label: re,
      className: "number-narrow",
      updateField: (le, me, Re, xt) => sn("viewportNumTicks", re, xt)
    }
  ))))), gt() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Fe }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Fe }), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 })), Xt() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(lt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Fe }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && J() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Fe }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), Ee() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Fe })) : /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), Ee() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Fe }), Te() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe })), ((Se = e.series) == null ? void 0 : Se.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && St.map((re, le) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${le}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (me) => zt(me, le) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", le + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[le].value, onChange: (me) => Qe(me, le) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), Dt && [...new Set(Dt)].sort().map((me) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${le}-${me}` }, me)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[le].color ? e.highlightedBarValues[le].color : "", onChange: (me) => Ft(me, le) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[le].borderWidth ? e.highlightedBarValues[le].borderWidth : "", onChange: (me) => Nt(me, le) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[le].legendLabel ? e.highlightedBarValues[le].legendLabel : "", onChange: (me) => pt(me, le) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (re) => Kt(re) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Ut, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && cn(re.target.value), re.target.value = "";
      },
      options: Pn(e.xAxis.dataKey, !0)
    }
  ))), se() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (Le = (ge = e.xAxis) == null ? void 0 : ge.anchors) == null ? void 0 : Le.map((re, le) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${le}` }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(le, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].value ? e.xAxis.anchors[le].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[le].value = me.target.value, t({
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
      value: e.xAxis.anchors[le].color ? e.xAxis.anchors[le].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[le].color = me.target.value, t({
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
      value: e.xAxis.anchors[le].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.xAxis.anchors];
        Re[le].lineStyle = me.target.value, t({
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
      onClick: (re) => {
        re.preventDefault();
        const le = [...e.xAxis.anchors];
        le.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: le
          }
        });
      }
    },
    "Add Anchor"
  )), se() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (rt = (je = e.yAxis) == null ? void 0 : je.anchors) == null ? void 0 : rt.map((re, le) => /* @__PURE__ */ r.createElement(Rn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${le}` }, /* @__PURE__ */ r.createElement(Dn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(le, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].value ? e.yAxis.anchors[le].value : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[le].value = me.target.value, t({
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
      value: e.yAxis.anchors[le].color ? e.yAxis.anchors[le].color : "",
      onChange: (me) => {
        me.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[le].color = me.target.value, t({
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
      value: e.yAxis.anchors[le].lineStyle || "",
      onChange: (me) => {
        const Re = [...e.yAxis.anchors];
        Re[le].lineStyle = me.target.value, t({
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
      onClick: (re) => {
        re.preventDefault();
        const le = [...e.yAxis.anchors];
        le.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: le
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(Na.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Columns")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(ng, { config: e, updateField: Fe, deleteColumn: ot }), " ")), ze() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Legend")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(lt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Fe }), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: Fe,
      tooltip: /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(lt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Fe }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Lt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Fe, options: jt(i) }), /* @__PURE__ */ r.createElement(Lt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[re, , le, me]) => dn(re, le, me), options: ["highlight", "isolate"] }), be() && /* @__PURE__ */ r.createElement(lt, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Fe }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(lt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Fe }), ne && e.legend.behavior === "isolate" && !Tt && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ r.createElement(ve, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ve.Target, null, /* @__PURE__ */ r.createElement(dt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ve.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((re, le) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `${re}-${le}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (me) => {
        me.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(le, 1), Fe("legend", null, "seriesHighlight", Re), Re.length || _();
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.legend.seriesHighlight[le],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (me) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(me.target.value) || (Re[le] = me.target.value, Wt([...Re]));
      },
      options: Yt()
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const le = Yt(), me = [...e.legend.seriesHighlight];
        if (me.length < le.length) {
          const [xt] = le.filter((gn) => !me.includes(gn));
          me.push(xt), Wt([...me]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ r.createElement(Je, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Fe }), /* @__PURE__ */ r.createElement(Lt, { value: (mt = e.legend) == null ? void 0 : mt.position, section: "legend", fieldName: "position", label: "Position", updateField: Fe, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Fe }), /* @__PURE__ */ r.createElement(lt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Fe })), /* @__PURE__ */ r.createElement(Je, { type: "textarea", value: e.legend.description, updateField: Fe, section: "legend", fieldName: "description", label: "Legend Description" }))), Ze() && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Filters")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(rg, { config: e, updateField: Fe, rawData: w }))), /* @__PURE__ */ r.createElement(Na.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, /* @__PURE__ */ r.createElement(Nn, null, "Data Table")), /* @__PURE__ */ r.createElement(On, null, /* @__PURE__ */ r.createElement(ag, { config: e, columns: Object.keys(i[0] || {}), updateField: Fe, isDashboard: y, isLoadedFromUrl: ct }), " ")), !1), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(_y, { loadConfig: t, state: e, convertStateToConfig: Hn }))));
}, Oh = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, xk = (e) => {
  e.sort((h, y) => h - y);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, i = n ? e.slice(0, t) : e.slice(0, t + 1), a = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(i.length / 2), f = n ? (i[l - 1] + i[l]) / 2 : i[l], d = Math.floor(a.length / 2), c = n ? (a[d - 1] + a[d]) / 2 : a[d];
  return { q1: f, q3: c };
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
], _h = (e = "#000000", t = !1) => {
  let n = ps(e), i = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, i, n.darken(0.3).hex()];
};
const Fh = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, i = new URL(e, window.location.origin), a = i.pathname, l = i.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const d = n.exec(l);
  return d && d[1] ? d[1] : "";
};
function eT({ configUrl: e, config: t, isEditor: n = !1, isDebug: i = !1, isDashboard: a = !1, setConfig: l, setEditing: f, hostname: d, link: c, setSharedFilter: h, setSharedFilterValue: y, dashboardConfig: v }) {
  var Pn, Mn, Hn, Ut, zn, Wn, An, Sn, De, ut, ct;
  const S = new ug(), [R, k] = de.useState(!0), [F, w] = de.useState(null), [m, _] = de.useState({}), [D, P] = de.useState(m.data || []), [O, L] = de.useState(void 0), [U, V] = de.useState(void 0), [q, ce] = de.useState(t && ((Mn = (Pn = t == null ? void 0 : t.legend) == null ? void 0 : Pn.seriesHighlight) != null && Mn.length) ? [...(Hn = t == null ? void 0 : t.legend) == null ? void 0 : Hn.seriesHighlight] : []), [ee, j] = de.useState("lg"), [Y, W] = de.useState([]), [B, ie] = de.useState(), [ae, se] = de.useState(), [Q, K] = de.useState(!1), [ne, ue] = de.useState([]), [ze] = de.useState(`cove-${Math.random().toString(16).slice(-4)}`), [be, ye] = de.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  de.useRef(/* @__PURE__ */ new Map()), de.useRef();
  const Pe = de.useRef(null);
  i && console.log("Chart config, isEditor", m, n);
  let { legend: oe, title: Ie, description: Ee, visualizationType: he } = m;
  n && (!Ie || Ie === "") && (Ie = "Chart Title"), m.table && (!((Ut = m.table) != null && Ut.label) || ((zn = m.table) == null ? void 0 : zn.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Te, lineDatapointClass: J, contentClasses: Me, sparkLineStyles: we } = ig(m), Xe = de.useId(), Ze = (Wn = m.legend) != null && Wn.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : Xe, et = () => Cc(m.visualizationType, U, m.allowLineToBarGraph), Ue = async () => {
    var $;
    if (m.dataUrl) {
      const Ne = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Ge = Object.fromEntries(new URLSearchParams(Ne.search)), Ve = !1;
      if (($ = m.filters) == null || $.forEach((St) => {
        St.type === "url" && Ge[St.queryParameter] !== decodeURIComponent(St.active) && (Ge[St.queryParameter] = St.active, Ve = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Ve)
        return;
      let ot = `${Ne.origin}${Ne.pathname}${Object.keys(Ge).map((St, Dt) => {
        let Qe = Dt === 0 ? "?" : "&";
        return Qe += St + "=", Qe += Ge[St], Qe;
      }).join("")}`, nt = [];
      try {
        const St = Fh(Ne.href);
        St === "csv" || ep(ot) ? nt = await fetch(ot).then((Dt) => Dt.text()).then((Dt) => rp.parse(Dt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : St === "json" || tp(ot) ? nt = await fetch(ot).then((Dt) => Dt.json()) : nt = [];
      } catch {
        console.error(`Cannot parse URL: ${ot}`), nt = [];
      }
      m.dataDescription && (nt = S.autoStandardize(nt), nt = S.developerStandardize(nt, m.dataDescription)), Object.assign(nt, { urlFiltered: !0 }), Ke({ ...m, runtimeDataUrl: ot, data: nt, formattedData: nt }), nt && (P(nt), L(nt), V(bi(m.filters, nt)));
    }
  }, Et = async () => {
    let $ = t || await (await fetch(e)).json(), Ne = $.data || [];
    const Ge = $.filters ? $.filters.filter((nt) => nt.type === "url").length > 0 : !1;
    if ($.dataUrl && !Ge)
      try {
        const nt = Fh($.dataUrl);
        (nt === "csv" || ep($.dataUrl)) && (Ne = await fetch($.dataUrl + `?v=${yp()}`).then((St) => St.text()).then((St) => (St = St.replace(/(".*?")|,/g, (...Qe) => Qe[1] || "|"), St = St.replace(/["]+/g, ""), rp.parse(St, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (nt === "json" || tp($.dataUrl)) && (Ne = await fetch($.dataUrl + `?v=${yp()}`).then((St) => St.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${$.dataUrl}`), Ne = [];
      }
    $.dataDescription && (Ne = S.autoStandardize(Ne), Ne = S.developerStandardize(Ne, $.dataDescription)), Ne && (P(Ne), L(Ne)), $ !== void 0 && $.table !== void 0 && (!$.table || !$.table.showVertical) && ($.table = $.table || {}, $.table.showVertical = !1);
    let Ve = { ...Vd, ...$ };
    Ve.filters && Ve.filters.forEach((nt, St) => {
      const Dt = Fy(nt);
      Dt && (Ve.filters[St].active = Dt);
    }), Ve.visualizationType === "Box Plot" && (Ve.legend.hide = !0), Ve.table.show === void 0 && (Ve.table.show = !a), Ve.series.forEach((nt) => {
      (nt.tooltip === void 0 || nt.tooltip === null) && (nt.tooltip = !0), nt.axis || (nt.axis = "Left");
    }), !Ve.data && Ne && (Ve.data = Ne);
    const ot = { ...await My(Ve) };
    Ke(ot, Ne);
  }, Ke = ($, Ne) => {
    var nt, St, Dt;
    let Ge = Ne || D;
    Object.keys(Vd).forEach((Qe) => {
      $[Qe] && typeof $[Qe] == "object" && !Array.isArray($[Qe]) && ($[Qe] = { ...Vd[Qe], ...$[Qe] });
    });
    let Ve = [];
    if ($.exclusions && $.exclusions.active)
      if ($.xAxis.type === "categorical" && ((nt = $.exclusions.keys) == null ? void 0 : nt.length) > 0)
        Ve = Ge.filter((Qe) => !$.exclusions.keys.includes(Qe[$.xAxis.dataKey]));
      else if (Cn($.xAxis) && ($.exclusions.dateStart || $.exclusions.dateEnd) && $.xAxis.dateParseFormat) {
        const Qe = (Nt) => new Date(Nt).getTime();
        let Kt = Qe($.exclusions.dateStart), zt = Qe($.exclusions.dateEnd) + 86399999, Ft = typeof Kt !== void 0 && isNaN(Kt) === !1, pt = typeof zt !== void 0 && isNaN(zt) === !1;
        Ft && pt ? Ve = Ge.filter((Nt) => Qe(Nt[$.xAxis.dataKey]) >= Kt && Qe(Nt[$.xAxis.dataKey]) <= zt) : Ft ? Ve = Ge.filter((Nt) => Qe(Nt[$.xAxis.dataKey]) >= Kt) : pt && (Ve = Ge.filter((Nt) => Qe(Nt[$.xAxis.dataKey]) <= zt));
      } else
        Ve = Ne || D;
    else
      Ve = Ne || D;
    L(Ve);
    let ot = [];
    if ($.filters && ($.filters.forEach((Qe, Kt) => {
      let zt = [];
      zt = Qe.orderedValues || We(Qe.columnName, Ve).sort(Qe.order === "desc" ? Sk : bk), $.filters[Kt].values = zt, $.filters[Kt].active = $.filters[Kt].active || zt[0], $.filters[Kt].filterStyle = $.filters[Kt].filterStyle ? $.filters[Kt].filterStyle : "dropdown";
    }), ot = bi($.filters, Ve), V(ot)), $.xAxis.type === "date-time" && m.orientation === "horizontal" && ($.xAxis.type = "date"), $.runtime = {}, $.runtime.seriesLabels = {}, $.runtime.seriesLabelsAll = [], $.runtime.originalXAxis = $.xAxis, $.visualizationType === "Pie" ? ($.runtime.seriesKeys = (Ne || Ge).map((Qe) => Qe[$.xAxis.dataKey]), $.runtime.seriesLabelsAll = $.runtime.seriesKeys) : $.runtime.seriesKeys = $.series ? $.series.map((Qe) => ($.runtime.seriesLabels[Qe.dataKey] = Qe.name || Qe.label || Qe.dataKey, $.runtime.seriesLabelsAll.push(Qe.name || Qe.dataKey), Qe.dataKey)) : [], $.visualizationType === "Box Plot" && $.series) {
      let Qe = Ve ? Ve.map((Tt) => Tt[$.xAxis.dataKey]) : Ge.map((Tt) => Tt[$.xAxis.dataKey]), Kt = Ve ? Ve.map((Tt) => {
        var Yt;
        return Number(Tt[(Yt = $ == null ? void 0 : $.series[0]) == null ? void 0 : Yt.dataKey]);
      }) : Ge.map((Tt) => {
        var Yt;
        return Number(Tt[(Yt = $ == null ? void 0 : $.series[0]) == null ? void 0 : Yt.dataKey]);
      });
      const Ft = function(Tt) {
        return Tt.filter(function(Yt, Wt, dn) {
          return dn.indexOf(Yt) === Wt;
        });
      }(Qe);
      let pt = [];
      const Nt = [];
      if (!Ft)
        return;
      Ft.forEach((Tt) => {
        try {
          if (!Tt)
            throw new Fe("No groups resolved in box plots");
          let Yt = Ve ? Ve.filter((g) => g[$.xAxis.dataKey] === Tt) : Ge.filter((g) => g[$.xAxis.dataKey] === Tt), Wt = Yt.map((g) => {
            var C;
            return Number(g[(C = $ == null ? void 0 : $.series[0]) == null ? void 0 : C.dataKey]);
          }), dn = Wt.sort((g, C) => g - C);
          const sn = xk(dn);
          if (!Yt)
            throw new Fe("boxplots dont have data yet");
          if (!Nt)
            throw new Fe("boxplots dont have plots yet");
          $.boxplot.firstQuartilePercentage === "" && ($.boxplot.firstQuartilePercentage = 0), $.boxplot.thirdQuartilePercentage === "" && ($.boxplot.thirdQuartilePercentage = 0);
          const nn = sn.q1, Zt = sn.q3, En = Zt - nn, un = nn - (Zt - nn) * 1.5, kn = Zt + (Zt - nn) * 1.5, In = dn.filter((g) => g < un || g > kn);
          let Yn = Wt;
          Yn = Yn.filter((g) => !In.includes(g));
          const Zn = ts(Wt) || 0, Xn = es([Zn, nn - 1.5 * En]);
          Nt.push({
            columnCategory: Tt,
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
      }), pt = JSON.parse(JSON.stringify(Nt)), pt.map((Tt) => (Tt.columnIqr = void 0, Tt.nonOutlierValues = void 0, Tt.columnLowerBounds = void 0, Tt.columnUpperBounds = void 0, null)), $.boxplot.allValues = Kt, $.boxplot.categories = Ft, $.boxplot.plots = Nt, $.boxplot.tableData = pt;
    }
    $.visualizationType === "Combo" && $.series && ($.runtime.barSeriesKeys = [], $.runtime.lineSeriesKeys = [], $.runtime.areaSeriesKeys = [], $.runtime.forecastingSeriesKeys = [], $.series.forEach((Qe) => {
      Qe.type === "Area Chart" && $.runtime.areaSeriesKeys.push(Qe), Qe.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Qe), (Qe.type === "Bar" || Qe.type === "Combo") && $.runtime.barSeriesKeys.push(Qe.dataKey), (Qe.type === "Line" || Qe.type === "dashed-sm" || Qe.type === "dashed-md" || Qe.type === "dashed-lg") && $.runtime.lineSeriesKeys.push(Qe.dataKey), Qe.type === "Combo" && (Qe.type = "Bar");
    })), $.visualizationType === "Forecasting" && $.series && ($.runtime.forecastingSeriesKeys = [], $.series.forEach((Qe) => {
      Qe.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Qe);
    })), $.visualizationType === "Area Chart" && $.series && ($.runtime.areaSeriesKeys = [], $.series.forEach((Qe) => {
      $.runtime.areaSeriesKeys.push({ ...Qe, type: "Area Chart" });
    })), $.visualizationType === "Bar" && $.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes($.visualizationType) ? ($.runtime.xAxis = $.yAxis.yAxis ? $.yAxis.yAxis : $.yAxis, $.runtime.yAxis = $.xAxis.xAxis ? $.xAxis.xAxis : $.xAxis, $.runtime.horizontal = !1, $.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes($.visualizationType) && !et() ? ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1, $.orientation = "vertical") : ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1), $.runtime.uniqueId = Date.now(), $.runtime.editorErrorMessage = $.visualizationType === "Pie" && !$.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", $.runtime.editorErrorMessage = $.visualizationType === "Sankey" && !$.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (St = $.legend.seriesHighlight) != null && St.length && ce((Dt = $.legend) == null ? void 0 : Dt.seriesHighlight), _($);
  }, We = ($, Ne = this.state.data) => {
    const Ge = [];
    return Ne.forEach((Ve) => {
      const ot = Ve[$];
      ot && Ge.includes(ot) === !1 && Ge.push(ot);
    }), Ge;
  }, Be = ($, Ne) => {
    let Ge = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Ve = parseFloat($[Ge]), ot = parseFloat(Ne[Ge]);
    return Ve < ot ? m.sortData === "ascending" ? 1 : -1 : Ve > ot ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, $e = new Py(($) => {
    for (let Ne of $) {
      let { width: Ge, height: Ve } = Ne.contentRect, ot = Ry(Ge), nt = 32, St = 350;
      j(ot), n && (Ge = Ge - St), Ne.target.dataset.lollipop === "true" && (Ge = Ge - 2.5), Ge = Ge - nt, W([Ge, Ve]);
    }
  }), ft = de.useCallback(($) => {
    $ !== null && $e.observe($), se($);
  }, []);
  function qe($) {
    return Object.keys($).length === 0;
  }
  de.useEffect(() => {
    Et();
  }, []), de.useEffect(() => {
    Ue();
  }, [JSON.stringify(m.filters)]), de.useEffect(() => {
    ae && !qe(m) && !Q && (og("cove_loaded", { config: m }), K(!0));
  }, [ae, m]), de.useEffect(() => {
    const $ = (Ne) => {
      let Ge = [];
      Ge.push(Ne.detail), ie(Ge);
    };
    return lg("cove_filterData", (Ne) => $(Ne)), () => {
      sg("cove_filterData", $);
    };
  }, [m]), de.useEffect(() => {
    if (B && B[0] && !B[0].hasOwnProperty("active")) {
      let Ne = { ...m };
      delete Ne.filters, _(Ne), V(bi(B, O));
    }
    if (B && B.length > 0 && B.length > 0 && B[0].hasOwnProperty("active")) {
      let $ = { ...m, filters: B };
      _($), V(bi(B, O));
    }
  }, [B]), t && de.useEffect(() => {
    Et();
  }, [t.data]), de.useEffect(() => {
    var $;
    if (D && m.xAxis && (($ = m.runtime) != null && $.seriesKeys)) {
      const Ne = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Ge = { ...dr, ...zu };
      let Ve = m.customColors || Ge[Ne], ot = m.runtime.seriesKeys.length, nt;
      for (; ot > Ve.length; )
        Ve = Ve.concat(Ve);
      Ve = Ve.slice(0, ot), nt = () => Zh({
        domain: m.runtime.seriesLabelsAll,
        range: Ve,
        unknown: null
      }), w(nt), k(!1);
    }
    m && D && m.sortData && D.sort(Be);
  }, [m, D]);
  const it = ($) => {
    if (q.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      yt();
      return;
    }
    const Ne = [...q];
    let Ge = $.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Ve) => {
      m.runtime.seriesLabels[Ve] === $.datum && (Ge = Ve);
    }), Ne.indexOf(Ge) !== -1 ? Ne.splice(Ne.indexOf(Ge), 1) : Ne.push(Ge), ce(Ne);
  }, yt = () => {
    try {
      const $ = Pe.current;
      if (!$)
        throw new Fe("No legend available to set previous focus on.");
      $.focus();
    } catch ($) {
      console.error("COVE:", $.message);
    }
    ce([]);
  }, ht = m.orientation === "horizontal" ? "yAxis" : "xAxis", _t = ($, Ne = !0) => {
    let Ge = bm(m.runtime[ht].dateParseFormat)($);
    return Ge || (Ne && (m.runtime.editorErrorMessage = `Error parsing date "${$}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, tn = ($) => Yd(m.runtime[ht].dateDisplayFormat)($), Xt = ($) => Yd(m.tooltips.dateDisplayFormat)($);
  function gt($, Ne) {
    const Ve = document.createElement("canvas").getContext("2d");
    if (!Ve) {
      console.error("2d context not found");
      return;
    }
    return Ve.font = Ne || getComputedStyle(document.body).font, Math.ceil(Ve.measureText($).width);
  }
  const Rt = ($, Ne, Ge = !1, Ve, ot, nt) => {
    if (isNaN($) || !$)
      return $;
    const St = $ < 0;
    (Ne === void 0 || !Ne) && (Ne = "left"), St && ($ = Math.abs($));
    let {
      dataFormat: { commas: Dt, abbreviated: Qe, roundTo: Kt, prefix: zt, suffix: Ft, rightRoundTo: pt, bottomRoundTo: Nt, rightPrefix: Tt, rightSuffix: Yt, bottomPrefix: Wt, bottomSuffix: dn, bottomAbbreviated: sn }
    } = m;
    String($).indexOf(",") !== -1 && ($ = $.replaceAll(",", ""));
    let nn = $, Zt = {
      useGrouping: !!Dt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Ne === "left" || Ne === void 0) {
      let kn;
      nt !== void 0 ? kn = nt ? Number(nt) : 0 : kn = Kt ? Number(Kt) : 0, Zt = {
        useGrouping: nt ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: kn,
        maximumFractionDigits: kn
      };
    }
    Ne === "right" && (Zt = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: pt ? Number(pt) : 0,
      maximumFractionDigits: pt ? Number(pt) : 0
    });
    const En = () => m.forestPlot.type === "Logarithmic" && !Nt ? 2 : Number(Nt) ? Number(Nt) : 0;
    if (Ne === "bottom" && (Zt = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: En(),
      maximumFractionDigits: En()
    }), $ = mp($), isNaN($))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${nn}. Try reviewing your data and selections in the Data Series section.`, nn;
    if (!m.dataFormat)
      return $;
    if (m.dataCutoff) {
      let kn = mp(m.dataCutoff);
      $ < kn && ($ = kn);
    }
    Ne === "left" && Dt && Qe && Ge || Ne === "bottom" && Dt && Qe && Ge ? $ = $ : $ = $.toLocaleString("en-US", Zt);
    let un = "";
    return Qe && Ne === "left" && Ge && ($ = Oh(parseFloat($))), sn && Ne === "bottom" && Ge && ($ = Oh(parseFloat($))), Ve && Ne === "left" ? un = Ve + un : zt && Ne === "left" && (un += zt), Tt && Ne === "right" && (un += Tt), Wt && Ne === "bottom" && (un += Wt), un += $, ot && Ne === "left" ? un += ot : Ft && Ne === "left" && (un += Ft), Yt && Ne === "right" && (un += Yt), dn && Ne === "bottom" && (un += dn), St && (un = "-" + un), String(un);
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
  }, qt = ($, Ne) => {
    if ($ === null || $ === "" || $ === void 0)
      return "";
    if (typeof $ == "string" && $.length > 0 && m.legend.type === "equalnumber")
      return $;
    let Ge = $, Ve;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(ot) {
      var nt = m.columns[ot];
      nt.name === Ne && (Ve = nt);
    }), Ve === void 0 && (Ve = m.type === "chart" ? m.dataFormat : m.primary, Ve.useCommas = Ve.commas, Ve.roundToPlace = Ve.roundTo ? Ve.roundTo : ""), Ve) {
      let ot = !1, nt = 0;
      Number($) && (Ve.roundToPlace >= 0 && (ot = Ve.roundToPlace ? Ve.roundToPlace !== "" || Ve.roundToPlace !== null : !1, nt = Ve.roundToPlace ? Number(Ve.roundToPlace) : 0, Ve.hasOwnProperty("roundToPlace") && ot && (Ge = Number($).toFixed(nt))), Ve.hasOwnProperty("useCommas") && Ve.useCommas === !0 && (Ge = Number($).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: ot ? nt : 0,
        maximumFractionDigits: ot ? nt : 5
      }))), Ge = (Ve.prefix || "") + Ge + (Ve.suffix || "");
    }
    return Ge;
  }, yn = () => {
    const $ = (Ge) => {
      Ge && Ge.preventDefault();
      let Ve = { ...m };
      delete Ve.newViz, Ke(Ve);
    }, Ne = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: Ne }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement(fs, { className: "btn", style: { margin: "1em auto" }, disabled: on(), onClick: (Ge) => $(Ge) }, "I'm Done")));
  }, Fe = () => {
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
  }, vt = ($) => {
    try {
      if (!$)
        throw new Fe("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Ne = dr[m.color] || dr.bluegreenreverse;
        return _h(Ne[3]);
      }
      return _h();
    } catch (Ne) {
      console.error("COVE: ", Ne);
    }
  }, Ht = ($) => {
    var Ne;
    return Array.isArray($) ? m.visualizationType === "Forecasting" ? $ : (Ne = m == null ? void 0 : m.xAxis) != null && Ne.dataKey ? S.cleanData($, m.xAxis.dataKey) : $ : [];
  }, It = ($) => $;
  let At = /* @__PURE__ */ r.createElement(Yy, null);
  const xn = ($) => {
    if (!(!$ || !$.toLowerCase))
      return $.toLowerCase().replaceAll(/ /g, "-");
  }, Mt = () => {
    var Ge, Ve, ot;
    const $ = (oe == null ? void 0 : oe.position) === "bottom" || ["sm", "xs", "xxs"].includes(ee), Ne = ["chart-container", "p-relative"];
    return ((Ge = m.legend) == null ? void 0 : Ge.position) === "bottom" && Ne.push("bottom"), (Ve = m.legend) != null && Ve.hide && Ne.push("legend-hidden"), J && Ne.push(J), m.barHasBorder || Ne.push("chart-bar--no-border"), (ot = m.brush) != null && ot.active && (v == null ? void 0 : v.type) === "dashboard" && (!$ || m.legend.hide) && Ne.push("dashboard-brush"), Ne.push(...Me), Ne;
  }, ln = () => {
    var Ge, Ve;
    const $ = ["subtext "], Ne = (oe == null ? void 0 : oe.position) === "bottom" || ["sm", "xs", "xxs"].includes(ee);
    return m.isResponsiveTicks && $.push("subtext--responsive-ticks "), (Ge = m.brush) != null && Ge.active && !Ne && $.push("subtext--brush-active "), (Ve = m.brush) != null && Ve.active && m.legend.hide && $.push("subtext--brush-active "), $;
  };
  if (!R) {
    const $ = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    At = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(vk, null), /* @__PURE__ */ r.createElement(jd.Responsive, { isEditor: n }, m.newViz && /* @__PURE__ */ r.createElement(yn, null), m.newViz === void 0 && n && m.runtime && ((An = m.runtime) == null ? void 0 : An.editorErrorMessage) && /* @__PURE__ */ r.createElement(Fe, null), !on() && !m.newViz && /* @__PURE__ */ r.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${xn(m.visualizationType)}`, "aria-label": pf(m), tabIndex: 0 }, /* @__PURE__ */ r.createElement(By, { showTitle: m.showTitle, isDashboard: a, title: Ie, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !B && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(np, { config: m, setConfig: _, setFilteredData: V, filteredData: U, excludedData: O, filterData: bi, dimensions: Y }), /* @__PURE__ */ r.createElement(Uy, { skipId: Ze, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, Li(m.introText)), /* @__PURE__ */ r.createElement("div", { className: Mt().join(" ") }, m.visualizationType !== "Spark Line" && m.visualizationType !== "Line" && hn[m.visualizationType], m.visualizationType === "Line" && (et() ? hn.Bar : hn.Line), m.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(np, { config: m, setConfig: _, setFilteredData: V, filteredData: U, excludedData: O, filterData: bi, dimensions: Y }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Li(m.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...we } }, /* @__PURE__ */ r.createElement(Op, null, (Ne) => /* @__PURE__ */ r.createElement(YE, { width: Ne.width, height: Ne.height }))), Ee && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Li(Ee))), m.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(Op, { "aria-hidden": "true" }, (Ne) => /* @__PURE__ */ r.createElement(VS, { runtime: m.runtime, width: Ne.width, height: Ne.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(XE, { ref: Pe })), a && m.table && m.table.show && m.table.showDataTableLink ? $ : c && c, Ee && m.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: ln().join("") }, Li(Ee)), !1, /* @__PURE__ */ r.createElement(Ed.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(Ed.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: ze }), m.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(Ed.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: ze })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ r.createElement(
      Ky,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (De = (Sn = m == null ? void 0 : m.data) == null ? void 0 : Sn[0]) == null ? void 0 : De.tableData : m.table.customTableConfig ? bi(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (ct = (ut = m == null ? void 0 : m.data) == null ? void 0 : ut[0]) == null ? void 0 : ct.tableData : U || O,
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: qt,
        displayGeoName: It,
        applyLegendToRow: vt,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: Ie,
        viewport: ee,
        tabbingId: Ze,
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
    currentViewport: ee,
    dashboardConfig: v,
    debugSvg: i,
    dimensions: Y,
    dynamicLegendItems: ne,
    excludedData: O,
    formatDate: tn,
    formatNumber: Rt,
    formatTooltipsDate: Xt,
    getTextWidth: gt,
    getXAxisData: ($) => Cn(m.runtime.xAxis) ? _t($[m.runtime.originalXAxis.dataKey]).getTime() : $[m.runtime.originalXAxis.dataKey],
    getYAxisData: ($, Ne) => $[Ne],
    handleChartAriaLabels: pf,
    handleLineType: iy,
    highlight: it,
    highlightReset: yt,
    imageId: ze,
    isDashboard: a,
    isDebug: i,
    isEditor: n,
    isNumber: Fu,
    legend: oe,
    lineOptions: Ek,
    loading: R,
    missingRequiredSections: on,
    outerContainerRef: ft,
    parseDate: _t,
    rawData: D ?? {},
    seriesHighlight: q,
    setBrushConfig: ye,
    setConfig: _,
    setDynamicLegendItems: ue,
    setEditing: f,
    setFilteredData: V,
    setParentConfig: l,
    setSeriesHighlight: ce,
    setSharedFilter: h,
    setSharedFilterValue: y,
    tableData: U || O,
    // do not clean table data
    transformedData: Ht(U || O),
    // do this right before passing to components
    twoColorPalette: zu,
    unfilteredData: D,
    updateConfig: Ke
  };
  return /* @__PURE__ */ r.createElement(Ct.Provider, { value: jt }, /* @__PURE__ */ r.createElement(jd.VisualizationWrapper, { config: m, isEditor: n, currentViewport: ee, ref: ft, imageId: ze, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, At));
}
export {
  eT as C
};
