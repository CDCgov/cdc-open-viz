import { r as se, R as i } from "./storybook-index-45401197.es.js";
import { a as my, i as Ph, b as Rh, g as gy } from "./storybook-isSolr-6a0136d5.es.js";
import { A as yy, e as vy } from "./storybook-queryStringUtils-a03213e7.es.js";
import { p as gm, P as he } from "./storybook-index-43433e35.es.js";
import { d as xy } from "./storybook-debounce-cc216a80.es.js";
import { a as zf } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as Lh } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Fi, T as by } from "./storybook-index-e5bf02db.es.js";
import { _ as dn } from "./storybook-extends-70f3d2a3.es.js";
import { _ as Zr, p as Dh, d as Ai, s as Kr, c as Ht, h as Oh, a as bc, e as Yn, t as Nu, f as Xo, m as Cd, g as Mh, i as Kn, j as _h, k as Sy, l as Ey, G as ky, n as Wu, o as cr, q as Vu, T as Ct, P as ym, I as Nh, u as wy, D as Fh, C as $h, F as Ty } from "./storybook-Filters-6379b7ba.es.js";
import { c as zr } from "./storybook-chroma-b564050a.es.js";
import { D as vm, a as On, b as Mn, c as _n, d as Nn, A as $i } from "./storybook-index-964548d8.es.js";
import { t as Cy, i as Sn, f as xm, L as zh, a as ts, g as Pi, M as Ad, D as Ay } from "./storybook-DataTable-342d2d1f.es.js";
import { E as Br, L as Py } from "./storybook-Loading-f180d060.es.js";
import { s as ls, t as bm, a as Sm, b as Em, d as ws, B as gr, c as Wn, C as Ry, S as km } from "./storybook-icon-check-d4f3700e.es.js";
import { b as Sc, t as Ly, e as wm, f as Bh, g as Dy, h as Oy, j as My, k as Ih, m as _y, G as nt, c as Cn } from "./storybook-Group-e6c0d0df.es.js";
import { R as Ny } from "./storybook-index-633d712d.es.js";
import { i as Tm, m as Pd, c as Cm, j as vu, k as xu, l as bu, n as Hh, o as Fy, p as Wh, b as Am, d as Pm } from "./storybook-year-bedc547d.es.js";
import { a as Et } from "./storybook-Icon-58d1c99f.es.js";
import { T as Le } from "./storybook-Tooltip-edc0f7ab.es.js";
import { S as kt, T as Ye, C as gt, D as $y } from "./storybook-DataTableEditor-7a6e1152.es.js";
import { I as Va } from "./storybook-InputSelect-a65afd95.es.js";
import { B as zy } from "./storybook-Button-d74e310e.es.js";
import { u as By, p as Iy, s as Hy, a as Wy, c as Vy } from "./storybook-coveUpdateWorker-10963690.es.js";
import { n as Vh } from "./storybook-numberFromString-24623c03.es.js";
import { c as jh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Rm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Uh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (f, s) => e(f) - s, r = jy(e));
  function n(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      r(f[g], s) < 0 ? c = g + 1 : d = g;
    }
    return c;
  }
  function a(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      r(f[g], s) > 0 ? d = g : c = g + 1;
    }
    return c;
  }
  function l(f, s, c, d) {
    c == null && (c = 0), d == null && (d = f.length);
    const g = n(f, s, c, d - 1);
    return g > c && t(f[g - 1], s) > -t(f[g], s) ? g - 1 : g;
  }
  return { left: n, center: l, right: a };
}
function jy(e) {
  return (t, r) => Rm(e(t), r);
}
function* Uy(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
function Ky(e, t) {
  let r = 0, n, a = 0, l = 0;
  if (t === void 0)
    for (let f of e)
      f != null && (f = +f) >= f && (n = f - a, a += n / ++r, l += n * (f - a));
  else {
    let f = -1;
    for (let s of e)
      (s = t(s, ++f, e)) != null && (s = +s) >= s && (n = s - a, a += n / ++r, l += n * (s - a));
  }
  if (r > 1)
    return l / (r - 1);
}
function Yy(e, t) {
  const r = Ky(e, t);
  return r && Math.sqrt(r);
}
function ss(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function us(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function Lm(e, t, r = 0, n = e.length - 1, a = Rm) {
  for (; n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, d = t - r + 1, g = Math.log(c), y = 0.5 * Math.exp(2 * g / 3), v = 0.5 * Math.sqrt(g * y * (c - y) / c) * (d - c / 2 < 0 ? -1 : 1), k = Math.max(r, Math.floor(t - d * y / c + v)), E = Math.min(n, Math.floor(t + (c - d) * y / c + v));
      Lm(e, t, k, E, a);
    }
    const l = e[t];
    let f = r, s = n;
    for (ns(e, r, t), a(e[n], l) > 0 && ns(e, r, n); f < s; ) {
      for (ns(e, f, s), ++f, --s; a(e[f], l) < 0; )
        ++f;
      for (; a(e[s], l) > 0; )
        --s;
    }
    a(e[r], l) === 0 ? ns(e, r, s) : (++s, ns(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function ns(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Xy(e, t, r) {
  if (e = Float64Array.from(Uy(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return us(e);
    if (t >= 1)
      return ss(e);
    var n, a = (n - 1) * t, l = Math.floor(a), f = ss(Lm(e, l).subarray(0, l + 1)), s = us(e.subarray(l + 1));
    return f + (s - f) * (a - l);
  }
}
function qy(e, t) {
  let r = 0, n = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (++r, n += a);
  else {
    let a = -1;
    for (let l of e)
      (l = t(l, ++a, e)) != null && (l = +l) >= l && (++r, n += l);
  }
  if (r)
    return n / r;
}
function Gy(e, t) {
  return Xy(e, 0.5, t);
}
class Kh extends Map {
  constructor(t, r = Jy) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, a] of t)
        this.set(n, a);
  }
  get(t) {
    return super.get(Yh(this, t));
  }
  has(t) {
    return super.has(Yh(this, t));
  }
  set(t, r) {
    return super.set(Zy(this, t), r);
  }
  delete(t) {
    return super.delete(Qy(this, t));
  }
}
function Yh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Zy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function Qy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function Jy(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function ev(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, l = new Array(a); ++n < a; )
    l[n] = e + n * r;
  return l;
}
const Xh = Symbol("implicit");
function Bf() {
  var e = new Kh(), t = [], r = [], n = Xh;
  function a(l) {
    let f = e.get(l);
    if (f === void 0) {
      if (n !== Xh)
        return n;
      e.set(l, f = t.push(l) - 1);
    }
    return r[f % r.length];
  }
  return a.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Kh();
    for (const f of l)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(l) {
    return arguments.length ? (r = Array.from(l), a) : r.slice();
  }, a.unknown = function(l) {
    return arguments.length ? (n = l, a) : n;
  }, a.copy = function() {
    return Bf(t, r).unknown(n);
  }, Sc.apply(a, arguments), a;
}
function If() {
  var e = Bf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, l, f, s = !1, c = 0, d = 0, g = 0.5;
  delete e.unknown;
  function y() {
    var v = t().length, k = a < n, E = k ? a : n, M = k ? n : a;
    l = (M - E) / Math.max(1, v - c + d * 2), s && (l = Math.floor(l)), E += (M - E - l * (v - c)) * g, f = l * (1 - c), s && (E = Math.round(E), f = Math.round(f));
    var T = ev(v).map(function(m) {
      return E + l * m;
    });
    return r(k ? T.reverse() : T);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), y()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, a] = v, n = +n, a = +a, y()) : [n, a];
  }, e.rangeRound = function(v) {
    return [n, a] = v, n = +n, a = +a, s = !0, y();
  }, e.bandwidth = function() {
    return f;
  }, e.step = function() {
    return l;
  }, e.round = function(v) {
    return arguments.length ? (s = !!v, y()) : s;
  }, e.padding = function(v) {
    return arguments.length ? (c = Math.min(1, d = +v), y()) : c;
  }, e.paddingInner = function(v) {
    return arguments.length ? (c = Math.min(1, v), y()) : c;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (d = +v, y()) : d;
  }, e.align = function(v) {
    return arguments.length ? (g = Math.max(0, Math.min(1, v)), y()) : g;
  }, e.copy = function() {
    return If(t(), [n, a]).round(s).paddingInner(c).paddingOuter(d).align(g);
  }, Sc.apply(y(), arguments);
}
function Dm(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Dm(t());
  }, e;
}
function tv() {
  return Dm(If.apply(null, arguments).paddingInner(1));
}
function Om(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], l = e[n], f;
  return l < a && (f = r, r = n, n = f, f = a, a = l, l = f), e[r] = t.floor(a), e[n] = t.ceil(l), e;
}
function qh(e) {
  return Math.log(e);
}
function Gh(e) {
  return Math.exp(e);
}
function nv(e) {
  return -Math.log(-e);
}
function rv(e) {
  return -Math.exp(-e);
}
function av(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function iv(e) {
  return e === 10 ? av : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function ov(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Zh(e) {
  return (t, r) => -e(-t, r);
}
function lv(e) {
  const t = e(qh, Gh), r = t.domain;
  let n = 10, a, l;
  function f() {
    return a = ov(n), l = iv(n), r()[0] < 0 ? (a = Zh(a), l = Zh(l), e(nv, rv)) : e(qh, Gh), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, f()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), f()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let d = c[0], g = c[c.length - 1];
    const y = g < d;
    y && ([d, g] = [g, d]);
    let v = a(d), k = a(g), E, M;
    const T = s == null ? 10 : +s;
    let m = [];
    if (!(n % 1) && k - v < T) {
      if (v = Math.floor(v), k = Math.ceil(k), d > 0) {
        for (; v <= k; ++v)
          for (E = 1; E < n; ++E)
            if (M = v < 0 ? E / l(-v) : E * l(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; v <= k; ++v)
          for (E = n - 1; E >= 1; --E)
            if (M = v > 0 ? E / l(-v) : E * l(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      m.length * 2 < T && (m = Bh(d, g, T));
    } else
      m = Bh(v, k, Math.min(k - v, T)).map(l);
    return y ? m.reverse() : m;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Dy(c)).precision == null && (c.trim = !0), c = Oy(c)), s === 1 / 0)
      return c;
    const d = Math.max(1, n * s / t.ticks().length);
    return (g) => {
      let y = g / l(Math.round(a(g)));
      return y * n < n - 0.5 && (y *= n), y <= d ? c(g) : "";
    };
  }, t.nice = () => r(Om(r(), {
    floor: (s) => l(Math.floor(a(s))),
    ceil: (s) => l(Math.ceil(a(s)))
  })), t;
}
function Mm() {
  const e = lv(Ly()).domain([1, 10]);
  return e.copy = () => wm(e, Mm()).base(e.base()), Sc.apply(e, arguments), e;
}
const ju = Tm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ju.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ju);
ju.range;
function sv(e, t, r, n, a, l) {
  const f = [
    [ls, 1, vu],
    [ls, 5, 5 * vu],
    [ls, 15, 15 * vu],
    [ls, 30, 30 * vu],
    [l, 1, xu],
    [l, 5, 5 * xu],
    [l, 15, 15 * xu],
    [l, 30, 30 * xu],
    [a, 1, bu],
    [a, 3, 3 * bu],
    [a, 6, 6 * bu],
    [a, 12, 12 * bu],
    [n, 1, Hh],
    [n, 2, 2 * Hh],
    [r, 1, Fy],
    [t, 1, Wh],
    [t, 3, 3 * Wh],
    [e, 1, Pd]
  ];
  function s(d, g, y) {
    const v = g < d;
    v && ([d, g] = [g, d]);
    const k = y && typeof y.range == "function" ? y : c(d, g, y), E = k ? k.range(d, +g + 1) : [];
    return v ? E.reverse() : E;
  }
  function c(d, g, y) {
    const v = Math.abs(g - d) / y, k = My(([, , T]) => T).right(f, v);
    if (k === f.length)
      return e.every(Ih(d / Pd, g / Pd, y));
    if (k === 0)
      return ju.every(Math.max(Ih(d, g, y), 1));
    const [E, M] = f[v / f[k - 1][2] < f[k][2] / v ? k - 1 : k];
    return E.every(M);
  }
  return [s, c];
}
const [uv, cv] = sv(Cm, Em, Pm, Am, Sm, bm);
function dv(e) {
  return new Date(e);
}
function fv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function _m(e, t, r, n, a, l, f, s, c, d) {
  var g = _y(), y = g.invert, v = g.domain, k = d(".%L"), E = d(":%S"), M = d("%I:%M"), T = d("%I %p"), m = d("%a %d"), R = d("%b %d"), O = d("%B"), N = d("%Y");
  function _(D) {
    return (c(D) < D ? k : s(D) < D ? E : f(D) < D ? M : l(D) < D ? T : n(D) < D ? a(D) < D ? m : R : r(D) < D ? O : N)(D);
  }
  return g.invert = function(D) {
    return new Date(y(D));
  }, g.domain = function(D) {
    return arguments.length ? v(Array.from(D, fv)) : v().map(dv);
  }, g.ticks = function(D) {
    var B = v();
    return e(B[0], B[B.length - 1], D ?? 10);
  }, g.tickFormat = function(D, B) {
    return B == null ? _ : d(B);
  }, g.nice = function(D) {
    var B = v();
    return (!D || typeof D.range != "function") && (D = t(B[0], B[B.length - 1], D ?? 10)), D ? v(Om(B, D)) : g;
  }, g.copy = function() {
    return wm(g, _m(e, t, r, n, a, l, f, s, c, d));
  }, g;
}
function hv() {
  return Sc.apply(_m(uv, cv, Cm, Em, Pm, Am, Sm, bm, ls, Cy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var pv = ws("domain", "range", "reverse", "align", "padding", "round");
function Zd(e) {
  return pv(If(), e);
}
var mv = ws("domain", "range", "reverse", "align", "padding", "round");
function qo(e) {
  return mv(tv(), e);
}
var gv = ws("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function yv(e) {
  return gv(hv(), e);
}
var vv = ws("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Uu(e) {
  return vv(Mm(), e);
}
var xv = ws("domain", "range", "reverse", "unknown");
function Hf(e) {
  return xv(Bf(), e);
}
function bv(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Sv(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(n, a, l) {
    return t == null || l.length <= t || a % Math.round((l.length - 1) / t) === 0;
  });
}
function Ev(e) {
  return e == null ? void 0 : e.toString();
}
var zi = [], kv = function() {
  return zi.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, wv = function() {
  return zi.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Qh = "ResizeObserver loop completed with undelivered notifications.", Tv = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Qh
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Qh), window.dispatchEvent(e);
}, xs;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(xs || (xs = {}));
var Bi = function(e) {
  return Object.freeze(e);
}, Nm = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Bi(this);
  }
  return e;
}(), Fm = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Bi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, l = t.right, f = t.bottom, s = t.left, c = t.width, d = t.height;
    return { x: r, y: n, top: a, right: l, bottom: f, left: s, width: c, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Wf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, $m = function(e) {
  if (Wf(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, l = a.offsetWidth, f = a.offsetHeight;
  return !(l || f || e.getClientRects().length);
}, Jh = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Cv = function(e) {
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
}, cs = typeof window < "u" ? window : {}, Su = /* @__PURE__ */ new WeakMap(), ep = /auto|scroll/, Av = /^tb|vertical/, Pv = /msie|trident/i.test(cs.navigator && cs.navigator.userAgent), Yr = function(e) {
  return parseFloat(e || "0");
}, Zo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Nm((r ? t : e) || 0, (r ? e : t) || 0);
}, tp = Bi({
  devicePixelContentBoxSize: Zo(),
  borderBoxSize: Zo(),
  contentBoxSize: Zo(),
  contentRect: new Fm(0, 0, 0, 0)
}), zm = function(e, t) {
  if (t === void 0 && (t = !1), Su.has(e) && !t)
    return Su.get(e);
  if ($m(e))
    return Su.set(e, tp), tp;
  var r = getComputedStyle(e), n = Wf(e) && e.ownerSVGElement && e.getBBox(), a = !Pv && r.boxSizing === "border-box", l = Av.test(r.writingMode || ""), f = !n && ep.test(r.overflowY || ""), s = !n && ep.test(r.overflowX || ""), c = n ? 0 : Yr(r.paddingTop), d = n ? 0 : Yr(r.paddingRight), g = n ? 0 : Yr(r.paddingBottom), y = n ? 0 : Yr(r.paddingLeft), v = n ? 0 : Yr(r.borderTopWidth), k = n ? 0 : Yr(r.borderRightWidth), E = n ? 0 : Yr(r.borderBottomWidth), M = n ? 0 : Yr(r.borderLeftWidth), T = y + d, m = c + g, R = M + k, O = v + E, N = s ? e.offsetHeight - O - e.clientHeight : 0, _ = f ? e.offsetWidth - R - e.clientWidth : 0, D = a ? T + R : 0, B = a ? m + O : 0, H = n ? n.width : Yr(r.width) - D - _, U = n ? n.height : Yr(r.height) - B - N, X = H + T + _ + R, Q = U + m + N + O, K = Bi({
    devicePixelContentBoxSize: Zo(Math.round(H * devicePixelRatio), Math.round(U * devicePixelRatio), l),
    borderBoxSize: Zo(X, Q, l),
    contentBoxSize: Zo(H, U, l),
    contentRect: new Fm(y, c, H, U)
  });
  return Su.set(e, K), K;
}, Bm = function(e, t, r) {
  var n = zm(e, r), a = n.borderBoxSize, l = n.contentBoxSize, f = n.devicePixelContentBoxSize;
  switch (t) {
    case xs.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case xs.BORDER_BOX:
      return a;
    default:
      return l;
  }
}, Im = function() {
  function e(t) {
    var r = zm(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Bi([r.borderBoxSize]), this.contentBoxSize = Bi([r.contentBoxSize]), this.devicePixelContentBoxSize = Bi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Hm = function(e) {
  if ($m(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Rv = function() {
  var e = 1 / 0, t = [];
  zi.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var s = [];
      f.activeTargets.forEach(function(d) {
        var g = new Im(d.target), y = Hm(d.target);
        s.push(g), d.lastReportedSize = Bm(d.target, d.observedBox), y < e && (e = y);
      }), t.push(function() {
        f.callback.call(f.observer, s, f.observer);
      }), f.activeTargets.splice(0, f.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return e;
}, np = function(e) {
  zi.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Hm(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, Lv = function() {
  var e = 0;
  for (np(e); kv(); )
    e = Rv(), np(e);
  return wv() && Tv(), e > 0;
}, Rd, Wm = [], Dv = function() {
  return Wm.splice(0).forEach(function(e) {
    return e();
  });
}, Ov = function(e) {
  if (!Rd) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Dv();
    }).observe(r, n), Rd = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Wm.push(e), Rd();
}, Mv = function(e) {
  Ov(function() {
    requestAnimationFrame(e);
  });
}, Fu = 0, _v = function() {
  return !!Fu;
}, Nv = 250, Fv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, rp = [
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
], ap = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ld = !1, $v = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Nv), !Ld) {
      Ld = !0;
      var n = ap(t);
      Mv(function() {
        var a = !1;
        try {
          a = Lv();
        } finally {
          if (Ld = !1, t = n - ap(), !_v())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Fv);
    };
    document.body ? r() : cs.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), rp.forEach(function(r) {
      return cs.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), rp.forEach(function(r) {
      return cs.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Qd = new $v(), ip = function(e) {
  !Fu && e > 0 && Qd.start(), Fu += e, !Fu && Qd.stop();
}, zv = function(e) {
  return !Wf(e) && !Cv(e) && getComputedStyle(e).display === "inline";
}, Bv = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || xs.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Bm(this.target, this.observedBox, !0);
    return zv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Iv = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Eu = /* @__PURE__ */ new WeakMap(), op = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, ku = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Iv(t, r);
    Eu.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Eu.get(t), l = a.observationTargets.length === 0;
    op(a.observationTargets, r) < 0 && (l && zi.push(a), a.observationTargets.push(new Bv(r, n && n.box)), ip(1), Qd.schedule());
  }, e.unobserve = function(t, r) {
    var n = Eu.get(t), a = op(n.observationTargets, r), l = n.observationTargets.length === 1;
    a >= 0 && (l && zi.splice(zi.indexOf(n), 1), n.observationTargets.splice(a, 1), ip(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Eu.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), Hv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ku.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Jh(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ku.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Jh(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ku.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ku.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Hv,
  ResizeObserverEntry: Im,
  ResizeObserverSize: Nm
}, Symbol.toStringTag, { value: "Module" })), Vv = /* @__PURE__ */ zf(Wv);
var lp = Um, Fa = jm(gm), jv = jm(xy), jo = Yv(se), Uv = Vv, Kv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Vm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Vm = function(a) {
    return a ? r : t;
  })(e);
}
function Yv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Vm(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, l) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, l, f) : n[l] = e[l];
    }
  return n.default = e, r && r.set(e, n), n;
}
function jm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ku() {
  return Ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ku.apply(this, arguments);
}
function Xv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var qv = [];
function Um(e) {
  var t = e.className, r = e.children, n = e.debounceTime, a = n === void 0 ? 300 : n, l = e.ignoreDimensions, f = l === void 0 ? qv : l, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, d = e.enableDebounceLeadingCall, g = d === void 0 ? !0 : d, y = Xv(e, Kv), v = (0, jo.useRef)(null), k = (0, jo.useRef)(0), E = (0, jo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = E[0], T = E[1], m = (0, jo.useMemo)(function() {
    var R = Array.isArray(f) ? f : [f];
    return (0, jv.default)(function(O) {
      T(function(N) {
        var _ = Object.keys(N), D = _.filter(function(H) {
          return N[H] !== O[H];
        }), B = D.every(function(H) {
          return R.includes(H);
        });
        return B ? N : O;
      });
    }, a, {
      leading: g
    });
  }, [a, g, f]);
  return (0, jo.useEffect)(function() {
    var R = new Uv.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(N) {
        var _ = N.contentRect, D = _.left, B = _.top, H = _.width, U = _.height;
        k.current = window.requestAnimationFrame(function() {
          m({
            width: H,
            height: U,
            top: B,
            left: D
          });
        });
      });
    });
    return v.current && R.observe(v.current), function() {
      window.cancelAnimationFrame(k.current), R.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ jo.default.createElement("div", Ku({
    style: c,
    ref: v,
    className: t
  }, y), r(Ku({}, M, {
    ref: v.current,
    resize: m
  })));
}
Um.propTypes = {
  className: Fa.default.string,
  debounceTime: Fa.default.number,
  enableDebounceLeadingCall: Fa.default.bool,
  ignoreDimensions: Fa.default.oneOfType([Fa.default.any, Fa.default.arrayOf(Fa.default.any)]),
  children: Fa.default.func.isRequired
};
var Dd = /* @__PURE__ */ new Date(), Od = /* @__PURE__ */ new Date();
function ma(e, t, r, n) {
  function a(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return a.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, a.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, a.round = function(l) {
    var f = a(l), s = a.ceil(l);
    return l - f < s - l ? f : s;
  }, a.offset = function(l, f) {
    return t(l = /* @__PURE__ */ new Date(+l), f == null ? 1 : Math.floor(f)), l;
  }, a.range = function(l, f, s) {
    var c = [], d;
    if (l = a.ceil(l), s = s == null ? 1 : Math.floor(s), !(l < f) || !(s > 0))
      return c;
    do
      c.push(d = /* @__PURE__ */ new Date(+l)), t(l, s), e(l);
    while (d < l && l < f);
    return c;
  }, a.filter = function(l) {
    return ma(function(f) {
      if (f >= f)
        for (; e(f), !l(f); )
          f.setTime(f - 1);
    }, function(f, s) {
      if (f >= f)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(f, -1), !l(f); )
              ;
        else
          for (; --s >= 0; )
            for (; t(f, 1), !l(f); )
              ;
    });
  }, r && (a.count = function(l, f) {
    return Dd.setTime(+l), Od.setTime(+f), e(Dd), e(Od), Math.floor(r(Dd, Od));
  }, a.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? a.filter(n ? function(f) {
      return n(f) % l === 0;
    } : function(f) {
      return a.count(0, f) % l === 0;
    }) : a;
  }), a;
}
const Gv = 1e3, Vf = Gv * 60, Zv = Vf * 60, jf = Zv * 24, Km = jf * 7;
var Ym = ma(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Vf) / jf,
  (e) => e.getDate() - 1
);
const Xm = Ym;
Ym.range;
function ji(e) {
  return ma(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Vf) / Km;
  });
}
var qm = ji(0), Yu = ji(1), Qv = ji(2), Jv = ji(3), Jo = ji(4), ex = ji(5), tx = ji(6);
qm.range;
Yu.range;
Qv.range;
Jv.range;
Jo.range;
ex.range;
tx.range;
var Uf = ma(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Uf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ma(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const bs = Uf;
Uf.range;
var Gm = ma(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / jf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Zm = Gm;
Gm.range;
function Ui(e) {
  return ma(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Km;
  });
}
var Qm = Ui(0), Xu = Ui(1), nx = Ui(2), rx = Ui(3), el = Ui(4), ax = Ui(5), ix = Ui(6);
Qm.range;
Xu.range;
nx.range;
rx.range;
el.range;
ax.range;
ix.range;
var Kf = ma(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Kf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ma(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const Ss = Kf;
Kf.range;
function Md(e) {
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
function rs(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function ox(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, l = e.days, f = e.shortDays, s = e.months, c = e.shortMonths, d = as(a), g = is(a), y = as(l), v = is(l), k = as(f), E = is(f), M = as(s), T = is(s), m = as(c), R = is(c), O = {
    a: re,
    A: ue,
    b: ee,
    B: Y,
    c: null,
    d: hp,
    e: hp,
    f: Rx,
    g: Bx,
    G: Hx,
    H: Cx,
    I: Ax,
    j: Px,
    L: Jm,
    m: Lx,
    M: Dx,
    p: te,
    q: I,
    Q: gp,
    s: yp,
    S: Ox,
    u: Mx,
    U: _x,
    V: Nx,
    w: Fx,
    W: $x,
    x: null,
    X: null,
    y: zx,
    Y: Ix,
    Z: Wx,
    "%": mp
  }, N = {
    a: ge,
    A: ve,
    b: ke,
    B: Ne,
    c: null,
    d: pp,
    e: pp,
    f: Kx,
    g: nb,
    G: ab,
    H: Vx,
    I: jx,
    j: Ux,
    L: tg,
    m: Yx,
    M: Xx,
    p: je,
    q: Qe,
    Q: gp,
    s: yp,
    S: qx,
    u: Gx,
    U: Zx,
    V: Qx,
    w: Jx,
    W: eb,
    x: null,
    X: null,
    y: tb,
    Y: rb,
    Z: ib,
    "%": mp
  }, _ = {
    a: X,
    A: Q,
    b: K,
    B: oe,
    c: fe,
    d: dp,
    e: dp,
    f: Ex,
    g: cp,
    G: up,
    H: fp,
    I: fp,
    j: vx,
    L: Sx,
    m: yx,
    M: xx,
    p: U,
    q: gx,
    Q: wx,
    s: Tx,
    S: bx,
    u: dx,
    U: fx,
    V: hx,
    w: cx,
    W: px,
    x: W,
    X: ie,
    y: cp,
    Y: up,
    Z: mx,
    "%": kx
  };
  O.x = D(r, O), O.X = D(n, O), O.c = D(t, O), N.x = D(r, N), N.X = D(n, N), N.c = D(t, N);
  function D(Oe, ye) {
    return function(we) {
      var le = [], Be = -1, Me = 0, He = Oe.length, qe, et, it;
      for (we instanceof Date || (we = /* @__PURE__ */ new Date(+we)); ++Be < He; )
        Oe.charCodeAt(Be) === 37 && (le.push(Oe.slice(Me, Be)), (et = sp[qe = Oe.charAt(++Be)]) != null ? qe = Oe.charAt(++Be) : et = qe === "e" ? " " : "0", (it = ye[qe]) && (qe = it(we, et)), le.push(qe), Me = Be + 1);
      return le.push(Oe.slice(Me, Be)), le.join("");
    };
  }
  function B(Oe, ye) {
    return function(we) {
      var le = rs(1900, void 0, 1), Be = H(le, Oe, we += "", 0), Me, He;
      if (Be != we.length)
        return null;
      if ("Q" in le)
        return new Date(le.Q);
      if ("s" in le)
        return new Date(le.s * 1e3 + ("L" in le ? le.L : 0));
      if (ye && !("Z" in le) && (le.Z = 0), "p" in le && (le.H = le.H % 12 + le.p * 12), le.m === void 0 && (le.m = "q" in le ? le.q : 0), "V" in le) {
        if (le.V < 1 || le.V > 53)
          return null;
        "w" in le || (le.w = 1), "Z" in le ? (Me = _d(rs(le.y, 0, 1)), He = Me.getUTCDay(), Me = He > 4 || He === 0 ? Xu.ceil(Me) : Xu(Me), Me = Zm.offset(Me, (le.V - 1) * 7), le.y = Me.getUTCFullYear(), le.m = Me.getUTCMonth(), le.d = Me.getUTCDate() + (le.w + 6) % 7) : (Me = Md(rs(le.y, 0, 1)), He = Me.getDay(), Me = He > 4 || He === 0 ? Yu.ceil(Me) : Yu(Me), Me = Xm.offset(Me, (le.V - 1) * 7), le.y = Me.getFullYear(), le.m = Me.getMonth(), le.d = Me.getDate() + (le.w + 6) % 7);
      } else
        ("W" in le || "U" in le) && ("w" in le || (le.w = "u" in le ? le.u % 7 : "W" in le ? 1 : 0), He = "Z" in le ? _d(rs(le.y, 0, 1)).getUTCDay() : Md(rs(le.y, 0, 1)).getDay(), le.m = 0, le.d = "W" in le ? (le.w + 6) % 7 + le.W * 7 - (He + 5) % 7 : le.w + le.U * 7 - (He + 6) % 7);
      return "Z" in le ? (le.H += le.Z / 100 | 0, le.M += le.Z % 100, _d(le)) : Md(le);
    };
  }
  function H(Oe, ye, we, le) {
    for (var Be = 0, Me = ye.length, He = we.length, qe, et; Be < Me; ) {
      if (le >= He)
        return -1;
      if (qe = ye.charCodeAt(Be++), qe === 37) {
        if (qe = ye.charAt(Be++), et = _[qe in sp ? ye.charAt(Be++) : qe], !et || (le = et(Oe, we, le)) < 0)
          return -1;
      } else if (qe != we.charCodeAt(le++))
        return -1;
    }
    return le;
  }
  function U(Oe, ye, we) {
    var le = d.exec(ye.slice(we));
    return le ? (Oe.p = g.get(le[0].toLowerCase()), we + le[0].length) : -1;
  }
  function X(Oe, ye, we) {
    var le = k.exec(ye.slice(we));
    return le ? (Oe.w = E.get(le[0].toLowerCase()), we + le[0].length) : -1;
  }
  function Q(Oe, ye, we) {
    var le = y.exec(ye.slice(we));
    return le ? (Oe.w = v.get(le[0].toLowerCase()), we + le[0].length) : -1;
  }
  function K(Oe, ye, we) {
    var le = m.exec(ye.slice(we));
    return le ? (Oe.m = R.get(le[0].toLowerCase()), we + le[0].length) : -1;
  }
  function oe(Oe, ye, we) {
    var le = M.exec(ye.slice(we));
    return le ? (Oe.m = T.get(le[0].toLowerCase()), we + le[0].length) : -1;
  }
  function fe(Oe, ye, we) {
    return H(Oe, t, ye, we);
  }
  function W(Oe, ye, we) {
    return H(Oe, r, ye, we);
  }
  function ie(Oe, ye, we) {
    return H(Oe, n, ye, we);
  }
  function re(Oe) {
    return f[Oe.getDay()];
  }
  function ue(Oe) {
    return l[Oe.getDay()];
  }
  function ee(Oe) {
    return c[Oe.getMonth()];
  }
  function Y(Oe) {
    return s[Oe.getMonth()];
  }
  function te(Oe) {
    return a[+(Oe.getHours() >= 12)];
  }
  function I(Oe) {
    return 1 + ~~(Oe.getMonth() / 3);
  }
  function ge(Oe) {
    return f[Oe.getUTCDay()];
  }
  function ve(Oe) {
    return l[Oe.getUTCDay()];
  }
  function ke(Oe) {
    return c[Oe.getUTCMonth()];
  }
  function Ne(Oe) {
    return s[Oe.getUTCMonth()];
  }
  function je(Oe) {
    return a[+(Oe.getUTCHours() >= 12)];
  }
  function Qe(Oe) {
    return 1 + ~~(Oe.getUTCMonth() / 3);
  }
  return {
    format: function(Oe) {
      var ye = D(Oe += "", O);
      return ye.toString = function() {
        return Oe;
      }, ye;
    },
    parse: function(Oe) {
      var ye = B(Oe += "", !1);
      return ye.toString = function() {
        return Oe;
      }, ye;
    },
    utcFormat: function(Oe) {
      var ye = D(Oe += "", N);
      return ye.toString = function() {
        return Oe;
      }, ye;
    },
    utcParse: function(Oe) {
      var ye = B(Oe += "", !0);
      return ye.toString = function() {
        return Oe;
      }, ye;
    }
  };
}
var sp = { "-": "", _: " ", 0: "0" }, zn = /^\s*\d+/, lx = /^%/, sx = /[\\^$*+?|[\]().{}]/g;
function Kt(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", l = a.length;
  return n + (l < r ? new Array(r - l + 1).join(t) + a : a);
}
function ux(e) {
  return e.replace(sx, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(ux).join("|") + ")", "i");
}
function is(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function cx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function dx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function fx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function hx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function up(e, t, r) {
  var n = zn.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function cp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function dp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function fp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Sx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Ex(e, t, r) {
  var n = zn.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function kx(e, t, r) {
  var n = lx.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function wx(e, t, r) {
  var n = zn.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Tx(e, t, r) {
  var n = zn.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function hp(e, t) {
  return Kt(e.getDate(), t, 2);
}
function Cx(e, t) {
  return Kt(e.getHours(), t, 2);
}
function Ax(e, t) {
  return Kt(e.getHours() % 12 || 12, t, 2);
}
function Px(e, t) {
  return Kt(1 + Xm.count(bs(e), e), t, 3);
}
function Jm(e, t) {
  return Kt(e.getMilliseconds(), t, 3);
}
function Rx(e, t) {
  return Jm(e, t) + "000";
}
function Lx(e, t) {
  return Kt(e.getMonth() + 1, t, 2);
}
function Dx(e, t) {
  return Kt(e.getMinutes(), t, 2);
}
function Ox(e, t) {
  return Kt(e.getSeconds(), t, 2);
}
function Mx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function _x(e, t) {
  return Kt(qm.count(bs(e) - 1, e), t, 2);
}
function eg(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Jo(e) : Jo.ceil(e);
}
function Nx(e, t) {
  return e = eg(e), Kt(Jo.count(bs(e), e) + (bs(e).getDay() === 4), t, 2);
}
function Fx(e) {
  return e.getDay();
}
function $x(e, t) {
  return Kt(Yu.count(bs(e) - 1, e), t, 2);
}
function zx(e, t) {
  return Kt(e.getFullYear() % 100, t, 2);
}
function Bx(e, t) {
  return e = eg(e), Kt(e.getFullYear() % 100, t, 2);
}
function Ix(e, t) {
  return Kt(e.getFullYear() % 1e4, t, 4);
}
function Hx(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Jo(e) : Jo.ceil(e), Kt(e.getFullYear() % 1e4, t, 4);
}
function Wx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Kt(t / 60 | 0, "0", 2) + Kt(t % 60, "0", 2);
}
function pp(e, t) {
  return Kt(e.getUTCDate(), t, 2);
}
function Vx(e, t) {
  return Kt(e.getUTCHours(), t, 2);
}
function jx(e, t) {
  return Kt(e.getUTCHours() % 12 || 12, t, 2);
}
function Ux(e, t) {
  return Kt(1 + Zm.count(Ss(e), e), t, 3);
}
function tg(e, t) {
  return Kt(e.getUTCMilliseconds(), t, 3);
}
function Kx(e, t) {
  return tg(e, t) + "000";
}
function Yx(e, t) {
  return Kt(e.getUTCMonth() + 1, t, 2);
}
function Xx(e, t) {
  return Kt(e.getUTCMinutes(), t, 2);
}
function qx(e, t) {
  return Kt(e.getUTCSeconds(), t, 2);
}
function Gx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Zx(e, t) {
  return Kt(Qm.count(Ss(e) - 1, e), t, 2);
}
function ng(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? el(e) : el.ceil(e);
}
function Qx(e, t) {
  return e = ng(e), Kt(el.count(Ss(e), e) + (Ss(e).getUTCDay() === 4), t, 2);
}
function Jx(e) {
  return e.getUTCDay();
}
function eb(e, t) {
  return Kt(Xu.count(Ss(e) - 1, e), t, 2);
}
function tb(e, t) {
  return Kt(e.getUTCFullYear() % 100, t, 2);
}
function nb(e, t) {
  return e = ng(e), Kt(e.getUTCFullYear() % 100, t, 2);
}
function rb(e, t) {
  return Kt(e.getUTCFullYear() % 1e4, t, 4);
}
function ab(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? el(e) : el.ceil(e), Kt(e.getUTCFullYear() % 1e4, t, 4);
}
function ib() {
  return "+0000";
}
function mp() {
  return "%";
}
function gp(e) {
  return +e;
}
function yp(e) {
  return Math.floor(+e / 1e3);
}
var Uo, Jd, rg;
ob({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ob(e) {
  return Uo = ox(e), Jd = Uo.format, rg = Uo.parse, Uo.utcFormat, Uo.utcParse, Uo;
}
const wt = se.createContext({}), Bt = {
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
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return Bt.und(r) ? e === t : !0;
  }
};
function lb(e, t) {
  return t === void 0 && (t = !0), (r) => (Bt.arr(r) ? r : Object.keys(r)).reduce((n, a) => {
    const l = t ? a[0].toLowerCase() + a.substring(1) : a;
    return n[l] = e(l), n;
  }, e);
}
function ag() {
  const e = se.useState(!1), t = e[1];
  return se.useCallback(() => t((n) => !n), []);
}
function Ri(e, t) {
  return Bt.und(e) || Bt.nul(e) ? t : e;
}
function Go(e) {
  return Bt.und(e) ? [] : Bt.arr(e) ? e : [e];
}
function Nr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Bt.fun(e) ? e(...r) : e;
}
function sb(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Zr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Nd(e) {
  const t = sb(e);
  if (Bt.und(t))
    return dn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((n, a) => Bt.und(t[a]) ? dn({}, n, {
    [a]: e[a]
  }) : n, {});
  return dn({
    to: t
  }, r);
}
function ub(e, t) {
  return t && (Bt.fun(t) ? t(e) : Bt.obj(t) && (t.current = e)), e;
}
class Fr {
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
    const r = this.children.indexOf(t);
    this.children.splice(r, 1), this.children.length === 0 && this.detach();
  }
}
class ef extends Fr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Fr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Fr && t.removeChild(this));
  }
}
class ig extends Fr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Fr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Fr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const n in this.payload) {
      const a = this.payload[n];
      t && !(a instanceof Fr) || (r[n] = a instanceof Fr ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Yf;
function cb(e, t) {
  Yf = {
    fn: e,
    transform: t
  };
}
let og;
function db(e) {
  og = e;
}
let lg = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, qu;
function fb(e) {
  qu = e;
}
let sg = () => Date.now(), hb = (e) => e.current, ug;
function pb(e) {
  ug = e;
}
class mb extends ig {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? dn({}, t, {
      style: ug(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const gb = (e) => Bt.fun(e) && !(e.prototype instanceof i.Component), yb = (e) => se.forwardRef((r, n) => {
  const a = ag(), l = se.useRef(!0), f = se.useRef(null), s = se.useRef(null), c = se.useCallback((v) => {
    const k = f.current, E = () => {
      let M = !1;
      s.current && (M = Yf.fn(s.current, f.current.getAnimatedValue())), (!s.current || M === !1) && a();
    };
    f.current = new mb(v, E), k && k.detach();
  }, []);
  se.useEffect(() => () => {
    l.current = !1, f.current && f.current.detach();
  }, []), se.useImperativeHandle(n, () => hb(s)), c(r);
  const d = f.current.getValue();
  d.scrollTop, d.scrollLeft;
  const g = Zr(d, ["scrollTop", "scrollLeft"]), y = gb(e) ? void 0 : (v) => s.current = ub(v, n);
  return i.createElement(e, dn({}, g, {
    ref: y
  }));
});
let ds = !1;
const Ii = /* @__PURE__ */ new Set(), cg = () => {
  if (!ds)
    return !1;
  let e = sg();
  for (let t of Ii) {
    let r = !1;
    for (let n = 0; n < t.configs.length; n++) {
      let a = t.configs[n], l, f;
      for (let s = 0; s < a.animatedValues.length; s++) {
        let c = a.animatedValues[s];
        if (c.done)
          continue;
        let d = a.fromValues[s], g = a.toValues[s], y = c.lastPosition, v = g instanceof Fr, k = Array.isArray(a.initialVelocity) ? a.initialVelocity[s] : a.initialVelocity;
        if (v && (g = g.getValue()), a.immediate) {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (typeof d == "string" || typeof g == "string") {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          y = d + a.easing((e - c.startTime) / a.duration) * (g - d), l = e >= c.startTime + a.duration;
        else if (a.decay)
          y = d + k / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), l = Math.abs(c.lastPosition - y) < 0.1, l && (g = y);
        else {
          f = c.lastTime !== void 0 ? c.lastTime : e, k = c.lastVelocity !== void 0 ? c.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let E = Math.floor(e - f);
          for (let R = 0; R < E; ++R) {
            let O = -a.tension * (y - g), N = -a.friction * k, _ = (O + N) / a.mass;
            k = k + _ * 1 / 1e3, y = y + k * 1 / 1e3;
          }
          let M = a.clamp && a.tension !== 0 ? d < g ? y > g : y < g : !1, T = Math.abs(k) <= a.precision, m = a.tension !== 0 ? Math.abs(g - y) <= a.precision : !0;
          l = M || T && m, c.lastVelocity = k, c.lastTime = e;
        }
        v && !a.toValues[s].done && (l = !1), l ? (c.value !== g && (y = g), c.done = !0) : r = !0, c.setValue(y), c.lastPosition = y;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || (Ii.delete(t), t.stop(!0));
  }
  return Ii.size ? lg(cg) : ds = !1, ds;
}, vb = (e) => {
  Ii.has(e) || Ii.add(e), ds || (ds = !0, lg(cg));
}, xb = (e) => {
  Ii.has(e) && Ii.delete(e);
};
function Gu(e, t, r) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Gu({
      range: e,
      output: t,
      extrapolate: r
    });
  if (qu && typeof e.output[0] == "string")
    return qu(e);
  const n = e, a = n.output, l = n.range || [0, 1], f = n.extrapolateLeft || n.extrapolate || "extend", s = n.extrapolateRight || n.extrapolate || "extend", c = n.easing || ((d) => d);
  return (d) => {
    const g = Sb(d, l);
    return bb(d, l[g], l[g + 1], a[g], a[g + 1], c, f, s, n.map);
  };
}
function bb(e, t, r, n, a, l, f, s, c) {
  let d = c ? c(e) : e;
  if (d < t) {
    if (f === "identity")
      return d;
    f === "clamp" && (d = t);
  }
  if (d > r) {
    if (s === "identity")
      return d;
    s === "clamp" && (d = r);
  }
  return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d = d - t : d = (d - t) / (r - t), d = l(d), n === -1 / 0 ? d = -d : a === 1 / 0 ? d = d + n : d = d * (a - n) + n, d);
}
function Sb(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class tl extends ef {
  constructor(t, r, n, a) {
    super(), this.calc = void 0, this.payload = t instanceof ef && !(t instanceof tl) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Gu(r, n, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, n) {
    this.calc = Gu(t, r, n);
  }
  interpolate(t, r, n) {
    return new tl(this, t, r, n);
  }
}
const Eb = (e, t, r) => e && new tl(e, t, r);
function dg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => dg(r, t));
}
class tf extends Fr {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(n, a) {
      a === void 0 && (a = !0), r.value = n, a && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && dg(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, n) {
    return new tl(this, t, r, n);
  }
}
class kb extends ef {
  constructor(t) {
    super(), this.payload = t.map((r) => new tf(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((n, a) => this.payload[a].setValue(n, r)) : this.payload.forEach((n) => n.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new tl(this, t, r);
  }
}
let wb = 0;
class Tb {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = wb++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Nd(t), n = r.delay, a = n === void 0 ? 0 : n, l = r.to, f = Zr(r, ["delay", "to"]);
    if (Bt.arr(l) || Bt.fun(l))
      this.queue.push(dn({}, f, {
        delay: a,
        to: l
      }));
    else if (l) {
      let s = {};
      Object.entries(l).forEach((c) => {
        let d = c[0], g = c[1];
        const y = dn({
          to: {
            [d]: g
          },
          delay: Nr(a, d)
        }, f), v = s[y.delay] && s[y.delay].to;
        s[y.delay] = dn({}, s[y.delay], y, {
          to: dn({}, v, y.to)
        });
      }), this.queue = Object.values(s);
    }
    return this.queue = this.queue.sort((s, c) => s.delay - c.delay), this.diff(f), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let l = a.from, f = l === void 0 ? {} : l, s = a.to, c = s === void 0 ? {} : s;
        Bt.obj(f) && (this.merged = dn({}, f, this.merged)), Bt.obj(c) && (this.merged = dn({}, this.merged, c));
      });
      const r = this.local = ++this.guid, n = this.localQueue = this.queue;
      this.queue = [], n.forEach((a, l) => {
        let f = a.delay, s = Zr(a, ["delay"]);
        const c = (g) => {
          l === n.length - 1 && r === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let d = Bt.arr(s.to) || Bt.fun(s.to);
        f ? setTimeout(() => {
          r === this.guid && (d ? this.runAsync(s, c) : this.diff(s).start(c));
        }, f) : d ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Bt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), vb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && xb(this), this;
  }
  runAsync(t, r) {
    var n = this;
    t.delay;
    let a = Zr(t, ["delay"]);
    const l = this.local;
    let f = Promise.resolve(void 0);
    if (Bt.arr(a.to))
      for (let s = 0; s < a.to.length; s++) {
        const c = s, d = dn({}, a, Nd(a.to[c]));
        Bt.arr(d.config) && (d.config = d.config[c]), f = f.then(() => {
          if (l === this.guid)
            return new Promise((g) => this.diff(d).start(g));
        });
      }
    else if (Bt.fun(a.to)) {
      let s = 0, c;
      f = f.then(() => a.to(
        // next(props)
        (d) => {
          const g = dn({}, a, Nd(d));
          if (Bt.arr(g.config) && (g.config = g.config[s]), s++, l === this.guid)
            return c = new Promise((y) => this.diff(g).start(y));
        },
        // cancel()
        function(d) {
          return d === void 0 && (d = !0), n.stop(d);
        }
      ).then(() => c));
    }
    f.then(r);
  }
  diff(t) {
    this.props = dn({}, this.props, t);
    let r = this.props, n = r.from, a = n === void 0 ? {} : n, l = r.to, f = l === void 0 ? {} : l, s = r.config, c = s === void 0 ? {} : s, d = r.reverse, g = r.attach, y = r.reset, v = r.immediate;
    if (d) {
      var k = [f, a];
      a = k[0], f = k[1];
    }
    this.merged = dn({}, a, this.merged, f), this.hasChanged = !1;
    let E = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, T) => {
      let m = T[0], R = T[1], O = M[m] || {};
      const N = Bt.num(R), _ = Bt.str(R) && !R.startsWith("#") && !/\d/.test(R) && !og[R], D = Bt.arr(R), B = !N && !D && !_;
      let H = Bt.und(a[m]) ? R : a[m], U = N || D || _ ? R : 1, X = Nr(c, m);
      E && (U = E.animations[m].parent);
      let Q = O.parent, K = O.interpolation, oe = Go(E ? U.getPayload() : U), fe, W = R;
      B && (W = qu({
        range: [0, 1],
        output: [R, R]
      })(1));
      let ie = K && K.getValue();
      const ue = !Bt.und(Q) && O.animatedValues.some((I) => !I.done), ee = !Bt.equ(W, ie), Y = !Bt.equ(W, O.previous), te = !Bt.equ(X, O.config);
      if (y || Y && ee || te) {
        if (N || _)
          Q = K = O.parent || new tf(H);
        else if (D)
          Q = K = O.parent || new kb(H);
        else if (B) {
          let I = O.interpolation && O.interpolation.calc(O.parent.value);
          I = I !== void 0 && !y ? I : H, O.parent ? (Q = O.parent, Q.setValue(0, !1)) : Q = new tf(0);
          const ge = {
            output: [I, R]
          };
          O.interpolation ? (K = O.interpolation, O.interpolation.updateConfig(ge)) : K = Q.interpolate(ge);
        }
        return oe = Go(E ? U.getPayload() : U), fe = Go(Q.getPayload()), y && !B && Q.setValue(H, !1), this.hasChanged = !0, fe.forEach((I) => {
          I.startPosition = I.value, I.lastPosition = I.value, I.lastVelocity = ue ? I.lastVelocity : void 0, I.lastTime = ue ? I.lastTime : void 0, I.startTime = sg(), I.done = !1, I.animatedStyles.clear();
        }), Nr(v, m) && Q.setValue(B ? U : R, !1), dn({}, M, {
          [m]: dn({}, O, {
            name: m,
            parent: Q,
            interpolation: K,
            animatedValues: fe,
            toValues: oe,
            previous: W,
            config: X,
            fromValues: Go(Q.getValue()),
            immediate: Nr(v, m),
            initialVelocity: Ri(X.velocity, 0),
            clamp: Ri(X.clamp, !1),
            precision: Ri(X.precision, 0.01),
            tension: Ri(X.tension, 170),
            friction: Ri(X.friction, 26),
            mass: Ri(X.mass, 1),
            duration: X.duration,
            easing: Ri(X.easing, (I) => I),
            decay: X.decay
          })
        });
      } else
        return ee ? M : (B && (Q.setValue(1, !1), K.updateConfig({
          output: [W, W]
        })), Q.done = !0, this.hasChanged = !0, dn({}, M, {
          [m]: dn({}, M[m], {
            previous: W
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let M in this.animations)
        this.interpolations[M] = this.animations[M].interpolation, this.values[M] = this.animations[M].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Cb = 0;
const $u = "enter", Fd = "leave", $d = "update", Ab = (e, t) => (typeof t == "function" ? e.map(t) : Go(t)).map(String), nf = (e) => {
  let t = e.items, r = e.keys, n = r === void 0 ? (l) => l : r, a = Zr(e, ["items", "keys"]);
  return t = Go(t !== void 0 ? t : null), dn({
    items: t,
    keys: Ab(t, n)
  }, a);
};
function Pb(e, t, r) {
  const n = dn({
    items: e,
    keys: t || ((R) => R)
  }, r), a = nf(n), l = a.lazy, f = l === void 0 ? !1 : l;
  a.unique;
  const s = a.reset, c = s === void 0 ? !1 : s;
  a.enter, a.leave, a.update;
  const d = a.onDestroyed;
  a.keys, a.items;
  const g = a.onFrame, y = a.onRest, v = a.onStart, k = a.ref, E = Zr(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = ag(), T = se.useRef(!1), m = se.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!n.ref,
    instances: !T.current && /* @__PURE__ */ new Map(),
    forceUpdate: M
  });
  return se.useImperativeHandle(n.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((R) => {
      let O = R[1];
      return new Promise((N) => O.start(N));
    })),
    stop: (R) => Array.from(m.current.instances).forEach((O) => O[1].stop(R)),
    get controllers() {
      return Array.from(m.current.instances).map((R) => R[1]);
    }
  })), m.current = Rb(m.current, n), m.current.changed && m.current.transitions.forEach((R) => {
    const O = R.slot, N = R.from, _ = R.to, D = R.config, B = R.trail, H = R.key, U = R.item;
    m.current.instances.has(H) || m.current.instances.set(H, new Tb());
    const X = m.current.instances.get(H), Q = dn({}, E, {
      to: _,
      from: N,
      config: D,
      ref: k,
      onRest: (K) => {
        m.current.mounted && (R.destroyed && (!k && !f && vp(m, H), d && d(U)), !Array.from(m.current.instances).some((W) => !W[1].idle) && (k || f) && m.current.deleted.length > 0 && vp(m), y && y(U, O, K));
      },
      onStart: v && (() => v(U, O)),
      onFrame: g && ((K) => g(U, O, K)),
      delay: B,
      reset: c && O === $u
      // Update controller
    });
    X.update(Q), m.current.paused || X.start();
  }), se.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((R) => R[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((R) => {
    let O = R.item, N = R.slot, _ = R.key;
    return {
      item: O,
      key: _,
      state: N,
      props: m.current.instances.get(_).getValues()
    };
  });
}
function vp(e, t) {
  const r = e.current.deleted;
  for (let n of r) {
    let a = n.key;
    const l = (f) => f.key !== a;
    (Bt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Rb(e, t) {
  let r = e.first, n = e.prevProps, a = Zr(e, ["first", "prevProps"]), l = nf(t), f = l.items, s = l.keys, c = l.initial, d = l.from, g = l.enter, y = l.leave, v = l.update, k = l.trail, E = k === void 0 ? 0 : k, M = l.unique, T = l.config, m = l.order, R = m === void 0 ? [$u, Fd, $d] : m, O = nf(n), N = O.keys, _ = O.items, D = dn({}, a.current), B = [...a.deleted], H = Object.keys(D), U = new Set(H), X = new Set(s), Q = s.filter((ie) => !U.has(ie)), K = a.transitions.filter((ie) => !ie.destroyed && !X.has(ie.originalKey)).map((ie) => ie.originalKey), oe = s.filter((ie) => U.has(ie)), fe = -E;
  for (; R.length; )
    switch (R.shift()) {
      case $u: {
        Q.forEach((re, ue) => {
          M && B.find((I) => I.originalKey === re) && (B = B.filter((I) => I.originalKey !== re));
          const ee = s.indexOf(re), Y = f[ee], te = r && c !== void 0 ? "initial" : $u;
          D[re] = {
            slot: te,
            originalKey: re,
            key: M ? String(re) : Cb++,
            item: Y,
            trail: fe = fe + E,
            config: Nr(T, Y, te),
            from: Nr(r && c !== void 0 ? c || {} : d, Y),
            to: Nr(g, Y)
          };
        });
        break;
      }
      case Fd: {
        K.forEach((re) => {
          const ue = N.indexOf(re), ee = _[ue], Y = Fd;
          B.unshift(dn({}, D[re], {
            slot: Y,
            destroyed: !0,
            left: N[Math.max(0, ue - 1)],
            right: N[Math.min(N.length, ue + 1)],
            trail: fe = fe + E,
            config: Nr(T, ee, Y),
            to: Nr(y, ee)
          })), delete D[re];
        });
        break;
      }
      case $d: {
        oe.forEach((re) => {
          const ue = s.indexOf(re), ee = f[ue], Y = $d;
          D[re] = dn({}, D[re], {
            item: ee,
            slot: Y,
            trail: fe = fe + E,
            config: Nr(T, ee, Y),
            to: Nr(v, ee)
          });
        });
        break;
      }
    }
  let W = s.map((ie) => D[ie]);
  return B.forEach((ie) => {
    let re = ie.left;
    ie.right;
    let ue = Zr(ie, ["left", "right"]), ee;
    (ee = W.findIndex((Y) => Y.originalKey === re)) !== -1 && (ee += 1), ee = Math.max(0, ee), W = [...W.slice(0, ee), ue, ...W.slice(ee)];
  }), dn({}, a, {
    changed: Q.length || K.length || oe.length,
    first: r && Q.length === 0,
    transitions: W,
    current: D,
    deleted: B,
    prevProps: t
  });
}
class Lb extends ig {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Fr) && (t = Yf.transform(t)), this.payload = t;
  }
}
const Zu = {
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
}, $r = "[-+]?\\d*\\.?\\d+", Qu = $r + "%";
function Ec() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Db = new RegExp("rgb" + Ec($r, $r, $r)), Ob = new RegExp("rgba" + Ec($r, $r, $r, $r)), Mb = new RegExp("hsl" + Ec($r, Qu, Qu)), _b = new RegExp("hsla" + Ec($r, Qu, Qu, $r)), Nb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Fb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, $b = /^#([0-9a-fA-F]{6})$/, zb = /^#([0-9a-fA-F]{8})$/;
function Bb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = $b.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Zu.hasOwnProperty(e) ? Zu[e] : (t = Db.exec(e)) ? (Ko(t[1]) << 24 | // r
  Ko(t[2]) << 16 | // g
  Ko(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Ob.exec(e)) ? (Ko(t[1]) << 24 | // r
  Ko(t[2]) << 16 | // g
  Ko(t[3]) << 8 | // b
  Sp(t[4])) >>> // a
  0 : (t = Nb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = zb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Fb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Mb.exec(e)) ? (xp(
    bp(t[1]),
    // h
    wu(t[2]),
    // s
    wu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = _b.exec(e)) ? (xp(
    bp(t[1]),
    // h
    wu(t[2]),
    // s
    wu(t[3])
    // l
  ) | Sp(t[4])) >>> // a
  0 : null;
}
function zd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function xp(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n, l = zd(a, n, e + 1 / 3), f = zd(a, n, e), s = zd(a, n, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(f * 255) << 16 | Math.round(s * 255) << 8;
}
function Ko(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function bp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Sp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function wu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Ep(e) {
  let t = Bb(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${a}, ${l})`;
}
const Tu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Ib = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Hb = new RegExp(`(${Object.keys(Zu).join("|")})`, "g"), Wb = (e) => {
  const t = e.output.map((a) => a.replace(Ib, Ep)).map((a) => a.replace(Hb, Ep)), r = t[0].match(Tu).map(() => []);
  t.forEach((a) => {
    a.match(Tu).forEach((l, f) => r[f].push(+l));
  });
  const n = t[0].match(Tu).map((a, l) => Gu(dn({}, e, {
    output: r[l]
  })));
  return (a) => {
    let l = 0;
    return t[0].replace(Tu, () => n[l++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, s, c, d, g) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(d)}, ${g})`);
  };
};
let fs = {
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
const Vb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), jb = ["Webkit", "Ms", "Moz", "O"];
fs = Object.keys(fs).reduce((e, t) => (jb.forEach((r) => e[Vb(r, t)] = e[t]), e), fs);
function Ub(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : ("" + t).trim();
}
const kp = {};
pb((e) => new Lb(e));
fb(Wb);
db(Zu);
cb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, l = t.children, f = t.scrollTop, s = t.scrollLeft, c = Zr(t, ["style", "children", "scrollTop", "scrollLeft"]), d = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), s !== void 0 && (e.scrollLeft = s), l !== void 0 && (e.textContent = l);
    for (let g in a)
      if (a.hasOwnProperty(g)) {
        var r = g.indexOf("--") === 0, n = Ub(g, a[g], r);
        g === "float" && (g = "cssFloat"), r ? e.style.setProperty(g, n) : e.style[g] = n;
      }
    for (let g in c) {
      const y = d ? g : kp[g] || (kp[g] = g.replace(/([A-Z])/g, (v) => "-" + v.toLowerCase()));
      typeof e.getAttribute(y) < "u" && e.setAttribute(y, c[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const Kb = [
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
], Yb = lb(yb, !1), wp = Yb(Kb);
function Xb(e) {
  return e.innerRadius;
}
function qb(e) {
  return e.outerRadius;
}
function Gb(e) {
  return e.startAngle;
}
function Zb(e) {
  return e.endAngle;
}
function Qb(e) {
  return e && e.padAngle;
}
function Jb(e, t, r, n, a, l, f, s) {
  var c = r - e, d = n - t, g = f - a, y = s - l, v = y * c - g * d;
  if (!(v * v < Yn))
    return v = (g * (t - l) - y * (e - a)) / v, [e + v * c, t + v * d];
}
function Cu(e, t, r, n, a, l, f) {
  var s = e - r, c = t - n, d = (f ? l : -l) / Xo(s * s + c * c), g = d * c, y = -d * s, v = e + g, k = t + y, E = r + g, M = n + y, T = (v + E) / 2, m = (k + M) / 2, R = E - v, O = M - k, N = R * R + O * O, _ = a - l, D = v * M - E * k, B = (O < 0 ? -1 : 1) * Xo(Ey(0, _ * _ * N - D * D)), H = (D * O - R * B) / N, U = (-D * R - O * B) / N, X = (D * O + R * B) / N, Q = (-D * R + O * B) / N, K = H - T, oe = U - m, fe = X - T, W = Q - m;
  return K * K + oe * oe > fe * fe + W * W && (H = X, U = Q), {
    cx: H,
    cy: U,
    x01: -g,
    y01: -y,
    x11: H * (a / _ - 1),
    y11: U * (a / _ - 1)
  };
}
function e0() {
  var e = Xb, t = qb, r = Ht(0), n = null, a = Gb, l = Zb, f = Qb, s = null;
  function c() {
    var d, g, y = +e.apply(this, arguments), v = +t.apply(this, arguments), k = a.apply(this, arguments) - Oh, E = l.apply(this, arguments) - Oh, M = Mh(E - k), T = E > k;
    if (s || (s = d = bc()), v < y && (g = v, v = y, y = g), !(v > Yn))
      s.moveTo(0, 0);
    else if (M > Nu - Yn)
      s.moveTo(v * Ai(k), v * Kr(k)), s.arc(0, 0, v, k, E, !T), y > Yn && (s.moveTo(y * Ai(E), y * Kr(E)), s.arc(0, 0, y, E, k, T));
    else {
      var m = k, R = E, O = k, N = E, _ = M, D = M, B = f.apply(this, arguments) / 2, H = B > Yn && (n ? +n.apply(this, arguments) : Xo(y * y + v * v)), U = Cd(Mh(v - y) / 2, +r.apply(this, arguments)), X = U, Q = U, K, oe;
      if (H > Yn) {
        var fe = _h(H / y * Kr(B)), W = _h(H / v * Kr(B));
        (_ -= fe * 2) > Yn ? (fe *= T ? 1 : -1, O += fe, N -= fe) : (_ = 0, O = N = (k + E) / 2), (D -= W * 2) > Yn ? (W *= T ? 1 : -1, m += W, R -= W) : (D = 0, m = R = (k + E) / 2);
      }
      var ie = v * Ai(m), re = v * Kr(m), ue = y * Ai(N), ee = y * Kr(N);
      if (U > Yn) {
        var Y = v * Ai(R), te = v * Kr(R), I = y * Ai(O), ge = y * Kr(O), ve;
        if (M < Dh && (ve = Jb(ie, re, I, ge, Y, te, ue, ee))) {
          var ke = ie - ve[0], Ne = re - ve[1], je = Y - ve[0], Qe = te - ve[1], Oe = 1 / Kr(Sy((ke * je + Ne * Qe) / (Xo(ke * ke + Ne * Ne) * Xo(je * je + Qe * Qe))) / 2), ye = Xo(ve[0] * ve[0] + ve[1] * ve[1]);
          X = Cd(U, (y - ye) / (Oe - 1)), Q = Cd(U, (v - ye) / (Oe + 1));
        }
      }
      D > Yn ? Q > Yn ? (K = Cu(I, ge, ie, re, v, Q, T), oe = Cu(Y, te, ue, ee, v, Q, T), s.moveTo(K.cx + K.x01, K.cy + K.y01), Q < U ? s.arc(K.cx, K.cy, Q, Kn(K.y01, K.x01), Kn(oe.y01, oe.x01), !T) : (s.arc(K.cx, K.cy, Q, Kn(K.y01, K.x01), Kn(K.y11, K.x11), !T), s.arc(0, 0, v, Kn(K.cy + K.y11, K.cx + K.x11), Kn(oe.cy + oe.y11, oe.cx + oe.x11), !T), s.arc(oe.cx, oe.cy, Q, Kn(oe.y11, oe.x11), Kn(oe.y01, oe.x01), !T))) : (s.moveTo(ie, re), s.arc(0, 0, v, m, R, !T)) : s.moveTo(ie, re), !(y > Yn) || !(_ > Yn) ? s.lineTo(ue, ee) : X > Yn ? (K = Cu(ue, ee, Y, te, y, -X, T), oe = Cu(ie, re, I, ge, y, -X, T), s.lineTo(K.cx + K.x01, K.cy + K.y01), X < U ? s.arc(K.cx, K.cy, X, Kn(K.y01, K.x01), Kn(oe.y01, oe.x01), !T) : (s.arc(K.cx, K.cy, X, Kn(K.y01, K.x01), Kn(K.y11, K.x11), !T), s.arc(0, 0, y, Kn(K.cy + K.y11, K.cx + K.x11), Kn(oe.cy + oe.y11, oe.cx + oe.x11), T), s.arc(oe.cx, oe.cy, X, Kn(oe.y11, oe.x11), Kn(oe.y01, oe.x01), !T))) : s.arc(0, 0, y, N, O, T);
    }
    if (s.closePath(), d)
      return s = null, d + "" || null;
  }
  return c.centroid = function() {
    var d = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+a.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Dh / 2;
    return [Ai(g) * d, Kr(g) * d];
  }, c.innerRadius = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ht(+d), c) : e;
  }, c.outerRadius = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ht(+d), c) : t;
  }, c.cornerRadius = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Ht(+d), c) : r;
  }, c.padRadius = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Ht(+d), c) : n;
  }, c.startAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : Ht(+d), c) : a;
  }, c.endAngle = function(d) {
    return arguments.length ? (l = typeof d == "function" ? d : Ht(+d), c) : l;
  }, c.padAngle = function(d) {
    return arguments.length ? (f = typeof d == "function" ? d : Ht(+d), c) : f;
  }, c.context = function(d) {
    return arguments.length ? (s = d ?? null, c) : s;
  }, c;
}
function fg(e) {
  this._context = e;
}
fg.prototype = {
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
function kc(e) {
  return new fg(e);
}
function Xf(e) {
  return e[0];
}
function qf(e) {
  return e[1];
}
function hg() {
  var e = Xf, t = qf, r = Ht(!0), n = null, a = kc, l = null;
  function f(s) {
    var c, d = s.length, g, y = !1, v;
    for (n == null && (l = a(v = bc())), c = 0; c <= d; ++c)
      !(c < d && r(g = s[c], c, s)) === y && ((y = !y) ? l.lineStart() : l.lineEnd()), y && l.point(+e(g, c, s), +t(g, c, s));
    if (v)
      return l = null, v + "" || null;
  }
  return f.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Ht(+s), f) : e;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Ht(+s), f) : t;
  }, f.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Ht(!!s), f) : r;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, n != null && (l = a(n)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? n = l = null : l = a(n = s), f) : n;
  }, f;
}
function t0() {
  var e = Xf, t = null, r = Ht(0), n = qf, a = Ht(!0), l = null, f = kc, s = null;
  function c(g) {
    var y, v, k, E = g.length, M, T = !1, m, R = new Array(E), O = new Array(E);
    for (l == null && (s = f(m = bc())), y = 0; y <= E; ++y) {
      if (!(y < E && a(M = g[y], y, g)) === T)
        if (T = !T)
          v = y, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), k = y - 1; k >= v; --k)
            s.point(R[k], O[k]);
          s.lineEnd(), s.areaEnd();
        }
      T && (R[y] = +e(M, y, g), O[y] = +r(M, y, g), s.point(t ? +t(M, y, g) : R[y], n ? +n(M, y, g) : O[y]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function d() {
    return hg().defined(a).curve(f).context(l);
  }
  return c.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Ht(+g), t = null, c) : e;
  }, c.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Ht(+g), c) : e;
  }, c.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : Ht(+g), c) : t;
  }, c.y = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Ht(+g), n = null, c) : r;
  }, c.y0 = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Ht(+g), c) : r;
  }, c.y1 = function(g) {
    return arguments.length ? (n = g == null ? null : typeof g == "function" ? g : Ht(+g), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(r);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(t).y(r);
  }, c.defined = function(g) {
    return arguments.length ? (a = typeof g == "function" ? g : Ht(!!g), c) : a;
  }, c.curve = function(g) {
    return arguments.length ? (f = g, l != null && (s = f(l)), c) : f;
  }, c.context = function(g) {
    return arguments.length ? (g == null ? l = s = null : s = f(l = g), c) : l;
  }, c;
}
function n0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function r0(e) {
  return e;
}
function a0() {
  var e = r0, t = n0, r = null, n = Ht(0), a = Ht(Nu), l = Ht(0);
  function f(s) {
    var c, d = s.length, g, y, v = 0, k = new Array(d), E = new Array(d), M = +n.apply(this, arguments), T = Math.min(Nu, Math.max(-Nu, a.apply(this, arguments) - M)), m, R = Math.min(Math.abs(T) / d, l.apply(this, arguments)), O = R * (T < 0 ? -1 : 1), N;
    for (c = 0; c < d; ++c)
      (N = E[k[c] = c] = +e(s[c], c, s)) > 0 && (v += N);
    for (t != null ? k.sort(function(_, D) {
      return t(E[_], E[D]);
    }) : r != null && k.sort(function(_, D) {
      return r(s[_], s[D]);
    }), c = 0, y = v ? (T - d * O) / v : 0; c < d; ++c, M = m)
      g = k[c], N = E[g], m = M + (N > 0 ? N * y : 0) + O, E[g] = {
        data: s[g],
        index: c,
        value: N,
        startAngle: M,
        endAngle: m,
        padAngle: R
      };
    return E;
  }
  return f.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Ht(+s), f) : e;
  }, f.sortValues = function(s) {
    return arguments.length ? (t = s, r = null, f) : t;
  }, f.sort = function(s) {
    return arguments.length ? (r = s, t = null, f) : r;
  }, f.startAngle = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Ht(+s), f) : n;
  }, f.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Ht(+s), f) : a;
  }, f.padAngle = function(s) {
    return arguments.length ? (l = typeof s == "function" ? s : Ht(+s), f) : l;
  }, f;
}
var rf = Array.prototype.slice;
function i0(e) {
  return e.source;
}
function o0(e) {
  return e.target;
}
function l0(e) {
  var t = i0, r = o0, n = Xf, a = qf, l = null;
  function f() {
    var s, c = rf.call(arguments), d = t.apply(this, c), g = r.apply(this, c);
    if (l || (l = s = bc()), e(l, +n.apply(this, (c[0] = d, c)), +a.apply(this, c), +n.apply(this, (c[0] = g, c)), +a.apply(this, c)), s)
      return l = null, s + "" || null;
  }
  return f.source = function(s) {
    return arguments.length ? (t = s, f) : t;
  }, f.target = function(s) {
    return arguments.length ? (r = s, f) : r;
  }, f.x = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Ht(+s), f) : n;
  }, f.y = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Ht(+s), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (l = s ?? null, f) : l;
  }, f;
}
function s0(e, t, r, n, a) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + n) / 2, r, t, a, n, a);
}
function u0() {
  return l0(s0);
}
function ja() {
}
function Ju(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function wc(e) {
  this._context = e;
}
wc.prototype = {
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
        Ju(this, this._x1, this._y1);
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
        Ju(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function c0(e) {
  return new wc(e);
}
function pg(e) {
  this._context = e;
}
pg.prototype = {
  areaStart: ja,
  areaEnd: ja,
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
        Ju(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function d0(e) {
  return new pg(e);
}
function mg(e) {
  this._context = e;
}
mg.prototype = {
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
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ju(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function f0(e) {
  return new mg(e);
}
function gg(e, t) {
  this._basis = new wc(e), this._beta = t;
}
gg.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var n = e[0], a = t[0], l = e[r] - n, f = t[r] - a, s = -1, c; ++s <= r; )
        c = s / r, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (n + c * l),
          this._beta * t[s] + (1 - this._beta) * (a + c * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const h0 = function e(t) {
  function r(n) {
    return t === 1 ? new wc(n) : new gg(n, t);
  }
  return r.beta = function(n) {
    return e(+n);
  }, r;
}(0.85);
function ec(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Gf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Gf.prototype = {
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
        ec(this, this._x1, this._y1);
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const p0 = function e(t) {
  function r(n) {
    return new Gf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function Zf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Zf.prototype = {
  areaStart: ja,
  areaEnd: ja,
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const m0 = function e(t) {
  function r(n) {
    return new Zf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function Qf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Qf.prototype = {
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const g0 = function e(t) {
  function r(n) {
    return new Qf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function Jf(e, t, r) {
  var n = e._x1, a = e._y1, l = e._x2, f = e._y2;
  if (e._l01_a > Yn) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    n = (n * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Yn) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * d + e._x1 * e._l23_2a - t * e._l12_2a) / g, f = (f * d + e._y1 * e._l23_2a - r * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(n, a, l, f, e._x2, e._y2);
}
function yg(e, t) {
  this._context = e, this._alpha = t;
}
yg.prototype = {
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
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
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
        Jf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const y0 = function e(t) {
  function r(n) {
    return t ? new yg(n, t) : new Gf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function vg(e, t) {
  this._context = e, this._alpha = t;
}
vg.prototype = {
  areaStart: ja,
  areaEnd: ja,
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
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
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
        Jf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const v0 = function e(t) {
  function r(n) {
    return t ? new vg(n, t) : new Zf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function xg(e, t) {
  this._context = e, this._alpha = t;
}
xg.prototype = {
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
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
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
        Jf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x0 = function e(t) {
  function r(n) {
    return t ? new xg(n, t) : new Qf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function bg(e) {
  this._context = e;
}
bg.prototype = {
  areaStart: ja,
  areaEnd: ja,
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
function af(e) {
  return new bg(e);
}
function Tp(e) {
  return e < 0 ? -1 : 1;
}
function Cp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, l = (e._y1 - e._y0) / (n || a < 0 && -0), f = (r - e._y1) / (a || n < 0 && -0), s = (l * a + f * n) / (n + a);
  return (Tp(l) + Tp(f)) * Math.min(Math.abs(l), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function Ap(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Bd(e, t, r) {
  var n = e._x0, a = e._y0, l = e._x1, f = e._y1, s = (l - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, l - s, f - s * r, l, f);
}
function tc(e) {
  this._context = e;
}
tc.prototype = {
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
        Bd(this, this._t0, Ap(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Bd(this, Ap(this, r = Cp(this, e, t)), r);
          break;
        default:
          Bd(this, this._t0, r = Cp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Sg(e) {
  this._context = new Eg(e);
}
(Sg.prototype = Object.create(tc.prototype)).point = function(e, t) {
  tc.prototype.point.call(this, t, e);
};
function Eg(e) {
  this._context = e;
}
Eg.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, l) {
    this._context.bezierCurveTo(t, e, n, r, l, a);
  }
};
function zu(e) {
  return new tc(e);
}
function b0(e) {
  return new Sg(e);
}
function kg(e) {
  this._context = e;
}
kg.prototype = {
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
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Pp(e), a = Pp(t), l = 0, f = 1; f < r; ++l, ++f)
          this._context.bezierCurveTo(n[0][l], a[0][l], n[1][l], a[1][l], e[f], t[f]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Pp(e) {
  var t, r = e.length - 1, n, a = new Array(r), l = new Array(r), f = new Array(r);
  for (a[0] = 0, l[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    a[t] = 1, l[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, l[r - 1] = 7, f[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = a[t] / l[t - 1], l[t] -= n, f[t] -= n * f[t - 1];
  for (a[r - 1] = f[r - 1] / l[r - 1], t = r - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / l[t];
  for (l[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t)
    l[t] = 2 * e[t + 1] - a[t + 1];
  return [a, l];
}
function S0(e) {
  return new kg(e);
}
function Tc(e, t) {
  this._context = e, this._t = t;
}
Tc.prototype = {
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
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function E0(e) {
  return new Tc(e, 0.5);
}
function k0(e) {
  return new Tc(e, 0);
}
function w0(e) {
  return new Tc(e, 1);
}
function nl(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, n, a, l = e[t[0]], f, s = l.length; r < f; ++r)
      for (a = l, l = e[t[r]], n = 0; n < s; ++n)
        l[n][1] += l[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function rl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function T0(e, t) {
  return e[t];
}
function eh() {
  var e = Ht([]), t = rl, r = nl, n = T0;
  function a(l) {
    var f = e.apply(this, arguments), s, c = l.length, d = f.length, g = new Array(d), y;
    for (s = 0; s < d; ++s) {
      for (var v = f[s], k = g[s] = new Array(c), E = 0, M; E < c; ++E)
        k[E] = M = [0, +n(l[E], v, E, l)], M.data = l[E];
      k.key = v;
    }
    for (s = 0, y = t(g); s < d; ++s)
      g[y[s]].index = s;
    return r(g, y), g;
  }
  return a.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ht(rf.call(l)), a) : e;
  }, a.value = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Ht(+l), a) : n;
  }, a.order = function(l) {
    return arguments.length ? (t = l == null ? rl : typeof l == "function" ? l : Ht(rf.call(l)), a) : t;
  }, a.offset = function(l) {
    return arguments.length ? (r = l ?? nl, a) : r;
  }, a;
}
function C0(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, l = e[0].length, f; a < l; ++a) {
      for (f = r = 0; r < n; ++r)
        f += e[r][a][1] || 0;
      if (f)
        for (r = 0; r < n; ++r)
          e[r][a][1] /= f;
    }
    nl(e, t);
  }
}
function A0(e, t) {
  if ((c = e.length) > 0)
    for (var r, n = 0, a, l, f, s, c, d = e[t[0]].length; n < d; ++n)
      for (f = s = 0, r = 0; r < c; ++r)
        (l = (a = e[t[r]][n])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += l) : l < 0 ? (a[1] = s, a[0] = s += l) : (a[0] = 0, a[1] = l);
}
function P0(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, l = n.length; r < l; ++r) {
      for (var f = 0, s = 0; f < a; ++f)
        s += e[f][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    nl(e, t);
  }
}
function R0(e, t) {
  if (!(!((f = e.length) > 0) || !((l = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, l, f; n < l; ++n) {
      for (var s = 0, c = 0, d = 0; s < f; ++s) {
        for (var g = e[t[s]], y = g[n][1] || 0, v = g[n - 1][1] || 0, k = (y - v) / 2, E = 0; E < s; ++E) {
          var M = e[t[E]], T = M[n][1] || 0, m = M[n - 1][1] || 0;
          k += T - m;
        }
        c += y, d += k * y;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= d / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, nl(e, t);
  }
}
function L0(e) {
  var t = e.map(D0);
  return rl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function D0(e) {
  for (var t = -1, r = 0, n = e.length, a, l = -1 / 0; ++t < n; )
    (a = +e[t][1]) > l && (l = a, r = t);
  return r;
}
function wg(e) {
  var t = e.map(Tg);
  return rl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Tg(e) {
  for (var t = 0, r = -1, n = e.length, a; ++r < n; )
    (a = +e[r][1]) && (t += a);
  return t;
}
function O0(e) {
  return wg(e).reverse();
}
function M0(e) {
  var t = e.length, r, n, a = e.map(Tg), l = L0(e), f = 0, s = 0, c = [], d = [];
  for (r = 0; r < t; ++r)
    n = l[r], f < s ? (f += a[n], c.push(n)) : (s += a[n], d.push(n));
  return d.reverse().concat(c);
}
function _0(e) {
  return rl(e).reverse();
}
function xn(e, t) {
  e(t);
}
var Rp = {
  ascending: wg,
  descending: O0,
  insideout: M0,
  none: rl,
  reverse: _0
};
function th(e) {
  return e && Rp[e] || Rp.none;
}
var Lp = {
  expand: C0,
  diverging: A0,
  none: nl,
  silhouette: P0,
  wiggle: R0
};
function nh(e) {
  return e && Lp[e] || Lp.none;
}
function N0(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, n = t.outerRadius, a = t.cornerRadius, l = t.startAngle, f = t.endAngle, s = t.padAngle, c = t.padRadius, d = e0();
  return r != null && xn(d.innerRadius, r), n != null && xn(d.outerRadius, n), a != null && xn(d.cornerRadius, a), l != null && xn(d.startAngle, l), f != null && xn(d.endAngle, f), s != null && xn(d.padAngle, s), c != null && xn(d.padRadius, c), d;
}
function rh(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.x0, a = t.x1, l = t.y, f = t.y0, s = t.y1, c = t.defined, d = t.curve, g = t0();
  return r && xn(g.x, r), n && xn(g.x0, n), a && xn(g.x1, a), l && xn(g.y, l), f && xn(g.y0, f), s && xn(g.y1, s), c && g.defined(c), d && g.curve(d), g;
}
function Cg(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.y, a = t.defined, l = t.curve, f = hg();
  return r && xn(f.x, r), n && xn(f.y, n), a && f.defined(a), l && f.curve(l), f;
}
function F0(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, n = t.endAngle, a = t.padAngle, l = t.value, f = t.sort, s = t.sortValues, c = a0();
  return (f === null || f != null) && c.sort(f), (s === null || s != null) && c.sortValues(s), l != null && c.value(l), a != null && xn(c.padAngle, a), r != null && xn(c.startAngle, r), n != null && xn(c.endAngle, n), c;
}
function $0(e) {
  var t = e.keys, r = e.value, n = e.order, a = e.offset, l = eh();
  return t && l.keys(t), r && xn(l.value, r), n && l.order(th(n)), a && l.offset(nh(a)), l;
}
var z0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, of.apply(this, arguments);
}
function B0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function I0(e) {
  var t = e.className, r = e.top, n = e.left, a = e.data, l = a === void 0 ? [] : a, f = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, d = e.outerRadius, g = e.cornerRadius, y = e.startAngle, v = e.endAngle, k = e.padAngle, E = e.padRadius, M = e.pieSort, T = e.pieSortValues, m = e.pieValue, R = e.children, O = e.fill, N = O === void 0 ? "" : O, _ = B0(e, z0), D = N0({
    innerRadius: c,
    outerRadius: d,
    cornerRadius: g,
    padRadius: E
  }), B = F0({
    startAngle: y,
    endAngle: v,
    padAngle: k,
    value: m,
    sort: M,
    sortValues: T
  }), H = B(l);
  return R ? /* @__PURE__ */ i.createElement(i.Fragment, null, R({
    arcs: H,
    path: D,
    pie: B
  })) : /* @__PURE__ */ i.createElement(nt, {
    className: "visx-pie-arcs-group",
    top: r,
    left: n
  }, H.map(function(U, X) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + X
    }, /* @__PURE__ */ i.createElement("path", of({
      className: Cn("visx-pie-arc", t),
      d: D(U) || "",
      fill: N == null || typeof N == "string" ? N : N(U)
    }, _)), f == null ? void 0 : f(D.centroid(U), U));
  }));
}
var H0 = ["from", "to", "fill", "className", "innerRef"];
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lf.apply(this, arguments);
}
function W0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Jt(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, n = e.to, a = n === void 0 ? {
    x: 1,
    y: 1
  } : n, l = e.fill, f = l === void 0 ? "transparent" : l, s = e.className, c = e.innerRef, d = W0(e, H0), g = r.x === a.x || r.y === a.y;
  return /* @__PURE__ */ i.createElement("line", lf({
    ref: c,
    className: Cn("visx-line", s),
    x1: r.x,
    y1: r.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: g ? "crispEdges" : "auto"
  }, d));
}
var V0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function j0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function pa(e) {
  var t = e.children, r = e.data, n = r === void 0 ? [] : r, a = e.x, l = e.y, f = e.fill, s = f === void 0 ? "transparent" : f, c = e.className, d = e.curve, g = e.innerRef, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, k = j0(e, V0), E = Cg({
    x: a,
    y: l,
    defined: v,
    curve: d
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: E
  })) : /* @__PURE__ */ i.createElement("path", sf({
    ref: g,
    className: Cn("visx-linepath", c),
    d: E(n) || "",
    fill: s,
    strokeLinecap: "round"
  }, k));
}
var U0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function K0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Y0(e) {
  var t = e.children, r = e.x, n = e.x0, a = e.x1, l = e.y, f = e.y0, s = e.y1, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, k = e.curve, E = e.innerRef, M = K0(e, U0), T = rh({
    x: r,
    x0: n,
    x1: a,
    y: l,
    y0: f,
    y1: s,
    defined: y,
    curve: k
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ i.createElement("path", uf({
    ref: E,
    className: Cn("visx-area", v),
    d: T(d) || ""
  }, M));
}
var X0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function q0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function G0(e) {
  var t = e.x, r = e.x0, n = e.x1, a = e.y, l = e.y1, f = e.y0, s = e.yScale, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, k = e.curve, E = e.innerRef, M = e.children, T = q0(e, X0), m = rh({
    x: t,
    x0: r,
    x1: n,
    defined: y,
    curve: k
  });
  return f == null ? m.y0(s.range()[0]) : xn(m.y0, f), a && !l && xn(m.y1, a), l && !a && xn(m.y1, l), M ? /* @__PURE__ */ i.createElement(i.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", cf({
    ref: E,
    className: Cn("visx-area-closed", v),
    d: m(d) || ""
  }, T));
}
var Z0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, df.apply(this, arguments);
}
function Q0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function J0(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, l = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, k = e.value, E = e.order, M = e.offset, T = e.color, m = e.children, R = Q0(e, Z0), O = $0({
    keys: a,
    value: k,
    order: E,
    offset: M
  }), N = rh({
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    curve: f,
    defined: s
  }), _ = O(l);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: _,
    path: N,
    stack: O
  })) : /* @__PURE__ */ i.createElement(nt, {
    top: r,
    left: n
  }, _.map(function(D, B) {
    return /* @__PURE__ */ i.createElement("path", df({
      className: Cn("visx-stack", t),
      key: "stack-" + B + "-" + (D.key || ""),
      d: N(D) || "",
      fill: T == null ? void 0 : T(D.key, B)
    }, R));
  }));
}
var eS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nc.apply(this, arguments);
}
function tS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function nS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, l = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, k = e.value, E = e.order, M = e.offset, T = e.color, m = e.children, R = tS(e, eS);
  return /* @__PURE__ */ i.createElement(J0, nc({
    className: t,
    top: r,
    left: n,
    keys: a,
    data: l,
    curve: f,
    defined: s,
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    value: k,
    order: E,
    offset: M,
    color: T
  }, R), m || function(O) {
    var N = O.stacks, _ = O.path;
    return N.map(function(D, B) {
      return /* @__PURE__ */ i.createElement("path", nc({
        className: Cn("visx-area-stack", t),
        key: "area-stack-" + B + "-" + (D.key || ""),
        d: _(D) || "",
        fill: T == null ? void 0 : T(D.key, B)
      }, R));
    });
  });
}
function ah(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var rS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ff.apply(this, arguments);
}
function aS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ag(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, l = e.x0, f = e.x0Scale, s = e.x1Scale, c = e.yScale, d = e.color, g = e.keys, y = e.height, v = e.children, k = aS(e, rS), E = ah(s), M = t.map(function(T, m) {
    return {
      index: m,
      x0: f(l(T)),
      bars: g.map(function(R, O) {
        var N = T[R];
        return {
          index: O,
          key: R,
          value: N,
          width: E,
          x: s(R) || 0,
          y: c(N) || 0,
          color: d(R, O),
          height: y - (c(N) || 0)
        };
      })
    };
  });
  return v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v(M)) : /* @__PURE__ */ i.createElement(nt, {
    className: Cn("visx-bar-group", r),
    top: n,
    left: a
  }, M.map(function(T) {
    return /* @__PURE__ */ i.createElement(nt, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(gr, ff({
        key: "bar-group-bar-" + T.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, k));
    }));
  }));
}
function Pg(e) {
  return e == null ? void 0 : e[0];
}
function Rg(e) {
  return e == null ? void 0 : e[1];
}
var iS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function oS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function lS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, l = e.x, f = e.y0, s = f === void 0 ? Pg : f, c = e.y1, d = c === void 0 ? Rg : c, g = e.xScale, y = e.yScale, v = e.color, k = e.keys, E = e.value, M = e.order, T = e.offset, m = e.children, R = oS(e, iS), O = eh();
  k && O.keys(k), E && xn(O.value, E), M && O.order(th(M)), T && O.offset(nh(T));
  var N = O(t), _ = ah(g), D = N.map(function(B, H) {
    var U = B.key;
    return {
      index: H,
      key: U,
      bars: B.map(function(X, Q) {
        var K = (y(s(X)) || 0) - (y(d(X)) || 0), oe = y(d(X)), fe = "bandwidth" in g ? g(l(X.data)) : Math.max((g(l(X.data)) || 0) - _ / 2);
        return {
          bar: X,
          key: U,
          index: Q,
          height: K,
          width: _,
          x: fe || 0,
          y: oe || 0,
          color: v(B.key, Q)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(D)) : /* @__PURE__ */ i.createElement(nt, {
    className: Cn("visx-bar-stack", r),
    top: n,
    left: a
  }, D.map(function(B) {
    return B.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(gr, hf({
        key: "bar-stack-" + B.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, R));
    });
  }));
}
var sS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pf.apply(this, arguments);
}
function uS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function cS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, l = e.y, f = e.x0, s = f === void 0 ? Pg : f, c = e.x1, d = c === void 0 ? Rg : c, g = e.xScale, y = e.yScale, v = e.color, k = e.keys, E = e.value, M = e.order, T = e.offset, m = e.children, R = uS(e, sS), O = eh();
  k && O.keys(k), E && xn(O.value, E), M && O.order(th(M)), T && O.offset(nh(T));
  var N = O(t), _ = ah(y), D = N.map(function(B, H) {
    var U = B.key;
    return {
      index: H,
      key: U,
      bars: B.map(function(X, Q) {
        var K = (g(d(X)) || 0) - (g(s(X)) || 0), oe = g(s(X)), fe = "bandwidth" in y ? y(l(X.data)) : Math.max((y(l(X.data)) || 0) - K / 2);
        return {
          bar: X,
          key: U,
          index: Q,
          height: _,
          width: K,
          x: oe || 0,
          y: fe || 0,
          color: v(B.key, Q)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(D)) : /* @__PURE__ */ i.createElement(nt, {
    className: Cn("visx-bar-stack-horizontal", r),
    top: n,
    left: a
  }, D.map(function(B) {
    return B.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(gr, pf({
        key: "bar-stack-" + B.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, R));
    });
  }));
}
var Dp = "http://www.w3.org/2000/svg";
function dS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(Dp, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(Dp, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var fS = "__visx_splitpath_svg_path_measurement_id", Op = function() {
  return !0;
};
function hS(e) {
  var t = e.path, r = e.pointsInSegments, n = e.segmentation, a = n === void 0 ? "x" : n, l = e.sampleRate, f = l === void 0 ? 1 : l;
  try {
    var s = dS(fS);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), d = r.length, g = r.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var y = r.map(function(oe) {
        var fe;
        return (fe = oe.find(function(W) {
          return typeof W[a] == "number";
        })) == null ? void 0 : fe[a];
      }), v = s.getPointAtLength(0), k = s.getPointAtLength(c), E = k[a] > v[a], M = E ? y.map(function(oe) {
        return typeof oe > "u" ? Op : function(fe) {
          return fe >= oe;
        };
      }) : y.map(function(oe) {
        return typeof oe > "u" ? Op : function(fe) {
          return fe <= oe;
        };
      }), T = 0, m = 0; m <= c; m += f) {
        for (var R = s.getPointAtLength(m), O = R[a]; T < d - 1 && M[T + 1](O); )
          T += 1;
        g[T].push(R);
      }
    else {
      var N = r.map(function(oe) {
        return oe.length;
      }), _ = N.reduce(function(oe, fe) {
        return oe + fe;
      }, 0), D = c / Math.max(1, _ - 1), B = N.slice(0, d - 1);
      B.unshift(0);
      for (var H = 2; H < d; H += 1)
        B[H] += B[H - 1];
      for (var U = 0; U < d; U += 1)
        B[U] *= D;
      for (var X = 0, Q = 0; Q <= c; Q += f) {
        for (var K = s.getPointAtLength(Q); X < d - 1 && Q >= B[X + 1]; )
          X += 1;
        g[X].push(K);
      }
    }
    return g;
  } catch {
    return [];
  }
}
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mf.apply(this, arguments);
}
var pS = function(t) {
  return t.x || 0;
}, mS = function(t) {
  return t.y || 0;
};
function Lg(e) {
  var t = e.children, r = e.className, n = e.curve, a = e.defined, l = e.segmentation, f = e.sampleRate, s = e.segments, c = e.x, d = e.y, g = e.styles, y = se.useMemo(function() {
    var E = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, M = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d;
    return s.map(function(T) {
      return T.map(function(m, R) {
        return {
          x: E(m, R, T),
          y: M(m, R, T)
        };
      });
    });
  }, [c, d, s]), v = se.useMemo(function() {
    var E = Cg({
      x: c,
      y: d,
      defined: a,
      curve: n
    });
    return E(s.flat()) || "";
  }, [c, d, a, n, s]), k = se.useMemo(function() {
    return hS({
      path: v,
      segmentation: l,
      pointsInSegments: y,
      sampleRate: f
    });
  }, [v, l, y, f]);
  return /* @__PURE__ */ i.createElement("g", null, k.map(function(E, M) {
    return t ? /* @__PURE__ */ i.createElement(i.Fragment, {
      key: M
    }, t({
      index: M,
      segment: E,
      styles: g[M] || g[M % g.length]
    })) : /* @__PURE__ */ i.createElement(pa, mf({
      key: M,
      className: r,
      data: E,
      x: pS,
      y: mS
    }, g[M] || g[M % g.length]));
  }));
}
Lg.propTypes = {
  segments: he.arrayOf(he.array).isRequired,
  styles: he.array.isRequired,
  children: he.func,
  className: he.string
};
var gS = ["tooltipOpen"];
function yS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rc.apply(this, arguments);
}
function Dg(e) {
  var t = se.useState(rc({
    tooltipOpen: !1
  }, e)), r = t[0], n = t[1], a = se.useCallback(function(f) {
    return n(typeof f == "function" ? function(s) {
      s.tooltipOpen;
      var c = yS(s, gS);
      return rc({}, f(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [n]), l = se.useCallback(function() {
    return n({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [n]);
  return {
    tooltipOpen: r.tooltipOpen,
    tooltipLeft: r.tooltipLeft,
    tooltipTop: r.tooltipTop,
    tooltipData: r.tooltipData,
    updateTooltip: n,
    showTooltip: a,
    hideTooltip: l
  };
}
var vS = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ac.apply(this, arguments);
}
function xS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Og = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, ih = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var r = e.className, n = e.top, a = e.left, l = e.offsetLeft, f = l === void 0 ? 10 : l, s = e.offsetTop, c = s === void 0 ? 10 : s, d = e.style, g = d === void 0 ? Og : d, y = e.children, v = e.unstyled, k = v === void 0 ? !1 : v, E = e.applyPositionStyle, M = E === void 0 ? !1 : E, T = xS(e, vS);
  return /* @__PURE__ */ i.createElement("div", ac({
    ref: t,
    className: Cn("visx-tooltip", r),
    style: ac({
      top: n == null || c == null ? n : n + c,
      left: a == null || f == null ? a : a + f
    }, M && {
      position: "absolute"
    }, !k && g)
  }, T), y);
});
ih.propTypes = {
  children: he.node,
  className: he.string,
  left: he.number,
  offsetLeft: he.number,
  offsetTop: he.number,
  top: he.number,
  applyPositionStyle: he.bool,
  unstyled: he.bool
};
ih.displayName = "Tooltip";
const bS = ih;
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function SS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ES(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
var Mp = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function kS(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    ES(n, r);
    function n(l) {
      var f;
      return f = r.call(this, l) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ i.createRef(), f.getRects = f.getRects.bind(SS(f)), f;
    }
    var a = n.prototype;
    return a.componentDidMount = function() {
      var f, s = this;
      this.node = (f = this.nodeRef) != null && f.current ? this.nodeRef.current : Ny.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var f = this.node, s = f.parentNode, c = f.getBoundingClientRect ? f.getBoundingClientRect() : Mp, d = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : Mp;
      return {
        rect: c,
        parentRect: d
      };
    }, a.render = function() {
      return /* @__PURE__ */ i.createElement(e, gf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, n;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Mg = /* @__PURE__ */ se.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), wS = Mg.Provider;
Mg.Consumer;
var TS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function CS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function _g(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, n = r === void 0 ? 0 : r, a = e.offsetLeft, l = a === void 0 ? 10 : a, f = e.offsetTop, s = f === void 0 ? 10 : f, c = e.parentRect, d = e.rect, g = e.style, y = g === void 0 ? Og : g, v = e.top, k = v === void 0 ? 0 : v, E = e.unstyled, M = E === void 0 ? !1 : E, T = e.nodeRef, m = CS(e, TS), R, O = !1, N = !1;
  if (d && c) {
    var _ = n, D = k;
    if (c.width) {
      var B = _ + l + d.width - c.width, H = d.width - _ - l;
      O = B > 0 && B > H;
    } else {
      var U = _ + l + d.width - window.innerWidth, X = d.width - _ - l;
      O = U > 0 && U > X;
    }
    if (c.height) {
      var Q = D + s + d.height - c.height, K = d.height - D - s;
      N = Q > 0 && Q > K;
    } else
      N = D + s + d.height > window.innerHeight;
    _ = O ? _ - d.width - l : _ + l, D = N ? D - d.height - s : D + s, _ = Math.round(_), D = Math.round(D), R = "translate(" + _ + "px, " + D + "px)";
  }
  return /* @__PURE__ */ i.createElement(bS, ic({
    ref: T,
    style: ic({
      left: 0,
      top: 0,
      transform: R
    }, !M && y)
  }, m), /* @__PURE__ */ i.createElement(wS, {
    value: {
      isFlippedVertically: !N,
      isFlippedHorizontally: !O
    }
  }, t));
}
_g.propTypes = {
  nodeRef: he.oneOfType([he.string, he.func, he.object])
};
const Ng = kS(_g);
var al = /* @__PURE__ */ function() {
  function e(r) {
    var n = r.x, a = n === void 0 ? 0 : n, l = r.y, f = l === void 0 ? 0 : l;
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
function AS(e, t) {
  return new al({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function PS(e, t) {
  return new al({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: al,
  subtractPoints: PS,
  sumPoints: AS
}, Symbol.toStringTag, { value: "Module" }));
function LS(e) {
  return !!e && e instanceof Element;
}
function DS(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function OS(e) {
  return !!e && "createSVGPoint" in e;
}
function MS(e) {
  return !!e && "getScreenCTM" in e;
}
function _S(e) {
  return !!e && "changedTouches" in e;
}
function NS(e) {
  return !!e && "clientX" in e;
}
function FS(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hs.apply(this, arguments);
}
var Id = {
  x: 0,
  y: 0
};
function $S(e) {
  if (!e)
    return hs({}, Id);
  if (_S(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : hs({}, Id);
  if (NS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, r = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return r ? {
    x: r.x + r.width / 2,
    y: r.y + r.height / 2
  } : hs({}, Id);
}
function vf(e, t) {
  if (!e || !t)
    return null;
  var r = $S(t), n = DS(e) ? e.ownerSVGElement : e, a = MS(n) ? n.getScreenCTM() : null;
  if (OS(n) && a) {
    var l = n.createSVGPoint();
    return l.x = r.x, l.y = r.y, l = l.matrixTransform(a.inverse()), new al({
      x: l.x,
      y: l.y
    });
  }
  var f = e.getBoundingClientRect();
  return new al({
    x: r.x - f.left - e.clientLeft,
    y: r.y - f.top - e.clientTop
  });
}
function xf(e, t) {
  if (LS(e) && t)
    return vf(e, t);
  if (FS(e)) {
    var r = e, n = r.target;
    if (n)
      return vf(n, r);
  }
  return null;
}
const zS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: xf,
  touchPoint: vf
}, Symbol.toStringTag, { value: "Module" })), BS = new vm(), Fg = (e) => {
  const { tableData: t, config: r, formatNumber: n, capitalize: a, formatDate: l, formatTooltipsDate: f, parseDate: s, setSharedFilter: c } = se.useContext(wt), { xScale: d, yScale: g, showTooltip: y, hideTooltip: v } = e, { xAxis: k, visualizationType: E, orientation: M, yAxis: T, runtime: m } = r, R = BS.applySuppression(t, r.suppressedData), O = (W, ie) => {
    const { x: re, y: ue } = ie, Y = {
      data: W || {},
      dataXPosition: re + 10,
      dataYPosition: ue
    };
    return {
      tooltipLeft: Y.dataXPosition,
      tooltipTop: Y.dataYPosition,
      tooltipData: Y
    };
  }, N = (W, ie) => {
    W.stopPropagation();
    const re = xf(W), { x: ue, y: ee } = re, { data: Y, arc: te } = ie ?? {}, I = B(ue - Number(r.yAxis.size || 0)), ge = E !== "Pie" ? r.series.filter((le) => le.tooltip === !0).map((le) => le.dataKey) : r.series.map((le) => le.dataKey);
    ge.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((le) => {
      le.confidenceIntervals.map((Be) => {
        Be.showInTooltip && (ge.push(Be.high), ge.push(Be.low));
      });
    });
    function ve(le) {
      let Be = [];
      for (let Me in le)
        le.hasOwnProperty(Me) && Be.push(le[Me].name);
      return Be;
    }
    ge.push(...ve(r.columns)), ge.push(...ve(r.columns));
    const ke = X(I, ge), Ne = R.filter((le) => le[k.dataKey] === H(ee)), je = M === "vertical" ? ke : Ne, Qe = (le) => {
      const Be = r.series.filter((He) => He.dataKey === le)[0];
      return Be != null && Be.axis ? String(Be.axis).toLowerCase() : "left";
    }, ye = (() => {
      var qe, et, it;
      const le = r.columns, Be = [], Me = [];
      for (const [st, at] of Object.entries(le)) {
        const Ze = {
          addColPrefix: r.columns[st].prefix,
          addColSuffix: r.columns[st].suffix,
          addColRoundTo: r.columns[st].roundToPlace ? r.columns[st].roundToPlace : "",
          addColCommas: r.columns[st].commas
        };
        let Ie = null;
        r.visualizationType === "Pie" ? Ie = te == null ? void 0 : te.data[at.name] : Ie = (qe = je[0]) == null ? void 0 : qe[at.name];
        const Fe = xm(Ie, "left", !0, r, Ze);
        at.tooltips && Be.push([at.label, Fe]);
      }
      const He = [];
      return Be.forEach((st) => {
        He.push([st[0], st[1]]);
      }), E === "Pie" && Me.push(
        // ignore
        [r.xAxis.dataKey, Y],
        [r.runtime.yAxis.dataKey, n(te == null ? void 0 : te.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((te == null ? void 0 : te.endAngle) - (te == null ? void 0 : te.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), E === "Forest Plot" && Me.push([r.xAxis.dataKey, H(ee)]), E !== "Pie" && E !== "Forest Plot" && Me.push(
        ...(it = (et = Q()) == null ? void 0 : et.filter(Boolean)) == null ? void 0 : it.flatMap((st) => {
          var Ze, Ie, Fe;
          const at = st === r.xAxis.dataKey ? (Ze = je[0]) == null ? void 0 : Ze[st] : n((Ie = je[0]) == null ? void 0 : Ie[st], Qe(st));
          return (Fe = je == null ? void 0 : je[0]) != null && Fe[st] ? [[st, at, Qe(st)]] : [];
        })
      ), [...Me, ...He];
    })();
    if (!ye)
      return;
    const we = O(ye, re);
    y(we);
  }, _ = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      v();
    }, 3e3) : v();
  }, D = (W) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let ie = d.step();
      const ue = Math.floor(Number(W) / ie);
      return d.domain()[ue - 1];
    }
    if (Sn(r.xAxis) && r.visualizationType !== "Combo") {
      const ie = Uh((Y) => s(Y[r.xAxis.dataKey])).left, re = d.invert(d(W)), ue = ie(r.data, re, 1);
      return s(r.data[ue - 1][r.xAxis.dataKey]);
    }
  }, B = (W, ie = !1) => {
    if (E !== "Pie" && M !== "horizontal") {
      if (d.type === "point" || k.type === "continuous" || Sn(k)) {
        let re = null, ue = Number.MAX_VALUE, ee = W;
        return R.forEach((Y) => {
          const te = Sn(k) ? d(s(Y[k.dataKey])) : d(Y[k.dataKey]);
          let I = r.barHeight;
          const ge = Math.abs(Number(te - ee + (ie ? I * 2 : 0)));
          ge <= ue && (ue = ge, re = (Sn(k), Y[k.dataKey]));
        }), re;
      }
      if (r.xAxis.type === "categorical" || E === "Combo" && M !== "horizontal" && E !== "Forest Plot") {
        let ue = (d.range()[1] - d.range()[0]) / (d.domain().length + 1);
        const Y = Math.floor((Number(W) - ue / 2) / ue);
        return d.domain()[Y];
      }
      if (Sn(k) && E !== "Combo" && M !== "horizontal") {
        const re = Uh((te) => s(te[r.xAxis.dataKey])).left, ue = d.invert(W), ee = re(r.data, ue, 1);
        return s(r.data[ee - 1][r.xAxis.dataKey]);
      }
    }
  }, H = (W, ie) => {
    if (E === "Pie")
      return;
    let re = Number.MAX_VALUE, ue = null;
    return R.forEach((ee, Y) => {
      const te = g(E !== "Forest Plot" ? ee[r.xAxis.dataKey] : Y), I = Math.abs(te - W);
      I < re && (re = I, ue = ie ? ee[ie] : ee[r.xAxis.dataKey]);
    }), ue;
  }, U = (W) => {
    var ie, re;
    try {
      const ue = xf(W), { x: ee } = ue;
      if (!ee)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let Y = B(ee, !0), te = (ie = r.data) == null ? void 0 : ie.filter((I) => I[r.xAxis.dataKey] === Y);
      if (!Y)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (Sn(k) && Y && (Y = new Date(Y), Y = l(Y), te = (re = r.data) == null ? void 0 : re.filter((I) => l(new Date(I[r.xAxis.dataKey])) === Y)), !te[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${Y}`);
      c && (r != null && r.uid) && (te != null && te[0]) && c(r.uid, te[0]);
    } catch (ue) {
      console.error(ue.message);
    }
  }, X = (W, ie) => {
    try {
      let re;
      return k.type === "categorical" ? re = R.filter((ee) => ee[k.dataKey] === W) : re = R.filter((ee) => ee[k.dataKey] === W), !re || re.length === 0 ? [] : re.map((ee) => Object.fromEntries(Object.entries(ee).filter(([Y, te]) => ie.includes(Y))));
    } catch (re) {
      console.error("COVE", re);
    }
  }, Q = () => {
    var W;
    try {
      let ie, re = [], ue = [];
      if ((W = r.series) == null || W.forEach((ee) => {
        ee.type === "Forecasting" && (re.push(ee.stageColumn), ee == null || ee.confidenceIntervals.forEach((Y) => {
          Y.showInTooltip === !0 && (ue.push(Y.low), ue.push(Y.high));
        }));
      }), !r.dashboard)
        switch (E) {
          case "Combo":
            ie = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...ue];
            break;
          case "Forecasting":
            ie = [m.xAxis.dataKey, ...re, ...ue];
            break;
          case "Line":
            ie = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            ie = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            ie = M === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            ie = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && (ie = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...re, ...ue]), ie;
    } catch (ie) {
      console.error("COVE", ie);
    }
  }, K = (W) => {
    const { dataXPosition: ie, dataYPosition: re } = W;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${ie}px, ${Number(re)}px)`
    };
  }, oe = (W) => {
    var re, ue;
    let ie = r.series.filter((ee) => ee.dataKey === W);
    return (re = ie[0]) != null && re.name ? (ue = ie[0]) == null ? void 0 : ue.name : W;
  };
  return {
    getIncludedTooltipSeries: Q,
    getXValueFromCoordinate: B,
    getXValueFromCoordinateDate: D,
    getYScaleValues: X,
    handleTooltipClick: U,
    handleTooltipMouseOff: _,
    handleTooltipMouseOver: N,
    TooltipListItem: ({ item: W }) => {
      const [ie, re] = W, [ue, ee, Y] = re;
      if (E === "Forest Plot")
        return ue === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${Sn(T) ? l(s(ue, !1)) : ee}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${oe(ue)}: ${n(ee, "left")}`);
      const te = r.tooltips.dateDisplayFormat ? f(s(ee, !1)) : l(s(ee, !1));
      return E === "Bar" && M === "horizontal" && ue === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? te : ee}`) : ue === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${Sn(k) ? te : ee}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${oe(ue)}: ${ee}`);
    },
    tooltipStyles: K
  };
};
function oh(e, { threshold: t = 0, root: r = null, rootMargin: n = "0%", freezeOnceVisible: a = !1 }) {
  const [l, f] = se.useState(), s = (l == null ? void 0 : l.isIntersecting) && a, c = ([d]) => {
    f(d);
  };
  return se.useEffect(() => {
    setTimeout(() => {
      const d = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !d)
        return;
      const y = { threshold: t, root: r, rootMargin: n }, v = new IntersectionObserver(c, y);
      return v.observe(d), () => v.disconnect();
    }, 500);
  }, [e, t, r, n, s]), l;
}
const $g = (e, t = !1) => {
  t && console.log("handleChartAriaLabels Testing On:", e);
  try {
    if (!e.visualizationType)
      throw Error("handleChartAriaLabels: no visualization type found in state");
    let r = "";
    return e.visualizationType && (r += `${e.visualizationType} chart`), e.title && e.visualizationType && (r += ` with the title: ${e.title}`), r;
  } catch (r) {
    console.error("COVE: ", r.message);
  }
};
var IS = ["flexDirection", "alignItems", "margin", "display", "children"];
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function HS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function oc(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, n = e.alignItems, a = n === void 0 ? "center" : n, l = e.margin, f = l === void 0 ? "0" : l, s = e.display, c = s === void 0 ? "flex" : s, d = e.children, g = HS(e, IS);
  return /* @__PURE__ */ i.createElement("div", bf({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: a,
      flexDirection: r,
      margin: f
    }
  }, g), d);
}
oc.propTypes = {
  alignItems: he.string,
  margin: he.oneOfType([he.string, he.number]),
  children: he.node,
  display: he.string
};
var WS = ["flex", "label", "margin", "align", "children"];
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sf.apply(this, arguments);
}
function VS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function lc(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, n = e.label, a = e.margin, l = a === void 0 ? "5px 0" : a, f = e.align, s = f === void 0 ? "left" : f, c = e.children, d = VS(e, WS);
  return /* @__PURE__ */ i.createElement("div", Sf({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: r,
      margin: l
    }
  }, d), c || n);
}
lc.propTypes = {
  align: he.string,
  label: he.node,
  flex: he.oneOfType([he.string, he.number]),
  margin: he.oneOfType([he.string, he.number]),
  children: he.node
};
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function lh(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Ef({
      width: r,
      height: n,
      background: t
    }, a)
  });
}
lh.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function zg(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, l = typeof r == "string" || typeof r > "u" ? 0 : r, f = typeof n == "string" || typeof n > "u" ? 0 : n, s = Math.max(l, f), c = s / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ i.createElement(nt, {
    top: c,
    left: c
  }, /* @__PURE__ */ i.createElement("circle", {
    r: c,
    fill: t,
    style: a
  })));
}
zg.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Bg(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: r,
    height: n
  }, /* @__PURE__ */ i.createElement(nt, {
    top: l / 2 - f / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: r,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: f,
    style: a
  })));
}
Bg.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ps.apply(this, arguments);
}
var Hd = function() {
};
function jS(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, n = e.fill, a = n === void 0 ? Hd : n, l = e.size, f = l === void 0 ? Hd : l, s = e.width, c = e.height, d = e.label, g = e.item, y = e.itemIndex, v = e.shapeStyle, k = v === void 0 ? Hd : v, E = {
    width: s,
    height: c,
    item: g,
    itemIndex: y,
    label: d,
    fill: a(ps({}, d)),
    size: f(ps({}, d)),
    style: k(ps({}, d))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ i.createElement(zg, E) : r === "line" ? /* @__PURE__ */ i.createElement(Bg, E) : /* @__PURE__ */ i.createElement(lh, E) : /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, E) : r ? /* @__PURE__ */ i.createElement(r, E) : null;
}
function sc() {
  return sc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sc.apply(this, arguments);
}
function Ig(e) {
  var t = e.shape, r = t === void 0 ? lh : t, n = e.width, a = e.height, l = e.margin, f = e.label, s = e.item, c = e.itemIndex, d = e.fill, g = e.size, y = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(sc({}, f)) : n,
      height: g ? g(sc({}, f)) : a,
      margin: l
    }
  }, jS({
    shape: r,
    item: s,
    itemIndex: c,
    label: f,
    width: n,
    height: a,
    fill: d,
    shapeStyle: y
  }));
}
Ig.propTypes = {
  itemIndex: he.number.isRequired,
  margin: he.oneOfType([he.string, he.number]),
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Hg(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function _p(e) {
  return String(Hg(e));
}
function US(e) {
  var t = e.scale, r = e.labelFormat;
  return function(n, a) {
    return {
      datum: n,
      index: a,
      text: "" + r(n, a),
      value: t(n)
    };
  };
}
var KS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ms.apply(this, arguments);
}
function YS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var XS = {
  display: "flex"
};
function Wg(e) {
  var t = e.className, r = e.style, n = r === void 0 ? XS : r, a = e.scale, l = e.shape, f = e.domain, s = e.fill, c = s === void 0 ? _p : s, d = e.size, g = d === void 0 ? _p : d, y = e.labelFormat, v = y === void 0 ? Hg : y, k = e.labelTransform, E = k === void 0 ? US : k, M = e.shapeWidth, T = M === void 0 ? 15 : M, m = e.shapeHeight, R = m === void 0 ? 15 : m, O = e.shapeMargin, N = O === void 0 ? "2px 4px 2px 0" : O, _ = e.shapeStyle, D = e.labelAlign, B = D === void 0 ? "left" : D, H = e.labelFlex, U = H === void 0 ? "1" : H, X = e.labelMargin, Q = X === void 0 ? "0 4px" : X, K = e.itemMargin, oe = K === void 0 ? "0" : K, fe = e.direction, W = fe === void 0 ? "column" : fe, ie = e.itemDirection, re = ie === void 0 ? "row" : ie, ue = e.legendLabelProps, ee = e.children, Y = YS(e, KS), te = f || ("domain" in a ? a.domain() : []), I = E({
    scale: a,
    labelFormat: v
  }), ge = te.map(I);
  return ee ? /* @__PURE__ */ i.createElement(i.Fragment, null, ee(ge)) : /* @__PURE__ */ i.createElement("div", {
    className: Cn("visx-legend", t),
    style: ms({}, n, {
      flexDirection: W
    })
  }, ge.map(function(ve, ke) {
    return /* @__PURE__ */ i.createElement(oc, ms({
      key: "legend-" + ve.text + "-" + ke,
      margin: oe,
      flexDirection: re
    }, Y), /* @__PURE__ */ i.createElement(Ig, {
      shape: l,
      height: R,
      width: T,
      margin: N,
      item: te[ke],
      itemIndex: ke,
      label: ve,
      fill: c,
      size: g,
      shapeStyle: _
    }), /* @__PURE__ */ i.createElement(lc, ms({
      label: ve.text,
      flex: U,
      margin: Q,
      align: B
    }, ue)));
  }));
}
Wg.propTypes = {
  children: he.func,
  className: he.string,
  domain: he.array,
  shapeWidth: he.oneOfType([he.string, he.number]),
  shapeHeight: he.oneOfType([he.string, he.number]),
  shapeMargin: he.oneOfType([he.string, he.number]),
  labelAlign: he.string,
  labelFlex: he.oneOfType([he.string, he.number]),
  labelMargin: he.oneOfType([he.string, he.number]),
  itemMargin: he.oneOfType([he.string, he.number]),
  fill: he.func,
  size: he.func,
  shapeStyle: he.func
};
function qS(e) {
  return /* @__PURE__ */ i.createElement(Wg, e);
}
function GS(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const Cc = (e, t) => {
  var M;
  const { formatDate: r, parseDate: n } = se.useContext(wt);
  let a = [], l = "", f = [], s = [];
  ((M = e.series) == null ? void 0 : M.length) > 0 && e.data ? (a = e.series[0], l = e.series[0].dataKey, f = e.highlightedBarValues, s = e.data.map((T) => T[e.xAxis.dataKey])) : (a = [], l = "", f = [], s = []);
  const c = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: R
    });
  }, d = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R[m].value = T.target.value, R[m].dataKey = l, t({
      ...e,
      highlightedBarValues: R
    });
  }, g = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: R
    });
  }, y = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R.splice(m, 1), t({
      ...e,
      highlightedBarValues: R
    });
  }, v = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].color = T.target.value, t({
      ...e
    });
  }, k = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: R
    });
  }, E = () => {
  };
  return E.checkFontColor = (T, m, R) => {
    if (e.xAxis.type === "date") {
      if (E.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return R;
  }, E.formatDates = (T) => T.map((m) => m ? r(n(m)) : !1), E.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((O) => {
      const { legendLabel: N } = O;
      return m[N] ? !1 : (m[N] = !0, !0);
    });
  }, {
    HighLightedBarUtils: E,
    highlightedSeries: a,
    highlightedSeriesKey: l,
    highlightedBarValues: f,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: d,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: y,
    handleUpdateHighlightedBarColor: v,
    handleHighlightedBarLegendLabel: k,
    handleUpdateHighlightedBorderWidth: c
  };
}, kf = (e) => {
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
}, Vg = ({ config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: a, currentViewport: l, formatLabels: f }) => {
  var m;
  const { innerClasses: s, containerClasses: c } = GS(e), { runtime: d, orientation: g, legend: y } = e;
  if (!y)
    return null;
  const v = Hf({
    domain: (m = e.suppressedData) == null ? void 0 : m.map((R) => R.label),
    range: ["none"],
    unknown: "block"
  }), k = y.position === "bottom" || ["sm", "xs", "xxs"].includes(l), E = {
    marginBottom: k ? "15px" : "0px",
    marginTop: k && g === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${k ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: M } = Cc(e);
  let T = M.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ i.createElement("aside", { style: E, id: "legend", className: c.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, y.label && /* @__PURE__ */ i.createElement("h3", null, Fi(y.label)), y.description && /* @__PURE__ */ i.createElement("p", null, Fi(y.description)), /* @__PURE__ */ i.createElement(qS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (R) => {
    var O, N;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: s.join(" ") }, f(R).map((_, D) => {
      var U, X, Q, K;
      let B = ["legend-item", `legend-text--${_.text.replace(" ", "").toLowerCase()}`], H = _.datum;
      if (e.exclusions.active && ((U = e.exclusions.keys) != null && U.includes(H)))
        return null;
      if (d.seriesLabels) {
        let oe = e.runtime.seriesLabelsAll.indexOf(H);
        H = e.runtime.seriesKeys[oe], ((X = d == null ? void 0 : d.forecastingSeriesKeys) == null ? void 0 : X.length) > 0 && (H = _.text);
      }
      return r.length > 0 && r.includes(H) === !1 && B.push("inactive"), /* @__PURE__ */ i.createElement(
        oc,
        {
          className: B.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${D}`,
          onKeyPress: (oe) => {
            oe.key === "Enter" && n(_);
          },
          onClick: () => {
            n(_);
          },
          role: "button"
        },
        e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: _.value, strokeWidth: 2, strokeDasharray: kf((Q = e.series[D]) != null && Q.type ? (K = e.series[D]) == null ? void 0 : K.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(zh, { margin: "0", fill: _.value, display: v(_.datum) }), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, _.icon)),
        /* @__PURE__ */ i.createElement(lc, { align: "left", margin: "0 0 0 4px" }, _.text)
      );
    }), T.map((_, D) => {
      let B = "legend-item", H = _.legendLabel;
      return H ? (r.length > 0 && r.includes(H) === !1 && (B += " inactive"), /* @__PURE__ */ i.createElement(
        oc,
        {
          className: B,
          tabIndex: 0,
          key: `legend-quantile-${D}`,
          onKeyPress: (U) => {
            U.key === "Enter" && n(_.legendLabel);
          },
          onClick: () => {
            n(_.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(zh, { fill: "transparent", borderColor: _.color ? _.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(lc, { align: "left", margin: "0 0 0 4px" }, _.legendLabel ? _.legendLabel : _.value)
      )) : !1;
    }), r.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (_) => a(_), tabIndex: 0 }, "Reset")), /* @__PURE__ */ i.createElement(i.Fragment, null, ((O = e == null ? void 0 : e.preliminaryData) == null ? void 0 : O.some((_) => _.label)) && e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && k ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map((_, D) => /* @__PURE__ */ i.createElement(i.Fragment, null, _.label && /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center" } }, /* @__PURE__ */ i.createElement("svg", { style: { width: "50px" }, key: D, height: "23px" }, _.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(Jt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: kf(_.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", { style: {} }, " ", _.label))))))));
  }));
};
function sh(e) {
  return ky({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const jg = (e, t, r, n) => (a) => {
  var v, k, E, M, T;
  const { visualizationType: l, visualizationSubType: f, series: s, runtime: c } = e, d = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (v = e.legend) == null ? void 0 : v.colorCode;
  if (l === "Deviation Bar") {
    const [m, R] = Wu[e.twoColor.palette], O = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, N = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: R
    };
    return d([O, N]);
  }
  if (l === "Bar" && f === "regular" && g && (s == null ? void 0 : s.length) === 1) {
    let m = cr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const R = /* @__PURE__ */ new Set();
    t.forEach((N) => R.add(N[g]));
    const O = Array.from(R).map((N, _) => ({
      datum: N,
      index: _,
      text: N,
      value: m[_]
    }));
    return d(O);
  }
  if (((k = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : k.length) > 0) {
    let m = [];
    return (M = (E = e.runtime) == null ? void 0 : E.forecastingSeriesKeys) == null || M.map((R, O) => {
      var N;
      return (N = R == null ? void 0 : R.stages) == null ? void 0 : N.map((_, D) => {
        var U, X, Q, K;
        let B = (U = Vu[_.color]) != null && U[2] ? (X = Vu[_.color]) == null ? void 0 : X[2] : (Q = cr[_.color]) != null && Q[2] ? (K = cr[_.color]) == null ? void 0 : K[2] : "#ccc";
        const H = {
          datum: _.key,
          index: D,
          text: _.key,
          value: B
        };
        m.push(H);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((R, O) => {
      let N = cr[e.palette][O] ? cr[e.palette][O] : "#ccc";
      const _ = {
        datum: R,
        index: O,
        text: R,
        value: N
      };
      m.push(_);
    }), d(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((O) => {
      m.add(O.name || O.dataKey);
    });
    const R = Array.from(m).map((O, N) => ({
      datum: O,
      index: N,
      text: O,
      value: n(O)
    }));
    return d(R);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let R = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: O, icon: N }, _) => {
      if (O && N) {
        const D = {
          datum: O,
          index: m + _,
          text: O,
          icon: /* @__PURE__ */ i.createElement(sh, { color: "#000", size: 15 })
        };
        R.push(D);
      }
    }), [...a, ...R];
  }
  return d(a);
}, Au = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), ZS = (e) => {
  const { transformedData: t, config: r, colorScale: n, currentViewport: a, dimensions: l, highlight: f, highlightReset: s, seriesHighlight: c } = se.useContext(wt), { tooltipData: d, showTooltip: g, hideTooltip: y, tooltipOpen: v, tooltipLeft: k, tooltipTop: E } = Dg(), { handleTooltipMouseOver: M, handleTooltipMouseOff: T, TooltipListItem: m } = Fg({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: y
  }), [R, O] = se.useState(void 0), [N, _] = se.useState(!1), D = Object.values(r.columns).filter((te) => te.showInViz), B = D.length > 0, H = B ? "pivotColumn" : void 0, U = se.useMemo(() => {
    if (B) {
      let te = [];
      const I = r.yAxis.dataKey, ge = D.map((Ne) => Ne.name), ve = [I, ...ge], ke = r.xAxis.dataKey;
      return t.forEach((Ne) => {
        ve.forEach((je) => {
          const Qe = Ne[je];
          Qe && te.push({
            [H]: Qe,
            [ke]: `${Ne[ke]} - ${je}`
          });
        });
      }), te;
    }
    return t;
  }, [t, B]), X = se.useMemo(() => {
    if (B) {
      const te = {};
      U.forEach((ve) => {
        te[ve[r.xAxis.dataKey]] || (te[ve[r.xAxis.dataKey]] = !0);
      });
      const I = Object.entries(te).length;
      let ge = r.customColors || cr[r.palette];
      return ge = ge.slice(0, I), Hf({
        domain: Object.keys(te),
        range: ge,
        unknown: null
      });
    }
    return n;
  }, [n, B]), Q = se.useRef(), K = oh(Q, {
    freezeOnceVisible: !1
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && _((I) => !0);
  }), se.useEffect(() => {
    K != null && K.isIntersecting && r.animate && !N && setTimeout(() => {
      _(!0);
    }, 500);
  }, [K == null ? void 0 : K.isIntersecting, r.animate]);
  const oe = ({ arcs: te, path: I, getKey: ge }) => {
    const ve = Pb(te, ge, {
      from: Au,
      enter: Au,
      update: Au,
      leave: Au
    });
    return se.useEffect(() => {
      const ke = setTimeout(() => {
        y();
      }, 500);
      return () => {
        clearTimeout(ke);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, ve.map(({ item: ke, props: Ne, key: je }, Qe) => /* @__PURE__ */ i.createElement(nt, { className: ke.data[r.xAxis.dataKey], key: `${je}-${Qe}`, style: { opacity: r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(ke.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      wp.path,
      {
        d: Eb(
          [Ne.startAngle, Ne.endAngle],
          (Oe, ye) => I({
            ...ke,
            startAngle: Oe,
            endAngle: ye
          })
        ),
        fill: X(ke.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (Oe) => M(Oe, { data: ke.data[r.runtime.xAxis.dataKey], arc: ke }),
        onMouseLeave: (Oe) => T()
      }
    ))), ve.map(({ item: ke, key: Ne }, je) => {
      const [Qe, Oe] = I.centroid(ke), ye = ke.endAngle - ke.startAngle >= 0.1;
      let we = "#FFF";
      return X(ke.data[r.runtime.xAxis.dataKey]) && zr.contrast(we, X(ke.data[r.runtime.xAxis.dataKey])) < 3.5 && (we = "000"), /* @__PURE__ */ i.createElement(wp.g, { key: `${Ne}${je}` }, ye && /* @__PURE__ */ i.createElement(Ct, { style: { fill: we }, x: Qe, y: Oe, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ke.endAngle - ke.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [fe] = l;
  r && r.legend && !r.legend.hide && a === "lg" && (fe = fe * 0.73);
  const W = r.heights.vertical, ie = Math.min(fe, W) / 2, re = W / 2, ue = fe / 2, ee = r.pieType === "Donut" ? 75 : ie;
  se.useEffect(() => {
    if (c.length > 0 && r.legend.behavior !== "highlight") {
      let te = [];
      U.forEach((I) => {
        c.indexOf(I[r.runtime.xAxis.dataKey]) !== -1 && te.push(I);
      }), O(te);
    } else
      O(void 0);
  }, [c]);
  const Y = jg(r, [], U, X);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Br, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: fe, height: W, className: `animated-pie group ${r.animate === !1 || N ? "animated" : ""}`, role: "img", "aria-label": $g(r) }, /* @__PURE__ */ i.createElement(nt, { top: re, left: ue }, /* @__PURE__ */ i.createElement(
    I0,
    {
      data: R || U,
      pieValue: (te) => te[H || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ie - ee,
      outerRadius: ie
    },
    (te) => /* @__PURE__ */ i.createElement(oe, { ...te, getKey: (I) => I.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: Q }), d && Object.entries(d.data).length > 0 && v && g && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Ng, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: k, top: E }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((te, I) => /* @__PURE__ */ i.createElement(m, { item: te, key: I })))))), /* @__PURE__ */ i.createElement(Vg, { config: r, colorScale: X, seriesHighlight: c, highlight: f, highlightReset: s, currentViewport: a, formatLabels: Y }));
};
function Ts(e) {
  return e.split("-")[1];
}
function uh(e) {
  return e === "y" ? "height" : "width";
}
function Hi(e) {
  return e.split("-")[0];
}
function Cs(e) {
  return ["top", "bottom"].includes(Hi(e)) ? "x" : "y";
}
function Np(e, t, r) {
  let { reference: n, floating: a } = e;
  const l = n.x + n.width / 2 - a.width / 2, f = n.y + n.height / 2 - a.height / 2, s = Cs(t), c = uh(s), d = n[c] / 2 - a[c] / 2, g = s === "x";
  let y;
  switch (Hi(t)) {
    case "top":
      y = { x: l, y: n.y - a.height };
      break;
    case "bottom":
      y = { x: l, y: n.y + n.height };
      break;
    case "right":
      y = { x: n.x + n.width, y: f };
      break;
    case "left":
      y = { x: n.x - a.width, y: f };
      break;
    default:
      y = { x: n.x, y: n.y };
  }
  switch (Ts(t)) {
    case "start":
      y[s] -= d * (r && g ? -1 : 1);
      break;
    case "end":
      y[s] += d * (r && g ? -1 : 1);
  }
  return y;
}
function Ug(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function gs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Kg(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: l, rects: f, elements: s, strategy: c } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: v = !1, padding: k = 0 } = t, E = Ug(k), M = s[v ? y === "floating" ? "reference" : "floating" : y], T = gs(await l.getClippingRect({ element: (r = await (l.isElement == null ? void 0 : l.isElement(M))) == null || r ? M : M.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: d, rootBoundary: g, strategy: c })), m = y === "floating" ? { ...f.floating, x: n, y: a } : f.reference, R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), O = await (l.isElement == null ? void 0 : l.isElement(R)) && await (l.getScale == null ? void 0 : l.getScale(R)) || { x: 1, y: 1 }, N = gs(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: R, strategy: c }) : m);
  return { top: (T.top - N.top + E.top) / O.y, bottom: (N.bottom - T.bottom + E.bottom) / O.y, left: (T.left - N.left + E.left) / O.x, right: (N.right - T.right + E.right) / O.x };
}
const QS = Math.min, JS = Math.max;
function wf(e, t, r) {
  return JS(e, QS(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const eE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function uc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => eE[t]);
}
function tE(e, t, r) {
  r === void 0 && (r = !1);
  const n = Ts(e), a = Cs(e), l = uh(a);
  let f = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (f = uc(f)), { main: f, cross: uc(f) };
}
const nE = { start: "end", end: "start" };
function Wd(e) {
  return e.replace(/start|end/g, (t) => nE[t]);
}
const rE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: a, rects: l, initialPlacement: f, platform: s, elements: c } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: y, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: E = !0, ...M } = e, T = Hi(n), m = Hi(f) === f, R = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), O = y || (m || !E ? [uc(f)] : function(Q) {
      const K = uc(Q);
      return [Wd(Q), K, Wd(K)];
    }(f));
    y || k === "none" || O.push(...function(Q, K, oe, fe) {
      const W = Ts(Q);
      let ie = function(re, ue, ee) {
        const Y = ["left", "right"], te = ["right", "left"], I = ["top", "bottom"], ge = ["bottom", "top"];
        switch (re) {
          case "top":
          case "bottom":
            return ee ? ue ? te : Y : ue ? Y : te;
          case "left":
          case "right":
            return ue ? I : ge;
          default:
            return [];
        }
      }(Hi(Q), oe === "start", fe);
      return W && (ie = ie.map((re) => re + "-" + W), K && (ie = ie.concat(ie.map(Wd)))), ie;
    }(f, E, k, R));
    const N = [f, ...O], _ = await Kg(t, M), D = [];
    let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (d && D.push(_[T]), g) {
      const { main: Q, cross: K } = tE(n, l, R);
      D.push(_[Q], _[K]);
    }
    if (B = [...B, { placement: n, overflows: D }], !D.every((Q) => Q <= 0)) {
      var H, U;
      const Q = (((H = a.flip) == null ? void 0 : H.index) || 0) + 1, K = N[Q];
      if (K)
        return { data: { index: Q, overflows: B }, reset: { placement: K } };
      let oe = (U = B.find((fe) => fe.overflows[0] <= 0)) == null ? void 0 : U.placement;
      if (!oe)
        switch (v) {
          case "bestFit": {
            var X;
            const fe = (X = B.map((W) => [W.placement, W.overflows.filter((ie) => ie > 0).reduce((ie, re) => ie + re, 0)]).sort((W, ie) => W[1] - ie[1])[0]) == null ? void 0 : X[0];
            fe && (oe = fe);
            break;
          }
          case "initialPlacement":
            oe = f;
        }
      if (n !== oe)
        return { reset: { placement: oe } };
    }
    return {};
  } };
}, aE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, a = await async function(l, f) {
      const { placement: s, platform: c, elements: d } = l, g = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), y = Hi(s), v = Ts(s), k = Cs(s) === "x", E = ["left", "top"].includes(y) ? -1 : 1, M = g && k ? -1 : 1, T = typeof f == "function" ? f(l) : f;
      let { mainAxis: m, crossAxis: R, alignmentAxis: O } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return v && typeof O == "number" && (R = v === "end" ? -1 * O : O), k ? { x: R * M, y: m * E } : { x: m * E, y: R * M };
    }(t, e);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
}, iE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: a } = t, { mainAxis: l = !0, crossAxis: f = !1, limiter: s = { fn: (T) => {
      let { x: m, y: R } = T;
      return { x: m, y: R };
    } }, ...c } = e, d = { x: r, y: n }, g = await Kg(t, c), y = Cs(Hi(a)), v = y === "x" ? "y" : "x";
    let k = d[y], E = d[v];
    if (l) {
      const T = y === "y" ? "bottom" : "right";
      k = wf(k + g[y === "y" ? "top" : "left"], k, k - g[T]);
    }
    if (f) {
      const T = v === "y" ? "bottom" : "right";
      E = wf(E + g[v === "y" ? "top" : "left"], E, E - g[T]);
    }
    const M = s.fn({ ...t, [y]: k, [v]: E });
    return { ...M, data: { x: M.x - r, y: M.y - n } };
  } };
};
function Ar(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qr(e) {
  return Ar(e).getComputedStyle(e);
}
const Fp = Math.min, ys = Math.max, cc = Math.round;
function Yg(e) {
  const t = Qr(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, l = e.offsetHeight, f = cc(r) !== a || cc(n) !== l;
  return f && (r = a, n = l), { width: r, height: n, fallback: f };
}
function Ua(e) {
  return qg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Pu;
function Xg() {
  if (Pu)
    return Pu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Pu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Pu) : navigator.userAgent;
}
function Jr(e) {
  return e instanceof Ar(e).HTMLElement;
}
function Ha(e) {
  return e instanceof Ar(e).Element;
}
function qg(e) {
  return e instanceof Ar(e).Node;
}
function $p(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ar(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ac(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = Qr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function oE(e) {
  return ["table", "td", "th"].includes(Ua(e));
}
function Tf(e) {
  const t = /firefox/i.test(Xg()), r = Qr(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((a) => r.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const l = r.contain;
    return l != null && l.includes(a);
  });
}
function Gg() {
  return !/^((?!chrome|android).)*safari/i.test(Xg());
}
function ch(e) {
  return ["html", "body", "#document"].includes(Ua(e));
}
function Zg(e) {
  return Ha(e) ? e : e.contextElement;
}
const Qg = { x: 1, y: 1 };
function Qo(e) {
  const t = Zg(e);
  if (!Jr(t))
    return Qg;
  const r = t.getBoundingClientRect(), { width: n, height: a, fallback: l } = Yg(t);
  let f = (l ? cc(r.width) : r.width) / n, s = (l ? cc(r.height) : r.height) / a;
  return f && Number.isFinite(f) || (f = 1), s && Number.isFinite(s) || (s = 1), { x: f, y: s };
}
function Es(e, t, r, n) {
  var a, l;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(), s = Zg(e);
  let c = Qg;
  t && (n ? Ha(n) && (c = Qo(n)) : c = Qo(e));
  const d = s ? Ar(s) : window, g = !Gg() && r;
  let y = (f.left + (g && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, v = (f.top + (g && ((l = d.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, k = f.width / c.x, E = f.height / c.y;
  if (s) {
    const M = Ar(s), T = n && Ha(n) ? Ar(n) : n;
    let m = M.frameElement;
    for (; m && n && T !== M; ) {
      const R = Qo(m), O = m.getBoundingClientRect(), N = getComputedStyle(m);
      O.x += (m.clientLeft + parseFloat(N.paddingLeft)) * R.x, O.y += (m.clientTop + parseFloat(N.paddingTop)) * R.y, y *= R.x, v *= R.y, k *= R.x, E *= R.y, y += O.x, v += O.y, m = Ar(m).frameElement;
    }
  }
  return { width: k, height: E, top: v, right: y + k, bottom: v + E, left: y, x: y, y: v };
}
function Wa(e) {
  return ((qg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pc(e) {
  return Ha(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jg(e) {
  return Es(Wa(e)).left + Pc(e).scrollLeft;
}
function ks(e) {
  if (Ua(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || $p(e) && e.host || Wa(e);
  return $p(t) ? t.host : t;
}
function ey(e) {
  const t = ks(e);
  return ch(t) ? t.ownerDocument.body : Jr(t) && Ac(t) ? t : ey(t);
}
function ty(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = ey(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Ar(n);
  return a ? t.concat(l, l.visualViewport || [], Ac(n) ? n : []) : t.concat(n, ty(n));
}
function zp(e, t, r) {
  return t === "viewport" ? gs(function(n, a) {
    const l = Ar(n), f = Wa(n), s = l.visualViewport;
    let c = f.clientWidth, d = f.clientHeight, g = 0, y = 0;
    if (s) {
      c = s.width, d = s.height;
      const v = Gg();
      (v || !v && a === "fixed") && (g = s.offsetLeft, y = s.offsetTop);
    }
    return { width: c, height: d, x: g, y };
  }(e, r)) : Ha(t) ? gs(function(n, a) {
    const l = Es(n, !0, a === "fixed"), f = l.top + n.clientTop, s = l.left + n.clientLeft, c = Jr(n) ? Qo(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: s * c.x, y: f * c.y };
  }(t, r)) : gs(function(n) {
    const a = Wa(n), l = Pc(n), f = n.ownerDocument.body, s = ys(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = ys(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let d = -l.scrollLeft + Jg(n);
    const g = -l.scrollTop;
    return Qr(f).direction === "rtl" && (d += ys(a.clientWidth, f.clientWidth) - s), { width: s, height: c, x: d, y: g };
  }(Wa(e)));
}
function Bp(e) {
  return Jr(e) && Qr(e).position !== "fixed" ? e.offsetParent : null;
}
function Ip(e) {
  const t = Ar(e);
  let r = Bp(e);
  for (; r && oE(r) && Qr(r).position === "static"; )
    r = Bp(r);
  return r && (Ua(r) === "html" || Ua(r) === "body" && Qr(r).position === "static" && !Tf(r)) ? t : r || function(n) {
    let a = ks(n);
    for (; Jr(a) && !ch(a); ) {
      if (Tf(a))
        return a;
      a = ks(a);
    }
    return null;
  }(e) || t;
}
function lE(e, t, r) {
  const n = Jr(t), a = Wa(t), l = Es(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((Ua(t) !== "body" || Ac(a)) && (f = Pc(t)), Jr(t)) {
      const c = Es(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      a && (s.x = Jg(a));
  return { x: l.left + f.scrollLeft - s.x, y: l.top + f.scrollTop - s.y, width: l.width, height: l.height };
}
const sE = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const l = r === "clippingAncestors" ? function(d, g) {
    const y = g.get(d);
    if (y)
      return y;
    let v = ty(d).filter((T) => Ha(T) && Ua(T) !== "body"), k = null;
    const E = Qr(d).position === "fixed";
    let M = E ? ks(d) : d;
    for (; Ha(M) && !ch(M); ) {
      const T = Qr(M), m = Tf(M);
      (E ? m || k : m || T.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = T : v = v.filter((R) => R !== M), M = ks(M);
    }
    return g.set(d, v), v;
  }(t, this._c) : [].concat(r), f = [...l, n], s = f[0], c = f.reduce((d, g) => {
    const y = zp(t, g, a);
    return d.top = ys(y.top, d.top), d.right = Fp(y.right, d.right), d.bottom = Fp(y.bottom, d.bottom), d.left = ys(y.left, d.left), d;
  }, zp(t, s, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = Jr(r), l = Wa(r);
  if (r === l)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Ua(r) !== "body" || Ac(l)) && (f = Pc(r)), Jr(r))) {
    const d = Es(r);
    s = Qo(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - f.scrollLeft * s.x + c.x, y: t.y * s.y - f.scrollTop * s.y + c.y };
}, isElement: Ha, getDimensions: function(e) {
  return Jr(e) ? Yg(e) : e.getBoundingClientRect();
}, getOffsetParent: Ip, getDocumentElement: Wa, getScale: Qo, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || Ip, l = this.getDimensions;
  return { reference: lE(t, await a(r), n), floating: { x: 0, y: 0, ...await l(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Qr(e).direction === "rtl" }, Hp = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: sE, ...r }, l = { ...a.platform, _c: n };
  return (async (f, s, c) => {
    const { placement: d = "bottom", strategy: g = "absolute", middleware: y = [], platform: v } = c, k = y.filter(Boolean), E = await (v.isRTL == null ? void 0 : v.isRTL(s));
    if (v == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), k.filter((_) => {
      let { name: D } = _;
      return D === "autoPlacement" || D === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let M = await v.getElementRects({ reference: f, floating: s, strategy: g }), { x: T, y: m } = Np(M, d, E), R = d, O = {}, N = 0;
    for (let _ = 0; _ < k.length; _++) {
      const { name: D, fn: B } = k[_], { x: H, y: U, data: X, reset: Q } = await B({ x: T, y: m, initialPlacement: d, placement: R, strategy: g, middlewareData: O, rects: M, platform: v, elements: { reference: f, floating: s } });
      T = H ?? T, m = U ?? m, O = { ...O, [D]: { ...O[D], ...X } }, N > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), Q && N <= 50 && (N++, typeof Q == "object" && (Q.placement && (R = Q.placement), Q.rects && (M = Q.rects === !0 ? await v.getElementRects({ reference: f, floating: s, strategy: g }) : Q.rects), { x: T, y: m } = Np(M, R, E)), _ = -1);
    }
    return { x: T, y: m, placement: R, strategy: g, middlewareData: O };
  })(e, t, { ...a, platform: l });
};
var $a, Wi = { exports: {} }, Wp = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
$a = Wp, function() {
  var e = i, t = 60103, r = 60106;
  $a.Fragment = 60107;
  var n = 60108, a = 60114, l = 60109, f = 60110, s = 60112, c = 60113, d = 60120, g = 60115, y = 60116, v = 60121, k = 60122, E = 60117, M = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), r = m("react.portal"), $a.Fragment = m("react.fragment"), n = m("react.strict_mode"), a = m("react.profiler"), l = m("react.provider"), f = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), d = m("react.suspense_list"), g = m("react.memo"), y = m("react.lazy"), v = m("react.block"), k = m("react.server.block"), E = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), M = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var R = typeof Symbol == "function" && Symbol.iterator, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function N(ye) {
    for (var we = arguments.length, le = new Array(we > 1 ? we - 1 : 0), Be = 1; Be < we; Be++)
      le[Be - 1] = arguments[Be];
    _("error", ye, le);
  }
  function _(ye, we, le) {
    var Be = O.ReactDebugCurrentFrame, Me = "";
    if (U) {
      var He = B(U.type), qe = U._owner;
      Me += function(it, st, at) {
        var Ze = "";
        if (st) {
          var Ie = st.fileName, Fe = Ie.replace(D, "");
          if (/^index\./.test(Fe)) {
            var dt = Ie.match(D);
            if (dt) {
              var Ue = dt[1];
              Ue && (Fe = Ue.replace(D, "") + "/" + Fe);
            }
          }
          Ze = " (at " + Fe + ":" + st.lineNumber + ")";
        } else
          at && (Ze = " (created by " + at + ")");
        return `
    in ` + (it || "Unknown") + Ze;
      }(He, U._source, qe && B(qe.type));
    }
    (Me += Be.getStackAddendum()) !== "" && (we += "%s", le = le.concat([Me]));
    var et = le.map(function(it) {
      return "" + it;
    });
    et.unshift("Warning: " + we), Function.prototype.apply.call(console[ye], console, et);
  }
  var D = /^(.*)[\\\/]/;
  function B(ye) {
    if (ye == null)
      return null;
    if (typeof ye.tag == "number" && N("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ye == "function")
      return ye.displayName || ye.name || null;
    if (typeof ye == "string")
      return ye;
    switch (ye) {
      case $a.Fragment:
        return "Fragment";
      case r:
        return "Portal";
      case a:
        return "Profiler";
      case n:
        return "StrictMode";
      case c:
        return "Suspense";
      case d:
        return "SuspenseList";
    }
    if (typeof ye == "object")
      switch (ye.$$typeof) {
        case f:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case s:
          return Be = ye, Me = ye.render, He = "ForwardRef", qe = Me.displayName || Me.name || "", Be.displayName || (qe !== "" ? He + "(" + qe + ")" : He);
        case g:
          return B(ye.type);
        case v:
          return B(ye.render);
        case y:
          var we = (le = ye)._status === 1 ? le._result : null;
          if (we)
            return B(we);
      }
    var le, Be, Me, He, qe;
    return null;
  }
  var H = {};
  O.ReactDebugCurrentFrame;
  var U = null;
  function X(ye) {
    U = ye;
  }
  var Q, K, oe, fe = O.ReactCurrentOwner, W = Object.prototype.hasOwnProperty, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(ye, we, le, Be, Me) {
    var He, qe = {}, et = null, it = null;
    for (He in le !== void 0 && (et = "" + le), function(Ze) {
      if (W.call(Ze, "key")) {
        var Ie = Object.getOwnPropertyDescriptor(Ze, "key").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Ze.key !== void 0;
    }(we) && (et = "" + we.key), function(Ze) {
      if (W.call(Ze, "ref")) {
        var Ie = Object.getOwnPropertyDescriptor(Ze, "ref").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Ze.ref !== void 0;
    }(we) && (it = we.ref, function(Ze, Ie) {
      if (typeof Ze.ref == "string" && fe.current && Ie && fe.current.stateNode !== Ie) {
        var Fe = B(fe.current.type);
        oe[Fe] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(fe.current.type), Ze.ref), oe[Fe] = !0);
      }
    }(we, Me)), we)
      W.call(we, He) && !ie.hasOwnProperty(He) && (qe[He] = we[He]);
    if (ye && ye.defaultProps) {
      var st = ye.defaultProps;
      for (He in st)
        qe[He] === void 0 && (qe[He] = st[He]);
    }
    if (et || it) {
      var at = typeof ye == "function" ? ye.displayName || ye.name || "Unknown" : ye;
      et && function(Ze, Ie) {
        var Fe = function() {
          Q || (Q = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        Fe.isReactWarning = !0, Object.defineProperty(Ze, "key", { get: Fe, configurable: !0 });
      }(qe, at), it && function(Ze, Ie) {
        var Fe = function() {
          K || (K = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        Fe.isReactWarning = !0, Object.defineProperty(Ze, "ref", { get: Fe, configurable: !0 });
      }(qe, at);
    }
    return function(Ze, Ie, Fe, dt, Ue, Ge, ut) {
      var ft = { $$typeof: t, type: Ze, key: Ie, ref: Fe, props: ut, _owner: Ge, _store: {} };
      return Object.defineProperty(ft._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ft, "_self", { configurable: !1, enumerable: !1, writable: !1, value: dt }), Object.defineProperty(ft, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ue }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
    }(ye, et, it, Me, Be, fe.current, qe);
  }
  oe = {};
  var ue, ee = O.ReactCurrentOwner;
  function Y(ye) {
    U = ye;
  }
  function te(ye) {
    return typeof ye == "object" && ye !== null && ye.$$typeof === t;
  }
  function I() {
    if (ee.current) {
      var ye = B(ee.current.type);
      if (ye)
        return `

Check the render method of \`` + ye + "`.";
    }
    return "";
  }
  O.ReactDebugCurrentFrame, ue = !1;
  var ge = {};
  function ve(ye, we) {
    if (ye._store && !ye._store.validated && ye.key == null) {
      ye._store.validated = !0;
      var le = function(Me) {
        var He = I();
        if (!He) {
          var qe = typeof Me == "string" ? Me : Me.displayName || Me.name;
          qe && (He = `

Check the top-level render call using <` + qe + ">.");
        }
        return He;
      }(we);
      if (!ge[le]) {
        ge[le] = !0;
        var Be = "";
        ye && ye._owner && ye._owner !== ee.current && (Be = " It was passed a child from " + B(ye._owner.type) + "."), Y(ye), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, Be), Y(null);
      }
    }
  }
  function ke(ye, we) {
    if (typeof ye == "object") {
      if (Array.isArray(ye))
        for (var le = 0; le < ye.length; le++) {
          var Be = ye[le];
          te(Be) && ve(Be, we);
        }
      else if (te(ye))
        ye._store && (ye._store.validated = !0);
      else if (ye) {
        var Me = function(et) {
          if (et === null || typeof et != "object")
            return null;
          var it = R && et[R] || et["@@iterator"];
          return typeof it == "function" ? it : null;
        }(ye);
        if (typeof Me == "function" && Me !== ye.entries)
          for (var He, qe = Me.call(ye); !(He = qe.next()).done; )
            te(He.value) && ve(He.value, we);
      }
    }
  }
  function Ne(ye) {
    var we, le = ye.type;
    if (le != null && typeof le != "string") {
      if (typeof le == "function")
        we = le.propTypes;
      else {
        if (typeof le != "object" || le.$$typeof !== s && le.$$typeof !== g)
          return;
        we = le.propTypes;
      }
      if (we) {
        var Be = B(le);
        (function(Me, He, qe, et, it) {
          var st = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var at in Me)
            if (st(Me, at)) {
              var Ze = void 0;
              try {
                if (typeof Me[at] != "function") {
                  var Ie = Error((et || "React class") + ": " + qe + " type `" + at + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Me[at] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ie.name = "Invariant Violation", Ie;
                }
                Ze = Me[at](He, at, et, qe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Fe) {
                Ze = Fe;
              }
              !Ze || Ze instanceof Error || (X(it), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", et || "React class", qe, at, typeof Ze), X(null)), Ze instanceof Error && !(Ze.message in H) && (H[Ze.message] = !0, X(it), N("Failed %s type: %s", qe, Ze.message), X(null));
            }
        })(we, ye.props, "prop", Be, ye);
      } else
        le.PropTypes === void 0 || ue || (ue = !0, N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B(le) || "Unknown"));
      typeof le.getDefaultProps != "function" || le.getDefaultProps.isReactClassApproved || N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function je(ye, we, le, Be, Me, He) {
    var qe = function(Fe) {
      return typeof Fe == "string" || typeof Fe == "function" || Fe === $a.Fragment || Fe === a || Fe === M || Fe === n || Fe === c || Fe === d || Fe === T || typeof Fe == "object" && Fe !== null && (Fe.$$typeof === y || Fe.$$typeof === g || Fe.$$typeof === l || Fe.$$typeof === f || Fe.$$typeof === s || Fe.$$typeof === E || Fe.$$typeof === v || Fe[0] === k);
    }(ye);
    if (!qe) {
      var et = "";
      (ye === void 0 || typeof ye == "object" && ye !== null && Object.keys(ye).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var it, st = function(Fe) {
        return Fe !== void 0 ? `

Check your code at ` + Fe.fileName.replace(/^.*[\\\/]/, "") + ":" + Fe.lineNumber + "." : "";
      }(Me);
      et += st || I(), ye === null ? it = "null" : Array.isArray(ye) ? it = "array" : ye !== void 0 && ye.$$typeof === t ? (it = "<" + (B(ye.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : it = typeof ye, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", it, et);
    }
    var at = re(ye, we, le, Me, He);
    if (at == null)
      return at;
    if (qe) {
      var Ze = we.children;
      if (Ze !== void 0)
        if (Be)
          if (Array.isArray(Ze)) {
            for (var Ie = 0; Ie < Ze.length; Ie++)
              ke(Ze[Ie], ye);
            Object.freeze && Object.freeze(Ze);
          } else
            N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ke(Ze, ye);
    }
    return ye === $a.Fragment ? function(Fe) {
      for (var dt = Object.keys(Fe.props), Ue = 0; Ue < dt.length; Ue++) {
        var Ge = dt[Ue];
        if (Ge !== "children" && Ge !== "key") {
          Y(Fe), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ge), Y(null);
          break;
        }
      }
      Fe.ref !== null && (Y(Fe), N("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
    }(at) : Ne(at), at;
  }
  var Qe = function(ye, we, le) {
    return je(ye, we, le, !1);
  }, Oe = function(ye, we, le) {
    return je(ye, we, le, !0);
  };
  $a.jsx = Qe, $a.jsxs = Oe;
}(), Wi.exports = Wp;
var Vd, ny = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Vd = ny, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) {
      var a = arguments[n];
      if (a) {
        var l = typeof a;
        if (l === "string" || l === "number")
          r.push(a);
        else if (Array.isArray(a)) {
          if (a.length) {
            var f = t.apply(null, a);
            f && r.push(f);
          }
        } else if (l === "object") {
          if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
            r.push(a.toString());
            continue;
          }
          for (var s in a)
            e.call(a, s) && a[s] && r.push(s);
        }
      }
    }
    return r.join(" ");
  }
  Vd.exports ? (t.default = t, Vd.exports = t) : window.classNames = t;
}();
var Vp = ny.exports;
const jp = (e, t, r) => {
  let n = null;
  return function(...a) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, r || e.apply(this, a);
    }, t);
  };
}, uE = ({ content: e }) => Wi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), cE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, dE = se.createContext({ getTooltipData: () => cE });
function ry(e = "DEFAULT_TOOLTIP_ID") {
  return se.useContext(dE).getTooltipData(e);
}
const Up = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: a = 10, strategy: l = "absolute", middlewares: f = [aE(Number(a)), rE(), iE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = f;
  return r ? (s.push({ name: "arrow", options: c = { element: r, padding: 5 }, async fn(d) {
    const { element: g, padding: y = 0 } = c || {}, { x: v, y: k, placement: E, rects: M, platform: T } = d;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Ug(y), R = { x: v, y: k }, O = Cs(E), N = uh(O), _ = await T.getDimensions(g), D = O === "y" ? "top" : "left", B = O === "y" ? "bottom" : "right", H = M.reference[N] + M.reference[O] - R[O] - M.floating[N], U = R[O] - M.reference[O], X = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let Q = X ? O === "y" ? X.clientHeight || 0 : X.clientWidth || 0 : 0;
    Q === 0 && (Q = M.floating[N]);
    const K = H / 2 - U / 2, oe = m[D], fe = Q - _[N] - m[B], W = Q / 2 - _[N] / 2 + K, ie = wf(oe, W, fe), re = Ts(E) != null && W != ie && M.reference[N] / 2 - (W < oe ? m[D] : m[B]) - _[N] / 2 < 0;
    return { [O]: R[O] - (re ? W < oe ? oe - W : fe - W : 0), data: { [O]: ie, centerOffset: W - ie } };
  } }), Hp(e, t, { placement: n, strategy: l, middleware: s }).then(({ x: d, y: g, placement: y, middlewareData: v }) => {
    var k, E;
    const M = { left: `${d}px`, top: `${g}px` }, { x: T, y: m } = (k = v.arrow) !== null && k !== void 0 ? k : { x: 0, y: 0 };
    return { tooltipStyles: M, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(E = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && E !== void 0 ? E : "bottom"]: "-4px" } };
  })) : Hp(e, t, { placement: "bottom", strategy: l, middleware: s }).then(({ x: d, y: g }) => ({ tooltipStyles: { left: `${d}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Li = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Kp = ({ id: e, className: t, classNameArrow: r, variant: n = "dark", anchorId: a, anchorSelect: l, place: f = "top", offset: s = 10, events: c = ["hover"], positionStrategy: d = "absolute", middlewares: g, wrapper: y, children: v = null, delayShow: k = 0, delayHide: E = 0, float: M = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: R = !1, style: O, position: N, afterShow: _, afterHide: D, content: B, html: H, isOpen: U, setIsOpen: X, activeAnchor: Q, setActiveAnchor: K }) => {
  const oe = se.useRef(null), fe = se.useRef(null), W = se.useRef(null), ie = se.useRef(null), [re, ue] = se.useState({}), [ee, Y] = se.useState({}), [te, I] = se.useState(!1), [ge, ve] = se.useState(!1), ke = se.useRef(!1), Ne = se.useRef(null), { anchorRefs: je, setActiveAnchor: Qe } = ry(e), Oe = se.useRef(!1), [ye, we] = se.useState([]), le = se.useRef(!1);
  se.useLayoutEffect(() => (le.current = !0, () => {
    le.current = !1;
  }), []), se.useEffect(() => {
    if (!te) {
      const Ue = setTimeout(() => {
        ve(!1);
      }, 150);
      return () => {
        clearTimeout(Ue);
      };
    }
    return () => null;
  }, [te]);
  const Be = (Ue) => {
    le.current && (Ue && ve(!0), setTimeout(() => {
      le.current && (X == null || X(Ue), U === void 0 && I(Ue));
    }, 10));
  };
  se.useEffect(() => {
    if (U === void 0)
      return () => null;
    U && ve(!0);
    const Ue = setTimeout(() => {
      I(U);
    }, 10);
    return () => {
      clearTimeout(Ue);
    };
  }, [U]), se.useEffect(() => {
    te !== ke.current && (ke.current = te, te ? _ == null || _() : D == null || D());
  }, [te]);
  const Me = (Ue = E) => {
    ie.current && clearTimeout(ie.current), ie.current = setTimeout(() => {
      Oe.current || Be(!1);
    }, Ue);
  }, He = (Ue) => {
    var Ge;
    if (!Ue)
      return;
    k ? (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      Be(!0);
    }, k)) : Be(!0);
    const ut = (Ge = Ue.currentTarget) !== null && Ge !== void 0 ? Ge : Ue.target;
    K(ut), Qe({ current: ut }), ie.current && clearTimeout(ie.current);
  }, qe = () => {
    m ? Me(E || 100) : E ? Me() : Be(!1), W.current && clearTimeout(W.current);
  }, et = ({ x: Ue, y: Ge }) => {
    Up({ place: f, offset: s, elementReference: { getBoundingClientRect: () => ({ x: Ue, y: Ge, width: 0, height: 0, top: Ge, left: Ue, right: Ue, bottom: Ge }) }, tooltipReference: oe.current, tooltipArrowReference: fe.current, strategy: d, middlewares: g }).then((ut) => {
      Object.keys(ut.tooltipStyles).length && ue(ut.tooltipStyles), Object.keys(ut.tooltipArrowStyles).length && Y(ut.tooltipArrowStyles);
    });
  }, it = (Ue) => {
    if (!Ue)
      return;
    const Ge = Ue, ut = { x: Ge.clientX, y: Ge.clientY };
    et(ut), Ne.current = ut;
  }, st = (Ue) => {
    He(Ue), E && Me();
  }, at = (Ue) => {
    const Ge = document.querySelector(`[id='${a}']`);
    Ge != null && Ge.contains(Ue.target) || ye.some((ut) => ut.contains(Ue.target)) || Be(!1);
  }, Ze = (Ue) => {
    Ue.key === "Escape" && Be(!1);
  }, Ie = jp(He, 50), Fe = jp(qe, 50);
  se.useEffect(() => {
    var Ue, Ge;
    const ut = new Set(je);
    ye.forEach((Lt) => {
      ut.add({ current: Lt });
    });
    const ft = document.querySelector(`[id='${a}']`);
    ft && ut.add({ current: ft }), R && window.addEventListener("keydown", Ze);
    const At = [];
    c.find((Lt) => Lt === "click") && (window.addEventListener("click", at), At.push({ event: "click", listener: st })), c.find((Lt) => Lt === "hover") && (At.push({ event: "mouseenter", listener: Ie }, { event: "mouseleave", listener: Fe }, { event: "focus", listener: Ie }, { event: "blur", listener: Fe }), M && At.push({ event: "mousemove", listener: it }));
    const Yt = () => {
      Oe.current = !0;
    }, qt = () => {
      Oe.current = !1, qe();
    };
    return m && ((Ue = oe.current) === null || Ue === void 0 || Ue.addEventListener("mouseenter", Yt), (Ge = oe.current) === null || Ge === void 0 || Ge.addEventListener("mouseleave", qt)), At.forEach(({ event: Lt, listener: Nt }) => {
      ut.forEach((Gt) => {
        var an;
        (an = Gt.current) === null || an === void 0 || an.addEventListener(Lt, Nt);
      });
    }), () => {
      var Lt, Nt;
      c.find((Gt) => Gt === "click") && window.removeEventListener("click", at), R && window.removeEventListener("keydown", Ze), m && ((Lt = oe.current) === null || Lt === void 0 || Lt.removeEventListener("mouseenter", Yt), (Nt = oe.current) === null || Nt === void 0 || Nt.removeEventListener("mouseleave", qt)), At.forEach(({ event: Gt, listener: an }) => {
        ut.forEach((fn) => {
          var En;
          (En = fn.current) === null || En === void 0 || En.removeEventListener(Gt, an);
        });
      });
    };
  }, [ge, je, ye, R, c]), se.useEffect(() => {
    let Ue = l ?? "";
    !Ue && e && (Ue = `[data-tooltip-id='${e}']`);
    const Ge = new MutationObserver((ut) => {
      const ft = [];
      ut.forEach((At) => {
        if (At.type === "attributes" && At.attributeName === "data-tooltip-id" && At.target.getAttribute("data-tooltip-id") === e && ft.push(At.target), At.type === "childList" && (Q && [...At.removedNodes].some((Yt) => !!Yt.contains(Q) && (ve(!1), Be(!1), K(null), !0)), Ue))
          try {
            const Yt = [...At.addedNodes].filter((qt) => qt.nodeType === 1);
            ft.push(...Yt.filter((qt) => qt.matches(Ue))), ft.push(...Yt.flatMap((qt) => [...qt.querySelectorAll(Ue)]));
          } catch {
          }
      }), ft.length && we((At) => [...At, ...ft]);
    });
    return Ge.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ge.disconnect();
    };
  }, [e, l, Q]), se.useEffect(() => {
    N ? et(N) : M ? Ne.current && et(Ne.current) : Up({ place: f, offset: s, elementReference: Q, tooltipReference: oe.current, tooltipArrowReference: fe.current, strategy: d, middlewares: g }).then((Ue) => {
      le.current && (Object.keys(Ue.tooltipStyles).length && ue(Ue.tooltipStyles), Object.keys(Ue.tooltipArrowStyles).length && Y(Ue.tooltipArrowStyles));
    });
  }, [te, Q, B, H, f, s, d, N]), se.useEffect(() => {
    var Ue;
    const Ge = document.querySelector(`[id='${a}']`), ut = [...ye, Ge];
    Q && ut.includes(Q) || K((Ue = ye[0]) !== null && Ue !== void 0 ? Ue : Ge);
  }, [a, ye, Q]), se.useEffect(() => () => {
    W.current && clearTimeout(W.current), ie.current && clearTimeout(ie.current);
  }, []), se.useEffect(() => {
    let Ue = l;
    if (!Ue && e && (Ue = `[data-tooltip-id='${e}']`), Ue)
      try {
        const Ge = Array.from(document.querySelectorAll(Ue));
        we(Ge);
      } catch {
        we([]);
      }
  }, [e, l]);
  const dt = !!(H || B || v) && te && Object.keys(re).length > 0;
  return ge ? Wi.exports.jsxs(y, { id: e, role: "tooltip", className: Vp("react-tooltip", Li.tooltip, Li[n], t, { [Li.show]: dt, [Li.fixed]: d === "fixed", [Li.clickable]: m }), style: { ...O, ...re }, ref: oe, children: [H && Wi.exports.jsx(uE, { content: H }) || B || v, Wi.exports.jsx(y, { className: Vp("react-tooltip-arrow", Li.arrow, r, { [Li["no-arrow"]]: T }), style: ee, ref: fe })] }) : null;
}, ay = ({ id: e, anchorId: t, anchorSelect: r, content: n, html: a, className: l, classNameArrow: f, variant: s = "dark", place: c = "top", offset: d = 10, wrapper: g = "div", children: y = null, events: v = ["hover"], positionStrategy: k = "absolute", middlewares: E, delayShow: M = 0, delayHide: T = 0, float: m = !1, noArrow: R = !1, clickable: O = !1, closeOnEsc: N = !1, style: _, position: D, isOpen: B, setIsOpen: H, afterShow: U, afterHide: X }) => {
  const [Q, K] = se.useState(n), [oe, fe] = se.useState(a), [W, ie] = se.useState(c), [re, ue] = se.useState(s), [ee, Y] = se.useState(d), [te, I] = se.useState(M), [ge, ve] = se.useState(T), [ke, Ne] = se.useState(m), [je, Qe] = se.useState(g), [Oe, ye] = se.useState(v), [we, le] = se.useState(k), [Be, Me] = se.useState(null), { anchorRefs: He, activeAnchor: qe } = ry(e), et = (at) => at == null ? void 0 : at.getAttributeNames().reduce((Ze, Ie) => {
    var Fe;
    return Ie.startsWith("data-tooltip-") && (Ze[Ie.replace(/^data-tooltip-/, "")] = (Fe = at == null ? void 0 : at.getAttribute(Ie)) !== null && Fe !== void 0 ? Fe : null), Ze;
  }, {}), it = (at) => {
    const Ze = { place: (Ie) => {
      var Fe;
      ie((Fe = Ie) !== null && Fe !== void 0 ? Fe : c);
    }, content: (Ie) => {
      K(Ie ?? n);
    }, html: (Ie) => {
      fe(Ie ?? a);
    }, variant: (Ie) => {
      var Fe;
      ue((Fe = Ie) !== null && Fe !== void 0 ? Fe : s);
    }, offset: (Ie) => {
      Y(Ie === null ? d : Number(Ie));
    }, wrapper: (Ie) => {
      var Fe;
      Qe((Fe = Ie) !== null && Fe !== void 0 ? Fe : g);
    }, events: (Ie) => {
      const Fe = Ie == null ? void 0 : Ie.split(" ");
      ye(Fe ?? v);
    }, "position-strategy": (Ie) => {
      var Fe;
      le((Fe = Ie) !== null && Fe !== void 0 ? Fe : k);
    }, "delay-show": (Ie) => {
      I(Ie === null ? M : Number(Ie));
    }, "delay-hide": (Ie) => {
      ve(Ie === null ? T : Number(Ie));
    }, float: (Ie) => {
      Ne(Ie === null ? m : !!Ie);
    } };
    Object.values(Ze).forEach((Ie) => Ie(null)), Object.entries(at).forEach(([Ie, Fe]) => {
      var dt;
      (dt = Ze[Ie]) === null || dt === void 0 || dt.call(Ze, Fe);
    });
  };
  se.useEffect(() => {
    K(n);
  }, [n]), se.useEffect(() => {
    fe(a);
  }, [a]), se.useEffect(() => {
    ie(c);
  }, [c]), se.useEffect(() => {
    var at;
    const Ze = new Set(He);
    let Ie = r;
    if (!Ie && e && (Ie = `[data-tooltip-id='${e}']`), Ie)
      try {
        document.querySelectorAll(Ie).forEach((ut) => {
          Ze.add({ current: ut });
        });
      } catch {
        console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
      }
    const Fe = document.querySelector(`[id='${t}']`);
    if (Fe && Ze.add({ current: Fe }), !Ze.size)
      return () => null;
    const dt = (at = Be ?? Fe) !== null && at !== void 0 ? at : qe.current, Ue = new MutationObserver((ut) => {
      ut.forEach((ft) => {
        var At;
        if (!dt || ft.type !== "attributes" || !(!((At = ft.attributeName) === null || At === void 0) && At.startsWith("data-tooltip-")))
          return;
        const Yt = et(dt);
        it(Yt);
      });
    }), Ge = { attributes: !0, childList: !1, subtree: !1 };
    if (dt) {
      const ut = et(dt);
      it(ut), Ue.observe(dt, Ge);
    }
    return () => {
      Ue.disconnect();
    };
  }, [He, qe, Be, t, r]);
  const st = { id: e, anchorId: t, anchorSelect: r, className: l, classNameArrow: f, content: Q, html: oe, place: W, variant: re, offset: ee, wrapper: je, events: Oe, positionStrategy: we, middlewares: E, delayShow: te, delayHide: ge, float: ke, noArrow: R, clickable: O, closeOnEsc: N, style: _, position: D, isOpen: B, setIsOpen: H, afterShow: U, afterHide: X, activeAnchor: Be, setActiveAnchor: (at) => Me(at) };
  return y ? Wi.exports.jsx(Kp, { ...st, children: y }) : Wi.exports.jsx(Kp, { ...st });
};
function Yp(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function fE(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function jd(e, t) {
  let r = 0;
  if (t === void 0)
    for (let n of e)
      (n = +n) && (r += n);
  else {
    let n = -1;
    for (let a of e)
      (a = +t(a, ++n, e)) && (r += a);
  }
  return r;
}
function hE(e) {
  return e.depth;
}
function pE(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Ru(e) {
  return function() {
    return e;
  };
}
function Xp(e, t) {
  return dc(e.source, t.source) || e.index - t.index;
}
function qp(e, t) {
  return dc(e.target, t.target) || e.index - t.index;
}
function dc(e, t) {
  return e.y0 - t.y0;
}
function Ud(e) {
  return e.value;
}
function mE(e) {
  return e.index;
}
function gE(e) {
  return e.nodes;
}
function yE(e) {
  return e.links;
}
function Gp(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function Zp({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, n = r;
    for (const a of t.sourceLinks)
      a.y0 = r + a.width / 2, r += a.width;
    for (const a of t.targetLinks)
      a.y1 = n + a.width / 2, n += a.width;
  }
}
function vE() {
  let e = 0, t = 0, r = 1, n = 1, a = 24, l = 8, f, s = mE, c = pE, d, g, y = gE, v = yE, k = 6;
  function E() {
    const W = { nodes: y.apply(null, arguments), links: v.apply(null, arguments) };
    return M(W), T(W), m(W), R(W), _(W), Zp(W), W;
  }
  E.update = function(W) {
    return Zp(W), W;
  }, E.nodeId = function(W) {
    return arguments.length ? (s = typeof W == "function" ? W : Ru(W), E) : s;
  }, E.nodeAlign = function(W) {
    return arguments.length ? (c = typeof W == "function" ? W : Ru(W), E) : c;
  }, E.nodeSort = function(W) {
    return arguments.length ? (d = W, E) : d;
  }, E.nodeWidth = function(W) {
    return arguments.length ? (a = +W, E) : a;
  }, E.nodePadding = function(W) {
    return arguments.length ? (l = f = +W, E) : l;
  }, E.nodes = function(W) {
    return arguments.length ? (y = typeof W == "function" ? W : Ru(W), E) : y;
  }, E.links = function(W) {
    return arguments.length ? (v = typeof W == "function" ? W : Ru(W), E) : v;
  }, E.linkSort = function(W) {
    return arguments.length ? (g = W, E) : g;
  }, E.size = function(W) {
    return arguments.length ? (e = t = 0, r = +W[0], n = +W[1], E) : [r - e, n - t];
  }, E.extent = function(W) {
    return arguments.length ? (e = +W[0][0], r = +W[1][0], t = +W[0][1], n = +W[1][1], E) : [[e, t], [r, n]];
  }, E.iterations = function(W) {
    return arguments.length ? (k = +W, E) : k;
  };
  function M({ nodes: W, links: ie }) {
    for (const [ue, ee] of W.entries())
      ee.index = ue, ee.sourceLinks = [], ee.targetLinks = [];
    const re = new Map(W.map((ue, ee) => [s(ue, ee, W), ue]));
    for (const [ue, ee] of ie.entries()) {
      ee.index = ue;
      let { source: Y, target: te } = ee;
      typeof Y != "object" && (Y = ee.source = Gp(re, Y)), typeof te != "object" && (te = ee.target = Gp(re, te)), Y.sourceLinks.push(ee), te.targetLinks.push(ee);
    }
    if (g != null)
      for (const { sourceLinks: ue, targetLinks: ee } of W)
        ue.sort(g), ee.sort(g);
  }
  function T({ nodes: W }) {
    for (const ie of W)
      ie.value = ie.fixedValue === void 0 ? Math.max(jd(ie.sourceLinks, Ud), jd(ie.targetLinks, Ud)) : ie.fixedValue;
  }
  function m({ nodes: W }) {
    const ie = W.length;
    let re = new Set(W), ue = /* @__PURE__ */ new Set(), ee = 0;
    for (; re.size; ) {
      for (const Y of re) {
        Y.depth = ee;
        for (const { target: te } of Y.sourceLinks)
          ue.add(te);
      }
      if (++ee > ie)
        throw new Error("circular link");
      re = ue, ue = /* @__PURE__ */ new Set();
    }
  }
  function R({ nodes: W }) {
    const ie = W.length;
    let re = new Set(W), ue = /* @__PURE__ */ new Set(), ee = 0;
    for (; re.size; ) {
      for (const Y of re) {
        Y.height = ee;
        for (const { source: te } of Y.targetLinks)
          ue.add(te);
      }
      if (++ee > ie)
        throw new Error("circular link");
      re = ue, ue = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: W }) {
    const ie = Yp(W, (ee) => ee.depth) + 1, re = (r - e - a) / (ie - 1), ue = new Array(ie);
    for (const ee of W) {
      const Y = Math.max(0, Math.min(ie - 1, Math.floor(c.call(null, ee, ie))));
      ee.layer = Y, ee.x0 = e + Y * re, ee.x1 = ee.x0 + a, ue[Y] ? ue[Y].push(ee) : ue[Y] = [ee];
    }
    if (d)
      for (const ee of ue)
        ee.sort(d);
    return ue;
  }
  function N(W) {
    const ie = fE(W, (re) => (n - t - (re.length - 1) * f) / jd(re, Ud));
    for (const re of W) {
      let ue = t;
      for (const ee of re) {
        ee.y0 = ue, ee.y1 = ue + ee.value * ie, ue = ee.y1 + f;
        for (const Y of ee.sourceLinks)
          Y.width = Y.value * ie;
      }
      ue = (n - ue + f) / (re.length + 1);
      for (let ee = 0; ee < re.length; ++ee) {
        const Y = re[ee];
        Y.y0 += ue * (ee + 1), Y.y1 += ue * (ee + 1);
      }
      K(re);
    }
  }
  function _(W) {
    const ie = O(W);
    f = Math.min(l, (n - t) / (Yp(ie, (re) => re.length) - 1)), N(ie);
    for (let re = 0; re < k; ++re) {
      const ue = Math.pow(0.99, re), ee = Math.max(1 - ue, (re + 1) / k);
      B(ie, ue, ee), D(ie, ue, ee);
    }
  }
  function D(W, ie, re) {
    for (let ue = 1, ee = W.length; ue < ee; ++ue) {
      const Y = W[ue];
      for (const te of Y) {
        let I = 0, ge = 0;
        for (const { source: ke, value: Ne } of te.targetLinks) {
          let je = Ne * (te.layer - ke.layer);
          I += oe(ke, te) * je, ge += je;
        }
        if (!(ge > 0))
          continue;
        let ve = (I / ge - te.y0) * ie;
        te.y0 += ve, te.y1 += ve, Q(te);
      }
      d === void 0 && Y.sort(dc), H(Y, re);
    }
  }
  function B(W, ie, re) {
    for (let ue = W.length, ee = ue - 2; ee >= 0; --ee) {
      const Y = W[ee];
      for (const te of Y) {
        let I = 0, ge = 0;
        for (const { target: ke, value: Ne } of te.sourceLinks) {
          let je = Ne * (ke.layer - te.layer);
          I += fe(te, ke) * je, ge += je;
        }
        if (!(ge > 0))
          continue;
        let ve = (I / ge - te.y0) * ie;
        te.y0 += ve, te.y1 += ve, Q(te);
      }
      d === void 0 && Y.sort(dc), H(Y, re);
    }
  }
  function H(W, ie) {
    const re = W.length >> 1, ue = W[re];
    X(W, ue.y0 - f, re - 1, ie), U(W, ue.y1 + f, re + 1, ie), X(W, n, W.length - 1, ie), U(W, t, 0, ie);
  }
  function U(W, ie, re, ue) {
    for (; re < W.length; ++re) {
      const ee = W[re], Y = (ie - ee.y0) * ue;
      Y > 1e-6 && (ee.y0 += Y, ee.y1 += Y), ie = ee.y1 + f;
    }
  }
  function X(W, ie, re, ue) {
    for (; re >= 0; --re) {
      const ee = W[re], Y = (ee.y1 - ie) * ue;
      Y > 1e-6 && (ee.y0 -= Y, ee.y1 -= Y), ie = ee.y0 - f;
    }
  }
  function Q({ sourceLinks: W, targetLinks: ie }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: re } } of ie)
        re.sort(qp);
      for (const { target: { targetLinks: re } } of W)
        re.sort(Xp);
    }
  }
  function K(W) {
    if (g === void 0)
      for (const { sourceLinks: ie, targetLinks: re } of W)
        ie.sort(qp), re.sort(Xp);
  }
  function oe(W, ie) {
    let re = W.y0 - (W.sourceLinks.length - 1) * f / 2;
    for (const { target: ue, width: ee } of W.sourceLinks) {
      if (ue === ie)
        break;
      re += ee + f;
    }
    for (const { source: ue, width: ee } of ie.targetLinks) {
      if (ue === W)
        break;
      re -= ee;
    }
    return re;
  }
  function fe(W, ie) {
    let re = ie.y0 - (ie.targetLinks.length - 1) * f / 2;
    for (const { source: ue, width: ee } of ie.targetLinks) {
      if (ue === W)
        break;
      re += ee + f;
    }
    for (const { target: ue, width: ee } of W.sourceLinks) {
      if (ue === ie)
        break;
      re -= ee;
    }
    return re;
  }
  return E;
}
function xE(e) {
  return [e.source.x1, e.y0];
}
function bE(e) {
  return [e.target.x0, e.y1];
}
function SE() {
  return u0().source(xE).target(bE);
}
var Ka = {}, Di = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qp;
function EE() {
  if (Qp)
    return Di;
  Qp = 1;
  var e = se;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, z = 1; z < arguments.length; z++)
      A += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, l = {};
  function f(x) {
    return r.call(l, x) ? !0 : r.call(a, x) ? !1 : n.test(x) ? l[x] = !0 : (a[x] = !0, !1);
  }
  function s(x, A, z, q, be, me, Ae) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = q, this.attributeNamespace = be, this.mustUseProperty = z, this.propertyName = x, this.type = A, this.sanitizeURL = me, this.removeEmptyString = Ae;
  }
  var c = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    c[x] = new s(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var A = x[0];
    c[A] = new s(A, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    c[x] = new s(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    c[x] = new s(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    c[x] = new s(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    c[x] = new s(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    c[x] = new s(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    c[x] = new s(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    c[x] = new s(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var d = /[\-:]([a-z])/g;
  function g(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var A = x.replace(
      d,
      g
    );
    c[A] = new s(A, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var A = x.replace(d, g);
    c[A] = new s(A, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var A = x.replace(d, g);
    c[A] = new s(A, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    c[x] = new s(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), c.xlinkHref = new s("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    c[x] = new s(x, 1, !1, x.toLowerCase(), null, !0, !0);
  });
  var y = {
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
  }, v = ["Webkit", "ms", "Moz", "O"];
  Object.keys(y).forEach(function(x) {
    v.forEach(function(A) {
      A = A + x.charAt(0).toUpperCase() + x.substring(1), y[A] = y[x];
    });
  });
  var k = /["'&<>]/;
  function E(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = k.exec(x);
    if (A) {
      var z = "", q, be = 0;
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
        be !== q && (z += x.substring(be, q)), be = q + 1, z += A;
      }
      x = be !== q ? z + x.substring(be, q) : z;
    }
    return x;
  }
  var M = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function R(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function O(x, A, z) {
    switch (A) {
      case "select":
        return R(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return R(2, null);
      case "math":
        return R(3, null);
      case "foreignObject":
        return R(1, null);
      case "table":
        return R(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return R(5, null);
      case "colgroup":
        return R(7, null);
      case "tr":
        return R(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? R(1, null) : x;
  }
  var N = /* @__PURE__ */ new Map();
  function _(x, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var q in z)
      if (r.call(z, q)) {
        var be = z[q];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (q.indexOf("--") === 0) {
            var me = E(q);
            be = E(("" + be).trim());
          } else {
            me = q;
            var Ae = N.get(me);
            Ae !== void 0 || (Ae = E(me.replace(M, "-$1").toLowerCase().replace(T, "-ms-")), N.set(me, Ae)), me = Ae, be = typeof be == "number" ? be === 0 || r.call(y, q) ? "" + be : be + "px" : E(("" + be).trim());
          }
          A ? (A = !1, x.push(' style="', me, ":", be)) : x.push(";", me, ":", be);
        }
      }
    A || x.push('"');
  }
  function D(x, A, z, q) {
    switch (z) {
      case "style":
        _(x, A, q);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (A = c.hasOwnProperty(z) ? c[z] : null, A !== null) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = A.attributeName, A.type) {
          case 3:
            q && x.push(" ", z, '=""');
            break;
          case 4:
            q === !0 ? x.push(" ", z, '=""') : q !== !1 && x.push(" ", z, '="', E(q), '"');
            break;
          case 5:
            isNaN(q) || x.push(" ", z, '="', E(q), '"');
            break;
          case 6:
            !isNaN(q) && 1 <= q && x.push(" ", z, '="', E(q), '"');
            break;
          default:
            A.sanitizeURL && (q = "" + q), x.push(" ", z, '="', E(q), '"');
        }
      } else if (f(z)) {
        switch (typeof q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", z, '="', E(q), '"');
      }
    }
  }
  function B(x, A, z) {
    if (A != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push("" + A);
    }
  }
  function H(x) {
    var A = "";
    return e.Children.forEach(x, function(z) {
      z != null && (A += z);
    }), A;
  }
  function U(x, A, z, q) {
    x.push(K(z));
    var be = z = null, me;
    for (me in A)
      if (r.call(A, me)) {
        var Ae = A[me];
        if (Ae != null)
          switch (me) {
            case "children":
              z = Ae;
              break;
            case "dangerouslySetInnerHTML":
              be = Ae;
              break;
            default:
              D(x, q, me, Ae);
          }
      }
    return x.push(">"), B(x, be, z), typeof z == "string" ? (x.push(E(z)), null) : z;
  }
  var X = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Q = /* @__PURE__ */ new Map();
  function K(x) {
    var A = Q.get(x);
    if (A === void 0) {
      if (!X.test(x))
        throw Error(t(65, x));
      A = "<" + x, Q.set(x, A);
    }
    return A;
  }
  function oe(x, A, z, q, be) {
    switch (A) {
      case "select":
        x.push(K("select"));
        var me = null, Ae = null;
        for (ct in z)
          if (r.call(z, ct)) {
            var We = z[ct];
            if (We != null)
              switch (ct) {
                case "children":
                  me = We;
                  break;
                case "dangerouslySetInnerHTML":
                  Ae = We;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  D(x, q, ct, We);
              }
          }
        return x.push(">"), B(x, Ae, me), me;
      case "option":
        Ae = be.selectedValue, x.push(K("option"));
        var rt = We = null, ht = null, ct = null;
        for (me in z)
          if (r.call(z, me)) {
            var _t = z[me];
            if (_t != null)
              switch (me) {
                case "children":
                  We = _t;
                  break;
                case "selected":
                  ht = _t;
                  break;
                case "dangerouslySetInnerHTML":
                  ct = _t;
                  break;
                case "value":
                  rt = _t;
                default:
                  D(x, q, me, _t);
              }
          }
        if (Ae != null)
          if (z = rt !== null ? "" + rt : H(We), m(Ae)) {
            for (q = 0; q < Ae.length; q++)
              if ("" + Ae[q] === z) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + Ae === z && x.push(' selected=""');
        else
          ht && x.push(' selected=""');
        return x.push(">"), B(x, ct, We), We;
      case "textarea":
        x.push(K("textarea")), ct = Ae = me = null;
        for (We in z)
          if (r.call(z, We) && (rt = z[We], rt != null))
            switch (We) {
              case "children":
                ct = rt;
                break;
              case "value":
                me = rt;
                break;
              case "defaultValue":
                Ae = rt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                D(
                  x,
                  q,
                  We,
                  rt
                );
            }
        if (me === null && Ae !== null && (me = Ae), x.push(">"), ct != null) {
          if (me != null)
            throw Error(t(92));
          if (m(ct) && 1 < ct.length)
            throw Error(t(93));
          me = "" + ct;
        }
        return typeof me == "string" && me[0] === `
` && x.push(`
`), me !== null && x.push(E("" + me)), null;
      case "input":
        x.push(K("input")), rt = ct = We = me = null;
        for (Ae in z)
          if (r.call(z, Ae) && (ht = z[Ae], ht != null))
            switch (Ae) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                rt = ht;
                break;
              case "defaultValue":
                We = ht;
                break;
              case "checked":
                ct = ht;
                break;
              case "value":
                me = ht;
                break;
              default:
                D(x, q, Ae, ht);
            }
        return ct !== null ? D(x, q, "checked", ct) : rt !== null && D(x, q, "checked", rt), me !== null ? D(x, q, "value", me) : We !== null && D(x, q, "value", We), x.push("/>"), null;
      case "menuitem":
        x.push(K("menuitem"));
        for (var Dn in z)
          if (r.call(z, Dn) && (me = z[Dn], me != null))
            switch (Dn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                D(x, q, Dn, me);
            }
        return x.push(">"), null;
      case "title":
        x.push(K("title")), me = null;
        for (_t in z)
          if (r.call(z, _t) && (Ae = z[_t], Ae != null))
            switch (_t) {
              case "children":
                me = Ae;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                D(x, q, _t, Ae);
            }
        return x.push(">"), me;
      case "listing":
      case "pre":
        x.push(K(A)), Ae = me = null;
        for (rt in z)
          if (r.call(z, rt) && (We = z[rt], We != null))
            switch (rt) {
              case "children":
                me = We;
                break;
              case "dangerouslySetInnerHTML":
                Ae = We;
                break;
              default:
                D(x, q, rt, We);
            }
        if (x.push(">"), Ae != null) {
          if (me != null)
            throw Error(t(60));
          if (typeof Ae != "object" || !("__html" in Ae))
            throw Error(t(61));
          z = Ae.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? x.push(`
`, z) : x.push("" + z));
        }
        return typeof me == "string" && me[0] === `
` && x.push(`
`), me;
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
        x.push(K(A));
        for (var wn in z)
          if (r.call(z, wn) && (me = z[wn], me != null))
            switch (wn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                D(x, q, wn, me);
            }
        return x.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return U(
          x,
          z,
          A,
          q
        );
      case "html":
        return be.insertionMode === 0 && x.push("<!DOCTYPE html>"), U(x, z, A, q);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return U(x, z, A, q);
        x.push(K(A)), Ae = me = null;
        for (ht in z)
          if (r.call(z, ht) && (We = z[ht], We != null))
            switch (ht) {
              case "children":
                me = We;
                break;
              case "dangerouslySetInnerHTML":
                Ae = We;
                break;
              case "style":
                _(x, q, We);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(ht) && typeof We != "function" && typeof We != "symbol" && x.push(" ", ht, '="', E(We), '"');
            }
        return x.push(">"), B(x, Ae, me), me;
    }
  }
  function fe(x, A, z) {
    if (x.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return x.push(z), x.push('"></template>');
  }
  function W(x, A, z, q) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return x.push('<div hidden id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 2:
        return x.push('<svg aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 3:
        return x.push('<math aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 4:
        return x.push('<table hidden id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 5:
        return x.push('<table hidden><tbody id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 6:
        return x.push('<table hidden><tr id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      case 7:
        return x.push('<table hidden><colgroup id="'), x.push(A.segmentPrefix), A = q.toString(16), x.push(A), x.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ie(x, A) {
    switch (A.insertionMode) {
      case 0:
      case 1:
        return x.push("</div>");
      case 2:
        return x.push("</svg>");
      case 3:
        return x.push("</math>");
      case 4:
        return x.push("</table>");
      case 5:
        return x.push("</tbody></table>");
      case 6:
        return x.push("</tr></table>");
      case 7:
        return x.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var re = /[<\u2028\u2029]/g;
  function ue(x) {
    return JSON.stringify(x).replace(re, function(A) {
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
  function ee(x, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: x };
  }
  function Y(x, A, z, q) {
    return z.generateStaticMarkup ? (x.push(E(A)), !1) : (A === "" ? x = q : (q && x.push("<!-- -->"), x.push(E(A)), x = !0), x);
  }
  var te = Object.assign, I = Symbol.for("react.element"), ge = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), Oe = Symbol.for("react.forward_ref"), ye = Symbol.for("react.suspense"), we = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Me = Symbol.for("react.scope"), He = Symbol.for("react.debug_trace_mode"), qe = Symbol.for("react.legacy_hidden"), et = Symbol.for("react.default_value"), it = Symbol.iterator;
  function st(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case ve:
        return "Fragment";
      case ge:
        return "Portal";
      case Ne:
        return "Profiler";
      case ke:
        return "StrictMode";
      case ye:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case Qe:
          return (x.displayName || "Context") + ".Consumer";
        case je:
          return (x._context.displayName || "Context") + ".Provider";
        case Oe:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case le:
          return A = x.displayName || null, A !== null ? A : st(x.type) || "Memo";
        case Be:
          A = x._payload, x = x._init;
          try {
            return st(x(A));
          } catch {
          }
      }
    return null;
  }
  var at = {};
  function Ze(x, A) {
    if (x = x.contextTypes, !x)
      return at;
    var z = {}, q;
    for (q in x)
      z[q] = A[q];
    return z;
  }
  var Ie = null;
  function Fe(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var z = A.parent;
      if (x === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Fe(x, z);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function dt(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && dt(x);
  }
  function Ue(x) {
    var A = x.parent;
    A !== null && Ue(A), x.context._currentValue2 = x.value;
  }
  function Ge(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? Fe(x, A) : Ge(x, A);
  }
  function ut(x, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    x.depth === z.depth ? Fe(x, z) : ut(x, z), A.context._currentValue2 = A.value;
  }
  function ft(x) {
    var A = Ie;
    A !== x && (A === null ? Ue(x) : x === null ? dt(A) : A.depth === x.depth ? Fe(A, x) : A.depth > x.depth ? Ge(A, x) : ut(A, x), Ie = x);
  }
  var At = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function Yt(x, A, z, q) {
    var be = x.state !== void 0 ? x.state : null;
    x.updater = At, x.props = z, x.state = be;
    var me = { queue: [], replace: !1 };
    x._reactInternals = me;
    var Ae = A.contextType;
    if (x.context = typeof Ae == "object" && Ae !== null ? Ae._currentValue2 : q, Ae = A.getDerivedStateFromProps, typeof Ae == "function" && (Ae = Ae(z, be), be = Ae == null ? be : te({}, be, Ae), x.state = be), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && At.enqueueReplaceState(x, x.state, null), me.queue !== null && 0 < me.queue.length)
        if (A = me.queue, Ae = me.replace, me.queue = null, me.replace = !1, Ae && A.length === 1)
          x.state = A[0];
        else {
          for (me = Ae ? A[0] : x.state, be = !0, Ae = Ae ? 1 : 0; Ae < A.length; Ae++) {
            var We = A[Ae];
            We = typeof We == "function" ? We.call(x, me, z, q) : We, We != null && (be ? (be = !1, me = te({}, me, We)) : te(me, We));
          }
          x.state = me;
        }
      else
        me.queue = null;
  }
  var qt = { id: 1, overflow: "" };
  function Lt(x, A, z) {
    var q = x.id;
    x = x.overflow;
    var be = 32 - Nt(q) - 1;
    q &= ~(1 << be), z += 1;
    var me = 32 - Nt(A) + be;
    if (30 < me) {
      var Ae = be - be % 5;
      return me = (q & (1 << Ae) - 1).toString(32), q >>= Ae, be -= Ae, { id: 1 << 32 - Nt(A) + be | z << be | q, overflow: me + x };
    }
    return { id: 1 << me | z << be | q, overflow: x };
  }
  var Nt = Math.clz32 ? Math.clz32 : fn, Gt = Math.log, an = Math.LN2;
  function fn(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Gt(x) / an | 0) | 0;
  }
  function En(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Re = typeof Object.is == "function" ? Object.is : En, jt = null, Ft = null, yn = null, Pt = null, bt = !1, An = !1, Pn = 0, bn = null, Rn = 0;
  function De() {
    if (jt === null)
      throw Error(t(321));
    return jt;
  }
  function Ke() {
    if (0 < Rn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function V() {
    return Pt === null ? yn === null ? (bt = !1, yn = Pt = Ke()) : (bt = !0, Pt = yn) : Pt.next === null ? (bt = !1, Pt = Pt.next = Ke()) : (bt = !0, Pt = Pt.next), Pt;
  }
  function Ee() {
    Ft = jt = null, An = !1, yn = null, Rn = 0, Pt = bn = null;
  }
  function Xe(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function $e(x, A, z) {
    if (jt = De(), Pt = V(), bt) {
      var q = Pt.queue;
      if (A = q.dispatch, bn !== null && (z = bn.get(q), z !== void 0)) {
        bn.delete(q), q = Pt.memoizedState;
        do
          q = x(q, z.action), z = z.next;
        while (z !== null);
        return Pt.memoizedState = q, [q, A];
      }
      return [Pt.memoizedState, A];
    }
    return x = x === Xe ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, Pt.memoizedState = x, x = Pt.queue = { last: null, dispatch: null }, x = x.dispatch = ot.bind(null, jt, x), [Pt.memoizedState, x];
  }
  function yt(x, A) {
    if (jt = De(), Pt = V(), A = A === void 0 ? null : A, Pt !== null) {
      var z = Pt.memoizedState;
      if (z !== null && A !== null) {
        var q = z[1];
        e:
          if (q === null)
            q = !1;
          else {
            for (var be = 0; be < q.length && be < A.length; be++)
              if (!Re(A[be], q[be])) {
                q = !1;
                break e;
              }
            q = !0;
          }
        if (q)
          return z[0];
      }
    }
    return x = x(), Pt.memoizedState = [x, A], x;
  }
  function ot(x, A, z) {
    if (25 <= Rn)
      throw Error(t(301));
    if (x === jt)
      if (An = !0, x = { action: z, next: null }, bn === null && (bn = /* @__PURE__ */ new Map()), z = bn.get(A), z === void 0)
        bn.set(A, x);
      else {
        for (A = z; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function xt() {
    throw Error(t(394));
  }
  function Mt() {
  }
  var Je = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return De(), x._currentValue2;
  }, useMemo: yt, useReducer: $e, useRef: function(x) {
    jt = De(), Pt = V();
    var A = Pt.memoizedState;
    return A === null ? (x = { current: x }, Pt.memoizedState = x) : A;
  }, useState: function(x) {
    return $e(Xe, x);
  }, useInsertionEffect: Mt, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return yt(function() {
      return x;
    }, A);
  }, useImperativeHandle: Mt, useEffect: Mt, useDebugValue: Mt, useDeferredValue: function(x) {
    return De(), x;
  }, useTransition: function() {
    return De(), [
      !1,
      xt
    ];
  }, useId: function() {
    var x = Ft.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - Nt(x) - 1)).toString(32) + A;
    var z = $t;
    if (z === null)
      throw Error(t(404));
    return A = Pn++, x = ":" + z.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return De(), A(x._source);
  }, useSyncExternalStore: function(x, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, $t = null, It = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function en(x) {
    return console.error(x), null;
  }
  function tn() {
  }
  function pt(x, A, z, q, be, me, Ae, We, rt) {
    var ht = [], ct = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: q === void 0 ? 12800 : q, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ct, pingedTasks: ht, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? en : be, onAllReady: me === void 0 ? tn : me, onShellReady: Ae === void 0 ? tn : Ae, onShellError: We === void 0 ? tn : We, onFatalError: rt === void 0 ? tn : rt }, z = Wt(A, 0, null, z, !1, !1), z.parentFlushed = !0, x = Ot(A, x, null, z, ct, at, null, qt), ht.push(x), A;
  }
  function Ot(x, A, z, q, be, me, Ae, We) {
    x.allPendingTasks++, z === null ? x.pendingRootTasks++ : z.pendingTasks++;
    var rt = { node: A, ping: function() {
      var ht = x.pingedTasks;
      ht.push(rt), ht.length === 1 && sn(x);
    }, blockedBoundary: z, blockedSegment: q, abortSet: be, legacyContext: me, context: Ae, treeContext: We };
    return be.add(rt), rt;
  }
  function Wt(x, A, z, q, be, me) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: q, boundary: z, lastPushedText: be, textEmbedded: me };
  }
  function Vt(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function hn(x, A) {
    var z = x.onShellError;
    z(A), z = x.onFatalError, z(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function vn(x, A, z, q, be) {
    for (jt = {}, Ft = A, Pn = 0, x = z(q, be); An; )
      An = !1, Pn = 0, Rn += 1, Pt = null, x = z(q, be);
    return Ee(), x;
  }
  function on(x, A, z, q) {
    var be = z.render(), me = q.childContextTypes;
    if (me != null) {
      var Ae = A.legacyContext;
      if (typeof z.getChildContext != "function")
        q = Ae;
      else {
        z = z.getChildContext();
        for (var We in z)
          if (!(We in me))
            throw Error(t(108, st(q) || "Unknown", We));
        q = te({}, Ae, z);
      }
      A.legacyContext = q, vt(x, A, be), A.legacyContext = Ae;
    } else
      vt(x, A, be);
  }
  function pn(x, A) {
    if (x && x.defaultProps) {
      A = te({}, A), x = x.defaultProps;
      for (var z in x)
        A[z] === void 0 && (A[z] = x[z]);
      return A;
    }
    return A;
  }
  function Zt(x, A, z, q, be) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        be = Ze(z, A.legacyContext);
        var me = z.contextType;
        me = new z(q, typeof me == "object" && me !== null ? me._currentValue2 : be), Yt(me, z, q, be), on(x, A, me, z);
      } else {
        me = Ze(z, A.legacyContext), be = vn(x, A, z, q, me);
        var Ae = Pn !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          Yt(be, z, q, me), on(x, A, be, z);
        else if (Ae) {
          q = A.treeContext, A.treeContext = Lt(q, 1, 0);
          try {
            vt(x, A, be);
          } finally {
            A.treeContext = q;
          }
        } else
          vt(x, A, be);
      }
    else if (typeof z == "string") {
      switch (be = A.blockedSegment, me = oe(be.chunks, z, q, x.responseState, be.formatContext), be.lastPushedText = !1, Ae = be.formatContext, be.formatContext = O(Ae, z, q), kn(x, A, me), be.formatContext = Ae, z) {
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
        case qe:
        case He:
        case ke:
        case Ne:
        case ve:
          vt(x, A, q.children);
          return;
        case we:
          vt(x, A, q.children);
          return;
        case Me:
          throw Error(t(343));
        case ye:
          e: {
            z = A.blockedBoundary, be = A.blockedSegment, me = q.fallback, q = q.children, Ae = /* @__PURE__ */ new Set();
            var We = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Ae, errorDigest: null }, rt = Wt(x, be.chunks.length, We, be.formatContext, !1, !1);
            be.children.push(rt), be.lastPushedText = !1;
            var ht = Wt(x, 0, null, be.formatContext, !1, !1);
            ht.parentFlushed = !0, A.blockedBoundary = We, A.blockedSegment = ht;
            try {
              if (kn(
                x,
                A,
                q
              ), x.responseState.generateStaticMarkup || ht.lastPushedText && ht.textEmbedded && ht.chunks.push("<!-- -->"), ht.status = 1, Ln(We, ht), We.pendingTasks === 0)
                break e;
            } catch (ct) {
              ht.status = 4, We.forceClientRender = !0, We.errorDigest = Vt(x, ct);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = be;
            }
            A = Ot(x, me, z, rt, Ae, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Oe:
            if (q = vn(x, A, z.render, q, be), Pn !== 0) {
              z = A.treeContext, A.treeContext = Lt(z, 1, 0);
              try {
                vt(x, A, q);
              } finally {
                A.treeContext = z;
              }
            } else
              vt(x, A, q);
            return;
          case le:
            z = z.type, q = pn(z, q), Zt(x, A, z, q, be);
            return;
          case je:
            if (be = q.children, z = z._context, q = q.value, me = z._currentValue2, z._currentValue2 = q, Ae = Ie, Ie = q = { parent: Ae, depth: Ae === null ? 0 : Ae.depth + 1, context: z, parentValue: me, value: q }, A.context = q, vt(x, A, be), x = Ie, x === null)
              throw Error(t(403));
            q = x.parentValue, x.context._currentValue2 = q === et ? x.context._defaultValue : q, x = Ie = x.parent, A.context = x;
            return;
          case Qe:
            q = q.children, q = q(z._currentValue2), vt(x, A, q);
            return;
          case Be:
            be = z._init, z = be(z._payload), q = pn(z, q), Zt(
              x,
              A,
              z,
              q,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function vt(x, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case I:
          Zt(x, A, z.type, z.props, z.ref);
          return;
        case ge:
          throw Error(t(257));
        case Be:
          var q = z._init;
          z = q(z._payload), vt(x, A, z);
          return;
      }
      if (m(z)) {
        un(x, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? q = null : (q = it && z[it] || z["@@iterator"], q = typeof q == "function" ? q : null), q && (q = q.call(z))) {
        if (z = q.next(), !z.done) {
          var be = [];
          do
            be.push(z.value), z = q.next();
          while (!z.done);
          un(x, A, be);
        }
        return;
      }
      throw x = Object.prototype.toString.call(z), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : x));
    }
    typeof z == "string" ? (q = A.blockedSegment, q.lastPushedText = Y(A.blockedSegment.chunks, z, x.responseState, q.lastPushedText)) : typeof z == "number" && (q = A.blockedSegment, q.lastPushedText = Y(A.blockedSegment.chunks, "" + z, x.responseState, q.lastPushedText));
  }
  function un(x, A, z) {
    for (var q = z.length, be = 0; be < q; be++) {
      var me = A.treeContext;
      A.treeContext = Lt(me, q, be);
      try {
        kn(x, A, z[be]);
      } finally {
        A.treeContext = me;
      }
    }
  }
  function kn(x, A, z) {
    var q = A.blockedSegment.formatContext, be = A.legacyContext, me = A.context;
    try {
      return vt(x, A, z);
    } catch (rt) {
      if (Ee(), typeof rt == "object" && rt !== null && typeof rt.then == "function") {
        z = rt;
        var Ae = A.blockedSegment, We = Wt(x, Ae.chunks.length, null, Ae.formatContext, Ae.lastPushedText, !0);
        Ae.children.push(We), Ae.lastPushedText = !1, x = Ot(x, A.node, A.blockedBoundary, We, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(x, x), A.blockedSegment.formatContext = q, A.legacyContext = be, A.context = me, ft(me);
      } else
        throw A.blockedSegment.formatContext = q, A.legacyContext = be, A.context = me, ft(me), rt;
    }
  }
  function ln(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Ut(this, A, x);
  }
  function Xn(x, A, z) {
    var q = x.blockedBoundary;
    x.blockedSegment.status = 3, q === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (q.pendingTasks--, q.forceClientRender || (q.forceClientRender = !0, x = z === void 0 ? Error(t(432)) : z, q.errorDigest = A.onError(x), q.parentFlushed && A.clientRenderedBoundaries.push(q)), q.fallbackAbortableTasks.forEach(function(be) {
      return Xn(be, A, z);
    }), q.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (q = A.onAllReady, q()));
  }
  function Ln(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var z = A.children[0];
      z.id = A.id, z.parentFlushed = !0, z.status === 1 && Ln(x, z);
    } else
      x.completedSegments.push(A);
  }
  function Ut(x, A, z) {
    if (A === null) {
      if (z.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = z;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = tn, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Ln(A, z), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(ln, x), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Ln(A, z), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function sn(x) {
    if (x.status !== 2) {
      var A = Ie, z = It.current;
      It.current = Je;
      var q = $t;
      $t = x.responseState;
      try {
        var be = x.pingedTasks, me;
        for (me = 0; me < be.length; me++) {
          var Ae = be[me], We = x, rt = Ae.blockedSegment;
          if (rt.status === 0) {
            ft(Ae.context);
            try {
              vt(We, Ae, Ae.node), We.responseState.generateStaticMarkup || rt.lastPushedText && rt.textEmbedded && rt.chunks.push("<!-- -->"), Ae.abortSet.delete(Ae), rt.status = 1, Ut(We, Ae.blockedBoundary, rt);
            } catch (Tn) {
              if (Ee(), typeof Tn == "object" && Tn !== null && typeof Tn.then == "function") {
                var ht = Ae.ping;
                Tn.then(ht, ht);
              } else {
                Ae.abortSet.delete(Ae), rt.status = 4;
                var ct = Ae.blockedBoundary, _t = Tn, Dn = Vt(We, _t);
                if (ct === null ? hn(We, _t) : (ct.pendingTasks--, ct.forceClientRender || (ct.forceClientRender = !0, ct.errorDigest = Dn, ct.parentFlushed && We.clientRenderedBoundaries.push(ct))), We.allPendingTasks--, We.allPendingTasks === 0) {
                  var wn = We.onAllReady;
                  wn();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, me), x.destination !== null && ar(x, x.destination);
      } catch (Tn) {
        Vt(x, Tn), hn(x, Tn);
      } finally {
        $t = q, It.current = z, z === Je && ft(A);
      }
    }
  }
  function Vn(x, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var q = z.id = x.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = q.toString(16), A.push(x), A.push('"></template>');
      case 1:
        z.status = 2;
        var be = !0;
        q = z.chunks;
        var me = 0;
        z = z.children;
        for (var Ae = 0; Ae < z.length; Ae++) {
          for (be = z[Ae]; me < be.index; me++)
            A.push(q[me]);
          be = rr(x, A, be);
        }
        for (; me < q.length - 1; me++)
          A.push(q[me]);
        return me < q.length && (be = A.push(q[me])), be;
      default:
        throw Error(t(390));
    }
  }
  function rr(x, A, z) {
    var q = z.boundary;
    if (q === null)
      return Vn(x, A, z);
    if (q.parentFlushed = !0, q.forceClientRender)
      return x.responseState.generateStaticMarkup || (q = q.errorDigest, A.push("<!--$!-->"), A.push("<template"), q && (A.push(' data-dgst="'), q = E(q), A.push(q), A.push('"')), A.push("></template>")), Vn(x, A, z), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < q.pendingTasks) {
      q.rootSegmentID = x.nextSegmentId++, 0 < q.completedSegments.length && x.partialBoundaries.push(q);
      var be = x.responseState, me = be.nextSuspenseID++;
      return be = be.boundaryPrefix + me.toString(16), q = q.id = be, fe(A, x.responseState, q), Vn(x, A, z), A.push("<!--/$-->");
    }
    if (q.byteSize > x.progressiveChunkSize)
      return q.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(q), fe(A, x.responseState, q.id), Vn(x, A, z), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), z = q.completedSegments, z.length !== 1)
      throw Error(t(391));
    return rr(x, A, z[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function yr(x, A, z) {
    return W(A, x.responseState, z.formatContext, z.id), rr(x, A, z), ie(A, z.formatContext);
  }
  function vr(x, A, z) {
    for (var q = z.completedSegments, be = 0; be < q.length; be++)
      dr(x, A, z, q[be]);
    if (q.length = 0, x = x.responseState, q = z.id, z = z.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), q === null)
      throw Error(t(395));
    return z = z.toString(16), A.push(q), A.push('","'), A.push(x.segmentPrefix), A.push(z), A.push('")<\/script>');
  }
  function dr(x, A, z, q) {
    if (q.status === 2)
      return !0;
    var be = q.id;
    if (be === -1) {
      if ((q.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return yr(x, A, q);
    }
    return yr(x, A, q), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(x.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function ar(x, A) {
    try {
      var z = x.completedRootSegment;
      if (z !== null && x.pendingRootTasks === 0) {
        rr(x, A, z), x.completedRootSegment = null;
        var q = x.responseState.bootstrapChunks;
        for (z = 0; z < q.length - 1; z++)
          A.push(q[z]);
        z < q.length && A.push(q[z]);
      }
      var be = x.clientRenderedBoundaries, me;
      for (me = 0; me < be.length; me++) {
        var Ae = be[me];
        q = A;
        var We = x.responseState, rt = Ae.id, ht = Ae.errorDigest, ct = Ae.errorMessage, _t = Ae.errorComponentStack;
        if (q.push(We.startInlineScript), We.sentClientRenderFunction ? q.push('$RX("') : (We.sentClientRenderFunction = !0, q.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), rt === null)
          throw Error(t(395));
        if (q.push(rt), q.push('"'), ht || ct || _t) {
          q.push(",");
          var Dn = ue(ht || "");
          q.push(Dn);
        }
        if (ct || _t) {
          q.push(",");
          var wn = ue(ct || "");
          q.push(wn);
        }
        if (_t) {
          q.push(",");
          var Tn = ue(_t);
          q.push(Tn);
        }
        if (!q.push(")<\/script>")) {
          x.destination = null, me++, be.splice(0, me);
          return;
        }
      }
      be.splice(0, me);
      var jn = x.completedBoundaries;
      for (me = 0; me < jn.length; me++)
        if (!vr(x, A, jn[me])) {
          x.destination = null, me++, jn.splice(0, me);
          return;
        }
      jn.splice(0, me);
      var ne = x.partialBoundaries;
      for (me = 0; me < ne.length; me++) {
        var J = ne[me];
        e: {
          be = x, Ae = A;
          var ce = J.completedSegments;
          for (We = 0; We < ce.length; We++)
            if (!dr(be, Ae, J, ce[We])) {
              We++, ce.splice(0, We);
              var Pe = !1;
              break e;
            }
          ce.splice(0, We), Pe = !0;
        }
        if (!Pe) {
          x.destination = null, me++, ne.splice(0, me);
          return;
        }
      }
      ne.splice(0, me);
      var Rt = x.completedBoundaries;
      for (me = 0; me < Rt.length; me++)
        if (!vr(x, A, Rt[me])) {
          x.destination = null, me++, Rt.splice(0, me);
          return;
        }
      Rt.splice(0, me);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function Pr(x, A) {
    try {
      var z = x.abortableTasks;
      z.forEach(function(q) {
        return Xn(q, x, A);
      }), z.clear(), x.destination !== null && ar(x, x.destination);
    } catch (q) {
      Vt(x, q), hn(x, q);
    }
  }
  function fr() {
  }
  function hr(x, A, z, q) {
    var be = !1, me = null, Ae = "", We = { push: function(ht) {
      return ht !== null && (Ae += ht), !0;
    }, destroy: function(ht) {
      be = !0, me = ht;
    } }, rt = !1;
    if (x = pt(x, ee(z, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, fr, void 0, function() {
      rt = !0;
    }, void 0, void 0), sn(x), Pr(x, q), x.status === 1)
      x.status = 2, We.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = We;
      try {
        ar(x, We);
      } catch (ht) {
        Vt(x, ht), hn(x, ht);
      }
    }
    if (be)
      throw me;
    if (!rt)
      throw Error(t(426));
    return Ae;
  }
  return Di.renderToNodeStream = function() {
    throw Error(t(207));
  }, Di.renderToStaticMarkup = function(x, A) {
    return hr(x, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Di.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Di.renderToString = function(x, A) {
    return hr(x, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Di.version = "18.2.0", Di;
}
var Lu = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp;
function kE() {
  if (Jp)
    return Lu;
  Jp = 1;
  var e = se;
  function t(b) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, $ = 1; $ < arguments.length; $++)
      P += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + b + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(b, P) {
    if (P.length !== 0)
      if (512 < P.length)
        0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), b.enqueue(P);
      else {
        var $ = r.length - n;
        $ < P.length && ($ === 0 ? b.enqueue(r) : (r.set(P.subarray(0, $), n), b.enqueue(r), P = P.subarray($)), r = new Uint8Array(512), n = 0), r.set(P, n), n += P.length;
      }
  }
  function l(b, P) {
    return a(b, P), !0;
  }
  function f(b) {
    r && 0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var s = new TextEncoder();
  function c(b) {
    return s.encode(b);
  }
  function d(b) {
    return s.encode(b);
  }
  function g(b, P) {
    typeof b.error == "function" ? b.error(P) : b.close();
  }
  var y = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, E = {};
  function M(b) {
    return y.call(E, b) ? !0 : y.call(k, b) ? !1 : v.test(b) ? E[b] = !0 : (k[b] = !0, !1);
  }
  function T(b, P, $, G, Se, xe, _e) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = G, this.attributeNamespace = Se, this.mustUseProperty = $, this.propertyName = b, this.type = P, this.sanitizeURL = xe, this.removeEmptyString = _e;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(b) {
    m[b] = new T(b, 0, !1, b, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(b) {
    var P = b[0];
    m[P] = new T(P, 1, !1, b[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(b) {
    m[b] = new T(b, 2, !1, b.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(b) {
    m[b] = new T(b, 2, !1, b, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(b) {
    m[b] = new T(b, 3, !1, b.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(b) {
    m[b] = new T(b, 3, !0, b, null, !1, !1);
  }), ["capture", "download"].forEach(function(b) {
    m[b] = new T(b, 4, !1, b, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(b) {
    m[b] = new T(b, 6, !1, b, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(b) {
    m[b] = new T(b, 5, !1, b.toLowerCase(), null, !1, !1);
  });
  var R = /[\-:]([a-z])/g;
  function O(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var P = b.replace(
      R,
      O
    );
    m[P] = new T(P, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var P = b.replace(R, O);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var P = b.replace(R, O);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !0, !0);
  });
  var N = {
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(N).forEach(function(b) {
    _.forEach(function(P) {
      P = P + b.charAt(0).toUpperCase() + b.substring(1), N[P] = N[b];
    });
  });
  var D = /["'&<>]/;
  function B(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var P = D.exec(b);
    if (P) {
      var $ = "", G, Se = 0;
      for (G = P.index; G < b.length; G++) {
        switch (b.charCodeAt(G)) {
          case 34:
            P = "&quot;";
            break;
          case 38:
            P = "&amp;";
            break;
          case 39:
            P = "&#x27;";
            break;
          case 60:
            P = "&lt;";
            break;
          case 62:
            P = "&gt;";
            break;
          default:
            continue;
        }
        Se !== G && ($ += b.substring(Se, G)), Se = G + 1, $ += P;
      }
      b = Se !== G ? $ + b.substring(Se, G) : $;
    }
    return b;
  }
  var H = /([A-Z])/g, U = /^ms-/, X = Array.isArray, Q = d("<script>"), K = d("<\/script>"), oe = d('<script src="'), fe = d('<script type="module" src="'), W = d('" async=""><\/script>'), ie = /(<\/|<)(s)(cript)/gi;
  function re(b, P, $, G) {
    return "" + P + ($ === "s" ? "\\u0073" : "\\u0053") + G;
  }
  function ue(b, P, $, G, Se) {
    b = b === void 0 ? "" : b, P = P === void 0 ? Q : d('<script nonce="' + B(P) + '">');
    var xe = [];
    if ($ !== void 0 && xe.push(P, c(("" + $).replace(ie, re)), K), G !== void 0)
      for ($ = 0; $ < G.length; $++)
        xe.push(oe, c(B(G[$])), W);
    if (Se !== void 0)
      for (G = 0; G < Se.length; G++)
        xe.push(fe, c(B(Se[G])), W);
    return { bootstrapChunks: xe, startInlineScript: P, placeholderPrefix: d(b + "P:"), segmentPrefix: d(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ee(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function Y(b) {
    return ee(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function te(b, P, $) {
    switch (P) {
      case "select":
        return ee(1, $.value != null ? $.value : $.defaultValue);
      case "svg":
        return ee(2, null);
      case "math":
        return ee(3, null);
      case "foreignObject":
        return ee(1, null);
      case "table":
        return ee(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ee(5, null);
      case "colgroup":
        return ee(7, null);
      case "tr":
        return ee(6, null);
    }
    return 4 <= b.insertionMode || b.insertionMode === 0 ? ee(1, null) : b;
  }
  var I = d("<!-- -->");
  function ge(b, P, $, G) {
    return P === "" ? G : (G && b.push(I), b.push(c(B(P))), !0);
  }
  var ve = /* @__PURE__ */ new Map(), ke = d(' style="'), Ne = d(":"), je = d(";");
  function Qe(b, P, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    P = !0;
    for (var G in $)
      if (y.call($, G)) {
        var Se = $[G];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (G.indexOf("--") === 0) {
            var xe = c(B(G));
            Se = c(B(("" + Se).trim()));
          } else {
            xe = G;
            var _e = ve.get(xe);
            _e !== void 0 || (_e = d(B(xe.replace(H, "-$1").toLowerCase().replace(U, "-ms-"))), ve.set(xe, _e)), xe = _e, Se = typeof Se == "number" ? Se === 0 || y.call(N, G) ? c("" + Se) : c(Se + "px") : c(B(("" + Se).trim()));
          }
          P ? (P = !1, b.push(ke, xe, Ne, Se)) : b.push(je, xe, Ne, Se);
        }
      }
    P || b.push(we);
  }
  var Oe = d(" "), ye = d('="'), we = d('"'), le = d('=""');
  function Be(b, P, $, G) {
    switch ($) {
      case "style":
        Qe(b, P, G);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < $.length) || $[0] !== "o" && $[0] !== "O" || $[1] !== "n" && $[1] !== "N") {
      if (P = m.hasOwnProperty($) ? m[$] : null, P !== null) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch ($ = c(P.attributeName), P.type) {
          case 3:
            G && b.push(Oe, $, le);
            break;
          case 4:
            G === !0 ? b.push(Oe, $, le) : G !== !1 && b.push(Oe, $, ye, c(B(G)), we);
            break;
          case 5:
            isNaN(G) || b.push(Oe, $, ye, c(B(G)), we);
            break;
          case 6:
            !isNaN(G) && 1 <= G && b.push(Oe, $, ye, c(B(G)), we);
            break;
          default:
            P.sanitizeURL && (G = "" + G), b.push(Oe, $, ye, c(B(G)), we);
        }
      } else if (M($)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = $.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(Oe, c($), ye, c(B(G)), we);
      }
    }
  }
  var Me = d(">"), He = d("/>");
  function qe(b, P, $) {
    if (P != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && b.push(c("" + P));
    }
  }
  function et(b) {
    var P = "";
    return e.Children.forEach(b, function($) {
      $ != null && (P += $);
    }), P;
  }
  var it = d(' selected=""');
  function st(b, P, $, G) {
    b.push(Fe($));
    var Se = $ = null, xe;
    for (xe in P)
      if (y.call(P, xe)) {
        var _e = P[xe];
        if (_e != null)
          switch (xe) {
            case "children":
              $ = _e;
              break;
            case "dangerouslySetInnerHTML":
              Se = _e;
              break;
            default:
              Be(b, G, xe, _e);
          }
      }
    return b.push(Me), qe(b, Se, $), typeof $ == "string" ? (b.push(c(B($))), null) : $;
  }
  var at = d(`
`), Ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ie = /* @__PURE__ */ new Map();
  function Fe(b) {
    var P = Ie.get(b);
    if (P === void 0) {
      if (!Ze.test(b))
        throw Error(t(65, b));
      P = d("<" + b), Ie.set(b, P);
    }
    return P;
  }
  var dt = d("<!DOCTYPE html>");
  function Ue(b, P, $, G, Se) {
    switch (P) {
      case "select":
        b.push(Fe("select"));
        var xe = null, _e = null;
        for (Tt in $)
          if (y.call($, Tt)) {
            var Ve = $[Tt];
            if (Ve != null)
              switch (Tt) {
                case "children":
                  xe = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  _e = Ve;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Be(b, G, Tt, Ve);
              }
          }
        return b.push(Me), qe(b, _e, xe), xe;
      case "option":
        _e = Se.selectedValue, b.push(Fe("option"));
        var mt = Ve = null, Dt = null, Tt = null;
        for (xe in $)
          if (y.call($, xe)) {
            var rn = $[xe];
            if (rn != null)
              switch (xe) {
                case "children":
                  Ve = rn;
                  break;
                case "selected":
                  Dt = rn;
                  break;
                case "dangerouslySetInnerHTML":
                  Tt = rn;
                  break;
                case "value":
                  mt = rn;
                default:
                  Be(b, G, xe, rn);
              }
          }
        if (_e != null)
          if ($ = mt !== null ? "" + mt : et(Ve), X(_e)) {
            for (G = 0; G < _e.length; G++)
              if ("" + _e[G] === $) {
                b.push(it);
                break;
              }
          } else
            "" + _e === $ && b.push(it);
        else
          Dt && b.push(it);
        return b.push(Me), qe(b, Tt, Ve), Ve;
      case "textarea":
        b.push(Fe("textarea")), Tt = _e = xe = null;
        for (Ve in $)
          if (y.call($, Ve) && (mt = $[Ve], mt != null))
            switch (Ve) {
              case "children":
                Tt = mt;
                break;
              case "value":
                xe = mt;
                break;
              case "defaultValue":
                _e = mt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                Be(b, G, Ve, mt);
            }
        if (xe === null && _e !== null && (xe = _e), b.push(Me), Tt != null) {
          if (xe != null)
            throw Error(t(92));
          if (X(Tt) && 1 < Tt.length)
            throw Error(t(93));
          xe = "" + Tt;
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(at), xe !== null && b.push(c(B("" + xe))), null;
      case "input":
        b.push(Fe("input")), mt = Tt = Ve = xe = null;
        for (_e in $)
          if (y.call($, _e) && (Dt = $[_e], Dt != null))
            switch (_e) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                mt = Dt;
                break;
              case "defaultValue":
                Ve = Dt;
                break;
              case "checked":
                Tt = Dt;
                break;
              case "value":
                xe = Dt;
                break;
              default:
                Be(b, G, _e, Dt);
            }
        return Tt !== null ? Be(
          b,
          G,
          "checked",
          Tt
        ) : mt !== null && Be(b, G, "checked", mt), xe !== null ? Be(b, G, "value", xe) : Ve !== null && Be(b, G, "value", Ve), b.push(He), null;
      case "menuitem":
        b.push(Fe("menuitem"));
        for (var Hn in $)
          if (y.call($, Hn) && (xe = $[Hn], xe != null))
            switch (Hn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                Be(b, G, Hn, xe);
            }
        return b.push(Me), null;
      case "title":
        b.push(Fe("title")), xe = null;
        for (rn in $)
          if (y.call($, rn) && (_e = $[rn], _e != null))
            switch (rn) {
              case "children":
                xe = _e;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                Be(b, G, rn, _e);
            }
        return b.push(Me), xe;
      case "listing":
      case "pre":
        b.push(Fe(P)), _e = xe = null;
        for (mt in $)
          if (y.call($, mt) && (Ve = $[mt], Ve != null))
            switch (mt) {
              case "children":
                xe = Ve;
                break;
              case "dangerouslySetInnerHTML":
                _e = Ve;
                break;
              default:
                Be(b, G, mt, Ve);
            }
        if (b.push(Me), _e != null) {
          if (xe != null)
            throw Error(t(60));
          if (typeof _e != "object" || !("__html" in _e))
            throw Error(t(61));
          $ = _e.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? b.push(at, c($)) : b.push(c("" + $)));
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(at), xe;
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
        b.push(Fe(P));
        for (var Gn in $)
          if (y.call($, Gn) && (xe = $[Gn], xe != null))
            switch (Gn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                Be(b, G, Gn, xe);
            }
        return b.push(He), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return st(b, $, P, G);
      case "html":
        return Se.insertionMode === 0 && b.push(dt), st(b, $, P, G);
      default:
        if (P.indexOf("-") === -1 && typeof $.is != "string")
          return st(b, $, P, G);
        b.push(Fe(P)), _e = xe = null;
        for (Dt in $)
          if (y.call($, Dt) && (Ve = $[Dt], Ve != null))
            switch (Dt) {
              case "children":
                xe = Ve;
                break;
              case "dangerouslySetInnerHTML":
                _e = Ve;
                break;
              case "style":
                Qe(b, G, Ve);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(Dt) && typeof Ve != "function" && typeof Ve != "symbol" && b.push(Oe, c(Dt), ye, c(B(Ve)), we);
            }
        return b.push(Me), qe(b, _e, xe), xe;
    }
  }
  var Ge = d("</"), ut = d(">"), ft = d('<template id="'), At = d('"></template>'), Yt = d("<!--$-->"), qt = d('<!--$?--><template id="'), Lt = d('"></template>'), Nt = d("<!--$!-->"), Gt = d("<!--/$-->"), an = d("<template"), fn = d('"'), En = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var Re = d("></template>");
  function jt(b, P, $) {
    if (a(b, qt), $ === null)
      throw Error(t(395));
    return a(b, $), l(b, Lt);
  }
  var Ft = d('<div hidden id="'), yn = d('">'), Pt = d("</div>"), bt = d('<svg aria-hidden="true" style="display:none" id="'), An = d('">'), Pn = d("</svg>"), bn = d('<math aria-hidden="true" style="display:none" id="'), Rn = d('">'), De = d("</math>"), Ke = d('<table hidden id="'), V = d('">'), Ee = d("</table>"), Xe = d('<table hidden><tbody id="'), $e = d('">'), yt = d("</tbody></table>"), ot = d('<table hidden><tr id="'), xt = d('">'), Mt = d("</tr></table>"), Je = d('<table hidden><colgroup id="'), $t = d('">'), It = d("</colgroup></table>");
  function en(b, P, $, G) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return a(b, Ft), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, yn);
      case 2:
        return a(b, bt), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, An);
      case 3:
        return a(b, bn), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, Rn);
      case 4:
        return a(b, Ke), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, V);
      case 5:
        return a(b, Xe), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, $e);
      case 6:
        return a(b, ot), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, xt);
      case 7:
        return a(
          b,
          Je
        ), a(b, P.segmentPrefix), a(b, c(G.toString(16))), l(b, $t);
      default:
        throw Error(t(397));
    }
  }
  function tn(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return l(b, Pt);
      case 2:
        return l(b, Pn);
      case 3:
        return l(b, De);
      case 4:
        return l(b, Ee);
      case 5:
        return l(b, yt);
      case 6:
        return l(b, Mt);
      case 7:
        return l(b, It);
      default:
        throw Error(t(397));
    }
  }
  var pt = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ot = d('$RS("'), Wt = d('","'), Vt = d('")<\/script>'), hn = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), vn = d('$RC("'), on = d('","'), pn = d('")<\/script>'), Zt = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), vt = d('$RX("'), un = d('"'), kn = d(")<\/script>"), ln = d(","), Xn = /[<\u2028\u2029]/g;
  function Ln(b) {
    return JSON.stringify(b).replace(Xn, function(P) {
      switch (P) {
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
  var Ut = Object.assign, sn = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), vr = Symbol.for("react.profiler"), dr = Symbol.for("react.provider"), ar = Symbol.for("react.context"), Pr = Symbol.for("react.forward_ref"), fr = Symbol.for("react.suspense"), hr = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), q = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), me = Symbol.for("react.default_value"), Ae = Symbol.iterator;
  function We(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case rr:
        return "Fragment";
      case Vn:
        return "Portal";
      case vr:
        return "Profiler";
      case yr:
        return "StrictMode";
      case fr:
        return "Suspense";
      case hr:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case ar:
          return (b.displayName || "Context") + ".Consumer";
        case dr:
          return (b._context.displayName || "Context") + ".Provider";
        case Pr:
          var P = b.render;
          return b = b.displayName, b || (b = P.displayName || P.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return P = b.displayName || null, P !== null ? P : We(b.type) || "Memo";
        case A:
          P = b._payload, b = b._init;
          try {
            return We(b(P));
          } catch {
          }
      }
    return null;
  }
  var rt = {};
  function ht(b, P) {
    if (b = b.contextTypes, !b)
      return rt;
    var $ = {}, G;
    for (G in b)
      $[G] = P[G];
    return $;
  }
  var ct = null;
  function _t(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var $ = P.parent;
      if (b === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        _t(b, $);
      }
      P.context._currentValue = P.value;
    }
  }
  function Dn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && Dn(b);
  }
  function wn(b) {
    var P = b.parent;
    P !== null && wn(P), b.context._currentValue = b.value;
  }
  function Tn(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? _t(b, P) : Tn(b, P);
  }
  function jn(b, P) {
    var $ = P.parent;
    if ($ === null)
      throw Error(t(402));
    b.depth === $.depth ? _t(b, $) : jn(b, $), P.context._currentValue = P.value;
  }
  function ne(b) {
    var P = ct;
    P !== b && (P === null ? wn(b) : b === null ? Dn(P) : P.depth === b.depth ? _t(P, b) : P.depth > b.depth ? Tn(P, b) : jn(P, b), ct = b);
  }
  var J = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function ce(b, P, $, G) {
    var Se = b.state !== void 0 ? b.state : null;
    b.updater = J, b.props = $, b.state = Se;
    var xe = { queue: [], replace: !1 };
    b._reactInternals = xe;
    var _e = P.contextType;
    if (b.context = typeof _e == "object" && _e !== null ? _e._currentValue : G, _e = P.getDerivedStateFromProps, typeof _e == "function" && (_e = _e($, Se), Se = _e == null ? Se : Ut({}, Se, _e), b.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && J.enqueueReplaceState(b, b.state, null), xe.queue !== null && 0 < xe.queue.length)
        if (P = xe.queue, _e = xe.replace, xe.queue = null, xe.replace = !1, _e && P.length === 1)
          b.state = P[0];
        else {
          for (xe = _e ? P[0] : b.state, Se = !0, _e = _e ? 1 : 0; _e < P.length; _e++) {
            var Ve = P[_e];
            Ve = typeof Ve == "function" ? Ve.call(b, xe, $, G) : Ve, Ve != null && (Se ? (Se = !1, xe = Ut({}, xe, Ve)) : Ut(xe, Ve));
          }
          b.state = xe;
        }
      else
        xe.queue = null;
  }
  var Pe = { id: 1, overflow: "" };
  function Rt(b, P, $) {
    var G = b.id;
    b = b.overflow;
    var Se = 32 - nn(G) - 1;
    G &= ~(1 << Se), $ += 1;
    var xe = 32 - nn(P) + Se;
    if (30 < xe) {
      var _e = Se - Se % 5;
      return xe = (G & (1 << _e) - 1).toString(32), G >>= _e, Se -= _e, { id: 1 << 32 - nn(P) + Se | $ << Se | G, overflow: xe + b };
    }
    return { id: 1 << xe | $ << Se | G, overflow: b };
  }
  var nn = Math.clz32 ? Math.clz32 : Ya, Un = Math.log, Rr = Math.LN2;
  function Ya(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (Un(b) / Rr | 0) | 0;
  }
  function ol(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var Xa = typeof Object.is == "function" ? Object.is : ol, pr = null, ea = null, ga = null, Qt = null, xr = !1, Bn = !1, Lr = 0, br = null, ya = 0;
  function Sr() {
    if (pr === null)
      throw Error(t(321));
    return pr;
  }
  function qn() {
    if (0 < ya)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function qa() {
    return Qt === null ? ga === null ? (xr = !1, ga = Qt = qn()) : (xr = !0, Qt = ga) : Qt.next === null ? (xr = !1, Qt = Qt.next = qn()) : (xr = !0, Qt = Qt.next), Qt;
  }
  function Ga() {
    ea = pr = null, Bn = !1, ga = null, ya = 0, Qt = br = null;
  }
  function Ki(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function Yi(b, P, $) {
    if (pr = Sr(), Qt = qa(), xr) {
      var G = Qt.queue;
      if (P = G.dispatch, br !== null && ($ = br.get(G), $ !== void 0)) {
        br.delete(G), G = Qt.memoizedState;
        do
          G = b(G, $.action), $ = $.next;
        while ($ !== null);
        return Qt.memoizedState = G, [G, P];
      }
      return [Qt.memoizedState, P];
    }
    return b = b === Ki ? typeof P == "function" ? P() : P : $ !== void 0 ? $(P) : P, Qt.memoizedState = b, b = Qt.queue = { last: null, dispatch: null }, b = b.dispatch = ll.bind(null, pr, b), [Qt.memoizedState, b];
  }
  function Xi(b, P) {
    if (pr = Sr(), Qt = qa(), P = P === void 0 ? null : P, Qt !== null) {
      var $ = Qt.memoizedState;
      if ($ !== null && P !== null) {
        var G = $[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var Se = 0; Se < G.length && Se < P.length; Se++)
              if (!Xa(P[Se], G[Se])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return $[0];
      }
    }
    return b = b(), Qt.memoizedState = [b, P], b;
  }
  function ll(b, P, $) {
    if (25 <= ya)
      throw Error(t(301));
    if (b === pr)
      if (Bn = !0, b = { action: $, next: null }, br === null && (br = /* @__PURE__ */ new Map()), $ = br.get(P), $ === void 0)
        br.set(P, b);
      else {
        for (P = $; P.next !== null; )
          P = P.next;
        P.next = b;
      }
  }
  function sl() {
    throw Error(t(394));
  }
  function va() {
  }
  var xa = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return Sr(), b._currentValue;
  }, useMemo: Xi, useReducer: Yi, useRef: function(b) {
    pr = Sr(), Qt = qa();
    var P = Qt.memoizedState;
    return P === null ? (b = { current: b }, Qt.memoizedState = b) : P;
  }, useState: function(b) {
    return Yi(Ki, b);
  }, useInsertionEffect: va, useLayoutEffect: function() {
  }, useCallback: function(b, P) {
    return Xi(function() {
      return b;
    }, P);
  }, useImperativeHandle: va, useEffect: va, useDebugValue: va, useDeferredValue: function(b) {
    return Sr(), b;
  }, useTransition: function() {
    return Sr(), [!1, sl];
  }, useId: function() {
    var b = ea.treeContext, P = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - nn(b) - 1)).toString(32) + P;
    var $ = ba;
    if ($ === null)
      throw Error(t(404));
    return P = Lr++, b = ":" + $.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return Sr(), P(b._source);
  }, useSyncExternalStore: function(b, P, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, ba = null, ta = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ul(b) {
    return console.error(b), null;
  }
  function na() {
  }
  function Za(b, P, $, G, Se, xe, _e, Ve, mt) {
    var Dt = [], Tt = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Tt, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? ul : Se, onAllReady: xe === void 0 ? na : xe, onShellReady: _e === void 0 ? na : _e, onShellError: Ve === void 0 ? na : Ve, onFatalError: mt === void 0 ? na : mt }, $ = Ir(P, 0, null, $, !1, !1), $.parentFlushed = !0, b = Qa(P, b, null, $, Tt, rt, null, Pe), Dt.push(b), P;
  }
  function Qa(b, P, $, G, Se, xe, _e, Ve) {
    b.allPendingTasks++, $ === null ? b.pendingRootTasks++ : $.pendingTasks++;
    var mt = { node: P, ping: function() {
      var Dt = b.pingedTasks;
      Dt.push(mt), Dt.length === 1 && eo(b);
    }, blockedBoundary: $, blockedSegment: G, abortSet: Se, legacyContext: xe, context: _e, treeContext: Ve };
    return Se.add(mt), mt;
  }
  function Ir(b, P, $, G, Se, xe) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: $, lastPushedText: Se, textEmbedded: xe };
  }
  function Hr(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function Sa(b, P) {
    var $ = b.onShellError;
    $(P), $ = b.onFatalError, $(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function qi(b, P, $, G, Se) {
    for (pr = {}, ea = P, Lr = 0, b = $(G, Se); Bn; )
      Bn = !1, Lr = 0, ya += 1, Qt = null, b = $(G, Se);
    return Ga(), b;
  }
  function Ja(b, P, $, G) {
    var Se = $.render(), xe = G.childContextTypes;
    if (xe != null) {
      var _e = P.legacyContext;
      if (typeof $.getChildContext != "function")
        G = _e;
      else {
        $ = $.getChildContext();
        for (var Ve in $)
          if (!(Ve in xe))
            throw Error(t(108, We(G) || "Unknown", Ve));
        G = Ut({}, _e, $);
      }
      P.legacyContext = G, In(b, P, Se), P.legacyContext = _e;
    } else
      In(b, P, Se);
  }
  function Gi(b, P) {
    if (b && b.defaultProps) {
      P = Ut({}, P), b = b.defaultProps;
      for (var $ in b)
        P[$] === void 0 && (P[$] = b[$]);
      return P;
    }
    return P;
  }
  function Ea(b, P, $, G, Se) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        Se = ht($, P.legacyContext);
        var xe = $.contextType;
        xe = new $(G, typeof xe == "object" && xe !== null ? xe._currentValue : Se), ce(xe, $, G, Se), Ja(b, P, xe, $);
      } else {
        xe = ht($, P.legacyContext), Se = qi(b, P, $, G, xe);
        var _e = Lr !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          ce(Se, $, G, xe), Ja(b, P, Se, $);
        else if (_e) {
          G = P.treeContext, P.treeContext = Rt(G, 1, 0);
          try {
            In(b, P, Se);
          } finally {
            P.treeContext = G;
          }
        } else
          In(b, P, Se);
      }
    else if (typeof $ == "string") {
      switch (Se = P.blockedSegment, xe = Ue(Se.chunks, $, G, b.responseState, Se.formatContext), Se.lastPushedText = !1, _e = Se.formatContext, Se.formatContext = te(_e, $, G), ka(b, P, xe), Se.formatContext = _e, $) {
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
          Se.chunks.push(Ge, c($), ut);
      }
      Se.lastPushedText = !1;
    } else {
      switch ($) {
        case be:
        case q:
        case yr:
        case vr:
        case rr:
          In(b, P, G.children);
          return;
        case hr:
          In(b, P, G.children);
          return;
        case z:
          throw Error(t(343));
        case fr:
          e: {
            $ = P.blockedBoundary, Se = P.blockedSegment, xe = G.fallback, G = G.children, _e = /* @__PURE__ */ new Set();
            var Ve = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: _e, errorDigest: null }, mt = Ir(b, Se.chunks.length, Ve, Se.formatContext, !1, !1);
            Se.children.push(mt), Se.lastPushedText = !1;
            var Dt = Ir(b, 0, null, Se.formatContext, !1, !1);
            Dt.parentFlushed = !0, P.blockedBoundary = Ve, P.blockedSegment = Dt;
            try {
              if (ka(
                b,
                P,
                G
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(I), Dt.status = 1, wa(Ve, Dt), Ve.pendingTasks === 0)
                break e;
            } catch (Tt) {
              Dt.status = 4, Ve.forceClientRender = !0, Ve.errorDigest = Hr(b, Tt);
            } finally {
              P.blockedBoundary = $, P.blockedSegment = Se;
            }
            P = Qa(b, xe, $, mt, _e, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case Pr:
            if (G = qi(b, P, $.render, G, Se), Lr !== 0) {
              $ = P.treeContext, P.treeContext = Rt($, 1, 0);
              try {
                In(b, P, G);
              } finally {
                P.treeContext = $;
              }
            } else
              In(b, P, G);
            return;
          case x:
            $ = $.type, G = Gi($, G), Ea(b, P, $, G, Se);
            return;
          case dr:
            if (Se = G.children, $ = $._context, G = G.value, xe = $._currentValue, $._currentValue = G, _e = ct, ct = G = { parent: _e, depth: _e === null ? 0 : _e.depth + 1, context: $, parentValue: xe, value: G }, P.context = G, In(b, P, Se), b = ct, b === null)
              throw Error(t(403));
            G = b.parentValue, b.context._currentValue = G === me ? b.context._defaultValue : G, b = ct = b.parent, P.context = b;
            return;
          case ar:
            G = G.children, G = G($._currentValue), In(b, P, G);
            return;
          case A:
            Se = $._init, $ = Se($._payload), G = Gi($, G), Ea(b, P, $, G, void 0);
            return;
        }
      throw Error(t(
        130,
        $ == null ? $ : typeof $,
        ""
      ));
    }
  }
  function In(b, P, $) {
    if (P.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case sn:
          Ea(b, P, $.type, $.props, $.ref);
          return;
        case Vn:
          throw Error(t(257));
        case A:
          var G = $._init;
          $ = G($._payload), In(b, P, $);
          return;
      }
      if (X($)) {
        Zi(b, P, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? G = null : (G = Ae && $[Ae] || $["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call($))) {
        if ($ = G.next(), !$.done) {
          var Se = [];
          do
            Se.push($.value), $ = G.next();
          while (!$.done);
          Zi(b, P, Se);
        }
        return;
      }
      throw b = Object.prototype.toString.call($), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : b));
    }
    typeof $ == "string" ? (G = P.blockedSegment, G.lastPushedText = ge(P.blockedSegment.chunks, $, b.responseState, G.lastPushedText)) : typeof $ == "number" && (G = P.blockedSegment, G.lastPushedText = ge(P.blockedSegment.chunks, "" + $, b.responseState, G.lastPushedText));
  }
  function Zi(b, P, $) {
    for (var G = $.length, Se = 0; Se < G; Se++) {
      var xe = P.treeContext;
      P.treeContext = Rt(xe, G, Se);
      try {
        ka(b, P, $[Se]);
      } finally {
        P.treeContext = xe;
      }
    }
  }
  function ka(b, P, $) {
    var G = P.blockedSegment.formatContext, Se = P.legacyContext, xe = P.context;
    try {
      return In(b, P, $);
    } catch (mt) {
      if (Ga(), typeof mt == "object" && mt !== null && typeof mt.then == "function") {
        $ = mt;
        var _e = P.blockedSegment, Ve = Ir(b, _e.chunks.length, null, _e.formatContext, _e.lastPushedText, !0);
        _e.children.push(Ve), _e.lastPushedText = !1, b = Qa(b, P.node, P.blockedBoundary, Ve, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, $.then(b, b), P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = xe, ne(xe);
      } else
        throw P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = xe, ne(xe), mt;
    }
  }
  function cl(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Ji(this, P, b);
  }
  function Qi(b, P, $) {
    var G = b.blockedBoundary;
    b.blockedSegment.status = 3, G === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, b = $ === void 0 ? Error(t(432)) : $, G.errorDigest = P.onError(b), G.parentFlushed && P.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(Se) {
      return Qi(Se, P, $);
    }), G.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (G = P.onAllReady, G()));
  }
  function wa(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var $ = P.children[0];
      $.id = P.id, $.parentFlushed = !0, $.status === 1 && wa(b, $);
    } else
      b.completedSegments.push(P);
  }
  function Ji(b, P, $) {
    if (P === null) {
      if ($.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = $;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = na, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && wa(P, $), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(cl, b), P.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (wa(P, $), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function eo(b) {
    if (b.status !== 2) {
      var P = ct, $ = ta.current;
      ta.current = xa;
      var G = ba;
      ba = b.responseState;
      try {
        var Se = b.pingedTasks, xe;
        for (xe = 0; xe < Se.length; xe++) {
          var _e = Se[xe], Ve = b, mt = _e.blockedSegment;
          if (mt.status === 0) {
            ne(_e.context);
            try {
              In(Ve, _e, _e.node), mt.lastPushedText && mt.textEmbedded && mt.chunks.push(I), _e.abortSet.delete(_e), mt.status = 1, Ji(Ve, _e.blockedBoundary, mt);
            } catch (Zn) {
              if (Ga(), typeof Zn == "object" && Zn !== null && typeof Zn.then == "function") {
                var Dt = _e.ping;
                Zn.then(Dt, Dt);
              } else {
                _e.abortSet.delete(_e), mt.status = 4;
                var Tt = _e.blockedBoundary, rn = Zn, Hn = Hr(Ve, rn);
                if (Tt === null ? Sa(Ve, rn) : (Tt.pendingTasks--, Tt.forceClientRender || (Tt.forceClientRender = !0, Tt.errorDigest = Hn, Tt.parentFlushed && Ve.clientRenderedBoundaries.push(Tt))), Ve.allPendingTasks--, Ve.allPendingTasks === 0) {
                  var Gn = Ve.onAllReady;
                  Gn();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, xe), b.destination !== null && ei(b, b.destination);
      } catch (Zn) {
        Hr(b, Zn), Sa(b, Zn);
      } finally {
        ba = G, ta.current = $, $ === xa && ne(P);
      }
    }
  }
  function Ta(b, P, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var G = $.id = b.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, b = b.responseState, a(P, ft), a(P, b.placeholderPrefix), b = c(G.toString(16)), a(P, b), l(P, At);
      case 1:
        $.status = 2;
        var Se = !0;
        G = $.chunks;
        var xe = 0;
        $ = $.children;
        for (var _e = 0; _e < $.length; _e++) {
          for (Se = $[_e]; xe < Se.index; xe++)
            a(P, G[xe]);
          Se = Ca(b, P, Se);
        }
        for (; xe < G.length - 1; xe++)
          a(P, G[xe]);
        return xe < G.length && (Se = l(P, G[xe])), Se;
      default:
        throw Error(t(390));
    }
  }
  function Ca(b, P, $) {
    var G = $.boundary;
    if (G === null)
      return Ta(b, P, $);
    if (G.parentFlushed = !0, G.forceClientRender)
      G = G.errorDigest, l(P, Nt), a(P, an), G && (a(P, En), a(P, c(B(G))), a(P, fn)), l(P, Re), Ta(b, P, $);
    else if (0 < G.pendingTasks) {
      G.rootSegmentID = b.nextSegmentId++, 0 < G.completedSegments.length && b.partialBoundaries.push(G);
      var Se = b.responseState, xe = Se.nextSuspenseID++;
      Se = d(Se.boundaryPrefix + xe.toString(16)), G = G.id = Se, jt(P, b.responseState, G), Ta(b, P, $);
    } else if (G.byteSize > b.progressiveChunkSize)
      G.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(G), jt(P, b.responseState, G.id), Ta(b, P, $);
    else {
      if (l(P, Yt), $ = G.completedSegments, $.length !== 1)
        throw Error(t(391));
      Ca(b, P, $[0]);
    }
    return l(P, Gt);
  }
  function to(b, P, $) {
    return en(P, b.responseState, $.formatContext, $.id), Ca(b, P, $), tn(P, $.formatContext);
  }
  function no(b, P, $) {
    for (var G = $.completedSegments, Se = 0; Se < G.length; Se++)
      ro(b, P, $, G[Se]);
    if (G.length = 0, b = b.responseState, G = $.id, $ = $.rootSegmentID, a(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? a(P, vn) : (b.sentCompleteBoundaryFunction = !0, a(P, hn)), G === null)
      throw Error(t(395));
    return $ = c($.toString(16)), a(P, G), a(P, on), a(P, b.segmentPrefix), a(P, $), l(P, pn);
  }
  function ro(b, P, $, G) {
    if (G.status === 2)
      return !0;
    var Se = G.id;
    if (Se === -1) {
      if ((G.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return to(b, P, G);
    }
    return to(b, P, G), b = b.responseState, a(P, b.startInlineScript), b.sentCompleteSegmentFunction ? a(P, Ot) : (b.sentCompleteSegmentFunction = !0, a(P, pt)), a(P, b.segmentPrefix), Se = c(Se.toString(16)), a(P, Se), a(P, Wt), a(P, b.placeholderPrefix), a(P, Se), l(P, Vt);
  }
  function ei(b, P) {
    r = new Uint8Array(512), n = 0;
    try {
      var $ = b.completedRootSegment;
      if ($ !== null && b.pendingRootTasks === 0) {
        Ca(b, P, $), b.completedRootSegment = null;
        var G = b.responseState.bootstrapChunks;
        for ($ = 0; $ < G.length - 1; $++)
          a(P, G[$]);
        $ < G.length && l(P, G[$]);
      }
      var Se = b.clientRenderedBoundaries, xe;
      for (xe = 0; xe < Se.length; xe++) {
        var _e = Se[xe];
        G = P;
        var Ve = b.responseState, mt = _e.id, Dt = _e.errorDigest, Tt = _e.errorMessage, rn = _e.errorComponentStack;
        if (a(G, Ve.startInlineScript), Ve.sentClientRenderFunction ? a(G, vt) : (Ve.sentClientRenderFunction = !0, a(
          G,
          Zt
        )), mt === null)
          throw Error(t(395));
        a(G, mt), a(G, un), (Dt || Tt || rn) && (a(G, ln), a(G, c(Ln(Dt || "")))), (Tt || rn) && (a(G, ln), a(G, c(Ln(Tt || "")))), rn && (a(G, ln), a(G, c(Ln(rn)))), l(G, kn);
      }
      Se.splice(0, xe);
      var Hn = b.completedBoundaries;
      for (xe = 0; xe < Hn.length; xe++)
        no(b, P, Hn[xe]);
      Hn.splice(0, xe), f(P), r = new Uint8Array(512), n = 0;
      var Gn = b.partialBoundaries;
      for (xe = 0; xe < Gn.length; xe++) {
        var Zn = Gn[xe];
        e: {
          Se = b, _e = P;
          var Aa = Zn.completedSegments;
          for (Ve = 0; Ve < Aa.length; Ve++)
            if (!ro(
              Se,
              _e,
              Zn,
              Aa[Ve]
            )) {
              Ve++, Aa.splice(0, Ve);
              var io = !1;
              break e;
            }
          Aa.splice(0, Ve), io = !0;
        }
        if (!io) {
          b.destination = null, xe++, Gn.splice(0, xe);
          return;
        }
      }
      Gn.splice(0, xe);
      var ti = b.completedBoundaries;
      for (xe = 0; xe < ti.length; xe++)
        no(b, P, ti[xe]);
      ti.splice(0, xe);
    } finally {
      f(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function ao(b, P) {
    try {
      var $ = b.abortableTasks;
      $.forEach(function(G) {
        return Qi(G, b, P);
      }), $.clear(), b.destination !== null && ei(b, b.destination);
    } catch (G) {
      Hr(b, G), Sa(b, G);
    }
  }
  return Lu.renderToReadableStream = function(b, P) {
    return new Promise(function($, G) {
      var Se, xe, _e = new Promise(function(Tt, rn) {
        xe = Tt, Se = rn;
      }), Ve = Za(b, ue(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), Y(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, xe, function() {
        var Tt = new ReadableStream({ type: "bytes", pull: function(rn) {
          if (Ve.status === 1)
            Ve.status = 2, g(rn, Ve.fatalError);
          else if (Ve.status !== 2 && Ve.destination === null) {
            Ve.destination = rn;
            try {
              ei(Ve, rn);
            } catch (Hn) {
              Hr(Ve, Hn), Sa(Ve, Hn);
            }
          }
        }, cancel: function() {
          ao(Ve);
        } }, { highWaterMark: 0 });
        Tt.allReady = _e, $(Tt);
      }, function(Tt) {
        _e.catch(function() {
        }), G(Tt);
      }, Se);
      if (P && P.signal) {
        var mt = P.signal, Dt = function() {
          ao(Ve, mt.reason), mt.removeEventListener("abort", Dt);
        };
        mt.addEventListener("abort", Dt);
      }
      eo(Ve);
    });
  }, Lu.version = "18.2.0", Lu;
}
var Oi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function wE() {
  return em || (em = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(o) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        l("warn", o, S);
      }
    }
    function a(o) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        l("error", o, S);
      }
    }
    function l(o, h, S) {
      {
        var C = r.ReactDebugCurrentFrame, F = C.getStackAddendum();
        F !== "" && (h += "%s", S = S.concat([F]));
        var Z = S.map(function(de) {
          return String(de);
        });
        Z.unshift("Warning: " + h), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    function f(o) {
      o();
    }
    function s(o) {
    }
    function c(o, h) {
      d(o, h);
    }
    function d(o, h) {
      return o.push(h);
    }
    function g(o) {
    }
    function y(o) {
      o.push(null);
    }
    function v(o) {
      return o;
    }
    function k(o) {
      return o;
    }
    function E(o, h) {
      o.destroy(h);
    }
    function M(o) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, S = h && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S;
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
    function R(o, h) {
      if (T(o))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(o)), m(o);
    }
    function O(o, h) {
      if (T(o))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(o)), m(o);
    }
    function N(o) {
      if (T(o))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", M(o)), m(o);
    }
    var _ = Object.prototype.hasOwnProperty, D = 0, B = 1, H = 2, U = 3, X = 4, Q = 5, K = 6, oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", W = new RegExp("^[" + oe + "][" + fe + "]*$"), ie = {}, re = {};
    function ue(o) {
      return _.call(re, o) ? !0 : _.call(ie, o) ? !1 : W.test(o) ? (re[o] = !0, !0) : (ie[o] = !0, a("Invalid attribute name: `%s`", o), !1);
    }
    function ee(o, h, S, C) {
      if (S !== null && S.type === D)
        return !1;
      switch (typeof h) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (C)
            return !1;
          if (S !== null)
            return !S.acceptsBooleans;
          var F = o.toLowerCase().slice(0, 5);
          return F !== "data-" && F !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Y(o) {
      return I.hasOwnProperty(o) ? I[o] : null;
    }
    function te(o, h, S, C, F, Z, de) {
      this.acceptsBooleans = h === H || h === U || h === X, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = o, this.type = h, this.sanitizeURL = Z, this.removeEmptyString = de;
    }
    var I = {}, ge = [
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
    ge.forEach(function(o) {
      I[o] = new te(
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
      var h = o[0], S = o[1];
      I[h] = new te(
        h,
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
      I[o] = new te(
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
      I[o] = new te(
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
      I[o] = new te(
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
      I[o] = new te(
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
      I[o] = new te(
        o,
        X,
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
      I[o] = new te(
        o,
        K,
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
      I[o] = new te(
        o,
        Q,
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
    var ve = /[\-\:]([a-z])/g, ke = function(o) {
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
      var h = o.replace(ve, ke);
      I[h] = new te(
        h,
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
      var h = o.replace(ve, ke);
      I[h] = new te(
        h,
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
      var h = o.replace(ve, ke);
      I[h] = new te(
        h,
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
      I[o] = new te(
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
    var Ne = "xlinkHref";
    I[Ne] = new te(
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
      I[o] = new te(
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
    function Qe(o, h) {
      return o + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Oe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(je).forEach(function(o) {
      Oe.forEach(function(h) {
        je[Qe(h, o)] = je[o];
      });
    });
    var ye = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function we(o, h) {
      ye[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function le(o, h) {
      if (o.indexOf("-") === -1)
        return typeof h.is == "string";
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
    var Be = {
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
    }, Me = {}, He = new RegExp("^(aria)-[" + fe + "]*$"), qe = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function et(o, h) {
      {
        if (_.call(Me, h) && Me[h])
          return !0;
        if (qe.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = Be.hasOwnProperty(S) ? S : null;
          if (C == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Me[h] = !0, !0;
          if (h !== C)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Me[h] = !0, !0;
        }
        if (He.test(h)) {
          var F = h.toLowerCase(), Z = Be.hasOwnProperty(F) ? F : null;
          if (Z == null)
            return Me[h] = !0, !1;
          if (h !== Z)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, Z), Me[h] = !0, !0;
        }
      }
      return !0;
    }
    function it(o, h) {
      {
        var S = [];
        for (var C in h) {
          var F = et(o, C);
          F || S.push(C);
        }
        var Z = S.map(function(de) {
          return "`" + de + "`";
        }).join(", ");
        S.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o) : S.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o);
      }
    }
    function st(o, h) {
      le(o, h) || it(o, h);
    }
    var at = !1;
    function Ze(o, h) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        h != null && h.value === null && !at && (at = !0, o === "select" && h.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var Ie = {
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
    }, Fe = function() {
    };
    {
      var dt = {}, Ue = /^on./, Ge = /^on[^A-Z]/, ut = new RegExp("^(aria)-[" + fe + "]*$"), ft = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      Fe = function(o, h, S, C) {
        if (_.call(dt, h) && dt[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dt[h] = !0, !0;
        if (C != null) {
          var Z = C.registrationNameDependencies, de = C.possibleRegistrationNames;
          if (Z.hasOwnProperty(h))
            return !0;
          var Te = de.hasOwnProperty(F) ? de[F] : null;
          if (Te != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", h, Te), dt[h] = !0, !0;
          if (Ue.test(h))
            return a("Unknown event handler property `%s`. It will be ignored.", h), dt[h] = !0, !0;
        } else if (Ue.test(h))
          return Ge.test(h) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), dt[h] = !0, !0;
        if (ut.test(h) || ft.test(h))
          return !0;
        if (F === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dt[h] = !0, !0;
        if (F === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dt[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), dt[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), dt[h] = !0, !0;
        var ze = Y(h), tt = ze !== null && ze.type === D;
        if (Ie.hasOwnProperty(F)) {
          var lt = Ie[F];
          if (lt !== h)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", h, lt), dt[h] = !0, !0;
        } else if (!tt && h !== F)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), dt[h] = !0, !0;
        return typeof S == "boolean" && ee(h, S, ze, !1) ? (S ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), dt[h] = !0, !0) : tt ? !0 : ee(h, S, ze, !1) ? (dt[h] = !0, !1) : ((S === "false" || S === "true") && ze !== null && ze.type === U && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), dt[h] = !0), !0);
      };
    }
    var At = function(o, h, S) {
      {
        var C = [];
        for (var F in h) {
          var Z = Fe(o, F, h[F], S);
          Z || C.push(F);
        }
        var de = C.map(function(Te) {
          return "`" + Te + "`";
        }).join(", ");
        C.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, o) : C.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, o);
      }
    };
    function Yt(o, h, S) {
      le(o, h) || At(o, h, S);
    }
    var qt = function() {
    };
    {
      var Lt = /^(?:webkit|moz|o)[A-Z]/, Nt = /^-ms-/, Gt = /-(.)/g, an = /;\s*$/, fn = {}, En = {}, Re = !1, jt = !1, Ft = function(o) {
        return o.replace(Gt, function(h, S) {
          return S.toUpperCase();
        });
      }, yn = function(o) {
        fn.hasOwnProperty(o) && fn[o] || (fn[o] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ft(o.replace(Nt, "ms-"))
        ));
      }, Pt = function(o) {
        fn.hasOwnProperty(o) && fn[o] || (fn[o] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, bt = function(o, h) {
        En.hasOwnProperty(h) && En[h] || (En[h] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, h.replace(an, "")));
      }, An = function(o, h) {
        Re || (Re = !0, a("`NaN` is an invalid value for the `%s` css style property.", o));
      }, Pn = function(o, h) {
        jt || (jt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      qt = function(o, h) {
        o.indexOf("-") > -1 ? yn(o) : Lt.test(o) ? Pt(o) : an.test(h) && bt(o, h), typeof h == "number" && (isNaN(h) ? An(o, h) : isFinite(h) || Pn(o, h));
      };
    }
    var bn = qt, Rn = /["'&<>]/;
    function De(o) {
      N(o);
      var h = "" + o, S = Rn.exec(h);
      if (!S)
        return h;
      var C, F = "", Z, de = 0;
      for (Z = S.index; Z < h.length; Z++) {
        switch (h.charCodeAt(Z)) {
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
        de !== Z && (F += h.substring(de, Z)), de = Z + 1, F += C;
      }
      return de !== Z ? F + h.substring(de, Z) : F;
    }
    function Ke(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : De(o);
    }
    var V = /([A-Z])/g, Ee = /^ms-/;
    function Xe(o) {
      return o.replace(V, "-$1").toLowerCase().replace(Ee, "-ms-");
    }
    var $e = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yt = !1;
    function ot(o) {
      !yt && $e.test(o) && (yt = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var xt = Array.isArray;
    function Mt(o) {
      return xt(o);
    }
    var Je = "<script>", $t = "<\/script>", It = '<script src="', en = '<script type="module" src="', tn = '" async=""><\/script>';
    function pt(o) {
      return N(o), ("" + o).replace(Ot, Wt);
    }
    var Ot = /(<\/|<)(s)(cript)/gi, Wt = function(o, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Vt(o, h, S, C, F) {
      var Z = o === void 0 ? "" : o, de = h === void 0 ? Je : '<script nonce="' + Ke(h) + '">', Te = [];
      if (S !== void 0 && Te.push(de, pt(S), $t), C !== void 0)
        for (var ze = 0; ze < C.length; ze++)
          Te.push(It, Ke(C[ze]), tn);
      if (F !== void 0)
        for (var tt = 0; tt < F.length; tt++)
          Te.push(en, Ke(F[tt]), tn);
      return {
        bootstrapChunks: Te,
        startInlineScript: de,
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
    var hn = 0, vn = 1, on = 2, pn = 3, Zt = 4, vt = 5, un = 6, kn = 7;
    function ln(o, h) {
      return {
        insertionMode: o,
        selectedValue: h
      };
    }
    function Xn(o, h, S) {
      switch (h) {
        case "select":
          return ln(vn, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return ln(on, null);
        case "math":
          return ln(pn, null);
        case "foreignObject":
          return ln(vn, null);
        case "table":
          return ln(Zt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ln(vt, null);
        case "colgroup":
          return ln(kn, null);
        case "tr":
          return ln(un, null);
      }
      return o.insertionMode >= Zt || o.insertionMode === hn ? ln(vn, null) : o;
    }
    var Ln = null;
    function Ut(o) {
      var h = o.nextSuspenseID++;
      return o.boundaryPrefix + h.toString(16);
    }
    function sn(o, h, S) {
      var C = o.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function Vn(o) {
      return Ke(o);
    }
    var rr = "<!-- -->";
    function yr(o, h, S, C) {
      return h === "" ? C : (C && o.push(rr), o.push(Vn(h)), !0);
    }
    function vr(o, h, S, C) {
      S && C && o.push(rr);
    }
    var dr = /* @__PURE__ */ new Map();
    function ar(o) {
      var h = dr.get(o);
      if (h !== void 0)
        return h;
      var S = Ke(Xe(o));
      return dr.set(o, S), S;
    }
    var Pr = ' style="', fr = ":", hr = ";";
    function x(o, h, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var F in S)
        if (_.call(S, F)) {
          var Z = S[F];
          if (!(Z == null || typeof Z == "boolean" || Z === "")) {
            var de = void 0, Te = void 0, ze = F.indexOf("--") === 0;
            ze ? (de = Ke(F), O(Z, F), Te = Ke(("" + Z).trim())) : (bn(F, Z), de = ar(F), typeof Z == "number" ? Z !== 0 && !_.call(je, F) ? Te = Z + "px" : Te = "" + Z : (O(Z, F), Te = Ke(("" + Z).trim()))), C ? (C = !1, o.push(Pr, de, fr, Te)) : o.push(hr, de, fr, Te);
          }
        }
      C || o.push(q);
    }
    var A = " ", z = '="', q = '"', be = '=""';
    function me(o, h, S, C) {
      switch (S) {
        case "style": {
          x(o, h, C);
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
        var F = Y(S);
        if (F !== null) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!F.acceptsBooleans)
                return;
          }
          var Z = F.attributeName, de = Z;
          switch (F.type) {
            case U:
              C && o.push(A, de, be);
              return;
            case X:
              C === !0 ? o.push(A, de, be) : C === !1 || o.push(A, de, z, Ke(C), q);
              return;
            case Q:
              isNaN(C) || o.push(A, de, z, Ke(C), q);
              break;
            case K:
              !isNaN(C) && C >= 1 && o.push(A, de, z, Ke(C), q);
              break;
            default:
              F.sanitizeURL && (R(C, Z), C = "" + C, ot(C)), o.push(A, de, z, Ke(C), q);
          }
        } else if (ue(S)) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Te = S.toLowerCase().slice(0, 5);
              if (Te !== "data-" && Te !== "aria-")
                return;
            }
          }
          o.push(A, S, z, Ke(C), q);
        }
      }
    }
    var Ae = ">", We = "/>";
    function rt(o, h, S) {
      if (h != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = h.__html;
        C != null && (N(C), o.push("" + C));
      }
    }
    var ht = !1, ct = !1, _t = !1, Dn = !1, wn = !1, Tn = !1, jn = !1;
    function ne(o, h) {
      {
        var S = o[h];
        if (S != null) {
          var C = Mt(S);
          o.multiple && !C ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !o.multiple && C && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function J(o, h, S) {
      we("select", h), ne(h, "value"), ne(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !_t && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), _t = !0), o.push(Bn("select"));
      var C = null, F = null;
      for (var Z in h)
        if (_.call(h, Z)) {
          var de = h[Z];
          if (de == null)
            continue;
          switch (Z) {
            case "children":
              C = de;
              break;
            case "dangerouslySetInnerHTML":
              F = de;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              me(o, S, Z, de);
              break;
          }
        }
      return o.push(Ae), rt(o, F, C), C;
    }
    function ce(o) {
      var h = "";
      return e.Children.forEach(o, function(S) {
        S != null && (h += S, !wn && typeof S != "string" && typeof S != "number" && (wn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Pe = ' selected=""';
    function Rt(o, h, S, C) {
      var F = C.selectedValue;
      o.push(Bn("option"));
      var Z = null, de = null, Te = null, ze = null;
      for (var tt in h)
        if (_.call(h, tt)) {
          var lt = h[tt];
          if (lt == null)
            continue;
          switch (tt) {
            case "children":
              Z = lt;
              break;
            case "selected":
              Te = lt, jn || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), jn = !0);
              break;
            case "dangerouslySetInnerHTML":
              ze = lt;
              break;
            case "value":
              de = lt;
            default:
              me(o, S, tt, lt);
              break;
          }
        }
      if (F != null) {
        var St;
        if (de !== null ? (R(de, "value"), St = "" + de) : (ze !== null && (Tn || (Tn = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), St = ce(Z)), Mt(F))
          for (var cn = 0; cn < F.length; cn++) {
            R(F[cn], "value");
            var $n = "" + F[cn];
            if ($n === St) {
              o.push(Pe);
              break;
            }
          }
        else
          R(F, "select.value"), "" + F === St && o.push(Pe);
      } else
        Te && o.push(Pe);
      return o.push(Ae), rt(o, ze, Z), Z;
    }
    function nn(o, h, S) {
      we("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !ct && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), ct = !0), h.value !== void 0 && h.defaultValue !== void 0 && !ht && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), ht = !0), o.push(Bn("input"));
      var C = null, F = null, Z = null, de = null;
      for (var Te in h)
        if (_.call(h, Te)) {
          var ze = h[Te];
          if (ze == null)
            continue;
          switch (Te) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              de = ze;
              break;
            case "defaultValue":
              F = ze;
              break;
            case "checked":
              Z = ze;
              break;
            case "value":
              C = ze;
              break;
            default:
              me(o, S, Te, ze);
              break;
          }
        }
      return Z !== null ? me(o, S, "checked", Z) : de !== null && me(o, S, "checked", de), C !== null ? me(o, S, "value", C) : F !== null && me(o, S, "value", F), o.push(We), null;
    }
    function Un(o, h, S) {
      we("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Dn && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dn = !0), o.push(Bn("textarea"));
      var C = null, F = null, Z = null;
      for (var de in h)
        if (_.call(h, de)) {
          var Te = h[de];
          if (Te == null)
            continue;
          switch (de) {
            case "children":
              Z = Te;
              break;
            case "value":
              C = Te;
              break;
            case "defaultValue":
              F = Te;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              me(o, S, de, Te);
              break;
          }
        }
      if (C === null && F !== null && (C = F), o.push(Ae), Z != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Mt(Z)) {
          if (Z.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          N(Z[0]), C = "" + Z[0];
        }
        N(Z), C = "" + Z;
      }
      return typeof C == "string" && C[0] === `
` && o.push(ea), C !== null && (R(C, "value"), o.push(Vn("" + C))), null;
    }
    function Rr(o, h, S, C) {
      o.push(Bn(S));
      for (var F in h)
        if (_.call(h, F)) {
          var Z = h[F];
          if (Z == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              me(o, C, F, Z);
              break;
          }
        }
      return o.push(We), null;
    }
    function Ya(o, h, S) {
      o.push(Bn("menuitem"));
      for (var C in h)
        if (_.call(h, C)) {
          var F = h[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              me(o, S, C, F);
              break;
          }
        }
      return o.push(Ae), null;
    }
    function ol(o, h, S) {
      o.push(Bn("title"));
      var C = null;
      for (var F in h)
        if (_.call(h, F)) {
          var Z = h[F];
          if (Z == null)
            continue;
          switch (F) {
            case "children":
              C = Z;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              me(o, S, F, Z);
              break;
          }
        }
      o.push(Ae);
      {
        var de = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && de.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && typeof de != "string" && typeof de != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function Xa(o, h, S, C) {
      o.push(Bn(S));
      var F = null, Z = null;
      for (var de in h)
        if (_.call(h, de)) {
          var Te = h[de];
          if (Te == null)
            continue;
          switch (de) {
            case "children":
              F = Te;
              break;
            case "dangerouslySetInnerHTML":
              Z = Te;
              break;
            default:
              me(o, C, de, Te);
              break;
          }
        }
      return o.push(Ae), rt(o, Z, F), typeof F == "string" ? (o.push(Vn(F)), null) : F;
    }
    function pr(o, h, S, C) {
      o.push(Bn(S));
      var F = null, Z = null;
      for (var de in h)
        if (_.call(h, de)) {
          var Te = h[de];
          if (Te == null)
            continue;
          switch (de) {
            case "children":
              F = Te;
              break;
            case "dangerouslySetInnerHTML":
              Z = Te;
              break;
            case "style":
              x(o, C, Te);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ue(de) && typeof Te != "function" && typeof Te != "symbol" && o.push(A, de, z, Ke(Te), q);
              break;
          }
        }
      return o.push(Ae), rt(o, Z, F), F;
    }
    var ea = `
`;
    function ga(o, h, S, C) {
      o.push(Bn(S));
      var F = null, Z = null;
      for (var de in h)
        if (_.call(h, de)) {
          var Te = h[de];
          if (Te == null)
            continue;
          switch (de) {
            case "children":
              F = Te;
              break;
            case "dangerouslySetInnerHTML":
              Z = Te;
              break;
            default:
              me(o, C, de, Te);
              break;
          }
        }
      if (o.push(Ae), Z != null) {
        if (F != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Z != "object" || !("__html" in Z))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var ze = Z.__html;
        ze != null && (typeof ze == "string" && ze.length > 0 && ze[0] === `
` ? o.push(ea, ze) : (N(ze), o.push("" + ze)));
      }
      return typeof F == "string" && F[0] === `
` && o.push(ea), F;
    }
    var Qt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xr = /* @__PURE__ */ new Map();
    function Bn(o) {
      var h = xr.get(o);
      if (h === void 0) {
        if (!Qt.test(o))
          throw new Error("Invalid tag: " + o);
        h = "<" + o, xr.set(o, h);
      }
      return h;
    }
    var Lr = "<!DOCTYPE html>";
    function br(o, h, S, C, F) {
      switch (st(h, S), Ze(h, S), Yt(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== on && F.insertionMode !== pn && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return J(o, S, C);
        case "option":
          return Rt(o, S, C, F);
        case "textarea":
          return Un(o, S, C);
        case "input":
          return nn(o, S, C);
        case "menuitem":
          return Ya(o, S, C);
        case "title":
          return ol(o, S, C);
        case "listing":
        case "pre":
          return ga(o, S, h, C);
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
          return Rr(o, S, h, C);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Xa(o, S, h, C);
        case "html":
          return F.insertionMode === hn && o.push(Lr), Xa(o, S, h, C);
        default:
          return h.indexOf("-") === -1 && typeof S.is != "string" ? Xa(o, S, h, C) : pr(o, S, h, C);
      }
    }
    var ya = "</", Sr = ">";
    function qn(o, h, S) {
      switch (h) {
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
          o.push(ya, h, Sr);
      }
    }
    function qa(o, h) {
      for (var S = h.bootstrapChunks, C = 0; C < S.length - 1; C++)
        c(o, S[C]);
      return C < S.length ? d(o, S[C]) : !0;
    }
    var Ga = '<template id="', Ki = '"></template>';
    function Yi(o, h, S) {
      c(o, Ga), c(o, h.placeholderPrefix);
      var C = S.toString(16);
      return c(o, C), d(o, Ki);
    }
    var Xi = "<!--$-->", ll = '<!--$?--><template id="', sl = '"></template>', va = "<!--$!-->", xa = "<!--/$-->", ba = "<template", ta = '"', ul = ' data-dgst="', na = ' data-msg="', Za = ' data-stck="', Qa = "></template>";
    function Ir(o, h) {
      return d(o, Xi);
    }
    function Hr(o, h, S) {
      if (c(o, ll), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(o, S), d(o, sl);
    }
    function Sa(o, h, S, C, F) {
      var Z;
      return Z = d(o, va), c(o, ba), S && (c(o, ul), c(o, Ke(S)), c(o, ta)), C && (c(o, na), c(o, Ke(C)), c(o, ta)), F && (c(o, Za), c(o, Ke(F)), c(o, ta)), Z = d(o, Qa), Z;
    }
    function qi(o, h) {
      return d(o, xa);
    }
    function Ja(o, h) {
      return d(o, xa);
    }
    function Gi(o, h) {
      return d(o, xa);
    }
    var Ea = '<div hidden id="', In = '">', Zi = "</div>", ka = '<svg aria-hidden="true" style="display:none" id="', cl = '">', Qi = "</svg>", wa = '<math aria-hidden="true" style="display:none" id="', Ji = '">', eo = "</math>", Ta = '<table hidden id="', Ca = '">', to = "</table>", no = '<table hidden><tbody id="', ro = '">', ei = "</tbody></table>", ao = '<table hidden><tr id="', b = '">', P = "</tr></table>", $ = '<table hidden><colgroup id="', G = '">', Se = "</colgroup></table>";
    function xe(o, h, S, C) {
      switch (S.insertionMode) {
        case hn:
        case vn:
          return c(o, Ea), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, In);
        case on:
          return c(o, ka), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, cl);
        case pn:
          return c(o, wa), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, Ji);
        case Zt:
          return c(o, Ta), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, Ca);
        case vt:
          return c(o, no), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, ro);
        case un:
          return c(o, ao), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, b);
        case kn:
          return c(o, $), c(o, h.segmentPrefix), c(o, C.toString(16)), d(o, G);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function _e(o, h) {
      switch (h.insertionMode) {
        case hn:
        case vn:
          return d(o, Zi);
        case on:
          return d(o, Qi);
        case pn:
          return d(o, eo);
        case Zt:
          return d(o, to);
        case vt:
          return d(o, ei);
        case un:
          return d(o, P);
        case kn:
          return d(o, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ve = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", mt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Tt = Ve + ';$RS("', rn = '$RS("', Hn = '","', Gn = '")<\/script>';
    function Zn(o, h, S) {
      c(o, h.startInlineScript), h.sentCompleteSegmentFunction ? c(o, rn) : (h.sentCompleteSegmentFunction = !0, c(o, Tt)), c(o, h.segmentPrefix);
      var C = S.toString(16);
      return c(o, C), c(o, Hn), c(o, h.placeholderPrefix), c(o, C), d(o, Gn);
    }
    var Aa = mt + ';$RC("', io = '$RC("', ti = '","', Mc = '")<\/script>';
    function _c(o, h, S, C) {
      if (c(o, h.startInlineScript), h.sentCompleteBoundaryFunction ? c(o, io) : (h.sentCompleteBoundaryFunction = !0, c(o, Aa)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var F = C.toString(16);
      return c(o, S), c(o, ti), c(o, h.segmentPrefix), c(o, F), d(o, Mc);
    }
    var Nc = Dt + ';$RX("', Fc = '$RX("', $c = '"', zc = ")<\/script>", dl = ",";
    function Bc(o, h, S, C, F, Z) {
      if (c(o, h.startInlineScript), h.sentClientRenderFunction ? c(o, Fc) : (h.sentClientRenderFunction = !0, c(o, Nc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(o, S), c(o, $c), (C || F || Z) && (c(o, dl), c(o, fl(C || ""))), (F || Z) && (c(o, dl), c(o, fl(F || ""))), Z && (c(o, dl), c(o, fl(Z))), d(o, zc);
    }
    var Ic = /[<\u2028\u2029]/g;
    function fl(o) {
      var h = JSON.stringify(o);
      return h.replace(Ic, function(S) {
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
    function Hc(o, h) {
      var S = Vt(h, void 0);
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
    function hl() {
      return {
        insertionMode: vn,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ls(o, h, S, C) {
      return S.generateStaticMarkup ? (o.push(Ke(h)), !1) : yr(o, h, S, C);
    }
    function Ds(o, h, S, C) {
      if (!h.generateStaticMarkup)
        return vr(o, h, S, C);
    }
    function pl(o, h) {
      return h.generateStaticMarkup ? !0 : Ir(o);
    }
    function ir(o, h, S, C, F) {
      return h.generateStaticMarkup ? !0 : Sa(o, h, S, C, F);
    }
    function Wc(o, h) {
      return h.generateStaticMarkup ? !0 : qi(o);
    }
    function Os(o, h) {
      return h.generateStaticMarkup ? !0 : Gi(o);
    }
    var Qn = Object.assign, Ms = Symbol.for("react.element"), ml = Symbol.for("react.portal"), oo = Symbol.for("react.fragment"), lo = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), ni = Symbol.for("react.provider"), ri = Symbol.for("react.context"), ai = Symbol.for("react.forward_ref"), Pa = Symbol.for("react.suspense"), gl = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), uo = Symbol.for("react.lazy"), Vc = Symbol.for("react.scope"), _s = Symbol.for("react.debug_trace_mode"), jc = Symbol.for("react.legacy_hidden"), Uc = Symbol.for("react.default_value"), Ns = Symbol.iterator, Fs = "@@iterator";
    function gn(o) {
      if (o === null || typeof o != "object")
        return null;
      var h = Ns && o[Ns] || o[Fs];
      return typeof h == "function" ? h : null;
    }
    function ii(o, h, S) {
      var C = o.displayName;
      if (C)
        return C;
      var F = h.displayName || h.name || "";
      return F !== "" ? S + "(" + F + ")" : S;
    }
    function vl(o) {
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
        case oo:
          return "Fragment";
        case ml:
          return "Portal";
        case so:
          return "Profiler";
        case lo:
          return "StrictMode";
        case Pa:
          return "Suspense";
        case gl:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case ri:
            var h = o;
            return vl(h) + ".Consumer";
          case ni:
            var S = o;
            return vl(S._context) + ".Provider";
          case ai:
            return ii(o, o.render, "ForwardRef");
          case yl:
            var C = o.displayName || null;
            return C !== null ? C : mn(o.type) || "Memo";
          case uo: {
            var F = o, Z = F._payload, de = F._init;
            try {
              return mn(de(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ra = 0, xl, bl, Sl, El, kl, $s, zs;
    function co() {
    }
    co.__reactDisabledLog = !0;
    function wl() {
      {
        if (Ra === 0) {
          xl = console.log, bl = console.info, Sl = console.warn, El = console.error, kl = console.group, $s = console.groupCollapsed, zs = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: co,
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
        Ra++;
      }
    }
    function oi() {
      {
        if (Ra--, Ra === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qn({}, o, {
              value: xl
            }),
            info: Qn({}, o, {
              value: bl
            }),
            warn: Qn({}, o, {
              value: Sl
            }),
            error: Qn({}, o, {
              value: El
            }),
            group: Qn({}, o, {
              value: kl
            }),
            groupCollapsed: Qn({}, o, {
              value: $s
            }),
            groupEnd: Qn({}, o, {
              value: zs
            })
          });
        }
        Ra < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var li = r.ReactCurrentDispatcher, La;
    function si(o, h, S) {
      {
        if (La === void 0)
          try {
            throw Error();
          } catch (F) {
            var C = F.stack.trim().match(/\n( *(at )?)/);
            La = C && C[1] || "";
          }
        return `
` + La + o;
      }
    }
    var ui = !1, fo;
    {
      var Bs = typeof WeakMap == "function" ? WeakMap : Map;
      fo = new Bs();
    }
    function Tl(o, h) {
      if (!o || ui)
        return "";
      {
        var S = fo.get(o);
        if (S !== void 0)
          return S;
      }
      var C;
      ui = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = li.current, li.current = null, wl();
      try {
        if (h) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (ur) {
              C = ur;
            }
            Reflect.construct(o, [], de);
          } else {
            try {
              de.call();
            } catch (ur) {
              C = ur;
            }
            o.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ur) {
            C = ur;
          }
          o();
        }
      } catch (ur) {
        if (ur && C && typeof ur.stack == "string") {
          for (var Te = ur.stack.split(`
`), ze = C.stack.split(`
`), tt = Te.length - 1, lt = ze.length - 1; tt >= 1 && lt >= 0 && Te[tt] !== ze[lt]; )
            lt--;
          for (; tt >= 1 && lt >= 0; tt--, lt--)
            if (Te[tt] !== ze[lt]) {
              if (tt !== 1 || lt !== 1)
                do
                  if (tt--, lt--, lt < 0 || Te[tt] !== ze[lt]) {
                    var St = `
` + Te[tt].replace(" at new ", " at ");
                    return o.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", o.displayName)), typeof o == "function" && fo.set(o, St), St;
                  }
                while (tt >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        ui = !1, li.current = Z, oi(), Error.prepareStackTrace = F;
      }
      var cn = o ? o.displayName || o.name : "", $n = cn ? si(cn) : "";
      return typeof o == "function" && fo.set(o, $n), $n;
    }
    function Cl(o, h, S) {
      return Tl(o, !0);
    }
    function Al(o, h, S) {
      return Tl(o, !1);
    }
    function Is(o) {
      var h = o.prototype;
      return !!(h && h.isReactComponent);
    }
    function Da(o, h, S) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Tl(o, Is(o));
      if (typeof o == "string")
        return si(o);
      switch (o) {
        case Pa:
          return si("Suspense");
        case gl:
          return si("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case ai:
            return Al(o.render);
          case yl:
            return Da(o.type, h, S);
          case uo: {
            var C = o, F = C._payload, Z = C._init;
            try {
              return Da(Z(F), h, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Pl = {}, ho = r.ReactDebugCurrentFrame;
    function ra(o) {
      if (o) {
        var h = o._owner, S = Da(o.type, o._source, h ? h.type : null);
        ho.setExtraStackFrame(S);
      } else
        ho.setExtraStackFrame(null);
    }
    function Rl(o, h, S, C, F) {
      {
        var Z = Function.call.bind(_);
        for (var de in o)
          if (Z(o, de)) {
            var Te = void 0;
            try {
              if (typeof o[de] != "function") {
                var ze = Error((C || "React class") + ": " + S + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              Te = o[de](h, de, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Te = tt;
            }
            Te && !(Te instanceof Error) && (ra(F), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, de, typeof Te), ra(null)), Te instanceof Error && !(Te.message in Pl) && (Pl[Te.message] = !0, ra(F), a("Failed %s type: %s", S, Te.message), ra(null));
          }
      }
    }
    var Ll;
    Ll = {};
    var Wr = {};
    Object.freeze(Wr);
    function Hs(o, h) {
      {
        var S = o.contextTypes;
        if (!S)
          return Wr;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var Z = mn(o) || "Unknown";
          Rl(S, C, "context", Z);
        }
        return C;
      }
    }
    function aa(o, h, S, C) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var F = mn(h) || "Unknown";
            Ll[F] || (Ll[F] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var Z = o.getChildContext();
        for (var de in Z)
          if (!(de in C))
            throw new Error((mn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Te = mn(h) || "Unknown";
          Rl(C, Z, "child context", Te);
        }
        return Qn({}, S, Z);
      }
    }
    var ia;
    ia = {};
    var Dl = null, Er = null;
    function po(o) {
      o.context._currentValue2 = o.parentValue;
    }
    function mo(o) {
      o.context._currentValue2 = o.value;
    }
    function ci(o, h) {
      if (o !== h) {
        po(o);
        var S = o.parent, C = h.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ci(S, C);
        }
        mo(h);
      }
    }
    function Ol(o) {
      po(o);
      var h = o.parent;
      h !== null && Ol(h);
    }
    function di(o) {
      var h = o.parent;
      h !== null && di(h), mo(o);
    }
    function Ws(o, h) {
      po(o);
      var S = o.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === h.depth ? ci(S, h) : Ws(S, h);
    }
    function Vs(o, h) {
      var S = h.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === S.depth ? ci(o, S) : Vs(o, S), mo(h);
    }
    function go(o) {
      var h = Er, S = o;
      h !== S && (h === null ? di(S) : S === null ? Ol(h) : h.depth === S.depth ? ci(h, S) : h.depth > S.depth ? Ws(h, S) : Vs(h, S), Er = S);
    }
    function fi(o, h) {
      var S;
      S = o._currentValue2, o._currentValue2 = h, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ia && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ia;
      var C = Er, F = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: o,
        parentValue: S,
        value: h
      };
      return Er = F, F;
    }
    function Ml(o) {
      var h = Er;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== o && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = h.parentValue;
        S === Uc ? h.context._currentValue2 = h.context._defaultValue : h.context._currentValue2 = S, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== ia && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = ia;
      }
      return Er = h.parent;
    }
    function Kc() {
      return Er;
    }
    function Oa(o) {
      var h = o._currentValue2;
      return h;
    }
    function yo(o) {
      return o._reactInternals;
    }
    function _l(o, h) {
      o._reactInternals = h;
    }
    var vo = {}, xo = {}, hi, bo, Ma, pi, So, _a, Eo, ko, wo;
    {
      hi = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), Ma = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), pi = /* @__PURE__ */ new Set(), ko = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set();
      var js = /* @__PURE__ */ new Set();
      _a = function(o, h) {
        if (!(o === null || typeof o == "function")) {
          var S = h + "_" + o;
          js.has(S) || (js.add(S), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, o));
        }
      }, So = function(o, h) {
        if (h === void 0) {
          var S = mn(o) || "Component";
          pi.has(S) || (pi.add(S), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Us(o, h) {
      {
        var S = o.constructor, C = S && mn(S) || "ReactClass", F = C + "." + h;
        if (vo[F])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, C), vo[F] = !0;
      }
    }
    var Ks = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, h, S) {
        var C = yo(o);
        C.queue === null ? Us(o, "setState") : (C.queue.push(h), S != null && _a(S, "setState"));
      },
      enqueueReplaceState: function(o, h, S) {
        var C = yo(o);
        C.replace = !0, C.queue = [h], S != null && _a(S, "setState");
      },
      enqueueForceUpdate: function(o, h) {
        var S = yo(o);
        S.queue === null ? Us(o, "forceUpdate") : h != null && _a(h, "setState");
      }
    };
    function Yc(o, h, S, C, F) {
      var Z = S(F, C);
      So(h, Z);
      var de = Z == null ? C : Qn({}, C, Z);
      return de;
    }
    function Xc(o, h, S) {
      var C = Wr, F = o.contextType;
      if ("contextType" in o) {
        var Z = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ri && F._context === void 0
        );
        if (!Z && !wo.has(o)) {
          wo.add(o);
          var de = "";
          F === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? de = " However, it is set to a " + typeof F + "." : F.$$typeof === ni ? de = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(o) || "Component", de);
        }
      }
      typeof F == "object" && F !== null ? C = Oa(F) : C = S;
      var Te = new o(h, C);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (Te.state === null || Te.state === void 0)) {
          var ze = mn(o) || "Component";
          hi.has(ze) || (hi.add(ze), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", ze, Te.state === null ? "null" : "undefined", ze));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof Te.getSnapshotBeforeUpdate == "function") {
          var tt = null, lt = null, St = null;
          if (typeof Te.componentWillMount == "function" && Te.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Te.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Te.componentWillReceiveProps == "function" && Te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? lt = "componentWillReceiveProps" : typeof Te.UNSAFE_componentWillReceiveProps == "function" && (lt = "UNSAFE_componentWillReceiveProps"), typeof Te.componentWillUpdate == "function" && Te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? St = "componentWillUpdate" : typeof Te.UNSAFE_componentWillUpdate == "function" && (St = "UNSAFE_componentWillUpdate"), tt !== null || lt !== null || St !== null) {
            var cn = mn(o) || "Component", $n = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ma.has(cn) || (Ma.add(cn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, cn, $n, tt !== null ? `
  ` + tt : "", lt !== null ? `
  ` + lt : "", St !== null ? `
  ` + St : ""));
          }
        }
      }
      return Te;
    }
    function Ys(o, h, S) {
      {
        var C = mn(h) || "Component", F = o.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), o.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), o.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), o.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !ko.has(h) && (ko.add(h), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof o.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(h) || "A pure component"), typeof o.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof o.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof o.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof o.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var Z = o.props !== S;
        o.props !== void 0 && Z && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), o.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !bo.has(h) && (bo.add(h), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(h))), typeof o.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof o.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var de = o.state;
        de && (typeof de != "object" || Mt(de)) && a("%s.state: must be set to an object or null", C), typeof o.getChildContext == "function" && typeof h.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function qc(o, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = mn(o) || "Unknown";
          xo[C] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), xo[C] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(o) || "Component"), Ks.enqueueReplaceState(h, h.state, null));
    }
    function Gc(o, h, S, C) {
      if (o.queue !== null && o.queue.length > 0) {
        var F = o.queue, Z = o.replace;
        if (o.queue = null, o.replace = !1, Z && F.length === 1)
          h.state = F[0];
        else {
          for (var de = Z ? F[0] : h.state, Te = !0, ze = Z ? 1 : 0; ze < F.length; ze++) {
            var tt = F[ze], lt = typeof tt == "function" ? tt.call(h, de, S, C) : tt;
            lt != null && (Te ? (Te = !1, de = Qn({}, de, lt)) : Qn(de, lt));
          }
          h.state = de;
        }
      } else
        o.queue = null;
    }
    function To(o, h, S, C) {
      Ys(o, h, S);
      var F = o.state !== void 0 ? o.state : null;
      o.updater = Ks, o.props = S, o.state = F;
      var Z = {
        queue: [],
        replace: !1
      };
      _l(o, Z);
      var de = h.contextType;
      if (typeof de == "object" && de !== null ? o.context = Oa(de) : o.context = C, o.state === S) {
        var Te = mn(h) || "Component";
        Eo.has(Te) || (Eo.add(Te), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Te));
      }
      var ze = h.getDerivedStateFromProps;
      typeof ze == "function" && (o.state = Yc(o, h, ze, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (qc(h, o), Gc(Z, o, S, C));
    }
    var Co = {
      id: 1,
      overflow: ""
    };
    function Zc(o) {
      var h = o.overflow, S = o.id, C = S & ~Qc(S);
      return C.toString(32) + h;
    }
    function Nl(o, h, S) {
      var C = o.id, F = o.overflow, Z = Ao(C) - 1, de = C & ~(1 << Z), Te = S + 1, ze = Ao(h) + Z;
      if (ze > 30) {
        var tt = Z - Z % 5, lt = (1 << tt) - 1, St = (de & lt).toString(32), cn = de >> tt, $n = Z - tt, ur = Ao(h) + $n, mu = Te << $n, gu = mu | cn, yu = St + F;
        return {
          id: 1 << ur | gu,
          overflow: yu
        };
      } else {
        var Vo = Te << Z, hy = Vo | de, py = F;
        return {
          id: 1 << ze | hy,
          overflow: py
        };
      }
    }
    function Ao(o) {
      return 32 - Jc(o);
    }
    function Qc(o) {
      return 1 << Ao(o) - 1;
    }
    var Jc = Math.clz32 ? Math.clz32 : Dr, ed = Math.log, td = Math.LN2;
    function Dr(o) {
      var h = o >>> 0;
      return h === 0 ? 32 : 31 - (ed(h) / td | 0) | 0;
    }
    function Fl(o, h) {
      return o === h && (o !== 0 || 1 / o === 1 / h) || o !== o && h !== h;
    }
    var Po = typeof Object.is == "function" ? Object.is : Fl, zt = null, oa = null, la = null, Xt = null, or = !1, sa = !1, Ro = 0, Fn = null, Or = 0, ua = 25, kr = !1, ca;
    function Mr() {
      if (zt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return kr && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), zt;
    }
    function nd(o, h) {
      if (h === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ca), !1;
      o.length !== h.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ca, "[" + o.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var S = 0; S < h.length && S < o.length; S++)
        if (!Po(o[S], h[S]))
          return !1;
      return !0;
    }
    function Xs() {
      if (Or > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Lo() {
      return Xt === null ? la === null ? (or = !1, la = Xt = Xs()) : (or = !0, Xt = la) : Xt.next === null ? (or = !1, Xt = Xt.next = Xs()) : (or = !0, Xt = Xt.next), Xt;
    }
    function $l(o, h) {
      zt = h, oa = o, kr = !1, Ro = 0;
    }
    function rd(o, h, S, C) {
      for (; sa; )
        sa = !1, Ro = 0, Or += 1, Xt = null, S = o(h, C);
      return mi(), S;
    }
    function qs() {
      var o = Ro !== 0;
      return o;
    }
    function mi() {
      kr = !1, zt = null, oa = null, sa = !1, la = null, Or = 0, Fn = null, Xt = null;
    }
    function ad(o) {
      return kr && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Oa(o);
    }
    function Gs(o) {
      return ca = "useContext", Mr(), Oa(o);
    }
    function Do(o, h) {
      return typeof h == "function" ? h(o) : h;
    }
    function id(o) {
      return ca = "useState", Zs(
        Do,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function Zs(o, h, S) {
      if (o !== Do && (ca = "useReducer"), zt = Mr(), Xt = Lo(), or) {
        var C = Xt.queue, F = C.dispatch;
        if (Fn !== null) {
          var Z = Fn.get(C);
          if (Z !== void 0) {
            Fn.delete(C);
            var de = Xt.memoizedState, Te = Z;
            do {
              var ze = Te.action;
              kr = !0, de = o(de, ze), kr = !1, Te = Te.next;
            } while (Te !== null);
            return Xt.memoizedState = de, [de, F];
          }
        }
        return [Xt.memoizedState, F];
      } else {
        kr = !0;
        var tt;
        o === Do ? tt = typeof h == "function" ? h() : h : tt = S !== void 0 ? S(h) : h, kr = !1, Xt.memoizedState = tt;
        var lt = Xt.queue = {
          last: null,
          dispatch: null
        }, St = lt.dispatch = sd.bind(null, zt, lt);
        return [Xt.memoizedState, St];
      }
    }
    function Qs(o, h) {
      zt = Mr(), Xt = Lo();
      var S = h === void 0 ? null : h;
      if (Xt !== null) {
        var C = Xt.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (nd(S, F))
            return C[0];
        }
      }
      kr = !0;
      var Z = o();
      return kr = !1, Xt.memoizedState = [Z, S], Z;
    }
    function od(o) {
      zt = Mr(), Xt = Lo();
      var h = Xt.memoizedState;
      if (h === null) {
        var S = {
          current: o
        };
        return Object.seal(S), Xt.memoizedState = S, S;
      } else
        return h;
    }
    function ld(o, h) {
      ca = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function sd(o, h, S) {
      if (Or >= ua)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === zt) {
        sa = !0;
        var C = {
          action: S,
          next: null
        };
        Fn === null && (Fn = /* @__PURE__ */ new Map());
        var F = Fn.get(h);
        if (F === void 0)
          Fn.set(h, C);
        else {
          for (var Z = F; Z.next !== null; )
            Z = Z.next;
          Z.next = C;
        }
      }
    }
    function ud(o, h) {
      return Qs(function() {
        return o;
      }, h);
    }
    function cd(o, h, S) {
      return Mr(), h(o._source);
    }
    function dd(o, h, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function fd(o) {
      return Mr(), o;
    }
    function Oo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Js() {
      return Mr(), [!1, Oo];
    }
    function zl() {
      var o = oa, h = Zc(o.treeContext), S = yi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Ro++;
      return sn(S, h, C);
    }
    function gi() {
    }
    var eu = {
      readContext: ad,
      useContext: Gs,
      useMemo: Qs,
      useReducer: Zs,
      useRef: od,
      useState: id,
      useInsertionEffect: gi,
      useLayoutEffect: ld,
      useCallback: ud,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: gi,
      // Effects are not run in the server environment.
      useEffect: gi,
      // Debugging effect
      useDebugValue: gi,
      useDeferredValue: fd,
      useTransition: Js,
      useId: zl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: cd,
      useSyncExternalStore: dd
    }, yi = null;
    function Mo(o) {
      yi = o;
    }
    function Bl(o) {
      try {
        var h = "", S = o;
        do {
          switch (S.tag) {
            case 0:
              h += si(S.type, null, null);
              break;
            case 1:
              h += Al(S.type, null, null);
              break;
            case 2:
              h += Cl(S.type, null, null);
              break;
          }
          S = S.parent;
        } while (S);
        return h;
      } catch (C) {
        return `
Error generating stack: ` + C.message + `
` + C.stack;
      }
    }
    var Vr = r.ReactCurrentDispatcher, _o = r.ReactDebugCurrentFrame, No = 0, da = 1, tu = 2, Il = 3, fa = 4, hd = 0, nu = 1, wr = 2, pd = 12800;
    function md(o) {
      return console.error(o), null;
    }
    function vi() {
    }
    function Hl(o, h, S, C, F, Z, de, Te, ze) {
      var tt = [], lt = /* @__PURE__ */ new Set(), St = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? pd : C,
        status: hd,
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
        onError: F === void 0 ? md : F,
        onAllReady: Z === void 0 ? vi : Z,
        onShellReady: de === void 0 ? vi : de,
        onShellError: Te === void 0 ? vi : Te,
        onFatalError: ze === void 0 ? vi : ze
      }, cn = jr(
        St,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      cn.parentFlushed = !0;
      var $n = xi(St, o, null, cn, lt, Wr, Dl, Co);
      return tt.push($n), St;
    }
    function Fo(o, h) {
      var S = o.pingedTasks;
      S.push(h), S.length === 1 && f(function() {
        return hu(o);
      });
    }
    function _r(o, h) {
      return {
        id: Ln,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: h,
        errorDigest: null
      };
    }
    function xi(o, h, S, C, F, Z, de, Te) {
      o.allPendingTasks++, S === null ? o.pendingRootTasks++ : S.pendingTasks++;
      var ze = {
        node: h,
        ping: function() {
          return Fo(o, ze);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: F,
        legacyContext: Z,
        context: de,
        treeContext: Te
      };
      return ze.componentStack = null, F.add(ze), ze;
    }
    function jr(o, h, S, C, F, Z) {
      return {
        status: No,
        id: -1,
        // lazily assigned later
        index: h,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: C,
        boundary: S,
        lastPushedText: F,
        textEmbedded: Z
      };
    }
    var Tr = null;
    function Wl() {
      return Tr === null || Tr.componentStack === null ? "" : Bl(Tr.componentStack);
    }
    function lr(o, h) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: h
      };
    }
    function Na(o, h) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: h
      };
    }
    function Vl(o, h) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: h
      };
    }
    function sr(o) {
      o.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var Ur = null;
    function jl(o, h) {
      {
        var S;
        typeof h == "string" ? S = h : h && typeof h.message == "string" ? S = h.message : S = String(h);
        var C = Ur || Wl();
        Ur = null, o.errorMessage = S, o.errorComponentStack = C;
      }
    }
    function bi(o, h) {
      var S = o.onError(h);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function $o(o, h) {
      var S = o.onShellError;
      S(h);
      var C = o.onFatalError;
      C(h), o.destination !== null ? (o.status = wr, E(o.destination, h)) : (o.status = nu, o.fatalError = h);
    }
    function ru(o, h, S) {
      lr(h, "Suspense");
      var C = h.blockedBoundary, F = h.blockedSegment, Z = S.fallback, de = S.children, Te = /* @__PURE__ */ new Set(), ze = _r(o, Te), tt = F.chunks.length, lt = jr(
        o,
        tt,
        ze,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(lt), F.lastPushedText = !1;
      var St = jr(
        o,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      St.parentFlushed = !0, h.blockedBoundary = ze, h.blockedSegment = St;
      try {
        if (zo(o, h, de), Ds(St.chunks, o.responseState, St.lastPushedText, St.textEmbedded), St.status = da, ki(ze, St), ze.pendingTasks === 0) {
          sr(h);
          return;
        }
      } catch ($n) {
        St.status = fa, ze.forceClientRender = !0, ze.errorDigest = bi(o, $n), jl(ze, $n);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var cn = xi(o, Z, C, lt, Te, h.legacyContext, h.context, h.treeContext);
      cn.componentStack = h.componentStack, o.pingedTasks.push(cn), sr(h);
    }
    function au(o, h, S, C) {
      lr(h, S);
      var F = h.blockedSegment, Z = br(F.chunks, S, C, o.responseState, F.formatContext);
      F.lastPushedText = !1;
      var de = F.formatContext;
      F.formatContext = Xn(de, S, C), zo(o, h, Z), F.formatContext = de, qn(F.chunks, S), F.lastPushedText = !1, sr(h);
    }
    function gd(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Ul(o, h, S, C, F) {
      var Z = {};
      $l(h, Z);
      var de = S(C, F);
      return rd(S, C, de, F);
    }
    function Si(o, h, S, C, F) {
      var Z = S.render();
      S.props !== F && (ql || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(C) || "a component"), ql = !0);
      {
        var de = C.childContextTypes;
        if (de != null) {
          var Te = h.legacyContext, ze = aa(S, C, Te, de);
          h.legacyContext = ze, er(o, h, Z), h.legacyContext = Te;
          return;
        }
      }
      er(o, h, Z);
    }
    function iu(o, h, S, C) {
      Vl(h, S);
      var F = Hs(S, h.legacyContext), Z = Xc(S, C, F);
      To(Z, S, C, F), Si(o, h, Z, S, C), sr(h);
    }
    var Kl = {}, Ei = {}, Yl = {}, Xl = {}, ql = !1, ou = !1, lu = !1, Gl = !1;
    function yd(o, h, S, C) {
      var F;
      if (F = Hs(S, h.legacyContext), Na(h, S), S.prototype && typeof S.prototype.render == "function") {
        var Z = mn(S) || "Unknown";
        Kl[Z] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Z, Z), Kl[Z] = !0);
      }
      var de = Ul(o, h, S, C, F), Te = qs();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var ze = mn(S) || "Unknown";
        Ei[ze] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ze, ze, ze), Ei[ze] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var tt = mn(S) || "Unknown";
          Ei[tt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), Ei[tt] = !0);
        }
        To(de, S, C, F), Si(o, h, de, S, C);
      } else if (vd(S), Te) {
        var lt = h.treeContext, St = 1, cn = 0;
        h.treeContext = Nl(lt, St, cn);
        try {
          er(o, h, de);
        } finally {
          h.treeContext = lt;
        }
      } else
        er(o, h, de);
      sr(h);
    }
    function vd(o) {
      {
        if (o && o.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var h = mn(o) || "Unknown";
          Xl[h] || (a("%s: Function components do not support getDerivedStateFromProps.", h), Xl[h] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var S = mn(o) || "Unknown";
          Yl[S] || (a("%s: Function components do not support contextType.", S), Yl[S] = !0);
        }
      }
    }
    function su(o, h) {
      if (o && o.defaultProps) {
        var S = Qn({}, h), C = o.defaultProps;
        for (var F in C)
          S[F] === void 0 && (S[F] = C[F]);
        return S;
      }
      return h;
    }
    function xd(o, h, S, C, F) {
      Na(h, S.render);
      var Z = Ul(o, h, S.render, C, F), de = qs();
      if (de) {
        var Te = h.treeContext, ze = 1, tt = 0;
        h.treeContext = Nl(Te, ze, tt);
        try {
          er(o, h, Z);
        } finally {
          h.treeContext = Te;
        }
      } else
        er(o, h, Z);
      sr(h);
    }
    function bd(o, h, S, C, F) {
      var Z = S.type, de = su(Z, C);
      Ql(o, h, Z, de, F);
    }
    function Zl(o, h, S, C) {
      S._context === void 0 ? S !== S.Consumer && (Gl || (Gl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var F = C.children;
      typeof F != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Z = Oa(S), de = F(Z);
      er(o, h, de);
    }
    function Sd(o, h, S, C) {
      var F = S._context, Z = C.value, de = C.children, Te;
      Te = h.context, h.context = fi(F, Z), er(o, h, de), h.context = Ml(F), Te !== h.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Jn(o, h, S, C, F) {
      lr(h, "Lazy");
      var Z = S._payload, de = S._init, Te = de(Z), ze = su(Te, C);
      Ql(o, h, Te, ze, F), sr(h);
    }
    function Ql(o, h, S, C, F) {
      if (typeof S == "function")
        if (gd(S)) {
          iu(o, h, S, C);
          return;
        } else {
          yd(o, h, S, C);
          return;
        }
      if (typeof S == "string") {
        au(o, h, S, C);
        return;
      }
      switch (S) {
        case jc:
        case _s:
        case lo:
        case so:
        case oo: {
          er(o, h, C.children);
          return;
        }
        case gl: {
          lr(h, "SuspenseList"), er(o, h, C.children), sr(h);
          return;
        }
        case Vc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Pa: {
          ru(o, h, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case ai: {
            xd(o, h, S, C, F);
            return;
          }
          case yl: {
            bd(o, h, S, C, F);
            return;
          }
          case ni: {
            Sd(o, h, S, C);
            return;
          }
          case ri: {
            Zl(o, h, S, C);
            return;
          }
          case uo: {
            Jn(o, h, S, C);
            return;
          }
        }
      var Z = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Z));
    }
    function uu(o, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (ou || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ou = !0), o.entries === h && (lu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lu = !0);
    }
    function er(o, h, S) {
      try {
        return Jl(o, h, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Ur = Ur !== null ? Ur : Wl()), C;
      }
    }
    function Jl(o, h, S) {
      if (h.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ms: {
            var C = S, F = C.type, Z = C.props, de = C.ref;
            Ql(o, h, F, Z, de);
            return;
          }
          case ml:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case uo: {
            var Te = S, ze = Te._payload, tt = Te._init, lt;
            try {
              lt = tt(ze);
            } catch (Vo) {
              throw typeof Vo == "object" && Vo !== null && typeof Vo.then == "function" && lr(h, "Lazy"), Vo;
            }
            er(o, h, lt);
            return;
          }
        }
        if (Mt(S)) {
          cu(o, h, S);
          return;
        }
        var St = gn(S);
        if (St) {
          uu(S, St);
          var cn = St.call(S);
          if (cn) {
            var $n = cn.next();
            if (!$n.done) {
              var ur = [];
              do
                ur.push($n.value), $n = cn.next();
              while (!$n.done);
              cu(o, h, ur);
              return;
            }
            return;
          }
        }
        var mu = Object.prototype.toString.call(S);
        throw new Error("Objects are not valid as a React child (found: " + (mu === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : mu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof S == "string") {
        var gu = h.blockedSegment;
        gu.lastPushedText = Ls(h.blockedSegment.chunks, S, o.responseState, gu.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var yu = h.blockedSegment;
        yu.lastPushedText = Ls(h.blockedSegment.chunks, "" + S, o.responseState, yu.lastPushedText);
        return;
      }
      typeof S == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function cu(o, h, S) {
      for (var C = S.length, F = 0; F < C; F++) {
        var Z = h.treeContext;
        h.treeContext = Nl(Z, C, F);
        try {
          zo(o, h, S[F]);
        } finally {
          h.treeContext = Z;
        }
      }
    }
    function Ed(o, h, S) {
      var C = h.blockedSegment, F = C.chunks.length, Z = jr(
        o,
        F,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(Z), C.lastPushedText = !1;
      var de = xi(o, h.node, h.blockedBoundary, Z, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (de.componentStack = h.componentStack.parent);
      var Te = de.ping;
      S.then(Te, Te);
    }
    function zo(o, h, S) {
      var C = h.blockedSegment.formatContext, F = h.legacyContext, Z = h.context, de = null;
      de = h.componentStack;
      try {
        return er(o, h, S);
      } catch (Te) {
        if (mi(), typeof Te == "object" && Te !== null && typeof Te.then == "function") {
          Ed(o, h, Te), h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Z, go(Z), h.componentStack = de;
          return;
        } else
          throw h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Z, go(Z), h.componentStack = de, Te;
      }
    }
    function Bo(o, h, S, C) {
      var F = bi(o, C);
      if (h === null ? $o(o, C) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = F, jl(h, C), h.parentFlushed && o.clientRenderedBoundaries.push(h))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function du(o) {
      var h = this, S = o.blockedBoundary, C = o.blockedSegment;
      C.status = Il, wi(h, S, C);
    }
    function fu(o, h, S) {
      var C = o.blockedBoundary, F = o.blockedSegment;
      if (F.status = Il, C === null)
        h.allPendingTasks--, h.status !== wr && (h.status = wr, h.destination !== null && y(h.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var Z = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = h.onError(Z);
          {
            var de = "The server did not finish this Suspense boundary: ";
            Z && typeof Z.message == "string" ? Z = de + Z.message : Z = de + String(Z);
            var Te = Tr;
            Tr = o;
            try {
              jl(C, Z);
            } finally {
              Tr = Te;
            }
          }
          C.parentFlushed && h.clientRenderedBoundaries.push(C);
        }
        if (C.fallbackAbortableTasks.forEach(function(tt) {
          return fu(tt, h, S);
        }), C.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var ze = h.onAllReady;
          ze();
        }
      }
    }
    function ki(o, h) {
      if (h.chunks.length === 0 && h.children.length === 1 && h.children[0].boundary === null) {
        var S = h.children[0];
        S.id = h.id, S.parentFlushed = !0, S.status === da && ki(o, S);
      } else {
        var C = o.completedSegments;
        C.push(h);
      }
    }
    function wi(o, h, S) {
      if (h === null) {
        if (S.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = S;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = vi;
          var C = o.onShellReady;
          C();
        }
      } else if (h.pendingTasks--, !h.forceClientRender) {
        if (h.pendingTasks === 0)
          S.parentFlushed && S.status === da && ki(h, S), h.parentFlushed && o.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(du, o), h.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === da) {
          ki(h, S);
          var F = h.completedSegments;
          F.length === 1 && h.parentFlushed && o.partialBoundaries.push(h);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function Io(o, h) {
      var S = h.blockedSegment;
      if (S.status === No) {
        go(h.context);
        var C = null;
        C = Tr, Tr = h;
        try {
          er(o, h, h.node), Ds(S.chunks, o.responseState, S.lastPushedText, S.textEmbedded), h.abortSet.delete(h), S.status = da, wi(o, h.blockedBoundary, S);
        } catch (Z) {
          if (mi(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
            var F = h.ping;
            Z.then(F, F);
          } else
            h.abortSet.delete(h), S.status = fa, Bo(o, h.blockedBoundary, S, Z);
        } finally {
          Tr = C;
        }
      }
    }
    function hu(o) {
      if (o.status !== wr) {
        var h = Kc(), S = Vr.current;
        Vr.current = eu;
        var C;
        C = _o.getCurrentStack, _o.getCurrentStack = Wl;
        var F = yi;
        Mo(o.responseState);
        try {
          var Z = o.pingedTasks, de;
          for (de = 0; de < Z.length; de++) {
            var Te = Z[de];
            Io(o, Te);
          }
          Z.splice(0, de), o.destination !== null && Wo(o, o.destination);
        } catch (ze) {
          bi(o, ze), $o(o, ze);
        } finally {
          Mo(F), Vr.current = S, _o.getCurrentStack = C, S === eu && go(h);
        }
      }
    }
    function Ti(o, h, S) {
      switch (S.parentFlushed = !0, S.status) {
        case No: {
          var C = S.id = o.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Yi(h, o.responseState, C);
        }
        case da: {
          S.status = tu;
          for (var F = !0, Z = S.chunks, de = 0, Te = S.children, ze = 0; ze < Te.length; ze++) {
            for (var tt = Te[ze]; de < tt.index; de++)
              c(h, Z[de]);
            F = Ci(o, h, tt);
          }
          for (; de < Z.length - 1; de++)
            c(h, Z[de]);
          return de < Z.length && (F = d(h, Z[de])), F;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ci(o, h, S) {
      var C = S.boundary;
      if (C === null)
        return Ti(o, h, S);
      if (C.parentFlushed = !0, C.forceClientRender)
        return ir(h, o.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), Ti(o, h, S), Os(h, o.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = o.nextSegmentId++, C.completedSegments.length > 0 && o.partialBoundaries.push(C);
        var F = C.id = Ut(o.responseState);
        return Hr(h, o.responseState, F), Ti(o, h, S), Ja(h, o.responseState);
      } else {
        if (C.byteSize > o.progressiveChunkSize)
          return C.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(C), Hr(h, o.responseState, C.id), Ti(o, h, S), Ja(h, o.responseState);
        pl(h, o.responseState);
        var Z = C.completedSegments;
        if (Z.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var de = Z[0];
        return Ci(o, h, de), Wc(h, o.responseState);
      }
    }
    function kd(o, h, S) {
      return Bc(h, o.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function es(o, h, S) {
      return xe(h, o.responseState, S.formatContext, S.id), Ci(o, h, S), _e(h, S.formatContext);
    }
    function Ho(o, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Z = C[F];
        pu(o, h, S, Z);
      }
      return C.length = 0, _c(h, o.responseState, S.id, S.rootSegmentID);
    }
    function wd(o, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Z = C[F];
        if (!pu(o, h, S, Z))
          return F++, C.splice(0, F), !1;
      }
      return C.splice(0, F), !0;
    }
    function pu(o, h, S, C) {
      if (C.status === tu)
        return !0;
      var F = C.id;
      if (F === -1) {
        var Z = C.id = S.rootSegmentID;
        if (Z === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return es(o, h, C);
      } else
        return es(o, h, C), Zn(h, o.responseState, F);
    }
    function Wo(o, h) {
      try {
        var S = o.completedRootSegment;
        S !== null && o.pendingRootTasks === 0 && (Ci(o, h, S), o.completedRootSegment = null, qa(h, o.responseState));
        var C = o.clientRenderedBoundaries, F;
        for (F = 0; F < C.length; F++) {
          var Z = C[F];
          if (!kd(o, h, Z)) {
            o.destination = null, F++, C.splice(0, F);
            return;
          }
        }
        C.splice(0, F);
        var de = o.completedBoundaries;
        for (F = 0; F < de.length; F++) {
          var Te = de[F];
          if (!Ho(o, h, Te)) {
            o.destination = null, F++, de.splice(0, F);
            return;
          }
        }
        de.splice(0, F);
        var ze = o.partialBoundaries;
        for (F = 0; F < ze.length; F++) {
          var tt = ze[F];
          if (!wd(o, h, tt)) {
            o.destination = null, F++, ze.splice(0, F);
            return;
          }
        }
        ze.splice(0, F);
        var lt = o.completedBoundaries;
        for (F = 0; F < lt.length; F++) {
          var St = lt[F];
          if (!Ho(o, h, St)) {
            o.destination = null, F++, lt.splice(0, F);
            return;
          }
        }
        lt.splice(0, F);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), y(h));
      }
    }
    function Td(o) {
      f(function() {
        return hu(o);
      });
    }
    function u(o, h) {
      if (o.status === nu) {
        o.status = wr, E(h, o.fatalError);
        return;
      }
      if (o.status !== wr && o.destination === null) {
        o.destination = h;
        try {
          Wo(o, h);
        } catch (S) {
          bi(o, S), $o(o, S);
        }
      }
    }
    function p(o, h) {
      try {
        var S = o.abortableTasks;
        S.forEach(function(C) {
          return fu(C, o, h);
        }), S.clear(), o.destination !== null && Wo(o, o.destination);
      } catch (C) {
        bi(o, C), $o(o, C);
      }
    }
    function w() {
    }
    function L(o, h, S, C) {
      var F = !1, Z = null, de = "", Te = {
        push: function(St) {
          return St !== null && (de += St), !0;
        },
        destroy: function(St) {
          F = !0, Z = St;
        }
      }, ze = !1;
      function tt() {
        ze = !0;
      }
      var lt = Hl(o, Hc(S, h ? h.identifierPrefix : void 0), hl(), 1 / 0, w, void 0, tt, void 0, void 0);
      if (Td(lt), p(lt, C), u(lt, Te), F)
        throw Z;
      if (!ze)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return de;
    }
    function j(o, h) {
      return L(o, h, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ae(o, h) {
      return L(o, h, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ce() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Oi.renderToNodeStream = pe, Oi.renderToStaticMarkup = ae, Oi.renderToStaticNodeStream = Ce, Oi.renderToString = j, Oi.version = t;
  }()), Oi;
}
var Du = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function TE() {
  return tm || (tm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), L = 1; L < p; L++)
          w[L - 1] = arguments[L];
        l("warn", u, w);
      }
    }
    function a(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), L = 1; L < p; L++)
          w[L - 1] = arguments[L];
        l("error", u, w);
      }
    }
    function l(u, p, w) {
      {
        var L = r.ReactDebugCurrentFrame, j = L.getStackAddendum();
        j !== "" && (p += "%s", w = w.concat([j]));
        var ae = w.map(function(pe) {
          return String(pe);
        });
        ae.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, ae);
      }
    }
    function f(u) {
      u();
    }
    var s = 512, c = null, d = 0;
    function g(u) {
      c = new Uint8Array(s), d = 0;
    }
    function y(u, p) {
      if (p.length !== 0) {
        if (p.length > s) {
          d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = new Uint8Array(s), d = 0), u.enqueue(p);
          return;
        }
        var w = p, L = c.length - d;
        L < w.length && (L === 0 ? u.enqueue(c) : (c.set(w.subarray(0, L), d), u.enqueue(c), w = w.subarray(L)), c = new Uint8Array(s), d = 0), c.set(w, d), d += w.length;
      }
    }
    function v(u, p) {
      return y(u, p), !0;
    }
    function k(u) {
      c && d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = null, d = 0);
    }
    function E(u) {
      u.close();
    }
    var M = new TextEncoder();
    function T(u) {
      return M.encode(u);
    }
    function m(u) {
      return M.encode(u);
    }
    function R(u, p) {
      typeof u.error == "function" ? u.error(p) : u.close();
    }
    function O(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return w;
      }
    }
    function N(u) {
      try {
        return _(u), !1;
      } catch {
        return !0;
      }
    }
    function _(u) {
      return "" + u;
    }
    function D(u, p) {
      if (N(u))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), _(u);
    }
    function B(u, p) {
      if (N(u))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), _(u);
    }
    function H(u) {
      if (N(u))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(u)), _(u);
    }
    var U = Object.prototype.hasOwnProperty, X = 0, Q = 1, K = 2, oe = 3, fe = 4, W = 5, ie = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ue = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ee = new RegExp("^[" + re + "][" + ue + "]*$"), Y = {}, te = {};
    function I(u) {
      return U.call(te, u) ? !0 : U.call(Y, u) ? !1 : ee.test(u) ? (te[u] = !0, !0) : (Y[u] = !0, a("Invalid attribute name: `%s`", u), !1);
    }
    function ge(u, p, w, L) {
      if (w !== null && w.type === X)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (L)
            return !1;
          if (w !== null)
            return !w.acceptsBooleans;
          var j = u.toLowerCase().slice(0, 5);
          return j !== "data-" && j !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ve(u) {
      return Ne.hasOwnProperty(u) ? Ne[u] : null;
    }
    function ke(u, p, w, L, j, ae, pe) {
      this.acceptsBooleans = p === K || p === oe || p === fe, this.attributeName = L, this.attributeNamespace = j, this.mustUseProperty = w, this.propertyName = u, this.type = p, this.sanitizeURL = ae, this.removeEmptyString = pe;
    }
    var Ne = {}, je = [
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
    je.forEach(function(u) {
      Ne[u] = new ke(
        u,
        X,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(u) {
      var p = u[0], w = u[1];
      Ne[p] = new ke(
        p,
        Q,
        !1,
        // mustUseProperty
        w,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(u) {
      Ne[u] = new ke(
        u,
        K,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(u) {
      Ne[u] = new ke(
        u,
        K,
        !1,
        // mustUseProperty
        u,
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
    ].forEach(function(u) {
      Ne[u] = new ke(
        u,
        oe,
        !1,
        // mustUseProperty
        u.toLowerCase(),
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
    ].forEach(function(u) {
      Ne[u] = new ke(
        u,
        oe,
        !0,
        // mustUseProperty
        u,
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
    ].forEach(function(u) {
      Ne[u] = new ke(
        u,
        fe,
        !1,
        // mustUseProperty
        u,
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
    ].forEach(function(u) {
      Ne[u] = new ke(
        u,
        ie,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(u) {
      Ne[u] = new ke(
        u,
        W,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Qe = /[\-\:]([a-z])/g, Oe = function(u) {
      return u[1].toUpperCase();
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
    ].forEach(function(u) {
      var p = u.replace(Qe, Oe);
      Ne[p] = new ke(
        p,
        Q,
        !1,
        // mustUseProperty
        u,
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
    ].forEach(function(u) {
      var p = u.replace(Qe, Oe);
      Ne[p] = new ke(
        p,
        Q,
        !1,
        // mustUseProperty
        u,
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
    ].forEach(function(u) {
      var p = u.replace(Qe, Oe);
      Ne[p] = new ke(
        p,
        Q,
        !1,
        // mustUseProperty
        u,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(u) {
      Ne[u] = new ke(
        u,
        Q,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ye = "xlinkHref";
    Ne[ye] = new ke(
      "xlinkHref",
      Q,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(u) {
      Ne[u] = new ke(
        u,
        Q,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var we = {
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
    function le(u, p) {
      return u + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var Be = ["Webkit", "ms", "Moz", "O"];
    Object.keys(we).forEach(function(u) {
      Be.forEach(function(p) {
        we[le(p, u)] = we[u];
      });
    });
    var Me = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function He(u, p) {
      Me[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function qe(u, p) {
      if (u.indexOf("-") === -1)
        return typeof p.is == "string";
      switch (u) {
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
    }, it = {}, st = new RegExp("^(aria)-[" + ue + "]*$"), at = new RegExp("^(aria)[A-Z][" + ue + "]*$");
    function Ze(u, p) {
      {
        if (U.call(it, p) && it[p])
          return !0;
        if (at.test(p)) {
          var w = "aria-" + p.slice(4).toLowerCase(), L = et.hasOwnProperty(w) ? w : null;
          if (L == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), it[p] = !0, !0;
          if (p !== L)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, L), it[p] = !0, !0;
        }
        if (st.test(p)) {
          var j = p.toLowerCase(), ae = et.hasOwnProperty(j) ? j : null;
          if (ae == null)
            return it[p] = !0, !1;
          if (p !== ae)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ae), it[p] = !0, !0;
        }
      }
      return !0;
    }
    function Ie(u, p) {
      {
        var w = [];
        for (var L in p) {
          var j = Ze(u, L);
          j || w.push(L);
        }
        var ae = w.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u) : w.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u);
      }
    }
    function Fe(u, p) {
      qe(u, p) || Ie(u, p);
    }
    var dt = !1;
    function Ue(u, p) {
      {
        if (u !== "input" && u !== "textarea" && u !== "select")
          return;
        p != null && p.value === null && !dt && (dt = !0, u === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", u) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", u));
      }
    }
    var Ge = {
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
    }, ut = function() {
    };
    {
      var ft = {}, At = /^on./, Yt = /^on[^A-Z]/, qt = new RegExp("^(aria)-[" + ue + "]*$"), Lt = new RegExp("^(aria)[A-Z][" + ue + "]*$");
      ut = function(u, p, w, L) {
        if (U.call(ft, p) && ft[p])
          return !0;
        var j = p.toLowerCase();
        if (j === "onfocusin" || j === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ft[p] = !0, !0;
        if (L != null) {
          var ae = L.registrationNameDependencies, pe = L.possibleRegistrationNames;
          if (ae.hasOwnProperty(p))
            return !0;
          var Ce = pe.hasOwnProperty(j) ? pe[j] : null;
          if (Ce != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, Ce), ft[p] = !0, !0;
          if (At.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ft[p] = !0, !0;
        } else if (At.test(p))
          return Yt.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ft[p] = !0, !0;
        if (qt.test(p) || Lt.test(p))
          return !0;
        if (j === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ft[p] = !0, !0;
        if (j === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ft[p] = !0, !0;
        if (j === "is" && w !== null && w !== void 0 && typeof w != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof w), ft[p] = !0, !0;
        if (typeof w == "number" && isNaN(w))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ft[p] = !0, !0;
        var o = ve(p), h = o !== null && o.type === X;
        if (Ge.hasOwnProperty(j)) {
          var S = Ge[j];
          if (S !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, S), ft[p] = !0, !0;
        } else if (!h && p !== j)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, j), ft[p] = !0, !0;
        return typeof w == "boolean" && ge(p, w, o, !1) ? (w ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', w, p, p, w, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', w, p, p, w, p, p, p), ft[p] = !0, !0) : h ? !0 : ge(p, w, o, !1) ? (ft[p] = !0, !1) : ((w === "false" || w === "true") && o !== null && o.type === oe && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", w, p, w === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, w), ft[p] = !0), !0);
      };
    }
    var Nt = function(u, p, w) {
      {
        var L = [];
        for (var j in p) {
          var ae = ut(u, j, p[j], w);
          ae || L.push(j);
        }
        var pe = L.map(function(Ce) {
          return "`" + Ce + "`";
        }).join(", ");
        L.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u) : L.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u);
      }
    };
    function Gt(u, p, w) {
      qe(u, p) || Nt(u, p, w);
    }
    var an = function() {
    };
    {
      var fn = /^(?:webkit|moz|o)[A-Z]/, En = /^-ms-/, Re = /-(.)/g, jt = /;\s*$/, Ft = {}, yn = {}, Pt = !1, bt = !1, An = function(u) {
        return u.replace(Re, function(p, w) {
          return w.toUpperCase();
        });
      }, Pn = function(u) {
        Ft.hasOwnProperty(u) && Ft[u] || (Ft[u] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          u,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          An(u.replace(En, "ms-"))
        ));
      }, bn = function(u) {
        Ft.hasOwnProperty(u) && Ft[u] || (Ft[u] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", u, u.charAt(0).toUpperCase() + u.slice(1)));
      }, Rn = function(u, p) {
        yn.hasOwnProperty(p) && yn[p] || (yn[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, u, p.replace(jt, "")));
      }, De = function(u, p) {
        Pt || (Pt = !0, a("`NaN` is an invalid value for the `%s` css style property.", u));
      }, Ke = function(u, p) {
        bt || (bt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", u));
      };
      an = function(u, p) {
        u.indexOf("-") > -1 ? Pn(u) : fn.test(u) ? bn(u) : jt.test(p) && Rn(u, p), typeof p == "number" && (isNaN(p) ? De(u, p) : isFinite(p) || Ke(u, p));
      };
    }
    var V = an, Ee = /["'&<>]/;
    function Xe(u) {
      H(u);
      var p = "" + u, w = Ee.exec(p);
      if (!w)
        return p;
      var L, j = "", ae, pe = 0;
      for (ae = w.index; ae < p.length; ae++) {
        switch (p.charCodeAt(ae)) {
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
        pe !== ae && (j += p.substring(pe, ae)), pe = ae + 1, j += L;
      }
      return pe !== ae ? j + p.substring(pe, ae) : j;
    }
    function $e(u) {
      return typeof u == "boolean" || typeof u == "number" ? "" + u : Xe(u);
    }
    var yt = /([A-Z])/g, ot = /^ms-/;
    function xt(u) {
      return u.replace(yt, "-$1").toLowerCase().replace(ot, "-ms-");
    }
    var Mt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Je = !1;
    function $t(u) {
      !Je && Mt.test(u) && (Je = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(u)));
    }
    var It = Array.isArray;
    function en(u) {
      return It(u);
    }
    var tn = m("<script>"), pt = m("<\/script>"), Ot = m('<script src="'), Wt = m('<script type="module" src="'), Vt = m('" async=""><\/script>');
    function hn(u) {
      return H(u), ("" + u).replace(vn, on);
    }
    var vn = /(<\/|<)(s)(cript)/gi, on = function(u, p, w, L) {
      return "" + p + (w === "s" ? "\\u0073" : "\\u0053") + L;
    };
    function pn(u, p, w, L, j) {
      var ae = u === void 0 ? "" : u, pe = p === void 0 ? tn : m('<script nonce="' + $e(p) + '">'), Ce = [];
      if (w !== void 0 && Ce.push(pe, T(hn(w)), pt), L !== void 0)
        for (var o = 0; o < L.length; o++)
          Ce.push(Ot, T($e(L[o])), Vt);
      if (j !== void 0)
        for (var h = 0; h < j.length; h++)
          Ce.push(Wt, T($e(j[h])), Vt);
      return {
        bootstrapChunks: Ce,
        startInlineScript: pe,
        placeholderPrefix: m(ae + "P:"),
        segmentPrefix: m(ae + "S:"),
        boundaryPrefix: ae + "B:",
        idPrefix: ae,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Zt = 0, vt = 1, un = 2, kn = 3, ln = 4, Xn = 5, Ln = 6, Ut = 7;
    function sn(u, p) {
      return {
        insertionMode: u,
        selectedValue: p
      };
    }
    function Vn(u) {
      var p = u === "http://www.w3.org/2000/svg" ? un : u === "http://www.w3.org/1998/Math/MathML" ? kn : Zt;
      return sn(p, null);
    }
    function rr(u, p, w) {
      switch (p) {
        case "select":
          return sn(vt, w.value != null ? w.value : w.defaultValue);
        case "svg":
          return sn(un, null);
        case "math":
          return sn(kn, null);
        case "foreignObject":
          return sn(vt, null);
        case "table":
          return sn(ln, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return sn(Xn, null);
        case "colgroup":
          return sn(Ut, null);
        case "tr":
          return sn(Ln, null);
      }
      return u.insertionMode >= ln || u.insertionMode === Zt ? sn(vt, null) : u;
    }
    var yr = null;
    function vr(u) {
      var p = u.nextSuspenseID++;
      return m(u.boundaryPrefix + p.toString(16));
    }
    function dr(u, p, w) {
      var L = u.idPrefix, j = ":" + L + "R" + p;
      return w > 0 && (j += "H" + w.toString(32)), j + ":";
    }
    function ar(u) {
      return $e(u);
    }
    var Pr = m("<!-- -->");
    function fr(u, p, w, L) {
      return p === "" ? L : (L && u.push(Pr), u.push(T(ar(p))), !0);
    }
    function hr(u, p, w, L) {
      w && L && u.push(Pr);
    }
    var x = /* @__PURE__ */ new Map();
    function A(u) {
      var p = x.get(u);
      if (p !== void 0)
        return p;
      var w = m($e(xt(u)));
      return x.set(u, w), w;
    }
    var z = m(' style="'), q = m(":"), be = m(";");
    function me(u, p, w) {
      if (typeof w != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var L = !0;
      for (var j in w)
        if (U.call(w, j)) {
          var ae = w[j];
          if (!(ae == null || typeof ae == "boolean" || ae === "")) {
            var pe = void 0, Ce = void 0, o = j.indexOf("--") === 0;
            o ? (pe = T($e(j)), B(ae, j), Ce = T($e(("" + ae).trim()))) : (V(j, ae), pe = A(j), typeof ae == "number" ? ae !== 0 && !U.call(we, j) ? Ce = T(ae + "px") : Ce = T("" + ae) : (B(ae, j), Ce = T($e(("" + ae).trim())))), L ? (L = !1, u.push(z, pe, q, Ce)) : u.push(be, pe, q, Ce);
          }
        }
      L || u.push(rt);
    }
    var Ae = m(" "), We = m('="'), rt = m('"'), ht = m('=""');
    function ct(u, p, w, L) {
      switch (w) {
        case "style": {
          me(u, p, L);
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
        !(w.length > 2 && (w[0] === "o" || w[0] === "O") && (w[1] === "n" || w[1] === "N"))
      ) {
        var j = ve(w);
        if (j !== null) {
          switch (typeof L) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!j.acceptsBooleans)
                return;
          }
          var ae = j.attributeName, pe = T(ae);
          switch (j.type) {
            case oe:
              L && u.push(Ae, pe, ht);
              return;
            case fe:
              L === !0 ? u.push(Ae, pe, ht) : L === !1 || u.push(Ae, pe, We, T($e(L)), rt);
              return;
            case W:
              isNaN(L) || u.push(Ae, pe, We, T($e(L)), rt);
              break;
            case ie:
              !isNaN(L) && L >= 1 && u.push(Ae, pe, We, T($e(L)), rt);
              break;
            default:
              j.sanitizeURL && (D(L, ae), L = "" + L, $t(L)), u.push(Ae, pe, We, T($e(L)), rt);
          }
        } else if (I(w)) {
          switch (typeof L) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ce = w.toLowerCase().slice(0, 5);
              if (Ce !== "data-" && Ce !== "aria-")
                return;
            }
          }
          u.push(Ae, T(w), We, T($e(L)), rt);
        }
      }
    }
    var _t = m(">"), Dn = m("/>");
    function wn(u, p, w) {
      if (p != null) {
        if (w != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var L = p.__html;
        L != null && (H(L), u.push(T("" + L)));
      }
    }
    var Tn = !1, jn = !1, ne = !1, J = !1, ce = !1, Pe = !1, Rt = !1;
    function nn(u, p) {
      {
        var w = u[p];
        if (w != null) {
          var L = en(w);
          u.multiple && !L ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !u.multiple && L && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Un(u, p, w) {
      He("select", p), nn(p, "value"), nn(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !ne && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ne = !0), u.push(qn("select"));
      var L = null, j = null;
      for (var ae in p)
        if (U.call(p, ae)) {
          var pe = p[ae];
          if (pe == null)
            continue;
          switch (ae) {
            case "children":
              L = pe;
              break;
            case "dangerouslySetInnerHTML":
              j = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ct(u, w, ae, pe);
              break;
          }
        }
      return u.push(_t), wn(u, j, L), L;
    }
    function Rr(u) {
      var p = "";
      return e.Children.forEach(u, function(w) {
        w != null && (p += w, !ce && typeof w != "string" && typeof w != "number" && (ce = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ya = m(' selected=""');
    function ol(u, p, w, L) {
      var j = L.selectedValue;
      u.push(qn("option"));
      var ae = null, pe = null, Ce = null, o = null;
      for (var h in p)
        if (U.call(p, h)) {
          var S = p[h];
          if (S == null)
            continue;
          switch (h) {
            case "children":
              ae = S;
              break;
            case "selected":
              Ce = S, Rt || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rt = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = S;
              break;
            case "value":
              pe = S;
            default:
              ct(u, w, h, S);
              break;
          }
        }
      if (j != null) {
        var C;
        if (pe !== null ? (D(pe, "value"), C = "" + pe) : (o !== null && (Pe || (Pe = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = Rr(ae)), en(j))
          for (var F = 0; F < j.length; F++) {
            D(j[F], "value");
            var Z = "" + j[F];
            if (Z === C) {
              u.push(Ya);
              break;
            }
          }
        else
          D(j, "select.value"), "" + j === C && u.push(Ya);
      } else
        Ce && u.push(Ya);
      return u.push(_t), wn(u, o, ae), ae;
    }
    function Xa(u, p, w) {
      He("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !jn && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), jn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Tn && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Tn = !0), u.push(qn("input"));
      var L = null, j = null, ae = null, pe = null;
      for (var Ce in p)
        if (U.call(p, Ce)) {
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
              j = o;
              break;
            case "checked":
              ae = o;
              break;
            case "value":
              L = o;
              break;
            default:
              ct(u, w, Ce, o);
              break;
          }
        }
      return ae !== null ? ct(u, w, "checked", ae) : pe !== null && ct(u, w, "checked", pe), L !== null ? ct(u, w, "value", L) : j !== null && ct(u, w, "value", j), u.push(Dn), null;
    }
    function pr(u, p, w) {
      He("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !J && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), J = !0), u.push(qn("textarea"));
      var L = null, j = null, ae = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              ae = Ce;
              break;
            case "value":
              L = Ce;
              break;
            case "defaultValue":
              j = Ce;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ct(u, w, pe, Ce);
              break;
          }
        }
      if (L === null && j !== null && (L = j), u.push(_t), ae != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), L != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (en(ae)) {
          if (ae.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          H(ae[0]), L = "" + ae[0];
        }
        H(ae), L = "" + ae;
      }
      return typeof L == "string" && L[0] === `
` && u.push(Lr), L !== null && (D(L, "value"), u.push(T(ar("" + L)))), null;
    }
    function ea(u, p, w, L) {
      u.push(qn(w));
      for (var j in p)
        if (U.call(p, j)) {
          var ae = p[j];
          if (ae == null)
            continue;
          switch (j) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(w + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ct(u, L, j, ae);
              break;
          }
        }
      return u.push(Dn), null;
    }
    function ga(u, p, w) {
      u.push(qn("menuitem"));
      for (var L in p)
        if (U.call(p, L)) {
          var j = p[L];
          if (j == null)
            continue;
          switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ct(u, w, L, j);
              break;
          }
        }
      return u.push(_t), null;
    }
    function Qt(u, p, w) {
      u.push(qn("title"));
      var L = null;
      for (var j in p)
        if (U.call(p, j)) {
          var ae = p[j];
          if (ae == null)
            continue;
          switch (j) {
            case "children":
              L = ae;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ct(u, w, j, ae);
              break;
          }
        }
      u.push(_t);
      {
        var pe = Array.isArray(L) && L.length < 2 ? L[0] || null : L;
        Array.isArray(L) && L.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return L;
    }
    function xr(u, p, w, L) {
      u.push(qn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              j = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ae = Ce;
              break;
            default:
              ct(u, L, pe, Ce);
              break;
          }
        }
      return u.push(_t), wn(u, ae, j), typeof j == "string" ? (u.push(T(ar(j))), null) : j;
    }
    function Bn(u, p, w, L) {
      u.push(qn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              j = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ae = Ce;
              break;
            case "style":
              me(u, L, Ce);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              I(pe) && typeof Ce != "function" && typeof Ce != "symbol" && u.push(Ae, T(pe), We, T($e(Ce)), rt);
              break;
          }
        }
      return u.push(_t), wn(u, ae, j), j;
    }
    var Lr = m(`
`);
    function br(u, p, w, L) {
      u.push(qn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var Ce = p[pe];
          if (Ce == null)
            continue;
          switch (pe) {
            case "children":
              j = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ae = Ce;
              break;
            default:
              ct(u, L, pe, Ce);
              break;
          }
        }
      if (u.push(_t), ae != null) {
        if (j != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ae != "object" || !("__html" in ae))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = ae.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? u.push(Lr, T(o)) : (H(o), u.push(T("" + o))));
      }
      return typeof j == "string" && j[0] === `
` && u.push(Lr), j;
    }
    var ya = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Sr = /* @__PURE__ */ new Map();
    function qn(u) {
      var p = Sr.get(u);
      if (p === void 0) {
        if (!ya.test(u))
          throw new Error("Invalid tag: " + u);
        p = m("<" + u), Sr.set(u, p);
      }
      return p;
    }
    var qa = m("<!DOCTYPE html>");
    function Ga(u, p, w, L, j) {
      switch (Fe(p, w), Ue(p, w), Gt(p, w, null), !w.suppressContentEditableWarning && w.contentEditable && w.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), j.insertionMode !== un && j.insertionMode !== kn && p.indexOf("-") === -1 && typeof w.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Un(u, w, L);
        case "option":
          return ol(u, w, L, j);
        case "textarea":
          return pr(u, w, L);
        case "input":
          return Xa(u, w, L);
        case "menuitem":
          return ga(u, w, L);
        case "title":
          return Qt(u, w, L);
        case "listing":
        case "pre":
          return br(u, w, p, L);
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
          return ea(u, w, p, L);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return xr(u, w, p, L);
        case "html":
          return j.insertionMode === Zt && u.push(qa), xr(u, w, p, L);
        default:
          return p.indexOf("-") === -1 && typeof w.is != "string" ? xr(u, w, p, L) : Bn(u, w, p, L);
      }
    }
    var Ki = m("</"), Yi = m(">");
    function Xi(u, p, w) {
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
          u.push(Ki, T(p), Yi);
      }
    }
    function ll(u, p) {
      for (var w = p.bootstrapChunks, L = 0; L < w.length - 1; L++)
        y(u, w[L]);
      return L < w.length ? v(u, w[L]) : !0;
    }
    var sl = m('<template id="'), va = m('"></template>');
    function xa(u, p, w) {
      y(u, sl), y(u, p.placeholderPrefix);
      var L = T(w.toString(16));
      return y(u, L), v(u, va);
    }
    var ba = m("<!--$-->"), ta = m('<!--$?--><template id="'), ul = m('"></template>'), na = m("<!--$!-->"), Za = m("<!--/$-->"), Qa = m("<template"), Ir = m('"'), Hr = m(' data-dgst="'), Sa = m(' data-msg="'), qi = m(' data-stck="'), Ja = m("></template>");
    function Gi(u, p) {
      return v(u, ba);
    }
    function Ea(u, p, w) {
      if (y(u, ta), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), v(u, ul);
    }
    function In(u, p, w, L, j) {
      var ae;
      return ae = v(u, na), y(u, Qa), w && (y(u, Hr), y(u, T($e(w))), y(u, Ir)), L && (y(u, Sa), y(u, T($e(L))), y(u, Ir)), j && (y(u, qi), y(u, T($e(j))), y(u, Ir)), ae = v(u, Ja), ae;
    }
    function Zi(u, p) {
      return v(u, Za);
    }
    function ka(u, p) {
      return v(u, Za);
    }
    function cl(u, p) {
      return v(u, Za);
    }
    var Qi = m('<div hidden id="'), wa = m('">'), Ji = m("</div>"), eo = m('<svg aria-hidden="true" style="display:none" id="'), Ta = m('">'), Ca = m("</svg>"), to = m('<math aria-hidden="true" style="display:none" id="'), no = m('">'), ro = m("</math>"), ei = m('<table hidden id="'), ao = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), $ = m('">'), G = m("</tbody></table>"), Se = m('<table hidden><tr id="'), xe = m('">'), _e = m("</tr></table>"), Ve = m('<table hidden><colgroup id="'), mt = m('">'), Dt = m("</colgroup></table>");
    function Tt(u, p, w, L) {
      switch (w.insertionMode) {
        case Zt:
        case vt:
          return y(u, Qi), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, wa);
        case un:
          return y(u, eo), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, Ta);
        case kn:
          return y(u, to), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, no);
        case ln:
          return y(u, ei), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, ao);
        case Xn:
          return y(u, P), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, $);
        case Ln:
          return y(u, Se), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, xe);
        case Ut:
          return y(u, Ve), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, mt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function rn(u, p) {
      switch (p.insertionMode) {
        case Zt:
        case vt:
          return v(u, Ji);
        case un:
          return v(u, Ca);
        case kn:
          return v(u, ro);
        case ln:
          return v(u, b);
        case Xn:
          return v(u, G);
        case Ln:
          return v(u, _e);
        case Ut:
          return v(u, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Hn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Gn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Zn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Aa = m(Hn + ';$RS("'), io = m('$RS("'), ti = m('","'), Mc = m('")<\/script>');
    function _c(u, p, w) {
      y(u, p.startInlineScript), p.sentCompleteSegmentFunction ? y(u, io) : (p.sentCompleteSegmentFunction = !0, y(u, Aa)), y(u, p.segmentPrefix);
      var L = T(w.toString(16));
      return y(u, L), y(u, ti), y(u, p.placeholderPrefix), y(u, L), v(u, Mc);
    }
    var Nc = m(Gn + ';$RC("'), Fc = m('$RC("'), $c = m('","'), zc = m('")<\/script>');
    function dl(u, p, w, L) {
      if (y(u, p.startInlineScript), p.sentCompleteBoundaryFunction ? y(u, Fc) : (p.sentCompleteBoundaryFunction = !0, y(u, Nc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var j = T(L.toString(16));
      return y(u, w), y(u, $c), y(u, p.segmentPrefix), y(u, j), v(u, zc);
    }
    var Bc = m(Zn + ';$RX("'), Ic = m('$RX("'), fl = m('"'), Hc = m(")<\/script>"), hl = m(",");
    function Ls(u, p, w, L, j, ae) {
      if (y(u, p.startInlineScript), p.sentClientRenderFunction ? y(u, Ic) : (p.sentClientRenderFunction = !0, y(u, Bc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), y(u, fl), (L || j || ae) && (y(u, hl), y(u, T(pl(L || "")))), (j || ae) && (y(u, hl), y(u, T(pl(j || "")))), ae && (y(u, hl), y(u, T(pl(ae)))), v(u, Hc);
    }
    var Ds = /[<\u2028\u2029]/g;
    function pl(u) {
      var p = JSON.stringify(u);
      return p.replace(Ds, function(w) {
        switch (w) {
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
    var ir = Object.assign, Wc = Symbol.for("react.element"), Os = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), Ms = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), oo = Symbol.for("react.provider"), lo = Symbol.for("react.context"), so = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), ai = Symbol.for("react.memo"), Pa = Symbol.for("react.lazy"), gl = Symbol.for("react.scope"), yl = Symbol.for("react.debug_trace_mode"), uo = Symbol.for("react.legacy_hidden"), Vc = Symbol.for("react.default_value"), _s = Symbol.iterator, jc = "@@iterator";
    function Uc(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = _s && u[_s] || u[jc];
      return typeof p == "function" ? p : null;
    }
    function Ns(u, p, w) {
      var L = u.displayName;
      if (L)
        return L;
      var j = p.displayName || p.name || "";
      return j !== "" ? w + "(" + j + ")" : w;
    }
    function Fs(u) {
      return u.displayName || "Context";
    }
    function gn(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case Qn:
          return "Fragment";
        case Os:
          return "Portal";
        case ml:
          return "Profiler";
        case Ms:
          return "StrictMode";
        case ni:
          return "Suspense";
        case ri:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case lo:
            var p = u;
            return Fs(p) + ".Consumer";
          case oo:
            var w = u;
            return Fs(w._context) + ".Provider";
          case so:
            return Ns(u, u.render, "ForwardRef");
          case ai:
            var L = u.displayName || null;
            return L !== null ? L : gn(u.type) || "Memo";
          case Pa: {
            var j = u, ae = j._payload, pe = j._init;
            try {
              return gn(pe(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ii = 0, vl, mn, Ra, xl, bl, Sl, El;
    function kl() {
    }
    kl.__reactDisabledLog = !0;
    function $s() {
      {
        if (ii === 0) {
          vl = console.log, mn = console.info, Ra = console.warn, xl = console.error, bl = console.group, Sl = console.groupCollapsed, El = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: kl,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ii++;
      }
    }
    function zs() {
      {
        if (ii--, ii === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ir({}, u, {
              value: vl
            }),
            info: ir({}, u, {
              value: mn
            }),
            warn: ir({}, u, {
              value: Ra
            }),
            error: ir({}, u, {
              value: xl
            }),
            group: ir({}, u, {
              value: bl
            }),
            groupCollapsed: ir({}, u, {
              value: Sl
            }),
            groupEnd: ir({}, u, {
              value: El
            })
          });
        }
        ii < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var co = r.ReactCurrentDispatcher, wl;
    function oi(u, p, w) {
      {
        if (wl === void 0)
          try {
            throw Error();
          } catch (j) {
            var L = j.stack.trim().match(/\n( *(at )?)/);
            wl = L && L[1] || "";
          }
        return `
` + wl + u;
      }
    }
    var li = !1, La;
    {
      var si = typeof WeakMap == "function" ? WeakMap : Map;
      La = new si();
    }
    function ui(u, p) {
      if (!u || li)
        return "";
      {
        var w = La.get(u);
        if (w !== void 0)
          return w;
      }
      var L;
      li = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = co.current, co.current = null, $s();
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
            } catch (de) {
              L = de;
            }
            Reflect.construct(u, [], pe);
          } else {
            try {
              pe.call();
            } catch (de) {
              L = de;
            }
            u.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            L = de;
          }
          u();
        }
      } catch (de) {
        if (de && L && typeof de.stack == "string") {
          for (var Ce = de.stack.split(`
`), o = L.stack.split(`
`), h = Ce.length - 1, S = o.length - 1; h >= 1 && S >= 0 && Ce[h] !== o[S]; )
            S--;
          for (; h >= 1 && S >= 0; h--, S--)
            if (Ce[h] !== o[S]) {
              if (h !== 1 || S !== 1)
                do
                  if (h--, S--, S < 0 || Ce[h] !== o[S]) {
                    var C = `
` + Ce[h].replace(" at new ", " at ");
                    return u.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", u.displayName)), typeof u == "function" && La.set(u, C), C;
                  }
                while (h >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        li = !1, co.current = ae, zs(), Error.prepareStackTrace = j;
      }
      var F = u ? u.displayName || u.name : "", Z = F ? oi(F) : "";
      return typeof u == "function" && La.set(u, Z), Z;
    }
    function fo(u, p, w) {
      return ui(u, !0);
    }
    function Bs(u, p, w) {
      return ui(u, !1);
    }
    function Tl(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Cl(u, p, w) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return ui(u, Tl(u));
      if (typeof u == "string")
        return oi(u);
      switch (u) {
        case ni:
          return oi("Suspense");
        case ri:
          return oi("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case so:
            return Bs(u.render);
          case ai:
            return Cl(u.type, p, w);
          case Pa: {
            var L = u, j = L._payload, ae = L._init;
            try {
              return Cl(ae(j), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, Is = r.ReactDebugCurrentFrame;
    function Da(u) {
      if (u) {
        var p = u._owner, w = Cl(u.type, u._source, p ? p.type : null);
        Is.setExtraStackFrame(w);
      } else
        Is.setExtraStackFrame(null);
    }
    function Pl(u, p, w, L, j) {
      {
        var ae = Function.call.bind(U);
        for (var pe in u)
          if (ae(u, pe)) {
            var Ce = void 0;
            try {
              if (typeof u[pe] != "function") {
                var o = Error((L || "React class") + ": " + w + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Ce = u[pe](p, pe, L, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              Ce = h;
            }
            Ce && !(Ce instanceof Error) && (Da(j), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", w, pe, typeof Ce), Da(null)), Ce instanceof Error && !(Ce.message in Al) && (Al[Ce.message] = !0, Da(j), a("Failed %s type: %s", w, Ce.message), Da(null));
          }
      }
    }
    var ho;
    ho = {};
    var ra = {};
    Object.freeze(ra);
    function Rl(u, p) {
      {
        var w = u.contextTypes;
        if (!w)
          return ra;
        var L = {};
        for (var j in w)
          L[j] = p[j];
        {
          var ae = gn(u) || "Unknown";
          Pl(w, L, "context", ae);
        }
        return L;
      }
    }
    function Ll(u, p, w, L) {
      {
        if (typeof u.getChildContext != "function") {
          {
            var j = gn(p) || "Unknown";
            ho[j] || (ho[j] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", j, j));
          }
          return w;
        }
        var ae = u.getChildContext();
        for (var pe in ae)
          if (!(pe in L))
            throw new Error((gn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var Ce = gn(p) || "Unknown";
          Pl(L, ae, "child context", Ce);
        }
        return ir({}, w, ae);
      }
    }
    var Wr;
    Wr = {};
    var Hs = null, aa = null;
    function ia(u) {
      u.context._currentValue = u.parentValue;
    }
    function Dl(u) {
      u.context._currentValue = u.value;
    }
    function Er(u, p) {
      if (u !== p) {
        ia(u);
        var w = u.parent, L = p.parent;
        if (w === null) {
          if (L !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (L === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Er(w, L);
        }
        Dl(p);
      }
    }
    function po(u) {
      ia(u);
      var p = u.parent;
      p !== null && po(p);
    }
    function mo(u) {
      var p = u.parent;
      p !== null && mo(p), Dl(u);
    }
    function ci(u, p) {
      ia(u);
      var w = u.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      w.depth === p.depth ? Er(w, p) : ci(w, p);
    }
    function Ol(u, p) {
      var w = p.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      u.depth === w.depth ? Er(u, w) : Ol(u, w), Dl(p);
    }
    function di(u) {
      var p = aa, w = u;
      p !== w && (p === null ? mo(w) : w === null ? po(p) : p.depth === w.depth ? Er(p, w) : p.depth > w.depth ? ci(p, w) : Ol(p, w), aa = w);
    }
    function Ws(u, p) {
      var w;
      w = u._currentValue, u._currentValue = p, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Wr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Wr;
      var L = aa, j = {
        parent: L,
        depth: L === null ? 0 : L.depth + 1,
        context: u,
        parentValue: w,
        value: p
      };
      return aa = j, j;
    }
    function Vs(u) {
      var p = aa;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== u && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var w = p.parentValue;
        w === Vc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = w, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Wr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Wr;
      }
      return aa = p.parent;
    }
    function go() {
      return aa;
    }
    function fi(u) {
      var p = u._currentValue;
      return p;
    }
    function Ml(u) {
      return u._reactInternals;
    }
    function Kc(u, p) {
      u._reactInternals = p;
    }
    var Oa = {}, yo = {}, _l, vo, xo, hi, bo, Ma, pi, So, _a;
    {
      _l = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), pi = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set();
      var Eo = /* @__PURE__ */ new Set();
      Ma = function(u, p) {
        if (!(u === null || typeof u == "function")) {
          var w = p + "_" + u;
          Eo.has(w) || (Eo.add(w), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, u));
        }
      }, bo = function(u, p) {
        if (p === void 0) {
          var w = gn(u) || "Component";
          hi.has(w) || (hi.add(w), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", w));
        }
      };
    }
    function ko(u, p) {
      {
        var w = u.constructor, L = w && gn(w) || "ReactClass", j = L + "." + p;
        if (Oa[j])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, L), Oa[j] = !0;
      }
    }
    var wo = {
      isMounted: function(u) {
        return !1;
      },
      enqueueSetState: function(u, p, w) {
        var L = Ml(u);
        L.queue === null ? ko(u, "setState") : (L.queue.push(p), w != null && Ma(w, "setState"));
      },
      enqueueReplaceState: function(u, p, w) {
        var L = Ml(u);
        L.replace = !0, L.queue = [p], w != null && Ma(w, "setState");
      },
      enqueueForceUpdate: function(u, p) {
        var w = Ml(u);
        w.queue === null ? ko(u, "forceUpdate") : p != null && Ma(p, "setState");
      }
    };
    function js(u, p, w, L, j) {
      var ae = w(j, L);
      bo(p, ae);
      var pe = ae == null ? L : ir({}, L, ae);
      return pe;
    }
    function Us(u, p, w) {
      var L = ra, j = u.contextType;
      if ("contextType" in u) {
        var ae = (
          // Allow null for conditional declaration
          j === null || j !== void 0 && j.$$typeof === lo && j._context === void 0
        );
        if (!ae && !_a.has(u)) {
          _a.add(u);
          var pe = "";
          j === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof j != "object" ? pe = " However, it is set to a " + typeof j + "." : j.$$typeof === oo ? pe = " Did you accidentally pass the Context.Provider instead?" : j._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(j).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gn(u) || "Component", pe);
        }
      }
      typeof j == "object" && j !== null ? L = fi(j) : L = w;
      var Ce = new u(p, L);
      {
        if (typeof u.getDerivedStateFromProps == "function" && (Ce.state === null || Ce.state === void 0)) {
          var o = gn(u) || "Component";
          _l.has(o) || (_l.add(o), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Ce.state === null ? "null" : "undefined", o));
        }
        if (typeof u.getDerivedStateFromProps == "function" || typeof Ce.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof Ce.componentWillMount == "function" && Ce.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof Ce.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof Ce.componentWillReceiveProps == "function" && Ce.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof Ce.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof Ce.componentWillUpdate == "function" && Ce.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof Ce.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = gn(u) || "Component", Z = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            xo.has(F) || (xo.add(F), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, F, Z, h !== null ? `
  ` + h : "", S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : ""));
          }
        }
      }
      return Ce;
    }
    function Ks(u, p, w) {
      {
        var L = gn(p) || "Component", j = u.render;
        j || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", L) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", L)), u.getInitialState && !u.getInitialState.isReactClassApproved && !u.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", L), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", L), u.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", L), u.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", L), u.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", L), p.contextType && p.contextTypes && !So.has(p) && (So.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", L)), typeof u.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", L), p.prototype && p.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gn(p) || "A pure component"), typeof u.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", L), typeof u.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", L), typeof u.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", L), typeof u.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", L);
        var ae = u.props !== w;
        u.props !== void 0 && ae && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", L, L), u.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", L, L), typeof u.getSnapshotBeforeUpdate == "function" && typeof u.componentDidUpdate != "function" && !vo.has(p) && (vo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gn(p))), typeof u.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), typeof u.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", L);
        var pe = u.state;
        pe && (typeof pe != "object" || en(pe)) && a("%s.state: must be set to an object or null", L), typeof u.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", L);
      }
    }
    function Yc(u, p) {
      var w = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var L = gn(u) || "Unknown";
          yo[L] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            L
          ), yo[L] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), w !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gn(u) || "Component"), wo.enqueueReplaceState(p, p.state, null));
    }
    function Xc(u, p, w, L) {
      if (u.queue !== null && u.queue.length > 0) {
        var j = u.queue, ae = u.replace;
        if (u.queue = null, u.replace = !1, ae && j.length === 1)
          p.state = j[0];
        else {
          for (var pe = ae ? j[0] : p.state, Ce = !0, o = ae ? 1 : 0; o < j.length; o++) {
            var h = j[o], S = typeof h == "function" ? h.call(p, pe, w, L) : h;
            S != null && (Ce ? (Ce = !1, pe = ir({}, pe, S)) : ir(pe, S));
          }
          p.state = pe;
        }
      } else
        u.queue = null;
    }
    function Ys(u, p, w, L) {
      Ks(u, p, w);
      var j = u.state !== void 0 ? u.state : null;
      u.updater = wo, u.props = w, u.state = j;
      var ae = {
        queue: [],
        replace: !1
      };
      Kc(u, ae);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? u.context = fi(pe) : u.context = L, u.state === w) {
        var Ce = gn(p) || "Component";
        pi.has(Ce) || (pi.add(Ce), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ce));
      }
      var o = p.getDerivedStateFromProps;
      typeof o == "function" && (u.state = js(u, p, o, j, w)), typeof p.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Yc(p, u), Xc(ae, u, w, L));
    }
    var qc = {
      id: 1,
      overflow: ""
    };
    function Gc(u) {
      var p = u.overflow, w = u.id, L = w & ~Zc(w);
      return L.toString(32) + p;
    }
    function To(u, p, w) {
      var L = u.id, j = u.overflow, ae = Co(L) - 1, pe = L & ~(1 << ae), Ce = w + 1, o = Co(p) + ae;
      if (o > 30) {
        var h = ae - ae % 5, S = (1 << h) - 1, C = (pe & S).toString(32), F = pe >> h, Z = ae - h, de = Co(p) + Z, Te = Ce << Z, ze = Te | F, tt = C + j;
        return {
          id: 1 << de | ze,
          overflow: tt
        };
      } else {
        var lt = Ce << ae, St = lt | pe, cn = j;
        return {
          id: 1 << o | St,
          overflow: cn
        };
      }
    }
    function Co(u) {
      return 32 - Nl(u);
    }
    function Zc(u) {
      return 1 << Co(u) - 1;
    }
    var Nl = Math.clz32 ? Math.clz32 : Jc, Ao = Math.log, Qc = Math.LN2;
    function Jc(u) {
      var p = u >>> 0;
      return p === 0 ? 32 : 31 - (Ao(p) / Qc | 0) | 0;
    }
    function ed(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    var td = typeof Object.is == "function" ? Object.is : ed, Dr = null, Fl = null, Po = null, zt = null, oa = !1, la = !1, Xt = 0, or = null, sa = 0, Ro = 25, Fn = !1, Or;
    function ua() {
      if (Dr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Fn && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Dr;
    }
    function kr(u, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Or), !1;
      u.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Or, "[" + u.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var w = 0; w < p.length && w < u.length; w++)
        if (!td(u[w], p[w]))
          return !1;
      return !0;
    }
    function ca() {
      if (sa > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Mr() {
      return zt === null ? Po === null ? (oa = !1, Po = zt = ca()) : (oa = !0, zt = Po) : zt.next === null ? (oa = !1, zt = zt.next = ca()) : (oa = !0, zt = zt.next), zt;
    }
    function nd(u, p) {
      Dr = p, Fl = u, Fn = !1, Xt = 0;
    }
    function Xs(u, p, w, L) {
      for (; la; )
        la = !1, Xt = 0, sa += 1, zt = null, w = u(p, L);
      return $l(), w;
    }
    function Lo() {
      var u = Xt !== 0;
      return u;
    }
    function $l() {
      Fn = !1, Dr = null, Fl = null, la = !1, Po = null, sa = 0, or = null, zt = null;
    }
    function rd(u) {
      return Fn && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), fi(u);
    }
    function qs(u) {
      return Or = "useContext", ua(), fi(u);
    }
    function mi(u, p) {
      return typeof p == "function" ? p(u) : p;
    }
    function ad(u) {
      return Or = "useState", Gs(
        mi,
        // useReducer has a special case to support lazy useState initializers
        u
      );
    }
    function Gs(u, p, w) {
      if (u !== mi && (Or = "useReducer"), Dr = ua(), zt = Mr(), oa) {
        var L = zt.queue, j = L.dispatch;
        if (or !== null) {
          var ae = or.get(L);
          if (ae !== void 0) {
            or.delete(L);
            var pe = zt.memoizedState, Ce = ae;
            do {
              var o = Ce.action;
              Fn = !0, pe = u(pe, o), Fn = !1, Ce = Ce.next;
            } while (Ce !== null);
            return zt.memoizedState = pe, [pe, j];
          }
        }
        return [zt.memoizedState, j];
      } else {
        Fn = !0;
        var h;
        u === mi ? h = typeof p == "function" ? p() : p : h = w !== void 0 ? w(p) : p, Fn = !1, zt.memoizedState = h;
        var S = zt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = Qs.bind(null, Dr, S);
        return [zt.memoizedState, C];
      }
    }
    function Do(u, p) {
      Dr = ua(), zt = Mr();
      var w = p === void 0 ? null : p;
      if (zt !== null) {
        var L = zt.memoizedState;
        if (L !== null && w !== null) {
          var j = L[1];
          if (kr(w, j))
            return L[0];
        }
      }
      Fn = !0;
      var ae = u();
      return Fn = !1, zt.memoizedState = [ae, w], ae;
    }
    function id(u) {
      Dr = ua(), zt = Mr();
      var p = zt.memoizedState;
      if (p === null) {
        var w = {
          current: u
        };
        return Object.seal(w), zt.memoizedState = w, w;
      } else
        return p;
    }
    function Zs(u, p) {
      Or = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Qs(u, p, w) {
      if (sa >= Ro)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (u === Dr) {
        la = !0;
        var L = {
          action: w,
          next: null
        };
        or === null && (or = /* @__PURE__ */ new Map());
        var j = or.get(p);
        if (j === void 0)
          or.set(p, L);
        else {
          for (var ae = j; ae.next !== null; )
            ae = ae.next;
          ae.next = L;
        }
      }
    }
    function od(u, p) {
      return Do(function() {
        return u;
      }, p);
    }
    function ld(u, p, w) {
      return ua(), p(u._source);
    }
    function sd(u, p, w) {
      if (w === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return w();
    }
    function ud(u) {
      return ua(), u;
    }
    function cd() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function dd() {
      return ua(), [!1, cd];
    }
    function fd() {
      var u = Fl, p = Gc(u.treeContext), w = zl;
      if (w === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var L = Xt++;
      return dr(w, p, L);
    }
    function Oo() {
    }
    var Js = {
      readContext: rd,
      useContext: qs,
      useMemo: Do,
      useReducer: Gs,
      useRef: id,
      useState: ad,
      useInsertionEffect: Oo,
      useLayoutEffect: Zs,
      useCallback: od,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Oo,
      // Effects are not run in the server environment.
      useEffect: Oo,
      // Debugging effect
      useDebugValue: Oo,
      useDeferredValue: ud,
      useTransition: dd,
      useId: fd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ld,
      useSyncExternalStore: sd
    }, zl = null;
    function gi(u) {
      zl = u;
    }
    function eu(u) {
      try {
        var p = "", w = u;
        do {
          switch (w.tag) {
            case 0:
              p += oi(w.type, null, null);
              break;
            case 1:
              p += Bs(w.type, null, null);
              break;
            case 2:
              p += fo(w.type, null, null);
              break;
          }
          w = w.parent;
        } while (w);
        return p;
      } catch (L) {
        return `
Error generating stack: ` + L.message + `
` + L.stack;
      }
    }
    var yi = r.ReactCurrentDispatcher, Mo = r.ReactDebugCurrentFrame, Bl = 0, Vr = 1, _o = 2, No = 3, da = 4, tu = 0, Il = 1, fa = 2, hd = 12800;
    function nu(u) {
      return console.error(u), null;
    }
    function wr() {
    }
    function pd(u, p, w, L, j, ae, pe, Ce, o) {
      var h = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: L === void 0 ? hd : L,
        status: tu,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: S,
        pingedTasks: h,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: j === void 0 ? nu : j,
        onAllReady: ae === void 0 ? wr : ae,
        onShellReady: pe === void 0 ? wr : pe,
        onShellError: Ce === void 0 ? wr : Ce,
        onFatalError: o === void 0 ? wr : o
      }, F = Fo(
        C,
        0,
        null,
        w,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      F.parentFlushed = !0;
      var Z = Hl(C, u, null, F, S, ra, Hs, qc);
      return h.push(Z), C;
    }
    function md(u, p) {
      var w = u.pingedTasks;
      w.push(p), w.length === 1 && f(function() {
        return ki(u);
      });
    }
    function vi(u, p) {
      return {
        id: yr,
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
    function Hl(u, p, w, L, j, ae, pe, Ce) {
      u.allPendingTasks++, w === null ? u.pendingRootTasks++ : w.pendingTasks++;
      var o = {
        node: p,
        ping: function() {
          return md(u, o);
        },
        blockedBoundary: w,
        blockedSegment: L,
        abortSet: j,
        legacyContext: ae,
        context: pe,
        treeContext: Ce
      };
      return o.componentStack = null, j.add(o), o;
    }
    function Fo(u, p, w, L, j, ae) {
      return {
        status: Bl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: L,
        boundary: w,
        lastPushedText: j,
        textEmbedded: ae
      };
    }
    var _r = null;
    function xi() {
      return _r === null || _r.componentStack === null ? "" : eu(_r.componentStack);
    }
    function jr(u, p) {
      u.componentStack = {
        tag: 0,
        parent: u.componentStack,
        type: p
      };
    }
    function Tr(u, p) {
      u.componentStack = {
        tag: 1,
        parent: u.componentStack,
        type: p
      };
    }
    function Wl(u, p) {
      u.componentStack = {
        tag: 2,
        parent: u.componentStack,
        type: p
      };
    }
    function lr(u) {
      u.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : u.componentStack = u.componentStack.parent;
    }
    var Na = null;
    function Vl(u, p) {
      {
        var w;
        typeof p == "string" ? w = p : p && typeof p.message == "string" ? w = p.message : w = String(p);
        var L = Na || xi();
        Na = null, u.errorMessage = w, u.errorComponentStack = L;
      }
    }
    function sr(u, p) {
      var w = u.onError(p);
      if (w != null && typeof w != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof w + '" instead');
      return w;
    }
    function Ur(u, p) {
      var w = u.onShellError;
      w(p);
      var L = u.onFatalError;
      L(p), u.destination !== null ? (u.status = fa, R(u.destination, p)) : (u.status = Il, u.fatalError = p);
    }
    function jl(u, p, w) {
      jr(p, "Suspense");
      var L = p.blockedBoundary, j = p.blockedSegment, ae = w.fallback, pe = w.children, Ce = /* @__PURE__ */ new Set(), o = vi(u, Ce), h = j.chunks.length, S = Fo(
        u,
        h,
        o,
        j.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      j.children.push(S), j.lastPushedText = !1;
      var C = Fo(
        u,
        0,
        null,
        j.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = o, p.blockedSegment = C;
      try {
        if (Jl(u, p, pe), hr(C.chunks, u.responseState, C.lastPushedText, C.textEmbedded), C.status = Vr, Bo(o, C), o.pendingTasks === 0) {
          lr(p);
          return;
        }
      } catch (Z) {
        C.status = da, o.forceClientRender = !0, o.errorDigest = sr(u, Z), Vl(o, Z);
      } finally {
        p.blockedBoundary = L, p.blockedSegment = j;
      }
      var F = Hl(u, ae, L, S, Ce, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, u.pingedTasks.push(F), lr(p);
    }
    function bi(u, p, w, L) {
      jr(p, w);
      var j = p.blockedSegment, ae = Ga(j.chunks, w, L, u.responseState, j.formatContext);
      j.lastPushedText = !1;
      var pe = j.formatContext;
      j.formatContext = rr(pe, w, L), Jl(u, p, ae), j.formatContext = pe, Xi(j.chunks, w), j.lastPushedText = !1, lr(p);
    }
    function $o(u) {
      return u.prototype && u.prototype.isReactComponent;
    }
    function ru(u, p, w, L, j) {
      var ae = {};
      nd(p, ae);
      var pe = w(L, j);
      return Xs(w, L, pe, j);
    }
    function au(u, p, w, L, j) {
      var ae = w.render();
      w.props !== j && (Ei || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gn(L) || "a component"), Ei = !0);
      {
        var pe = L.childContextTypes;
        if (pe != null) {
          var Ce = p.legacyContext, o = Ll(w, L, Ce, pe);
          p.legacyContext = o, Jn(u, p, ae), p.legacyContext = Ce;
          return;
        }
      }
      Jn(u, p, ae);
    }
    function gd(u, p, w, L) {
      Wl(p, w);
      var j = Rl(w, p.legacyContext), ae = Us(w, L, j);
      Ys(ae, w, L, j), au(u, p, ae, w, L), lr(p);
    }
    var Ul = {}, Si = {}, iu = {}, Kl = {}, Ei = !1, Yl = !1, Xl = !1, ql = !1;
    function ou(u, p, w, L) {
      var j;
      if (j = Rl(w, p.legacyContext), Tr(p, w), w.prototype && typeof w.prototype.render == "function") {
        var ae = gn(w) || "Unknown";
        Ul[ae] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ae, ae), Ul[ae] = !0);
      }
      var pe = ru(u, p, w, L, j), Ce = Lo();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var o = gn(w) || "Unknown";
        Si[o] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", o, o, o), Si[o] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var h = gn(w) || "Unknown";
          Si[h] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), Si[h] = !0);
        }
        Ys(pe, w, L, j), au(u, p, pe, w, L);
      } else if (lu(w), Ce) {
        var S = p.treeContext, C = 1, F = 0;
        p.treeContext = To(S, C, F);
        try {
          Jn(u, p, pe);
        } finally {
          p.treeContext = S;
        }
      } else
        Jn(u, p, pe);
      lr(p);
    }
    function lu(u) {
      {
        if (u && u.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", u.displayName || u.name || "Component"), typeof u.getDerivedStateFromProps == "function") {
          var p = gn(u) || "Unknown";
          Kl[p] || (a("%s: Function components do not support getDerivedStateFromProps.", p), Kl[p] = !0);
        }
        if (typeof u.contextType == "object" && u.contextType !== null) {
          var w = gn(u) || "Unknown";
          iu[w] || (a("%s: Function components do not support contextType.", w), iu[w] = !0);
        }
      }
    }
    function Gl(u, p) {
      if (u && u.defaultProps) {
        var w = ir({}, p), L = u.defaultProps;
        for (var j in L)
          w[j] === void 0 && (w[j] = L[j]);
        return w;
      }
      return p;
    }
    function yd(u, p, w, L, j) {
      Tr(p, w.render);
      var ae = ru(u, p, w.render, L, j), pe = Lo();
      if (pe) {
        var Ce = p.treeContext, o = 1, h = 0;
        p.treeContext = To(Ce, o, h);
        try {
          Jn(u, p, ae);
        } finally {
          p.treeContext = Ce;
        }
      } else
        Jn(u, p, ae);
      lr(p);
    }
    function vd(u, p, w, L, j) {
      var ae = w.type, pe = Gl(ae, L);
      Zl(u, p, ae, pe, j);
    }
    function su(u, p, w, L) {
      w._context === void 0 ? w !== w.Consumer && (ql || (ql = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : w = w._context;
      var j = L.children;
      typeof j != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ae = fi(w), pe = j(ae);
      Jn(u, p, pe);
    }
    function xd(u, p, w, L) {
      var j = w._context, ae = L.value, pe = L.children, Ce;
      Ce = p.context, p.context = Ws(j, ae), Jn(u, p, pe), p.context = Vs(j), Ce !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function bd(u, p, w, L, j) {
      jr(p, "Lazy");
      var ae = w._payload, pe = w._init, Ce = pe(ae), o = Gl(Ce, L);
      Zl(u, p, Ce, o, j), lr(p);
    }
    function Zl(u, p, w, L, j) {
      if (typeof w == "function")
        if ($o(w)) {
          gd(u, p, w, L);
          return;
        } else {
          ou(u, p, w, L);
          return;
        }
      if (typeof w == "string") {
        bi(u, p, w, L);
        return;
      }
      switch (w) {
        case uo:
        case yl:
        case Ms:
        case ml:
        case Qn: {
          Jn(u, p, L.children);
          return;
        }
        case ri: {
          jr(p, "SuspenseList"), Jn(u, p, L.children), lr(p);
          return;
        }
        case gl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ni: {
          jl(u, p, L);
          return;
        }
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case so: {
            yd(u, p, w, L, j);
            return;
          }
          case ai: {
            vd(u, p, w, L, j);
            return;
          }
          case oo: {
            xd(u, p, w, L);
            return;
          }
          case lo: {
            su(u, p, w, L);
            return;
          }
          case Pa: {
            bd(u, p, w, L);
            return;
          }
        }
      var ae = "";
      throw (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (w == null ? w : typeof w) + "." + ae));
    }
    function Sd(u, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      u[Symbol.toStringTag] === "Generator" && (Yl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yl = !0), u.entries === p && (Xl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xl = !0);
    }
    function Jn(u, p, w) {
      try {
        return Ql(u, p, w);
      } catch (L) {
        throw typeof L == "object" && L !== null && typeof L.then == "function" || (Na = Na !== null ? Na : xi()), L;
      }
    }
    function Ql(u, p, w) {
      if (p.node = w, typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Wc: {
            var L = w, j = L.type, ae = L.props, pe = L.ref;
            Zl(u, p, j, ae, pe);
            return;
          }
          case Os:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Pa: {
            var Ce = w, o = Ce._payload, h = Ce._init, S;
            try {
              S = h(o);
            } catch (lt) {
              throw typeof lt == "object" && lt !== null && typeof lt.then == "function" && jr(p, "Lazy"), lt;
            }
            Jn(u, p, S);
            return;
          }
        }
        if (en(w)) {
          uu(u, p, w);
          return;
        }
        var C = Uc(w);
        if (C) {
          Sd(w, C);
          var F = C.call(w);
          if (F) {
            var Z = F.next();
            if (!Z.done) {
              var de = [];
              do
                de.push(Z.value), Z = F.next();
              while (!Z.done);
              uu(u, p, de);
              return;
            }
            return;
          }
        }
        var Te = Object.prototype.toString.call(w);
        throw new Error("Objects are not valid as a React child (found: " + (Te === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : Te) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof w == "string") {
        var ze = p.blockedSegment;
        ze.lastPushedText = fr(p.blockedSegment.chunks, w, u.responseState, ze.lastPushedText);
        return;
      }
      if (typeof w == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = fr(p.blockedSegment.chunks, "" + w, u.responseState, tt.lastPushedText);
        return;
      }
      typeof w == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function uu(u, p, w) {
      for (var L = w.length, j = 0; j < L; j++) {
        var ae = p.treeContext;
        p.treeContext = To(ae, L, j);
        try {
          Jl(u, p, w[j]);
        } finally {
          p.treeContext = ae;
        }
      }
    }
    function er(u, p, w) {
      var L = p.blockedSegment, j = L.chunks.length, ae = Fo(
        u,
        j,
        null,
        L.formatContext,
        // Adopt the parent segment's leading text embed
        L.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      L.children.push(ae), L.lastPushedText = !1;
      var pe = Hl(u, p.node, p.blockedBoundary, ae, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var Ce = pe.ping;
      w.then(Ce, Ce);
    }
    function Jl(u, p, w) {
      var L = p.blockedSegment.formatContext, j = p.legacyContext, ae = p.context, pe = null;
      pe = p.componentStack;
      try {
        return Jn(u, p, w);
      } catch (Ce) {
        if ($l(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
          er(u, p, Ce), p.blockedSegment.formatContext = L, p.legacyContext = j, p.context = ae, di(ae), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = L, p.legacyContext = j, p.context = ae, di(ae), p.componentStack = pe, Ce;
      }
    }
    function cu(u, p, w, L) {
      var j = sr(u, L);
      if (p === null ? Ur(u, L) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = j, Vl(p, L), p.parentFlushed && u.clientRenderedBoundaries.push(p))), u.allPendingTasks--, u.allPendingTasks === 0) {
        var ae = u.onAllReady;
        ae();
      }
    }
    function Ed(u) {
      var p = this, w = u.blockedBoundary, L = u.blockedSegment;
      L.status = No, du(p, w, L);
    }
    function zo(u, p, w) {
      var L = u.blockedBoundary, j = u.blockedSegment;
      if (j.status = No, L === null)
        p.allPendingTasks--, p.status !== fa && (p.status = fa, p.destination !== null && E(p.destination));
      else {
        if (L.pendingTasks--, !L.forceClientRender) {
          L.forceClientRender = !0;
          var ae = w === void 0 ? new Error("The render was aborted by the server without a reason.") : w;
          L.errorDigest = p.onError(ae);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            ae && typeof ae.message == "string" ? ae = pe + ae.message : ae = pe + String(ae);
            var Ce = _r;
            _r = u;
            try {
              Vl(L, ae);
            } finally {
              _r = Ce;
            }
          }
          L.parentFlushed && p.clientRenderedBoundaries.push(L);
        }
        if (L.fallbackAbortableTasks.forEach(function(h) {
          return zo(h, p, w);
        }), L.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var o = p.onAllReady;
          o();
        }
      }
    }
    function Bo(u, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var w = p.children[0];
        w.id = p.id, w.parentFlushed = !0, w.status === Vr && Bo(u, w);
      } else {
        var L = u.completedSegments;
        L.push(p);
      }
    }
    function du(u, p, w) {
      if (p === null) {
        if (w.parentFlushed) {
          if (u.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          u.completedRootSegment = w;
        }
        if (u.pendingRootTasks--, u.pendingRootTasks === 0) {
          u.onShellError = wr;
          var L = u.onShellReady;
          L();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          w.parentFlushed && w.status === Vr && Bo(p, w), p.parentFlushed && u.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(Ed, u), p.fallbackAbortableTasks.clear();
        else if (w.parentFlushed && w.status === Vr) {
          Bo(p, w);
          var j = p.completedSegments;
          j.length === 1 && p.parentFlushed && u.partialBoundaries.push(p);
        }
      }
      if (u.allPendingTasks--, u.allPendingTasks === 0) {
        var ae = u.onAllReady;
        ae();
      }
    }
    function fu(u, p) {
      var w = p.blockedSegment;
      if (w.status === Bl) {
        di(p.context);
        var L = null;
        L = _r, _r = p;
        try {
          Jn(u, p, p.node), hr(w.chunks, u.responseState, w.lastPushedText, w.textEmbedded), p.abortSet.delete(p), w.status = Vr, du(u, p.blockedBoundary, w);
        } catch (ae) {
          if ($l(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
            var j = p.ping;
            ae.then(j, j);
          } else
            p.abortSet.delete(p), w.status = da, cu(u, p.blockedBoundary, w, ae);
        } finally {
          _r = L;
        }
      }
    }
    function ki(u) {
      if (u.status !== fa) {
        var p = go(), w = yi.current;
        yi.current = Js;
        var L;
        L = Mo.getCurrentStack, Mo.getCurrentStack = xi;
        var j = zl;
        gi(u.responseState);
        try {
          var ae = u.pingedTasks, pe;
          for (pe = 0; pe < ae.length; pe++) {
            var Ce = ae[pe];
            fu(u, Ce);
          }
          ae.splice(0, pe), u.destination !== null && Ho(u, u.destination);
        } catch (o) {
          sr(u, o), Ur(u, o);
        } finally {
          gi(j), yi.current = w, Mo.getCurrentStack = L, w === Js && di(p);
        }
      }
    }
    function wi(u, p, w) {
      switch (w.parentFlushed = !0, w.status) {
        case Bl: {
          var L = w.id = u.nextSegmentId++;
          return w.lastPushedText = !1, w.textEmbedded = !1, xa(p, u.responseState, L);
        }
        case Vr: {
          w.status = _o;
          for (var j = !0, ae = w.chunks, pe = 0, Ce = w.children, o = 0; o < Ce.length; o++) {
            for (var h = Ce[o]; pe < h.index; pe++)
              y(p, ae[pe]);
            j = Io(u, p, h);
          }
          for (; pe < ae.length - 1; pe++)
            y(p, ae[pe]);
          return pe < ae.length && (j = v(p, ae[pe])), j;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Io(u, p, w) {
      var L = w.boundary;
      if (L === null)
        return wi(u, p, w);
      if (L.parentFlushed = !0, L.forceClientRender)
        return In(p, u.responseState, L.errorDigest, L.errorMessage, L.errorComponentStack), wi(u, p, w), cl(p, u.responseState);
      if (L.pendingTasks > 0) {
        L.rootSegmentID = u.nextSegmentId++, L.completedSegments.length > 0 && u.partialBoundaries.push(L);
        var j = L.id = vr(u.responseState);
        return Ea(p, u.responseState, j), wi(u, p, w), ka(p, u.responseState);
      } else {
        if (L.byteSize > u.progressiveChunkSize)
          return L.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(L), Ea(p, u.responseState, L.id), wi(u, p, w), ka(p, u.responseState);
        Gi(p, u.responseState);
        var ae = L.completedSegments;
        if (ae.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = ae[0];
        return Io(u, p, pe), Zi(p, u.responseState);
      }
    }
    function hu(u, p, w) {
      return Ls(p, u.responseState, w.id, w.errorDigest, w.errorMessage, w.errorComponentStack);
    }
    function Ti(u, p, w) {
      return Tt(p, u.responseState, w.formatContext, w.id), Io(u, p, w), rn(p, w.formatContext);
    }
    function Ci(u, p, w) {
      for (var L = w.completedSegments, j = 0; j < L.length; j++) {
        var ae = L[j];
        es(u, p, w, ae);
      }
      return L.length = 0, dl(p, u.responseState, w.id, w.rootSegmentID);
    }
    function kd(u, p, w) {
      for (var L = w.completedSegments, j = 0; j < L.length; j++) {
        var ae = L[j];
        if (!es(u, p, w, ae))
          return j++, L.splice(0, j), !1;
      }
      return L.splice(0, j), !0;
    }
    function es(u, p, w, L) {
      if (L.status === _o)
        return !0;
      var j = L.id;
      if (j === -1) {
        var ae = L.id = w.rootSegmentID;
        if (ae === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ti(u, p, L);
      } else
        return Ti(u, p, L), _c(p, u.responseState, j);
    }
    function Ho(u, p) {
      g();
      try {
        var w = u.completedRootSegment;
        w !== null && u.pendingRootTasks === 0 && (Io(u, p, w), u.completedRootSegment = null, ll(p, u.responseState));
        var L = u.clientRenderedBoundaries, j;
        for (j = 0; j < L.length; j++) {
          var ae = L[j];
          hu(u, p, ae);
        }
        L.splice(0, j);
        var pe = u.completedBoundaries;
        for (j = 0; j < pe.length; j++) {
          var Ce = pe[j];
          Ci(u, p, Ce);
        }
        pe.splice(0, j), k(p), g(p);
        var o = u.partialBoundaries;
        for (j = 0; j < o.length; j++) {
          var h = o[j];
          if (!kd(u, p, h)) {
            u.destination = null, j++, o.splice(0, j);
            return;
          }
        }
        o.splice(0, j);
        var S = u.completedBoundaries;
        for (j = 0; j < S.length; j++) {
          var C = S[j];
          Ci(u, p, C);
        }
        S.splice(0, j);
      } finally {
        k(p), u.allPendingTasks === 0 && u.pingedTasks.length === 0 && u.clientRenderedBoundaries.length === 0 && u.completedBoundaries.length === 0 && (u.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), E(p));
      }
    }
    function wd(u) {
      f(function() {
        return ki(u);
      });
    }
    function pu(u, p) {
      if (u.status === Il) {
        u.status = fa, R(p, u.fatalError);
        return;
      }
      if (u.status !== fa && u.destination === null) {
        u.destination = p;
        try {
          Ho(u, p);
        } catch (w) {
          sr(u, w), Ur(u, w);
        }
      }
    }
    function Wo(u, p) {
      try {
        var w = u.abortableTasks;
        w.forEach(function(L) {
          return zo(L, u, p);
        }), w.clear(), u.destination !== null && Ho(u, u.destination);
      } catch (L) {
        sr(u, L), Ur(u, L);
      }
    }
    function Td(u, p) {
      return new Promise(function(w, L) {
        var j, ae, pe = new Promise(function(F, Z) {
          ae = F, j = Z;
        });
        function Ce() {
          var F = new ReadableStream(
            {
              type: "bytes",
              pull: function(Z) {
                pu(h, Z);
              },
              cancel: function(Z) {
                Wo(h);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          F.allReady = pe, w(F);
        }
        function o(F) {
          pe.catch(function() {
          }), L(F);
        }
        var h = pd(u, pn(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Vn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ae, Ce, o, j);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Wo(h, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        wd(h);
      });
    }
    Du.renderToReadableStream = Td, Du.version = t;
  }()), Du;
}
var Vi, Cf;
process.env.NODE_ENV === "production" ? (Vi = EE(), Cf = kE()) : (Vi = wE(), Cf = TE());
Ka.version = Vi.version;
Ka.renderToString = Vi.renderToString;
Ka.renderToStaticMarkup = Vi.renderToStaticMarkup;
Ka.renderToNodeStream = Vi.renderToNodeStream;
Ka.renderToStaticNodeStream = Vi.renderToStaticNodeStream;
Ka.renderToReadableStream = Cf.renderToReadableStream;
const CE = ({ width: e, height: t }) => {
  var Y, te;
  const { config: r } = se.useContext(wt), { sankey: n } = r, a = r == null ? void 0 : r.data[0], [l, f] = se.useState(0), s = se.useRef([]), [c, d] = se.useState(""), g = (I) => {
    d(I);
  }, y = () => {
    d("");
  }, [v, k] = se.useState(!1);
  se.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && k(!0);
  }, [window.innerWidth]);
  const E = () => {
    k(!1);
  };
  se.useEffect(() => {
    var ge;
    let I = 0;
    (ge = s == null ? void 0 : s.current) == null || ge.map((ve) => {
      const ke = ve == null ? void 0 : ve.getBoundingClientRect().width;
      ke > I && (I = ke);
    }), f(I);
  }, [s, n]);
  const M = Array.from(new Set((Y = a == null ? void 0 : a.links) == null ? void 0 : Y.flatMap((I) => [I.source, I.target]))), T = {
    nodes: M.map((I) => ({ id: I })),
    links: (te = a == null ? void 0 : a.links) == null ? void 0 : te.map((I) => ({
      source: M.findIndex((ge) => ge === I.source),
      target: M.findIndex((ge) => ge === I.target),
      value: I.value
    }))
  };
  let m = 5;
  const R = 50, O = vE().nodeWidth(n.nodeSize.nodeWidth).nodePadding(n.nodePadding).iterations(n.iterations).nodeAlign(hE).extent([
    [n.margin.margin_x, Number(n.margin.margin_y)],
    [e - m - l, r.heights.vertical - R]
  ]), { nodes: N, links: _ } = O(T), D = (I) => {
    var je;
    let ge = 30, ve = 0, ke = "node-value--storynode", Ne = !0;
    return (je = a == null ? void 0 : a.storyNodeText) != null && je.every((Qe) => Qe.StoryNode !== I) && (Ne = !1, ve = 10, ge = 8, ke = "node-value"), { textPositionHorizontal: ge, textPositionVertical: ve, classStyle: ke, storyNodes: Ne };
  }, B = (I) => {
    const ge = T.nodes.find((Ne) => Ne.id === I), ve = [], ke = [];
    return ge && (_.forEach((Ne) => {
      const je = Ne.target, Qe = Ne.source;
      je.id === I && ve.push(Qe.id);
    }), ve.forEach((Ne) => {
      _.forEach((je) => {
        const Qe = je.target, Oe = je.source;
        Qe.id === c && Oe.id === Ne && ke.push(je);
      });
    })), { sourceNodes: ve, activeLinks: ke };
  }, H = `${((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).value}`, U = `${((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).summary}`, X = ((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).column1Label, Q = ((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).column2Label, K = ((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).column1, oe = ((a == null ? void 0 : a.tooltips.find((I) => I.node === c)) || {}).column2, fe = ({ columnData: I }) => /* @__PURE__ */ i.createElement("ul", null, I == null ? void 0 : I.map((ge, ve) => /* @__PURE__ */ i.createElement("li", { key: ve }, ge.label, ": ", ge.value, " (", ge.additional_info, "%)"))), W = Ka.renderToString(/* @__PURE__ */ i.createElement(fe, { columnData: K })), ie = Ka.renderToString(/* @__PURE__ */ i.createElement(fe, { columnData: oe })), re = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${c}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${H}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${U}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${X}<strong></span>
                          ${W}
                        </div>
                        <div>
                          <span><strong>${Q}<strong></span>
                          ${ie}
                        </div>
                      </div>
                    </div>`, ue = T.nodes.map((I, ge) => {
    var we, le;
    let { textPositionHorizontal: ve, textPositionVertical: ke, classStyle: Ne, storyNodes: je } = D(I.id), { sourceNodes: Qe } = B(c), Oe = n.opacity.nodeOpacityDefault, ye = n.nodeColor.default;
    return c !== I.id && c !== "" && !Qe.includes(I.id) && (ye = n.nodeColor.inactive, Oe = n.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(nt, { className: "", key: ge, innerRef: (Be) => s.current[ge] = Be }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: I.y1 - I.y0 + 2,
        width: O.nodeWidth(),
        x: I.x0,
        y: I.y0 - 1,
        fill: ye,
        fillOpacity: Oe,
        rx: n.rxValue,
        "data-tooltip-html": a.tooltips && r.enableTooltips ? re : null,
        "data-tooltip-id": "tooltip",
        onClick: () => g(I.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), je ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Ct,
      {
        x: I.x0 + ve,
        textAnchor: T.nodes.length - 1 === ge ? "end" : "start",
        verticalAnchor: "end",
        y: (I.y1 + I.y0) / 2 - 30,
        fill: n.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((we = a == null ? void 0 : a.storyNodeText) == null ? void 0 : we.find((Be) => Be.StoryNode === I.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(Ct, { verticalAnchor: "end", className: Ne, x: I.x0 + ve, y: (I.y1 + I.y0 + 25) / 2, fill: n.storyNodeFontColor || n.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof I.value == "number" ? I.value.toLocaleString() : I.value), /* @__PURE__ */ i.createElement(
      Ct,
      {
        x: I.x0 + ve,
        y: (I.y1 + I.y0) / 2 + 50,
        fill: n.nodeFontColor,
        fontWeight: "bold",
        textAnchor: T.nodes.length === ge ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((le = a == null ? void 0 : a.storyNodeText) == null ? void 0 : le.find((Be) => Be.StoryNode === I.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: I.x0 + ve, y: (I.y1 + I.y0) / 2 + ke, dominantBaseline: "text-before-edge", fill: n.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: I.id, className: "node-id" }, I.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: I.x0 + ve,
        y: (I.y1 + I.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: n.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: Ne }, n.nodeValueStyle.textBefore + (typeof I.value == "number" ? I.value.toLocaleString() : I.value) + n.nodeValueStyle.textAfter)
    )));
  }), ee = _.map((I, ge) => {
    const ke = SE()(I);
    let Ne = n.opacity.LinkOpacityDefault, je = n.linkColor.default, { activeLinks: Qe } = B(c);
    return !Qe.includes(I) && c !== "" && (je = n.linkColor.inactive, Ne = n.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: ge, d: ke, stroke: je, fill: "none", strokeOpacity: Ne, strokeWidth: I.width + 2 });
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(r.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(nt, { className: "links" }, ee), /* @__PURE__ */ i.createElement(nt, { className: "nodes" }, ue)), /* @__PURE__ */ i.createElement(ay, { id: "tooltip", afterHide: () => y(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), v && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("button", { className: "visually-hidden", onClick: E }, "Select for accessible version."), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var AE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const nr = AE;
function PE(e) {
  var t = e.labelOffset, r = e.labelProps, n = e.orientation, a = e.range, l = e.tickLabelFontSize, f = e.tickLength, s = n === nr.left || n === nr.top ? -1 : 1, c, d, g;
  if (n === nr.top || n === nr.bottom) {
    var y = n === nr.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    c = (Number(a[0]) + Number(a[a.length - 1])) / 2, d = s * (f + t + l + y);
  } else
    c = s * ((Number(a[0]) + Number(a[a.length - 1])) / 2), d = -(f + t), g = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: d,
    transform: g
  };
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function RE(e) {
  var t = e.hideTicks, r = e.horizontal, n = e.orientation, a = e.tickClassName, l = e.tickComponent, f = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, d = e.tickTransform, g = e.ticks, y = e.strokeWidth, v = e.tickLineProps;
  return g.map(function(k) {
    var E, M = k.value, T = k.index, m = k.from, R = k.to, O = k.formattedValue, N = (E = f[T]) != null ? E : {}, _ = Math.max(10, typeof N.fontSize == "number" && N.fontSize || 0), D = R.y + (r && n !== nr.top ? _ : 0);
    return /* @__PURE__ */ i.createElement(nt, {
      key: "visx-tick-" + M + "-" + T,
      className: Cn("visx-axis-tick", a),
      transform: d
    }, !t && /* @__PURE__ */ i.createElement(Jt, vs({
      from: m,
      to: R,
      stroke: c,
      strokeWidth: y,
      strokeLinecap: "square"
    }, v)), l ? l(vs({}, N, {
      x: R.x,
      y: D,
      formattedValue: O
    })) : /* @__PURE__ */ i.createElement(Ct, vs({
      x: R.x,
      y: D
    }, N), O));
  });
}
function fc() {
  return fc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fc.apply(this, arguments);
}
var nm = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function LE(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, n = e.axisToPoint, a = e.hideAxisLine, l = e.hideTicks, f = e.horizontal, s = e.label, c = s === void 0 ? "" : s, d = e.labelClassName, g = e.labelOffset, y = g === void 0 ? 14 : g, v = e.labelProps, k = v === void 0 ? nm : v, E = e.orientation, M = E === void 0 ? nr.bottom : E, T = e.scale, m = e.stroke, R = m === void 0 ? "#222" : m, O = e.strokeDasharray, N = e.strokeWidth, _ = N === void 0 ? 1 : N, D = e.tickClassName, B = e.tickComponent, H = e.tickLineProps, U = e.tickLabelProps, X = e.tickLength, Q = X === void 0 ? 8 : X, K = e.tickStroke, oe = K === void 0 ? "#222" : K, fe = e.tickTransform, W = e.ticks, ie = e.ticksComponent, re = ie === void 0 ? RE : ie, ue = fc({}, nm, typeof U == "object" ? U : null), ee = W.map(function(te) {
    var I = te.value, ge = te.index;
    return typeof U == "function" ? U(I, ge, W) : ue;
  }), Y = Math.max.apply(Math, [10].concat(ee.map(function(te) {
    return typeof te.fontSize == "number" ? te.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, re({
    hideTicks: l,
    horizontal: f,
    orientation: M,
    scale: T,
    tickClassName: D,
    tickComponent: B,
    tickLabelProps: ee,
    tickStroke: oe,
    tickTransform: fe,
    ticks: W,
    strokeWidth: _,
    tickLineProps: H
  }), !a && /* @__PURE__ */ i.createElement(Jt, {
    className: Cn("visx-axis-line", r),
    from: t,
    to: n,
    stroke: R,
    strokeWidth: _,
    strokeDasharray: O
  }), c && /* @__PURE__ */ i.createElement(Ct, fc({
    className: Cn("visx-axis-label", d)
  }, PE({
    labelOffset: y,
    labelProps: k,
    orientation: M,
    range: T.range(),
    tickLabelFontSize: Y,
    tickLength: Q
  }), k), c));
}
function DE(e, t) {
  t === void 0 && (t = "center");
  var r = e;
  if (t !== "start" && "bandwidth" in r) {
    var n = r.bandwidth();
    return t === "center" && (n /= 2), r.round() && (n = Math.round(n)), function(a) {
      var l = r(a);
      return typeof l == "number" ? l + n : l;
    };
  }
  return e;
}
function OE(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Ev;
}
function Ou(e, t) {
  var r = e.x, n = e.y;
  return new al(t ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  });
}
function Af() {
  return Af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Af.apply(this, arguments);
}
var Kd = 0;
function ME(e) {
  return e === void 0 && (e = Kd), typeof e == "number" ? {
    start: e,
    end: e
  } : Af({
    start: Kd,
    end: Kd
  }, e);
}
var _E = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pf.apply(this, arguments);
}
function NE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Rc(e) {
  var t = e.children, r = t === void 0 ? LE : t, n = e.axisClassName, a = e.hideAxisLine, l = a === void 0 ? !1 : a, f = e.hideTicks, s = f === void 0 ? !1 : f, c = e.hideZero, d = c === void 0 ? !1 : c, g = e.innerRef, y = e.left, v = y === void 0 ? 0 : y, k = e.numTicks, E = k === void 0 ? 10 : k, M = e.orientation, T = M === void 0 ? nr.bottom : M, m = e.rangePadding, R = m === void 0 ? 0 : m, O = e.scale, N = e.tickFormat, _ = e.tickLength, D = _ === void 0 ? 8 : _, B = e.tickValues, H = e.top, U = H === void 0 ? 0 : H, X = NE(e, _E), Q = N ?? OE(O), K = T === nr.left, oe = T === nr.top, fe = oe || T === nr.bottom, W = DE(O), ie = K || oe ? -1 : 1, re = O.range(), ue = ME(R), ee = Ou({
    x: Number(re[0]) + 0.5 - ue.start,
    y: 0
  }, fe), Y = Ou({
    x: Number(re[re.length - 1]) + 0.5 + ue.end,
    y: 0
  }, fe), te = (B ?? Sv(O, E)).filter(function(ge) {
    return !d || ge !== 0 && ge !== "0";
  }).map(function(ge, ve) {
    return {
      value: ge,
      index: ve
    };
  }), I = te.map(function(ge) {
    var ve = ge.value, ke = ge.index, Ne = bv(W(ve));
    return {
      value: ve,
      index: ke,
      from: Ou({
        x: Ne,
        y: 0
      }, fe),
      to: Ou({
        x: Ne,
        y: D * ie
      }, fe),
      formattedValue: Q(ve, ke, te)
    };
  });
  return /* @__PURE__ */ i.createElement(nt, {
    className: Cn("visx-axis", n),
    innerRef: g,
    top: U,
    left: v
  }, r(Pf({}, X, {
    axisFromPoint: ee,
    axisToPoint: Y,
    hideAxisLine: l,
    hideTicks: s,
    hideZero: d,
    horizontal: fe,
    numTicks: E,
    orientation: T,
    rangePadding: R,
    scale: O,
    tickFormat: Q,
    tickLength: D,
    tickPosition: W,
    tickSign: ie,
    ticks: I
  })));
}
var FE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function hc() {
  return hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hc.apply(this, arguments);
}
function $E(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var zE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function BE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, s = $E(e, FE), c = typeof f == "function" ? f : hc({}, zE, f);
  return /* @__PURE__ */ i.createElement(Rc, hc({
    axisClassName: Cn("visx-axis-left", t),
    labelOffset: n,
    orientation: nr.left,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var IE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pc.apply(this, arguments);
}
function HE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var WE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function VE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, s = HE(e, IE), c = typeof f == "function" ? f : pc({}, WE, f);
  return /* @__PURE__ */ i.createElement(Rc, pc({
    axisClassName: Cn("visx-axis-right", t),
    labelOffset: n,
    orientation: nr.right,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var jE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mc.apply(this, arguments);
}
function UE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var KE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function YE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, s = UE(e, jE), c = typeof f == "function" ? f : mc({}, KE, f);
  return /* @__PURE__ */ i.createElement(Rc, mc({
    axisClassName: Cn("visx-axis-top", t),
    labelOffset: n,
    orientation: nr.top,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var XE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gc.apply(this, arguments);
}
function qE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var GE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Bu(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, l = a === void 0 ? 8 : a, f = e.tickLabelProps, s = qE(e, XE), c = typeof f == "function" ? f : gc({}, GE, f);
  return /* @__PURE__ */ i.createElement(Rc, gc({
    axisClassName: Cn("visx-axis-bottom", t),
    labelOffset: n,
    orientation: nr.bottom,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
const yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: c0,
  curveBasisClosed: d0,
  curveBasisOpen: f0,
  curveBundle: h0,
  curveCardinal: p0,
  curveCardinalClosed: m0,
  curveCardinalOpen: g0,
  curveCatmullRom: y0,
  curveCatmullRomClosed: v0,
  curveCatmullRomOpen: x0,
  curveLinear: kc,
  curveLinearClosed: af,
  curveMonotoneX: zu,
  curveMonotoneY: b0,
  curveNatural: S0,
  curveStep: E0,
  curveStepAfter: w0,
  curveStepBefore: k0
}, Symbol.toStringTag, { value: "Module" })), ZE = (e) => {
  var _;
  const { xScale: t, yScale: r, yMax: n, xMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, isDebug: s, children: c } = e;
  let { transformedData: d, config: g, handleLineType: y, parseDate: v, formatDate: k, formatNumber: E, seriesHighlight: M, colorScale: T, rawData: m } = se.useContext(wt);
  const R = g.brush.active && ((_ = g.brush.data) != null && _.length) ? g.brush.data : d;
  if (!R)
    return;
  const O = (D) => (Sn(g.xAxis) ? t(v(D[g.xAxis.dataKey], !1)) : t(D[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), N = (D, B, H = void 0) => r(D[H.dataKey]);
  return R && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(Br, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(nt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((D, B) => {
    let H = R.map((K) => ({
      [g.xAxis.dataKey]: K[g.xAxis.dataKey],
      [D.dataKey]: K[D.dataKey]
    })), U = yc[D.lineType], X = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(D.dataKey) === -1, Q = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(D.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: B }, /* @__PURE__ */ i.createElement(
      pa,
      {
        data: H,
        x: (K) => O(K),
        y: (K) => N(K, B, D),
        stroke: Q ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[D.dataKey] : D.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: U,
        strokeDasharray: D.type ? y(D.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      G0,
      {
        key: "area-chart",
        fill: Q ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[D.dataKey] : D.dataKey) : "#000" : "transparent",
        fillOpacity: X ? 0.25 : 0.5,
        data: H,
        x: (K) => O(K),
        y: (K) => N(K, B, D),
        yScale: r,
        curve: U,
        strokeDasharray: D.type ? y(D.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(gr, { width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (D) => l(D, m), onMouseLeave: f }))));
}, QE = se.memo(ZE), vc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, JE = ({ xScale: e, yScale: t, yMax: r, xMax: n, handleTooltipMouseOver: a, handleTooltipMouseOff: l, isDebug: f }) => {
  var M;
  let { transformedData: s, config: c, seriesHighlight: d, colorScale: g, rawData: y } = se.useContext(wt);
  const v = c.brush.active && ((M = c.brush.data) != null && M.length) ? c.brush.data : s;
  if (!v)
    return;
  const k = (T) => {
    if (c.xAxis.type === "categorical")
      return e(T);
    if (Sn(c.xAxis)) {
      let m = new Date(T);
      return e(m);
    }
  }, E = 2;
  return v && /* @__PURE__ */ i.createElement("svg", { height: Number(r) }, /* @__PURE__ */ i.createElement(Br, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(nt, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + E / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    nS,
    {
      data: v,
      keys: c.runtime.areaSeriesKeys.map((T) => T.dataKey) || c.series.map((T) => T.dataKey),
      x0: (T) => k(T.data[c.xAxis.dataKey]),
      y0: (T) => Number(t(T[0])),
      y1: (T) => Number(t(T[1])),
      curve: yc[vc[c.stackedAreaChartLineType]]
    },
    ({ stacks: T, path: m }) => T.map((R, O) => {
      let N = c.legend.behavior === "highlight" && d.length > 0 && d.indexOf(R.key) === -1, _ = c.legend.behavior === "highlight" || d.length === 0 || d.indexOf(R.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: R.key,
            d: m(R) || "",
            strokeWidth: 2,
            stroke: _ ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[R.key] : R.key) : "#000" : "transparent",
            fillOpacity: N ? 0.2 : 1,
            fill: _ ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[R.key] : R.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(gr, { width: Number(n), height: Number(r), fill: "transparent", onMouseMove: (T) => a(T, y), onMouseLeave: l }))));
}, ek = se.memo(JE), As = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: n, parseDate: a, formatDate: l, setSeriesHighlight: f } = se.useContext(wt), { orientation: s } = e, [c, d] = se.useState(null), g = s === "horizontal", y = 1, v = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, E = e.yAxis.labelPlacement === "Below Bar", M = e.yAxis.displayNumbersOnBar, T = e.orientation === "horizontal" ? "yAxis" : "xAxis", m = e.barStyle === "rounded", R = e.visualizationSubType === "stacked", O = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", _ = e.runtime.seriesKeys.length, D = { small: 16, medium: 18, large: 20 }, B = Object.keys(e.runtime.seriesLabels).length > 1;
  return se.useEffect(() => {
    s === "horizontal" && !e.yAxis.labelPlacement && n({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, n]), se.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && n({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), se.useEffect(() => {
    e.visualizationSubType === "horizontal" && n({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && n({ ...e, isLollipopChart: !0 }), (m || e.barStyle === "flat") && n({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (re) => re < 4 ? 1 : re < 5 ? 4 : re < 10 ? 6 : re < 15 ? 7 : re < 20 || re < 90 ? 8 : 0,
    isHorizontal: g,
    barBorderWidth: y,
    lollipopBarWidth: v,
    lollipopShapeSize: k,
    isLabelBelowBar: E,
    displayNumbersOnBar: M,
    section: T,
    isRounded: m,
    isStacked: R,
    tipRounding: O,
    radius: N,
    stackCount: _,
    fontSize: D,
    hasMultipleSeries: B,
    applyRadius: (re) => {
      if (re == null || !m)
        return {};
      let ue = {};
      return (R && re + 1 === _ || !R) && (ue = g ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !R && re === -1 && (ue = g ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), O === "full" && R && re === 0 && _ > 1 && (ue = g ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), O === "full" && (R && re === 0 && _ === 1 || !R) && (ue = { borderRadius: N }), ue;
    },
    updateBars: (re) => {
      if (e.visualizationType !== "Bar" && !g)
        return re;
      const ue = [...re];
      let ee;
      const Y = {
        stacked: e.barHeight,
        lollipop: v
      };
      R ? ee = Y.stacked : ee = Y[e.isLollipopChart ? "lollipop" : "stacked"] * _;
      const te = E ? D[e.fontSize] * 1.2 : 0;
      let I = Number(e.barSpace), ge = ue.length * (ee + te + I);
      return g && (e.heights.horizontal = ge), ue.map((ve, ke) => {
        let Ne = 0;
        return ve.index !== 0 && (Ne = (ee + I + te) * ke), { ...ve, y: Ne, height: ee };
      });
    },
    assignColorsToValues: (re, ue, ee) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ee;
      const Y = e.customColors ?? t[e.palette], te = r.map((ke) => ke[e.legend.colorCode]);
      let I = /* @__PURE__ */ new Map(), ge = [];
      for (let ke = 0; ke < te.length; ke++)
        I.has(te[ke]) || I.set(te[ke], Y[I.size % Y.length]), ge.push(I.get(te[ke]));
      for (; ge.length < re; )
        ge = ge.concat(ge);
      return ge[ue];
    },
    getHighlightedBarColorByValue: (re) => {
      const ue = e == null ? void 0 : e.highlightedBarValues.find((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? l(a(ee.value)) === re : ee.value === re;
      });
      return ue != null && ue.color ? ue.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (re) => {
      const ue = e == null ? void 0 : e.highlightedBarValues.filter((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? l(a(ee.value)) === re : ee.value === re;
      })[0];
      return ue != null && ue.color ? ue : !1;
    },
    getAdditionalColumn: (re, ue) => {
      if (!ue)
        return "";
      const ee = e.columns, Y = [];
      let te = "";
      const I = r.find((ge) => ge[e.xAxis.dataKey] === ue) || {};
      return Object.keys(ee).forEach((ge) => {
        if (re && e.columns[ge].series && e.columns[ge].series !== re)
          return;
        const ve = {
          addColPrefix: e.columns[ge].prefix,
          addColSuffix: e.columns[ge].suffix,
          addColRoundTo: e.columns[ge].roundToPlace ? e.columns[ge].roundToPlace : "",
          addColCommas: e.columns[ge].commas
        }, ke = xm(I[e.columns[ge].name], "left", !0, e, ve);
        e.columns[ge].tooltips && Y.push([e.columns[ge].label, ke]);
      }), Y.forEach((ge) => {
        te += `${ge[0]} : ${ge[1]} <br/>`;
      }), te;
    },
    hoveredBar: c,
    setHoveredBar: d,
    onMouseOverBar: (re, ue) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && ue && f([ue]), d(re);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Ps = se.createContext(null), dh = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: n, handleTooltipMouseOff: a, handleTooltipMouseOver: l, handleTooltipClick: f, tooltipData: s, showTooltip: c, hideTooltip: d }) => {
  const { parseDate: g, config: y } = se.useContext(wt), { runtime: v, regions: k, visualizationType: E, orientation: M, xAxis: T } = y, m = e.domain(), R = (_) => {
    let D;
    if (!(_ != null && _.fromType) || _.fromType === "Fixed") {
      const B = new Date(_.from), H = g(ts(y.xAxis.dateParseFormat, B)).getTime();
      D = e(H), E === "Bar" && T.type === "date-time" && (D = D - t * r / 2);
    }
    if (_.fromType === "Previous Days") {
      const B = Number(_.from) || 0, H = m.map((K) => ts(y.xAxis.dateParseFormat, new Date(K))), U = _.toType === "Last Date" ? new Date(m[m.length - 1]) : new Date(_.to), X = y.xAxis.type === "categorical" ? ts(y.xAxis.dateParseFormat, U) : ts(y.xAxis.dateParseFormat, U), Q = new Date(X);
      if (D = new Date(Q.setDate(Q.getDate() - B)), T.type === "categorical") {
        const K = ts(y.xAxis.dateParseFormat, D), oe = (ie) => ie === K, fe = H.findIndex(oe), W = e.domain()[fe];
        D = y.xAxis.type === "categorical" ? W : D;
      }
      D = e(D);
    }
    if (T.type === "categorical" && _.fromType !== "Previous Days" && (D = e(_.from)), E === "Line" || E === "Area Chart") {
      let B = Number(y.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), D = D + B;
    }
    return E === "Bar" && y.xAxis.type === "date-time" && _.fromType === "Previous Days" && (D = D - t * r / 2), D;
  }, O = (_) => {
    let D;
    if (T.type === "categorical" && (D = e(_.to)), Sn(T) && ((!(_ != null && _.toType) || _.toType === "Fixed") && (D = e(g(_.to).getTime())), (E === "Bar" || y.visualizationType === "Combo") && (D = _.toType !== "Last Date" ? e(g(_.to).getTime()) + t * r : D)), _.toType === "Last Date") {
      const B = m[m.length - 1];
      D = Number(e(B) + ((E === "Bar" || E === "Combo") && y.xAxis.type === "date" ? t * r : 0));
    }
    if (E === "Line" || E === "Area Chart") {
      let B = Number(y.yAxis.size);
      e.bandwidth && (B += e.bandwidth() / 2), D = D + B;
    }
    return E === "Bar" && y.xAxis.type === "date-time" && _.toType !== "Last Date" && (D = D - t * r / 2), (E === "Bar" || E === "Combo") && T.type === "categorical" && (D = D + (E === "Bar" || E === "Combo" ? t * r : 0)), D;
  }, N = (_, D) => _ - D;
  if (k && M === "vertical")
    return k.map((_) => {
      const D = R(_), B = O(_), H = N(B, D);
      if (!D || !B)
        return null;
      const U = () => /* @__PURE__ */ i.createElement(
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
      ), X = () => /* @__PURE__ */ i.createElement("rect", { x: D, y: 0, width: H, height: n, fill: _.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(nt, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: _.label, onMouseMove: l, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(s), showTooltip: c }, /* @__PURE__ */ i.createElement(U, null), /* @__PURE__ */ i.createElement(X, null), /* @__PURE__ */ i.createElement(Ct, { x: D + H / 2, y: 5, fill: _.color, verticalAnchor: "start", textAnchor: "middle" }, _.label));
    });
};
function Lc(e) {
  const { config: t, index: r, id: n, className: a, background: l, borderColor: f, borderWidth: s, width: c, height: d, x: g, y, onMouseOver: v, onMouseLeave: k, onClick: E, tooltipHtml: M, tooltipId: T, styleOverrides: m } = e, R = t.orientation === "horizontal", O = t.barStyle === "rounded", N = t.visualizationSubType === "stacked", _ = t.tipRounding, D = t.runtime.seriesKeys.length;
  let B = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (B > c / 2 || B > d / 2) && (B = Math.min(c / 2, d / 2));
  const H = () => `M${g},${y + d}
      L${g},${y + B}
      Q${g},${y} ${g + B},${y}
      L${g + c - B},${y}
      Q${g + c},${y} ${g + c},${y + B}
      L${g + c},${y + d}
      L${g},${y + d}`, U = () => `M${g},${y + d}
      L${g},${y}
      L${g + c - B},${y}
      Q${g + c},${y} ${g + c},${y + B}
      L${g + c},${y + d - B}
      Q${g + c},${y + d} ${g + c - B},${y + d}
      L${g},${y + d}`, X = () => `M${g + B},${y + d}
      Q${g},${y + d} ${g},${y + d - B}
      L${g},${y}
      L${g + c},${y}
      L${g + c},${y + d - B}
      Q${g + c},${y + d} ${g + c - B},${y + d}
      L${g + B},${y + d}`, Q = () => `M${g + B},${y + d}
      Q${g},${y + d} ${g},${y + d - B}
      L${g},${y + B}
      Q${g},${y} ${g + B},${y}
      L${g + c},${y}
      L${g + c},${y + d}
      L${g + B},${y + d}`, K = () => `M${g + B},${y + d}
      Q${g},${y + d} ${g},${y + d - B}
      L${g},${y + B}
      Q${g},${y} ${g + B},${y}
      L${g + c - B},${y}
      Q${g + c},${y} ${g + c},${y + B}
      L${g + c},${y + d - B}
      Q${g + c},${y + d} ${g + c - B},${y + d}
      L${g + B},${y + d}`, oe = () => `M${g},${y}
      L${g + c},${y}
      L${g + c},${y + d}
      L${g},${y + d}
      L${g},${y}`;
  let fe;
  return r == null || !O ? fe = oe() : (fe = oe(), (N && r + 1 === D || !N) && (fe = R ? U() : H()), !N && r === -1 && (fe = R ? Q() : X()), _ === "full" && N && r === 0 && D > 1 && (fe = R ? Q() : X()), _ === "full" && (N && r === 0 && D === 1 || !N) && (fe = K())), /* @__PURE__ */ i.createElement(
    "path",
    {
      id: n,
      className: a,
      d: fe,
      fill: l,
      stroke: f,
      strokeWidth: s,
      onMouseOver: v,
      onMouseLeave: k,
      onClick: E,
      "data-tooltip-html": M,
      "data-tooltip-id": T,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const tk = () => {
  var B;
  const [e, t] = se.useState(0), { xScale: r, yScale: n, xMax: a, yMax: l } = se.useContext(Ps), { transformedData: f, colorScale: s, seriesHighlight: c, config: d, formatNumber: g, formatDate: y, parseDate: v, setSharedFilter: k } = se.useContext(wt), { isHorizontal: E, barBorderWidth: M, applyRadius: T, hoveredBar: m, getAdditionalColumn: R, onMouseLeaveBar: O, onMouseOverBar: N } = As(), { orientation: _ } = d, D = d.brush.active && ((B = d.brush.data) != null && B.length) ? d.brush.data : f;
  return d.visualizationSubType === "stacked" && !E && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(lS, { data: D, keys: d.runtime.barSeriesKeys || d.runtime.seriesKeys, x: (H) => H[d.runtime.xAxis.dataKey], xScale: r, yScale: n, color: s }, (H) => H.reverse().map(
    (U) => U.bars.map((X) => {
      let Q = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(X.key) === -1, K = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(X.key) !== -1, oe = d.xAxis.type === "date-time" ? d.barThickness * (r.range()[1] - r.range()[0]) : a / U.bars.length, fe = oe * (d.xAxis.type === "date-time" ? 1 : d.barThickness || 0.8);
      oe * (1 - (d.barThickness || 0.8)) / 2;
      const W = X.bar.data[d.runtime.xAxis.dataKey], ie = d.runtime.xAxis.type === "date" ? y(v(W)) : W, re = g(X.bar ? X.bar.data[X.key] : 0, "left");
      if (!re)
        return;
      const ue = r(d.runtime.xAxis.type === "date" ? v(W) : W) - (d.xAxis.type === "date" && d.xAxis.sortDates ? fe / 2 : 0);
      T(U.index);
      const ee = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${ie}` : ie, Y = R(m), te = `${d.runtime.seriesLabels[X.key]}: ${re}`, I = `<ul>
                  <li class="tooltip-heading"">${ee}</li>
                  <li class="tooltip-body ">${te}</li>
                  <li class="tooltip-body ">${Y}</li>
                    </li></ul>`;
      return t(fe), /* @__PURE__ */ i.createElement(nt, { key: `${U.index}--${X.index}--${_}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-stack-${U.index}-${X.index}`, id: `barStack${U.index}-${X.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(Ct, { display: d.labels && K ? "block" : "none", opacity: Q ? 0.5 : 1, x: ue + e / 2, y: X.y - 5, fill: "#000", textAnchor: "middle" }, re), Lc({
        config: d,
        index: U.index,
        background: s(d.runtime.seriesLabels[X.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${d.barHasBorder === "true" ? M : 0}px`,
        width: fe,
        height: X.height,
        x: ue,
        y: X.y,
        onMouseOver: () => N(ie, X.key),
        onMouseLeave: O,
        tooltipHtml: I,
        tooltipId: `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
        onClick: (ge) => {
          ge.preventDefault(), k && (X[d.xAxis.dataKey] = ie, k(d.uid, X));
        },
        styleOverrides: {
          animationDelay: `${U.index * 0.5}s`,
          transformOrigin: `${fe / 2}px ${X.y + X.height}px`,
          opacity: Q ? 0.2 : 1,
          display: K ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ i.createElement(dh, { xScale: r, yMax: l, barWidth: e, totalBarsInGroup: 1 }));
}, nk = () => {
  const { yMax: e, yScale: t, xScale: r } = se.useContext(Ps), {
    animatedChart: n,
    colorScale: a,
    config: l,
    formatDate: f,
    formatNumber: s,
    getTextWidth: c,
    parseDate: d,
    seriesHighlight: g,
    setSharedFilter: y,
    transformedData: v
  } = se.useContext(wt), {
    barBorderWidth: k,
    displayNumbersOnBar: E,
    fontSize: M,
    getAdditionalColumn: T,
    hoveredBar: m,
    isHorizontal: R,
    isLabelBelowBar: O,
    onMouseLeaveBar: N,
    onMouseOverBar: _,
    updateBars: D
  } = As(), { orientation: B, visualizationSubType: H } = l;
  return l.visualizationSubType === "stacked" && R && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(cS, { data: v, keys: l.runtime.barSeriesKeys || l.runtime.seriesKeys, height: e, y: (U) => U[l.runtime.yAxis.dataKey], xScale: r, yScale: t, color: a, offset: "none" }, (U) => U.map(
    (X) => D(X.bars).map((Q, K) => {
      let oe = l.legend.behavior === "highlight" && g.length > 0 && g.indexOf(Q.key) === -1, fe = l.legend.behavior === "highlight" || g.length === 0 || g.indexOf(Q.key) !== -1;
      l.barHeight = Number(l.barHeight);
      let W = "#000000";
      const ie = s(v[Q.index][Q.key], "left"), re = l.runtime.yAxis.type === "date" ? f(d(v[Q.index][l.runtime.originalXAxis.dataKey])) : v[Q.index][l.runtime.originalXAxis.dataKey];
      let ue = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${re}` : re, ee = c(ie, `normal ${M[l.fontSize]}px sans-serif`);
      const Y = T(m), te = `${l.runtime.seriesLabels[Q.key]}: ${ie}`, I = `<ul>
                  <li class="tooltip-heading"">${ue}</li>
                  <li class="tooltip-body ">${te}</li>
                  <li class="tooltip-body ">${Y}</li>
                    </li></ul>`;
      return zr.contrast(W, a(l.runtime.seriesLabels[Q.key])) < 4.9 && (W = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { key: K, id: `barStack${X.index}-${Q.index}`, className: "stack horizontal" }, Lc({
        config: l,
        index: X.index,
        className: `animated-chart group ${n ? "animated" : ""}`,
        background: a(l.runtime.seriesLabels[Q.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? k : 0}px`,
        width: Q.width,
        height: Q.height,
        x: Q.x,
        y: Q.y,
        onMouseOver: () => _(re, Q.key),
        onMouseLeave: N,
        tooltipHtml: I,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (ge) => {
          ge.preventDefault(), y && (Q[l.xAxis.dataKey] = ie, y(l.uid, Q));
        },
        styleOverrides: {
          animationDelay: `${X.index * 0.5}s`,
          transformOrigin: `${Q.x}px 0`,
          opacity: oe ? 0.2 : 1,
          display: fe ? "block" : "none"
        }
      }), B === "horizontal" && H === "stacked" && O && X.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        Ct,
        {
          x: `${Q.x + (l.isLollipopChart ? 15 : 5)}`,
          y: Q.y + Q.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        re
      ), E && ee < Q.width && /* @__PURE__ */ i.createElement(
        Ct,
        {
          display: fe ? "block" : "none",
          x: Q.x + X.bars[Q.index].width / 2,
          y: Q.y + Q.height / 2,
          fill: W,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ie
      )));
    })
  )));
}, rk = () => {
  var Y;
  const { xScale: e, yScale: t, xMax: r, yMax: n, seriesScale: a } = se.useContext(Ps), [l, f] = se.useState(0), [s, c] = se.useState(0), {
    applyRadius: d,
    assignColorsToValues: g,
    barBorderWidth: y,
    generateIconSize: v,
    getAdditionalColumn: k,
    getHighlightedBarByValue: E,
    getHighlightedBarColorByValue: M,
    lollipopBarWidth: T,
    lollipopShapeSize: m,
    onMouseLeaveBar: R,
    onMouseOverBar: O,
    section: N
  } = As(), {
    colorScale: _,
    config: D,
    dashboardConfig: B,
    formatDate: H,
    formatNumber: U,
    getXAxisData: X,
    getYAxisData: Q,
    isNumber: K,
    parseDate: oe,
    seriesHighlight: fe,
    setSharedFilter: W,
    transformedData: ie
  } = se.useContext(wt), { HighLightedBarUtils: re } = Cc(D), ue = D.brush.active && ((Y = D.brush.data) != null && Y.length) ? D.brush.data : ie, ee = (te, I) => {
    var ke;
    let ge = null;
    const ve = v(I);
    return (ke = D.suppressedData) == null || ke.forEach((Ne) => {
      te.key === Ne.column && String(te.value) === String(Ne.value) && Ne.icon && (ge = /* @__PURE__ */ i.createElement(sh, { color: "#000", size: ve }));
    }), ge;
  };
  return D.visualizationSubType !== "stacked" && (D.visualizationType === "Bar" || D.visualizationType === "Combo") && D.orientation === "vertical" && /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
    Ag,
    {
      data: ue,
      keys: D.runtime.barSeriesKeys || D.runtime.seriesKeys,
      height: n,
      x0: (te) => {
        const I = te[D.runtime.originalXAxis.dataKey];
        return Sn(D.runtime.xAxis) ? oe(I) : I;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (te) => te.map((I, ge) => /* @__PURE__ */ i.createElement(nt, { className: `bar-group-${I.index}-${I.x0}--${ge} ${D.orientation}`, key: `bar-group-${I.index}-${I.x0}--${ge}`, id: `bar-group-${I.index}-${I.x0}--${ge}`, left: I.x0 }, I.bars.map((ve, ke) => {
      const Ne = D.useLogScale ? 0.1 : 0, je = 20;
      let Qe = D.highlightedBarValues.map((Re) => Re.value).filter((Re) => Re !== void 0);
      Qe = D.xAxis.type === "date" ? re.formatDates(Qe) : Qe;
      let Oe = D.legend.behavior === "highlight" && fe.length > 0 && fe.indexOf(ve.key) === -1, ye = D.legend.behavior === "highlight" || fe.length === 0 || fe.indexOf(ve.key) !== -1, we = Math.abs(t(ve.value) - t(Ne)), le = ve.value >= 0 && K(ve.value) ? ve.y : t(0);
      const Be = ve.value >= 0 && K(ve.value) ? t(Ne) - je : t(0), Me = D.suppressedData.some((Re) => ve.key === Re.column && String(ve.value) === String(Re.value)) ? Be : le;
      let He = a.range()[1], qe = D.isLollipopChart ? T : He / I.bars.length, et = ve.x + (D.isLollipopChart ? (He / I.bars.length - T) / 2 : 0) - (D.xAxis.type === "date-time" ? He / 2 : 0);
      f(qe), c(I.bars.length);
      let it = U(ve.value, "left"), st = D.runtime[N].type === "date" ? H(oe(ue[I.index][D.runtime.originalXAxis.dataKey])) : ue[I.index][D.runtime.originalXAxis.dataKey];
      const at = ve.value < 0 ? -1 : ke, Ze = k(ve.key, ue[I.index][D.runtime.originalXAxis.dataKey]);
      let Ie = D.runtime.xAxis.label ? `${D.runtime.xAxis.label}: ${st}` : st;
      const Fe = `${D.runtime.seriesLabels[ve.key]}: ${it}`, dt = `<ul>
                  <li class="tooltip-heading">${Ie}</li>
                  <li class="tooltip-body ">${Fe}</li>
                  ${Ze ? '<li class="tooltip-body ">' + Ze + "</li>" : ""}
                    </li></ul>`;
      let Ue = "#000000";
      Ue = re.checkFontColor(it, Qe, Ue);
      let Ge = D.runtime.seriesLabels && D.runtime.seriesLabels[ve.key] ? _(D.runtime.seriesLabels[ve.key]) : _(ve.key);
      Ge = g(te.length, I.index, Ge);
      const ut = D.isLollipopChart && D.lollipopColorStyle === "regular", ft = D.isLollipopChart && D.lollipopColorStyle === "two-tone", At = Qe == null ? void 0 : Qe.includes(st), Yt = M(st), qt = E(st), Lt = At ? Yt : D.barHasBorder === "true" ? "#000" : "transparent", Nt = At ? qt.borderWidth : D.isLollipopChart ? 0 : D.barHasBorder === "true" ? y : 0, Gt = D.suppressedData.some((Re) => ve.key === Re.column && ve.value === Re.value) ? "" : it;
      let an = D.suppressedData.some((Re) => ve.key === Re.column && String(ve.value) === String(Re.value)) ? je : we;
      const fn = D.suppressedData.some((Re) => ve.key === Re.column && ve.value === Re.value) ? "none" : "block", En = (Re, jt) => {
        let Ft = Re, yn = jt || "#f2f2f2";
        if (B && B.dashboard.sharedFilters) {
          const { sharedFilters: Pt } = B.dashboard;
          return Ft = Pt.map((bt) => bt.setBy === D.uid ? bt.resetLabel === bt.active || bt.active === ie[I.index][D.xAxis.dataKey] ? Re : yn : Re)[0], ut && (Ft = Re), ft && (Ft = zr(Re).brighten(1)), At && (Ft = "transparent"), Ft;
        }
        return ft && (Ft = zr(Re).brighten(1)), At && (Ft = "transparent"), Ft;
      };
      return /* @__PURE__ */ i.createElement(nt, { key: `${I.index}--${ke}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-sub-group-${I.index}-${I.x0}-${Me}--${ke}` }, Lc({
        config: D,
        index: at,
        id: `barGroup${I.index}`,
        background: En(Ge),
        borderColor: Lt,
        borderStyle: "solid",
        borderWidth: `${Nt}px`,
        width: qe,
        height: an,
        x: et,
        y: Me,
        onMouseOver: () => O(st, ve.key),
        onMouseLeave: R,
        tooltipHtml: dt,
        tooltipId: `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
        onClick: (Re) => {
          Re.preventDefault(), W && (ve[D.xAxis.dataKey] = st, W(D.uid, ve));
        },
        styleOverrides: {
          transformOrigin: `0 ${Me + an}px`,
          opacity: Oe ? 0.2 : 1,
          display: ye ? "block" : "none",
          cursor: B ? "pointer" : "default"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${et},${n - je})`,
          onMouseOver: () => O(st, ve.key),
          onMouseLeave: R,
          opacity: Oe ? 0.2 : 1,
          display: ye ? "block" : "none",
          "data-tooltip-html": dt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          onClick: (Re) => {
            Re.preventDefault(), W && (ve[D.xAxis.dataKey] = st, W(D.uid, ve));
          }
        },
        ee(ve, qe)
      ), /* @__PURE__ */ i.createElement(
        Ct,
        {
          display: D.labels && ye ? "block" : "none",
          opacity: Oe ? 0.5 : 1,
          x: et + qe / 2,
          y: Me - 5,
          fill: Ue,
          textAnchor: "middle"
        },
        Gt
      ), D.isLollipopChart && D.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: fn,
          cx: et + m / 3.5,
          cy: ve.y,
          r: m / 2,
          fill: Ge,
          key: `circle--${ve.index}`,
          "data-tooltip-html": dt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), D.isLollipopChart && D.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: fn,
          x: et - T / 2,
          y: Me,
          width: m,
          height: m,
          fill: Ge,
          key: `circle--${ve.index}`,
          "data-tooltip-html": dt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(D.confidenceKeys).length > 0 ? ue.map((te) => {
    let I, ge, ve, ke, Ne = 5;
    return I = e(X(te)) + (D.xAxis.type !== "date" || D.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), ve = t(Q(te, D.confidenceKeys.lower)), ke = t(Q(te, D.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${ge}-${te[D.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${I - Ne} ${ve}
                    L${I + Ne} ${ve}
                    M${I} ${ve}
                    L${I} ${ke}
                    M${I - Ne} ${ke}
                    L${I + Ne} ${ke}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(dh, { xScale: e, yMax: n, barWidth: l, totalBarsInGroup: s }));
}, ak = () => {
  const { xScale: e, yScale: t, yMax: r, seriesScale: n } = se.useContext(Ps), { transformedData: a, colorScale: l, seriesHighlight: f, config: s, formatNumber: c, formatDate: d, parseDate: g, setSharedFilter: y, isNumber: v, getTextWidth: k, getYAxisData: E, getXAxisData: M } = se.useContext(wt), {
    isHorizontal: T,
    barBorderWidth: m,
    updateBars: R,
    assignColorsToValues: O,
    section: N,
    fontSize: _,
    isLabelBelowBar: D,
    displayNumbersOnBar: B,
    lollipopBarWidth: H,
    lollipopShapeSize: U,
    getHighlightedBarColorByValue: X,
    getHighlightedBarByValue: Q,
    generateIconSize: K,
    getAdditionalColumn: oe,
    hoveredBar: fe,
    onMouseLeaveBar: W,
    onMouseOverBar: ie
  } = As(), { HighLightedBarUtils: re } = Cc(s), ue = (ee, Y) => {
    var ge;
    let te = null;
    const I = K(Y);
    return (ge = s.suppressedData) == null || ge.forEach((ve) => {
      ee.key === ve.column && String(ee.value) === String(ve.value) && ve.icon && (te = /* @__PURE__ */ i.createElement(sh, { color: "#000", size: I }));
    }), te;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
    Ag,
    {
      data: a,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: r,
      x0: (ee) => ee[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: n,
      yScale: e,
      color: () => ""
    },
    (ee) => R(ee).map((Y, te) => /* @__PURE__ */ i.createElement(nt, { className: `bar-group-${Y.index}-${Y.x0}--${te} ${s.orientation}`, key: `bar-group-${Y.index}-${Y.x0}--${te}`, id: `bar-group-${Y.index}-${Y.x0}--${te}`, top: Y.y }, Y.bars.map((I, ge) => {
      const ve = s.useLogScale ? 0.1 : 0;
      let ke = s.highlightedBarValues.map((bt) => bt.value).filter((bt) => bt !== void 0);
      ke = s.xAxis.type === "date" ? re.formatDates(ke) : ke;
      let Ne = s.legend.behavior === "highlight" && f.length > 0 && f.indexOf(I.key) === -1, je = s.legend.behavior === "highlight" || f.length === 0 || f.indexOf(I.key) !== -1, Qe = s.barHeight, Oe = I.value >= 0 && v(I.value) ? I.y : t(ve);
      const ye = I.value < 0 ? Math.abs(e(I.value)) : e(ve), we = Math.abs(e(I.value) - e(ve)), le = 25, Be = I.value >= 0 && v(I.value);
      let Me = I.value && s.suppressedData.some(({ column: bt, value: An }) => I.key === bt && I.value === An) ? le : we;
      const He = Be ? e(0) : e(ve) - le, qe = s.suppressedData.some((bt) => I.key === bt.column && String(I.value) === String(bt.value)) ? He : ye, et = c(I.value, "left"), it = s.runtime[N].type === "date" ? d(g(a[Y.index][s.runtime.originalXAxis.dataKey])) : a[Y.index][s.runtime.originalXAxis.dataKey], st = Be ? "above" : "below", at = s.suppressedData.some((bt) => I.key === bt.column && I.value === bt.value) ? "" : et;
      let Ie = k(it, `normal ${_[s.fontSize]}px sans-serif`) < we - 5, Fe = Ie ? "end" : "start", dt = "start", Ue = Ie ? -5 : 5, Ge = 10;
      st === "below" && (Fe = Ie ? "start" : "end", Ue = Ie ? 5 : -5, s.isLollipopChart && (dt = "end", Ge = -10));
      const ut = I.value < 0 ? -1 : ge;
      let ft = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${it}` : it;
      const At = oe(fe), Yt = `${s.runtime.seriesLabels[I.key]}: ${et}`, qt = `<ul>
                  <li class="tooltip-heading"">${ft}</li>
                  <li class="tooltip-body ">${Yt}</li>
                  <li class="tooltip-body ">${At}</li>
                    </li></ul>`;
      let Lt = "#000000";
      Lt = re.checkFontColor(et, ke, Lt);
      let Nt = s.runtime.seriesLabels && s.runtime.seriesLabels[I.key] ? l(s.runtime.seriesLabels[I.key]) : l(I.key);
      Nt = O(ee.length, Y.index, Nt);
      const Gt = s.isLollipopChart && s.lollipopColorStyle === "regular", an = s.isLollipopChart && s.lollipopColorStyle === "two-tone", fn = ke == null ? void 0 : ke.includes(et), En = X(et), Re = Q(et), jt = fn ? En : s.barHasBorder === "true" ? "#000" : "transparent", Ft = fn ? Re.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, yn = s.suppressedData.some((bt) => I.key === bt.column && I.value === bt.value) ? "none" : "block";
      Nt && Lt && zr.contrast(Lt, Nt) < 4.9 && (Lt = Ie ? "#FFFFFF" : "#000000");
      const Pt = () => Gt ? Nt : an ? zr(Nt).brighten(1) : fn ? "transparent" : Nt;
      return /* @__PURE__ */ i.createElement(nt, { key: `${Y.index}--${ge}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-sub-group-${Y.index}-${Y.x0}-${Oe}--${ge}` }, Lc({
        config: s,
        index: ut,
        id: `barGroup${Y.index}`,
        background: Pt(),
        borderColor: jt,
        borderStyle: "solid",
        borderWidth: `${Ft}px`,
        width: Me,
        height: s.isLollipopChart ? H : Qe,
        x: qe,
        y: Qe * I.index,
        onMouseOver: () => ie(it, I.key),
        onMouseLeave: W,
        tooltipHtml: qt,
        tooltipId: `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
        onClick: (bt) => {
          bt.preventDefault(), y && (I[s.xAxis.dataKey] = et, y(s.uid, I));
        },
        styleOverrides: {
          transformOrigin: `0 ${Oe + Qe}px`,
          opacity: Ne ? 0.2 : 1,
          display: je ? "block" : "none"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${Qe * I.index})`,
          onMouseOver: () => ie(it, I.key),
          onMouseLeave: W,
          opacity: Ne ? 0.2 : 1,
          display: je ? "block" : "none",
          "data-tooltip-html": qt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (bt) => {
            bt.preventDefault(), y && (I[s.xAxis.dataKey] = et, y(s.uid, I));
          }
        },
        ue(I, Me)
      ), !s.isLollipopChart && B && /* @__PURE__ */ i.createElement(
        Ct,
        {
          display: je ? "block" : "none",
          x: I.y,
          y: s.barHeight / 2 + s.barHeight * I.index,
          fill: Lt,
          dx: Ue,
          verticalAnchor: "middle",
          textAnchor: Fe
        },
        at
      ), s.isLollipopChart && B && /* @__PURE__ */ i.createElement(
        Ct,
        {
          display: je ? "block" : "none",
          x: I.y,
          y: 0,
          fill: "#000000",
          dx: Ge,
          textAnchor: dt,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        at
      ), D && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { x: s.yAxis.hideAxis ? 0 : 5, y: Y.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(g(a[Y.index][s.runtime.originalXAxis.dataKey])) : T ? a[Y.index][s.runtime.originalXAxis.dataKey] : c(a[Y.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: yn,
          cx: I.y,
          cy: Qe * I.index + H / 2,
          r: U / 2,
          fill: Nt,
          key: `circle--${I.index}`,
          "data-tooltip-html": qt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: yn,
          x: I.y > 10 ? I.y - U / 2 : 0,
          y: 0 - H / 2,
          width: U,
          height: U,
          fill: Nt,
          key: `circle--${I.index}`,
          "data-tooltip-html": qt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${U}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? a.map((ee) => {
    let Y, te, I, ge = 5;
    return Y = t(M(ee)) - 0.75 * s.barHeight, te = e(E(ee, s.confidenceKeys.upper)), I = e(E(ee, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${Y}-${ee[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${I} ${Y - ge}
                    L${I} ${Y + ge}
                    M${I} ${Y}
                    L${te} ${Y}
                    M${te} ${Y - ge}
                    L${te} ${Y + ge} `
      }
    );
  }) : "");
}, Mu = {
  Vertical: rk,
  Horizontal: ak,
  StackedVertical: tk,
  StackedHorizontal: nk
}, ik = ({ xScale: e, yScale: t, seriesScale: r, xMax: n, yMax: a, handleTooltipMouseOver: l, handleTooltipMouseOff: f, handleTooltipClick: s }) => {
  const { transformedData: c, config: d } = se.useContext(wt), g = {
    xScale: e,
    yScale: t,
    xMax: n,
    yMax: a,
    seriesScale: r
  };
  return /* @__PURE__ */ i.createElement(Br, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ps.Provider, { value: g }, /* @__PURE__ */ i.createElement(nt, { left: parseFloat(d.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Mu.StackedVertical, null), /* @__PURE__ */ i.createElement(Mu.StackedHorizontal, null), /* @__PURE__ */ i.createElement(Mu.Vertical, null), /* @__PURE__ */ i.createElement(Mu.Horizontal, null), /* @__PURE__ */ i.createElement(gr, { key: "bars", display: d.tooltips.singleSeries ? "none" : "block", width: Number(n), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (y) => l(y, c), onMouseOut: f, onClick: (y) => s(y, c) }))));
};
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
function Mi(e) {
  var t = e.x1, r = e.x2, n = e.y1, a = e.y2;
  return {
    x1: n,
    x2: a,
    y1: t,
    y2: r
  };
}
function iy(e) {
  var t = e.left, r = t === void 0 ? 0 : t, n = e.top, a = n === void 0 ? 0 : n, l = e.className, f = e.max, s = e.min, c = e.firstQuartile, d = e.thirdQuartile, g = e.median, y = e.boxWidth, v = y === void 0 ? 10 : y, k = e.fill, E = e.fillOpacity, M = e.stroke, T = e.strokeWidth, m = e.rx, R = m === void 0 ? 2 : m, O = e.ry, N = O === void 0 ? 2 : O, _ = e.valueScale, D = e.outliers, B = D === void 0 ? [] : D, H = e.horizontal, U = e.medianProps, X = U === void 0 ? {} : U, Q = e.maxProps, K = Q === void 0 ? {} : Q, oe = e.minProps, fe = oe === void 0 ? {} : oe, W = e.boxProps, ie = W === void 0 ? {} : W, re = e.outlierProps, ue = re === void 0 ? {} : re, ee = e.container, Y = ee === void 0 ? !1 : ee, te = e.containerProps, I = te === void 0 ? {} : te, ge = e.children, ve = H ? a : r, ke = ve + (v || 0) / 2, Ne = _.range(), je = _(s ?? 0), Qe = _(c ?? 0), Oe = _(g ?? 0), ye = _(d ?? 0), we = _(f ?? 0), le = {
    valueRange: Ne,
    center: ke,
    offset: ve,
    boxWidth: v,
    max: {
      x1: ke - (v || 0) / 4,
      x2: ke + (v || 0) / 4,
      y1: we,
      y2: we
    },
    maxToThird: {
      x1: ke,
      x2: ke,
      y1: we,
      y2: ye
    },
    median: {
      x1: ve,
      x2: ve + (v || 0),
      y1: Oe,
      y2: Oe
    },
    minToFirst: {
      x1: ke,
      x2: ke,
      y1: Qe,
      y2: je
    },
    min: {
      x1: ke - (v || 0) / 4,
      x2: ke + (v || 0) / 4,
      y1: je,
      y2: je
    },
    box: {
      x1: ve,
      x2: v || 0,
      y1: ye,
      y2: Math.abs(ye - Qe)
    },
    container: {
      x1: ve,
      x2: v || 0,
      y1: Math.min.apply(Math, Ne),
      y2: Math.abs(Ne[0] - Ne[1])
    }
  };
  return H && (le.max = Mi(le.max), le.maxToThird = Mi(le.maxToThird), le.box.y1 = Qe, le.box = Mi(le.box), le.median = Mi(le.median), le.minToFirst = Mi(le.minToFirst), le.min = Mi(le.min), le.container = Mi(le.container), le.container.y1 = Math.min.apply(Math, Ne)), ge ? /* @__PURE__ */ i.createElement(i.Fragment, null, ge(le)) : /* @__PURE__ */ i.createElement(nt, {
    className: Cn("visx-boxplot", l)
  }, B.map(function(Be, Me) {
    var He = H ? _(Be) : ke, qe = H ? ke : _(Be);
    return /* @__PURE__ */ i.createElement("circle", Ba({
      key: "visx-boxplot-outlier-" + Me,
      className: "visx-boxplot-outlier",
      cx: He,
      cy: qe,
      r: 4,
      stroke: M,
      strokeWidth: T,
      fill: k,
      fillOpacity: E
    }, ue));
  }), /* @__PURE__ */ i.createElement("line", Ba({
    className: "visx-boxplot-max",
    x1: le.max.x1,
    y1: le.max.y1,
    x2: le.max.x2,
    y2: le.max.y2,
    stroke: M,
    strokeWidth: T
  }, K)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: le.maxToThird.x1,
    y1: le.maxToThird.y1,
    x2: le.maxToThird.x2,
    y2: le.maxToThird.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("rect", Ba({
    className: "visx-boxplot-box",
    x: le.box.x1,
    y: le.box.y1,
    width: le.box.x2,
    height: le.box.y2,
    stroke: M,
    strokeWidth: T,
    fill: k,
    fillOpacity: E,
    rx: R,
    ry: N
  }, ie)), /* @__PURE__ */ i.createElement("line", Ba({
    className: "visx-boxplot-median",
    x1: le.median.x1,
    y1: le.median.y1,
    x2: le.median.x2,
    y2: le.median.y2,
    stroke: M,
    strokeWidth: T
  }, X)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: le.minToFirst.x1,
    y1: le.minToFirst.y1,
    x2: le.minToFirst.x2,
    y2: le.minToFirst.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", Ba({
    className: "visx-boxplot-min",
    x1: le.min.x1,
    y1: le.min.y1,
    x2: le.min.x2,
    y2: le.min.y2,
    stroke: M,
    strokeWidth: T
  }, fe)), Y && /* @__PURE__ */ i.createElement("rect", Ba({
    x: le.container.x1,
    y: le.container.y1,
    width: le.container.x2,
    height: le.container.y2,
    fillOpacity: "0"
  }, I)));
}
iy.propTypes = {
  max: he.number,
  min: he.number,
  firstQuartile: he.number,
  thirdQuartile: he.number,
  median: he.number,
  boxWidth: he.number,
  fill: he.string,
  fillOpacity: he.oneOfType([he.number, he.string]),
  stroke: he.string,
  strokeWidth: he.oneOfType([he.number, he.string]),
  rx: he.number,
  ry: he.number,
  outliers: he.arrayOf(he.number),
  container: he.bool,
  children: he.func
};
const ok = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: n } = se.useContext(wt), { boxplot: a } = r;
  se.useEffect(() => {
    r.legend.hide === !1 && n({
      ...r,
      legend: {
        ...r.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${r.runtime.uniqueId}`, f = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${a.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${T.columnIqr}<br/>
      ${a.labels.median}: ${T.columnMedian}
    `, s = (T) => Number(T.columnMax), c = (T) => Number(T.columnMin), d = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), y = (T) => Number(T.columnFirstQuartile), v = 0.5, k = e.bandwidth(), E = Math.min(40, k), M = cr[r == null ? void 0 : r.palette][0] ? cr[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(Br, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(nt, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const R = k - E, O = 4;
    return /* @__PURE__ */ i.createElement(nt, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((N, _) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(r.yAxis.size) + k / 2, cy: t(N), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${_}` })), /* @__PURE__ */ i.createElement(
      iy,
      {
        "data-left": e(T.columnCategory) + r.yAxis.size + R / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(T),
        max: s(T),
        left: Number(e(T.columnCategory)) + Number(r.yAxis.size) + R / 2 + 0.5,
        firstQuartile: y(T),
        thirdQuartile: g(T),
        median: d(T),
        boxWidth: E,
        fill: M,
        fillOpacity: v,
        stroke: "black",
        valueScale: t,
        outliers: a.plotOutlierValues ? T.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${M}`,
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
          "data-tooltip-id": l
        }
      }
    ));
  })));
}, lk = ({ xScale: e, yScale: t, getXAxisData: r, getYAxisData: n }) => {
  const { colorScale: a, transformedData: l, config: f, formatNumber: s, seriesHighlight: c, colorPalettes: d } = se.useContext(wt);
  let g = 4.5;
  const y = Object.keys(f.runtime.seriesLabels).length > 1, v = (k, E) => `<div>
    ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && y ? `${f.runtime.seriesLabels[E] || ""}<br/>` : ""}
    ${f.xAxis.label}: ${s(k[f.xAxis.dataKey], "bottom")} <br/>
    ${f.yAxis.label}: ${s(k[E], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(nt, { className: "scatter-plot", left: f.yAxis.size }, l.map((k, E) => f.runtime.seriesKeys.map((M, T) => {
    const m = f.legend.behavior === "highlight" && c.length > 0 && c.indexOf(M) === -1, R = f.legend.behavior === "highlight" || c.length === 0 || c.indexOf(M) !== -1, O = f.palette ? d[f.palette][T] : "#000";
    let N = {
      filter: "unset",
      opacity: 1,
      stroke: R ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${E}-${T}`,
        r: g,
        cx: e(k[f.xAxis.dataKey]),
        cy: t(k[M]),
        fill: R ? O : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: N,
        "data-tooltip-html": v(k, M),
        "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`
      }
    );
  })));
};
function sk({ height: e, xScale: t }) {
  const { transformedData: r, config: n, formatNumber: a, twoColorPalette: l, getTextWidth: f, updateConfig: s, parseDate: c, formatDate: d, currentViewport: g } = se.useContext(wt), { barStyle: y, tipRounding: v, roundingStyle: k, twoColor: E } = n, M = se.useRef([]), [T, m] = se.useState(window.innerWidth), R = k === "standard" ? "8px" : k === "shallow" ? "5px" : k === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  n.barStyle;
  const N = Number(n.xAxis.target), _ = n.series[0].dataKey, D = Number(t.domain()[1]), H = r.some((ee) => ee[_] < 0) || N > 0 || t.domain()[0] < 0, U = n.barHasBorder === "true" ? 1 : 0, X = n.lollipopSize === "large" ? 7 : n.lollipopSize === "medium" ? 6 : 5, Q = n.lollipopSize === "large" ? 14 : n.lollipopSize === "medium" ? 12 : 10, K = Math.max(t(0), Math.min(t(N), t(D))), oe = (ee) => {
    if (ee == null || y !== "rounded")
      return;
    let Y = {};
    return ee === "left" && (Y = { borderRadius: `${R} 0 0 ${R}` }), ee === "right" && (Y = { borderRadius: `0 ${R} ${R} 0` }), v === "full" && (Y = { borderRadius: R }), Y;
  }, fe = {
    calculate: function() {
      const Y = r[0][_] < N ? "left" : "right", te = `${n.xAxis.targetLabel} ${a(n.xAxis.target || 0, "left")}`, I = f(te, `bold ${O[n.fontSize]}px sans-serif`);
      let ge = n.isLollipopChart ? X / 2 : Number(n.barHeight) / 2, ve = 0, ke = 0, Ne = !1;
      Y === "right" && (ve = -10, Ne = I - ve < K, ke = K - I), Y === "left" && (ve = 10, Ne = t(D) - K > I + ve, ke = K), this.text = te, this.y = ge, this.x = ke, this.padding = ve, this.showLabel = n.xAxis.showTargetLabel ? Ne : !1;
    }
  };
  fe.calculate();
  const W = se.useRef(null), ie = oh(W, {});
  se.useEffect(() => {
    const ee = () => {
      m(window.innerWidth), M.current.forEach((Y) => {
        Y.style.transition = "none", Y.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ee), () => {
      window.removeEventListener("resize", ee);
    };
  }, []);
  const [re, ue] = se.useState(!1);
  return se.useEffect(() => {
    ie != null && ie.isIntersecting && setTimeout(() => {
      ue(!0);
    }, 100);
  }, [ie == null ? void 0 : ie.isIntersecting, n.animate]), se.useEffect(() => {
    M.current.forEach((ee, Y) => {
      if (n.animate) {
        const te = N / D * 100;
        ee.style.opacity = "0", ee.style.transform = `translate(${te / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ee.style.opacity = "1", ee.style.transform = "translate(0) scale(1)", ee.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ee.style.transition = "none", ee.style.opacity = "0";
      n.animate || (ee.style.transition = "none", ee.style.opacity = "1");
    });
  }, [n.animate, n, re]), /* @__PURE__ */ i.createElement(Br, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(nt, { left: Number(n.xAxis.size) }, r.map((ee, Y) => {
    const te = Number(ee[_]), I = n.isLollipopChart ? X : Number(n.barHeight), ge = Number(n.barSpace), ve = Math.abs(t(te) - K), ke = t(te), Ne = te > N ? K : ke, je = te < N ? "left" : "right";
    let Qe = 0;
    Qe = Y !== 0 ? (ge + I + U) * Y : Qe;
    const Oe = (ge + I + U) * r.length;
    n.heights.horizontal = Oe;
    const we = f(a(te, "left"), `normal ${O[n.fontSize]}px sans-serif`) < ve - 6, le = ke, Be = Qe + I / 2, Me = ke, He = Qe + I / 2, qe = ke, et = Qe - I / 2, it = oe(je), [st, at] = l[E.palette], Ze = { left: st, right: at }, Fe = zr.contrast("#000000", Ze[je]) < 4.9 ? "#FFFFFF" : "#000000";
    let dt = uk(n.isLollipopChart, we, Q, Fe);
    const Ue = a(te, "left"), Ge = n.runtime.yAxis.type === "date" ? d(c(r[Y][n.runtime.originalXAxis.dataKey])) : r[Y][n.runtime.originalXAxis.dataKey];
    let ut = n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ${Ge}` : Ge, ft = n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ${Ue}` : Ue;
    const At = `<div>
          ${ut}<br />
          ${ft}
            </div>`;
    return /* @__PURE__ */ i.createElement(nt, { key: `deviation-bar-${n.orientation}-${_}-${Y}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (Yt) => {
          M.current[Y] = Yt;
        },
        x: Ne,
        y: Qe,
        width: ve,
        height: I,
        "data-tooltip-html": At,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: ve, height: I, border: `${U}px solid #333`, backgroundColor: Ze[je], ...it } })
    ), n.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(Ct, { verticalAnchor: "middle", x: le, y: Be, ...dt[je] }, a(ee[_], "left")), n.isLollipopChart && n.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Me, cy: He, r: Q / 2, fill: Ze[je], style: { filter: "unset", opacity: 1 } }), n.isLollipopChart && n.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: qe, y: et, width: Q, height: Q, fill: Ze[je], style: { opacity: 1, filter: "unset" } }));
  }), fe.showLabel && /* @__PURE__ */ i.createElement(Ct, { fontWeight: "bold", dx: fe.padding, verticalAnchor: "middle", x: fe.x, y: fe.y }, fe.text), H && /* @__PURE__ */ i.createElement(Jt, { from: { x: K, y: 0 }, to: { x: K, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: W }));
}
function uk(e, t, r, n) {
  return e ? {
    right: {
      textAnchor: "start",
      dx: r + 6,
      fill: "#000000"
    },
    left: {
      textAnchor: "end",
      dx: -r,
      fill: "#000000"
    }
  } : {
    right: {
      textAnchor: t ? "end" : "start",
      dx: t ? -6 : 6,
      fill: t ? n : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? n : "#000000"
    }
  };
}
const ck = ({ xScale: e, yScale: t, height: r, width: n, handleTooltipMouseOver: a, handleTooltipMouseOff: l }) => {
  var E;
  const { transformedData: f, rawData: s, config: c, seriesHighlight: d } = se.useContext(wt), { xAxis: g, yAxis: y, legend: v, runtime: k } = c;
  return f && /* @__PURE__ */ i.createElement(Br, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(nt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(y.size) }, (E = k.forecastingSeriesKeys) == null ? void 0 : E.map((M, T) => !M || !M.stages ? !1 : M.stages.map((m, R) => {
    var B;
    const { behavior: O } = v, N = s.filter((H) => H[M.stageColumn] === m.key);
    let _ = O === "highlight" && d.length > 0 && d.indexOf(m.key) === -1, D = O === "highlight" || d.length === 0 || d.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(nt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (B = M.confidenceIntervals) == null ? void 0 : B.map((H, U) => {
      const X = Vu[m.color] || cr[m.color] || !1, Q = () => D && X[2] ? X[2] : "transparent", K = () => D && X[1] ? X[1] : "transparent";
      if (!(H.high === "" || H.low === ""))
        return /* @__PURE__ */ i.createElement(nt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${R}-${U}` }, /* @__PURE__ */ i.createElement(
          Y0,
          {
            curve: zu,
            data: N,
            fill: Q(),
            opacity: _ ? 0.1 : 0.5,
            x: (oe) => e(Date.parse(oe[g.dataKey])),
            y0: (oe) => t(oe[H.low]),
            y1: (oe) => t(oe[H.high])
          }
        ), U === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(pa, { data: N, x: (oe) => Number(e(Date.parse(oe[g.dataKey]))), y: (oe) => Number(t(oe[H.high])), curve: zu, stroke: K(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(pa, { data: N, x: (oe) => Number(e(Date.parse(oe[g.dataKey]))), y: (oe) => Number(t(oe[H.low])), curve: zu, stroke: K(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(nt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(gr, { key: "bars", width: Number(n), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => a(M, f), onMouseOut: l }))));
};
function Iu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Dc(e, t) {
  const r = e.series.every(({ type: v }) => v === "Bar"), n = e.series.every(({ type: v }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(v)), a = (v) => (k) => v.reduce((E, M) => isNaN(Number(k[M])) ? E : E + Number(k[M]), 0), l = () => {
    let v = Math.max(...t.map((k) => Math.max(...e.runtime.seriesKeys.map((E) => Iu(k[E]) ? Number(c(k[E])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const k = t.map(a(e.runtime.seriesKeys)).filter((E) => !isNaN(E));
      v = Math.max(...k);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const k = t.map(a(e.runtime.seriesKeys));
      v = Math.max(...k);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (v = Math.max(...t.map((k) => Iu(k[e.series.dataKey]) ? Number(c(k[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const k = t.map(a(e.runtime.barSeriesKeys)), E = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(T[m])))))), M = Math.max(...k);
      v = Math.max(M, E);
    }
    return v;
  }, f = () => {
    const v = Math.min(...t.map((k) => Math.min(...e.runtime.seriesKeys.map((E) => Iu(k[E]) ? Number(c(k[E])) : 1 / 0))));
    return String(v);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((v) => t.some((k) => k[v] >= 0)) : !1, c = (v) => v === null || v === "" ? "" : typeof v == "string" ? v.replace(/[,$]/g, "") : v, d = Number(l()), g = Number(f()), y = s();
  return { minValue: g, maxValue: d, existPositiveValue: y, isAllLine: n };
}
function fh({ config: e, yMax: t = 0, data: r = [], updateConfig: n }) {
  var v, k, E, M;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Dc(e, r);
  const s = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((R, O) => m = [...m, ...r.map((N) => Number(N[R]))]), m;
  };
  let c = Math.max.apply(null, s(l));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const d = ((k = (v = e.runtime) == null ? void 0 : v.barSeriesKeys) == null ? void 0 : k.length) > 0, g = ((M = (E = e.runtime) == null ? void 0 : E.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (d || g) && f > 0 && (f = 0), { yScaleRight: Wn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const dk = (e) => {
  const { preliminaryData: t, data: r, stroke: n, handleLineType: a, lineType: l, seriesKey: f } = e, s = t.filter((y) => y.seriesKey && y.column && y.value && y.type && y.style), c = (y) => s.find((v) => v.seriesKey === f && y[v.column] === v.value && v.type === "effect" && v.style !== "Open Circles");
  let d = [];
  const g = (y) => ({
    stroke: n,
    strokeWidth: 2,
    strokeDasharray: y
  });
  return r.forEach((y, v) => {
    let k = c(y), E = g(a(k ? k.style : l));
    d.push(E), k && v > 0 && (d[v - 1] = g(a(k.style)));
  }), d;
}, fk = (e, t, r) => {
  const n = e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey }));
  let a = [];
  return t.forEach((l) => {
    n.some((f) => l[f.column] === f.value && f.seriesKey === r) && a.push(l);
  }), a;
}, Yd = (e) => {
  var O, N, _, D, B, H;
  const { config: t, d: r, displayArea: n, seriesKey: a, tooltipData: l, xScale: f, yScale: s, colorScale: c, parseDate: d, yScaleRight: g, data: y, circleData: v, dataIndex: k, mode: E } = e, { lineDatapointStyle: M } = t, T = (O = t == null ? void 0 : t.series.filter((U) => U.dataKey === a)) == null ? void 0 : O[0], m = (U, X, Q, K, oe) => {
    const fe = Q.runtime.seriesLabels || [];
    let W;
    return U ? W = X(fe[K] || oe) : W = "transparent", Q.lineDatapointColor === "Lighter than Line" && W !== "transparent" && W && (W = zr(W).brighten(1)), W;
  }, R = (U) => (t.xAxis.type === "categorical" ? f(U) : f(d(U))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (E === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (M === "always show")
      return (v == null ? void 0 : v.some((X) => X[t.xAxis.dataKey] === r[t.xAxis.dataKey] && X[a] === r[a])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: R(r[t.xAxis.dataKey]),
          cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]),
          r: 4.5,
          opacity: r[a] ? 1 : 0,
          fillOpacity: 1,
          fill: m(n, c, t, a, a),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (E === "HOVER_POINTS" && M === "hover") {
    if (!l || !a || !l.data)
      return;
    let U = (_ = (N = l == null ? void 0 : l.data) == null ? void 0 : N[0]) == null ? void 0 : _[1];
    if (!U)
      return;
    let X, Q = l.data.filter((fe) => fe[0] === a), K = (D = Q == null ? void 0 : Q[0]) == null ? void 0 : D[0], oe = (B = Q == null ? void 0 : Q[0]) == null ? void 0 : B[2];
    return K ? (l == null || l.data.indexOf(K), X = (H = y == null ? void 0 : y.find((fe) => fe[t == null ? void 0 : t.xAxis.dataKey] === U)) == null ? void 0 : H[a], l == null ? void 0 : l.data.map((fe, W) => (t.runtime.seriesLabelsAll.indexOf(U), isNaN(X) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (v == null ? void 0 : v.some((re) => re[t.xAxis.dataKey] === U)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: R(U),
        cy: oe === "right" ? g(X) : s(X),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(n, c, t, K, a),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(fe)}--${W}`
      }
    )))) : void 0;
  }
  return E === "ISOLATED_POINTS" && E && ((X, Q) => {
    const K = y[X], oe = y[X - 1], fe = y[X + 1];
    if (X === 0 && !fe[Q] || X === y.length - 1 && !oe[Q] || X !== 0 && K[Q] && !oe[Q] && !fe[Q])
      return !0;
  })(k, a) ? /* @__PURE__ */ i.createElement("circle", { cx: R(r[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[a]), fill: c(t.runtime.seriesLabels[a]) }) : null;
}, rm = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: r,
    handleTooltipClick: n,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: l,
    tooltipData: f,
    xMax: s,
    xScale: c,
    yMax: d,
    yScale: g
  } = e, {
    colorScale: y,
    config: v,
    formatNumber: k,
    handleLineType: E,
    isNumber: M,
    parseDate: T,
    seriesHighlight: m,
    tableData: R,
    transformedData: O,
    updateConfig: N,
    rawData: _
  } = se.useContext(wt), { yScaleRight: D } = fh({ config: v, yMax: d, data: O, updateConfig: N });
  if (!l)
    return;
  const { lineDatapointStyle: B, showLineSeriesLabels: H, legend: U } = v;
  return /* @__PURE__ */ i.createElement(Br, { component: "LineChart" }, /* @__PURE__ */ i.createElement(nt, { left: v.runtime.yAxis.size }, " ", (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((X, Q) => {
    var ee;
    let K = v.series.filter((Y) => Y.dataKey === X)[0].type;
    const oe = v.series.filter((Y) => Y.dataKey === X), fe = oe[0].axis ? oe[0].axis : "left";
    let W = U.behavior === "highlight" || m.length === 0 || m.indexOf(X) !== -1;
    const ie = fk(v.preliminaryData, _, X);
    let re = dk({ preliminaryData: v.preliminaryData, data: R, stroke: y(v.runtime.seriesLabels[X]), handleLineType: E, lineType: K, seriesKey: X }), ue = (Y) => c(t(Y)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      nt,
      {
        key: `series-${X}`,
        opacity: U.behavior === "highlight" && m.length > 0 && m.indexOf(X) === -1 ? 0.5 : 1,
        display: U.behavior === "highlight" || m.length === 0 && !U.dynamicLegend || m.indexOf(X) !== -1 ? "block" : "none"
      },
      O.map((Y, te) => {
        const I = v.series.find(({ dataKey: je }) => je === X), { axis: ge } = I, ve = Object.keys(v.runtime.seriesLabels).length > 1, ke = ge === "Right" ? "rightLabel" : "label";
        let Ne = v.runtime.yAxis[ke];
        return ve || (Ne = v.isLegendValue ? v.runtime.seriesLabels[X] : Ne), Y[X] !== void 0 && Y[X] !== "" && Y[X] !== null && M(Y[X]) && /* @__PURE__ */ i.createElement(nt, { key: `series-${X}-point-${te}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(gr, { key: "bars", width: Number(s), height: Number(d), fill: "transparent", fillOpacity: 0.05, onMouseMove: (je) => l(je, R), onMouseOut: a, onClick: (je) => n(je, O) }), /* @__PURE__ */ i.createElement(Ct, { display: v.labels ? "block" : "none", x: ue(Y), y: fe === "Right" ? D(r(Y, X)) : g(r(Y, X)), fill: "#000", textAnchor: "middle" }, k(Y[X], "left")), (B === "hidden" || B === "always show") && /* @__PURE__ */ i.createElement(
          Yd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: te,
            circleData: ie,
            data: O,
            d: Y,
            config: v,
            seriesKey: X,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: D,
            seriesAxis: fe,
            key: `line-circle--${te}`
          }
        ), /* @__PURE__ */ i.createElement(
          Yd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: te,
            circleData: ie,
            data: O,
            d: Y,
            config: v,
            seriesKey: X,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: D,
            seriesAxis: fe,
            key: `isolated-circle-${te}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, B === "hover" && /* @__PURE__ */ i.createElement(
        Yd,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: ie,
          data: O,
          config: v,
          seriesKey: X,
          displayArea: W,
          tooltipData: f,
          xScale: c,
          yScale: g,
          colorScale: y,
          parseDate: T,
          yScaleRight: D,
          seriesAxis: fe
        }
      )),
      (ee = v == null ? void 0 : v.preliminaryData) != null && ee.some((Y) => Y.value && Y.column) ? /* @__PURE__ */ i.createElement(
        Lg,
        {
          curve: yc[oe[0].lineType],
          segments: (v.xAxis.type === "date-time" ? O.sort((Y, te) => {
            let I = t(Y), ge = t(te);
            return I < ge ? -1 : ge < I ? 1 : 0;
          }) : O).map((Y) => [Y]),
          segmentation: "x",
          x: (Y) => ue(Y),
          y: (Y) => fe === "Right" ? D(r(Y, X)) : g(Number(r(Y, X))),
          styles: re,
          defined: (Y, te) => Y[X] !== "" && Y[X] !== null && Y[X] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        pa,
        {
          curve: yc[oe[0].lineType],
          data: v.xAxis.type === "date-time" ? O.sort((Y, te) => {
            let I = t(Y), ge = t(te);
            return I < ge ? -1 : ge < I ? 1 : 0;
          }) : O,
          x: (Y) => ue(Y),
          y: (Y) => fe === "Right" ? D(r(Y, X)) : g(Number(r(Y, X))),
          stroke: y(v.runtime.seriesLabels[X]),
          strokeWidth: 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? E(K) : 0,
          defined: (Y, te) => Y[X] !== "" && Y[X] !== null && Y[X] !== void 0
        }
      )),
      ie.map((Y, te) => /* @__PURE__ */ i.createElement("circle", { key: te, cx: ue(Y), cy: g(Number(r(Y, X))), r: 6, strokeWidth: 2, stroke: y ? y(v.runtime.seriesLabels[X]) : "#000", fill: "#fff" })),
      v.animate && /* @__PURE__ */ i.createElement(
        pa,
        {
          className: "animation",
          curve: oe.lineType,
          data: O,
          x: (Y) => ue(Y),
          y: (Y) => fe === "Right" ? D(r(Y, X)) : g(Number(r(Y, X))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? E(K) : 0,
          defined: (Y, te) => Y[X] !== "" && Y[X] !== null && Y[X] !== void 0
        }
      ),
      H && (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((Y) => {
        let te;
        for (let I = O.length - 1; I >= 0; I--)
          if (O[I][Y]) {
            te = O[I];
            break;
          }
        return te ? /* @__PURE__ */ i.createElement("text", { x: ue(te) + 5, y: g(r(te, Y)), alignmentBaseline: "middle", fill: v.colorMatchLineSeriesLabels && y ? y(v.runtime.seriesLabels[Y] || Y) : "black" }, v.runtime.seriesLabels[Y] || Y) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), v.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(Ct, { x: s / 2, y: d / 2, fill: "black", textAnchor: "middle", color: "black" }, v.legend.dynamicLegendChartMessage)));
}, hk = (e) => {
  const { rawData: t, updateConfig: r } = se.useContext(wt), { xScale: n, yScale: a, config: l, height: f, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: d } = e, { forestPlot: g } = l, y = l.xAxis.tickWidthMax + 10, [v, k] = se.useState(!1);
  se.useEffect(() => {
    try {
      const N = ["estimateField", "lower", "upper", "estimateRadius"], _ = l, D = 10;
      for (let B = 0; B < D; B++)
        N.forEach((H) => {
          var U;
          l.forestPlot[H] && l.forestPlot[H] !== ((U = _.columns[l.forestPlot[`additionalColumn${B}`]]) == null ? void 0 : U.name) && (delete _.columns[`additionalColumn${B}`], _.columns[l.forestPlot[H]] = {}, _.columns[l.forestPlot[H]].dataKey = _.forestPlot[H], _.columns[l.forestPlot[H]].name = _.forestPlot[H], _.columns[l.forestPlot[H]].dataTable = !0, _.columns[l.forestPlot[H]].tooltips = !0, _.columns[l.forestPlot[H]].label = _.forestPlot[H]);
        });
      l.forestPlot.radius.scalingColumn && (_.columns[l.forestPlot.radius.scalingColumn] = {}, _.columns[l.forestPlot.radius.scalingColumn].dataKey = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].name = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].label = _.forestPlot.radius.scalingColumn, _.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, _.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), _.table.showVertical && (_.table.indexLabel = l.xAxis.dataKey), r(_);
    } catch (N) {
      console.log(N.message);
    }
  }, []), se.useEffect(() => {
    !v && l.forestPlot.type === "Logarithmic" && (r({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), k(!0));
  }, [l.forestPlot.type]);
  const E = l.data.find((N) => N[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), M = E ? [
    { x: n(E[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) },
    { x: n(E[l.forestPlot.estimateField]), y: f - g.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: n(E[l.forestPlot.upper]), y: f - Number(l.forestPlot.rowHeight) },
    { x: n(E[l.forestPlot.estimateField]), y: f + g.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: n(E[l.forestPlot.lower]), y: f - Number(l.forestPlot.rowHeight) }
  ] : [], T = l.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: s, y: T }
  ], R = [
    { x: 0, y: f },
    { x: s, y: f }
  ], O = Object.entries(l.columns).map((N) => N[1]).filter((N) => N.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { width: s }, g.title && /* @__PURE__ */ i.createElement(Ct, { className: "forest-plot--title", x: g.type === "Linear" ? n(0) : n(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Pi(l.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(Jt, { from: { x: n(0), y: 0 + T }, to: { x: n(0), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(Jt, { from: { x: n(1), y: 0 + T }, to: { x: n(1), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((N, _) => {
    const D = Wn({
      domain: t.map((K) => K[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), B = g.radius.scalingColumn !== "" ? D(t[_][g.radius.scalingColumn]) : 4, H = g.colors.shape ? g.colors.shape : "black", U = g.colors.line ? g.colors.line : "black", X = 4;
    return N[l.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(pa, { data: M, x: (K) => K.x, y: (K) => K.y - Pi(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: af }) : /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${n(N[g.lower])} ${a(_) - Number(X)}
                    L${n(N[g.lower])} ${a(_) + Number(X)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${n(N[g.upper])} ${a(_) - Number(X)}
                    L${n(N[g.upper])} ${a(_) + Number(X)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: U, className: `line-${N[l.yAxis.dataKey]}`, key: _, x1: n(N[g.lower]), x2: n(N[g.upper]), y1: a(_), y2: a(_) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(Ry, { className: "forest-plot--circle", cx: n(Number(N[g.estimateField])), cy: a(_), r: g.radius.scalingColumn !== "" ? D(t[_][g.radius.scalingColumn]) : 4, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: n(Number(N[g.estimateField])), y: a(_) - B / 2, width: B, height: B, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(Ct, { className: "forest-plot--text", x: n(Number(N[g.estimateField])), y: a(_), textAnchor: "middle", verticalAnchor: "middle", fontSize: Pi(l.fontSize), fill: H }, N[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ i.createElement(pa, { data: M, x: (N) => N.x, y: (N) => N.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: af }), g.regression.description && /* @__PURE__ */ i.createElement(Ct, { x: 0 - Number(l.xAxis.size), width: s, y: f - l.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(gr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (N) => d(N, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(Jt, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(Jt, { from: R[0], to: R[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((N) => t.map((_, D) => /* @__PURE__ */ i.createElement(Ct, { className: `${_[N.name]}`, x: N.forestPlotAlignRight ? s : N.forestPlotStartingPoint, y: a(D), textAnchor: N.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Pi(l.fontSize), fill: "black" }, _[N.name]))), !g.hideDateCategoryCol && t.map((N, _) => /* @__PURE__ */ i.createElement(Ct, { className: `${N[l.xAxis.dataKey]}`, x: 0, y: a(_), textAnchor: "start", verticalAnchor: "middle", fontSize: Pi(l.fontSize), fill: "black" }, N[l.xAxis.dataKey])), !g.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ i.createElement(Ct, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Pi(l.fontSize), fill: "black" }, l.xAxis.dataKey), O.map((N) => /* @__PURE__ */ i.createElement(Ct, { className: `${N.label}`, x: N.forestPlotAlignRight ? s : N.forestPlotStartingPoint, y: 0, textAnchor: N.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Pi(l.fontSize), fill: "black" }, N.label)), g.leftLabel && /* @__PURE__ */ i.createElement(Ct, { className: "forest-plot__left-label", x: g.type === "Linear" ? n(0) - 25 : n(1) - 25, y: f + y, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(Ct, { className: "forest-plot__right-label", x: g.type === "Linear" ? n(0) + 25 : n(1) + 25, y: f + y, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, pk = ({ width: e, height: t, originalWidth: r }) => {
  var N;
  const { config: n, colorScale: a, transformedData: l, formatNumber: f, seriesHighlight: s, getTextWidth: c } = se.useContext(wt);
  if (!n || ((N = n == null ? void 0 : n.series) == null ? void 0 : N.length) < 2)
    return;
  const d = n.barHasBorder === "true" ? 1 : 0, g = e / 2, y = { small: 16, medium: 18, large: 20 }, v = 1.02, k = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[0].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[0].dataKey] || n.series[0].dataKey,
    color: a(n.runtime.seriesLabels[n.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[n.series[0].dataKey])
    ),
    labelColor: ""
  }, E = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[1].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[1].dataKey] || n.series[1].dataKey,
    color: a(n.runtime.seriesLabels[n.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[n.series[1].dataKey])
    ),
    labelColor: ""
  }, M = Wn({
    domain: [0, Math.max(k.max * v, E.max * 1.1)],
    range: [0, g]
  });
  let T = "#000000";
  k.color && zr.contrast(T, k.color) < 4.9 && (k.labelColor = "#FFFFFF"), E.color && zr.contrast(T, E.color) < 4.9 && (E.labelColor = "#FFFFFF");
  const m = n.yAxis.label ? `${n.yAxis.label}: ` : "", R = (_) => `<p>
				${n.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${m}${f(_[k.dataKey], "left")}
			</p>`, O = (_) => `<p>
				${n.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${m}${f(_[E.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(n.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(nt, { top: 0, left: Number(n.xAxis.size) }, l.filter((_) => n.series[0].dataKey === k.dataKey).map((_, D) => {
    let B = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[0].dataKey) === -1, H = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[0].dataKey) !== -1, U = M(_[n.series[0].dataKey]), X = Number(n.barHeight) ? Number(n.barHeight) : 25, Q = 0;
    Q = D !== 0 ? (Number(n.barSpace) + X + d) * D : Q;
    const K = (Number(n.barSpace) + X + d) * l.length;
    n.heights.horizontal = K;
    const fe = c(f(_[k.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < U - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { key: `group-${k.dataKey}-${_[n.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      gr,
      {
        id: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g - U,
        y: Q,
        width: M(_[n.series[0].dataKey]),
        height: X,
        fill: k.color,
        "data-tooltip-html": R(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: d,
        opacity: B ? 0.5 : 1,
        display: H ? "block" : "none"
      }
    ), n.yAxis.displayNumbersOnBar && H && /* @__PURE__ */ i.createElement(Ct, { textAnchor: fe ? "start" : "end", dx: fe ? 5 : -5, verticalAnchor: "middle", x: g - U, y: Q + n.barHeight / 2, fill: fe ? k.labelColor : "#000" }, f(_[k.dataKey], "left"))));
  }), l.filter((_) => n.series[1].dataKey === E.dataKey).map((_, D) => {
    let B = M(_[n.series[1].dataKey]), H = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[1].dataKey) === -1, U = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[1].dataKey) !== -1, X = n.barHeight ? Number(n.barHeight) : 25, Q = 0;
    Q = D !== 0 ? (Number(n.barSpace) + X + d) * D : Q;
    const K = (Number(n.barSpace) + X + d) * l.length;
    n.heights.horizontal = K;
    const fe = c(f(_[E.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < B - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${E.dataKey}-${_[n.xAxis.dataKey]} {
                          transform-origin: ${g}px ${Q}px
                      }
							      `), /* @__PURE__ */ i.createElement(nt, { key: `group-${E.dataKey}-${_[n.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      gr,
      {
        id: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g,
        y: Q,
        width: M(_[n.series[1].dataKey]),
        height: X,
        fill: E.color,
        "data-tooltip-html": O(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        strokeWidth: d,
        stroke: "#333",
        opacity: H ? 0.5 : 1,
        display: U ? "block" : "none"
      }
    ), n.yAxis.displayNumbersOnBar && U && /* @__PURE__ */ i.createElement(Ct, { textAnchor: fe ? "end" : "start", dx: fe ? -5 : 5, verticalAnchor: "middle", x: g + B, y: Q + n.barHeight / 2, fill: fe ? E.labelColor : "#000" }, f(_[E.dataKey], "left"))));
  }))));
}, oy = ({ config: e, minValue: t, maxValue: r, existPositiveValue: n, data: a, isAllLine: l }) => {
  let f = 0, s = 0, c = 0, d = 0;
  if (!a)
    return { min: f, max: s };
  const { visualizationType: g, series: y } = e, { max: v, min: k } = e.runtime.yAxis, E = n ? v >= r : v >= 0, M = e.useLogScale ? k >= 0 : k <= 0 && t >= 0 || k <= t && t < 0;
  f = k && M ? k : t, s = v && E ? v : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const R = f < 0 ? 1.1 : 0;
    s = Math.max(r, Math.max(...a.flatMap((O) => [O[m], O[T]])) * 1.15), f = Math.min(t, Math.min(...a.flatMap((O) => [O[m], O[T]])) * 1.15) * R;
  }
  if (e.series.filter((R) => (R == null ? void 0 : R.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: R }
    } = e;
    if ((R == null ? void 0 : R.length) > 0) {
      let O = [];
      R.forEach((B) => {
        var H;
        (H = B.confidenceIntervals) == null || H.map((U) => {
          O.push(U.high), O.push(U.low);
        });
      });
      const N = a.map((B) => O.map((H) => B[H])), _ = Math.max.apply(
        null,
        N.map((B) => B[0])
      ), D = Math.min.apply(
        null,
        N.map((B) => B[1])
      );
      _ > s && (s = _), D < f && (f = D);
    }
  }
  if (g === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let R = y.filter((_) => _.axis === "Left"), O = y.filter((_) => _.axis === "Right");
      const N = (_, D, B, H = "left") => {
        let U = 0;
        return (D.map((Q) => Q.dataKey) || []).forEach((Q) => {
          let K = D.find((W) => W.dataKey === Q), oe = _.map((W) => W[Q]), fe = Math.max.apply(null, oe);
          e.visualizationSubType === "stacked" && H === "left" && K.type === "Bar" && (U += fe), fe > B && (B = fe), B < U && (B = U);
        }), B;
      };
      c = N(a, R, c, "left"), d = N(a, O, d, "right"), c < v && (c = v);
    } catch (R) {
      console.error(R.message);
    }
  if ((g === "Bar" || g === "Combo" && !l) && f > 0 && (f = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !l) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && l && ((k == null || k === "") && f > 0 && (f = 0), k)) {
    const R = e.useLogScale ? k >= 0 && k < t : k < t;
    f = k && R ? k : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const R = Number(k) < Math.min(t, Number(e.xAxis.target));
    f = k && R ? k : 0;
  }
  if (e.visualizationType === "Line") {
    const R = e.useLogScale ? k >= 0 && k < t : k < t;
    f = k && R ? k : t;
  }
  if (s === Number.MIN_VALUE && (s = n ? r : 0), e.runtime.yAxis.paddingPercent) {
    let R = (s - f) * e.runtime.yAxis.paddingPercent;
    f -= R, s += R;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const R = a.map((N) => N[e.series[0].dataKey]), O = Math.max(...R).toString().length;
    switch (!0) {
      case (O > 8 && O <= 12):
        s = s * 1.3;
        break;
      case (O > 4 && O <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (f < 0 ? (s *= 1 + e.yAxis.scalePadding * 2 / 100, f *= 1 + e.yAxis.scalePadding * 2 / 100) : s *= 1 + e.yAxis.scalePadding / 100), { min: f, max: s, leftMax: c, rightMax: d };
}, Xr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, mk = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: n, min: a, max: l, config: f, data: s } = e;
  const { rawData: c, dimensions: d } = se.useContext(wt), [g, y] = d, v = f.runtime.barSeriesKeys || f.runtime.seriesKeys, k = f.runtime.xAxis.type, E = f.orientation === "horizontal", M = (U) => U[f.runtime.originalXAxis.dataKey], T = s.map((U) => M(U)), { visualizationType: m } = f;
  let R = null, O = null, N = null, _ = null, D = null, B = null, H = null;
  if (E && (R = gk({ min: a * 1.03, ...e }), R.type = f.useLogScale ? Xr.LOG : Xr.LINEAR, O = vk(k, t), O.rangeRound([0, n]), D = am(v, [0, n])), E || (H = am(T, [0, r], 0.5), R = Xd(t, [0, r], 1 - f.barThickness), O = yk(e), D = Xd(v, [0, R.bandwidth()], 0)), f.xAxis.type === "date-time") {
    let U = Math.min(...t), X = Math.max(...t);
    U -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (X - U), X += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (X - U), R = yv({
      domain: [U, X],
      range: [0, r]
    }), H = R, R.type = Xr.TIME, D = Xd(v, [0, f.barThickness * r], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const U = f.isLollipopChart ? 1.05 : 1.03;
    O = Zd({
      domain: t,
      range: [0, n]
    }), R = Wn({
      domain: [a * U, Math.max(Number(f.xAxis.target), l)],
      range: [0, r],
      round: !0,
      nice: !0
    }), R.type = Xr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (R = Wn({
    domain: [0, Math.max.apply(null, R.domain())],
    range: [0, r]
  }), R.type = Xr.LINEAR), m === "Box Plot") {
    const U = [];
    if (f.boxplot.plots.map((oe) => oe.columnOutliers.map((fe) => U.push(fe))) && !f.boxplot.hideOutliers) {
      let oe = Math.min(...U), fe = Math.max(...U);
      oe < a && (a = oe), fe > l && (l = fe);
    }
    let Q = Math.min(...f.boxplot.plots.map((oe) => oe.columnLowerBounds)), K = Math.max(...f.boxplot.plots.map((oe) => oe.columnUpperBounds));
    Q < a && (a = Q), K > l && (l = K), O = Wn({
      range: [n, 0],
      round: !0,
      domain: [a, l]
    }), R = Zd({
      range: [0, r],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), R.type = Xr.BAND;
  }
  if (m === "Paired Bar") {
    let X = Math.max.apply(
      Math,
      s.map((K) => {
        var oe;
        return K[(oe = f.series[0]) == null ? void 0 : oe.dataKey];
      })
    ), Q = Math.max.apply(
      Math,
      s.map((K) => {
        var oe;
        return K[(oe = f.series[1]) == null ? void 0 : oe.dataKey];
      })
    );
    _ = Wn({
      domain: [0, Math.max(X, Q) * 1.02],
      range: [r / 2, 0]
    }), N = Wn({
      domain: _.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const U = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, n - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, n];
    O = Wn({
      domain: [0, c.length],
      range: U()
    });
    const X = 5, Q = Number(f.forestPlot.leftWidthOffset) / 100 * r, K = Number(f.forestPlot.rightWidthOffset) / 100 * r, oe = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * r, fe = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (g > 480) {
      if (f.forestPlot.type === "Linear" && (R = Wn({
        domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - X, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + X],
        range: [Q, d[0] - K]
      }), R.type = Xr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let W = Math.max(...s.map((re) => parseFloat(re[f.forestPlot.upper]))), ie = Math.min(...s.map((re) => parseFloat(re[f.forestPlot.lower])));
        R = Uu({
          domain: [ie, W],
          range: [Q, r - K],
          nice: !0
        }), R.type = Xr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (R = Wn({
      domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - X, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + X],
      range: [fe, r - oe],
      type: Xr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let W = Math.max(...s.map((re) => parseFloat(re[f.forestPlot.upper]))), ie = Math.min(...s.map((re) => parseFloat(re[f.forestPlot.lower])));
      R = Uu({
        domain: [ie, W],
        range: [Q, r - K],
        nice: !0,
        base: W > 1 ? 10 : 2,
        round: !1,
        type: Xr.LOG
      });
    }
  }
  return { xScale: R, yScale: O, seriesScale: D, g1xScale: _, g2xScale: N, xScaleNoPadding: B, xScaleBrush: H };
}, gk = ({ min: e, max: t, xMax: r, config: n }) => (e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (n.useLogScale ? Uu : Wn)({
  domain: [e, t],
  range: [0, r],
  nice: n.useLogScale,
  zero: n.useLogScale
})), yk = ({ min: e, max: t, yMax: r, config: n, leftMax: a }) => {
  e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = n.useLogScale ? Uu : Wn;
  return n.visualizationType === "Combo" && (t = a), l({
    domain: [e, t],
    range: [r, 0],
    nice: n.useLogScale,
    zero: n.useLogScale
  });
}, vk = (e, t) => e === "date" ? Wn({
  domain: [Math.min(...t), Math.max(...t)]
}) : qo({ domain: t, padding: 0.5 }), am = (e, t, r = 0) => qo({
  domain: e,
  range: t,
  padding: r
}), Xd = (e, t, r = 0) => Zd({
  domain: e,
  range: t,
  padding: r
});
function xk(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Rs = () => {
  const { config: e } = se.useContext(wt), { visualizationType: t, series: r, orientation: n, visualizationSubType: a } = e, l = [
    "Area Chart",
    "Bar",
    "Box Plot",
    "Combo",
    "Deviation Bar",
    "Forecasting",
    "Forest Plot",
    "Line",
    "Paired Bar",
    "Pie",
    "Scatter Plot",
    "Spark Line",
    "Sankey"
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], s = () => !["Forest Plot", "Sankey"].includes(t), c = () => !["Spark Line"].includes(t), d = () => !["Spark Line"].includes(t), g = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), y = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => {
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
  }, k = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), E = () => {
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
  }, M = () => {
    if ((t === "Bar" || "Combo") && a === "regular")
      return !0;
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && n === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some((le) => le.type === "Bar" || le.type === "Paired Bar" || le.type === "Deviation Bar"), R = () => {
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
  }, O = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: l,
    headerColors: f,
    visCanAnimate: y,
    visHasAnchors: E,
    visHasBarBorders: m,
    visHasDataCutoff: R,
    visHasLabelOnData: g,
    visHasDataSuppression: M,
    visHasLegend: v,
    visHasBrushChart: T,
    visHasNumbersOnBars: k,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : n === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: s,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: d,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: c,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: O,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const we = ["Forest Plot"];
      return !(n === "horizontal" || we.includes(t));
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
var hh = {};
const bk = /* @__PURE__ */ zf(RS), Sk = /* @__PURE__ */ zf(zS);
var ph = {};
ph.__esModule = !0;
ph.default = Ek;
var _u = se;
function Ek(e) {
  var t = (0, _u.useState)(e), r = t[0], n = t[1], a = (0, _u.useRef)(null), l = (0, _u.useCallback)(function(f, s) {
    a.current = s || null, n(f);
  }, [n]);
  return (0, _u.useLayoutEffect)(function() {
    a.current && (a.current(r), a.current = null);
  }, [r]), [r, l];
}
var mh = {}, gh = {};
gh.__esModule = !0;
gh.default = kk;
function kk(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var yh = {};
yh.__esModule = !0;
yh.default = Ck;
function wk(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Tk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tk(e, t) {
  if (e) {
    if (typeof e == "string")
      return im(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return im(e, t);
  }
}
function im(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ck(e, t) {
  for (var r = e, n = 1 / 0, a = wk(t), l; !(l = a()).done; ) {
    var f = l.value, s = Math.sqrt(Math.pow(f.x - e.x, 2) + Math.pow(f.y - e.y, 2));
    s < n && (n = s, r = {
      x: f.x,
      y: f.y
    });
  }
  return r;
}
mh.__esModule = !0;
mh.default = Pk;
var om = ly(gh), Ak = ly(yh);
function ly(e) {
  return e && e.__esModule ? e : { default: e };
}
function Pk(e, t, r) {
  var n, a, l, f;
  return r === void 0 && (r = {}), t.length > 0 ? (0, Ak.default)(e, t) : {
    x: (0, om.default)(e.x, (n = r.xMin) != null ? n : -1 / 0, (a = r.xMax) != null ? a : 1 / 0),
    y: (0, om.default)(e.y, (l = r.yMin) != null ? l : -1 / 0, (f = r.yMax) != null ? f : 1 / 0)
  };
}
var vh = {};
vh.__esModule = !0;
vh.default = Dk;
var Rk = se;
function Lk(e, t, r) {
  if (r === void 0 && (r = 1), !e)
    return [];
  for (var n = [], a = e.getTotalLength(), l = 0; l <= a; l += r) {
    var f = e.getPointAtLength(l), s = f.matrixTransform(t);
    n.push(s);
  }
  return n;
}
function Dk(e) {
  var t = (0, Rk.useMemo)(function() {
    if (!e)
      return [];
    var r = e.getCTM() || new DOMMatrix();
    return Lk(e, r);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
hh.__esModule = !0;
hh.default = _k;
var _i = se, Yo = bk, lm = Sk, Ok = xh(ph), sm = xh(mh), Mk = xh(vh);
function xh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gr() {
  return Gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gr.apply(this, arguments);
}
function _k(e) {
  var t = e === void 0 ? {} : e, r = t.resetOnStart, n = r === void 0 ? !1 : r, a = t.snapToPointer, l = a === void 0 ? !0 : a, f = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, d = t.x, g = t.y, y = t.dx, v = t.dy, k = t.isDragging, E = t.restrict, M = E === void 0 ? {} : E, T = t.restrictToPath, m = (0, _i.useRef)({
    x: d,
    y: g,
    dx: y,
    dy: v
  }), R = (0, Ok.default)({
    x: d,
    y: g,
    dx: y ?? 0,
    dy: v ?? 0,
    isDragging: !1
  }), O = R[0], N = R[1], _ = (0, _i.useState)(new Yo.Point({
    x: 0,
    y: 0
  })), D = _[0], B = _[1];
  (0, _i.useEffect)(function() {
    (m.current.x !== d || m.current.y !== g || m.current.dx !== y || m.current.dy !== v) && (m.current = {
      x: d,
      y: g,
      dx: y,
      dy: v
    }, N(function(K) {
      return Gr({}, K, {
        x: d,
        y: g,
        dx: y ?? 0,
        dy: v ?? 0
      });
    }));
  }), (0, _i.useEffect)(function() {
    k !== void 0 && O.isDragging !== k && N(function(K) {
      return Gr({}, K, {
        isDragging: k
      });
    });
  }, [O.isDragging, k, N]);
  var H = (0, Mk.default)(T), U = (0, _i.useCallback)(function(K) {
    K.persist(), N(function(oe) {
      var fe = oe.x, W = fe === void 0 ? 0 : fe, ie = oe.y, re = ie === void 0 ? 0 : ie, ue = oe.dx, ee = oe.dy, Y = new Yo.Point({
        x: (W || 0) + ue,
        y: (re || 0) + ee
      }), te = (0, lm.localPoint)(K) || new Yo.Point({
        x: 0,
        y: 0
      }), I = l ? te : Y, ge = (0, sm.default)(I, H, M);
      return B((0, Yo.subtractPoints)(Y, te)), {
        isDragging: !0,
        dx: n ? 0 : oe.dx,
        dy: n ? 0 : oe.dy,
        x: n ? ge.x : ge.x - oe.dx,
        y: n ? ge.y : ge.y - oe.dy
      };
    }, c && function(oe) {
      c(Gr({}, oe, {
        event: K
      }));
    });
  }, [c, n, M, H, N, l]), X = (0, _i.useCallback)(function(K) {
    K.persist(), N(function(oe) {
      if (!oe.isDragging)
        return oe;
      var fe = oe.x, W = fe === void 0 ? 0 : fe, ie = oe.y, re = ie === void 0 ? 0 : ie, ue = (0, lm.localPoint)(K) || new Yo.Point({
        x: 0,
        y: 0
      }), ee = l ? ue : (0, Yo.sumPoints)(ue, D), Y = (0, sm.default)(ee, H, M);
      return Gr({}, oe, {
        dx: Y.x - W,
        dy: Y.y - re
      });
    }, s && function(oe) {
      oe.isDragging && s(Gr({}, oe, {
        event: K
      }));
    });
  }, [N, s, l, D, H, M]), Q = (0, _i.useCallback)(function(K) {
    K.persist(), N(function(oe) {
      return Gr({}, oe, {
        isDragging: !1
      });
    }, f && function(oe) {
      f(Gr({}, oe, {
        event: K
      }));
    });
  }, [f, N]);
  return Gr({}, O, {
    dragEnd: Q,
    dragMove: X,
    dragStart: U
  });
}
var Oc = sy, os = bh(gm), qd = bh(se), Nk = bh(hh);
function bh(e) {
  return e && e.__esModule ? e : { default: e };
}
function sy(e) {
  var t = e.captureDragArea, r = t === void 0 ? !0 : t, n = e.snapToPointer, a = n === void 0 ? !0 : n, l = e.children, f = e.dx, s = e.dy, c = e.height, d = e.onDragEnd, g = e.onDragMove, y = e.onDragStart, v = e.resetOnStart, k = e.width, E = e.x, M = e.y, T = e.isDragging, m = e.restrict, R = e.restrictToPath, O = (0, Nk.default)({
    resetOnStart: v,
    snapToPointer: a,
    onDragEnd: d,
    onDragMove: g,
    onDragStart: y,
    x: E,
    y: M,
    dx: f,
    dy: s,
    isDragging: T,
    restrict: m,
    restrictToPath: R
  });
  return /* @__PURE__ */ qd.default.createElement(qd.default.Fragment, null, O.isDragging && r && /* @__PURE__ */ qd.default.createElement("rect", {
    width: k,
    height: c,
    onPointerDown: O.dragStart,
    onPointerMove: O.dragMove,
    onPointerUp: O.dragEnd,
    fill: "transparent"
  }), l(O));
}
sy.propTypes = {
  children: os.default.func.isRequired,
  width: os.default.number.isRequired,
  height: os.default.number.isRequired,
  captureDragArea: os.default.bool,
  isDragging: os.default.bool
};
function xc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var r = e.range(), n = r[0], a = r[1], l = 0, f = "step" in e && typeof e.step < "u" ? e.step() : 1, s = f * (a - n) / Math.abs(a - n);
  if (s > 0)
    for (; t > n + s * (l + 1); )
      l += 1;
  else
    for (; t < n + s * (l + 1); )
      l += 1;
  return l;
}
function um(e, t, r, n) {
  var a, l = xc(e, t + (t < r ? -n : n)), f = xc(e, r + (r < t ? -n : n)), s = Math.min(l, f), c = Math.max(l, f);
  if ("invert" in e && typeof e.invert < "u")
    a = {
      start: s,
      end: c
    };
  else {
    for (var d = [], g = e.domain(), y = s; y <= c; y += 1)
      d.push(g[y]);
    a = {
      values: d
    };
  }
  return a;
}
function Sh(e) {
  if (typeof window < "u" && window.TouchEvent && e instanceof TouchEvent)
    return {
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY
    };
  var t = e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cr.apply(this, arguments);
}
function Fk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rf(e, t);
}
function Rf(e, t) {
  return Rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rf(e, t);
}
var uy = /* @__PURE__ */ function(e) {
  Fk(t, e);
  function t() {
    for (var n, a = arguments.length, l = new Array(a), f = 0; f < a; f++)
      l[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(l)) || this, n.handleDragStart = function(s) {
      var c = n.props, d = c.onBrushHandleChange, g = c.type, y = c.onBrushStart;
      d && d(g, Sh(s.event)), y && y(s);
    }, n.handleDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type, y = c.isControlled;
      !s.isDragging || y || d(function(v) {
        var k = v.start, E = v.end, M = 0, T = Math.max(k.x, E.x), m = Math.min(k.x, E.x), R = Math.max(k.y, E.y), O = Math.min(k.y, E.y);
        switch (g) {
          case "right":
            return M = T + s.dx, Cr({}, v, {
              activeHandle: g,
              extent: Cr({}, v.extent, {
                x0: Math.max(Math.min(M, k.x), v.bounds.x0),
                x1: Math.min(Math.max(M, k.x), v.bounds.x1)
              })
            });
          case "left":
            return M = m + s.dx, Cr({}, v, {
              activeHandle: g,
              extent: Cr({}, v.extent, {
                x0: Math.min(M, E.x),
                x1: Math.max(M, E.x)
              })
            });
          case "bottom":
            return M = R + s.dy, Cr({}, v, {
              activeHandle: g,
              extent: Cr({}, v.extent, {
                y0: Math.min(M, k.y),
                y1: Math.max(M, k.y)
              })
            });
          case "top":
            return M = O + s.dy, Cr({}, v, {
              activeHandle: g,
              extent: Cr({}, v.extent, {
                y0: Math.min(M, E.y),
                y1: Math.max(M, E.y)
              })
            });
          default:
            return v;
        }
      });
    }, n.handleDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onBrushHandleChange, y = s.isControlled;
      y || c(function(v) {
        var k = v.start, E = v.end, M = v.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), E.x = Math.max(M.x0, M.x1), E.y = Math.max(M.y0, M.y1);
        var T = Cr({}, v, {
          start: k,
          end: E,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(k.x, E.x),
            x1: Math.max(k.x, E.x),
            y0: Math.min(k.y, E.y),
            y1: Math.max(k.y, E.y)
          }
        });
        return d && d(T), T;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this, l = this.props, f = l.stageWidth, s = l.stageHeight, c = l.brush, d = l.type, g = l.handle, y = l.isControlled, v = l.isDragInProgress, k = l.renderBrushHandle, E = g.x, M = g.y, T = g.width, m = g.height, R = d === "right" || d === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Oc, {
      width: f,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: y ? v : void 0
    }, function(O) {
      var N = O.dragStart, _ = O.dragEnd, D = O.dragMove, B = O.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, B && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: f,
        height: s,
        style: {
          cursor: R
        },
        onPointerMove: D,
        onPointerUp: y ? void 0 : _,
        onPointerLeave: y ? void 0 : _
      }), !k && /* @__PURE__ */ i.createElement("rect", {
        x: E,
        y: M,
        width: T,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + d,
        onPointerDown: N,
        onPointerMove: D,
        onPointerUp: y ? void 0 : _,
        style: {
          cursor: R,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), k && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: N,
        onPointerMove: D,
        onPointerUp: y ? void 0 : _
      }, k(Cr({}, a.props.handle, {
        height: s,
        className: "visx-brush-handle-" + d,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
uy.propTypes = {
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  handle: he.shape({
    x: he.number.isRequired,
    y: he.number.isRequired,
    width: he.number.isRequired,
    height: he.number.isRequired
  }).isRequired,
  isControlled: he.bool,
  isDragInProgress: he.bool,
  onBrushHandleChange: he.func,
  renderBrushHandle: he.func
};
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mr.apply(this, arguments);
}
function $k(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lf(e, t);
}
function Lf(e, t) {
  return Lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Lf(e, t);
}
var Eh = /* @__PURE__ */ function(e) {
  $k(t, e);
  function t() {
    for (var n, a = arguments.length, l = new Array(a), f = 0; f < a; f++)
      l[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(l)) || this, n.cornerDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type;
      s.isDragging && d(function(y) {
        var v = y.start, k = y.end, E = Math.max(v.x, k.x), M = Math.min(v.x, k.x), T = Math.max(v.y, k.y), m = Math.min(v.y, k.y), R = 0, O = 0;
        switch (g) {
          case "topRight":
            return R = E + s.dx, O = m + s.dy, mr({}, y, {
              activeHandle: g,
              extent: mr({}, y.extent, {
                x0: Math.max(Math.min(R, v.x), y.bounds.x0),
                x1: Math.min(Math.max(R, v.x), y.bounds.x1),
                y0: Math.max(Math.min(O, k.y), y.bounds.y0),
                y1: Math.min(Math.max(O, k.y), y.bounds.y1)
              })
            });
          case "topLeft":
            return R = M + s.dx, O = m + s.dy, mr({}, y, {
              activeHandle: g,
              extent: mr({}, y.extent, {
                x0: Math.max(Math.min(R, k.x), y.bounds.x0),
                x1: Math.min(Math.max(R, k.x), y.bounds.x1),
                y0: Math.max(Math.min(O, k.y), y.bounds.y0),
                y1: Math.min(Math.max(O, k.y), y.bounds.y1)
              })
            });
          case "bottomLeft":
            return R = M + s.dx, O = T + s.dy, mr({}, y, {
              activeHandle: g,
              extent: mr({}, y.extent, {
                x0: Math.max(Math.min(R, k.x), y.bounds.x0),
                x1: Math.min(Math.max(R, k.x), y.bounds.x1),
                y0: Math.max(Math.min(O, v.y), y.bounds.y0),
                y1: Math.min(Math.max(O, v.y), y.bounds.y1)
              })
            });
          case "bottomRight":
            return R = E + s.dx, O = T + s.dy, mr({}, y, {
              activeHandle: g,
              extent: mr({}, y.extent, {
                x0: Math.max(Math.min(R, v.x), y.bounds.x0),
                x1: Math.min(Math.max(R, v.x), y.bounds.x1),
                y0: Math.max(Math.min(O, v.y), y.bounds.y0),
                y1: Math.min(Math.max(O, v.y), y.bounds.y1)
              })
            });
          default:
            return y;
        }
      });
    }, n.cornerDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd;
      c(function(g) {
        var y = g.start, v = g.end, k = g.extent;
        y.x = Math.min(k.x0, k.x1), y.y = Math.min(k.y0, k.y0), v.x = Math.max(k.x0, k.x1), v.y = Math.max(k.y0, k.y1);
        var E = mr({}, g, {
          start: y,
          end: v,
          activeHandle: null,
          domain: {
            x0: Math.min(y.x, v.x),
            x1: Math.max(y.x, v.x),
            y0: Math.min(y.y, v.y),
            y1: Math.max(y.y, v.y)
          }
        });
        return d && d(E), E;
      });
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, l = a.type, f = a.brush, s = a.stageWidth, c = a.stageHeight, d = a.style, g = a.corner, y = (d == null ? void 0 : d.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), v = f.activeHandle || f.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Oc, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(k) {
      var E = k.dragMove, M = k.dragEnd, T = k.dragStart, m = k.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, m && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: y
        },
        onPointerMove: E,
        onPointerUp: M
      }), /* @__PURE__ */ i.createElement("rect", mr({
        fill: "transparent",
        onPointerDown: T,
        onPointerMove: E,
        onPointerUp: M,
        className: "visx-brush-corner-" + l,
        style: mr({
          cursor: y,
          pointerEvents: v
        }, d)
      }, g)));
    });
  }, t;
}(i.Component);
Eh.propTypes = {
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onBrushEnd: he.func,
  corner: he.shape({
    x: he.number.isRequired,
    y: he.number.isRequired,
    width: he.number.isRequired,
    height: he.number.isRequired
  }).isRequired
};
Eh.defaultProps = {
  style: {}
};
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}
function zk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Df(e, t);
}
function Df(e, t) {
  return Df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Df(e, t);
}
var Bk = {
  cursor: "move"
}, kh = /* @__PURE__ */ function(e) {
  zk(t, e);
  function t() {
    for (var n, a = arguments.length, l = new Array(a), f = 0; f < a; f++)
      l[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(l)) || this, n.selectionDragStart = function(s) {
      var c = n.props, d = c.onMoveSelectionChange, g = c.onBrushStart;
      d && d("move", Sh(s.event)), g && g(s);
    }, n.selectionDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.isControlled;
      g || d(function(y) {
        var v = y.start, k = v.x, E = v.y, M = y.end, T = M.x, m = M.y, R = s.dx > 0 ? Math.min(s.dx, y.bounds.x1 - T) : Math.max(s.dx, y.bounds.x0 - k), O = s.dy > 0 ? Math.min(s.dy, y.bounds.y1 - m) : Math.max(s.dy, y.bounds.y0 - E);
        return Ia({}, y, {
          isBrushing: !0,
          extent: Ia({}, y.extent, {
            x0: k + R,
            x1: T + R,
            y0: E + O,
            y1: m + O
          })
        });
      });
    }, n.selectionDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onMoveSelectionChange, y = s.isControlled;
      y || c(function(v) {
        var k = Ia({}, v, {
          isBrushing: !1,
          start: Ia({}, v.start, {
            x: Math.min(v.extent.x0, v.extent.x1),
            y: Math.min(v.extent.y0, v.extent.y1)
          }),
          end: Ia({}, v.end, {
            x: Math.max(v.extent.x0, v.extent.x1),
            y: Math.max(v.extent.y0, v.extent.y1)
          })
        });
        return d && d(k), k;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, l = a.width, f = a.height, s = a.stageWidth, c = a.stageHeight, d = a.brush, g = a.disableDraggingSelection, y = a.onMouseLeave, v = a.onMouseMove, k = a.onMouseUp, E = a.onClick, M = a.selectedBoxStyle, T = a.isControlled, m = a.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Oc, {
      width: l,
      height: f,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: T ? m : void 0
    }, function(R) {
      var O = R.isDragging, N = R.dragStart, _ = R.dragEnd, D = R.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, O && /* @__PURE__ */ i.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: T ? void 0 : _,
        onPointerMove: D,
        onPointerLeave: T ? void 0 : _,
        style: Bk
      }), /* @__PURE__ */ i.createElement("rect", Ia({
        x: Math.min(d.extent.x0, d.extent.x1),
        y: Math.min(d.extent.y0, d.extent.y1),
        width: l,
        height: f,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : N,
        onPointerLeave: function(H) {
          y && y(H);
        },
        onPointerMove: function(H) {
          D(H), v && v(H);
        },
        onPointerUp: function(H) {
          T || _(H), k && k(H);
        },
        onClick: function(H) {
          E && E(H);
        },
        style: {
          pointerEvents: d.isBrushing || d.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, M)));
    });
  }, t;
}(i.Component);
kh.propTypes = {
  width: he.number.isRequired,
  height: he.number.isRequired,
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onMoveSelectionChange: he.func,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  disableDraggingSelection: he.bool.isRequired,
  onMouseLeave: he.func,
  onMouseMove: he.func,
  onMouseUp: he.func,
  onClick: he.func,
  isControlled: he.bool,
  isDragInProgress: he.bool
};
kh.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Of.apply(this, arguments);
}
function Mf(e) {
  return /* @__PURE__ */ i.createElement(gr, Of({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Mf.propTypes = {
  width: he.number.isRequired,
  height: he.number.isRequired,
  onClick: he.func,
  onDoubleClick: he.func,
  onPointerDown: he.func,
  onPointerLeave: he.func,
  onPointerMove: he.func,
  onPointerUp: he.func
};
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function Ik(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
var wh = /* @__PURE__ */ function(e) {
  Ik(t, e);
  function t(n) {
    var a;
    a = e.call(this, n) || this, a.mouseUpTime = 0, a.mouseDownTime = 0, a.getIdleState = function() {
      var s = a.props, c = s.width, d = s.height;
      return {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        },
        extent: {
          x0: -1,
          x1: -1,
          y0: -1,
          y1: -1
        },
        bounds: {
          x0: 0,
          x1: c,
          y0: 0,
          y1: d
        },
        isBrushing: !1,
        brushPageOffset: void 0,
        activeHandle: null,
        brushingType: void 0
      };
    }, a.handleWindowPointerUp = function() {
      var s = a.props, c = s.useWindowMoveEvents, d = s.onBrushEnd, g = s.resetOnEnd, y = a.state.brushingType;
      c && y && a.updateBrush(function(v) {
        var k = v.start, E = v.end, M = v.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), E.x = Math.max(M.x0, M.x1), E.y = Math.max(M.y0, M.y1);
        var T = tr({}, v, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return d && d(T), g && (T = tr({}, T, a.getIdleState())), T;
      });
    }, a.handleWindowPointerMove = function(s) {
      var c = a.props.useWindowMoveEvents, d = a.state, g = d.brushingType, y = d.isBrushing, v = d.brushPageOffset, k = d.start;
      if (!(!c || !y)) {
        var E = s.pageX - ((v == null ? void 0 : v.pageX) || 0), M = s.pageY - ((v == null ? void 0 : v.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, N = T.end, _ = N.x, D = N.y;
          return tr({}, T, {
            isBrushing: !0,
            extent: tr({}, T.extent, a.getExtent({
              x: g === "left" ? Math.min(Math.max(R + E, T.bounds.x0), T.bounds.x1) : R,
              y: g === "top" ? Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1) : O
            }, {
              x: g === "right" ? Math.min(Math.max(_ + E, T.bounds.x0), T.bounds.x1) : _,
              y: g === "bottom" ? Math.min(Math.max(D + M, T.bounds.y0), T.bounds.y1) : D
            }))
          });
        }), g === "move" && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, N = T.end, _ = N.x, D = N.y, B = E > 0 ? Math.min(E, T.bounds.x1 - _) : Math.max(E, T.bounds.x0 - R), H = M > 0 ? Math.min(M, T.bounds.y1 - D) : Math.max(M, T.bounds.y0 - O);
          return tr({}, T, {
            isBrushing: !0,
            extent: tr({}, T.extent, {
              x0: R + B,
              y0: O + H,
              x1: _ + B,
              y1: D + H
            })
          });
        }), g === "select" && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, N = {
            x: Math.min(Math.max(R + E, T.bounds.x0), T.bounds.x1),
            y: Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1)
          }, _ = a.getExtent(k, N), D = tr({}, T, {
            end: N,
            extent: _
          });
          return D;
        });
      }
    }, a.getExtent = function(s, c) {
      var d = a.props, g = d.brushDirection, y = d.width, v = d.height, k = g === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), E = g === "vertical" ? y : Math.max(s.x || 0, c.x || 0), M = g === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), T = g === "horizontal" ? v : Math.max(s.y || 0, c.y || 0);
      return {
        x0: k,
        x1: E,
        y0: M,
        y1: T
      };
    }, a.handleDragStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin, k = c.useWindowMoveEvents, E = v != null && v.left ? v.left : 0, M = v != null && v.top ? v.top : 0, T = {
        x: (s.x || 0) + s.dx - g - E,
        y: (s.y || 0) + s.dy - y - M
      }, m = tr({}, T);
      d && d(T), a.updateBrush(function(R) {
        return tr({}, R, {
          start: T,
          end: m,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: k ? Sh(s.event) : void 0
        });
      });
    }, a.handleBrushStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin;
      if (d) {
        var k = v != null && v.left ? v.left : 0, E = v != null && v.top ? v.top : 0, M = {
          x: (s.x || 0) + s.dx - g - k,
          y: (s.y || 0) + s.dy - y - E
        };
        d(M);
      }
    }, a.handleDragMove = function(s) {
      var c = a.props, d = c.left, g = c.top, y = c.inheritedMargin, v = c.useWindowMoveEvents;
      if (!(!s.isDragging || v)) {
        var k = (y == null ? void 0 : y.left) || 0, E = (y == null ? void 0 : y.top) || 0, M = {
          x: (s.x || 0) + s.dx - d - k,
          y: (s.y || 0) + s.dy - g - E
        };
        a.updateBrush(function(T) {
          var m = T.start, R = a.getExtent(m, M);
          return tr({}, T, {
            end: M,
            extent: R
          });
        });
      }
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.onBrushEnd, d = s.resetOnEnd, g = s.useWindowMoveEvents;
      g || a.updateBrush(function(y) {
        var v = y.extent, k = tr({}, y, {
          start: {
            x: v.x0,
            y: v.y0
          },
          end: {
            x: v.x1,
            y: v.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return c && c(k), d && (k = tr({}, k, a.getIdleState())), k;
      });
    }, a.getBrushWidth = function() {
      var s = a.state.extent, c = s.x0, d = s.x1;
      return Math.max(Math.max(c, d) - Math.min(c, d), 0);
    }, a.getBrushHeight = function() {
      var s = a.state.extent, c = s.y1, d = s.y0;
      return Math.max(Math.max(d, c) - Math.min(d, c), 0);
    }, a.handles = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, k = s / 2, E = a.getBrushWidth(), M = a.getBrushHeight();
      return {
        top: {
          x: d - k,
          y: y - k,
          height: s,
          width: E + s
        },
        bottom: {
          x: d - k,
          y: v - k,
          height: s,
          width: E + s
        },
        right: {
          x: g - k,
          y: y - k,
          height: M + s,
          width: s
        },
        left: {
          x: d - k,
          y: y - k,
          height: M + s,
          width: s
        }
      };
    }, a.corners = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, k = s / 2, E = s, M = s;
      return {
        topLeft: {
          x: Math.min(d, g) - k,
          y: Math.min(y, v) - k,
          width: E,
          height: M
        },
        topRight: {
          x: Math.max(d, g) - k,
          y: Math.min(y, v) - k,
          width: E,
          height: M
        },
        bottomLeft: {
          x: Math.min(d, g) - k,
          y: Math.max(y, v) - k,
          width: E,
          height: M
        },
        bottomRight: {
          x: Math.max(d, g) - k,
          y: Math.max(y, v) - k,
          width: E,
          height: M
        }
      };
    }, a.updateBrush = function(s) {
      var c = a.props.onChange;
      a.setState(s, function() {
        c && c(a.state);
      });
    }, a.reset = function() {
      return a.updateBrush(function() {
        return a.getIdleState();
      });
    }, a.handleBrushingTypeChange = function(s, c) {
      a.updateBrush(function(d) {
        var g = tr({}, d, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (g.brushPageOffset = c), g;
      });
    };
    var l = n.initialBrushPosition, f = l ? a.getExtent(l.start, l.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return a.state = {
      start: {
        x: Math.max(0, f.x0),
        y: Math.max(0, f.y0)
      },
      end: {
        x: Math.max(0, f.x1),
        y: Math.max(0, f.y1)
      },
      extent: f,
      bounds: {
        x0: 0,
        x1: a.props.width,
        y0: 0,
        y1: a.props.height
      },
      isBrushing: !1,
      brushingType: void 0,
      activeHandle: null
    }, a;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(a) {
    var l = this;
    (this.props.width !== a.width || this.props.height !== a.height) && this.setState(function(f) {
      var s = f.start, c = f.end, d = f.extent;
      if (!(d.x0 === -1 && d.x1 === -1 && d.y0 === -1 && d.y1 === -1)) {
        var g = l.props.width / a.width, y = l.props.height / a.height;
        s = {
          x: g * d.x0,
          y: y * d.y0
        }, c = {
          x: g * d.x1,
          y: y * d.y1
        }, d = l.getExtent(s, c);
      }
      return {
        start: s,
        end: c,
        extent: d,
        bounds: {
          x0: 0,
          x1: l.props.width,
          y0: 0,
          y1: l.props.height
        }
      };
    });
  }, r.componentDidMount = function() {
    this.props.useWindowMoveEvents && (window.addEventListener("mouseup", this.handleWindowPointerUp), window.addEventListener("mousemove", this.handleWindowPointerMove));
  }, r.componentWillUnmount = function() {
    this.props.useWindowMoveEvents && (window.removeEventListener("mouseup", this.handleWindowPointerUp), window.removeEventListener("mousemove", this.handleWindowPointerMove));
  }, r.render = function() {
    var a = this, l = this.state, f = l.start, s = l.end, c = this.props, d = c.top, g = c.left, y = c.width, v = c.height, k = c.onMouseLeave, E = c.onMouseUp, M = c.onMouseMove, T = c.onBrushEnd, m = c.onClick, R = c.resizeTriggerAreas, O = c.selectedBoxStyle, N = c.disableDraggingSelection, _ = c.disableDraggingOverlay, D = c.clickSensitivity, B = c.useWindowMoveEvents, H = c.renderBrushHandle, U = this.state.brushingType, X = this.handles(), Q = this.corners(), K = this.getBrushWidth(), oe = this.getBrushHeight(), fe = new Set(R);
    return /* @__PURE__ */ i.createElement(nt, {
      className: "visx-brush",
      top: d,
      left: g
    }, _ ? /* @__PURE__ */ i.createElement(Mf, {
      width: y,
      height: v,
      onClick: function(ie) {
        var re = a.mouseUpTime - a.mouseDownTime;
        m && re < D && m(ie);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ i.createElement(Oc, {
      width: y,
      height: v,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: B ? U === "select" : void 0
    }, function(W) {
      var ie = W.dragStart, re = W.isDragging, ue = W.dragMove, ee = W.dragEnd;
      return /* @__PURE__ */ i.createElement(Mf, {
        width: y,
        height: v,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(te) {
          var I = a.mouseUpTime - a.mouseDownTime;
          m && I < D && m(te);
        },
        onPointerDown: function(te) {
          a.mouseDownTime = Date.now(), ie(te);
        },
        onPointerLeave: function(te) {
          k && k(te);
        },
        onPointerMove: function(te) {
          !re && M && M(te), re && ue(te);
        },
        onPointerUp: function(te) {
          a.mouseUpTime = Date.now(), E && E(te), ee(te);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), f && s && /* @__PURE__ */ i.createElement(kh, {
      updateBrush: this.updateBrush,
      width: K,
      height: oe,
      stageWidth: y,
      stageHeight: v,
      brush: this.state,
      disableDraggingSelection: N,
      onBrushEnd: T,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: k,
      onMouseMove: M,
      onMouseUp: E,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: O,
      isControlled: B,
      isDragInProgress: B ? U === "move" : void 0
    }), f && s && Object.keys(X).filter(function(W) {
      return fe.has(W);
    }).map(function(W) {
      var ie = X[W];
      return ie && /* @__PURE__ */ i.createElement(uy, {
        key: "handle-" + W,
        type: W,
        handle: ie,
        stageWidth: y,
        stageHeight: v,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: T,
        isControlled: B,
        isDragInProgress: B ? U === W : void 0,
        onBrushHandleChange: a.handleBrushingTypeChange,
        renderBrushHandle: H
      });
    }), f && s && Object.keys(Q).filter(function(W) {
      return fe.has(W);
    }).map(function(W) {
      var ie = Q[W];
      return ie && /* @__PURE__ */ i.createElement(Eh, {
        key: "corner-" + W,
        type: W,
        brush: a.state,
        updateBrush: a.updateBrush,
        stageWidth: y,
        stageHeight: v,
        corner: ie,
        onBrushEnd: T
      });
    }));
  }, t;
}(i.Component);
wh.propTypes = {
  brushDirection: he.oneOf(["horizontal", "vertical", "both"]),
  width: he.number.isRequired,
  height: he.number.isRequired,
  left: he.number.isRequired,
  top: he.number.isRequired,
  onChange: he.func,
  handleSize: he.number,
  resizeTriggerAreas: he.array,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  onMouseLeave: he.func,
  onMouseUp: he.func,
  onMouseMove: he.func,
  onClick: he.func,
  clickSensitivity: he.number,
  disableDraggingSelection: he.bool,
  disableDraggingOverlay: he.bool,
  resetOnEnd: he.bool,
  useWindowMoveEvents: he.bool,
  renderBrushHandle: he.func
};
wh.defaultProps = {
  brushDirection: "both",
  inheritedMargin: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  onChange: null,
  handleSize: 4,
  resizeTriggerAreas: ["left", "right"],
  onBrushStart: null,
  onBrushEnd: null,
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null,
  disableDraggingSelection: !1,
  disableDraggingOverlay: !1,
  clickSensitivity: 200,
  resetOnEnd: !1,
  initialBrushPosition: null,
  useWindowMoveEvents: !1,
  renderBrushHandles: null
};
function Hk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nf(e, t);
}
function Nf(e, t) {
  return Nf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Nf(e, t);
}
var cm = 2, dm = "steelblue", Th = /* @__PURE__ */ function(e) {
  Hk(t, e);
  function t() {
    for (var n, a = arguments.length, l = new Array(a), f = 0; f < a; f++)
      l[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(l)) || this, n.handleChange = function(s) {
      var c = n.props.onChange;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = n.convertRangeToDomain(s);
        c(g);
      }
    }, n.handleBrushStart = function(s) {
      var c = n.props.onBrushStart;
      if (c) {
        var d = s.x, g = s.y, y = n.props, v = y.xScale, k = y.yScale, E = xc(v, d), M = xc(k, g);
        c({
          x: "invert" in v && typeof v.invert < "u" ? E : v.domain()[E],
          y: "invert" in k && typeof k.invert < "u" ? M : k.domain()[M]
        });
      }
    }, n.handleBrushEnd = function(s) {
      var c = n.props.onBrushEnd;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = n.convertRangeToDomain(s);
        c(g);
      }
    }, n;
  }
  var r = t.prototype;
  return r.convertRangeToDomain = function(a) {
    var l = this.props, f = l.xScale, s = l.yScale, c = a.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, k = um(f, d || 0, g || 0, cm), E = um(s, y || 0, v || 0, cm), M = {
      x0: k.start || 0,
      x1: k.end || 0,
      xValues: k.values,
      y0: E.start || 0,
      y1: E.end || 0,
      yValues: E.values
    };
    return M;
  }, r.render = function() {
    var a = this.props, l = a.xScale, f = a.yScale, s = a.height, c = a.width, d = a.margin, g = a.brushDirection, y = a.initialBrushPosition, v = a.innerRef, k = a.resizeTriggerAreas, E = a.brushRegion, M = a.yAxisOrientation, T = a.xAxisOrientation, m = a.selectedBoxStyle, R = a.disableDraggingSelection, O = a.disableDraggingOverlay, N = a.resetOnEnd, _ = a.onMouseLeave, D = a.onMouseMove, B = a.onClick, H = a.handleSize, U = a.useWindowMoveEvents, X = a.renderBrushHandle;
    if (!l || !f)
      return null;
    var Q, K, oe, fe, W = d != null && d.left ? d.left : 0, ie = d != null && d.top ? d.top : 0, re = d != null && d.right ? d.right : 0, ue = d != null && d.bottom ? d.bottom : 0;
    return E === "chart" ? (oe = 0, fe = 0, Q = c, K = s) : E === "yAxis" ? (fe = 0, K = s, M === "right" ? (oe = c, Q = re) : (oe = -W, Q = W)) : (oe = 0, Q = c, T === "bottom" ? (fe = s, K = ue) : (fe = -ie, K = ie)), /* @__PURE__ */ i.createElement(wh, {
      width: Q,
      height: K,
      left: oe,
      top: fe,
      brushDirection: g,
      disableDraggingSelection: R,
      disableDraggingOverlay: O,
      handleSize: H,
      inheritedMargin: d,
      initialBrushPosition: y,
      ref: v,
      resetOnEnd: N,
      resizeTriggerAreas: k,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: B,
      onMouseLeave: _,
      onMouseMove: D,
      useWindowMoveEvents: U,
      renderBrushHandle: X
    });
  }, t;
}(se.Component);
Th.propTypes = {
  height: he.number,
  width: he.number,
  onChange: he.func,
  onBrushEnd: he.func,
  brushDirection: he.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: he.array,
  brushRegion: he.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: he.oneOf(["left", "right"]),
  xAxisOrientation: he.oneOf(["top", "bottom"]),
  disableDraggingSelection: he.bool,
  disableDraggingOverlay: he.bool,
  resetOnEnd: he.bool,
  handleSize: he.number,
  useWindowMoveEvents: he.bool,
  renderBrushHandle: he.func
};
Th.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: dm,
    fillOpacity: 0.2,
    stroke: dm,
    strokeWidth: 1,
    strokeOpacity: 0.8
  },
  margin: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  handleSize: 4,
  brushDirection: "horizontal",
  initialBrushPosition: null,
  resizeTriggerAreas: ["left", "right"],
  brushRegion: "chart",
  yAxisOrientation: "right",
  xAxisOrientation: "bottom",
  onBrushStart: null,
  onBrushEnd: null,
  disableDraggingSelection: !1,
  resetOnEnd: !1,
  onMouseMove: null,
  onMouseLeave: null,
  onClick: null,
  useWindowMoveEvents: !1,
  renderBrushHandles: null
};
const Wk = Th, Vk = (e) => {
  const { transformedData: t, config: r, parseDate: n, formatDate: a, updateConfig: l } = se.useContext(wt), { fontSize: f } = As(), [s, c] = se.useState([...t]), d = se.useRef(null), g = 15, [y, v] = se.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), k = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, E = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: g
  }, M = (m) => {
    var H;
    if (!m)
      return;
    const { xValues: R } = m, O = (H = r.xAxis) == null ? void 0 : H.dataKey, N = t.filter((U) => R.includes(U[O])), _ = R.slice().reverse().find((U) => U !== void 0), D = R.find((U) => U !== void 0), B = (U) => Sn(r.runtime.xAxis) ? a(n(U)) : U;
    v((U) => {
      var X, Q;
      return {
        ...U,
        startPosition: (X = d.current) == null ? void 0 : X.state.start.x,
        endPosition: (Q = d.current) == null ? void 0 : Q.state.end.x,
        endValue: B(_),
        startValue: B(D)
      };
    }), c(N);
  };
  se.useEffect(() => {
    l({
      ...r,
      brush: {
        ...r.brush,
        data: s
      }
    });
  }, [s]), se.useEffect(() => {
    r.brush.active || c(t);
  }, [r.brush.active]);
  const T = () => {
    const m = Number(r.xAxis.tickRotation) > 0 ? Number(r.xAxis.tickRotation) : 0;
    let R = 0;
    const O = 20;
    return r.xAxis.label || (!r.isResponsiveTicks && m && (R = Number(m + r.xAxis.tickWidthMax) / 1.6), !r.isResponsiveTicks && !m && (R = Number(r.xAxis.labelOffset) - O), r.isResponsiveTicks && r.dynamicMarginTop && (R = Number(r.xAxis.labelOffset + r.xAxis.tickWidthMax / 1.6)), r.isResponsiveTicks && !r.dynamicMarginTop && (R = Number(r.xAxis.labelOffset - O))), r.xAxis.label && (!r.isResponsiveTicks && m && (R = Number(r.xAxis.tickWidthMax + m)), !r.isResponsiveTicks && !m && (R = r.xAxis.labelOffset + O), r.isResponsiveTicks && !m && (R = Number(r.dynamicMarginTop ? r.dynamicMarginTop : r.xAxis.labelOffset) + O)), R;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(r.visualizationType))
    return /* @__PURE__ */ i.createElement(nt, { display: r.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(r.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: r.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      Wk,
      {
        renderBrushHandle: (m) => {
          var R;
          return /* @__PURE__ */ i.createElement(jk, { textProps: y, fontSize: f[r.fontSize], ...m, isBrushing: (R = d.current) == null ? void 0 : R.state.isBrushing });
        },
        innerRef: d,
        useWindowMoveEvents: !0,
        selectedBoxStyle: E,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: r.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: k,
        onChange: M
      }
    ));
}, jk = (e) => {
  const { x: t, isBrushActive: r, isBrushing: n, className: a, textProps: l } = e, f = 8;
  if (!r)
    return null;
  const s = a.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", d = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(nt, { left: t + f / 2, top: -2 }, /* @__PURE__ */ i.createElement(Ct, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: d, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? l.startValue : l.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: n ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, qr = (e) => {
  var bt, An, Pn, bn, Rn;
  const { transformedData: t, dimensions: r, config: n, parseDate: a, formatDate: l, currentViewport: f, formatNumber: s, handleChartAriaLabels: c, updateConfig: d, handleLineType: g, getTextWidth: y } = se.useContext(wt), { visualizationType: v, visualizationSubType: k, orientation: E, xAxis: M, yAxis: T, runtime: m, debugSvg: R } = n;
  let [O] = r;
  n && n.legend && !n.legend.hide && n.legend.position !== "bottom" && ["lg", "md"].includes(f) && (O = O * 0.73);
  const { horizontal: N } = n.heights, _ = E === "horizontal" || n.visualizationType === "Forest Plot", D = !0;
  let B = n.aspectRatio ? O * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[E];
  const H = O - m.yAxis.size - (v === "Combo" ? n.yAxis.rightAxisSize : 0);
  let U = B - (E === "horizontal" ? 0 : m.xAxis.size);
  n.visualizationType === "Forest Plot" && (B = B + n.data.length * n.forestPlot.rowHeight, U = U + n.data.length * n.forestPlot.rowHeight, O = r[0]), (bt = n.brush) != null && bt.active && (B = B + ((An = n.brush) == null ? void 0 : An.height));
  const { minValue: X, maxValue: Q, existPositiveValue: K, isAllLine: oe } = Dc(n, t), { visSupportsReactTooltip: fe } = Rs(), { hasTopAxis: W } = xk(n), [ie, re] = se.useState(!1), [ue, ee] = se.useState({ x: 0, y: 0 }), Y = se.useRef(), te = se.useRef(), I = oh(Y, {
    freezeOnceVisible: !1
  }), ge = (De) => Sn(n.runtime.xAxis) ? a(De[n.runtime.originalXAxis.dataKey]).getTime() : De[n.runtime.originalXAxis.dataKey], ve = (De, Ke) => De[Ke], ke = n.brush.active && ((Pn = n.brush.data) != null && Pn.length) ? n.brush.data.map((De) => ge(De)) : t.map((De) => ge(De)), Ne = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", je = { data: t, config: n, minValue: X, maxValue: Q, isAllLine: oe, existPositiveValue: K, xAxisDataMapped: ke, xMax: H, yMax: U }, { min: Qe, max: Oe, leftMax: ye, rightMax: we } = oy(je), { yScaleRight: le, hasRightAxis: Be } = fh({ config: n, yMax: U, data: t, updateConfig: d }), { xScale: Me, yScale: He, seriesScale: qe, g1xScale: et, g2xScale: it, xScaleNoPadding: st, xScaleBrush: at } = mk({ ...je, min: Qe, max: Oe, leftMax: ye, rightMax: we, dimensions: r }), [Ze, Ie] = se.useState(null);
  se.useEffect(() => {
    var De;
    Ie((De = te == null ? void 0 : te.current) == null ? void 0 : De.getBoundingClientRect());
  }, [te, n.legend]);
  const Fe = (De, Ke) => {
    if (n.useLogScale && De === 0.1 && (De = 0), !(n.data && !n.data[Ke] && v === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[Ke][n.xAxis.dataKey] : Sn(m.yAxis) ? l(a(De)) : E === "vertical" ? s(De, "left", D) : De;
  }, dt = (De) => (n.useLogScale && De === 0.1 && (De = 0), Sn(m.xAxis) && n.visualizationType !== "Forest Plot" ? l(De) : E === "horizontal" && n.visualizationType !== "Forest Plot" ? s(De, "left", D) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? s(De, "bottom", D) : n.visualizationType === "Forest Plot" ? s(De, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : De), Ue = (De) => {
    const { numTicks: Ke } = m[De];
    let V;
    return De === "yAxis" && (V = _ && !Ke ? t.length : _ && Ke ? Ke : !_ && !Ke ? void 0 : !_ && Ke && Ke, V === void 0 && !n.dataFormat.roundTo && (Number(Oe) <= 3 ? V = 2 : V = 4), Number(V) > Number(Oe) && (V = Number(Qe) < 0 ? Math.round(Oe) * 2 : Math.round(Oe))), De === "xAxis" && (V = _ && !Ke ? void 0 : _ && Ke ? Ke : !_ && !Ke ? void 0 : !_ && Ke && Ke, _ && V === void 0 && !n.dataFormat.roundTo && (Oe <= 3 ? V = 2 : V = 4), n.visualizationType === "Forest Plot" && (V = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), V;
  }, { tooltipData: Ge, showTooltip: ut, hideTooltip: ft, tooltipOpen: At, tooltipLeft: Yt, tooltipTop: qt } = Dg(), {
    handleTooltipMouseOver: Lt,
    handleTooltipClick: Nt,
    handleTooltipMouseOff: Gt,
    tooltipStyles: an,
    TooltipListItem: fn,
    getXValueFromCoordinateDate: En,
    getXValueFromCoordinate: Re
  } = Fg({
    xScale: Me,
    yScale: He,
    showTooltip: ut,
    hideTooltip: ft
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && re((Ke) => !0);
  }), se.useEffect(() => {
    (I == null ? void 0 : I.isIntersecting) === !0 && n.animate && setTimeout(() => {
      re((De) => !0);
    }, 500);
  }, [I == null ? void 0 : I.isIntersecting, n.animate]);
  const jt = () => {
    const { visualizationType: De } = n;
    return De === "Combo" && m.forecastingSeriesKeys > 0 || De === "Area Chart" || De === "Line" || De === "Bar";
  }, Ft = Number(E === "horizontal" ? n.xAxis.size : n.yAxis.size), yn = () => n.visualizationType === "Forest Plot" ? n.data.length : Ue("yAxis"), Pt = (De) => {
    const Ke = De.currentTarget.getBoundingClientRect(), V = De.clientX - Ke.left, Ee = De.clientY - Ke.top;
    ee({
      x: V,
      y: Ee
    });
  };
  return isNaN(O) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Br, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${O}px`, height: `${B}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: Pt,
      width: "100%",
      height: "100%",
      className: `linear ${n.animate ? "animated" : ""} ${ie && n.animate ? "animate" : ""} ${R && "debug"}`,
      role: "img",
      "aria-label": c(n),
      ref: te,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(gr, { width: O, height: B, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ i.createElement(BE, { scale: He, tickLength: n.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - n.yAxis.axisPadding, label: ((bn = m.yAxis.yAxis) == null ? void 0 : bn.label) || m.yAxis.label, stroke: "#333", tickFormat: (De, Ke) => Fe(De, Ke), numTicks: yn() }, (De) => {
      const Ke = n.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, V = U / De.ticks.length / 2 - U / De.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(nt, { className: "left-axis" }, De.ticks.map((Ee, Xe) => {
        const $e = De.ticks[0].to.y, yt = 15, ot = String(Ee.value).startsWith("1") || Ee.value === 0.1 ? "block" : "none", xt = ot === "block" ? 7 : 0, Mt = { x: Ee.to.x - xt, y: Ee.to.y };
        return /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Ee.value}-${Xe}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { key: `${Ee.value}--hide-hideTicks`, from: Ee.from, to: n.useLogScale ? Mt : Ee.to, stroke: n.yAxis.tickColor, display: E === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ i.createElement(Jt, { key: `${Ee.value}--hide-hideGridLines`, display: (n.useLogScale && ot).toString(), from: { x: Ee.from.x + H, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", E === "horizontal" && k !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Ct,
          {
            transform: `translate(${Ee.to.x - 5}, ${n.isLollipopChart ? Ee.to.y - $e : Ee.to.y - $e + (Number(n.barHeight * n.series.length) - yt) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          Ee.formattedValue
        ), E === "horizontal" && k === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - $e + (Number(n.barHeight) - yt) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Ee.formattedValue), E === "horizontal" && v === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { transform: `translate(${Ee.to.x - 5}, ${Ee.to.y - $e + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), E === "horizontal" && v === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { transform: `translate(${Ee.to.x - 5}, ${n.isLollipopChart ? Ee.to.y - $e + 2 : Ee.to.y - $e + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ee.formattedValue), E === "vertical" && v !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Ct,
          {
            display: n.useLogScale ? ot : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? Ee.from.x + 2 : Ee.to.x,
            y: Ee.to.y + (n.runtime.horizontal ? V : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          Ee.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: De.axisFromPoint, to: m.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? B : Number(N) } : De.axisToPoint, stroke: "#000" }), He.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Jt, { from: { x: De.axisFromPoint.x, y: He(0) }, to: { x: H, y: He(0) }, stroke: "#333" }), v === "Bar" && E === "horizontal" && Me.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Jt, { from: { x: Me(0), y: 0 }, to: { x: Me(0), y: U }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(Ct, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${Ke}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, De.label));
    }),
    Be && /* @__PURE__ */ i.createElement(VE, { scale: le, left: Number(O - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (De) => s(De, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (De) => {
      const Ke = n.orientation === "horizontal" ? (De.axisToPoint.y - De.axisFromPoint.y) / 2 : (De.axisFromPoint.y - De.axisToPoint.y) / 2, V = U / De.ticks.length / 2 - U / De.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(nt, { className: "right-axis" }, De.ticks.map((Ee, Xe) => /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Ee.value}-${Xe}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(Jt, { from: Ee.from, to: Ee.to, display: m.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(Jt, { from: { x: Ee.from.x + H, y: Ee.from.y }, to: Ee.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(Ct, { x: Ee.to.x, y: Ee.to.y + (m.horizontal ? V : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, Ee.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(Jt, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(Ct, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${Ke}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, De.label));
    }),
    W && n.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      YE,
      {
        stroke: "#333",
        left: Number(m.yAxis.size),
        scale: Me,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    v !== "Paired Bar" && v !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Bu,
      {
        top: m.horizontal && n.visualizationType !== "Forest Plot" ? Number(N) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? U + Number(n.xAxis.axisPadding) : U,
        left: n.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: m.xAxis.label,
        tickFormat: dt,
        scale: Me,
        stroke: "#333",
        numTicks: Ue("xAxis"),
        tickStroke: "#333"
      },
      (De) => {
        const Ke = n.visualizationType !== "Forest Plot" ? (De.axisToPoint.x - De.axisFromPoint.x) / 2 : r[0] / 2, V = (pt) => /\s/.test(pt), Ee = De.ticks.some((pt) => V(pt.value)), Xe = { small: 16, medium: 18, large: 20 }, $e = 8, yt = Math.max(...De.ticks.map((pt) => y(pt.formattedValue, `normal ${Xe[n.fontSize]}px sans-serif`))), ot = Ee ? 180 : 100, xt = De.ticks.map((pt) => y(pt.formattedValue, `normal ${Xe[n.fontSize]}px sans-serif`)), Mt = xt.reduce((pt, Ot) => pt + Ot, ot), Je = (H - Mt) / (De.ticks.length - 1);
        let $t = [0];
        for (let pt = 1; pt < xt.length; pt++)
          $t[pt] = $t[pt - 1] + xt[pt - 1] + Je;
        let It = !1;
        xt.forEach((pt, Ot) => {
          if ($t[Ot] + xt[Ot] > $t[Ot + 1]) {
            It = !0;
            return;
          }
        });
        const en = It && n.isResponsiveTicks ? yt + $e + 20 : 0, tn = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
        return n.dynamicMarginTop = en, n.xAxis.tickWidthMax = yt, /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis", width: r[0] }, De.ticks.map((pt, Ot, Wt) => {
          const Vt = String(pt.value).startsWith("1") || pt.value === 0.1 ? "block" : "none", hn = Vt === "block" ? 16 : $e, vn = { x: pt.to.x, y: hn };
          let on = y(pt.formattedValue, `normal ${Xe[n.fontSize]}px sans-serif`), pn = 100 / Wt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const Zt = n.isResponsiveTicks && It ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${pt.value}-${Ot}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: pt.from, to: E === "horizontal" && n.useLogScale ? vn : pt.to, stroke: n.xAxis.tickColor, strokeWidth: Vt === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            Ct,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Vt : "block",
              x: pt.to.x,
              y: pt.to.y,
              angle: Zt,
              verticalAnchor: Zt < -50 ? "middle" : "start",
              textAnchor: Zt ? "end" : "middle",
              width: It && !n.isResponsiveTicks && !Number(n[Ne].tickRotation) ? pn : on,
              fill: n.xAxis.tickLabelColor
            },
            pt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          Ct,
          {
            x: Ke,
            y: n.visualizationType === "Forest Plot" ? n.xAxis.tickWidthMax + 40 : n.orientation === "horizontal" ? en || n.xAxis.labelOffset : n.isResponsiveTicks && en && !_ ? en : Number(tn) && !n.isResponsiveTicks && !_ ? Number(tn + yt / 1.3) : Number(n.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: n.xAxis.labelColor
          },
          De.label
        ));
      }
    ),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Bu, { top: U, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: Sn(m.xAxis) ? l : s, scale: et, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (De) => /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis" }, De.ticks.map((Ke, V) => {
      const Ee = Ke.index !== 0 ? n.yAxis.tickRotation : 0, Xe = Ke.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Ke.value}-${V}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: Ke.from, to: Ke.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { x: Ke.to.x, y: Ke.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: Xe }, s(Ke.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Bu,
      {
        top: U,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: Sn(m.xAxis) ? l : m.xAxis.dataKey !== "Year" ? s : (De) => De,
        scale: it,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (De) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis" }, De.ticks.map((Ke, V) => {
        const Ee = Ke.index !== 0 ? n.yAxis.tickRotation : 0, Xe = Ke.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Ke.value}-${V}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: Ke.from, to: Ke.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Ct, { x: Ke.to.x, y: Ke.to.y, angle: -Ee, verticalAnchor: "start", textAnchor: Xe }, s(Ke.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: De.axisFromPoint, to: De.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(Ct, { x: H / 2, y: n.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)))
    )),
    v === "Deviation Bar" && ((Rn = n.series) == null ? void 0 : Rn.length) === 1 && /* @__PURE__ */ i.createElement(sk, { animatedChart: ie, xScale: Me, yScale: He, width: H, height: U }),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(pk, { originalWidth: O, width: H, height: U }),
    v === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      lk,
      {
        xScale: Me,
        yScale: He,
        getXAxisData: ge,
        getYAxisData: ve,
        xMax: H,
        yMax: U,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Gt,
        handleTooltipClick: Nt,
        tooltipData: Ge,
        showTooltip: ut
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ i.createElement(ok, { xScale: Me, yScale: He }),
    (v === "Area Chart" && n.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ i.createElement(QE, { xScale: Me, yScale: He, yMax: U, xMax: H, chartRef: te, width: H, height: U, handleTooltipMouseOver: Lt, handleTooltipMouseOff: Gt, tooltipData: Ge, showTooltip: ut }),
    (v === "Area Chart" && n.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ i.createElement(ek, { xScale: Me, yScale: He, yMax: U, xMax: H, chartRef: te, width: H, height: U, handleTooltipMouseOver: Lt, handleTooltipMouseOff: Gt, tooltipData: Ge, showTooltip: ut }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ i.createElement(
      ik,
      {
        xScale: Me,
        yScale: He,
        seriesScale: qe,
        xMax: H,
        yMax: U,
        getXAxisData: ge,
        getYAxisData: ve,
        animatedChart: ie,
        visible: ie,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Gt,
        handleTooltipClick: Nt,
        tooltipData: Ge,
        showTooltip: ut,
        chartRef: te
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ i.createElement(
      rm,
      {
        xScale: Me,
        yScale: He,
        getXAxisData: ge,
        getYAxisData: ve,
        xMax: H,
        yMax: U,
        seriesStyle: n.series,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Gt,
        handleTooltipClick: Nt,
        tooltipData: Ge,
        showTooltip: ut,
        chartRef: te
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ i.createElement(
      ck,
      {
        showTooltip: ut,
        tooltipData: Ge,
        xScale: Me,
        yScale: He,
        width: H,
        le: !0,
        height: U,
        xScaleNoPadding: st,
        chartRef: te,
        getXValueFromCoordinate: Re,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Gt,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((De) => /* @__PURE__ */ i.createElement(Jt, { strokeDasharray: g(De.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: He(De.value) }, to: { x: H, y: He(De.value) }, display: m.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ i.createElement(
      hk,
      {
        xScale: Me,
        yScale: He,
        seriesScale: qe,
        width: O,
        height: B,
        getXAxisData: ge,
        getYAxisData: ve,
        animatedChart: ie,
        visible: ie,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Gt,
        handleTooltipClick: Nt,
        tooltipData: Ge,
        showTooltip: ut,
        chartRef: te,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !_ && /* @__PURE__ */ i.createElement(Vk, { xScaleBrush: at, yScale: He, xMax: H, yMax: U }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rm, { xScale: Me, yScale: He, getXAxisData: ge, getYAxisData: ve, xMax: H, yMax: U, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((De, Ke) => {
      let V = He(De.value);
      if (!De.value)
        return;
      const Ee = E === "horizontal" && v === "Bar" ? n.barHeight / 4 : 0;
      if (V)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Jt,
            {
              key: `yAxis-${De.value}--${Ke}`,
              strokeDasharray: g(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + Ft, y: V - Ee },
              to: { x: O - n.yAxis.rightAxisSize, y: V - Ee }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((De, Ke) => {
      let V = M;
      E === "horizontal" && (V = T);
      let Ee = Sn(V) ? Me(a(De.value, !1)) : Me(De.value);
      if (Ee)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Jt,
            {
              key: `xAxis-${De.value}--${Ke}`,
              strokeDasharray: g(De.lineStyle),
              stroke: De.color ? De.color : "rgba(0,0,0,1)",
              fill: De.color ? De.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(Ee) + Number(Ft), y: 0 },
              to: { x: Number(Ee) + Number(Ft), y: U }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(dh, { xScale: Me, handleTooltipClick: Nt, handleTooltipMouseOff: Gt, handleTooltipMouseOver: Lt, showTooltip: ut, hideTooltip: ft, tooltipData: Ge, yMax: U, width: O }),
    jt && ut && Ge && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Jt, { from: { x: Ge.dataXPosition - 10, y: 0 }, to: { x: Ge.dataXPosition - 10, y: U }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    jt && ut && Ge && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 0, y: Ge.dataYPosition }, to: { x: H, y: Ge.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ i.createElement(Ct, { x: Number(n.yAxis.size) + Number(H / 2), y: B / 2 - n.xAxis.size / 2, textAnchor: "middle" }, n.chartMessage.noData),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 0, y: ue.y }, to: { x: H, y: ue.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Jt, { from: { x: ue.x, y: 0 }, to: { x: ue.x, y: U }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Ge && Object.entries(Ge.data).length > 0 && At && ut && Ge.dataYPosition && Ge.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Ng, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Yt, top: qt }, /* @__PURE__ */ i.createElement("ul", null, typeof Ge == "object" && Object.entries(Ge.data).map((De, Ke) => /* @__PURE__ */ i.createElement(fn, { item: De, key: Ke }))))), fe() && /* @__PURE__ */ i.createElement(ay, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: Y })));
};
var Uk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Ff() {
  return Ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ff.apply(this, arguments);
}
function Kk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function cy(e) {
  var t = e.id, r = e.markerWidth, n = r === void 0 ? 3 : r, a = e.markerHeight, l = a === void 0 ? 3 : a, f = e.markerUnits, s = f === void 0 ? "userSpaceOnUse" : f, c = e.children, d = Kk(e, Uk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Ff({
    id: t,
    markerWidth: n,
    markerHeight: l,
    markerUnits: s
  }, d), c));
}
cy.propTypes = {
  id: he.string.isRequired,
  size: he.number,
  markerWidth: he.oneOfType([he.string, he.number]),
  markerHeight: he.oneOfType([he.string, he.number]),
  markerUnits: he.string,
  refX: he.oneOfType([he.string, he.number]),
  refY: he.oneOfType([he.string, he.number]),
  strokeWidth: he.number,
  children: he.node.isRequired
};
var Yk = ["id", "size", "strokeWidth"];
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $f.apply(this, arguments);
}
function Xk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function qk(e) {
  var t = e.id, r = e.size, n = r === void 0 ? 9 : r, a = e.strokeWidth, l = a === void 0 ? 1 : a, f = Xk(e, Yk), s = n + l * 2, c = n, d = s / 2, g = "0 0, " + n + " " + n / 2 + ", 0 " + n;
  return /* @__PURE__ */ i.createElement(cy, $f({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: d,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, f), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: g
  })));
}
const Gk = (e) => {
  var Q;
  const { width: t, height: r } = e, { transformedData: n, config: a, parseDate: l, formatDate: f, seriesHighlight: s, formatNumber: c, colorScale: d, handleChartAriaLabels: g } = se.useContext(wt);
  let y = t;
  const { minValue: v, maxValue: k } = Dc(a, n), E = { top: 5, right: 10, bottom: 10, left: 10 }, M = r, T = y - a.runtime.yAxis.size, m = M - E.top - 20, R = (K) => a.runtime.xAxis.type === "date" ? l(K[a.runtime.originalXAxis.dataKey]).getTime() : K[a.runtime.originalXAxis.dataKey], O = (K, oe) => K[oe];
  let N, _;
  const { max: D, min: B } = a.runtime.yAxis, H = Number(D) >= Number(k), U = Number(B) <= Number(v);
  if (n) {
    let K = B && U ? B : v, oe = D && H ? D : Number.MIN_VALUE;
    if (oe === Number.MIN_VALUE && (oe = k), a.runtime.yAxis.paddingPercent) {
      let W = (oe - K) * a.runtime.yAxis.paddingPercent;
      K -= W, oe += W;
    }
    let fe = n.map((W) => R(W));
    a.runtime.horizontal ? (N = Wn({
      domain: [K, oe],
      range: [0, T]
    }), _ = a.runtime.xAxis.type === "date" ? Wn({ domain: [Math.min(...fe), Math.max(...fe)] }) : qo({ domain: fe, padding: 0.5 }), qo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), _.rangeRound([0, m])) : (K = K < 0 ? K * 1.11 : K, _ = Wn({
      domain: [K, oe],
      range: [m - E.bottom, E.top]
    }), N = qo({
      domain: fe,
      range: [E.left, y - E.right]
    }), qo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const X = [N.domain()[0], N.domain()[N.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(Br, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((Q = a.runtime.lineSeriesKeys) == null ? void 0 : Q.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((K, oe) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    nt,
    {
      style: { width: y },
      className: "sparkline-group",
      key: `series-${K}`,
      opacity: a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(K) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(K) !== -1 ? "block" : "none"
    },
    n.map((fe, W) => {
      let ie = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${c(O(fe, K))}` : c(O(fe, K)), re = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${fe[a.runtime.xAxis.dataKey]}` : fe[a.runtime.xAxis.dataKey];
      return `${ie}${re}`, a.seriesLabel && `${a.seriesLabel}${K}`, /* @__PURE__ */ i.createElement(nt, { key: `series-${K}-point-${W}` }, /* @__PURE__ */ i.createElement(Ct, { display: a.labels ? "block" : "none", x: N(R(fe)), y: _(O(fe, K)), fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000", textAnchor: "middle" }, c(fe[K])));
    }),
    /* @__PURE__ */ i.createElement(
      pa,
      {
        curve: kc,
        data: n,
        x: (fe) => N(R(fe)),
        y: (fe) => _(O(fe, K)),
        stroke: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${oe})`
      }
    ),
    /* @__PURE__ */ i.createElement(
      qk,
      {
        id: `arrow--${oe}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${oe})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    Bu,
    {
      top: m + E.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: N,
      tickValues: X,
      tickFormat: (fe) => a.xAxis.type === "date" ? f(fe) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, Zk = () => {
  const {
    config: e,
    colorScale: t,
    seriesHighlight: r,
    highlight: n,
    tableData: a,
    highlightReset: l,
    transformedData: f,
    currentViewport: s
  } = se.useContext(wt);
  if (!e.legend)
    return null;
  const c = jg(e, a, f, t);
  return !["Box Plot", "Pie"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(Vg, { config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: l, currentViewport: s, formatLabels: c });
}, Gd = {
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
    showDownloadButton: !1
  },
  padding: {
    left: 5,
    right: 5
  },
  suppressedData: [],
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
    anchors: []
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
    dateDisplayFormat: ""
  },
  orientation: "vertical",
  color: "pinkpurple",
  columns: {
    // start with a blank list
  },
  legend: {
    hide: !1,
    behavior: "isolate",
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
    seriesHighlight: []
  },
  brush: {
    height: 25,
    data: [],
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
}, Hu = (e) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ se.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Qk = ({ name: e }) => {
  var s, c, d, g, y;
  const { config: t, rawData: r, updateConfig: n } = se.useContext(wt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (v) => {
    v.orientation === "horizontal" && (v.labels = !1), v.table.show === void 0 && (v.table.show = !isDashboard), v.visualizationType === "Combo" && (v.orientation = "vertical");
  }, l = (v = !0) => {
    let k = {};
    return r.forEach((E) => {
      Object.keys(E).forEach((M) => k[M] = !0);
    }), v && Object.keys(k).forEach((E) => {
      (t.series && t.series.filter((M) => M.dataKey === E).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(E)) && delete k[E];
    }), Object.keys(k);
  }, f = (v, k, E, M) => {
    if (v === "boxplot" && k === "legend") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [k]: {
            ...t.boxplot[k],
            [E]: M
          }
        }
      });
      return;
    }
    if (v === "boxplot" && k === "labels") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [k]: {
            ...t.boxplot[k],
            [E]: M
          }
        }
      });
      return;
    }
    if (v === "forestPlot" && k) {
      let O = {
        ...t,
        [v]: {
          ...t[v],
          [k]: {
            ...t.forestPlot[k],
            [E]: M
          }
        }
      };
      n(O);
      return;
    }
    if (v === "columns" && k !== "" && E !== "") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [k]: {
            ...t[v][k],
            [E]: M
          }
        }
      });
      return;
    }
    if (v === null && k === null) {
      let O = { ...t, [E]: M };
      a(O), n(O);
      return;
    }
    const T = Array.isArray(t[v]);
    let m = T ? [...t[v], M] : { ...t[v], [E]: M };
    k !== null && (T ? (m = [...t[v]], m[k] = { ...m[k], [E]: M }) : typeof M == "string" ? m[k] = M : m = { ...t[v], [k]: { ...t[v][k], [E]: M } });
    let R = { ...t, [v]: m };
    a(R), n(R);
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: l(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: v.target.value
          }
        }), v.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: v.target.value
          }
        }), v.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: v.target.value
          }
        }), v.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: v.target.value
          }
        }), v.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: v.target.value
          }
        }), v.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: v.target.value
            }
          }
        }), v.target.value = "";
      }
    }
  ))), /* @__PURE__ */ i.createElement(gt, { value: ((d = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : d.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffset || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(Ye, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: v.target.value
            }
          }
        }), v.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(v.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 7,
      max: 10,
      value: t.forestPlot.radius.max,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(v.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, il = i.createContext(), Jk = (e) => {
  const { updateConfig: t, config: r, rawData: n } = se.useContext(wt), { getColumns: a, selectComponent: l } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, d, g) => {
    let y = [...r.series];
    if (y[c][g] = d, g === "type" && d === "Bar" && (y[c].axis = "Left"), y[c].type === "Forecasting") {
      let v = Array.from(new Set(n.map((E) => E[y[c].dataKey]))), k = [];
      v.forEach((E) => {
        k.push({ key: E });
      }), y[c].stages = k, y[c].stageColumn = y[c].dataKey;
    }
    t({ ...r, series: y });
  };
  return /* @__PURE__ */ i.createElement(il.Provider, { value: { updateSeries: s, supportedRightAxisTypes: f, getColumns: a, selectComponent: l } }, e.children);
}, ew = (e) => {
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((g) => g.includes(n.type)) && (c = !0), c;
  })())
    return;
  const f = (c, d) => {
    let g = [...t.series];
    g[c].lineType = d, r({ ...t, series: g });
  };
  let s = [];
  return Object.keys(vc).map((c) => s.push(vc[c])), /* @__PURE__ */ i.createElement(
    Va,
    {
      initial: "Select an option",
      value: n.lineType ? n.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        f(a, c.target.value);
      },
      options: s
    }
  );
}, tw = (e) => {
  const { config: t } = se.useContext(wt), { updateSeries: r } = se.useContext(il), { index: n, series: a } = e, l = () => {
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
    return /* @__PURE__ */ i.createElement(
      Va,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (f) => {
          r(n, f.target.value, "type");
        },
        options: l()
      }
    );
}, nw = (e) => {
  const { config: t, updateConfig: r, rawData: n } = se.useContext(wt), { updateSeries: a, getColumns: l } = se.useContext(il), { index: f, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    Va,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let d = [], g = new Set(n == null ? void 0 : n.map((v) => v[c.target.value]));
        g = Array.from(g), g = g.filter((v) => v !== void 0), g.forEach((v) => d.push({ key: v }));
        const y = [...t.series];
        y[f] = { ...y[f], stages: d, stageColumn: c.target.value }, r({
          ...t,
          series: y
        });
      },
      options: l(!1)
    }
  );
}, rw = (e) => {
  const { config: t, rawData: r } = se.useContext(wt), { updateSeries: n } = se.useContext(il), { index: a, series: l } = e;
  if (l.type !== "Forecasting" || !r || !l.stageColumn)
    return;
  let f = new Set(r.map((s) => s[l.stageColumn]));
  return f = Array.from(f), f = f.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    Va,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        n(a, s.target.value, "stageItem");
      },
      options: f
    }
  );
}, aw = (e) => {
  const { config: t } = se.useContext(wt), { updateSeries: r, supportedRightAxisTypes: n } = se.useContext(il), { index: a, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && n.includes(l.type))
    return /* @__PURE__ */ i.createElement(
      Va,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (f) => {
          r(a, f.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, iw = (e) => {
  var l;
  const { config: t, updateConfig: r } = se.useContext(wt), { index: n, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (l = a == null ? void 0 : a.stages) == null ? void 0 : l.map((f, s) => {
      var c, d, g, y;
      return /* @__PURE__ */ i.createElement(
        Va,
        {
          key: `${f}--${s}`,
          initial: "Select an option",
          value: (d = (c = t.series) == null ? void 0 : c[n].stages) != null && d[s].color ? (y = (g = t.series) == null ? void 0 : g[n].stages) == null ? void 0 : y[s].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (v) => {
            const k = [...t.series], E = k[n].stages;
            E[s].color = v.target.value, k[n] = { ...k[n], stages: E }, r({
              ...t,
              series: k
            });
          },
          options: Object.keys(Vu)
        }
      );
    });
}, ow = (e) => {
  var f;
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e, { getColumns: l } = se.useContext(il);
  if (n.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, (f = n == null ? void 0 : n.confidenceIntervals) == null ? void 0 : f.map((s, c) => {
      const d = s.showInTooltip ? s.showInTooltip : !1, g = (y, v, k) => {
        y.preventDefault();
        let E = [...t.series];
        E[v].confidenceIntervals[k].showInTooltip = !d, r({
          ...t,
          series: E
        });
      };
      return /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (y) => {
            y.preventDefault();
            const v = [...t.series[a].confidenceIntervals];
            v.splice(c, 1);
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: [...v] }, r({
              ...t,
              series: k
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (y) => g(y, a, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, d && /* @__PURE__ */ i.createElement(km, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: d || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Va,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].low = y.target.value;
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: v }, r({
              ...t,
              series: k
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ i.createElement(
        Va,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].high ? t.series[a].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].high = y.target.value;
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: v }, r({
              ...t,
              series: k
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (s) => {
          s.preventDefault();
          let c = null;
          t.series[a].confidenceIntervals ? c = [...t.series[a].confidenceIntervals] : c = [];
          const d = [...t.series];
          d[a] = { ...d[a], confidenceIntervals: [...c, { high: "", low: "" }] }, r({
            ...t,
            series: d
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, lw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(wt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation", "Paired", "Scatter", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  let f = (s, c) => {
    let d = [...n.series], g = { ...n.runtime.seriesLabels };
    d[s].name = c, g[d[s].dataKey] = d[s].name ? d[s].name : d[s].dataKey;
    let y = {
      ...n,
      series: d,
      runtime: {
        ...n.runtime,
        seriesLabels: g
      }
    };
    a(y);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${r}`,
      value: t.name ? t.name : "",
      onChange: (s) => {
        f(r, s.target.value);
      }
    }
  ));
}, sw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(wt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(n.visualizationType))
    return;
  const l = (f) => {
    let s = [...n.series];
    s[f].tooltip && s[f].tooltip, s[f].tooltip = !s[f].tooltip, a({
      ...n,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => l(r) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(km, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, uw = (e) => {
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e, l = (s) => {
    let c = [...t.series], d = -1;
    for (let g = 0; g < c.length; g++)
      if (c[g].dataKey === s) {
        d = g;
        break;
      }
    if (d !== -1) {
      c.splice(d, 1);
      let g = { ...t, series: c };
      c.length === 0 && delete g.series, r(g);
    }
    t.visualizationType === "Paired Bar" && r({
      ...t,
      series: []
    });
  }, f = (s, c, d) => {
    s.preventDefault(), l(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (s) => f(s, n) }, "Remove");
}, dy = (e) => {
  const { config: t } = se.useContext(wt), { series: r, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: l, index: f } = e;
  return /* @__PURE__ */ i.createElement(ym, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: f }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: n(c.isDragging, s.draggableProps.style, a), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(_n, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(Et, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ i.createElement(ha.Button.Remove, { series: r, index: f }))), l.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(ha.Input.Name, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Dropdown.SeriesType, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Dropdown.AxisPosition, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Dropdown.LineType, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Dropdown.ForecastingColor, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Dropdown.ConfidenceInterval, { series: r, index: f }), /* @__PURE__ */ i.createElement(ha.Checkbox.DisplayInTooltip, { series: r, index: f }))))));
}, cw = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a } = e;
  return t.map((l, f) => /* @__PURE__ */ i.createElement(dy, { getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a, series: l, index: f, key: `series-list-${f}` }));
}, ha = {
  Wrapper: Jk,
  Dropdown: {
    SeriesType: tw,
    AxisPosition: aw,
    ConfidenceInterval: ow,
    LineType: ew,
    ForecastingStage: nw,
    ForecastingColumn: rw,
    ForecastingColor: iw
  },
  Input: {
    Name: lw
  },
  Checkbox: {
    DisplayInTooltip: sw
  },
  Button: {
    Remove: uw
  },
  Item: dy,
  List: cw
}, dw = se.memo(({ config: e, updateConfig: t }) => {
  let r = (c, d, g) => {
    let y = [];
    e.regions && (y = [...e.regions]), y[g][c] = d, t({ ...e, regions: y });
  }, n = (c, d, g, y, v) => r(g, y, v), a = (c) => {
    let d = [];
    e.regions && (d = [...e.regions]), d.splice(c, 1), t({ ...e, regions: d });
  }, l = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const f = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: d, from: g, to: y, background: v, range: k = "Custom" }, E) => {
    var M;
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${E}` }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (T) => {
          T.preventDefault(), a(E);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(Ye, { value: c, label: "Region Label", fieldName: "label", i: E, updateField: n }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Ye, { value: d, label: "Text Color", fieldName: "color", updateField: (T, m, R, O) => r(R, O, E) }), /* @__PURE__ */ i.createElement(Ye, { value: v, label: "Background", fieldName: "background", updateField: (T, m, R, O) => r(R, O, E) })), /* @__PURE__ */ i.createElement(
      kt,
      {
        value: e.regions[E].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[E].fromType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: f
      }
    ), (e.regions[E].fromType === "Fixed" || e.regions[E].fromType === "Previous Days" || !e.regions[E].fromType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Ye,
      {
        value: g,
        label: e.regions[E].fromType === "Fixed" || !((M = e.regions[E]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, R, O) => r(R, O, E),
        tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
      }
    )), /* @__PURE__ */ i.createElement(
      kt,
      {
        value: e.regions[E].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[E].toType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: s
      }
    ), (e.regions[E].toType === "Fixed" || !e.regions[E].toType) && /* @__PURE__ */ i.createElement(Ye, { value: y, label: "To Value", fieldName: "to", updateField: (T, m, R, O) => r(R, O, E) }));
  }), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
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
}), fw = ({ name: e }) => {
  const { visSupportsRegions: t } = Rs(), { config: r, updateConfig: n } = se.useContext(wt);
  return t() ? /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e)), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(dw, { config: r, updateConfig: n }))) : null;
}, Ch = se.createContext(null), Ah = () => {
  const e = se.useContext(Ch);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, hw = (e) => {
  const { config: t } = se.useContext(wt), { updateField: r } = Ah(), { enabledChartTypes: n, visHasNumbersOnBars: a, visHasLabelOnData: l, visSupportsChartHeight: f, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Rs(), { visualizationType: d, visualizationSubType: g, barStyle: y } = t, v = () => (d === "Bar" || d === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(On, null, " ", /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "General")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(kt, { value: d, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: n }), (d === "Bar" || d === "Combo" || d === "Area Chart") && /* @__PURE__ */ i.createElement(kt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), d === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(kt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(vc) }), d === "Bar" && /* @__PURE__ */ i.createElement(kt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), d === "Deviation Bar" && /* @__PURE__ */ i.createElement(kt, { label: "Orientation", options: ["horizontal"] }), (d === "Bar" || d === "Deviation Bar") && /* @__PURE__ */ i.createElement(kt, { value: t.isLollipopChart ? "lollipop" : y || "flat", fieldName: "barStyle", label: "bar style", updateField: r, options: v() }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(kt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(kt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), d === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(kt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ i.createElement(gt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : l() && /* @__PURE__ */ i.createElement(gt, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: r }), d === "Pie" && /* @__PURE__ */ i.createElement(kt, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(gt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), s() && /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), f() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ye, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: r })));
}, pw = (e) => {
  const { config: t } = se.useContext(wt), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: n } = Ah();
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.name)), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: n }), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: n }), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: n }), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: n }), /* @__PURE__ */ i.createElement(Ye, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: n })));
}, fy = (e, t) => {
  let r = [], n = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    r = Object.keys(Wu).filter((f) => l ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const l = [], f = [];
    for (const s in cr) {
      const c = s.startsWith("sequential"), d = s.startsWith("qualitative"), g = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && l.push(s), d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && f.push(s);
    }
    n = l, a = f;
  }
  return se.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), se.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: n, nonSequential: a };
}, mw = (e) => {
  var B;
  const { config: t, updateConfig: r, colorPalettes: n, twoColorPalette: a } = se.useContext(wt), { visual: l } = t, { setLollipopShape: f, updateField: s } = Ah(), { visHasBarBorders: c, visCanAnimate: d, visSupportsNonSequentialPallete: g, headerColors: y, visSupportsTooltipOpacity: v, visSupportsTooltipLines: k, visSupportsBarSpace: E, visSupportsBarThickness: M, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: R } = Rs(), { twoColorPalettes: O, sequential: N, nonSequential: _ } = fy(t, r), D = (H, U) => {
    if (console.log("value", U), H === "storyNodeFontColor") {
      r({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: U
        }
      });
      return;
    } else
      r({
        ...t,
        sankey: {
          ...t.sankey,
          [H]: {
            ...t.sankey[H],
            default: U
          }
        }
      });
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Visual")), /* @__PURE__ */ i.createElement(Nn, null, t.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (H) => {
        f(H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(kt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(kt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(kt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(gt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ i.createElement(kt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ i.createElement(kt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), d() && /* @__PURE__ */ i.createElement(gt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((B = t.series) == null ? void 0 : B.some((H) => H.type === "Line" || H.type === "dashed-lg" || H.type === "dashed-sm" || H.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(kt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(kt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, y.map((H) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: H,
      key: H,
      onClick: (U) => {
        U.preventDefault(), r({ ...t, theme: H });
      },
      className: t.theme === H ? "selected " + H : H
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), R() && /* @__PURE__ */ i.createElement(Nh, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((H) => {
    const U = {
      backgroundColor: n[H][2]
    }, X = {
      backgroundColor: n[H][3]
    }, Q = {
      backgroundColor: n[H][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (K) => {
          K.preventDefault(), r({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: U }),
      /* @__PURE__ */ i.createElement("span", { style: X }),
      /* @__PURE__ */ i.createElement("span", { style: Q })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((H) => {
    const U = {
      backgroundColor: n[H][2]
    }, X = {
      backgroundColor: n[H][4]
    }, Q = {
      backgroundColor: n[H][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (K) => {
          K.preventDefault(), r({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: U }),
      /* @__PURE__ */ i.createElement("span", { style: X }),
      /* @__PURE__ */ i.createElement("span", { style: Q })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (H) => D("nodeColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (H) => D("storyNodeFontColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (H) => D("linkColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Nh, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, O.map((H) => {
    const U = {
      backgroundColor: a[H][0]
    }, X = {
      backgroundColor: a[H][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (Q) => {
          Q.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: H } });
        },
        className: t.twoColor.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: U }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: X })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Ye, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ye, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), E() && /* @__PURE__ */ i.createElement(Ye, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(gt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(gt, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(gt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(gt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), k() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(gt, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ i.createElement(gt, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), v() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (H) => r({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: H.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(gt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (H) => r({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: H.target.value
        }
      })
    }
  ))));
}, gw = () => {
  var s, c, d;
  const { config: e, updateConfig: t } = se.useContext(wt), r = (s = e.data) == null ? void 0 : s[0], { updateField: n } = se.useContext(Ch);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (g, y, v) => {
    let k = [];
    r != null && r.storyNodeText && (k = [...r == null ? void 0 : r.storyNodeText]), k[v][g] = y, console.log("story nodes", k[v]), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: k
        }
      }
    });
  }, l = () => {
    const g = r;
    g.storyNodeText.push({
      StoryNode: "",
      segmentTextBefore: "",
      segmentTextAfter: ""
    }), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: [{ ...g }]
      }
    });
  }, f = (g) => {
    const y = r;
    y.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...y } } });
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(Nn, null, (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: g, segmentTextBefore: y, segmentTextAfter: v }, k) => /* @__PURE__ */ i.createElement("div", { key: k, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (E) => a("StoryNode", E.target.value, k) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (E) => a("segmentTextBefore", E.target.value, k) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (E) => a("segmentTextAfter", E.target.value, k) })), /* @__PURE__ */ i.createElement(zy, { onClick: (E) => f(k), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(c = r == null ? void 0 : r.storyNodeText) == null ? void 0 : c.length}`, ((d = r == null ? void 0 : r.storyNodeText) == null ? void 0 : d.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(gt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: n })));
}, za = {
  ForestPlot: Qk,
  Series: ha,
  Regions: fw,
  General: hw,
  BoxPlot: pw,
  Visual: mw,
  Sankey: gw
};
se.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const c = /* @__PURE__ */ new Set();
    return r.forEach((d) => {
      Object.keys(d).forEach((g) => {
        c.add(g);
      });
    }), [...c];
  }, a = () => ["star"];
  let l = (c) => {
    let d = [];
    e.suppressedData && (d = [...e.suppressedData]), d.splice(c, 1), t({ ...e, suppressedData: d });
  }, f = () => {
    let c = e.suppressedData ? [...e.suppressedData] : [];
    c.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: c });
  }, s = (c, d, g) => {
    let y = [];
    e.suppressedData && (y = [...e.suppressedData]), y[g][c] = d, t({ ...e, suppressedData: y });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: c, column: d, value: g, icon: y }, v) => /* @__PURE__ */ i.createElement("div", { key: `suppressed-${v}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (k) => {
        k.preventDefault(), l(v);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(kt, { value: d, initial: "Select", fieldName: "column", label: "Column", updateField: (k, E, M, T) => s(M, T, v), options: n() }), /* @__PURE__ */ i.createElement(Ye, { value: g, fieldName: "value", label: "Value", updateField: (k, E, M, T) => s(M, T, v) }), /* @__PURE__ */ i.createElement(kt, { value: y, initial: "Select", fieldName: "icon", label: "Icon", updateField: (k, E, M, T) => s(M, T, v), options: a() }), /* @__PURE__ */ i.createElement(Ye, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (k, E, M, T) => s(M, T, v) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Suppression Class"));
});
const yw = se.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((g) => {
      Object.keys(g).forEach((y) => {
        d.add(y);
      });
    }), [...d];
  }, a = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], l = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let f = (d) => {
    let g = [];
    e.preliminaryData && (g = [...e.preliminaryData]), g.splice(d, 1), t({ ...e, preliminaryData: g });
  }, s = () => {
    let d = e.preliminaryData ? [...e.preliminaryData] : [];
    d.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: d });
  }, c = (d, g, y) => {
    let v = [];
    e.preliminaryData && (v = [...e.preliminaryData]), v[y][d] = g, t({ ...e, preliminaryData: v });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: d, type: g, label: y, column: v, value: k, style: E }, M) => {
    var T;
    return /* @__PURE__ */ i.createElement("div", { key: `preliminaryData-${M}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (m) => {
          m.preventDefault(), f(M);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(kt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, R, O, N) => c(O, N, M), options: a() }), /* @__PURE__ */ i.createElement(kt, { value: d, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, R, O, N) => c(O, N, M), options: (T = e.runtime) == null ? void 0 : T.seriesKeys }), /* @__PURE__ */ i.createElement(kt, { value: v, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, R, O, N) => c(O, N, M), options: n() }), /* @__PURE__ */ i.createElement(Ye, { value: k, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, R, O, N) => c(O, N, M) }), /* @__PURE__ */ i.createElement(kt, { value: E, initial: "Select", fieldName: "style", label: "Style", updateField: (m, R, O, N) => c(O, N, M), options: l() }), /* @__PURE__ */ i.createElement(Ye, { value: y, fieldName: "label", label: "Label", placeholder: "", updateField: (m, R, O, N) => c(O, N, M) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), vw = () => {
  var fr, hr, x, A, z, q, be, me, Ae, We, rt, ht, ct, _t, Dn, wn, Tn, jn;
  const {
    config: e,
    updateConfig: t,
    tableData: r,
    transformedData: n,
    loading: a,
    colorScale: l,
    colorPalettes: f,
    twoColorPalette: s,
    unfilteredData: c,
    excludedData: d,
    isDashboard: g,
    setParentConfig: y,
    missingRequiredSections: v,
    isDebug: k,
    setFilteredData: E,
    lineOptions: M,
    rawData: T,
    highlight: m,
    highlightReset: R
  } = se.useContext(wt), { minValue: O, maxValue: N, existPositiveValue: _, isAllLine: D } = Dc(e, c);
  fy(e, t);
  const B = { data: n, config: e }, { leftMax: H, rightMax: U } = oy(B), {
    headerColors: X,
    visSupportsTooltipLines: Q,
    visSupportsNonSequentialPallete: K,
    visSupportsSequentialPallete: oe,
    visSupportsReverseColorPalette: fe,
    visHasLabelOnData: W,
    visHasNumbersOnBars: ie,
    visHasAnchors: re,
    visHasBarBorders: ue,
    visHasDataCutoff: ee,
    visHasSelectableLegendValues: Y,
    visCanAnimate: te,
    visHasLegend: I,
    visHasBrushChart: ge,
    visSupportsDateCategoryAxis: ve,
    visSupportsValueAxisMin: ke,
    visSupportsValueAxisMax: Ne,
    visSupportsDateCategoryAxisLabel: je,
    visSupportsDateCategoryAxisLine: Qe,
    visSupportsDateCategoryAxisTicks: Oe,
    visSupportsDateCategoryTickRotation: ye,
    visSupportsDateCategoryNumTicks: we,
    visSupportsDateCategoryAxisPadding: le,
    visSupportsRegions: Be,
    visSupportsFilters: Me,
    visSupportsValueAxisGridLines: He,
    visSupportsValueAxisLine: qe,
    visSupportsValueAxisTicks: et,
    visSupportsValueAxisLabels: it,
    visSupportsBarSpace: st,
    visSupportsBarThickness: at,
    visSupportsFootnotes: Ze,
    visSupportsSuperTitle: Ie,
    visSupportsDataCutoff: Fe,
    visSupportsChartHeight: dt,
    visSupportsLeftValueAxis: Ue,
    visSupportsTooltipOpacity: Ge,
    visSupportsRankByValue: ut,
    visSupportsResponsiveTicks: ft,
    visSupportsDateCategoryHeight: At,
    visHasDataSuppression: Yt
  } = Rs(), { handleFilterOrder: qt, filterOrderOptions: Lt, filterStyleOptions: Nt } = wy({ config: e, setConfig: t, filteredData: n, setFilteredData: E });
  se.useEffect(() => {
    let ne = [];
    e.series && (ne = e.series.map((J) => ({
      ...J,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: ne
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
  const { hasRightAxis: Gt } = fh({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), an = (ne, J) => ({
    ...J
  }), fn = {
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
  }, En = (ne) => {
    ne.orientation === "horizontal" && (ne.labels = !1), ne.table.show === void 0 && (ne.table.show = !g), ne.visualizationType === "Combo" && (ne.orientation = "vertical"), Sn(ne.xAxis) && !ne.xAxis.padding && (ne.xAxis.padding = 6);
  }, Re = (ne, J, ce, Pe) => {
    if (k && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", ne, J, ce, Pe), ne === "boxplot" && J === "legend") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e.boxplot[J],
            [ce]: Pe
          }
        }
      });
      return;
    }
    if (ne === "boxplot" && J === "labels") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e.boxplot[J],
            [ce]: Pe
          }
        }
      });
      return;
    }
    if (ne === "columns" && J !== "" && ce !== "") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e[ne][J],
            [ce]: Pe
          }
        }
      });
      return;
    }
    if (ne === null && J === null) {
      let Rr = { ...e, [ce]: Pe };
      En(Rr), t(Rr);
      return;
    }
    const Rt = Array.isArray(e[ne]);
    let nn = Rt ? [...e[ne], Pe] : { ...e[ne], [ce]: Pe };
    J !== null && (Rt ? (nn = [...e[ne]], nn[J] = { ...nn[J], [ce]: Pe }) : typeof Pe == "string" ? nn[J] = Pe : nn = { ...e[ne], [J]: { ...e[ne][J], [ce]: Pe } });
    let Un = { ...e, [ne]: nn };
    En(Un), t(Un);
  }, [jt, Ft] = se.useState(!0);
  if (a)
    return null;
  se.useEffect(() => {
    var ne;
    (ne = e.general) != null && ne.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const yn = (ne) => {
    t({
      ...e,
      lollipopShape: ne
    });
  }, Pt = (ne) => {
    let J = [...e.filters];
    J.splice(ne, 1), t({ ...e, filters: J });
  }, bt = (ne, J, ce) => {
    let Pe = [...e.filters];
    Pe[J][ne] = ce, t({ ...e, filters: Pe });
  }, An = () => {
    let ne = e.filters ? [...e.filters] : [];
    ne.push({ values: [] }), t({ ...e, filters: ne });
  }, Pn = (ne) => {
    let J = e.series ? [...e.series] : [], ce = Array.from(new Set(n.map((Rt) => Rt[ne]))), Pe = [];
    ce.forEach((Rt) => {
      Pe.push({ key: Rt });
    }), e.visualizationType === "Forecasting" ? J.push({ dataKey: ne, type: e.visualizationType, stages: Pe, stageColumn: ne, axis: "Left", tooltip: !0 }) : J.push({ dataKey: ne, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: J });
  }, bn = (ne) => {
    const J = e.series[0].dataKey, ce = n.sort((Rt, nn) => Rt[J] - nn[J]), Pe = ne === "asc" ? ce : ce.reverse();
    t({ ...e }, Pe);
  }, Rn = (ne) => {
    let J = [...e.exclusions.keys];
    J.push(ne);
    let ce = { ...e.exclusions, keys: J };
    t({ ...e, exclusions: ce });
  }, De = (ne) => {
    let J = -1, ce = [...e.exclusions.keys];
    for (let Pe = 0; Pe < ce.length; Pe++)
      if (ce[Pe] === ne) {
        J = Pe;
        break;
      }
    if (J !== -1) {
      ce.splice(J, 1);
      let Pe = { ...e.exclusions, keys: ce }, Rt = { ...e, exclusions: Pe };
      ce.length === 0 && delete Rt.exclusions.keys, t(Rt);
    }
  }, Ke = () => {
    let ne = {};
    return c.forEach((J) => {
      Object.keys(J).forEach((ce) => ne[ce] = !0);
    }), Object.keys(ne);
  }, V = (ne = !0) => {
    let J = {};
    if (c.forEach((ce) => {
      Object.keys(ce).forEach((Pe) => J[Pe] = !0);
    }), ne) {
      const { lower: ce, upper: Pe } = e.confidenceKeys || {};
      Object.keys(J).forEach((Rt) => {
        (e.series && e.series.filter((nn) => nn.dataKey === Rt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Rt) && (ce && Pe || ce || Pe) && Rt !== ce && Rt !== Pe) && delete J[Rt];
      });
    }
    return Object.keys(J);
  }, Ee = (ne) => {
    if (!ne)
      return [];
    const J = /* @__PURE__ */ new Set();
    for (let ce = 0; ce < ne.length; ce++)
      for (const [Pe] of Object.entries(ne[ce]))
        J.add(Pe);
    return Array.from(J);
  }, Xe = (ne, J = !1) => {
    let ce = [];
    return d.forEach((Pe) => {
      ce.push(Pe[ne]);
    }), J ? [...new Set(ce)] : ce;
  }, $e = () => {
    Ft(!jt);
  }, yt = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), ot = () => {
    const ne = (J) => {
      J.preventDefault();
      let ce = { ...e };
      delete ce.newViz, t(ce);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: v(), onClick: ne }, "I'm Done")));
  }, xt = () => {
    let ne = JSON.parse(JSON.stringify(e));
    return v() === !1 && delete ne.newViz, delete ne.runtime, ne;
  };
  se.useEffect(() => {
    if (y) {
      const ne = xt();
      y(ne);
    }
  }, [e]), se.useEffect(() => {
    const ne = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], J = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: J
      },
      yAxis: {
        ...e.yAxis,
        anchors: ne
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
  const Mt = se.useCallback(() => {
    const ne = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, ne.map((J, ce) => /* @__PURE__ */ i.createElement("li", { key: J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, J)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => De(J) }, "×"))));
  }, [e]), Je = (ne, J) => {
    let ce = e.series, [Pe] = ce.splice(ne, 1);
    ce.splice(J, 0, Pe), t({ ...e, series: ce });
  };
  e.isLollipopChart && ((fr = e == null ? void 0 : e.series) == null ? void 0 : fr.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((hr = e == null ? void 0 : e.series) == null ? void 0 : hr.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((x = e == null ? void 0 : e.series) == null ? void 0 : x.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((A = e == null ? void 0 : e.series) == null ? void 0 : A.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const $t = e.orientation === "horizontal" ? "xAxis" : "yAxis", [It, en] = se.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), tn = () => {
    const ne = e[$t].max, J = e[$t].rightMax;
    let ce = "", Pe = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < parseFloat(N) && _):
          ce = "Max value must be more than " + N;
          break;
        case (ne && parseFloat(ne) < 0 && !_):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < H):
          ce = "Max value must be more than " + H;
          break;
        case (J && parseFloat(J) < U):
          Pe = "Max value must be more than " + U;
          break;
        case (ne && parseFloat(ne) < 0 && !_):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    en((Rt) => ({ ...Rt, maxMsg: ce, rightMaxMessage: Pe }));
  }, pt = () => {
    const ne = parseFloat(e[$t].min);
    let J = Number(O), ce = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && ne < 0):
        ce = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && ne > J):
        ce = "Value should not exceed " + O;
        break;
      case (e.visualizationType === "Combo" && D && ne > J):
        ce = "Value should not exceed " + O;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !D) && J > 0 && ne > 0):
        ce = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && ne >= Math.min(J, e.xAxis.target)):
        ce = "Value must be less than " + Math.min(J, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && ne && J < 0 && ne > J):
        ce = "Value should not exceed " + O;
        break;
      default:
        ce = "";
    }
    en((Pe) => ({ ...Pe, minMsg: ce }));
  };
  se.useEffect(() => {
    pt(), tn();
  }, [O, N, e]);
  const Ot = ((z = e == null ? void 0 : e.dataKey) == null ? void 0 : z.includes("http://")) || ((q = e == null ? void 0 : e.dataKey) == null ? void 0 : q.includes("https://")), Wt = () => {
    var ne, J;
    if (k !== void 0 && k && !((ne = e == null ? void 0 : e.xAxis) != null && ne.dataKey)) {
      let ce = V(!1);
      if (ce.includes("Date"))
        return "Date";
      if (ce.includes("Race"))
        return "Race";
      if (ce.includes("Month"))
        return "Month";
    }
    return ((J = e == null ? void 0 : e.xAxis) == null ? void 0 : J.dataKey) || "";
  }, Vt = () => {
    if (k !== void 0 && k && V(!1).length > 0) {
      let ne = V(!1).filter((J) => J !== Wt());
      if (ne.length > 0)
        return ne[0];
    }
    return "";
  };
  if (k && !e.xAxis.dataKey && (e.xAxis.dataKey = Wt()), k && ((be = e == null ? void 0 : e.series) == null ? void 0 : be.length) === 0) {
    let ne = Vt();
    ne !== "" && Pn(ne), k && console.log("### COVE DEBUG: Chart: Setting default datacol=", ne);
  }
  const hn = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], vn = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((me = e.data) == null ? void 0 : me[0]) || []).map((J) => {
      const ce = e == null ? void 0 : e.series.some((Pe) => Pe.dataKey === J);
      if (J !== e.xAxis.dataKey && !ce)
        return vn.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    e.data.forEach((J) => {
      Object.keys(J).forEach((ce) => {
        ne[ce] = ne[ce] || [];
        const Pe = typeof J[ce] == "number" ? J[ce].toString() : J[ce];
        ne[ce].indexOf(Pe) === -1 && ne[ce].push(Pe);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((J) => {
      const ce = n.some((Pe) => Pe.dataKey === J);
      if (J !== e.xAxis.dataKey && !ce)
        return vn.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    n.forEach((J) => {
      Object.keys(J).forEach((ce) => {
        ne[ce] = ne[ce] || [];
        const Pe = typeof J[ce] == "number" ? J[ce].toString() : J[ce];
        ne[ce].indexOf(Pe) === -1 && ne[ce].push(Pe);
      });
    });
  }
  const on = Object.keys(e.columns).filter((ne) => [e.xAxis.dataKey].includes(ne) !== !0), pn = (ne) => {
    const J = `additionalColumn${ne}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [J]: {
          label: "New Column",
          dataTable: !1,
          tooltips: !1,
          prefix: "",
          suffix: "",
          forestPlot: !1,
          startingPoint: "0",
          forestPlotAlignRight: !1
        }
      }
    });
  }, Zt = (ne) => {
    const J = e.columns;
    delete J[ne], t({
      ...e,
      columns: J
    });
  }, vt = async (ne, J, ce) => {
    switch (J) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [ne]: {
              ...e.columns[ne],
              [J]: ce
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [ne]: {
              ...e.columns[ne],
              [J]: ce
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: un,
    highlightedSeriesValues: kn,
    handleUpdateHighlightedBar: ln,
    handleAddNewHighlightedBar: Xn,
    handleRemoveHighlightedBar: Ln,
    handleUpdateHighlightedBarColor: Ut,
    handleHighlightedBarLegendLabel: sn,
    handleUpdateHighlightedBorderWidth: Vn
  } = Cc(e, t), rr = (ne, J) => {
    let ce = e.columns;
    ce[ne].tooltips = J, t({
      ...e,
      columns: ce
    });
  }, yr = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, vr = () => {
    const ne = n.map((J) => J[e.legend.colorCode]);
    return yr ? ne : V(!1).filter((J) => J !== e.xAxis.dataKey);
  }, dr = (ne) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: ne } });
  }, ar = (ne, J, ce) => {
    var nn;
    const Pe = { ...e[ne], [J]: ce }, Rt = { ...e, [ne]: Pe };
    ce === "highlight" && ((nn = e.legend.seriesHighlight) != null && nn.length) && (Rt.legend.seriesHighlight.length = 0), t(Rt);
  }, Pr = {
    addNewExclusion: Rn,
    data: n,
    editColumn: vt,
    getColumns: V,
    getDataValueOptions: Ee,
    getDataValues: Xe,
    getItemStyle: an,
    handleSeriesChange: Je,
    handleAddNewHighlightedBar: Xn,
    setCategoryAxis: Wt,
    sortSeries: bn,
    updateField: Re,
    warningMsg: It,
    highlightedBarValues: un,
    handleHighlightedBarLegendLabel: sn,
    handleUpdateHighlightedBar: ln,
    handleRemoveHighlightedBar: Ln,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: kn,
    handleUpdateHighlightedBorderWidth: Vn,
    handleUpdateHighlightedBarColor: Ut,
    setLollipopShape: yn
  };
  return /* @__PURE__ */ i.createElement(Ch.Provider, { value: Pr }, /* @__PURE__ */ i.createElement(Br, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(ot, null), e.newViz === void 0 && e.runtime && ((Ae = e.runtime) == null ? void 0 : Ae.editorErrorMessage) && /* @__PURE__ */ i.createElement(yt, null), /* @__PURE__ */ i.createElement("button", { className: jt ? "editor-toggle" : "editor-toggle collapsed", title: jt ? "Collapse Editor" : "Expand Editor", onClick: $e }), /* @__PURE__ */ i.createElement("section", { className: `${jt ? "editor-panel cove" : "hidden editor-panel cove"}${g ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(za.General, { name: "General" }), /* @__PURE__ */ i.createElement(za.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(za.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Pn(ne.target.value), ne.target.value = "";
      },
      options: V()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(za.Series.Wrapper, { getColumns: V }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Fh, { onDragEnd: ({ source: ne, destination: J }) => Je(ne.index, J.index) }, /* @__PURE__ */ i.createElement($h, { droppableId: "filter_order" }, (ne) => /* @__PURE__ */ i.createElement("ul", { ...ne.droppableProps, className: "series-list", ref: ne.innerRef }, /* @__PURE__ */ i.createElement(za.Series.List, { series: e.series, getItemStyle: an, sortableItemStyles: fn, chartsWithOptions: hn }), ne.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(kt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Re, initial: "Select", options: V() }), /* @__PURE__ */ i.createElement(kt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Re, initial: "Select", options: V() })), ut() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(kt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (ne) => bn(ne.target.value), options: ["asc", "desc"] }), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(yw, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ i.createElement(za.BoxPlot, { name: "Measures" }), Ue() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Re,
      options: V(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Re }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(gt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Re }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Re }), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(gt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Re }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Re }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Re }), He() && /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Re }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Ye, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Re, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(gt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Re })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(gt, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: Re }), /* @__PURE__ */ i.createElement(
    gt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Ye, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Re, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, qe() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Re }), it() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Re }), et() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Re }), Ne() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.maxMsg), ke() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Re })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.maxMsg), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg)), re() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, (rt = (We = e.yAxis) == null ? void 0 : We.anchors) == null ? void 0 : rt.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe[J].value = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].color ? e.yAxis.anchors[J].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe[J].color = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Pe = [...e.yAxis.anchors];
        Pe[J].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.yAxis.anchors];
        J.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )), re() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, (ct = (ht = e.xAxis) == null ? void 0 : ht.anchors) == null ? void 0 : ct.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `xaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe[J].value = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].color ? e.xAxis.anchors[J].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe[J].color = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Pe = [...e.xAxis.anchors];
        Pe[J].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.xAxis.anchors];
        J.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )))), Gt && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Re }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(gt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Re, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.rightMaxMessage), /* @__PURE__ */ i.createElement(Ye, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Re }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg))), ve() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Scaling Type"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (ne) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: ne.target.value
        }
      })
    },
    /* @__PURE__ */ i.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ i.createElement("option", { value: "continuous" }, "Continuous")
  )), le() && /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.xAxis.dataKey || Wt() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Re,
      options: V(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Re,
      options: V(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Re }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    gt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), Sn(e.xAxis) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Ye,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Re
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Re
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Re
    }
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Re
    }
  )), /* @__PURE__ */ i.createElement(
    gt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Re
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Mt, null)), /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Rn(ne.target.value), ne.target.value = "";
      },
      options: Xe(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ye, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Re, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Ye, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Re, value: e.exclusions.dateEnd || "" }))), we() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Re }), At() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Re }), le() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: "Padding (Percent)", className: "number-narrow", updateField: Re }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(gt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Re, min: 0 })), ft() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(gt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Re }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ye() && /* @__PURE__ */ i.createElement(Ye, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Re }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Qe() && /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Re }), je() && /* @__PURE__ */ i.createElement(gt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Re })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Qe() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Re }), je() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Re }), Oe() && /* @__PURE__ */ i.createElement(gt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Re })), ((_t = e.series) == null ? void 0 : _t.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && un.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${J}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (ce) => Ln(ce, J) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", J + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[J].value, onChange: (ce) => ln(ce, J) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), kn && [...new Set(kn)].sort().map((ce) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${J}-${ce}` }, ce)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].color ? e.highlightedBarValues[J].color : "", onChange: (ce) => Ut(ce, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[J].borderWidth ? e.highlightedBarValues[J].borderWidth : "", onChange: (ce) => Vn(ce, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].legendLabel ? e.highlightedBarValues[J].legendLabel : "", onChange: (ce) => sn(ce, J) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (ne) => Xn(ne) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    gt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Mt, null)), /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Rn(ne.target.value), ne.target.value = "";
      },
      options: Xe(e.xAxis.dataKey, !0)
    }
  ))), re() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, (wn = (Dn = e.xAxis) == null ? void 0 : Dn.anchors) == null ? void 0 : wn.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe[J].value = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].color ? e.xAxis.anchors[J].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.xAxis.anchors];
        Pe[J].color = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Pe = [...e.xAxis.anchors];
        Pe[J].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Pe
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.xAxis.anchors];
        J.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )), re() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement($i, { allowZeroExpanded: !0 }, (jn = (Tn = e.yAxis) == null ? void 0 : Tn.anchors) == null ? void 0 : jn.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe[J].value = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].color ? e.yAxis.anchors[J].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Pe = [...e.yAxis.anchors];
        Pe[J].color = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Pe = [...e.yAxis.anchors];
        Pe[J].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Pe
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.yAxis.anchors];
        J.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ i.createElement(za.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Columns")), /* @__PURE__ */ i.createElement(Nn, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), on.map((ne) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (J) => {
        J.preventDefault(), Zt(ne);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].name : V()[0],
      onChange: (J) => {
        vt(ne, "name", J.target.value);
      }
    },
    V().map((J) => /* @__PURE__ */ i.createElement("option", null, J))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].series : "",
      onChange: (J) => {
        vt(ne, "series", J.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "Select series"),
    e.series.map((J) => /* @__PURE__ */ i.createElement("option", null, J.dataKey))
  )), /* @__PURE__ */ i.createElement(Ye, { value: e.columns[ne].label, section: "columns", subsection: ne, fieldName: "label", label: "Label", updateField: Re }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(Ye, { value: e.columns[ne].prefix, section: "columns", subsection: ne, fieldName: "prefix", label: "Prefix", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { value: e.columns[ne].suffix, section: "columns", subsection: ne, fieldName: "suffix", label: "Suffix", updateField: Re }), /* @__PURE__ */ i.createElement(Ye, { type: "number", value: e.columns[ne].roundToPlace, section: "columns", subsection: ne, fieldName: "roundToPlace", label: "Round", updateField: Re })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].commas,
      onChange: (J) => {
        vt(ne, "commas", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].dataTable,
      onChange: (J) => {
        vt(ne, "dataTable", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].showInViz,
      onChange: (J) => {
        vt(ne, "showInViz", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].tooltips || !1,
      onChange: (J) => {
        rr(ne, J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlot || !1,
      onChange: (J) => {
        vt(ne, "forestPlot", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlotAlignRight || !1,
      onChange: (J) => {
        vt(ne, "forestPlotAlignRight", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[ne].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[ne].forestPlotStartingPoint || 0,
      onChange: (J) => {
        vt(ne, "forestPlotStartingPoint", J.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault(), pn(on.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.legend.additionalCategories];
        Pe.splice(J, 1), Re("legend", null, "additionalCategories", Pe);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Ye,
    {
      value: ne,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (ce, Pe, Rt, nn) => {
        const Un = [...e.legend.additionalCategories];
        Un[J] = nn, Re(ce, Pe, Rt, Un);
      }
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.legend.additionalCategories || []];
        J.push(""), Re("legend", null, "additionalCategories", J);
      }
    },
    "Add Category"
  )))), I() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Legend")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(gt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Re }), /* @__PURE__ */ i.createElement(
    gt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Re,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(gt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Re }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(kt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Re, options: Ee(n) }), /* @__PURE__ */ i.createElement(kt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[ne, , J, ce]) => ar(ne, J, ce), options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(gt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Re }), Y && e.legend.behavior === "isolate" && !yr && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${ne}-${J}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Pe = [...e.legend.seriesHighlight];
        Pe.splice(J, 1), Re("legend", null, "seriesHighlight", Pe), Pe.length || R();
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.legend.seriesHighlight[J],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ce) => {
        const Pe = [...e.legend.seriesHighlight];
        Pe.includes(ce.target.value) || (Pe[J] = ce.target.value, dr([...Pe]));
      },
      options: vr()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = vr(), ce = [...e.legend.seriesHighlight];
        if (ce.length < J.length) {
          const [Rt] = J.filter((nn) => !ce.includes(nn));
          ce.push(Rt), dr([...ce]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Ye, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Re }), /* @__PURE__ */ i.createElement(kt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Re, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(gt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Re }), /* @__PURE__ */ i.createElement(gt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Re })), /* @__PURE__ */ i.createElement(Ye, { type: "textarea", value: e.legend.description, updateField: Re, section: "legend", fieldName: "description", label: "Legend Description" }))), Me() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Filters")), /* @__PURE__ */ i.createElement(Nn, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: Re,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Et, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((ne, J) => ne.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: J }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Pt(J);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.columnName,
      onChange: (ce) => {
        bt("columnName", J, ce.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    Ke().map((ce, Pe) => /* @__PURE__ */ i.createElement("option", { value: ce, key: Pe }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: ne.showDropdown === void 0 ? !0 : ne.showDropdown,
      onChange: (ce) => {
        bt("showDropdown", J, ce.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.filterStyle,
      onChange: (ce) => {
        bt("filterStyle", J, ce.target.value);
      }
    },
    Nt.map((ce, Pe) => /* @__PURE__ */ i.createElement("option", { key: `filter-style-${Pe}`, value: ce }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.label,
      onChange: (ce) => {
        bt("label", J, ce.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.setByQueryParameter,
      onChange: (ce) => {
        bt("setByQueryParameter", J, ce.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: ne.order ? ne.order : "asc", onChange: (ce) => bt("order", J, ce.target.value) }, Lt.map((ce, Pe) => /* @__PURE__ */ i.createElement("option", { value: ce.value, key: `filter-${Pe}` }, ce.label))), ne.order === "cust" && /* @__PURE__ */ i.createElement(Fh, { onDragEnd: ({ source: ce, destination: Pe }) => qt(ce.index, Pe.index, J, e.filters[J]) }, /* @__PURE__ */ i.createElement($h, { droppableId: "filter_order" }, (ce) => {
    var Pe;
    return /* @__PURE__ */ i.createElement("ul", { ...ce.droppableProps, className: "sort-list", ref: ce.innerRef, style: { marginTop: "1em" } }, (Pe = e.filters[J]) == null ? void 0 : Pe.values.map((Rt, nn) => /* @__PURE__ */ i.createElement(ym, { key: Rt, draggableId: `draggableFilter-${Rt}`, index: nn }, (Un, Rr) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Rr.isDragging ? "currently-dragging" : "", style: an(Rr.isDragging, Un.draggableProps.style), ref: Un.innerRef, ...Un.draggableProps, ...Un.dragHandleProps }, Rt)))), ce.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: An, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(za.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Data Table")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement($y, { config: e, columns: Object.keys(n[0] || {}), updateField: Re, isDashboard: g, isLoadedFromUrl: Ot }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(yy, { loadConfig: t, state: e, convertStateToConfig: xt })))));
}, fm = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, xw = (e) => {
  e.sort((d, g) => d - g);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, n = r ? e.slice(0, t) : e.slice(0, t + 1), a = r ? e.slice(t) : e.slice(t + 1), l = Math.floor(n.length / 2), f = r ? (n[l - 1] + n[l]) / 2 : n[l], s = Math.floor(a.length / 2), c = r ? (a[s - 1] + a[s]) / 2 : a[s];
  return { q1: f, q3: c };
}, bw = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Sw = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Ni = (e, t) => {
  let r = [];
  return t.forEach((n) => {
    let a = !0;
    e.filter((l) => l.type !== "url").forEach((l) => {
      n[l.columnName] != l.active && (a = !1);
    }), a && r.push(n);
  }), r;
}, Ew = [
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
], hm = (e = "#000000", t = !1) => {
  let r = zr(e), n = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, n, r.darken(0.3).hex()];
}, pm = (e, t, r) => {
  var g, y;
  const n = t.position === "bottom" || ["sm", "xs", "xxs"].includes(r), a = e.orientation === "horizontal", l = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, f = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, s = 20, c = (y = e == null ? void 0 : e.brush) == null ? void 0 : y.height;
  let d = 0;
  return !n && a && !e.yAxis.label && (d = Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && !e.isResponsiveTicks && (d = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop + s), !n && a && !e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !a && !n && e.xAxis.label && l && !e.isResponsiveTicks && (d = f ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && l && e.isResponsiveTicks, !a && !n && !e.xAxis.label && l && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !a && !n && e.xAxis.label && !l && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !a && !n && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !a && !n && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !a && !n && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !a && !n && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = -e.xAxis.size + s + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && !l && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${d}px`;
};
const mm = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(e, window.location.origin), a = n.pathname, l = n.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const s = r.exec(l);
  return s && s[1] ? s[1] : "";
};
function qw({ configUrl: e, config: t, isEditor: r = !1, isDebug: n = !1, isDashboard: a = !1, setConfig: l, setEditing: f, hostname: s, link: c, setSharedFilter: d, setSharedFilterValue: g, dashboardConfig: y }) {
  var yn, Pt, bt, An, Pn, bn, Rn, De, Ke;
  const v = new vm(), [k, E] = se.useState(!0), [M, T] = se.useState(null), [m, R] = se.useState({}), [O, N] = se.useState(m.data || []), [_, D] = se.useState(void 0), [B, H] = se.useState(void 0), [U, X] = se.useState(t && ((Pt = (yn = t == null ? void 0 : t.legend) == null ? void 0 : yn.seriesHighlight) != null && Pt.length) ? [...(bt = t == null ? void 0 : t.legend) == null ? void 0 : bt.seriesHighlight] : []), [Q, K] = se.useState("lg"), [oe, fe] = se.useState([]), [W, ie] = se.useState(), [re, ue] = se.useState(), [ee, Y] = se.useState(!1), [te, I] = se.useState([]), [ge] = se.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  se.useRef(/* @__PURE__ */ new Map()), se.useRef(), n && console.log("Chart config, isEditor", m, r);
  let { legend: ve, title: ke, description: Ne, visualizationType: je } = m;
  r && (!ke || ke === "") && (ke = "Chart Title"), m.table && (!((An = m.table) != null && An.label) || ((Pn = m.table) == null ? void 0 : Pn.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Qe, lineDatapointClass: Oe, contentClasses: ye, sparkLineStyles: we } = By(m), le = m.showSidebar ? "#legend" : m != null && m.title ? `#dataTableSection__${m.title.replace(/\s/g, "")}` : "#dataTableSection", Be = async () => {
    var V;
    if (m.dataUrl) {
      const Ee = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Xe = Object.fromEntries(new URLSearchParams(Ee.search)), $e = !1;
      if ((V = m.filters) == null || V.forEach((xt) => {
        xt.type === "url" && Xe[xt.queryParameter] !== decodeURIComponent(xt.active) && (Xe[xt.queryParameter] = xt.active, $e = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !$e)
        return;
      let yt = `${Ee.origin}${Ee.pathname}${Object.keys(Xe).map((xt, Mt) => {
        let Je = Mt === 0 ? "?" : "&";
        return Je += xt + "=", Je += Xe[xt], Je;
      }).join("")}`, ot = [];
      try {
        const xt = mm(Ee.href);
        xt === "csv" || Ph(yt) ? ot = await fetch(yt).then((Mt) => Mt.text()).then((Mt) => Lh.parse(Mt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : xt === "json" || Rh(yt) ? ot = await fetch(yt).then((Mt) => Mt.json()) : ot = [];
      } catch {
        console.error(`Cannot parse URL: ${yt}`), ot = [];
      }
      m.dataDescription && (ot = v.autoStandardize(ot), ot = v.developerStandardize(ot, m.dataDescription)), Object.assign(ot, { urlFiltered: !0 }), He({ ...m, runtimeDataUrl: yt, data: ot, formattedData: ot }), ot && (N(ot), D(ot), H(Ni(m.filters, ot)));
    }
  }, Me = async () => {
    let V = t || await (await fetch(e)).json(), Ee = V.data || [];
    const Xe = V.filters ? V.filters.filter((ot) => ot.type === "url").length > 0 : !1;
    if (V.dataUrl && !Xe)
      try {
        const ot = mm(V.dataUrl);
        (ot === "csv" || Ph(V.dataUrl)) && (Ee = await fetch(V.dataUrl + `?v=${jh()}`).then((xt) => xt.text()).then((xt) => (xt = xt.replace(/(".*?")|,/g, (...Je) => Je[1] || "|"), xt = xt.replace(/["]+/g, ""), Lh.parse(xt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (ot === "json" || Rh(V.dataUrl)) && (Ee = await fetch(V.dataUrl + `?v=${jh()}`).then((xt) => xt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${V.dataUrl}`), Ee = [];
      }
    V.dataDescription && (Ee = v.autoStandardize(Ee), Ee = v.developerStandardize(Ee, V.dataDescription)), Ee && (N(Ee), D(Ee)), V !== void 0 && V.table !== void 0 && (!V.table || !V.table.showVertical) && (V.table = V.table || {}, V.table.showVertical = !1);
    let $e = { ...Gd, ...V };
    $e.filters && $e.filters.forEach((ot, xt) => {
      const Mt = vy(ot);
      Mt && ($e.filters[xt].active = Mt);
    }), $e.visualizationType === "Box Plot" && ($e.legend.hide = !0), $e.table.show === void 0 && ($e.table.show = !a), $e.series.map((ot) => {
      ot.tooltip || (ot.tooltip = !0), ot.axis || (ot.axis = "Left");
    }), !$e.data && Ee && ($e.data = Ee);
    const yt = { ...await Vy($e) };
    He(yt, Ee);
  }, He = (V, Ee) => {
    var ot, xt, Mt;
    let Xe = Ee || O;
    Object.keys(Gd).forEach((Je) => {
      V[Je] && typeof V[Je] == "object" && !Array.isArray(V[Je]) && (V[Je] = { ...Gd[Je], ...V[Je] });
    });
    let $e = [];
    if (V.exclusions && V.exclusions.active)
      if (V.xAxis.type === "categorical" && ((ot = V.exclusions.keys) == null ? void 0 : ot.length) > 0)
        $e = Xe.filter((Je) => !V.exclusions.keys.includes(Je[V.xAxis.dataKey]));
      else if (Sn(V.xAxis) && (V.exclusions.dateStart || V.exclusions.dateEnd) && V.xAxis.dateParseFormat) {
        const Je = (pt) => new Date(pt).getTime();
        let $t = Je(V.exclusions.dateStart), It = Je(V.exclusions.dateEnd) + 86399999, en = typeof $t !== void 0 && isNaN($t) === !1, tn = typeof It !== void 0 && isNaN(It) === !1;
        en && tn ? $e = Xe.filter((pt) => Je(pt[V.xAxis.dataKey]) >= $t && Je(pt[V.xAxis.dataKey]) <= It) : en ? $e = Xe.filter((pt) => Je(pt[V.xAxis.dataKey]) >= $t) : tn && ($e = Xe.filter((pt) => Je(pt[V.xAxis.dataKey]) <= It));
      } else
        $e = Ee || O;
    else
      $e = Ee || O;
    D($e);
    let yt = [];
    if (V.filters && (V.filters.forEach((Je, $t) => {
      let It = [];
      It = Je.orderedValues || qe(Je.columnName, $e).sort(Je.order === "desc" ? Sw : bw), V.filters[$t].values = It, V.filters[$t].active = V.filters[$t].active || It[0], V.filters[$t].filterStyle = V.filters[$t].filterStyle ? V.filters[$t].filterStyle : "dropdown";
    }), yt = Ni(V.filters, $e), H(yt)), V.xAxis.type === "date-time" && V.barThickness > 0.1 ? V.barThickness = 0.035 : V.xAxis.type !== "date-time" && V.barThickness < 0.1 && (V.barThickness = 0.35), V.runtime = {}, V.runtime.seriesLabels = {}, V.runtime.seriesLabelsAll = [], V.runtime.originalXAxis = V.xAxis, V.visualizationType === "Pie" ? (V.runtime.seriesKeys = (Ee || Xe).map((Je) => Je[V.xAxis.dataKey]), V.runtime.seriesLabelsAll = V.runtime.seriesKeys) : V.runtime.seriesKeys = V.series ? V.series.map((Je) => (V.runtime.seriesLabels[Je.dataKey] = Je.name || Je.label || Je.dataKey, V.runtime.seriesLabelsAll.push(Je.name || Je.dataKey), Je.dataKey)) : [], V.visualizationType === "Box Plot" && V.series) {
      let Je = $e ? $e.map((Ot) => Ot[V.xAxis.dataKey]) : Xe.map((Ot) => Ot[V.xAxis.dataKey]), $t = $e ? $e.map((Ot) => {
        var Wt;
        return Number(Ot[(Wt = V == null ? void 0 : V.series[0]) == null ? void 0 : Wt.dataKey]);
      }) : Xe.map((Ot) => {
        var Wt;
        return Number(Ot[(Wt = V == null ? void 0 : V.series[0]) == null ? void 0 : Wt.dataKey]);
      });
      const en = function(Ot) {
        return Ot.filter(function(Wt, Vt, hn) {
          return hn.indexOf(Wt) === Vt;
        });
      }(Je);
      let tn = [];
      const pt = [];
      if (!en)
        return;
      en.forEach((Ot) => {
        try {
          if (!Ot)
            throw new Error("No groups resolved in box plots");
          let Wt = $e ? $e.filter((Ut) => Ut[V.xAxis.dataKey] === Ot) : Xe.filter((Ut) => Ut[V.xAxis.dataKey] === Ot), Vt = Wt.map((Ut) => {
            var sn;
            return Number(Ut[(sn = V == null ? void 0 : V.series[0]) == null ? void 0 : sn.dataKey]);
          }), hn = Vt.sort((Ut, sn) => Ut - sn);
          const vn = xw(hn);
          if (!Wt)
            throw new Error("boxplots dont have data yet");
          if (!pt)
            throw new Error("boxplots dont have plots yet");
          V.boxplot.firstQuartilePercentage === "" && (V.boxplot.firstQuartilePercentage = 0), V.boxplot.thirdQuartilePercentage === "" && (V.boxplot.thirdQuartilePercentage = 0);
          const on = vn.q1, pn = vn.q3, Zt = pn - on, vt = on - (pn - on) * 1.5, un = pn + (pn - on) * 1.5, kn = hn.filter((Ut) => Ut < vt || Ut > un);
          let ln = Vt;
          ln = ln.filter((Ut) => !kn.includes(Ut));
          const Xn = us(Vt) || 0, Ln = ss([Xn, on - 1.5 * Zt]);
          pt.push({
            columnCategory: Ot,
            columnMax: us([ss(Vt), on + 1.5 * Zt]),
            columnThirdQuartile: Number(pn).toFixed(V.dataFormat.roundTo),
            columnMedian: Number(Gy(Vt)).toFixed(V.dataFormat.roundTo),
            columnFirstQuartile: on.toFixed(V.dataFormat.roundTo),
            columnMin: Ln,
            columnTotal: Vt.reduce((Ut, sn) => Ut + sn, 0),
            columnSd: Number(Yy(Vt)).toFixed(V.dataFormat.roundTo),
            columnMean: Number(qy(Vt)).toFixed(V.dataFormat.roundTo),
            columnIqr: Number(Zt).toFixed(V.dataFormat.roundTo),
            columnLowerBounds: Ln,
            columnUpperBounds: us([ss(hn), on + 1.5 * Zt]),
            columnOutliers: kn,
            values: Vt,
            nonOutlierValues: ln
          });
        } catch (Wt) {
          console.error("COVE: ", Wt.message);
        }
      }), tn = JSON.parse(JSON.stringify(pt)), tn.map((Ot) => (Ot.columnIqr = void 0, Ot.nonOutlierValues = void 0, Ot.columnLowerBounds = void 0, Ot.columnUpperBounds = void 0, null)), V.boxplot.allValues = $t, V.boxplot.categories = en, V.boxplot.plots = pt, V.boxplot.tableData = tn;
    }
    V.visualizationType === "Combo" && V.series && (V.runtime.barSeriesKeys = [], V.runtime.lineSeriesKeys = [], V.runtime.areaSeriesKeys = [], V.runtime.forecastingSeriesKeys = [], V.series.forEach((Je) => {
      Je.type === "Area Chart" && V.runtime.areaSeriesKeys.push(Je), Je.type === "Forecasting" && V.runtime.forecastingSeriesKeys.push(Je), Je.type === "Bar" && V.runtime.barSeriesKeys.push(Je.dataKey), (Je.type === "Line" || Je.type === "dashed-sm" || Je.type === "dashed-md" || Je.type === "dashed-lg") && V.runtime.lineSeriesKeys.push(Je.dataKey), Je.type === "Combo" && (Je.type = "Bar");
    })), V.visualizationType === "Forecasting" && V.series && (V.runtime.forecastingSeriesKeys = [], V.series.forEach((Je) => {
      Je.type === "Forecasting" && V.runtime.forecastingSeriesKeys.push(Je);
    })), V.visualizationType === "Area Chart" && V.series && (V.runtime.areaSeriesKeys = [], V.series.forEach((Je) => {
      V.runtime.areaSeriesKeys.push({ ...Je, type: "Area Chart" });
    })), V.visualizationType === "Bar" && V.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(V.visualizationType) ? (V.runtime.xAxis = V.yAxis.yAxis ? V.yAxis.yAxis : V.yAxis, V.runtime.yAxis = V.xAxis.xAxis ? V.xAxis.xAxis : V.xAxis, V.runtime.horizontal = !1, V.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(V.visualizationType) ? (V.runtime.xAxis = V.xAxis, V.runtime.yAxis = V.yAxis, V.runtime.horizontal = !1, V.orientation = "vertical") : (V.runtime.xAxis = V.xAxis, V.runtime.yAxis = V.yAxis, V.runtime.horizontal = !1), V.runtime.uniqueId = Date.now(), V.runtime.editorErrorMessage = V.visualizationType === "Pie" && !V.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", V.runtime.editorErrorMessage = V.visualizationType === "Sankey" && !V.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (xt = V.legend.seriesHighlight) != null && xt.length && X((Mt = V.legend) == null ? void 0 : Mt.seriesHighlight), R(V);
  }, qe = (V, Ee = this.state.data) => {
    const Xe = [];
    return Ee.forEach(($e) => {
      const yt = $e[V];
      yt && Xe.includes(yt) === !1 && Xe.push(yt);
    }), Xe;
  }, et = (V, Ee) => {
    let Xe = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, $e = parseFloat(V[Xe]), yt = parseFloat(Ee[Xe]);
    return $e < yt ? m.sortData === "ascending" ? 1 : -1 : $e > yt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, it = new my((V) => {
    for (let Ee of V) {
      let { width: Xe, height: $e } = Ee.contentRect, yt = gy(Xe), ot = 32, xt = 350;
      K(yt), r && (Xe = Xe - xt), Ee.target.dataset.lollipop === "true" && (Xe = Xe - 2.5), Xe = Xe - ot, fe([Xe, $e]);
    }
  }), st = se.useCallback((V) => {
    V !== null && it.observe(V), ue(V);
  }, []);
  function at(V) {
    return Object.keys(V).length === 0;
  }
  se.useEffect(() => {
    Me();
  }, []), se.useEffect(() => {
    Be();
  }, [JSON.stringify(m.filters)]), se.useEffect(() => {
    re && !at(m) && !ee && (Iy("cove_loaded", { config: m }), Y(!0));
  }, [re, m]), se.useEffect(() => {
    const V = (Ee) => {
      let Xe = [];
      Xe.push(Ee.detail), ie(Xe);
    };
    return Hy("cove_filterData", (Ee) => V(Ee)), () => {
      Wy("cove_filterData", V);
    };
  }, [m]), se.useEffect(() => {
    if (W && W[0] && !W[0].hasOwnProperty("active")) {
      let Ee = { ...m };
      delete Ee.filters, R(Ee), H(Ni(W, _));
    }
    if (W && W.length > 0 && W.length > 0 && W[0].hasOwnProperty("active")) {
      let V = { ...m, filters: W };
      R(V), H(Ni(W, _));
    }
  }, [W]), t && se.useEffect(() => {
    Me();
  }, [t.data]), se.useEffect(() => {
    var V;
    if (O && m.xAxis && ((V = m.runtime) != null && V.seriesKeys)) {
      const Ee = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Xe = { ...cr, ...Wu };
      let $e = m.customColors || Xe[Ee], yt = m.runtime.seriesKeys.length, ot;
      for (; yt > $e.length; )
        $e = $e.concat($e);
      $e = $e.slice(0, yt), ot = () => Hf({
        domain: m.runtime.seriesLabelsAll,
        range: $e,
        unknown: null
      }), T(ot), E(!1);
    }
    m && O && m.sortData && O.sort(et);
  }, [m, O]);
  const Ze = (V) => {
    if (U.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      Ie();
      return;
    }
    const Ee = [...U];
    let Xe = V.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach(($e) => {
      m.runtime.seriesLabels[$e] === V.datum && (Xe = $e);
    }), Ee.indexOf(Xe) !== -1 ? Ee.splice(Ee.indexOf(Xe), 1) : Ee.push(Xe), X(Ee);
  }, Ie = () => {
    try {
      const V = document.getElementById("legend");
      if (!V)
        throw new Error("No legend available to set previous focus on.");
      V.focus();
    } catch (V) {
      console.error("COVE:", V.message);
    }
    X([]);
  }, Fe = m.orientation === "horizontal" ? "yAxis" : "xAxis", dt = (V, Ee = !0) => {
    let Xe = rg(m.runtime[Fe].dateParseFormat)(V);
    return Xe || (Ee && (m.runtime.editorErrorMessage = `Error parsing date "${V}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Ue = (V) => Jd(m.runtime[Fe].dateDisplayFormat)(V), Ge = (V) => Jd(m.tooltips.dateDisplayFormat)(V);
  function ut(V, Ee) {
    const $e = document.createElement("canvas").getContext("2d");
    if (!$e) {
      console.error("2d context not found");
      return;
    }
    return $e.font = Ee || getComputedStyle(document.body).font, Math.ceil($e.measureText(V).width);
  }
  const ft = (V, Ee, Xe = !1, $e, yt, ot) => {
    if (isNaN(V) || !V)
      return V;
    const xt = V < 0;
    (Ee === void 0 || !Ee) && (Ee = "left"), xt && (V = Math.abs(V));
    let {
      dataFormat: { commas: Mt, abbreviated: Je, roundTo: $t, prefix: It, suffix: en, rightRoundTo: tn, bottomRoundTo: pt, rightPrefix: Ot, rightSuffix: Wt, bottomPrefix: Vt, bottomSuffix: hn, bottomAbbreviated: vn }
    } = m;
    String(V).indexOf(",") !== -1 && (V = V.replaceAll(",", ""));
    let on = V, pn = {
      useGrouping: !!Mt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Ee === "left" || Ee === void 0) {
      let un;
      ot !== void 0 ? un = ot ? Number(ot) : 0 : un = $t ? Number($t) : 0, pn = {
        useGrouping: ot ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: un,
        maximumFractionDigits: un
      };
    }
    Ee === "right" && (pn = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: tn ? Number(tn) : 0,
      maximumFractionDigits: tn ? Number(tn) : 0
    });
    const Zt = () => m.forestPlot.type === "Logarithmic" && !pt ? 2 : Number(pt) ? Number(pt) : 0;
    if (Ee === "bottom" && (pn = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: Zt(),
      maximumFractionDigits: Zt()
    }), V = Vh(V), isNaN(V))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${on}. Try reviewing your data and selections in the Data Series section.`, on;
    if (!m.dataFormat)
      return V;
    if (m.dataCutoff) {
      let un = Vh(m.dataCutoff);
      V < un && (V = un);
    }
    Ee === "left" && Mt && Je && Xe || Ee === "bottom" && Mt && Je && Xe ? V = V : V = V.toLocaleString("en-US", pn);
    let vt = "";
    return Je && Ee === "left" && Xe && (V = fm(parseFloat(V))), vn && Ee === "bottom" && Xe && (V = fm(parseFloat(V))), $e && Ee === "left" ? vt = $e + vt : It && Ee === "left" && (vt += It), Ot && Ee === "right" && (vt += Ot), Vt && Ee === "bottom" && (vt += Vt), vt += V, yt && Ee === "left" ? vt += yt : en && Ee === "left" && (vt += en), Wt && Ee === "right" && (vt += Wt), hn && Ee === "bottom" && (vt += hn), xt && (vt = "-" + vt), String(vt);
  }, At = {
    "Paired Bar": /* @__PURE__ */ i.createElement(qr, null),
    Forecasting: /* @__PURE__ */ i.createElement(qr, null),
    Bar: /* @__PURE__ */ i.createElement(qr, null),
    Line: /* @__PURE__ */ i.createElement(qr, null),
    Combo: /* @__PURE__ */ i.createElement(qr, null),
    Pie: /* @__PURE__ */ i.createElement(ZS, null),
    "Box Plot": /* @__PURE__ */ i.createElement(qr, null),
    "Area Chart": /* @__PURE__ */ i.createElement(qr, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(qr, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(qr, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(qr, null)
  }, Yt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, qt = (V, Ee) => {
    if (V === null || V === "" || V === void 0)
      return "";
    if (typeof V == "string" && V.length > 0 && m.legend.type === "equalnumber")
      return V;
    let Xe = V, $e;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(yt) {
      var ot = m.columns[yt];
      ot.name === Ee && ($e = ot);
    }), $e === void 0 && ($e = m.type === "chart" ? m.dataFormat : m.primary, $e.useCommas = $e.commas, $e.roundToPlace = $e.roundTo ? $e.roundTo : ""), $e) {
      let yt = !1, ot = 0;
      Number(V) && ($e.roundToPlace >= 0 && (yt = $e.roundToPlace ? $e.roundToPlace !== "" || $e.roundToPlace !== null : !1, ot = $e.roundToPlace ? Number($e.roundToPlace) : 0, $e.hasOwnProperty("roundToPlace") && yt && (Xe = Number(V).toFixed(ot))), $e.hasOwnProperty("useCommas") && $e.useCommas === !0 && (Xe = Number(V).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: yt ? ot : 0,
        maximumFractionDigits: yt ? ot : 5
      }))), Xe = ($e.prefix || "") + Xe + ($e.suffix || "");
    }
    return Xe;
  }, Lt = (V) => {
    try {
      if (!V)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Ee = cr[m.color] || cr.bluegreenreverse;
        return hm(Ee[3]);
      }
      return hm();
    } catch (Ee) {
      console.error("COVE: ", Ee);
    }
  }, Nt = (V) => {
    var Ee;
    return Array.isArray(V) ? m.visualizationType === "Forecasting" ? V : (Ee = m == null ? void 0 : m.xAxis) != null && Ee.dataKey ? v.cleanData(V, m.xAxis.dataKey) : V : [];
  }, Gt = (V) => V;
  let an = /* @__PURE__ */ i.createElement(Py, null);
  if (!k) {
    const V = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    an = /* @__PURE__ */ i.createElement(i.Fragment, null, r && /* @__PURE__ */ i.createElement(vw, null), !Yt() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(by, { showTitle: m.showTitle, isDashboard: a, title: ke, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: le }, "Skip Over Chart Container"), m.filters && !W && /* @__PURE__ */ i.createElement(Ty, { config: m, setConfig: R, setFilteredData: H, filteredData: B, excludedData: _, filterData: Ni, dimensions: oe }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, Fi(m.introText)), /* @__PURE__ */ i.createElement(
      "div",
      {
        style: { marginBottom: pm(m, ve, Q) },
        className: `chart-container  p-relative ${m.legend.position === "bottom" ? "bottom" : ""}${m.legend.hide ? " legend-hidden" : ""}${Oe}${Qe} ${ye.join(" ")} ${n ? "debug" : ""}`
      },
      m.visualizationType !== "Spark Line" && At[m.visualizationType],
      m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Fi(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...we } }, /* @__PURE__ */ i.createElement(lp, null, (Ee) => /* @__PURE__ */ i.createElement(Gk, { width: Ee.width, height: Ee.height }))), Ne && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Fi(Ne))),
      m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(lp, { "aria-hidden": "true" }, (Ee) => /* @__PURE__ */ i.createElement(CE, { width: Ee.width, height: Ee.height })),
      !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(Zk, null)
    ), a && m.table && m.table.show && m.table.showDataTableLink ? V : c && c, Ne && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Fi(Ne)), /* @__PURE__ */ i.createElement(Ad.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Ad.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: ge }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Ad.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: ge })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Ay,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (Rn = (bn = m == null ? void 0 : m.data) == null ? void 0 : bn[0]) == null ? void 0 : Rn.tableData : m.table.customTableConfig ? Ni(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Ke = (De = m == null ? void 0 : m.data) == null ? void 0 : De[0]) == null ? void 0 : Ke.tableData : v.applySuppression(B || _, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: qt,
        displayGeoName: Gt,
        applyLegendToRow: Lt,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: ke,
        viewport: Q,
        tabbingId: le,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, Fi(m.footnotes))));
  }
  const jt = {
    capitalize: (V) => V.charAt(0).toUpperCase() + V.slice(1),
    computeMarginBottom: pm,
    getXAxisData: (V) => Sn(m.runtime.xAxis) ? dt(V[m.runtime.originalXAxis.dataKey]).getTime() : V[m.runtime.originalXAxis.dataKey],
    getYAxisData: (V, Ee) => V[Ee],
    config: m,
    setConfig: R,
    rawData: O ?? {},
    excludedData: _,
    transformedData: Nt(B || _),
    // do this right before passing to components
    tableData: B || _,
    // do not clean table data
    unfilteredData: O,
    seriesHighlight: U,
    colorScale: M,
    dimensions: oe,
    currentViewport: Q,
    parseDate: dt,
    formatDate: Ue,
    formatTooltipsDate: Ge,
    formatNumber: ft,
    loading: k,
    updateConfig: He,
    colorPalettes: cr,
    isDashboard: a,
    setParentConfig: l,
    missingRequiredSections: Yt,
    setEditing: f,
    setFilteredData: H,
    handleChartAriaLabels: $g,
    highlight: Ze,
    highlightReset: Ie,
    legend: ve,
    setSeriesHighlight: X,
    dynamicLegendItems: te,
    setDynamicLegendItems: I,
    filterData: Ni,
    imageId: ge,
    handleLineType: kf,
    lineOptions: Ew,
    isNumber: Iu,
    getTextWidth: ut,
    twoColorPalette: Wu,
    isEditor: r,
    isDebug: n,
    setSharedFilter: d,
    setSharedFilterValue: g,
    dashboardConfig: y,
    debugSvg: n
  }, Ft = ["cdc-open-viz-module", "type-chart", `${Q}`, `font-${m.fontSize}`, `${m.theme}`];
  return m.visualizationType === "Spark Line" && Ft.push("type-sparkline"), r && Ft.push("spacing-wrapper"), r && Ft.push("isEditor"), /* @__PURE__ */ i.createElement(wt.Provider, { value: jt }, /* @__PURE__ */ i.createElement("div", { className: `${Ft.join(" ")}`, ref: st, "data-lollipop": m.isLollipopChart, "data-download-id": ge }, an));
}
export {
  qw as C
};
