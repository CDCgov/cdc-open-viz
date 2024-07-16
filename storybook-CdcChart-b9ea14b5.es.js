import { r as ce, R as r } from "./storybook-index-45401197.es.js";
import { v as Zf, a as Py, i as Qf, b as Jf, g as Ry } from "./storybook-isSolr-cb863e7a.es.js";
import { _ as Kr, P as Dy, D as _y, C as Ny, A as Oy, d as bi, F as ep, g as Fy } from "./storybook-Filters-4b7cecb9.es.js";
import { L as jd, a as My } from "./storybook-coveUpdateWorker-ba491048.es.js";
import { B as fs } from "./storybook-Button-d74e310e.es.js";
import { p as zy, P as He } from "./storybook-index-43433e35.es.js";
import { d as Iy } from "./storybook-debounce-cc216a80.es.js";
import { a as $y } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as tp } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Li, T as By } from "./storybook-index-e5bf02db.es.js";
import { _ as fn } from "./storybook-extends-70f3d2a3.es.js";
import { p as np, i as Si, j as Hr, c as Ut, k as rp, a as mc, m as Zn, t as _u, n as $o, o as Ed, q as ap, r as Gn, u as ip, v as Hy, w as Wy, l as op, G as Vy, x as ps, y as ar, z as $u, h as Uo, T as St, P as jy, f as Bu, H as Uy, C as lp, d as Ky, M as Fh, E as Yy, A as Xy, e as Mh, I as sp } from "./storybook-InputToggle-1c80137d.es.js";
import { t as qy, a as wn, b as Sf, L as up, c as ql, g as Ei, f as zh, S as cp, M as kd, D as Gy } from "./storybook-DataTable-6fe9cb26.es.js";
import { E as Or, L as Zy } from "./storybook-Loading-f180d060.es.js";
import { b as yc, t as Qy, e as Ih, f as dp, g as Jy, h as eg, j as tg, k as fp, m as ng, G as ot, c as An } from "./storybook-Group-e6c0d0df.es.js";
import { s as es, t as $h, a as Bh, b as Hh, d as bs, B as kr, c as $n, C as rg } from "./storybook-Circle-4d1a558c.es.js";
import { R as ag } from "./storybook-index-633d712d.es.js";
import { c as hs } from "./storybook-chroma-b564050a.es.js";
import { _ as hr } from "./storybook-lodash-c15d8e1c.es.js";
import { t as Wh, m as wd, f as Vh, d as pu, a as hu, b as mu, n as pp, o as ig, p as hp, c as jh, e as Uh } from "./storybook-year-24bd1dc7.es.js";
import { a as ut } from "./storybook-Icon-b09f76c0.es.js";
import { a as Pn, b as Rn, c as Dn, d as _n, A as Pi, D as og } from "./storybook-DataTransform-1390427f.es.js";
import { C as lg, V as sg, a as mp } from "./storybook-footnoteSymbols-5819a164.es.js";
import { S as Ct, T as Je, C as st, D as ug } from "./storybook-DataTableEditor-9b82b900.es.js";
import { T as ge } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ma } from "./storybook-InputSelect-20478396.es.js";
import { S as Kh } from "./storybook-icon-check-0ef17e76.es.js";
import { A as yu } from "./storybook-Accordion-dbc41a5b.es.js";
import { u as cg, p as dg, s as fg, a as pg } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as yp } from "./storybook-numberFromString-24623c03.es.js";
import { c as gp } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Yh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vp(e) {
  let t = e, n = e;
  e.length === 1 && (t = (d, f) => e(d) - f, n = hg(e));
  function a(d, f, u, m) {
    for (u == null && (u = 0), m == null && (m = d.length); u < m; ) {
      const y = u + m >>> 1;
      n(d[y], f) < 0 ? u = y + 1 : m = y;
    }
    return u;
  }
  function i(d, f, u, m) {
    for (u == null && (u = 0), m == null && (m = d.length); u < m; ) {
      const y = u + m >>> 1;
      n(d[y], f) > 0 ? m = y : u = y + 1;
    }
    return u;
  }
  function l(d, f, u, m) {
    u == null && (u = 0), m == null && (m = d.length);
    const y = a(d, f, u, m - 1);
    return y > u && t(d[y - 1], f) > -t(d[y], f) ? y - 1 : y;
  }
  return { left: a, center: l, right: i };
}
function hg(e) {
  return (t, n) => Yh(e(t), n);
}
function* mg(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function yg(e, t) {
  let n = 0, a, i = 0, l = 0;
  if (t === void 0)
    for (let d of e)
      d != null && (d = +d) >= d && (a = d - i, i += a / ++n, l += a * (d - i));
  else {
    let d = -1;
    for (let f of e)
      (f = t(f, ++d, e)) != null && (f = +f) >= f && (a = f - i, i += a / ++n, l += a * (f - i));
  }
  if (n > 1)
    return l / (n - 1);
}
function gg(e, t) {
  const n = yg(e, t);
  return n && Math.sqrt(n);
}
function ts(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let i of e)
      (i = t(i, ++a, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function ns(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let i of e)
      (i = t(i, ++a, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Xh(e, t, n = 0, a = e.length - 1, i = Yh) {
  for (; a > n; ) {
    if (a - n > 600) {
      const u = a - n + 1, m = t - n + 1, y = Math.log(u), x = 0.5 * Math.exp(2 * y / 3), S = 0.5 * Math.sqrt(y * x * (u - x) / u) * (m - u / 2 < 0 ? -1 : 1), R = Math.max(n, Math.floor(t - m * x / u + S)), T = Math.min(a, Math.floor(t + (u - m) * x / u + S));
      Xh(e, t, R, T, i);
    }
    const l = e[t];
    let d = n, f = a;
    for (Gl(e, n, t), i(e[a], l) > 0 && Gl(e, n, a); d < f; ) {
      for (Gl(e, d, f), ++d, --f; i(e[d], l) < 0; )
        ++d;
      for (; i(e[f], l) > 0; )
        --f;
    }
    i(e[n], l) === 0 ? Gl(e, n, f) : (++f, Gl(e, f, a)), f <= t && (n = f + 1), t <= f && (a = f - 1);
  }
  return e;
}
function Gl(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function vg(e, t, n) {
  if (e = Float64Array.from(mg(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return ns(e);
    if (t >= 1)
      return ts(e);
    var a, i = (a - 1) * t, l = Math.floor(i), d = ts(Xh(e, l).subarray(0, l + 1)), f = ns(e.subarray(l + 1));
    return d + (f - d) * (i - l);
  }
}
function xg(e, t) {
  let n = 0, a = 0;
  if (t === void 0)
    for (let i of e)
      i != null && (i = +i) >= i && (++n, a += i);
  else {
    let i = -1;
    for (let l of e)
      (l = t(l, ++i, e)) != null && (l = +l) >= l && (++n, a += l);
  }
  if (n)
    return a / n;
}
function bg(e, t) {
  return vg(e, 0.5, t);
}
class xp extends Map {
  constructor(t, n = kg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, i] of t)
        this.set(a, i);
  }
  get(t) {
    return super.get(bp(this, t));
  }
  has(t) {
    return super.has(bp(this, t));
  }
  set(t, n) {
    return super.set(Sg(this, t), n);
  }
  delete(t) {
    return super.delete(Eg(this, t));
  }
}
function bp({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Sg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Eg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function kg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function wg(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(i); ++a < i; )
    l[a] = e + a * n;
  return l;
}
const Sp = Symbol("implicit");
function Ef() {
  var e = new xp(), t = [], n = [], a = Sp;
  function i(l) {
    let d = e.get(l);
    if (d === void 0) {
      if (a !== Sp)
        return a;
      e.set(l, d = t.push(l) - 1);
    }
    return n[d % n.length];
  }
  return i.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new xp();
    for (const d of l)
      e.has(d) || e.set(d, t.push(d) - 1);
    return i;
  }, i.range = function(l) {
    return arguments.length ? (n = Array.from(l), i) : n.slice();
  }, i.unknown = function(l) {
    return arguments.length ? (a = l, i) : a;
  }, i.copy = function() {
    return Ef(t, n).unknown(a);
  }, yc.apply(i, arguments), i;
}
function kf() {
  var e = Ef().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, l, d, f = !1, u = 0, m = 0, y = 0.5;
  delete e.unknown;
  function x() {
    var S = t().length, R = i < a, T = R ? i : a, F = R ? a : i;
    l = (F - T) / Math.max(1, S - u + m * 2), f && (l = Math.floor(l)), T += (F - T - l * (S - u)) * y, d = l * (1 - u), f && (T = Math.round(T), d = Math.round(d));
    var k = wg(S).map(function(h) {
      return T + l * h;
    });
    return n(R ? k.reverse() : k);
  }
  return e.domain = function(S) {
    return arguments.length ? (t(S), x()) : t();
  }, e.range = function(S) {
    return arguments.length ? ([a, i] = S, a = +a, i = +i, x()) : [a, i];
  }, e.rangeRound = function(S) {
    return [a, i] = S, a = +a, i = +i, f = !0, x();
  }, e.bandwidth = function() {
    return d;
  }, e.step = function() {
    return l;
  }, e.round = function(S) {
    return arguments.length ? (f = !!S, x()) : f;
  }, e.padding = function(S) {
    return arguments.length ? (u = Math.min(1, m = +S), x()) : u;
  }, e.paddingInner = function(S) {
    return arguments.length ? (u = Math.min(1, S), x()) : u;
  }, e.paddingOuter = function(S) {
    return arguments.length ? (m = +S, x()) : m;
  }, e.align = function(S) {
    return arguments.length ? (y = Math.max(0, Math.min(1, S)), x()) : y;
  }, e.copy = function() {
    return kf(t(), [a, i]).round(f).paddingInner(u).paddingOuter(m).align(y);
  }, yc.apply(x(), arguments);
}
function qh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return qh(t());
  }, e;
}
function Tg() {
  return qh(kf.apply(null, arguments).paddingInner(1));
}
function Gh(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, i = e[n], l = e[a], d;
  return l < i && (d = n, n = a, a = d, d = i, i = l, l = d), e[n] = t.floor(i), e[a] = t.ceil(l), e;
}
function Ep(e) {
  return Math.log(e);
}
function kp(e) {
  return Math.exp(e);
}
function Cg(e) {
  return -Math.log(-e);
}
function Ag(e) {
  return -Math.exp(-e);
}
function Lg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Pg(e) {
  return e === 10 ? Lg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Rg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function wp(e) {
  return (t, n) => -e(-t, n);
}
function Dg(e) {
  const t = e(Ep, kp), n = t.domain;
  let a = 10, i, l;
  function d() {
    return i = Rg(a), l = Pg(a), n()[0] < 0 ? (i = wp(i), l = wp(l), e(Cg, Ag)) : e(Ep, kp), t;
  }
  return t.base = function(f) {
    return arguments.length ? (a = +f, d()) : a;
  }, t.domain = function(f) {
    return arguments.length ? (n(f), d()) : n();
  }, t.ticks = (f) => {
    const u = n();
    let m = u[0], y = u[u.length - 1];
    const x = y < m;
    x && ([m, y] = [y, m]);
    let S = i(m), R = i(y), T, F;
    const k = f == null ? 10 : +f;
    let h = [];
    if (!(a % 1) && R - S < k) {
      if (S = Math.floor(S), R = Math.ceil(R), m > 0) {
        for (; S <= R; ++S)
          for (T = 1; T < a; ++T)
            if (F = S < 0 ? T / l(-S) : T * l(S), !(F < m)) {
              if (F > y)
                break;
              h.push(F);
            }
      } else
        for (; S <= R; ++S)
          for (T = a - 1; T >= 1; --T)
            if (F = S > 0 ? T / l(-S) : T * l(S), !(F < m)) {
              if (F > y)
                break;
              h.push(F);
            }
      h.length * 2 < k && (h = dp(m, y, k));
    } else
      h = dp(S, R, Math.min(R - S, k)).map(l);
    return x ? h.reverse() : h;
  }, t.tickFormat = (f, u) => {
    if (f == null && (f = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = Jy(u)).precision == null && (u.trim = !0), u = eg(u)), f === 1 / 0)
      return u;
    const m = Math.max(1, a * f / t.ticks().length);
    return (y) => {
      let x = y / l(Math.round(i(y)));
      return x * a < a - 0.5 && (x *= a), x <= m ? u(y) : "";
    };
  }, t.nice = () => n(Gh(n(), {
    floor: (f) => l(Math.floor(i(f))),
    ceil: (f) => l(Math.ceil(i(f)))
  })), t;
}
function Zh() {
  const e = Dg(Qy()).domain([1, 10]);
  return e.copy = () => Ih(e, Zh()).base(e.base()), yc.apply(e, arguments), e;
}
const Hu = Wh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Hu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Wh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Hu);
Hu.range;
function _g(e, t, n, a, i, l) {
  const d = [
    [es, 1, pu],
    [es, 5, 5 * pu],
    [es, 15, 15 * pu],
    [es, 30, 30 * pu],
    [l, 1, hu],
    [l, 5, 5 * hu],
    [l, 15, 15 * hu],
    [l, 30, 30 * hu],
    [i, 1, mu],
    [i, 3, 3 * mu],
    [i, 6, 6 * mu],
    [i, 12, 12 * mu],
    [a, 1, pp],
    [a, 2, 2 * pp],
    [n, 1, ig],
    [t, 1, hp],
    [t, 3, 3 * hp],
    [e, 1, wd]
  ];
  function f(m, y, x) {
    const S = y < m;
    S && ([m, y] = [y, m]);
    const R = x && typeof x.range == "function" ? x : u(m, y, x), T = R ? R.range(m, +y + 1) : [];
    return S ? T.reverse() : T;
  }
  function u(m, y, x) {
    const S = Math.abs(y - m) / x, R = tg(([, , k]) => k).right(d, S);
    if (R === d.length)
      return e.every(fp(m / wd, y / wd, x));
    if (R === 0)
      return Hu.every(Math.max(fp(m, y, x), 1));
    const [T, F] = d[S / d[R - 1][2] < d[R][2] / S ? R - 1 : R];
    return T.every(F);
  }
  return [f, u];
}
const [Ng, Og] = _g(Vh, Hh, Uh, jh, Bh, $h);
function Fg(e) {
  return new Date(e);
}
function Mg(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Qh(e, t, n, a, i, l, d, f, u, m) {
  var y = ng(), x = y.invert, S = y.domain, R = m(".%L"), T = m(":%S"), F = m("%I:%M"), k = m("%I %p"), h = m("%a %d"), P = m("%b %d"), O = m("%B"), C = m("%Y");
  function N(D) {
    return (u(D) < D ? R : f(D) < D ? T : d(D) < D ? F : l(D) < D ? k : a(D) < D ? i(D) < D ? h : P : n(D) < D ? O : C)(D);
  }
  return y.invert = function(D) {
    return new Date(x(D));
  }, y.domain = function(D) {
    return arguments.length ? S(Array.from(D, Mg)) : S().map(Fg);
  }, y.ticks = function(D) {
    var B = S();
    return e(B[0], B[B.length - 1], D ?? 10);
  }, y.tickFormat = function(D, B) {
    return B == null ? N : m(B);
  }, y.nice = function(D) {
    var B = S();
    return (!D || typeof D.range != "function") && (D = t(B[0], B[B.length - 1], D ?? 10)), D ? S(Gh(B, D)) : y;
  }, y.copy = function() {
    return Ih(y, Qh(e, t, n, a, i, l, d, f, u, m));
  }, y;
}
function zg() {
  return yc.apply(Qh(Ng, Og, Vh, Hh, Uh, jh, Bh, $h, es, qy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ig = bs("domain", "range", "reverse", "align", "padding", "round");
function Ud(e) {
  return Ig(kf(), e);
}
var $g = bs("domain", "range", "reverse", "align", "padding", "round");
function Bo(e) {
  return $g(Tg(), e);
}
var Bg = bs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Hg(e) {
  return Bg(zg(), e);
}
var Wg = bs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Wu(e) {
  return Wg(Zh(), e);
}
var Vg = bs("domain", "range", "reverse", "unknown");
function Ho(e) {
  return Vg(Ef(), e);
}
function jg(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Ug(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, l) {
    return t == null || l.length <= t || i % Math.round((l.length - 1) / t) === 0;
  });
}
function Kg(e) {
  return e == null ? void 0 : e.toString();
}
var Ri = [], Yg = function() {
  return Ri.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Xg = function() {
  return Ri.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Tp = "ResizeObserver loop completed with undelivered notifications.", qg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Tp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Tp), window.dispatchEvent(e);
}, ms;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ms || (ms = {}));
var Di = function(e) {
  return Object.freeze(e);
}, Jh = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Di(this);
  }
  return e;
}(), em = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Di(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, i = t.top, l = t.right, d = t.bottom, f = t.left, u = t.width, m = t.height;
    return { x: n, y: a, top: i, right: l, bottom: d, left: f, width: u, height: m };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), wf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, tm = function(e) {
  if (wf(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var i = e, l = i.offsetWidth, d = i.offsetHeight;
  return !(l || d || e.getClientRects().length);
}, Cp = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Gg = function(e) {
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
}, rs = typeof window < "u" ? window : {}, gu = /* @__PURE__ */ new WeakMap(), Ap = /auto|scroll/, Zg = /^tb|vertical/, Qg = /msie|trident/i.test(rs.navigator && rs.navigator.userAgent), Wr = function(e) {
  return parseFloat(e || "0");
}, Vo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Jh((n ? t : e) || 0, (n ? e : t) || 0);
}, Lp = Di({
  devicePixelContentBoxSize: Vo(),
  borderBoxSize: Vo(),
  contentBoxSize: Vo(),
  contentRect: new em(0, 0, 0, 0)
}), nm = function(e, t) {
  if (t === void 0 && (t = !1), gu.has(e) && !t)
    return gu.get(e);
  if (tm(e))
    return gu.set(e, Lp), Lp;
  var n = getComputedStyle(e), a = wf(e) && e.ownerSVGElement && e.getBBox(), i = !Qg && n.boxSizing === "border-box", l = Zg.test(n.writingMode || ""), d = !a && Ap.test(n.overflowY || ""), f = !a && Ap.test(n.overflowX || ""), u = a ? 0 : Wr(n.paddingTop), m = a ? 0 : Wr(n.paddingRight), y = a ? 0 : Wr(n.paddingBottom), x = a ? 0 : Wr(n.paddingLeft), S = a ? 0 : Wr(n.borderTopWidth), R = a ? 0 : Wr(n.borderRightWidth), T = a ? 0 : Wr(n.borderBottomWidth), F = a ? 0 : Wr(n.borderLeftWidth), k = x + m, h = u + y, P = F + R, O = S + T, C = f ? e.offsetHeight - O - e.clientHeight : 0, N = d ? e.offsetWidth - P - e.clientWidth : 0, D = i ? k + P : 0, B = i ? h + O : 0, H = a ? a.width : Wr(n.width) - D - N, re = a ? a.height : Wr(n.height) - B - C, oe = H + k + N + P, ne = re + h + C + O, j = Di({
    devicePixelContentBoxSize: Vo(Math.round(H * devicePixelRatio), Math.round(re * devicePixelRatio), l),
    borderBoxSize: Vo(oe, ne, l),
    contentBoxSize: Vo(H, re, l),
    contentRect: new em(x, u, H, re)
  });
  return gu.set(e, j), j;
}, rm = function(e, t, n) {
  var a = nm(e, n), i = a.borderBoxSize, l = a.contentBoxSize, d = a.devicePixelContentBoxSize;
  switch (t) {
    case ms.DEVICE_PIXEL_CONTENT_BOX:
      return d;
    case ms.BORDER_BOX:
      return i;
    default:
      return l;
  }
}, am = function() {
  function e(t) {
    var n = nm(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Di([n.borderBoxSize]), this.contentBoxSize = Di([n.contentBoxSize]), this.devicePixelContentBoxSize = Di([n.devicePixelContentBoxSize]);
  }
  return e;
}(), im = function(e) {
  if (tm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Jg = function() {
  var e = 1 / 0, t = [];
  Ri.forEach(function(d) {
    if (d.activeTargets.length !== 0) {
      var f = [];
      d.activeTargets.forEach(function(m) {
        var y = new am(m.target), x = im(m.target);
        f.push(y), m.lastReportedSize = rm(m.target, m.observedBox), x < e && (e = x);
      }), t.push(function() {
        d.callback.call(d.observer, f, d.observer);
      }), d.activeTargets.splice(0, d.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var i = a[n];
    i();
  }
  return e;
}, Pp = function(e) {
  Ri.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (im(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, ev = function() {
  var e = 0;
  for (Pp(e); Yg(); )
    e = Jg(), Pp(e);
  return Xg() && qg(), e > 0;
}, Td, om = [], tv = function() {
  return om.splice(0).forEach(function(e) {
    return e();
  });
}, nv = function(e) {
  if (!Td) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return tv();
    }).observe(n, a), Td = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  om.push(e), Td();
}, rv = function(e) {
  nv(function() {
    requestAnimationFrame(e);
  });
}, Nu = 0, av = function() {
  return !!Nu;
}, iv = 250, ov = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Rp = [
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
], Dp = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Cd = !1, lv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = iv), !Cd) {
      Cd = !0;
      var a = Dp(t);
      rv(function() {
        var i = !1;
        try {
          i = ev();
        } finally {
          if (Cd = !1, t = a - Dp(), !av())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, ov);
    };
    document.body ? n() : rs.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Rp.forEach(function(n) {
      return rs.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Rp.forEach(function(n) {
      return rs.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Kd = new lv(), _p = function(e) {
  !Nu && e > 0 && Kd.start(), Nu += e, !Nu && Kd.stop();
}, sv = function(e) {
  return !wf(e) && !Gg(e) && getComputedStyle(e).display === "inline";
}, uv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ms.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = rm(this.target, this.observedBox, !0);
    return sv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), cv = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), vu = /* @__PURE__ */ new WeakMap(), Np = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, xu = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new cv(t, n);
    vu.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = vu.get(t), l = i.observationTargets.length === 0;
    Np(i.observationTargets, n) < 0 && (l && Ri.push(i), i.observationTargets.push(new uv(n, a && a.box)), _p(1), Kd.schedule());
  }, e.unobserve = function(t, n) {
    var a = vu.get(t), i = Np(a.observationTargets, n), l = a.observationTargets.length === 1;
    i >= 0 && (l && Ri.splice(Ri.indexOf(a), 1), a.observationTargets.splice(i, 1), _p(-1));
  }, e.disconnect = function(t) {
    var n = this, a = vu.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), dv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    xu.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xu.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Cp(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    xu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: dv,
  ResizeObserverEntry: am,
  ResizeObserverSize: Jh
}, Symbol.toStringTag, { value: "Module" })), pv = /* @__PURE__ */ $y(fv);
var Op = um, Da = sm(zy), hv = sm(Iy), Mo = gv(ce), mv = pv, yv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function lm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (lm = function(i) {
    return i ? n : t;
  })(e);
}
function gv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = lm(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var d = i ? Object.getOwnPropertyDescriptor(e, l) : null;
      d && (d.get || d.set) ? Object.defineProperty(a, l, d) : a[l] = e[l];
    }
  return a.default = e, n && n.set(e, a), a;
}
function sm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vu() {
  return Vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vu.apply(this, arguments);
}
function vv(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var xv = [];
function um(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, l = e.ignoreDimensions, d = l === void 0 ? xv : l, f = e.parentSizeStyles, u = f === void 0 ? {
    width: "100%",
    height: "100%"
  } : f, m = e.enableDebounceLeadingCall, y = m === void 0 ? !0 : m, x = vv(e, yv), S = (0, Mo.useRef)(null), R = (0, Mo.useRef)(0), T = (0, Mo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), F = T[0], k = T[1], h = (0, Mo.useMemo)(function() {
    var P = Array.isArray(d) ? d : [d];
    return (0, hv.default)(function(O) {
      k(function(C) {
        var N = Object.keys(C), D = N.filter(function(H) {
          return C[H] !== O[H];
        }), B = D.every(function(H) {
          return P.includes(H);
        });
        return B ? C : O;
      });
    }, i, {
      leading: y
    });
  }, [i, y, d]);
  return (0, Mo.useEffect)(function() {
    var P = new mv.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(C) {
        var N = C.contentRect, D = N.left, B = N.top, H = N.width, re = N.height;
        R.current = window.requestAnimationFrame(function() {
          h({
            width: H,
            height: re,
            top: B,
            left: D
          });
        });
      });
    });
    return S.current && P.observe(S.current), function() {
      window.cancelAnimationFrame(R.current), P.disconnect(), h != null && h.cancel && h.cancel();
    };
  }, [h]), /* @__PURE__ */ Mo.default.createElement("div", Vu({
    style: u,
    ref: S,
    className: t
  }, x), n(Vu({}, F, {
    ref: S.current,
    resize: h
  })));
}
um.propTypes = {
  className: Da.default.string,
  debounceTime: Da.default.number,
  enableDebounceLeadingCall: Da.default.bool,
  ignoreDimensions: Da.default.oneOfType([Da.default.any, Da.default.arrayOf(Da.default.any)]),
  children: Da.default.func.isRequired
};
var Ad = /* @__PURE__ */ new Date(), Ld = /* @__PURE__ */ new Date();
function ca(e, t, n, a) {
  function i(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return i.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, i.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, i.round = function(l) {
    var d = i(l), f = i.ceil(l);
    return l - d < f - l ? d : f;
  }, i.offset = function(l, d) {
    return t(l = /* @__PURE__ */ new Date(+l), d == null ? 1 : Math.floor(d)), l;
  }, i.range = function(l, d, f) {
    var u = [], m;
    if (l = i.ceil(l), f = f == null ? 1 : Math.floor(f), !(l < d) || !(f > 0))
      return u;
    do
      u.push(m = /* @__PURE__ */ new Date(+l)), t(l, f), e(l);
    while (m < l && l < d);
    return u;
  }, i.filter = function(l) {
    return ca(function(d) {
      if (d >= d)
        for (; e(d), !l(d); )
          d.setTime(d - 1);
    }, function(d, f) {
      if (d >= d)
        if (f < 0)
          for (; ++f <= 0; )
            for (; t(d, -1), !l(d); )
              ;
        else
          for (; --f >= 0; )
            for (; t(d, 1), !l(d); )
              ;
    });
  }, n && (i.count = function(l, d) {
    return Ad.setTime(+l), Ld.setTime(+d), e(Ad), e(Ld), Math.floor(n(Ad, Ld));
  }, i.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? i.filter(a ? function(d) {
      return a(d) % l === 0;
    } : function(d) {
      return i.count(0, d) % l === 0;
    }) : i;
  }), i;
}
const bv = 1e3, Tf = bv * 60, Sv = Tf * 60, Cf = Sv * 24, cm = Cf * 7;
var dm = ca(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Tf) / Cf,
  (e) => e.getDate() - 1
);
const fm = dm;
dm.range;
function Mi(e) {
  return ca(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Tf) / cm;
  });
}
var pm = Mi(0), ju = Mi(1), Ev = Mi(2), kv = Mi(3), Ko = Mi(4), wv = Mi(5), Tv = Mi(6);
pm.range;
ju.range;
Ev.range;
kv.range;
Ko.range;
wv.range;
Tv.range;
var Af = ca(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Af.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ca(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const ys = Af;
Af.range;
var hm = ca(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Cf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const mm = hm;
hm.range;
function zi(e) {
  return ca(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / cm;
  });
}
var ym = zi(0), Uu = zi(1), Cv = zi(2), Av = zi(3), Yo = zi(4), Lv = zi(5), Pv = zi(6);
ym.range;
Uu.range;
Cv.range;
Av.range;
Yo.range;
Lv.range;
Pv.range;
var Lf = ca(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Lf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ca(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const gs = Lf;
Lf.range;
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
function Zl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Rv(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, l = e.days, d = e.shortDays, f = e.months, u = e.shortMonths, m = Ql(i), y = Jl(i), x = Ql(l), S = Jl(l), R = Ql(d), T = Jl(d), F = Ql(f), k = Jl(f), h = Ql(u), P = Jl(u), O = {
    a: ee,
    A: de,
    b: Q,
    B: te,
    c: null,
    d: Bp,
    e: Bp,
    f: Jv,
    g: ux,
    G: dx,
    H: Gv,
    I: Zv,
    j: Qv,
    L: gm,
    m: ex,
    M: tx,
    p: q,
    q: Z,
    Q: Vp,
    s: jp,
    S: nx,
    u: rx,
    U: ax,
    V: ix,
    w: ox,
    W: lx,
    x: null,
    X: null,
    y: sx,
    Y: cx,
    Z: fx,
    "%": Wp
  }, C = {
    a: Me,
    A: ke,
    b: pe,
    B: Le,
    c: null,
    d: Hp,
    e: Hp,
    f: yx,
    g: Cx,
    G: Lx,
    H: px,
    I: hx,
    j: mx,
    L: xm,
    m: gx,
    M: vx,
    p: We,
    q: Ze,
    Q: Vp,
    s: jp,
    S: xx,
    u: bx,
    U: Sx,
    V: Ex,
    w: kx,
    W: wx,
    x: null,
    X: null,
    y: Tx,
    Y: Ax,
    Z: Px,
    "%": Wp
  }, N = {
    a: oe,
    A: ne,
    b: j,
    B: X,
    c: G,
    d: Ip,
    e: Ip,
    f: Kv,
    g: zp,
    G: Mp,
    H: $p,
    I: $p,
    j: Wv,
    L: Uv,
    m: Hv,
    M: Vv,
    p: re,
    q: Bv,
    Q: Xv,
    s: qv,
    S: jv,
    u: Fv,
    U: Mv,
    V: zv,
    w: Ov,
    W: Iv,
    x: V,
    X: K,
    y: zp,
    Y: Mp,
    Z: $v,
    "%": Yv
  };
  O.x = D(n, O), O.X = D(a, O), O.c = D(t, O), C.x = D(n, C), C.X = D(a, C), C.c = D(t, C);
  function D(Ae, me) {
    return function(_e) {
      var ae = [], se = -1, xe = 0, ze = Ae.length, Ve, qe, Qe;
      for (_e instanceof Date || (_e = /* @__PURE__ */ new Date(+_e)); ++se < ze; )
        Ae.charCodeAt(se) === 37 && (ae.push(Ae.slice(xe, se)), (qe = Fp[Ve = Ae.charAt(++se)]) != null ? Ve = Ae.charAt(++se) : qe = Ve === "e" ? " " : "0", (Qe = me[Ve]) && (Ve = Qe(_e, qe)), ae.push(Ve), xe = se + 1);
      return ae.push(Ae.slice(xe, se)), ae.join("");
    };
  }
  function B(Ae, me) {
    return function(_e) {
      var ae = Zl(1900, void 0, 1), se = H(ae, Ae, _e += "", 0), xe, ze;
      if (se != _e.length)
        return null;
      if ("Q" in ae)
        return new Date(ae.Q);
      if ("s" in ae)
        return new Date(ae.s * 1e3 + ("L" in ae ? ae.L : 0));
      if (me && !("Z" in ae) && (ae.Z = 0), "p" in ae && (ae.H = ae.H % 12 + ae.p * 12), ae.m === void 0 && (ae.m = "q" in ae ? ae.q : 0), "V" in ae) {
        if (ae.V < 1 || ae.V > 53)
          return null;
        "w" in ae || (ae.w = 1), "Z" in ae ? (xe = Rd(Zl(ae.y, 0, 1)), ze = xe.getUTCDay(), xe = ze > 4 || ze === 0 ? Uu.ceil(xe) : Uu(xe), xe = mm.offset(xe, (ae.V - 1) * 7), ae.y = xe.getUTCFullYear(), ae.m = xe.getUTCMonth(), ae.d = xe.getUTCDate() + (ae.w + 6) % 7) : (xe = Pd(Zl(ae.y, 0, 1)), ze = xe.getDay(), xe = ze > 4 || ze === 0 ? ju.ceil(xe) : ju(xe), xe = fm.offset(xe, (ae.V - 1) * 7), ae.y = xe.getFullYear(), ae.m = xe.getMonth(), ae.d = xe.getDate() + (ae.w + 6) % 7);
      } else
        ("W" in ae || "U" in ae) && ("w" in ae || (ae.w = "u" in ae ? ae.u % 7 : "W" in ae ? 1 : 0), ze = "Z" in ae ? Rd(Zl(ae.y, 0, 1)).getUTCDay() : Pd(Zl(ae.y, 0, 1)).getDay(), ae.m = 0, ae.d = "W" in ae ? (ae.w + 6) % 7 + ae.W * 7 - (ze + 5) % 7 : ae.w + ae.U * 7 - (ze + 6) % 7);
      return "Z" in ae ? (ae.H += ae.Z / 100 | 0, ae.M += ae.Z % 100, Rd(ae)) : Pd(ae);
    };
  }
  function H(Ae, me, _e, ae) {
    for (var se = 0, xe = me.length, ze = _e.length, Ve, qe; se < xe; ) {
      if (ae >= ze)
        return -1;
      if (Ve = me.charCodeAt(se++), Ve === 37) {
        if (Ve = me.charAt(se++), qe = N[Ve in Fp ? me.charAt(se++) : Ve], !qe || (ae = qe(Ae, _e, ae)) < 0)
          return -1;
      } else if (Ve != _e.charCodeAt(ae++))
        return -1;
    }
    return ae;
  }
  function re(Ae, me, _e) {
    var ae = m.exec(me.slice(_e));
    return ae ? (Ae.p = y.get(ae[0].toLowerCase()), _e + ae[0].length) : -1;
  }
  function oe(Ae, me, _e) {
    var ae = R.exec(me.slice(_e));
    return ae ? (Ae.w = T.get(ae[0].toLowerCase()), _e + ae[0].length) : -1;
  }
  function ne(Ae, me, _e) {
    var ae = x.exec(me.slice(_e));
    return ae ? (Ae.w = S.get(ae[0].toLowerCase()), _e + ae[0].length) : -1;
  }
  function j(Ae, me, _e) {
    var ae = h.exec(me.slice(_e));
    return ae ? (Ae.m = P.get(ae[0].toLowerCase()), _e + ae[0].length) : -1;
  }
  function X(Ae, me, _e) {
    var ae = F.exec(me.slice(_e));
    return ae ? (Ae.m = k.get(ae[0].toLowerCase()), _e + ae[0].length) : -1;
  }
  function G(Ae, me, _e) {
    return H(Ae, t, me, _e);
  }
  function V(Ae, me, _e) {
    return H(Ae, n, me, _e);
  }
  function K(Ae, me, _e) {
    return H(Ae, a, me, _e);
  }
  function ee(Ae) {
    return d[Ae.getDay()];
  }
  function de(Ae) {
    return l[Ae.getDay()];
  }
  function Q(Ae) {
    return u[Ae.getMonth()];
  }
  function te(Ae) {
    return f[Ae.getMonth()];
  }
  function q(Ae) {
    return i[+(Ae.getHours() >= 12)];
  }
  function Z(Ae) {
    return 1 + ~~(Ae.getMonth() / 3);
  }
  function Me(Ae) {
    return d[Ae.getUTCDay()];
  }
  function ke(Ae) {
    return l[Ae.getUTCDay()];
  }
  function pe(Ae) {
    return u[Ae.getUTCMonth()];
  }
  function Le(Ae) {
    return f[Ae.getUTCMonth()];
  }
  function We(Ae) {
    return i[+(Ae.getUTCHours() >= 12)];
  }
  function Ze(Ae) {
    return 1 + ~~(Ae.getUTCMonth() / 3);
  }
  return {
    format: function(Ae) {
      var me = D(Ae += "", O);
      return me.toString = function() {
        return Ae;
      }, me;
    },
    parse: function(Ae) {
      var me = B(Ae += "", !1);
      return me.toString = function() {
        return Ae;
      }, me;
    },
    utcFormat: function(Ae) {
      var me = D(Ae += "", C);
      return me.toString = function() {
        return Ae;
      }, me;
    },
    utcParse: function(Ae) {
      var me = B(Ae += "", !0);
      return me.toString = function() {
        return Ae;
      }, me;
    }
  };
}
var Fp = { "-": "", _: " ", 0: "0" }, Bn = /^\s*\d+/, Dv = /^%/, _v = /[\\^$*+?|[\]().{}]/g;
function Zt(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", l = i.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + i : i);
}
function Nv(e) {
  return e.replace(_v, "\\$&");
}
function Ql(e) {
  return new RegExp("^(?:" + e.map(Nv).join("|") + ")", "i");
}
function Jl(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Ov(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Fv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Mv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function zv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Iv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Mp(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function zp(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function $v(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Bv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Hv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Ip(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Wv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function $p(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Vv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function jv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Uv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Kv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Yv(e, t, n) {
  var a = Dv.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Xv(e, t, n) {
  var a = Bn.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function qv(e, t, n) {
  var a = Bn.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Bp(e, t) {
  return Zt(e.getDate(), t, 2);
}
function Gv(e, t) {
  return Zt(e.getHours(), t, 2);
}
function Zv(e, t) {
  return Zt(e.getHours() % 12 || 12, t, 2);
}
function Qv(e, t) {
  return Zt(1 + fm.count(ys(e), e), t, 3);
}
function gm(e, t) {
  return Zt(e.getMilliseconds(), t, 3);
}
function Jv(e, t) {
  return gm(e, t) + "000";
}
function ex(e, t) {
  return Zt(e.getMonth() + 1, t, 2);
}
function tx(e, t) {
  return Zt(e.getMinutes(), t, 2);
}
function nx(e, t) {
  return Zt(e.getSeconds(), t, 2);
}
function rx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ax(e, t) {
  return Zt(pm.count(ys(e) - 1, e), t, 2);
}
function vm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ko(e) : Ko.ceil(e);
}
function ix(e, t) {
  return e = vm(e), Zt(Ko.count(ys(e), e) + (ys(e).getDay() === 4), t, 2);
}
function ox(e) {
  return e.getDay();
}
function lx(e, t) {
  return Zt(ju.count(ys(e) - 1, e), t, 2);
}
function sx(e, t) {
  return Zt(e.getFullYear() % 100, t, 2);
}
function ux(e, t) {
  return e = vm(e), Zt(e.getFullYear() % 100, t, 2);
}
function cx(e, t) {
  return Zt(e.getFullYear() % 1e4, t, 4);
}
function dx(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Ko(e) : Ko.ceil(e), Zt(e.getFullYear() % 1e4, t, 4);
}
function fx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Zt(t / 60 | 0, "0", 2) + Zt(t % 60, "0", 2);
}
function Hp(e, t) {
  return Zt(e.getUTCDate(), t, 2);
}
function px(e, t) {
  return Zt(e.getUTCHours(), t, 2);
}
function hx(e, t) {
  return Zt(e.getUTCHours() % 12 || 12, t, 2);
}
function mx(e, t) {
  return Zt(1 + mm.count(gs(e), e), t, 3);
}
function xm(e, t) {
  return Zt(e.getUTCMilliseconds(), t, 3);
}
function yx(e, t) {
  return xm(e, t) + "000";
}
function gx(e, t) {
  return Zt(e.getUTCMonth() + 1, t, 2);
}
function vx(e, t) {
  return Zt(e.getUTCMinutes(), t, 2);
}
function xx(e, t) {
  return Zt(e.getUTCSeconds(), t, 2);
}
function bx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Sx(e, t) {
  return Zt(ym.count(gs(e) - 1, e), t, 2);
}
function bm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Yo(e) : Yo.ceil(e);
}
function Ex(e, t) {
  return e = bm(e), Zt(Yo.count(gs(e), e) + (gs(e).getUTCDay() === 4), t, 2);
}
function kx(e) {
  return e.getUTCDay();
}
function wx(e, t) {
  return Zt(Uu.count(gs(e) - 1, e), t, 2);
}
function Tx(e, t) {
  return Zt(e.getUTCFullYear() % 100, t, 2);
}
function Cx(e, t) {
  return e = bm(e), Zt(e.getUTCFullYear() % 100, t, 2);
}
function Ax(e, t) {
  return Zt(e.getUTCFullYear() % 1e4, t, 4);
}
function Lx(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Yo(e) : Yo.ceil(e), Zt(e.getUTCFullYear() % 1e4, t, 4);
}
function Px() {
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
var zo, Yd, Sm;
Rx({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Rx(e) {
  return zo = Rv(e), Yd = zo.format, Sm = zo.parse, zo.utcFormat, zo.utcParse, zo;
}
const Et = ce.createContext({}), Wt = {
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
    if (Wt.str(e) || Wt.num(e))
      return e === t;
    if (Wt.obj(e) && Wt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Wt.und(n) ? e === t : !0;
  }
};
function Dx(e, t) {
  return t === void 0 && (t = !0), (n) => (Wt.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const l = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[l] = e(l), a;
  }, e);
}
function Em() {
  const e = ce.useState(!1), t = e[1];
  return ce.useCallback(() => t((a) => !a), []);
}
function ki(e, t) {
  return Wt.und(e) || Wt.nul(e) ? t : e;
}
function Wo(e) {
  return Wt.und(e) ? [] : Wt.arr(e) ? e : [e];
}
function Rr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Wt.fun(e) ? e(...n) : e;
}
function _x(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Kr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Dd(e) {
  const t = _x(e);
  if (Wt.und(t))
    return fn({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, i) => Wt.und(t[i]) ? fn({}, a, {
    [i]: e[i]
  }) : a, {});
  return fn({
    to: t
  }, n);
}
function Nx(e, t) {
  return t && (Wt.fun(t) ? t(e) : Wt.obj(t) && (t.current = e)), e;
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
class km extends Dr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Dr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Dr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const i = this.payload[a];
      t && !(i instanceof Dr) || (n[a] = i instanceof Dr ? i[t ? "getAnimatedValue" : "getValue"]() : i);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Pf;
function Ox(e, t) {
  Pf = {
    fn: e,
    transform: t
  };
}
let wm;
function Fx(e) {
  wm = e;
}
let Tm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Ku;
function Mx(e) {
  Ku = e;
}
let Cm = () => Date.now(), zx = (e) => e.current, Am;
function Ix(e) {
  Am = e;
}
class $x extends km {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? fn({}, t, {
      style: Am(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Bx = (e) => Wt.fun(e) && !(e.prototype instanceof r.Component), Hx = (e) => ce.forwardRef((n, a) => {
  const i = Em(), l = ce.useRef(!0), d = ce.useRef(null), f = ce.useRef(null), u = ce.useCallback((S) => {
    const R = d.current, T = () => {
      let F = !1;
      f.current && (F = Pf.fn(f.current, d.current.getAnimatedValue())), (!f.current || F === !1) && i();
    };
    d.current = new $x(S, T), R && R.detach();
  }, []);
  ce.useEffect(() => () => {
    l.current = !1, d.current && d.current.detach();
  }, []), ce.useImperativeHandle(a, () => zx(f)), u(n);
  const m = d.current.getValue();
  m.scrollTop, m.scrollLeft;
  const y = Kr(m, ["scrollTop", "scrollLeft"]), x = Bx(e) ? void 0 : (S) => f.current = Nx(S, a);
  return r.createElement(e, fn({}, y, {
    ref: x
  }));
});
let as = !1;
const _i = /* @__PURE__ */ new Set(), Lm = () => {
  if (!as)
    return !1;
  let e = Cm();
  for (let t of _i) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let i = t.configs[a], l, d;
      for (let f = 0; f < i.animatedValues.length; f++) {
        let u = i.animatedValues[f];
        if (u.done)
          continue;
        let m = i.fromValues[f], y = i.toValues[f], x = u.lastPosition, S = y instanceof Dr, R = Array.isArray(i.initialVelocity) ? i.initialVelocity[f] : i.initialVelocity;
        if (S && (y = y.getValue()), i.immediate) {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (typeof m == "string" || typeof y == "string") {
          u.setValue(y), u.done = !0;
          continue;
        }
        if (i.duration !== void 0)
          x = m + i.easing((e - u.startTime) / i.duration) * (y - m), l = e >= u.startTime + i.duration;
        else if (i.decay)
          x = m + R / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - u.startTime))), l = Math.abs(u.lastPosition - x) < 0.1, l && (y = x);
        else {
          d = u.lastTime !== void 0 ? u.lastTime : e, R = u.lastVelocity !== void 0 ? u.lastVelocity : i.initialVelocity, e > d + 64 && (d = e);
          let T = Math.floor(e - d);
          for (let P = 0; P < T; ++P) {
            let O = -i.tension * (x - y), C = -i.friction * R, N = (O + C) / i.mass;
            R = R + N * 1 / 1e3, x = x + R * 1 / 1e3;
          }
          let F = i.clamp && i.tension !== 0 ? m < y ? x > y : x < y : !1, k = Math.abs(R) <= i.precision, h = i.tension !== 0 ? Math.abs(y - x) <= i.precision : !0;
          l = F || k && h, u.lastVelocity = R, u.lastTime = e;
        }
        S && !i.toValues[f].done && (l = !1), l ? (u.value !== y && (x = y), u.done = !0) : n = !0, u.setValue(x), u.lastPosition = x;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (_i.delete(t), t.stop(!0));
  }
  return _i.size ? Tm(Lm) : as = !1, as;
}, Wx = (e) => {
  _i.has(e) || _i.add(e), as || (as = !0, Tm(Lm));
}, Vx = (e) => {
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
  const a = e, i = a.output, l = a.range || [0, 1], d = a.extrapolateLeft || a.extrapolate || "extend", f = a.extrapolateRight || a.extrapolate || "extend", u = a.easing || ((m) => m);
  return (m) => {
    const y = Ux(m, l);
    return jx(m, l[y], l[y + 1], i[y], i[y + 1], u, d, f, a.map);
  };
}
function jx(e, t, n, a, i, l, d, f, u) {
  let m = u ? u(e) : e;
  if (m < t) {
    if (d === "identity")
      return m;
    d === "clamp" && (m = t);
  }
  if (m > n) {
    if (f === "identity")
      return m;
    f === "clamp" && (m = n);
  }
  return a === i ? a : t === n ? e <= t ? a : i : (t === -1 / 0 ? m = -m : n === 1 / 0 ? m = m - t : m = (m - t) / (n - t), m = l(m), a === -1 / 0 ? m = -m : i === 1 / 0 ? m = m + a : m = m * (i - a) + a, m);
}
function Ux(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Xo extends Xd {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof Xd && !(t instanceof Xo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Yu(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = Yu(t, n, a);
  }
  interpolate(t, n, a) {
    return new Xo(this, t, n, a);
  }
}
const Kx = (e, t, n) => e && new Xo(e, t, n);
function Pm(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Pm(n, t));
}
class qd extends Dr {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, i) {
      i === void 0 && (i = !0), n.value = a, i && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Pm(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, a) {
    return new Xo(this, t, n, a);
  }
}
class Yx extends Xd {
  constructor(t) {
    super(), this.payload = t.map((n) => new qd(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, i) => this.payload[i].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Xo(this, t, n);
  }
}
let Xx = 0;
class qx {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Xx++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Dd(t), a = n.delay, i = a === void 0 ? 0 : a, l = n.to, d = Kr(n, ["delay", "to"]);
    if (Wt.arr(l) || Wt.fun(l))
      this.queue.push(fn({}, d, {
        delay: i,
        to: l
      }));
    else if (l) {
      let f = {};
      Object.entries(l).forEach((u) => {
        let m = u[0], y = u[1];
        const x = fn({
          to: {
            [m]: y
          },
          delay: Rr(i, m)
        }, d), S = f[x.delay] && f[x.delay].to;
        f[x.delay] = fn({}, f[x.delay], x, {
          to: fn({}, S, x.to)
        });
      }), this.queue = Object.values(f);
    }
    return this.queue = this.queue.sort((f, u) => f.delay - u.delay), this.diff(d), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((i) => {
        let l = i.from, d = l === void 0 ? {} : l, f = i.to, u = f === void 0 ? {} : f;
        Wt.obj(d) && (this.merged = fn({}, d, this.merged)), Wt.obj(u) && (this.merged = fn({}, this.merged, u));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((i, l) => {
        let d = i.delay, f = Kr(i, ["delay"]);
        const u = (y) => {
          l === a.length - 1 && n === this.guid && y && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let m = Wt.arr(f.to) || Wt.fun(f.to);
        d ? setTimeout(() => {
          n === this.guid && (m ? this.runAsync(f, u) : this.diff(f).start(u));
        }, d) : m ? this.runAsync(f, u) : this.diff(f).start(u);
      });
    } else
      Wt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Wx(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Vx(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = Kr(t, ["delay"]);
    const l = this.local;
    let d = Promise.resolve(void 0);
    if (Wt.arr(i.to))
      for (let f = 0; f < i.to.length; f++) {
        const u = f, m = fn({}, i, Dd(i.to[u]));
        Wt.arr(m.config) && (m.config = m.config[u]), d = d.then(() => {
          if (l === this.guid)
            return new Promise((y) => this.diff(m).start(y));
        });
      }
    else if (Wt.fun(i.to)) {
      let f = 0, u;
      d = d.then(() => i.to(
        // next(props)
        (m) => {
          const y = fn({}, i, Dd(m));
          if (Wt.arr(y.config) && (y.config = y.config[f]), f++, l === this.guid)
            return u = new Promise((x) => this.diff(y).start(x));
        },
        // cancel()
        function(m) {
          return m === void 0 && (m = !0), a.stop(m);
        }
      ).then(() => u));
    }
    d.then(n);
  }
  diff(t) {
    this.props = fn({}, this.props, t);
    let n = this.props, a = n.from, i = a === void 0 ? {} : a, l = n.to, d = l === void 0 ? {} : l, f = n.config, u = f === void 0 ? {} : f, m = n.reverse, y = n.attach, x = n.reset, S = n.immediate;
    if (m) {
      var R = [d, i];
      i = R[0], d = R[1];
    }
    this.merged = fn({}, i, this.merged, d), this.hasChanged = !1;
    let T = y && y(this);
    if (this.animations = Object.entries(this.merged).reduce((F, k) => {
      let h = k[0], P = k[1], O = F[h] || {};
      const C = Wt.num(P), N = Wt.str(P) && !P.startsWith("#") && !/\d/.test(P) && !wm[P], D = Wt.arr(P), B = !C && !D && !N;
      let H = Wt.und(i[h]) ? P : i[h], re = C || D || N ? P : 1, oe = Rr(u, h);
      T && (re = T.animations[h].parent);
      let ne = O.parent, j = O.interpolation, X = Wo(T ? re.getPayload() : re), G, V = P;
      B && (V = Ku({
        range: [0, 1],
        output: [P, P]
      })(1));
      let K = j && j.getValue();
      const de = !Wt.und(ne) && O.animatedValues.some((Z) => !Z.done), Q = !Wt.equ(V, K), te = !Wt.equ(V, O.previous), q = !Wt.equ(oe, O.config);
      if (x || te && Q || q) {
        if (C || N)
          ne = j = O.parent || new qd(H);
        else if (D)
          ne = j = O.parent || new Yx(H);
        else if (B) {
          let Z = O.interpolation && O.interpolation.calc(O.parent.value);
          Z = Z !== void 0 && !x ? Z : H, O.parent ? (ne = O.parent, ne.setValue(0, !1)) : ne = new qd(0);
          const Me = {
            output: [Z, P]
          };
          O.interpolation ? (j = O.interpolation, O.interpolation.updateConfig(Me)) : j = ne.interpolate(Me);
        }
        return X = Wo(T ? re.getPayload() : re), G = Wo(ne.getPayload()), x && !B && ne.setValue(H, !1), this.hasChanged = !0, G.forEach((Z) => {
          Z.startPosition = Z.value, Z.lastPosition = Z.value, Z.lastVelocity = de ? Z.lastVelocity : void 0, Z.lastTime = de ? Z.lastTime : void 0, Z.startTime = Cm(), Z.done = !1, Z.animatedStyles.clear();
        }), Rr(S, h) && ne.setValue(B ? re : P, !1), fn({}, F, {
          [h]: fn({}, O, {
            name: h,
            parent: ne,
            interpolation: j,
            animatedValues: G,
            toValues: X,
            previous: V,
            config: oe,
            fromValues: Wo(ne.getValue()),
            immediate: Rr(S, h),
            initialVelocity: ki(oe.velocity, 0),
            clamp: ki(oe.clamp, !1),
            precision: ki(oe.precision, 0.01),
            tension: ki(oe.tension, 170),
            friction: ki(oe.friction, 26),
            mass: ki(oe.mass, 1),
            duration: oe.duration,
            easing: ki(oe.easing, (Z) => Z),
            decay: oe.decay
          })
        });
      } else
        return Q ? F : (B && (ne.setValue(1, !1), j.updateConfig({
          output: [V, V]
        })), ne.done = !0, this.hasChanged = !0, fn({}, F, {
          [h]: fn({}, F[h], {
            previous: V
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
let Gx = 0;
const Ou = "enter", _d = "leave", Nd = "update", Zx = (e, t) => (typeof t == "function" ? e.map(t) : Wo(t)).map(String), Gd = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, i = Kr(e, ["items", "keys"]);
  return t = Wo(t !== void 0 ? t : null), fn({
    items: t,
    keys: Zx(t, a)
  }, i);
};
function Qx(e, t, n) {
  const a = fn({
    items: e,
    keys: t || ((P) => P)
  }, n), i = Gd(a), l = i.lazy, d = l === void 0 ? !1 : l;
  i.unique;
  const f = i.reset, u = f === void 0 ? !1 : f;
  i.enter, i.leave, i.update;
  const m = i.onDestroyed;
  i.keys, i.items;
  const y = i.onFrame, x = i.onRest, S = i.onStart, R = i.ref, T = Kr(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), F = Em(), k = ce.useRef(!1), h = ce.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !k.current && /* @__PURE__ */ new Map(),
    forceUpdate: F
  });
  return ce.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(h.current.instances).map((P) => {
      let O = P[1];
      return new Promise((C) => O.start(C));
    })),
    stop: (P) => Array.from(h.current.instances).forEach((O) => O[1].stop(P)),
    get controllers() {
      return Array.from(h.current.instances).map((P) => P[1]);
    }
  })), h.current = Jx(h.current, a), h.current.changed && h.current.transitions.forEach((P) => {
    const O = P.slot, C = P.from, N = P.to, D = P.config, B = P.trail, H = P.key, re = P.item;
    h.current.instances.has(H) || h.current.instances.set(H, new qx());
    const oe = h.current.instances.get(H), ne = fn({}, T, {
      to: N,
      from: C,
      config: D,
      ref: R,
      onRest: (j) => {
        h.current.mounted && (P.destroyed && (!R && !d && Up(h, H), m && m(re)), !Array.from(h.current.instances).some((V) => !V[1].idle) && (R || d) && h.current.deleted.length > 0 && Up(h), x && x(re, O, j));
      },
      onStart: S && (() => S(re, O)),
      onFrame: y && ((j) => y(re, O, j)),
      delay: B,
      reset: u && O === Ou
      // Update controller
    });
    oe.update(ne), h.current.paused || oe.start();
  }), ce.useEffect(() => (h.current.mounted = k.current = !0, () => {
    h.current.mounted = k.current = !1, Array.from(h.current.instances).map((P) => P[1].destroy()), h.current.instances.clear();
  }), []), h.current.transitions.map((P) => {
    let O = P.item, C = P.slot, N = P.key;
    return {
      item: O,
      key: N,
      state: C,
      props: h.current.instances.get(N).getValues()
    };
  });
}
function Up(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const l = (d) => d.key !== i;
    (Wt.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Jx(e, t) {
  let n = e.first, a = e.prevProps, i = Kr(e, ["first", "prevProps"]), l = Gd(t), d = l.items, f = l.keys, u = l.initial, m = l.from, y = l.enter, x = l.leave, S = l.update, R = l.trail, T = R === void 0 ? 0 : R, F = l.unique, k = l.config, h = l.order, P = h === void 0 ? [Ou, _d, Nd] : h, O = Gd(a), C = O.keys, N = O.items, D = fn({}, i.current), B = [...i.deleted], H = Object.keys(D), re = new Set(H), oe = new Set(f), ne = f.filter((K) => !re.has(K)), j = i.transitions.filter((K) => !K.destroyed && !oe.has(K.originalKey)).map((K) => K.originalKey), X = f.filter((K) => re.has(K)), G = -T;
  for (; P.length; )
    switch (P.shift()) {
      case Ou: {
        ne.forEach((ee, de) => {
          F && B.find((Z) => Z.originalKey === ee) && (B = B.filter((Z) => Z.originalKey !== ee));
          const Q = f.indexOf(ee), te = d[Q], q = n && u !== void 0 ? "initial" : Ou;
          D[ee] = {
            slot: q,
            originalKey: ee,
            key: F ? String(ee) : Gx++,
            item: te,
            trail: G = G + T,
            config: Rr(k, te, q),
            from: Rr(n && u !== void 0 ? u || {} : m, te),
            to: Rr(y, te)
          };
        });
        break;
      }
      case _d: {
        j.forEach((ee) => {
          const de = C.indexOf(ee), Q = N[de], te = _d;
          B.unshift(fn({}, D[ee], {
            slot: te,
            destroyed: !0,
            left: C[Math.max(0, de - 1)],
            right: C[Math.min(C.length, de + 1)],
            trail: G = G + T,
            config: Rr(k, Q, te),
            to: Rr(x, Q)
          })), delete D[ee];
        });
        break;
      }
      case Nd: {
        X.forEach((ee) => {
          const de = f.indexOf(ee), Q = d[de], te = Nd;
          D[ee] = fn({}, D[ee], {
            item: Q,
            slot: te,
            trail: G = G + T,
            config: Rr(k, Q, te),
            to: Rr(S, Q)
          });
        });
        break;
      }
    }
  let V = f.map((K) => D[K]);
  return B.forEach((K) => {
    let ee = K.left;
    K.right;
    let de = Kr(K, ["left", "right"]), Q;
    (Q = V.findIndex((te) => te.originalKey === ee)) !== -1 && (Q += 1), Q = Math.max(0, Q), V = [...V.slice(0, Q), de, ...V.slice(Q)];
  }), fn({}, i, {
    changed: ne.length || j.length || X.length,
    first: n && ne.length === 0,
    transitions: V,
    current: D,
    deleted: B,
    prevProps: t
  });
}
class eb extends km {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Dr) && (t = Pf.transform(t)), this.payload = t;
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
const tb = new RegExp("rgb" + gc(_r, _r, _r)), nb = new RegExp("rgba" + gc(_r, _r, _r, _r)), rb = new RegExp("hsl" + gc(_r, qu, qu)), ab = new RegExp("hsla" + gc(_r, qu, qu, _r)), ib = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ob = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, lb = /^#([0-9a-fA-F]{6})$/, sb = /^#([0-9a-fA-F]{8})$/;
function ub(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = lb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Xu.hasOwnProperty(e) ? Xu[e] : (t = tb.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = nb.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  Xp(t[4])) >>> // a
  0 : (t = ib.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = sb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ob.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = rb.exec(e)) ? (Kp(
    Yp(t[1]),
    // h
    bu(t[2]),
    // s
    bu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = ab.exec(e)) ? (Kp(
    Yp(t[1]),
    // h
    bu(t[2]),
    // s
    bu(t[3])
    // l
  ) | Xp(t[4])) >>> // a
  0 : null;
}
function Od(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Kp(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, l = Od(i, a, e + 1 / 3), d = Od(i, a, e), f = Od(i, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(d * 255) << 16 | Math.round(f * 255) << 8;
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
function bu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function qp(e) {
  let t = ub(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${l})`;
}
const Su = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, cb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, db = new RegExp(`(${Object.keys(Xu).join("|")})`, "g"), fb = (e) => {
  const t = e.output.map((i) => i.replace(cb, qp)).map((i) => i.replace(db, qp)), n = t[0].match(Su).map(() => []);
  t.forEach((i) => {
    i.match(Su).forEach((l, d) => n[d].push(+l));
  });
  const a = t[0].match(Su).map((i, l) => Yu(fn({}, e, {
    output: n[l]
  })));
  return (i) => {
    let l = 0;
    return t[0].replace(Su, () => a[l++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (d, f, u, m, y) => `rgba(${Math.round(f)}, ${Math.round(u)}, ${Math.round(m)}, ${y})`);
  };
};
let is = {
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
const pb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), hb = ["Webkit", "Ms", "Moz", "O"];
is = Object.keys(is).reduce((e, t) => (hb.forEach((n) => e[pb(n, t)] = e[t]), e), is);
function mb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(is.hasOwnProperty(e) && is[e]) ? t + "px" : ("" + t).trim();
}
const Gp = {};
Ix((e) => new eb(e));
Mx(fb);
Fx(Xu);
Ox((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, l = t.children, d = t.scrollTop, f = t.scrollLeft, u = Kr(t, ["style", "children", "scrollTop", "scrollLeft"]), m = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    d !== void 0 && (e.scrollTop = d), f !== void 0 && (e.scrollLeft = f), l !== void 0 && (e.textContent = l);
    for (let y in i)
      if (i.hasOwnProperty(y)) {
        var n = y.indexOf("--") === 0, a = mb(y, i[y], n);
        y === "float" && (y = "cssFloat"), n ? e.style.setProperty(y, a) : e.style[y] = a;
      }
    for (let y in u) {
      const x = m ? y : Gp[y] || (Gp[y] = y.replace(/([A-Z])/g, (S) => "-" + S.toLowerCase()));
      typeof e.getAttribute(x) < "u" && e.setAttribute(x, u[y]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const yb = [
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
], gb = Dx(Hx, !1), Zp = gb(yb);
function vb(e) {
  return e.innerRadius;
}
function xb(e) {
  return e.outerRadius;
}
function bb(e) {
  return e.startAngle;
}
function Sb(e) {
  return e.endAngle;
}
function Eb(e) {
  return e && e.padAngle;
}
function kb(e, t, n, a, i, l, d, f) {
  var u = n - e, m = a - t, y = d - i, x = f - l, S = x * u - y * m;
  if (!(S * S < Zn))
    return S = (y * (t - l) - x * (e - i)) / S, [e + S * u, t + S * m];
}
function Eu(e, t, n, a, i, l, d) {
  var f = e - n, u = t - a, m = (d ? l : -l) / $o(f * f + u * u), y = m * u, x = -m * f, S = e + y, R = t + x, T = n + y, F = a + x, k = (S + T) / 2, h = (R + F) / 2, P = T - S, O = F - R, C = P * P + O * O, N = i - l, D = S * F - T * R, B = (O < 0 ? -1 : 1) * $o(Wy(0, N * N * C - D * D)), H = (D * O - P * B) / C, re = (-D * P - O * B) / C, oe = (D * O + P * B) / C, ne = (-D * P + O * B) / C, j = H - k, X = re - h, G = oe - k, V = ne - h;
  return j * j + X * X > G * G + V * V && (H = oe, re = ne), {
    cx: H,
    cy: re,
    x01: -y,
    y01: -x,
    x11: H * (i / N - 1),
    y11: re * (i / N - 1)
  };
}
function wb() {
  var e = vb, t = xb, n = Ut(0), a = null, i = bb, l = Sb, d = Eb, f = null;
  function u() {
    var m, y, x = +e.apply(this, arguments), S = +t.apply(this, arguments), R = i.apply(this, arguments) - rp, T = l.apply(this, arguments) - rp, F = ap(T - R), k = T > R;
    if (f || (f = m = mc()), S < x && (y = S, S = x, x = y), !(S > Zn))
      f.moveTo(0, 0);
    else if (F > _u - Zn)
      f.moveTo(S * Si(R), S * Hr(R)), f.arc(0, 0, S, R, T, !k), x > Zn && (f.moveTo(x * Si(T), x * Hr(T)), f.arc(0, 0, x, T, R, k));
    else {
      var h = R, P = T, O = R, C = T, N = F, D = F, B = d.apply(this, arguments) / 2, H = B > Zn && (a ? +a.apply(this, arguments) : $o(x * x + S * S)), re = Ed(ap(S - x) / 2, +n.apply(this, arguments)), oe = re, ne = re, j, X;
      if (H > Zn) {
        var G = ip(H / x * Hr(B)), V = ip(H / S * Hr(B));
        (N -= G * 2) > Zn ? (G *= k ? 1 : -1, O += G, C -= G) : (N = 0, O = C = (R + T) / 2), (D -= V * 2) > Zn ? (V *= k ? 1 : -1, h += V, P -= V) : (D = 0, h = P = (R + T) / 2);
      }
      var K = S * Si(h), ee = S * Hr(h), de = x * Si(C), Q = x * Hr(C);
      if (re > Zn) {
        var te = S * Si(P), q = S * Hr(P), Z = x * Si(O), Me = x * Hr(O), ke;
        if (F < np && (ke = kb(K, ee, Z, Me, te, q, de, Q))) {
          var pe = K - ke[0], Le = ee - ke[1], We = te - ke[0], Ze = q - ke[1], Ae = 1 / Hr(Hy((pe * We + Le * Ze) / ($o(pe * pe + Le * Le) * $o(We * We + Ze * Ze))) / 2), me = $o(ke[0] * ke[0] + ke[1] * ke[1]);
          oe = Ed(re, (x - me) / (Ae - 1)), ne = Ed(re, (S - me) / (Ae + 1));
        }
      }
      D > Zn ? ne > Zn ? (j = Eu(Z, Me, K, ee, S, ne, k), X = Eu(te, q, de, Q, S, ne, k), f.moveTo(j.cx + j.x01, j.cy + j.y01), ne < re ? f.arc(j.cx, j.cy, ne, Gn(j.y01, j.x01), Gn(X.y01, X.x01), !k) : (f.arc(j.cx, j.cy, ne, Gn(j.y01, j.x01), Gn(j.y11, j.x11), !k), f.arc(0, 0, S, Gn(j.cy + j.y11, j.cx + j.x11), Gn(X.cy + X.y11, X.cx + X.x11), !k), f.arc(X.cx, X.cy, ne, Gn(X.y11, X.x11), Gn(X.y01, X.x01), !k))) : (f.moveTo(K, ee), f.arc(0, 0, S, h, P, !k)) : f.moveTo(K, ee), !(x > Zn) || !(N > Zn) ? f.lineTo(de, Q) : oe > Zn ? (j = Eu(de, Q, te, q, x, -oe, k), X = Eu(K, ee, Z, Me, x, -oe, k), f.lineTo(j.cx + j.x01, j.cy + j.y01), oe < re ? f.arc(j.cx, j.cy, oe, Gn(j.y01, j.x01), Gn(X.y01, X.x01), !k) : (f.arc(j.cx, j.cy, oe, Gn(j.y01, j.x01), Gn(j.y11, j.x11), !k), f.arc(0, 0, x, Gn(j.cy + j.y11, j.cx + j.x11), Gn(X.cy + X.y11, X.cx + X.x11), k), f.arc(X.cx, X.cy, oe, Gn(X.y11, X.x11), Gn(X.y01, X.x01), !k))) : f.arc(0, 0, x, C, O, k);
    }
    if (f.closePath(), m)
      return f = null, m + "" || null;
  }
  return u.centroid = function() {
    var m = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+i.apply(this, arguments) + +l.apply(this, arguments)) / 2 - np / 2;
    return [Si(y) * m, Hr(y) * m];
  }, u.innerRadius = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : Ut(+m), u) : e;
  }, u.outerRadius = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : Ut(+m), u) : t;
  }, u.cornerRadius = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : Ut(+m), u) : n;
  }, u.padRadius = function(m) {
    return arguments.length ? (a = m == null ? null : typeof m == "function" ? m : Ut(+m), u) : a;
  }, u.startAngle = function(m) {
    return arguments.length ? (i = typeof m == "function" ? m : Ut(+m), u) : i;
  }, u.endAngle = function(m) {
    return arguments.length ? (l = typeof m == "function" ? m : Ut(+m), u) : l;
  }, u.padAngle = function(m) {
    return arguments.length ? (d = typeof m == "function" ? m : Ut(+m), u) : d;
  }, u.context = function(m) {
    return arguments.length ? (f = m ?? null, u) : f;
  }, u;
}
function Rm(e) {
  this._context = e;
}
Rm.prototype = {
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
  return new Rm(e);
}
function Rf(e) {
  return e[0];
}
function Df(e) {
  return e[1];
}
function Dm() {
  var e = Rf, t = Df, n = Ut(!0), a = null, i = vc, l = null;
  function d(f) {
    var u, m = f.length, y, x = !1, S;
    for (a == null && (l = i(S = mc())), u = 0; u <= m; ++u)
      !(u < m && n(y = f[u], u, f)) === x && ((x = !x) ? l.lineStart() : l.lineEnd()), x && l.point(+e(y, u, f), +t(y, u, f));
    if (S)
      return l = null, S + "" || null;
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ut(+f), d) : e;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ut(+f), d) : t;
  }, d.defined = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Ut(!!f), d) : n;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, a != null && (l = i(a)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? a = l = null : l = i(a = f), d) : a;
  }, d;
}
function Tb() {
  var e = Rf, t = null, n = Ut(0), a = Df, i = Ut(!0), l = null, d = vc, f = null;
  function u(y) {
    var x, S, R, T = y.length, F, k = !1, h, P = new Array(T), O = new Array(T);
    for (l == null && (f = d(h = mc())), x = 0; x <= T; ++x) {
      if (!(x < T && i(F = y[x], x, y)) === k)
        if (k = !k)
          S = x, f.areaStart(), f.lineStart();
        else {
          for (f.lineEnd(), f.lineStart(), R = x - 1; R >= S; --R)
            f.point(P[R], O[R]);
          f.lineEnd(), f.areaEnd();
        }
      k && (P[x] = +e(F, x, y), O[x] = +n(F, x, y), f.point(t ? +t(F, x, y) : P[x], a ? +a(F, x, y) : O[x]));
    }
    if (h)
      return f = null, h + "" || null;
  }
  function m() {
    return Dm().defined(i).curve(d).context(l);
  }
  return u.x = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ut(+y), t = null, u) : e;
  }, u.x0 = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ut(+y), u) : e;
  }, u.x1 = function(y) {
    return arguments.length ? (t = y == null ? null : typeof y == "function" ? y : Ut(+y), u) : t;
  }, u.y = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ut(+y), a = null, u) : n;
  }, u.y0 = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Ut(+y), u) : n;
  }, u.y1 = function(y) {
    return arguments.length ? (a = y == null ? null : typeof y == "function" ? y : Ut(+y), u) : a;
  }, u.lineX0 = u.lineY0 = function() {
    return m().x(e).y(n);
  }, u.lineY1 = function() {
    return m().x(e).y(a);
  }, u.lineX1 = function() {
    return m().x(t).y(n);
  }, u.defined = function(y) {
    return arguments.length ? (i = typeof y == "function" ? y : Ut(!!y), u) : i;
  }, u.curve = function(y) {
    return arguments.length ? (d = y, l != null && (f = d(l)), u) : d;
  }, u.context = function(y) {
    return arguments.length ? (y == null ? l = f = null : f = d(l = y), u) : l;
  }, u;
}
function Cb(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ab(e) {
  return e;
}
function Lb() {
  var e = Ab, t = Cb, n = null, a = Ut(0), i = Ut(_u), l = Ut(0);
  function d(f) {
    var u, m = f.length, y, x, S = 0, R = new Array(m), T = new Array(m), F = +a.apply(this, arguments), k = Math.min(_u, Math.max(-_u, i.apply(this, arguments) - F)), h, P = Math.min(Math.abs(k) / m, l.apply(this, arguments)), O = P * (k < 0 ? -1 : 1), C;
    for (u = 0; u < m; ++u)
      (C = T[R[u] = u] = +e(f[u], u, f)) > 0 && (S += C);
    for (t != null ? R.sort(function(N, D) {
      return t(T[N], T[D]);
    }) : n != null && R.sort(function(N, D) {
      return n(f[N], f[D]);
    }), u = 0, x = S ? (k - m * O) / S : 0; u < m; ++u, F = h)
      y = R[u], C = T[y], h = F + (C > 0 ? C * x : 0) + O, T[y] = {
        data: f[y],
        index: u,
        value: C,
        startAngle: F,
        endAngle: h,
        padAngle: P
      };
    return T;
  }
  return d.value = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ut(+f), d) : e;
  }, d.sortValues = function(f) {
    return arguments.length ? (t = f, n = null, d) : t;
  }, d.sort = function(f) {
    return arguments.length ? (n = f, t = null, d) : n;
  }, d.startAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ut(+f), d) : a;
  }, d.endAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ut(+f), d) : i;
  }, d.padAngle = function(f) {
    return arguments.length ? (l = typeof f == "function" ? f : Ut(+f), d) : l;
  }, d;
}
var Zd = Array.prototype.slice;
function Pb(e) {
  return e.source;
}
function Rb(e) {
  return e.target;
}
function Db(e) {
  var t = Pb, n = Rb, a = Rf, i = Df, l = null;
  function d() {
    var f, u = Zd.call(arguments), m = t.apply(this, u), y = n.apply(this, u);
    if (l || (l = f = mc()), e(l, +a.apply(this, (u[0] = m, u)), +i.apply(this, u), +a.apply(this, (u[0] = y, u)), +i.apply(this, u)), f)
      return l = null, f + "" || null;
  }
  return d.source = function(f) {
    return arguments.length ? (t = f, d) : t;
  }, d.target = function(f) {
    return arguments.length ? (n = f, d) : n;
  }, d.x = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ut(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ut(+f), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (l = f ?? null, d) : l;
  }, d;
}
function _b(e, t, n, a, i) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + a) / 2, n, t, i, a, i);
}
function Nb() {
  return Db(_b);
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
function Ob(e) {
  return new xc(e);
}
function _m(e) {
  this._context = e;
}
_m.prototype = {
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
function Fb(e) {
  return new _m(e);
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
        var n = (this._x0 + 4 * this._x1 + e) / 6, a = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, a) : this._context.moveTo(n, a);
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
function Mb(e) {
  return new Nm(e);
}
function Om(e, t) {
  this._basis = new xc(e), this._beta = t;
}
Om.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], i = t[0], l = e[n] - a, d = t[n] - i, f = -1, u; ++f <= n; )
        u = f / n, this._basis.point(
          this._beta * e[f] + (1 - this._beta) * (a + u * l),
          this._beta * t[f] + (1 - this._beta) * (i + u * d)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const zb = function e(t) {
  function n(a) {
    return t === 1 ? new xc(a) : new Om(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
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
function _f(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
_f.prototype = {
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
const Ib = function e(t) {
  function n(a) {
    return new _f(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Nf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Nf.prototype = {
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
const $b = function e(t) {
  function n(a) {
    return new Nf(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Of(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Of.prototype = {
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
const Bb = function e(t) {
  function n(a) {
    return new Of(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Ff(e, t, n) {
  var a = e._x1, i = e._y1, l = e._x2, d = e._y2;
  if (e._l01_a > Zn) {
    var f = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, u = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * f - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u, i = (i * f - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
  }
  if (e._l23_a > Zn) {
    var m = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, y = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * m + e._x1 * e._l23_2a - t * e._l12_2a) / y, d = (d * m + e._y1 * e._l23_2a - n * e._l12_2a) / y;
  }
  e._context.bezierCurveTo(a, i, l, d, e._x2, e._y2);
}
function Fm(e, t) {
  this._context = e, this._alpha = t;
}
Fm.prototype = {
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
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
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
        Ff(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hb = function e(t) {
  function n(a) {
    return t ? new Fm(a, t) : new _f(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Mm(e, t) {
  this._context = e, this._alpha = t;
}
Mm.prototype = {
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
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
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
        Ff(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Wb = function e(t) {
  function n(a) {
    return t ? new Mm(a, t) : new Nf(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function zm(e, t) {
  this._context = e, this._alpha = t;
}
zm.prototype = {
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
      var n = this._x2 - e, a = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + a * a, this._alpha));
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
        Ff(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Vb = function e(t) {
  function n(a) {
    return t ? new zm(a, t) : new Of(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Im(e) {
  this._context = e;
}
Im.prototype = {
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
  return new Im(e);
}
function Qp(e) {
  return e < 0 ? -1 : 1;
}
function Jp(e, t, n) {
  var a = e._x1 - e._x0, i = t - e._x1, l = (e._y1 - e._y0) / (a || i < 0 && -0), d = (n - e._y1) / (i || a < 0 && -0), f = (l * i + d * a) / (a + i);
  return (Qp(l) + Qp(d)) * Math.min(Math.abs(l), Math.abs(d), 0.5 * Math.abs(f)) || 0;
}
function eh(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Fd(e, t, n) {
  var a = e._x0, i = e._y0, l = e._x1, d = e._y1, f = (l - a) / 3;
  e._context.bezierCurveTo(a + f, i + f * t, l - f, d - f * n, l, d);
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
function $m(e) {
  this._context = new Bm(e);
}
($m.prototype = Object.create(Qu.prototype)).point = function(e, t) {
  Qu.prototype.point.call(this, t, e);
};
function Bm(e) {
  this._context = e;
}
Bm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, i, l) {
    this._context.bezierCurveTo(t, e, a, n, l, i);
  }
};
function Fu(e) {
  return new Qu(e);
}
function jb(e) {
  return new $m(e);
}
function Hm(e) {
  this._context = e;
}
Hm.prototype = {
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
        for (var a = th(e), i = th(t), l = 0, d = 1; d < n; ++l, ++d)
          this._context.bezierCurveTo(a[0][l], i[0][l], a[1][l], i[1][l], e[d], t[d]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function th(e) {
  var t, n = e.length - 1, a, i = new Array(n), l = new Array(n), d = new Array(n);
  for (i[0] = 0, l[0] = 2, d[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    i[t] = 1, l[t] = 4, d[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[n - 1] = 2, l[n - 1] = 7, d[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = i[t] / l[t - 1], l[t] -= a, d[t] -= a * d[t - 1];
  for (i[n - 1] = d[n - 1] / l[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (d[t] - i[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    l[t] = 2 * e[t + 1] - i[t + 1];
  return [i, l];
}
function Ub(e) {
  return new Hm(e);
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
function Kb(e) {
  return new bc(e, 0.5);
}
function Yb(e) {
  return new bc(e, 0);
}
function Xb(e) {
  return new bc(e, 1);
}
function qo(e, t) {
  if ((d = e.length) > 1)
    for (var n = 1, a, i, l = e[t[0]], d, f = l.length; n < d; ++n)
      for (i = l, l = e[t[n]], a = 0; a < f; ++a)
        l[a][1] += l[a][0] = isNaN(i[a][1]) ? i[a][0] : i[a][1];
}
function Go(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function qb(e, t) {
  return e[t];
}
function Mf() {
  var e = Ut([]), t = Go, n = qo, a = qb;
  function i(l) {
    var d = e.apply(this, arguments), f, u = l.length, m = d.length, y = new Array(m), x;
    for (f = 0; f < m; ++f) {
      for (var S = d[f], R = y[f] = new Array(u), T = 0, F; T < u; ++T)
        R[T] = F = [0, +a(l[T], S, T, l)], F.data = l[T];
      R.key = S;
    }
    for (f = 0, x = t(y); f < m; ++f)
      y[x[f]].index = f;
    return n(y, x), y;
  }
  return i.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ut(Zd.call(l)), i) : e;
  }, i.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : Ut(+l), i) : a;
  }, i.order = function(l) {
    return arguments.length ? (t = l == null ? Go : typeof l == "function" ? l : Ut(Zd.call(l)), i) : t;
  }, i.offset = function(l) {
    return arguments.length ? (n = l ?? qo, i) : n;
  }, i;
}
function Gb(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, i = 0, l = e[0].length, d; i < l; ++i) {
      for (d = n = 0; n < a; ++n)
        d += e[n][i][1] || 0;
      if (d)
        for (n = 0; n < a; ++n)
          e[n][i][1] /= d;
    }
    qo(e, t);
  }
}
function Zb(e, t) {
  if ((u = e.length) > 0)
    for (var n, a = 0, i, l, d, f, u, m = e[t[0]].length; a < m; ++a)
      for (d = f = 0, n = 0; n < u; ++n)
        (l = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = d, i[1] = d += l) : l < 0 ? (i[1] = f, i[0] = f += l) : (i[0] = 0, i[1] = l);
}
function Qb(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, l = a.length; n < l; ++n) {
      for (var d = 0, f = 0; d < i; ++d)
        f += e[d][n][1] || 0;
      a[n][1] += a[n][0] = -f / 2;
    }
    qo(e, t);
  }
}
function Jb(e, t) {
  if (!(!((d = e.length) > 0) || !((l = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, i, l, d; a < l; ++a) {
      for (var f = 0, u = 0, m = 0; f < d; ++f) {
        for (var y = e[t[f]], x = y[a][1] || 0, S = y[a - 1][1] || 0, R = (x - S) / 2, T = 0; T < f; ++T) {
          var F = e[t[T]], k = F[a][1] || 0, h = F[a - 1][1] || 0;
          R += k - h;
        }
        u += x, m += R * x;
      }
      i[a - 1][1] += i[a - 1][0] = n, u && (n -= m / u);
    }
    i[a - 1][1] += i[a - 1][0] = n, qo(e, t);
  }
}
function e0(e) {
  var t = e.map(t0);
  return Go(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function t0(e) {
  for (var t = -1, n = 0, a = e.length, i, l = -1 / 0; ++t < a; )
    (i = +e[t][1]) > l && (l = i, n = t);
  return n;
}
function Wm(e) {
  var t = e.map(Vm);
  return Go(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Vm(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function n0(e) {
  return Wm(e).reverse();
}
function r0(e) {
  var t = e.length, n, a, i = e.map(Vm), l = e0(e), d = 0, f = 0, u = [], m = [];
  for (n = 0; n < t; ++n)
    a = l[n], d < f ? (d += i[a], u.push(a)) : (f += i[a], m.push(a));
  return m.reverse().concat(u);
}
function a0(e) {
  return Go(e).reverse();
}
function bn(e, t) {
  e(t);
}
var nh = {
  ascending: Wm,
  descending: n0,
  insideout: r0,
  none: Go,
  reverse: a0
};
function zf(e) {
  return e && nh[e] || nh.none;
}
var rh = {
  expand: Gb,
  diverging: Zb,
  none: qo,
  silhouette: Qb,
  wiggle: Jb
};
function If(e) {
  return e && rh[e] || rh.none;
}
function i0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, l = t.startAngle, d = t.endAngle, f = t.padAngle, u = t.padRadius, m = wb();
  return n != null && bn(m.innerRadius, n), a != null && bn(m.outerRadius, a), i != null && bn(m.cornerRadius, i), l != null && bn(m.startAngle, l), d != null && bn(m.endAngle, d), f != null && bn(m.padAngle, f), u != null && bn(m.padRadius, u), m;
}
function $f(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, l = t.y, d = t.y0, f = t.y1, u = t.defined, m = t.curve, y = Tb();
  return n && bn(y.x, n), a && bn(y.x0, a), i && bn(y.x1, i), l && bn(y.y, l), d && bn(y.y0, d), f && bn(y.y1, f), u && y.defined(u), m && y.curve(m), y;
}
function jm(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, l = t.curve, d = Dm();
  return n && bn(d.x, n), a && bn(d.y, a), i && d.defined(i), l && d.curve(l), d;
}
function o0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, l = t.value, d = t.sort, f = t.sortValues, u = Lb();
  return (d === null || d != null) && u.sort(d), (f === null || f != null) && u.sortValues(f), l != null && u.value(l), i != null && bn(u.padAngle, i), n != null && bn(u.startAngle, n), a != null && bn(u.endAngle, a), u;
}
function l0(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, l = Mf();
  return t && l.keys(t), n && bn(l.value, n), a && l.order(zf(a)), i && l.offset(If(i)), l;
}
var s0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function Jd() {
  return Jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Jd.apply(this, arguments);
}
function u0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function c0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, l = i === void 0 ? [] : i, d = e.centroid, f = e.innerRadius, u = f === void 0 ? 0 : f, m = e.outerRadius, y = e.cornerRadius, x = e.startAngle, S = e.endAngle, R = e.padAngle, T = e.padRadius, F = e.pieSort, k = e.pieSortValues, h = e.pieValue, P = e.children, O = e.fill, C = O === void 0 ? "" : O, N = u0(e, s0), D = i0({
    innerRadius: u,
    outerRadius: m,
    cornerRadius: y,
    padRadius: T
  }), B = o0({
    startAngle: x,
    endAngle: S,
    padAngle: R,
    value: h,
    sort: F,
    sortValues: k
  }), H = B(l);
  return P ? /* @__PURE__ */ r.createElement(r.Fragment, null, P({
    arcs: H,
    path: D,
    pie: B
  })) : /* @__PURE__ */ r.createElement(ot, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, H.map(function(re, oe) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + oe
    }, /* @__PURE__ */ r.createElement("path", Jd({
      className: An("visx-pie-arc", t),
      d: D(re) || "",
      fill: C == null || typeof C == "string" ? C : C(re)
    }, N)), d == null ? void 0 : d(D.centroid(re), re));
  }));
}
var d0 = ["from", "to", "fill", "className", "innerRef"];
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ef.apply(this, arguments);
}
function f0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function un(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, i = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, d = l === void 0 ? "transparent" : l, f = e.className, u = e.innerRef, m = f0(e, d0), y = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", ef({
    ref: u,
    className: An("visx-line", f),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: d,
    shapeRendering: y ? "crispEdges" : "auto"
  }, m));
}
var p0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, tf.apply(this, arguments);
}
function h0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Nr(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, i = e.x, l = e.y, d = e.fill, f = d === void 0 ? "transparent" : d, u = e.className, m = e.curve, y = e.innerRef, x = e.defined, S = x === void 0 ? function() {
    return !0;
  } : x, R = h0(e, p0), T = jm({
    x: i,
    y: l,
    defined: S,
    curve: m
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ r.createElement("path", tf({
    ref: y,
    className: An("visx-linepath", u),
    d: T(a) || "",
    fill: f,
    strokeLinecap: "round"
  }, R));
}
var m0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, nf.apply(this, arguments);
}
function y0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function g0(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, l = e.y, d = e.y0, f = e.y1, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, T = e.innerRef, F = y0(e, m0), k = $f({
    x: n,
    x0: a,
    x1: i,
    y: l,
    y0: d,
    y1: f,
    defined: x,
    curve: R
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ r.createElement("path", nf({
    ref: T,
    className: An("visx-area", S),
    d: k(m) || ""
  }, F));
}
var v0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function x0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function b0(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, l = e.y1, d = e.y0, f = e.yScale, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, T = e.innerRef, F = e.children, k = x0(e, v0), h = $f({
    x: t,
    x0: n,
    x1: a,
    defined: x,
    curve: R
  });
  return d == null ? h.y0(f.range()[0]) : bn(h.y0, d), i && !l && bn(h.y1, i), l && !i && bn(h.y1, l), F ? /* @__PURE__ */ r.createElement(r.Fragment, null, F({
    path: h
  })) : /* @__PURE__ */ r.createElement("path", rf({
    ref: T,
    className: An("visx-area-closed", S),
    d: h(m) || ""
  }, k));
}
var S0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, af.apply(this, arguments);
}
function E0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function k0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, S = e.y1, R = e.value, T = e.order, F = e.offset, k = e.color, h = e.children, P = E0(e, S0), O = l0({
    keys: i,
    value: R,
    order: T,
    offset: F
  }), C = $f({
    x: u,
    x0: m,
    x1: y,
    y0: x,
    y1: S,
    curve: d,
    defined: f
  }), N = O(l);
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h({
    stacks: N,
    path: C,
    stack: O
  })) : /* @__PURE__ */ r.createElement(ot, {
    top: n,
    left: a
  }, N.map(function(D, B) {
    return /* @__PURE__ */ r.createElement("path", af({
      className: An("visx-stack", t),
      key: "stack-" + B + "-" + (D.key || ""),
      d: C(D) || "",
      fill: k == null ? void 0 : k(D.key, B)
    }, P));
  }));
}
var w0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Ju() {
  return Ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ju.apply(this, arguments);
}
function T0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function C0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, S = e.y1, R = e.value, T = e.order, F = e.offset, k = e.color, h = e.children, P = T0(e, w0);
  return /* @__PURE__ */ r.createElement(k0, Ju({
    className: t,
    top: n,
    left: a,
    keys: i,
    data: l,
    curve: d,
    defined: f,
    x: u,
    x0: m,
    x1: y,
    y0: x,
    y1: S,
    value: R,
    order: T,
    offset: F,
    color: k
  }, P), h || function(O) {
    var C = O.stacks, N = O.path;
    return C.map(function(D, B) {
      return /* @__PURE__ */ r.createElement("path", Ju({
        className: An("visx-area-stack", t),
        key: "area-stack-" + B + "-" + (D.key || ""),
        d: N(D) || "",
        fill: k == null ? void 0 : k(D.key, B)
      }, P));
    });
  });
}
function Bf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var A0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, of.apply(this, arguments);
}
function L0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Um(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x0, d = e.x0Scale, f = e.x1Scale, u = e.yScale, m = e.color, y = e.keys, x = e.height, S = e.children, R = L0(e, A0), T = Bf(f), F = t.map(function(k, h) {
    return {
      index: h,
      x0: d(l(k)),
      bars: y.map(function(P, O) {
        var C = k[P];
        return {
          index: O,
          key: P,
          value: C,
          width: T,
          x: f(P) || 0,
          y: u(C) || 0,
          color: m(P, O),
          height: x - (u(C) || 0)
        };
      })
    };
  });
  return S ? /* @__PURE__ */ r.createElement(r.Fragment, null, S(F)) : /* @__PURE__ */ r.createElement(ot, {
    className: An("visx-bar-group", n),
    top: a,
    left: i
  }, F.map(function(k) {
    return /* @__PURE__ */ r.createElement(ot, {
      key: "bar-group-" + k.index + "-" + k.x0,
      left: k.x0
    }, k.bars.map(function(h) {
      return /* @__PURE__ */ r.createElement(kr, of({
        key: "bar-group-bar-" + k.index + "-" + h.index + "-" + h.value + "-" + h.key,
        x: h.x,
        y: h.y,
        width: h.width,
        height: h.height,
        fill: h.color
      }, R));
    }));
  }));
}
function Km(e) {
  return e == null ? void 0 : e[0];
}
function Ym(e) {
  return e == null ? void 0 : e[1];
}
var P0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, lf.apply(this, arguments);
}
function R0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function D0(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x, d = e.y0, f = d === void 0 ? Km : d, u = e.y1, m = u === void 0 ? Ym : u, y = e.xScale, x = e.yScale, S = e.color, R = e.keys, T = e.value, F = e.order, k = e.offset, h = e.children, P = R0(e, P0), O = Mf();
  R && O.keys(R), T && bn(O.value, T), F && O.order(zf(F)), k && O.offset(If(k));
  var C = O(t), N = Bf(y), D = C.map(function(B, H) {
    var re = B.key;
    return {
      index: H,
      key: re,
      bars: B.map(function(oe, ne) {
        var j = (x(f(oe)) || 0) - (x(m(oe)) || 0), X = x(m(oe)), G = "bandwidth" in y ? y(l(oe.data)) : Math.max((y(l(oe.data)) || 0) - N / 2);
        return {
          bar: oe,
          key: re,
          index: ne,
          height: j,
          width: N,
          x: G || 0,
          y: X || 0,
          color: S(B.key, ne)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(D)) : /* @__PURE__ */ r.createElement(ot, {
    className: An("visx-bar-stack", n),
    top: a,
    left: i
  }, D.map(function(B) {
    return B.bars.map(function(H) {
      return /* @__PURE__ */ r.createElement(kr, lf({
        key: "bar-stack-" + B.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, P));
    });
  }));
}
var _0 = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function N0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function O0(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.y, d = e.x0, f = d === void 0 ? Km : d, u = e.x1, m = u === void 0 ? Ym : u, y = e.xScale, x = e.yScale, S = e.color, R = e.keys, T = e.value, F = e.order, k = e.offset, h = e.children, P = N0(e, _0), O = Mf();
  R && O.keys(R), T && bn(O.value, T), F && O.order(zf(F)), k && O.offset(If(k));
  var C = O(t), N = Bf(x), D = C.map(function(B, H) {
    var re = B.key;
    return {
      index: H,
      key: re,
      bars: B.map(function(oe, ne) {
        var j = (y(m(oe)) || 0) - (y(f(oe)) || 0), X = y(f(oe)), G = "bandwidth" in x ? x(l(oe.data)) : Math.max((x(l(oe.data)) || 0) - j / 2);
        return {
          bar: oe,
          key: re,
          index: ne,
          height: N,
          width: j,
          x: X || 0,
          y: G || 0,
          color: S(B.key, ne)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(D)) : /* @__PURE__ */ r.createElement(ot, {
    className: An("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, D.map(function(B) {
    return B.bars.map(function(H) {
      return /* @__PURE__ */ r.createElement(kr, sf({
        key: "bar-stack-" + B.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, P));
    });
  }));
}
var ah = "http://www.w3.org/2000/svg";
function F0(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(ah, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(ah, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var M0 = "__visx_splitpath_svg_path_measurement_id", ih = function() {
  return !0;
};
function z0(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, i = a === void 0 ? "x" : a, l = e.sampleRate, d = l === void 0 ? 1 : l;
  try {
    var f = F0(M0);
    f.setAttribute("d", t);
    var u = f.getTotalLength(), m = n.length, y = n.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var x = n.map(function(X) {
        var G;
        return (G = X.find(function(V) {
          return typeof V[i] == "number";
        })) == null ? void 0 : G[i];
      }), S = f.getPointAtLength(0), R = f.getPointAtLength(u), T = R[i] > S[i], F = T ? x.map(function(X) {
        return typeof X > "u" ? ih : function(G) {
          return G >= X;
        };
      }) : x.map(function(X) {
        return typeof X > "u" ? ih : function(G) {
          return G <= X;
        };
      }), k = 0, h = 0; h <= u; h += d) {
        for (var P = f.getPointAtLength(h), O = P[i]; k < m - 1 && F[k + 1](O); )
          k += 1;
        y[k].push(P);
      }
    else {
      var C = n.map(function(X) {
        return X.length;
      }), N = C.reduce(function(X, G) {
        return X + G;
      }, 0), D = u / Math.max(1, N - 1), B = C.slice(0, m - 1);
      B.unshift(0);
      for (var H = 2; H < m; H += 1)
        B[H] += B[H - 1];
      for (var re = 0; re < m; re += 1)
        B[re] *= D;
      for (var oe = 0, ne = 0; ne <= u; ne += d) {
        for (var j = f.getPointAtLength(ne); oe < m - 1 && ne >= B[oe + 1]; )
          oe += 1;
        y[oe].push(j);
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
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, uf.apply(this, arguments);
}
var I0 = function(t) {
  return t.x || 0;
}, $0 = function(t) {
  return t.y || 0;
};
function Xm(e) {
  var t = e.children, n = e.className, a = e.curve, i = e.defined, l = e.segmentation, d = e.sampleRate, f = e.segments, u = e.x, m = e.y, y = e.styles, x = ce.useMemo(function() {
    var T = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u, F = typeof m == "number" || typeof m > "u" ? function() {
      return m;
    } : m;
    return f.map(function(k) {
      return k.map(function(h, P) {
        return {
          x: T(h, P, k),
          y: F(h, P, k)
        };
      });
    });
  }, [u, m, f]), S = ce.useMemo(function() {
    var T = jm({
      x: u,
      y: m,
      defined: i,
      curve: a
    });
    return T(f.flat()) || "";
  }, [u, m, i, a, f]), R = ce.useMemo(function() {
    return z0({
      path: S,
      segmentation: l,
      pointsInSegments: x,
      sampleRate: d
    });
  }, [S, l, x, d]);
  return /* @__PURE__ */ r.createElement("g", null, R.map(function(T, F) {
    return t ? /* @__PURE__ */ r.createElement(r.Fragment, {
      key: F
    }, t({
      index: F,
      segment: T,
      styles: y[F] || y[F % y.length]
    })) : /* @__PURE__ */ r.createElement(Nr, uf({
      key: F,
      className: n,
      data: T,
      x: I0,
      y: $0
    }, y[F] || y[F % y.length]));
  }));
}
Xm.propTypes = {
  segments: He.arrayOf(He.array).isRequired,
  styles: He.array.isRequired,
  children: He.func,
  className: He.string
};
var B0 = ["tooltipOpen"];
function H0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ec() {
  return ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ec.apply(this, arguments);
}
function qm(e) {
  var t = ce.useState(ec({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = ce.useCallback(function(d) {
    return a(typeof d == "function" ? function(f) {
      f.tooltipOpen;
      var u = H0(f, B0);
      return ec({}, d(u), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: d.tooltipLeft,
      tooltipTop: d.tooltipTop,
      tooltipData: d.tooltipData
    });
  }, [a]), l = ce.useCallback(function() {
    return a({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [a]);
  return {
    tooltipOpen: n.tooltipOpen,
    tooltipLeft: n.tooltipLeft,
    tooltipTop: n.tooltipTop,
    tooltipData: n.tooltipData,
    updateTooltip: a,
    showTooltip: i,
    hideTooltip: l
  };
}
var W0 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, tc.apply(this, arguments);
}
function V0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
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
}, Hf = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, a = e.top, i = e.left, l = e.offsetLeft, d = l === void 0 ? 10 : l, f = e.offsetTop, u = f === void 0 ? 10 : f, m = e.style, y = m === void 0 ? Gm : m, x = e.children, S = e.unstyled, R = S === void 0 ? !1 : S, T = e.applyPositionStyle, F = T === void 0 ? !1 : T, k = V0(e, W0);
  return /* @__PURE__ */ r.createElement("div", tc({
    ref: t,
    className: An("visx-tooltip", n),
    style: tc({
      top: a == null || u == null ? a : a + u,
      left: i == null || d == null ? i : i + d
    }, F && {
      position: "absolute"
    }, !R && y)
  }, k), x);
});
Hf.propTypes = {
  children: He.node,
  className: He.string,
  left: He.number,
  offsetLeft: He.number,
  offsetTop: He.number,
  top: He.number,
  applyPositionStyle: He.bool,
  unstyled: He.bool
};
Hf.displayName = "Tooltip";
const j0 = Hf;
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function U0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function K0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, df(e, t);
}
var oh = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function Y0(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    K0(a, n);
    function a(l) {
      var d;
      return d = n.call(this, l) || this, d.state = {
        rect: void 0,
        parentRect: void 0
      }, d.nodeRef = /* @__PURE__ */ r.createRef(), d.getRects = d.getRects.bind(U0(d)), d;
    }
    var i = a.prototype;
    return i.componentDidMount = function() {
      var d, f = this;
      this.node = (d = this.nodeRef) != null && d.current ? this.nodeRef.current : ag.findDOMNode(this), this.setState(function() {
        return f.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var d = this.node, f = d.parentNode, u = d.getBoundingClientRect ? d.getBoundingClientRect() : oh, m = f != null && f.getBoundingClientRect ? f.getBoundingClientRect() : oh;
      return {
        rect: u,
        parentRect: m
      };
    }, i.render = function() {
      return /* @__PURE__ */ r.createElement(e, cf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Zm = /* @__PURE__ */ ce.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), X0 = Zm.Provider;
Zm.Consumer;
var q0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, nc.apply(this, arguments);
}
function G0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qm(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, l = i === void 0 ? 10 : i, d = e.offsetTop, f = d === void 0 ? 10 : d, u = e.parentRect, m = e.rect, y = e.style, x = y === void 0 ? Gm : y, S = e.top, R = S === void 0 ? 0 : S, T = e.unstyled, F = T === void 0 ? !1 : T, k = e.nodeRef, h = G0(e, q0), P, O = !1, C = !1;
  if (m && u) {
    var N = a, D = R;
    if (u.width) {
      var B = N + l + m.width - u.width, H = m.width - N - l;
      O = B > 0 && B > H;
    } else {
      var re = N + l + m.width - window.innerWidth, oe = m.width - N - l;
      O = re > 0 && re > oe;
    }
    if (u.height) {
      var ne = D + f + m.height - u.height, j = m.height - D - f;
      C = ne > 0 && ne > j;
    } else
      C = D + f + m.height > window.innerHeight;
    N = O ? N - m.width - l : N + l, D = C ? D - m.height - f : D + f, N = Math.round(N), D = Math.round(D), P = "translate(" + N + "px, " + D + "px)";
  }
  return /* @__PURE__ */ r.createElement(j0, nc({
    ref: k,
    style: nc({
      left: 0,
      top: 0,
      transform: P
    }, !F && x)
  }, h), /* @__PURE__ */ r.createElement(X0, {
    value: {
      isFlippedVertically: !C,
      isFlippedHorizontally: !O
    }
  }, t));
}
Qm.propTypes = {
  nodeRef: He.oneOfType([He.string, He.func, He.object])
};
const Jm = Y0(Qm), ey = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: l, formatTooltipsDate: d, parseDate: f, setSharedFilter: u, isDraggingAnnotation: m } = ce.useContext(Et), { xScale: y, yScale: x, showTooltip: S, hideTooltip: R } = e, { xAxis: T, visualizationType: F, orientation: k, yAxis: h, runtime: P } = n, O = (V, K) => {
    const { x: ee, y: de } = K, te = {
      data: V || {},
      dataXPosition: ee + 10,
      dataYPosition: de
    };
    return {
      tooltipLeft: te.dataXPosition,
      tooltipTop: te.dataYPosition,
      tooltipData: te
    };
  }, C = (V, K) => {
    if (V.stopPropagation(), m)
      return;
    const ee = op(V), { x: de, y: Q } = ee, { data: te, arc: q } = K ?? {}, Z = B(de - Number(n.yAxis.size || 0)), Me = F !== "Pie" ? n.series.filter((ae) => ae.tooltip === !0).map((ae) => ae.dataKey) : n.series.map((ae) => ae.dataKey);
    Me.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((ae) => {
      ae.confidenceIntervals.map((se) => {
        se.showInTooltip && (Me.push(se.high), Me.push(se.low));
      });
    });
    function ke(ae) {
      let se = [];
      for (let xe in ae)
        ae.hasOwnProperty(xe) && se.push(ae[xe].name);
      return se;
    }
    Me.push(...ke(n.columns)), Me.push(...ke(n.columns));
    const pe = oe(Z, Me), Le = t.filter((ae) => ae[T.dataKey] === H(Q)), We = k === "vertical" ? pe : Le, Ze = (ae) => {
      const se = n.series.filter((ze) => ze.dataKey === ae)[0];
      return se != null && se.axis ? String(se.axis).toLowerCase() : "left";
    }, me = (() => {
      var Ve, qe, Qe;
      const ae = n.columns, se = [], xe = [];
      for (const [tt, et] of Object.entries(ae)) {
        const Ye = {
          addColPrefix: n.columns[tt].prefix,
          addColSuffix: n.columns[tt].suffix,
          addColRoundTo: n.columns[tt].roundToPlace ? n.columns[tt].roundToPlace : "",
          addColCommas: n.columns[tt].commas
        };
        let Re = null;
        n.visualizationType === "Pie" ? Re = q == null ? void 0 : q.data[et.name] : Re = (Ve = We[0]) == null ? void 0 : Ve[et.name];
        const Ce = Sf(Re, "left", !0, n, Ye);
        et.tooltips && se.push([et.label, Ce]);
      }
      const ze = [];
      return se.forEach((tt) => {
        ze.push([tt[0], tt[1]]);
      }), F === "Pie" && xe.push(
        // ignore
        [n.xAxis.dataKey, te],
        [n.runtime.yAxis.dataKey, a(q == null ? void 0 : q.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((q == null ? void 0 : q.endAngle) - (q == null ? void 0 : q.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), F === "Forest Plot" && xe.push([n.xAxis.dataKey, H(Q)]), F !== "Pie" && F !== "Forest Plot" && xe.push(
        ...(Qe = (qe = ne()) == null ? void 0 : qe.filter((tt) => {
          var et, Ye;
          return ((et = n.series) == null ? void 0 : et.find((Re) => Re.dataKey === tt && (Re == null ? void 0 : Re.tooltip))) || ((Ye = n.xAxis) == null ? void 0 : Ye.dataKey) == tt;
        })) == null ? void 0 : Qe.flatMap((tt) => {
          var Ce, at, Ge, ft;
          const et = n.general.showMissingDataLabel && !((Ce = We[0]) != null && Ce[tt]);
          let Ye = tt === n.xAxis.dataKey ? (at = We[0]) == null ? void 0 : at[tt] : a((Ge = We[0]) == null ? void 0 : Ge[tt], Ze(tt));
          Ye = et ? "N/A" : Ye;
          const Re = (ft = n.preliminaryData) == null ? void 0 : ft.find((ht) => {
            var yt;
            return ht.label && ht.type === "suppression" && ht.displayTooltip && ((yt = We[0]) == null ? void 0 : yt[tt]) === ht.value && (!ht.column || tt === ht.column);
          });
          return Re && (Ye = Re.label), [[tt, Ye, Ze(tt)]];
        })
      ), [...xe, ...ze];
    })();
    if (!me)
      return;
    const _e = O(me, ee);
    S(_e);
  }, N = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      R();
    }, 3e3) : R();
  }, D = (V) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let K = y.step();
      const de = Math.floor(Number(V) / K);
      return y.domain()[de - 1];
    }
    if (wn(n.xAxis) && n.visualizationType !== "Combo") {
      const K = vp((te) => f(te[n.xAxis.dataKey])).left, ee = y.invert(y(V)), de = K(n.data, ee, 1);
      return f(n.data[de - 1][n.xAxis.dataKey]);
    }
  }, B = (V, K = !1) => {
    if (F !== "Pie" && k !== "horizontal") {
      if (y.type === "point" || T.type === "continuous" || wn(T)) {
        let ee = null, de = Number.MAX_VALUE, Q = V;
        return t.forEach((te) => {
          const q = wn(T) ? y(f(te[T.dataKey])) : y(te[T.dataKey]);
          let Z = n.barHeight;
          const Me = Math.abs(Number(q - Q + (K ? Z * 2 : 0)));
          Me <= de && (de = Me, ee = (wn(T), te[T.dataKey]));
        }), ee;
      }
      if (n.xAxis.type === "categorical" || F === "Combo" && k !== "horizontal" && F !== "Forest Plot") {
        let de = (y.range()[1] - y.range()[0]) / (y.domain().length + 1);
        const te = Math.floor((Number(V) - de / 2) / de);
        return y.domain()[te];
      }
      if (wn(T) && F !== "Combo" && k !== "horizontal") {
        const ee = vp((q) => f(q[n.xAxis.dataKey])).left, de = y.invert(V), Q = ee(n.data, de, 1);
        return f(n.data[Q - 1][n.xAxis.dataKey]);
      }
    }
  }, H = (V, K) => {
    if (F === "Pie")
      return;
    let ee = Number.MAX_VALUE, de = null;
    return t.forEach((Q, te) => {
      const q = x(F !== "Forest Plot" ? Q[n.xAxis.dataKey] : te), Z = Math.abs(q - V);
      Z < ee && (ee = Z, de = K ? Q[K] : Q[n.xAxis.dataKey]);
    }), de;
  }, re = (V) => {
    var K, ee;
    try {
      const de = op(V), { x: Q } = de;
      if (!Q)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let te = B(Q, !0), q = (K = n.data) == null ? void 0 : K.filter((Z) => Z[n.xAxis.dataKey] === te);
      if (!te)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (wn(T) && te && (te = new Date(te), te = l(te), q = (ee = n.data) == null ? void 0 : ee.filter((Z) => l(new Date(Z[n.xAxis.dataKey])) === te)), !q[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${te}`);
      u && (n != null && n.uid) && (q != null && q[0]) && u(n.uid, q[0]);
    } catch (de) {
      console.error(de.message);
    }
  }, oe = (V, K) => {
    try {
      let ee;
      return T.type === "categorical" ? ee = t.filter((Q) => Q[T.dataKey] === V) : ee = t.filter((Q) => Q[T.dataKey] === V), !ee || ee.length === 0 ? [] : ee.map((Q) => Object.fromEntries(Object.entries(Q).filter(([te, q]) => K.includes(te))));
    } catch (ee) {
      console.error("COVE", ee);
    }
  }, ne = () => {
    var V;
    try {
      let K, ee = [], de = [];
      if ((V = n.series) == null || V.forEach((Q) => {
        Q.type === "Forecasting" && (ee.push(Q.stageColumn), Q == null || Q.confidenceIntervals.forEach((te) => {
          te.showInTooltip === !0 && (de.push(te.low), de.push(te.high));
        }));
      }), !n.dashboard)
        switch (F) {
          case "Combo":
            K = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys, ...de];
            break;
          case "Forecasting":
            K = [P.xAxis.dataKey, ...ee, ...de];
            break;
          case "Line":
            K = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Area Chart":
            K = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Bar":
            K = k === "vertical" ? [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys] : [P.yAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Pie":
            K = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (K = [P.xAxis.dataKey, ...P == null ? void 0 : P.barSeriesKeys, ...P == null ? void 0 : P.lineSeriesKeys, ...ee, ...de]), K;
    } catch (K) {
      console.error("COVE", K);
    }
  }, j = (V) => {
    const { dataXPosition: K, dataYPosition: ee } = V;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${K}px, ${Number(ee)}px)`
    };
  }, X = (V) => {
    var ee, de;
    let K = n.series.filter((Q) => Q.dataKey === V);
    return (ee = K[0]) != null && ee.name ? (de = K[0]) == null ? void 0 : de.name : V;
  };
  return {
    getIncludedTooltipSeries: ne,
    getXValueFromCoordinate: B,
    getXValueFromCoordinateDate: D,
    getYScaleValues: oe,
    handleTooltipClick: re,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: C,
    TooltipListItem: ({ item: V }) => {
      const [K, ee] = V, [de, Q, te] = ee;
      if (F === "Forest Plot")
        return de === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${wn(h) ? l(f(de, !1)) : Q}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${X(de)}: ${a(Q, "left")}`);
      const q = n.tooltips.dateDisplayFormat ? d(f(Q, !1)) : l(f(Q, !1));
      return F === "Bar" && k === "horizontal" && de === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? q : Q}`) : de === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${wn(T) ? q : Q}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${X(de)}: ${Q}`);
    },
    tooltipStyles: j
  };
};
function Wf(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
  const [l, d] = ce.useState(), f = (l == null ? void 0 : l.isIntersecting) && i, u = ([m]) => {
    d(m);
  };
  return ce.useEffect(() => {
    setTimeout(() => {
      const m = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || f || !m)
        return;
      const x = { threshold: t, root: n, rootMargin: a }, S = new IntersectionObserver(u, x);
      return S.observe(m), () => S.disconnect();
    }, 500);
  }, [e, t, n, a, f]), l;
}
const ff = (e, t = !1) => {
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
var Z0 = ["flexDirection", "alignItems", "margin", "display", "children"];
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pf.apply(this, arguments);
}
function Q0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, i = a === void 0 ? "center" : a, l = e.margin, d = l === void 0 ? "0" : l, f = e.display, u = f === void 0 ? "flex" : f, m = e.children, y = Q0(e, Z0);
  return /* @__PURE__ */ r.createElement("div", pf({
    className: "visx-legend-item",
    style: {
      display: u,
      alignItems: i,
      flexDirection: n,
      margin: d
    }
  }, y), m);
}
rc.propTypes = {
  alignItems: He.string,
  margin: He.oneOfType([He.string, He.number]),
  children: He.node,
  display: He.string
};
var J0 = ["flex", "label", "margin", "align", "children"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function eS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ac(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, i = e.margin, l = i === void 0 ? "5px 0" : i, d = e.align, f = d === void 0 ? "left" : d, u = e.children, m = eS(e, J0);
  return /* @__PURE__ */ r.createElement("div", hf({
    className: "visx-legend-label",
    style: {
      justifyContent: f,
      display: "flex",
      flex: n,
      margin: l
    }
  }, m), u || a);
}
ac.propTypes = {
  align: He.string,
  label: He.node,
  flex: He.oneOfType([He.string, He.number]),
  margin: He.oneOfType([He.string, He.number]),
  children: He.node
};
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mf.apply(this, arguments);
}
function Vf(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: mf({
      width: n,
      height: a,
      background: t
    }, i)
  });
}
Vf.propTypes = {
  fill: He.string,
  width: He.oneOfType([He.string, He.number]),
  height: He.oneOfType([He.string, He.number])
};
function ty(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, d = typeof a == "string" || typeof a > "u" ? 0 : a, f = Math.max(l, d), u = f / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: f,
    height: f
  }, /* @__PURE__ */ r.createElement(ot, {
    top: u,
    left: u
  }, /* @__PURE__ */ r.createElement("circle", {
    r: u,
    fill: t,
    style: i
  })));
}
ty.propTypes = {
  fill: He.string,
  width: He.oneOfType([He.string, He.number]),
  height: He.oneOfType([He.string, He.number])
};
function ny(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, d = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ r.createElement(ot, {
    top: l / 2 - d / 2
  }, /* @__PURE__ */ r.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: d,
    style: i
  })));
}
ny.propTypes = {
  fill: He.string,
  width: He.oneOfType([He.string, He.number]),
  height: He.oneOfType([He.string, He.number])
};
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, os.apply(this, arguments);
}
var Md = function() {
};
function tS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? Md : a, l = e.size, d = l === void 0 ? Md : l, f = e.width, u = e.height, m = e.label, y = e.item, x = e.itemIndex, S = e.shapeStyle, R = S === void 0 ? Md : S, T = {
    width: f,
    height: u,
    item: y,
    itemIndex: x,
    label: m,
    fill: i(os({}, m)),
    size: d(os({}, m)),
    style: R(os({}, m))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(ty, T) : n === "line" ? /* @__PURE__ */ r.createElement(ny, T) : /* @__PURE__ */ r.createElement(Vf, T) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, T) : n ? /* @__PURE__ */ r.createElement(n, T) : null;
}
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function ry(e) {
  var t = e.shape, n = t === void 0 ? Vf : t, a = e.width, i = e.height, l = e.margin, d = e.label, f = e.item, u = e.itemIndex, m = e.fill, y = e.size, x = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(ic({}, d)) : a,
      height: y ? y(ic({}, d)) : i,
      margin: l
    }
  }, tS({
    shape: n,
    item: f,
    itemIndex: u,
    label: d,
    width: a,
    height: i,
    fill: m,
    shapeStyle: x
  }));
}
ry.propTypes = {
  itemIndex: He.number.isRequired,
  margin: He.oneOfType([He.string, He.number]),
  width: He.oneOfType([He.string, He.number]),
  height: He.oneOfType([He.string, He.number])
};
function ay(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function lh(e) {
  return String(ay(e));
}
function nS(e) {
  var t = e.scale, n = e.labelFormat;
  return function(a, i) {
    return {
      datum: a,
      index: i,
      text: "" + n(a, i),
      value: t(a)
    };
  };
}
var rS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function aS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var iS = {
  display: "flex"
};
function iy(e) {
  var t = e.className, n = e.style, a = n === void 0 ? iS : n, i = e.scale, l = e.shape, d = e.domain, f = e.fill, u = f === void 0 ? lh : f, m = e.size, y = m === void 0 ? lh : m, x = e.labelFormat, S = x === void 0 ? ay : x, R = e.labelTransform, T = R === void 0 ? nS : R, F = e.shapeWidth, k = F === void 0 ? 15 : F, h = e.shapeHeight, P = h === void 0 ? 15 : h, O = e.shapeMargin, C = O === void 0 ? "2px 4px 2px 0" : O, N = e.shapeStyle, D = e.labelAlign, B = D === void 0 ? "left" : D, H = e.labelFlex, re = H === void 0 ? "1" : H, oe = e.labelMargin, ne = oe === void 0 ? "0 4px" : oe, j = e.itemMargin, X = j === void 0 ? "0" : j, G = e.direction, V = G === void 0 ? "column" : G, K = e.itemDirection, ee = K === void 0 ? "row" : K, de = e.legendLabelProps, Q = e.children, te = aS(e, rS), q = d || ("domain" in i ? i.domain() : []), Z = T({
    scale: i,
    labelFormat: S
  }), Me = q.map(Z);
  return Q ? /* @__PURE__ */ r.createElement(r.Fragment, null, Q(Me)) : /* @__PURE__ */ r.createElement("div", {
    className: An("visx-legend", t),
    style: ls({}, a, {
      flexDirection: V
    })
  }, Me.map(function(ke, pe) {
    return /* @__PURE__ */ r.createElement(rc, ls({
      key: "legend-" + ke.text + "-" + pe,
      margin: X,
      flexDirection: ee
    }, te), /* @__PURE__ */ r.createElement(ry, {
      shape: l,
      height: P,
      width: k,
      margin: C,
      item: q[pe],
      itemIndex: pe,
      label: ke,
      fill: u,
      size: y,
      shapeStyle: N
    }), /* @__PURE__ */ r.createElement(ac, ls({
      label: ke.text,
      flex: re,
      margin: ne,
      align: B
    }, de)));
  }));
}
iy.propTypes = {
  children: He.func,
  className: He.string,
  domain: He.array,
  shapeWidth: He.oneOfType([He.string, He.number]),
  shapeHeight: He.oneOfType([He.string, He.number]),
  shapeMargin: He.oneOfType([He.string, He.number]),
  labelAlign: He.string,
  labelFlex: He.oneOfType([He.string, He.number]),
  labelMargin: He.oneOfType([He.string, He.number]),
  itemMargin: He.oneOfType([He.string, He.number]),
  fill: He.func,
  size: He.func,
  shapeStyle: He.func
};
function oS(e) {
  return /* @__PURE__ */ r.createElement(iy, e);
}
function lS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Sc = (e, t) => {
  var F;
  const { formatDate: n, parseDate: a } = ce.useContext(Et);
  let i = [], l = "", d = [], f = [];
  ((F = e.series) == null ? void 0 : F.length) > 0 && e.data ? (i = e.series[0], l = e.series[0].dataKey, d = e.highlightedBarValues, f = e.data.map((k) => k[e.xAxis.dataKey])) : (i = [], l = "", d = [], f = []);
  const u = (k, h) => {
    const P = [...e.highlightedBarValues];
    P[h].borderWidth = k.target.value, t({
      ...e,
      highlightedBarValues: P
    });
  }, m = (k, h) => {
    k.preventDefault();
    const P = [...e.highlightedBarValues];
    P[h].value = k.target.value, P[h].dataKey = l, t({
      ...e,
      highlightedBarValues: P
    });
  }, y = (k, h) => {
    k.preventDefault();
    const P = [...e.highlightedBarValues];
    P.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: P
    });
  }, x = (k, h) => {
    k.preventDefault();
    const P = [...e.highlightedBarValues];
    P.splice(h, 1), t({
      ...e,
      highlightedBarValues: P
    });
  }, S = (k, h) => {
    const P = [...e.highlightedBarValues];
    P[h].color = k.target.value, t({
      ...e
    });
  }, R = (k, h) => {
    const P = [...e.highlightedBarValues];
    P[h].legendLabel = k.target.value, t({
      ...e,
      copyOfHighlightedBarValues: P
    });
  }, T = () => {
  };
  return T.checkFontColor = (k, h, P) => {
    if (e.xAxis.type === "date") {
      if (T.formatDates(h).includes(k))
        return "#000";
    } else if (h.includes(k))
      return "#000";
    return P;
  }, T.formatDates = (k) => k.map((h) => h ? n(a(h)) : !1), T.findDuplicates = (k) => {
    const h = {};
    return k == null ? void 0 : k.filter((O) => {
      const { legendLabel: C } = O;
      return h[C] ? !1 : (h[C] = !0, !0);
    });
  }, {
    HighLightedBarUtils: T,
    highlightedSeries: i,
    highlightedSeriesKey: l,
    highlightedBarValues: d,
    highlightedSeriesValues: f,
    handleUpdateHighlightedBar: m,
    handleAddNewHighlightedBar: y,
    handleRemoveHighlightedBar: x,
    handleUpdateHighlightedBarColor: S,
    handleHighlightedBarLegendLabel: R,
    handleUpdateHighlightedBorderWidth: u
  };
}, oy = (e) => {
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
}, sS = (e, t) => e ? t ? "35px" : "15px" : "0px", ly = ce.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: l, formatLabels: d, skipId: f = "legend" }, u) => {
  const { innerClasses: m, containerClasses: y } = lS(e), { runtime: x, legend: S } = e;
  if (!S)
    return null;
  const R = (S == null ? void 0 : S.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !S.hide, T = {
    marginBottom: R ? "15px" : "0px",
    marginTop: R && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : sS(R, e.brush.active)
  }, { HighLightedBarUtils: F } = Sc(e);
  let k = F.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { ref: u, style: T, id: f || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, S.label && /* @__PURE__ */ r.createElement("h3", null, Li(S.label)), S.description && /* @__PURE__ */ r.createElement("p", null, Li(S.description)), /* @__PURE__ */ r.createElement(oS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (h) => {
    var P, O, C, N;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: m.join(" ") }, d(h).map((D, B) => {
      var oe, ne, j, X;
      let H = ["legend-item", `legend-text--${D.text.replace(" ", "").toLowerCase()}`], re = D.datum;
      if (e.exclusions.active && ((oe = e.exclusions.keys) != null && oe.includes(re)))
        return null;
      if (x.seriesLabels) {
        let G = e.runtime.seriesLabelsAll.indexOf(re);
        re = e.runtime.seriesKeys[G], ((ne = x == null ? void 0 : x.forecastingSeriesKeys) == null ? void 0 : ne.length) > 0 && (re = D.text);
      }
      return n.length > 0 && n.includes(re) === !1 && H.push("inactive"), /* @__PURE__ */ r.createElement(
        rc,
        {
          className: H.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (G) => {
            G.key === "Enter" && (G.preventDefault(), a(D));
          },
          onClick: (G) => {
            G.preventDefault(), a(D);
          },
          role: "button"
        },
        /* @__PURE__ */ r.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(un, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: D.value, strokeWidth: 2, strokeDasharray: oy((j = e.series[B]) != null && j.type ? (X = e.series[B]) == null ? void 0 : X.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(up, { viewport: l, margin: "0", fill: D.value, display: !0 }))),
        /* @__PURE__ */ r.createElement(ac, { align: "left", margin: "0 0 0 4px" }, D.text)
      );
    }), k.map((D, B) => {
      let H = "legend-item", re = D.legendLabel;
      return re ? (n.length > 0 && n.includes(re) === !1 && (H += " inactive"), /* @__PURE__ */ r.createElement(
        rc,
        {
          className: H,
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (oe) => {
            oe.key === "Enter" && (oe.preventDefault(), a(D.legendLabel));
          },
          onClick: (oe) => {
            oe.preventDefault(), a(D.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(up, { fill: "transparent", borderColor: D.color ? D.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(ac, { align: "left", margin: "0 0 0 4px" }, D.legendLabel ? D.legendLabel : D.value)
      )) : !1;
    })), /* @__PURE__ */ r.createElement(r.Fragment, null, ((P = e == null ? void 0 : e.preliminaryData) == null ? void 0 : P.some((D) => D.label && D.type === "effect" && D.style === "Open Circles")) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.map((D, B) => /* @__PURE__ */ r.createElement(r.Fragment, null, D.label && D.type === "effect" && D.style && /* @__PURE__ */ r.createElement("div", { key: B, className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", { className: D.symbol }, D.lineCode), /* @__PURE__ */ r.createElement("p", null, " ", D.label)))))), !e.legend.hideSuppressedLabels && ((C = e == null ? void 0 : e.preliminaryData) == null ? void 0 : C.some((D) => D.label && D.displayLegend && D.type === "suppression" && D.value && ((D == null ? void 0 : D.style) || D.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map(
      (D, B) => D.displayLegend && D.type === "suppression" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Bar", className: `legend-preliminary ${D.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: D.symbol }, D.iconCode), /* @__PURE__ */ r.createElement("p", { className: D.type }, D.label))), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Line", className: "legend-preliminary " }, /* @__PURE__ */ r.createElement("span", null, D.lineCode), /* @__PURE__ */ r.createElement("p", { className: D.type }, D.label))), e.visualizationType === "Combo" && /* @__PURE__ */ r.createElement(r.Fragment, null, D.symbol && D.iconCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: `legend-preliminary ${D.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: D.symbol }, D.iconCode), /* @__PURE__ */ r.createElement("p", { className: D.type }, D.label)), D.style && D.lineCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", null, D.lineCode), /* @__PURE__ */ r.createElement("p", null, D.label))))
    )))));
  }), n.length > 0 && /* @__PURE__ */ r.createElement(fs, { onClick: (h) => i(h), style: { marginTop: "1rem" } }, "Reset"));
});
function uS(e) {
  return Vy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const sy = (e, t, n, a) => (i) => {
  var S, R, T, F, k;
  const { visualizationType: l, visualizationSubType: d, series: f, runtime: u } = e, m = (h) => {
    var P;
    return e.legend.reverseLabelOrder && ((P = e.legend) == null ? void 0 : P.position) === "bottom" ? h.reverse() : h;
  }, y = (S = e.legend) == null ? void 0 : S.colorCode;
  if (l === "Deviation Bar") {
    const [h, P] = ps[e.twoColor.palette], O = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: h
    }, C = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: P
    };
    return m([O, C]);
  }
  if (l === "Bar" && d === "regular" && y && (f == null ? void 0 : f.length) === 1) {
    let h = ar[e.palette];
    for (; t.length > h.length; )
      h = h.concat(h);
    h = h.slice(0, n.length);
    const P = /* @__PURE__ */ new Set();
    t.forEach((C) => P.add(C[y]));
    const O = Array.from(P).map((C, N) => ({
      datum: C,
      index: N,
      text: C,
      value: h[N]
    }));
    return m(O);
  }
  if (((R = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : R.length) > 0) {
    let h = [];
    return (F = (T = e.runtime) == null ? void 0 : T.forecastingSeriesKeys) == null || F.map((P, O) => {
      var C;
      return (C = P == null ? void 0 : P.stages) == null ? void 0 : C.map((N, D) => {
        var re, oe, ne, j;
        let B = (re = $u[N.color]) != null && re[2] ? (oe = $u[N.color]) == null ? void 0 : oe[2] : (ne = ar[N.color]) != null && ne[2] ? (j = ar[N.color]) == null ? void 0 : j[2] : "#ccc";
        const H = {
          datum: N.key,
          index: D,
          text: N.key,
          value: B
        };
        h.push(H);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((P, O) => {
      let C = ar[e.palette][O] ? ar[e.palette][O] : "#ccc";
      const N = {
        datum: P,
        index: O,
        text: P,
        value: C
      };
      h.push(N);
    }), m(h);
  }
  if (e.series.filter((h) => !!h.name).length > 0) {
    const h = /* @__PURE__ */ new Set();
    e.series.forEach((O) => {
      h.add(O.name || O.dataKey);
    });
    const P = Array.from(h).map((O, C) => ({
      datum: O,
      index: C,
      text: O,
      value: a(O)
    }));
    return m(P);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const h = i.length - 1;
    let P = [];
    return (k = e.suppressedData) == null || k.forEach(({ label: O, icon: C }, N) => {
      if (O && C) {
        const D = {
          datum: O,
          index: h + N,
          text: O,
          icon: /* @__PURE__ */ r.createElement(uS, { color: "#000", size: 15 })
        };
        P.push(D);
      }
    }), [...i, ...P];
  }
  return m(i);
}, ku = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), cS = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: l, highlight: d, highlightReset: f, seriesHighlight: u, isDraggingAnnotation: m } = ce.useContext(Et), { tooltipData: y, showTooltip: x, hideTooltip: S, tooltipOpen: R, tooltipLeft: T, tooltipTop: F } = qm(), { handleTooltipMouseOver: k, handleTooltipMouseOff: h, TooltipListItem: P } = ey({
    xScale: !1,
    yScale: !1,
    showTooltip: x,
    hideTooltip: S
  }), [O, C] = ce.useState(void 0), [N, D] = ce.useState(!1), B = Object.values(n.columns).filter((q) => q.showInViz), H = B.length > 0, re = H ? "pivotColumn" : void 0, oe = ce.useMemo(() => {
    if (H) {
      let q = [];
      const Z = n.yAxis.dataKey, Me = B.map((Le) => Le.name), ke = [Z, ...Me], pe = n.xAxis.dataKey;
      return t.forEach((Le) => {
        ke.forEach((We) => {
          const Ze = Le[We];
          Ze && q.push({
            [re]: Ze,
            [pe]: `${Le[pe]} - ${We}`
          });
        });
      }), q;
    }
    return t;
  }, [t, H]), ne = ce.useMemo(() => {
    if (H) {
      const q = {};
      oe.forEach((ke) => {
        q[ke[n.xAxis.dataKey]] || (q[ke[n.xAxis.dataKey]] = !0);
      });
      const Z = Object.entries(q).length;
      let Me = n.customColors || ar[n.palette];
      return Me = Me.slice(0, Z), Ho({
        domain: Object.keys(q),
        range: Me,
        unknown: null
      });
    }
    return a;
  }, [a, H]), j = ce.useRef(), X = Wf(j, {
    freezeOnceVisible: !1
  });
  ce.useEffect(() => {
    document.querySelector(".isEditor") && D((Z) => !0);
  }), ce.useEffect(() => {
    X != null && X.isIntersecting && n.animate && !N && setTimeout(() => {
      D(!0);
    }, 500);
  }, [X == null ? void 0 : X.isIntersecting, n.animate]);
  const G = ({ arcs: q, path: Z, getKey: Me }) => {
    const ke = Qx(q, Me, {
      from: ku,
      enter: ku,
      update: ku,
      leave: ku
    });
    return ce.useEffect(() => {
      const pe = setTimeout(() => {
        S();
      }, 500);
      return () => {
        clearTimeout(pe);
      };
    }, [y]), /* @__PURE__ */ r.createElement(r.Fragment, null, ke.map(({ item: pe, props: Le, key: We }, Ze) => /* @__PURE__ */ r.createElement(ot, { className: pe.data[n.xAxis.dataKey], key: `${We}-${Ze}`, style: { opacity: n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(pe.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      Zp.path,
      {
        d: Kx(
          [Le.startAngle, Le.endAngle],
          (Ae, me) => Z({
            ...pe,
            startAngle: Ae,
            endAngle: me
          })
        ),
        fill: ne(pe.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Ae) => k(Ae, { data: pe.data[n.runtime.xAxis.dataKey], arc: pe }),
        onMouseLeave: (Ae) => h()
      }
    ))), ke.map(({ item: pe, key: Le }, We) => {
      const [Ze, Ae] = Z.centroid(pe), me = pe.endAngle - pe.startAngle >= 0.1;
      let _e = "#FFF";
      return ne(pe.data[n.runtime.xAxis.dataKey]) && (_e = Uo(_e, ne(pe.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ r.createElement(Zp.g, { key: `${Le}${We}` }, me && /* @__PURE__ */ r.createElement(St, { style: { fill: _e }, x: Ze, y: Ae, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((pe.endAngle - pe.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [V] = l;
  n && n.legend && !n.legend.hide && i === "lg" && (V = V * 0.73);
  const K = n.heights.vertical, ee = Math.min(V, K) / 2, de = K / 2, Q = n.pieType === "Donut" ? 75 : ee;
  ce.useEffect(() => {
    if (u.length > 0 && n.legend.behavior !== "highlight") {
      let q = [];
      oe.forEach((Z) => {
        u.indexOf(Z[n.runtime.xAxis.dataKey]) !== -1 && q.push(Z);
      }), C(q);
    } else
      C(void 0);
  }, [u]);
  const te = sy(n, [], oe, ne);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Or, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: ee * 2, height: K, className: `animated-pie group ${n.animate === !1 || N ? "animated" : ""}`, role: "img", "aria-label": ff(n) }, /* @__PURE__ */ r.createElement(ot, { top: de, left: ee }, /* @__PURE__ */ r.createElement(
    c0,
    {
      data: O || oe,
      pieValue: (q) => q[re || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ee - Q,
      outerRadius: ee
    },
    (q) => /* @__PURE__ */ r.createElement(G, { ...q, getKey: (Z) => Z.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: j }), !isDraggingAnnotaiton && y && Object.entries(y.data).length > 0 && R && x && y.dataYPosition && y.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Jm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: T, top: F }, /* @__PURE__ */ r.createElement("ul", null, typeof y == "object" && Object.entries(y.data).map((q, Z) => /* @__PURE__ */ r.createElement(P, { item: q, key: Z })))))), /* @__PURE__ */ r.createElement(ly, { config: n, colorScale: ne, seriesHighlight: u, highlight: d, highlightReset: f, currentViewport: i, formatLabels: te }));
};
function Ss(e) {
  return e.split("-")[1];
}
function jf(e) {
  return e === "y" ? "height" : "width";
}
function Ni(e) {
  return e.split("-")[0];
}
function Es(e) {
  return ["top", "bottom"].includes(Ni(e)) ? "x" : "y";
}
function sh(e, t, n) {
  let { reference: a, floating: i } = e;
  const l = a.x + a.width / 2 - i.width / 2, d = a.y + a.height / 2 - i.height / 2, f = Es(t), u = jf(f), m = a[u] / 2 - i[u] / 2, y = f === "x";
  let x;
  switch (Ni(t)) {
    case "top":
      x = { x: l, y: a.y - i.height };
      break;
    case "bottom":
      x = { x: l, y: a.y + a.height };
      break;
    case "right":
      x = { x: a.x + a.width, y: d };
      break;
    case "left":
      x = { x: a.x - i.width, y: d };
      break;
    default:
      x = { x: a.x, y: a.y };
  }
  switch (Ss(t)) {
    case "start":
      x[f] -= m * (n && y ? -1 : 1);
      break;
    case "end":
      x[f] += m * (n && y ? -1 : 1);
  }
  return x;
}
function uy(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ss(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function cy(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: l, rects: d, elements: f, strategy: u } = e, { boundary: m = "clippingAncestors", rootBoundary: y = "viewport", elementContext: x = "floating", altBoundary: S = !1, padding: R = 0 } = t, T = uy(R), F = f[S ? x === "floating" ? "reference" : "floating" : x], k = ss(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(F))) == null || n ? F : F.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(f.floating)), boundary: m, rootBoundary: y, strategy: u })), h = x === "floating" ? { ...d.floating, x: a, y: i } : d.reference, P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f.floating)), O = await (l.isElement == null ? void 0 : l.isElement(P)) && await (l.getScale == null ? void 0 : l.getScale(P)) || { x: 1, y: 1 }, C = ss(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: h, offsetParent: P, strategy: u }) : h);
  return { top: (k.top - C.top + T.top) / O.y, bottom: (C.bottom - k.bottom + T.bottom) / O.y, left: (k.left - C.left + T.left) / O.x, right: (C.right - k.right + T.right) / O.x };
}
const dS = Math.min, fS = Math.max;
function yf(e, t, n) {
  return fS(e, dS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const pS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function oc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => pS[t]);
}
function hS(e, t, n) {
  n === void 0 && (n = !1);
  const a = Ss(e), i = Es(e), l = jf(i);
  let d = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (d = oc(d)), { main: d, cross: oc(d) };
}
const mS = { start: "end", end: "start" };
function zd(e) {
  return e.replace(/start|end/g, (t) => mS[t]);
}
const yS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: l, initialPlacement: d, platform: f, elements: u } = t, { mainAxis: m = !0, crossAxis: y = !0, fallbackPlacements: x, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: T = !0, ...F } = e, k = Ni(a), h = Ni(d) === d, P = await (f.isRTL == null ? void 0 : f.isRTL(u.floating)), O = x || (h || !T ? [oc(d)] : function(ne) {
      const j = oc(ne);
      return [zd(ne), j, zd(j)];
    }(d));
    x || R === "none" || O.push(...function(ne, j, X, G) {
      const V = Ss(ne);
      let K = function(ee, de, Q) {
        const te = ["left", "right"], q = ["right", "left"], Z = ["top", "bottom"], Me = ["bottom", "top"];
        switch (ee) {
          case "top":
          case "bottom":
            return Q ? de ? q : te : de ? te : q;
          case "left":
          case "right":
            return de ? Z : Me;
          default:
            return [];
        }
      }(Ni(ne), X === "start", G);
      return V && (K = K.map((ee) => ee + "-" + V), j && (K = K.concat(K.map(zd)))), K;
    }(d, T, R, P));
    const C = [d, ...O], N = await cy(t, F), D = [];
    let B = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (m && D.push(N[k]), y) {
      const { main: ne, cross: j } = hS(a, l, P);
      D.push(N[ne], N[j]);
    }
    if (B = [...B, { placement: a, overflows: D }], !D.every((ne) => ne <= 0)) {
      var H, re;
      const ne = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1, j = C[ne];
      if (j)
        return { data: { index: ne, overflows: B }, reset: { placement: j } };
      let X = (re = B.find((G) => G.overflows[0] <= 0)) == null ? void 0 : re.placement;
      if (!X)
        switch (S) {
          case "bestFit": {
            var oe;
            const G = (oe = B.map((V) => [V.placement, V.overflows.filter((K) => K > 0).reduce((K, ee) => K + ee, 0)]).sort((V, K) => V[1] - K[1])[0]) == null ? void 0 : oe[0];
            G && (X = G);
            break;
          }
          case "initialPlacement":
            X = d;
        }
      if (a !== X)
        return { reset: { placement: X } };
    }
    return {};
  } };
}, gS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(l, d) {
      const { placement: f, platform: u, elements: m } = l, y = await (u.isRTL == null ? void 0 : u.isRTL(m.floating)), x = Ni(f), S = Ss(f), R = Es(f) === "x", T = ["left", "top"].includes(x) ? -1 : 1, F = y && R ? -1 : 1, k = typeof d == "function" ? d(l) : d;
      let { mainAxis: h, crossAxis: P, alignmentAxis: O } = typeof k == "number" ? { mainAxis: k, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...k };
      return S && typeof O == "number" && (P = S === "end" ? -1 * O : O), R ? { x: P * F, y: h * T } : { x: h * T, y: P * F };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, vS = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: l = !0, crossAxis: d = !1, limiter: f = { fn: (k) => {
      let { x: h, y: P } = k;
      return { x: h, y: P };
    } }, ...u } = e, m = { x: n, y: a }, y = await cy(t, u), x = Es(Ni(i)), S = x === "x" ? "y" : "x";
    let R = m[x], T = m[S];
    if (l) {
      const k = x === "y" ? "bottom" : "right";
      R = yf(R + y[x === "y" ? "top" : "left"], R, R - y[k]);
    }
    if (d) {
      const k = S === "y" ? "bottom" : "right";
      T = yf(T + y[S === "y" ? "top" : "left"], T, T - y[k]);
    }
    const F = f.fn({ ...t, [x]: R, [S]: T });
    return { ...F, data: { x: F.x - n, y: F.y - a } };
  } };
};
function Er(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yr(e) {
  return Er(e).getComputedStyle(e);
}
const uh = Math.min, us = Math.max, lc = Math.round;
function dy(e) {
  const t = Yr(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, l = e.offsetHeight, d = lc(n) !== i || lc(a) !== l;
  return d && (n = i, a = l), { width: n, height: a, fallback: d };
}
function Ia(e) {
  return py(e) ? (e.nodeName || "").toLowerCase() : "";
}
let wu;
function fy() {
  if (wu)
    return wu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (wu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), wu) : navigator.userAgent;
}
function Xr(e) {
  return e instanceof Er(e).HTMLElement;
}
function Oa(e) {
  return e instanceof Er(e).Element;
}
function py(e) {
  return e instanceof Er(e).Node;
}
function ch(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Er(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ec(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = Yr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function xS(e) {
  return ["table", "td", "th"].includes(Ia(e));
}
function gf(e) {
  const t = /firefox/i.test(fy()), n = Yr(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const l = n.contain;
    return l != null && l.includes(i);
  });
}
function hy() {
  return !/^((?!chrome|android).)*safari/i.test(fy());
}
function Uf(e) {
  return ["html", "body", "#document"].includes(Ia(e));
}
function my(e) {
  return Oa(e) ? e : e.contextElement;
}
const yy = { x: 1, y: 1 };
function jo(e) {
  const t = my(e);
  if (!Xr(t))
    return yy;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: l } = dy(t);
  let d = (l ? lc(n.width) : n.width) / a, f = (l ? lc(n.height) : n.height) / i;
  return d && Number.isFinite(d) || (d = 1), f && Number.isFinite(f) || (f = 1), { x: d, y: f };
}
function vs(e, t, n, a) {
  var i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const d = e.getBoundingClientRect(), f = my(e);
  let u = yy;
  t && (a ? Oa(a) && (u = jo(a)) : u = jo(e));
  const m = f ? Er(f) : window, y = !hy() && n;
  let x = (d.left + (y && ((i = m.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / u.x, S = (d.top + (y && ((l = m.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, R = d.width / u.x, T = d.height / u.y;
  if (f) {
    const F = Er(f), k = a && Oa(a) ? Er(a) : a;
    let h = F.frameElement;
    for (; h && a && k !== F; ) {
      const P = jo(h), O = h.getBoundingClientRect(), C = getComputedStyle(h);
      O.x += (h.clientLeft + parseFloat(C.paddingLeft)) * P.x, O.y += (h.clientTop + parseFloat(C.paddingTop)) * P.y, x *= P.x, S *= P.y, R *= P.x, T *= P.y, x += O.x, S += O.y, h = Er(h).frameElement;
    }
  }
  return { width: R, height: T, top: S, right: x + R, bottom: S + T, left: x, x, y: S };
}
function Fa(e) {
  return ((py(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function kc(e) {
  return Oa(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function gy(e) {
  return vs(Fa(e)).left + kc(e).scrollLeft;
}
function xs(e) {
  if (Ia(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ch(e) && e.host || Fa(e);
  return ch(t) ? t.host : t;
}
function vy(e) {
  const t = xs(e);
  return Uf(t) ? t.ownerDocument.body : Xr(t) && Ec(t) ? t : vy(t);
}
function xy(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = vy(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Er(a);
  return i ? t.concat(l, l.visualViewport || [], Ec(a) ? a : []) : t.concat(a, xy(a));
}
function dh(e, t, n) {
  return t === "viewport" ? ss(function(a, i) {
    const l = Er(a), d = Fa(a), f = l.visualViewport;
    let u = d.clientWidth, m = d.clientHeight, y = 0, x = 0;
    if (f) {
      u = f.width, m = f.height;
      const S = hy();
      (S || !S && i === "fixed") && (y = f.offsetLeft, x = f.offsetTop);
    }
    return { width: u, height: m, x: y, y: x };
  }(e, n)) : Oa(t) ? ss(function(a, i) {
    const l = vs(a, !0, i === "fixed"), d = l.top + a.clientTop, f = l.left + a.clientLeft, u = Xr(a) ? jo(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * u.x, height: a.clientHeight * u.y, x: f * u.x, y: d * u.y };
  }(t, n)) : ss(function(a) {
    const i = Fa(a), l = kc(a), d = a.ownerDocument.body, f = us(i.scrollWidth, i.clientWidth, d.scrollWidth, d.clientWidth), u = us(i.scrollHeight, i.clientHeight, d.scrollHeight, d.clientHeight);
    let m = -l.scrollLeft + gy(a);
    const y = -l.scrollTop;
    return Yr(d).direction === "rtl" && (m += us(i.clientWidth, d.clientWidth) - f), { width: f, height: u, x: m, y };
  }(Fa(e)));
}
function fh(e) {
  return Xr(e) && Yr(e).position !== "fixed" ? e.offsetParent : null;
}
function ph(e) {
  const t = Er(e);
  let n = fh(e);
  for (; n && xS(n) && Yr(n).position === "static"; )
    n = fh(n);
  return n && (Ia(n) === "html" || Ia(n) === "body" && Yr(n).position === "static" && !gf(n)) ? t : n || function(a) {
    let i = xs(a);
    for (; Xr(i) && !Uf(i); ) {
      if (gf(i))
        return i;
      i = xs(i);
    }
    return null;
  }(e) || t;
}
function bS(e, t, n) {
  const a = Xr(t), i = Fa(t), l = vs(e, !0, n === "fixed", t);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const f = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((Ia(t) !== "body" || Ec(i)) && (d = kc(t)), Xr(t)) {
      const u = vs(t, !0);
      f.x = u.x + t.clientLeft, f.y = u.y + t.clientTop;
    } else
      i && (f.x = gy(i));
  return { x: l.left + d.scrollLeft - f.x, y: l.top + d.scrollTop - f.y, width: l.width, height: l.height };
}
const SS = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const l = n === "clippingAncestors" ? function(m, y) {
    const x = y.get(m);
    if (x)
      return x;
    let S = xy(m).filter((k) => Oa(k) && Ia(k) !== "body"), R = null;
    const T = Yr(m).position === "fixed";
    let F = T ? xs(m) : m;
    for (; Oa(F) && !Uf(F); ) {
      const k = Yr(F), h = gf(F);
      (T ? h || R : h || k.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = k : S = S.filter((P) => P !== F), F = xs(F);
    }
    return y.set(m, S), S;
  }(t, this._c) : [].concat(n), d = [...l, a], f = d[0], u = d.reduce((m, y) => {
    const x = dh(t, y, i);
    return m.top = us(x.top, m.top), m.right = uh(x.right, m.right), m.bottom = uh(x.bottom, m.bottom), m.left = us(x.left, m.left), m;
  }, dh(t, f, i));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Xr(n), l = Fa(n);
  if (n === l)
    return t;
  let d = { scrollLeft: 0, scrollTop: 0 }, f = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((Ia(n) !== "body" || Ec(l)) && (d = kc(n)), Xr(n))) {
    const m = vs(n);
    f = jo(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  return { width: t.width * f.x, height: t.height * f.y, x: t.x * f.x - d.scrollLeft * f.x + u.x, y: t.y * f.y - d.scrollTop * f.y + u.y };
}, isElement: Oa, getDimensions: function(e) {
  return Xr(e) ? dy(e) : e.getBoundingClientRect();
}, getOffsetParent: ph, getDocumentElement: Fa, getScale: jo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || ph, l = this.getDimensions;
  return { reference: bS(t, await i(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yr(e).direction === "rtl" }, hh = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: SS, ...n }, l = { ...i.platform, _c: a };
  return (async (d, f, u) => {
    const { placement: m = "bottom", strategy: y = "absolute", middleware: x = [], platform: S } = u, R = x.filter(Boolean), T = await (S.isRTL == null ? void 0 : S.isRTL(f));
    if (S == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((N) => {
      let { name: D } = N;
      return D === "autoPlacement" || D === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    d && f || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let F = await S.getElementRects({ reference: d, floating: f, strategy: y }), { x: k, y: h } = sh(F, m, T), P = m, O = {}, C = 0;
    for (let N = 0; N < R.length; N++) {
      const { name: D, fn: B } = R[N], { x: H, y: re, data: oe, reset: ne } = await B({ x: k, y: h, initialPlacement: m, placement: P, strategy: y, middlewareData: O, rects: F, platform: S, elements: { reference: d, floating: f } });
      k = H ?? k, h = re ?? h, O = { ...O, [D]: { ...O[D], ...oe } }, C > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), ne && C <= 50 && (C++, typeof ne == "object" && (ne.placement && (P = ne.placement), ne.rects && (F = ne.rects === !0 ? await S.getElementRects({ reference: d, floating: f, strategy: y }) : ne.rects), { x: k, y: h } = sh(F, P, T)), N = -1);
    }
    return { x: k, y: h, placement: P, strategy: y, middlewareData: O };
  })(e, t, { ...i, platform: l });
};
var _a, Oi = { exports: {} }, mh = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
_a = mh, function() {
  var e = r, t = 60103, n = 60106;
  _a.Fragment = 60107;
  var a = 60108, i = 60114, l = 60109, d = 60110, f = 60112, u = 60113, m = 60120, y = 60115, x = 60116, S = 60121, R = 60122, T = 60117, F = 60129, k = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    t = h("react.element"), n = h("react.portal"), _a.Fragment = h("react.fragment"), a = h("react.strict_mode"), i = h("react.profiler"), l = h("react.provider"), d = h("react.context"), f = h("react.forward_ref"), u = h("react.suspense"), m = h("react.suspense_list"), y = h("react.memo"), x = h("react.lazy"), S = h("react.block"), R = h("react.server.block"), T = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), F = h("react.debug_trace_mode"), h("react.offscreen"), k = h("react.legacy_hidden");
  }
  var P = typeof Symbol == "function" && Symbol.iterator, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function C(me) {
    for (var _e = arguments.length, ae = new Array(_e > 1 ? _e - 1 : 0), se = 1; se < _e; se++)
      ae[se - 1] = arguments[se];
    N("error", me, ae);
  }
  function N(me, _e, ae) {
    var se = O.ReactDebugCurrentFrame, xe = "";
    if (re) {
      var ze = B(re.type), Ve = re._owner;
      xe += function(Qe, tt, et) {
        var Ye = "";
        if (tt) {
          var Re = tt.fileName, Ce = Re.replace(D, "");
          if (/^index\./.test(Ce)) {
            var at = Re.match(D);
            if (at) {
              var Ge = at[1];
              Ge && (Ce = Ge.replace(D, "") + "/" + Ce);
            }
          }
          Ye = " (at " + Ce + ":" + tt.lineNumber + ")";
        } else
          et && (Ye = " (created by " + et + ")");
        return `
    in ` + (Qe || "Unknown") + Ye;
      }(ze, re._source, Ve && B(Ve.type));
    }
    (xe += se.getStackAddendum()) !== "" && (_e += "%s", ae = ae.concat([xe]));
    var qe = ae.map(function(Qe) {
      return "" + Qe;
    });
    qe.unshift("Warning: " + _e), Function.prototype.apply.call(console[me], console, qe);
  }
  var D = /^(.*)[\\\/]/;
  function B(me) {
    if (me == null)
      return null;
    if (typeof me.tag == "number" && C("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof me == "function")
      return me.displayName || me.name || null;
    if (typeof me == "string")
      return me;
    switch (me) {
      case _a.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case i:
        return "Profiler";
      case a:
        return "StrictMode";
      case u:
        return "Suspense";
      case m:
        return "SuspenseList";
    }
    if (typeof me == "object")
      switch (me.$$typeof) {
        case d:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case f:
          return se = me, xe = me.render, ze = "ForwardRef", Ve = xe.displayName || xe.name || "", se.displayName || (Ve !== "" ? ze + "(" + Ve + ")" : ze);
        case y:
          return B(me.type);
        case S:
          return B(me.render);
        case x:
          var _e = (ae = me)._status === 1 ? ae._result : null;
          if (_e)
            return B(_e);
      }
    var ae, se, xe, ze, Ve;
    return null;
  }
  var H = {};
  O.ReactDebugCurrentFrame;
  var re = null;
  function oe(me) {
    re = me;
  }
  var ne, j, X, G = O.ReactCurrentOwner, V = Object.prototype.hasOwnProperty, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(me, _e, ae, se, xe) {
    var ze, Ve = {}, qe = null, Qe = null;
    for (ze in ae !== void 0 && (qe = "" + ae), function(Ye) {
      if (V.call(Ye, "key")) {
        var Re = Object.getOwnPropertyDescriptor(Ye, "key").get;
        if (Re && Re.isReactWarning)
          return !1;
      }
      return Ye.key !== void 0;
    }(_e) && (qe = "" + _e.key), function(Ye) {
      if (V.call(Ye, "ref")) {
        var Re = Object.getOwnPropertyDescriptor(Ye, "ref").get;
        if (Re && Re.isReactWarning)
          return !1;
      }
      return Ye.ref !== void 0;
    }(_e) && (Qe = _e.ref, function(Ye, Re) {
      if (typeof Ye.ref == "string" && G.current && Re && G.current.stateNode !== Re) {
        var Ce = B(G.current.type);
        X[Ce] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(G.current.type), Ye.ref), X[Ce] = !0);
      }
    }(_e, xe)), _e)
      V.call(_e, ze) && !K.hasOwnProperty(ze) && (Ve[ze] = _e[ze]);
    if (me && me.defaultProps) {
      var tt = me.defaultProps;
      for (ze in tt)
        Ve[ze] === void 0 && (Ve[ze] = tt[ze]);
    }
    if (qe || Qe) {
      var et = typeof me == "function" ? me.displayName || me.name || "Unknown" : me;
      qe && function(Ye, Re) {
        var Ce = function() {
          ne || (ne = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Re));
        };
        Ce.isReactWarning = !0, Object.defineProperty(Ye, "key", { get: Ce, configurable: !0 });
      }(Ve, et), Qe && function(Ye, Re) {
        var Ce = function() {
          j || (j = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Re));
        };
        Ce.isReactWarning = !0, Object.defineProperty(Ye, "ref", { get: Ce, configurable: !0 });
      }(Ve, et);
    }
    return function(Ye, Re, Ce, at, Ge, ft, ht) {
      var yt = { $$typeof: t, type: Ye, key: Re, ref: Ce, props: ht, _owner: ft, _store: {} };
      return Object.defineProperty(yt._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(yt, "_self", { configurable: !1, enumerable: !1, writable: !1, value: at }), Object.defineProperty(yt, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ge }), Object.freeze && (Object.freeze(yt.props), Object.freeze(yt)), yt;
    }(me, qe, Qe, xe, se, G.current, Ve);
  }
  X = {};
  var de, Q = O.ReactCurrentOwner;
  function te(me) {
    re = me;
  }
  function q(me) {
    return typeof me == "object" && me !== null && me.$$typeof === t;
  }
  function Z() {
    if (Q.current) {
      var me = B(Q.current.type);
      if (me)
        return `

Check the render method of \`` + me + "`.";
    }
    return "";
  }
  O.ReactDebugCurrentFrame, de = !1;
  var Me = {};
  function ke(me, _e) {
    if (me._store && !me._store.validated && me.key == null) {
      me._store.validated = !0;
      var ae = function(xe) {
        var ze = Z();
        if (!ze) {
          var Ve = typeof xe == "string" ? xe : xe.displayName || xe.name;
          Ve && (ze = `

Check the top-level render call using <` + Ve + ">.");
        }
        return ze;
      }(_e);
      if (!Me[ae]) {
        Me[ae] = !0;
        var se = "";
        me && me._owner && me._owner !== Q.current && (se = " It was passed a child from " + B(me._owner.type) + "."), te(me), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, se), te(null);
      }
    }
  }
  function pe(me, _e) {
    if (typeof me == "object") {
      if (Array.isArray(me))
        for (var ae = 0; ae < me.length; ae++) {
          var se = me[ae];
          q(se) && ke(se, _e);
        }
      else if (q(me))
        me._store && (me._store.validated = !0);
      else if (me) {
        var xe = function(qe) {
          if (qe === null || typeof qe != "object")
            return null;
          var Qe = P && qe[P] || qe["@@iterator"];
          return typeof Qe == "function" ? Qe : null;
        }(me);
        if (typeof xe == "function" && xe !== me.entries)
          for (var ze, Ve = xe.call(me); !(ze = Ve.next()).done; )
            q(ze.value) && ke(ze.value, _e);
      }
    }
  }
  function Le(me) {
    var _e, ae = me.type;
    if (ae != null && typeof ae != "string") {
      if (typeof ae == "function")
        _e = ae.propTypes;
      else {
        if (typeof ae != "object" || ae.$$typeof !== f && ae.$$typeof !== y)
          return;
        _e = ae.propTypes;
      }
      if (_e) {
        var se = B(ae);
        (function(xe, ze, Ve, qe, Qe) {
          var tt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var et in xe)
            if (tt(xe, et)) {
              var Ye = void 0;
              try {
                if (typeof xe[et] != "function") {
                  var Re = Error((qe || "React class") + ": " + Ve + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof xe[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Re.name = "Invariant Violation", Re;
                }
                Ye = xe[et](ze, et, qe, Ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ce) {
                Ye = Ce;
              }
              !Ye || Ye instanceof Error || (oe(Qe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ve, et, typeof Ye), oe(null)), Ye instanceof Error && !(Ye.message in H) && (H[Ye.message] = !0, oe(Qe), C("Failed %s type: %s", Ve, Ye.message), oe(null));
            }
        })(_e, me.props, "prop", se, me);
      } else
        ae.PropTypes === void 0 || de || (de = !0, C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B(ae) || "Unknown"));
      typeof ae.getDefaultProps != "function" || ae.getDefaultProps.isReactClassApproved || C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function We(me, _e, ae, se, xe, ze) {
    var Ve = function(Ce) {
      return typeof Ce == "string" || typeof Ce == "function" || Ce === _a.Fragment || Ce === i || Ce === F || Ce === a || Ce === u || Ce === m || Ce === k || typeof Ce == "object" && Ce !== null && (Ce.$$typeof === x || Ce.$$typeof === y || Ce.$$typeof === l || Ce.$$typeof === d || Ce.$$typeof === f || Ce.$$typeof === T || Ce.$$typeof === S || Ce[0] === R);
    }(me);
    if (!Ve) {
      var qe = "";
      (me === void 0 || typeof me == "object" && me !== null && Object.keys(me).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Qe, tt = function(Ce) {
        return Ce !== void 0 ? `

Check your code at ` + Ce.fileName.replace(/^.*[\\\/]/, "") + ":" + Ce.lineNumber + "." : "";
      }(xe);
      qe += tt || Z(), me === null ? Qe = "null" : Array.isArray(me) ? Qe = "array" : me !== void 0 && me.$$typeof === t ? (Qe = "<" + (B(me.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof me, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, qe);
    }
    var et = ee(me, _e, ae, xe, ze);
    if (et == null)
      return et;
    if (Ve) {
      var Ye = _e.children;
      if (Ye !== void 0)
        if (se)
          if (Array.isArray(Ye)) {
            for (var Re = 0; Re < Ye.length; Re++)
              pe(Ye[Re], me);
            Object.freeze && Object.freeze(Ye);
          } else
            C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          pe(Ye, me);
    }
    return me === _a.Fragment ? function(Ce) {
      for (var at = Object.keys(Ce.props), Ge = 0; Ge < at.length; Ge++) {
        var ft = at[Ge];
        if (ft !== "children" && ft !== "key") {
          te(Ce), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ft), te(null);
          break;
        }
      }
      Ce.ref !== null && (te(Ce), C("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
    }(et) : Le(et), et;
  }
  var Ze = function(me, _e, ae) {
    return We(me, _e, ae, !1);
  }, Ae = function(me, _e, ae) {
    return We(me, _e, ae, !0);
  };
  _a.jsx = Ze, _a.jsxs = Ae;
}(), Oi.exports = mh;
var Id, by = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Id = by, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) {
      var i = arguments[a];
      if (i) {
        var l = typeof i;
        if (l === "string" || l === "number")
          n.push(i);
        else if (Array.isArray(i)) {
          if (i.length) {
            var d = t.apply(null, i);
            d && n.push(d);
          }
        } else if (l === "object") {
          if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
            n.push(i.toString());
            continue;
          }
          for (var f in i)
            e.call(i, f) && i[f] && n.push(f);
        }
      }
    }
    return n.join(" ");
  }
  Id.exports ? (t.default = t, Id.exports = t) : window.classNames = t;
}();
var yh = by.exports;
const gh = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, ES = ({ content: e }) => Oi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), kS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, wS = ce.createContext({ getTooltipData: () => kS });
function Sy(e = "DEFAULT_TOOLTIP_ID") {
  return ce.useContext(wS).getTooltipData(e);
}
const vh = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: l = "absolute", middlewares: d = [gS(Number(i)), yS(), vS({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const f = d;
  return n ? (f.push({ name: "arrow", options: u = { element: n, padding: 5 }, async fn(m) {
    const { element: y, padding: x = 0 } = u || {}, { x: S, y: R, placement: T, rects: F, platform: k } = m;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const h = uy(x), P = { x: S, y: R }, O = Es(T), C = jf(O), N = await k.getDimensions(y), D = O === "y" ? "top" : "left", B = O === "y" ? "bottom" : "right", H = F.reference[C] + F.reference[O] - P[O] - F.floating[C], re = P[O] - F.reference[O], oe = await (k.getOffsetParent == null ? void 0 : k.getOffsetParent(y));
    let ne = oe ? O === "y" ? oe.clientHeight || 0 : oe.clientWidth || 0 : 0;
    ne === 0 && (ne = F.floating[C]);
    const j = H / 2 - re / 2, X = h[D], G = ne - N[C] - h[B], V = ne / 2 - N[C] / 2 + j, K = yf(X, V, G), ee = Ss(T) != null && V != K && F.reference[C] / 2 - (V < X ? h[D] : h[B]) - N[C] / 2 < 0;
    return { [O]: P[O] - (ee ? V < X ? X - V : G - V : 0), data: { [O]: K, centerOffset: V - K } };
  } }), hh(e, t, { placement: a, strategy: l, middleware: f }).then(({ x: m, y, placement: x, middlewareData: S }) => {
    var R, T;
    const F = { left: `${m}px`, top: `${y}px` }, { x: k, y: h } = (R = S.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: F, tooltipArrowStyles: { left: k != null ? `${k}px` : "", top: h != null ? `${h}px` : "", right: "", bottom: "", [(T = { top: "bottom", right: "left", bottom: "top", left: "right" }[x.split("-")[0]]) !== null && T !== void 0 ? T : "bottom"]: "-4px" } };
  })) : hh(e, t, { placement: "bottom", strategy: l, middleware: f }).then(({ x: m, y }) => ({ tooltipStyles: { left: `${m}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var u;
};
var wi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const xh = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: l, place: d = "top", offset: f = 10, events: u = ["hover"], positionStrategy: m = "absolute", middlewares: y, wrapper: x, children: S = null, delayShow: R = 0, delayHide: T = 0, float: F = !1, noArrow: k = !1, clickable: h = !1, closeOnEsc: P = !1, style: O, position: C, afterShow: N, afterHide: D, content: B, html: H, isOpen: re, setIsOpen: oe, activeAnchor: ne, setActiveAnchor: j }) => {
  const X = ce.useRef(null), G = ce.useRef(null), V = ce.useRef(null), K = ce.useRef(null), [ee, de] = ce.useState({}), [Q, te] = ce.useState({}), [q, Z] = ce.useState(!1), [Me, ke] = ce.useState(!1), pe = ce.useRef(!1), Le = ce.useRef(null), { anchorRefs: We, setActiveAnchor: Ze } = Sy(e), Ae = ce.useRef(!1), [me, _e] = ce.useState([]), ae = ce.useRef(!1);
  ce.useLayoutEffect(() => (ae.current = !0, () => {
    ae.current = !1;
  }), []), ce.useEffect(() => {
    if (!q) {
      const Ge = setTimeout(() => {
        ke(!1);
      }, 150);
      return () => {
        clearTimeout(Ge);
      };
    }
    return () => null;
  }, [q]);
  const se = (Ge) => {
    ae.current && (Ge && ke(!0), setTimeout(() => {
      ae.current && (oe == null || oe(Ge), re === void 0 && Z(Ge));
    }, 10));
  };
  ce.useEffect(() => {
    if (re === void 0)
      return () => null;
    re && ke(!0);
    const Ge = setTimeout(() => {
      Z(re);
    }, 10);
    return () => {
      clearTimeout(Ge);
    };
  }, [re]), ce.useEffect(() => {
    q !== pe.current && (pe.current = q, q ? N == null || N() : D == null || D());
  }, [q]);
  const xe = (Ge = T) => {
    K.current && clearTimeout(K.current), K.current = setTimeout(() => {
      Ae.current || se(!1);
    }, Ge);
  }, ze = (Ge) => {
    var ft;
    if (!Ge)
      return;
    R ? (V.current && clearTimeout(V.current), V.current = setTimeout(() => {
      se(!0);
    }, R)) : se(!0);
    const ht = (ft = Ge.currentTarget) !== null && ft !== void 0 ? ft : Ge.target;
    j(ht), Ze({ current: ht }), K.current && clearTimeout(K.current);
  }, Ve = () => {
    h ? xe(T || 100) : T ? xe() : se(!1), V.current && clearTimeout(V.current);
  }, qe = ({ x: Ge, y: ft }) => {
    vh({ place: d, offset: f, elementReference: { getBoundingClientRect: () => ({ x: Ge, y: ft, width: 0, height: 0, top: ft, left: Ge, right: Ge, bottom: ft }) }, tooltipReference: X.current, tooltipArrowReference: G.current, strategy: m, middlewares: y }).then((ht) => {
      Object.keys(ht.tooltipStyles).length && de(ht.tooltipStyles), Object.keys(ht.tooltipArrowStyles).length && te(ht.tooltipArrowStyles);
    });
  }, Qe = (Ge) => {
    if (!Ge)
      return;
    const ft = Ge, ht = { x: ft.clientX, y: ft.clientY };
    qe(ht), Le.current = ht;
  }, tt = (Ge) => {
    ze(Ge), T && xe();
  }, et = (Ge) => {
    const ft = document.querySelector(`[id='${i}']`);
    ft != null && ft.contains(Ge.target) || me.some((ht) => ht.contains(Ge.target)) || se(!1);
  }, Ye = (Ge) => {
    Ge.key === "Escape" && se(!1);
  }, Re = gh(ze, 50), Ce = gh(Ve, 50);
  ce.useEffect(() => {
    var Ge, ft;
    const ht = new Set(We);
    me.forEach((Kt) => {
      ht.add({ current: Kt });
    });
    const yt = document.querySelector(`[id='${i}']`);
    yt && ht.add({ current: yt }), P && window.addEventListener("keydown", Ye);
    const _t = [];
    u.find((Kt) => Kt === "click") && (window.addEventListener("click", et), _t.push({ event: "click", listener: tt })), u.find((Kt) => Kt === "hover") && (_t.push({ event: "mouseenter", listener: Re }, { event: "mouseleave", listener: Ce }, { event: "focus", listener: Re }, { event: "blur", listener: Ce }), F && _t.push({ event: "mousemove", listener: Qe }));
    const an = () => {
      Ae.current = !0;
    }, on = () => {
      Ae.current = !1, Ve();
    };
    return h && ((Ge = X.current) === null || Ge === void 0 || Ge.addEventListener("mouseenter", an), (ft = X.current) === null || ft === void 0 || ft.addEventListener("mouseleave", on)), _t.forEach(({ event: Kt, listener: Jt }) => {
      ht.forEach((Yt) => {
        var At;
        (At = Yt.current) === null || At === void 0 || At.addEventListener(Kt, Jt);
      });
    }), () => {
      var Kt, Jt;
      u.find((Yt) => Yt === "click") && window.removeEventListener("click", et), P && window.removeEventListener("keydown", Ye), h && ((Kt = X.current) === null || Kt === void 0 || Kt.removeEventListener("mouseenter", an), (Jt = X.current) === null || Jt === void 0 || Jt.removeEventListener("mouseleave", on)), _t.forEach(({ event: Yt, listener: At }) => {
        ht.forEach((Mt) => {
          var Vt;
          (Vt = Mt.current) === null || Vt === void 0 || Vt.removeEventListener(Yt, At);
        });
      });
    };
  }, [Me, We, me, P, u]), ce.useEffect(() => {
    let Ge = l ?? "";
    !Ge && e && (Ge = `[data-tooltip-id='${e}']`);
    const ft = new MutationObserver((ht) => {
      const yt = [];
      ht.forEach((_t) => {
        if (_t.type === "attributes" && _t.attributeName === "data-tooltip-id" && _t.target.getAttribute("data-tooltip-id") === e && yt.push(_t.target), _t.type === "childList" && (ne && [..._t.removedNodes].some((an) => !!an.contains(ne) && (ke(!1), se(!1), j(null), !0)), Ge))
          try {
            const an = [..._t.addedNodes].filter((on) => on.nodeType === 1);
            yt.push(...an.filter((on) => on.matches(Ge))), yt.push(...an.flatMap((on) => [...on.querySelectorAll(Ge)]));
          } catch {
          }
      }), yt.length && _e((_t) => [..._t, ...yt]);
    });
    return ft.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      ft.disconnect();
    };
  }, [e, l, ne]), ce.useEffect(() => {
    C ? qe(C) : F ? Le.current && qe(Le.current) : vh({ place: d, offset: f, elementReference: ne, tooltipReference: X.current, tooltipArrowReference: G.current, strategy: m, middlewares: y }).then((Ge) => {
      ae.current && (Object.keys(Ge.tooltipStyles).length && de(Ge.tooltipStyles), Object.keys(Ge.tooltipArrowStyles).length && te(Ge.tooltipArrowStyles));
    });
  }, [q, ne, B, H, d, f, m, C]), ce.useEffect(() => {
    var Ge;
    const ft = document.querySelector(`[id='${i}']`), ht = [...me, ft];
    ne && ht.includes(ne) || j((Ge = me[0]) !== null && Ge !== void 0 ? Ge : ft);
  }, [i, me, ne]), ce.useEffect(() => () => {
    V.current && clearTimeout(V.current), K.current && clearTimeout(K.current);
  }, []), ce.useEffect(() => {
    let Ge = l;
    if (!Ge && e && (Ge = `[data-tooltip-id='${e}']`), Ge)
      try {
        const ft = Array.from(document.querySelectorAll(Ge));
        _e(ft);
      } catch {
        _e([]);
      }
  }, [e, l]);
  const at = !!(H || B || S) && q && Object.keys(ee).length > 0;
  return Me ? Oi.exports.jsxs(x, { id: e, role: "tooltip", className: yh("react-tooltip", wi.tooltip, wi[a], t, { [wi.show]: at, [wi.fixed]: m === "fixed", [wi.clickable]: h }), style: { ...O, ...ee }, ref: X, children: [H && Oi.exports.jsx(ES, { content: H }) || B || S, Oi.exports.jsx(x, { className: yh("react-tooltip-arrow", wi.arrow, n, { [wi["no-arrow"]]: k }), style: Q, ref: G })] }) : null;
}, Ey = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: l, classNameArrow: d, variant: f = "dark", place: u = "top", offset: m = 10, wrapper: y = "div", children: x = null, events: S = ["hover"], positionStrategy: R = "absolute", middlewares: T, delayShow: F = 0, delayHide: k = 0, float: h = !1, noArrow: P = !1, clickable: O = !1, closeOnEsc: C = !1, style: N, position: D, isOpen: B, setIsOpen: H, afterShow: re, afterHide: oe }) => {
  const [ne, j] = ce.useState(a), [X, G] = ce.useState(i), [V, K] = ce.useState(u), [ee, de] = ce.useState(f), [Q, te] = ce.useState(m), [q, Z] = ce.useState(F), [Me, ke] = ce.useState(k), [pe, Le] = ce.useState(h), [We, Ze] = ce.useState(y), [Ae, me] = ce.useState(S), [_e, ae] = ce.useState(R), [se, xe] = ce.useState(null), { anchorRefs: ze, activeAnchor: Ve } = Sy(e), qe = (et) => et == null ? void 0 : et.getAttributeNames().reduce((Ye, Re) => {
    var Ce;
    return Re.startsWith("data-tooltip-") && (Ye[Re.replace(/^data-tooltip-/, "")] = (Ce = et == null ? void 0 : et.getAttribute(Re)) !== null && Ce !== void 0 ? Ce : null), Ye;
  }, {}), Qe = (et) => {
    const Ye = { place: (Re) => {
      var Ce;
      K((Ce = Re) !== null && Ce !== void 0 ? Ce : u);
    }, content: (Re) => {
      j(Re ?? a);
    }, html: (Re) => {
      G(Re ?? i);
    }, variant: (Re) => {
      var Ce;
      de((Ce = Re) !== null && Ce !== void 0 ? Ce : f);
    }, offset: (Re) => {
      te(Re === null ? m : Number(Re));
    }, wrapper: (Re) => {
      var Ce;
      Ze((Ce = Re) !== null && Ce !== void 0 ? Ce : y);
    }, events: (Re) => {
      const Ce = Re == null ? void 0 : Re.split(" ");
      me(Ce ?? S);
    }, "position-strategy": (Re) => {
      var Ce;
      ae((Ce = Re) !== null && Ce !== void 0 ? Ce : R);
    }, "delay-show": (Re) => {
      Z(Re === null ? F : Number(Re));
    }, "delay-hide": (Re) => {
      ke(Re === null ? k : Number(Re));
    }, float: (Re) => {
      Le(Re === null ? h : !!Re);
    } };
    Object.values(Ye).forEach((Re) => Re(null)), Object.entries(et).forEach(([Re, Ce]) => {
      var at;
      (at = Ye[Re]) === null || at === void 0 || at.call(Ye, Ce);
    });
  };
  ce.useEffect(() => {
    j(a);
  }, [a]), ce.useEffect(() => {
    G(i);
  }, [i]), ce.useEffect(() => {
    K(u);
  }, [u]), ce.useEffect(() => {
    var et;
    const Ye = new Set(ze);
    let Re = n;
    if (!Re && e && (Re = `[data-tooltip-id='${e}']`), Re)
      try {
        document.querySelectorAll(Re).forEach((ht) => {
          Ye.add({ current: ht });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const Ce = document.querySelector(`[id='${t}']`);
    if (Ce && Ye.add({ current: Ce }), !Ye.size)
      return () => null;
    const at = (et = se ?? Ce) !== null && et !== void 0 ? et : Ve.current, Ge = new MutationObserver((ht) => {
      ht.forEach((yt) => {
        var _t;
        if (!at || yt.type !== "attributes" || !(!((_t = yt.attributeName) === null || _t === void 0) && _t.startsWith("data-tooltip-")))
          return;
        const an = qe(at);
        Qe(an);
      });
    }), ft = { attributes: !0, childList: !1, subtree: !1 };
    if (at) {
      const ht = qe(at);
      Qe(ht), Ge.observe(at, ft);
    }
    return () => {
      Ge.disconnect();
    };
  }, [ze, Ve, se, t, n]);
  const tt = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: d, content: ne, html: X, place: V, variant: ee, offset: Q, wrapper: We, events: Ae, positionStrategy: _e, middlewares: T, delayShow: q, delayHide: Me, float: pe, noArrow: P, clickable: O, closeOnEsc: C, style: N, position: D, isOpen: B, setIsOpen: H, afterShow: re, afterHide: oe, activeAnchor: se, setActiveAnchor: (et) => xe(et) };
  return x ? Oi.exports.jsx(xh, { ...tt, children: x }) : Oi.exports.jsx(xh, { ...tt });
};
function bh(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let i of e)
      (i = t(i, ++a, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function TS(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let i of e)
      (i = t(i, ++a, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function $d(e, t) {
  let n = 0;
  if (t === void 0)
    for (let a of e)
      (a = +a) && (n += a);
  else {
    let a = -1;
    for (let i of e)
      (i = +t(i, ++a, e)) && (n += i);
  }
  return n;
}
function CS(e) {
  return e.depth;
}
function AS(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Tu(e) {
  return function() {
    return e;
  };
}
function Sh(e, t) {
  return sc(e.source, t.source) || e.index - t.index;
}
function Eh(e, t) {
  return sc(e.target, t.target) || e.index - t.index;
}
function sc(e, t) {
  return e.y0 - t.y0;
}
function Bd(e) {
  return e.value;
}
function LS(e) {
  return e.index;
}
function PS(e) {
  return e.nodes;
}
function RS(e) {
  return e.links;
}
function kh(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function wh({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, a = n;
    for (const i of t.sourceLinks)
      i.y0 = n + i.width / 2, n += i.width;
    for (const i of t.targetLinks)
      i.y1 = a + i.width / 2, a += i.width;
  }
}
function DS() {
  let e = 0, t = 0, n = 1, a = 1, i = 24, l = 8, d, f = LS, u = AS, m, y, x = PS, S = RS, R = 6;
  function T() {
    const V = { nodes: x.apply(null, arguments), links: S.apply(null, arguments) };
    return F(V), k(V), h(V), P(V), N(V), wh(V), V;
  }
  T.update = function(V) {
    return wh(V), V;
  }, T.nodeId = function(V) {
    return arguments.length ? (f = typeof V == "function" ? V : Tu(V), T) : f;
  }, T.nodeAlign = function(V) {
    return arguments.length ? (u = typeof V == "function" ? V : Tu(V), T) : u;
  }, T.nodeSort = function(V) {
    return arguments.length ? (m = V, T) : m;
  }, T.nodeWidth = function(V) {
    return arguments.length ? (i = +V, T) : i;
  }, T.nodePadding = function(V) {
    return arguments.length ? (l = d = +V, T) : l;
  }, T.nodes = function(V) {
    return arguments.length ? (x = typeof V == "function" ? V : Tu(V), T) : x;
  }, T.links = function(V) {
    return arguments.length ? (S = typeof V == "function" ? V : Tu(V), T) : S;
  }, T.linkSort = function(V) {
    return arguments.length ? (y = V, T) : y;
  }, T.size = function(V) {
    return arguments.length ? (e = t = 0, n = +V[0], a = +V[1], T) : [n - e, a - t];
  }, T.extent = function(V) {
    return arguments.length ? (e = +V[0][0], n = +V[1][0], t = +V[0][1], a = +V[1][1], T) : [[e, t], [n, a]];
  }, T.iterations = function(V) {
    return arguments.length ? (R = +V, T) : R;
  };
  function F({ nodes: V, links: K }) {
    for (const [de, Q] of V.entries())
      Q.index = de, Q.sourceLinks = [], Q.targetLinks = [];
    const ee = new Map(V.map((de, Q) => [f(de, Q, V), de]));
    for (const [de, Q] of K.entries()) {
      Q.index = de;
      let { source: te, target: q } = Q;
      typeof te != "object" && (te = Q.source = kh(ee, te)), typeof q != "object" && (q = Q.target = kh(ee, q)), te.sourceLinks.push(Q), q.targetLinks.push(Q);
    }
    if (y != null)
      for (const { sourceLinks: de, targetLinks: Q } of V)
        de.sort(y), Q.sort(y);
  }
  function k({ nodes: V }) {
    for (const K of V)
      K.value = K.fixedValue === void 0 ? Math.max($d(K.sourceLinks, Bd), $d(K.targetLinks, Bd)) : K.fixedValue;
  }
  function h({ nodes: V }) {
    const K = V.length;
    let ee = new Set(V), de = /* @__PURE__ */ new Set(), Q = 0;
    for (; ee.size; ) {
      for (const te of ee) {
        te.depth = Q;
        for (const { target: q } of te.sourceLinks)
          de.add(q);
      }
      if (++Q > K)
        throw new Error("circular link");
      ee = de, de = /* @__PURE__ */ new Set();
    }
  }
  function P({ nodes: V }) {
    const K = V.length;
    let ee = new Set(V), de = /* @__PURE__ */ new Set(), Q = 0;
    for (; ee.size; ) {
      for (const te of ee) {
        te.height = Q;
        for (const { source: q } of te.targetLinks)
          de.add(q);
      }
      if (++Q > K)
        throw new Error("circular link");
      ee = de, de = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: V }) {
    const K = bh(V, (Q) => Q.depth) + 1, ee = (n - e - i) / (K - 1), de = new Array(K);
    for (const Q of V) {
      const te = Math.max(0, Math.min(K - 1, Math.floor(u.call(null, Q, K))));
      Q.layer = te, Q.x0 = e + te * ee, Q.x1 = Q.x0 + i, de[te] ? de[te].push(Q) : de[te] = [Q];
    }
    if (m)
      for (const Q of de)
        Q.sort(m);
    return de;
  }
  function C(V) {
    const K = TS(V, (ee) => (a - t - (ee.length - 1) * d) / $d(ee, Bd));
    for (const ee of V) {
      let de = t;
      for (const Q of ee) {
        Q.y0 = de, Q.y1 = de + Q.value * K, de = Q.y1 + d;
        for (const te of Q.sourceLinks)
          te.width = te.value * K;
      }
      de = (a - de + d) / (ee.length + 1);
      for (let Q = 0; Q < ee.length; ++Q) {
        const te = ee[Q];
        te.y0 += de * (Q + 1), te.y1 += de * (Q + 1);
      }
      j(ee);
    }
  }
  function N(V) {
    const K = O(V);
    d = Math.min(l, (a - t) / (bh(K, (ee) => ee.length) - 1)), C(K);
    for (let ee = 0; ee < R; ++ee) {
      const de = Math.pow(0.99, ee), Q = Math.max(1 - de, (ee + 1) / R);
      B(K, de, Q), D(K, de, Q);
    }
  }
  function D(V, K, ee) {
    for (let de = 1, Q = V.length; de < Q; ++de) {
      const te = V[de];
      for (const q of te) {
        let Z = 0, Me = 0;
        for (const { source: pe, value: Le } of q.targetLinks) {
          let We = Le * (q.layer - pe.layer);
          Z += X(pe, q) * We, Me += We;
        }
        if (!(Me > 0))
          continue;
        let ke = (Z / Me - q.y0) * K;
        q.y0 += ke, q.y1 += ke, ne(q);
      }
      m === void 0 && te.sort(sc), H(te, ee);
    }
  }
  function B(V, K, ee) {
    for (let de = V.length, Q = de - 2; Q >= 0; --Q) {
      const te = V[Q];
      for (const q of te) {
        let Z = 0, Me = 0;
        for (const { target: pe, value: Le } of q.sourceLinks) {
          let We = Le * (pe.layer - q.layer);
          Z += G(q, pe) * We, Me += We;
        }
        if (!(Me > 0))
          continue;
        let ke = (Z / Me - q.y0) * K;
        q.y0 += ke, q.y1 += ke, ne(q);
      }
      m === void 0 && te.sort(sc), H(te, ee);
    }
  }
  function H(V, K) {
    const ee = V.length >> 1, de = V[ee];
    oe(V, de.y0 - d, ee - 1, K), re(V, de.y1 + d, ee + 1, K), oe(V, a, V.length - 1, K), re(V, t, 0, K);
  }
  function re(V, K, ee, de) {
    for (; ee < V.length; ++ee) {
      const Q = V[ee], te = (K - Q.y0) * de;
      te > 1e-6 && (Q.y0 += te, Q.y1 += te), K = Q.y1 + d;
    }
  }
  function oe(V, K, ee, de) {
    for (; ee >= 0; --ee) {
      const Q = V[ee], te = (Q.y1 - K) * de;
      te > 1e-6 && (Q.y0 -= te, Q.y1 -= te), K = Q.y0 - d;
    }
  }
  function ne({ sourceLinks: V, targetLinks: K }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: ee } } of K)
        ee.sort(Eh);
      for (const { target: { targetLinks: ee } } of V)
        ee.sort(Sh);
    }
  }
  function j(V) {
    if (y === void 0)
      for (const { sourceLinks: K, targetLinks: ee } of V)
        K.sort(Eh), ee.sort(Sh);
  }
  function X(V, K) {
    let ee = V.y0 - (V.sourceLinks.length - 1) * d / 2;
    for (const { target: de, width: Q } of V.sourceLinks) {
      if (de === K)
        break;
      ee += Q + d;
    }
    for (const { source: de, width: Q } of K.targetLinks) {
      if (de === V)
        break;
      ee -= Q;
    }
    return ee;
  }
  function G(V, K) {
    let ee = K.y0 - (K.targetLinks.length - 1) * d / 2;
    for (const { source: de, width: Q } of K.targetLinks) {
      if (de === V)
        break;
      ee += Q + d;
    }
    for (const { target: de, width: Q } of V.sourceLinks) {
      if (de === K)
        break;
      ee -= Q;
    }
    return ee;
  }
  return T;
}
function _S(e) {
  return [e.source.x1, e.y0];
}
function NS(e) {
  return [e.target.x0, e.y1];
}
function OS() {
  return Nb().source(_S).target(NS);
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
var Th;
function FS() {
  if (Th)
    return Ti;
  Th = 1;
  var e = ce;
  function t(g) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + g, z = 1; z < arguments.length; z++)
      A += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + g + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, l = {};
  function d(g) {
    return n.call(l, g) ? !0 : n.call(i, g) ? !1 : a.test(g) ? l[g] = !0 : (i[g] = !0, !1);
  }
  function f(g, A, z, U, be, ve, Pe) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = U, this.attributeNamespace = be, this.mustUseProperty = z, this.propertyName = g, this.type = A, this.sanitizeURL = ve, this.removeEmptyString = Pe;
  }
  var u = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(g) {
    u[g] = new f(g, 0, !1, g, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(g) {
    var A = g[0];
    u[A] = new f(A, 1, !1, g[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(g) {
    u[g] = new f(g, 2, !1, g.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(g) {
    u[g] = new f(g, 2, !1, g, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(g) {
    u[g] = new f(g, 3, !1, g.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(g) {
    u[g] = new f(g, 3, !0, g, null, !1, !1);
  }), ["capture", "download"].forEach(function(g) {
    u[g] = new f(g, 4, !1, g, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(g) {
    u[g] = new f(g, 6, !1, g, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(g) {
    u[g] = new f(g, 5, !1, g.toLowerCase(), null, !1, !1);
  });
  var m = /[\-:]([a-z])/g;
  function y(g) {
    return g[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(g) {
    var A = g.replace(
      m,
      y
    );
    u[A] = new f(A, 1, !1, g, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(g) {
    var A = g.replace(m, y);
    u[A] = new f(A, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(g) {
    var A = g.replace(m, y);
    u[A] = new f(A, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(g) {
    u[g] = new f(g, 1, !1, g.toLowerCase(), null, !1, !1);
  }), u.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(g) {
    u[g] = new f(g, 1, !1, g.toLowerCase(), null, !0, !0);
  });
  var x = {
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
  Object.keys(x).forEach(function(g) {
    S.forEach(function(A) {
      A = A + g.charAt(0).toUpperCase() + g.substring(1), x[A] = x[g];
    });
  });
  var R = /["'&<>]/;
  function T(g) {
    if (typeof g == "boolean" || typeof g == "number")
      return "" + g;
    g = "" + g;
    var A = R.exec(g);
    if (A) {
      var z = "", U, be = 0;
      for (U = A.index; U < g.length; U++) {
        switch (g.charCodeAt(U)) {
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
        be !== U && (z += g.substring(be, U)), be = U + 1, z += A;
      }
      g = be !== U ? z + g.substring(be, U) : z;
    }
    return g;
  }
  var F = /([A-Z])/g, k = /^ms-/, h = Array.isArray;
  function P(g, A) {
    return { insertionMode: g, selectedValue: A };
  }
  function O(g, A, z) {
    switch (A) {
      case "select":
        return P(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return P(2, null);
      case "math":
        return P(3, null);
      case "foreignObject":
        return P(1, null);
      case "table":
        return P(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return P(5, null);
      case "colgroup":
        return P(7, null);
      case "tr":
        return P(6, null);
    }
    return 4 <= g.insertionMode || g.insertionMode === 0 ? P(1, null) : g;
  }
  var C = /* @__PURE__ */ new Map();
  function N(g, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var U in z)
      if (n.call(z, U)) {
        var be = z[U];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (U.indexOf("--") === 0) {
            var ve = T(U);
            be = T(("" + be).trim());
          } else {
            ve = U;
            var Pe = C.get(ve);
            Pe !== void 0 || (Pe = T(ve.replace(F, "-$1").toLowerCase().replace(k, "-ms-")), C.set(ve, Pe)), ve = Pe, be = typeof be == "number" ? be === 0 || n.call(x, U) ? "" + be : be + "px" : T(("" + be).trim());
          }
          A ? (A = !1, g.push(' style="', ve, ":", be)) : g.push(";", ve, ":", be);
        }
      }
    A || g.push('"');
  }
  function D(g, A, z, U) {
    switch (z) {
      case "style":
        N(g, A, U);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (A = u.hasOwnProperty(z) ? u[z] : null, A !== null) {
        switch (typeof U) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = A.attributeName, A.type) {
          case 3:
            U && g.push(" ", z, '=""');
            break;
          case 4:
            U === !0 ? g.push(" ", z, '=""') : U !== !1 && g.push(" ", z, '="', T(U), '"');
            break;
          case 5:
            isNaN(U) || g.push(" ", z, '="', T(U), '"');
            break;
          case 6:
            !isNaN(U) && 1 <= U && g.push(" ", z, '="', T(U), '"');
            break;
          default:
            A.sanitizeURL && (U = "" + U), g.push(" ", z, '="', T(U), '"');
        }
      } else if (d(z)) {
        switch (typeof U) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        g.push(" ", z, '="', T(U), '"');
      }
    }
  }
  function B(g, A, z) {
    if (A != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && g.push("" + A);
    }
  }
  function H(g) {
    var A = "";
    return e.Children.forEach(g, function(z) {
      z != null && (A += z);
    }), A;
  }
  function re(g, A, z, U) {
    g.push(j(z));
    var be = z = null, ve;
    for (ve in A)
      if (n.call(A, ve)) {
        var Pe = A[ve];
        if (Pe != null)
          switch (ve) {
            case "children":
              z = Pe;
              break;
            case "dangerouslySetInnerHTML":
              be = Pe;
              break;
            default:
              D(g, U, ve, Pe);
          }
      }
    return g.push(">"), B(g, be, z), typeof z == "string" ? (g.push(T(z)), null) : z;
  }
  var oe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ne = /* @__PURE__ */ new Map();
  function j(g) {
    var A = ne.get(g);
    if (A === void 0) {
      if (!oe.test(g))
        throw Error(t(65, g));
      A = "<" + g, ne.set(g, A);
    }
    return A;
  }
  function X(g, A, z, U, be) {
    switch (A) {
      case "select":
        g.push(j("select"));
        var ve = null, Pe = null;
        for (le in z)
          if (n.call(z, le)) {
            var je = z[le];
            if (je != null)
              switch (le) {
                case "children":
                  ve = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Pe = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  D(g, U, le, je);
              }
          }
        return g.push(">"), B(g, Pe, ve), ve;
      case "option":
        Pe = be.selectedValue, g.push(j("option"));
        var lt = je = null, gt = null, le = null;
        for (ve in z)
          if (n.call(z, ve)) {
            var ue = z[ve];
            if (ue != null)
              switch (ve) {
                case "children":
                  je = ue;
                  break;
                case "selected":
                  gt = ue;
                  break;
                case "dangerouslySetInnerHTML":
                  le = ue;
                  break;
                case "value":
                  lt = ue;
                default:
                  D(g, U, ve, ue);
              }
          }
        if (Pe != null)
          if (z = lt !== null ? "" + lt : H(je), h(Pe)) {
            for (U = 0; U < Pe.length; U++)
              if ("" + Pe[U] === z) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + Pe === z && g.push(' selected=""');
        else
          gt && g.push(' selected=""');
        return g.push(">"), B(g, le, je), je;
      case "textarea":
        g.push(j("textarea")), le = Pe = ve = null;
        for (je in z)
          if (n.call(z, je) && (lt = z[je], lt != null))
            switch (je) {
              case "children":
                le = lt;
                break;
              case "value":
                ve = lt;
                break;
              case "defaultValue":
                Pe = lt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                D(
                  g,
                  U,
                  je,
                  lt
                );
            }
        if (ve === null && Pe !== null && (ve = Pe), g.push(">"), le != null) {
          if (ve != null)
            throw Error(t(92));
          if (h(le) && 1 < le.length)
            throw Error(t(93));
          ve = "" + le;
        }
        return typeof ve == "string" && ve[0] === `
` && g.push(`
`), ve !== null && g.push(T("" + ve)), null;
      case "input":
        g.push(j("input")), lt = le = je = ve = null;
        for (Pe in z)
          if (n.call(z, Pe) && (gt = z[Pe], gt != null))
            switch (Pe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                lt = gt;
                break;
              case "defaultValue":
                je = gt;
                break;
              case "checked":
                le = gt;
                break;
              case "value":
                ve = gt;
                break;
              default:
                D(g, U, Pe, gt);
            }
        return le !== null ? D(g, U, "checked", le) : lt !== null && D(g, U, "checked", lt), ve !== null ? D(g, U, "value", ve) : je !== null && D(g, U, "value", je), g.push("/>"), null;
      case "menuitem":
        g.push(j("menuitem"));
        for (var ye in z)
          if (n.call(z, ye) && (ve = z[ye], ve != null))
            switch (ye) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                D(g, U, ye, ve);
            }
        return g.push(">"), null;
      case "title":
        g.push(j("title")), ve = null;
        for (ue in z)
          if (n.call(z, ue) && (Pe = z[ue], Pe != null))
            switch (ue) {
              case "children":
                ve = Pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                D(g, U, ue, Pe);
            }
        return g.push(">"), ve;
      case "listing":
      case "pre":
        g.push(j(A)), Pe = ve = null;
        for (lt in z)
          if (n.call(z, lt) && (je = z[lt], je != null))
            switch (lt) {
              case "children":
                ve = je;
                break;
              case "dangerouslySetInnerHTML":
                Pe = je;
                break;
              default:
                D(g, U, lt, je);
            }
        if (g.push(">"), Pe != null) {
          if (ve != null)
            throw Error(t(60));
          if (typeof Pe != "object" || !("__html" in Pe))
            throw Error(t(61));
          z = Pe.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? g.push(`
`, z) : g.push("" + z));
        }
        return typeof ve == "string" && ve[0] === `
` && g.push(`
`), ve;
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
        g.push(j(A));
        for (var Ne in z)
          if (n.call(z, Ne) && (ve = z[Ne], ve != null))
            switch (Ne) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                D(g, U, Ne, ve);
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
        return re(
          g,
          z,
          A,
          U
        );
      case "html":
        return be.insertionMode === 0 && g.push("<!DOCTYPE html>"), re(g, z, A, U);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return re(g, z, A, U);
        g.push(j(A)), Pe = ve = null;
        for (gt in z)
          if (n.call(z, gt) && (je = z[gt], je != null))
            switch (gt) {
              case "children":
                ve = je;
                break;
              case "dangerouslySetInnerHTML":
                Pe = je;
                break;
              case "style":
                N(g, U, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                d(gt) && typeof je != "function" && typeof je != "symbol" && g.push(" ", gt, '="', T(je), '"');
            }
        return g.push(">"), B(g, Pe, ve), ve;
    }
  }
  function G(g, A, z) {
    if (g.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return g.push(z), g.push('"></template>');
  }
  function V(g, A, z, U) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(A.segmentPrefix), A = U.toString(16), g.push(A), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function K(g, A) {
    switch (A.insertionMode) {
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
  var ee = /[<\u2028\u2029]/g;
  function de(g) {
    return JSON.stringify(g).replace(ee, function(A) {
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
  function Q(g, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function te(g, A, z, U) {
    return z.generateStaticMarkup ? (g.push(T(A)), !1) : (A === "" ? g = U : (U && g.push("<!-- -->"), g.push(T(A)), g = !0), g);
  }
  var q = Object.assign, Z = Symbol.for("react.element"), Me = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), We = Symbol.for("react.provider"), Ze = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), xe = Symbol.for("react.scope"), ze = Symbol.for("react.debug_trace_mode"), Ve = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.default_value"), Qe = Symbol.iterator;
  function tt(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case ke:
        return "Fragment";
      case Me:
        return "Portal";
      case Le:
        return "Profiler";
      case pe:
        return "StrictMode";
      case me:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Ze:
          return (g.displayName || "Context") + ".Consumer";
        case We:
          return (g._context.displayName || "Context") + ".Provider";
        case Ae:
          var A = g.render;
          return g = g.displayName, g || (g = A.displayName || A.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case ae:
          return A = g.displayName || null, A !== null ? A : tt(g.type) || "Memo";
        case se:
          A = g._payload, g = g._init;
          try {
            return tt(g(A));
          } catch {
          }
      }
    return null;
  }
  var et = {};
  function Ye(g, A) {
    if (g = g.contextTypes, !g)
      return et;
    var z = {}, U;
    for (U in g)
      z[U] = A[U];
    return z;
  }
  var Re = null;
  function Ce(g, A) {
    if (g !== A) {
      g.context._currentValue2 = g.parentValue, g = g.parent;
      var z = A.parent;
      if (g === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Ce(g, z);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function at(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && at(g);
  }
  function Ge(g) {
    var A = g.parent;
    A !== null && Ge(A), g.context._currentValue2 = g.value;
  }
  function ft(g, A) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === A.depth ? Ce(g, A) : ft(g, A);
  }
  function ht(g, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    g.depth === z.depth ? Ce(g, z) : ht(g, z), A.context._currentValue2 = A.value;
  }
  function yt(g) {
    var A = Re;
    A !== g && (A === null ? Ge(g) : g === null ? at(A) : A.depth === g.depth ? Ce(A, g) : A.depth > g.depth ? ft(A, g) : ht(A, g), Re = g);
  }
  var _t = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, A) {
    g = g._reactInternals, g.queue !== null && g.queue.push(A);
  }, enqueueReplaceState: function(g, A) {
    g = g._reactInternals, g.replace = !0, g.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function an(g, A, z, U) {
    var be = g.state !== void 0 ? g.state : null;
    g.updater = _t, g.props = z, g.state = be;
    var ve = { queue: [], replace: !1 };
    g._reactInternals = ve;
    var Pe = A.contextType;
    if (g.context = typeof Pe == "object" && Pe !== null ? Pe._currentValue2 : U, Pe = A.getDerivedStateFromProps, typeof Pe == "function" && (Pe = Pe(z, be), be = Pe == null ? be : q({}, be, Pe), g.state = be), typeof A.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (A = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), A !== g.state && _t.enqueueReplaceState(g, g.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (A = ve.queue, Pe = ve.replace, ve.queue = null, ve.replace = !1, Pe && A.length === 1)
          g.state = A[0];
        else {
          for (ve = Pe ? A[0] : g.state, be = !0, Pe = Pe ? 1 : 0; Pe < A.length; Pe++) {
            var je = A[Pe];
            je = typeof je == "function" ? je.call(g, ve, z, U) : je, je != null && (be ? (be = !1, ve = q({}, ve, je)) : q(ve, je));
          }
          g.state = ve;
        }
      else
        ve.queue = null;
  }
  var on = { id: 1, overflow: "" };
  function Kt(g, A, z) {
    var U = g.id;
    g = g.overflow;
    var be = 32 - Jt(U) - 1;
    U &= ~(1 << be), z += 1;
    var ve = 32 - Jt(A) + be;
    if (30 < ve) {
      var Pe = be - be % 5;
      return ve = (U & (1 << Pe) - 1).toString(32), U >>= Pe, be -= Pe, { id: 1 << 32 - Jt(A) + be | z << be | U, overflow: ve + g };
    }
    return { id: 1 << ve | z << be | U, overflow: g };
  }
  var Jt = Math.clz32 ? Math.clz32 : Mt, Yt = Math.log, At = Math.LN2;
  function Mt(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (Yt(g) / At | 0) | 0;
  }
  function Vt(g, A) {
    return g === A && (g !== 0 || 1 / g === 1 / A) || g !== g && A !== A;
  }
  var Ie = typeof Object.is == "function" ? Object.is : Vt, en = null, wt = null, zt = null, mt = null, tn = !1, xn = !1, Ft = 0, nn = null, Ln = 0;
  function Xt() {
    if (en === null)
      throw Error(t(321));
    return en;
  }
  function jt() {
    if (0 < Ln)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Tn() {
    return mt === null ? zt === null ? (tn = !1, zt = mt = jt()) : (tn = !0, mt = zt) : mt.next === null ? (tn = !1, mt = mt.next = jt()) : (tn = !0, mt = mt.next), mt;
  }
  function Hn() {
    wt = en = null, xn = !1, zt = null, Ln = 0, mt = nn = null;
  }
  function Mn(g, A) {
    return typeof A == "function" ? A(g) : A;
  }
  function qt(g, A, z) {
    if (en = Xt(), mt = Tn(), tn) {
      var U = mt.queue;
      if (A = U.dispatch, nn !== null && (z = nn.get(U), z !== void 0)) {
        nn.delete(U), U = mt.memoizedState;
        do
          U = g(U, z.action), z = z.next;
        while (z !== null);
        return mt.memoizedState = U, [U, A];
      }
      return [mt.memoizedState, A];
    }
    return g = g === Mn ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, mt.memoizedState = g, g = mt.queue = { last: null, dispatch: null }, g = g.dispatch = Vn.bind(null, en, g), [mt.memoizedState, g];
  }
  function Wn(g, A) {
    if (en = Xt(), mt = Tn(), A = A === void 0 ? null : A, mt !== null) {
      var z = mt.memoizedState;
      if (z !== null && A !== null) {
        var U = z[1];
        e:
          if (U === null)
            U = !1;
          else {
            for (var be = 0; be < U.length && be < A.length; be++)
              if (!Ie(A[be], U[be])) {
                U = !1;
                break e;
              }
            U = !0;
          }
        if (U)
          return z[0];
      }
    }
    return g = g(), mt.memoizedState = [g, A], g;
  }
  function Vn(g, A, z) {
    if (25 <= Ln)
      throw Error(t(301));
    if (g === en)
      if (xn = !0, g = { action: z, next: null }, nn === null && (nn = /* @__PURE__ */ new Map()), z = nn.get(A), z === void 0)
        nn.set(A, g);
      else {
        for (A = z; A.next !== null; )
          A = A.next;
        A.next = g;
      }
  }
  function Cn() {
    throw Error(t(394));
  }
  function Sn() {
  }
  var jn = { readContext: function(g) {
    return g._currentValue2;
  }, useContext: function(g) {
    return Xt(), g._currentValue2;
  }, useMemo: Wn, useReducer: qt, useRef: function(g) {
    en = Xt(), mt = Tn();
    var A = mt.memoizedState;
    return A === null ? (g = { current: g }, mt.memoizedState = g) : A;
  }, useState: function(g) {
    return qt(Mn, g);
  }, useInsertionEffect: Sn, useLayoutEffect: function() {
  }, useCallback: function(g, A) {
    return Wn(function() {
      return g;
    }, A);
  }, useImperativeHandle: Sn, useEffect: Sn, useDebugValue: Sn, useDeferredValue: function(g) {
    return Xt(), g;
  }, useTransition: function() {
    return Xt(), [
      !1,
      Cn
    ];
  }, useId: function() {
    var g = wt.treeContext, A = g.overflow;
    g = g.id, g = (g & ~(1 << 32 - Jt(g) - 1)).toString(32) + A;
    var z = zn;
    if (z === null)
      throw Error(t(404));
    return A = Ft++, g = ":" + z.idPrefix + "R" + g, 0 < A && (g += "H" + A.toString(32)), g + ":";
  }, useMutableSource: function(g, A) {
    return Xt(), A(g._source);
  }, useSyncExternalStore: function(g, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, zn = null, Un = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function De(g) {
    return console.error(g), null;
  }
  function ct() {
  }
  function pt(g, A, z, U, be, ve, Pe, je, lt) {
    var gt = [], le = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: U === void 0 ? 12800 : U, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: le, pingedTasks: gt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? De : be, onAllReady: ve === void 0 ? ct : ve, onShellReady: Pe === void 0 ? ct : Pe, onShellError: je === void 0 ? ct : je, onFatalError: lt === void 0 ? ct : lt }, z = Oe(A, 0, null, z, !1, !1), z.parentFlushed = !0, g = $(A, g, null, z, le, et, null, on), gt.push(g), A;
  }
  function $(g, A, z, U, be, ve, Pe, je) {
    g.allPendingTasks++, z === null ? g.pendingRootTasks++ : z.pendingTasks++;
    var lt = { node: A, ping: function() {
      var gt = g.pingedTasks;
      gt.push(lt), gt.length === 1 && Ot(g);
    }, blockedBoundary: z, blockedSegment: U, abortSet: be, legacyContext: ve, context: Pe, treeContext: je };
    return be.add(lt), lt;
  }
  function Oe(g, A, z, U, be, ve) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: U, boundary: z, lastPushedText: be, textEmbedded: ve };
  }
  function Ke(g, A) {
    if (g = g.onError(A), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function $e(g, A) {
    var z = g.onShellError;
    z(A), z = g.onFatalError, z(A), g.destination !== null ? (g.status = 2, g.destination.destroy(A)) : (g.status = 1, g.fatalError = A);
  }
  function nt(g, A, z, U, be) {
    for (en = {}, wt = A, Ft = 0, g = z(U, be); xn; )
      xn = !1, Ft = 0, Ln += 1, mt = null, g = z(U, be);
    return Hn(), g;
  }
  function it(g, A, z, U) {
    var be = z.render(), ve = U.childContextTypes;
    if (ve != null) {
      var Pe = A.legacyContext;
      if (typeof z.getChildContext != "function")
        U = Pe;
      else {
        z = z.getChildContext();
        for (var je in z)
          if (!(je in ve))
            throw Error(t(108, tt(U) || "Unknown", je));
        U = q({}, Pe, z);
      }
      A.legacyContext = U, Ue(g, A, be), A.legacyContext = Pe;
    } else
      Ue(g, A, be);
  }
  function kt(g, A) {
    if (g && g.defaultProps) {
      A = q({}, A), g = g.defaultProps;
      for (var z in g)
        A[z] === void 0 && (A[z] = g[z]);
      return A;
    }
    return A;
  }
  function Lt(g, A, z, U, be) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        be = Ye(z, A.legacyContext);
        var ve = z.contextType;
        ve = new z(U, typeof ve == "object" && ve !== null ? ve._currentValue2 : be), an(ve, z, U, be), it(g, A, ve, z);
      } else {
        ve = Ye(z, A.legacyContext), be = nt(g, A, z, U, ve);
        var Pe = Ft !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          an(be, z, U, ve), it(g, A, be, z);
        else if (Pe) {
          U = A.treeContext, A.treeContext = Kt(U, 1, 0);
          try {
            Ue(g, A, be);
          } finally {
            A.treeContext = U;
          }
        } else
          Ue(g, A, be);
      }
    else if (typeof z == "string") {
      switch (be = A.blockedSegment, ve = X(be.chunks, z, U, g.responseState, be.formatContext), be.lastPushedText = !1, Pe = be.formatContext, be.formatContext = O(Pe, z, U), $t(g, A, ve), be.formatContext = Pe, z) {
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
          be.chunks.push("</", z, ">");
      }
      be.lastPushedText = !1;
    } else {
      switch (z) {
        case Ve:
        case ze:
        case pe:
        case Le:
        case ke:
          Ue(g, A, U.children);
          return;
        case _e:
          Ue(g, A, U.children);
          return;
        case xe:
          throw Error(t(343));
        case me:
          e: {
            z = A.blockedBoundary, be = A.blockedSegment, ve = U.fallback, U = U.children, Pe = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Pe, errorDigest: null }, lt = Oe(g, be.chunks.length, je, be.formatContext, !1, !1);
            be.children.push(lt), be.lastPushedText = !1;
            var gt = Oe(g, 0, null, be.formatContext, !1, !1);
            gt.parentFlushed = !0, A.blockedBoundary = je, A.blockedSegment = gt;
            try {
              if ($t(
                g,
                A,
                U
              ), g.responseState.generateStaticMarkup || gt.lastPushedText && gt.textEmbedded && gt.chunks.push("<!-- -->"), gt.status = 1, Rt(je, gt), je.pendingTasks === 0)
                break e;
            } catch (le) {
              gt.status = 4, je.forceClientRender = !0, je.errorDigest = Ke(g, le);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = be;
            }
            A = $(g, ve, z, lt, Pe, A.legacyContext, A.context, A.treeContext), g.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Ae:
            if (U = nt(g, A, z.render, U, be), Ft !== 0) {
              z = A.treeContext, A.treeContext = Kt(z, 1, 0);
              try {
                Ue(g, A, U);
              } finally {
                A.treeContext = z;
              }
            } else
              Ue(g, A, U);
            return;
          case ae:
            z = z.type, U = kt(z, U), Lt(g, A, z, U, be);
            return;
          case We:
            if (be = U.children, z = z._context, U = U.value, ve = z._currentValue2, z._currentValue2 = U, Pe = Re, Re = U = { parent: Pe, depth: Pe === null ? 0 : Pe.depth + 1, context: z, parentValue: ve, value: U }, A.context = U, Ue(g, A, be), g = Re, g === null)
              throw Error(t(403));
            U = g.parentValue, g.context._currentValue2 = U === qe ? g.context._defaultValue : U, g = Re = g.parent, A.context = g;
            return;
          case Ze:
            U = U.children, U = U(z._currentValue2), Ue(g, A, U);
            return;
          case se:
            be = z._init, z = be(z._payload), U = kt(z, U), Lt(
              g,
              A,
              z,
              U,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function Ue(g, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case Z:
          Lt(g, A, z.type, z.props, z.ref);
          return;
        case Me:
          throw Error(t(257));
        case se:
          var U = z._init;
          z = U(z._payload), Ue(g, A, z);
          return;
      }
      if (h(z)) {
        It(g, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? U = null : (U = Qe && z[Qe] || z["@@iterator"], U = typeof U == "function" ? U : null), U && (U = U.call(z))) {
        if (z = U.next(), !z.done) {
          var be = [];
          do
            be.push(z.value), z = U.next();
          while (!z.done);
          It(g, A, be);
        }
        return;
      }
      throw g = Object.prototype.toString.call(z), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : g));
    }
    typeof z == "string" ? (U = A.blockedSegment, U.lastPushedText = te(A.blockedSegment.chunks, z, g.responseState, U.lastPushedText)) : typeof z == "number" && (U = A.blockedSegment, U.lastPushedText = te(A.blockedSegment.chunks, "" + z, g.responseState, U.lastPushedText));
  }
  function It(g, A, z) {
    for (var U = z.length, be = 0; be < U; be++) {
      var ve = A.treeContext;
      A.treeContext = Kt(ve, U, be);
      try {
        $t(g, A, z[be]);
      } finally {
        A.treeContext = ve;
      }
    }
  }
  function $t(g, A, z) {
    var U = A.blockedSegment.formatContext, be = A.legacyContext, ve = A.context;
    try {
      return Ue(g, A, z);
    } catch (lt) {
      if (Hn(), typeof lt == "object" && lt !== null && typeof lt.then == "function") {
        z = lt;
        var Pe = A.blockedSegment, je = Oe(g, Pe.chunks.length, null, Pe.formatContext, Pe.lastPushedText, !0);
        Pe.children.push(je), Pe.lastPushedText = !1, g = $(g, A.node, A.blockedBoundary, je, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(g, g), A.blockedSegment.formatContext = U, A.legacyContext = be, A.context = ve, yt(ve);
      } else
        throw A.blockedSegment.formatContext = U, A.legacyContext = be, A.context = ve, yt(ve), lt;
    }
  }
  function Bt(g) {
    var A = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, Nt(this, A, g);
  }
  function vt(g, A, z) {
    var U = g.blockedBoundary;
    g.blockedSegment.status = 3, U === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (U.pendingTasks--, U.forceClientRender || (U.forceClientRender = !0, g = z === void 0 ? Error(t(432)) : z, U.errorDigest = A.onError(g), U.parentFlushed && A.clientRenderedBoundaries.push(U)), U.fallbackAbortableTasks.forEach(function(be) {
      return vt(be, A, z);
    }), U.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (U = A.onAllReady, U()));
  }
  function Rt(g, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var z = A.children[0];
      z.id = A.id, z.parentFlushed = !0, z.status === 1 && Rt(g, z);
    } else
      g.completedSegments.push(A);
  }
  function Nt(g, A, z) {
    if (A === null) {
      if (z.parentFlushed) {
        if (g.completedRootSegment !== null)
          throw Error(t(389));
        g.completedRootSegment = z;
      }
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = ct, A = g.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Rt(A, z), A.parentFlushed && g.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(Bt, g), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Rt(A, z), A.completedSegments.length === 1 && A.parentFlushed && g.partialBoundaries.push(A)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function Ot(g) {
    if (g.status !== 2) {
      var A = Re, z = Un.current;
      Un.current = jn;
      var U = zn;
      zn = g.responseState;
      try {
        var be = g.pingedTasks, ve;
        for (ve = 0; ve < be.length; ve++) {
          var Pe = be[ve], je = g, lt = Pe.blockedSegment;
          if (lt.status === 0) {
            yt(Pe.context);
            try {
              Ue(je, Pe, Pe.node), je.responseState.generateStaticMarkup || lt.lastPushedText && lt.textEmbedded && lt.chunks.push("<!-- -->"), Pe.abortSet.delete(Pe), lt.status = 1, Nt(je, Pe.blockedBoundary, lt);
            } catch (xt) {
              if (Hn(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
                var gt = Pe.ping;
                xt.then(gt, gt);
              } else {
                Pe.abortSet.delete(Pe), lt.status = 4;
                var le = Pe.blockedBoundary, ue = xt, ye = Ke(je, ue);
                if (le === null ? $e(je, ue) : (le.pendingTasks--, le.forceClientRender || (le.forceClientRender = !0, le.errorDigest = ye, le.parentFlushed && je.clientRenderedBoundaries.push(le))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var Ne = je.onAllReady;
                  Ne();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, ve), g.destination !== null && mn(g, g.destination);
      } catch (xt) {
        Ke(g, xt), $e(g, xt);
      } finally {
        zn = U, Un.current = z, z === jn && yt(A);
      }
    }
  }
  function Gt(g, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var U = z.id = g.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, g = g.responseState, A.push('<template id="'), A.push(g.placeholderPrefix), g = U.toString(16), A.push(g), A.push('"></template>');
      case 1:
        z.status = 2;
        var be = !0;
        U = z.chunks;
        var ve = 0;
        z = z.children;
        for (var Pe = 0; Pe < z.length; Pe++) {
          for (be = z[Pe]; ve < be.index; ve++)
            A.push(U[ve]);
          be = pn(g, A, be);
        }
        for (; ve < U.length - 1; ve++)
          A.push(U[ve]);
        return ve < U.length && (be = A.push(U[ve])), be;
      default:
        throw Error(t(390));
    }
  }
  function pn(g, A, z) {
    var U = z.boundary;
    if (U === null)
      return Gt(g, A, z);
    if (U.parentFlushed = !0, U.forceClientRender)
      return g.responseState.generateStaticMarkup || (U = U.errorDigest, A.push("<!--$!-->"), A.push("<template"), U && (A.push(' data-dgst="'), U = T(U), A.push(U), A.push('"')), A.push("></template>")), Gt(g, A, z), g = g.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), g;
    if (0 < U.pendingTasks) {
      U.rootSegmentID = g.nextSegmentId++, 0 < U.completedSegments.length && g.partialBoundaries.push(U);
      var be = g.responseState, ve = be.nextSuspenseID++;
      return be = be.boundaryPrefix + ve.toString(16), U = U.id = be, G(A, g.responseState, U), Gt(g, A, z), A.push("<!--/$-->");
    }
    if (U.byteSize > g.progressiveChunkSize)
      return U.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(U), G(A, g.responseState, U.id), Gt(g, A, z), A.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || A.push("<!--$-->"), z = U.completedSegments, z.length !== 1)
      throw Error(t(391));
    return pn(g, A, z[0]), g = g.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), g;
  }
  function Nn(g, A, z) {
    return V(A, g.responseState, z.formatContext, z.id), pn(g, A, z), K(A, z.formatContext);
  }
  function hn(g, A, z) {
    for (var U = z.completedSegments, be = 0; be < U.length; be++)
      ln(g, A, z, U[be]);
    if (U.length = 0, g = g.responseState, U = z.id, z = z.rootSegmentID, A.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? A.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), U === null)
      throw Error(t(395));
    return z = z.toString(16), A.push(U), A.push('","'), A.push(g.segmentPrefix), A.push(z), A.push('")<\/script>');
  }
  function ln(g, A, z, U) {
    if (U.status === 2)
      return !0;
    var be = U.id;
    if (be === -1) {
      if ((U.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Nn(g, A, U);
    }
    return Nn(g, A, U), g = g.responseState, A.push(g.startInlineScript), g.sentCompleteSegmentFunction ? A.push('$RS("') : (g.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(g.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(g.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function mn(g, A) {
    try {
      var z = g.completedRootSegment;
      if (z !== null && g.pendingRootTasks === 0) {
        pn(g, A, z), g.completedRootSegment = null;
        var U = g.responseState.bootstrapChunks;
        for (z = 0; z < U.length - 1; z++)
          A.push(U[z]);
        z < U.length && A.push(U[z]);
      }
      var be = g.clientRenderedBoundaries, ve;
      for (ve = 0; ve < be.length; ve++) {
        var Pe = be[ve];
        U = A;
        var je = g.responseState, lt = Pe.id, gt = Pe.errorDigest, le = Pe.errorMessage, ue = Pe.errorComponentStack;
        if (U.push(je.startInlineScript), je.sentClientRenderFunction ? U.push('$RX("') : (je.sentClientRenderFunction = !0, U.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), lt === null)
          throw Error(t(395));
        if (U.push(lt), U.push('"'), gt || le || ue) {
          U.push(",");
          var ye = de(gt || "");
          U.push(ye);
        }
        if (le || ue) {
          U.push(",");
          var Ne = de(le || "");
          U.push(Ne);
        }
        if (ue) {
          U.push(",");
          var xt = de(ue);
          U.push(xt);
        }
        if (!U.push(")<\/script>")) {
          g.destination = null, ve++, be.splice(0, ve);
          return;
        }
      }
      be.splice(0, ve);
      var gn = g.completedBoundaries;
      for (ve = 0; ve < gn.length; ve++)
        if (!hn(g, A, gn[ve])) {
          g.destination = null, ve++, gn.splice(0, ve);
          return;
        }
      gn.splice(0, ve);
      var kn = g.partialBoundaries;
      for (ve = 0; ve < kn.length; ve++) {
        var dr = kn[ve];
        e: {
          be = g, Pe = A;
          var In = dr.completedSegments;
          for (je = 0; je < In.length; je++)
            if (!ln(be, Pe, dr, In[je])) {
              je++, In.splice(0, je);
              var wr = !1;
              break e;
            }
          In.splice(0, je), wr = !0;
        }
        if (!wr) {
          g.destination = null, ve++, kn.splice(0, ve);
          return;
        }
      }
      kn.splice(0, ve);
      var fr = g.completedBoundaries;
      for (ve = 0; ve < fr.length; ve++)
        if (!hn(g, A, fr[ve])) {
          g.destination = null, ve++, fr.splice(0, ve);
          return;
        }
      fr.splice(0, ve);
    } finally {
      g.allPendingTasks === 0 && g.pingedTasks.length === 0 && g.clientRenderedBoundaries.length === 0 && g.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function cn(g, A) {
    try {
      var z = g.abortableTasks;
      z.forEach(function(U) {
        return vt(U, g, A);
      }), z.clear(), g.destination !== null && mn(g, g.destination);
    } catch (U) {
      Ke(g, U), $e(g, U);
    }
  }
  function En() {
  }
  function qn(g, A, z, U) {
    var be = !1, ve = null, Pe = "", je = { push: function(gt) {
      return gt !== null && (Pe += gt), !0;
    }, destroy: function(gt) {
      be = !0, ve = gt;
    } }, lt = !1;
    if (g = pt(g, Q(z, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, En, void 0, function() {
      lt = !0;
    }, void 0, void 0), Ot(g), cn(g, U), g.status === 1)
      g.status = 2, je.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = je;
      try {
        mn(g, je);
      } catch (gt) {
        Ke(g, gt), $e(g, gt);
      }
    }
    if (be)
      throw ve;
    if (!lt)
      throw Error(t(426));
    return Pe;
  }
  return Ti.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ti.renderToStaticMarkup = function(g, A) {
    return qn(g, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ti.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ti.renderToString = function(g, A) {
    return qn(g, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ti.version = "18.2.0", Ti;
}
var Cu = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function MS() {
  if (Ch)
    return Cu;
  Ch = 1;
  var e = ce;
  function t(v) {
    for (var L = "https://reactjs.org/docs/error-decoder.html?invariant=" + v, I = 1; I < arguments.length; I++)
      L += "&args[]=" + encodeURIComponent(arguments[I]);
    return "Minified React error #" + v + "; visit " + L + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, a = 0;
  function i(v, L) {
    if (L.length !== 0)
      if (512 < L.length)
        0 < a && (v.enqueue(new Uint8Array(n.buffer, 0, a)), n = new Uint8Array(512), a = 0), v.enqueue(L);
      else {
        var I = n.length - a;
        I < L.length && (I === 0 ? v.enqueue(n) : (n.set(L.subarray(0, I), a), v.enqueue(n), L = L.subarray(I)), n = new Uint8Array(512), a = 0), n.set(L, a), a += L.length;
      }
  }
  function l(v, L) {
    return i(v, L), !0;
  }
  function d(v) {
    n && 0 < a && (v.enqueue(new Uint8Array(n.buffer, 0, a)), n = null, a = 0);
  }
  var f = new TextEncoder();
  function u(v) {
    return f.encode(v);
  }
  function m(v) {
    return f.encode(v);
  }
  function y(v, L) {
    typeof v.error == "function" ? v.error(L) : v.close();
  }
  var x = Object.prototype.hasOwnProperty, S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, T = {};
  function F(v) {
    return x.call(T, v) ? !0 : x.call(R, v) ? !1 : S.test(v) ? T[v] = !0 : (R[v] = !0, !1);
  }
  function k(v, L, I, Y, Ee, Se, Fe) {
    this.acceptsBooleans = L === 2 || L === 3 || L === 4, this.attributeName = Y, this.attributeNamespace = Ee, this.mustUseProperty = I, this.propertyName = v, this.type = L, this.sanitizeURL = Se, this.removeEmptyString = Fe;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(v) {
    h[v] = new k(v, 0, !1, v, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(v) {
    var L = v[0];
    h[L] = new k(L, 1, !1, v[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(v) {
    h[v] = new k(v, 2, !1, v.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(v) {
    h[v] = new k(v, 2, !1, v, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(v) {
    h[v] = new k(v, 3, !1, v.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(v) {
    h[v] = new k(v, 3, !0, v, null, !1, !1);
  }), ["capture", "download"].forEach(function(v) {
    h[v] = new k(v, 4, !1, v, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(v) {
    h[v] = new k(v, 6, !1, v, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(v) {
    h[v] = new k(v, 5, !1, v.toLowerCase(), null, !1, !1);
  });
  var P = /[\-:]([a-z])/g;
  function O(v) {
    return v[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(v) {
    var L = v.replace(
      P,
      O
    );
    h[L] = new k(L, 1, !1, v, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(v) {
    var L = v.replace(P, O);
    h[L] = new k(L, 1, !1, v, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(v) {
    var L = v.replace(P, O);
    h[L] = new k(L, 1, !1, v, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(v) {
    h[v] = new k(v, 1, !1, v.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(v) {
    h[v] = new k(v, 1, !1, v.toLowerCase(), null, !0, !0);
  });
  var C = {
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
  }, N = ["Webkit", "ms", "Moz", "O"];
  Object.keys(C).forEach(function(v) {
    N.forEach(function(L) {
      L = L + v.charAt(0).toUpperCase() + v.substring(1), C[L] = C[v];
    });
  });
  var D = /["'&<>]/;
  function B(v) {
    if (typeof v == "boolean" || typeof v == "number")
      return "" + v;
    v = "" + v;
    var L = D.exec(v);
    if (L) {
      var I = "", Y, Ee = 0;
      for (Y = L.index; Y < v.length; Y++) {
        switch (v.charCodeAt(Y)) {
          case 34:
            L = "&quot;";
            break;
          case 38:
            L = "&amp;";
            break;
          case 39:
            L = "&#x27;";
            break;
          case 60:
            L = "&lt;";
            break;
          case 62:
            L = "&gt;";
            break;
          default:
            continue;
        }
        Ee !== Y && (I += v.substring(Ee, Y)), Ee = Y + 1, I += L;
      }
      v = Ee !== Y ? I + v.substring(Ee, Y) : I;
    }
    return v;
  }
  var H = /([A-Z])/g, re = /^ms-/, oe = Array.isArray, ne = m("<script>"), j = m("<\/script>"), X = m('<script src="'), G = m('<script type="module" src="'), V = m('" async=""><\/script>'), K = /(<\/|<)(s)(cript)/gi;
  function ee(v, L, I, Y) {
    return "" + L + (I === "s" ? "\\u0073" : "\\u0053") + Y;
  }
  function de(v, L, I, Y, Ee) {
    v = v === void 0 ? "" : v, L = L === void 0 ? ne : m('<script nonce="' + B(L) + '">');
    var Se = [];
    if (I !== void 0 && Se.push(L, u(("" + I).replace(K, ee)), j), Y !== void 0)
      for (I = 0; I < Y.length; I++)
        Se.push(X, u(B(Y[I])), V);
    if (Ee !== void 0)
      for (Y = 0; Y < Ee.length; Y++)
        Se.push(G, u(B(Ee[Y])), V);
    return { bootstrapChunks: Se, startInlineScript: L, placeholderPrefix: m(v + "P:"), segmentPrefix: m(v + "S:"), boundaryPrefix: v + "B:", idPrefix: v, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Q(v, L) {
    return { insertionMode: v, selectedValue: L };
  }
  function te(v) {
    return Q(v === "http://www.w3.org/2000/svg" ? 2 : v === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function q(v, L, I) {
    switch (L) {
      case "select":
        return Q(1, I.value != null ? I.value : I.defaultValue);
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
    return 4 <= v.insertionMode || v.insertionMode === 0 ? Q(1, null) : v;
  }
  var Z = m("<!-- -->");
  function Me(v, L, I, Y) {
    return L === "" ? Y : (Y && v.push(Z), v.push(u(B(L))), !0);
  }
  var ke = /* @__PURE__ */ new Map(), pe = m(' style="'), Le = m(":"), We = m(";");
  function Ze(v, L, I) {
    if (typeof I != "object")
      throw Error(t(62));
    L = !0;
    for (var Y in I)
      if (x.call(I, Y)) {
        var Ee = I[Y];
        if (Ee != null && typeof Ee != "boolean" && Ee !== "") {
          if (Y.indexOf("--") === 0) {
            var Se = u(B(Y));
            Ee = u(B(("" + Ee).trim()));
          } else {
            Se = Y;
            var Fe = ke.get(Se);
            Fe !== void 0 || (Fe = m(B(Se.replace(H, "-$1").toLowerCase().replace(re, "-ms-"))), ke.set(Se, Fe)), Se = Fe, Ee = typeof Ee == "number" ? Ee === 0 || x.call(C, Y) ? u("" + Ee) : u(Ee + "px") : u(B(("" + Ee).trim()));
          }
          L ? (L = !1, v.push(pe, Se, Le, Ee)) : v.push(We, Se, Le, Ee);
        }
      }
    L || v.push(_e);
  }
  var Ae = m(" "), me = m('="'), _e = m('"'), ae = m('=""');
  function se(v, L, I, Y) {
    switch (I) {
      case "style":
        Ze(v, L, Y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < I.length) || I[0] !== "o" && I[0] !== "O" || I[1] !== "n" && I[1] !== "N") {
      if (L = h.hasOwnProperty(I) ? h[I] : null, L !== null) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!L.acceptsBooleans)
              return;
        }
        switch (I = u(L.attributeName), L.type) {
          case 3:
            Y && v.push(Ae, I, ae);
            break;
          case 4:
            Y === !0 ? v.push(Ae, I, ae) : Y !== !1 && v.push(Ae, I, me, u(B(Y)), _e);
            break;
          case 5:
            isNaN(Y) || v.push(Ae, I, me, u(B(Y)), _e);
            break;
          case 6:
            !isNaN(Y) && 1 <= Y && v.push(Ae, I, me, u(B(Y)), _e);
            break;
          default:
            L.sanitizeURL && (Y = "" + Y), v.push(Ae, I, me, u(B(Y)), _e);
        }
      } else if (F(I)) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (L = I.toLowerCase().slice(0, 5), L !== "data-" && L !== "aria-")
              return;
        }
        v.push(Ae, u(I), me, u(B(Y)), _e);
      }
    }
  }
  var xe = m(">"), ze = m("/>");
  function Ve(v, L, I) {
    if (L != null) {
      if (I != null)
        throw Error(t(60));
      if (typeof L != "object" || !("__html" in L))
        throw Error(t(61));
      L = L.__html, L != null && v.push(u("" + L));
    }
  }
  function qe(v) {
    var L = "";
    return e.Children.forEach(v, function(I) {
      I != null && (L += I);
    }), L;
  }
  var Qe = m(' selected=""');
  function tt(v, L, I, Y) {
    v.push(Ce(I));
    var Ee = I = null, Se;
    for (Se in L)
      if (x.call(L, Se)) {
        var Fe = L[Se];
        if (Fe != null)
          switch (Se) {
            case "children":
              I = Fe;
              break;
            case "dangerouslySetInnerHTML":
              Ee = Fe;
              break;
            default:
              se(v, Y, Se, Fe);
          }
      }
    return v.push(xe), Ve(v, Ee, I), typeof I == "string" ? (v.push(u(B(I))), null) : I;
  }
  var et = m(`
`), Ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Re = /* @__PURE__ */ new Map();
  function Ce(v) {
    var L = Re.get(v);
    if (L === void 0) {
      if (!Ye.test(v))
        throw Error(t(65, v));
      L = m("<" + v), Re.set(v, L);
    }
    return L;
  }
  var at = m("<!DOCTYPE html>");
  function Ge(v, L, I, Y, Ee) {
    switch (L) {
      case "select":
        v.push(Ce("select"));
        var Se = null, Fe = null;
        for (Pt in I)
          if (x.call(I, Pt)) {
            var Xe = I[Pt];
            if (Xe != null)
              switch (Pt) {
                case "children":
                  Se = Xe;
                  break;
                case "dangerouslySetInnerHTML":
                  Fe = Xe;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  se(v, Y, Pt, Xe);
              }
          }
        return v.push(xe), Ve(v, Fe, Se), Se;
      case "option":
        Fe = Ee.selectedValue, v.push(Ce("option"));
        var bt = Xe = null, Dt = null, Pt = null;
        for (Se in I)
          if (x.call(I, Se)) {
            var sn = I[Se];
            if (sn != null)
              switch (Se) {
                case "children":
                  Xe = sn;
                  break;
                case "selected":
                  Dt = sn;
                  break;
                case "dangerouslySetInnerHTML":
                  Pt = sn;
                  break;
                case "value":
                  bt = sn;
                default:
                  se(v, Y, Se, sn);
              }
          }
        if (Fe != null)
          if (I = bt !== null ? "" + bt : qe(Xe), oe(Fe)) {
            for (Y = 0; Y < Fe.length; Y++)
              if ("" + Fe[Y] === I) {
                v.push(Qe);
                break;
              }
          } else
            "" + Fe === I && v.push(Qe);
        else
          Dt && v.push(Qe);
        return v.push(xe), Ve(v, Pt, Xe), Xe;
      case "textarea":
        v.push(Ce("textarea")), Pt = Fe = Se = null;
        for (Xe in I)
          if (x.call(I, Xe) && (bt = I[Xe], bt != null))
            switch (Xe) {
              case "children":
                Pt = bt;
                break;
              case "value":
                Se = bt;
                break;
              case "defaultValue":
                Fe = bt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                se(v, Y, Xe, bt);
            }
        if (Se === null && Fe !== null && (Se = Fe), v.push(xe), Pt != null) {
          if (Se != null)
            throw Error(t(92));
          if (oe(Pt) && 1 < Pt.length)
            throw Error(t(93));
          Se = "" + Pt;
        }
        return typeof Se == "string" && Se[0] === `
` && v.push(et), Se !== null && v.push(u(B("" + Se))), null;
      case "input":
        v.push(Ce("input")), bt = Pt = Xe = Se = null;
        for (Fe in I)
          if (x.call(I, Fe) && (Dt = I[Fe], Dt != null))
            switch (Fe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                bt = Dt;
                break;
              case "defaultValue":
                Xe = Dt;
                break;
              case "checked":
                Pt = Dt;
                break;
              case "value":
                Se = Dt;
                break;
              default:
                se(v, Y, Fe, Dt);
            }
        return Pt !== null ? se(
          v,
          Y,
          "checked",
          Pt
        ) : bt !== null && se(v, Y, "checked", bt), Se !== null ? se(v, Y, "value", Se) : Xe !== null && se(v, Y, "value", Xe), v.push(ze), null;
      case "menuitem":
        v.push(Ce("menuitem"));
        for (var Xn in I)
          if (x.call(I, Xn) && (Se = I[Xn], Se != null))
            switch (Xn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                se(v, Y, Xn, Se);
            }
        return v.push(xe), null;
      case "title":
        v.push(Ce("title")), Se = null;
        for (sn in I)
          if (x.call(I, sn) && (Fe = I[sn], Fe != null))
            switch (sn) {
              case "children":
                Se = Fe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                se(v, Y, sn, Fe);
            }
        return v.push(xe), Se;
      case "listing":
      case "pre":
        v.push(Ce(L)), Fe = Se = null;
        for (bt in I)
          if (x.call(I, bt) && (Xe = I[bt], Xe != null))
            switch (bt) {
              case "children":
                Se = Xe;
                break;
              case "dangerouslySetInnerHTML":
                Fe = Xe;
                break;
              default:
                se(v, Y, bt, Xe);
            }
        if (v.push(xe), Fe != null) {
          if (Se != null)
            throw Error(t(60));
          if (typeof Fe != "object" || !("__html" in Fe))
            throw Error(t(61));
          I = Fe.__html, I != null && (typeof I == "string" && 0 < I.length && I[0] === `
` ? v.push(et, u(I)) : v.push(u("" + I)));
        }
        return typeof Se == "string" && Se[0] === `
` && v.push(et), Se;
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
        v.push(Ce(L));
        for (var Jn in I)
          if (x.call(I, Jn) && (Se = I[Jn], Se != null))
            switch (Jn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, L));
              default:
                se(v, Y, Jn, Se);
            }
        return v.push(ze), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return tt(v, I, L, Y);
      case "html":
        return Ee.insertionMode === 0 && v.push(at), tt(v, I, L, Y);
      default:
        if (L.indexOf("-") === -1 && typeof I.is != "string")
          return tt(v, I, L, Y);
        v.push(Ce(L)), Fe = Se = null;
        for (Dt in I)
          if (x.call(I, Dt) && (Xe = I[Dt], Xe != null))
            switch (Dt) {
              case "children":
                Se = Xe;
                break;
              case "dangerouslySetInnerHTML":
                Fe = Xe;
                break;
              case "style":
                Ze(v, Y, Xe);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                F(Dt) && typeof Xe != "function" && typeof Xe != "symbol" && v.push(Ae, u(Dt), me, u(B(Xe)), _e);
            }
        return v.push(xe), Ve(v, Fe, Se), Se;
    }
  }
  var ft = m("</"), ht = m(">"), yt = m('<template id="'), _t = m('"></template>'), an = m("<!--$-->"), on = m('<!--$?--><template id="'), Kt = m('"></template>'), Jt = m("<!--$!-->"), Yt = m("<!--/$-->"), At = m("<template"), Mt = m('"'), Vt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var Ie = m("></template>");
  function en(v, L, I) {
    if (i(v, on), I === null)
      throw Error(t(395));
    return i(v, I), l(v, Kt);
  }
  var wt = m('<div hidden id="'), zt = m('">'), mt = m("</div>"), tn = m('<svg aria-hidden="true" style="display:none" id="'), xn = m('">'), Ft = m("</svg>"), nn = m('<math aria-hidden="true" style="display:none" id="'), Ln = m('">'), Xt = m("</math>"), jt = m('<table hidden id="'), Tn = m('">'), Hn = m("</table>"), Mn = m('<table hidden><tbody id="'), qt = m('">'), Wn = m("</tbody></table>"), Vn = m('<table hidden><tr id="'), Cn = m('">'), Sn = m("</tr></table>"), jn = m('<table hidden><colgroup id="'), zn = m('">'), Un = m("</colgroup></table>");
  function De(v, L, I, Y) {
    switch (I.insertionMode) {
      case 0:
      case 1:
        return i(v, wt), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, zt);
      case 2:
        return i(v, tn), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, xn);
      case 3:
        return i(v, nn), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, Ln);
      case 4:
        return i(v, jt), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, Tn);
      case 5:
        return i(v, Mn), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, qt);
      case 6:
        return i(v, Vn), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, Cn);
      case 7:
        return i(
          v,
          jn
        ), i(v, L.segmentPrefix), i(v, u(Y.toString(16))), l(v, zn);
      default:
        throw Error(t(397));
    }
  }
  function ct(v, L) {
    switch (L.insertionMode) {
      case 0:
      case 1:
        return l(v, mt);
      case 2:
        return l(v, Ft);
      case 3:
        return l(v, Xt);
      case 4:
        return l(v, Hn);
      case 5:
        return l(v, Wn);
      case 6:
        return l(v, Sn);
      case 7:
        return l(v, Un);
      default:
        throw Error(t(397));
    }
  }
  var pt = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), $ = m('$RS("'), Oe = m('","'), Ke = m('")<\/script>'), $e = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), nt = m('$RC("'), it = m('","'), kt = m('")<\/script>'), Lt = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ue = m('$RX("'), It = m('"'), $t = m(")<\/script>"), Bt = m(","), vt = /[<\u2028\u2029]/g;
  function Rt(v) {
    return JSON.stringify(v).replace(vt, function(L) {
      switch (L) {
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
  var Nt = Object.assign, Ot = Symbol.for("react.element"), Gt = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Nn = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), ln = Symbol.for("react.provider"), mn = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), En = Symbol.for("react.suspense"), qn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), U = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ve = Symbol.for("react.default_value"), Pe = Symbol.iterator;
  function je(v) {
    if (v == null)
      return null;
    if (typeof v == "function")
      return v.displayName || v.name || null;
    if (typeof v == "string")
      return v;
    switch (v) {
      case pn:
        return "Fragment";
      case Gt:
        return "Portal";
      case hn:
        return "Profiler";
      case Nn:
        return "StrictMode";
      case En:
        return "Suspense";
      case qn:
        return "SuspenseList";
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case mn:
          return (v.displayName || "Context") + ".Consumer";
        case ln:
          return (v._context.displayName || "Context") + ".Provider";
        case cn:
          var L = v.render;
          return v = v.displayName, v || (v = L.displayName || L.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
        case g:
          return L = v.displayName || null, L !== null ? L : je(v.type) || "Memo";
        case A:
          L = v._payload, v = v._init;
          try {
            return je(v(L));
          } catch {
          }
      }
    return null;
  }
  var lt = {};
  function gt(v, L) {
    if (v = v.contextTypes, !v)
      return lt;
    var I = {}, Y;
    for (Y in v)
      I[Y] = L[Y];
    return I;
  }
  var le = null;
  function ue(v, L) {
    if (v !== L) {
      v.context._currentValue = v.parentValue, v = v.parent;
      var I = L.parent;
      if (v === null) {
        if (I !== null)
          throw Error(t(401));
      } else {
        if (I === null)
          throw Error(t(401));
        ue(v, I);
      }
      L.context._currentValue = L.value;
    }
  }
  function ye(v) {
    v.context._currentValue = v.parentValue, v = v.parent, v !== null && ye(v);
  }
  function Ne(v) {
    var L = v.parent;
    L !== null && Ne(L), v.context._currentValue = v.value;
  }
  function xt(v, L) {
    if (v.context._currentValue = v.parentValue, v = v.parent, v === null)
      throw Error(t(402));
    v.depth === L.depth ? ue(v, L) : xt(v, L);
  }
  function gn(v, L) {
    var I = L.parent;
    if (I === null)
      throw Error(t(402));
    v.depth === I.depth ? ue(v, I) : gn(v, I), L.context._currentValue = L.value;
  }
  function kn(v) {
    var L = le;
    L !== v && (L === null ? Ne(v) : v === null ? ye(L) : L.depth === v.depth ? ue(L, v) : L.depth > v.depth ? xt(L, v) : gn(L, v), le = v);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(v, L) {
    v = v._reactInternals, v.queue !== null && v.queue.push(L);
  }, enqueueReplaceState: function(v, L) {
    v = v._reactInternals, v.replace = !0, v.queue = [L];
  }, enqueueForceUpdate: function() {
  } };
  function In(v, L, I, Y) {
    var Ee = v.state !== void 0 ? v.state : null;
    v.updater = dr, v.props = I, v.state = Ee;
    var Se = { queue: [], replace: !1 };
    v._reactInternals = Se;
    var Fe = L.contextType;
    if (v.context = typeof Fe == "object" && Fe !== null ? Fe._currentValue : Y, Fe = L.getDerivedStateFromProps, typeof Fe == "function" && (Fe = Fe(I, Ee), Ee = Fe == null ? Ee : Nt({}, Ee, Fe), v.state = Ee), typeof L.getDerivedStateFromProps != "function" && typeof v.getSnapshotBeforeUpdate != "function" && (typeof v.UNSAFE_componentWillMount == "function" || typeof v.componentWillMount == "function"))
      if (L = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), L !== v.state && dr.enqueueReplaceState(v, v.state, null), Se.queue !== null && 0 < Se.queue.length)
        if (L = Se.queue, Fe = Se.replace, Se.queue = null, Se.replace = !1, Fe && L.length === 1)
          v.state = L[0];
        else {
          for (Se = Fe ? L[0] : v.state, Ee = !0, Fe = Fe ? 1 : 0; Fe < L.length; Fe++) {
            var Xe = L[Fe];
            Xe = typeof Xe == "function" ? Xe.call(v, Se, I, Y) : Xe, Xe != null && (Ee ? (Ee = !1, Se = Nt({}, Se, Xe)) : Nt(Se, Xe));
          }
          v.state = Se;
        }
      else
        Se.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function fr(v, L, I) {
    var Y = v.id;
    v = v.overflow;
    var Ee = 32 - qr(Y) - 1;
    Y &= ~(1 << Ee), I += 1;
    var Se = 32 - qr(L) + Ee;
    if (30 < Se) {
      var Fe = Ee - Ee % 5;
      return Se = (Y & (1 << Fe) - 1).toString(32), Y >>= Fe, Ee -= Fe, { id: 1 << 32 - qr(L) + Ee | I << Ee | Y, overflow: Se + v };
    }
    return { id: 1 << Se | I << Ee | Y, overflow: v };
  }
  var qr = Math.clz32 ? Math.clz32 : Ba, Qo = Math.log, Jo = Math.LN2;
  function Ba(v) {
    return v >>>= 0, v === 0 ? 32 : 31 - (Qo(v) / Jo | 0) | 0;
  }
  function el(v, L) {
    return v === L && (v !== 0 || 1 / v === 1 / L) || v !== v && L !== L;
  }
  var Ha = typeof Object.is == "function" ? Object.is : el, pr = null, Gr = null, da = null, rn = null, mr = !1, Kn = !1, Tr = 0, yr = null, fa = 0;
  function gr() {
    if (pr === null)
      throw Error(t(321));
    return pr;
  }
  function Qn() {
    if (0 < fa)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Wa() {
    return rn === null ? da === null ? (mr = !1, da = rn = Qn()) : (mr = !0, rn = da) : rn.next === null ? (mr = !1, rn = rn.next = Qn()) : (mr = !0, rn = rn.next), rn;
  }
  function Va() {
    Gr = pr = null, Kn = !1, da = null, fa = 0, rn = yr = null;
  }
  function Ii(v, L) {
    return typeof L == "function" ? L(v) : L;
  }
  function $i(v, L, I) {
    if (pr = gr(), rn = Wa(), mr) {
      var Y = rn.queue;
      if (L = Y.dispatch, yr !== null && (I = yr.get(Y), I !== void 0)) {
        yr.delete(Y), Y = rn.memoizedState;
        do
          Y = v(Y, I.action), I = I.next;
        while (I !== null);
        return rn.memoizedState = Y, [Y, L];
      }
      return [rn.memoizedState, L];
    }
    return v = v === Ii ? typeof L == "function" ? L() : L : I !== void 0 ? I(L) : L, rn.memoizedState = v, v = rn.queue = { last: null, dispatch: null }, v = v.dispatch = tl.bind(null, pr, v), [rn.memoizedState, v];
  }
  function Bi(v, L) {
    if (pr = gr(), rn = Wa(), L = L === void 0 ? null : L, rn !== null) {
      var I = rn.memoizedState;
      if (I !== null && L !== null) {
        var Y = I[1];
        e:
          if (Y === null)
            Y = !1;
          else {
            for (var Ee = 0; Ee < Y.length && Ee < L.length; Ee++)
              if (!Ha(L[Ee], Y[Ee])) {
                Y = !1;
                break e;
              }
            Y = !0;
          }
        if (Y)
          return I[0];
      }
    }
    return v = v(), rn.memoizedState = [v, L], v;
  }
  function tl(v, L, I) {
    if (25 <= fa)
      throw Error(t(301));
    if (v === pr)
      if (Kn = !0, v = { action: I, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), I = yr.get(L), I === void 0)
        yr.set(L, v);
      else {
        for (L = I; L.next !== null; )
          L = L.next;
        L.next = v;
      }
  }
  function nl() {
    throw Error(t(394));
  }
  function pa() {
  }
  var ha = { readContext: function(v) {
    return v._currentValue;
  }, useContext: function(v) {
    return gr(), v._currentValue;
  }, useMemo: Bi, useReducer: $i, useRef: function(v) {
    pr = gr(), rn = Wa();
    var L = rn.memoizedState;
    return L === null ? (v = { current: v }, rn.memoizedState = v) : L;
  }, useState: function(v) {
    return $i(Ii, v);
  }, useInsertionEffect: pa, useLayoutEffect: function() {
  }, useCallback: function(v, L) {
    return Bi(function() {
      return v;
    }, L);
  }, useImperativeHandle: pa, useEffect: pa, useDebugValue: pa, useDeferredValue: function(v) {
    return gr(), v;
  }, useTransition: function() {
    return gr(), [!1, nl];
  }, useId: function() {
    var v = Gr.treeContext, L = v.overflow;
    v = v.id, v = (v & ~(1 << 32 - qr(v) - 1)).toString(32) + L;
    var I = ma;
    if (I === null)
      throw Error(t(404));
    return L = Tr++, v = ":" + I.idPrefix + "R" + v, 0 < L && (v += "H" + L.toString(32)), v + ":";
  }, useMutableSource: function(v, L) {
    return gr(), L(v._source);
  }, useSyncExternalStore: function(v, L, I) {
    if (I === void 0)
      throw Error(t(407));
    return I();
  } }, ma = null, Zr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function rl(v) {
    return console.error(v), null;
  }
  function Qr() {
  }
  function ja(v, L, I, Y, Ee, Se, Fe, Xe, bt) {
    var Dt = [], Pt = /* @__PURE__ */ new Set();
    return L = { destination: null, responseState: L, progressiveChunkSize: Y === void 0 ? 12800 : Y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pt, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Ee === void 0 ? rl : Ee, onAllReady: Se === void 0 ? Qr : Se, onShellReady: Fe === void 0 ? Qr : Fe, onShellError: Xe === void 0 ? Qr : Xe, onFatalError: bt === void 0 ? Qr : bt }, I = Fr(L, 0, null, I, !1, !1), I.parentFlushed = !0, v = Ua(L, v, null, I, Pt, lt, null, wr), Dt.push(v), L;
  }
  function Ua(v, L, I, Y, Ee, Se, Fe, Xe) {
    v.allPendingTasks++, I === null ? v.pendingRootTasks++ : I.pendingTasks++;
    var bt = { node: L, ping: function() {
      var Dt = v.pingedTasks;
      Dt.push(bt), Dt.length === 1 && Ki(v);
    }, blockedBoundary: I, blockedSegment: Y, abortSet: Ee, legacyContext: Se, context: Fe, treeContext: Xe };
    return Ee.add(bt), bt;
  }
  function Fr(v, L, I, Y, Ee, Se) {
    return { status: 0, id: -1, index: L, parentFlushed: !1, chunks: [], children: [], formatContext: Y, boundary: I, lastPushedText: Ee, textEmbedded: Se };
  }
  function Mr(v, L) {
    if (v = v.onError(L), v != null && typeof v != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof v + '" instead');
    return v;
  }
  function ya(v, L) {
    var I = v.onShellError;
    I(L), I = v.onFatalError, I(L), v.destination !== null ? (v.status = 2, y(v.destination, L)) : (v.status = 1, v.fatalError = L);
  }
  function Hi(v, L, I, Y, Ee) {
    for (pr = {}, Gr = L, Tr = 0, v = I(Y, Ee); Kn; )
      Kn = !1, Tr = 0, fa += 1, rn = null, v = I(Y, Ee);
    return Va(), v;
  }
  function Ka(v, L, I, Y) {
    var Ee = I.render(), Se = Y.childContextTypes;
    if (Se != null) {
      var Fe = L.legacyContext;
      if (typeof I.getChildContext != "function")
        Y = Fe;
      else {
        I = I.getChildContext();
        for (var Xe in I)
          if (!(Xe in Se))
            throw Error(t(108, je(Y) || "Unknown", Xe));
        Y = Nt({}, Fe, I);
      }
      L.legacyContext = Y, Yn(v, L, Ee), L.legacyContext = Fe;
    } else
      Yn(v, L, Ee);
  }
  function Wi(v, L) {
    if (v && v.defaultProps) {
      L = Nt({}, L), v = v.defaultProps;
      for (var I in v)
        L[I] === void 0 && (L[I] = v[I]);
      return L;
    }
    return L;
  }
  function ga(v, L, I, Y, Ee) {
    if (typeof I == "function")
      if (I.prototype && I.prototype.isReactComponent) {
        Ee = gt(I, L.legacyContext);
        var Se = I.contextType;
        Se = new I(Y, typeof Se == "object" && Se !== null ? Se._currentValue : Ee), In(Se, I, Y, Ee), Ka(v, L, Se, I);
      } else {
        Se = gt(I, L.legacyContext), Ee = Hi(v, L, I, Y, Se);
        var Fe = Tr !== 0;
        if (typeof Ee == "object" && Ee !== null && typeof Ee.render == "function" && Ee.$$typeof === void 0)
          In(Ee, I, Y, Se), Ka(v, L, Ee, I);
        else if (Fe) {
          Y = L.treeContext, L.treeContext = fr(Y, 1, 0);
          try {
            Yn(v, L, Ee);
          } finally {
            L.treeContext = Y;
          }
        } else
          Yn(v, L, Ee);
      }
    else if (typeof I == "string") {
      switch (Ee = L.blockedSegment, Se = Ge(Ee.chunks, I, Y, v.responseState, Ee.formatContext), Ee.lastPushedText = !1, Fe = Ee.formatContext, Ee.formatContext = q(Fe, I, Y), va(v, L, Se), Ee.formatContext = Fe, I) {
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
          Ee.chunks.push(ft, u(I), ht);
      }
      Ee.lastPushedText = !1;
    } else {
      switch (I) {
        case be:
        case U:
        case Nn:
        case hn:
        case pn:
          Yn(v, L, Y.children);
          return;
        case qn:
          Yn(v, L, Y.children);
          return;
        case z:
          throw Error(t(343));
        case En:
          e: {
            I = L.blockedBoundary, Ee = L.blockedSegment, Se = Y.fallback, Y = Y.children, Fe = /* @__PURE__ */ new Set();
            var Xe = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Fe, errorDigest: null }, bt = Fr(v, Ee.chunks.length, Xe, Ee.formatContext, !1, !1);
            Ee.children.push(bt), Ee.lastPushedText = !1;
            var Dt = Fr(v, 0, null, Ee.formatContext, !1, !1);
            Dt.parentFlushed = !0, L.blockedBoundary = Xe, L.blockedSegment = Dt;
            try {
              if (va(
                v,
                L,
                Y
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(Z), Dt.status = 1, xa(Xe, Dt), Xe.pendingTasks === 0)
                break e;
            } catch (Pt) {
              Dt.status = 4, Xe.forceClientRender = !0, Xe.errorDigest = Mr(v, Pt);
            } finally {
              L.blockedBoundary = I, L.blockedSegment = Ee;
            }
            L = Ua(v, Se, I, bt, Fe, L.legacyContext, L.context, L.treeContext), v.pingedTasks.push(L);
          }
          return;
      }
      if (typeof I == "object" && I !== null)
        switch (I.$$typeof) {
          case cn:
            if (Y = Hi(v, L, I.render, Y, Ee), Tr !== 0) {
              I = L.treeContext, L.treeContext = fr(I, 1, 0);
              try {
                Yn(v, L, Y);
              } finally {
                L.treeContext = I;
              }
            } else
              Yn(v, L, Y);
            return;
          case g:
            I = I.type, Y = Wi(I, Y), ga(v, L, I, Y, Ee);
            return;
          case ln:
            if (Ee = Y.children, I = I._context, Y = Y.value, Se = I._currentValue, I._currentValue = Y, Fe = le, le = Y = { parent: Fe, depth: Fe === null ? 0 : Fe.depth + 1, context: I, parentValue: Se, value: Y }, L.context = Y, Yn(v, L, Ee), v = le, v === null)
              throw Error(t(403));
            Y = v.parentValue, v.context._currentValue = Y === ve ? v.context._defaultValue : Y, v = le = v.parent, L.context = v;
            return;
          case mn:
            Y = Y.children, Y = Y(I._currentValue), Yn(v, L, Y);
            return;
          case A:
            Ee = I._init, I = Ee(I._payload), Y = Wi(I, Y), ga(v, L, I, Y, void 0);
            return;
        }
      throw Error(t(
        130,
        I == null ? I : typeof I,
        ""
      ));
    }
  }
  function Yn(v, L, I) {
    if (L.node = I, typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case Ot:
          ga(v, L, I.type, I.props, I.ref);
          return;
        case Gt:
          throw Error(t(257));
        case A:
          var Y = I._init;
          I = Y(I._payload), Yn(v, L, I);
          return;
      }
      if (oe(I)) {
        Vi(v, L, I);
        return;
      }
      if (I === null || typeof I != "object" ? Y = null : (Y = Pe && I[Pe] || I["@@iterator"], Y = typeof Y == "function" ? Y : null), Y && (Y = Y.call(I))) {
        if (I = Y.next(), !I.done) {
          var Ee = [];
          do
            Ee.push(I.value), I = Y.next();
          while (!I.done);
          Vi(v, L, Ee);
        }
        return;
      }
      throw v = Object.prototype.toString.call(I), Error(t(31, v === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : v));
    }
    typeof I == "string" ? (Y = L.blockedSegment, Y.lastPushedText = Me(L.blockedSegment.chunks, I, v.responseState, Y.lastPushedText)) : typeof I == "number" && (Y = L.blockedSegment, Y.lastPushedText = Me(L.blockedSegment.chunks, "" + I, v.responseState, Y.lastPushedText));
  }
  function Vi(v, L, I) {
    for (var Y = I.length, Ee = 0; Ee < Y; Ee++) {
      var Se = L.treeContext;
      L.treeContext = fr(Se, Y, Ee);
      try {
        va(v, L, I[Ee]);
      } finally {
        L.treeContext = Se;
      }
    }
  }
  function va(v, L, I) {
    var Y = L.blockedSegment.formatContext, Ee = L.legacyContext, Se = L.context;
    try {
      return Yn(v, L, I);
    } catch (bt) {
      if (Va(), typeof bt == "object" && bt !== null && typeof bt.then == "function") {
        I = bt;
        var Fe = L.blockedSegment, Xe = Fr(v, Fe.chunks.length, null, Fe.formatContext, Fe.lastPushedText, !0);
        Fe.children.push(Xe), Fe.lastPushedText = !1, v = Ua(v, L.node, L.blockedBoundary, Xe, L.abortSet, L.legacyContext, L.context, L.treeContext).ping, I.then(v, v), L.blockedSegment.formatContext = Y, L.legacyContext = Ee, L.context = Se, kn(Se);
      } else
        throw L.blockedSegment.formatContext = Y, L.legacyContext = Ee, L.context = Se, kn(Se), bt;
    }
  }
  function al(v) {
    var L = v.blockedBoundary;
    v = v.blockedSegment, v.status = 3, Ui(this, L, v);
  }
  function ji(v, L, I) {
    var Y = v.blockedBoundary;
    v.blockedSegment.status = 3, Y === null ? (L.allPendingTasks--, L.status !== 2 && (L.status = 2, L.destination !== null && L.destination.close())) : (Y.pendingTasks--, Y.forceClientRender || (Y.forceClientRender = !0, v = I === void 0 ? Error(t(432)) : I, Y.errorDigest = L.onError(v), Y.parentFlushed && L.clientRenderedBoundaries.push(Y)), Y.fallbackAbortableTasks.forEach(function(Ee) {
      return ji(Ee, L, I);
    }), Y.fallbackAbortableTasks.clear(), L.allPendingTasks--, L.allPendingTasks === 0 && (Y = L.onAllReady, Y()));
  }
  function xa(v, L) {
    if (L.chunks.length === 0 && L.children.length === 1 && L.children[0].boundary === null) {
      var I = L.children[0];
      I.id = L.id, I.parentFlushed = !0, I.status === 1 && xa(v, I);
    } else
      v.completedSegments.push(L);
  }
  function Ui(v, L, I) {
    if (L === null) {
      if (I.parentFlushed) {
        if (v.completedRootSegment !== null)
          throw Error(t(389));
        v.completedRootSegment = I;
      }
      v.pendingRootTasks--, v.pendingRootTasks === 0 && (v.onShellError = Qr, L = v.onShellReady, L());
    } else
      L.pendingTasks--, L.forceClientRender || (L.pendingTasks === 0 ? (I.parentFlushed && I.status === 1 && xa(L, I), L.parentFlushed && v.completedBoundaries.push(L), L.fallbackAbortableTasks.forEach(al, v), L.fallbackAbortableTasks.clear()) : I.parentFlushed && I.status === 1 && (xa(L, I), L.completedSegments.length === 1 && L.parentFlushed && v.partialBoundaries.push(L)));
    v.allPendingTasks--, v.allPendingTasks === 0 && (v = v.onAllReady, v());
  }
  function Ki(v) {
    if (v.status !== 2) {
      var L = le, I = Zr.current;
      Zr.current = ha;
      var Y = ma;
      ma = v.responseState;
      try {
        var Ee = v.pingedTasks, Se;
        for (Se = 0; Se < Ee.length; Se++) {
          var Fe = Ee[Se], Xe = v, bt = Fe.blockedSegment;
          if (bt.status === 0) {
            kn(Fe.context);
            try {
              Yn(Xe, Fe, Fe.node), bt.lastPushedText && bt.textEmbedded && bt.chunks.push(Z), Fe.abortSet.delete(Fe), bt.status = 1, Ui(Xe, Fe.blockedBoundary, bt);
            } catch (er) {
              if (Va(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Dt = Fe.ping;
                er.then(Dt, Dt);
              } else {
                Fe.abortSet.delete(Fe), bt.status = 4;
                var Pt = Fe.blockedBoundary, sn = er, Xn = Mr(Xe, sn);
                if (Pt === null ? ya(Xe, sn) : (Pt.pendingTasks--, Pt.forceClientRender || (Pt.forceClientRender = !0, Pt.errorDigest = Xn, Pt.parentFlushed && Xe.clientRenderedBoundaries.push(Pt))), Xe.allPendingTasks--, Xe.allPendingTasks === 0) {
                  var Jn = Xe.onAllReady;
                  Jn();
                }
              }
            } finally {
            }
          }
        }
        Ee.splice(0, Se), v.destination !== null && Ya(v, v.destination);
      } catch (er) {
        Mr(v, er), ya(v, er);
      } finally {
        ma = Y, Zr.current = I, I === ha && kn(L);
      }
    }
  }
  function ba(v, L, I) {
    switch (I.parentFlushed = !0, I.status) {
      case 0:
        var Y = I.id = v.nextSegmentId++;
        return I.lastPushedText = !1, I.textEmbedded = !1, v = v.responseState, i(L, yt), i(L, v.placeholderPrefix), v = u(Y.toString(16)), i(L, v), l(L, _t);
      case 1:
        I.status = 2;
        var Ee = !0;
        Y = I.chunks;
        var Se = 0;
        I = I.children;
        for (var Fe = 0; Fe < I.length; Fe++) {
          for (Ee = I[Fe]; Se < Ee.index; Se++)
            i(L, Y[Se]);
          Ee = Sa(v, L, Ee);
        }
        for (; Se < Y.length - 1; Se++)
          i(L, Y[Se]);
        return Se < Y.length && (Ee = l(L, Y[Se])), Ee;
      default:
        throw Error(t(390));
    }
  }
  function Sa(v, L, I) {
    var Y = I.boundary;
    if (Y === null)
      return ba(v, L, I);
    if (Y.parentFlushed = !0, Y.forceClientRender)
      Y = Y.errorDigest, l(L, Jt), i(L, At), Y && (i(L, Vt), i(L, u(B(Y))), i(L, Mt)), l(L, Ie), ba(v, L, I);
    else if (0 < Y.pendingTasks) {
      Y.rootSegmentID = v.nextSegmentId++, 0 < Y.completedSegments.length && v.partialBoundaries.push(Y);
      var Ee = v.responseState, Se = Ee.nextSuspenseID++;
      Ee = m(Ee.boundaryPrefix + Se.toString(16)), Y = Y.id = Ee, en(L, v.responseState, Y), ba(v, L, I);
    } else if (Y.byteSize > v.progressiveChunkSize)
      Y.rootSegmentID = v.nextSegmentId++, v.completedBoundaries.push(Y), en(L, v.responseState, Y.id), ba(v, L, I);
    else {
      if (l(L, an), I = Y.completedSegments, I.length !== 1)
        throw Error(t(391));
      Sa(v, L, I[0]);
    }
    return l(L, Yt);
  }
  function Yi(v, L, I) {
    return De(L, v.responseState, I.formatContext, I.id), Sa(v, L, I), ct(L, I.formatContext);
  }
  function Xi(v, L, I) {
    for (var Y = I.completedSegments, Ee = 0; Ee < Y.length; Ee++)
      qi(v, L, I, Y[Ee]);
    if (Y.length = 0, v = v.responseState, Y = I.id, I = I.rootSegmentID, i(L, v.startInlineScript), v.sentCompleteBoundaryFunction ? i(L, nt) : (v.sentCompleteBoundaryFunction = !0, i(L, $e)), Y === null)
      throw Error(t(395));
    return I = u(I.toString(16)), i(L, Y), i(L, it), i(L, v.segmentPrefix), i(L, I), l(L, kt);
  }
  function qi(v, L, I, Y) {
    if (Y.status === 2)
      return !0;
    var Ee = Y.id;
    if (Ee === -1) {
      if ((Y.id = I.rootSegmentID) === -1)
        throw Error(t(392));
      return Yi(v, L, Y);
    }
    return Yi(v, L, Y), v = v.responseState, i(L, v.startInlineScript), v.sentCompleteSegmentFunction ? i(L, $) : (v.sentCompleteSegmentFunction = !0, i(L, pt)), i(L, v.segmentPrefix), Ee = u(Ee.toString(16)), i(L, Ee), i(L, Oe), i(L, v.placeholderPrefix), i(L, Ee), l(L, Ke);
  }
  function Ya(v, L) {
    n = new Uint8Array(512), a = 0;
    try {
      var I = v.completedRootSegment;
      if (I !== null && v.pendingRootTasks === 0) {
        Sa(v, L, I), v.completedRootSegment = null;
        var Y = v.responseState.bootstrapChunks;
        for (I = 0; I < Y.length - 1; I++)
          i(L, Y[I]);
        I < Y.length && l(L, Y[I]);
      }
      var Ee = v.clientRenderedBoundaries, Se;
      for (Se = 0; Se < Ee.length; Se++) {
        var Fe = Ee[Se];
        Y = L;
        var Xe = v.responseState, bt = Fe.id, Dt = Fe.errorDigest, Pt = Fe.errorMessage, sn = Fe.errorComponentStack;
        if (i(Y, Xe.startInlineScript), Xe.sentClientRenderFunction ? i(Y, Ue) : (Xe.sentClientRenderFunction = !0, i(
          Y,
          Lt
        )), bt === null)
          throw Error(t(395));
        i(Y, bt), i(Y, It), (Dt || Pt || sn) && (i(Y, Bt), i(Y, u(Rt(Dt || "")))), (Pt || sn) && (i(Y, Bt), i(Y, u(Rt(Pt || "")))), sn && (i(Y, Bt), i(Y, u(Rt(sn)))), l(Y, $t);
      }
      Ee.splice(0, Se);
      var Xn = v.completedBoundaries;
      for (Se = 0; Se < Xn.length; Se++)
        Xi(v, L, Xn[Se]);
      Xn.splice(0, Se), d(L), n = new Uint8Array(512), a = 0;
      var Jn = v.partialBoundaries;
      for (Se = 0; Se < Jn.length; Se++) {
        var er = Jn[Se];
        e: {
          Ee = v, Fe = L;
          var Ea = er.completedSegments;
          for (Xe = 0; Xe < Ea.length; Xe++)
            if (!qi(
              Ee,
              Fe,
              er,
              Ea[Xe]
            )) {
              Xe++, Ea.splice(0, Xe);
              var Zi = !1;
              break e;
            }
          Ea.splice(0, Xe), Zi = !0;
        }
        if (!Zi) {
          v.destination = null, Se++, Jn.splice(0, Se);
          return;
        }
      }
      Jn.splice(0, Se);
      var Xa = v.completedBoundaries;
      for (Se = 0; Se < Xa.length; Se++)
        Xi(v, L, Xa[Se]);
      Xa.splice(0, Se);
    } finally {
      d(L), v.allPendingTasks === 0 && v.pingedTasks.length === 0 && v.clientRenderedBoundaries.length === 0 && v.completedBoundaries.length === 0 && L.close();
    }
  }
  function Gi(v, L) {
    try {
      var I = v.abortableTasks;
      I.forEach(function(Y) {
        return ji(Y, v, L);
      }), I.clear(), v.destination !== null && Ya(v, v.destination);
    } catch (Y) {
      Mr(v, Y), ya(v, Y);
    }
  }
  return Cu.renderToReadableStream = function(v, L) {
    return new Promise(function(I, Y) {
      var Ee, Se, Fe = new Promise(function(Pt, sn) {
        Se = Pt, Ee = sn;
      }), Xe = ja(v, de(L ? L.identifierPrefix : void 0, L ? L.nonce : void 0, L ? L.bootstrapScriptContent : void 0, L ? L.bootstrapScripts : void 0, L ? L.bootstrapModules : void 0), te(L ? L.namespaceURI : void 0), L ? L.progressiveChunkSize : void 0, L ? L.onError : void 0, Se, function() {
        var Pt = new ReadableStream({ type: "bytes", pull: function(sn) {
          if (Xe.status === 1)
            Xe.status = 2, y(sn, Xe.fatalError);
          else if (Xe.status !== 2 && Xe.destination === null) {
            Xe.destination = sn;
            try {
              Ya(Xe, sn);
            } catch (Xn) {
              Mr(Xe, Xn), ya(Xe, Xn);
            }
          }
        }, cancel: function() {
          Gi(Xe);
        } }, { highWaterMark: 0 });
        Pt.allReady = Fe, I(Pt);
      }, function(Pt) {
        Fe.catch(function() {
        }), Y(Pt);
      }, Ee);
      if (L && L.signal) {
        var bt = L.signal, Dt = function() {
          Gi(Xe, bt.reason), bt.removeEventListener("abort", Dt);
        };
        bt.addEventListener("abort", Dt);
      }
      Ki(Xe);
    });
  }, Cu.version = "18.2.0", Cu;
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
var Ah;
function zS() {
  return Ah || (Ah = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(o) {
      {
        for (var c = arguments.length, b = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          b[w - 1] = arguments[w];
        l("warn", o, b);
      }
    }
    function i(o) {
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
        var J = b.map(function(fe) {
          return String(fe);
        });
        J.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, J);
      }
    }
    function d(o) {
      o();
    }
    function f(o) {
    }
    function u(o, c) {
      m(o, c);
    }
    function m(o, c) {
      return o.push(c);
    }
    function y(o) {
    }
    function x(o) {
      o.push(null);
    }
    function S(o) {
      return o;
    }
    function R(o) {
      return o;
    }
    function T(o, c) {
      o.destroy(c);
    }
    function F(o) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, b = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return b;
      }
    }
    function k(o) {
      try {
        return h(o), !1;
      } catch {
        return !0;
      }
    }
    function h(o) {
      return "" + o;
    }
    function P(o, c) {
      if (k(o))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", c, F(o)), h(o);
    }
    function O(o, c) {
      if (k(o))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", c, F(o)), h(o);
    }
    function C(o) {
      if (k(o))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", F(o)), h(o);
    }
    var N = Object.prototype.hasOwnProperty, D = 0, B = 1, H = 2, re = 3, oe = 4, ne = 5, j = 6, X = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", G = X + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", V = new RegExp("^[" + X + "][" + G + "]*$"), K = {}, ee = {};
    function de(o) {
      return N.call(ee, o) ? !0 : N.call(K, o) ? !1 : V.test(o) ? (ee[o] = !0, !0) : (K[o] = !0, i("Invalid attribute name: `%s`", o), !1);
    }
    function Q(o, c, b, w) {
      if (b !== null && b.type === D)
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
    function te(o) {
      return Z.hasOwnProperty(o) ? Z[o] : null;
    }
    function q(o, c, b, w, M, J, fe) {
      this.acceptsBooleans = c === H || c === re || c === oe, this.attributeName = w, this.attributeNamespace = M, this.mustUseProperty = b, this.propertyName = o, this.type = c, this.sanitizeURL = J, this.removeEmptyString = fe;
    }
    var Z = {}, Me = [
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
    Me.forEach(function(o) {
      Z[o] = new q(
        o,
        D,
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
      Z[c] = new q(
        c,
        B,
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
      Z[o] = new q(
        o,
        H,
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
      Z[o] = new q(
        o,
        H,
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
      Z[o] = new q(
        o,
        re,
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
      Z[o] = new q(
        o,
        re,
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
      Z[o] = new q(
        o,
        oe,
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
      Z[o] = new q(
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
      Z[o] = new q(
        o,
        ne,
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
    var ke = /[\-\:]([a-z])/g, pe = function(o) {
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
      var c = o.replace(ke, pe);
      Z[c] = new q(
        c,
        B,
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
      var c = o.replace(ke, pe);
      Z[c] = new q(
        c,
        B,
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
      var c = o.replace(ke, pe);
      Z[c] = new q(
        c,
        B,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(o) {
      Z[o] = new q(
        o,
        B,
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
    Z[Le] = new q(
      "xlinkHref",
      B,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(o) {
      Z[o] = new q(
        o,
        B,
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
    var We = {
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
    function Ze(o, c) {
      return o + c.charAt(0).toUpperCase() + c.substring(1);
    }
    var Ae = ["Webkit", "ms", "Moz", "O"];
    Object.keys(We).forEach(function(o) {
      Ae.forEach(function(c) {
        We[Ze(c, o)] = We[o];
      });
    });
    var me = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function _e(o, c) {
      me[c.type] || c.onChange || c.onInput || c.readOnly || c.disabled || c.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), c.onChange || c.readOnly || c.disabled || c.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ae(o, c) {
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
    var se = {
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
    }, xe = {}, ze = new RegExp("^(aria)-[" + G + "]*$"), Ve = new RegExp("^(aria)[A-Z][" + G + "]*$");
    function qe(o, c) {
      {
        if (N.call(xe, c) && xe[c])
          return !0;
        if (Ve.test(c)) {
          var b = "aria-" + c.slice(4).toLowerCase(), w = se.hasOwnProperty(b) ? b : null;
          if (w == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", c), xe[c] = !0, !0;
          if (c !== w)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", c, w), xe[c] = !0, !0;
        }
        if (ze.test(c)) {
          var M = c.toLowerCase(), J = se.hasOwnProperty(M) ? M : null;
          if (J == null)
            return xe[c] = !0, !1;
          if (c !== J)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", c, J), xe[c] = !0, !0;
        }
      }
      return !0;
    }
    function Qe(o, c) {
      {
        var b = [];
        for (var w in c) {
          var M = qe(o, w);
          M || b.push(w);
        }
        var J = b.map(function(fe) {
          return "`" + fe + "`";
        }).join(", ");
        b.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", J, o) : b.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", J, o);
      }
    }
    function tt(o, c) {
      ae(o, c) || Qe(o, c);
    }
    var et = !1;
    function Ye(o, c) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        c != null && c.value === null && !et && (et = !0, o === "select" && c.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var Re = {
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
    }, Ce = function() {
    };
    {
      var at = {}, Ge = /^on./, ft = /^on[^A-Z]/, ht = new RegExp("^(aria)-[" + G + "]*$"), yt = new RegExp("^(aria)[A-Z][" + G + "]*$");
      Ce = function(o, c, b, w) {
        if (N.call(at, c) && at[c])
          return !0;
        var M = c.toLowerCase();
        if (M === "onfocusin" || M === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), at[c] = !0, !0;
        if (w != null) {
          var J = w.registrationNameDependencies, fe = w.possibleRegistrationNames;
          if (J.hasOwnProperty(c))
            return !0;
          var we = fe.hasOwnProperty(M) ? fe[M] : null;
          if (we != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", c, we), at[c] = !0, !0;
          if (Ge.test(c))
            return i("Unknown event handler property `%s`. It will be ignored.", c), at[c] = !0, !0;
        } else if (Ge.test(c))
          return ft.test(c) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", c), at[c] = !0, !0;
        if (ht.test(c) || yt.test(c))
          return !0;
        if (M === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), at[c] = !0, !0;
        if (M === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), at[c] = !0, !0;
        if (M === "is" && b !== null && b !== void 0 && typeof b != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof b), at[c] = !0, !0;
        if (typeof b == "number" && isNaN(b))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", c), at[c] = !0, !0;
        var Be = te(c), rt = Be !== null && Be.type === D;
        if (Re.hasOwnProperty(M)) {
          var dt = Re[M];
          if (dt !== c)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", c, dt), at[c] = !0, !0;
        } else if (!rt && c !== M)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", c, M), at[c] = !0, !0;
        return typeof b == "boolean" && Q(c, b, Be, !1) ? (b ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', b, c, c, b, c) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', b, c, c, b, c, c, c), at[c] = !0, !0) : rt ? !0 : Q(c, b, Be, !1) ? (at[c] = !0, !1) : ((b === "false" || b === "true") && Be !== null && Be.type === re && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", b, c, b === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', c, b), at[c] = !0), !0);
      };
    }
    var _t = function(o, c, b) {
      {
        var w = [];
        for (var M in c) {
          var J = Ce(o, M, c[M], b);
          J || w.push(M);
        }
        var fe = w.map(function(we) {
          return "`" + we + "`";
        }).join(", ");
        w.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o) : w.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o);
      }
    };
    function an(o, c, b) {
      ae(o, c) || _t(o, c, b);
    }
    var on = function() {
    };
    {
      var Kt = /^(?:webkit|moz|o)[A-Z]/, Jt = /^-ms-/, Yt = /-(.)/g, At = /;\s*$/, Mt = {}, Vt = {}, Ie = !1, en = !1, wt = function(o) {
        return o.replace(Yt, function(c, b) {
          return b.toUpperCase();
        });
      }, zt = function(o) {
        Mt.hasOwnProperty(o) && Mt[o] || (Mt[o] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wt(o.replace(Jt, "ms-"))
        ));
      }, mt = function(o) {
        Mt.hasOwnProperty(o) && Mt[o] || (Mt[o] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, tn = function(o, c) {
        Vt.hasOwnProperty(c) && Vt[c] || (Vt[c] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, c.replace(At, "")));
      }, xn = function(o, c) {
        Ie || (Ie = !0, i("`NaN` is an invalid value for the `%s` css style property.", o));
      }, Ft = function(o, c) {
        en || (en = !0, i("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      on = function(o, c) {
        o.indexOf("-") > -1 ? zt(o) : Kt.test(o) ? mt(o) : At.test(c) && tn(o, c), typeof c == "number" && (isNaN(c) ? xn(o, c) : isFinite(c) || Ft(o, c));
      };
    }
    var nn = on, Ln = /["'&<>]/;
    function Xt(o) {
      C(o);
      var c = "" + o, b = Ln.exec(c);
      if (!b)
        return c;
      var w, M = "", J, fe = 0;
      for (J = b.index; J < c.length; J++) {
        switch (c.charCodeAt(J)) {
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
        fe !== J && (M += c.substring(fe, J)), fe = J + 1, M += w;
      }
      return fe !== J ? M + c.substring(fe, J) : M;
    }
    function jt(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Xt(o);
    }
    var Tn = /([A-Z])/g, Hn = /^ms-/;
    function Mn(o) {
      return o.replace(Tn, "-$1").toLowerCase().replace(Hn, "-ms-");
    }
    var qt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Wn = !1;
    function Vn(o) {
      !Wn && qt.test(o) && (Wn = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var Cn = Array.isArray;
    function Sn(o) {
      return Cn(o);
    }
    var jn = "<script>", zn = "<\/script>", Un = '<script src="', De = '<script type="module" src="', ct = '" async=""><\/script>';
    function pt(o) {
      return C(o), ("" + o).replace($, Oe);
    }
    var $ = /(<\/|<)(s)(cript)/gi, Oe = function(o, c, b, w) {
      return "" + c + (b === "s" ? "\\u0073" : "\\u0053") + w;
    };
    function Ke(o, c, b, w, M) {
      var J = o === void 0 ? "" : o, fe = c === void 0 ? jn : '<script nonce="' + jt(c) + '">', we = [];
      if (b !== void 0 && we.push(fe, pt(b), zn), w !== void 0)
        for (var Be = 0; Be < w.length; Be++)
          we.push(Un, jt(w[Be]), ct);
      if (M !== void 0)
        for (var rt = 0; rt < M.length; rt++)
          we.push(De, jt(M[rt]), ct);
      return {
        bootstrapChunks: we,
        startInlineScript: fe,
        placeholderPrefix: J + "P:",
        segmentPrefix: J + "S:",
        boundaryPrefix: J + "B:",
        idPrefix: J,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var $e = 0, nt = 1, it = 2, kt = 3, Lt = 4, Ue = 5, It = 6, $t = 7;
    function Bt(o, c) {
      return {
        insertionMode: o,
        selectedValue: c
      };
    }
    function vt(o, c, b) {
      switch (c) {
        case "select":
          return Bt(nt, b.value != null ? b.value : b.defaultValue);
        case "svg":
          return Bt(it, null);
        case "math":
          return Bt(kt, null);
        case "foreignObject":
          return Bt(nt, null);
        case "table":
          return Bt(Lt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Bt(Ue, null);
        case "colgroup":
          return Bt($t, null);
        case "tr":
          return Bt(It, null);
      }
      return o.insertionMode >= Lt || o.insertionMode === $e ? Bt(nt, null) : o;
    }
    var Rt = null;
    function Nt(o) {
      var c = o.nextSuspenseID++;
      return o.boundaryPrefix + c.toString(16);
    }
    function Ot(o, c, b) {
      var w = o.idPrefix, M = ":" + w + "R" + c;
      return b > 0 && (M += "H" + b.toString(32)), M + ":";
    }
    function Gt(o) {
      return jt(o);
    }
    var pn = "<!-- -->";
    function Nn(o, c, b, w) {
      return c === "" ? w : (w && o.push(pn), o.push(Gt(c)), !0);
    }
    function hn(o, c, b, w) {
      b && w && o.push(pn);
    }
    var ln = /* @__PURE__ */ new Map();
    function mn(o) {
      var c = ln.get(o);
      if (c !== void 0)
        return c;
      var b = jt(Mn(o));
      return ln.set(o, b), b;
    }
    var cn = ' style="', En = ":", qn = ";";
    function g(o, c, b) {
      if (typeof b != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var w = !0;
      for (var M in b)
        if (N.call(b, M)) {
          var J = b[M];
          if (!(J == null || typeof J == "boolean" || J === "")) {
            var fe = void 0, we = void 0, Be = M.indexOf("--") === 0;
            Be ? (fe = jt(M), O(J, M), we = jt(("" + J).trim())) : (nn(M, J), fe = mn(M), typeof J == "number" ? J !== 0 && !N.call(We, M) ? we = J + "px" : we = "" + J : (O(J, M), we = jt(("" + J).trim()))), w ? (w = !1, o.push(cn, fe, En, we)) : o.push(qn, fe, En, we);
          }
        }
      w || o.push(U);
    }
    var A = " ", z = '="', U = '"', be = '=""';
    function ve(o, c, b, w) {
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
        var M = te(b);
        if (M !== null) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!M.acceptsBooleans)
                return;
          }
          var J = M.attributeName, fe = J;
          switch (M.type) {
            case re:
              w && o.push(A, fe, be);
              return;
            case oe:
              w === !0 ? o.push(A, fe, be) : w === !1 || o.push(A, fe, z, jt(w), U);
              return;
            case ne:
              isNaN(w) || o.push(A, fe, z, jt(w), U);
              break;
            case j:
              !isNaN(w) && w >= 1 && o.push(A, fe, z, jt(w), U);
              break;
            default:
              M.sanitizeURL && (P(w, J), w = "" + w, Vn(w)), o.push(A, fe, z, jt(w), U);
          }
        } else if (de(b)) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var we = b.toLowerCase().slice(0, 5);
              if (we !== "data-" && we !== "aria-")
                return;
            }
          }
          o.push(A, b, z, jt(w), U);
        }
      }
    }
    var Pe = ">", je = "/>";
    function lt(o, c, b) {
      if (c != null) {
        if (b != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var w = c.__html;
        w != null && (C(w), o.push("" + w));
      }
    }
    var gt = !1, le = !1, ue = !1, ye = !1, Ne = !1, xt = !1, gn = !1;
    function kn(o, c) {
      {
        var b = o[c];
        if (b != null) {
          var w = Sn(b);
          o.multiple && !w ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", c) : !o.multiple && w && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", c);
        }
      }
    }
    function dr(o, c, b) {
      _e("select", c), kn(c, "value"), kn(c, "defaultValue"), c.value !== void 0 && c.defaultValue !== void 0 && !ue && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ue = !0), o.push(Kn("select"));
      var w = null, M = null;
      for (var J in c)
        if (N.call(c, J)) {
          var fe = c[J];
          if (fe == null)
            continue;
          switch (J) {
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
              ve(o, b, J, fe);
              break;
          }
        }
      return o.push(Pe), lt(o, M, w), w;
    }
    function In(o) {
      var c = "";
      return e.Children.forEach(o, function(b) {
        b != null && (c += b, !Ne && typeof b != "string" && typeof b != "number" && (Ne = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), c;
    }
    var wr = ' selected=""';
    function fr(o, c, b, w) {
      var M = w.selectedValue;
      o.push(Kn("option"));
      var J = null, fe = null, we = null, Be = null;
      for (var rt in c)
        if (N.call(c, rt)) {
          var dt = c[rt];
          if (dt == null)
            continue;
          switch (rt) {
            case "children":
              J = dt;
              break;
            case "selected":
              we = dt, gn || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gn = !0);
              break;
            case "dangerouslySetInnerHTML":
              Be = dt;
              break;
            case "value":
              fe = dt;
            default:
              ve(o, b, rt, dt);
              break;
          }
        }
      if (M != null) {
        var Tt;
        if (fe !== null ? (P(fe, "value"), Tt = "" + fe) : (Be !== null && (xt || (xt = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Tt = In(J)), Sn(M))
          for (var dn = 0; dn < M.length; dn++) {
            P(M[dn], "value");
            var Fn = "" + M[dn];
            if (Fn === Tt) {
              o.push(wr);
              break;
            }
          }
        else
          P(M, "select.value"), "" + M === Tt && o.push(wr);
      } else
        we && o.push(wr);
      return o.push(Pe), lt(o, Be, J), J;
    }
    function qr(o, c, b) {
      _e("input", c), c.checked !== void 0 && c.defaultChecked !== void 0 && !le && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), le = !0), c.value !== void 0 && c.defaultValue !== void 0 && !gt && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), gt = !0), o.push(Kn("input"));
      var w = null, M = null, J = null, fe = null;
      for (var we in c)
        if (N.call(c, we)) {
          var Be = c[we];
          if (Be == null)
            continue;
          switch (we) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              fe = Be;
              break;
            case "defaultValue":
              M = Be;
              break;
            case "checked":
              J = Be;
              break;
            case "value":
              w = Be;
              break;
            default:
              ve(o, b, we, Be);
              break;
          }
        }
      return J !== null ? ve(o, b, "checked", J) : fe !== null && ve(o, b, "checked", fe), w !== null ? ve(o, b, "value", w) : M !== null && ve(o, b, "value", M), o.push(je), null;
    }
    function Qo(o, c, b) {
      _e("textarea", c), c.value !== void 0 && c.defaultValue !== void 0 && !ye && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ye = !0), o.push(Kn("textarea"));
      var w = null, M = null, J = null;
      for (var fe in c)
        if (N.call(c, fe)) {
          var we = c[fe];
          if (we == null)
            continue;
          switch (fe) {
            case "children":
              J = we;
              break;
            case "value":
              w = we;
              break;
            case "defaultValue":
              M = we;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ve(o, b, fe, we);
              break;
          }
        }
      if (w === null && M !== null && (w = M), o.push(Pe), J != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), w != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Sn(J)) {
          if (J.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          C(J[0]), w = "" + J[0];
        }
        C(J), w = "" + J;
      }
      return typeof w == "string" && w[0] === `
` && o.push(Gr), w !== null && (P(w, "value"), o.push(Gt("" + w))), null;
    }
    function Jo(o, c, b, w) {
      o.push(Kn(b));
      for (var M in c)
        if (N.call(c, M)) {
          var J = c[M];
          if (J == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ve(o, w, M, J);
              break;
          }
        }
      return o.push(je), null;
    }
    function Ba(o, c, b) {
      o.push(Kn("menuitem"));
      for (var w in c)
        if (N.call(c, w)) {
          var M = c[w];
          if (M == null)
            continue;
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ve(o, b, w, M);
              break;
          }
        }
      return o.push(Pe), null;
    }
    function el(o, c, b) {
      o.push(Kn("title"));
      var w = null;
      for (var M in c)
        if (N.call(c, M)) {
          var J = c[M];
          if (J == null)
            continue;
          switch (M) {
            case "children":
              w = J;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ve(o, b, M, J);
              break;
          }
        }
      o.push(Pe);
      {
        var fe = Array.isArray(w) && w.length < 2 ? w[0] || null : w;
        Array.isArray(w) && w.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && fe.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && typeof fe != "string" && typeof fe != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return w;
    }
    function Ha(o, c, b, w) {
      o.push(Kn(b));
      var M = null, J = null;
      for (var fe in c)
        if (N.call(c, fe)) {
          var we = c[fe];
          if (we == null)
            continue;
          switch (fe) {
            case "children":
              M = we;
              break;
            case "dangerouslySetInnerHTML":
              J = we;
              break;
            default:
              ve(o, w, fe, we);
              break;
          }
        }
      return o.push(Pe), lt(o, J, M), typeof M == "string" ? (o.push(Gt(M)), null) : M;
    }
    function pr(o, c, b, w) {
      o.push(Kn(b));
      var M = null, J = null;
      for (var fe in c)
        if (N.call(c, fe)) {
          var we = c[fe];
          if (we == null)
            continue;
          switch (fe) {
            case "children":
              M = we;
              break;
            case "dangerouslySetInnerHTML":
              J = we;
              break;
            case "style":
              g(o, w, we);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              de(fe) && typeof we != "function" && typeof we != "symbol" && o.push(A, fe, z, jt(we), U);
              break;
          }
        }
      return o.push(Pe), lt(o, J, M), M;
    }
    var Gr = `
`;
    function da(o, c, b, w) {
      o.push(Kn(b));
      var M = null, J = null;
      for (var fe in c)
        if (N.call(c, fe)) {
          var we = c[fe];
          if (we == null)
            continue;
          switch (fe) {
            case "children":
              M = we;
              break;
            case "dangerouslySetInnerHTML":
              J = we;
              break;
            default:
              ve(o, w, fe, we);
              break;
          }
        }
      if (o.push(Pe), J != null) {
        if (M != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof J != "object" || !("__html" in J))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Be = J.__html;
        Be != null && (typeof Be == "string" && Be.length > 0 && Be[0] === `
` ? o.push(Gr, Be) : (C(Be), o.push("" + Be)));
      }
      return typeof M == "string" && M[0] === `
` && o.push(Gr), M;
    }
    var rn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, mr = /* @__PURE__ */ new Map();
    function Kn(o) {
      var c = mr.get(o);
      if (c === void 0) {
        if (!rn.test(o))
          throw new Error("Invalid tag: " + o);
        c = "<" + o, mr.set(o, c);
      }
      return c;
    }
    var Tr = "<!DOCTYPE html>";
    function yr(o, c, b, w, M) {
      switch (tt(c, b), Ye(c, b), an(c, b, null), !b.suppressContentEditableWarning && b.contentEditable && b.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), M.insertionMode !== it && M.insertionMode !== kt && c.indexOf("-") === -1 && typeof b.is != "string" && c.toLowerCase() !== c && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", c), c) {
        case "select":
          return dr(o, b, w);
        case "option":
          return fr(o, b, w, M);
        case "textarea":
          return Qo(o, b, w);
        case "input":
          return qr(o, b, w);
        case "menuitem":
          return Ba(o, b, w);
        case "title":
          return el(o, b, w);
        case "listing":
        case "pre":
          return da(o, b, c, w);
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
          return Jo(o, b, c, w);
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
          return M.insertionMode === $e && o.push(Tr), Ha(o, b, c, w);
        default:
          return c.indexOf("-") === -1 && typeof b.is != "string" ? Ha(o, b, c, w) : pr(o, b, c, w);
      }
    }
    var fa = "</", gr = ">";
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
          o.push(fa, c, gr);
      }
    }
    function Wa(o, c) {
      for (var b = c.bootstrapChunks, w = 0; w < b.length - 1; w++)
        u(o, b[w]);
      return w < b.length ? m(o, b[w]) : !0;
    }
    var Va = '<template id="', Ii = '"></template>';
    function $i(o, c, b) {
      u(o, Va), u(o, c.placeholderPrefix);
      var w = b.toString(16);
      return u(o, w), m(o, Ii);
    }
    var Bi = "<!--$-->", tl = '<!--$?--><template id="', nl = '"></template>', pa = "<!--$!-->", ha = "<!--/$-->", ma = "<template", Zr = '"', rl = ' data-dgst="', Qr = ' data-msg="', ja = ' data-stck="', Ua = "></template>";
    function Fr(o, c) {
      return m(o, Bi);
    }
    function Mr(o, c, b) {
      if (u(o, tl), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, b), m(o, nl);
    }
    function ya(o, c, b, w, M) {
      var J;
      return J = m(o, pa), u(o, ma), b && (u(o, rl), u(o, jt(b)), u(o, Zr)), w && (u(o, Qr), u(o, jt(w)), u(o, Zr)), M && (u(o, ja), u(o, jt(M)), u(o, Zr)), J = m(o, Ua), J;
    }
    function Hi(o, c) {
      return m(o, ha);
    }
    function Ka(o, c) {
      return m(o, ha);
    }
    function Wi(o, c) {
      return m(o, ha);
    }
    var ga = '<div hidden id="', Yn = '">', Vi = "</div>", va = '<svg aria-hidden="true" style="display:none" id="', al = '">', ji = "</svg>", xa = '<math aria-hidden="true" style="display:none" id="', Ui = '">', Ki = "</math>", ba = '<table hidden id="', Sa = '">', Yi = "</table>", Xi = '<table hidden><tbody id="', qi = '">', Ya = "</tbody></table>", Gi = '<table hidden><tr id="', v = '">', L = "</tr></table>", I = '<table hidden><colgroup id="', Y = '">', Ee = "</colgroup></table>";
    function Se(o, c, b, w) {
      switch (b.insertionMode) {
        case $e:
        case nt:
          return u(o, ga), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Yn);
        case it:
          return u(o, va), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, al);
        case kt:
          return u(o, xa), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Ui);
        case Lt:
          return u(o, ba), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Sa);
        case Ue:
          return u(o, Xi), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, qi);
        case It:
          return u(o, Gi), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, v);
        case $t:
          return u(o, I), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Y);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Fe(o, c) {
      switch (c.insertionMode) {
        case $e:
        case nt:
          return m(o, Vi);
        case it:
          return m(o, ji);
        case kt:
          return m(o, Ki);
        case Lt:
          return m(o, Yi);
        case Ue:
          return m(o, Ya);
        case It:
          return m(o, L);
        case $t:
          return m(o, Ee);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xe = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", bt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pt = Xe + ';$RS("', sn = '$RS("', Xn = '","', Jn = '")<\/script>';
    function er(o, c, b) {
      u(o, c.startInlineScript), c.sentCompleteSegmentFunction ? u(o, sn) : (c.sentCompleteSegmentFunction = !0, u(o, Pt)), u(o, c.segmentPrefix);
      var w = b.toString(16);
      return u(o, w), u(o, Xn), u(o, c.placeholderPrefix), u(o, w), m(o, Jn);
    }
    var Ea = bt + ';$RC("', Zi = '$RC("', Xa = '","', Pc = '")<\/script>';
    function Rc(o, c, b, w) {
      if (u(o, c.startInlineScript), c.sentCompleteBoundaryFunction ? u(o, Zi) : (c.sentCompleteBoundaryFunction = !0, u(o, Ea)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var M = w.toString(16);
      return u(o, b), u(o, Xa), u(o, c.segmentPrefix), u(o, M), m(o, Pc);
    }
    var Dc = Dt + ';$RX("', _c = '$RX("', Nc = '"', Oc = ")<\/script>", il = ",";
    function Fc(o, c, b, w, M, J) {
      if (u(o, c.startInlineScript), c.sentClientRenderFunction ? u(o, _c) : (c.sentClientRenderFunction = !0, u(o, Dc)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, b), u(o, Nc), (w || M || J) && (u(o, il), u(o, ol(w || ""))), (M || J) && (u(o, il), u(o, ol(M || ""))), J && (u(o, il), u(o, ol(J))), m(o, Oc);
    }
    var Mc = /[<\u2028\u2029]/g;
    function ol(o) {
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
      var b = Ke(c, void 0);
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
    function ll() {
      return {
        insertionMode: nt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ts(o, c, b, w) {
      return b.generateStaticMarkup ? (o.push(jt(c)), !1) : Nn(o, c, b, w);
    }
    function Cs(o, c, b, w) {
      if (!c.generateStaticMarkup)
        return hn(o, c, b, w);
    }
    function sl(o, c) {
      return c.generateStaticMarkup ? !0 : Fr(o);
    }
    function or(o, c, b, w, M) {
      return c.generateStaticMarkup ? !0 : ya(o, c, b, w, M);
    }
    function Ic(o, c) {
      return c.generateStaticMarkup ? !0 : Hi(o);
    }
    function As(o, c) {
      return c.generateStaticMarkup ? !0 : Wi(o);
    }
    var tr = Object.assign, Ls = Symbol.for("react.element"), ul = Symbol.for("react.portal"), Qi = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), qa = Symbol.for("react.provider"), Ga = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), ka = Symbol.for("react.suspense"), cl = Symbol.for("react.suspense_list"), dl = Symbol.for("react.memo"), to = Symbol.for("react.lazy"), $c = Symbol.for("react.scope"), Ps = Symbol.for("react.debug_trace_mode"), Bc = Symbol.for("react.legacy_hidden"), Hc = Symbol.for("react.default_value"), Rs = Symbol.iterator, Ds = "@@iterator";
    function vn(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = Rs && o[Rs] || o[Ds];
      return typeof c == "function" ? c : null;
    }
    function Qa(o, c, b) {
      var w = o.displayName;
      if (w)
        return w;
      var M = c.displayName || c.name || "";
      return M !== "" ? b + "(" + M + ")" : b;
    }
    function fl(o) {
      return o.displayName || "Context";
    }
    function yn(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case Qi:
          return "Fragment";
        case ul:
          return "Portal";
        case eo:
          return "Profiler";
        case Ji:
          return "StrictMode";
        case ka:
          return "Suspense";
        case cl:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Ga:
            var c = o;
            return fl(c) + ".Consumer";
          case qa:
            var b = o;
            return fl(b._context) + ".Provider";
          case Za:
            return Qa(o, o.render, "ForwardRef");
          case dl:
            var w = o.displayName || null;
            return w !== null ? w : yn(o.type) || "Memo";
          case to: {
            var M = o, J = M._payload, fe = M._init;
            try {
              return yn(fe(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var wa = 0, pl, hl, ml, yl, gl, _s, Ns;
    function no() {
    }
    no.__reactDisabledLog = !0;
    function vl() {
      {
        if (wa === 0) {
          pl = console.log, hl = console.info, ml = console.warn, yl = console.error, gl = console.group, _s = console.groupCollapsed, Ns = console.groupEnd;
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
        wa++;
      }
    }
    function Ja() {
      {
        if (wa--, wa === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tr({}, o, {
              value: pl
            }),
            info: tr({}, o, {
              value: hl
            }),
            warn: tr({}, o, {
              value: ml
            }),
            error: tr({}, o, {
              value: yl
            }),
            group: tr({}, o, {
              value: gl
            }),
            groupCollapsed: tr({}, o, {
              value: _s
            }),
            groupEnd: tr({}, o, {
              value: Ns
            })
          });
        }
        wa < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ei = n.ReactCurrentDispatcher, Ta;
    function ti(o, c, b) {
      {
        if (Ta === void 0)
          try {
            throw Error();
          } catch (M) {
            var w = M.stack.trim().match(/\n( *(at )?)/);
            Ta = w && w[1] || "";
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
    function xl(o, c) {
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
      var J;
      J = ei.current, ei.current = null, vl();
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
          for (var we = cr.stack.split(`
`), Be = w.stack.split(`
`), rt = we.length - 1, dt = Be.length - 1; rt >= 1 && dt >= 0 && we[rt] !== Be[dt]; )
            dt--;
          for (; rt >= 1 && dt >= 0; rt--, dt--)
            if (we[rt] !== Be[dt]) {
              if (rt !== 1 || dt !== 1)
                do
                  if (rt--, dt--, dt < 0 || we[rt] !== Be[dt]) {
                    var Tt = `
` + we[rt].replace(" at new ", " at ");
                    return o.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", o.displayName)), typeof o == "function" && ro.set(o, Tt), Tt;
                  }
                while (rt >= 1 && dt >= 0);
              break;
            }
        }
      } finally {
        ni = !1, ei.current = J, Ja(), Error.prepareStackTrace = M;
      }
      var dn = o ? o.displayName || o.name : "", Fn = dn ? ti(dn) : "";
      return typeof o == "function" && ro.set(o, Fn), Fn;
    }
    function bl(o, c, b) {
      return xl(o, !0);
    }
    function Sl(o, c, b) {
      return xl(o, !1);
    }
    function Fs(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ca(o, c, b) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return xl(o, Fs(o));
      if (typeof o == "string")
        return ti(o);
      switch (o) {
        case ka:
          return ti("Suspense");
        case cl:
          return ti("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Za:
            return Sl(o.render);
          case dl:
            return Ca(o.type, c, b);
          case to: {
            var w = o, M = w._payload, J = w._init;
            try {
              return Ca(J(M), c, b);
            } catch {
            }
          }
        }
      return "";
    }
    var El = {}, ao = n.ReactDebugCurrentFrame;
    function Jr(o) {
      if (o) {
        var c = o._owner, b = Ca(o.type, o._source, c ? c.type : null);
        ao.setExtraStackFrame(b);
      } else
        ao.setExtraStackFrame(null);
    }
    function kl(o, c, b, w, M) {
      {
        var J = Function.call.bind(N);
        for (var fe in o)
          if (J(o, fe)) {
            var we = void 0;
            try {
              if (typeof o[fe] != "function") {
                var Be = Error((w || "React class") + ": " + b + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              we = o[fe](c, fe, w, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              we = rt;
            }
            we && !(we instanceof Error) && (Jr(M), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", b, fe, typeof we), Jr(null)), we instanceof Error && !(we.message in El) && (El[we.message] = !0, Jr(M), i("Failed %s type: %s", b, we.message), Jr(null));
          }
      }
    }
    var wl;
    wl = {};
    var zr = {};
    Object.freeze(zr);
    function Ms(o, c) {
      {
        var b = o.contextTypes;
        if (!b)
          return zr;
        var w = {};
        for (var M in b)
          w[M] = c[M];
        {
          var J = yn(o) || "Unknown";
          kl(b, w, "context", J);
        }
        return w;
      }
    }
    function ea(o, c, b, w) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var M = yn(c) || "Unknown";
            wl[M] || (wl[M] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", M, M));
          }
          return b;
        }
        var J = o.getChildContext();
        for (var fe in J)
          if (!(fe in w))
            throw new Error((yn(c) || "Unknown") + '.getChildContext(): key "' + fe + '" is not defined in childContextTypes.');
        {
          var we = yn(c) || "Unknown";
          kl(w, J, "child context", we);
        }
        return tr({}, b, J);
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
    function Cl(o) {
      io(o);
      var c = o.parent;
      c !== null && Cl(c);
    }
    function ai(o) {
      var c = o.parent;
      c !== null && ai(c), oo(o);
    }
    function zs(o, c) {
      io(o);
      var b = o.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      b.depth === c.depth ? ri(b, c) : zs(b, c);
    }
    function Is(o, c) {
      var b = c.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === b.depth ? ri(o, b) : Is(o, b), oo(c);
    }
    function lo(o) {
      var c = vr, b = o;
      c !== b && (c === null ? ai(b) : b === null ? Cl(c) : c.depth === b.depth ? ri(c, b) : c.depth > b.depth ? zs(c, b) : Is(c, b), vr = b);
    }
    function ii(o, c) {
      var b;
      b = o._currentValue2, o._currentValue2 = c, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      var w = vr, M = {
        parent: w,
        depth: w === null ? 0 : w.depth + 1,
        context: o,
        parentValue: b,
        value: c
      };
      return vr = M, M;
    }
    function Al(o) {
      var c = vr;
      if (c === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      c.context !== o && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var b = c.parentValue;
        b === Hc ? c.context._currentValue2 = c.context._defaultValue : c.context._currentValue2 = b, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      }
      return vr = c.parent;
    }
    function Wc() {
      return vr;
    }
    function Aa(o) {
      var c = o._currentValue2;
      return c;
    }
    function so(o) {
      return o._reactInternals;
    }
    function Ll(o, c) {
      o._reactInternals = c;
    }
    var uo = {}, co = {}, oi, fo, La, li, po, Pa, ho, mo, yo;
    {
      oi = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set();
      var $s = /* @__PURE__ */ new Set();
      Pa = function(o, c) {
        if (!(o === null || typeof o == "function")) {
          var b = c + "_" + o;
          $s.has(b) || ($s.add(b), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c, o));
        }
      }, po = function(o, c) {
        if (c === void 0) {
          var b = yn(o) || "Component";
          li.has(b) || (li.add(b), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", b));
        }
      };
    }
    function Bs(o, c) {
      {
        var b = o.constructor, w = b && yn(b) || "ReactClass", M = w + "." + c;
        if (uo[M])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, c, c, w), uo[M] = !0;
      }
    }
    var Hs = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, c, b) {
        var w = so(o);
        w.queue === null ? Bs(o, "setState") : (w.queue.push(c), b != null && Pa(b, "setState"));
      },
      enqueueReplaceState: function(o, c, b) {
        var w = so(o);
        w.replace = !0, w.queue = [c], b != null && Pa(b, "setState");
      },
      enqueueForceUpdate: function(o, c) {
        var b = so(o);
        b.queue === null ? Bs(o, "forceUpdate") : c != null && Pa(c, "setState");
      }
    };
    function Vc(o, c, b, w, M) {
      var J = b(M, w);
      po(c, J);
      var fe = J == null ? w : tr({}, w, J);
      return fe;
    }
    function jc(o, c, b) {
      var w = zr, M = o.contextType;
      if ("contextType" in o) {
        var J = (
          // Allow null for conditional declaration
          M === null || M !== void 0 && M.$$typeof === Ga && M._context === void 0
        );
        if (!J && !yo.has(o)) {
          yo.add(o);
          var fe = "";
          M === void 0 ? fe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof M != "object" ? fe = " However, it is set to a " + typeof M + "." : M.$$typeof === qa ? fe = " Did you accidentally pass the Context.Provider instead?" : M._context !== void 0 ? fe = " Did you accidentally pass the Context.Consumer instead?" : fe = " However, it is set to an object with keys {" + Object.keys(M).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yn(o) || "Component", fe);
        }
      }
      typeof M == "object" && M !== null ? w = Aa(M) : w = b;
      var we = new o(c, w);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (we.state === null || we.state === void 0)) {
          var Be = yn(o) || "Component";
          oi.has(Be) || (oi.add(Be), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Be, we.state === null ? "null" : "undefined", Be));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof we.getSnapshotBeforeUpdate == "function") {
          var rt = null, dt = null, Tt = null;
          if (typeof we.componentWillMount == "function" && we.componentWillMount.__suppressDeprecationWarning !== !0 ? rt = "componentWillMount" : typeof we.UNSAFE_componentWillMount == "function" && (rt = "UNSAFE_componentWillMount"), typeof we.componentWillReceiveProps == "function" && we.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? dt = "componentWillReceiveProps" : typeof we.UNSAFE_componentWillReceiveProps == "function" && (dt = "UNSAFE_componentWillReceiveProps"), typeof we.componentWillUpdate == "function" && we.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Tt = "componentWillUpdate" : typeof we.UNSAFE_componentWillUpdate == "function" && (Tt = "UNSAFE_componentWillUpdate"), rt !== null || dt !== null || Tt !== null) {
            var dn = yn(o) || "Component", Fn = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(dn) || (La.add(dn), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, dn, Fn, rt !== null ? `
  ` + rt : "", dt !== null ? `
  ` + dt : "", Tt !== null ? `
  ` + Tt : ""));
          }
        }
      }
      return we;
    }
    function Ws(o, c, b) {
      {
        var w = yn(c) || "Component", M = o.render;
        M || (c.prototype && typeof c.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", w) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", w)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", w), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", w), o.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", w), o.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", w), o.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", w), c.contextType && c.contextTypes && !mo.has(c) && (mo.add(c), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", w)), typeof o.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", w), c.prototype && c.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yn(c) || "A pure component"), typeof o.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", w), typeof o.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", w), typeof o.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", w), typeof o.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", w);
        var J = o.props !== b;
        o.props !== void 0 && J && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", w, w), o.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", w, w), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !fo.has(c) && (fo.add(c), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yn(c))), typeof o.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof o.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof c.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", w);
        var fe = o.state;
        fe && (typeof fe != "object" || Sn(fe)) && i("%s.state: must be set to an object or null", w), typeof o.getChildContext == "function" && typeof c.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", w);
      }
    }
    function Uc(o, c) {
      var b = c.state;
      if (typeof c.componentWillMount == "function") {
        if (c.componentWillMount.__suppressDeprecationWarning !== !0) {
          var w = yn(o) || "Unknown";
          co[w] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            w
          ), co[w] = !0);
        }
        c.componentWillMount();
      }
      typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), b !== c.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yn(o) || "Component"), Hs.enqueueReplaceState(c, c.state, null));
    }
    function Kc(o, c, b, w) {
      if (o.queue !== null && o.queue.length > 0) {
        var M = o.queue, J = o.replace;
        if (o.queue = null, o.replace = !1, J && M.length === 1)
          c.state = M[0];
        else {
          for (var fe = J ? M[0] : c.state, we = !0, Be = J ? 1 : 0; Be < M.length; Be++) {
            var rt = M[Be], dt = typeof rt == "function" ? rt.call(c, fe, b, w) : rt;
            dt != null && (we ? (we = !1, fe = tr({}, fe, dt)) : tr(fe, dt));
          }
          c.state = fe;
        }
      } else
        o.queue = null;
    }
    function go(o, c, b, w) {
      Ws(o, c, b);
      var M = o.state !== void 0 ? o.state : null;
      o.updater = Hs, o.props = b, o.state = M;
      var J = {
        queue: [],
        replace: !1
      };
      Ll(o, J);
      var fe = c.contextType;
      if (typeof fe == "object" && fe !== null ? o.context = Aa(fe) : o.context = w, o.state === b) {
        var we = yn(c) || "Component";
        ho.has(we) || (ho.add(we), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", we));
      }
      var Be = c.getDerivedStateFromProps;
      typeof Be == "function" && (o.state = Vc(o, c, Be, M, b)), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Uc(c, o), Kc(J, o, b, w));
    }
    var vo = {
      id: 1,
      overflow: ""
    };
    function Yc(o) {
      var c = o.overflow, b = o.id, w = b & ~Xc(b);
      return w.toString(32) + c;
    }
    function Pl(o, c, b) {
      var w = o.id, M = o.overflow, J = xo(w) - 1, fe = w & ~(1 << J), we = b + 1, Be = xo(c) + J;
      if (Be > 30) {
        var rt = J - J % 5, dt = (1 << rt) - 1, Tt = (fe & dt).toString(32), dn = fe >> rt, Fn = J - rt, cr = xo(c) + Fn, cu = we << Fn, du = cu | dn, fu = Tt + M;
        return {
          id: 1 << cr | du,
          overflow: fu
        };
      } else {
        var Fo = we << J, Ay = Fo | fe, Ly = M;
        return {
          id: 1 << Be | Ay,
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
    function Rl(o, c) {
      return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
    }
    var bo = typeof Object.is == "function" ? Object.is : Rl, Ht = null, na = null, ra = null, Qt = null, lr = !1, aa = !1, So = 0, On = null, Ar = 0, ia = 25, xr = !1, oa;
    function Lr() {
      if (Ht === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return xr && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ht;
    }
    function Qc(o, c) {
      if (c === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oa), !1;
      o.length !== c.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oa, "[" + o.join(", ") + "]", "[" + c.join(", ") + "]");
      for (var b = 0; b < c.length && b < o.length; b++)
        if (!bo(o[b], c[b]))
          return !1;
      return !0;
    }
    function Vs() {
      if (Ar > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Eo() {
      return Qt === null ? ra === null ? (lr = !1, ra = Qt = Vs()) : (lr = !0, Qt = ra) : Qt.next === null ? (lr = !1, Qt = Qt.next = Vs()) : (lr = !0, Qt = Qt.next), Qt;
    }
    function Dl(o, c) {
      Ht = c, na = o, xr = !1, So = 0;
    }
    function Jc(o, c, b, w) {
      for (; aa; )
        aa = !1, So = 0, Ar += 1, Qt = null, b = o(c, w);
      return si(), b;
    }
    function js() {
      var o = So !== 0;
      return o;
    }
    function si() {
      xr = !1, Ht = null, na = null, aa = !1, ra = null, Ar = 0, On = null, Qt = null;
    }
    function ed(o) {
      return xr && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Aa(o);
    }
    function Us(o) {
      return oa = "useContext", Lr(), Aa(o);
    }
    function ko(o, c) {
      return typeof c == "function" ? c(o) : c;
    }
    function td(o) {
      return oa = "useState", Ks(
        ko,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Ks(o, c, b) {
      if (o !== ko && (oa = "useReducer"), Ht = Lr(), Qt = Eo(), lr) {
        var w = Qt.queue, M = w.dispatch;
        if (On !== null) {
          var J = On.get(w);
          if (J !== void 0) {
            On.delete(w);
            var fe = Qt.memoizedState, we = J;
            do {
              var Be = we.action;
              xr = !0, fe = o(fe, Be), xr = !1, we = we.next;
            } while (we !== null);
            return Qt.memoizedState = fe, [fe, M];
          }
        }
        return [Qt.memoizedState, M];
      } else {
        xr = !0;
        var rt;
        o === ko ? rt = typeof c == "function" ? c() : c : rt = b !== void 0 ? b(c) : c, xr = !1, Qt.memoizedState = rt;
        var dt = Qt.queue = {
          last: null,
          dispatch: null
        }, Tt = dt.dispatch = ad.bind(null, Ht, dt);
        return [Qt.memoizedState, Tt];
      }
    }
    function Ys(o, c) {
      Ht = Lr(), Qt = Eo();
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
      var J = o();
      return xr = !1, Qt.memoizedState = [J, b], J;
    }
    function nd(o) {
      Ht = Lr(), Qt = Eo();
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
      oa = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ad(o, c, b) {
      if (Ar >= ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === Ht) {
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
          for (var J = M; J.next !== null; )
            J = J.next;
          J.next = w;
        }
      }
    }
    function id(o, c) {
      return Ys(function() {
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
    function Xs() {
      return Lr(), [!1, wo];
    }
    function _l() {
      var o = na, c = Yc(o.treeContext), b = ci;
      if (b === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var w = So++;
      return Ot(b, c, w);
    }
    function ui() {
    }
    var qs = {
      readContext: ed,
      useContext: Us,
      useMemo: Ys,
      useReducer: Ks,
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
      useTransition: Xs,
      useId: _l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: od,
      useSyncExternalStore: ld
    }, ci = null;
    function To(o) {
      ci = o;
    }
    function Nl(o) {
      try {
        var c = "", b = o;
        do {
          switch (b.tag) {
            case 0:
              c += ti(b.type, null, null);
              break;
            case 1:
              c += Sl(b.type, null, null);
              break;
            case 2:
              c += bl(b.type, null, null);
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
    var Ir = n.ReactCurrentDispatcher, Co = n.ReactDebugCurrentFrame, Ao = 0, la = 1, Gs = 2, Ol = 3, sa = 4, ud = 0, Zs = 1, br = 2, cd = 12800;
    function dd(o) {
      return console.error(o), null;
    }
    function di() {
    }
    function Fl(o, c, b, w, M, J, fe, we, Be) {
      var rt = [], dt = /* @__PURE__ */ new Set(), Tt = {
        destination: null,
        responseState: c,
        progressiveChunkSize: w === void 0 ? cd : w,
        status: ud,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: dt,
        pingedTasks: rt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: M === void 0 ? dd : M,
        onAllReady: J === void 0 ? di : J,
        onShellReady: fe === void 0 ? di : fe,
        onShellError: we === void 0 ? di : we,
        onFatalError: Be === void 0 ? di : Be
      }, dn = $r(
        Tt,
        0,
        null,
        b,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      dn.parentFlushed = !0;
      var Fn = fi(Tt, o, null, dn, dt, zr, Tl, vo);
      return rt.push(Fn), Tt;
    }
    function Lo(o, c) {
      var b = o.pingedTasks;
      b.push(c), b.length === 1 && d(function() {
        return su(o);
      });
    }
    function Pr(o, c) {
      return {
        id: Rt,
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
    function fi(o, c, b, w, M, J, fe, we) {
      o.allPendingTasks++, b === null ? o.pendingRootTasks++ : b.pendingTasks++;
      var Be = {
        node: c,
        ping: function() {
          return Lo(o, Be);
        },
        blockedBoundary: b,
        blockedSegment: w,
        abortSet: M,
        legacyContext: J,
        context: fe,
        treeContext: we
      };
      return Be.componentStack = null, M.add(Be), Be;
    }
    function $r(o, c, b, w, M, J) {
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
        textEmbedded: J
      };
    }
    var Sr = null;
    function Ml() {
      return Sr === null || Sr.componentStack === null ? "" : Nl(Sr.componentStack);
    }
    function sr(o, c) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: c
      };
    }
    function Ra(o, c) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: c
      };
    }
    function zl(o, c) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: c
      };
    }
    function ur(o) {
      o.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var Br = null;
    function Il(o, c) {
      {
        var b;
        typeof c == "string" ? b = c : c && typeof c.message == "string" ? b = c.message : b = String(c);
        var w = Br || Ml();
        Br = null, o.errorMessage = b, o.errorComponentStack = w;
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
      w(c), o.destination !== null ? (o.status = br, T(o.destination, c)) : (o.status = Zs, o.fatalError = c);
    }
    function Qs(o, c, b) {
      sr(c, "Suspense");
      var w = c.blockedBoundary, M = c.blockedSegment, J = b.fallback, fe = b.children, we = /* @__PURE__ */ new Set(), Be = Pr(o, we), rt = M.chunks.length, dt = $r(
        o,
        rt,
        Be,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.children.push(dt), M.lastPushedText = !1;
      var Tt = $r(
        o,
        0,
        null,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Tt.parentFlushed = !0, c.blockedBoundary = Be, c.blockedSegment = Tt;
      try {
        if (Ro(o, c, fe), Cs(Tt.chunks, o.responseState, Tt.lastPushedText, Tt.textEmbedded), Tt.status = la, yi(Be, Tt), Be.pendingTasks === 0) {
          ur(c);
          return;
        }
      } catch (Fn) {
        Tt.status = sa, Be.forceClientRender = !0, Be.errorDigest = pi(o, Fn), Il(Be, Fn);
      } finally {
        c.blockedBoundary = w, c.blockedSegment = M;
      }
      var dn = fi(o, J, w, dt, we, c.legacyContext, c.context, c.treeContext);
      dn.componentStack = c.componentStack, o.pingedTasks.push(dn), ur(c);
    }
    function Js(o, c, b, w) {
      sr(c, b);
      var M = c.blockedSegment, J = yr(M.chunks, b, w, o.responseState, M.formatContext);
      M.lastPushedText = !1;
      var fe = M.formatContext;
      M.formatContext = vt(fe, b, w), Ro(o, c, J), M.formatContext = fe, Qn(M.chunks, b), M.lastPushedText = !1, ur(c);
    }
    function fd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function $l(o, c, b, w, M) {
      var J = {};
      Dl(c, J);
      var fe = b(w, M);
      return Jc(b, w, fe, M);
    }
    function hi(o, c, b, w, M) {
      var J = b.render();
      b.props !== M && (Vl || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yn(w) || "a component"), Vl = !0);
      {
        var fe = w.childContextTypes;
        if (fe != null) {
          var we = c.legacyContext, Be = ea(b, w, we, fe);
          c.legacyContext = Be, rr(o, c, J), c.legacyContext = we;
          return;
        }
      }
      rr(o, c, J);
    }
    function eu(o, c, b, w) {
      zl(c, b);
      var M = Ms(b, c.legacyContext), J = jc(b, w, M);
      go(J, b, w, M), hi(o, c, J, b, w), ur(c);
    }
    var Bl = {}, mi = {}, Hl = {}, Wl = {}, Vl = !1, tu = !1, nu = !1, jl = !1;
    function pd(o, c, b, w) {
      var M;
      if (M = Ms(b, c.legacyContext), Ra(c, b), b.prototype && typeof b.prototype.render == "function") {
        var J = yn(b) || "Unknown";
        Bl[J] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", J, J), Bl[J] = !0);
      }
      var fe = $l(o, c, b, w, M), we = js();
      if (typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0) {
        var Be = yn(b) || "Unknown";
        mi[Be] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Be, Be, Be), mi[Be] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0
      ) {
        {
          var rt = yn(b) || "Unknown";
          mi[rt] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", rt, rt, rt), mi[rt] = !0);
        }
        go(fe, b, w, M), hi(o, c, fe, b, w);
      } else if (hd(b), we) {
        var dt = c.treeContext, Tt = 1, dn = 0;
        c.treeContext = Pl(dt, Tt, dn);
        try {
          rr(o, c, fe);
        } finally {
          c.treeContext = dt;
        }
      } else
        rr(o, c, fe);
      ur(c);
    }
    function hd(o) {
      {
        if (o && o.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var c = yn(o) || "Unknown";
          Wl[c] || (i("%s: Function components do not support getDerivedStateFromProps.", c), Wl[c] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var b = yn(o) || "Unknown";
          Hl[b] || (i("%s: Function components do not support contextType.", b), Hl[b] = !0);
        }
      }
    }
    function ru(o, c) {
      if (o && o.defaultProps) {
        var b = tr({}, c), w = o.defaultProps;
        for (var M in w)
          b[M] === void 0 && (b[M] = w[M]);
        return b;
      }
      return c;
    }
    function md(o, c, b, w, M) {
      Ra(c, b.render);
      var J = $l(o, c, b.render, w, M), fe = js();
      if (fe) {
        var we = c.treeContext, Be = 1, rt = 0;
        c.treeContext = Pl(we, Be, rt);
        try {
          rr(o, c, J);
        } finally {
          c.treeContext = we;
        }
      } else
        rr(o, c, J);
      ur(c);
    }
    function yd(o, c, b, w, M) {
      var J = b.type, fe = ru(J, w);
      Kl(o, c, J, fe, M);
    }
    function Ul(o, c, b, w) {
      b._context === void 0 ? b !== b.Consumer && (jl || (jl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : b = b._context;
      var M = w.children;
      typeof M != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var J = Aa(b), fe = M(J);
      rr(o, c, fe);
    }
    function gd(o, c, b, w) {
      var M = b._context, J = w.value, fe = w.children, we;
      we = c.context, c.context = ii(M, J), rr(o, c, fe), c.context = Al(M), we !== c.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(o, c, b, w, M) {
      sr(c, "Lazy");
      var J = b._payload, fe = b._init, we = fe(J), Be = ru(we, w);
      Kl(o, c, we, Be, M), ur(c);
    }
    function Kl(o, c, b, w, M) {
      if (typeof b == "function")
        if (fd(b)) {
          eu(o, c, b, w);
          return;
        } else {
          pd(o, c, b, w);
          return;
        }
      if (typeof b == "string") {
        Js(o, c, b, w);
        return;
      }
      switch (b) {
        case Bc:
        case Ps:
        case Ji:
        case eo:
        case Qi: {
          rr(o, c, w.children);
          return;
        }
        case cl: {
          sr(c, "SuspenseList"), rr(o, c, w.children), ur(c);
          return;
        }
        case $c:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ka: {
          Qs(o, c, w);
          return;
        }
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case Za: {
            md(o, c, b, w, M);
            return;
          }
          case dl: {
            yd(o, c, b, w, M);
            return;
          }
          case qa: {
            gd(o, c, b, w);
            return;
          }
          case Ga: {
            Ul(o, c, b, w);
            return;
          }
          case to: {
            nr(o, c, b, w);
            return;
          }
        }
      var J = "";
      throw (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (b == null ? b : typeof b) + "." + J));
    }
    function au(o, c) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (tu || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), tu = !0), o.entries === c && (nu || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), nu = !0);
    }
    function rr(o, c, b) {
      try {
        return Yl(o, c, b);
      } catch (w) {
        throw typeof w == "object" && w !== null && typeof w.then == "function" || (Br = Br !== null ? Br : Ml()), w;
      }
    }
    function Yl(o, c, b) {
      if (c.node = b, typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ls: {
            var w = b, M = w.type, J = w.props, fe = w.ref;
            Kl(o, c, M, J, fe);
            return;
          }
          case ul:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case to: {
            var we = b, Be = we._payload, rt = we._init, dt;
            try {
              dt = rt(Be);
            } catch (Fo) {
              throw typeof Fo == "object" && Fo !== null && typeof Fo.then == "function" && sr(c, "Lazy"), Fo;
            }
            rr(o, c, dt);
            return;
          }
        }
        if (Sn(b)) {
          iu(o, c, b);
          return;
        }
        var Tt = vn(b);
        if (Tt) {
          au(b, Tt);
          var dn = Tt.call(b);
          if (dn) {
            var Fn = dn.next();
            if (!Fn.done) {
              var cr = [];
              do
                cr.push(Fn.value), Fn = dn.next();
              while (!Fn.done);
              iu(o, c, cr);
              return;
            }
            return;
          }
        }
        var cu = Object.prototype.toString.call(b);
        throw new Error("Objects are not valid as a React child (found: " + (cu === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : cu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof b == "string") {
        var du = c.blockedSegment;
        du.lastPushedText = Ts(c.blockedSegment.chunks, b, o.responseState, du.lastPushedText);
        return;
      }
      if (typeof b == "number") {
        var fu = c.blockedSegment;
        fu.lastPushedText = Ts(c.blockedSegment.chunks, "" + b, o.responseState, fu.lastPushedText);
        return;
      }
      typeof b == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function iu(o, c, b) {
      for (var w = b.length, M = 0; M < w; M++) {
        var J = c.treeContext;
        c.treeContext = Pl(J, w, M);
        try {
          Ro(o, c, b[M]);
        } finally {
          c.treeContext = J;
        }
      }
    }
    function vd(o, c, b) {
      var w = c.blockedSegment, M = w.chunks.length, J = $r(
        o,
        M,
        null,
        w.formatContext,
        // Adopt the parent segment's leading text embed
        w.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      w.children.push(J), w.lastPushedText = !1;
      var fe = fi(o, c.node, c.blockedBoundary, J, c.abortSet, c.legacyContext, c.context, c.treeContext);
      c.componentStack !== null && (fe.componentStack = c.componentStack.parent);
      var we = fe.ping;
      b.then(we, we);
    }
    function Ro(o, c, b) {
      var w = c.blockedSegment.formatContext, M = c.legacyContext, J = c.context, fe = null;
      fe = c.componentStack;
      try {
        return rr(o, c, b);
      } catch (we) {
        if (si(), typeof we == "object" && we !== null && typeof we.then == "function") {
          vd(o, c, we), c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = J, lo(J), c.componentStack = fe;
          return;
        } else
          throw c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = J, lo(J), c.componentStack = fe, we;
      }
    }
    function Do(o, c, b, w) {
      var M = pi(o, w);
      if (c === null ? Po(o, w) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = M, Il(c, w), c.parentFlushed && o.clientRenderedBoundaries.push(c))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var J = o.onAllReady;
        J();
      }
    }
    function ou(o) {
      var c = this, b = o.blockedBoundary, w = o.blockedSegment;
      w.status = Ol, gi(c, b, w);
    }
    function lu(o, c, b) {
      var w = o.blockedBoundary, M = o.blockedSegment;
      if (M.status = Ol, w === null)
        c.allPendingTasks--, c.status !== br && (c.status = br, c.destination !== null && x(c.destination));
      else {
        if (w.pendingTasks--, !w.forceClientRender) {
          w.forceClientRender = !0;
          var J = b === void 0 ? new Error("The render was aborted by the server without a reason.") : b;
          w.errorDigest = c.onError(J);
          {
            var fe = "The server did not finish this Suspense boundary: ";
            J && typeof J.message == "string" ? J = fe + J.message : J = fe + String(J);
            var we = Sr;
            Sr = o;
            try {
              Il(w, J);
            } finally {
              Sr = we;
            }
          }
          w.parentFlushed && c.clientRenderedBoundaries.push(w);
        }
        if (w.fallbackAbortableTasks.forEach(function(rt) {
          return lu(rt, c, b);
        }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0) {
          var Be = c.onAllReady;
          Be();
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
          b.parentFlushed && b.status === la && yi(c, b), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ou, o), c.fallbackAbortableTasks.clear();
        else if (b.parentFlushed && b.status === la) {
          yi(c, b);
          var M = c.completedSegments;
          M.length === 1 && c.parentFlushed && o.partialBoundaries.push(c);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var J = o.onAllReady;
        J();
      }
    }
    function _o(o, c) {
      var b = c.blockedSegment;
      if (b.status === Ao) {
        lo(c.context);
        var w = null;
        w = Sr, Sr = c;
        try {
          rr(o, c, c.node), Cs(b.chunks, o.responseState, b.lastPushedText, b.textEmbedded), c.abortSet.delete(c), b.status = la, gi(o, c.blockedBoundary, b);
        } catch (J) {
          if (si(), typeof J == "object" && J !== null && typeof J.then == "function") {
            var M = c.ping;
            J.then(M, M);
          } else
            c.abortSet.delete(c), b.status = sa, Do(o, c.blockedBoundary, b, J);
        } finally {
          Sr = w;
        }
      }
    }
    function su(o) {
      if (o.status !== br) {
        var c = Wc(), b = Ir.current;
        Ir.current = qs;
        var w;
        w = Co.getCurrentStack, Co.getCurrentStack = Ml;
        var M = ci;
        To(o.responseState);
        try {
          var J = o.pingedTasks, fe;
          for (fe = 0; fe < J.length; fe++) {
            var we = J[fe];
            _o(o, we);
          }
          J.splice(0, fe), o.destination !== null && Oo(o, o.destination);
        } catch (Be) {
          pi(o, Be), Po(o, Be);
        } finally {
          To(M), Ir.current = b, Co.getCurrentStack = w, b === qs && lo(c);
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
          b.status = Gs;
          for (var M = !0, J = b.chunks, fe = 0, we = b.children, Be = 0; Be < we.length; Be++) {
            for (var rt = we[Be]; fe < rt.index; fe++)
              u(c, J[fe]);
            M = xi(o, c, rt);
          }
          for (; fe < J.length - 1; fe++)
            u(c, J[fe]);
          return fe < J.length && (M = m(c, J[fe])), M;
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
        return or(c, o.responseState, w.errorDigest, w.errorMessage, w.errorComponentStack), vi(o, c, b), As(c, o.responseState);
      if (w.pendingTasks > 0) {
        w.rootSegmentID = o.nextSegmentId++, w.completedSegments.length > 0 && o.partialBoundaries.push(w);
        var M = w.id = Nt(o.responseState);
        return Mr(c, o.responseState, M), vi(o, c, b), Ka(c, o.responseState);
      } else {
        if (w.byteSize > o.progressiveChunkSize)
          return w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), Mr(c, o.responseState, w.id), vi(o, c, b), Ka(c, o.responseState);
        sl(c, o.responseState);
        var J = w.completedSegments;
        if (J.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var fe = J[0];
        return xi(o, c, fe), Ic(c, o.responseState);
      }
    }
    function xd(o, c, b) {
      return Fc(c, o.responseState, b.id, b.errorDigest, b.errorMessage, b.errorComponentStack);
    }
    function Xl(o, c, b) {
      return Se(c, o.responseState, b.formatContext, b.id), xi(o, c, b), Fe(c, b.formatContext);
    }
    function No(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var J = w[M];
        uu(o, c, b, J);
      }
      return w.length = 0, Rc(c, o.responseState, b.id, b.rootSegmentID);
    }
    function bd(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var J = w[M];
        if (!uu(o, c, b, J))
          return M++, w.splice(0, M), !1;
      }
      return w.splice(0, M), !0;
    }
    function uu(o, c, b, w) {
      if (w.status === Gs)
        return !0;
      var M = w.id;
      if (M === -1) {
        var J = w.id = b.rootSegmentID;
        if (J === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Xl(o, c, w);
      } else
        return Xl(o, c, w), er(c, o.responseState, M);
    }
    function Oo(o, c) {
      try {
        var b = o.completedRootSegment;
        b !== null && o.pendingRootTasks === 0 && (xi(o, c, b), o.completedRootSegment = null, Wa(c, o.responseState));
        var w = o.clientRenderedBoundaries, M;
        for (M = 0; M < w.length; M++) {
          var J = w[M];
          if (!xd(o, c, J)) {
            o.destination = null, M++, w.splice(0, M);
            return;
          }
        }
        w.splice(0, M);
        var fe = o.completedBoundaries;
        for (M = 0; M < fe.length; M++) {
          var we = fe[M];
          if (!No(o, c, we)) {
            o.destination = null, M++, fe.splice(0, M);
            return;
          }
        }
        fe.splice(0, M);
        var Be = o.partialBoundaries;
        for (M = 0; M < Be.length; M++) {
          var rt = Be[M];
          if (!bd(o, c, rt)) {
            o.destination = null, M++, Be.splice(0, M);
            return;
          }
        }
        Be.splice(0, M);
        var dt = o.completedBoundaries;
        for (M = 0; M < dt.length; M++) {
          var Tt = dt[M];
          if (!No(o, c, Tt)) {
            o.destination = null, M++, dt.splice(0, M);
            return;
          }
        }
        dt.splice(0, M);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), x(c));
      }
    }
    function Sd(o) {
      d(function() {
        return su(o);
      });
    }
    function s(o, c) {
      if (o.status === Zs) {
        o.status = br, T(c, o.fatalError);
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
          return lu(w, o, c);
        }), b.clear(), o.destination !== null && Oo(o, o.destination);
      } catch (w) {
        pi(o, w), Po(o, w);
      }
    }
    function E() {
    }
    function _(o, c, b, w) {
      var M = !1, J = null, fe = "", we = {
        push: function(Tt) {
          return Tt !== null && (fe += Tt), !0;
        },
        destroy: function(Tt) {
          M = !0, J = Tt;
        }
      }, Be = !1;
      function rt() {
        Be = !0;
      }
      var dt = Fl(o, zc(b, c ? c.identifierPrefix : void 0), ll(), 1 / 0, E, void 0, rt, void 0, void 0);
      if (Sd(dt), p(dt, w), s(dt, we), M)
        throw J;
      if (!Be)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return fe;
    }
    function W(o, c) {
      return _(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ie(o, c) {
      return _(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function he() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Te() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ci.renderToNodeStream = he, Ci.renderToStaticMarkup = ie, Ci.renderToStaticNodeStream = Te, Ci.renderToString = W, Ci.version = t;
  }()), Ci;
}
var Au = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;
function IS() {
  return Lh || (Lh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          E[_ - 1] = arguments[_];
        l("warn", s, E);
      }
    }
    function i(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), _ = 1; _ < p; _++)
          E[_ - 1] = arguments[_];
        l("error", s, E);
      }
    }
    function l(s, p, E) {
      {
        var _ = n.ReactDebugCurrentFrame, W = _.getStackAddendum();
        W !== "" && (p += "%s", E = E.concat([W]));
        var ie = E.map(function(he) {
          return String(he);
        });
        ie.unshift("Warning: " + p), Function.prototype.apply.call(console[s], console, ie);
      }
    }
    function d(s) {
      s();
    }
    var f = 512, u = null, m = 0;
    function y(s) {
      u = new Uint8Array(f), m = 0;
    }
    function x(s, p) {
      if (p.length !== 0) {
        if (p.length > f) {
          m > 0 && (s.enqueue(new Uint8Array(u.buffer, 0, m)), u = new Uint8Array(f), m = 0), s.enqueue(p);
          return;
        }
        var E = p, _ = u.length - m;
        _ < E.length && (_ === 0 ? s.enqueue(u) : (u.set(E.subarray(0, _), m), s.enqueue(u), E = E.subarray(_)), u = new Uint8Array(f), m = 0), u.set(E, m), m += E.length;
      }
    }
    function S(s, p) {
      return x(s, p), !0;
    }
    function R(s) {
      u && m > 0 && (s.enqueue(new Uint8Array(u.buffer, 0, m)), u = null, m = 0);
    }
    function T(s) {
      s.close();
    }
    var F = new TextEncoder();
    function k(s) {
      return F.encode(s);
    }
    function h(s) {
      return F.encode(s);
    }
    function P(s, p) {
      typeof s.error == "function" ? s.error(p) : s.close();
    }
    function O(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, E = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function C(s) {
      try {
        return N(s), !1;
      } catch {
        return !0;
      }
    }
    function N(s) {
      return "" + s;
    }
    function D(s, p) {
      if (C(s))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(s)), N(s);
    }
    function B(s, p) {
      if (C(s))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(s)), N(s);
    }
    function H(s) {
      if (C(s))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(s)), N(s);
    }
    var re = Object.prototype.hasOwnProperty, oe = 0, ne = 1, j = 2, X = 3, G = 4, V = 5, K = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Q = new RegExp("^[" + ee + "][" + de + "]*$"), te = {}, q = {};
    function Z(s) {
      return re.call(q, s) ? !0 : re.call(te, s) ? !1 : Q.test(s) ? (q[s] = !0, !0) : (te[s] = !0, i("Invalid attribute name: `%s`", s), !1);
    }
    function Me(s, p, E, _) {
      if (E !== null && E.type === oe)
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
          var W = s.toLowerCase().slice(0, 5);
          return W !== "data-" && W !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ke(s) {
      return Le.hasOwnProperty(s) ? Le[s] : null;
    }
    function pe(s, p, E, _, W, ie, he) {
      this.acceptsBooleans = p === j || p === X || p === G, this.attributeName = _, this.attributeNamespace = W, this.mustUseProperty = E, this.propertyName = s, this.type = p, this.sanitizeURL = ie, this.removeEmptyString = he;
    }
    var Le = {}, We = [
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
    We.forEach(function(s) {
      Le[s] = new pe(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
      var p = s[0], E = s[1];
      Le[p] = new pe(
        p,
        ne,
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
      Le[s] = new pe(
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
      Le[s] = new pe(
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
      Le[s] = new pe(
        s,
        X,
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
      Le[s] = new pe(
        s,
        X,
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
      Le[s] = new pe(
        s,
        G,
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
      Le[s] = new pe(
        s,
        K,
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
      Le[s] = new pe(
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
    });
    var Ze = /[\-\:]([a-z])/g, Ae = function(s) {
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
      var p = s.replace(Ze, Ae);
      Le[p] = new pe(
        p,
        ne,
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
      var p = s.replace(Ze, Ae);
      Le[p] = new pe(
        p,
        ne,
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
      var p = s.replace(Ze, Ae);
      Le[p] = new pe(
        p,
        ne,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(s) {
      Le[s] = new pe(
        s,
        ne,
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
    var me = "xlinkHref";
    Le[me] = new pe(
      "xlinkHref",
      ne,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(s) {
      Le[s] = new pe(
        s,
        ne,
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
    var _e = {
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
    function ae(s, p) {
      return s + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var se = ["Webkit", "ms", "Moz", "O"];
    Object.keys(_e).forEach(function(s) {
      se.forEach(function(p) {
        _e[ae(p, s)] = _e[s];
      });
    });
    var xe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ze(s, p) {
      xe[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ve(s, p) {
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
    var qe = {
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
    }, Qe = {}, tt = new RegExp("^(aria)-[" + de + "]*$"), et = new RegExp("^(aria)[A-Z][" + de + "]*$");
    function Ye(s, p) {
      {
        if (re.call(Qe, p) && Qe[p])
          return !0;
        if (et.test(p)) {
          var E = "aria-" + p.slice(4).toLowerCase(), _ = qe.hasOwnProperty(E) ? E : null;
          if (_ == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), Qe[p] = !0, !0;
          if (p !== _)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, _), Qe[p] = !0, !0;
        }
        if (tt.test(p)) {
          var W = p.toLowerCase(), ie = qe.hasOwnProperty(W) ? W : null;
          if (ie == null)
            return Qe[p] = !0, !1;
          if (p !== ie)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ie), Qe[p] = !0, !0;
        }
      }
      return !0;
    }
    function Re(s, p) {
      {
        var E = [];
        for (var _ in p) {
          var W = Ye(s, _);
          W || E.push(_);
        }
        var ie = E.map(function(he) {
          return "`" + he + "`";
        }).join(", ");
        E.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s) : E.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s);
      }
    }
    function Ce(s, p) {
      Ve(s, p) || Re(s, p);
    }
    var at = !1;
    function Ge(s, p) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        p != null && p.value === null && !at && (at = !0, s === "select" && p.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
      }
    }
    var ft = {
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
    }, ht = function() {
    };
    {
      var yt = {}, _t = /^on./, an = /^on[^A-Z]/, on = new RegExp("^(aria)-[" + de + "]*$"), Kt = new RegExp("^(aria)[A-Z][" + de + "]*$");
      ht = function(s, p, E, _) {
        if (re.call(yt, p) && yt[p])
          return !0;
        var W = p.toLowerCase();
        if (W === "onfocusin" || W === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yt[p] = !0, !0;
        if (_ != null) {
          var ie = _.registrationNameDependencies, he = _.possibleRegistrationNames;
          if (ie.hasOwnProperty(p))
            return !0;
          var Te = he.hasOwnProperty(W) ? he[W] : null;
          if (Te != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", p, Te), yt[p] = !0, !0;
          if (_t.test(p))
            return i("Unknown event handler property `%s`. It will be ignored.", p), yt[p] = !0, !0;
        } else if (_t.test(p))
          return an.test(p) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), yt[p] = !0, !0;
        if (on.test(p) || Kt.test(p))
          return !0;
        if (W === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yt[p] = !0, !0;
        if (W === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yt[p] = !0, !0;
        if (W === "is" && E !== null && E !== void 0 && typeof E != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), yt[p] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), yt[p] = !0, !0;
        var o = ke(p), c = o !== null && o.type === oe;
        if (ft.hasOwnProperty(W)) {
          var b = ft[W];
          if (b !== p)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", p, b), yt[p] = !0, !0;
        } else if (!c && p !== W)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, W), yt[p] = !0, !0;
        return typeof E == "boolean" && Me(p, E, o, !1) ? (E ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, p, p, E, p) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, p, p, E, p, p, p), yt[p] = !0, !0) : c ? !0 : Me(p, E, o, !1) ? (yt[p] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === X && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, p, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, E), yt[p] = !0), !0);
      };
    }
    var Jt = function(s, p, E) {
      {
        var _ = [];
        for (var W in p) {
          var ie = ht(s, W, p[W], E);
          ie || _.push(W);
        }
        var he = _.map(function(Te) {
          return "`" + Te + "`";
        }).join(", ");
        _.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", he, s) : _.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", he, s);
      }
    };
    function Yt(s, p, E) {
      Ve(s, p) || Jt(s, p, E);
    }
    var At = function() {
    };
    {
      var Mt = /^(?:webkit|moz|o)[A-Z]/, Vt = /^-ms-/, Ie = /-(.)/g, en = /;\s*$/, wt = {}, zt = {}, mt = !1, tn = !1, xn = function(s) {
        return s.replace(Ie, function(p, E) {
          return E.toUpperCase();
        });
      }, Ft = function(s) {
        wt.hasOwnProperty(s) && wt[s] || (wt[s] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          s,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xn(s.replace(Vt, "ms-"))
        ));
      }, nn = function(s) {
        wt.hasOwnProperty(s) && wt[s] || (wt[s] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
      }, Ln = function(s, p) {
        zt.hasOwnProperty(p) && zt[p] || (zt[p] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, s, p.replace(en, "")));
      }, Xt = function(s, p) {
        mt || (mt = !0, i("`NaN` is an invalid value for the `%s` css style property.", s));
      }, jt = function(s, p) {
        tn || (tn = !0, i("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      At = function(s, p) {
        s.indexOf("-") > -1 ? Ft(s) : Mt.test(s) ? nn(s) : en.test(p) && Ln(s, p), typeof p == "number" && (isNaN(p) ? Xt(s, p) : isFinite(p) || jt(s, p));
      };
    }
    var Tn = At, Hn = /["'&<>]/;
    function Mn(s) {
      H(s);
      var p = "" + s, E = Hn.exec(p);
      if (!E)
        return p;
      var _, W = "", ie, he = 0;
      for (ie = E.index; ie < p.length; ie++) {
        switch (p.charCodeAt(ie)) {
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
        he !== ie && (W += p.substring(he, ie)), he = ie + 1, W += _;
      }
      return he !== ie ? W + p.substring(he, ie) : W;
    }
    function qt(s) {
      return typeof s == "boolean" || typeof s == "number" ? "" + s : Mn(s);
    }
    var Wn = /([A-Z])/g, Vn = /^ms-/;
    function Cn(s) {
      return s.replace(Wn, "-$1").toLowerCase().replace(Vn, "-ms-");
    }
    var Sn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, jn = !1;
    function zn(s) {
      !jn && Sn.test(s) && (jn = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(s)));
    }
    var Un = Array.isArray;
    function De(s) {
      return Un(s);
    }
    var ct = h("<script>"), pt = h("<\/script>"), $ = h('<script src="'), Oe = h('<script type="module" src="'), Ke = h('" async=""><\/script>');
    function $e(s) {
      return H(s), ("" + s).replace(nt, it);
    }
    var nt = /(<\/|<)(s)(cript)/gi, it = function(s, p, E, _) {
      return "" + p + (E === "s" ? "\\u0073" : "\\u0053") + _;
    };
    function kt(s, p, E, _, W) {
      var ie = s === void 0 ? "" : s, he = p === void 0 ? ct : h('<script nonce="' + qt(p) + '">'), Te = [];
      if (E !== void 0 && Te.push(he, k($e(E)), pt), _ !== void 0)
        for (var o = 0; o < _.length; o++)
          Te.push($, k(qt(_[o])), Ke);
      if (W !== void 0)
        for (var c = 0; c < W.length; c++)
          Te.push(Oe, k(qt(W[c])), Ke);
      return {
        bootstrapChunks: Te,
        startInlineScript: he,
        placeholderPrefix: h(ie + "P:"),
        segmentPrefix: h(ie + "S:"),
        boundaryPrefix: ie + "B:",
        idPrefix: ie,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Lt = 0, Ue = 1, It = 2, $t = 3, Bt = 4, vt = 5, Rt = 6, Nt = 7;
    function Ot(s, p) {
      return {
        insertionMode: s,
        selectedValue: p
      };
    }
    function Gt(s) {
      var p = s === "http://www.w3.org/2000/svg" ? It : s === "http://www.w3.org/1998/Math/MathML" ? $t : Lt;
      return Ot(p, null);
    }
    function pn(s, p, E) {
      switch (p) {
        case "select":
          return Ot(Ue, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return Ot(It, null);
        case "math":
          return Ot($t, null);
        case "foreignObject":
          return Ot(Ue, null);
        case "table":
          return Ot(Bt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ot(vt, null);
        case "colgroup":
          return Ot(Nt, null);
        case "tr":
          return Ot(Rt, null);
      }
      return s.insertionMode >= Bt || s.insertionMode === Lt ? Ot(Ue, null) : s;
    }
    var Nn = null;
    function hn(s) {
      var p = s.nextSuspenseID++;
      return h(s.boundaryPrefix + p.toString(16));
    }
    function ln(s, p, E) {
      var _ = s.idPrefix, W = ":" + _ + "R" + p;
      return E > 0 && (W += "H" + E.toString(32)), W + ":";
    }
    function mn(s) {
      return qt(s);
    }
    var cn = h("<!-- -->");
    function En(s, p, E, _) {
      return p === "" ? _ : (_ && s.push(cn), s.push(k(mn(p))), !0);
    }
    function qn(s, p, E, _) {
      E && _ && s.push(cn);
    }
    var g = /* @__PURE__ */ new Map();
    function A(s) {
      var p = g.get(s);
      if (p !== void 0)
        return p;
      var E = h(qt(Cn(s)));
      return g.set(s, E), E;
    }
    var z = h(' style="'), U = h(":"), be = h(";");
    function ve(s, p, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var _ = !0;
      for (var W in E)
        if (re.call(E, W)) {
          var ie = E[W];
          if (!(ie == null || typeof ie == "boolean" || ie === "")) {
            var he = void 0, Te = void 0, o = W.indexOf("--") === 0;
            o ? (he = k(qt(W)), B(ie, W), Te = k(qt(("" + ie).trim()))) : (Tn(W, ie), he = A(W), typeof ie == "number" ? ie !== 0 && !re.call(_e, W) ? Te = k(ie + "px") : Te = k("" + ie) : (B(ie, W), Te = k(qt(("" + ie).trim())))), _ ? (_ = !1, s.push(z, he, U, Te)) : s.push(be, he, U, Te);
          }
        }
      _ || s.push(lt);
    }
    var Pe = h(" "), je = h('="'), lt = h('"'), gt = h('=""');
    function le(s, p, E, _) {
      switch (E) {
        case "style": {
          ve(s, p, _);
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
        var W = ke(E);
        if (W !== null) {
          switch (typeof _) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!W.acceptsBooleans)
                return;
          }
          var ie = W.attributeName, he = k(ie);
          switch (W.type) {
            case X:
              _ && s.push(Pe, he, gt);
              return;
            case G:
              _ === !0 ? s.push(Pe, he, gt) : _ === !1 || s.push(Pe, he, je, k(qt(_)), lt);
              return;
            case V:
              isNaN(_) || s.push(Pe, he, je, k(qt(_)), lt);
              break;
            case K:
              !isNaN(_) && _ >= 1 && s.push(Pe, he, je, k(qt(_)), lt);
              break;
            default:
              W.sanitizeURL && (D(_, ie), _ = "" + _, zn(_)), s.push(Pe, he, je, k(qt(_)), lt);
          }
        } else if (Z(E)) {
          switch (typeof _) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Te = E.toLowerCase().slice(0, 5);
              if (Te !== "data-" && Te !== "aria-")
                return;
            }
          }
          s.push(Pe, k(E), je, k(qt(_)), lt);
        }
      }
    }
    var ue = h(">"), ye = h("/>");
    function Ne(s, p, E) {
      if (p != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var _ = p.__html;
        _ != null && (H(_), s.push(k("" + _)));
      }
    }
    var xt = !1, gn = !1, kn = !1, dr = !1, In = !1, wr = !1, fr = !1;
    function qr(s, p) {
      {
        var E = s[p];
        if (E != null) {
          var _ = De(E);
          s.multiple && !_ ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !s.multiple && _ && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Qo(s, p, E) {
      ze("select", p), qr(p, "value"), qr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !kn && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), kn = !0), s.push(Qn("select"));
      var _ = null, W = null;
      for (var ie in p)
        if (re.call(p, ie)) {
          var he = p[ie];
          if (he == null)
            continue;
          switch (ie) {
            case "children":
              _ = he;
              break;
            case "dangerouslySetInnerHTML":
              W = he;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              le(s, E, ie, he);
              break;
          }
        }
      return s.push(ue), Ne(s, W, _), _;
    }
    function Jo(s) {
      var p = "";
      return e.Children.forEach(s, function(E) {
        E != null && (p += E, !In && typeof E != "string" && typeof E != "number" && (In = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ba = h(' selected=""');
    function el(s, p, E, _) {
      var W = _.selectedValue;
      s.push(Qn("option"));
      var ie = null, he = null, Te = null, o = null;
      for (var c in p)
        if (re.call(p, c)) {
          var b = p[c];
          if (b == null)
            continue;
          switch (c) {
            case "children":
              ie = b;
              break;
            case "selected":
              Te = b, fr || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), fr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = b;
              break;
            case "value":
              he = b;
            default:
              le(s, E, c, b);
              break;
          }
        }
      if (W != null) {
        var w;
        if (he !== null ? (D(he, "value"), w = "" + he) : (o !== null && (wr || (wr = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), w = Jo(ie)), De(W))
          for (var M = 0; M < W.length; M++) {
            D(W[M], "value");
            var J = "" + W[M];
            if (J === w) {
              s.push(Ba);
              break;
            }
          }
        else
          D(W, "select.value"), "" + W === w && s.push(Ba);
      } else
        Te && s.push(Ba);
      return s.push(ue), Ne(s, o, ie), ie;
    }
    function Ha(s, p, E) {
      ze("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !gn && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), gn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !xt && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), xt = !0), s.push(Qn("input"));
      var _ = null, W = null, ie = null, he = null;
      for (var Te in p)
        if (re.call(p, Te)) {
          var o = p[Te];
          if (o == null)
            continue;
          switch (Te) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              he = o;
              break;
            case "defaultValue":
              W = o;
              break;
            case "checked":
              ie = o;
              break;
            case "value":
              _ = o;
              break;
            default:
              le(s, E, Te, o);
              break;
          }
        }
      return ie !== null ? le(s, E, "checked", ie) : he !== null && le(s, E, "checked", he), _ !== null ? le(s, E, "value", _) : W !== null && le(s, E, "value", W), s.push(ye), null;
    }
    function pr(s, p, E) {
      ze("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !dr && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), dr = !0), s.push(Qn("textarea"));
      var _ = null, W = null, ie = null;
      for (var he in p)
        if (re.call(p, he)) {
          var Te = p[he];
          if (Te == null)
            continue;
          switch (he) {
            case "children":
              ie = Te;
              break;
            case "value":
              _ = Te;
              break;
            case "defaultValue":
              W = Te;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              le(s, E, he, Te);
              break;
          }
        }
      if (_ === null && W !== null && (_ = W), s.push(ue), ie != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), _ != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (De(ie)) {
          if (ie.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          H(ie[0]), _ = "" + ie[0];
        }
        H(ie), _ = "" + ie;
      }
      return typeof _ == "string" && _[0] === `
` && s.push(Tr), _ !== null && (D(_, "value"), s.push(k(mn("" + _)))), null;
    }
    function Gr(s, p, E, _) {
      s.push(Qn(E));
      for (var W in p)
        if (re.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              le(s, _, W, ie);
              break;
          }
        }
      return s.push(ye), null;
    }
    function da(s, p, E) {
      s.push(Qn("menuitem"));
      for (var _ in p)
        if (re.call(p, _)) {
          var W = p[_];
          if (W == null)
            continue;
          switch (_) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              le(s, E, _, W);
              break;
          }
        }
      return s.push(ue), null;
    }
    function rn(s, p, E) {
      s.push(Qn("title"));
      var _ = null;
      for (var W in p)
        if (re.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
              _ = ie;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              le(s, E, W, ie);
              break;
          }
        }
      s.push(ue);
      {
        var he = Array.isArray(_) && _.length < 2 ? _[0] || null : _;
        Array.isArray(_) && _.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : he != null && he.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : he != null && typeof he != "string" && typeof he != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return _;
    }
    function mr(s, p, E, _) {
      s.push(Qn(E));
      var W = null, ie = null;
      for (var he in p)
        if (re.call(p, he)) {
          var Te = p[he];
          if (Te == null)
            continue;
          switch (he) {
            case "children":
              W = Te;
              break;
            case "dangerouslySetInnerHTML":
              ie = Te;
              break;
            default:
              le(s, _, he, Te);
              break;
          }
        }
      return s.push(ue), Ne(s, ie, W), typeof W == "string" ? (s.push(k(mn(W))), null) : W;
    }
    function Kn(s, p, E, _) {
      s.push(Qn(E));
      var W = null, ie = null;
      for (var he in p)
        if (re.call(p, he)) {
          var Te = p[he];
          if (Te == null)
            continue;
          switch (he) {
            case "children":
              W = Te;
              break;
            case "dangerouslySetInnerHTML":
              ie = Te;
              break;
            case "style":
              ve(s, _, Te);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Z(he) && typeof Te != "function" && typeof Te != "symbol" && s.push(Pe, k(he), je, k(qt(Te)), lt);
              break;
          }
        }
      return s.push(ue), Ne(s, ie, W), W;
    }
    var Tr = h(`
`);
    function yr(s, p, E, _) {
      s.push(Qn(E));
      var W = null, ie = null;
      for (var he in p)
        if (re.call(p, he)) {
          var Te = p[he];
          if (Te == null)
            continue;
          switch (he) {
            case "children":
              W = Te;
              break;
            case "dangerouslySetInnerHTML":
              ie = Te;
              break;
            default:
              le(s, _, he, Te);
              break;
          }
        }
      if (s.push(ue), ie != null) {
        if (W != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ie != "object" || !("__html" in ie))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = ie.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(Tr, k(o)) : (H(o), s.push(k("" + o))));
      }
      return typeof W == "string" && W[0] === `
` && s.push(Tr), W;
    }
    var fa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gr = /* @__PURE__ */ new Map();
    function Qn(s) {
      var p = gr.get(s);
      if (p === void 0) {
        if (!fa.test(s))
          throw new Error("Invalid tag: " + s);
        p = h("<" + s), gr.set(s, p);
      }
      return p;
    }
    var Wa = h("<!DOCTYPE html>");
    function Va(s, p, E, _, W) {
      switch (Ce(p, E), Ge(p, E), Yt(p, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), W.insertionMode !== It && W.insertionMode !== $t && p.indexOf("-") === -1 && typeof E.is != "string" && p.toLowerCase() !== p && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Qo(s, E, _);
        case "option":
          return el(s, E, _, W);
        case "textarea":
          return pr(s, E, _);
        case "input":
          return Ha(s, E, _);
        case "menuitem":
          return da(s, E, _);
        case "title":
          return rn(s, E, _);
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
          return W.insertionMode === Lt && s.push(Wa), mr(s, E, p, _);
        default:
          return p.indexOf("-") === -1 && typeof E.is != "string" ? mr(s, E, p, _) : Kn(s, E, p, _);
      }
    }
    var Ii = h("</"), $i = h(">");
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
          s.push(Ii, k(p), $i);
      }
    }
    function tl(s, p) {
      for (var E = p.bootstrapChunks, _ = 0; _ < E.length - 1; _++)
        x(s, E[_]);
      return _ < E.length ? S(s, E[_]) : !0;
    }
    var nl = h('<template id="'), pa = h('"></template>');
    function ha(s, p, E) {
      x(s, nl), x(s, p.placeholderPrefix);
      var _ = k(E.toString(16));
      return x(s, _), S(s, pa);
    }
    var ma = h("<!--$-->"), Zr = h('<!--$?--><template id="'), rl = h('"></template>'), Qr = h("<!--$!-->"), ja = h("<!--/$-->"), Ua = h("<template"), Fr = h('"'), Mr = h(' data-dgst="'), ya = h(' data-msg="'), Hi = h(' data-stck="'), Ka = h("></template>");
    function Wi(s, p) {
      return S(s, ma);
    }
    function ga(s, p, E) {
      if (x(s, Zr), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(s, E), S(s, rl);
    }
    function Yn(s, p, E, _, W) {
      var ie;
      return ie = S(s, Qr), x(s, Ua), E && (x(s, Mr), x(s, k(qt(E))), x(s, Fr)), _ && (x(s, ya), x(s, k(qt(_))), x(s, Fr)), W && (x(s, Hi), x(s, k(qt(W))), x(s, Fr)), ie = S(s, Ka), ie;
    }
    function Vi(s, p) {
      return S(s, ja);
    }
    function va(s, p) {
      return S(s, ja);
    }
    function al(s, p) {
      return S(s, ja);
    }
    var ji = h('<div hidden id="'), xa = h('">'), Ui = h("</div>"), Ki = h('<svg aria-hidden="true" style="display:none" id="'), ba = h('">'), Sa = h("</svg>"), Yi = h('<math aria-hidden="true" style="display:none" id="'), Xi = h('">'), qi = h("</math>"), Ya = h('<table hidden id="'), Gi = h('">'), v = h("</table>"), L = h('<table hidden><tbody id="'), I = h('">'), Y = h("</tbody></table>"), Ee = h('<table hidden><tr id="'), Se = h('">'), Fe = h("</tr></table>"), Xe = h('<table hidden><colgroup id="'), bt = h('">'), Dt = h("</colgroup></table>");
    function Pt(s, p, E, _) {
      switch (E.insertionMode) {
        case Lt:
        case Ue:
          return x(s, ji), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, xa);
        case It:
          return x(s, Ki), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, ba);
        case $t:
          return x(s, Yi), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, Xi);
        case Bt:
          return x(s, Ya), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, Gi);
        case vt:
          return x(s, L), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, I);
        case Rt:
          return x(s, Ee), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, Se);
        case Nt:
          return x(s, Xe), x(s, p.segmentPrefix), x(s, k(_.toString(16))), S(s, bt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function sn(s, p) {
      switch (p.insertionMode) {
        case Lt:
        case Ue:
          return S(s, Ui);
        case It:
          return S(s, Sa);
        case $t:
          return S(s, qi);
        case Bt:
          return S(s, v);
        case vt:
          return S(s, Y);
        case Rt:
          return S(s, Fe);
        case Nt:
          return S(s, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ea = h(Xn + ';$RS("'), Zi = h('$RS("'), Xa = h('","'), Pc = h('")<\/script>');
    function Rc(s, p, E) {
      x(s, p.startInlineScript), p.sentCompleteSegmentFunction ? x(s, Zi) : (p.sentCompleteSegmentFunction = !0, x(s, Ea)), x(s, p.segmentPrefix);
      var _ = k(E.toString(16));
      return x(s, _), x(s, Xa), x(s, p.placeholderPrefix), x(s, _), S(s, Pc);
    }
    var Dc = h(Jn + ';$RC("'), _c = h('$RC("'), Nc = h('","'), Oc = h('")<\/script>');
    function il(s, p, E, _) {
      if (x(s, p.startInlineScript), p.sentCompleteBoundaryFunction ? x(s, _c) : (p.sentCompleteBoundaryFunction = !0, x(s, Dc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var W = k(_.toString(16));
      return x(s, E), x(s, Nc), x(s, p.segmentPrefix), x(s, W), S(s, Oc);
    }
    var Fc = h(er + ';$RX("'), Mc = h('$RX("'), ol = h('"'), zc = h(")<\/script>"), ll = h(",");
    function Ts(s, p, E, _, W, ie) {
      if (x(s, p.startInlineScript), p.sentClientRenderFunction ? x(s, Mc) : (p.sentClientRenderFunction = !0, x(s, Fc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(s, E), x(s, ol), (_ || W || ie) && (x(s, ll), x(s, k(sl(_ || "")))), (W || ie) && (x(s, ll), x(s, k(sl(W || "")))), ie && (x(s, ll), x(s, k(sl(ie)))), S(s, zc);
    }
    var Cs = /[<\u2028\u2029]/g;
    function sl(s) {
      var p = JSON.stringify(s);
      return p.replace(Cs, function(E) {
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
    var or = Object.assign, Ic = Symbol.for("react.element"), As = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), Ls = Symbol.for("react.strict_mode"), ul = Symbol.for("react.profiler"), Qi = Symbol.for("react.provider"), Ji = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), qa = Symbol.for("react.suspense"), Ga = Symbol.for("react.suspense_list"), Za = Symbol.for("react.memo"), ka = Symbol.for("react.lazy"), cl = Symbol.for("react.scope"), dl = Symbol.for("react.debug_trace_mode"), to = Symbol.for("react.legacy_hidden"), $c = Symbol.for("react.default_value"), Ps = Symbol.iterator, Bc = "@@iterator";
    function Hc(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = Ps && s[Ps] || s[Bc];
      return typeof p == "function" ? p : null;
    }
    function Rs(s, p, E) {
      var _ = s.displayName;
      if (_)
        return _;
      var W = p.displayName || p.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function Ds(s) {
      return s.displayName || "Context";
    }
    function vn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case tr:
          return "Fragment";
        case As:
          return "Portal";
        case ul:
          return "Profiler";
        case Ls:
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
            return Ds(p) + ".Consumer";
          case Qi:
            var E = s;
            return Ds(E._context) + ".Provider";
          case eo:
            return Rs(s, s.render, "ForwardRef");
          case Za:
            var _ = s.displayName || null;
            return _ !== null ? _ : vn(s.type) || "Memo";
          case ka: {
            var W = s, ie = W._payload, he = W._init;
            try {
              return vn(he(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qa = 0, fl, yn, wa, pl, hl, ml, yl;
    function gl() {
    }
    gl.__reactDisabledLog = !0;
    function _s() {
      {
        if (Qa === 0) {
          fl = console.log, yn = console.info, wa = console.warn, pl = console.error, hl = console.group, ml = console.groupCollapsed, yl = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: gl,
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
              value: fl
            }),
            info: or({}, s, {
              value: yn
            }),
            warn: or({}, s, {
              value: wa
            }),
            error: or({}, s, {
              value: pl
            }),
            group: or({}, s, {
              value: hl
            }),
            groupCollapsed: or({}, s, {
              value: ml
            }),
            groupEnd: or({}, s, {
              value: yl
            })
          });
        }
        Qa < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var no = n.ReactCurrentDispatcher, vl;
    function Ja(s, p, E) {
      {
        if (vl === void 0)
          try {
            throw Error();
          } catch (W) {
            var _ = W.stack.trim().match(/\n( *(at )?)/);
            vl = _ && _[1] || "";
          }
        return `
` + vl + s;
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
      var _;
      ei = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = no.current, no.current = null, _s();
      try {
        if (p) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (fe) {
              _ = fe;
            }
            Reflect.construct(s, [], he);
          } else {
            try {
              he.call();
            } catch (fe) {
              _ = fe;
            }
            s.call(he.prototype);
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
          for (var Te = fe.stack.split(`
`), o = _.stack.split(`
`), c = Te.length - 1, b = o.length - 1; c >= 1 && b >= 0 && Te[c] !== o[b]; )
            b--;
          for (; c >= 1 && b >= 0; c--, b--)
            if (Te[c] !== o[b]) {
              if (c !== 1 || b !== 1)
                do
                  if (c--, b--, b < 0 || Te[c] !== o[b]) {
                    var w = `
` + Te[c].replace(" at new ", " at ");
                    return s.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", s.displayName)), typeof s == "function" && Ta.set(s, w), w;
                  }
                while (c >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ei = !1, no.current = ie, Ns(), Error.prepareStackTrace = W;
      }
      var M = s ? s.displayName || s.name : "", J = M ? Ja(M) : "";
      return typeof s == "function" && Ta.set(s, J), J;
    }
    function ro(s, p, E) {
      return ni(s, !0);
    }
    function Os(s, p, E) {
      return ni(s, !1);
    }
    function xl(s) {
      var p = s.prototype;
      return !!(p && p.isReactComponent);
    }
    function bl(s, p, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ni(s, xl(s));
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
            return Os(s.render);
          case Za:
            return bl(s.type, p, E);
          case ka: {
            var _ = s, W = _._payload, ie = _._init;
            try {
              return bl(ie(W), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Sl = {}, Fs = n.ReactDebugCurrentFrame;
    function Ca(s) {
      if (s) {
        var p = s._owner, E = bl(s.type, s._source, p ? p.type : null);
        Fs.setExtraStackFrame(E);
      } else
        Fs.setExtraStackFrame(null);
    }
    function El(s, p, E, _, W) {
      {
        var ie = Function.call.bind(re);
        for (var he in s)
          if (ie(s, he)) {
            var Te = void 0;
            try {
              if (typeof s[he] != "function") {
                var o = Error((_ || "React class") + ": " + E + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Te = s[he](p, he, _, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              Te = c;
            }
            Te && !(Te instanceof Error) && (Ca(W), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", E, he, typeof Te), Ca(null)), Te instanceof Error && !(Te.message in Sl) && (Sl[Te.message] = !0, Ca(W), i("Failed %s type: %s", E, Te.message), Ca(null));
          }
      }
    }
    var ao;
    ao = {};
    var Jr = {};
    Object.freeze(Jr);
    function kl(s, p) {
      {
        var E = s.contextTypes;
        if (!E)
          return Jr;
        var _ = {};
        for (var W in E)
          _[W] = p[W];
        {
          var ie = vn(s) || "Unknown";
          El(E, _, "context", ie);
        }
        return _;
      }
    }
    function wl(s, p, E, _) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var W = vn(p) || "Unknown";
            ao[W] || (ao[W] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", W, W));
          }
          return E;
        }
        var ie = s.getChildContext();
        for (var he in ie)
          if (!(he in _))
            throw new Error((vn(p) || "Unknown") + '.getChildContext(): key "' + he + '" is not defined in childContextTypes.');
        {
          var Te = vn(p) || "Unknown";
          El(_, ie, "child context", Te);
        }
        return or({}, E, ie);
      }
    }
    var zr;
    zr = {};
    var Ms = null, ea = null;
    function ta(s) {
      s.context._currentValue = s.parentValue;
    }
    function Tl(s) {
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
    function Cl(s, p) {
      var E = p.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === E.depth ? vr(s, E) : Cl(s, E), Tl(p);
    }
    function ai(s) {
      var p = ea, E = s;
      p !== E && (p === null ? oo(E) : E === null ? io(p) : p.depth === E.depth ? vr(p, E) : p.depth > E.depth ? ri(p, E) : Cl(p, E), ea = E);
    }
    function zs(s, p) {
      var E;
      E = s._currentValue, s._currentValue = p, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
      var _ = ea, W = {
        parent: _,
        depth: _ === null ? 0 : _.depth + 1,
        context: s,
        parentValue: E,
        value: p
      };
      return ea = W, W;
    }
    function Is(s) {
      var p = ea;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== s && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var E = p.parentValue;
        E === $c ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
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
    function Al(s) {
      return s._reactInternals;
    }
    function Wc(s, p) {
      s._reactInternals = p;
    }
    var Aa = {}, so = {}, Ll, uo, co, oi, fo, La, li, po, Pa;
    {
      Ll = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), Pa = /* @__PURE__ */ new Set();
      var ho = /* @__PURE__ */ new Set();
      La = function(s, p) {
        if (!(s === null || typeof s == "function")) {
          var E = p + "_" + s;
          ho.has(E) || (ho.add(E), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, s));
        }
      }, fo = function(s, p) {
        if (p === void 0) {
          var E = vn(s) || "Component";
          oi.has(E) || (oi.add(E), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", E));
        }
      };
    }
    function mo(s, p) {
      {
        var E = s.constructor, _ = E && vn(E) || "ReactClass", W = _ + "." + p;
        if (Aa[W])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, _), Aa[W] = !0;
      }
    }
    var yo = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, p, E) {
        var _ = Al(s);
        _.queue === null ? mo(s, "setState") : (_.queue.push(p), E != null && La(E, "setState"));
      },
      enqueueReplaceState: function(s, p, E) {
        var _ = Al(s);
        _.replace = !0, _.queue = [p], E != null && La(E, "setState");
      },
      enqueueForceUpdate: function(s, p) {
        var E = Al(s);
        E.queue === null ? mo(s, "forceUpdate") : p != null && La(p, "setState");
      }
    };
    function $s(s, p, E, _, W) {
      var ie = E(W, _);
      fo(p, ie);
      var he = ie == null ? _ : or({}, _, ie);
      return he;
    }
    function Bs(s, p, E) {
      var _ = Jr, W = s.contextType;
      if ("contextType" in s) {
        var ie = (
          // Allow null for conditional declaration
          W === null || W !== void 0 && W.$$typeof === Ji && W._context === void 0
        );
        if (!ie && !Pa.has(s)) {
          Pa.add(s);
          var he = "";
          W === void 0 ? he = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof W != "object" ? he = " However, it is set to a " + typeof W + "." : W.$$typeof === Qi ? he = " Did you accidentally pass the Context.Provider instead?" : W._context !== void 0 ? he = " Did you accidentally pass the Context.Consumer instead?" : he = " However, it is set to an object with keys {" + Object.keys(W).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", vn(s) || "Component", he);
        }
      }
      typeof W == "object" && W !== null ? _ = ii(W) : _ = E;
      var Te = new s(p, _);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Te.state === null || Te.state === void 0)) {
          var o = vn(s) || "Component";
          Ll.has(o) || (Ll.add(o), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Te.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Te.getSnapshotBeforeUpdate == "function") {
          var c = null, b = null, w = null;
          if (typeof Te.componentWillMount == "function" && Te.componentWillMount.__suppressDeprecationWarning !== !0 ? c = "componentWillMount" : typeof Te.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof Te.componentWillReceiveProps == "function" && Te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof Te.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof Te.componentWillUpdate == "function" && Te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? w = "componentWillUpdate" : typeof Te.UNSAFE_componentWillUpdate == "function" && (w = "UNSAFE_componentWillUpdate"), c !== null || b !== null || w !== null) {
            var M = vn(s) || "Component", J = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            co.has(M) || (co.add(M), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, J, c !== null ? `
  ` + c : "", b !== null ? `
  ` + b : "", w !== null ? `
  ` + w : ""));
          }
        }
      }
      return Te;
    }
    function Hs(s, p, E) {
      {
        var _ = vn(p) || "Component", W = s.render;
        W || (p.prototype && typeof p.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", _) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", _)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", _), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", _), s.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", _), s.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", _), s.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", _), p.contextType && p.contextTypes && !po.has(p) && (po.add(p), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", _)), typeof s.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", _), p.prototype && p.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", vn(p) || "A pure component"), typeof s.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", _), typeof s.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", _), typeof s.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", _), typeof s.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", _);
        var ie = s.props !== E;
        s.props !== void 0 && ie && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", _, _), s.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", _, _), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !uo.has(p) && (uo.add(p), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", vn(p))), typeof s.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", _), typeof s.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", _), typeof p.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", _);
        var he = s.state;
        he && (typeof he != "object" || De(he)) && i("%s.state: must be set to an object or null", _), typeof s.getChildContext == "function" && typeof p.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", _);
      }
    }
    function Vc(s, p) {
      var E = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var _ = vn(s) || "Unknown";
          so[_] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            _
          ), so[_] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), E !== p.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vn(s) || "Component"), yo.enqueueReplaceState(p, p.state, null));
    }
    function jc(s, p, E, _) {
      if (s.queue !== null && s.queue.length > 0) {
        var W = s.queue, ie = s.replace;
        if (s.queue = null, s.replace = !1, ie && W.length === 1)
          p.state = W[0];
        else {
          for (var he = ie ? W[0] : p.state, Te = !0, o = ie ? 1 : 0; o < W.length; o++) {
            var c = W[o], b = typeof c == "function" ? c.call(p, he, E, _) : c;
            b != null && (Te ? (Te = !1, he = or({}, he, b)) : or(he, b));
          }
          p.state = he;
        }
      } else
        s.queue = null;
    }
    function Ws(s, p, E, _) {
      Hs(s, p, E);
      var W = s.state !== void 0 ? s.state : null;
      s.updater = yo, s.props = E, s.state = W;
      var ie = {
        queue: [],
        replace: !1
      };
      Wc(s, ie);
      var he = p.contextType;
      if (typeof he == "object" && he !== null ? s.context = ii(he) : s.context = _, s.state === E) {
        var Te = vn(p) || "Component";
        li.has(Te) || (li.add(Te), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Te));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (s.state = $s(s, p, o, W, E)), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (Vc(p, s), jc(ie, s, E, _));
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
      var _ = s.id, W = s.overflow, ie = vo(_) - 1, he = _ & ~(1 << ie), Te = E + 1, o = vo(p) + ie;
      if (o > 30) {
        var c = ie - ie % 5, b = (1 << c) - 1, w = (he & b).toString(32), M = he >> c, J = ie - c, fe = vo(p) + J, we = Te << J, Be = we | M, rt = w + W;
        return {
          id: 1 << fe | Be,
          overflow: rt
        };
      } else {
        var dt = Te << ie, Tt = dt | he, dn = W;
        return {
          id: 1 << o | Tt,
          overflow: dn
        };
      }
    }
    function vo(s) {
      return 32 - Pl(s);
    }
    function Yc(s) {
      return 1 << vo(s) - 1;
    }
    var Pl = Math.clz32 ? Math.clz32 : qc, xo = Math.log, Xc = Math.LN2;
    function qc(s) {
      var p = s >>> 0;
      return p === 0 ? 32 : 31 - (xo(p) / Xc | 0) | 0;
    }
    function Gc(s, p) {
      return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
    }
    var Zc = typeof Object.is == "function" ? Object.is : Gc, Cr = null, Rl = null, bo = null, Ht = null, na = !1, ra = !1, Qt = 0, lr = null, aa = 0, So = 25, On = !1, Ar;
    function ia() {
      if (Cr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return On && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Cr;
    }
    function xr(s, p) {
      if (p === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ar), !1;
      s.length !== p.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

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
      return Ht === null ? bo === null ? (na = !1, bo = Ht = oa()) : (na = !0, Ht = bo) : Ht.next === null ? (na = !1, Ht = Ht.next = oa()) : (na = !0, Ht = Ht.next), Ht;
    }
    function Qc(s, p) {
      Cr = p, Rl = s, On = !1, Qt = 0;
    }
    function Vs(s, p, E, _) {
      for (; ra; )
        ra = !1, Qt = 0, aa += 1, Ht = null, E = s(p, _);
      return Dl(), E;
    }
    function Eo() {
      var s = Qt !== 0;
      return s;
    }
    function Dl() {
      On = !1, Cr = null, Rl = null, ra = !1, bo = null, aa = 0, lr = null, Ht = null;
    }
    function Jc(s) {
      return On && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ii(s);
    }
    function js(s) {
      return Ar = "useContext", ia(), ii(s);
    }
    function si(s, p) {
      return typeof p == "function" ? p(s) : p;
    }
    function ed(s) {
      return Ar = "useState", Us(
        si,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function Us(s, p, E) {
      if (s !== si && (Ar = "useReducer"), Cr = ia(), Ht = Lr(), na) {
        var _ = Ht.queue, W = _.dispatch;
        if (lr !== null) {
          var ie = lr.get(_);
          if (ie !== void 0) {
            lr.delete(_);
            var he = Ht.memoizedState, Te = ie;
            do {
              var o = Te.action;
              On = !0, he = s(he, o), On = !1, Te = Te.next;
            } while (Te !== null);
            return Ht.memoizedState = he, [he, W];
          }
        }
        return [Ht.memoizedState, W];
      } else {
        On = !0;
        var c;
        s === si ? c = typeof p == "function" ? p() : p : c = E !== void 0 ? E(p) : p, On = !1, Ht.memoizedState = c;
        var b = Ht.queue = {
          last: null,
          dispatch: null
        }, w = b.dispatch = Ys.bind(null, Cr, b);
        return [Ht.memoizedState, w];
      }
    }
    function ko(s, p) {
      Cr = ia(), Ht = Lr();
      var E = p === void 0 ? null : p;
      if (Ht !== null) {
        var _ = Ht.memoizedState;
        if (_ !== null && E !== null) {
          var W = _[1];
          if (xr(E, W))
            return _[0];
        }
      }
      On = !0;
      var ie = s();
      return On = !1, Ht.memoizedState = [ie, E], ie;
    }
    function td(s) {
      Cr = ia(), Ht = Lr();
      var p = Ht.memoizedState;
      if (p === null) {
        var E = {
          current: s
        };
        return Object.seal(E), Ht.memoizedState = E, E;
      } else
        return p;
    }
    function Ks(s, p) {
      Ar = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ys(s, p, E) {
      if (aa >= So)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (s === Cr) {
        ra = !0;
        var _ = {
          action: E,
          next: null
        };
        lr === null && (lr = /* @__PURE__ */ new Map());
        var W = lr.get(p);
        if (W === void 0)
          lr.set(p, _);
        else {
          for (var ie = W; ie.next !== null; )
            ie = ie.next;
          ie.next = _;
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
      var s = Rl, p = Kc(s.treeContext), E = _l;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var _ = Qt++;
      return ln(E, p, _);
    }
    function wo() {
    }
    var Xs = {
      readContext: Jc,
      useContext: js,
      useMemo: ko,
      useReducer: Us,
      useRef: td,
      useState: ed,
      useInsertionEffect: wo,
      useLayoutEffect: Ks,
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
    }, _l = null;
    function ui(s) {
      _l = s;
    }
    function qs(s) {
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
      } catch (_) {
        return `
Error generating stack: ` + _.message + `
` + _.stack;
      }
    }
    var ci = n.ReactCurrentDispatcher, To = n.ReactDebugCurrentFrame, Nl = 0, Ir = 1, Co = 2, Ao = 3, la = 4, Gs = 0, Ol = 1, sa = 2, ud = 12800;
    function Zs(s) {
      return console.error(s), null;
    }
    function br() {
    }
    function cd(s, p, E, _, W, ie, he, Te, o) {
      var c = [], b = /* @__PURE__ */ new Set(), w = {
        destination: null,
        responseState: p,
        progressiveChunkSize: _ === void 0 ? ud : _,
        status: Gs,
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
        onError: W === void 0 ? Zs : W,
        onAllReady: ie === void 0 ? br : ie,
        onShellReady: he === void 0 ? br : he,
        onShellError: Te === void 0 ? br : Te,
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
      var J = Fl(w, s, null, M, b, Jr, Ms, Uc);
      return c.push(J), w;
    }
    function dd(s, p) {
      var E = s.pingedTasks;
      E.push(p), E.length === 1 && d(function() {
        return yi(s);
      });
    }
    function di(s, p) {
      return {
        id: Nn,
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
    function Fl(s, p, E, _, W, ie, he, Te) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return dd(s, o);
        },
        blockedBoundary: E,
        blockedSegment: _,
        abortSet: W,
        legacyContext: ie,
        context: he,
        treeContext: Te
      };
      return o.componentStack = null, W.add(o), o;
    }
    function Lo(s, p, E, _, W, ie) {
      return {
        status: Nl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: _,
        boundary: E,
        lastPushedText: W,
        textEmbedded: ie
      };
    }
    var Pr = null;
    function fi() {
      return Pr === null || Pr.componentStack === null ? "" : qs(Pr.componentStack);
    }
    function $r(s, p) {
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
    function Ml(s, p) {
      s.componentStack = {
        tag: 2,
        parent: s.componentStack,
        type: p
      };
    }
    function sr(s) {
      s.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : s.componentStack = s.componentStack.parent;
    }
    var Ra = null;
    function zl(s, p) {
      {
        var E;
        typeof p == "string" ? E = p : p && typeof p.message == "string" ? E = p.message : E = String(p);
        var _ = Ra || fi();
        Ra = null, s.errorMessage = E, s.errorComponentStack = _;
      }
    }
    function ur(s, p) {
      var E = s.onError(p);
      if (E != null && typeof E != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof E + '" instead');
      return E;
    }
    function Br(s, p) {
      var E = s.onShellError;
      E(p);
      var _ = s.onFatalError;
      _(p), s.destination !== null ? (s.status = sa, P(s.destination, p)) : (s.status = Ol, s.fatalError = p);
    }
    function Il(s, p, E) {
      $r(p, "Suspense");
      var _ = p.blockedBoundary, W = p.blockedSegment, ie = E.fallback, he = E.children, Te = /* @__PURE__ */ new Set(), o = di(s, Te), c = W.chunks.length, b = Lo(
        s,
        c,
        o,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.children.push(b), W.lastPushedText = !1;
      var w = Lo(
        s,
        0,
        null,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      w.parentFlushed = !0, p.blockedBoundary = o, p.blockedSegment = w;
      try {
        if (Yl(s, p, he), qn(w.chunks, s.responseState, w.lastPushedText, w.textEmbedded), w.status = Ir, Do(o, w), o.pendingTasks === 0) {
          sr(p);
          return;
        }
      } catch (J) {
        w.status = la, o.forceClientRender = !0, o.errorDigest = ur(s, J), zl(o, J);
      } finally {
        p.blockedBoundary = _, p.blockedSegment = W;
      }
      var M = Fl(s, ie, _, b, Te, p.legacyContext, p.context, p.treeContext);
      M.componentStack = p.componentStack, s.pingedTasks.push(M), sr(p);
    }
    function pi(s, p, E, _) {
      $r(p, E);
      var W = p.blockedSegment, ie = Va(W.chunks, E, _, s.responseState, W.formatContext);
      W.lastPushedText = !1;
      var he = W.formatContext;
      W.formatContext = pn(he, E, _), Yl(s, p, ie), W.formatContext = he, Bi(W.chunks, E), W.lastPushedText = !1, sr(p);
    }
    function Po(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function Qs(s, p, E, _, W) {
      var ie = {};
      Qc(p, ie);
      var he = E(_, W);
      return Vs(E, _, he, W);
    }
    function Js(s, p, E, _, W) {
      var ie = E.render();
      E.props !== W && (mi || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vn(_) || "a component"), mi = !0);
      {
        var he = _.childContextTypes;
        if (he != null) {
          var Te = p.legacyContext, o = wl(E, _, Te, he);
          p.legacyContext = o, nr(s, p, ie), p.legacyContext = Te;
          return;
        }
      }
      nr(s, p, ie);
    }
    function fd(s, p, E, _) {
      Ml(p, E);
      var W = kl(E, p.legacyContext), ie = Bs(E, _, W);
      Ws(ie, E, _, W), Js(s, p, ie, E, _), sr(p);
    }
    var $l = {}, hi = {}, eu = {}, Bl = {}, mi = !1, Hl = !1, Wl = !1, Vl = !1;
    function tu(s, p, E, _) {
      var W;
      if (W = kl(E, p.legacyContext), Sr(p, E), E.prototype && typeof E.prototype.render == "function") {
        var ie = vn(E) || "Unknown";
        $l[ie] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ie, ie), $l[ie] = !0);
      }
      var he = Qs(s, p, E, _, W), Te = Eo();
      if (typeof he == "object" && he !== null && typeof he.render == "function" && he.$$typeof === void 0) {
        var o = vn(E) || "Unknown";
        hi[o] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", o, o, o), hi[o] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof he == "object" && he !== null && typeof he.render == "function" && he.$$typeof === void 0
      ) {
        {
          var c = vn(E) || "Unknown";
          hi[c] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", c, c, c), hi[c] = !0);
        }
        Ws(he, E, _, W), Js(s, p, he, E, _);
      } else if (nu(E), Te) {
        var b = p.treeContext, w = 1, M = 0;
        p.treeContext = go(b, w, M);
        try {
          nr(s, p, he);
        } finally {
          p.treeContext = b;
        }
      } else
        nr(s, p, he);
      sr(p);
    }
    function nu(s) {
      {
        if (s && s.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", s.displayName || s.name || "Component"), typeof s.getDerivedStateFromProps == "function") {
          var p = vn(s) || "Unknown";
          Bl[p] || (i("%s: Function components do not support getDerivedStateFromProps.", p), Bl[p] = !0);
        }
        if (typeof s.contextType == "object" && s.contextType !== null) {
          var E = vn(s) || "Unknown";
          eu[E] || (i("%s: Function components do not support contextType.", E), eu[E] = !0);
        }
      }
    }
    function jl(s, p) {
      if (s && s.defaultProps) {
        var E = or({}, p), _ = s.defaultProps;
        for (var W in _)
          E[W] === void 0 && (E[W] = _[W]);
        return E;
      }
      return p;
    }
    function pd(s, p, E, _, W) {
      Sr(p, E.render);
      var ie = Qs(s, p, E.render, _, W), he = Eo();
      if (he) {
        var Te = p.treeContext, o = 1, c = 0;
        p.treeContext = go(Te, o, c);
        try {
          nr(s, p, ie);
        } finally {
          p.treeContext = Te;
        }
      } else
        nr(s, p, ie);
      sr(p);
    }
    function hd(s, p, E, _, W) {
      var ie = E.type, he = jl(ie, _);
      Ul(s, p, ie, he, W);
    }
    function ru(s, p, E, _) {
      E._context === void 0 ? E !== E.Consumer && (Vl || (Vl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var W = _.children;
      typeof W != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ie = ii(E), he = W(ie);
      nr(s, p, he);
    }
    function md(s, p, E, _) {
      var W = E._context, ie = _.value, he = _.children, Te;
      Te = p.context, p.context = zs(W, ie), nr(s, p, he), p.context = Is(W), Te !== p.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function yd(s, p, E, _, W) {
      $r(p, "Lazy");
      var ie = E._payload, he = E._init, Te = he(ie), o = jl(Te, _);
      Ul(s, p, Te, o, W), sr(p);
    }
    function Ul(s, p, E, _, W) {
      if (typeof E == "function")
        if (Po(E)) {
          fd(s, p, E, _);
          return;
        } else {
          tu(s, p, E, _);
          return;
        }
      if (typeof E == "string") {
        pi(s, p, E, _);
        return;
      }
      switch (E) {
        case to:
        case dl:
        case Ls:
        case ul:
        case tr: {
          nr(s, p, _.children);
          return;
        }
        case Ga: {
          $r(p, "SuspenseList"), nr(s, p, _.children), sr(p);
          return;
        }
        case cl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case qa: {
          Il(s, p, _);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case eo: {
            pd(s, p, E, _, W);
            return;
          }
          case Za: {
            hd(s, p, E, _, W);
            return;
          }
          case Qi: {
            md(s, p, E, _);
            return;
          }
          case Ji: {
            ru(s, p, E, _);
            return;
          }
          case ka: {
            yd(s, p, E, _);
            return;
          }
        }
      var ie = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + ie));
    }
    function gd(s, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Hl || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Hl = !0), s.entries === p && (Wl || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wl = !0);
    }
    function nr(s, p, E) {
      try {
        return Kl(s, p, E);
      } catch (_) {
        throw typeof _ == "object" && _ !== null && typeof _.then == "function" || (Ra = Ra !== null ? Ra : fi()), _;
      }
    }
    function Kl(s, p, E) {
      if (p.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ic: {
            var _ = E, W = _.type, ie = _.props, he = _.ref;
            Ul(s, p, W, ie, he);
            return;
          }
          case As:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ka: {
            var Te = E, o = Te._payload, c = Te._init, b;
            try {
              b = c(o);
            } catch (dt) {
              throw typeof dt == "object" && dt !== null && typeof dt.then == "function" && $r(p, "Lazy"), dt;
            }
            nr(s, p, b);
            return;
          }
        }
        if (De(E)) {
          au(s, p, E);
          return;
        }
        var w = Hc(E);
        if (w) {
          gd(E, w);
          var M = w.call(E);
          if (M) {
            var J = M.next();
            if (!J.done) {
              var fe = [];
              do
                fe.push(J.value), J = M.next();
              while (!J.done);
              au(s, p, fe);
              return;
            }
            return;
          }
        }
        var we = Object.prototype.toString.call(E);
        throw new Error("Objects are not valid as a React child (found: " + (we === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : we) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof E == "string") {
        var Be = p.blockedSegment;
        Be.lastPushedText = En(p.blockedSegment.chunks, E, s.responseState, Be.lastPushedText);
        return;
      }
      if (typeof E == "number") {
        var rt = p.blockedSegment;
        rt.lastPushedText = En(p.blockedSegment.chunks, "" + E, s.responseState, rt.lastPushedText);
        return;
      }
      typeof E == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function au(s, p, E) {
      for (var _ = E.length, W = 0; W < _; W++) {
        var ie = p.treeContext;
        p.treeContext = go(ie, _, W);
        try {
          Yl(s, p, E[W]);
        } finally {
          p.treeContext = ie;
        }
      }
    }
    function rr(s, p, E) {
      var _ = p.blockedSegment, W = _.chunks.length, ie = Lo(
        s,
        W,
        null,
        _.formatContext,
        // Adopt the parent segment's leading text embed
        _.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      _.children.push(ie), _.lastPushedText = !1;
      var he = Fl(s, p.node, p.blockedBoundary, ie, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (he.componentStack = p.componentStack.parent);
      var Te = he.ping;
      E.then(Te, Te);
    }
    function Yl(s, p, E) {
      var _ = p.blockedSegment.formatContext, W = p.legacyContext, ie = p.context, he = null;
      he = p.componentStack;
      try {
        return nr(s, p, E);
      } catch (Te) {
        if (Dl(), typeof Te == "object" && Te !== null && typeof Te.then == "function") {
          rr(s, p, Te), p.blockedSegment.formatContext = _, p.legacyContext = W, p.context = ie, ai(ie), p.componentStack = he;
          return;
        } else
          throw p.blockedSegment.formatContext = _, p.legacyContext = W, p.context = ie, ai(ie), p.componentStack = he, Te;
      }
    }
    function iu(s, p, E, _) {
      var W = ur(s, _);
      if (p === null ? Br(s, _) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = W, zl(p, _), p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function vd(s) {
      var p = this, E = s.blockedBoundary, _ = s.blockedSegment;
      _.status = Ao, ou(p, E, _);
    }
    function Ro(s, p, E) {
      var _ = s.blockedBoundary, W = s.blockedSegment;
      if (W.status = Ao, _ === null)
        p.allPendingTasks--, p.status !== sa && (p.status = sa, p.destination !== null && T(p.destination));
      else {
        if (_.pendingTasks--, !_.forceClientRender) {
          _.forceClientRender = !0;
          var ie = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          _.errorDigest = p.onError(ie);
          {
            var he = "The server did not finish this Suspense boundary: ";
            ie && typeof ie.message == "string" ? ie = he + ie.message : ie = he + String(ie);
            var Te = Pr;
            Pr = s;
            try {
              zl(_, ie);
            } finally {
              Pr = Te;
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
    function Do(s, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var E = p.children[0];
        E.id = p.id, E.parentFlushed = !0, E.status === Ir && Do(s, E);
      } else {
        var _ = s.completedSegments;
        _.push(p);
      }
    }
    function ou(s, p, E) {
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
          E.parentFlushed && E.status === Ir && Do(p, E), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(vd, s), p.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === Ir) {
          Do(p, E);
          var W = p.completedSegments;
          W.length === 1 && p.parentFlushed && s.partialBoundaries.push(p);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function lu(s, p) {
      var E = p.blockedSegment;
      if (E.status === Nl) {
        ai(p.context);
        var _ = null;
        _ = Pr, Pr = p;
        try {
          nr(s, p, p.node), qn(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), p.abortSet.delete(p), E.status = Ir, ou(s, p.blockedBoundary, E);
        } catch (ie) {
          if (Dl(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
            var W = p.ping;
            ie.then(W, W);
          } else
            p.abortSet.delete(p), E.status = la, iu(s, p.blockedBoundary, E, ie);
        } finally {
          Pr = _;
        }
      }
    }
    function yi(s) {
      if (s.status !== sa) {
        var p = lo(), E = ci.current;
        ci.current = Xs;
        var _;
        _ = To.getCurrentStack, To.getCurrentStack = fi;
        var W = _l;
        ui(s.responseState);
        try {
          var ie = s.pingedTasks, he;
          for (he = 0; he < ie.length; he++) {
            var Te = ie[he];
            lu(s, Te);
          }
          ie.splice(0, he), s.destination !== null && No(s, s.destination);
        } catch (o) {
          ur(s, o), Br(s, o);
        } finally {
          ui(W), ci.current = E, To.getCurrentStack = _, E === Xs && ai(p);
        }
      }
    }
    function gi(s, p, E) {
      switch (E.parentFlushed = !0, E.status) {
        case Nl: {
          var _ = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, ha(p, s.responseState, _);
        }
        case Ir: {
          E.status = Co;
          for (var W = !0, ie = E.chunks, he = 0, Te = E.children, o = 0; o < Te.length; o++) {
            for (var c = Te[o]; he < c.index; he++)
              x(p, ie[he]);
            W = _o(s, p, c);
          }
          for (; he < ie.length - 1; he++)
            x(p, ie[he]);
          return he < ie.length && (W = S(p, ie[he])), W;
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
        return Yn(p, s.responseState, _.errorDigest, _.errorMessage, _.errorComponentStack), gi(s, p, E), al(p, s.responseState);
      if (_.pendingTasks > 0) {
        _.rootSegmentID = s.nextSegmentId++, _.completedSegments.length > 0 && s.partialBoundaries.push(_);
        var W = _.id = hn(s.responseState);
        return ga(p, s.responseState, W), gi(s, p, E), va(p, s.responseState);
      } else {
        if (_.byteSize > s.progressiveChunkSize)
          return _.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(_), ga(p, s.responseState, _.id), gi(s, p, E), va(p, s.responseState);
        Wi(p, s.responseState);
        var ie = _.completedSegments;
        if (ie.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var he = ie[0];
        return _o(s, p, he), Vi(p, s.responseState);
      }
    }
    function su(s, p, E) {
      return Ts(p, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function vi(s, p, E) {
      return Pt(p, s.responseState, E.formatContext, E.id), _o(s, p, E), sn(p, E.formatContext);
    }
    function xi(s, p, E) {
      for (var _ = E.completedSegments, W = 0; W < _.length; W++) {
        var ie = _[W];
        Xl(s, p, E, ie);
      }
      return _.length = 0, il(p, s.responseState, E.id, E.rootSegmentID);
    }
    function xd(s, p, E) {
      for (var _ = E.completedSegments, W = 0; W < _.length; W++) {
        var ie = _[W];
        if (!Xl(s, p, E, ie))
          return W++, _.splice(0, W), !1;
      }
      return _.splice(0, W), !0;
    }
    function Xl(s, p, E, _) {
      if (_.status === Co)
        return !0;
      var W = _.id;
      if (W === -1) {
        var ie = _.id = E.rootSegmentID;
        if (ie === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return vi(s, p, _);
      } else
        return vi(s, p, _), Rc(p, s.responseState, W);
    }
    function No(s, p) {
      y();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (_o(s, p, E), s.completedRootSegment = null, tl(p, s.responseState));
        var _ = s.clientRenderedBoundaries, W;
        for (W = 0; W < _.length; W++) {
          var ie = _[W];
          su(s, p, ie);
        }
        _.splice(0, W);
        var he = s.completedBoundaries;
        for (W = 0; W < he.length; W++) {
          var Te = he[W];
          xi(s, p, Te);
        }
        he.splice(0, W), R(p), y(p);
        var o = s.partialBoundaries;
        for (W = 0; W < o.length; W++) {
          var c = o[W];
          if (!xd(s, p, c)) {
            s.destination = null, W++, o.splice(0, W);
            return;
          }
        }
        o.splice(0, W);
        var b = s.completedBoundaries;
        for (W = 0; W < b.length; W++) {
          var w = b[W];
          xi(s, p, w);
        }
        b.splice(0, W);
      } finally {
        R(p), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), T(p));
      }
    }
    function bd(s) {
      d(function() {
        return yi(s);
      });
    }
    function uu(s, p) {
      if (s.status === Ol) {
        s.status = sa, P(p, s.fatalError);
        return;
      }
      if (s.status !== sa && s.destination === null) {
        s.destination = p;
        try {
          No(s, p);
        } catch (E) {
          ur(s, E), Br(s, E);
        }
      }
    }
    function Oo(s, p) {
      try {
        var E = s.abortableTasks;
        E.forEach(function(_) {
          return Ro(_, s, p);
        }), E.clear(), s.destination !== null && No(s, s.destination);
      } catch (_) {
        ur(s, _), Br(s, _);
      }
    }
    function Sd(s, p) {
      return new Promise(function(E, _) {
        var W, ie, he = new Promise(function(M, J) {
          ie = M, W = J;
        });
        function Te() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(J) {
                uu(c, J);
              },
              cancel: function(J) {
                Oo(c);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          M.allReady = he, E(M);
        }
        function o(M) {
          he.catch(function() {
          }), _(M);
        }
        var c = cd(s, kt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Gt(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ie, Te, o, W);
        if (p && p.signal) {
          var b = p.signal, w = function() {
            Oo(c, b.reason), b.removeEventListener("abort", w);
          };
          b.addEventListener("abort", w);
        }
        bd(c);
      });
    }
    Au.renderToReadableStream = Sd, Au.version = t;
  }()), Au;
}
var Fi, vf;
process.env.NODE_ENV === "production" ? (Fi = FS(), vf = MS()) : (Fi = zS(), vf = IS());
$a.version = Fi.version;
$a.renderToString = Fi.renderToString;
$a.renderToStaticMarkup = Fi.renderToStaticMarkup;
$a.renderToNodeStream = Fi.renderToNodeStream;
$a.renderToStaticNodeStream = Fi.renderToStaticNodeStream;
$a.renderToReadableStream = vf.renderToReadableStream;
const $S = ({ width: e, height: t, runtime: n }) => {
  var pe, Le, We, Ze, Ae, me, _e, ae;
  const { config: a } = ce.useContext(Et), { sankey: i } = a, l = (se) => se.visualizationType === "Sankey", [d, f] = ce.useState(0), u = ce.useRef([]), [m, y] = ce.useState(""), x = (se) => {
    y(se);
  }, S = () => {
    y("");
  }, [R, T] = ce.useState(!1);
  ce.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && T(!0);
  }, [window.innerWidth]);
  const F = () => {
    T(!1);
  };
  if (ce.useEffect(() => {
    var xe;
    let se = 0;
    (xe = u == null ? void 0 : u.current) == null || xe.map((ze) => {
      const Ve = ze == null ? void 0 : ze.getBoundingClientRect().width;
      Ve > se && (se = Ve);
    }), f(se);
  }, [u, i, window.innerWidth]), !l(a))
    return;
  const k = a == null ? void 0 : a.data[0], h = Array.from(new Set((pe = k == null ? void 0 : k.links) == null ? void 0 : pe.flatMap((se) => [se.source, se.target]))), P = {
    nodes: h.map((se) => ({ id: se })),
    links: (Le = k == null ? void 0 : k.links) == null ? void 0 : Le.map((se) => ({
      source: h.findIndex((xe) => xe === se.source),
      target: h.findIndex((xe) => xe === se.target),
      value: se.value
    }))
  };
  let O = 5;
  const C = 50, N = DS().nodeWidth(i.nodeSize.nodeWidth).nodePadding(i.nodePadding).iterations(i.iterations).nodeAlign(CS).extent([
    [i.margin.margin_x, Number(i.margin.margin_y)],
    [e - O - d, a.heights.vertical - C]
  ]), { nodes: D, links: B } = N(P), H = (se) => {
    var Qe;
    let xe = 30, ze = 0, Ve = "node-value--storynode", qe = !0;
    return (Qe = k == null ? void 0 : k.storyNodeText) != null && Qe.every((tt) => tt.StoryNode !== se) && (qe = !1, ze = 10, xe = 8, Ve = "node-value"), { textPositionHorizontal: xe, textPositionVertical: ze, classStyle: Ve, storyNodes: qe };
  }, re = (se) => {
    if (!(P != null && P.nodes))
      return { sourceNodes: [], activeLinks: [] };
    const xe = P.nodes.find((qe) => qe.id === se), ze = [], Ve = [];
    return xe && (B.forEach((qe) => {
      const Qe = qe.target, tt = qe.source;
      Qe.id === se && ze.push(tt.id);
    }), ze.forEach((qe) => {
      B.forEach((Qe) => {
        const tt = Qe.target, et = Qe.source;
        tt.id === m && et.id === qe && Ve.push(Qe);
      });
    })), { sourceNodes: ze, activeLinks: Ve };
  }, oe = `${(((We = k == null ? void 0 : k.tooltips) == null ? void 0 : We.find((se) => se.node === m)) || {}).value}`, ne = `${(((Ze = k == null ? void 0 : k.tooltips) == null ? void 0 : Ze.find((se) => se.node === m)) || {}).summary}`, j = (((Ae = k == null ? void 0 : k.tooltips) == null ? void 0 : Ae.find((se) => se.node === m)) || {}).column1Label, X = (((me = k == null ? void 0 : k.tooltips) == null ? void 0 : me.find((se) => se.node === m)) || {}).column2Label, G = (((_e = k == null ? void 0 : k.tooltips) == null ? void 0 : _e.find((se) => se.node === m)) || {}).column1, V = (((ae = k == null ? void 0 : k.tooltips) == null ? void 0 : ae.find((se) => se.node === m)) || {}).column2, K = ({ columnData: se }) => /* @__PURE__ */ r.createElement("ul", null, se == null ? void 0 : se.map((xe, ze) => /* @__PURE__ */ r.createElement("li", { key: ze }, xe.label, ": ", xe.value, " (", xe.additional_info, "%)"))), ee = $a.renderToString(/* @__PURE__ */ r.createElement(K, { columnData: G })), de = $a.renderToString(/* @__PURE__ */ r.createElement(K, { columnData: V })), Q = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${m}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${oe}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${ne}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${j}<strong></span>
                          ${ee}
                        </div>
                        <div>
                          <span><strong>${X}<strong></span>
                          ${de}
                        </div>
                      </div>
                    </div>`, te = P.nodes.map((se, xe) => {
    var Re, Ce;
    let { textPositionHorizontal: ze, textPositionVertical: Ve, classStyle: qe, storyNodes: Qe } = H(se.id), { sourceNodes: tt } = re(m), et = i.opacity.nodeOpacityDefault, Ye = i.nodeColor.default;
    return m !== se.id && m !== "" && !tt.includes(se.id) && (Ye = i.nodeColor.inactive, et = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(ot, { className: "", key: xe }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: se.y1 - se.y0 + 2,
        width: N.nodeWidth(),
        x: se.x0,
        y: se.y0 - 1,
        fill: Ye,
        fillOpacity: et,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => x(se.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: se.x0 + ze,
        textAnchor: P.nodes.length - 1 === xe ? "end" : "start",
        verticalAnchor: "end",
        y: (se.y1 + se.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((Re = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Re.find((at) => at.StoryNode === se.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        verticalAnchor: "end",
        className: qe,
        x: se.x0 + ze,
        y: (se.y1 + se.y0 + 25) / 2,
        fill: i.storyNodeFontColor || i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      typeof se.value == "number" ? se.value.toLocaleString() : se.value
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        x: se.x0 + ze,
        y: (se.y1 + se.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: P.nodes.length === xe ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((Ce = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Ce.find((at) => at.StoryNode === se.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        x: se.x0 + ze,
        y: (se.y1 + se.y0) / 2 + Ve,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      se.id
    ), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: se.x0 + ze,
        y: (se.y1 + se.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      /* @__PURE__ */ r.createElement("tspan", { className: qe }, i.nodeValueStyle.textBefore + (typeof se.value == "number" ? se.value.toLocaleString() : se.value) + i.nodeValueStyle.textAfter)
    )));
  }), q = B.map((se, xe) => {
    const Ve = OS()(se);
    let qe = i.opacity.LinkOpacityDefault, Qe = i.linkColor.default, { activeLinks: tt } = re(m);
    return !tt.includes(se) && m !== "" && (Qe = i.linkColor.inactive, qe = i.opacity.LinkOpacityInactive), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: xe,
        d: Ve,
        stroke: Qe,
        fill: "none",
        strokeOpacity: qe,
        strokeWidth: se.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(se.target.id || null),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      }
    );
  }), Z = P.nodes.reduce((se, xe) => Math.max(se, xe.depth), -1), ke = P.nodes.filter((se) => se.depth === Z).map((se, xe) => {
    var Re, Ce;
    let { textPositionHorizontal: ze, textPositionVertical: Ve, classStyle: qe, storyNodes: Qe } = H(se.id), { sourceNodes: tt } = re(m), et = i.opacity.nodeOpacityDefault, Ye = i.nodeColor.default;
    return m !== se.id && m !== "" && !tt.includes(se.id) && (Ye = i.nodeColor.inactive, et = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(ot, { className: "", key: xe, innerRef: (at) => u.current[xe] = at }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: se.y1 - se.y0 + 2,
        width: N.nodeWidth(),
        x: se.x0,
        y: se.y0 - 1,
        fill: Ye,
        fillOpacity: et,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? Q : null,
        "data-tooltip-id": "tooltip",
        onClick: () => x(se.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: se.x0 + ze,
        textAnchor: P.nodes.length - 1 === xe ? "end" : "start",
        verticalAnchor: "end",
        y: (se.y1 + se.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Re = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Re.find((at) => at.StoryNode === se.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(St, { verticalAnchor: "end", className: qe, x: se.x0 + ze, y: (se.y1 + se.y0 + 25) / 2, fill: i.storyNodeFontColor || i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof se.value == "number" ? se.value.toLocaleString() : se.value), /* @__PURE__ */ r.createElement(
      St,
      {
        x: se.x0 + ze,
        y: (se.y1 + se.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: P.nodes.length === xe ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ce = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Ce.find((at) => at.StoryNode === se.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("text", { x: se.x0 + ze, y: (se.y1 + se.y0) / 2 + Ve, dominantBaseline: "text-before-edge", fill: i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ r.createElement("tspan", { id: se.id, className: "node-id" }, se.id)), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: se.x0 + ze,
        y: (se.y1 + se.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ r.createElement("tspan", { onClick: () => x(se.id), className: qe }, i.nodeValueStyle.textBefore + (typeof se.value == "number" ? se.value.toLocaleString() : se.value) + i.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ r.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(a.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ r.createElement(ot, { className: "links" }, q), /* @__PURE__ */ r.createElement(ot, { className: "nodes" }, te), /* @__PURE__ */ r.createElement(ot, { className: "finalNodes", style: { display: "none" } }, ke)), /* @__PURE__ */ r.createElement(Ey, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => S(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), R && /* @__PURE__ */ r.createElement("div", { className: "popup" }, /* @__PURE__ */ r.createElement("div", { className: "popup-content" }, /* @__PURE__ */ r.createElement("button", { className: "visually-hidden", onClick: F }, "Select for accessible version."), /* @__PURE__ */ r.createElement("p", null, /* @__PURE__ */ r.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var BS = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = BS;
function HS(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, i = e.range, l = e.tickLabelFontSize, d = e.tickLength, f = a === ir.left || a === ir.top ? -1 : 1, u, m, y;
  if (a === ir.top || a === ir.bottom) {
    var x = a === ir.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    u = (Number(i[0]) + Number(i[i.length - 1])) / 2, m = f * (d + t + l + x);
  } else
    u = f * ((Number(i[0]) + Number(i[i.length - 1])) / 2), m = -(d + t), y = "rotate(" + f * 90 + ")";
  return {
    x: u,
    y: m,
    transform: y
  };
}
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cs.apply(this, arguments);
}
function WS(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, l = e.tickComponent, d = e.tickLabelProps, f = e.tickStroke, u = f === void 0 ? "#222" : f, m = e.tickTransform, y = e.ticks, x = e.strokeWidth, S = e.tickLineProps;
  return y.map(function(R) {
    var T, F = R.value, k = R.index, h = R.from, P = R.to, O = R.formattedValue, C = (T = d[k]) != null ? T : {}, N = Math.max(10, typeof C.fontSize == "number" && C.fontSize || 0), D = P.y + (n && a !== ir.top ? N : 0);
    return /* @__PURE__ */ r.createElement(ot, {
      key: "visx-tick-" + F + "-" + k,
      className: An("visx-axis-tick", i),
      transform: m
    }, !t && /* @__PURE__ */ r.createElement(un, cs({
      from: h,
      to: P,
      stroke: u,
      strokeWidth: x,
      strokeLinecap: "square"
    }, S)), l ? l(cs({}, C, {
      x: P.x,
      y: D,
      formattedValue: O
    })) : /* @__PURE__ */ r.createElement(St, cs({
      x: P.x,
      y: D
    }, C), O));
  });
}
function uc() {
  return uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, uc.apply(this, arguments);
}
var Ph = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function VS(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, l = e.hideTicks, d = e.horizontal, f = e.label, u = f === void 0 ? "" : f, m = e.labelClassName, y = e.labelOffset, x = y === void 0 ? 14 : y, S = e.labelProps, R = S === void 0 ? Ph : S, T = e.orientation, F = T === void 0 ? ir.bottom : T, k = e.scale, h = e.stroke, P = h === void 0 ? "#222" : h, O = e.strokeDasharray, C = e.strokeWidth, N = C === void 0 ? 1 : C, D = e.tickClassName, B = e.tickComponent, H = e.tickLineProps, re = e.tickLabelProps, oe = e.tickLength, ne = oe === void 0 ? 8 : oe, j = e.tickStroke, X = j === void 0 ? "#222" : j, G = e.tickTransform, V = e.ticks, K = e.ticksComponent, ee = K === void 0 ? WS : K, de = uc({}, Ph, typeof re == "object" ? re : null), Q = V.map(function(q) {
    var Z = q.value, Me = q.index;
    return typeof re == "function" ? re(Z, Me, V) : de;
  }), te = Math.max.apply(Math, [10].concat(Q.map(function(q) {
    return typeof q.fontSize == "number" ? q.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, ee({
    hideTicks: l,
    horizontal: d,
    orientation: F,
    scale: k,
    tickClassName: D,
    tickComponent: B,
    tickLabelProps: Q,
    tickStroke: X,
    tickTransform: G,
    ticks: V,
    strokeWidth: N,
    tickLineProps: H
  }), !i && /* @__PURE__ */ r.createElement(un, {
    className: An("visx-axis-line", n),
    from: t,
    to: a,
    stroke: P,
    strokeWidth: N,
    strokeDasharray: O
  }), u && /* @__PURE__ */ r.createElement(St, uc({
    className: An("visx-axis-label", m)
  }, HS({
    labelOffset: x,
    labelProps: R,
    orientation: F,
    range: k.range(),
    tickLabelFontSize: te,
    tickLength: ne
  }), R), u));
}
function jS(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var a = n.bandwidth();
    return t === "center" && (a /= 2), n.round() && (a = Math.round(a)), function(i) {
      var l = n(i);
      return typeof l == "number" ? l + a : l;
    };
  }
  return e;
}
function US(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Kg;
}
function Lu(e, t) {
  var n = e.x, a = e.y;
  return new jy(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, xf.apply(this, arguments);
}
var Hd = 0;
function KS(e) {
  return e === void 0 && (e = Hd), typeof e == "number" ? {
    start: e,
    end: e
  } : xf({
    start: Hd,
    end: Hd
  }, e);
}
var YS = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function XS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function wc(e) {
  var t = e.children, n = t === void 0 ? VS : t, a = e.axisClassName, i = e.hideAxisLine, l = i === void 0 ? !1 : i, d = e.hideTicks, f = d === void 0 ? !1 : d, u = e.hideZero, m = u === void 0 ? !1 : u, y = e.innerRef, x = e.left, S = x === void 0 ? 0 : x, R = e.numTicks, T = R === void 0 ? 10 : R, F = e.orientation, k = F === void 0 ? ir.bottom : F, h = e.rangePadding, P = h === void 0 ? 0 : h, O = e.scale, C = e.tickFormat, N = e.tickLength, D = N === void 0 ? 8 : N, B = e.tickValues, H = e.top, re = H === void 0 ? 0 : H, oe = XS(e, YS), ne = C ?? US(O), j = k === ir.left, X = k === ir.top, G = X || k === ir.bottom, V = jS(O), K = j || X ? -1 : 1, ee = O.range(), de = KS(P), Q = Lu({
    x: Number(ee[0]) + 0.5 - de.start,
    y: 0
  }, G), te = Lu({
    x: Number(ee[ee.length - 1]) + 0.5 + de.end,
    y: 0
  }, G), q = (B ?? Ug(O, T)).filter(function(Me) {
    return !m || Me !== 0 && Me !== "0";
  }).map(function(Me, ke) {
    return {
      value: Me,
      index: ke
    };
  }), Z = q.map(function(Me) {
    var ke = Me.value, pe = Me.index, Le = jg(V(ke));
    return {
      value: ke,
      index: pe,
      from: Lu({
        x: Le,
        y: 0
      }, G),
      to: Lu({
        x: Le,
        y: D * K
      }, G),
      formattedValue: ne(ke, pe, q)
    };
  });
  return /* @__PURE__ */ r.createElement(ot, {
    className: An("visx-axis", a),
    innerRef: y,
    top: re,
    left: S
  }, n(bf({}, oe, {
    axisFromPoint: Q,
    axisToPoint: te,
    hideAxisLine: l,
    hideTicks: f,
    hideZero: m,
    horizontal: G,
    numTicks: T,
    orientation: k,
    rangePadding: P,
    scale: O,
    tickFormat: ne,
    tickLength: D,
    tickPosition: V,
    tickSign: K,
    ticks: Z
  })));
}
var qS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function GS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ZS = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function QS(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = GS(e, qS), u = typeof d == "function" ? d : cc({}, ZS, d);
  return /* @__PURE__ */ r.createElement(wc, cc({
    axisClassName: An("visx-axis-left", t),
    labelOffset: a,
    orientation: ir.left,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var JS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function dc() {
  return dc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, dc.apply(this, arguments);
}
function eE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var tE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function nE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = eE(e, JS), u = typeof d == "function" ? d : dc({}, tE, d);
  return /* @__PURE__ */ r.createElement(wc, dc({
    axisClassName: An("visx-axis-right", t),
    labelOffset: a,
    orientation: ir.right,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var rE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function fc() {
  return fc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fc.apply(this, arguments);
}
function aE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var iE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function oE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = aE(e, rE), u = typeof d == "function" ? d : fc({}, iE, d);
  return /* @__PURE__ */ r.createElement(wc, fc({
    axisClassName: An("visx-axis-top", t),
    labelOffset: a,
    orientation: ir.top,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var lE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pc.apply(this, arguments);
}
function sE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var uE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Mu(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = sE(e, lE), u = typeof d == "function" ? d : pc({}, uE, d);
  return /* @__PURE__ */ r.createElement(wc, pc({
    axisClassName: An("visx-axis-bottom", t),
    labelOffset: a,
    orientation: ir.bottom,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Ob,
  curveBasisClosed: Fb,
  curveBasisOpen: Mb,
  curveBundle: zb,
  curveCardinal: Ib,
  curveCardinalClosed: $b,
  curveCardinalOpen: Bb,
  curveCatmullRom: Hb,
  curveCatmullRomClosed: Wb,
  curveCatmullRomOpen: Vb,
  curveLinear: vc,
  curveLinearClosed: Qd,
  curveMonotoneX: Fu,
  curveMonotoneY: jb,
  curveNatural: Ub,
  curveStep: Kb,
  curveStepAfter: Xb,
  curveStepBefore: Yb
}, Symbol.toStringTag, { value: "Module" })), cE = (e) => {
  var D, B;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, isDebug: f, children: u } = e;
  let { transformedData: m, config: y, handleLineType: x, parseDate: S, formatDate: R, formatNumber: T, seriesHighlight: F, colorScale: k, rawData: h, brushConfig: P } = ce.useContext(Et);
  const O = (D = y.brush) != null && D.active && ((B = P.data) != null && B.length) ? P.data : m;
  if (!O)
    return;
  const C = (H) => (wn(y.xAxis) ? t(S(H[y.xAxis.dataKey], !1)) : t(H[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), N = (H, re, oe = void 0) => n(H[oe.dataKey]);
  return O && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Or, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(ot, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((H, re) => {
    let oe = O.map((G) => ({
      [y.xAxis.dataKey]: G[y.xAxis.dataKey],
      [H.dataKey]: G[H.dataKey]
    })), ne = ds[H.lineType], j = y.legend.behavior === "highlight" && F.length > 0 && F.indexOf(H.dataKey) === -1, X = y.legend.behavior === "highlight" || F.length === 0 || F.indexOf(H.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: re }, /* @__PURE__ */ r.createElement(
      Nr,
      {
        data: oe,
        x: (G) => C(G),
        y: (G) => N(G, re, H),
        stroke: X ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[H.dataKey] : H.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: ne,
        strokeDasharray: H.type ? x(H.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      b0,
      {
        key: "area-chart",
        fill: X ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[H.dataKey] : H.dataKey) : "#000" : "transparent",
        fillOpacity: j ? 0.25 : 0.5,
        data: oe,
        x: (G) => C(G),
        y: (G) => N(G, re, H),
        yScale: n,
        curve: ne,
        strokeDasharray: H.type ? x(H.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(kr, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (H) => l(H, h), onMouseLeave: d }))));
}, dE = ce.memo(cE), fE = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l, isDebug: d }) => {
  var F, k;
  let { transformedData: f, config: u, seriesHighlight: m, colorScale: y, rawData: x } = ce.useContext(Et);
  const S = (F = u.brush) != null && F.active && ((k = u.brush.data) != null && k.length) ? u.brush.data : f;
  if (!S)
    return;
  const R = (h) => {
    if (u.xAxis.type === "categorical")
      return e(h);
    if (wn(u.xAxis)) {
      let P = new Date(h);
      return e(P);
    }
  }, T = 2;
  return S && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Or, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(ot, { className: "area-chart", key: "area-wrapper", left: Number(u.yAxis.size) + T / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    C0,
    {
      data: S,
      keys: u.runtime.areaSeriesKeys.map((h) => h.dataKey) || u.series.map((h) => h.dataKey),
      x0: (h) => R(h.data[u.xAxis.dataKey]),
      y0: (h) => Number(t(h[0])),
      y1: (h) => Number(t(h[1])),
      curve: ds[Bu[u.stackedAreaChartLineType]]
    },
    ({ stacks: h, path: P }) => h.map((O, C) => {
      let N = u.legend.behavior === "highlight" && m.length > 0 && m.indexOf(O.key) === -1, D = u.legend.behavior === "highlight" || m.length === 0 || m.indexOf(O.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: O.key,
            d: P(O) || "",
            strokeWidth: 2,
            stroke: D ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[O.key] : O.key) : "#000" : "transparent",
            fillOpacity: N ? 0.2 : 1,
            fill: D ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[O.key] : O.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(kr, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (h) => i(h, x), onMouseLeave: l }))));
}, pE = ce.memo(fE), Tc = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: l, setSeriesHighlight: d, seriesHighlight: f } = ce.useContext(Et), { orientation: u } = e, [m, y] = ce.useState(null), x = u === "horizontal", S = 1, R = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, T = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, F = e.yAxis.labelPlacement === "Below Bar", k = e.yAxis.displayNumbersOnBar, h = e.orientation === "horizontal" ? "yAxis" : "xAxis", P = e.barStyle === "rounded", O = e.visualizationSubType === "stacked", C = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", D = e.runtime.seriesKeys.length, B = { small: 16, medium: 18, large: 20 }, H = Object.keys(e.runtime.seriesLabels).length > 1, oe = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (f != null && f.length) ? f : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return ce.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e.yAxis,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), ce.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), ce.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), ce.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (P || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: x,
    barBorderWidth: S,
    lollipopBarWidth: R,
    lollipopShapeSize: T,
    isLabelBelowBar: F,
    displayNumbersOnBar: k,
    shouldSuppress: (te) => {
      var q;
      return (q = e.preliminaryData) == null ? void 0 : q.some((Z) => {
        const Me = Z.column ? Z.column === te.key : !0, ke = String(te.value) === String(Z.value) && Z.value !== "";
        return Me && ke && Z.symbol && Z.type === "suppression";
      });
    },
    section: h,
    isRounded: P,
    isStacked: O,
    tipRounding: C,
    radius: N,
    stackCount: D,
    barStackedSeriesKeys: oe,
    fontSize: B,
    hasMultipleSeries: H,
    applyRadius: (te) => {
      if (te == null || !P)
        return {};
      let q = {};
      return (O && te + 1 === D || !O) && (q = x ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !O && te === -1 && (q = x ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), C === "full" && O && te === 0 && D > 1 && (q = x ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), C === "full" && (O && te === 0 && D === 1 || !O) && (q = { borderRadius: N }), q;
    },
    updateBars: (te) => {
      if (e.visualizationType !== "Bar" && !x)
        return te;
      const q = [...te];
      let Z;
      const Me = {
        stacked: e.barHeight,
        lollipop: R
      };
      O ? Z = Me.stacked : Z = Me[e.isLollipopChart ? "lollipop" : "stacked"] * D;
      const ke = F ? B[e.fontSize] * 1.2 : 0;
      let pe = Number(e.barSpace), Le = q.length * (Z + ke + pe);
      return x && (e.heights.horizontal = Le), q.map((We, Ze) => {
        let Ae = 0;
        return We.index !== 0 && (Ae = (Z + pe + ke) * Ze), { ...We, y: Ae, height: Z };
      });
    },
    assignColorsToValues: (te, q, Z) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return Z;
      const Me = e.customColors ?? t[e.palette], ke = n.map((Ze) => Ze[e.legend.colorCode]);
      let pe = /* @__PURE__ */ new Map(), Le = [];
      for (let Ze = 0; Ze < ke.length; Ze++)
        pe.has(ke[Ze]) || pe.set(ke[Ze], Me[pe.size % Me.length]), Le.push(pe.get(ke[Ze]));
      for (; Le.length < te; )
        Le = Le.concat(Le);
      return Le[q];
    },
    getHighlightedBarColorByValue: (te) => {
      const q = e == null ? void 0 : e.highlightedBarValues.find((Z) => {
        if (Z.value)
          return e.xAxis.type === "date" ? l(i(Z.value)) === te : Z.value === te;
      });
      return q != null && q.color ? q.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (te) => {
      const q = e == null ? void 0 : e.highlightedBarValues.filter((Z) => {
        if (Z.value)
          return e.xAxis.type === "date" ? l(i(Z.value)) === te : Z.value === te;
      })[0];
      return q != null && q.color ? q : !1;
    },
    getAdditionalColumn: (te, q) => {
      if (!q)
        return "";
      const Z = e.columns, Me = [];
      let ke = "";
      const pe = n.find((Le) => Le[e.xAxis.dataKey] === q) || {};
      return Object.keys(Z).forEach((Le) => {
        if (te && e.columns[Le].series && e.columns[Le].series !== te)
          return;
        const We = {
          addColPrefix: e.columns[Le].prefix,
          addColSuffix: e.columns[Le].suffix,
          addColRoundTo: e.columns[Le].roundToPlace ? e.columns[Le].roundToPlace : "",
          addColCommas: e.columns[Le].commas
        }, Ze = Sf(pe[e.columns[Le].name], "left", !0, e, We);
        e.columns[Le].tooltips && Me.push([e.columns[Le].label, Ze]);
      }), Me.forEach((Le) => {
        ke += `${Le[0]} : ${Le[1]} <br/>`;
      }), ke;
    },
    hoveredBar: m,
    setHoveredBar: y,
    onMouseOverBar: (te, q) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && q && d([q]), y(te);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && d([]);
    }
  };
}, ks = ce.createContext(null), Kf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: l, handleTooltipClick: d, tooltipData: f, showTooltip: u, hideTooltip: m }) => {
  const { parseDate: y, config: x } = ce.useContext(Et), { runtime: S, regions: R, visualizationType: T, orientation: F, xAxis: k } = x, h = e.domain(), P = (N) => {
    let D;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const B = new Date(N.from), H = y(ql(x.xAxis.dateParseFormat, B)).getTime();
      D = e(H), T === "Bar" && k.type === "date-time" && (D = D - t * n / 2);
    }
    if (N.fromType === "Previous Days") {
      const B = Number(N.from) || 0;
      h.map((ne) => ql(x.xAxis.dateParseFormat, new Date(ne)));
      const H = N.toType === "Last Date" ? new Date(h[h.length - 1]).getTime() : new Date(N.to), re = x.xAxis.type === "categorical" ? ql(x.xAxis.dateParseFormat, H) : ql(x.xAxis.dateParseFormat, H), oe = new Date(re);
      if (D = new Date(oe.setDate(oe.getDate() - Number(B))), k.type === "date") {
        D = new Date(ql(k.dateParseFormat, D)).getTime();
        let ne = h[0], j = Math.abs(D - ne);
        for (let X = 1; X < h.length; X++) {
          const G = Math.abs(D - h[X]);
          G < j && (j = G, ne = h[X]);
        }
        D = ne;
      }
      if (k.type === "categorical") {
        let ne = h[0], j = Math.abs(new Date(D).getTime() - new Date(ne).getTime());
        for (let X = 1; X < h.length; X++) {
          const G = Math.abs(new Date(D).getTime() - new Date(h[X]).getTime());
          G < j && (j = G, ne = h[X]);
        }
        D = ne;
      }
      D = e(D);
    }
    if (k.type === "categorical" && N.fromType !== "Previous Days" && (D = e(N.from)), T === "Line" || T === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), D = D + B;
    }
    return T === "Bar" && x.xAxis.type === "date-time" && N.fromType === "Previous Days" && (D = D - t * n / 2), D;
  }, O = (N) => {
    let D;
    if (k.type === "categorical" && (D = e(N.to)), wn(k) && ((!(N != null && N.toType) || N.toType === "Fixed") && (D = e(y(N.to).getTime())), (T === "Bar" || x.visualizationType === "Combo") && (D = N.toType !== "Last Date" ? e(y(N.to).getTime()) + t * n : D)), N.toType === "Last Date") {
      const B = h[h.length - 1];
      D = Number(e(B) + ((T === "Bar" || T === "Combo") && x.xAxis.type === "date" ? t * n : 0));
    }
    if (T === "Line" || T === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), D = D + B;
    }
    return T === "Bar" && x.xAxis.type === "date-time" && N.toType !== "Last Date" && (D = D - t * n / 2), (T === "Bar" || T === "Combo") && k.type === "categorical" && (D = D + (T === "Bar" || T === "Combo" ? t * n : 0)), D;
  }, C = (N, D) => N - D;
  if (R && F === "vertical")
    return R.map((N) => {
      const D = P(N), B = O(N), H = C(B, D);
      if (!D || !B)
        return null;
      const re = () => /* @__PURE__ */ r.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${D} -5
                L${D} 5
                M${D} 0
                L${B} 0
                M${B} -5
                L${B} 5`
        }
      ), oe = () => /* @__PURE__ */ r.createElement("rect", { x: D, y: 0, width: H, height: a, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(ot, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: l, onMouseLeave: i, handleTooltipClick: d, tooltipData: JSON.stringify(f), showTooltip: u }, /* @__PURE__ */ r.createElement(re, null), /* @__PURE__ */ r.createElement(oe, null), /* @__PURE__ */ r.createElement(St, { x: D + H / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Cc(e) {
  var q, Z;
  const { config: t, index: n, id: a, className: i, background: l, borderColor: d, borderWidth: f, width: u, height: m, x: y, y: x, onMouseOver: S, onMouseLeave: R, onClick: T, tooltipHtml: F, tooltipId: k, styleOverrides: h, seriesHighlight: P } = e, O = Math.max(0, u), C = Math.max(0, m), N = t.orientation === "horizontal", D = t.barStyle === "rounded", B = t.visualizationSubType === "stacked", H = t.tipRounding, re = t.visualizationType === "Combo" && ((Z = (q = t.runtime) == null ? void 0 : q.barSeriesKeys) == null ? void 0 : Z.length), oe = t.runtime.seriesKeys.length, ne = t.visualizationType === "Bar" && t.legend.axisAlign && (P != null && P.length) ? P == null ? void 0 : P.length : 0, j = re || ne || oe;
  let X = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (X > O / 2 || X > C / 2) && (X = Math.min(O / 2, C / 2));
  const G = () => `M${y},${x + C}
      L${y},${x + X}
      Q${y},${x} ${y + X},${x}
      L${y + O - X},${x}
      Q${y + O},${x} ${y + O},${x + X}
      L${y + O},${x + C}
      L${y},${x + C}`, V = () => `M${y},${x + C}
      L${y},${x}
      L${y + O - X},${x}
      Q${y + O},${x} ${y + O},${x + X}
      L${y + O},${x + C - X}
      Q${y + O},${x + C} ${y + O - X},${x + C}
      L${y},${x + C}`, K = () => `M${y + X},${x + C}
      Q${y},${x + C} ${y},${x + C - X}
      L${y},${x}
      L${y + O},${x}
      L${y + O},${x + C - X}
      Q${y + O},${x + C} ${y + O - X},${x + C}
      L${y + X},${x + C}`, ee = () => `M${y + X},${x + C}
      Q${y},${x + C} ${y},${x + C - X}
      L${y},${x + X}
      Q${y},${x} ${y + X},${x}
      L${y + O},${x}
      L${y + O},${x + C}
      L${y + X},${x + C}`, de = () => `M${y + X},${x + C}
      Q${y},${x + C} ${y},${x + C - X}
      L${y},${x + X}
      Q${y},${x} ${y + X},${x}
      L${y + O - X},${x}
      Q${y + O},${x} ${y + O},${x + X}
      L${y + O},${x + C - X}
      Q${y + O},${x + C} ${y + O - X},${x + C}
      L${y + X},${x + C}`, Q = () => `M${y},${x}
      L${y + O},${x}
      L${y + O},${x + C}
      L${y},${x + C}
      L${y},${x}`;
  let te;
  return n == null || !D ? te = Q() : (te = Q(), (B && n + 1 === j || !B) && (te = N ? V() : G()), !B && n === -1 && (te = N ? ee() : K()), H === "full" && B && n === 0 && j > 1 && (te = N ? ee() : K()), H === "full" && (B && n === 0 && j === 1 || !B) && (te = de())), /* @__PURE__ */ r.createElement(
    "path",
    {
      id: a,
      className: i,
      d: te,
      fill: l,
      stroke: d,
      strokeWidth: f,
      onMouseOver: S,
      onMouseLeave: R,
      onClick: T,
      "data-tooltip-html": F,
      "data-tooltip-id": k,
      style: {
        transition: "all 0.2s linear",
        ...h
      }
    }
  );
}
const hE = () => {
  var oe, ne;
  const [e, t] = ce.useState(0), { xScale: n, yScale: a, seriesScale: i, xMax: l, yMax: d } = ce.useContext(ks), { transformedData: f, colorScale: u, seriesHighlight: m, config: y, formatNumber: x, formatDate: S, parseDate: R, setSharedFilter: T } = ce.useContext(Et), { isHorizontal: F, barBorderWidth: k, applyRadius: h, hoveredBar: P, getAdditionalColumn: O, onMouseLeaveBar: C, onMouseOverBar: N, barStackedSeriesKeys: D } = Tc(), { orientation: B } = y, H = (oe = y.brush) != null && oe.active && ((ne = y.brush.data) != null && ne.length) ? y.brush.data : f, re = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !F && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(D0, { data: H, keys: D, x: (j) => j[y.runtime.xAxis.dataKey], xScale: n, yScale: a, color: u }, (j) => j.reverse().map(
    (X) => X.bars.map((G) => {
      let V = y.legend.behavior === "highlight" && m.length > 0 && m.indexOf(G.key) === -1, K = y.legend.behavior === "highlight" || m.length === 0 || m.indexOf(G.key) !== -1, ee = re ? i.range()[1] - i.range()[0] : l / X.bars.length;
      y.runtime.xAxis.type !== "date" && (ee = y.barThickness * ee);
      const de = G.bar.data[y.runtime.xAxis.dataKey], Q = re ? S(R(de)) : de, te = x(G.bar ? G.bar.data[G.key] : 0, "left");
      if (!te)
        return;
      const q = n(re ? R(de) : de) - (re ? ee / 2 : 0), Z = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${Q}` : Q, Me = O(P), ke = `${y.runtime.seriesLabels[G.key]}: ${te}`, pe = `<ul>
                  <li class="tooltip-heading"">${Z}</li>
                  <li class="tooltip-body ">${ke}</li>
                  <li class="tooltip-body ">${Me}</li>
                    </li></ul>`;
      return t(ee), /* @__PURE__ */ r.createElement(ot, { key: `${X.index}--${G.index}--${B}` }, /* @__PURE__ */ r.createElement(ot, { key: `bar-stack-${X.index}-${G.index}`, id: `barStack${X.index}-${G.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(St, { display: y.labels && K ? "block" : "none", opacity: V ? 0.5 : 1, x: q + e / 2, y: G.y - 5, fill: "#000", textAnchor: "middle" }, te), Cc({
        config: y,
        seriesHighlight: m,
        index: X.index,
        background: u(y.runtime.seriesLabels[G.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? k : 0}px`,
        width: ee,
        height: G.height,
        x: q,
        y: G.y,
        onMouseOver: () => N(Q, G.key),
        onMouseLeave: C,
        tooltipHtml: pe,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Le) => {
          Le.preventDefault(), T && (G[y.xAxis.dataKey] = Q, T(y.uid, G));
        },
        styleOverrides: {
          animationDelay: `${X.index * 0.5}s`,
          transformOrigin: `${ee / 2}px ${G.y + G.height}px`,
          opacity: V ? 0.2 : 1,
          display: K ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ r.createElement(Kf, { xScale: n, yMax: d, barWidth: e, totalBarsInGroup: 1 }));
}, mE = () => {
  const { yMax: e, yScale: t, xScale: n } = ce.useContext(ks), {
    animatedChart: a,
    colorScale: i,
    config: l,
    formatDate: d,
    formatNumber: f,
    getTextWidth: u,
    parseDate: m,
    seriesHighlight: y,
    setSharedFilter: x,
    transformedData: S
  } = ce.useContext(Et), { barBorderWidth: R, displayNumbersOnBar: T, fontSize: F, getAdditionalColumn: k, hoveredBar: h, isHorizontal: P, isLabelBelowBar: O, onMouseLeaveBar: C, onMouseOverBar: N, updateBars: D, barStackedSeriesKeys: B } = Tc(), { orientation: H, visualizationSubType: re } = l;
  return l.visualizationSubType === "stacked" && P && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(O0, { data: S, keys: B, height: e, y: (oe) => oe[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (oe) => oe.map(
    (ne) => D(ne.bars).map((j, X) => {
      const G = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(j.key) === -1, V = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(j.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const K = Uo("#000", i(l.runtime.seriesLabels[j.key])), ee = f(S[j.index][j.key], "left"), de = l.runtime.yAxis.type === "date" ? d(m(S[j.index][l.runtime.originalXAxis.dataKey])) : S[j.index][l.runtime.originalXAxis.dataKey], Q = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${de}` : de, te = u(ee, `normal ${F[l.fontSize]}px sans-serif`), q = k(h), Z = `${l.runtime.seriesLabels[j.key]}: ${ee}`, Me = `<ul>
                  <li class="tooltip-heading"">${Q}</li>
                  <li class="tooltip-body ">${Z}</li>
                  <li class="tooltip-body ">${q}</li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { key: X, id: `barStack${ne.index}-${j.index}`, className: "stack horizontal" }, Cc({
        config: l,
        seriesHighlight: y,
        index: ne.index,
        className: `animated-chart group ${a ? "animated" : ""}`,
        background: i(l.runtime.seriesLabels[j.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? R : 0}px`,
        width: j.width,
        height: j.height,
        x: j.x,
        y: j.y,
        onMouseOver: () => N(de, j.key),
        onMouseLeave: C,
        tooltipHtml: Me,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (ke) => {
          ke.preventDefault(), x && (j[l.xAxis.dataKey] = ee, x(l.uid, j));
        },
        styleOverrides: {
          animationDelay: `${ne.index * 0.5}s`,
          transformOrigin: `${j.x}px 0`,
          opacity: G ? 0.2 : 1,
          display: V ? "block" : "none"
        }
      }), H === "horizontal" && re === "stacked" && O && ne.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        St,
        {
          x: `${j.x + (l.isLollipopChart ? 15 : 5)}`,
          y: j.y + j.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        de
      ), T && te < j.width && /* @__PURE__ */ r.createElement(
        St,
        {
          display: V ? "block" : "none",
          x: j.x + ne.bars[j.index].width / 2,
          y: j.y + j.height / 2,
          fill: K,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ee
      )));
    })
  )));
}, ky = ({ bar: e, defaultBarHeight: t, defaultBarWidth: n, config: a, isNumber: i, getTextWidth: l, barWidth: d, isVertical: f }) => {
  let m = t, y = n, x = "", S = !1, R = !1, T = !1;
  const F = a.general.showSuppressedSymbol;
  if (a.preliminaryData.forEach((P) => {
    (!P.column || P.column === e.key) && P.type === "suppression" && P.value && String(P.value) === String(e.value) && (!P.hideBarSymbol && F ? (m = d > 10 ? 3 : 0, y = 3, S = !0) : (m = 0, y = 0, S = !0));
  }), !S && !i(e.value) && a.general.showMissingDataLabel) {
    const O = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    R = !0, m = O ? 3 : 0, y = 3;
  }
  return !S && String(e.value) === "0" && a.general.showZeroValueDataLabel && (m = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10 ? 3 : 0, y = 3, T = !0), { barWidthHorizontal: y, barHeight: m, isSuppressed: S, showMissingDataLabel: R, showZeroValueDataLabel: T, getBarY: (P, O) => S || R || T ? O - 3 : P, getAbsentDataLabel: (P) => {
    let O = "";
    return String(P) === "0" && (O = ""), S && (O = ""), R && (O = "N/A"), T && (O = "0"), l(x, `normal ${d / 2}px sans-serif`) < d && d > 10 && f ? O : f ? "" : O;
  } };
}, Ac = (e, t, n) => !!(e === "Line" && (t == null ? void 0 : t.length) < 3 && n), yE = () => {
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = ce.useContext(ks), [l, d] = ce.useState(0), [f, u] = ce.useState(0), {
    // prettier-ignore
    assignColorsToValues: m,
    barBorderWidth: y,
    getAdditionalColumn: x,
    getHighlightedBarByValue: S,
    getHighlightedBarColorByValue: R,
    lollipopBarWidth: T,
    lollipopShapeSize: F,
    onMouseLeaveBar: k,
    onMouseOverBar: h,
    section: P
  } = Tc(), { colorScale: O, config: C, dashboardConfig: N, tableData: D, formatDate: B, formatNumber: H, getXAxisData: re, getYAxisData: oe, isNumber: ne, parseDate: j, seriesHighlight: X, setSharedFilter: G, transformedData: V, brushConfig: K, getTextWidth: ee } = ce.useContext(Et), { HighLightedBarUtils: de } = Sc(C);
  let Q = V;
  return C.preliminaryData.some((q) => q.value && q.type === "suppression") && (Q = D), K.data.length && (Q = K.data), C.visualizationSubType !== "stacked" && (C.visualizationType === "Bar" || C.visualizationType === "Combo" || Ac(C.visualizationType, Q, C.allowLineToBarGraph)) && C.orientation === "vertical" && /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(
    Um,
    {
      data: Q,
      keys: C.runtime.barSeriesKeys || C.runtime.seriesKeys,
      height: a,
      x0: (q) => {
        const Z = q[C.runtime.originalXAxis.dataKey];
        return wn(C.runtime.xAxis) ? j(Z) : Z;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (q) => q.map((Z, Me) => /* @__PURE__ */ r.createElement(ot, { className: `bar-group-${Z.index}-${Z.x0}--${Me} ${C.orientation}`, key: `bar-group-${Z.index}-${Z.x0}--${Me}`, id: `bar-group-${Z.index}-${Z.x0}--${Me}`, left: Z.x0 }, Z.bars.map((ke, pe) => {
      const Le = C.useLogScale ? 0.1 : 0;
      let We = C.highlightedBarValues.map((wt) => wt.value).filter((wt) => wt !== void 0);
      We = C.xAxis.type === "date" ? de.formatDates(We) : We;
      const Ze = C.legend.behavior === "highlight" && X.length > 0 && X.indexOf(ke.key) === -1, Ae = C.legend.behavior === "highlight" || X.length === 0 || X.indexOf(ke.key) !== -1;
      let me = i.range()[1] - i.range()[0];
      const _e = Math.abs(t(ke.value) - t(Le)), ae = ke.value >= 0 && ne(ke.value) ? ke.y : t(0);
      let se = C.isLollipopChart ? T : i.bandwidth(), xe = ke.x + (C.isLollipopChart ? (me / Z.bars.length - T) / 2 : 0) - (C.xAxis.type === "date-time" ? me / 2 : 0);
      d(se), u(Z.bars.length);
      const ze = H(/[a-zA-Z]/.test(String(ke.value)) ? "" : ke.value, "left"), Ve = C.runtime[P].type === "date" ? B(j(Q[Z.index][C.runtime.originalXAxis.dataKey])) : Q[Z.index][C.runtime.originalXAxis.dataKey], qe = ke.value < 0 ? -1 : pe, Qe = x(ke.key, Q[Z.index][C.runtime.originalXAxis.dataKey]);
      let tt = C.runtime.xAxis.label ? `${C.runtime.xAxis.label}: ${Ve}` : Ve;
      const et = `${C.runtime.seriesLabels[ke.key]}: ${ze}`, Ye = `<ul>
                  <li class="tooltip-heading">${tt}</li>
                  <li class="tooltip-body ">${et}</li>
                  ${Qe ? '<li class="tooltip-body ">' + Qe + "</li>" : ""}
                    </li></ul>`;
      let Re = "#000000";
      Re = de.checkFontColor(ze, We, Re);
      let Ce = C.runtime.seriesLabels && C.runtime.seriesLabels[ke.key] ? O(C.runtime.seriesLabels[ke.key]) : O(ke.key);
      Ce = m(q.length, Z.index, Ce);
      const at = C.isLollipopChart && C.lollipopColorStyle === "regular", Ge = C.isLollipopChart && C.lollipopColorStyle === "two-tone", ft = We == null ? void 0 : We.includes(Ve), ht = R(Ve), yt = S(Ve), _t = ft ? ht : C.barHasBorder === "true" ? "#000" : "transparent", an = ft ? yt.borderWidth : C.isLollipopChart ? 0 : C.barHasBorder === "true" ? y : 0, { barHeight: on, isSuppressed: Kt, getBarY: Jt, getAbsentDataLabel: Yt } = ky({ bar: ke, defaultBarHeight: _e, config: C, isNumber: ne, getTextWidth: ee, barWidth: se, isVertical: !0, yAxisValue: ze }), At = Yt(ze), Mt = C.labels ? ze : "", Vt = Jt(ae, t(Le)), Ie = Kt ? "none" : "block", en = (wt, zt) => {
        var xn;
        let mt = wt, tn = zt || "#f2f2f2";
        if (N && ((xn = N.dashboard.sharedFilters) == null ? void 0 : xn.length) !== 0) {
          const { sharedFilters: Ft } = N.dashboard;
          return mt = Ft ? Ft.map((nn) => nn.setBy === C.uid ? nn.resetLabel === nn.active || nn.active === V[Z.index][C.xAxis.dataKey] ? O(C.runtime.seriesLabels[ke.key]) : tn : O(C.runtime.seriesLabels[ke.key]))[0] : O(C.runtime.seriesLabels[ke.key]), at && (mt = wt), Ge && (mt = hs(wt).brighten(1)), ft && (mt = "transparent"), mt;
        }
        return Ge && (mt = hs(wt).brighten(1)), ft && (mt = "transparent"), mt;
      };
      return /* @__PURE__ */ r.createElement(ot, { key: `${Z.index}--${pe}` }, /* @__PURE__ */ r.createElement(ot, { key: `bar-sub-group-${Z.index}-${Z.x0}-${Vt}--${pe}` }, Cc({
        config: C,
        index: qe,
        id: `barGroup${Z.index}`,
        background: en(O(C.runtime.seriesLabels[ke.key])),
        borderColor: _t,
        borderStyle: "solid",
        borderWidth: `${an}px`,
        width: se,
        height: on,
        x: xe,
        y: Vt,
        onMouseOver: () => h(Ve, ke.key),
        onMouseLeave: k,
        tooltipHtml: Ye,
        tooltipId: `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
        onClick: (wt) => {
          wt.preventDefault(), G && (ke[C.xAxis.dataKey] = Ve, G(C.uid, ke));
        },
        styleOverrides: {
          transformOrigin: `0 ${Vt + on}px`,
          opacity: Ze ? 0.2 : 1,
          display: Ae ? "block" : "none",
          cursor: N ? "pointer" : "default"
        }
      }), C.preliminaryData.map((wt, zt) => {
        const mt = !wt.column || wt.column === ke.key;
        if (!(String(wt.value) === String(ke.value) && wt.value !== "" && mt) || se < 10 || !C.general.showSuppressedSymbol || wt.hideBarSymbol)
          return;
        const Ft = String(wt.symbol).includes("Asterisk"), nn = Ft ? -5 : -8, Ln = Ft ? "middle" : "end", Xt = wt.symbol === "Asterisk" ? se * 1.2 : wt.symbol === "Double Asterisk" ? se : se / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: zt,
            dy: nn,
            display: Ae ? "block" : "none",
            opacity: Ze ? 0.5 : 1,
            x: xe + se / 2,
            y: Vt,
            verticalAnchor: Ln,
            fill: Re,
            textAnchor: "middle",
            fontSize: `${Xt}px`
          },
          wt.iconCode
        );
      }), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Ae ? "block" : "none",
          opacity: Ze ? 0.5 : 1,
          x: xe + se / 2,
          y: Vt - 5,
          fill: Re,
          textAnchor: "middle"
        },
        Mt === "0" ? "" : Mt
      ), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Ae ? "block" : "none",
          opacity: Ze ? 0.5 : 1,
          x: xe + se / 2,
          y: Vt - 5,
          fill: Re,
          textAnchor: "middle",
          fontSize: se / 2
        },
        At
      ), C.isLollipopChart && C.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: Ie,
          cx: xe + F / 3.5,
          cy: ke.y,
          r: F / 2,
          fill: Ce,
          key: `circle--${ke.index}`,
          "data-tooltip-html": Ye,
          "data-tooltip-id": `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), C.isLollipopChart && C.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: Ie,
          x: xe - T / 2,
          y: Vt,
          width: F,
          height: F,
          fill: Ce,
          key: `circle--${ke.index}`,
          "data-tooltip-html": Ye,
          "data-tooltip-id": `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${F}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(C.confidenceKeys).length > 0 ? Q.map((q) => {
    let Z, Me, ke, pe, Le = 5;
    return Z = e(re(q)) + (C.xAxis.type !== "date-time" ? i.range()[1] / 2 : 0), ke = t(oe(q, C.confidenceKeys.lower)), pe = t(oe(q, C.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${Me}-${q[C.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${Z - Le} ${ke}
                    L${Z + Le} ${ke}
                    M${Z} ${ke}
                    L${Z} ${pe}
                    M${Z - Le} ${pe}
                    L${Z + Le} ${pe}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(Kf, { xScale: e, yMax: a, barWidth: l, totalBarsInGroup: f }));
}, gE = () => {
  var de;
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = ce.useContext(ks), { transformedData: i, tableData: l, colorScale: d, seriesHighlight: f, config: u, formatNumber: m, formatDate: y, parseDate: x, setSharedFilter: S, isNumber: R, getTextWidth: T, getYAxisData: F, getXAxisData: k } = ce.useContext(Et), { isHorizontal: h, barBorderWidth: P, updateBars: O, assignColorsToValues: C, section: N, fontSize: D, isLabelBelowBar: B, displayNumbersOnBar: H, lollipopBarWidth: re, lollipopShapeSize: oe, getHighlightedBarColorByValue: ne, getHighlightedBarByValue: j, getAdditionalColumn: X, hoveredBar: G, onMouseLeaveBar: V, onMouseOverBar: K } = Tc(), { HighLightedBarUtils: ee } = Sc(u);
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(
    Um,
    {
      data: (de = u.preliminaryData) != null && de.some((Q) => Q.value && Q.type === "suppression") ? l : i,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: n,
      x0: (Q) => Q[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (Q) => O(Q).map((te, q) => /* @__PURE__ */ r.createElement(ot, { className: `bar-group-${te.index}-${te.x0}--${q} ${u.orientation}`, key: `bar-group-${te.index}-${te.x0}--${q}`, id: `bar-group-${te.index}-${te.x0}--${q}`, top: te.y }, te.bars.map((Z, Me) => {
      var xn;
      const ke = u.useLogScale ? 0.1 : 0;
      let pe = u.highlightedBarValues.map((Ft) => Ft.value).filter((Ft) => Ft !== void 0);
      pe = u.xAxis.type === "date" ? ee.formatDates(pe) : pe;
      let Le = u.legend.behavior === "highlight" && f.length > 0 && f.indexOf(Z.key) === -1, We = u.legend.behavior === "highlight" || f.length === 0 || f.indexOf(Z.key) !== -1, Ze = u.barHeight, Ae = parseInt(u.isLollipopChart ? re : Ze);
      isNaN(Ae) && (Ae = 25);
      let me = Z.value >= 0 && R(Z.value) ? Z.y : t(ke);
      const _e = Math.abs(e(Z.value) - e(ke)), ae = Z.value >= 0 && R(Z.value), { barWidthHorizontal: se, isSuppressed: xe, getAbsentDataLabel: ze } = ky({ bar: Z, defaultBarWidth: _e, config: u, isNumber: R, getTextWidth: T, isVertical: !1 }), Ve = Z.value < 0 ? Math.abs(e(Z.value)) : e(ke), qe = m(Z.value, "left"), Qe = u.runtime[N].type === "date" ? y(x(i[te.index][u.runtime.originalXAxis.dataKey])) : i[te.index][u.runtime.originalXAxis.dataKey], tt = ae ? "above" : "below", et = ze(qe), Ye = u.yAxis.displayNumbersOnBar ? qe : "", Re = T(Qe, `normal ${D[u.fontSize]}px sans-serif`), Ce = Number(Re) < _e - 5;
      let at = Ce ? "end" : "start", Ge = "start", ft = Ce ? -5 : 5, ht = 10;
      tt === "below" && (at = Ce ? "start" : "end", ft = Ce ? 5 : -5, u.isLollipopChart && (Ge = "end", ht = -10));
      const yt = Z.value < 0 ? -1 : Me;
      let _t = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Qe}` : Qe;
      const an = X(G), on = `${u.runtime.seriesLabels[Z.key]}: ${qe}`, Kt = `<ul>
                  <li class="tooltip-heading"">${_t}</li>
                  <li class="tooltip-body ">${on}</li>
                  <li class="tooltip-body ">${an}</li>
                    </li></ul>`;
      let Jt = "#000000";
      Jt = ee.checkFontColor(qe, pe, Jt);
      let Yt = u.runtime.seriesLabels && u.runtime.seriesLabels[Z.key] ? d(u.runtime.seriesLabels[Z.key]) : d(Z.key);
      Yt = C(Q.length, te.index, Yt);
      const At = u.isLollipopChart && u.lollipopColorStyle === "regular", Mt = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Vt = pe == null ? void 0 : pe.includes(Qe), Ie = ne(Qe), en = j(Qe), wt = Vt ? Ie : u.barHasBorder === "true" ? "#000" : "transparent", zt = Vt ? en.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? P : 0, mt = xe ? "none" : "block";
      Yt && Jt && Ce && (Jt = Uo("#000", Yt));
      const tn = () => At ? Yt : Mt ? hs(Yt).brighten(1) : Vt ? "transparent" : Yt;
      return /* @__PURE__ */ r.createElement(ot, { key: `${te.index}--${Me}` }, /* @__PURE__ */ r.createElement(ot, { key: `bar-sub-group-${te.index}-${te.x0}-${me}--${Me}` }, Cc({
        config: u,
        index: yt,
        id: `barGroup${te.index}`,
        background: tn(),
        borderColor: wt,
        borderStyle: "solid",
        borderWidth: `${zt}px`,
        width: se,
        height: Ae,
        x: Ve,
        y: Ze * Z.index,
        onMouseOver: () => K(Qe, Z.key),
        onMouseLeave: V,
        tooltipHtml: Kt,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: (Ft) => {
          Ft.preventDefault(), S && (Z[u.xAxis.dataKey] = qe, S(u.uid, Z));
        },
        styleOverrides: {
          transformOrigin: `0 ${me + Ze}px`,
          opacity: Le ? 0.2 : 1,
          display: We ? "block" : "none"
        }
      }), (xn = u.preliminaryData) == null ? void 0 : xn.map((Ft, nn) => {
        const Ln = !Ft.column || Ft.column === Z.key;
        if (!(String(Ft.value) === String(Z.value) && Ft.value !== "" && Ln) || Ft.hideBarSymbol || !u.general.showSuppressedSymbol)
          return;
        const Hn = String(Ft.symbol).includes("Asterisk") ? "middle" : "end", Mn = Ft.symbol === "Asterisk" ? Ze * 1.2 : Ft.symbol === "Double Asterisk" ? Ze : Ze / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: nn,
            fontSize: Mn,
            display: We ? "block" : "none",
            opacity: Le ? 0.5 : 1,
            x: Ve,
            y: u.barHeight / 2 + u.barHeight * Z.index,
            fill: "#000",
            dy: u.barHeight / 5,
            dx: 10,
            textAnchor: "start",
            verticalAnchor: Hn
          },
          Ft.iconCode
        );
      }), !u.isLollipopChart && /* @__PURE__ */ r.createElement(
        St,
        {
          display: We ? "block" : "none",
          x: Z.y,
          opacity: Le ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * Z.index,
          fill: Jt,
          dx: -10,
          verticalAnchor: "middle",
          textAnchor: "end"
        },
        Ye === "0" ? "" : Ye
      ), !u.isLollipopChart && /* @__PURE__ */ r.createElement(
        St,
        {
          display: We ? "block" : "none",
          x: Z.y,
          opacity: Le ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * Z.index,
          fill: Jt,
          dx: et === "N/A" ? 20 : ft,
          verticalAnchor: "middle",
          textAnchor: et === "N/A" ? "middle" : at
        },
        et
      ), u.isLollipopChart && H && /* @__PURE__ */ r.createElement(
        St,
        {
          display: We ? "block" : "none",
          x: Z.y,
          y: 0,
          fill: "#000000",
          dx: ht,
          textAnchor: Ge,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        barLabel
      ), B && !u.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: u.yAxis.hideAxis ? 0 : 5, y: te.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? y(x(i[te.index][u.runtime.originalXAxis.dataKey])) : h ? i[te.index][u.runtime.originalXAxis.dataKey] : m(i[te.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: mt,
          cx: Z.y,
          cy: Ze * Z.index + re / 2,
          r: oe / 2,
          fill: Yt,
          key: `circle--${Z.index}`,
          "data-tooltip-html": Kt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: mt,
          x: Z.y > 10 ? Z.y - oe / 2 : 0,
          y: 0 - re / 2,
          width: oe,
          height: oe,
          fill: Yt,
          key: `circle--${Z.index}`,
          "data-tooltip-html": Kt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${oe}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? i.map((Q) => {
    let te, q, Z, Me = 5;
    return te = t(k(Q)) - 0.75 * u.barHeight, q = e(F(Q, u.confidenceKeys.upper)), Z = e(F(Q, u.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${te}-${Q[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${Z} ${te - Me}
                    L${Z} ${te + Me}
                    M${Z} ${te}
                    L${q} ${te}
                    M${q} ${te - Me}
                    L${q} ${te + Me} `
      }
    );
  }) : "");
}, Pu = {
  Vertical: yE,
  Horizontal: gE,
  StackedVertical: hE,
  StackedHorizontal: mE
}, vE = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, handleTooltipClick: f }) => {
  const { transformedData: u, config: m } = ce.useContext(Et), y = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Or, { component: "BarChart" }, /* @__PURE__ */ r.createElement(ks.Provider, { value: y }, /* @__PURE__ */ r.createElement(ot, { left: parseFloat(m.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Pu.StackedVertical, null), /* @__PURE__ */ r.createElement(Pu.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Pu.Vertical, null), /* @__PURE__ */ r.createElement(Pu.Horizontal, null), /* @__PURE__ */ r.createElement(kr, { key: "bars", display: m.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (x) => l(x, u), onMouseOut: d, onClick: (x) => f(x, u) }))));
};
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function Ai(e) {
  var t = e.x1, n = e.x2, a = e.y1, i = e.y2;
  return {
    x1: a,
    x2: i,
    y1: t,
    y2: n
  };
}
function wy(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, l = e.className, d = e.max, f = e.min, u = e.firstQuartile, m = e.thirdQuartile, y = e.median, x = e.boxWidth, S = x === void 0 ? 10 : x, R = e.fill, T = e.fillOpacity, F = e.stroke, k = e.strokeWidth, h = e.rx, P = h === void 0 ? 2 : h, O = e.ry, C = O === void 0 ? 2 : O, N = e.valueScale, D = e.outliers, B = D === void 0 ? [] : D, H = e.horizontal, re = e.medianProps, oe = re === void 0 ? {} : re, ne = e.maxProps, j = ne === void 0 ? {} : ne, X = e.minProps, G = X === void 0 ? {} : X, V = e.boxProps, K = V === void 0 ? {} : V, ee = e.outlierProps, de = ee === void 0 ? {} : ee, Q = e.container, te = Q === void 0 ? !1 : Q, q = e.containerProps, Z = q === void 0 ? {} : q, Me = e.children, ke = H ? i : n, pe = ke + (S || 0) / 2, Le = N.range(), We = N(f ?? 0), Ze = N(u ?? 0), Ae = N(y ?? 0), me = N(m ?? 0), _e = N(d ?? 0), ae = {
    valueRange: Le,
    center: pe,
    offset: ke,
    boxWidth: S,
    max: {
      x1: pe - (S || 0) / 4,
      x2: pe + (S || 0) / 4,
      y1: _e,
      y2: _e
    },
    maxToThird: {
      x1: pe,
      x2: pe,
      y1: _e,
      y2: me
    },
    median: {
      x1: ke,
      x2: ke + (S || 0),
      y1: Ae,
      y2: Ae
    },
    minToFirst: {
      x1: pe,
      x2: pe,
      y1: Ze,
      y2: We
    },
    min: {
      x1: pe - (S || 0) / 4,
      x2: pe + (S || 0) / 4,
      y1: We,
      y2: We
    },
    box: {
      x1: ke,
      x2: S || 0,
      y1: me,
      y2: Math.abs(me - Ze)
    },
    container: {
      x1: ke,
      x2: S || 0,
      y1: Math.min.apply(Math, Le),
      y2: Math.abs(Le[0] - Le[1])
    }
  };
  return H && (ae.max = Ai(ae.max), ae.maxToThird = Ai(ae.maxToThird), ae.box.y1 = Ze, ae.box = Ai(ae.box), ae.median = Ai(ae.median), ae.minToFirst = Ai(ae.minToFirst), ae.min = Ai(ae.min), ae.container = Ai(ae.container), ae.container.y1 = Math.min.apply(Math, Le)), Me ? /* @__PURE__ */ r.createElement(r.Fragment, null, Me(ae)) : /* @__PURE__ */ r.createElement(ot, {
    className: An("visx-boxplot", l)
  }, B.map(function(se, xe) {
    var ze = H ? N(se) : pe, Ve = H ? pe : N(se);
    return /* @__PURE__ */ r.createElement("circle", Na({
      key: "visx-boxplot-outlier-" + xe,
      className: "visx-boxplot-outlier",
      cx: ze,
      cy: Ve,
      r: 4,
      stroke: F,
      strokeWidth: k,
      fill: R,
      fillOpacity: T
    }, de));
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-max",
    x1: ae.max.x1,
    y1: ae.max.y1,
    x2: ae.max.x2,
    y2: ae.max.y2,
    stroke: F,
    strokeWidth: k
  }, j)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: ae.maxToThird.x1,
    y1: ae.maxToThird.y1,
    x2: ae.maxToThird.x2,
    y2: ae.maxToThird.y2,
    stroke: F,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("rect", Na({
    className: "visx-boxplot-box",
    x: ae.box.x1,
    y: ae.box.y1,
    width: ae.box.x2,
    height: ae.box.y2,
    stroke: F,
    strokeWidth: k,
    fill: R,
    fillOpacity: T,
    rx: P,
    ry: C
  }, K)), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-median",
    x1: ae.median.x1,
    y1: ae.median.y1,
    x2: ae.median.x2,
    y2: ae.median.y2,
    stroke: F,
    strokeWidth: k
  }, oe)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: ae.minToFirst.x1,
    y1: ae.minToFirst.y1,
    x2: ae.minToFirst.x2,
    y2: ae.minToFirst.y2,
    stroke: F,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-min",
    x1: ae.min.x1,
    y1: ae.min.y1,
    x2: ae.min.x2,
    y2: ae.min.y2,
    stroke: F,
    strokeWidth: k
  }, G)), te && /* @__PURE__ */ r.createElement("rect", Na({
    x: ae.container.x1,
    y: ae.container.y1,
    width: ae.container.x2,
    height: ae.container.y2,
    fillOpacity: "0"
  }, Z)));
}
wy.propTypes = {
  max: He.number,
  min: He.number,
  firstQuartile: He.number,
  thirdQuartile: He.number,
  median: He.number,
  boxWidth: He.number,
  fill: He.string,
  fillOpacity: He.oneOfType([He.number, He.string]),
  stroke: He.string,
  strokeWidth: He.oneOfType([He.number, He.string]),
  rx: He.number,
  ry: He.number,
  outliers: He.arrayOf(He.number),
  container: He.bool,
  children: He.func
};
const xE = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = ce.useContext(Et), { boxplot: i } = n;
  ce.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, d = (k) => `
      <strong>${k.columnCategory}</strong></br>
      ${i.labels.q1}: ${k.columnFirstQuartile}<br/>
      ${i.labels.q3}: ${k.columnThirdQuartile}<br/>
      ${i.labels.iqr}: ${k.columnIqr}<br/>
      ${i.labels.median}: ${k.columnMedian}
    `, f = (k) => Number(k.columnMax), u = (k) => Number(k.columnMin), m = (k) => Number(k.columnMedian), y = (k) => Number(k.columnThirdQuartile), x = (k) => Number(k.columnFirstQuartile), S = 0.5, R = e.bandwidth(), T = Math.min(40, R), F = ar[n == null ? void 0 : n.palette][0] ? ar[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Or, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(ot, { className: "boxplot", key: "boxplot-group" }, i.plots.map((k, h) => {
    const P = R - T, O = 4;
    return /* @__PURE__ */ r.createElement(ot, { key: `boxplotplot-${h}` }, i.plotNonOutlierValues && k.nonOutlierValues.map((C, N) => /* @__PURE__ */ r.createElement("circle", { cx: e(k.columnCategory) + Number(n.yAxis.size) + R / 2, cy: t(C), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${h}--circle-${N}` })), /* @__PURE__ */ r.createElement(
      wy,
      {
        "data-left": e(k.columnCategory) + n.yAxis.size + P / 2 + 0.5,
        key: `box-plot-${h}`,
        min: u(k),
        max: f(k),
        left: Number(e(k.columnCategory)) + Number(n.yAxis.size) + P / 2 + 0.5,
        firstQuartile: x(k),
        thirdQuartile: y(k),
        median: m(k),
        boxWidth: T,
        fill: F,
        fillOpacity: S,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? k.columnOutliers : [],
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
            strokeWidth: i.borders === "true" ? 1 : 0
          }
        },
        maxProps: {
          style: {
            stroke: "black"
          }
        },
        container: !0,
        containerProps: {
          "data-tooltip-html": d(k),
          "data-tooltip-id": l,
          tabIndex: -1
        }
      }
    ));
  })));
}, bE = ({ xScale: e, yScale: t }) => {
  const { transformedData: n, config: a, tableData: i, formatNumber: l, seriesHighlight: d, colorPalettes: f } = ce.useContext(Et), u = 4.5, m = Object.keys(a.runtime.seriesLabels).length > 1, y = Object.entries(a.columns).filter(([S, R]) => R.tooltips).map(([S, R]) => [
    R.label || R.name,
    R.name,
    {
      addColPrefix: R.prefix,
      addColSuffix: R.suffix,
      addColRoundTo: R.roundToPlace,
      addColCommas: R.commas
    }
  ]), x = (S, R, T) => `<div>
    ${a.legend.showLegendValuesTooltip && a.runtime.seriesLabels && m ? `${a.runtime.seriesLabels[R] || ""}<br/>` : ""}
    ${a.xAxis.label}: ${l(S[a.xAxis.dataKey], "bottom")} <br/>
    ${a.yAxis.label}: ${l(S[R], "left")}<br/>
   ${y.map(([F, k, h]) => `${F} : ${Sf(i[T][k], "left", !1, a, h)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ r.createElement(ot, { className: "scatter-plot", left: a.yAxis.size }, n.map((S, R) => a.runtime.seriesKeys.map((T, F) => {
    const k = a.legend.behavior === "highlight" && d.length > 0 && d.indexOf(T) === -1, h = a.legend.behavior === "highlight" || d.length === 0 || d.indexOf(T) !== -1, P = a.palette ? f[a.palette][F] : "#000";
    let O = {
      filter: "unset",
      opacity: 1,
      stroke: h ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${R}-${F}`,
        r: u,
        cx: e(S[a.xAxis.dataKey]),
        cy: t(S[T]),
        fill: h ? P : "transparent",
        fillOpacity: k ? 0.25 : 1,
        style: O,
        "data-tooltip-html": x(S, T, R),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function SE({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: l, getTextWidth: d, updateConfig: f, parseDate: u, formatDate: m, currentViewport: y } = ce.useContext(Et), { barStyle: x, tipRounding: S, roundingStyle: R, twoColor: T } = a, F = ce.useRef([]), [k, h] = ce.useState(window.innerWidth), P = R === "standard" ? "8px" : R === "shallow" ? "5px" : R === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const C = Number(a.xAxis.target), N = a.series[0].dataKey, D = Number(t.domain()[1]), H = n.some((Q) => Q[N] < 0) || C > 0 || t.domain()[0] < 0, re = a.barHasBorder === "true" ? 1 : 0, oe = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, ne = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, j = Math.max(t(0), Math.min(t(C), t(D))), X = (Q) => {
    if (Q == null || x !== "rounded")
      return;
    let te = {};
    return Q === "left" && (te = { borderRadius: `${P} 0 0 ${P}` }), Q === "right" && (te = { borderRadius: `0 ${P} ${P} 0` }), S === "full" && (te = { borderRadius: P }), te;
  }, G = {
    calculate: function() {
      const te = n[0][N] < C ? "left" : "right", q = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, Z = d(q, `bold ${O[a.fontSize]}px sans-serif`);
      let Me = a.isLollipopChart ? oe / 2 : Number(a.barHeight) / 2, ke = 0, pe = 0, Le = !1;
      te === "right" && (ke = -10, Le = Z - ke < j, pe = j - Z), te === "left" && (ke = 10, Le = t(D) - j > Z + ke, pe = j), this.text = q, this.y = Me, this.x = pe, this.padding = ke, this.showLabel = a.xAxis.showTargetLabel ? Le : !1;
    }
  };
  G.calculate();
  const V = ce.useRef(null), K = Wf(V, {});
  ce.useEffect(() => {
    const Q = () => {
      var te;
      h(window.innerWidth), (te = F.current) == null || te.forEach((q) => {
        !q || !q.style || (q.style.transition = "none", q.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", Q), () => {
      window.removeEventListener("resize", Q);
    };
  }, []);
  const [ee, de] = ce.useState(!1);
  return ce.useEffect(() => {
    K != null && K.isIntersecting && setTimeout(() => {
      de(!0);
    }, 100);
  }, [K == null ? void 0 : K.isIntersecting, a.animate]), ce.useEffect(() => {
    var Q;
    (Q = F.current) == null || Q.forEach((te, q) => {
      if (!(!te || !te.style)) {
        if (a.animate) {
          const Z = C / D * 100;
          te.style.opacity = "0", te.style.transform = `translate(${Z / 1.07}%) scale(0, 1)`, setTimeout(() => {
            te.style.opacity = "1", te.style.transform = "translate(0) scale(1)", te.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          te.style.transition = "none", te.style.opacity = "0";
        a.animate || (te.style.transition = "none", te.style.opacity = "1");
      }
    });
  }, [a.animate, a, ee]), /* @__PURE__ */ r.createElement(Or, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(ot, { left: Number(a.xAxis.size) }, n.map((Q, te) => {
    const q = Number(Q[N]), Z = a.isLollipopChart ? oe : Number(a.barHeight), Me = Number(a.barSpace), ke = Math.abs(t(q) - j), pe = t(q), Le = q > C ? j : pe, We = q < C ? "left" : "right";
    let Ze = 0;
    Ze = te !== 0 ? (Me + Z + re) * te : Ze;
    const Ae = (Me + Z + re) * n.length;
    a.heights.horizontal = Ae;
    const _e = d(i(q, "left"), `normal ${O[a.fontSize]}px sans-serif`) < ke - 6, ae = pe, se = Ze + Z / 2, xe = pe, ze = Ze + Z / 2, Ve = pe, qe = Ze - Z / 2, Qe = X(We), [tt, et] = l[T.palette], Ye = { left: tt, right: et }, Re = Uo("#000", Ye[We]);
    let Ce = EE(a.isLollipopChart, _e, ne, Re);
    const at = i(q, "left"), Ge = a.runtime.yAxis.type === "date" ? m(u(n[te][a.runtime.originalXAxis.dataKey])) : n[te][a.runtime.originalXAxis.dataKey];
    let ft = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Ge}` : Ge, ht = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${at}` : at;
    const yt = `<div>
          ${ft}<br />
          ${ht}
            </div>`;
    return /* @__PURE__ */ r.createElement(ot, { key: `deviation-bar-${a.orientation}-${N}-${te}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (_t) => {
          F.current[te] = _t;
        },
        x: Le,
        y: Ze,
        width: ke,
        height: Z,
        "data-tooltip-html": yt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: ke, height: Z, border: `${re}px solid #333`, backgroundColor: Ye[We], ...Qe } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(St, { verticalAnchor: "middle", x: ae, y: se, ...Ce[We] }, i(Q[N], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: xe, cy: ze, r: ne / 2, fill: Ye[We], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: Ve, y: qe, width: ne, height: ne, fill: Ye[We], style: { opacity: 1, filter: "unset" } }));
  }), G.showLabel && /* @__PURE__ */ r.createElement(St, { fontWeight: "bold", dx: G.padding, verticalAnchor: "middle", x: G.x, y: G.y }, G.text), H && /* @__PURE__ */ r.createElement(un, { from: { x: j, y: 0 }, to: { x: j, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: V }));
}
function EE(e, t, n, a) {
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
      fill: t ? a : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? a : "#000000"
    }
  };
}
const kE = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l }) => {
  var T;
  const { transformedData: d, rawData: f, config: u, seriesHighlight: m } = ce.useContext(Et), { xAxis: y, yAxis: x, legend: S, runtime: R } = u;
  return d && /* @__PURE__ */ r.createElement(Or, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(ot, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(x.size) }, (T = R.forecastingSeriesKeys) == null ? void 0 : T.map((F, k) => !F || !F.stages ? !1 : F.stages.map((h, P) => {
    var B;
    const { behavior: O } = S, C = f.filter((H) => H[F.stageColumn] === h.key);
    let N = O === "highlight" && m.length > 0 && m.indexOf(h.key) === -1, D = O === "highlight" || m.length === 0 || m.indexOf(h.key) !== -1;
    return /* @__PURE__ */ r.createElement(ot, { className: `forecasting-areas-combo-${k}`, key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}-${k}` }, (B = F.confidenceIntervals) == null ? void 0 : B.map((H, re) => {
      const oe = $u[h.color] || ar[h.color] || !1, ne = () => D && oe[2] ? oe[2] : "transparent", j = () => D && oe[1] ? oe[1] : "transparent";
      if (!(H.high === "" || H.low === ""))
        return /* @__PURE__ */ r.createElement(ot, { key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}--group-${P}-${re}` }, /* @__PURE__ */ r.createElement(
          g0,
          {
            curve: Fu,
            data: C,
            fill: ne(),
            opacity: N ? 0.1 : 0.5,
            x: (X) => e(Date.parse(X[y.dataKey])),
            y0: (X) => t(X[H.low]),
            y1: (X) => t(X[H.high])
          }
        ), re === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nr, { data: C, x: (X) => Number(e(Date.parse(X[y.dataKey]))), y: (X) => Number(t(X[H.high])), curve: Fu, stroke: j(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Nr, { data: C, x: (X) => Number(e(Date.parse(X[y.dataKey]))), y: (X) => Number(t(X[H.low])), curve: Fu, stroke: j(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(ot, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (F) => i(F, d), onMouseOut: l }))));
};
function zu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Lc(e, t) {
  const n = e.series.every(({ type: S }) => S === "Bar"), a = e.series.every(({ type: S }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(S)), i = (S) => (R) => S.reduce((T, F) => isNaN(Number(R[F])) ? T : T + Number(R[F]), 0), l = () => {
    let S = Math.max(...t.map((R) => Math.max(...e.runtime.seriesKeys.map((T) => zu(R[T]) ? Number(u(R[T])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const R = t.map(i(e.runtime.seriesKeys)).filter((T) => !isNaN(T));
      S = Math.max(...R);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const R = t.map(i(e.runtime.seriesKeys));
      S = Math.max(...R);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (S = Math.max(...t.map((R) => zu(R[e.series.dataKey]) ? Number(u(R[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const R = t.map(i(e.runtime.barSeriesKeys)), T = Math.max(...t.map((k) => Math.max(...e.runtime.lineSeriesKeys.map((h) => Number(u(k[h])))))), F = Math.max(...R);
      S = Math.max(F, T);
    }
    return S;
  }, d = () => {
    const S = Math.min(...t.map((R) => Math.min(...e.runtime.seriesKeys.map((T) => zu(R[T]) ? Number(u(R[T])) : 1 / 0))));
    return String(S);
  }, f = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((S) => t.some((R) => R[S] >= 0)) : !1, u = (S) => S === null || S === "" ? "" : typeof S == "string" ? S.replace(/[,$]/g, "") : S, m = Number(l()), y = Number(d()), x = f();
  return { minValue: y, maxValue: m, existPositiveValue: x, isAllLine: a };
}
function Yf({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var S, R, T, F;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((k) => k.axis === "Right").map((k) => k.dataKey);
  let { minValue: d } = Lc(e, n);
  const f = (k) => {
    if (!k)
      return [0];
    let h = [];
    return k.map((P, O) => h = [...h, ...n.map((C) => Number(C[P]))]), h;
  };
  let u = Math.max.apply(null, f(l));
  e.yAxis.rightMax > u && (u = e.yAxis.rightMax), e.yAxis.rightMin < d && (d = e.yAxis.rightMin);
  const m = ((R = (S = e.runtime) == null ? void 0 : S.barSeriesKeys) == null ? void 0 : R.length) > 0, y = ((F = (T = e.runtime) == null ? void 0 : T.lineSeriesKeys) == null ? void 0 : F.length) > 0;
  return (m || y) && d > 0 && (d = 0), { yScaleRight: $n({
    domain: [d, u],
    range: [t, 0]
  }), hasRightAxis: i };
}
const wE = (e) => {
  const { preliminaryData: t, data: n, stroke: a, strokeWidth: i, handleLineType: l, lineType: d, seriesKey: f } = e, u = t.filter((S) => S.seriesKey && S.column && S.value && S.type && S.style && S.type === "effect"), m = (S) => u.find((R) => R.seriesKey === f && S[R.column] === R.value && R.type === "effect" && R.style !== "Open Circles");
  let y = [];
  const x = (S) => ({
    stroke: a,
    strokeWidth: i,
    strokeDasharray: S
  });
  return n.forEach((S, R) => {
    let T = m(S), F = x(l(T ? T.style : d));
    y.push(F), T && R > 0 && (y[R - 1] = x(l(T.style)));
  }), y;
}, TE = (e, t, n) => {
  const a = e == null ? void 0 : e.filter((l) => l.style.includes("Circles") && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey, circleSize: l.circleSize, style: l.style })), i = [];
  return t.forEach((l) => {
    a.forEach((d) => {
      if (l[d.column] === d.value && d.seriesKey === n && l[n] && d.style === "Open Circles") {
        const f = {
          data: l,
          size: d.circleSize,
          isFilled: !1
        };
        i.push(f);
      }
      if ((!d.value || l[d.column] === d.value) && d.seriesKey === n && l[n] && d.style === "Filled Circles") {
        const f = {
          data: l,
          size: d.circleSize,
          isFilled: !0
        };
        i.push(f);
      }
    });
  }), i;
}, hc = (e) => !isNaN(parseFloat(e)) && isFinite(e), CE = (e, t, n) => {
  const a = {
    data: [],
    style: ""
  };
  if (!e.length)
    return a;
  const i = e[0], l = (f) => {
    if (!(f.type === "effect" || f.hideLineStyle))
      return f.type == "suppression" && f.value === i[t] && (!f.column || f.column === t);
  }, d = n.find(l);
  if (d && d.style) {
    const f = { ...i, [t]: 0 };
    a.data.push(f), a.style = d.style;
    let u = 1;
    for (; u < e.length && !hc(e[u][t]); )
      u++;
    u < e.length && a.data.push(e[u]);
  } else
    a.data.push(i);
  return a;
}, AE = (e, t, n) => {
  const a = {
    data: [],
    style: ""
  };
  let i = -1;
  return n == null || n.forEach((l) => {
    if (l.type !== "effect" && e[e.length - 1][t] === l.value && l.style && (!l.column || l.column === t) && l.type == "suppression" && !l.hideLineStyle) {
      const d = e.length - 1, f = { ...e[d], [t]: 0 };
      a.data.push(f);
      let u = d - 1;
      for (; u >= 0 && !hc(e[u][t]); )
        u--;
      u >= 0 && i !== u && (a.data.push(e[u]), i = u), a.style = l.style;
    }
  }), a;
};
function LE(e, t, n, a) {
  const i = {
    data: [],
    style: ""
  }, l = (d) => d > 0 && d < e.length - 1;
  return a == null || a.forEach((d) => {
    if (d.type === "effect" || d.hideLineStyle)
      return;
    const f = d.value;
    e.reduce((m, y, x) => (y[t] === f && l(x) && (!d.column || d.column === t) && m.push(x), m), []).forEach((m) => {
      i.style = d.style, hc(e[m - 1][t]) && i.data.push(e[m - 1]);
      const y = e.slice(m + 1).findIndex((x) => x[t] !== f && hc(x[t]));
      y !== -1 && i.data.push(e[m + 1 + y]);
    });
  }), i.data = hr.uniqWith(i.data, (d, f) => d[n] === f[n] && d[t] === f[t]), i;
}
const PE = (e, t, n, a) => {
  const i = CE(e, t, n), l = AE(e, t, n), d = LE(e, t, a, n);
  return [i, d, l].filter((f) => f.data.length > 0 && f.style !== "");
}, Wd = (e) => {
  var C, N, D, B, H, re, oe, ne;
  const { config: t, d: n, tableData: a, displayArea: i, seriesKey: l, tooltipData: d, xScale: f, yScale: u, colorScale: m, parseDate: y, yScaleRight: x, data: S, circleData: R, dataIndex: T, mode: F } = e, { lineDatapointStyle: k } = t, h = (C = t == null ? void 0 : t.series.filter((j) => j.dataKey === l)) == null ? void 0 : C[0], P = (j, X, G, V, K) => {
    const ee = G.runtime.seriesLabels || [];
    let de;
    return j ? de = X(ee[V] || K) : de = "transparent", G.lineDatapointColor === "Lighter than Line" && de !== "transparent" && de && (de = hs(de).brighten(1)), de;
  }, O = (j) => (t.xAxis.type === "categorical" ? f(j) : f(y(j))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (F === "ALWAYS_SHOW_POINTS") {
    if (k === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (k === "always show")
      return (R == null ? void 0 : R.some((X) => X[t.xAxis.dataKey] === n[t.xAxis.dataKey] && X[l] === n[l])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: O(n[t.xAxis.dataKey]),
          cy: h.axis === "Right" ? x(n[h.dataKey]) : u(n[h.dataKey]),
          r: 4.5,
          opacity: n[l] ? 1 : 0,
          fillOpacity: 1,
          fill: P(i, m, t, l, l),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (F === "HOVER_POINTS" && k === "hover") {
    if (!d || !l || !d.data)
      return;
    let j = (D = (N = d == null ? void 0 : d.data) == null ? void 0 : N[0]) == null ? void 0 : D[1];
    if (!j)
      return;
    let X, G = d.data.filter((ee) => ee[0] === l), V = (B = G == null ? void 0 : G[0]) == null ? void 0 : B[0], K = (H = G == null ? void 0 : G[0]) == null ? void 0 : H[2];
    return V ? (d == null || d.data.indexOf(V), X = (re = a == null ? void 0 : a.find((ee) => ee[t == null ? void 0 : t.xAxis.dataKey] === j)) == null ? void 0 : re[l], d == null ? void 0 : d.data.map((ee, de) => (t.runtime.seriesLabelsAll.indexOf(j), isNaN(X) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (R == null ? void 0 : R.some((te) => te[t.xAxis.dataKey] === j)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: O(j),
        cy: K === "right" ? x(X) : u(X),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: P(i, m, t, V, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(ee)}--${de}`
      }
    )))) : void 0;
  }
  return F === "ISOLATED_POINTS" && F && ((X, G) => {
    const V = S[X], K = X > 0 ? S[X - 1] : null, ee = X < S.length - 1 ? S[X + 1] : null;
    let de = !1;
    return X === 0 && ee && !ee[G] && (de = !0), X === S.length - 1 && K && !K[G] && (de = !0), X > 0 && X < S.length - 1 && V && V[G] && (!K || !K[G]) && (!ee || !ee[G]) && (de = !0), de;
  })(T, l) ? /* @__PURE__ */ r.createElement("circle", { cx: O(n[(oe = t.xAxis) == null ? void 0 : oe.dataKey]), cy: h.axis === "Right" ? x(n[h.dataKey]) : u(n[h == null ? void 0 : h.dataKey]), r: 5.3, strokeWidth: 2, stroke: m(t.runtime.seriesLabels[l]), fill: m((ne = t.runtime) == null ? void 0 : ne.seriesLabels[l]) }) : null;
}, Rh = (e) => {
  var X;
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: a,
    handleTooltipMouseOff: i,
    handleTooltipMouseOver: l,
    tooltipData: d,
    xMax: f,
    xScale: u,
    yMax: m,
    yScale: y
  } = e, { colorScale: x, config: S, formatNumber: R, handleLineType: T, isNumber: F, parseDate: k, seriesHighlight: h, tableData: P, transformedData: O, updateConfig: C, brushConfig: N, clean: D } = ce.useContext(Et), { yScaleRight: B } = Yf({ config: S, yMax: m, data: O, updateConfig: C });
  if (!l)
    return;
  const { lineDatapointStyle: H, showLineSeriesLabels: re, legend: oe } = S;
  let ne = O, j = P;
  return N.data.length > 0 && ((X = S.brush) != null && X.active) && (ne = D(N.data), j = D(N.data)), /* @__PURE__ */ r.createElement(Or, { component: "LineChart" }, /* @__PURE__ */ r.createElement(ot, { left: Number(S.runtime.yAxis.size) }, " ", (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((G, V) => {
    var ke;
    let K = S.series.filter((pe) => pe.dataKey === G)[0].type;
    const ee = S.series.filter((pe) => pe.dataKey === G), de = ee[0].axis ? ee[0].axis : "left";
    let Q = oe.behavior === "highlight" || h.length === 0 || h.indexOf(G) !== -1;
    const te = TE(S == null ? void 0 : S.preliminaryData, j, G);
    let q = wE({ preliminaryData: S.preliminaryData, data: j, stroke: x(S.runtime.seriesLabels[G]), strokeWidth: ee[0].weight || 2, handleLineType: T, lineType: K, seriesKey: G });
    const Z = PE(P, G, S.preliminaryData, S.xAxis.dataKey);
    let Me = (pe) => u(t(pe)) + (u.bandwidth ? u.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      ot,
      {
        key: `series-${G}`,
        opacity: oe.behavior === "highlight" && h.length > 0 && h.indexOf(G) === -1 ? 0.5 : 1,
        display: oe.behavior === "highlight" || h.length === 0 && !oe.dynamicLegend || h.indexOf(G) !== -1 ? "block" : "none"
      },
      ne.map((pe, Le) => {
        const We = S.series.find(({ dataKey: ae }) => ae === G), { axis: Ze } = We, Ae = Object.keys(S.runtime.seriesLabels).length > 1, me = Ze === "Right" ? "rightLabel" : "label";
        let _e = S.runtime.yAxis[me];
        return Ae || (_e = S.isLegendValue ? S.runtime.seriesLabels[G] : _e), pe[G] !== void 0 && pe[G] !== "" && pe[G] !== null && F(pe[G]) && /* @__PURE__ */ r.createElement(ot, { key: `series-${G}-point-${Le}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(f), height: Number(m), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ae) => l(ae, P), onMouseOut: i, onClick: (ae) => a(ae, ne) }), /* @__PURE__ */ r.createElement(St, { display: S.labels ? "block" : "none", x: Me(pe), y: de === "Right" ? B(n(pe, G)) : y(n(pe, G)), fill: "#000", textAnchor: "middle" }, R(pe[G], "left")), (H === "hidden" || H === "always show") && /* @__PURE__ */ r.createElement(
          Wd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Le,
            circleData: te,
            tableData: P,
            data: ne,
            d: pe,
            config: S,
            seriesKey: G,
            displayArea: Q,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: de,
            key: `line-circle--${Le}`
          }
        ), /* @__PURE__ */ r.createElement(
          Wd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Le,
            tableData: P,
            circleData: te,
            data: ne,
            d: pe,
            config: S,
            seriesKey: G,
            displayArea: Q,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: de,
            key: `isolated-circle-${Le}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, H === "hover" && /* @__PURE__ */ r.createElement(
        Wd,
        {
          tableData: P,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: te,
          data: ne,
          config: S,
          seriesKey: G,
          displayArea: Q,
          tooltipData: d,
          xScale: u,
          yScale: y,
          colorScale: x,
          parseDate: k,
          yScaleRight: B,
          seriesAxis: de
        }
      )),
      (ke = S == null ? void 0 : S.preliminaryData) != null && ke.some((pe) => pe.value && pe.type) ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Xm,
        {
          curve: ds[ee[0].lineType],
          segments: ne.map((pe) => [pe]),
          segmentation: "x",
          x: (pe) => Me(pe),
          y: (pe) => de === "Right" ? B(n(pe, G)) : y(Number(n(pe, G))),
          styles: q,
          defined: (pe, Le) => pe[G] !== "" && pe[G] !== null && pe[G] !== void 0
        }
      ), Z.map((pe, Le) => /* @__PURE__ */ r.createElement(
        Nr,
        {
          key: Le,
          data: pe.data,
          x: (We) => Me(We),
          y: (We) => de === "Right" ? B(n(We, G)) : y(Number(n(We, G))),
          stroke: x(S.runtime.seriesLabels[G]),
          strokeWidth: ee[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: T(pe.style),
          defined: (We, Ze) => We[G] !== "" && We[G] !== null && We[G] !== void 0
        }
      ))) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Nr,
        {
          curve: ds[ee[0].lineType],
          data: S.xAxis.type === "date-time" || S.xAxis.type === "date" ? ne.sort((pe, Le) => {
            let We = t(pe), Ze = t(Le);
            return We < Ze ? -1 : Ze < We ? 1 : 0;
          }) : ne,
          x: (pe) => Me(pe),
          y: (pe) => de === "Right" ? B(n(pe, G)) : y(Number(n(pe, G))),
          stroke: x(S.runtime.seriesLabels[G]),
          strokeWidth: ee[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? T(K) : 0,
          defined: (pe, Le) => pe[G] !== "" && pe[G] !== null && pe[G] !== void 0
        }
      )),
      te.map((pe, Le) => /* @__PURE__ */ r.createElement(
        "circle",
        {
          key: Le,
          cx: Me(pe.data),
          cy: de === "Right" ? B(n(pe.data, G)) : y(Number(n(pe.data, G))),
          r: pe.size,
          strokeWidth: ee[0].weight || 2,
          stroke: x ? x(S.runtime.seriesLabels[G]) : "#000",
          fill: pe.isFilled ? x ? x(S.runtime.seriesLabels[G]) : "#000" : "#fff"
        }
      )),
      S.animate && /* @__PURE__ */ r.createElement(
        Nr,
        {
          className: "animation",
          curve: ds[ee[0].lineType],
          data: ne,
          x: (pe) => Me(pe),
          y: (pe) => de === "Right" ? B(n(pe, G)) : y(Number(n(pe, G))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? T(K) : 0,
          defined: (pe, Le) => pe[G] !== "" && pe[G] !== null && pe[G] !== void 0
        }
      ),
      re && (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((pe) => {
        let Le;
        for (let We = ne.length - 1; We >= 0; We--)
          if (ne[We][pe]) {
            Le = ne[We];
            break;
          }
        return Le ? /* @__PURE__ */ r.createElement("text", { x: Me(Le) + 5, y: y(n(Le, pe)), alignmentBaseline: "middle", fill: S.colorMatchLineSeriesLabels && x ? x(S.runtime.seriesLabels[pe] || pe) : "black" }, S.runtime.seriesLabels[pe] || pe) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), S.legend.dynamicLegend && h.length === 0 && /* @__PURE__ */ r.createElement(St, { x: f / 2, y: m / 2, fill: "black", textAnchor: "middle", color: "black" }, S.legend.dynamicLegendChartMessage)));
}, RE = (e) => {
  const { rawData: t, updateConfig: n } = ce.useContext(Et), { xScale: a, yScale: i, config: l, height: d, width: f, handleTooltipMouseOff: u, handleTooltipMouseOver: m } = e, { forestPlot: y } = l, x = l.xAxis.tickWidthMax + 10, [S, R] = ce.useState(!1);
  ce.useEffect(() => {
    try {
      const C = ["estimateField", "lower", "upper", "estimateRadius"], N = l, D = 10;
      for (let B = 0; B < D; B++)
        C.forEach((H) => {
          var re;
          l.forestPlot[H] && l.forestPlot[H] !== ((re = N.columns[l.forestPlot[`additionalColumn${B}`]]) == null ? void 0 : re.name) && (delete N.columns[`additionalColumn${B}`], N.columns[l.forestPlot[H]] = {}, N.columns[l.forestPlot[H]].dataKey = N.forestPlot[H], N.columns[l.forestPlot[H]].name = N.forestPlot[H], N.columns[l.forestPlot[H]].dataTable = !0, N.columns[l.forestPlot[H]].tooltips = !0, N.columns[l.forestPlot[H]].label = N.forestPlot[H]);
        });
      l.forestPlot.radius.scalingColumn && (N.columns[l.forestPlot.radius.scalingColumn] = {}, N.columns[l.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[l.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[l.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = l.xAxis.dataKey), n(N);
    } catch (C) {
      console.log(C.message);
    }
  }, []), ce.useEffect(() => {
    !S && l.forestPlot.type === "Logarithmic" && (n({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), R(!0));
  }, [l.forestPlot.type]);
  const T = l.data.find((C) => C[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), F = T ? [
    { x: a(T[l.forestPlot.lower]), y: d - Number(l.forestPlot.rowHeight) },
    { x: a(T[l.forestPlot.estimateField]), y: d - y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(T[l.forestPlot.upper]), y: d - Number(l.forestPlot.rowHeight) },
    { x: a(T[l.forestPlot.estimateField]), y: d + y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(T[l.forestPlot.lower]), y: d - Number(l.forestPlot.rowHeight) }
  ] : [], k = l.forestPlot.rowHeight, h = [
    { x: 0, y: k },
    { x: f, y: k }
  ], P = [
    { x: 0, y: d },
    { x: f, y: d }
  ], O = Object.entries(l.columns).map((C) => C[1]).filter((C) => C.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { width: f }, y.title && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--title", x: y.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ r.createElement(un, { from: { x: a(0), y: 0 + k }, to: { x: a(0), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ r.createElement(un, { from: { x: a(1), y: 0 + k }, to: { x: a(1), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((C, N) => {
    const D = $n({
      domain: t.map((j) => j[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), B = y.radius.scalingColumn !== "" ? D(t[N][y.radius.scalingColumn]) : 4, H = y.colors.shape ? y.colors.shape : "black", re = y.colors.line ? y.colors.line : "black", oe = 4;
    return C[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ r.createElement(Nr, { data: F, x: (j) => j.x, y: (j) => j.y - Ei(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Qd }) : /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: re,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(C[y.lower])} ${i(N) - Number(oe)}
                    L${a(C[y.lower])} ${i(N) + Number(oe)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: re,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(C[y.upper])} ${i(N) - Number(oe)}
                    L${a(C[y.upper])} ${i(N) + Number(oe)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: re, className: `line-${C[l.yAxis.dataKey]}`, key: N, x1: a(C[y.lower]), x2: a(C[y.upper]), y1: i(N), y2: i(N) }), y.shape === "circle" && /* @__PURE__ */ r.createElement(rg, { className: "forest-plot--circle", cx: a(Number(C[y.estimateField])), cy: i(N), r: y.radius.scalingColumn !== "" ? D(t[N][y.radius.scalingColumn]) : 4, fill: H, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(C[y.estimateField])), y: i(N) - B / 2, width: B, height: B, fill: H, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--text", x: a(Number(C[y.estimateField])), y: i(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: H }, C[y.estimateField]));
  }), F && y.regression.showDiamond && /* @__PURE__ */ r.createElement(Nr, { data: F, x: (C) => C.x, y: (C) => C.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Qd }), y.regression.description && /* @__PURE__ */ r.createElement(St, { x: 0 - Number(l.xAxis.size), width: f, y: d - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ r.createElement(kr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: f, height: d, fill: "transparent", fillOpacity: 0.5, onMouseMove: (C) => m(C, t), onMouseOut: u })), /* @__PURE__ */ r.createElement(un, { from: h[0], to: h[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(un, { from: P[0], to: P[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((C) => t.map((N, D) => /* @__PURE__ */ r.createElement(St, { className: `${N[C.name]}`, x: C.forestPlotAlignRight ? f : C.forestPlotStartingPoint, y: i(D), textAnchor: C.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, N[C.name]))), !y.hideDateCategoryCol && t.map((C, N) => /* @__PURE__ */ r.createElement(St, { className: `${C[l.xAxis.dataKey]}`, x: 0, y: i(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, C[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(St, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, l.xAxis.dataKey), O.map((C) => /* @__PURE__ */ r.createElement(St, { className: `${C.label}`, x: C.forestPlotAlignRight ? f : C.forestPlotStartingPoint, y: 0, textAnchor: C.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, C.label)), y.leftLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__left-label", x: y.type === "Linear" ? a(0) - 25 : a(1) - 25, y: d + x, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__right-label", x: y.type === "Linear" ? a(0) + 25 : a(1) + 25, y: d + x, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, DE = ({ width: e, height: t, originalWidth: n }) => {
  var O, C, N;
  const { config: a, colorScale: i, transformedData: l, formatNumber: d, seriesHighlight: f, getTextWidth: u } = ce.useContext(Et);
  if (!a || ((O = a == null ? void 0 : a.series) == null ? void 0 : O.length) < 2)
    return;
  const m = a.barHasBorder === "true" ? 1 : 0, y = e / 2, x = { small: 16, medium: 18, large: 20 }, S = 1.02, R = {
    parentKey: (C = a.dataDescription) == null ? void 0 : C.seriesKey,
    dataKey: a.series[0].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[0].dataKey] || a.series[0].dataKey,
    color: i(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((D) => D[a.series[0].dataKey])
    ),
    labelColor: ""
  }, T = {
    parentKey: (N = a.dataDescription) == null ? void 0 : N.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: i(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((D) => D[a.series[1].dataKey])
    ),
    labelColor: ""
  }, F = $n({
    domain: [0, Math.max(R.max * S, T.max * 1.1)],
    range: [0, y]
  });
  R.labelColor = R.color ? Uo("#000", R.color) : "#000", T.labelColor = T.color ? Uo("#000", T.color) : "#000";
  const k = a.yAxis.label ? `${a.yAxis.label}: ` : "", h = (D) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${R.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${D[a.xAxis.dataKey]}<br/>
				${k}${d(D[R.dataKey], "left")}
			</p>`;
  }, P = (D) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${T.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${D[a.xAxis.dataKey]}<br/>
				${k}${d(D[T.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Paired bar chart graphic with the title ${a.title ? a.title : "No Title Found"}`), /* @__PURE__ */ r.createElement(ot, { top: 0, left: Number(a.xAxis.size) }, l.filter((D) => a.series[0].dataKey === R.dataKey).map((D, B) => {
    var K, ee;
    let H = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[0].dataKey) === -1, re = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[0].dataKey) !== -1, oe = F(D[a.series[0].dataKey]), ne = Number(a.barHeight) ? Number(a.barHeight) : 25, j = 0;
    j = B !== 0 ? (Number(a.barSpace) + ne + m) * B : j;
    const X = (Number(a.barSpace) + ne + m) * l.length;
    a.heights.horizontal = X;
    const V = u(d(D[R.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < oe - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { key: `group-${R.dataKey}-${D[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${R.dataKey}-${D[(K = a.dataDescription) == null ? void 0 : K.xKey]}`,
        className: "bar group-1",
        key: `bar-${R.dataKey}-${D[(ee = a.dataDescription) == null ? void 0 : ee.xKey]}`,
        x: y - oe,
        y: j,
        width: F(D[a.series[0].dataKey]),
        height: ne,
        fill: R.color,
        "data-tooltip-html": h(D),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: m,
        opacity: H ? 0.5 : 1,
        display: re ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && re && /* @__PURE__ */ r.createElement(St, { textAnchor: V ? "start" : "end", dx: V ? 5 : -5, verticalAnchor: "middle", x: y - oe, y: j + a.barHeight / 2, fill: V ? R.labelColor : "#000" }, d(D[R.dataKey], "left"))));
  }), l.filter((D) => a.series[1].dataKey === T.dataKey).map((D, B) => {
    var K, ee, de;
    let H = F(D[a.series[1].dataKey]), re = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[1].dataKey) === -1, oe = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[1].dataKey) !== -1, ne = a.barHeight ? Number(a.barHeight) : 25, j = 0;
    j = B !== 0 ? (Number(a.barSpace) + ne + m) * B : j;
    const X = (Number(a.barSpace) + ne + m) * l.length;
    a.heights.horizontal = X;
    const V = u(d(D[T.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < H - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${T.dataKey}-${D[a.xAxis.dataKey]} {
                          transform-origin: ${y}px ${j}px
                      }
							      `), /* @__PURE__ */ r.createElement(ot, { key: `group-${T.dataKey}-${D[(K = a.dataDescription) == null ? void 0 : K.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${T.dataKey}-${D[(ee = a.dataDescription) == null ? void 0 : ee.xKey]}`,
        className: "bar group-2",
        key: `bar-${T.dataKey}-${D[(de = a.dataDescription) == null ? void 0 : de.xKey]}`,
        x: y,
        y: j,
        width: F(D[a.series[1].dataKey]),
        height: ne,
        fill: T.color,
        "data-tooltip-html": P(D),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: m,
        stroke: "#333",
        opacity: re ? 0.5 : 1,
        display: oe ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && oe && /* @__PURE__ */ r.createElement(St, { textAnchor: V ? "end" : "start", dx: V ? -5 : 5, verticalAnchor: "middle", x: y + H, y: j + a.barHeight / 2, fill: V ? T.labelColor : "#000" }, d(D[T.dataKey], "left"))));
  }))));
}, Ty = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: l, tableData: d }) => {
  let f = 0, u = 0, m = 0, y = 0;
  if (!i)
    return { min: f, max: u };
  const x = () => Ac(e.visualizationType, i, e.allowLineToBarGraph), { visualizationType: S, series: R } = e, { max: T, min: F } = e.runtime.yAxis, k = a ? T >= n : T >= 0, h = e.useLogScale ? F >= 0 : F <= 0 && t >= 0 || F <= t && t < 0;
  f = F && h ? F : t, u = T && k ? T : Number.MIN_VALUE;
  const { lower: P, upper: O } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (P && O && e.visualizationType === "Bar") {
    const C = f < 0 ? 1.1 : 0;
    u = Math.max(n, Math.max(...i.flatMap((N) => [N[O], N[P]])) * 1.15), f = Math.min(t, Math.min(...i.flatMap((N) => [N[O], N[P]])) * 1.15) * C;
  }
  if (e.series.filter((C) => (C == null ? void 0 : C.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: C }
    } = e;
    if ((C == null ? void 0 : C.length) > 0) {
      let N = [];
      C.forEach((re) => {
        var oe;
        (oe = re.confidenceIntervals) == null || oe.map((ne) => {
          N.push(ne.high), N.push(ne.low);
        });
      });
      const D = i.map((re) => N.map((oe) => re[oe])), B = Math.max.apply(
        null,
        D.map((re) => re[0])
      ), H = Math.min.apply(
        null,
        D.map((re) => re[1])
      );
      B > u && (u = B), H < f && (f = H);
    }
  }
  if (S === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let C = R.filter((B) => B.axis === "Left"), N = R.filter((B) => B.axis === "Right");
      const D = (B, H, re, oe = "left") => {
        let ne = 0;
        return (H.map((X) => X.dataKey) || []).forEach((X) => {
          let G = H.find((ee) => ee.dataKey === X), V = B.map((ee) => ee[X]), K = Math.max.apply(null, V);
          e.visualizationSubType === "stacked" && oe === "left" && G.type === "Bar" && (ne += K), K > re && (re = K), re < ne && (re = ne);
        }), re;
      };
      m = D(i, C, m, "left"), y = D(i, N, y, "right"), m < T && (m = T);
    } catch (C) {
      console.error(C.message);
    }
  if ((S === "Bar" || x() || S === "Combo" && !l) && f > 0 && (f = 0), (e.visualizationType === "Bar" || x() || e.visualizationType === "Combo" && !l) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && l && ((F == null || F === "") && f > 0 && (f = 0), F)) {
    const C = e.useLogScale ? F >= 0 && F < t : F < t;
    f = F && C ? F : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const C = Number(F) < Math.min(t, Number(e.xAxis.target));
    f = F && C ? F : 0;
  }
  if (e.visualizationType === "Line" && !x()) {
    const C = e.useLogScale ? F >= 0 && F < t : F < t, N = d == null ? void 0 : d.some((D, B) => {
      var H;
      return (H = e.preliminaryData) == null ? void 0 : H.some((re) => {
        var X;
        if (re.type !== "suppression" || !re.style)
          return !1;
        const oe = hr.pick(D, (X = e.runtime) == null ? void 0 : X.seriesKeys), ne = hr.values(oe).includes(re.value);
        return (re.column ? D[re.column] === re.value : ne) && (B === 0 || B === d.length - 1);
      });
    });
    f = F && C ? F : N ? 0 : t;
  }
  if (u === Number.MIN_VALUE && (u = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let C = (u - f) * e.runtime.yAxis.paddingPercent;
    f -= C, u += C;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const C = i.map((D) => D[e.series[0].dataKey]), N = Math.max(...C).toString().length;
    switch (!0) {
      case (N > 8 && N <= 12):
        u = u * 1.3;
        break;
      case (N > 4 && N <= 7):
        u = u * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (f < 0 ? (u *= 1 + e.yAxis.scalePadding * 2 / 100, f *= 1 + e.yAxis.scalePadding * 2 / 100) : u *= 1 + e.yAxis.scalePadding / 100), { min: f, max: u, leftMax: m, rightMax: y };
}, Vr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, _E = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: l, config: d, data: f } = e;
  const { rawData: u, dimensions: m } = ce.useContext(Et), [y, x] = m, S = d.runtime.barSeriesKeys || d.runtime.seriesKeys, R = d.runtime.xAxis.type, T = d.orientation === "horizontal", F = (oe) => oe[d.runtime.originalXAxis.dataKey], k = f.map((oe) => F(oe)), { visualizationType: h } = d;
  let P = null, O = null, C = null, N = null, D = null, B = null, H = null, re = $n({
    domain: [0, 100],
    range: [0, n]
  });
  if (T && (P = OE({ min: i * 1.03, ...e }), P.type = d.useLogScale ? Vr.LOG : Vr.LINEAR, O = ME(R, t), O.rangeRound([0, a]), D = Dh(S, [0, a])), T || (H = Dh(k, [0, n], 0.5), P = Ru(t, [0, n], 1 - d.barThickness), O = FE(e), D = Ru(S, [0, P.bandwidth()], 0)), d.xAxis.type === "date" && !T) {
    const oe = t ? t.sort() : [];
    P = Ru(oe, [0, n], 1 - d.barThickness);
  }
  if (d.xAxis.type === "date-time") {
    let oe = Math.min(...t), ne = Math.max(...t);
    oe -= (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (ne - oe), ne += (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (ne - oe), P = Hg({
      domain: [oe, ne],
      range: [0, n]
    }), P.type = Vr.TIME;
    let j = Number.MAX_VALUE, X = t ? t.sort() : [];
    for (let G = 0; G < X.length - 1; G++) {
      let V = P(X[G + 1]) - P(X[G]);
      V < j && (j = V);
    }
    (t.length === 1 || j > n / 4) && (j = n / 4), D = Ru(S, [0, (d.barThickness || 1) * j], 0);
  }
  if (d.visualizationType === "Deviation Bar") {
    const oe = d.isLollipopChart ? 1.05 : 1.03;
    O = Ud({
      domain: t,
      range: [0, a]
    }), P = $n({
      domain: [i * oe, Math.max(Number(d.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), P.type = Vr.LINEAR;
  }
  if (d.visualizationType === "Scatter Plot" && d.xAxis.type === "continuous" && (P = $n({
    domain: [0, Math.max.apply(null, P.domain())],
    range: [0, n]
  }), P.type = Vr.LINEAR), h === "Box Plot") {
    const oe = [];
    if (d.boxplot.plots.map((G) => G.columnOutliers.map((V) => oe.push(V))) && !d.boxplot.hideOutliers) {
      let G = Math.min(...oe), V = Math.max(...oe);
      G < i && (i = G), V > l && (l = V);
    }
    let j = Math.min(...d.boxplot.plots.map((G) => G.columnLowerBounds)), X = Math.max(...d.boxplot.plots.map((G) => G.columnUpperBounds));
    j < i && (i = j), X > l && (l = X), O = $n({
      range: [a, 0],
      round: !0,
      domain: [i, l]
    }), P = Ud({
      range: [0, n],
      round: !0,
      domain: d.boxplot.categories,
      padding: 0.4
    }), P.type = Vr.BAND;
  }
  if (h === "Paired Bar") {
    let ne = Math.max.apply(
      Math,
      f.map((X) => {
        var G;
        return X[(G = d.series[0]) == null ? void 0 : G.dataKey];
      })
    ), j = Math.max.apply(
      Math,
      f.map((X) => {
        var G;
        return X[(G = d.series[1]) == null ? void 0 : G.dataKey];
      })
    );
    N = $n({
      domain: [0, Math.max(ne, j) * 1.02],
      range: [n / 2, 0]
    }), C = $n({
      domain: N.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (h === "Forest Plot") {
    const oe = () => d.forestPlot.regression.showDiamond || d.forestPlot.regression.description ? [0 + d.forestPlot.rowHeight * 2, a - d.forestPlot.rowHeight] : [0 + d.forestPlot.rowHeight * 2, a];
    O = $n({
      domain: [0, u.length],
      range: oe()
    });
    const ne = 5, j = Number(d.forestPlot.leftWidthOffset) / 100 * n, X = Number(d.forestPlot.rightWidthOffset) / 100 * n, G = Number(d.forestPlot.rightWidthOffsetMobile) / 100 * n, V = Number(d.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (y > 480) {
      if (d.forestPlot.type === "Linear" && (P = $n({
        domain: [Math.min(...f.map((K) => parseFloat(K[d.forestPlot.lower]))) - ne, Math.max(...f.map((K) => parseFloat(K[d.forestPlot.upper]))) + ne],
        range: [j, m[0] - X]
      }), P.type = Vr.LINEAR), d.forestPlot.type === "Logarithmic") {
        let K = Math.max(...f.map((de) => parseFloat(de[d.forestPlot.upper]))), ee = Math.min(...f.map((de) => parseFloat(de[d.forestPlot.lower])));
        P = Wu({
          domain: [ee, K],
          range: [j, n - X],
          nice: !0
        }), P.type = Vr.LOG;
      }
    } else if (d.forestPlot.type === "Linear" && (P = $n({
      domain: [Math.min(...f.map((K) => parseFloat(K[d.forestPlot.lower]))) - ne, Math.max(...f.map((K) => parseFloat(K[d.forestPlot.upper]))) + ne],
      range: [V, n - G],
      type: Vr.LINEAR
    })), d.forestPlot.type === "Logarithmic") {
      let K = Math.max(...f.map((de) => parseFloat(de[d.forestPlot.upper]))), ee = Math.min(...f.map((de) => parseFloat(de[d.forestPlot.lower])));
      P = Wu({
        domain: [ee, K],
        range: [j, n - X],
        nice: !0,
        base: K > 1 ? 10 : 2,
        round: !1,
        type: Vr.LOG
      });
    }
  }
  return { xScale: P, yScale: O, seriesScale: D, g1xScale: N, g2xScale: C, xScaleNoPadding: B, xScaleBrush: H, xScaleAnnotation: re };
}, NE = (e, t, n) => {
  const a = t.domain();
  if (t.type === "time") {
    const i = e[e.length - 1], l = e[0], d = (i - l) / (n - 1), f = [];
    for (let u = i; u >= l; u -= d)
      f.push(u);
    return f[f.length - 1] !== l && f.push(l), f.reverse(), f;
  }
  if (a.length > 2) {
    const i = n || 1, l = [];
    for (let d = a.length; d > 0; d -= i) {
      const f = Math.max(Math.round(d) - 1, 0);
      l.push(a[f]);
    }
    return l.reverse(), l;
  }
}, OE = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Wu : $n)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale
})), FE = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = a.useLogScale ? Wu : $n;
  return a.visualizationType === "Combo" && (t = i), l({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, ME = (e, t) => e === "date" ? $n({
  domain: [Math.min(...t), Math.max(...t)]
}) : Bo({ domain: t, padding: 0.5 }), Dh = (e, t, n = 0) => Bo({
  domain: e,
  range: t,
  padding: n
}), Ru = (e, t, n = 0) => Ud({
  domain: e,
  range: t,
  padding: n
});
function zE(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const ws = () => {
  const { config: e } = ce.useContext(Et), { visualizationType: t, series: n, orientation: a, visualizationSubType: i } = e, l = [
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
  ], d = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], f = () => !["Forest Plot", "Sankey"].includes(t), u = () => !["Spark Line"].includes(t), m = () => !["Spark Line"].includes(t), y = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), x = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), S = () => {
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
  }, R = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), T = () => !!["Bar", "Combo", "Line"].includes(e.visualizationType), F = () => {
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
  }, k = () => {
    if ((t === "Bar" || "Combo") && i === "regular")
      return !0;
  }, h = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && a === "vertical", P = () => ["Box Plot", "Scatter Plot", "Pie", "Line"].includes(t) ? !1 : n == null ? void 0 : n.some((ze) => ze.type === "Bar" || ze.type === "Paired Bar" || ze.type === "Deviation Bar"), O = () => {
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
  }, C = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: l,
    headerColors: d,
    visCanAnimate: x,
    visHasAnchors: F,
    visHasBarBorders: P,
    visHasDataCutoff: O,
    visHasLabelOnData: y,
    visHasDataSuppression: k,
    visHasLegend: S,
    visHasLegendAxisAlign: () => t === "Bar" && i === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: h,
    visHasNumbersOnBars: R,
    visHasaAdditionalLabelsOnBars: T,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : a === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: f,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: m,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsPreliminaryData: () => (e == null || e.series.some((xe) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(xe == null ? void 0 : xe.type)), t === "Line" || t === "Bar" && i === "regular" || t === "Combo"),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: u,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: C,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const xe = ["Forest Plot"];
      return !(a === "horizontal" || xe.includes(t));
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
}, IE = ({ data: e, xScale: t, yScale: n, config: a, xMax: i, annotationSeriesKey: l }, d) => {
  const { xAxis: f, visualizationType: u, orientation: m } = a, y = (k, h, P, O, C) => {
    let N = [];
    a.xAxis.type === "date-time" && (h = new Date(h), P = new Date(P), O = O.map((H) => new Date(H)), N = C.ticks().map((H) => new Date(H)));
    const D = (k - h) / (P - h), B = Math.round(D * (O.length - 1));
    return a.xAxis.type === "date-time" ? N[B] : O[B];
  }, S = ((k, h = !1) => {
    if (u !== "Pie" && m !== "horizontal") {
      if (a.xAxis.type === "date-time") {
        const P = new Date(t.invert(k)), O = a.data.map((D) => new Date(D[a.xAxis.dataKey]).getTime());
        let C = 1 / 0, N = null;
        return O.forEach((D) => {
          const B = Math.abs(P.getTime() - D);
          B < C && (C = B, N = D);
        }), new Date(N).getTime();
      }
      if (a.xAxis.type === "categorical" || u === "Combo" && m !== "horizontal" && u !== "Forest Plot") {
        const O = (t.range()[1] - t.range()[0]) / (t.domain().length + 1), N = Math.floor((Number(k) - O / 2) / O);
        return t.domain()[N];
      }
      if (a.xAxis.type === "date") {
        const P = y(k, 0, i, t.domain(), t);
        let O = null, C = Number.MAX_VALUE;
        return t.domain().forEach((N) => {
          const D = Math.abs(P - N);
          D < C && (C = D, O = N);
        }), O;
      }
      return k;
    }
  })(d - Number(a.yAxis.size || 0));
  let R = [];
  if (!S)
    return { x: 0, y: 0 };
  f.type === "categorical" && (R = a.data.filter((k) => k[a.xAxis.dataKey] === S)), (f.type === "date" || f.type === "date-time") && (R = a.data.filter((k) => new Date(k[a.xAxis.dataKey]).getTime() === S));
  const T = R[0][l];
  return { x: S, y: T };
}, $E = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "right" ? "end" : a === "left" ? "start" : a === "bottom" || a === "top" || t(e.xKey) + e.dx < n.yAxis.size ? "middle" : null;
}, BE = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "top" ? "start" : a === "bottom" ? "end" : a === "right" || a === "left" ? "middle" : t(e.xKey) + e.dx < n.yAxis.size ? "end" : null;
}, HE = () => {
  var u;
  const { config: e, data: t } = ce.useContext(Et), { visualizationSubType: n, visualizationType: a, series: i, legend: l } = e, d = (m) => {
    if (!(i != null && i.length))
      return [];
    const x = ["Paired Bar", "Deviation Bar"].includes(a) ? e.twoColor.palette : e.palette, S = { ...ar, ...ps };
    let R = e.customColors || S[x];
    for (; m > R.length; )
      R = R.concat(R);
    return R.slice(0, m);
  };
  let f = Ho({
    domain: (u = e == null ? void 0 : e.runtime) == null ? void 0 : u.seriesLabelsAll,
    range: d(i.length)
  });
  if (a === "Deviation Bar") {
    const { targetLabel: m } = e.xAxis;
    f = Ho({
      domain: [`Below ${m}`, `Above ${m}`],
      range: d(2)
    });
  }
  if (a === "Bar" && n === "regular" && (i == null ? void 0 : i.length) === 1 && (l != null && l.colorCode)) {
    const m = new Set(t == null ? void 0 : t.map((y) => y[l.colorCode]));
    f = Ho({
      domain: [...m],
      range: d([...m].length)
    });
  }
  if (e.series.some((m) => m.name)) {
    const m = new Set(i.map((y) => y.name || y.dataKey));
    f = f = Ho({
      domain: [...m],
      range: d(i.length)
    });
  }
  return { colorScale: f };
};
const WE = ({ xScale: e, yScale: t, xScaleAnnotation: n, xMax: a, svgRef: i, onDragStateChange: l }) => {
  const {
    config: d,
    currentViewport: f,
    dimensions: u,
    isDraggingAnnotation: m,
    isEditor: y,
    isLegendBottom: x,
    updateConfig: S
  } = ce.useContext(Et), { annotations: R } = d, [T] = u, { colorScale: F } = HE(), k = y ? Yy : Xy;
  return R && R.map((h, P) => {
    var D;
    const O = h.text || "", C = n(h.x), N = () => ({
      __html: Mh.sanitize(O)
    });
    return /* @__PURE__ */ r.createElement(
      k,
      {
        width: 200,
        height: T,
        dx: h.dx,
        dy: h.dy,
        x: C,
        y: h.y,
        canEditLabel: h.edit.label || !1,
        canEditSubject: h.edit.subject && h.connectionType !== "none" || !1,
        onDragStart: () => l(!0),
        onDragEnd: (B) => {
          l(!1);
          let H = [...R];
          if (h.x === n.invert(B.x) && h.y === B.y)
            H[P] = { ...H[P], dx: B.dx, dy: B.dy };
          else if (h.snapToNearestPoint) {
            let re = IE(
              {
                data: d.data,
                xScale: e,
                yScale: t,
                config: d,
                xMax: a - d.yAxis.size / 2,
                annotationSeriesKey: h.seriesKey
              },
              B.x
            );
            H[P] = { ...H[P], x: n.invert(e(re.x)), y: t(re.y) };
          } else
            H[P] = { ...H[P], x: n.invert(B.x), y: B.y };
          S({
            ...d,
            annotations: H
          });
        }
      },
      /* @__PURE__ */ r.createElement(Uy, { className: "annotation__desktop-label", showAnchorLine: !1, horizontalAnchor: $E(h, e, d), verticalAnchor: BE(h, e, d) }, /* @__PURE__ */ r.createElement(
        "div",
        {
          style: {
            borderRadius: 5,
            // Optional: set border radius
            backgroundColor: `rgba(255, 255, 255, ${h != null && h.opacity ? Number(h == null ? void 0 : h.opacity) / 100 : 1})`,
            padding: "10px",
            width: "auto",
            display: d.general.showAnnotationDropdown ? "inline-flex" : "flex",
            justifyContent: "start",
            flexDirection: "row"
          },
          role: "presentation",
          tabIndex: 0,
          "aria-label": `Annotation text that reads: ${h.text}`
        },
        ((D = d == null ? void 0 : d.general) == null ? void 0 : D.showAnnotationDropdown) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { className: "annotation__has-dropdown-number", style: { margin: "2px 6px" } }, P + 1)),
        /* @__PURE__ */ r.createElement("div", { style: { fontSize: zh[d.fontSize] }, dangerouslySetInnerHTML: N() })
      )),
      h.connectionType === "line" && /* @__PURE__ */ r.createElement(lp, { type: "line", pathProps: { markerStart: "url(#marker-start)" } }),
      h.connectionType === "elbow" && /* @__PURE__ */ r.createElement(lp, { type: "elbow", pathProps: { markerStart: "url(#marker-start)" } }),
      h.connectionType === "curve" && /* @__PURE__ */ r.createElement(
        Nr,
        {
          d: `M ${C},${h.y}
                      Q ${C + h.dx / 2}, ${h.y + h.dy / 2 + Number(h == null ? void 0 : h.bezier) || 0} ${C + h.dx},${h.y + h.dy}`,
          stroke: "black",
          strokeWidth: "2",
          fill: "none",
          "marker-start": "url(#marker-start)"
        }
      ),
      h.marker === "circle" && /* @__PURE__ */ r.createElement(Ky, { className: "circle-subject", stroke: F(h.seriesKey), radius: 8 }),
      h.marker === "arrow" && /* @__PURE__ */ r.createElement(Fh, { fill: "black", id: "marker-start", x: C, y: h.y, stroke: "#333", markerWidth: 10, size: 10, strokeWidth: 1, orient: "auto-start-reverse", markerUnits: "userSpaceOnUse" }),
      /* @__PURE__ */ r.createElement("circle", { fill: "white", cx: C + h.dx, cy: h.y + h.dy, r: 16, className: "annotation__mobile-label annotation__mobile-label-circle", stroke: F(h.seriesKey) }),
      /* @__PURE__ */ r.createElement("text", { height: 16, x: C + h.dx, y: h.y + h.dy, className: "annotation__mobile-label", alignmentBaseline: "middle", textAnchor: "middle" }, P + 1)
    );
  });
};
const VE = ({ useBootstrapVisibilityClasses: e = !0 }) => {
  const { config: t } = ce.useContext(Et), n = t.annotations || [], a = () => {
    const l = ["annotation-list"];
    return e && l.push("d-block", "d-md-none"), l.join(" ");
  }, i = n.map((l, d) => {
    const f = l.text || "", u = () => ({
      __html: Mh.sanitize(f)
    });
    return /* @__PURE__ */ r.createElement("li", { key: "annotation-li-item__annotationIndex" }, /* @__PURE__ */ r.createElement("div", { className: "annotation__title-wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "annotation__title-circle" }, d + 1), /* @__PURE__ */ r.createElement("p", { className: "annotation__subtext", dangerouslySetInnerHTML: u() })));
  });
  return /* @__PURE__ */ r.createElement("ul", { className: a() }, i);
};
const jE = () => {
  var u;
  const { currentViewport: e, config: t } = ce.useContext(Et), [n, a] = ce.useState(!1), i = ["sm", "xs", "xxs"].includes(e) ? "13px" : `${zh[t == null ? void 0 : t.fontSize]}px`;
  ce.useContext(Et);
  const l = {
    maxHeight: t.table.limitHeight && `${t.table.height}px`,
    OverflowY: "scroll"
  }, d = () => {
    const m = ["data-table-heading", "annotation__dropdown-list"];
    return n || m.push("collapsed"), m.join(" ");
  }, f = () => {
    const m = ["data-table-container", e, "d-block", "d-lg-none"];
    return t.general.showAnnotationDropdown && m.push("d-lg-block"), m.join(" ");
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("section", { className: f() }, /* @__PURE__ */ r.createElement(
    "div",
    {
      style: { fontSize: i },
      role: "button",
      className: d(),
      onClick: () => {
        a(!n);
      },
      tabIndex: 0,
      onKeyDown: (m) => {
        m.keyCode === 13 && a(!n);
      }
    },
    /* @__PURE__ */ r.createElement(ut, { display: n ? "minus" : "plus", base: !0 }),
    t.general.annotationDropdownText === "" ? "Annotations" : (u = t == null ? void 0 : t.general) == null ? void 0 : u.annotationDropdownText
  ), n && /* @__PURE__ */ r.createElement("div", { className: "table-container annotation-dropdown__panel", style: l }, /* @__PURE__ */ r.createElement(Xf.List, { useBootstrapVisibilityClasses: !1 }))));
}, Xf = {
  Draggable: WE,
  // Mobile auto display
  List: VE,
  // Desktop Accessible Option
  Dropdown: jE
}, jr = (e) => {
  var Vn, Cn, Sn, jn, zn, Un;
  const {
    brushConfig: t,
    config: n,
    currentViewport: a,
    dimensions: i,
    formatDate: l,
    formatNumber: d,
    getTextWidth: f,
    handleChartAriaLabels: u,
    handleLineType: m,
    handleDragStateChange: y,
    parseDate: x,
    tableData: S,
    transformedData: R,
    updateConfig: T,
    isDraggingAnnotation: F
  } = ce.useContext(Et), { visualizationType: k, visualizationSubType: h, orientation: P, xAxis: O, yAxis: C, runtime: N, debugSvg: D } = n, B = () => Ac(n.visualizationType, R, n.allowLineToBarGraph);
  let [H] = i;
  n && n.legend && !n.legend.hide && ((Vn = n.legend) == null ? void 0 : Vn.position) !== "bottom" && ["lg", "md"].includes(a) && (H = H * 0.73);
  const { horizontal: re } = n.heights, oe = P === "horizontal" || n.visualizationType === "Forest Plot", ne = !0, j = isNaN(parseInt(N.xAxis.labelOffset)) ? 0 : parseInt(N.xAxis.labelOffset), X = isNaN(parseInt(N.yAxis.labelOffset)) ? 0 : parseInt(N.yAxis.labelOffset), G = isNaN(parseInt(N.xAxis.size)) ? 0 : parseInt(N.xAxis.size);
  let V = n.aspectRatio ? H * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[P];
  V = Number(V);
  const K = H - N.yAxis.size - (k === "Combo" ? n.yAxis.rightAxisSize : 0);
  let ee = V - (P === "horizontal" ? 0 : G);
  V += P === "horizontal" ? G : 0, n.visualizationType === "Forest Plot" && (V = V + n.data.length * n.forestPlot.rowHeight, ee = ee + n.data.length * n.forestPlot.rowHeight, H = i[0]), (Cn = n.brush) != null && Cn.active && (V = V + ((Sn = n.brush) == null ? void 0 : Sn.height));
  const { minValue: de, maxValue: Q, existPositiveValue: te, isAllLine: q } = Lc(n, R), { visSupportsReactTooltip: Z } = ws(), { hasTopAxis: Me } = zE(n), [ke, pe] = ce.useState(!1), [Le, We] = ce.useState({ x: 0, y: 0 });
  ce.useRef(null);
  const Ze = ce.useRef(), Ae = ce.useRef(), me = Wf(Ze, {
    freezeOnceVisible: !1
  }), _e = (De) => wn(n.runtime.xAxis) ? x(De[n.runtime.originalXAxis.dataKey]).getTime() : De[n.runtime.originalXAxis.dataKey], ae = (De, ct) => De[ct], se = (jn = n.brush) != null && jn.active && ((zn = t.data) != null && zn.length) ? t.data.map((De) => _e(De)) : R.map((De) => _e(De)), xe = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ze = { data: R, tableData: S, config: n, minValue: de, maxValue: Q, isAllLine: q, existPositiveValue: te, xAxisDataMapped: se, xMax: K, yMax: ee }, { min: Ve, max: qe, leftMax: Qe, rightMax: tt } = Ty(ze), { yScaleRight: et, hasRightAxis: Ye } = Yf({ config: n, yMax: ee, data: R, updateConfig: T }), { xScale: Re, yScale: Ce, seriesScale: at, g1xScale: Ge, g2xScale: ft, xScaleNoPadding: ht, xScaleBrush: yt, xScaleAnnotation: _t } = _E({ ...ze, min: Ve, max: qe, leftMax: Qe, rightMax: tt, dimensions: i }), [an, on] = ce.useState(null);
  ce.useEffect(() => {
    var De;
    on((De = Ae == null ? void 0 : Ae.current) == null ? void 0 : De.getBoundingClientRect());
  }, [Ae, n.legend]);
  const Kt = (De, ct) => {
    if (n.useLogScale && De === 0.1 && (De = 0), !(n.data && !n.data[ct] && k === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[ct][n.xAxis.dataKey] : wn(N.yAxis) ? l(x(De)) : P === "vertical" && qe - Ve < 3 ? d(De, "left", ne, !1, !1, "1") : P === "vertical" ? d(De, "left", ne) : De;
  }, Jt = (De) => (n.useLogScale && De === 0.1 && (De = 0), wn(N.xAxis) && n.visualizationType !== "Forest Plot" ? l(De) : P === "horizontal" && n.visualizationType !== "Forest Plot" ? d(De, "left", ne) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? d(De, "bottom", ne) : n.visualizationType === "Forest Plot" ? d(De, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : De), Yt = (De) => {
    let { numTicks: ct } = N[De];
    N[De].viewportNumTicks && N[De].viewportNumTicks[a] && (ct = N[De].viewportNumTicks[a]);
    let pt;
    return De === "yAxis" && (pt = oe && !ct ? R.length : oe && ct ? ct : !oe && !ct ? void 0 : !oe && ct && ct, pt === void 0 && !n.dataFormat.roundTo && (Number(qe) <= 3 ? pt = 2 : pt = 4), Number(pt) > Number(qe) && (pt = Number(Ve) < 0 ? Math.round(qe) * 2 : Math.round(qe))), De === "xAxis" && (pt = oe && !ct ? void 0 : oe && ct ? ct : !oe && !ct ? void 0 : !oe && ct && ct, oe && pt === void 0 && !n.dataFormat.roundTo && (qe <= 3 ? pt = 2 : pt = 4), n.visualizationType === "Forest Plot" && (pt = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), pt;
  }, { tooltipData: At, showTooltip: Mt, hideTooltip: Vt, tooltipOpen: Ie, tooltipLeft: en, tooltipTop: wt } = qm(), {
    handleTooltipMouseOver: zt,
    handleTooltipClick: mt,
    handleTooltipMouseOff: tn,
    tooltipStyles: xn,
    TooltipListItem: Ft,
    getXValueFromCoordinateDate: nn,
    getXValueFromCoordinate: Ln
  } = ey({
    xScale: Re,
    yScale: Ce,
    showTooltip: Mt,
    hideTooltip: Vt
  });
  ce.useEffect(() => {
    document.querySelector(".isEditor") && pe((ct) => !0);
  }), ce.useEffect(() => {
    (me == null ? void 0 : me.isIntersecting) === !0 && n.animate && setTimeout(() => {
      pe((De) => !0);
    }, 500);
  }, [me == null ? void 0 : me.isIntersecting, n.animate]);
  const Xt = () => {
    const { visualizationType: De } = n;
    return De === "Combo" && N.forecastingSeriesKeys > 0 || De === "Area Chart" || De === "Line" || De === "Bar";
  }, jt = Number(P === "horizontal" ? n.xAxis.size : n.yAxis.size), Tn = { small: 16, medium: 18, large: 20 }, Hn = () => n.visualizationType === "Forest Plot" ? n.data.length : Yt("yAxis"), Mn = () => {
    let De = n.xAxis.manualStep;
    return n.xAxis.viewportStepCount && n.xAxis.viewportStepCount[a] && (De = n.xAxis.viewportStepCount[a]), De;
  }, qt = (De) => {
    const ct = De.currentTarget.getBoundingClientRect(), pt = De.clientX - ct.left, $ = De.clientY - ct.top;
    We({
      x: pt,
      y: $
    });
  }, Wn = () => {
    let De = 40;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Mu, { top: ee, left: Number(N.yAxis.size), label: N.xAxis.label, tickFormat: wn(N.xAxis) ? l : d, scale: Ge, stroke: "#333", tickStroke: "#333", numTicks: N.xAxis.numTicks || void 0 }, (ct) => /* @__PURE__ */ r.createElement(ot, { className: "bottom-axis" }, ct.ticks.map((pt, $) => {
      const Oe = pt.index !== 0 ? n.yAxis.tickRotation : 0, Ke = pt.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", nt = f(pt.value, `normal ${Tn[n.fontSize]}px sans-serif`) * Math.sin(Oe * (Math.PI / 180)) + 25;
      return nt > De && (De = nt), /* @__PURE__ */ r.createElement(ot, { key: `vx-tick-${pt.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: pt.from, to: pt.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: pt.to.x, y: pt.to.y, angle: -Oe, verticalAnchor: "start", textAnchor: Ke }, d(pt.value, "left")));
    }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: ct.axisFromPoint, to: ct.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      Mu,
      {
        top: ee,
        left: Number(N.yAxis.size),
        label: N.xAxis.label,
        tickFormat: wn(N.xAxis) ? l : N.xAxis.dataKey !== "Year" ? d : (ct) => ct,
        scale: ft,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: N.xAxis.numTicks || void 0
      },
      (ct) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ot, { className: "bottom-axis" }, ct.ticks.map((pt, $) => {
        const Oe = pt.index !== 0 ? n.yAxis.tickRotation : 0, Ke = pt.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", nt = f(pt.value, `normal ${Tn[n.fontSize]}px sans-serif`) * Math.sin(Oe * (Math.PI / 180)) + 25;
        return nt > De && (De = nt), /* @__PURE__ */ r.createElement(ot, { key: `vx-tick-${pt.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: pt.from, to: pt.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: pt.to.x, y: pt.to.y, angle: -Oe, verticalAnchor: "start", textAnchor: Ke }, d(pt.value, "left")));
      }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: ct.axisFromPoint, to: ct.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(St, { x: K / 2, y: De + 20 + j, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, N.xAxis.label)), Ae.current ? Ae.current.setAttribute("height", Number(V) + Number(De) + (N.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(H) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Or, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${H}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: qt,
      width: "100%",
      height: V,
      className: `linear ${n.animate ? "animated" : ""} ${ke && n.animate ? "animate" : ""} ${D && "debug"} ${F && "dragging-annotation"}`,
      role: "img",
      "aria-label": u(n),
      ref: Ae,
      style: { overflow: "visible" }
    },
    !F && /* @__PURE__ */ r.createElement(kr, { width: H, height: V, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && /* @__PURE__ */ r.createElement(QS, { scale: Ce, tickLength: n.useLogScale ? 6 : 8, left: Number(N.yAxis.size) - n.yAxis.axisPadding, label: N.yAxis.label || N.yAxis.label, stroke: "#333", tickFormat: (De, ct) => Kt(De, ct), numTicks: Hn() }, (De) => {
      const ct = n.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, pt = ee / De.ticks.length / 2 - ee / De.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(ot, { className: "left-axis" }, De.ticks.map(($, Oe) => {
        const Ke = De.ticks[0].to.y, $e = 15, nt = String($.value).startsWith("1") || $.value === 0.1 ? "block" : "none", it = nt === "block" ? 7 : 0, kt = { x: $.to.x - it, y: $.to.y }, Lt = $.index !== 0 || n.xAxis.hideAxis;
        return /* @__PURE__ */ r.createElement(ot, { key: `vx-tick-${$.value}-${Oe}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { key: `${$.value}--hide-hideTicks`, from: $.from, to: n.useLogScale ? kt : $.to, stroke: n.yAxis.tickColor, display: P === "horizontal" ? "none" : "block" }), N.yAxis.gridLines && Lt ? /* @__PURE__ */ r.createElement(un, { key: `${$.value}--hide-hideGridLines`, display: (n.useLogScale && nt).toString(), from: { x: $.from.x + K, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", P === "horizontal" && h !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            transform: `translate(${$.to.x - 5}, ${n.isLollipopChart ? $.to.y - Ke : $.to.y - Ke + (Number(n.barHeight * n.series.length) - $e) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          $.formattedValue
        ), P === "horizontal" && h === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ke + (Number(n.barHeight) - $e) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, $.formattedValue), P === "horizontal" && k === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ke + Number(n.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), P === "horizontal" && k === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${n.isLollipopChart ? $.to.y - Ke + 2 : $.to.y - Ke + Number(n.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), P === "vertical" && k !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            display: n.useLogScale ? nt : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? $.from.x + 2 : $.to.x,
            y: $.to.y + (n.runtime.horizontal ? pt : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          $.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: De.axisFromPoint, to: N.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? V : Number(re) } : De.axisToPoint, stroke: "#000" }), Ce.domain()[0] < 0 && /* @__PURE__ */ r.createElement(un, { from: { x: De.axisFromPoint.x, y: Ce(0) }, to: { x: K, y: Ce(0) }, stroke: "#333" }), k === "Bar" && P === "horizontal" && Re.domain()[0] < 0 && /* @__PURE__ */ r.createElement(un, { from: { x: Re(0), y: 0 }, to: { x: Re(0), y: ee }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * N.yAxis.size + X}, ${ct}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, De.label));
    }),
    Ye && /* @__PURE__ */ r.createElement(nE, { scale: et, left: Number(H - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (De) => d(De, "right"), numTicks: N.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (De) => {
      const ct = n.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, pt = ee / De.ticks.length / 2 - ee / De.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(ot, { className: "right-axis" }, De.ticks.map(($, Oe) => /* @__PURE__ */ r.createElement(ot, { key: `vx-tick-${$.value}-${Oe}`, className: "vx-axis-tick" }, !N.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(un, { from: $.from, to: $.to, display: N.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), N.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(un, { from: { x: $.from.x + K, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(St, { x: $.to.x, y: $.to.y + (N.horizontal ? pt : 0), verticalAnchor: N.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, $.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(un, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${ct}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, De.label));
    }),
    Me && n.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      oE,
      {
        stroke: "#333",
        left: Number(N.yAxis.size),
        scale: Re,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Mu,
      {
        top: N.horizontal && n.visualizationType !== "Forest Plot" ? Number(re) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? ee + Number(n.xAxis.axisPadding) : ee,
        left: n.visualizationType !== "Forest Plot" ? Number(N.yAxis.size) : 0,
        label: n[xe].label,
        tickFormat: Jt,
        scale: Re,
        stroke: "#333",
        numTicks: Yt("xAxis"),
        tickStroke: "#333",
        tickValues: n.xAxis.manual ? NE(se, Re, n.xAxis.type === "date-time" ? Yt("xAxis") : Mn()) : void 0
      },
      (De) => {
        const ct = n.visualizationType !== "Forest Plot" ? (De.axisToPoint.x - De.axisFromPoint.x) / 2 : i[0] / 2, pt = (vt) => /\s/.test(vt), $ = De.ticks.some((vt) => pt(vt.value)), Oe = 8, Ke = Math.max(...De.ticks.map((vt) => f(vt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`))), $e = $ ? 180 : 100, nt = De.ticks.map((vt) => f(vt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`)), it = nt.reduce((vt, Rt) => vt + Rt, $e), kt = (K - it) / (De.ticks.length - 1);
        let Lt = [0];
        for (let vt = 1; vt < nt.length; vt++)
          Lt[vt] = Lt[vt - 1] + nt[vt - 1] + kt;
        let Ue = !1;
        nt.forEach((vt, Rt) => {
          if (Lt[Rt] + nt[Rt] > Lt[Rt + 1]) {
            Ue = !0;
            return;
          }
        });
        const It = Ue && n.isResponsiveTicks ? Ke + Oe + 20 : 0;
        Number(n.xAxis.tickRotation) > 0 && Number(n.xAxis.tickRotation), n.dynamicMarginTop = It, n.xAxis.tickWidthMax = Ke;
        let $t = 40;
        const Bt = /* @__PURE__ */ r.createElement(ot, { className: "bottom-axis", width: i[0] }, De.ticks.map((vt, Rt, Nt) => {
          const Ot = String(vt.value).startsWith("1") || vt.value === 0.1 ? "block" : "none", Gt = Ot === "block" ? 16 : Oe, pn = { x: vt.to.x, y: Gt }, Nn = f(vt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`), hn = 100 / Nt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const ln = n.isResponsiveTicks && Ue ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation), mn = Nn * Math.sin(ln * -1 * (Math.PI / 180)) + 25;
          return mn > $t && ($t = mn), /* @__PURE__ */ r.createElement(ot, { key: `vx-tick-${vt.value}-${Rt}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: vt.from, to: P === "horizontal" && n.useLogScale ? pn : vt.to, stroke: n.xAxis.tickColor, strokeWidth: Ot === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            St,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Ot : "block",
              x: vt.to.x,
              y: vt.to.y,
              angle: ln,
              verticalAnchor: ln < -50 ? "middle" : "start",
              textAnchor: ln ? "end" : "middle",
              width: Ue && !n.isResponsiveTicks && !Number(n[xe].tickRotation) ? hn : void 0,
              fill: n.xAxis.tickLabelColor
            },
            vt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { x: ct, y: $t + 20 + j, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: n.xAxis.labelColor }, De.label));
        return Ae.current && Ae.current.setAttribute("height", Number(V) + Number($t) + (N.xAxis.label ? 50 : 0) + "px"), Bt;
      }
    ),
    k === "Paired Bar" && Wn(),
    k === "Deviation Bar" && ((Un = n.series) == null ? void 0 : Un.length) === 1 && /* @__PURE__ */ r.createElement(SE, { animatedChart: ke, xScale: Re, yScale: Ce, width: K, height: ee }),
    k === "Paired Bar" && /* @__PURE__ */ r.createElement(DE, { originalWidth: H, width: K, height: ee }),
    k === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      bE,
      {
        xScale: Re,
        yScale: Ce,
        getXAxisData: _e,
        getYAxisData: ae,
        xMax: K,
        yMax: ee,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: mt,
        tooltipData: At,
        showTooltip: Mt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ r.createElement(xE, { xScale: Re, yScale: Ce }),
    (k === "Area Chart" && n.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ r.createElement(dE, { xScale: Re, yScale: Ce, yMax: ee, xMax: K, chartRef: Ae, width: K, height: ee, handleTooltipMouseOver: zt, handleTooltipMouseOff: tn, tooltipData: At, showTooltip: Mt }),
    (k === "Area Chart" && n.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ r.createElement(pE, { xScale: Re, yScale: Ce, yMax: ee, xMax: K, chartRef: Ae, width: K, height: ee, handleTooltipMouseOver: zt, handleTooltipMouseOff: tn, tooltipData: At, showTooltip: Mt }),
    (k === "Bar" || k === "Combo" || B()) && /* @__PURE__ */ r.createElement(
      vE,
      {
        xScale: Re,
        yScale: Ce,
        seriesScale: at,
        xMax: K,
        yMax: ee,
        getXAxisData: _e,
        getYAxisData: ae,
        animatedChart: ke,
        visible: ke,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: mt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae
      }
    ),
    (k === "Line" && !B() || k === "Combo") && /* @__PURE__ */ r.createElement(
      Rh,
      {
        xScale: Re,
        yScale: Ce,
        getXAxisData: _e,
        getYAxisData: ae,
        xMax: K,
        yMax: ee,
        seriesStyle: n.series,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: mt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ r.createElement(
      kE,
      {
        showTooltip: Mt,
        tooltipData: At,
        xScale: Re,
        yScale: Ce,
        width: K,
        le: !0,
        height: ee,
        xScaleNoPadding: ht,
        chartRef: Ae,
        getXValueFromCoordinate: Ln,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((De) => /* @__PURE__ */ r.createElement(un, { strokeDasharray: m(De.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: Ce(De.value) }, to: { x: K, y: Ce(De.value) }, display: N.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ r.createElement(
      RE,
      {
        xScale: Re,
        yScale: Ce,
        seriesScale: at,
        width: H,
        height: V,
        getXAxisData: _e,
        getYAxisData: ae,
        animatedChart: ke,
        visible: ke,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: mt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !B() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Rh, { xScale: Re, yScale: Ce, getXAxisData: _e, getYAxisData: ae, xMax: K, yMax: ee, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((De, ct) => {
      let pt = Ce(De.value);
      if (!De.value)
        return;
      const $ = P === "horizontal" && k === "Bar" ? n.barHeight / 4 : 0;
      if (pt)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            un,
            {
              key: `yAxis-${De.value}--${ct}`,
              strokeDasharray: m(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + jt, y: pt - $ },
              to: { x: H - n.yAxis.rightAxisSize, y: pt - $ }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((De, ct) => {
      let pt = O;
      P === "horizontal" && (pt = C);
      let $ = wn(pt) ? Re(x(De.value, !1)) : Re(De.value);
      if ($)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            un,
            {
              key: `xAxis-${De.value}--${ct}`,
              strokeDasharray: m(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              fill: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number($) + Number(jt), y: 0 },
              to: { x: Number($) + Number(jt), y: ee }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(Kf, { xScale: Re, handleTooltipClick: mt, handleTooltipMouseOff: tn, handleTooltipMouseOver: zt, showTooltip: Mt, hideTooltip: Vt, tooltipData: At, yMax: ee, width: H }),
    Xt && Mt && At && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(ot, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(un, { from: { x: At.dataXPosition - 10, y: 0 }, to: { x: At.dataXPosition - 10, y: ee }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Xt && Mt && At && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(ot, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(un, { from: { x: 0, y: At.dataYPosition }, to: { x: K, y: At.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && R.length === 0 && /* @__PURE__ */ r.createElement(St, { x: Number(n.yAxis.size) + Number(K / 2), y: V / 2 - n.xAxis.padding / 2, textAnchor: "middle" }, n.chartMessage.noData),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(ot, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(un, { from: { x: 0, y: Le.y }, to: { x: K, y: Le.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(ot, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(un, { from: { x: Le.x, y: 0 }, to: { x: Le.x, y: ee }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    /* @__PURE__ */ r.createElement(ot, { left: Number(n.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Xf.Draggable, { xScale: Re, yScale: Ce, xScaleAnnotation: _t, xMax: K, svgRef: Ae, onDragStateChange: y }))
  ), !F && At && Object.entries(At.data).length > 0 && Ie && Mt && At.dataYPosition && At.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ r.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ r.createElement(Jm, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: en, top: wt }, /* @__PURE__ */ r.createElement("ul", null, typeof At == "object" && Object.entries(At.data).map((De, ct) => /* @__PURE__ */ r.createElement(Ft, { item: De, key: ct }))))), Z() && !F && /* @__PURE__ */ r.createElement(Ey, { id: `cdc-open-viz-tooltip-${N.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Ze })));
};
const UE = (e) => {
  var ne;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: l, formatDate: d, seriesHighlight: f, formatNumber: u, colorScale: m, handleChartAriaLabels: y } = ce.useContext(Et);
  let x = Number(t);
  const { minValue: S, maxValue: R } = Lc(i, a), T = { top: 5, right: 10, bottom: 10, left: 10 }, F = Number(n), k = x - i.runtime.yAxis.size, h = F - T.top - 20, P = (j) => i.runtime.xAxis.type === "date" ? l(j[i.runtime.originalXAxis.dataKey]).getTime() : j[i.runtime.originalXAxis.dataKey], O = (j, X) => j[X];
  let C, N;
  const { max: D, min: B } = i.runtime.yAxis, H = Number(D) >= Number(R), re = Number(B) <= Number(S);
  if (a) {
    let j = Number(B && re ? B : S), X = Number(D && H ? D : Number.MIN_VALUE);
    if (X === Number.MIN_VALUE && (X = R), i.runtime.yAxis.paddingPercent) {
      let V = (X - j) * i.runtime.yAxis.paddingPercent;
      j -= V, X += V;
    }
    let G = a.map((V) => P(V));
    i.runtime.horizontal ? (C = $n({
      domain: [j, X],
      range: [0, k]
    }), N = i.runtime.xAxis.type === "date" ? $n({ domain: [Math.min(...G), Math.max(...G)] }) : Bo({ domain: G, padding: 0.5 }), Bo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, h]
    }), N.rangeRound([0, h])) : (j = j < 0 ? j * 1.11 : j, N = $n({
      domain: [j, X],
      range: [h - T.bottom, T.top]
    }), C = Bo({
      domain: G,
      range: [T.left, x - T.right]
    }), Bo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, k]
    }));
  }
  const oe = [C.domain()[0], C.domain()[C.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Or, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": y(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Spark line graphic with the title ${i.title ? i.title : "No Title Found"}`), ((ne = i.runtime.lineSeriesKeys) == null ? void 0 : ne.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((j, X) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ot,
    {
      style: { width: x },
      className: "sparkline-group",
      key: `series-${j}`,
      opacity: i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(j) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(j) !== -1 ? "block" : "none"
    },
    a.map((G, V) => /* @__PURE__ */ r.createElement(ot, { key: `series-${j}-point-${V}` }, /* @__PURE__ */ r.createElement(St, { display: i.labels ? "block" : "none", x: C(P(G)), y: N(O(G, j)), fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[j] : j) : "#000", textAnchor: "middle" }, u(G[j])))),
    /* @__PURE__ */ r.createElement(
      Nr,
      {
        curve: vc,
        data: a,
        x: (G) => C(P(G)),
        y: (G) => N(O(G, j)),
        stroke: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[j] : j) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${X})`
      }
    ),
    /* @__PURE__ */ r.createElement(Fh, { id: `arrow--${X}`, refX: 2, size: 6, markerEnd: `url(#arrow--${X})`, strokeOpacity: 1, fillOpacity: 1, fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[j] : j) : "#000" })
  ), /* @__PURE__ */ r.createElement(
    Mu,
    {
      top: h + T.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: C,
      tickValues: oe,
      tickFormat: (G) => i.xAxis.type === "date" ? d(G) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, KE = ce.forwardRef((e, t) => {
  const {
    config: n,
    colorScale: a,
    seriesHighlight: i,
    highlight: l,
    tableData: d,
    highlightReset: f,
    transformedData: u,
    currentViewport: m
  } = ce.useContext(Et);
  if (!n.legend)
    return null;
  const y = sy(n, d, u, a);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ r.createElement(ly, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: a, seriesHighlight: i, highlight: l, highlightReset: f, currentViewport: m, formatLabels: y });
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
    annotationDropdownText: "Annotations",
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
}, Iu = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ ce.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), YE = ({ name: e }) => {
  var f, u, m, y, x;
  const { config: t, rawData: n, updateConfig: a } = ce.useContext(Et);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (S) => {
    S.orientation === "horizontal" && (S.labels = !1), S.table.show === void 0 && (S.table.show = !isDashboard), S.visualizationType === "Combo" && (S.orientation = "vertical");
  }, l = (S = !0) => {
    let R = {};
    return n.forEach((T) => {
      Object.keys(T).forEach((F) => R[F] = !0);
    }), S && Object.keys(R).forEach((T) => {
      (t.series && t.series.filter((F) => F.dataKey === T).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(T)) && delete R[T];
    }), Object.keys(R);
  }, d = (S, R, T, F) => {
    if (S === "boxplot" && R === "legend") {
      a({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.boxplot[R],
            [T]: F
          }
        }
      });
      return;
    }
    if (S === "boxplot" && R === "labels") {
      a({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.boxplot[R],
            [T]: F
          }
        }
      });
      return;
    }
    if (S === "forestPlot" && R) {
      let O = {
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t.forestPlot[R],
            [T]: F
          }
        }
      };
      a(O);
      return;
    }
    if (S === "columns" && R !== "" && T !== "") {
      a({
        ...t,
        [S]: {
          ...t[S],
          [R]: {
            ...t[S][R],
            [T]: F
          }
        }
      });
      return;
    }
    if (S === null && R === null) {
      let O = { ...t, [T]: F };
      i(O), a(O);
      return;
    }
    const k = Array.isArray(t[S]);
    let h = k ? [...t[S], F] : { ...t[S], [T]: F };
    R !== null && (k ? (h = [...t[S]], h[R] = { ...h[R], [T]: F }) : typeof F == "string" ? h[R] = F : h = { ...t[S], [R]: { ...t[S][R], [T]: F } });
    let P = { ...t, [S]: h };
    i(P), a(P);
  };
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(Iu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: d,
      options: l(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: S.target.value
          }
        }), S.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((f = t.forestPlot) == null ? void 0 : f.title) || "", updateField: d, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
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
    Ct,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
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
    Ct,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
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
    Ct,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
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
        a({
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
  ))), /* @__PURE__ */ r.createElement(st, { value: ((m = (u = t.forestPlot) == null ? void 0 : u.lineOfNoEffect) == null ? void 0 : m.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: d }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (S) => {
        a({
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
        a({
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
        a({
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
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: S.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement(Je, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: d, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: d, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: ((x = t.forestPlot) == null ? void 0 : x.rightLabel) || "", updateField: d, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (S) => {
        S.target.value !== "" && S.target.value !== "Select" && a({
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
        a({
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
        a({
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
}, Zo = r.createContext({}), XE = (e) => {
  const { updateConfig: t, config: n, rawData: a } = ce.useContext(Et), { getColumns: i, selectComponent: l } = e, d = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], f = (u, m, y) => {
    let x = [...n.series];
    if (x[u][y] = m, y === "type" && m === "Bar" && (x[u].axis = "Left"), x[u].type === "Forecasting") {
      let S = Array.from(new Set(a.map((T) => T[x[u].dataKey]))), R = [];
      S.forEach((T) => {
        R.push({ key: T });
      }), x[u].stages = R, x[u].stageColumn = x[u].dataKey;
    }
    t({ ...n, series: x });
  };
  return /* @__PURE__ */ r.createElement(Zo.Provider, { value: { updateSeries: f, supportedRightAxisTypes: d, getColumns: i, selectComponent: l } }, e.children);
}, qE = (e) => {
  const { config: t, updateConfig: n } = ce.useContext(Et), { series: a, index: i } = e;
  if (!(() => {
    let u = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((y) => y.includes(a.type)) && (u = !0), u;
  })())
    return;
  const d = (u, m) => {
    let y = [...t.series];
    y[u].lineType = m, n({ ...t, series: y });
  };
  let f = [];
  return Object.keys(Bu).map((u) => f.push(Bu[u])), /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (u) => {
        d(i, u.target.value);
      },
      options: f
    }
  );
}, GE = (e) => {
  const { config: t } = ce.useContext(Et), { updateSeries: n } = ce.useContext(Zo), { index: a, series: i } = e, l = () => {
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
        value: i.type,
        label: "Series Type",
        onChange: (d) => {
          n(a, d.target.value, "type");
        },
        options: l()
      }
    );
}, ZE = (e) => {
  const { config: t, updateConfig: n, rawData: a } = ce.useContext(Et), { updateSeries: i, getColumns: l } = ce.useContext(Zo), { index: d, series: f } = e;
  return /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: f.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (u) => {
        let m = [], y = new Set(a == null ? void 0 : a.map((S) => S[u.target.value]));
        y = Array.from(y), y = y.filter((S) => S !== void 0), y.forEach((S) => m.push({ key: S }));
        const x = [...t.series];
        x[d] = { ...x[d], stages: m, stageColumn: u.target.value }, n({
          ...t,
          series: x
        });
      },
      options: l(!1)
    }
  );
}, QE = (e) => {
  const { config: t, rawData: n } = ce.useContext(Et), { updateSeries: a } = ce.useContext(Zo), { index: i, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let d = new Set(n.map((f) => f[l.stageColumn]));
  return d = Array.from(d), d = d.filter((f) => f !== void 0), /* @__PURE__ */ r.createElement(
    Ma,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (f) => {
        a(i, f.target.value, "stageItem");
      },
      options: d
    }
  );
}, JE = (e) => {
  const { config: t } = ce.useContext(Et), { updateSeries: n, supportedRightAxisTypes: a } = ce.useContext(Zo), { index: i, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ r.createElement(
      Ma,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (d) => {
          n(i, d.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, ek = (e) => {
  var l;
  const { config: t, updateConfig: n } = ce.useContext(Et), { index: a, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (l = i == null ? void 0 : i.stages) == null ? void 0 : l.map((d, f) => {
      var u, m, y, x;
      return /* @__PURE__ */ r.createElement(
        Ma,
        {
          key: `${d}--${f}`,
          initial: "Select an option",
          value: (m = (u = t.series) == null ? void 0 : u[a].stages) != null && m[f].color ? (x = (y = t.series) == null ? void 0 : y[a].stages) == null ? void 0 : x[f].color : "Select",
          label: `${d.key} Series Color`,
          onChange: (S) => {
            const R = [...t.series], T = R[a].stages;
            T[f].color = S.target.value, R[a] = { ...R[a], stages: T }, n({
              ...t,
              series: R
            });
          },
          options: Object.keys($u)
        }
      );
    });
}, tk = (e) => {
  var d;
  const { config: t, updateConfig: n } = ce.useContext(Et), { series: a, index: i } = e, { getColumns: l } = ce.useContext(Zo);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (d = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : d.map((f, u) => {
      const m = f.showInTooltip ? f.showInTooltip : !1, y = (x, S, R) => {
        x.preventDefault();
        let T = [...t.series];
        T[S].confidenceIntervals[R].showInTooltip = !m, n({
          ...t,
          series: T
        });
      };
      return /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `${u}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Group ", u + 1, /* @__PURE__ */ r.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (x) => {
            x.preventDefault();
            const S = [...t.series[i].confidenceIntervals];
            S.splice(u, 1);
            const R = [...t.series];
            R[i] = { ...R[i], confidenceIntervals: [...S] }, n({
              ...t,
              series: R
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (x) => y(x, i, u) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, m && /* @__PURE__ */ r.createElement(Kh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: m || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        Ma,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[u].low ? t.series[i].confidenceIntervals[u].low : "Select",
          label: "Low Confidence Interval",
          onChange: (x) => {
            const S = [...t.series[i].confidenceIntervals];
            S[u].low = x.target.value;
            const R = [...t.series];
            R[i] = { ...R[i], confidenceIntervals: S }, n({
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
          value: t.series[i].confidenceIntervals[u].high ? t.series[i].confidenceIntervals[u].high : "Select",
          label: "High Confidence Interval",
          onChange: (x) => {
            const S = [...t.series[i].confidenceIntervals];
            S[u].high = x.target.value;
            const R = [...t.series];
            R[i] = { ...R[i], confidenceIntervals: S }, n({
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
        onClick: (f) => {
          f.preventDefault();
          let u = null;
          t.series[i].confidenceIntervals ? u = [...t.series[i].confidenceIntervals] : u = [];
          const m = [...t.series];
          m[i] = { ...m[i], confidenceIntervals: [...u, { high: "", low: "" }] }, n({
            ...t,
            series: m
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, nk = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = ce.useContext(Et);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const d = (f, u, m, y) => {
    let x = [...a.series], S = { ...a.runtime.seriesLabels };
    x[f].weight = u && Math.max(Number(m), Math.min(Number(y), Number(u))), S[x[f].dataKey] = x[f].weight ? x[f].weight : x[f].dataKey;
    const R = {
      ...a,
      series: x,
      runtime: {
        ...a.runtime,
        seriesLabels: S
      }
    };
    i(R);
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${n}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (f) => {
        d(n, f.target.value, f.target.min, f.target.max);
      }
    }
  ));
}, rk = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = ce.useContext(Et);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const d = (f, u) => {
    let m = [...a.series], y = { ...a.runtime.seriesLabels };
    m[f].name = u, y[m[f].dataKey] = m[f].name ? m[f].name : m[f].dataKey;
    let x = {
      ...a,
      series: m,
      runtime: {
        ...a.runtime,
        seriesLabels: y
      }
    };
    i(x);
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (f) => {
        d(n, f.target.value);
      }
    }
  ));
}, ak = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = ce.useContext(Et);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(a.visualizationType))
    return;
  const l = (d) => {
    let f = [...a.series];
    f[d].tooltip && f[d].tooltip, f[d].tooltip = !f[d].tooltip, i({
      ...a,
      series: f
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (d) => l(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Kh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, ik = (e) => {
  const { config: t, updateConfig: n } = ce.useContext(Et), { series: a, index: i } = e, l = (f) => {
    let u = [...t.series], m = -1;
    for (let y = 0; y < u.length; y++)
      if (u[y].dataKey === f) {
        m = y;
        break;
      }
    if (m !== -1) {
      u.splice(m, 1);
      let y = { ...t, series: u };
      u.length === 0 && delete y.series, n(y);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, d = (f, u, m) => {
    f.preventDefault(), l(u.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: (f) => d(f, a) }, "Remove");
}, Cy = (e) => {
  const { config: t } = ce.useContext(Et), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: l, index: d } = e;
  return /* @__PURE__ */ r.createElement(Dy, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: d }, (f, u) => /* @__PURE__ */ r.createElement("div", { key: d, className: u.isDragging ? "currently-dragging" : "", style: a(u.isDragging, f.draggableProps.style, i), ref: f.innerRef, ...f.draggableProps, ...f.dragHandleProps }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(Dn, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(ut, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Ur.Button.Remove, { series: n, index: d }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(Ur.Input.Name, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Input.Weight, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.SeriesType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.AxisPosition, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.LineType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ForecastingColor, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ConfidenceInterval, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Checkbox.DisplayInTooltip, { series: n, index: d }))))));
}, ok = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((l, d) => /* @__PURE__ */ r.createElement(Cy, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: l, index: d, key: `series-list-${d}` }));
}, Ur = {
  Wrapper: XE,
  Dropdown: {
    SeriesType: GE,
    AxisPosition: JE,
    ConfidenceInterval: tk,
    LineType: qE,
    ForecastingStage: ZE,
    ForecastingColumn: QE,
    ForecastingColor: ek
  },
  Input: {
    Name: rk,
    Weight: nk
  },
  Checkbox: {
    DisplayInTooltip: ak
  },
  Button: {
    Remove: ik
  },
  Item: Cy,
  List: ok
}, lk = ce.memo(({ config: e, updateConfig: t }) => {
  let n = (u, m, y) => {
    let x = [];
    e.regions && (x = [...e.regions]), x[y][u] = m, t({ ...e, regions: x });
  }, a = (u, m, y, x, S) => n(y, x, S), i = (u) => {
    let m = [];
    e.regions && (m = [...e.regions]), m.splice(u, 1), t({ ...e, regions: m });
  }, l = () => {
    let u = [];
    e.regions && (u = [...e.regions]), u.push({}), t({ ...e, regions: u });
  };
  const d = ["Fixed", "Previous Days"], f = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: u, color: m, from: y, to: x, background: S, range: R = "Custom" }, T) => {
    var F;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${T}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (k) => {
          k.preventDefault(), i(T);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Je, { value: u, label: "Region Label", fieldName: "label", i: T, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(Je, { value: m, label: "Text Color", fieldName: "color", updateField: (k, h, P, O) => n(P, O, T) }), /* @__PURE__ */ r.createElement(Je, { value: S, label: "Background", fieldName: "background", updateField: (k, h, P, O) => n(P, O, T) })), /* @__PURE__ */ r.createElement(
      Ct,
      {
        value: e.regions[T].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (k) => {
          if (k.target.value !== "" && k.target.value !== "Select") {
            const h = [...e.regions];
            h[T].fromType = k.target.value, t({
              ...e,
              regions: h
            });
          }
          k.target.value = "";
        },
        options: d
      }
    ), (e.regions[T].fromType === "Fixed" || e.regions[T].fromType === "Previous Days" || !e.regions[T].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Je,
      {
        value: y,
        label: e.regions[T].fromType === "Fixed" || !((F = e.regions[T]) != null && F.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (k, h, P, O) => n(P, O, T),
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Ct,
      {
        value: e.regions[T].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (k) => {
          if (k.target.value !== "" && k.target.value !== "Select") {
            const h = [...e.regions];
            h[T].toType = k.target.value, t({
              ...e,
              regions: h
            });
          }
          k.target.value = "";
        },
        options: f
      }
    ), (e.regions[T].toType === "Fixed" || !e.regions[T].toType) && /* @__PURE__ */ r.createElement(Je, { value: x, label: "To Value", fieldName: "to", updateField: (k, h, P, O) => n(P, O, T) }));
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
}), sk = ({ name: e }) => {
  const { visSupportsRegions: t } = ws(), { config: n, updateConfig: a } = ce.useContext(Et);
  return t() ? /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e)), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(lk, { config: n, updateConfig: a }))) : null;
}, qf = ce.createContext(null), Gf = () => {
  const e = ce.useContext(qf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, uk = (e) => {
  const { config: t } = ce.useContext(Et), { updateField: n } = Gf(), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: d, visSupportsChartHeight: f, visSupportsSuperTitle: u, visSupportsFootnotes: m } = ws(), { visualizationType: y, visualizationSubType: x, barStyle: S } = t, R = () => (y === "Bar" || y === "Deviation Bar") && x !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(Pn, null, " ", /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "General")), /* @__PURE__ */ r.createElement(_n, null, (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ r.createElement(Ct, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), f() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "For some visualization types, such as the sankey diagram, it may be necessary to adjust to chart height for optimal display.")))
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ r.createElement(Ct, { value: x || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), y === "Area Chart" && x === "stacked" && /* @__PURE__ */ r.createElement(Ct, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Bu) }), y === "Bar" && /* @__PURE__ */ r.createElement(Ct, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ r.createElement(Ct, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.isLollipopChart ? "lollipop" : S || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: n,
      options: R(),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Ct, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Ct, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Ct, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(st, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : d() && /* @__PURE__ */ r.createElement(
    st,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    st,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will display 'N/A' on the Date/Category Axis, in the tooltip hover, and in the data table to indicate missing or undefined data values."))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    st,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    st,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will display "suppressed data symbol" on the Date/Category Axis where suppressed data values are indicated in the Data Series, unless a different symbol was chosen from the data series (e.g., suppression symbol) menu.'))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: n
    }
  )), y === "Pie" && /* @__PURE__ */ r.createElement(Ct, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ r.createElement(
    st,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(st, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), u() && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), m() && /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, ck = (e) => {
  const { config: t } = ce.useContext(Et), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = Gf();
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.name)), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    Je,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
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
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
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
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
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
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
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
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(Je, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, dk = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(ps).filter((d) => l ? d.endsWith("reverse") : !d.endsWith("reverse"));
  } else {
    const l = [], d = [];
    for (const f in ar) {
      const u = f.startsWith("sequential"), m = f.startsWith("qualitative"), y = f.endsWith("reverse");
      u && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && l.push(f), m && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && d.push(f);
    }
    a = l, i = d;
  }
  return ce.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), ce.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: i };
}, fk = (e) => {
  var B;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = ce.useContext(Et), { visual: l } = t, { setLollipopShape: d, updateField: f } = Gf(), { visHasBarBorders: u, visCanAnimate: m, visSupportsNonSequentialPallete: y, headerColors: x, visSupportsTooltipOpacity: S, visSupportsTooltipLines: R, visSupportsBarSpace: T, visSupportsBarThickness: F, visHasDataCutoff: k, visSupportsSequentialPallete: h, visSupportsReverseColorPalette: P } = ws(), { twoColorPalettes: O, sequential: C, nonSequential: N } = dk(t, n), D = (H, re) => {
    if (console.log("value", re), H === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: re
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [H]: {
            ...t.sankey[H],
            default: re
          }
        }
      });
  };
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Visual")), /* @__PURE__ */ r.createElement(_n, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (H) => {
        d(H.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Ct, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: f, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Ct, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: f, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Ct, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: f, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(st, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: f })), /* @__PURE__ */ r.createElement(Ct, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: f, options: ["small", "medium", "large"] }), u() && /* @__PURE__ */ r.createElement(Ct, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: f, options: ["true", "false"] }), m() && /* @__PURE__ */ r.createElement(st, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: f }), (((B = t.series) == null ? void 0 : B.some((H) => H.type === "Line" || H.type === "dashed-lg" || H.type === "dashed-sm" || H.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ct, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: f, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Ct, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: f, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, x.map((H) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: H,
      key: H,
      onClick: (re) => {
        re.preventDefault(), n({ ...t, theme: H });
      },
      className: t.theme === H ? "selected " + H : H
    }
  )))), (y() || y()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), P() && /* @__PURE__ */ r.createElement(sp, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.isPaletteReversed }), h() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, C.map((H) => {
    const re = {
      backgroundColor: a[H][2]
    }, oe = {
      backgroundColor: a[H][3]
    }, ne = {
      backgroundColor: a[H][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (j) => {
          j.preventDefault(), n({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: oe }),
      /* @__PURE__ */ r.createElement("span", { style: ne })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, N.map((H) => {
    const re = {
      backgroundColor: a[H][2]
    }, oe = {
      backgroundColor: a[H][4]
    }, ne = {
      backgroundColor: a[H][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (j) => {
          j.preventDefault(), n({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: oe }),
      /* @__PURE__ */ r.createElement("span", { style: ne })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (H) => D("nodeColor", H.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (H) => D("storyNodeFontColor", H.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (H) => D("linkColor", H.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(sp, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, O.map((H) => {
    const re = {
      backgroundColor: i[H][0]
    }, oe = {
      backgroundColor: i[H][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (ne) => {
          ne.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: H } });
        },
        className: t.twoColor.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: re }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: oe })
    );
  }))), k() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: f,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), F() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(Je, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: f, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Je, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: f }), T() && /* @__PURE__ */ r.createElement(Je, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: f, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(st, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: f }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(st, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(st, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: f }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(st, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: f }), R() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(st, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: f }), /* @__PURE__ */ r.createElement(st, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: f })), S() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (H) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: H.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(st, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: f }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (H) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: H.target.value
        }
      })
    }
  ))));
}, pk = () => {
  var f, u, m, y;
  const { config: e, updateConfig: t } = ce.useContext(Et), n = (f = e.data) == null ? void 0 : f[0], { updateField: a } = ce.useContext(qf);
  if (e.visualizationType !== "Sankey")
    return;
  const i = (x, S, R) => {
    let T = [];
    n != null && n.storyNodeText && (T = [...n == null ? void 0 : n.storyNodeText]), T[R][x] = S, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: T
        }
      }
    });
  }, l = () => {
    const x = n;
    x.storyNodeText.push({
      StoryNode: "",
      segmentTextBefore: "",
      segmentTextAfter: ""
    }), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: [{ ...x }]
      }
    });
  }, d = (x) => {
    const S = n;
    S.storyNodeText.splice(x, 1), t({ ...e, sankey: { ...e.sankey, data: { ...S } } });
  };
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Sankey Settings")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: x, segmentTextBefore: S, segmentTextAfter: R }, T) => /* @__PURE__ */ r.createElement("div", { key: T, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ r.createElement("label", null, "Story Node Text", /* @__PURE__ */ r.createElement("input", { type: "text", value: x, fieldName: "StoryNode", label: "StoryNode", onChange: (F) => i("StoryNode", F.target.value, T) })), /* @__PURE__ */ r.createElement("label", null, "Story Text Before", /* @__PURE__ */ r.createElement("input", { type: "text", value: S, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (F) => i("segmentTextBefore", F.target.value, T) })), /* @__PURE__ */ r.createElement("label", null, "Story Text After", /* @__PURE__ */ r.createElement("input", { type: "text", value: R, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (F) => i("segmentTextAfter", F.target.value, T) })), /* @__PURE__ */ r.createElement(fs, { onClick: (F) => d(T), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((u = n == null ? void 0 : n.storyNodeText) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (x) => {
        x.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), e.enableTooltips && ((y = (m = e.data) == null ? void 0 : m.tooltips) == null ? void 0 : y.length) > 0 && /* @__PURE__ */ r.createElement(st, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: a })));
};
const hk = (e) => {
  var m, y, x;
  const { updateConfig: t, config: n, unfilteredData: a, dimensions: i, isDraggingAnnotation: l } = ce.useContext(Et), d = (S, R, T) => {
    var P;
    const F = (P = document.querySelector(".chart-container > div > svg")) == null ? void 0 : P.getBoundingClientRect(), k = [F.width, F.height], h = [...n == null ? void 0 : n.annotations];
    h[T][R] = S, h[T].savedDimensions = k, t({
      ...n,
      annotations: h
    });
  }, f = () => {
    var k, h, P;
    const S = (k = document.querySelector(".chart-container > div > svg")) == null ? void 0 : k.getBoundingClientRect(), R = [S.width, S.height], T = {
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
      x: 50,
      y: Number((R == null ? void 0 : R[1]) / 2),
      xKey: n.xAxis.type === "date" ? new Date((P = (h = n == null ? void 0 : n.data) == null ? void 0 : h[0]) == null ? void 0 : P[n.xAxis.dataKey]).getTime() : n.xAxis.type === "categorical" ? "1/15/2016" : "",
      yKey: "",
      dx: 20,
      dy: -20,
      opacity: "100",
      savedDimensions: R,
      connectionType: "line"
    }, F = Array.isArray(n.annotations) ? n.annotations : [];
    t({
      ...n,
      annotations: [...F, T]
    });
  }, u = (S) => {
    const R = n.annotations.filter((T, F) => F !== S);
    t({
      ...n,
      annotations: R
    });
  };
  return /* @__PURE__ */ r.createElement(yu, { key: e.name }, /* @__PURE__ */ r.createElement(yu.Section, { title: e.name, key: e.name }, /* @__PURE__ */ r.createElement("label", { key: "key-1" }, "Show Annotation Dropdown", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: ((m = n == null ? void 0 : n.general) == null ? void 0 : m.showAnnotationDropdown) || !1,
      onChange: (S) => {
        t({
          ...n,
          general: {
            ...n.general,
            showAnnotationDropdown: S.target.checked
          }
        });
      }
    }
  )), n.general.showAnnotationDropdown && /* @__PURE__ */ r.createElement("label", { key: "key-2" }, "Annotation Dropdown Title:", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      style: { marginBottom: "10px" },
      value: (y = n == null ? void 0 : n.general) == null ? void 0 : y.annotationDropdownText,
      onChange: (S) => {
        t({
          ...n,
          general: {
            ...n.general,
            annotationDropdownText: S.target.value
          }
        });
      }
    }
  )), (n == null ? void 0 : n.annotations) && (n == null ? void 0 : n.annotations.map((S, R) => {
    var T, F, k, h, P, O, C, N;
    return /* @__PURE__ */ r.createElement(yu, { key: R }, /* @__PURE__ */ r.createElement(yu.Section, { title: S.text ? S.text.substring(0, 15) + "..." : `Annotation ${R + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: S.text, onChange: (D) => d(D.target.value, "text", R) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].opacity = D.target.value, t({
            ...n,
            annotations: B
          });
        },
        value: ((F = (T = n == null ? void 0 : n.annotations) == null ? void 0 : T[R]) == null ? void 0 : F.opacity) || "100"
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Subject", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: ((h = (k = n == null ? void 0 : n.annotations[R]) == null ? void 0 : k.edit) == null ? void 0 : h.subject) || !1,
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].edit.subject = D.target.checked, t({
            ...n,
            annotations: B
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Label", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: ((O = (P = n == null ? void 0 : n.annotations[R]) == null ? void 0 : P.edit) == null ? void 0 : O.label) || !1,
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].edit.label = D.target.checked, t({
            ...n,
            annotations: B
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Connection Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        key: "annotation-connection-type",
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].connectionType = D.target.value, t({
            ...n,
            annotations: B
          });
        },
        value: (C = n == null ? void 0 : n.annotations[R]) == null ? void 0 : C.connectionType
      },
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((D, B) => /* @__PURE__ */ r.createElement("option", { key: D, value: D }, D))
    )), S.connectionType === "curve" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Curve Control", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((N = n == null ? void 0 : n.annotations[R]) == null ? void 0 : N.bezier) || 0,
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].bezier = D.target.value, t({
            ...n,
            annotations: B
          });
        }
      }
    ))), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        key: "annotation-marker",
        onChange: (D) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].marker = D.target.value, t({
            ...n,
            annotations: B
          });
        }
      },
      ["circle", "arrow"].map((D, B) => /* @__PURE__ */ r.createElement("option", { key: `col-${B}` }, D))
    )), /* @__PURE__ */ r.createElement(fs, { className: "warn btn-warn btn btn-remove delete", onClick: () => u(R) }, "Delete Annotation"))));
  })), ((x = n == null ? void 0 : n.annotations) == null ? void 0 : x.length) < 3 && /* @__PURE__ */ r.createElement(fs, { onClick: f, className: "mt-2" }, "Add Annotation")));
}, ua = {
  ForestPlot: YE,
  Series: Ur,
  Regions: sk,
  General: uk,
  BoxPlot: ck,
  Visual: fk,
  Sankey: pk,
  Annotate: hk
};
const mk = ({ config: e, updateConfig: t, data: n }) => {
  var k, h, P;
  const a = e.visualizationType === "Combo", i = ((k = e.runtime.lineSeriesKeys) == null ? void 0 : k.length) > 0, l = ((h = e.runtime.barSeriesKeys) == null ? void 0 : h.length) > 0, d = a && i, f = a && l, u = () => hr.uniq(hr.flatMap(n, hr.keys)), m = () => e.visualizationType === "Line" || d ? ["effect", "suppression"] : ["suppression"], y = {
    "Dashed Small": "- - -",
    "Dashed Medium": "– –",
    "Dashed Large": "— –",
    "Open Circles": "◯",
    "Filled Circles": ""
  }, x = (O) => {
    const C = Object.keys(y);
    return O === "suppression" ? C.slice(0, -1) : C;
  }, S = () => {
    if (e.visualizationType === "Bar" || f)
      return Object.keys(mp);
  };
  let R = (O) => {
    let C = [];
    e.preliminaryData && (C = [...e.preliminaryData]), C.splice(O, 1), t({ ...e, preliminaryData: C });
  }, T = () => {
    const O = e.visualizationType === "Line" ? "effect" : "suppression";
    let C = e.preliminaryData ? [...e.preliminaryData] : [];
    const N = {
      type: O,
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
      hideLineStyle: !1,
      circleSize: 6
    };
    C.push(N), t({ ...e, preliminaryData: C });
  }, F = (O, C, N) => {
    let D = [];
    e.preliminaryData && (D = [...e.preliminaryData]), D[N][O] = C, O === "symbol" && (D[N].iconCode = mp[C]), O === "style" && (D[N].lineCode = y[C]), t({ ...e, preliminaryData: D });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && ((P = e.preliminaryData) == null ? void 0 : P.map(({ circleSize: O, column: C, displayLegend: N, displayTable: D, displayTooltip: B, label: H, seriesKey: re, style: oe, symbol: ne, type: j, value: X, hideBarSymbol: G, hideLineStyle: V }, K) => {
    var ee, de;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${K}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, " ", j === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (Q) => {
          Q.preventDefault(), R(K);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Ct, { value: j, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (Q, te, q, Z) => F(q, Z, K), options: m() }), j === "suppression" ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: C,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (Q, te, q, Z) => F(q, Z, K),
        options: (ee = e.runtime) == null ? void 0 : ee.seriesKeys
      }
    ), /* @__PURE__ */ r.createElement(Je, { value: X, fieldName: "value", label: "Suppressed Data  Value", updateField: (Q, te, q, Z) => F(q, Z, K) }), (d || e.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: oe,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (Q, te, q, Z) => F(q, Z, K),
        options: x(j)
      }
    ), /* @__PURE__ */ r.createElement(st, { value: V, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (Q, te, q, Z) => F(q, Z, K) })), (f || e.visualizationType === "Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: ne,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (Q, te, q, Z) => F(q, Z, K),
        options: S()
      }
    ), /* @__PURE__ */ r.createElement(st, { value: G, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (Q, te, q, Z) => F(q, Z, K) })), /* @__PURE__ */ r.createElement(
      Je,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: H || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (Q, te, q, Z) => F(q, Z, K)
      }
    ), /* @__PURE__ */ r.createElement(
      st,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: B,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (Q, te, q, Z) => F(q, Z, K)
      }
    ), /* @__PURE__ */ r.createElement(
      st,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: N,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (Q, te, q, Z) => F(q, Z, K)
      }
    ), /* @__PURE__ */ r.createElement(
      st,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: D,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (Q, te, q, Z) => F(q, Z, K)
      }
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ct, { value: re, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (Q, te, q, Z) => F(q, Z, K), options: e.runtime.lineSeriesKeys ?? ((de = e.runtime) == null ? void 0 : de.seriesKeys) }), /* @__PURE__ */ r.createElement(Ct, { value: C, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (Q, te, q, Z) => F(q, Z, K), options: u() }), /* @__PURE__ */ r.createElement(
      Je,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "If 'Filled Circles' is selected as the style, this field is optional, and the style 'Filled Circles' will apply to all points within the associated series data."))),
        value: X,
        fieldName: "value",
        label: "VALUE TO TRIGGER",
        updateField: (Q, te, q, Z) => F(q, Z, K)
      }
    ), /* @__PURE__ */ r.createElement(Ct, { value: oe, initial: "Select", fieldName: "style", label: "Style", updateField: (Q, te, q, Z) => F(q, Z, K), options: x(j) }), oe.includes("Circles") && /* @__PURE__ */ r.createElement(Je, { className: "number-narrow", type: "number", value: O, fieldName: "circleSize", label: "circle size", updateField: (Q, te, q, Z) => F(q, Z, K) }), oe !== "Filled Circles" && /* @__PURE__ */ r.createElement(Je, { value: H, fieldName: "label", label: "Label", placeholder: "", updateField: (Q, te, q, Z) => F(q, Z, K) })));
  })), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: T, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, yk = () => {
  var pn, Nn, hn, ln, mn, cn, En, qn, g, A, z, U, be, ve, Pe, je, lt, gt;
  const {
    config: e,
    updateConfig: t,
    tableData: n,
    transformedData: a,
    loading: i,
    colorScale: l,
    colorPalettes: d,
    twoColorPalette: f,
    unfilteredData: u,
    excludedData: m,
    isDashboard: y,
    setParentConfig: x,
    missingRequiredSections: S,
    isDebug: R,
    setFilteredData: T,
    lineOptions: F,
    rawData: k,
    highlight: h,
    highlightReset: P,
    dimensions: O
  } = ce.useContext(Et), { minValue: C, maxValue: N, existPositiveValue: D, isAllLine: B } = Lc(e, u), H = { data: a, config: e }, { leftMax: re, rightMax: oe } = Ty(H), {
    headerColors: ne,
    visSupportsTooltipLines: j,
    visSupportsNonSequentialPallete: X,
    visSupportsSequentialPallete: G,
    visSupportsReverseColorPalette: V,
    visHasLabelOnData: K,
    visHasNumbersOnBars: ee,
    visHasAnchors: de,
    visHasBarBorders: Q,
    visHasDataCutoff: te,
    visHasSelectableLegendValues: q,
    visCanAnimate: Z,
    visHasLegend: Me,
    visHasLegendAxisAlign: ke,
    visHasBrushChart: pe,
    visSupportsDateCategoryAxis: Le,
    visSupportsValueAxisMin: We,
    visSupportsValueAxisMax: Ze,
    visSupportsDateCategoryAxisLabel: Ae,
    visSupportsDateCategoryAxisLine: me,
    visSupportsDateCategoryAxisTicks: _e,
    visSupportsDateCategoryTickRotation: ae,
    visSupportsDateCategoryNumTicks: se,
    visSupportsDateCategoryAxisPadding: xe,
    visSupportsRegions: ze,
    visSupportsFilters: Ve,
    visSupportsPreliminaryData: qe,
    visSupportsValueAxisGridLines: Qe,
    visSupportsValueAxisLine: tt,
    visSupportsValueAxisTicks: et,
    visSupportsValueAxisLabels: Ye,
    visSupportsBarSpace: Re,
    visSupportsBarThickness: Ce,
    visSupportsFootnotes: at,
    visSupportsSuperTitle: Ge,
    visSupportsDataCutoff: ft,
    visSupportsChartHeight: ht,
    visSupportsLeftValueAxis: yt,
    visSupportsTooltipOpacity: _t,
    visSupportsRankByValue: an,
    visSupportsResponsiveTicks: on,
    visSupportsDateCategoryHeight: Kt,
    visHasDataSuppression: Jt
  } = ws();
  ce.useEffect(() => {
    let le = [];
    e.series && (le = e.series.map((ue) => ({
      ...ue,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: le
    });
  }, [e.visualizationType]), ce.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), ce.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: Yt } = Yf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), At = (le, ue) => ({
    ...ue
  }), Mt = {
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
  }, Vt = (le) => {
    le.orientation === "horizontal" && (le.labels = !1), le.table.show === void 0 && (le.table.show = !y), le.visualizationType === "Combo" && (le.orientation = "vertical"), wn(le.xAxis) && !le.xAxis.padding && (le.xAxis.padding = 6), le.visualizationType === "Line" && (le.visualizationSubType = "regular", le.barStyle = "flat", le.isLollipopChart = !1);
  }, Ie = (le, ue, ye, Ne) => {
    if (R && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", le, ue, ye, Ne), le === "boxplot" && ue === "legend") {
      t({
        ...e,
        [le]: {
          ...e[le],
          [ue]: {
            ...e.boxplot[ue],
            [ye]: Ne
          }
        }
      });
      return;
    }
    if (le === "boxplot" && ue === "labels") {
      t({
        ...e,
        [le]: {
          ...e[le],
          [ue]: {
            ...e.boxplot[ue],
            [ye]: Ne
          }
        }
      });
      return;
    }
    const xt = (In) => In === 0 ? !0 : !!In;
    if (le === "columns" && xt(ue) && xt(ye)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [ue]: {
            ...e.columns[ue],
            [ye]: Ne
          }
        }
      });
      return;
    }
    if (le === null && ue === null) {
      xt(ye) || console.error("fieldName is required");
      let In = { ...e, [ye]: Ne };
      Vt(In), t(In);
      return;
    }
    const gn = Array.isArray(e[le]);
    let kn = gn ? [...e[le], Ne] : { ...e[le], [ye]: Ne };
    xt(ue) && (gn ? (kn = [...e[le]], kn[ue] = { ...kn[ue], [ye]: Ne }) : typeof Ne == "string" ? kn[ue] = Ne : xt(ye) && (kn = { ...e[le], [ue]: { ...e[le][ue], [ye]: Ne } }));
    let dr = { ...e, [le]: kn };
    Vt(dr), t(dr);
  }, [en, wt] = ce.useState(!0), [zt, mt] = ce.useState(!1);
  if (i)
    return null;
  ce.useEffect(() => {
    var le;
    (le = e.general) != null && le.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const tn = (le) => {
    t({
      ...e,
      lollipopShape: le
    });
  }, xn = (le) => {
    let ue = e.series ? [...e.series] : [], ye = Array.from(new Set(a.map((xt) => xt[le]))), Ne = [];
    ye.forEach((xt) => {
      Ne.push({ key: xt });
    }), e.visualizationType === "Forecasting" ? ue.push({ dataKey: le, type: e.visualizationType, stages: Ne, stageColumn: le, axis: "Left", tooltip: !0 }) : ue.push({ dataKey: le, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: ue });
  }, Ft = (le) => {
    const ue = e.series[0].dataKey, ye = a.sort((xt, gn) => xt[ue] - gn[ue]), Ne = le === "asc" ? ye : ye.reverse();
    t({ ...e }, Ne);
  }, nn = (le) => {
    let ue = [...e.exclusions.keys];
    ue.push(le);
    let ye = { ...e.exclusions, keys: ue };
    t({ ...e, exclusions: ye });
  }, Ln = (le) => {
    let ue = -1, ye = [...e.exclusions.keys];
    for (let Ne = 0; Ne < ye.length; Ne++)
      if (ye[Ne] === le) {
        ue = Ne;
        break;
      }
    if (ue !== -1) {
      ye.splice(ue, 1);
      let Ne = { ...e.exclusions, keys: ye }, xt = { ...e, exclusions: Ne };
      ye.length === 0 && delete xt.exclusions.keys, t(xt);
    }
  }, Xt = (le = !0) => {
    let ue = {};
    if (u.forEach((ye) => {
      Object.keys(ye).forEach((Ne) => ue[Ne] = !0);
    }), le) {
      const { lower: ye, upper: Ne } = e.confidenceKeys || {};
      Object.keys(ue).forEach((xt) => {
        (e.series && e.series.filter((gn) => gn.dataKey === xt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(xt) && (ye && Ne || ye || Ne) && xt !== ye && xt !== Ne) && delete ue[xt];
      });
    }
    return Object.keys(ue);
  }, jt = (le) => {
    if (!le)
      return [];
    const ue = /* @__PURE__ */ new Set();
    for (let ye = 0; ye < le.length; ye++)
      for (const [Ne] of Object.entries(le[ye]))
        ue.add(Ne);
    return Array.from(ue);
  }, Tn = (le, ue = !1) => {
    let ye = [];
    return m.forEach((Ne) => {
      ye.push(Ne[le]);
    }), ue ? [...new Set(ye)] : ye;
  }, Hn = () => {
    wt(!en), t({
      ...e,
      showEditorPanel: !en
    });
  }, Mn = () => {
    let le = JSON.parse(JSON.stringify(e));
    return S() === !1 && delete le.newViz, delete le.runtime, le;
  };
  ce.useEffect(() => {
    if (x) {
      const le = Mn();
      x(le);
    }
  }, [e]), ce.useEffect(() => {
    const le = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], ue = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: ue
      },
      yAxis: {
        ...e.yAxis,
        anchors: le
      }
    });
  }, [e.orientation]), ce.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), ce.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), ce.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const qt = ce.useCallback(() => {
    const le = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, le.map((ue, ye) => /* @__PURE__ */ r.createElement("li", { key: ue }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": ue }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, ue)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => Ln(ue) }, "×"))));
  }, [e]), Wn = (le, ue) => {
    let ye = e.series, [Ne] = ye.splice(le, 1);
    ye.splice(ue, 0, Ne), t({ ...e, series: ye });
  };
  e.isLollipopChart && ((pn = e == null ? void 0 : e.series) == null ? void 0 : pn.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Nn = e == null ? void 0 : e.series) == null ? void 0 : Nn.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((hn = e == null ? void 0 : e.series) == null ? void 0 : hn.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((ln = e == null ? void 0 : e.series) == null ? void 0 : ln.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Vn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Cn, Sn] = ce.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), jn = () => {
    const le = e[Vn].max, ue = e[Vn].rightMax;
    let ye = "", Ne = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (le && parseFloat(le) < parseFloat(N) && D):
          ye = "Max value must be more than " + N;
          break;
        case (le && parseFloat(le) < 0 && !D):
          ye = "Value must be more than or equal to 0";
          break;
        default:
          ye = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (le && parseFloat(le) < re):
          ye = "Max value must be more than " + re;
          break;
        case (ue && parseFloat(ue) < oe):
          Ne = "Max value must be more than " + oe;
          break;
        case (le && parseFloat(le) < 0 && !D):
          ye = "Value must be more than or equal to 0";
          break;
        default:
          ye = "";
      }
    Sn((xt) => ({ ...xt, maxMsg: ye, rightMaxMessage: Ne }));
  }, zn = () => {
    const le = parseFloat(e[Vn].min);
    let ue = Number(C), ye = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && le < 0):
        ye = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && le > ue):
        ye = "Value should not exceed " + C;
        break;
      case (e.visualizationType === "Combo" && B && le > ue):
        ye = "Value should not exceed " + C;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !B) && ue > 0 && le > 0):
        ye = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && le >= Math.min(ue, e.xAxis.target)):
        ye = "Value must be less than " + Math.min(ue, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && le && ue < 0 && le > ue):
        ye = "Value should not exceed " + C;
        break;
      default:
        ye = "";
    }
    Sn((Ne) => ({ ...Ne, minMsg: ye }));
  };
  ce.useEffect(() => {
    zn(), jn();
  }, [C, N, e]);
  const Un = ((mn = e == null ? void 0 : e.dataKey) == null ? void 0 : mn.includes("http://")) || ((cn = e == null ? void 0 : e.dataKey) == null ? void 0 : cn.includes("https://")), De = () => {
    var le, ue;
    if (R !== void 0 && R && !((le = e == null ? void 0 : e.xAxis) != null && le.dataKey)) {
      let ye = Xt(!1);
      if (ye.includes("Date"))
        return "Date";
      if (ye.includes("Race"))
        return "Race";
      if (ye.includes("Month"))
        return "Month";
    }
    return ((ue = e == null ? void 0 : e.xAxis) == null ? void 0 : ue.dataKey) || "";
  }, ct = () => {
    if (R !== void 0 && R && Xt(!1).length > 0) {
      let le = Xt(!1).filter((ue) => ue !== De());
      if (le.length > 0)
        return le[0];
    }
    return "";
  };
  if (R && !e.xAxis.dataKey && (e.xAxis.dataKey = De()), R && ((En = e == null ? void 0 : e.series) == null ? void 0 : En.length) === 0) {
    let le = ct();
    le !== "" && xn(le), R && console.log("### COVE DEBUG: Chart: Setting default datacol=", le);
  }
  const pt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], $ = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((qn = e.data) == null ? void 0 : qn[0]) || []).map((ue) => {
      const ye = e == null ? void 0 : e.series.some((Ne) => Ne.dataKey === ue);
      if (ue !== e.xAxis.dataKey && !ye)
        return $.push(
          /* @__PURE__ */ r.createElement("option", { value: ue, key: ue }, ue)
        );
    });
    let le = {};
    e.data.forEach((ue) => {
      Object.keys(ue).forEach((ye) => {
        le[ye] = le[ye] || [];
        const Ne = typeof ue[ye] == "number" ? ue[ye].toString() : ue[ye];
        le[ye].indexOf(Ne) === -1 && le[ye].push(Ne);
      });
    });
  }
  if (!e.data && a) {
    if (!a[0])
      return;
    Object.keys(a[0]).map((ue) => {
      const ye = a.some((Ne) => Ne.dataKey === ue);
      if (ue !== e.xAxis.dataKey && !ye)
        return $.push(
          /* @__PURE__ */ r.createElement("option", { value: ue, key: ue }, ue)
        );
    });
    let le = {};
    a.forEach((ue) => {
      Object.keys(ue).forEach((ye) => {
        le[ye] = le[ye] || [];
        const Ne = typeof ue[ye] == "number" ? ue[ye].toString() : ue[ye];
        le[ye].indexOf(Ne) === -1 && le[ye].push(Ne);
      });
    });
  }
  const Oe = (le) => {
    const ue = hr.cloneDeep(e.columns);
    delete ue[le], t({
      ...e,
      columns: ue
    });
  }, Ke = async (le, ue, ye) => {
    switch (ue) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [le]: {
              ...e.columns[le],
              [ue]: ye
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [le]: {
              ...e.columns[le],
              [ue]: ye
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: $e,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBar: it,
    handleAddNewHighlightedBar: kt,
    handleRemoveHighlightedBar: Lt,
    handleUpdateHighlightedBarColor: Ue,
    handleHighlightedBarLegendLabel: It,
    handleUpdateHighlightedBorderWidth: $t
  } = Sc(e, t), Bt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, vt = () => {
    const le = a.map((ue) => ue[e.legend.colorCode]);
    return Bt ? le : Xt(!1).filter((ue) => ue !== e.xAxis.dataKey);
  }, Rt = (le) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: le } });
  }, Nt = (le, ue, ye) => {
    var gn;
    const Ne = { ...e[le], [ue]: ye }, xt = { ...e, [le]: Ne };
    ye === "highlight" && ((gn = e.legend.seriesHighlight) != null && gn.length) && (xt.legend.seriesHighlight.length = 0), t(xt);
  }, Ot = (le, ue, ye) => {
    const Ne = { ...e.xAxis[le] };
    Ne[ue] = ye;
    const xt = { ...e, xAxis: { ...e.xAxis, [le]: Ne } };
    t(xt);
  }, Gt = {
    addNewExclusion: nn,
    data: a,
    editColumn: Ke,
    getColumns: Xt,
    getDataValueOptions: jt,
    getDataValues: Tn,
    getItemStyle: At,
    handleSeriesChange: Wn,
    handleAddNewHighlightedBar: kt,
    setCategoryAxis: De,
    sortSeries: Ft,
    updateField: Ie,
    warningMsg: Cn,
    highlightedBarValues: $e,
    handleHighlightedBarLegendLabel: It,
    handleUpdateHighlightedBar: it,
    handleRemoveHighlightedBar: Lt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBorderWidth: $t,
    handleUpdateHighlightedBarColor: Ue,
    setLollipopShape: tn
  };
  return /* @__PURE__ */ r.createElement(qf.Provider, { value: Gt }, /* @__PURE__ */ r.createElement(Or, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(jd.Sidebar, { displayPanel: en, isDashboard: y, title: "Configure Chart", onBackClick: Hn }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(ua.General, { name: "General" }), /* @__PURE__ */ r.createElement(ua.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ r.createElement(ua.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(Iu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (le) => {
        le.target.value !== "" && le.target.value !== "Select" && xn(le.target.value), le.target.value = "";
      },
      options: Xt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(ua.Series.Wrapper, { getColumns: Xt }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(_y, { onDragEnd: ({ source: le, destination: ue }) => Wn(le.index, ue.index) }, /* @__PURE__ */ r.createElement(Ny, { droppableId: "filter_order" }, (le) => /* @__PURE__ */ r.createElement("ul", { ...le.droppableProps, className: "series-list", ref: le.innerRef }, /* @__PURE__ */ r.createElement(ua.Series.List, { series: e.series, getItemStyle: At, sortableItemStyles: Mt, chartsWithOptions: pt }), le.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Ct, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Ie, initial: "Select", options: Xt() }), /* @__PURE__ */ r.createElement(Ct, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Ie, initial: "Select", options: Xt() })), an() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Ct, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (le) => Ft(le.target.value), options: ["asc", "desc"] }), qe() && /* @__PURE__ */ r.createElement(mk, { config: e, updateConfig: t, data: a }))), /* @__PURE__ */ r.createElement(ua.BoxPlot, { name: "Measures" }), yt() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(Iu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Ie,
      options: Xt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Ie }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(st, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Ie }), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: Ie
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
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ie }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(st, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ie }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ie }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), Qe() && /* @__PURE__ */ r.createElement(st, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Ie }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(Je, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Ie, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(st, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Ie })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, tt() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Ye() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), et() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie }), Ze() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.maxMsg), We() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Ie })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(st, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.maxMsg), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg)), de() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (A = (g = e.yAxis) == null ? void 0 : g.anchors) == null ? void 0 : A.map((le, ue) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${ue}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", ue + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne.splice(ue, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ue].value ? e.yAxis.anchors[ue].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[ue].value = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ue].color ? e.yAxis.anchors[ue].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[ue].color = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[ue].lineStyle || "",
      onChange: (ye) => {
        const Ne = [...e.yAxis.anchors];
        Ne[ue].lineStyle = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((ye) => /* @__PURE__ */ r.createElement("option", { key: ye.key }, ye.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (le) => {
        le.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    "Add Anchor"
  )), de() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (U = (z = e.xAxis) == null ? void 0 : z.anchors) == null ? void 0 : U.map((le, ue) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `xaxis-anchors-${ue}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", ue + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne.splice(ue, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ue].value ? e.xAxis.anchors[ue].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[ue].value = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ue].color ? e.xAxis.anchors[ue].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[ue].color = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[ue].lineStyle || "",
      onChange: (ye) => {
        const Ne = [...e.xAxis.anchors];
        Ne[ue].lineStyle = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((ye) => /* @__PURE__ */ r.createElement("option", { key: ye.key }, ye.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (le) => {
        le.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    "Add Anchor"
  )))), Yt && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(st, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.rightMaxMessage), /* @__PURE__ */ r.createElement(Je, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg))), Le() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(Iu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (le) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: le.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ r.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ r.createElement(st, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Ie }), xe() && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.xAxis.dataKey || De() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Ie,
      options: Xt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Ie,
      options: Xt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Ie }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), wn(e.xAxis) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    Je,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Ie
    }
  )), /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Ie
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(qt, null)), /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (le) => {
        le.target.value !== "" && le.target.value !== "Select" && nn(le.target.value), le.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Je, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Ie, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(Je, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Ie, value: e.exclusions.dateEnd || "" }))), se() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
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
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => mt(!zt), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${zt ? "90deg" : "0deg"})` } }, ">"))), zt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Zf).map((le) => /* @__PURE__ */ r.createElement(
    Je,
    {
      key: `viewport-step-count-input-${le}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[le] : void 0,
      placeholder: "Auto",
      type: "number",
      label: le,
      className: "number-narrow",
      updateField: (ue, ye, Ne, xt) => Ot("viewportStepCount", le, xt)
    }
  ))))), se() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
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
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => mt(!zt), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${zt ? "90deg" : "0deg"})` } }, ">"))), zt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Zf).map((le) => /* @__PURE__ */ r.createElement(
    Je,
    {
      key: `viewport-num-ticks-input-${le}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[le] : void 0,
      placeholder: "Auto",
      type: "number",
      label: le,
      className: "number-narrow",
      updateField: (ue, ye, Ne, xt) => Ot("viewportNumTicks", le, xt)
    }
  ))))), Kt() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ie }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(st, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Ie }), /* @__PURE__ */ r.createElement(Je, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 })), on() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(st, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ie }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ae() && /* @__PURE__ */ r.createElement(Je, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ie }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    Je,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, me() && /* @__PURE__ */ r.createElement(st, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Ae() && /* @__PURE__ */ r.createElement(st, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie })) : /* @__PURE__ */ r.createElement(r.Fragment, null, me() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Ae() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), _e() && /* @__PURE__ */ r.createElement(st, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie })), ((be = e.series) == null ? void 0 : be.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && $e.map((le, ue) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${ue}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (ye) => Lt(ye, ue) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", ue + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[ue].value, onChange: (ye) => it(ye, ue) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), nt && [...new Set(nt)].sort().map((ye) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${ue}-${ye}` }, ye)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[ue].color ? e.highlightedBarValues[ue].color : "", onChange: (ye) => Ue(ye, ue) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[ue].borderWidth ? e.highlightedBarValues[ue].borderWidth : "", onChange: (ye) => $t(ye, ue) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[ue].legendLabel ? e.highlightedBarValues[ue].legendLabel : "", onChange: (ye) => It(ye, ue) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (le) => kt(le) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(qt, null)), /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (le) => {
        le.target.value !== "" && le.target.value !== "Select" && nn(le.target.value), le.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), de() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (Pe = (ve = e.xAxis) == null ? void 0 : ve.anchors) == null ? void 0 : Pe.map((le, ue) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${ue}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", ue + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne.splice(ue, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ue].value ? e.xAxis.anchors[ue].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[ue].value = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[ue].color ? e.xAxis.anchors[ue].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[ue].color = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[ue].lineStyle || "",
      onChange: (ye) => {
        const Ne = [...e.xAxis.anchors];
        Ne[ue].lineStyle = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((ye) => /* @__PURE__ */ r.createElement("option", { key: ye.key }, ye.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (le) => {
        le.preventDefault();
        const ue = [...e.xAxis.anchors];
        ue.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ue
          }
        });
      }
    },
    "Add Anchor"
  )), de() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (lt = (je = e.yAxis) == null ? void 0 : je.anchors) == null ? void 0 : lt.map((le, ue) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${ue}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", ue + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne.splice(ue, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ue].value ? e.yAxis.anchors[ue].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[ue].value = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[ue].color ? e.yAxis.anchors[ue].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[ue].color = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[ue].lineStyle || "",
      onChange: (ye) => {
        const Ne = [...e.yAxis.anchors];
        Ne[ue].lineStyle = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    F.map((ye) => /* @__PURE__ */ r.createElement("option", { key: ye.key }, ye.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (le) => {
        le.preventDefault();
        const ue = [...e.yAxis.anchors];
        ue.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ue
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(ua.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Columns")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(lg, { config: e, updateField: Ie, deleteColumn: Oe }), " ")), Me() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Legend")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(st, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(
    st,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ r.createElement(
    st,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(st, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Ie }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Ct, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Ie, options: jt(a) }), /* @__PURE__ */ r.createElement(Ct, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[le, , ue, ye]) => Nt(le, ue, ye), options: ["highlight", "isolate"] }), ke() && /* @__PURE__ */ r.createElement(st, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Ie }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(st, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Ie }), q && e.legend.behavior === "isolate" && !Bt && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(ut, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((le, ue) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `${le}-${ue}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ye) => {
        ye.preventDefault();
        const Ne = [...e.legend.seriesHighlight];
        Ne.splice(ue, 1), Ie("legend", null, "seriesHighlight", Ne), Ne.length || P();
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.legend.seriesHighlight[ue],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ye) => {
        const Ne = [...e.legend.seriesHighlight];
        Ne.includes(ye.target.value) || (Ne[ue] = ye.target.value, Rt([...Ne]));
      },
      options: vt()
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (le) => {
        le.preventDefault();
        const ue = vt(), ye = [...e.legend.seriesHighlight];
        if (ye.length < ue.length) {
          const [xt] = ue.filter((gn) => !ye.includes(gn));
          ye.push(xt), Rt([...ye]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ r.createElement(Je, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Ie }), /* @__PURE__ */ r.createElement(Ct, { value: (gt = e.legend) == null ? void 0 : gt.position, section: "legend", fieldName: "position", label: "Position", updateField: Ie, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(st, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Ie }), /* @__PURE__ */ r.createElement(st, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Ie })), /* @__PURE__ */ r.createElement(Je, { type: "textarea", value: e.legend.description, updateField: Ie, section: "legend", fieldName: "description", label: "Legend Description" }))), Ve() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Filters")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(sg, { config: e, updateField: Ie, rawData: k }))), /* @__PURE__ */ r.createElement(ua.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Data Table")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(ug, { config: e, columns: Object.keys(a[0] || {}), updateField: Ie, isDashboard: y, isLoadedFromUrl: Un }), " ")), /* @__PURE__ */ r.createElement(ua.Annotate, { name: "Text Annotations" })), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Oy, { loadConfig: t, config: e, convertStateToConfig: Mn }))));
}, _h = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Du = (e, t) => {
  var n;
  return e ? (n = e.legend) != null && n.hide ? e != null && e.title ? `dataTableSection__${e.title.replace(/\s/g, "")}` : "dataTableSection" : t : "dataTableSection";
}, gk = (e) => {
  e.sort((m, y) => m - y);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(a.length / 2), d = n ? (a[l - 1] + a[l]) / 2 : a[l], f = Math.floor(i.length / 2), u = n ? (i[f - 1] + i[f]) / 2 : i[f];
  return { q1: d, q3: u };
}, vk = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), xk = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), bk = [
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
], Nh = (e = "#000000", t = !1) => {
  let n = hs(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
};
const Oh = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, l = a.search, d = t.exec(i);
  if (d && d[1])
    return d[1];
  const f = n.exec(l);
  return f && f[1] ? f[1] : "";
};
function Qk({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: l, setEditing: d, hostname: f, link: u, setSharedFilter: m, setSharedFilterValue: y, dashboardConfig: x }) {
  var Mn, qt, Wn, Vn, Cn, Sn, jn, zn, Un, De, ct, pt;
  const S = new og(), [R, T] = ce.useState(!0), [F, k] = ce.useState(null), [h, P] = ce.useState({}), [O, C] = ce.useState(h.data || []), [N, D] = ce.useState(void 0), [B, H] = ce.useState(void 0), [re, oe] = ce.useState(t && ((qt = (Mn = t == null ? void 0 : t.legend) == null ? void 0 : Mn.seriesHighlight) != null && qt.length) ? [...(Wn = t == null ? void 0 : t.legend) == null ? void 0 : Wn.seriesHighlight] : []), [ne, j] = ce.useState("lg"), [X, G] = ce.useState([]), [V, K] = ce.useState(), [ee, de] = ce.useState(), [Q, te] = ce.useState(!1), [q, Z] = ce.useState(!1), [Me, ke] = ce.useState([]), [pe] = ce.useState(`cove-${Math.random().toString(16).slice(-4)}`), [Le, We] = ce.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  ce.useRef(/* @__PURE__ */ new Map()), ce.useRef();
  const Ze = ce.useRef(null), Ae = ($) => {
    Z($);
  };
  a && console.log("Chart config, isEditor", h, n);
  let { legend: me, title: _e, description: ae, visualizationType: se } = h;
  n && (!_e || _e === "") && (_e = "Chart Title"), h.table && (!((Vn = h.table) != null && Vn.label) || ((Cn = h.table) == null ? void 0 : Cn.label) === "") && (h.table.label = "Data Table");
  const { barBorderClass: xe, lineDatapointClass: ze, contentClasses: Ve, sparkLineStyles: qe } = cg(h), Qe = ce.useId(), tt = () => Ac(h.visualizationType, B, h.allowLineToBarGraph), et = async () => {
    var $;
    if (h.dataUrl) {
      const Oe = new URL(h.runtimeDataUrl || h.dataUrl, window.location.origin);
      let Ke = Object.fromEntries(new URLSearchParams(Oe.search)), $e = !1;
      if (($ = h.filters) == null || $.forEach((kt) => {
        kt.type === "url" && Ke[kt.queryParameter] !== decodeURIComponent(kt.active) && (Ke[kt.queryParameter] = kt.active, $e = !0);
      }), (!h.formattedData || h.formattedData.urlFiltered) && !$e)
        return;
      let nt = `${Oe.origin}${Oe.pathname}${Object.keys(Ke).map((kt, Lt) => {
        let Ue = Lt === 0 ? "?" : "&";
        return Ue += kt + "=", Ue += Ke[kt], Ue;
      }).join("")}`, it = [];
      try {
        const kt = Oh(Oe.href);
        kt === "csv" || Qf(nt) ? it = await fetch(nt).then((Lt) => Lt.text()).then((Lt) => tp.parse(Lt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : kt === "json" || Jf(nt) ? it = await fetch(nt).then((Lt) => Lt.json()) : it = [];
      } catch {
        console.error(`Cannot parse URL: ${nt}`), it = [];
      }
      h.dataDescription && (it = S.autoStandardize(it), it = S.developerStandardize(it, h.dataDescription)), Object.assign(it, { urlFiltered: !0 }), Re({ ...h, runtimeDataUrl: nt, data: it, formattedData: it }), it && (C(it), D(it), H(bi(h.filters, it)));
    }
  }, Ye = async () => {
    let $ = t || await (await fetch(e)).json(), Oe = $.data || [];
    const Ke = $.filters ? $.filters.filter((it) => it.type === "url").length > 0 : !1;
    if ($.dataUrl && !Ke)
      try {
        const it = Oh($.dataUrl);
        (it === "csv" || Qf($.dataUrl)) && (Oe = await fetch($.dataUrl + `?v=${gp()}`).then((kt) => kt.text()).then((kt) => (kt = kt.replace(/(".*?")|,/g, (...Ue) => Ue[1] || "|"), kt = kt.replace(/["]+/g, ""), tp.parse(kt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (it === "json" || Jf($.dataUrl)) && (Oe = await fetch($.dataUrl + `?v=${gp()}`).then((kt) => kt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${$.dataUrl}`), Oe = [];
      }
    $.dataDescription && (Oe = S.autoStandardize(Oe), Oe = S.developerStandardize(Oe, $.dataDescription)), Oe && (C(Oe), D(Oe)), $ !== void 0 && $.table !== void 0 && (!$.table || !$.table.showVertical) && ($.table = $.table || {}, $.table.showVertical = !1);
    let $e = { ...Vd, ...$ };
    $e.filters && $e.filters.forEach((it, kt) => {
      const Lt = Fy(it);
      Lt && ($e.filters[kt].active = Lt);
    }), $e.visualizationType === "Box Plot" && ($e.legend.hide = !0), $e.table.show === void 0 && ($e.table.show = !i), $e.series.forEach((it) => {
      (it.tooltip === void 0 || it.tooltip === null) && (it.tooltip = !0), it.axis || (it.axis = "Left");
    }), !$e.data && Oe && ($e.data = Oe);
    const nt = { ...await My($e) };
    Re(nt, Oe);
  }, Re = ($, Oe) => {
    var it, kt, Lt;
    let Ke = Oe || O;
    Object.keys(Vd).forEach((Ue) => {
      $[Ue] && typeof $[Ue] == "object" && !Array.isArray($[Ue]) && ($[Ue] = { ...Vd[Ue], ...$[Ue] });
    });
    let $e = [];
    if ($.exclusions && $.exclusions.active)
      if ($.xAxis.type === "categorical" && ((it = $.exclusions.keys) == null ? void 0 : it.length) > 0)
        $e = Ke.filter((Ue) => !$.exclusions.keys.includes(Ue[$.xAxis.dataKey]));
      else if (wn($.xAxis) && ($.exclusions.dateStart || $.exclusions.dateEnd) && $.xAxis.dateParseFormat) {
        const Ue = (Rt) => new Date(Rt).getTime();
        let It = Ue($.exclusions.dateStart), $t = Ue($.exclusions.dateEnd) + 86399999, Bt = typeof It !== void 0 && isNaN(It) === !1, vt = typeof $t !== void 0 && isNaN($t) === !1;
        Bt && vt ? $e = Ke.filter((Rt) => Ue(Rt[$.xAxis.dataKey]) >= It && Ue(Rt[$.xAxis.dataKey]) <= $t) : Bt ? $e = Ke.filter((Rt) => Ue(Rt[$.xAxis.dataKey]) >= It) : vt && ($e = Ke.filter((Rt) => Ue(Rt[$.xAxis.dataKey]) <= $t));
      } else
        $e = Oe || O;
    else
      $e = Oe || O;
    D($e);
    let nt = [];
    if ($.filters && ($.filters.forEach((Ue, It) => {
      let $t = [];
      $t = Ue.orderedValues || Ce(Ue.columnName, $e).sort(Ue.order === "desc" ? xk : vk), $.filters[It].values = $t, $.filters[It].active = $.filters[It].active || $t[0], $.filters[It].filterStyle = $.filters[It].filterStyle ? $.filters[It].filterStyle : "dropdown";
    }), nt = bi($.filters, $e), H(nt)), $.xAxis.type === "date-time" && h.orientation === "horizontal" && ($.xAxis.type = "date"), $.runtime = {}, $.runtime.seriesLabels = {}, $.runtime.seriesLabelsAll = [], $.runtime.originalXAxis = $.xAxis, $.visualizationType === "Pie" ? ($.runtime.seriesKeys = (Oe || Ke).map((Ue) => Ue[$.xAxis.dataKey]), $.runtime.seriesLabelsAll = $.runtime.seriesKeys) : $.runtime.seriesKeys = $.series ? $.series.map((Ue) => ($.runtime.seriesLabels[Ue.dataKey] = Ue.name || Ue.label || Ue.dataKey, $.runtime.seriesLabelsAll.push(Ue.name || Ue.dataKey), Ue.dataKey)) : [], $.visualizationType === "Box Plot" && $.series) {
      let Ue = $e ? $e.map((Nt) => Nt[$.xAxis.dataKey]) : Ke.map((Nt) => Nt[$.xAxis.dataKey]), It = $e ? $e.map((Nt) => {
        var Ot;
        return Number(Nt[(Ot = $ == null ? void 0 : $.series[0]) == null ? void 0 : Ot.dataKey]);
      }) : Ke.map((Nt) => {
        var Ot;
        return Number(Nt[(Ot = $ == null ? void 0 : $.series[0]) == null ? void 0 : Ot.dataKey]);
      });
      const Bt = function(Nt) {
        return Nt.filter(function(Ot, Gt, pn) {
          return pn.indexOf(Ot) === Gt;
        });
      }(Ue);
      let vt = [];
      const Rt = [];
      if (!Bt)
        return;
      Bt.forEach((Nt) => {
        try {
          if (!Nt)
            throw new wt("No groups resolved in box plots");
          let Ot = $e ? $e.filter((U) => U[$.xAxis.dataKey] === Nt) : Ke.filter((U) => U[$.xAxis.dataKey] === Nt), Gt = Ot.map((U) => {
            var be;
            return Number(U[(be = $ == null ? void 0 : $.series[0]) == null ? void 0 : be.dataKey]);
          }), pn = Gt.sort((U, be) => U - be);
          const Nn = gk(pn);
          if (!Ot)
            throw new wt("boxplots dont have data yet");
          if (!Rt)
            throw new wt("boxplots dont have plots yet");
          $.boxplot.firstQuartilePercentage === "" && ($.boxplot.firstQuartilePercentage = 0), $.boxplot.thirdQuartilePercentage === "" && ($.boxplot.thirdQuartilePercentage = 0);
          const hn = Nn.q1, ln = Nn.q3, mn = ln - hn, cn = hn - (ln - hn) * 1.5, En = ln + (ln - hn) * 1.5, qn = pn.filter((U) => U < cn || U > En);
          let g = Gt;
          g = g.filter((U) => !qn.includes(U));
          const A = ns(Gt) || 0, z = ts([A, hn - 1.5 * mn]);
          Rt.push({
            columnCategory: Nt,
            columnMax: ns([ts(Gt), hn + 1.5 * mn]),
            columnThirdQuartile: Number(ln).toFixed($.dataFormat.roundTo),
            columnMedian: Number(bg(Gt)).toFixed($.dataFormat.roundTo),
            columnFirstQuartile: hn.toFixed($.dataFormat.roundTo),
            columnMin: z,
            columnTotal: Gt.reduce((U, be) => U + be, 0),
            columnSd: Number(gg(Gt)).toFixed($.dataFormat.roundTo),
            columnMean: Number(xg(Gt)).toFixed($.dataFormat.roundTo),
            columnIqr: Number(mn).toFixed($.dataFormat.roundTo),
            columnLowerBounds: z,
            columnUpperBounds: ns([ts(pn), hn + 1.5 * mn]),
            columnOutliers: qn,
            values: Gt,
            nonOutlierValues: g
          });
        } catch (Ot) {
          console.error("COVE: ", Ot.message);
        }
      }), vt = JSON.parse(JSON.stringify(Rt)), vt.map((Nt) => (Nt.columnIqr = void 0, Nt.nonOutlierValues = void 0, Nt.columnLowerBounds = void 0, Nt.columnUpperBounds = void 0, null)), $.boxplot.allValues = It, $.boxplot.categories = Bt, $.boxplot.plots = Rt, $.boxplot.tableData = vt;
    }
    $.visualizationType === "Combo" && $.series && ($.runtime.barSeriesKeys = [], $.runtime.lineSeriesKeys = [], $.runtime.areaSeriesKeys = [], $.runtime.forecastingSeriesKeys = [], $.series.forEach((Ue) => {
      Ue.type === "Area Chart" && $.runtime.areaSeriesKeys.push(Ue), Ue.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ue), (Ue.type === "Bar" || Ue.type === "Combo") && $.runtime.barSeriesKeys.push(Ue.dataKey), (Ue.type === "Line" || Ue.type === "dashed-sm" || Ue.type === "dashed-md" || Ue.type === "dashed-lg") && $.runtime.lineSeriesKeys.push(Ue.dataKey), Ue.type === "Combo" && (Ue.type = "Bar");
    })), $.visualizationType === "Forecasting" && $.series && ($.runtime.forecastingSeriesKeys = [], $.series.forEach((Ue) => {
      Ue.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ue);
    })), $.visualizationType === "Area Chart" && $.series && ($.runtime.areaSeriesKeys = [], $.series.forEach((Ue) => {
      $.runtime.areaSeriesKeys.push({ ...Ue, type: "Area Chart" });
    })), $.visualizationType === "Bar" && $.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes($.visualizationType) ? ($.runtime.xAxis = $.yAxis.yAxis ? $.yAxis.yAxis : $.yAxis, $.runtime.yAxis = $.xAxis.xAxis ? $.xAxis.xAxis : $.xAxis, $.runtime.horizontal = !1, $.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes($.visualizationType) && !tt() ? ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1, $.orientation = "vertical") : ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1), $.runtime.uniqueId = Date.now(), $.runtime.editorErrorMessage = $.visualizationType === "Pie" && !$.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", $.runtime.editorErrorMessage = $.visualizationType === "Sankey" && !$.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (kt = $.legend.seriesHighlight) != null && kt.length && oe((Lt = $.legend) == null ? void 0 : Lt.seriesHighlight), P($);
  }, Ce = ($, Oe = this.state.data) => {
    const Ke = [];
    return Oe.forEach(($e) => {
      const nt = $e[$];
      nt && Ke.includes(nt) === !1 && Ke.push(nt);
    }), Ke;
  }, at = ($, Oe) => {
    let Ke = h.visualizationType === "Bar" && h.visualizationSubType === "horizontal" ? h.xAxis.dataKey : h.yAxis.sortKey, $e = parseFloat($[Ke]), nt = parseFloat(Oe[Ke]);
    return $e < nt ? h.sortData === "ascending" ? 1 : -1 : $e > nt ? h.sortData === "ascending" ? -1 : 1 : 0;
  }, Ge = new Py(($) => {
    for (let Oe of $) {
      let { width: Ke, height: $e } = Oe.contentRect, nt = Ry(Ke), it = 32, kt = 350;
      j(nt), n && (Ke = Ke - kt), Oe.target.dataset.lollipop === "true" && (Ke = Ke - 2.5), Ke = Ke - it, G([Ke, $e]);
    }
  }), ft = ce.useCallback(($) => {
    $ !== null && Ge.observe($), de($);
  }, []);
  function ht($) {
    return Object.keys($).length === 0;
  }
  ce.useEffect(() => {
    Ye();
  }, []), ce.useEffect(() => {
    et();
  }, [JSON.stringify(h.filters)]), ce.useEffect(() => {
    ee && !ht(h) && !Q && (dg("cove_loaded", { config: h }), te(!0));
  }, [ee, h]), ce.useEffect(() => {
    const $ = (Oe) => {
      let Ke = [];
      Ke.push(Oe.detail), K(Ke);
    };
    return fg("cove_filterData", (Oe) => $(Oe)), () => {
      pg("cove_filterData", $);
    };
  }, [h]), ce.useEffect(() => {
    if (V && V[0] && !V[0].hasOwnProperty("active")) {
      let Oe = { ...h };
      delete Oe.filters, P(Oe), H(bi(V, N));
    }
    if (V && V.length > 0 && V.length > 0 && V[0].hasOwnProperty("active")) {
      let $ = { ...h, filters: V };
      P($), H(bi(V, N));
    }
  }, [V]), t && ce.useEffect(() => {
    Ye();
  }, [t.data]), ce.useEffect(() => {
    var $;
    if (O && h.xAxis && (($ = h.runtime) != null && $.seriesKeys)) {
      const Oe = ["Paired Bar", "Deviation Bar"].includes(h.visualizationType) ? h.twoColor.palette : h.palette, Ke = { ...ar, ...ps };
      let $e = h.customColors || Ke[Oe], nt = h.runtime.seriesKeys.length, it;
      for (; nt > $e.length; )
        $e = $e.concat($e);
      $e = $e.slice(0, nt), it = () => Ho({
        domain: h.runtime.seriesLabelsAll,
        range: $e,
        unknown: null
      }), k(it), T(!1);
    }
    h && O && h.sortData && O.sort(at);
  }, [h, O]);
  const yt = ($) => {
    if (re.length + 1 === h.runtime.seriesKeys.length && h.visualizationType !== "Forecasting") {
      _t();
      return;
    }
    const Oe = [...re];
    let Ke = $.datum;
    h.runtime.seriesLabels && h.runtime.seriesKeys.forEach(($e) => {
      h.runtime.seriesLabels[$e] === $.datum && (Ke = $e);
    }), Oe.indexOf(Ke) !== -1 ? Oe.splice(Oe.indexOf(Ke), 1) : Oe.push(Ke), oe(Oe);
  }, _t = () => {
    try {
      const $ = Ze.current;
      if (!$)
        throw new wt("No legend available to set previous focus on.");
      $.focus();
    } catch ($) {
      console.error("COVE:", $.message);
    }
    oe([]);
  }, an = h.orientation === "horizontal" ? "yAxis" : "xAxis", on = ($, Oe = !0) => {
    let Ke = Sm(h.runtime[an].dateParseFormat)($);
    return Ke || (Oe && (h.runtime.editorErrorMessage = `Error parsing date "${$}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Kt = ($) => Yd(h.runtime[an].dateDisplayFormat)($), Jt = ($) => Yd(h.tooltips.dateDisplayFormat)($);
  function Yt($, Oe) {
    const $e = document.createElement("canvas").getContext("2d");
    if (!$e) {
      console.error("2d context not found");
      return;
    }
    return $e.font = Oe || getComputedStyle(document.body).font, Math.ceil($e.measureText($).width);
  }
  const At = ($, Oe, Ke = !1, $e, nt, it) => {
    if (isNaN($) || !$)
      return $;
    const kt = $ < 0;
    (Oe === void 0 || !Oe) && (Oe = "left"), kt && ($ = Math.abs($));
    let {
      dataFormat: { commas: Lt, abbreviated: Ue, roundTo: It, prefix: $t, suffix: Bt, rightRoundTo: vt, bottomRoundTo: Rt, rightPrefix: Nt, rightSuffix: Ot, bottomPrefix: Gt, bottomSuffix: pn, bottomAbbreviated: Nn }
    } = h;
    String($).indexOf(",") !== -1 && ($ = $.replaceAll(",", ""));
    let hn = $, ln = {
      useGrouping: !!Lt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Oe === "left" || Oe === void 0) {
      let En;
      it !== void 0 ? En = it ? Number(it) : 0 : En = It ? Number(It) : 0, ln = {
        useGrouping: it ? !0 : !!h.dataFormat.commas,
        minimumFractionDigits: En,
        maximumFractionDigits: En
      };
    }
    Oe === "right" && (ln = {
      useGrouping: !!h.dataFormat.rightCommas,
      minimumFractionDigits: vt ? Number(vt) : 0,
      maximumFractionDigits: vt ? Number(vt) : 0
    });
    const mn = () => h.forestPlot.type === "Logarithmic" && !Rt ? 2 : Number(Rt) ? Number(Rt) : 0;
    if (Oe === "bottom" && (ln = {
      useGrouping: !!h.dataFormat.bottomCommas,
      minimumFractionDigits: mn(),
      maximumFractionDigits: mn()
    }), $ = yp($), isNaN($))
      return h.runtime.editorErrorMessage = `Unable to parse number from data ${hn}. Try reviewing your data and selections in the Data Series section.`, hn;
    if (!h.dataFormat)
      return $;
    if (h.dataCutoff) {
      let En = yp(h.dataCutoff);
      $ < En && ($ = En);
    }
    Oe === "left" && Lt && Ue && Ke || Oe === "bottom" && Lt && Ue && Ke ? $ = $ : $ = $.toLocaleString("en-US", ln);
    let cn = "";
    return Ue && Oe === "left" && Ke && ($ = _h(parseFloat($))), Nn && Oe === "bottom" && Ke && ($ = _h(parseFloat($))), $e && Oe === "left" ? cn = $e + cn : $t && Oe === "left" && (cn += $t), Nt && Oe === "right" && (cn += Nt), Gt && Oe === "bottom" && (cn += Gt), cn += $, nt && Oe === "left" ? cn += nt : Bt && Oe === "left" && (cn += Bt), Ot && Oe === "right" && (cn += Ot), pn && Oe === "bottom" && (cn += pn), kt && (cn = "-" + cn), String(cn);
  }, Mt = {
    "Paired Bar": /* @__PURE__ */ r.createElement(jr, null),
    Forecasting: /* @__PURE__ */ r.createElement(jr, null),
    Bar: /* @__PURE__ */ r.createElement(jr, null),
    Line: /* @__PURE__ */ r.createElement(jr, null),
    Combo: /* @__PURE__ */ r.createElement(jr, null),
    Pie: /* @__PURE__ */ r.createElement(cS, null),
    "Box Plot": /* @__PURE__ */ r.createElement(jr, null),
    "Area Chart": /* @__PURE__ */ r.createElement(jr, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(jr, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(jr, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(jr, null)
  }, Vt = () => {
    if (h.visualizationType === "Sankey" || h.visualizationType === "Forecasting" || h.visualizationType === "Forest Plot")
      return !1;
    if (h.visualizationType === "Pie") {
      if ((h == null ? void 0 : h.yAxis.dataKey) === void 0)
        return !0;
    } else if ((h == null ? void 0 : h.series) === void 0 || !((h == null ? void 0 : h.series.length) > 0))
      return !0;
    return !h.xAxis.dataKey;
  }, Ie = ($, Oe) => {
    if ($ === null || $ === "" || $ === void 0)
      return "";
    if (typeof $ == "string" && $.length > 0 && h.legend.type === "equalnumber")
      return $;
    let Ke = $, $e;
    if (Object.keys(h.columns).length > 0 && Object.keys(h.columns).forEach(function(nt) {
      var it = h.columns[nt];
      it.name === Oe && ($e = it);
    }), $e === void 0 && ($e = h.type === "chart" ? h.dataFormat : h.primary, $e.useCommas = $e.commas, $e.roundToPlace = $e.roundTo ? $e.roundTo : ""), $e) {
      let nt = !1, it = 0;
      Number($) && ($e.roundToPlace >= 0 && (nt = $e.roundToPlace ? $e.roundToPlace !== "" || $e.roundToPlace !== null : !1, it = $e.roundToPlace ? Number($e.roundToPlace) : 0, $e.hasOwnProperty("roundToPlace") && nt && (Ke = Number($).toFixed(it))), $e.hasOwnProperty("useCommas") && $e.useCommas === !0 && (Ke = Number($).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: nt ? it : 0,
        maximumFractionDigits: nt ? it : 5
      }))), Ke = ($e.prefix || "") + Ke + ($e.suffix || "");
    }
    return Ke;
  }, en = () => {
    const $ = (Ke) => {
      Ke && Ke.preventDefault();
      let $e = { ...h };
      delete $e.newViz, Re($e);
    }, Oe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: Oe }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement(fs, { className: "btn", style: { margin: "1em auto" }, disabled: Vt(), onClick: (Ke) => $(Ke) }, "I'm Done")));
  }, wt = () => {
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
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: $ }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, h.runtime.editorErrorMessage)));
  }, zt = ($) => {
    try {
      if (!$)
        throw new wt("COVE: No rowObj in applyLegendToRow");
      if (h.type === "navigation") {
        let Oe = ar[h.color] || ar.bluegreenreverse;
        return Nh(Oe[3]);
      }
      return Nh();
    } catch (Oe) {
      console.error("COVE: ", Oe);
    }
  }, mt = ($) => {
    var Oe;
    return Array.isArray($) ? h.visualizationType === "Forecasting" ? $ : (Oe = h == null ? void 0 : h.xAxis) != null && Oe.dataKey ? S.cleanData($, h.xAxis.dataKey) : $ : [];
  }, tn = ($) => $;
  let xn = /* @__PURE__ */ r.createElement(Zy, null);
  const Ft = ($) => {
    if (!(!$ || !$.toLowerCase))
      return $.toLowerCase().replaceAll(/ /g, "-");
  }, nn = () => {
    var Ke, $e, nt;
    const $ = (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(ne), Oe = ["chart-container", "p-relative"];
    return ((Ke = h.legend) == null ? void 0 : Ke.position) === "bottom" && Oe.push("bottom"), ($e = h.legend) != null && $e.hide && Oe.push("legend-hidden"), ze && Oe.push(ze), h.barHasBorder || Oe.push("chart-bar--no-border"), (nt = h.brush) != null && nt.active && (x == null ? void 0 : x.type) === "dashboard" && (!$ || h.legend.hide) && Oe.push("dashboard-brush"), Oe.push(...Ve), Oe;
  }, Ln = () => {
    var Ke, $e;
    const $ = ["subtext "], Oe = (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(ne);
    return h.isResponsiveTicks && $.push("subtext--responsive-ticks "), (Ke = h.brush) != null && Ke.active && !Oe && $.push("subtext--brush-active "), ($e = h.brush) != null && $e.active && h.legend.hide && $.push("subtext--brush-active "), $;
  };
  if (!R) {
    const $ = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${h.dataKey}`, className: "margin-left-href" }, h.dataKey, " (Go to Table)");
    xn = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(yk, null), /* @__PURE__ */ r.createElement(jd.Responsive, { isEditor: n }, h.newViz && /* @__PURE__ */ r.createElement(en, null), h.newViz === void 0 && n && h.runtime && ((Sn = h.runtime) == null ? void 0 : Sn.editorErrorMessage) && /* @__PURE__ */ r.createElement(wt, null), !Vt() && !h.newViz && /* @__PURE__ */ r.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${Ft(h.visualizationType)}`, "aria-label": ff(h), tabIndex: 0 }, /* @__PURE__ */ r.createElement(By, { showTitle: h.showTitle, isDashboard: i, title: _e, superTitle: h.superTitle, classes: ["chart-title", `${h.theme}`, "cove-component__header"], style: void 0 }), h.filters && !V && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(ep, { config: h, setConfig: P, setFilteredData: H, filteredData: B, excludedData: N, filterData: bi, dimensions: X }), /* @__PURE__ */ r.createElement(cp, { skipId: Du(h, Qe), skipMessage: "Skip Over Chart Container" }), ((jn = h.annotations) == null ? void 0 : jn.length) > 0 && /* @__PURE__ */ r.createElement(cp, { skipId: Du(h, Qe), skipMessage: "Skip over annotations", key: "skip-annotations" }), (h == null ? void 0 : h.introText) && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, Li(h.introText)), /* @__PURE__ */ r.createElement("div", { className: nn().join(" ") }, h.visualizationType !== "Spark Line" && h.visualizationType !== "Line" && Mt[h.visualizationType], h.visualizationType === "Line" && (tt() ? Mt.Bar : Mt.Line), h.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ep, { config: h, setConfig: P, setFilteredData: H, filteredData: B, excludedData: N, filterData: bi, dimensions: X }), (h == null ? void 0 : h.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Li(h.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...qe } }, /* @__PURE__ */ r.createElement(Op, null, (Oe) => /* @__PURE__ */ r.createElement(UE, { width: Oe.width, height: Oe.height }))), ae && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Li(ae))), h.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(Op, { "aria-hidden": "true" }, (Oe) => /* @__PURE__ */ r.createElement($S, { runtime: h.runtime, width: Oe.width, height: Oe.height })), !h.legend.hide && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(KE, { ref: Ze, skipId: Du(h, Qe) })), i && h.table && h.table.show && h.table.showDataTableLink ? $ : u && u, ae && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: Ln().join("") }, Li(ae)), !1, /* @__PURE__ */ r.createElement(kd.Section, { classes: ["download-buttons"] }, h.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(kd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: h, elementToCapture: pe }), h.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(kd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: h, elementToCapture: pe })), (h.xAxis.dataKey && h.table.show && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" || h.visualizationType === "Sankey" && h.table.show) && /* @__PURE__ */ r.createElement(
      Gy,
      {
        config: h,
        rawData: h.visualizationType === "Sankey" ? (Un = (zn = h == null ? void 0 : h.data) == null ? void 0 : zn[0]) == null ? void 0 : Un.tableData : h.table.customTableConfig ? bi(h.filters, h.data) : h.data,
        runtimeData: h.visualizationType === "Sankey" ? (ct = (De = h == null ? void 0 : h.data) == null ? void 0 : De[0]) == null ? void 0 : ct.tableData : B || N,
        expandDataTable: h.table.expanded,
        columns: h.columns,
        displayDataAsText: Ie,
        displayGeoName: tn,
        applyLegendToRow: zt,
        tableTitle: h.table.label,
        indexTitle: h.table.indexLabel,
        vizTitle: _e,
        viewport: ne,
        tabbingId: Du(h, Qe),
        colorScale: F
      }
    ), ((pt = h == null ? void 0 : h.annotations) == null ? void 0 : pt.length) > 0 && /* @__PURE__ */ r.createElement(Xf.Dropdown, null), (h == null ? void 0 : h.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, Li(h.footnotes)))));
  }
  const Hn = {
    brushConfig: Le,
    capitalize: ($) => $.charAt(0).toUpperCase() + $.slice(1),
    clean: mt,
    colorPalettes: ar,
    colorScale: F,
    config: h,
    currentViewport: ne,
    dashboardConfig: x,
    debugSvg: a,
    dimensions: X,
    dynamicLegendItems: Me,
    excludedData: N,
    formatDate: Kt,
    formatNumber: At,
    formatTooltipsDate: Jt,
    getTextWidth: Yt,
    getXAxisData: ($) => wn(h.runtime.xAxis) ? on($[h.runtime.originalXAxis.dataKey]).getTime() : $[h.runtime.originalXAxis.dataKey],
    getYAxisData: ($, Oe) => $[Oe],
    handleChartAriaLabels: ff,
    handleLineType: oy,
    highlight: yt,
    highlightReset: _t,
    imageId: pe,
    isDashboard: i,
    isLegendBottom: (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(ne),
    isDebug: a,
    isDraggingAnnotation: q,
    handleDragStateChange: Ae,
    isEditor: n,
    isNumber: zu,
    legend: me,
    lineOptions: bk,
    loading: R,
    missingRequiredSections: Vt,
    outerContainerRef: ft,
    parseDate: on,
    rawData: O ?? {},
    seriesHighlight: re,
    setBrushConfig: We,
    setConfig: P,
    setDynamicLegendItems: ke,
    setEditing: d,
    setFilteredData: H,
    setParentConfig: l,
    setSeriesHighlight: oe,
    setSharedFilter: m,
    setSharedFilterValue: y,
    tableData: B || N,
    // do not clean table data
    transformedData: mt(B || N),
    // do this right before passing to components
    twoColorPalette: ps,
    unfilteredData: O,
    updateConfig: Re
  };
  return /* @__PURE__ */ r.createElement(Et.Provider, { value: Hn }, /* @__PURE__ */ r.createElement(jd.VisualizationWrapper, { config: h, isEditor: n, currentViewport: ne, ref: ft, imageId: pe, showEditorPanel: h == null ? void 0 : h.showEditorPanel }, xn));
}
export {
  Qk as C
};
