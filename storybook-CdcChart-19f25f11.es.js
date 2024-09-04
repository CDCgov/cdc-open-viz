import { r as se, R as r } from "./storybook-index-45401197.es.js";
import { v as Qf, a as Dy, i as Jf, b as ep, g as _y } from "./storybook-isSolr-cb863e7a.es.js";
import { _ as Kr, P as Ny, D as Oy, C as Fy, A as My, d as Si, F as tp, g as zy } from "./storybook-Filters-4331f963.es.js";
import { L as Kd, a as $y } from "./storybook-coveUpdateWorker-364bbc36.es.js";
import { B as hs } from "./storybook-Button-d74e310e.es.js";
import { p as Iy, P as We } from "./storybook-index-43433e35.es.js";
import { d as By } from "./storybook-debounce-cc216a80.es.js";
import { a as Hy } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as np } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Pi, T as Wy } from "./storybook-index-e5bf02db.es.js";
import { _ as fn } from "./storybook-extends-70f3d2a3.es.js";
import { p as rp, j as Ei, k as Hr, c as jt, m as ap, a as xc, n as Zn, t as Fu, o as Ho, q as wd, r as ip, u as Gn, v as op, w as Vy, x as jy, l as lp, G as Uy, y as ms, z as or, B as Wu, h as Ko, T as St, P as Ky, f as Vu, H as Yy, C as sp, d as Xy, M as Mh, E as qy, A as Gy, e as zh, I as up } from "./storybook-InputToggle-d173e620.es.js";
import { t as Zy, a as En, b as Ef, L as cp, c as Gl, g as ki, f as $h, S as dp, M as Td, D as Qy } from "./storybook-DataTable-339952a4.es.js";
import { E as Or, L as Jy } from "./storybook-Loading-f180d060.es.js";
import { b as bc, t as eg, e as Ih, f as fp, g as tg, h as ng, j as rg, k as pp, m as ag, G as at, c as Cn } from "./storybook-Group-e6c0d0df.es.js";
import { s as ts, t as Bh, a as Hh, b as Wh, d as Ss, B as wr, c as Fn, C as ig } from "./storybook-Circle-4d1a558c.es.js";
import { R as og } from "./storybook-index-633d712d.es.js";
import { c as Ma } from "./storybook-chroma-b564050a.es.js";
import { _ as mr } from "./storybook-lodash-c15d8e1c.es.js";
import { t as Vh, m as Cd, f as jh, d as yu, a as gu, b as vu, n as hp, o as lg, p as mp, c as Uh, e as Kh } from "./storybook-year-24bd1dc7.es.js";
import { a as ot } from "./storybook-Icon-b09f76c0.es.js";
import { a as An, b as Ln, c as Pn, d as Rn, A as Ri, D as sg } from "./storybook-DataTransform-1390427f.es.js";
import { C as ug, V as cg, a as yp } from "./storybook-footnoteSymbols-047b77bc.es.js";
import { S as Lt, T as et, C as ct, D as dg } from "./storybook-DataTableEditor-72372c95.es.js";
import { T as ye } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as za } from "./storybook-InputSelect-20478396.es.js";
import { S as Yh } from "./storybook-icon-check-0ef17e76.es.js";
import { A as xu } from "./storybook-Accordion-dbc41a5b.es.js";
import { u as fg, p as pg, s as hg, a as mg } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as gp } from "./storybook-numberFromString-24623c03.es.js";
import { c as vp } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Xh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xp(e) {
  let t = e, n = e;
  e.length === 1 && (t = (d, f) => e(d) - f, n = yg(e));
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
function yg(e) {
  return (t, n) => Xh(e(t), n);
}
function* gg(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function vg(e, t) {
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
function xg(e, t) {
  const n = vg(e, t);
  return n && Math.sqrt(n);
}
function ns(e, t) {
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
function rs(e, t) {
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
function qh(e, t, n = 0, a = e.length - 1, i = Xh) {
  for (; a > n; ) {
    if (a - n > 600) {
      const u = a - n + 1, m = t - n + 1, y = Math.log(u), x = 0.5 * Math.exp(2 * y / 3), b = 0.5 * Math.sqrt(y * x * (u - x) / u) * (m - u / 2 < 0 ? -1 : 1), A = Math.max(n, Math.floor(t - m * x / u + b)), w = Math.min(a, Math.floor(t + (u - m) * x / u + b));
      qh(e, t, A, w, i);
    }
    const l = e[t];
    let d = n, f = a;
    for (Zl(e, n, t), i(e[a], l) > 0 && Zl(e, n, a); d < f; ) {
      for (Zl(e, d, f), ++d, --f; i(e[d], l) < 0; )
        ++d;
      for (; i(e[f], l) > 0; )
        --f;
    }
    i(e[n], l) === 0 ? Zl(e, n, f) : (++f, Zl(e, f, a)), f <= t && (n = f + 1), t <= f && (a = f - 1);
  }
  return e;
}
function Zl(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function bg(e, t, n) {
  if (e = Float64Array.from(gg(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return rs(e);
    if (t >= 1)
      return ns(e);
    var a, i = (a - 1) * t, l = Math.floor(i), d = ns(qh(e, l).subarray(0, l + 1)), f = rs(e.subarray(l + 1));
    return d + (f - d) * (i - l);
  }
}
function Sg(e, t) {
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
function Eg(e, t) {
  return bg(e, 0.5, t);
}
class bp extends Map {
  constructor(t, n = Tg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, i] of t)
        this.set(a, i);
  }
  get(t) {
    return super.get(Sp(this, t));
  }
  has(t) {
    return super.has(Sp(this, t));
  }
  set(t, n) {
    return super.set(kg(this, t), n);
  }
  delete(t) {
    return super.delete(wg(this, t));
  }
}
function Sp({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function kg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function wg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Tg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Cg(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(i); ++a < i; )
    l[a] = e + a * n;
  return l;
}
const Ep = Symbol("implicit");
function kf() {
  var e = new bp(), t = [], n = [], a = Ep;
  function i(l) {
    let d = e.get(l);
    if (d === void 0) {
      if (a !== Ep)
        return a;
      e.set(l, d = t.push(l) - 1);
    }
    return n[d % n.length];
  }
  return i.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new bp();
    for (const d of l)
      e.has(d) || e.set(d, t.push(d) - 1);
    return i;
  }, i.range = function(l) {
    return arguments.length ? (n = Array.from(l), i) : n.slice();
  }, i.unknown = function(l) {
    return arguments.length ? (a = l, i) : a;
  }, i.copy = function() {
    return kf(t, n).unknown(a);
  }, bc.apply(i, arguments), i;
}
function wf() {
  var e = kf().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, l, d, f = !1, u = 0, m = 0, y = 0.5;
  delete e.unknown;
  function x() {
    var b = t().length, A = i < a, w = A ? i : a, O = A ? a : i;
    l = (O - w) / Math.max(1, b - u + m * 2), f && (l = Math.floor(l)), w += (O - w - l * (b - u)) * y, d = l * (1 - u), f && (w = Math.round(w), d = Math.round(d));
    var k = Cg(b).map(function(h) {
      return w + l * h;
    });
    return n(A ? k.reverse() : k);
  }
  return e.domain = function(b) {
    return arguments.length ? (t(b), x()) : t();
  }, e.range = function(b) {
    return arguments.length ? ([a, i] = b, a = +a, i = +i, x()) : [a, i];
  }, e.rangeRound = function(b) {
    return [a, i] = b, a = +a, i = +i, f = !0, x();
  }, e.bandwidth = function() {
    return d;
  }, e.step = function() {
    return l;
  }, e.round = function(b) {
    return arguments.length ? (f = !!b, x()) : f;
  }, e.padding = function(b) {
    return arguments.length ? (u = Math.min(1, m = +b), x()) : u;
  }, e.paddingInner = function(b) {
    return arguments.length ? (u = Math.min(1, b), x()) : u;
  }, e.paddingOuter = function(b) {
    return arguments.length ? (m = +b, x()) : m;
  }, e.align = function(b) {
    return arguments.length ? (y = Math.max(0, Math.min(1, b)), x()) : y;
  }, e.copy = function() {
    return wf(t(), [a, i]).round(f).paddingInner(u).paddingOuter(m).align(y);
  }, bc.apply(x(), arguments);
}
function Gh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Gh(t());
  }, e;
}
function Ag() {
  return Gh(wf.apply(null, arguments).paddingInner(1));
}
function Zh(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, i = e[n], l = e[a], d;
  return l < i && (d = n, n = a, a = d, d = i, i = l, l = d), e[n] = t.floor(i), e[a] = t.ceil(l), e;
}
function kp(e) {
  return Math.log(e);
}
function wp(e) {
  return Math.exp(e);
}
function Lg(e) {
  return -Math.log(-e);
}
function Pg(e) {
  return -Math.exp(-e);
}
function Rg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Dg(e) {
  return e === 10 ? Rg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function _g(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Tp(e) {
  return (t, n) => -e(-t, n);
}
function Ng(e) {
  const t = e(kp, wp), n = t.domain;
  let a = 10, i, l;
  function d() {
    return i = _g(a), l = Dg(a), n()[0] < 0 ? (i = Tp(i), l = Tp(l), e(Lg, Pg)) : e(kp, wp), t;
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
    let b = i(m), A = i(y), w, O;
    const k = f == null ? 10 : +f;
    let h = [];
    if (!(a % 1) && A - b < k) {
      if (b = Math.floor(b), A = Math.ceil(A), m > 0) {
        for (; b <= A; ++b)
          for (w = 1; w < a; ++w)
            if (O = b < 0 ? w / l(-b) : w * l(b), !(O < m)) {
              if (O > y)
                break;
              h.push(O);
            }
      } else
        for (; b <= A; ++b)
          for (w = a - 1; w >= 1; --w)
            if (O = b > 0 ? w / l(-b) : w * l(b), !(O < m)) {
              if (O > y)
                break;
              h.push(O);
            }
      h.length * 2 < k && (h = fp(m, y, k));
    } else
      h = fp(b, A, Math.min(A - b, k)).map(l);
    return x ? h.reverse() : h;
  }, t.tickFormat = (f, u) => {
    if (f == null && (f = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = tg(u)).precision == null && (u.trim = !0), u = ng(u)), f === 1 / 0)
      return u;
    const m = Math.max(1, a * f / t.ticks().length);
    return (y) => {
      let x = y / l(Math.round(i(y)));
      return x * a < a - 0.5 && (x *= a), x <= m ? u(y) : "";
    };
  }, t.nice = () => n(Zh(n(), {
    floor: (f) => l(Math.floor(i(f))),
    ceil: (f) => l(Math.ceil(i(f)))
  })), t;
}
function Qh() {
  const e = Ng(eg()).domain([1, 10]);
  return e.copy = () => Ih(e, Qh()).base(e.base()), bc.apply(e, arguments), e;
}
const ju = Vh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ju.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Vh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ju);
ju.range;
function Og(e, t, n, a, i, l) {
  const d = [
    [ts, 1, yu],
    [ts, 5, 5 * yu],
    [ts, 15, 15 * yu],
    [ts, 30, 30 * yu],
    [l, 1, gu],
    [l, 5, 5 * gu],
    [l, 15, 15 * gu],
    [l, 30, 30 * gu],
    [i, 1, vu],
    [i, 3, 3 * vu],
    [i, 6, 6 * vu],
    [i, 12, 12 * vu],
    [a, 1, hp],
    [a, 2, 2 * hp],
    [n, 1, lg],
    [t, 1, mp],
    [t, 3, 3 * mp],
    [e, 1, Cd]
  ];
  function f(m, y, x) {
    const b = y < m;
    b && ([m, y] = [y, m]);
    const A = x && typeof x.range == "function" ? x : u(m, y, x), w = A ? A.range(m, +y + 1) : [];
    return b ? w.reverse() : w;
  }
  function u(m, y, x) {
    const b = Math.abs(y - m) / x, A = rg(([, , k]) => k).right(d, b);
    if (A === d.length)
      return e.every(pp(m / Cd, y / Cd, x));
    if (A === 0)
      return ju.every(Math.max(pp(m, y, x), 1));
    const [w, O] = d[b / d[A - 1][2] < d[A][2] / b ? A - 1 : A];
    return w.every(O);
  }
  return [f, u];
}
const [Fg, Mg] = Og(jh, Wh, Kh, Uh, Hh, Bh);
function zg(e) {
  return new Date(e);
}
function $g(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Jh(e, t, n, a, i, l, d, f, u, m) {
  var y = ag(), x = y.invert, b = y.domain, A = m(".%L"), w = m(":%S"), O = m("%I:%M"), k = m("%I %p"), h = m("%a %d"), L = m("%b %d"), F = m("%B"), P = m("%Y");
  function T(_) {
    return (u(_) < _ ? A : f(_) < _ ? w : d(_) < _ ? O : l(_) < _ ? k : a(_) < _ ? i(_) < _ ? h : L : n(_) < _ ? F : P)(_);
  }
  return y.invert = function(_) {
    return new Date(x(_));
  }, y.domain = function(_) {
    return arguments.length ? b(Array.from(_, $g)) : b().map(zg);
  }, y.ticks = function(_) {
    var B = b();
    return e(B[0], B[B.length - 1], _ ?? 10);
  }, y.tickFormat = function(_, B) {
    return B == null ? T : m(B);
  }, y.nice = function(_) {
    var B = b();
    return (!_ || typeof _.range != "function") && (_ = t(B[0], B[B.length - 1], _ ?? 10)), _ ? b(Zh(B, _)) : y;
  }, y.copy = function() {
    return Ih(y, Jh(e, t, n, a, i, l, d, f, u, m));
  }, y;
}
function Ig() {
  return bc.apply(Jh(Fg, Mg, jh, Wh, Kh, Uh, Hh, Bh, ts, Zy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Bg = Ss("domain", "range", "reverse", "align", "padding", "round");
function Uu(e) {
  return Bg(wf(), e);
}
var Hg = Ss("domain", "range", "reverse", "align", "padding", "round");
function Wo(e) {
  return Hg(Ag(), e);
}
var Wg = Ss("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Vg(e) {
  return Wg(Ig(), e);
}
var jg = Ss("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Ku(e) {
  return jg(Qh(), e);
}
var Ug = Ss("domain", "range", "reverse", "unknown");
function Di(e) {
  return Ug(kf(), e);
}
function Kg(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Yg(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, l) {
    return t == null || l.length <= t || i % Math.round((l.length - 1) / t) === 0;
  });
}
function Xg(e) {
  return e == null ? void 0 : e.toString();
}
var _i = [], qg = function() {
  return _i.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Gg = function() {
  return _i.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Cp = "ResizeObserver loop completed with undelivered notifications.", Zg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Cp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Cp), window.dispatchEvent(e);
}, ys;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ys || (ys = {}));
var Ni = function(e) {
  return Object.freeze(e);
}, em = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Ni(this);
  }
  return e;
}(), tm = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ni(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, i = t.top, l = t.right, d = t.bottom, f = t.left, u = t.width, m = t.height;
    return { x: n, y: a, top: i, right: l, bottom: d, left: f, width: u, height: m };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Tf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, nm = function(e) {
  if (Tf(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var i = e, l = i.offsetWidth, d = i.offsetHeight;
  return !(l || d || e.getClientRects().length);
}, Ap = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Qg = function(e) {
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
}, as = typeof window < "u" ? window : {}, bu = /* @__PURE__ */ new WeakMap(), Lp = /auto|scroll/, Jg = /^tb|vertical/, ev = /msie|trident/i.test(as.navigator && as.navigator.userAgent), Wr = function(e) {
  return parseFloat(e || "0");
}, jo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new em((n ? t : e) || 0, (n ? e : t) || 0);
}, Pp = Ni({
  devicePixelContentBoxSize: jo(),
  borderBoxSize: jo(),
  contentBoxSize: jo(),
  contentRect: new tm(0, 0, 0, 0)
}), rm = function(e, t) {
  if (t === void 0 && (t = !1), bu.has(e) && !t)
    return bu.get(e);
  if (nm(e))
    return bu.set(e, Pp), Pp;
  var n = getComputedStyle(e), a = Tf(e) && e.ownerSVGElement && e.getBBox(), i = !ev && n.boxSizing === "border-box", l = Jg.test(n.writingMode || ""), d = !a && Lp.test(n.overflowY || ""), f = !a && Lp.test(n.overflowX || ""), u = a ? 0 : Wr(n.paddingTop), m = a ? 0 : Wr(n.paddingRight), y = a ? 0 : Wr(n.paddingBottom), x = a ? 0 : Wr(n.paddingLeft), b = a ? 0 : Wr(n.borderTopWidth), A = a ? 0 : Wr(n.borderRightWidth), w = a ? 0 : Wr(n.borderBottomWidth), O = a ? 0 : Wr(n.borderLeftWidth), k = x + m, h = u + y, L = O + A, F = b + w, P = f ? e.offsetHeight - F - e.clientHeight : 0, T = d ? e.offsetWidth - L - e.clientWidth : 0, _ = i ? k + L : 0, B = i ? h + F : 0, Y = a ? a.width : Wr(n.width) - _ - T, X = a ? a.height : Wr(n.height) - B - P, J = Y + k + T + L, re = X + h + P + F, H = Ni({
    devicePixelContentBoxSize: jo(Math.round(Y * devicePixelRatio), Math.round(X * devicePixelRatio), l),
    borderBoxSize: jo(J, re, l),
    contentBoxSize: jo(Y, X, l),
    contentRect: new tm(x, u, Y, X)
  });
  return bu.set(e, H), H;
}, am = function(e, t, n) {
  var a = rm(e, n), i = a.borderBoxSize, l = a.contentBoxSize, d = a.devicePixelContentBoxSize;
  switch (t) {
    case ys.DEVICE_PIXEL_CONTENT_BOX:
      return d;
    case ys.BORDER_BOX:
      return i;
    default:
      return l;
  }
}, im = function() {
  function e(t) {
    var n = rm(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Ni([n.borderBoxSize]), this.contentBoxSize = Ni([n.contentBoxSize]), this.devicePixelContentBoxSize = Ni([n.devicePixelContentBoxSize]);
  }
  return e;
}(), om = function(e) {
  if (nm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, tv = function() {
  var e = 1 / 0, t = [];
  _i.forEach(function(d) {
    if (d.activeTargets.length !== 0) {
      var f = [];
      d.activeTargets.forEach(function(m) {
        var y = new im(m.target), x = om(m.target);
        f.push(y), m.lastReportedSize = am(m.target, m.observedBox), x < e && (e = x);
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
}, Rp = function(e) {
  _i.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (om(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, nv = function() {
  var e = 0;
  for (Rp(e); qg(); )
    e = tv(), Rp(e);
  return Gg() && Zg(), e > 0;
}, Ad, lm = [], rv = function() {
  return lm.splice(0).forEach(function(e) {
    return e();
  });
}, av = function(e) {
  if (!Ad) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return rv();
    }).observe(n, a), Ad = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  lm.push(e), Ad();
}, iv = function(e) {
  av(function() {
    requestAnimationFrame(e);
  });
}, Mu = 0, ov = function() {
  return !!Mu;
}, lv = 250, sv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Dp = [
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
], _p = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ld = !1, uv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = lv), !Ld) {
      Ld = !0;
      var a = _p(t);
      iv(function() {
        var i = !1;
        try {
          i = nv();
        } finally {
          if (Ld = !1, t = a - _p(), !ov())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, sv);
    };
    document.body ? n() : as.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Dp.forEach(function(n) {
      return as.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Dp.forEach(function(n) {
      return as.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Yd = new uv(), Np = function(e) {
  !Mu && e > 0 && Yd.start(), Mu += e, !Mu && Yd.stop();
}, cv = function(e) {
  return !Tf(e) && !Qg(e) && getComputedStyle(e).display === "inline";
}, dv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ys.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = am(this.target, this.observedBox, !0);
    return cv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), fv = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Su = /* @__PURE__ */ new WeakMap(), Op = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Eu = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new fv(t, n);
    Su.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = Su.get(t), l = i.observationTargets.length === 0;
    Op(i.observationTargets, n) < 0 && (l && _i.push(i), i.observationTargets.push(new dv(n, a && a.box)), Np(1), Yd.schedule());
  }, e.unobserve = function(t, n) {
    var a = Su.get(t), i = Op(a.observationTargets, n), l = a.observationTargets.length === 1;
    i >= 0 && (l && _i.splice(_i.indexOf(a), 1), a.observationTargets.splice(i, 1), Np(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Su.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), pv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Eu.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ap(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Eu.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ap(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Eu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Eu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: pv,
  ResizeObserverEntry: im,
  ResizeObserverSize: em
}, Symbol.toStringTag, { value: "Module" })), mv = /* @__PURE__ */ Hy(hv);
var Fp = cm, Da = um(Iy), yv = um(By), $o = xv(se), gv = mv, vv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function sm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (sm = function(i) {
    return i ? n : t;
  })(e);
}
function xv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = sm(t);
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
function um(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yu() {
  return Yu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Yu.apply(this, arguments);
}
function bv(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Sv = [];
function cm(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, l = e.ignoreDimensions, d = l === void 0 ? Sv : l, f = e.parentSizeStyles, u = f === void 0 ? {
    width: "100%",
    height: "100%"
  } : f, m = e.enableDebounceLeadingCall, y = m === void 0 ? !0 : m, x = bv(e, vv), b = (0, $o.useRef)(null), A = (0, $o.useRef)(0), w = (0, $o.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), O = w[0], k = w[1], h = (0, $o.useMemo)(function() {
    var L = Array.isArray(d) ? d : [d];
    return (0, yv.default)(function(F) {
      k(function(P) {
        var T = Object.keys(P), _ = T.filter(function(Y) {
          return P[Y] !== F[Y];
        }), B = _.every(function(Y) {
          return L.includes(Y);
        });
        return B ? P : F;
      });
    }, i, {
      leading: y
    });
  }, [i, y, d]);
  return (0, $o.useEffect)(function() {
    var L = new gv.ResizeObserver(function(F) {
      F === void 0 && (F = []), F.forEach(function(P) {
        var T = P.contentRect, _ = T.left, B = T.top, Y = T.width, X = T.height;
        A.current = window.requestAnimationFrame(function() {
          h({
            width: Y,
            height: X,
            top: B,
            left: _
          });
        });
      });
    });
    return b.current && L.observe(b.current), function() {
      window.cancelAnimationFrame(A.current), L.disconnect(), h != null && h.cancel && h.cancel();
    };
  }, [h]), /* @__PURE__ */ $o.default.createElement("div", Yu({
    style: u,
    ref: b,
    className: t
  }, x), n(Yu({}, O, {
    ref: b.current,
    resize: h
  })));
}
cm.propTypes = {
  className: Da.default.string,
  debounceTime: Da.default.number,
  enableDebounceLeadingCall: Da.default.bool,
  ignoreDimensions: Da.default.oneOfType([Da.default.any, Da.default.arrayOf(Da.default.any)]),
  children: Da.default.func.isRequired
};
var Pd = /* @__PURE__ */ new Date(), Rd = /* @__PURE__ */ new Date();
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
    return Pd.setTime(+l), Rd.setTime(+d), e(Pd), e(Rd), Math.floor(n(Pd, Rd));
  }, i.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? i.filter(a ? function(d) {
      return a(d) % l === 0;
    } : function(d) {
      return i.count(0, d) % l === 0;
    }) : i;
  }), i;
}
const Ev = 1e3, Cf = Ev * 60, kv = Cf * 60, Af = kv * 24, dm = Af * 7;
var fm = ca(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Cf) / Af,
  (e) => e.getDate() - 1
);
const pm = fm;
fm.range;
function $i(e) {
  return ca(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Cf) / dm;
  });
}
var hm = $i(0), Xu = $i(1), wv = $i(2), Tv = $i(3), Yo = $i(4), Cv = $i(5), Av = $i(6);
hm.range;
Xu.range;
wv.range;
Tv.range;
Yo.range;
Cv.range;
Av.range;
var Lf = ca(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Lf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ca(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const gs = Lf;
Lf.range;
var mm = ca(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Af;
}, function(e) {
  return e.getUTCDate() - 1;
});
const ym = mm;
mm.range;
function Ii(e) {
  return ca(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / dm;
  });
}
var gm = Ii(0), qu = Ii(1), Lv = Ii(2), Pv = Ii(3), Xo = Ii(4), Rv = Ii(5), Dv = Ii(6);
gm.range;
qu.range;
Lv.range;
Pv.range;
Xo.range;
Rv.range;
Dv.range;
var Pf = ca(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Pf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ca(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const vs = Pf;
Pf.range;
function Dd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function _d(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ql(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function _v(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, l = e.days, d = e.shortDays, f = e.months, u = e.shortMonths, m = Jl(i), y = es(i), x = Jl(l), b = es(l), A = Jl(d), w = es(d), O = Jl(f), k = es(f), h = Jl(u), L = es(u), F = {
    a: ne,
    A: ee,
    b: G,
    B: Z,
    c: null,
    d: Hp,
    e: Hp,
    f: tx,
    g: dx,
    G: px,
    H: Qv,
    I: Jv,
    j: ex,
    L: vm,
    m: nx,
    M: rx,
    p: K,
    q: V,
    Q: jp,
    s: Up,
    S: ax,
    u: ix,
    U: ox,
    V: lx,
    w: sx,
    W: ux,
    x: null,
    X: null,
    y: cx,
    Y: fx,
    Z: hx,
    "%": Vp
  }, P = {
    a: we,
    A: Se,
    b: ce,
    B: Re,
    c: null,
    d: Wp,
    e: Wp,
    f: vx,
    g: Lx,
    G: Rx,
    H: mx,
    I: yx,
    j: gx,
    L: bm,
    m: xx,
    M: bx,
    p: je,
    q: Je,
    Q: jp,
    s: Up,
    S: Sx,
    u: Ex,
    U: kx,
    V: wx,
    w: Tx,
    W: Cx,
    x: null,
    X: null,
    y: Ax,
    Y: Px,
    Z: Dx,
    "%": Vp
  }, T = {
    a: J,
    A: re,
    b: H,
    B: ae,
    c: j,
    d: Ip,
    e: Ip,
    f: Xv,
    g: $p,
    G: zp,
    H: Bp,
    I: Bp,
    j: jv,
    L: Yv,
    m: Vv,
    M: Uv,
    p: X,
    q: Wv,
    Q: Gv,
    s: Zv,
    S: Kv,
    u: zv,
    U: $v,
    V: Iv,
    w: Mv,
    W: Bv,
    x: te,
    X: oe,
    y: $p,
    Y: zp,
    Z: Hv,
    "%": qv
  };
  F.x = _(n, F), F.X = _(a, F), F.c = _(t, F), P.x = _(n, P), P.X = _(a, P), P.c = _(t, P);
  function _(Oe, he) {
    return function(Fe) {
      var le = [], ue = -1, Ae = 0, $e = Oe.length, De, Ze, qe;
      for (Fe instanceof Date || (Fe = /* @__PURE__ */ new Date(+Fe)); ++ue < $e; )
        Oe.charCodeAt(ue) === 37 && (le.push(Oe.slice(Ae, ue)), (Ze = Mp[De = Oe.charAt(++ue)]) != null ? De = Oe.charAt(++ue) : Ze = De === "e" ? " " : "0", (qe = he[De]) && (De = qe(Fe, Ze)), le.push(De), Ae = ue + 1);
      return le.push(Oe.slice(Ae, ue)), le.join("");
    };
  }
  function B(Oe, he) {
    return function(Fe) {
      var le = Ql(1900, void 0, 1), ue = Y(le, Oe, Fe += "", 0), Ae, $e;
      if (ue != Fe.length)
        return null;
      if ("Q" in le)
        return new Date(le.Q);
      if ("s" in le)
        return new Date(le.s * 1e3 + ("L" in le ? le.L : 0));
      if (he && !("Z" in le) && (le.Z = 0), "p" in le && (le.H = le.H % 12 + le.p * 12), le.m === void 0 && (le.m = "q" in le ? le.q : 0), "V" in le) {
        if (le.V < 1 || le.V > 53)
          return null;
        "w" in le || (le.w = 1), "Z" in le ? (Ae = _d(Ql(le.y, 0, 1)), $e = Ae.getUTCDay(), Ae = $e > 4 || $e === 0 ? qu.ceil(Ae) : qu(Ae), Ae = ym.offset(Ae, (le.V - 1) * 7), le.y = Ae.getUTCFullYear(), le.m = Ae.getUTCMonth(), le.d = Ae.getUTCDate() + (le.w + 6) % 7) : (Ae = Dd(Ql(le.y, 0, 1)), $e = Ae.getDay(), Ae = $e > 4 || $e === 0 ? Xu.ceil(Ae) : Xu(Ae), Ae = pm.offset(Ae, (le.V - 1) * 7), le.y = Ae.getFullYear(), le.m = Ae.getMonth(), le.d = Ae.getDate() + (le.w + 6) % 7);
      } else
        ("W" in le || "U" in le) && ("w" in le || (le.w = "u" in le ? le.u % 7 : "W" in le ? 1 : 0), $e = "Z" in le ? _d(Ql(le.y, 0, 1)).getUTCDay() : Dd(Ql(le.y, 0, 1)).getDay(), le.m = 0, le.d = "W" in le ? (le.w + 6) % 7 + le.W * 7 - ($e + 5) % 7 : le.w + le.U * 7 - ($e + 6) % 7);
      return "Z" in le ? (le.H += le.Z / 100 | 0, le.M += le.Z % 100, _d(le)) : Dd(le);
    };
  }
  function Y(Oe, he, Fe, le) {
    for (var ue = 0, Ae = he.length, $e = Fe.length, De, Ze; ue < Ae; ) {
      if (le >= $e)
        return -1;
      if (De = he.charCodeAt(ue++), De === 37) {
        if (De = he.charAt(ue++), Ze = T[De in Mp ? he.charAt(ue++) : De], !Ze || (le = Ze(Oe, Fe, le)) < 0)
          return -1;
      } else if (De != Fe.charCodeAt(le++))
        return -1;
    }
    return le;
  }
  function X(Oe, he, Fe) {
    var le = m.exec(he.slice(Fe));
    return le ? (Oe.p = y.get(le[0].toLowerCase()), Fe + le[0].length) : -1;
  }
  function J(Oe, he, Fe) {
    var le = A.exec(he.slice(Fe));
    return le ? (Oe.w = w.get(le[0].toLowerCase()), Fe + le[0].length) : -1;
  }
  function re(Oe, he, Fe) {
    var le = x.exec(he.slice(Fe));
    return le ? (Oe.w = b.get(le[0].toLowerCase()), Fe + le[0].length) : -1;
  }
  function H(Oe, he, Fe) {
    var le = h.exec(he.slice(Fe));
    return le ? (Oe.m = L.get(le[0].toLowerCase()), Fe + le[0].length) : -1;
  }
  function ae(Oe, he, Fe) {
    var le = O.exec(he.slice(Fe));
    return le ? (Oe.m = k.get(le[0].toLowerCase()), Fe + le[0].length) : -1;
  }
  function j(Oe, he, Fe) {
    return Y(Oe, t, he, Fe);
  }
  function te(Oe, he, Fe) {
    return Y(Oe, n, he, Fe);
  }
  function oe(Oe, he, Fe) {
    return Y(Oe, a, he, Fe);
  }
  function ne(Oe) {
    return d[Oe.getDay()];
  }
  function ee(Oe) {
    return l[Oe.getDay()];
  }
  function G(Oe) {
    return u[Oe.getMonth()];
  }
  function Z(Oe) {
    return f[Oe.getMonth()];
  }
  function K(Oe) {
    return i[+(Oe.getHours() >= 12)];
  }
  function V(Oe) {
    return 1 + ~~(Oe.getMonth() / 3);
  }
  function we(Oe) {
    return d[Oe.getUTCDay()];
  }
  function Se(Oe) {
    return l[Oe.getUTCDay()];
  }
  function ce(Oe) {
    return u[Oe.getUTCMonth()];
  }
  function Re(Oe) {
    return f[Oe.getUTCMonth()];
  }
  function je(Oe) {
    return i[+(Oe.getUTCHours() >= 12)];
  }
  function Je(Oe) {
    return 1 + ~~(Oe.getUTCMonth() / 3);
  }
  return {
    format: function(Oe) {
      var he = _(Oe += "", F);
      return he.toString = function() {
        return Oe;
      }, he;
    },
    parse: function(Oe) {
      var he = B(Oe += "", !1);
      return he.toString = function() {
        return Oe;
      }, he;
    },
    utcFormat: function(Oe) {
      var he = _(Oe += "", P);
      return he.toString = function() {
        return Oe;
      }, he;
    },
    utcParse: function(Oe) {
      var he = B(Oe += "", !0);
      return he.toString = function() {
        return Oe;
      }, he;
    }
  };
}
var Mp = { "-": "", _: " ", 0: "0" }, In = /^\s*\d+/, Nv = /^%/, Ov = /[\\^$*+?|[\]().{}]/g;
function Yt(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", l = i.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + i : i);
}
function Fv(e) {
  return e.replace(Ov, "\\$&");
}
function Jl(e) {
  return new RegExp("^(?:" + e.map(Fv).join("|") + ")", "i");
}
function es(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Mv(e, t, n) {
  var a = In.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function zv(e, t, n) {
  var a = In.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function $v(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Iv(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Bv(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function zp(e, t, n) {
  var a = In.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function $p(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Hv(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Wv(e, t, n) {
  var a = In.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Vv(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Ip(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function jv(e, t, n) {
  var a = In.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Bp(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Uv(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Kv(e, t, n) {
  var a = In.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Yv(e, t, n) {
  var a = In.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Xv(e, t, n) {
  var a = In.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function qv(e, t, n) {
  var a = Nv.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Gv(e, t, n) {
  var a = In.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Zv(e, t, n) {
  var a = In.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Hp(e, t) {
  return Yt(e.getDate(), t, 2);
}
function Qv(e, t) {
  return Yt(e.getHours(), t, 2);
}
function Jv(e, t) {
  return Yt(e.getHours() % 12 || 12, t, 2);
}
function ex(e, t) {
  return Yt(1 + pm.count(gs(e), e), t, 3);
}
function vm(e, t) {
  return Yt(e.getMilliseconds(), t, 3);
}
function tx(e, t) {
  return vm(e, t) + "000";
}
function nx(e, t) {
  return Yt(e.getMonth() + 1, t, 2);
}
function rx(e, t) {
  return Yt(e.getMinutes(), t, 2);
}
function ax(e, t) {
  return Yt(e.getSeconds(), t, 2);
}
function ix(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ox(e, t) {
  return Yt(hm.count(gs(e) - 1, e), t, 2);
}
function xm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Yo(e) : Yo.ceil(e);
}
function lx(e, t) {
  return e = xm(e), Yt(Yo.count(gs(e), e) + (gs(e).getDay() === 4), t, 2);
}
function sx(e) {
  return e.getDay();
}
function ux(e, t) {
  return Yt(Xu.count(gs(e) - 1, e), t, 2);
}
function cx(e, t) {
  return Yt(e.getFullYear() % 100, t, 2);
}
function dx(e, t) {
  return e = xm(e), Yt(e.getFullYear() % 100, t, 2);
}
function fx(e, t) {
  return Yt(e.getFullYear() % 1e4, t, 4);
}
function px(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Yo(e) : Yo.ceil(e), Yt(e.getFullYear() % 1e4, t, 4);
}
function hx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Yt(t / 60 | 0, "0", 2) + Yt(t % 60, "0", 2);
}
function Wp(e, t) {
  return Yt(e.getUTCDate(), t, 2);
}
function mx(e, t) {
  return Yt(e.getUTCHours(), t, 2);
}
function yx(e, t) {
  return Yt(e.getUTCHours() % 12 || 12, t, 2);
}
function gx(e, t) {
  return Yt(1 + ym.count(vs(e), e), t, 3);
}
function bm(e, t) {
  return Yt(e.getUTCMilliseconds(), t, 3);
}
function vx(e, t) {
  return bm(e, t) + "000";
}
function xx(e, t) {
  return Yt(e.getUTCMonth() + 1, t, 2);
}
function bx(e, t) {
  return Yt(e.getUTCMinutes(), t, 2);
}
function Sx(e, t) {
  return Yt(e.getUTCSeconds(), t, 2);
}
function Ex(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function kx(e, t) {
  return Yt(gm.count(vs(e) - 1, e), t, 2);
}
function Sm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Xo(e) : Xo.ceil(e);
}
function wx(e, t) {
  return e = Sm(e), Yt(Xo.count(vs(e), e) + (vs(e).getUTCDay() === 4), t, 2);
}
function Tx(e) {
  return e.getUTCDay();
}
function Cx(e, t) {
  return Yt(qu.count(vs(e) - 1, e), t, 2);
}
function Ax(e, t) {
  return Yt(e.getUTCFullYear() % 100, t, 2);
}
function Lx(e, t) {
  return e = Sm(e), Yt(e.getUTCFullYear() % 100, t, 2);
}
function Px(e, t) {
  return Yt(e.getUTCFullYear() % 1e4, t, 4);
}
function Rx(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Xo(e) : Xo.ceil(e), Yt(e.getUTCFullYear() % 1e4, t, 4);
}
function Dx() {
  return "+0000";
}
function Vp() {
  return "%";
}
function jp(e) {
  return +e;
}
function Up(e) {
  return Math.floor(+e / 1e3);
}
var Io, Xd, Em;
_x({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function _x(e) {
  return Io = _v(e), Xd = Io.format, Em = Io.parse, Io.utcFormat, Io.utcParse, Io;
}
const xt = se.createContext({}), Ht = {
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
    if (Ht.str(e) || Ht.num(e))
      return e === t;
    if (Ht.obj(e) && Ht.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Ht.und(n) ? e === t : !0;
  }
};
function Nx(e, t) {
  return t === void 0 && (t = !0), (n) => (Ht.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const l = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[l] = e(l), a;
  }, e);
}
function km() {
  const e = se.useState(!1), t = e[1];
  return se.useCallback(() => t((a) => !a), []);
}
function wi(e, t) {
  return Ht.und(e) || Ht.nul(e) ? t : e;
}
function Vo(e) {
  return Ht.und(e) ? [] : Ht.arr(e) ? e : [e];
}
function Rr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Ht.fun(e) ? e(...n) : e;
}
function Ox(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Kr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Nd(e) {
  const t = Ox(e);
  if (Ht.und(t))
    return fn({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, i) => Ht.und(t[i]) ? fn({}, a, {
    [i]: e[i]
  }) : a, {});
  return fn({
    to: t
  }, n);
}
function Fx(e, t) {
  return t && (Ht.fun(t) ? t(e) : Ht.obj(t) && (t.current = e)), e;
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
class qd extends Dr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Dr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Dr && t.removeChild(this));
  }
}
class wm extends Dr {
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
let Rf;
function Mx(e, t) {
  Rf = {
    fn: e,
    transform: t
  };
}
let Tm;
function zx(e) {
  Tm = e;
}
let Cm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Gu;
function $x(e) {
  Gu = e;
}
let Am = () => Date.now(), Ix = (e) => e.current, Lm;
function Bx(e) {
  Lm = e;
}
class Hx extends wm {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? fn({}, t, {
      style: Lm(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Wx = (e) => Ht.fun(e) && !(e.prototype instanceof r.Component), Vx = (e) => se.forwardRef((n, a) => {
  const i = km(), l = se.useRef(!0), d = se.useRef(null), f = se.useRef(null), u = se.useCallback((b) => {
    const A = d.current, w = () => {
      let O = !1;
      f.current && (O = Rf.fn(f.current, d.current.getAnimatedValue())), (!f.current || O === !1) && i();
    };
    d.current = new Hx(b, w), A && A.detach();
  }, []);
  se.useEffect(() => () => {
    l.current = !1, d.current && d.current.detach();
  }, []), se.useImperativeHandle(a, () => Ix(f)), u(n);
  const m = d.current.getValue();
  m.scrollTop, m.scrollLeft;
  const y = Kr(m, ["scrollTop", "scrollLeft"]), x = Wx(e) ? void 0 : (b) => f.current = Fx(b, a);
  return r.createElement(e, fn({}, y, {
    ref: x
  }));
});
let is = !1;
const Oi = /* @__PURE__ */ new Set(), Pm = () => {
  if (!is)
    return !1;
  let e = Am();
  for (let t of Oi) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let i = t.configs[a], l, d;
      for (let f = 0; f < i.animatedValues.length; f++) {
        let u = i.animatedValues[f];
        if (u.done)
          continue;
        let m = i.fromValues[f], y = i.toValues[f], x = u.lastPosition, b = y instanceof Dr, A = Array.isArray(i.initialVelocity) ? i.initialVelocity[f] : i.initialVelocity;
        if (b && (y = y.getValue()), i.immediate) {
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
          x = m + A / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - u.startTime))), l = Math.abs(u.lastPosition - x) < 0.1, l && (y = x);
        else {
          d = u.lastTime !== void 0 ? u.lastTime : e, A = u.lastVelocity !== void 0 ? u.lastVelocity : i.initialVelocity, e > d + 64 && (d = e);
          let w = Math.floor(e - d);
          for (let L = 0; L < w; ++L) {
            let F = -i.tension * (x - y), P = -i.friction * A, T = (F + P) / i.mass;
            A = A + T * 1 / 1e3, x = x + A * 1 / 1e3;
          }
          let O = i.clamp && i.tension !== 0 ? m < y ? x > y : x < y : !1, k = Math.abs(A) <= i.precision, h = i.tension !== 0 ? Math.abs(y - x) <= i.precision : !0;
          l = O || k && h, u.lastVelocity = A, u.lastTime = e;
        }
        b && !i.toValues[f].done && (l = !1), l ? (u.value !== y && (x = y), u.done = !0) : n = !0, u.setValue(x), u.lastPosition = x;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (Oi.delete(t), t.stop(!0));
  }
  return Oi.size ? Cm(Pm) : is = !1, is;
}, jx = (e) => {
  Oi.has(e) || Oi.add(e), is || (is = !0, Cm(Pm));
}, Ux = (e) => {
  Oi.has(e) && Oi.delete(e);
};
function Zu(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Zu({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Gu && typeof e.output[0] == "string")
    return Gu(e);
  const a = e, i = a.output, l = a.range || [0, 1], d = a.extrapolateLeft || a.extrapolate || "extend", f = a.extrapolateRight || a.extrapolate || "extend", u = a.easing || ((m) => m);
  return (m) => {
    const y = Yx(m, l);
    return Kx(m, l[y], l[y + 1], i[y], i[y + 1], u, d, f, a.map);
  };
}
function Kx(e, t, n, a, i, l, d, f, u) {
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
function Yx(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class qo extends qd {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof qd && !(t instanceof qo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Zu(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = Zu(t, n, a);
  }
  interpolate(t, n, a) {
    return new qo(this, t, n, a);
  }
}
const Xx = (e, t, n) => e && new qo(e, t, n);
function Rm(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Rm(n, t));
}
class Gd extends Dr {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, i) {
      i === void 0 && (i = !0), n.value = a, i && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Rm(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, a) {
    return new qo(this, t, n, a);
  }
}
class qx extends qd {
  constructor(t) {
    super(), this.payload = t.map((n) => new Gd(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, i) => this.payload[i].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new qo(this, t, n);
  }
}
let Gx = 0;
class Zx {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Gx++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Nd(t), a = n.delay, i = a === void 0 ? 0 : a, l = n.to, d = Kr(n, ["delay", "to"]);
    if (Ht.arr(l) || Ht.fun(l))
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
        }, d), b = f[x.delay] && f[x.delay].to;
        f[x.delay] = fn({}, f[x.delay], x, {
          to: fn({}, b, x.to)
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
        Ht.obj(d) && (this.merged = fn({}, d, this.merged)), Ht.obj(u) && (this.merged = fn({}, this.merged, u));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((i, l) => {
        let d = i.delay, f = Kr(i, ["delay"]);
        const u = (y) => {
          l === a.length - 1 && n === this.guid && y && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let m = Ht.arr(f.to) || Ht.fun(f.to);
        d ? setTimeout(() => {
          n === this.guid && (m ? this.runAsync(f, u) : this.diff(f).start(u));
        }, d) : m ? this.runAsync(f, u) : this.diff(f).start(u);
      });
    } else
      Ht.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), jx(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Ux(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = Kr(t, ["delay"]);
    const l = this.local;
    let d = Promise.resolve(void 0);
    if (Ht.arr(i.to))
      for (let f = 0; f < i.to.length; f++) {
        const u = f, m = fn({}, i, Nd(i.to[u]));
        Ht.arr(m.config) && (m.config = m.config[u]), d = d.then(() => {
          if (l === this.guid)
            return new Promise((y) => this.diff(m).start(y));
        });
      }
    else if (Ht.fun(i.to)) {
      let f = 0, u;
      d = d.then(() => i.to(
        // next(props)
        (m) => {
          const y = fn({}, i, Nd(m));
          if (Ht.arr(y.config) && (y.config = y.config[f]), f++, l === this.guid)
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
    let n = this.props, a = n.from, i = a === void 0 ? {} : a, l = n.to, d = l === void 0 ? {} : l, f = n.config, u = f === void 0 ? {} : f, m = n.reverse, y = n.attach, x = n.reset, b = n.immediate;
    if (m) {
      var A = [d, i];
      i = A[0], d = A[1];
    }
    this.merged = fn({}, i, this.merged, d), this.hasChanged = !1;
    let w = y && y(this);
    if (this.animations = Object.entries(this.merged).reduce((O, k) => {
      let h = k[0], L = k[1], F = O[h] || {};
      const P = Ht.num(L), T = Ht.str(L) && !L.startsWith("#") && !/\d/.test(L) && !Tm[L], _ = Ht.arr(L), B = !P && !_ && !T;
      let Y = Ht.und(i[h]) ? L : i[h], X = P || _ || T ? L : 1, J = Rr(u, h);
      w && (X = w.animations[h].parent);
      let re = F.parent, H = F.interpolation, ae = Vo(w ? X.getPayload() : X), j, te = L;
      B && (te = Gu({
        range: [0, 1],
        output: [L, L]
      })(1));
      let oe = H && H.getValue();
      const ee = !Ht.und(re) && F.animatedValues.some((V) => !V.done), G = !Ht.equ(te, oe), Z = !Ht.equ(te, F.previous), K = !Ht.equ(J, F.config);
      if (x || Z && G || K) {
        if (P || T)
          re = H = F.parent || new Gd(Y);
        else if (_)
          re = H = F.parent || new qx(Y);
        else if (B) {
          let V = F.interpolation && F.interpolation.calc(F.parent.value);
          V = V !== void 0 && !x ? V : Y, F.parent ? (re = F.parent, re.setValue(0, !1)) : re = new Gd(0);
          const we = {
            output: [V, L]
          };
          F.interpolation ? (H = F.interpolation, F.interpolation.updateConfig(we)) : H = re.interpolate(we);
        }
        return ae = Vo(w ? X.getPayload() : X), j = Vo(re.getPayload()), x && !B && re.setValue(Y, !1), this.hasChanged = !0, j.forEach((V) => {
          V.startPosition = V.value, V.lastPosition = V.value, V.lastVelocity = ee ? V.lastVelocity : void 0, V.lastTime = ee ? V.lastTime : void 0, V.startTime = Am(), V.done = !1, V.animatedStyles.clear();
        }), Rr(b, h) && re.setValue(B ? X : L, !1), fn({}, O, {
          [h]: fn({}, F, {
            name: h,
            parent: re,
            interpolation: H,
            animatedValues: j,
            toValues: ae,
            previous: te,
            config: J,
            fromValues: Vo(re.getValue()),
            immediate: Rr(b, h),
            initialVelocity: wi(J.velocity, 0),
            clamp: wi(J.clamp, !1),
            precision: wi(J.precision, 0.01),
            tension: wi(J.tension, 170),
            friction: wi(J.friction, 26),
            mass: wi(J.mass, 1),
            duration: J.duration,
            easing: wi(J.easing, (V) => V),
            decay: J.decay
          })
        });
      } else
        return G ? O : (B && (re.setValue(1, !1), H.updateConfig({
          output: [te, te]
        })), re.done = !0, this.hasChanged = !0, fn({}, O, {
          [h]: fn({}, O[h], {
            previous: te
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let O in this.animations)
        this.interpolations[O] = this.animations[O].interpolation, this.values[O] = this.animations[O].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Qx = 0;
const zu = "enter", Od = "leave", Fd = "update", Jx = (e, t) => (typeof t == "function" ? e.map(t) : Vo(t)).map(String), Zd = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, i = Kr(e, ["items", "keys"]);
  return t = Vo(t !== void 0 ? t : null), fn({
    items: t,
    keys: Jx(t, a)
  }, i);
};
function eb(e, t, n) {
  const a = fn({
    items: e,
    keys: t || ((L) => L)
  }, n), i = Zd(a), l = i.lazy, d = l === void 0 ? !1 : l;
  i.unique;
  const f = i.reset, u = f === void 0 ? !1 : f;
  i.enter, i.leave, i.update;
  const m = i.onDestroyed;
  i.keys, i.items;
  const y = i.onFrame, x = i.onRest, b = i.onStart, A = i.ref, w = Kr(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), O = km(), k = se.useRef(!1), h = se.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !k.current && /* @__PURE__ */ new Map(),
    forceUpdate: O
  });
  return se.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(h.current.instances).map((L) => {
      let F = L[1];
      return new Promise((P) => F.start(P));
    })),
    stop: (L) => Array.from(h.current.instances).forEach((F) => F[1].stop(L)),
    get controllers() {
      return Array.from(h.current.instances).map((L) => L[1]);
    }
  })), h.current = tb(h.current, a), h.current.changed && h.current.transitions.forEach((L) => {
    const F = L.slot, P = L.from, T = L.to, _ = L.config, B = L.trail, Y = L.key, X = L.item;
    h.current.instances.has(Y) || h.current.instances.set(Y, new Zx());
    const J = h.current.instances.get(Y), re = fn({}, w, {
      to: T,
      from: P,
      config: _,
      ref: A,
      onRest: (H) => {
        h.current.mounted && (L.destroyed && (!A && !d && Kp(h, Y), m && m(X)), !Array.from(h.current.instances).some((te) => !te[1].idle) && (A || d) && h.current.deleted.length > 0 && Kp(h), x && x(X, F, H));
      },
      onStart: b && (() => b(X, F)),
      onFrame: y && ((H) => y(X, F, H)),
      delay: B,
      reset: u && F === zu
      // Update controller
    });
    J.update(re), h.current.paused || J.start();
  }), se.useEffect(() => (h.current.mounted = k.current = !0, () => {
    h.current.mounted = k.current = !1, Array.from(h.current.instances).map((L) => L[1].destroy()), h.current.instances.clear();
  }), []), h.current.transitions.map((L) => {
    let F = L.item, P = L.slot, T = L.key;
    return {
      item: F,
      key: T,
      state: P,
      props: h.current.instances.get(T).getValues()
    };
  });
}
function Kp(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const l = (d) => d.key !== i;
    (Ht.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function tb(e, t) {
  let n = e.first, a = e.prevProps, i = Kr(e, ["first", "prevProps"]), l = Zd(t), d = l.items, f = l.keys, u = l.initial, m = l.from, y = l.enter, x = l.leave, b = l.update, A = l.trail, w = A === void 0 ? 0 : A, O = l.unique, k = l.config, h = l.order, L = h === void 0 ? [zu, Od, Fd] : h, F = Zd(a), P = F.keys, T = F.items, _ = fn({}, i.current), B = [...i.deleted], Y = Object.keys(_), X = new Set(Y), J = new Set(f), re = f.filter((oe) => !X.has(oe)), H = i.transitions.filter((oe) => !oe.destroyed && !J.has(oe.originalKey)).map((oe) => oe.originalKey), ae = f.filter((oe) => X.has(oe)), j = -w;
  for (; L.length; )
    switch (L.shift()) {
      case zu: {
        re.forEach((ne, ee) => {
          O && B.find((V) => V.originalKey === ne) && (B = B.filter((V) => V.originalKey !== ne));
          const G = f.indexOf(ne), Z = d[G], K = n && u !== void 0 ? "initial" : zu;
          _[ne] = {
            slot: K,
            originalKey: ne,
            key: O ? String(ne) : Qx++,
            item: Z,
            trail: j = j + w,
            config: Rr(k, Z, K),
            from: Rr(n && u !== void 0 ? u || {} : m, Z),
            to: Rr(y, Z)
          };
        });
        break;
      }
      case Od: {
        H.forEach((ne) => {
          const ee = P.indexOf(ne), G = T[ee], Z = Od;
          B.unshift(fn({}, _[ne], {
            slot: Z,
            destroyed: !0,
            left: P[Math.max(0, ee - 1)],
            right: P[Math.min(P.length, ee + 1)],
            trail: j = j + w,
            config: Rr(k, G, Z),
            to: Rr(x, G)
          })), delete _[ne];
        });
        break;
      }
      case Fd: {
        ae.forEach((ne) => {
          const ee = f.indexOf(ne), G = d[ee], Z = Fd;
          _[ne] = fn({}, _[ne], {
            item: G,
            slot: Z,
            trail: j = j + w,
            config: Rr(k, G, Z),
            to: Rr(b, G)
          });
        });
        break;
      }
    }
  let te = f.map((oe) => _[oe]);
  return B.forEach((oe) => {
    let ne = oe.left;
    oe.right;
    let ee = Kr(oe, ["left", "right"]), G;
    (G = te.findIndex((Z) => Z.originalKey === ne)) !== -1 && (G += 1), G = Math.max(0, G), te = [...te.slice(0, G), ee, ...te.slice(G)];
  }), fn({}, i, {
    changed: re.length || H.length || ae.length,
    first: n && re.length === 0,
    transitions: te,
    current: _,
    deleted: B,
    prevProps: t
  });
}
class nb extends wm {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Dr) && (t = Rf.transform(t)), this.payload = t;
  }
}
const Qu = {
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
}, _r = "[-+]?\\d*\\.?\\d+", Ju = _r + "%";
function Sc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const rb = new RegExp("rgb" + Sc(_r, _r, _r)), ab = new RegExp("rgba" + Sc(_r, _r, _r, _r)), ib = new RegExp("hsl" + Sc(_r, Ju, Ju)), ob = new RegExp("hsla" + Sc(_r, Ju, Ju, _r)), lb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, sb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ub = /^#([0-9a-fA-F]{6})$/, cb = /^#([0-9a-fA-F]{8})$/;
function db(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ub.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Qu.hasOwnProperty(e) ? Qu[e] : (t = rb.exec(e)) ? (Bo(t[1]) << 24 | // r
  Bo(t[2]) << 16 | // g
  Bo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = ab.exec(e)) ? (Bo(t[1]) << 24 | // r
  Bo(t[2]) << 16 | // g
  Bo(t[3]) << 8 | // b
  qp(t[4])) >>> // a
  0 : (t = lb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = cb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = sb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = ib.exec(e)) ? (Yp(
    Xp(t[1]),
    // h
    ku(t[2]),
    // s
    ku(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = ob.exec(e)) ? (Yp(
    Xp(t[1]),
    // h
    ku(t[2]),
    // s
    ku(t[3])
    // l
  ) | qp(t[4])) >>> // a
  0 : null;
}
function Md(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Yp(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, l = Md(i, a, e + 1 / 3), d = Md(i, a, e), f = Md(i, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(d * 255) << 16 | Math.round(f * 255) << 8;
}
function Bo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Xp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function qp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ku(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Gp(e) {
  let t = db(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${l})`;
}
const wu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, fb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, pb = new RegExp(`(${Object.keys(Qu).join("|")})`, "g"), hb = (e) => {
  const t = e.output.map((i) => i.replace(fb, Gp)).map((i) => i.replace(pb, Gp)), n = t[0].match(wu).map(() => []);
  t.forEach((i) => {
    i.match(wu).forEach((l, d) => n[d].push(+l));
  });
  const a = t[0].match(wu).map((i, l) => Zu(fn({}, e, {
    output: n[l]
  })));
  return (i) => {
    let l = 0;
    return t[0].replace(wu, () => a[l++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (d, f, u, m, y) => `rgba(${Math.round(f)}, ${Math.round(u)}, ${Math.round(m)}, ${y})`);
  };
};
let os = {
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
const mb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), yb = ["Webkit", "Ms", "Moz", "O"];
os = Object.keys(os).reduce((e, t) => (yb.forEach((n) => e[mb(n, t)] = e[t]), e), os);
function gb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(os.hasOwnProperty(e) && os[e]) ? t + "px" : ("" + t).trim();
}
const Zp = {};
Bx((e) => new nb(e));
$x(hb);
zx(Qu);
Mx((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, l = t.children, d = t.scrollTop, f = t.scrollLeft, u = Kr(t, ["style", "children", "scrollTop", "scrollLeft"]), m = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    d !== void 0 && (e.scrollTop = d), f !== void 0 && (e.scrollLeft = f), l !== void 0 && (e.textContent = l);
    for (let y in i)
      if (i.hasOwnProperty(y)) {
        var n = y.indexOf("--") === 0, a = gb(y, i[y], n);
        y === "float" && (y = "cssFloat"), n ? e.style.setProperty(y, a) : e.style[y] = a;
      }
    for (let y in u) {
      const x = m ? y : Zp[y] || (Zp[y] = y.replace(/([A-Z])/g, (b) => "-" + b.toLowerCase()));
      typeof e.getAttribute(x) < "u" && e.setAttribute(x, u[y]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const vb = [
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
], xb = Nx(Vx, !1), Qp = xb(vb);
function bb(e) {
  return e.innerRadius;
}
function Sb(e) {
  return e.outerRadius;
}
function Eb(e) {
  return e.startAngle;
}
function kb(e) {
  return e.endAngle;
}
function wb(e) {
  return e && e.padAngle;
}
function Tb(e, t, n, a, i, l, d, f) {
  var u = n - e, m = a - t, y = d - i, x = f - l, b = x * u - y * m;
  if (!(b * b < Zn))
    return b = (y * (t - l) - x * (e - i)) / b, [e + b * u, t + b * m];
}
function Tu(e, t, n, a, i, l, d) {
  var f = e - n, u = t - a, m = (d ? l : -l) / Ho(f * f + u * u), y = m * u, x = -m * f, b = e + y, A = t + x, w = n + y, O = a + x, k = (b + w) / 2, h = (A + O) / 2, L = w - b, F = O - A, P = L * L + F * F, T = i - l, _ = b * O - w * A, B = (F < 0 ? -1 : 1) * Ho(jy(0, T * T * P - _ * _)), Y = (_ * F - L * B) / P, X = (-_ * L - F * B) / P, J = (_ * F + L * B) / P, re = (-_ * L + F * B) / P, H = Y - k, ae = X - h, j = J - k, te = re - h;
  return H * H + ae * ae > j * j + te * te && (Y = J, X = re), {
    cx: Y,
    cy: X,
    x01: -y,
    y01: -x,
    x11: Y * (i / T - 1),
    y11: X * (i / T - 1)
  };
}
function Cb() {
  var e = bb, t = Sb, n = jt(0), a = null, i = Eb, l = kb, d = wb, f = null;
  function u() {
    var m, y, x = +e.apply(this, arguments), b = +t.apply(this, arguments), A = i.apply(this, arguments) - ap, w = l.apply(this, arguments) - ap, O = ip(w - A), k = w > A;
    if (f || (f = m = xc()), b < x && (y = b, b = x, x = y), !(b > Zn))
      f.moveTo(0, 0);
    else if (O > Fu - Zn)
      f.moveTo(b * Ei(A), b * Hr(A)), f.arc(0, 0, b, A, w, !k), x > Zn && (f.moveTo(x * Ei(w), x * Hr(w)), f.arc(0, 0, x, w, A, k));
    else {
      var h = A, L = w, F = A, P = w, T = O, _ = O, B = d.apply(this, arguments) / 2, Y = B > Zn && (a ? +a.apply(this, arguments) : Ho(x * x + b * b)), X = wd(ip(b - x) / 2, +n.apply(this, arguments)), J = X, re = X, H, ae;
      if (Y > Zn) {
        var j = op(Y / x * Hr(B)), te = op(Y / b * Hr(B));
        (T -= j * 2) > Zn ? (j *= k ? 1 : -1, F += j, P -= j) : (T = 0, F = P = (A + w) / 2), (_ -= te * 2) > Zn ? (te *= k ? 1 : -1, h += te, L -= te) : (_ = 0, h = L = (A + w) / 2);
      }
      var oe = b * Ei(h), ne = b * Hr(h), ee = x * Ei(P), G = x * Hr(P);
      if (X > Zn) {
        var Z = b * Ei(L), K = b * Hr(L), V = x * Ei(F), we = x * Hr(F), Se;
        if (O < rp && (Se = Tb(oe, ne, V, we, Z, K, ee, G))) {
          var ce = oe - Se[0], Re = ne - Se[1], je = Z - Se[0], Je = K - Se[1], Oe = 1 / Hr(Vy((ce * je + Re * Je) / (Ho(ce * ce + Re * Re) * Ho(je * je + Je * Je))) / 2), he = Ho(Se[0] * Se[0] + Se[1] * Se[1]);
          J = wd(X, (x - he) / (Oe - 1)), re = wd(X, (b - he) / (Oe + 1));
        }
      }
      _ > Zn ? re > Zn ? (H = Tu(V, we, oe, ne, b, re, k), ae = Tu(Z, K, ee, G, b, re, k), f.moveTo(H.cx + H.x01, H.cy + H.y01), re < X ? f.arc(H.cx, H.cy, re, Gn(H.y01, H.x01), Gn(ae.y01, ae.x01), !k) : (f.arc(H.cx, H.cy, re, Gn(H.y01, H.x01), Gn(H.y11, H.x11), !k), f.arc(0, 0, b, Gn(H.cy + H.y11, H.cx + H.x11), Gn(ae.cy + ae.y11, ae.cx + ae.x11), !k), f.arc(ae.cx, ae.cy, re, Gn(ae.y11, ae.x11), Gn(ae.y01, ae.x01), !k))) : (f.moveTo(oe, ne), f.arc(0, 0, b, h, L, !k)) : f.moveTo(oe, ne), !(x > Zn) || !(T > Zn) ? f.lineTo(ee, G) : J > Zn ? (H = Tu(ee, G, Z, K, x, -J, k), ae = Tu(oe, ne, V, we, x, -J, k), f.lineTo(H.cx + H.x01, H.cy + H.y01), J < X ? f.arc(H.cx, H.cy, J, Gn(H.y01, H.x01), Gn(ae.y01, ae.x01), !k) : (f.arc(H.cx, H.cy, J, Gn(H.y01, H.x01), Gn(H.y11, H.x11), !k), f.arc(0, 0, x, Gn(H.cy + H.y11, H.cx + H.x11), Gn(ae.cy + ae.y11, ae.cx + ae.x11), k), f.arc(ae.cx, ae.cy, J, Gn(ae.y11, ae.x11), Gn(ae.y01, ae.x01), !k))) : f.arc(0, 0, x, P, F, k);
    }
    if (f.closePath(), m)
      return f = null, m + "" || null;
  }
  return u.centroid = function() {
    var m = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+i.apply(this, arguments) + +l.apply(this, arguments)) / 2 - rp / 2;
    return [Ei(y) * m, Hr(y) * m];
  }, u.innerRadius = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : jt(+m), u) : e;
  }, u.outerRadius = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : jt(+m), u) : t;
  }, u.cornerRadius = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : jt(+m), u) : n;
  }, u.padRadius = function(m) {
    return arguments.length ? (a = m == null ? null : typeof m == "function" ? m : jt(+m), u) : a;
  }, u.startAngle = function(m) {
    return arguments.length ? (i = typeof m == "function" ? m : jt(+m), u) : i;
  }, u.endAngle = function(m) {
    return arguments.length ? (l = typeof m == "function" ? m : jt(+m), u) : l;
  }, u.padAngle = function(m) {
    return arguments.length ? (d = typeof m == "function" ? m : jt(+m), u) : d;
  }, u.context = function(m) {
    return arguments.length ? (f = m ?? null, u) : f;
  }, u;
}
function Dm(e) {
  this._context = e;
}
Dm.prototype = {
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
function Ec(e) {
  return new Dm(e);
}
function Df(e) {
  return e[0];
}
function _f(e) {
  return e[1];
}
function _m() {
  var e = Df, t = _f, n = jt(!0), a = null, i = Ec, l = null;
  function d(f) {
    var u, m = f.length, y, x = !1, b;
    for (a == null && (l = i(b = xc())), u = 0; u <= m; ++u)
      !(u < m && n(y = f[u], u, f)) === x && ((x = !x) ? l.lineStart() : l.lineEnd()), x && l.point(+e(y, u, f), +t(y, u, f));
    if (b)
      return l = null, b + "" || null;
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : jt(+f), d) : e;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : jt(+f), d) : t;
  }, d.defined = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : jt(!!f), d) : n;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, a != null && (l = i(a)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? a = l = null : l = i(a = f), d) : a;
  }, d;
}
function Ab() {
  var e = Df, t = null, n = jt(0), a = _f, i = jt(!0), l = null, d = Ec, f = null;
  function u(y) {
    var x, b, A, w = y.length, O, k = !1, h, L = new Array(w), F = new Array(w);
    for (l == null && (f = d(h = xc())), x = 0; x <= w; ++x) {
      if (!(x < w && i(O = y[x], x, y)) === k)
        if (k = !k)
          b = x, f.areaStart(), f.lineStart();
        else {
          for (f.lineEnd(), f.lineStart(), A = x - 1; A >= b; --A)
            f.point(L[A], F[A]);
          f.lineEnd(), f.areaEnd();
        }
      k && (L[x] = +e(O, x, y), F[x] = +n(O, x, y), f.point(t ? +t(O, x, y) : L[x], a ? +a(O, x, y) : F[x]));
    }
    if (h)
      return f = null, h + "" || null;
  }
  function m() {
    return _m().defined(i).curve(d).context(l);
  }
  return u.x = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : jt(+y), t = null, u) : e;
  }, u.x0 = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : jt(+y), u) : e;
  }, u.x1 = function(y) {
    return arguments.length ? (t = y == null ? null : typeof y == "function" ? y : jt(+y), u) : t;
  }, u.y = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : jt(+y), a = null, u) : n;
  }, u.y0 = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : jt(+y), u) : n;
  }, u.y1 = function(y) {
    return arguments.length ? (a = y == null ? null : typeof y == "function" ? y : jt(+y), u) : a;
  }, u.lineX0 = u.lineY0 = function() {
    return m().x(e).y(n);
  }, u.lineY1 = function() {
    return m().x(e).y(a);
  }, u.lineX1 = function() {
    return m().x(t).y(n);
  }, u.defined = function(y) {
    return arguments.length ? (i = typeof y == "function" ? y : jt(!!y), u) : i;
  }, u.curve = function(y) {
    return arguments.length ? (d = y, l != null && (f = d(l)), u) : d;
  }, u.context = function(y) {
    return arguments.length ? (y == null ? l = f = null : f = d(l = y), u) : l;
  }, u;
}
function Lb(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Pb(e) {
  return e;
}
function Rb() {
  var e = Pb, t = Lb, n = null, a = jt(0), i = jt(Fu), l = jt(0);
  function d(f) {
    var u, m = f.length, y, x, b = 0, A = new Array(m), w = new Array(m), O = +a.apply(this, arguments), k = Math.min(Fu, Math.max(-Fu, i.apply(this, arguments) - O)), h, L = Math.min(Math.abs(k) / m, l.apply(this, arguments)), F = L * (k < 0 ? -1 : 1), P;
    for (u = 0; u < m; ++u)
      (P = w[A[u] = u] = +e(f[u], u, f)) > 0 && (b += P);
    for (t != null ? A.sort(function(T, _) {
      return t(w[T], w[_]);
    }) : n != null && A.sort(function(T, _) {
      return n(f[T], f[_]);
    }), u = 0, x = b ? (k - m * F) / b : 0; u < m; ++u, O = h)
      y = A[u], P = w[y], h = O + (P > 0 ? P * x : 0) + F, w[y] = {
        data: f[y],
        index: u,
        value: P,
        startAngle: O,
        endAngle: h,
        padAngle: L
      };
    return w;
  }
  return d.value = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : jt(+f), d) : e;
  }, d.sortValues = function(f) {
    return arguments.length ? (t = f, n = null, d) : t;
  }, d.sort = function(f) {
    return arguments.length ? (n = f, t = null, d) : n;
  }, d.startAngle = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : jt(+f), d) : a;
  }, d.endAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : jt(+f), d) : i;
  }, d.padAngle = function(f) {
    return arguments.length ? (l = typeof f == "function" ? f : jt(+f), d) : l;
  }, d;
}
var Qd = Array.prototype.slice;
function Db(e) {
  return e.source;
}
function _b(e) {
  return e.target;
}
function Nb(e) {
  var t = Db, n = _b, a = Df, i = _f, l = null;
  function d() {
    var f, u = Qd.call(arguments), m = t.apply(this, u), y = n.apply(this, u);
    if (l || (l = f = xc()), e(l, +a.apply(this, (u[0] = m, u)), +i.apply(this, u), +a.apply(this, (u[0] = y, u)), +i.apply(this, u)), f)
      return l = null, f + "" || null;
  }
  return d.source = function(f) {
    return arguments.length ? (t = f, d) : t;
  }, d.target = function(f) {
    return arguments.length ? (n = f, d) : n;
  }, d.x = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : jt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : jt(+f), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (l = f ?? null, d) : l;
  }, d;
}
function Ob(e, t, n, a, i) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + a) / 2, n, t, i, a, i);
}
function Fb() {
  return Nb(Ob);
}
function $a() {
}
function ec(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function kc(e) {
  this._context = e;
}
kc.prototype = {
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
        ec(this, this._x1, this._y1);
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Mb(e) {
  return new kc(e);
}
function Nm(e) {
  this._context = e;
}
Nm.prototype = {
  areaStart: $a,
  areaEnd: $a,
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function zb(e) {
  return new Nm(e);
}
function Om(e) {
  this._context = e;
}
Om.prototype = {
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function $b(e) {
  return new Om(e);
}
function Fm(e, t) {
  this._basis = new kc(e), this._beta = t;
}
Fm.prototype = {
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
const Ib = function e(t) {
  function n(a) {
    return t === 1 ? new kc(a) : new Fm(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function tc(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function Nf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Nf.prototype = {
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
        tc(this, this._x1, this._y1);
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Bb = function e(t) {
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
  areaStart: $a,
  areaEnd: $a,
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hb = function e(t) {
  function n(a) {
    return new Of(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Wb = function e(t) {
  function n(a) {
    return new Ff(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Mf(e, t, n) {
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
        Mf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Vb = function e(t) {
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
  areaStart: $a,
  areaEnd: $a,
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
        Mf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const jb = function e(t) {
  function n(a) {
    return t ? new zm(a, t) : new Of(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function $m(e, t) {
  this._context = e, this._alpha = t;
}
$m.prototype = {
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
        Mf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ub = function e(t) {
  function n(a) {
    return t ? new $m(a, t) : new Ff(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Im(e) {
  this._context = e;
}
Im.prototype = {
  areaStart: $a,
  areaEnd: $a,
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
  return new Im(e);
}
function Jp(e) {
  return e < 0 ? -1 : 1;
}
function eh(e, t, n) {
  var a = e._x1 - e._x0, i = t - e._x1, l = (e._y1 - e._y0) / (a || i < 0 && -0), d = (n - e._y1) / (i || a < 0 && -0), f = (l * i + d * a) / (a + i);
  return (Jp(l) + Jp(d)) * Math.min(Math.abs(l), Math.abs(d), 0.5 * Math.abs(f)) || 0;
}
function th(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function zd(e, t, n) {
  var a = e._x0, i = e._y0, l = e._x1, d = e._y1, f = (l - a) / 3;
  e._context.bezierCurveTo(a + f, i + f * t, l - f, d - f * n, l, d);
}
function nc(e) {
  this._context = e;
}
nc.prototype = {
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
        zd(this, this._t0, th(this, this._t0));
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
          this._point = 3, zd(this, th(this, n = eh(this, e, t)), n);
          break;
        default:
          zd(this, this._t0, n = eh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Bm(e) {
  this._context = new Hm(e);
}
(Bm.prototype = Object.create(nc.prototype)).point = function(e, t) {
  nc.prototype.point.call(this, t, e);
};
function Hm(e) {
  this._context = e;
}
Hm.prototype = {
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
function $u(e) {
  return new nc(e);
}
function Kb(e) {
  return new Bm(e);
}
function Wm(e) {
  this._context = e;
}
Wm.prototype = {
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
        for (var a = nh(e), i = nh(t), l = 0, d = 1; d < n; ++l, ++d)
          this._context.bezierCurveTo(a[0][l], i[0][l], a[1][l], i[1][l], e[d], t[d]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function nh(e) {
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
function Yb(e) {
  return new Wm(e);
}
function wc(e, t) {
  this._context = e, this._t = t;
}
wc.prototype = {
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
function Xb(e) {
  return new wc(e, 0.5);
}
function qb(e) {
  return new wc(e, 0);
}
function Gb(e) {
  return new wc(e, 1);
}
function Go(e, t) {
  if ((d = e.length) > 1)
    for (var n = 1, a, i, l = e[t[0]], d, f = l.length; n < d; ++n)
      for (i = l, l = e[t[n]], a = 0; a < f; ++a)
        l[a][1] += l[a][0] = isNaN(i[a][1]) ? i[a][0] : i[a][1];
}
function Zo(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function Zb(e, t) {
  return e[t];
}
function zf() {
  var e = jt([]), t = Zo, n = Go, a = Zb;
  function i(l) {
    var d = e.apply(this, arguments), f, u = l.length, m = d.length, y = new Array(m), x;
    for (f = 0; f < m; ++f) {
      for (var b = d[f], A = y[f] = new Array(u), w = 0, O; w < u; ++w)
        A[w] = O = [0, +a(l[w], b, w, l)], O.data = l[w];
      A.key = b;
    }
    for (f = 0, x = t(y); f < m; ++f)
      y[x[f]].index = f;
    return n(y, x), y;
  }
  return i.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : jt(Qd.call(l)), i) : e;
  }, i.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : jt(+l), i) : a;
  }, i.order = function(l) {
    return arguments.length ? (t = l == null ? Zo : typeof l == "function" ? l : jt(Qd.call(l)), i) : t;
  }, i.offset = function(l) {
    return arguments.length ? (n = l ?? Go, i) : n;
  }, i;
}
function Qb(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, i = 0, l = e[0].length, d; i < l; ++i) {
      for (d = n = 0; n < a; ++n)
        d += e[n][i][1] || 0;
      if (d)
        for (n = 0; n < a; ++n)
          e[n][i][1] /= d;
    }
    Go(e, t);
  }
}
function Jb(e, t) {
  if ((u = e.length) > 0)
    for (var n, a = 0, i, l, d, f, u, m = e[t[0]].length; a < m; ++a)
      for (d = f = 0, n = 0; n < u; ++n)
        (l = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = d, i[1] = d += l) : l < 0 ? (i[1] = f, i[0] = f += l) : (i[0] = 0, i[1] = l);
}
function e0(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, l = a.length; n < l; ++n) {
      for (var d = 0, f = 0; d < i; ++d)
        f += e[d][n][1] || 0;
      a[n][1] += a[n][0] = -f / 2;
    }
    Go(e, t);
  }
}
function t0(e, t) {
  if (!(!((d = e.length) > 0) || !((l = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, i, l, d; a < l; ++a) {
      for (var f = 0, u = 0, m = 0; f < d; ++f) {
        for (var y = e[t[f]], x = y[a][1] || 0, b = y[a - 1][1] || 0, A = (x - b) / 2, w = 0; w < f; ++w) {
          var O = e[t[w]], k = O[a][1] || 0, h = O[a - 1][1] || 0;
          A += k - h;
        }
        u += x, m += A * x;
      }
      i[a - 1][1] += i[a - 1][0] = n, u && (n -= m / u);
    }
    i[a - 1][1] += i[a - 1][0] = n, Go(e, t);
  }
}
function n0(e) {
  var t = e.map(r0);
  return Zo(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function r0(e) {
  for (var t = -1, n = 0, a = e.length, i, l = -1 / 0; ++t < a; )
    (i = +e[t][1]) > l && (l = i, n = t);
  return n;
}
function Vm(e) {
  var t = e.map(jm);
  return Zo(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function jm(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function a0(e) {
  return Vm(e).reverse();
}
function i0(e) {
  var t = e.length, n, a, i = e.map(jm), l = n0(e), d = 0, f = 0, u = [], m = [];
  for (n = 0; n < t; ++n)
    a = l[n], d < f ? (d += i[a], u.push(a)) : (f += i[a], m.push(a));
  return m.reverse().concat(u);
}
function o0(e) {
  return Zo(e).reverse();
}
function xn(e, t) {
  e(t);
}
var rh = {
  ascending: Vm,
  descending: a0,
  insideout: i0,
  none: Zo,
  reverse: o0
};
function $f(e) {
  return e && rh[e] || rh.none;
}
var ah = {
  expand: Qb,
  diverging: Jb,
  none: Go,
  silhouette: e0,
  wiggle: t0
};
function If(e) {
  return e && ah[e] || ah.none;
}
function l0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, l = t.startAngle, d = t.endAngle, f = t.padAngle, u = t.padRadius, m = Cb();
  return n != null && xn(m.innerRadius, n), a != null && xn(m.outerRadius, a), i != null && xn(m.cornerRadius, i), l != null && xn(m.startAngle, l), d != null && xn(m.endAngle, d), f != null && xn(m.padAngle, f), u != null && xn(m.padRadius, u), m;
}
function Bf(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, l = t.y, d = t.y0, f = t.y1, u = t.defined, m = t.curve, y = Ab();
  return n && xn(y.x, n), a && xn(y.x0, a), i && xn(y.x1, i), l && xn(y.y, l), d && xn(y.y0, d), f && xn(y.y1, f), u && y.defined(u), m && y.curve(m), y;
}
function Um(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, l = t.curve, d = _m();
  return n && xn(d.x, n), a && xn(d.y, a), i && d.defined(i), l && d.curve(l), d;
}
function s0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, l = t.value, d = t.sort, f = t.sortValues, u = Rb();
  return (d === null || d != null) && u.sort(d), (f === null || f != null) && u.sortValues(f), l != null && u.value(l), i != null && xn(u.padAngle, i), n != null && xn(u.startAngle, n), a != null && xn(u.endAngle, a), u;
}
function u0(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, l = zf();
  return t && l.keys(t), n && xn(l.value, n), a && l.order($f(a)), i && l.offset(If(i)), l;
}
var c0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function d0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function f0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, l = i === void 0 ? [] : i, d = e.centroid, f = e.innerRadius, u = f === void 0 ? 0 : f, m = e.outerRadius, y = e.cornerRadius, x = e.startAngle, b = e.endAngle, A = e.padAngle, w = e.padRadius, O = e.pieSort, k = e.pieSortValues, h = e.pieValue, L = e.children, F = e.fill, P = F === void 0 ? "" : F, T = d0(e, c0), _ = l0({
    innerRadius: u,
    outerRadius: m,
    cornerRadius: y,
    padRadius: w
  }), B = s0({
    startAngle: x,
    endAngle: b,
    padAngle: A,
    value: h,
    sort: O,
    sortValues: k
  }), Y = B(l);
  return L ? /* @__PURE__ */ r.createElement(r.Fragment, null, L({
    arcs: Y,
    path: _,
    pie: B
  })) : /* @__PURE__ */ r.createElement(at, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, Y.map(function(X, J) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + J
    }, /* @__PURE__ */ r.createElement("path", ef({
      className: Cn("visx-pie-arc", t),
      d: _(X) || "",
      fill: P == null || typeof P == "string" ? P : P(X)
    }, T)), d == null ? void 0 : d(_.centroid(X), X));
  }));
}
var p0 = ["from", "to", "fill", "className", "innerRef"];
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
function tn(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, i = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, d = l === void 0 ? "transparent" : l, f = e.className, u = e.innerRef, m = h0(e, p0), y = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", tf({
    ref: u,
    className: Cn("visx-line", f),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: d,
    shapeRendering: y ? "crispEdges" : "auto"
  }, m));
}
var m0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function Nr(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, i = e.x, l = e.y, d = e.fill, f = d === void 0 ? "transparent" : d, u = e.className, m = e.curve, y = e.innerRef, x = e.defined, b = x === void 0 ? function() {
    return !0;
  } : x, A = y0(e, m0), w = Um({
    x: i,
    y: l,
    defined: b,
    curve: m
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: w
  })) : /* @__PURE__ */ r.createElement("path", nf({
    ref: y,
    className: Cn("visx-linepath", u),
    d: w(a) || "",
    fill: f,
    strokeLinecap: "round"
  }, A));
}
var g0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function v0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function x0(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, l = e.y, d = e.y0, f = e.y1, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, b = e.className, A = e.curve, w = e.innerRef, O = v0(e, g0), k = Bf({
    x: n,
    x0: a,
    x1: i,
    y: l,
    y0: d,
    y1: f,
    defined: x,
    curve: A
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ r.createElement("path", rf({
    ref: w,
    className: Cn("visx-area", b),
    d: k(m) || ""
  }, O));
}
var b0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function S0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function E0(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, l = e.y1, d = e.y0, f = e.yScale, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, b = e.className, A = e.curve, w = e.innerRef, O = e.children, k = S0(e, b0), h = Bf({
    x: t,
    x0: n,
    x1: a,
    defined: x,
    curve: A
  });
  return d == null ? h.y0(f.range()[0]) : xn(h.y0, d), i && !l && xn(h.y1, i), l && !i && xn(h.y1, l), O ? /* @__PURE__ */ r.createElement(r.Fragment, null, O({
    path: h
  })) : /* @__PURE__ */ r.createElement("path", af({
    ref: w,
    className: Cn("visx-area-closed", b),
    d: h(m) || ""
  }, k));
}
var k0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function w0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function T0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, b = e.y1, A = e.value, w = e.order, O = e.offset, k = e.color, h = e.children, L = w0(e, k0), F = u0({
    keys: i,
    value: A,
    order: w,
    offset: O
  }), P = Bf({
    x: u,
    x0: m,
    x1: y,
    y0: x,
    y1: b,
    curve: d,
    defined: f
  }), T = F(l);
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h({
    stacks: T,
    path: P,
    stack: F
  })) : /* @__PURE__ */ r.createElement(at, {
    top: n,
    left: a
  }, T.map(function(_, B) {
    return /* @__PURE__ */ r.createElement("path", of({
      className: Cn("visx-stack", t),
      key: "stack-" + B + "-" + (_.key || ""),
      d: P(_) || "",
      fill: k == null ? void 0 : k(_.key, B)
    }, L));
  }));
}
var C0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, rc.apply(this, arguments);
}
function A0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function L0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, b = e.y1, A = e.value, w = e.order, O = e.offset, k = e.color, h = e.children, L = A0(e, C0);
  return /* @__PURE__ */ r.createElement(T0, rc({
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
    y1: b,
    value: A,
    order: w,
    offset: O,
    color: k
  }, L), h || function(F) {
    var P = F.stacks, T = F.path;
    return P.map(function(_, B) {
      return /* @__PURE__ */ r.createElement("path", rc({
        className: Cn("visx-area-stack", t),
        key: "area-stack-" + B + "-" + (_.key || ""),
        d: T(_) || "",
        fill: k == null ? void 0 : k(_.key, B)
      }, L));
    });
  });
}
function Hf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var P0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function Km(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x0, d = e.x0Scale, f = e.x1Scale, u = e.yScale, m = e.color, y = e.keys, x = e.height, b = e.children, A = R0(e, P0), w = Hf(f), O = t.map(function(k, h) {
    return {
      index: h,
      x0: d(l(k)),
      bars: y.map(function(L, F) {
        var P = k[L];
        return {
          index: F,
          key: L,
          value: P,
          width: w,
          x: f(L) || 0,
          y: u(P) || 0,
          color: m(L, F),
          height: x - (u(P) || 0)
        };
      })
    };
  });
  return b ? /* @__PURE__ */ r.createElement(r.Fragment, null, b(O)) : /* @__PURE__ */ r.createElement(at, {
    className: Cn("visx-bar-group", n),
    top: a,
    left: i
  }, O.map(function(k) {
    return /* @__PURE__ */ r.createElement(at, {
      key: "bar-group-" + k.index + "-" + k.x0,
      left: k.x0
    }, k.bars.map(function(h) {
      return /* @__PURE__ */ r.createElement(wr, lf({
        key: "bar-group-bar-" + k.index + "-" + h.index + "-" + h.value + "-" + h.key,
        x: h.x,
        y: h.y,
        width: h.width,
        height: h.height,
        fill: h.color
      }, A));
    }));
  }));
}
function Ym(e) {
  return e == null ? void 0 : e[0];
}
function Xm(e) {
  return e == null ? void 0 : e[1];
}
var D0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function _0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function qm(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x, d = e.y0, f = d === void 0 ? Ym : d, u = e.y1, m = u === void 0 ? Xm : u, y = e.xScale, x = e.yScale, b = e.color, A = e.keys, w = e.value, O = e.order, k = e.offset, h = e.children, L = _0(e, D0), F = zf();
  A && F.keys(A), w && xn(F.value, w), O && F.order($f(O)), k && F.offset(If(k));
  var P = F(t), T = Hf(y), _ = P.map(function(B, Y) {
    var X = B.key;
    return {
      index: Y,
      key: X,
      bars: B.map(function(J, re) {
        var H = (x(f(J)) || 0) - (x(m(J)) || 0), ae = x(m(J)), j = "bandwidth" in y ? y(l(J.data)) : Math.max((y(l(J.data)) || 0) - T / 2);
        return {
          bar: J,
          key: X,
          index: re,
          height: H,
          width: T,
          x: j || 0,
          y: ae || 0,
          color: b(B.key, re)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(_)) : /* @__PURE__ */ r.createElement(at, {
    className: Cn("visx-bar-stack", n),
    top: a,
    left: i
  }, _.map(function(B) {
    return B.bars.map(function(Y) {
      return /* @__PURE__ */ r.createElement(wr, sf({
        key: "bar-stack-" + B.index + "-" + Y.index,
        x: Y.x,
        y: Y.y,
        height: Y.height,
        width: Y.width,
        fill: Y.color
      }, L));
    });
  }));
}
var N0 = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function O0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function F0(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.y, d = e.x0, f = d === void 0 ? Ym : d, u = e.x1, m = u === void 0 ? Xm : u, y = e.xScale, x = e.yScale, b = e.color, A = e.keys, w = e.value, O = e.order, k = e.offset, h = e.children, L = O0(e, N0), F = zf();
  A && F.keys(A), w && xn(F.value, w), O && F.order($f(O)), k && F.offset(If(k));
  var P = F(t), T = Hf(x), _ = P.map(function(B, Y) {
    var X = B.key;
    return {
      index: Y,
      key: X,
      bars: B.map(function(J, re) {
        var H = (y(m(J)) || 0) - (y(f(J)) || 0), ae = y(f(J)), j = "bandwidth" in x ? x(l(J.data)) : Math.max((x(l(J.data)) || 0) - H / 2);
        return {
          bar: J,
          key: X,
          index: re,
          height: T,
          width: H,
          x: ae || 0,
          y: j || 0,
          color: b(B.key, re)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(_)) : /* @__PURE__ */ r.createElement(at, {
    className: Cn("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, _.map(function(B) {
    return B.bars.map(function(Y) {
      return /* @__PURE__ */ r.createElement(wr, uf({
        key: "bar-stack-" + B.index + "-" + Y.index,
        x: Y.x,
        y: Y.y,
        height: Y.height,
        width: Y.width,
        fill: Y.color
      }, L));
    });
  }));
}
var ih = "http://www.w3.org/2000/svg";
function M0(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(ih, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(ih, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var z0 = "__visx_splitpath_svg_path_measurement_id", oh = function() {
  return !0;
};
function $0(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, i = a === void 0 ? "x" : a, l = e.sampleRate, d = l === void 0 ? 1 : l;
  try {
    var f = M0(z0);
    f.setAttribute("d", t);
    var u = f.getTotalLength(), m = n.length, y = n.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var x = n.map(function(ae) {
        var j;
        return (j = ae.find(function(te) {
          return typeof te[i] == "number";
        })) == null ? void 0 : j[i];
      }), b = f.getPointAtLength(0), A = f.getPointAtLength(u), w = A[i] > b[i], O = w ? x.map(function(ae) {
        return typeof ae > "u" ? oh : function(j) {
          return j >= ae;
        };
      }) : x.map(function(ae) {
        return typeof ae > "u" ? oh : function(j) {
          return j <= ae;
        };
      }), k = 0, h = 0; h <= u; h += d) {
        for (var L = f.getPointAtLength(h), F = L[i]; k < m - 1 && O[k + 1](F); )
          k += 1;
        y[k].push(L);
      }
    else {
      var P = n.map(function(ae) {
        return ae.length;
      }), T = P.reduce(function(ae, j) {
        return ae + j;
      }, 0), _ = u / Math.max(1, T - 1), B = P.slice(0, m - 1);
      B.unshift(0);
      for (var Y = 2; Y < m; Y += 1)
        B[Y] += B[Y - 1];
      for (var X = 0; X < m; X += 1)
        B[X] *= _;
      for (var J = 0, re = 0; re <= u; re += d) {
        for (var H = f.getPointAtLength(re); J < m - 1 && re >= B[J + 1]; )
          J += 1;
        y[J].push(H);
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
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cf.apply(this, arguments);
}
var I0 = function(t) {
  return t.x || 0;
}, B0 = function(t) {
  return t.y || 0;
};
function Gm(e) {
  var t = e.children, n = e.className, a = e.curve, i = e.defined, l = e.segmentation, d = e.sampleRate, f = e.segments, u = e.x, m = e.y, y = e.styles, x = se.useMemo(function() {
    var w = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u, O = typeof m == "number" || typeof m > "u" ? function() {
      return m;
    } : m;
    return f.map(function(k) {
      return k.map(function(h, L) {
        return {
          x: w(h, L, k),
          y: O(h, L, k)
        };
      });
    });
  }, [u, m, f]), b = se.useMemo(function() {
    var w = Um({
      x: u,
      y: m,
      defined: i,
      curve: a
    });
    return w(f.flat()) || "";
  }, [u, m, i, a, f]), A = se.useMemo(function() {
    return $0({
      path: b,
      segmentation: l,
      pointsInSegments: x,
      sampleRate: d
    });
  }, [b, l, x, d]);
  return /* @__PURE__ */ r.createElement("g", null, A.map(function(w, O) {
    return t ? /* @__PURE__ */ r.createElement(r.Fragment, {
      key: O
    }, t({
      index: O,
      segment: w,
      styles: y[O] || y[O % y.length]
    })) : /* @__PURE__ */ r.createElement(Nr, cf({
      key: O,
      className: n,
      data: w,
      x: I0,
      y: B0
    }, y[O] || y[O % y.length]));
  }));
}
Gm.propTypes = {
  segments: We.arrayOf(We.array).isRequired,
  styles: We.array.isRequired,
  children: We.func,
  className: We.string
};
var H0 = ["tooltipOpen"];
function W0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ac.apply(this, arguments);
}
function Zm(e) {
  var t = se.useState(ac({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = se.useCallback(function(d) {
    return a(typeof d == "function" ? function(f) {
      f.tooltipOpen;
      var u = W0(f, H0);
      return ac({}, d(u), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: d.tooltipLeft,
      tooltipTop: d.tooltipTop,
      tooltipData: d.tooltipData
    });
  }, [a]), l = se.useCallback(function() {
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
var V0 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function j0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Qm = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, Wf = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, a = e.top, i = e.left, l = e.offsetLeft, d = l === void 0 ? 10 : l, f = e.offsetTop, u = f === void 0 ? 10 : f, m = e.style, y = m === void 0 ? Qm : m, x = e.children, b = e.unstyled, A = b === void 0 ? !1 : b, w = e.applyPositionStyle, O = w === void 0 ? !1 : w, k = j0(e, V0);
  return /* @__PURE__ */ r.createElement("div", ic({
    ref: t,
    className: Cn("visx-tooltip", n),
    style: ic({
      top: a == null || u == null ? a : a + u,
      left: i == null || d == null ? i : i + d
    }, O && {
      position: "absolute"
    }, !A && y)
  }, k), x);
});
Wf.propTypes = {
  children: We.node,
  className: We.string,
  left: We.number,
  offsetLeft: We.number,
  offsetTop: We.number,
  top: We.number,
  applyPositionStyle: We.bool,
  unstyled: We.bool
};
Wf.displayName = "Tooltip";
const U0 = Wf;
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, df.apply(this, arguments);
}
function K0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, ff(e, t);
}
var lh = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function X0(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    Y0(a, n);
    function a(l) {
      var d;
      return d = n.call(this, l) || this, d.state = {
        rect: void 0,
        parentRect: void 0
      }, d.nodeRef = /* @__PURE__ */ r.createRef(), d.getRects = d.getRects.bind(K0(d)), d;
    }
    var i = a.prototype;
    return i.componentDidMount = function() {
      var d, f = this;
      this.node = (d = this.nodeRef) != null && d.current ? this.nodeRef.current : og.findDOMNode(this), this.setState(function() {
        return f.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var d = this.node, f = d.parentNode, u = d.getBoundingClientRect ? d.getBoundingClientRect() : lh, m = f != null && f.getBoundingClientRect ? f.getBoundingClientRect() : lh;
      return {
        rect: u,
        parentRect: m
      };
    }, i.render = function() {
      return /* @__PURE__ */ r.createElement(e, df({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Jm = /* @__PURE__ */ se.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), q0 = Jm.Provider;
Jm.Consumer;
var G0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oc.apply(this, arguments);
}
function Z0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ey(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, l = i === void 0 ? 10 : i, d = e.offsetTop, f = d === void 0 ? 10 : d, u = e.parentRect, m = e.rect, y = e.style, x = y === void 0 ? Qm : y, b = e.top, A = b === void 0 ? 0 : b, w = e.unstyled, O = w === void 0 ? !1 : w, k = e.nodeRef, h = Z0(e, G0), L, F = !1, P = !1;
  if (m && u) {
    var T = a, _ = A;
    if (u.width) {
      var B = T + l + m.width - u.width, Y = m.width - T - l;
      F = B > 0 && B > Y;
    } else {
      var X = T + l + m.width - window.innerWidth, J = m.width - T - l;
      F = X > 0 && X > J;
    }
    if (u.height) {
      var re = _ + f + m.height - u.height, H = m.height - _ - f;
      P = re > 0 && re > H;
    } else
      P = _ + f + m.height > window.innerHeight;
    T = F ? T - m.width - l : T + l, _ = P ? _ - m.height - f : _ + f, T = Math.round(T), _ = Math.round(_), L = "translate(" + T + "px, " + _ + "px)";
  }
  return /* @__PURE__ */ r.createElement(U0, oc({
    ref: k,
    style: oc({
      left: 0,
      top: 0,
      transform: L
    }, !O && x)
  }, h), /* @__PURE__ */ r.createElement(q0, {
    value: {
      isFlippedVertically: !P,
      isFlippedHorizontally: !F
    }
  }, t));
}
ey.propTypes = {
  nodeRef: We.oneOfType([We.string, We.func, We.object])
};
const ty = X0(ey), ny = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: l, formatTooltipsDate: d, parseDate: f, setSharedFilter: u, isDraggingAnnotation: m } = se.useContext(xt), { xScale: y, yScale: x, showTooltip: b, hideTooltip: A } = e, { xAxis: w, visualizationType: O, orientation: k, yAxis: h, runtime: L } = n, F = (ne, ee) => {
    var we;
    let G = 0, Z = Number(x.invert(ne)), K = null, V = null;
    for (let Se of (we = n.runtime) == null ? void 0 : we.seriesKeys)
      if (ee.hasOwnProperty(Se) && (G += Number(ee[Se]), G >= Z)) {
        V = ee[Se], K = Se;
        break;
      }
    return [K, V];
  }, P = (ne, ee, G, Z) => {
    var Se;
    const K = G.general.showMissingDataLabel && (!ee || ee === "null");
    let V = ne === G.xAxis.dataKey ? ee : a(ee, Z(ne));
    V = K ? "N/A" : V;
    const we = (Se = G.preliminaryData) == null ? void 0 : Se.find((ce) => ce.label && ce.type === "suppression" && ce.displayTooltip && ee === ce.value && (!ce.column || ne === ce.column));
    return we && (V = we.label), V;
  }, T = (ne, ee) => {
    const { x: G, y: Z } = ee, V = {
      data: ne || {},
      dataXPosition: G + 10,
      dataYPosition: Z
    };
    return {
      tooltipLeft: V.dataXPosition,
      tooltipTop: V.dataYPosition,
      tooltipData: V
    };
  }, _ = (ne, ee) => {
    if (ne.stopPropagation(), m)
      return;
    const G = lp(ne), { x: Z, y: K } = G, { data: V, arc: we } = ee ?? {}, Se = X(Z - Number(n.yAxis.size || 0)), ce = O !== "Pie" ? n.series.filter((Ae) => Ae.tooltip === !0).map((Ae) => Ae.dataKey) : n.series.map((Ae) => Ae.dataKey);
    ce.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((Ae) => {
      Ae.confidenceIntervals.map(($e) => {
        $e.showInTooltip && (ce.push($e.high), ce.push($e.low));
      });
    });
    function Re(Ae) {
      let $e = [];
      for (let De in Ae)
        Ae.hasOwnProperty(De) && $e.push(Ae[De].name);
      return $e;
    }
    ce.push(...Re(n.columns)), ce.push(...Re(n.columns));
    const je = H(Se, ce), Je = t.filter((Ae) => Ae[w.dataKey] === J(K)), Oe = k === "vertical" ? je : Je, he = (Ae) => {
      const $e = n.series.filter((Ze) => Ze.dataKey === Ae)[0];
      return $e != null && $e.axis ? String($e.axis).toLowerCase() : "left";
    }, le = (() => {
      var qe, yt, nt;
      const Ae = n.columns, $e = [], De = [];
      for (const [Ve, ze] of Object.entries(Ae)) {
        const Te = {
          addColPrefix: n.columns[Ve].prefix,
          addColSuffix: n.columns[Ve].suffix,
          addColRoundTo: n.columns[Ve].roundToPlace ? n.columns[Ve].roundToPlace : "",
          addColCommas: n.columns[Ve].commas
        };
        let Ye = null;
        n.visualizationType === "Pie" ? Ye = we == null ? void 0 : we.data[ze.name] : Ye = (qe = Oe[0]) == null ? void 0 : qe[ze.name];
        const Qe = Ef(Ye, "left", !0, n, Te);
        ze.tooltips && $e.push([ze.label, Qe]);
      }
      const Ze = [];
      if ($e.forEach((Ve) => {
        Ze.push([Ve[0], Ve[1]]);
      }), O === "Pie" && De.push(
        // ignore
        [n.xAxis.dataKey, V],
        [n.runtime.yAxis.dataKey, a(we == null ? void 0 : we.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((we == null ? void 0 : we.endAngle) - (we == null ? void 0 : we.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), O === "Forest Plot" && De.push([n.xAxis.dataKey, J(K)]), O !== "Pie" && O !== "Forest Plot" && !n.tooltips.singleSeries && De.push(
        ...(nt = (yt = ae()) == null ? void 0 : yt.filter((Ve) => {
          var ze, Te;
          return ((ze = n.series) == null ? void 0 : ze.find((Ye) => Ye.dataKey === Ve && (Ye == null ? void 0 : Ye.tooltip))) || ((Te = n.xAxis) == null ? void 0 : Te.dataKey) == Ve || O === "Forecasting";
        })) == null ? void 0 : nt.flatMap((Ve) => {
          var Ye;
          const ze = (Ye = Oe[0]) == null ? void 0 : Ye[Ve], Te = P(Ve, ze, n, he);
          return [[Ve, Te, he(Ve)]];
        })
      ), O !== "Pie" && O !== "Forest Plot" && n.tooltips.singleSeries) {
        const [Ve, ze] = F(K, Oe[0]);
        if (Ve && ze) {
          De.push([n.xAxis.dataKey, Se]);
          const Te = P(Ve, ze, n, he);
          De.push([Ve, Te]);
        }
      }
      return [...De, ...Ze];
    })();
    if (!le)
      return;
    const ue = T(le, G);
    b(ue);
  }, B = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      A();
    }, 3e3) : A();
  }, Y = (ne) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let ee = y.step();
      const Z = Math.floor(Number(ne) / ee);
      return y.domain()[Z - 1];
    }
    if (En(n.xAxis) && n.visualizationType !== "Combo") {
      const ee = xp((V) => f(V[n.xAxis.dataKey])).left, G = y.invert(y(ne)), Z = ee(n.data, G, 1);
      return f(n.data[Z - 1][n.xAxis.dataKey]);
    }
  }, X = (ne, ee = !1) => {
    if (O !== "Pie" && k !== "horizontal") {
      if (y.type === "point" || w.type === "continuous" || En(w)) {
        let G = null, Z = Number.MAX_VALUE, K = ne;
        return t.forEach((V) => {
          const we = En(w) ? y(f(V[w.dataKey])) : y(V[w.dataKey]);
          let Se = n.barHeight;
          const ce = Math.abs(Number(we - K + (ee ? Se * 2 : 0)));
          ce <= Z && (Z = ce, G = (En(w), V[w.dataKey]));
        }), G;
      }
      if (n.xAxis.type === "categorical" || O === "Combo" && k !== "horizontal" && O !== "Forest Plot") {
        let Z = (y.range()[1] - y.range()[0]) / (y.domain().length + 1);
        const V = Math.floor((Number(ne) - Z / 2) / Z);
        return y.domain()[V];
      }
      if (En(w) && O !== "Combo" && k !== "horizontal") {
        const G = xp((we) => f(we[n.xAxis.dataKey])).left, Z = y.invert(ne), K = G(n.data, Z, 1);
        return f(n.data[K - 1][n.xAxis.dataKey]);
      }
    }
  }, J = (ne, ee) => {
    if (O === "Pie")
      return;
    let G = Number.MAX_VALUE, Z = null;
    return t.forEach((K, V) => {
      const we = x(O !== "Forest Plot" ? K[n.xAxis.dataKey] : V), Se = Math.abs(we - ne);
      Se < G && (G = Se, Z = ee ? K[ee] : K[n.xAxis.dataKey]);
    }), Z;
  }, re = (ne) => {
    var ee, G;
    try {
      const Z = lp(ne), { x: K } = Z;
      if (!K)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let V = X(K, !0), we = (ee = n.data) == null ? void 0 : ee.filter((Se) => Se[n.xAxis.dataKey] === V);
      if (!V)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (En(w) && V && (V = new Date(V), V = l(V), we = (G = n.data) == null ? void 0 : G.filter((Se) => l(new Date(Se[n.xAxis.dataKey])) === V)), !we[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${V}`);
      u && (n != null && n.uid) && (we != null && we[0]) && u(n.uid, we[0]);
    } catch (Z) {
      console.error(Z.message);
    }
  }, H = (ne, ee) => {
    try {
      let G;
      return w.type === "categorical" ? G = t.filter((K) => K[w.dataKey] === ne) : G = t.filter((K) => K[w.dataKey] === ne), !G || G.length === 0 ? [] : G.map((K) => Object.fromEntries(Object.entries(K).filter(([V, we]) => ee.includes(V))));
    } catch (G) {
      console.error("COVE", G);
    }
  }, ae = () => {
    var ne;
    try {
      let ee, G = [], Z = [];
      if ((ne = n.series) == null || ne.forEach((K) => {
        K.type === "Forecasting" && (G.push(K.stageColumn), K == null || K.confidenceIntervals.forEach((V) => {
          V.showInTooltip === !0 && (Z.push(V.low), Z.push(V.high));
        }));
      }), !n.dashboard)
        switch (O) {
          case "Combo":
            ee = [L.xAxis.dataKey, ...L == null ? void 0 : L.seriesKeys, ...Z];
            break;
          case "Forecasting":
            ee = [L.xAxis.dataKey, ...G, ...Z];
            break;
          case "Line":
            ee = [L.xAxis.dataKey, ...L == null ? void 0 : L.seriesKeys];
            break;
          case "Area Chart":
            ee = [L.xAxis.dataKey, ...L == null ? void 0 : L.seriesKeys];
            break;
          case "Bar":
            ee = k === "vertical" ? [L.xAxis.dataKey, ...L == null ? void 0 : L.seriesKeys] : [L.yAxis.dataKey, ...L == null ? void 0 : L.seriesKeys];
            break;
          case "Pie":
            ee = [L.xAxis.dataKey, ...L == null ? void 0 : L.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (ee = [L.xAxis.dataKey, ...L == null ? void 0 : L.barSeriesKeys, ...L == null ? void 0 : L.lineSeriesKeys, ...G, ...Z]), ee;
    } catch (ee) {
      console.error("COVE", ee);
    }
  }, j = (ne) => {
    const { dataXPosition: ee, dataYPosition: G } = ne;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${ee}px, ${Number(G)}px)`
    };
  }, te = (ne) => {
    var G, Z;
    let ee = n.series.filter((K) => K.dataKey === ne);
    return (G = ee[0]) != null && G.name ? (Z = ee[0]) == null ? void 0 : Z.name : ne;
  };
  return {
    getIncludedTooltipSeries: ae,
    getXValueFromCoordinate: X,
    getXValueFromCoordinateDate: Y,
    getYScaleValues: H,
    handleTooltipClick: re,
    handleTooltipMouseOff: B,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: ne }) => {
      const [ee, G] = ne, [Z, K, V] = G;
      if (O === "Forest Plot")
        return Z === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${En(h) ? l(f(Z, !1)) : K}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${te(Z)}: ${a(K, "left")}`);
      const we = n.tooltips.dateDisplayFormat ? d(f(K, !1)) : l(f(K, !1));
      return O === "Bar" && k === "horizontal" && Z === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? we : K}`) : Z === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${En(w) ? we : K}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${te(Z)}: ${K}`);
    },
    tooltipStyles: j
  };
};
function Vf(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
  const [l, d] = se.useState(), f = (l == null ? void 0 : l.isIntersecting) && i, u = ([m]) => {
    d(m);
  };
  return se.useEffect(() => {
    setTimeout(() => {
      const m = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || f || !m)
        return;
      const x = { threshold: t, root: n, rootMargin: a }, b = new IntersectionObserver(u, x);
      return b.observe(m), () => b.disconnect();
    }, 500);
  }, [e, t, n, a, f]), l;
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
var Q0 = ["flexDirection", "alignItems", "margin", "display", "children"];
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
function J0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function lc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, i = a === void 0 ? "center" : a, l = e.margin, d = l === void 0 ? "0" : l, f = e.display, u = f === void 0 ? "flex" : f, m = e.children, y = J0(e, Q0);
  return /* @__PURE__ */ r.createElement("div", hf({
    className: "visx-legend-item",
    style: {
      display: u,
      alignItems: i,
      flexDirection: n,
      margin: d
    }
  }, y), m);
}
lc.propTypes = {
  alignItems: We.string,
  margin: We.oneOfType([We.string, We.number]),
  children: We.node,
  display: We.string
};
var eS = ["flex", "label", "margin", "align", "children"];
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
function tS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sc(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, i = e.margin, l = i === void 0 ? "5px 0" : i, d = e.align, f = d === void 0 ? "left" : d, u = e.children, m = tS(e, eS);
  return /* @__PURE__ */ r.createElement("div", mf({
    className: "visx-legend-label",
    style: {
      justifyContent: f,
      display: "flex",
      flex: n,
      margin: l
    }
  }, m), u || a);
}
sc.propTypes = {
  align: We.string,
  label: We.node,
  flex: We.oneOfType([We.string, We.number]),
  margin: We.oneOfType([We.string, We.number]),
  children: We.node
};
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yf.apply(this, arguments);
}
function jf(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: yf({
      width: n,
      height: a,
      background: t
    }, i)
  });
}
jf.propTypes = {
  fill: We.string,
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
function ry(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, d = typeof a == "string" || typeof a > "u" ? 0 : a, f = Math.max(l, d), u = f / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: f,
    height: f
  }, /* @__PURE__ */ r.createElement(at, {
    top: u,
    left: u
  }, /* @__PURE__ */ r.createElement("circle", {
    r: u,
    fill: t,
    style: i
  })));
}
ry.propTypes = {
  fill: We.string,
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
function ay(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, d = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ r.createElement(at, {
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
ay.propTypes = {
  fill: We.string,
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
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
var $d = function() {
};
function nS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? $d : a, l = e.size, d = l === void 0 ? $d : l, f = e.width, u = e.height, m = e.label, y = e.item, x = e.itemIndex, b = e.shapeStyle, A = b === void 0 ? $d : b, w = {
    width: f,
    height: u,
    item: y,
    itemIndex: x,
    label: m,
    fill: i(ls({}, m)),
    size: d(ls({}, m)),
    style: A(ls({}, m))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(ry, w) : n === "line" ? /* @__PURE__ */ r.createElement(ay, w) : /* @__PURE__ */ r.createElement(jf, w) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, w) : n ? /* @__PURE__ */ r.createElement(n, w) : null;
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
function iy(e) {
  var t = e.shape, n = t === void 0 ? jf : t, a = e.width, i = e.height, l = e.margin, d = e.label, f = e.item, u = e.itemIndex, m = e.fill, y = e.size, x = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(uc({}, d)) : a,
      height: y ? y(uc({}, d)) : i,
      margin: l
    }
  }, nS({
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
iy.propTypes = {
  itemIndex: We.number.isRequired,
  margin: We.oneOfType([We.string, We.number]),
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
function oy(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function sh(e) {
  return String(oy(e));
}
function rS(e) {
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
var aS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ss() {
  return ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ss.apply(this, arguments);
}
function iS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var oS = {
  display: "flex"
};
function ly(e) {
  var t = e.className, n = e.style, a = n === void 0 ? oS : n, i = e.scale, l = e.shape, d = e.domain, f = e.fill, u = f === void 0 ? sh : f, m = e.size, y = m === void 0 ? sh : m, x = e.labelFormat, b = x === void 0 ? oy : x, A = e.labelTransform, w = A === void 0 ? rS : A, O = e.shapeWidth, k = O === void 0 ? 15 : O, h = e.shapeHeight, L = h === void 0 ? 15 : h, F = e.shapeMargin, P = F === void 0 ? "2px 4px 2px 0" : F, T = e.shapeStyle, _ = e.labelAlign, B = _ === void 0 ? "left" : _, Y = e.labelFlex, X = Y === void 0 ? "1" : Y, J = e.labelMargin, re = J === void 0 ? "0 4px" : J, H = e.itemMargin, ae = H === void 0 ? "0" : H, j = e.direction, te = j === void 0 ? "column" : j, oe = e.itemDirection, ne = oe === void 0 ? "row" : oe, ee = e.legendLabelProps, G = e.children, Z = iS(e, aS), K = d || ("domain" in i ? i.domain() : []), V = w({
    scale: i,
    labelFormat: b
  }), we = K.map(V);
  return G ? /* @__PURE__ */ r.createElement(r.Fragment, null, G(we)) : /* @__PURE__ */ r.createElement("div", {
    className: Cn("visx-legend", t),
    style: ss({}, a, {
      flexDirection: te
    })
  }, we.map(function(Se, ce) {
    return /* @__PURE__ */ r.createElement(lc, ss({
      key: "legend-" + Se.text + "-" + ce,
      margin: ae,
      flexDirection: ne
    }, Z), /* @__PURE__ */ r.createElement(iy, {
      shape: l,
      height: L,
      width: k,
      margin: P,
      item: K[ce],
      itemIndex: ce,
      label: Se,
      fill: u,
      size: y,
      shapeStyle: T
    }), /* @__PURE__ */ r.createElement(sc, ss({
      label: Se.text,
      flex: X,
      margin: re,
      align: B
    }, ee)));
  }));
}
ly.propTypes = {
  children: We.func,
  className: We.string,
  domain: We.array,
  shapeWidth: We.oneOfType([We.string, We.number]),
  shapeHeight: We.oneOfType([We.string, We.number]),
  shapeMargin: We.oneOfType([We.string, We.number]),
  labelAlign: We.string,
  labelFlex: We.oneOfType([We.string, We.number]),
  labelMargin: We.oneOfType([We.string, We.number]),
  itemMargin: We.oneOfType([We.string, We.number]),
  fill: We.func,
  size: We.func,
  shapeStyle: We.func
};
function lS(e) {
  return /* @__PURE__ */ r.createElement(ly, e);
}
function sS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Tc = (e, t) => {
  var O;
  const { formatDate: n, parseDate: a } = se.useContext(xt);
  let i = [], l = "", d = [], f = [];
  ((O = e.series) == null ? void 0 : O.length) > 0 && e.data ? (i = e.series[0], l = e.series[0].dataKey, d = e.highlightedBarValues, f = e.data.map((k) => k[e.xAxis.dataKey])) : (i = [], l = "", d = [], f = []);
  const u = (k, h) => {
    const L = [...e.highlightedBarValues];
    L[h].borderWidth = k.target.value, t({
      ...e,
      highlightedBarValues: L
    });
  }, m = (k, h) => {
    k.preventDefault();
    const L = [...e.highlightedBarValues];
    L[h].value = k.target.value, L[h].dataKey = l, t({
      ...e,
      highlightedBarValues: L
    });
  }, y = (k, h) => {
    k.preventDefault();
    const L = [...e.highlightedBarValues];
    L.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: L
    });
  }, x = (k, h) => {
    k.preventDefault();
    const L = [...e.highlightedBarValues];
    L.splice(h, 1), t({
      ...e,
      highlightedBarValues: L
    });
  }, b = (k, h) => {
    const L = [...e.highlightedBarValues];
    L[h].color = k.target.value, t({
      ...e
    });
  }, A = (k, h) => {
    const L = [...e.highlightedBarValues];
    L[h].legendLabel = k.target.value, t({
      ...e,
      copyOfHighlightedBarValues: L
    });
  }, w = () => {
  };
  return w.checkFontColor = (k, h, L) => {
    if (e.xAxis.type === "date") {
      if (w.formatDates(h).includes(k))
        return "#000";
    } else if (h.includes(k))
      return "#000";
    return L;
  }, w.formatDates = (k) => k.map((h) => h ? n(a(h)) : !1), w.findDuplicates = (k) => {
    const h = {};
    return k == null ? void 0 : k.filter((F) => {
      const { legendLabel: P } = F;
      return h[P] ? !1 : (h[P] = !0, !0);
    });
  }, {
    HighLightedBarUtils: w,
    highlightedSeries: i,
    highlightedSeriesKey: l,
    highlightedBarValues: d,
    highlightedSeriesValues: f,
    handleUpdateHighlightedBar: m,
    handleAddNewHighlightedBar: y,
    handleRemoveHighlightedBar: x,
    handleUpdateHighlightedBarColor: b,
    handleHighlightedBarLegendLabel: A,
    handleUpdateHighlightedBorderWidth: u
  };
}, sy = (e) => {
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
}, uS = (e, t) => e ? t ? "35px" : "15px" : "0px", uy = se.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: l, formatLabels: d, skipId: f = "legend" }, u) => {
  const { innerClasses: m, containerClasses: y } = sS(e), { runtime: x, legend: b } = e;
  if (!b)
    return null;
  const A = (b == null ? void 0 : b.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !b.hide, w = {
    marginBottom: A ? "15px" : "0px",
    marginTop: A && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : uS(A, e.brush.active)
  }, { HighLightedBarUtils: O } = Tc(e);
  let k = O.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { ref: u, style: w, id: f || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, b.label && /* @__PURE__ */ r.createElement("h3", null, Pi(b.label)), b.description && /* @__PURE__ */ r.createElement("p", null, Pi(b.description)), /* @__PURE__ */ r.createElement(lS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (h) => {
    var L, F, P, T;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: m.join(" ") }, d(h).map((_, B) => {
      var J, re, H, ae;
      let Y = ["legend-item", `legend-text--${_.text.replace(" ", "").toLowerCase()}`], X = _.datum;
      if (e.exclusions.active && ((J = e.exclusions.keys) != null && J.includes(X)))
        return null;
      if (x.seriesLabels) {
        let j = e.runtime.seriesLabelsAll.indexOf(X);
        X = e.runtime.seriesKeys[j], ((re = x == null ? void 0 : x.forecastingSeriesKeys) == null ? void 0 : re.length) > 0 && (X = _.text);
      }
      return n.length > 0 && n.includes(X) === !1 && Y.push("inactive"), /* @__PURE__ */ r.createElement(
        lc,
        {
          className: Y.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (j) => {
            j.key === "Enter" && (j.preventDefault(), a(_));
          },
          onClick: (j) => {
            j.preventDefault(), a(_);
          },
          role: "button"
        },
        /* @__PURE__ */ r.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(tn, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: _.value, strokeWidth: 2, strokeDasharray: sy((H = e.series[B]) != null && H.type ? (ae = e.series[B]) == null ? void 0 : ae.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(cp, { viewport: l, margin: "0", fill: _.value, display: !0 }))),
        /* @__PURE__ */ r.createElement(sc, { align: "left", margin: "0 0 0 4px" }, _.text)
      );
    }), k.map((_, B) => {
      let Y = "legend-item", X = _.legendLabel;
      return X ? (n.length > 0 && n.includes(X) === !1 && (Y += " inactive"), /* @__PURE__ */ r.createElement(
        lc,
        {
          className: Y,
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (J) => {
            J.key === "Enter" && (J.preventDefault(), a(_.legendLabel));
          },
          onClick: (J) => {
            J.preventDefault(), a(_.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(cp, { fill: "transparent", borderColor: _.color ? _.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(sc, { align: "left", margin: "0 0 0 4px" }, _.legendLabel ? _.legendLabel : _.value)
      )) : !1;
    })), /* @__PURE__ */ r.createElement(r.Fragment, null, ((L = e == null ? void 0 : e.preliminaryData) == null ? void 0 : L.some((_) => _.label && _.type === "effect" && _.style === "Open Circles")) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && A ? "legend-container__inner bottom single-row" : "" }, (F = e == null ? void 0 : e.preliminaryData) == null ? void 0 : F.map((_, B) => /* @__PURE__ */ r.createElement(r.Fragment, null, _.label && _.type === "effect" && _.style && /* @__PURE__ */ r.createElement("div", { key: B, className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.lineCode), /* @__PURE__ */ r.createElement("p", null, " ", _.label)))))), !e.legend.hideSuppressedLabels && ((P = e == null ? void 0 : e.preliminaryData) == null ? void 0 : P.some((_) => _.label && _.displayLegend && _.type === "suppression" && _.value && ((_ == null ? void 0 : _.style) || _.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && A ? "legend-container__inner bottom single-row" : "" }, (T = e == null ? void 0 : e.preliminaryData) == null ? void 0 : T.map(
      (_, B) => _.displayLegend && _.type === "suppression" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Bar", className: `legend-preliminary ${_.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.iconCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label))), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Line", className: "legend-preliminary " }, /* @__PURE__ */ r.createElement("span", null, _.lineCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label))), e.visualizationType === "Combo" && /* @__PURE__ */ r.createElement(r.Fragment, null, _.symbol && _.iconCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: `legend-preliminary ${_.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.iconCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label)), _.style && _.lineCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", null, _.lineCode), /* @__PURE__ */ r.createElement("p", null, _.label))))
    )))));
  }), n.length > 0 && /* @__PURE__ */ r.createElement(hs, { onClick: (h) => i(h), style: { marginTop: "1rem" } }, "Reset"));
});
function cS(e) {
  return Uy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const cy = (e, t, n, a) => (i) => {
  var b, A, w, O, k;
  const { visualizationType: l, visualizationSubType: d, series: f, runtime: u } = e, m = (h) => {
    var L;
    return e.legend.reverseLabelOrder && ((L = e.legend) == null ? void 0 : L.position) === "bottom" ? h.reverse() : h;
  }, y = (b = e.legend) == null ? void 0 : b.colorCode;
  if (l === "Deviation Bar") {
    const [h, L] = ms[e.twoColor.palette], F = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: h
    }, P = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: L
    };
    return m([F, P]);
  }
  if (l === "Bar" && d === "regular" && y && (f == null ? void 0 : f.length) === 1) {
    let h = or[e.palette];
    for (; t.length > h.length; )
      h = h.concat(h);
    h = h.slice(0, n.length);
    const L = /* @__PURE__ */ new Set();
    t.forEach((P) => L.add(P[y]));
    const F = Array.from(L).map((P, T) => ({
      datum: P,
      index: T,
      text: P,
      value: h[T]
    }));
    return m(F);
  }
  if (((A = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : A.length) > 0) {
    let h = [];
    return (O = (w = e.runtime) == null ? void 0 : w.forecastingSeriesKeys) == null || O.map((L, F) => {
      var P;
      return (P = L == null ? void 0 : L.stages) == null ? void 0 : P.map((T, _) => {
        var X, J, re, H;
        let B = (X = Wu[T.color]) != null && X[2] ? (J = Wu[T.color]) == null ? void 0 : J[2] : (re = or[T.color]) != null && re[2] ? (H = or[T.color]) == null ? void 0 : H[2] : "#ccc";
        const Y = {
          datum: T.key,
          index: _,
          text: T.key,
          value: B
        };
        h.push(Y);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((L, F) => {
      let P = or[e.palette][F] ? or[e.palette][F] : "#ccc";
      const T = {
        datum: L,
        index: F,
        text: L,
        value: P
      };
      h.push(T);
    }), m(h);
  }
  if (e.series.filter((h) => !!h.name).length > 0) {
    const h = /* @__PURE__ */ new Set();
    e.series.forEach((F) => {
      h.add(F.name || F.dataKey);
    });
    const L = Array.from(h).map((F, P) => ({
      datum: F,
      index: P,
      text: F,
      value: a(F)
    }));
    return m(L);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const h = i.length - 1;
    let L = [];
    return (k = e.suppressedData) == null || k.forEach(({ label: F, icon: P }, T) => {
      if (F && P) {
        const _ = {
          datum: F,
          index: h + T,
          text: F,
          icon: /* @__PURE__ */ r.createElement(cS, { color: "#000", size: 15 })
        };
        L.push(_);
      }
    }), [...i, ...L];
  }
  return m(i);
}, Cu = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), dS = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: l, highlight: d, highlightReset: f, seriesHighlight: u, isDraggingAnnotation: m } = se.useContext(xt), { tooltipData: y, showTooltip: x, hideTooltip: b, tooltipOpen: A, tooltipLeft: w, tooltipTop: O } = Zm(), { handleTooltipMouseOver: k, handleTooltipMouseOff: h, TooltipListItem: L } = ny({
    xScale: !1,
    yScale: !1,
    showTooltip: x,
    hideTooltip: b
  }), [F, P] = se.useState(void 0), [T, _] = se.useState(!1), B = Object.values(n.columns).filter((K) => K.showInViz), Y = B.length > 0, X = Y ? "pivotColumn" : void 0, J = se.useMemo(() => {
    if (Y) {
      let K = [];
      const V = n.yAxis.dataKey, we = B.map((Re) => Re.name), Se = [V, ...we], ce = n.xAxis.dataKey;
      return t.forEach((Re) => {
        Se.forEach((je) => {
          const Je = Re[je];
          Je && K.push({
            [X]: Je,
            [ce]: `${Re[ce]} - ${je}`
          });
        });
      }), K;
    }
    return t;
  }, [t, Y]), re = se.useMemo(() => {
    if (Y) {
      const K = {};
      J.forEach((Se) => {
        K[Se[n.xAxis.dataKey]] || (K[Se[n.xAxis.dataKey]] = !0);
      });
      const V = Object.entries(K).length;
      let we = n.customColors || or[n.palette];
      return we = we.slice(0, V), Di({
        domain: Object.keys(K),
        range: we,
        unknown: null
      });
    }
    return a;
  }, [a, Y]), H = se.useRef(), ae = Vf(H, {
    freezeOnceVisible: !1
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && _((V) => !0);
  }), se.useEffect(() => {
    ae != null && ae.isIntersecting && n.animate && !T && setTimeout(() => {
      _(!0);
    }, 500);
  }, [ae == null ? void 0 : ae.isIntersecting, n.animate]);
  const j = ({ arcs: K, path: V, getKey: we }) => {
    const Se = eb(K, we, {
      from: Cu,
      enter: Cu,
      update: Cu,
      leave: Cu
    });
    return se.useEffect(() => {
      const ce = setTimeout(() => {
        b();
      }, 500);
      return () => {
        clearTimeout(ce);
      };
    }, [y]), /* @__PURE__ */ r.createElement(r.Fragment, null, Se.map(({ item: ce, props: Re, key: je }, Je) => /* @__PURE__ */ r.createElement(at, { className: ce.data[n.xAxis.dataKey], key: `${je}-${Je}`, style: { opacity: n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(ce.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      Qp.path,
      {
        d: Xx(
          [Re.startAngle, Re.endAngle],
          (Oe, he) => V({
            ...ce,
            startAngle: Oe,
            endAngle: he
          })
        ),
        fill: re(ce.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Oe) => k(Oe, { data: ce.data[n.runtime.xAxis.dataKey], arc: ce }),
        onMouseLeave: (Oe) => h()
      }
    ))), Se.map(({ item: ce, key: Re }, je) => {
      const [Je, Oe] = V.centroid(ce), he = ce.endAngle - ce.startAngle >= 0.1;
      let Fe = "#FFF";
      return re(ce.data[n.runtime.xAxis.dataKey]) && (Fe = Ko(Fe, re(ce.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ r.createElement(Qp.g, { key: `${Re}${je}` }, he && /* @__PURE__ */ r.createElement(St, { style: { fill: Fe }, x: Je, y: Oe, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ce.endAngle - ce.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [te] = l;
  n && n.legend && !n.legend.hide && i === "lg" && (te = te * 0.73);
  const oe = n.heights.vertical, ne = Math.min(te, oe) / 2, ee = oe / 2, G = n.pieType === "Donut" ? 75 : ne;
  se.useEffect(() => {
    if (u.length > 0 && n.legend.behavior !== "highlight") {
      let K = [];
      J.forEach((V) => {
        u.indexOf(V[n.runtime.xAxis.dataKey]) !== -1 && K.push(V);
      }), P(K);
    } else
      P(void 0);
  }, [u]);
  const Z = cy(n, [], J, re);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Or, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: ne * 2, height: oe, className: `animated-pie group ${n.animate === !1 || T ? "animated" : ""}`, role: "img", "aria-label": pf(n) }, /* @__PURE__ */ r.createElement(at, { top: ee, left: ne }, /* @__PURE__ */ r.createElement(
    f0,
    {
      data: F || J,
      pieValue: (K) => K[X || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ne - G,
      outerRadius: ne
    },
    (K) => /* @__PURE__ */ r.createElement(j, { ...K, getKey: (V) => V.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: H }), !m && y && Object.entries(y.data).length > 0 && A && x && y.dataYPosition && y.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(ty, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: w, top: O }, /* @__PURE__ */ r.createElement("ul", null, typeof y == "object" && Object.entries(y.data).map((K, V) => /* @__PURE__ */ r.createElement(L, { item: K, key: V })))))), /* @__PURE__ */ r.createElement(uy, { config: n, colorScale: re, seriesHighlight: u, highlight: d, highlightReset: f, currentViewport: i, formatLabels: Z }));
};
function Es(e) {
  return e.split("-")[1];
}
function Uf(e) {
  return e === "y" ? "height" : "width";
}
function Fi(e) {
  return e.split("-")[0];
}
function ks(e) {
  return ["top", "bottom"].includes(Fi(e)) ? "x" : "y";
}
function uh(e, t, n) {
  let { reference: a, floating: i } = e;
  const l = a.x + a.width / 2 - i.width / 2, d = a.y + a.height / 2 - i.height / 2, f = ks(t), u = Uf(f), m = a[u] / 2 - i[u] / 2, y = f === "x";
  let x;
  switch (Fi(t)) {
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
  switch (Es(t)) {
    case "start":
      x[f] -= m * (n && y ? -1 : 1);
      break;
    case "end":
      x[f] += m * (n && y ? -1 : 1);
  }
  return x;
}
function dy(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function us(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function fy(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: l, rects: d, elements: f, strategy: u } = e, { boundary: m = "clippingAncestors", rootBoundary: y = "viewport", elementContext: x = "floating", altBoundary: b = !1, padding: A = 0 } = t, w = dy(A), O = f[b ? x === "floating" ? "reference" : "floating" : x], k = us(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(O))) == null || n ? O : O.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(f.floating)), boundary: m, rootBoundary: y, strategy: u })), h = x === "floating" ? { ...d.floating, x: a, y: i } : d.reference, L = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f.floating)), F = await (l.isElement == null ? void 0 : l.isElement(L)) && await (l.getScale == null ? void 0 : l.getScale(L)) || { x: 1, y: 1 }, P = us(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: h, offsetParent: L, strategy: u }) : h);
  return { top: (k.top - P.top + w.top) / F.y, bottom: (P.bottom - k.bottom + w.bottom) / F.y, left: (k.left - P.left + w.left) / F.x, right: (P.right - k.right + w.right) / F.x };
}
const fS = Math.min, pS = Math.max;
function gf(e, t, n) {
  return pS(e, fS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const hS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function cc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hS[t]);
}
function mS(e, t, n) {
  n === void 0 && (n = !1);
  const a = Es(e), i = ks(e), l = Uf(i);
  let d = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (d = cc(d)), { main: d, cross: cc(d) };
}
const yS = { start: "end", end: "start" };
function Id(e) {
  return e.replace(/start|end/g, (t) => yS[t]);
}
const gS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: l, initialPlacement: d, platform: f, elements: u } = t, { mainAxis: m = !0, crossAxis: y = !0, fallbackPlacements: x, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: w = !0, ...O } = e, k = Fi(a), h = Fi(d) === d, L = await (f.isRTL == null ? void 0 : f.isRTL(u.floating)), F = x || (h || !w ? [cc(d)] : function(re) {
      const H = cc(re);
      return [Id(re), H, Id(H)];
    }(d));
    x || A === "none" || F.push(...function(re, H, ae, j) {
      const te = Es(re);
      let oe = function(ne, ee, G) {
        const Z = ["left", "right"], K = ["right", "left"], V = ["top", "bottom"], we = ["bottom", "top"];
        switch (ne) {
          case "top":
          case "bottom":
            return G ? ee ? K : Z : ee ? Z : K;
          case "left":
          case "right":
            return ee ? V : we;
          default:
            return [];
        }
      }(Fi(re), ae === "start", j);
      return te && (oe = oe.map((ne) => ne + "-" + te), H && (oe = oe.concat(oe.map(Id)))), oe;
    }(d, w, A, L));
    const P = [d, ...F], T = await fy(t, O), _ = [];
    let B = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (m && _.push(T[k]), y) {
      const { main: re, cross: H } = mS(a, l, L);
      _.push(T[re], T[H]);
    }
    if (B = [...B, { placement: a, overflows: _ }], !_.every((re) => re <= 0)) {
      var Y, X;
      const re = (((Y = i.flip) == null ? void 0 : Y.index) || 0) + 1, H = P[re];
      if (H)
        return { data: { index: re, overflows: B }, reset: { placement: H } };
      let ae = (X = B.find((j) => j.overflows[0] <= 0)) == null ? void 0 : X.placement;
      if (!ae)
        switch (b) {
          case "bestFit": {
            var J;
            const j = (J = B.map((te) => [te.placement, te.overflows.filter((oe) => oe > 0).reduce((oe, ne) => oe + ne, 0)]).sort((te, oe) => te[1] - oe[1])[0]) == null ? void 0 : J[0];
            j && (ae = j);
            break;
          }
          case "initialPlacement":
            ae = d;
        }
      if (a !== ae)
        return { reset: { placement: ae } };
    }
    return {};
  } };
}, vS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(l, d) {
      const { placement: f, platform: u, elements: m } = l, y = await (u.isRTL == null ? void 0 : u.isRTL(m.floating)), x = Fi(f), b = Es(f), A = ks(f) === "x", w = ["left", "top"].includes(x) ? -1 : 1, O = y && A ? -1 : 1, k = typeof d == "function" ? d(l) : d;
      let { mainAxis: h, crossAxis: L, alignmentAxis: F } = typeof k == "number" ? { mainAxis: k, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...k };
      return b && typeof F == "number" && (L = b === "end" ? -1 * F : F), A ? { x: L * O, y: h * w } : { x: h * w, y: L * O };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, xS = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: l = !0, crossAxis: d = !1, limiter: f = { fn: (k) => {
      let { x: h, y: L } = k;
      return { x: h, y: L };
    } }, ...u } = e, m = { x: n, y: a }, y = await fy(t, u), x = ks(Fi(i)), b = x === "x" ? "y" : "x";
    let A = m[x], w = m[b];
    if (l) {
      const k = x === "y" ? "bottom" : "right";
      A = gf(A + y[x === "y" ? "top" : "left"], A, A - y[k]);
    }
    if (d) {
      const k = b === "y" ? "bottom" : "right";
      w = gf(w + y[b === "y" ? "top" : "left"], w, w - y[k]);
    }
    const O = f.fn({ ...t, [x]: A, [b]: w });
    return { ...O, data: { x: O.x - n, y: O.y - a } };
  } };
};
function kr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yr(e) {
  return kr(e).getComputedStyle(e);
}
const ch = Math.min, cs = Math.max, dc = Math.round;
function py(e) {
  const t = Yr(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, l = e.offsetHeight, d = dc(n) !== i || dc(a) !== l;
  return d && (n = i, a = l), { width: n, height: a, fallback: d };
}
function Ia(e) {
  return my(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Au;
function hy() {
  if (Au)
    return Au;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Au = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Au) : navigator.userAgent;
}
function Xr(e) {
  return e instanceof kr(e).HTMLElement;
}
function Oa(e) {
  return e instanceof kr(e).Element;
}
function my(e) {
  return e instanceof kr(e).Node;
}
function dh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof kr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Cc(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = Yr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function bS(e) {
  return ["table", "td", "th"].includes(Ia(e));
}
function vf(e) {
  const t = /firefox/i.test(hy()), n = Yr(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const l = n.contain;
    return l != null && l.includes(i);
  });
}
function yy() {
  return !/^((?!chrome|android).)*safari/i.test(hy());
}
function Kf(e) {
  return ["html", "body", "#document"].includes(Ia(e));
}
function gy(e) {
  return Oa(e) ? e : e.contextElement;
}
const vy = { x: 1, y: 1 };
function Uo(e) {
  const t = gy(e);
  if (!Xr(t))
    return vy;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: l } = py(t);
  let d = (l ? dc(n.width) : n.width) / a, f = (l ? dc(n.height) : n.height) / i;
  return d && Number.isFinite(d) || (d = 1), f && Number.isFinite(f) || (f = 1), { x: d, y: f };
}
function xs(e, t, n, a) {
  var i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const d = e.getBoundingClientRect(), f = gy(e);
  let u = vy;
  t && (a ? Oa(a) && (u = Uo(a)) : u = Uo(e));
  const m = f ? kr(f) : window, y = !yy() && n;
  let x = (d.left + (y && ((i = m.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / u.x, b = (d.top + (y && ((l = m.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / u.y, A = d.width / u.x, w = d.height / u.y;
  if (f) {
    const O = kr(f), k = a && Oa(a) ? kr(a) : a;
    let h = O.frameElement;
    for (; h && a && k !== O; ) {
      const L = Uo(h), F = h.getBoundingClientRect(), P = getComputedStyle(h);
      F.x += (h.clientLeft + parseFloat(P.paddingLeft)) * L.x, F.y += (h.clientTop + parseFloat(P.paddingTop)) * L.y, x *= L.x, b *= L.y, A *= L.x, w *= L.y, x += F.x, b += F.y, h = kr(h).frameElement;
    }
  }
  return { width: A, height: w, top: b, right: x + A, bottom: b + w, left: x, x, y: b };
}
function Fa(e) {
  return ((my(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ac(e) {
  return Oa(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function xy(e) {
  return xs(Fa(e)).left + Ac(e).scrollLeft;
}
function bs(e) {
  if (Ia(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || dh(e) && e.host || Fa(e);
  return dh(t) ? t.host : t;
}
function by(e) {
  const t = bs(e);
  return Kf(t) ? t.ownerDocument.body : Xr(t) && Cc(t) ? t : by(t);
}
function Sy(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = by(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = kr(a);
  return i ? t.concat(l, l.visualViewport || [], Cc(a) ? a : []) : t.concat(a, Sy(a));
}
function fh(e, t, n) {
  return t === "viewport" ? us(function(a, i) {
    const l = kr(a), d = Fa(a), f = l.visualViewport;
    let u = d.clientWidth, m = d.clientHeight, y = 0, x = 0;
    if (f) {
      u = f.width, m = f.height;
      const b = yy();
      (b || !b && i === "fixed") && (y = f.offsetLeft, x = f.offsetTop);
    }
    return { width: u, height: m, x: y, y: x };
  }(e, n)) : Oa(t) ? us(function(a, i) {
    const l = xs(a, !0, i === "fixed"), d = l.top + a.clientTop, f = l.left + a.clientLeft, u = Xr(a) ? Uo(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * u.x, height: a.clientHeight * u.y, x: f * u.x, y: d * u.y };
  }(t, n)) : us(function(a) {
    const i = Fa(a), l = Ac(a), d = a.ownerDocument.body, f = cs(i.scrollWidth, i.clientWidth, d.scrollWidth, d.clientWidth), u = cs(i.scrollHeight, i.clientHeight, d.scrollHeight, d.clientHeight);
    let m = -l.scrollLeft + xy(a);
    const y = -l.scrollTop;
    return Yr(d).direction === "rtl" && (m += cs(i.clientWidth, d.clientWidth) - f), { width: f, height: u, x: m, y };
  }(Fa(e)));
}
function ph(e) {
  return Xr(e) && Yr(e).position !== "fixed" ? e.offsetParent : null;
}
function hh(e) {
  const t = kr(e);
  let n = ph(e);
  for (; n && bS(n) && Yr(n).position === "static"; )
    n = ph(n);
  return n && (Ia(n) === "html" || Ia(n) === "body" && Yr(n).position === "static" && !vf(n)) ? t : n || function(a) {
    let i = bs(a);
    for (; Xr(i) && !Kf(i); ) {
      if (vf(i))
        return i;
      i = bs(i);
    }
    return null;
  }(e) || t;
}
function SS(e, t, n) {
  const a = Xr(t), i = Fa(t), l = xs(e, !0, n === "fixed", t);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const f = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((Ia(t) !== "body" || Cc(i)) && (d = Ac(t)), Xr(t)) {
      const u = xs(t, !0);
      f.x = u.x + t.clientLeft, f.y = u.y + t.clientTop;
    } else
      i && (f.x = xy(i));
  return { x: l.left + d.scrollLeft - f.x, y: l.top + d.scrollTop - f.y, width: l.width, height: l.height };
}
const ES = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const l = n === "clippingAncestors" ? function(m, y) {
    const x = y.get(m);
    if (x)
      return x;
    let b = Sy(m).filter((k) => Oa(k) && Ia(k) !== "body"), A = null;
    const w = Yr(m).position === "fixed";
    let O = w ? bs(m) : m;
    for (; Oa(O) && !Kf(O); ) {
      const k = Yr(O), h = vf(O);
      (w ? h || A : h || k.position !== "static" || !A || !["absolute", "fixed"].includes(A.position)) ? A = k : b = b.filter((L) => L !== O), O = bs(O);
    }
    return y.set(m, b), b;
  }(t, this._c) : [].concat(n), d = [...l, a], f = d[0], u = d.reduce((m, y) => {
    const x = fh(t, y, i);
    return m.top = cs(x.top, m.top), m.right = ch(x.right, m.right), m.bottom = ch(x.bottom, m.bottom), m.left = cs(x.left, m.left), m;
  }, fh(t, f, i));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Xr(n), l = Fa(n);
  if (n === l)
    return t;
  let d = { scrollLeft: 0, scrollTop: 0 }, f = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((Ia(n) !== "body" || Cc(l)) && (d = Ac(n)), Xr(n))) {
    const m = xs(n);
    f = Uo(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  return { width: t.width * f.x, height: t.height * f.y, x: t.x * f.x - d.scrollLeft * f.x + u.x, y: t.y * f.y - d.scrollTop * f.y + u.y };
}, isElement: Oa, getDimensions: function(e) {
  return Xr(e) ? py(e) : e.getBoundingClientRect();
}, getOffsetParent: hh, getDocumentElement: Fa, getScale: Uo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || hh, l = this.getDimensions;
  return { reference: SS(t, await i(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yr(e).direction === "rtl" }, mh = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: ES, ...n }, l = { ...i.platform, _c: a };
  return (async (d, f, u) => {
    const { placement: m = "bottom", strategy: y = "absolute", middleware: x = [], platform: b } = u, A = x.filter(Boolean), w = await (b.isRTL == null ? void 0 : b.isRTL(f));
    if (b == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), A.filter((T) => {
      let { name: _ } = T;
      return _ === "autoPlacement" || _ === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    d && f || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let O = await b.getElementRects({ reference: d, floating: f, strategy: y }), { x: k, y: h } = uh(O, m, w), L = m, F = {}, P = 0;
    for (let T = 0; T < A.length; T++) {
      const { name: _, fn: B } = A[T], { x: Y, y: X, data: J, reset: re } = await B({ x: k, y: h, initialPlacement: m, placement: L, strategy: y, middlewareData: F, rects: O, platform: b, elements: { reference: d, floating: f } });
      k = Y ?? k, h = X ?? h, F = { ...F, [_]: { ...F[_], ...J } }, P > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), re && P <= 50 && (P++, typeof re == "object" && (re.placement && (L = re.placement), re.rects && (O = re.rects === !0 ? await b.getElementRects({ reference: d, floating: f, strategy: y }) : re.rects), { x: k, y: h } = uh(O, L, w)), T = -1);
    }
    return { x: k, y: h, placement: L, strategy: y, middlewareData: F };
  })(e, t, { ...i, platform: l });
};
var _a, Mi = { exports: {} }, yh = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
_a = yh, function() {
  var e = r, t = 60103, n = 60106;
  _a.Fragment = 60107;
  var a = 60108, i = 60114, l = 60109, d = 60110, f = 60112, u = 60113, m = 60120, y = 60115, x = 60116, b = 60121, A = 60122, w = 60117, O = 60129, k = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    t = h("react.element"), n = h("react.portal"), _a.Fragment = h("react.fragment"), a = h("react.strict_mode"), i = h("react.profiler"), l = h("react.provider"), d = h("react.context"), f = h("react.forward_ref"), u = h("react.suspense"), m = h("react.suspense_list"), y = h("react.memo"), x = h("react.lazy"), b = h("react.block"), A = h("react.server.block"), w = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), O = h("react.debug_trace_mode"), h("react.offscreen"), k = h("react.legacy_hidden");
  }
  var L = typeof Symbol == "function" && Symbol.iterator, F = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function P(he) {
    for (var Fe = arguments.length, le = new Array(Fe > 1 ? Fe - 1 : 0), ue = 1; ue < Fe; ue++)
      le[ue - 1] = arguments[ue];
    T("error", he, le);
  }
  function T(he, Fe, le) {
    var ue = F.ReactDebugCurrentFrame, Ae = "";
    if (X) {
      var $e = B(X.type), De = X._owner;
      Ae += function(qe, yt, nt) {
        var Ve = "";
        if (yt) {
          var ze = yt.fileName, Te = ze.replace(_, "");
          if (/^index\./.test(Te)) {
            var Ye = ze.match(_);
            if (Ye) {
              var Qe = Ye[1];
              Qe && (Te = Qe.replace(_, "") + "/" + Te);
            }
          }
          Ve = " (at " + Te + ":" + yt.lineNumber + ")";
        } else
          nt && (Ve = " (created by " + nt + ")");
        return `
    in ` + (qe || "Unknown") + Ve;
      }($e, X._source, De && B(De.type));
    }
    (Ae += ue.getStackAddendum()) !== "" && (Fe += "%s", le = le.concat([Ae]));
    var Ze = le.map(function(qe) {
      return "" + qe;
    });
    Ze.unshift("Warning: " + Fe), Function.prototype.apply.call(console[he], console, Ze);
  }
  var _ = /^(.*)[\\\/]/;
  function B(he) {
    if (he == null)
      return null;
    if (typeof he.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof he == "function")
      return he.displayName || he.name || null;
    if (typeof he == "string")
      return he;
    switch (he) {
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
    if (typeof he == "object")
      switch (he.$$typeof) {
        case d:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case f:
          return ue = he, Ae = he.render, $e = "ForwardRef", De = Ae.displayName || Ae.name || "", ue.displayName || (De !== "" ? $e + "(" + De + ")" : $e);
        case y:
          return B(he.type);
        case b:
          return B(he.render);
        case x:
          var Fe = (le = he)._status === 1 ? le._result : null;
          if (Fe)
            return B(Fe);
      }
    var le, ue, Ae, $e, De;
    return null;
  }
  var Y = {};
  F.ReactDebugCurrentFrame;
  var X = null;
  function J(he) {
    X = he;
  }
  var re, H, ae, j = F.ReactCurrentOwner, te = Object.prototype.hasOwnProperty, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(he, Fe, le, ue, Ae) {
    var $e, De = {}, Ze = null, qe = null;
    for ($e in le !== void 0 && (Ze = "" + le), function(Ve) {
      if (te.call(Ve, "key")) {
        var ze = Object.getOwnPropertyDescriptor(Ve, "key").get;
        if (ze && ze.isReactWarning)
          return !1;
      }
      return Ve.key !== void 0;
    }(Fe) && (Ze = "" + Fe.key), function(Ve) {
      if (te.call(Ve, "ref")) {
        var ze = Object.getOwnPropertyDescriptor(Ve, "ref").get;
        if (ze && ze.isReactWarning)
          return !1;
      }
      return Ve.ref !== void 0;
    }(Fe) && (qe = Fe.ref, function(Ve, ze) {
      if (typeof Ve.ref == "string" && j.current && ze && j.current.stateNode !== ze) {
        var Te = B(j.current.type);
        ae[Te] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(j.current.type), Ve.ref), ae[Te] = !0);
      }
    }(Fe, Ae)), Fe)
      te.call(Fe, $e) && !oe.hasOwnProperty($e) && (De[$e] = Fe[$e]);
    if (he && he.defaultProps) {
      var yt = he.defaultProps;
      for ($e in yt)
        De[$e] === void 0 && (De[$e] = yt[$e]);
    }
    if (Ze || qe) {
      var nt = typeof he == "function" ? he.displayName || he.name || "Unknown" : he;
      Ze && function(Ve, ze) {
        var Te = function() {
          re || (re = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ze));
        };
        Te.isReactWarning = !0, Object.defineProperty(Ve, "key", { get: Te, configurable: !0 });
      }(De, nt), qe && function(Ve, ze) {
        var Te = function() {
          H || (H = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ze));
        };
        Te.isReactWarning = !0, Object.defineProperty(Ve, "ref", { get: Te, configurable: !0 });
      }(De, nt);
    }
    return function(Ve, ze, Te, Ye, Qe, ft, bt) {
      var gt = { $$typeof: t, type: Ve, key: ze, ref: Te, props: bt, _owner: ft, _store: {} };
      return Object.defineProperty(gt._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(gt, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Ye }), Object.defineProperty(gt, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Qe }), Object.freeze && (Object.freeze(gt.props), Object.freeze(gt)), gt;
    }(he, Ze, qe, Ae, ue, j.current, De);
  }
  ae = {};
  var ee, G = F.ReactCurrentOwner;
  function Z(he) {
    X = he;
  }
  function K(he) {
    return typeof he == "object" && he !== null && he.$$typeof === t;
  }
  function V() {
    if (G.current) {
      var he = B(G.current.type);
      if (he)
        return `

Check the render method of \`` + he + "`.";
    }
    return "";
  }
  F.ReactDebugCurrentFrame, ee = !1;
  var we = {};
  function Se(he, Fe) {
    if (he._store && !he._store.validated && he.key == null) {
      he._store.validated = !0;
      var le = function(Ae) {
        var $e = V();
        if (!$e) {
          var De = typeof Ae == "string" ? Ae : Ae.displayName || Ae.name;
          De && ($e = `

Check the top-level render call using <` + De + ">.");
        }
        return $e;
      }(Fe);
      if (!we[le]) {
        we[le] = !0;
        var ue = "";
        he && he._owner && he._owner !== G.current && (ue = " It was passed a child from " + B(he._owner.type) + "."), Z(he), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, ue), Z(null);
      }
    }
  }
  function ce(he, Fe) {
    if (typeof he == "object") {
      if (Array.isArray(he))
        for (var le = 0; le < he.length; le++) {
          var ue = he[le];
          K(ue) && Se(ue, Fe);
        }
      else if (K(he))
        he._store && (he._store.validated = !0);
      else if (he) {
        var Ae = function(Ze) {
          if (Ze === null || typeof Ze != "object")
            return null;
          var qe = L && Ze[L] || Ze["@@iterator"];
          return typeof qe == "function" ? qe : null;
        }(he);
        if (typeof Ae == "function" && Ae !== he.entries)
          for (var $e, De = Ae.call(he); !($e = De.next()).done; )
            K($e.value) && Se($e.value, Fe);
      }
    }
  }
  function Re(he) {
    var Fe, le = he.type;
    if (le != null && typeof le != "string") {
      if (typeof le == "function")
        Fe = le.propTypes;
      else {
        if (typeof le != "object" || le.$$typeof !== f && le.$$typeof !== y)
          return;
        Fe = le.propTypes;
      }
      if (Fe) {
        var ue = B(le);
        (function(Ae, $e, De, Ze, qe) {
          var yt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var nt in Ae)
            if (yt(Ae, nt)) {
              var Ve = void 0;
              try {
                if (typeof Ae[nt] != "function") {
                  var ze = Error((Ze || "React class") + ": " + De + " type `" + nt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Ae[nt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ze.name = "Invariant Violation", ze;
                }
                Ve = Ae[nt]($e, nt, Ze, De, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Te) {
                Ve = Te;
              }
              !Ve || Ve instanceof Error || (J(qe), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ze || "React class", De, nt, typeof Ve), J(null)), Ve instanceof Error && !(Ve.message in Y) && (Y[Ve.message] = !0, J(qe), P("Failed %s type: %s", De, Ve.message), J(null));
            }
        })(Fe, he.props, "prop", ue, he);
      } else
        le.PropTypes === void 0 || ee || (ee = !0, P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B(le) || "Unknown"));
      typeof le.getDefaultProps != "function" || le.getDefaultProps.isReactClassApproved || P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function je(he, Fe, le, ue, Ae, $e) {
    var De = function(Te) {
      return typeof Te == "string" || typeof Te == "function" || Te === _a.Fragment || Te === i || Te === O || Te === a || Te === u || Te === m || Te === k || typeof Te == "object" && Te !== null && (Te.$$typeof === x || Te.$$typeof === y || Te.$$typeof === l || Te.$$typeof === d || Te.$$typeof === f || Te.$$typeof === w || Te.$$typeof === b || Te[0] === A);
    }(he);
    if (!De) {
      var Ze = "";
      (he === void 0 || typeof he == "object" && he !== null && Object.keys(he).length === 0) && (Ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var qe, yt = function(Te) {
        return Te !== void 0 ? `

Check your code at ` + Te.fileName.replace(/^.*[\\\/]/, "") + ":" + Te.lineNumber + "." : "";
      }(Ae);
      Ze += yt || V(), he === null ? qe = "null" : Array.isArray(he) ? qe = "array" : he !== void 0 && he.$$typeof === t ? (qe = "<" + (B(he.type) || "Unknown") + " />", Ze = " Did you accidentally export a JSX literal instead of a component?") : qe = typeof he, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qe, Ze);
    }
    var nt = ne(he, Fe, le, Ae, $e);
    if (nt == null)
      return nt;
    if (De) {
      var Ve = Fe.children;
      if (Ve !== void 0)
        if (ue)
          if (Array.isArray(Ve)) {
            for (var ze = 0; ze < Ve.length; ze++)
              ce(Ve[ze], he);
            Object.freeze && Object.freeze(Ve);
          } else
            P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ce(Ve, he);
    }
    return he === _a.Fragment ? function(Te) {
      for (var Ye = Object.keys(Te.props), Qe = 0; Qe < Ye.length; Qe++) {
        var ft = Ye[Qe];
        if (ft !== "children" && ft !== "key") {
          Z(Te), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ft), Z(null);
          break;
        }
      }
      Te.ref !== null && (Z(Te), P("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
    }(nt) : Re(nt), nt;
  }
  var Je = function(he, Fe, le) {
    return je(he, Fe, le, !1);
  }, Oe = function(he, Fe, le) {
    return je(he, Fe, le, !0);
  };
  _a.jsx = Je, _a.jsxs = Oe;
}(), Mi.exports = yh;
var Bd, Ey = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Bd = Ey, function() {
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
  Bd.exports ? (t.default = t, Bd.exports = t) : window.classNames = t;
}();
var gh = Ey.exports;
const vh = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, kS = ({ content: e }) => Mi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), wS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, TS = se.createContext({ getTooltipData: () => wS });
function ky(e = "DEFAULT_TOOLTIP_ID") {
  return se.useContext(TS).getTooltipData(e);
}
const xh = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: l = "absolute", middlewares: d = [vS(Number(i)), gS(), xS({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const f = d;
  return n ? (f.push({ name: "arrow", options: u = { element: n, padding: 5 }, async fn(m) {
    const { element: y, padding: x = 0 } = u || {}, { x: b, y: A, placement: w, rects: O, platform: k } = m;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const h = dy(x), L = { x: b, y: A }, F = ks(w), P = Uf(F), T = await k.getDimensions(y), _ = F === "y" ? "top" : "left", B = F === "y" ? "bottom" : "right", Y = O.reference[P] + O.reference[F] - L[F] - O.floating[P], X = L[F] - O.reference[F], J = await (k.getOffsetParent == null ? void 0 : k.getOffsetParent(y));
    let re = J ? F === "y" ? J.clientHeight || 0 : J.clientWidth || 0 : 0;
    re === 0 && (re = O.floating[P]);
    const H = Y / 2 - X / 2, ae = h[_], j = re - T[P] - h[B], te = re / 2 - T[P] / 2 + H, oe = gf(ae, te, j), ne = Es(w) != null && te != oe && O.reference[P] / 2 - (te < ae ? h[_] : h[B]) - T[P] / 2 < 0;
    return { [F]: L[F] - (ne ? te < ae ? ae - te : j - te : 0), data: { [F]: oe, centerOffset: te - oe } };
  } }), mh(e, t, { placement: a, strategy: l, middleware: f }).then(({ x: m, y, placement: x, middlewareData: b }) => {
    var A, w;
    const O = { left: `${m}px`, top: `${y}px` }, { x: k, y: h } = (A = b.arrow) !== null && A !== void 0 ? A : { x: 0, y: 0 };
    return { tooltipStyles: O, tooltipArrowStyles: { left: k != null ? `${k}px` : "", top: h != null ? `${h}px` : "", right: "", bottom: "", [(w = { top: "bottom", right: "left", bottom: "top", left: "right" }[x.split("-")[0]]) !== null && w !== void 0 ? w : "bottom"]: "-4px" } };
  })) : mh(e, t, { placement: "bottom", strategy: l, middleware: f }).then(({ x: m, y }) => ({ tooltipStyles: { left: `${m}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var u;
};
var Ti = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const bh = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: l, place: d = "top", offset: f = 10, events: u = ["hover"], positionStrategy: m = "absolute", middlewares: y, wrapper: x, children: b = null, delayShow: A = 0, delayHide: w = 0, float: O = !1, noArrow: k = !1, clickable: h = !1, closeOnEsc: L = !1, style: F, position: P, afterShow: T, afterHide: _, content: B, html: Y, isOpen: X, setIsOpen: J, activeAnchor: re, setActiveAnchor: H }) => {
  const ae = se.useRef(null), j = se.useRef(null), te = se.useRef(null), oe = se.useRef(null), [ne, ee] = se.useState({}), [G, Z] = se.useState({}), [K, V] = se.useState(!1), [we, Se] = se.useState(!1), ce = se.useRef(!1), Re = se.useRef(null), { anchorRefs: je, setActiveAnchor: Je } = ky(e), Oe = se.useRef(!1), [he, Fe] = se.useState([]), le = se.useRef(!1);
  se.useLayoutEffect(() => (le.current = !0, () => {
    le.current = !1;
  }), []), se.useEffect(() => {
    if (!K) {
      const Qe = setTimeout(() => {
        Se(!1);
      }, 150);
      return () => {
        clearTimeout(Qe);
      };
    }
    return () => null;
  }, [K]);
  const ue = (Qe) => {
    le.current && (Qe && Se(!0), setTimeout(() => {
      le.current && (J == null || J(Qe), X === void 0 && V(Qe));
    }, 10));
  };
  se.useEffect(() => {
    if (X === void 0)
      return () => null;
    X && Se(!0);
    const Qe = setTimeout(() => {
      V(X);
    }, 10);
    return () => {
      clearTimeout(Qe);
    };
  }, [X]), se.useEffect(() => {
    K !== ce.current && (ce.current = K, K ? T == null || T() : _ == null || _());
  }, [K]);
  const Ae = (Qe = w) => {
    oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
      Oe.current || ue(!1);
    }, Qe);
  }, $e = (Qe) => {
    var ft;
    if (!Qe)
      return;
    A ? (te.current && clearTimeout(te.current), te.current = setTimeout(() => {
      ue(!0);
    }, A)) : ue(!0);
    const bt = (ft = Qe.currentTarget) !== null && ft !== void 0 ? ft : Qe.target;
    H(bt), Je({ current: bt }), oe.current && clearTimeout(oe.current);
  }, De = () => {
    h ? Ae(w || 100) : w ? Ae() : ue(!1), te.current && clearTimeout(te.current);
  }, Ze = ({ x: Qe, y: ft }) => {
    xh({ place: d, offset: f, elementReference: { getBoundingClientRect: () => ({ x: Qe, y: ft, width: 0, height: 0, top: ft, left: Qe, right: Qe, bottom: ft }) }, tooltipReference: ae.current, tooltipArrowReference: j.current, strategy: m, middlewares: y }).then((bt) => {
      Object.keys(bt.tooltipStyles).length && ee(bt.tooltipStyles), Object.keys(bt.tooltipArrowStyles).length && Z(bt.tooltipArrowStyles);
    });
  }, qe = (Qe) => {
    if (!Qe)
      return;
    const ft = Qe, bt = { x: ft.clientX, y: ft.clientY };
    Ze(bt), Re.current = bt;
  }, yt = (Qe) => {
    $e(Qe), w && Ae();
  }, nt = (Qe) => {
    const ft = document.querySelector(`[id='${i}']`);
    ft != null && ft.contains(Qe.target) || he.some((bt) => bt.contains(Qe.target)) || ue(!1);
  }, Ve = (Qe) => {
    Qe.key === "Escape" && ue(!1);
  }, ze = vh($e, 50), Te = vh(De, 50);
  se.useEffect(() => {
    var Qe, ft;
    const bt = new Set(je);
    he.forEach((Ut) => {
      bt.add({ current: Ut });
    });
    const gt = document.querySelector(`[id='${i}']`);
    gt && bt.add({ current: gt }), L && window.addEventListener("keydown", Ve);
    const Mt = [];
    u.find((Ut) => Ut === "click") && (window.addEventListener("click", nt), Mt.push({ event: "click", listener: yt })), u.find((Ut) => Ut === "hover") && (Mt.push({ event: "mouseenter", listener: ze }, { event: "mouseleave", listener: Te }, { event: "focus", listener: ze }, { event: "blur", listener: Te }), O && Mt.push({ event: "mousemove", listener: qe }));
    const Zt = () => {
      Oe.current = !0;
    }, an = () => {
      Oe.current = !1, De();
    };
    return h && ((Qe = ae.current) === null || Qe === void 0 || Qe.addEventListener("mouseenter", Zt), (ft = ae.current) === null || ft === void 0 || ft.addEventListener("mouseleave", an)), Mt.forEach(({ event: Ut, listener: Qt }) => {
      bt.forEach((zt) => {
        var un;
        (un = zt.current) === null || un === void 0 || un.addEventListener(Ut, Qt);
      });
    }), () => {
      var Ut, Qt;
      u.find((zt) => zt === "click") && window.removeEventListener("click", nt), L && window.removeEventListener("keydown", Ve), h && ((Ut = ae.current) === null || Ut === void 0 || Ut.removeEventListener("mouseenter", Zt), (Qt = ae.current) === null || Qt === void 0 || Qt.removeEventListener("mouseleave", an)), Mt.forEach(({ event: zt, listener: un }) => {
        bt.forEach((At) => {
          var Rt;
          (Rt = At.current) === null || Rt === void 0 || Rt.removeEventListener(zt, un);
        });
      });
    };
  }, [we, je, he, L, u]), se.useEffect(() => {
    let Qe = l ?? "";
    !Qe && e && (Qe = `[data-tooltip-id='${e}']`);
    const ft = new MutationObserver((bt) => {
      const gt = [];
      bt.forEach((Mt) => {
        if (Mt.type === "attributes" && Mt.attributeName === "data-tooltip-id" && Mt.target.getAttribute("data-tooltip-id") === e && gt.push(Mt.target), Mt.type === "childList" && (re && [...Mt.removedNodes].some((Zt) => !!Zt.contains(re) && (Se(!1), ue(!1), H(null), !0)), Qe))
          try {
            const Zt = [...Mt.addedNodes].filter((an) => an.nodeType === 1);
            gt.push(...Zt.filter((an) => an.matches(Qe))), gt.push(...Zt.flatMap((an) => [...an.querySelectorAll(Qe)]));
          } catch {
          }
      }), gt.length && Fe((Mt) => [...Mt, ...gt]);
    });
    return ft.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      ft.disconnect();
    };
  }, [e, l, re]), se.useEffect(() => {
    P ? Ze(P) : O ? Re.current && Ze(Re.current) : xh({ place: d, offset: f, elementReference: re, tooltipReference: ae.current, tooltipArrowReference: j.current, strategy: m, middlewares: y }).then((Qe) => {
      le.current && (Object.keys(Qe.tooltipStyles).length && ee(Qe.tooltipStyles), Object.keys(Qe.tooltipArrowStyles).length && Z(Qe.tooltipArrowStyles));
    });
  }, [K, re, B, Y, d, f, m, P]), se.useEffect(() => {
    var Qe;
    const ft = document.querySelector(`[id='${i}']`), bt = [...he, ft];
    re && bt.includes(re) || H((Qe = he[0]) !== null && Qe !== void 0 ? Qe : ft);
  }, [i, he, re]), se.useEffect(() => () => {
    te.current && clearTimeout(te.current), oe.current && clearTimeout(oe.current);
  }, []), se.useEffect(() => {
    let Qe = l;
    if (!Qe && e && (Qe = `[data-tooltip-id='${e}']`), Qe)
      try {
        const ft = Array.from(document.querySelectorAll(Qe));
        Fe(ft);
      } catch {
        Fe([]);
      }
  }, [e, l]);
  const Ye = !!(Y || B || b) && K && Object.keys(ne).length > 0;
  return we ? Mi.exports.jsxs(x, { id: e, role: "tooltip", className: gh("react-tooltip", Ti.tooltip, Ti[a], t, { [Ti.show]: Ye, [Ti.fixed]: m === "fixed", [Ti.clickable]: h }), style: { ...F, ...ne }, ref: ae, children: [Y && Mi.exports.jsx(kS, { content: Y }) || B || b, Mi.exports.jsx(x, { className: gh("react-tooltip-arrow", Ti.arrow, n, { [Ti["no-arrow"]]: k }), style: G, ref: j })] }) : null;
}, wy = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: l, classNameArrow: d, variant: f = "dark", place: u = "top", offset: m = 10, wrapper: y = "div", children: x = null, events: b = ["hover"], positionStrategy: A = "absolute", middlewares: w, delayShow: O = 0, delayHide: k = 0, float: h = !1, noArrow: L = !1, clickable: F = !1, closeOnEsc: P = !1, style: T, position: _, isOpen: B, setIsOpen: Y, afterShow: X, afterHide: J }) => {
  const [re, H] = se.useState(a), [ae, j] = se.useState(i), [te, oe] = se.useState(u), [ne, ee] = se.useState(f), [G, Z] = se.useState(m), [K, V] = se.useState(O), [we, Se] = se.useState(k), [ce, Re] = se.useState(h), [je, Je] = se.useState(y), [Oe, he] = se.useState(b), [Fe, le] = se.useState(A), [ue, Ae] = se.useState(null), { anchorRefs: $e, activeAnchor: De } = ky(e), Ze = (nt) => nt == null ? void 0 : nt.getAttributeNames().reduce((Ve, ze) => {
    var Te;
    return ze.startsWith("data-tooltip-") && (Ve[ze.replace(/^data-tooltip-/, "")] = (Te = nt == null ? void 0 : nt.getAttribute(ze)) !== null && Te !== void 0 ? Te : null), Ve;
  }, {}), qe = (nt) => {
    const Ve = { place: (ze) => {
      var Te;
      oe((Te = ze) !== null && Te !== void 0 ? Te : u);
    }, content: (ze) => {
      H(ze ?? a);
    }, html: (ze) => {
      j(ze ?? i);
    }, variant: (ze) => {
      var Te;
      ee((Te = ze) !== null && Te !== void 0 ? Te : f);
    }, offset: (ze) => {
      Z(ze === null ? m : Number(ze));
    }, wrapper: (ze) => {
      var Te;
      Je((Te = ze) !== null && Te !== void 0 ? Te : y);
    }, events: (ze) => {
      const Te = ze == null ? void 0 : ze.split(" ");
      he(Te ?? b);
    }, "position-strategy": (ze) => {
      var Te;
      le((Te = ze) !== null && Te !== void 0 ? Te : A);
    }, "delay-show": (ze) => {
      V(ze === null ? O : Number(ze));
    }, "delay-hide": (ze) => {
      Se(ze === null ? k : Number(ze));
    }, float: (ze) => {
      Re(ze === null ? h : !!ze);
    } };
    Object.values(Ve).forEach((ze) => ze(null)), Object.entries(nt).forEach(([ze, Te]) => {
      var Ye;
      (Ye = Ve[ze]) === null || Ye === void 0 || Ye.call(Ve, Te);
    });
  };
  se.useEffect(() => {
    H(a);
  }, [a]), se.useEffect(() => {
    j(i);
  }, [i]), se.useEffect(() => {
    oe(u);
  }, [u]), se.useEffect(() => {
    var nt;
    const Ve = new Set($e);
    let ze = n;
    if (!ze && e && (ze = `[data-tooltip-id='${e}']`), ze)
      try {
        document.querySelectorAll(ze).forEach((bt) => {
          Ve.add({ current: bt });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const Te = document.querySelector(`[id='${t}']`);
    if (Te && Ve.add({ current: Te }), !Ve.size)
      return () => null;
    const Ye = (nt = ue ?? Te) !== null && nt !== void 0 ? nt : De.current, Qe = new MutationObserver((bt) => {
      bt.forEach((gt) => {
        var Mt;
        if (!Ye || gt.type !== "attributes" || !(!((Mt = gt.attributeName) === null || Mt === void 0) && Mt.startsWith("data-tooltip-")))
          return;
        const Zt = Ze(Ye);
        qe(Zt);
      });
    }), ft = { attributes: !0, childList: !1, subtree: !1 };
    if (Ye) {
      const bt = Ze(Ye);
      qe(bt), Qe.observe(Ye, ft);
    }
    return () => {
      Qe.disconnect();
    };
  }, [$e, De, ue, t, n]);
  const yt = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: d, content: re, html: ae, place: te, variant: ne, offset: G, wrapper: je, events: Oe, positionStrategy: Fe, middlewares: w, delayShow: K, delayHide: we, float: ce, noArrow: L, clickable: F, closeOnEsc: P, style: T, position: _, isOpen: B, setIsOpen: Y, afterShow: X, afterHide: J, activeAnchor: ue, setActiveAnchor: (nt) => Ae(nt) };
  return x ? Mi.exports.jsx(bh, { ...yt, children: x }) : Mi.exports.jsx(bh, { ...yt });
};
function Sh(e, t) {
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
function CS(e, t) {
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
function Hd(e, t) {
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
function AS(e) {
  return e.depth;
}
function LS(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Lu(e) {
  return function() {
    return e;
  };
}
function Eh(e, t) {
  return fc(e.source, t.source) || e.index - t.index;
}
function kh(e, t) {
  return fc(e.target, t.target) || e.index - t.index;
}
function fc(e, t) {
  return e.y0 - t.y0;
}
function Wd(e) {
  return e.value;
}
function PS(e) {
  return e.index;
}
function RS(e) {
  return e.nodes;
}
function DS(e) {
  return e.links;
}
function wh(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function Th({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, a = n;
    for (const i of t.sourceLinks)
      i.y0 = n + i.width / 2, n += i.width;
    for (const i of t.targetLinks)
      i.y1 = a + i.width / 2, a += i.width;
  }
}
function _S() {
  let e = 0, t = 0, n = 1, a = 1, i = 24, l = 8, d, f = PS, u = LS, m, y, x = RS, b = DS, A = 6;
  function w() {
    const te = { nodes: x.apply(null, arguments), links: b.apply(null, arguments) };
    return O(te), k(te), h(te), L(te), T(te), Th(te), te;
  }
  w.update = function(te) {
    return Th(te), te;
  }, w.nodeId = function(te) {
    return arguments.length ? (f = typeof te == "function" ? te : Lu(te), w) : f;
  }, w.nodeAlign = function(te) {
    return arguments.length ? (u = typeof te == "function" ? te : Lu(te), w) : u;
  }, w.nodeSort = function(te) {
    return arguments.length ? (m = te, w) : m;
  }, w.nodeWidth = function(te) {
    return arguments.length ? (i = +te, w) : i;
  }, w.nodePadding = function(te) {
    return arguments.length ? (l = d = +te, w) : l;
  }, w.nodes = function(te) {
    return arguments.length ? (x = typeof te == "function" ? te : Lu(te), w) : x;
  }, w.links = function(te) {
    return arguments.length ? (b = typeof te == "function" ? te : Lu(te), w) : b;
  }, w.linkSort = function(te) {
    return arguments.length ? (y = te, w) : y;
  }, w.size = function(te) {
    return arguments.length ? (e = t = 0, n = +te[0], a = +te[1], w) : [n - e, a - t];
  }, w.extent = function(te) {
    return arguments.length ? (e = +te[0][0], n = +te[1][0], t = +te[0][1], a = +te[1][1], w) : [[e, t], [n, a]];
  }, w.iterations = function(te) {
    return arguments.length ? (A = +te, w) : A;
  };
  function O({ nodes: te, links: oe }) {
    for (const [ee, G] of te.entries())
      G.index = ee, G.sourceLinks = [], G.targetLinks = [];
    const ne = new Map(te.map((ee, G) => [f(ee, G, te), ee]));
    for (const [ee, G] of oe.entries()) {
      G.index = ee;
      let { source: Z, target: K } = G;
      typeof Z != "object" && (Z = G.source = wh(ne, Z)), typeof K != "object" && (K = G.target = wh(ne, K)), Z.sourceLinks.push(G), K.targetLinks.push(G);
    }
    if (y != null)
      for (const { sourceLinks: ee, targetLinks: G } of te)
        ee.sort(y), G.sort(y);
  }
  function k({ nodes: te }) {
    for (const oe of te)
      oe.value = oe.fixedValue === void 0 ? Math.max(Hd(oe.sourceLinks, Wd), Hd(oe.targetLinks, Wd)) : oe.fixedValue;
  }
  function h({ nodes: te }) {
    const oe = te.length;
    let ne = new Set(te), ee = /* @__PURE__ */ new Set(), G = 0;
    for (; ne.size; ) {
      for (const Z of ne) {
        Z.depth = G;
        for (const { target: K } of Z.sourceLinks)
          ee.add(K);
      }
      if (++G > oe)
        throw new Error("circular link");
      ne = ee, ee = /* @__PURE__ */ new Set();
    }
  }
  function L({ nodes: te }) {
    const oe = te.length;
    let ne = new Set(te), ee = /* @__PURE__ */ new Set(), G = 0;
    for (; ne.size; ) {
      for (const Z of ne) {
        Z.height = G;
        for (const { source: K } of Z.targetLinks)
          ee.add(K);
      }
      if (++G > oe)
        throw new Error("circular link");
      ne = ee, ee = /* @__PURE__ */ new Set();
    }
  }
  function F({ nodes: te }) {
    const oe = Sh(te, (G) => G.depth) + 1, ne = (n - e - i) / (oe - 1), ee = new Array(oe);
    for (const G of te) {
      const Z = Math.max(0, Math.min(oe - 1, Math.floor(u.call(null, G, oe))));
      G.layer = Z, G.x0 = e + Z * ne, G.x1 = G.x0 + i, ee[Z] ? ee[Z].push(G) : ee[Z] = [G];
    }
    if (m)
      for (const G of ee)
        G.sort(m);
    return ee;
  }
  function P(te) {
    const oe = CS(te, (ne) => (a - t - (ne.length - 1) * d) / Hd(ne, Wd));
    for (const ne of te) {
      let ee = t;
      for (const G of ne) {
        G.y0 = ee, G.y1 = ee + G.value * oe, ee = G.y1 + d;
        for (const Z of G.sourceLinks)
          Z.width = Z.value * oe;
      }
      ee = (a - ee + d) / (ne.length + 1);
      for (let G = 0; G < ne.length; ++G) {
        const Z = ne[G];
        Z.y0 += ee * (G + 1), Z.y1 += ee * (G + 1);
      }
      H(ne);
    }
  }
  function T(te) {
    const oe = F(te);
    d = Math.min(l, (a - t) / (Sh(oe, (ne) => ne.length) - 1)), P(oe);
    for (let ne = 0; ne < A; ++ne) {
      const ee = Math.pow(0.99, ne), G = Math.max(1 - ee, (ne + 1) / A);
      B(oe, ee, G), _(oe, ee, G);
    }
  }
  function _(te, oe, ne) {
    for (let ee = 1, G = te.length; ee < G; ++ee) {
      const Z = te[ee];
      for (const K of Z) {
        let V = 0, we = 0;
        for (const { source: ce, value: Re } of K.targetLinks) {
          let je = Re * (K.layer - ce.layer);
          V += ae(ce, K) * je, we += je;
        }
        if (!(we > 0))
          continue;
        let Se = (V / we - K.y0) * oe;
        K.y0 += Se, K.y1 += Se, re(K);
      }
      m === void 0 && Z.sort(fc), Y(Z, ne);
    }
  }
  function B(te, oe, ne) {
    for (let ee = te.length, G = ee - 2; G >= 0; --G) {
      const Z = te[G];
      for (const K of Z) {
        let V = 0, we = 0;
        for (const { target: ce, value: Re } of K.sourceLinks) {
          let je = Re * (ce.layer - K.layer);
          V += j(K, ce) * je, we += je;
        }
        if (!(we > 0))
          continue;
        let Se = (V / we - K.y0) * oe;
        K.y0 += Se, K.y1 += Se, re(K);
      }
      m === void 0 && Z.sort(fc), Y(Z, ne);
    }
  }
  function Y(te, oe) {
    const ne = te.length >> 1, ee = te[ne];
    J(te, ee.y0 - d, ne - 1, oe), X(te, ee.y1 + d, ne + 1, oe), J(te, a, te.length - 1, oe), X(te, t, 0, oe);
  }
  function X(te, oe, ne, ee) {
    for (; ne < te.length; ++ne) {
      const G = te[ne], Z = (oe - G.y0) * ee;
      Z > 1e-6 && (G.y0 += Z, G.y1 += Z), oe = G.y1 + d;
    }
  }
  function J(te, oe, ne, ee) {
    for (; ne >= 0; --ne) {
      const G = te[ne], Z = (G.y1 - oe) * ee;
      Z > 1e-6 && (G.y0 -= Z, G.y1 -= Z), oe = G.y0 - d;
    }
  }
  function re({ sourceLinks: te, targetLinks: oe }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: ne } } of oe)
        ne.sort(kh);
      for (const { target: { targetLinks: ne } } of te)
        ne.sort(Eh);
    }
  }
  function H(te) {
    if (y === void 0)
      for (const { sourceLinks: oe, targetLinks: ne } of te)
        oe.sort(kh), ne.sort(Eh);
  }
  function ae(te, oe) {
    let ne = te.y0 - (te.sourceLinks.length - 1) * d / 2;
    for (const { target: ee, width: G } of te.sourceLinks) {
      if (ee === oe)
        break;
      ne += G + d;
    }
    for (const { source: ee, width: G } of oe.targetLinks) {
      if (ee === te)
        break;
      ne -= G;
    }
    return ne;
  }
  function j(te, oe) {
    let ne = oe.y0 - (oe.targetLinks.length - 1) * d / 2;
    for (const { source: ee, width: G } of oe.targetLinks) {
      if (ee === te)
        break;
      ne += G + d;
    }
    for (const { target: ee, width: G } of te.sourceLinks) {
      if (ee === oe)
        break;
      ne -= G;
    }
    return ne;
  }
  return w;
}
function NS(e) {
  return [e.source.x1, e.y0];
}
function OS(e) {
  return [e.target.x0, e.y1];
}
function FS() {
  return Fb().source(NS).target(OS);
}
var Ba = {}, Ci = {};
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
function MS() {
  if (Ch)
    return Ci;
  Ch = 1;
  var e = se;
  function t(g) {
    for (var R = "https://reactjs.org/docs/error-decoder.html?invariant=" + g, z = 1; z < arguments.length; z++)
      R += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + g + "; visit " + R + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, l = {};
  function d(g) {
    return n.call(l, g) ? !0 : n.call(i, g) ? !1 : a.test(g) ? l[g] = !0 : (i[g] = !0, !1);
  }
  function f(g, R, z, U, be, ve, Pe) {
    this.acceptsBooleans = R === 2 || R === 3 || R === 4, this.attributeName = U, this.attributeNamespace = be, this.mustUseProperty = z, this.propertyName = g, this.type = R, this.sanitizeURL = ve, this.removeEmptyString = Pe;
  }
  var u = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(g) {
    u[g] = new f(g, 0, !1, g, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(g) {
    var R = g[0];
    u[R] = new f(R, 1, !1, g[1], null, !1, !1);
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
    var R = g.replace(
      m,
      y
    );
    u[R] = new f(R, 1, !1, g, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(g) {
    var R = g.replace(m, y);
    u[R] = new f(R, 1, !1, g, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(g) {
    var R = g.replace(m, y);
    u[R] = new f(R, 1, !1, g, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
  }, b = ["Webkit", "ms", "Moz", "O"];
  Object.keys(x).forEach(function(g) {
    b.forEach(function(R) {
      R = R + g.charAt(0).toUpperCase() + g.substring(1), x[R] = x[g];
    });
  });
  var A = /["'&<>]/;
  function w(g) {
    if (typeof g == "boolean" || typeof g == "number")
      return "" + g;
    g = "" + g;
    var R = A.exec(g);
    if (R) {
      var z = "", U, be = 0;
      for (U = R.index; U < g.length; U++) {
        switch (g.charCodeAt(U)) {
          case 34:
            R = "&quot;";
            break;
          case 38:
            R = "&amp;";
            break;
          case 39:
            R = "&#x27;";
            break;
          case 60:
            R = "&lt;";
            break;
          case 62:
            R = "&gt;";
            break;
          default:
            continue;
        }
        be !== U && (z += g.substring(be, U)), be = U + 1, z += R;
      }
      g = be !== U ? z + g.substring(be, U) : z;
    }
    return g;
  }
  var O = /([A-Z])/g, k = /^ms-/, h = Array.isArray;
  function L(g, R) {
    return { insertionMode: g, selectedValue: R };
  }
  function F(g, R, z) {
    switch (R) {
      case "select":
        return L(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return L(2, null);
      case "math":
        return L(3, null);
      case "foreignObject":
        return L(1, null);
      case "table":
        return L(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return L(5, null);
      case "colgroup":
        return L(7, null);
      case "tr":
        return L(6, null);
    }
    return 4 <= g.insertionMode || g.insertionMode === 0 ? L(1, null) : g;
  }
  var P = /* @__PURE__ */ new Map();
  function T(g, R, z) {
    if (typeof z != "object")
      throw Error(t(62));
    R = !0;
    for (var U in z)
      if (n.call(z, U)) {
        var be = z[U];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (U.indexOf("--") === 0) {
            var ve = w(U);
            be = w(("" + be).trim());
          } else {
            ve = U;
            var Pe = P.get(ve);
            Pe !== void 0 || (Pe = w(ve.replace(O, "-$1").toLowerCase().replace(k, "-ms-")), P.set(ve, Pe)), ve = Pe, be = typeof be == "number" ? be === 0 || n.call(x, U) ? "" + be : be + "px" : w(("" + be).trim());
          }
          R ? (R = !1, g.push(' style="', ve, ":", be)) : g.push(";", ve, ":", be);
        }
      }
    R || g.push('"');
  }
  function _(g, R, z, U) {
    switch (z) {
      case "style":
        T(g, R, U);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (R = u.hasOwnProperty(z) ? u[z] : null, R !== null) {
        switch (typeof U) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!R.acceptsBooleans)
              return;
        }
        switch (z = R.attributeName, R.type) {
          case 3:
            U && g.push(" ", z, '=""');
            break;
          case 4:
            U === !0 ? g.push(" ", z, '=""') : U !== !1 && g.push(" ", z, '="', w(U), '"');
            break;
          case 5:
            isNaN(U) || g.push(" ", z, '="', w(U), '"');
            break;
          case 6:
            !isNaN(U) && 1 <= U && g.push(" ", z, '="', w(U), '"');
            break;
          default:
            R.sanitizeURL && (U = "" + U), g.push(" ", z, '="', w(U), '"');
        }
      } else if (d(z)) {
        switch (typeof U) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (R = z.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-")
              return;
        }
        g.push(" ", z, '="', w(U), '"');
      }
    }
  }
  function B(g, R, z) {
    if (R != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof R != "object" || !("__html" in R))
        throw Error(t(61));
      R = R.__html, R != null && g.push("" + R);
    }
  }
  function Y(g) {
    var R = "";
    return e.Children.forEach(g, function(z) {
      z != null && (R += z);
    }), R;
  }
  function X(g, R, z, U) {
    g.push(H(z));
    var be = z = null, ve;
    for (ve in R)
      if (n.call(R, ve)) {
        var Pe = R[ve];
        if (Pe != null)
          switch (ve) {
            case "children":
              z = Pe;
              break;
            case "dangerouslySetInnerHTML":
              be = Pe;
              break;
            default:
              _(g, U, ve, Pe);
          }
      }
    return g.push(">"), B(g, be, z), typeof z == "string" ? (g.push(w(z)), null) : z;
  }
  var J = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, re = /* @__PURE__ */ new Map();
  function H(g) {
    var R = re.get(g);
    if (R === void 0) {
      if (!J.test(g))
        throw Error(t(65, g));
      R = "<" + g, re.set(g, R);
    }
    return R;
  }
  function ae(g, R, z, U, be) {
    switch (R) {
      case "select":
        g.push(H("select"));
        var ve = null, Pe = null;
        for (dt in z)
          if (n.call(z, dt)) {
            var Ke = z[dt];
            if (Ke != null)
              switch (dt) {
                case "children":
                  ve = Ke;
                  break;
                case "dangerouslySetInnerHTML":
                  Pe = Ke;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  _(g, U, dt, Ke);
              }
          }
        return g.push(">"), B(g, Pe, ve), ve;
      case "option":
        Pe = be.selectedValue, g.push(H("option"));
        var it = Ke = null, mt = null, dt = null;
        for (ve in z)
          if (n.call(z, ve)) {
            var de = z[ve];
            if (de != null)
              switch (ve) {
                case "children":
                  Ke = de;
                  break;
                case "selected":
                  mt = de;
                  break;
                case "dangerouslySetInnerHTML":
                  dt = de;
                  break;
                case "value":
                  it = de;
                default:
                  _(g, U, ve, de);
              }
          }
        if (Pe != null)
          if (z = it !== null ? "" + it : Y(Ke), h(Pe)) {
            for (U = 0; U < Pe.length; U++)
              if ("" + Pe[U] === z) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + Pe === z && g.push(' selected=""');
        else
          mt && g.push(' selected=""');
        return g.push(">"), B(g, dt, Ke), Ke;
      case "textarea":
        g.push(H("textarea")), dt = Pe = ve = null;
        for (Ke in z)
          if (n.call(z, Ke) && (it = z[Ke], it != null))
            switch (Ke) {
              case "children":
                dt = it;
                break;
              case "value":
                ve = it;
                break;
              case "defaultValue":
                Pe = it;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                _(
                  g,
                  U,
                  Ke,
                  it
                );
            }
        if (ve === null && Pe !== null && (ve = Pe), g.push(">"), dt != null) {
          if (ve != null)
            throw Error(t(92));
          if (h(dt) && 1 < dt.length)
            throw Error(t(93));
          ve = "" + dt;
        }
        return typeof ve == "string" && ve[0] === `
` && g.push(`
`), ve !== null && g.push(w("" + ve)), null;
      case "input":
        g.push(H("input")), it = dt = Ke = ve = null;
        for (Pe in z)
          if (n.call(z, Pe) && (mt = z[Pe], mt != null))
            switch (Pe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                it = mt;
                break;
              case "defaultValue":
                Ke = mt;
                break;
              case "checked":
                dt = mt;
                break;
              case "value":
                ve = mt;
                break;
              default:
                _(g, U, Pe, mt);
            }
        return dt !== null ? _(g, U, "checked", dt) : it !== null && _(g, U, "checked", it), ve !== null ? _(g, U, "value", ve) : Ke !== null && _(g, U, "value", Ke), g.push("/>"), null;
      case "menuitem":
        g.push(H("menuitem"));
        for (var pe in z)
          if (n.call(z, pe) && (ve = z[pe], ve != null))
            switch (pe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                _(g, U, pe, ve);
            }
        return g.push(">"), null;
      case "title":
        g.push(H("title")), ve = null;
        for (de in z)
          if (n.call(z, de) && (Pe = z[de], Pe != null))
            switch (de) {
              case "children":
                ve = Pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                _(g, U, de, Pe);
            }
        return g.push(">"), ve;
      case "listing":
      case "pre":
        g.push(H(R)), Pe = ve = null;
        for (it in z)
          if (n.call(z, it) && (Ke = z[it], Ke != null))
            switch (it) {
              case "children":
                ve = Ke;
                break;
              case "dangerouslySetInnerHTML":
                Pe = Ke;
                break;
              default:
                _(g, U, it, Ke);
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
        g.push(H(R));
        for (var ge in z)
          if (n.call(z, ge) && (ve = z[ge], ve != null))
            switch (ge) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, R));
              default:
                _(g, U, ge, ve);
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
        return X(
          g,
          z,
          R,
          U
        );
      case "html":
        return be.insertionMode === 0 && g.push("<!DOCTYPE html>"), X(g, z, R, U);
      default:
        if (R.indexOf("-") === -1 && typeof z.is != "string")
          return X(g, z, R, U);
        g.push(H(R)), Pe = ve = null;
        for (mt in z)
          if (n.call(z, mt) && (Ke = z[mt], Ke != null))
            switch (mt) {
              case "children":
                ve = Ke;
                break;
              case "dangerouslySetInnerHTML":
                Pe = Ke;
                break;
              case "style":
                T(g, U, Ke);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                d(mt) && typeof Ke != "function" && typeof Ke != "symbol" && g.push(" ", mt, '="', w(Ke), '"');
            }
        return g.push(">"), B(g, Pe, ve), ve;
    }
  }
  function j(g, R, z) {
    if (g.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return g.push(z), g.push('"></template>');
  }
  function te(g, R, z, U) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(R.segmentPrefix), R = U.toString(16), g.push(R), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function oe(g, R) {
    switch (R.insertionMode) {
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
  var ne = /[<\u2028\u2029]/g;
  function ee(g) {
    return JSON.stringify(g).replace(ne, function(R) {
      switch (R) {
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
  function G(g, R) {
    return R = R === void 0 ? "" : R, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: R + "P:", segmentPrefix: R + "S:", boundaryPrefix: R + "B:", idPrefix: R, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function Z(g, R, z, U) {
    return z.generateStaticMarkup ? (g.push(w(R)), !1) : (R === "" ? g = U : (U && g.push("<!-- -->"), g.push(w(R)), g = !0), g);
  }
  var K = Object.assign, V = Symbol.for("react.element"), we = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), Je = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Ae = Symbol.for("react.scope"), $e = Symbol.for("react.debug_trace_mode"), De = Symbol.for("react.legacy_hidden"), Ze = Symbol.for("react.default_value"), qe = Symbol.iterator;
  function yt(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case Se:
        return "Fragment";
      case we:
        return "Portal";
      case Re:
        return "Profiler";
      case ce:
        return "StrictMode";
      case he:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Je:
          return (g.displayName || "Context") + ".Consumer";
        case je:
          return (g._context.displayName || "Context") + ".Provider";
        case Oe:
          var R = g.render;
          return g = g.displayName, g || (g = R.displayName || R.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case le:
          return R = g.displayName || null, R !== null ? R : yt(g.type) || "Memo";
        case ue:
          R = g._payload, g = g._init;
          try {
            return yt(g(R));
          } catch {
          }
      }
    return null;
  }
  var nt = {};
  function Ve(g, R) {
    if (g = g.contextTypes, !g)
      return nt;
    var z = {}, U;
    for (U in g)
      z[U] = R[U];
    return z;
  }
  var ze = null;
  function Te(g, R) {
    if (g !== R) {
      g.context._currentValue2 = g.parentValue, g = g.parent;
      var z = R.parent;
      if (g === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Te(g, z);
      }
      R.context._currentValue2 = R.value;
    }
  }
  function Ye(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && Ye(g);
  }
  function Qe(g) {
    var R = g.parent;
    R !== null && Qe(R), g.context._currentValue2 = g.value;
  }
  function ft(g, R) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === R.depth ? Te(g, R) : ft(g, R);
  }
  function bt(g, R) {
    var z = R.parent;
    if (z === null)
      throw Error(t(402));
    g.depth === z.depth ? Te(g, z) : bt(g, z), R.context._currentValue2 = R.value;
  }
  function gt(g) {
    var R = ze;
    R !== g && (R === null ? Qe(g) : g === null ? Ye(R) : R.depth === g.depth ? Te(R, g) : R.depth > g.depth ? ft(R, g) : bt(R, g), ze = g);
  }
  var Mt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, R) {
    g = g._reactInternals, g.queue !== null && g.queue.push(R);
  }, enqueueReplaceState: function(g, R) {
    g = g._reactInternals, g.replace = !0, g.queue = [R];
  }, enqueueForceUpdate: function() {
  } };
  function Zt(g, R, z, U) {
    var be = g.state !== void 0 ? g.state : null;
    g.updater = Mt, g.props = z, g.state = be;
    var ve = { queue: [], replace: !1 };
    g._reactInternals = ve;
    var Pe = R.contextType;
    if (g.context = typeof Pe == "object" && Pe !== null ? Pe._currentValue2 : U, Pe = R.getDerivedStateFromProps, typeof Pe == "function" && (Pe = Pe(z, be), be = Pe == null ? be : K({}, be, Pe), g.state = be), typeof R.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (R = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), R !== g.state && Mt.enqueueReplaceState(g, g.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (R = ve.queue, Pe = ve.replace, ve.queue = null, ve.replace = !1, Pe && R.length === 1)
          g.state = R[0];
        else {
          for (ve = Pe ? R[0] : g.state, be = !0, Pe = Pe ? 1 : 0; Pe < R.length; Pe++) {
            var Ke = R[Pe];
            Ke = typeof Ke == "function" ? Ke.call(g, ve, z, U) : Ke, Ke != null && (be ? (be = !1, ve = K({}, ve, Ke)) : K(ve, Ke));
          }
          g.state = ve;
        }
      else
        ve.queue = null;
  }
  var an = { id: 1, overflow: "" };
  function Ut(g, R, z) {
    var U = g.id;
    g = g.overflow;
    var be = 32 - Qt(U) - 1;
    U &= ~(1 << be), z += 1;
    var ve = 32 - Qt(R) + be;
    if (30 < ve) {
      var Pe = be - be % 5;
      return ve = (U & (1 << Pe) - 1).toString(32), U >>= Pe, be -= Pe, { id: 1 << 32 - Qt(R) + be | z << be | U, overflow: ve + g };
    }
    return { id: 1 << ve | z << be | U, overflow: g };
  }
  var Qt = Math.clz32 ? Math.clz32 : At, zt = Math.log, un = Math.LN2;
  function At(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (zt(g) / un | 0) | 0;
  }
  function Rt(g, R) {
    return g === R && (g !== 0 || 1 / g === 1 / R) || g !== g && R !== R;
  }
  var kn = typeof Object.is == "function" ? Object.is : Rt, Ie = null, Et = null, vn = null, lt = null, on = !1, Xt = !1, $t = 0, Jt = null, wn = 0;
  function Tn() {
    if (Ie === null)
      throw Error(t(321));
    return Ie;
  }
  function Dt() {
    if (0 < wn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Mn() {
    return lt === null ? vn === null ? (on = !1, vn = lt = Dt()) : (on = !0, lt = vn) : lt.next === null ? (on = !1, lt = lt.next = Dt()) : (on = !0, lt = lt.next), lt;
  }
  function bn() {
    Et = Ie = null, Xt = !1, vn = null, wn = 0, lt = Jt = null;
  }
  function Bn(g, R) {
    return typeof R == "function" ? R(g) : R;
  }
  function Kt(g, R, z) {
    if (Ie = Tn(), lt = Mn(), on) {
      var U = lt.queue;
      if (R = U.dispatch, Jt !== null && (z = Jt.get(U), z !== void 0)) {
        Jt.delete(U), U = lt.memoizedState;
        do
          U = g(U, z.action), z = z.next;
        while (z !== null);
        return lt.memoizedState = U, [U, R];
      }
      return [lt.memoizedState, R];
    }
    return g = g === Bn ? typeof R == "function" ? R() : R : z !== void 0 ? z(R) : R, lt.memoizedState = g, g = lt.queue = { last: null, dispatch: null }, g = g.dispatch = Qn.bind(null, Ie, g), [lt.memoizedState, g];
  }
  function Hn(g, R) {
    if (Ie = Tn(), lt = Mn(), R = R === void 0 ? null : R, lt !== null) {
      var z = lt.memoizedState;
      if (z !== null && R !== null) {
        var U = z[1];
        e:
          if (U === null)
            U = !1;
          else {
            for (var be = 0; be < U.length && be < R.length; be++)
              if (!kn(R[be], U[be])) {
                U = !1;
                break e;
              }
            U = !0;
          }
        if (U)
          return z[0];
      }
    }
    return g = g(), lt.memoizedState = [g, R], g;
  }
  function Qn(g, R, z) {
    if (25 <= wn)
      throw Error(t(301));
    if (g === Ie)
      if (Xt = !0, g = { action: z, next: null }, Jt === null && (Jt = /* @__PURE__ */ new Map()), z = Jt.get(R), z === void 0)
        Jt.set(R, g);
      else {
        for (R = z; R.next !== null; )
          R = R.next;
        R.next = g;
      }
  }
  function Wn() {
    throw Error(t(394));
  }
  function ln() {
  }
  var zn = { readContext: function(g) {
    return g._currentValue2;
  }, useContext: function(g) {
    return Tn(), g._currentValue2;
  }, useMemo: Hn, useReducer: Kt, useRef: function(g) {
    Ie = Tn(), lt = Mn();
    var R = lt.memoizedState;
    return R === null ? (g = { current: g }, lt.memoizedState = g) : R;
  }, useState: function(g) {
    return Kt(Bn, g);
  }, useInsertionEffect: ln, useLayoutEffect: function() {
  }, useCallback: function(g, R) {
    return Hn(function() {
      return g;
    }, R);
  }, useImperativeHandle: ln, useEffect: ln, useDebugValue: ln, useDeferredValue: function(g) {
    return Tn(), g;
  }, useTransition: function() {
    return Tn(), [
      !1,
      Wn
    ];
  }, useId: function() {
    var g = Et.treeContext, R = g.overflow;
    g = g.id, g = (g & ~(1 << 32 - Qt(g) - 1)).toString(32) + R;
    var z = $n;
    if (z === null)
      throw Error(t(404));
    return R = $t++, g = ":" + z.idPrefix + "R" + g, 0 < R && (g += "H" + R.toString(32)), g + ":";
  }, useMutableSource: function(g, R) {
    return Tn(), R(g._source);
  }, useSyncExternalStore: function(g, R, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, $n = null, Vn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Dn(g) {
    return console.error(g), null;
  }
  function _e() {
  }
  function ht(g, R, z, U, be, ve, Pe, Ke, it) {
    var mt = [], dt = /* @__PURE__ */ new Set();
    return R = { destination: null, responseState: R, progressiveChunkSize: U === void 0 ? 12800 : U, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: dt, pingedTasks: mt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? Dn : be, onAllReady: ve === void 0 ? _e : ve, onShellReady: Pe === void 0 ? _e : Pe, onShellError: Ke === void 0 ? _e : Ke, onFatalError: it === void 0 ? _e : it }, z = xe(R, 0, null, z, !1, !1), z.parentFlushed = !0, g = I(R, g, null, z, dt, nt, null, an), mt.push(g), R;
  }
  function I(g, R, z, U, be, ve, Pe, Ke) {
    g.allPendingTasks++, z === null ? g.pendingRootTasks++ : z.pendingTasks++;
    var it = { node: R, ping: function() {
      var mt = g.pingedTasks;
      mt.push(it), mt.length === 1 && It(g);
    }, blockedBoundary: z, blockedSegment: U, abortSet: be, legacyContext: ve, context: Pe, treeContext: Ke };
    return be.add(it), it;
  }
  function xe(g, R, z, U, be, ve) {
    return { status: 0, id: -1, index: R, parentFlushed: !1, chunks: [], children: [], formatContext: U, boundary: z, lastPushedText: be, textEmbedded: ve };
  }
  function Xe(g, R) {
    if (g = g.onError(R), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function Be(g, R) {
    var z = g.onShellError;
    z(R), z = g.onFatalError, z(R), g.destination !== null ? (g.status = 2, g.destination.destroy(R)) : (g.status = 1, g.fatalError = R);
  }
  function pt(g, R, z, U, be) {
    for (Ie = {}, Et = R, $t = 0, g = z(U, be); Xt; )
      Xt = !1, $t = 0, wn += 1, lt = null, g = z(U, be);
    return bn(), g;
  }
  function tt(g, R, z, U) {
    var be = z.render(), ve = U.childContextTypes;
    if (ve != null) {
      var Pe = R.legacyContext;
      if (typeof z.getChildContext != "function")
        U = Pe;
      else {
        z = z.getChildContext();
        for (var Ke in z)
          if (!(Ke in ve))
            throw Error(t(108, yt(U) || "Unknown", Ke));
        U = K({}, Pe, z);
      }
      R.legacyContext = U, Ue(g, R, be), R.legacyContext = Pe;
    } else
      Ue(g, R, be);
  }
  function kt(g, R) {
    if (g && g.defaultProps) {
      R = K({}, R), g = g.defaultProps;
      for (var z in g)
        R[z] === void 0 && (R[z] = g[z]);
      return R;
    }
    return R;
  }
  function Nt(g, R, z, U, be) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        be = Ve(z, R.legacyContext);
        var ve = z.contextType;
        ve = new z(U, typeof ve == "object" && ve !== null ? ve._currentValue2 : be), Zt(ve, z, U, be), tt(g, R, ve, z);
      } else {
        ve = Ve(z, R.legacyContext), be = pt(g, R, z, U, ve);
        var Pe = $t !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          Zt(be, z, U, ve), tt(g, R, be, z);
        else if (Pe) {
          U = R.treeContext, R.treeContext = Ut(U, 1, 0);
          try {
            Ue(g, R, be);
          } finally {
            R.treeContext = U;
          }
        } else
          Ue(g, R, be);
      }
    else if (typeof z == "string") {
      switch (be = R.blockedSegment, ve = ae(be.chunks, z, U, g.responseState, be.formatContext), be.lastPushedText = !1, Pe = be.formatContext, be.formatContext = F(Pe, z, U), Vt(g, R, ve), be.formatContext = Pe, z) {
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
        case De:
        case $e:
        case ce:
        case Re:
        case Se:
          Ue(g, R, U.children);
          return;
        case Fe:
          Ue(g, R, U.children);
          return;
        case Ae:
          throw Error(t(343));
        case he:
          e: {
            z = R.blockedBoundary, be = R.blockedSegment, ve = U.fallback, U = U.children, Pe = /* @__PURE__ */ new Set();
            var Ke = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Pe, errorDigest: null }, it = xe(g, be.chunks.length, Ke, be.formatContext, !1, !1);
            be.children.push(it), be.lastPushedText = !1;
            var mt = xe(g, 0, null, be.formatContext, !1, !1);
            mt.parentFlushed = !0, R.blockedBoundary = Ke, R.blockedSegment = mt;
            try {
              if (Vt(
                g,
                R,
                U
              ), g.responseState.generateStaticMarkup || mt.lastPushedText && mt.textEmbedded && mt.chunks.push("<!-- -->"), mt.status = 1, st(Ke, mt), Ke.pendingTasks === 0)
                break e;
            } catch (dt) {
              mt.status = 4, Ke.forceClientRender = !0, Ke.errorDigest = Xe(g, dt);
            } finally {
              R.blockedBoundary = z, R.blockedSegment = be;
            }
            R = I(g, ve, z, it, Pe, R.legacyContext, R.context, R.treeContext), g.pingedTasks.push(R);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Oe:
            if (U = pt(g, R, z.render, U, be), $t !== 0) {
              z = R.treeContext, R.treeContext = Ut(z, 1, 0);
              try {
                Ue(g, R, U);
              } finally {
                R.treeContext = z;
              }
            } else
              Ue(g, R, U);
            return;
          case le:
            z = z.type, U = kt(z, U), Nt(g, R, z, U, be);
            return;
          case je:
            if (be = U.children, z = z._context, U = U.value, ve = z._currentValue2, z._currentValue2 = U, Pe = ze, ze = U = { parent: Pe, depth: Pe === null ? 0 : Pe.depth + 1, context: z, parentValue: ve, value: U }, R.context = U, Ue(g, R, be), g = ze, g === null)
              throw Error(t(403));
            U = g.parentValue, g.context._currentValue2 = U === Ze ? g.context._defaultValue : U, g = ze = g.parent, R.context = g;
            return;
          case Je:
            U = U.children, U = U(z._currentValue2), Ue(g, R, U);
            return;
          case ue:
            be = z._init, z = be(z._payload), U = kt(z, U), Nt(
              g,
              R,
              z,
              U,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function Ue(g, R, z) {
    if (R.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case V:
          Nt(g, R, z.type, z.props, z.ref);
          return;
        case we:
          throw Error(t(257));
        case ue:
          var U = z._init;
          z = U(z._payload), Ue(g, R, z);
          return;
      }
      if (h(z)) {
        Ot(g, R, z);
        return;
      }
      if (z === null || typeof z != "object" ? U = null : (U = qe && z[qe] || z["@@iterator"], U = typeof U == "function" ? U : null), U && (U = U.call(z))) {
        if (z = U.next(), !z.done) {
          var be = [];
          do
            be.push(z.value), z = U.next();
          while (!z.done);
          Ot(g, R, be);
        }
        return;
      }
      throw g = Object.prototype.toString.call(z), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : g));
    }
    typeof z == "string" ? (U = R.blockedSegment, U.lastPushedText = Z(R.blockedSegment.chunks, z, g.responseState, U.lastPushedText)) : typeof z == "number" && (U = R.blockedSegment, U.lastPushedText = Z(R.blockedSegment.chunks, "" + z, g.responseState, U.lastPushedText));
  }
  function Ot(g, R, z) {
    for (var U = z.length, be = 0; be < U; be++) {
      var ve = R.treeContext;
      R.treeContext = Ut(ve, U, be);
      try {
        Vt(g, R, z[be]);
      } finally {
        R.treeContext = ve;
      }
    }
  }
  function Vt(g, R, z) {
    var U = R.blockedSegment.formatContext, be = R.legacyContext, ve = R.context;
    try {
      return Ue(g, R, z);
    } catch (it) {
      if (bn(), typeof it == "object" && it !== null && typeof it.then == "function") {
        z = it;
        var Pe = R.blockedSegment, Ke = xe(g, Pe.chunks.length, null, Pe.formatContext, Pe.lastPushedText, !0);
        Pe.children.push(Ke), Pe.lastPushedText = !1, g = I(g, R.node, R.blockedBoundary, Ke, R.abortSet, R.legacyContext, R.context, R.treeContext).ping, z.then(g, g), R.blockedSegment.formatContext = U, R.legacyContext = be, R.context = ve, gt(ve);
      } else
        throw R.blockedSegment.formatContext = U, R.legacyContext = be, R.context = ve, gt(ve), it;
    }
  }
  function Ft(g) {
    var R = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, wt(this, R, g);
  }
  function nn(g, R, z) {
    var U = g.blockedBoundary;
    g.blockedSegment.status = 3, U === null ? (R.allPendingTasks--, R.status !== 2 && (R.status = 2, R.destination !== null && R.destination.push(null))) : (U.pendingTasks--, U.forceClientRender || (U.forceClientRender = !0, g = z === void 0 ? Error(t(432)) : z, U.errorDigest = R.onError(g), U.parentFlushed && R.clientRenderedBoundaries.push(U)), U.fallbackAbortableTasks.forEach(function(be) {
      return nn(be, R, z);
    }), U.fallbackAbortableTasks.clear(), R.allPendingTasks--, R.allPendingTasks === 0 && (U = R.onAllReady, U()));
  }
  function st(g, R) {
    if (R.chunks.length === 0 && R.children.length === 1 && R.children[0].boundary === null) {
      var z = R.children[0];
      z.id = R.id, z.parentFlushed = !0, z.status === 1 && st(g, z);
    } else
      g.completedSegments.push(R);
  }
  function wt(g, R, z) {
    if (R === null) {
      if (z.parentFlushed) {
        if (g.completedRootSegment !== null)
          throw Error(t(389));
        g.completedRootSegment = z;
      }
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = _e, R = g.onShellReady, R());
    } else
      R.pendingTasks--, R.forceClientRender || (R.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && st(R, z), R.parentFlushed && g.completedBoundaries.push(R), R.fallbackAbortableTasks.forEach(Ft, g), R.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (st(R, z), R.completedSegments.length === 1 && R.parentFlushed && g.partialBoundaries.push(R)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function It(g) {
    if (g.status !== 2) {
      var R = ze, z = Vn.current;
      Vn.current = zn;
      var U = $n;
      $n = g.responseState;
      try {
        var be = g.pingedTasks, ve;
        for (ve = 0; ve < be.length; ve++) {
          var Pe = be[ve], Ke = g, it = Pe.blockedSegment;
          if (it.status === 0) {
            gt(Pe.context);
            try {
              Ue(Ke, Pe, Pe.node), Ke.responseState.generateStaticMarkup || it.lastPushedText && it.textEmbedded && it.chunks.push("<!-- -->"), Pe.abortSet.delete(Pe), it.status = 1, wt(Ke, Pe.blockedBoundary, it);
            } catch (Ne) {
              if (bn(), typeof Ne == "object" && Ne !== null && typeof Ne.then == "function") {
                var mt = Pe.ping;
                Ne.then(mt, mt);
              } else {
                Pe.abortSet.delete(Pe), it.status = 4;
                var dt = Pe.blockedBoundary, de = Ne, pe = Xe(Ke, de);
                if (dt === null ? Be(Ke, de) : (dt.pendingTasks--, dt.forceClientRender || (dt.forceClientRender = !0, dt.errorDigest = pe, dt.parentFlushed && Ke.clientRenderedBoundaries.push(dt))), Ke.allPendingTasks--, Ke.allPendingTasks === 0) {
                  var ge = Ke.onAllReady;
                  ge();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, ve), g.destination !== null && sn(g, g.destination);
      } catch (Ne) {
        Xe(g, Ne), Be(g, Ne);
      } finally {
        $n = U, Vn.current = z, z === zn && gt(R);
      }
    }
  }
  function Wt(g, R, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var U = z.id = g.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, g = g.responseState, R.push('<template id="'), R.push(g.placeholderPrefix), g = U.toString(16), R.push(g), R.push('"></template>');
      case 1:
        z.status = 2;
        var be = !0;
        U = z.chunks;
        var ve = 0;
        z = z.children;
        for (var Pe = 0; Pe < z.length; Pe++) {
          for (be = z[Pe]; ve < be.index; ve++)
            R.push(U[ve]);
          be = yn(g, R, be);
        }
        for (; ve < U.length - 1; ve++)
          R.push(U[ve]);
        return ve < U.length && (be = R.push(U[ve])), be;
      default:
        throw Error(t(390));
    }
  }
  function yn(g, R, z) {
    var U = z.boundary;
    if (U === null)
      return Wt(g, R, z);
    if (U.parentFlushed = !0, U.forceClientRender)
      return g.responseState.generateStaticMarkup || (U = U.errorDigest, R.push("<!--$!-->"), R.push("<template"), U && (R.push(' data-dgst="'), U = w(U), R.push(U), R.push('"')), R.push("></template>")), Wt(g, R, z), g = g.responseState.generateStaticMarkup ? !0 : R.push("<!--/$-->"), g;
    if (0 < U.pendingTasks) {
      U.rootSegmentID = g.nextSegmentId++, 0 < U.completedSegments.length && g.partialBoundaries.push(U);
      var be = g.responseState, ve = be.nextSuspenseID++;
      return be = be.boundaryPrefix + ve.toString(16), U = U.id = be, j(R, g.responseState, U), Wt(g, R, z), R.push("<!--/$-->");
    }
    if (U.byteSize > g.progressiveChunkSize)
      return U.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(U), j(R, g.responseState, U.id), Wt(g, R, z), R.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || R.push("<!--$-->"), z = U.completedSegments, z.length !== 1)
      throw Error(t(391));
    return yn(g, R, z[0]), g = g.responseState.generateStaticMarkup ? !0 : R.push("<!--/$-->"), g;
  }
  function _n(g, R, z) {
    return te(R, g.responseState, z.formatContext, z.id), yn(g, R, z), oe(R, z.formatContext);
  }
  function pn(g, R, z) {
    for (var U = z.completedSegments, be = 0; be < U.length; be++)
      hn(g, R, z, U[be]);
    if (U.length = 0, g = g.responseState, U = z.id, z = z.rootSegmentID, R.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? R.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, R.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), U === null)
      throw Error(t(395));
    return z = z.toString(16), R.push(U), R.push('","'), R.push(g.segmentPrefix), R.push(z), R.push('")<\/script>');
  }
  function hn(g, R, z, U) {
    if (U.status === 2)
      return !0;
    var be = U.id;
    if (be === -1) {
      if ((U.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return _n(g, R, U);
    }
    return _n(g, R, U), g = g.responseState, R.push(g.startInlineScript), g.sentCompleteSegmentFunction ? R.push('$RS("') : (g.sentCompleteSegmentFunction = !0, R.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), R.push(g.segmentPrefix), be = be.toString(16), R.push(be), R.push('","'), R.push(g.placeholderPrefix), R.push(be), R.push('")<\/script>');
  }
  function sn(g, R) {
    try {
      var z = g.completedRootSegment;
      if (z !== null && g.pendingRootTasks === 0) {
        yn(g, R, z), g.completedRootSegment = null;
        var U = g.responseState.bootstrapChunks;
        for (z = 0; z < U.length - 1; z++)
          R.push(U[z]);
        z < U.length && R.push(U[z]);
      }
      var be = g.clientRenderedBoundaries, ve;
      for (ve = 0; ve < be.length; ve++) {
        var Pe = be[ve];
        U = R;
        var Ke = g.responseState, it = Pe.id, mt = Pe.errorDigest, dt = Pe.errorMessage, de = Pe.errorComponentStack;
        if (U.push(Ke.startInlineScript), Ke.sentClientRenderFunction ? U.push('$RX("') : (Ke.sentClientRenderFunction = !0, U.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), it === null)
          throw Error(t(395));
        if (U.push(it), U.push('"'), mt || dt || de) {
          U.push(",");
          var pe = ee(mt || "");
          U.push(pe);
        }
        if (dt || de) {
          U.push(",");
          var ge = ee(dt || "");
          U.push(ge);
        }
        if (de) {
          U.push(",");
          var Ne = ee(de);
          U.push(Ne);
        }
        if (!U.push(")<\/script>")) {
          g.destination = null, ve++, be.splice(0, ve);
          return;
        }
      }
      be.splice(0, ve);
      var Ct = g.completedBoundaries;
      for (ve = 0; ve < Ct.length; ve++)
        if (!pn(g, R, Ct[ve])) {
          g.destination = null, ve++, Ct.splice(0, ve);
          return;
        }
      Ct.splice(0, ve);
      var cn = g.partialBoundaries;
      for (ve = 0; ve < cn.length; ve++) {
        var jn = cn[ve];
        e: {
          be = g, Pe = R;
          var Jn = jn.completedSegments;
          for (Ke = 0; Ke < Jn.length; Ke++)
            if (!hn(be, Pe, jn, Jn[Ke])) {
              Ke++, Jn.splice(0, Ke);
              var Un = !1;
              break e;
            }
          Jn.splice(0, Ke), Un = !0;
        }
        if (!Un) {
          g.destination = null, ve++, cn.splice(0, ve);
          return;
        }
      }
      cn.splice(0, ve);
      var pr = g.completedBoundaries;
      for (ve = 0; ve < pr.length; ve++)
        if (!pn(g, R, pr[ve])) {
          g.destination = null, ve++, pr.splice(0, ve);
          return;
        }
      pr.splice(0, ve);
    } finally {
      g.allPendingTasks === 0 && g.pingedTasks.length === 0 && g.clientRenderedBoundaries.length === 0 && g.completedBoundaries.length === 0 && R.push(null);
    }
  }
  function qt(g, R) {
    try {
      var z = g.abortableTasks;
      z.forEach(function(U) {
        return nn(U, g, R);
      }), z.clear(), g.destination !== null && sn(g, g.destination);
    } catch (U) {
      Xe(g, U), Be(g, U);
    }
  }
  function Sn() {
  }
  function qn(g, R, z, U) {
    var be = !1, ve = null, Pe = "", Ke = { push: function(mt) {
      return mt !== null && (Pe += mt), !0;
    }, destroy: function(mt) {
      be = !0, ve = mt;
    } }, it = !1;
    if (g = ht(g, G(z, R ? R.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Sn, void 0, function() {
      it = !0;
    }, void 0, void 0), It(g), qt(g, U), g.status === 1)
      g.status = 2, Ke.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = Ke;
      try {
        sn(g, Ke);
      } catch (mt) {
        Xe(g, mt), Be(g, mt);
      }
    }
    if (be)
      throw ve;
    if (!it)
      throw Error(t(426));
    return Pe;
  }
  return Ci.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ci.renderToStaticMarkup = function(g, R) {
    return qn(g, R, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ci.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ci.renderToString = function(g, R) {
    return qn(g, R, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ci.version = "18.2.0", Ci;
}
var Pu = {};
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
function zS() {
  if (Ah)
    return Pu;
  Ah = 1;
  var e = se;
  function t(v) {
    for (var D = "https://reactjs.org/docs/error-decoder.html?invariant=" + v, $ = 1; $ < arguments.length; $++)
      D += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + v + "; visit " + D + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, a = 0;
  function i(v, D) {
    if (D.length !== 0)
      if (512 < D.length)
        0 < a && (v.enqueue(new Uint8Array(n.buffer, 0, a)), n = new Uint8Array(512), a = 0), v.enqueue(D);
      else {
        var $ = n.length - a;
        $ < D.length && ($ === 0 ? v.enqueue(n) : (n.set(D.subarray(0, $), a), v.enqueue(n), D = D.subarray($)), n = new Uint8Array(512), a = 0), n.set(D, a), a += D.length;
      }
  }
  function l(v, D) {
    return i(v, D), !0;
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
  function y(v, D) {
    typeof v.error == "function" ? v.error(D) : v.close();
  }
  var x = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, w = {};
  function O(v) {
    return x.call(w, v) ? !0 : x.call(A, v) ? !1 : b.test(v) ? w[v] = !0 : (A[v] = !0, !1);
  }
  function k(v, D, $, q, ke, Ee, Me) {
    this.acceptsBooleans = D === 2 || D === 3 || D === 4, this.attributeName = q, this.attributeNamespace = ke, this.mustUseProperty = $, this.propertyName = v, this.type = D, this.sanitizeURL = Ee, this.removeEmptyString = Me;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(v) {
    h[v] = new k(v, 0, !1, v, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(v) {
    var D = v[0];
    h[D] = new k(D, 1, !1, v[1], null, !1, !1);
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
  var L = /[\-:]([a-z])/g;
  function F(v) {
    return v[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(v) {
    var D = v.replace(
      L,
      F
    );
    h[D] = new k(D, 1, !1, v, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(v) {
    var D = v.replace(L, F);
    h[D] = new k(D, 1, !1, v, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(v) {
    var D = v.replace(L, F);
    h[D] = new k(D, 1, !1, v, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(v) {
    h[v] = new k(v, 1, !1, v.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(v) {
    h[v] = new k(v, 1, !1, v.toLowerCase(), null, !0, !0);
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
  }, T = ["Webkit", "ms", "Moz", "O"];
  Object.keys(P).forEach(function(v) {
    T.forEach(function(D) {
      D = D + v.charAt(0).toUpperCase() + v.substring(1), P[D] = P[v];
    });
  });
  var _ = /["'&<>]/;
  function B(v) {
    if (typeof v == "boolean" || typeof v == "number")
      return "" + v;
    v = "" + v;
    var D = _.exec(v);
    if (D) {
      var $ = "", q, ke = 0;
      for (q = D.index; q < v.length; q++) {
        switch (v.charCodeAt(q)) {
          case 34:
            D = "&quot;";
            break;
          case 38:
            D = "&amp;";
            break;
          case 39:
            D = "&#x27;";
            break;
          case 60:
            D = "&lt;";
            break;
          case 62:
            D = "&gt;";
            break;
          default:
            continue;
        }
        ke !== q && ($ += v.substring(ke, q)), ke = q + 1, $ += D;
      }
      v = ke !== q ? $ + v.substring(ke, q) : $;
    }
    return v;
  }
  var Y = /([A-Z])/g, X = /^ms-/, J = Array.isArray, re = m("<script>"), H = m("<\/script>"), ae = m('<script src="'), j = m('<script type="module" src="'), te = m('" async=""><\/script>'), oe = /(<\/|<)(s)(cript)/gi;
  function ne(v, D, $, q) {
    return "" + D + ($ === "s" ? "\\u0073" : "\\u0053") + q;
  }
  function ee(v, D, $, q, ke) {
    v = v === void 0 ? "" : v, D = D === void 0 ? re : m('<script nonce="' + B(D) + '">');
    var Ee = [];
    if ($ !== void 0 && Ee.push(D, u(("" + $).replace(oe, ne)), H), q !== void 0)
      for ($ = 0; $ < q.length; $++)
        Ee.push(ae, u(B(q[$])), te);
    if (ke !== void 0)
      for (q = 0; q < ke.length; q++)
        Ee.push(j, u(B(ke[q])), te);
    return { bootstrapChunks: Ee, startInlineScript: D, placeholderPrefix: m(v + "P:"), segmentPrefix: m(v + "S:"), boundaryPrefix: v + "B:", idPrefix: v, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function G(v, D) {
    return { insertionMode: v, selectedValue: D };
  }
  function Z(v) {
    return G(v === "http://www.w3.org/2000/svg" ? 2 : v === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function K(v, D, $) {
    switch (D) {
      case "select":
        return G(1, $.value != null ? $.value : $.defaultValue);
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
    return 4 <= v.insertionMode || v.insertionMode === 0 ? G(1, null) : v;
  }
  var V = m("<!-- -->");
  function we(v, D, $, q) {
    return D === "" ? q : (q && v.push(V), v.push(u(B(D))), !0);
  }
  var Se = /* @__PURE__ */ new Map(), ce = m(' style="'), Re = m(":"), je = m(";");
  function Je(v, D, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    D = !0;
    for (var q in $)
      if (x.call($, q)) {
        var ke = $[q];
        if (ke != null && typeof ke != "boolean" && ke !== "") {
          if (q.indexOf("--") === 0) {
            var Ee = u(B(q));
            ke = u(B(("" + ke).trim()));
          } else {
            Ee = q;
            var Me = Se.get(Ee);
            Me !== void 0 || (Me = m(B(Ee.replace(Y, "-$1").toLowerCase().replace(X, "-ms-"))), Se.set(Ee, Me)), Ee = Me, ke = typeof ke == "number" ? ke === 0 || x.call(P, q) ? u("" + ke) : u(ke + "px") : u(B(("" + ke).trim()));
          }
          D ? (D = !1, v.push(ce, Ee, Re, ke)) : v.push(je, Ee, Re, ke);
        }
      }
    D || v.push(Fe);
  }
  var Oe = m(" "), he = m('="'), Fe = m('"'), le = m('=""');
  function ue(v, D, $, q) {
    switch ($) {
      case "style":
        Je(v, D, q);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < $.length) || $[0] !== "o" && $[0] !== "O" || $[1] !== "n" && $[1] !== "N") {
      if (D = h.hasOwnProperty($) ? h[$] : null, D !== null) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!D.acceptsBooleans)
              return;
        }
        switch ($ = u(D.attributeName), D.type) {
          case 3:
            q && v.push(Oe, $, le);
            break;
          case 4:
            q === !0 ? v.push(Oe, $, le) : q !== !1 && v.push(Oe, $, he, u(B(q)), Fe);
            break;
          case 5:
            isNaN(q) || v.push(Oe, $, he, u(B(q)), Fe);
            break;
          case 6:
            !isNaN(q) && 1 <= q && v.push(Oe, $, he, u(B(q)), Fe);
            break;
          default:
            D.sanitizeURL && (q = "" + q), v.push(Oe, $, he, u(B(q)), Fe);
        }
      } else if (O($)) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (D = $.toLowerCase().slice(0, 5), D !== "data-" && D !== "aria-")
              return;
        }
        v.push(Oe, u($), he, u(B(q)), Fe);
      }
    }
  }
  var Ae = m(">"), $e = m("/>");
  function De(v, D, $) {
    if (D != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof D != "object" || !("__html" in D))
        throw Error(t(61));
      D = D.__html, D != null && v.push(u("" + D));
    }
  }
  function Ze(v) {
    var D = "";
    return e.Children.forEach(v, function($) {
      $ != null && (D += $);
    }), D;
  }
  var qe = m(' selected=""');
  function yt(v, D, $, q) {
    v.push(Te($));
    var ke = $ = null, Ee;
    for (Ee in D)
      if (x.call(D, Ee)) {
        var Me = D[Ee];
        if (Me != null)
          switch (Ee) {
            case "children":
              $ = Me;
              break;
            case "dangerouslySetInnerHTML":
              ke = Me;
              break;
            default:
              ue(v, q, Ee, Me);
          }
      }
    return v.push(Ae), De(v, ke, $), typeof $ == "string" ? (v.push(u(B($))), null) : $;
  }
  var nt = m(`
`), Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ze = /* @__PURE__ */ new Map();
  function Te(v) {
    var D = ze.get(v);
    if (D === void 0) {
      if (!Ve.test(v))
        throw Error(t(65, v));
      D = m("<" + v), ze.set(v, D);
    }
    return D;
  }
  var Ye = m("<!DOCTYPE html>");
  function Qe(v, D, $, q, ke) {
    switch (D) {
      case "select":
        v.push(Te("select"));
        var Ee = null, Me = null;
        for (Pt in $)
          if (x.call($, Pt)) {
            var Ge = $[Pt];
            if (Ge != null)
              switch (Pt) {
                case "children":
                  Ee = Ge;
                  break;
                case "dangerouslySetInnerHTML":
                  Me = Ge;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  ue(v, q, Pt, Ge);
              }
          }
        return v.push(Ae), De(v, Me, Ee), Ee;
      case "option":
        Me = ke.selectedValue, v.push(Te("option"));
        var vt = Ge = null, _t = null, Pt = null;
        for (Ee in $)
          if (x.call($, Ee)) {
            var rn = $[Ee];
            if (rn != null)
              switch (Ee) {
                case "children":
                  Ge = rn;
                  break;
                case "selected":
                  _t = rn;
                  break;
                case "dangerouslySetInnerHTML":
                  Pt = rn;
                  break;
                case "value":
                  vt = rn;
                default:
                  ue(v, q, Ee, rn);
              }
          }
        if (Me != null)
          if ($ = vt !== null ? "" + vt : Ze(Ge), J(Me)) {
            for (q = 0; q < Me.length; q++)
              if ("" + Me[q] === $) {
                v.push(qe);
                break;
              }
          } else
            "" + Me === $ && v.push(qe);
        else
          _t && v.push(qe);
        return v.push(Ae), De(v, Pt, Ge), Ge;
      case "textarea":
        v.push(Te("textarea")), Pt = Me = Ee = null;
        for (Ge in $)
          if (x.call($, Ge) && (vt = $[Ge], vt != null))
            switch (Ge) {
              case "children":
                Pt = vt;
                break;
              case "value":
                Ee = vt;
                break;
              case "defaultValue":
                Me = vt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                ue(v, q, Ge, vt);
            }
        if (Ee === null && Me !== null && (Ee = Me), v.push(Ae), Pt != null) {
          if (Ee != null)
            throw Error(t(92));
          if (J(Pt) && 1 < Pt.length)
            throw Error(t(93));
          Ee = "" + Pt;
        }
        return typeof Ee == "string" && Ee[0] === `
` && v.push(nt), Ee !== null && v.push(u(B("" + Ee))), null;
      case "input":
        v.push(Te("input")), vt = Pt = Ge = Ee = null;
        for (Me in $)
          if (x.call($, Me) && (_t = $[Me], _t != null))
            switch (Me) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                vt = _t;
                break;
              case "defaultValue":
                Ge = _t;
                break;
              case "checked":
                Pt = _t;
                break;
              case "value":
                Ee = _t;
                break;
              default:
                ue(v, q, Me, _t);
            }
        return Pt !== null ? ue(
          v,
          q,
          "checked",
          Pt
        ) : vt !== null && ue(v, q, "checked", vt), Ee !== null ? ue(v, q, "value", Ee) : Ge !== null && ue(v, q, "value", Ge), v.push($e), null;
      case "menuitem":
        v.push(Te("menuitem"));
        for (var Xn in $)
          if (x.call($, Xn) && (Ee = $[Xn], Ee != null))
            switch (Xn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                ue(v, q, Xn, Ee);
            }
        return v.push(Ae), null;
      case "title":
        v.push(Te("title")), Ee = null;
        for (rn in $)
          if (x.call($, rn) && (Me = $[rn], Me != null))
            switch (rn) {
              case "children":
                Ee = Me;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                ue(v, q, rn, Me);
            }
        return v.push(Ae), Ee;
      case "listing":
      case "pre":
        v.push(Te(D)), Me = Ee = null;
        for (vt in $)
          if (x.call($, vt) && (Ge = $[vt], Ge != null))
            switch (vt) {
              case "children":
                Ee = Ge;
                break;
              case "dangerouslySetInnerHTML":
                Me = Ge;
                break;
              default:
                ue(v, q, vt, Ge);
            }
        if (v.push(Ae), Me != null) {
          if (Ee != null)
            throw Error(t(60));
          if (typeof Me != "object" || !("__html" in Me))
            throw Error(t(61));
          $ = Me.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? v.push(nt, u($)) : v.push(u("" + $)));
        }
        return typeof Ee == "string" && Ee[0] === `
` && v.push(nt), Ee;
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
        v.push(Te(D));
        for (var tr in $)
          if (x.call($, tr) && (Ee = $[tr], Ee != null))
            switch (tr) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, D));
              default:
                ue(v, q, tr, Ee);
            }
        return v.push($e), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return yt(v, $, D, q);
      case "html":
        return ke.insertionMode === 0 && v.push(Ye), yt(v, $, D, q);
      default:
        if (D.indexOf("-") === -1 && typeof $.is != "string")
          return yt(v, $, D, q);
        v.push(Te(D)), Me = Ee = null;
        for (_t in $)
          if (x.call($, _t) && (Ge = $[_t], Ge != null))
            switch (_t) {
              case "children":
                Ee = Ge;
                break;
              case "dangerouslySetInnerHTML":
                Me = Ge;
                break;
              case "style":
                Je(v, q, Ge);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                O(_t) && typeof Ge != "function" && typeof Ge != "symbol" && v.push(Oe, u(_t), he, u(B(Ge)), Fe);
            }
        return v.push(Ae), De(v, Me, Ee), Ee;
    }
  }
  var ft = m("</"), bt = m(">"), gt = m('<template id="'), Mt = m('"></template>'), Zt = m("<!--$-->"), an = m('<!--$?--><template id="'), Ut = m('"></template>'), Qt = m("<!--$!-->"), zt = m("<!--/$-->"), un = m("<template"), At = m('"'), Rt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var kn = m("></template>");
  function Ie(v, D, $) {
    if (i(v, an), $ === null)
      throw Error(t(395));
    return i(v, $), l(v, Ut);
  }
  var Et = m('<div hidden id="'), vn = m('">'), lt = m("</div>"), on = m('<svg aria-hidden="true" style="display:none" id="'), Xt = m('">'), $t = m("</svg>"), Jt = m('<math aria-hidden="true" style="display:none" id="'), wn = m('">'), Tn = m("</math>"), Dt = m('<table hidden id="'), Mn = m('">'), bn = m("</table>"), Bn = m('<table hidden><tbody id="'), Kt = m('">'), Hn = m("</tbody></table>"), Qn = m('<table hidden><tr id="'), Wn = m('">'), ln = m("</tr></table>"), zn = m('<table hidden><colgroup id="'), $n = m('">'), Vn = m("</colgroup></table>");
  function Dn(v, D, $, q) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return i(v, Et), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, vn);
      case 2:
        return i(v, on), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, Xt);
      case 3:
        return i(v, Jt), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, wn);
      case 4:
        return i(v, Dt), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, Mn);
      case 5:
        return i(v, Bn), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, Kt);
      case 6:
        return i(v, Qn), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, Wn);
      case 7:
        return i(
          v,
          zn
        ), i(v, D.segmentPrefix), i(v, u(q.toString(16))), l(v, $n);
      default:
        throw Error(t(397));
    }
  }
  function _e(v, D) {
    switch (D.insertionMode) {
      case 0:
      case 1:
        return l(v, lt);
      case 2:
        return l(v, $t);
      case 3:
        return l(v, Tn);
      case 4:
        return l(v, bn);
      case 5:
        return l(v, Hn);
      case 6:
        return l(v, ln);
      case 7:
        return l(v, Vn);
      default:
        throw Error(t(397));
    }
  }
  var ht = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), I = m('$RS("'), xe = m('","'), Xe = m('")<\/script>'), Be = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), pt = m('$RC("'), tt = m('","'), kt = m('")<\/script>'), Nt = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ue = m('$RX("'), Ot = m('"'), Vt = m(")<\/script>"), Ft = m(","), nn = /[<\u2028\u2029]/g;
  function st(v) {
    return JSON.stringify(v).replace(nn, function(D) {
      switch (D) {
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
  var wt = Object.assign, It = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), yn = Symbol.for("react.fragment"), _n = Symbol.for("react.strict_mode"), pn = Symbol.for("react.profiler"), hn = Symbol.for("react.provider"), sn = Symbol.for("react.context"), qt = Symbol.for("react.forward_ref"), Sn = Symbol.for("react.suspense"), qn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), U = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ve = Symbol.for("react.default_value"), Pe = Symbol.iterator;
  function Ke(v) {
    if (v == null)
      return null;
    if (typeof v == "function")
      return v.displayName || v.name || null;
    if (typeof v == "string")
      return v;
    switch (v) {
      case yn:
        return "Fragment";
      case Wt:
        return "Portal";
      case pn:
        return "Profiler";
      case _n:
        return "StrictMode";
      case Sn:
        return "Suspense";
      case qn:
        return "SuspenseList";
    }
    if (typeof v == "object")
      switch (v.$$typeof) {
        case sn:
          return (v.displayName || "Context") + ".Consumer";
        case hn:
          return (v._context.displayName || "Context") + ".Provider";
        case qt:
          var D = v.render;
          return v = v.displayName, v || (v = D.displayName || D.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
        case g:
          return D = v.displayName || null, D !== null ? D : Ke(v.type) || "Memo";
        case R:
          D = v._payload, v = v._init;
          try {
            return Ke(v(D));
          } catch {
          }
      }
    return null;
  }
  var it = {};
  function mt(v, D) {
    if (v = v.contextTypes, !v)
      return it;
    var $ = {}, q;
    for (q in v)
      $[q] = D[q];
    return $;
  }
  var dt = null;
  function de(v, D) {
    if (v !== D) {
      v.context._currentValue = v.parentValue, v = v.parent;
      var $ = D.parent;
      if (v === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        de(v, $);
      }
      D.context._currentValue = D.value;
    }
  }
  function pe(v) {
    v.context._currentValue = v.parentValue, v = v.parent, v !== null && pe(v);
  }
  function ge(v) {
    var D = v.parent;
    D !== null && ge(D), v.context._currentValue = v.value;
  }
  function Ne(v, D) {
    if (v.context._currentValue = v.parentValue, v = v.parent, v === null)
      throw Error(t(402));
    v.depth === D.depth ? de(v, D) : Ne(v, D);
  }
  function Ct(v, D) {
    var $ = D.parent;
    if ($ === null)
      throw Error(t(402));
    v.depth === $.depth ? de(v, $) : Ct(v, $), D.context._currentValue = D.value;
  }
  function cn(v) {
    var D = dt;
    D !== v && (D === null ? ge(v) : v === null ? pe(D) : D.depth === v.depth ? de(D, v) : D.depth > v.depth ? Ne(D, v) : Ct(D, v), dt = v);
  }
  var jn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(v, D) {
    v = v._reactInternals, v.queue !== null && v.queue.push(D);
  }, enqueueReplaceState: function(v, D) {
    v = v._reactInternals, v.replace = !0, v.queue = [D];
  }, enqueueForceUpdate: function() {
  } };
  function Jn(v, D, $, q) {
    var ke = v.state !== void 0 ? v.state : null;
    v.updater = jn, v.props = $, v.state = ke;
    var Ee = { queue: [], replace: !1 };
    v._reactInternals = Ee;
    var Me = D.contextType;
    if (v.context = typeof Me == "object" && Me !== null ? Me._currentValue : q, Me = D.getDerivedStateFromProps, typeof Me == "function" && (Me = Me($, ke), ke = Me == null ? ke : wt({}, ke, Me), v.state = ke), typeof D.getDerivedStateFromProps != "function" && typeof v.getSnapshotBeforeUpdate != "function" && (typeof v.UNSAFE_componentWillMount == "function" || typeof v.componentWillMount == "function"))
      if (D = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), D !== v.state && jn.enqueueReplaceState(v, v.state, null), Ee.queue !== null && 0 < Ee.queue.length)
        if (D = Ee.queue, Me = Ee.replace, Ee.queue = null, Ee.replace = !1, Me && D.length === 1)
          v.state = D[0];
        else {
          for (Ee = Me ? D[0] : v.state, ke = !0, Me = Me ? 1 : 0; Me < D.length; Me++) {
            var Ge = D[Me];
            Ge = typeof Ge == "function" ? Ge.call(v, Ee, $, q) : Ge, Ge != null && (ke ? (ke = !1, Ee = wt({}, Ee, Ge)) : wt(Ee, Ge));
          }
          v.state = Ee;
        }
      else
        Ee.queue = null;
  }
  var Un = { id: 1, overflow: "" };
  function pr(v, D, $) {
    var q = v.id;
    v = v.overflow;
    var ke = 32 - qr(q) - 1;
    q &= ~(1 << ke), $ += 1;
    var Ee = 32 - qr(D) + ke;
    if (30 < Ee) {
      var Me = ke - ke % 5;
      return Ee = (q & (1 << Me) - 1).toString(32), q >>= Me, ke -= Me, { id: 1 << 32 - qr(D) + ke | $ << ke | q, overflow: Ee + v };
    }
    return { id: 1 << Ee | $ << ke | q, overflow: v };
  }
  var qr = Math.clz32 ? Math.clz32 : Ha, Jo = Math.log, el = Math.LN2;
  function Ha(v) {
    return v >>>= 0, v === 0 ? 32 : 31 - (Jo(v) / el | 0) | 0;
  }
  function tl(v, D) {
    return v === D && (v !== 0 || 1 / v === 1 / D) || v !== v && D !== D;
  }
  var Wa = typeof Object.is == "function" ? Object.is : tl, hr = null, Gr = null, da = null, en = null, yr = !1, Kn = !1, Tr = 0, gr = null, fa = 0;
  function vr() {
    if (hr === null)
      throw Error(t(321));
    return hr;
  }
  function er() {
    if (0 < fa)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Va() {
    return en === null ? da === null ? (yr = !1, da = en = er()) : (yr = !0, en = da) : en.next === null ? (yr = !1, en = en.next = er()) : (yr = !0, en = en.next), en;
  }
  function ja() {
    Gr = hr = null, Kn = !1, da = null, fa = 0, en = gr = null;
  }
  function Bi(v, D) {
    return typeof D == "function" ? D(v) : D;
  }
  function Hi(v, D, $) {
    if (hr = vr(), en = Va(), yr) {
      var q = en.queue;
      if (D = q.dispatch, gr !== null && ($ = gr.get(q), $ !== void 0)) {
        gr.delete(q), q = en.memoizedState;
        do
          q = v(q, $.action), $ = $.next;
        while ($ !== null);
        return en.memoizedState = q, [q, D];
      }
      return [en.memoizedState, D];
    }
    return v = v === Bi ? typeof D == "function" ? D() : D : $ !== void 0 ? $(D) : D, en.memoizedState = v, v = en.queue = { last: null, dispatch: null }, v = v.dispatch = nl.bind(null, hr, v), [en.memoizedState, v];
  }
  function Wi(v, D) {
    if (hr = vr(), en = Va(), D = D === void 0 ? null : D, en !== null) {
      var $ = en.memoizedState;
      if ($ !== null && D !== null) {
        var q = $[1];
        e:
          if (q === null)
            q = !1;
          else {
            for (var ke = 0; ke < q.length && ke < D.length; ke++)
              if (!Wa(D[ke], q[ke])) {
                q = !1;
                break e;
              }
            q = !0;
          }
        if (q)
          return $[0];
      }
    }
    return v = v(), en.memoizedState = [v, D], v;
  }
  function nl(v, D, $) {
    if (25 <= fa)
      throw Error(t(301));
    if (v === hr)
      if (Kn = !0, v = { action: $, next: null }, gr === null && (gr = /* @__PURE__ */ new Map()), $ = gr.get(D), $ === void 0)
        gr.set(D, v);
      else {
        for (D = $; D.next !== null; )
          D = D.next;
        D.next = v;
      }
  }
  function rl() {
    throw Error(t(394));
  }
  function pa() {
  }
  var ha = { readContext: function(v) {
    return v._currentValue;
  }, useContext: function(v) {
    return vr(), v._currentValue;
  }, useMemo: Wi, useReducer: Hi, useRef: function(v) {
    hr = vr(), en = Va();
    var D = en.memoizedState;
    return D === null ? (v = { current: v }, en.memoizedState = v) : D;
  }, useState: function(v) {
    return Hi(Bi, v);
  }, useInsertionEffect: pa, useLayoutEffect: function() {
  }, useCallback: function(v, D) {
    return Wi(function() {
      return v;
    }, D);
  }, useImperativeHandle: pa, useEffect: pa, useDebugValue: pa, useDeferredValue: function(v) {
    return vr(), v;
  }, useTransition: function() {
    return vr(), [!1, rl];
  }, useId: function() {
    var v = Gr.treeContext, D = v.overflow;
    v = v.id, v = (v & ~(1 << 32 - qr(v) - 1)).toString(32) + D;
    var $ = ma;
    if ($ === null)
      throw Error(t(404));
    return D = Tr++, v = ":" + $.idPrefix + "R" + v, 0 < D && (v += "H" + D.toString(32)), v + ":";
  }, useMutableSource: function(v, D) {
    return vr(), D(v._source);
  }, useSyncExternalStore: function(v, D, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, ma = null, Zr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function al(v) {
    return console.error(v), null;
  }
  function Qr() {
  }
  function Ua(v, D, $, q, ke, Ee, Me, Ge, vt) {
    var _t = [], Pt = /* @__PURE__ */ new Set();
    return D = { destination: null, responseState: D, progressiveChunkSize: q === void 0 ? 12800 : q, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pt, pingedTasks: _t, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ke === void 0 ? al : ke, onAllReady: Ee === void 0 ? Qr : Ee, onShellReady: Me === void 0 ? Qr : Me, onShellError: Ge === void 0 ? Qr : Ge, onFatalError: vt === void 0 ? Qr : vt }, $ = Fr(D, 0, null, $, !1, !1), $.parentFlushed = !0, v = Ka(D, v, null, $, Pt, it, null, Un), _t.push(v), D;
  }
  function Ka(v, D, $, q, ke, Ee, Me, Ge) {
    v.allPendingTasks++, $ === null ? v.pendingRootTasks++ : $.pendingTasks++;
    var vt = { node: D, ping: function() {
      var _t = v.pingedTasks;
      _t.push(vt), _t.length === 1 && Xi(v);
    }, blockedBoundary: $, blockedSegment: q, abortSet: ke, legacyContext: Ee, context: Me, treeContext: Ge };
    return ke.add(vt), vt;
  }
  function Fr(v, D, $, q, ke, Ee) {
    return { status: 0, id: -1, index: D, parentFlushed: !1, chunks: [], children: [], formatContext: q, boundary: $, lastPushedText: ke, textEmbedded: Ee };
  }
  function Mr(v, D) {
    if (v = v.onError(D), v != null && typeof v != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof v + '" instead');
    return v;
  }
  function ya(v, D) {
    var $ = v.onShellError;
    $(D), $ = v.onFatalError, $(D), v.destination !== null ? (v.status = 2, y(v.destination, D)) : (v.status = 1, v.fatalError = D);
  }
  function Vi(v, D, $, q, ke) {
    for (hr = {}, Gr = D, Tr = 0, v = $(q, ke); Kn; )
      Kn = !1, Tr = 0, fa += 1, en = null, v = $(q, ke);
    return ja(), v;
  }
  function Ya(v, D, $, q) {
    var ke = $.render(), Ee = q.childContextTypes;
    if (Ee != null) {
      var Me = D.legacyContext;
      if (typeof $.getChildContext != "function")
        q = Me;
      else {
        $ = $.getChildContext();
        for (var Ge in $)
          if (!(Ge in Ee))
            throw Error(t(108, Ke(q) || "Unknown", Ge));
        q = wt({}, Me, $);
      }
      D.legacyContext = q, Yn(v, D, ke), D.legacyContext = Me;
    } else
      Yn(v, D, ke);
  }
  function ji(v, D) {
    if (v && v.defaultProps) {
      D = wt({}, D), v = v.defaultProps;
      for (var $ in v)
        D[$] === void 0 && (D[$] = v[$]);
      return D;
    }
    return D;
  }
  function ga(v, D, $, q, ke) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        ke = mt($, D.legacyContext);
        var Ee = $.contextType;
        Ee = new $(q, typeof Ee == "object" && Ee !== null ? Ee._currentValue : ke), Jn(Ee, $, q, ke), Ya(v, D, Ee, $);
      } else {
        Ee = mt($, D.legacyContext), ke = Vi(v, D, $, q, Ee);
        var Me = Tr !== 0;
        if (typeof ke == "object" && ke !== null && typeof ke.render == "function" && ke.$$typeof === void 0)
          Jn(ke, $, q, Ee), Ya(v, D, ke, $);
        else if (Me) {
          q = D.treeContext, D.treeContext = pr(q, 1, 0);
          try {
            Yn(v, D, ke);
          } finally {
            D.treeContext = q;
          }
        } else
          Yn(v, D, ke);
      }
    else if (typeof $ == "string") {
      switch (ke = D.blockedSegment, Ee = Qe(ke.chunks, $, q, v.responseState, ke.formatContext), ke.lastPushedText = !1, Me = ke.formatContext, ke.formatContext = K(Me, $, q), va(v, D, Ee), ke.formatContext = Me, $) {
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
          ke.chunks.push(ft, u($), bt);
      }
      ke.lastPushedText = !1;
    } else {
      switch ($) {
        case be:
        case U:
        case _n:
        case pn:
        case yn:
          Yn(v, D, q.children);
          return;
        case qn:
          Yn(v, D, q.children);
          return;
        case z:
          throw Error(t(343));
        case Sn:
          e: {
            $ = D.blockedBoundary, ke = D.blockedSegment, Ee = q.fallback, q = q.children, Me = /* @__PURE__ */ new Set();
            var Ge = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Me, errorDigest: null }, vt = Fr(v, ke.chunks.length, Ge, ke.formatContext, !1, !1);
            ke.children.push(vt), ke.lastPushedText = !1;
            var _t = Fr(v, 0, null, ke.formatContext, !1, !1);
            _t.parentFlushed = !0, D.blockedBoundary = Ge, D.blockedSegment = _t;
            try {
              if (va(
                v,
                D,
                q
              ), _t.lastPushedText && _t.textEmbedded && _t.chunks.push(V), _t.status = 1, xa(Ge, _t), Ge.pendingTasks === 0)
                break e;
            } catch (Pt) {
              _t.status = 4, Ge.forceClientRender = !0, Ge.errorDigest = Mr(v, Pt);
            } finally {
              D.blockedBoundary = $, D.blockedSegment = ke;
            }
            D = Ka(v, Ee, $, vt, Me, D.legacyContext, D.context, D.treeContext), v.pingedTasks.push(D);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case qt:
            if (q = Vi(v, D, $.render, q, ke), Tr !== 0) {
              $ = D.treeContext, D.treeContext = pr($, 1, 0);
              try {
                Yn(v, D, q);
              } finally {
                D.treeContext = $;
              }
            } else
              Yn(v, D, q);
            return;
          case g:
            $ = $.type, q = ji($, q), ga(v, D, $, q, ke);
            return;
          case hn:
            if (ke = q.children, $ = $._context, q = q.value, Ee = $._currentValue, $._currentValue = q, Me = dt, dt = q = { parent: Me, depth: Me === null ? 0 : Me.depth + 1, context: $, parentValue: Ee, value: q }, D.context = q, Yn(v, D, ke), v = dt, v === null)
              throw Error(t(403));
            q = v.parentValue, v.context._currentValue = q === ve ? v.context._defaultValue : q, v = dt = v.parent, D.context = v;
            return;
          case sn:
            q = q.children, q = q($._currentValue), Yn(v, D, q);
            return;
          case R:
            ke = $._init, $ = ke($._payload), q = ji($, q), ga(v, D, $, q, void 0);
            return;
        }
      throw Error(t(
        130,
        $ == null ? $ : typeof $,
        ""
      ));
    }
  }
  function Yn(v, D, $) {
    if (D.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case It:
          ga(v, D, $.type, $.props, $.ref);
          return;
        case Wt:
          throw Error(t(257));
        case R:
          var q = $._init;
          $ = q($._payload), Yn(v, D, $);
          return;
      }
      if (J($)) {
        Ui(v, D, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? q = null : (q = Pe && $[Pe] || $["@@iterator"], q = typeof q == "function" ? q : null), q && (q = q.call($))) {
        if ($ = q.next(), !$.done) {
          var ke = [];
          do
            ke.push($.value), $ = q.next();
          while (!$.done);
          Ui(v, D, ke);
        }
        return;
      }
      throw v = Object.prototype.toString.call($), Error(t(31, v === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : v));
    }
    typeof $ == "string" ? (q = D.blockedSegment, q.lastPushedText = we(D.blockedSegment.chunks, $, v.responseState, q.lastPushedText)) : typeof $ == "number" && (q = D.blockedSegment, q.lastPushedText = we(D.blockedSegment.chunks, "" + $, v.responseState, q.lastPushedText));
  }
  function Ui(v, D, $) {
    for (var q = $.length, ke = 0; ke < q; ke++) {
      var Ee = D.treeContext;
      D.treeContext = pr(Ee, q, ke);
      try {
        va(v, D, $[ke]);
      } finally {
        D.treeContext = Ee;
      }
    }
  }
  function va(v, D, $) {
    var q = D.blockedSegment.formatContext, ke = D.legacyContext, Ee = D.context;
    try {
      return Yn(v, D, $);
    } catch (vt) {
      if (ja(), typeof vt == "object" && vt !== null && typeof vt.then == "function") {
        $ = vt;
        var Me = D.blockedSegment, Ge = Fr(v, Me.chunks.length, null, Me.formatContext, Me.lastPushedText, !0);
        Me.children.push(Ge), Me.lastPushedText = !1, v = Ka(v, D.node, D.blockedBoundary, Ge, D.abortSet, D.legacyContext, D.context, D.treeContext).ping, $.then(v, v), D.blockedSegment.formatContext = q, D.legacyContext = ke, D.context = Ee, cn(Ee);
      } else
        throw D.blockedSegment.formatContext = q, D.legacyContext = ke, D.context = Ee, cn(Ee), vt;
    }
  }
  function il(v) {
    var D = v.blockedBoundary;
    v = v.blockedSegment, v.status = 3, Yi(this, D, v);
  }
  function Ki(v, D, $) {
    var q = v.blockedBoundary;
    v.blockedSegment.status = 3, q === null ? (D.allPendingTasks--, D.status !== 2 && (D.status = 2, D.destination !== null && D.destination.close())) : (q.pendingTasks--, q.forceClientRender || (q.forceClientRender = !0, v = $ === void 0 ? Error(t(432)) : $, q.errorDigest = D.onError(v), q.parentFlushed && D.clientRenderedBoundaries.push(q)), q.fallbackAbortableTasks.forEach(function(ke) {
      return Ki(ke, D, $);
    }), q.fallbackAbortableTasks.clear(), D.allPendingTasks--, D.allPendingTasks === 0 && (q = D.onAllReady, q()));
  }
  function xa(v, D) {
    if (D.chunks.length === 0 && D.children.length === 1 && D.children[0].boundary === null) {
      var $ = D.children[0];
      $.id = D.id, $.parentFlushed = !0, $.status === 1 && xa(v, $);
    } else
      v.completedSegments.push(D);
  }
  function Yi(v, D, $) {
    if (D === null) {
      if ($.parentFlushed) {
        if (v.completedRootSegment !== null)
          throw Error(t(389));
        v.completedRootSegment = $;
      }
      v.pendingRootTasks--, v.pendingRootTasks === 0 && (v.onShellError = Qr, D = v.onShellReady, D());
    } else
      D.pendingTasks--, D.forceClientRender || (D.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && xa(D, $), D.parentFlushed && v.completedBoundaries.push(D), D.fallbackAbortableTasks.forEach(il, v), D.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (xa(D, $), D.completedSegments.length === 1 && D.parentFlushed && v.partialBoundaries.push(D)));
    v.allPendingTasks--, v.allPendingTasks === 0 && (v = v.onAllReady, v());
  }
  function Xi(v) {
    if (v.status !== 2) {
      var D = dt, $ = Zr.current;
      Zr.current = ha;
      var q = ma;
      ma = v.responseState;
      try {
        var ke = v.pingedTasks, Ee;
        for (Ee = 0; Ee < ke.length; Ee++) {
          var Me = ke[Ee], Ge = v, vt = Me.blockedSegment;
          if (vt.status === 0) {
            cn(Me.context);
            try {
              Yn(Ge, Me, Me.node), vt.lastPushedText && vt.textEmbedded && vt.chunks.push(V), Me.abortSet.delete(Me), vt.status = 1, Yi(Ge, Me.blockedBoundary, vt);
            } catch (nr) {
              if (ja(), typeof nr == "object" && nr !== null && typeof nr.then == "function") {
                var _t = Me.ping;
                nr.then(_t, _t);
              } else {
                Me.abortSet.delete(Me), vt.status = 4;
                var Pt = Me.blockedBoundary, rn = nr, Xn = Mr(Ge, rn);
                if (Pt === null ? ya(Ge, rn) : (Pt.pendingTasks--, Pt.forceClientRender || (Pt.forceClientRender = !0, Pt.errorDigest = Xn, Pt.parentFlushed && Ge.clientRenderedBoundaries.push(Pt))), Ge.allPendingTasks--, Ge.allPendingTasks === 0) {
                  var tr = Ge.onAllReady;
                  tr();
                }
              }
            } finally {
            }
          }
        }
        ke.splice(0, Ee), v.destination !== null && Xa(v, v.destination);
      } catch (nr) {
        Mr(v, nr), ya(v, nr);
      } finally {
        ma = q, Zr.current = $, $ === ha && cn(D);
      }
    }
  }
  function ba(v, D, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var q = $.id = v.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, v = v.responseState, i(D, gt), i(D, v.placeholderPrefix), v = u(q.toString(16)), i(D, v), l(D, Mt);
      case 1:
        $.status = 2;
        var ke = !0;
        q = $.chunks;
        var Ee = 0;
        $ = $.children;
        for (var Me = 0; Me < $.length; Me++) {
          for (ke = $[Me]; Ee < ke.index; Ee++)
            i(D, q[Ee]);
          ke = Sa(v, D, ke);
        }
        for (; Ee < q.length - 1; Ee++)
          i(D, q[Ee]);
        return Ee < q.length && (ke = l(D, q[Ee])), ke;
      default:
        throw Error(t(390));
    }
  }
  function Sa(v, D, $) {
    var q = $.boundary;
    if (q === null)
      return ba(v, D, $);
    if (q.parentFlushed = !0, q.forceClientRender)
      q = q.errorDigest, l(D, Qt), i(D, un), q && (i(D, Rt), i(D, u(B(q))), i(D, At)), l(D, kn), ba(v, D, $);
    else if (0 < q.pendingTasks) {
      q.rootSegmentID = v.nextSegmentId++, 0 < q.completedSegments.length && v.partialBoundaries.push(q);
      var ke = v.responseState, Ee = ke.nextSuspenseID++;
      ke = m(ke.boundaryPrefix + Ee.toString(16)), q = q.id = ke, Ie(D, v.responseState, q), ba(v, D, $);
    } else if (q.byteSize > v.progressiveChunkSize)
      q.rootSegmentID = v.nextSegmentId++, v.completedBoundaries.push(q), Ie(D, v.responseState, q.id), ba(v, D, $);
    else {
      if (l(D, Zt), $ = q.completedSegments, $.length !== 1)
        throw Error(t(391));
      Sa(v, D, $[0]);
    }
    return l(D, zt);
  }
  function qi(v, D, $) {
    return Dn(D, v.responseState, $.formatContext, $.id), Sa(v, D, $), _e(D, $.formatContext);
  }
  function Gi(v, D, $) {
    for (var q = $.completedSegments, ke = 0; ke < q.length; ke++)
      Zi(v, D, $, q[ke]);
    if (q.length = 0, v = v.responseState, q = $.id, $ = $.rootSegmentID, i(D, v.startInlineScript), v.sentCompleteBoundaryFunction ? i(D, pt) : (v.sentCompleteBoundaryFunction = !0, i(D, Be)), q === null)
      throw Error(t(395));
    return $ = u($.toString(16)), i(D, q), i(D, tt), i(D, v.segmentPrefix), i(D, $), l(D, kt);
  }
  function Zi(v, D, $, q) {
    if (q.status === 2)
      return !0;
    var ke = q.id;
    if (ke === -1) {
      if ((q.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return qi(v, D, q);
    }
    return qi(v, D, q), v = v.responseState, i(D, v.startInlineScript), v.sentCompleteSegmentFunction ? i(D, I) : (v.sentCompleteSegmentFunction = !0, i(D, ht)), i(D, v.segmentPrefix), ke = u(ke.toString(16)), i(D, ke), i(D, xe), i(D, v.placeholderPrefix), i(D, ke), l(D, Xe);
  }
  function Xa(v, D) {
    n = new Uint8Array(512), a = 0;
    try {
      var $ = v.completedRootSegment;
      if ($ !== null && v.pendingRootTasks === 0) {
        Sa(v, D, $), v.completedRootSegment = null;
        var q = v.responseState.bootstrapChunks;
        for ($ = 0; $ < q.length - 1; $++)
          i(D, q[$]);
        $ < q.length && l(D, q[$]);
      }
      var ke = v.clientRenderedBoundaries, Ee;
      for (Ee = 0; Ee < ke.length; Ee++) {
        var Me = ke[Ee];
        q = D;
        var Ge = v.responseState, vt = Me.id, _t = Me.errorDigest, Pt = Me.errorMessage, rn = Me.errorComponentStack;
        if (i(q, Ge.startInlineScript), Ge.sentClientRenderFunction ? i(q, Ue) : (Ge.sentClientRenderFunction = !0, i(
          q,
          Nt
        )), vt === null)
          throw Error(t(395));
        i(q, vt), i(q, Ot), (_t || Pt || rn) && (i(q, Ft), i(q, u(st(_t || "")))), (Pt || rn) && (i(q, Ft), i(q, u(st(Pt || "")))), rn && (i(q, Ft), i(q, u(st(rn)))), l(q, Vt);
      }
      ke.splice(0, Ee);
      var Xn = v.completedBoundaries;
      for (Ee = 0; Ee < Xn.length; Ee++)
        Gi(v, D, Xn[Ee]);
      Xn.splice(0, Ee), d(D), n = new Uint8Array(512), a = 0;
      var tr = v.partialBoundaries;
      for (Ee = 0; Ee < tr.length; Ee++) {
        var nr = tr[Ee];
        e: {
          ke = v, Me = D;
          var Ea = nr.completedSegments;
          for (Ge = 0; Ge < Ea.length; Ge++)
            if (!Zi(
              ke,
              Me,
              nr,
              Ea[Ge]
            )) {
              Ge++, Ea.splice(0, Ge);
              var Ji = !1;
              break e;
            }
          Ea.splice(0, Ge), Ji = !0;
        }
        if (!Ji) {
          v.destination = null, Ee++, tr.splice(0, Ee);
          return;
        }
      }
      tr.splice(0, Ee);
      var qa = v.completedBoundaries;
      for (Ee = 0; Ee < qa.length; Ee++)
        Gi(v, D, qa[Ee]);
      qa.splice(0, Ee);
    } finally {
      d(D), v.allPendingTasks === 0 && v.pingedTasks.length === 0 && v.clientRenderedBoundaries.length === 0 && v.completedBoundaries.length === 0 && D.close();
    }
  }
  function Qi(v, D) {
    try {
      var $ = v.abortableTasks;
      $.forEach(function(q) {
        return Ki(q, v, D);
      }), $.clear(), v.destination !== null && Xa(v, v.destination);
    } catch (q) {
      Mr(v, q), ya(v, q);
    }
  }
  return Pu.renderToReadableStream = function(v, D) {
    return new Promise(function($, q) {
      var ke, Ee, Me = new Promise(function(Pt, rn) {
        Ee = Pt, ke = rn;
      }), Ge = Ua(v, ee(D ? D.identifierPrefix : void 0, D ? D.nonce : void 0, D ? D.bootstrapScriptContent : void 0, D ? D.bootstrapScripts : void 0, D ? D.bootstrapModules : void 0), Z(D ? D.namespaceURI : void 0), D ? D.progressiveChunkSize : void 0, D ? D.onError : void 0, Ee, function() {
        var Pt = new ReadableStream({ type: "bytes", pull: function(rn) {
          if (Ge.status === 1)
            Ge.status = 2, y(rn, Ge.fatalError);
          else if (Ge.status !== 2 && Ge.destination === null) {
            Ge.destination = rn;
            try {
              Xa(Ge, rn);
            } catch (Xn) {
              Mr(Ge, Xn), ya(Ge, Xn);
            }
          }
        }, cancel: function() {
          Qi(Ge);
        } }, { highWaterMark: 0 });
        Pt.allReady = Me, $(Pt);
      }, function(Pt) {
        Me.catch(function() {
        }), q(Pt);
      }, ke);
      if (D && D.signal) {
        var vt = D.signal, _t = function() {
          Qi(Ge, vt.reason), vt.removeEventListener("abort", _t);
        };
        vt.addEventListener("abort", _t);
      }
      Xi(Ge);
    });
  }, Pu.version = "18.2.0", Pu;
}
var Ai = {};
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
function $S() {
  return Lh || (Lh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(o) {
      {
        for (var c = arguments.length, S = new Array(c > 1 ? c - 1 : 0), C = 1; C < c; C++)
          S[C - 1] = arguments[C];
        l("warn", o, S);
      }
    }
    function i(o) {
      {
        for (var c = arguments.length, S = new Array(c > 1 ? c - 1 : 0), C = 1; C < c; C++)
          S[C - 1] = arguments[C];
        l("error", o, S);
      }
    }
    function l(o, c, S) {
      {
        var C = n.ReactDebugCurrentFrame, M = C.getStackAddendum();
        M !== "" && (c += "%s", S = S.concat([M]));
        var Q = S.map(function(fe) {
          return String(fe);
        });
        Q.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, Q);
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
    function b(o) {
      return o;
    }
    function A(o) {
      return o;
    }
    function w(o, c) {
      o.destroy(c);
    }
    function O(o) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, S = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S;
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
    function L(o, c) {
      if (k(o))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", c, O(o)), h(o);
    }
    function F(o, c) {
      if (k(o))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", c, O(o)), h(o);
    }
    function P(o) {
      if (k(o))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(o)), h(o);
    }
    var T = Object.prototype.hasOwnProperty, _ = 0, B = 1, Y = 2, X = 3, J = 4, re = 5, H = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", j = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", te = new RegExp("^[" + ae + "][" + j + "]*$"), oe = {}, ne = {};
    function ee(o) {
      return T.call(ne, o) ? !0 : T.call(oe, o) ? !1 : te.test(o) ? (ne[o] = !0, !0) : (oe[o] = !0, i("Invalid attribute name: `%s`", o), !1);
    }
    function G(o, c, S, C) {
      if (S !== null && S.type === _)
        return !1;
      switch (typeof c) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (C)
            return !1;
          if (S !== null)
            return !S.acceptsBooleans;
          var M = o.toLowerCase().slice(0, 5);
          return M !== "data-" && M !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Z(o) {
      return V.hasOwnProperty(o) ? V[o] : null;
    }
    function K(o, c, S, C, M, Q, fe) {
      this.acceptsBooleans = c === Y || c === X || c === J, this.attributeName = C, this.attributeNamespace = M, this.mustUseProperty = S, this.propertyName = o, this.type = c, this.sanitizeURL = Q, this.removeEmptyString = fe;
    }
    var V = {}, we = [
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
    we.forEach(function(o) {
      V[o] = new K(
        o,
        _,
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
      var c = o[0], S = o[1];
      V[c] = new K(
        c,
        B,
        !1,
        // mustUseProperty
        S,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
      V[o] = new K(
        o,
        Y,
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
      V[o] = new K(
        o,
        Y,
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
      V[o] = new K(
        o,
        X,
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
      V[o] = new K(
        o,
        X,
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
      V[o] = new K(
        o,
        J,
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
      V[o] = new K(
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
    }), ["rowSpan", "start"].forEach(function(o) {
      V[o] = new K(
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
    });
    var Se = /[\-\:]([a-z])/g, ce = function(o) {
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
      var c = o.replace(Se, ce);
      V[c] = new K(
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
      var c = o.replace(Se, ce);
      V[c] = new K(
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
      var c = o.replace(Se, ce);
      V[c] = new K(
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
      V[o] = new K(
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
    var Re = "xlinkHref";
    V[Re] = new K(
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
      V[o] = new K(
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
    var je = {
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
    function Je(o, c) {
      return o + c.charAt(0).toUpperCase() + c.substring(1);
    }
    var Oe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(je).forEach(function(o) {
      Oe.forEach(function(c) {
        je[Je(c, o)] = je[o];
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
    function Fe(o, c) {
      he[c.type] || c.onChange || c.onInput || c.readOnly || c.disabled || c.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), c.onChange || c.readOnly || c.disabled || c.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function le(o, c) {
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
    var ue = {
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
    }, Ae = {}, $e = new RegExp("^(aria)-[" + j + "]*$"), De = new RegExp("^(aria)[A-Z][" + j + "]*$");
    function Ze(o, c) {
      {
        if (T.call(Ae, c) && Ae[c])
          return !0;
        if (De.test(c)) {
          var S = "aria-" + c.slice(4).toLowerCase(), C = ue.hasOwnProperty(S) ? S : null;
          if (C == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", c), Ae[c] = !0, !0;
          if (c !== C)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", c, C), Ae[c] = !0, !0;
        }
        if ($e.test(c)) {
          var M = c.toLowerCase(), Q = ue.hasOwnProperty(M) ? M : null;
          if (Q == null)
            return Ae[c] = !0, !1;
          if (c !== Q)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", c, Q), Ae[c] = !0, !0;
        }
      }
      return !0;
    }
    function qe(o, c) {
      {
        var S = [];
        for (var C in c) {
          var M = Ze(o, C);
          M || S.push(C);
        }
        var Q = S.map(function(fe) {
          return "`" + fe + "`";
        }).join(", ");
        S.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, o) : S.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, o);
      }
    }
    function yt(o, c) {
      le(o, c) || qe(o, c);
    }
    var nt = !1;
    function Ve(o, c) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        c != null && c.value === null && !nt && (nt = !0, o === "select" && c.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var ze = {
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
    }, Te = function() {
    };
    {
      var Ye = {}, Qe = /^on./, ft = /^on[^A-Z]/, bt = new RegExp("^(aria)-[" + j + "]*$"), gt = new RegExp("^(aria)[A-Z][" + j + "]*$");
      Te = function(o, c, S, C) {
        if (T.call(Ye, c) && Ye[c])
          return !0;
        var M = c.toLowerCase();
        if (M === "onfocusin" || M === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ye[c] = !0, !0;
        if (C != null) {
          var Q = C.registrationNameDependencies, fe = C.possibleRegistrationNames;
          if (Q.hasOwnProperty(c))
            return !0;
          var Ce = fe.hasOwnProperty(M) ? fe[M] : null;
          if (Ce != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", c, Ce), Ye[c] = !0, !0;
          if (Qe.test(c))
            return i("Unknown event handler property `%s`. It will be ignored.", c), Ye[c] = !0, !0;
        } else if (Qe.test(c))
          return ft.test(c) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", c), Ye[c] = !0, !0;
        if (bt.test(c) || gt.test(c))
          return !0;
        if (M === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ye[c] = !0, !0;
        if (M === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ye[c] = !0, !0;
        if (M === "is" && S !== null && S !== void 0 && typeof S != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), Ye[c] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", c), Ye[c] = !0, !0;
        var He = Z(c), rt = He !== null && He.type === _;
        if (ze.hasOwnProperty(M)) {
          var ut = ze[M];
          if (ut !== c)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", c, ut), Ye[c] = !0, !0;
        } else if (!rt && c !== M)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", c, M), Ye[c] = !0, !0;
        return typeof S == "boolean" && G(c, S, He, !1) ? (S ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, c, c, S, c) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, c, c, S, c, c, c), Ye[c] = !0, !0) : rt ? !0 : G(c, S, He, !1) ? (Ye[c] = !0, !1) : ((S === "false" || S === "true") && He !== null && He.type === X && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, c, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', c, S), Ye[c] = !0), !0);
      };
    }
    var Mt = function(o, c, S) {
      {
        var C = [];
        for (var M in c) {
          var Q = Te(o, M, c[M], S);
          Q || C.push(M);
        }
        var fe = C.map(function(Ce) {
          return "`" + Ce + "`";
        }).join(", ");
        C.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o) : C.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", fe, o);
      }
    };
    function Zt(o, c, S) {
      le(o, c) || Mt(o, c, S);
    }
    var an = function() {
    };
    {
      var Ut = /^(?:webkit|moz|o)[A-Z]/, Qt = /^-ms-/, zt = /-(.)/g, un = /;\s*$/, At = {}, Rt = {}, kn = !1, Ie = !1, Et = function(o) {
        return o.replace(zt, function(c, S) {
          return S.toUpperCase();
        });
      }, vn = function(o) {
        At.hasOwnProperty(o) && At[o] || (At[o] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Et(o.replace(Qt, "ms-"))
        ));
      }, lt = function(o) {
        At.hasOwnProperty(o) && At[o] || (At[o] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, on = function(o, c) {
        Rt.hasOwnProperty(c) && Rt[c] || (Rt[c] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, c.replace(un, "")));
      }, Xt = function(o, c) {
        kn || (kn = !0, i("`NaN` is an invalid value for the `%s` css style property.", o));
      }, $t = function(o, c) {
        Ie || (Ie = !0, i("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      an = function(o, c) {
        o.indexOf("-") > -1 ? vn(o) : Ut.test(o) ? lt(o) : un.test(c) && on(o, c), typeof c == "number" && (isNaN(c) ? Xt(o, c) : isFinite(c) || $t(o, c));
      };
    }
    var Jt = an, wn = /["'&<>]/;
    function Tn(o) {
      P(o);
      var c = "" + o, S = wn.exec(c);
      if (!S)
        return c;
      var C, M = "", Q, fe = 0;
      for (Q = S.index; Q < c.length; Q++) {
        switch (c.charCodeAt(Q)) {
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
        fe !== Q && (M += c.substring(fe, Q)), fe = Q + 1, M += C;
      }
      return fe !== Q ? M + c.substring(fe, Q) : M;
    }
    function Dt(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Tn(o);
    }
    var Mn = /([A-Z])/g, bn = /^ms-/;
    function Bn(o) {
      return o.replace(Mn, "-$1").toLowerCase().replace(bn, "-ms-");
    }
    var Kt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Hn = !1;
    function Qn(o) {
      !Hn && Kt.test(o) && (Hn = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var Wn = Array.isArray;
    function ln(o) {
      return Wn(o);
    }
    var zn = "<script>", $n = "<\/script>", Vn = '<script src="', Dn = '<script type="module" src="', _e = '" async=""><\/script>';
    function ht(o) {
      return P(o), ("" + o).replace(I, xe);
    }
    var I = /(<\/|<)(s)(cript)/gi, xe = function(o, c, S, C) {
      return "" + c + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Xe(o, c, S, C, M) {
      var Q = o === void 0 ? "" : o, fe = c === void 0 ? zn : '<script nonce="' + Dt(c) + '">', Ce = [];
      if (S !== void 0 && Ce.push(fe, ht(S), $n), C !== void 0)
        for (var He = 0; He < C.length; He++)
          Ce.push(Vn, Dt(C[He]), _e);
      if (M !== void 0)
        for (var rt = 0; rt < M.length; rt++)
          Ce.push(Dn, Dt(M[rt]), _e);
      return {
        bootstrapChunks: Ce,
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
    var Be = 0, pt = 1, tt = 2, kt = 3, Nt = 4, Ue = 5, Ot = 6, Vt = 7;
    function Ft(o, c) {
      return {
        insertionMode: o,
        selectedValue: c
      };
    }
    function nn(o, c, S) {
      switch (c) {
        case "select":
          return Ft(pt, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return Ft(tt, null);
        case "math":
          return Ft(kt, null);
        case "foreignObject":
          return Ft(pt, null);
        case "table":
          return Ft(Nt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ft(Ue, null);
        case "colgroup":
          return Ft(Vt, null);
        case "tr":
          return Ft(Ot, null);
      }
      return o.insertionMode >= Nt || o.insertionMode === Be ? Ft(pt, null) : o;
    }
    var st = null;
    function wt(o) {
      var c = o.nextSuspenseID++;
      return o.boundaryPrefix + c.toString(16);
    }
    function It(o, c, S) {
      var C = o.idPrefix, M = ":" + C + "R" + c;
      return S > 0 && (M += "H" + S.toString(32)), M + ":";
    }
    function Wt(o) {
      return Dt(o);
    }
    var yn = "<!-- -->";
    function _n(o, c, S, C) {
      return c === "" ? C : (C && o.push(yn), o.push(Wt(c)), !0);
    }
    function pn(o, c, S, C) {
      S && C && o.push(yn);
    }
    var hn = /* @__PURE__ */ new Map();
    function sn(o) {
      var c = hn.get(o);
      if (c !== void 0)
        return c;
      var S = Dt(Bn(o));
      return hn.set(o, S), S;
    }
    var qt = ' style="', Sn = ":", qn = ";";
    function g(o, c, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var M in S)
        if (T.call(S, M)) {
          var Q = S[M];
          if (!(Q == null || typeof Q == "boolean" || Q === "")) {
            var fe = void 0, Ce = void 0, He = M.indexOf("--") === 0;
            He ? (fe = Dt(M), F(Q, M), Ce = Dt(("" + Q).trim())) : (Jt(M, Q), fe = sn(M), typeof Q == "number" ? Q !== 0 && !T.call(je, M) ? Ce = Q + "px" : Ce = "" + Q : (F(Q, M), Ce = Dt(("" + Q).trim()))), C ? (C = !1, o.push(qt, fe, Sn, Ce)) : o.push(qn, fe, Sn, Ce);
          }
        }
      C || o.push(U);
    }
    var R = " ", z = '="', U = '"', be = '=""';
    function ve(o, c, S, C) {
      switch (S) {
        case "style": {
          g(o, c, C);
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
        !(S.length > 2 && (S[0] === "o" || S[0] === "O") && (S[1] === "n" || S[1] === "N"))
      ) {
        var M = Z(S);
        if (M !== null) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!M.acceptsBooleans)
                return;
          }
          var Q = M.attributeName, fe = Q;
          switch (M.type) {
            case X:
              C && o.push(R, fe, be);
              return;
            case J:
              C === !0 ? o.push(R, fe, be) : C === !1 || o.push(R, fe, z, Dt(C), U);
              return;
            case re:
              isNaN(C) || o.push(R, fe, z, Dt(C), U);
              break;
            case H:
              !isNaN(C) && C >= 1 && o.push(R, fe, z, Dt(C), U);
              break;
            default:
              M.sanitizeURL && (L(C, Q), C = "" + C, Qn(C)), o.push(R, fe, z, Dt(C), U);
          }
        } else if (ee(S)) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ce = S.toLowerCase().slice(0, 5);
              if (Ce !== "data-" && Ce !== "aria-")
                return;
            }
          }
          o.push(R, S, z, Dt(C), U);
        }
      }
    }
    var Pe = ">", Ke = "/>";
    function it(o, c, S) {
      if (c != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = c.__html;
        C != null && (P(C), o.push("" + C));
      }
    }
    var mt = !1, dt = !1, de = !1, pe = !1, ge = !1, Ne = !1, Ct = !1;
    function cn(o, c) {
      {
        var S = o[c];
        if (S != null) {
          var C = ln(S);
          o.multiple && !C ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", c) : !o.multiple && C && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", c);
        }
      }
    }
    function jn(o, c, S) {
      Fe("select", c), cn(c, "value"), cn(c, "defaultValue"), c.value !== void 0 && c.defaultValue !== void 0 && !de && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), de = !0), o.push(Kn("select"));
      var C = null, M = null;
      for (var Q in c)
        if (T.call(c, Q)) {
          var fe = c[Q];
          if (fe == null)
            continue;
          switch (Q) {
            case "children":
              C = fe;
              break;
            case "dangerouslySetInnerHTML":
              M = fe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ve(o, S, Q, fe);
              break;
          }
        }
      return o.push(Pe), it(o, M, C), C;
    }
    function Jn(o) {
      var c = "";
      return e.Children.forEach(o, function(S) {
        S != null && (c += S, !ge && typeof S != "string" && typeof S != "number" && (ge = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), c;
    }
    var Un = ' selected=""';
    function pr(o, c, S, C) {
      var M = C.selectedValue;
      o.push(Kn("option"));
      var Q = null, fe = null, Ce = null, He = null;
      for (var rt in c)
        if (T.call(c, rt)) {
          var ut = c[rt];
          if (ut == null)
            continue;
          switch (rt) {
            case "children":
              Q = ut;
              break;
            case "selected":
              Ce = ut, Ct || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ct = !0);
              break;
            case "dangerouslySetInnerHTML":
              He = ut;
              break;
            case "value":
              fe = ut;
            default:
              ve(o, S, rt, ut);
              break;
          }
        }
      if (M != null) {
        var Tt;
        if (fe !== null ? (L(fe, "value"), Tt = "" + fe) : (He !== null && (Ne || (Ne = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Tt = Jn(Q)), ln(M))
          for (var dn = 0; dn < M.length; dn++) {
            L(M[dn], "value");
            var On = "" + M[dn];
            if (On === Tt) {
              o.push(Un);
              break;
            }
          }
        else
          L(M, "select.value"), "" + M === Tt && o.push(Un);
      } else
        Ce && o.push(Un);
      return o.push(Pe), it(o, He, Q), Q;
    }
    function qr(o, c, S) {
      Fe("input", c), c.checked !== void 0 && c.defaultChecked !== void 0 && !dt && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), dt = !0), c.value !== void 0 && c.defaultValue !== void 0 && !mt && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), mt = !0), o.push(Kn("input"));
      var C = null, M = null, Q = null, fe = null;
      for (var Ce in c)
        if (T.call(c, Ce)) {
          var He = c[Ce];
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
              Q = He;
              break;
            case "value":
              C = He;
              break;
            default:
              ve(o, S, Ce, He);
              break;
          }
        }
      return Q !== null ? ve(o, S, "checked", Q) : fe !== null && ve(o, S, "checked", fe), C !== null ? ve(o, S, "value", C) : M !== null && ve(o, S, "value", M), o.push(Ke), null;
    }
    function Jo(o, c, S) {
      Fe("textarea", c), c.value !== void 0 && c.defaultValue !== void 0 && !pe && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), pe = !0), o.push(Kn("textarea"));
      var C = null, M = null, Q = null;
      for (var fe in c)
        if (T.call(c, fe)) {
          var Ce = c[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              Q = Ce;
              break;
            case "value":
              C = Ce;
              break;
            case "defaultValue":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ve(o, S, fe, Ce);
              break;
          }
        }
      if (C === null && M !== null && (C = M), o.push(Pe), Q != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ln(Q)) {
          if (Q.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          P(Q[0]), C = "" + Q[0];
        }
        P(Q), C = "" + Q;
      }
      return typeof C == "string" && C[0] === `
` && o.push(Gr), C !== null && (L(C, "value"), o.push(Wt("" + C))), null;
    }
    function el(o, c, S, C) {
      o.push(Kn(S));
      for (var M in c)
        if (T.call(c, M)) {
          var Q = c[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ve(o, C, M, Q);
              break;
          }
        }
      return o.push(Ke), null;
    }
    function Ha(o, c, S) {
      o.push(Kn("menuitem"));
      for (var C in c)
        if (T.call(c, C)) {
          var M = c[C];
          if (M == null)
            continue;
          switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ve(o, S, C, M);
              break;
          }
        }
      return o.push(Pe), null;
    }
    function tl(o, c, S) {
      o.push(Kn("title"));
      var C = null;
      for (var M in c)
        if (T.call(c, M)) {
          var Q = c[M];
          if (Q == null)
            continue;
          switch (M) {
            case "children":
              C = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ve(o, S, M, Q);
              break;
          }
        }
      o.push(Pe);
      {
        var fe = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && fe.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : fe != null && typeof fe != "string" && typeof fe != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function Wa(o, c, S, C) {
      o.push(Kn(S));
      var M = null, Q = null;
      for (var fe in c)
        if (T.call(c, fe)) {
          var Ce = c[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ce;
              break;
            default:
              ve(o, C, fe, Ce);
              break;
          }
        }
      return o.push(Pe), it(o, Q, M), typeof M == "string" ? (o.push(Wt(M)), null) : M;
    }
    function hr(o, c, S, C) {
      o.push(Kn(S));
      var M = null, Q = null;
      for (var fe in c)
        if (T.call(c, fe)) {
          var Ce = c[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ce;
              break;
            case "style":
              g(o, C, Ce);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ee(fe) && typeof Ce != "function" && typeof Ce != "symbol" && o.push(R, fe, z, Dt(Ce), U);
              break;
          }
        }
      return o.push(Pe), it(o, Q, M), M;
    }
    var Gr = `
`;
    function da(o, c, S, C) {
      o.push(Kn(S));
      var M = null, Q = null;
      for (var fe in c)
        if (T.call(c, fe)) {
          var Ce = c[fe];
          if (Ce == null)
            continue;
          switch (fe) {
            case "children":
              M = Ce;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ce;
              break;
            default:
              ve(o, C, fe, Ce);
              break;
          }
        }
      if (o.push(Pe), Q != null) {
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
    var en = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, yr = /* @__PURE__ */ new Map();
    function Kn(o) {
      var c = yr.get(o);
      if (c === void 0) {
        if (!en.test(o))
          throw new Error("Invalid tag: " + o);
        c = "<" + o, yr.set(o, c);
      }
      return c;
    }
    var Tr = "<!DOCTYPE html>";
    function gr(o, c, S, C, M) {
      switch (yt(c, S), Ve(c, S), Zt(c, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), M.insertionMode !== tt && M.insertionMode !== kt && c.indexOf("-") === -1 && typeof S.is != "string" && c.toLowerCase() !== c && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", c), c) {
        case "select":
          return jn(o, S, C);
        case "option":
          return pr(o, S, C, M);
        case "textarea":
          return Jo(o, S, C);
        case "input":
          return qr(o, S, C);
        case "menuitem":
          return Ha(o, S, C);
        case "title":
          return tl(o, S, C);
        case "listing":
        case "pre":
          return da(o, S, c, C);
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
          return el(o, S, c, C);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Wa(o, S, c, C);
        case "html":
          return M.insertionMode === Be && o.push(Tr), Wa(o, S, c, C);
        default:
          return c.indexOf("-") === -1 && typeof S.is != "string" ? Wa(o, S, c, C) : hr(o, S, c, C);
      }
    }
    var fa = "</", vr = ">";
    function er(o, c, S) {
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
          o.push(fa, c, vr);
      }
    }
    function Va(o, c) {
      for (var S = c.bootstrapChunks, C = 0; C < S.length - 1; C++)
        u(o, S[C]);
      return C < S.length ? m(o, S[C]) : !0;
    }
    var ja = '<template id="', Bi = '"></template>';
    function Hi(o, c, S) {
      u(o, ja), u(o, c.placeholderPrefix);
      var C = S.toString(16);
      return u(o, C), m(o, Bi);
    }
    var Wi = "<!--$-->", nl = '<!--$?--><template id="', rl = '"></template>', pa = "<!--$!-->", ha = "<!--/$-->", ma = "<template", Zr = '"', al = ' data-dgst="', Qr = ' data-msg="', Ua = ' data-stck="', Ka = "></template>";
    function Fr(o, c) {
      return m(o, Wi);
    }
    function Mr(o, c, S) {
      if (u(o, nl), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, S), m(o, rl);
    }
    function ya(o, c, S, C, M) {
      var Q;
      return Q = m(o, pa), u(o, ma), S && (u(o, al), u(o, Dt(S)), u(o, Zr)), C && (u(o, Qr), u(o, Dt(C)), u(o, Zr)), M && (u(o, Ua), u(o, Dt(M)), u(o, Zr)), Q = m(o, Ka), Q;
    }
    function Vi(o, c) {
      return m(o, ha);
    }
    function Ya(o, c) {
      return m(o, ha);
    }
    function ji(o, c) {
      return m(o, ha);
    }
    var ga = '<div hidden id="', Yn = '">', Ui = "</div>", va = '<svg aria-hidden="true" style="display:none" id="', il = '">', Ki = "</svg>", xa = '<math aria-hidden="true" style="display:none" id="', Yi = '">', Xi = "</math>", ba = '<table hidden id="', Sa = '">', qi = "</table>", Gi = '<table hidden><tbody id="', Zi = '">', Xa = "</tbody></table>", Qi = '<table hidden><tr id="', v = '">', D = "</tr></table>", $ = '<table hidden><colgroup id="', q = '">', ke = "</colgroup></table>";
    function Ee(o, c, S, C) {
      switch (S.insertionMode) {
        case Be:
        case pt:
          return u(o, ga), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, Yn);
        case tt:
          return u(o, va), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, il);
        case kt:
          return u(o, xa), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, Yi);
        case Nt:
          return u(o, ba), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, Sa);
        case Ue:
          return u(o, Gi), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, Zi);
        case Ot:
          return u(o, Qi), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, v);
        case Vt:
          return u(o, $), u(o, c.segmentPrefix), u(o, C.toString(16)), m(o, q);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Me(o, c) {
      switch (c.insertionMode) {
        case Be:
        case pt:
          return m(o, Ui);
        case tt:
          return m(o, Ki);
        case kt:
          return m(o, Xi);
        case Nt:
          return m(o, qi);
        case Ue:
          return m(o, Xa);
        case Ot:
          return m(o, D);
        case Vt:
          return m(o, ke);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ge = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", vt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', _t = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pt = Ge + ';$RS("', rn = '$RS("', Xn = '","', tr = '")<\/script>';
    function nr(o, c, S) {
      u(o, c.startInlineScript), c.sentCompleteSegmentFunction ? u(o, rn) : (c.sentCompleteSegmentFunction = !0, u(o, Pt)), u(o, c.segmentPrefix);
      var C = S.toString(16);
      return u(o, C), u(o, Xn), u(o, c.placeholderPrefix), u(o, C), m(o, tr);
    }
    var Ea = vt + ';$RC("', Ji = '$RC("', qa = '","', Dc = '")<\/script>';
    function _c(o, c, S, C) {
      if (u(o, c.startInlineScript), c.sentCompleteBoundaryFunction ? u(o, Ji) : (c.sentCompleteBoundaryFunction = !0, u(o, Ea)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var M = C.toString(16);
      return u(o, S), u(o, qa), u(o, c.segmentPrefix), u(o, M), m(o, Dc);
    }
    var Nc = _t + ';$RX("', Oc = '$RX("', Fc = '"', Mc = ")<\/script>", ol = ",";
    function zc(o, c, S, C, M, Q) {
      if (u(o, c.startInlineScript), c.sentClientRenderFunction ? u(o, Oc) : (c.sentClientRenderFunction = !0, u(o, Nc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, S), u(o, Fc), (C || M || Q) && (u(o, ol), u(o, ll(C || ""))), (M || Q) && (u(o, ol), u(o, ll(M || ""))), Q && (u(o, ol), u(o, ll(Q))), m(o, Mc);
    }
    var $c = /[<\u2028\u2029]/g;
    function ll(o) {
      var c = JSON.stringify(o);
      return c.replace($c, function(S) {
        switch (S) {
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
    function Ic(o, c) {
      var S = Xe(c, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: S.bootstrapChunks,
        startInlineScript: S.startInlineScript,
        placeholderPrefix: S.placeholderPrefix,
        segmentPrefix: S.segmentPrefix,
        boundaryPrefix: S.boundaryPrefix,
        idPrefix: S.idPrefix,
        nextSuspenseID: S.nextSuspenseID,
        sentCompleteSegmentFunction: S.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: S.sentCompleteBoundaryFunction,
        sentClientRenderFunction: S.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: o
      };
    }
    function sl() {
      return {
        insertionMode: pt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ls(o, c, S, C) {
      return S.generateStaticMarkup ? (o.push(Dt(c)), !1) : _n(o, c, S, C);
    }
    function Ps(o, c, S, C) {
      if (!c.generateStaticMarkup)
        return pn(o, c, S, C);
    }
    function ul(o, c) {
      return c.generateStaticMarkup ? !0 : Fr(o);
    }
    function sr(o, c, S, C, M) {
      return c.generateStaticMarkup ? !0 : ya(o, c, S, C, M);
    }
    function Bc(o, c) {
      return c.generateStaticMarkup ? !0 : Vi(o);
    }
    function Rs(o, c) {
      return c.generateStaticMarkup ? !0 : ji(o);
    }
    var rr = Object.assign, Ds = Symbol.for("react.element"), cl = Symbol.for("react.portal"), eo = Symbol.for("react.fragment"), to = Symbol.for("react.strict_mode"), no = Symbol.for("react.profiler"), Ga = Symbol.for("react.provider"), Za = Symbol.for("react.context"), Qa = Symbol.for("react.forward_ref"), ka = Symbol.for("react.suspense"), dl = Symbol.for("react.suspense_list"), fl = Symbol.for("react.memo"), ro = Symbol.for("react.lazy"), Hc = Symbol.for("react.scope"), _s = Symbol.for("react.debug_trace_mode"), Wc = Symbol.for("react.legacy_hidden"), Vc = Symbol.for("react.default_value"), Ns = Symbol.iterator, Os = "@@iterator";
    function gn(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = Ns && o[Ns] || o[Os];
      return typeof c == "function" ? c : null;
    }
    function Ja(o, c, S) {
      var C = o.displayName;
      if (C)
        return C;
      var M = c.displayName || c.name || "";
      return M !== "" ? S + "(" + M + ")" : S;
    }
    function pl(o) {
      return o.displayName || "Context";
    }
    function mn(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case eo:
          return "Fragment";
        case cl:
          return "Portal";
        case no:
          return "Profiler";
        case to:
          return "StrictMode";
        case ka:
          return "Suspense";
        case dl:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Za:
            var c = o;
            return pl(c) + ".Consumer";
          case Ga:
            var S = o;
            return pl(S._context) + ".Provider";
          case Qa:
            return Ja(o, o.render, "ForwardRef");
          case fl:
            var C = o.displayName || null;
            return C !== null ? C : mn(o.type) || "Memo";
          case ro: {
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
    var wa = 0, hl, ml, yl, gl, vl, Fs, Ms;
    function ao() {
    }
    ao.__reactDisabledLog = !0;
    function xl() {
      {
        if (wa === 0) {
          hl = console.log, ml = console.info, yl = console.warn, gl = console.error, vl = console.group, Fs = console.groupCollapsed, Ms = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: ao,
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
    function ei() {
      {
        if (wa--, wa === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rr({}, o, {
              value: hl
            }),
            info: rr({}, o, {
              value: ml
            }),
            warn: rr({}, o, {
              value: yl
            }),
            error: rr({}, o, {
              value: gl
            }),
            group: rr({}, o, {
              value: vl
            }),
            groupCollapsed: rr({}, o, {
              value: Fs
            }),
            groupEnd: rr({}, o, {
              value: Ms
            })
          });
        }
        wa < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ti = n.ReactCurrentDispatcher, Ta;
    function ni(o, c, S) {
      {
        if (Ta === void 0)
          try {
            throw Error();
          } catch (M) {
            var C = M.stack.trim().match(/\n( *(at )?)/);
            Ta = C && C[1] || "";
          }
        return `
` + Ta + o;
      }
    }
    var ri = !1, io;
    {
      var zs = typeof WeakMap == "function" ? WeakMap : Map;
      io = new zs();
    }
    function bl(o, c) {
      if (!o || ri)
        return "";
      {
        var S = io.get(o);
        if (S !== void 0)
          return S;
      }
      var C;
      ri = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ti.current, ti.current = null, xl();
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
            } catch (fr) {
              C = fr;
            }
            Reflect.construct(o, [], fe);
          } else {
            try {
              fe.call();
            } catch (fr) {
              C = fr;
            }
            o.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fr) {
            C = fr;
          }
          o();
        }
      } catch (fr) {
        if (fr && C && typeof fr.stack == "string") {
          for (var Ce = fr.stack.split(`
`), He = C.stack.split(`
`), rt = Ce.length - 1, ut = He.length - 1; rt >= 1 && ut >= 0 && Ce[rt] !== He[ut]; )
            ut--;
          for (; rt >= 1 && ut >= 0; rt--, ut--)
            if (Ce[rt] !== He[ut]) {
              if (rt !== 1 || ut !== 1)
                do
                  if (rt--, ut--, ut < 0 || Ce[rt] !== He[ut]) {
                    var Tt = `
` + Ce[rt].replace(" at new ", " at ");
                    return o.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", o.displayName)), typeof o == "function" && io.set(o, Tt), Tt;
                  }
                while (rt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        ri = !1, ti.current = Q, ei(), Error.prepareStackTrace = M;
      }
      var dn = o ? o.displayName || o.name : "", On = dn ? ni(dn) : "";
      return typeof o == "function" && io.set(o, On), On;
    }
    function Sl(o, c, S) {
      return bl(o, !0);
    }
    function El(o, c, S) {
      return bl(o, !1);
    }
    function $s(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ca(o, c, S) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return bl(o, $s(o));
      if (typeof o == "string")
        return ni(o);
      switch (o) {
        case ka:
          return ni("Suspense");
        case dl:
          return ni("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Qa:
            return El(o.render);
          case fl:
            return Ca(o.type, c, S);
          case ro: {
            var C = o, M = C._payload, Q = C._init;
            try {
              return Ca(Q(M), c, S);
            } catch {
            }
          }
        }
      return "";
    }
    var kl = {}, oo = n.ReactDebugCurrentFrame;
    function Jr(o) {
      if (o) {
        var c = o._owner, S = Ca(o.type, o._source, c ? c.type : null);
        oo.setExtraStackFrame(S);
      } else
        oo.setExtraStackFrame(null);
    }
    function wl(o, c, S, C, M) {
      {
        var Q = Function.call.bind(T);
        for (var fe in o)
          if (Q(o, fe)) {
            var Ce = void 0;
            try {
              if (typeof o[fe] != "function") {
                var He = Error((C || "React class") + ": " + S + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Ce = o[fe](c, fe, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Ce = rt;
            }
            Ce && !(Ce instanceof Error) && (Jr(M), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, fe, typeof Ce), Jr(null)), Ce instanceof Error && !(Ce.message in kl) && (kl[Ce.message] = !0, Jr(M), i("Failed %s type: %s", S, Ce.message), Jr(null));
          }
      }
    }
    var Tl;
    Tl = {};
    var zr = {};
    Object.freeze(zr);
    function Is(o, c) {
      {
        var S = o.contextTypes;
        if (!S)
          return zr;
        var C = {};
        for (var M in S)
          C[M] = c[M];
        {
          var Q = mn(o) || "Unknown";
          wl(S, C, "context", Q);
        }
        return C;
      }
    }
    function ea(o, c, S, C) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var M = mn(c) || "Unknown";
            Tl[M] || (Tl[M] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", M, M));
          }
          return S;
        }
        var Q = o.getChildContext();
        for (var fe in Q)
          if (!(fe in C))
            throw new Error((mn(c) || "Unknown") + '.getChildContext(): key "' + fe + '" is not defined in childContextTypes.');
        {
          var Ce = mn(c) || "Unknown";
          wl(C, Q, "child context", Ce);
        }
        return rr({}, S, Q);
      }
    }
    var ta;
    ta = {};
    var Cl = null, xr = null;
    function lo(o) {
      o.context._currentValue2 = o.parentValue;
    }
    function so(o) {
      o.context._currentValue2 = o.value;
    }
    function ai(o, c) {
      if (o !== c) {
        lo(o);
        var S = o.parent, C = c.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ai(S, C);
        }
        so(c);
      }
    }
    function Al(o) {
      lo(o);
      var c = o.parent;
      c !== null && Al(c);
    }
    function ii(o) {
      var c = o.parent;
      c !== null && ii(c), so(o);
    }
    function Bs(o, c) {
      lo(o);
      var S = o.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === c.depth ? ai(S, c) : Bs(S, c);
    }
    function Hs(o, c) {
      var S = c.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === S.depth ? ai(o, S) : Hs(o, S), so(c);
    }
    function uo(o) {
      var c = xr, S = o;
      c !== S && (c === null ? ii(S) : S === null ? Al(c) : c.depth === S.depth ? ai(c, S) : c.depth > S.depth ? Bs(c, S) : Hs(c, S), xr = S);
    }
    function oi(o, c) {
      var S;
      S = o._currentValue2, o._currentValue2 = c, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      var C = xr, M = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: o,
        parentValue: S,
        value: c
      };
      return xr = M, M;
    }
    function Ll(o) {
      var c = xr;
      if (c === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      c.context !== o && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = c.parentValue;
        S === Vc ? c.context._currentValue2 = c.context._defaultValue : c.context._currentValue2 = S, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      }
      return xr = c.parent;
    }
    function jc() {
      return xr;
    }
    function Aa(o) {
      var c = o._currentValue2;
      return c;
    }
    function co(o) {
      return o._reactInternals;
    }
    function Pl(o, c) {
      o._reactInternals = c;
    }
    var fo = {}, po = {}, li, ho, La, si, mo, Pa, yo, go, vo;
    {
      li = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set();
      var Ws = /* @__PURE__ */ new Set();
      Pa = function(o, c) {
        if (!(o === null || typeof o == "function")) {
          var S = c + "_" + o;
          Ws.has(S) || (Ws.add(S), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c, o));
        }
      }, mo = function(o, c) {
        if (c === void 0) {
          var S = mn(o) || "Component";
          si.has(S) || (si.add(S), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Vs(o, c) {
      {
        var S = o.constructor, C = S && mn(S) || "ReactClass", M = C + "." + c;
        if (fo[M])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, c, c, C), fo[M] = !0;
      }
    }
    var js = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, c, S) {
        var C = co(o);
        C.queue === null ? Vs(o, "setState") : (C.queue.push(c), S != null && Pa(S, "setState"));
      },
      enqueueReplaceState: function(o, c, S) {
        var C = co(o);
        C.replace = !0, C.queue = [c], S != null && Pa(S, "setState");
      },
      enqueueForceUpdate: function(o, c) {
        var S = co(o);
        S.queue === null ? Vs(o, "forceUpdate") : c != null && Pa(c, "setState");
      }
    };
    function Uc(o, c, S, C, M) {
      var Q = S(M, C);
      mo(c, Q);
      var fe = Q == null ? C : rr({}, C, Q);
      return fe;
    }
    function Kc(o, c, S) {
      var C = zr, M = o.contextType;
      if ("contextType" in o) {
        var Q = (
          // Allow null for conditional declaration
          M === null || M !== void 0 && M.$$typeof === Za && M._context === void 0
        );
        if (!Q && !vo.has(o)) {
          vo.add(o);
          var fe = "";
          M === void 0 ? fe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof M != "object" ? fe = " However, it is set to a " + typeof M + "." : M.$$typeof === Ga ? fe = " Did you accidentally pass the Context.Provider instead?" : M._context !== void 0 ? fe = " Did you accidentally pass the Context.Consumer instead?" : fe = " However, it is set to an object with keys {" + Object.keys(M).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(o) || "Component", fe);
        }
      }
      typeof M == "object" && M !== null ? C = Aa(M) : C = S;
      var Ce = new o(c, C);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (Ce.state === null || Ce.state === void 0)) {
          var He = mn(o) || "Component";
          li.has(He) || (li.add(He), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", He, Ce.state === null ? "null" : "undefined", He));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof Ce.getSnapshotBeforeUpdate == "function") {
          var rt = null, ut = null, Tt = null;
          if (typeof Ce.componentWillMount == "function" && Ce.componentWillMount.__suppressDeprecationWarning !== !0 ? rt = "componentWillMount" : typeof Ce.UNSAFE_componentWillMount == "function" && (rt = "UNSAFE_componentWillMount"), typeof Ce.componentWillReceiveProps == "function" && Ce.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ut = "componentWillReceiveProps" : typeof Ce.UNSAFE_componentWillReceiveProps == "function" && (ut = "UNSAFE_componentWillReceiveProps"), typeof Ce.componentWillUpdate == "function" && Ce.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Tt = "componentWillUpdate" : typeof Ce.UNSAFE_componentWillUpdate == "function" && (Tt = "UNSAFE_componentWillUpdate"), rt !== null || ut !== null || Tt !== null) {
            var dn = mn(o) || "Component", On = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(dn) || (La.add(dn), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, dn, On, rt !== null ? `
  ` + rt : "", ut !== null ? `
  ` + ut : "", Tt !== null ? `
  ` + Tt : ""));
          }
        }
      }
      return Ce;
    }
    function Us(o, c, S) {
      {
        var C = mn(c) || "Component", M = o.render;
        M || (c.prototype && typeof c.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), o.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), o.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), o.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), c.contextType && c.contextTypes && !go.has(c) && (go.add(c), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof o.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), c.prototype && c.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(c) || "A pure component"), typeof o.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof o.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof o.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof o.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var Q = o.props !== S;
        o.props !== void 0 && Q && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), o.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !ho.has(c) && (ho.add(c), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(c))), typeof o.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof o.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof c.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var fe = o.state;
        fe && (typeof fe != "object" || ln(fe)) && i("%s.state: must be set to an object or null", C), typeof o.getChildContext == "function" && typeof c.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Yc(o, c) {
      var S = c.state;
      if (typeof c.componentWillMount == "function") {
        if (c.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = mn(o) || "Unknown";
          po[C] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), po[C] = !0);
        }
        c.componentWillMount();
      }
      typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), S !== c.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(o) || "Component"), js.enqueueReplaceState(c, c.state, null));
    }
    function Xc(o, c, S, C) {
      if (o.queue !== null && o.queue.length > 0) {
        var M = o.queue, Q = o.replace;
        if (o.queue = null, o.replace = !1, Q && M.length === 1)
          c.state = M[0];
        else {
          for (var fe = Q ? M[0] : c.state, Ce = !0, He = Q ? 1 : 0; He < M.length; He++) {
            var rt = M[He], ut = typeof rt == "function" ? rt.call(c, fe, S, C) : rt;
            ut != null && (Ce ? (Ce = !1, fe = rr({}, fe, ut)) : rr(fe, ut));
          }
          c.state = fe;
        }
      } else
        o.queue = null;
    }
    function xo(o, c, S, C) {
      Us(o, c, S);
      var M = o.state !== void 0 ? o.state : null;
      o.updater = js, o.props = S, o.state = M;
      var Q = {
        queue: [],
        replace: !1
      };
      Pl(o, Q);
      var fe = c.contextType;
      if (typeof fe == "object" && fe !== null ? o.context = Aa(fe) : o.context = C, o.state === S) {
        var Ce = mn(c) || "Component";
        yo.has(Ce) || (yo.add(Ce), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ce));
      }
      var He = c.getDerivedStateFromProps;
      typeof He == "function" && (o.state = Uc(o, c, He, M, S)), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Yc(c, o), Xc(Q, o, S, C));
    }
    var bo = {
      id: 1,
      overflow: ""
    };
    function qc(o) {
      var c = o.overflow, S = o.id, C = S & ~Gc(S);
      return C.toString(32) + c;
    }
    function Rl(o, c, S) {
      var C = o.id, M = o.overflow, Q = So(C) - 1, fe = C & ~(1 << Q), Ce = S + 1, He = So(c) + Q;
      if (He > 30) {
        var rt = Q - Q % 5, ut = (1 << rt) - 1, Tt = (fe & ut).toString(32), dn = fe >> rt, On = Q - rt, fr = So(c) + On, pu = Ce << On, hu = pu | dn, mu = Tt + M;
        return {
          id: 1 << fr | hu,
          overflow: mu
        };
      } else {
        var zo = Ce << Q, Py = zo | fe, Ry = M;
        return {
          id: 1 << He | Py,
          overflow: Ry
        };
      }
    }
    function So(o) {
      return 32 - Zc(o);
    }
    function Gc(o) {
      return 1 << So(o) - 1;
    }
    var Zc = Math.clz32 ? Math.clz32 : Cr, Qc = Math.log, Jc = Math.LN2;
    function Cr(o) {
      var c = o >>> 0;
      return c === 0 ? 32 : 31 - (Qc(c) / Jc | 0) | 0;
    }
    function Dl(o, c) {
      return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
    }
    var Eo = typeof Object.is == "function" ? Object.is : Dl, Bt = null, na = null, ra = null, Gt = null, ur = !1, aa = !1, ko = 0, Nn = null, Ar = 0, ia = 25, br = !1, oa;
    function Lr() {
      if (Bt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return br && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Bt;
    }
    function ed(o, c) {
      if (c === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oa), !1;
      o.length !== c.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oa, "[" + o.join(", ") + "]", "[" + c.join(", ") + "]");
      for (var S = 0; S < c.length && S < o.length; S++)
        if (!Eo(o[S], c[S]))
          return !1;
      return !0;
    }
    function Ks() {
      if (Ar > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function wo() {
      return Gt === null ? ra === null ? (ur = !1, ra = Gt = Ks()) : (ur = !0, Gt = ra) : Gt.next === null ? (ur = !1, Gt = Gt.next = Ks()) : (ur = !0, Gt = Gt.next), Gt;
    }
    function _l(o, c) {
      Bt = c, na = o, br = !1, ko = 0;
    }
    function td(o, c, S, C) {
      for (; aa; )
        aa = !1, ko = 0, Ar += 1, Gt = null, S = o(c, C);
      return ui(), S;
    }
    function Ys() {
      var o = ko !== 0;
      return o;
    }
    function ui() {
      br = !1, Bt = null, na = null, aa = !1, ra = null, Ar = 0, Nn = null, Gt = null;
    }
    function nd(o) {
      return br && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Aa(o);
    }
    function Xs(o) {
      return oa = "useContext", Lr(), Aa(o);
    }
    function To(o, c) {
      return typeof c == "function" ? c(o) : c;
    }
    function rd(o) {
      return oa = "useState", qs(
        To,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function qs(o, c, S) {
      if (o !== To && (oa = "useReducer"), Bt = Lr(), Gt = wo(), ur) {
        var C = Gt.queue, M = C.dispatch;
        if (Nn !== null) {
          var Q = Nn.get(C);
          if (Q !== void 0) {
            Nn.delete(C);
            var fe = Gt.memoizedState, Ce = Q;
            do {
              var He = Ce.action;
              br = !0, fe = o(fe, He), br = !1, Ce = Ce.next;
            } while (Ce !== null);
            return Gt.memoizedState = fe, [fe, M];
          }
        }
        return [Gt.memoizedState, M];
      } else {
        br = !0;
        var rt;
        o === To ? rt = typeof c == "function" ? c() : c : rt = S !== void 0 ? S(c) : c, br = !1, Gt.memoizedState = rt;
        var ut = Gt.queue = {
          last: null,
          dispatch: null
        }, Tt = ut.dispatch = od.bind(null, Bt, ut);
        return [Gt.memoizedState, Tt];
      }
    }
    function Gs(o, c) {
      Bt = Lr(), Gt = wo();
      var S = c === void 0 ? null : c;
      if (Gt !== null) {
        var C = Gt.memoizedState;
        if (C !== null && S !== null) {
          var M = C[1];
          if (ed(S, M))
            return C[0];
        }
      }
      br = !0;
      var Q = o();
      return br = !1, Gt.memoizedState = [Q, S], Q;
    }
    function ad(o) {
      Bt = Lr(), Gt = wo();
      var c = Gt.memoizedState;
      if (c === null) {
        var S = {
          current: o
        };
        return Object.seal(S), Gt.memoizedState = S, S;
      } else
        return c;
    }
    function id(o, c) {
      oa = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function od(o, c, S) {
      if (Ar >= ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === Bt) {
        aa = !0;
        var C = {
          action: S,
          next: null
        };
        Nn === null && (Nn = /* @__PURE__ */ new Map());
        var M = Nn.get(c);
        if (M === void 0)
          Nn.set(c, C);
        else {
          for (var Q = M; Q.next !== null; )
            Q = Q.next;
          Q.next = C;
        }
      }
    }
    function ld(o, c) {
      return Gs(function() {
        return o;
      }, c);
    }
    function sd(o, c, S) {
      return Lr(), c(o._source);
    }
    function ud(o, c, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function cd(o) {
      return Lr(), o;
    }
    function Co() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Zs() {
      return Lr(), [!1, Co];
    }
    function Nl() {
      var o = na, c = qc(o.treeContext), S = di;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = ko++;
      return It(S, c, C);
    }
    function ci() {
    }
    var Qs = {
      readContext: nd,
      useContext: Xs,
      useMemo: Gs,
      useReducer: qs,
      useRef: ad,
      useState: rd,
      useInsertionEffect: ci,
      useLayoutEffect: id,
      useCallback: ld,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ci,
      // Effects are not run in the server environment.
      useEffect: ci,
      // Debugging effect
      useDebugValue: ci,
      useDeferredValue: cd,
      useTransition: Zs,
      useId: Nl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: sd,
      useSyncExternalStore: ud
    }, di = null;
    function Ao(o) {
      di = o;
    }
    function Ol(o) {
      try {
        var c = "", S = o;
        do {
          switch (S.tag) {
            case 0:
              c += ni(S.type, null, null);
              break;
            case 1:
              c += El(S.type, null, null);
              break;
            case 2:
              c += Sl(S.type, null, null);
              break;
          }
          S = S.parent;
        } while (S);
        return c;
      } catch (C) {
        return `
Error generating stack: ` + C.message + `
` + C.stack;
      }
    }
    var $r = n.ReactCurrentDispatcher, Lo = n.ReactDebugCurrentFrame, Po = 0, la = 1, Js = 2, Fl = 3, sa = 4, dd = 0, eu = 1, Sr = 2, fd = 12800;
    function pd(o) {
      return console.error(o), null;
    }
    function fi() {
    }
    function Ml(o, c, S, C, M, Q, fe, Ce, He) {
      var rt = [], ut = /* @__PURE__ */ new Set(), Tt = {
        destination: null,
        responseState: c,
        progressiveChunkSize: C === void 0 ? fd : C,
        status: dd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ut,
        pingedTasks: rt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: M === void 0 ? pd : M,
        onAllReady: Q === void 0 ? fi : Q,
        onShellReady: fe === void 0 ? fi : fe,
        onShellError: Ce === void 0 ? fi : Ce,
        onFatalError: He === void 0 ? fi : He
      }, dn = Ir(
        Tt,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      dn.parentFlushed = !0;
      var On = pi(Tt, o, null, dn, ut, zr, Cl, bo);
      return rt.push(On), Tt;
    }
    function Ro(o, c) {
      var S = o.pingedTasks;
      S.push(c), S.length === 1 && d(function() {
        return du(o);
      });
    }
    function Pr(o, c) {
      return {
        id: st,
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
    function pi(o, c, S, C, M, Q, fe, Ce) {
      o.allPendingTasks++, S === null ? o.pendingRootTasks++ : S.pendingTasks++;
      var He = {
        node: c,
        ping: function() {
          return Ro(o, He);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: M,
        legacyContext: Q,
        context: fe,
        treeContext: Ce
      };
      return He.componentStack = null, M.add(He), He;
    }
    function Ir(o, c, S, C, M, Q) {
      return {
        status: Po,
        id: -1,
        // lazily assigned later
        index: c,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: C,
        boundary: S,
        lastPushedText: M,
        textEmbedded: Q
      };
    }
    var Er = null;
    function zl() {
      return Er === null || Er.componentStack === null ? "" : Ol(Er.componentStack);
    }
    function cr(o, c) {
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
    function $l(o, c) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: c
      };
    }
    function dr(o) {
      o.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var Br = null;
    function Il(o, c) {
      {
        var S;
        typeof c == "string" ? S = c : c && typeof c.message == "string" ? S = c.message : S = String(c);
        var C = Br || zl();
        Br = null, o.errorMessage = S, o.errorComponentStack = C;
      }
    }
    function hi(o, c) {
      var S = o.onError(c);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function Do(o, c) {
      var S = o.onShellError;
      S(c);
      var C = o.onFatalError;
      C(c), o.destination !== null ? (o.status = Sr, w(o.destination, c)) : (o.status = eu, o.fatalError = c);
    }
    function tu(o, c, S) {
      cr(c, "Suspense");
      var C = c.blockedBoundary, M = c.blockedSegment, Q = S.fallback, fe = S.children, Ce = /* @__PURE__ */ new Set(), He = Pr(o, Ce), rt = M.chunks.length, ut = Ir(
        o,
        rt,
        He,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.children.push(ut), M.lastPushedText = !1;
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
        if (_o(o, c, fe), Ps(Tt.chunks, o.responseState, Tt.lastPushedText, Tt.textEmbedded), Tt.status = la, gi(He, Tt), He.pendingTasks === 0) {
          dr(c);
          return;
        }
      } catch (On) {
        Tt.status = sa, He.forceClientRender = !0, He.errorDigest = hi(o, On), Il(He, On);
      } finally {
        c.blockedBoundary = C, c.blockedSegment = M;
      }
      var dn = pi(o, Q, C, ut, Ce, c.legacyContext, c.context, c.treeContext);
      dn.componentStack = c.componentStack, o.pingedTasks.push(dn), dr(c);
    }
    function nu(o, c, S, C) {
      cr(c, S);
      var M = c.blockedSegment, Q = gr(M.chunks, S, C, o.responseState, M.formatContext);
      M.lastPushedText = !1;
      var fe = M.formatContext;
      M.formatContext = nn(fe, S, C), _o(o, c, Q), M.formatContext = fe, er(M.chunks, S), M.lastPushedText = !1, dr(c);
    }
    function hd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Bl(o, c, S, C, M) {
      var Q = {};
      _l(c, Q);
      var fe = S(C, M);
      return td(S, C, fe, M);
    }
    function mi(o, c, S, C, M) {
      var Q = S.render();
      S.props !== M && (jl || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(C) || "a component"), jl = !0);
      {
        var fe = C.childContextTypes;
        if (fe != null) {
          var Ce = c.legacyContext, He = ea(S, C, Ce, fe);
          c.legacyContext = He, ir(o, c, Q), c.legacyContext = Ce;
          return;
        }
      }
      ir(o, c, Q);
    }
    function ru(o, c, S, C) {
      $l(c, S);
      var M = Is(S, c.legacyContext), Q = Kc(S, C, M);
      xo(Q, S, C, M), mi(o, c, Q, S, C), dr(c);
    }
    var Hl = {}, yi = {}, Wl = {}, Vl = {}, jl = !1, au = !1, iu = !1, Ul = !1;
    function md(o, c, S, C) {
      var M;
      if (M = Is(S, c.legacyContext), Ra(c, S), S.prototype && typeof S.prototype.render == "function") {
        var Q = mn(S) || "Unknown";
        Hl[Q] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Q, Q), Hl[Q] = !0);
      }
      var fe = Bl(o, c, S, C, M), Ce = Ys();
      if (typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0) {
        var He = mn(S) || "Unknown";
        yi[He] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", He, He, He), yi[He] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof fe == "object" && fe !== null && typeof fe.render == "function" && fe.$$typeof === void 0
      ) {
        {
          var rt = mn(S) || "Unknown";
          yi[rt] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", rt, rt, rt), yi[rt] = !0);
        }
        xo(fe, S, C, M), mi(o, c, fe, S, C);
      } else if (yd(S), Ce) {
        var ut = c.treeContext, Tt = 1, dn = 0;
        c.treeContext = Rl(ut, Tt, dn);
        try {
          ir(o, c, fe);
        } finally {
          c.treeContext = ut;
        }
      } else
        ir(o, c, fe);
      dr(c);
    }
    function yd(o) {
      {
        if (o && o.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var c = mn(o) || "Unknown";
          Vl[c] || (i("%s: Function components do not support getDerivedStateFromProps.", c), Vl[c] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var S = mn(o) || "Unknown";
          Wl[S] || (i("%s: Function components do not support contextType.", S), Wl[S] = !0);
        }
      }
    }
    function ou(o, c) {
      if (o && o.defaultProps) {
        var S = rr({}, c), C = o.defaultProps;
        for (var M in C)
          S[M] === void 0 && (S[M] = C[M]);
        return S;
      }
      return c;
    }
    function gd(o, c, S, C, M) {
      Ra(c, S.render);
      var Q = Bl(o, c, S.render, C, M), fe = Ys();
      if (fe) {
        var Ce = c.treeContext, He = 1, rt = 0;
        c.treeContext = Rl(Ce, He, rt);
        try {
          ir(o, c, Q);
        } finally {
          c.treeContext = Ce;
        }
      } else
        ir(o, c, Q);
      dr(c);
    }
    function vd(o, c, S, C, M) {
      var Q = S.type, fe = ou(Q, C);
      Yl(o, c, Q, fe, M);
    }
    function Kl(o, c, S, C) {
      S._context === void 0 ? S !== S.Consumer && (Ul || (Ul = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var M = C.children;
      typeof M != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Q = Aa(S), fe = M(Q);
      ir(o, c, fe);
    }
    function xd(o, c, S, C) {
      var M = S._context, Q = C.value, fe = C.children, Ce;
      Ce = c.context, c.context = oi(M, Q), ir(o, c, fe), c.context = Ll(M), Ce !== c.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ar(o, c, S, C, M) {
      cr(c, "Lazy");
      var Q = S._payload, fe = S._init, Ce = fe(Q), He = ou(Ce, C);
      Yl(o, c, Ce, He, M), dr(c);
    }
    function Yl(o, c, S, C, M) {
      if (typeof S == "function")
        if (hd(S)) {
          ru(o, c, S, C);
          return;
        } else {
          md(o, c, S, C);
          return;
        }
      if (typeof S == "string") {
        nu(o, c, S, C);
        return;
      }
      switch (S) {
        case Wc:
        case _s:
        case to:
        case no:
        case eo: {
          ir(o, c, C.children);
          return;
        }
        case dl: {
          cr(c, "SuspenseList"), ir(o, c, C.children), dr(c);
          return;
        }
        case Hc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ka: {
          tu(o, c, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case Qa: {
            gd(o, c, S, C, M);
            return;
          }
          case fl: {
            vd(o, c, S, C, M);
            return;
          }
          case Ga: {
            xd(o, c, S, C);
            return;
          }
          case Za: {
            Kl(o, c, S, C);
            return;
          }
          case ro: {
            ar(o, c, S, C);
            return;
          }
        }
      var Q = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Q));
    }
    function lu(o, c) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (au || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), au = !0), o.entries === c && (iu || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), iu = !0);
    }
    function ir(o, c, S) {
      try {
        return Xl(o, c, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Br = Br !== null ? Br : zl()), C;
      }
    }
    function Xl(o, c, S) {
      if (c.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ds: {
            var C = S, M = C.type, Q = C.props, fe = C.ref;
            Yl(o, c, M, Q, fe);
            return;
          }
          case cl:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ro: {
            var Ce = S, He = Ce._payload, rt = Ce._init, ut;
            try {
              ut = rt(He);
            } catch (zo) {
              throw typeof zo == "object" && zo !== null && typeof zo.then == "function" && cr(c, "Lazy"), zo;
            }
            ir(o, c, ut);
            return;
          }
        }
        if (ln(S)) {
          su(o, c, S);
          return;
        }
        var Tt = gn(S);
        if (Tt) {
          lu(S, Tt);
          var dn = Tt.call(S);
          if (dn) {
            var On = dn.next();
            if (!On.done) {
              var fr = [];
              do
                fr.push(On.value), On = dn.next();
              while (!On.done);
              su(o, c, fr);
              return;
            }
            return;
          }
        }
        var pu = Object.prototype.toString.call(S);
        throw new Error("Objects are not valid as a React child (found: " + (pu === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : pu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof S == "string") {
        var hu = c.blockedSegment;
        hu.lastPushedText = Ls(c.blockedSegment.chunks, S, o.responseState, hu.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var mu = c.blockedSegment;
        mu.lastPushedText = Ls(c.blockedSegment.chunks, "" + S, o.responseState, mu.lastPushedText);
        return;
      }
      typeof S == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function su(o, c, S) {
      for (var C = S.length, M = 0; M < C; M++) {
        var Q = c.treeContext;
        c.treeContext = Rl(Q, C, M);
        try {
          _o(o, c, S[M]);
        } finally {
          c.treeContext = Q;
        }
      }
    }
    function bd(o, c, S) {
      var C = c.blockedSegment, M = C.chunks.length, Q = Ir(
        o,
        M,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(Q), C.lastPushedText = !1;
      var fe = pi(o, c.node, c.blockedBoundary, Q, c.abortSet, c.legacyContext, c.context, c.treeContext);
      c.componentStack !== null && (fe.componentStack = c.componentStack.parent);
      var Ce = fe.ping;
      S.then(Ce, Ce);
    }
    function _o(o, c, S) {
      var C = c.blockedSegment.formatContext, M = c.legacyContext, Q = c.context, fe = null;
      fe = c.componentStack;
      try {
        return ir(o, c, S);
      } catch (Ce) {
        if (ui(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
          bd(o, c, Ce), c.blockedSegment.formatContext = C, c.legacyContext = M, c.context = Q, uo(Q), c.componentStack = fe;
          return;
        } else
          throw c.blockedSegment.formatContext = C, c.legacyContext = M, c.context = Q, uo(Q), c.componentStack = fe, Ce;
      }
    }
    function No(o, c, S, C) {
      var M = hi(o, C);
      if (c === null ? Do(o, C) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = M, Il(c, C), c.parentFlushed && o.clientRenderedBoundaries.push(c))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var Q = o.onAllReady;
        Q();
      }
    }
    function uu(o) {
      var c = this, S = o.blockedBoundary, C = o.blockedSegment;
      C.status = Fl, vi(c, S, C);
    }
    function cu(o, c, S) {
      var C = o.blockedBoundary, M = o.blockedSegment;
      if (M.status = Fl, C === null)
        c.allPendingTasks--, c.status !== Sr && (c.status = Sr, c.destination !== null && x(c.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var Q = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = c.onError(Q);
          {
            var fe = "The server did not finish this Suspense boundary: ";
            Q && typeof Q.message == "string" ? Q = fe + Q.message : Q = fe + String(Q);
            var Ce = Er;
            Er = o;
            try {
              Il(C, Q);
            } finally {
              Er = Ce;
            }
          }
          C.parentFlushed && c.clientRenderedBoundaries.push(C);
        }
        if (C.fallbackAbortableTasks.forEach(function(rt) {
          return cu(rt, c, S);
        }), C.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0) {
          var He = c.onAllReady;
          He();
        }
      }
    }
    function gi(o, c) {
      if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
        var S = c.children[0];
        S.id = c.id, S.parentFlushed = !0, S.status === la && gi(o, S);
      } else {
        var C = o.completedSegments;
        C.push(c);
      }
    }
    function vi(o, c, S) {
      if (c === null) {
        if (S.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = S;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = fi;
          var C = o.onShellReady;
          C();
        }
      } else if (c.pendingTasks--, !c.forceClientRender) {
        if (c.pendingTasks === 0)
          S.parentFlushed && S.status === la && gi(c, S), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(uu, o), c.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === la) {
          gi(c, S);
          var M = c.completedSegments;
          M.length === 1 && c.parentFlushed && o.partialBoundaries.push(c);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var Q = o.onAllReady;
        Q();
      }
    }
    function Oo(o, c) {
      var S = c.blockedSegment;
      if (S.status === Po) {
        uo(c.context);
        var C = null;
        C = Er, Er = c;
        try {
          ir(o, c, c.node), Ps(S.chunks, o.responseState, S.lastPushedText, S.textEmbedded), c.abortSet.delete(c), S.status = la, vi(o, c.blockedBoundary, S);
        } catch (Q) {
          if (ui(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
            var M = c.ping;
            Q.then(M, M);
          } else
            c.abortSet.delete(c), S.status = sa, No(o, c.blockedBoundary, S, Q);
        } finally {
          Er = C;
        }
      }
    }
    function du(o) {
      if (o.status !== Sr) {
        var c = jc(), S = $r.current;
        $r.current = Qs;
        var C;
        C = Lo.getCurrentStack, Lo.getCurrentStack = zl;
        var M = di;
        Ao(o.responseState);
        try {
          var Q = o.pingedTasks, fe;
          for (fe = 0; fe < Q.length; fe++) {
            var Ce = Q[fe];
            Oo(o, Ce);
          }
          Q.splice(0, fe), o.destination !== null && Mo(o, o.destination);
        } catch (He) {
          hi(o, He), Do(o, He);
        } finally {
          Ao(M), $r.current = S, Lo.getCurrentStack = C, S === Qs && uo(c);
        }
      }
    }
    function xi(o, c, S) {
      switch (S.parentFlushed = !0, S.status) {
        case Po: {
          var C = S.id = o.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Hi(c, o.responseState, C);
        }
        case la: {
          S.status = Js;
          for (var M = !0, Q = S.chunks, fe = 0, Ce = S.children, He = 0; He < Ce.length; He++) {
            for (var rt = Ce[He]; fe < rt.index; fe++)
              u(c, Q[fe]);
            M = bi(o, c, rt);
          }
          for (; fe < Q.length - 1; fe++)
            u(c, Q[fe]);
          return fe < Q.length && (M = m(c, Q[fe])), M;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function bi(o, c, S) {
      var C = S.boundary;
      if (C === null)
        return xi(o, c, S);
      if (C.parentFlushed = !0, C.forceClientRender)
        return sr(c, o.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), xi(o, c, S), Rs(c, o.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = o.nextSegmentId++, C.completedSegments.length > 0 && o.partialBoundaries.push(C);
        var M = C.id = wt(o.responseState);
        return Mr(c, o.responseState, M), xi(o, c, S), Ya(c, o.responseState);
      } else {
        if (C.byteSize > o.progressiveChunkSize)
          return C.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(C), Mr(c, o.responseState, C.id), xi(o, c, S), Ya(c, o.responseState);
        ul(c, o.responseState);
        var Q = C.completedSegments;
        if (Q.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var fe = Q[0];
        return bi(o, c, fe), Bc(c, o.responseState);
      }
    }
    function Sd(o, c, S) {
      return zc(c, o.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function ql(o, c, S) {
      return Ee(c, o.responseState, S.formatContext, S.id), bi(o, c, S), Me(c, S.formatContext);
    }
    function Fo(o, c, S) {
      for (var C = S.completedSegments, M = 0; M < C.length; M++) {
        var Q = C[M];
        fu(o, c, S, Q);
      }
      return C.length = 0, _c(c, o.responseState, S.id, S.rootSegmentID);
    }
    function Ed(o, c, S) {
      for (var C = S.completedSegments, M = 0; M < C.length; M++) {
        var Q = C[M];
        if (!fu(o, c, S, Q))
          return M++, C.splice(0, M), !1;
      }
      return C.splice(0, M), !0;
    }
    function fu(o, c, S, C) {
      if (C.status === Js)
        return !0;
      var M = C.id;
      if (M === -1) {
        var Q = C.id = S.rootSegmentID;
        if (Q === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ql(o, c, C);
      } else
        return ql(o, c, C), nr(c, o.responseState, M);
    }
    function Mo(o, c) {
      try {
        var S = o.completedRootSegment;
        S !== null && o.pendingRootTasks === 0 && (bi(o, c, S), o.completedRootSegment = null, Va(c, o.responseState));
        var C = o.clientRenderedBoundaries, M;
        for (M = 0; M < C.length; M++) {
          var Q = C[M];
          if (!Sd(o, c, Q)) {
            o.destination = null, M++, C.splice(0, M);
            return;
          }
        }
        C.splice(0, M);
        var fe = o.completedBoundaries;
        for (M = 0; M < fe.length; M++) {
          var Ce = fe[M];
          if (!Fo(o, c, Ce)) {
            o.destination = null, M++, fe.splice(0, M);
            return;
          }
        }
        fe.splice(0, M);
        var He = o.partialBoundaries;
        for (M = 0; M < He.length; M++) {
          var rt = He[M];
          if (!Ed(o, c, rt)) {
            o.destination = null, M++, He.splice(0, M);
            return;
          }
        }
        He.splice(0, M);
        var ut = o.completedBoundaries;
        for (M = 0; M < ut.length; M++) {
          var Tt = ut[M];
          if (!Fo(o, c, Tt)) {
            o.destination = null, M++, ut.splice(0, M);
            return;
          }
        }
        ut.splice(0, M);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), x(c));
      }
    }
    function kd(o) {
      d(function() {
        return du(o);
      });
    }
    function s(o, c) {
      if (o.status === eu) {
        o.status = Sr, w(c, o.fatalError);
        return;
      }
      if (o.status !== Sr && o.destination === null) {
        o.destination = c;
        try {
          Mo(o, c);
        } catch (S) {
          hi(o, S), Do(o, S);
        }
      }
    }
    function p(o, c) {
      try {
        var S = o.abortableTasks;
        S.forEach(function(C) {
          return cu(C, o, c);
        }), S.clear(), o.destination !== null && Mo(o, o.destination);
      } catch (C) {
        hi(o, C), Do(o, C);
      }
    }
    function E() {
    }
    function N(o, c, S, C) {
      var M = !1, Q = null, fe = "", Ce = {
        push: function(Tt) {
          return Tt !== null && (fe += Tt), !0;
        },
        destroy: function(Tt) {
          M = !0, Q = Tt;
        }
      }, He = !1;
      function rt() {
        He = !0;
      }
      var ut = Ml(o, Ic(S, c ? c.identifierPrefix : void 0), sl(), 1 / 0, E, void 0, rt, void 0, void 0);
      if (kd(ut), p(ut, C), s(ut, Ce), M)
        throw Q;
      if (!He)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return fe;
    }
    function W(o, c) {
      return N(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ie(o, c) {
      return N(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function me() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Le() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ai.renderToNodeStream = me, Ai.renderToStaticMarkup = ie, Ai.renderToStaticNodeStream = Le, Ai.renderToString = W, Ai.version = t;
  }()), Ai;
}
var Ru = {};
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
function IS() {
  return Ph || (Ph = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), N = 1; N < p; N++)
          E[N - 1] = arguments[N];
        l("warn", s, E);
      }
    }
    function i(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), N = 1; N < p; N++)
          E[N - 1] = arguments[N];
        l("error", s, E);
      }
    }
    function l(s, p, E) {
      {
        var N = n.ReactDebugCurrentFrame, W = N.getStackAddendum();
        W !== "" && (p += "%s", E = E.concat([W]));
        var ie = E.map(function(me) {
          return String(me);
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
        var E = p, N = u.length - m;
        N < E.length && (N === 0 ? s.enqueue(u) : (u.set(E.subarray(0, N), m), s.enqueue(u), E = E.subarray(N)), u = new Uint8Array(f), m = 0), u.set(E, m), m += E.length;
      }
    }
    function b(s, p) {
      return x(s, p), !0;
    }
    function A(s) {
      u && m > 0 && (s.enqueue(new Uint8Array(u.buffer, 0, m)), u = null, m = 0);
    }
    function w(s) {
      s.close();
    }
    var O = new TextEncoder();
    function k(s) {
      return O.encode(s);
    }
    function h(s) {
      return O.encode(s);
    }
    function L(s, p) {
      typeof s.error == "function" ? s.error(p) : s.close();
    }
    function F(s) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, E = p && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function P(s) {
      try {
        return T(s), !1;
      } catch {
        return !0;
      }
    }
    function T(s) {
      return "" + s;
    }
    function _(s, p) {
      if (P(s))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, F(s)), T(s);
    }
    function B(s, p) {
      if (P(s))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, F(s)), T(s);
    }
    function Y(s) {
      if (P(s))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", F(s)), T(s);
    }
    var X = Object.prototype.hasOwnProperty, J = 0, re = 1, H = 2, ae = 3, j = 4, te = 5, oe = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ee = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", G = new RegExp("^[" + ne + "][" + ee + "]*$"), Z = {}, K = {};
    function V(s) {
      return X.call(K, s) ? !0 : X.call(Z, s) ? !1 : G.test(s) ? (K[s] = !0, !0) : (Z[s] = !0, i("Invalid attribute name: `%s`", s), !1);
    }
    function we(s, p, E, N) {
      if (E !== null && E.type === J)
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
          var W = s.toLowerCase().slice(0, 5);
          return W !== "data-" && W !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Se(s) {
      return Re.hasOwnProperty(s) ? Re[s] : null;
    }
    function ce(s, p, E, N, W, ie, me) {
      this.acceptsBooleans = p === H || p === ae || p === j, this.attributeName = N, this.attributeNamespace = W, this.mustUseProperty = E, this.propertyName = s, this.type = p, this.sanitizeURL = ie, this.removeEmptyString = me;
    }
    var Re = {}, je = [
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
    je.forEach(function(s) {
      Re[s] = new ce(
        s,
        J,
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
      Re[p] = new ce(
        p,
        re,
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
      Re[s] = new ce(
        s,
        H,
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
      Re[s] = new ce(
        s,
        H,
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
      Re[s] = new ce(
        s,
        ae,
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
      Re[s] = new ce(
        s,
        ae,
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
      Re[s] = new ce(
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
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      Re[s] = new ce(
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
      Re[s] = new ce(
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
    var Je = /[\-\:]([a-z])/g, Oe = function(s) {
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
      var p = s.replace(Je, Oe);
      Re[p] = new ce(
        p,
        re,
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
      var p = s.replace(Je, Oe);
      Re[p] = new ce(
        p,
        re,
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
      var p = s.replace(Je, Oe);
      Re[p] = new ce(
        p,
        re,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(s) {
      Re[s] = new ce(
        s,
        re,
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
    Re[he] = new ce(
      "xlinkHref",
      re,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(s) {
      Re[s] = new ce(
        s,
        re,
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
    var Fe = {
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
    function le(s, p) {
      return s + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var ue = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fe).forEach(function(s) {
      ue.forEach(function(p) {
        Fe[le(p, s)] = Fe[s];
      });
    });
    var Ae = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $e(s, p) {
      Ae[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function De(s, p) {
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
    var Ze = {
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
    }, qe = {}, yt = new RegExp("^(aria)-[" + ee + "]*$"), nt = new RegExp("^(aria)[A-Z][" + ee + "]*$");
    function Ve(s, p) {
      {
        if (X.call(qe, p) && qe[p])
          return !0;
        if (nt.test(p)) {
          var E = "aria-" + p.slice(4).toLowerCase(), N = Ze.hasOwnProperty(E) ? E : null;
          if (N == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), qe[p] = !0, !0;
          if (p !== N)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, N), qe[p] = !0, !0;
        }
        if (yt.test(p)) {
          var W = p.toLowerCase(), ie = Ze.hasOwnProperty(W) ? W : null;
          if (ie == null)
            return qe[p] = !0, !1;
          if (p !== ie)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ie), qe[p] = !0, !0;
        }
      }
      return !0;
    }
    function ze(s, p) {
      {
        var E = [];
        for (var N in p) {
          var W = Ve(s, N);
          W || E.push(N);
        }
        var ie = E.map(function(me) {
          return "`" + me + "`";
        }).join(", ");
        E.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s) : E.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s);
      }
    }
    function Te(s, p) {
      De(s, p) || ze(s, p);
    }
    var Ye = !1;
    function Qe(s, p) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        p != null && p.value === null && !Ye && (Ye = !0, s === "select" && p.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
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
    }, bt = function() {
    };
    {
      var gt = {}, Mt = /^on./, Zt = /^on[^A-Z]/, an = new RegExp("^(aria)-[" + ee + "]*$"), Ut = new RegExp("^(aria)[A-Z][" + ee + "]*$");
      bt = function(s, p, E, N) {
        if (X.call(gt, p) && gt[p])
          return !0;
        var W = p.toLowerCase();
        if (W === "onfocusin" || W === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), gt[p] = !0, !0;
        if (N != null) {
          var ie = N.registrationNameDependencies, me = N.possibleRegistrationNames;
          if (ie.hasOwnProperty(p))
            return !0;
          var Le = me.hasOwnProperty(W) ? me[W] : null;
          if (Le != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", p, Le), gt[p] = !0, !0;
          if (Mt.test(p))
            return i("Unknown event handler property `%s`. It will be ignored.", p), gt[p] = !0, !0;
        } else if (Mt.test(p))
          return Zt.test(p) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), gt[p] = !0, !0;
        if (an.test(p) || Ut.test(p))
          return !0;
        if (W === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), gt[p] = !0, !0;
        if (W === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), gt[p] = !0, !0;
        if (W === "is" && E !== null && E !== void 0 && typeof E != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), gt[p] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), gt[p] = !0, !0;
        var o = Se(p), c = o !== null && o.type === J;
        if (ft.hasOwnProperty(W)) {
          var S = ft[W];
          if (S !== p)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", p, S), gt[p] = !0, !0;
        } else if (!c && p !== W)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, W), gt[p] = !0, !0;
        return typeof E == "boolean" && we(p, E, o, !1) ? (E ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, p, p, E, p) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, p, p, E, p, p, p), gt[p] = !0, !0) : c ? !0 : we(p, E, o, !1) ? (gt[p] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === ae && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, p, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, E), gt[p] = !0), !0);
      };
    }
    var Qt = function(s, p, E) {
      {
        var N = [];
        for (var W in p) {
          var ie = bt(s, W, p[W], E);
          ie || N.push(W);
        }
        var me = N.map(function(Le) {
          return "`" + Le + "`";
        }).join(", ");
        N.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", me, s) : N.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", me, s);
      }
    };
    function zt(s, p, E) {
      De(s, p) || Qt(s, p, E);
    }
    var un = function() {
    };
    {
      var At = /^(?:webkit|moz|o)[A-Z]/, Rt = /^-ms-/, kn = /-(.)/g, Ie = /;\s*$/, Et = {}, vn = {}, lt = !1, on = !1, Xt = function(s) {
        return s.replace(kn, function(p, E) {
          return E.toUpperCase();
        });
      }, $t = function(s) {
        Et.hasOwnProperty(s) && Et[s] || (Et[s] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          s,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xt(s.replace(Rt, "ms-"))
        ));
      }, Jt = function(s) {
        Et.hasOwnProperty(s) && Et[s] || (Et[s] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
      }, wn = function(s, p) {
        vn.hasOwnProperty(p) && vn[p] || (vn[p] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, s, p.replace(Ie, "")));
      }, Tn = function(s, p) {
        lt || (lt = !0, i("`NaN` is an invalid value for the `%s` css style property.", s));
      }, Dt = function(s, p) {
        on || (on = !0, i("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      un = function(s, p) {
        s.indexOf("-") > -1 ? $t(s) : At.test(s) ? Jt(s) : Ie.test(p) && wn(s, p), typeof p == "number" && (isNaN(p) ? Tn(s, p) : isFinite(p) || Dt(s, p));
      };
    }
    var Mn = un, bn = /["'&<>]/;
    function Bn(s) {
      Y(s);
      var p = "" + s, E = bn.exec(p);
      if (!E)
        return p;
      var N, W = "", ie, me = 0;
      for (ie = E.index; ie < p.length; ie++) {
        switch (p.charCodeAt(ie)) {
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
        me !== ie && (W += p.substring(me, ie)), me = ie + 1, W += N;
      }
      return me !== ie ? W + p.substring(me, ie) : W;
    }
    function Kt(s) {
      return typeof s == "boolean" || typeof s == "number" ? "" + s : Bn(s);
    }
    var Hn = /([A-Z])/g, Qn = /^ms-/;
    function Wn(s) {
      return s.replace(Hn, "-$1").toLowerCase().replace(Qn, "-ms-");
    }
    var ln = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, zn = !1;
    function $n(s) {
      !zn && ln.test(s) && (zn = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(s)));
    }
    var Vn = Array.isArray;
    function Dn(s) {
      return Vn(s);
    }
    var _e = h("<script>"), ht = h("<\/script>"), I = h('<script src="'), xe = h('<script type="module" src="'), Xe = h('" async=""><\/script>');
    function Be(s) {
      return Y(s), ("" + s).replace(pt, tt);
    }
    var pt = /(<\/|<)(s)(cript)/gi, tt = function(s, p, E, N) {
      return "" + p + (E === "s" ? "\\u0073" : "\\u0053") + N;
    };
    function kt(s, p, E, N, W) {
      var ie = s === void 0 ? "" : s, me = p === void 0 ? _e : h('<script nonce="' + Kt(p) + '">'), Le = [];
      if (E !== void 0 && Le.push(me, k(Be(E)), ht), N !== void 0)
        for (var o = 0; o < N.length; o++)
          Le.push(I, k(Kt(N[o])), Xe);
      if (W !== void 0)
        for (var c = 0; c < W.length; c++)
          Le.push(xe, k(Kt(W[c])), Xe);
      return {
        bootstrapChunks: Le,
        startInlineScript: me,
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
    var Nt = 0, Ue = 1, Ot = 2, Vt = 3, Ft = 4, nn = 5, st = 6, wt = 7;
    function It(s, p) {
      return {
        insertionMode: s,
        selectedValue: p
      };
    }
    function Wt(s) {
      var p = s === "http://www.w3.org/2000/svg" ? Ot : s === "http://www.w3.org/1998/Math/MathML" ? Vt : Nt;
      return It(p, null);
    }
    function yn(s, p, E) {
      switch (p) {
        case "select":
          return It(Ue, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return It(Ot, null);
        case "math":
          return It(Vt, null);
        case "foreignObject":
          return It(Ue, null);
        case "table":
          return It(Ft, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return It(nn, null);
        case "colgroup":
          return It(wt, null);
        case "tr":
          return It(st, null);
      }
      return s.insertionMode >= Ft || s.insertionMode === Nt ? It(Ue, null) : s;
    }
    var _n = null;
    function pn(s) {
      var p = s.nextSuspenseID++;
      return h(s.boundaryPrefix + p.toString(16));
    }
    function hn(s, p, E) {
      var N = s.idPrefix, W = ":" + N + "R" + p;
      return E > 0 && (W += "H" + E.toString(32)), W + ":";
    }
    function sn(s) {
      return Kt(s);
    }
    var qt = h("<!-- -->");
    function Sn(s, p, E, N) {
      return p === "" ? N : (N && s.push(qt), s.push(k(sn(p))), !0);
    }
    function qn(s, p, E, N) {
      E && N && s.push(qt);
    }
    var g = /* @__PURE__ */ new Map();
    function R(s) {
      var p = g.get(s);
      if (p !== void 0)
        return p;
      var E = h(Kt(Wn(s)));
      return g.set(s, E), E;
    }
    var z = h(' style="'), U = h(":"), be = h(";");
    function ve(s, p, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var N = !0;
      for (var W in E)
        if (X.call(E, W)) {
          var ie = E[W];
          if (!(ie == null || typeof ie == "boolean" || ie === "")) {
            var me = void 0, Le = void 0, o = W.indexOf("--") === 0;
            o ? (me = k(Kt(W)), B(ie, W), Le = k(Kt(("" + ie).trim()))) : (Mn(W, ie), me = R(W), typeof ie == "number" ? ie !== 0 && !X.call(Fe, W) ? Le = k(ie + "px") : Le = k("" + ie) : (B(ie, W), Le = k(Kt(("" + ie).trim())))), N ? (N = !1, s.push(z, me, U, Le)) : s.push(be, me, U, Le);
          }
        }
      N || s.push(it);
    }
    var Pe = h(" "), Ke = h('="'), it = h('"'), mt = h('=""');
    function dt(s, p, E, N) {
      switch (E) {
        case "style": {
          ve(s, p, N);
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
        var W = Se(E);
        if (W !== null) {
          switch (typeof N) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!W.acceptsBooleans)
                return;
          }
          var ie = W.attributeName, me = k(ie);
          switch (W.type) {
            case ae:
              N && s.push(Pe, me, mt);
              return;
            case j:
              N === !0 ? s.push(Pe, me, mt) : N === !1 || s.push(Pe, me, Ke, k(Kt(N)), it);
              return;
            case te:
              isNaN(N) || s.push(Pe, me, Ke, k(Kt(N)), it);
              break;
            case oe:
              !isNaN(N) && N >= 1 && s.push(Pe, me, Ke, k(Kt(N)), it);
              break;
            default:
              W.sanitizeURL && (_(N, ie), N = "" + N, $n(N)), s.push(Pe, me, Ke, k(Kt(N)), it);
          }
        } else if (V(E)) {
          switch (typeof N) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Le = E.toLowerCase().slice(0, 5);
              if (Le !== "data-" && Le !== "aria-")
                return;
            }
          }
          s.push(Pe, k(E), Ke, k(Kt(N)), it);
        }
      }
    }
    var de = h(">"), pe = h("/>");
    function ge(s, p, E) {
      if (p != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var N = p.__html;
        N != null && (Y(N), s.push(k("" + N)));
      }
    }
    var Ne = !1, Ct = !1, cn = !1, jn = !1, Jn = !1, Un = !1, pr = !1;
    function qr(s, p) {
      {
        var E = s[p];
        if (E != null) {
          var N = Dn(E);
          s.multiple && !N ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !s.multiple && N && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Jo(s, p, E) {
      $e("select", p), qr(p, "value"), qr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !cn && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), cn = !0), s.push(er("select"));
      var N = null, W = null;
      for (var ie in p)
        if (X.call(p, ie)) {
          var me = p[ie];
          if (me == null)
            continue;
          switch (ie) {
            case "children":
              N = me;
              break;
            case "dangerouslySetInnerHTML":
              W = me;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              dt(s, E, ie, me);
              break;
          }
        }
      return s.push(de), ge(s, W, N), N;
    }
    function el(s) {
      var p = "";
      return e.Children.forEach(s, function(E) {
        E != null && (p += E, !Jn && typeof E != "string" && typeof E != "number" && (Jn = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ha = h(' selected=""');
    function tl(s, p, E, N) {
      var W = N.selectedValue;
      s.push(er("option"));
      var ie = null, me = null, Le = null, o = null;
      for (var c in p)
        if (X.call(p, c)) {
          var S = p[c];
          if (S == null)
            continue;
          switch (c) {
            case "children":
              ie = S;
              break;
            case "selected":
              Le = S, pr || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = S;
              break;
            case "value":
              me = S;
            default:
              dt(s, E, c, S);
              break;
          }
        }
      if (W != null) {
        var C;
        if (me !== null ? (_(me, "value"), C = "" + me) : (o !== null && (Un || (Un = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = el(ie)), Dn(W))
          for (var M = 0; M < W.length; M++) {
            _(W[M], "value");
            var Q = "" + W[M];
            if (Q === C) {
              s.push(Ha);
              break;
            }
          }
        else
          _(W, "select.value"), "" + W === C && s.push(Ha);
      } else
        Le && s.push(Ha);
      return s.push(de), ge(s, o, ie), ie;
    }
    function Wa(s, p, E) {
      $e("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !Ct && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Ct = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Ne && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Ne = !0), s.push(er("input"));
      var N = null, W = null, ie = null, me = null;
      for (var Le in p)
        if (X.call(p, Le)) {
          var o = p[Le];
          if (o == null)
            continue;
          switch (Le) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              me = o;
              break;
            case "defaultValue":
              W = o;
              break;
            case "checked":
              ie = o;
              break;
            case "value":
              N = o;
              break;
            default:
              dt(s, E, Le, o);
              break;
          }
        }
      return ie !== null ? dt(s, E, "checked", ie) : me !== null && dt(s, E, "checked", me), N !== null ? dt(s, E, "value", N) : W !== null && dt(s, E, "value", W), s.push(pe), null;
    }
    function hr(s, p, E) {
      $e("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !jn && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), jn = !0), s.push(er("textarea"));
      var N = null, W = null, ie = null;
      for (var me in p)
        if (X.call(p, me)) {
          var Le = p[me];
          if (Le == null)
            continue;
          switch (me) {
            case "children":
              ie = Le;
              break;
            case "value":
              N = Le;
              break;
            case "defaultValue":
              W = Le;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              dt(s, E, me, Le);
              break;
          }
        }
      if (N === null && W !== null && (N = W), s.push(de), ie != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), N != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Dn(ie)) {
          if (ie.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Y(ie[0]), N = "" + ie[0];
        }
        Y(ie), N = "" + ie;
      }
      return typeof N == "string" && N[0] === `
` && s.push(Tr), N !== null && (_(N, "value"), s.push(k(sn("" + N)))), null;
    }
    function Gr(s, p, E, N) {
      s.push(er(E));
      for (var W in p)
        if (X.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              dt(s, N, W, ie);
              break;
          }
        }
      return s.push(pe), null;
    }
    function da(s, p, E) {
      s.push(er("menuitem"));
      for (var N in p)
        if (X.call(p, N)) {
          var W = p[N];
          if (W == null)
            continue;
          switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              dt(s, E, N, W);
              break;
          }
        }
      return s.push(de), null;
    }
    function en(s, p, E) {
      s.push(er("title"));
      var N = null;
      for (var W in p)
        if (X.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
              N = ie;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              dt(s, E, W, ie);
              break;
          }
        }
      s.push(de);
      {
        var me = Array.isArray(N) && N.length < 2 ? N[0] || null : N;
        Array.isArray(N) && N.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : me != null && me.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : me != null && typeof me != "string" && typeof me != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return N;
    }
    function yr(s, p, E, N) {
      s.push(er(E));
      var W = null, ie = null;
      for (var me in p)
        if (X.call(p, me)) {
          var Le = p[me];
          if (Le == null)
            continue;
          switch (me) {
            case "children":
              W = Le;
              break;
            case "dangerouslySetInnerHTML":
              ie = Le;
              break;
            default:
              dt(s, N, me, Le);
              break;
          }
        }
      return s.push(de), ge(s, ie, W), typeof W == "string" ? (s.push(k(sn(W))), null) : W;
    }
    function Kn(s, p, E, N) {
      s.push(er(E));
      var W = null, ie = null;
      for (var me in p)
        if (X.call(p, me)) {
          var Le = p[me];
          if (Le == null)
            continue;
          switch (me) {
            case "children":
              W = Le;
              break;
            case "dangerouslySetInnerHTML":
              ie = Le;
              break;
            case "style":
              ve(s, N, Le);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              V(me) && typeof Le != "function" && typeof Le != "symbol" && s.push(Pe, k(me), Ke, k(Kt(Le)), it);
              break;
          }
        }
      return s.push(de), ge(s, ie, W), W;
    }
    var Tr = h(`
`);
    function gr(s, p, E, N) {
      s.push(er(E));
      var W = null, ie = null;
      for (var me in p)
        if (X.call(p, me)) {
          var Le = p[me];
          if (Le == null)
            continue;
          switch (me) {
            case "children":
              W = Le;
              break;
            case "dangerouslySetInnerHTML":
              ie = Le;
              break;
            default:
              dt(s, N, me, Le);
              break;
          }
        }
      if (s.push(de), ie != null) {
        if (W != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ie != "object" || !("__html" in ie))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = ie.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(Tr, k(o)) : (Y(o), s.push(k("" + o))));
      }
      return typeof W == "string" && W[0] === `
` && s.push(Tr), W;
    }
    var fa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, vr = /* @__PURE__ */ new Map();
    function er(s) {
      var p = vr.get(s);
      if (p === void 0) {
        if (!fa.test(s))
          throw new Error("Invalid tag: " + s);
        p = h("<" + s), vr.set(s, p);
      }
      return p;
    }
    var Va = h("<!DOCTYPE html>");
    function ja(s, p, E, N, W) {
      switch (Te(p, E), Qe(p, E), zt(p, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), W.insertionMode !== Ot && W.insertionMode !== Vt && p.indexOf("-") === -1 && typeof E.is != "string" && p.toLowerCase() !== p && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Jo(s, E, N);
        case "option":
          return tl(s, E, N, W);
        case "textarea":
          return hr(s, E, N);
        case "input":
          return Wa(s, E, N);
        case "menuitem":
          return da(s, E, N);
        case "title":
          return en(s, E, N);
        case "listing":
        case "pre":
          return gr(s, E, p, N);
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
          return Gr(s, E, p, N);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return yr(s, E, p, N);
        case "html":
          return W.insertionMode === Nt && s.push(Va), yr(s, E, p, N);
        default:
          return p.indexOf("-") === -1 && typeof E.is != "string" ? yr(s, E, p, N) : Kn(s, E, p, N);
      }
    }
    var Bi = h("</"), Hi = h(">");
    function Wi(s, p, E) {
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
          s.push(Bi, k(p), Hi);
      }
    }
    function nl(s, p) {
      for (var E = p.bootstrapChunks, N = 0; N < E.length - 1; N++)
        x(s, E[N]);
      return N < E.length ? b(s, E[N]) : !0;
    }
    var rl = h('<template id="'), pa = h('"></template>');
    function ha(s, p, E) {
      x(s, rl), x(s, p.placeholderPrefix);
      var N = k(E.toString(16));
      return x(s, N), b(s, pa);
    }
    var ma = h("<!--$-->"), Zr = h('<!--$?--><template id="'), al = h('"></template>'), Qr = h("<!--$!-->"), Ua = h("<!--/$-->"), Ka = h("<template"), Fr = h('"'), Mr = h(' data-dgst="'), ya = h(' data-msg="'), Vi = h(' data-stck="'), Ya = h("></template>");
    function ji(s, p) {
      return b(s, ma);
    }
    function ga(s, p, E) {
      if (x(s, Zr), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(s, E), b(s, al);
    }
    function Yn(s, p, E, N, W) {
      var ie;
      return ie = b(s, Qr), x(s, Ka), E && (x(s, Mr), x(s, k(Kt(E))), x(s, Fr)), N && (x(s, ya), x(s, k(Kt(N))), x(s, Fr)), W && (x(s, Vi), x(s, k(Kt(W))), x(s, Fr)), ie = b(s, Ya), ie;
    }
    function Ui(s, p) {
      return b(s, Ua);
    }
    function va(s, p) {
      return b(s, Ua);
    }
    function il(s, p) {
      return b(s, Ua);
    }
    var Ki = h('<div hidden id="'), xa = h('">'), Yi = h("</div>"), Xi = h('<svg aria-hidden="true" style="display:none" id="'), ba = h('">'), Sa = h("</svg>"), qi = h('<math aria-hidden="true" style="display:none" id="'), Gi = h('">'), Zi = h("</math>"), Xa = h('<table hidden id="'), Qi = h('">'), v = h("</table>"), D = h('<table hidden><tbody id="'), $ = h('">'), q = h("</tbody></table>"), ke = h('<table hidden><tr id="'), Ee = h('">'), Me = h("</tr></table>"), Ge = h('<table hidden><colgroup id="'), vt = h('">'), _t = h("</colgroup></table>");
    function Pt(s, p, E, N) {
      switch (E.insertionMode) {
        case Nt:
        case Ue:
          return x(s, Ki), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, xa);
        case Ot:
          return x(s, Xi), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, ba);
        case Vt:
          return x(s, qi), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, Gi);
        case Ft:
          return x(s, Xa), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, Qi);
        case nn:
          return x(s, D), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, $);
        case st:
          return x(s, ke), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, Ee);
        case wt:
          return x(s, Ge), x(s, p.segmentPrefix), x(s, k(N.toString(16))), b(s, vt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function rn(s, p) {
      switch (p.insertionMode) {
        case Nt:
        case Ue:
          return b(s, Yi);
        case Ot:
          return b(s, Sa);
        case Vt:
          return b(s, Zi);
        case Ft:
          return b(s, v);
        case nn:
          return b(s, q);
        case st:
          return b(s, Me);
        case wt:
          return b(s, _t);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", tr = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', nr = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ea = h(Xn + ';$RS("'), Ji = h('$RS("'), qa = h('","'), Dc = h('")<\/script>');
    function _c(s, p, E) {
      x(s, p.startInlineScript), p.sentCompleteSegmentFunction ? x(s, Ji) : (p.sentCompleteSegmentFunction = !0, x(s, Ea)), x(s, p.segmentPrefix);
      var N = k(E.toString(16));
      return x(s, N), x(s, qa), x(s, p.placeholderPrefix), x(s, N), b(s, Dc);
    }
    var Nc = h(tr + ';$RC("'), Oc = h('$RC("'), Fc = h('","'), Mc = h('")<\/script>');
    function ol(s, p, E, N) {
      if (x(s, p.startInlineScript), p.sentCompleteBoundaryFunction ? x(s, Oc) : (p.sentCompleteBoundaryFunction = !0, x(s, Nc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var W = k(N.toString(16));
      return x(s, E), x(s, Fc), x(s, p.segmentPrefix), x(s, W), b(s, Mc);
    }
    var zc = h(nr + ';$RX("'), $c = h('$RX("'), ll = h('"'), Ic = h(")<\/script>"), sl = h(",");
    function Ls(s, p, E, N, W, ie) {
      if (x(s, p.startInlineScript), p.sentClientRenderFunction ? x(s, $c) : (p.sentClientRenderFunction = !0, x(s, zc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(s, E), x(s, ll), (N || W || ie) && (x(s, sl), x(s, k(ul(N || "")))), (W || ie) && (x(s, sl), x(s, k(ul(W || "")))), ie && (x(s, sl), x(s, k(ul(ie)))), b(s, Ic);
    }
    var Ps = /[<\u2028\u2029]/g;
    function ul(s) {
      var p = JSON.stringify(s);
      return p.replace(Ps, function(E) {
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
    var sr = Object.assign, Bc = Symbol.for("react.element"), Rs = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), Ds = Symbol.for("react.strict_mode"), cl = Symbol.for("react.profiler"), eo = Symbol.for("react.provider"), to = Symbol.for("react.context"), no = Symbol.for("react.forward_ref"), Ga = Symbol.for("react.suspense"), Za = Symbol.for("react.suspense_list"), Qa = Symbol.for("react.memo"), ka = Symbol.for("react.lazy"), dl = Symbol.for("react.scope"), fl = Symbol.for("react.debug_trace_mode"), ro = Symbol.for("react.legacy_hidden"), Hc = Symbol.for("react.default_value"), _s = Symbol.iterator, Wc = "@@iterator";
    function Vc(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = _s && s[_s] || s[Wc];
      return typeof p == "function" ? p : null;
    }
    function Ns(s, p, E) {
      var N = s.displayName;
      if (N)
        return N;
      var W = p.displayName || p.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function Os(s) {
      return s.displayName || "Context";
    }
    function gn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case rr:
          return "Fragment";
        case Rs:
          return "Portal";
        case cl:
          return "Profiler";
        case Ds:
          return "StrictMode";
        case Ga:
          return "Suspense";
        case Za:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case to:
            var p = s;
            return Os(p) + ".Consumer";
          case eo:
            var E = s;
            return Os(E._context) + ".Provider";
          case no:
            return Ns(s, s.render, "ForwardRef");
          case Qa:
            var N = s.displayName || null;
            return N !== null ? N : gn(s.type) || "Memo";
          case ka: {
            var W = s, ie = W._payload, me = W._init;
            try {
              return gn(me(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ja = 0, pl, mn, wa, hl, ml, yl, gl;
    function vl() {
    }
    vl.__reactDisabledLog = !0;
    function Fs() {
      {
        if (Ja === 0) {
          pl = console.log, mn = console.info, wa = console.warn, hl = console.error, ml = console.group, yl = console.groupCollapsed, gl = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: vl,
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
        Ja++;
      }
    }
    function Ms() {
      {
        if (Ja--, Ja === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: sr({}, s, {
              value: pl
            }),
            info: sr({}, s, {
              value: mn
            }),
            warn: sr({}, s, {
              value: wa
            }),
            error: sr({}, s, {
              value: hl
            }),
            group: sr({}, s, {
              value: ml
            }),
            groupCollapsed: sr({}, s, {
              value: yl
            }),
            groupEnd: sr({}, s, {
              value: gl
            })
          });
        }
        Ja < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ao = n.ReactCurrentDispatcher, xl;
    function ei(s, p, E) {
      {
        if (xl === void 0)
          try {
            throw Error();
          } catch (W) {
            var N = W.stack.trim().match(/\n( *(at )?)/);
            xl = N && N[1] || "";
          }
        return `
` + xl + s;
      }
    }
    var ti = !1, Ta;
    {
      var ni = typeof WeakMap == "function" ? WeakMap : Map;
      Ta = new ni();
    }
    function ri(s, p) {
      if (!s || ti)
        return "";
      {
        var E = Ta.get(s);
        if (E !== void 0)
          return E;
      }
      var N;
      ti = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = ao.current, ao.current = null, Fs();
      try {
        if (p) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (fe) {
              N = fe;
            }
            Reflect.construct(s, [], me);
          } else {
            try {
              me.call();
            } catch (fe) {
              N = fe;
            }
            s.call(me.prototype);
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
          for (var Le = fe.stack.split(`
`), o = N.stack.split(`
`), c = Le.length - 1, S = o.length - 1; c >= 1 && S >= 0 && Le[c] !== o[S]; )
            S--;
          for (; c >= 1 && S >= 0; c--, S--)
            if (Le[c] !== o[S]) {
              if (c !== 1 || S !== 1)
                do
                  if (c--, S--, S < 0 || Le[c] !== o[S]) {
                    var C = `
` + Le[c].replace(" at new ", " at ");
                    return s.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", s.displayName)), typeof s == "function" && Ta.set(s, C), C;
                  }
                while (c >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ti = !1, ao.current = ie, Ms(), Error.prepareStackTrace = W;
      }
      var M = s ? s.displayName || s.name : "", Q = M ? ei(M) : "";
      return typeof s == "function" && Ta.set(s, Q), Q;
    }
    function io(s, p, E) {
      return ri(s, !0);
    }
    function zs(s, p, E) {
      return ri(s, !1);
    }
    function bl(s) {
      var p = s.prototype;
      return !!(p && p.isReactComponent);
    }
    function Sl(s, p, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ri(s, bl(s));
      if (typeof s == "string")
        return ei(s);
      switch (s) {
        case Ga:
          return ei("Suspense");
        case Za:
          return ei("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case no:
            return zs(s.render);
          case Qa:
            return Sl(s.type, p, E);
          case ka: {
            var N = s, W = N._payload, ie = N._init;
            try {
              return Sl(ie(W), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var El = {}, $s = n.ReactDebugCurrentFrame;
    function Ca(s) {
      if (s) {
        var p = s._owner, E = Sl(s.type, s._source, p ? p.type : null);
        $s.setExtraStackFrame(E);
      } else
        $s.setExtraStackFrame(null);
    }
    function kl(s, p, E, N, W) {
      {
        var ie = Function.call.bind(X);
        for (var me in s)
          if (ie(s, me)) {
            var Le = void 0;
            try {
              if (typeof s[me] != "function") {
                var o = Error((N || "React class") + ": " + E + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Le = s[me](p, me, N, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              Le = c;
            }
            Le && !(Le instanceof Error) && (Ca(W), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", E, me, typeof Le), Ca(null)), Le instanceof Error && !(Le.message in El) && (El[Le.message] = !0, Ca(W), i("Failed %s type: %s", E, Le.message), Ca(null));
          }
      }
    }
    var oo;
    oo = {};
    var Jr = {};
    Object.freeze(Jr);
    function wl(s, p) {
      {
        var E = s.contextTypes;
        if (!E)
          return Jr;
        var N = {};
        for (var W in E)
          N[W] = p[W];
        {
          var ie = gn(s) || "Unknown";
          kl(E, N, "context", ie);
        }
        return N;
      }
    }
    function Tl(s, p, E, N) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var W = gn(p) || "Unknown";
            oo[W] || (oo[W] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", W, W));
          }
          return E;
        }
        var ie = s.getChildContext();
        for (var me in ie)
          if (!(me in N))
            throw new Error((gn(p) || "Unknown") + '.getChildContext(): key "' + me + '" is not defined in childContextTypes.');
        {
          var Le = gn(p) || "Unknown";
          kl(N, ie, "child context", Le);
        }
        return sr({}, E, ie);
      }
    }
    var zr;
    zr = {};
    var Is = null, ea = null;
    function ta(s) {
      s.context._currentValue = s.parentValue;
    }
    function Cl(s) {
      s.context._currentValue = s.value;
    }
    function xr(s, p) {
      if (s !== p) {
        ta(s);
        var E = s.parent, N = p.parent;
        if (E === null) {
          if (N !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (N === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          xr(E, N);
        }
        Cl(p);
      }
    }
    function lo(s) {
      ta(s);
      var p = s.parent;
      p !== null && lo(p);
    }
    function so(s) {
      var p = s.parent;
      p !== null && so(p), Cl(s);
    }
    function ai(s, p) {
      ta(s);
      var E = s.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      E.depth === p.depth ? xr(E, p) : ai(E, p);
    }
    function Al(s, p) {
      var E = p.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === E.depth ? xr(s, E) : Al(s, E), Cl(p);
    }
    function ii(s) {
      var p = ea, E = s;
      p !== E && (p === null ? so(E) : E === null ? lo(p) : p.depth === E.depth ? xr(p, E) : p.depth > E.depth ? ai(p, E) : Al(p, E), ea = E);
    }
    function Bs(s, p) {
      var E;
      E = s._currentValue, s._currentValue = p, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
      var N = ea, W = {
        parent: N,
        depth: N === null ? 0 : N.depth + 1,
        context: s,
        parentValue: E,
        value: p
      };
      return ea = W, W;
    }
    function Hs(s) {
      var p = ea;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== s && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var E = p.parentValue;
        E === Hc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
      }
      return ea = p.parent;
    }
    function uo() {
      return ea;
    }
    function oi(s) {
      var p = s._currentValue;
      return p;
    }
    function Ll(s) {
      return s._reactInternals;
    }
    function jc(s, p) {
      s._reactInternals = p;
    }
    var Aa = {}, co = {}, Pl, fo, po, li, ho, La, si, mo, Pa;
    {
      Pl = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), li = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), Pa = /* @__PURE__ */ new Set();
      var yo = /* @__PURE__ */ new Set();
      La = function(s, p) {
        if (!(s === null || typeof s == "function")) {
          var E = p + "_" + s;
          yo.has(E) || (yo.add(E), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, s));
        }
      }, ho = function(s, p) {
        if (p === void 0) {
          var E = gn(s) || "Component";
          li.has(E) || (li.add(E), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", E));
        }
      };
    }
    function go(s, p) {
      {
        var E = s.constructor, N = E && gn(E) || "ReactClass", W = N + "." + p;
        if (Aa[W])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, N), Aa[W] = !0;
      }
    }
    var vo = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, p, E) {
        var N = Ll(s);
        N.queue === null ? go(s, "setState") : (N.queue.push(p), E != null && La(E, "setState"));
      },
      enqueueReplaceState: function(s, p, E) {
        var N = Ll(s);
        N.replace = !0, N.queue = [p], E != null && La(E, "setState");
      },
      enqueueForceUpdate: function(s, p) {
        var E = Ll(s);
        E.queue === null ? go(s, "forceUpdate") : p != null && La(p, "setState");
      }
    };
    function Ws(s, p, E, N, W) {
      var ie = E(W, N);
      ho(p, ie);
      var me = ie == null ? N : sr({}, N, ie);
      return me;
    }
    function Vs(s, p, E) {
      var N = Jr, W = s.contextType;
      if ("contextType" in s) {
        var ie = (
          // Allow null for conditional declaration
          W === null || W !== void 0 && W.$$typeof === to && W._context === void 0
        );
        if (!ie && !Pa.has(s)) {
          Pa.add(s);
          var me = "";
          W === void 0 ? me = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof W != "object" ? me = " However, it is set to a " + typeof W + "." : W.$$typeof === eo ? me = " Did you accidentally pass the Context.Provider instead?" : W._context !== void 0 ? me = " Did you accidentally pass the Context.Consumer instead?" : me = " However, it is set to an object with keys {" + Object.keys(W).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gn(s) || "Component", me);
        }
      }
      typeof W == "object" && W !== null ? N = oi(W) : N = E;
      var Le = new s(p, N);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Le.state === null || Le.state === void 0)) {
          var o = gn(s) || "Component";
          Pl.has(o) || (Pl.add(o), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Le.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Le.getSnapshotBeforeUpdate == "function") {
          var c = null, S = null, C = null;
          if (typeof Le.componentWillMount == "function" && Le.componentWillMount.__suppressDeprecationWarning !== !0 ? c = "componentWillMount" : typeof Le.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof Le.componentWillReceiveProps == "function" && Le.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof Le.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof Le.componentWillUpdate == "function" && Le.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof Le.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), c !== null || S !== null || C !== null) {
            var M = gn(s) || "Component", Q = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            po.has(M) || (po.add(M), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, Q, c !== null ? `
  ` + c : "", S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : ""));
          }
        }
      }
      return Le;
    }
    function js(s, p, E) {
      {
        var N = gn(p) || "Component", W = s.render;
        W || (p.prototype && typeof p.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", N) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", N)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", N), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", N), s.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", N), s.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", N), s.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", N), p.contextType && p.contextTypes && !mo.has(p) && (mo.add(p), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", N)), typeof s.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", N), p.prototype && p.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gn(p) || "A pure component"), typeof s.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", N), typeof s.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", N), typeof s.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", N), typeof s.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", N);
        var ie = s.props !== E;
        s.props !== void 0 && ie && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", N, N), s.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", N, N), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !fo.has(p) && (fo.add(p), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gn(p))), typeof s.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", N), typeof s.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", N), typeof p.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", N);
        var me = s.state;
        me && (typeof me != "object" || Dn(me)) && i("%s.state: must be set to an object or null", N), typeof s.getChildContext == "function" && typeof p.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", N);
      }
    }
    function Uc(s, p) {
      var E = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var N = gn(s) || "Unknown";
          co[N] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            N
          ), co[N] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), E !== p.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gn(s) || "Component"), vo.enqueueReplaceState(p, p.state, null));
    }
    function Kc(s, p, E, N) {
      if (s.queue !== null && s.queue.length > 0) {
        var W = s.queue, ie = s.replace;
        if (s.queue = null, s.replace = !1, ie && W.length === 1)
          p.state = W[0];
        else {
          for (var me = ie ? W[0] : p.state, Le = !0, o = ie ? 1 : 0; o < W.length; o++) {
            var c = W[o], S = typeof c == "function" ? c.call(p, me, E, N) : c;
            S != null && (Le ? (Le = !1, me = sr({}, me, S)) : sr(me, S));
          }
          p.state = me;
        }
      } else
        s.queue = null;
    }
    function Us(s, p, E, N) {
      js(s, p, E);
      var W = s.state !== void 0 ? s.state : null;
      s.updater = vo, s.props = E, s.state = W;
      var ie = {
        queue: [],
        replace: !1
      };
      jc(s, ie);
      var me = p.contextType;
      if (typeof me == "object" && me !== null ? s.context = oi(me) : s.context = N, s.state === E) {
        var Le = gn(p) || "Component";
        si.has(Le) || (si.add(Le), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Le));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (s.state = Ws(s, p, o, W, E)), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (Uc(p, s), Kc(ie, s, E, N));
    }
    var Yc = {
      id: 1,
      overflow: ""
    };
    function Xc(s) {
      var p = s.overflow, E = s.id, N = E & ~qc(E);
      return N.toString(32) + p;
    }
    function xo(s, p, E) {
      var N = s.id, W = s.overflow, ie = bo(N) - 1, me = N & ~(1 << ie), Le = E + 1, o = bo(p) + ie;
      if (o > 30) {
        var c = ie - ie % 5, S = (1 << c) - 1, C = (me & S).toString(32), M = me >> c, Q = ie - c, fe = bo(p) + Q, Ce = Le << Q, He = Ce | M, rt = C + W;
        return {
          id: 1 << fe | He,
          overflow: rt
        };
      } else {
        var ut = Le << ie, Tt = ut | me, dn = W;
        return {
          id: 1 << o | Tt,
          overflow: dn
        };
      }
    }
    function bo(s) {
      return 32 - Rl(s);
    }
    function qc(s) {
      return 1 << bo(s) - 1;
    }
    var Rl = Math.clz32 ? Math.clz32 : Zc, So = Math.log, Gc = Math.LN2;
    function Zc(s) {
      var p = s >>> 0;
      return p === 0 ? 32 : 31 - (So(p) / Gc | 0) | 0;
    }
    function Qc(s, p) {
      return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
    }
    var Jc = typeof Object.is == "function" ? Object.is : Qc, Cr = null, Dl = null, Eo = null, Bt = null, na = !1, ra = !1, Gt = 0, ur = null, aa = 0, ko = 25, Nn = !1, Ar;
    function ia() {
      if (Cr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Nn && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Cr;
    }
    function br(s, p) {
      if (p === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ar), !1;
      s.length !== p.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Ar, "[" + s.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var E = 0; E < p.length && E < s.length; E++)
        if (!Jc(s[E], p[E]))
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
      return Bt === null ? Eo === null ? (na = !1, Eo = Bt = oa()) : (na = !0, Bt = Eo) : Bt.next === null ? (na = !1, Bt = Bt.next = oa()) : (na = !0, Bt = Bt.next), Bt;
    }
    function ed(s, p) {
      Cr = p, Dl = s, Nn = !1, Gt = 0;
    }
    function Ks(s, p, E, N) {
      for (; ra; )
        ra = !1, Gt = 0, aa += 1, Bt = null, E = s(p, N);
      return _l(), E;
    }
    function wo() {
      var s = Gt !== 0;
      return s;
    }
    function _l() {
      Nn = !1, Cr = null, Dl = null, ra = !1, Eo = null, aa = 0, ur = null, Bt = null;
    }
    function td(s) {
      return Nn && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), oi(s);
    }
    function Ys(s) {
      return Ar = "useContext", ia(), oi(s);
    }
    function ui(s, p) {
      return typeof p == "function" ? p(s) : p;
    }
    function nd(s) {
      return Ar = "useState", Xs(
        ui,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function Xs(s, p, E) {
      if (s !== ui && (Ar = "useReducer"), Cr = ia(), Bt = Lr(), na) {
        var N = Bt.queue, W = N.dispatch;
        if (ur !== null) {
          var ie = ur.get(N);
          if (ie !== void 0) {
            ur.delete(N);
            var me = Bt.memoizedState, Le = ie;
            do {
              var o = Le.action;
              Nn = !0, me = s(me, o), Nn = !1, Le = Le.next;
            } while (Le !== null);
            return Bt.memoizedState = me, [me, W];
          }
        }
        return [Bt.memoizedState, W];
      } else {
        Nn = !0;
        var c;
        s === ui ? c = typeof p == "function" ? p() : p : c = E !== void 0 ? E(p) : p, Nn = !1, Bt.memoizedState = c;
        var S = Bt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = Gs.bind(null, Cr, S);
        return [Bt.memoizedState, C];
      }
    }
    function To(s, p) {
      Cr = ia(), Bt = Lr();
      var E = p === void 0 ? null : p;
      if (Bt !== null) {
        var N = Bt.memoizedState;
        if (N !== null && E !== null) {
          var W = N[1];
          if (br(E, W))
            return N[0];
        }
      }
      Nn = !0;
      var ie = s();
      return Nn = !1, Bt.memoizedState = [ie, E], ie;
    }
    function rd(s) {
      Cr = ia(), Bt = Lr();
      var p = Bt.memoizedState;
      if (p === null) {
        var E = {
          current: s
        };
        return Object.seal(E), Bt.memoizedState = E, E;
      } else
        return p;
    }
    function qs(s, p) {
      Ar = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Gs(s, p, E) {
      if (aa >= ko)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (s === Cr) {
        ra = !0;
        var N = {
          action: E,
          next: null
        };
        ur === null && (ur = /* @__PURE__ */ new Map());
        var W = ur.get(p);
        if (W === void 0)
          ur.set(p, N);
        else {
          for (var ie = W; ie.next !== null; )
            ie = ie.next;
          ie.next = N;
        }
      }
    }
    function ad(s, p) {
      return To(function() {
        return s;
      }, p);
    }
    function id(s, p, E) {
      return ia(), p(s._source);
    }
    function od(s, p, E) {
      if (E === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return E();
    }
    function ld(s) {
      return ia(), s;
    }
    function sd() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ud() {
      return ia(), [!1, sd];
    }
    function cd() {
      var s = Dl, p = Xc(s.treeContext), E = Nl;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var N = Gt++;
      return hn(E, p, N);
    }
    function Co() {
    }
    var Zs = {
      readContext: td,
      useContext: Ys,
      useMemo: To,
      useReducer: Xs,
      useRef: rd,
      useState: nd,
      useInsertionEffect: Co,
      useLayoutEffect: qs,
      useCallback: ad,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Co,
      // Effects are not run in the server environment.
      useEffect: Co,
      // Debugging effect
      useDebugValue: Co,
      useDeferredValue: ld,
      useTransition: ud,
      useId: cd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: id,
      useSyncExternalStore: od
    }, Nl = null;
    function ci(s) {
      Nl = s;
    }
    function Qs(s) {
      try {
        var p = "", E = s;
        do {
          switch (E.tag) {
            case 0:
              p += ei(E.type, null, null);
              break;
            case 1:
              p += zs(E.type, null, null);
              break;
            case 2:
              p += io(E.type, null, null);
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
    var di = n.ReactCurrentDispatcher, Ao = n.ReactDebugCurrentFrame, Ol = 0, $r = 1, Lo = 2, Po = 3, la = 4, Js = 0, Fl = 1, sa = 2, dd = 12800;
    function eu(s) {
      return console.error(s), null;
    }
    function Sr() {
    }
    function fd(s, p, E, N, W, ie, me, Le, o) {
      var c = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: N === void 0 ? dd : N,
        status: Js,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: S,
        pingedTasks: c,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: W === void 0 ? eu : W,
        onAllReady: ie === void 0 ? Sr : ie,
        onShellReady: me === void 0 ? Sr : me,
        onShellError: Le === void 0 ? Sr : Le,
        onFatalError: o === void 0 ? Sr : o
      }, M = Ro(
        C,
        0,
        null,
        E,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      M.parentFlushed = !0;
      var Q = Ml(C, s, null, M, S, Jr, Is, Yc);
      return c.push(Q), C;
    }
    function pd(s, p) {
      var E = s.pingedTasks;
      E.push(p), E.length === 1 && d(function() {
        return gi(s);
      });
    }
    function fi(s, p) {
      return {
        id: _n,
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
    function Ml(s, p, E, N, W, ie, me, Le) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return pd(s, o);
        },
        blockedBoundary: E,
        blockedSegment: N,
        abortSet: W,
        legacyContext: ie,
        context: me,
        treeContext: Le
      };
      return o.componentStack = null, W.add(o), o;
    }
    function Ro(s, p, E, N, W, ie) {
      return {
        status: Ol,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: N,
        boundary: E,
        lastPushedText: W,
        textEmbedded: ie
      };
    }
    var Pr = null;
    function pi() {
      return Pr === null || Pr.componentStack === null ? "" : Qs(Pr.componentStack);
    }
    function Ir(s, p) {
      s.componentStack = {
        tag: 0,
        parent: s.componentStack,
        type: p
      };
    }
    function Er(s, p) {
      s.componentStack = {
        tag: 1,
        parent: s.componentStack,
        type: p
      };
    }
    function zl(s, p) {
      s.componentStack = {
        tag: 2,
        parent: s.componentStack,
        type: p
      };
    }
    function cr(s) {
      s.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : s.componentStack = s.componentStack.parent;
    }
    var Ra = null;
    function $l(s, p) {
      {
        var E;
        typeof p == "string" ? E = p : p && typeof p.message == "string" ? E = p.message : E = String(p);
        var N = Ra || pi();
        Ra = null, s.errorMessage = E, s.errorComponentStack = N;
      }
    }
    function dr(s, p) {
      var E = s.onError(p);
      if (E != null && typeof E != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof E + '" instead');
      return E;
    }
    function Br(s, p) {
      var E = s.onShellError;
      E(p);
      var N = s.onFatalError;
      N(p), s.destination !== null ? (s.status = sa, L(s.destination, p)) : (s.status = Fl, s.fatalError = p);
    }
    function Il(s, p, E) {
      Ir(p, "Suspense");
      var N = p.blockedBoundary, W = p.blockedSegment, ie = E.fallback, me = E.children, Le = /* @__PURE__ */ new Set(), o = fi(s, Le), c = W.chunks.length, S = Ro(
        s,
        c,
        o,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.children.push(S), W.lastPushedText = !1;
      var C = Ro(
        s,
        0,
        null,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = o, p.blockedSegment = C;
      try {
        if (Xl(s, p, me), qn(C.chunks, s.responseState, C.lastPushedText, C.textEmbedded), C.status = $r, No(o, C), o.pendingTasks === 0) {
          cr(p);
          return;
        }
      } catch (Q) {
        C.status = la, o.forceClientRender = !0, o.errorDigest = dr(s, Q), $l(o, Q);
      } finally {
        p.blockedBoundary = N, p.blockedSegment = W;
      }
      var M = Ml(s, ie, N, S, Le, p.legacyContext, p.context, p.treeContext);
      M.componentStack = p.componentStack, s.pingedTasks.push(M), cr(p);
    }
    function hi(s, p, E, N) {
      Ir(p, E);
      var W = p.blockedSegment, ie = ja(W.chunks, E, N, s.responseState, W.formatContext);
      W.lastPushedText = !1;
      var me = W.formatContext;
      W.formatContext = yn(me, E, N), Xl(s, p, ie), W.formatContext = me, Wi(W.chunks, E), W.lastPushedText = !1, cr(p);
    }
    function Do(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function tu(s, p, E, N, W) {
      var ie = {};
      ed(p, ie);
      var me = E(N, W);
      return Ks(E, N, me, W);
    }
    function nu(s, p, E, N, W) {
      var ie = E.render();
      E.props !== W && (yi || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gn(N) || "a component"), yi = !0);
      {
        var me = N.childContextTypes;
        if (me != null) {
          var Le = p.legacyContext, o = Tl(E, N, Le, me);
          p.legacyContext = o, ar(s, p, ie), p.legacyContext = Le;
          return;
        }
      }
      ar(s, p, ie);
    }
    function hd(s, p, E, N) {
      zl(p, E);
      var W = wl(E, p.legacyContext), ie = Vs(E, N, W);
      Us(ie, E, N, W), nu(s, p, ie, E, N), cr(p);
    }
    var Bl = {}, mi = {}, ru = {}, Hl = {}, yi = !1, Wl = !1, Vl = !1, jl = !1;
    function au(s, p, E, N) {
      var W;
      if (W = wl(E, p.legacyContext), Er(p, E), E.prototype && typeof E.prototype.render == "function") {
        var ie = gn(E) || "Unknown";
        Bl[ie] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ie, ie), Bl[ie] = !0);
      }
      var me = tu(s, p, E, N, W), Le = wo();
      if (typeof me == "object" && me !== null && typeof me.render == "function" && me.$$typeof === void 0) {
        var o = gn(E) || "Unknown";
        mi[o] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", o, o, o), mi[o] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof me == "object" && me !== null && typeof me.render == "function" && me.$$typeof === void 0
      ) {
        {
          var c = gn(E) || "Unknown";
          mi[c] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", c, c, c), mi[c] = !0);
        }
        Us(me, E, N, W), nu(s, p, me, E, N);
      } else if (iu(E), Le) {
        var S = p.treeContext, C = 1, M = 0;
        p.treeContext = xo(S, C, M);
        try {
          ar(s, p, me);
        } finally {
          p.treeContext = S;
        }
      } else
        ar(s, p, me);
      cr(p);
    }
    function iu(s) {
      {
        if (s && s.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", s.displayName || s.name || "Component"), typeof s.getDerivedStateFromProps == "function") {
          var p = gn(s) || "Unknown";
          Hl[p] || (i("%s: Function components do not support getDerivedStateFromProps.", p), Hl[p] = !0);
        }
        if (typeof s.contextType == "object" && s.contextType !== null) {
          var E = gn(s) || "Unknown";
          ru[E] || (i("%s: Function components do not support contextType.", E), ru[E] = !0);
        }
      }
    }
    function Ul(s, p) {
      if (s && s.defaultProps) {
        var E = sr({}, p), N = s.defaultProps;
        for (var W in N)
          E[W] === void 0 && (E[W] = N[W]);
        return E;
      }
      return p;
    }
    function md(s, p, E, N, W) {
      Er(p, E.render);
      var ie = tu(s, p, E.render, N, W), me = wo();
      if (me) {
        var Le = p.treeContext, o = 1, c = 0;
        p.treeContext = xo(Le, o, c);
        try {
          ar(s, p, ie);
        } finally {
          p.treeContext = Le;
        }
      } else
        ar(s, p, ie);
      cr(p);
    }
    function yd(s, p, E, N, W) {
      var ie = E.type, me = Ul(ie, N);
      Kl(s, p, ie, me, W);
    }
    function ou(s, p, E, N) {
      E._context === void 0 ? E !== E.Consumer && (jl || (jl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var W = N.children;
      typeof W != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ie = oi(E), me = W(ie);
      ar(s, p, me);
    }
    function gd(s, p, E, N) {
      var W = E._context, ie = N.value, me = N.children, Le;
      Le = p.context, p.context = Bs(W, ie), ar(s, p, me), p.context = Hs(W), Le !== p.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function vd(s, p, E, N, W) {
      Ir(p, "Lazy");
      var ie = E._payload, me = E._init, Le = me(ie), o = Ul(Le, N);
      Kl(s, p, Le, o, W), cr(p);
    }
    function Kl(s, p, E, N, W) {
      if (typeof E == "function")
        if (Do(E)) {
          hd(s, p, E, N);
          return;
        } else {
          au(s, p, E, N);
          return;
        }
      if (typeof E == "string") {
        hi(s, p, E, N);
        return;
      }
      switch (E) {
        case ro:
        case fl:
        case Ds:
        case cl:
        case rr: {
          ar(s, p, N.children);
          return;
        }
        case Za: {
          Ir(p, "SuspenseList"), ar(s, p, N.children), cr(p);
          return;
        }
        case dl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ga: {
          Il(s, p, N);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case no: {
            md(s, p, E, N, W);
            return;
          }
          case Qa: {
            yd(s, p, E, N, W);
            return;
          }
          case eo: {
            gd(s, p, E, N);
            return;
          }
          case to: {
            ou(s, p, E, N);
            return;
          }
          case ka: {
            vd(s, p, E, N);
            return;
          }
        }
      var ie = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + ie));
    }
    function xd(s, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Wl || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Wl = !0), s.entries === p && (Vl || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vl = !0);
    }
    function ar(s, p, E) {
      try {
        return Yl(s, p, E);
      } catch (N) {
        throw typeof N == "object" && N !== null && typeof N.then == "function" || (Ra = Ra !== null ? Ra : pi()), N;
      }
    }
    function Yl(s, p, E) {
      if (p.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Bc: {
            var N = E, W = N.type, ie = N.props, me = N.ref;
            Kl(s, p, W, ie, me);
            return;
          }
          case Rs:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ka: {
            var Le = E, o = Le._payload, c = Le._init, S;
            try {
              S = c(o);
            } catch (ut) {
              throw typeof ut == "object" && ut !== null && typeof ut.then == "function" && Ir(p, "Lazy"), ut;
            }
            ar(s, p, S);
            return;
          }
        }
        if (Dn(E)) {
          lu(s, p, E);
          return;
        }
        var C = Vc(E);
        if (C) {
          xd(E, C);
          var M = C.call(E);
          if (M) {
            var Q = M.next();
            if (!Q.done) {
              var fe = [];
              do
                fe.push(Q.value), Q = M.next();
              while (!Q.done);
              lu(s, p, fe);
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
        He.lastPushedText = Sn(p.blockedSegment.chunks, E, s.responseState, He.lastPushedText);
        return;
      }
      if (typeof E == "number") {
        var rt = p.blockedSegment;
        rt.lastPushedText = Sn(p.blockedSegment.chunks, "" + E, s.responseState, rt.lastPushedText);
        return;
      }
      typeof E == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function lu(s, p, E) {
      for (var N = E.length, W = 0; W < N; W++) {
        var ie = p.treeContext;
        p.treeContext = xo(ie, N, W);
        try {
          Xl(s, p, E[W]);
        } finally {
          p.treeContext = ie;
        }
      }
    }
    function ir(s, p, E) {
      var N = p.blockedSegment, W = N.chunks.length, ie = Ro(
        s,
        W,
        null,
        N.formatContext,
        // Adopt the parent segment's leading text embed
        N.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      N.children.push(ie), N.lastPushedText = !1;
      var me = Ml(s, p.node, p.blockedBoundary, ie, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (me.componentStack = p.componentStack.parent);
      var Le = me.ping;
      E.then(Le, Le);
    }
    function Xl(s, p, E) {
      var N = p.blockedSegment.formatContext, W = p.legacyContext, ie = p.context, me = null;
      me = p.componentStack;
      try {
        return ar(s, p, E);
      } catch (Le) {
        if (_l(), typeof Le == "object" && Le !== null && typeof Le.then == "function") {
          ir(s, p, Le), p.blockedSegment.formatContext = N, p.legacyContext = W, p.context = ie, ii(ie), p.componentStack = me;
          return;
        } else
          throw p.blockedSegment.formatContext = N, p.legacyContext = W, p.context = ie, ii(ie), p.componentStack = me, Le;
      }
    }
    function su(s, p, E, N) {
      var W = dr(s, N);
      if (p === null ? Br(s, N) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = W, $l(p, N), p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function bd(s) {
      var p = this, E = s.blockedBoundary, N = s.blockedSegment;
      N.status = Po, uu(p, E, N);
    }
    function _o(s, p, E) {
      var N = s.blockedBoundary, W = s.blockedSegment;
      if (W.status = Po, N === null)
        p.allPendingTasks--, p.status !== sa && (p.status = sa, p.destination !== null && w(p.destination));
      else {
        if (N.pendingTasks--, !N.forceClientRender) {
          N.forceClientRender = !0;
          var ie = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          N.errorDigest = p.onError(ie);
          {
            var me = "The server did not finish this Suspense boundary: ";
            ie && typeof ie.message == "string" ? ie = me + ie.message : ie = me + String(ie);
            var Le = Pr;
            Pr = s;
            try {
              $l(N, ie);
            } finally {
              Pr = Le;
            }
          }
          N.parentFlushed && p.clientRenderedBoundaries.push(N);
        }
        if (N.fallbackAbortableTasks.forEach(function(c) {
          return _o(c, p, E);
        }), N.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var o = p.onAllReady;
          o();
        }
      }
    }
    function No(s, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var E = p.children[0];
        E.id = p.id, E.parentFlushed = !0, E.status === $r && No(s, E);
      } else {
        var N = s.completedSegments;
        N.push(p);
      }
    }
    function uu(s, p, E) {
      if (p === null) {
        if (E.parentFlushed) {
          if (s.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          s.completedRootSegment = E;
        }
        if (s.pendingRootTasks--, s.pendingRootTasks === 0) {
          s.onShellError = Sr;
          var N = s.onShellReady;
          N();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          E.parentFlushed && E.status === $r && No(p, E), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(bd, s), p.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === $r) {
          No(p, E);
          var W = p.completedSegments;
          W.length === 1 && p.parentFlushed && s.partialBoundaries.push(p);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function cu(s, p) {
      var E = p.blockedSegment;
      if (E.status === Ol) {
        ii(p.context);
        var N = null;
        N = Pr, Pr = p;
        try {
          ar(s, p, p.node), qn(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), p.abortSet.delete(p), E.status = $r, uu(s, p.blockedBoundary, E);
        } catch (ie) {
          if (_l(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
            var W = p.ping;
            ie.then(W, W);
          } else
            p.abortSet.delete(p), E.status = la, su(s, p.blockedBoundary, E, ie);
        } finally {
          Pr = N;
        }
      }
    }
    function gi(s) {
      if (s.status !== sa) {
        var p = uo(), E = di.current;
        di.current = Zs;
        var N;
        N = Ao.getCurrentStack, Ao.getCurrentStack = pi;
        var W = Nl;
        ci(s.responseState);
        try {
          var ie = s.pingedTasks, me;
          for (me = 0; me < ie.length; me++) {
            var Le = ie[me];
            cu(s, Le);
          }
          ie.splice(0, me), s.destination !== null && Fo(s, s.destination);
        } catch (o) {
          dr(s, o), Br(s, o);
        } finally {
          ci(W), di.current = E, Ao.getCurrentStack = N, E === Zs && ii(p);
        }
      }
    }
    function vi(s, p, E) {
      switch (E.parentFlushed = !0, E.status) {
        case Ol: {
          var N = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, ha(p, s.responseState, N);
        }
        case $r: {
          E.status = Lo;
          for (var W = !0, ie = E.chunks, me = 0, Le = E.children, o = 0; o < Le.length; o++) {
            for (var c = Le[o]; me < c.index; me++)
              x(p, ie[me]);
            W = Oo(s, p, c);
          }
          for (; me < ie.length - 1; me++)
            x(p, ie[me]);
          return me < ie.length && (W = b(p, ie[me])), W;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Oo(s, p, E) {
      var N = E.boundary;
      if (N === null)
        return vi(s, p, E);
      if (N.parentFlushed = !0, N.forceClientRender)
        return Yn(p, s.responseState, N.errorDigest, N.errorMessage, N.errorComponentStack), vi(s, p, E), il(p, s.responseState);
      if (N.pendingTasks > 0) {
        N.rootSegmentID = s.nextSegmentId++, N.completedSegments.length > 0 && s.partialBoundaries.push(N);
        var W = N.id = pn(s.responseState);
        return ga(p, s.responseState, W), vi(s, p, E), va(p, s.responseState);
      } else {
        if (N.byteSize > s.progressiveChunkSize)
          return N.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(N), ga(p, s.responseState, N.id), vi(s, p, E), va(p, s.responseState);
        ji(p, s.responseState);
        var ie = N.completedSegments;
        if (ie.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var me = ie[0];
        return Oo(s, p, me), Ui(p, s.responseState);
      }
    }
    function du(s, p, E) {
      return Ls(p, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function xi(s, p, E) {
      return Pt(p, s.responseState, E.formatContext, E.id), Oo(s, p, E), rn(p, E.formatContext);
    }
    function bi(s, p, E) {
      for (var N = E.completedSegments, W = 0; W < N.length; W++) {
        var ie = N[W];
        ql(s, p, E, ie);
      }
      return N.length = 0, ol(p, s.responseState, E.id, E.rootSegmentID);
    }
    function Sd(s, p, E) {
      for (var N = E.completedSegments, W = 0; W < N.length; W++) {
        var ie = N[W];
        if (!ql(s, p, E, ie))
          return W++, N.splice(0, W), !1;
      }
      return N.splice(0, W), !0;
    }
    function ql(s, p, E, N) {
      if (N.status === Lo)
        return !0;
      var W = N.id;
      if (W === -1) {
        var ie = N.id = E.rootSegmentID;
        if (ie === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return xi(s, p, N);
      } else
        return xi(s, p, N), _c(p, s.responseState, W);
    }
    function Fo(s, p) {
      y();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (Oo(s, p, E), s.completedRootSegment = null, nl(p, s.responseState));
        var N = s.clientRenderedBoundaries, W;
        for (W = 0; W < N.length; W++) {
          var ie = N[W];
          du(s, p, ie);
        }
        N.splice(0, W);
        var me = s.completedBoundaries;
        for (W = 0; W < me.length; W++) {
          var Le = me[W];
          bi(s, p, Le);
        }
        me.splice(0, W), A(p), y(p);
        var o = s.partialBoundaries;
        for (W = 0; W < o.length; W++) {
          var c = o[W];
          if (!Sd(s, p, c)) {
            s.destination = null, W++, o.splice(0, W);
            return;
          }
        }
        o.splice(0, W);
        var S = s.completedBoundaries;
        for (W = 0; W < S.length; W++) {
          var C = S[W];
          bi(s, p, C);
        }
        S.splice(0, W);
      } finally {
        A(p), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), w(p));
      }
    }
    function Ed(s) {
      d(function() {
        return gi(s);
      });
    }
    function fu(s, p) {
      if (s.status === Fl) {
        s.status = sa, L(p, s.fatalError);
        return;
      }
      if (s.status !== sa && s.destination === null) {
        s.destination = p;
        try {
          Fo(s, p);
        } catch (E) {
          dr(s, E), Br(s, E);
        }
      }
    }
    function Mo(s, p) {
      try {
        var E = s.abortableTasks;
        E.forEach(function(N) {
          return _o(N, s, p);
        }), E.clear(), s.destination !== null && Fo(s, s.destination);
      } catch (N) {
        dr(s, N), Br(s, N);
      }
    }
    function kd(s, p) {
      return new Promise(function(E, N) {
        var W, ie, me = new Promise(function(M, Q) {
          ie = M, W = Q;
        });
        function Le() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(Q) {
                fu(c, Q);
              },
              cancel: function(Q) {
                Mo(c);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          M.allReady = me, E(M);
        }
        function o(M) {
          me.catch(function() {
          }), N(M);
        }
        var c = fd(s, kt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Wt(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ie, Le, o, W);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Mo(c, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        Ed(c);
      });
    }
    Ru.renderToReadableStream = kd, Ru.version = t;
  }()), Ru;
}
var zi, xf;
process.env.NODE_ENV === "production" ? (zi = MS(), xf = zS()) : (zi = $S(), xf = IS());
Ba.version = zi.version;
Ba.renderToString = zi.renderToString;
Ba.renderToStaticMarkup = zi.renderToStaticMarkup;
Ba.renderToNodeStream = zi.renderToNodeStream;
Ba.renderToStaticNodeStream = zi.renderToStaticNodeStream;
Ba.renderToReadableStream = xf.renderToReadableStream;
const BS = ({ width: e, height: t, runtime: n }) => {
  var ce, Re, je, Je, Oe, he, Fe, le;
  const { config: a } = se.useContext(xt), { sankey: i } = a, l = (ue) => ue.visualizationType === "Sankey", [d, f] = se.useState(0), u = se.useRef([]), [m, y] = se.useState(""), x = (ue) => {
    y(ue);
  }, b = () => {
    y("");
  }, [A, w] = se.useState(!1);
  se.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && w(!0);
  }, [window.innerWidth]);
  const O = () => {
    w(!1);
  };
  if (se.useEffect(() => {
    var Ae;
    let ue = 0;
    (Ae = u == null ? void 0 : u.current) == null || Ae.map(($e) => {
      const De = $e == null ? void 0 : $e.getBoundingClientRect().width;
      De > ue && (ue = De);
    }), f(ue);
  }, [u, i, window.innerWidth]), !l(a))
    return;
  const k = a == null ? void 0 : a.data[0], h = Array.from(new Set((ce = k == null ? void 0 : k.links) == null ? void 0 : ce.flatMap((ue) => [ue.source, ue.target]))), L = {
    nodes: h.map((ue) => ({ id: ue })),
    links: (Re = k == null ? void 0 : k.links) == null ? void 0 : Re.map((ue) => ({
      source: h.findIndex((Ae) => Ae === ue.source),
      target: h.findIndex((Ae) => Ae === ue.target),
      value: ue.value
    }))
  };
  let F = 5;
  const P = 50, T = _S().nodeWidth(i.nodeSize.nodeWidth).nodePadding(i.nodePadding).iterations(i.iterations).nodeAlign(AS).extent([
    [i.margin.margin_x, Number(i.margin.margin_y)],
    [e - F - d, a.heights.vertical - P]
  ]), { nodes: _, links: B } = T(L), Y = (ue) => {
    var qe;
    let Ae = 30, $e = 0, De = "node-value--storynode", Ze = !0;
    return (qe = k == null ? void 0 : k.storyNodeText) != null && qe.every((yt) => yt.StoryNode !== ue) && (Ze = !1, $e = 10, Ae = 8, De = "node-value"), { textPositionHorizontal: Ae, textPositionVertical: $e, classStyle: De, storyNodes: Ze };
  }, X = (ue) => {
    if (!(L != null && L.nodes))
      return { sourceNodes: [], activeLinks: [] };
    const Ae = L.nodes.find((Ze) => Ze.id === ue), $e = [], De = [];
    return Ae && (B.forEach((Ze) => {
      const qe = Ze.target, yt = Ze.source;
      qe.id === ue && $e.push(yt.id);
    }), $e.forEach((Ze) => {
      B.forEach((qe) => {
        const yt = qe.target, nt = qe.source;
        yt.id === m && nt.id === Ze && De.push(qe);
      });
    })), { sourceNodes: $e, activeLinks: De };
  }, J = `${(((je = k == null ? void 0 : k.tooltips) == null ? void 0 : je.find((ue) => ue.node === m)) || {}).value}`, re = `${(((Je = k == null ? void 0 : k.tooltips) == null ? void 0 : Je.find((ue) => ue.node === m)) || {}).summary}`, H = (((Oe = k == null ? void 0 : k.tooltips) == null ? void 0 : Oe.find((ue) => ue.node === m)) || {}).column1Label, ae = (((he = k == null ? void 0 : k.tooltips) == null ? void 0 : he.find((ue) => ue.node === m)) || {}).column2Label, j = (((Fe = k == null ? void 0 : k.tooltips) == null ? void 0 : Fe.find((ue) => ue.node === m)) || {}).column1, te = (((le = k == null ? void 0 : k.tooltips) == null ? void 0 : le.find((ue) => ue.node === m)) || {}).column2, oe = ({ columnData: ue }) => /* @__PURE__ */ r.createElement("ul", null, ue == null ? void 0 : ue.map((Ae, $e) => /* @__PURE__ */ r.createElement("li", { key: $e }, Ae.label, ": ", Ae.value, " (", Ae.additional_info, "%)"))), ne = Ba.renderToString(/* @__PURE__ */ r.createElement(oe, { columnData: j })), ee = Ba.renderToString(/* @__PURE__ */ r.createElement(oe, { columnData: te })), G = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${m}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${J}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${re}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${H}<strong></span>
                          ${ne}
                        </div>
                        <div>
                          <span><strong>${ae}<strong></span>
                          ${ee}
                        </div>
                      </div>
                    </div>`, Z = L.nodes.map((ue, Ae) => {
    var ze, Te;
    let { textPositionHorizontal: $e, textPositionVertical: De, classStyle: Ze, storyNodes: qe } = Y(ue.id), { sourceNodes: yt } = X(m), nt = i.opacity.nodeOpacityDefault, Ve = i.nodeColor.default;
    return m !== ue.id && m !== "" && !yt.includes(ue.id) && (Ve = i.nodeColor.inactive, nt = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ae }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: ue.y1 - ue.y0 + 2,
        width: T.nodeWidth(),
        x: ue.x0,
        y: ue.y0 - 1,
        fill: Ve,
        fillOpacity: nt,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => x(ue.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: ue.x0 + $e,
        textAnchor: L.nodes.length - 1 === Ae ? "end" : "start",
        verticalAnchor: "end",
        y: (ue.y1 + ue.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((ze = k == null ? void 0 : k.storyNodeText) == null ? void 0 : ze.find((Ye) => Ye.StoryNode === ue.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        verticalAnchor: "end",
        className: Ze,
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0 + 25) / 2,
        fill: i.storyNodeFontColor || i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      typeof ue.value == "number" ? ue.value.toLocaleString() : ue.value
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: L.nodes.length === Ae ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((Te = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Te.find((Ye) => Ye.StoryNode === ue.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0) / 2 + De,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      ue.id
    ), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      /* @__PURE__ */ r.createElement("tspan", { className: Ze }, i.nodeValueStyle.textBefore + (typeof ue.value == "number" ? ue.value.toLocaleString() : ue.value) + i.nodeValueStyle.textAfter)
    )));
  }), K = B.map((ue, Ae) => {
    const De = FS()(ue);
    let Ze = i.opacity.LinkOpacityDefault, qe = i.linkColor.default, { activeLinks: yt } = X(m);
    return !yt.includes(ue) && m !== "" && (qe = i.linkColor.inactive, Ze = i.opacity.LinkOpacityInactive), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: Ae,
        d: De,
        stroke: qe,
        fill: "none",
        strokeOpacity: Ze,
        strokeWidth: ue.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(ue.target.id || null),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      }
    );
  }), V = L.nodes.reduce((ue, Ae) => Math.max(ue, Ae.depth), -1), Se = L.nodes.filter((ue) => ue.depth === V).map((ue, Ae) => {
    var ze, Te;
    let { textPositionHorizontal: $e, textPositionVertical: De, classStyle: Ze, storyNodes: qe } = Y(ue.id), { sourceNodes: yt } = X(m), nt = i.opacity.nodeOpacityDefault, Ve = i.nodeColor.default;
    return m !== ue.id && m !== "" && !yt.includes(ue.id) && (Ve = i.nodeColor.inactive, nt = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(at, { className: "", key: Ae, innerRef: (Ye) => u.current[Ae] = Ye }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: ue.y1 - ue.y0 + 2,
        width: T.nodeWidth(),
        x: ue.x0,
        y: ue.y0 - 1,
        fill: Ve,
        fillOpacity: nt,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": "tooltip",
        onClick: () => x(ue.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: ue.x0 + $e,
        textAnchor: L.nodes.length - 1 === Ae ? "end" : "start",
        verticalAnchor: "end",
        y: (ue.y1 + ue.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((ze = k == null ? void 0 : k.storyNodeText) == null ? void 0 : ze.find((Ye) => Ye.StoryNode === ue.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(St, { verticalAnchor: "end", className: Ze, x: ue.x0 + $e, y: (ue.y1 + ue.y0 + 25) / 2, fill: i.storyNodeFontColor || i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof ue.value == "number" ? ue.value.toLocaleString() : ue.value), /* @__PURE__ */ r.createElement(
      St,
      {
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: L.nodes.length === Ae ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Te = k == null ? void 0 : k.storyNodeText) == null ? void 0 : Te.find((Ye) => Ye.StoryNode === ue.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("text", { x: ue.x0 + $e, y: (ue.y1 + ue.y0) / 2 + De, dominantBaseline: "text-before-edge", fill: i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ r.createElement("tspan", { id: ue.id, className: "node-id" }, ue.id)), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: ue.x0 + $e,
        y: (ue.y1 + ue.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ r.createElement("tspan", { onClick: () => x(ue.id), className: Ze }, i.nodeValueStyle.textBefore + (typeof ue.value == "number" ? ue.value.toLocaleString() : ue.value) + i.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ r.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(a.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ r.createElement(at, { className: "links" }, K), /* @__PURE__ */ r.createElement(at, { className: "nodes" }, Z), /* @__PURE__ */ r.createElement(at, { className: "finalNodes", style: { display: "none" } }, Se)), /* @__PURE__ */ r.createElement(wy, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => b(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), A && /* @__PURE__ */ r.createElement("div", { className: "popup" }, /* @__PURE__ */ r.createElement("div", { className: "popup-content" }, /* @__PURE__ */ r.createElement("button", { className: "visually-hidden", onClick: O }, "Select for accessible version."), /* @__PURE__ */ r.createElement("p", null, /* @__PURE__ */ r.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var HS = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const lr = HS;
function WS(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, i = e.range, l = e.tickLabelFontSize, d = e.tickLength, f = a === lr.left || a === lr.top ? -1 : 1, u, m, y;
  if (a === lr.top || a === lr.bottom) {
    var x = a === lr.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    u = (Number(i[0]) + Number(i[i.length - 1])) / 2, m = f * (d + t + l + x);
  } else
    u = f * ((Number(i[0]) + Number(i[i.length - 1])) / 2), m = -(d + t), y = "rotate(" + f * 90 + ")";
  return {
    x: u,
    y: m,
    transform: y
  };
}
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ds.apply(this, arguments);
}
function VS(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, l = e.tickComponent, d = e.tickLabelProps, f = e.tickStroke, u = f === void 0 ? "#222" : f, m = e.tickTransform, y = e.ticks, x = e.strokeWidth, b = e.tickLineProps;
  return y.map(function(A) {
    var w, O = A.value, k = A.index, h = A.from, L = A.to, F = A.formattedValue, P = (w = d[k]) != null ? w : {}, T = Math.max(10, typeof P.fontSize == "number" && P.fontSize || 0), _ = L.y + (n && a !== lr.top ? T : 0);
    return /* @__PURE__ */ r.createElement(at, {
      key: "visx-tick-" + O + "-" + k,
      className: Cn("visx-axis-tick", i),
      transform: m
    }, !t && /* @__PURE__ */ r.createElement(tn, ds({
      from: h,
      to: L,
      stroke: u,
      strokeWidth: x,
      strokeLinecap: "square"
    }, b)), l ? l(ds({}, P, {
      x: L.x,
      y: _,
      formattedValue: F
    })) : /* @__PURE__ */ r.createElement(St, ds({
      x: L.x,
      y: _
    }, P), F));
  });
}
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
var Rh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function jS(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, l = e.hideTicks, d = e.horizontal, f = e.label, u = f === void 0 ? "" : f, m = e.labelClassName, y = e.labelOffset, x = y === void 0 ? 14 : y, b = e.labelProps, A = b === void 0 ? Rh : b, w = e.orientation, O = w === void 0 ? lr.bottom : w, k = e.scale, h = e.stroke, L = h === void 0 ? "#222" : h, F = e.strokeDasharray, P = e.strokeWidth, T = P === void 0 ? 1 : P, _ = e.tickClassName, B = e.tickComponent, Y = e.tickLineProps, X = e.tickLabelProps, J = e.tickLength, re = J === void 0 ? 8 : J, H = e.tickStroke, ae = H === void 0 ? "#222" : H, j = e.tickTransform, te = e.ticks, oe = e.ticksComponent, ne = oe === void 0 ? VS : oe, ee = pc({}, Rh, typeof X == "object" ? X : null), G = te.map(function(K) {
    var V = K.value, we = K.index;
    return typeof X == "function" ? X(V, we, te) : ee;
  }), Z = Math.max.apply(Math, [10].concat(G.map(function(K) {
    return typeof K.fontSize == "number" ? K.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, ne({
    hideTicks: l,
    horizontal: d,
    orientation: O,
    scale: k,
    tickClassName: _,
    tickComponent: B,
    tickLabelProps: G,
    tickStroke: ae,
    tickTransform: j,
    ticks: te,
    strokeWidth: T,
    tickLineProps: Y
  }), !i && /* @__PURE__ */ r.createElement(tn, {
    className: Cn("visx-axis-line", n),
    from: t,
    to: a,
    stroke: L,
    strokeWidth: T,
    strokeDasharray: F
  }), u && /* @__PURE__ */ r.createElement(St, pc({
    className: Cn("visx-axis-label", m)
  }, WS({
    labelOffset: x,
    labelProps: A,
    orientation: O,
    range: k.range(),
    tickLabelFontSize: Z,
    tickLength: re
  }), A), u));
}
function US(e, t) {
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
function KS(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Xg;
}
function Du(e, t) {
  var n = e.x, a = e.y;
  return new Ky(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
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
var Vd = 0;
function YS(e) {
  return e === void 0 && (e = Vd), typeof e == "number" ? {
    start: e,
    end: e
  } : bf({
    start: Vd,
    end: Vd
  }, e);
}
var XS = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Sf.apply(this, arguments);
}
function qS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Lc(e) {
  var t = e.children, n = t === void 0 ? jS : t, a = e.axisClassName, i = e.hideAxisLine, l = i === void 0 ? !1 : i, d = e.hideTicks, f = d === void 0 ? !1 : d, u = e.hideZero, m = u === void 0 ? !1 : u, y = e.innerRef, x = e.left, b = x === void 0 ? 0 : x, A = e.numTicks, w = A === void 0 ? 10 : A, O = e.orientation, k = O === void 0 ? lr.bottom : O, h = e.rangePadding, L = h === void 0 ? 0 : h, F = e.scale, P = e.tickFormat, T = e.tickLength, _ = T === void 0 ? 8 : T, B = e.tickValues, Y = e.top, X = Y === void 0 ? 0 : Y, J = qS(e, XS), re = P ?? KS(F), H = k === lr.left, ae = k === lr.top, j = ae || k === lr.bottom, te = US(F), oe = H || ae ? -1 : 1, ne = F.range(), ee = YS(L), G = Du({
    x: Number(ne[0]) + 0.5 - ee.start,
    y: 0
  }, j), Z = Du({
    x: Number(ne[ne.length - 1]) + 0.5 + ee.end,
    y: 0
  }, j), K = (B ?? Yg(F, w)).filter(function(we) {
    return !m || we !== 0 && we !== "0";
  }).map(function(we, Se) {
    return {
      value: we,
      index: Se
    };
  }), V = K.map(function(we) {
    var Se = we.value, ce = we.index, Re = Kg(te(Se));
    return {
      value: Se,
      index: ce,
      from: Du({
        x: Re,
        y: 0
      }, j),
      to: Du({
        x: Re,
        y: _ * oe
      }, j),
      formattedValue: re(Se, ce, K)
    };
  });
  return /* @__PURE__ */ r.createElement(at, {
    className: Cn("visx-axis", a),
    innerRef: y,
    top: X,
    left: b
  }, n(Sf({}, J, {
    axisFromPoint: G,
    axisToPoint: Z,
    hideAxisLine: l,
    hideTicks: f,
    hideZero: m,
    horizontal: j,
    numTicks: w,
    orientation: k,
    rangePadding: L,
    scale: F,
    tickFormat: re,
    tickLength: _,
    tickPosition: te,
    tickSign: oe,
    ticks: V
  })));
}
var GS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function hc() {
  return hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hc.apply(this, arguments);
}
function ZS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var QS = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function JS(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = ZS(e, GS), u = typeof d == "function" ? d : hc({}, QS, d);
  return /* @__PURE__ */ r.createElement(Lc, hc({
    axisClassName: Cn("visx-axis-left", t),
    labelOffset: a,
    orientation: lr.left,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var eE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mc.apply(this, arguments);
}
function tE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var nE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function rE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = tE(e, eE), u = typeof d == "function" ? d : mc({}, nE, d);
  return /* @__PURE__ */ r.createElement(Lc, mc({
    axisClassName: Cn("visx-axis-right", t),
    labelOffset: a,
    orientation: lr.right,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var aE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function yc() {
  return yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yc.apply(this, arguments);
}
function iE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var oE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function lE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = iE(e, aE), u = typeof d == "function" ? d : yc({}, oE, d);
  return /* @__PURE__ */ r.createElement(Lc, yc({
    axisClassName: Cn("visx-axis-top", t),
    labelOffset: a,
    orientation: lr.top,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var sE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gc.apply(this, arguments);
}
function uE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var cE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Iu(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = uE(e, sE), u = typeof d == "function" ? d : gc({}, cE, d);
  return /* @__PURE__ */ r.createElement(Lc, gc({
    axisClassName: Cn("visx-axis-bottom", t),
    labelOffset: a,
    orientation: lr.bottom,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Mb,
  curveBasisClosed: zb,
  curveBasisOpen: $b,
  curveBundle: Ib,
  curveCardinal: Bb,
  curveCardinalClosed: Hb,
  curveCardinalOpen: Wb,
  curveCatmullRom: Vb,
  curveCatmullRomClosed: jb,
  curveCatmullRomOpen: Ub,
  curveLinear: Ec,
  curveLinearClosed: Jd,
  curveMonotoneX: $u,
  curveMonotoneY: Kb,
  curveNatural: Yb,
  curveStep: Xb,
  curveStepAfter: Gb,
  curveStepBefore: qb
}, Symbol.toStringTag, { value: "Module" })), dE = (e) => {
  var _, B;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, isDebug: f, children: u } = e;
  let { transformedData: m, config: y, handleLineType: x, parseDate: b, formatDate: A, formatNumber: w, seriesHighlight: O, colorScale: k, rawData: h, brushConfig: L } = se.useContext(xt);
  const F = (_ = y.brush) != null && _.active && ((B = L.data) != null && B.length) ? L.data : m;
  if (!F)
    return;
  const P = (Y) => (En(y.xAxis) ? t(b(Y[y.xAxis.dataKey], !1)) : t(Y[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), T = (Y, X, J = void 0) => n(Y[J.dataKey]);
  return F && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Or, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((Y, X) => {
    let J = F.map((j) => ({
      [y.xAxis.dataKey]: j[y.xAxis.dataKey],
      [Y.dataKey]: j[Y.dataKey]
    })), re = fs[Y.lineType], H = y.legend.behavior === "highlight" && O.length > 0 && O.indexOf(Y.dataKey) === -1, ae = y.legend.behavior === "highlight" || O.length === 0 || O.indexOf(Y.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: X }, /* @__PURE__ */ r.createElement(
      Nr,
      {
        data: J,
        x: (j) => P(j),
        y: (j) => T(j, X, Y),
        stroke: ae ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[Y.dataKey] : Y.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: re,
        strokeDasharray: Y.type ? x(Y.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      E0,
      {
        key: "area-chart",
        fill: ae ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[Y.dataKey] : Y.dataKey) : "#000" : "transparent",
        fillOpacity: H ? 0.25 : 0.5,
        data: J,
        x: (j) => P(j),
        y: (j) => T(j, X, Y),
        yScale: n,
        curve: re,
        strokeDasharray: Y.type ? x(Y.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(wr, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Y) => l(Y, h), onMouseLeave: d }))));
}, fE = se.memo(dE), pE = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l, isDebug: d }) => {
  var O, k;
  let { transformedData: f, config: u, seriesHighlight: m, colorScale: y, rawData: x } = se.useContext(xt);
  const b = (O = u.brush) != null && O.active && ((k = u.brush.data) != null && k.length) ? u.brush.data : f;
  if (!b)
    return;
  const A = (h) => {
    if (u.xAxis.type === "categorical")
      return e(h);
    if (En(u.xAxis)) {
      let L = new Date(h);
      return e(L);
    }
  }, w = 2;
  return b && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Or, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(at, { className: "area-chart", key: "area-wrapper", left: Number(u.yAxis.size) + w / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    L0,
    {
      data: b,
      keys: u.runtime.areaSeriesKeys.map((h) => h.dataKey) || u.series.map((h) => h.dataKey),
      x0: (h) => A(h.data[u.xAxis.dataKey]),
      y0: (h) => Number(t(h[0])),
      y1: (h) => Number(t(h[1])),
      curve: fs[Vu[u.stackedAreaChartLineType]]
    },
    ({ stacks: h, path: L }) => h.map((F, P) => {
      let T = u.legend.behavior === "highlight" && m.length > 0 && m.indexOf(F.key) === -1, _ = u.legend.behavior === "highlight" || m.length === 0 || m.indexOf(F.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: F.key,
            d: L(F) || "",
            strokeWidth: 2,
            stroke: _ ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[F.key] : F.key) : "#000" : "transparent",
            fillOpacity: T ? 0.2 : 1,
            fill: _ ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[F.key] : F.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(wr, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (h) => i(h, x), onMouseLeave: l }))));
}, hE = se.memo(pE), ws = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: l, setSeriesHighlight: d, seriesHighlight: f } = se.useContext(xt), { orientation: u } = e, [m, y] = se.useState(null), x = u === "horizontal", b = 1, A = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, w = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, O = e.yAxis.labelPlacement === "Below Bar", k = e.yAxis.displayNumbersOnBar, h = e.orientation === "horizontal" ? "yAxis" : "xAxis", L = e.barStyle === "rounded", F = e.visualizationSubType === "stacked", P = e.tipRounding, T = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", _ = e.runtime.seriesKeys.length, B = { small: 16, medium: 18, large: 20 }, Y = Object.keys(e.runtime.seriesLabels).length > 1, J = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (f != null && f.length) ? f : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return se.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e.yAxis,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), se.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), se.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (L || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    isHorizontal: x,
    barBorderWidth: b,
    lollipopBarWidth: A,
    lollipopShapeSize: w,
    isLabelBelowBar: O,
    displayNumbersOnBar: k,
    shouldSuppress: (Z) => {
      var K;
      return (K = e.preliminaryData) == null ? void 0 : K.some((V) => {
        const we = V.column ? V.column === Z.key : !0, Se = String(Z.value) === String(V.value) && V.value !== "";
        return we && Se && V.symbol && V.type === "suppression";
      });
    },
    section: h,
    isRounded: L,
    isStacked: F,
    tipRounding: P,
    radius: T,
    stackCount: _,
    barStackedSeriesKeys: J,
    fontSize: B,
    hasMultipleSeries: Y,
    applyRadius: (Z) => {
      if (Z == null || !L)
        return {};
      let K = {};
      return (F && Z + 1 === _ || !F) && (K = x ? { borderRadius: `0 ${T}  ${T}  0` } : { borderRadius: `${T} ${T} 0 0` }), !F && Z === -1 && (K = x ? { borderRadius: `${T} 0  0 ${T} ` } : { borderRadius: ` 0  0 ${T} ${T}` }), P === "full" && F && Z === 0 && _ > 1 && (K = x ? { borderRadius: `${T} 0 0 ${T}` } : { borderRadius: `0 0 ${T} ${T}` }), P === "full" && (F && Z === 0 && _ === 1 || !F) && (K = { borderRadius: T }), K;
    },
    updateBars: (Z) => {
      if (e.visualizationType !== "Bar" && !x)
        return Z;
      const K = [...Z];
      let V;
      const we = {
        stacked: e.barHeight,
        lollipop: A
      };
      F ? V = we.stacked : V = we[e.isLollipopChart ? "lollipop" : "stacked"] * _;
      const Se = O ? B[e.fontSize] * 1.2 : 0;
      let ce = Number(e.barSpace), Re = K.length * (V + Se + ce);
      return x && (e.heights.horizontal = Re), K.map((je, Je) => {
        let Oe = 0;
        return je.index !== 0 && (Oe = (V + ce + Se) * Je), { ...je, y: Oe, height: V };
      });
    },
    assignColorsToValues: (Z, K, V) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return V;
      const we = e.customColors ?? t[e.palette], Se = n.map((Je) => Je[e.legend.colorCode]);
      let ce = /* @__PURE__ */ new Map(), Re = [];
      for (let Je = 0; Je < Se.length; Je++)
        ce.has(Se[Je]) || ce.set(Se[Je], we[ce.size % we.length]), Re.push(ce.get(Se[Je]));
      for (; Re.length < Z; )
        Re = Re.concat(Re);
      return Re[K];
    },
    getHighlightedBarColorByValue: (Z) => {
      const K = e == null ? void 0 : e.highlightedBarValues.find((V) => {
        if (V.value)
          return e.xAxis.type === "date" ? l(i(V.value)) === Z : V.value === Z;
      });
      return K != null && K.color ? K.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (Z) => {
      const K = e == null ? void 0 : e.highlightedBarValues.filter((V) => {
        if (V.value)
          return e.xAxis.type === "date" ? l(i(V.value)) === Z : V.value === Z;
      })[0];
      return K != null && K.color ? K : !1;
    },
    getAdditionalColumn: (Z, K) => {
      if (!K)
        return "";
      const V = e.columns, we = [];
      let Se = "";
      const ce = n.find((Re) => Re[e.xAxis.dataKey] === K) || {};
      return Object.keys(V).forEach((Re) => {
        if (Z && e.columns[Re].series && e.columns[Re].series !== Z)
          return;
        const je = {
          addColPrefix: e.columns[Re].prefix,
          addColSuffix: e.columns[Re].suffix,
          addColRoundTo: e.columns[Re].roundToPlace ? e.columns[Re].roundToPlace : "",
          addColCommas: e.columns[Re].commas
        }, Je = Ef(ce[e.columns[Re].name], "left", !0, e, je);
        e.columns[Re].tooltips && we.push([e.columns[Re].label, Je]);
      }), we.forEach((Re) => {
        Se += `${Re[0]} : ${Re[1]} <br/>`;
      }), Se;
    },
    hoveredBar: m,
    setHoveredBar: y,
    onMouseOverBar: (Z, K) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && K && d([K]), y(Z);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && d([]);
    }
  };
}, Ts = se.createContext(null), Yf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: l, handleTooltipClick: d, tooltipData: f, showTooltip: u, hideTooltip: m }) => {
  const { parseDate: y, config: x } = se.useContext(xt), { runtime: b, regions: A, visualizationType: w, orientation: O, xAxis: k } = x, h = e.domain(), L = (T) => {
    let _;
    if (!(T != null && T.fromType) || T.fromType === "Fixed") {
      const B = new Date(T.from), Y = y(Gl(x.xAxis.dateParseFormat, B)).getTime();
      _ = e(Y), w === "Bar" && k.type === "date-time" && (_ = _ - t * n / 2);
    }
    if (T.fromType === "Previous Days") {
      const B = Number(T.from) || 0;
      h.map((re) => Gl(x.xAxis.dateParseFormat, new Date(re)));
      const Y = T.toType === "Last Date" ? new Date(h[h.length - 1]).getTime() : new Date(T.to), X = x.xAxis.type === "categorical" ? Gl(x.xAxis.dateParseFormat, Y) : Gl(x.xAxis.dateParseFormat, Y), J = new Date(X);
      if (_ = new Date(J.setDate(J.getDate() - Number(B))), k.type === "date") {
        _ = new Date(Gl(k.dateParseFormat, _)).getTime();
        let re = h[0], H = Math.abs(_ - re);
        for (let ae = 1; ae < h.length; ae++) {
          const j = Math.abs(_ - h[ae]);
          j < H && (H = j, re = h[ae]);
        }
        _ = re;
      }
      if (k.type === "categorical") {
        let re = h[0], H = Math.abs(new Date(_).getTime() - new Date(re).getTime());
        for (let ae = 1; ae < h.length; ae++) {
          const j = Math.abs(new Date(_).getTime() - new Date(h[ae]).getTime());
          j < H && (H = j, re = h[ae]);
        }
        _ = re;
      }
      _ = e(_);
    }
    if (k.type === "categorical" && T.fromType !== "Previous Days" && (_ = e(T.from)), w === "Line" || w === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), _ = _ + B;
    }
    return w === "Bar" && x.xAxis.type === "date-time" && T.fromType === "Previous Days" && (_ = _ - t * n / 2), _;
  }, F = (T) => {
    let _;
    if (k.type === "categorical" && (_ = e(T.to)), En(k) && ((!(T != null && T.toType) || T.toType === "Fixed") && (_ = e(y(T.to).getTime())), (w === "Bar" || x.visualizationType === "Combo") && (_ = T.toType !== "Last Date" ? e(y(T.to).getTime()) + t * n : _)), T.toType === "Last Date") {
      const B = h[h.length - 1];
      _ = Number(e(B) + ((w === "Bar" || w === "Combo") && x.xAxis.type === "date" ? t * n : 0));
    }
    if (w === "Line" || w === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), _ = _ + B;
    }
    return w === "Bar" && x.xAxis.type === "date-time" && T.toType !== "Last Date" && (_ = _ - t * n / 2), (w === "Bar" || w === "Combo") && k.type === "categorical" && (_ = _ + (w === "Bar" || w === "Combo" ? t * n : 0)), _;
  }, P = (T, _) => T - _;
  if (A && O === "vertical")
    return A.map((T) => {
      const _ = L(T), B = F(T), Y = P(B, _);
      if (!_ || !B)
        return null;
      const X = () => /* @__PURE__ */ r.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${_} -5
                L${_} 5
                M${_} 0
                L${B} 0
                M${B} -5
                L${B} 5`
        }
      ), J = () => /* @__PURE__ */ r.createElement("rect", { x: _, y: 0, width: Y, height: a, fill: T.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(at, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: T.label, onMouseMove: l, onMouseLeave: i, handleTooltipClick: d, tooltipData: JSON.stringify(f), showTooltip: u }, /* @__PURE__ */ r.createElement(X, null), /* @__PURE__ */ r.createElement(J, null), /* @__PURE__ */ r.createElement(St, { x: _ + Y / 2, y: 5, fill: T.color, verticalAnchor: "start", textAnchor: "middle" }, T.label));
    });
};
function Cs(e) {
  var V, we;
  const { config: t, index: n, id: a, className: i, background: l, borderColor: d, borderWidth: f, width: u, height: m, x: y, y: x, onMouseOver: b, onMouseLeave: A, onClick: w, tooltipHtml: O, tooltipId: k, styleOverrides: h, seriesHighlight: L, type: F } = e, P = Math.max(0, u), T = Math.max(0, m), _ = t.orientation === "horizontal", B = t.barStyle === "rounded", Y = t.visualizationSubType === "stacked", X = t.tipRounding, J = t.visualizationType === "Combo" && ((we = (V = t.runtime) == null ? void 0 : V.barSeriesKeys) == null ? void 0 : we.length), re = t.runtime.seriesKeys.length, H = t.visualizationType === "Bar" && t.legend.axisAlign && (L != null && L.length) ? L == null ? void 0 : L.length : 0, ae = J || H || re;
  let j = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (j > P / 2 || j > T / 2) && (j = Math.min(P / 2, T / 2));
  const te = () => `M${y},${x + T}
      L${y},${x + j}
      Q${y},${x} ${y + j},${x}
      L${y + P - j},${x}
      Q${y + P},${x} ${y + P},${x + j}
      L${y + P},${x + T}
      L${y},${x + T}`, oe = () => `M${y},${x + T}
      L${y},${x}
      L${y + P - j},${x}
      Q${y + P},${x} ${y + P},${x + j}
      L${y + P},${x + T - j}
      Q${y + P},${x + T} ${y + P - j},${x + T}
      L${y},${x + T}`, ne = () => `M${y + j},${x + T}
      Q${y},${x + T} ${y},${x + T - j}
      L${y},${x}
      L${y + P},${x}
      L${y + P},${x + T - j}
      Q${y + P},${x + T} ${y + P - j},${x + T}
      L${y + j},${x + T}`, ee = () => `M${y + j},${x + T}
      Q${y},${x + T} ${y},${x + T - j}
      L${y},${x + j}
      Q${y},${x} ${y + j},${x}
      L${y + P},${x}
      L${y + P},${x + T}
      L${y + j},${x + T}`, G = () => `M${y + j},${x + T}
      Q${y},${x + T} ${y},${x + T - j}
      L${y},${x + j}
      Q${y},${x} ${y + j},${x}
      L${y + P - j},${x}
      Q${y + P},${x} ${y + P},${x + j}
      L${y + P},${x + T - j}
      Q${y + P},${x + T} ${y + P - j},${x + T}
      L${y + j},${x + T}`, Z = () => `M${y},${x}
      L${y + P},${x}
      L${y + P},${x + T}
      L${y},${x + T}
      L${y},${x}`;
  let K;
  return n == null || !B || F == "axisBar" ? K = Z() : (K = Z(), (Y && n + 1 === ae || !Y) && (K = _ ? oe() : te()), !Y && n === -1 && (K = _ ? ee() : ne()), X === "full" && Y && n === 0 && ae > 1 && (K = _ ? ee() : ne()), X === "full" && (Y && n === 0 && ae === 1 || !Y) && (K = G())), /* @__PURE__ */ r.createElement(
    "path",
    {
      id: a,
      className: i,
      d: K,
      fill: l,
      stroke: d,
      strokeWidth: f,
      onMouseOver: b,
      onMouseLeave: A,
      onClick: w,
      "data-tooltip-html": O,
      "data-tooltip-id": k,
      style: {
        transition: "all 0.2s linear",
        ...h
      }
    }
  );
}
const mE = () => {
  var J, re;
  const [e, t] = se.useState(0), { xScale: n, yScale: a, seriesScale: i, xMax: l, yMax: d } = se.useContext(Ts), { transformedData: f, colorScale: u, seriesHighlight: m, config: y, formatNumber: x, formatDate: b, parseDate: A, setSharedFilter: w } = se.useContext(xt), { isHorizontal: O, barBorderWidth: k, applyRadius: h, hoveredBar: L, getAdditionalColumn: F, onMouseLeaveBar: P, onMouseOverBar: T, barStackedSeriesKeys: _ } = ws(), { orientation: B } = y, Y = (J = y.brush) != null && J.active && ((re = y.brush.data) != null && re.length) ? y.brush.data : f, X = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !O && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(qm, { data: Y, keys: _, x: (H) => H[y.runtime.xAxis.dataKey], xScale: n, yScale: a, color: u }, (H) => H.reverse().map(
    (ae) => ae.bars.map((j) => {
      let te = y.legend.behavior === "highlight" && m.length > 0 && m.indexOf(j.key) === -1, oe = y.legend.behavior === "highlight" || m.length === 0 || m.indexOf(j.key) !== -1, ne = X ? i.range()[1] - i.range()[0] : l / ae.bars.length;
      y.runtime.xAxis.type !== "date" && (ne = y.barThickness * ne);
      const ee = j.bar.data[y.runtime.xAxis.dataKey], G = X ? b(A(ee)) : ee, Z = x(j.bar ? j.bar.data[j.key] : 0, "left");
      if (!Z)
        return;
      const K = n(X ? A(ee) : ee) - (X ? ne / 2 : 0), V = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${G}` : G, we = F(L), Se = `${y.runtime.seriesLabels[j.key]}: ${Z}`, ce = `<ul>
                  <li class="tooltip-heading"">${V}</li>
                  <li class="tooltip-body ">${Se}</li>
                  <li class="tooltip-body ">${we}</li>
                    </li></ul>`;
      return t(ne), /* @__PURE__ */ r.createElement(at, { key: `${ae.index}--${j.index}--${B}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-stack-${ae.index}-${j.index}`, id: `barStack${ae.index}-${j.index}`, className: "stack vertical" }, Cs({
        config: y,
        seriesHighlight: m,
        index: ae.index,
        background: u(y.runtime.seriesLabels[j.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? k : 0}px`,
        width: ne,
        height: j.height,
        x: K,
        y: j.y,
        onMouseOver: () => T(G, j.key),
        onMouseLeave: P,
        tooltipHtml: ce,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Re) => {
          Re.preventDefault(), w && (j[y.xAxis.dataKey] = G, w(y.uid, j));
        },
        styleOverrides: {
          animationDelay: `${ae.index * 0.5}s`,
          transformOrigin: `${ne / 2}px ${j.y + j.height}px`,
          opacity: te ? 0.2 : 1,
          display: oe ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ r.createElement(Yf, { xScale: n, yMax: d, barWidth: e, totalBarsInGroup: 1 }));
}, yE = () => {
  const { yMax: e, yScale: t, xScale: n } = se.useContext(Ts), {
    animatedChart: a,
    colorScale: i,
    config: l,
    formatDate: d,
    formatNumber: f,
    getTextWidth: u,
    parseDate: m,
    seriesHighlight: y,
    setSharedFilter: x,
    transformedData: b
  } = se.useContext(xt), { barBorderWidth: A, displayNumbersOnBar: w, fontSize: O, getAdditionalColumn: k, hoveredBar: h, isHorizontal: L, isLabelBelowBar: F, onMouseLeaveBar: P, onMouseOverBar: T, updateBars: _, barStackedSeriesKeys: B } = ws(), { orientation: Y, visualizationSubType: X } = l;
  return l.visualizationSubType === "stacked" && L && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(F0, { data: b, keys: B, height: e, y: (J) => J[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (J) => J.map(
    (re) => _(re.bars).map((H, ae) => {
      const j = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(H.key) === -1, te = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(H.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const oe = Ko("#000", i(l.runtime.seriesLabels[H.key])), ne = f(b[H.index][H.key], "left"), ee = l.runtime.yAxis.type === "date" ? d(m(b[H.index][l.runtime.originalXAxis.dataKey])) : b[H.index][l.runtime.originalXAxis.dataKey], G = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${ee}` : ee, Z = u(ne, `normal ${O[l.fontSize]}px sans-serif`), K = k(h), V = `${l.runtime.seriesLabels[H.key]}: ${ne}`, we = `<ul>
                  <li class="tooltip-heading"">${G}</li>
                  <li class="tooltip-body ">${V}</li>
                  <li class="tooltip-body ">${K}</li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: ae, id: `barStack${re.index}-${H.index}`, className: "stack horizontal" }, Cs({
        config: l,
        seriesHighlight: y,
        index: re.index,
        className: `animated-chart group ${a ? "animated" : ""}`,
        background: i(l.runtime.seriesLabels[H.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? A : 0}px`,
        width: H.width,
        height: H.height,
        x: H.x,
        y: H.y,
        onMouseOver: () => T(ee, H.key),
        onMouseLeave: P,
        tooltipHtml: we,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (Se) => {
          Se.preventDefault(), x && (H[l.xAxis.dataKey] = ne, x(l.uid, H));
        },
        styleOverrides: {
          animationDelay: `${re.index * 0.5}s`,
          transformOrigin: `${H.x}px 0`,
          opacity: j ? 0.2 : 1,
          display: te ? "block" : "none"
        }
      }), Y === "horizontal" && X === "stacked" && F && re.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        St,
        {
          x: `${H.x + (l.isLollipopChart ? 15 : 5)}`,
          y: H.y + H.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        ee
      ), w && Z < H.width && /* @__PURE__ */ r.createElement(
        St,
        {
          display: te ? "block" : "none",
          x: H.x + re.bars[H.index].width / 2,
          y: H.y + H.height / 2,
          fill: oe,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ne
      )));
    })
  )));
}, Ty = ({ bar: e, defaultBarHeight: t, defaultBarWidth: n, config: a, isNumber: i, getTextWidth: l, barWidth: d, isVertical: f }) => {
  let m = t, y = n, x = "", b = !1, A = !1, w = !1;
  const O = a.general.showSuppressedSymbol;
  if (a.preliminaryData.forEach((L) => {
    (!L.column || L.column === e.key) && L.type === "suppression" && L.value && String(L.value) === String(e.value) && (!L.hideBarSymbol && O ? (m = d > 10 ? 3 : 0, y = 3, b = !0) : (m = 0, y = 0, b = !0));
  }), !b && !i(e.value) && a.general.showMissingDataLabel) {
    const F = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    A = !0, m = F ? 3 : 0, y = 3;
  }
  if (!b && String(e.value) === "0" && a.general.showZeroValueDataLabel) {
    const F = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    m = a.isLollipopChart ? 3 * 2 : !a.isLollipopChart && F ? 3 : 0, y = 3, w = !0;
  }
  return { barWidthHorizontal: y, barHeight: m, isSuppressed: b, showMissingDataLabel: A, showZeroValueDataLabel: w, getBarY: (L, F) => b || A || w ? a.isLollipopChart ? F - 3 * 2 : F - 3 : L, getAbsentDataLabel: (L) => {
    let F = "";
    String(L) === "0" && (F = ""), b && (F = ""), A && (F = "N/A"), w && (F = "0");
    const T = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    return a.isLollipopChart || T && f ? F : f ? "" : F;
  } };
}, ps = (e) => e == null ? void 0 : /^0(\.0)?$/.test(e.toString()), Pc = (e, t, n) => !!(e === "Line" && (t == null ? void 0 : t.length) < 3 && n), gE = () => {
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = se.useContext(Ts), [l, d] = se.useState(0), [f, u] = se.useState(0), {
    // prettier-ignore
    assignColorsToValues: m,
    barBorderWidth: y,
    getAdditionalColumn: x,
    getHighlightedBarByValue: b,
    getHighlightedBarColorByValue: A,
    lollipopBarWidth: w,
    lollipopShapeSize: O,
    onMouseLeaveBar: k,
    onMouseOverBar: h,
    section: L
  } = ws(), { colorScale: F, config: P, dashboardConfig: T, tableData: _, formatDate: B, formatNumber: Y, getXAxisData: X, getYAxisData: J, isNumber: re, parseDate: H, seriesHighlight: ae, setSharedFilter: j, transformedData: te, brushConfig: oe, getTextWidth: ne } = se.useContext(xt), { HighLightedBarUtils: ee } = Tc(P);
  let G = te;
  return P.preliminaryData.some((K) => K.value && K.type === "suppression") && (G = _), oe.data.length && (G = oe.data), P.visualizationSubType !== "stacked" && (P.visualizationType === "Bar" || P.visualizationType === "Combo" || Pc(P.visualizationType, G, P.allowLineToBarGraph)) && P.orientation === "vertical" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    Km,
    {
      data: G,
      keys: P.runtime.barSeriesKeys || P.runtime.seriesKeys,
      height: a,
      x0: (K) => {
        const V = K[P.runtime.originalXAxis.dataKey];
        return En(P.runtime.xAxis) ? H(V) : V;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (K) => K.map((V, we) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${V.index}-${V.x0}--${we} ${P.orientation}`, key: `bar-group-${V.index}-${V.x0}--${we}`, id: `bar-group-${V.index}-${V.x0}--${we}`, left: V.x0 }, V.bars.map((Se, ce) => {
      const Re = P.yAxis.type === "logarithmic" ? 0.1 : 0;
      let je = P.highlightedBarValues.map((Et) => Et.value).filter((Et) => Et !== void 0);
      je = P.xAxis.type === "date" ? ee.formatDates(je) : je;
      const Je = P.legend.behavior === "highlight" && ae.length > 0 && ae.indexOf(Se.key) === -1, Oe = P.legend.behavior === "highlight" || ae.length === 0 || ae.indexOf(Se.key) !== -1;
      let he = i.range()[1] - i.range()[0];
      const Fe = Math.abs(t(Se.value) - t(Re)), le = Se.value >= 0 && re(Se.value) ? Se.y : t(0);
      let ue = P.isLollipopChart ? w : i.bandwidth(), Ae = Se.x + (P.isLollipopChart ? (he / V.bars.length - w) / 2 : 0) - (P.xAxis.type === "date-time" ? he / 2 : 0);
      d(ue), u(V.bars.length);
      const $e = Y(/[a-zA-Z]/.test(String(Se.value)) ? "" : Se.value, "left"), De = P.runtime[L].type === "date" ? B(H(G[V.index][P.runtime.originalXAxis.dataKey])) : G[V.index][P.runtime.originalXAxis.dataKey], Ze = Se.value < 0 ? -1 : ce, qe = x(Se.key, G[V.index][P.runtime.originalXAxis.dataKey]);
      let yt = P.runtime.xAxis.label ? `${P.runtime.xAxis.label}: ${De}` : De;
      const nt = `${P.runtime.seriesLabels[Se.key]}: ${$e}`, Ve = `<ul>
                  <li class="tooltip-heading">${yt}</li>
                  <li class="tooltip-body ">${nt}</li>
                  ${qe ? '<li class="tooltip-body ">' + qe + "</li>" : ""}
                    </li></ul>`;
      let ze = "#000000";
      ze = ee.checkFontColor($e, je, ze);
      let Te = P.runtime.seriesLabels && P.runtime.seriesLabels[Se.key] ? F(P.runtime.seriesLabels[Se.key]) : F(Se.key);
      Te = m(K.length, V.index, Te);
      const Ye = P.isLollipopChart && P.lollipopColorStyle === "regular", Qe = P.isLollipopChart && P.lollipopColorStyle === "two-tone", ft = je == null ? void 0 : je.includes(De), bt = A(De), gt = b(De), Mt = ft ? bt : P.barHasBorder === "true" ? "#000" : "transparent", Zt = ft ? gt.borderWidth : P.isLollipopChart ? 0 : P.barHasBorder === "true" ? y : 0, { barHeight: an, isSuppressed: Ut, getBarY: Qt, getAbsentDataLabel: zt } = Ty({ bar: Se, defaultBarHeight: Fe, config: P, isNumber: re, getTextWidth: ne, barWidth: ue, isVertical: !0, yAxisValue: $e }), un = zt($e), At = Ut || !P.labels ? "" : $e, Rt = Qt(le, t(Re)), kn = ps(Se.value) ? "none" : "block", Ie = (Et, vn) => {
        var Xt;
        let lt = Et, on = vn || "#f2f2f2";
        if (T && ((Xt = T.dashboard.sharedFilters) == null ? void 0 : Xt.length) !== 0) {
          const { sharedFilters: $t } = T.dashboard;
          return lt = $t ? $t.map((Jt) => Jt.setBy === P.uid ? Jt.resetLabel === Jt.active || Jt.active === te[V.index][P.xAxis.dataKey] ? F(P.runtime.seriesLabels[Se.key]) : on : F(P.runtime.seriesLabels[Se.key]))[0] : F(P.runtime.seriesLabels[Se.key]), Ye && (lt = Et), Qe && (lt = Ma(Et).brighten(1)), ft && (lt = "transparent"), lt;
        }
        return Qe && (lt = Ma(Et).brighten(1)), ft && (lt = "transparent"), lt;
      };
      return /* @__PURE__ */ r.createElement(at, { key: `${V.index}--${ce}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${V.index}-${V.x0}-${Rt}--${ce}` }, Cs({
        config: P,
        index: Ze,
        id: `barGroup${V.index}`,
        background: Ie(F(P.runtime.seriesLabels[Se.key])),
        borderColor: Mt,
        borderStyle: "solid",
        borderWidth: `${Zt}px`,
        width: ue,
        height: an,
        x: Ae,
        y: Rt,
        onMouseOver: () => h(De, Se.key),
        onMouseLeave: k,
        tooltipHtml: Ve,
        tooltipId: `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
        onClick: (Et) => {
          Et.preventDefault(), j && (Se[P.xAxis.dataKey] = De, j(P.uid, Se));
        },
        styleOverrides: {
          transformOrigin: `0 ${Rt + an}px`,
          opacity: Je ? 0.2 : 1,
          display: Oe ? "block" : "none",
          cursor: T ? "pointer" : "default"
        }
      }), P.preliminaryData.map((Et, vn) => {
        const lt = !Et.column || Et.column === Se.key;
        if (!(String(Et.value) === String(Se.value) && Et.value !== "" && lt) || ue < 10 || !P.general.showSuppressedSymbol || Et.hideBarSymbol)
          return;
        const $t = String(Et.symbol).includes("Asterisk"), Jt = $t ? -5 : -8, wn = $t ? "middle" : "end", Tn = Et.symbol === "Asterisk" ? ue * 1.2 : Et.symbol === "Double Asterisk" ? ue : ue / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: vn,
            dy: Jt,
            display: Oe ? "block" : "none",
            opacity: Je ? 0.5 : 1,
            x: Ae + ue / 2,
            y: Rt,
            verticalAnchor: wn,
            fill: ze,
            textAnchor: "middle",
            fontSize: `${Tn}px`
          },
          Et.iconCode
        );
      }), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Oe ? "block" : "none",
          opacity: Je ? 0.5 : 1,
          x: Ae + ue / 2,
          y: Rt - 5,
          fill: ze,
          textAnchor: "middle"
        },
        ps(Se.value) ? "" : At
      ), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Oe ? "block" : "none",
          opacity: Je ? 0.5 : 1,
          x: Ae + ue / 2,
          y: Rt - 5,
          fill: ze,
          textAnchor: "middle",
          fontSize: P.isLollipopChart ? null : ue / 2
        },
        un
      ), P.isLollipopChart && P.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: kn,
          cx: Ae + O / 3.5,
          cy: Se.y,
          r: O / 2,
          fill: Te,
          key: `circle--${Se.index}`,
          "data-tooltip-html": Ve,
          "data-tooltip-id": `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), P.isLollipopChart && P.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: kn,
          x: Ae - w / 2,
          y: Rt,
          width: O,
          height: O,
          fill: Te,
          key: `circle--${Se.index}`,
          "data-tooltip-html": Ve,
          "data-tooltip-id": `cdc-open-viz-tooltip-${P.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${O}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(P.confidenceKeys).length > 0 ? G.map((K) => {
    let V, we, Se, ce, Re = 5;
    return V = e(X(K)) + (P.xAxis.type !== "date-time" ? i.range()[1] / 2 : 0), Se = t(J(K, P.confidenceKeys.lower)), ce = t(J(K, P.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${we}-${K[P.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${V - Re} ${Se}
                    L${V + Re} ${Se}
                    M${V} ${Se}
                    L${V} ${ce}
                    M${V - Re} ${ce}
                    L${V + Re} ${ce}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(Yf, { xScale: e, yMax: a, barWidth: l, totalBarsInGroup: f }));
}, vE = () => {
  var ee;
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = se.useContext(Ts), { transformedData: i, tableData: l, colorScale: d, seriesHighlight: f, config: u, formatNumber: m, formatDate: y, parseDate: x, setSharedFilter: b, isNumber: A, getTextWidth: w, getYAxisData: O, getXAxisData: k } = se.useContext(xt), { isHorizontal: h, barBorderWidth: L, updateBars: F, assignColorsToValues: P, section: T, fontSize: _, isLabelBelowBar: B, displayNumbersOnBar: Y, lollipopBarWidth: X, lollipopShapeSize: J, getHighlightedBarColorByValue: re, getHighlightedBarByValue: H, getAdditionalColumn: ae, hoveredBar: j, onMouseLeaveBar: te, onMouseOverBar: oe } = ws(), { HighLightedBarUtils: ne } = Tc(u);
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
    Km,
    {
      data: (ee = u.preliminaryData) != null && ee.some((G) => G.value && G.type === "suppression") ? l : i,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: n,
      x0: (G) => G[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (G) => F(G).map((Z, K) => /* @__PURE__ */ r.createElement(at, { className: `bar-group-${Z.index}-${Z.x0}--${K} ${u.orientation}`, key: `bar-group-${Z.index}-${Z.x0}--${K}`, id: `bar-group-${Z.index}-${Z.x0}--${K}`, top: Z.y }, Z.bars.map((V, we) => {
      var Xt;
      const Se = u.yAxis.type === "logarithmic" ? 0.1 : 0;
      let ce = u.highlightedBarValues.map(($t) => $t.value).filter(($t) => $t !== void 0);
      ce = u.xAxis.type === "date" ? ne.formatDates(ce) : ce;
      let Re = u.legend.behavior === "highlight" && f.length > 0 && f.indexOf(V.key) === -1, je = u.legend.behavior === "highlight" || f.length === 0 || f.indexOf(V.key) !== -1, Je = u.barHeight, Oe = parseInt(u.isLollipopChart ? X : Je);
      isNaN(Oe) && (Oe = 25);
      let he = V.value >= 0 && A(V.value) ? V.y : t(Se);
      const Fe = Math.abs(e(V.value) - e(Se)), le = V.value >= 0 && A(V.value), { barWidthHorizontal: ue, isSuppressed: Ae, getAbsentDataLabel: $e } = Ty({ bar: V, defaultBarWidth: Fe, config: u, isNumber: A, getTextWidth: w, isVertical: !1 }), De = V.value < 0 ? Math.abs(e(V.value)) : e(Se), Ze = m(V.value, "left"), qe = u.runtime[T].type === "date" ? y(x(i[Z.index][u.runtime.originalXAxis.dataKey])) : i[Z.index][u.runtime.originalXAxis.dataKey], yt = le ? "above" : "below", nt = $e(Ze), Ve = u.yAxis.displayNumbersOnBar ? Ze : "", ze = w(Ve, `normal ${_[u.fontSize]}px sans-serif`), Te = Number(ze) < Fe - 5;
      let Ye = Te ? "end" : "start", Qe = "start", ft = Te ? -5 : 5, bt = 10;
      yt === "below" && (Ye = Te ? "start" : "end", ft = Te ? 5 : -5, u.isLollipopChart && (Qe = "end", bt = -10));
      const gt = V.value < 0 ? -1 : we;
      let Mt = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${qe}` : qe;
      const Zt = ae(j), an = `${u.runtime.seriesLabels[V.key]}: ${Ze}`, Ut = `<ul>
                  <li class="tooltip-heading"">${Mt}</li>
                  <li class="tooltip-body ">${an}</li>
                  <li class="tooltip-body ">${Zt}</li>
                    </li></ul>`;
      let Qt = "#000000";
      Qt = ne.checkFontColor(Ze, ce, Qt);
      let zt = u.runtime.seriesLabels && u.runtime.seriesLabels[V.key] ? d(u.runtime.seriesLabels[V.key]) : d(V.key);
      zt = P(G.length, Z.index, zt);
      const un = u.isLollipopChart && u.lollipopColorStyle === "regular", At = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Rt = ce == null ? void 0 : ce.includes(qe), kn = re(qe), Ie = H(qe), Et = Rt ? kn : u.barHasBorder === "true" ? "#000" : "transparent", vn = Rt ? Ie.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? L : 0, lt = ps(V.value) ? "none" : "block";
      zt && Qt && Te && (Qt = Ko("#000", zt));
      const on = () => un ? zt : At ? Ma(zt).brighten(1) : Rt ? "transparent" : zt;
      return /* @__PURE__ */ r.createElement(at, { key: `${Z.index}--${we}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-sub-group-${Z.index}-${Z.x0}-${he}--${we}` }, Cs({
        config: u,
        index: gt,
        id: `barGroup${Z.index}`,
        background: on(),
        borderColor: Et,
        borderStyle: "solid",
        borderWidth: `${vn}px`,
        width: ue,
        height: Oe,
        x: De,
        y: Je * V.index,
        onMouseOver: () => oe(qe, V.key),
        onMouseLeave: te,
        tooltipHtml: Ut,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: ($t) => {
          $t.preventDefault(), b && (V[u.xAxis.dataKey] = Ze, b(u.uid, V));
        },
        styleOverrides: {
          transformOrigin: `0 ${he + Je}px`,
          opacity: Re ? 0.2 : 1,
          display: je ? "block" : "none"
        }
      }), (Xt = u.preliminaryData) == null ? void 0 : Xt.map(($t, Jt) => {
        const wn = !$t.column || $t.column === V.key;
        if (!(String($t.value) === String(V.value) && $t.value !== "" && wn) || $t.hideBarSymbol || !u.general.showSuppressedSymbol)
          return;
        const bn = String($t.symbol).includes("Asterisk") ? "middle" : "end", Bn = $t.symbol === "Asterisk" ? Je * 1.2 : $t.symbol === "Double Asterisk" ? Je : Je / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: Jt,
            fontSize: Bn,
            display: je ? "block" : "none",
            opacity: Re ? 0.5 : 1,
            x: De,
            y: u.barHeight / 2 + u.barHeight * V.index,
            fill: "#000",
            dy: u.barHeight / 5,
            dx: 10,
            textAnchor: "start",
            verticalAnchor: bn
          },
          $t.iconCode
        );
      }), !u.isLollipopChart && /* @__PURE__ */ r.createElement(
        St,
        {
          display: je ? "block" : "none",
          x: V.y,
          opacity: Re ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * V.index,
          fill: Qt,
          dx: ft,
          verticalAnchor: "middle",
          textAnchor: Ye
        },
        ps(V.value) ? "" : Ve
      ), /* @__PURE__ */ r.createElement(
        St,
        {
          display: je ? "block" : "none",
          x: V.y,
          opacity: Re ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * V.index,
          fill: Qt,
          dx: nt === "N/A" ? 20 : ft,
          dy: u.isLollipopChart ? -10 : 0,
          verticalAnchor: "middle",
          textAnchor: nt === "N/A" ? "middle" : Ye
        },
        nt
      ), u.isLollipopChart && /* @__PURE__ */ r.createElement(
        St,
        {
          display: je ? "block" : "none",
          x: V.y,
          y: 0,
          fill: "#000000",
          dx: bt,
          textAnchor: Qe,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        ps(V.value) ? "" : Ve
      ), B && !u.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: u.yAxis.hideAxis ? 0 : 5, y: Z.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? y(x(i[Z.index][u.runtime.originalXAxis.dataKey])) : h ? i[Z.index][u.runtime.originalXAxis.dataKey] : m(i[Z.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: lt,
          cx: V.y,
          cy: Je * V.index + X / 2,
          r: J / 2,
          fill: zt,
          key: `circle--${V.index}`,
          "data-tooltip-html": Ut,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: lt,
          x: V.y > 10 ? V.y - J / 2 : 0,
          y: 0 - X / 2,
          width: J,
          height: J,
          fill: zt,
          key: `circle--${V.index}`,
          "data-tooltip-html": Ut,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${J}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? i.map((G) => {
    let Z, K, V, we = 5;
    return Z = t(k(G)) - 0.75 * u.barHeight, K = e(O(G, u.confidenceKeys.upper)), V = e(O(G, u.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${Z}-${G[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${V} ${Z - we}
                    L${V} ${Z + we}
                    M${V} ${Z}
                    L${K} ${Z}
                    M${K} ${Z - we}
                    L${K} ${Z + we} `
      }
    );
  }) : "");
}, _u = {
  Vertical: gE,
  Horizontal: vE,
  StackedVertical: mE,
  StackedHorizontal: yE
}, xE = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, handleTooltipClick: f }) => {
  const { transformedData: u, config: m } = se.useContext(xt), y = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Or, { component: "BarChart" }, /* @__PURE__ */ r.createElement(Ts.Provider, { value: y }, /* @__PURE__ */ r.createElement(at, { left: parseFloat(m.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(_u.StackedVertical, null), /* @__PURE__ */ r.createElement(_u.StackedHorizontal, null), /* @__PURE__ */ r.createElement(_u.Vertical, null), /* @__PURE__ */ r.createElement(_u.Horizontal, null), /* @__PURE__ */ r.createElement(wr, { key: "bars", display: m.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (x) => l(x, u), onMouseOut: d, onClick: (x) => f(x, u) }))));
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
function Li(e) {
  var t = e.x1, n = e.x2, a = e.y1, i = e.y2;
  return {
    x1: a,
    x2: i,
    y1: t,
    y2: n
  };
}
function Cy(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, l = e.className, d = e.max, f = e.min, u = e.firstQuartile, m = e.thirdQuartile, y = e.median, x = e.boxWidth, b = x === void 0 ? 10 : x, A = e.fill, w = e.fillOpacity, O = e.stroke, k = e.strokeWidth, h = e.rx, L = h === void 0 ? 2 : h, F = e.ry, P = F === void 0 ? 2 : F, T = e.valueScale, _ = e.outliers, B = _ === void 0 ? [] : _, Y = e.horizontal, X = e.medianProps, J = X === void 0 ? {} : X, re = e.maxProps, H = re === void 0 ? {} : re, ae = e.minProps, j = ae === void 0 ? {} : ae, te = e.boxProps, oe = te === void 0 ? {} : te, ne = e.outlierProps, ee = ne === void 0 ? {} : ne, G = e.container, Z = G === void 0 ? !1 : G, K = e.containerProps, V = K === void 0 ? {} : K, we = e.children, Se = Y ? i : n, ce = Se + (b || 0) / 2, Re = T.range(), je = T(f ?? 0), Je = T(u ?? 0), Oe = T(y ?? 0), he = T(m ?? 0), Fe = T(d ?? 0), le = {
    valueRange: Re,
    center: ce,
    offset: Se,
    boxWidth: b,
    max: {
      x1: ce - (b || 0) / 4,
      x2: ce + (b || 0) / 4,
      y1: Fe,
      y2: Fe
    },
    maxToThird: {
      x1: ce,
      x2: ce,
      y1: Fe,
      y2: he
    },
    median: {
      x1: Se,
      x2: Se + (b || 0),
      y1: Oe,
      y2: Oe
    },
    minToFirst: {
      x1: ce,
      x2: ce,
      y1: Je,
      y2: je
    },
    min: {
      x1: ce - (b || 0) / 4,
      x2: ce + (b || 0) / 4,
      y1: je,
      y2: je
    },
    box: {
      x1: Se,
      x2: b || 0,
      y1: he,
      y2: Math.abs(he - Je)
    },
    container: {
      x1: Se,
      x2: b || 0,
      y1: Math.min.apply(Math, Re),
      y2: Math.abs(Re[0] - Re[1])
    }
  };
  return Y && (le.max = Li(le.max), le.maxToThird = Li(le.maxToThird), le.box.y1 = Je, le.box = Li(le.box), le.median = Li(le.median), le.minToFirst = Li(le.minToFirst), le.min = Li(le.min), le.container = Li(le.container), le.container.y1 = Math.min.apply(Math, Re)), we ? /* @__PURE__ */ r.createElement(r.Fragment, null, we(le)) : /* @__PURE__ */ r.createElement(at, {
    className: Cn("visx-boxplot", l)
  }, B.map(function(ue, Ae) {
    var $e = Y ? T(ue) : ce, De = Y ? ce : T(ue);
    return /* @__PURE__ */ r.createElement("circle", Na({
      key: "visx-boxplot-outlier-" + Ae,
      className: "visx-boxplot-outlier",
      cx: $e,
      cy: De,
      r: 4,
      stroke: O,
      strokeWidth: k,
      fill: A,
      fillOpacity: w
    }, ee));
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-max",
    x1: le.max.x1,
    y1: le.max.y1,
    x2: le.max.x2,
    y2: le.max.y2,
    stroke: O,
    strokeWidth: k
  }, H)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: le.maxToThird.x1,
    y1: le.maxToThird.y1,
    x2: le.maxToThird.x2,
    y2: le.maxToThird.y2,
    stroke: O,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("rect", Na({
    className: "visx-boxplot-box",
    x: le.box.x1,
    y: le.box.y1,
    width: le.box.x2,
    height: le.box.y2,
    stroke: O,
    strokeWidth: k,
    fill: A,
    fillOpacity: w,
    rx: L,
    ry: P
  }, oe)), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-median",
    x1: le.median.x1,
    y1: le.median.y1,
    x2: le.median.x2,
    y2: le.median.y2,
    stroke: O,
    strokeWidth: k
  }, J)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: le.minToFirst.x1,
    y1: le.minToFirst.y1,
    x2: le.minToFirst.x2,
    y2: le.minToFirst.y2,
    stroke: O,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-min",
    x1: le.min.x1,
    y1: le.min.y1,
    x2: le.min.x2,
    y2: le.min.y2,
    stroke: O,
    strokeWidth: k
  }, j)), Z && /* @__PURE__ */ r.createElement("rect", Na({
    x: le.container.x1,
    y: le.container.y1,
    width: le.container.x2,
    height: le.container.y2,
    fillOpacity: "0"
  }, V)));
}
Cy.propTypes = {
  max: We.number,
  min: We.number,
  firstQuartile: We.number,
  thirdQuartile: We.number,
  median: We.number,
  boxWidth: We.number,
  fill: We.string,
  fillOpacity: We.oneOfType([We.number, We.string]),
  stroke: We.string,
  strokeWidth: We.oneOfType([We.number, We.string]),
  rx: We.number,
  ry: We.number,
  outliers: We.arrayOf(We.number),
  container: We.bool,
  children: We.func
};
const bE = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = se.useContext(xt), { boxplot: i } = n;
  se.useEffect(() => {
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
    `, f = (k) => Number(k.columnMax), u = (k) => Number(k.columnMin), m = (k) => Number(k.columnMedian), y = (k) => Number(k.columnThirdQuartile), x = (k) => Number(k.columnFirstQuartile), b = 0.5, A = e.bandwidth(), w = Math.min(40, A), O = or[n == null ? void 0 : n.palette][0] ? or[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Or, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(at, { className: "boxplot", key: "boxplot-group" }, i.plots.map((k, h) => {
    const L = A - w, F = 4;
    return /* @__PURE__ */ r.createElement(at, { key: `boxplotplot-${h}` }, i.plotNonOutlierValues && k.nonOutlierValues.map((P, T) => /* @__PURE__ */ r.createElement("circle", { cx: e(k.columnCategory) + Number(n.yAxis.size) + A / 2, cy: t(P), r: F, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${h}--circle-${T}` })), /* @__PURE__ */ r.createElement(
      Cy,
      {
        "data-left": e(k.columnCategory) + n.yAxis.size + L / 2 + 0.5,
        key: `box-plot-${h}`,
        min: u(k),
        max: f(k),
        left: Number(e(k.columnCategory)) + Number(n.yAxis.size) + L / 2 + 0.5,
        firstQuartile: x(k),
        thirdQuartile: y(k),
        median: m(k),
        boxWidth: w,
        fill: O,
        fillOpacity: b,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? k.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${O}`,
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
}, SE = ({ xScale: e, yScale: t }) => {
  const { transformedData: n, config: a, tableData: i, formatNumber: l, seriesHighlight: d, colorPalettes: f } = se.useContext(xt), u = 4.5, m = Object.keys(a.runtime.seriesLabels).length > 1, y = Object.entries(a.columns).filter(([b, A]) => A.tooltips).map(([b, A]) => [
    A.label || A.name,
    A.name,
    {
      addColPrefix: A.prefix,
      addColSuffix: A.suffix,
      addColRoundTo: A.roundToPlace,
      addColCommas: A.commas
    }
  ]), x = (b, A, w) => `<div>
    ${a.legend.showLegendValuesTooltip && a.runtime.seriesLabels && m ? `${a.runtime.seriesLabels[A] || ""}<br/>` : ""}
    ${a.xAxis.label}: ${l(b[a.xAxis.dataKey], "bottom")} <br/>
    ${a.yAxis.label}: ${l(b[A], "left")}<br/>
   ${y.map(([O, k, h]) => `${O} : ${Ef(i[w][k], "left", !1, a, h)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ r.createElement(at, { className: "scatter-plot", left: a.yAxis.size }, n.map((b, A) => a.runtime.seriesKeys.map((w, O) => {
    const k = a.legend.behavior === "highlight" && d.length > 0 && d.indexOf(w) === -1, h = a.legend.behavior === "highlight" || d.length === 0 || d.indexOf(w) !== -1, L = a.palette ? f[a.palette][O] : "#000";
    let F = {
      filter: "unset",
      opacity: 1,
      stroke: h ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${A}-${O}`,
        r: u,
        cx: e(b[a.xAxis.dataKey]),
        cy: t(b[w]),
        fill: h ? L : "transparent",
        fillOpacity: k ? 0.25 : 1,
        style: F,
        "data-tooltip-html": x(b, w, A),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function EE({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: l, getTextWidth: d, updateConfig: f, parseDate: u, formatDate: m, currentViewport: y } = se.useContext(xt), { barStyle: x, tipRounding: b, roundingStyle: A, twoColor: w } = a, O = se.useRef([]), [k, h] = se.useState(window.innerWidth), L = A === "standard" ? "8px" : A === "shallow" ? "5px" : A === "finger" ? "15px" : "0px", F = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const P = Number(a.xAxis.target), T = a.series[0].dataKey, _ = Number(t.domain()[1]), Y = n.some((G) => G[T] < 0) || P > 0 || t.domain()[0] < 0, X = a.barHasBorder === "true" ? 1 : 0, J = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, re = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, H = Math.max(t(0), Math.min(t(P), t(_))), ae = (G) => {
    if (G == null || x !== "rounded")
      return;
    let Z = {};
    return G === "left" && (Z = { borderRadius: `${L} 0 0 ${L}` }), G === "right" && (Z = { borderRadius: `0 ${L} ${L} 0` }), b === "full" && (Z = { borderRadius: L }), Z;
  }, j = {
    calculate: function() {
      const Z = n[0][T] < P ? "left" : "right", K = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, V = d(K, `bold ${F[a.fontSize]}px sans-serif`);
      let we = a.isLollipopChart ? J / 2 : Number(a.barHeight) / 2, Se = 0, ce = 0, Re = !1;
      Z === "right" && (Se = -10, Re = V - Se < H, ce = H - V), Z === "left" && (Se = 10, Re = t(_) - H > V + Se, ce = H), this.text = K, this.y = we, this.x = ce, this.padding = Se, this.showLabel = a.xAxis.showTargetLabel ? Re : !1;
    }
  };
  j.calculate();
  const te = se.useRef(null), oe = Vf(te, {});
  se.useEffect(() => {
    const G = () => {
      var Z;
      h(window.innerWidth), (Z = O.current) == null || Z.forEach((K) => {
        !K || !K.style || (K.style.transition = "none", K.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", G), () => {
      window.removeEventListener("resize", G);
    };
  }, []);
  const [ne, ee] = se.useState(!1);
  return se.useEffect(() => {
    oe != null && oe.isIntersecting && setTimeout(() => {
      ee(!0);
    }, 100);
  }, [oe == null ? void 0 : oe.isIntersecting, a.animate]), se.useEffect(() => {
    var G;
    (G = O.current) == null || G.forEach((Z, K) => {
      if (!(!Z || !Z.style)) {
        if (a.animate) {
          const V = P / _ * 100;
          Z.style.opacity = "0", Z.style.transform = `translate(${V / 1.07}%) scale(0, 1)`, setTimeout(() => {
            Z.style.opacity = "1", Z.style.transform = "translate(0) scale(1)", Z.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          Z.style.transition = "none", Z.style.opacity = "0";
        a.animate || (Z.style.transition = "none", Z.style.opacity = "1");
      }
    });
  }, [a.animate, a, ne]), /* @__PURE__ */ r.createElement(Or, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(at, { left: Number(a.xAxis.size) }, n.map((G, Z) => {
    const K = Number(G[T]), V = a.isLollipopChart ? J : Number(a.barHeight), we = Number(a.barSpace), Se = Math.abs(t(K) - H), ce = t(K), Re = K > P ? H : ce, je = K < P ? "left" : "right";
    let Je = 0;
    Je = Z !== 0 ? (we + V + X) * Z : Je;
    const Oe = (we + V + X) * n.length;
    a.heights.horizontal = Oe;
    const Fe = d(i(K, "left"), `normal ${F[a.fontSize]}px sans-serif`) < Se - 6, le = ce, ue = Je + V / 2, Ae = ce, $e = Je + V / 2, De = ce, Ze = Je - V / 2, qe = ae(je), [yt, nt] = l[w.palette], Ve = { left: yt, right: nt }, ze = Ko("#000", Ve[je]);
    let Te = kE(a.isLollipopChart, Fe, re, ze);
    const Ye = i(K, "left"), Qe = a.runtime.yAxis.type === "date" ? m(u(n[Z][a.runtime.originalXAxis.dataKey])) : n[Z][a.runtime.originalXAxis.dataKey];
    let ft = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Qe}` : Qe, bt = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${Ye}` : Ye;
    const gt = `<div>
          ${ft}<br />
          ${bt}
            </div>`;
    return /* @__PURE__ */ r.createElement(at, { key: `deviation-bar-${a.orientation}-${T}-${Z}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (Mt) => {
          O.current[Z] = Mt;
        },
        x: Re,
        y: Je,
        width: Se,
        height: V,
        "data-tooltip-html": gt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: Se, height: V, border: `${X}px solid #333`, backgroundColor: Ve[je], ...qe } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(St, { verticalAnchor: "middle", x: le, y: ue, ...Te[je] }, i(G[T], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: Ae, cy: $e, r: re / 2, fill: Ve[je], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: De, y: Ze, width: re, height: re, fill: Ve[je], style: { opacity: 1, filter: "unset" } }));
  }), j.showLabel && /* @__PURE__ */ r.createElement(St, { fontWeight: "bold", dx: j.padding, verticalAnchor: "middle", x: j.x, y: j.y }, j.text), Y && /* @__PURE__ */ r.createElement(tn, { from: { x: H, y: 0 }, to: { x: H, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: te }));
}
function kE(e, t, n, a) {
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
const wE = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l }) => {
  var w;
  const { transformedData: d, rawData: f, config: u, seriesHighlight: m } = se.useContext(xt), { xAxis: y, yAxis: x, legend: b, runtime: A } = u;
  return d && /* @__PURE__ */ r.createElement(Or, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(at, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(x.size) }, (w = A.forecastingSeriesKeys) == null ? void 0 : w.map((O, k) => !O || !O.stages ? !1 : O.stages.map((h, L) => {
    var B;
    const { behavior: F } = b, P = f.filter((Y) => Y[O.stageColumn] === h.key);
    let T = F === "highlight" && m.length > 0 && m.indexOf(h.key) === -1, _ = F === "highlight" || m.length === 0 || m.indexOf(h.key) !== -1;
    return /* @__PURE__ */ r.createElement(at, { className: `forecasting-areas-combo-${k}`, key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}-${k}` }, (B = O.confidenceIntervals) == null ? void 0 : B.map((Y, X) => {
      const J = Wu[h.color] || or[h.color] || !1, re = () => _ && J[2] ? J[2] : "transparent", H = () => _ && J[1] ? J[1] : "transparent";
      if (!(Y.high === "" || Y.low === ""))
        return /* @__PURE__ */ r.createElement(at, { key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}--group-${L}-${X}` }, /* @__PURE__ */ r.createElement(
          x0,
          {
            curve: $u,
            data: P,
            fill: re(),
            opacity: T ? 0.1 : 0.5,
            x: (ae) => e(Date.parse(ae[y.dataKey])),
            y0: (ae) => t(ae[Y.low]),
            y1: (ae) => t(ae[Y.high])
          }
        ), X === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nr, { data: P, x: (ae) => Number(e(Date.parse(ae[y.dataKey]))), y: (ae) => Number(t(ae[Y.high])), curve: $u, stroke: H(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Nr, { data: P, x: (ae) => Number(e(Date.parse(ae[y.dataKey]))), y: (ae) => Number(t(ae[Y.low])), curve: $u, stroke: H(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(at, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(wr, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (O) => i(O, d), onMouseOut: l }))));
};
function Bu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Rc(e, t) {
  const n = e.series.every(({ type: b }) => b === "Bar"), a = e.series.every(({ type: b }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(b)), i = (b) => (A) => b.reduce((w, O) => isNaN(Number(A[O])) ? w : w + Number(A[O]), 0), l = () => {
    let b = Math.max(...t.map((A) => Math.max(...e.runtime.seriesKeys.map((w) => Bu(A[w]) ? Number(u(A[w])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const A = t.map(i(e.runtime.seriesKeys)).filter((w) => !isNaN(w));
      b = Math.max(...A);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const A = t.map(i(e.runtime.seriesKeys));
      b = Math.max(...A);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (b = Math.max(...t.map((A) => Bu(A[e.series.dataKey]) ? Number(u(A[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const A = t.map(i(e.runtime.barSeriesKeys)), w = Math.max(...t.map((k) => Math.max(...e.runtime.lineSeriesKeys.map((h) => Number(u(k[h])))))), O = Math.max(...A);
      b = Math.max(O, w);
    }
    return b;
  }, d = () => {
    const b = Math.min(...t.map((A) => Math.min(...e.runtime.seriesKeys.map((w) => Bu(A[w]) ? Number(u(A[w])) : 1 / 0))));
    return String(b);
  }, f = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((b) => t.some((A) => A[b] >= 0)) : !1, u = (b) => b === null || b === "" ? "" : typeof b == "string" ? b.replace(/[,$]/g, "") : b, m = Number(l()), y = Number(d()), x = f();
  return { minValue: y, maxValue: m, existPositiveValue: x, isAllLine: a };
}
function Xf({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var b, A, w, O;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((k) => k.axis === "Right").map((k) => k.dataKey);
  let { minValue: d } = Rc(e, n);
  const f = (k) => {
    if (!k)
      return [0];
    let h = [];
    return k.map((L, F) => h = [...h, ...n.map((P) => Number(P[L]))]), h;
  };
  let u = Math.max.apply(null, f(l));
  e.yAxis.rightMax > u && (u = e.yAxis.rightMax), e.yAxis.rightMin < d && (d = e.yAxis.rightMin);
  const m = ((A = (b = e.runtime) == null ? void 0 : b.barSeriesKeys) == null ? void 0 : A.length) > 0, y = ((O = (w = e.runtime) == null ? void 0 : w.lineSeriesKeys) == null ? void 0 : O.length) > 0;
  return (m || y) && d > 0 && (d = 0), { yScaleRight: Fn({
    domain: [d, u],
    range: [t, 0]
  }), hasRightAxis: i };
}
const TE = (e) => {
  const { preliminaryData: t, data: n, stroke: a, strokeWidth: i, handleLineType: l, lineType: d, seriesKey: f } = e, u = t.filter((b) => b.seriesKey && b.column && b.value && b.type && b.style && b.type === "effect"), m = (b) => u.find((A) => A.seriesKey === f && b[A.column] === A.value && A.type === "effect" && A.style !== "Open Circles");
  let y = [];
  const x = (b) => ({
    stroke: a,
    strokeWidth: i,
    strokeDasharray: b
  });
  return n.forEach((b, A) => {
    let w = m(b), O = x(l(w ? w.style : d));
    y.push(O), w && A > 0 && (y[A - 1] = x(l(w.style)));
  }), y;
}, CE = (e, t, n) => {
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
}, vc = (e) => !isNaN(parseFloat(e)) && isFinite(e), AE = (e, t, n) => {
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
    for (; u < e.length && !vc(e[u][t]); )
      u++;
    u < e.length && a.data.push(e[u]);
  } else
    a.data.push(i);
  return a;
}, LE = (e, t, n) => {
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
      for (; u >= 0 && !vc(e[u][t]); )
        u--;
      u >= 0 && i !== u && (a.data.push(e[u]), i = u), a.style = l.style;
    }
  }), a;
};
function PE(e, t, n, a) {
  const i = {
    data: [],
    style: ""
  }, l = (d) => d > 0 && d < e.length - 1;
  return a == null || a.forEach((d) => {
    if (d.type === "effect" || d.hideLineStyle)
      return;
    const f = d.value;
    e.reduce((m, y, x) => (y[t] === f && l(x) && (!d.column || d.column === t) && m.push(x), m), []).forEach((m) => {
      i.style = d.style, vc(e[m - 1][t]) && i.data.push(e[m - 1]);
      const y = e.slice(m + 1).findIndex((x) => x[t] !== f && vc(x[t]));
      y !== -1 && i.data.push(e[m + 1 + y]);
    });
  }), i.data = mr.uniqWith(i.data, (d, f) => d[n] === f[n] && d[t] === f[t]), i;
}
const RE = (e, t, n, a) => {
  const i = AE(e, t, n), l = LE(e, t, n), d = PE(e, t, a, n);
  return [i, d, l].filter((f) => f.data.length > 0 && f.style !== "");
}, jd = (e) => {
  var P, T, _, B, Y, X, J, re;
  const { config: t, d: n, tableData: a, displayArea: i, seriesKey: l, tooltipData: d, xScale: f, yScale: u, colorScale: m, parseDate: y, yScaleRight: x, data: b, circleData: A, dataIndex: w, mode: O } = e, { lineDatapointStyle: k } = t, h = (P = t == null ? void 0 : t.series.filter((H) => H.dataKey === l)) == null ? void 0 : P[0], L = (H, ae, j, te, oe) => {
    const ne = j.runtime.seriesLabels || [];
    let ee;
    return H ? ee = ae(ne[te] || oe) : ee = "transparent", j.lineDatapointColor === "Lighter than Line" && ee !== "transparent" && ee && (ee = Ma(ee).brighten(1)), ee;
  }, F = (H) => (t.xAxis.type === "categorical" ? f(H) : f(y(H))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (O === "ALWAYS_SHOW_POINTS") {
    if (k === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (k === "always show")
      return (A == null ? void 0 : A.some((ae) => ae[t.xAxis.dataKey] === n[t.xAxis.dataKey] && ae[l] === n[l])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: F(n[t.xAxis.dataKey]),
          cy: h.axis === "Right" ? x(n[h.dataKey]) : u(n[h.dataKey]),
          r: 4.5,
          opacity: n[l] ? 1 : 0,
          fillOpacity: 1,
          fill: L(i, m, t, l, l),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (O === "HOVER_POINTS" && k === "hover") {
    if (!d || !l || !d.data)
      return;
    let H = (_ = (T = d == null ? void 0 : d.data) == null ? void 0 : T[0]) == null ? void 0 : _[1];
    if (!H)
      return;
    let ae, j = d.data.filter((ne) => ne[0] === l), te = (B = j == null ? void 0 : j[0]) == null ? void 0 : B[0], oe = (Y = j == null ? void 0 : j[0]) == null ? void 0 : Y[2];
    return te ? (d == null || d.data.indexOf(te), ae = (X = a == null ? void 0 : a.find((ne) => ne[t == null ? void 0 : t.xAxis.dataKey] === H)) == null ? void 0 : X[l], d == null ? void 0 : d.data.map((ne, ee) => (t.runtime.seriesLabelsAll.indexOf(H), isNaN(ae) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (A == null ? void 0 : A.some((Z) => Z[t.xAxis.dataKey] === H)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: F(H),
        cy: oe === "right" ? x(ae) : u(ae),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: L(i, m, t, te, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(ne)}--${ee}`
      }
    )))) : void 0;
  }
  return O === "ISOLATED_POINTS" && O && ((ae, j) => {
    const te = b[ae], oe = ae > 0 ? b[ae - 1] : null, ne = ae < b.length - 1 ? b[ae + 1] : null;
    let ee = !1;
    return ae === 0 && ne && !ne[j] && (ee = !0), ae === b.length - 1 && oe && !oe[j] && (ee = !0), ae > 0 && ae < b.length - 1 && te && te[j] && (!oe || !oe[j]) && (!ne || !ne[j]) && (ee = !0), ee;
  })(w, l) ? /* @__PURE__ */ r.createElement("circle", { cx: F(n[(J = t.xAxis) == null ? void 0 : J.dataKey]), cy: h.axis === "Right" ? x(n[h.dataKey]) : u(n[h == null ? void 0 : h.dataKey]), r: 5.3, strokeWidth: 2, stroke: m(t.runtime.seriesLabels[l]), fill: m((re = t.runtime) == null ? void 0 : re.seriesLabels[l]) }) : null;
}, Dh = (e) => {
  var ae;
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
  } = e, { colorScale: x, config: b, formatNumber: A, handleLineType: w, isNumber: O, parseDate: k, seriesHighlight: h, tableData: L, transformedData: F, updateConfig: P, brushConfig: T, clean: _ } = se.useContext(xt), { yScaleRight: B } = Xf({ config: b, yMax: m, data: F, updateConfig: P });
  if (!l)
    return;
  const { lineDatapointStyle: Y, showLineSeriesLabels: X, legend: J } = b;
  let re = F, H = L;
  return T.data.length > 0 && ((ae = b.brush) != null && ae.active) && (re = _(T.data), H = _(T.data)), /* @__PURE__ */ r.createElement(Or, { component: "LineChart" }, /* @__PURE__ */ r.createElement(at, { left: Number(b.runtime.yAxis.size) }, " ", (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((j, te) => {
    var Se;
    let oe = b.series.filter((ce) => ce.dataKey === j)[0].type;
    const ne = b.series.filter((ce) => ce.dataKey === j), ee = ne[0].axis ? ne[0].axis : "left";
    let G = J.behavior === "highlight" || h.length === 0 || h.indexOf(j) !== -1;
    const Z = CE(b == null ? void 0 : b.preliminaryData, H, j);
    let K = TE({ preliminaryData: b.preliminaryData, data: H, stroke: x(b.runtime.seriesLabels[j]), strokeWidth: ne[0].weight || 2, handleLineType: w, lineType: oe, seriesKey: j });
    const V = RE(L, j, b.preliminaryData, b.xAxis.dataKey);
    let we = (ce) => u(t(ce)) + (u.bandwidth ? u.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      at,
      {
        key: `series-${j}`,
        opacity: J.behavior === "highlight" && h.length > 0 && h.indexOf(j) === -1 ? 0.5 : 1,
        display: J.behavior === "highlight" || h.length === 0 && !J.dynamicLegend || h.indexOf(j) !== -1 ? "block" : "none"
      },
      re.map((ce, Re) => {
        const je = b.series.find(({ dataKey: le }) => le === j), { axis: Je } = je, Oe = Object.keys(b.runtime.seriesLabels).length > 1, he = Je === "Right" ? "rightLabel" : "label";
        let Fe = b.runtime.yAxis[he];
        return Oe || (Fe = b.isLegendValue ? b.runtime.seriesLabels[j] : Fe), ce[j] !== void 0 && ce[j] !== "" && ce[j] !== null && O(ce[j]) && /* @__PURE__ */ r.createElement(at, { key: `series-${j}-point-${Re}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(wr, { key: "bars", width: Number(f), height: Number(m), fill: "transparent", fillOpacity: 0.05, onMouseMove: (le) => l(le, L), onMouseOut: i, onClick: (le) => a(le, re) }), /* @__PURE__ */ r.createElement(St, { display: b.labels ? "block" : "none", x: we(ce), y: ee === "Right" ? B(n(ce, j)) : y(n(ce, j)), fill: "#000", textAnchor: "middle" }, A(ce[j], "left")), (Y === "hidden" || Y === "always show") && /* @__PURE__ */ r.createElement(
          jd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Re,
            circleData: Z,
            tableData: L,
            data: re,
            d: ce,
            config: b,
            seriesKey: j,
            displayArea: G,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: ee,
            key: `line-circle--${Re}`
          }
        ), /* @__PURE__ */ r.createElement(
          jd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Re,
            tableData: L,
            circleData: Z,
            data: re,
            d: ce,
            config: b,
            seriesKey: j,
            displayArea: G,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: ee,
            key: `isolated-circle-${Re}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, Y === "hover" && /* @__PURE__ */ r.createElement(
        jd,
        {
          tableData: L,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: Z,
          data: re,
          config: b,
          seriesKey: j,
          displayArea: G,
          tooltipData: d,
          xScale: u,
          yScale: y,
          colorScale: x,
          parseDate: k,
          yScaleRight: B,
          seriesAxis: ee
        }
      )),
      (Se = b == null ? void 0 : b.preliminaryData) != null && Se.some((ce) => ce.value && ce.type) ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Gm,
        {
          curve: fs[ne[0].lineType],
          segments: re.map((ce) => [ce]),
          segmentation: "x",
          x: (ce) => we(ce),
          y: (ce) => ee === "Right" ? B(n(ce, j)) : y(Number(n(ce, j))),
          styles: K,
          defined: (ce, Re) => ce[j] !== "" && ce[j] !== null && ce[j] !== void 0
        }
      ), V.map((ce, Re) => /* @__PURE__ */ r.createElement(
        Nr,
        {
          key: Re,
          data: ce.data,
          x: (je) => we(je),
          y: (je) => ee === "Right" ? B(n(je, j)) : y(Number(n(je, j))),
          stroke: x(b.runtime.seriesLabels[j]),
          strokeWidth: ne[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: w(ce.style),
          defined: (je, Je) => je[j] !== "" && je[j] !== null && je[j] !== void 0
        }
      ))) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Nr,
        {
          curve: fs[ne[0].lineType],
          data: b.xAxis.type === "date-time" || b.xAxis.type === "date" ? re.sort((ce, Re) => {
            let je = t(ce), Je = t(Re);
            return je < Je ? -1 : Je < je ? 1 : 0;
          }) : re,
          x: (ce) => we(ce),
          y: (ce) => ee === "Right" ? B(n(ce, j)) : y(Number(n(ce, j))),
          stroke: x(b.runtime.seriesLabels[j]),
          strokeWidth: ne[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: oe ? w(oe) : 0,
          defined: (ce, Re) => ce[j] !== "" && ce[j] !== null && ce[j] !== void 0
        }
      )),
      Z.map((ce, Re) => /* @__PURE__ */ r.createElement(
        "circle",
        {
          key: Re,
          cx: we(ce.data),
          cy: ee === "Right" ? B(n(ce.data, j)) : y(Number(n(ce.data, j))),
          r: ce.size,
          strokeWidth: ne[0].weight || 2,
          stroke: x ? x(b.runtime.seriesLabels[j]) : "#000",
          fill: ce.isFilled ? x ? x(b.runtime.seriesLabels[j]) : "#000" : "#fff"
        }
      )),
      b.animate && /* @__PURE__ */ r.createElement(
        Nr,
        {
          className: "animation",
          curve: fs[ne[0].lineType],
          data: re,
          x: (ce) => we(ce),
          y: (ce) => ee === "Right" ? B(n(ce, j)) : y(Number(n(ce, j))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: oe ? w(oe) : 0,
          defined: (ce, Re) => ce[j] !== "" && ce[j] !== null && ce[j] !== void 0
        }
      ),
      X && (b.runtime.lineSeriesKeys || b.runtime.seriesKeys).map((ce) => {
        let Re;
        for (let je = re.length - 1; je >= 0; je--)
          if (re[je][ce]) {
            Re = re[je];
            break;
          }
        return Re ? /* @__PURE__ */ r.createElement("text", { x: we(Re) + 5, y: y(n(Re, ce)), alignmentBaseline: "middle", fill: b.colorMatchLineSeriesLabels && x ? x(b.runtime.seriesLabels[ce] || ce) : "black" }, b.runtime.seriesLabels[ce] || ce) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), b.legend.dynamicLegend && h.length === 0 && /* @__PURE__ */ r.createElement(St, { x: f / 2, y: m / 2, fill: "black", textAnchor: "middle", color: "black" }, b.legend.dynamicLegendChartMessage)));
}, DE = (e) => {
  const { rawData: t, updateConfig: n } = se.useContext(xt), { xScale: a, yScale: i, config: l, height: d, width: f, handleTooltipMouseOff: u, handleTooltipMouseOver: m } = e, { forestPlot: y } = l, x = l.xAxis.tickWidthMax + 10, [b, A] = se.useState(!1);
  se.useEffect(() => {
    try {
      const P = ["estimateField", "lower", "upper", "estimateRadius"], T = l, _ = 10;
      for (let B = 0; B < _; B++)
        P.forEach((Y) => {
          var X;
          l.forestPlot[Y] && l.forestPlot[Y] !== ((X = T.columns[l.forestPlot[`additionalColumn${B}`]]) == null ? void 0 : X.name) && (delete T.columns[`additionalColumn${B}`], T.columns[l.forestPlot[Y]] = {}, T.columns[l.forestPlot[Y]].dataKey = T.forestPlot[Y], T.columns[l.forestPlot[Y]].name = T.forestPlot[Y], T.columns[l.forestPlot[Y]].dataTable = !0, T.columns[l.forestPlot[Y]].tooltips = !0, T.columns[l.forestPlot[Y]].label = T.forestPlot[Y]);
        });
      l.forestPlot.radius.scalingColumn && (T.columns[l.forestPlot.radius.scalingColumn] = {}, T.columns[l.forestPlot.radius.scalingColumn].dataKey = T.forestPlot.radius.scalingColumn, T.columns[l.forestPlot.radius.scalingColumn].name = T.forestPlot.radius.scalingColumn, T.columns[l.forestPlot.radius.scalingColumn].label = T.forestPlot.radius.scalingColumn, T.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, T.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), T.table.showVertical && (T.table.indexLabel = l.xAxis.dataKey), n(T);
    } catch (P) {
      console.log(P.message);
    }
  }, []), se.useEffect(() => {
    !b && l.forestPlot.type === "Logarithmic" && (n({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), A(!0));
  }, [l.forestPlot.type]);
  const w = l.data.find((P) => P[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), O = w ? [
    { x: a(w[l.forestPlot.lower]), y: d - Number(l.forestPlot.rowHeight) },
    { x: a(w[l.forestPlot.estimateField]), y: d - y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(w[l.forestPlot.upper]), y: d - Number(l.forestPlot.rowHeight) },
    { x: a(w[l.forestPlot.estimateField]), y: d + y.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(w[l.forestPlot.lower]), y: d - Number(l.forestPlot.rowHeight) }
  ] : [], k = l.forestPlot.rowHeight, h = [
    { x: 0, y: k },
    { x: f, y: k }
  ], L = [
    { x: 0, y: d },
    { x: f, y: d }
  ], F = Object.entries(l.columns).map((P) => P[1]).filter((P) => P.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { width: f }, y.title && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--title", x: y.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: ki(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ r.createElement(tn, { from: { x: a(0), y: 0 + k }, to: { x: a(0), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ r.createElement(tn, { from: { x: a(1), y: 0 + k }, to: { x: a(1), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((P, T) => {
    const _ = Fn({
      domain: t.map((H) => H[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), B = y.radius.scalingColumn !== "" ? _(t[T][y.radius.scalingColumn]) : 4, Y = y.colors.shape ? y.colors.shape : "black", X = y.colors.line ? y.colors.line : "black", J = 4;
    return P[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ r.createElement(Nr, { data: O, x: (H) => H.x, y: (H) => H.y - ki(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Jd }) : /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: X,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(P[y.lower])} ${i(T) - Number(J)}
                    L${a(P[y.lower])} ${i(T) + Number(J)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: X,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(P[y.upper])} ${i(T) - Number(J)}
                    L${a(P[y.upper])} ${i(T) + Number(J)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: X, className: `line-${P[l.yAxis.dataKey]}`, key: T, x1: a(P[y.lower]), x2: a(P[y.upper]), y1: i(T), y2: i(T) }), y.shape === "circle" && /* @__PURE__ */ r.createElement(ig, { className: "forest-plot--circle", cx: a(Number(P[y.estimateField])), cy: i(T), r: y.radius.scalingColumn !== "" ? _(t[T][y.radius.scalingColumn]) : 4, fill: Y, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(P[y.estimateField])), y: i(T) - B / 2, width: B, height: B, fill: Y, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--text", x: a(Number(P[y.estimateField])), y: i(T), textAnchor: "middle", verticalAnchor: "middle", fontSize: ki(l.fontSize), fill: Y }, P[y.estimateField]));
  }), O && y.regression.showDiamond && /* @__PURE__ */ r.createElement(Nr, { data: O, x: (P) => P.x, y: (P) => P.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Jd }), y.regression.description && /* @__PURE__ */ r.createElement(St, { x: 0 - Number(l.xAxis.size), width: f, y: d - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ r.createElement(wr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: f, height: d, fill: "transparent", fillOpacity: 0.5, onMouseMove: (P) => m(P, t), onMouseOut: u })), /* @__PURE__ */ r.createElement(tn, { from: h[0], to: h[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(tn, { from: L[0], to: L[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), F.map((P) => t.map((T, _) => /* @__PURE__ */ r.createElement(St, { className: `${T[P.name]}`, x: P.forestPlotAlignRight ? f : P.forestPlotStartingPoint, y: i(_), textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: ki(l.fontSize), fill: "black" }, T[P.name]))), !y.hideDateCategoryCol && t.map((P, T) => /* @__PURE__ */ r.createElement(St, { className: `${P[l.xAxis.dataKey]}`, x: 0, y: i(T), textAnchor: "start", verticalAnchor: "middle", fontSize: ki(l.fontSize), fill: "black" }, P[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(St, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: ki(l.fontSize), fill: "black" }, l.xAxis.dataKey), F.map((P) => /* @__PURE__ */ r.createElement(St, { className: `${P.label}`, x: P.forestPlotAlignRight ? f : P.forestPlotStartingPoint, y: 0, textAnchor: P.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: ki(l.fontSize), fill: "black" }, P.label)), y.leftLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__left-label", x: y.type === "Linear" ? a(0) - 25 : a(1) - 25, y: d + x, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__right-label", x: y.type === "Linear" ? a(0) + 25 : a(1) + 25, y: d + x, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, _E = ({ width: e, height: t, originalWidth: n }) => {
  var F, P, T;
  const { config: a, colorScale: i, transformedData: l, formatNumber: d, seriesHighlight: f, getTextWidth: u } = se.useContext(xt);
  if (!a || ((F = a == null ? void 0 : a.series) == null ? void 0 : F.length) < 2)
    return;
  const m = a.barHasBorder === "true" ? 1 : 0, y = e / 2, x = { small: 16, medium: 18, large: 20 }, b = 1.02, A = {
    parentKey: (P = a.dataDescription) == null ? void 0 : P.seriesKey,
    dataKey: a.series[0].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[0].dataKey] || a.series[0].dataKey,
    color: i(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[a.series[0].dataKey])
    ),
    labelColor: ""
  }, w = {
    parentKey: (T = a.dataDescription) == null ? void 0 : T.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: i(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[a.series[1].dataKey])
    ),
    labelColor: ""
  }, O = Fn({
    domain: [0, Math.max(A.max * b, w.max * 1.1)],
    range: [0, y]
  });
  A.labelColor = A.color ? Ko("#000", A.color) : "#000", w.labelColor = w.color ? Ko("#000", w.color) : "#000";
  const k = a.yAxis.label ? `${a.yAxis.label}: ` : "", h = (_) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${A.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${_[a.xAxis.dataKey]}<br/>
				${k}${d(_[A.dataKey], "left")}
			</p>`;
  }, L = (_) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${w.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${_[a.xAxis.dataKey]}<br/>
				${k}${d(_[w.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Paired bar chart graphic with the title ${a.title ? a.title : "No Title Found"}`), /* @__PURE__ */ r.createElement(at, { top: 0, left: Number(a.xAxis.size) }, l.filter((_) => a.series[0].dataKey === A.dataKey).map((_, B) => {
    var oe, ne;
    let Y = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[0].dataKey) === -1, X = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[0].dataKey) !== -1, J = O(_[a.series[0].dataKey]), re = Number(a.barHeight) ? Number(a.barHeight) : 25, H = 0;
    H = B !== 0 ? (Number(a.barSpace) + re + m) * B : H;
    const ae = (Number(a.barSpace) + re + m) * l.length;
    a.heights.horizontal = ae;
    const te = u(d(_[A.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < J - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { key: `group-${A.dataKey}-${_[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      wr,
      {
        id: `bar-${A.dataKey}-${_[(oe = a.dataDescription) == null ? void 0 : oe.xKey]}`,
        className: "bar group-1",
        key: `bar-${A.dataKey}-${_[(ne = a.dataDescription) == null ? void 0 : ne.xKey]}`,
        x: y - J,
        y: H,
        width: O(_[a.series[0].dataKey]),
        height: re,
        fill: A.color,
        "data-tooltip-html": h(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: m,
        opacity: Y ? 0.5 : 1,
        display: X ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && X && /* @__PURE__ */ r.createElement(St, { textAnchor: te ? "start" : "end", dx: te ? 5 : -5, verticalAnchor: "middle", x: y - J, y: H + a.barHeight / 2, fill: te ? A.labelColor : "#000" }, d(_[A.dataKey], "left"))));
  }), l.filter((_) => a.series[1].dataKey === w.dataKey).map((_, B) => {
    var oe, ne, ee;
    let Y = O(_[a.series[1].dataKey]), X = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[1].dataKey) === -1, J = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[1].dataKey) !== -1, re = a.barHeight ? Number(a.barHeight) : 25, H = 0;
    H = B !== 0 ? (Number(a.barSpace) + re + m) * B : H;
    const ae = (Number(a.barSpace) + re + m) * l.length;
    a.heights.horizontal = ae;
    const te = u(d(_[w.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < Y - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${w.dataKey}-${_[a.xAxis.dataKey]} {
                          transform-origin: ${y}px ${H}px
                      }
							      `), /* @__PURE__ */ r.createElement(at, { key: `group-${w.dataKey}-${_[(oe = a.dataDescription) == null ? void 0 : oe.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      wr,
      {
        id: `bar-${w.dataKey}-${_[(ne = a.dataDescription) == null ? void 0 : ne.xKey]}`,
        className: "bar group-2",
        key: `bar-${w.dataKey}-${_[(ee = a.dataDescription) == null ? void 0 : ee.xKey]}`,
        x: y,
        y: H,
        width: O(_[a.series[1].dataKey]),
        height: re,
        fill: w.color,
        "data-tooltip-html": L(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: m,
        stroke: "#333",
        opacity: X ? 0.5 : 1,
        display: J ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && J && /* @__PURE__ */ r.createElement(St, { textAnchor: te ? "end" : "start", dx: te ? -5 : 5, verticalAnchor: "middle", x: y + Y, y: H + a.barHeight / 2, fill: te ? w.labelColor : "#000" }, d(_[w.dataKey], "left"))));
  }))));
}, NE = ({ yMax: e, leftSize: t, max: n, xMax: a }) => {
  var L;
  const { config: i, getTextWidth: l } = se.useContext(xt), { fontSize: d } = ws(), { orientation: f } = i, u = (F, P = "#f1f1f1") => {
    try {
      return Ma(F).hex();
    } catch {
      return P;
    }
  }, m = (L = i.yAxis) == null ? void 0 : L.categories, b = ((F) => {
    const P = Object.keys(F), T = P[P.length - 1];
    if (F[T] === "") {
      const _ = P.slice(0, -1).reduce((Y, X) => {
        const J = parseInt(F[X], 10);
        return Y + (isNaN(J) ? 0 : J);
      }, 0), B = n - _;
      F[T] = B.toString();
    }
    return [F];
  })(((F) => [...F].reduce((T, _) => (T[_.label] = _.height, T), {}))(m)), A = 0, w = Uu({
    domain: [A],
    padding: 0,
    range: [0, t]
  }), O = Fn({
    domain: [0, n],
    range: [e, 0],
    clamp: !0
  }), k = Di({
    domain: m.map((F) => F == null ? void 0 : F.label),
    range: m.map((F) => {
      var P;
      return u((P = F == null ? void 0 : F.color) == null ? void 0 : P.trim());
    })
  }), h = Object.keys(b[0]);
  return /* @__PURE__ */ r.createElement(at, { left: t - w.bandwidth(), top: 0 }, /* @__PURE__ */ r.createElement(qm, { data: b, keys: h, x: () => w(A), xScale: w, yScale: O, color: k }, (F) => F.map(
    (P) => P.bars.map((T) => {
      const _ = i.yAxis.categories.length - 1 === P.index, B = d[i.fontSize] / 1.3, Y = Ma(T.color).luminance() < 0.4 ? "#fff" : "#000", X = l(T.key, `normal ${B}px sans-serif`), J = Number(X) < T.width && T.height > B, re = `<ul>
              <li class="tooltip-heading""> Label : ${T.key}  </li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(at, { key: `${P.index}--${T.index}--${f}` }, /* @__PURE__ */ r.createElement(at, { key: `bar-stack-${P.index}-${T.index}`, id: `barStack${P.index}-${T.index}`, className: "stack vertical" }, Cs({
        type: "axisBar",
        config: i,
        index: P.index,
        background: k(T.key),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: 0,
        width: w.bandwidth(),
        height: T.height,
        x: T.x,
        y: T.y,
        tooltipHtml: re,
        tooltipId: `cdc-open-viz-tooltip-${i.runtime.uniqueId}`
      }), /* @__PURE__ */ r.createElement(
        St,
        {
          display: J ? "block" : "none",
          key: `text-${P.index}-${T.index}`,
          x: T.x + w.bandwidth() / 2,
          y: T.y + T.height / 2,
          fill: Y,
          textAnchor: "middle",
          verticalAnchor: "middle",
          style: { fontSize: B }
        },
        T.key
      ), i.runtime.yAxis.gridLines && /* @__PURE__ */ r.createElement(tn, { from: { x: T.x + w.bandwidth(), y: T.y }, to: { x: a + w.bandwidth(), y: T.y }, stroke: "rgba(0,0,0,0.3)" }), !_ && /* @__PURE__ */ r.createElement("rect", { x: T.x, y: T.y, width: T.width, height: 1, fill: "#fff" }), /* @__PURE__ */ r.createElement("rect", { x: T.x + T.width, y: 0, width: 1, height: e, fill: "#000" })));
    })
  )));
}, Ay = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: l, tableData: d }) => {
  let f = 0, u = 0, m = 0, y = 0;
  if (!i)
    return { min: f, max: u };
  const x = () => Pc(e.visualizationType, i, e.allowLineToBarGraph), { visualizationType: b, series: A } = e, { max: w, min: O } = e.runtime.yAxis, k = e.yAxis.type === "logarithmic", h = a ? w >= n : w >= 0, L = k ? O >= 0 : O <= 0 && t >= 0 || O <= t && t < 0;
  f = O && L ? O : t, u = w && h ? w : Number.MIN_VALUE;
  const { lower: F, upper: P } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (F && P && e.visualizationType === "Bar") {
    const T = f < 0 ? 1.1 : 0;
    u = Math.max(n, Math.max(...i.flatMap((_) => [_[P], _[F]])) * 1.15), f = Math.min(t, Math.min(...i.flatMap((_) => [_[P], _[F]])) * 1.15) * T;
  }
  if (e.series.filter((T) => (T == null ? void 0 : T.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: T }
    } = e;
    if ((T == null ? void 0 : T.length) > 0) {
      let _ = [];
      T.forEach((J) => {
        var re;
        (re = J.confidenceIntervals) == null || re.map((H) => {
          _.push(H.high), _.push(H.low);
        });
      });
      const B = i.map((J) => _.map((re) => J[re])), Y = Math.max.apply(
        null,
        B.map((J) => J[0])
      ), X = Math.min.apply(
        null,
        B.map((J) => J[1])
      );
      Y > u && (u = Y), X < f && (f = X);
    }
  }
  if (b === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let T = A.filter((Y) => Y.axis === "Left"), _ = A.filter((Y) => Y.axis === "Right");
      const B = (Y, X, J, re = "left") => {
        let H = 0;
        return (X.map((j) => j.dataKey) || []).forEach((j) => {
          let te = X.find((ee) => ee.dataKey === j), oe = Y.map((ee) => ee[j]), ne = Math.max.apply(null, oe);
          e.visualizationSubType === "stacked" && re === "left" && te.type === "Bar" && (H += ne), ne > J && (J = ne), J < H && (J = H);
        }), J;
      };
      m = B(i, T, m, "left"), y = B(i, _, y, "right"), m < w && (m = w);
    } catch (T) {
      console.error(T.message);
    }
  if ((b === "Bar" || x() || b === "Combo" && !l) && f > 0 && (f = 0), (e.visualizationType === "Bar" || x() || e.visualizationType === "Combo" && !l) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && l && ((O == null || O === "") && f > 0 && (f = 0), O)) {
    const T = k ? O >= 0 && O < t : O < t;
    f = O && T ? O : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const T = Number(O) < Math.min(t, Number(e.xAxis.target));
    f = O && T ? O : 0;
  }
  if (e.visualizationType === "Line" && !x()) {
    const T = k ? O >= 0 && O < t : O < t, _ = d == null ? void 0 : d.some((B, Y) => {
      var X;
      return (X = e.preliminaryData) == null ? void 0 : X.some((J) => {
        var j;
        if (J.type !== "suppression" || !J.style)
          return !1;
        const re = mr.pick(B, (j = e.runtime) == null ? void 0 : j.seriesKeys), H = mr.values(re).includes(J.value);
        return (J.column ? B[J.column] === J.value : H) && (Y === 0 || Y === d.length - 1);
      });
    });
    f = O && T ? O : _ ? 0 : t;
  }
  if (u === Number.MIN_VALUE && (u = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let T = (u - f) * e.runtime.yAxis.paddingPercent;
    f -= T, u += T;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const T = i.map((B) => B[e.series[0].dataKey]), _ = Math.max(...T).toString().length;
    switch (!0) {
      case (_ > 8 && _ <= 12):
        u = u * 1.3;
        break;
      case (_ > 4 && _ <= 7):
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
}, OE = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: l, config: d, data: f } = e;
  const { rawData: u, dimensions: m } = se.useContext(xt), [y, x] = m, b = d.runtime.barSeriesKeys || d.runtime.seriesKeys, A = d.runtime.xAxis.type, w = d.orientation === "horizontal", O = (J) => J[d.runtime.originalXAxis.dataKey], k = f.map((J) => O(J)), { visualizationType: h } = d;
  let L = null, F = null, P = null, T = null, _ = null, B = null, Y = null, X = Fn({
    domain: [0, 100],
    range: [0, n]
  });
  if (w && (L = ME({ min: i * 1.03, ...e }), L.type = d.yAxis.type === "logarithmic" ? Vr.LOG : Vr.LINEAR, F = $E(A, t), F.rangeRound([0, a]), _ = _h(b, [0, a])), w || (Y = _h(k, [0, n], 0.5), L = Nu(t, [0, n], 1 - d.barThickness), F = zE(e), _ = Nu(b, [0, L.bandwidth()], 0)), d.xAxis.type === "date" && !w) {
    const J = t ? t.sort() : [];
    L = Nu(J, [0, n], 1 - d.barThickness);
  }
  if (d.xAxis.type === "date-time") {
    let J = Math.min(...t), re = Math.max(...t);
    J -= (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (re - J), re += (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (re - J), L = Vg({
      domain: [J, re],
      range: [0, n]
    }), L.type = Vr.TIME;
    let H = Number.MAX_VALUE, ae = t ? t.sort() : [];
    for (let j = 0; j < ae.length - 1; j++) {
      let te = L(ae[j + 1]) - L(ae[j]);
      te < H && (H = te);
    }
    (t.length === 1 || H > n / 4) && (H = n / 4), _ = Nu(b, [0, (d.barThickness || 1) * H], 0);
  }
  if (d.visualizationType === "Deviation Bar") {
    const J = d.isLollipopChart ? 1.05 : 1.03;
    F = Uu({
      domain: t,
      range: [0, a]
    }), L = Fn({
      domain: [i * J, Math.max(Number(d.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), L.type = Vr.LINEAR;
  }
  if (d.visualizationType === "Scatter Plot" && d.xAxis.type === "continuous" && (L = Fn({
    domain: [0, Math.max.apply(null, L.domain())],
    range: [0, n]
  }), L.type = Vr.LINEAR), h === "Box Plot") {
    const J = [];
    if (d.boxplot.plots.map((j) => j.columnOutliers.map((te) => J.push(te))) && !d.boxplot.hideOutliers) {
      let j = Math.min(...J), te = Math.max(...J);
      j < i && (i = j), te > l && (l = te);
    }
    let H = Math.min(...d.boxplot.plots.map((j) => j.columnLowerBounds)), ae = Math.max(...d.boxplot.plots.map((j) => j.columnUpperBounds));
    H < i && (i = H), ae > l && (l = ae), F = Fn({
      range: [a, 0],
      round: !0,
      domain: [i, l]
    }), L = Uu({
      range: [0, n],
      round: !0,
      domain: d.boxplot.categories,
      padding: 0.4
    }), L.type = Vr.BAND;
  }
  if (h === "Paired Bar") {
    let re = Math.max.apply(
      Math,
      f.map((ae) => {
        var j;
        return ae[(j = d.series[0]) == null ? void 0 : j.dataKey];
      })
    ), H = Math.max.apply(
      Math,
      f.map((ae) => {
        var j;
        return ae[(j = d.series[1]) == null ? void 0 : j.dataKey];
      })
    );
    T = Fn({
      domain: [0, Math.max(re, H) * 1.02],
      range: [n / 2, 0]
    }), P = Fn({
      domain: T.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (h === "Forest Plot") {
    const J = () => d.forestPlot.regression.showDiamond || d.forestPlot.regression.description ? [0 + d.forestPlot.rowHeight * 2, a - d.forestPlot.rowHeight] : [0 + d.forestPlot.rowHeight * 2, a];
    F = Fn({
      domain: [0, u.length],
      range: J()
    });
    const re = 5, H = Number(d.forestPlot.leftWidthOffset) / 100 * n, ae = Number(d.forestPlot.rightWidthOffset) / 100 * n, j = Number(d.forestPlot.rightWidthOffsetMobile) / 100 * n, te = Number(d.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (y > 480) {
      if (d.forestPlot.type === "Linear" && (L = Fn({
        domain: [Math.min(...f.map((oe) => parseFloat(oe[d.forestPlot.lower]))) - re, Math.max(...f.map((oe) => parseFloat(oe[d.forestPlot.upper]))) + re],
        range: [H, m[0] - ae]
      }), L.type = Vr.LINEAR), d.forestPlot.type === "Logarithmic") {
        let oe = Math.max(...f.map((ee) => parseFloat(ee[d.forestPlot.upper]))), ne = Math.min(...f.map((ee) => parseFloat(ee[d.forestPlot.lower])));
        L = Ku({
          domain: [ne, oe],
          range: [H, n - ae],
          nice: !0
        }), L.type = Vr.LOG;
      }
    } else if (d.forestPlot.type === "Linear" && (L = Fn({
      domain: [Math.min(...f.map((oe) => parseFloat(oe[d.forestPlot.lower]))) - re, Math.max(...f.map((oe) => parseFloat(oe[d.forestPlot.upper]))) + re],
      range: [te, n - j],
      type: Vr.LINEAR
    })), d.forestPlot.type === "Logarithmic") {
      let oe = Math.max(...f.map((ee) => parseFloat(ee[d.forestPlot.upper]))), ne = Math.min(...f.map((ee) => parseFloat(ee[d.forestPlot.lower])));
      L = Ku({
        domain: [ne, oe],
        range: [H, n - ae],
        nice: !0,
        base: oe > 1 ? 10 : 2,
        round: !1,
        type: Vr.LOG
      });
    }
  }
  return { xScale: L, yScale: F, seriesScale: _, g1xScale: T, g2xScale: P, xScaleNoPadding: B, xScaleBrush: Y, xScaleAnnotation: X };
}, FE = (e, t, n) => {
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
}, ME = ({ min: e, max: t, xMax: n, config: a }) => {
  const i = a.yAxis.type === "logarithmic";
  return e = i && e >= 0 && e < 1 ? e + 0.1 : e, (i ? Ku : Fn)({
    domain: [e, t],
    range: [0, n],
    nice: i,
    zero: i
  });
}, zE = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  const l = a.yAxis.type === "logarithmic";
  e = l && e >= 0 && e < 1 ? e + 0.1 : e;
  const d = l ? Ku : Fn;
  return a.visualizationType === "Combo" && (t = i), d({
    domain: [e, t],
    range: [n, 0],
    nice: l,
    zero: l
  });
}, $E = (e, t) => e === "date" ? Fn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Wo({ domain: t, padding: 0.5 }), _h = (e, t, n = 0) => Wo({
  domain: e,
  range: t,
  padding: n
}), Nu = (e, t, n = 0) => Uu({
  domain: e,
  range: t,
  padding: n
});
function IE(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const As = () => {
  const { config: e } = se.useContext(xt), { visualizationType: t, series: n, orientation: a, visualizationSubType: i } = e, l = [
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
  ], d = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], f = () => !["Forest Plot", "Sankey"].includes(t), u = () => !["Spark Line"].includes(t), m = () => !["Spark Line"].includes(t), y = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), x = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), b = () => {
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
  }, A = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), w = () => !!["Bar", "Combo", "Line"].includes(e.visualizationType), O = () => {
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
  }, h = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && a === "vertical", L = () => ["Box Plot", "Scatter Plot", "Pie", "Line"].includes(t) ? !1 : n == null ? void 0 : n.some((Ze) => Ze.type === "Bar" || Ze.type === "Paired Bar" || Ze.type === "Deviation Bar"), F = () => {
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
    headerColors: d,
    visCanAnimate: x,
    visHasAnchors: O,
    visHasBarBorders: L,
    visHasDataCutoff: F,
    visHasLabelOnData: y,
    visHasDataSuppression: k,
    visHasLegend: b,
    visHasLegendAxisAlign: () => t === "Bar" && i === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: h,
    visHasNumbersOnBars: A,
    visHasaAdditionalLabelsOnBars: w,
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
    visSupportsPreliminaryData: () => (e == null || e.series.some((De) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(De == null ? void 0 : De.type)), t === "Line" || t === "Bar" && i === "regular" || t === "Combo"),
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
      const De = ["Forest Plot"];
      return !(a === "horizontal" || De.includes(t));
    },
    visSupportsValueAxisLabels: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisLine: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisTicks: () => !["Forest Plot"].includes(t),
    visSupportsReactTooltip: () => {
      if (e.yAxis.type === "categorical" || ["Deviation Bar", "Box Plot", "Scatter Plot", "Paired Bar"].includes(t) || t === "Bar" && e.tooltips.singleSeries)
        return !0;
    },
    visSupportsValueAxisMax: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisMin: () => !["Forest Plot"].includes(t),
    visHasSingleSeriesTooltip: () => t === "Bar" || t === "Line" || t === "Area Chart" && i === "stacked",
    visHasCategoricalAxis: () => {
      if ((t === "Line" || t === "Bar" || t === "Combo" || t === "Area Chart") && e.yAxis.type === "categorical" && a === "vertical")
        return !0;
    }
  };
}, BE = ({ data: e, xScale: t, yScale: n, config: a, xMax: i, annotationSeriesKey: l }, d) => {
  const { xAxis: f, visualizationType: u, orientation: m } = a, y = (k, h, L, F, P) => {
    let T = [];
    a.xAxis.type === "date-time" && (h = new Date(h), L = new Date(L), F = F.map((Y) => new Date(Y)), T = P.ticks().map((Y) => new Date(Y)));
    const _ = (k - h) / (L - h), B = Math.round(_ * (F.length - 1));
    return a.xAxis.type === "date-time" ? T[B] : F[B];
  }, b = ((k, h = !1) => {
    if (u !== "Pie" && m !== "horizontal") {
      if (a.xAxis.type === "date-time") {
        const L = new Date(t.invert(k)), F = a.data.map((_) => new Date(_[a.xAxis.dataKey]).getTime());
        let P = 1 / 0, T = null;
        return F.forEach((_) => {
          const B = Math.abs(L.getTime() - _);
          B < P && (P = B, T = _);
        }), new Date(T).getTime();
      }
      if (a.xAxis.type === "categorical" || u === "Combo" && m !== "horizontal" && u !== "Forest Plot") {
        const F = (t.range()[1] - t.range()[0]) / (t.domain().length + 1), T = Math.floor((Number(k) - F / 2) / F);
        return t.domain()[T];
      }
      if (a.xAxis.type === "date") {
        const L = y(k, 0, i, t.domain(), t);
        let F = null, P = Number.MAX_VALUE;
        return t.domain().forEach((T) => {
          const _ = Math.abs(L - T);
          _ < P && (P = _, F = T);
        }), F;
      }
      return k;
    }
  })(d - Number(a.yAxis.size || 0));
  let A = [];
  if (!b)
    return { x: 0, y: 0 };
  f.type === "categorical" && (A = a.data.filter((k) => k[a.xAxis.dataKey] === b)), (f.type === "date" || f.type === "date-time") && (A = a.data.filter((k) => new Date(k[a.xAxis.dataKey]).getTime() === b));
  const w = A[0][l];
  return { x: b, y: w };
}, HE = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "right" ? "end" : a === "left" ? "start" : a === "bottom" || a === "top" || t(e.xKey) + e.dx < n.yAxis.size ? "middle" : null;
}, WE = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "top" ? "start" : a === "bottom" ? "end" : a === "right" || a === "left" ? "middle" : t(e.xKey) + e.dx < n.yAxis.size ? "end" : null;
}, VE = () => {
  var u;
  const { config: e, data: t } = se.useContext(xt), { visualizationSubType: n, visualizationType: a, series: i, legend: l } = e, d = (m) => {
    if (!(i != null && i.length))
      return [];
    const x = ["Paired Bar", "Deviation Bar"].includes(a) ? e.twoColor.palette : e.palette, b = { ...or, ...ms };
    let A = e.customColors || b[x];
    for (; m > A.length; )
      A = A.concat(A);
    return A.slice(0, m);
  };
  let f = Di({
    domain: (u = e == null ? void 0 : e.runtime) == null ? void 0 : u.seriesLabelsAll,
    range: d(i.length)
  });
  if (a === "Deviation Bar") {
    const { targetLabel: m } = e.xAxis;
    f = Di({
      domain: [`Below ${m}`, `Above ${m}`],
      range: d(2)
    });
  }
  if (a === "Bar" && n === "regular" && (i == null ? void 0 : i.length) === 1 && (l != null && l.colorCode)) {
    const m = new Set(t == null ? void 0 : t.map((y) => y[l.colorCode]));
    f = Di({
      domain: [...m],
      range: d([...m].length)
    });
  }
  if (e.series.some((m) => m.name)) {
    const m = new Set(i.map((y) => y.name || y.dataKey));
    f = f = Di({
      domain: [...m],
      range: d(i.length)
    });
  }
  return { colorScale: f };
};
const jE = ({ xScale: e, yScale: t, xScaleAnnotation: n, xMax: a, svgRef: i, onDragStateChange: l }) => {
  const {
    config: d,
    currentViewport: f,
    dimensions: u,
    isDraggingAnnotation: m,
    isEditor: y,
    isLegendBottom: x,
    updateConfig: b
  } = se.useContext(xt), { annotations: A } = d, [w] = u, { colorScale: O } = VE(), k = y ? qy : Gy;
  return A && A.map((h, L) => {
    var _;
    const F = h.text || "", P = n(h.x), T = () => ({
      __html: zh.sanitize(F)
    });
    return /* @__PURE__ */ r.createElement(
      k,
      {
        width: 200,
        height: w,
        dx: h.dx,
        dy: h.dy,
        x: P,
        y: h.y,
        canEditLabel: h.edit.label || !1,
        canEditSubject: h.edit.subject && h.connectionType !== "none" || !1,
        onDragStart: () => l(!0),
        onDragEnd: (B) => {
          l(!1);
          let Y = [...A];
          if (h.x === n.invert(B.x) && h.y === B.y)
            Y[L] = { ...Y[L], dx: B.dx, dy: B.dy };
          else if (h.snapToNearestPoint) {
            let X = BE(
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
            Y[L] = { ...Y[L], x: n.invert(e(X.x)), y: t(X.y) };
          } else
            Y[L] = { ...Y[L], x: n.invert(B.x), y: B.y };
          b({
            ...d,
            annotations: Y
          });
        }
      },
      /* @__PURE__ */ r.createElement(Yy, { className: "annotation__desktop-label", showAnchorLine: !1, horizontalAnchor: HE(h, e, d), verticalAnchor: WE(h, e, d) }, /* @__PURE__ */ r.createElement(
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
          tabIndex: 0,
          "aria-label": `Annotation text that reads: ${h.text}`
        },
        ((_ = d == null ? void 0 : d.general) == null ? void 0 : _.showAnnotationDropdown) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { className: "annotation__has-dropdown-number", style: { margin: "2px 6px" } }, L + 1)),
        /* @__PURE__ */ r.createElement("div", { style: { fontSize: $h[d.fontSize] }, dangerouslySetInnerHTML: T() })
      )),
      h.connectionType === "line" && /* @__PURE__ */ r.createElement(sp, { type: "line", pathProps: { markerStart: `url(#marker-start--${L})` } }),
      h.connectionType === "elbow" && /* @__PURE__ */ r.createElement(sp, { type: "elbow", pathProps: { markerStart: `url(#marker-start--${L})` } }),
      h.connectionType === "curve" && /* @__PURE__ */ r.createElement(
        Nr,
        {
          d: `M ${P},${h.y}
                      Q ${P + h.dx / 2}, ${h.y + h.dy / 2 + Number(h == null ? void 0 : h.bezier) || 0} ${P + h.dx},${h.y + h.dy}`,
          stroke: "black",
          strokeWidth: "2",
          fill: "none",
          "marker-start": `url(#marker-start--${L})`
        }
      ),
      h.marker === "circle" && /* @__PURE__ */ r.createElement(Xy, { id: `marker-start--${L}`, className: "circle-subject", stroke: O(h.seriesKey), radius: 8 }),
      h.marker === "arrow" && /* @__PURE__ */ r.createElement(Mh, { fill: "black", id: `marker-start--${L}`, x: P, y: h.y, stroke: "#333", markerWidth: 10, size: 10, strokeWidth: 1, orient: "auto-start-reverse", markerUnits: "userSpaceOnUse" }),
      /* @__PURE__ */ r.createElement("circle", { fill: "white", cx: P + h.dx, cy: h.y + h.dy, r: 16, className: "annotation__mobile-label annotation__mobile-label-circle", stroke: O(h.seriesKey) }),
      /* @__PURE__ */ r.createElement("text", { height: 16, x: P + h.dx, y: h.y + h.dy, className: "annotation__mobile-label", alignmentBaseline: "middle", textAnchor: "middle" }, L + 1)
    );
  });
};
const UE = ({ useBootstrapVisibilityClasses: e = !0 }) => {
  const { config: t } = se.useContext(xt), n = t.annotations || [], a = () => {
    const l = ["annotation-list"];
    return e && l.push("d-block", "d-md-none"), l.join(" ");
  }, i = n.map((l, d) => {
    const f = l.text || "", u = () => ({
      __html: zh.sanitize(f)
    });
    return /* @__PURE__ */ r.createElement("li", { key: "annotation-li-item__annotationIndex" }, /* @__PURE__ */ r.createElement("div", { className: "annotation__title-wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "annotation__title-circle" }, d + 1), /* @__PURE__ */ r.createElement("p", { className: "annotation__subtext", dangerouslySetInnerHTML: u() })));
  });
  return /* @__PURE__ */ r.createElement("ul", { className: a() }, i);
};
const KE = () => {
  var u;
  const { currentViewport: e, config: t } = se.useContext(xt), [n, a] = se.useState(!1), i = ["sm", "xs", "xxs"].includes(e) ? "13px" : `${$h[t == null ? void 0 : t.fontSize]}px`;
  se.useContext(xt);
  const l = {
    maxHeight: t.table.limitHeight && `${t.table.height}px`,
    OverflowY: "scroll"
  }, d = () => {
    const m = ["data-table-heading", "annotation__dropdown-list"];
    return n || m.push("collapsed"), m.join(" ");
  }, f = () => {
    const m = ["data-table-container", e, "d-block", "d-lg-none"];
    return t.general.showAnnotationDropdown && (m.push("d-lg-block"), m.splice(m.indexOf("d-lg-none"), 1)), m.join(" ");
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
    /* @__PURE__ */ r.createElement(ot, { display: n ? "minus" : "plus", base: !0 }),
    t.general.annotationDropdownText === "" ? "Annotations" : (u = t == null ? void 0 : t.general) == null ? void 0 : u.annotationDropdownText
  ), n && /* @__PURE__ */ r.createElement("div", { className: "table-container annotation-dropdown__panel", style: l }, /* @__PURE__ */ r.createElement(qf.List, { useBootstrapVisibilityClasses: !1 }))));
}, qf = {
  Draggable: jE,
  // Mobile auto display
  List: UE,
  // Desktop Accessible Option
  Dropdown: KE
}, jr = (e) => {
  var Wn, ln, zn, $n, Vn, Dn;
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
    tableData: b,
    transformedData: A,
    updateConfig: w,
    isDraggingAnnotation: O
  } = se.useContext(xt), { visualizationType: k, visualizationSubType: h, orientation: L, xAxis: F, yAxis: P, runtime: T, debugSvg: _ } = n, B = () => Pc(n.visualizationType, A, n.allowLineToBarGraph);
  let [Y] = i;
  n && n.legend && !n.legend.hide && ((Wn = n.legend) == null ? void 0 : Wn.position) !== "bottom" && ["lg", "md"].includes(a) && (Y = Y * 0.73);
  const { horizontal: X } = n.heights, J = L === "horizontal" || n.visualizationType === "Forest Plot", re = !0, H = n.yAxis.type === "logarithmic", ae = isNaN(parseInt(T.xAxis.labelOffset)) ? 0 : parseInt(T.xAxis.labelOffset), j = isNaN(parseInt(T.yAxis.labelOffset)) ? 0 : parseInt(T.yAxis.labelOffset), te = isNaN(parseInt(T.xAxis.size)) ? 0 : parseInt(T.xAxis.size);
  let oe = n.aspectRatio ? Y * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[L];
  oe = Number(oe);
  const ne = Y - T.yAxis.size - (k === "Combo" ? n.yAxis.rightAxisSize : 0);
  let ee = oe - (L === "horizontal" ? 0 : te);
  oe += L === "horizontal" ? te : 0, n.visualizationType === "Forest Plot" && (oe = oe + n.data.length * n.forestPlot.rowHeight, ee = ee + n.data.length * n.forestPlot.rowHeight, Y = i[0]), (ln = n.brush) != null && ln.active && (oe = oe + ((zn = n.brush) == null ? void 0 : zn.height));
  const { minValue: G, maxValue: Z, existPositiveValue: K, isAllLine: V } = Rc(n, A), { visSupportsReactTooltip: we } = As(), { hasTopAxis: Se } = IE(n), [ce, Re] = se.useState(!1), [je, Je] = se.useState({ x: 0, y: 0 });
  se.useRef(null);
  const Oe = se.useRef(), he = se.useRef(), Fe = Vf(Oe, {
    freezeOnceVisible: !1
  }), le = (_e) => En(n.runtime.xAxis) ? x(_e[n.runtime.originalXAxis.dataKey]).getTime() : _e[n.runtime.originalXAxis.dataKey], ue = (_e, ht) => _e[ht], Ae = ($n = n.brush) != null && $n.active && ((Vn = t.data) != null && Vn.length) ? t.data.map((_e) => le(_e)) : A.map((_e) => le(_e)), $e = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", De = { data: A, tableData: b, config: n, minValue: G, maxValue: Z, isAllLine: V, existPositiveValue: K, xAxisDataMapped: Ae, xMax: ne, yMax: ee }, { min: Ze, max: qe, leftMax: yt, rightMax: nt } = Ay(De), { yScaleRight: Ve, hasRightAxis: ze } = Xf({ config: n, yMax: ee, data: A, updateConfig: w }), { xScale: Te, yScale: Ye, seriesScale: Qe, g1xScale: ft, g2xScale: bt, xScaleNoPadding: gt, xScaleBrush: Mt, xScaleAnnotation: Zt } = OE({ ...De, min: Ze, max: qe, leftMax: yt, rightMax: nt, dimensions: i }), [an, Ut] = se.useState(null);
  se.useEffect(() => {
    var _e;
    Ut((_e = he == null ? void 0 : he.current) == null ? void 0 : _e.getBoundingClientRect());
  }, [he, n.legend]);
  const Qt = (_e, ht) => {
    if (H && _e === 0.1 && (_e = 0), !(n.data && !n.data[ht] && k === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[ht][n.xAxis.dataKey] : En(T.yAxis) ? l(x(_e)) : L === "vertical" && qe - Ze < 3 ? d(_e, "left", re, !1, !1, "1") : L === "vertical" ? d(_e, "left", re) : _e;
  }, zt = (_e) => (H && _e === 0.1 && (_e = 0), En(T.xAxis) && n.visualizationType !== "Forest Plot" ? l(_e) : L === "horizontal" && n.visualizationType !== "Forest Plot" ? d(_e, "left", re) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? d(_e, "bottom", re) : n.visualizationType === "Forest Plot" ? d(_e, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : _e), un = (_e) => {
    let { numTicks: ht } = T[_e];
    T[_e].viewportNumTicks && T[_e].viewportNumTicks[a] && (ht = T[_e].viewportNumTicks[a]);
    let I;
    return _e === "yAxis" && (I = J && !ht ? A.length : J && ht ? ht : !J && !ht ? void 0 : !J && ht && ht, I === void 0 && !n.dataFormat.roundTo && (Number(qe) <= 3 ? I = 2 : I = 4), Number(I) > Number(qe) && (I = Number(Ze) < 0 ? Math.round(qe) * 2 : Math.round(qe))), _e === "xAxis" && (I = J && !ht ? void 0 : J && ht ? ht : !J && !ht ? void 0 : !J && ht && ht, J && I === void 0 && !n.dataFormat.roundTo && (qe <= 3 ? I = 2 : I = 4), n.visualizationType === "Forest Plot" && (I = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), I;
  }, { tooltipData: At, showTooltip: Rt, hideTooltip: kn, tooltipOpen: Ie, tooltipLeft: Et, tooltipTop: vn } = Zm(), {
    handleTooltipMouseOver: lt,
    handleTooltipClick: on,
    handleTooltipMouseOff: Xt,
    tooltipStyles: $t,
    TooltipListItem: Jt,
    getXValueFromCoordinateDate: wn,
    getXValueFromCoordinate: Tn
  } = ny({
    xScale: Te,
    yScale: Ye,
    showTooltip: Rt,
    hideTooltip: kn
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && Re((ht) => !0);
  }), se.useEffect(() => {
    (Fe == null ? void 0 : Fe.isIntersecting) === !0 && n.animate && setTimeout(() => {
      Re((_e) => !0);
    }, 500);
  }, [Fe == null ? void 0 : Fe.isIntersecting, n.animate]), se.useEffect(() => {
    qe && w({ ...n, yAxis: { ...n.yAxis, maxValue: qe } });
  }, [qe]);
  const Dt = () => {
    const { visualizationType: _e } = n;
    return _e === "Combo" && T.forecastingSeriesKeys > 0 || _e === "Area Chart" || _e === "Line" || _e === "Bar";
  }, Mn = Number(L === "horizontal" ? n.xAxis.size : n.yAxis.size), bn = { small: 16, medium: 18, large: 20 }, Bn = () => n.visualizationType === "Forest Plot" ? n.data.length : un("yAxis"), Kt = () => {
    let _e = n.xAxis.manualStep;
    return n.xAxis.viewportStepCount && n.xAxis.viewportStepCount[a] && (_e = n.xAxis.viewportStepCount[a]), _e;
  }, Hn = (_e) => {
    const ht = _e.currentTarget.getBoundingClientRect(), I = _e.clientX - ht.left, xe = _e.clientY - ht.top;
    Je({
      x: I,
      y: xe
    });
  }, Qn = () => {
    let _e = 40;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Iu, { top: ee, left: Number(T.yAxis.size), label: T.xAxis.label, tickFormat: En(T.xAxis) ? l : d, scale: ft, stroke: "#333", tickStroke: "#333", numTicks: T.xAxis.numTicks || void 0 }, (ht) => /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ht.ticks.map((I, xe) => {
      const Xe = I.index !== 0 ? n.yAxis.tickRotation : 0, Be = I.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", tt = f(I.value, `normal ${bn[n.fontSize]}px sans-serif`) * Math.sin(Xe * (Math.PI / 180)) + 25;
      return tt > _e && (_e = tt), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${I.value}-${xe}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ r.createElement(tn, { from: I.from, to: I.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: I.to.x, y: I.to.y, angle: -Xe, verticalAnchor: "start", textAnchor: Be }, d(I.value, "left")));
    }), !T.yAxis.hideAxis && /* @__PURE__ */ r.createElement(tn, { from: ht.axisFromPoint, to: ht.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      Iu,
      {
        top: ee,
        left: Number(T.yAxis.size),
        label: T.xAxis.label,
        tickFormat: En(T.xAxis) ? l : T.xAxis.dataKey !== "Year" ? d : (ht) => ht,
        scale: bt,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: T.xAxis.numTicks || void 0
      },
      (ht) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(at, { className: "bottom-axis" }, ht.ticks.map((I, xe) => {
        const Xe = I.index !== 0 ? n.yAxis.tickRotation : 0, Be = I.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", tt = f(I.value, `normal ${bn[n.fontSize]}px sans-serif`) * Math.sin(Xe * (Math.PI / 180)) + 25;
        return tt > _e && (_e = tt), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${I.value}-${xe}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ r.createElement(tn, { from: I.from, to: I.to, stroke: "#333" }), !T.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: I.to.x, y: I.to.y, angle: -Xe, verticalAnchor: "start", textAnchor: Be }, d(I.value, "left")));
      }), !T.yAxis.hideAxis && /* @__PURE__ */ r.createElement(tn, { from: ht.axisFromPoint, to: ht.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(St, { x: ne / 2, y: _e + 20 + ae, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, T.xAxis.label)), he.current ? he.current.setAttribute("height", Number(oe) + Number(_e) + (T.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(Y) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Or, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${Y}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: Hn,
      width: "100%",
      height: oe,
      className: `linear ${n.animate ? "animated" : ""} ${ce && n.animate ? "animate" : ""} ${_ && "debug"} ${O && "dragging-annotation"}`,
      role: "img",
      "aria-label": u(n),
      ref: he,
      style: { overflow: "visible" }
    },
    !O && /* @__PURE__ */ r.createElement(wr, { width: Y, height: oe, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && n.yAxis.type !== "categorical" && /* @__PURE__ */ r.createElement(JS, { scale: Ye, tickLength: H ? 6 : 8, left: Number(T.yAxis.size) - n.yAxis.axisPadding, label: T.yAxis.label || T.yAxis.label, stroke: "#333", tickFormat: (_e, ht) => Qt(_e, ht), numTicks: Bn() }, (_e) => {
      const ht = n.orientation === "horizontal" ? (_e.axisToPoint.y - _e.axisFromPoint.y) / 2 : (_e.axisFromPoint.y - _e.axisToPoint.y) / 2, I = ee / _e.ticks.length / 2 - ee / _e.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "left-axis" }, _e.ticks.map((xe, Xe) => {
        const Be = _e.ticks[0].to.y, pt = 15, tt = String(xe.value).startsWith("1") || xe.value === 0.1 ? "block" : "none", kt = tt === "block" ? 7 : 0, Nt = { x: xe.to.x - kt, y: xe.to.y }, Ue = xe.index !== 0 || n.xAxis.hideAxis;
        return /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${xe.value}-${Xe}`, className: "vx-axis-tick" }, !T.yAxis.hideTicks && /* @__PURE__ */ r.createElement(tn, { key: `${xe.value}--hide-hideTicks`, from: xe.from, to: H ? Nt : xe.to, stroke: n.yAxis.tickColor, display: L === "horizontal" ? "none" : "block" }), T.yAxis.gridLines && Ue ? /* @__PURE__ */ r.createElement(tn, { key: `${xe.value}--hide-hideGridLines`, display: (H && tt).toString(), from: { x: xe.from.x + ne, y: xe.from.y }, to: xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", L === "horizontal" && h !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            transform: `translate(${xe.to.x - 5}, ${n.isLollipopChart ? xe.to.y - Be : xe.to.y - Be + (Number(n.barHeight * n.series.length) - pt) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          xe.formattedValue
        ), L === "horizontal" && h === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${xe.to.x - 5}, ${xe.to.y - Be + (Number(n.barHeight) - pt) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, xe.formattedValue), L === "horizontal" && k === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${xe.to.x - 5}, ${xe.to.y - Be + Number(n.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, xe.formattedValue), L === "horizontal" && k === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${xe.to.x - 5}, ${n.isLollipopChart ? xe.to.y - Be + 2 : xe.to.y - Be + Number(n.barHeight) / 2}) rotate(-${T.horizontal ? T.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, xe.formattedValue), L === "vertical" && k !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            display: H ? tt : "block",
            dx: H ? -6 : 0,
            x: n.runtime.horizontal ? xe.from.x + 2 : xe.to.x,
            y: xe.to.y + (n.runtime.horizontal ? I : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          xe.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ r.createElement(tn, { from: _e.axisFromPoint, to: T.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? oe : Number(X) } : _e.axisToPoint, stroke: "#000" }), Ye.domain()[0] < 0 && /* @__PURE__ */ r.createElement(tn, { from: { x: _e.axisFromPoint.x, y: Ye(0) }, to: { x: ne, y: Ye(0) }, stroke: "#333" }), k === "Bar" && L === "horizontal" && Te.domain()[0] < 0 && /* @__PURE__ */ r.createElement(tn, { from: { x: Te(0), y: 0 }, to: { x: Te(0), y: ee }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * T.yAxis.size + j}, ${ht}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, _e.label));
    }),
    n.yAxis.type === "categorical" && n.orientation === "vertical" && /* @__PURE__ */ r.createElement(NE, { max: qe, maxValue: Z, height: oe, xMax: ne, yMax: ee, leftSize: Number(T.yAxis.size) - n.yAxis.axisPadding }),
    ze && /* @__PURE__ */ r.createElement(rE, { scale: Ve, left: Number(Y - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (_e) => d(_e, "right"), numTicks: T.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (_e) => {
      const ht = n.orientation === "horizontal" ? (_e.axisToPoint.y - _e.axisFromPoint.y) / 2 : (_e.axisFromPoint.y - _e.axisToPoint.y) / 2, I = ee / _e.ticks.length / 2 - ee / _e.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(at, { className: "right-axis" }, _e.ticks.map((xe, Xe) => /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${xe.value}-${Xe}`, className: "vx-axis-tick" }, !T.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(tn, { from: xe.from, to: xe.to, display: T.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), T.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(tn, { from: { x: xe.from.x + ne, y: xe.from.y }, to: xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(St, { x: xe.to.x, y: xe.to.y + (T.horizontal ? I : 0), verticalAnchor: T.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, xe.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(tn, { from: _e.axisFromPoint, to: _e.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${ht}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, _e.label));
    }),
    Se && n.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      lE,
      {
        stroke: "#333",
        left: Number(T.yAxis.size),
        scale: Te,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Iu,
      {
        top: T.horizontal && n.visualizationType !== "Forest Plot" ? Number(X) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? ee + Number(n.xAxis.axisPadding) : ee,
        left: n.visualizationType !== "Forest Plot" ? Number(T.yAxis.size) : 0,
        label: n[$e].label,
        tickFormat: zt,
        scale: Te,
        stroke: "#333",
        numTicks: un("xAxis"),
        tickStroke: "#333",
        tickValues: n.xAxis.manual ? FE(Ae, Te, n.xAxis.type === "date-time" ? un("xAxis") : Kt()) : void 0
      },
      (_e) => {
        const ht = n.visualizationType !== "Forest Plot" ? (_e.axisToPoint.x - _e.axisFromPoint.x) / 2 : i[0] / 2, I = (st) => /\s/.test(st), xe = _e.ticks.some((st) => I(st.value)), Xe = 8, Be = Math.max(..._e.ticks.map((st) => f(st.formattedValue, `normal ${bn[n.fontSize]}px sans-serif`))), pt = xe ? 180 : 100, tt = _e.ticks.map((st) => f(st.formattedValue, `normal ${bn[n.fontSize]}px sans-serif`)), kt = tt.reduce((st, wt) => st + wt, pt), Nt = (ne - kt) / (_e.ticks.length - 1);
        let Ue = [0];
        for (let st = 1; st < tt.length; st++)
          Ue[st] = Ue[st - 1] + tt[st - 1] + Nt;
        let Ot = !1;
        tt.forEach((st, wt) => {
          if (Ue[wt] + tt[wt] > Ue[wt + 1]) {
            Ot = !0;
            return;
          }
        });
        const Vt = Ot && n.isResponsiveTicks ? Be + Xe + 20 : 0;
        Number(n.xAxis.tickRotation) > 0 && Number(n.xAxis.tickRotation), n.dynamicMarginTop = Vt, n.xAxis.tickWidthMax = Be;
        let Ft = 40;
        const nn = /* @__PURE__ */ r.createElement(at, { className: "bottom-axis", width: i[0] }, _e.ticks.map((st, wt, It) => {
          const Wt = String(st.value).startsWith("1") || st.value === 0.1 ? "block" : "none", yn = Wt === "block" ? 16 : Xe, _n = { x: st.to.x, y: yn }, pn = f(st.formattedValue, `normal ${bn[n.fontSize]}px sans-serif`), hn = 100 / It.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const sn = n.isResponsiveTicks && Ot ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation), qt = pn * Math.sin(sn * -1 * (Math.PI / 180)) + 25;
          return qt > Ft && (Ft = qt), /* @__PURE__ */ r.createElement(at, { key: `vx-tick-${st.value}-${wt}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ r.createElement(tn, { from: st.from, to: L === "horizontal" && H ? _n : st.to, stroke: n.xAxis.tickColor, strokeWidth: Wt === "block" && H ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            St,
            {
              dy: n.orientation === "horizontal" && H ? 8 : 0,
              display: n.orientation === "horizontal" && H ? Wt : "block",
              x: st.to.x,
              y: st.to.y,
              angle: sn,
              verticalAnchor: sn < -50 ? "middle" : "start",
              textAnchor: sn ? "end" : "middle",
              width: Ot && !n.isResponsiveTicks && !Number(n[$e].tickRotation) ? hn : void 0,
              fill: n.xAxis.tickLabelColor
            },
            st.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ r.createElement(tn, { from: _e.axisFromPoint, to: _e.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { x: ht, y: Ft + 20 + ae, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: n.xAxis.labelColor }, _e.label));
        return he.current && he.current.setAttribute("height", Number(oe) + Number(Ft) + (T.xAxis.label ? 50 : 0) + "px"), nn;
      }
    ),
    k === "Paired Bar" && Qn(),
    k === "Deviation Bar" && ((Dn = n.series) == null ? void 0 : Dn.length) === 1 && /* @__PURE__ */ r.createElement(EE, { animatedChart: ce, xScale: Te, yScale: Ye, width: ne, height: ee }),
    k === "Paired Bar" && /* @__PURE__ */ r.createElement(_E, { originalWidth: Y, width: ne, height: ee }),
    k === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      SE,
      {
        xScale: Te,
        yScale: Ye,
        getXAxisData: le,
        getYAxisData: ue,
        xMax: ne,
        yMax: ee,
        handleTooltipMouseOver: lt,
        handleTooltipMouseOff: Xt,
        handleTooltipClick: on,
        tooltipData: At,
        showTooltip: Rt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ r.createElement(bE, { xScale: Te, yScale: Ye }),
    (k === "Area Chart" && n.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ r.createElement(fE, { xScale: Te, yScale: Ye, yMax: ee, xMax: ne, chartRef: he, width: ne, height: ee, handleTooltipMouseOver: lt, handleTooltipMouseOff: Xt, tooltipData: At, showTooltip: Rt }),
    (k === "Area Chart" && n.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ r.createElement(hE, { xScale: Te, yScale: Ye, yMax: ee, xMax: ne, chartRef: he, width: ne, height: ee, handleTooltipMouseOver: lt, handleTooltipMouseOff: Xt, tooltipData: At, showTooltip: Rt }),
    (k === "Bar" || k === "Combo" || B()) && /* @__PURE__ */ r.createElement(
      xE,
      {
        xScale: Te,
        yScale: Ye,
        seriesScale: Qe,
        xMax: ne,
        yMax: ee,
        getXAxisData: le,
        getYAxisData: ue,
        animatedChart: ce,
        visible: ce,
        handleTooltipMouseOver: lt,
        handleTooltipMouseOff: Xt,
        handleTooltipClick: on,
        tooltipData: At,
        showTooltip: Rt,
        chartRef: he
      }
    ),
    (k === "Line" && !B() || k === "Combo") && /* @__PURE__ */ r.createElement(
      Dh,
      {
        xScale: Te,
        yScale: Ye,
        getXAxisData: le,
        getYAxisData: ue,
        xMax: ne,
        yMax: ee,
        seriesStyle: n.series,
        handleTooltipMouseOver: lt,
        handleTooltipMouseOff: Xt,
        handleTooltipClick: on,
        tooltipData: At,
        showTooltip: Rt,
        chartRef: he
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ r.createElement(
      wE,
      {
        showTooltip: Rt,
        tooltipData: At,
        xScale: Te,
        yScale: Ye,
        width: ne,
        le: !0,
        height: ee,
        xScaleNoPadding: gt,
        chartRef: he,
        getXValueFromCoordinate: Tn,
        handleTooltipMouseOver: lt,
        handleTooltipMouseOff: Xt,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((_e) => /* @__PURE__ */ r.createElement(tn, { strokeDasharray: m(_e.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: Ye(_e.value) }, to: { x: ne, y: Ye(_e.value) }, display: T.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ r.createElement(
      DE,
      {
        xScale: Te,
        yScale: Ye,
        seriesScale: Qe,
        width: Y,
        height: oe,
        getXAxisData: le,
        getYAxisData: ue,
        animatedChart: ce,
        visible: ce,
        handleTooltipMouseOver: lt,
        handleTooltipMouseOff: Xt,
        handleTooltipClick: on,
        tooltipData: At,
        showTooltip: Rt,
        chartRef: he,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !B() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dh, { xScale: Te, yScale: Ye, getXAxisData: le, getYAxisData: ue, xMax: ne, yMax: ee, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((_e, ht) => {
      let I = Ye(_e.value);
      if (!_e.value)
        return;
      const xe = L === "horizontal" && k === "Bar" ? n.barHeight / 4 : 0;
      if (I)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            tn,
            {
              key: `yAxis-${_e.value}--${ht}`,
              strokeDasharray: m(_e.lineStyle),
              stroke: _e.color ? _e.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + Mn, y: I - xe },
              to: { x: Y - n.yAxis.rightAxisSize, y: I - xe }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((_e, ht) => {
      let I = F;
      L === "horizontal" && (I = P);
      let xe = En(I) ? Te(x(_e.value, !1)) : Te(_e.value);
      if (xe)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            tn,
            {
              key: `xAxis-${_e.value}--${ht}`,
              strokeDasharray: m(_e.lineStyle),
              stroke: _e.color ? _e.color : "rgba(0,0,0,1)",
              fill: _e.color ? _e.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(xe) + Number(Mn), y: 0 },
              to: { x: Number(xe) + Number(Mn), y: ee }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(Yf, { xScale: Te, handleTooltipClick: on, handleTooltipMouseOff: Xt, handleTooltipMouseOver: lt, showTooltip: Rt, hideTooltip: kn, tooltipData: At, yMax: ee, width: Y }),
    Dt && Rt && At && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(tn, { from: { x: At.dataXPosition - 10, y: 0 }, to: { x: At.dataXPosition - 10, y: ee }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Dt && Rt && At && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(tn, { from: { x: 0, y: At.dataYPosition }, to: { x: ne, y: At.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && A.length === 0 && /* @__PURE__ */ r.createElement(St, { x: Number(n.yAxis.size) + Number(ne / 2), y: oe / 2 - n.xAxis.padding / 2, textAnchor: "middle" }, n.chartMessage.noData),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(tn, { from: { x: 0, y: je.y }, to: { x: ne, y: je.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(at, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(tn, { from: { x: je.x, y: 0 }, to: { x: je.x, y: ee }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    /* @__PURE__ */ r.createElement(at, { left: Number(n.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(qf.Draggable, { xScale: Te, yScale: Ye, xScaleAnnotation: Zt, xMax: ne, svgRef: he, onDragStateChange: y }))
  ), !O && At && Object.entries(At.data).length > 0 && Ie && Rt && At.dataYPosition && At.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ r.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ r.createElement(ty, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Et, top: vn }, /* @__PURE__ */ r.createElement("ul", null, typeof At == "object" && Object.entries(At.data).map((_e, ht) => /* @__PURE__ */ r.createElement(Jt, { item: _e, key: ht }))))), we() && !O && /* @__PURE__ */ r.createElement(wy, { id: `cdc-open-viz-tooltip-${T.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Oe })));
};
const YE = (e) => {
  var re;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: l, formatDate: d, seriesHighlight: f, formatNumber: u, colorScale: m, handleChartAriaLabels: y } = se.useContext(xt);
  let x = Number(t);
  const { minValue: b, maxValue: A } = Rc(i, a), w = { top: 5, right: 10, bottom: 10, left: 10 }, O = Number(n), k = x - i.runtime.yAxis.size, h = O - w.top - 20, L = (H) => i.runtime.xAxis.type === "date" ? l(H[i.runtime.originalXAxis.dataKey]).getTime() : H[i.runtime.originalXAxis.dataKey], F = (H, ae) => H[ae];
  let P, T;
  const { max: _, min: B } = i.runtime.yAxis, Y = Number(_) >= Number(A), X = Number(B) <= Number(b);
  if (a) {
    let H = Number(B && X ? B : b), ae = Number(_ && Y ? _ : Number.MIN_VALUE);
    if (ae === Number.MIN_VALUE && (ae = A), i.runtime.yAxis.paddingPercent) {
      let te = (ae - H) * i.runtime.yAxis.paddingPercent;
      H -= te, ae += te;
    }
    let j = a.map((te) => L(te));
    i.runtime.horizontal ? (P = Fn({
      domain: [H, ae],
      range: [0, k]
    }), T = i.runtime.xAxis.type === "date" ? Fn({ domain: [Math.min(...j), Math.max(...j)] }) : Wo({ domain: j, padding: 0.5 }), Wo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, h]
    }), T.rangeRound([0, h])) : (H = H < 0 ? H * 1.11 : H, T = Fn({
      domain: [H, ae],
      range: [h - w.bottom, w.top]
    }), P = Wo({
      domain: j,
      range: [w.left, x - w.right]
    }), Wo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, k]
    }));
  }
  const J = [P.domain()[0], P.domain()[P.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Or, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": y(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Spark line graphic with the title ${i.title ? i.title : "No Title Found"}`), ((re = i.runtime.lineSeriesKeys) == null ? void 0 : re.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((H, ae) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    at,
    {
      style: { width: x },
      className: "sparkline-group",
      key: `series-${H}`,
      opacity: i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(H) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(H) !== -1 ? "block" : "none"
    },
    a.map((j, te) => /* @__PURE__ */ r.createElement(at, { key: `series-${H}-point-${te}` }, /* @__PURE__ */ r.createElement(St, { display: i.labels ? "block" : "none", x: P(L(j)), y: T(F(j, H)), fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[H] : H) : "#000", textAnchor: "middle" }, u(j[H])))),
    /* @__PURE__ */ r.createElement(
      Nr,
      {
        curve: Ec,
        data: a,
        x: (j) => P(L(j)),
        y: (j) => T(F(j, H)),
        stroke: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[H] : H) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${ae})`
      }
    ),
    /* @__PURE__ */ r.createElement(Mh, { id: `arrow--${ae}`, refX: 2, size: 6, markerEnd: `url(#arrow--${ae})`, strokeOpacity: 1, fillOpacity: 1, fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[H] : H) : "#000" })
  ), /* @__PURE__ */ r.createElement(
    Iu,
    {
      top: h + w.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: P,
      tickValues: J,
      tickFormat: (j) => i.xAxis.type === "date" ? d(j) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, XE = se.forwardRef((e, t) => {
  const {
    config: n,
    colorScale: a,
    seriesHighlight: i,
    highlight: l,
    tableData: d,
    highlightReset: f,
    transformedData: u,
    currentViewport: m
  } = se.useContext(xt);
  if (!n.legend)
    return null;
  const y = cy(n, d, u, a);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ r.createElement(uy, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: a, seriesHighlight: i, highlight: l, highlightReset: f, currentViewport: m, formatLabels: y });
}), Ud = {
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
    showMissingDataLine: !0,
    categories: []
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
}, Hu = (e) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ se.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), qE = ({ name: e }) => {
  var f, u, m, y, x;
  const { config: t, rawData: n, updateConfig: a } = se.useContext(xt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (b) => {
    b.orientation === "horizontal" && (b.labels = !1), b.table.show === void 0 && (b.table.show = !isDashboard), b.visualizationType === "Combo" && (b.orientation = "vertical");
  }, l = (b = !0) => {
    let A = {};
    return n.forEach((w) => {
      Object.keys(w).forEach((O) => A[O] = !0);
    }), b && Object.keys(A).forEach((w) => {
      (t.series && t.series.filter((O) => O.dataKey === w).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(w)) && delete A[w];
    }), Object.keys(A);
  }, d = (b, A, w, O) => {
    if (b === "boxplot" && A === "legend") {
      a({
        ...t,
        [b]: {
          ...t[b],
          [A]: {
            ...t.boxplot[A],
            [w]: O
          }
        }
      });
      return;
    }
    if (b === "boxplot" && A === "labels") {
      a({
        ...t,
        [b]: {
          ...t[b],
          [A]: {
            ...t.boxplot[A],
            [w]: O
          }
        }
      });
      return;
    }
    if (b === "forestPlot" && A) {
      let F = {
        ...t,
        [b]: {
          ...t[b],
          [A]: {
            ...t.forestPlot[A],
            [w]: O
          }
        }
      };
      a(F);
      return;
    }
    if (b === "columns" && A !== "" && w !== "") {
      a({
        ...t,
        [b]: {
          ...t[b],
          [A]: {
            ...t[b][A],
            [w]: O
          }
        }
      });
      return;
    }
    if (b === null && A === null) {
      let F = { ...t, [w]: O };
      i(F), a(F);
      return;
    }
    const k = Array.isArray(t[b]);
    let h = k ? [...t[b], O] : { ...t[b], [w]: O };
    A !== null && (k ? (h = [...t[b]], h[A] = { ...h[A], [w]: O }) : typeof O == "string" ? h[A] = O : h = { ...t[b], [A]: { ...t[b][A], [w]: O } });
    let L = { ...t, [b]: h };
    i(L), a(L);
  };
  return /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: d,
      options: l(!1),
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: b.target.value
          }
        }), b.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((f = t.forestPlot) == null ? void 0 : f.title) || "", updateField: d, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: b.target.value
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: b.target.value
          }
        }), b.target.value = "";
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
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: b.target.value
          }
        }), b.target.value = "";
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
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: b.target.value
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: b.target.value
            }
          }
        }), b.target.value = "";
      }
    }
  ))), /* @__PURE__ */ r.createElement(ct, { value: ((m = (u = t.forestPlot) == null ? void 0 : u.lineOfNoEffect) == null ? void 0 : m.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: d }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: b.target.value
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
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: b.target.value
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
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: b.target.value
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
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: b.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement(et, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: d, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: d, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((x = t.forestPlot) == null ? void 0 : x.rightLabel) || "", updateField: d, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (b) => {
        b.target.value !== "" && b.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: b.target.value
            }
          }
        }), b.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ r.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(b.target.value)
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
      onChange: (b) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(b.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, Qo = r.createContext({}), GE = (e) => {
  const { updateConfig: t, config: n, rawData: a } = se.useContext(xt), { getColumns: i, selectComponent: l } = e, d = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], f = (u, m, y) => {
    let x = [...n.series];
    if (x[u][y] = m, y === "type" && m === "Bar" && (x[u].axis = "Left"), x[u].type === "Forecasting") {
      let b = Array.from(new Set(a.map((w) => w[x[u].dataKey]))), A = [];
      b.forEach((w) => {
        A.push({ key: w });
      }), x[u].stages = A, x[u].stageColumn = x[u].dataKey;
    }
    t({ ...n, series: x });
  };
  return /* @__PURE__ */ r.createElement(Qo.Provider, { value: { updateSeries: f, supportedRightAxisTypes: d, getColumns: i, selectComponent: l } }, e.children);
}, ZE = (e) => {
  const { config: t, updateConfig: n } = se.useContext(xt), { series: a, index: i } = e;
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
  return Object.keys(Vu).map((u) => f.push(Vu[u])), /* @__PURE__ */ r.createElement(
    za,
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
}, QE = (e) => {
  const { config: t } = se.useContext(xt), { updateSeries: n } = se.useContext(Qo), { index: a, series: i } = e, l = () => {
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
      za,
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
}, JE = (e) => {
  const { config: t, updateConfig: n, rawData: a } = se.useContext(xt), { updateSeries: i, getColumns: l } = se.useContext(Qo), { index: d, series: f } = e;
  return /* @__PURE__ */ r.createElement(
    za,
    {
      initial: "Select an option",
      value: f.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (u) => {
        let m = [], y = new Set(a == null ? void 0 : a.map((b) => b[u.target.value]));
        y = Array.from(y), y = y.filter((b) => b !== void 0), y.forEach((b) => m.push({ key: b }));
        const x = [...t.series];
        x[d] = { ...x[d], stages: m, stageColumn: u.target.value }, n({
          ...t,
          series: x
        });
      },
      options: l(!1)
    }
  );
}, ek = (e) => {
  const { config: t, rawData: n } = se.useContext(xt), { updateSeries: a } = se.useContext(Qo), { index: i, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let d = new Set(n.map((f) => f[l.stageColumn]));
  return d = Array.from(d), d = d.filter((f) => f !== void 0), /* @__PURE__ */ r.createElement(
    za,
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
}, tk = (e) => {
  const { config: t } = se.useContext(xt), { updateSeries: n, supportedRightAxisTypes: a } = se.useContext(Qo), { index: i, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ r.createElement(
      za,
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
}, nk = (e) => {
  var l;
  const { config: t, updateConfig: n } = se.useContext(xt), { index: a, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (l = i == null ? void 0 : i.stages) == null ? void 0 : l.map((d, f) => {
      var u, m, y, x;
      return /* @__PURE__ */ r.createElement(
        za,
        {
          key: `${d}--${f}`,
          initial: "Select an option",
          value: (m = (u = t.series) == null ? void 0 : u[a].stages) != null && m[f].color ? (x = (y = t.series) == null ? void 0 : y[a].stages) == null ? void 0 : x[f].color : "Select",
          label: `${d.key} Series Color`,
          onChange: (b) => {
            const A = [...t.series], w = A[a].stages;
            w[f].color = b.target.value, A[a] = { ...A[a], stages: w }, n({
              ...t,
              series: A
            });
          },
          options: Object.keys(Wu)
        }
      );
    });
}, rk = (e) => {
  var d;
  const { config: t, updateConfig: n } = se.useContext(xt), { series: a, index: i } = e, { getColumns: l } = se.useContext(Qo);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, (d = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : d.map((f, u) => {
      const m = f.showInTooltip ? f.showInTooltip : !1, y = (x, b, A) => {
        x.preventDefault();
        let w = [...t.series];
        w[b].confidenceIntervals[A].showInTooltip = !m, n({
          ...t,
          series: w
        });
      };
      return /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart", key: `${u}` }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Pn, { className: "accordion__button accordion__button" }, "Group ", u + 1, /* @__PURE__ */ r.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (x) => {
            x.preventDefault();
            const b = [...t.series[i].confidenceIntervals];
            b.splice(u, 1);
            const A = [...t.series];
            A[i] = { ...A[i], confidenceIntervals: [...b] }, n({
              ...t,
              series: A
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (x) => y(x, i, u) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, m && /* @__PURE__ */ r.createElement(Yh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: m || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        za,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[u].low ? t.series[i].confidenceIntervals[u].low : "Select",
          label: "Low Confidence Interval",
          onChange: (x) => {
            const b = [...t.series[i].confidenceIntervals];
            b[u].low = x.target.value;
            const A = [...t.series];
            A[i] = { ...A[i], confidenceIntervals: b }, n({
              ...t,
              series: A
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ r.createElement(
        za,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[u].high ? t.series[i].confidenceIntervals[u].high : "Select",
          label: "High Confidence Interval",
          onChange: (x) => {
            const b = [...t.series[i].confidenceIntervals];
            b[u].high = x.target.value;
            const A = [...t.series];
            A[i] = { ...A[i], confidenceIntervals: b }, n({
              ...t,
              series: A
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
}, ak = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = se.useContext(xt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const d = (f, u, m, y) => {
    let x = [...a.series], b = { ...a.runtime.seriesLabels };
    x[f].weight = u && Math.max(Number(m), Math.min(Number(y), Number(u))), b[x[f].dataKey] = x[f].weight ? x[f].weight : x[f].dataKey;
    const A = {
      ...a,
      series: x,
      runtime: {
        ...a.runtime,
        seriesLabels: b
      }
    };
    i(A);
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
}, ik = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = se.useContext(xt);
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
}, ok = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = se.useContext(xt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(a.visualizationType))
    return;
  const l = (d) => {
    let f = [...a.series];
    f[d].tooltip && f[d].tooltip, f[d].tooltip = !f[d].tooltip, i({
      ...a,
      series: f
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (d) => l(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Yh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, lk = (e) => {
  const { config: t, updateConfig: n } = se.useContext(xt), { series: a, index: i } = e, l = (f) => {
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
}, Ly = (e) => {
  const { config: t } = se.useContext(xt), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: l, index: d } = e;
  return /* @__PURE__ */ r.createElement(Ny, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: d }, (f, u) => /* @__PURE__ */ r.createElement("div", { key: d, className: u.isDragging ? "currently-dragging" : "", style: a(u.isDragging, f.draggableProps.style, i), ref: f.innerRef, ...f.draggableProps, ...f.dragHandleProps }, /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(Pn, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(ot, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Ur.Button.Remove, { series: n, index: d }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Ur.Input.Name, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Input.Weight, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.SeriesType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.AxisPosition, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.LineType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ForecastingColor, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ConfidenceInterval, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Checkbox.DisplayInTooltip, { series: n, index: d }))))));
}, sk = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((l, d) => /* @__PURE__ */ r.createElement(Ly, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: l, index: d, key: `series-list-${d}` }));
}, Ur = {
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
  Item: Ly,
  List: sk
}, uk = se.memo(({ config: e, updateConfig: t }) => {
  let n = (u, m, y) => {
    let x = [];
    e.regions && (x = [...e.regions]), x[y][u] = m, t({ ...e, regions: x });
  }, a = (u, m, y, x, b) => n(y, x, b), i = (u) => {
    let m = [];
    e.regions && (m = [...e.regions]), m.splice(u, 1), t({ ...e, regions: m });
  }, l = () => {
    let u = [];
    e.regions && (u = [...e.regions]), u.push({}), t({ ...e, regions: u });
  };
  const d = ["Fixed", "Previous Days"], f = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: u, color: m, from: y, to: x, background: b, range: A = "Custom" }, w) => {
    var O;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${w}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (k) => {
          k.preventDefault(), i(w);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(et, { value: u, label: "Region Label", fieldName: "label", i: w, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(et, { value: m, label: "Text Color", fieldName: "color", updateField: (k, h, L, F) => n(L, F, w) }), /* @__PURE__ */ r.createElement(et, { value: b, label: "Background", fieldName: "background", updateField: (k, h, L, F) => n(L, F, w) })), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[w].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (k) => {
          if (k.target.value !== "" && k.target.value !== "Select") {
            const h = [...e.regions];
            h[w].fromType = k.target.value, t({
              ...e,
              regions: h
            });
          }
          k.target.value = "";
        },
        options: d
      }
    ), (e.regions[w].fromType === "Fixed" || e.regions[w].fromType === "Previous Days" || !e.regions[w].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      et,
      {
        value: y,
        label: e.regions[w].fromType === "Fixed" || !((O = e.regions[w]) != null && O.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (k, h, L, F) => n(L, F, w),
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Lt,
      {
        value: e.regions[w].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (k) => {
          if (k.target.value !== "" && k.target.value !== "Select") {
            const h = [...e.regions];
            h[w].toType = k.target.value, t({
              ...e,
              regions: h
            });
          }
          k.target.value = "";
        },
        options: f
      }
    ), (e.regions[w].toType === "Fixed" || !e.regions[w].toType) && /* @__PURE__ */ r.createElement(et, { value: x, label: "To Value", fieldName: "to", updateField: (k, h, L, F) => n(L, F, w) }));
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
  const { visSupportsRegions: t } = As(), { config: n, updateConfig: a } = se.useContext(xt);
  return t() ? /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, e)), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(uk, { config: n, updateConfig: a }))) : null;
}, Gf = se.createContext(null), Zf = () => {
  const e = se.useContext(Gf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, dk = (e) => {
  const { config: t } = se.useContext(xt), { updateField: n } = Zf(), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: d, visSupportsChartHeight: f, visSupportsSuperTitle: u, visSupportsFootnotes: m } = As(), { visualizationType: y, visualizationSubType: x, barStyle: b } = t, A = () => (y === "Bar" || y === "Deviation Bar") && x !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(An, null, " ", /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "General")), /* @__PURE__ */ r.createElement(Rn, null, (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ r.createElement(Lt, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), f() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(
    et,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "For some visualization types, such as the sankey diagram, it may be necessary to adjust to chart height for optimal display.")))
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ r.createElement(Lt, { value: x || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), y === "Area Chart" && x === "stacked" && /* @__PURE__ */ r.createElement(Lt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Vu) }), y === "Bar" && /* @__PURE__ */ r.createElement(Lt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ r.createElement(Lt, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: t.isLollipopChart ? "lollipop" : b || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: n,
      options: A(),
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && b === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && b === "rounded" && /* @__PURE__ */ r.createElement(Lt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Lt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(ct, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : d() && /* @__PURE__ */ r.createElement(
    ct,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ct,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will display 'N/A' on the Date/Category Axis, in the tooltip hover, and in the data table to indicate missing or undefined data values."))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    ct,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    ct,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will display the 'suppressed data symbol' on the Date/Category Axis, in the tooltip hover, and in the data table where suppressed data values are indicated in the Data Series"))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: n
    }
  )), y === "Pie" && /* @__PURE__ */ r.createElement(Lt, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ r.createElement(
    ct,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(ct, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), u() && /* @__PURE__ */ r.createElement(
    et,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), m() && /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, fk = (e) => {
  const { config: t } = se.useContext(xt), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = Zf();
  return /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, e.name)), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, pk = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(ms).filter((d) => l ? d.endsWith("reverse") : !d.endsWith("reverse"));
  } else {
    const l = [], d = [];
    for (const f in or) {
      const u = f.startsWith("sequential"), m = f.startsWith("qualitative"), y = f.endsWith("reverse");
      u && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && l.push(f), m && (!e.isPaletteReversed && !y || e.isPaletteReversed && y) && d.push(f);
    }
    a = l, i = d;
  }
  return se.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), se.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: i };
}, hk = (e) => {
  var Y;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = se.useContext(xt), { visual: l } = t, { setLollipopShape: d, updateField: f } = Zf(), { visHasBarBorders: u, visCanAnimate: m, visSupportsNonSequentialPallete: y, headerColors: x, visSupportsTooltipOpacity: b, visSupportsTooltipLines: A, visSupportsBarSpace: w, visSupportsBarThickness: O, visHasDataCutoff: k, visSupportsSequentialPallete: h, visSupportsReverseColorPalette: L, visHasSingleSeriesTooltip: F } = As(), { twoColorPalettes: P, sequential: T, nonSequential: _ } = pk(t, n), B = (X, J) => {
    if (console.log("value", J), X === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: J
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [X]: {
            ...t.sankey[X],
            default: J
          }
        }
      });
  };
  return /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Visual")), /* @__PURE__ */ r.createElement(Rn, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (X) => {
        d(X.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: f, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: f, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Lt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: f, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(ct, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: f })), /* @__PURE__ */ r.createElement(Lt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: f, options: ["small", "medium", "large"] }), u() && /* @__PURE__ */ r.createElement(Lt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: f, options: ["true", "false"] }), m() && /* @__PURE__ */ r.createElement(ct, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: f }), (((Y = t.series) == null ? void 0 : Y.some((X) => X.type === "Line" || X.type === "dashed-lg" || X.type === "dashed-sm" || X.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: f, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Lt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: f, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, x.map((X) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: X,
      key: X,
      onClick: (J) => {
        J.preventDefault(), n({ ...t, theme: X });
      },
      className: t.theme === X ? "selected " + X : X
    }
  )))), (y() || y()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), L() && /* @__PURE__ */ r.createElement(up, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.isPaletteReversed }), h() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, T.map((X) => {
    const J = {
      backgroundColor: a[X][2]
    }, re = {
      backgroundColor: a[X][3]
    }, H = {
      backgroundColor: a[X][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: X,
        key: X,
        onClick: (ae) => {
          ae.preventDefault(), n({ ...t, palette: X });
        },
        className: t.palette === X ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: J }),
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: H })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, _.map((X) => {
    const J = {
      backgroundColor: a[X][2]
    }, re = {
      backgroundColor: a[X][4]
    }, H = {
      backgroundColor: a[X][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: X,
        key: X,
        onClick: (ae) => {
          ae.preventDefault(), n({ ...t, palette: X });
        },
        className: t.palette === X ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: J }),
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: H })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (X) => B("nodeColor", X.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (X) => B("storyNodeFontColor", X.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (X) => B("linkColor", X.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(up, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, P.map((X) => {
    const J = {
      backgroundColor: i[X][0]
    }, re = {
      backgroundColor: i[X][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: X,
        key: X,
        onClick: (H) => {
          H.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: X } });
        },
        className: t.twoColor.palette === X ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: J }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: re })
    );
  }))), k() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    et,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: f,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), O() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(et, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: f, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(et, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: f }), w() && /* @__PURE__ */ r.createElement(et, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: f, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(ct, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: f }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(ct, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(ct, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: f }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(ct, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: f }), A() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ct, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: f }), /* @__PURE__ */ r.createElement(ct, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: f })), b() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (X) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: X.target.value
        }
      })
    }
  )), F() && /* @__PURE__ */ r.createElement(ct, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: f }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (X) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: X.target.value
        }
      })
    }
  ))));
}, mk = () => {
  var f, u, m, y;
  const { config: e, updateConfig: t } = se.useContext(xt), n = (f = e.data) == null ? void 0 : f[0], { updateField: a } = se.useContext(Gf);
  if (e.visualizationType !== "Sankey")
    return;
  const i = (x, b, A) => {
    let w = [];
    n != null && n.storyNodeText && (w = [...n == null ? void 0 : n.storyNodeText]), w[A][x] = b, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: w
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
    const b = n;
    b.storyNodeText.splice(x, 1), t({ ...e, sankey: { ...e.sankey, data: { ...b } } });
  };
  return /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Sankey Settings")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: x, segmentTextBefore: b, segmentTextAfter: A }, w) => /* @__PURE__ */ r.createElement("div", { key: w, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ r.createElement("label", null, "Story Node Text", /* @__PURE__ */ r.createElement("input", { type: "text", value: x, fieldName: "StoryNode", label: "StoryNode", onChange: (O) => i("StoryNode", O.target.value, w) })), /* @__PURE__ */ r.createElement("label", null, "Story Text Before", /* @__PURE__ */ r.createElement("input", { type: "text", value: b, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (O) => i("segmentTextBefore", O.target.value, w) })), /* @__PURE__ */ r.createElement("label", null, "Story Text After", /* @__PURE__ */ r.createElement("input", { type: "text", value: A, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (O) => i("segmentTextAfter", O.target.value, w) })), /* @__PURE__ */ r.createElement(hs, { onClick: (O) => d(w), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((u = n == null ? void 0 : n.storyNodeText) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (x) => {
        x.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), e.enableTooltips && ((y = (m = e.data) == null ? void 0 : m.tooltips) == null ? void 0 : y.length) > 0 && /* @__PURE__ */ r.createElement(ct, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: a })));
};
const yk = (e) => {
  var m, y, x;
  const { updateConfig: t, config: n, unfilteredData: a, dimensions: i, isDraggingAnnotation: l } = se.useContext(xt), d = (b, A, w) => {
    var L;
    const O = (L = document.querySelector(".chart-container > div > svg")) == null ? void 0 : L.getBoundingClientRect(), k = [O.width, O.height], h = [...n == null ? void 0 : n.annotations];
    h[w][A] = b, h[w].savedDimensions = k, t({
      ...n,
      annotations: h
    });
  }, f = () => {
    var k, h, L;
    const b = (k = document.querySelector(".chart-container > div > svg")) == null ? void 0 : k.getBoundingClientRect(), A = [b.width, b.height], w = {
      text: "New Annotation",
      snapToNearestPoint: !1,
      fontSize: 16,
      bezier: 10,
      show: {
        desktop: !0,
        tablet: !0,
        mobile: !0
      },
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
      y: Number((A == null ? void 0 : A[1]) / 2),
      xKey: n.xAxis.type === "date" ? new Date((L = (h = n == null ? void 0 : n.data) == null ? void 0 : h[0]) == null ? void 0 : L[n.xAxis.dataKey]).getTime() : n.xAxis.type === "categorical" ? "1/15/2016" : "",
      yKey: "",
      dx: 20,
      dy: -20,
      opacity: "100",
      savedDimensions: A,
      connectionType: "line"
    }, O = Array.isArray(n.annotations) ? n.annotations : [];
    t({
      ...n,
      annotations: [...O, w]
    });
  }, u = (b) => {
    const A = n.annotations.filter((w, O) => O !== b);
    t({
      ...n,
      annotations: A
    });
  };
  return /* @__PURE__ */ r.createElement(xu, { key: e.name }, /* @__PURE__ */ r.createElement(xu.Section, { title: e.name, key: e.name }, /* @__PURE__ */ r.createElement("label", { key: "key-1" }, "Show Annotation Dropdown", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: ((m = n == null ? void 0 : n.general) == null ? void 0 : m.showAnnotationDropdown) || !1,
      onChange: (b) => {
        t({
          ...n,
          general: {
            ...n.general,
            showAnnotationDropdown: b.target.checked
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
      onChange: (b) => {
        t({
          ...n,
          general: {
            ...n.general,
            annotationDropdownText: b.target.value
          }
        });
      }
    }
  )), (n == null ? void 0 : n.annotations) && (n == null ? void 0 : n.annotations.map((b, A) => {
    var w, O, k, h, L, F, P, T;
    return /* @__PURE__ */ r.createElement(xu, { key: A }, /* @__PURE__ */ r.createElement(xu.Section, { title: b.text ? b.text.substring(0, 15) + "..." : `Annotation ${A + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: b.text, onChange: (_) => d(_.target.value, "text", A) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].opacity = _.target.value, t({
            ...n,
            annotations: B
          });
        },
        value: ((O = (w = n == null ? void 0 : n.annotations) == null ? void 0 : w[A]) == null ? void 0 : O.opacity) || "100"
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Subject", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: ((h = (k = n == null ? void 0 : n.annotations[A]) == null ? void 0 : k.edit) == null ? void 0 : h.subject) || !1,
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].edit.subject = _.target.checked, t({
            ...n,
            annotations: B
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Edit Label", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "checkbox",
        checked: ((F = (L = n == null ? void 0 : n.annotations[A]) == null ? void 0 : L.edit) == null ? void 0 : F.label) || !1,
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].edit.label = _.target.checked, t({
            ...n,
            annotations: B
          });
        }
      }
    )), /* @__PURE__ */ r.createElement("label", null, "Connection Type:", /* @__PURE__ */ r.createElement(
      "select",
      {
        key: "annotation-connection-type",
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].connectionType = _.target.value, t({
            ...n,
            annotations: B
          });
        },
        value: (P = n == null ? void 0 : n.annotations[A]) == null ? void 0 : P.connectionType
      },
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((_, B) => /* @__PURE__ */ r.createElement("option", { key: _, value: _ }, _))
    )), b.connectionType === "curve" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Curve Control", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((T = n == null ? void 0 : n.annotations[A]) == null ? void 0 : T.bezier) || 0,
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].bezier = _.target.value, t({
            ...n,
            annotations: B
          });
        }
      }
    ))), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        key: "annotation-marker",
        value: b.marker,
        onChange: (_) => {
          const B = mr.cloneDeep(n == null ? void 0 : n.annotations);
          B[A].marker = _.target.value, t({
            ...n,
            annotations: B
          });
        }
      },
      ["arrow", "circle"].map((_, B) => /* @__PURE__ */ r.createElement("option", { key: `col-${B}` }, _))
    )), /* @__PURE__ */ r.createElement(hs, { className: "warn btn-warn btn btn-remove delete", onClick: () => u(A) }, "Delete Annotation"))));
  })), ((x = n == null ? void 0 : n.annotations) == null ? void 0 : x.length) < 3 && /* @__PURE__ */ r.createElement(hs, { onClick: f, className: "mt-2" }, "Add Annotation")));
}, ua = {
  ForestPlot: qE,
  Series: Ur,
  Regions: ck,
  General: dk,
  BoxPlot: fk,
  Visual: hk,
  Sankey: mk,
  Annotate: yk
};
const gk = ({ config: e, updateConfig: t, data: n }) => {
  var k, h, L;
  const a = e.visualizationType === "Combo", i = ((k = e.runtime.lineSeriesKeys) == null ? void 0 : k.length) > 0, l = ((h = e.runtime.barSeriesKeys) == null ? void 0 : h.length) > 0, d = a && i, f = a && l, u = () => mr.uniq(mr.flatMap(n, mr.keys)), m = () => e.visualizationType === "Line" || d ? ["effect", "suppression"] : ["suppression"], y = {
    "Dashed Small": "- - -",
    "Dashed Medium": "– –",
    "Dashed Large": "— –",
    "Open Circles": "◯",
    "Filled Circles": ""
  }, x = (F) => {
    const P = Object.keys(y);
    return F === "suppression" ? P.slice(0, -1) : P;
  }, b = () => {
    if (e.visualizationType === "Bar" || f)
      return Object.keys(yp);
  };
  let A = (F) => {
    let P = [];
    e.preliminaryData && (P = [...e.preliminaryData]), P.splice(F, 1), t({ ...e, preliminaryData: P });
  }, w = () => {
    const F = e.visualizationType === "Line" ? "effect" : "suppression";
    let P = e.preliminaryData ? [...e.preliminaryData] : [];
    const T = {
      type: F,
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
    P.push(T), t({ ...e, preliminaryData: P });
  }, O = (F, P, T) => {
    let _ = [];
    e.preliminaryData && (_ = [...e.preliminaryData]), _[T][F] = P, F === "symbol" && (_[T].iconCode = yp[P]), F === "style" && (_[T].lineCode = y[P]), t({ ...e, preliminaryData: _ });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && ((L = e.preliminaryData) == null ? void 0 : L.map(({ circleSize: F, column: P, displayLegend: T, displayTable: _, displayTooltip: B, label: Y, seriesKey: X, style: J, symbol: re, type: H, value: ae, hideBarSymbol: j, hideLineStyle: te }, oe) => {
    var ne, ee;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${oe}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, " ", H === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (G) => {
          G.preventDefault(), A(oe);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Lt, { value: H, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (G, Z, K, V) => O(K, V, oe), options: m() }), H === "suppression" ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: P,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (G, Z, K, V) => O(K, V, oe),
        options: (ne = e.runtime) == null ? void 0 : ne.seriesKeys
      }
    ), /* @__PURE__ */ r.createElement(et, { value: ae, fieldName: "value", label: "Suppressed Data  Value", updateField: (G, Z, K, V) => O(K, V, oe) }), (d || e.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: J,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (G, Z, K, V) => O(K, V, oe),
        options: x(H)
      }
    ), /* @__PURE__ */ r.createElement(ct, { value: te, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (G, Z, K, V) => O(K, V, oe) })), (f || e.visualizationType === "Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: re,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (G, Z, K, V) => O(K, V, oe),
        options: b()
      }
    ), /* @__PURE__ */ r.createElement(ct, { value: j, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (G, Z, K, V) => O(K, V, oe) })), /* @__PURE__ */ r.createElement(
      et,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: Y || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (G, Z, K, V) => O(K, V, oe)
      }
    ), /* @__PURE__ */ r.createElement(
      ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: B,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (G, Z, K, V) => O(K, V, oe)
      }
    ), /* @__PURE__ */ r.createElement(
      ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: T,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (G, Z, K, V) => O(K, V, oe)
      }
    ), /* @__PURE__ */ r.createElement(
      ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: _,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (G, Z, K, V) => O(K, V, oe)
      }
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Lt, { value: X, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (G, Z, K, V) => O(K, V, oe), options: e.runtime.lineSeriesKeys ?? ((ee = e.runtime) == null ? void 0 : ee.seriesKeys) }), /* @__PURE__ */ r.createElement(Lt, { value: P, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (G, Z, K, V) => O(K, V, oe), options: u() }), /* @__PURE__ */ r.createElement(
      et,
      {
        tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "If 'Filled Circles' is selected as the style, this field is optional, and the style 'Filled Circles' will apply to all points within the associated series data."))),
        value: ae,
        fieldName: "value",
        label: "VALUE TO TRIGGER",
        updateField: (G, Z, K, V) => O(K, V, oe)
      }
    ), /* @__PURE__ */ r.createElement(Lt, { value: J, initial: "Select", fieldName: "style", label: "Style", updateField: (G, Z, K, V) => O(K, V, oe), options: x(H) }), J.includes("Circles") && /* @__PURE__ */ r.createElement(et, { className: "number-narrow", type: "number", value: F, fieldName: "circleSize", label: "circle size", updateField: (G, Z, K, V) => O(K, V, oe) }), J !== "Filled Circles" && /* @__PURE__ */ r.createElement(et, { value: Y, fieldName: "label", label: "Label", placeholder: "", updateField: (G, Z, K, V) => O(K, V, oe) })));
  })), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: w, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, vk = ({ config: e, updateConfig: t, display: n }) => {
  var m, y, x, b;
  const a = (m = e == null ? void 0 : e.yAxis) == null ? void 0 : m.maxValue, i = ((x = (y = e == null ? void 0 : e.yAxis) == null ? void 0 : y.categories) == null ? void 0 : x.reduce((A, w) => A + (parseFloat(w.height) || 0), 0)) || 0, l = (A) => {
    let w = [];
    e.yAxis.categories && (w = [...e.yAxis.categories]), w.splice(A, 1), t({ ...e, yAxis: { ...e.yAxis, categories: w } });
  }, d = () => {
    var k, h;
    const A = (h = (k = e.yAxis) == null ? void 0 : k.categories) == null ? void 0 : h.length, w = 0.4;
    return Ma("#ddd").darken(w * A).hex();
  }, f = () => {
    const A = e.yAxis.categories ? [...e.yAxis.categories] : [], w = {
      label: "Label " + Number(A.length + 1),
      height: "",
      color: d()
    };
    A.push(w), t({ ...e, yAxis: { ...e.yAxis, categories: A } });
  }, u = (A, w, O) => {
    let k = [];
    e.yAxis.categories && (k = [...e.yAxis.categories]), k[O][A] = w, t({ ...e, yAxis: { ...e.yAxis, categories: k } });
  };
  return n ? /* @__PURE__ */ r.createElement(r.Fragment, null, e.yAxis.type === "categorical" && ((b = e.yAxis.categories) == null ? void 0 : b.map(({ label: A, color: w, height: O }, k) => /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${k}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, "Axis Category ", k + 1), /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (h) => {
        h.preventDefault(), l(k);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, " Category Height will be ignored for the last category. The last category will fill the rest of the axis height."))),
      type: "number",
      value: O,
      fieldName: "height",
      label: "Category Height",
      updateField: (h, L, F, P) => u(F, P, k)
    }
  ), Number(i) > Number(a) && e.yAxis.categories.length - 1 === k && /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block", fontSize: "15px" } }, "Update Max value to show all categories"), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(et, { value: w, fieldName: "color", label: "Color", updateField: (h, L, F, P) => u(F, P, k) }), /* @__PURE__ */ r.createElement(et, { value: A, fieldName: "label", label: "Label", updateField: (h, L, F, P) => u(F, P, k) }))))), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Axis Category")) : /* @__PURE__ */ r.createElement(r.Fragment, null);
}, xk = () => {
  var _n, pn, hn, sn, qt, Sn, qn, g, R, z, U, be, ve, Pe, Ke, it, mt, dt;
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
    missingRequiredSections: b,
    isDebug: A,
    setFilteredData: w,
    lineOptions: O,
    rawData: k,
    highlight: h,
    highlightReset: L,
    dimensions: F
  } = se.useContext(xt), { minValue: P, maxValue: T, existPositiveValue: _, isAllLine: B } = Rc(e, u), Y = { data: a, config: e }, { leftMax: X, rightMax: J } = Ay(Y), {
    headerColors: re,
    visSupportsTooltipLines: H,
    visSupportsNonSequentialPallete: ae,
    visSupportsSequentialPallete: j,
    visSupportsReverseColorPalette: te,
    visHasLabelOnData: oe,
    visHasNumbersOnBars: ne,
    visHasAnchors: ee,
    visHasBarBorders: G,
    visHasDataCutoff: Z,
    visHasSelectableLegendValues: K,
    visCanAnimate: V,
    visHasLegend: we,
    visHasLegendAxisAlign: Se,
    visHasBrushChart: ce,
    visSupportsDateCategoryAxis: Re,
    visSupportsValueAxisMin: je,
    visSupportsValueAxisMax: Je,
    visSupportsDateCategoryAxisLabel: Oe,
    visSupportsDateCategoryAxisLine: he,
    visSupportsDateCategoryAxisTicks: Fe,
    visSupportsDateCategoryTickRotation: le,
    visSupportsDateCategoryNumTicks: ue,
    visSupportsDateCategoryAxisPadding: Ae,
    visSupportsRegions: $e,
    visSupportsFilters: De,
    visSupportsPreliminaryData: Ze,
    visSupportsValueAxisGridLines: qe,
    visSupportsValueAxisLine: yt,
    visSupportsValueAxisTicks: nt,
    visSupportsValueAxisLabels: Ve,
    visSupportsBarSpace: ze,
    visSupportsBarThickness: Te,
    visSupportsFootnotes: Ye,
    visSupportsSuperTitle: Qe,
    visSupportsDataCutoff: ft,
    visSupportsChartHeight: bt,
    visSupportsLeftValueAxis: gt,
    visSupportsTooltipOpacity: Mt,
    visSupportsRankByValue: Zt,
    visSupportsResponsiveTicks: an,
    visSupportsDateCategoryHeight: Ut,
    visHasDataSuppression: Qt,
    visHasCategoricalAxis: zt
  } = As();
  se.useEffect(() => {
    let de = [];
    e.series && (de = e.series.map((pe) => ({
      ...pe,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: de
    });
  }, [e.visualizationType]), se.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), se.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: un } = Xf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), At = (de, pe) => ({
    ...pe
  }), Rt = {
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
  }, kn = (de) => {
    de.orientation === "horizontal" && (de.labels = !1), de.table.show === void 0 && (de.table.show = !y), de.visualizationType === "Combo" && (de.orientation = "vertical"), En(de.xAxis) && !de.xAxis.padding && (de.xAxis.padding = 6), de.visualizationType === "Line" && (de.visualizationSubType = "regular", de.barStyle = "flat", de.isLollipopChart = !1);
  }, Ie = (de, pe, ge, Ne) => {
    if (A && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", de, pe, ge, Ne), de === "boxplot" && pe === "legend") {
      t({
        ...e,
        [de]: {
          ...e[de],
          [pe]: {
            ...e.boxplot[pe],
            [ge]: Ne
          }
        }
      });
      return;
    }
    if (de === "boxplot" && pe === "labels") {
      t({
        ...e,
        [de]: {
          ...e[de],
          [pe]: {
            ...e.boxplot[pe],
            [ge]: Ne
          }
        }
      });
      return;
    }
    const Ct = (Un) => Un === 0 ? !0 : !!Un;
    if (de === "columns" && Ct(pe) && Ct(ge)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [pe]: {
            ...e.columns[pe],
            [ge]: Ne
          }
        }
      });
      return;
    }
    if (de === null && pe === null) {
      Ct(ge) || console.error("fieldName is required");
      let Un = { ...e, [ge]: Ne };
      kn(Un), t(Un);
      return;
    }
    const cn = Array.isArray(e[de]);
    let jn = cn ? [...e[de], Ne] : { ...e[de], [ge]: Ne };
    Ct(pe) && (cn ? (jn = [...e[de]], jn[pe] = { ...jn[pe], [ge]: Ne }) : typeof Ne == "string" ? jn[pe] = Ne : Ct(ge) && (jn = { ...e[de], [pe]: { ...e[de][pe], [ge]: Ne } }));
    let Jn = { ...e, [de]: jn };
    kn(Jn), t(Jn);
  }, [Et, vn] = se.useState(!0), [lt, on] = se.useState(!1);
  if (i)
    return null;
  se.useEffect(() => {
    var de;
    (de = e.general) != null && de.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Xt = (de) => {
    t({
      ...e,
      lollipopShape: de
    });
  }, $t = (de) => {
    let pe = e.series ? [...e.series] : [], ge = Array.from(new Set(a.map((Ct) => Ct[de]))), Ne = [];
    ge.forEach((Ct) => {
      Ne.push({ key: Ct });
    }), e.visualizationType === "Forecasting" ? pe.push({ dataKey: de, type: e.visualizationType, stages: Ne, stageColumn: de, axis: "Left", tooltip: !0 }) : pe.push({ dataKey: de, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: pe });
  }, Jt = (de) => {
    const pe = e.series[0].dataKey, ge = a.sort((Ct, cn) => Ct[pe] - cn[pe]), Ne = de === "asc" ? ge : ge.reverse();
    t({ ...e }, Ne);
  }, wn = (de) => {
    let pe = [...e.exclusions.keys];
    pe.push(de);
    let ge = { ...e.exclusions, keys: pe };
    t({ ...e, exclusions: ge });
  }, Tn = (de) => {
    let pe = -1, ge = [...e.exclusions.keys];
    for (let Ne = 0; Ne < ge.length; Ne++)
      if (ge[Ne] === de) {
        pe = Ne;
        break;
      }
    if (pe !== -1) {
      ge.splice(pe, 1);
      let Ne = { ...e.exclusions, keys: ge }, Ct = { ...e, exclusions: Ne };
      ge.length === 0 && delete Ct.exclusions.keys, t(Ct);
    }
  }, Dt = (de = !0) => {
    let pe = {};
    if (u.forEach((ge) => {
      Object.keys(ge).forEach((Ne) => pe[Ne] = !0);
    }), de) {
      const { lower: ge, upper: Ne } = e.confidenceKeys || {};
      Object.keys(pe).forEach((Ct) => {
        (e.series && e.series.filter((cn) => cn.dataKey === Ct).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Ct) && (ge && Ne || ge || Ne) && Ct !== ge && Ct !== Ne) && delete pe[Ct];
      });
    }
    return Object.keys(pe);
  }, Mn = (de) => {
    if (!de)
      return [];
    const pe = /* @__PURE__ */ new Set();
    for (let ge = 0; ge < de.length; ge++)
      for (const [Ne] of Object.entries(de[ge]))
        pe.add(Ne);
    return Array.from(pe);
  }, bn = (de, pe = !1) => {
    let ge = [];
    return m.forEach((Ne) => {
      ge.push(Ne[de]);
    }), pe ? [...new Set(ge)] : ge;
  }, Bn = () => {
    vn(!Et), t({
      ...e,
      showEditorPanel: !Et
    });
  }, Kt = () => {
    let de = JSON.parse(JSON.stringify(e));
    return b() === !1 && delete de.newViz, delete de.runtime, de;
  };
  se.useEffect(() => {
    if (x) {
      const de = Kt();
      x(de);
    }
  }, [e]), se.useEffect(() => {
    const de = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], pe = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: pe
      },
      yAxis: {
        ...e.yAxis,
        anchors: de
      }
    });
  }, [e.orientation]), se.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), se.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const Hn = se.useCallback(() => {
    const de = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, de.map((pe, ge) => /* @__PURE__ */ r.createElement("li", { key: pe }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": pe }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, pe)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => Tn(pe) }, "×"))));
  }, [e]), Qn = (de, pe) => {
    let ge = e.series, [Ne] = ge.splice(de, 1);
    ge.splice(pe, 0, Ne), t({ ...e, series: ge });
  };
  e.isLollipopChart && ((_n = e == null ? void 0 : e.series) == null ? void 0 : _n.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((pn = e == null ? void 0 : e.series) == null ? void 0 : pn.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((hn = e == null ? void 0 : e.series) == null ? void 0 : hn.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((sn = e == null ? void 0 : e.series) == null ? void 0 : sn.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Wn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [ln, zn] = se.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), $n = () => {
    const de = e[Wn].max, pe = e[Wn].rightMax;
    let ge = "", Ne = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (de && parseFloat(de) < parseFloat(T) && _):
          ge = "Max value must be more than " + T;
          break;
        case (de && parseFloat(de) < 0 && !_):
          ge = "Value must be more than or equal to 0";
          break;
        default:
          ge = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (de && parseFloat(de) < X):
          ge = "Max value must be more than " + X;
          break;
        case (pe && parseFloat(pe) < J):
          Ne = "Max value must be more than " + J;
          break;
        case (de && parseFloat(de) < 0 && !_):
          ge = "Value must be more than or equal to 0";
          break;
        default:
          ge = "";
      }
    zn((Ct) => ({ ...Ct, maxMsg: ge, rightMaxMessage: Ne }));
  }, Vn = () => {
    const de = parseFloat(e[Wn].min);
    let pe = Number(P), ge = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && de < 0):
        ge = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && de > pe):
        ge = "Value should not exceed " + P;
        break;
      case (e.visualizationType === "Combo" && B && de > pe):
        ge = "Value should not exceed " + P;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !B) && pe > 0 && de > 0):
        ge = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && de >= Math.min(pe, e.xAxis.target)):
        ge = "Value must be less than " + Math.min(pe, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && de && pe < 0 && de > pe):
        ge = "Value should not exceed " + P;
        break;
      default:
        ge = "";
    }
    zn((Ne) => ({ ...Ne, minMsg: ge }));
  };
  se.useEffect(() => {
    Vn(), $n();
  }, [P, T, e]);
  const Dn = ((qt = e == null ? void 0 : e.dataKey) == null ? void 0 : qt.includes("http://")) || ((Sn = e == null ? void 0 : e.dataKey) == null ? void 0 : Sn.includes("https://")), _e = () => {
    var de, pe;
    if (A !== void 0 && A && !((de = e == null ? void 0 : e.xAxis) != null && de.dataKey)) {
      let ge = Dt(!1);
      if (ge.includes("Date"))
        return "Date";
      if (ge.includes("Race"))
        return "Race";
      if (ge.includes("Month"))
        return "Month";
    }
    return ((pe = e == null ? void 0 : e.xAxis) == null ? void 0 : pe.dataKey) || "";
  }, ht = () => {
    if (A !== void 0 && A && Dt(!1).length > 0) {
      let de = Dt(!1).filter((pe) => pe !== _e());
      if (de.length > 0)
        return de[0];
    }
    return "";
  };
  if (A && !e.xAxis.dataKey && (e.xAxis.dataKey = _e()), A && ((qn = e == null ? void 0 : e.series) == null ? void 0 : qn.length) === 0) {
    let de = ht();
    de !== "" && $t(de), A && console.log("### COVE DEBUG: Chart: Setting default datacol=", de);
  }
  const I = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], xe = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((g = e.data) == null ? void 0 : g[0]) || []).map((pe) => {
      const ge = e == null ? void 0 : e.series.some((Ne) => Ne.dataKey === pe);
      if (pe !== e.xAxis.dataKey && !ge)
        return xe.push(
          /* @__PURE__ */ r.createElement("option", { value: pe, key: pe }, pe)
        );
    });
    let de = {};
    e.data.forEach((pe) => {
      Object.keys(pe).forEach((ge) => {
        de[ge] = de[ge] || [];
        const Ne = typeof pe[ge] == "number" ? pe[ge].toString() : pe[ge];
        de[ge].indexOf(Ne) === -1 && de[ge].push(Ne);
      });
    });
  }
  if (!e.data && a) {
    if (!a[0])
      return;
    Object.keys(a[0]).map((pe) => {
      const ge = a.some((Ne) => Ne.dataKey === pe);
      if (pe !== e.xAxis.dataKey && !ge)
        return xe.push(
          /* @__PURE__ */ r.createElement("option", { value: pe, key: pe }, pe)
        );
    });
    let de = {};
    a.forEach((pe) => {
      Object.keys(pe).forEach((ge) => {
        de[ge] = de[ge] || [];
        const Ne = typeof pe[ge] == "number" ? pe[ge].toString() : pe[ge];
        de[ge].indexOf(Ne) === -1 && de[ge].push(Ne);
      });
    });
  }
  const Xe = (de) => {
    const pe = mr.cloneDeep(e.columns);
    delete pe[de], t({
      ...e,
      columns: pe
    });
  }, Be = async (de, pe, ge) => {
    switch (pe) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [de]: {
              ...e.columns[de],
              [pe]: ge
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [de]: {
              ...e.columns[de],
              [pe]: ge
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: pt,
    highlightedSeriesValues: tt,
    handleUpdateHighlightedBar: kt,
    handleAddNewHighlightedBar: Nt,
    handleRemoveHighlightedBar: Ue,
    handleUpdateHighlightedBarColor: Ot,
    handleHighlightedBarLegendLabel: Vt,
    handleUpdateHighlightedBorderWidth: Ft
  } = Tc(e, t), nn = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, st = () => {
    const de = a.map((pe) => pe[e.legend.colorCode]);
    return nn ? de : Dt(!1).filter((pe) => pe !== e.xAxis.dataKey);
  }, wt = (de) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: de } });
  }, It = (de, pe, ge) => {
    var cn;
    const Ne = { ...e[de], [pe]: ge }, Ct = { ...e, [de]: Ne };
    ge === "highlight" && ((cn = e.legend.seriesHighlight) != null && cn.length) && (Ct.legend.seriesHighlight.length = 0), t(Ct);
  }, Wt = (de, pe, ge) => {
    const Ne = { ...e.xAxis[de] };
    Ne[pe] = ge;
    const Ct = { ...e, xAxis: { ...e.xAxis, [de]: Ne } };
    t(Ct);
  }, yn = {
    addNewExclusion: wn,
    data: a,
    editColumn: Be,
    getColumns: Dt,
    getDataValueOptions: Mn,
    getDataValues: bn,
    getItemStyle: At,
    handleSeriesChange: Qn,
    handleAddNewHighlightedBar: Nt,
    setCategoryAxis: _e,
    sortSeries: Jt,
    updateField: Ie,
    warningMsg: ln,
    highlightedBarValues: pt,
    handleHighlightedBarLegendLabel: Vt,
    handleUpdateHighlightedBar: kt,
    handleRemoveHighlightedBar: Ue,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: tt,
    handleUpdateHighlightedBorderWidth: Ft,
    handleUpdateHighlightedBarColor: Ot,
    setLollipopShape: Xt
  };
  return /* @__PURE__ */ r.createElement(Gf.Provider, { value: yn }, /* @__PURE__ */ r.createElement(Or, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(Kd.Sidebar, { displayPanel: Et, isDashboard: y, title: "Configure Chart", onBackClick: Bn }, /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(ua.General, { name: "General" }), /* @__PURE__ */ r.createElement(ua.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ r.createElement(ua.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Rn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (de) => {
        de.target.value !== "" && de.target.value !== "Select" && $t(de.target.value), de.target.value = "";
      },
      options: Dt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(ua.Series.Wrapper, { getColumns: Dt }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(Oy, { onDragEnd: ({ source: de, destination: pe }) => Qn(de.index, pe.index) }, /* @__PURE__ */ r.createElement(Fy, { droppableId: "filter_order" }, (de) => /* @__PURE__ */ r.createElement("ul", { ...de.droppableProps, className: "series-list", ref: de.innerRef }, /* @__PURE__ */ r.createElement(ua.Series.List, { series: e.series, getItemStyle: At, sortableItemStyles: Rt, chartsWithOptions: I }), de.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Ie, initial: "Select", options: Dt() }), /* @__PURE__ */ r.createElement(Lt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Ie, initial: "Select", options: Dt() })), Zt() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Lt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (de) => Jt(de.target.value), options: ["asc", "desc"] }), Ze() && /* @__PURE__ */ r.createElement(gk, { config: e, updateConfig: t, data: a }))), /* @__PURE__ */ r.createElement(ua.BoxPlot, { name: "Measures" }), gt() && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Rn, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Ie,
      options: Dt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Axis Type", /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, "Select 'Numeric (Linear Scale)' for uniform scaling, 'Numeric (Logarithmic Scale)' for exponential data, or 'Categorical' for discrete categories."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.type,
      onChange: (de) => t({
        ...e,
        yAxis: {
          ...e.yAxis,
          type: de.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "linear" }, "Numeric (Linear Scale)"),
    e.visualizationSubType !== "stacked" && /* @__PURE__ */ r.createElement("option", { value: "logarithmic" }, "Numeric (Logarithmic Scale)"),
    e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical")
  )), /* @__PURE__ */ r.createElement(vk, { config: e, updateConfig: t, data: a, display: zt() }), /* @__PURE__ */ r.createElement(et, { display: !zt(), value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Ie }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(ct, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Ie }), /* @__PURE__ */ r.createElement(
    et,
    {
      display: !zt(),
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ r.createElement(et, { display: !zt(), value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ie }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(ct, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ie }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(et, { display: !zt(), value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ie }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), qe() && /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Ie }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(et, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Ie, value: e.yAxis.scalePadding })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(
    ct,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ r.createElement(
    ct,
    {
      display: !zt(),
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, yt() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Ve() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), nt() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie }), Je() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.maxMsg), je() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Ie })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ct, { display: !zt(), value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { display: !zt(), value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { display: !zt(), value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.maxMsg), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.minMsg)), ee() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, (z = (R = e.yAxis) == null ? void 0 : R.anchors) == null ? void 0 : z.map((de, pe) => /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${pe}` }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Pn, { className: "accordion__button accordion__button" }, "Anchor ", pe + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne.splice(pe, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[pe].value ? e.yAxis.anchors[pe].value : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[pe].value = ge.target.value, t({
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
      value: e.yAxis.anchors[pe].color ? e.yAxis.anchors[pe].color : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[pe].color = ge.target.value, t({
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
      value: e.yAxis.anchors[pe].lineStyle || "",
      onChange: (ge) => {
        const Ne = [...e.yAxis.anchors];
        Ne[pe].lineStyle = ge.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    O.map((ge) => /* @__PURE__ */ r.createElement("option", { key: ge.key }, ge.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (de) => {
        de.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    "Add Anchor"
  )), ee() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, (be = (U = e.xAxis) == null ? void 0 : U.anchors) == null ? void 0 : be.map((de, pe) => /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart", key: `xaxis-anchors-${pe}` }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Pn, { className: "accordion__button accordion__button" }, "Anchor ", pe + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne.splice(pe, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[pe].value ? e.xAxis.anchors[pe].value : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[pe].value = ge.target.value, t({
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
      value: e.xAxis.anchors[pe].color ? e.xAxis.anchors[pe].color : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[pe].color = ge.target.value, t({
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
      value: e.xAxis.anchors[pe].lineStyle || "",
      onChange: (ge) => {
        const Ne = [...e.xAxis.anchors];
        Ne[pe].lineStyle = ge.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    O.map((ge) => /* @__PURE__ */ r.createElement("option", { key: ge.key }, ge.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (de) => {
        de.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    "Add Anchor"
  )))), un && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(ct, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.rightMaxMessage), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Ie }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, ln.minMsg))), Re() && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(Rn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (de) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: de.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ r.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Ie }), Ae() && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.xAxis.dataKey || _e() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Ie,
      options: Dt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: Ie,
      options: Dt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Ie }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    ct,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), En(e.xAxis) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Ie
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Ie
    }
  )), /* @__PURE__ */ r.createElement(
    ct,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Ie
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Hn, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (de) => {
        de.target.value !== "" && de.target.value !== "Select" && wn(de.target.value), de.target.value = "";
      },
      options: bn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Ie, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(et, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Ie, value: e.exclusions.dateEnd || "" }))), ue() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    et,
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
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => on(!lt), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${lt ? "90deg" : "0deg"})` } }, ">"))), lt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Qf).map((de) => /* @__PURE__ */ r.createElement(
    et,
    {
      key: `viewport-step-count-input-${de}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[de] : void 0,
      placeholder: "Auto",
      type: "number",
      label: de,
      className: "number-narrow",
      updateField: (pe, ge, Ne, Ct) => Wt("viewportStepCount", de, Ct)
    }
  ))))), ue() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    et,
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
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => on(!lt), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${lt ? "90deg" : "0deg"})` } }, ">"))), lt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Qf).map((de) => /* @__PURE__ */ r.createElement(
    et,
    {
      key: `viewport-num-ticks-input-${de}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[de] : void 0,
      placeholder: "Auto",
      type: "number",
      label: de,
      className: "number-narrow",
      updateField: (pe, ge, Ne, Ct) => Wt("viewportNumTicks", de, Ct)
    }
  ))))), Ut() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ie }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ct, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Ie }), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ie, min: 0 })), an() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(ct, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ie }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && le() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ie }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Oe() && /* @__PURE__ */ r.createElement(ct, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie })) : /* @__PURE__ */ r.createElement(r.Fragment, null, he() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ie }), Oe() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: Ie }), Fe() && /* @__PURE__ */ r.createElement(ct, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ie })), ((ve = e.series) == null ? void 0 : ve.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && pt.map((de, pe) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${pe}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (ge) => Ue(ge, pe) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", pe + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[pe].value, onChange: (ge) => kt(ge, pe) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), tt && [...new Set(tt)].sort().map((ge) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${pe}-${ge}` }, ge)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[pe].color ? e.highlightedBarValues[pe].color : "", onChange: (ge) => Ot(ge, pe) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[pe].borderWidth ? e.highlightedBarValues[pe].borderWidth : "", onChange: (ge) => Ft(ge, pe) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[pe].legendLabel ? e.highlightedBarValues[pe].legendLabel : "", onChange: (ge) => Vt(ge, pe) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (de) => Nt(de) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ct,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(Hn, null)), /* @__PURE__ */ r.createElement(
    Lt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (de) => {
        de.target.value !== "" && de.target.value !== "Select" && wn(de.target.value), de.target.value = "";
      },
      options: bn(e.xAxis.dataKey, !0)
    }
  ))), ee() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, (Ke = (Pe = e.xAxis) == null ? void 0 : Pe.anchors) == null ? void 0 : Ke.map((de, pe) => /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${pe}` }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Pn, { className: "accordion__button accordion__button" }, "Anchor ", pe + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne.splice(pe, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[pe].value ? e.xAxis.anchors[pe].value : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[pe].value = ge.target.value, t({
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
      value: e.xAxis.anchors[pe].color ? e.xAxis.anchors[pe].color : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.xAxis.anchors];
        Ne[pe].color = ge.target.value, t({
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
      value: e.xAxis.anchors[pe].lineStyle || "",
      onChange: (ge) => {
        const Ne = [...e.xAxis.anchors];
        Ne[pe].lineStyle = ge.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    O.map((ge) => /* @__PURE__ */ r.createElement("option", { key: ge.key }, ge.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (de) => {
        de.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    "Add Anchor"
  )), ee() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Ri, { allowZeroExpanded: !0 }, (mt = (it = e.yAxis) == null ? void 0 : it.anchors) == null ? void 0 : mt.map((de, pe) => /* @__PURE__ */ r.createElement(An, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${pe}` }, /* @__PURE__ */ r.createElement(Ln, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Pn, { className: "accordion__button accordion__button" }, "Anchor ", pe + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne.splice(pe, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[pe].value ? e.yAxis.anchors[pe].value : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[pe].value = ge.target.value, t({
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
      value: e.yAxis.anchors[pe].color ? e.yAxis.anchors[pe].color : "",
      onChange: (ge) => {
        ge.preventDefault();
        const Ne = [...e.yAxis.anchors];
        Ne[pe].color = ge.target.value, t({
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
      value: e.yAxis.anchors[pe].lineStyle || "",
      onChange: (ge) => {
        const Ne = [...e.yAxis.anchors];
        Ne[pe].lineStyle = ge.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Ne
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    O.map((ge) => /* @__PURE__ */ r.createElement("option", { key: ge.key }, ge.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (de) => {
        de.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(ua.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Columns")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(ug, { config: e, updateField: Ie, deleteColumn: Xe }), " ")), we() && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Legend")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(ct, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Ie }), /* @__PURE__ */ r.createElement(
    ct,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ r.createElement(
    ct,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: Ie,
      tooltip: /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(ct, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Ie }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Lt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Ie, options: Mn(a) }), /* @__PURE__ */ r.createElement(Lt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[de, , pe, ge]) => It(de, pe, ge), options: ["highlight", "isolate"] }), Se() && /* @__PURE__ */ r.createElement(ct, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Ie }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(ct, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Ie }), K && e.legend.behavior === "isolate" && !nn && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ r.createElement(ye, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ye.Target, null, /* @__PURE__ */ r.createElement(ot, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ye.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((de, pe) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `${de}-${pe}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ge) => {
        ge.preventDefault();
        const Ne = [...e.legend.seriesHighlight];
        Ne.splice(pe, 1), Ie("legend", null, "seriesHighlight", Ne), Ne.length || L();
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    Lt,
    {
      value: e.legend.seriesHighlight[pe],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ge) => {
        const Ne = [...e.legend.seriesHighlight];
        Ne.includes(ge.target.value) || (Ne[pe] = ge.target.value, wt([...Ne]));
      },
      options: st()
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (de) => {
        de.preventDefault();
        const pe = st(), ge = [...e.legend.seriesHighlight];
        if (ge.length < pe.length) {
          const [Ct] = pe.filter((cn) => !ge.includes(cn));
          ge.push(Ct), wt([...ge]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ r.createElement(et, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Ie }), /* @__PURE__ */ r.createElement(Lt, { value: (dt = e.legend) == null ? void 0 : dt.position, section: "legend", fieldName: "position", label: "Position", updateField: Ie, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ct, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Ie }), /* @__PURE__ */ r.createElement(ct, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Ie })), /* @__PURE__ */ r.createElement(et, { type: "textarea", value: e.legend.description, updateField: Ie, section: "legend", fieldName: "description", label: "Legend Description" }))), De() && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Filters")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(cg, { config: e, updateField: Ie, rawData: k }))), /* @__PURE__ */ r.createElement(ua.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(An, null, /* @__PURE__ */ r.createElement(Ln, null, /* @__PURE__ */ r.createElement(Pn, null, "Data Table")), /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(dg, { config: e, columns: Object.keys(a[0] || {}), updateField: Ie, isDashboard: y, isLoadedFromUrl: Dn }), " ")), /* @__PURE__ */ r.createElement(ua.Annotate, { name: "Text Annotations" })), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(My, { loadConfig: t, config: e, convertStateToConfig: Kt }))));
}, Nh = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Ou = (e, t) => {
  var n;
  return e ? (n = e.legend) != null && n.hide ? e != null && e.title ? `dataTableSection__${e.title.replace(/\s/g, "")}` : "dataTableSection" : t : "dataTableSection";
}, bk = (e) => {
  e.sort((m, y) => m - y);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(a.length / 2), d = n ? (a[l - 1] + a[l]) / 2 : a[l], f = Math.floor(i.length / 2), u = n ? (i[f - 1] + i[f]) / 2 : i[f];
  return { q1: d, q3: u };
}, Sk = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Ek = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), kk = [
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
], Oh = (e = "#000000", t = !1) => {
  let n = Ma(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
};
const Fh = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, l = a.search, d = t.exec(i);
  if (d && d[1])
    return d[1];
  const f = n.exec(l);
  return f && f[1] ? f[1] : "";
};
function tw({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: l, setEditing: d, hostname: f, link: u, setSharedFilter: m, setSharedFilterValue: y, dashboardConfig: x }) {
  var Bn, Kt, Hn, Qn, Wn, ln, zn, $n, Vn, Dn, _e, ht;
  const b = new sg(), [A, w] = se.useState(!0), [O, k] = se.useState(null), [h, L] = se.useState({}), [F, P] = se.useState(h.data || []), [T, _] = se.useState(void 0), [B, Y] = se.useState(void 0), [X, J] = se.useState(t && ((Kt = (Bn = t == null ? void 0 : t.legend) == null ? void 0 : Bn.seriesHighlight) != null && Kt.length) ? [...(Hn = t == null ? void 0 : t.legend) == null ? void 0 : Hn.seriesHighlight] : []), [re, H] = se.useState("lg"), [ae, j] = se.useState([]), [te, oe] = se.useState(), [ne, ee] = se.useState(), [G, Z] = se.useState(!1), [K, V] = se.useState(!1), [we, Se] = se.useState([]), [ce] = se.useState(`cove-${Math.random().toString(16).slice(-4)}`), [Re, je] = se.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  se.useRef(/* @__PURE__ */ new Map()), se.useRef();
  const Je = se.useRef(null), Oe = (I) => {
    V(I);
  };
  a && console.log("Chart config, isEditor", h, n);
  let { legend: he, title: Fe, description: le, visualizationType: ue } = h;
  n && (!Fe || Fe === "") && (Fe = "Chart Title"), h.table && (!((Qn = h.table) != null && Qn.label) || ((Wn = h.table) == null ? void 0 : Wn.label) === "") && (h.table.label = "Data Table");
  const { barBorderClass: Ae, lineDatapointClass: $e, contentClasses: De, sparkLineStyles: Ze } = fg(h), qe = se.useId(), yt = () => Pc(h.visualizationType, B, h.allowLineToBarGraph), nt = async () => {
    var I;
    if (h.dataUrl) {
      const xe = new URL(h.runtimeDataUrl || h.dataUrl, window.location.origin);
      let Xe = Object.fromEntries(new URLSearchParams(xe.search)), Be = !1;
      if ((I = h.filters) == null || I.forEach((kt) => {
        kt.type === "url" && Xe[kt.queryParameter] !== decodeURIComponent(kt.active) && (Xe[kt.queryParameter] = kt.active, Be = !0);
      }), (!h.formattedData || h.formattedData.urlFiltered) && !Be)
        return;
      let pt = `${xe.origin}${xe.pathname}${Object.keys(Xe).map((kt, Nt) => {
        let Ue = Nt === 0 ? "?" : "&";
        return Ue += kt + "=", Ue += Xe[kt], Ue;
      }).join("")}`, tt = [];
      try {
        const kt = Fh(xe.href);
        kt === "csv" || Jf(pt) ? tt = await fetch(pt).then((Nt) => Nt.text()).then((Nt) => np.parse(Nt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : kt === "json" || ep(pt) ? tt = await fetch(pt).then((Nt) => Nt.json()) : tt = [];
      } catch {
        console.error(`Cannot parse URL: ${pt}`), tt = [];
      }
      h.dataDescription && (tt = b.autoStandardize(tt), tt = b.developerStandardize(tt, h.dataDescription)), Object.assign(tt, { urlFiltered: !0 }), ze({ ...h, runtimeDataUrl: pt, data: tt, formattedData: tt }), tt && (P(tt), _(tt), Y(Si(h.filters, tt)));
    }
  }, Ve = async () => {
    let I = t || await (await fetch(e)).json(), xe = I.data || [];
    const Xe = I.filters ? I.filters.filter((tt) => tt.type === "url").length > 0 : !1;
    if (I.dataUrl && !Xe)
      try {
        const tt = Fh(I.dataUrl);
        (tt === "csv" || Jf(I.dataUrl)) && (xe = await fetch(I.dataUrl + `?v=${vp()}`).then((kt) => kt.text()).then((kt) => (kt = kt.replace(/(".*?")|,/g, (...Ue) => Ue[1] || "|"), kt = kt.replace(/["]+/g, ""), np.parse(kt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (tt === "json" || ep(I.dataUrl)) && (xe = await fetch(I.dataUrl + `?v=${vp()}`).then((kt) => kt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${I.dataUrl}`), xe = [];
      }
    I.dataDescription && (xe = b.autoStandardize(xe), xe = b.developerStandardize(xe, I.dataDescription)), xe && (P(xe), _(xe)), I !== void 0 && I.table !== void 0 && (!I.table || !I.table.showVertical) && (I.table = I.table || {}, I.table.showVertical = !1);
    let Be = { ...Ud, ...I };
    Be.filters && Be.filters.forEach((tt, kt) => {
      const Nt = zy(tt);
      Nt && (Be.filters[kt].active = Nt);
    }), Be.visualizationType === "Box Plot" && (Be.legend.hide = !0), Be.table.show === void 0 && (Be.table.show = !i), Be.series.forEach((tt) => {
      (tt.tooltip === void 0 || tt.tooltip === null) && (tt.tooltip = !0), tt.axis || (tt.axis = "Left");
    }), xe && (Be.data = xe);
    const pt = { ...await $y(Be) };
    ze(pt, xe);
  }, ze = (I, xe) => {
    var tt, kt, Nt;
    let Xe = xe || F;
    Object.keys(Ud).forEach((Ue) => {
      I[Ue] && typeof I[Ue] == "object" && !Array.isArray(I[Ue]) && (I[Ue] = { ...Ud[Ue], ...I[Ue] });
    });
    let Be = [];
    if (I.exclusions && I.exclusions.active)
      if (I.xAxis.type === "categorical" && ((tt = I.exclusions.keys) == null ? void 0 : tt.length) > 0)
        Be = Xe.filter((Ue) => !I.exclusions.keys.includes(Ue[I.xAxis.dataKey]));
      else if (En(I.xAxis) && (I.exclusions.dateStart || I.exclusions.dateEnd) && I.xAxis.dateParseFormat) {
        const Ue = (st) => new Date(st).getTime();
        let Ot = Ue(I.exclusions.dateStart), Vt = Ue(I.exclusions.dateEnd) + 86399999, Ft = typeof Ot !== void 0 && isNaN(Ot) === !1, nn = typeof Vt !== void 0 && isNaN(Vt) === !1;
        Ft && nn ? Be = Xe.filter((st) => Ue(st[I.xAxis.dataKey]) >= Ot && Ue(st[I.xAxis.dataKey]) <= Vt) : Ft ? Be = Xe.filter((st) => Ue(st[I.xAxis.dataKey]) >= Ot) : nn && (Be = Xe.filter((st) => Ue(st[I.xAxis.dataKey]) <= Vt));
      } else
        Be = xe || F;
    else
      Be = xe || F;
    _(Be);
    let pt = [];
    if (I.filters && (I.filters.forEach((Ue, Ot) => {
      let Vt = [];
      Vt = Ue.orderedValues || Te(Ue.columnName, Be).sort(Ue.order === "desc" ? Ek : Sk), I.filters[Ot].values = Vt;
      const Ft = (nn, st) => nn.map((wt) => String(wt)).includes(String(st));
      I.filters[Ot].active = !I.filters[Ot].active || !Ft(Vt, I.filters[Ot].active) ? Vt[0] : I.filters[Ot].active, I.filters[Ot].filterStyle = I.filters[Ot].filterStyle ? I.filters[Ot].filterStyle : "dropdown";
    }), pt = Si(I.filters, Be), Y(pt)), I.xAxis.type === "date-time" && h.orientation === "horizontal" && (I.xAxis.type = "date"), I.runtime = {}, I.runtime.seriesLabels = {}, I.runtime.seriesLabelsAll = [], I.runtime.originalXAxis = I.xAxis, I.visualizationType === "Pie" ? (I.runtime.seriesKeys = (xe || Xe).map((Ue) => Ue[I.xAxis.dataKey]), I.runtime.seriesLabelsAll = I.runtime.seriesKeys) : I.runtime.seriesKeys = I.series ? I.series.map((Ue) => (I.runtime.seriesLabels[Ue.dataKey] = Ue.name || Ue.label || Ue.dataKey, I.runtime.seriesLabelsAll.push(Ue.name || Ue.dataKey), Ue.dataKey)) : [], I.visualizationType === "Box Plot" && I.series) {
      let Ue = Be ? Be.map((wt) => wt[I.xAxis.dataKey]) : Xe.map((wt) => wt[I.xAxis.dataKey]), Ot = Be ? Be.map((wt) => {
        var It;
        return Number(wt[(It = I == null ? void 0 : I.series[0]) == null ? void 0 : It.dataKey]);
      }) : Xe.map((wt) => {
        var It;
        return Number(wt[(It = I == null ? void 0 : I.series[0]) == null ? void 0 : It.dataKey]);
      });
      const Ft = function(wt) {
        return wt.filter(function(It, Wt, yn) {
          return yn.indexOf(It) === Wt;
        });
      }(Ue);
      let nn = [];
      const st = [];
      if (!Ft)
        return;
      Ft.forEach((wt) => {
        try {
          if (!wt)
            throw new Et("No groups resolved in box plots");
          let It = Be ? Be.filter((U) => U[I.xAxis.dataKey] === wt) : Xe.filter((U) => U[I.xAxis.dataKey] === wt), Wt = It.map((U) => {
            var be;
            return Number(U[(be = I == null ? void 0 : I.series[0]) == null ? void 0 : be.dataKey]);
          }), yn = Wt.sort((U, be) => U - be);
          const _n = bk(yn);
          if (!It)
            throw new Et("boxplots dont have data yet");
          if (!st)
            throw new Et("boxplots dont have plots yet");
          I.boxplot.firstQuartilePercentage === "" && (I.boxplot.firstQuartilePercentage = 0), I.boxplot.thirdQuartilePercentage === "" && (I.boxplot.thirdQuartilePercentage = 0);
          const pn = _n.q1, hn = _n.q3, sn = hn - pn, qt = pn - (hn - pn) * 1.5, Sn = hn + (hn - pn) * 1.5, qn = yn.filter((U) => U < qt || U > Sn);
          let g = Wt;
          g = g.filter((U) => !qn.includes(U));
          const R = rs(Wt) || 0, z = ns([R, pn - 1.5 * sn]);
          st.push({
            columnCategory: wt,
            columnMax: rs([ns(Wt), pn + 1.5 * sn]),
            columnThirdQuartile: Number(hn).toFixed(I.dataFormat.roundTo),
            columnMedian: Number(Eg(Wt)).toFixed(I.dataFormat.roundTo),
            columnFirstQuartile: pn.toFixed(I.dataFormat.roundTo),
            columnMin: z,
            columnTotal: Wt.reduce((U, be) => U + be, 0),
            columnSd: Number(xg(Wt)).toFixed(I.dataFormat.roundTo),
            columnMean: Number(Sg(Wt)).toFixed(I.dataFormat.roundTo),
            columnIqr: Number(sn).toFixed(I.dataFormat.roundTo),
            columnLowerBounds: z,
            columnUpperBounds: rs([ns(yn), pn + 1.5 * sn]),
            columnOutliers: qn,
            values: Wt,
            nonOutlierValues: g
          });
        } catch (It) {
          console.error("COVE: ", It.message);
        }
      }), nn = JSON.parse(JSON.stringify(st)), nn.map((wt) => (wt.columnIqr = void 0, wt.nonOutlierValues = void 0, wt.columnLowerBounds = void 0, wt.columnUpperBounds = void 0, null)), I.boxplot.allValues = Ot, I.boxplot.categories = Ft, I.boxplot.plots = st, I.boxplot.tableData = nn;
    }
    I.visualizationType === "Combo" && I.series && (I.runtime.barSeriesKeys = [], I.runtime.lineSeriesKeys = [], I.runtime.areaSeriesKeys = [], I.runtime.forecastingSeriesKeys = [], I.series.forEach((Ue) => {
      Ue.type === "Area Chart" && I.runtime.areaSeriesKeys.push(Ue), Ue.type === "Forecasting" && I.runtime.forecastingSeriesKeys.push(Ue), (Ue.type === "Bar" || Ue.type === "Combo") && I.runtime.barSeriesKeys.push(Ue.dataKey), (Ue.type === "Line" || Ue.type === "dashed-sm" || Ue.type === "dashed-md" || Ue.type === "dashed-lg") && I.runtime.lineSeriesKeys.push(Ue.dataKey), Ue.type === "Combo" && (Ue.type = "Bar");
    })), I.visualizationType === "Forecasting" && I.series && (I.runtime.forecastingSeriesKeys = [], I.series.forEach((Ue) => {
      Ue.type === "Forecasting" && I.runtime.forecastingSeriesKeys.push(Ue);
    })), I.visualizationType === "Area Chart" && I.series && (I.runtime.areaSeriesKeys = [], I.series.forEach((Ue) => {
      I.runtime.areaSeriesKeys.push({ ...Ue, type: "Area Chart" });
    })), I.visualizationType === "Bar" && I.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(I.visualizationType) ? (I.runtime.xAxis = I.yAxis.yAxis ? I.yAxis.yAxis : I.yAxis, I.runtime.yAxis = I.xAxis.xAxis ? I.xAxis.xAxis : I.xAxis, I.runtime.horizontal = !1, I.orientation = "horizontal", I.yAxis.type = I.yAxis.type === "categorical" ? "linear" : I.yAxis.type) : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(I.visualizationType) && !yt() ? (I.runtime.xAxis = I.xAxis, I.runtime.yAxis = I.yAxis, I.runtime.horizontal = !1, I.orientation = "vertical") : (I.runtime.xAxis = I.xAxis, I.runtime.yAxis = I.yAxis, I.runtime.horizontal = !1), I.runtime.uniqueId = Date.now(), I.runtime.editorErrorMessage = I.visualizationType === "Pie" && !I.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", I.runtime.editorErrorMessage = I.visualizationType === "Sankey" && !I.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (kt = I.legend.seriesHighlight) != null && kt.length && J((Nt = I.legend) == null ? void 0 : Nt.seriesHighlight), L(I);
  }, Te = (I, xe = this.state.data) => {
    const Xe = [];
    return xe.forEach((Be) => {
      const pt = Be[I];
      pt && Xe.includes(pt) === !1 && Xe.push(pt);
    }), Xe;
  }, Ye = (I, xe) => {
    let Xe = h.visualizationType === "Bar" && h.visualizationSubType === "horizontal" ? h.xAxis.dataKey : h.yAxis.sortKey, Be = parseFloat(I[Xe]), pt = parseFloat(xe[Xe]);
    return Be < pt ? h.sortData === "ascending" ? 1 : -1 : Be > pt ? h.sortData === "ascending" ? -1 : 1 : 0;
  }, Qe = new Dy((I) => {
    for (let xe of I) {
      let { width: Xe, height: Be } = xe.contentRect, pt = _y(Xe), tt = 32, kt = 350;
      H(pt), n && (Xe = Xe - kt), xe.target.dataset.lollipop === "true" && (Xe = Xe - 2.5), Xe = Xe - tt, j([Xe, Be]);
    }
  }), ft = se.useCallback((I) => {
    I !== null && Qe.observe(I), ee(I);
  }, []);
  function bt(I) {
    return Object.keys(I).length === 0;
  }
  se.useEffect(() => {
    Ve();
  }, []), se.useEffect(() => {
    nt();
  }, [JSON.stringify(h.filters)]), se.useEffect(() => {
    ne && !bt(h) && !G && (pg("cove_loaded", { config: h }), Z(!0));
  }, [ne, h]), se.useEffect(() => {
    const I = (xe) => {
      let Xe = [];
      Xe.push(xe.detail), oe(Xe);
    };
    return hg("cove_filterData", (xe) => I(xe)), () => {
      mg("cove_filterData", I);
    };
  }, [h]), se.useEffect(() => {
    if (te && te[0] && !te[0].hasOwnProperty("active")) {
      let xe = { ...h };
      delete xe.filters, L(xe), Y(Si(te, T));
    }
    if (te && te.length > 0 && te.length > 0 && te[0].hasOwnProperty("active")) {
      let I = { ...h, filters: te };
      L(I), Y(Si(te, T));
    }
  }, [te]), t && se.useEffect(() => {
    Ve();
  }, [t.data]), se.useEffect(() => {
    var I;
    if (F && h.xAxis && ((I = h.runtime) != null && I.seriesKeys)) {
      const xe = ["Paired Bar", "Deviation Bar"].includes(h.visualizationType) ? h.twoColor.palette : h.palette, Xe = { ...or, ...ms };
      let Be = h.customColors || Xe[xe], pt = h.runtime.seriesKeys.length, tt;
      for (; pt > Be.length; )
        Be = Be.concat(Be);
      Be = Be.slice(0, pt), tt = () => Di({
        domain: h.runtime.seriesLabelsAll,
        range: Be,
        unknown: null
      }), k(tt), w(!1);
    }
    h && F && h.sortData && F.sort(Ye);
  }, [h, F]);
  const gt = (I) => {
    if (X.length + 1 === h.runtime.seriesKeys.length && h.visualizationType !== "Forecasting") {
      Mt();
      return;
    }
    const xe = [...X];
    let Xe = I.datum;
    h.runtime.seriesLabels && h.runtime.seriesKeys.forEach((Be) => {
      h.runtime.seriesLabels[Be] === I.datum && (Xe = Be);
    }), xe.indexOf(Xe) !== -1 ? xe.splice(xe.indexOf(Xe), 1) : xe.push(Xe), J(xe);
  }, Mt = () => {
    try {
      const I = Je.current;
      if (!I)
        throw new Et("No legend available to set previous focus on.");
      I.focus();
    } catch (I) {
      console.error("COVE:", I.message);
    }
    J([]);
  }, Zt = h.orientation === "horizontal" ? "yAxis" : "xAxis", an = (I, xe = !0) => {
    let Xe = Em(h.runtime[Zt].dateParseFormat)(I);
    return Xe || (xe && (h.runtime.editorErrorMessage = `Error parsing date "${I}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Ut = (I) => Xd(h.runtime[Zt].dateDisplayFormat)(I), Qt = (I) => Xd(h.tooltips.dateDisplayFormat)(I);
  function zt(I, xe) {
    const Be = document.createElement("canvas").getContext("2d");
    if (!Be) {
      console.error("2d context not found");
      return;
    }
    return Be.font = xe || getComputedStyle(document.body).font, Math.ceil(Be.measureText(I).width);
  }
  const un = (I, xe, Xe = !1, Be, pt, tt) => {
    if (isNaN(I) || !I)
      return I;
    const kt = I < 0;
    (xe === void 0 || !xe) && (xe = "left"), kt && (I = Math.abs(I));
    let {
      dataFormat: { commas: Nt, abbreviated: Ue, roundTo: Ot, prefix: Vt, suffix: Ft, rightRoundTo: nn, bottomRoundTo: st, rightPrefix: wt, rightSuffix: It, bottomPrefix: Wt, bottomSuffix: yn, bottomAbbreviated: _n }
    } = h;
    String(I).indexOf(",") !== -1 && (I = I.replaceAll(",", ""));
    let pn = I, hn = {
      useGrouping: !!Nt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (xe === "left" || xe === void 0) {
      let Sn;
      tt !== void 0 ? Sn = tt ? Number(tt) : 0 : Sn = Ot ? Number(Ot) : 0, hn = {
        useGrouping: tt ? !0 : !!h.dataFormat.commas,
        minimumFractionDigits: Sn,
        maximumFractionDigits: Sn
      };
    }
    xe === "right" && (hn = {
      useGrouping: !!h.dataFormat.rightCommas,
      minimumFractionDigits: nn ? Number(nn) : 0,
      maximumFractionDigits: nn ? Number(nn) : 0
    });
    const sn = () => h.forestPlot.type === "Logarithmic" && !st ? 2 : Number(st) ? Number(st) : 0;
    if (xe === "bottom" && (hn = {
      useGrouping: !!h.dataFormat.bottomCommas,
      minimumFractionDigits: sn(),
      maximumFractionDigits: sn()
    }), I = gp(I), isNaN(I))
      return h.runtime.editorErrorMessage = `Unable to parse number from data ${pn}. Try reviewing your data and selections in the Data Series section.`, pn;
    if (!h.dataFormat)
      return I;
    if (h.dataCutoff) {
      let Sn = gp(h.dataCutoff);
      I < Sn && (I = Sn);
    }
    xe === "left" && Nt && Ue && Xe || xe === "bottom" && Nt && Ue && Xe ? I = I : I = I.toLocaleString("en-US", hn);
    let qt = "";
    return Ue && xe === "left" && Xe && (I = Nh(parseFloat(I))), _n && xe === "bottom" && Xe && (I = Nh(parseFloat(I))), Be && xe === "left" ? qt = Be + qt : Vt && xe === "left" && (qt += Vt), wt && xe === "right" && (qt += wt), Wt && xe === "bottom" && (qt += Wt), qt += I, pt && xe === "left" ? qt += pt : Ft && xe === "left" && (qt += Ft), It && xe === "right" && (qt += It), yn && xe === "bottom" && (qt += yn), kt && (qt = "-" + qt), String(qt);
  }, At = {
    "Paired Bar": /* @__PURE__ */ r.createElement(jr, null),
    Forecasting: /* @__PURE__ */ r.createElement(jr, null),
    Bar: /* @__PURE__ */ r.createElement(jr, null),
    Line: /* @__PURE__ */ r.createElement(jr, null),
    Combo: /* @__PURE__ */ r.createElement(jr, null),
    Pie: /* @__PURE__ */ r.createElement(dS, null),
    "Box Plot": /* @__PURE__ */ r.createElement(jr, null),
    "Area Chart": /* @__PURE__ */ r.createElement(jr, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(jr, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(jr, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(jr, null)
  }, Rt = () => {
    if (h.visualizationType === "Sankey" || h.visualizationType === "Forecasting" || h.visualizationType === "Forest Plot")
      return !1;
    if (h.visualizationType === "Pie") {
      if ((h == null ? void 0 : h.yAxis.dataKey) === void 0)
        return !0;
    } else if ((h == null ? void 0 : h.series) === void 0 || !((h == null ? void 0 : h.series.length) > 0))
      return !0;
    return !h.xAxis.dataKey;
  }, kn = (I, xe) => {
    if (I === null || I === "" || I === void 0)
      return "";
    if (typeof I == "string" && I.length > 0 && h.legend.type === "equalnumber")
      return I;
    let Xe = I, Be;
    if (Object.keys(h.columns).length > 0 && Object.keys(h.columns).forEach(function(pt) {
      var tt = h.columns[pt];
      tt.name === xe && (Be = tt);
    }), Be === void 0 && (Be = h.type === "chart" ? h.dataFormat : h.primary, Be.useCommas = Be.commas, Be.roundToPlace = Be.roundTo ? Be.roundTo : ""), Be) {
      let pt = !1, tt = 0;
      Number(I) && (Be.roundToPlace >= 0 && (pt = Be.roundToPlace ? Be.roundToPlace !== "" || Be.roundToPlace !== null : !1, tt = Be.roundToPlace ? Number(Be.roundToPlace) : 0, Be.hasOwnProperty("roundToPlace") && pt && (Xe = Number(I).toFixed(tt))), Be.hasOwnProperty("useCommas") && Be.useCommas === !0 && (Xe = Number(I).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: pt ? tt : 0,
        maximumFractionDigits: pt ? tt : 5
      }))), Xe = (Be.prefix || "") + Xe + (Be.suffix || "");
    }
    return Xe;
  }, Ie = () => {
    const I = (Xe) => {
      Xe && Xe.preventDefault();
      let Be = { ...h };
      delete Be.newViz, ze(Be);
    }, xe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: xe }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement(hs, { className: "btn", style: { margin: "1em auto" }, disabled: Rt(), onClick: (Xe) => I(Xe) }, "I'm Done")));
  }, Et = () => {
    const I = {
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
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: I }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, h.runtime.editorErrorMessage)));
  }, vn = (I) => {
    try {
      if (!I)
        throw new Et("COVE: No rowObj in applyLegendToRow");
      if (h.type === "navigation") {
        let xe = or[h.color] || or.bluegreenreverse;
        return Oh(xe[3]);
      }
      return Oh();
    } catch (xe) {
      console.error("COVE: ", xe);
    }
  }, lt = (I) => {
    var xe;
    return Array.isArray(I) ? h.visualizationType === "Forecasting" ? I : (xe = h == null ? void 0 : h.xAxis) != null && xe.dataKey ? b.cleanData(I, h.xAxis.dataKey) : I : [];
  }, on = (I) => I;
  let Xt = /* @__PURE__ */ r.createElement(Jy, null);
  const $t = (I) => {
    if (!(!I || !I.toLowerCase))
      return I.toLowerCase().replaceAll(/ /g, "-");
  }, Jt = () => {
    var Xe, Be, pt;
    const I = (he == null ? void 0 : he.position) === "bottom" || ["sm", "xs", "xxs"].includes(re), xe = ["chart-container", "p-relative"];
    return ((Xe = h.legend) == null ? void 0 : Xe.position) === "bottom" && xe.push("bottom"), (Be = h.legend) != null && Be.hide && xe.push("legend-hidden"), $e && xe.push($e), h.barHasBorder || xe.push("chart-bar--no-border"), (pt = h.brush) != null && pt.active && (x == null ? void 0 : x.type) === "dashboard" && (!I || h.legend.hide) && xe.push("dashboard-brush"), xe.push(...De), xe;
  }, wn = () => {
    var Xe, Be;
    const I = ["subtext "], xe = (he == null ? void 0 : he.position) === "bottom" || ["sm", "xs", "xxs"].includes(re);
    return h.isResponsiveTicks && I.push("subtext--responsive-ticks "), (Xe = h.brush) != null && Xe.active && !xe && I.push("subtext--brush-active "), (Be = h.brush) != null && Be.active && h.legend.hide && I.push("subtext--brush-active "), I;
  };
  if (!A) {
    const I = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${h.dataKey}`, className: "margin-left-href" }, h.dataKey, " (Go to Table)");
    Xt = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(xk, null), /* @__PURE__ */ r.createElement(Kd.Responsive, { isEditor: n }, h.newViz && /* @__PURE__ */ r.createElement(Ie, null), h.newViz === void 0 && n && h.runtime && ((ln = h.runtime) == null ? void 0 : ln.editorErrorMessage) && /* @__PURE__ */ r.createElement(Et, null), !Rt() && !h.newViz && /* @__PURE__ */ r.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${$t(h.visualizationType)}`, "aria-label": pf(h), tabIndex: 0 }, /* @__PURE__ */ r.createElement(Wy, { showTitle: h.showTitle, isDashboard: i, title: Fe, superTitle: h.superTitle, classes: ["chart-title", `${h.theme}`, "cove-component__header"], style: void 0 }), h.filters && !te && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(tp, { config: h, setConfig: L, setFilteredData: Y, filteredData: B, excludedData: T, filterData: Si, dimensions: ae }), /* @__PURE__ */ r.createElement(dp, { skipId: Ou(h, qe), skipMessage: "Skip Over Chart Container" }), ((zn = h.annotations) == null ? void 0 : zn.length) > 0 && /* @__PURE__ */ r.createElement(dp, { skipId: Ou(h, qe), skipMessage: "Skip over annotations", key: "skip-annotations" }), (h == null ? void 0 : h.introText) && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, Pi(h.introText)), /* @__PURE__ */ r.createElement("div", { className: Jt().join(" ") }, h.visualizationType !== "Spark Line" && h.visualizationType !== "Line" && At[h.visualizationType], h.visualizationType === "Line" && (yt() ? At.Bar : At.Line), h.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(tp, { config: h, setConfig: L, setFilteredData: Y, filteredData: B, excludedData: T, filterData: Si, dimensions: ae }), (h == null ? void 0 : h.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Pi(h.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...Ze } }, /* @__PURE__ */ r.createElement(Fp, null, (xe) => /* @__PURE__ */ r.createElement(YE, { width: xe.width, height: xe.height }))), le && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Pi(le))), h.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(Fp, { "aria-hidden": "true" }, (xe) => /* @__PURE__ */ r.createElement(BS, { runtime: h.runtime, width: xe.width, height: xe.height })), !h.legend.hide && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(XE, { ref: Je, skipId: Ou(h, qe) })), i && h.table && h.table.show && h.table.showDataTableLink ? I : u && u, le && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: wn().join("") }, Pi(le)), !1, /* @__PURE__ */ r.createElement(Td.Section, { classes: ["download-buttons"] }, h.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(Td.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: h, elementToCapture: ce }), h.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(Td.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: h, elementToCapture: ce })), (h.xAxis.dataKey && h.table.show && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" || h.visualizationType === "Sankey" && h.table.show) && /* @__PURE__ */ r.createElement(
      Qy,
      {
        config: h,
        rawData: h.visualizationType === "Sankey" ? (Vn = ($n = h == null ? void 0 : h.data) == null ? void 0 : $n[0]) == null ? void 0 : Vn.tableData : h.table.customTableConfig ? Si(h.filters, h.data) : h.data,
        runtimeData: h.visualizationType === "Sankey" ? (_e = (Dn = h == null ? void 0 : h.data) == null ? void 0 : Dn[0]) == null ? void 0 : _e.tableData : B || T,
        expandDataTable: h.table.expanded,
        columns: h.columns,
        displayDataAsText: kn,
        displayGeoName: on,
        applyLegendToRow: vn,
        tableTitle: h.table.label,
        indexTitle: h.table.indexLabel,
        vizTitle: Fe,
        viewport: re,
        tabbingId: Ou(h, qe),
        colorScale: O
      }
    ), ((ht = h == null ? void 0 : h.annotations) == null ? void 0 : ht.length) > 0 && /* @__PURE__ */ r.createElement(qf.Dropdown, null), (h == null ? void 0 : h.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, Pi(h.footnotes)))));
  }
  const bn = {
    brushConfig: Re,
    capitalize: (I) => I.charAt(0).toUpperCase() + I.slice(1),
    clean: lt,
    colorPalettes: or,
    colorScale: O,
    config: h,
    currentViewport: re,
    dashboardConfig: x,
    debugSvg: a,
    dimensions: ae,
    dynamicLegendItems: we,
    excludedData: T,
    formatDate: Ut,
    formatNumber: un,
    formatTooltipsDate: Qt,
    getTextWidth: zt,
    getXAxisData: (I) => En(h.runtime.xAxis) ? an(I[h.runtime.originalXAxis.dataKey]).getTime() : I[h.runtime.originalXAxis.dataKey],
    getYAxisData: (I, xe) => I[xe],
    handleChartAriaLabels: pf,
    handleLineType: sy,
    highlight: gt,
    highlightReset: Mt,
    imageId: ce,
    isDashboard: i,
    isLegendBottom: (he == null ? void 0 : he.position) === "bottom" || ["sm", "xs", "xxs"].includes(re),
    isDebug: a,
    isDraggingAnnotation: K,
    handleDragStateChange: Oe,
    isEditor: n,
    isNumber: Bu,
    legend: he,
    lineOptions: kk,
    loading: A,
    missingRequiredSections: Rt,
    outerContainerRef: ft,
    parseDate: an,
    rawData: F ?? {},
    seriesHighlight: X,
    setBrushConfig: je,
    setConfig: L,
    setDynamicLegendItems: Se,
    setEditing: d,
    setFilteredData: Y,
    setParentConfig: l,
    setSeriesHighlight: J,
    setSharedFilter: m,
    setSharedFilterValue: y,
    tableData: B || T,
    // do not clean table data
    transformedData: lt(B || T),
    // do this right before passing to components
    twoColorPalette: ms,
    unfilteredData: F,
    updateConfig: ze
  };
  return /* @__PURE__ */ r.createElement(xt.Provider, { value: bn }, /* @__PURE__ */ r.createElement(Kd.VisualizationWrapper, { config: h, isEditor: n, currentViewport: re, ref: ft, imageId: ce, showEditorPanel: h == null ? void 0 : h.showEditorPanel }, Xt));
}
export {
  tw as C
};
