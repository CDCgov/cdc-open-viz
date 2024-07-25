import { r as ce, R as r } from "./storybook-index-45401197.es.js";
import { v as Qf, a as Ry, i as Jf, b as ep, g as Dy } from "./storybook-isSolr-cb863e7a.es.js";
import { _ as Kr, P as _y, D as Ny, C as Oy, A as Fy, d as bi, F as tp, g as My } from "./storybook-Filters-35ab43ae.es.js";
import { L as Ud, a as zy } from "./storybook-coveUpdateWorker-cf57c593.es.js";
import { B as ps } from "./storybook-Button-d74e310e.es.js";
import { p as Iy, P as We } from "./storybook-index-43433e35.es.js";
import { d as $y } from "./storybook-debounce-cc216a80.es.js";
import { a as By } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as np } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Li, T as Hy } from "./storybook-index-e5bf02db.es.js";
import { _ as fn } from "./storybook-extends-70f3d2a3.es.js";
import { p as rp, i as Si, j as Hr, c as Ut, k as ap, a as yc, m as Zn, t as Nu, n as $o, o as kd, q as ip, r as Gn, u as op, v as Wy, w as Vy, l as lp, G as jy, x as hs, y as ar, z as Bu, h as Uo, T as St, P as Uy, f as Hu, H as Ky, C as sp, d as Yy, M as Mh, E as Xy, A as qy, e as zh, I as up } from "./storybook-InputToggle-1c80137d.es.js";
import { t as Gy, a as wn, b as Ef, L as cp, c as ql, g as Ei, f as Ih, S as dp, M as wd, D as Zy } from "./storybook-DataTable-d3306182.es.js";
import { E as Or, L as Qy } from "./storybook-Loading-f180d060.es.js";
import { b as gc, t as Jy, e as $h, f as fp, g as eg, h as tg, j as ng, k as pp, m as rg, G as it, c as An } from "./storybook-Group-e6c0d0df.es.js";
import { s as es, t as Bh, a as Hh, b as Wh, d as Ss, B as kr, c as $n, C as ag } from "./storybook-Circle-4d1a558c.es.js";
import { R as ig } from "./storybook-index-633d712d.es.js";
import { c as ms } from "./storybook-chroma-b564050a.es.js";
import { _ as hr } from "./storybook-lodash-c15d8e1c.es.js";
import { t as Vh, m as Td, f as jh, d as hu, a as mu, b as yu, n as hp, o as og, p as mp, c as Uh, e as Kh } from "./storybook-year-24bd1dc7.es.js";
import { a as st } from "./storybook-Icon-96a1fdd8.es.js";
import { a as Pn, b as Rn, c as Dn, d as _n, A as Pi, D as lg } from "./storybook-DataTransform-1390427f.es.js";
import { C as sg, V as ug, a as yp } from "./storybook-footnoteSymbols-bbf2dda3.es.js";
import { S as Ct, T as et, C as lt, D as cg } from "./storybook-DataTableEditor-5aedf4d7.es.js";
import { T as ge } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ma } from "./storybook-InputSelect-20478396.es.js";
import { S as Yh } from "./storybook-icon-check-0ef17e76.es.js";
import { A as gu } from "./storybook-Accordion-0408a951.es.js";
import { u as dg, p as fg, s as pg, a as hg } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as gp } from "./storybook-numberFromString-24623c03.es.js";
import { c as vp } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Xh(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xp(e) {
  let t = e, n = e;
  e.length === 1 && (t = (d, f) => e(d) - f, n = mg(e));
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
function mg(e) {
  return (t, n) => Xh(e(t), n);
}
function* yg(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function gg(e, t) {
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
function vg(e, t) {
  const n = gg(e, t);
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
function qh(e, t, n = 0, a = e.length - 1, i = Xh) {
  for (; a > n; ) {
    if (a - n > 600) {
      const u = a - n + 1, m = t - n + 1, y = Math.log(u), x = 0.5 * Math.exp(2 * y / 3), S = 0.5 * Math.sqrt(y * x * (u - x) / u) * (m - u / 2 < 0 ? -1 : 1), R = Math.max(n, Math.floor(t - m * x / u + S)), T = Math.min(a, Math.floor(t + (u - m) * x / u + S));
      qh(e, t, R, T, i);
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
function xg(e, t, n) {
  if (e = Float64Array.from(yg(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return ns(e);
    if (t >= 1)
      return ts(e);
    var a, i = (a - 1) * t, l = Math.floor(i), d = ts(qh(e, l).subarray(0, l + 1)), f = ns(e.subarray(l + 1));
    return d + (f - d) * (i - l);
  }
}
function bg(e, t) {
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
function Sg(e, t) {
  return xg(e, 0.5, t);
}
class bp extends Map {
  constructor(t, n = wg) {
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
    return super.set(Eg(this, t), n);
  }
  delete(t) {
    return super.delete(kg(this, t));
  }
}
function Sp({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Eg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function kg({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function wg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Tg(e, t, n) {
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
  }, gc.apply(i, arguments), i;
}
function wf() {
  var e = kf().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, l, d, f = !1, u = 0, m = 0, y = 0.5;
  delete e.unknown;
  function x() {
    var S = t().length, R = i < a, T = R ? i : a, F = R ? a : i;
    l = (F - T) / Math.max(1, S - u + m * 2), f && (l = Math.floor(l)), T += (F - T - l * (S - u)) * y, d = l * (1 - u), f && (T = Math.round(T), d = Math.round(d));
    var k = Tg(S).map(function(h) {
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
    return wf(t(), [a, i]).round(f).paddingInner(u).paddingOuter(m).align(y);
  }, gc.apply(x(), arguments);
}
function Gh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Gh(t());
  }, e;
}
function Cg() {
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
function Ag(e) {
  return -Math.log(-e);
}
function Lg(e) {
  return -Math.exp(-e);
}
function Pg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Rg(e) {
  return e === 10 ? Pg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Dg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Tp(e) {
  return (t, n) => -e(-t, n);
}
function _g(e) {
  const t = e(kp, wp), n = t.domain;
  let a = 10, i, l;
  function d() {
    return i = Dg(a), l = Rg(a), n()[0] < 0 ? (i = Tp(i), l = Tp(l), e(Ag, Lg)) : e(kp, wp), t;
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
      h.length * 2 < k && (h = fp(m, y, k));
    } else
      h = fp(S, R, Math.min(R - S, k)).map(l);
    return x ? h.reverse() : h;
  }, t.tickFormat = (f, u) => {
    if (f == null && (f = 10), u == null && (u = a === 10 ? "s" : ","), typeof u != "function" && (!(a % 1) && (u = eg(u)).precision == null && (u.trim = !0), u = tg(u)), f === 1 / 0)
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
  const e = _g(Jy()).domain([1, 10]);
  return e.copy = () => $h(e, Qh()).base(e.base()), gc.apply(e, arguments), e;
}
const Wu = Vh(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Wu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Vh((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Wu);
Wu.range;
function Ng(e, t, n, a, i, l) {
  const d = [
    [es, 1, hu],
    [es, 5, 5 * hu],
    [es, 15, 15 * hu],
    [es, 30, 30 * hu],
    [l, 1, mu],
    [l, 5, 5 * mu],
    [l, 15, 15 * mu],
    [l, 30, 30 * mu],
    [i, 1, yu],
    [i, 3, 3 * yu],
    [i, 6, 6 * yu],
    [i, 12, 12 * yu],
    [a, 1, hp],
    [a, 2, 2 * hp],
    [n, 1, og],
    [t, 1, mp],
    [t, 3, 3 * mp],
    [e, 1, Td]
  ];
  function f(m, y, x) {
    const S = y < m;
    S && ([m, y] = [y, m]);
    const R = x && typeof x.range == "function" ? x : u(m, y, x), T = R ? R.range(m, +y + 1) : [];
    return S ? T.reverse() : T;
  }
  function u(m, y, x) {
    const S = Math.abs(y - m) / x, R = ng(([, , k]) => k).right(d, S);
    if (R === d.length)
      return e.every(pp(m / Td, y / Td, x));
    if (R === 0)
      return Wu.every(Math.max(pp(m, y, x), 1));
    const [T, F] = d[S / d[R - 1][2] < d[R][2] / S ? R - 1 : R];
    return T.every(F);
  }
  return [f, u];
}
const [Og, Fg] = Ng(jh, Wh, Kh, Uh, Hh, Bh);
function Mg(e) {
  return new Date(e);
}
function zg(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Jh(e, t, n, a, i, l, d, f, u, m) {
  var y = rg(), x = y.invert, S = y.domain, R = m(".%L"), T = m(":%S"), F = m("%I:%M"), k = m("%I %p"), h = m("%a %d"), P = m("%b %d"), O = m("%B"), C = m("%Y");
  function N(_) {
    return (u(_) < _ ? R : f(_) < _ ? T : d(_) < _ ? F : l(_) < _ ? k : a(_) < _ ? i(_) < _ ? h : P : n(_) < _ ? O : C)(_);
  }
  return y.invert = function(_) {
    return new Date(x(_));
  }, y.domain = function(_) {
    return arguments.length ? S(Array.from(_, zg)) : S().map(Mg);
  }, y.ticks = function(_) {
    var B = S();
    return e(B[0], B[B.length - 1], _ ?? 10);
  }, y.tickFormat = function(_, B) {
    return B == null ? N : m(B);
  }, y.nice = function(_) {
    var B = S();
    return (!_ || typeof _.range != "function") && (_ = t(B[0], B[B.length - 1], _ ?? 10)), _ ? S(Zh(B, _)) : y;
  }, y.copy = function() {
    return $h(y, Jh(e, t, n, a, i, l, d, f, u, m));
  }, y;
}
function Ig() {
  return gc.apply(Jh(Og, Fg, jh, Wh, Kh, Uh, Hh, Bh, es, Gy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var $g = Ss("domain", "range", "reverse", "align", "padding", "round");
function Kd(e) {
  return $g(wf(), e);
}
var Bg = Ss("domain", "range", "reverse", "align", "padding", "round");
function Bo(e) {
  return Bg(Cg(), e);
}
var Hg = Ss("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Wg(e) {
  return Hg(Ig(), e);
}
var Vg = Ss("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Vu(e) {
  return Vg(Qh(), e);
}
var jg = Ss("domain", "range", "reverse", "unknown");
function Ho(e) {
  return jg(kf(), e);
}
function Ug(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Kg(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, l) {
    return t == null || l.length <= t || i % Math.round((l.length - 1) / t) === 0;
  });
}
function Yg(e) {
  return e == null ? void 0 : e.toString();
}
var Ri = [], Xg = function() {
  return Ri.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, qg = function() {
  return Ri.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Cp = "ResizeObserver loop completed with undelivered notifications.", Gg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Cp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Cp), window.dispatchEvent(e);
}, ys;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ys || (ys = {}));
var Di = function(e) {
  return Object.freeze(e);
}, em = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Di(this);
  }
  return e;
}(), tm = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Di(this);
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
}, Zg = function(e) {
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
}, rs = typeof window < "u" ? window : {}, vu = /* @__PURE__ */ new WeakMap(), Lp = /auto|scroll/, Qg = /^tb|vertical/, Jg = /msie|trident/i.test(rs.navigator && rs.navigator.userAgent), Wr = function(e) {
  return parseFloat(e || "0");
}, Vo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new em((n ? t : e) || 0, (n ? e : t) || 0);
}, Pp = Di({
  devicePixelContentBoxSize: Vo(),
  borderBoxSize: Vo(),
  contentBoxSize: Vo(),
  contentRect: new tm(0, 0, 0, 0)
}), rm = function(e, t) {
  if (t === void 0 && (t = !1), vu.has(e) && !t)
    return vu.get(e);
  if (nm(e))
    return vu.set(e, Pp), Pp;
  var n = getComputedStyle(e), a = Tf(e) && e.ownerSVGElement && e.getBBox(), i = !Jg && n.boxSizing === "border-box", l = Qg.test(n.writingMode || ""), d = !a && Lp.test(n.overflowY || ""), f = !a && Lp.test(n.overflowX || ""), u = a ? 0 : Wr(n.paddingTop), m = a ? 0 : Wr(n.paddingRight), y = a ? 0 : Wr(n.paddingBottom), x = a ? 0 : Wr(n.paddingLeft), S = a ? 0 : Wr(n.borderTopWidth), R = a ? 0 : Wr(n.borderRightWidth), T = a ? 0 : Wr(n.borderBottomWidth), F = a ? 0 : Wr(n.borderLeftWidth), k = x + m, h = u + y, P = F + R, O = S + T, C = f ? e.offsetHeight - O - e.clientHeight : 0, N = d ? e.offsetWidth - P - e.clientWidth : 0, _ = i ? k + P : 0, B = i ? h + O : 0, q = a ? a.width : Wr(n.width) - _ - N, U = a ? a.height : Wr(n.height) - B - C, ne = q + k + N + P, re = U + h + C + O, V = Di({
    devicePixelContentBoxSize: Vo(Math.round(q * devicePixelRatio), Math.round(U * devicePixelRatio), l),
    borderBoxSize: Vo(ne, re, l),
    contentBoxSize: Vo(q, U, l),
    contentRect: new tm(x, u, q, U)
  });
  return vu.set(e, V), V;
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
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Di([n.borderBoxSize]), this.contentBoxSize = Di([n.contentBoxSize]), this.devicePixelContentBoxSize = Di([n.devicePixelContentBoxSize]);
  }
  return e;
}(), om = function(e) {
  if (nm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, ev = function() {
  var e = 1 / 0, t = [];
  Ri.forEach(function(d) {
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
  Ri.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (om(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, tv = function() {
  var e = 0;
  for (Rp(e); Xg(); )
    e = ev(), Rp(e);
  return qg() && Gg(), e > 0;
}, Cd, lm = [], nv = function() {
  return lm.splice(0).forEach(function(e) {
    return e();
  });
}, rv = function(e) {
  if (!Cd) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return nv();
    }).observe(n, a), Cd = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  lm.push(e), Cd();
}, av = function(e) {
  rv(function() {
    requestAnimationFrame(e);
  });
}, Ou = 0, iv = function() {
  return !!Ou;
}, ov = 250, lv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Dp = [
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
}, Ad = !1, sv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = ov), !Ad) {
      Ad = !0;
      var a = _p(t);
      av(function() {
        var i = !1;
        try {
          i = tv();
        } finally {
          if (Ad = !1, t = a - _p(), !iv())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, lv);
    };
    document.body ? n() : rs.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Dp.forEach(function(n) {
      return rs.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Dp.forEach(function(n) {
      return rs.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Yd = new sv(), Np = function(e) {
  !Ou && e > 0 && Yd.start(), Ou += e, !Ou && Yd.stop();
}, uv = function(e) {
  return !Tf(e) && !Zg(e) && getComputedStyle(e).display === "inline";
}, cv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ys.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = am(this.target, this.observedBox, !0);
    return uv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), dv = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), xu = /* @__PURE__ */ new WeakMap(), Op = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, bu = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new dv(t, n);
    xu.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = xu.get(t), l = i.observationTargets.length === 0;
    Op(i.observationTargets, n) < 0 && (l && Ri.push(i), i.observationTargets.push(new cv(n, a && a.box)), Np(1), Yd.schedule());
  }, e.unobserve = function(t, n) {
    var a = xu.get(t), i = Op(a.observationTargets, n), l = a.observationTargets.length === 1;
    i >= 0 && (l && Ri.splice(Ri.indexOf(a), 1), a.observationTargets.splice(i, 1), Np(-1));
  }, e.disconnect = function(t) {
    var n = this, a = xu.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), fv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    bu.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ap(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    bu.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ap(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    bu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    bu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: fv,
  ResizeObserverEntry: im,
  ResizeObserverSize: em
}, Symbol.toStringTag, { value: "Module" })), hv = /* @__PURE__ */ By(pv);
var Fp = cm, Da = um(Iy), mv = um($y), Mo = vv(ce), yv = hv, gv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function sm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (sm = function(i) {
    return i ? n : t;
  })(e);
}
function vv(e, t) {
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
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ju.apply(this, arguments);
}
function xv(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var bv = [];
function cm(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, l = e.ignoreDimensions, d = l === void 0 ? bv : l, f = e.parentSizeStyles, u = f === void 0 ? {
    width: "100%",
    height: "100%"
  } : f, m = e.enableDebounceLeadingCall, y = m === void 0 ? !0 : m, x = xv(e, gv), S = (0, Mo.useRef)(null), R = (0, Mo.useRef)(0), T = (0, Mo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), F = T[0], k = T[1], h = (0, Mo.useMemo)(function() {
    var P = Array.isArray(d) ? d : [d];
    return (0, mv.default)(function(O) {
      k(function(C) {
        var N = Object.keys(C), _ = N.filter(function(q) {
          return C[q] !== O[q];
        }), B = _.every(function(q) {
          return P.includes(q);
        });
        return B ? C : O;
      });
    }, i, {
      leading: y
    });
  }, [i, y, d]);
  return (0, Mo.useEffect)(function() {
    var P = new yv.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(C) {
        var N = C.contentRect, _ = N.left, B = N.top, q = N.width, U = N.height;
        R.current = window.requestAnimationFrame(function() {
          h({
            width: q,
            height: U,
            top: B,
            left: _
          });
        });
      });
    });
    return S.current && P.observe(S.current), function() {
      window.cancelAnimationFrame(R.current), P.disconnect(), h != null && h.cancel && h.cancel();
    };
  }, [h]), /* @__PURE__ */ Mo.default.createElement("div", ju({
    style: u,
    ref: S,
    className: t
  }, x), n(ju({}, F, {
    ref: S.current,
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
var Ld = /* @__PURE__ */ new Date(), Pd = /* @__PURE__ */ new Date();
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
    return Ld.setTime(+l), Pd.setTime(+d), e(Ld), e(Pd), Math.floor(n(Ld, Pd));
  }, i.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? i.filter(a ? function(d) {
      return a(d) % l === 0;
    } : function(d) {
      return i.count(0, d) % l === 0;
    }) : i;
  }), i;
}
const Sv = 1e3, Cf = Sv * 60, Ev = Cf * 60, Af = Ev * 24, dm = Af * 7;
var fm = ca(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Cf) / Af,
  (e) => e.getDate() - 1
);
const pm = fm;
fm.range;
function Mi(e) {
  return ca(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Cf) / dm;
  });
}
var hm = Mi(0), Uu = Mi(1), kv = Mi(2), wv = Mi(3), Ko = Mi(4), Tv = Mi(5), Cv = Mi(6);
hm.range;
Uu.range;
kv.range;
wv.range;
Ko.range;
Tv.range;
Cv.range;
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
function zi(e) {
  return ca(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / dm;
  });
}
var gm = zi(0), Ku = zi(1), Av = zi(2), Lv = zi(3), Yo = zi(4), Pv = zi(5), Rv = zi(6);
gm.range;
Ku.range;
Av.range;
Lv.range;
Yo.range;
Pv.range;
Rv.range;
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
function Rd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Zl(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Dv(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, l = e.days, d = e.shortDays, f = e.months, u = e.shortMonths, m = Ql(i), y = Jl(i), x = Ql(l), S = Jl(l), R = Ql(d), T = Jl(d), F = Ql(f), k = Jl(f), h = Ql(u), P = Jl(u), O = {
    a: te,
    A: se,
    b: G,
    B: Q,
    c: null,
    d: Hp,
    e: Hp,
    f: ex,
    g: cx,
    G: fx,
    H: Zv,
    I: Qv,
    j: Jv,
    L: vm,
    m: tx,
    M: nx,
    p: K,
    q: W,
    Q: jp,
    s: Up,
    S: rx,
    u: ax,
    U: ix,
    V: ox,
    w: lx,
    W: sx,
    x: null,
    X: null,
    y: ux,
    Y: dx,
    Z: px,
    "%": Vp
  }, C = {
    a: Ce,
    A: xe,
    b: fe,
    B: Re,
    c: null,
    d: Wp,
    e: Wp,
    f: gx,
    g: Ax,
    G: Px,
    H: hx,
    I: mx,
    j: yx,
    L: bm,
    m: vx,
    M: xx,
    p: je,
    q: Ze,
    Q: jp,
    s: Up,
    S: bx,
    u: Sx,
    U: Ex,
    V: kx,
    w: wx,
    W: Tx,
    x: null,
    X: null,
    y: Cx,
    Y: Lx,
    Z: Rx,
    "%": Vp
  }, N = {
    a: ne,
    A: re,
    b: V,
    B: Y,
    c: J,
    d: $p,
    e: $p,
    f: Yv,
    g: Ip,
    G: zp,
    H: Bp,
    I: Bp,
    j: Vv,
    L: Kv,
    m: Wv,
    M: jv,
    p: U,
    q: Hv,
    Q: qv,
    s: Gv,
    S: Uv,
    u: Mv,
    U: zv,
    V: Iv,
    w: Fv,
    W: $v,
    x: Z,
    X: ae,
    y: Ip,
    Y: zp,
    Z: Bv,
    "%": Xv
  };
  O.x = _(n, O), O.X = _(a, O), O.c = _(t, O), C.x = _(n, C), C.X = _(a, C), C.c = _(t, C);
  function _(Ae, me) {
    return function(Fe) {
      var ue = [], de = -1, Le = 0, ke = Ae.length, Ie, qe, Qe;
      for (Fe instanceof Date || (Fe = /* @__PURE__ */ new Date(+Fe)); ++de < ke; )
        Ae.charCodeAt(de) === 37 && (ue.push(Ae.slice(Le, de)), (qe = Mp[Ie = Ae.charAt(++de)]) != null ? Ie = Ae.charAt(++de) : qe = Ie === "e" ? " " : "0", (Qe = me[Ie]) && (Ie = Qe(Fe, qe)), ue.push(Ie), Le = de + 1);
      return ue.push(Ae.slice(Le, de)), ue.join("");
    };
  }
  function B(Ae, me) {
    return function(Fe) {
      var ue = Zl(1900, void 0, 1), de = q(ue, Ae, Fe += "", 0), Le, ke;
      if (de != Fe.length)
        return null;
      if ("Q" in ue)
        return new Date(ue.Q);
      if ("s" in ue)
        return new Date(ue.s * 1e3 + ("L" in ue ? ue.L : 0));
      if (me && !("Z" in ue) && (ue.Z = 0), "p" in ue && (ue.H = ue.H % 12 + ue.p * 12), ue.m === void 0 && (ue.m = "q" in ue ? ue.q : 0), "V" in ue) {
        if (ue.V < 1 || ue.V > 53)
          return null;
        "w" in ue || (ue.w = 1), "Z" in ue ? (Le = Dd(Zl(ue.y, 0, 1)), ke = Le.getUTCDay(), Le = ke > 4 || ke === 0 ? Ku.ceil(Le) : Ku(Le), Le = ym.offset(Le, (ue.V - 1) * 7), ue.y = Le.getUTCFullYear(), ue.m = Le.getUTCMonth(), ue.d = Le.getUTCDate() + (ue.w + 6) % 7) : (Le = Rd(Zl(ue.y, 0, 1)), ke = Le.getDay(), Le = ke > 4 || ke === 0 ? Uu.ceil(Le) : Uu(Le), Le = pm.offset(Le, (ue.V - 1) * 7), ue.y = Le.getFullYear(), ue.m = Le.getMonth(), ue.d = Le.getDate() + (ue.w + 6) % 7);
      } else
        ("W" in ue || "U" in ue) && ("w" in ue || (ue.w = "u" in ue ? ue.u % 7 : "W" in ue ? 1 : 0), ke = "Z" in ue ? Dd(Zl(ue.y, 0, 1)).getUTCDay() : Rd(Zl(ue.y, 0, 1)).getDay(), ue.m = 0, ue.d = "W" in ue ? (ue.w + 6) % 7 + ue.W * 7 - (ke + 5) % 7 : ue.w + ue.U * 7 - (ke + 6) % 7);
      return "Z" in ue ? (ue.H += ue.Z / 100 | 0, ue.M += ue.Z % 100, Dd(ue)) : Rd(ue);
    };
  }
  function q(Ae, me, Fe, ue) {
    for (var de = 0, Le = me.length, ke = Fe.length, Ie, qe; de < Le; ) {
      if (ue >= ke)
        return -1;
      if (Ie = me.charCodeAt(de++), Ie === 37) {
        if (Ie = me.charAt(de++), qe = N[Ie in Mp ? me.charAt(de++) : Ie], !qe || (ue = qe(Ae, Fe, ue)) < 0)
          return -1;
      } else if (Ie != Fe.charCodeAt(ue++))
        return -1;
    }
    return ue;
  }
  function U(Ae, me, Fe) {
    var ue = m.exec(me.slice(Fe));
    return ue ? (Ae.p = y.get(ue[0].toLowerCase()), Fe + ue[0].length) : -1;
  }
  function ne(Ae, me, Fe) {
    var ue = R.exec(me.slice(Fe));
    return ue ? (Ae.w = T.get(ue[0].toLowerCase()), Fe + ue[0].length) : -1;
  }
  function re(Ae, me, Fe) {
    var ue = x.exec(me.slice(Fe));
    return ue ? (Ae.w = S.get(ue[0].toLowerCase()), Fe + ue[0].length) : -1;
  }
  function V(Ae, me, Fe) {
    var ue = h.exec(me.slice(Fe));
    return ue ? (Ae.m = P.get(ue[0].toLowerCase()), Fe + ue[0].length) : -1;
  }
  function Y(Ae, me, Fe) {
    var ue = F.exec(me.slice(Fe));
    return ue ? (Ae.m = k.get(ue[0].toLowerCase()), Fe + ue[0].length) : -1;
  }
  function J(Ae, me, Fe) {
    return q(Ae, t, me, Fe);
  }
  function Z(Ae, me, Fe) {
    return q(Ae, n, me, Fe);
  }
  function ae(Ae, me, Fe) {
    return q(Ae, a, me, Fe);
  }
  function te(Ae) {
    return d[Ae.getDay()];
  }
  function se(Ae) {
    return l[Ae.getDay()];
  }
  function G(Ae) {
    return u[Ae.getMonth()];
  }
  function Q(Ae) {
    return f[Ae.getMonth()];
  }
  function K(Ae) {
    return i[+(Ae.getHours() >= 12)];
  }
  function W(Ae) {
    return 1 + ~~(Ae.getMonth() / 3);
  }
  function Ce(Ae) {
    return d[Ae.getUTCDay()];
  }
  function xe(Ae) {
    return l[Ae.getUTCDay()];
  }
  function fe(Ae) {
    return u[Ae.getUTCMonth()];
  }
  function Re(Ae) {
    return f[Ae.getUTCMonth()];
  }
  function je(Ae) {
    return i[+(Ae.getUTCHours() >= 12)];
  }
  function Ze(Ae) {
    return 1 + ~~(Ae.getUTCMonth() / 3);
  }
  return {
    format: function(Ae) {
      var me = _(Ae += "", O);
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
      var me = _(Ae += "", C);
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
var Mp = { "-": "", _: " ", 0: "0" }, Bn = /^\s*\d+/, _v = /^%/, Nv = /[\\^$*+?|[\]().{}]/g;
function Zt(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", l = i.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + i : i);
}
function Ov(e) {
  return e.replace(Nv, "\\$&");
}
function Ql(e) {
  return new RegExp("^(?:" + e.map(Ov).join("|") + ")", "i");
}
function Jl(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Fv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Mv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function zv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Iv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function $v(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function zp(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Ip(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Bv(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Hv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Wv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function $p(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Vv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Bp(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function jv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Uv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Kv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Yv(e, t, n) {
  var a = Bn.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Xv(e, t, n) {
  var a = _v.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function qv(e, t, n) {
  var a = Bn.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Gv(e, t, n) {
  var a = Bn.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Hp(e, t) {
  return Zt(e.getDate(), t, 2);
}
function Zv(e, t) {
  return Zt(e.getHours(), t, 2);
}
function Qv(e, t) {
  return Zt(e.getHours() % 12 || 12, t, 2);
}
function Jv(e, t) {
  return Zt(1 + pm.count(gs(e), e), t, 3);
}
function vm(e, t) {
  return Zt(e.getMilliseconds(), t, 3);
}
function ex(e, t) {
  return vm(e, t) + "000";
}
function tx(e, t) {
  return Zt(e.getMonth() + 1, t, 2);
}
function nx(e, t) {
  return Zt(e.getMinutes(), t, 2);
}
function rx(e, t) {
  return Zt(e.getSeconds(), t, 2);
}
function ax(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ix(e, t) {
  return Zt(hm.count(gs(e) - 1, e), t, 2);
}
function xm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ko(e) : Ko.ceil(e);
}
function ox(e, t) {
  return e = xm(e), Zt(Ko.count(gs(e), e) + (gs(e).getDay() === 4), t, 2);
}
function lx(e) {
  return e.getDay();
}
function sx(e, t) {
  return Zt(Uu.count(gs(e) - 1, e), t, 2);
}
function ux(e, t) {
  return Zt(e.getFullYear() % 100, t, 2);
}
function cx(e, t) {
  return e = xm(e), Zt(e.getFullYear() % 100, t, 2);
}
function dx(e, t) {
  return Zt(e.getFullYear() % 1e4, t, 4);
}
function fx(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Ko(e) : Ko.ceil(e), Zt(e.getFullYear() % 1e4, t, 4);
}
function px(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Zt(t / 60 | 0, "0", 2) + Zt(t % 60, "0", 2);
}
function Wp(e, t) {
  return Zt(e.getUTCDate(), t, 2);
}
function hx(e, t) {
  return Zt(e.getUTCHours(), t, 2);
}
function mx(e, t) {
  return Zt(e.getUTCHours() % 12 || 12, t, 2);
}
function yx(e, t) {
  return Zt(1 + ym.count(vs(e), e), t, 3);
}
function bm(e, t) {
  return Zt(e.getUTCMilliseconds(), t, 3);
}
function gx(e, t) {
  return bm(e, t) + "000";
}
function vx(e, t) {
  return Zt(e.getUTCMonth() + 1, t, 2);
}
function xx(e, t) {
  return Zt(e.getUTCMinutes(), t, 2);
}
function bx(e, t) {
  return Zt(e.getUTCSeconds(), t, 2);
}
function Sx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Ex(e, t) {
  return Zt(gm.count(vs(e) - 1, e), t, 2);
}
function Sm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Yo(e) : Yo.ceil(e);
}
function kx(e, t) {
  return e = Sm(e), Zt(Yo.count(vs(e), e) + (vs(e).getUTCDay() === 4), t, 2);
}
function wx(e) {
  return e.getUTCDay();
}
function Tx(e, t) {
  return Zt(Ku.count(vs(e) - 1, e), t, 2);
}
function Cx(e, t) {
  return Zt(e.getUTCFullYear() % 100, t, 2);
}
function Ax(e, t) {
  return e = Sm(e), Zt(e.getUTCFullYear() % 100, t, 2);
}
function Lx(e, t) {
  return Zt(e.getUTCFullYear() % 1e4, t, 4);
}
function Px(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Yo(e) : Yo.ceil(e), Zt(e.getUTCFullYear() % 1e4, t, 4);
}
function Rx() {
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
var zo, Xd, Em;
Dx({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Dx(e) {
  return zo = Dv(e), Xd = zo.format, Em = zo.parse, zo.utcFormat, zo.utcParse, zo;
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
function _x(e, t) {
  return t === void 0 && (t = !0), (n) => (Wt.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const l = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[l] = e(l), a;
  }, e);
}
function km() {
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
function Nx(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Kr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function _d(e) {
  const t = Nx(e);
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
function Ox(e, t) {
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
function Fx(e, t) {
  Rf = {
    fn: e,
    transform: t
  };
}
let Tm;
function Mx(e) {
  Tm = e;
}
let Cm = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Yu;
function zx(e) {
  Yu = e;
}
let Am = () => Date.now(), Ix = (e) => e.current, Lm;
function $x(e) {
  Lm = e;
}
class Bx extends wm {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? fn({}, t, {
      style: Lm(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Hx = (e) => Wt.fun(e) && !(e.prototype instanceof r.Component), Wx = (e) => ce.forwardRef((n, a) => {
  const i = km(), l = ce.useRef(!0), d = ce.useRef(null), f = ce.useRef(null), u = ce.useCallback((S) => {
    const R = d.current, T = () => {
      let F = !1;
      f.current && (F = Rf.fn(f.current, d.current.getAnimatedValue())), (!f.current || F === !1) && i();
    };
    d.current = new Bx(S, T), R && R.detach();
  }, []);
  ce.useEffect(() => () => {
    l.current = !1, d.current && d.current.detach();
  }, []), ce.useImperativeHandle(a, () => Ix(f)), u(n);
  const m = d.current.getValue();
  m.scrollTop, m.scrollLeft;
  const y = Kr(m, ["scrollTop", "scrollLeft"]), x = Hx(e) ? void 0 : (S) => f.current = Ox(S, a);
  return r.createElement(e, fn({}, y, {
    ref: x
  }));
});
let as = !1;
const _i = /* @__PURE__ */ new Set(), Pm = () => {
  if (!as)
    return !1;
  let e = Am();
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
  return _i.size ? Cm(Pm) : as = !1, as;
}, Vx = (e) => {
  _i.has(e) || _i.add(e), as || (as = !0, Cm(Pm));
}, jx = (e) => {
  _i.has(e) && _i.delete(e);
};
function Xu(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Xu({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Yu && typeof e.output[0] == "string")
    return Yu(e);
  const a = e, i = a.output, l = a.range || [0, 1], d = a.extrapolateLeft || a.extrapolate || "extend", f = a.extrapolateRight || a.extrapolate || "extend", u = a.easing || ((m) => m);
  return (m) => {
    const y = Kx(m, l);
    return Ux(m, l[y], l[y + 1], i[y], i[y + 1], u, d, f, a.map);
  };
}
function Ux(e, t, n, a, i, l, d, f, u) {
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
function Kx(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Xo extends qd {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof qd && !(t instanceof Xo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Xu(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = Xu(t, n, a);
  }
  interpolate(t, n, a) {
    return new Xo(this, t, n, a);
  }
}
const Yx = (e, t, n) => e && new Xo(e, t, n);
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
    return new Xo(this, t, n, a);
  }
}
class Xx extends qd {
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
    return new Xo(this, t, n);
  }
}
let qx = 0;
class Gx {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = qx++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = _d(t), a = n.delay, i = a === void 0 ? 0 : a, l = n.to, d = Kr(n, ["delay", "to"]);
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
      Wt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Vx(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && jx(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = Kr(t, ["delay"]);
    const l = this.local;
    let d = Promise.resolve(void 0);
    if (Wt.arr(i.to))
      for (let f = 0; f < i.to.length; f++) {
        const u = f, m = fn({}, i, _d(i.to[u]));
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
          const y = fn({}, i, _d(m));
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
      const C = Wt.num(P), N = Wt.str(P) && !P.startsWith("#") && !/\d/.test(P) && !Tm[P], _ = Wt.arr(P), B = !C && !_ && !N;
      let q = Wt.und(i[h]) ? P : i[h], U = C || _ || N ? P : 1, ne = Rr(u, h);
      T && (U = T.animations[h].parent);
      let re = O.parent, V = O.interpolation, Y = Wo(T ? U.getPayload() : U), J, Z = P;
      B && (Z = Yu({
        range: [0, 1],
        output: [P, P]
      })(1));
      let ae = V && V.getValue();
      const se = !Wt.und(re) && O.animatedValues.some((W) => !W.done), G = !Wt.equ(Z, ae), Q = !Wt.equ(Z, O.previous), K = !Wt.equ(ne, O.config);
      if (x || Q && G || K) {
        if (C || N)
          re = V = O.parent || new Gd(q);
        else if (_)
          re = V = O.parent || new Xx(q);
        else if (B) {
          let W = O.interpolation && O.interpolation.calc(O.parent.value);
          W = W !== void 0 && !x ? W : q, O.parent ? (re = O.parent, re.setValue(0, !1)) : re = new Gd(0);
          const Ce = {
            output: [W, P]
          };
          O.interpolation ? (V = O.interpolation, O.interpolation.updateConfig(Ce)) : V = re.interpolate(Ce);
        }
        return Y = Wo(T ? U.getPayload() : U), J = Wo(re.getPayload()), x && !B && re.setValue(q, !1), this.hasChanged = !0, J.forEach((W) => {
          W.startPosition = W.value, W.lastPosition = W.value, W.lastVelocity = se ? W.lastVelocity : void 0, W.lastTime = se ? W.lastTime : void 0, W.startTime = Am(), W.done = !1, W.animatedStyles.clear();
        }), Rr(S, h) && re.setValue(B ? U : P, !1), fn({}, F, {
          [h]: fn({}, O, {
            name: h,
            parent: re,
            interpolation: V,
            animatedValues: J,
            toValues: Y,
            previous: Z,
            config: ne,
            fromValues: Wo(re.getValue()),
            immediate: Rr(S, h),
            initialVelocity: ki(ne.velocity, 0),
            clamp: ki(ne.clamp, !1),
            precision: ki(ne.precision, 0.01),
            tension: ki(ne.tension, 170),
            friction: ki(ne.friction, 26),
            mass: ki(ne.mass, 1),
            duration: ne.duration,
            easing: ki(ne.easing, (W) => W),
            decay: ne.decay
          })
        });
      } else
        return G ? F : (B && (re.setValue(1, !1), V.updateConfig({
          output: [Z, Z]
        })), re.done = !0, this.hasChanged = !0, fn({}, F, {
          [h]: fn({}, F[h], {
            previous: Z
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
let Zx = 0;
const Fu = "enter", Nd = "leave", Od = "update", Qx = (e, t) => (typeof t == "function" ? e.map(t) : Wo(t)).map(String), Zd = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, i = Kr(e, ["items", "keys"]);
  return t = Wo(t !== void 0 ? t : null), fn({
    items: t,
    keys: Qx(t, a)
  }, i);
};
function Jx(e, t, n) {
  const a = fn({
    items: e,
    keys: t || ((P) => P)
  }, n), i = Zd(a), l = i.lazy, d = l === void 0 ? !1 : l;
  i.unique;
  const f = i.reset, u = f === void 0 ? !1 : f;
  i.enter, i.leave, i.update;
  const m = i.onDestroyed;
  i.keys, i.items;
  const y = i.onFrame, x = i.onRest, S = i.onStart, R = i.ref, T = Kr(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), F = km(), k = ce.useRef(!1), h = ce.useRef({
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
  })), h.current = eb(h.current, a), h.current.changed && h.current.transitions.forEach((P) => {
    const O = P.slot, C = P.from, N = P.to, _ = P.config, B = P.trail, q = P.key, U = P.item;
    h.current.instances.has(q) || h.current.instances.set(q, new Gx());
    const ne = h.current.instances.get(q), re = fn({}, T, {
      to: N,
      from: C,
      config: _,
      ref: R,
      onRest: (V) => {
        h.current.mounted && (P.destroyed && (!R && !d && Kp(h, q), m && m(U)), !Array.from(h.current.instances).some((Z) => !Z[1].idle) && (R || d) && h.current.deleted.length > 0 && Kp(h), x && x(U, O, V));
      },
      onStart: S && (() => S(U, O)),
      onFrame: y && ((V) => y(U, O, V)),
      delay: B,
      reset: u && O === Fu
      // Update controller
    });
    ne.update(re), h.current.paused || ne.start();
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
function Kp(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const l = (d) => d.key !== i;
    (Wt.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function eb(e, t) {
  let n = e.first, a = e.prevProps, i = Kr(e, ["first", "prevProps"]), l = Zd(t), d = l.items, f = l.keys, u = l.initial, m = l.from, y = l.enter, x = l.leave, S = l.update, R = l.trail, T = R === void 0 ? 0 : R, F = l.unique, k = l.config, h = l.order, P = h === void 0 ? [Fu, Nd, Od] : h, O = Zd(a), C = O.keys, N = O.items, _ = fn({}, i.current), B = [...i.deleted], q = Object.keys(_), U = new Set(q), ne = new Set(f), re = f.filter((ae) => !U.has(ae)), V = i.transitions.filter((ae) => !ae.destroyed && !ne.has(ae.originalKey)).map((ae) => ae.originalKey), Y = f.filter((ae) => U.has(ae)), J = -T;
  for (; P.length; )
    switch (P.shift()) {
      case Fu: {
        re.forEach((te, se) => {
          F && B.find((W) => W.originalKey === te) && (B = B.filter((W) => W.originalKey !== te));
          const G = f.indexOf(te), Q = d[G], K = n && u !== void 0 ? "initial" : Fu;
          _[te] = {
            slot: K,
            originalKey: te,
            key: F ? String(te) : Zx++,
            item: Q,
            trail: J = J + T,
            config: Rr(k, Q, K),
            from: Rr(n && u !== void 0 ? u || {} : m, Q),
            to: Rr(y, Q)
          };
        });
        break;
      }
      case Nd: {
        V.forEach((te) => {
          const se = C.indexOf(te), G = N[se], Q = Nd;
          B.unshift(fn({}, _[te], {
            slot: Q,
            destroyed: !0,
            left: C[Math.max(0, se - 1)],
            right: C[Math.min(C.length, se + 1)],
            trail: J = J + T,
            config: Rr(k, G, Q),
            to: Rr(x, G)
          })), delete _[te];
        });
        break;
      }
      case Od: {
        Y.forEach((te) => {
          const se = f.indexOf(te), G = d[se], Q = Od;
          _[te] = fn({}, _[te], {
            item: G,
            slot: Q,
            trail: J = J + T,
            config: Rr(k, G, Q),
            to: Rr(S, G)
          });
        });
        break;
      }
    }
  let Z = f.map((ae) => _[ae]);
  return B.forEach((ae) => {
    let te = ae.left;
    ae.right;
    let se = Kr(ae, ["left", "right"]), G;
    (G = Z.findIndex((Q) => Q.originalKey === te)) !== -1 && (G += 1), G = Math.max(0, G), Z = [...Z.slice(0, G), se, ...Z.slice(G)];
  }), fn({}, i, {
    changed: re.length || V.length || Y.length,
    first: n && re.length === 0,
    transitions: Z,
    current: _,
    deleted: B,
    prevProps: t
  });
}
class tb extends wm {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Dr) && (t = Rf.transform(t)), this.payload = t;
  }
}
const qu = {
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
}, _r = "[-+]?\\d*\\.?\\d+", Gu = _r + "%";
function vc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const nb = new RegExp("rgb" + vc(_r, _r, _r)), rb = new RegExp("rgba" + vc(_r, _r, _r, _r)), ab = new RegExp("hsl" + vc(_r, Gu, Gu)), ib = new RegExp("hsla" + vc(_r, Gu, Gu, _r)), ob = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, lb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, sb = /^#([0-9a-fA-F]{6})$/, ub = /^#([0-9a-fA-F]{8})$/;
function cb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = sb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : qu.hasOwnProperty(e) ? qu[e] : (t = nb.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = rb.exec(e)) ? (Io(t[1]) << 24 | // r
  Io(t[2]) << 16 | // g
  Io(t[3]) << 8 | // b
  qp(t[4])) >>> // a
  0 : (t = ob.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = ub.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = lb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = ab.exec(e)) ? (Yp(
    Xp(t[1]),
    // h
    Su(t[2]),
    // s
    Su(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = ib.exec(e)) ? (Yp(
    Xp(t[1]),
    // h
    Su(t[2]),
    // s
    Su(t[3])
    // l
  ) | qp(t[4])) >>> // a
  0 : null;
}
function Fd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Yp(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, l = Fd(i, a, e + 1 / 3), d = Fd(i, a, e), f = Fd(i, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(d * 255) << 16 | Math.round(f * 255) << 8;
}
function Io(e) {
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
function Su(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Gp(e) {
  let t = cb(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${l})`;
}
const Eu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, db = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, fb = new RegExp(`(${Object.keys(qu).join("|")})`, "g"), pb = (e) => {
  const t = e.output.map((i) => i.replace(db, Gp)).map((i) => i.replace(fb, Gp)), n = t[0].match(Eu).map(() => []);
  t.forEach((i) => {
    i.match(Eu).forEach((l, d) => n[d].push(+l));
  });
  const a = t[0].match(Eu).map((i, l) => Xu(fn({}, e, {
    output: n[l]
  })));
  return (i) => {
    let l = 0;
    return t[0].replace(Eu, () => a[l++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (d, f, u, m, y) => `rgba(${Math.round(f)}, ${Math.round(u)}, ${Math.round(m)}, ${y})`);
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
const hb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), mb = ["Webkit", "Ms", "Moz", "O"];
is = Object.keys(is).reduce((e, t) => (mb.forEach((n) => e[hb(n, t)] = e[t]), e), is);
function yb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(is.hasOwnProperty(e) && is[e]) ? t + "px" : ("" + t).trim();
}
const Zp = {};
$x((e) => new tb(e));
zx(pb);
Mx(qu);
Fx((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, l = t.children, d = t.scrollTop, f = t.scrollLeft, u = Kr(t, ["style", "children", "scrollTop", "scrollLeft"]), m = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    d !== void 0 && (e.scrollTop = d), f !== void 0 && (e.scrollLeft = f), l !== void 0 && (e.textContent = l);
    for (let y in i)
      if (i.hasOwnProperty(y)) {
        var n = y.indexOf("--") === 0, a = yb(y, i[y], n);
        y === "float" && (y = "cssFloat"), n ? e.style.setProperty(y, a) : e.style[y] = a;
      }
    for (let y in u) {
      const x = m ? y : Zp[y] || (Zp[y] = y.replace(/([A-Z])/g, (S) => "-" + S.toLowerCase()));
      typeof e.getAttribute(x) < "u" && e.setAttribute(x, u[y]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const gb = [
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
], vb = _x(Wx, !1), Qp = vb(gb);
function xb(e) {
  return e.innerRadius;
}
function bb(e) {
  return e.outerRadius;
}
function Sb(e) {
  return e.startAngle;
}
function Eb(e) {
  return e.endAngle;
}
function kb(e) {
  return e && e.padAngle;
}
function wb(e, t, n, a, i, l, d, f) {
  var u = n - e, m = a - t, y = d - i, x = f - l, S = x * u - y * m;
  if (!(S * S < Zn))
    return S = (y * (t - l) - x * (e - i)) / S, [e + S * u, t + S * m];
}
function ku(e, t, n, a, i, l, d) {
  var f = e - n, u = t - a, m = (d ? l : -l) / $o(f * f + u * u), y = m * u, x = -m * f, S = e + y, R = t + x, T = n + y, F = a + x, k = (S + T) / 2, h = (R + F) / 2, P = T - S, O = F - R, C = P * P + O * O, N = i - l, _ = S * F - T * R, B = (O < 0 ? -1 : 1) * $o(Vy(0, N * N * C - _ * _)), q = (_ * O - P * B) / C, U = (-_ * P - O * B) / C, ne = (_ * O + P * B) / C, re = (-_ * P + O * B) / C, V = q - k, Y = U - h, J = ne - k, Z = re - h;
  return V * V + Y * Y > J * J + Z * Z && (q = ne, U = re), {
    cx: q,
    cy: U,
    x01: -y,
    y01: -x,
    x11: q * (i / N - 1),
    y11: U * (i / N - 1)
  };
}
function Tb() {
  var e = xb, t = bb, n = Ut(0), a = null, i = Sb, l = Eb, d = kb, f = null;
  function u() {
    var m, y, x = +e.apply(this, arguments), S = +t.apply(this, arguments), R = i.apply(this, arguments) - ap, T = l.apply(this, arguments) - ap, F = ip(T - R), k = T > R;
    if (f || (f = m = yc()), S < x && (y = S, S = x, x = y), !(S > Zn))
      f.moveTo(0, 0);
    else if (F > Nu - Zn)
      f.moveTo(S * Si(R), S * Hr(R)), f.arc(0, 0, S, R, T, !k), x > Zn && (f.moveTo(x * Si(T), x * Hr(T)), f.arc(0, 0, x, T, R, k));
    else {
      var h = R, P = T, O = R, C = T, N = F, _ = F, B = d.apply(this, arguments) / 2, q = B > Zn && (a ? +a.apply(this, arguments) : $o(x * x + S * S)), U = kd(ip(S - x) / 2, +n.apply(this, arguments)), ne = U, re = U, V, Y;
      if (q > Zn) {
        var J = op(q / x * Hr(B)), Z = op(q / S * Hr(B));
        (N -= J * 2) > Zn ? (J *= k ? 1 : -1, O += J, C -= J) : (N = 0, O = C = (R + T) / 2), (_ -= Z * 2) > Zn ? (Z *= k ? 1 : -1, h += Z, P -= Z) : (_ = 0, h = P = (R + T) / 2);
      }
      var ae = S * Si(h), te = S * Hr(h), se = x * Si(C), G = x * Hr(C);
      if (U > Zn) {
        var Q = S * Si(P), K = S * Hr(P), W = x * Si(O), Ce = x * Hr(O), xe;
        if (F < rp && (xe = wb(ae, te, W, Ce, Q, K, se, G))) {
          var fe = ae - xe[0], Re = te - xe[1], je = Q - xe[0], Ze = K - xe[1], Ae = 1 / Hr(Wy((fe * je + Re * Ze) / ($o(fe * fe + Re * Re) * $o(je * je + Ze * Ze))) / 2), me = $o(xe[0] * xe[0] + xe[1] * xe[1]);
          ne = kd(U, (x - me) / (Ae - 1)), re = kd(U, (S - me) / (Ae + 1));
        }
      }
      _ > Zn ? re > Zn ? (V = ku(W, Ce, ae, te, S, re, k), Y = ku(Q, K, se, G, S, re, k), f.moveTo(V.cx + V.x01, V.cy + V.y01), re < U ? f.arc(V.cx, V.cy, re, Gn(V.y01, V.x01), Gn(Y.y01, Y.x01), !k) : (f.arc(V.cx, V.cy, re, Gn(V.y01, V.x01), Gn(V.y11, V.x11), !k), f.arc(0, 0, S, Gn(V.cy + V.y11, V.cx + V.x11), Gn(Y.cy + Y.y11, Y.cx + Y.x11), !k), f.arc(Y.cx, Y.cy, re, Gn(Y.y11, Y.x11), Gn(Y.y01, Y.x01), !k))) : (f.moveTo(ae, te), f.arc(0, 0, S, h, P, !k)) : f.moveTo(ae, te), !(x > Zn) || !(N > Zn) ? f.lineTo(se, G) : ne > Zn ? (V = ku(se, G, Q, K, x, -ne, k), Y = ku(ae, te, W, Ce, x, -ne, k), f.lineTo(V.cx + V.x01, V.cy + V.y01), ne < U ? f.arc(V.cx, V.cy, ne, Gn(V.y01, V.x01), Gn(Y.y01, Y.x01), !k) : (f.arc(V.cx, V.cy, ne, Gn(V.y01, V.x01), Gn(V.y11, V.x11), !k), f.arc(0, 0, x, Gn(V.cy + V.y11, V.cx + V.x11), Gn(Y.cy + Y.y11, Y.cx + Y.x11), k), f.arc(Y.cx, Y.cy, ne, Gn(Y.y11, Y.x11), Gn(Y.y01, Y.x01), !k))) : f.arc(0, 0, x, C, O, k);
    }
    if (f.closePath(), m)
      return f = null, m + "" || null;
  }
  return u.centroid = function() {
    var m = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, y = (+i.apply(this, arguments) + +l.apply(this, arguments)) / 2 - rp / 2;
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
function xc(e) {
  return new Dm(e);
}
function Df(e) {
  return e[0];
}
function _f(e) {
  return e[1];
}
function _m() {
  var e = Df, t = _f, n = Ut(!0), a = null, i = xc, l = null;
  function d(f) {
    var u, m = f.length, y, x = !1, S;
    for (a == null && (l = i(S = yc())), u = 0; u <= m; ++u)
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
function Cb() {
  var e = Df, t = null, n = Ut(0), a = _f, i = Ut(!0), l = null, d = xc, f = null;
  function u(y) {
    var x, S, R, T = y.length, F, k = !1, h, P = new Array(T), O = new Array(T);
    for (l == null && (f = d(h = yc())), x = 0; x <= T; ++x) {
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
    return _m().defined(i).curve(d).context(l);
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
function Ab(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Lb(e) {
  return e;
}
function Pb() {
  var e = Lb, t = Ab, n = null, a = Ut(0), i = Ut(Nu), l = Ut(0);
  function d(f) {
    var u, m = f.length, y, x, S = 0, R = new Array(m), T = new Array(m), F = +a.apply(this, arguments), k = Math.min(Nu, Math.max(-Nu, i.apply(this, arguments) - F)), h, P = Math.min(Math.abs(k) / m, l.apply(this, arguments)), O = P * (k < 0 ? -1 : 1), C;
    for (u = 0; u < m; ++u)
      (C = T[R[u] = u] = +e(f[u], u, f)) > 0 && (S += C);
    for (t != null ? R.sort(function(N, _) {
      return t(T[N], T[_]);
    }) : n != null && R.sort(function(N, _) {
      return n(f[N], f[_]);
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
var Qd = Array.prototype.slice;
function Rb(e) {
  return e.source;
}
function Db(e) {
  return e.target;
}
function _b(e) {
  var t = Rb, n = Db, a = Df, i = _f, l = null;
  function d() {
    var f, u = Qd.call(arguments), m = t.apply(this, u), y = n.apply(this, u);
    if (l || (l = f = yc()), e(l, +a.apply(this, (u[0] = m, u)), +i.apply(this, u), +a.apply(this, (u[0] = y, u)), +i.apply(this, u)), f)
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
function Nb(e, t, n, a, i) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + a) / 2, n, t, i, a, i);
}
function Ob() {
  return _b(Nb);
}
function za() {
}
function Zu(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function bc(e) {
  this._context = e;
}
bc.prototype = {
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
        Zu(this, this._x1, this._y1);
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
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Fb(e) {
  return new bc(e);
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
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Mb(e) {
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
        Zu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function zb(e) {
  return new Om(e);
}
function Fm(e, t) {
  this._basis = new bc(e), this._beta = t;
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
    return t === 1 ? new bc(a) : new Fm(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function Qu(e, t, n) {
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
        Qu(this, this._x1, this._y1);
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
        Qu(this, e, t);
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
        Qu(this, e, t);
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
        Qu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hb = function e(t) {
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
        Mf(this, e, t);
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
function Im(e, t) {
  this._context = e, this._alpha = t;
}
Im.prototype = {
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
const jb = function e(t) {
  function n(a) {
    return t ? new Im(a, t) : new Ff(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function $m(e) {
  this._context = e;
}
$m.prototype = {
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
  return new $m(e);
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
function Md(e, t, n) {
  var a = e._x0, i = e._y0, l = e._x1, d = e._y1, f = (l - a) / 3;
  e._context.bezierCurveTo(a + f, i + f * t, l - f, d - f * n, l, d);
}
function Ju(e) {
  this._context = e;
}
Ju.prototype = {
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
        Md(this, this._t0, th(this, this._t0));
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
          this._point = 3, Md(this, th(this, n = eh(this, e, t)), n);
          break;
        default:
          Md(this, this._t0, n = eh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Bm(e) {
  this._context = new Hm(e);
}
(Bm.prototype = Object.create(Ju.prototype)).point = function(e, t) {
  Ju.prototype.point.call(this, t, e);
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
function Mu(e) {
  return new Ju(e);
}
function Ub(e) {
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
function Kb(e) {
  return new Wm(e);
}
function Sc(e, t) {
  this._context = e, this._t = t;
}
Sc.prototype = {
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
function Yb(e) {
  return new Sc(e, 0.5);
}
function Xb(e) {
  return new Sc(e, 0);
}
function qb(e) {
  return new Sc(e, 1);
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
function Gb(e, t) {
  return e[t];
}
function zf() {
  var e = Ut([]), t = Go, n = qo, a = Gb;
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
    return arguments.length ? (e = typeof l == "function" ? l : Ut(Qd.call(l)), i) : e;
  }, i.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : Ut(+l), i) : a;
  }, i.order = function(l) {
    return arguments.length ? (t = l == null ? Go : typeof l == "function" ? l : Ut(Qd.call(l)), i) : t;
  }, i.offset = function(l) {
    return arguments.length ? (n = l ?? qo, i) : n;
  }, i;
}
function Zb(e, t) {
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
function Qb(e, t) {
  if ((u = e.length) > 0)
    for (var n, a = 0, i, l, d, f, u, m = e[t[0]].length; a < m; ++a)
      for (d = f = 0, n = 0; n < u; ++n)
        (l = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = d, i[1] = d += l) : l < 0 ? (i[1] = f, i[0] = f += l) : (i[0] = 0, i[1] = l);
}
function Jb(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, l = a.length; n < l; ++n) {
      for (var d = 0, f = 0; d < i; ++d)
        f += e[d][n][1] || 0;
      a[n][1] += a[n][0] = -f / 2;
    }
    qo(e, t);
  }
}
function e0(e, t) {
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
function t0(e) {
  var t = e.map(n0);
  return Go(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function n0(e) {
  for (var t = -1, n = 0, a = e.length, i, l = -1 / 0; ++t < a; )
    (i = +e[t][1]) > l && (l = i, n = t);
  return n;
}
function Vm(e) {
  var t = e.map(jm);
  return Go(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function jm(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function r0(e) {
  return Vm(e).reverse();
}
function a0(e) {
  var t = e.length, n, a, i = e.map(jm), l = t0(e), d = 0, f = 0, u = [], m = [];
  for (n = 0; n < t; ++n)
    a = l[n], d < f ? (d += i[a], u.push(a)) : (f += i[a], m.push(a));
  return m.reverse().concat(u);
}
function i0(e) {
  return Go(e).reverse();
}
function bn(e, t) {
  e(t);
}
var rh = {
  ascending: Vm,
  descending: r0,
  insideout: a0,
  none: Go,
  reverse: i0
};
function If(e) {
  return e && rh[e] || rh.none;
}
var ah = {
  expand: Zb,
  diverging: Qb,
  none: qo,
  silhouette: Jb,
  wiggle: e0
};
function $f(e) {
  return e && ah[e] || ah.none;
}
function o0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, l = t.startAngle, d = t.endAngle, f = t.padAngle, u = t.padRadius, m = Tb();
  return n != null && bn(m.innerRadius, n), a != null && bn(m.outerRadius, a), i != null && bn(m.cornerRadius, i), l != null && bn(m.startAngle, l), d != null && bn(m.endAngle, d), f != null && bn(m.padAngle, f), u != null && bn(m.padRadius, u), m;
}
function Bf(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, l = t.y, d = t.y0, f = t.y1, u = t.defined, m = t.curve, y = Cb();
  return n && bn(y.x, n), a && bn(y.x0, a), i && bn(y.x1, i), l && bn(y.y, l), d && bn(y.y0, d), f && bn(y.y1, f), u && y.defined(u), m && y.curve(m), y;
}
function Um(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, l = t.curve, d = _m();
  return n && bn(d.x, n), a && bn(d.y, a), i && d.defined(i), l && d.curve(l), d;
}
function l0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, l = t.value, d = t.sort, f = t.sortValues, u = Pb();
  return (d === null || d != null) && u.sort(d), (f === null || f != null) && u.sortValues(f), l != null && u.value(l), i != null && bn(u.padAngle, i), n != null && bn(u.startAngle, n), a != null && bn(u.endAngle, a), u;
}
function s0(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, l = zf();
  return t && l.keys(t), n && bn(l.value, n), a && l.order(If(a)), i && l.offset($f(i)), l;
}
var u0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function c0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function d0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, l = i === void 0 ? [] : i, d = e.centroid, f = e.innerRadius, u = f === void 0 ? 0 : f, m = e.outerRadius, y = e.cornerRadius, x = e.startAngle, S = e.endAngle, R = e.padAngle, T = e.padRadius, F = e.pieSort, k = e.pieSortValues, h = e.pieValue, P = e.children, O = e.fill, C = O === void 0 ? "" : O, N = c0(e, u0), _ = o0({
    innerRadius: u,
    outerRadius: m,
    cornerRadius: y,
    padRadius: T
  }), B = l0({
    startAngle: x,
    endAngle: S,
    padAngle: R,
    value: h,
    sort: F,
    sortValues: k
  }), q = B(l);
  return P ? /* @__PURE__ */ r.createElement(r.Fragment, null, P({
    arcs: q,
    path: _,
    pie: B
  })) : /* @__PURE__ */ r.createElement(it, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, q.map(function(U, ne) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + ne
    }, /* @__PURE__ */ r.createElement("path", ef({
      className: An("visx-pie-arc", t),
      d: _(U) || "",
      fill: C == null || typeof C == "string" ? C : C(U)
    }, N)), d == null ? void 0 : d(_.centroid(U), U));
  }));
}
var f0 = ["from", "to", "fill", "className", "innerRef"];
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
function p0(e, t) {
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
  } : a, l = e.fill, d = l === void 0 ? "transparent" : l, f = e.className, u = e.innerRef, m = p0(e, f0), y = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", tf({
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
var h0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function m0(e, t) {
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
  } : x, R = m0(e, h0), T = Um({
    x: i,
    y: l,
    defined: S,
    curve: m
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ r.createElement("path", nf({
    ref: y,
    className: An("visx-linepath", u),
    d: T(a) || "",
    fill: f,
    strokeLinecap: "round"
  }, R));
}
var y0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function g0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function v0(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, l = e.y, d = e.y0, f = e.y1, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, T = e.innerRef, F = g0(e, y0), k = Bf({
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
  })) : /* @__PURE__ */ r.createElement("path", rf({
    ref: T,
    className: An("visx-area", S),
    d: k(m) || ""
  }, F));
}
var x0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function b0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function S0(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, l = e.y1, d = e.y0, f = e.yScale, u = e.data, m = u === void 0 ? [] : u, y = e.defined, x = y === void 0 ? function() {
    return !0;
  } : y, S = e.className, R = e.curve, T = e.innerRef, F = e.children, k = b0(e, x0), h = Bf({
    x: t,
    x0: n,
    x1: a,
    defined: x,
    curve: R
  });
  return d == null ? h.y0(f.range()[0]) : bn(h.y0, d), i && !l && bn(h.y1, i), l && !i && bn(h.y1, l), F ? /* @__PURE__ */ r.createElement(r.Fragment, null, F({
    path: h
  })) : /* @__PURE__ */ r.createElement("path", af({
    ref: T,
    className: An("visx-area-closed", S),
    d: h(m) || ""
  }, k));
}
var E0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function k0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function w0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, S = e.y1, R = e.value, T = e.order, F = e.offset, k = e.color, h = e.children, P = k0(e, E0), O = s0({
    keys: i,
    value: R,
    order: T,
    offset: F
  }), C = Bf({
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
  })) : /* @__PURE__ */ r.createElement(it, {
    top: n,
    left: a
  }, N.map(function(_, B) {
    return /* @__PURE__ */ r.createElement("path", of({
      className: An("visx-stack", t),
      key: "stack-" + B + "-" + (_.key || ""),
      d: C(_) || "",
      fill: k == null ? void 0 : k(_.key, B)
    }, P));
  }));
}
var T0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function C0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function A0(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, d = e.curve, f = e.defined, u = e.x, m = e.x0, y = e.x1, x = e.y0, S = e.y1, R = e.value, T = e.order, F = e.offset, k = e.color, h = e.children, P = C0(e, T0);
  return /* @__PURE__ */ r.createElement(w0, ec({
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
    return C.map(function(_, B) {
      return /* @__PURE__ */ r.createElement("path", ec({
        className: An("visx-area-stack", t),
        key: "area-stack-" + B + "-" + (_.key || ""),
        d: N(_) || "",
        fill: k == null ? void 0 : k(_.key, B)
      }, P));
    });
  });
}
function Hf(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var L0 = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function P0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Km(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x0, d = e.x0Scale, f = e.x1Scale, u = e.yScale, m = e.color, y = e.keys, x = e.height, S = e.children, R = P0(e, L0), T = Hf(f), F = t.map(function(k, h) {
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
  return S ? /* @__PURE__ */ r.createElement(r.Fragment, null, S(F)) : /* @__PURE__ */ r.createElement(it, {
    className: An("visx-bar-group", n),
    top: a,
    left: i
  }, F.map(function(k) {
    return /* @__PURE__ */ r.createElement(it, {
      key: "bar-group-" + k.index + "-" + k.x0,
      left: k.x0
    }, k.bars.map(function(h) {
      return /* @__PURE__ */ r.createElement(kr, lf({
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
function Ym(e) {
  return e == null ? void 0 : e[0];
}
function Xm(e) {
  return e == null ? void 0 : e[1];
}
var R0 = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function D0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _0(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x, d = e.y0, f = d === void 0 ? Ym : d, u = e.y1, m = u === void 0 ? Xm : u, y = e.xScale, x = e.yScale, S = e.color, R = e.keys, T = e.value, F = e.order, k = e.offset, h = e.children, P = D0(e, R0), O = zf();
  R && O.keys(R), T && bn(O.value, T), F && O.order(If(F)), k && O.offset($f(k));
  var C = O(t), N = Hf(y), _ = C.map(function(B, q) {
    var U = B.key;
    return {
      index: q,
      key: U,
      bars: B.map(function(ne, re) {
        var V = (x(f(ne)) || 0) - (x(m(ne)) || 0), Y = x(m(ne)), J = "bandwidth" in y ? y(l(ne.data)) : Math.max((y(l(ne.data)) || 0) - N / 2);
        return {
          bar: ne,
          key: U,
          index: re,
          height: V,
          width: N,
          x: J || 0,
          y: Y || 0,
          color: S(B.key, re)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(_)) : /* @__PURE__ */ r.createElement(it, {
    className: An("visx-bar-stack", n),
    top: a,
    left: i
  }, _.map(function(B) {
    return B.bars.map(function(q) {
      return /* @__PURE__ */ r.createElement(kr, sf({
        key: "bar-stack-" + B.index + "-" + q.index,
        x: q.x,
        y: q.y,
        height: q.height,
        width: q.width,
        fill: q.color
      }, P));
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
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.y, d = e.x0, f = d === void 0 ? Ym : d, u = e.x1, m = u === void 0 ? Xm : u, y = e.xScale, x = e.yScale, S = e.color, R = e.keys, T = e.value, F = e.order, k = e.offset, h = e.children, P = O0(e, N0), O = zf();
  R && O.keys(R), T && bn(O.value, T), F && O.order(If(F)), k && O.offset($f(k));
  var C = O(t), N = Hf(x), _ = C.map(function(B, q) {
    var U = B.key;
    return {
      index: q,
      key: U,
      bars: B.map(function(ne, re) {
        var V = (y(m(ne)) || 0) - (y(f(ne)) || 0), Y = y(f(ne)), J = "bandwidth" in x ? x(l(ne.data)) : Math.max((x(l(ne.data)) || 0) - V / 2);
        return {
          bar: ne,
          key: U,
          index: re,
          height: N,
          width: V,
          x: Y || 0,
          y: J || 0,
          color: S(B.key, re)
        };
      })
    };
  });
  return h ? /* @__PURE__ */ r.createElement(r.Fragment, null, h(_)) : /* @__PURE__ */ r.createElement(it, {
    className: An("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, _.map(function(B) {
    return B.bars.map(function(q) {
      return /* @__PURE__ */ r.createElement(kr, uf({
        key: "bar-stack-" + B.index + "-" + q.index,
        x: q.x,
        y: q.y,
        height: q.height,
        width: q.width,
        fill: q.color
      }, P));
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
function I0(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, i = a === void 0 ? "x" : a, l = e.sampleRate, d = l === void 0 ? 1 : l;
  try {
    var f = M0(z0);
    f.setAttribute("d", t);
    var u = f.getTotalLength(), m = n.length, y = n.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var x = n.map(function(Y) {
        var J;
        return (J = Y.find(function(Z) {
          return typeof Z[i] == "number";
        })) == null ? void 0 : J[i];
      }), S = f.getPointAtLength(0), R = f.getPointAtLength(u), T = R[i] > S[i], F = T ? x.map(function(Y) {
        return typeof Y > "u" ? oh : function(J) {
          return J >= Y;
        };
      }) : x.map(function(Y) {
        return typeof Y > "u" ? oh : function(J) {
          return J <= Y;
        };
      }), k = 0, h = 0; h <= u; h += d) {
        for (var P = f.getPointAtLength(h), O = P[i]; k < m - 1 && F[k + 1](O); )
          k += 1;
        y[k].push(P);
      }
    else {
      var C = n.map(function(Y) {
        return Y.length;
      }), N = C.reduce(function(Y, J) {
        return Y + J;
      }, 0), _ = u / Math.max(1, N - 1), B = C.slice(0, m - 1);
      B.unshift(0);
      for (var q = 2; q < m; q += 1)
        B[q] += B[q - 1];
      for (var U = 0; U < m; U += 1)
        B[U] *= _;
      for (var ne = 0, re = 0; re <= u; re += d) {
        for (var V = f.getPointAtLength(re); ne < m - 1 && re >= B[ne + 1]; )
          ne += 1;
        y[ne].push(V);
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
var $0 = function(t) {
  return t.x || 0;
}, B0 = function(t) {
  return t.y || 0;
};
function qm(e) {
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
    var T = Um({
      x: u,
      y: m,
      defined: i,
      curve: a
    });
    return T(f.flat()) || "";
  }, [u, m, i, a, f]), R = ce.useMemo(function() {
    return I0({
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
    })) : /* @__PURE__ */ r.createElement(Nr, cf({
      key: F,
      className: n,
      data: T,
      x: $0,
      y: B0
    }, y[F] || y[F % y.length]));
  }));
}
qm.propTypes = {
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
function Gm(e) {
  var t = ce.useState(tc({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = ce.useCallback(function(d) {
    return a(typeof d == "function" ? function(f) {
      f.tooltipOpen;
      var u = W0(f, H0);
      return tc({}, d(u), {
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
var V0 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function j0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Zm = {
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
  var n = e.className, a = e.top, i = e.left, l = e.offsetLeft, d = l === void 0 ? 10 : l, f = e.offsetTop, u = f === void 0 ? 10 : f, m = e.style, y = m === void 0 ? Zm : m, x = e.children, S = e.unstyled, R = S === void 0 ? !1 : S, T = e.applyPositionStyle, F = T === void 0 ? !1 : T, k = j0(e, V0);
  return /* @__PURE__ */ r.createElement("div", nc({
    ref: t,
    className: An("visx-tooltip", n),
    style: nc({
      top: a == null || u == null ? a : a + u,
      left: i == null || d == null ? i : i + d
    }, F && {
      position: "absolute"
    }, !R && y)
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
      this.node = (d = this.nodeRef) != null && d.current ? this.nodeRef.current : ig.findDOMNode(this), this.setState(function() {
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
var Qm = /* @__PURE__ */ ce.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), q0 = Qm.Provider;
Qm.Consumer;
var G0 = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
function Z0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Jm(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, l = i === void 0 ? 10 : i, d = e.offsetTop, f = d === void 0 ? 10 : d, u = e.parentRect, m = e.rect, y = e.style, x = y === void 0 ? Zm : y, S = e.top, R = S === void 0 ? 0 : S, T = e.unstyled, F = T === void 0 ? !1 : T, k = e.nodeRef, h = Z0(e, G0), P, O = !1, C = !1;
  if (m && u) {
    var N = a, _ = R;
    if (u.width) {
      var B = N + l + m.width - u.width, q = m.width - N - l;
      O = B > 0 && B > q;
    } else {
      var U = N + l + m.width - window.innerWidth, ne = m.width - N - l;
      O = U > 0 && U > ne;
    }
    if (u.height) {
      var re = _ + f + m.height - u.height, V = m.height - _ - f;
      C = re > 0 && re > V;
    } else
      C = _ + f + m.height > window.innerHeight;
    N = O ? N - m.width - l : N + l, _ = C ? _ - m.height - f : _ + f, N = Math.round(N), _ = Math.round(_), P = "translate(" + N + "px, " + _ + "px)";
  }
  return /* @__PURE__ */ r.createElement(U0, rc({
    ref: k,
    style: rc({
      left: 0,
      top: 0,
      transform: P
    }, !F && x)
  }, h), /* @__PURE__ */ r.createElement(q0, {
    value: {
      isFlippedVertically: !C,
      isFlippedHorizontally: !O
    }
  }, t));
}
Jm.propTypes = {
  nodeRef: We.oneOfType([We.string, We.func, We.object])
};
const ey = X0(Jm), ty = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: l, formatTooltipsDate: d, parseDate: f, setSharedFilter: u, isDraggingAnnotation: m } = ce.useContext(Et), { xScale: y, yScale: x, showTooltip: S, hideTooltip: R } = e, { xAxis: T, visualizationType: F, orientation: k, yAxis: h, runtime: P } = n, O = (te, se) => {
    var Ce;
    let G = 0, Q = Number(x.invert(te)), K = null, W = null;
    for (let xe of (Ce = n.runtime) == null ? void 0 : Ce.seriesKeys)
      if (se.hasOwnProperty(xe) && (G += Number(se[xe]), G >= Q)) {
        W = se[xe], K = xe;
        break;
      }
    return [K, W];
  }, C = (te, se, G, Q) => {
    var xe;
    const K = G.general.showMissingDataLabel && !se;
    let W = te === G.xAxis.dataKey ? se : a(se, Q(te));
    W = K ? "N/A" : W;
    const Ce = (xe = G.preliminaryData) == null ? void 0 : xe.find((fe) => fe.label && fe.type === "suppression" && fe.displayTooltip && se === fe.value && (!fe.column || te === fe.column));
    return Ce && (W = Ce.label), W;
  }, N = (te, se) => {
    const { x: G, y: Q } = se, W = {
      data: te || {},
      dataXPosition: G + 10,
      dataYPosition: Q
    };
    return {
      tooltipLeft: W.dataXPosition,
      tooltipTop: W.dataYPosition,
      tooltipData: W
    };
  }, _ = (te, se) => {
    if (te.stopPropagation(), m)
      return;
    const G = lp(te), { x: Q, y: K } = G, { data: W, arc: Ce } = se ?? {}, xe = U(Q - Number(n.yAxis.size || 0)), fe = F !== "Pie" ? n.series.filter((Le) => Le.tooltip === !0).map((Le) => Le.dataKey) : n.series.map((Le) => Le.dataKey);
    fe.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((Le) => {
      Le.confidenceIntervals.map((ke) => {
        ke.showInTooltip && (fe.push(ke.high), fe.push(ke.low));
      });
    });
    function Re(Le) {
      let ke = [];
      for (let Ie in Le)
        Le.hasOwnProperty(Ie) && ke.push(Le[Ie].name);
      return ke;
    }
    fe.push(...Re(n.columns)), fe.push(...Re(n.columns));
    const je = V(xe, fe), Ze = t.filter((Le) => Le[T.dataKey] === ne(K)), Ae = k === "vertical" ? je : Ze, me = (Le) => {
      const ke = n.series.filter((qe) => qe.dataKey === Le)[0];
      return ke != null && ke.axis ? String(ke.axis).toLowerCase() : "left";
    }, ue = (() => {
      var Qe, mt, tt;
      const Le = n.columns, ke = [], Ie = [];
      for (const [Ve, _e] of Object.entries(Le)) {
        const we = {
          addColPrefix: n.columns[Ve].prefix,
          addColSuffix: n.columns[Ve].suffix,
          addColRoundTo: n.columns[Ve].roundToPlace ? n.columns[Ve].roundToPlace : "",
          addColCommas: n.columns[Ve].commas
        };
        let Je = null;
        n.visualizationType === "Pie" ? Je = Ce == null ? void 0 : Ce.data[_e.name] : Je = (Qe = Ae[0]) == null ? void 0 : Qe[_e.name];
        const Ge = Ef(Je, "left", !0, n, we);
        _e.tooltips && ke.push([_e.label, Ge]);
      }
      const qe = [];
      if (ke.forEach((Ve) => {
        qe.push([Ve[0], Ve[1]]);
      }), F === "Pie" && Ie.push(
        // ignore
        [n.xAxis.dataKey, W],
        [n.runtime.yAxis.dataKey, a(Ce == null ? void 0 : Ce.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((Ce == null ? void 0 : Ce.endAngle) - (Ce == null ? void 0 : Ce.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), F === "Forest Plot" && Ie.push([n.xAxis.dataKey, ne(K)]), F !== "Pie" && F !== "Forest Plot" && !n.tooltips.singleSeries && Ie.push(
        ...(tt = (mt = Y()) == null ? void 0 : mt.filter((Ve) => {
          var _e, we;
          return ((_e = n.series) == null ? void 0 : _e.find((Je) => Je.dataKey === Ve && (Je == null ? void 0 : Je.tooltip))) || ((we = n.xAxis) == null ? void 0 : we.dataKey) == Ve || F === "Forecasting";
        })) == null ? void 0 : tt.flatMap((Ve) => {
          var Je;
          const _e = (Je = Ae[0]) == null ? void 0 : Je[Ve], we = C(Ve, _e, n, me);
          return [[Ve, we, me(Ve)]];
        })
      ), F !== "Pie" && F !== "Forest Plot" && n.tooltips.singleSeries) {
        const [Ve, _e] = O(K, Ae[0]);
        if (Ve && _e) {
          Ie.push([n.xAxis.dataKey, xe]);
          const we = C(Ve, _e, n, me);
          Ie.push([Ve, we]);
        }
      }
      return [...Ie, ...qe];
    })();
    if (!ue)
      return;
    const de = N(ue, G);
    S(de);
  }, B = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      R();
    }, 3e3) : R();
  }, q = (te) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let se = y.step();
      const Q = Math.floor(Number(te) / se);
      return y.domain()[Q - 1];
    }
    if (wn(n.xAxis) && n.visualizationType !== "Combo") {
      const se = xp((W) => f(W[n.xAxis.dataKey])).left, G = y.invert(y(te)), Q = se(n.data, G, 1);
      return f(n.data[Q - 1][n.xAxis.dataKey]);
    }
  }, U = (te, se = !1) => {
    if (F !== "Pie" && k !== "horizontal") {
      if (y.type === "point" || T.type === "continuous" || wn(T)) {
        let G = null, Q = Number.MAX_VALUE, K = te;
        return t.forEach((W) => {
          const Ce = wn(T) ? y(f(W[T.dataKey])) : y(W[T.dataKey]);
          let xe = n.barHeight;
          const fe = Math.abs(Number(Ce - K + (se ? xe * 2 : 0)));
          fe <= Q && (Q = fe, G = (wn(T), W[T.dataKey]));
        }), G;
      }
      if (n.xAxis.type === "categorical" || F === "Combo" && k !== "horizontal" && F !== "Forest Plot") {
        let Q = (y.range()[1] - y.range()[0]) / (y.domain().length + 1);
        const W = Math.floor((Number(te) - Q / 2) / Q);
        return y.domain()[W];
      }
      if (wn(T) && F !== "Combo" && k !== "horizontal") {
        const G = xp((Ce) => f(Ce[n.xAxis.dataKey])).left, Q = y.invert(te), K = G(n.data, Q, 1);
        return f(n.data[K - 1][n.xAxis.dataKey]);
      }
    }
  }, ne = (te, se) => {
    if (F === "Pie")
      return;
    let G = Number.MAX_VALUE, Q = null;
    return t.forEach((K, W) => {
      const Ce = x(F !== "Forest Plot" ? K[n.xAxis.dataKey] : W), xe = Math.abs(Ce - te);
      xe < G && (G = xe, Q = se ? K[se] : K[n.xAxis.dataKey]);
    }), Q;
  }, re = (te) => {
    var se, G;
    try {
      const Q = lp(te), { x: K } = Q;
      if (!K)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let W = U(K, !0), Ce = (se = n.data) == null ? void 0 : se.filter((xe) => xe[n.xAxis.dataKey] === W);
      if (!W)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (wn(T) && W && (W = new Date(W), W = l(W), Ce = (G = n.data) == null ? void 0 : G.filter((xe) => l(new Date(xe[n.xAxis.dataKey])) === W)), !Ce[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${W}`);
      u && (n != null && n.uid) && (Ce != null && Ce[0]) && u(n.uid, Ce[0]);
    } catch (Q) {
      console.error(Q.message);
    }
  }, V = (te, se) => {
    try {
      let G;
      return T.type === "categorical" ? G = t.filter((K) => K[T.dataKey] === te) : G = t.filter((K) => K[T.dataKey] === te), !G || G.length === 0 ? [] : G.map((K) => Object.fromEntries(Object.entries(K).filter(([W, Ce]) => se.includes(W))));
    } catch (G) {
      console.error("COVE", G);
    }
  }, Y = () => {
    var te;
    try {
      let se, G = [], Q = [];
      if ((te = n.series) == null || te.forEach((K) => {
        K.type === "Forecasting" && (G.push(K.stageColumn), K == null || K.confidenceIntervals.forEach((W) => {
          W.showInTooltip === !0 && (Q.push(W.low), Q.push(W.high));
        }));
      }), !n.dashboard)
        switch (F) {
          case "Combo":
            se = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys, ...Q];
            break;
          case "Forecasting":
            se = [P.xAxis.dataKey, ...G, ...Q];
            break;
          case "Line":
            se = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Area Chart":
            se = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Bar":
            se = k === "vertical" ? [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys] : [P.yAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
            break;
          case "Pie":
            se = [P.xAxis.dataKey, ...P == null ? void 0 : P.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (se = [P.xAxis.dataKey, ...P == null ? void 0 : P.barSeriesKeys, ...P == null ? void 0 : P.lineSeriesKeys, ...G, ...Q]), se;
    } catch (se) {
      console.error("COVE", se);
    }
  }, J = (te) => {
    const { dataXPosition: se, dataYPosition: G } = te;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${se}px, ${Number(G)}px)`
    };
  }, Z = (te) => {
    var G, Q;
    let se = n.series.filter((K) => K.dataKey === te);
    return (G = se[0]) != null && G.name ? (Q = se[0]) == null ? void 0 : Q.name : te;
  };
  return {
    getIncludedTooltipSeries: Y,
    getXValueFromCoordinate: U,
    getXValueFromCoordinateDate: q,
    getYScaleValues: V,
    handleTooltipClick: re,
    handleTooltipMouseOff: B,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: te }) => {
      const [se, G] = te, [Q, K, W] = G;
      if (F === "Forest Plot")
        return Q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${wn(h) ? l(f(Q, !1)) : K}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${Z(Q)}: ${a(K, "left")}`);
      const Ce = n.tooltips.dateDisplayFormat ? d(f(K, !1)) : l(f(K, !1));
      return F === "Bar" && k === "horizontal" && Q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? Ce : K}`) : Q === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${wn(T) ? Ce : K}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${Z(Q)}: ${K}`);
    },
    tooltipStyles: J
  };
};
function Vf(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
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
function ac(e) {
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
ac.propTypes = {
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
function ic(e) {
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
ic.propTypes = {
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
function ny(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, d = typeof a == "string" || typeof a > "u" ? 0 : a, f = Math.max(l, d), u = f / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: f,
    height: f
  }, /* @__PURE__ */ r.createElement(it, {
    top: u,
    left: u
  }, /* @__PURE__ */ r.createElement("circle", {
    r: u,
    fill: t,
    style: i
  })));
}
ny.propTypes = {
  fill: We.string,
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
function ry(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, d = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ r.createElement(it, {
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
ry.propTypes = {
  fill: We.string,
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
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
var zd = function() {
};
function nS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? zd : a, l = e.size, d = l === void 0 ? zd : l, f = e.width, u = e.height, m = e.label, y = e.item, x = e.itemIndex, S = e.shapeStyle, R = S === void 0 ? zd : S, T = {
    width: f,
    height: u,
    item: y,
    itemIndex: x,
    label: m,
    fill: i(os({}, m)),
    size: d(os({}, m)),
    style: R(os({}, m))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(ny, T) : n === "line" ? /* @__PURE__ */ r.createElement(ry, T) : /* @__PURE__ */ r.createElement(jf, T) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, T) : n ? /* @__PURE__ */ r.createElement(n, T) : null;
}
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
function ay(e) {
  var t = e.shape, n = t === void 0 ? jf : t, a = e.width, i = e.height, l = e.margin, d = e.label, f = e.item, u = e.itemIndex, m = e.fill, y = e.size, x = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: y ? y(oc({}, d)) : a,
      height: y ? y(oc({}, d)) : i,
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
ay.propTypes = {
  itemIndex: We.number.isRequired,
  margin: We.oneOfType([We.string, We.number]),
  width: We.oneOfType([We.string, We.number]),
  height: We.oneOfType([We.string, We.number])
};
function iy(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function sh(e) {
  return String(iy(e));
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
function oy(e) {
  var t = e.className, n = e.style, a = n === void 0 ? oS : n, i = e.scale, l = e.shape, d = e.domain, f = e.fill, u = f === void 0 ? sh : f, m = e.size, y = m === void 0 ? sh : m, x = e.labelFormat, S = x === void 0 ? iy : x, R = e.labelTransform, T = R === void 0 ? rS : R, F = e.shapeWidth, k = F === void 0 ? 15 : F, h = e.shapeHeight, P = h === void 0 ? 15 : h, O = e.shapeMargin, C = O === void 0 ? "2px 4px 2px 0" : O, N = e.shapeStyle, _ = e.labelAlign, B = _ === void 0 ? "left" : _, q = e.labelFlex, U = q === void 0 ? "1" : q, ne = e.labelMargin, re = ne === void 0 ? "0 4px" : ne, V = e.itemMargin, Y = V === void 0 ? "0" : V, J = e.direction, Z = J === void 0 ? "column" : J, ae = e.itemDirection, te = ae === void 0 ? "row" : ae, se = e.legendLabelProps, G = e.children, Q = iS(e, aS), K = d || ("domain" in i ? i.domain() : []), W = T({
    scale: i,
    labelFormat: S
  }), Ce = K.map(W);
  return G ? /* @__PURE__ */ r.createElement(r.Fragment, null, G(Ce)) : /* @__PURE__ */ r.createElement("div", {
    className: An("visx-legend", t),
    style: ls({}, a, {
      flexDirection: Z
    })
  }, Ce.map(function(xe, fe) {
    return /* @__PURE__ */ r.createElement(ac, ls({
      key: "legend-" + xe.text + "-" + fe,
      margin: Y,
      flexDirection: te
    }, Q), /* @__PURE__ */ r.createElement(ay, {
      shape: l,
      height: P,
      width: k,
      margin: C,
      item: K[fe],
      itemIndex: fe,
      label: xe,
      fill: u,
      size: y,
      shapeStyle: N
    }), /* @__PURE__ */ r.createElement(ic, ls({
      label: xe.text,
      flex: U,
      margin: re,
      align: B
    }, se)));
  }));
}
oy.propTypes = {
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
  return /* @__PURE__ */ r.createElement(oy, e);
}
function sS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Ec = (e, t) => {
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
}, ly = (e) => {
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
}, uS = (e, t) => e ? t ? "35px" : "15px" : "0px", sy = ce.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: l, formatLabels: d, skipId: f = "legend" }, u) => {
  const { innerClasses: m, containerClasses: y } = sS(e), { runtime: x, legend: S } = e;
  if (!S)
    return null;
  const R = (S == null ? void 0 : S.position) === "bottom" || ["sm", "xs", "xxs"].includes(l) && !S.hide, T = {
    marginBottom: R ? "15px" : "0px",
    marginTop: R && e.orientation === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : uS(R, e.brush.active)
  }, { HighLightedBarUtils: F } = Ec(e);
  let k = F.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { ref: u, style: T, id: f || "legend", className: y.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, S.label && /* @__PURE__ */ r.createElement("h3", null, Li(S.label)), S.description && /* @__PURE__ */ r.createElement("p", null, Li(S.description)), /* @__PURE__ */ r.createElement(lS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (h) => {
    var P, O, C, N;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: m.join(" ") }, d(h).map((_, B) => {
      var ne, re, V, Y;
      let q = ["legend-item", `legend-text--${_.text.replace(" ", "").toLowerCase()}`], U = _.datum;
      if (e.exclusions.active && ((ne = e.exclusions.keys) != null && ne.includes(U)))
        return null;
      if (x.seriesLabels) {
        let J = e.runtime.seriesLabelsAll.indexOf(U);
        U = e.runtime.seriesKeys[J], ((re = x == null ? void 0 : x.forecastingSeriesKeys) == null ? void 0 : re.length) > 0 && (U = _.text);
      }
      return n.length > 0 && n.includes(U) === !1 && q.push("inactive"), /* @__PURE__ */ r.createElement(
        ac,
        {
          className: q.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (J) => {
            J.key === "Enter" && (J.preventDefault(), a(_));
          },
          onClick: (J) => {
            J.preventDefault(), a(_);
          },
          role: "button"
        },
        /* @__PURE__ */ r.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(un, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: _.value, strokeWidth: 2, strokeDasharray: ly((V = e.series[B]) != null && V.type ? (Y = e.series[B]) == null ? void 0 : Y.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(cp, { viewport: l, margin: "0", fill: _.value, display: !0 }))),
        /* @__PURE__ */ r.createElement(ic, { align: "left", margin: "0 0 0 4px" }, _.text)
      );
    }), k.map((_, B) => {
      let q = "legend-item", U = _.legendLabel;
      return U ? (n.length > 0 && n.includes(U) === !1 && (q += " inactive"), /* @__PURE__ */ r.createElement(
        ac,
        {
          className: q,
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (ne) => {
            ne.key === "Enter" && (ne.preventDefault(), a(_.legendLabel));
          },
          onClick: (ne) => {
            ne.preventDefault(), a(_.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(cp, { fill: "transparent", borderColor: _.color ? _.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(ic, { align: "left", margin: "0 0 0 4px" }, _.legendLabel ? _.legendLabel : _.value)
      )) : !1;
    })), /* @__PURE__ */ r.createElement(r.Fragment, null, ((P = e == null ? void 0 : e.preliminaryData) == null ? void 0 : P.some((_) => _.label && _.type === "effect" && _.style === "Open Circles")) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.map((_, B) => /* @__PURE__ */ r.createElement(r.Fragment, null, _.label && _.type === "effect" && _.style && /* @__PURE__ */ r.createElement("div", { key: B, className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.lineCode), /* @__PURE__ */ r.createElement("p", null, " ", _.label)))))), !e.legend.hideSuppressedLabels && ((C = e == null ? void 0 : e.preliminaryData) == null ? void 0 : C.some((_) => _.label && _.displayLegend && _.type === "suppression" && _.value && ((_ == null ? void 0 : _.style) || _.symbol))) && (e.visualizationType === "Bar" && e.visualizationSubType === "regular" || e.visualizationType === "Line" || e.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && R ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map(
      (_, B) => _.displayLegend && _.type === "suppression" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Bar", className: `legend-preliminary ${_.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.iconCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label))), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { key: B + "Line", className: "legend-preliminary " }, /* @__PURE__ */ r.createElement("span", null, _.lineCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label))), e.visualizationType === "Combo" && /* @__PURE__ */ r.createElement(r.Fragment, null, _.symbol && _.iconCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: `legend-preliminary ${_.symbol}` }, /* @__PURE__ */ r.createElement("span", { className: _.symbol }, _.iconCode), /* @__PURE__ */ r.createElement("p", { className: _.type }, _.label)), _.style && _.lineCode && /* @__PURE__ */ r.createElement("div", { key: B + "Combo", className: "legend-preliminary" }, /* @__PURE__ */ r.createElement("span", null, _.lineCode), /* @__PURE__ */ r.createElement("p", null, _.label))))
    )))));
  }), n.length > 0 && /* @__PURE__ */ r.createElement(ps, { onClick: (h) => i(h), style: { marginTop: "1rem" } }, "Reset"));
});
function cS(e) {
  return jy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const uy = (e, t, n, a) => (i) => {
  var S, R, T, F, k;
  const { visualizationType: l, visualizationSubType: d, series: f, runtime: u } = e, m = (h) => {
    var P;
    return e.legend.reverseLabelOrder && ((P = e.legend) == null ? void 0 : P.position) === "bottom" ? h.reverse() : h;
  }, y = (S = e.legend) == null ? void 0 : S.colorCode;
  if (l === "Deviation Bar") {
    const [h, P] = hs[e.twoColor.palette], O = {
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
      return (C = P == null ? void 0 : P.stages) == null ? void 0 : C.map((N, _) => {
        var U, ne, re, V;
        let B = (U = Bu[N.color]) != null && U[2] ? (ne = Bu[N.color]) == null ? void 0 : ne[2] : (re = ar[N.color]) != null && re[2] ? (V = ar[N.color]) == null ? void 0 : V[2] : "#ccc";
        const q = {
          datum: N.key,
          index: _,
          text: N.key,
          value: B
        };
        h.push(q);
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
        const _ = {
          datum: O,
          index: h + N,
          text: O,
          icon: /* @__PURE__ */ r.createElement(cS, { color: "#000", size: 15 })
        };
        P.push(_);
      }
    }), [...i, ...P];
  }
  return m(i);
}, wu = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), dS = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: l, highlight: d, highlightReset: f, seriesHighlight: u, isDraggingAnnotation: m } = ce.useContext(Et), { tooltipData: y, showTooltip: x, hideTooltip: S, tooltipOpen: R, tooltipLeft: T, tooltipTop: F } = Gm(), { handleTooltipMouseOver: k, handleTooltipMouseOff: h, TooltipListItem: P } = ty({
    xScale: !1,
    yScale: !1,
    showTooltip: x,
    hideTooltip: S
  }), [O, C] = ce.useState(void 0), [N, _] = ce.useState(!1), B = Object.values(n.columns).filter((K) => K.showInViz), q = B.length > 0, U = q ? "pivotColumn" : void 0, ne = ce.useMemo(() => {
    if (q) {
      let K = [];
      const W = n.yAxis.dataKey, Ce = B.map((Re) => Re.name), xe = [W, ...Ce], fe = n.xAxis.dataKey;
      return t.forEach((Re) => {
        xe.forEach((je) => {
          const Ze = Re[je];
          Ze && K.push({
            [U]: Ze,
            [fe]: `${Re[fe]} - ${je}`
          });
        });
      }), K;
    }
    return t;
  }, [t, q]), re = ce.useMemo(() => {
    if (q) {
      const K = {};
      ne.forEach((xe) => {
        K[xe[n.xAxis.dataKey]] || (K[xe[n.xAxis.dataKey]] = !0);
      });
      const W = Object.entries(K).length;
      let Ce = n.customColors || ar[n.palette];
      return Ce = Ce.slice(0, W), Ho({
        domain: Object.keys(K),
        range: Ce,
        unknown: null
      });
    }
    return a;
  }, [a, q]), V = ce.useRef(), Y = Vf(V, {
    freezeOnceVisible: !1
  });
  ce.useEffect(() => {
    document.querySelector(".isEditor") && _((W) => !0);
  }), ce.useEffect(() => {
    Y != null && Y.isIntersecting && n.animate && !N && setTimeout(() => {
      _(!0);
    }, 500);
  }, [Y == null ? void 0 : Y.isIntersecting, n.animate]);
  const J = ({ arcs: K, path: W, getKey: Ce }) => {
    const xe = Jx(K, Ce, {
      from: wu,
      enter: wu,
      update: wu,
      leave: wu
    });
    return ce.useEffect(() => {
      const fe = setTimeout(() => {
        S();
      }, 500);
      return () => {
        clearTimeout(fe);
      };
    }, [y]), /* @__PURE__ */ r.createElement(r.Fragment, null, xe.map(({ item: fe, props: Re, key: je }, Ze) => /* @__PURE__ */ r.createElement(it, { className: fe.data[n.xAxis.dataKey], key: `${je}-${Ze}`, style: { opacity: n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(fe.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      Qp.path,
      {
        d: Yx(
          [Re.startAngle, Re.endAngle],
          (Ae, me) => W({
            ...fe,
            startAngle: Ae,
            endAngle: me
          })
        ),
        fill: re(fe.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Ae) => k(Ae, { data: fe.data[n.runtime.xAxis.dataKey], arc: fe }),
        onMouseLeave: (Ae) => h()
      }
    ))), xe.map(({ item: fe, key: Re }, je) => {
      const [Ze, Ae] = W.centroid(fe), me = fe.endAngle - fe.startAngle >= 0.1;
      let Fe = "#FFF";
      return re(fe.data[n.runtime.xAxis.dataKey]) && (Fe = Uo(Fe, re(fe.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ r.createElement(Qp.g, { key: `${Re}${je}` }, me && /* @__PURE__ */ r.createElement(St, { style: { fill: Fe }, x: Ze, y: Ae, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((fe.endAngle - fe.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [Z] = l;
  n && n.legend && !n.legend.hide && i === "lg" && (Z = Z * 0.73);
  const ae = n.heights.vertical, te = Math.min(Z, ae) / 2, se = ae / 2, G = n.pieType === "Donut" ? 75 : te;
  ce.useEffect(() => {
    if (u.length > 0 && n.legend.behavior !== "highlight") {
      let K = [];
      ne.forEach((W) => {
        u.indexOf(W[n.runtime.xAxis.dataKey]) !== -1 && K.push(W);
      }), C(K);
    } else
      C(void 0);
  }, [u]);
  const Q = uy(n, [], ne, re);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Or, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: te * 2, height: ae, className: `animated-pie group ${n.animate === !1 || N ? "animated" : ""}`, role: "img", "aria-label": pf(n) }, /* @__PURE__ */ r.createElement(it, { top: se, left: te }, /* @__PURE__ */ r.createElement(
    d0,
    {
      data: O || ne,
      pieValue: (K) => K[U || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: te - G,
      outerRadius: te
    },
    (K) => /* @__PURE__ */ r.createElement(J, { ...K, getKey: (W) => W.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: V }), !m && y && Object.entries(y.data).length > 0 && R && x && y.dataYPosition && y.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(ey, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: T, top: F }, /* @__PURE__ */ r.createElement("ul", null, typeof y == "object" && Object.entries(y.data).map((K, W) => /* @__PURE__ */ r.createElement(P, { item: K, key: W })))))), /* @__PURE__ */ r.createElement(sy, { config: n, colorScale: re, seriesHighlight: u, highlight: d, highlightReset: f, currentViewport: i, formatLabels: Q }));
};
function Es(e) {
  return e.split("-")[1];
}
function Uf(e) {
  return e === "y" ? "height" : "width";
}
function Ni(e) {
  return e.split("-")[0];
}
function ks(e) {
  return ["top", "bottom"].includes(Ni(e)) ? "x" : "y";
}
function uh(e, t, n) {
  let { reference: a, floating: i } = e;
  const l = a.x + a.width / 2 - i.width / 2, d = a.y + a.height / 2 - i.height / 2, f = ks(t), u = Uf(f), m = a[u] / 2 - i[u] / 2, y = f === "x";
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
  switch (Es(t)) {
    case "start":
      x[f] -= m * (n && y ? -1 : 1);
      break;
    case "end":
      x[f] += m * (n && y ? -1 : 1);
  }
  return x;
}
function cy(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ss(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function dy(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: l, rects: d, elements: f, strategy: u } = e, { boundary: m = "clippingAncestors", rootBoundary: y = "viewport", elementContext: x = "floating", altBoundary: S = !1, padding: R = 0 } = t, T = cy(R), F = f[S ? x === "floating" ? "reference" : "floating" : x], k = ss(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(F))) == null || n ? F : F.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(f.floating)), boundary: m, rootBoundary: y, strategy: u })), h = x === "floating" ? { ...d.floating, x: a, y: i } : d.reference, P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(f.floating)), O = await (l.isElement == null ? void 0 : l.isElement(P)) && await (l.getScale == null ? void 0 : l.getScale(P)) || { x: 1, y: 1 }, C = ss(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: h, offsetParent: P, strategy: u }) : h);
  return { top: (k.top - C.top + T.top) / O.y, bottom: (C.bottom - k.bottom + T.bottom) / O.y, left: (k.left - C.left + T.left) / O.x, right: (C.right - k.right + T.right) / O.x };
}
const fS = Math.min, pS = Math.max;
function gf(e, t, n) {
  return pS(e, fS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const hS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function lc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hS[t]);
}
function mS(e, t, n) {
  n === void 0 && (n = !1);
  const a = Es(e), i = ks(e), l = Uf(i);
  let d = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (d = lc(d)), { main: d, cross: lc(d) };
}
const yS = { start: "end", end: "start" };
function Id(e) {
  return e.replace(/start|end/g, (t) => yS[t]);
}
const gS = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: l, initialPlacement: d, platform: f, elements: u } = t, { mainAxis: m = !0, crossAxis: y = !0, fallbackPlacements: x, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: R = "none", flipAlignment: T = !0, ...F } = e, k = Ni(a), h = Ni(d) === d, P = await (f.isRTL == null ? void 0 : f.isRTL(u.floating)), O = x || (h || !T ? [lc(d)] : function(re) {
      const V = lc(re);
      return [Id(re), V, Id(V)];
    }(d));
    x || R === "none" || O.push(...function(re, V, Y, J) {
      const Z = Es(re);
      let ae = function(te, se, G) {
        const Q = ["left", "right"], K = ["right", "left"], W = ["top", "bottom"], Ce = ["bottom", "top"];
        switch (te) {
          case "top":
          case "bottom":
            return G ? se ? K : Q : se ? Q : K;
          case "left":
          case "right":
            return se ? W : Ce;
          default:
            return [];
        }
      }(Ni(re), Y === "start", J);
      return Z && (ae = ae.map((te) => te + "-" + Z), V && (ae = ae.concat(ae.map(Id)))), ae;
    }(d, T, R, P));
    const C = [d, ...O], N = await dy(t, F), _ = [];
    let B = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (m && _.push(N[k]), y) {
      const { main: re, cross: V } = mS(a, l, P);
      _.push(N[re], N[V]);
    }
    if (B = [...B, { placement: a, overflows: _ }], !_.every((re) => re <= 0)) {
      var q, U;
      const re = (((q = i.flip) == null ? void 0 : q.index) || 0) + 1, V = C[re];
      if (V)
        return { data: { index: re, overflows: B }, reset: { placement: V } };
      let Y = (U = B.find((J) => J.overflows[0] <= 0)) == null ? void 0 : U.placement;
      if (!Y)
        switch (S) {
          case "bestFit": {
            var ne;
            const J = (ne = B.map((Z) => [Z.placement, Z.overflows.filter((ae) => ae > 0).reduce((ae, te) => ae + te, 0)]).sort((Z, ae) => Z[1] - ae[1])[0]) == null ? void 0 : ne[0];
            J && (Y = J);
            break;
          }
          case "initialPlacement":
            Y = d;
        }
      if (a !== Y)
        return { reset: { placement: Y } };
    }
    return {};
  } };
}, vS = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(l, d) {
      const { placement: f, platform: u, elements: m } = l, y = await (u.isRTL == null ? void 0 : u.isRTL(m.floating)), x = Ni(f), S = Es(f), R = ks(f) === "x", T = ["left", "top"].includes(x) ? -1 : 1, F = y && R ? -1 : 1, k = typeof d == "function" ? d(l) : d;
      let { mainAxis: h, crossAxis: P, alignmentAxis: O } = typeof k == "number" ? { mainAxis: k, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...k };
      return S && typeof O == "number" && (P = S === "end" ? -1 * O : O), R ? { x: P * F, y: h * T } : { x: h * T, y: P * F };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, xS = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: l = !0, crossAxis: d = !1, limiter: f = { fn: (k) => {
      let { x: h, y: P } = k;
      return { x: h, y: P };
    } }, ...u } = e, m = { x: n, y: a }, y = await dy(t, u), x = ks(Ni(i)), S = x === "x" ? "y" : "x";
    let R = m[x], T = m[S];
    if (l) {
      const k = x === "y" ? "bottom" : "right";
      R = gf(R + y[x === "y" ? "top" : "left"], R, R - y[k]);
    }
    if (d) {
      const k = S === "y" ? "bottom" : "right";
      T = gf(T + y[S === "y" ? "top" : "left"], T, T - y[k]);
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
const ch = Math.min, us = Math.max, sc = Math.round;
function fy(e) {
  const t = Yr(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, l = e.offsetHeight, d = sc(n) !== i || sc(a) !== l;
  return d && (n = i, a = l), { width: n, height: a, fallback: d };
}
function Ia(e) {
  return hy(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Tu;
function py() {
  if (Tu)
    return Tu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Tu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Tu) : navigator.userAgent;
}
function Xr(e) {
  return e instanceof Er(e).HTMLElement;
}
function Oa(e) {
  return e instanceof Er(e).Element;
}
function hy(e) {
  return e instanceof Er(e).Node;
}
function dh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Er(e).ShadowRoot || e instanceof ShadowRoot;
}
function kc(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = Yr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function bS(e) {
  return ["table", "td", "th"].includes(Ia(e));
}
function vf(e) {
  const t = /firefox/i.test(py()), n = Yr(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const l = n.contain;
    return l != null && l.includes(i);
  });
}
function my() {
  return !/^((?!chrome|android).)*safari/i.test(py());
}
function Kf(e) {
  return ["html", "body", "#document"].includes(Ia(e));
}
function yy(e) {
  return Oa(e) ? e : e.contextElement;
}
const gy = { x: 1, y: 1 };
function jo(e) {
  const t = yy(e);
  if (!Xr(t))
    return gy;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: l } = fy(t);
  let d = (l ? sc(n.width) : n.width) / a, f = (l ? sc(n.height) : n.height) / i;
  return d && Number.isFinite(d) || (d = 1), f && Number.isFinite(f) || (f = 1), { x: d, y: f };
}
function xs(e, t, n, a) {
  var i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const d = e.getBoundingClientRect(), f = yy(e);
  let u = gy;
  t && (a ? Oa(a) && (u = jo(a)) : u = jo(e));
  const m = f ? Er(f) : window, y = !my() && n;
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
  return ((hy(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wc(e) {
  return Oa(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function vy(e) {
  return xs(Fa(e)).left + wc(e).scrollLeft;
}
function bs(e) {
  if (Ia(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || dh(e) && e.host || Fa(e);
  return dh(t) ? t.host : t;
}
function xy(e) {
  const t = bs(e);
  return Kf(t) ? t.ownerDocument.body : Xr(t) && kc(t) ? t : xy(t);
}
function by(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = xy(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Er(a);
  return i ? t.concat(l, l.visualViewport || [], kc(a) ? a : []) : t.concat(a, by(a));
}
function fh(e, t, n) {
  return t === "viewport" ? ss(function(a, i) {
    const l = Er(a), d = Fa(a), f = l.visualViewport;
    let u = d.clientWidth, m = d.clientHeight, y = 0, x = 0;
    if (f) {
      u = f.width, m = f.height;
      const S = my();
      (S || !S && i === "fixed") && (y = f.offsetLeft, x = f.offsetTop);
    }
    return { width: u, height: m, x: y, y: x };
  }(e, n)) : Oa(t) ? ss(function(a, i) {
    const l = xs(a, !0, i === "fixed"), d = l.top + a.clientTop, f = l.left + a.clientLeft, u = Xr(a) ? jo(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * u.x, height: a.clientHeight * u.y, x: f * u.x, y: d * u.y };
  }(t, n)) : ss(function(a) {
    const i = Fa(a), l = wc(a), d = a.ownerDocument.body, f = us(i.scrollWidth, i.clientWidth, d.scrollWidth, d.clientWidth), u = us(i.scrollHeight, i.clientHeight, d.scrollHeight, d.clientHeight);
    let m = -l.scrollLeft + vy(a);
    const y = -l.scrollTop;
    return Yr(d).direction === "rtl" && (m += us(i.clientWidth, d.clientWidth) - f), { width: f, height: u, x: m, y };
  }(Fa(e)));
}
function ph(e) {
  return Xr(e) && Yr(e).position !== "fixed" ? e.offsetParent : null;
}
function hh(e) {
  const t = Er(e);
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
    if ((Ia(t) !== "body" || kc(i)) && (d = wc(t)), Xr(t)) {
      const u = xs(t, !0);
      f.x = u.x + t.clientLeft, f.y = u.y + t.clientTop;
    } else
      i && (f.x = vy(i));
  return { x: l.left + d.scrollLeft - f.x, y: l.top + d.scrollTop - f.y, width: l.width, height: l.height };
}
const ES = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const l = n === "clippingAncestors" ? function(m, y) {
    const x = y.get(m);
    if (x)
      return x;
    let S = by(m).filter((k) => Oa(k) && Ia(k) !== "body"), R = null;
    const T = Yr(m).position === "fixed";
    let F = T ? bs(m) : m;
    for (; Oa(F) && !Kf(F); ) {
      const k = Yr(F), h = vf(F);
      (T ? h || R : h || k.position !== "static" || !R || !["absolute", "fixed"].includes(R.position)) ? R = k : S = S.filter((P) => P !== F), F = bs(F);
    }
    return y.set(m, S), S;
  }(t, this._c) : [].concat(n), d = [...l, a], f = d[0], u = d.reduce((m, y) => {
    const x = fh(t, y, i);
    return m.top = us(x.top, m.top), m.right = ch(x.right, m.right), m.bottom = ch(x.bottom, m.bottom), m.left = us(x.left, m.left), m;
  }, fh(t, f, i));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Xr(n), l = Fa(n);
  if (n === l)
    return t;
  let d = { scrollLeft: 0, scrollTop: 0 }, f = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((Ia(n) !== "body" || kc(l)) && (d = wc(n)), Xr(n))) {
    const m = xs(n);
    f = jo(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  return { width: t.width * f.x, height: t.height * f.y, x: t.x * f.x - d.scrollLeft * f.x + u.x, y: t.y * f.y - d.scrollTop * f.y + u.y };
}, isElement: Oa, getDimensions: function(e) {
  return Xr(e) ? fy(e) : e.getBoundingClientRect();
}, getOffsetParent: hh, getDocumentElement: Fa, getScale: jo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || hh, l = this.getDimensions;
  return { reference: SS(t, await i(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yr(e).direction === "rtl" }, mh = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: ES, ...n }, l = { ...i.platform, _c: a };
  return (async (d, f, u) => {
    const { placement: m = "bottom", strategy: y = "absolute", middleware: x = [], platform: S } = u, R = x.filter(Boolean), T = await (S.isRTL == null ? void 0 : S.isRTL(f));
    if (S == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), R.filter((N) => {
      let { name: _ } = N;
      return _ === "autoPlacement" || _ === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    d && f || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let F = await S.getElementRects({ reference: d, floating: f, strategy: y }), { x: k, y: h } = uh(F, m, T), P = m, O = {}, C = 0;
    for (let N = 0; N < R.length; N++) {
      const { name: _, fn: B } = R[N], { x: q, y: U, data: ne, reset: re } = await B({ x: k, y: h, initialPlacement: m, placement: P, strategy: y, middlewareData: O, rects: F, platform: S, elements: { reference: d, floating: f } });
      k = q ?? k, h = U ?? h, O = { ...O, [_]: { ...O[_], ...ne } }, C > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), re && C <= 50 && (C++, typeof re == "object" && (re.placement && (P = re.placement), re.rects && (F = re.rects === !0 ? await S.getElementRects({ reference: d, floating: f, strategy: y }) : re.rects), { x: k, y: h } = uh(F, P, T)), N = -1);
    }
    return { x: k, y: h, placement: P, strategy: y, middlewareData: O };
  })(e, t, { ...i, platform: l });
};
var _a, Oi = { exports: {} }, yh = {};
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
  var a = 60108, i = 60114, l = 60109, d = 60110, f = 60112, u = 60113, m = 60120, y = 60115, x = 60116, S = 60121, R = 60122, T = 60117, F = 60129, k = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    t = h("react.element"), n = h("react.portal"), _a.Fragment = h("react.fragment"), a = h("react.strict_mode"), i = h("react.profiler"), l = h("react.provider"), d = h("react.context"), f = h("react.forward_ref"), u = h("react.suspense"), m = h("react.suspense_list"), y = h("react.memo"), x = h("react.lazy"), S = h("react.block"), R = h("react.server.block"), T = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), F = h("react.debug_trace_mode"), h("react.offscreen"), k = h("react.legacy_hidden");
  }
  var P = typeof Symbol == "function" && Symbol.iterator, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function C(me) {
    for (var Fe = arguments.length, ue = new Array(Fe > 1 ? Fe - 1 : 0), de = 1; de < Fe; de++)
      ue[de - 1] = arguments[de];
    N("error", me, ue);
  }
  function N(me, Fe, ue) {
    var de = O.ReactDebugCurrentFrame, Le = "";
    if (U) {
      var ke = B(U.type), Ie = U._owner;
      Le += function(Qe, mt, tt) {
        var Ve = "";
        if (mt) {
          var _e = mt.fileName, we = _e.replace(_, "");
          if (/^index\./.test(we)) {
            var Je = _e.match(_);
            if (Je) {
              var Ge = Je[1];
              Ge && (we = Ge.replace(_, "") + "/" + we);
            }
          }
          Ve = " (at " + we + ":" + mt.lineNumber + ")";
        } else
          tt && (Ve = " (created by " + tt + ")");
        return `
    in ` + (Qe || "Unknown") + Ve;
      }(ke, U._source, Ie && B(Ie.type));
    }
    (Le += de.getStackAddendum()) !== "" && (Fe += "%s", ue = ue.concat([Le]));
    var qe = ue.map(function(Qe) {
      return "" + Qe;
    });
    qe.unshift("Warning: " + Fe), Function.prototype.apply.call(console[me], console, qe);
  }
  var _ = /^(.*)[\\\/]/;
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
          return de = me, Le = me.render, ke = "ForwardRef", Ie = Le.displayName || Le.name || "", de.displayName || (Ie !== "" ? ke + "(" + Ie + ")" : ke);
        case y:
          return B(me.type);
        case S:
          return B(me.render);
        case x:
          var Fe = (ue = me)._status === 1 ? ue._result : null;
          if (Fe)
            return B(Fe);
      }
    var ue, de, Le, ke, Ie;
    return null;
  }
  var q = {};
  O.ReactDebugCurrentFrame;
  var U = null;
  function ne(me) {
    U = me;
  }
  var re, V, Y, J = O.ReactCurrentOwner, Z = Object.prototype.hasOwnProperty, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(me, Fe, ue, de, Le) {
    var ke, Ie = {}, qe = null, Qe = null;
    for (ke in ue !== void 0 && (qe = "" + ue), function(Ve) {
      if (Z.call(Ve, "key")) {
        var _e = Object.getOwnPropertyDescriptor(Ve, "key").get;
        if (_e && _e.isReactWarning)
          return !1;
      }
      return Ve.key !== void 0;
    }(Fe) && (qe = "" + Fe.key), function(Ve) {
      if (Z.call(Ve, "ref")) {
        var _e = Object.getOwnPropertyDescriptor(Ve, "ref").get;
        if (_e && _e.isReactWarning)
          return !1;
      }
      return Ve.ref !== void 0;
    }(Fe) && (Qe = Fe.ref, function(Ve, _e) {
      if (typeof Ve.ref == "string" && J.current && _e && J.current.stateNode !== _e) {
        var we = B(J.current.type);
        Y[we] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(J.current.type), Ve.ref), Y[we] = !0);
      }
    }(Fe, Le)), Fe)
      Z.call(Fe, ke) && !ae.hasOwnProperty(ke) && (Ie[ke] = Fe[ke]);
    if (me && me.defaultProps) {
      var mt = me.defaultProps;
      for (ke in mt)
        Ie[ke] === void 0 && (Ie[ke] = mt[ke]);
    }
    if (qe || Qe) {
      var tt = typeof me == "function" ? me.displayName || me.name || "Unknown" : me;
      qe && function(Ve, _e) {
        var we = function() {
          re || (re = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _e));
        };
        we.isReactWarning = !0, Object.defineProperty(Ve, "key", { get: we, configurable: !0 });
      }(Ie, tt), Qe && function(Ve, _e) {
        var we = function() {
          V || (V = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _e));
        };
        we.isReactWarning = !0, Object.defineProperty(Ve, "ref", { get: we, configurable: !0 });
      }(Ie, tt);
    }
    return function(Ve, _e, we, Je, Ge, dt, bt) {
      var yt = { $$typeof: t, type: Ve, key: _e, ref: we, props: bt, _owner: dt, _store: {} };
      return Object.defineProperty(yt._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(yt, "_self", { configurable: !1, enumerable: !1, writable: !1, value: Je }), Object.defineProperty(yt, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ge }), Object.freeze && (Object.freeze(yt.props), Object.freeze(yt)), yt;
    }(me, qe, Qe, Le, de, J.current, Ie);
  }
  Y = {};
  var se, G = O.ReactCurrentOwner;
  function Q(me) {
    U = me;
  }
  function K(me) {
    return typeof me == "object" && me !== null && me.$$typeof === t;
  }
  function W() {
    if (G.current) {
      var me = B(G.current.type);
      if (me)
        return `

Check the render method of \`` + me + "`.";
    }
    return "";
  }
  O.ReactDebugCurrentFrame, se = !1;
  var Ce = {};
  function xe(me, Fe) {
    if (me._store && !me._store.validated && me.key == null) {
      me._store.validated = !0;
      var ue = function(Le) {
        var ke = W();
        if (!ke) {
          var Ie = typeof Le == "string" ? Le : Le.displayName || Le.name;
          Ie && (ke = `

Check the top-level render call using <` + Ie + ">.");
        }
        return ke;
      }(Fe);
      if (!Ce[ue]) {
        Ce[ue] = !0;
        var de = "";
        me && me._owner && me._owner !== G.current && (de = " It was passed a child from " + B(me._owner.type) + "."), Q(me), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, de), Q(null);
      }
    }
  }
  function fe(me, Fe) {
    if (typeof me == "object") {
      if (Array.isArray(me))
        for (var ue = 0; ue < me.length; ue++) {
          var de = me[ue];
          K(de) && xe(de, Fe);
        }
      else if (K(me))
        me._store && (me._store.validated = !0);
      else if (me) {
        var Le = function(qe) {
          if (qe === null || typeof qe != "object")
            return null;
          var Qe = P && qe[P] || qe["@@iterator"];
          return typeof Qe == "function" ? Qe : null;
        }(me);
        if (typeof Le == "function" && Le !== me.entries)
          for (var ke, Ie = Le.call(me); !(ke = Ie.next()).done; )
            K(ke.value) && xe(ke.value, Fe);
      }
    }
  }
  function Re(me) {
    var Fe, ue = me.type;
    if (ue != null && typeof ue != "string") {
      if (typeof ue == "function")
        Fe = ue.propTypes;
      else {
        if (typeof ue != "object" || ue.$$typeof !== f && ue.$$typeof !== y)
          return;
        Fe = ue.propTypes;
      }
      if (Fe) {
        var de = B(ue);
        (function(Le, ke, Ie, qe, Qe) {
          var mt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var tt in Le)
            if (mt(Le, tt)) {
              var Ve = void 0;
              try {
                if (typeof Le[tt] != "function") {
                  var _e = Error((qe || "React class") + ": " + Ie + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Le[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw _e.name = "Invariant Violation", _e;
                }
                Ve = Le[tt](ke, tt, qe, Ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (we) {
                Ve = we;
              }
              !Ve || Ve instanceof Error || (ne(Qe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ie, tt, typeof Ve), ne(null)), Ve instanceof Error && !(Ve.message in q) && (q[Ve.message] = !0, ne(Qe), C("Failed %s type: %s", Ie, Ve.message), ne(null));
            }
        })(Fe, me.props, "prop", de, me);
      } else
        ue.PropTypes === void 0 || se || (se = !0, C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B(ue) || "Unknown"));
      typeof ue.getDefaultProps != "function" || ue.getDefaultProps.isReactClassApproved || C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function je(me, Fe, ue, de, Le, ke) {
    var Ie = function(we) {
      return typeof we == "string" || typeof we == "function" || we === _a.Fragment || we === i || we === F || we === a || we === u || we === m || we === k || typeof we == "object" && we !== null && (we.$$typeof === x || we.$$typeof === y || we.$$typeof === l || we.$$typeof === d || we.$$typeof === f || we.$$typeof === T || we.$$typeof === S || we[0] === R);
    }(me);
    if (!Ie) {
      var qe = "";
      (me === void 0 || typeof me == "object" && me !== null && Object.keys(me).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Qe, mt = function(we) {
        return we !== void 0 ? `

Check your code at ` + we.fileName.replace(/^.*[\\\/]/, "") + ":" + we.lineNumber + "." : "";
      }(Le);
      qe += mt || W(), me === null ? Qe = "null" : Array.isArray(me) ? Qe = "array" : me !== void 0 && me.$$typeof === t ? (Qe = "<" + (B(me.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof me, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, qe);
    }
    var tt = te(me, Fe, ue, Le, ke);
    if (tt == null)
      return tt;
    if (Ie) {
      var Ve = Fe.children;
      if (Ve !== void 0)
        if (de)
          if (Array.isArray(Ve)) {
            for (var _e = 0; _e < Ve.length; _e++)
              fe(Ve[_e], me);
            Object.freeze && Object.freeze(Ve);
          } else
            C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          fe(Ve, me);
    }
    return me === _a.Fragment ? function(we) {
      for (var Je = Object.keys(we.props), Ge = 0; Ge < Je.length; Ge++) {
        var dt = Je[Ge];
        if (dt !== "children" && dt !== "key") {
          Q(we), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", dt), Q(null);
          break;
        }
      }
      we.ref !== null && (Q(we), C("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
    }(tt) : Re(tt), tt;
  }
  var Ze = function(me, Fe, ue) {
    return je(me, Fe, ue, !1);
  }, Ae = function(me, Fe, ue) {
    return je(me, Fe, ue, !0);
  };
  _a.jsx = Ze, _a.jsxs = Ae;
}(), Oi.exports = yh;
var $d, Sy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
$d = Sy, function() {
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
  $d.exports ? (t.default = t, $d.exports = t) : window.classNames = t;
}();
var gh = Sy.exports;
const vh = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, kS = ({ content: e }) => Oi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), wS = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, TS = ce.createContext({ getTooltipData: () => wS });
function Ey(e = "DEFAULT_TOOLTIP_ID") {
  return ce.useContext(TS).getTooltipData(e);
}
const xh = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: l = "absolute", middlewares: d = [vS(Number(i)), gS(), xS({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const f = d;
  return n ? (f.push({ name: "arrow", options: u = { element: n, padding: 5 }, async fn(m) {
    const { element: y, padding: x = 0 } = u || {}, { x: S, y: R, placement: T, rects: F, platform: k } = m;
    if (y == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const h = cy(x), P = { x: S, y: R }, O = ks(T), C = Uf(O), N = await k.getDimensions(y), _ = O === "y" ? "top" : "left", B = O === "y" ? "bottom" : "right", q = F.reference[C] + F.reference[O] - P[O] - F.floating[C], U = P[O] - F.reference[O], ne = await (k.getOffsetParent == null ? void 0 : k.getOffsetParent(y));
    let re = ne ? O === "y" ? ne.clientHeight || 0 : ne.clientWidth || 0 : 0;
    re === 0 && (re = F.floating[C]);
    const V = q / 2 - U / 2, Y = h[_], J = re - N[C] - h[B], Z = re / 2 - N[C] / 2 + V, ae = gf(Y, Z, J), te = Es(T) != null && Z != ae && F.reference[C] / 2 - (Z < Y ? h[_] : h[B]) - N[C] / 2 < 0;
    return { [O]: P[O] - (te ? Z < Y ? Y - Z : J - Z : 0), data: { [O]: ae, centerOffset: Z - ae } };
  } }), mh(e, t, { placement: a, strategy: l, middleware: f }).then(({ x: m, y, placement: x, middlewareData: S }) => {
    var R, T;
    const F = { left: `${m}px`, top: `${y}px` }, { x: k, y: h } = (R = S.arrow) !== null && R !== void 0 ? R : { x: 0, y: 0 };
    return { tooltipStyles: F, tooltipArrowStyles: { left: k != null ? `${k}px` : "", top: h != null ? `${h}px` : "", right: "", bottom: "", [(T = { top: "bottom", right: "left", bottom: "top", left: "right" }[x.split("-")[0]]) !== null && T !== void 0 ? T : "bottom"]: "-4px" } };
  })) : mh(e, t, { placement: "bottom", strategy: l, middleware: f }).then(({ x: m, y }) => ({ tooltipStyles: { left: `${m}px`, top: `${y}px` }, tooltipArrowStyles: {} }));
  var u;
};
var wi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const bh = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: l, place: d = "top", offset: f = 10, events: u = ["hover"], positionStrategy: m = "absolute", middlewares: y, wrapper: x, children: S = null, delayShow: R = 0, delayHide: T = 0, float: F = !1, noArrow: k = !1, clickable: h = !1, closeOnEsc: P = !1, style: O, position: C, afterShow: N, afterHide: _, content: B, html: q, isOpen: U, setIsOpen: ne, activeAnchor: re, setActiveAnchor: V }) => {
  const Y = ce.useRef(null), J = ce.useRef(null), Z = ce.useRef(null), ae = ce.useRef(null), [te, se] = ce.useState({}), [G, Q] = ce.useState({}), [K, W] = ce.useState(!1), [Ce, xe] = ce.useState(!1), fe = ce.useRef(!1), Re = ce.useRef(null), { anchorRefs: je, setActiveAnchor: Ze } = Ey(e), Ae = ce.useRef(!1), [me, Fe] = ce.useState([]), ue = ce.useRef(!1);
  ce.useLayoutEffect(() => (ue.current = !0, () => {
    ue.current = !1;
  }), []), ce.useEffect(() => {
    if (!K) {
      const Ge = setTimeout(() => {
        xe(!1);
      }, 150);
      return () => {
        clearTimeout(Ge);
      };
    }
    return () => null;
  }, [K]);
  const de = (Ge) => {
    ue.current && (Ge && xe(!0), setTimeout(() => {
      ue.current && (ne == null || ne(Ge), U === void 0 && W(Ge));
    }, 10));
  };
  ce.useEffect(() => {
    if (U === void 0)
      return () => null;
    U && xe(!0);
    const Ge = setTimeout(() => {
      W(U);
    }, 10);
    return () => {
      clearTimeout(Ge);
    };
  }, [U]), ce.useEffect(() => {
    K !== fe.current && (fe.current = K, K ? N == null || N() : _ == null || _());
  }, [K]);
  const Le = (Ge = T) => {
    ae.current && clearTimeout(ae.current), ae.current = setTimeout(() => {
      Ae.current || de(!1);
    }, Ge);
  }, ke = (Ge) => {
    var dt;
    if (!Ge)
      return;
    R ? (Z.current && clearTimeout(Z.current), Z.current = setTimeout(() => {
      de(!0);
    }, R)) : de(!0);
    const bt = (dt = Ge.currentTarget) !== null && dt !== void 0 ? dt : Ge.target;
    V(bt), Ze({ current: bt }), ae.current && clearTimeout(ae.current);
  }, Ie = () => {
    h ? Le(T || 100) : T ? Le() : de(!1), Z.current && clearTimeout(Z.current);
  }, qe = ({ x: Ge, y: dt }) => {
    xh({ place: d, offset: f, elementReference: { getBoundingClientRect: () => ({ x: Ge, y: dt, width: 0, height: 0, top: dt, left: Ge, right: Ge, bottom: dt }) }, tooltipReference: Y.current, tooltipArrowReference: J.current, strategy: m, middlewares: y }).then((bt) => {
      Object.keys(bt.tooltipStyles).length && se(bt.tooltipStyles), Object.keys(bt.tooltipArrowStyles).length && Q(bt.tooltipArrowStyles);
    });
  }, Qe = (Ge) => {
    if (!Ge)
      return;
    const dt = Ge, bt = { x: dt.clientX, y: dt.clientY };
    qe(bt), Re.current = bt;
  }, mt = (Ge) => {
    ke(Ge), T && Le();
  }, tt = (Ge) => {
    const dt = document.querySelector(`[id='${i}']`);
    dt != null && dt.contains(Ge.target) || me.some((bt) => bt.contains(Ge.target)) || de(!1);
  }, Ve = (Ge) => {
    Ge.key === "Escape" && de(!1);
  }, _e = vh(ke, 50), we = vh(Ie, 50);
  ce.useEffect(() => {
    var Ge, dt;
    const bt = new Set(je);
    me.forEach((Xt) => {
      bt.add({ current: Xt });
    });
    const yt = document.querySelector(`[id='${i}']`);
    yt && bt.add({ current: yt }), P && window.addEventListener("keydown", Ve);
    const _t = [];
    u.find((Xt) => Xt === "click") && (window.addEventListener("click", tt), _t.push({ event: "click", listener: mt })), u.find((Xt) => Xt === "hover") && (_t.push({ event: "mouseenter", listener: _e }, { event: "mouseleave", listener: we }, { event: "focus", listener: _e }, { event: "blur", listener: we }), F && _t.push({ event: "mousemove", listener: Qe }));
    const an = () => {
      Ae.current = !0;
    }, on = () => {
      Ae.current = !1, Ie();
    };
    return h && ((Ge = Y.current) === null || Ge === void 0 || Ge.addEventListener("mouseenter", an), (dt = Y.current) === null || dt === void 0 || dt.addEventListener("mouseleave", on)), _t.forEach(({ event: Xt, listener: Jt }) => {
      bt.forEach((Kt) => {
        var At;
        (At = Kt.current) === null || At === void 0 || At.addEventListener(Xt, Jt);
      });
    }), () => {
      var Xt, Jt;
      u.find((Kt) => Kt === "click") && window.removeEventListener("click", tt), P && window.removeEventListener("keydown", Ve), h && ((Xt = Y.current) === null || Xt === void 0 || Xt.removeEventListener("mouseenter", an), (Jt = Y.current) === null || Jt === void 0 || Jt.removeEventListener("mouseleave", on)), _t.forEach(({ event: Kt, listener: At }) => {
        bt.forEach((Mt) => {
          var Vt;
          (Vt = Mt.current) === null || Vt === void 0 || Vt.removeEventListener(Kt, At);
        });
      });
    };
  }, [Ce, je, me, P, u]), ce.useEffect(() => {
    let Ge = l ?? "";
    !Ge && e && (Ge = `[data-tooltip-id='${e}']`);
    const dt = new MutationObserver((bt) => {
      const yt = [];
      bt.forEach((_t) => {
        if (_t.type === "attributes" && _t.attributeName === "data-tooltip-id" && _t.target.getAttribute("data-tooltip-id") === e && yt.push(_t.target), _t.type === "childList" && (re && [..._t.removedNodes].some((an) => !!an.contains(re) && (xe(!1), de(!1), V(null), !0)), Ge))
          try {
            const an = [..._t.addedNodes].filter((on) => on.nodeType === 1);
            yt.push(...an.filter((on) => on.matches(Ge))), yt.push(...an.flatMap((on) => [...on.querySelectorAll(Ge)]));
          } catch {
          }
      }), yt.length && Fe((_t) => [..._t, ...yt]);
    });
    return dt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      dt.disconnect();
    };
  }, [e, l, re]), ce.useEffect(() => {
    C ? qe(C) : F ? Re.current && qe(Re.current) : xh({ place: d, offset: f, elementReference: re, tooltipReference: Y.current, tooltipArrowReference: J.current, strategy: m, middlewares: y }).then((Ge) => {
      ue.current && (Object.keys(Ge.tooltipStyles).length && se(Ge.tooltipStyles), Object.keys(Ge.tooltipArrowStyles).length && Q(Ge.tooltipArrowStyles));
    });
  }, [K, re, B, q, d, f, m, C]), ce.useEffect(() => {
    var Ge;
    const dt = document.querySelector(`[id='${i}']`), bt = [...me, dt];
    re && bt.includes(re) || V((Ge = me[0]) !== null && Ge !== void 0 ? Ge : dt);
  }, [i, me, re]), ce.useEffect(() => () => {
    Z.current && clearTimeout(Z.current), ae.current && clearTimeout(ae.current);
  }, []), ce.useEffect(() => {
    let Ge = l;
    if (!Ge && e && (Ge = `[data-tooltip-id='${e}']`), Ge)
      try {
        const dt = Array.from(document.querySelectorAll(Ge));
        Fe(dt);
      } catch {
        Fe([]);
      }
  }, [e, l]);
  const Je = !!(q || B || S) && K && Object.keys(te).length > 0;
  return Ce ? Oi.exports.jsxs(x, { id: e, role: "tooltip", className: gh("react-tooltip", wi.tooltip, wi[a], t, { [wi.show]: Je, [wi.fixed]: m === "fixed", [wi.clickable]: h }), style: { ...O, ...te }, ref: Y, children: [q && Oi.exports.jsx(kS, { content: q }) || B || S, Oi.exports.jsx(x, { className: gh("react-tooltip-arrow", wi.arrow, n, { [wi["no-arrow"]]: k }), style: G, ref: J })] }) : null;
}, ky = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: l, classNameArrow: d, variant: f = "dark", place: u = "top", offset: m = 10, wrapper: y = "div", children: x = null, events: S = ["hover"], positionStrategy: R = "absolute", middlewares: T, delayShow: F = 0, delayHide: k = 0, float: h = !1, noArrow: P = !1, clickable: O = !1, closeOnEsc: C = !1, style: N, position: _, isOpen: B, setIsOpen: q, afterShow: U, afterHide: ne }) => {
  const [re, V] = ce.useState(a), [Y, J] = ce.useState(i), [Z, ae] = ce.useState(u), [te, se] = ce.useState(f), [G, Q] = ce.useState(m), [K, W] = ce.useState(F), [Ce, xe] = ce.useState(k), [fe, Re] = ce.useState(h), [je, Ze] = ce.useState(y), [Ae, me] = ce.useState(S), [Fe, ue] = ce.useState(R), [de, Le] = ce.useState(null), { anchorRefs: ke, activeAnchor: Ie } = Ey(e), qe = (tt) => tt == null ? void 0 : tt.getAttributeNames().reduce((Ve, _e) => {
    var we;
    return _e.startsWith("data-tooltip-") && (Ve[_e.replace(/^data-tooltip-/, "")] = (we = tt == null ? void 0 : tt.getAttribute(_e)) !== null && we !== void 0 ? we : null), Ve;
  }, {}), Qe = (tt) => {
    const Ve = { place: (_e) => {
      var we;
      ae((we = _e) !== null && we !== void 0 ? we : u);
    }, content: (_e) => {
      V(_e ?? a);
    }, html: (_e) => {
      J(_e ?? i);
    }, variant: (_e) => {
      var we;
      se((we = _e) !== null && we !== void 0 ? we : f);
    }, offset: (_e) => {
      Q(_e === null ? m : Number(_e));
    }, wrapper: (_e) => {
      var we;
      Ze((we = _e) !== null && we !== void 0 ? we : y);
    }, events: (_e) => {
      const we = _e == null ? void 0 : _e.split(" ");
      me(we ?? S);
    }, "position-strategy": (_e) => {
      var we;
      ue((we = _e) !== null && we !== void 0 ? we : R);
    }, "delay-show": (_e) => {
      W(_e === null ? F : Number(_e));
    }, "delay-hide": (_e) => {
      xe(_e === null ? k : Number(_e));
    }, float: (_e) => {
      Re(_e === null ? h : !!_e);
    } };
    Object.values(Ve).forEach((_e) => _e(null)), Object.entries(tt).forEach(([_e, we]) => {
      var Je;
      (Je = Ve[_e]) === null || Je === void 0 || Je.call(Ve, we);
    });
  };
  ce.useEffect(() => {
    V(a);
  }, [a]), ce.useEffect(() => {
    J(i);
  }, [i]), ce.useEffect(() => {
    ae(u);
  }, [u]), ce.useEffect(() => {
    var tt;
    const Ve = new Set(ke);
    let _e = n;
    if (!_e && e && (_e = `[data-tooltip-id='${e}']`), _e)
      try {
        document.querySelectorAll(_e).forEach((bt) => {
          Ve.add({ current: bt });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const we = document.querySelector(`[id='${t}']`);
    if (we && Ve.add({ current: we }), !Ve.size)
      return () => null;
    const Je = (tt = de ?? we) !== null && tt !== void 0 ? tt : Ie.current, Ge = new MutationObserver((bt) => {
      bt.forEach((yt) => {
        var _t;
        if (!Je || yt.type !== "attributes" || !(!((_t = yt.attributeName) === null || _t === void 0) && _t.startsWith("data-tooltip-")))
          return;
        const an = qe(Je);
        Qe(an);
      });
    }), dt = { attributes: !0, childList: !1, subtree: !1 };
    if (Je) {
      const bt = qe(Je);
      Qe(bt), Ge.observe(Je, dt);
    }
    return () => {
      Ge.disconnect();
    };
  }, [ke, Ie, de, t, n]);
  const mt = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: d, content: re, html: Y, place: Z, variant: te, offset: G, wrapper: je, events: Ae, positionStrategy: Fe, middlewares: T, delayShow: K, delayHide: Ce, float: fe, noArrow: P, clickable: O, closeOnEsc: C, style: N, position: _, isOpen: B, setIsOpen: q, afterShow: U, afterHide: ne, activeAnchor: de, setActiveAnchor: (tt) => Le(tt) };
  return x ? Oi.exports.jsx(bh, { ...mt, children: x }) : Oi.exports.jsx(bh, { ...mt });
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
function Bd(e, t) {
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
function Cu(e) {
  return function() {
    return e;
  };
}
function Eh(e, t) {
  return uc(e.source, t.source) || e.index - t.index;
}
function kh(e, t) {
  return uc(e.target, t.target) || e.index - t.index;
}
function uc(e, t) {
  return e.y0 - t.y0;
}
function Hd(e) {
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
  let e = 0, t = 0, n = 1, a = 1, i = 24, l = 8, d, f = PS, u = LS, m, y, x = RS, S = DS, R = 6;
  function T() {
    const Z = { nodes: x.apply(null, arguments), links: S.apply(null, arguments) };
    return F(Z), k(Z), h(Z), P(Z), N(Z), Th(Z), Z;
  }
  T.update = function(Z) {
    return Th(Z), Z;
  }, T.nodeId = function(Z) {
    return arguments.length ? (f = typeof Z == "function" ? Z : Cu(Z), T) : f;
  }, T.nodeAlign = function(Z) {
    return arguments.length ? (u = typeof Z == "function" ? Z : Cu(Z), T) : u;
  }, T.nodeSort = function(Z) {
    return arguments.length ? (m = Z, T) : m;
  }, T.nodeWidth = function(Z) {
    return arguments.length ? (i = +Z, T) : i;
  }, T.nodePadding = function(Z) {
    return arguments.length ? (l = d = +Z, T) : l;
  }, T.nodes = function(Z) {
    return arguments.length ? (x = typeof Z == "function" ? Z : Cu(Z), T) : x;
  }, T.links = function(Z) {
    return arguments.length ? (S = typeof Z == "function" ? Z : Cu(Z), T) : S;
  }, T.linkSort = function(Z) {
    return arguments.length ? (y = Z, T) : y;
  }, T.size = function(Z) {
    return arguments.length ? (e = t = 0, n = +Z[0], a = +Z[1], T) : [n - e, a - t];
  }, T.extent = function(Z) {
    return arguments.length ? (e = +Z[0][0], n = +Z[1][0], t = +Z[0][1], a = +Z[1][1], T) : [[e, t], [n, a]];
  }, T.iterations = function(Z) {
    return arguments.length ? (R = +Z, T) : R;
  };
  function F({ nodes: Z, links: ae }) {
    for (const [se, G] of Z.entries())
      G.index = se, G.sourceLinks = [], G.targetLinks = [];
    const te = new Map(Z.map((se, G) => [f(se, G, Z), se]));
    for (const [se, G] of ae.entries()) {
      G.index = se;
      let { source: Q, target: K } = G;
      typeof Q != "object" && (Q = G.source = wh(te, Q)), typeof K != "object" && (K = G.target = wh(te, K)), Q.sourceLinks.push(G), K.targetLinks.push(G);
    }
    if (y != null)
      for (const { sourceLinks: se, targetLinks: G } of Z)
        se.sort(y), G.sort(y);
  }
  function k({ nodes: Z }) {
    for (const ae of Z)
      ae.value = ae.fixedValue === void 0 ? Math.max(Bd(ae.sourceLinks, Hd), Bd(ae.targetLinks, Hd)) : ae.fixedValue;
  }
  function h({ nodes: Z }) {
    const ae = Z.length;
    let te = new Set(Z), se = /* @__PURE__ */ new Set(), G = 0;
    for (; te.size; ) {
      for (const Q of te) {
        Q.depth = G;
        for (const { target: K } of Q.sourceLinks)
          se.add(K);
      }
      if (++G > ae)
        throw new Error("circular link");
      te = se, se = /* @__PURE__ */ new Set();
    }
  }
  function P({ nodes: Z }) {
    const ae = Z.length;
    let te = new Set(Z), se = /* @__PURE__ */ new Set(), G = 0;
    for (; te.size; ) {
      for (const Q of te) {
        Q.height = G;
        for (const { source: K } of Q.targetLinks)
          se.add(K);
      }
      if (++G > ae)
        throw new Error("circular link");
      te = se, se = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: Z }) {
    const ae = Sh(Z, (G) => G.depth) + 1, te = (n - e - i) / (ae - 1), se = new Array(ae);
    for (const G of Z) {
      const Q = Math.max(0, Math.min(ae - 1, Math.floor(u.call(null, G, ae))));
      G.layer = Q, G.x0 = e + Q * te, G.x1 = G.x0 + i, se[Q] ? se[Q].push(G) : se[Q] = [G];
    }
    if (m)
      for (const G of se)
        G.sort(m);
    return se;
  }
  function C(Z) {
    const ae = CS(Z, (te) => (a - t - (te.length - 1) * d) / Bd(te, Hd));
    for (const te of Z) {
      let se = t;
      for (const G of te) {
        G.y0 = se, G.y1 = se + G.value * ae, se = G.y1 + d;
        for (const Q of G.sourceLinks)
          Q.width = Q.value * ae;
      }
      se = (a - se + d) / (te.length + 1);
      for (let G = 0; G < te.length; ++G) {
        const Q = te[G];
        Q.y0 += se * (G + 1), Q.y1 += se * (G + 1);
      }
      V(te);
    }
  }
  function N(Z) {
    const ae = O(Z);
    d = Math.min(l, (a - t) / (Sh(ae, (te) => te.length) - 1)), C(ae);
    for (let te = 0; te < R; ++te) {
      const se = Math.pow(0.99, te), G = Math.max(1 - se, (te + 1) / R);
      B(ae, se, G), _(ae, se, G);
    }
  }
  function _(Z, ae, te) {
    for (let se = 1, G = Z.length; se < G; ++se) {
      const Q = Z[se];
      for (const K of Q) {
        let W = 0, Ce = 0;
        for (const { source: fe, value: Re } of K.targetLinks) {
          let je = Re * (K.layer - fe.layer);
          W += Y(fe, K) * je, Ce += je;
        }
        if (!(Ce > 0))
          continue;
        let xe = (W / Ce - K.y0) * ae;
        K.y0 += xe, K.y1 += xe, re(K);
      }
      m === void 0 && Q.sort(uc), q(Q, te);
    }
  }
  function B(Z, ae, te) {
    for (let se = Z.length, G = se - 2; G >= 0; --G) {
      const Q = Z[G];
      for (const K of Q) {
        let W = 0, Ce = 0;
        for (const { target: fe, value: Re } of K.sourceLinks) {
          let je = Re * (fe.layer - K.layer);
          W += J(K, fe) * je, Ce += je;
        }
        if (!(Ce > 0))
          continue;
        let xe = (W / Ce - K.y0) * ae;
        K.y0 += xe, K.y1 += xe, re(K);
      }
      m === void 0 && Q.sort(uc), q(Q, te);
    }
  }
  function q(Z, ae) {
    const te = Z.length >> 1, se = Z[te];
    ne(Z, se.y0 - d, te - 1, ae), U(Z, se.y1 + d, te + 1, ae), ne(Z, a, Z.length - 1, ae), U(Z, t, 0, ae);
  }
  function U(Z, ae, te, se) {
    for (; te < Z.length; ++te) {
      const G = Z[te], Q = (ae - G.y0) * se;
      Q > 1e-6 && (G.y0 += Q, G.y1 += Q), ae = G.y1 + d;
    }
  }
  function ne(Z, ae, te, se) {
    for (; te >= 0; --te) {
      const G = Z[te], Q = (G.y1 - ae) * se;
      Q > 1e-6 && (G.y0 -= Q, G.y1 -= Q), ae = G.y0 - d;
    }
  }
  function re({ sourceLinks: Z, targetLinks: ae }) {
    if (y === void 0) {
      for (const { source: { sourceLinks: te } } of ae)
        te.sort(kh);
      for (const { target: { targetLinks: te } } of Z)
        te.sort(Eh);
    }
  }
  function V(Z) {
    if (y === void 0)
      for (const { sourceLinks: ae, targetLinks: te } of Z)
        ae.sort(kh), te.sort(Eh);
  }
  function Y(Z, ae) {
    let te = Z.y0 - (Z.sourceLinks.length - 1) * d / 2;
    for (const { target: se, width: G } of Z.sourceLinks) {
      if (se === ae)
        break;
      te += G + d;
    }
    for (const { source: se, width: G } of ae.targetLinks) {
      if (se === Z)
        break;
      te -= G;
    }
    return te;
  }
  function J(Z, ae) {
    let te = ae.y0 - (ae.targetLinks.length - 1) * d / 2;
    for (const { source: se, width: G } of ae.targetLinks) {
      if (se === Z)
        break;
      te += G + d;
    }
    for (const { target: se, width: G } of Z.sourceLinks) {
      if (se === ae)
        break;
      te -= G;
    }
    return te;
  }
  return T;
}
function NS(e) {
  return [e.source.x1, e.y0];
}
function OS(e) {
  return [e.target.x0, e.y1];
}
function FS() {
  return Ob().source(NS).target(OS);
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
var Ch;
function MS() {
  if (Ch)
    return Ti;
  Ch = 1;
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
  function f(g, A, z, j, be, ve, De) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = j, this.attributeNamespace = be, this.mustUseProperty = z, this.propertyName = g, this.type = A, this.sanitizeURL = ve, this.removeEmptyString = De;
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
      var z = "", j, be = 0;
      for (j = A.index; j < g.length; j++) {
        switch (g.charCodeAt(j)) {
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
        be !== j && (z += g.substring(be, j)), be = j + 1, z += A;
      }
      g = be !== j ? z + g.substring(be, j) : z;
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
    for (var j in z)
      if (n.call(z, j)) {
        var be = z[j];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (j.indexOf("--") === 0) {
            var ve = T(j);
            be = T(("" + be).trim());
          } else {
            ve = j;
            var De = C.get(ve);
            De !== void 0 || (De = T(ve.replace(F, "-$1").toLowerCase().replace(k, "-ms-")), C.set(ve, De)), ve = De, be = typeof be == "number" ? be === 0 || n.call(x, j) ? "" + be : be + "px" : T(("" + be).trim());
          }
          A ? (A = !1, g.push(' style="', ve, ":", be)) : g.push(";", ve, ":", be);
        }
      }
    A || g.push('"');
  }
  function _(g, A, z, j) {
    switch (z) {
      case "style":
        N(g, A, j);
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
        switch (typeof j) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = A.attributeName, A.type) {
          case 3:
            j && g.push(" ", z, '=""');
            break;
          case 4:
            j === !0 ? g.push(" ", z, '=""') : j !== !1 && g.push(" ", z, '="', T(j), '"');
            break;
          case 5:
            isNaN(j) || g.push(" ", z, '="', T(j), '"');
            break;
          case 6:
            !isNaN(j) && 1 <= j && g.push(" ", z, '="', T(j), '"');
            break;
          default:
            A.sanitizeURL && (j = "" + j), g.push(" ", z, '="', T(j), '"');
        }
      } else if (d(z)) {
        switch (typeof j) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        g.push(" ", z, '="', T(j), '"');
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
  function q(g) {
    var A = "";
    return e.Children.forEach(g, function(z) {
      z != null && (A += z);
    }), A;
  }
  function U(g, A, z, j) {
    g.push(V(z));
    var be = z = null, ve;
    for (ve in A)
      if (n.call(A, ve)) {
        var De = A[ve];
        if (De != null)
          switch (ve) {
            case "children":
              z = De;
              break;
            case "dangerouslySetInnerHTML":
              be = De;
              break;
            default:
              _(g, j, ve, De);
          }
      }
    return g.push(">"), B(g, be, z), typeof z == "string" ? (g.push(T(z)), null) : z;
  }
  var ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, re = /* @__PURE__ */ new Map();
  function V(g) {
    var A = re.get(g);
    if (A === void 0) {
      if (!ne.test(g))
        throw Error(t(65, g));
      A = "<" + g, re.set(g, A);
    }
    return A;
  }
  function Y(g, A, z, j, be) {
    switch (A) {
      case "select":
        g.push(V("select"));
        var ve = null, De = null;
        for (oe in z)
          if (n.call(z, oe)) {
            var Ue = z[oe];
            if (Ue != null)
              switch (oe) {
                case "children":
                  ve = Ue;
                  break;
                case "dangerouslySetInnerHTML":
                  De = Ue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  _(g, j, oe, Ue);
              }
          }
        return g.push(">"), B(g, De, ve), ve;
      case "option":
        De = be.selectedValue, g.push(V("option"));
        var ot = Ue = null, ht = null, oe = null;
        for (ve in z)
          if (n.call(z, ve)) {
            var le = z[ve];
            if (le != null)
              switch (ve) {
                case "children":
                  Ue = le;
                  break;
                case "selected":
                  ht = le;
                  break;
                case "dangerouslySetInnerHTML":
                  oe = le;
                  break;
                case "value":
                  ot = le;
                default:
                  _(g, j, ve, le);
              }
          }
        if (De != null)
          if (z = ot !== null ? "" + ot : q(Ue), h(De)) {
            for (j = 0; j < De.length; j++)
              if ("" + De[j] === z) {
                g.push(' selected=""');
                break;
              }
          } else
            "" + De === z && g.push(' selected=""');
        else
          ht && g.push(' selected=""');
        return g.push(">"), B(g, oe, Ue), Ue;
      case "textarea":
        g.push(V("textarea")), oe = De = ve = null;
        for (Ue in z)
          if (n.call(z, Ue) && (ot = z[Ue], ot != null))
            switch (Ue) {
              case "children":
                oe = ot;
                break;
              case "value":
                ve = ot;
                break;
              case "defaultValue":
                De = ot;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                _(
                  g,
                  j,
                  Ue,
                  ot
                );
            }
        if (ve === null && De !== null && (ve = De), g.push(">"), oe != null) {
          if (ve != null)
            throw Error(t(92));
          if (h(oe) && 1 < oe.length)
            throw Error(t(93));
          ve = "" + oe;
        }
        return typeof ve == "string" && ve[0] === `
` && g.push(`
`), ve !== null && g.push(T("" + ve)), null;
      case "input":
        g.push(V("input")), ot = oe = Ue = ve = null;
        for (De in z)
          if (n.call(z, De) && (ht = z[De], ht != null))
            switch (De) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                ot = ht;
                break;
              case "defaultValue":
                Ue = ht;
                break;
              case "checked":
                oe = ht;
                break;
              case "value":
                ve = ht;
                break;
              default:
                _(g, j, De, ht);
            }
        return oe !== null ? _(g, j, "checked", oe) : ot !== null && _(g, j, "checked", ot), ve !== null ? _(g, j, "value", ve) : Ue !== null && _(g, j, "value", Ue), g.push("/>"), null;
      case "menuitem":
        g.push(V("menuitem"));
        for (var ye in z)
          if (n.call(z, ye) && (ve = z[ye], ve != null))
            switch (ye) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                _(g, j, ye, ve);
            }
        return g.push(">"), null;
      case "title":
        g.push(V("title")), ve = null;
        for (le in z)
          if (n.call(z, le) && (De = z[le], De != null))
            switch (le) {
              case "children":
                ve = De;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                _(g, j, le, De);
            }
        return g.push(">"), ve;
      case "listing":
      case "pre":
        g.push(V(A)), De = ve = null;
        for (ot in z)
          if (n.call(z, ot) && (Ue = z[ot], Ue != null))
            switch (ot) {
              case "children":
                ve = Ue;
                break;
              case "dangerouslySetInnerHTML":
                De = Ue;
                break;
              default:
                _(g, j, ot, Ue);
            }
        if (g.push(">"), De != null) {
          if (ve != null)
            throw Error(t(60));
          if (typeof De != "object" || !("__html" in De))
            throw Error(t(61));
          z = De.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
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
        g.push(V(A));
        for (var Oe in z)
          if (n.call(z, Oe) && (ve = z[Oe], ve != null))
            switch (Oe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                _(g, j, Oe, ve);
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
        return U(
          g,
          z,
          A,
          j
        );
      case "html":
        return be.insertionMode === 0 && g.push("<!DOCTYPE html>"), U(g, z, A, j);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return U(g, z, A, j);
        g.push(V(A)), De = ve = null;
        for (ht in z)
          if (n.call(z, ht) && (Ue = z[ht], Ue != null))
            switch (ht) {
              case "children":
                ve = Ue;
                break;
              case "dangerouslySetInnerHTML":
                De = Ue;
                break;
              case "style":
                N(g, j, Ue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                d(ht) && typeof Ue != "function" && typeof Ue != "symbol" && g.push(" ", ht, '="', T(Ue), '"');
            }
        return g.push(">"), B(g, De, ve), ve;
    }
  }
  function J(g, A, z) {
    if (g.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return g.push(z), g.push('"></template>');
  }
  function Z(g, A, z, j) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return g.push('<div hidden id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 2:
        return g.push('<svg aria-hidden="true" style="display:none" id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 3:
        return g.push('<math aria-hidden="true" style="display:none" id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 4:
        return g.push('<table hidden id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 5:
        return g.push('<table hidden><tbody id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 6:
        return g.push('<table hidden><tr id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      case 7:
        return g.push('<table hidden><colgroup id="'), g.push(A.segmentPrefix), A = j.toString(16), g.push(A), g.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ae(g, A) {
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
  var te = /[<\u2028\u2029]/g;
  function se(g) {
    return JSON.stringify(g).replace(te, function(A) {
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
  function G(g, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: g };
  }
  function Q(g, A, z, j) {
    return z.generateStaticMarkup ? (g.push(T(A)), !1) : (A === "" ? g = j : (j && g.push("<!-- -->"), g.push(T(A)), g = !0), g);
  }
  var K = Object.assign, W = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), Ze = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Le = Symbol.for("react.scope"), ke = Symbol.for("react.debug_trace_mode"), Ie = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.default_value"), Qe = Symbol.iterator;
  function mt(g) {
    if (g == null)
      return null;
    if (typeof g == "function")
      return g.displayName || g.name || null;
    if (typeof g == "string")
      return g;
    switch (g) {
      case xe:
        return "Fragment";
      case Ce:
        return "Portal";
      case Re:
        return "Profiler";
      case fe:
        return "StrictMode";
      case me:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof g == "object")
      switch (g.$$typeof) {
        case Ze:
          return (g.displayName || "Context") + ".Consumer";
        case je:
          return (g._context.displayName || "Context") + ".Provider";
        case Ae:
          var A = g.render;
          return g = g.displayName, g || (g = A.displayName || A.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
        case ue:
          return A = g.displayName || null, A !== null ? A : mt(g.type) || "Memo";
        case de:
          A = g._payload, g = g._init;
          try {
            return mt(g(A));
          } catch {
          }
      }
    return null;
  }
  var tt = {};
  function Ve(g, A) {
    if (g = g.contextTypes, !g)
      return tt;
    var z = {}, j;
    for (j in g)
      z[j] = A[j];
    return z;
  }
  var _e = null;
  function we(g, A) {
    if (g !== A) {
      g.context._currentValue2 = g.parentValue, g = g.parent;
      var z = A.parent;
      if (g === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        we(g, z);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function Je(g) {
    g.context._currentValue2 = g.parentValue, g = g.parent, g !== null && Je(g);
  }
  function Ge(g) {
    var A = g.parent;
    A !== null && Ge(A), g.context._currentValue2 = g.value;
  }
  function dt(g, A) {
    if (g.context._currentValue2 = g.parentValue, g = g.parent, g === null)
      throw Error(t(402));
    g.depth === A.depth ? we(g, A) : dt(g, A);
  }
  function bt(g, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    g.depth === z.depth ? we(g, z) : bt(g, z), A.context._currentValue2 = A.value;
  }
  function yt(g) {
    var A = _e;
    A !== g && (A === null ? Ge(g) : g === null ? Je(A) : A.depth === g.depth ? we(A, g) : A.depth > g.depth ? dt(A, g) : bt(A, g), _e = g);
  }
  var _t = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(g, A) {
    g = g._reactInternals, g.queue !== null && g.queue.push(A);
  }, enqueueReplaceState: function(g, A) {
    g = g._reactInternals, g.replace = !0, g.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function an(g, A, z, j) {
    var be = g.state !== void 0 ? g.state : null;
    g.updater = _t, g.props = z, g.state = be;
    var ve = { queue: [], replace: !1 };
    g._reactInternals = ve;
    var De = A.contextType;
    if (g.context = typeof De == "object" && De !== null ? De._currentValue2 : j, De = A.getDerivedStateFromProps, typeof De == "function" && (De = De(z, be), be = De == null ? be : K({}, be, De), g.state = be), typeof A.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function"))
      if (A = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), A !== g.state && _t.enqueueReplaceState(g, g.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (A = ve.queue, De = ve.replace, ve.queue = null, ve.replace = !1, De && A.length === 1)
          g.state = A[0];
        else {
          for (ve = De ? A[0] : g.state, be = !0, De = De ? 1 : 0; De < A.length; De++) {
            var Ue = A[De];
            Ue = typeof Ue == "function" ? Ue.call(g, ve, z, j) : Ue, Ue != null && (be ? (be = !1, ve = K({}, ve, Ue)) : K(ve, Ue));
          }
          g.state = ve;
        }
      else
        ve.queue = null;
  }
  var on = { id: 1, overflow: "" };
  function Xt(g, A, z) {
    var j = g.id;
    g = g.overflow;
    var be = 32 - Jt(j) - 1;
    j &= ~(1 << be), z += 1;
    var ve = 32 - Jt(A) + be;
    if (30 < ve) {
      var De = be - be % 5;
      return ve = (j & (1 << De) - 1).toString(32), j >>= De, be -= De, { id: 1 << 32 - Jt(A) + be | z << be | j, overflow: ve + g };
    }
    return { id: 1 << ve | z << be | j, overflow: g };
  }
  var Jt = Math.clz32 ? Math.clz32 : Mt, Kt = Math.log, At = Math.LN2;
  function Mt(g) {
    return g >>>= 0, g === 0 ? 32 : 31 - (Kt(g) / At | 0) | 0;
  }
  function Vt(g, A) {
    return g === A && (g !== 0 || 1 / g === 1 / A) || g !== g && A !== A;
  }
  var $e = typeof Object.is == "function" ? Object.is : Vt, en = null, wt = null, zt = null, pt = null, tn = !1, xn = !1, Ft = 0, nn = null, Ln = 0;
  function Yt() {
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
    return pt === null ? zt === null ? (tn = !1, zt = pt = jt()) : (tn = !0, pt = zt) : pt.next === null ? (tn = !1, pt = pt.next = jt()) : (tn = !0, pt = pt.next), pt;
  }
  function Hn() {
    wt = en = null, xn = !1, zt = null, Ln = 0, pt = nn = null;
  }
  function Mn(g, A) {
    return typeof A == "function" ? A(g) : A;
  }
  function qt(g, A, z) {
    if (en = Yt(), pt = Tn(), tn) {
      var j = pt.queue;
      if (A = j.dispatch, nn !== null && (z = nn.get(j), z !== void 0)) {
        nn.delete(j), j = pt.memoizedState;
        do
          j = g(j, z.action), z = z.next;
        while (z !== null);
        return pt.memoizedState = j, [j, A];
      }
      return [pt.memoizedState, A];
    }
    return g = g === Mn ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, pt.memoizedState = g, g = pt.queue = { last: null, dispatch: null }, g = g.dispatch = Vn.bind(null, en, g), [pt.memoizedState, g];
  }
  function Wn(g, A) {
    if (en = Yt(), pt = Tn(), A = A === void 0 ? null : A, pt !== null) {
      var z = pt.memoizedState;
      if (z !== null && A !== null) {
        var j = z[1];
        e:
          if (j === null)
            j = !1;
          else {
            for (var be = 0; be < j.length && be < A.length; be++)
              if (!$e(A[be], j[be])) {
                j = !1;
                break e;
              }
            j = !0;
          }
        if (j)
          return z[0];
      }
    }
    return g = g(), pt.memoizedState = [g, A], g;
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
    return Yt(), g._currentValue2;
  }, useMemo: Wn, useReducer: qt, useRef: function(g) {
    en = Yt(), pt = Tn();
    var A = pt.memoizedState;
    return A === null ? (g = { current: g }, pt.memoizedState = g) : A;
  }, useState: function(g) {
    return qt(Mn, g);
  }, useInsertionEffect: Sn, useLayoutEffect: function() {
  }, useCallback: function(g, A) {
    return Wn(function() {
      return g;
    }, A);
  }, useImperativeHandle: Sn, useEffect: Sn, useDebugValue: Sn, useDeferredValue: function(g) {
    return Yt(), g;
  }, useTransition: function() {
    return Yt(), [
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
    return Yt(), A(g._source);
  }, useSyncExternalStore: function(g, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, zn = null, Un = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ne(g) {
    return console.error(g), null;
  }
  function ut() {
  }
  function ft(g, A, z, j, be, ve, De, Ue, ot) {
    var ht = [], oe = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: j === void 0 ? 12800 : j, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: oe, pingedTasks: ht, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? Ne : be, onAllReady: ve === void 0 ? ut : ve, onShellReady: De === void 0 ? ut : De, onShellError: Ue === void 0 ? ut : Ue, onFatalError: ot === void 0 ? ut : ot }, z = Me(A, 0, null, z, !1, !1), z.parentFlushed = !0, g = $(A, g, null, z, oe, tt, null, on), ht.push(g), A;
  }
  function $(g, A, z, j, be, ve, De, Ue) {
    g.allPendingTasks++, z === null ? g.pendingRootTasks++ : z.pendingTasks++;
    var ot = { node: A, ping: function() {
      var ht = g.pingedTasks;
      ht.push(ot), ht.length === 1 && Ot(g);
    }, blockedBoundary: z, blockedSegment: j, abortSet: be, legacyContext: ve, context: De, treeContext: Ue };
    return be.add(ot), ot;
  }
  function Me(g, A, z, j, be, ve) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: j, boundary: z, lastPushedText: be, textEmbedded: ve };
  }
  function Ye(g, A) {
    if (g = g.onError(A), g != null && typeof g != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof g + '" instead');
    return g;
  }
  function Be(g, A) {
    var z = g.onShellError;
    z(A), z = g.onFatalError, z(A), g.destination !== null ? (g.status = 2, g.destination.destroy(A)) : (g.status = 1, g.fatalError = A);
  }
  function nt(g, A, z, j, be) {
    for (en = {}, wt = A, Ft = 0, g = z(j, be); xn; )
      xn = !1, Ft = 0, Ln += 1, pt = null, g = z(j, be);
    return Hn(), g;
  }
  function at(g, A, z, j) {
    var be = z.render(), ve = j.childContextTypes;
    if (ve != null) {
      var De = A.legacyContext;
      if (typeof z.getChildContext != "function")
        j = De;
      else {
        z = z.getChildContext();
        for (var Ue in z)
          if (!(Ue in ve))
            throw Error(t(108, mt(j) || "Unknown", Ue));
        j = K({}, De, z);
      }
      A.legacyContext = j, Ke(g, A, be), A.legacyContext = De;
    } else
      Ke(g, A, be);
  }
  function kt(g, A) {
    if (g && g.defaultProps) {
      A = K({}, A), g = g.defaultProps;
      for (var z in g)
        A[z] === void 0 && (A[z] = g[z]);
      return A;
    }
    return A;
  }
  function Lt(g, A, z, j, be) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        be = Ve(z, A.legacyContext);
        var ve = z.contextType;
        ve = new z(j, typeof ve == "object" && ve !== null ? ve._currentValue2 : be), an(ve, z, j, be), at(g, A, ve, z);
      } else {
        ve = Ve(z, A.legacyContext), be = nt(g, A, z, j, ve);
        var De = Ft !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          an(be, z, j, ve), at(g, A, be, z);
        else if (De) {
          j = A.treeContext, A.treeContext = Xt(j, 1, 0);
          try {
            Ke(g, A, be);
          } finally {
            A.treeContext = j;
          }
        } else
          Ke(g, A, be);
      }
    else if (typeof z == "string") {
      switch (be = A.blockedSegment, ve = Y(be.chunks, z, j, g.responseState, be.formatContext), be.lastPushedText = !1, De = be.formatContext, be.formatContext = O(De, z, j), $t(g, A, ve), be.formatContext = De, z) {
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
        case Ie:
        case ke:
        case fe:
        case Re:
        case xe:
          Ke(g, A, j.children);
          return;
        case Fe:
          Ke(g, A, j.children);
          return;
        case Le:
          throw Error(t(343));
        case me:
          e: {
            z = A.blockedBoundary, be = A.blockedSegment, ve = j.fallback, j = j.children, De = /* @__PURE__ */ new Set();
            var Ue = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: De, errorDigest: null }, ot = Me(g, be.chunks.length, Ue, be.formatContext, !1, !1);
            be.children.push(ot), be.lastPushedText = !1;
            var ht = Me(g, 0, null, be.formatContext, !1, !1);
            ht.parentFlushed = !0, A.blockedBoundary = Ue, A.blockedSegment = ht;
            try {
              if ($t(
                g,
                A,
                j
              ), g.responseState.generateStaticMarkup || ht.lastPushedText && ht.textEmbedded && ht.chunks.push("<!-- -->"), ht.status = 1, Rt(Ue, ht), Ue.pendingTasks === 0)
                break e;
            } catch (oe) {
              ht.status = 4, Ue.forceClientRender = !0, Ue.errorDigest = Ye(g, oe);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = be;
            }
            A = $(g, ve, z, ot, De, A.legacyContext, A.context, A.treeContext), g.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Ae:
            if (j = nt(g, A, z.render, j, be), Ft !== 0) {
              z = A.treeContext, A.treeContext = Xt(z, 1, 0);
              try {
                Ke(g, A, j);
              } finally {
                A.treeContext = z;
              }
            } else
              Ke(g, A, j);
            return;
          case ue:
            z = z.type, j = kt(z, j), Lt(g, A, z, j, be);
            return;
          case je:
            if (be = j.children, z = z._context, j = j.value, ve = z._currentValue2, z._currentValue2 = j, De = _e, _e = j = { parent: De, depth: De === null ? 0 : De.depth + 1, context: z, parentValue: ve, value: j }, A.context = j, Ke(g, A, be), g = _e, g === null)
              throw Error(t(403));
            j = g.parentValue, g.context._currentValue2 = j === qe ? g.context._defaultValue : j, g = _e = g.parent, A.context = g;
            return;
          case Ze:
            j = j.children, j = j(z._currentValue2), Ke(g, A, j);
            return;
          case de:
            be = z._init, z = be(z._payload), j = kt(z, j), Lt(
              g,
              A,
              z,
              j,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function Ke(g, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case W:
          Lt(g, A, z.type, z.props, z.ref);
          return;
        case Ce:
          throw Error(t(257));
        case de:
          var j = z._init;
          z = j(z._payload), Ke(g, A, z);
          return;
      }
      if (h(z)) {
        It(g, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? j = null : (j = Qe && z[Qe] || z["@@iterator"], j = typeof j == "function" ? j : null), j && (j = j.call(z))) {
        if (z = j.next(), !z.done) {
          var be = [];
          do
            be.push(z.value), z = j.next();
          while (!z.done);
          It(g, A, be);
        }
        return;
      }
      throw g = Object.prototype.toString.call(z), Error(t(31, g === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : g));
    }
    typeof z == "string" ? (j = A.blockedSegment, j.lastPushedText = Q(A.blockedSegment.chunks, z, g.responseState, j.lastPushedText)) : typeof z == "number" && (j = A.blockedSegment, j.lastPushedText = Q(A.blockedSegment.chunks, "" + z, g.responseState, j.lastPushedText));
  }
  function It(g, A, z) {
    for (var j = z.length, be = 0; be < j; be++) {
      var ve = A.treeContext;
      A.treeContext = Xt(ve, j, be);
      try {
        $t(g, A, z[be]);
      } finally {
        A.treeContext = ve;
      }
    }
  }
  function $t(g, A, z) {
    var j = A.blockedSegment.formatContext, be = A.legacyContext, ve = A.context;
    try {
      return Ke(g, A, z);
    } catch (ot) {
      if (Hn(), typeof ot == "object" && ot !== null && typeof ot.then == "function") {
        z = ot;
        var De = A.blockedSegment, Ue = Me(g, De.chunks.length, null, De.formatContext, De.lastPushedText, !0);
        De.children.push(Ue), De.lastPushedText = !1, g = $(g, A.node, A.blockedBoundary, Ue, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(g, g), A.blockedSegment.formatContext = j, A.legacyContext = be, A.context = ve, yt(ve);
      } else
        throw A.blockedSegment.formatContext = j, A.legacyContext = be, A.context = ve, yt(ve), ot;
    }
  }
  function Bt(g) {
    var A = g.blockedBoundary;
    g = g.blockedSegment, g.status = 3, Nt(this, A, g);
  }
  function gt(g, A, z) {
    var j = g.blockedBoundary;
    g.blockedSegment.status = 3, j === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (j.pendingTasks--, j.forceClientRender || (j.forceClientRender = !0, g = z === void 0 ? Error(t(432)) : z, j.errorDigest = A.onError(g), j.parentFlushed && A.clientRenderedBoundaries.push(j)), j.fallbackAbortableTasks.forEach(function(be) {
      return gt(be, A, z);
    }), j.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (j = A.onAllReady, j()));
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
      g.pendingRootTasks--, g.pendingRootTasks === 0 && (g.onShellError = ut, A = g.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Rt(A, z), A.parentFlushed && g.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(Bt, g), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Rt(A, z), A.completedSegments.length === 1 && A.parentFlushed && g.partialBoundaries.push(A)));
    g.allPendingTasks--, g.allPendingTasks === 0 && (g = g.onAllReady, g());
  }
  function Ot(g) {
    if (g.status !== 2) {
      var A = _e, z = Un.current;
      Un.current = jn;
      var j = zn;
      zn = g.responseState;
      try {
        var be = g.pingedTasks, ve;
        for (ve = 0; ve < be.length; ve++) {
          var De = be[ve], Ue = g, ot = De.blockedSegment;
          if (ot.status === 0) {
            yt(De.context);
            try {
              Ke(Ue, De, De.node), Ue.responseState.generateStaticMarkup || ot.lastPushedText && ot.textEmbedded && ot.chunks.push("<!-- -->"), De.abortSet.delete(De), ot.status = 1, Nt(Ue, De.blockedBoundary, ot);
            } catch (vt) {
              if (Hn(), typeof vt == "object" && vt !== null && typeof vt.then == "function") {
                var ht = De.ping;
                vt.then(ht, ht);
              } else {
                De.abortSet.delete(De), ot.status = 4;
                var oe = De.blockedBoundary, le = vt, ye = Ye(Ue, le);
                if (oe === null ? Be(Ue, le) : (oe.pendingTasks--, oe.forceClientRender || (oe.forceClientRender = !0, oe.errorDigest = ye, oe.parentFlushed && Ue.clientRenderedBoundaries.push(oe))), Ue.allPendingTasks--, Ue.allPendingTasks === 0) {
                  var Oe = Ue.onAllReady;
                  Oe();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, ve), g.destination !== null && mn(g, g.destination);
      } catch (vt) {
        Ye(g, vt), Be(g, vt);
      } finally {
        zn = j, Un.current = z, z === jn && yt(A);
      }
    }
  }
  function Gt(g, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var j = z.id = g.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, g = g.responseState, A.push('<template id="'), A.push(g.placeholderPrefix), g = j.toString(16), A.push(g), A.push('"></template>');
      case 1:
        z.status = 2;
        var be = !0;
        j = z.chunks;
        var ve = 0;
        z = z.children;
        for (var De = 0; De < z.length; De++) {
          for (be = z[De]; ve < be.index; ve++)
            A.push(j[ve]);
          be = pn(g, A, be);
        }
        for (; ve < j.length - 1; ve++)
          A.push(j[ve]);
        return ve < j.length && (be = A.push(j[ve])), be;
      default:
        throw Error(t(390));
    }
  }
  function pn(g, A, z) {
    var j = z.boundary;
    if (j === null)
      return Gt(g, A, z);
    if (j.parentFlushed = !0, j.forceClientRender)
      return g.responseState.generateStaticMarkup || (j = j.errorDigest, A.push("<!--$!-->"), A.push("<template"), j && (A.push(' data-dgst="'), j = T(j), A.push(j), A.push('"')), A.push("></template>")), Gt(g, A, z), g = g.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), g;
    if (0 < j.pendingTasks) {
      j.rootSegmentID = g.nextSegmentId++, 0 < j.completedSegments.length && g.partialBoundaries.push(j);
      var be = g.responseState, ve = be.nextSuspenseID++;
      return be = be.boundaryPrefix + ve.toString(16), j = j.id = be, J(A, g.responseState, j), Gt(g, A, z), A.push("<!--/$-->");
    }
    if (j.byteSize > g.progressiveChunkSize)
      return j.rootSegmentID = g.nextSegmentId++, g.completedBoundaries.push(j), J(A, g.responseState, j.id), Gt(g, A, z), A.push("<!--/$-->");
    if (g.responseState.generateStaticMarkup || A.push("<!--$-->"), z = j.completedSegments, z.length !== 1)
      throw Error(t(391));
    return pn(g, A, z[0]), g = g.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), g;
  }
  function Nn(g, A, z) {
    return Z(A, g.responseState, z.formatContext, z.id), pn(g, A, z), ae(A, z.formatContext);
  }
  function hn(g, A, z) {
    for (var j = z.completedSegments, be = 0; be < j.length; be++)
      ln(g, A, z, j[be]);
    if (j.length = 0, g = g.responseState, j = z.id, z = z.rootSegmentID, A.push(g.startInlineScript), g.sentCompleteBoundaryFunction ? A.push('$RC("') : (g.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), j === null)
      throw Error(t(395));
    return z = z.toString(16), A.push(j), A.push('","'), A.push(g.segmentPrefix), A.push(z), A.push('")<\/script>');
  }
  function ln(g, A, z, j) {
    if (j.status === 2)
      return !0;
    var be = j.id;
    if (be === -1) {
      if ((j.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Nn(g, A, j);
    }
    return Nn(g, A, j), g = g.responseState, A.push(g.startInlineScript), g.sentCompleteSegmentFunction ? A.push('$RS("') : (g.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(g.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(g.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function mn(g, A) {
    try {
      var z = g.completedRootSegment;
      if (z !== null && g.pendingRootTasks === 0) {
        pn(g, A, z), g.completedRootSegment = null;
        var j = g.responseState.bootstrapChunks;
        for (z = 0; z < j.length - 1; z++)
          A.push(j[z]);
        z < j.length && A.push(j[z]);
      }
      var be = g.clientRenderedBoundaries, ve;
      for (ve = 0; ve < be.length; ve++) {
        var De = be[ve];
        j = A;
        var Ue = g.responseState, ot = De.id, ht = De.errorDigest, oe = De.errorMessage, le = De.errorComponentStack;
        if (j.push(Ue.startInlineScript), Ue.sentClientRenderFunction ? j.push('$RX("') : (Ue.sentClientRenderFunction = !0, j.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ot === null)
          throw Error(t(395));
        if (j.push(ot), j.push('"'), ht || oe || le) {
          j.push(",");
          var ye = se(ht || "");
          j.push(ye);
        }
        if (oe || le) {
          j.push(",");
          var Oe = se(oe || "");
          j.push(Oe);
        }
        if (le) {
          j.push(",");
          var vt = se(le);
          j.push(vt);
        }
        if (!j.push(")<\/script>")) {
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
          be = g, De = A;
          var In = dr.completedSegments;
          for (Ue = 0; Ue < In.length; Ue++)
            if (!ln(be, De, dr, In[Ue])) {
              Ue++, In.splice(0, Ue);
              var wr = !1;
              break e;
            }
          In.splice(0, Ue), wr = !0;
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
      z.forEach(function(j) {
        return gt(j, g, A);
      }), z.clear(), g.destination !== null && mn(g, g.destination);
    } catch (j) {
      Ye(g, j), Be(g, j);
    }
  }
  function En() {
  }
  function qn(g, A, z, j) {
    var be = !1, ve = null, De = "", Ue = { push: function(ht) {
      return ht !== null && (De += ht), !0;
    }, destroy: function(ht) {
      be = !0, ve = ht;
    } }, ot = !1;
    if (g = ft(g, G(z, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, En, void 0, function() {
      ot = !0;
    }, void 0, void 0), Ot(g), cn(g, j), g.status === 1)
      g.status = 2, Ue.destroy(g.fatalError);
    else if (g.status !== 2 && g.destination === null) {
      g.destination = Ue;
      try {
        mn(g, Ue);
      } catch (ht) {
        Ye(g, ht), Be(g, ht);
      }
    }
    if (be)
      throw ve;
    if (!ot)
      throw Error(t(426));
    return De;
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
var Au = {};
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
    return Au;
  Ah = 1;
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
  function k(v, L, I, X, Ee, Se, ze) {
    this.acceptsBooleans = L === 2 || L === 3 || L === 4, this.attributeName = X, this.attributeNamespace = Ee, this.mustUseProperty = I, this.propertyName = v, this.type = L, this.sanitizeURL = Se, this.removeEmptyString = ze;
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
  var _ = /["'&<>]/;
  function B(v) {
    if (typeof v == "boolean" || typeof v == "number")
      return "" + v;
    v = "" + v;
    var L = _.exec(v);
    if (L) {
      var I = "", X, Ee = 0;
      for (X = L.index; X < v.length; X++) {
        switch (v.charCodeAt(X)) {
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
        Ee !== X && (I += v.substring(Ee, X)), Ee = X + 1, I += L;
      }
      v = Ee !== X ? I + v.substring(Ee, X) : I;
    }
    return v;
  }
  var q = /([A-Z])/g, U = /^ms-/, ne = Array.isArray, re = m("<script>"), V = m("<\/script>"), Y = m('<script src="'), J = m('<script type="module" src="'), Z = m('" async=""><\/script>'), ae = /(<\/|<)(s)(cript)/gi;
  function te(v, L, I, X) {
    return "" + L + (I === "s" ? "\\u0073" : "\\u0053") + X;
  }
  function se(v, L, I, X, Ee) {
    v = v === void 0 ? "" : v, L = L === void 0 ? re : m('<script nonce="' + B(L) + '">');
    var Se = [];
    if (I !== void 0 && Se.push(L, u(("" + I).replace(ae, te)), V), X !== void 0)
      for (I = 0; I < X.length; I++)
        Se.push(Y, u(B(X[I])), Z);
    if (Ee !== void 0)
      for (X = 0; X < Ee.length; X++)
        Se.push(J, u(B(Ee[X])), Z);
    return { bootstrapChunks: Se, startInlineScript: L, placeholderPrefix: m(v + "P:"), segmentPrefix: m(v + "S:"), boundaryPrefix: v + "B:", idPrefix: v, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function G(v, L) {
    return { insertionMode: v, selectedValue: L };
  }
  function Q(v) {
    return G(v === "http://www.w3.org/2000/svg" ? 2 : v === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function K(v, L, I) {
    switch (L) {
      case "select":
        return G(1, I.value != null ? I.value : I.defaultValue);
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
  var W = m("<!-- -->");
  function Ce(v, L, I, X) {
    return L === "" ? X : (X && v.push(W), v.push(u(B(L))), !0);
  }
  var xe = /* @__PURE__ */ new Map(), fe = m(' style="'), Re = m(":"), je = m(";");
  function Ze(v, L, I) {
    if (typeof I != "object")
      throw Error(t(62));
    L = !0;
    for (var X in I)
      if (x.call(I, X)) {
        var Ee = I[X];
        if (Ee != null && typeof Ee != "boolean" && Ee !== "") {
          if (X.indexOf("--") === 0) {
            var Se = u(B(X));
            Ee = u(B(("" + Ee).trim()));
          } else {
            Se = X;
            var ze = xe.get(Se);
            ze !== void 0 || (ze = m(B(Se.replace(q, "-$1").toLowerCase().replace(U, "-ms-"))), xe.set(Se, ze)), Se = ze, Ee = typeof Ee == "number" ? Ee === 0 || x.call(C, X) ? u("" + Ee) : u(Ee + "px") : u(B(("" + Ee).trim()));
          }
          L ? (L = !1, v.push(fe, Se, Re, Ee)) : v.push(je, Se, Re, Ee);
        }
      }
    L || v.push(Fe);
  }
  var Ae = m(" "), me = m('="'), Fe = m('"'), ue = m('=""');
  function de(v, L, I, X) {
    switch (I) {
      case "style":
        Ze(v, L, X);
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
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!L.acceptsBooleans)
              return;
        }
        switch (I = u(L.attributeName), L.type) {
          case 3:
            X && v.push(Ae, I, ue);
            break;
          case 4:
            X === !0 ? v.push(Ae, I, ue) : X !== !1 && v.push(Ae, I, me, u(B(X)), Fe);
            break;
          case 5:
            isNaN(X) || v.push(Ae, I, me, u(B(X)), Fe);
            break;
          case 6:
            !isNaN(X) && 1 <= X && v.push(Ae, I, me, u(B(X)), Fe);
            break;
          default:
            L.sanitizeURL && (X = "" + X), v.push(Ae, I, me, u(B(X)), Fe);
        }
      } else if (F(I)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (L = I.toLowerCase().slice(0, 5), L !== "data-" && L !== "aria-")
              return;
        }
        v.push(Ae, u(I), me, u(B(X)), Fe);
      }
    }
  }
  var Le = m(">"), ke = m("/>");
  function Ie(v, L, I) {
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
  function mt(v, L, I, X) {
    v.push(we(I));
    var Ee = I = null, Se;
    for (Se in L)
      if (x.call(L, Se)) {
        var ze = L[Se];
        if (ze != null)
          switch (Se) {
            case "children":
              I = ze;
              break;
            case "dangerouslySetInnerHTML":
              Ee = ze;
              break;
            default:
              de(v, X, Se, ze);
          }
      }
    return v.push(Le), Ie(v, Ee, I), typeof I == "string" ? (v.push(u(B(I))), null) : I;
  }
  var tt = m(`
`), Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, _e = /* @__PURE__ */ new Map();
  function we(v) {
    var L = _e.get(v);
    if (L === void 0) {
      if (!Ve.test(v))
        throw Error(t(65, v));
      L = m("<" + v), _e.set(v, L);
    }
    return L;
  }
  var Je = m("<!DOCTYPE html>");
  function Ge(v, L, I, X, Ee) {
    switch (L) {
      case "select":
        v.push(we("select"));
        var Se = null, ze = null;
        for (Pt in I)
          if (x.call(I, Pt)) {
            var Xe = I[Pt];
            if (Xe != null)
              switch (Pt) {
                case "children":
                  Se = Xe;
                  break;
                case "dangerouslySetInnerHTML":
                  ze = Xe;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  de(v, X, Pt, Xe);
              }
          }
        return v.push(Le), Ie(v, ze, Se), Se;
      case "option":
        ze = Ee.selectedValue, v.push(we("option"));
        var xt = Xe = null, Dt = null, Pt = null;
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
                  xt = sn;
                default:
                  de(v, X, Se, sn);
              }
          }
        if (ze != null)
          if (I = xt !== null ? "" + xt : qe(Xe), ne(ze)) {
            for (X = 0; X < ze.length; X++)
              if ("" + ze[X] === I) {
                v.push(Qe);
                break;
              }
          } else
            "" + ze === I && v.push(Qe);
        else
          Dt && v.push(Qe);
        return v.push(Le), Ie(v, Pt, Xe), Xe;
      case "textarea":
        v.push(we("textarea")), Pt = ze = Se = null;
        for (Xe in I)
          if (x.call(I, Xe) && (xt = I[Xe], xt != null))
            switch (Xe) {
              case "children":
                Pt = xt;
                break;
              case "value":
                Se = xt;
                break;
              case "defaultValue":
                ze = xt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                de(v, X, Xe, xt);
            }
        if (Se === null && ze !== null && (Se = ze), v.push(Le), Pt != null) {
          if (Se != null)
            throw Error(t(92));
          if (ne(Pt) && 1 < Pt.length)
            throw Error(t(93));
          Se = "" + Pt;
        }
        return typeof Se == "string" && Se[0] === `
` && v.push(tt), Se !== null && v.push(u(B("" + Se))), null;
      case "input":
        v.push(we("input")), xt = Pt = Xe = Se = null;
        for (ze in I)
          if (x.call(I, ze) && (Dt = I[ze], Dt != null))
            switch (ze) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                xt = Dt;
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
                de(v, X, ze, Dt);
            }
        return Pt !== null ? de(
          v,
          X,
          "checked",
          Pt
        ) : xt !== null && de(v, X, "checked", xt), Se !== null ? de(v, X, "value", Se) : Xe !== null && de(v, X, "value", Xe), v.push(ke), null;
      case "menuitem":
        v.push(we("menuitem"));
        for (var Xn in I)
          if (x.call(I, Xn) && (Se = I[Xn], Se != null))
            switch (Xn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                de(v, X, Xn, Se);
            }
        return v.push(Le), null;
      case "title":
        v.push(we("title")), Se = null;
        for (sn in I)
          if (x.call(I, sn) && (ze = I[sn], ze != null))
            switch (sn) {
              case "children":
                Se = ze;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                de(v, X, sn, ze);
            }
        return v.push(Le), Se;
      case "listing":
      case "pre":
        v.push(we(L)), ze = Se = null;
        for (xt in I)
          if (x.call(I, xt) && (Xe = I[xt], Xe != null))
            switch (xt) {
              case "children":
                Se = Xe;
                break;
              case "dangerouslySetInnerHTML":
                ze = Xe;
                break;
              default:
                de(v, X, xt, Xe);
            }
        if (v.push(Le), ze != null) {
          if (Se != null)
            throw Error(t(60));
          if (typeof ze != "object" || !("__html" in ze))
            throw Error(t(61));
          I = ze.__html, I != null && (typeof I == "string" && 0 < I.length && I[0] === `
` ? v.push(tt, u(I)) : v.push(u("" + I)));
        }
        return typeof Se == "string" && Se[0] === `
` && v.push(tt), Se;
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
        v.push(we(L));
        for (var Jn in I)
          if (x.call(I, Jn) && (Se = I[Jn], Se != null))
            switch (Jn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, L));
              default:
                de(v, X, Jn, Se);
            }
        return v.push(ke), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return mt(v, I, L, X);
      case "html":
        return Ee.insertionMode === 0 && v.push(Je), mt(v, I, L, X);
      default:
        if (L.indexOf("-") === -1 && typeof I.is != "string")
          return mt(v, I, L, X);
        v.push(we(L)), ze = Se = null;
        for (Dt in I)
          if (x.call(I, Dt) && (Xe = I[Dt], Xe != null))
            switch (Dt) {
              case "children":
                Se = Xe;
                break;
              case "dangerouslySetInnerHTML":
                ze = Xe;
                break;
              case "style":
                Ze(v, X, Xe);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                F(Dt) && typeof Xe != "function" && typeof Xe != "symbol" && v.push(Ae, u(Dt), me, u(B(Xe)), Fe);
            }
        return v.push(Le), Ie(v, ze, Se), Se;
    }
  }
  var dt = m("</"), bt = m(">"), yt = m('<template id="'), _t = m('"></template>'), an = m("<!--$-->"), on = m('<!--$?--><template id="'), Xt = m('"></template>'), Jt = m("<!--$!-->"), Kt = m("<!--/$-->"), At = m("<template"), Mt = m('"'), Vt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var $e = m("></template>");
  function en(v, L, I) {
    if (i(v, on), I === null)
      throw Error(t(395));
    return i(v, I), l(v, Xt);
  }
  var wt = m('<div hidden id="'), zt = m('">'), pt = m("</div>"), tn = m('<svg aria-hidden="true" style="display:none" id="'), xn = m('">'), Ft = m("</svg>"), nn = m('<math aria-hidden="true" style="display:none" id="'), Ln = m('">'), Yt = m("</math>"), jt = m('<table hidden id="'), Tn = m('">'), Hn = m("</table>"), Mn = m('<table hidden><tbody id="'), qt = m('">'), Wn = m("</tbody></table>"), Vn = m('<table hidden><tr id="'), Cn = m('">'), Sn = m("</tr></table>"), jn = m('<table hidden><colgroup id="'), zn = m('">'), Un = m("</colgroup></table>");
  function Ne(v, L, I, X) {
    switch (I.insertionMode) {
      case 0:
      case 1:
        return i(v, wt), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, zt);
      case 2:
        return i(v, tn), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, xn);
      case 3:
        return i(v, nn), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, Ln);
      case 4:
        return i(v, jt), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, Tn);
      case 5:
        return i(v, Mn), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, qt);
      case 6:
        return i(v, Vn), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, Cn);
      case 7:
        return i(
          v,
          jn
        ), i(v, L.segmentPrefix), i(v, u(X.toString(16))), l(v, zn);
      default:
        throw Error(t(397));
    }
  }
  function ut(v, L) {
    switch (L.insertionMode) {
      case 0:
      case 1:
        return l(v, pt);
      case 2:
        return l(v, Ft);
      case 3:
        return l(v, Yt);
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
  var ft = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), $ = m('$RS("'), Me = m('","'), Ye = m('")<\/script>'), Be = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), nt = m('$RC("'), at = m('","'), kt = m('")<\/script>'), Lt = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ke = m('$RX("'), It = m('"'), $t = m(")<\/script>"), Bt = m(","), gt = /[<\u2028\u2029]/g;
  function Rt(v) {
    return JSON.stringify(v).replace(gt, function(L) {
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
  var Nt = Object.assign, Ot = Symbol.for("react.element"), Gt = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Nn = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), ln = Symbol.for("react.provider"), mn = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), En = Symbol.for("react.suspense"), qn = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), j = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ve = Symbol.for("react.default_value"), De = Symbol.iterator;
  function Ue(v) {
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
          return L = v.displayName || null, L !== null ? L : Ue(v.type) || "Memo";
        case A:
          L = v._payload, v = v._init;
          try {
            return Ue(v(L));
          } catch {
          }
      }
    return null;
  }
  var ot = {};
  function ht(v, L) {
    if (v = v.contextTypes, !v)
      return ot;
    var I = {}, X;
    for (X in v)
      I[X] = L[X];
    return I;
  }
  var oe = null;
  function le(v, L) {
    if (v !== L) {
      v.context._currentValue = v.parentValue, v = v.parent;
      var I = L.parent;
      if (v === null) {
        if (I !== null)
          throw Error(t(401));
      } else {
        if (I === null)
          throw Error(t(401));
        le(v, I);
      }
      L.context._currentValue = L.value;
    }
  }
  function ye(v) {
    v.context._currentValue = v.parentValue, v = v.parent, v !== null && ye(v);
  }
  function Oe(v) {
    var L = v.parent;
    L !== null && Oe(L), v.context._currentValue = v.value;
  }
  function vt(v, L) {
    if (v.context._currentValue = v.parentValue, v = v.parent, v === null)
      throw Error(t(402));
    v.depth === L.depth ? le(v, L) : vt(v, L);
  }
  function gn(v, L) {
    var I = L.parent;
    if (I === null)
      throw Error(t(402));
    v.depth === I.depth ? le(v, I) : gn(v, I), L.context._currentValue = L.value;
  }
  function kn(v) {
    var L = oe;
    L !== v && (L === null ? Oe(v) : v === null ? ye(L) : L.depth === v.depth ? le(L, v) : L.depth > v.depth ? vt(L, v) : gn(L, v), oe = v);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(v, L) {
    v = v._reactInternals, v.queue !== null && v.queue.push(L);
  }, enqueueReplaceState: function(v, L) {
    v = v._reactInternals, v.replace = !0, v.queue = [L];
  }, enqueueForceUpdate: function() {
  } };
  function In(v, L, I, X) {
    var Ee = v.state !== void 0 ? v.state : null;
    v.updater = dr, v.props = I, v.state = Ee;
    var Se = { queue: [], replace: !1 };
    v._reactInternals = Se;
    var ze = L.contextType;
    if (v.context = typeof ze == "object" && ze !== null ? ze._currentValue : X, ze = L.getDerivedStateFromProps, typeof ze == "function" && (ze = ze(I, Ee), Ee = ze == null ? Ee : Nt({}, Ee, ze), v.state = Ee), typeof L.getDerivedStateFromProps != "function" && typeof v.getSnapshotBeforeUpdate != "function" && (typeof v.UNSAFE_componentWillMount == "function" || typeof v.componentWillMount == "function"))
      if (L = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), L !== v.state && dr.enqueueReplaceState(v, v.state, null), Se.queue !== null && 0 < Se.queue.length)
        if (L = Se.queue, ze = Se.replace, Se.queue = null, Se.replace = !1, ze && L.length === 1)
          v.state = L[0];
        else {
          for (Se = ze ? L[0] : v.state, Ee = !0, ze = ze ? 1 : 0; ze < L.length; ze++) {
            var Xe = L[ze];
            Xe = typeof Xe == "function" ? Xe.call(v, Se, I, X) : Xe, Xe != null && (Ee ? (Ee = !1, Se = Nt({}, Se, Xe)) : Nt(Se, Xe));
          }
          v.state = Se;
        }
      else
        Se.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function fr(v, L, I) {
    var X = v.id;
    v = v.overflow;
    var Ee = 32 - qr(X) - 1;
    X &= ~(1 << Ee), I += 1;
    var Se = 32 - qr(L) + Ee;
    if (30 < Se) {
      var ze = Ee - Ee % 5;
      return Se = (X & (1 << ze) - 1).toString(32), X >>= ze, Ee -= ze, { id: 1 << 32 - qr(L) + Ee | I << Ee | X, overflow: Se + v };
    }
    return { id: 1 << Se | I << Ee | X, overflow: v };
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
      var X = rn.queue;
      if (L = X.dispatch, yr !== null && (I = yr.get(X), I !== void 0)) {
        yr.delete(X), X = rn.memoizedState;
        do
          X = v(X, I.action), I = I.next;
        while (I !== null);
        return rn.memoizedState = X, [X, L];
      }
      return [rn.memoizedState, L];
    }
    return v = v === Ii ? typeof L == "function" ? L() : L : I !== void 0 ? I(L) : L, rn.memoizedState = v, v = rn.queue = { last: null, dispatch: null }, v = v.dispatch = tl.bind(null, pr, v), [rn.memoizedState, v];
  }
  function Bi(v, L) {
    if (pr = gr(), rn = Wa(), L = L === void 0 ? null : L, rn !== null) {
      var I = rn.memoizedState;
      if (I !== null && L !== null) {
        var X = I[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var Ee = 0; Ee < X.length && Ee < L.length; Ee++)
              if (!Ha(L[Ee], X[Ee])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
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
  function ja(v, L, I, X, Ee, Se, ze, Xe, xt) {
    var Dt = [], Pt = /* @__PURE__ */ new Set();
    return L = { destination: null, responseState: L, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pt, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Ee === void 0 ? rl : Ee, onAllReady: Se === void 0 ? Qr : Se, onShellReady: ze === void 0 ? Qr : ze, onShellError: Xe === void 0 ? Qr : Xe, onFatalError: xt === void 0 ? Qr : xt }, I = Fr(L, 0, null, I, !1, !1), I.parentFlushed = !0, v = Ua(L, v, null, I, Pt, ot, null, wr), Dt.push(v), L;
  }
  function Ua(v, L, I, X, Ee, Se, ze, Xe) {
    v.allPendingTasks++, I === null ? v.pendingRootTasks++ : I.pendingTasks++;
    var xt = { node: L, ping: function() {
      var Dt = v.pingedTasks;
      Dt.push(xt), Dt.length === 1 && Ki(v);
    }, blockedBoundary: I, blockedSegment: X, abortSet: Ee, legacyContext: Se, context: ze, treeContext: Xe };
    return Ee.add(xt), xt;
  }
  function Fr(v, L, I, X, Ee, Se) {
    return { status: 0, id: -1, index: L, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: I, lastPushedText: Ee, textEmbedded: Se };
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
  function Hi(v, L, I, X, Ee) {
    for (pr = {}, Gr = L, Tr = 0, v = I(X, Ee); Kn; )
      Kn = !1, Tr = 0, fa += 1, rn = null, v = I(X, Ee);
    return Va(), v;
  }
  function Ka(v, L, I, X) {
    var Ee = I.render(), Se = X.childContextTypes;
    if (Se != null) {
      var ze = L.legacyContext;
      if (typeof I.getChildContext != "function")
        X = ze;
      else {
        I = I.getChildContext();
        for (var Xe in I)
          if (!(Xe in Se))
            throw Error(t(108, Ue(X) || "Unknown", Xe));
        X = Nt({}, ze, I);
      }
      L.legacyContext = X, Yn(v, L, Ee), L.legacyContext = ze;
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
  function ga(v, L, I, X, Ee) {
    if (typeof I == "function")
      if (I.prototype && I.prototype.isReactComponent) {
        Ee = ht(I, L.legacyContext);
        var Se = I.contextType;
        Se = new I(X, typeof Se == "object" && Se !== null ? Se._currentValue : Ee), In(Se, I, X, Ee), Ka(v, L, Se, I);
      } else {
        Se = ht(I, L.legacyContext), Ee = Hi(v, L, I, X, Se);
        var ze = Tr !== 0;
        if (typeof Ee == "object" && Ee !== null && typeof Ee.render == "function" && Ee.$$typeof === void 0)
          In(Ee, I, X, Se), Ka(v, L, Ee, I);
        else if (ze) {
          X = L.treeContext, L.treeContext = fr(X, 1, 0);
          try {
            Yn(v, L, Ee);
          } finally {
            L.treeContext = X;
          }
        } else
          Yn(v, L, Ee);
      }
    else if (typeof I == "string") {
      switch (Ee = L.blockedSegment, Se = Ge(Ee.chunks, I, X, v.responseState, Ee.formatContext), Ee.lastPushedText = !1, ze = Ee.formatContext, Ee.formatContext = K(ze, I, X), va(v, L, Se), Ee.formatContext = ze, I) {
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
          Ee.chunks.push(dt, u(I), bt);
      }
      Ee.lastPushedText = !1;
    } else {
      switch (I) {
        case be:
        case j:
        case Nn:
        case hn:
        case pn:
          Yn(v, L, X.children);
          return;
        case qn:
          Yn(v, L, X.children);
          return;
        case z:
          throw Error(t(343));
        case En:
          e: {
            I = L.blockedBoundary, Ee = L.blockedSegment, Se = X.fallback, X = X.children, ze = /* @__PURE__ */ new Set();
            var Xe = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: ze, errorDigest: null }, xt = Fr(v, Ee.chunks.length, Xe, Ee.formatContext, !1, !1);
            Ee.children.push(xt), Ee.lastPushedText = !1;
            var Dt = Fr(v, 0, null, Ee.formatContext, !1, !1);
            Dt.parentFlushed = !0, L.blockedBoundary = Xe, L.blockedSegment = Dt;
            try {
              if (va(
                v,
                L,
                X
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(W), Dt.status = 1, xa(Xe, Dt), Xe.pendingTasks === 0)
                break e;
            } catch (Pt) {
              Dt.status = 4, Xe.forceClientRender = !0, Xe.errorDigest = Mr(v, Pt);
            } finally {
              L.blockedBoundary = I, L.blockedSegment = Ee;
            }
            L = Ua(v, Se, I, xt, ze, L.legacyContext, L.context, L.treeContext), v.pingedTasks.push(L);
          }
          return;
      }
      if (typeof I == "object" && I !== null)
        switch (I.$$typeof) {
          case cn:
            if (X = Hi(v, L, I.render, X, Ee), Tr !== 0) {
              I = L.treeContext, L.treeContext = fr(I, 1, 0);
              try {
                Yn(v, L, X);
              } finally {
                L.treeContext = I;
              }
            } else
              Yn(v, L, X);
            return;
          case g:
            I = I.type, X = Wi(I, X), ga(v, L, I, X, Ee);
            return;
          case ln:
            if (Ee = X.children, I = I._context, X = X.value, Se = I._currentValue, I._currentValue = X, ze = oe, oe = X = { parent: ze, depth: ze === null ? 0 : ze.depth + 1, context: I, parentValue: Se, value: X }, L.context = X, Yn(v, L, Ee), v = oe, v === null)
              throw Error(t(403));
            X = v.parentValue, v.context._currentValue = X === ve ? v.context._defaultValue : X, v = oe = v.parent, L.context = v;
            return;
          case mn:
            X = X.children, X = X(I._currentValue), Yn(v, L, X);
            return;
          case A:
            Ee = I._init, I = Ee(I._payload), X = Wi(I, X), ga(v, L, I, X, void 0);
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
          var X = I._init;
          I = X(I._payload), Yn(v, L, I);
          return;
      }
      if (ne(I)) {
        Vi(v, L, I);
        return;
      }
      if (I === null || typeof I != "object" ? X = null : (X = De && I[De] || I["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call(I))) {
        if (I = X.next(), !I.done) {
          var Ee = [];
          do
            Ee.push(I.value), I = X.next();
          while (!I.done);
          Vi(v, L, Ee);
        }
        return;
      }
      throw v = Object.prototype.toString.call(I), Error(t(31, v === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : v));
    }
    typeof I == "string" ? (X = L.blockedSegment, X.lastPushedText = Ce(L.blockedSegment.chunks, I, v.responseState, X.lastPushedText)) : typeof I == "number" && (X = L.blockedSegment, X.lastPushedText = Ce(L.blockedSegment.chunks, "" + I, v.responseState, X.lastPushedText));
  }
  function Vi(v, L, I) {
    for (var X = I.length, Ee = 0; Ee < X; Ee++) {
      var Se = L.treeContext;
      L.treeContext = fr(Se, X, Ee);
      try {
        va(v, L, I[Ee]);
      } finally {
        L.treeContext = Se;
      }
    }
  }
  function va(v, L, I) {
    var X = L.blockedSegment.formatContext, Ee = L.legacyContext, Se = L.context;
    try {
      return Yn(v, L, I);
    } catch (xt) {
      if (Va(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
        I = xt;
        var ze = L.blockedSegment, Xe = Fr(v, ze.chunks.length, null, ze.formatContext, ze.lastPushedText, !0);
        ze.children.push(Xe), ze.lastPushedText = !1, v = Ua(v, L.node, L.blockedBoundary, Xe, L.abortSet, L.legacyContext, L.context, L.treeContext).ping, I.then(v, v), L.blockedSegment.formatContext = X, L.legacyContext = Ee, L.context = Se, kn(Se);
      } else
        throw L.blockedSegment.formatContext = X, L.legacyContext = Ee, L.context = Se, kn(Se), xt;
    }
  }
  function al(v) {
    var L = v.blockedBoundary;
    v = v.blockedSegment, v.status = 3, Ui(this, L, v);
  }
  function ji(v, L, I) {
    var X = v.blockedBoundary;
    v.blockedSegment.status = 3, X === null ? (L.allPendingTasks--, L.status !== 2 && (L.status = 2, L.destination !== null && L.destination.close())) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, v = I === void 0 ? Error(t(432)) : I, X.errorDigest = L.onError(v), X.parentFlushed && L.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(Ee) {
      return ji(Ee, L, I);
    }), X.fallbackAbortableTasks.clear(), L.allPendingTasks--, L.allPendingTasks === 0 && (X = L.onAllReady, X()));
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
      var L = oe, I = Zr.current;
      Zr.current = ha;
      var X = ma;
      ma = v.responseState;
      try {
        var Ee = v.pingedTasks, Se;
        for (Se = 0; Se < Ee.length; Se++) {
          var ze = Ee[Se], Xe = v, xt = ze.blockedSegment;
          if (xt.status === 0) {
            kn(ze.context);
            try {
              Yn(Xe, ze, ze.node), xt.lastPushedText && xt.textEmbedded && xt.chunks.push(W), ze.abortSet.delete(ze), xt.status = 1, Ui(Xe, ze.blockedBoundary, xt);
            } catch (er) {
              if (Va(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Dt = ze.ping;
                er.then(Dt, Dt);
              } else {
                ze.abortSet.delete(ze), xt.status = 4;
                var Pt = ze.blockedBoundary, sn = er, Xn = Mr(Xe, sn);
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
        ma = X, Zr.current = I, I === ha && kn(L);
      }
    }
  }
  function ba(v, L, I) {
    switch (I.parentFlushed = !0, I.status) {
      case 0:
        var X = I.id = v.nextSegmentId++;
        return I.lastPushedText = !1, I.textEmbedded = !1, v = v.responseState, i(L, yt), i(L, v.placeholderPrefix), v = u(X.toString(16)), i(L, v), l(L, _t);
      case 1:
        I.status = 2;
        var Ee = !0;
        X = I.chunks;
        var Se = 0;
        I = I.children;
        for (var ze = 0; ze < I.length; ze++) {
          for (Ee = I[ze]; Se < Ee.index; Se++)
            i(L, X[Se]);
          Ee = Sa(v, L, Ee);
        }
        for (; Se < X.length - 1; Se++)
          i(L, X[Se]);
        return Se < X.length && (Ee = l(L, X[Se])), Ee;
      default:
        throw Error(t(390));
    }
  }
  function Sa(v, L, I) {
    var X = I.boundary;
    if (X === null)
      return ba(v, L, I);
    if (X.parentFlushed = !0, X.forceClientRender)
      X = X.errorDigest, l(L, Jt), i(L, At), X && (i(L, Vt), i(L, u(B(X))), i(L, Mt)), l(L, $e), ba(v, L, I);
    else if (0 < X.pendingTasks) {
      X.rootSegmentID = v.nextSegmentId++, 0 < X.completedSegments.length && v.partialBoundaries.push(X);
      var Ee = v.responseState, Se = Ee.nextSuspenseID++;
      Ee = m(Ee.boundaryPrefix + Se.toString(16)), X = X.id = Ee, en(L, v.responseState, X), ba(v, L, I);
    } else if (X.byteSize > v.progressiveChunkSize)
      X.rootSegmentID = v.nextSegmentId++, v.completedBoundaries.push(X), en(L, v.responseState, X.id), ba(v, L, I);
    else {
      if (l(L, an), I = X.completedSegments, I.length !== 1)
        throw Error(t(391));
      Sa(v, L, I[0]);
    }
    return l(L, Kt);
  }
  function Yi(v, L, I) {
    return Ne(L, v.responseState, I.formatContext, I.id), Sa(v, L, I), ut(L, I.formatContext);
  }
  function Xi(v, L, I) {
    for (var X = I.completedSegments, Ee = 0; Ee < X.length; Ee++)
      qi(v, L, I, X[Ee]);
    if (X.length = 0, v = v.responseState, X = I.id, I = I.rootSegmentID, i(L, v.startInlineScript), v.sentCompleteBoundaryFunction ? i(L, nt) : (v.sentCompleteBoundaryFunction = !0, i(L, Be)), X === null)
      throw Error(t(395));
    return I = u(I.toString(16)), i(L, X), i(L, at), i(L, v.segmentPrefix), i(L, I), l(L, kt);
  }
  function qi(v, L, I, X) {
    if (X.status === 2)
      return !0;
    var Ee = X.id;
    if (Ee === -1) {
      if ((X.id = I.rootSegmentID) === -1)
        throw Error(t(392));
      return Yi(v, L, X);
    }
    return Yi(v, L, X), v = v.responseState, i(L, v.startInlineScript), v.sentCompleteSegmentFunction ? i(L, $) : (v.sentCompleteSegmentFunction = !0, i(L, ft)), i(L, v.segmentPrefix), Ee = u(Ee.toString(16)), i(L, Ee), i(L, Me), i(L, v.placeholderPrefix), i(L, Ee), l(L, Ye);
  }
  function Ya(v, L) {
    n = new Uint8Array(512), a = 0;
    try {
      var I = v.completedRootSegment;
      if (I !== null && v.pendingRootTasks === 0) {
        Sa(v, L, I), v.completedRootSegment = null;
        var X = v.responseState.bootstrapChunks;
        for (I = 0; I < X.length - 1; I++)
          i(L, X[I]);
        I < X.length && l(L, X[I]);
      }
      var Ee = v.clientRenderedBoundaries, Se;
      for (Se = 0; Se < Ee.length; Se++) {
        var ze = Ee[Se];
        X = L;
        var Xe = v.responseState, xt = ze.id, Dt = ze.errorDigest, Pt = ze.errorMessage, sn = ze.errorComponentStack;
        if (i(X, Xe.startInlineScript), Xe.sentClientRenderFunction ? i(X, Ke) : (Xe.sentClientRenderFunction = !0, i(
          X,
          Lt
        )), xt === null)
          throw Error(t(395));
        i(X, xt), i(X, It), (Dt || Pt || sn) && (i(X, Bt), i(X, u(Rt(Dt || "")))), (Pt || sn) && (i(X, Bt), i(X, u(Rt(Pt || "")))), sn && (i(X, Bt), i(X, u(Rt(sn)))), l(X, $t);
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
          Ee = v, ze = L;
          var Ea = er.completedSegments;
          for (Xe = 0; Xe < Ea.length; Xe++)
            if (!qi(
              Ee,
              ze,
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
      I.forEach(function(X) {
        return ji(X, v, L);
      }), I.clear(), v.destination !== null && Ya(v, v.destination);
    } catch (X) {
      Mr(v, X), ya(v, X);
    }
  }
  return Au.renderToReadableStream = function(v, L) {
    return new Promise(function(I, X) {
      var Ee, Se, ze = new Promise(function(Pt, sn) {
        Se = Pt, Ee = sn;
      }), Xe = ja(v, se(L ? L.identifierPrefix : void 0, L ? L.nonce : void 0, L ? L.bootstrapScriptContent : void 0, L ? L.bootstrapScripts : void 0, L ? L.bootstrapModules : void 0), Q(L ? L.namespaceURI : void 0), L ? L.progressiveChunkSize : void 0, L ? L.onError : void 0, Se, function() {
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
        Pt.allReady = ze, I(Pt);
      }, function(Pt) {
        ze.catch(function() {
        }), X(Pt);
      }, Ee);
      if (L && L.signal) {
        var xt = L.signal, Dt = function() {
          Gi(Xe, xt.reason), xt.removeEventListener("abort", Dt);
        };
        xt.addEventListener("abort", Dt);
      }
      Ki(Xe);
    });
  }, Au.version = "18.2.0", Au;
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
function IS() {
  return Lh || (Lh = 1, process.env.NODE_ENV !== "production" && function() {
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
        var ee = b.map(function(pe) {
          return String(pe);
        });
        ee.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, ee);
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
    var N = Object.prototype.hasOwnProperty, _ = 0, B = 1, q = 2, U = 3, ne = 4, re = 5, V = 6, Y = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = Y + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Z = new RegExp("^[" + Y + "][" + J + "]*$"), ae = {}, te = {};
    function se(o) {
      return N.call(te, o) ? !0 : N.call(ae, o) ? !1 : Z.test(o) ? (te[o] = !0, !0) : (ae[o] = !0, i("Invalid attribute name: `%s`", o), !1);
    }
    function G(o, c, b, w) {
      if (b !== null && b.type === _)
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
    function Q(o) {
      return W.hasOwnProperty(o) ? W[o] : null;
    }
    function K(o, c, b, w, M, ee, pe) {
      this.acceptsBooleans = c === q || c === U || c === ne, this.attributeName = w, this.attributeNamespace = M, this.mustUseProperty = b, this.propertyName = o, this.type = c, this.sanitizeURL = ee, this.removeEmptyString = pe;
    }
    var W = {}, Ce = [
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
    Ce.forEach(function(o) {
      W[o] = new K(
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
      var c = o[0], b = o[1];
      W[c] = new K(
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
      W[o] = new K(
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
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
      W[o] = new K(
        o,
        q,
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
      W[o] = new K(
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
      W[o] = new K(
        o,
        U,
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
      W[o] = new K(
        o,
        ne,
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
      W[o] = new K(
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
      W[o] = new K(
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
    var xe = /[\-\:]([a-z])/g, fe = function(o) {
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
      var c = o.replace(xe, fe);
      W[c] = new K(
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
      var c = o.replace(xe, fe);
      W[c] = new K(
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
      var c = o.replace(xe, fe);
      W[c] = new K(
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
      W[o] = new K(
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
    W[Re] = new K(
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
      W[o] = new K(
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
    function Ze(o, c) {
      return o + c.charAt(0).toUpperCase() + c.substring(1);
    }
    var Ae = ["Webkit", "ms", "Moz", "O"];
    Object.keys(je).forEach(function(o) {
      Ae.forEach(function(c) {
        je[Ze(c, o)] = je[o];
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
    function Fe(o, c) {
      me[c.type] || c.onChange || c.onInput || c.readOnly || c.disabled || c.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), c.onChange || c.readOnly || c.disabled || c.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ue(o, c) {
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
    var de = {
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
    }, Le = {}, ke = new RegExp("^(aria)-[" + J + "]*$"), Ie = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function qe(o, c) {
      {
        if (N.call(Le, c) && Le[c])
          return !0;
        if (Ie.test(c)) {
          var b = "aria-" + c.slice(4).toLowerCase(), w = de.hasOwnProperty(b) ? b : null;
          if (w == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", c), Le[c] = !0, !0;
          if (c !== w)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", c, w), Le[c] = !0, !0;
        }
        if (ke.test(c)) {
          var M = c.toLowerCase(), ee = de.hasOwnProperty(M) ? M : null;
          if (ee == null)
            return Le[c] = !0, !1;
          if (c !== ee)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", c, ee), Le[c] = !0, !0;
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
        var ee = b.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        b.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ee, o) : b.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ee, o);
      }
    }
    function mt(o, c) {
      ue(o, c) || Qe(o, c);
    }
    var tt = !1;
    function Ve(o, c) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        c != null && c.value === null && !tt && (tt = !0, o === "select" && c.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var _e = {
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
    }, we = function() {
    };
    {
      var Je = {}, Ge = /^on./, dt = /^on[^A-Z]/, bt = new RegExp("^(aria)-[" + J + "]*$"), yt = new RegExp("^(aria)[A-Z][" + J + "]*$");
      we = function(o, c, b, w) {
        if (N.call(Je, c) && Je[c])
          return !0;
        var M = c.toLowerCase();
        if (M === "onfocusin" || M === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Je[c] = !0, !0;
        if (w != null) {
          var ee = w.registrationNameDependencies, pe = w.possibleRegistrationNames;
          if (ee.hasOwnProperty(c))
            return !0;
          var Te = pe.hasOwnProperty(M) ? pe[M] : null;
          if (Te != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", c, Te), Je[c] = !0, !0;
          if (Ge.test(c))
            return i("Unknown event handler property `%s`. It will be ignored.", c), Je[c] = !0, !0;
        } else if (Ge.test(c))
          return dt.test(c) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", c), Je[c] = !0, !0;
        if (bt.test(c) || yt.test(c))
          return !0;
        if (M === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Je[c] = !0, !0;
        if (M === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Je[c] = !0, !0;
        if (M === "is" && b !== null && b !== void 0 && typeof b != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof b), Je[c] = !0, !0;
        if (typeof b == "number" && isNaN(b))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", c), Je[c] = !0, !0;
        var He = Q(c), rt = He !== null && He.type === _;
        if (_e.hasOwnProperty(M)) {
          var ct = _e[M];
          if (ct !== c)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", c, ct), Je[c] = !0, !0;
        } else if (!rt && c !== M)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", c, M), Je[c] = !0, !0;
        return typeof b == "boolean" && G(c, b, He, !1) ? (b ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', b, c, c, b, c) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', b, c, c, b, c, c, c), Je[c] = !0, !0) : rt ? !0 : G(c, b, He, !1) ? (Je[c] = !0, !1) : ((b === "false" || b === "true") && He !== null && He.type === U && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", b, c, b === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', c, b), Je[c] = !0), !0);
      };
    }
    var _t = function(o, c, b) {
      {
        var w = [];
        for (var M in c) {
          var ee = we(o, M, c[M], b);
          ee || w.push(M);
        }
        var pe = w.map(function(Te) {
          return "`" + Te + "`";
        }).join(", ");
        w.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, o) : w.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, o);
      }
    };
    function an(o, c, b) {
      ue(o, c) || _t(o, c, b);
    }
    var on = function() {
    };
    {
      var Xt = /^(?:webkit|moz|o)[A-Z]/, Jt = /^-ms-/, Kt = /-(.)/g, At = /;\s*$/, Mt = {}, Vt = {}, $e = !1, en = !1, wt = function(o) {
        return o.replace(Kt, function(c, b) {
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
      }, pt = function(o) {
        Mt.hasOwnProperty(o) && Mt[o] || (Mt[o] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, tn = function(o, c) {
        Vt.hasOwnProperty(c) && Vt[c] || (Vt[c] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, c.replace(At, "")));
      }, xn = function(o, c) {
        $e || ($e = !0, i("`NaN` is an invalid value for the `%s` css style property.", o));
      }, Ft = function(o, c) {
        en || (en = !0, i("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      on = function(o, c) {
        o.indexOf("-") > -1 ? zt(o) : Xt.test(o) ? pt(o) : At.test(c) && tn(o, c), typeof c == "number" && (isNaN(c) ? xn(o, c) : isFinite(c) || Ft(o, c));
      };
    }
    var nn = on, Ln = /["'&<>]/;
    function Yt(o) {
      C(o);
      var c = "" + o, b = Ln.exec(c);
      if (!b)
        return c;
      var w, M = "", ee, pe = 0;
      for (ee = b.index; ee < c.length; ee++) {
        switch (c.charCodeAt(ee)) {
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
        pe !== ee && (M += c.substring(pe, ee)), pe = ee + 1, M += w;
      }
      return pe !== ee ? M + c.substring(pe, ee) : M;
    }
    function jt(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Yt(o);
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
    var jn = "<script>", zn = "<\/script>", Un = '<script src="', Ne = '<script type="module" src="', ut = '" async=""><\/script>';
    function ft(o) {
      return C(o), ("" + o).replace($, Me);
    }
    var $ = /(<\/|<)(s)(cript)/gi, Me = function(o, c, b, w) {
      return "" + c + (b === "s" ? "\\u0073" : "\\u0053") + w;
    };
    function Ye(o, c, b, w, M) {
      var ee = o === void 0 ? "" : o, pe = c === void 0 ? jn : '<script nonce="' + jt(c) + '">', Te = [];
      if (b !== void 0 && Te.push(pe, ft(b), zn), w !== void 0)
        for (var He = 0; He < w.length; He++)
          Te.push(Un, jt(w[He]), ut);
      if (M !== void 0)
        for (var rt = 0; rt < M.length; rt++)
          Te.push(Ne, jt(M[rt]), ut);
      return {
        bootstrapChunks: Te,
        startInlineScript: pe,
        placeholderPrefix: ee + "P:",
        segmentPrefix: ee + "S:",
        boundaryPrefix: ee + "B:",
        idPrefix: ee,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Be = 0, nt = 1, at = 2, kt = 3, Lt = 4, Ke = 5, It = 6, $t = 7;
    function Bt(o, c) {
      return {
        insertionMode: o,
        selectedValue: c
      };
    }
    function gt(o, c, b) {
      switch (c) {
        case "select":
          return Bt(nt, b.value != null ? b.value : b.defaultValue);
        case "svg":
          return Bt(at, null);
        case "math":
          return Bt(kt, null);
        case "foreignObject":
          return Bt(nt, null);
        case "table":
          return Bt(Lt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Bt(Ke, null);
        case "colgroup":
          return Bt($t, null);
        case "tr":
          return Bt(It, null);
      }
      return o.insertionMode >= Lt || o.insertionMode === Be ? Bt(nt, null) : o;
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
          var ee = b[M];
          if (!(ee == null || typeof ee == "boolean" || ee === "")) {
            var pe = void 0, Te = void 0, He = M.indexOf("--") === 0;
            He ? (pe = jt(M), O(ee, M), Te = jt(("" + ee).trim())) : (nn(M, ee), pe = mn(M), typeof ee == "number" ? ee !== 0 && !N.call(je, M) ? Te = ee + "px" : Te = "" + ee : (O(ee, M), Te = jt(("" + ee).trim()))), w ? (w = !1, o.push(cn, pe, En, Te)) : o.push(qn, pe, En, Te);
          }
        }
      w || o.push(j);
    }
    var A = " ", z = '="', j = '"', be = '=""';
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
        var M = Q(b);
        if (M !== null) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!M.acceptsBooleans)
                return;
          }
          var ee = M.attributeName, pe = ee;
          switch (M.type) {
            case U:
              w && o.push(A, pe, be);
              return;
            case ne:
              w === !0 ? o.push(A, pe, be) : w === !1 || o.push(A, pe, z, jt(w), j);
              return;
            case re:
              isNaN(w) || o.push(A, pe, z, jt(w), j);
              break;
            case V:
              !isNaN(w) && w >= 1 && o.push(A, pe, z, jt(w), j);
              break;
            default:
              M.sanitizeURL && (P(w, ee), w = "" + w, Vn(w)), o.push(A, pe, z, jt(w), j);
          }
        } else if (se(b)) {
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
          o.push(A, b, z, jt(w), j);
        }
      }
    }
    var De = ">", Ue = "/>";
    function ot(o, c, b) {
      if (c != null) {
        if (b != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var w = c.__html;
        w != null && (C(w), o.push("" + w));
      }
    }
    var ht = !1, oe = !1, le = !1, ye = !1, Oe = !1, vt = !1, gn = !1;
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
      Fe("select", c), kn(c, "value"), kn(c, "defaultValue"), c.value !== void 0 && c.defaultValue !== void 0 && !le && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), le = !0), o.push(Kn("select"));
      var w = null, M = null;
      for (var ee in c)
        if (N.call(c, ee)) {
          var pe = c[ee];
          if (pe == null)
            continue;
          switch (ee) {
            case "children":
              w = pe;
              break;
            case "dangerouslySetInnerHTML":
              M = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ve(o, b, ee, pe);
              break;
          }
        }
      return o.push(De), ot(o, M, w), w;
    }
    function In(o) {
      var c = "";
      return e.Children.forEach(o, function(b) {
        b != null && (c += b, !Oe && typeof b != "string" && typeof b != "number" && (Oe = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), c;
    }
    var wr = ' selected=""';
    function fr(o, c, b, w) {
      var M = w.selectedValue;
      o.push(Kn("option"));
      var ee = null, pe = null, Te = null, He = null;
      for (var rt in c)
        if (N.call(c, rt)) {
          var ct = c[rt];
          if (ct == null)
            continue;
          switch (rt) {
            case "children":
              ee = ct;
              break;
            case "selected":
              Te = ct, gn || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), gn = !0);
              break;
            case "dangerouslySetInnerHTML":
              He = ct;
              break;
            case "value":
              pe = ct;
            default:
              ve(o, b, rt, ct);
              break;
          }
        }
      if (M != null) {
        var Tt;
        if (pe !== null ? (P(pe, "value"), Tt = "" + pe) : (He !== null && (vt || (vt = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Tt = In(ee)), Sn(M))
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
        Te && o.push(wr);
      return o.push(De), ot(o, He, ee), ee;
    }
    function qr(o, c, b) {
      Fe("input", c), c.checked !== void 0 && c.defaultChecked !== void 0 && !oe && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), oe = !0), c.value !== void 0 && c.defaultValue !== void 0 && !ht && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), ht = !0), o.push(Kn("input"));
      var w = null, M = null, ee = null, pe = null;
      for (var Te in c)
        if (N.call(c, Te)) {
          var He = c[Te];
          if (He == null)
            continue;
          switch (Te) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              pe = He;
              break;
            case "defaultValue":
              M = He;
              break;
            case "checked":
              ee = He;
              break;
            case "value":
              w = He;
              break;
            default:
              ve(o, b, Te, He);
              break;
          }
        }
      return ee !== null ? ve(o, b, "checked", ee) : pe !== null && ve(o, b, "checked", pe), w !== null ? ve(o, b, "value", w) : M !== null && ve(o, b, "value", M), o.push(Ue), null;
    }
    function Qo(o, c, b) {
      Fe("textarea", c), c.value !== void 0 && c.defaultValue !== void 0 && !ye && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ye = !0), o.push(Kn("textarea"));
      var w = null, M = null, ee = null;
      for (var pe in c)
        if (N.call(c, pe)) {
          var Te = c[pe];
          if (Te == null)
            continue;
          switch (pe) {
            case "children":
              ee = Te;
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
              ve(o, b, pe, Te);
              break;
          }
        }
      if (w === null && M !== null && (w = M), o.push(De), ee != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), w != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Sn(ee)) {
          if (ee.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          C(ee[0]), w = "" + ee[0];
        }
        C(ee), w = "" + ee;
      }
      return typeof w == "string" && w[0] === `
` && o.push(Gr), w !== null && (P(w, "value"), o.push(Gt("" + w))), null;
    }
    function Jo(o, c, b, w) {
      o.push(Kn(b));
      for (var M in c)
        if (N.call(c, M)) {
          var ee = c[M];
          if (ee == null)
            continue;
          switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ve(o, w, M, ee);
              break;
          }
        }
      return o.push(Ue), null;
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
      return o.push(De), null;
    }
    function el(o, c, b) {
      o.push(Kn("title"));
      var w = null;
      for (var M in c)
        if (N.call(c, M)) {
          var ee = c[M];
          if (ee == null)
            continue;
          switch (M) {
            case "children":
              w = ee;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ve(o, b, M, ee);
              break;
          }
        }
      o.push(De);
      {
        var pe = Array.isArray(w) && w.length < 2 ? w[0] || null : w;
        Array.isArray(w) && w.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return w;
    }
    function Ha(o, c, b, w) {
      o.push(Kn(b));
      var M = null, ee = null;
      for (var pe in c)
        if (N.call(c, pe)) {
          var Te = c[pe];
          if (Te == null)
            continue;
          switch (pe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              ee = Te;
              break;
            default:
              ve(o, w, pe, Te);
              break;
          }
        }
      return o.push(De), ot(o, ee, M), typeof M == "string" ? (o.push(Gt(M)), null) : M;
    }
    function pr(o, c, b, w) {
      o.push(Kn(b));
      var M = null, ee = null;
      for (var pe in c)
        if (N.call(c, pe)) {
          var Te = c[pe];
          if (Te == null)
            continue;
          switch (pe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              ee = Te;
              break;
            case "style":
              g(o, w, Te);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              se(pe) && typeof Te != "function" && typeof Te != "symbol" && o.push(A, pe, z, jt(Te), j);
              break;
          }
        }
      return o.push(De), ot(o, ee, M), M;
    }
    var Gr = `
`;
    function da(o, c, b, w) {
      o.push(Kn(b));
      var M = null, ee = null;
      for (var pe in c)
        if (N.call(c, pe)) {
          var Te = c[pe];
          if (Te == null)
            continue;
          switch (pe) {
            case "children":
              M = Te;
              break;
            case "dangerouslySetInnerHTML":
              ee = Te;
              break;
            default:
              ve(o, w, pe, Te);
              break;
          }
        }
      if (o.push(De), ee != null) {
        if (M != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ee != "object" || !("__html" in ee))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var He = ee.__html;
        He != null && (typeof He == "string" && He.length > 0 && He[0] === `
` ? o.push(Gr, He) : (C(He), o.push("" + He)));
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
      switch (mt(c, b), Ve(c, b), an(c, b, null), !b.suppressContentEditableWarning && b.contentEditable && b.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), M.insertionMode !== at && M.insertionMode !== kt && c.indexOf("-") === -1 && typeof b.is != "string" && c.toLowerCase() !== c && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", c), c) {
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
          return M.insertionMode === Be && o.push(Tr), Ha(o, b, c, w);
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
      var ee;
      return ee = m(o, pa), u(o, ma), b && (u(o, rl), u(o, jt(b)), u(o, Zr)), w && (u(o, Qr), u(o, jt(w)), u(o, Zr)), M && (u(o, ja), u(o, jt(M)), u(o, Zr)), ee = m(o, Ua), ee;
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
    var ga = '<div hidden id="', Yn = '">', Vi = "</div>", va = '<svg aria-hidden="true" style="display:none" id="', al = '">', ji = "</svg>", xa = '<math aria-hidden="true" style="display:none" id="', Ui = '">', Ki = "</math>", ba = '<table hidden id="', Sa = '">', Yi = "</table>", Xi = '<table hidden><tbody id="', qi = '">', Ya = "</tbody></table>", Gi = '<table hidden><tr id="', v = '">', L = "</tr></table>", I = '<table hidden><colgroup id="', X = '">', Ee = "</colgroup></table>";
    function Se(o, c, b, w) {
      switch (b.insertionMode) {
        case Be:
        case nt:
          return u(o, ga), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Yn);
        case at:
          return u(o, va), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, al);
        case kt:
          return u(o, xa), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Ui);
        case Lt:
          return u(o, ba), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, Sa);
        case Ke:
          return u(o, Xi), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, qi);
        case It:
          return u(o, Gi), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, v);
        case $t:
          return u(o, I), u(o, c.segmentPrefix), u(o, w.toString(16)), m(o, X);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ze(o, c) {
      switch (c.insertionMode) {
        case Be:
        case nt:
          return m(o, Vi);
        case at:
          return m(o, ji);
        case kt:
          return m(o, Ki);
        case Lt:
          return m(o, Yi);
        case Ke:
          return m(o, Ya);
        case It:
          return m(o, L);
        case $t:
          return m(o, Ee);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xe = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", xt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pt = Xe + ';$RS("', sn = '$RS("', Xn = '","', Jn = '")<\/script>';
    function er(o, c, b) {
      u(o, c.startInlineScript), c.sentCompleteSegmentFunction ? u(o, sn) : (c.sentCompleteSegmentFunction = !0, u(o, Pt)), u(o, c.segmentPrefix);
      var w = b.toString(16);
      return u(o, w), u(o, Xn), u(o, c.placeholderPrefix), u(o, w), m(o, Jn);
    }
    var Ea = xt + ';$RC("', Zi = '$RC("', Xa = '","', Rc = '")<\/script>';
    function Dc(o, c, b, w) {
      if (u(o, c.startInlineScript), c.sentCompleteBoundaryFunction ? u(o, Zi) : (c.sentCompleteBoundaryFunction = !0, u(o, Ea)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var M = w.toString(16);
      return u(o, b), u(o, Xa), u(o, c.segmentPrefix), u(o, M), m(o, Rc);
    }
    var _c = Dt + ';$RX("', Nc = '$RX("', Oc = '"', Fc = ")<\/script>", il = ",";
    function Mc(o, c, b, w, M, ee) {
      if (u(o, c.startInlineScript), c.sentClientRenderFunction ? u(o, Nc) : (c.sentClientRenderFunction = !0, u(o, _c)), b === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return u(o, b), u(o, Oc), (w || M || ee) && (u(o, il), u(o, ol(w || ""))), (M || ee) && (u(o, il), u(o, ol(M || ""))), ee && (u(o, il), u(o, ol(ee))), m(o, Fc);
    }
    var zc = /[<\u2028\u2029]/g;
    function ol(o) {
      var c = JSON.stringify(o);
      return c.replace(zc, function(b) {
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
    function Ic(o, c) {
      var b = Ye(c, void 0);
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
    function Cs(o, c, b, w) {
      return b.generateStaticMarkup ? (o.push(jt(c)), !1) : Nn(o, c, b, w);
    }
    function As(o, c, b, w) {
      if (!c.generateStaticMarkup)
        return hn(o, c, b, w);
    }
    function sl(o, c) {
      return c.generateStaticMarkup ? !0 : Fr(o);
    }
    function or(o, c, b, w, M) {
      return c.generateStaticMarkup ? !0 : ya(o, c, b, w, M);
    }
    function $c(o, c) {
      return c.generateStaticMarkup ? !0 : Hi(o);
    }
    function Ls(o, c) {
      return c.generateStaticMarkup ? !0 : Wi(o);
    }
    var tr = Object.assign, Ps = Symbol.for("react.element"), ul = Symbol.for("react.portal"), Qi = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), qa = Symbol.for("react.provider"), Ga = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), ka = Symbol.for("react.suspense"), cl = Symbol.for("react.suspense_list"), dl = Symbol.for("react.memo"), to = Symbol.for("react.lazy"), Bc = Symbol.for("react.scope"), Rs = Symbol.for("react.debug_trace_mode"), Hc = Symbol.for("react.legacy_hidden"), Wc = Symbol.for("react.default_value"), Ds = Symbol.iterator, _s = "@@iterator";
    function vn(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = Ds && o[Ds] || o[_s];
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
            var M = o, ee = M._payload, pe = M._init;
            try {
              return yn(pe(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var wa = 0, pl, hl, ml, yl, gl, Ns, Os;
    function no() {
    }
    no.__reactDisabledLog = !0;
    function vl() {
      {
        if (wa === 0) {
          pl = console.log, hl = console.info, ml = console.warn, yl = console.error, gl = console.group, Ns = console.groupCollapsed, Os = console.groupEnd;
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
              value: Ns
            }),
            groupEnd: tr({}, o, {
              value: Os
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
      var Fs = typeof WeakMap == "function" ? WeakMap : Map;
      ro = new Fs();
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
      var ee;
      ee = ei.current, ei.current = null, vl();
      try {
        if (c) {
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
            } catch (cr) {
              w = cr;
            }
            Reflect.construct(o, [], pe);
          } else {
            try {
              pe.call();
            } catch (cr) {
              w = cr;
            }
            o.call(pe.prototype);
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
`), rt = Te.length - 1, ct = He.length - 1; rt >= 1 && ct >= 0 && Te[rt] !== He[ct]; )
            ct--;
          for (; rt >= 1 && ct >= 0; rt--, ct--)
            if (Te[rt] !== He[ct]) {
              if (rt !== 1 || ct !== 1)
                do
                  if (rt--, ct--, ct < 0 || Te[rt] !== He[ct]) {
                    var Tt = `
` + Te[rt].replace(" at new ", " at ");
                    return o.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", o.displayName)), typeof o == "function" && ro.set(o, Tt), Tt;
                  }
                while (rt >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        ni = !1, ei.current = ee, Ja(), Error.prepareStackTrace = M;
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
    function Ms(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ca(o, c, b) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return xl(o, Ms(o));
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
            var w = o, M = w._payload, ee = w._init;
            try {
              return Ca(ee(M), c, b);
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
        var ee = Function.call.bind(N);
        for (var pe in o)
          if (ee(o, pe)) {
            var Te = void 0;
            try {
              if (typeof o[pe] != "function") {
                var He = Error((w || "React class") + ": " + b + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Te = o[pe](c, pe, w, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Te = rt;
            }
            Te && !(Te instanceof Error) && (Jr(M), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", b, pe, typeof Te), Jr(null)), Te instanceof Error && !(Te.message in El) && (El[Te.message] = !0, Jr(M), i("Failed %s type: %s", b, Te.message), Jr(null));
          }
      }
    }
    var wl;
    wl = {};
    var zr = {};
    Object.freeze(zr);
    function zs(o, c) {
      {
        var b = o.contextTypes;
        if (!b)
          return zr;
        var w = {};
        for (var M in b)
          w[M] = c[M];
        {
          var ee = yn(o) || "Unknown";
          kl(b, w, "context", ee);
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
        var ee = o.getChildContext();
        for (var pe in ee)
          if (!(pe in w))
            throw new Error((yn(c) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var Te = yn(c) || "Unknown";
          kl(w, ee, "child context", Te);
        }
        return tr({}, b, ee);
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
    function Is(o, c) {
      io(o);
      var b = o.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      b.depth === c.depth ? ri(b, c) : Is(b, c);
    }
    function $s(o, c) {
      var b = c.parent;
      if (b === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === b.depth ? ri(o, b) : $s(o, b), oo(c);
    }
    function lo(o) {
      var c = vr, b = o;
      c !== b && (c === null ? ai(b) : b === null ? Cl(c) : c.depth === b.depth ? ri(c, b) : c.depth > b.depth ? Is(c, b) : $s(c, b), vr = b);
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
        b === Wc ? c.context._currentValue2 = c.context._defaultValue : c.context._currentValue2 = b, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ta && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ta;
      }
      return vr = c.parent;
    }
    function Vc() {
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
      var Bs = /* @__PURE__ */ new Set();
      Pa = function(o, c) {
        if (!(o === null || typeof o == "function")) {
          var b = c + "_" + o;
          Bs.has(b) || (Bs.add(b), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c, o));
        }
      }, po = function(o, c) {
        if (c === void 0) {
          var b = yn(o) || "Component";
          li.has(b) || (li.add(b), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", b));
        }
      };
    }
    function Hs(o, c) {
      {
        var b = o.constructor, w = b && yn(b) || "ReactClass", M = w + "." + c;
        if (uo[M])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, c, c, w), uo[M] = !0;
      }
    }
    var Ws = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, c, b) {
        var w = so(o);
        w.queue === null ? Hs(o, "setState") : (w.queue.push(c), b != null && Pa(b, "setState"));
      },
      enqueueReplaceState: function(o, c, b) {
        var w = so(o);
        w.replace = !0, w.queue = [c], b != null && Pa(b, "setState");
      },
      enqueueForceUpdate: function(o, c) {
        var b = so(o);
        b.queue === null ? Hs(o, "forceUpdate") : c != null && Pa(c, "setState");
      }
    };
    function jc(o, c, b, w, M) {
      var ee = b(M, w);
      po(c, ee);
      var pe = ee == null ? w : tr({}, w, ee);
      return pe;
    }
    function Uc(o, c, b) {
      var w = zr, M = o.contextType;
      if ("contextType" in o) {
        var ee = (
          // Allow null for conditional declaration
          M === null || M !== void 0 && M.$$typeof === Ga && M._context === void 0
        );
        if (!ee && !yo.has(o)) {
          yo.add(o);
          var pe = "";
          M === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof M != "object" ? pe = " However, it is set to a " + typeof M + "." : M.$$typeof === qa ? pe = " Did you accidentally pass the Context.Provider instead?" : M._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(M).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yn(o) || "Component", pe);
        }
      }
      typeof M == "object" && M !== null ? w = Aa(M) : w = b;
      var Te = new o(c, w);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (Te.state === null || Te.state === void 0)) {
          var He = yn(o) || "Component";
          oi.has(He) || (oi.add(He), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", He, Te.state === null ? "null" : "undefined", He));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof Te.getSnapshotBeforeUpdate == "function") {
          var rt = null, ct = null, Tt = null;
          if (typeof Te.componentWillMount == "function" && Te.componentWillMount.__suppressDeprecationWarning !== !0 ? rt = "componentWillMount" : typeof Te.UNSAFE_componentWillMount == "function" && (rt = "UNSAFE_componentWillMount"), typeof Te.componentWillReceiveProps == "function" && Te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ct = "componentWillReceiveProps" : typeof Te.UNSAFE_componentWillReceiveProps == "function" && (ct = "UNSAFE_componentWillReceiveProps"), typeof Te.componentWillUpdate == "function" && Te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Tt = "componentWillUpdate" : typeof Te.UNSAFE_componentWillUpdate == "function" && (Tt = "UNSAFE_componentWillUpdate"), rt !== null || ct !== null || Tt !== null) {
            var dn = yn(o) || "Component", Fn = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(dn) || (La.add(dn), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, dn, Fn, rt !== null ? `
  ` + rt : "", ct !== null ? `
  ` + ct : "", Tt !== null ? `
  ` + Tt : ""));
          }
        }
      }
      return Te;
    }
    function Vs(o, c, b) {
      {
        var w = yn(c) || "Component", M = o.render;
        M || (c.prototype && typeof c.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", w) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", w)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", w), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", w), o.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", w), o.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", w), o.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", w), c.contextType && c.contextTypes && !mo.has(c) && (mo.add(c), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", w)), typeof o.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", w), c.prototype && c.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yn(c) || "A pure component"), typeof o.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", w), typeof o.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", w), typeof o.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", w), typeof o.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", w);
        var ee = o.props !== b;
        o.props !== void 0 && ee && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", w, w), o.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", w, w), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !fo.has(c) && (fo.add(c), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yn(c))), typeof o.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof o.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof c.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", w);
        var pe = o.state;
        pe && (typeof pe != "object" || Sn(pe)) && i("%s.state: must be set to an object or null", w), typeof o.getChildContext == "function" && typeof c.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", w);
      }
    }
    function Kc(o, c) {
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
      typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), b !== c.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yn(o) || "Component"), Ws.enqueueReplaceState(c, c.state, null));
    }
    function Yc(o, c, b, w) {
      if (o.queue !== null && o.queue.length > 0) {
        var M = o.queue, ee = o.replace;
        if (o.queue = null, o.replace = !1, ee && M.length === 1)
          c.state = M[0];
        else {
          for (var pe = ee ? M[0] : c.state, Te = !0, He = ee ? 1 : 0; He < M.length; He++) {
            var rt = M[He], ct = typeof rt == "function" ? rt.call(c, pe, b, w) : rt;
            ct != null && (Te ? (Te = !1, pe = tr({}, pe, ct)) : tr(pe, ct));
          }
          c.state = pe;
        }
      } else
        o.queue = null;
    }
    function go(o, c, b, w) {
      Vs(o, c, b);
      var M = o.state !== void 0 ? o.state : null;
      o.updater = Ws, o.props = b, o.state = M;
      var ee = {
        queue: [],
        replace: !1
      };
      Ll(o, ee);
      var pe = c.contextType;
      if (typeof pe == "object" && pe !== null ? o.context = Aa(pe) : o.context = w, o.state === b) {
        var Te = yn(c) || "Component";
        ho.has(Te) || (ho.add(Te), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Te));
      }
      var He = c.getDerivedStateFromProps;
      typeof He == "function" && (o.state = jc(o, c, He, M, b)), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Kc(c, o), Yc(ee, o, b, w));
    }
    var vo = {
      id: 1,
      overflow: ""
    };
    function Xc(o) {
      var c = o.overflow, b = o.id, w = b & ~qc(b);
      return w.toString(32) + c;
    }
    function Pl(o, c, b) {
      var w = o.id, M = o.overflow, ee = xo(w) - 1, pe = w & ~(1 << ee), Te = b + 1, He = xo(c) + ee;
      if (He > 30) {
        var rt = ee - ee % 5, ct = (1 << rt) - 1, Tt = (pe & ct).toString(32), dn = pe >> rt, Fn = ee - rt, cr = xo(c) + Fn, du = Te << Fn, fu = du | dn, pu = Tt + M;
        return {
          id: 1 << cr | fu,
          overflow: pu
        };
      } else {
        var Fo = Te << ee, Ly = Fo | pe, Py = M;
        return {
          id: 1 << He | Ly,
          overflow: Py
        };
      }
    }
    function xo(o) {
      return 32 - Gc(o);
    }
    function qc(o) {
      return 1 << xo(o) - 1;
    }
    var Gc = Math.clz32 ? Math.clz32 : Cr, Zc = Math.log, Qc = Math.LN2;
    function Cr(o) {
      var c = o >>> 0;
      return c === 0 ? 32 : 31 - (Zc(c) / Qc | 0) | 0;
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
    function Jc(o, c) {
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
    function js() {
      if (Ar > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Eo() {
      return Qt === null ? ra === null ? (lr = !1, ra = Qt = js()) : (lr = !0, Qt = ra) : Qt.next === null ? (lr = !1, Qt = Qt.next = js()) : (lr = !0, Qt = Qt.next), Qt;
    }
    function Dl(o, c) {
      Ht = c, na = o, xr = !1, So = 0;
    }
    function ed(o, c, b, w) {
      for (; aa; )
        aa = !1, So = 0, Ar += 1, Qt = null, b = o(c, w);
      return si(), b;
    }
    function Us() {
      var o = So !== 0;
      return o;
    }
    function si() {
      xr = !1, Ht = null, na = null, aa = !1, ra = null, Ar = 0, On = null, Qt = null;
    }
    function td(o) {
      return xr && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Aa(o);
    }
    function Ks(o) {
      return oa = "useContext", Lr(), Aa(o);
    }
    function ko(o, c) {
      return typeof c == "function" ? c(o) : c;
    }
    function nd(o) {
      return oa = "useState", Ys(
        ko,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Ys(o, c, b) {
      if (o !== ko && (oa = "useReducer"), Ht = Lr(), Qt = Eo(), lr) {
        var w = Qt.queue, M = w.dispatch;
        if (On !== null) {
          var ee = On.get(w);
          if (ee !== void 0) {
            On.delete(w);
            var pe = Qt.memoizedState, Te = ee;
            do {
              var He = Te.action;
              xr = !0, pe = o(pe, He), xr = !1, Te = Te.next;
            } while (Te !== null);
            return Qt.memoizedState = pe, [pe, M];
          }
        }
        return [Qt.memoizedState, M];
      } else {
        xr = !0;
        var rt;
        o === ko ? rt = typeof c == "function" ? c() : c : rt = b !== void 0 ? b(c) : c, xr = !1, Qt.memoizedState = rt;
        var ct = Qt.queue = {
          last: null,
          dispatch: null
        }, Tt = ct.dispatch = id.bind(null, Ht, ct);
        return [Qt.memoizedState, Tt];
      }
    }
    function Xs(o, c) {
      Ht = Lr(), Qt = Eo();
      var b = c === void 0 ? null : c;
      if (Qt !== null) {
        var w = Qt.memoizedState;
        if (w !== null && b !== null) {
          var M = w[1];
          if (Jc(b, M))
            return w[0];
        }
      }
      xr = !0;
      var ee = o();
      return xr = !1, Qt.memoizedState = [ee, b], ee;
    }
    function rd(o) {
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
    function ad(o, c) {
      oa = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function id(o, c, b) {
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
          for (var ee = M; ee.next !== null; )
            ee = ee.next;
          ee.next = w;
        }
      }
    }
    function od(o, c) {
      return Xs(function() {
        return o;
      }, c);
    }
    function ld(o, c, b) {
      return Lr(), c(o._source);
    }
    function sd(o, c, b) {
      if (b === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return b();
    }
    function ud(o) {
      return Lr(), o;
    }
    function wo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function qs() {
      return Lr(), [!1, wo];
    }
    function _l() {
      var o = na, c = Xc(o.treeContext), b = ci;
      if (b === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var w = So++;
      return Ot(b, c, w);
    }
    function ui() {
    }
    var Gs = {
      readContext: td,
      useContext: Ks,
      useMemo: Xs,
      useReducer: Ys,
      useRef: rd,
      useState: nd,
      useInsertionEffect: ui,
      useLayoutEffect: ad,
      useCallback: od,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ui,
      // Effects are not run in the server environment.
      useEffect: ui,
      // Debugging effect
      useDebugValue: ui,
      useDeferredValue: ud,
      useTransition: qs,
      useId: _l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ld,
      useSyncExternalStore: sd
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
    var Ir = n.ReactCurrentDispatcher, Co = n.ReactDebugCurrentFrame, Ao = 0, la = 1, Zs = 2, Ol = 3, sa = 4, cd = 0, Qs = 1, br = 2, dd = 12800;
    function fd(o) {
      return console.error(o), null;
    }
    function di() {
    }
    function Fl(o, c, b, w, M, ee, pe, Te, He) {
      var rt = [], ct = /* @__PURE__ */ new Set(), Tt = {
        destination: null,
        responseState: c,
        progressiveChunkSize: w === void 0 ? dd : w,
        status: cd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ct,
        pingedTasks: rt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: M === void 0 ? fd : M,
        onAllReady: ee === void 0 ? di : ee,
        onShellReady: pe === void 0 ? di : pe,
        onShellError: Te === void 0 ? di : Te,
        onFatalError: He === void 0 ? di : He
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
      var Fn = fi(Tt, o, null, dn, ct, zr, Tl, vo);
      return rt.push(Fn), Tt;
    }
    function Lo(o, c) {
      var b = o.pingedTasks;
      b.push(c), b.length === 1 && d(function() {
        return uu(o);
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
    function fi(o, c, b, w, M, ee, pe, Te) {
      o.allPendingTasks++, b === null ? o.pendingRootTasks++ : b.pendingTasks++;
      var He = {
        node: c,
        ping: function() {
          return Lo(o, He);
        },
        blockedBoundary: b,
        blockedSegment: w,
        abortSet: M,
        legacyContext: ee,
        context: pe,
        treeContext: Te
      };
      return He.componentStack = null, M.add(He), He;
    }
    function $r(o, c, b, w, M, ee) {
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
        textEmbedded: ee
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
      w(c), o.destination !== null ? (o.status = br, T(o.destination, c)) : (o.status = Qs, o.fatalError = c);
    }
    function Js(o, c, b) {
      sr(c, "Suspense");
      var w = c.blockedBoundary, M = c.blockedSegment, ee = b.fallback, pe = b.children, Te = /* @__PURE__ */ new Set(), He = Pr(o, Te), rt = M.chunks.length, ct = $r(
        o,
        rt,
        He,
        M.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      M.children.push(ct), M.lastPushedText = !1;
      var Tt = $r(
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
        if (Ro(o, c, pe), As(Tt.chunks, o.responseState, Tt.lastPushedText, Tt.textEmbedded), Tt.status = la, yi(He, Tt), He.pendingTasks === 0) {
          ur(c);
          return;
        }
      } catch (Fn) {
        Tt.status = sa, He.forceClientRender = !0, He.errorDigest = pi(o, Fn), Il(He, Fn);
      } finally {
        c.blockedBoundary = w, c.blockedSegment = M;
      }
      var dn = fi(o, ee, w, ct, Te, c.legacyContext, c.context, c.treeContext);
      dn.componentStack = c.componentStack, o.pingedTasks.push(dn), ur(c);
    }
    function eu(o, c, b, w) {
      sr(c, b);
      var M = c.blockedSegment, ee = yr(M.chunks, b, w, o.responseState, M.formatContext);
      M.lastPushedText = !1;
      var pe = M.formatContext;
      M.formatContext = gt(pe, b, w), Ro(o, c, ee), M.formatContext = pe, Qn(M.chunks, b), M.lastPushedText = !1, ur(c);
    }
    function pd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function $l(o, c, b, w, M) {
      var ee = {};
      Dl(c, ee);
      var pe = b(w, M);
      return ed(b, w, pe, M);
    }
    function hi(o, c, b, w, M) {
      var ee = b.render();
      b.props !== M && (Vl || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yn(w) || "a component"), Vl = !0);
      {
        var pe = w.childContextTypes;
        if (pe != null) {
          var Te = c.legacyContext, He = ea(b, w, Te, pe);
          c.legacyContext = He, rr(o, c, ee), c.legacyContext = Te;
          return;
        }
      }
      rr(o, c, ee);
    }
    function tu(o, c, b, w) {
      zl(c, b);
      var M = zs(b, c.legacyContext), ee = Uc(b, w, M);
      go(ee, b, w, M), hi(o, c, ee, b, w), ur(c);
    }
    var Bl = {}, mi = {}, Hl = {}, Wl = {}, Vl = !1, nu = !1, ru = !1, jl = !1;
    function hd(o, c, b, w) {
      var M;
      if (M = zs(b, c.legacyContext), Ra(c, b), b.prototype && typeof b.prototype.render == "function") {
        var ee = yn(b) || "Unknown";
        Bl[ee] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ee, ee), Bl[ee] = !0);
      }
      var pe = $l(o, c, b, w, M), Te = Us();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var He = yn(b) || "Unknown";
        mi[He] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", He, He, He), mi[He] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var rt = yn(b) || "Unknown";
          mi[rt] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", rt, rt, rt), mi[rt] = !0);
        }
        go(pe, b, w, M), hi(o, c, pe, b, w);
      } else if (md(b), Te) {
        var ct = c.treeContext, Tt = 1, dn = 0;
        c.treeContext = Pl(ct, Tt, dn);
        try {
          rr(o, c, pe);
        } finally {
          c.treeContext = ct;
        }
      } else
        rr(o, c, pe);
      ur(c);
    }
    function md(o) {
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
    function au(o, c) {
      if (o && o.defaultProps) {
        var b = tr({}, c), w = o.defaultProps;
        for (var M in w)
          b[M] === void 0 && (b[M] = w[M]);
        return b;
      }
      return c;
    }
    function yd(o, c, b, w, M) {
      Ra(c, b.render);
      var ee = $l(o, c, b.render, w, M), pe = Us();
      if (pe) {
        var Te = c.treeContext, He = 1, rt = 0;
        c.treeContext = Pl(Te, He, rt);
        try {
          rr(o, c, ee);
        } finally {
          c.treeContext = Te;
        }
      } else
        rr(o, c, ee);
      ur(c);
    }
    function gd(o, c, b, w, M) {
      var ee = b.type, pe = au(ee, w);
      Kl(o, c, ee, pe, M);
    }
    function Ul(o, c, b, w) {
      b._context === void 0 ? b !== b.Consumer && (jl || (jl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : b = b._context;
      var M = w.children;
      typeof M != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ee = Aa(b), pe = M(ee);
      rr(o, c, pe);
    }
    function vd(o, c, b, w) {
      var M = b._context, ee = w.value, pe = w.children, Te;
      Te = c.context, c.context = ii(M, ee), rr(o, c, pe), c.context = Al(M), Te !== c.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(o, c, b, w, M) {
      sr(c, "Lazy");
      var ee = b._payload, pe = b._init, Te = pe(ee), He = au(Te, w);
      Kl(o, c, Te, He, M), ur(c);
    }
    function Kl(o, c, b, w, M) {
      if (typeof b == "function")
        if (pd(b)) {
          tu(o, c, b, w);
          return;
        } else {
          hd(o, c, b, w);
          return;
        }
      if (typeof b == "string") {
        eu(o, c, b, w);
        return;
      }
      switch (b) {
        case Hc:
        case Rs:
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
        case Bc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ka: {
          Js(o, c, w);
          return;
        }
      }
      if (typeof b == "object" && b !== null)
        switch (b.$$typeof) {
          case Za: {
            yd(o, c, b, w, M);
            return;
          }
          case dl: {
            gd(o, c, b, w, M);
            return;
          }
          case qa: {
            vd(o, c, b, w);
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
      var ee = "";
      throw (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (b == null ? b : typeof b) + "." + ee));
    }
    function iu(o, c) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (nu || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), nu = !0), o.entries === c && (ru || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ru = !0);
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
          case Ps: {
            var w = b, M = w.type, ee = w.props, pe = w.ref;
            Kl(o, c, M, ee, pe);
            return;
          }
          case ul:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case to: {
            var Te = b, He = Te._payload, rt = Te._init, ct;
            try {
              ct = rt(He);
            } catch (Fo) {
              throw typeof Fo == "object" && Fo !== null && typeof Fo.then == "function" && sr(c, "Lazy"), Fo;
            }
            rr(o, c, ct);
            return;
          }
        }
        if (Sn(b)) {
          ou(o, c, b);
          return;
        }
        var Tt = vn(b);
        if (Tt) {
          iu(b, Tt);
          var dn = Tt.call(b);
          if (dn) {
            var Fn = dn.next();
            if (!Fn.done) {
              var cr = [];
              do
                cr.push(Fn.value), Fn = dn.next();
              while (!Fn.done);
              ou(o, c, cr);
              return;
            }
            return;
          }
        }
        var du = Object.prototype.toString.call(b);
        throw new Error("Objects are not valid as a React child (found: " + (du === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : du) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof b == "string") {
        var fu = c.blockedSegment;
        fu.lastPushedText = Cs(c.blockedSegment.chunks, b, o.responseState, fu.lastPushedText);
        return;
      }
      if (typeof b == "number") {
        var pu = c.blockedSegment;
        pu.lastPushedText = Cs(c.blockedSegment.chunks, "" + b, o.responseState, pu.lastPushedText);
        return;
      }
      typeof b == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ou(o, c, b) {
      for (var w = b.length, M = 0; M < w; M++) {
        var ee = c.treeContext;
        c.treeContext = Pl(ee, w, M);
        try {
          Ro(o, c, b[M]);
        } finally {
          c.treeContext = ee;
        }
      }
    }
    function xd(o, c, b) {
      var w = c.blockedSegment, M = w.chunks.length, ee = $r(
        o,
        M,
        null,
        w.formatContext,
        // Adopt the parent segment's leading text embed
        w.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      w.children.push(ee), w.lastPushedText = !1;
      var pe = fi(o, c.node, c.blockedBoundary, ee, c.abortSet, c.legacyContext, c.context, c.treeContext);
      c.componentStack !== null && (pe.componentStack = c.componentStack.parent);
      var Te = pe.ping;
      b.then(Te, Te);
    }
    function Ro(o, c, b) {
      var w = c.blockedSegment.formatContext, M = c.legacyContext, ee = c.context, pe = null;
      pe = c.componentStack;
      try {
        return rr(o, c, b);
      } catch (Te) {
        if (si(), typeof Te == "object" && Te !== null && typeof Te.then == "function") {
          xd(o, c, Te), c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = ee, lo(ee), c.componentStack = pe;
          return;
        } else
          throw c.blockedSegment.formatContext = w, c.legacyContext = M, c.context = ee, lo(ee), c.componentStack = pe, Te;
      }
    }
    function Do(o, c, b, w) {
      var M = pi(o, w);
      if (c === null ? Po(o, w) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = M, Il(c, w), c.parentFlushed && o.clientRenderedBoundaries.push(c))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var ee = o.onAllReady;
        ee();
      }
    }
    function lu(o) {
      var c = this, b = o.blockedBoundary, w = o.blockedSegment;
      w.status = Ol, gi(c, b, w);
    }
    function su(o, c, b) {
      var w = o.blockedBoundary, M = o.blockedSegment;
      if (M.status = Ol, w === null)
        c.allPendingTasks--, c.status !== br && (c.status = br, c.destination !== null && x(c.destination));
      else {
        if (w.pendingTasks--, !w.forceClientRender) {
          w.forceClientRender = !0;
          var ee = b === void 0 ? new Error("The render was aborted by the server without a reason.") : b;
          w.errorDigest = c.onError(ee);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            ee && typeof ee.message == "string" ? ee = pe + ee.message : ee = pe + String(ee);
            var Te = Sr;
            Sr = o;
            try {
              Il(w, ee);
            } finally {
              Sr = Te;
            }
          }
          w.parentFlushed && c.clientRenderedBoundaries.push(w);
        }
        if (w.fallbackAbortableTasks.forEach(function(rt) {
          return su(rt, c, b);
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
          b.parentFlushed && b.status === la && yi(c, b), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(lu, o), c.fallbackAbortableTasks.clear();
        else if (b.parentFlushed && b.status === la) {
          yi(c, b);
          var M = c.completedSegments;
          M.length === 1 && c.parentFlushed && o.partialBoundaries.push(c);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var ee = o.onAllReady;
        ee();
      }
    }
    function _o(o, c) {
      var b = c.blockedSegment;
      if (b.status === Ao) {
        lo(c.context);
        var w = null;
        w = Sr, Sr = c;
        try {
          rr(o, c, c.node), As(b.chunks, o.responseState, b.lastPushedText, b.textEmbedded), c.abortSet.delete(c), b.status = la, gi(o, c.blockedBoundary, b);
        } catch (ee) {
          if (si(), typeof ee == "object" && ee !== null && typeof ee.then == "function") {
            var M = c.ping;
            ee.then(M, M);
          } else
            c.abortSet.delete(c), b.status = sa, Do(o, c.blockedBoundary, b, ee);
        } finally {
          Sr = w;
        }
      }
    }
    function uu(o) {
      if (o.status !== br) {
        var c = Vc(), b = Ir.current;
        Ir.current = Gs;
        var w;
        w = Co.getCurrentStack, Co.getCurrentStack = Ml;
        var M = ci;
        To(o.responseState);
        try {
          var ee = o.pingedTasks, pe;
          for (pe = 0; pe < ee.length; pe++) {
            var Te = ee[pe];
            _o(o, Te);
          }
          ee.splice(0, pe), o.destination !== null && Oo(o, o.destination);
        } catch (He) {
          pi(o, He), Po(o, He);
        } finally {
          To(M), Ir.current = b, Co.getCurrentStack = w, b === Gs && lo(c);
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
          b.status = Zs;
          for (var M = !0, ee = b.chunks, pe = 0, Te = b.children, He = 0; He < Te.length; He++) {
            for (var rt = Te[He]; pe < rt.index; pe++)
              u(c, ee[pe]);
            M = xi(o, c, rt);
          }
          for (; pe < ee.length - 1; pe++)
            u(c, ee[pe]);
          return pe < ee.length && (M = m(c, ee[pe])), M;
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
        return or(c, o.responseState, w.errorDigest, w.errorMessage, w.errorComponentStack), vi(o, c, b), Ls(c, o.responseState);
      if (w.pendingTasks > 0) {
        w.rootSegmentID = o.nextSegmentId++, w.completedSegments.length > 0 && o.partialBoundaries.push(w);
        var M = w.id = Nt(o.responseState);
        return Mr(c, o.responseState, M), vi(o, c, b), Ka(c, o.responseState);
      } else {
        if (w.byteSize > o.progressiveChunkSize)
          return w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), Mr(c, o.responseState, w.id), vi(o, c, b), Ka(c, o.responseState);
        sl(c, o.responseState);
        var ee = w.completedSegments;
        if (ee.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = ee[0];
        return xi(o, c, pe), $c(c, o.responseState);
      }
    }
    function bd(o, c, b) {
      return Mc(c, o.responseState, b.id, b.errorDigest, b.errorMessage, b.errorComponentStack);
    }
    function Xl(o, c, b) {
      return Se(c, o.responseState, b.formatContext, b.id), xi(o, c, b), ze(c, b.formatContext);
    }
    function No(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var ee = w[M];
        cu(o, c, b, ee);
      }
      return w.length = 0, Dc(c, o.responseState, b.id, b.rootSegmentID);
    }
    function Sd(o, c, b) {
      for (var w = b.completedSegments, M = 0; M < w.length; M++) {
        var ee = w[M];
        if (!cu(o, c, b, ee))
          return M++, w.splice(0, M), !1;
      }
      return w.splice(0, M), !0;
    }
    function cu(o, c, b, w) {
      if (w.status === Zs)
        return !0;
      var M = w.id;
      if (M === -1) {
        var ee = w.id = b.rootSegmentID;
        if (ee === -1)
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
          var ee = w[M];
          if (!bd(o, c, ee)) {
            o.destination = null, M++, w.splice(0, M);
            return;
          }
        }
        w.splice(0, M);
        var pe = o.completedBoundaries;
        for (M = 0; M < pe.length; M++) {
          var Te = pe[M];
          if (!No(o, c, Te)) {
            o.destination = null, M++, pe.splice(0, M);
            return;
          }
        }
        pe.splice(0, M);
        var He = o.partialBoundaries;
        for (M = 0; M < He.length; M++) {
          var rt = He[M];
          if (!Sd(o, c, rt)) {
            o.destination = null, M++, He.splice(0, M);
            return;
          }
        }
        He.splice(0, M);
        var ct = o.completedBoundaries;
        for (M = 0; M < ct.length; M++) {
          var Tt = ct[M];
          if (!No(o, c, Tt)) {
            o.destination = null, M++, ct.splice(0, M);
            return;
          }
        }
        ct.splice(0, M);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), x(c));
      }
    }
    function Ed(o) {
      d(function() {
        return uu(o);
      });
    }
    function s(o, c) {
      if (o.status === Qs) {
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
          return su(w, o, c);
        }), b.clear(), o.destination !== null && Oo(o, o.destination);
      } catch (w) {
        pi(o, w), Po(o, w);
      }
    }
    function E() {
    }
    function D(o, c, b, w) {
      var M = !1, ee = null, pe = "", Te = {
        push: function(Tt) {
          return Tt !== null && (pe += Tt), !0;
        },
        destroy: function(Tt) {
          M = !0, ee = Tt;
        }
      }, He = !1;
      function rt() {
        He = !0;
      }
      var ct = Fl(o, Ic(b, c ? c.identifierPrefix : void 0), ll(), 1 / 0, E, void 0, rt, void 0, void 0);
      if (Ed(ct), p(ct, w), s(ct, Te), M)
        throw ee;
      if (!He)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return pe;
    }
    function H(o, c) {
      return D(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ie(o, c) {
      return D(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function he() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Pe() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Ci.renderToNodeStream = he, Ci.renderToStaticMarkup = ie, Ci.renderToStaticNodeStream = Pe, Ci.renderToString = H, Ci.version = t;
  }()), Ci;
}
var Lu = {};
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
function $S() {
  return Ph || (Ph = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          E[D - 1] = arguments[D];
        l("warn", s, E);
      }
    }
    function i(s) {
      {
        for (var p = arguments.length, E = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          E[D - 1] = arguments[D];
        l("error", s, E);
      }
    }
    function l(s, p, E) {
      {
        var D = n.ReactDebugCurrentFrame, H = D.getStackAddendum();
        H !== "" && (p += "%s", E = E.concat([H]));
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
        var E = p, D = u.length - m;
        D < E.length && (D === 0 ? s.enqueue(u) : (u.set(E.subarray(0, D), m), s.enqueue(u), E = E.subarray(D)), u = new Uint8Array(f), m = 0), u.set(E, m), m += E.length;
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
    function _(s, p) {
      if (C(s))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(s)), N(s);
    }
    function B(s, p) {
      if (C(s))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(s)), N(s);
    }
    function q(s) {
      if (C(s))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(s)), N(s);
    }
    var U = Object.prototype.hasOwnProperty, ne = 0, re = 1, V = 2, Y = 3, J = 4, Z = 5, ae = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", se = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", G = new RegExp("^[" + te + "][" + se + "]*$"), Q = {}, K = {};
    function W(s) {
      return U.call(K, s) ? !0 : U.call(Q, s) ? !1 : G.test(s) ? (K[s] = !0, !0) : (Q[s] = !0, i("Invalid attribute name: `%s`", s), !1);
    }
    function Ce(s, p, E, D) {
      if (E !== null && E.type === ne)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (D)
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
    function xe(s) {
      return Re.hasOwnProperty(s) ? Re[s] : null;
    }
    function fe(s, p, E, D, H, ie, he) {
      this.acceptsBooleans = p === V || p === Y || p === J, this.attributeName = D, this.attributeNamespace = H, this.mustUseProperty = E, this.propertyName = s, this.type = p, this.sanitizeURL = ie, this.removeEmptyString = he;
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
      Re[s] = new fe(
        s,
        ne,
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
      Re[p] = new fe(
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
      Re[s] = new fe(
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
      Re[s] = new fe(
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
      Re[s] = new fe(
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
      Re[s] = new fe(
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
      Re[s] = new fe(
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
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(s) {
      Re[s] = new fe(
        s,
        ae,
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
      Re[s] = new fe(
        s,
        Z,
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
      Re[p] = new fe(
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
      var p = s.replace(Ze, Ae);
      Re[p] = new fe(
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
      var p = s.replace(Ze, Ae);
      Re[p] = new fe(
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
      Re[s] = new fe(
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
    var me = "xlinkHref";
    Re[me] = new fe(
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
      Re[s] = new fe(
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
    function ue(s, p) {
      return s + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var de = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fe).forEach(function(s) {
      de.forEach(function(p) {
        Fe[ue(p, s)] = Fe[s];
      });
    });
    var Le = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ke(s, p) {
      Le[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ie(s, p) {
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
    }, Qe = {}, mt = new RegExp("^(aria)-[" + se + "]*$"), tt = new RegExp("^(aria)[A-Z][" + se + "]*$");
    function Ve(s, p) {
      {
        if (U.call(Qe, p) && Qe[p])
          return !0;
        if (tt.test(p)) {
          var E = "aria-" + p.slice(4).toLowerCase(), D = qe.hasOwnProperty(E) ? E : null;
          if (D == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), Qe[p] = !0, !0;
          if (p !== D)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, D), Qe[p] = !0, !0;
        }
        if (mt.test(p)) {
          var H = p.toLowerCase(), ie = qe.hasOwnProperty(H) ? H : null;
          if (ie == null)
            return Qe[p] = !0, !1;
          if (p !== ie)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ie), Qe[p] = !0, !0;
        }
      }
      return !0;
    }
    function _e(s, p) {
      {
        var E = [];
        for (var D in p) {
          var H = Ve(s, D);
          H || E.push(D);
        }
        var ie = E.map(function(he) {
          return "`" + he + "`";
        }).join(", ");
        E.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s) : E.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, s);
      }
    }
    function we(s, p) {
      Ie(s, p) || _e(s, p);
    }
    var Je = !1;
    function Ge(s, p) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        p != null && p.value === null && !Je && (Je = !0, s === "select" && p.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
      }
    }
    var dt = {
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
      var yt = {}, _t = /^on./, an = /^on[^A-Z]/, on = new RegExp("^(aria)-[" + se + "]*$"), Xt = new RegExp("^(aria)[A-Z][" + se + "]*$");
      bt = function(s, p, E, D) {
        if (U.call(yt, p) && yt[p])
          return !0;
        var H = p.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yt[p] = !0, !0;
        if (D != null) {
          var ie = D.registrationNameDependencies, he = D.possibleRegistrationNames;
          if (ie.hasOwnProperty(p))
            return !0;
          var Pe = he.hasOwnProperty(H) ? he[H] : null;
          if (Pe != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", p, Pe), yt[p] = !0, !0;
          if (_t.test(p))
            return i("Unknown event handler property `%s`. It will be ignored.", p), yt[p] = !0, !0;
        } else if (_t.test(p))
          return an.test(p) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), yt[p] = !0, !0;
        if (on.test(p) || Xt.test(p))
          return !0;
        if (H === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yt[p] = !0, !0;
        if (H === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yt[p] = !0, !0;
        if (H === "is" && E !== null && E !== void 0 && typeof E != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), yt[p] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), yt[p] = !0, !0;
        var o = xe(p), c = o !== null && o.type === ne;
        if (dt.hasOwnProperty(H)) {
          var b = dt[H];
          if (b !== p)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", p, b), yt[p] = !0, !0;
        } else if (!c && p !== H)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, H), yt[p] = !0, !0;
        return typeof E == "boolean" && Ce(p, E, o, !1) ? (E ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, p, p, E, p) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, p, p, E, p, p, p), yt[p] = !0, !0) : c ? !0 : Ce(p, E, o, !1) ? (yt[p] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === Y && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, p, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, E), yt[p] = !0), !0);
      };
    }
    var Jt = function(s, p, E) {
      {
        var D = [];
        for (var H in p) {
          var ie = bt(s, H, p[H], E);
          ie || D.push(H);
        }
        var he = D.map(function(Pe) {
          return "`" + Pe + "`";
        }).join(", ");
        D.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", he, s) : D.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", he, s);
      }
    };
    function Kt(s, p, E) {
      Ie(s, p) || Jt(s, p, E);
    }
    var At = function() {
    };
    {
      var Mt = /^(?:webkit|moz|o)[A-Z]/, Vt = /^-ms-/, $e = /-(.)/g, en = /;\s*$/, wt = {}, zt = {}, pt = !1, tn = !1, xn = function(s) {
        return s.replace($e, function(p, E) {
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
      }, Yt = function(s, p) {
        pt || (pt = !0, i("`NaN` is an invalid value for the `%s` css style property.", s));
      }, jt = function(s, p) {
        tn || (tn = !0, i("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      At = function(s, p) {
        s.indexOf("-") > -1 ? Ft(s) : Mt.test(s) ? nn(s) : en.test(p) && Ln(s, p), typeof p == "number" && (isNaN(p) ? Yt(s, p) : isFinite(p) || jt(s, p));
      };
    }
    var Tn = At, Hn = /["'&<>]/;
    function Mn(s) {
      q(s);
      var p = "" + s, E = Hn.exec(p);
      if (!E)
        return p;
      var D, H = "", ie, he = 0;
      for (ie = E.index; ie < p.length; ie++) {
        switch (p.charCodeAt(ie)) {
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
        he !== ie && (H += p.substring(he, ie)), he = ie + 1, H += D;
      }
      return he !== ie ? H + p.substring(he, ie) : H;
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
    function Ne(s) {
      return Un(s);
    }
    var ut = h("<script>"), ft = h("<\/script>"), $ = h('<script src="'), Me = h('<script type="module" src="'), Ye = h('" async=""><\/script>');
    function Be(s) {
      return q(s), ("" + s).replace(nt, at);
    }
    var nt = /(<\/|<)(s)(cript)/gi, at = function(s, p, E, D) {
      return "" + p + (E === "s" ? "\\u0073" : "\\u0053") + D;
    };
    function kt(s, p, E, D, H) {
      var ie = s === void 0 ? "" : s, he = p === void 0 ? ut : h('<script nonce="' + qt(p) + '">'), Pe = [];
      if (E !== void 0 && Pe.push(he, k(Be(E)), ft), D !== void 0)
        for (var o = 0; o < D.length; o++)
          Pe.push($, k(qt(D[o])), Ye);
      if (H !== void 0)
        for (var c = 0; c < H.length; c++)
          Pe.push(Me, k(qt(H[c])), Ye);
      return {
        bootstrapChunks: Pe,
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
    var Lt = 0, Ke = 1, It = 2, $t = 3, Bt = 4, gt = 5, Rt = 6, Nt = 7;
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
          return Ot(Ke, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return Ot(It, null);
        case "math":
          return Ot($t, null);
        case "foreignObject":
          return Ot(Ke, null);
        case "table":
          return Ot(Bt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ot(gt, null);
        case "colgroup":
          return Ot(Nt, null);
        case "tr":
          return Ot(Rt, null);
      }
      return s.insertionMode >= Bt || s.insertionMode === Lt ? Ot(Ke, null) : s;
    }
    var Nn = null;
    function hn(s) {
      var p = s.nextSuspenseID++;
      return h(s.boundaryPrefix + p.toString(16));
    }
    function ln(s, p, E) {
      var D = s.idPrefix, H = ":" + D + "R" + p;
      return E > 0 && (H += "H" + E.toString(32)), H + ":";
    }
    function mn(s) {
      return qt(s);
    }
    var cn = h("<!-- -->");
    function En(s, p, E, D) {
      return p === "" ? D : (D && s.push(cn), s.push(k(mn(p))), !0);
    }
    function qn(s, p, E, D) {
      E && D && s.push(cn);
    }
    var g = /* @__PURE__ */ new Map();
    function A(s) {
      var p = g.get(s);
      if (p !== void 0)
        return p;
      var E = h(qt(Cn(s)));
      return g.set(s, E), E;
    }
    var z = h(' style="'), j = h(":"), be = h(";");
    function ve(s, p, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var D = !0;
      for (var H in E)
        if (U.call(E, H)) {
          var ie = E[H];
          if (!(ie == null || typeof ie == "boolean" || ie === "")) {
            var he = void 0, Pe = void 0, o = H.indexOf("--") === 0;
            o ? (he = k(qt(H)), B(ie, H), Pe = k(qt(("" + ie).trim()))) : (Tn(H, ie), he = A(H), typeof ie == "number" ? ie !== 0 && !U.call(Fe, H) ? Pe = k(ie + "px") : Pe = k("" + ie) : (B(ie, H), Pe = k(qt(("" + ie).trim())))), D ? (D = !1, s.push(z, he, j, Pe)) : s.push(be, he, j, Pe);
          }
        }
      D || s.push(ot);
    }
    var De = h(" "), Ue = h('="'), ot = h('"'), ht = h('=""');
    function oe(s, p, E, D) {
      switch (E) {
        case "style": {
          ve(s, p, D);
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
        var H = xe(E);
        if (H !== null) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!H.acceptsBooleans)
                return;
          }
          var ie = H.attributeName, he = k(ie);
          switch (H.type) {
            case Y:
              D && s.push(De, he, ht);
              return;
            case J:
              D === !0 ? s.push(De, he, ht) : D === !1 || s.push(De, he, Ue, k(qt(D)), ot);
              return;
            case Z:
              isNaN(D) || s.push(De, he, Ue, k(qt(D)), ot);
              break;
            case ae:
              !isNaN(D) && D >= 1 && s.push(De, he, Ue, k(qt(D)), ot);
              break;
            default:
              H.sanitizeURL && (_(D, ie), D = "" + D, zn(D)), s.push(De, he, Ue, k(qt(D)), ot);
          }
        } else if (W(E)) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Pe = E.toLowerCase().slice(0, 5);
              if (Pe !== "data-" && Pe !== "aria-")
                return;
            }
          }
          s.push(De, k(E), Ue, k(qt(D)), ot);
        }
      }
    }
    var le = h(">"), ye = h("/>");
    function Oe(s, p, E) {
      if (p != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var D = p.__html;
        D != null && (q(D), s.push(k("" + D)));
      }
    }
    var vt = !1, gn = !1, kn = !1, dr = !1, In = !1, wr = !1, fr = !1;
    function qr(s, p) {
      {
        var E = s[p];
        if (E != null) {
          var D = Ne(E);
          s.multiple && !D ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !s.multiple && D && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Qo(s, p, E) {
      ke("select", p), qr(p, "value"), qr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !kn && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), kn = !0), s.push(Qn("select"));
      var D = null, H = null;
      for (var ie in p)
        if (U.call(p, ie)) {
          var he = p[ie];
          if (he == null)
            continue;
          switch (ie) {
            case "children":
              D = he;
              break;
            case "dangerouslySetInnerHTML":
              H = he;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(s, E, ie, he);
              break;
          }
        }
      return s.push(le), Oe(s, H, D), D;
    }
    function Jo(s) {
      var p = "";
      return e.Children.forEach(s, function(E) {
        E != null && (p += E, !In && typeof E != "string" && typeof E != "number" && (In = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ba = h(' selected=""');
    function el(s, p, E, D) {
      var H = D.selectedValue;
      s.push(Qn("option"));
      var ie = null, he = null, Pe = null, o = null;
      for (var c in p)
        if (U.call(p, c)) {
          var b = p[c];
          if (b == null)
            continue;
          switch (c) {
            case "children":
              ie = b;
              break;
            case "selected":
              Pe = b, fr || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), fr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = b;
              break;
            case "value":
              he = b;
            default:
              oe(s, E, c, b);
              break;
          }
        }
      if (H != null) {
        var w;
        if (he !== null ? (_(he, "value"), w = "" + he) : (o !== null && (wr || (wr = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), w = Jo(ie)), Ne(H))
          for (var M = 0; M < H.length; M++) {
            _(H[M], "value");
            var ee = "" + H[M];
            if (ee === w) {
              s.push(Ba);
              break;
            }
          }
        else
          _(H, "select.value"), "" + H === w && s.push(Ba);
      } else
        Pe && s.push(Ba);
      return s.push(le), Oe(s, o, ie), ie;
    }
    function Ha(s, p, E) {
      ke("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !gn && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), gn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !vt && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), vt = !0), s.push(Qn("input"));
      var D = null, H = null, ie = null, he = null;
      for (var Pe in p)
        if (U.call(p, Pe)) {
          var o = p[Pe];
          if (o == null)
            continue;
          switch (Pe) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              he = o;
              break;
            case "defaultValue":
              H = o;
              break;
            case "checked":
              ie = o;
              break;
            case "value":
              D = o;
              break;
            default:
              oe(s, E, Pe, o);
              break;
          }
        }
      return ie !== null ? oe(s, E, "checked", ie) : he !== null && oe(s, E, "checked", he), D !== null ? oe(s, E, "value", D) : H !== null && oe(s, E, "value", H), s.push(ye), null;
    }
    function pr(s, p, E) {
      ke("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !dr && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), dr = !0), s.push(Qn("textarea"));
      var D = null, H = null, ie = null;
      for (var he in p)
        if (U.call(p, he)) {
          var Pe = p[he];
          if (Pe == null)
            continue;
          switch (he) {
            case "children":
              ie = Pe;
              break;
            case "value":
              D = Pe;
              break;
            case "defaultValue":
              H = Pe;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              oe(s, E, he, Pe);
              break;
          }
        }
      if (D === null && H !== null && (D = H), s.push(le), ie != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), D != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Ne(ie)) {
          if (ie.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          q(ie[0]), D = "" + ie[0];
        }
        q(ie), D = "" + ie;
      }
      return typeof D == "string" && D[0] === `
` && s.push(Tr), D !== null && (_(D, "value"), s.push(k(mn("" + D)))), null;
    }
    function Gr(s, p, E, D) {
      s.push(Qn(E));
      for (var H in p)
        if (U.call(p, H)) {
          var ie = p[H];
          if (ie == null)
            continue;
          switch (H) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              oe(s, D, H, ie);
              break;
          }
        }
      return s.push(ye), null;
    }
    function da(s, p, E) {
      s.push(Qn("menuitem"));
      for (var D in p)
        if (U.call(p, D)) {
          var H = p[D];
          if (H == null)
            continue;
          switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              oe(s, E, D, H);
              break;
          }
        }
      return s.push(le), null;
    }
    function rn(s, p, E) {
      s.push(Qn("title"));
      var D = null;
      for (var H in p)
        if (U.call(p, H)) {
          var ie = p[H];
          if (ie == null)
            continue;
          switch (H) {
            case "children":
              D = ie;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              oe(s, E, H, ie);
              break;
          }
        }
      s.push(le);
      {
        var he = Array.isArray(D) && D.length < 2 ? D[0] || null : D;
        Array.isArray(D) && D.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : he != null && he.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : he != null && typeof he != "string" && typeof he != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return D;
    }
    function mr(s, p, E, D) {
      s.push(Qn(E));
      var H = null, ie = null;
      for (var he in p)
        if (U.call(p, he)) {
          var Pe = p[he];
          if (Pe == null)
            continue;
          switch (he) {
            case "children":
              H = Pe;
              break;
            case "dangerouslySetInnerHTML":
              ie = Pe;
              break;
            default:
              oe(s, D, he, Pe);
              break;
          }
        }
      return s.push(le), Oe(s, ie, H), typeof H == "string" ? (s.push(k(mn(H))), null) : H;
    }
    function Kn(s, p, E, D) {
      s.push(Qn(E));
      var H = null, ie = null;
      for (var he in p)
        if (U.call(p, he)) {
          var Pe = p[he];
          if (Pe == null)
            continue;
          switch (he) {
            case "children":
              H = Pe;
              break;
            case "dangerouslySetInnerHTML":
              ie = Pe;
              break;
            case "style":
              ve(s, D, Pe);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              W(he) && typeof Pe != "function" && typeof Pe != "symbol" && s.push(De, k(he), Ue, k(qt(Pe)), ot);
              break;
          }
        }
      return s.push(le), Oe(s, ie, H), H;
    }
    var Tr = h(`
`);
    function yr(s, p, E, D) {
      s.push(Qn(E));
      var H = null, ie = null;
      for (var he in p)
        if (U.call(p, he)) {
          var Pe = p[he];
          if (Pe == null)
            continue;
          switch (he) {
            case "children":
              H = Pe;
              break;
            case "dangerouslySetInnerHTML":
              ie = Pe;
              break;
            default:
              oe(s, D, he, Pe);
              break;
          }
        }
      if (s.push(le), ie != null) {
        if (H != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ie != "object" || !("__html" in ie))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = ie.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(Tr, k(o)) : (q(o), s.push(k("" + o))));
      }
      return typeof H == "string" && H[0] === `
` && s.push(Tr), H;
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
    function Va(s, p, E, D, H) {
      switch (we(p, E), Ge(p, E), Kt(p, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), H.insertionMode !== It && H.insertionMode !== $t && p.indexOf("-") === -1 && typeof E.is != "string" && p.toLowerCase() !== p && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Qo(s, E, D);
        case "option":
          return el(s, E, D, H);
        case "textarea":
          return pr(s, E, D);
        case "input":
          return Ha(s, E, D);
        case "menuitem":
          return da(s, E, D);
        case "title":
          return rn(s, E, D);
        case "listing":
        case "pre":
          return yr(s, E, p, D);
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
          return Gr(s, E, p, D);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mr(s, E, p, D);
        case "html":
          return H.insertionMode === Lt && s.push(Wa), mr(s, E, p, D);
        default:
          return p.indexOf("-") === -1 && typeof E.is != "string" ? mr(s, E, p, D) : Kn(s, E, p, D);
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
      for (var E = p.bootstrapChunks, D = 0; D < E.length - 1; D++)
        x(s, E[D]);
      return D < E.length ? S(s, E[D]) : !0;
    }
    var nl = h('<template id="'), pa = h('"></template>');
    function ha(s, p, E) {
      x(s, nl), x(s, p.placeholderPrefix);
      var D = k(E.toString(16));
      return x(s, D), S(s, pa);
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
    function Yn(s, p, E, D, H) {
      var ie;
      return ie = S(s, Qr), x(s, Ua), E && (x(s, Mr), x(s, k(qt(E))), x(s, Fr)), D && (x(s, ya), x(s, k(qt(D))), x(s, Fr)), H && (x(s, Hi), x(s, k(qt(H))), x(s, Fr)), ie = S(s, Ka), ie;
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
    var ji = h('<div hidden id="'), xa = h('">'), Ui = h("</div>"), Ki = h('<svg aria-hidden="true" style="display:none" id="'), ba = h('">'), Sa = h("</svg>"), Yi = h('<math aria-hidden="true" style="display:none" id="'), Xi = h('">'), qi = h("</math>"), Ya = h('<table hidden id="'), Gi = h('">'), v = h("</table>"), L = h('<table hidden><tbody id="'), I = h('">'), X = h("</tbody></table>"), Ee = h('<table hidden><tr id="'), Se = h('">'), ze = h("</tr></table>"), Xe = h('<table hidden><colgroup id="'), xt = h('">'), Dt = h("</colgroup></table>");
    function Pt(s, p, E, D) {
      switch (E.insertionMode) {
        case Lt:
        case Ke:
          return x(s, ji), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, xa);
        case It:
          return x(s, Ki), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, ba);
        case $t:
          return x(s, Yi), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, Xi);
        case Bt:
          return x(s, Ya), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, Gi);
        case gt:
          return x(s, L), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, I);
        case Rt:
          return x(s, Ee), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, Se);
        case Nt:
          return x(s, Xe), x(s, p.segmentPrefix), x(s, k(D.toString(16))), S(s, xt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function sn(s, p) {
      switch (p.insertionMode) {
        case Lt:
        case Ke:
          return S(s, Ui);
        case It:
          return S(s, Sa);
        case $t:
          return S(s, qi);
        case Bt:
          return S(s, v);
        case gt:
          return S(s, X);
        case Rt:
          return S(s, ze);
        case Nt:
          return S(s, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Xn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ea = h(Xn + ';$RS("'), Zi = h('$RS("'), Xa = h('","'), Rc = h('")<\/script>');
    function Dc(s, p, E) {
      x(s, p.startInlineScript), p.sentCompleteSegmentFunction ? x(s, Zi) : (p.sentCompleteSegmentFunction = !0, x(s, Ea)), x(s, p.segmentPrefix);
      var D = k(E.toString(16));
      return x(s, D), x(s, Xa), x(s, p.placeholderPrefix), x(s, D), S(s, Rc);
    }
    var _c = h(Jn + ';$RC("'), Nc = h('$RC("'), Oc = h('","'), Fc = h('")<\/script>');
    function il(s, p, E, D) {
      if (x(s, p.startInlineScript), p.sentCompleteBoundaryFunction ? x(s, Nc) : (p.sentCompleteBoundaryFunction = !0, x(s, _c)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var H = k(D.toString(16));
      return x(s, E), x(s, Oc), x(s, p.segmentPrefix), x(s, H), S(s, Fc);
    }
    var Mc = h(er + ';$RX("'), zc = h('$RX("'), ol = h('"'), Ic = h(")<\/script>"), ll = h(",");
    function Cs(s, p, E, D, H, ie) {
      if (x(s, p.startInlineScript), p.sentClientRenderFunction ? x(s, zc) : (p.sentClientRenderFunction = !0, x(s, Mc)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return x(s, E), x(s, ol), (D || H || ie) && (x(s, ll), x(s, k(sl(D || "")))), (H || ie) && (x(s, ll), x(s, k(sl(H || "")))), ie && (x(s, ll), x(s, k(sl(ie)))), S(s, Ic);
    }
    var As = /[<\u2028\u2029]/g;
    function sl(s) {
      var p = JSON.stringify(s);
      return p.replace(As, function(E) {
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
    var or = Object.assign, $c = Symbol.for("react.element"), Ls = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), Ps = Symbol.for("react.strict_mode"), ul = Symbol.for("react.profiler"), Qi = Symbol.for("react.provider"), Ji = Symbol.for("react.context"), eo = Symbol.for("react.forward_ref"), qa = Symbol.for("react.suspense"), Ga = Symbol.for("react.suspense_list"), Za = Symbol.for("react.memo"), ka = Symbol.for("react.lazy"), cl = Symbol.for("react.scope"), dl = Symbol.for("react.debug_trace_mode"), to = Symbol.for("react.legacy_hidden"), Bc = Symbol.for("react.default_value"), Rs = Symbol.iterator, Hc = "@@iterator";
    function Wc(s) {
      if (s === null || typeof s != "object")
        return null;
      var p = Rs && s[Rs] || s[Hc];
      return typeof p == "function" ? p : null;
    }
    function Ds(s, p, E) {
      var D = s.displayName;
      if (D)
        return D;
      var H = p.displayName || p.name || "";
      return H !== "" ? E + "(" + H + ")" : E;
    }
    function _s(s) {
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
        case Ls:
          return "Portal";
        case ul:
          return "Profiler";
        case Ps:
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
            return _s(p) + ".Consumer";
          case Qi:
            var E = s;
            return _s(E._context) + ".Provider";
          case eo:
            return Ds(s, s.render, "ForwardRef");
          case Za:
            var D = s.displayName || null;
            return D !== null ? D : vn(s.type) || "Memo";
          case ka: {
            var H = s, ie = H._payload, he = H._init;
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
    function Ns() {
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
    function Os() {
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
          } catch (H) {
            var D = H.stack.trim().match(/\n( *(at )?)/);
            vl = D && D[1] || "";
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
      var D;
      ei = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = no.current, no.current = null, Ns();
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
            } catch (pe) {
              D = pe;
            }
            Reflect.construct(s, [], he);
          } else {
            try {
              he.call();
            } catch (pe) {
              D = pe;
            }
            s.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            D = pe;
          }
          s();
        }
      } catch (pe) {
        if (pe && D && typeof pe.stack == "string") {
          for (var Pe = pe.stack.split(`
`), o = D.stack.split(`
`), c = Pe.length - 1, b = o.length - 1; c >= 1 && b >= 0 && Pe[c] !== o[b]; )
            b--;
          for (; c >= 1 && b >= 0; c--, b--)
            if (Pe[c] !== o[b]) {
              if (c !== 1 || b !== 1)
                do
                  if (c--, b--, b < 0 || Pe[c] !== o[b]) {
                    var w = `
` + Pe[c].replace(" at new ", " at ");
                    return s.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", s.displayName)), typeof s == "function" && Ta.set(s, w), w;
                  }
                while (c >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ei = !1, no.current = ie, Os(), Error.prepareStackTrace = H;
      }
      var M = s ? s.displayName || s.name : "", ee = M ? Ja(M) : "";
      return typeof s == "function" && Ta.set(s, ee), ee;
    }
    function ro(s, p, E) {
      return ni(s, !0);
    }
    function Fs(s, p, E) {
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
            return Fs(s.render);
          case Za:
            return bl(s.type, p, E);
          case ka: {
            var D = s, H = D._payload, ie = D._init;
            try {
              return bl(ie(H), p, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Sl = {}, Ms = n.ReactDebugCurrentFrame;
    function Ca(s) {
      if (s) {
        var p = s._owner, E = bl(s.type, s._source, p ? p.type : null);
        Ms.setExtraStackFrame(E);
      } else
        Ms.setExtraStackFrame(null);
    }
    function El(s, p, E, D, H) {
      {
        var ie = Function.call.bind(U);
        for (var he in s)
          if (ie(s, he)) {
            var Pe = void 0;
            try {
              if (typeof s[he] != "function") {
                var o = Error((D || "React class") + ": " + E + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Pe = s[he](p, he, D, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              Pe = c;
            }
            Pe && !(Pe instanceof Error) && (Ca(H), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", E, he, typeof Pe), Ca(null)), Pe instanceof Error && !(Pe.message in Sl) && (Sl[Pe.message] = !0, Ca(H), i("Failed %s type: %s", E, Pe.message), Ca(null));
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
        var D = {};
        for (var H in E)
          D[H] = p[H];
        {
          var ie = vn(s) || "Unknown";
          El(E, D, "context", ie);
        }
        return D;
      }
    }
    function wl(s, p, E, D) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var H = vn(p) || "Unknown";
            ao[H] || (ao[H] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", H, H));
          }
          return E;
        }
        var ie = s.getChildContext();
        for (var he in ie)
          if (!(he in D))
            throw new Error((vn(p) || "Unknown") + '.getChildContext(): key "' + he + '" is not defined in childContextTypes.');
        {
          var Pe = vn(p) || "Unknown";
          El(D, ie, "child context", Pe);
        }
        return or({}, E, ie);
      }
    }
    var zr;
    zr = {};
    var zs = null, ea = null;
    function ta(s) {
      s.context._currentValue = s.parentValue;
    }
    function Tl(s) {
      s.context._currentValue = s.value;
    }
    function vr(s, p) {
      if (s !== p) {
        ta(s);
        var E = s.parent, D = p.parent;
        if (E === null) {
          if (D !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (D === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          vr(E, D);
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
    function Is(s, p) {
      var E;
      E = s._currentValue, s._currentValue = p, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
      var D = ea, H = {
        parent: D,
        depth: D === null ? 0 : D.depth + 1,
        context: s,
        parentValue: E,
        value: p
      };
      return ea = H, H;
    }
    function $s(s) {
      var p = ea;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== s && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var E = p.parentValue;
        E === Bc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== zr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = zr;
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
    function Vc(s, p) {
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
        var E = s.constructor, D = E && vn(E) || "ReactClass", H = D + "." + p;
        if (Aa[H])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, D), Aa[H] = !0;
      }
    }
    var yo = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, p, E) {
        var D = Al(s);
        D.queue === null ? mo(s, "setState") : (D.queue.push(p), E != null && La(E, "setState"));
      },
      enqueueReplaceState: function(s, p, E) {
        var D = Al(s);
        D.replace = !0, D.queue = [p], E != null && La(E, "setState");
      },
      enqueueForceUpdate: function(s, p) {
        var E = Al(s);
        E.queue === null ? mo(s, "forceUpdate") : p != null && La(p, "setState");
      }
    };
    function Bs(s, p, E, D, H) {
      var ie = E(H, D);
      fo(p, ie);
      var he = ie == null ? D : or({}, D, ie);
      return he;
    }
    function Hs(s, p, E) {
      var D = Jr, H = s.contextType;
      if ("contextType" in s) {
        var ie = (
          // Allow null for conditional declaration
          H === null || H !== void 0 && H.$$typeof === Ji && H._context === void 0
        );
        if (!ie && !Pa.has(s)) {
          Pa.add(s);
          var he = "";
          H === void 0 ? he = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof H != "object" ? he = " However, it is set to a " + typeof H + "." : H.$$typeof === Qi ? he = " Did you accidentally pass the Context.Provider instead?" : H._context !== void 0 ? he = " Did you accidentally pass the Context.Consumer instead?" : he = " However, it is set to an object with keys {" + Object.keys(H).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", vn(s) || "Component", he);
        }
      }
      typeof H == "object" && H !== null ? D = ii(H) : D = E;
      var Pe = new s(p, D);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Pe.state === null || Pe.state === void 0)) {
          var o = vn(s) || "Component";
          Ll.has(o) || (Ll.add(o), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Pe.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Pe.getSnapshotBeforeUpdate == "function") {
          var c = null, b = null, w = null;
          if (typeof Pe.componentWillMount == "function" && Pe.componentWillMount.__suppressDeprecationWarning !== !0 ? c = "componentWillMount" : typeof Pe.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof Pe.componentWillReceiveProps == "function" && Pe.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof Pe.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof Pe.componentWillUpdate == "function" && Pe.componentWillUpdate.__suppressDeprecationWarning !== !0 ? w = "componentWillUpdate" : typeof Pe.UNSAFE_componentWillUpdate == "function" && (w = "UNSAFE_componentWillUpdate"), c !== null || b !== null || w !== null) {
            var M = vn(s) || "Component", ee = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            co.has(M) || (co.add(M), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, M, ee, c !== null ? `
  ` + c : "", b !== null ? `
  ` + b : "", w !== null ? `
  ` + w : ""));
          }
        }
      }
      return Pe;
    }
    function Ws(s, p, E) {
      {
        var D = vn(p) || "Component", H = s.render;
        H || (p.prototype && typeof p.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", D) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", D)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", D), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", D), s.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", D), s.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", D), s.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", D), p.contextType && p.contextTypes && !po.has(p) && (po.add(p), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", D)), typeof s.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", D), p.prototype && p.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", vn(p) || "A pure component"), typeof s.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", D), typeof s.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", D), typeof s.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", D), typeof s.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", D);
        var ie = s.props !== E;
        s.props !== void 0 && ie && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", D, D), s.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", D, D), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !uo.has(p) && (uo.add(p), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", vn(p))), typeof s.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof s.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof p.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", D);
        var he = s.state;
        he && (typeof he != "object" || Ne(he)) && i("%s.state: must be set to an object or null", D), typeof s.getChildContext == "function" && typeof p.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", D);
      }
    }
    function jc(s, p) {
      var E = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var D = vn(s) || "Unknown";
          so[D] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            D
          ), so[D] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), E !== p.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", vn(s) || "Component"), yo.enqueueReplaceState(p, p.state, null));
    }
    function Uc(s, p, E, D) {
      if (s.queue !== null && s.queue.length > 0) {
        var H = s.queue, ie = s.replace;
        if (s.queue = null, s.replace = !1, ie && H.length === 1)
          p.state = H[0];
        else {
          for (var he = ie ? H[0] : p.state, Pe = !0, o = ie ? 1 : 0; o < H.length; o++) {
            var c = H[o], b = typeof c == "function" ? c.call(p, he, E, D) : c;
            b != null && (Pe ? (Pe = !1, he = or({}, he, b)) : or(he, b));
          }
          p.state = he;
        }
      } else
        s.queue = null;
    }
    function Vs(s, p, E, D) {
      Ws(s, p, E);
      var H = s.state !== void 0 ? s.state : null;
      s.updater = yo, s.props = E, s.state = H;
      var ie = {
        queue: [],
        replace: !1
      };
      Vc(s, ie);
      var he = p.contextType;
      if (typeof he == "object" && he !== null ? s.context = ii(he) : s.context = D, s.state === E) {
        var Pe = vn(p) || "Component";
        li.has(Pe) || (li.add(Pe), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Pe));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (s.state = Bs(s, p, o, H, E)), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (jc(p, s), Uc(ie, s, E, D));
    }
    var Kc = {
      id: 1,
      overflow: ""
    };
    function Yc(s) {
      var p = s.overflow, E = s.id, D = E & ~Xc(E);
      return D.toString(32) + p;
    }
    function go(s, p, E) {
      var D = s.id, H = s.overflow, ie = vo(D) - 1, he = D & ~(1 << ie), Pe = E + 1, o = vo(p) + ie;
      if (o > 30) {
        var c = ie - ie % 5, b = (1 << c) - 1, w = (he & b).toString(32), M = he >> c, ee = ie - c, pe = vo(p) + ee, Te = Pe << ee, He = Te | M, rt = w + H;
        return {
          id: 1 << pe | He,
          overflow: rt
        };
      } else {
        var ct = Pe << ie, Tt = ct | he, dn = H;
        return {
          id: 1 << o | Tt,
          overflow: dn
        };
      }
    }
    function vo(s) {
      return 32 - Pl(s);
    }
    function Xc(s) {
      return 1 << vo(s) - 1;
    }
    var Pl = Math.clz32 ? Math.clz32 : Gc, xo = Math.log, qc = Math.LN2;
    function Gc(s) {
      var p = s >>> 0;
      return p === 0 ? 32 : 31 - (xo(p) / qc | 0) | 0;
    }
    function Zc(s, p) {
      return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
    }
    var Qc = typeof Object.is == "function" ? Object.is : Zc, Cr = null, Rl = null, bo = null, Ht = null, na = !1, ra = !1, Qt = 0, lr = null, aa = 0, So = 25, On = !1, Ar;
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
        if (!Qc(s[E], p[E]))
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
    function Jc(s, p) {
      Cr = p, Rl = s, On = !1, Qt = 0;
    }
    function js(s, p, E, D) {
      for (; ra; )
        ra = !1, Qt = 0, aa += 1, Ht = null, E = s(p, D);
      return Dl(), E;
    }
    function Eo() {
      var s = Qt !== 0;
      return s;
    }
    function Dl() {
      On = !1, Cr = null, Rl = null, ra = !1, bo = null, aa = 0, lr = null, Ht = null;
    }
    function ed(s) {
      return On && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ii(s);
    }
    function Us(s) {
      return Ar = "useContext", ia(), ii(s);
    }
    function si(s, p) {
      return typeof p == "function" ? p(s) : p;
    }
    function td(s) {
      return Ar = "useState", Ks(
        si,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function Ks(s, p, E) {
      if (s !== si && (Ar = "useReducer"), Cr = ia(), Ht = Lr(), na) {
        var D = Ht.queue, H = D.dispatch;
        if (lr !== null) {
          var ie = lr.get(D);
          if (ie !== void 0) {
            lr.delete(D);
            var he = Ht.memoizedState, Pe = ie;
            do {
              var o = Pe.action;
              On = !0, he = s(he, o), On = !1, Pe = Pe.next;
            } while (Pe !== null);
            return Ht.memoizedState = he, [he, H];
          }
        }
        return [Ht.memoizedState, H];
      } else {
        On = !0;
        var c;
        s === si ? c = typeof p == "function" ? p() : p : c = E !== void 0 ? E(p) : p, On = !1, Ht.memoizedState = c;
        var b = Ht.queue = {
          last: null,
          dispatch: null
        }, w = b.dispatch = Xs.bind(null, Cr, b);
        return [Ht.memoizedState, w];
      }
    }
    function ko(s, p) {
      Cr = ia(), Ht = Lr();
      var E = p === void 0 ? null : p;
      if (Ht !== null) {
        var D = Ht.memoizedState;
        if (D !== null && E !== null) {
          var H = D[1];
          if (xr(E, H))
            return D[0];
        }
      }
      On = !0;
      var ie = s();
      return On = !1, Ht.memoizedState = [ie, E], ie;
    }
    function nd(s) {
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
    function Ys(s, p) {
      Ar = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Xs(s, p, E) {
      if (aa >= So)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (s === Cr) {
        ra = !0;
        var D = {
          action: E,
          next: null
        };
        lr === null && (lr = /* @__PURE__ */ new Map());
        var H = lr.get(p);
        if (H === void 0)
          lr.set(p, D);
        else {
          for (var ie = H; ie.next !== null; )
            ie = ie.next;
          ie.next = D;
        }
      }
    }
    function rd(s, p) {
      return ko(function() {
        return s;
      }, p);
    }
    function ad(s, p, E) {
      return ia(), p(s._source);
    }
    function id(s, p, E) {
      if (E === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return E();
    }
    function od(s) {
      return ia(), s;
    }
    function ld() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function sd() {
      return ia(), [!1, ld];
    }
    function ud() {
      var s = Rl, p = Yc(s.treeContext), E = _l;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var D = Qt++;
      return ln(E, p, D);
    }
    function wo() {
    }
    var qs = {
      readContext: ed,
      useContext: Us,
      useMemo: ko,
      useReducer: Ks,
      useRef: nd,
      useState: td,
      useInsertionEffect: wo,
      useLayoutEffect: Ys,
      useCallback: rd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: wo,
      // Effects are not run in the server environment.
      useEffect: wo,
      // Debugging effect
      useDebugValue: wo,
      useDeferredValue: od,
      useTransition: sd,
      useId: ud,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ad,
      useSyncExternalStore: id
    }, _l = null;
    function ui(s) {
      _l = s;
    }
    function Gs(s) {
      try {
        var p = "", E = s;
        do {
          switch (E.tag) {
            case 0:
              p += Ja(E.type, null, null);
              break;
            case 1:
              p += Fs(E.type, null, null);
              break;
            case 2:
              p += ro(E.type, null, null);
              break;
          }
          E = E.parent;
        } while (E);
        return p;
      } catch (D) {
        return `
Error generating stack: ` + D.message + `
` + D.stack;
      }
    }
    var ci = n.ReactCurrentDispatcher, To = n.ReactDebugCurrentFrame, Nl = 0, Ir = 1, Co = 2, Ao = 3, la = 4, Zs = 0, Ol = 1, sa = 2, cd = 12800;
    function Qs(s) {
      return console.error(s), null;
    }
    function br() {
    }
    function dd(s, p, E, D, H, ie, he, Pe, o) {
      var c = [], b = /* @__PURE__ */ new Set(), w = {
        destination: null,
        responseState: p,
        progressiveChunkSize: D === void 0 ? cd : D,
        status: Zs,
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
        onError: H === void 0 ? Qs : H,
        onAllReady: ie === void 0 ? br : ie,
        onShellReady: he === void 0 ? br : he,
        onShellError: Pe === void 0 ? br : Pe,
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
      var ee = Fl(w, s, null, M, b, Jr, zs, Kc);
      return c.push(ee), w;
    }
    function fd(s, p) {
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
    function Fl(s, p, E, D, H, ie, he, Pe) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return fd(s, o);
        },
        blockedBoundary: E,
        blockedSegment: D,
        abortSet: H,
        legacyContext: ie,
        context: he,
        treeContext: Pe
      };
      return o.componentStack = null, H.add(o), o;
    }
    function Lo(s, p, E, D, H, ie) {
      return {
        status: Nl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: D,
        boundary: E,
        lastPushedText: H,
        textEmbedded: ie
      };
    }
    var Pr = null;
    function fi() {
      return Pr === null || Pr.componentStack === null ? "" : Gs(Pr.componentStack);
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
        var D = Ra || fi();
        Ra = null, s.errorMessage = E, s.errorComponentStack = D;
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
      var D = s.onFatalError;
      D(p), s.destination !== null ? (s.status = sa, P(s.destination, p)) : (s.status = Ol, s.fatalError = p);
    }
    function Il(s, p, E) {
      $r(p, "Suspense");
      var D = p.blockedBoundary, H = p.blockedSegment, ie = E.fallback, he = E.children, Pe = /* @__PURE__ */ new Set(), o = di(s, Pe), c = H.chunks.length, b = Lo(
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
        if (Yl(s, p, he), qn(w.chunks, s.responseState, w.lastPushedText, w.textEmbedded), w.status = Ir, Do(o, w), o.pendingTasks === 0) {
          sr(p);
          return;
        }
      } catch (ee) {
        w.status = la, o.forceClientRender = !0, o.errorDigest = ur(s, ee), zl(o, ee);
      } finally {
        p.blockedBoundary = D, p.blockedSegment = H;
      }
      var M = Fl(s, ie, D, b, Pe, p.legacyContext, p.context, p.treeContext);
      M.componentStack = p.componentStack, s.pingedTasks.push(M), sr(p);
    }
    function pi(s, p, E, D) {
      $r(p, E);
      var H = p.blockedSegment, ie = Va(H.chunks, E, D, s.responseState, H.formatContext);
      H.lastPushedText = !1;
      var he = H.formatContext;
      H.formatContext = pn(he, E, D), Yl(s, p, ie), H.formatContext = he, Bi(H.chunks, E), H.lastPushedText = !1, sr(p);
    }
    function Po(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function Js(s, p, E, D, H) {
      var ie = {};
      Jc(p, ie);
      var he = E(D, H);
      return js(E, D, he, H);
    }
    function eu(s, p, E, D, H) {
      var ie = E.render();
      E.props !== H && (mi || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", vn(D) || "a component"), mi = !0);
      {
        var he = D.childContextTypes;
        if (he != null) {
          var Pe = p.legacyContext, o = wl(E, D, Pe, he);
          p.legacyContext = o, nr(s, p, ie), p.legacyContext = Pe;
          return;
        }
      }
      nr(s, p, ie);
    }
    function pd(s, p, E, D) {
      Ml(p, E);
      var H = kl(E, p.legacyContext), ie = Hs(E, D, H);
      Vs(ie, E, D, H), eu(s, p, ie, E, D), sr(p);
    }
    var $l = {}, hi = {}, tu = {}, Bl = {}, mi = !1, Hl = !1, Wl = !1, Vl = !1;
    function nu(s, p, E, D) {
      var H;
      if (H = kl(E, p.legacyContext), Sr(p, E), E.prototype && typeof E.prototype.render == "function") {
        var ie = vn(E) || "Unknown";
        $l[ie] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ie, ie), $l[ie] = !0);
      }
      var he = Js(s, p, E, D, H), Pe = Eo();
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
        Vs(he, E, D, H), eu(s, p, he, E, D);
      } else if (ru(E), Pe) {
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
    function ru(s) {
      {
        if (s && s.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", s.displayName || s.name || "Component"), typeof s.getDerivedStateFromProps == "function") {
          var p = vn(s) || "Unknown";
          Bl[p] || (i("%s: Function components do not support getDerivedStateFromProps.", p), Bl[p] = !0);
        }
        if (typeof s.contextType == "object" && s.contextType !== null) {
          var E = vn(s) || "Unknown";
          tu[E] || (i("%s: Function components do not support contextType.", E), tu[E] = !0);
        }
      }
    }
    function jl(s, p) {
      if (s && s.defaultProps) {
        var E = or({}, p), D = s.defaultProps;
        for (var H in D)
          E[H] === void 0 && (E[H] = D[H]);
        return E;
      }
      return p;
    }
    function hd(s, p, E, D, H) {
      Sr(p, E.render);
      var ie = Js(s, p, E.render, D, H), he = Eo();
      if (he) {
        var Pe = p.treeContext, o = 1, c = 0;
        p.treeContext = go(Pe, o, c);
        try {
          nr(s, p, ie);
        } finally {
          p.treeContext = Pe;
        }
      } else
        nr(s, p, ie);
      sr(p);
    }
    function md(s, p, E, D, H) {
      var ie = E.type, he = jl(ie, D);
      Ul(s, p, ie, he, H);
    }
    function au(s, p, E, D) {
      E._context === void 0 ? E !== E.Consumer && (Vl || (Vl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var H = D.children;
      typeof H != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ie = ii(E), he = H(ie);
      nr(s, p, he);
    }
    function yd(s, p, E, D) {
      var H = E._context, ie = D.value, he = D.children, Pe;
      Pe = p.context, p.context = Is(H, ie), nr(s, p, he), p.context = $s(H), Pe !== p.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function gd(s, p, E, D, H) {
      $r(p, "Lazy");
      var ie = E._payload, he = E._init, Pe = he(ie), o = jl(Pe, D);
      Ul(s, p, Pe, o, H), sr(p);
    }
    function Ul(s, p, E, D, H) {
      if (typeof E == "function")
        if (Po(E)) {
          pd(s, p, E, D);
          return;
        } else {
          nu(s, p, E, D);
          return;
        }
      if (typeof E == "string") {
        pi(s, p, E, D);
        return;
      }
      switch (E) {
        case to:
        case dl:
        case Ps:
        case ul:
        case tr: {
          nr(s, p, D.children);
          return;
        }
        case Ga: {
          $r(p, "SuspenseList"), nr(s, p, D.children), sr(p);
          return;
        }
        case cl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case qa: {
          Il(s, p, D);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case eo: {
            hd(s, p, E, D, H);
            return;
          }
          case Za: {
            md(s, p, E, D, H);
            return;
          }
          case Qi: {
            yd(s, p, E, D);
            return;
          }
          case Ji: {
            au(s, p, E, D);
            return;
          }
          case ka: {
            gd(s, p, E, D);
            return;
          }
        }
      var ie = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + ie));
    }
    function vd(s, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Hl || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Hl = !0), s.entries === p && (Wl || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wl = !0);
    }
    function nr(s, p, E) {
      try {
        return Kl(s, p, E);
      } catch (D) {
        throw typeof D == "object" && D !== null && typeof D.then == "function" || (Ra = Ra !== null ? Ra : fi()), D;
      }
    }
    function Kl(s, p, E) {
      if (p.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case $c: {
            var D = E, H = D.type, ie = D.props, he = D.ref;
            Ul(s, p, H, ie, he);
            return;
          }
          case Ls:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ka: {
            var Pe = E, o = Pe._payload, c = Pe._init, b;
            try {
              b = c(o);
            } catch (ct) {
              throw typeof ct == "object" && ct !== null && typeof ct.then == "function" && $r(p, "Lazy"), ct;
            }
            nr(s, p, b);
            return;
          }
        }
        if (Ne(E)) {
          iu(s, p, E);
          return;
        }
        var w = Wc(E);
        if (w) {
          vd(E, w);
          var M = w.call(E);
          if (M) {
            var ee = M.next();
            if (!ee.done) {
              var pe = [];
              do
                pe.push(ee.value), ee = M.next();
              while (!ee.done);
              iu(s, p, pe);
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
        He.lastPushedText = En(p.blockedSegment.chunks, E, s.responseState, He.lastPushedText);
        return;
      }
      if (typeof E == "number") {
        var rt = p.blockedSegment;
        rt.lastPushedText = En(p.blockedSegment.chunks, "" + E, s.responseState, rt.lastPushedText);
        return;
      }
      typeof E == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function iu(s, p, E) {
      for (var D = E.length, H = 0; H < D; H++) {
        var ie = p.treeContext;
        p.treeContext = go(ie, D, H);
        try {
          Yl(s, p, E[H]);
        } finally {
          p.treeContext = ie;
        }
      }
    }
    function rr(s, p, E) {
      var D = p.blockedSegment, H = D.chunks.length, ie = Lo(
        s,
        H,
        null,
        D.formatContext,
        // Adopt the parent segment's leading text embed
        D.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      D.children.push(ie), D.lastPushedText = !1;
      var he = Fl(s, p.node, p.blockedBoundary, ie, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (he.componentStack = p.componentStack.parent);
      var Pe = he.ping;
      E.then(Pe, Pe);
    }
    function Yl(s, p, E) {
      var D = p.blockedSegment.formatContext, H = p.legacyContext, ie = p.context, he = null;
      he = p.componentStack;
      try {
        return nr(s, p, E);
      } catch (Pe) {
        if (Dl(), typeof Pe == "object" && Pe !== null && typeof Pe.then == "function") {
          rr(s, p, Pe), p.blockedSegment.formatContext = D, p.legacyContext = H, p.context = ie, ai(ie), p.componentStack = he;
          return;
        } else
          throw p.blockedSegment.formatContext = D, p.legacyContext = H, p.context = ie, ai(ie), p.componentStack = he, Pe;
      }
    }
    function ou(s, p, E, D) {
      var H = ur(s, D);
      if (p === null ? Br(s, D) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = H, zl(p, D), p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function xd(s) {
      var p = this, E = s.blockedBoundary, D = s.blockedSegment;
      D.status = Ao, lu(p, E, D);
    }
    function Ro(s, p, E) {
      var D = s.blockedBoundary, H = s.blockedSegment;
      if (H.status = Ao, D === null)
        p.allPendingTasks--, p.status !== sa && (p.status = sa, p.destination !== null && T(p.destination));
      else {
        if (D.pendingTasks--, !D.forceClientRender) {
          D.forceClientRender = !0;
          var ie = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          D.errorDigest = p.onError(ie);
          {
            var he = "The server did not finish this Suspense boundary: ";
            ie && typeof ie.message == "string" ? ie = he + ie.message : ie = he + String(ie);
            var Pe = Pr;
            Pr = s;
            try {
              zl(D, ie);
            } finally {
              Pr = Pe;
            }
          }
          D.parentFlushed && p.clientRenderedBoundaries.push(D);
        }
        if (D.fallbackAbortableTasks.forEach(function(c) {
          return Ro(c, p, E);
        }), D.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
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
        var D = s.completedSegments;
        D.push(p);
      }
    }
    function lu(s, p, E) {
      if (p === null) {
        if (E.parentFlushed) {
          if (s.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          s.completedRootSegment = E;
        }
        if (s.pendingRootTasks--, s.pendingRootTasks === 0) {
          s.onShellError = br;
          var D = s.onShellReady;
          D();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          E.parentFlushed && E.status === Ir && Do(p, E), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(xd, s), p.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === Ir) {
          Do(p, E);
          var H = p.completedSegments;
          H.length === 1 && p.parentFlushed && s.partialBoundaries.push(p);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var ie = s.onAllReady;
        ie();
      }
    }
    function su(s, p) {
      var E = p.blockedSegment;
      if (E.status === Nl) {
        ai(p.context);
        var D = null;
        D = Pr, Pr = p;
        try {
          nr(s, p, p.node), qn(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), p.abortSet.delete(p), E.status = Ir, lu(s, p.blockedBoundary, E);
        } catch (ie) {
          if (Dl(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
            var H = p.ping;
            ie.then(H, H);
          } else
            p.abortSet.delete(p), E.status = la, ou(s, p.blockedBoundary, E, ie);
        } finally {
          Pr = D;
        }
      }
    }
    function yi(s) {
      if (s.status !== sa) {
        var p = lo(), E = ci.current;
        ci.current = qs;
        var D;
        D = To.getCurrentStack, To.getCurrentStack = fi;
        var H = _l;
        ui(s.responseState);
        try {
          var ie = s.pingedTasks, he;
          for (he = 0; he < ie.length; he++) {
            var Pe = ie[he];
            su(s, Pe);
          }
          ie.splice(0, he), s.destination !== null && No(s, s.destination);
        } catch (o) {
          ur(s, o), Br(s, o);
        } finally {
          ui(H), ci.current = E, To.getCurrentStack = D, E === qs && ai(p);
        }
      }
    }
    function gi(s, p, E) {
      switch (E.parentFlushed = !0, E.status) {
        case Nl: {
          var D = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, ha(p, s.responseState, D);
        }
        case Ir: {
          E.status = Co;
          for (var H = !0, ie = E.chunks, he = 0, Pe = E.children, o = 0; o < Pe.length; o++) {
            for (var c = Pe[o]; he < c.index; he++)
              x(p, ie[he]);
            H = _o(s, p, c);
          }
          for (; he < ie.length - 1; he++)
            x(p, ie[he]);
          return he < ie.length && (H = S(p, ie[he])), H;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function _o(s, p, E) {
      var D = E.boundary;
      if (D === null)
        return gi(s, p, E);
      if (D.parentFlushed = !0, D.forceClientRender)
        return Yn(p, s.responseState, D.errorDigest, D.errorMessage, D.errorComponentStack), gi(s, p, E), al(p, s.responseState);
      if (D.pendingTasks > 0) {
        D.rootSegmentID = s.nextSegmentId++, D.completedSegments.length > 0 && s.partialBoundaries.push(D);
        var H = D.id = hn(s.responseState);
        return ga(p, s.responseState, H), gi(s, p, E), va(p, s.responseState);
      } else {
        if (D.byteSize > s.progressiveChunkSize)
          return D.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(D), ga(p, s.responseState, D.id), gi(s, p, E), va(p, s.responseState);
        Wi(p, s.responseState);
        var ie = D.completedSegments;
        if (ie.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var he = ie[0];
        return _o(s, p, he), Vi(p, s.responseState);
      }
    }
    function uu(s, p, E) {
      return Cs(p, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function vi(s, p, E) {
      return Pt(p, s.responseState, E.formatContext, E.id), _o(s, p, E), sn(p, E.formatContext);
    }
    function xi(s, p, E) {
      for (var D = E.completedSegments, H = 0; H < D.length; H++) {
        var ie = D[H];
        Xl(s, p, E, ie);
      }
      return D.length = 0, il(p, s.responseState, E.id, E.rootSegmentID);
    }
    function bd(s, p, E) {
      for (var D = E.completedSegments, H = 0; H < D.length; H++) {
        var ie = D[H];
        if (!Xl(s, p, E, ie))
          return H++, D.splice(0, H), !1;
      }
      return D.splice(0, H), !0;
    }
    function Xl(s, p, E, D) {
      if (D.status === Co)
        return !0;
      var H = D.id;
      if (H === -1) {
        var ie = D.id = E.rootSegmentID;
        if (ie === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return vi(s, p, D);
      } else
        return vi(s, p, D), Dc(p, s.responseState, H);
    }
    function No(s, p) {
      y();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (_o(s, p, E), s.completedRootSegment = null, tl(p, s.responseState));
        var D = s.clientRenderedBoundaries, H;
        for (H = 0; H < D.length; H++) {
          var ie = D[H];
          uu(s, p, ie);
        }
        D.splice(0, H);
        var he = s.completedBoundaries;
        for (H = 0; H < he.length; H++) {
          var Pe = he[H];
          xi(s, p, Pe);
        }
        he.splice(0, H), R(p), y(p);
        var o = s.partialBoundaries;
        for (H = 0; H < o.length; H++) {
          var c = o[H];
          if (!bd(s, p, c)) {
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
        R(p), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), T(p));
      }
    }
    function Sd(s) {
      d(function() {
        return yi(s);
      });
    }
    function cu(s, p) {
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
        E.forEach(function(D) {
          return Ro(D, s, p);
        }), E.clear(), s.destination !== null && No(s, s.destination);
      } catch (D) {
        ur(s, D), Br(s, D);
      }
    }
    function Ed(s, p) {
      return new Promise(function(E, D) {
        var H, ie, he = new Promise(function(M, ee) {
          ie = M, H = ee;
        });
        function Pe() {
          var M = new ReadableStream(
            {
              type: "bytes",
              pull: function(ee) {
                cu(c, ee);
              },
              cancel: function(ee) {
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
          }), D(M);
        }
        var c = dd(s, kt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Gt(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ie, Pe, o, H);
        if (p && p.signal) {
          var b = p.signal, w = function() {
            Oo(c, b.reason), b.removeEventListener("abort", w);
          };
          b.addEventListener("abort", w);
        }
        Sd(c);
      });
    }
    Lu.renderToReadableStream = Ed, Lu.version = t;
  }()), Lu;
}
var Fi, xf;
process.env.NODE_ENV === "production" ? (Fi = MS(), xf = zS()) : (Fi = IS(), xf = $S());
$a.version = Fi.version;
$a.renderToString = Fi.renderToString;
$a.renderToStaticMarkup = Fi.renderToStaticMarkup;
$a.renderToNodeStream = Fi.renderToNodeStream;
$a.renderToStaticNodeStream = Fi.renderToStaticNodeStream;
$a.renderToReadableStream = xf.renderToReadableStream;
const BS = ({ width: e, height: t, runtime: n }) => {
  var fe, Re, je, Ze, Ae, me, Fe, ue;
  const { config: a } = ce.useContext(Et), { sankey: i } = a, l = (de) => de.visualizationType === "Sankey", [d, f] = ce.useState(0), u = ce.useRef([]), [m, y] = ce.useState(""), x = (de) => {
    y(de);
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
    var Le;
    let de = 0;
    (Le = u == null ? void 0 : u.current) == null || Le.map((ke) => {
      const Ie = ke == null ? void 0 : ke.getBoundingClientRect().width;
      Ie > de && (de = Ie);
    }), f(de);
  }, [u, i, window.innerWidth]), !l(a))
    return;
  const k = a == null ? void 0 : a.data[0], h = Array.from(new Set((fe = k == null ? void 0 : k.links) == null ? void 0 : fe.flatMap((de) => [de.source, de.target]))), P = {
    nodes: h.map((de) => ({ id: de })),
    links: (Re = k == null ? void 0 : k.links) == null ? void 0 : Re.map((de) => ({
      source: h.findIndex((Le) => Le === de.source),
      target: h.findIndex((Le) => Le === de.target),
      value: de.value
    }))
  };
  let O = 5;
  const C = 50, N = _S().nodeWidth(i.nodeSize.nodeWidth).nodePadding(i.nodePadding).iterations(i.iterations).nodeAlign(AS).extent([
    [i.margin.margin_x, Number(i.margin.margin_y)],
    [e - O - d, a.heights.vertical - C]
  ]), { nodes: _, links: B } = N(P), q = (de) => {
    var Qe;
    let Le = 30, ke = 0, Ie = "node-value--storynode", qe = !0;
    return (Qe = k == null ? void 0 : k.storyNodeText) != null && Qe.every((mt) => mt.StoryNode !== de) && (qe = !1, ke = 10, Le = 8, Ie = "node-value"), { textPositionHorizontal: Le, textPositionVertical: ke, classStyle: Ie, storyNodes: qe };
  }, U = (de) => {
    if (!(P != null && P.nodes))
      return { sourceNodes: [], activeLinks: [] };
    const Le = P.nodes.find((qe) => qe.id === de), ke = [], Ie = [];
    return Le && (B.forEach((qe) => {
      const Qe = qe.target, mt = qe.source;
      Qe.id === de && ke.push(mt.id);
    }), ke.forEach((qe) => {
      B.forEach((Qe) => {
        const mt = Qe.target, tt = Qe.source;
        mt.id === m && tt.id === qe && Ie.push(Qe);
      });
    })), { sourceNodes: ke, activeLinks: Ie };
  }, ne = `${(((je = k == null ? void 0 : k.tooltips) == null ? void 0 : je.find((de) => de.node === m)) || {}).value}`, re = `${(((Ze = k == null ? void 0 : k.tooltips) == null ? void 0 : Ze.find((de) => de.node === m)) || {}).summary}`, V = (((Ae = k == null ? void 0 : k.tooltips) == null ? void 0 : Ae.find((de) => de.node === m)) || {}).column1Label, Y = (((me = k == null ? void 0 : k.tooltips) == null ? void 0 : me.find((de) => de.node === m)) || {}).column2Label, J = (((Fe = k == null ? void 0 : k.tooltips) == null ? void 0 : Fe.find((de) => de.node === m)) || {}).column1, Z = (((ue = k == null ? void 0 : k.tooltips) == null ? void 0 : ue.find((de) => de.node === m)) || {}).column2, ae = ({ columnData: de }) => /* @__PURE__ */ r.createElement("ul", null, de == null ? void 0 : de.map((Le, ke) => /* @__PURE__ */ r.createElement("li", { key: ke }, Le.label, ": ", Le.value, " (", Le.additional_info, "%)"))), te = $a.renderToString(/* @__PURE__ */ r.createElement(ae, { columnData: J })), se = $a.renderToString(/* @__PURE__ */ r.createElement(ae, { columnData: Z })), G = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${m}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${ne}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${re}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${V}<strong></span>
                          ${te}
                        </div>
                        <div>
                          <span><strong>${Y}<strong></span>
                          ${se}
                        </div>
                      </div>
                    </div>`, Q = P.nodes.map((de, Le) => {
    var _e, we;
    let { textPositionHorizontal: ke, textPositionVertical: Ie, classStyle: qe, storyNodes: Qe } = q(de.id), { sourceNodes: mt } = U(m), tt = i.opacity.nodeOpacityDefault, Ve = i.nodeColor.default;
    return m !== de.id && m !== "" && !mt.includes(de.id) && (Ve = i.nodeColor.inactive, tt = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(it, { className: "", key: Le }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: de.y1 - de.y0 + 2,
        width: N.nodeWidth(),
        x: de.x0,
        y: de.y0 - 1,
        fill: Ve,
        fillOpacity: tt,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => x(de.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: de.x0 + ke,
        textAnchor: P.nodes.length - 1 === Le ? "end" : "start",
        verticalAnchor: "end",
        y: (de.y1 + de.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        className: "node-text",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((_e = k == null ? void 0 : k.storyNodeText) == null ? void 0 : _e.find((Je) => Je.StoryNode === de.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        verticalAnchor: "end",
        className: qe,
        x: de.x0 + ke,
        y: (de.y1 + de.y0 + 25) / 2,
        fill: i.storyNodeFontColor || i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      typeof de.value == "number" ? de.value.toLocaleString() : de.value
    ), /* @__PURE__ */ r.createElement(
      St,
      {
        x: de.x0 + ke,
        y: (de.y1 + de.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: P.nodes.length === Le ? "end" : "start",
        className: "node-text",
        verticalAnchor: "end",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      (((we = k == null ? void 0 : k.storyNodeText) == null ? void 0 : we.find((Je) => Je.StoryNode === de.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        x: de.x0 + ke,
        y: (de.y1 + de.y0) / 2 + Ie,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start"
      },
      de.id
    ), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: de.x0 + ke,
        y: (de.y1 + de.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.id),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      },
      /* @__PURE__ */ r.createElement("tspan", { className: qe }, i.nodeValueStyle.textBefore + (typeof de.value == "number" ? de.value.toLocaleString() : de.value) + i.nodeValueStyle.textAfter)
    )));
  }), K = B.map((de, Le) => {
    const Ie = FS()(de);
    let qe = i.opacity.LinkOpacityDefault, Qe = i.linkColor.default, { activeLinks: mt } = U(m);
    return !mt.includes(de) && m !== "" && (Qe = i.linkColor.inactive, qe = i.opacity.LinkOpacityInactive), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: Le,
        d: Ie,
        stroke: Qe,
        fill: "none",
        strokeOpacity: qe,
        strokeWidth: de.width + 2,
        style: { pointerEvents: "auto", cursor: "pointer" },
        onClick: () => x(de.target.id || null),
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`
      }
    );
  }), W = P.nodes.reduce((de, Le) => Math.max(de, Le.depth), -1), xe = P.nodes.filter((de) => de.depth === W).map((de, Le) => {
    var _e, we;
    let { textPositionHorizontal: ke, textPositionVertical: Ie, classStyle: qe, storyNodes: Qe } = q(de.id), { sourceNodes: mt } = U(m), tt = i.opacity.nodeOpacityDefault, Ve = i.nodeColor.default;
    return m !== de.id && m !== "" && !mt.includes(de.id) && (Ve = i.nodeColor.inactive, tt = i.opacity.nodeOpacityInactive), /* @__PURE__ */ r.createElement(it, { className: "", key: Le, innerRef: (Je) => u.current[Le] = Je }, /* @__PURE__ */ r.createElement(
      "rect",
      {
        height: de.y1 - de.y0 + 2,
        width: N.nodeWidth(),
        x: de.x0,
        y: de.y0 - 1,
        fill: Ve,
        fillOpacity: tt,
        rx: i.rxValue,
        "data-tooltip-html": k.tooltips && a.enableTooltips ? G : null,
        "data-tooltip-id": "tooltip",
        onClick: () => x(de.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Qe ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      St,
      {
        x: de.x0 + ke,
        textAnchor: P.nodes.length - 1 === Le ? "end" : "start",
        verticalAnchor: "end",
        y: (de.y1 + de.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((_e = k == null ? void 0 : k.storyNodeText) == null ? void 0 : _e.find((Je) => Je.StoryNode === de.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ r.createElement(St, { verticalAnchor: "end", className: qe, x: de.x0 + ke, y: (de.y1 + de.y0 + 25) / 2, fill: i.storyNodeFontColor || i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof de.value == "number" ? de.value.toLocaleString() : de.value), /* @__PURE__ */ r.createElement(
      St,
      {
        x: de.x0 + ke,
        y: (de.y1 + de.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: P.nodes.length === Le ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((we = k == null ? void 0 : k.storyNodeText) == null ? void 0 : we.find((Je) => Je.StoryNode === de.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("text", { x: de.x0 + ke, y: (de.y1 + de.y0) / 2 + Ie, dominantBaseline: "text-before-edge", fill: i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ r.createElement("tspan", { id: de.id, className: "node-id" }, de.id)), /* @__PURE__ */ r.createElement(
      "text",
      {
        x: de.x0 + ke,
        y: (de.y1 + de.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ r.createElement("tspan", { onClick: () => x(de.id), className: qe }, i.nodeValueStyle.textBefore + (typeof de.value == "number" ? de.value.toLocaleString() : de.value) + i.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ r.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(a.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ r.createElement(it, { className: "links" }, K), /* @__PURE__ */ r.createElement(it, { className: "nodes" }, Q), /* @__PURE__ */ r.createElement(it, { className: "finalNodes", style: { display: "none" } }, xe)), /* @__PURE__ */ r.createElement(ky, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => S(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), R && /* @__PURE__ */ r.createElement("div", { className: "popup" }, /* @__PURE__ */ r.createElement("div", { className: "popup-content" }, /* @__PURE__ */ r.createElement("button", { className: "visually-hidden", onClick: F }, "Select for accessible version."), /* @__PURE__ */ r.createElement("p", null, /* @__PURE__ */ r.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var HS = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = HS;
function WS(e) {
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
function VS(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, l = e.tickComponent, d = e.tickLabelProps, f = e.tickStroke, u = f === void 0 ? "#222" : f, m = e.tickTransform, y = e.ticks, x = e.strokeWidth, S = e.tickLineProps;
  return y.map(function(R) {
    var T, F = R.value, k = R.index, h = R.from, P = R.to, O = R.formattedValue, C = (T = d[k]) != null ? T : {}, N = Math.max(10, typeof C.fontSize == "number" && C.fontSize || 0), _ = P.y + (n && a !== ir.top ? N : 0);
    return /* @__PURE__ */ r.createElement(it, {
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
      y: _,
      formattedValue: O
    })) : /* @__PURE__ */ r.createElement(St, cs({
      x: P.x,
      y: _
    }, C), O));
  });
}
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
var Rh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function jS(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, l = e.hideTicks, d = e.horizontal, f = e.label, u = f === void 0 ? "" : f, m = e.labelClassName, y = e.labelOffset, x = y === void 0 ? 14 : y, S = e.labelProps, R = S === void 0 ? Rh : S, T = e.orientation, F = T === void 0 ? ir.bottom : T, k = e.scale, h = e.stroke, P = h === void 0 ? "#222" : h, O = e.strokeDasharray, C = e.strokeWidth, N = C === void 0 ? 1 : C, _ = e.tickClassName, B = e.tickComponent, q = e.tickLineProps, U = e.tickLabelProps, ne = e.tickLength, re = ne === void 0 ? 8 : ne, V = e.tickStroke, Y = V === void 0 ? "#222" : V, J = e.tickTransform, Z = e.ticks, ae = e.ticksComponent, te = ae === void 0 ? VS : ae, se = cc({}, Rh, typeof U == "object" ? U : null), G = Z.map(function(K) {
    var W = K.value, Ce = K.index;
    return typeof U == "function" ? U(W, Ce, Z) : se;
  }), Q = Math.max.apply(Math, [10].concat(G.map(function(K) {
    return typeof K.fontSize == "number" ? K.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, te({
    hideTicks: l,
    horizontal: d,
    orientation: F,
    scale: k,
    tickClassName: _,
    tickComponent: B,
    tickLabelProps: G,
    tickStroke: Y,
    tickTransform: J,
    ticks: Z,
    strokeWidth: N,
    tickLineProps: q
  }), !i && /* @__PURE__ */ r.createElement(un, {
    className: An("visx-axis-line", n),
    from: t,
    to: a,
    stroke: P,
    strokeWidth: N,
    strokeDasharray: O
  }), u && /* @__PURE__ */ r.createElement(St, cc({
    className: An("visx-axis-label", m)
  }, WS({
    labelOffset: x,
    labelProps: R,
    orientation: F,
    range: k.range(),
    tickLabelFontSize: Q,
    tickLength: re
  }), R), u));
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
  return "tickFormat" in t ? t.tickFormat() : Yg;
}
function Pu(e, t) {
  var n = e.x, a = e.y;
  return new Uy(t ? {
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
var Wd = 0;
function YS(e) {
  return e === void 0 && (e = Wd), typeof e == "number" ? {
    start: e,
    end: e
  } : bf({
    start: Wd,
    end: Wd
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
function Tc(e) {
  var t = e.children, n = t === void 0 ? jS : t, a = e.axisClassName, i = e.hideAxisLine, l = i === void 0 ? !1 : i, d = e.hideTicks, f = d === void 0 ? !1 : d, u = e.hideZero, m = u === void 0 ? !1 : u, y = e.innerRef, x = e.left, S = x === void 0 ? 0 : x, R = e.numTicks, T = R === void 0 ? 10 : R, F = e.orientation, k = F === void 0 ? ir.bottom : F, h = e.rangePadding, P = h === void 0 ? 0 : h, O = e.scale, C = e.tickFormat, N = e.tickLength, _ = N === void 0 ? 8 : N, B = e.tickValues, q = e.top, U = q === void 0 ? 0 : q, ne = qS(e, XS), re = C ?? KS(O), V = k === ir.left, Y = k === ir.top, J = Y || k === ir.bottom, Z = US(O), ae = V || Y ? -1 : 1, te = O.range(), se = YS(P), G = Pu({
    x: Number(te[0]) + 0.5 - se.start,
    y: 0
  }, J), Q = Pu({
    x: Number(te[te.length - 1]) + 0.5 + se.end,
    y: 0
  }, J), K = (B ?? Kg(O, T)).filter(function(Ce) {
    return !m || Ce !== 0 && Ce !== "0";
  }).map(function(Ce, xe) {
    return {
      value: Ce,
      index: xe
    };
  }), W = K.map(function(Ce) {
    var xe = Ce.value, fe = Ce.index, Re = Ug(Z(xe));
    return {
      value: xe,
      index: fe,
      from: Pu({
        x: Re,
        y: 0
      }, J),
      to: Pu({
        x: Re,
        y: _ * ae
      }, J),
      formattedValue: re(xe, fe, K)
    };
  });
  return /* @__PURE__ */ r.createElement(it, {
    className: An("visx-axis", a),
    innerRef: y,
    top: U,
    left: S
  }, n(Sf({}, ne, {
    axisFromPoint: G,
    axisToPoint: Q,
    hideAxisLine: l,
    hideTicks: f,
    hideZero: m,
    horizontal: J,
    numTicks: T,
    orientation: k,
    rangePadding: P,
    scale: O,
    tickFormat: re,
    tickLength: _,
    tickPosition: Z,
    tickSign: ae,
    ticks: W
  })));
}
var GS = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = ZS(e, GS), u = typeof d == "function" ? d : dc({}, QS, d);
  return /* @__PURE__ */ r.createElement(Tc, dc({
    axisClassName: An("visx-axis-left", t),
    labelOffset: a,
    orientation: ir.left,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var eE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = tE(e, eE), u = typeof d == "function" ? d : fc({}, nE, d);
  return /* @__PURE__ */ r.createElement(Tc, fc({
    axisClassName: An("visx-axis-right", t),
    labelOffset: a,
    orientation: ir.right,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var aE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = iE(e, aE), u = typeof d == "function" ? d : pc({}, oE, d);
  return /* @__PURE__ */ r.createElement(Tc, pc({
    axisClassName: An("visx-axis-top", t),
    labelOffset: a,
    orientation: ir.top,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
var sE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function zu(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, d = e.tickLabelProps, f = uE(e, sE), u = typeof d == "function" ? d : hc({}, cE, d);
  return /* @__PURE__ */ r.createElement(Tc, hc({
    axisClassName: An("visx-axis-bottom", t),
    labelOffset: a,
    orientation: ir.bottom,
    tickLabelProps: u,
    tickLength: l
  }, f));
}
const ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Fb,
  curveBasisClosed: Mb,
  curveBasisOpen: zb,
  curveBundle: Ib,
  curveCardinal: $b,
  curveCardinalClosed: Bb,
  curveCardinalOpen: Hb,
  curveCatmullRom: Wb,
  curveCatmullRomClosed: Vb,
  curveCatmullRomOpen: jb,
  curveLinear: xc,
  curveLinearClosed: Jd,
  curveMonotoneX: Mu,
  curveMonotoneY: Ub,
  curveNatural: Kb,
  curveStep: Yb,
  curveStepAfter: qb,
  curveStepBefore: Xb
}, Symbol.toStringTag, { value: "Module" })), dE = (e) => {
  var _, B;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, isDebug: f, children: u } = e;
  let { transformedData: m, config: y, handleLineType: x, parseDate: S, formatDate: R, formatNumber: T, seriesHighlight: F, colorScale: k, rawData: h, brushConfig: P } = ce.useContext(Et);
  const O = (_ = y.brush) != null && _.active && ((B = P.data) != null && B.length) ? P.data : m;
  if (!O)
    return;
  const C = (q) => (wn(y.xAxis) ? t(S(q[y.xAxis.dataKey], !1)) : t(q[y.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), N = (q, U, ne = void 0) => n(q[ne.dataKey]);
  return O && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Or, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(it, { className: "area-chart", key: "area-wrapper", left: Number(y.yAxis.size) }, (y.runtime.areaSeriesKeys || y.series).map((q, U) => {
    let ne = O.map((J) => ({
      [y.xAxis.dataKey]: J[y.xAxis.dataKey],
      [q.dataKey]: J[q.dataKey]
    })), re = ds[q.lineType], V = y.legend.behavior === "highlight" && F.length > 0 && F.indexOf(q.dataKey) === -1, Y = y.legend.behavior === "highlight" || F.length === 0 || F.indexOf(q.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: U }, /* @__PURE__ */ r.createElement(
      Nr,
      {
        data: ne,
        x: (J) => C(J),
        y: (J) => N(J, U, q),
        stroke: Y ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[q.dataKey] : q.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: re,
        strokeDasharray: q.type ? x(q.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      S0,
      {
        key: "area-chart",
        fill: Y ? k ? k(y.runtime.seriesLabels ? y.runtime.seriesLabels[q.dataKey] : q.dataKey) : "#000" : "transparent",
        fillOpacity: V ? 0.25 : 0.5,
        data: ne,
        x: (J) => C(J),
        y: (J) => N(J, U, q),
        yScale: n,
        curve: re,
        strokeDasharray: q.type ? x(q.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(kr, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (q) => l(q, h), onMouseLeave: d }))));
}, fE = ce.memo(dE), pE = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l, isDebug: d }) => {
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
  return S && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Or, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(it, { className: "area-chart", key: "area-wrapper", left: Number(u.yAxis.size) + T / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    A0,
    {
      data: S,
      keys: u.runtime.areaSeriesKeys.map((h) => h.dataKey) || u.series.map((h) => h.dataKey),
      x0: (h) => R(h.data[u.xAxis.dataKey]),
      y0: (h) => Number(t(h[0])),
      y1: (h) => Number(t(h[1])),
      curve: ds[Hu[u.stackedAreaChartLineType]]
    },
    ({ stacks: h, path: P }) => h.map((O, C) => {
      let N = u.legend.behavior === "highlight" && m.length > 0 && m.indexOf(O.key) === -1, _ = u.legend.behavior === "highlight" || m.length === 0 || m.indexOf(O.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: O.key,
            d: P(O) || "",
            strokeWidth: 2,
            stroke: _ ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[O.key] : O.key) : "#000" : "transparent",
            fillOpacity: N ? 0.2 : 1,
            fill: _ ? y ? y(u.runtime.seriesLabels ? u.runtime.seriesLabels[O.key] : O.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(kr, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (h) => i(h, x), onMouseLeave: l }))));
}, hE = ce.memo(pE), Cc = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: l, setSeriesHighlight: d, seriesHighlight: f } = ce.useContext(Et), { orientation: u } = e, [m, y] = ce.useState(null), x = u === "horizontal", S = 1, R = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, T = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, F = e.yAxis.labelPlacement === "Below Bar", k = e.yAxis.displayNumbersOnBar, h = e.orientation === "horizontal" ? "yAxis" : "xAxis", P = e.barStyle === "rounded", O = e.visualizationSubType === "stacked", C = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", _ = e.runtime.seriesKeys.length, B = { small: 16, medium: 18, large: 20 }, q = Object.keys(e.runtime.seriesLabels).length > 1, ne = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (f != null && f.length) ? f : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
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
    shouldSuppress: (Q) => {
      var K;
      return (K = e.preliminaryData) == null ? void 0 : K.some((W) => {
        const Ce = W.column ? W.column === Q.key : !0, xe = String(Q.value) === String(W.value) && W.value !== "";
        return Ce && xe && W.symbol && W.type === "suppression";
      });
    },
    section: h,
    isRounded: P,
    isStacked: O,
    tipRounding: C,
    radius: N,
    stackCount: _,
    barStackedSeriesKeys: ne,
    fontSize: B,
    hasMultipleSeries: q,
    applyRadius: (Q) => {
      if (Q == null || !P)
        return {};
      let K = {};
      return (O && Q + 1 === _ || !O) && (K = x ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !O && Q === -1 && (K = x ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), C === "full" && O && Q === 0 && _ > 1 && (K = x ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), C === "full" && (O && Q === 0 && _ === 1 || !O) && (K = { borderRadius: N }), K;
    },
    updateBars: (Q) => {
      if (e.visualizationType !== "Bar" && !x)
        return Q;
      const K = [...Q];
      let W;
      const Ce = {
        stacked: e.barHeight,
        lollipop: R
      };
      O ? W = Ce.stacked : W = Ce[e.isLollipopChart ? "lollipop" : "stacked"] * _;
      const xe = F ? B[e.fontSize] * 1.2 : 0;
      let fe = Number(e.barSpace), Re = K.length * (W + xe + fe);
      return x && (e.heights.horizontal = Re), K.map((je, Ze) => {
        let Ae = 0;
        return je.index !== 0 && (Ae = (W + fe + xe) * Ze), { ...je, y: Ae, height: W };
      });
    },
    assignColorsToValues: (Q, K, W) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return W;
      const Ce = e.customColors ?? t[e.palette], xe = n.map((Ze) => Ze[e.legend.colorCode]);
      let fe = /* @__PURE__ */ new Map(), Re = [];
      for (let Ze = 0; Ze < xe.length; Ze++)
        fe.has(xe[Ze]) || fe.set(xe[Ze], Ce[fe.size % Ce.length]), Re.push(fe.get(xe[Ze]));
      for (; Re.length < Q; )
        Re = Re.concat(Re);
      return Re[K];
    },
    getHighlightedBarColorByValue: (Q) => {
      const K = e == null ? void 0 : e.highlightedBarValues.find((W) => {
        if (W.value)
          return e.xAxis.type === "date" ? l(i(W.value)) === Q : W.value === Q;
      });
      return K != null && K.color ? K.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (Q) => {
      const K = e == null ? void 0 : e.highlightedBarValues.filter((W) => {
        if (W.value)
          return e.xAxis.type === "date" ? l(i(W.value)) === Q : W.value === Q;
      })[0];
      return K != null && K.color ? K : !1;
    },
    getAdditionalColumn: (Q, K) => {
      if (!K)
        return "";
      const W = e.columns, Ce = [];
      let xe = "";
      const fe = n.find((Re) => Re[e.xAxis.dataKey] === K) || {};
      return Object.keys(W).forEach((Re) => {
        if (Q && e.columns[Re].series && e.columns[Re].series !== Q)
          return;
        const je = {
          addColPrefix: e.columns[Re].prefix,
          addColSuffix: e.columns[Re].suffix,
          addColRoundTo: e.columns[Re].roundToPlace ? e.columns[Re].roundToPlace : "",
          addColCommas: e.columns[Re].commas
        }, Ze = Ef(fe[e.columns[Re].name], "left", !0, e, je);
        e.columns[Re].tooltips && Ce.push([e.columns[Re].label, Ze]);
      }), Ce.forEach((Re) => {
        xe += `${Re[0]} : ${Re[1]} <br/>`;
      }), xe;
    },
    hoveredBar: m,
    setHoveredBar: y,
    onMouseOverBar: (Q, K) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && K && d([K]), y(Q);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && d([]);
    }
  };
}, ws = ce.createContext(null), Yf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: l, handleTooltipClick: d, tooltipData: f, showTooltip: u, hideTooltip: m }) => {
  const { parseDate: y, config: x } = ce.useContext(Et), { runtime: S, regions: R, visualizationType: T, orientation: F, xAxis: k } = x, h = e.domain(), P = (N) => {
    let _;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const B = new Date(N.from), q = y(ql(x.xAxis.dateParseFormat, B)).getTime();
      _ = e(q), T === "Bar" && k.type === "date-time" && (_ = _ - t * n / 2);
    }
    if (N.fromType === "Previous Days") {
      const B = Number(N.from) || 0;
      h.map((re) => ql(x.xAxis.dateParseFormat, new Date(re)));
      const q = N.toType === "Last Date" ? new Date(h[h.length - 1]).getTime() : new Date(N.to), U = x.xAxis.type === "categorical" ? ql(x.xAxis.dateParseFormat, q) : ql(x.xAxis.dateParseFormat, q), ne = new Date(U);
      if (_ = new Date(ne.setDate(ne.getDate() - Number(B))), k.type === "date") {
        _ = new Date(ql(k.dateParseFormat, _)).getTime();
        let re = h[0], V = Math.abs(_ - re);
        for (let Y = 1; Y < h.length; Y++) {
          const J = Math.abs(_ - h[Y]);
          J < V && (V = J, re = h[Y]);
        }
        _ = re;
      }
      if (k.type === "categorical") {
        let re = h[0], V = Math.abs(new Date(_).getTime() - new Date(re).getTime());
        for (let Y = 1; Y < h.length; Y++) {
          const J = Math.abs(new Date(_).getTime() - new Date(h[Y]).getTime());
          J < V && (V = J, re = h[Y]);
        }
        _ = re;
      }
      _ = e(_);
    }
    if (k.type === "categorical" && N.fromType !== "Previous Days" && (_ = e(N.from)), T === "Line" || T === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), _ = _ + B;
    }
    return T === "Bar" && x.xAxis.type === "date-time" && N.fromType === "Previous Days" && (_ = _ - t * n / 2), _;
  }, O = (N) => {
    let _;
    if (k.type === "categorical" && (_ = e(N.to)), wn(k) && ((!(N != null && N.toType) || N.toType === "Fixed") && (_ = e(y(N.to).getTime())), (T === "Bar" || x.visualizationType === "Combo") && (_ = N.toType !== "Last Date" ? e(y(N.to).getTime()) + t * n : _)), N.toType === "Last Date") {
      const B = h[h.length - 1];
      _ = Number(e(B) + ((T === "Bar" || T === "Combo") && x.xAxis.type === "date" ? t * n : 0));
    }
    if (T === "Line" || T === "Area Chart") {
      let B = Number(x.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), _ = _ + B;
    }
    return T === "Bar" && x.xAxis.type === "date-time" && N.toType !== "Last Date" && (_ = _ - t * n / 2), (T === "Bar" || T === "Combo") && k.type === "categorical" && (_ = _ + (T === "Bar" || T === "Combo" ? t * n : 0)), _;
  }, C = (N, _) => N - _;
  if (R && F === "vertical")
    return R.map((N) => {
      const _ = P(N), B = O(N), q = C(B, _);
      if (!_ || !B)
        return null;
      const U = () => /* @__PURE__ */ r.createElement(
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
      ), ne = () => /* @__PURE__ */ r.createElement("rect", { x: _, y: 0, width: q, height: a, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(it, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: l, onMouseLeave: i, handleTooltipClick: d, tooltipData: JSON.stringify(f), showTooltip: u }, /* @__PURE__ */ r.createElement(U, null), /* @__PURE__ */ r.createElement(ne, null), /* @__PURE__ */ r.createElement(St, { x: _ + q / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Ac(e) {
  var K, W;
  const { config: t, index: n, id: a, className: i, background: l, borderColor: d, borderWidth: f, width: u, height: m, x: y, y: x, onMouseOver: S, onMouseLeave: R, onClick: T, tooltipHtml: F, tooltipId: k, styleOverrides: h, seriesHighlight: P } = e, O = Math.max(0, u), C = Math.max(0, m), N = t.orientation === "horizontal", _ = t.barStyle === "rounded", B = t.visualizationSubType === "stacked", q = t.tipRounding, U = t.visualizationType === "Combo" && ((W = (K = t.runtime) == null ? void 0 : K.barSeriesKeys) == null ? void 0 : W.length), ne = t.runtime.seriesKeys.length, re = t.visualizationType === "Bar" && t.legend.axisAlign && (P != null && P.length) ? P == null ? void 0 : P.length : 0, V = U || re || ne;
  let Y = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (Y > O / 2 || Y > C / 2) && (Y = Math.min(O / 2, C / 2));
  const J = () => `M${y},${x + C}
      L${y},${x + Y}
      Q${y},${x} ${y + Y},${x}
      L${y + O - Y},${x}
      Q${y + O},${x} ${y + O},${x + Y}
      L${y + O},${x + C}
      L${y},${x + C}`, Z = () => `M${y},${x + C}
      L${y},${x}
      L${y + O - Y},${x}
      Q${y + O},${x} ${y + O},${x + Y}
      L${y + O},${x + C - Y}
      Q${y + O},${x + C} ${y + O - Y},${x + C}
      L${y},${x + C}`, ae = () => `M${y + Y},${x + C}
      Q${y},${x + C} ${y},${x + C - Y}
      L${y},${x}
      L${y + O},${x}
      L${y + O},${x + C - Y}
      Q${y + O},${x + C} ${y + O - Y},${x + C}
      L${y + Y},${x + C}`, te = () => `M${y + Y},${x + C}
      Q${y},${x + C} ${y},${x + C - Y}
      L${y},${x + Y}
      Q${y},${x} ${y + Y},${x}
      L${y + O},${x}
      L${y + O},${x + C}
      L${y + Y},${x + C}`, se = () => `M${y + Y},${x + C}
      Q${y},${x + C} ${y},${x + C - Y}
      L${y},${x + Y}
      Q${y},${x} ${y + Y},${x}
      L${y + O - Y},${x}
      Q${y + O},${x} ${y + O},${x + Y}
      L${y + O},${x + C - Y}
      Q${y + O},${x + C} ${y + O - Y},${x + C}
      L${y + Y},${x + C}`, G = () => `M${y},${x}
      L${y + O},${x}
      L${y + O},${x + C}
      L${y},${x + C}
      L${y},${x}`;
  let Q;
  return n == null || !_ ? Q = G() : (Q = G(), (B && n + 1 === V || !B) && (Q = N ? Z() : J()), !B && n === -1 && (Q = N ? te() : ae()), q === "full" && B && n === 0 && V > 1 && (Q = N ? te() : ae()), q === "full" && (B && n === 0 && V === 1 || !B) && (Q = se())), /* @__PURE__ */ r.createElement(
    "path",
    {
      id: a,
      className: i,
      d: Q,
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
const mE = () => {
  var ne, re;
  const [e, t] = ce.useState(0), { xScale: n, yScale: a, seriesScale: i, xMax: l, yMax: d } = ce.useContext(ws), { transformedData: f, colorScale: u, seriesHighlight: m, config: y, formatNumber: x, formatDate: S, parseDate: R, setSharedFilter: T } = ce.useContext(Et), { isHorizontal: F, barBorderWidth: k, applyRadius: h, hoveredBar: P, getAdditionalColumn: O, onMouseLeaveBar: C, onMouseOverBar: N, barStackedSeriesKeys: _ } = Cc(), { orientation: B } = y, q = (ne = y.brush) != null && ne.active && ((re = y.brush.data) != null && re.length) ? y.brush.data : f, U = y.runtime.xAxis.type === "date-time" || y.runtime.xAxis.type === "date";
  return y.visualizationSubType === "stacked" && !F && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(_0, { data: q, keys: _, x: (V) => V[y.runtime.xAxis.dataKey], xScale: n, yScale: a, color: u }, (V) => V.reverse().map(
    (Y) => Y.bars.map((J) => {
      let Z = y.legend.behavior === "highlight" && m.length > 0 && m.indexOf(J.key) === -1, ae = y.legend.behavior === "highlight" || m.length === 0 || m.indexOf(J.key) !== -1, te = U ? i.range()[1] - i.range()[0] : l / Y.bars.length;
      y.runtime.xAxis.type !== "date" && (te = y.barThickness * te);
      const se = J.bar.data[y.runtime.xAxis.dataKey], G = U ? S(R(se)) : se, Q = x(J.bar ? J.bar.data[J.key] : 0, "left");
      if (!Q)
        return;
      const K = n(U ? R(se) : se) - (U ? te / 2 : 0), W = y.runtime.xAxis.label ? `${y.runtime.xAxis.label}: ${G}` : G, Ce = O(P), xe = `${y.runtime.seriesLabels[J.key]}: ${Q}`, fe = `<ul>
                  <li class="tooltip-heading"">${W}</li>
                  <li class="tooltip-body ">${xe}</li>
                  <li class="tooltip-body ">${Ce}</li>
                    </li></ul>`;
      return t(te), /* @__PURE__ */ r.createElement(it, { key: `${Y.index}--${J.index}--${B}` }, /* @__PURE__ */ r.createElement(it, { key: `bar-stack-${Y.index}-${J.index}`, id: `barStack${Y.index}-${J.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(St, { display: y.labels && ae ? "block" : "none", opacity: Z ? 0.5 : 1, x: K + e / 2, y: J.y - 5, fill: "#000", textAnchor: "middle" }, Q), Ac({
        config: y,
        seriesHighlight: m,
        index: Y.index,
        background: u(y.runtime.seriesLabels[J.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${y.barHasBorder === "true" ? k : 0}px`,
        width: te,
        height: J.height,
        x: K,
        y: J.y,
        onMouseOver: () => N(G, J.key),
        onMouseLeave: C,
        tooltipHtml: fe,
        tooltipId: `cdc-open-viz-tooltip-${y.runtime.uniqueId}`,
        onClick: (Re) => {
          Re.preventDefault(), T && (J[y.xAxis.dataKey] = G, T(y.uid, J));
        },
        styleOverrides: {
          animationDelay: `${Y.index * 0.5}s`,
          transformOrigin: `${te / 2}px ${J.y + J.height}px`,
          opacity: Z ? 0.2 : 1,
          display: ae ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ r.createElement(Yf, { xScale: n, yMax: d, barWidth: e, totalBarsInGroup: 1 }));
}, yE = () => {
  const { yMax: e, yScale: t, xScale: n } = ce.useContext(ws), {
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
  } = ce.useContext(Et), { barBorderWidth: R, displayNumbersOnBar: T, fontSize: F, getAdditionalColumn: k, hoveredBar: h, isHorizontal: P, isLabelBelowBar: O, onMouseLeaveBar: C, onMouseOverBar: N, updateBars: _, barStackedSeriesKeys: B } = Cc(), { orientation: q, visualizationSubType: U } = l;
  return l.visualizationSubType === "stacked" && P && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(F0, { data: S, keys: B, height: e, y: (ne) => ne[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (ne) => ne.map(
    (re) => _(re.bars).map((V, Y) => {
      const J = l.legend.behavior === "highlight" && y.length > 0 && y.indexOf(V.key) === -1, Z = l.legend.behavior === "highlight" || y.length === 0 || y.indexOf(V.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const ae = Uo("#000", i(l.runtime.seriesLabels[V.key])), te = f(S[V.index][V.key], "left"), se = l.runtime.yAxis.type === "date" ? d(m(S[V.index][l.runtime.originalXAxis.dataKey])) : S[V.index][l.runtime.originalXAxis.dataKey], G = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${se}` : se, Q = u(te, `normal ${F[l.fontSize]}px sans-serif`), K = k(h), W = `${l.runtime.seriesLabels[V.key]}: ${te}`, Ce = `<ul>
                  <li class="tooltip-heading"">${G}</li>
                  <li class="tooltip-body ">${W}</li>
                  <li class="tooltip-body ">${K}</li>
                    </li></ul>`;
      return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(it, { key: Y, id: `barStack${re.index}-${V.index}`, className: "stack horizontal" }, Ac({
        config: l,
        seriesHighlight: y,
        index: re.index,
        className: `animated-chart group ${a ? "animated" : ""}`,
        background: i(l.runtime.seriesLabels[V.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? R : 0}px`,
        width: V.width,
        height: V.height,
        x: V.x,
        y: V.y,
        onMouseOver: () => N(se, V.key),
        onMouseLeave: C,
        tooltipHtml: Ce,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), x && (V[l.xAxis.dataKey] = te, x(l.uid, V));
        },
        styleOverrides: {
          animationDelay: `${re.index * 0.5}s`,
          transformOrigin: `${V.x}px 0`,
          opacity: J ? 0.2 : 1,
          display: Z ? "block" : "none"
        }
      }), q === "horizontal" && U === "stacked" && O && re.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        St,
        {
          x: `${V.x + (l.isLollipopChart ? 15 : 5)}`,
          y: V.y + V.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        se
      ), T && Q < V.width && /* @__PURE__ */ r.createElement(
        St,
        {
          display: Z ? "block" : "none",
          x: V.x + re.bars[V.index].width / 2,
          y: V.y + V.height / 2,
          fill: ae,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        te
      )));
    })
  )));
}, wy = ({ bar: e, defaultBarHeight: t, defaultBarWidth: n, config: a, isNumber: i, getTextWidth: l, barWidth: d, isVertical: f }) => {
  let m = t, y = n, x = "", S = !1, R = !1, T = !1;
  const F = a.general.showSuppressedSymbol;
  if (a.preliminaryData.forEach((P) => {
    (!P.column || P.column === e.key) && P.type === "suppression" && P.value && String(P.value) === String(e.value) && (!P.hideBarSymbol && F ? (m = d > 10 ? 3 : 0, y = 3, S = !0) : (m = 0, y = 0, S = !0));
  }), !S && !i(e.value) && a.general.showMissingDataLabel) {
    const O = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    R = !0, m = O ? 3 : 0, y = 3;
  }
  if (!S && String(e.value) === "0" && a.general.showZeroValueDataLabel) {
    const O = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    m = a.isLollipopChart ? 3 * 2 : !a.isLollipopChart && O ? 3 : 0, y = 3, T = !0;
  }
  return { barWidthHorizontal: y, barHeight: m, isSuppressed: S, showMissingDataLabel: R, showZeroValueDataLabel: T, getBarY: (P, O) => S || R || T ? a.isLollipopChart ? O - 3 * 2 : O - 3 : P, getAbsentDataLabel: (P) => {
    let O = "";
    String(P) === "0" && (O = ""), S && (O = ""), R && (O = "N/A"), T && (O = "0");
    const N = l(x, `normal ${d / 2}px sans-serif`) < d && d > 10;
    return a.isLollipopChart || N && f ? O : f ? "" : O;
  } };
}, fs = (e) => /^0(\.0)?$/.test(e.toString()), Lc = (e, t, n) => !!(e === "Line" && (t == null ? void 0 : t.length) < 3 && n), gE = () => {
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = ce.useContext(ws), [l, d] = ce.useState(0), [f, u] = ce.useState(0), {
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
  } = Cc(), { colorScale: O, config: C, dashboardConfig: N, tableData: _, formatDate: B, formatNumber: q, getXAxisData: U, getYAxisData: ne, isNumber: re, parseDate: V, seriesHighlight: Y, setSharedFilter: J, transformedData: Z, brushConfig: ae, getTextWidth: te } = ce.useContext(Et), { HighLightedBarUtils: se } = Ec(C);
  let G = Z;
  return C.preliminaryData.some((K) => K.value && K.type === "suppression") && (G = _), ae.data.length && (G = ae.data), C.visualizationSubType !== "stacked" && (C.visualizationType === "Bar" || C.visualizationType === "Combo" || Lc(C.visualizationType, G, C.allowLineToBarGraph)) && C.orientation === "vertical" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(
    Km,
    {
      data: G,
      keys: C.runtime.barSeriesKeys || C.runtime.seriesKeys,
      height: a,
      x0: (K) => {
        const W = K[C.runtime.originalXAxis.dataKey];
        return wn(C.runtime.xAxis) ? V(W) : W;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (K) => K.map((W, Ce) => /* @__PURE__ */ r.createElement(it, { className: `bar-group-${W.index}-${W.x0}--${Ce} ${C.orientation}`, key: `bar-group-${W.index}-${W.x0}--${Ce}`, id: `bar-group-${W.index}-${W.x0}--${Ce}`, left: W.x0 }, W.bars.map((xe, fe) => {
      const Re = C.useLogScale ? 0.1 : 0;
      let je = C.highlightedBarValues.map((wt) => wt.value).filter((wt) => wt !== void 0);
      je = C.xAxis.type === "date" ? se.formatDates(je) : je;
      const Ze = C.legend.behavior === "highlight" && Y.length > 0 && Y.indexOf(xe.key) === -1, Ae = C.legend.behavior === "highlight" || Y.length === 0 || Y.indexOf(xe.key) !== -1;
      let me = i.range()[1] - i.range()[0];
      const Fe = Math.abs(t(xe.value) - t(Re)), ue = xe.value >= 0 && re(xe.value) ? xe.y : t(0);
      let de = C.isLollipopChart ? T : i.bandwidth(), Le = xe.x + (C.isLollipopChart ? (me / W.bars.length - T) / 2 : 0) - (C.xAxis.type === "date-time" ? me / 2 : 0);
      d(de), u(W.bars.length);
      const ke = q(/[a-zA-Z]/.test(String(xe.value)) ? "" : xe.value, "left"), Ie = C.runtime[P].type === "date" ? B(V(G[W.index][C.runtime.originalXAxis.dataKey])) : G[W.index][C.runtime.originalXAxis.dataKey], qe = xe.value < 0 ? -1 : fe, Qe = x(xe.key, G[W.index][C.runtime.originalXAxis.dataKey]);
      let mt = C.runtime.xAxis.label ? `${C.runtime.xAxis.label}: ${Ie}` : Ie;
      const tt = `${C.runtime.seriesLabels[xe.key]}: ${ke}`, Ve = `<ul>
                  <li class="tooltip-heading">${mt}</li>
                  <li class="tooltip-body ">${tt}</li>
                  ${Qe ? '<li class="tooltip-body ">' + Qe + "</li>" : ""}
                    </li></ul>`;
      let _e = "#000000";
      _e = se.checkFontColor(ke, je, _e);
      let we = C.runtime.seriesLabels && C.runtime.seriesLabels[xe.key] ? O(C.runtime.seriesLabels[xe.key]) : O(xe.key);
      we = m(K.length, W.index, we);
      const Je = C.isLollipopChart && C.lollipopColorStyle === "regular", Ge = C.isLollipopChart && C.lollipopColorStyle === "two-tone", dt = je == null ? void 0 : je.includes(Ie), bt = R(Ie), yt = S(Ie), _t = dt ? bt : C.barHasBorder === "true" ? "#000" : "transparent", an = dt ? yt.borderWidth : C.isLollipopChart ? 0 : C.barHasBorder === "true" ? y : 0, { barHeight: on, isSuppressed: Xt, getBarY: Jt, getAbsentDataLabel: Kt } = wy({ bar: xe, defaultBarHeight: Fe, config: C, isNumber: re, getTextWidth: te, barWidth: de, isVertical: !0, yAxisValue: ke }), At = Kt(ke), Mt = C.labels ? ke : "", Vt = Jt(ue, t(Re)), $e = fs(xe.value) ? "none" : "block", en = (wt, zt) => {
        var xn;
        let pt = wt, tn = zt || "#f2f2f2";
        if (N && ((xn = N.dashboard.sharedFilters) == null ? void 0 : xn.length) !== 0) {
          const { sharedFilters: Ft } = N.dashboard;
          return pt = Ft ? Ft.map((nn) => nn.setBy === C.uid ? nn.resetLabel === nn.active || nn.active === Z[W.index][C.xAxis.dataKey] ? O(C.runtime.seriesLabels[xe.key]) : tn : O(C.runtime.seriesLabels[xe.key]))[0] : O(C.runtime.seriesLabels[xe.key]), Je && (pt = wt), Ge && (pt = ms(wt).brighten(1)), dt && (pt = "transparent"), pt;
        }
        return Ge && (pt = ms(wt).brighten(1)), dt && (pt = "transparent"), pt;
      };
      return /* @__PURE__ */ r.createElement(it, { key: `${W.index}--${fe}` }, /* @__PURE__ */ r.createElement(it, { key: `bar-sub-group-${W.index}-${W.x0}-${Vt}--${fe}` }, Ac({
        config: C,
        index: qe,
        id: `barGroup${W.index}`,
        background: en(O(C.runtime.seriesLabels[xe.key])),
        borderColor: _t,
        borderStyle: "solid",
        borderWidth: `${an}px`,
        width: de,
        height: on,
        x: Le,
        y: Vt,
        onMouseOver: () => h(Ie, xe.key),
        onMouseLeave: k,
        tooltipHtml: Ve,
        tooltipId: `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
        onClick: (wt) => {
          wt.preventDefault(), J && (xe[C.xAxis.dataKey] = Ie, J(C.uid, xe));
        },
        styleOverrides: {
          transformOrigin: `0 ${Vt + on}px`,
          opacity: Ze ? 0.2 : 1,
          display: Ae ? "block" : "none",
          cursor: N ? "pointer" : "default"
        }
      }), C.preliminaryData.map((wt, zt) => {
        const pt = !wt.column || wt.column === xe.key;
        if (!(String(wt.value) === String(xe.value) && wt.value !== "" && pt) || de < 10 || !C.general.showSuppressedSymbol || wt.hideBarSymbol)
          return;
        const Ft = String(wt.symbol).includes("Asterisk"), nn = Ft ? -5 : -8, Ln = Ft ? "middle" : "end", Yt = wt.symbol === "Asterisk" ? de * 1.2 : wt.symbol === "Double Asterisk" ? de : de / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: zt,
            dy: nn,
            display: Ae ? "block" : "none",
            opacity: Ze ? 0.5 : 1,
            x: Le + de / 2,
            y: Vt,
            verticalAnchor: Ln,
            fill: _e,
            textAnchor: "middle",
            fontSize: `${Yt}px`
          },
          wt.iconCode
        );
      }), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Ae ? "block" : "none",
          opacity: Ze ? 0.5 : 1,
          x: Le + de / 2,
          y: Vt - 5,
          fill: _e,
          textAnchor: "middle"
        },
        fs(xe.value) ? "" : Mt
      ), /* @__PURE__ */ r.createElement(
        St,
        {
          display: Ae ? "block" : "none",
          opacity: Ze ? 0.5 : 1,
          x: Le + de / 2,
          y: Vt - 5,
          fill: _e,
          textAnchor: "middle",
          fontSize: C.isLollipopChart ? null : de / 2
        },
        At
      ), C.isLollipopChart && C.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: $e,
          cx: Le + F / 3.5,
          cy: xe.y,
          r: F / 2,
          fill: we,
          key: `circle--${xe.index}`,
          "data-tooltip-html": Ve,
          "data-tooltip-id": `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), C.isLollipopChart && C.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: $e,
          x: Le - T / 2,
          y: Vt,
          width: F,
          height: F,
          fill: we,
          key: `circle--${xe.index}`,
          "data-tooltip-html": Ve,
          "data-tooltip-id": `cdc-open-viz-tooltip-${C.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${F}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(C.confidenceKeys).length > 0 ? G.map((K) => {
    let W, Ce, xe, fe, Re = 5;
    return W = e(U(K)) + (C.xAxis.type !== "date-time" ? i.range()[1] / 2 : 0), xe = t(ne(K, C.confidenceKeys.lower)), fe = t(ne(K, C.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${Ce}-${K[C.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${W - Re} ${xe}
                    L${W + Re} ${xe}
                    M${W} ${xe}
                    L${W} ${fe}
                    M${W - Re} ${fe}
                    L${W + Re} ${fe}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(Yf, { xScale: e, yMax: a, barWidth: l, totalBarsInGroup: f }));
}, vE = () => {
  var se;
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = ce.useContext(ws), { transformedData: i, tableData: l, colorScale: d, seriesHighlight: f, config: u, formatNumber: m, formatDate: y, parseDate: x, setSharedFilter: S, isNumber: R, getTextWidth: T, getYAxisData: F, getXAxisData: k } = ce.useContext(Et), { isHorizontal: h, barBorderWidth: P, updateBars: O, assignColorsToValues: C, section: N, fontSize: _, isLabelBelowBar: B, displayNumbersOnBar: q, lollipopBarWidth: U, lollipopShapeSize: ne, getHighlightedBarColorByValue: re, getHighlightedBarByValue: V, getAdditionalColumn: Y, hoveredBar: J, onMouseLeaveBar: Z, onMouseOverBar: ae } = Cc(), { HighLightedBarUtils: te } = Ec(u);
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(
    Km,
    {
      data: (se = u.preliminaryData) != null && se.some((G) => G.value && G.type === "suppression") ? l : i,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: n,
      x0: (G) => G[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (G) => O(G).map((Q, K) => /* @__PURE__ */ r.createElement(it, { className: `bar-group-${Q.index}-${Q.x0}--${K} ${u.orientation}`, key: `bar-group-${Q.index}-${Q.x0}--${K}`, id: `bar-group-${Q.index}-${Q.x0}--${K}`, top: Q.y }, Q.bars.map((W, Ce) => {
      var xn;
      const xe = u.useLogScale ? 0.1 : 0;
      let fe = u.highlightedBarValues.map((Ft) => Ft.value).filter((Ft) => Ft !== void 0);
      fe = u.xAxis.type === "date" ? te.formatDates(fe) : fe;
      let Re = u.legend.behavior === "highlight" && f.length > 0 && f.indexOf(W.key) === -1, je = u.legend.behavior === "highlight" || f.length === 0 || f.indexOf(W.key) !== -1, Ze = u.barHeight, Ae = parseInt(u.isLollipopChart ? U : Ze);
      isNaN(Ae) && (Ae = 25);
      let me = W.value >= 0 && R(W.value) ? W.y : t(xe);
      const Fe = Math.abs(e(W.value) - e(xe)), ue = W.value >= 0 && R(W.value), { barWidthHorizontal: de, isSuppressed: Le, getAbsentDataLabel: ke } = wy({ bar: W, defaultBarWidth: Fe, config: u, isNumber: R, getTextWidth: T, isVertical: !1 }), Ie = W.value < 0 ? Math.abs(e(W.value)) : e(xe), qe = m(W.value, "left"), Qe = u.runtime[N].type === "date" ? y(x(i[Q.index][u.runtime.originalXAxis.dataKey])) : i[Q.index][u.runtime.originalXAxis.dataKey], mt = ue ? "above" : "below", tt = ke(qe), Ve = u.yAxis.displayNumbersOnBar ? qe : "", _e = T(Ve, `normal ${_[u.fontSize]}px sans-serif`), we = Number(_e) < Fe - 5;
      let Je = we ? "end" : "start", Ge = "start", dt = we ? -5 : 5, bt = 10;
      mt === "below" && (Je = we ? "start" : "end", dt = we ? 5 : -5, u.isLollipopChart && (Ge = "end", bt = -10));
      const yt = W.value < 0 ? -1 : Ce;
      let _t = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Qe}` : Qe;
      const an = Y(J), on = `${u.runtime.seriesLabels[W.key]}: ${qe}`, Xt = `<ul>
                  <li class="tooltip-heading"">${_t}</li>
                  <li class="tooltip-body ">${on}</li>
                  <li class="tooltip-body ">${an}</li>
                    </li></ul>`;
      let Jt = "#000000";
      Jt = te.checkFontColor(qe, fe, Jt);
      let Kt = u.runtime.seriesLabels && u.runtime.seriesLabels[W.key] ? d(u.runtime.seriesLabels[W.key]) : d(W.key);
      Kt = C(G.length, Q.index, Kt);
      const At = u.isLollipopChart && u.lollipopColorStyle === "regular", Mt = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Vt = fe == null ? void 0 : fe.includes(Qe), $e = re(Qe), en = V(Qe), wt = Vt ? $e : u.barHasBorder === "true" ? "#000" : "transparent", zt = Vt ? en.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? P : 0, pt = fs(W.value) ? "none" : "block";
      Kt && Jt && we && (Jt = Uo("#000", Kt));
      const tn = () => At ? Kt : Mt ? ms(Kt).brighten(1) : Vt ? "transparent" : Kt;
      return /* @__PURE__ */ r.createElement(it, { key: `${Q.index}--${Ce}` }, /* @__PURE__ */ r.createElement(it, { key: `bar-sub-group-${Q.index}-${Q.x0}-${me}--${Ce}` }, Ac({
        config: u,
        index: yt,
        id: `barGroup${Q.index}`,
        background: tn(),
        borderColor: wt,
        borderStyle: "solid",
        borderWidth: `${zt}px`,
        width: de,
        height: Ae,
        x: Ie,
        y: Ze * W.index,
        onMouseOver: () => ae(Qe, W.key),
        onMouseLeave: Z,
        tooltipHtml: Xt,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: (Ft) => {
          Ft.preventDefault(), S && (W[u.xAxis.dataKey] = qe, S(u.uid, W));
        },
        styleOverrides: {
          transformOrigin: `0 ${me + Ze}px`,
          opacity: Re ? 0.2 : 1,
          display: je ? "block" : "none"
        }
      }), (xn = u.preliminaryData) == null ? void 0 : xn.map((Ft, nn) => {
        const Ln = !Ft.column || Ft.column === W.key;
        if (!(String(Ft.value) === String(W.value) && Ft.value !== "" && Ln) || Ft.hideBarSymbol || !u.general.showSuppressedSymbol)
          return;
        const Hn = String(Ft.symbol).includes("Asterisk") ? "middle" : "end", Mn = Ft.symbol === "Asterisk" ? Ze * 1.2 : Ft.symbol === "Double Asterisk" ? Ze : Ze / 1.5;
        return /* @__PURE__ */ r.createElement(
          St,
          {
            key: nn,
            fontSize: Mn,
            display: je ? "block" : "none",
            opacity: Re ? 0.5 : 1,
            x: Ie,
            y: u.barHeight / 2 + u.barHeight * W.index,
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
          display: je ? "block" : "none",
          x: W.y,
          opacity: Re ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * W.index,
          fill: Jt,
          dx: dt,
          verticalAnchor: "middle",
          textAnchor: Je
        },
        fs(W.value) ? "" : Ve
      ), /* @__PURE__ */ r.createElement(
        St,
        {
          display: je ? "block" : "none",
          x: W.y,
          opacity: Re ? 0.5 : 1,
          y: u.barHeight / 2 + u.barHeight * W.index,
          fill: Jt,
          dx: tt === "N/A" ? 20 : dt,
          dy: u.isLollipopChart ? -10 : 0,
          verticalAnchor: "middle",
          textAnchor: tt === "N/A" ? "middle" : Je
        },
        tt
      ), u.isLollipopChart && /* @__PURE__ */ r.createElement(
        St,
        {
          display: je ? "block" : "none",
          x: W.y,
          y: 0,
          fill: "#000000",
          dx: bt,
          textAnchor: Ge,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        fs(W.value) ? "" : Ve
      ), B && !u.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: u.yAxis.hideAxis ? 0 : 5, y: Q.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? y(x(i[Q.index][u.runtime.originalXAxis.dataKey])) : h ? i[Q.index][u.runtime.originalXAxis.dataKey] : m(i[Q.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: pt,
          cx: W.y,
          cy: Ze * W.index + U / 2,
          r: ne / 2,
          fill: Kt,
          key: `circle--${W.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: pt,
          x: W.y > 10 ? W.y - ne / 2 : 0,
          y: 0 - U / 2,
          width: ne,
          height: ne,
          fill: Kt,
          key: `circle--${W.index}`,
          "data-tooltip-html": Xt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${ne}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? i.map((G) => {
    let Q, K, W, Ce = 5;
    return Q = t(k(G)) - 0.75 * u.barHeight, K = e(F(G, u.confidenceKeys.upper)), W = e(F(G, u.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${Q}-${G[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${W} ${Q - Ce}
                    L${W} ${Q + Ce}
                    M${W} ${Q}
                    L${K} ${Q}
                    M${K} ${Q - Ce}
                    L${K} ${Q + Ce} `
      }
    );
  }) : "");
}, Ru = {
  Vertical: gE,
  Horizontal: vE,
  StackedVertical: mE,
  StackedHorizontal: yE
}, xE = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: d, handleTooltipClick: f }) => {
  const { transformedData: u, config: m } = ce.useContext(Et), y = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Or, { component: "BarChart" }, /* @__PURE__ */ r.createElement(ws.Provider, { value: y }, /* @__PURE__ */ r.createElement(it, { left: parseFloat(m.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Ru.StackedVertical, null), /* @__PURE__ */ r.createElement(Ru.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Ru.Vertical, null), /* @__PURE__ */ r.createElement(Ru.Horizontal, null), /* @__PURE__ */ r.createElement(kr, { key: "bars", display: m.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (x) => l(x, u), onMouseOut: d, onClick: (x) => f(x, u) }))));
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
function Ty(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, l = e.className, d = e.max, f = e.min, u = e.firstQuartile, m = e.thirdQuartile, y = e.median, x = e.boxWidth, S = x === void 0 ? 10 : x, R = e.fill, T = e.fillOpacity, F = e.stroke, k = e.strokeWidth, h = e.rx, P = h === void 0 ? 2 : h, O = e.ry, C = O === void 0 ? 2 : O, N = e.valueScale, _ = e.outliers, B = _ === void 0 ? [] : _, q = e.horizontal, U = e.medianProps, ne = U === void 0 ? {} : U, re = e.maxProps, V = re === void 0 ? {} : re, Y = e.minProps, J = Y === void 0 ? {} : Y, Z = e.boxProps, ae = Z === void 0 ? {} : Z, te = e.outlierProps, se = te === void 0 ? {} : te, G = e.container, Q = G === void 0 ? !1 : G, K = e.containerProps, W = K === void 0 ? {} : K, Ce = e.children, xe = q ? i : n, fe = xe + (S || 0) / 2, Re = N.range(), je = N(f ?? 0), Ze = N(u ?? 0), Ae = N(y ?? 0), me = N(m ?? 0), Fe = N(d ?? 0), ue = {
    valueRange: Re,
    center: fe,
    offset: xe,
    boxWidth: S,
    max: {
      x1: fe - (S || 0) / 4,
      x2: fe + (S || 0) / 4,
      y1: Fe,
      y2: Fe
    },
    maxToThird: {
      x1: fe,
      x2: fe,
      y1: Fe,
      y2: me
    },
    median: {
      x1: xe,
      x2: xe + (S || 0),
      y1: Ae,
      y2: Ae
    },
    minToFirst: {
      x1: fe,
      x2: fe,
      y1: Ze,
      y2: je
    },
    min: {
      x1: fe - (S || 0) / 4,
      x2: fe + (S || 0) / 4,
      y1: je,
      y2: je
    },
    box: {
      x1: xe,
      x2: S || 0,
      y1: me,
      y2: Math.abs(me - Ze)
    },
    container: {
      x1: xe,
      x2: S || 0,
      y1: Math.min.apply(Math, Re),
      y2: Math.abs(Re[0] - Re[1])
    }
  };
  return q && (ue.max = Ai(ue.max), ue.maxToThird = Ai(ue.maxToThird), ue.box.y1 = Ze, ue.box = Ai(ue.box), ue.median = Ai(ue.median), ue.minToFirst = Ai(ue.minToFirst), ue.min = Ai(ue.min), ue.container = Ai(ue.container), ue.container.y1 = Math.min.apply(Math, Re)), Ce ? /* @__PURE__ */ r.createElement(r.Fragment, null, Ce(ue)) : /* @__PURE__ */ r.createElement(it, {
    className: An("visx-boxplot", l)
  }, B.map(function(de, Le) {
    var ke = q ? N(de) : fe, Ie = q ? fe : N(de);
    return /* @__PURE__ */ r.createElement("circle", Na({
      key: "visx-boxplot-outlier-" + Le,
      className: "visx-boxplot-outlier",
      cx: ke,
      cy: Ie,
      r: 4,
      stroke: F,
      strokeWidth: k,
      fill: R,
      fillOpacity: T
    }, se));
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-max",
    x1: ue.max.x1,
    y1: ue.max.y1,
    x2: ue.max.x2,
    y2: ue.max.y2,
    stroke: F,
    strokeWidth: k
  }, V)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: ue.maxToThird.x1,
    y1: ue.maxToThird.y1,
    x2: ue.maxToThird.x2,
    y2: ue.maxToThird.y2,
    stroke: F,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("rect", Na({
    className: "visx-boxplot-box",
    x: ue.box.x1,
    y: ue.box.y1,
    width: ue.box.x2,
    height: ue.box.y2,
    stroke: F,
    strokeWidth: k,
    fill: R,
    fillOpacity: T,
    rx: P,
    ry: C
  }, ae)), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-median",
    x1: ue.median.x1,
    y1: ue.median.y1,
    x2: ue.median.x2,
    y2: ue.median.y2,
    stroke: F,
    strokeWidth: k
  }, ne)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: ue.minToFirst.x1,
    y1: ue.minToFirst.y1,
    x2: ue.minToFirst.x2,
    y2: ue.minToFirst.y2,
    stroke: F,
    strokeWidth: k
  }), /* @__PURE__ */ r.createElement("line", Na({
    className: "visx-boxplot-min",
    x1: ue.min.x1,
    y1: ue.min.y1,
    x2: ue.min.x2,
    y2: ue.min.y2,
    stroke: F,
    strokeWidth: k
  }, J)), Q && /* @__PURE__ */ r.createElement("rect", Na({
    x: ue.container.x1,
    y: ue.container.y1,
    width: ue.container.x2,
    height: ue.container.y2,
    fillOpacity: "0"
  }, W)));
}
Ty.propTypes = {
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
  return /* @__PURE__ */ r.createElement(Or, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(it, { className: "boxplot", key: "boxplot-group" }, i.plots.map((k, h) => {
    const P = R - T, O = 4;
    return /* @__PURE__ */ r.createElement(it, { key: `boxplotplot-${h}` }, i.plotNonOutlierValues && k.nonOutlierValues.map((C, N) => /* @__PURE__ */ r.createElement("circle", { cx: e(k.columnCategory) + Number(n.yAxis.size) + R / 2, cy: t(C), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${h}--circle-${N}` })), /* @__PURE__ */ r.createElement(
      Ty,
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
}, SE = ({ xScale: e, yScale: t }) => {
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
   ${y.map(([F, k, h]) => `${F} : ${Ef(i[T][k], "left", !1, a, h)}<br/>`).join("")}
</div>`;
  return /* @__PURE__ */ r.createElement(it, { className: "scatter-plot", left: a.yAxis.size }, n.map((S, R) => a.runtime.seriesKeys.map((T, F) => {
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
function EE({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: l, getTextWidth: d, updateConfig: f, parseDate: u, formatDate: m, currentViewport: y } = ce.useContext(Et), { barStyle: x, tipRounding: S, roundingStyle: R, twoColor: T } = a, F = ce.useRef([]), [k, h] = ce.useState(window.innerWidth), P = R === "standard" ? "8px" : R === "shallow" ? "5px" : R === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const C = Number(a.xAxis.target), N = a.series[0].dataKey, _ = Number(t.domain()[1]), q = n.some((G) => G[N] < 0) || C > 0 || t.domain()[0] < 0, U = a.barHasBorder === "true" ? 1 : 0, ne = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, re = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, V = Math.max(t(0), Math.min(t(C), t(_))), Y = (G) => {
    if (G == null || x !== "rounded")
      return;
    let Q = {};
    return G === "left" && (Q = { borderRadius: `${P} 0 0 ${P}` }), G === "right" && (Q = { borderRadius: `0 ${P} ${P} 0` }), S === "full" && (Q = { borderRadius: P }), Q;
  }, J = {
    calculate: function() {
      const Q = n[0][N] < C ? "left" : "right", K = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, W = d(K, `bold ${O[a.fontSize]}px sans-serif`);
      let Ce = a.isLollipopChart ? ne / 2 : Number(a.barHeight) / 2, xe = 0, fe = 0, Re = !1;
      Q === "right" && (xe = -10, Re = W - xe < V, fe = V - W), Q === "left" && (xe = 10, Re = t(_) - V > W + xe, fe = V), this.text = K, this.y = Ce, this.x = fe, this.padding = xe, this.showLabel = a.xAxis.showTargetLabel ? Re : !1;
    }
  };
  J.calculate();
  const Z = ce.useRef(null), ae = Vf(Z, {});
  ce.useEffect(() => {
    const G = () => {
      var Q;
      h(window.innerWidth), (Q = F.current) == null || Q.forEach((K) => {
        !K || !K.style || (K.style.transition = "none", K.style.transform = "translate(0) scale(1)");
      });
    };
    return window.addEventListener("resize", G), () => {
      window.removeEventListener("resize", G);
    };
  }, []);
  const [te, se] = ce.useState(!1);
  return ce.useEffect(() => {
    ae != null && ae.isIntersecting && setTimeout(() => {
      se(!0);
    }, 100);
  }, [ae == null ? void 0 : ae.isIntersecting, a.animate]), ce.useEffect(() => {
    var G;
    (G = F.current) == null || G.forEach((Q, K) => {
      if (!(!Q || !Q.style)) {
        if (a.animate) {
          const W = C / _ * 100;
          Q.style.opacity = "0", Q.style.transform = `translate(${W / 1.07}%) scale(0, 1)`, setTimeout(() => {
            Q.style.opacity = "1", Q.style.transform = "translate(0) scale(1)", Q.style.transition = "transform 0.5s ease";
          }, 100);
        } else
          Q.style.transition = "none", Q.style.opacity = "0";
        a.animate || (Q.style.transition = "none", Q.style.opacity = "1");
      }
    });
  }, [a.animate, a, te]), /* @__PURE__ */ r.createElement(Or, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(it, { left: Number(a.xAxis.size) }, n.map((G, Q) => {
    const K = Number(G[N]), W = a.isLollipopChart ? ne : Number(a.barHeight), Ce = Number(a.barSpace), xe = Math.abs(t(K) - V), fe = t(K), Re = K > C ? V : fe, je = K < C ? "left" : "right";
    let Ze = 0;
    Ze = Q !== 0 ? (Ce + W + U) * Q : Ze;
    const Ae = (Ce + W + U) * n.length;
    a.heights.horizontal = Ae;
    const Fe = d(i(K, "left"), `normal ${O[a.fontSize]}px sans-serif`) < xe - 6, ue = fe, de = Ze + W / 2, Le = fe, ke = Ze + W / 2, Ie = fe, qe = Ze - W / 2, Qe = Y(je), [mt, tt] = l[T.palette], Ve = { left: mt, right: tt }, _e = Uo("#000", Ve[je]);
    let we = kE(a.isLollipopChart, Fe, re, _e);
    const Je = i(K, "left"), Ge = a.runtime.yAxis.type === "date" ? m(u(n[Q][a.runtime.originalXAxis.dataKey])) : n[Q][a.runtime.originalXAxis.dataKey];
    let dt = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Ge}` : Ge, bt = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${Je}` : Je;
    const yt = `<div>
          ${dt}<br />
          ${bt}
            </div>`;
    return /* @__PURE__ */ r.createElement(it, { key: `deviation-bar-${a.orientation}-${N}-${Q}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (_t) => {
          F.current[Q] = _t;
        },
        x: Re,
        y: Ze,
        width: xe,
        height: W,
        "data-tooltip-html": yt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: xe, height: W, border: `${U}px solid #333`, backgroundColor: Ve[je], ...Qe } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(St, { verticalAnchor: "middle", x: ue, y: de, ...we[je] }, i(G[N], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: Le, cy: ke, r: re / 2, fill: Ve[je], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: Ie, y: qe, width: re, height: re, fill: Ve[je], style: { opacity: 1, filter: "unset" } }));
  }), J.showLabel && /* @__PURE__ */ r.createElement(St, { fontWeight: "bold", dx: J.padding, verticalAnchor: "middle", x: J.x, y: J.y }, J.text), q && /* @__PURE__ */ r.createElement(un, { from: { x: V, y: 0 }, to: { x: V, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: Z }));
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
  var T;
  const { transformedData: d, rawData: f, config: u, seriesHighlight: m } = ce.useContext(Et), { xAxis: y, yAxis: x, legend: S, runtime: R } = u;
  return d && /* @__PURE__ */ r.createElement(Or, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(it, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(x.size) }, (T = R.forecastingSeriesKeys) == null ? void 0 : T.map((F, k) => !F || !F.stages ? !1 : F.stages.map((h, P) => {
    var B;
    const { behavior: O } = S, C = f.filter((q) => q[F.stageColumn] === h.key);
    let N = O === "highlight" && m.length > 0 && m.indexOf(h.key) === -1, _ = O === "highlight" || m.length === 0 || m.indexOf(h.key) !== -1;
    return /* @__PURE__ */ r.createElement(it, { className: `forecasting-areas-combo-${k}`, key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}-${k}` }, (B = F.confidenceIntervals) == null ? void 0 : B.map((q, U) => {
      const ne = Bu[h.color] || ar[h.color] || !1, re = () => _ && ne[2] ? ne[2] : "transparent", V = () => _ && ne[1] ? ne[1] : "transparent";
      if (!(q.high === "" || q.low === ""))
        return /* @__PURE__ */ r.createElement(it, { key: `forecasting-areas--stage-${h.key.replaceAll(" ", "-")}--group-${P}-${U}` }, /* @__PURE__ */ r.createElement(
          v0,
          {
            curve: Mu,
            data: C,
            fill: re(),
            opacity: N ? 0.1 : 0.5,
            x: (Y) => e(Date.parse(Y[y.dataKey])),
            y0: (Y) => t(Y[q.low]),
            y1: (Y) => t(Y[q.high])
          }
        ), U === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Nr, { data: C, x: (Y) => Number(e(Date.parse(Y[y.dataKey]))), y: (Y) => Number(t(Y[q.high])), curve: Mu, stroke: V(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Nr, { data: C, x: (Y) => Number(e(Date.parse(Y[y.dataKey]))), y: (Y) => Number(t(Y[q.low])), curve: Mu, stroke: V(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(it, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (F) => i(F, d), onMouseOut: l }))));
};
function Iu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Pc(e, t) {
  const n = e.series.every(({ type: S }) => S === "Bar"), a = e.series.every(({ type: S }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(S)), i = (S) => (R) => S.reduce((T, F) => isNaN(Number(R[F])) ? T : T + Number(R[F]), 0), l = () => {
    let S = Math.max(...t.map((R) => Math.max(...e.runtime.seriesKeys.map((T) => Iu(R[T]) ? Number(u(R[T])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const R = t.map(i(e.runtime.seriesKeys)).filter((T) => !isNaN(T));
      S = Math.max(...R);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const R = t.map(i(e.runtime.seriesKeys));
      S = Math.max(...R);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (S = Math.max(...t.map((R) => Iu(R[e.series.dataKey]) ? Number(u(R[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const R = t.map(i(e.runtime.barSeriesKeys)), T = Math.max(...t.map((k) => Math.max(...e.runtime.lineSeriesKeys.map((h) => Number(u(k[h])))))), F = Math.max(...R);
      S = Math.max(F, T);
    }
    return S;
  }, d = () => {
    const S = Math.min(...t.map((R) => Math.min(...e.runtime.seriesKeys.map((T) => Iu(R[T]) ? Number(u(R[T])) : 1 / 0))));
    return String(S);
  }, f = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((S) => t.some((R) => R[S] >= 0)) : !1, u = (S) => S === null || S === "" ? "" : typeof S == "string" ? S.replace(/[,$]/g, "") : S, m = Number(l()), y = Number(d()), x = f();
  return { minValue: y, maxValue: m, existPositiveValue: x, isAllLine: a };
}
function Xf({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var S, R, T, F;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((k) => k.axis === "Right").map((k) => k.dataKey);
  let { minValue: d } = Pc(e, n);
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
const TE = (e) => {
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
}, mc = (e) => !isNaN(parseFloat(e)) && isFinite(e), AE = (e, t, n) => {
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
    for (; u < e.length && !mc(e[u][t]); )
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
      for (; u >= 0 && !mc(e[u][t]); )
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
      i.style = d.style, mc(e[m - 1][t]) && i.data.push(e[m - 1]);
      const y = e.slice(m + 1).findIndex((x) => x[t] !== f && mc(x[t]));
      y !== -1 && i.data.push(e[m + 1 + y]);
    });
  }), i.data = hr.uniqWith(i.data, (d, f) => d[n] === f[n] && d[t] === f[t]), i;
}
const RE = (e, t, n, a) => {
  const i = AE(e, t, n), l = LE(e, t, n), d = PE(e, t, a, n);
  return [i, d, l].filter((f) => f.data.length > 0 && f.style !== "");
}, Vd = (e) => {
  var C, N, _, B, q, U, ne, re;
  const { config: t, d: n, tableData: a, displayArea: i, seriesKey: l, tooltipData: d, xScale: f, yScale: u, colorScale: m, parseDate: y, yScaleRight: x, data: S, circleData: R, dataIndex: T, mode: F } = e, { lineDatapointStyle: k } = t, h = (C = t == null ? void 0 : t.series.filter((V) => V.dataKey === l)) == null ? void 0 : C[0], P = (V, Y, J, Z, ae) => {
    const te = J.runtime.seriesLabels || [];
    let se;
    return V ? se = Y(te[Z] || ae) : se = "transparent", J.lineDatapointColor === "Lighter than Line" && se !== "transparent" && se && (se = ms(se).brighten(1)), se;
  }, O = (V) => (t.xAxis.type === "categorical" ? f(V) : f(y(V))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (F === "ALWAYS_SHOW_POINTS") {
    if (k === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (k === "always show")
      return (R == null ? void 0 : R.some((Y) => Y[t.xAxis.dataKey] === n[t.xAxis.dataKey] && Y[l] === n[l])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
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
    let V = (_ = (N = d == null ? void 0 : d.data) == null ? void 0 : N[0]) == null ? void 0 : _[1];
    if (!V)
      return;
    let Y, J = d.data.filter((te) => te[0] === l), Z = (B = J == null ? void 0 : J[0]) == null ? void 0 : B[0], ae = (q = J == null ? void 0 : J[0]) == null ? void 0 : q[2];
    return Z ? (d == null || d.data.indexOf(Z), Y = (U = a == null ? void 0 : a.find((te) => te[t == null ? void 0 : t.xAxis.dataKey] === V)) == null ? void 0 : U[l], d == null ? void 0 : d.data.map((te, se) => (t.runtime.seriesLabelsAll.indexOf(V), isNaN(Y) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (R == null ? void 0 : R.some((Q) => Q[t.xAxis.dataKey] === V)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: O(V),
        cy: ae === "right" ? x(Y) : u(Y),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: P(i, m, t, Z, l),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(te)}--${se}`
      }
    )))) : void 0;
  }
  return F === "ISOLATED_POINTS" && F && ((Y, J) => {
    const Z = S[Y], ae = Y > 0 ? S[Y - 1] : null, te = Y < S.length - 1 ? S[Y + 1] : null;
    let se = !1;
    return Y === 0 && te && !te[J] && (se = !0), Y === S.length - 1 && ae && !ae[J] && (se = !0), Y > 0 && Y < S.length - 1 && Z && Z[J] && (!ae || !ae[J]) && (!te || !te[J]) && (se = !0), se;
  })(T, l) ? /* @__PURE__ */ r.createElement("circle", { cx: O(n[(ne = t.xAxis) == null ? void 0 : ne.dataKey]), cy: h.axis === "Right" ? x(n[h.dataKey]) : u(n[h == null ? void 0 : h.dataKey]), r: 5.3, strokeWidth: 2, stroke: m(t.runtime.seriesLabels[l]), fill: m((re = t.runtime) == null ? void 0 : re.seriesLabels[l]) }) : null;
}, Dh = (e) => {
  var Y;
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
  } = e, { colorScale: x, config: S, formatNumber: R, handleLineType: T, isNumber: F, parseDate: k, seriesHighlight: h, tableData: P, transformedData: O, updateConfig: C, brushConfig: N, clean: _ } = ce.useContext(Et), { yScaleRight: B } = Xf({ config: S, yMax: m, data: O, updateConfig: C });
  if (!l)
    return;
  const { lineDatapointStyle: q, showLineSeriesLabels: U, legend: ne } = S;
  let re = O, V = P;
  return N.data.length > 0 && ((Y = S.brush) != null && Y.active) && (re = _(N.data), V = _(N.data)), /* @__PURE__ */ r.createElement(Or, { component: "LineChart" }, /* @__PURE__ */ r.createElement(it, { left: Number(S.runtime.yAxis.size) }, " ", (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((J, Z) => {
    var xe;
    let ae = S.series.filter((fe) => fe.dataKey === J)[0].type;
    const te = S.series.filter((fe) => fe.dataKey === J), se = te[0].axis ? te[0].axis : "left";
    let G = ne.behavior === "highlight" || h.length === 0 || h.indexOf(J) !== -1;
    const Q = CE(S == null ? void 0 : S.preliminaryData, V, J);
    let K = TE({ preliminaryData: S.preliminaryData, data: V, stroke: x(S.runtime.seriesLabels[J]), strokeWidth: te[0].weight || 2, handleLineType: T, lineType: ae, seriesKey: J });
    const W = RE(P, J, S.preliminaryData, S.xAxis.dataKey);
    let Ce = (fe) => u(t(fe)) + (u.bandwidth ? u.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      it,
      {
        key: `series-${J}`,
        opacity: ne.behavior === "highlight" && h.length > 0 && h.indexOf(J) === -1 ? 0.5 : 1,
        display: ne.behavior === "highlight" || h.length === 0 && !ne.dynamicLegend || h.indexOf(J) !== -1 ? "block" : "none"
      },
      re.map((fe, Re) => {
        const je = S.series.find(({ dataKey: ue }) => ue === J), { axis: Ze } = je, Ae = Object.keys(S.runtime.seriesLabels).length > 1, me = Ze === "Right" ? "rightLabel" : "label";
        let Fe = S.runtime.yAxis[me];
        return Ae || (Fe = S.isLegendValue ? S.runtime.seriesLabels[J] : Fe), fe[J] !== void 0 && fe[J] !== "" && fe[J] !== null && F(fe[J]) && /* @__PURE__ */ r.createElement(it, { key: `series-${J}-point-${Re}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(kr, { key: "bars", width: Number(f), height: Number(m), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ue) => l(ue, P), onMouseOut: i, onClick: (ue) => a(ue, re) }), /* @__PURE__ */ r.createElement(St, { display: S.labels ? "block" : "none", x: Ce(fe), y: se === "Right" ? B(n(fe, J)) : y(n(fe, J)), fill: "#000", textAnchor: "middle" }, R(fe[J], "left")), (q === "hidden" || q === "always show") && /* @__PURE__ */ r.createElement(
          Vd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Re,
            circleData: Q,
            tableData: P,
            data: re,
            d: fe,
            config: S,
            seriesKey: J,
            displayArea: G,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: se,
            key: `line-circle--${Re}`
          }
        ), /* @__PURE__ */ r.createElement(
          Vd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Re,
            tableData: P,
            circleData: Q,
            data: re,
            d: fe,
            config: S,
            seriesKey: J,
            displayArea: G,
            tooltipData: d,
            xScale: u,
            yScale: y,
            colorScale: x,
            parseDate: k,
            yScaleRight: B,
            seriesAxis: se,
            key: `isolated-circle-${Re}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, q === "hover" && /* @__PURE__ */ r.createElement(
        Vd,
        {
          tableData: P,
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: Q,
          data: re,
          config: S,
          seriesKey: J,
          displayArea: G,
          tooltipData: d,
          xScale: u,
          yScale: y,
          colorScale: x,
          parseDate: k,
          yScaleRight: B,
          seriesAxis: se
        }
      )),
      (xe = S == null ? void 0 : S.preliminaryData) != null && xe.some((fe) => fe.value && fe.type) ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        qm,
        {
          curve: ds[te[0].lineType],
          segments: re.map((fe) => [fe]),
          segmentation: "x",
          x: (fe) => Ce(fe),
          y: (fe) => se === "Right" ? B(n(fe, J)) : y(Number(n(fe, J))),
          styles: K,
          defined: (fe, Re) => fe[J] !== "" && fe[J] !== null && fe[J] !== void 0
        }
      ), W.map((fe, Re) => /* @__PURE__ */ r.createElement(
        Nr,
        {
          key: Re,
          data: fe.data,
          x: (je) => Ce(je),
          y: (je) => se === "Right" ? B(n(je, J)) : y(Number(n(je, J))),
          stroke: x(S.runtime.seriesLabels[J]),
          strokeWidth: te[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: T(fe.style),
          defined: (je, Ze) => je[J] !== "" && je[J] !== null && je[J] !== void 0
        }
      ))) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Nr,
        {
          curve: ds[te[0].lineType],
          data: S.xAxis.type === "date-time" || S.xAxis.type === "date" ? re.sort((fe, Re) => {
            let je = t(fe), Ze = t(Re);
            return je < Ze ? -1 : Ze < je ? 1 : 0;
          }) : re,
          x: (fe) => Ce(fe),
          y: (fe) => se === "Right" ? B(n(fe, J)) : y(Number(n(fe, J))),
          stroke: x(S.runtime.seriesLabels[J]),
          strokeWidth: te[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ae ? T(ae) : 0,
          defined: (fe, Re) => fe[J] !== "" && fe[J] !== null && fe[J] !== void 0
        }
      )),
      Q.map((fe, Re) => /* @__PURE__ */ r.createElement(
        "circle",
        {
          key: Re,
          cx: Ce(fe.data),
          cy: se === "Right" ? B(n(fe.data, J)) : y(Number(n(fe.data, J))),
          r: fe.size,
          strokeWidth: te[0].weight || 2,
          stroke: x ? x(S.runtime.seriesLabels[J]) : "#000",
          fill: fe.isFilled ? x ? x(S.runtime.seriesLabels[J]) : "#000" : "#fff"
        }
      )),
      S.animate && /* @__PURE__ */ r.createElement(
        Nr,
        {
          className: "animation",
          curve: ds[te[0].lineType],
          data: re,
          x: (fe) => Ce(fe),
          y: (fe) => se === "Right" ? B(n(fe, J)) : y(Number(n(fe, J))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: ae ? T(ae) : 0,
          defined: (fe, Re) => fe[J] !== "" && fe[J] !== null && fe[J] !== void 0
        }
      ),
      U && (S.runtime.lineSeriesKeys || S.runtime.seriesKeys).map((fe) => {
        let Re;
        for (let je = re.length - 1; je >= 0; je--)
          if (re[je][fe]) {
            Re = re[je];
            break;
          }
        return Re ? /* @__PURE__ */ r.createElement("text", { x: Ce(Re) + 5, y: y(n(Re, fe)), alignmentBaseline: "middle", fill: S.colorMatchLineSeriesLabels && x ? x(S.runtime.seriesLabels[fe] || fe) : "black" }, S.runtime.seriesLabels[fe] || fe) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), S.legend.dynamicLegend && h.length === 0 && /* @__PURE__ */ r.createElement(St, { x: f / 2, y: m / 2, fill: "black", textAnchor: "middle", color: "black" }, S.legend.dynamicLegendChartMessage)));
}, DE = (e) => {
  const { rawData: t, updateConfig: n } = ce.useContext(Et), { xScale: a, yScale: i, config: l, height: d, width: f, handleTooltipMouseOff: u, handleTooltipMouseOver: m } = e, { forestPlot: y } = l, x = l.xAxis.tickWidthMax + 10, [S, R] = ce.useState(!1);
  ce.useEffect(() => {
    try {
      const C = ["estimateField", "lower", "upper", "estimateRadius"], N = l, _ = 10;
      for (let B = 0; B < _; B++)
        C.forEach((q) => {
          var U;
          l.forestPlot[q] && l.forestPlot[q] !== ((U = N.columns[l.forestPlot[`additionalColumn${B}`]]) == null ? void 0 : U.name) && (delete N.columns[`additionalColumn${B}`], N.columns[l.forestPlot[q]] = {}, N.columns[l.forestPlot[q]].dataKey = N.forestPlot[q], N.columns[l.forestPlot[q]].name = N.forestPlot[q], N.columns[l.forestPlot[q]].dataTable = !0, N.columns[l.forestPlot[q]].tooltips = !0, N.columns[l.forestPlot[q]].label = N.forestPlot[q]);
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
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(it, { width: f }, y.title && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--title", x: y.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, y.title), y.lineOfNoEffect.show && y.type === "Linear" && /* @__PURE__ */ r.createElement(un, { from: { x: a(0), y: 0 + k }, to: { x: a(0), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), y.lineOfNoEffect.show && y.type === "Logarithmic" && /* @__PURE__ */ r.createElement(un, { from: { x: a(1), y: 0 + k }, to: { x: a(1), y: d }, className: "forestplot__line-of-no-effect", stroke: y.regression.baseLineColor || "black" }), t.map((C, N) => {
    const _ = $n({
      domain: t.map((V) => V[y.radius.scalingColumn]),
      range: [y.radius.min, y.radius.max]
    }), B = y.radius.scalingColumn !== "" ? _(t[N][y.radius.scalingColumn]) : 4, q = y.colors.shape ? y.colors.shape : "black", U = y.colors.line ? y.colors.line : "black", ne = 4;
    return C[l.xAxis.dataKey] === y.pooledResult.column ? /* @__PURE__ */ r.createElement(Nr, { data: F, x: (V) => V.x, y: (V) => V.y - Ei(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: Jd }) : /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(C[y.lower])} ${i(N) - Number(ne)}
                    L${a(C[y.lower])} ${i(N) + Number(ne)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(C[y.upper])} ${i(N) - Number(ne)}
                    L${a(C[y.upper])} ${i(N) + Number(ne)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: U, className: `line-${C[l.yAxis.dataKey]}`, key: N, x1: a(C[y.lower]), x2: a(C[y.upper]), y1: i(N), y2: i(N) }), y.shape === "circle" && /* @__PURE__ */ r.createElement(ag, { className: "forest-plot--circle", cx: a(Number(C[y.estimateField])), cy: i(N), r: y.radius.scalingColumn !== "" ? _(t[N][y.radius.scalingColumn]) : 4, fill: q, style: { opacity: 1, filter: "unset" } }), y.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(C[y.estimateField])), y: i(N) - B / 2, width: B, height: B, fill: q, style: { opacity: 1, filter: "unset" } }), y.shape === "text" && /* @__PURE__ */ r.createElement(St, { className: "forest-plot--text", x: a(Number(C[y.estimateField])), y: i(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: q }, C[y.estimateField]));
  }), F && y.regression.showDiamond && /* @__PURE__ */ r.createElement(Nr, { data: F, x: (C) => C.x, y: (C) => C.y, stroke: "black", strokeWidth: 2, fill: y.regression.baseLineColor, curve: Jd }), y.regression.description && /* @__PURE__ */ r.createElement(St, { x: 0 - Number(l.xAxis.size), width: f, y: d - l.forestPlot.rowHeight - Number(y.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, y.regression.description), /* @__PURE__ */ r.createElement(kr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: f, height: d, fill: "transparent", fillOpacity: 0.5, onMouseMove: (C) => m(C, t), onMouseOut: u })), /* @__PURE__ */ r.createElement(un, { from: h[0], to: h[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(un, { from: P[0], to: P[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((C) => t.map((N, _) => /* @__PURE__ */ r.createElement(St, { className: `${N[C.name]}`, x: C.forestPlotAlignRight ? f : C.forestPlotStartingPoint, y: i(_), textAnchor: C.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, N[C.name]))), !y.hideDateCategoryCol && t.map((C, N) => /* @__PURE__ */ r.createElement(St, { className: `${C[l.xAxis.dataKey]}`, x: 0, y: i(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ei(l.fontSize), fill: "black" }, C[l.xAxis.dataKey])), !y.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(St, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, l.xAxis.dataKey), O.map((C) => /* @__PURE__ */ r.createElement(St, { className: `${C.label}`, x: C.forestPlotAlignRight ? f : C.forestPlotStartingPoint, y: 0, textAnchor: C.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ei(l.fontSize), fill: "black" }, C.label)), y.leftLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__left-label", x: y.type === "Linear" ? a(0) - 25 : a(1) - 25, y: d + x, textAnchor: "end", verticalAnchor: "start" }, y.leftLabel), y.rightLabel && /* @__PURE__ */ r.createElement(St, { className: "forest-plot__right-label", x: y.type === "Linear" ? a(0) + 25 : a(1) + 25, y: d + x, textAnchor: "start", verticalAnchor: "start" }, y.rightLabel));
}, _E = ({ width: e, height: t, originalWidth: n }) => {
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
      l.map((_) => _[a.series[0].dataKey])
    ),
    labelColor: ""
  }, T = {
    parentKey: (N = a.dataDescription) == null ? void 0 : N.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: i(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[a.series[1].dataKey])
    ),
    labelColor: ""
  }, F = $n({
    domain: [0, Math.max(R.max * S, T.max * 1.1)],
    range: [0, y]
  });
  R.labelColor = R.color ? Uo("#000", R.color) : "#000", T.labelColor = T.color ? Uo("#000", T.color) : "#000";
  const k = a.yAxis.label ? `${a.yAxis.label}: ` : "", h = (_) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${R.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${_[a.xAxis.dataKey]}<br/>
				${k}${d(_[R.dataKey], "left")}
			</p>`;
  }, P = (_) => {
    var B;
    return `<p>
				${(B = a.dataDescription) == null ? void 0 : B.seriesKey}: ${T.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${_[a.xAxis.dataKey]}<br/>
				${k}${d(_[T.dataKey], "left")}
			</p>`;
  };
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Paired bar chart graphic with the title ${a.title ? a.title : "No Title Found"}`), /* @__PURE__ */ r.createElement(it, { top: 0, left: Number(a.xAxis.size) }, l.filter((_) => a.series[0].dataKey === R.dataKey).map((_, B) => {
    var ae, te;
    let q = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[0].dataKey) === -1, U = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[0].dataKey) !== -1, ne = F(_[a.series[0].dataKey]), re = Number(a.barHeight) ? Number(a.barHeight) : 25, V = 0;
    V = B !== 0 ? (Number(a.barSpace) + re + m) * B : V;
    const Y = (Number(a.barSpace) + re + m) * l.length;
    a.heights.horizontal = Y;
    const Z = u(d(_[R.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < ne - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(it, { key: `group-${R.dataKey}-${_[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${R.dataKey}-${_[(ae = a.dataDescription) == null ? void 0 : ae.xKey]}`,
        className: "bar group-1",
        key: `bar-${R.dataKey}-${_[(te = a.dataDescription) == null ? void 0 : te.xKey]}`,
        x: y - ne,
        y: V,
        width: F(_[a.series[0].dataKey]),
        height: re,
        fill: R.color,
        "data-tooltip-html": h(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: m,
        opacity: q ? 0.5 : 1,
        display: U ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && U && /* @__PURE__ */ r.createElement(St, { textAnchor: Z ? "start" : "end", dx: Z ? 5 : -5, verticalAnchor: "middle", x: y - ne, y: V + a.barHeight / 2, fill: Z ? R.labelColor : "#000" }, d(_[R.dataKey], "left"))));
  }), l.filter((_) => a.series[1].dataKey === T.dataKey).map((_, B) => {
    var ae, te, se;
    let q = F(_[a.series[1].dataKey]), U = a.legend.behavior === "highlight" && f.length > 0 && f.indexOf(a.series[1].dataKey) === -1, ne = a.legend.behavior === "highlight" || f.length === 0 || f.indexOf(a.series[1].dataKey) !== -1, re = a.barHeight ? Number(a.barHeight) : 25, V = 0;
    V = B !== 0 ? (Number(a.barSpace) + re + m) * B : V;
    const Y = (Number(a.barSpace) + re + m) * l.length;
    a.heights.horizontal = Y;
    const Z = u(d(_[T.dataKey], "left"), `normal ${x[a.fontSize]}px sans-serif`) < q - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${T.dataKey}-${_[a.xAxis.dataKey]} {
                          transform-origin: ${y}px ${V}px
                      }
							      `), /* @__PURE__ */ r.createElement(it, { key: `group-${T.dataKey}-${_[(ae = a.dataDescription) == null ? void 0 : ae.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      kr,
      {
        id: `bar-${T.dataKey}-${_[(te = a.dataDescription) == null ? void 0 : te.xKey]}`,
        className: "bar group-2",
        key: `bar-${T.dataKey}-${_[(se = a.dataDescription) == null ? void 0 : se.xKey]}`,
        x: y,
        y: V,
        width: F(_[a.series[1].dataKey]),
        height: re,
        fill: T.color,
        "data-tooltip-html": P(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: m,
        stroke: "#333",
        opacity: U ? 0.5 : 1,
        display: ne ? "block" : "none",
        tabIndex: -1
      }
    ), a.yAxis.displayNumbersOnBar && ne && /* @__PURE__ */ r.createElement(St, { textAnchor: Z ? "end" : "start", dx: Z ? -5 : 5, verticalAnchor: "middle", x: y + q, y: V + a.barHeight / 2, fill: Z ? T.labelColor : "#000" }, d(_[T.dataKey], "left"))));
  }))));
}, Cy = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: l, tableData: d }) => {
  let f = 0, u = 0, m = 0, y = 0;
  if (!i)
    return { min: f, max: u };
  const x = () => Lc(e.visualizationType, i, e.allowLineToBarGraph), { visualizationType: S, series: R } = e, { max: T, min: F } = e.runtime.yAxis, k = a ? T >= n : T >= 0, h = e.useLogScale ? F >= 0 : F <= 0 && t >= 0 || F <= t && t < 0;
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
      C.forEach((U) => {
        var ne;
        (ne = U.confidenceIntervals) == null || ne.map((re) => {
          N.push(re.high), N.push(re.low);
        });
      });
      const _ = i.map((U) => N.map((ne) => U[ne])), B = Math.max.apply(
        null,
        _.map((U) => U[0])
      ), q = Math.min.apply(
        null,
        _.map((U) => U[1])
      );
      B > u && (u = B), q < f && (f = q);
    }
  }
  if (S === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let C = R.filter((B) => B.axis === "Left"), N = R.filter((B) => B.axis === "Right");
      const _ = (B, q, U, ne = "left") => {
        let re = 0;
        return (q.map((Y) => Y.dataKey) || []).forEach((Y) => {
          let J = q.find((te) => te.dataKey === Y), Z = B.map((te) => te[Y]), ae = Math.max.apply(null, Z);
          e.visualizationSubType === "stacked" && ne === "left" && J.type === "Bar" && (re += ae), ae > U && (U = ae), U < re && (U = re);
        }), U;
      };
      m = _(i, C, m, "left"), y = _(i, N, y, "right"), m < T && (m = T);
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
    const C = e.useLogScale ? F >= 0 && F < t : F < t, N = d == null ? void 0 : d.some((_, B) => {
      var q;
      return (q = e.preliminaryData) == null ? void 0 : q.some((U) => {
        var Y;
        if (U.type !== "suppression" || !U.style)
          return !1;
        const ne = hr.pick(_, (Y = e.runtime) == null ? void 0 : Y.seriesKeys), re = hr.values(ne).includes(U.value);
        return (U.column ? _[U.column] === U.value : re) && (B === 0 || B === d.length - 1);
      });
    });
    f = F && C ? F : N ? 0 : t;
  }
  if (u === Number.MIN_VALUE && (u = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let C = (u - f) * e.runtime.yAxis.paddingPercent;
    f -= C, u += C;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const C = i.map((_) => _[e.series[0].dataKey]), N = Math.max(...C).toString().length;
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
}, NE = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: l, config: d, data: f } = e;
  const { rawData: u, dimensions: m } = ce.useContext(Et), [y, x] = m, S = d.runtime.barSeriesKeys || d.runtime.seriesKeys, R = d.runtime.xAxis.type, T = d.orientation === "horizontal", F = (ne) => ne[d.runtime.originalXAxis.dataKey], k = f.map((ne) => F(ne)), { visualizationType: h } = d;
  let P = null, O = null, C = null, N = null, _ = null, B = null, q = null, U = $n({
    domain: [0, 100],
    range: [0, n]
  });
  if (T && (P = FE({ min: i * 1.03, ...e }), P.type = d.useLogScale ? Vr.LOG : Vr.LINEAR, O = zE(R, t), O.rangeRound([0, a]), _ = _h(S, [0, a])), T || (q = _h(k, [0, n], 0.5), P = Du(t, [0, n], 1 - d.barThickness), O = ME(e), _ = Du(S, [0, P.bandwidth()], 0)), d.xAxis.type === "date" && !T) {
    const ne = t ? t.sort() : [];
    P = Du(ne, [0, n], 1 - d.barThickness);
  }
  if (d.xAxis.type === "date-time") {
    let ne = Math.min(...t), re = Math.max(...t);
    ne -= (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (re - ne), re += (d.xAxis.padding ? d.xAxis.padding * 0.01 : 0) * (re - ne), P = Wg({
      domain: [ne, re],
      range: [0, n]
    }), P.type = Vr.TIME;
    let V = Number.MAX_VALUE, Y = t ? t.sort() : [];
    for (let J = 0; J < Y.length - 1; J++) {
      let Z = P(Y[J + 1]) - P(Y[J]);
      Z < V && (V = Z);
    }
    (t.length === 1 || V > n / 4) && (V = n / 4), _ = Du(S, [0, (d.barThickness || 1) * V], 0);
  }
  if (d.visualizationType === "Deviation Bar") {
    const ne = d.isLollipopChart ? 1.05 : 1.03;
    O = Kd({
      domain: t,
      range: [0, a]
    }), P = $n({
      domain: [i * ne, Math.max(Number(d.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), P.type = Vr.LINEAR;
  }
  if (d.visualizationType === "Scatter Plot" && d.xAxis.type === "continuous" && (P = $n({
    domain: [0, Math.max.apply(null, P.domain())],
    range: [0, n]
  }), P.type = Vr.LINEAR), h === "Box Plot") {
    const ne = [];
    if (d.boxplot.plots.map((J) => J.columnOutliers.map((Z) => ne.push(Z))) && !d.boxplot.hideOutliers) {
      let J = Math.min(...ne), Z = Math.max(...ne);
      J < i && (i = J), Z > l && (l = Z);
    }
    let V = Math.min(...d.boxplot.plots.map((J) => J.columnLowerBounds)), Y = Math.max(...d.boxplot.plots.map((J) => J.columnUpperBounds));
    V < i && (i = V), Y > l && (l = Y), O = $n({
      range: [a, 0],
      round: !0,
      domain: [i, l]
    }), P = Kd({
      range: [0, n],
      round: !0,
      domain: d.boxplot.categories,
      padding: 0.4
    }), P.type = Vr.BAND;
  }
  if (h === "Paired Bar") {
    let re = Math.max.apply(
      Math,
      f.map((Y) => {
        var J;
        return Y[(J = d.series[0]) == null ? void 0 : J.dataKey];
      })
    ), V = Math.max.apply(
      Math,
      f.map((Y) => {
        var J;
        return Y[(J = d.series[1]) == null ? void 0 : J.dataKey];
      })
    );
    N = $n({
      domain: [0, Math.max(re, V) * 1.02],
      range: [n / 2, 0]
    }), C = $n({
      domain: N.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (h === "Forest Plot") {
    const ne = () => d.forestPlot.regression.showDiamond || d.forestPlot.regression.description ? [0 + d.forestPlot.rowHeight * 2, a - d.forestPlot.rowHeight] : [0 + d.forestPlot.rowHeight * 2, a];
    O = $n({
      domain: [0, u.length],
      range: ne()
    });
    const re = 5, V = Number(d.forestPlot.leftWidthOffset) / 100 * n, Y = Number(d.forestPlot.rightWidthOffset) / 100 * n, J = Number(d.forestPlot.rightWidthOffsetMobile) / 100 * n, Z = Number(d.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (y > 480) {
      if (d.forestPlot.type === "Linear" && (P = $n({
        domain: [Math.min(...f.map((ae) => parseFloat(ae[d.forestPlot.lower]))) - re, Math.max(...f.map((ae) => parseFloat(ae[d.forestPlot.upper]))) + re],
        range: [V, m[0] - Y]
      }), P.type = Vr.LINEAR), d.forestPlot.type === "Logarithmic") {
        let ae = Math.max(...f.map((se) => parseFloat(se[d.forestPlot.upper]))), te = Math.min(...f.map((se) => parseFloat(se[d.forestPlot.lower])));
        P = Vu({
          domain: [te, ae],
          range: [V, n - Y],
          nice: !0
        }), P.type = Vr.LOG;
      }
    } else if (d.forestPlot.type === "Linear" && (P = $n({
      domain: [Math.min(...f.map((ae) => parseFloat(ae[d.forestPlot.lower]))) - re, Math.max(...f.map((ae) => parseFloat(ae[d.forestPlot.upper]))) + re],
      range: [Z, n - J],
      type: Vr.LINEAR
    })), d.forestPlot.type === "Logarithmic") {
      let ae = Math.max(...f.map((se) => parseFloat(se[d.forestPlot.upper]))), te = Math.min(...f.map((se) => parseFloat(se[d.forestPlot.lower])));
      P = Vu({
        domain: [te, ae],
        range: [V, n - Y],
        nice: !0,
        base: ae > 1 ? 10 : 2,
        round: !1,
        type: Vr.LOG
      });
    }
  }
  return { xScale: P, yScale: O, seriesScale: _, g1xScale: N, g2xScale: C, xScaleNoPadding: B, xScaleBrush: q, xScaleAnnotation: U };
}, OE = (e, t, n) => {
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
}, FE = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Vu : $n)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale
})), ME = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = a.useLogScale ? Vu : $n;
  return a.visualizationType === "Combo" && (t = i), l({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, zE = (e, t) => e === "date" ? $n({
  domain: [Math.min(...t), Math.max(...t)]
}) : Bo({ domain: t, padding: 0.5 }), _h = (e, t, n = 0) => Bo({
  domain: e,
  range: t,
  padding: n
}), Du = (e, t, n = 0) => Kd({
  domain: e,
  range: t,
  padding: n
});
function IE(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ts = () => {
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
  }, h = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && a === "vertical", P = () => ["Box Plot", "Scatter Plot", "Pie", "Line"].includes(t) ? !1 : n == null ? void 0 : n.some((Ie) => Ie.type === "Bar" || Ie.type === "Paired Bar" || Ie.type === "Deviation Bar"), O = () => {
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
    visSupportsPreliminaryData: () => (e == null || e.series.some((ke) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(ke == null ? void 0 : ke.type)), t === "Line" || t === "Bar" && i === "regular" || t === "Combo"),
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
      const ke = ["Forest Plot"];
      return !(a === "horizontal" || ke.includes(t));
    },
    visSupportsValueAxisLabels: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisLine: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisTicks: () => !["Forest Plot"].includes(t),
    visSupportsReactTooltip: () => {
      if (["Deviation Bar", "Box Plot", "Scatter Plot", "Paired Bar"].includes(t) || t === "Bar" && e.tooltips.singleSeries)
        return !0;
    },
    visSupportsValueAxisMax: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisMin: () => !["Forest Plot"].includes(t),
    visHasSingleSeriesTooltip: () => t === "Bar" || t === "Line" || t === "Area Chart" && i === "stacked"
  };
}, $E = ({ data: e, xScale: t, yScale: n, config: a, xMax: i, annotationSeriesKey: l }, d) => {
  const { xAxis: f, visualizationType: u, orientation: m } = a, y = (k, h, P, O, C) => {
    let N = [];
    a.xAxis.type === "date-time" && (h = new Date(h), P = new Date(P), O = O.map((q) => new Date(q)), N = C.ticks().map((q) => new Date(q)));
    const _ = (k - h) / (P - h), B = Math.round(_ * (O.length - 1));
    return a.xAxis.type === "date-time" ? N[B] : O[B];
  }, S = ((k, h = !1) => {
    if (u !== "Pie" && m !== "horizontal") {
      if (a.xAxis.type === "date-time") {
        const P = new Date(t.invert(k)), O = a.data.map((_) => new Date(_[a.xAxis.dataKey]).getTime());
        let C = 1 / 0, N = null;
        return O.forEach((_) => {
          const B = Math.abs(P.getTime() - _);
          B < C && (C = B, N = _);
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
          const _ = Math.abs(P - N);
          _ < C && (C = _, O = N);
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
}, BE = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "right" ? "end" : a === "left" ? "start" : a === "bottom" || a === "top" || t(e.xKey) + e.dx < n.yAxis.size ? "middle" : null;
}, HE = (e, t, n) => {
  const { connectionLocation: a } = e;
  return a === "top" ? "start" : a === "bottom" ? "end" : a === "right" || a === "left" ? "middle" : t(e.xKey) + e.dx < n.yAxis.size ? "end" : null;
}, WE = () => {
  var u;
  const { config: e, data: t } = ce.useContext(Et), { visualizationSubType: n, visualizationType: a, series: i, legend: l } = e, d = (m) => {
    if (!(i != null && i.length))
      return [];
    const x = ["Paired Bar", "Deviation Bar"].includes(a) ? e.twoColor.palette : e.palette, S = { ...ar, ...hs };
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
const VE = ({ xScale: e, yScale: t, xScaleAnnotation: n, xMax: a, svgRef: i, onDragStateChange: l }) => {
  const {
    config: d,
    currentViewport: f,
    dimensions: u,
    isDraggingAnnotation: m,
    isEditor: y,
    isLegendBottom: x,
    updateConfig: S
  } = ce.useContext(Et), { annotations: R } = d, [T] = u, { colorScale: F } = WE(), k = y ? Xy : qy;
  return R && R.map((h, P) => {
    var _;
    const O = h.text || "", C = n(h.x), N = () => ({
      __html: zh.sanitize(O)
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
          let q = [...R];
          if (h.x === n.invert(B.x) && h.y === B.y)
            q[P] = { ...q[P], dx: B.dx, dy: B.dy };
          else if (h.snapToNearestPoint) {
            let U = $E(
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
            q[P] = { ...q[P], x: n.invert(e(U.x)), y: t(U.y) };
          } else
            q[P] = { ...q[P], x: n.invert(B.x), y: B.y };
          S({
            ...d,
            annotations: q
          });
        }
      },
      /* @__PURE__ */ r.createElement(Ky, { className: "annotation__desktop-label", showAnchorLine: !1, horizontalAnchor: BE(h, e, d), verticalAnchor: HE(h, e, d) }, /* @__PURE__ */ r.createElement(
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
        ((_ = d == null ? void 0 : d.general) == null ? void 0 : _.showAnnotationDropdown) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { className: "annotation__has-dropdown-number", style: { margin: "2px 6px" } }, P + 1)),
        /* @__PURE__ */ r.createElement("div", { style: { fontSize: Ih[d.fontSize] }, dangerouslySetInnerHTML: N() })
      )),
      h.connectionType === "line" && /* @__PURE__ */ r.createElement(sp, { type: "line", pathProps: { markerStart: "url(#marker-start)" } }),
      h.connectionType === "elbow" && /* @__PURE__ */ r.createElement(sp, { type: "elbow", pathProps: { markerStart: "url(#marker-start)" } }),
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
      h.marker === "circle" && /* @__PURE__ */ r.createElement(Yy, { id: "marker-start", className: "circle-subject", stroke: F(h.seriesKey), radius: 8 }),
      h.marker === "arrow" && /* @__PURE__ */ r.createElement(Mh, { fill: "black", id: "marker-start", x: C, y: h.y, stroke: "#333", markerWidth: 10, size: 10, strokeWidth: 1, orient: "auto-start-reverse", markerUnits: "userSpaceOnUse" }),
      /* @__PURE__ */ r.createElement("circle", { fill: "white", cx: C + h.dx, cy: h.y + h.dy, r: 16, className: "annotation__mobile-label annotation__mobile-label-circle", stroke: F(h.seriesKey) }),
      /* @__PURE__ */ r.createElement("text", { height: 16, x: C + h.dx, y: h.y + h.dy, className: "annotation__mobile-label", alignmentBaseline: "middle", textAnchor: "middle" }, P + 1)
    );
  });
};
const jE = ({ useBootstrapVisibilityClasses: e = !0 }) => {
  const { config: t } = ce.useContext(Et), n = t.annotations || [], a = () => {
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
const UE = () => {
  var u;
  const { currentViewport: e, config: t } = ce.useContext(Et), [n, a] = ce.useState(!1), i = ["sm", "xs", "xxs"].includes(e) ? "13px" : `${Ih[t == null ? void 0 : t.fontSize]}px`;
  ce.useContext(Et);
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
    /* @__PURE__ */ r.createElement(st, { display: n ? "minus" : "plus", base: !0 }),
    t.general.annotationDropdownText === "" ? "Annotations" : (u = t == null ? void 0 : t.general) == null ? void 0 : u.annotationDropdownText
  ), n && /* @__PURE__ */ r.createElement("div", { className: "table-container annotation-dropdown__panel", style: l }, /* @__PURE__ */ r.createElement(qf.List, { useBootstrapVisibilityClasses: !1 }))));
}, qf = {
  Draggable: VE,
  // Mobile auto display
  List: jE,
  // Desktop Accessible Option
  Dropdown: UE
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
  } = ce.useContext(Et), { visualizationType: k, visualizationSubType: h, orientation: P, xAxis: O, yAxis: C, runtime: N, debugSvg: _ } = n, B = () => Lc(n.visualizationType, R, n.allowLineToBarGraph);
  let [q] = i;
  n && n.legend && !n.legend.hide && ((Vn = n.legend) == null ? void 0 : Vn.position) !== "bottom" && ["lg", "md"].includes(a) && (q = q * 0.73);
  const { horizontal: U } = n.heights, ne = P === "horizontal" || n.visualizationType === "Forest Plot", re = !0, V = isNaN(parseInt(N.xAxis.labelOffset)) ? 0 : parseInt(N.xAxis.labelOffset), Y = isNaN(parseInt(N.yAxis.labelOffset)) ? 0 : parseInt(N.yAxis.labelOffset), J = isNaN(parseInt(N.xAxis.size)) ? 0 : parseInt(N.xAxis.size);
  let Z = n.aspectRatio ? q * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[P];
  Z = Number(Z);
  const ae = q - N.yAxis.size - (k === "Combo" ? n.yAxis.rightAxisSize : 0);
  let te = Z - (P === "horizontal" ? 0 : J);
  Z += P === "horizontal" ? J : 0, n.visualizationType === "Forest Plot" && (Z = Z + n.data.length * n.forestPlot.rowHeight, te = te + n.data.length * n.forestPlot.rowHeight, q = i[0]), (Cn = n.brush) != null && Cn.active && (Z = Z + ((Sn = n.brush) == null ? void 0 : Sn.height));
  const { minValue: se, maxValue: G, existPositiveValue: Q, isAllLine: K } = Pc(n, R), { visSupportsReactTooltip: W } = Ts(), { hasTopAxis: Ce } = IE(n), [xe, fe] = ce.useState(!1), [Re, je] = ce.useState({ x: 0, y: 0 });
  ce.useRef(null);
  const Ze = ce.useRef(), Ae = ce.useRef(), me = Vf(Ze, {
    freezeOnceVisible: !1
  }), Fe = (Ne) => wn(n.runtime.xAxis) ? x(Ne[n.runtime.originalXAxis.dataKey]).getTime() : Ne[n.runtime.originalXAxis.dataKey], ue = (Ne, ut) => Ne[ut], de = (jn = n.brush) != null && jn.active && ((zn = t.data) != null && zn.length) ? t.data.map((Ne) => Fe(Ne)) : R.map((Ne) => Fe(Ne)), Le = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ke = { data: R, tableData: S, config: n, minValue: se, maxValue: G, isAllLine: K, existPositiveValue: Q, xAxisDataMapped: de, xMax: ae, yMax: te }, { min: Ie, max: qe, leftMax: Qe, rightMax: mt } = Cy(ke), { yScaleRight: tt, hasRightAxis: Ve } = Xf({ config: n, yMax: te, data: R, updateConfig: T }), { xScale: _e, yScale: we, seriesScale: Je, g1xScale: Ge, g2xScale: dt, xScaleNoPadding: bt, xScaleBrush: yt, xScaleAnnotation: _t } = NE({ ...ke, min: Ie, max: qe, leftMax: Qe, rightMax: mt, dimensions: i }), [an, on] = ce.useState(null);
  ce.useEffect(() => {
    var Ne;
    on((Ne = Ae == null ? void 0 : Ae.current) == null ? void 0 : Ne.getBoundingClientRect());
  }, [Ae, n.legend]);
  const Xt = (Ne, ut) => {
    if (n.useLogScale && Ne === 0.1 && (Ne = 0), !(n.data && !n.data[ut] && k === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[ut][n.xAxis.dataKey] : wn(N.yAxis) ? l(x(Ne)) : P === "vertical" && qe - Ie < 3 ? d(Ne, "left", re, !1, !1, "1") : P === "vertical" ? d(Ne, "left", re) : Ne;
  }, Jt = (Ne) => (n.useLogScale && Ne === 0.1 && (Ne = 0), wn(N.xAxis) && n.visualizationType !== "Forest Plot" ? l(Ne) : P === "horizontal" && n.visualizationType !== "Forest Plot" ? d(Ne, "left", re) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? d(Ne, "bottom", re) : n.visualizationType === "Forest Plot" ? d(Ne, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : Ne), Kt = (Ne) => {
    let { numTicks: ut } = N[Ne];
    N[Ne].viewportNumTicks && N[Ne].viewportNumTicks[a] && (ut = N[Ne].viewportNumTicks[a]);
    let ft;
    return Ne === "yAxis" && (ft = ne && !ut ? R.length : ne && ut ? ut : !ne && !ut ? void 0 : !ne && ut && ut, ft === void 0 && !n.dataFormat.roundTo && (Number(qe) <= 3 ? ft = 2 : ft = 4), Number(ft) > Number(qe) && (ft = Number(Ie) < 0 ? Math.round(qe) * 2 : Math.round(qe))), Ne === "xAxis" && (ft = ne && !ut ? void 0 : ne && ut ? ut : !ne && !ut ? void 0 : !ne && ut && ut, ne && ft === void 0 && !n.dataFormat.roundTo && (qe <= 3 ? ft = 2 : ft = 4), n.visualizationType === "Forest Plot" && (ft = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), ft;
  }, { tooltipData: At, showTooltip: Mt, hideTooltip: Vt, tooltipOpen: $e, tooltipLeft: en, tooltipTop: wt } = Gm(), {
    handleTooltipMouseOver: zt,
    handleTooltipClick: pt,
    handleTooltipMouseOff: tn,
    tooltipStyles: xn,
    TooltipListItem: Ft,
    getXValueFromCoordinateDate: nn,
    getXValueFromCoordinate: Ln
  } = ty({
    xScale: _e,
    yScale: we,
    showTooltip: Mt,
    hideTooltip: Vt
  });
  ce.useEffect(() => {
    document.querySelector(".isEditor") && fe((ut) => !0);
  }), ce.useEffect(() => {
    (me == null ? void 0 : me.isIntersecting) === !0 && n.animate && setTimeout(() => {
      fe((Ne) => !0);
    }, 500);
  }, [me == null ? void 0 : me.isIntersecting, n.animate]);
  const Yt = () => {
    const { visualizationType: Ne } = n;
    return Ne === "Combo" && N.forecastingSeriesKeys > 0 || Ne === "Area Chart" || Ne === "Line" || Ne === "Bar";
  }, jt = Number(P === "horizontal" ? n.xAxis.size : n.yAxis.size), Tn = { small: 16, medium: 18, large: 20 }, Hn = () => n.visualizationType === "Forest Plot" ? n.data.length : Kt("yAxis"), Mn = () => {
    let Ne = n.xAxis.manualStep;
    return n.xAxis.viewportStepCount && n.xAxis.viewportStepCount[a] && (Ne = n.xAxis.viewportStepCount[a]), Ne;
  }, qt = (Ne) => {
    const ut = Ne.currentTarget.getBoundingClientRect(), ft = Ne.clientX - ut.left, $ = Ne.clientY - ut.top;
    je({
      x: ft,
      y: $
    });
  }, Wn = () => {
    let Ne = 40;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(zu, { top: te, left: Number(N.yAxis.size), label: N.xAxis.label, tickFormat: wn(N.xAxis) ? l : d, scale: Ge, stroke: "#333", tickStroke: "#333", numTicks: N.xAxis.numTicks || void 0 }, (ut) => /* @__PURE__ */ r.createElement(it, { className: "bottom-axis" }, ut.ticks.map((ft, $) => {
      const Me = ft.index !== 0 ? n.yAxis.tickRotation : 0, Ye = ft.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", nt = f(ft.value, `normal ${Tn[n.fontSize]}px sans-serif`) * Math.sin(Me * (Math.PI / 180)) + 25;
      return nt > Ne && (Ne = nt), /* @__PURE__ */ r.createElement(it, { key: `vx-tick-${ft.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: ft.from, to: ft.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: ft.to.x, y: ft.to.y, angle: -Me, verticalAnchor: "start", textAnchor: Ye }, d(ft.value, "left")));
    }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      zu,
      {
        top: te,
        left: Number(N.yAxis.size),
        label: N.xAxis.label,
        tickFormat: wn(N.xAxis) ? l : N.xAxis.dataKey !== "Year" ? d : (ut) => ut,
        scale: dt,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: N.xAxis.numTicks || void 0
      },
      (ut) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(it, { className: "bottom-axis" }, ut.ticks.map((ft, $) => {
        const Me = ft.index !== 0 ? n.yAxis.tickRotation : 0, Ye = ft.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle", nt = f(ft.value, `normal ${Tn[n.fontSize]}px sans-serif`) * Math.sin(Me * (Math.PI / 180)) + 25;
        return nt > Ne && (Ne = nt), /* @__PURE__ */ r.createElement(it, { key: `vx-tick-${ft.value}-${$}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: ft.from, to: ft.to, stroke: "#333" }), !N.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { x: ft.to.x, y: ft.to.y, angle: -Me, verticalAnchor: "start", textAnchor: Ye }, d(ft.value, "left")));
      }), !N.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(St, { x: ae / 2, y: Ne + 20 + V, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, N.xAxis.label)), Ae.current ? Ae.current.setAttribute("height", Number(Z) + Number(Ne) + (N.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(q) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Or, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${q}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: qt,
      width: "100%",
      height: Z,
      className: `linear ${n.animate ? "animated" : ""} ${xe && n.animate ? "animate" : ""} ${_ && "debug"} ${F && "dragging-annotation"}`,
      role: "img",
      "aria-label": u(n),
      ref: Ae,
      style: { overflow: "visible" }
    },
    !F && /* @__PURE__ */ r.createElement(kr, { width: q, height: Z, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(k) && /* @__PURE__ */ r.createElement(JS, { scale: we, tickLength: n.useLogScale ? 6 : 8, left: Number(N.yAxis.size) - n.yAxis.axisPadding, label: N.yAxis.label || N.yAxis.label, stroke: "#333", tickFormat: (Ne, ut) => Xt(Ne, ut), numTicks: Hn() }, (Ne) => {
      const ut = n.orientation === "horizontal" ? (Ne.axisToPoint.y - Ne.axisFromPoint.y) / 2 : (Ne.axisFromPoint.y - Ne.axisToPoint.y) / 2, ft = te / Ne.ticks.length / 2 - te / Ne.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(it, { className: "left-axis" }, Ne.ticks.map(($, Me) => {
        const Ye = Ne.ticks[0].to.y, Be = 15, nt = String($.value).startsWith("1") || $.value === 0.1 ? "block" : "none", at = nt === "block" ? 7 : 0, kt = { x: $.to.x - at, y: $.to.y }, Lt = $.index !== 0 || n.xAxis.hideAxis;
        return /* @__PURE__ */ r.createElement(it, { key: `vx-tick-${$.value}-${Me}`, className: "vx-axis-tick" }, !N.yAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { key: `${$.value}--hide-hideTicks`, from: $.from, to: n.useLogScale ? kt : $.to, stroke: n.yAxis.tickColor, display: P === "horizontal" ? "none" : "block" }), N.yAxis.gridLines && Lt ? /* @__PURE__ */ r.createElement(un, { key: `${$.value}--hide-hideGridLines`, display: (n.useLogScale && nt).toString(), from: { x: $.from.x + ae, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", P === "horizontal" && h !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            transform: `translate(${$.to.x - 5}, ${n.isLollipopChart ? $.to.y - Ye : $.to.y - Ye + (Number(n.barHeight * n.series.length) - Be) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          $.formattedValue
        ), P === "horizontal" && h === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ye + (Number(n.barHeight) - Be) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, $.formattedValue), P === "horizontal" && k === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${$.to.y - Ye + Number(n.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), P === "horizontal" && k === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(St, { transform: `translate(${$.to.x - 5}, ${n.isLollipopChart ? $.to.y - Ye + 2 : $.to.y - Ye + Number(n.barHeight) / 2}) rotate(-${N.horizontal ? N.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, $.formattedValue), P === "vertical" && k !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          St,
          {
            display: n.useLogScale ? nt : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? $.from.x + 2 : $.to.x,
            y: $.to.y + (n.runtime.horizontal ? ft : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          $.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: Ne.axisFromPoint, to: N.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? Z : Number(U) } : Ne.axisToPoint, stroke: "#000" }), we.domain()[0] < 0 && /* @__PURE__ */ r.createElement(un, { from: { x: Ne.axisFromPoint.x, y: we(0) }, to: { x: ae, y: we(0) }, stroke: "#333" }), k === "Bar" && P === "horizontal" && _e.domain()[0] < 0 && /* @__PURE__ */ r.createElement(un, { from: { x: _e(0), y: 0 }, to: { x: _e(0), y: te }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * N.yAxis.size + Y}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, Ne.label));
    }),
    Ve && /* @__PURE__ */ r.createElement(rE, { scale: tt, left: Number(q - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (Ne) => d(Ne, "right"), numTicks: N.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Ne) => {
      const ut = n.orientation === "horizontal" ? (Ne.axisToPoint.y - Ne.axisFromPoint.y) / 2 : (Ne.axisFromPoint.y - Ne.axisToPoint.y) / 2, ft = te / Ne.ticks.length / 2 - te / Ne.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(it, { className: "right-axis" }, Ne.ticks.map(($, Me) => /* @__PURE__ */ r.createElement(it, { key: `vx-tick-${$.value}-${Me}`, className: "vx-axis-tick" }, !N.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(un, { from: $.from, to: $.to, display: N.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), N.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(un, { from: { x: $.from.x + ae, y: $.from.y }, to: $.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(St, { x: $.to.x, y: $.to.y + (N.horizontal ? ft : 0), verticalAnchor: N.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, $.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(un, { from: Ne.axisFromPoint, to: Ne.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, Ne.label));
    }),
    Ce && n.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      lE,
      {
        stroke: "#333",
        left: Number(N.yAxis.size),
        scale: _e,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    k !== "Paired Bar" && k !== "Spark Line" && /* @__PURE__ */ r.createElement(
      zu,
      {
        top: N.horizontal && n.visualizationType !== "Forest Plot" ? Number(U) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? te + Number(n.xAxis.axisPadding) : te,
        left: n.visualizationType !== "Forest Plot" ? Number(N.yAxis.size) : 0,
        label: n[Le].label,
        tickFormat: Jt,
        scale: _e,
        stroke: "#333",
        numTicks: Kt("xAxis"),
        tickStroke: "#333",
        tickValues: n.xAxis.manual ? OE(de, _e, n.xAxis.type === "date-time" ? Kt("xAxis") : Mn()) : void 0
      },
      (Ne) => {
        const ut = n.visualizationType !== "Forest Plot" ? (Ne.axisToPoint.x - Ne.axisFromPoint.x) / 2 : i[0] / 2, ft = (gt) => /\s/.test(gt), $ = Ne.ticks.some((gt) => ft(gt.value)), Me = 8, Ye = Math.max(...Ne.ticks.map((gt) => f(gt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`))), Be = $ ? 180 : 100, nt = Ne.ticks.map((gt) => f(gt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`)), at = nt.reduce((gt, Rt) => gt + Rt, Be), kt = (ae - at) / (Ne.ticks.length - 1);
        let Lt = [0];
        for (let gt = 1; gt < nt.length; gt++)
          Lt[gt] = Lt[gt - 1] + nt[gt - 1] + kt;
        let Ke = !1;
        nt.forEach((gt, Rt) => {
          if (Lt[Rt] + nt[Rt] > Lt[Rt + 1]) {
            Ke = !0;
            return;
          }
        });
        const It = Ke && n.isResponsiveTicks ? Ye + Me + 20 : 0;
        Number(n.xAxis.tickRotation) > 0 && Number(n.xAxis.tickRotation), n.dynamicMarginTop = It, n.xAxis.tickWidthMax = Ye;
        let $t = 40;
        const Bt = /* @__PURE__ */ r.createElement(it, { className: "bottom-axis", width: i[0] }, Ne.ticks.map((gt, Rt, Nt) => {
          const Ot = String(gt.value).startsWith("1") || gt.value === 0.1 ? "block" : "none", Gt = Ot === "block" ? 16 : Me, pn = { x: gt.to.x, y: Gt }, Nn = f(gt.formattedValue, `normal ${Tn[n.fontSize]}px sans-serif`), hn = 100 / Nt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const ln = n.isResponsiveTicks && Ke ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation), mn = Nn * Math.sin(ln * -1 * (Math.PI / 180)) + 25;
          return mn > $t && ($t = mn), /* @__PURE__ */ r.createElement(it, { key: `vx-tick-${gt.value}-${Rt}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ r.createElement(un, { from: gt.from, to: P === "horizontal" && n.useLogScale ? pn : gt.to, stroke: n.xAxis.tickColor, strokeWidth: Ot === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            St,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Ot : "block",
              x: gt.to.x,
              y: gt.to.y,
              angle: ln,
              verticalAnchor: ln < -50 ? "middle" : "start",
              textAnchor: ln ? "end" : "middle",
              width: Ke && !n.isResponsiveTicks && !Number(n[Le].tickRotation) ? hn : void 0,
              fill: n.xAxis.tickLabelColor
            },
            gt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ r.createElement(un, { from: Ne.axisFromPoint, to: Ne.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(St, { x: ut, y: $t + 20 + V, textAnchor: "middle", verticalAnchor: "start", fontWeight: "bold", fill: n.xAxis.labelColor }, Ne.label));
        return Ae.current && Ae.current.setAttribute("height", Number(Z) + Number($t) + (N.xAxis.label ? 50 : 0) + "px"), Bt;
      }
    ),
    k === "Paired Bar" && Wn(),
    k === "Deviation Bar" && ((Un = n.series) == null ? void 0 : Un.length) === 1 && /* @__PURE__ */ r.createElement(EE, { animatedChart: xe, xScale: _e, yScale: we, width: ae, height: te }),
    k === "Paired Bar" && /* @__PURE__ */ r.createElement(_E, { originalWidth: q, width: ae, height: te }),
    k === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      SE,
      {
        xScale: _e,
        yScale: we,
        getXAxisData: Fe,
        getYAxisData: ue,
        xMax: ae,
        yMax: te,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: pt,
        tooltipData: At,
        showTooltip: Mt
      }
    ),
    k === "Box Plot" && /* @__PURE__ */ r.createElement(bE, { xScale: _e, yScale: we }),
    (k === "Area Chart" && n.visualizationSubType === "regular" || k === "Combo") && /* @__PURE__ */ r.createElement(fE, { xScale: _e, yScale: we, yMax: te, xMax: ae, chartRef: Ae, width: ae, height: te, handleTooltipMouseOver: zt, handleTooltipMouseOff: tn, tooltipData: At, showTooltip: Mt }),
    (k === "Area Chart" && n.visualizationSubType === "stacked" || k === "Combo") && /* @__PURE__ */ r.createElement(hE, { xScale: _e, yScale: we, yMax: te, xMax: ae, chartRef: Ae, width: ae, height: te, handleTooltipMouseOver: zt, handleTooltipMouseOff: tn, tooltipData: At, showTooltip: Mt }),
    (k === "Bar" || k === "Combo" || B()) && /* @__PURE__ */ r.createElement(
      xE,
      {
        xScale: _e,
        yScale: we,
        seriesScale: Je,
        xMax: ae,
        yMax: te,
        getXAxisData: Fe,
        getYAxisData: ue,
        animatedChart: xe,
        visible: xe,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: pt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae
      }
    ),
    (k === "Line" && !B() || k === "Combo") && /* @__PURE__ */ r.createElement(
      Dh,
      {
        xScale: _e,
        yScale: we,
        getXAxisData: Fe,
        getYAxisData: ue,
        xMax: ae,
        yMax: te,
        seriesStyle: n.series,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: pt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae
      }
    ),
    (k === "Forecasting" || k === "Combo") && /* @__PURE__ */ r.createElement(
      wE,
      {
        showTooltip: Mt,
        tooltipData: At,
        xScale: _e,
        yScale: we,
        width: ae,
        le: !0,
        height: te,
        xScaleNoPadding: bt,
        chartRef: Ae,
        getXValueFromCoordinate: Ln,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((Ne) => /* @__PURE__ */ r.createElement(un, { strokeDasharray: m(Ne.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: we(Ne.value) }, to: { x: ae, y: we(Ne.value) }, display: N.horizontal ? "none" : "block" })),
    k === "Forest Plot" && /* @__PURE__ */ r.createElement(
      DE,
      {
        xScale: _e,
        yScale: we,
        seriesScale: Je,
        width: q,
        height: Z,
        getXAxisData: Fe,
        getYAxisData: ue,
        animatedChart: xe,
        visible: xe,
        handleTooltipMouseOver: zt,
        handleTooltipMouseOff: tn,
        handleTooltipClick: pt,
        tooltipData: At,
        showTooltip: Mt,
        chartRef: Ae,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !1,
    !["Paired Bar", "Box Plot", "Area Chart", "Scatter Plot", "Deviation Bar", "Forecasting", "Bar"].includes(k) && !B() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dh, { xScale: _e, yScale: we, getXAxisData: Fe, getYAxisData: ue, xMax: ae, yMax: te, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((Ne, ut) => {
      let ft = we(Ne.value);
      if (!Ne.value)
        return;
      const $ = P === "horizontal" && k === "Bar" ? n.barHeight / 4 : 0;
      if (ft)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            un,
            {
              key: `yAxis-${Ne.value}--${ut}`,
              strokeDasharray: m(Ne.lineStyle),
              stroke: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + jt, y: ft - $ },
              to: { x: q - n.yAxis.rightAxisSize, y: ft - $ }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((Ne, ut) => {
      let ft = O;
      P === "horizontal" && (ft = C);
      let $ = wn(ft) ? _e(x(Ne.value, !1)) : _e(Ne.value);
      if ($)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            un,
            {
              key: `xAxis-${Ne.value}--${ut}`,
              strokeDasharray: m(Ne.lineStyle),
              stroke: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              fill: Ne.color ? Ne.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number($) + Number(jt), y: 0 },
              to: { x: Number($) + Number(jt), y: te }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(Yf, { xScale: _e, handleTooltipClick: pt, handleTooltipMouseOff: tn, handleTooltipMouseOver: zt, showTooltip: Mt, hideTooltip: Vt, tooltipData: At, yMax: te, width: q }),
    Yt && Mt && At && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(it, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(un, { from: { x: At.dataXPosition - 10, y: 0 }, to: { x: At.dataXPosition - 10, y: te }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Yt && Mt && At && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(it, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(un, { from: { x: 0, y: At.dataYPosition }, to: { x: ae, y: At.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && R.length === 0 && /* @__PURE__ */ r.createElement(St, { x: Number(n.yAxis.size) + Number(ae / 2), y: Z / 2 - n.xAxis.padding / 2, textAnchor: "middle" }, n.chartMessage.noData),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(it, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(un, { from: { x: 0, y: Re.y }, to: { x: ae, y: Re.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    (n.visualizationType === "Bar" || B()) && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(it, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(un, { from: { x: Re.x, y: 0 }, to: { x: Re.x, y: te }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    /* @__PURE__ */ r.createElement(it, { left: Number(n.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(qf.Draggable, { xScale: _e, yScale: we, xScaleAnnotation: _t, xMax: ae, svgRef: Ae, onDragStateChange: y }))
  ), !F && At && Object.entries(At.data).length > 0 && $e && Mt && At.dataYPosition && At.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important;`), /* @__PURE__ */ r.createElement("style", null, ".tooltip {max-width:300px} !important; word-wrap: break-word; "), /* @__PURE__ */ r.createElement(ey, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: en, top: wt }, /* @__PURE__ */ r.createElement("ul", null, typeof At == "object" && Object.entries(At.data).map((Ne, ut) => /* @__PURE__ */ r.createElement(Ft, { item: Ne, key: ut }))))), W() && !F && /* @__PURE__ */ r.createElement(ky, { id: `cdc-open-viz-tooltip-${N.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Ze })));
};
const KE = (e) => {
  var re;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: l, formatDate: d, seriesHighlight: f, formatNumber: u, colorScale: m, handleChartAriaLabels: y } = ce.useContext(Et);
  let x = Number(t);
  const { minValue: S, maxValue: R } = Pc(i, a), T = { top: 5, right: 10, bottom: 10, left: 10 }, F = Number(n), k = x - i.runtime.yAxis.size, h = F - T.top - 20, P = (V) => i.runtime.xAxis.type === "date" ? l(V[i.runtime.originalXAxis.dataKey]).getTime() : V[i.runtime.originalXAxis.dataKey], O = (V, Y) => V[Y];
  let C, N;
  const { max: _, min: B } = i.runtime.yAxis, q = Number(_) >= Number(R), U = Number(B) <= Number(S);
  if (a) {
    let V = Number(B && U ? B : S), Y = Number(_ && q ? _ : Number.MIN_VALUE);
    if (Y === Number.MIN_VALUE && (Y = R), i.runtime.yAxis.paddingPercent) {
      let Z = (Y - V) * i.runtime.yAxis.paddingPercent;
      V -= Z, Y += Z;
    }
    let J = a.map((Z) => P(Z));
    i.runtime.horizontal ? (C = $n({
      domain: [V, Y],
      range: [0, k]
    }), N = i.runtime.xAxis.type === "date" ? $n({ domain: [Math.min(...J), Math.max(...J)] }) : Bo({ domain: J, padding: 0.5 }), Bo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, h]
    }), N.rangeRound([0, h])) : (V = V < 0 ? V * 1.11 : V, N = $n({
      domain: [V, Y],
      range: [h - T.bottom, T.top]
    }), C = Bo({
      domain: J,
      range: [T.left, x - T.right]
    }), Bo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, k]
    }));
  }
  const ne = [C.domain()[0], C.domain()[C.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Or, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": y(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ r.createElement("title", null, `Spark line graphic with the title ${i.title ? i.title : "No Title Found"}`), ((re = i.runtime.lineSeriesKeys) == null ? void 0 : re.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((V, Y) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    it,
    {
      style: { width: x },
      className: "sparkline-group",
      key: `series-${V}`,
      opacity: i.legend.behavior === "highlight" && f.length > 0 && f.indexOf(V) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || f.length === 0 || f.indexOf(V) !== -1 ? "block" : "none"
    },
    a.map((J, Z) => /* @__PURE__ */ r.createElement(it, { key: `series-${V}-point-${Z}` }, /* @__PURE__ */ r.createElement(St, { display: i.labels ? "block" : "none", x: C(P(J)), y: N(O(J, V)), fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[V] : V) : "#000", textAnchor: "middle" }, u(J[V])))),
    /* @__PURE__ */ r.createElement(
      Nr,
      {
        curve: xc,
        data: a,
        x: (J) => C(P(J)),
        y: (J) => N(O(J, V)),
        stroke: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[V] : V) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${Y})`
      }
    ),
    /* @__PURE__ */ r.createElement(Mh, { id: `arrow--${Y}`, refX: 2, size: 6, markerEnd: `url(#arrow--${Y})`, strokeOpacity: 1, fillOpacity: 1, fill: m ? m(i.runtime.seriesLabels ? i.runtime.seriesLabels[V] : V) : "#000" })
  ), /* @__PURE__ */ r.createElement(
    zu,
    {
      top: h + T.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: C,
      tickValues: ne,
      tickFormat: (J) => i.xAxis.type === "date" ? d(J) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, YE = ce.forwardRef((e, t) => {
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
  const y = uy(n, d, u, a);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ r.createElement(sy, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: a, seriesHighlight: i, highlight: l, highlightReset: f, currentViewport: m, formatLabels: y });
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
}, $u = (e) => /* @__PURE__ */ ce.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ ce.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), XE = ({ name: e }) => {
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
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement($u, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((f = t.forestPlot) == null ? void 0 : f.title) || "", updateField: d, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
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
  ))), /* @__PURE__ */ r.createElement(lt, { value: ((m = (u = t.forestPlot) == null ? void 0 : u.lineOfNoEffect) == null ? void 0 : m.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: d }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
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
  )), /* @__PURE__ */ r.createElement(et, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: d, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.leftLabel) || "", updateField: d, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(et, { type: "text", value: ((x = t.forestPlot) == null ? void 0 : x.rightLabel) || "", updateField: d, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
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
}, Zo = r.createContext({}), qE = (e) => {
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
}, GE = (e) => {
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
  return Object.keys(Hu).map((u) => f.push(Hu[u])), /* @__PURE__ */ r.createElement(
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
}, ZE = (e) => {
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
}, QE = (e) => {
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
}, JE = (e) => {
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
}, ek = (e) => {
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
}, tk = (e) => {
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
          options: Object.keys(Bu)
        }
      );
    });
}, nk = (e) => {
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
      )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (x) => y(x, i, u) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, m && /* @__PURE__ */ r.createElement(Yh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: m || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
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
}, rk = (e) => {
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
}, ak = (e) => {
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
}, ik = (e) => {
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
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (d) => l(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Yh, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, ok = (e) => {
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
}, Ay = (e) => {
  const { config: t } = ce.useContext(Et), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: l, index: d } = e;
  return /* @__PURE__ */ r.createElement(_y, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: d }, (f, u) => /* @__PURE__ */ r.createElement("div", { key: d, className: u.isDragging ? "currently-dragging" : "", style: a(u.isDragging, f.draggableProps.style, i), ref: f.innerRef, ...f.draggableProps, ...f.dragHandleProps }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(Dn, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(st, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Ur.Button.Remove, { series: n, index: d }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(Ur.Input.Name, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Input.Weight, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.SeriesType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.AxisPosition, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.LineType, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ForecastingColor, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Dropdown.ConfidenceInterval, { series: n, index: d }), /* @__PURE__ */ r.createElement(Ur.Checkbox.DisplayInTooltip, { series: n, index: d }))))));
}, lk = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((l, d) => /* @__PURE__ */ r.createElement(Ay, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: l, index: d, key: `series-list-${d}` }));
}, Ur = {
  Wrapper: qE,
  Dropdown: {
    SeriesType: ZE,
    AxisPosition: ek,
    ConfidenceInterval: nk,
    LineType: GE,
    ForecastingStage: QE,
    ForecastingColumn: JE,
    ForecastingColor: tk
  },
  Input: {
    Name: ak,
    Weight: rk
  },
  Checkbox: {
    DisplayInTooltip: ik
  },
  Button: {
    Remove: ok
  },
  Item: Ay,
  List: lk
}, sk = ce.memo(({ config: e, updateConfig: t }) => {
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
    ), /* @__PURE__ */ r.createElement(et, { value: u, label: "Region Label", fieldName: "label", i: T, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(et, { value: m, label: "Text Color", fieldName: "color", updateField: (k, h, P, O) => n(P, O, T) }), /* @__PURE__ */ r.createElement(et, { value: S, label: "Background", fieldName: "background", updateField: (k, h, P, O) => n(P, O, T) })), /* @__PURE__ */ r.createElement(
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
      et,
      {
        value: y,
        label: e.regions[T].fromType === "Fixed" || !((F = e.regions[T]) != null && F.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (k, h, P, O) => n(P, O, T),
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
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
    ), (e.regions[T].toType === "Fixed" || !e.regions[T].toType) && /* @__PURE__ */ r.createElement(et, { value: x, label: "To Value", fieldName: "to", updateField: (k, h, P, O) => n(P, O, T) }));
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
}), uk = ({ name: e }) => {
  const { visSupportsRegions: t } = Ts(), { config: n, updateConfig: a } = ce.useContext(Et);
  return t() ? /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e)), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(sk, { config: n, updateConfig: a }))) : null;
}, Gf = ce.createContext(null), Zf = () => {
  const e = ce.useContext(Gf);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, ck = (e) => {
  const { config: t } = ce.useContext(Et), { updateField: n } = Zf(), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasaAdditionalLabelsOnBars: l, visHasLabelOnData: d, visSupportsChartHeight: f, visSupportsSuperTitle: u, visSupportsFootnotes: m } = Ts(), { visualizationType: y, visualizationSubType: x, barStyle: S } = t, R = () => (y === "Bar" || y === "Deviation Bar") && x !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(Pn, null, " ", /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "General")), /* @__PURE__ */ r.createElement(_n, null, (t == null ? void 0 : t.visualizationType) !== "Sankey" && /* @__PURE__ */ r.createElement(Ct, { value: y, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), f() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(
    et,
    {
      type: "number",
      value: t.heights.vertical,
      section: "heights",
      fieldName: "vertical",
      label: "Chart Height",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "For some visualization types, such as the sankey diagram, it may be necessary to adjust to chart height for optimal display.")))
    }
  ), (y === "Bar" || y === "Combo" || y === "Area Chart") && /* @__PURE__ */ r.createElement(Ct, { value: x || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), y === "Area Chart" && x === "stacked" && /* @__PURE__ */ r.createElement(Ct, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Hu) }), y === "Bar" && /* @__PURE__ */ r.createElement(Ct, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), y === "Deviation Bar" && /* @__PURE__ */ r.createElement(Ct, { label: "Orientation", options: ["horizontal"] }), (y === "Bar" || y === "Deviation Bar") && /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: t.isLollipopChart ? "lollipop" : S || "flat",
      fieldName: "barStyle",
      label: "bar style",
      updateField: n,
      options: R(),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider using the 'Flat' bar style when presenting data that includes '0' values.")))
    }
  ), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Ct, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (y === "Bar" || y === "Deviation Bar") && S === "rounded" && /* @__PURE__ */ r.createElement(Ct, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), y === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Ct, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(lt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : d() && /* @__PURE__ */ r.createElement(
    lt,
    {
      value: t.labels,
      fieldName: "labels",
      label: "Display label on data",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Selecting this option will not hide the display of "zero value", "suppressed data", or "missing data" indicators on the chart (if applicable).')))
    }
  ), l() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will display 'N/A' on the Date/Category Axis, in the tooltip hover, and in the data table to indicate missing or undefined data values."))),
      value: t.general.showMissingDataLabel,
      section: "general",
      fieldName: "showMissingDataLabel",
      label: 'Display "Missing Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, ' Selecting this option will display a thin line slightly above the Date/Category Axis to indicate "zero value" where zero values are indicated in the Data Series.'))),
      value: t.general.showZeroValueDataLabel,
      section: "general",
      fieldName: "showZeroValueDataLabel",
      label: 'Display "Zero Value Data" Label',
      updateField: n
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will display the 'suppressed data symbol' on the Date/Category Axis, in the tooltip hover, and in the data table where suppressed data values are indicated in the Data Series"))),
      value: t.general.showSuppressedSymbol,
      section: "general",
      fieldName: "showSuppressedSymbol",
      label: 'Display "suppressed data" label',
      updateField: n
    }
  )), y === "Pie" && /* @__PURE__ */ r.createElement(Ct, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), y === "Line" && /* @__PURE__ */ r.createElement(
    lt,
    {
      value: t.allowLineToBarGraph,
      fieldName: "allowLineToBarGraph",
      label: "Convert to Bar Graph",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Switch to bar graph when less than 3 data points available.")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(lt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), u() && /* @__PURE__ */ r.createElement(
    et,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), m() && /* @__PURE__ */ r.createElement(
    et,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Consider adding footnotes when displaying 'suppressed,' 'no data,' and 'zero values' to ensure accurate interpretation of the data.")))
    }
  )));
}, dk = (e) => {
  const { config: t } = ce.useContext(Et), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = Zf();
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.name)), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    et,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(et, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, fk = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(hs).filter((d) => l ? d.endsWith("reverse") : !d.endsWith("reverse"));
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
}, pk = (e) => {
  var q;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = ce.useContext(Et), { visual: l } = t, { setLollipopShape: d, updateField: f } = Zf(), { visHasBarBorders: u, visCanAnimate: m, visSupportsNonSequentialPallete: y, headerColors: x, visSupportsTooltipOpacity: S, visSupportsTooltipLines: R, visSupportsBarSpace: T, visSupportsBarThickness: F, visHasDataCutoff: k, visSupportsSequentialPallete: h, visSupportsReverseColorPalette: P, visHasSingleSeriesTooltip: O } = Ts(), { twoColorPalettes: C, sequential: N, nonSequential: _ } = fk(t, n), B = (U, ne) => {
    if (console.log("value", ne), U === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: ne
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [U]: {
            ...t.sankey[U],
            default: ne
          }
        }
      });
  };
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Visual")), /* @__PURE__ */ r.createElement(_n, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (U) => {
        d(U.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Ct, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: f, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Ct, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: f, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Ct, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: f, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(lt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: f })), /* @__PURE__ */ r.createElement(Ct, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: f, options: ["small", "medium", "large"] }), u() && /* @__PURE__ */ r.createElement(Ct, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: f, options: ["true", "false"] }), m() && /* @__PURE__ */ r.createElement(lt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: f }), (((q = t.series) == null ? void 0 : q.some((U) => U.type === "Line" || U.type === "dashed-lg" || U.type === "dashed-sm" || U.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ct, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: f, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Ct, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: f, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, x.map((U) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: U,
      key: U,
      onClick: (ne) => {
        ne.preventDefault(), n({ ...t, theme: U });
      },
      className: t.theme === U ? "selected " + U : U
    }
  )))), (y() || y()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), P() && /* @__PURE__ */ r.createElement(up, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.isPaletteReversed }), h() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, N.map((U) => {
    const ne = {
      backgroundColor: a[U][2]
    }, re = {
      backgroundColor: a[U][3]
    }, V = {
      backgroundColor: a[U][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (Y) => {
          Y.preventDefault(), n({ ...t, palette: U });
        },
        className: t.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: ne }),
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: V })
    );
  }))), y() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, _.map((U) => {
    const ne = {
      backgroundColor: a[U][2]
    }, re = {
      backgroundColor: a[U][4]
    }, V = {
      backgroundColor: a[U][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (Y) => {
          Y.preventDefault(), n({ ...t, palette: U });
        },
        className: t.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: ne }),
      /* @__PURE__ */ r.createElement("span", { style: re }),
      /* @__PURE__ */ r.createElement("span", { style: V })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (U) => B("nodeColor", U.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (U) => B("storyNodeFontColor", U.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ r.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ r.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (U) => B("linkColor", U.target.value) }), /* @__PURE__ */ r.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(up, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: f, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, C.map((U) => {
    const ne = {
      backgroundColor: i[U][0]
    }, re = {
      backgroundColor: i[U][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: U,
        key: U,
        onClick: (V) => {
          V.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: U } });
        },
        className: t.twoColor.palette === U ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: ne }),
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
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), F() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(et, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: f, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(et, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: f }), T() && /* @__PURE__ */ r.createElement(et, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: f, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(lt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: f }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(lt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: f }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(lt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: f }), R() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: f }), /* @__PURE__ */ r.createElement(lt, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: f })), S() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (U) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: U.target.value
        }
      })
    }
  )), O() && /* @__PURE__ */ r.createElement(lt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: f }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (U) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: U.target.value
        }
      })
    }
  ))));
}, hk = () => {
  var f, u, m, y;
  const { config: e, updateConfig: t } = ce.useContext(Et), n = (f = e.data) == null ? void 0 : f[0], { updateField: a } = ce.useContext(Gf);
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
  return /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Sankey Settings")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("p", null, "Node stories can provide additional details to support public health messaging. COVE can display a maximum of 3 node stories."), (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: x, segmentTextBefore: S, segmentTextAfter: R }, T) => /* @__PURE__ */ r.createElement("div", { key: T, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ r.createElement("label", null, "Story Node Text", /* @__PURE__ */ r.createElement("input", { type: "text", value: x, fieldName: "StoryNode", label: "StoryNode", onChange: (F) => i("StoryNode", F.target.value, T) })), /* @__PURE__ */ r.createElement("label", null, "Story Text Before", /* @__PURE__ */ r.createElement("input", { type: "text", value: S, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (F) => i("segmentTextBefore", F.target.value, T) })), /* @__PURE__ */ r.createElement("label", null, "Story Text After", /* @__PURE__ */ r.createElement("input", { type: "text", value: R, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (F) => i("segmentTextAfter", F.target.value, T) })), /* @__PURE__ */ r.createElement(ps, { onClick: (F) => d(T), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), ((u = n == null ? void 0 : n.storyNodeText) == null ? void 0 : u.length) < 3 && /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (x) => {
        x.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), e.enableTooltips && ((y = (m = e.data) == null ? void 0 : m.tooltips) == null ? void 0 : y.length) > 0 && /* @__PURE__ */ r.createElement(lt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: a })));
};
const mk = (e) => {
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
  return /* @__PURE__ */ r.createElement(gu, { key: e.name }, /* @__PURE__ */ r.createElement(gu.Section, { title: e.name, key: e.name }, /* @__PURE__ */ r.createElement("label", { key: "key-1" }, "Show Annotation Dropdown", /* @__PURE__ */ r.createElement(
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
    return /* @__PURE__ */ r.createElement(gu, { key: R }, /* @__PURE__ */ r.createElement(gu.Section, { title: S.text ? S.text.substring(0, 15) + "..." : `Annotation ${R + 1}` }, /* @__PURE__ */ r.createElement("div", { className: "annotation-group" }, /* @__PURE__ */ r.createElement("label", null, "Annotation Text:", /* @__PURE__ */ r.createElement("textarea", { rows: 5, value: S.text, onChange: (_) => d(_.target.value, "text", R) })), /* @__PURE__ */ r.createElement("label", null, "Opacity", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        onChange: (_) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].opacity = _.target.value, t({
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
        onChange: (_) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].edit.subject = _.target.checked, t({
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
        onChange: (_) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].edit.label = _.target.checked, t({
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
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].connectionType = _.target.value, t({
            ...n,
            annotations: B
          });
        },
        value: (C = n == null ? void 0 : n.annotations[R]) == null ? void 0 : C.connectionType
      },
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "select" }, "Select"),
      ["curve", "line", "elbow", "none"].map((_, B) => /* @__PURE__ */ r.createElement("option", { key: _, value: _ }, _))
    )), S.connectionType === "curve" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, "Curve Control", /* @__PURE__ */ r.createElement(
      "input",
      {
        type: "range",
        min: "-20",
        max: "20",
        value: ((N = n == null ? void 0 : n.annotations[R]) == null ? void 0 : N.bezier) || 0,
        onChange: (_) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].bezier = _.target.value, t({
            ...n,
            annotations: B
          });
        }
      }
    ))), /* @__PURE__ */ r.createElement("label", null, "Marker", /* @__PURE__ */ r.createElement(
      "select",
      {
        key: "annotation-marker",
        value: S.marker,
        onChange: (_) => {
          const B = hr.cloneDeep(n == null ? void 0 : n.annotations);
          B[R].marker = _.target.value, t({
            ...n,
            annotations: B
          });
        }
      },
      ["arrow", "circle"].map((_, B) => /* @__PURE__ */ r.createElement("option", { key: `col-${B}` }, _))
    )), /* @__PURE__ */ r.createElement(ps, { className: "warn btn-warn btn btn-remove delete", onClick: () => u(R) }, "Delete Annotation"))));
  })), ((x = n == null ? void 0 : n.annotations) == null ? void 0 : x.length) < 3 && /* @__PURE__ */ r.createElement(ps, { onClick: f, className: "mt-2" }, "Add Annotation")));
}, ua = {
  ForestPlot: XE,
  Series: Ur,
  Regions: uk,
  General: ck,
  BoxPlot: dk,
  Visual: pk,
  Sankey: hk,
  Annotate: mk
};
const yk = ({ config: e, updateConfig: t, data: n }) => {
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
      return Object.keys(yp);
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
    let _ = [];
    e.preliminaryData && (_ = [...e.preliminaryData]), _[N][O] = C, O === "symbol" && (_[N].iconCode = yp[C]), O === "style" && (_[N].lineCode = y[C]), t({ ...e, preliminaryData: _ });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && ((P = e.preliminaryData) == null ? void 0 : P.map(({ circleSize: O, column: C, displayLegend: N, displayTable: _, displayTooltip: B, label: q, seriesKey: U, style: ne, symbol: re, type: V, value: Y, hideBarSymbol: J, hideLineStyle: Z }, ae) => {
    var te, se;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${ae}`, className: "edit-block" }, /* @__PURE__ */ r.createElement("p", null, " ", V === "suppression" ? "Suppressed" : "Effect", " Data"), /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (G) => {
          G.preventDefault(), R(ae);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Ct, { value: V, initial: e.visualizationType == "Bar" ? "" : "Select", fieldName: "type", label: "Type", updateField: (G, Q, K, W) => F(K, W, ae), options: m() }), V === "suppression" ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, ` If no “Data Series" is selected, the symbol will be applied to "all" suppressed values indicated in the dataset. If you select a particular data series, there's no need to fill in “suppression line style” and “suppression symbol” below.`))),
        value: C,
        initial: "Select",
        fieldName: "column",
        label: "Add Data Series",
        updateField: (G, Q, K, W) => F(K, W, ae),
        options: (te = e.runtime) == null ? void 0 : te.seriesKeys
      }
    ), /* @__PURE__ */ r.createElement(et, { value: Y, fieldName: "value", label: "Suppressed Data  Value", updateField: (G, Q, K, W) => F(K, W, ae) }), (d || e.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "The recommended approach for presenting data is to include a footnote indicating any data suppression."))),
        value: ne,
        initial: "Select",
        fieldName: "style",
        label: "suppression line style",
        updateField: (G, Q, K, W) => F(K, W, ae),
        options: x(V)
      }
    ), /* @__PURE__ */ r.createElement(lt, { value: Z, fieldName: "hideLineStyle", label: "Hide Suppressed line Style", updateField: (G, Q, K, W) => F(K, W, ae) })), (f || e.visualizationType === "Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      Ct,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The suggested method for presenting suppressed data is to use "double asterisks". If "double asterisks" are already used elsewhere (e.g., footnotes), please select an alternative symbol from the menu to denote data suppression.'))),
        value: re,
        initial: "Select",
        fieldName: "symbol",
        label: e.visualizationType === "Combo" ? "suppression bar symbol" : "suppression symbol",
        updateField: (G, Q, K, W) => F(K, W, ae),
        options: S()
      }
    ), /* @__PURE__ */ r.createElement(lt, { value: J, fieldName: "hideBarSymbol", label: "Hide Suppressed Bar Symbol  ", updateField: (G, Q, K, W) => F(K, W, ae) })), /* @__PURE__ */ r.createElement(
      et,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This label will display in the tooltip and legend."))),
        value: q || "Suppressed",
        fieldName: "label",
        label: "Suppressed Data Label",
        placeholder: "",
        updateField: (G, Q, K, W) => F(K, W, ae)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enabling this tooltip will provide a clearer indication of 'suppressed' or 'zero data' values, whichever is applicable. Deselecting 'Display In Tooltip' indicates that you do not want to display 'suppressed' or 'zero data' values in tooltips when hovering over them."))),
        value: B,
        fieldName: "displayTooltip",
        label: "Display in tooltips",
        updateField: (G, Q, K, W) => F(K, W, ae)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display in Legend" indicates that you do not want to display suppressed data in the legend.'))),
        value: N,
        fieldName: "displayLegend",
        label: "Display in legend",
        updateField: (G, Q, K, W) => F(K, W, ae)
      }
    ), /* @__PURE__ */ r.createElement(
      lt,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Deselecting "Display In Data Table" indicates that you do not want to display suppressed data in the data table.'))),
        value: _,
        fieldName: "displayTable",
        label: "Display in table",
        updateField: (G, Q, K, W) => F(K, W, ae)
      }
    )) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ct, { value: U, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (G, Q, K, W) => F(K, W, ae), options: e.runtime.lineSeriesKeys ?? ((se = e.runtime) == null ? void 0 : se.seriesKeys) }), /* @__PURE__ */ r.createElement(Ct, { value: C, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (G, Q, K, W) => F(K, W, ae), options: u() }), /* @__PURE__ */ r.createElement(
      et,
      {
        tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "If 'Filled Circles' is selected as the style, this field is optional, and the style 'Filled Circles' will apply to all points within the associated series data."))),
        value: Y,
        fieldName: "value",
        label: "VALUE TO TRIGGER",
        updateField: (G, Q, K, W) => F(K, W, ae)
      }
    ), /* @__PURE__ */ r.createElement(Ct, { value: ne, initial: "Select", fieldName: "style", label: "Style", updateField: (G, Q, K, W) => F(K, W, ae), options: x(V) }), ne.includes("Circles") && /* @__PURE__ */ r.createElement(et, { className: "number-narrow", type: "number", value: O, fieldName: "circleSize", label: "circle size", updateField: (G, Q, K, W) => F(K, W, ae) }), ne !== "Filled Circles" && /* @__PURE__ */ r.createElement(et, { value: q, fieldName: "label", label: "Label", placeholder: "", updateField: (G, Q, K, W) => F(K, W, ae) })));
  })), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: T, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Bar/Line"));
}, gk = () => {
  var pn, Nn, hn, ln, mn, cn, En, qn, g, A, z, j, be, ve, De, Ue, ot, ht;
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
  } = ce.useContext(Et), { minValue: C, maxValue: N, existPositiveValue: _, isAllLine: B } = Pc(e, u), q = { data: a, config: e }, { leftMax: U, rightMax: ne } = Cy(q), {
    headerColors: re,
    visSupportsTooltipLines: V,
    visSupportsNonSequentialPallete: Y,
    visSupportsSequentialPallete: J,
    visSupportsReverseColorPalette: Z,
    visHasLabelOnData: ae,
    visHasNumbersOnBars: te,
    visHasAnchors: se,
    visHasBarBorders: G,
    visHasDataCutoff: Q,
    visHasSelectableLegendValues: K,
    visCanAnimate: W,
    visHasLegend: Ce,
    visHasLegendAxisAlign: xe,
    visHasBrushChart: fe,
    visSupportsDateCategoryAxis: Re,
    visSupportsValueAxisMin: je,
    visSupportsValueAxisMax: Ze,
    visSupportsDateCategoryAxisLabel: Ae,
    visSupportsDateCategoryAxisLine: me,
    visSupportsDateCategoryAxisTicks: Fe,
    visSupportsDateCategoryTickRotation: ue,
    visSupportsDateCategoryNumTicks: de,
    visSupportsDateCategoryAxisPadding: Le,
    visSupportsRegions: ke,
    visSupportsFilters: Ie,
    visSupportsPreliminaryData: qe,
    visSupportsValueAxisGridLines: Qe,
    visSupportsValueAxisLine: mt,
    visSupportsValueAxisTicks: tt,
    visSupportsValueAxisLabels: Ve,
    visSupportsBarSpace: _e,
    visSupportsBarThickness: we,
    visSupportsFootnotes: Je,
    visSupportsSuperTitle: Ge,
    visSupportsDataCutoff: dt,
    visSupportsChartHeight: bt,
    visSupportsLeftValueAxis: yt,
    visSupportsTooltipOpacity: _t,
    visSupportsRankByValue: an,
    visSupportsResponsiveTicks: on,
    visSupportsDateCategoryHeight: Xt,
    visHasDataSuppression: Jt
  } = Ts();
  ce.useEffect(() => {
    let oe = [];
    e.series && (oe = e.series.map((le) => ({
      ...le,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: oe
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
  const { hasRightAxis: Kt } = Xf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), At = (oe, le) => ({
    ...le
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
  }, Vt = (oe) => {
    oe.orientation === "horizontal" && (oe.labels = !1), oe.table.show === void 0 && (oe.table.show = !y), oe.visualizationType === "Combo" && (oe.orientation = "vertical"), wn(oe.xAxis) && !oe.xAxis.padding && (oe.xAxis.padding = 6), oe.visualizationType === "Line" && (oe.visualizationSubType = "regular", oe.barStyle = "flat", oe.isLollipopChart = !1);
  }, $e = (oe, le, ye, Oe) => {
    if (R && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", oe, le, ye, Oe), oe === "boxplot" && le === "legend") {
      t({
        ...e,
        [oe]: {
          ...e[oe],
          [le]: {
            ...e.boxplot[le],
            [ye]: Oe
          }
        }
      });
      return;
    }
    if (oe === "boxplot" && le === "labels") {
      t({
        ...e,
        [oe]: {
          ...e[oe],
          [le]: {
            ...e.boxplot[le],
            [ye]: Oe
          }
        }
      });
      return;
    }
    const vt = (In) => In === 0 ? !0 : !!In;
    if (oe === "columns" && vt(le) && vt(ye)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [le]: {
            ...e.columns[le],
            [ye]: Oe
          }
        }
      });
      return;
    }
    if (oe === null && le === null) {
      vt(ye) || console.error("fieldName is required");
      let In = { ...e, [ye]: Oe };
      Vt(In), t(In);
      return;
    }
    const gn = Array.isArray(e[oe]);
    let kn = gn ? [...e[oe], Oe] : { ...e[oe], [ye]: Oe };
    vt(le) && (gn ? (kn = [...e[oe]], kn[le] = { ...kn[le], [ye]: Oe }) : typeof Oe == "string" ? kn[le] = Oe : vt(ye) && (kn = { ...e[oe], [le]: { ...e[oe][le], [ye]: Oe } }));
    let dr = { ...e, [oe]: kn };
    Vt(dr), t(dr);
  }, [en, wt] = ce.useState(!0), [zt, pt] = ce.useState(!1);
  if (i)
    return null;
  ce.useEffect(() => {
    var oe;
    (oe = e.general) != null && oe.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const tn = (oe) => {
    t({
      ...e,
      lollipopShape: oe
    });
  }, xn = (oe) => {
    let le = e.series ? [...e.series] : [], ye = Array.from(new Set(a.map((vt) => vt[oe]))), Oe = [];
    ye.forEach((vt) => {
      Oe.push({ key: vt });
    }), e.visualizationType === "Forecasting" ? le.push({ dataKey: oe, type: e.visualizationType, stages: Oe, stageColumn: oe, axis: "Left", tooltip: !0 }) : le.push({ dataKey: oe, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: le });
  }, Ft = (oe) => {
    const le = e.series[0].dataKey, ye = a.sort((vt, gn) => vt[le] - gn[le]), Oe = oe === "asc" ? ye : ye.reverse();
    t({ ...e }, Oe);
  }, nn = (oe) => {
    let le = [...e.exclusions.keys];
    le.push(oe);
    let ye = { ...e.exclusions, keys: le };
    t({ ...e, exclusions: ye });
  }, Ln = (oe) => {
    let le = -1, ye = [...e.exclusions.keys];
    for (let Oe = 0; Oe < ye.length; Oe++)
      if (ye[Oe] === oe) {
        le = Oe;
        break;
      }
    if (le !== -1) {
      ye.splice(le, 1);
      let Oe = { ...e.exclusions, keys: ye }, vt = { ...e, exclusions: Oe };
      ye.length === 0 && delete vt.exclusions.keys, t(vt);
    }
  }, Yt = (oe = !0) => {
    let le = {};
    if (u.forEach((ye) => {
      Object.keys(ye).forEach((Oe) => le[Oe] = !0);
    }), oe) {
      const { lower: ye, upper: Oe } = e.confidenceKeys || {};
      Object.keys(le).forEach((vt) => {
        (e.series && e.series.filter((gn) => gn.dataKey === vt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(vt) && (ye && Oe || ye || Oe) && vt !== ye && vt !== Oe) && delete le[vt];
      });
    }
    return Object.keys(le);
  }, jt = (oe) => {
    if (!oe)
      return [];
    const le = /* @__PURE__ */ new Set();
    for (let ye = 0; ye < oe.length; ye++)
      for (const [Oe] of Object.entries(oe[ye]))
        le.add(Oe);
    return Array.from(le);
  }, Tn = (oe, le = !1) => {
    let ye = [];
    return m.forEach((Oe) => {
      ye.push(Oe[oe]);
    }), le ? [...new Set(ye)] : ye;
  }, Hn = () => {
    wt(!en), t({
      ...e,
      showEditorPanel: !en
    });
  }, Mn = () => {
    let oe = JSON.parse(JSON.stringify(e));
    return S() === !1 && delete oe.newViz, delete oe.runtime, oe;
  };
  ce.useEffect(() => {
    if (x) {
      const oe = Mn();
      x(oe);
    }
  }, [e]), ce.useEffect(() => {
    const oe = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], le = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: le
      },
      yAxis: {
        ...e.yAxis,
        anchors: oe
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
    const oe = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, oe.map((le, ye) => /* @__PURE__ */ r.createElement("li", { key: le }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": le }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, le)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => Ln(le) }, "×"))));
  }, [e]), Wn = (oe, le) => {
    let ye = e.series, [Oe] = ye.splice(oe, 1);
    ye.splice(le, 0, Oe), t({ ...e, series: ye });
  };
  e.isLollipopChart && ((pn = e == null ? void 0 : e.series) == null ? void 0 : pn.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Nn = e == null ? void 0 : e.series) == null ? void 0 : Nn.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((hn = e == null ? void 0 : e.series) == null ? void 0 : hn.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((ln = e == null ? void 0 : e.series) == null ? void 0 : ln.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Vn = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Cn, Sn] = ce.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), jn = () => {
    const oe = e[Vn].max, le = e[Vn].rightMax;
    let ye = "", Oe = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (oe && parseFloat(oe) < parseFloat(N) && _):
          ye = "Max value must be more than " + N;
          break;
        case (oe && parseFloat(oe) < 0 && !_):
          ye = "Value must be more than or equal to 0";
          break;
        default:
          ye = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (oe && parseFloat(oe) < U):
          ye = "Max value must be more than " + U;
          break;
        case (le && parseFloat(le) < ne):
          Oe = "Max value must be more than " + ne;
          break;
        case (oe && parseFloat(oe) < 0 && !_):
          ye = "Value must be more than or equal to 0";
          break;
        default:
          ye = "";
      }
    Sn((vt) => ({ ...vt, maxMsg: ye, rightMaxMessage: Oe }));
  }, zn = () => {
    const oe = parseFloat(e[Vn].min);
    let le = Number(C), ye = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && oe < 0):
        ye = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && oe > le):
        ye = "Value should not exceed " + C;
        break;
      case (e.visualizationType === "Combo" && B && oe > le):
        ye = "Value should not exceed " + C;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !B) && le > 0 && oe > 0):
        ye = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && oe >= Math.min(le, e.xAxis.target)):
        ye = "Value must be less than " + Math.min(le, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && oe && le < 0 && oe > le):
        ye = "Value should not exceed " + C;
        break;
      default:
        ye = "";
    }
    Sn((Oe) => ({ ...Oe, minMsg: ye }));
  };
  ce.useEffect(() => {
    zn(), jn();
  }, [C, N, e]);
  const Un = ((mn = e == null ? void 0 : e.dataKey) == null ? void 0 : mn.includes("http://")) || ((cn = e == null ? void 0 : e.dataKey) == null ? void 0 : cn.includes("https://")), Ne = () => {
    var oe, le;
    if (R !== void 0 && R && !((oe = e == null ? void 0 : e.xAxis) != null && oe.dataKey)) {
      let ye = Yt(!1);
      if (ye.includes("Date"))
        return "Date";
      if (ye.includes("Race"))
        return "Race";
      if (ye.includes("Month"))
        return "Month";
    }
    return ((le = e == null ? void 0 : e.xAxis) == null ? void 0 : le.dataKey) || "";
  }, ut = () => {
    if (R !== void 0 && R && Yt(!1).length > 0) {
      let oe = Yt(!1).filter((le) => le !== Ne());
      if (oe.length > 0)
        return oe[0];
    }
    return "";
  };
  if (R && !e.xAxis.dataKey && (e.xAxis.dataKey = Ne()), R && ((En = e == null ? void 0 : e.series) == null ? void 0 : En.length) === 0) {
    let oe = ut();
    oe !== "" && xn(oe), R && console.log("### COVE DEBUG: Chart: Setting default datacol=", oe);
  }
  const ft = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], $ = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((qn = e.data) == null ? void 0 : qn[0]) || []).map((le) => {
      const ye = e == null ? void 0 : e.series.some((Oe) => Oe.dataKey === le);
      if (le !== e.xAxis.dataKey && !ye)
        return $.push(
          /* @__PURE__ */ r.createElement("option", { value: le, key: le }, le)
        );
    });
    let oe = {};
    e.data.forEach((le) => {
      Object.keys(le).forEach((ye) => {
        oe[ye] = oe[ye] || [];
        const Oe = typeof le[ye] == "number" ? le[ye].toString() : le[ye];
        oe[ye].indexOf(Oe) === -1 && oe[ye].push(Oe);
      });
    });
  }
  if (!e.data && a) {
    if (!a[0])
      return;
    Object.keys(a[0]).map((le) => {
      const ye = a.some((Oe) => Oe.dataKey === le);
      if (le !== e.xAxis.dataKey && !ye)
        return $.push(
          /* @__PURE__ */ r.createElement("option", { value: le, key: le }, le)
        );
    });
    let oe = {};
    a.forEach((le) => {
      Object.keys(le).forEach((ye) => {
        oe[ye] = oe[ye] || [];
        const Oe = typeof le[ye] == "number" ? le[ye].toString() : le[ye];
        oe[ye].indexOf(Oe) === -1 && oe[ye].push(Oe);
      });
    });
  }
  const Me = (oe) => {
    const le = hr.cloneDeep(e.columns);
    delete le[oe], t({
      ...e,
      columns: le
    });
  }, Ye = async (oe, le, ye) => {
    switch (le) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [oe]: {
              ...e.columns[oe],
              [le]: ye
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [oe]: {
              ...e.columns[oe],
              [le]: ye
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Be,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBar: at,
    handleAddNewHighlightedBar: kt,
    handleRemoveHighlightedBar: Lt,
    handleUpdateHighlightedBarColor: Ke,
    handleHighlightedBarLegendLabel: It,
    handleUpdateHighlightedBorderWidth: $t
  } = Ec(e, t), Bt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, gt = () => {
    const oe = a.map((le) => le[e.legend.colorCode]);
    return Bt ? oe : Yt(!1).filter((le) => le !== e.xAxis.dataKey);
  }, Rt = (oe) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: oe } });
  }, Nt = (oe, le, ye) => {
    var gn;
    const Oe = { ...e[oe], [le]: ye }, vt = { ...e, [oe]: Oe };
    ye === "highlight" && ((gn = e.legend.seriesHighlight) != null && gn.length) && (vt.legend.seriesHighlight.length = 0), t(vt);
  }, Ot = (oe, le, ye) => {
    const Oe = { ...e.xAxis[oe] };
    Oe[le] = ye;
    const vt = { ...e, xAxis: { ...e.xAxis, [oe]: Oe } };
    t(vt);
  }, Gt = {
    addNewExclusion: nn,
    data: a,
    editColumn: Ye,
    getColumns: Yt,
    getDataValueOptions: jt,
    getDataValues: Tn,
    getItemStyle: At,
    handleSeriesChange: Wn,
    handleAddNewHighlightedBar: kt,
    setCategoryAxis: Ne,
    sortSeries: Ft,
    updateField: $e,
    warningMsg: Cn,
    highlightedBarValues: Be,
    handleHighlightedBarLegendLabel: It,
    handleUpdateHighlightedBar: at,
    handleRemoveHighlightedBar: Lt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBorderWidth: $t,
    handleUpdateHighlightedBarColor: Ke,
    setLollipopShape: tn
  };
  return /* @__PURE__ */ r.createElement(Gf.Provider, { value: Gt }, /* @__PURE__ */ r.createElement(Or, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(Ud.Sidebar, { displayPanel: en, isDashboard: y, title: "Configure Chart", onBackClick: Hn }, /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(ua.General, { name: "General" }), /* @__PURE__ */ r.createElement(ua.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ r.createElement(ua.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement($u, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (oe) => {
        oe.target.value !== "" && oe.target.value !== "Select" && xn(oe.target.value), oe.target.value = "";
      },
      options: Yt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(ua.Series.Wrapper, { getColumns: Yt }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(Ny, { onDragEnd: ({ source: oe, destination: le }) => Wn(oe.index, le.index) }, /* @__PURE__ */ r.createElement(Oy, { droppableId: "filter_order" }, (oe) => /* @__PURE__ */ r.createElement("ul", { ...oe.droppableProps, className: "series-list", ref: oe.innerRef }, /* @__PURE__ */ r.createElement(ua.Series.List, { series: e.series, getItemStyle: At, sortableItemStyles: Mt, chartsWithOptions: ft }), oe.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Ct, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: $e, initial: "Select", options: Yt() }), /* @__PURE__ */ r.createElement(Ct, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: $e, initial: "Select", options: Yt() })), an() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Ct, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (oe) => Ft(oe.target.value), options: ["asc", "desc"] }), qe() && /* @__PURE__ */ r.createElement(yk, { config: e, updateConfig: t, data: a }))), /* @__PURE__ */ r.createElement(ua.BoxPlot, { name: "Measures" }), yt() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement($u, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: $e,
      options: Yt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: $e }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(lt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: $e }), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.yAxis.numTicks,
      placeholder: "Auto",
      type: "number",
      section: "yAxis",
      fieldName: "numTicks",
      label: "Number of ticks",
      className: "number-narrow",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used."))),
      updateField: $e
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
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.labelOffset, section: "yAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: $e }), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(lt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: $e }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(et, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: $e }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), Qe() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: $e }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(et, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: $e, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(lt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: $e })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: $e, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, mt() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: $e }), Ve() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: $e }), tt() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: $e }), Ze() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.maxMsg), je() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: $e })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.maxMsg), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg)), se() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (A = (g = e.yAxis) == null ? void 0 : g.anchors) == null ? void 0 : A.map((oe, le) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${le}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe.splice(le, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].value ? e.yAxis.anchors[le].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe[le].value = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].color ? e.yAxis.anchors[le].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe[le].color = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[le].lineStyle || "",
      onChange: (ye) => {
        const Oe = [...e.yAxis.anchors];
        Oe[le].lineStyle = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
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
      onClick: (oe) => {
        oe.preventDefault();
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
  )), se() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (j = (z = e.xAxis) == null ? void 0 : z.anchors) == null ? void 0 : j.map((oe, le) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `xaxis-anchors-${le}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe.splice(le, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].value ? e.xAxis.anchors[le].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe[le].value = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].color ? e.xAxis.anchors[le].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe[le].color = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[le].lineStyle || "",
      onChange: (ye) => {
        const Oe = [...e.xAxis.anchors];
        Oe[le].lineStyle = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
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
      onClick: (oe) => {
        oe.preventDefault();
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
  )))), Kt && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: $e }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(lt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: $e, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Tick Labels", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.rightMaxMessage), /* @__PURE__ */ r.createElement(et, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: $e }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Cn.minMsg))), Re() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement($u, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(_n, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (oe) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: oe.target.value
        }
      })
    },
    /* @__PURE__ */ r.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ r.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ r.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: $e }), Le() && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.xAxis.dataKey || Ne() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: $e,
      options: Yt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: $e,
      options: Yt(!1),
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: $e }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), wn(e.xAxis) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: $e
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: $e
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: $e
    }
  ), /* @__PURE__ */ r.createElement(
    et,
    {
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: $e
    }
  )), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: $e
    }
  ), !1, e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(qt, null)), /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (oe) => {
        oe.target.value !== "" && oe.target.value !== "Select" && nn(oe.target.value), oe.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(et, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: $e, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(et, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: $e, value: e.exclusions.dateEnd || "" }))), de() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
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
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Number of data points which are assigned a tick, starting from the right most data point. Value of 1 will show a tick at every data point, value of 2 will show a tick for every other, etc.")))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => pt(!zt), className: "edit-label" }, "Step Count: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${zt ? "90deg" : "0deg"})` } }, ">"))), zt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Qf).map((oe) => /* @__PURE__ */ r.createElement(
    et,
    {
      key: `viewport-step-count-input-${oe}`,
      value: e.xAxis.viewportStepCount ? e.xAxis.viewportStepCount[oe] : void 0,
      placeholder: "Auto",
      type: "number",
      label: oe,
      className: "number-narrow",
      updateField: (le, ye, Oe, vt) => Ot("viewportStepCount", oe, vt)
    }
  ))))), de() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
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
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Apporoximate number of ticks. Other factors such as space available and data may change the exact number of ticks used. To enforce an exact number of ticks, check "Manual Ticks" above.')))
    }
  ), /* @__PURE__ */ r.createElement("div", { className: "viewport-overrides" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("button", { onClick: () => pt(!zt), className: "edit-label" }, "Number of ticks: viewport overrides ", /* @__PURE__ */ r.createElement("span", { style: { transform: `rotate(${zt ? "90deg" : "0deg"})` } }, ">"))), zt && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, Object.keys(Qf).map((oe) => /* @__PURE__ */ r.createElement(
    et,
    {
      key: `viewport-num-ticks-input-${oe}`,
      value: e.xAxis.viewportNumTicks ? e.xAxis.viewportNumTicks[oe] : void 0,
      placeholder: "Auto",
      type: "number",
      label: oe,
      className: "number-narrow",
      updateField: (le, ye, Oe, vt) => Ot("viewportNumTicks", oe, vt)
    }
  ))))), Xt() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: $e }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: $e }), /* @__PURE__ */ r.createElement(et, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: $e, min: 0 })), on() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(lt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: $e }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ue() && /* @__PURE__ */ r.createElement(et, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: $e }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    et,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, me() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: $e }), Ae() && /* @__PURE__ */ r.createElement(lt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: $e })) : /* @__PURE__ */ r.createElement(r.Fragment, null, me() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: $e }), Ae() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Tick Labels", updateField: $e }), Fe() && /* @__PURE__ */ r.createElement(lt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: $e })), ((be = e.series) == null ? void 0 : be.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Be.map((oe, le) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${le}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (ye) => Lt(ye, le) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", le + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[le].value, onChange: (ye) => at(ye, le) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), nt && [...new Set(nt)].sort().map((ye) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${le}-${ye}` }, ye)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[le].color ? e.highlightedBarValues[le].color : "", onChange: (ye) => Ke(ye, le) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[le].borderWidth ? e.highlightedBarValues[le].borderWidth : "", onChange: (ye) => $t(ye, le) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[le].legendLabel ? e.highlightedBarValues[le].legendLabel : "", onChange: (ye) => It(ye, le) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (oe) => kt(oe) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(qt, null)), /* @__PURE__ */ r.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (oe) => {
        oe.target.value !== "" && oe.target.value !== "Select" && nn(oe.target.value), oe.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), se() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (De = (ve = e.xAxis) == null ? void 0 : ve.anchors) == null ? void 0 : De.map((oe, le) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${le}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe.splice(le, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].value ? e.xAxis.anchors[le].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe[le].value = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[le].color ? e.xAxis.anchors[le].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.xAxis.anchors];
        Oe[le].color = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[le].lineStyle || "",
      onChange: (ye) => {
        const Oe = [...e.xAxis.anchors];
        Oe[le].lineStyle = ye.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Oe
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
      onClick: (oe) => {
        oe.preventDefault();
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
  )), se() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(Pi, { allowZeroExpanded: !0 }, (ot = (Ue = e.yAxis) == null ? void 0 : Ue.anchors) == null ? void 0 : ot.map((oe, le) => /* @__PURE__ */ r.createElement(Pn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${le}` }, /* @__PURE__ */ r.createElement(Rn, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Dn, { className: "accordion__button accordion__button" }, "Anchor ", le + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe.splice(le, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].value ? e.yAxis.anchors[le].value : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe[le].value = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[le].color ? e.yAxis.anchors[le].color : "",
      onChange: (ye) => {
        ye.preventDefault();
        const Oe = [...e.yAxis.anchors];
        Oe[le].color = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[le].lineStyle || "",
      onChange: (ye) => {
        const Oe = [...e.yAxis.anchors];
        Oe[le].lineStyle = ye.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Oe
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
      onClick: (oe) => {
        oe.preventDefault();
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
  )))), /* @__PURE__ */ r.createElement(ua.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Columns")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(sg, { config: e, updateField: $e, deleteColumn: Me }), " ")), Ce() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Legend")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(lt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: $e }), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), /* @__PURE__ */ r.createElement(
    lt,
    {
      value: e.legend.hideSuppressedLabels,
      section: "legend",
      fieldName: "hideSuppressedLabels",
      label: "Hide Suppressed Labels",
      updateField: $e,
      tooltip: /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, `Hiding suppressed labels will not override the 'Special Class' assigned to line chart indicating "suppressed" data in the Data Series Panel.`)))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(lt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: $e }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Ct, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: $e, options: jt(a) }), /* @__PURE__ */ r.createElement(Ct, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[oe, , le, ye]) => Nt(oe, le, ye), options: ["highlight", "isolate"] }), xe() && /* @__PURE__ */ r.createElement(lt, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: $e }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(lt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: $e }), K && e.legend.behavior === "isolate" && !Bt && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ r.createElement(ge, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(ge.Target, null, /* @__PURE__ */ r.createElement(st, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(ge.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((oe, le) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: `${oe}-${le}` }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ye) => {
        ye.preventDefault();
        const Oe = [...e.legend.seriesHighlight];
        Oe.splice(le, 1), $e("legend", null, "seriesHighlight", Oe), Oe.length || P();
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    Ct,
    {
      value: e.legend.seriesHighlight[le],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ye) => {
        const Oe = [...e.legend.seriesHighlight];
        Oe.includes(ye.target.value) || (Oe[le] = ye.target.value, Rt([...Oe]));
      },
      options: gt()
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (oe) => {
        oe.preventDefault();
        const le = gt(), ye = [...e.legend.seriesHighlight];
        if (ye.length < le.length) {
          const [vt] = le.filter((gn) => !ye.includes(gn));
          ye.push(vt), Rt([...ye]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ r.createElement(et, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: $e }), /* @__PURE__ */ r.createElement(Ct, { value: (ht = e.legend) == null ? void 0 : ht.position, section: "legend", fieldName: "position", label: "Position", updateField: $e, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: $e }), /* @__PURE__ */ r.createElement(lt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: $e })), /* @__PURE__ */ r.createElement(et, { type: "textarea", value: e.legend.description, updateField: $e, section: "legend", fieldName: "description", label: "Legend Description" }))), Ie() && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Filters")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(ug, { config: e, updateField: $e, rawData: k }))), /* @__PURE__ */ r.createElement(ua.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(Pn, null, /* @__PURE__ */ r.createElement(Rn, null, /* @__PURE__ */ r.createElement(Dn, null, "Data Table")), /* @__PURE__ */ r.createElement(_n, null, /* @__PURE__ */ r.createElement(cg, { config: e, columns: Object.keys(a[0] || {}), updateField: $e, isDashboard: y, isLoadedFromUrl: Un }), " ")), /* @__PURE__ */ r.createElement(ua.Annotate, { name: "Text Annotations" })), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Fy, { loadConfig: t, config: e, convertStateToConfig: Mn }))));
}, Nh = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, _u = (e, t) => {
  var n;
  return e ? (n = e.legend) != null && n.hide ? e != null && e.title ? `dataTableSection__${e.title.replace(/\s/g, "")}` : "dataTableSection" : t : "dataTableSection";
}, vk = (e) => {
  e.sort((m, y) => m - y);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(a.length / 2), d = n ? (a[l - 1] + a[l]) / 2 : a[l], f = Math.floor(i.length / 2), u = n ? (i[f - 1] + i[f]) / 2 : i[f];
  return { q1: d, q3: u };
}, xk = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), bk = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Sk = [
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
  let n = ms(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
};
const Fh = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, l = a.search, d = t.exec(i);
  if (d && d[1])
    return d[1];
  const f = n.exec(l);
  return f && f[1] ? f[1] : "";
};
function Jk({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: l, setEditing: d, hostname: f, link: u, setSharedFilter: m, setSharedFilterValue: y, dashboardConfig: x }) {
  var Mn, qt, Wn, Vn, Cn, Sn, jn, zn, Un, Ne, ut, ft;
  const S = new lg(), [R, T] = ce.useState(!0), [F, k] = ce.useState(null), [h, P] = ce.useState({}), [O, C] = ce.useState(h.data || []), [N, _] = ce.useState(void 0), [B, q] = ce.useState(void 0), [U, ne] = ce.useState(t && ((qt = (Mn = t == null ? void 0 : t.legend) == null ? void 0 : Mn.seriesHighlight) != null && qt.length) ? [...(Wn = t == null ? void 0 : t.legend) == null ? void 0 : Wn.seriesHighlight] : []), [re, V] = ce.useState("lg"), [Y, J] = ce.useState([]), [Z, ae] = ce.useState(), [te, se] = ce.useState(), [G, Q] = ce.useState(!1), [K, W] = ce.useState(!1), [Ce, xe] = ce.useState([]), [fe] = ce.useState(`cove-${Math.random().toString(16).slice(-4)}`), [Re, je] = ce.useState({
    data: [],
    isActive: !1,
    isBrushing: !1
  });
  ce.useRef(/* @__PURE__ */ new Map()), ce.useRef();
  const Ze = ce.useRef(null), Ae = ($) => {
    W($);
  };
  a && console.log("Chart config, isEditor", h, n);
  let { legend: me, title: Fe, description: ue, visualizationType: de } = h;
  n && (!Fe || Fe === "") && (Fe = "Chart Title"), h.table && (!((Vn = h.table) != null && Vn.label) || ((Cn = h.table) == null ? void 0 : Cn.label) === "") && (h.table.label = "Data Table");
  const { barBorderClass: Le, lineDatapointClass: ke, contentClasses: Ie, sparkLineStyles: qe } = dg(h), Qe = ce.useId(), mt = () => Lc(h.visualizationType, B, h.allowLineToBarGraph), tt = async () => {
    var $;
    if (h.dataUrl) {
      const Me = new URL(h.runtimeDataUrl || h.dataUrl, window.location.origin);
      let Ye = Object.fromEntries(new URLSearchParams(Me.search)), Be = !1;
      if (($ = h.filters) == null || $.forEach((kt) => {
        kt.type === "url" && Ye[kt.queryParameter] !== decodeURIComponent(kt.active) && (Ye[kt.queryParameter] = kt.active, Be = !0);
      }), (!h.formattedData || h.formattedData.urlFiltered) && !Be)
        return;
      let nt = `${Me.origin}${Me.pathname}${Object.keys(Ye).map((kt, Lt) => {
        let Ke = Lt === 0 ? "?" : "&";
        return Ke += kt + "=", Ke += Ye[kt], Ke;
      }).join("")}`, at = [];
      try {
        const kt = Fh(Me.href);
        kt === "csv" || Jf(nt) ? at = await fetch(nt).then((Lt) => Lt.text()).then((Lt) => np.parse(Lt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : kt === "json" || ep(nt) ? at = await fetch(nt).then((Lt) => Lt.json()) : at = [];
      } catch {
        console.error(`Cannot parse URL: ${nt}`), at = [];
      }
      h.dataDescription && (at = S.autoStandardize(at), at = S.developerStandardize(at, h.dataDescription)), Object.assign(at, { urlFiltered: !0 }), _e({ ...h, runtimeDataUrl: nt, data: at, formattedData: at }), at && (C(at), _(at), q(bi(h.filters, at)));
    }
  }, Ve = async () => {
    let $ = t || await (await fetch(e)).json(), Me = $.data || [];
    const Ye = $.filters ? $.filters.filter((at) => at.type === "url").length > 0 : !1;
    if ($.dataUrl && !Ye)
      try {
        const at = Fh($.dataUrl);
        (at === "csv" || Jf($.dataUrl)) && (Me = await fetch($.dataUrl + `?v=${vp()}`).then((kt) => kt.text()).then((kt) => (kt = kt.replace(/(".*?")|,/g, (...Ke) => Ke[1] || "|"), kt = kt.replace(/["]+/g, ""), np.parse(kt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (at === "json" || ep($.dataUrl)) && (Me = await fetch($.dataUrl + `?v=${vp()}`).then((kt) => kt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${$.dataUrl}`), Me = [];
      }
    $.dataDescription && (Me = S.autoStandardize(Me), Me = S.developerStandardize(Me, $.dataDescription)), Me && (C(Me), _(Me)), $ !== void 0 && $.table !== void 0 && (!$.table || !$.table.showVertical) && ($.table = $.table || {}, $.table.showVertical = !1);
    let Be = { ...jd, ...$ };
    Be.filters && Be.filters.forEach((at, kt) => {
      const Lt = My(at);
      Lt && (Be.filters[kt].active = Lt);
    }), Be.visualizationType === "Box Plot" && (Be.legend.hide = !0), Be.table.show === void 0 && (Be.table.show = !i), Be.series.forEach((at) => {
      (at.tooltip === void 0 || at.tooltip === null) && (at.tooltip = !0), at.axis || (at.axis = "Left");
    }), !Be.data && Me && (Be.data = Me);
    const nt = { ...await zy(Be) };
    _e(nt, Me);
  }, _e = ($, Me) => {
    var at, kt, Lt;
    let Ye = Me || O;
    Object.keys(jd).forEach((Ke) => {
      $[Ke] && typeof $[Ke] == "object" && !Array.isArray($[Ke]) && ($[Ke] = { ...jd[Ke], ...$[Ke] });
    });
    let Be = [];
    if ($.exclusions && $.exclusions.active)
      if ($.xAxis.type === "categorical" && ((at = $.exclusions.keys) == null ? void 0 : at.length) > 0)
        Be = Ye.filter((Ke) => !$.exclusions.keys.includes(Ke[$.xAxis.dataKey]));
      else if (wn($.xAxis) && ($.exclusions.dateStart || $.exclusions.dateEnd) && $.xAxis.dateParseFormat) {
        const Ke = (Rt) => new Date(Rt).getTime();
        let It = Ke($.exclusions.dateStart), $t = Ke($.exclusions.dateEnd) + 86399999, Bt = typeof It !== void 0 && isNaN(It) === !1, gt = typeof $t !== void 0 && isNaN($t) === !1;
        Bt && gt ? Be = Ye.filter((Rt) => Ke(Rt[$.xAxis.dataKey]) >= It && Ke(Rt[$.xAxis.dataKey]) <= $t) : Bt ? Be = Ye.filter((Rt) => Ke(Rt[$.xAxis.dataKey]) >= It) : gt && (Be = Ye.filter((Rt) => Ke(Rt[$.xAxis.dataKey]) <= $t));
      } else
        Be = Me || O;
    else
      Be = Me || O;
    _(Be);
    let nt = [];
    if ($.filters && ($.filters.forEach((Ke, It) => {
      let $t = [];
      $t = Ke.orderedValues || we(Ke.columnName, Be).sort(Ke.order === "desc" ? bk : xk), $.filters[It].values = $t, $.filters[It].active = $.filters[It].active || $t[0], $.filters[It].filterStyle = $.filters[It].filterStyle ? $.filters[It].filterStyle : "dropdown";
    }), nt = bi($.filters, Be), q(nt)), $.xAxis.type === "date-time" && h.orientation === "horizontal" && ($.xAxis.type = "date"), $.runtime = {}, $.runtime.seriesLabels = {}, $.runtime.seriesLabelsAll = [], $.runtime.originalXAxis = $.xAxis, $.visualizationType === "Pie" ? ($.runtime.seriesKeys = (Me || Ye).map((Ke) => Ke[$.xAxis.dataKey]), $.runtime.seriesLabelsAll = $.runtime.seriesKeys) : $.runtime.seriesKeys = $.series ? $.series.map((Ke) => ($.runtime.seriesLabels[Ke.dataKey] = Ke.name || Ke.label || Ke.dataKey, $.runtime.seriesLabelsAll.push(Ke.name || Ke.dataKey), Ke.dataKey)) : [], $.visualizationType === "Box Plot" && $.series) {
      let Ke = Be ? Be.map((Nt) => Nt[$.xAxis.dataKey]) : Ye.map((Nt) => Nt[$.xAxis.dataKey]), It = Be ? Be.map((Nt) => {
        var Ot;
        return Number(Nt[(Ot = $ == null ? void 0 : $.series[0]) == null ? void 0 : Ot.dataKey]);
      }) : Ye.map((Nt) => {
        var Ot;
        return Number(Nt[(Ot = $ == null ? void 0 : $.series[0]) == null ? void 0 : Ot.dataKey]);
      });
      const Bt = function(Nt) {
        return Nt.filter(function(Ot, Gt, pn) {
          return pn.indexOf(Ot) === Gt;
        });
      }(Ke);
      let gt = [];
      const Rt = [];
      if (!Bt)
        return;
      Bt.forEach((Nt) => {
        try {
          if (!Nt)
            throw new wt("No groups resolved in box plots");
          let Ot = Be ? Be.filter((j) => j[$.xAxis.dataKey] === Nt) : Ye.filter((j) => j[$.xAxis.dataKey] === Nt), Gt = Ot.map((j) => {
            var be;
            return Number(j[(be = $ == null ? void 0 : $.series[0]) == null ? void 0 : be.dataKey]);
          }), pn = Gt.sort((j, be) => j - be);
          const Nn = vk(pn);
          if (!Ot)
            throw new wt("boxplots dont have data yet");
          if (!Rt)
            throw new wt("boxplots dont have plots yet");
          $.boxplot.firstQuartilePercentage === "" && ($.boxplot.firstQuartilePercentage = 0), $.boxplot.thirdQuartilePercentage === "" && ($.boxplot.thirdQuartilePercentage = 0);
          const hn = Nn.q1, ln = Nn.q3, mn = ln - hn, cn = hn - (ln - hn) * 1.5, En = ln + (ln - hn) * 1.5, qn = pn.filter((j) => j < cn || j > En);
          let g = Gt;
          g = g.filter((j) => !qn.includes(j));
          const A = ns(Gt) || 0, z = ts([A, hn - 1.5 * mn]);
          Rt.push({
            columnCategory: Nt,
            columnMax: ns([ts(Gt), hn + 1.5 * mn]),
            columnThirdQuartile: Number(ln).toFixed($.dataFormat.roundTo),
            columnMedian: Number(Sg(Gt)).toFixed($.dataFormat.roundTo),
            columnFirstQuartile: hn.toFixed($.dataFormat.roundTo),
            columnMin: z,
            columnTotal: Gt.reduce((j, be) => j + be, 0),
            columnSd: Number(vg(Gt)).toFixed($.dataFormat.roundTo),
            columnMean: Number(bg(Gt)).toFixed($.dataFormat.roundTo),
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
      }), gt = JSON.parse(JSON.stringify(Rt)), gt.map((Nt) => (Nt.columnIqr = void 0, Nt.nonOutlierValues = void 0, Nt.columnLowerBounds = void 0, Nt.columnUpperBounds = void 0, null)), $.boxplot.allValues = It, $.boxplot.categories = Bt, $.boxplot.plots = Rt, $.boxplot.tableData = gt;
    }
    $.visualizationType === "Combo" && $.series && ($.runtime.barSeriesKeys = [], $.runtime.lineSeriesKeys = [], $.runtime.areaSeriesKeys = [], $.runtime.forecastingSeriesKeys = [], $.series.forEach((Ke) => {
      Ke.type === "Area Chart" && $.runtime.areaSeriesKeys.push(Ke), Ke.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ke), (Ke.type === "Bar" || Ke.type === "Combo") && $.runtime.barSeriesKeys.push(Ke.dataKey), (Ke.type === "Line" || Ke.type === "dashed-sm" || Ke.type === "dashed-md" || Ke.type === "dashed-lg") && $.runtime.lineSeriesKeys.push(Ke.dataKey), Ke.type === "Combo" && (Ke.type = "Bar");
    })), $.visualizationType === "Forecasting" && $.series && ($.runtime.forecastingSeriesKeys = [], $.series.forEach((Ke) => {
      Ke.type === "Forecasting" && $.runtime.forecastingSeriesKeys.push(Ke);
    })), $.visualizationType === "Area Chart" && $.series && ($.runtime.areaSeriesKeys = [], $.series.forEach((Ke) => {
      $.runtime.areaSeriesKeys.push({ ...Ke, type: "Area Chart" });
    })), $.visualizationType === "Bar" && $.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes($.visualizationType) ? ($.runtime.xAxis = $.yAxis.yAxis ? $.yAxis.yAxis : $.yAxis, $.runtime.yAxis = $.xAxis.xAxis ? $.xAxis.xAxis : $.xAxis, $.runtime.horizontal = !1, $.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes($.visualizationType) && !mt() ? ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1, $.orientation = "vertical") : ($.runtime.xAxis = $.xAxis, $.runtime.yAxis = $.yAxis, $.runtime.horizontal = !1), $.runtime.uniqueId = Date.now(), $.runtime.editorErrorMessage = $.visualizationType === "Pie" && !$.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", $.runtime.editorErrorMessage = $.visualizationType === "Sankey" && !$.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (kt = $.legend.seriesHighlight) != null && kt.length && ne((Lt = $.legend) == null ? void 0 : Lt.seriesHighlight), P($);
  }, we = ($, Me = this.state.data) => {
    const Ye = [];
    return Me.forEach((Be) => {
      const nt = Be[$];
      nt && Ye.includes(nt) === !1 && Ye.push(nt);
    }), Ye;
  }, Je = ($, Me) => {
    let Ye = h.visualizationType === "Bar" && h.visualizationSubType === "horizontal" ? h.xAxis.dataKey : h.yAxis.sortKey, Be = parseFloat($[Ye]), nt = parseFloat(Me[Ye]);
    return Be < nt ? h.sortData === "ascending" ? 1 : -1 : Be > nt ? h.sortData === "ascending" ? -1 : 1 : 0;
  }, Ge = new Ry(($) => {
    for (let Me of $) {
      let { width: Ye, height: Be } = Me.contentRect, nt = Dy(Ye), at = 32, kt = 350;
      V(nt), n && (Ye = Ye - kt), Me.target.dataset.lollipop === "true" && (Ye = Ye - 2.5), Ye = Ye - at, J([Ye, Be]);
    }
  }), dt = ce.useCallback(($) => {
    $ !== null && Ge.observe($), se($);
  }, []);
  function bt($) {
    return Object.keys($).length === 0;
  }
  ce.useEffect(() => {
    Ve();
  }, []), ce.useEffect(() => {
    tt();
  }, [JSON.stringify(h.filters)]), ce.useEffect(() => {
    te && !bt(h) && !G && (fg("cove_loaded", { config: h }), Q(!0));
  }, [te, h]), ce.useEffect(() => {
    const $ = (Me) => {
      let Ye = [];
      Ye.push(Me.detail), ae(Ye);
    };
    return pg("cove_filterData", (Me) => $(Me)), () => {
      hg("cove_filterData", $);
    };
  }, [h]), ce.useEffect(() => {
    if (Z && Z[0] && !Z[0].hasOwnProperty("active")) {
      let Me = { ...h };
      delete Me.filters, P(Me), q(bi(Z, N));
    }
    if (Z && Z.length > 0 && Z.length > 0 && Z[0].hasOwnProperty("active")) {
      let $ = { ...h, filters: Z };
      P($), q(bi(Z, N));
    }
  }, [Z]), t && ce.useEffect(() => {
    Ve();
  }, [t.data]), ce.useEffect(() => {
    var $;
    if (O && h.xAxis && (($ = h.runtime) != null && $.seriesKeys)) {
      const Me = ["Paired Bar", "Deviation Bar"].includes(h.visualizationType) ? h.twoColor.palette : h.palette, Ye = { ...ar, ...hs };
      let Be = h.customColors || Ye[Me], nt = h.runtime.seriesKeys.length, at;
      for (; nt > Be.length; )
        Be = Be.concat(Be);
      Be = Be.slice(0, nt), at = () => Ho({
        domain: h.runtime.seriesLabelsAll,
        range: Be,
        unknown: null
      }), k(at), T(!1);
    }
    h && O && h.sortData && O.sort(Je);
  }, [h, O]);
  const yt = ($) => {
    if (U.length + 1 === h.runtime.seriesKeys.length && h.visualizationType !== "Forecasting") {
      _t();
      return;
    }
    const Me = [...U];
    let Ye = $.datum;
    h.runtime.seriesLabels && h.runtime.seriesKeys.forEach((Be) => {
      h.runtime.seriesLabels[Be] === $.datum && (Ye = Be);
    }), Me.indexOf(Ye) !== -1 ? Me.splice(Me.indexOf(Ye), 1) : Me.push(Ye), ne(Me);
  }, _t = () => {
    try {
      const $ = Ze.current;
      if (!$)
        throw new wt("No legend available to set previous focus on.");
      $.focus();
    } catch ($) {
      console.error("COVE:", $.message);
    }
    ne([]);
  }, an = h.orientation === "horizontal" ? "yAxis" : "xAxis", on = ($, Me = !0) => {
    let Ye = Em(h.runtime[an].dateParseFormat)($);
    return Ye || (Me && (h.runtime.editorErrorMessage = `Error parsing date "${$}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Xt = ($) => Xd(h.runtime[an].dateDisplayFormat)($), Jt = ($) => Xd(h.tooltips.dateDisplayFormat)($);
  function Kt($, Me) {
    const Be = document.createElement("canvas").getContext("2d");
    if (!Be) {
      console.error("2d context not found");
      return;
    }
    return Be.font = Me || getComputedStyle(document.body).font, Math.ceil(Be.measureText($).width);
  }
  const At = ($, Me, Ye = !1, Be, nt, at) => {
    if (isNaN($) || !$)
      return $;
    const kt = $ < 0;
    (Me === void 0 || !Me) && (Me = "left"), kt && ($ = Math.abs($));
    let {
      dataFormat: { commas: Lt, abbreviated: Ke, roundTo: It, prefix: $t, suffix: Bt, rightRoundTo: gt, bottomRoundTo: Rt, rightPrefix: Nt, rightSuffix: Ot, bottomPrefix: Gt, bottomSuffix: pn, bottomAbbreviated: Nn }
    } = h;
    String($).indexOf(",") !== -1 && ($ = $.replaceAll(",", ""));
    let hn = $, ln = {
      useGrouping: !!Lt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Me === "left" || Me === void 0) {
      let En;
      at !== void 0 ? En = at ? Number(at) : 0 : En = It ? Number(It) : 0, ln = {
        useGrouping: at ? !0 : !!h.dataFormat.commas,
        minimumFractionDigits: En,
        maximumFractionDigits: En
      };
    }
    Me === "right" && (ln = {
      useGrouping: !!h.dataFormat.rightCommas,
      minimumFractionDigits: gt ? Number(gt) : 0,
      maximumFractionDigits: gt ? Number(gt) : 0
    });
    const mn = () => h.forestPlot.type === "Logarithmic" && !Rt ? 2 : Number(Rt) ? Number(Rt) : 0;
    if (Me === "bottom" && (ln = {
      useGrouping: !!h.dataFormat.bottomCommas,
      minimumFractionDigits: mn(),
      maximumFractionDigits: mn()
    }), $ = gp($), isNaN($))
      return h.runtime.editorErrorMessage = `Unable to parse number from data ${hn}. Try reviewing your data and selections in the Data Series section.`, hn;
    if (!h.dataFormat)
      return $;
    if (h.dataCutoff) {
      let En = gp(h.dataCutoff);
      $ < En && ($ = En);
    }
    Me === "left" && Lt && Ke && Ye || Me === "bottom" && Lt && Ke && Ye ? $ = $ : $ = $.toLocaleString("en-US", ln);
    let cn = "";
    return Ke && Me === "left" && Ye && ($ = Nh(parseFloat($))), Nn && Me === "bottom" && Ye && ($ = Nh(parseFloat($))), Be && Me === "left" ? cn = Be + cn : $t && Me === "left" && (cn += $t), Nt && Me === "right" && (cn += Nt), Gt && Me === "bottom" && (cn += Gt), cn += $, nt && Me === "left" ? cn += nt : Bt && Me === "left" && (cn += Bt), Ot && Me === "right" && (cn += Ot), pn && Me === "bottom" && (cn += pn), kt && (cn = "-" + cn), String(cn);
  }, Mt = {
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
  }, Vt = () => {
    if (h.visualizationType === "Sankey" || h.visualizationType === "Forecasting" || h.visualizationType === "Forest Plot")
      return !1;
    if (h.visualizationType === "Pie") {
      if ((h == null ? void 0 : h.yAxis.dataKey) === void 0)
        return !0;
    } else if ((h == null ? void 0 : h.series) === void 0 || !((h == null ? void 0 : h.series.length) > 0))
      return !0;
    return !h.xAxis.dataKey;
  }, $e = ($, Me) => {
    if ($ === null || $ === "" || $ === void 0)
      return "";
    if (typeof $ == "string" && $.length > 0 && h.legend.type === "equalnumber")
      return $;
    let Ye = $, Be;
    if (Object.keys(h.columns).length > 0 && Object.keys(h.columns).forEach(function(nt) {
      var at = h.columns[nt];
      at.name === Me && (Be = at);
    }), Be === void 0 && (Be = h.type === "chart" ? h.dataFormat : h.primary, Be.useCommas = Be.commas, Be.roundToPlace = Be.roundTo ? Be.roundTo : ""), Be) {
      let nt = !1, at = 0;
      Number($) && (Be.roundToPlace >= 0 && (nt = Be.roundToPlace ? Be.roundToPlace !== "" || Be.roundToPlace !== null : !1, at = Be.roundToPlace ? Number(Be.roundToPlace) : 0, Be.hasOwnProperty("roundToPlace") && nt && (Ye = Number($).toFixed(at))), Be.hasOwnProperty("useCommas") && Be.useCommas === !0 && (Ye = Number($).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: nt ? at : 0,
        maximumFractionDigits: nt ? at : 5
      }))), Ye = (Be.prefix || "") + Ye + (Be.suffix || "");
    }
    return Ye;
  }, en = () => {
    const $ = (Ye) => {
      Ye && Ye.preventDefault();
      let Be = { ...h };
      delete Be.newViz, _e(Be);
    }, Me = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting", style: Me }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement(ps, { className: "btn", style: { margin: "1em auto" }, disabled: Vt(), onClick: (Ye) => $(Ye) }, "I'm Done")));
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
        let Me = ar[h.color] || ar.bluegreenreverse;
        return Oh(Me[3]);
      }
      return Oh();
    } catch (Me) {
      console.error("COVE: ", Me);
    }
  }, pt = ($) => {
    var Me;
    return Array.isArray($) ? h.visualizationType === "Forecasting" ? $ : (Me = h == null ? void 0 : h.xAxis) != null && Me.dataKey ? S.cleanData($, h.xAxis.dataKey) : $ : [];
  }, tn = ($) => $;
  let xn = /* @__PURE__ */ r.createElement(Qy, null);
  const Ft = ($) => {
    if (!(!$ || !$.toLowerCase))
      return $.toLowerCase().replaceAll(/ /g, "-");
  }, nn = () => {
    var Ye, Be, nt;
    const $ = (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(re), Me = ["chart-container", "p-relative"];
    return ((Ye = h.legend) == null ? void 0 : Ye.position) === "bottom" && Me.push("bottom"), (Be = h.legend) != null && Be.hide && Me.push("legend-hidden"), ke && Me.push(ke), h.barHasBorder || Me.push("chart-bar--no-border"), (nt = h.brush) != null && nt.active && (x == null ? void 0 : x.type) === "dashboard" && (!$ || h.legend.hide) && Me.push("dashboard-brush"), Me.push(...Ie), Me;
  }, Ln = () => {
    var Ye, Be;
    const $ = ["subtext "], Me = (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(re);
    return h.isResponsiveTicks && $.push("subtext--responsive-ticks "), (Ye = h.brush) != null && Ye.active && !Me && $.push("subtext--brush-active "), (Be = h.brush) != null && Be.active && h.legend.hide && $.push("subtext--brush-active "), $;
  };
  if (!R) {
    const $ = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${h.dataKey}`, className: "margin-left-href" }, h.dataKey, " (Go to Table)");
    xn = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(gk, null), /* @__PURE__ */ r.createElement(Ud.Responsive, { isEditor: n }, h.newViz && /* @__PURE__ */ r.createElement(en, null), h.newViz === void 0 && n && h.runtime && ((Sn = h.runtime) == null ? void 0 : Sn.editorErrorMessage) && /* @__PURE__ */ r.createElement(wt, null), !Vt() && !h.newViz && /* @__PURE__ */ r.createElement("div", { className: `cdc-chart-inner-container cove-component__content type-${Ft(h.visualizationType)}`, "aria-label": pf(h), tabIndex: 0 }, /* @__PURE__ */ r.createElement(Hy, { showTitle: h.showTitle, isDashboard: i, title: Fe, superTitle: h.superTitle, classes: ["chart-title", `${h.theme}`, "cove-component__header"], style: void 0 }), h.filters && !Z && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(tp, { config: h, setConfig: P, setFilteredData: q, filteredData: B, excludedData: N, filterData: bi, dimensions: Y }), /* @__PURE__ */ r.createElement(dp, { skipId: _u(h, Qe), skipMessage: "Skip Over Chart Container" }), ((jn = h.annotations) == null ? void 0 : jn.length) > 0 && /* @__PURE__ */ r.createElement(dp, { skipId: _u(h, Qe), skipMessage: "Skip over annotations", key: "skip-annotations" }), (h == null ? void 0 : h.introText) && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, Li(h.introText)), /* @__PURE__ */ r.createElement("div", { className: nn().join(" ") }, h.visualizationType !== "Spark Line" && h.visualizationType !== "Line" && Mt[h.visualizationType], h.visualizationType === "Line" && (mt() ? Mt.Bar : Mt.Line), h.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(tp, { config: h, setConfig: P, setFilteredData: q, filteredData: B, excludedData: N, filterData: bi, dimensions: Y }), (h == null ? void 0 : h.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Li(h.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...qe } }, /* @__PURE__ */ r.createElement(Fp, null, (Me) => /* @__PURE__ */ r.createElement(KE, { width: Me.width, height: Me.height }))), ue && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Li(ue))), h.visualizationType === "Sankey" && /* @__PURE__ */ r.createElement(Fp, { "aria-hidden": "true" }, (Me) => /* @__PURE__ */ r.createElement(BS, { runtime: h.runtime, width: Me.width, height: Me.height })), !h.legend.hide && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" && /* @__PURE__ */ r.createElement(YE, { ref: Ze, skipId: _u(h, Qe) })), i && h.table && h.table.show && h.table.showDataTableLink ? $ : u && u, ue && h.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: Ln().join("") }, Li(ue)), !1, /* @__PURE__ */ r.createElement(wd.Section, { classes: ["download-buttons"] }, h.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(wd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: h, elementToCapture: fe }), h.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(wd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: h, elementToCapture: fe })), (h.xAxis.dataKey && h.table.show && h.visualizationType !== "Spark Line" && h.visualizationType !== "Sankey" || h.visualizationType === "Sankey" && h.table.show) && /* @__PURE__ */ r.createElement(
      Zy,
      {
        config: h,
        rawData: h.visualizationType === "Sankey" ? (Un = (zn = h == null ? void 0 : h.data) == null ? void 0 : zn[0]) == null ? void 0 : Un.tableData : h.table.customTableConfig ? bi(h.filters, h.data) : h.data,
        runtimeData: h.visualizationType === "Sankey" ? (ut = (Ne = h == null ? void 0 : h.data) == null ? void 0 : Ne[0]) == null ? void 0 : ut.tableData : B || N,
        expandDataTable: h.table.expanded,
        columns: h.columns,
        displayDataAsText: $e,
        displayGeoName: tn,
        applyLegendToRow: zt,
        tableTitle: h.table.label,
        indexTitle: h.table.indexLabel,
        vizTitle: Fe,
        viewport: re,
        tabbingId: _u(h, Qe),
        colorScale: F
      }
    ), ((ft = h == null ? void 0 : h.annotations) == null ? void 0 : ft.length) > 0 && /* @__PURE__ */ r.createElement(qf.Dropdown, null), (h == null ? void 0 : h.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, Li(h.footnotes)))));
  }
  const Hn = {
    brushConfig: Re,
    capitalize: ($) => $.charAt(0).toUpperCase() + $.slice(1),
    clean: pt,
    colorPalettes: ar,
    colorScale: F,
    config: h,
    currentViewport: re,
    dashboardConfig: x,
    debugSvg: a,
    dimensions: Y,
    dynamicLegendItems: Ce,
    excludedData: N,
    formatDate: Xt,
    formatNumber: At,
    formatTooltipsDate: Jt,
    getTextWidth: Kt,
    getXAxisData: ($) => wn(h.runtime.xAxis) ? on($[h.runtime.originalXAxis.dataKey]).getTime() : $[h.runtime.originalXAxis.dataKey],
    getYAxisData: ($, Me) => $[Me],
    handleChartAriaLabels: pf,
    handleLineType: ly,
    highlight: yt,
    highlightReset: _t,
    imageId: fe,
    isDashboard: i,
    isLegendBottom: (me == null ? void 0 : me.position) === "bottom" || ["sm", "xs", "xxs"].includes(re),
    isDebug: a,
    isDraggingAnnotation: K,
    handleDragStateChange: Ae,
    isEditor: n,
    isNumber: Iu,
    legend: me,
    lineOptions: Sk,
    loading: R,
    missingRequiredSections: Vt,
    outerContainerRef: dt,
    parseDate: on,
    rawData: O ?? {},
    seriesHighlight: U,
    setBrushConfig: je,
    setConfig: P,
    setDynamicLegendItems: xe,
    setEditing: d,
    setFilteredData: q,
    setParentConfig: l,
    setSeriesHighlight: ne,
    setSharedFilter: m,
    setSharedFilterValue: y,
    tableData: B || N,
    // do not clean table data
    transformedData: pt(B || N),
    // do this right before passing to components
    twoColorPalette: hs,
    unfilteredData: O,
    updateConfig: _e
  };
  return /* @__PURE__ */ r.createElement(Et.Provider, { value: Hn }, /* @__PURE__ */ r.createElement(Ud.VisualizationWrapper, { config: h, isEditor: n, currentViewport: re, ref: dt, imageId: fe, showEditorPanel: h == null ? void 0 : h.showEditorPanel }, xn));
}
export {
  Jk as C
};
